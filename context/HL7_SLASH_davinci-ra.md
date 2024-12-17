// File: input/pagecontent/capabilities.md

-  [Risk Adjustment Reporting Client Capability Statement](CapabilityStatement-ra-reporting-client.html)

This profile defines the expected capabilities of a Da Vinci Risk Adjustment Reporting Client when conforming to the Da Vinci Risk Adjustment Implementation Guide for interactions between Reporting Clients and Reporting Servers. Clients are the actors making the request for Risk Adjustment Coding Gap Reports for patient(s) and for Risk Adjustment Models that are available on the Server.

- [Risk Adjustment Reporting Server Capability Statement](CapabilityStatement-ra-reporting-server.html)

This profile defines the expected capabilities of a Da Vinci Risk Adjustment Reporting Server when conforming to the Da Vinci Risk Adjustment Implementation Guide for interactions between Reporting Clients and Reporting Servers. Servers are the actors receiving the request for Risk Adjustment Coding Gap Reports for patient(s) and for Risk Adjustment Models that are available on the Server.

- [Risk Adjustment Data Submission Client Capability Statement](CapabilityStatement-ra-data-submission-client.html)

This profile defines the expected capabilities of a Da Vinci Risk Adjustment Data Submission Client when conforming to the Da Vinci Risk Adjustment Implementation Guide for interactions between Data Submission Clients and Data Submission Servers. Clients are the actors creating and submitting the Risk Adjustment Data Exchange Measure Reports using the $submit-data operation to the Server.

- [Risk Adjustment Data Submission Server Capability Statement](CapabilityStatement-ra-data-submission-server.html)

This profile defines the expected capabilities of a Da Vinci Risk Adjustment Data Submission Server when conforming to the Da Vinci Risk Adjustment Implementation Guide for interactions between Clients and Servers. Servers are the actors receiving and processing the Risk Adjustment Data Exchange MeasureReports submitted by the Client. 

{% include link-list.md %}



---

// File: input/pagecontent/cc-remark.md

Once a [Risk Adjustment Coding Gap Report] is generated, a [Condition Category Remark] can be added to the MeasureReport. Here are some ways this remark may be used:
 - added by the Payer or an entity working on behalf of the Payer with additional information about the Condition Category. An example might be adding the qualifying diagnosis codes (`qualifyingDxCode`) when proprietary risk adjustment models are used by the Payer and the mappings between ICD-10 codes and Condition Categories as defined by the models are not readily available to the Provider. 
 - added by a Risk Adjustment Coder who reviews the chart prior to the Provider seeing the patient. This Coder might be working on behalf of the Payer or the Provider or both.
 - added by the provider's Electronic Medical Record (EMR) if a coding gap is not appropriate to be shown to the type of provider seeing the patient or if the EMR cannot process the coding gaps in the Risk Adjustment Coding Gap Report.
 - added by the Provider at the time the patient is seen to indicate to the Payer that an action was taken.

Note: The [Condition Category Remark] extension is not intended to change the status of a Condition Category gap. To change the coding gap status, follow the [Submit Data to Payer] section of this guidance. Note that both a Condition Category remark and [Submit Data to Payer] can be generated at the time the Provider sees the patient if that is appropriate.

### The Condition Category Remark Extension
This [Condition Category Remark] extension is added to the [Risk Adjustment Coding Gap Report] within the `MeasureReport.group` element. This allows for a remark be added at the Condition Category code level. The Condition Category Remark is a Complex extension and can repeat; it has several elements:
- A remark must have at least an `author`, an `authorOrganization`, or an `authorSoftware`
    - `author` indicates the person who provided the remark. It can be an identifier such as an NPI or a person's name.
    - `authorOrganization` which can be an identifier such as a TIN or NPI for the organization or can be a text name of the Organization.
    - `authorSoftware` is the software system that generated the remark either an identifier for the system or a system name.
- `authorDatetime` when the remark was made
- `text` a free text remark
- `code` a coded remark indicating what happened at the time of the remark. For example, when a provider sees the patient and decides a condition is present, therefore adds a remark using the code `assessed-present`. The value set binding for the `code` is extensible, which includes `assessed-present`, `assessed-not-present`, `in-progress`, `not-assessed`, `not-presented`, `deferred`, and `not-ingested`.
- `reasonCode` coded reason for why remark is added. The value set which is extensible includes `never-had-condition`, `inactive-condition`, and `inapplicable-gap`.
- `relatedDataIentifier` an identifier field that can be used to link to a claim or document such as a Continuity of Care Document (CCD) that the Provider is sending via another method or transaction.
- `qualifyingDxCode` diagnoses that would be classified under this Condition Category as defined by the risk adjustment model. This would be added by the Payer or an entity working on behalf of the Payer.
- `qualifyingDxList`: a list of diagnoses classified under this Condition Category as defined by the risk adjustment model provided as a string. Added by the Payer or an entity working on behalf of the Payer. 

The Provider's system being used SHALL NOT change any other part of the original Risk Adjustment Coding Gap Report and can only add the [Condition Category Remark] to the appropriate `MeasureReport.group`(s).  If a provider wants to share data with the Payer in order to change a coding gap status, they should use the [Submit Data to Payer] process.  

If a Payer or someone acting on behalf of the Payer like a Risk Adjustment Coder is adding a remark to the report, they would update the report on their server.

{% include img-portrait.html img="report-cc-remark-overview-payer.png" caption="Figure 2.5-1 Payer Adds Remark to Condition Category Overview"%}

If a Provider, the Provider's EMR, or a Risk Adjustment Coder working on their behalf adds a remark to the Risk Adjustment Coding Gap Report, the [Condition Category Remark] can be added to the Report with the [PATCH](https://www.hl7.org/fhir/http.html#patch) process or the entire MeasureReport with the added [Condition Category Remark] extension(s) can be POSTed to the Provider's system.

{% include img-portrait.html img="report-cc-remark-overview-provider.png" caption="Figure 2.5-2 Provider Add Remark to Condition Category Overview"%}

{% include img-portrait.html img="report-cc-remark-workflow.png" caption="Figure 2.5-3 Report Condition Category Remark Workflow when the Provider adds the Remark"%}

### Provider Handling of the Condition Category Remark

The Provider may choose to send the Condition Category remark only to the Payer using a light weight approach rather than sending the entire MeasureReport resource. They can do this using the [PATCH](https://www.hl7.org/fhir/http.html#patch) operation.

A [RA Parameters ccRemark Patch Profile] is defined to specify the structures of using the Parameter resource to send the remark using the PATCH operation. 

### Payer Handling of the Condition Category Remark
This implementation guide does not direct any action be taken by the Payer upon receipt of a [Risk Adjustment Coding Gap Report] with added Condition Category remark(s).

After a Payer generates a subsequent [Risk Adjustment Coding Gap Report], in their role as Reporting Server they can choose to include the Condition Category remarks as they see fit. This might include adding the remarks only if received from the same Provider and can include any remarks all the way up to including all Condition Category remarks received from any provider. The Payer is not required to include any Condition Category remarks on subsequently generated [Risk Adjustment Coding Gap Report].

### Usage

#### Sending the full MeasureReport with added Remarks to Payer
`PUT [base]/MeasureReport/[id]`

{% include examplebutton.html example="put-risk-adjustment-coding-gap-report-with-remark-example" b_title = "Click Here to See Example PUT Risk Adjustment Coding Gap Report with Remarks Added" %}

#### Using Patch to update the Payer's MeasureReport with Remarks
`PATCH [base]/MeasureReport/[id]`

{% include examplebutton.html example="patch-risk-adjustment-coding-gap-report-with-remark-example" b_title = "Click Here to See Example PATCH Risk Adjustment Coding Gap Report with Remarks" %}


{% include link-list.md %}




---

// File: input/pagecontent/change-log.md


The Risk Adjustment Implementation Guide was developed under the  [Davinci Project](#)

### Version 2.0.0

- **Applied**: Added references to report generation overview and methods ([FHIR-40988](https://jira.hl7.org/browse/FHIR-40988))
- **Applied**: Fix Group.Type to person ([FHIR-40995](https://jira.hl7.org/browse/FHIR-40995))
- **Applied**: Make Group.actual fixed to true ([FHIR-40996](https://jira.hl7.org/browse/FHIR-40996))
- **Applied**: Remove or better define reason for meta.profile requirement ([FHIR-40997](https://jira.hl7.org/browse/FHIR-40997))
- **Applied**: Need to remove mandatory requirement in meta.profile ([FHIR-40935](https://jira.hl7.org/browse/FHIR-40935))
- **Applied**: Improve wording in remediation guidance ([FHIR-40989](https://jira.hl7.org/browse/FHIR-40989))
- **Applied**: Large number of technical corrections ([FHIR-41140](https://jira.hl7.org/browse/FHIR-41140))
- **Applied**: Add capabilitystatement-expectation extensions ([FHIR-40993](https://jira.hl7.org/browse/FHIR-40993))
- **Applied**: Add more guidance on what is expected in annotations ([FHIR-40991](https://jira.hl7.org/browse/FHIR-40991))
- **Applied**: Provide more guidance on the expectations on Task termination ([FHIR-40990](https://jira.hl7.org/browse/FHIR-40990))
- **Applied**: Add better description of scope/use/limitations/workflows to all Structure Definitions ([FHIR-40998](https://jira.hl7.org/browse/FHIR-40998))
- **Applied**: Added examples tab to all Profiles under FHIR Artifacts ([FHIR-40992](https://jira.hl7.org/browse/FHIR-40992))
- **Applied**: Group annotation extension was renamed to Condition Category Remark (ccRemark).  Also added section to describe how Patch could be used instead of sending back the full report (examples included) ([FHIR-41332](https://jira.hl7.org/browse/FHIR-41332))
- **Applied**: Update to use CMS-HCC v28 as example ([FHIR-48619](https://jira.hl7.org/browse/FHIR-48619))
- **Applied**: Changes to RA Coding Gap MeasureReport based on implementer feedback ([FHIR-48698](https://jira.hl7.org/browse/FHIR-48698))
- **Applied**: Moved Report Generation section on Evaluated-Approach to the dCC page.  Updated related text.  Added description of where Group profile is used to Group Profile page ([FHIR-47810](https://jira.hl7.org/browse/FHIR-47810))
- **Applied**: Removed meta.profile requirement  ([FHIR-40935](https://jira.hl7.org/browse/FHIR-40935))
- **Applied**: Will include MeasureReport id with PATCH Parameters file.  Will add profile for PATCH Parameter.  ([FHIR-444997](https://jira.hl7.org/browse/FHIR-44997))
- **Applied**: Added measurereport-categroy extension to report.  Changed query to use this instead of meta.profile  ([FHIR-45202](https://jira.hl7.org/browse/FHIR-45202))
- **Applied**: Updated Annotation to CC-Remark and updated elements to align with names like author, authorDateTime, etc.  Also added requirement for Author, Organization or Software.  Additionally added new code values as requested by implementers.  Added relatedData Identifier, reasonCode and qualifyingDxCode to Remark  ([FHIR-48732](https://jira.hl7.org/browse/FHIR-48732))
- **Applied**: Added new code for "not ingested" to Remark.code ([FHIR-48770](https://jira.hl7.org/browse/FHIR-48770))
- **Applied**: Added RA Parameters ccRemark Patch Profile ([FHIR-44997](https://jira.hl7.org/browse/FHIR-FHIR-44997))

### Version 2.0.0-ballot

- The 2.0.0-ballot includes the following changes to support new functionalities: 
    - The Guidance page in STU1 is now broken into two pages, General Guidance and Report Generation, with new content   
    - New pages: Report Generation, Report Query, Remediation, and Report Annotation 
    - New profiles and extensions, see [Profiles] 
- It also introduces Digital Condition Category as DRAFT content for review:
    - New page: [Digital Condition Category(dCC)](dcc.html)
    - New operation: [$ra.evaluate-measure]

**Trackers Applied for 2.0.0-ballot**
1. **Applied**: Add "data collection period" to Glossary ([FHIR-37672](https://jira.hl7.org/browse/FHIR-37672))
1. **Applied**: Corrected CMS-HCC model to HHS-HCC model ([FHIR-37745](https://jira.hl7.org/browse/FHIR-37745))
1. **Applied**: Corrected Category misspelling ([FHIR-38205](https://jira.hl7.org/browse/FHIR-38205))
1. **Applied**: Corrected Condition misspelling in Suspect Type Value Set ([FHIR-38206](https://jira.hl7.org/browse/FHIR-38206))
1. **Applied**: Corrected Venn Diagram misspelling in DCC content page ([FHIR-39300](https://jira.hl7.org/browse/FHIR-39300))
1. **Applied**: Make "Example CMS Hierarchical Condition Category Value Set" a true sample ([FHIR-39371](https://jira.hl7.org/browse/FHIR-39371))
1. **Applied**: Remove "Code System" and "Value Set" from names and titles of code system and value set ([FHIR-39374](https://jira.hl7.org/browse/FHIR-39374))

### Version 1.0.0
**Ballot Comments Applied**: **Summary** (**Jira Issue**)
1. **Applied**: Bind example value sets where ever possible instead of creating complicated element definitions ([FHIR-34774](https://jira.hl7.org/browse/FHIR-34774))
1. **Applied**: Missing Must Support, $report comment, & extension comment ([FHIR-35139](https://jira.hl7.org/browse/FHIR-35139))
1. **Applied**: Clarify provider-driven v. payer-driven approach to coding gaps ([FHIR-35324](https://jira.hl7.org/browse/FHIR-35324))
1. **Applied**: Keep group.population and group.stratifier in as optional ([FHIR-35221](https://jira.hl7.org/browse/FHIR-35221))
1. **Applied**: "Hierarchical Condition Categories (HCCs) with less severe HCCs superseded (ignored) if evidence of higher severity HCCs is present" statement is not accurate description. ([FHIR-34773](https://jira.hl7.org/browse/FHIR-34773))
1. **Applied**: Group usage in bundles missing from guidance ([FHIR-34710](https://jira.hl7.org/browse/FHIR-34710))
1. **Applied**: Over-specific precondition for patient resource logical id ([FHIR-34708](https://jira.hl7.org/browse/FHIR-34708))
1. **Applied**: Cardinality confusion for MeasureReport.group.code ([FHIR-34711](https://jira.hl7.org/browse/FHIR-34711))
1. **Applied**: Extracted diagnosis data element missing background ([FHIR-34696](https://jira.hl7.org/browse/FHIR-34696))
1. **Applied**: Figure 1-2 Workflow for Medicare Advantage Population, Phase One misses the preceding step where provider sends initial diagnostic/condition codes before risk coding report is generated. ([FHIR-34778](https://jira.hl7.org/browse/FHIR-34778))
1. **Applied**: plural possessive ([FHIR-34695](https://jira.hl7.org/browse/FHIR-34695))
1. **Applied**: actor names ([FHIR-34698](https://jira.hl7.org/browse/FHIR-34698))
1. **Applied**: Typo in Intro ([FHIR-34501](https://jira.hl7.org/browse/FHIR-34501))

**Other Changes Applied**: **Summary** (**Jira Issue**)
1. **Applied**: Remove extension-reporterGroup extension from RA Coding Gap MeasureReport ([FHIR-36850](https://jira.hl7.org/browse/FHIR-36850))
1. **Applied**: Noted several errors in example data ([FHIR-35773](https://jira.hl7.org/browse/FHIR-35773))
1. **Applied**: US Core 3.1.1 Alignment ([FHIR-35924](https://jira.hl7.org/browse/FHIR-35924))
1. **Applied**: Add language to acknowledge physician burden reduction ([FHIR-35323](https://jira.hl7.org/browse/FHIR-35323))
1. **Applied**: Correct MeasureReport.group.stratifier.code cardinality due to error in base resource ([FHIR-36053](https://jira.hl7.org/browse/FHIR-36053))
1. **Applied**: Title for HCC 18 should be "Diabetes with chronic complications" not "Diabetes without complications" ([FHIR-35774](https://jira.hl7.org/browse/FHIR-35774))
1. **Applied**: Add more details to the description of the evaluatedResource element ([FHIR-35980](https://jira.hl7.org/browse/FHIR-35980))
1. **Applied**: Change to Condition Category (CC) gap instead of HCC gap in SuspectType definitions ([FHIR-36024](https://jira.hl7.org/browse/FHIR-36024))
1. **Applied**: Typo in 1.4 Scope text ([FHIR-35971](https://jira.hl7.org/browse/FHIR-35971))
1. **Applied**: Example MeasureReport01 Group vs EvaluatedResources Data Conflict ([FHIR-37345](https://jira.hl7.org/browse/FHIR-37345))
1. **Applied**: Example MeasureReport01 HCC Code Consistency ([FHIR-37348](https://jira.hl7.org/browse/FHIR-37348))
1. **Applied**: Example MeasureReport04 HCC Code Consistency ([FHIR-37351](https://jira.hl7.org/browse/FHIR-37351))
1. **Applied**: Example MeasureReport06 Links Different Patient Than EvaluatedResource ([FHIR-37354](https://jira.hl7.org/browse/FHIR-37354))
1. **Applied**: Example MeasureReport01 Group vs Condition Data Conflict ([FHIR-37347](https://jira.hl7.org/browse/FHIR-37347))
1. **Applied**: Example MeasureReport02 Group vs Condition Data Conflict ([FHIR-37350](https://jira.hl7.org/browse/FHIR-37350))
1. **Applied**: Example MeasureReport05 Encounter and Condition Link Consistency Issue ([FHIR-37353](https://jira.hl7.org/browse/FHIR-37353))
1. **Applied**: Example MeasureReport04 Group-013 Condition May Not be Applicable ([FHIR-37352](https://jira.hl7.org/browse/FHIR-37352))

### Version 0.1.0
Initial content for STU1 ballot.

{% include link-list.md %}


---

// File: input/pagecontent/dcc-transition-strategy.md


<div class="bg-info" markdown="1">
**This page is under development.**

</div>

### Current State 


### Transition Strategy

#### CSV with Standardized Format as One Possible Approach


{% include link-list.md %}


---

// File: input/pagecontent/dcc.md


**<span style="color: red;">The content about Digital Condition Category is included in this implementation guide as DRAFT.</span>**

This page describes Digital Condition Categories (dCCs), a new concept introduced in this implementation guide. 

###  Benefits of Digital Condition Categories (dCCs)

Complete, accurate, and timely data collection is crucial to the long-term financial stability of Medicare Advantage (MA) and other risk adjustment programs. To ensure reliable financial reporting, diagnostic coding guidelines must be correctly applied to encounter data. In MA, coding intensity refers to observed differences in the prevalence of diagnostic coding between private MA plans and traditional Fee-For-Service Medicare. Both the Centers for Medicare and Medicaid Services (CMS) and the General Accounting Office (GAO) have long been concerned about the coding intensity issue, which resulted in an estimated $12 billion in excess Medicare spending in 2020 alone.<sup>[1](https://www.medpac.gov/wp-content/uploads/2022/03/Mar22_MedPAC_ReportToCongress_Ch12_SEC.pdf)</sup> The GAO estimates that roughly a tenth of Medicare payments to MA plans in 2021 were improper, totaling about $23 billion for the year.

Under risk adjustment, risk adjustment coders (e.g., Certified Risk Adjustment Coder (CRC)) review encounter data to determine if patients have certain medical conditions that might increase their expected cost of claims during an enrollment period. If the coders find evidence that meets quality standards, the payer can typically expect to receive a payment adjustment that is meant to offset the higher-than-expected cost of claims. Unfortunately, there is a financial incentive for payers to misuse the HCC coding process to make patients appear to be sicker than they actually are, thus generating inflated and improper payments. For this reason, coding intensity is subject to extensive regulation and safeguards. Several attempts have been made over the years to address the problem, such as correction factors and stepped-up enforcement of contract-level Risk Adjustment Data Validation (RADV) audits. These efforts have been met with only limited success, and the US Federal Government is still actively seeking a solution to the problem. 
The root cause of the problem is the improper manual application of the ICD-10-CM coding guidelines to unstructured encounter data. The operative terms here are “manual” and “unstructured”. By using [Clinical Quality Language](https://cql.hl7.org/) (CQL) to program the ICD-10-CM coding logic, together with FHIR resources to structure the encounter data and create a stable target for the CQL, a practical and definitive solution to the coding intensity problem may finally be at hand. Digital Condition Categories (dCCs) are the risk adjustment counterpart to digital quality measures (dQMs) which are increasingly being used for the quality measure evaluation. A dCC, then, is the risk adjustment equivalent to a dQM.

During the July 2022 CMS Connectathon a dCC proof-of-concept was conducted to demonstrate automated coding for HCC 179 (amputation of lower limb). In principle, any risk-adjustable Condition Category could be coded by this method, prior to applying the HCC hierarchies.

###  Digital Condition Category 

Similar to the definitions of dQMs<sup>[2](https://ecqi.healthit.gov/dqm?qt-tabs_dqm=1)</sup>, digital Condition Categories are Condition Category measures organized as self-contained measure specification and code packages, that use standardized, digital data from one or more sources of health information that are captured and exchanged electronically via interoperable systems. Digital Condition Categories use machine-readable measure logic, such as logics written in CQL, and common data models such as FHIR. 

A digital Condition Category is structured as a proportion measure<sup>[3](http://hl7.org/fhir/us/cqfmeasures/measure-conformance.html#proportion-measures)</sup>, which consists of an initial population, denominator, numerator, and optional denominator exclusions as shown in the Venn diagram in Figure 3-1. 

{% include img-portrait.html img="dCC-venn-diagram.png" caption = "Figure 3-1: Condition Category Measure Venn Diagram" %}

**Table 3-1: Condition Category Measure Population.**

| Population | Definition | 
|:----|:----|
| Initial Population | The initial population refers to all patients to be evaluated by a Condition Category measure who share a common set of specified characteristics. All patients counted are drawn from the initial population. |
| Denominator | The denominator population includes 1) historic gaps that are either open or closed 2) suspected gaps that are either open or closed 3) net-new gaps. Note that gaps that are net-news are always closed.|
| Denominator Exclusions| Exclusion criteria that defines patients to be removed from the denominator. |
| Numerator| The numerator population includes closed historic gaps, closed suspected gaps, and net-new Condition Categories (CCs).|
{: .grid}

- **Closed gaps** are patients with confirmed coding gaps and have an eligible encounter diagnosis during the current clinical evaluation period.
- **Historic open gaps** are defined as patients with an eligible encounter diagnosis outside of the current clinical evaluation period and have coding gaps that are open. 
- **Historic closed gaps** are defined as patients with an eligible encounter diagnosis outside of the current clinical evaluation period and have coding gaps that are closed. 
- **Suspected open or closed** gaps are determined using payers/vendors' internal suspecting algorithms. 

###  Example Digital Condition Category 
Figure 3-2 is a Venn diagram that shows the Condition Catetory measure population using a hierarchical Condition Category code, HCC189 "Amputation Status, Lower Limb/Amputation Complications" as an exmaple. 
- The initial population for HCC189 is defined as enrolled Medicare Advantage members. 
- The denominator population for HCC189 includes all open and closed historic gaps, suspected gaps, and closed net-new gaps for the ICD-10 codes that map to HCC189, for example, Z89.411 Acquired absence of right great toe. 
- The denominator exclusion for HCC189 defines criteria that will exclude patients from the denominator population, for example ICD-10 code M20 Acquired deformities of fingers and toes and M21 Other acquired deformities of limbs. 

{% include img-portrait.html img="hcc-189-venn-diagram.png" caption = "Figure 3-2: Condition Category Measure Venn Diagram - HCC189 Example" %}

###  Generating the Risk Adjustment Coding Gap Report Using the $ra.evaluate-measure Operation

The FHIR server is pre-populated with patient data and dCCs. The Payer then runs the [$ra.evaluate-measure] operation to produce a [Risk Adjustment Coding Gap Report].  During the operation, CQL is executed against the patient and risk adjustment data. The resources used by CQL logic evaluation are tracked and included in the final [Risk Adjustment Coding Gap Report].

[$ra.evaluate-measure] to dCCs would be considered as equivalent to using [$evaluate-measure](https://www.hl7.org/fhir/measure-operation-evaluate-measure.html) to calculate an eCQM and obtain the results.  

The $ra.evaluate-measure operation requires four input (IN) parameters: subject, periodStart, periodEnd, and one of the measure parameters (measureId, measureIdentifier, or measureUrl). The subject parameter references either a single patient or a group of patients (as specified in the [Patient Group](StructureDefinition-ra-patient-group.html) profile). The term clinical evaluation period refers to the time period during which the risk adjusting encounters could be conducted and documented with expectations of submissions for risk adjustment purposes. The periodStart and periodEnd parameters are the start and end dates of the clinical evaluation period. The measure parameter identifies the measure definition of a risk adjustment model that will be used to calculate dCCs.

###  Using CQL

Specifying a digital Condition Category should follow the using CQL requirements specified in the [Quality Measure Implementation Guide](http://hl7.org/fhir/us/cqfmeasures/using-cql.html). Future versions of this IG may specify additional requirements for specifying dCCs using CQL and provide examples.

{% include link-list.md %}



---

// File: input/pagecontent/downloads.md




### Package File

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and urls, etc., that are defined as part of this version of the implementation guide (IG). This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the [Validating Resources]({{site.data.fhir.path}}validation.html) documentation in FHIR.

- [Package](package.tgz){::download="true"}


### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy](full-ig.zip)

### Examples

All the examples that are used in this IG are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)



### Schematrons

Schematrons are available for download:

- [Schematrons](schematrons.zip)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}



---

// File: input/pagecontent/extensions.md


List of extensions defined in this implementation guide:

|Link to Extension|
|---|
|[Clinical Data Collection Deadline](StructureDefinition-ra-clinicalDataCollectionDeadline.html)|
|[Condition Category Remark](StructureDefinition-ra-ccRemark.html)|
|[Condition Category Type](StructureDefinition-ra-ccType.html)|
|[Confidence Scale](StructureDefinition-ra-confidenceScale.html)|
|[Diagnosis Code](StructureDefinition-ra-dxCode.html)|
|[Evidence Status](StructureDefinition-ra-evidenceStatus.html)|
|[Evidence Status Date](StructureDefinition-ra-evidenceStatusDate.html)|
|[Group Reference](StructureDefinition-ra-groupReference.html)|
|[Hierarchical Status](StructureDefinition-ra-hierarchicalStatus.html)|
|[Payer Coding Gap Report ID](StructureDefinition-ra-payerCodingGapReportId.html)|
|[Reporting Vendor](StructureDefinition-ra-reportingVendor.html)|
{: .grid}

<br />

{% include link-list.md %}


---

// File: input/pagecontent/general-guidance.md


### Introduction

The Da Vinci Project member organizations have identified the need of standardizing how risk adjustment coding gaps are communicated between payers and providers. This implementation guide (IG) specifies standardized risk adjustment coding gap reports and provides guidance to query the coding gap reports from a Payer for one or more patients. Standardizing the reporting structure helps lessen the burden on the providers in processing the reports so they can more easily address the patients’ care needs. This standardized structure also supports the Payer sharing information that they have but the providers may not, such as data from other providers’ claims, lab results, filled prescriptions, etc. 


This IG also provides mechanisms enabling the feedback loop from Provider to Payer. Providers may add a Condition Category Remark(s) to the Risk Adjustment Coding Gap Report to indicate that they took some action(s) for a specific coding gap on the report and communicates that back to the Payer. However, if the Provider identifies a coding gap that is on the report needs to be closed or invalidated based on medical record review, this feedback process is done using the [Risk Adjustment Data Exchange MeasureReport], which allows the Provider to send the supporting clinical evaluation evidence to the Payer. This feedback loop is important for achieving the goal of improving the accuracy and completeness of risk adjustment.

### Preconditions and Assumptions

- A contract for medical services exists between the Server and the Client requesting the Risk Adjustment Coding Gap Reports.
- Risk Adjustment Coding Gap Reports are pre-generated on the Server by a backend system such as a risk adjustment engine for risk adjustment model(s).
- It is the responsibility of the Server to ensure that the data used in the report is present in a structured and retrievable form.
- The Server and the Client have agreed upon a process to identify specific patient(s) and exchange the Patient resource's logical id or the Patient Group resource's logical id.
- Although the exact mechanisms for securing these exchanges are not specified as part of this IG:
    - Exchanges are limited to mutually agreed upon (i.e., between the Server and the Client) patient lists or population.
    - Security and privacy should follow [Security and Privacy](https://hl7.org/fhir/us/davinci-hrex/security.html#security-and-privacy) guidance specified in the Da Vinci Health Record Exchange (HRex) IG.   
    - Systems should use standard authentication and authorization approaches. The [SMART App Launch] and [SMART backend services] authentication/authorization approach are recommended models.

### Risk Adjustment Lifecycle and Workflow Overview

Figure 2.1-1 shows a high level overview of the risk adjustment workflow, which consists of three main phases: [Report Generation], [Report Query], and [Submit Data to Payer]. Detailed guidance for each phase is provided on a separate page under the Methodology section. 

{% include img-portrait.html img="lifecycle-phases.png" caption="Figure 2.1-1 Risk Adjustment Lifecycle Phases"%}

#### Report Generation

For a complete introduction and background to Report Generation, please visit [Report Generation Introduction and Background].  Report generation describes two different approaches to generate a [Risk Adjustment Coding Gap Report], which are referred to as Assisted and Generated in this IG. 

- [Assisted](report-generation.html#the-assisted-approach): A non-FHIR approach. The Payer uses their existing processes, such as SQL, SAS, and object-oriented languages, to generate a comma-separated values (CSV) file with tuples of patient and risk adjustment data. The Payer uses a non-FHIR RESTful API to populate a [Risk Adjustment Coding Gap Report] based on data in the CSV file. A REST server then POSTs the generated MeasureReports to the FHIR server. A standardized CSV header that could be used by this approach is defined in this IG. This approach will not contain evaluatedResources in a MeasureReport. 
- [Generated](report-generation.html#the-generated-approach): Mostly a non-FHIR approach. The Payer generates a FHIR [Risk Adjustment Coding Gap Report] and evaluates resources based on data from *traditional* risk adjustment coding gap reports. These *traditional* reports are generated by their existing processes using patient data and risk adjustment data produced by risk adjustment engines. A REST server then POSTs the generated MeasureReports to the FHIR server. 

You will find more details on the two approaches at [Report Generation Approaches].

#### Report Query

The Client can query the [Risk Adjustment Coding Gap Report] once they are generated. For example, the Payer acting as the Reporting Client can query reports based on search parameters and POST them to the Provider server. See the [Report Query] page for details and guidance. 

#### Report Condition Category Remark

Once the queried Risk Adjustment Coding Gap MeasureReports have been sent to the intended recipient, it can be filtered as defined by the EMR and their configuration options to ensure that only germane coding gaps (e.g., HCC gaps) are made available to providers. The Provider (or a software program acting on behalf of the Provider) determines whether the coding gap is currently valid, and whether the requested encounter data evidence exists to close the gap.

At that time, if the Provider wants to note the action they took regarding a Risk Adjustment coding gap, they can add that comment to the Risk Adjustment Coding Gap Report using the [Condition Category Remark] extension and return it to the Payer. This process is called [Condition Category Remark].

Note: The [Condition Category Remark] extension is not intended to change the status of a Condition Category gap. To change the coding gap status, follow the [Submit Data to Payer] section of this guidance. Note that both a Condition Category remark and [Submit Data to Payer] can be generated at the time the Provider sees the patient if that is appropriate.

{% include img-portrait.html img="report-cc-remark-overview.png" caption="Figure 2.1-3 Add Condition Category Remark to Coding Gap Report Overview"%}

#### Submit Data to Payer

 To return clinical data, the Provider will use the [Risk Adjustment Data Exchange MeasureReport] and the [$submit-data] operation to submit data to Payer. The Payer will then be able to use the provided patient data to update the data in their system that will be included on their next coding gap report generation.

See the [Submit Data to Payer] page for more details and guidance. 

### Attribution

Member attribution establishes associations between providers and payers. The process of establishing and exchanging patient lists for risk adjustment coding gap reports is not in the scope of this implementation guide. One possible way of exchanging Member Attribution Lists between providers and payers is described in the [Da Vinci - Member Attribution (ATR) List] implementation guide.

### Must Support
Certain elements in the profiles defined in this implementation guide are marked as Must Support. This flag is used to indicate that the element plays a critical role in defining and sharing risk adjustment coding gaps, and implementations SHALL understand and process the element.

This implementation guide uses US Core profiles where appropriate, therefore, the implications of the Must Support flag for US Core profiles must also be considered.

For more information, see the definition of [Must Support](http://hl7.org/fhir/R4/conformance-rules.html#mustSupport) in the base FHIR specification.

### Dependencies

This implementation guide relies on the following specifications:
- [FHIR R4](http://hl7.org/fhir/R4/)
- [US Core STU3.1.1](http://hl7.org/fhir/us/core/STU3.1.1)

{% include link-list.md %}


---

// File: input/pagecontent/glossary.md


### Glossary

- {:Clinical Data Collection Deadline}<b>Clinical Data Collection Deadline</b>
  The deadline by which the providers must have all claims data to the payers to count for risk adjustment for a clinical evaluation period. This date is set by the Payer.

- {: #Clinical Evaluation Period}<b>Clinical Evaluation Period</b>
  The time period during which the risk adjusting encounters could be conducted and documented with expectations of submissions for risk adjustment purposes.

- {: #Condition Category}<b>Condition Category</b>
  A Condition Category (CC) is a clinically or financially related grouping of medical conditions. Condition Categories (CCs) describe a broader set of similar diseases. Diseases within a Condition Category (CC) are related clinically and with respect to cost. Condition Categories (CCs) are categories before imposing hierarchies. ICD-9-CM or ICD-10-CM codes are mapped to diagnostic groups (DXGs), which represents a well-specified medical condition. DXGs are further aggregated into Condition Categories (CCs). An example is Condition Category (CC) 96 *Ischemic or Unspecified Stroke*, which includes DXG 96.01 *precerebral or cerebral arterial occlusion with infarction* and DXG 96.02 *acute but ill-defined cerebrovascular disease*.

- {:Data Collection Period}<b>Data Collection Period</b>
  The Data Collection period refers to the first day of the clinical evaluation period through the date that data from the clinical evaluation period can be submitted to the risk adjustment organization. 

- <b>Digital Condition Categories (dCCs)</b> are condition category measures organized as self-contained measure specification and code packages, that use one or more sources of health information that is captured and can be transmitted electronically via interoperable systems. Digital condition categories use machine-readable measure logic, such as logics written in in Clinical Quality Language, and use common data models such as FHIR.

- <b>Hierarchical Condition Category</b>
  Condition Categories (CCs) become Hierarchical Condition Categories (HCCs) after imposing hierarchies. Hierarchies are imposed among related Condition Categories (CCs), so that a person is coded for only the most severe manifestation among related diseases. If a person is coded with more than one CC in a hierarchy, only the highest (most severe) CC in the hierarchy will be coded as the HCC. For example, if a beneficiary has an ICD-9-CM code that groups into HCC 86, having CC 86 precludes HCCs 87 or 88 from being assigned, even if ICD-9-CM codes that group into those categories were also present. Similarly, a person with ICD-9-CM codes that group into both CC 87 *Unstable Angina* and Other Acute Ischemic Heart Disease and CC 88 *Angina Pectoris/Old Myocardial Infarction* is coded for HCC 87, but not HCC 88.

- <b>Historic Condition</b>
  Condition that has been seen in the past (that was documented on a claim from a previous year or documented from another data source, e.g., Model Output report (MOR), or chart from a prior year) but not yet confirmed in the current year. Historic conditions may also be referred to as Certified Condition by some Payers. This may also be called Persistent Condition. Many historic conditions are persistent.

- <b>Risk Adjustment</b>
  Risk adjustment is a method of adjusting capitation payments to health plans, to account for the differences in expected health cost of individuals enrolled in the plan. Risk adjustment is intended to be accurate at the group level. At the individual level, predicted medical costs can be lower or higher than actual medical costs, but at the group level, below-average predicted costs balance out above-average predicted costs.

- <b>Risk Adjustment Model</b>
  Risk adjustment models are used to compare and normalize health risks across groups or populations. Risk adjustment model means an actuarial tool used to predict health care costs based on the relative actuarial risk of enrollees in risk adjustment covered plans (45 CFR 153.20). There are a number of risk adjustment models. For example, the CMS-HCC risk adjustment model is used for the Medicare Advantage Program. The HHS-HCC risk adjustment model is used for commercial payer populations and covers all ages. Medicaid has more flexibility, they may use any model, such as Chronic Illness & Disability Payment system (CDPS), 3M model.

- <b>Suspected Condition</b>
  Condition that is not diagnosed or documented in the current year, but is suspected by the Payer via suspecting processes. For example through AI algorithms using data such as lab results and procedures. Suspected Condition may also be referred to as Potential Condition by some Payers.

- <b>Suspecting</b>
  Suspecting is the process of determining who is likely to have which risk-adjustable medical conditions. HCCs suspect analytics are generated by health plans or third party vendors.


### Acronyms

|<b>Acronym</b>|<b>Definition</b>|
|---|---|
|CC|Condition Category|
|CMS-HCC|The Centers for Medicare and Medicaid Services Hierarchical Condition Category model|
|CMS-RxHCC|The Centers for Medicare and Medicaid Services Prescription Drug Hierarchical Condition Category model|
|CDPS|The Chronic Illness and Disability Payment System|
|CRC|Certified Risk Adjustment Coder|
|CQL|Clinical Quality Language|
|dCC|Digital Condition Category|
|DCG|Diagnostic Cost Group|
|DxCG|DxCG is an American company located in Boston, MA, that develops predictive modeling software solutions used by the healthcare industry|
|DXG|Diagnostic Group|
|EDPS|Encounter Data Processing System|
|ESRD|End Stage Renal Disease|
|GAO|General Accounting Office|
|HCC|Hierarchical Condition Category|
|HHS-HCC|Health and Human Services Hierarchical Condition Category|
|MA|Medicare Advantage|
|MRX|Medicaid Rx Risk Adjustment Model|
|PACE|All-encompassing Care for the Elderly|
|RADV|Risk Adjustment Data Validation|
|RXC|Health and Human Services (HHS) Prescription Drug Category|
{: .grid}

---

{% include link-list.md %}


---

// File: input/pagecontent/index.md



###  Summary

The Da Vinci Fast Healthcare Interoperability Resource (FHIR) Risk Adjustment Implementation Guide (IG) describes exchanging risk adjustment coding gaps between payers and providers. Risk adjusted premium calculations are important to government managed care. To better inform providers of opportunities to address risk adjusted conditions, better enable payers to communicate risk adjustment information, and enhance government sponsors' ability to allocate funding accurately, payers and providers need a standard protocol to share and receive clinical data related to risk adjustment and a standard methodology to communicate risk based coding, documentation and submission status of chronic conditions. The first Standard for Trial Use (STU) version of this implementation guide focused on the standard exchange format of risk adjustment coding gaps from payers to providers, it offers potential for reducing the administrative burden experienced by providers by standardizing the reporting they receive from all payers.

This version of the implementation guide focuses primarily on the communication from providers back to payers. It focuses on two forms of communication:

- Allowing the provider, a risk adjustment coder or the provider's EMR to add a Condition Category Remark to the Risk Adjustment Coding Gap Report.  Providers and risk adjustment coders may indicate that a gap was closed, invalidated, not appropriate at this time, etc.  It also allows for the EMR to notify the payer when the content could not be processed. Note that where appropriate, the payer or an entity acting on behalf of the payer can also add a remark to the Risk Adjustment Coding Gap Report.

- A Risk Adjustment Data Exchange MeasureReport was added to allow the provider to return data to the payer to potentially close the Condition Category code gaps.  We anticipate this could be used to submit Consolidated Clinical Document Architecture documents such as the Continuity of Care Document (CCD), Progress Notes, etc. It can also be used to submit specific FHIR data if appropriate.

This version also introduces the draft content for digital Condition Category (dCC). It describes how to specify dCCs, using Clinical Quality Language (CQL), through an example which would allow for a more automated process of generating risk adjustment coding gap reports by evaluating dCCs against clinical data. 

This implementation guide is supported by the Da Vinci initiative which is a private effort to accelerate the adoption of Health Level Seven International Fast Healthcare Interoperability Resources (HL7® FHIR®) as the standard to support and integrate value-based care (VBC) data exchange across communities. Like all Da Vinci Implementation Guides, it follows the [HL7 Da Vinci Guiding Principles] for the exchange of patient health information. As an HL7 FHIR Implementation Guide, changes to this specification are managed by the sponsoring [Clinical Quality Information (CQI) Work Group] and are incorporated as part of the standard balloting process.

### How to read this implementation guide

This implementation guide is divided into several pages which are listed at the top of each page in the menu bar:

- [Home]\: The home page provides the summary, background information, scope, and actors for this implementation guide.

- [Methodology]\: These pages provide guidance on the resource profiles and operation defined in this implementation guide.
    - [General Guidance]\: This page provides guidance that applies to all functionalities in this implementation guide.
    - [Report Generation]\: This page describes how generating a Risk Adjustment Coding Gap Report is accomplished.
    - [Report Query]\: This page provides guidance on using query to return a Risk Adjustment Coding Gap Report(s) and their evaluated resources.
    - [Submit Data to Payer]\: This page provides guidance on submitting clinical evaluation evidence to Payer for the purpose of evaluating risk adjustment coding gaps using [$submit-data](https://www.hl7.org/fhir/measure-operation-submit-data.html) and [Risk Adjustment Data Exchange MeasureReport].
    - [Add Remark to Condition Category]\: This page describes how providers can add remarks to Condition Categories on the Risk Adjustment Coding Gap Report to note that they took actions while seeing the patient.
    - [Digital Condition Category (dCC)]\: This page describes how a Condition Category can be structured as a proportion measure and be specified using CQL as a digital Condition Category in a similar fashion to electronic quality measures through an example. 

- FHIR Artifacts: These pages list FHIR artifacts specified in this implementation guide. 
    - [Profiles]\: This page lists the set of Profiles that are defined in this implementation guide to exchange risk adjustment coding gaps.
    - [Extensions]\: This page lists the set of Extensions that are defined in this implementation guide to exchange risk adjustment coding gaps.
    - [Operations]\: This page lists operations defined in this implementation guide.
    - [Terminology]\: This page lists code systems and value sets defined in this implementation guide.
    - [Capability statements]\: This page describes the expected FHIR capabilities of the risk adjustment actors of this implementation guide.
- [Examples]\: This page lists all the examples used in this implementation guide.
- [Glossary]\: This page lists glossary and acronyms for this implementation guide.
- [Downloads]\: This page provides links to downloadable artifacts.

### Background
{: #background}
Health risk is a combination of two factors, loss and probability. Many players in the healthcare industry need to measure and manage health risks. For example, providers need to know which patients in their panel are facing the greatest clinical risks to prioritize their care; insurance payers need to know the expected financial risk of their covered lives so they can price their premiums appropriately.

#### Modeling Approaches: Risk Adjustment vs. Risk Prediction
<b>Risk adjustment models</b> are used to compare and normalize health risks across groups or populations. For instance, the Medicare Advantage (MA) population represents a risk pool, as does the subset of the MA population that Payer X covers. One common use of risk adjustment is to make equitable comparisons among healthcare payers that take into account the health status of their enrolled members, to provide adequate financial support for treating individuals with higher-than-average health needs, and to minimize incentives for plans and providers to selectively enroll healthier members. Risk adjustment models determine whether Payer X’s risk pool represents more or less health risk than the MA population average, so that if Payer X is running a greater risk – say, because its risk pool includes a greater portion of economically disadvantaged persons – then appropriate payments are made to help ensure that these members' premiums are subsidized to offset the higher expected cost of claims that Payer X will incur. Risk adjustment is used for this purpose within Medicare (the CMS-HCC<sup>[1](glossary.html#acronyms)</sup> and CMS-RxHCC<sup>[1](glossary.html#acronyms)</sup> models), Medicaid (the CDPS<sup>[1](glossary.html#acronyms)</sup> and MRX<sup>[1](glossary.html#acronyms)</sup> models), the Affordable Care Act (the HSS-HCC and RXC<sup>[1](glossary.html#acronyms)</sup> models), as well as other health insurance programs.

<b>Risk prediction models</b> have a different intent. These are used to predict the future behavior of individuals or populations such as who is likely to be a high utilizer of healthcare services or who is likely to experience adverse health care events.

#### Model Hierarchies: Condition Categories (CCs) vs. HCCs; Disease Hierarchies vs. Disease Categories; Superseding
This IG has mainly focused on the Medicare Advantage risk adjustment models, but it should also work for other risk adjustment and prediction models as long as they structure their data using <b>Condition Categories (CCs)</b>. A Condition Category (CC) is a clinically or financially related grouping of medical conditions. The number of Condition Categories (CCs) in each risk model depends on the purpose of that model, from about 80 Condition Categories (CCs) in the CMS-HCC model to about 400 Condition Categories (CCs) in the DxCG<sup>[1](glossary.html#acronyms)</sup> model. It is very common for Condition Categories (CCs) to be organized in terms of disease hierarchies and disease categories, with the former denoting the severity of a disease and the latter indicating other aspects such as which system and/or part of the anatomy is affected, how the disease affects the body, the nature of the disease process, what causes it, how it spreads, how quickly it progresses and so forth. When a disease hierarchy is applied it assigns Condition Categories (CCs) into Hierarchical Condition Categories (HCCs) with less severe HCCs superseded (dropped) if evidence of higher severity HCCs is present. Since different HCCs have an impact upon total risk assessment, they should be maintained. For example, the combination of a new diagnosis of major depression to an existing diagnosis of non-insulin dependent diabetes may increase total risk by more than the sum of the individual category risk assignments.

#### Risk Adjustment Applications: Revenue Normalization vs. Resource Utilization
This IG focuses on <b>risk adjustment for revenue normalization</b>, but risk adjustment has several other applications. Quality measures such as Plan All-Cause Readmissions, Acute Hospital Utilization, Hospitalization Following Discharge from a Skilled Nursing Facility, Emergency Department Utilization and Hospitalization for Potentially Preventable Complications are all risk-adjusted. Risk adjustment is used in care management to identify future high-cost or high-utilizing individuals, direct them toward appropriate treatment options, allocate resources for that treatment, and evaluate the outcomes of those programs. Risk adjustment is also used as an analytical method by actuaries and underwriters for pricing purposes. However, the goals, processes and methods of these other risk adjustment applications are quite different from those of risk adjustment for revenue normalization and are outside the scope of this IG.

Unless otherwise specified, when the term “risk adjustment” is used in this IG it is limited to risk adjustment for revenue normalization and is exclusively concerned with the exchange of diagnostic data to resolve Condition Category (CC) or HCC gaps.

#### Time Periods: Clinical Evaluation vs. Data Collection; Payment Years; Sweeps
There are several important time periods to keep track of here. For example, the Medicare Advantage <b>clinical evaluation period</b> runs from January 1 of [PY-1] through December 31 of [PY-1] during which the patient may have an encounter(s) with the provider(s) to document the presence of disease(s). The date of service for the extracted diagnosis must correspond to the correct Payment Year but payers are generally permitted more than one calendar year to collect the diagnoses. The Medicare Advantage <b>data collection period</b><sup>[1](glossary.html#acronyms)</sup> runs from January 1 [PY-1] to the end of January [PY+1]; during this time the payer may submit diagnoses collected during the clinical evaluation period to CMS. PY denotes the <b>Payment Year</b>, or the year when the payer receives its payment adjustment from Medicare. These payments begin on January 1 of [PY] based on diagnoses submitted to CMS through the first week of September of [PY-1]. This is a particularly important date known as the September Sweeps. For financial reasons, payers want to submit as many diagnoses as they can prior to September Sweeps because these are used to set the amount for the initial payment adjustments. Payers sometimes offer providers “Early Bird” incentives to document HCCs as soon in the year as they can, preferably prior to September Sweeps. For this reason, it is important for the payer to record when they receive medical evidence that closes an HCC gap so the provider can receive any “Early Bird” incentives they may have earned.

For example, during Medicare Advantage PY 2022 diagnoses are accepted from patient encounters with dates of service during the clinical evaluation period of Jan 1, 2021 to Dec 31, 2021. Payers may submit to Medicare the diagnoses they collect from these encounters as soon as Jan 1, 2021 and continuing through the end of Jan 2023. Sweeps for PY 2022 occur at the end of the first week of Sep 2021. Payers begin receiving payment adjustments from Medicare beginning in Jan 2022 based on diagnoses received through Sweeps.

The risk adjustment activities in support of these payment cycles concurrently overlap during any given year, as shown in the Figure 1-1. Note that this figure shows the Medicare Advantage risk adjustment cadence; other programs such as Medicaid and the ACA follow a different annual risk adjustment cadence.

{% include img-portrait.html img="payment-cycle-overlap.png" caption = "Figure 1-1 Medicare Advantage Risk Adjustment Cadence" %}

#### Concurrent Models: Blending; Special-Purpose Models
Since the data collection period is always longer than the clinical evaluation period there will be multiple models actively collecting data at the same time. For example, during the calendar year 2022 a typical MA payer will be actively collecting data to close gaps from several models:
- CMS-HCC V24 for the 2021 Payment Year (2020 dates of service, data submission deadline is the end of January 2022)
- CMS-HCC V22 for the 2021 Payment Year (2020 dates of service, data submission deadline is the end of January 2022)
- CMS-HCC V21 for the 2021 Payment Year (2020 dates of service, data submission deadline is the end of January 2022)
- CMS-RxHCC V05 for the 2021 Payment Year (2020 dates of service, data submission deadline is the end of January 2022)
- CMS-HCC V24 for the 2022 Payment Year (2021 dates of service)
- CMS-HCC V22 for the 2022 Payment Year (2021 dates of service)
- CMS-HCC V21 for the 2022 Payment Year (2021 dates of service)
- CMS-RxHCC V05 for the 2022 Payment Year (2021 dates of service)
- CMS-HCC V24 for the 2023 Payment Year (2022 dates of service)
- CMS-HCC V22 for the 2023 Payment Year (2022 dates of service)
- CMS-RxHCC V05 for the 2023 Payment Year (2022 dates of service)

To avoid confusion, the provider supplies dates for the clinical evaluation period, which is driven by dates of service. So if the provider sets the clinical evaluation period to run from Jan 1, 2022 through Dec 31, 2022, the payer would only report Condition Category (CC) gaps from these models:
- CMS-HCC V24 for the 2023 Payment Year (2022 dates of service)
- CMS-HCC V22 for the 2023 Payment Year (2022 dates of service)
- CMS-RxHCC V05 for the 2023 Payment Year (2022 dates of service)

What’s going on with these three different model versions? There are three answers.
1.	Risk adjustment models are an important actuarial tool for insurance payers, who must forecast the health risk of populations several years in advance. To avoid undermining any statistical analyses that are based on these HCC models, any changes to these models are rolled out in gradual, predictable ways. New models are always phased in, usually over a period of four or five years, during which the risk scores from the older model are gradually given less weight and risk scores from the new model are weighted more heavily. This model transition process is called blending. For several years leading up to 2022 the V22 and V24 models coexisted side by side. By 2022 the blending period ended with the V24 risk scores being accorded 100% of the weight.
2.	Risk scores for members diagnosed with certain medical conditions such as End Stage Renal Disease (ESRD) or who are enrolled in a special Medicare Advantage Plan for All-encompassing Care for the Elderly (PACE<sup>[1](glossary.html#acronyms)</sup>) are always scored using the model which is one version previous to the current one. While the V22 and V24 models were being blended both were considered current, meaning that the next previous version was V21. When a member is diagnosed with renal disease and CMS designates them as ESRD, the member shifts from being scored under the V22/V24 models to being scored under the V21 model. By 2022 the blending period was over, the V24 model became the most current model, the V22 model came into use for ESRD and PACE, and the V21 model was phased out.
3.	Throughout this period the CMS-RxHCC V05 model was also in continuous use. The purpose of the CMS-RxHCC model is to normalize the expected cost of medications across populations, just as the CMS-HCC model normalizes the expected cost of medical treatments. Despite the name, the RxHCC model is derived from medical claims – not pharmacy claims. The RxHCC model overlaps with CMS-HCC to a considerable degree; many times the same diagnosis will close both an HCC and an RxHCC, although there are some diagnoses that only roll up to RxHCCs and not HCCs. Many risk adjustment models feature this separation between the medical and prescription drug portions of the model (Medicare CMS-HCC and CMS-RxHCC; Medicaid CPDS and MRX; ACA HHS-HCC and RXC.)

### Scope

After careful review with the risk adjustment subject matter experts, it was determined that the most challenging aspect of the current risk adjustment process was the inconsistent manner in which reports on risk adjustment coding gaps were communicated between a provider (or system operating on their behalf) and a payer (or system operating on the payer’s behalf). Figure 1-2 shows a high-level example of the risk adjustment workflow in a CMS Medicare Advantage program. This implementation guide focuses on specifying a standard exchange format, the Risk Adjustment Coding Gap Report, between payers and providers. This diagram does not depict preceding steps such as the payer receiving clinical or claims data from providers or other sources, nor does it attempt to define contractual relationships.

{% include img-portrait.html img="workflow-medicare-advantage.png" caption = "Figure 1-2 Workflow for Medicare Advantage Population" %}

This implementation guide does not define how payers determine a coding gap and how coding gaps are produced or managed on the payer side including hierarchies. This implementation guide also does not define suspecting processes and algorithms/predictive models that are used for suspecting analytics.   

### Actors and Roles

Different entities can play different Roles in different scenarios. The Actors in this implementation guide are Payer and Provider. Their roles as Client and Server are described below. 


**Client**: 
- Reporting Client
    - Payer plays this role when they request a [Risk Adjustment Coding Gap Report] to POST to Provider's FHIR Server 
    - Provider plays this role 1) when they request a Risk Adjustment Coding Gap Report, or 2) when they add a Condition Category Remark to a Risk Adjustment Coding Gap Report
- Data Submission Client
    - Provider plays this role when they create a [Risk Adjustment Data Exchange MeasureReport] and submit to Payer

**Server**:
- Reporting Server
    - The Payer plays this role when they 1) generate and store a Risk Adjustment Coding Gap Report, or 2) when they add Condition Category remark to the Risk Adjustment Coding Gap Report, if the Payer chooses to share any or all Condition Category remarks submitted by the Provider
    - The Payer plays this role when they receive and process the Risk Adjustment Data Exchange MeasureReport       
- Data Submission Server
    - The Provider plays this role when they POST Risk Adjustment Coding Gap Report with Condition Category Remark(s)

The Methodology section of this implementation guide describes these Actors in more detail in the context of report generation, report query, and data submission steps of risk adjustment lifecycle and adding of Condition Category remarks to the Risk Adjustment Coding Gap report. 
   

---

### Credits

This implementation guide was made possible by the thoughtful contributions of the following people and organizations:

- *The [Da Vinci Project](http://www.hl7.org/about/davinci/index.cfm?ref=common) member organizations.*

Primary Authors
- *Brent Zenobia, Novillus*
- *Linda Michaelsen, Optum*
- *Rob Reynolds, Smile Digital Health*
- *Yan Heras, Optimum eHealth*

Contributors
- *Amy Neftzger, United Healthcare*
- *Brian J Murtha, Centene*
- *Bryn Rhodes, Smile Digital Health*
- *Cody Danielshak, Epic*
- *Josh Lamb, Optum*
- *Lloyd McKenzie, Dogwood Health Consulting* 
- *Nidhi Pengoria, AthenaHealth*
- *Swati Mukherjee, Optum*
- *Viet Nguyen, Stratametrics*

---

{% include link-list.md %}


---

// File: input/pagecontent/methodology.md


- [General Guidance]
- [Report Generation]
- [Report Query]
- [Submit Data to Payer]
- [Add Remark to Condition Category]

<br />

{% include link-list.md %}

---

// File: input/pagecontent/OperationDefinition-ra.evaluate-measure-intro.md


{% assign id = {{page.id}} %}

<div class="note-to-balloters" markdown="1">

**The $ra.evaluate-measure is DRAFT and open for review.**


This operation executes digital condition category (dCC) measures specified in Clinical Quality Language (CQL) against the patient data to produce a [Risk Adjustment Coding Gap Report Bundle]. Patient data, dCC measures, and CQL libraries are pre-populated on FHIR server. 


Conformance Requirement 1:
<br>
- If the operation is invoked at the instance level, the parameters `measureId`, `measureIdentifier`, and `measureUrl` is not allowed
- If the operation is invoked at the type level, one of the `measureId`, `measureIdentifier`, and `measureUrl` parameters is required



{% include link-list.md %}


---

// File: input/pagecontent/operations.md


The tables below list the operations specified in this implementation guide. 

|Operation Name|Link to Operation|Description|
|---|---|---|
|Risk Adjustment Evaluate Measure|[$ra.evaluate-measure]|Evaluates digital Condition Category against patient data to generate Risk Adjustment Coding Gap Report Bundle. This operation is included as a draft.|
{: .grid}

*The $report operation specified in STU1 is deprecated with the change to use the direct RESTful query approach*

<br />

{% include link-list.md %}


---

// File: input/pagecontent/profiles.md


### Profiles

List of profiles that define constrains on FHIR resources for systems conforming to this implementation guide.

|Resource Type|Profile|
|---|---|
|MeasureReport|[Risk Adjustment Coding Gap Report]|
|MeasureReport|[Risk Adjustment Data Exchange MeasureReport]
|Measure|[Risk Adjustment Model Measure]|
|Group|[Patient Group]|
|Parameter|[RA Parameters ccRemark Patch Profile]|
{: .grid}

### Search Parameter

|Resource Type|Profile|
|---|---|
|Search Parameter|[MeasureReport-Category Search Parameter]
{: .grid}

### Profile (DRAFT)

|Resource Type|Profile|Note|
|---|---|
|Bundle|[Risk Adjustment Coding Gap Report Bundle]|The Risk Adjustment Coding Gap Report Bundle is a collection Bundle returned by [$ra.evaluate-measure] and included in this version of the IG as DRAFT.|
{: .grid}


<br />

{% include link-list.md %}


---

// File: input/pagecontent/report-generation.md

### Introduction and Background

During this phase of the lifecycle process, the Payer determines if there is grounds for thinking that a patient may have a risk-adjustable condition that has not yet been documented during the current clinical evaluation period. Quality measures have clear rules governing when the patient is included in/excluded from the measure denominator and numerator; not so for risk adjustment. Payers often must statistically infer the likelihood that a patient might have an undocumented Condition Category (CC). This statistical process is called Condition Category (CC) suspecting and is generally done in two ways:
- Historic conditions (also known as persisting conditions) are those which were documented during some past clinical evaluation periods, but have not yet been documented in the current period; and
- Suspected conditions, which are identified through the use of statistical modeling.

Alternatively, the Payer may receive a medical claim that confirms the presence of a previously unsuspected risk adjusted condition. Since this most often happens when a condition has been diagnosed for the first time, these are referred to as net-new conditions. 

During the gap generation phase, the Payer combines all relevant data streams and determines which CC gaps exist for the patient and what their status is. An open gap is one where the Payer is soliciting information from the Provider that the patient either has the condition, or that the gap is invalid. A closed gap is one where the Payer has the necessary evidence that the gap is valid for the current clinical evaluation period. But because the CC suspecting process is probabilistic there will always be a certain percentage of invalid gaps that the Provider indicates are not clinically appropriate for the patient. Additionally, the gaps state of pending may be used when a payer receives a gap closure request and is working on confirming that closure; the pending state is discussed further in the Submit Data to Payer section.

Many risk adjustment models are constructed in such a way as to differentiate between different degrees of severity in the disease process. For example, the Medicare Advantage model v24 divides diabetes into three condition categories, which in order from least to most severe are: CC 19 (diabetes without complications); CC 18 (diabetes with chronic complications); and CC 17 (diabetes with acute complications.) During the clinical evaluation period a patient may be diagnosed with diabetes several times, with individual diagnoses rolling up to different Condition Categories (CCs). To avoid paying twice for the same underlying condition, a hierarchy is applied to the CCs so that only the most severe form is counted for risk adjustment purposes; applying these hierarchies turns a CC into a Hierarchical Condition Category (HCC). In the previous example, CC 17 supersedes CCs 18 and 19, and CC 18 supersedes CC 19.

There are many potential uses for CC gap information. For example, a provider may seek to take action on open gaps, or they may want confirmation of their previous gap closure or gap invalidation actions from the payer, or they may want to calculate their gap closure performance under the terms of a value-based payment arrangement. In general, the Payer will not know in advance which of these purposes the data will be used for, so the approach that has been taken in this implementation guide (IG) is for the Payer to provide as much CC gap data as possible, with flags on the data so that the Provider may filter the CC gaps on the receiving end. This makes it possible for the IG to support as broad a range of applications as possible. Data filtering is the responsibility of the recipient.

To summarize: the ccType of a CC gap may be historic, suspected, or net-new; its evidenceStatus may be open-gap, closed-gap, pending, or invalid; and its hierarchicalStatus may be applied-superseded, applied-not-superseded, not-applied, or not-applicable (e.g., if the model is non-hierarchical.) These three flags can be used to facilitate data filtering by the requester.

Once the CC gaps have been identified and their filtering flags are set, the next task is to put them into a FHIR MeasureReport. This IG provides two approaches to do this.

- The [Assisted] approach is intended for situations in which the Payer wants to cause minimal impact on existing risk adjustment operations. For many Payers, lists of CC gaps are produced by manual processes and/or SAS datasets. This approach provides a means for ingesting preexisting gap lists and mapping them to FHIR resource elements.
- In the [Generated] approach FHIR resource inputs are consumed directly and used to generate a risk adjustment MeasureReport.


This IG includes a section describing Digital Condition Categories (dCC).  As work continues on dCC's, the approach for generating reports used there may be used in parallel. For example, a payer organization might use dCCs for evaluating diabetes, heart disease, heart failure, and COPD, with all the other CCs evaluated through Risk Adjustment Coder (e.g., Certified Risk Adjustment Coder (CRC)). This means that some means must be provided for generating a single combined MeasureReport containing CC gaps from different input streams: the diabetes CC gaps might come from dCCs, while other CC gaps might come from SAS datasets or the like. In future state as dCCs become available, a MeasureReport may result from the merger of the Assisted and Generated, as well as the Evaluated data stream method used in dCC. In this way a MeasureReport will contain a holistic view of a patient’s CC gaps, no matter where those gaps originated.

Once all MeasureReports have been created, a query can be run for one or more [Risk Adjustment Coding Gap Report]s for a single patient or group of patients. This query can be run by either the Provider to pull the report to their system, or it can be run by the Payer and pushed/posted to the Provider’s system.  

### Actors

The Actors involved in coding gap report generation are defined as the Payer and the Provider:
- The Payer acts as the Reporting Server that receives the query request for retrieving the [Risk Adjustment Coding Gap Report] resources. 
- Either the Provider or Payer acting as the Reporting Client, can request [Risk Adjustment Coding Gap Report] using a FHIR query on the MeasureReport resource.

In the example shown in Figure 2.2-1, a Payer plays the role both as Reporting Server and Reporting Client in this scenario. The Payer (acting as the Reporting Client) queries the [Risk Adjustment Coding Gap Report] on their Reporting Server based on the search parameters provided. Then the Payer POSTs the searchset Bundle to the Provider.

{% include img-portrait.html img="actors-post.png" caption="Figure 2.2-1 Report Generation Actors - Example 1"%}

As shown in Figure 2.2-2, the Provider playing the role of the Reporting Client queries the [Risk Adjustment Coding Gap Report] on the Payer's Reporting Server with search parameters.  The Payer's Reporting Server returns the [Risk Adjustment Coding Gap Report] and the evaluated Resources to the Provider.

{% include img-portrait.html img="actors-request.png" caption="Figure 2.2-2 Report Generation Actors - Example 2"%}


### Risk Adjustment Coding Gap MeasureReport

The [Risk Adjustment Coding Gap Report] is used to represent a coding gap report for a single patient and a version specific risk adjustment model. The required `MeasureReport.subject` references [US Core Patient](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html) and the required `MeasureReport.measure` element references the [Risk Adjustment Model Measure]. The [Risk Adjustment Model Measure] profile specifies risk adjustment model information, which requires both a model identifier and a version. If the Server's risk adjustment engine runs multiple risk adjustment models including different versions of the same model, then there will be multiple [Risk Adjustment Coding Gap Report]s for a patient. For example, if a risk adjustment engine runs reports using CMS-HCC V25, CMS-HCC V24, and Rx-HCC V5, then there will be three separate [Risk Adjustment Coding Gap Report]s for the patient, each for a version specific risk adjustment model.

The [MeasureReport] resource has zero to many `group` elements. Each `group` element contains information for a Condition Category (CC), therefore, each MeasureReport may contain multiple Condition Category (CC) codes. The `group.code` is used to represent the actual code for a Condition Category (CC), such as HCC 18 (Diabetes with No Complication). The [Risk Adjustment Coding Gap Report] profile adds several extensions to the MeasureReport resource’s `group` element to provide additional information about a Condition Category (CC), including:
 - the type for a Condition Category (CC) coding gap that is either historic, suspected, or net-new;
 - the evidence status of a Condition Category (CC) coding gap that is either closed-gap, open-gap, invalid-gap or pending;
 - the evidence status date indicating when the evidence status was changed to either closed-gap, open-gap, invalid-gap or pending; and
 - the hierarchical status indicating whether hierarchies were applied to a Condition Category (CC), and if applied, whether the Condition Category (CC) is superseded. The status can be either applied-superseded, applied-not-superseded, not-applied, or not-applicable.

In addition, the [Risk Adjustment Coding Gap Report] provides the capability of sharing supporting evidence for a Condition Category (CC) through the use of the `MeasureReport.evaluatedResource` element. This supporting evidence may include resources for data such as encounters, lab results, medications, and procedures, and the `evaluatedResource` shall reference the appropriate US Core profile. The extension [ra-groupReference](StructureDefinition-ra-groupReference.html) added to the `evaluatedResource` element enables tying a specific supporting evidence to a Condition Category (CC). This is accomplished by setting the extension’s `valueString` to be the same value of the `MeasureGroup.group.id` of the Condition Category (CC) to establish the association between the supporting evidence and one or more Condition Categories.  

### Example Coding Gap Report

Figure 2.2-3 is an example of how a [Risk Adjustment Coding Gap Report] might be displayed. The Provider queries for the [Risk Adjustment Coding Gap Report]s for patient Eve Everywoman (`subject`) and for a clinical evaluation period from January 1, 2021 to December 31, 2021 (`periodStart` and `periodEnd`). The Payer receives the request and finds a matching risk adjustment coding gap report for Eve Everywoman that has a clinical evaluation period of January 1, 2021 to September 30, 2021, which overlaps the `periodStart` and `periodEnd` dates provided in the query - see [Report Query]. This report was generated on October 18th, 2021 using the risk adjustment model CMS-HCC V24. As shown in this example report, Eve Everywoman has five Hierarchical Condition Categories (HCCs). Three of the HCCs are historic diagnoses and two are suspected diagnoses. For example, one of the historic diagnoses is HCC 18 (Diabetes with no Complications). The status of this coding gap is shown as closed and the evidence status date is April 1, 2021. The supporting evidence field shows the clinical data that was used to close the coding gap HCC 18.

{% include img-portrait.html img="report-risk-adjustment.png" caption="Figure 2.2-3 Example Risk Adjustment Coding Gap Report" %}

### Resources and Profiles

The following resources and their profiles specified in this IG are used to support sharing [Risk Adjustment Coding Gap Report]s between the Payer and the Provider:

|Resource Type|Profile Name|Link to Profile|
|---|---|---|
|Group|Patient Group Profile|[Patient Group]|
|MeasureReport|Risk Adjustment Coding Gap MeasureReport|[Risk Adjustment Coding Gap Report]
|Measure|Risk Adjustment Model Measure|[Risk Adjustment Model Measure]|
{: .grid}

Figure 2.2-4 provides a graphical view of how these resources are related to the example report above for some of the Condition Categories on the report. The main resource is the [Risk Adjustment Coding Gap Report] profile. This coding gap report references a [Risk Adjustment Model Measure], which indicates CMS-HCC V24 is the risk adjustment model this report is based on. The coding gap report also references the Patient ([US Core Patient](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html)) as well as the Organization ([US Core Organization](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-organization.html)) that generated the report. The graph shows three groups within a [Risk Adjustment Coding Gap Report] using three example HCCs from Figure 2.2-3 to illustrate how each `group` corresponds to an HCC including its attributes. Note that the Bundle in this graph is a searchset Bundle returned by FHIR query with the Risk Adjustment Coding Gap Reports. 

{% include img-portrait.html img="report-risk-adjustment-resource-graph.png" caption="Figure 2.2-4 Resource Graph for Risk Adjustment Coding Gap Report"%}



### Approaches for Generating Risk Adjustment Coding Gap Report

This IG describes two approaches to generate a [Risk Adjustment Coding Gap Report].  The approaches provide an adoption strategy that allows consumers of this IG to choose an implementation that matches their current state of FHIR maturity, including an option for generating a [Risk Adjustment Coding Gap Report] that requires little to no FHIR maturity and then transition to more mature approaches as their FHIR maturity grows. As mentioned above, the Payer can use one or more of these processes as fits their need or stage as they transition their processes.

#### The Assisted Approach

This approach requires little to no FHIR maturity to generate the [Risk Adjustment Coding Gap Report].  The Payer uses their existing processes, such as SQL, SAS, and object-oriented languages, to create a comma-separated value (CSV) file with tuples of patient and risk adjustment data. The Payer then uses a non-FHIR RESTful API to create the [Risk Adjustment Coding Gap Report] using the CSV file as input. Note that using this approach means that no evaluated resources will be created or referenced by the [Risk Adjustment Coding Gap Report].

The table below defines a standardized CSV header that could be used for the Assisted approach.

|Header Element|Description|Mapping|Example Value|
|---|---|---|
|periodStart|Start of the clinical evaluation period|`MeasureReport.period.start`|1/1/2021|
|periodEnd|End of clinical evaluation period|`MeasureReport.period.end`|9/30/2021|
|modelId|Risk adjustment model identifier|`Measure.identifier` (MeasureReport.measure)|https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01|
|modelVersion|Risk adjustment model version|`Measure.version` (MeasureReport.measure)|24|
|patientId|Patient identifier|`Patient.identifier` (MeasureReport.subject)|ra-patient01|
|ccCode|Condition Category Code|`MeasureGroup.group.code`|18|
|suspectType|Coding gap suspect type|`MeasureReport.group.suspectType`|historic|
|evidenceStatus|Coding gap evidence status|`MeasureReport.group.evidenceStatus`|open-gap|
|evidenceStatusDate|Coding gap evidence status date|`MeasureReport.group.evidenceStatusDate`|4/1/2021|
|hierarchicalStatus|Coding gap hierarchical status|`MeasureReport.group.hierarchicalStatus`|applied-not-superseded|
{: .grid}

{% include examplebutton.html example="get-risk-adjustment-assisted-csv-example" b_title ="Click Here To See Example Assisted CSV" %}

#### The Generated Approach

This approach requires an implementation that adheres to the requirements of this IG to generate the [Risk Adjustment Coding Gap Report]. The Payer constructs the FHIR [Risk Adjustment Coding Gap Report] and the evaluated resources based on data from *traditional* risk adjustment coding gap reports. These *traditional* reports are created by their existing processes using patient and risk adjustment data produced by risk adjustment engines.

### Usage

#### Request Risk Adjustment Coding Gap MeasureReport


`GET [base]/MeasureReport/?subject=Patient/ra-patient02&period=ge2021-01-01&period=le2021-12-31&measurereport-category="ra"&_include=MeasureReport:evaluated-resource`


{% include examplebutton.html example="get-risk-adjustment-coding-gap-report-usage-example" b_title ="Click Here to See Example GET Risk Adjustment Coding Gap Report" %}

#### Bulk Data Request for Risk Adjustment Coding Gap MeasureReports  

If requesting [Risk Adjustment Coding Gap Report] for many patients, the Reporting Client may consider using the FHIR [Asynchronous Request Patterns] for the Bulk Data exchange operation.


`GET [base]/MeasureReport/?subject=Group/ra-group123&period=ge2021-01-01&period=le2021-12-31&measurereport-category="ra"&_include=MeasureReport:evaluated-resource`

{% include examplebutton.html example="get-risk-adjustment-coding-gaps-report-usage-bulk-example" b_title = "Click Here to See Example GET Risk Adjustment Coding Gap Report Using Bulk Data" %}

Headers:
* `Prefer respond-async`
* `Accept application/fhir+json`

Note that both Prefer and Accept are required. **Prefer** specifies the response is immediate or asynchronous, which SHALL be set to *respond-async*. **Accept** specifies the format of the optional OperationOutcome response to the kick-off request. Any of the Serialization Format Representations are supported. See the base FHIR specification [Asynchronous Request Patterns] for details.

Query Parameters:
* `_outputFormat (string, optional, defaults to application/fhir+ndjson)`

Currently, only *application/fhir+ndjson* is supported.

#### Post Risk Adjustment Coding Gap Report

`POST [base]/bundle`

{% include examplebutton.html example="post-risk-adjustment-coding-gap-report-usage-example" b_title = "Click Here to See Example POST Risk Adjustment Coding Gap Report" %}


{% include link-list.md %}


---

// File: input/pagecontent/report-query.md


This section describes querying for MeasureReports and their evaluated resources. Once MeasureReports have been created, they can be retrieved using a simple RESTful query. The query uses the **_include** parameter to also retrieve in the searchset Bundle, the resources attached to the report in `MeasureReport.evaluatedResource`.

An example workflow of Payer or Provider using the Reporting Client to query for [Risk Adjustment Coding Gap Report] for a single patient is shown below in Figure 2.3-1.

{% include img-portrait.html img="risk-adjustment-coding-gap-report-single-patient.png" caption = "Figure 2.3-1 Report Query Workflow for a Single Patient" %}


### Example Queries for a single patient

`GET [base]/MeasureReport?patient=Patient/ra-patient01&period=ge2021-01-01&period=le2021-12-31&category=ra`

`GET [base]/MeasureReport?patient=Patient/ra-patient01&period=ge2021-01-01&period=le2021-12-31&category=ra&_include=MeasureReport:evaluated-resource`

### Example Queries for a group of patients

`GET [base]/MeasureReport?subject=Group/ra-group123&period=ge2021-01-01&period=le2021-12-31&category=ra`

`GET [base]/MeasureReport?subject=Group/ra-group123&period=ge2021-01-01&period=le2021-12-31&category=ra&_include=MeasureReport:evaluated-resource`

This can also be used in an asynchronous pattern using [Bulk](report-generation.html#bulk-data-request-for-risk-adjustment-coding-gap-measurereports).



{% include link-list.md %}

---

// File: input/pagecontent/StructureDefinition-ra-measurereport-bundle-intro.md


{% assign id = {{page.id}} %}

This profile builds on [Bundle](https://www.hl7.org/fhir/bundle.html).

### Mandatory Data Elements and Terminology


The following data-elements must always be present (Mandatory) or must be supported [(Must Support)](general-guidance.html#must-support). The [Formal Views](StructureDefinition-ra-measurereport-bundle.html#profile) below provides the formal summary, definitions, and terminology requirements.


**Each Bundle {{site.data.structuredefinitions.[id].type}} must have:**

1. A `Bundle.type` with a fixed code "collection"
1. A `Bundle` contains one to many `Bundle.entry`
1. A `Bundle` contains one `Bundle.entry` that is a [US Core Patient](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html)

**Each Bundle {{site.data.structuredefinitions.[id].type}} *should* have ([Must Support]):**
1. Zero to many `Bundle.entry` that contains a MeasureReport using the [Risk Adjustment Coding Gap Report Profile] for a particular Risk Adjustment Model

**Additional Profile specific implementation guidance:**
1. All risk adjustment coding gap reports contained in a [Risk Adjustment Coding Gap Report Bundle] SHALL be for the same patient.

<!--
### Mandatory Data Elements and Terminology

The following data-elements are mandatory (i.e data MUST be present). -->

<!-- **Each {{site.data.structuredefinitions.[id].type}} must have:** -->

<!--1. -->

<!--

Each {{site.data.structuredefinitions.[id].type}} *should* have ([Must Support](guidance.html#must-support)):

1. The beneficiary

-->

<!-- ### Examples-->


{% include link-list.md %}


---

// File: input/pagecontent/StructureDefinition-ra-measurereport-intro.md

{% assign id = {{include.id}} %}

### Mandatory Data Elements and Terminology

The following data-elements must always be present (Mandatory) or must be supported [(Must Support)](general-guidance.html#must-support). The [Formal Views](StructureDefinition-ra-measurereport.html#profile) below provides the formal summary, definitions, and terminology requirements.

**Each {{site.data.structuredefinitions.[id].type}} must have:**

1. A `measurereporot-category` extension with a fixed code "ra"
1. A `MeasureReport.status` element
1. A `MeasureReport.type` element with a fixed code "individual"
1. A `MeasureReport.measure` element references a [Risk Adjustment Model Measure]
1. A `MeasureReport.subject` element references a [US Core Patient](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html) profile
1. A `MeasureReport.period` element for the clinical evaluation period for which the risk adjustment coding gap report was generated.
1. If `MeasureReport.group` is present, each `MeasureReport.group` must have a `MeasureReport.group.ccType` element

**Each {{site.data.structuredefinitions.[id].type}} *should* have ([Must Support]):**

1. Zero to many `MeasureReport.group` element
1. Each `MeasureReport.group` *should* have a `MeasureReport.group.code` element
1. Each `MeasureReport.group` *should* have a `MeasureReport.group.evidenceStatus` element
1. Each `MeasureReport.group` *should* have a `MeasureReport.group.evidenceStatusDate` element
1. Each `MeasureReport.group` *should* have a `MeasureReport.group.hierarchicalStatus` element
1. Each `MeasureReport.group` *should* have zeor too many `MeasureReport.group.dxCode` element
1. Each `MeasureReport.group` *should* have zero to many `MeasureReport.evalautedResource` element

**Each {{site.data.structuredefinitions.[id].type}} *may* have ([Must Support]):**
1. Each `MeasureReport.group` *may* have zero to one `MeasureReport.group.confidenceScale` element
1. Each `MeasureReport.group` *may* have zero to many `MeasureReport.group.ccRemark` element

**Additional Profile specific implementation guidance:**
1. `evaluatedResource` **SHALL** reference resources using USCore profiles where applicable

The Clinical Data Collection Deadline element, `clinicalDataCollectionDeadline`, was added as an extension to MeasureReport. We are seeking comment from implementers if they intend to use this element when communicating risk adjustment coding gap reports from payers to providers.
{:.stu-note}

{% include link-list.md %}


---

// File: input/pagecontent/StructureDefinition-ra-model-measure-intro.md

{% assign id = {{include.id}} %}

### Mandatory Data Elements and Terminology


The following data-elements must always be present (Mandatory) or must be supported [(Must Support)](general-guidance.html#must-support). The [Formal Views](StructureDefinition-ra-model-measure.html#profile) below provides the formal summary, definitions, and terminology requirements.

**Each {{site.data.structuredefinitions.[id].type}} must have:**

1. A `Measure.status` element
1. A `Measure.identifier` element which is the identifier of a Risk Adjustment Model
1. A `Measure.version` element which is the version of the Risk Adjustment Model


**Each {{site.data.structuredefinitions.[id].type}} *should* have ([Must Support]):**

1. A `Measure.name` element
1. A `Measure.title` element


---

// File: input/pagecontent/StructureDefinition-ra-patient-group-intro.md

{% assign id = {{include.id}} %}

### Mandatory Data Elements and Terminology

The following data-elements must always be present (Mandatory) or must be supported [(Must Support)](general-guidance.html#must-support). The [Formal Views](StructureDefinition-ra-patient-group.html#profile) below provides the formal summary, definitions, and terminology requirements.

**Each {{site.data.structuredefinitions.[id].type}} must have:**


1. A 'Group.type' element
1. An 'Group.actual' element
1. One or more `Group.member` element(s) and each `member` SHALL reference a [US Core Patient](http://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html) resource


---

// File: input/pagecontent/submit-data-to-payer.md


### Introduction and Background

Once the [Risk Adjustment Coding Gap Report] has been constructed, it is sent to the intended recipient and filtered to ensure that only germane HCC gaps are made available to providers. The Provider (or a software program acting on behalf of the Provider) determines whether the gap is currently valid, and whether the requested encounter data evidence exists to close the gap. Three courses of action are available to the Provider (or a software program acting on behalf of the Provider):
1.	They can request the gap be closed by submitting a claim or other valid form of encounter data.
2.	They can request the gap be invalidated (e.g., the patient never had the condition described by the gap; the patient formerly had the condition, but it is no longer active; the gap inaccurately describes the patient’s condition, such as when the HCC gap is for suspected heart disease when in reality the patient has heart failure.) 
3.	The Provider may take no action, and simply wait to see what develops (e.g., monitoring the patient for late effects of acute conditions such as heart attack or stroke).
Gap closure and invalidation requests require the Provider to submit valid encounter data to the Payer for verification purposes.

Just as the Payer is responsible for generating HCC gaps, so too are they responsible for resolving them. The Payer ingests the valid encounter data supplied by the Provider that supports gap closure and gap invalidation and updates the gap status based on the clinical evaluation evidence. It is recommended that the Payer record the date when the gap status change occurs so that providers may receive credit for their performance (e.g., if the Payer incentivizes providers for early closure of HCC gaps prior to the Medicare Advantage September sweeps). At this time the Payer will perform any necessary backend processes before closing the loop with the generation of a new HCC gap list, and the cycle begins anew. While these payer backend processes are largely outside the scope of this implementation guide (IG), there are times when they can impact gap data. One of these is the process of submitting risk adjustment data to government agencies (e.g., Encounter Data Processing System (EDPS) in the case of MA risk adjustment; the Edge Server in the case of ACA risk adjustment). 

It is possible that an HCC gap closure may not be confirmed by these agencies during the submission process, either because the HCC is rejected or because of a submission error. Either way, a situation may arise whereby the HCC gap is closed from the Payer’s perspective, but the data has not been accepted from the government’s perspective. This can place the Payer in a quandary, since the Risk Adjustment IG recommends that the Payer close the loop by sending the Provider confirmation that their gap closure or invalidation request has been processed. If the Payer provides this confirmation, then the government agency subsequently rejects the encounter data submission, the Payer might need to reopen the HCC gap – and this can lead to provider abrasion. It is up to the Payer to decide how to handle this situation, but the Risk Adjustment IG has provided an additional `evidenceStatus` value of `pending` to indicate to the Provider that the Payer has received their gap closure request, and is in the process of confirming that closure with the government agency. The Payer will subsequently change the evidenceStatus to `open-gap` or `closed-gap` depending on the resolution of that submission.

### Actors

The Actors involved in the Submit Data to Payer phase are Provider and Payer. 
- Provider (or a software program acting on behalf of the Provider), acts as Data Submission Client, reviews the [Risk Adjustment Coding Gap Report] generated by the Payer and creates a [Risk Adjustment Data Exchange MeasureReport] to submit clinical evaluation evidence for gap closure and/or invalidation when applicable.  
- Payer, acts as Data Submission Server, receives and processes the [Risk Adjustment Data Exchange MeasureReport] provided by the Provider.  

{% include img-portrait.html img="three-stages-submit.png" caption="Figure 2.4-1: Report Submit Data to Payer Overview"%}

### Submit Data

If the Provider identifies the need of closing or invalidating a coding gap or simply needs to provide more up to date patient data to the Payer, they will create a [Risk Adjustment Data Exchange MeasureReport] and use the [$submit-data] operation to send that data to the Payer. The `evaluatedResource` element on a Risk Adjustment Data Exchange Measure Report can be used to reference any clinical evaluation evidence that will need to be submitted to the Payer. For example, if the Provider sends a patient’s Consolidated Clinical Document Architecture (C-CDA) document as valid encounter data, the `evaluatedResource` will be a reference to a DocumentReference resource for the C-CDA document. For the [$submit-data] operation, the measureReport parameter will be the Risk Adjustment Data Exchange MeasureReport and the resource parameter will be the DocumentReference resource for the C-CDA and other data-of-interest being submitted. In the risk adjustment use case scenario, the effect of invoking the $submit-data operation is that the submitted data is posted to the receiving system and can be used for subsequent risk adjustment coding gap evaluation and report generation.  

The Risk Adjustment Data Exchange MeasureReport provides a way to link the submitted data to the original Payer generated coding gap report. Provider can provide the unique id of the original Payer generated coding gap report using the `payerCodingGapReportId`. The unique id is the `MeasureReport.id` from the Risk Adjustment Coding Gap Report. The Provider could also include the Condition Categories that they intend to close and/or invalidate from the original Risk Adjustment Coding Gap Report in the Data Exchange MeasureReport by populating the `MeasureReport.group`.    

After the Payer receives and processes the clinical evaluation evidence data submitted by the Provider, the data will then be used for the next coding gap evaluation and coding gap reports generation. If Provider identifies issues with the gaps shown on the new coding gap reports, they will use the data submission process again to submit proper data and documentation to address the issues.

{% include img-portrait.html img="submit-data.png" caption="Figure 2.4-2: Submit Data"%}

{% include link-list.md %}




---

// File: input/pagecontent/terminology.md


### Value Sets

{% include list-simple-valuesets.xhtml %}

### Code Systems

{% include list-simple-codesystems.xhtml %}

---


<br />

{% include link-list.md %}


---

// File: input/history/history.md

---
title: Version History
layout: default
active: history
---

[Short descripton of guide here.]

This table provides a list of all the versions of FHIR versions of the {{site.data.fhir.igName}} Implementation Guide that are available. See [FHIR Releases and Versioning](http://build.fhir.org/versions.html#versions) for a description of how the versioning of this Implementation Guide is managed.  As well, this guide follow the general definitions and guidelines outlined in [Rules for Inter-version change](http://build.fhir.org/versions.html#change):

|Date|Version|Description|
|---|---|---|
|**Current Versions**|
|n/a|n/a|No published version yet|
|[current](#)|(last commit)|Current Development build (may be incoherent and change rapidly)|
|**STU1 sequence**|
|[mmm yyyy](#)|0.1.0| Release n.n.n|


---

// File: input/includes/get-risk-adjustment-assisted-csv-example.md


#### Examples

{:.no_toc}

**Scenario:**

The Payer has used their existing processes to collect risk adjustment data and would to use the Assisted Approach to generate a Risk Adjustment Coding Gap Report.

**POST risk adjustment CSV data to REST endpoint**

```txt
POST [base]
```

**Request body**

```csv
periodStart,periodEnd,modelId,modelVersion,patientId,ccCode,suspectType,evidenceStatus,evidenceStatusDate,hierarchicalStatus
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,18,historic,closed-gap,2021-04-01,applied-not-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,111,historic,pending,2021-09-29,applied-not-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,24,historic,open-gap,2020-07-15,applied-not-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,112,historic,closed-gap,2021-04-27,applied-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,19,historic,pending,2021-09-27,applied-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,84,historic,open-gap,2020-12-15,applied-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,22,suspected,closed-gap,2021-03-15,applied-not-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,96,suspected,pending,2021-09-27,applied-not-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,110,suspected,open-gap,2020-07-15,applied-not-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,83,net-new,pending,2021-09-28,applied-not-superseded
2021-01-01,2021-09-30,https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01,24,ra-patient01,59,historic,open-gap,2020-07-15,applied-not-superseded
```

**Response**

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "resource": {
        "resourceType": "MeasureReport",
        "id": "assisted-5534e962-4493-4be7-9499-aeadc962f641",
        "meta": {
          "profile": [
            "https://build.fhir.org/ig/HL7/davinci-ra/StructureDefinition-ra-measurereport.html"
          ]
        },
        "status": "complete",
        "type": "individual",
        "measure": "https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01",
        "subject": {
          "reference": "Patient/ra-patient01"
        },
        "date": "2023-03-10T18:31:14+00:00",
        "period": {
          "start": "2021-01-01T00:00:00+00:00",
          "end": "2021-09-30T00:00:00+00:00"
        },
        "group": [
          {
            "id": "group-18",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "historic"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "closed-gap"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2021-04-01"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "18"
                }
              ]
            }
          },
          {
            "id": "group-111",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "historic"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "pending"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2021-09-29"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "111"
                }
              ]
            }
          },
          {
            "id": "group-24",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "historic"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "open-gap"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2020-07-15"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "24"
                }
              ]
            }
          },
          {
            "id": "group-112",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "historic"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "closed-gap"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2021-04-27"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "112"
                }
              ]
            }
          },
          {
            "id": "group-19",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "historic"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "pending"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2021-09-27"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "19"
                }
              ]
            }
          },
          {
            "id": "group-84",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "historic"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "open-gap"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2020-12-15"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "84"
                }
              ]
            }
          },
          {
            "id": "group-22",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "suspected"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "closed-gap"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2021-03-15"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "22"
                }
              ]
            }
          },
          {
            "id": "group-96",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "suspected"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "pending"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2021-09-27"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "96"
                }
              ]
            }
          },
          {
            "id": "group-110",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "suspected"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "open-gap"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2020-07-15"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "110"
                }
              ]
            }
          },
          {
            "id": "group-83",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "net-new"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "pending"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2021-09-28"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "83"
                }
              ]
            }
          },
          {
            "id": "group-59",
            "extension": [
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                      "code": "historic"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status",
                      "code": "open-gap"
                    }
                  ]
                }
              },
              {
                "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                "valueDate": "2020-07-15"
              }
            ],
            "code": {
              "coding": [
                {
                  "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                  "version": "24",
                  "code": "59"
                }
              ]
            }
          }
        ]
      },
      "request": {
        "method": "PUT",
        "url": "MeasureReport/assisted-5534e962-4493-4be7-9499-aeadc962f641"
      }
    }
  ]
}
```


---

// File: input/includes/get-risk-adjustment-coding-gap-report-usage-example.md


#### Examples
{:.no_toc}

**Scenario:**

A provider requested a risk adjustment coding gap report for patient, *ra-patient01*, to see if the patient has any risk adjustment coding gaps for the clinical evaluation period from 2021-01-01 to 2021-09-30.

**GET Risk Adjustment Coding Gaps Report**


```
GET [base]/MeasureReport/?subject=Patient/ra-patient01&period=ge2021-01-01&period=le2021-09-30&_profile=http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-measurereport&_include=MeasureReport:evaluated-resource
```

**Request body**
~~~
(Note that request body is not applicable in this example)
~~~

**Response**

~~~
HTTP/1.1 200
Date: Tues, 16 November 2021 01:02:06 GMT
Content-Type: application/fhir+json;charset=UTF-8
...Other Headers...

{
  "resourceType" : "Bundle",
  "id" : "ra-bundle02",
  "meta": {
       "lastUpdated": "2021-11-16T01:02:06"
  },
  "identifier" : {
    "system" : "urn:ietf:rfc:3986",
    "value" : "urn:uuid:af2e880f-3992-4cae-8f0d-aaf3a5c49c9e"
  },
  "type" : "searchset",
  "entry" : [
    {
      "fullUrl" : "https://ra.davinci.hl7.org/fhir/MeasureReport/ra-measurereport01",
      "resource" : {
        "resourceType" : "MeasureReport",
        "id" : "ra-measurereport01",
        "meta" : {
          "profile" : [
            "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-measurereport"
          ]
        },
        "status" : "complete",
  "type" : "individual",
  "measure" : "https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01",
  "subject" : {
    "reference" : "Patient/ra-patient01"
  },
  "date" : "2021-10-18",
  "reporter" : {
    "reference" : "Organization/ra-payer01"
  },
  "period" : {
    "start" : "2021-01-01",
    "end" : "2021-09-30"
  },
  "group" : [
    {
      "id" : "group-001",
      "extension" : [
        {
          "url" : "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type",
                "code" : "historic"
              }
            ]
          }
        },

      ...

}

~~~


---

// File: input/includes/get-risk-adjustment-coding-gaps-report-usage-bulk-example.md


#### Examples
{:.no_toc}

**Scenario:**

The Client would like to request risk adjustment coding gap reports on many patients. They have created a FHIR Group resource using the Risk Adjustment [Patient Group] profile with the id of ra-group123. Because they expect the creation of the reports to take a while and many FHIR bundles will be returned and be processed, they would like to make the request in an asynchronous manner returning NDJSON that will be easier for them to process.

The request below asks for Group id of ra-group123 to be run asynchronously with FHIR+ndjson as the output format. The header portions should be entered in the API client header section. For example, in the [Postman](https://www.postman.com/) tool, enter “Prefer” in Key and “respond-async” in Value as an entry in the Headers tab.

**GET Risk Adjustment Coding Gap Report Using Bulk Data**

Run $report operation in an asynchronous mode:
```
GET [base]/MeasureReport/?subject=Group/ra-group123&period=ge2021-01-01&period=le2021-12-31&_profile=http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-measurereport&_include=MeasureReport:evaluated-resource

```
{% include link-list.md %}


---

// File: input/includes/link-list.md

[Home]: index.html "Home Page"

[Asynchronous Request Patterns]: https://www.hl7.org/fhir/async.html
[Bulk]: report-generation.html#bulk-data-request-for-risk-adjustment-coding-gap-measurereports
[Bundle01: Risk Adjustment Bundle, (MeasureReport01: Patient01)]: Bundle-ra-bundle01.html
[Capability Statements]: capabilities.html
[Clinical Evaluation Period]:glossary.html#glossary
[Clinical Quality Information (CQI) Work Group]: http://www.hl7.org/Special/committees/cqi/overview.cfm
[Condition01Pat03: Other artificial openings of gastrointestinal tract status]: Condition-ra-condition01pat03.html
[Condition02pat01: Diabetes mellitus due to underlying condition with other diabetic kidney complication]: Condition-ra-condition02pat01.html
[Condition03pat01: Chronic obstructive pulmonary disease with (acute) exacerbation]: Condition-ra-condition03pat01.html  
[Condition04Pat03: Chronic obstructive pulmonary disease with (acute) exacerbation]: Condition-ra-condition04pat03.html
[Condition05Pat03: Unspecified protein-calorie malnutrition]: Condition-ra-condition05pat03.html
[Condition06Pat03: Crohn's disease of large intestine with unspecified complications]: Condition-ra-condition06pat03.html
[Condition07Pat03: Other persistent atrial fibrillation]: Condition-ra-condition07pat03.html
[Condition08Pat01: Bipolar disorder, current episode mixed, mild]: Condition-ra-condition08pat01.html
[Condition09Pat01: Allergic bronchopulmonary aspergillosis]: Condition-ra-condition09pat01.html
[Condition10Pat01: Long term (current) use of insulin]: Condition-ra-condition10pat01.html
[Condition11Pat01: Acute pulmonary edema]: Condition-ra-condition11pat01.html
[Condition12Pat01: Manic episode, unspecified (clinical evaluation evidence for Task01)]: Condition-ra-condition12pat01.html

[Condition15Pat03: Diabetes mellitus due to underlying condition with diabetic chronic kidney disease]: Condition-ra-condition15pat03.html
[Condition16Pat03: Dependence on renal dialysis]: Condition-ra-condition16pat03.html
[Condition17Pat01: Body mass index (BMI) 45.0-49.9, adult]: Condition-ra-condition17pat01.html
[Condition18Pat01: Longstanding persistent atrial fibrillation]: Condition-ra-condition18pat01.html
[Condition21Pat03: Type 2 diabetes mellitus without complications]: Condition-ra-condition21pat03.html
[Condition22Pat03: Other acute kidney failure]: Condition-ra-condition22pat03.html
[Condition23Pat03: Chronic kidney disease, stage 5]: Condition-ra-condition23pat03.html
[Condition31Pat02: Typical atrial flutter]: Condition-ra-condition31pat02.html
[Condition32Pat03: Chronic pulmonary embolism]: Condition-ra-condition32pat03.html
[Condition33Pat01: Respiratory arrest]: Condition-ra-condition33pat01.html
[Condition35Pat03: Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene]: Condition-ra-condition35pat03.html
[Condition42Pat03: Other artificial openings of gastrointestinal tract status]: Condition-ra-condition42pat03.html
[Condition43pat01: Diabetes mellitus due to underlying condition with other diabetic kidney complication]: Condition-ra-condition43pat01.html
[Condition44Pat01: Allergic bronchopulmonary aspergillosis]: Condition-ra-condition44pat01.html
[Da Vinci - Member Attribution (ATR) List]: http://hl7.org/fhir/us/davinci-atr/
[Downloads]: downloads.html
[Examples]: examples.html
[Encounter01Pat03: Pat03 Encounter on 2021-07-14]: Encounter-ra-encounter01pat03.html
[Encounter02Pat01: Pat01 Encounter on 2021-01-31]: Encounter-ra-encounter02pat01.html
[Encounter03Pat01: Pat01 Encounter on 2021-09-26]: Encounter-ra-encounter03pat01.html
[Encounter04Pat03: Pat03 Encounter on 2020-12-18]: Encounter-ra-encounter04pat03.html
[Encounter05Pat03: Pat03 Encounter on 2020-03-03]: Encounter-ra-encounter05pat03.html
[encounter06Pat03: Pat03 Encounter on 2020-09-17]: Encounter-ra-encounter06pat03.html
[Encounter07Pat03: Pat03 Encounter on 2019-02-07]: Encounter-ra-encounter07pat03.html
[Encounter08Pat01: Pat01 Encounter on 2017-02-03]: Encounter-ra-encounter08pat01.html
[Encounter09Pat01: Pat01 Encounter on 2021-03-27]: Encounter-ra-encounter09pat01.html
[Encounter11Pat01: Pat01 Encounter on 2020-11-02]: Encounter-ra-encounter11pat01.html
[Encounter15Pat03: Pat03 Encounter on 2021-08-08]: Encounter-ra-encounter15pat03.html
[Encounter16Pat03: Pat03 Encounter on 2021-07-27]: Encounter-ra-encounter16pat03.html
[Encounter19Pat03: Pat03 Encounter on 2019-08-23]: Encounter-ra-encounter19pat03.html
[Encounter21Pat03: Pat03 Encounter on 2021-01-30]: Encounter-ra-encounter21pat03.html
[Encounter22Pat03: Pat03 Encounter on 2021-07-01]: Encounter-ra-encounter22pat03.html
[Encounter31Pat02: Pat02 Encounter on 2021-08-06]: Encounter-ra-encounter31pat02.html
[Encounter35Pat03: Pat03 Encounter on 2021-02-12]: Encounter-ra-encounter35pat03.html
[Encounter42Pat03: Pat03 Encounter on 2020-02-10]: Encounter-ra-encounter42pat03.html
[Encounter43Pat01: Pat01 Encounter on 2019-02-10]: Encounter-ra-encounter43pat01.html
[Encounter44Pat01: Pat01 Encounter on 2017-01-18]: Encounter-ra-encounter44pat01.html
[Encounter45Pat01: Pat01 Encounter on 2018-07-21]: Encounter-ra-encounter45pat01.html
[Encounter46Pat01: Pat01 Encounter on 2021-10-15 (clinical evaluation evidence for Task01)]: Encounter-ra-encounter46pat01.html

[Extensions]: extensions.html
[General Guidance]: general-guidance.html
[Glossary]: glossary.html
[Group01: Risk Adjustment Patient Group, (Patient01: Eve Everywoman)]: Group-ra-group01.html
[Group02: Risk Adjustment Patient Group, (Patient02: Adam Everyman, Patient03: Nelda Nuclear)]: Group-ra-group02.html
[Guidance]: guidance.html
[HL7 Da Vinci Guiding Principles]: https://confluence.hl7.org/display/DVP/Da+Vinci+Clinical+Advisory+Council+Members?preview=/66940155/66942916/Guiding%20Principles%20for%20Da%20Vinci%20Implementation%20Guides.pdf
[Measure01: Risk Adjustment Model CMS-HCC V24]: Measure-RAModelExample01.html
[Measure02: Risk Adjustment Model CMS-HCC V21]: Measure-RAModelExample02.html
[Measure03: Risk Adjustment Model CMS-RxHCC V05]: Measure-RAModelExample03.html
[MeasureReport01: Risk Adjustment Coding Gap Report, RA Model CMS-HCC V24 (Patient01: Eve Everywoman)]: MeasureReport-ra-measurereport01.html
[MeasureReport01WithRemarks: Risk Adjustment Coding Report with Condition Category Remarks Added, RA Model CMS-HCC V24 (Patient01: Eve Everywoman)]: MeasureReport-ra-measurereport01-with-remark.html
[MeasureReport02: Risk Adjustment Coding Gap Report, RA Model CMS-RxHCC V5 (Patient01: Eve Everywoman)]: MeasureReport-ra-measurereport02.html
[MeasureReport03: Risk Adjustment Coding Gap Report, RA Model CMS-HCC V24 (Patient02: Adam Everyman)]: MeasureReport-ra-measurereport03.html
[MeasureReport04: Risk Adjustment Coding Gap Report, RA Model CMS-HCC V21 (Patient03: Nelda Nuclear)]: MeasureReport-ra-measurereport04.html
[MeasureReport05: Risk Adjustment Coding Gap Report, RA Model CMS-RxHCC V5 (Patient03: Nelda Nuclear)]: MeasureReport-ra-measurereport05.html
[MeasureReport06: Risk Adjustment Coding Gap Report, RA Model CMS-RxHCC V5 (Patient02: Adam Everyman)]: MeasureReport-ra-measurereport06.html

[MeasureReport01]: {{site.data.fhir.path}}measurereport.html
[Methodology]: methodology.html
[Observation01Pat03: Pat03 Creatinine on 20210728]: Observation-ra-obs01pat03.html
[Observation02Pat03: Pat03 PHQ9 on 20190823]: Observation-ra-obs02pat03.html
[Observation21Pat01: Pat01 Trypsin (Mass/volume) in Serum or Plasma from 20170617]: Observation-ra-obs21pat01.html
[Operations]: operations.html
[Organization01Lab01: Laboratory Organization XYZ Laboratory]: Organization-ra-laboratory01.html
[Organization01: Payer Organization ABC Payer]: Organization-ra-payer01.html
[Organization01Pat01: Community Urgent Care]: Organization-ra-org01pat01.html
[Organization02Pat02: GHH Outpatient Clinic]: Organization-ra-org02pat02.html
[Organization01Pat03: Community HealthCenter]: Organization-ra-org03pat03.html
[Patient Group]: StructureDefinition-ra-patient-group.html
[Patient Group Profile]: StructureDefinition-ra-patient-group.html
[Patient01: Eve Everywoman]: Patient-ra-patient01.html
[Patient02: Adam Everyman]: Patient-ra-patient02.html
[Patient03: Nelda Nuclear]: Patient-ra-patient03.html
[Practitioner01: Harold Hippocrates]: Practitioner-ra-prac01pat01.html
[Practitioner02: Patrick Pump]: Practitioner-ra-prac02pat02.html
[Practitioner03: Otto Osler]: Practitioner-ra-prac03pat03.html
[DocumentReference: Outpatient Note (Patient01: Eve Everywoman)]: DocumentReference-ra-documentreference01pat01.html
[Parameters: PATCH example for sending Condition Category Remark]: Parameters-ra-measurereport01-patch.json.html
[Parameters: PATCH example for sending Condition Category Remark with multiple value]: Parameters-ra-measurereport01-patch-mult.html

[Profiles]: profiles.html
[Remediation]: remediation.html
[Report Annotation]: report-annotation.html
[Report Generation]: report-generation.html
[Report Query]: report-query.html
[Risk Adjustment Coding Gap Remediation]: guidance-ra-coding-gap-remediation.html
[Risk Adjustment Coding Gap Resolution]: guidance-ra-coding-gap-resolution.html
[Risk Adjustment Coding Gap Report Bundle]: StructureDefinition-ra-measurereport-bundle.html
[Risk Adjustment Coding Gap Report]: StructureDefinition-ra-measurereport.html
[Risk Adjustment Coding Gap Report Generation]: guidance-ra-coding-gap-report-generation.html
[Risk Adjustment Coding Gap Report Profile]: StructureDefinition-ra-measurereport.html
[Risk Adjustment Model Measure]: StructureDefinition-ra-model-measure.html
[Risk Adjustment Model Measure Profile]: StructureDefinition-ra-model-measure.html

[Risk Adjustment Data Exchange MeasureReport]: StructureDefinition-ra-datax-measurereport.html

[SMART App Launch]: http://hl7.org/fhir/smart-app-launch/history.html
[SMART Backend Services]: https://hl7.org/fhir/uv/bulkdata/authorization/index.html
[Specifying dCC]: dcc.html

[Terminology]: terminology.html
[Transition Strategy]: dcc-transition-strategy.html

[$ra.evaluate-measure]: OperationDefinition-ra.evaluate-measure.html
[Generated]: report-generation.html#the-generated-approach
[Assisted]: report-generation.html#the-assisted-approach
[Evaluated]:report-generation.html#the-evaluated-approach
[Report Generation Approaches]: report-generation.html#approaches-for-generating-risk-adjustment-coding-gap-report
[Report Generation Introduction and Background]: report-generation.html#introduction-and-background
[Digital Condition Category (dCC)]: dcc.html

[Condition Category Remark]: StructureDefinition-ra-ccRemark.html
[Add Remark to Condition Category]: cc-remark.html
[Submit Data to Payer]: submit-data-to-payer.html

[$submit-data]: https://hl7.org/fhir/R4/measure-operation-submit-data.html

[Data Exchange MeasureReport01: RA Model CMS-HCC V24 (Patient01: Eve Everywoman)]: MeasureReport-ra-datax-measurereport01.html

[Parameters: Submit Data example for sending a C-CDA document]: Parameters-ra-submit-data.html

[MeasureReport-Category Search Parameter]: SearchParameter-measurereport-category.html
[RA Parameters ccRemark Patch Profile]: StructureDefinition-ra-parameters-cc-remark-patch.html


---

// File: input/includes/patch-risk-adjustment-coding-gap-report-with-remark-example.md

#### Examples
{:.no_toc}

**Scenario:**

A Provider receives a Risk Adjustment Gaps Report from a Payer.  The Provider uses PATCH to update the Report at the Payer with just the Remark information they add at time of visit.

**PATCH Risk Adjustment Coding Gaps Report with Remarks**

```
PATCH [base]/MeasureReport/ra-measurereport01
```

**Request body**
~~~
{
    "resourceType": "Parameters",
    "id": "ra-measurereport01",
    "parameter": [
        {
            "name": "operation",
            "part": [
                {
                    "name": "type",
                    "valueCode": "add"
                },
                {
                    "name": "path",
                    "valueString": "MeasureReport.group.where(id='group-001')"
                },
                {
                    "name": "name",
                    "valueString": "extension"
                },
                {
                    "name": "value",
                    "part": [
                        {
                            "name": "url",
                            "valueUri": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-ccRemark"
                        },
                        {
                            "name": "extension",
                            "part": [
                                {
                                    "name": "url",
                                    "valueUri": "authorDatetime"
                                },
                                {
                                    "name": "value",
                                    "valueDateTime": "2023-12-11"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "operation",
            "part": [
                {
                    "name": "type",
                    "valueCode": "add"
                },
                {
                    "name": "path",
                    "valueString": "MeasureReport.group.where(id='group-001')"
                },
                {
                    "name": "name",
                    "valueString": "extension"
                },
                {
                    "name": "value",
                    "part": [
                        {
                            "name": "url",
                            "valueUri": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-ccRemark"
                        },
                        {
                            "name": "extension",
                            "part": [
                                {
                                    "name": "url",
                                    "valueUri": "text"
                                },
                                {
                                    "name": "value",
                                    "valueString": "Example author text for a condition category."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "operation",
            "part": [
                {
                    "name": "type",
                    "valueCode": "add"
                },
                {
                    "name": "path",
                    "valueString": "MeasureReport.group.where(id='group-002')"
                },
                {
                    "name": "name",
                    "valueString": "extension"
                },
                {
                    "name": "value",
                    "part": [
                        {
                            "name": "url",
                            "valueUri": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-ccRemark"
                        },
                        {
                            "name": "extension",
                            "part": [
                                {
                                    "name": "url",
                                    "valueUri": "authorDatetime"
                                },
                                {
                                    "name": "value",
                                    "valueDateTime": "2024-01-07"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
~~~

**Response**

~~~
HTTP/1.1 200 ok
~~~


---

// File: input/includes/post-risk-adjustment-coding-gap-report-usage-example.md


#### Examples
{:.no_toc}

**Scenario:**

A payer posts a risk adjustment coding gap report for patient, *ra-patient01*, to let the provider know if the patient has any risk adjustment coding gaps for the clinical evaluation period from 2021-01-01 to 2021-09-30.

**POST Risk Adjustment Coding Gaps Report**


```
POST [base]/bundle/ra-bundle01
```

**Request body**
~~~
{
    "resourceType": "Bundle",
    "id": "ra-bundle01",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-measurereport-bundle"
        ]
    },
    "identifier": {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:8d3e72d9-9d74-4cbb-b797-a1cab0d13492"
    },
    "type": "collection",
    "timestamp": "2021-11-16T06:17:58.172+00:00",
    "entry": [
        {
            "fullUrl": "https://ra.davinci.hl7.org/fhir/MeasureReport/ra-measurereport01",
            "resource": {
                "resourceType": "MeasureReport",
                "id": "ra-measurereport01",
                "meta": {
                    "profile": [
                        "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-measurereport"
                    ]
                },
                ...
~~~

**Response**

~~~
HTTP/1.1 200 ok
~~~


---

// File: input/includes/put-risk-adjustment-coding-gap-report-with-remark-example.md

#### Examples
{:.no_toc}

**Scenario:**

A Provider receives a Risk Adjustment Gaps Report from a Payer.  After seeing the patient, Remarks are added to the full report and it is updated at the Payer.

**PUT Risk Adjustment Coding Gaps Report with Remarks**


```
PUT [base]/MeasureReport/ra-measurereport01
```

**Request body**
~~~
{
    "resourceType": "MeasureReport",
    "id": "ra-measurereport01",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-measurereport"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-clinicalDataCollectionDeadline",
            "valueDate": "2022-03-31"
        }
    ],
    "status": "complete",
    "type": "individual",
    "measure": "https://build.fhir.org/ig/HL7/davinci-ra/Measure-RAModelExample01",
    "subject": {
        "reference": "Patient/ra-patient01"
    },
    "date": "2021-10-18",
    "reporter": {
        "reference": "Organization/ra-payer01"
    },
    "period": {
        "start": "2021-01-01",
        "end": "2021-09-30"
    },
    "group": [
        {
            "id": "group-001",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "18",
                        "display": "Diabetes with Chronic Complications"
                    }
                ],
                "text": "HCC 18: Diabetes with Chronic Complications"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "historic",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "closed-gap",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2021-04-01"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-not-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "group-002",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "111",
                        "display": "Chronic Obstructive Pulmonary Disease"
                    }
                ],
                "text": "HCC 111: Chronic Obstructive Pulmonary Disease"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "historic",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "pending",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2021-09-29"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-not-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "group-003",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "59",
                        "display": "Major Depressive, Bipolar, and Paranoid Disorders"
                    }
                ],
                "text": "HCC 59: Major Depressive, Bipolar, and Paranoid Disorders"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "historic",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "open-gap",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2020-07-15"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-not-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-ccRemark",
                    "extension": [
                        {"url": "author",
                        "valueIdentifier": {
                            "system": "http://hl7.org/fhir/sid/us-npi",
                            "value": "1234567890"
                            }
                        },
                        {"url": "authorDatetime",
                        "valueDateTime": "2021-11-01"
                        },
                        {"url": "text",
                        "valueString": "Diagnosis added"
                        },
                        {"url": "code",
                            "valueCodeableConcept" : {
                                "coding": [
                                    {
                                    "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/coding-gap-remark",
                                    "code": "assessed-present",
                                    "display": "Assessed and present"
                                    }
                                ]
                            }
                        },
                        {"url": "relatedDataIdentifier",
                            "valueIdentifier":  {
                                "system": "http://example.org/fhir/myclaimno",
                                "value": "CLM23333"}
                        }
                    ]
                }
            ]
        },
        {
            "id": "group-004",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "112",
                        "display": "Fibrosis of lung and other chronic lung disorders"
                    }
                ],
                "text": "HCC 112: Fibrosis of lung and other chronic lung disorders"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "historic",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "closed-gap",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2021-04-27"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "group-005",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "19",
                        "display": "Diabetes without Complications"
                    }
                ],
                "text": "HCC 19: Diabetes without Complications"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "historic",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "pending",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2021-09-27"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "group-006",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "84",
                        "display": "Cardio-Respiratory Failure and Shock"
                    }
                ],
                "text": "HCC 84: Cardio-Respiratory Failure and Shock"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "historic",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "open-gap",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2020-12-15"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-ccRemark",
                    "extension": [
                        {"url": "author",
                            "valueIdentifier": {
                            "system": "http://hl7.org/fhir/sid/us-npi",
                            "value": "1234567890"
                            }
                        },
                        {"url": "authorDatetime",
                        "valueDateTime": "2021-11-01"
                        },
                        {"url": "text",
                        "valueString": "Continue evaluation"
                        },
                        {"url": "code",
                            "valueCodeableConcept" : {
                                "coding": [
                                    {
                                    "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/coding-gap-remark",
                                    "code": "deferred",
                                    "display": "Deferred"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]

        },
        {
            "id": "group-007",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "22",
                        "display": "Morbid Obesity"
                    }
                ],
                "text": "HCC 22: Morbid Obesity"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "suspected",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "closed-gap",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2021-03-15"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-not-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "group-008",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "96",
                        "display": "Specified Heart Arrhythmias"
                    }
                ],
                "text": "HCC 96: Specified Heart Arrhythmias"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "suspected",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "pending",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2021-09-27"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-not-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "group-009",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "110",
                        "display": "Cystic Fibrosis"
                    }
                ],
                "text": "HCC 110: Cystic Fibrosis"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "suspected",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "open-gap",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2020-07-15"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-not-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-confidenceScale",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "255508009",
                                "system": "http://snomed.info/sct",
                                "display": "Medium"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-ccRemark",
                    "extension": [
                        {"url": "author",
                        "valueIdentifier": {
                            "system": "http://hl7.org/fhir/sid/us-npi",
                            "value": "1234567890"
                            }
                        },
                        {"url": "authorDatetime",
                        "valueDateTime": "2021-11-01"
                        },
                        {"url": "text",
                        "valueString": "Not diagnosed"
                        },
                        {"url": "code",
                            "valueCodeableConcept" : {
                                "coding": [
                                    {
                                    "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/coding-gap-remark",
                                    "code": "assessed-not-present"
                                    
                                    }
                                ]
                            }
                        },
                        {"url": "relatedDataIdentifier",
                            "valueIdentifier":  {
                                "system": "http://example.org/fhir/mychart",
                                "value": "432203939"}
                        }
                    ]
                }
            ]
        },
        {
            "id": "group-010",
            "code": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/cmshcc",
                        "version": "24",
                        "code": "83",
                        "display": "Respiratory Arrest"
                    }
                ],
                "text": "HCC 83: Respiratory Arrest"
            },
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-suspectType",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "net-new",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/suspect-type"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "pending",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/evidence-status"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-evidenceStatusDate",
                    "valueDate": "2021-09-28"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-hierarchicalStatus",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "code": "applied-not-superseded",
                                "system": "http://hl7.org/fhir/us/davinci-ra/CodeSystem/hierarchical-status"
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "evaluatedResource": [
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-001"
                }
            ],
            "reference": "Condition/ra-condition02pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-002"
                }
            ],
            "reference": "Condition/ra-condition03pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-003"
                }
            ],
            "reference": "Condition/ra-condition08pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-004"
                }
            ],
            "reference": "Condition/ra-condition09pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-005"
                }
            ],
            "reference": "Condition/ra-condition10pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-006"
                }
            ],
            "reference": "Condition/ra-condition11pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-007"
                }
            ],
            "reference": "Condition/ra-condition17pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-008"
                }
            ],
            "reference": "Condition/ra-condition18pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-010"
                }
            ],
            "reference": "Condition/ra-condition33pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-001"
                }
            ],
            "reference": "Condition/ra-condition43pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-004"
                }
            ],
            "reference": "Condition/ra-condition44pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-001"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-007"
                }
            ],
            "reference": "Encounter/ra-encounter02pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-002"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-005"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-008"
                },
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-010"
                }
            ],
            "reference": "Encounter/ra-encounter03pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-003"
                }
            ],
            "reference": "Encounter/ra-encounter08pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-004"
                }
            ],
            "reference": "Encounter/ra-encounter09pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-006"
                }
            ],
            "reference": "Encounter/ra-encounter11pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-001"
                }
            ],
            "reference": "Encounter/ra-encounter43pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-004"
                }
            ],
            "reference": "Encounter/ra-encounter44pat01"
        },
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-ra/StructureDefinition/ra-groupReference",
                    "valueString": "group-009"
                }
            ],
            "reference": "Observation/ra-obs21pat01"
        }
    ]
}

~~~

**Response**

~~~
HTTP/1.1 200 ok
~~~


---

// File: input/pagecontent/examples.md


<div markdown="1" class="bg-info">
</div>

<!-- ================================================ -->
<!--  use this line to include an autogenerated list of all examples from the remove it if you would like to hand generate it -->

{% include example-list-generator.md %}

<!-- ================================================ -->
--- 
- [Bundle01: Risk Adjustment Bundle, (MeasureReport01: Patient01)]  

- [Condition01Pat03: Other artificial openings of gastrointestinal tract status]  
- [Condition02pat01: Diabetes mellitus due to underlying condition with other diabetic kidney complication]
- [Condition03pat01: Chronic obstructive pulmonary disease with (acute) exacerbation]
- [Condition04Pat03: Chronic obstructive pulmonary disease with (acute) exacerbation]
- [Condition05Pat03: Unspecified protein-calorie malnutrition]
- [Condition06Pat03: Crohn's disease of large intestine with unspecified complications]
- [Condition07Pat03: Other persistent atrial fibrillation]
- [Condition08pat01: Bipolar disorder, current episode mixed, mild]
- [Condition09Pat01: Allergic bronchopulmonary aspergillosis]
- [Condition10Pat01: Long term (current) use of insulin]
- [Condition11Pat01: Acute pulmonary edema]
- [Condition12Pat01: Manic episode, unspecified (clinical evaluation evidence for Task01)]
- [Condition15Pat03: Diabetes mellitus due to underlying condition with diabetic chronic kidney disease]
- [Condition16Pat03: Dependence on renal dialysis]
- [Condition17Pat01: Body mass index (BMI) 45.0-49.9, adult]
- [Condition18Pat01: Longstanding persistent atrial fibrillation]
- [Condition21Pat03: Type 2 diabetes mellitus without complications]
- [Condition22Pat03: Other acute kidney failure]
- [Condition23Pat03: Chronic kidney disease, stage 5]
- [Condition31Pat02: Typical atrial flutter]
- [Condition32Pat03: Chronic pulmonary embolism]
- [Condition33Pat01: Respiratory arrest]
- [Condition35Pat03: Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene]
- [Condition42Pat03: Other artificial openings of gastrointestinal tract status]
- [Condition43pat01: Diabetes mellitus due to underlying condition with other diabetic kidney complication]
- [Condition44Pat01: Allergic bronchopulmonary aspergillosis]

- [Encounter01Pat03: Pat03 Encounter on 2021-07-14]
- [Encounter02Pat01: Pat01 Encounter on 2021-01-31]
- [Encounter03Pat01: Pat01 Encounter on 2021-09-26]
- [Encounter04Pat03: Pat03 Encounter on 2020-12-18]
- [Encounter05Pat03: Pat03 Encounter on 2020-03-03]
- [encounter06Pat03: Pat03 Encounter on 2020-09-17]
- [Encounter07Pat03: Pat03 Encounter on 2019-02-07]
- [Encounter08Pat01: Pat01 Encounter on 2017-02-03]
- [Encounter09Pat01: Pat01 Encounter on 2021-03-27]
- [Encounter11Pat01: Pat01 Encounter on 2020-11-02]
- [Encounter15Pat03: Pat03 Encounter on 2021-08-08]
- [Encounter16Pat03: Pat03 Encounter on 2021-07-27]
- [Encounter19Pat03: Pat03 Encounter on 2019-08-23]
- [Encounter21Pat03: Pat03 Encounter on 2021-01-30]
- [Encounter22Pat03: Pat03 Encounter on 2021-07-01]
- [Encounter31Pat02: Pat02 Encounter on 2021-08-06]
- [Encounter35Pat03: Pat03 Encounter on 2021-02-12]
- [Encounter42Pat03: Pat03 Encounter on 2020-02-10]
- [Encounter43Pat01: Pat01 Encounter on 2019-02-10]
- [Encounter44Pat01: Pat01 Encounter on 2017-01-18]
- [Encounter45Pat01: Pat01 Encounter on 2018-07-21]

- [Group01: Risk Adjustment Patient Group, (Patient01: Eve Everywoman)]
- [Group02: Risk Adjustment Patient Group, (Patient02: Adam Everyman, Patient03: Nelda Nuclear)]  

- [Measure01: Risk Adjustment Model CMS-HCC V24]
- [Measure02: Risk Adjustment Model CMS-HCC V21]
- [Measure03: Risk Adjustment Model CMS-RxHCC V05]  

- [MeasureReport01: Risk Adjustment Coding Gap Report, RA Model CMS-HCC V24 (Patient01: Eve Everywoman)]
- [MeasureReport01WithRemarks: Risk Adjustment Coding Report with Condition Category Remarks Added, RA Model CMS-HCC V24 (Patient01: Eve Everywoman)]

- [MeasureReport02: Risk Adjustment Coding Gap Report, RA Model CMS-RxHCC V5 (Patient01: Eve Everywoman)]
- [MeasureReport03: Risk Adjustment Coding Gap Report, RA Model CMS-HCC V24 (Patient02: Adam Everyman)]
- [MeasureReport04: Risk Adjustment Coding Gap Report, RA Model CMS-HCC V21 (Patient03: Nelda Nuclear)]
- [MeasureReport05: Risk Adjustment Coding Gap Report, RA Model CMS-RxHCC V5 (Patient03: Nelda Nuclear)]
- [MeasureReport06: Risk Adjustment Coding Gap Report, RA Model CMS-RxHCC V5 (Patient02: Adam Everyman)]

- [Data Exchange MeasureReport01: RA Model CMS-HCC V24 (Patient01: Eve Everywoman)]

- [DocumentReference: Outpatient Note (Patient01: Eve Everywoman)]

- [Observation01Pat03: Pat03 Creatinine on 20210728]
- [Observation02Pat03: Pat03 PHQ9 on 20190823]
- [Observation21Pat01: Pat01 Trypsin (Mass/volume) in Serum or Plasma from 20170617]

- [Organization01: Payer Organization ABC Payer]  

- [Organization01Pat01: Community Urgent Care]
- [Organization02Pat02: GHH Outpatient Clinic]
- [Organization01Pat03: Community HealthCenter]

- [Patient01: Eve Everywoman]
- [Patient02: Adam Everyman]
- [Patient03: Nelda Nuclear]  

- [Practitioner01: Harold Hippocrates]
- [Practitioner02: Patrick Pump]
- [Practitioner03: Otto Osler]

- [Parameters: PATCH example for sending Condition Category Remark]
- [Parameters: PATCH example for sending Condition Category Remark with multiple value]
- [Parameters: Submit Data example for sending a C-CDA document]

{% include link-list.md %}


---

// File: input/includes/example-list-generator.md


{% for p in site.data.ig.definition.resource %}
  {% if p.exampleBoolean %}
      {% if types %}
        {% assign types =  types | append: "," | append: p.reference.reference | split: '/' | first %}
      {% else %}
       {% assign types = p.reference.reference | split: '/' | first %}
      {% endif %}
  {% endif %}
{% endfor %}

{% assign my_array = types | split: "," %}
{% assign my_array = my_array | sort | uniq %}

{% for i in my_array %}
### {{ i }}
  {%- for p in site.data.ig.definition.resource -%}
      {%- if p.exampleBoolean -%}
        {%- assign type =  p.reference.reference | split: '/' | first -%}
            {%- if type == i %}
- [{{p.name}}]({{p.reference.reference | replace: '/','-'}}.html)
            {%- endif -%}
       {%- endif -%}
   {%- endfor %}
{% comment %} keep this line here for proper rendering {% endcomment %}
{% endfor %}


---

