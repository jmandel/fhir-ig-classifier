File: repos/HL7_SLASH_fhir-pacio-pfe/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭─────────────────────────ImplementationGuide-hl7.fhir.us.pacio-fioc.json──────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.pacio-pfe
canonical: http://hl7.org/fhir/us/pacio-pfe
version: 2.0.0-ballot
name: PACIOPersonalFunctioningAndEngagementImplementationGuide
title: PACIO Personal Functioning and Engagement Implementation Guide
description: FHIR Implementation Guide to exchange assessments of and data on a person's
  functioning, including body functions, activities, and participation, between 
  post-acute care (PAC) and other providers, patients, and key stakeholders
status: active
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg 
    valueCode: pc
publisher:
  name: HL7 International / Patient Care
  url: http://www.hl7.org/Special/committees/patientcare
  email: patientcare@lists.HL7.org
contact:
  - name: PACIO project
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/patientcare
      - system: email
        value: info@pacioproject.org
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core: 6.1.0
parameters:
  path-expansion-params: '../../input/_resources/terminology-settings.json'  # for using US ed of SNOMED
  show-inherited-invariants: false
  apply-jurisdiction: true
  apply-publisher: true
copyrightYear: 2022+
releaseLabel: STU2 Ballot
jurisdiction: urn:iso:std:iso:3166#US

# ╭───────────────────────────────────────package-list.json────────────────────────────────────────╮
# │  To use a provided ig-data/package-list.json file, delete the "history" property below.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
### NOTE: created ig-data/package-list.json

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Table of Contents: toc.html
  Guidance:
    Formal Specification: formal_specification.html
    Use Cases: personal_functioning_and_engagement_use_case.html
    Structured Data Capture: structured_data_capture.html
    Security and Privacy: security_and_data_sharing.html
    Underlying Technologies: underlying_technologies.html
  Domain Support: domains.html
  FHIR Artifacts:
    Capability Statement: CapabilityStatement-pacio-pfe-cap.html
    Profiles: artifacts.html#structures-abstract-profiles
    Extensions: artifacts.html#structures-extension-definitions
    Value Sets: artifacts.html#terminology-value-sets
    Code Systems: artifacts.html#terminology-code-systems
    Examples: artifacts.html#example-example-instances
  Downloads: downloads.html


---

// File: input/pagecontent/domains.md

<blockquote class="stu-note">
<p><b>Note:</b>
The Personal Functioning and Engagement IG replaces the previously published <a href="https://hl7.org/fhir/us/pacio-fs/index.html">PACIO Functional Status</a> and <a href="https://hl7.org/fhir/us/pacio-cs/index.html">PACIO Cognitive Status</a> FHIR IGs as well as the <a href="https://paciowg.github.io/splasch-ig/index.html">PACIO SPLASCH</a> IG that had been under development. This decision was made because the profiles created for these IGs all had very similar structures. This version of the IG, STU1, focuses on the use of Observation Profiles. For the Observation profiles, the only differences is the vocabulary used for the category tied to the profile and the value set from which the code was to be pulled. The use of health domains based on ICF categories and corresponding value sets of observation codes for each domain replaces the need for multiple IG, allowing this IG to define only a single set of profiles that cover all domains.
</p>
</blockquote>
<br>

The intent of the Personal Functioning and Engagement IG is to provide a framework for communicating and understanding observations related to an individual's functioning in terms of body functions, activities, and participation. The profiles defined within this IG provide a structure that can be used to represent functioning observations from many different domains. In each case, the domain is associated with specific observation codes representing questions, tools, instruments, and measurements within that domain.

This IG provides examples of some ICF domains and some of their associated, PACIO-vetted, preferred value sets. To view the ICF and all of its domains, please view the [ICF browser](https://icd.who.int/dev11/l-icf/en) maintained by the World Health Organization (WHO).

### Use

The ICF domain [value sets](artifacts.html#5) provides a mapping of health and health-related domains that fall under the personal functioning and engagement umbrella. Each ICF domain has an associate Value Set that contains codes for Personal Functioning and Engagement Observations. Implementers of this IG **SHOULD** include at least one category from the [Domain Category value set](ValueSet-pfe-category-vs.html) on each observation instance conformant to this guide. Additionally, the code of the instance **SHOULD** come from the value set associated with the indicated category or categories. 

### Motivation and Approach

Standards designers and implementers face many challenges when attempting to enable scalable and meaningful interoperability between health IT systems. Two specific challenges this IG is intended to address are:
- **Low Friction Communication**: How to generate agreement and consensus about the structure of and terminology used to communicate data so that implementers can adopt the IG consistently enough to support exchange with minimal partner-specific handling, and thus realize a reduction in the administrative overhead associated with communication of this information.
- **Understanding and Use**: How to support the effective use of the data by clinicians and other users so the system can realize the intended benefits of the sharing of this data, namely improved care and reduced costs.

Categorization of observations into health domains based on International Classification of Functioning, Disability and Health (commonly known as ICF) categories provides opportunities to address these challenges.

#### Low Friction Communication

Categorization of functioning and engagement observations into health domains reduces the set of conformant data by allowing categories to be tied to specific value sets that limit the set of valid observation codes. This mechanism supports the development and consistent implementation of the standards, which in turn enables interoperability, by:
- clearly defining a subset of codes that must be understood and accepted by the system that is much smaller than typical general requirements (e.g., all of LOINC)
- supporting validation of inbound data and rejection of messages that do not conform

#### Understanding and Use

The collection of information about a person's functioning and engagement data varies between care settings. Comprehension and use of information communicated from one setting to another should not require a detailed understanding of the collection mechanisms. By categorizing observations into health domains, health IT systems can organize received data in a clinically relevant way.

#### ICF

The International Classification of Functioning, Disability and Health, or ICF, is the World Health Organization framework for measuring health and disability at both individual and population levels. The ICF has 4 main categories: 
1. Body Functions
2. Activities and Participation
3. Body Structures
4. Environmental Factors

Within each of these categories are hierarchically arranged domains comprised of sets of related physiological functions, anatomical structures, actions, tasks, areas of life, and external influences. The Value Set domains in this IG are drawn from these ICF domains, in which each Post Acute Care observation item can be categorized. These domains also contain sub-chapters that are more granular and contain specific concepts related to the parent domain, which can be useful when making ICF domain categorization decisions.

#### Categorization Process

Contained in this IG are Value Sets for each of the health-related domains drawn from the ICF that fall under the personal functioning and engagement umbrella. These Value Sets contain PAC assessment observation LOINC codes that have been categorized into the ICF domain with whick the Value Set is associated. To create these Value Sets, the PACIO team created a categorization process with specific guidance and rules to help link existing health information to ICF domains. This categorization process was tested with and used for each PAC assessment item in the CMS Data Element Library (DEL) in order to appropriately map each item to an ICF domain and place its LOINC code into the associated Value Set.  

The categorization process at a base level is simple. The first step is to look at the assessment question and, based upon the question text, the question short name, and the question responses, determine what the main concept of the question is. The next step is to determine to which ICF hierarchy the concept most closely relates using the ICF hierarchy definitions. The ICF hierarchies are:
1. Body Functions
2. Activities and Participation
3. Body Structures
4. Environmental Factors

Most health observations fall into either the Body Functions or Activities and Participation hierarchies, since these are most related to observations about an individual. The final step is to use the ICF chapter (i.e. domain) definitions to find the appropriate domain within the selected hierarchy. Each ICF domain contains definitions for sub-chapter elements, which can help identify the appropriate chapter and sub-chapter selection for the observation. This process ensures that each health observation is categorized successfully with an ICF domain and its LOINC code can then be added to the associated Value Set.

#### Categorization Rules

To disambiguate categorization and to make the categorization process more easily reproducible, additional rules have been developed to augment the base ICF categorization process. These rules address some of the difficulties that arose while trying to categorize the PAC assessment items into ICF domains and provide additional clarification when more than one domain categorization could apply. 

1. PAC assessment observations should be categorized into the ICF domain within the “Activities and Participation” category only when the question focuses on  a specific activity.
    - For assessment items related to assistive devices, unless the activity the assistive device helps with is present in the question, place them into a domain related to the body function that the assistive device most supports.
2.  PAC assessment observations that are part of a specific group of questions (e.g.,PHQ-9 or BIMS) or part of a group of questions listed all under the same header question should be categorized according to the main focus of the grouping header.
3. All available assessment item resources, such as the question’s available responses, the question text, and the question short name, should be considered when making categorization decisions. 

#### Adding New Codes

Adding new codes to the PFE is a simple and straightforward process, but it does require some familiarity with FHIR shorthand. The first step is to categorize the new code into one of the ICF domains using the categorization process described above. If the selected ICF domain does not yet have an associated Value Set, you must first create a new Value Set for that ICF domain following the example of the rest of the ICF Value Sets in the ValueSets.fsh file. If the Value Set associated with the ICF domain already exists, you can skip this step. Next, you must place the code for the PAC assessment item under the Value Set that is associated with the ICF domain to which it has been categorized. To do this, add a new line under the appropriate Value Set with the format:

		* $LNC#<New Code Here>



---

// File: input/pagecontent/downloads.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas-r5/fhir-single.xsd">

<ul>
<li>Full FHIR IG Specification <a href="full-ig.zip">(zip)</a></li>
<li>FHIR IG Resource Definitions <a href="definitions.json.zip">(JSON)</a><a href="definitions.xml.zip">(XML)</a><a href="definitions.ttl.zip">(TTL)</a></li>
<li>FHIR IG Profile Examples <a href="examples.json.zip">(JSON)</a><a href="examples.xml.zip">(XML)</a><a href="examples.ttl.zip">(TTL)</a></li>
<li>FHIR IG <a href="package.tgz">Validator Pack</a></li>
<li>FHIR IG Package <a href="package.tgz">(tgz)</a></li>
</ul>

</div>

---

// File: input/pagecontent/formal_specification.md


This section defines additional requirements and guidance relevant to this IG as a whole. The FHIR Conformance Rules define the conformance verbs - **SHALL**, **SHOULD**, **MAY** - used in this IG.

### Claiming Conformance to a Personal Functioning and Engagement Profile
To claim conformance to a Profile in this IG, servers **SHALL**:

- Be able to populate all Profile data elements that have a minimum cardinality >= 1 and/or flagged as Must Support as defined by that profile’s StructureDefinition.
- Conform to the [Personal Functioning and Engagement Capability Statement](CapabilityStatement-pacio-pfe-cap.html) expectations for that Profile’s type.

### Must Support
The following rules apply to all Personal Functioning and Engagement Profile elements marked as Must Support. Must Support on any profile data element **SHALL** be interpreted as follows:

#### Data Source System Requirements

- Data Sources Systems **SHALL** be capable of populating all data elements as part of the query results as specified by the [Personal Functioning and Engagement Capability Statement](CapabilityStatement-pacio-pfe-cap.html).

#### Data Consumer System Requirements

- Data Consumer Systems **SHALL** be capable of displaying the data elements for human use.
- Data Consumer Systems **SHOULD** be capable of storing the data elements for other uses (such as record keeping of data used for clinical use).
- Data Consumer Systems **SHALL** be capable of processing resource instances containing the data element without generating an error or causing the application to fail.
- Data Consumer Systems **SHALL** interpret missing data elements within resources instances as not being present on the Data Sources system’s or as being withheld for privacy or business reasons.

Profiles used by this IG, but defined in other IGs, inherit the definition of Must Support from their respective guides.


---

// File: input/pagecontent/index.md

The Personal Functioning and Engagement (PFE) HL7® FHIR® Implementation Guide (IG) supports the exchange of information related to a person's ability to participate in activities and interact with their community and the environment around them. The three words in the title frame aspects of the intended scope for this IG:
- **Personal**: in-scope data relates to the functioning of an individual person, as opposed to a group, system, or organization.
- **Functioning**: in-scope data relates to what the person can do, the help they need, and the effects of contributing factors, including physiological, environmental, and personal conditions. The [International Classification of Functioning, Disability, and Health](https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health) (ICF), published by the World Health Organization (WHO), defines the term, “functioning,” as an umbrella term for body functions, activities, and participation. 
- **Engagement**: by promoting the exchange of in-scope data, this IG aspires to help individuals be active participants in their life, as opposed to passive observers.

### Background

After a patient receives care in an acute hospital setting, they may move into post-acute care (PAC) settings like long-term care facilities (e.g., skilled nursing or assisted living facilitates) before going back into their homes and communities where they will manage their health themselves and with support from others (e.g., family, home health aides, community organizations that support basic needs). In these settings, the focus of their healthcare providers and caregivers is to: (1) deliver therapies and treatments; and (2) identify supports that will help the patient successfully engage in daily life at home and in the community.

While a patient is in long-term care, healthcare providers from many disciplines - including physicians, nurses, physical therapists, occupational therapists, speech and language pathologists, and social workers - use formal and informal assessments and observations to answer questions that can help them prepare a person to return home, such as:
- What activities of daily living (ADLs), like bathing or dressing, does the patient have trouble engaging in?
- What treatments and therapies would help the person improve their ability to engage in ADLs?
- What supports will a person need to engage in ADLs, both now at the long-term care facility, and in the future when they have returned home?
    - What professional or community-based services will they need? 
    - Are changes to their home or living situation necessary?
    - Do they need assistive devices?

Healthcare providers record assessments and observations in an electronic health record, which their colleagues and their organization can use for tracking improvement, care planning, and reimbursement purposes. Access to this information is critical for other healthcare providers and organizations across the full spectrum of the person's care, including acute care, primary care, and home- and community-based services, to support care coordination across settings. 

Unfortunately, healthcare providers across the spectrum of care, including at long-term care facilities and down-stream settings such as home- and community-based services, often face challenges sharing important assessment and observation data with and obtaining it from other healthcare providers involved in the person’s care. Forty-five percent of Medicare beneficiaries require post-acute care services after hospitalization (RTI International analysis of 2014 Medicare claims under contract with the Assistant Secretary for Planning and Evaluation, August 2018 (aea0315)), but a 2020 study that assessed continuity between hospitals and skilled nursing facilities (SNF) found that SNFs received complete mental status information at transition of care only 6% of the time. [JAMA Network Open. 2021;4(1):e2033980. doi: 10.1001/jamanetworkopen.2020.33980](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2775075). This failure to exchange accurate, timely data often leads to inefficient workflows, duplicative data entry, and increased risk of harm attributable to missing or inaccurate information.

The purpose of this IG is to offer a framework that providers and organizations across the spectrum of care can use to exchange observational assessment information. By using this framework to put accessible, usable, and timely data into the hands of providers, patients, and their caregivers, organizations can foster appropriate care for the whole person, promoting their ability to actively engage in daily life at home and in the community and supporting the person in achieving their optimal quality of life. This IG facilitates efforts to build more interoperable health IT systems that support data sharing, first outlined in the landmark Institute of Medicine Report [To Err is Human: Building a Safer Health System](https://nap.nationalacademies.org/catalog/9728/to-err-is-human-building-a-safer-health-system), and is congruent with current federal efforts (e.g., The Centers for Medicare and Medicaid Services Promoting Interoperability Programs).

![PACIO logo](./pacio.png)

### Why PACIO

The PACIO Project is a collaborative effort to advance interoperable health data exchange between PAC and other providers, patients, their caregivers, and key stakeholders across healthcare and to promote health data exchange in collaboration with policy makers, standards organizations, and industry through a consensus-based approach.

The primary goal of the PACIO Project is to establish the technical foundation for data exchange within PAC and partner organizations across the spectrum of care. It seeks to do so by creating a framework for and community through the development of Fast Healthcare Interoperability Resource (FHIR®) technical implementation guides (IGs) and reference implementations that will facilitate health data exchange through standards-based use case-driven application programming interfaces (APIs).

Information covered in this IG is relevant to providers across the full spectrum of patient care, including acute, sub-acute, long-term post-acute care (LTPAC), community based organizations, and private practice practitioners. The PACIO community brings together healthcare providers with a deep understanding of patient functioning that makes them uniquely suited to author this IG. This understanding comes out of providers’:
- goal of helping individuals in these settings return to living in their homes and communities, and
- knowledge of the activities that individuals need to perform and how to help them regain the ability to perform these activities by leveraging the necessary treatments and supports.

### Domains

The scope of this IG is intentionally broad. It provides a framework within which to represent observations across many aspects of an individual’s functioning and engagement with their environment and the world. To further support the interoperability of systems based on this guide, the IG defines the domains tied to value sets that enumerate terminology codes for related observations. These domains are drawn from the World Health Organization's (WHO) International Classification of Functioning, Disability and Health (commonly known as ICF). ICF was chosen as the source of domains because it takes a holistic view of a person through an interdisciplinary therapy lens, considers how best to support the person’s return to the community, and has been integrated into some EHRs. Examples of ICF categories the IG uses as domains include but are not limited to:
* [Mental functions](https://icd.who.int/dev11/l-icf/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1363559646), captured as a part of evaluating an individual's cognitive status,
* [Mobility](https://icd.who.int/dev11/l-icf/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f2048203604) and [Self-care]( https://icd.who.int/dev11/l-icf/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1608009360), captured as a part of evaluating an individual's functional status, and
* [Communication](https://icd.who.int/dev11/l-icf/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1828012543) and [Voice and speech functions]( https://icd.who.int/dev11/l-icf/en#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f388067588), captured as a part of evaluating an individual's spoken language communication, swallowing, and hearing.

More information on the domains currently defined in this IG, how codes are assigned to the domain-based value sets, and examples drawn from [post-acute care assessments required by the IMPACT Act](#impact-act) can be found on the [Domain Support](domains.html) page. More information on all of the categories that ICF defines can be found in the [ICF Browser](https://apps.who.int/classifications/icfbrowser/).

### IMPACT Act

One impetus for this IG is the amendment to the Social Security Act in 2014 to include the Improving Medicare Post-Acute Care Transformation (IMPACT) Act. The IMPACT Act requires the standardization and interoperability of patient assessments in specific categories for PAC settings, including long-term care hospitals (LTCHs), home health agencies (HHAs), SNFs, and inpatient rehabilitation facilities (IRFs). It focuses on the standardization of data elements in specified quality measure and patient assessment domains for cross-setting comparison and clinical information exchange, respectively. Functional status, cognitive function and mental status, and impairments are among the clinical domains of required data.

The Act requires:
* Reporting of standardized patient assessment data through commonly used PAC assessment instruments:
  * Minimum Data Set (MDS) for SNFs
  * Inpatient Rehabilitation Facility – Patient Assessment Information (IRF – PAI) for IRFs
  * LTCH Continuity Assessment Record and Evaluation (CARE) Data Set (LCDS) for LTCHs
  * Outcome and Assessment Information Set (OASIS) for HHAs
* Implementation of data elements specified in each domain using standardized data elements to be nested within the assessment instruments currently required for submission by LTCH, IRF, SNF, and HHA providers.
* Data to be standardized and interoperable to allow exchange of data between PAC providers, among others, using common standards and definitions to provide access to longitudinal information and facilitate coordinated care.

### Scope Limitations

This IG provides a framework for the exchange of observations relevant to post-acute care and other settings. It seeks to enable exchange of this information and in so doing, to promote its use in clinical care and caregiving. Consistent with this focus, it does not seek to limit or make specific recommendations on either clinical practice itself or the way that software systems display or collect information. Specifically:
1. The specific codes contained within example or domain-specific value sets do not constitute an endorsement or recommendation for the use of the approaches to data collection that the codes represent, whether formal assessments, clinical tests, or otherwise. Healthcare providers and other caregivers should ascertain which information is relevant for patient care and related activities, such as reimbursement. To enable interoperability across software systems using this IG, codes representing the observations made in practice should be added to the domain-specific value sets in this IG using the process described on the [domains](domains.html) page.
2. This IG does not provide guidance on how to organize or display information exchanged for use by healthcare providers and caregivers. These details are critical to enabling the use of data exchanged using this IG and are an active topic of discussion within the PACIO community. However, they are outside the scope of FHIR IGs and are left to implementers who are in the best position to respond to the needs of their users and make the information available in their software in a consistent and well-integrated manner.

### How to read this Guide

This IG is divided into several sections that are listed at the top of each page in the menu bar.
- [Home](index.html): The home page provides the introduction and background information to set context for the use of the HL7® FHIR Personal Functioning and Engagement IG.
- Guidance: These pages provide overall guidance in using the profiles and transactions defined in this guide.
    - [Formal Specification](formal_specification.html): Information about conformance to the IG, including Must Support requirements.
    - [Use Cases](personal_functioning_and_engagement_use_case.html): Detailed scenarios in which the Personal Functioning and Engagement IG could be used.
    - [Structured Data Capture](structured_data_capture.html): Guidance on how to use structured data capture techniques to represent and use data covered by this IG.
    - [Security](security_and_data_sharing.html): General security requirements and recommendations for Personal Functioning and Engagement IG actors, including authentication, authorization, and logging requirements and guidance.
    - [Underlying Technologies](underlying_technologies.html): Information about the terminologies, notations, and design principles, specific to FHIR, that this specification uses.
- [Domain Support](domains.html): This page provides details on the use of domain-based value sets within the IG, including how codes are assigned to a specific value set.
- FHIR Artifacts: These sections provide detailed descriptions and formal definitions for all the FHIR objects defined in this IG.
    - [Capability Statement](CapabilityStatement-pacio-pfe-cap.html): This artifact defines the specific capabilities that different types of systems are expected to have in order to comply with this IG. Systems conforming to this IG are expected to declare conformance with this capability statement.
    - [Profiles](artifacts.html#2): This section lists the set of Profiles defined in this IG to exchange functioning information. Each linked Profile page includes a narrative introduction and a formal definition.
    - [Extensions](artifacts.html#3): This section lists the set of Extensions defined in and used by the Profiles in this IG . Each linked Extension page includes a formal definition.
    - [Value Sets](artifacts.html#4): This section lists the value sets this IG defines.
    - [Code Systems](artifacts.html#5): This section lists the code systems this IG defines.
    - [Examples](artifacts.html#6): This section lists example instances associated with this IG.
- [Downloads](downloads.html): This page provides links to downloadable artifacts.

### Globals Profiles
{% include globals-table.xhtml %}
 
### Package Dependencies
{% include dependency-table.xhtml %}
 
### Cross Version Analysis
{% include cross-version-analysis.xhtml %}
 
### Intellectual Property Considerations
{% include ip-statements.xhtml %}
 

---

// File: input/pagecontent/personal_functioning_and_engagement_use_case.md

The Personal Functioning and Engagement IG defines the data structures for exchanging information related to an individual's functioning, both with respect to their body as well as their activities and participation in society. This includes observation data (characteristics that can be tested, measured, or observed and are communicated with a name-value pair structure) as well as related clinical care.

The following scenario illustrates one situation in which this IG enables sharing of important information across many care settings, focusing on long-term post-acute care (LTPAC) and [health domains](domains.html) of interest in that setting, such as mobility, self care, mental functions, and communication.

### Example Scenario

Post-actute care (PAC) providers and caregivers in particular are interested in the functioning and engagement of their patients. PAC supports the recovery and rehabilitation of individuals and aims to enable them to live and act as independently as possible. To identify necessary interventions and track progress, PAC providers, caregivers, and payers collect and document observational data on the patient's abilities and interactions. However, as the following scenario illustrates, they interact with many other healthcare settings, which provide valuable information on a patient's functioning that informs ongoing care. Figure 1 illustrates a common scenario for an elderly patient, Betsy Smith, moving through the healthcare ecosystem.

The journey starts with Betsy in her home. She has a medical event that results in an emergency medical service (EMS) transport to Hospital A. After she is stabilize, Betsy's doctor recommends that she be discharged to her home with support for continued rehabilitation from PAC home health services. The home health agency (HHA) helps Betsy return to her home and coordinates care with multiple professionals and provider organizations, including her primary care physician, pharmacy, behavioral health provider, and outpatient dialysis provider. Home health nurses periodically complete formal Outcome and Assessment Information Set (OASIS) assessments per Centers for Medicare & Medicaid Services (CMS) requirements, tracking Betsy's functioning as she recovers, including her mental functions, self care, and communication abilities.

Betsy has another medical event at home and is transferred to Hospital B. Based on evaluations performed at the hospital, Betsy's doctors determine that she will need significant help to recover enough independence to return home. They recommend she transfer to a PAC skilled nursing facility (SNF). While admitted, the SNF completes Minimum Data Set (MDS) assessment instruments documenting Betsy's abilities and progress. Once sufficiently recovered, the SNF discharges Betsy and she returns home with the help of a variety of home and community-based services (HCBS). While receiving HCBS, Betsy's caregivers complete Functional Assessment Standardized Items (FASI) assessments.


![Patient Journey](Patient_Journey.png){:style="float: none;"}

Figure 1: Example Post-acute Care Patient Healthcare Journey

### Use Case 1: Provider to Payer Exchange

Payers, such as CMS, require providers to perform and submit formal assessments, such as the MDS within SNFs, in support of claims for provided services. Using the [collection](StructureDefinition-pfe-collection.html) and [single observation](StructureDefinition-pfe-observation-single.html) profiles, the electronic medical record (EMR) systems in which clinicians capture these formal assessments can electronically transmit the assessments to, or make them available for access by, payers. The same approach can be used to electronically communicate MDS assessments by SNFs, FASI assessments by HCBSs, OASIS assessments by HHAs, or other formal assessments. Note that this capability does not constitute a requirement to exchange assessments electronically with CMS or other payers.

### Use Case 2: Provider to Provider Exchange

When patients transition between facilities and care organizations, it is important for data collected about their functioning to follow them in order to facilitate appropriate care by the receiving provider. Using the [collection](StructureDefinition-pfe-collection.html) and [single observation](StructureDefinition-pfe-observation-single.html) profiles, the EMRs in which clinicians capture these formal assessments can electronically transmit the assessments to, or make them available for access by, the receiving facility and its clinicians. The same approach can be used to electronically transmit MDS assessments by SNFs, FASI assessments by HCBSs, OASIS assessments by HHAs, or other formal assessments.

Because transitions usually occur between facilities of different types (e.g., SNF to HCBS), the receiving provider may not perform the specific assessments sent by the transferring facility. The categorization of observations into [health domains defined by ICF](domains.html) enables recipients to organize data for display based on the categorization even if the specific observation code is not known by their system.

### Use Case 3: Provider to Community Exchange

Family members and caregivers outside of formal healthcare settings provide essential care and support for individuals regaining their functioning and independence. Making data available using the [collection](StructureDefinition-pfe-collection.html) and [single observation](StructureDefinition-pfe-observation-single.html) profiles will allow FHIR-enabled applications to enable patients and their families to access information on their functioning. The categorization of observations into [health domains defined by ICF](domains.html) enables these systems to present the information to users without understanding and administering complex assessment tools.

---

// File: input/pagecontent/security_and_data_sharing.md

### General Considerations
Implementation of the Personal Functioning and Engagement IG involves communication of patient-specific clinical information across multiple parties, which requires proper security and privacy protections to avoid malicious or unintentional exposure of such information. All exchanges of data under this IG must be secured appropriately in transit and ensure access is limited only to authorized individuals, which may include the person the information is about, that person’s caregivers, payers paying for the  associated services, or other individuals or entities who have permission to use the information.

#### Security Considerations and Guidance
All implementers of the Personal Functioning and Engagement IG **SHOULD** follow the HL7® FHIR® Security guidance, Security and Privacy Module, the FHIR Implementer’s Safety Checklist guidance as defined in the FHIR standard, and US Core security recommendations where applicable and not otherwise superseded by this section of the Personal Functioning and Engagement IG.

1.	The FHIR Security specification provides guidance related to communication security, authentication, authorization/access control, audit, digital signatures, attachments, labels, narrative, and input validation. The FHIR security specification is available [here](http://hl7.org/FHIR/R4/security.html).
2.	The FHIR Security and Privacy Module describes access control and authorization considerations to protect a FHIR server, how to document permissions granted, and how to keep records of performed events. The FHIR Security and privacy module is available [here](http://hl7.org/FHIR/R4/secpriv-module.html).
3.	The FHIR Implementer’s Safety Checklist helps implementers to be sure that they have considered all the parts of FHIR that impact their system design regarding safety. The FHIR safety check list is available [here](http://hl7.org/FHIR/R4/safety.html).
4.  The US Core IG provides specific requirements and guidance for US Realm IGs around security, privacy, and auditing. The US Core IG is available [here](http://hl7.org/FHIR/us/core/security.html).

#### Security Requirements
For the purposes of the Personal Functioning and Engagement IG, additional security conformance requirements are as follows:

##### Exchange Security
1.  In order to protect sensitive patient data while in transit between systems, the exchange of information using the Personal Functioning and Engagement IG **SHALL** support [Transport Layer Security (TLS) Protocol Version 1.2 (RFC5246)](https://tools.ietf.org/html/rfc5246) or a more recent version of TLS for transport layer security.
2.  Server implementations that expect to support browser-based javascript applications **SHOULD** enable [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) for REST operations. See the [Communications section of the FHIR security page](http://hl7.org/FHIR/R4/security.html#http) for additional details and recommendations on safely enabling CORS.  

##### Authentication and Authorization 
To prevent unauthorized access to sensitive data, implementers **SHALL** use at least one of the following:

1.  The security requirements from the [US Core Implementation Guide](http://hl7.org/FHIR/us/core/security.html),
2.  The [SMART on FHIR App Launch Framework](http://hl7.org/FHIR/smart-app-launch/index.html),
3.  [SMART on FHIR Backend Services](http://www.hl7.org/FHIR/smart-app-launch/backend-services.html),
4.	Mutually authenticated TLS, or
5.  [Unified Data Access Profiles (UDAP)](https://www.udap.org/) recommended by the ONC FHIR At Scale Taskforce (FAST) security tiger team.

---

// File: input/pagecontent/structured_data_capture.md

In many cases, clinicians use formal, structured instruments to capture details on a patient's functioning and engagement. These include: 

* long forms required by payers that cover a broad range of domains, (e.g., the Centers for Medicare & Medicaid Services (CMS) [Minimum Data Set (MDS) 3.0 Resident Assessment Instrument (RAI)](https://www.cms.gov/Medicare/Quality-Initiatives-Patient-Assessment-Instruments/NursingHomeQualityInits/MDS30RAIManual).)
* shorter assessments that target specific areas such as the [Montreal Cognitive Assessment (MoCA)](https://www.mocatest.org/) or the [swallowing panel](https://loinc.org/99852-6/) that is part of the American Speech-Language-Hearing Association (ASHA) National Outcomes Measurement System (NOMS) program.

The [Structured Data Capture FHIR IG](http://hl7.org/fhir/uv/sdc/) provides a methodology for capturing this information within FHIR both in its raw and in its discrete structured form. This page provides guidance on how tools like the [SDC Questionnaire](https://hl7.org/fhir/uv/sdc/StructureDefinition-sdc-questionnaire.html) and [US Core QuestionnaireResponse](http://hl7.org/fhir/us/core/StructureDefinition-us-core-questionnaireresponse.html) resources may be used with this IG.

### Codified Representation

Standardized instruments fall into two broad categories based on use of standardized code systems.

1. Fully Codified -- These instruments have standardized terminology associated with them, meaning the entire instrument can be modelled.
2. Partially Codified -- These instruments generally have standardized question and answer pairs and a code to describe the instrument and total score. However, critical meta data or other information may only be found on the assessment itself. For example, the [MoCA](https://www.mocatest.org/) has codes for only the summary score and not the component questions.

Representative examples of each of these categories are provided in the following sections to guide implementers.

#### Fully Codified Assessments

 The following are examples of fully codified assessments. QuestionnaireResponse representations of these assessments can be fully mapped to structured observation resources defined in this IG.

<table class="grid">
  <thead>
    <tr>
      <th>Tool</th>
      <th>LOINC Codes</th>
    </tr>
  </thead>
  <tr>
    <td>ASHA NOMS Functional Communication Measure - Swallowing panel</td>
    <td>99852-6 NOMS Functional Communication Measure (FCM): Swallowing<br>
        &nbsp;&nbsp; 99853-4 What modified diet is recommended for the individual to swallow solids safely?<br>
        &nbsp;&nbsp; 99854-2 What modified liquid is recommended for the individual to swallow safely?<br>
        &nbsp;&nbsp; 99855-9 What percentage of the individual's daily diet is delivered through non-oral means in order to maintain adequate nutrition and hydration?<br>
        &nbsp;&nbsp; 99856-7 How often does the individual exhibit difficulties with oral containment or secretion management?<br>
        &nbsp;&nbsp; 99857-5 How often does the individual require supervision/assistance at meal time due to swallowing safety?<br>
        &nbsp;&nbsp; 99858-3 Functional Communication Measure - Swallowing score [ASHA NOMS]
    </td>
  </tr>
  <tr>
    <td>Brief Interview for Mental Status (BIMS) (<a href="QuestionnaireResponse-PFEIG-QResponse-SNF-BIMS-1.html">QuestionnaireResponse</a>)</td>
    <td>52491-8 Brief Interview for Mental Status (<a href="Observation-PFEIG-CSC-SNF-BIMS-1.html">example</a>)<br>
        &nbsp;&nbsp; 52731-7 Repetition of Three Words. Number of words repeated after first attempt (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-9.html">example</a>)<br>
        &nbsp;&nbsp; 54510-3 Temporal Orientation (orientation to year, month, and day) (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Temporal.html">example</a>)<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52732-5 Able to report correct year (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-3.html">example</a>)<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52733-3 Able to report correct month (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-8.html">example</a>)<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 54609-3 Able to report correct day of the week (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-7.html">example</a>)<br>
        &nbsp;&nbsp; 52493-4 Recall (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Recall.html">example</a>)<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52735-8 Able to recall "sock" (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-6.html">example</a>)<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52736-6 Able to recall "blue" (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-5.html">example</a>)<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52737-4 Able to recall "bed" (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-4.html">example</a>)<br>
        &nbsp;&nbsp; 54614-3 BIMS Summary Score (<a href="Observation-PFEIG-CSC-SNF-BIMS-1-Ob-Question-10.html">example</a>)
    </td>
  </tr>
  <tr>
    <td>Self-care subset of MDS v3.0 - RAI v1.17.1, 1.17.2 - Interim Payment Assessment (IPA) item set [CMS Assessment]</td>
    <td>90540-6 Self-Care - Interim Performance<br>
        &nbsp;&nbsp; 95019-6 Eating<br>
        &nbsp;&nbsp; 95018-8 Oral hygiene<br>
        &nbsp;&nbsp; 95017-0 Toileting hygiene
    </td>
  </tr>
</table>

#### Partially Codified Assessments

Not all assessment tools have standardized codes for all of their questions. For example. the [MoCA](https://www.mocatest.org/) has a coded representation for the summary score, not the individual questions. In cases like this, QuestionnaireResponses may not be fully mapped to structured observations, meaning that some information remains only in the QuestionnaireResponse instance, or on the paper form.

<table class="grid">
  <tr>
    <td>Montreal Cognitive Assessment (MoCA) (<a href="QuestionnaireResponse-PFEIG-QResponse-Hospital-MOCA-1.html">QuestionnaireResponse</a>)</td>
    <td>72133-2 Montreal Cognitive Assessment [MoCA] (<a href="Observation-PFEIG-CSC-Hospital-MOCA-1.html">example</a>)<br>
        &nbsp;&nbsp; 72172-0 Total score [MoCA] (<a href="Observation-PFEIG-CSC-Hospital-MOCA-1-Ob-Question-1.html">example</a>)
    </td>
  </tr>
</table>

### Observation Structure

When representing formal assessments with complex structures as FHIR Observations, each panel and question **SHALL** be mapped to an individual Observation instance, with panels represented using the [collection](StructureDefinition-pfe-collection.html) profile and questions represented using the [single observation](StructureDefinition-pfe-observation-single.html) profile. Two kinds of links between the observation instances capture important relationships:
- *Parent-child links*: parent observations **SHALL** contain references to each child observation instance, including nested panels and specific questions using the `hasMember` element.
- *Derivation links*: observations derived from other questions, such as summary scores, **SHOULD** point to the observations that the result is derived from using the `derivedFrom` element. Note that these derivation links appear in this element alongside references to any QuestionnaireResponse that the set of Observations is generated from. The two uses of the `derivedFrom` element can be distinguised by the resource type: score derivations links point to Observation instances, while the reference to the complete instrument response will point to a QuestionnaireResponse.

#### Example: BIMS

This diagram illustrates the required and suggested structure and linkages using the Brief Interview for Mental Status (BIMS) as an example. Note that this structure may be embedded within a larger formal assessment, such as an MDS Assessment described above.

![BIMS Structure and Linkages](StructureExample_BIMS.jpg){:style="float: none;"}

Following the structure of the LOINC codes representing the BIMS, the following structures and links are involved:
- Panel codes, both the top-level code ([52491-8](https://loinc.org/52491-8)), and inner nodes (e.g., [54510-3](https://loinc.org/54510-3)), are represented using the [collection](StructureDefinition-pfe-collection.html) profile with links to sub panels (e.g., panel [54510-3](https://loinc.org/54510-3) from top level-code [52491-8](https://loinc.org/52491-8)) and individual questions (e.g., question [52732-5](https://loinc.org/52732-5) from inner node [54510-3](https://loinc.org/54510-3)) in the `hasMember` element.
- Individual questions (e.g., [52732-5](https://loinc.org/52732-5)) represented using the [single observation](StructureDefinition-pfe-observation-single.html) profile. The summary score question ([54614-3](https://loinc.org/54614-3)) contains links in the `derivedFrom` element to the individual questions used to calculate the score (e.g., [52732-5](https://loinc.org/52732-5)).
- Each observation instance links back to the [QuestionnaireResponse](https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-questionnaireresponse.html) representing the whole BIMS Assessment in the `derivedFrom` element.



---

// File: input/pagecontent/StructureDefinition-pfe-collection-intro.md

**Example Usage Scenarios:**

The following are example usage scenarios for this Profile:
* Query for the documentation of a formal panel of assessment questions related to a patient's functioning and engagement.
* Record or update observations related to collections of assessment questions for a Patient.

### Mandatory and Must Support Data Elements

The following data elements must always be present or must be supported if the data is present in the sending system ([Must Support](formal_specification.html#must-support) definition). They are presented below with a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition](#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Personal Functioning and Engagement Collection must have:**

1. a status
1. a category code of "survey" and "functioning"
1. a code representing the specific panel
1. a patient
1. the point in time or period when the observation was made
1. who made the observation

**Each Personal Functioning and Engagement Collection must support:**

1. the location the observation was made
1. any devices the patient used
1. an additional [category value or values](ValueSet-pfe-category-vs.html) specifying the specific health or health-related [domain](domains.html) that this observation is related to***
1. related questionnaire responses that this observation is made from
1. references to nested collections or single questions that represent the answers within the panel\* or a reason why the data is absent\*\*

\* \*\* \*\*\* see guidance below

**Profile specific implementation guidance:**

* \*These collection observations represent structured instruments and panels with multiple questions. The hasMember element **SHALL** be used to point to child Observation instances that contain the specific questions and answers, represented by [Single Observations](StructureDefinition-pfe-observation-single.html) or nested panels represented by this profile. The Observation.value and Observation.component elements **SHALL** be empty.
* \*\*An Observation without a value, **SHALL** include a reason why the data is absent unless there are 1) component observations, or 2) reporting panel observations using Observation.hasMember. Systems that never provide an observation without a value are not required to support Observation.dataAbsentReason.
* \*\*\*When a health or health-related domain is specified as an additional [category value](ValueSet-pfe-category-vs.html), Observation.code **SHOULD** be drawn from the corresponding domain-based value set as discussed below and on the [domains](domains.html) page.

<blockquote class="stu-note">
<p>
***Panel codes are not in scope for inclusion within <a href="domains.html">domain-based value sets</a> within STU1 of the PFE IG while the PACIO community determines how best to apply domains to panels that may have specific observations from multiple domains as descendents. In the meantime, the recommendation is not to include domain categories within Collection observation instances.
</p>
</blockquote>



---

// File: input/pagecontent/StructureDefinition-pfe-collection-notes.md

The syntax used to describe the interactions below is described [here](https://hl7.org/fhir/us/core/STU5.0.1/general-guidance.html#search-syntax).

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations SHALL be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** search parameters:

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey
      1. GET [base]/Observation?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions
      
    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and a category code = `survey` or `mental_functions` respectively ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-code.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;code=http://loinc.org\|72133-2
      1. GET [base]/Observation?patient=1134281&amp;code=http://loinc.org\|72133-2,http://loinc.org\|72107-6,http://loinc.org\|54635-8

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s).  SHOULD support search by multiple report codes. The Observation `code` parameter searches `Observation.code only. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-date.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]Observation?patient=555580&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;date=ge2018-03-14T00:00:00Z
      1. GET [base]Observation?patient=555580&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions&amp;date=ge2018-03-14T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `survey` or `mental_functions` respectively ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameter combinations SHOULD be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** and **[`status`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-status.html)** search parameters:
    - including support for *OR* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;status=final
      1. GET [base]/Observation?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category = `survey` or `mental_functions` respectively and status `final` ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-code.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-date.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]Observation?patient=555580&amp;code=http://loinc.org\|72133-2&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and report code(s).  SHOULD support search by multiple report codes. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


---

// File: input/pagecontent/StructureDefinition-pfe-narrative-history-of-status-intro.md

**Example Usage Scenarios:**

The following are example usage scenarios for this Profile:
* Query for a narrative of a patient's prior functioning and engagement.
* Record or update prior functioning and engagement narratives for a Patient.

### Mandatory and Must Support Data Elements

The following data elements must always be present or must be supported if the data is present in the sending system ([Must Support](formal_specification.html#must-support) definition). They are presented below with a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition](#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Personal Functioning and Engagement Narrative History of Status must have:**

1. a status
1. a category code of "functioning"
1. a code describing the type of narrative
1. a patient
1. the point in time or period covered by the narrative
1. who wrote the narrative
1. a narrative about the patient's prior functioning and engagement

**Each Personal Functioning and Engagement Narrative History of Status must support:**

1. the location the narrative was written
1. the level of assistance required by the patient during the time or period covered by the narrative
1. an additional category value(s) specifying the specific health or health-related [domain](domains.html) that this narrative is related to\*
1. the encounter the report occurred within
1. instant the report was released

\* see guidance below

**Profile specific implementation guidance:**

* \*When a health or health-related domain is specified as an additional [category value](ValueSet-pfe-category-vs.html), DiagnosticReport.code **SHOULD** be drawn from the corresponding domain-based value set as discussed on the [domains](domains.html) page.




---

// File: input/pagecontent/StructureDefinition-pfe-narrative-history-of-status-notes.md

The syntax used to describe the interactions below is described [here](https://hl7.org/fhir/us/core/STU5.0.1/general-guidance.html#search-syntax).

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations SHALL be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-category.html)** search parameters:

    `GET [base]/DiagnosticReport?patient={Type/}[id]&category={system|}[code]`

    Example:

      1. GET [base]/DiagnosticReport?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions
      
    *Implementation Notes:* Fetches a bundle of all DiagnosticReport resources for the specified patient and a category code = `mental_functions` ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-code.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/DiagnosticReport?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:

      1. GET [base]/DiagnosticReport?patient=1134281&amp;code=http://loinc.org\|11332-4
      1. GET [base]/DiagnosticReport?patient=1134281&amp;code=http://loinc.org\|11332-4,http://loinc.org\|10158-4

    *Implementation Notes:* Fetches a bundle of all DiagnosticReport resources for the specified patient and code(s).  SHOULD support search by multiple report codes. The DiagnosticReport `code` parameter searches `DiagnosticReport.code only. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-category.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-date.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/DiagnosticReport?patient={Type/}[id]&category={system|}[code]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]DiagnosticReport?patient=555580&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions&amp;date=ge2018-03-14T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all DiagnosticReport resources for the specified patient and date and a category code = `mental_functions` ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameter combinations SHOULD be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-category.html)** and **[`status`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-status.html)** search parameters:
    - including support for *OR* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/DiagnosticReport?patient={Type/}[id]&category={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:

    1. GET [base]/DiagnosticReport?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions&amp;status=final

    *Implementation Notes:* Fetches a bundle of all DiagnosticReport resources for the specified patient and category `mental_functions` and status `final` ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-code.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-diagnosticreport-date.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/DiagnosticReport?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]DiagnosticReport?patient=555580&amp;code=http://loinc.org\|11332-4&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all DiagnosticReport resources for the specified patient and date and report code(s).  SHOULD support search by multiple report codes. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


---

// File: input/pagecontent/StructureDefinition-pfe-observation-abstract-intro.md

This profile abstracts and collects the requirements added on top of US Core Observation profiles by the Personal Functioning and Engagement (PFE) IG. The US Core Observation profiles that PFE extends detail specific requirements for the observation based on how it is collected. For example, the [Survey](https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-observation-survey.html) profile specifies requirements for representing observations made using formal assessment instruments and questionnaires while the [Clinical Test Result](https://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-observation-clinical-test.html) profile contains slightly different requirements for representing observations related to clinical tests using specialized equipment. Observation in scope for this IG include those that fall under multiple US Core observation profiles. The additional representational requirements placed by this IG are the same across all US Core observation profiles and are also consistent with all of them. This abstract profile represents those shared requirements so that:
- implementers who have already implemented US Core can see in one place what requirements the PFE IG adds.
- implementers looking to apply PFE outside of the US Realm can see the requirements separated from US Core.

### Mandatory and Must Support Data Elements

The following data elements must always be present or must be supported if the data is present in the sending system ([Must Support](formal_specification.html#must-support) definition). They are presented below with a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition](#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Personal Functioning and Engagement Abstract Observation must have:**

1. a status
1. a category code of "functioning"
1. a code representing what was observed
1. a patient
1. when the observation was made
1. who made the observation

**Each Personal Functioning and Engagement Abstract Observation must support:**

1. the location the observation was made
1. any devices the patient used
1. an additional [category value or values](ValueSet-pfe-category-vs.html) specifying the specific health or health-related [domain](domains.html) that this observation is related to*
1. the observation value

\* see guidance below

**Profile specific implementation guidance:**

* *When a health or health-related domain is specified as an additional [category value](ValueSet-pfe-category-vs.html), Observation.code **SHOULD** be drawn from the corresponding domain-based value set as discussed on the [domains](domains.html) page and within specific [profiles](artifacts.html#structures-resource-profiles).



---

// File: input/pagecontent/StructureDefinition-pfe-observation-clinicaltest-intro.md

**Example Usage Scenarios:**

The following are example usage scenarios for this Profile:
* Query for an observation representing a clinical test related to a patient's functioning and engagement.
* Record or update observations related to a clinical test for a Patient.

### Mandatory and Must Support Data Elements

The following data elements must always be present or must be supported if the data is present in the sending system ([Must Support](formal_specification.html#must-support) definition). They are presented below with a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition](#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Personal Functioning and Engagement Observation must have:**

1. a status
1. a category code of "clinical-test" and "functioning"
1. a code identifying the clinical test
1. a patient
1. the point in time or period when the observation was made
1. who made the observation

**Each Personal Functioning and Engagement Observation must support:**

1. the location the observation was made
1. any devices the patient used
1. an additional [category value or values](ValueSet-pfe-category-vs.html) specifying the specific health or health-related [domain](domains.html) that this observation is related to\*\*
1. the result or a reason why the data is absent\*

\* \*\* see guidance below

**Profile specific implementation guidance:**

* \*An Observation without a value, **SHALL** include a reason why the data is absent unless there are component observations. Systems that never provide an observation without a value are not required to support Observation.dataAbsentReason.
* \*\*When a health or health-related domain is specified as an additional [category value](ValueSet-pfe-category-vs.html), Observation.code **SHOULD** be drawn from the corresponding domain-based value set as discussed [below](#domain-specific-value-set-bindings) and on the [domains](domains.html) page.

### Domain-specific Value Set Bindings

| [`Observation.category`](ValueSet-pfe-category-vs.html) | Domain | Element binding | Assessment Observation Codes ValueSet |
| ------ | -------------------- | ------------------------- | ------------ |
|  sensory_functions_and_pain | Sensory functions and pain | Observation.code | [ PFE - Sensory functions and pain ValueSet ]( ValueSet-pfe-sensory-functions-pain-vs.html ) |
{:.grid}


---

// File: input/pagecontent/StructureDefinition-pfe-observation-clinicaltest-notes.md

The syntax used to describe the interactions below is described [here](https://hl7.org/fhir/us/core/STU5.0.1/general-guidance.html#search-syntax).

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations SHALL be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** search parameters:

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|clinical-test
      1. GET [base]/Observation?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|sensory_functions_and_pain
      
    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and a category code = `clinical-test` or `sensory_functions_and_pain` respectively ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-code.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;code=http://loinc.org\|91375-6
      1. GET [base]/Observation?patient=1134281&amp;code=http://loinc.org\|91375-6,http://loinc.org\|89024-4,http://loinc.org\|91379-8

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s).  SHOULD support search by multiple report codes. The Observation `code` parameter searches `Observation.code only. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-date.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]Observation?patient=555580&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|clinical-test&amp;date=ge2018-03-14T00:00:00Z
      1. GET [base]Observation?patient=555580&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|sensory_functions_and_pain&amp;date=ge2018-03-14T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `clinical-test` or `sensory_functions_and_pain` respectively ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameter combinations SHOULD be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** and **[`status`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-status.html)** search parameters:
    - including support for *OR* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|clinical-test&amp;status=final
      1. GET [base]/Observation?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|sensory_functions_and_pain&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category = `clinical-test` or `sensory_functions_and_pain` respectively and status `final` ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-code.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-date.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]Observation?patient=555580&amp;code=http://loinc.org\|91375-6&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and report code(s).  SHOULD support search by multiple report codes. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


---

// File: input/pagecontent/StructureDefinition-pfe-observation-single-intro.md

**Example Usage Scenarios:**

The following are example usage scenarios for this Profile:
* Query for an observation representing a single question with a formal panel related to a patient's functioning and engagement.
* Record or update observations related to a single question for a Patient.

### Mandatory and Must Support Data Elements

The following data elements must always be present or must be supported if the data is present in the sending system ([Must Support](formal_specification.html#must-support) definition). They are presented below with a simple human-readable explanation.  Profile specific guidance and examples are provided as well.  The [Formal Profile Definition](#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Personal Functioning and Engagement Observation must have:**

1. a status
1. a category code of "survey" and "functioning"
1. a code identifying the question asked or observation made
1. a patient
1. the point in time or period when the observation was made
1. who made the observation

**Each Personal Functioning and Engagement Observation must support:**

1. the location the observation was made
1. any devices the patient used
1. an additional [category value or values](ValueSet-pfe-category-vs.html) specifying the specific health or health-related [domain](domains.html) that this observation is related to***
1. the answer\* or a reason why the data is absent\*\*
1. related questionnaire responses that this observation is made from

\* \*\* \*\*\* see guidance below

**Profile specific implementation guidance:**

* \*These observations represent a specific question or observation, so the Observation.value element **SHOULD** be populated and the hasMember list **SHALL** be empty.
* \*\*An Observation without a value, **SHALL** include a reason why the data is absent unless there are component observations. Systems that never provide an observation without a value are not required to support Observation.dataAbsentReason.
* \*\*\*When a health or health-related domain is specified as an additional [category value](ValueSet-pfe-category-vs.html), Observation.code **SHOULD** be drawn from the corresponding domain-based value set as discussed below and on the [domains](domains.html) page.



### Usage

Rather than offer a separate Observation profile for each PFE category (also called domain – e.g., Mental Functions, Mobility, etc.), this profile can support any PFE category. The PFE Domain can be specified in a CodeableConcept in the Observation.category slice. Based on the code selected for the optional Observation.category slice, the Table below provides the PACIO-vetted, example value sets that contain the Assessment Observation codes to be placed in Observation.code for the selected domain. Where a preferred value set contains a code to describe a needed concept, servers SHOULD use that code. For more information regarding the ICF categorization process, and how to categorize new codes, see: [ domains ]( domains.html ) 

#### Body Functions PFE Domains

| [`Observation.category`](ValueSet-pfe-category-vs.html) | Domain | Element binding | Assessment Observation Codes ValueSet |
| ------ | -------------------- | ------------------------- | ------------ |
| mental-functions | Mental functions | Observation.code | [ PFE- Mental functions ValueSet ]( ValueSet-pfe-mental-functions-vs.html ) |
|  sensory_functions_and_pain | Sensory functions and pain | Observation.code | [ PFE - Sensory functions and pain ValueSet ]( ValueSet-pfe-sensory-functions-pain-vs.html ) |
| voice_and_speech_functions | Voice and speech functions | Observation.code | [ PFE- Voice and speech functions ValueSet ]( ValueSet-pfe-voice-and-speech-vs.html ) |
| functions_of_the_digestive_metabolic_and_endocrine_systems |  Functions of the digestive, metabolic and endocrine systems | Observation.code | [PFE - Functions of the digestive, metabolic and endocrine systems ValueSet]( ValueSet-pfe-functions-of-digestive-vs.html ) |
| genitourinary_and_reproductive_functions | Genitourinary and reproductive functions | Observation.code | [ PFE- Genitourinary and reproductive functions ValueSet ]( ValueSet-pfe-genitourinary-vs.html )  |
| neuromusculoskeletal_and_movement-related_functions | Neuromusculoskeletal and movement-related functions | Observation.code | [ PFE- Neuromusculoskeletal and movement-related functions ValueSet ]( ValueSet-pfe-neuromusculoskeletal-vs.html ) |
| functions_of_the_skin_and_related_structures | Functions of the skin and related structures | Observation.code | [ PFE- Functions of the skin and related structures ValueSet ]( ValueSet-pfe-skin-functions-vs.html ) |
{:.grid}

#### Activities and Participation PFE Domains

| [`Observation.category`](ValueSet-pfe-category-vs.html) | Domain | Element binding | Assessment Observation Codes ValueSet |
| ------ | -------------------- | ------------------------- | ------------ |
| learning_and_applying_knowledge | Learning and applying knowledge | Observation.code | [PFE - Learning and applying knowledge ValueSet ]( ValueSet-pfe-learning-and-applying-knowledge-vs.html ) |
| communication  | Communication | Observation.code | [PFE - Communication ValueSet ]( ValueSet-pfe-communication-vs.html ) |
| mobility | Mobility | Observation.code | [PFE - Mobility ValueSet ]( ValueSet-pfe-mobility-vs.html ) |
| self-care | Self-care | Observation.code | [PFE - Self-care ValueSet ]( ValueSet-pfe-self-care-vs.html ) |
| domestic_life | Domestic life | Observation.code | [PFE - Domestic life ValueSet ]( ValueSet-pfe-domestic-life-vs.html ) |
{:.grid}

#### Body Structures PFE Domains

| [`Observation.category`](ValueSet-pfe-category-vs.html) | Domain | Element binding | Assessment Observation Codes ValueSet |
| ------ | -------------------- | ------------------------- | ------------ |
| body-structures | Body structures  | Observation.code | [PFE - Body structures ValueSet ]( ValueSet-pfe-body-structures-vs.html ) |
| structures_involved_in_voice_and_speech | Structures involved in voice and speech  | Observation.code | [PFE - Structures involved in voice and speech ValueSet ]( ValueSet-pfe-structures-voice-and-speech-vs.html ) |
{:.grid} 

#### Environmental Factors PFE Domains
| [`Observation.category`](ValueSet-pfe-category-vs.html) | Domain | Element binding | Assessment Observation Codes ValueSet |
| ------ | -------------------- | ------------------------- | ------------ |
| products_and_technology | Products and technology  | Observation.code | [PFE - Products and Technology ValueSet ]( ValueSet-pfe-products-and-technology-vs.html ) |

---

// File: input/pagecontent/StructureDefinition-pfe-observation-single-notes.md

The syntax used to describe the interactions below is described [here](https://hl7.org/fhir/us/core/STU5.0.1/general-guidance.html#search-syntax).

#### Mandatory Search Parameters:

The following search parameters and search parameter combinations SHALL be supported:

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** search parameters:

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey
      1. GET [base]/Observation?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions
      
    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and a category code = `survey` or `mental_functions` respectively ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-code.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;code=http://loinc.org\|72133-2
      1. GET [base]/Observation?patient=1134281&amp;code=http://loinc.org\|72133-2,http://loinc.org\|72107-6,http://loinc.org\|54635-8

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and observation code(s).  SHOULD support search by multiple report codes. The Observation `code` parameter searches `Observation.code only. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHALL** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-date.html)** search parameters:
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]Observation?patient=555580&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;date=ge2018-03-14T00:00:00Z
      1. GET [base]Observation?patient=555580&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions&amp;date=ge2018-03-14T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and a category code = `survey` or `mental_functions` respectively ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


#### Optional Search Parameters:

The following search parameter combinations SHOULD be supported:

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`category`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-category.html)** and **[`status`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-status.html)** search parameters:
    - including support for *OR* search on `status` (e.g.`status={system|}[code],{system|}[code],...`)

    `GET [base]/Observation?patient={Type/}[id]&category={system|}[code]&status={system|}[code]{,{system|}[code],...}`

    Example:

      1. GET [base]/Observation?patient=1134281&amp;category=http://terminology.hl7.org/CodeSystem/observation-category\|survey&amp;status=final
      1. GET [base]/Observation?patient=1134281&amp;category=http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs\|mental_functions&amp;status=final

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and category = `survey` or `mental_functions` respectively and status `final` ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token))

1. **SHOULD** support searching using the combination of the **[`patient`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-patient.html)** and **[`code`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-code.html)** and **[`date`](https://hl7.org/fhir/us/core/STU5.0.1/SearchParameter-us-core-observation-date.html)** search parameters:
    - including optional support for *OR* search on `code` (e.g.`code={system|}[code],{system|}[code],...`)
    - including support for these `date` comparators: `gt,lt,ge,le`
    - including optional support for *AND* search on `date` (e.g.`date=[date]&date=[date]]&...`)

    `GET [base]/Observation?patient={Type/}[id]&code={system|}[code]{,{system|}[code],...}&date={gt|lt|ge|le}[date]{&date={gt|lt|ge|le}[date]&...}`

    Example:

      1. GET [base]Observation?patient=555580&amp;code=http://loinc.org\|72133-2&amp;date=ge2019-01-01T00:00:00Z

    *Implementation Notes:* Fetches a bundle of all Observation resources for the specified patient and date and report code(s).  SHOULD support search by multiple report codes. ([how to search by reference](https://hl7.org/fhir/R4/search.html#reference) and [how to search by token](https://hl7.org/fhir/R4/search.html#token) and [how to search by date](https://hl7.org/fhir/R4/search.html#date))


---

// File: input/pagecontent/StructureDefinition-pfe-use-of-device-intro.md

**Example Usage Scenarios:**

The following are example usage scenarios for this Profile:
* Access details on a device used during an assessment.
* Record or update details on a device that a patient used.

### Mandatory and Must Support Data Elements

The following data elements must always be present. They are presented below with a simple human-readable explanation. The [Formal Profile Definition](#profile) below provides the formal summary, definitions, and terminology requirements.

**Each Personal Functioning and Engagement UseOfDevice must have:**

1. a status
1. a patient
1. a device




---

// File: input/pagecontent/underlying_technologies.md

Based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard, this implementation guide uses terminology, notations, and design principles that are specific to FHIR. Implementers of this specification therefore need to understand some basic information about this specification.

### Fast Healthcare Interoperability Resources

Before reading this implementation guide, familiarity with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications is required. Readers who are unfamiliar with FHIR are encouraged to read the following prior to reading the rest of this implementation guide.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html)
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html)
* [Base resource]({{site.data.fhir.path}}resource.html)
* [Security]({{site.data.fhir.path}}security.html)
* [Security Labels]({{site.data.fhir.path}}security-labels.html)

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard and builds on the [US Core STU5.0.1 Implementation Guide](https://projectlifedashboard.hl7.org/specifications/hl7-fhir-us-core-v5-0-1/); implementers need to familiarize themselves with the profiles in that guide.

---

// File: input/pagecontent/ValueSet-pfe-example-obs-vs-intro.md

The entries in this value set are examples of the codes expected to be used on Observation instances within the scope of this Personal Functioning and Engagement Implementation Guide (PFE IG). It is used only within the [Abstract PFE Observation](StructureDefinition-pfe-observation-abstract.html) that serves to show the requirements placed on Observations by the PFE IG separate from requirements put in place by US Core profiles. That profile is not expected to be implemented and is included only for informational purposes and clarity. Implementers should follow guidance around the use of codes on the [domains page](domains.html) and within specific implementable profiles.

Codes in this value set are intended to cover different types and flavors of observations covered by this IG. The codes included are pulled from
1. Formal assessments, such as [CMS assessments instruments](https://del.cms.gov/DELWeb/pubHome) used in post-acute care, [AM-PAC assessments](https://pubmed.ncbi.nlm.nih.gov/14707755/), and [ASHA Functional Communication Measures](https://www.asha.org/siteassets/uploadedfiles/ASHA/NOMS/SLP-NOMS-Functional-Communication-Measures.pdf) (FCMs). These include
  - Specific questions (e.g., [95019-6](https://loinc.org/95019-6/), [99831-0](https://loinc.org/99831-0/)),
  - Calculated summary scores (e.g., [79532-8](https://loinc.org/79532-8/), [99835-1](https://loinc.org/99835-1/)), and
  - Panels and groupers* (e.g., [101265-7](https://loinc.org/101265-7/), [99828-6](https://loinc.org/99828-6/))
1. Clinical tests using specialized equipment, such as hearing threshold tests (e.g., [91375-6](https://loinc.org/91375-6/))

<blockquote class="stu-note">
<p>
*Panels and groupers are not in scope for inclusion within <a href="domains.html">domain-based value sets</a> within STU1 of the PFE IG. However, implementers may still create observation instances using these codes as a part of following the <a href="structured_data_capture.html">recommended structure</a> for representing complex assessments. Therefore, they are included here as examples even though they will not be found within the <a href="domains.html">domain-based value sets</a>. 
</p>
</blockquote>

---

// File: input/fsh/CodeSystems.fsh



//only used in PFE Abstract Observation, which may be no longer applicable
CodeSystem: PFEFunctioningCS
Title: "Personal Functioning and Engagement Functioning Category Code System"
Id: pfe-functioning-cs
Description: "Defines a specific code for the classification of patient observations regarding individual's functioning and engagement."
* ^caseSensitive = true
* ^experimental = false
* #functioning "Functioning" "Functioning is an umbrella term for body function, body structures, activities, and participation in societal roles. An individual's functioning and engagement represents a dynamic interaction between their health condition, environmental factors, and personal factors. Taking a broad view of health that encompasses physical, mental, and social well-being, includes optimizing functioning and engagement as a component of optimizing their health. Characterizing an individual's functioning and engagement includes both understanding the severity of an individual's signs, symptoms, impairments and limitations, and how they correspond with day-to-day activities. Functioning and engagement also serve as a key health outcome within health care."

CodeSystem: PFECategoryCS
Title: "Personal Functioning and Engagement Category"
Id: pfe-category-cs
Description: "Includes codes representing health and health-related domains into which functioning observations can be further categorized."
* ^experimental = false
* ^caseSensitive = true
* ^hierarchyMeaning = #is-a
* #BlockL1-b11 "Body functions" "Body functions are the physiological functions of body systems (including psychological functions). Impairments are problems in body function or structure as a significant deviation or loss. Broad ranges of percentages are provided for those cases in which calibrated assessment instruments or other standards are available to quantify the impairment in body function. For example, when \"no impairment\" or \"complete impairment\" in body function is coded, this scaling may have margin of error of up to 5%. \"Moderate impairment\" is generally up to half of the scale of total impairment. The percentages are to be calibrated in different domains with reference to population standards as percentiles. For this quantification to be used in a uniform manner, assessment procedures need to be developed through research. For a further explanation of coding conventions in ICF, refer to Annex 2."
* #BlockL1-b11 #BlockL2-b11 "Mental functions" "This chapter is about the functions of the brain: both global mental functions, such as consciousness, energy and drive, and specific mental functions, such as memory, language and calculation mental functions."
* #BlockL1-b11 #BlockL2-b11 #b110 "Consciousness functions" "General mental functions of the state of awareness and alertness, including the clarity and continuity of the wakeful state."
* #BlockL1-b11 #BlockL2-b11 #b110 #b1100 "State of consciousness" "Mental functions that when altered produce states such as clouding of consciousness, stupor or coma. Mental functions that produce consciousness, and when altered produce states such as clouding of consciousness, stupor or coma."
* #BlockL1-b11 #BlockL2-b11 #b110 #b1101 "Continuity of consciousness" "Mental functions that produce sustained wakefulness, alertness and awareness and, when disrupted, may produce fugue, trance or other similar states."
* #BlockL1-b11 #BlockL2-b11 #b110 #b1102 "Quality of consciousness" "Mental functions that when altered effect changes in the character of wakeful, alert and aware sentience, such as druginduced altered states or delirium. Mental functions that produce wakefulness, alertness and awareness sentience, when altered effect changes in the character of the quality of consciousness."
* #BlockL1-b11 #BlockL2-b11 #b114 "Orientation functions" "General mental functions of knowing and ascertaining one's relation to time to place, to self, to others, to objects, and to space."
* #BlockL1-b11 #BlockL2-b11 #b114 #b1140 "Orientation to time" "Mental functions that produce awareness of time of the day, day of the week, date, month and year."
* #BlockL1-b11 #BlockL2-b11 #b114 #b1141 "Orientation to place" "Mental functions that produce awareness of one's location, such as one's immediate surroundings, one's town or country."
* #BlockL1-b11 #BlockL2-b11 #b114 #b1142 "Orientation to person" "Mental functions that produce awareness of one's own identity and of individuals in the immediate environment."
* #BlockL1-b11 #BlockL2-b11 #b114 #b1142 #b11420 "Orientation to self" "Mental functions that produce awareness of one's own identity."
* #BlockL1-b11 #BlockL2-b11 #b114 #b1142 #b11421 "Orientation to others" "Mental functions that produce awareness of the identity of other individuals in one's immediate environment."
* #BlockL1-b11 #BlockL2-b11 #b114 #b1143 "Orientation to objects" "Mental functions that produce awareness of objects or features of objects."
* #BlockL1-b11 #BlockL2-b11 #b114 #b1144 "Orientation to space" "Mental functions that produce awareness of one's body in relationship to the immediate physical space."
* #BlockL1-b11 #BlockL2-b11 #b117 "Intellectual functions" "General mental functions, required to understand and constructively integrate the various mental functions including all cognitive functions and their development over the life span."
* #BlockL1-b11 #BlockL2-b11 #b122 "Global psychosocial functions" "General mental functions, as they develop over the life span, required to understand and constructively integrate the mental functions that lead to the formation of the personal skills needed to establish reciprocal social interactions, in terms of both meaning and purpose."
* #BlockL1-b11 #BlockL2-b11 #b126 "Temperament and personality functions" "General mental functions of constitutional disposition of the individual to react in a particular way to situations, including the set of mental characteristics that makes the individual distinct from others."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1260 "Extraversion" "Mental functions that produce a personal disposition that is outgoing, sociable and demonstrative, as contrasted to being shy, restricted and inhibited."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1261 "Agreeableness" "Mental functions that produce a personal disposition that is cooperative, amicable, and accomodating, as contrasted to being unfriendly, oppositional and defiant."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1262 "Conscientiousness" "Mental functions that produce a personal disposition such as in being hard-working, methodical and scrupulous, as contrasted to mental functions producing dispositions such as being lazy, unreliable and irresponsible."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1263 "Psychic stability" "Mental functions that produce a personal disposition that is even-tempered, calm and composed, as contrasted to being irritable, worried, erratic and moody."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1264 "Openness to experience" "Mental functions that produce a personal disposition that is curious, imaginative, inquisitive and experience-seeking, as contrasted to being stagnant, inattentive and emotionally inexpressive."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1265 "Optimism" "Mental functions that produce a personal disposition that is cheerful, buoyant and hopeful, as contrasted to being downhearted, gloomy and despairing."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1266 "Confidence" "Mental functions that produce a personal disposition that is self-assured, bold and assertive, as contrasted to being timid, insecure and self effacing."
* #BlockL1-b11 #BlockL2-b11 #b126 #b1267 "Trustworthiness" "Mental functions that produce a personal disposition that is dependable and principled, as contrasted to being deceitful and antisocial."
* #BlockL1-b11 #BlockL2-b11 #b130 "Energy and drive functions" "General mental functions of physiological and psychological mechanisms that cause the individual to move towards satisfy specific needs and general goals in a persistent manner."
* #BlockL1-b11 #BlockL2-b11 #b130 #b1300 "Energy level" "Mental functions that produce vigour and stamina."
* #BlockL1-b11 #BlockL2-b11 #b130 #b1301 "Motivation" "Mental functions that produce the incentive to act; the conscious or unconscious driving force for action."
* #BlockL1-b11 #BlockL2-b11 #b130 #b1302 "Appetite" "Mental functions that produce a natural longing or desire, especially the natural and recurring desire for food and drink."
* #BlockL1-b11 #BlockL2-b11 #b130 #b1303 "Craving" "Mental functions that produce the urge to consume substances, including substances that can be abused."
* #BlockL1-b11 #BlockL2-b11 #b130 #b1304 "Impulse control" "Mental functions that regulate and resist sudden intense urges to do something."
* #BlockL1-b11 #BlockL2-b11 #b134 "Sleep functions" "General mental functions of periodic, reversible and selective physical and mental disengagement from one's immediate environment accompanied by characteristic physiological changes."
* #BlockL1-b11 #BlockL2-b11 #b134 #b1340 "Amount of sleep" "Mental functions involved in the time spent in the state of sleep in the diurnal cycle or circadian rhythm."
* #BlockL1-b11 #BlockL2-b11 #b134 #b1341 "Onset of sleep" "Mental functions that produce the transition between wakefulness and sleep."
* #BlockL1-b11 #BlockL2-b11 #b134 #b1342 "Maintenance of sleep" "Mental functions that sustain the state of being asleep."
* #BlockL1-b11 #BlockL2-b11 #b134 #b1343 "Quality of sleep" "Mental functions that produce the natural sleep leading to optimal physical and mental rest and relaxation."
* #BlockL1-b11 #BlockL2-b11 #b134 #b1344 "Functions involving the sleep cycle" "Mental functions that produce rapid eye movement (REM) sleep (associated with dreaming) and non-rapid eye movement sleep (NREM) (characterized by the traditional concept of sleep as a time of decreased physiological and psychological activity)."
* #BlockL1-b11 #BlockL2-b11 #b140 "Attention functions" "Specific mental functions of focusing on an external stimulus or internal experience for the required period of time."
* #BlockL1-b11 #BlockL2-b11 #b140 #b1400 "Sustaining attention" "Mental functions that produce concentration for the period of time required."
* #BlockL1-b11 #BlockL2-b11 #b140 #b1401 "Shifting attention" "Mental functions that permit refocusing concentration from one stimulus to another."
* #BlockL1-b11 #BlockL2-b11 #b140 #b1402 "Dividing attention" "Mental functions that permit focusing on two or more stimuli at the same time."
* #BlockL1-b11 #BlockL2-b11 #b140 #b1403 "Sharing attention" "Mental functions that permit focusing on the same stimulus by two or more people, such as a child and a caregiver both focusing on a toy."
* #BlockL1-b11 #BlockL2-b11 #b144 "Memory functions" "Specific mental functions of registering and storing information and retrieving it as needed."
* #BlockL1-b11 #BlockL2-b11 #b144 #b1440 "Short-term memory" "Mental functions that produce a temporary, disruptable memory store of around 30 seconds duration from which information is lost if not consolidated into long-term memory."
* #BlockL1-b11 #BlockL2-b11 #b144 #b1441 "Long-term memory" "Mental functions that produce a memory system permitting the long-term storage of information from short-term memory and both autobiographical memory for past events and semantic memory for language and facts."
* #BlockL1-b11 #BlockL2-b11 #b144 #b1442 "Retrieval and processing of memory" "Specific mental functions of recalling information stored in long-term memory and bringing it into awareness."
* #BlockL1-b11 #BlockL2-b11 #b144 #b1443 "Working memory" "Mental functions that compare and process information retrieved from both short-term and long-term memory."
* #BlockL1-b11 #BlockL2-b11 #b147 "Psychomotor functions" "Specific mental functions of control over both motor and psychological events at the body level."
* #BlockL1-b11 #BlockL2-b11 #b147 #b1470 "Psychomotor control" "Mental functions that regulate the speed of behaviour or response time that involves both motor and psychological components, such as in disruption of control producing psychomotor retardation (moving and speaking slowly; decrease in gesturing and spontaneity) or psychomotor excitement (excessive behavioural and cognitive activity, usually nonproductive and often in response to inner tension as in toe-tapping, hand-wringing, agitation, or restlessness)."
* #BlockL1-b11 #BlockL2-b11 #b147 #b1471 "Quality of psychomotor functions" "Mental functions that produce nonverbal behaviour in the proper sequence and character of its subcomponents, such as hand and eye coordination, or gait."
* #BlockL1-b11 #BlockL2-b11 #b152 "Emotional functions" "Specific mental functions related to the feeling and affective components of the processes of the mind."
* #BlockL1-b11 #BlockL2-b11 #b152 #b1520 "Appropriateness of emotion" "Mental functions that produce congruence of feeling or affect with the situation, such as happiness at receiving good news."
* #BlockL1-b11 #BlockL2-b11 #b152 #b1521 "Regulation of emotion" "Mental functions that control the experience and display of affect."
* #BlockL1-b11 #BlockL2-b11 #b152 #b1522 "Range of emotion" "Mental functions that produce the spectrum of experience of arousal of affect or feelings such as love, hate, anxiousness, sorrow, joy, fear and anger."
* #BlockL1-b11 #BlockL2-b11 #b156 "Perceptual functions" "Specific mental functions of recognizing and interpreting sensory stimuli."
* #BlockL1-b11 #BlockL2-b11 #b156 #b1560 "Auditory perception" "Mental functions involved in discriminating sounds, tones, pitches and other acoustic stimuli."
* #BlockL1-b11 #BlockL2-b11 #b156 #b1561 "Visual perception" "Mental functions involved in discriminating shape, size, colour and other ocular stimuli."
* #BlockL1-b11 #BlockL2-b11 #b156 #b1562 "Olfactory perception" "Mental functions involved in distinguishing differences in smells."
* #BlockL1-b11 #BlockL2-b11 #b156 #b1563 "Gustatory perception" "Mental functions involved in distinguishing differences in tastes, such as sweet, sour, salty and bitter stimuli, detected by the tongue."
* #BlockL1-b11 #BlockL2-b11 #b156 #b1564 "Tactile perception" "Mental functions involved in distinguishing differences in texture, such as rough or smooth stimuli, detected by touch."
* #BlockL1-b11 #BlockL2-b11 #b156 #b1565 "Visuospatial perception" "Mental function involved in distinguishing by sight the relative position of objects in the environment or in relation to oneself."
* #BlockL1-b11 #BlockL2-b11 #b160 "Thought functions" "Specific mental functions related to the ideational component of the mind."
* #BlockL1-b11 #BlockL2-b11 #b160 #b1600 "Pace of thought" "Mental functions that govern speed of the thinking process."
* #BlockL1-b11 #BlockL2-b11 #b160 #b1601 "Form of thought" "Mental functions that organize the thinking process as to its coherence and logic."
* #BlockL1-b11 #BlockL2-b11 #b160 #b1602 "Content of thought" "Mental functions consisting of the ideas that are present in the thinking process and what is being conceptualized."
* #BlockL1-b11 #BlockL2-b11 #b160 #b1603 "Control of thought" "Mental functions that provide volitional control of thinking and are recognized as such by the person."
* #BlockL1-b11 #BlockL2-b11 #b164 "Higher-level cognitive functions" "Specific mental functions especially dependent on the frontal lobes of the brain, including complex goal-directed behaviours such as decision-making, abstract thinking, planning and carrying out plans, mental flexibility, and deciding which behaviours are appropriate under what circumstances; often called executive functions."
* #BlockL1-b11 #BlockL2-b11 #b164 #b1640 "Abstraction" "Mental functions of creating general ideas, qualities or characteristics out of, and distinct from, concrete realities, specific objects or actual instances."
* #BlockL1-b11 #BlockL2-b11 #b164 #b1641 "Organization and planning" "Mental functions of coordinating parts into a whole, of systematizing; the mental function involved in developing a method of proceeding or acting."
* #BlockL1-b11 #BlockL2-b11 #b164 #b1642 "Time management" "Mental functions of ordering events in chronological sequence, allocating amounts of time to events and activities."
* #BlockL1-b11 #BlockL2-b11 #b164 #b1643 "Cognitive flexibility" "Mental functions of changing strategies, or shifting mental sets, especially as involved in problem-solving."
* #BlockL1-b11 #BlockL2-b11 #b164 #b1644 "Insight" "Mental functions of awareness and understanding of oneself and one's behaviour."
* #BlockL1-b11 #BlockL2-b11 #b164 #b1645 "Judgement" "Mental functions involved in discriminating between and evaluating different options, such as those involved in forming an opinion."
* #BlockL1-b11 #BlockL2-b11 #b164 #b1646 "Problem Solving" "Mental functions of identifying, analysing, and integrating incongruent or conflicting information into a solution."
* #BlockL1-b11 #BlockL2-b11 #b167 "Mental functions of language" "Specific mental functions of recognizing and using signs, symbols and other components of a language."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1670 "Reception of language" "Specific mental functions of decoding messages in spoken, written or other forms, such as sign language, to obtain their meaning."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1670 #b16700 "Reception of spoken language" "Mental functions of decoding spoken messages to obtain their meaning."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1670 #b16701 "Reception of written language" "Mental functions of decoding written messages to obtain their meaning."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1670 #b16702 "Reception of sign language" "Mental functions of decoding messages in languages that use signs made by hands and other movements, in order to obtain their meaning."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1670 #b16703 "Reception of body language" "Mental functions of decoding messages in body gestures made by hands and other movements, in order to obtain their meaning."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1671 "Expression of language" "Specific mental functions necessary to produce meaningful messages in spoken, written, signed or other forms of language."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1671 #b16710 "Expression of spoken language" "Mental functions necessary to produce meaningful spoken messages."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1671 #b16711 "Expression of written language" "Mental functions necessary to produce meaningful written messages."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1671 #b16712 "Expression of sign language" "Mental functions to produce meaningful messages in languages that use signs made by hands and other movements."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1671 #b16713 "Expression of body language" "Mental functions necessary to produce messages using gestures made by hands and other movements."
* #BlockL1-b11 #BlockL2-b11 #b167 #b1672 "Integrative language functions" "Mental functions that organize semantic and symbolic meaning, grammatical structure and ideas for the production of messages in spoken, written or other forms of language."
* #BlockL1-b11 #BlockL2-b11 #b172 "Calculation functions" "Specific mental functions of determination, approximation and manipulation of mathematical symbols and processes."
* #BlockL1-b11 #BlockL2-b11 #b172 #b1720 "Simple calculation" "Mental functions of computing with numbers, such as addition, subtraction, multiplication and division."
* #BlockL1-b11 #BlockL2-b11 #b172 #b1721 "Complex calculation" "Mental functions of translating word problems into arithmetic procedures, translating mathematical formulas into arithmetic procedures, and other complex manipulations involving numbers."
* #BlockL1-b11 #BlockL2-b11 #b176 "Mental function of sequencing complex movements" "Specific mental functions of sequencing and co-ordinating complex, purposeful movements."
* #BlockL1-b11 #BlockL2-b11 #b180 "Experience of self and time functions" "Specific mental functions related to the awareness of one's identity, one's body, one's position in the reality of one's environment and of time."
* #BlockL1-b11 #BlockL2-b11 #b180 #b1800 "Experience of self" "Specific mental functions of being aware of one's own identity and one's position in the reality of one's environment around oneself."
* #BlockL1-b11 #BlockL2-b11 #b180 #b1801 "Body image" "Specific mental functions related to the representation and awareness of one's body."
* #BlockL1-b11 #BlockL2-b11 #b180 #b1802 "Experience of time" "Specific mental functions of the subjective experiences related to the length and passage of time."
* #BlockL1-b11 #BlockL2-b21 "Sensory functions and pain" "This chapter is about the functions of the senses, seeing, hearing, tasting and so on, as well as the sensation of pain."
* #BlockL1-b11 #BlockL2-b21 #b210 "Seeing functions" "Sensory functions relating to sensing the presence of light and sensing the form, size, shape and colour of the visual stimuli."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2100 "Visual acuity functions" "Seeing functions of sensing form and contour, both binocular and monocular, for both distant and near vision."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2100 #b21000 "Binocular acuity of distant vision" "Seeing functions of sensing size, form and contour using both eyes for objects distant from the eye."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2100 #b21001 "Monocular acuity of distant vision" "Seeing functions of sensing size, form and contour using either right or left eye alone, for objects distant from the eye."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2100 #b21002 "Binocular acuity of near vision" "Seeing functions of sensing size, form and contour, using both eyes, for objects close to the eye."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2100 #b21003 "Monocular acuity of near vision" "Seeing functions of sensing size, form and contour, using either right or left eye alone, for objects close to the eye."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2101 "Visual field functions" "Seeing functions related to the entire area that can be seen with fixation of gaze."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2102 "Quality of vision" "Seeing functions involving light sensitivity, colour vision, contrast sensitivity and the overall quality of the picture."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2102 #b21020 "Light sensitivity" "Seeing functions of sensing a minimum amount of light (light minimum), and the minimum difference in intensity (light difference)."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2102 #b21021 "Colour vision" "Seeing functions of differentiating and matching colours."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2102 #b21022 "Contrast sensitivity" "Seeing functions of separating figure from ground, involving the minimum amount of luminance required."
* #BlockL1-b11 #BlockL2-b21 #b210 #b2102 #b21023 "Visual picture quality" "Seeing functions involving the quality of the picture."
* #BlockL1-b11 #BlockL2-b21 #b215 "Functions of structures adjoining the eye" "Functions of structures in and around the eye that facilitate seeing functions."
* #BlockL1-b11 #BlockL2-b21 #b215 #b2150 "Functions of internal muscles of the eye" "Functions of the muscles inside the eye, such as the iris, that adjust the shape and size of the pupil and lens of the eye."
* #BlockL1-b11 #BlockL2-b21 #b215 #b2151 "Functions of the eyelid" "Functions of the eyelid, such as the protective reflex."
* #BlockL1-b11 #BlockL2-b21 #b215 #b2152 "Functions of external muscles of the eye" "Functions of the muscles that are used to look in different directions, to follow an object as it moves across the visual field, to produce saccadic jumps to catch up with a moving target, and to fix the eye."
* #BlockL1-b11 #BlockL2-b21 #b215 #b2153 "Functions of lachrymal glands" "Functions of the tear glands and ducts."
* #BlockL1-b11 #BlockL2-b21 #b220 "Sensations associated with the eye and adjoining structures" "Sensations of tired, dry and itching eye and related feelings."
* #BlockL1-b11 #BlockL2-b21 #b230 "Hearing functions" "Sensory functions relating to sensing the presence of sounds and discriminating the location, pitch, loudness and quality of sounds."
* #BlockL1-b11 #BlockL2-b21 #b230 #b2300 "Sound detection" "Sensory functions relating to sensing the presence of sounds."
* #BlockL1-b11 #BlockL2-b21 #b230 #b2301 "Sound discrimination" "Sensory functions relating to sensing the presence of sound involving the differentiation of ground and binaural synthesis, separation and blending."
* #BlockL1-b11 #BlockL2-b21 #b230 #b2302 "Localization of sound source" "Sensory functions relating to determining the location of the source of sound."
* #BlockL1-b11 #BlockL2-b21 #b230 #b2303 "Lateralization of sound" "Sensory functions relating to determining whether the sound is coming from right or the left side."
* #BlockL1-b11 #BlockL2-b21 #b230 #b2304 "Speech discrimination" "Sensory functions relating to determining spoken language and distinguishing it from other sounds."
* #BlockL1-b11 #BlockL2-b21 #b235 "Vestibular functions" "Sensory functions of the inner ear related to position, balance and movement."
* #BlockL1-b11 #BlockL2-b21 #b235 #b2350 "Vestibular function of position" "Sensory functions of the inner ear related to determining the position of the body."
* #BlockL1-b11 #BlockL2-b21 #b235 #b2351 "Vestibular function of balance" "Sensory functions of the inner ear related to determining the balance of the body."
* #BlockL1-b11 #BlockL2-b21 #b235 #b2352 "Vestibular function of determination of movement" "Sensory functions of the inner ear related to determining movement of the body, including its direction and speed."
* #BlockL1-b11 #BlockL2-b21 #b240 "Sensations associated with hearing and vestibular function" "Sensations of dizziness, falling, tinnitus and vertigo."
* #BlockL1-b11 #BlockL2-b21 #b240 #b2400 "Ringing in ears or tinnitus" "Sensation of low-pitched rushing, hissing or ringing in the ear."
* #BlockL1-b11 #BlockL2-b21 #b240 #b2401 "Dizziness" "Sensation of motion involving either oneself or one's environment; sensation of rotating, swaying or tilting."
* #BlockL1-b11 #BlockL2-b21 #b240 #b2402 "Sensation of falling" "Sensation of losing one's grip and falling."
* #BlockL1-b11 #BlockL2-b21 #b240 #b2403 "Nausea associated with dizziness or vertigo" "Sensation of wanting to vomit that arises from dizziness or vertigo."
* #BlockL1-b11 #BlockL2-b21 #b240 #b2404 "Irritation in the ear" "Sensation of itching or other similar sensations in the ear."
* #BlockL1-b11 #BlockL2-b21 #b240 #b2405 "Aural pressure" "Sensation of pressure in the ear."
* #BlockL1-b11 #BlockL2-b21 #b250 "Taste function" "Sensory functions of sensing qualities of bitterness, sweetness, sourness and saltiness"
* #BlockL1-b11 #BlockL2-b21 #b255 "Smell function" "Sensory functions of sensing odours and smells."
* #BlockL1-b11 #BlockL2-b21 #b260 "Proprioceptive function" "Sensory functions of sensing the relative position of body parts."
* #BlockL1-b11 #BlockL2-b21 #b265 "Touch function" "Sensory functions of sensing surfaces and their texture or quality."
* #BlockL1-b11 #BlockL2-b21 #b270 "Sensory functions related to temperature and other stimuli" "Sensory functions of sensing temperature, vibration, pressure and noxious stimulus."
* #BlockL1-b11 #BlockL2-b21 #b270 #b2700 "Sensitivity to temperature" "Sensory functions of sensing cold and heat."
* #BlockL1-b11 #BlockL2-b21 #b270 #b2701 "Sensitivity to vibration" "Sensory functions of sensing shaking or oscillation."
* #BlockL1-b11 #BlockL2-b21 #b270 #b2702 "Sensitivity to pressure" "Sensory functions of sensing pressure against or on the skin."
* #BlockL1-b11 #BlockL2-b21 #b270 #b2703 "Sensitivity to a noxious stimulus" "Sensory functions of sensing painful or uncomfortable sensations."
* #BlockL1-b11 #BlockL2-b21 #b280 "Sensation of pain" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2800 "Generalized pain" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt all over, or throughout the body."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 "Pain in body part" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in a specific part, or parts, of the body."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 #b28010 "Pain in head and neck" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the head and neck."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 #b28011 "Pain in chest" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the chest."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 #b28012 "Pain in stomach or abdomen" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the stomach or abdomen."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 #b28013 "Pain in back" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in the back."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 #b28014 "Pain in upper limb" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in either one or both upper limbs, including hands."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 #b28015 "Pain in lower limb" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in either one or both lower limbs, including feet."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2801 #b28016 "Pain in joints" "Sensation of unpleasant feeling indicating potential or actual damage to some body structure felt in one or more joints, including small and big joints."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2802 "Pain in multiple body parts" "Unpleasant sensation indicating potential or actual damage to some body structure located in several body parts."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2803 "Radiating pain in a dermatome" "Unpleasant sensation indicating potential or actual damage to some body structure located in areas of skin served by the same nerve root."
* #BlockL1-b11 #BlockL2-b21 #b280 #b2804 "Radiating pain in a segment or region" "Unpleasant sensation indicating potential or actual damage to some body structure located in areas of skin in different body parts not served by the same nerve root."
* #BlockL1-b11 #BlockL2-b31 "Voice and speech functions" "This chapter is about the functions of producing sounds and speech."
* #BlockL1-b11 #BlockL2-b31 #b310 "Voice functions" "Functions of the production of various sounds by the passage of air through the larynx."
* #BlockL1-b11 #BlockL2-b31 #b310 #b3100 "Production of voice" "Functions of the production of sound made through coordination of the larynx and surrounding muscles with the respiratory system."
* #BlockL1-b11 #BlockL2-b31 #b310 #b3101 "Quality of voice" "Functions of the production of characteristics of voice including pitch, resonance and other features."
* #BlockL1-b11 #BlockL2-b31 #b320 "Articulation functions" "Functions of the production of speech sounds."
* #BlockL1-b11 #BlockL2-b31 #b330 "Fluency and rhythm of speech functions" "Functions of the production of flow and tempo of speech."
* #BlockL1-b11 #BlockL2-b31 #b330 #b3300 "Fluency of speech" "Functions of the production of smooth, uninterrupted flow of speech."
* #BlockL1-b11 #BlockL2-b31 #b330 #b3301 "Rhythm of speech" "Functions of the modulated, tempo and stress patterns in speech."
* #BlockL1-b11 #BlockL2-b31 #b330 #b3302 "Speed of speech" "Functions of the rate of speech production."
* #BlockL1-b11 #BlockL2-b31 #b330 #b3303 "Melody of speech" "Functions of modulation of pitch patterns in speech."
* #BlockL1-b11 #BlockL2-b31 #b340 "Alternative vocalization functions" "Functions of the production of other manners of vocalization."
* #BlockL1-b11 #BlockL2-b31 #b340 #b3400 "Production of tones" "Functions of production of musical vocal sounds."
* #BlockL1-b11 #BlockL2-b31 #b340 #b3401 "Making a range of sounds" "Functions of production of a variety of vocalizations."
* #BlockL1-b11 #BlockL2-b41 "Functions of the cardiovascular, haematological, immunological and respiratory systems" "This chapter is about the functions involved in the cardiovascular system (functions of the heart and blood vessels), the haematological and immunological systems (functions of blood production and immunity), and the respiratory system (functions of respiration and exercise tolerance)."
* #BlockL1-b11 #BlockL2-b41 #b410 "Heart functions" "Functions of pumping the blood in adequate or required amounts and pressure throughout the body."
* #BlockL1-b11 #BlockL2-b41 #b410 #b4100 "Heart rate" "Functions related to the number of times the heart contracts every minute."
* #BlockL1-b11 #BlockL2-b41 #b410 #b4101 "Heart rhythm" "Functions related to the regularity of the beating of the heart."
* #BlockL1-b11 #BlockL2-b41 #b410 #b4102 "Contraction force of ventricular muscles" "Functions related to the amount of blood pumped by the ventricular muscles during every beat."
* #BlockL1-b11 #BlockL2-b41 #b410 #b4103 "Blood supply to the heart" "Functions related to the volume of blood available to the heart muscle."
* #BlockL1-b11 #BlockL2-b41 #b415 "Blood vessel functions" "Functions of transporting blood throughout the body."
* #BlockL1-b11 #BlockL2-b41 #b415 #b4150 "Functions of arteries" "Functions related to blood flow in the arteries."
* #BlockL1-b11 #BlockL2-b41 #b415 #b4151 "Functions of capillaries" "Functions related to blood flow in the capillaries."
* #BlockL1-b11 #BlockL2-b41 #b415 #b4152 "Functions of veins" "Functions related to blood flow in the veins, and the functions of valves of veins."
* #BlockL1-b11 #BlockL2-b41 #b420 "Blood pressure functions" "Functions of maintaining the pressure of blood within the arteries."
* #BlockL1-b11 #BlockL2-b41 #b420 #b4200 "Increased blood pressure" "Functions related to a rise in systolic or diastolic blood pressure above normal for the age."
* #BlockL1-b11 #BlockL2-b41 #b420 #b4201 "Decreased blood pressure" "Functions related to a fall in systolic or diastolic blood pressure below normal for the age."
* #BlockL1-b11 #BlockL2-b41 #b420 #b4202 "Maintenance of blood pressure" "Functions related to maintaining an appropriate blood pressure in response to changes in the body."
* #BlockL1-b11 #BlockL2-b41 #b430 "Haematological system functions" "Functions of blood production, oxygen and metabolite carriage, and clotting."
* #BlockL1-b11 #BlockL2-b41 #b430 #b4300 "Production of blood" "Functions related to the production of blood and all its constituents."
* #BlockL1-b11 #BlockL2-b41 #b430 #b4301 "Oxygen-carrying functions of the blood" "Functions related to the blood's capacity to carry oxygen throughout the body."
* #BlockL1-b11 #BlockL2-b41 #b430 #b4302 "Metabolite-carrying functions of the blood" "Functions related to the blood's capacity to carry metabolites throughout the body."
* #BlockL1-b11 #BlockL2-b41 #b430 #b4303 "Clotting functions" "Functions related to the coagulation of blood, such as at a site of injury."
* #BlockL1-b11 #BlockL2-b41 #b435 "Immunological system functions" "Functions of the body related to protection against foreign substances, including infections, by specific and non-specific immune responses."
* #BlockL1-b11 #BlockL2-b41 #b435 #b4350 "Immune response" "Functions of the body's response of sensitization to foreign substances, including infections."
* #BlockL1-b11 #BlockL2-b41 #b435 #b4350 #b43500 "Specific immune response" "Functions of the body's response of sensitization to a specific foreign substance."
* #BlockL1-b11 #BlockL2-b41 #b435 #b4350 #b43501 "Non-specific immune response" "Functions of the body's general response of sensitization to foreign substances, including infections."
* #BlockL1-b11 #BlockL2-b41 #b435 #b4351 "Hypersensitivity reactions" "Functions of the body's response of increased sensitization to foreign substances, such as in sensitivities to different antigens."
* #BlockL1-b11 #BlockL2-b41 #b435 #b4352 "Functions of lymphatic vessels" "Functions related to vascular channels that transport lymph."
* #BlockL1-b11 #BlockL2-b41 #b435 #b4353 "Functions of lymph nodes" "Functions related to glands along the course of lymphatic vessels."
* #BlockL1-b11 #BlockL2-b41 #b440 "Respiration functions" "Functions of inhaling air into the lungs, the exchange of gases between air and blood, and exhaling air."
* #BlockL1-b11 #BlockL2-b41 #b440 #b4400 "Respiration rate" "Functions related to the number of breaths taken per minute."
* #BlockL1-b11 #BlockL2-b41 #b440 #b4401 "Respiratory rhythm" "Functions related to the periodicity and regularity of breathing."
* #BlockL1-b11 #BlockL2-b41 #b440 #b4402 "Depth of respiration" "Functions related to the volume of expansion of the lungs during breathing."
* #BlockL1-b11 #BlockL2-b41 #b445 "Respiratory muscle functions" "Functions of the muscles involved in breathing."
* #BlockL1-b11 #BlockL2-b41 #b445 #b4450 "Functions of the thoracic respiratory muscles" "Functions of the thoracic muscles involved in breathing."
* #BlockL1-b11 #BlockL2-b41 #b445 #b4451 "Functions of the diaphragm" "Functions of the diaphragm as involved in breathing."
* #BlockL1-b11 #BlockL2-b41 #b445 #b4452 "Functions of accessory respiratory muscles" "Functions of the additional muscles involved in breathing."
* #BlockL1-b11 #BlockL2-b41 #b450 "Additional functions of the respiratory system" "Additional functions related to breathing, such as producing and transporting secretion, coughing, sneezing and yawning."
* #BlockL1-b11 #BlockL2-b41 #b450 #b4500 "Functions of breathing through the mouth" ""
* #BlockL1-b11 #BlockL2-b41 #b450 #b4501 "Functions of coughing" ""
* #BlockL1-b11 #BlockL2-b41 #b450 #b4502 "Functions of sneezing" ""
* #BlockL1-b11 #BlockL2-b41 #b450 #b4503 "Functions of yawning" ""
* #BlockL1-b11 #BlockL2-b41 #b450 #b4504 "Functions related to mucus" ""
* #BlockL1-b11 #BlockL2-b41 #b450 #b4504 #b45040 "Production of mucus" "Functions of producing mucus of upper and lower airways."
* #BlockL1-b11 #BlockL2-b41 #b450 #b4504 #b45041 "Transportation of mucus" "Functions of transportation of mucus of upper and lower airways."
* #BlockL1-b11 #BlockL2-b41 #b455 "Exercise tolerance functions" "Functions related to respiratory and cardiovascular capacity as required for enduring physical exertion."
* #BlockL1-b11 #BlockL2-b41 #b455 #b4550 "General physical endurance" "Functions related to the general level of tolerance of physical exercise or stamina."
* #BlockL1-b11 #BlockL2-b41 #b455 #b4551 "Aerobic capacity" "Functions related to the extent to which a person can exercise without getting out of breath."
* #BlockL1-b11 #BlockL2-b41 #b455 #b4552 "Fatiguability" "Functions related to susceptibility to fatigue, at any level of exertion."
* #BlockL1-b11 #BlockL2-b41 #b460 "Sensations associated with cardiovascular and respiratory functions" "Sensations such as missing a heart beat, palpitation and shortness of breath."
* #BlockL1-b11 #BlockL2-b51 "Functions of the digestive, metabolic and endocrine systems" "This chapter is about the functions of ingestion, digestion and elimination, as well as functions involved in metabolism and the endocrine glands."
* #BlockL1-b11 #BlockL2-b51 #b510 "Ingestion functions" "Functions related to taking in and manipulating solids or liquids through the mouth into the body."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5100 "Sucking" "Functions of drawing food or liquids into the mouth by a suction force produced by movements of the cheeks, lips and tongue."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5101 "Biting" "Functions of cutting into, piercing or tearing off food with the front teeth."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5102 "Chewing" "Functions of crushing, grinding and masticating food with the back teeth (e.g. molars)."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5103 "Manipulation of food in the mouth" "Functions of moving food around the mouth with the teeth and tongue."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5104 "Salivation" "Function of the production of saliva within the mouth."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5105 "Swallowing" "Functions of clearing substances, such as food, drink and saliva through the oral cavity, pharynx and oesophagus into the stomach at an appropriate rate and speed."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5105 #b51050 "Oral swallowing" "Function of clearing substances through the oral cavity at an appropriate rate and speed."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5105 #b51051 "Pharyngeal swallowing" "Function of clearing substances through the pharynx at an appropriate rate and speed."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5105 #b51052 "Oesophageal swallowing" "Function of clearing substances through the oesophagus at an appropriate rate and speed."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5106 "Functions of expelling the contents of the stomach, oesophagus or pharynx" "Functions of moving substances such as food, liquid, medications, objects intentionally or unintentionally swallowed in the reverse direction to ingestion, such as in regurgitation and vomiting."
* #BlockL1-b11 #BlockL2-b51 #b510 #b5106 #b51060 "Vomiting" ""
* #BlockL1-b11 #BlockL2-b51 #b510 #b5106 #b51061 "Regurgitating" ""
* #BlockL1-b11 #BlockL2-b51 #b515 "Digestive functions" "Functions of transporting food through the gastrointestinal tract, breakdown of food and absorption of nutrients."
* #BlockL1-b11 #BlockL2-b51 #b515 #b5150 "Transport of food through stomach and intestines" "Peristalsis and related functions that mechanically move food through stomach and intestines."
* #BlockL1-b11 #BlockL2-b51 #b515 #b5151 "Breakdown of food" "Functions of mechanically reducing food to smaller particles in the gastrointestinal tract."
* #BlockL1-b11 #BlockL2-b51 #b515 #b5152 "Absorption of nutrients" "Functions of passing food and drink nutrients into the blood stream from along the intestines."
* #BlockL1-b11 #BlockL2-b51 #b515 #b5153 "Tolerance to food" "Functions of accepting suitable food and drink for digestion and rejecting what is unsuitable."
* #BlockL1-b11 #BlockL2-b51 #b520 "Assimilation functions" "Functions by which nutrients are converted into components of the living body."
* #BlockL1-b11 #BlockL2-b51 #b525 "Defecation functions" "Functions of elimination of wastes and undigested food as faeces and related functions."
* #BlockL1-b11 #BlockL2-b51 #b525 #b5250 "Elimination of faeces" "Functions of the elimination of waste from the rectum, including the functions of contraction of the abdominal muscles in doing so."
* #BlockL1-b11 #BlockL2-b51 #b525 #b5251 "Faecal consistency" "Consistency of faeces such as hard, firm, soft or watery."
* #BlockL1-b11 #BlockL2-b51 #b525 #b5252 "Frequency of defecation" "Functions involved in the frequency of defecation."
* #BlockL1-b11 #BlockL2-b51 #b525 #b5253 "Faecal continence" "Functions involved in voluntary control over the elimination function."
* #BlockL1-b11 #BlockL2-b51 #b525 #b5254 "Flatulence" "Functions involved in the expulsion of excessive amounts of air or gases from the intestines."
* #BlockL1-b11 #BlockL2-b51 #b530 "Weight maintenance functions" "Functions of maintaining appropriate body weight, including weight gain during the developmental period."
* #BlockL1-b11 #BlockL2-b51 #b535 "Sensations associated with the digestive system" "Sensations arising from eating, drinking and related digestive functions."
* #BlockL1-b11 #BlockL2-b51 #b535 #b5350 "Sensation of nausea" "Sensation of needing to vomit."
* #BlockL1-b11 #BlockL2-b51 #b535 #b5351 "Feeling bloated" "Sensation of distension of the stomach or abdomen."
* #BlockL1-b11 #BlockL2-b51 #b535 #b5352 "Sensation of abdominal cramp" "Sensation of spasmodic or painful muscular contractions of the smooth muscles of the gastrointestinal tract."
* #BlockL1-b11 #BlockL2-b51 #b540 "General metabolic functions" "Functions of regulation of essential components of the body such as carbohydrates, proteins and fats, the conversion of one to another, and their breakdown into energy."
* #BlockL1-b11 #BlockL2-b51 #b540 #b5400 "Basal metabolic rate" "Functions involved in oxygen consumption of the body at specified conditions of rest and temperature."
* #BlockL1-b11 #BlockL2-b51 #b540 #b5401 "Carbohydrate metabolism" "Functions involved in the process by which carbohydrates in the diet are stored and broken down into glucose and subsequently into carbon dioxide and water."
* #BlockL1-b11 #BlockL2-b51 #b540 #b5402 "Protein metabolism" "Functions involved in the process by which proteins in the diet are converted to amino acids and broken down further in the body."
* #BlockL1-b11 #BlockL2-b51 #b540 #b5403 "Fat metabolism" "Functions involved in the process by which fat in the diet is stored and broken down in the body."
* #BlockL1-b11 #BlockL2-b51 #b545 "Water, mineral and electrolyte balance functions" "Functions of the regulation of water, minerals and electrolytes in the body."
* #BlockL1-b11 #BlockL2-b51 #b545 #b5450 "Water balance" "Functions involved in maintaining the level or amount of water in the body."
* #BlockL1-b11 #BlockL2-b51 #b545 #b5450 #b54500 "Water retention" "Functions involved in keeping water in the body."
* #BlockL1-b11 #BlockL2-b51 #b545 #b5450 #b54501 "Maintenance of water balance" "Functions involved in maintaining the optimal amount of water in the body."
* #BlockL1-b11 #BlockL2-b51 #b545 #b5451 "Mineral balance" "Functions involved in maintaining an equilibrium between intake, storage, utilization and excretion of minerals in the body."
* #BlockL1-b11 #BlockL2-b51 #b545 #b5452 "Electrolyte balance" "Functions involved in maintaining an equilibrium between intake, storage, utilization and excretion of electrolytes in the body."
* #BlockL1-b11 #BlockL2-b51 #b550 "Thermoregulatory functions" "Functions of the regulation of body temperature."
* #BlockL1-b11 #BlockL2-b51 #b550 #b5500 "Body temperature" "Functions involved in regulating the core temperature of the body."
* #BlockL1-b11 #BlockL2-b51 #b550 #b5501 "Maintenance of body temperature" "Functions involved in maintaining optimal body temperature as environmental temperature changes."
* #BlockL1-b11 #BlockL2-b51 #b555 "Endocrine gland functions" "Functions of production and regulation of hormonal levels in the body, including cyclical changes."
* #BlockL1-b11 #BlockL2-b51 #b555 #b5550 "Pubertal functions" "Functions associated with the onset of puberty and manifestations of primary and secondary sexual characteristics."
* #BlockL1-b11 #BlockL2-b51 #b555 #b5550 #b55500 "Body and pubic hair development" "Functions associated with development body and pubic hair."
* #BlockL1-b11 #BlockL2-b51 #b555 #b5550 #b55501 "Breast and nipple development" "Functions associated with breast and nipple development."
* #BlockL1-b11 #BlockL2-b51 #b555 #b5550 #b55502 "Penis, testes and scrotum development" "Functions associated with development of penis, testes and scrotum."
* #BlockL1-b11 #BlockL2-b61 "Genitourinary and reproductive functions" "This chapter is about the functions of urination and the reproductive functions, including sexual and procreative functions."
* #BlockL1-b11 #BlockL2-b61 #b610 "Urinary excretory functions" "Functions of filtration and collection of the urine."
* #BlockL1-b11 #BlockL2-b61 #b610 #b6100 "Filtration of urine" "Functions of filtration of urine by the kidneys."
* #BlockL1-b11 #BlockL2-b61 #b610 #b6101 "Collection of urine" "Functions of collection and storage of urine by the ureters and bladder."
* #BlockL1-b11 #BlockL2-b61 #b620 "Urination functions" "Functions of discharge of urine from the urinary bladder."
* #BlockL1-b11 #BlockL2-b61 #b620 #b6200 "Urination" "Functions of voiding the urinary bladder."
* #BlockL1-b11 #BlockL2-b61 #b620 #b6201 "Frequency of urination" "Functions involved in the number of times urination occurs."
* #BlockL1-b11 #BlockL2-b61 #b620 #b6202 "Urinary continence" "Functions of control over urination."
* #BlockL1-b11 #BlockL2-b61 #b630 "Sensations associated with urinary functions" "Sensations arising from voiding and related urinary functions."
* #BlockL1-b11 #BlockL2-b61 #b640 "Sexual functions" "Mental and physical functions related to the sexual act, including the arousal, preparatory, orgasmic and resolution stages."
* #BlockL1-b11 #BlockL2-b61 #b640 #b6400 "Functions of sexual arousal phase" "Functions of sexual interest and excitement."
* #BlockL1-b11 #BlockL2-b61 #b640 #b6401 "Functions of sexual preparatory phase" "Functions of engaging in sexual intercourse."
* #BlockL1-b11 #BlockL2-b61 #b640 #b6402 "Functions of orgasmic phase" "Functions of reaching orgasm."
* #BlockL1-b11 #BlockL2-b61 #b640 #b6403 "Functions of sexual resolution phase" "Functions of satisfaction after orgasm and accompanying relaxation."
* #BlockL1-b11 #BlockL2-b61 #b650 "Menstruation functions" "Functions associated with the menstrual cycle, including regularity of menstruation and discharge of menstrual fluids."
* #BlockL1-b11 #BlockL2-b61 #b650 #b6500 "Regularity of menstrual cycle" "Functions involved in the regularity of the menstrual cycle."
* #BlockL1-b11 #BlockL2-b61 #b650 #b6501 "Interval between menstruation" "Functions relating to the length of time between two menstrual cycles."
* #BlockL1-b11 #BlockL2-b61 #b650 #b6502 "Extent of menstrual bleeding" "Functions involved in the quantity of menstrual flow."
* #BlockL1-b11 #BlockL2-b61 #b650 #b6503 "Onset of menstruation" "Functions related to the onset of the first menstruation (menarche)."
* #BlockL1-b11 #BlockL2-b61 #b650 #b6504 "Cessation of menstruation" "Functions related to the temporary or permanent cessation of the menstruation."
* #BlockL1-b11 #BlockL2-b61 #b660 "Procreation functions" "Functions associated with fertility, pregnancy, childbirth and lactation."
* #BlockL1-b11 #BlockL2-b61 #b660 #b6600 "Functions related to fertility" "Functions related to the ability to produce gametes for procreation."
* #BlockL1-b11 #BlockL2-b61 #b660 #b6601 "Functions related to pregnancy" "Functions involved in becoming pregnant and being pregnant."
* #BlockL1-b11 #BlockL2-b61 #b660 #b6602 "Functions related to childbirth" "Functions involved during childbirth."
* #BlockL1-b11 #BlockL2-b61 #b660 #b6603 "Lactation" "Functions involved in the production of milk and making it available to the child."
* #BlockL1-b11 #BlockL2-b61 #b670 "Sensations associated with genital and reproductive functions" "Sensations associated with sexual intercourse, menstruation, and related genital or reproductive functions."
* #BlockL1-b11 #BlockL2-b61 #b670 #b6700 "Sensations associated with sexual intercourse" "Sensations associated with sexual arousal, preparation, intercourse, orgasm and resolution."
* #BlockL1-b11 #BlockL2-b61 #b670 #b6701 "Sensations associated with the menstrual cycle" "Sensations involved with menstruation, including pre- and post-menstrual phases."
* #BlockL1-b11 #BlockL2-b61 #b670 #b6702 "Sensations associated with menopause" "Sensations associated with the cessation of menstrual cycle."
* #BlockL1-b11 #BlockL2-b61 #b670 #b6703 "Sensations associated with genital functions" "Functions associated with arousal of the genitals."
* #BlockL1-b11 #BlockL2-b71 "Neuromusculoskeletal and movement-related functions" "This chapter is about the functions of movement and mobility, including functions of joints, bones, reflexes and muscles."
* #BlockL1-b11 #BlockL2-b71 #b710 "Mobility of joint functions" "Functions of the range and ease of movement of a joint."
* #BlockL1-b11 #BlockL2-b71 #b710 #b7100 "Mobility of a single joint" "Functions of the range and ease of movement of one joint."
* #BlockL1-b11 #BlockL2-b71 #b710 #b7101 "Mobility of several joints" "Functions of the range and ease of movement of more than one joint."
* #BlockL1-b11 #BlockL2-b71 #b710 #b7102 "Mobility of joints generalized" "Functions of the range and ease of movement of joints throughout the body."
* #BlockL1-b11 #BlockL2-b71 #b715 "Stability of joint functions" "Functions of the maintenance of structural integrity of the joints."
* #BlockL1-b11 #BlockL2-b71 #b715 #b7150 "Stability of a single joint" "Functions of the maintenance of structural integrity of one joint."
* #BlockL1-b11 #BlockL2-b71 #b715 #b7151 "Stability of several joints" "Functions of the maintenance of structural integrity of more than one joint."
* #BlockL1-b11 #BlockL2-b71 #b715 #b7152 "Stability of joints generalized" "Functions of the maintenance of structural integrity of joints throughout the body."
* #BlockL1-b11 #BlockL2-b71 #b720 "Mobility of bone functions" "Functions of the range and ease of movement of the scapula, pelvis, carpal and tarsal bones."
* #BlockL1-b11 #BlockL2-b71 #b720 #b7200 "Mobility of scapula" "Functions of the range and ease of movement of the scapula."
* #BlockL1-b11 #BlockL2-b71 #b720 #b7201 "Mobility of pelvis" "Functions of the range and ease of movement of the pelvis."
* #BlockL1-b11 #BlockL2-b71 #b720 #b7202 "Mobility of carpal bones" "Functions of the range and ease of movement of the carpal bones."
* #BlockL1-b11 #BlockL2-b71 #b720 #b7203 "Mobility of tarsal bones" "Functions of the range and ease of movement of the tarsal bones."
* #BlockL1-b11 #BlockL2-b71 #b730 "Muscle power functions" "Functions related to the force generated by the contraction of a muscle or muscle groups."
* #BlockL1-b11 #BlockL2-b71 #b730 #b7300 "Power of isolated muscles and muscle groups" "Functions related to the force generated by the contraction of specific and isolated muscles and muscle groups."
* #BlockL1-b11 #BlockL2-b71 #b730 #b7301 "Power of muscles of one limb" "Functions related to the force generated by the contraction of the muscles and muscle groups of one arm or leg."
* #BlockL1-b11 #BlockL2-b71 #b730 #b7302 "Power of muscles of one side of the body" "Functions related to the force generated by the contraction of the muscles and muscle groups found on the left or right side of the body."
* #BlockL1-b11 #BlockL2-b71 #b730 #b7303 "Power of muscles in lower half of the body" "Functions related to the force generated by the contraction of the muscles and muscle groups found in the lower half of the body."
* #BlockL1-b11 #BlockL2-b71 #b730 #b7304 "Power of muscles of all limbs" "Functions related to the force generated by the contraction of muscles and muscle groups of all four limbs."
* #BlockL1-b11 #BlockL2-b71 #b730 #b7305 "Power of muscles of the trunk" "Functions related to the force generated by the contraction of muscles and muscle groups in the trunk."
* #BlockL1-b11 #BlockL2-b71 #b730 #b7306 "Power of all muscles of the body" "Functions related to the force generated by the contraction of all muscles and muscle groups of the body."
* #BlockL1-b11 #BlockL2-b71 #b735 "Muscle tone functions" "Functions related to the tension present in the resting muscles and the resistance offered when trying to move the muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b735 #b7350 "Tone of isolated muscles and muscle groups" "Functions related to the tension present in the resting isolated muscles and muscle groups and the resistance offered when trying to move those muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b735 #b7351 "Tone of muscles of one limb" "Functions related to the tension present in the resting muscles and muscle groups in one arm or leg and the resistance offered when trying to move those muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b735 #b7352 "Tone of muscles of one side of body" "Functions related to the tension present in the resting muscles and muscle groups of the right or left side of the body and the resistance offered when trying to move those muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b735 #b7353 "Tone of muscles of lower half of body" "Functions related to the tension present in the resting muscles and muscle groups in the lower half of the body and the resistance offered when trying to move those muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b735 #b7354 "Tone of muscles of all limbs" "Functions related to the tension present in the resting muscles and muscle groups in all four limbs and the resistance offered when trying to move those muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b735 #b7355 "Tone of muscles of trunk" "Functions related to the tension present in the resting muscles and muscle groups of the trunk and the resistance offered when trying to move those muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b735 #b7356 "Tone of all muscles of the body" "Functions related to the tension present in the resting muscles and muscle groups of the whole body and the resistance offered when trying to move those muscles passively."
* #BlockL1-b11 #BlockL2-b71 #b740 "Muscle endurance functions" "Functions related to sustaining muscle contraction for the required period of time."
* #BlockL1-b11 #BlockL2-b71 #b740 #b7400 "Endurance of isolated muscles" "Functions related to sustaining muscle contraction of isolated muscles for the required period of time."
* #BlockL1-b11 #BlockL2-b71 #b740 #b7401 "Endurance of muscle groups" "Functions related to sustaining muscle contraction of isolated muscle groups for the required period of time."
* #BlockL1-b11 #BlockL2-b71 #b740 #b7402 "Endurance of all muscles of the body" "Functions related to sustaining muscle contraction of all muscles of the body for the required period of time."
* #BlockL1-b11 #BlockL2-b71 #b750 "Motor reflex functions" "Functions of involuntary contraction of muscles automatically induced by specific stimuli."
* #BlockL1-b11 #BlockL2-b71 #b750 #b7500 "Stretch motor reflex" "Functions of involuntary contractions of muscles automatically induced by stretching."
* #BlockL1-b11 #BlockL2-b71 #b750 #b7501 "Reflexes generated by noxious stimuli" "Functions of involuntary contractions of muscles automatically induced by painful or other noxious stimuli."
* #BlockL1-b11 #BlockL2-b71 #b750 #b7502 "Reflexes generated by other exteroceptive stimuli" "Functions of involuntary contractions of muscles automatically induced by external stimuli other than noxious stimuli."
* #BlockL1-b11 #BlockL2-b71 #b755 "Involuntary movement reaction functions" "Functions of involuntary contractions of large muscles or the whole body induced by body position, balance and threatening stimuli."
* #BlockL1-b11 #BlockL2-b71 #b760 "Control of voluntary movement functions" "Functions associated with control over and coordination of voluntary movements."
* #BlockL1-b11 #BlockL2-b71 #b760 #b7600 "Control of simple voluntary movements" "Functions associated with control over and coordination of simple or isolated voluntary movements."
* #BlockL1-b11 #BlockL2-b71 #b760 #b7601 "Control of complex voluntary movements" "Functions associated with control over and coordination of complex voluntary movements."
* #BlockL1-b11 #BlockL2-b71 #b760 #b7602 "Coordination of voluntary movements" "Functions associated with coordination of simple and complex voluntary movements, performing movements in an orderly combination."
* #BlockL1-b11 #BlockL2-b71 #b760 #b7603 "Supportive functions of arm or leg" "Functions associated with control over and coordination of voluntary movements by placing weight either on the arms (elbows or hands) or on the legs (knees or feet)."
* #BlockL1-b11 #BlockL2-b71 #b761 "Spontaneous movements" "Functions associated with frequency, fluency and complexity of total and individual body-part movements such as infant spontaneous movements and patterns of movement."
* #BlockL1-b11 #BlockL2-b71 #b761 #b7610 "General movements" "Repertoire and quality of age-specific general spontaneous movements such as \"writhing\" movements and \"fidgety\" movements in early life."
* #BlockL1-b11 #BlockL2-b71 #b761 #b7611 "Specific spontaneous movements" "Repertoire and quality of other spontaneous movements normally present in the first postnatal months, such as arm and leg movements toward midline, finger movements and kicking."
* #BlockL1-b11 #BlockL2-b71 #b765 "Involuntary movement functions" "Functions of unintentional, non- or semi-purposive involuntary contractions of a muscle or group of muscles."
* #BlockL1-b11 #BlockL2-b71 #b765 #b7650 "Involuntary contractions of muscles" "Functions of unintentional, non- or semi-purposive involuntary contractions of a muscle or group of muscles, such as those involved in part of a psychological dysfunction."
* #BlockL1-b11 #BlockL2-b71 #b765 #b7651 "Tremor" "Functions of alternating contraction and relaxation of a group of muscles around a joint, resulting in shakiness."
* #BlockL1-b11 #BlockL2-b71 #b765 #b7652 "Tics and mannerisms" "Functions of repetitive, quasi-purposive, involuntary contractions of a group of muscles."
* #BlockL1-b11 #BlockL2-b71 #b765 #b7653 "Stereotypies and motor perseveration" "Functions of spontaneous, non-purposive movements such as repetively rocking to and fro and nodding the head or wiggling."
* #BlockL1-b11 #BlockL2-b71 #b770 "Gait pattern functions" "Functions of movement patterns associated with walking, running or other whole body movements."
* #BlockL1-b11 #BlockL2-b71 #b780 "Sensations related to muscles and movement functions" "Sensations associated with the muscles or muscle groups of the body and their movement."
* #BlockL1-b11 #BlockL2-b71 #b780 #b7800 "Sensation of muscle stiffness" "Sensation of tightness or stiffness of muscles."
* #BlockL1-b11 #BlockL2-b71 #b780 #b7801 "Sensation of muscle spasm" "Sensation of involuntary contraction of a muscle or a group of muscles."
* #BlockL1-b11 #BlockL2-b81 "Functions of the skin and related structures" "This chapter is about the functions of skin, nails and hair."
* #BlockL1-b11 #BlockL2-b81 #b810 "Protective functions of the skin" "Functions of the skin for protecting the body from physical, chemical and biological threats."
* #BlockL1-b11 #BlockL2-b81 #b820 "Repair functions of the skin" "Functions of the skin for repairing breaks and other damage to the skin."
* #BlockL1-b11 #BlockL2-b81 #b830 "Other functions of the skin" "Functions of the skin other than protection and repair, such as cooling and sweat secretion."
* #BlockL1-b11 #BlockL2-b81 #b840 "Sensation related to the skin" "Sensations related to the skin such as itching, burning sensation and tingling."
* #BlockL1-b11 #BlockL2-b81 #b850 "Functions of hair" "Functions of the hair, such as protection, coloration and appearance."
* #BlockL1-b11 #BlockL2-b81 #b860 "Functions of nails" "Functions of the nails, such as protection, scratching and appearance."
* #BlockL1-d11 "Activities and participation" "Activity is the execution of a task or action by an individual. Participation is involvement in a life situation. Activity limitations are difficulties an individual may have in executing activities. Participation restrictions are problems an individual may experience in involvement in life situations. The domains for the Activities and Participation component are given in a single list that covers the full range of life areas (from basic learning and watching to composite areas such as social tasks). This component can be used to dedefinition activities (a) or participation (p) or both. The two qualifiers for the Activities and Participation component are the performance qualifier and the capacity qualifier. The performance qualifier describes what an individual does in his or her current environment. Because the current environment brings in a societal context, performance as recorded by this qualifier can also be understood as \"involvement in a life situation\" or \"the lived experience\" of people in the actual context in which they live. This context includes the environmental factors - all aspects of the physical, social and attitudinal world, which can be coded using the Environmental Factors component. The capacity qualifier describes an individual's ability to execute a task or an action. This qualifier identifies the highest probable level of functioning that a person may reach in a given domain at a given moment. Capacity is measured in a uniform or standard environment, and thus reflects the environmentally adjusted ability of the individual. The Environmental Factors component can be used to describe the features of this uniform or standard environment. Both capacity and performance qualifiers can be used with and without assistive devices or personal assistance, and in accordance with the following scale:"
* #BlockL1-d11 #BlockL2-d11 "Learning and applying knowledge" "This chapter is about learning, applying the knowledge that is learned, thinking, solving problems, and making decisions."
* #BlockL1-d11 #BlockL2-d11 #d110 "Watching" "Using the sense of seeing intentionally to experience visual stimuli, such as visually tracking an object, watching a sporting event, people, or children playing."
* #BlockL1-d11 #BlockL2-d11 #d115 "Listening" "Using the sense of hearing intentionally to experience auditory stimuli, such as listening to a radio, to the human voice, to music, to a lecture, or to a story told."
* #BlockL1-d11 #BlockL2-d11 #d120 "Other purposeful sensing" "Using the body's other basic senses intentionally to experience stimuli, such as touching and feeling textures, tasting sweets or smelling flowers."
* #BlockL1-d11 #BlockL2-d11 #d120 #d1200 "Mouthing" "Exploring objects using mouth or lips."
* #BlockL1-d11 #BlockL2-d11 #d120 #d1201 "Touching" "Exploring objects using hands, fingers or other limbs or body parts"
* #BlockL1-d11 #BlockL2-d11 #d120 #d1202 "Smelling" "Exploring objects by bringing them to the nose or the nose to objects."
* #BlockL1-d11 #BlockL2-d11 #d120 #d1203 "Tasting" "Exploring the taste of food or liquid by biting, chewing, sucking."
* #BlockL1-d11 #BlockL2-d11 #d130 "Copying" "Imitating or mimicking as a basic component of learning, such as copying a facial expression, a gesture, a sound or the letters of an alphabet."
* #BlockL1-d11 #BlockL2-d11 #d131 "Learning through actions with objects" "Learning through simple actions on a single object, two or more objects, symbolic and pretend play, such as in hitting an object, banging blocks and playing with dolls or cars."
* #BlockL1-d11 #BlockL2-d11 #d131 #d1310 "Learning through simple actions with a single object" "Simple actions with a single object or toy by manipulating, banging, moving, dropping, etc."
* #BlockL1-d11 #BlockL2-d11 #d131 #d1311 "Learning through actions by relating objects" "Simple actions relating two or more objects, toys or other materials without regard for the specific features of the objects, toys or materials."
* #BlockL1-d11 #BlockL2-d11 #d131 #d1312 "Learning through actions by relating object with regard to specific features" "Actions relating two or more objects, toys or materials with regard to specific features, e.g., lid on box, cup on saucer."
* #BlockL1-d11 #BlockL2-d11 #d131 #d1313 "Learning by relating symbolically to objects" "Relating to objects, toys or materials symbolically, such as feeding or dressing a doll or using a simulated environment."
* #BlockL1-d11 #BlockL2-d11 #d132 "Acquiring language" "Developing the competence to represent persons, objects, events, feelings through words, symbols, phrases and sentences."
* #BlockL1-d11 #BlockL2-d11 #d132 #d1320 "Acquiring single words or meaningful symbols" "Learning words or meaningful symbols such as graphic or manual signs or symbols."
* #BlockL1-d11 #BlockL2-d11 #d132 #d1321 "Combining words into phrases" "Learning to combine words into phrases."
* #BlockL1-d11 #BlockL2-d11 #d132 #d1322 "Acquiring syntax" "Learning to produce appropriately constructed sentences or set of sentences."
* #BlockL1-d11 #BlockL2-d11 #d133 "Acquiring additional language" "Developing the competence to represent persons, objects, events, feelings through words, symbols, phrases and sentences, such as in an additional language or signing."
* #BlockL1-d11 #BlockL2-d11 #d135 "Rehearsing" "Repeating a sequence of events or symbols as a basic component of learning, such as counting by tens or practising the recitation of a rhyme with gestures or cords on a musical instrument."
* #BlockL1-d11 #BlockL2-d11 #d137 "Acquiring concepts" "Developing competence to understand and use basic and complex concepts related to characteristics, properties and features defining things, persons or events."
* #BlockL1-d11 #BlockL2-d11 #d137 #d1370 "Acquiring basic concepts" "Learning to use such concepts as size, form, quantity, length, same, opposite."
* #BlockL1-d11 #BlockL2-d11 #d137 #d1371 "Acquiring complex concepts" "Learning to use such concepts as classification, grouping, reversibility, seriation."
* #BlockL1-d11 #BlockL2-d11 #d138 "Acquiring information" "Obtaining facts about persons, things and events, such as asking why, what, where and how, asking for names."
* #BlockL1-d11 #BlockL2-d11 #d140 "Learning to read" "Developing the competence to read written material (including Braille and other symbols) with fluency and accuracy, such as recognizing characters and alphabet letters, sounding out written words with correct pronunciation, and understanding written words and phrases."
* #BlockL1-d11 #BlockL2-d11 #d140 #d1400 "Acquiring skills to recognize symbols" "Learning basic actions of deciphering symbols such as figures and icons, characters, alphabet letters and words."
* #BlockL1-d11 #BlockL2-d11 #d140 #d1401 "Acquiring skills to sound out written words" "Learning basic actions of sounding out characters, alfphabet letters symbols and words with correct pronunciation."
* #BlockL1-d11 #BlockL2-d11 #d140 #d1402 "Acquiring skills to understanding written words and phrases" "Learning basic actions to grasp the meaning of written words and texts."
* #BlockL1-d11 #BlockL2-d11 #d145 "Learning to write" "Developing the competence to produce symbols that represent sounds, words or phrases in order to convey meaning (including Braille writing, and other symbols), such as spelling and effectively using correct grammar."
* #BlockL1-d11 #BlockL2-d11 #d145 #d1450 "Acquiring skills to use writing implements" "Learning basic actions of writing down symbols or alphabet letters, such as holding a pencil, chalk or brush, writing a character or a symbol on a of piece paper, using a brailler, keyboard or peripheral device( mouse)."
* #BlockL1-d11 #BlockL2-d11 #d145 #d1451 "Acquiring skills to write symbols, characters and alphabet letters" "Learning basic actions to transpose a sound (morpheme) into a symbol or a character (grapheme)."
* #BlockL1-d11 #BlockL2-d11 #d145 #d1452 "Acquiring skills to write words and phrases" "Learning basic actions to transpose spoken words or ideas into written words or phrases."
* #BlockL1-d11 #BlockL2-d11 #d150 "Learning to calculate" "Developing the competence to manipulate numbers and perform simple and complex mathematical operations, such as using mathematical signs for addition and subtraction and applying the correct mathematical operation to a problem."
* #BlockL1-d11 #BlockL2-d11 #d150 #d1500 "Acquiring skills of numeracy" "Learning elementary skills of numeracy such as counting, ordering and grouping."
* #BlockL1-d11 #BlockL2-d11 #d150 #d1501 "Acquiring skills to recognize numerals, arithmetic signs and symbols" "Learning to recognize and use numbers."
* #BlockL1-d11 #BlockL2-d11 #d150 #d1502 "Acquiring skills in using basic operations" "Learning to recognize symbols related to and use operations of addition, subtraction, multiplication and division."
* #BlockL1-d11 #BlockL2-d11 #d155 "Acquiring skills" "Developing basic and complex competencies in integrated sets of actions or tasks so as to initiate and follow through with the acquisition of a skill, such as manipulating tools or toys or playing games."
* #BlockL1-d11 #BlockL2-d11 #d155 #d1550 "Acquiring basic skills" "Learning elementary, purposeful actions, such as learning to use simple tools, such as pencils or eating utensils."
* #BlockL1-d11 #BlockL2-d11 #d155 #d1551 "Acquiring complex skills" "Learning integrated sets of actions so as to follow rules, and to sequence and coordinate one's movements, such as learning to play games (e.g. football or chess) and to use a building tool."
* #BlockL1-d11 #BlockL2-d11 #d160 "Focusing attention" "Intentionally focusing on specific stimuli, such as by filtering out distracting noises."
* #BlockL1-d11 #BlockL2-d11 #d160 #d1600 "Focusing attention on the person" "Intentionally attending to features of other persons such as their face, touch or voice."
* #BlockL1-d11 #BlockL2-d11 #d160 #d1601 "Focusing attention on the environment" "Intentionally attending to some element of the environment such as changes in the quality quantity or intensity of physical or social stimuli."
* #BlockL1-d11 #BlockL2-d11 #d163 "Thinking" "Formulating and manipulating ideas, concepts, and images, whether goal-oriented or not, either alone or with others, such as creating fiction, proving a theorem, playing with ideas, brainstorming, meditating, pondering, speculating, or reflecting."
* #BlockL1-d11 #BlockL2-d11 #d166 "Reading" "Performing activities involved in the comprehension and interpretation of written language (e.g. books, instructions or newspapers in text or Braille), for the purpose of obtaining general knowledge or specific information."
* #BlockL1-d11 #BlockL2-d11 #d170 "Writing" "Using or producing symbols or language to convey information, such as producing a written record of events or ideas or drafting a letter."
* #BlockL1-d11 #BlockL2-d11 #d170 #d1700 "Using general skills and strategies of the writing process" "Applying words which convey appropriate meaning, employing conventional sentence structure."
* #BlockL1-d11 #BlockL2-d11 #d170 #d1701 "Using grammatical and mechanical conventions in written compositions" "Applying standard spelling, punctuation and proper case forms etc."
* #BlockL1-d11 #BlockL2-d11 #d170 #d1702 "Using general skills and strategies to complete compositions" "Applying words and sentences to convey complex meaning and abstract ideas."
* #BlockL1-d11 #BlockL2-d11 #d172 "Calculating" "Performing computations by applying mathematical principles to solve problems that are described in words and producing or displaying the results, such as computing the sum of three numbers or finding the result of dividing one number by another."
* #BlockL1-d11 #BlockL2-d11 #d172 #d1720 "Using skills and strategies to perform simple numeric calculations" "Perform simple numeric operations such as counting, grouping, ordering and arithmetic calculations."
* #BlockL1-d11 #BlockL2-d11 #d172 #d1721 "Using skills and strategies to perform complex numeric operations and calculations" "Applying mathematical procedures and methods such as algebra, calculus and geometry to solve problems."
* #BlockL1-d11 #BlockL2-d11 #d175 "Solving problems" "Finding solutions to questions or situations by identifying and analysing issues, developing options and solutions, evaluating potential effects of solutions, and executing a chosen solution, such as in resolving a dispute between two people."
* #BlockL1-d11 #BlockL2-d11 #d175 #d1750 "Solving simple problems" "Finding solutions to a simple problem involving a single issue or question, by identifying and analysing the issue, developing solutions, evaluating the potential effects of the solutions and executing a chosen solution."
* #BlockL1-d11 #BlockL2-d11 #d175 #d1751 "Solving complex problems" "Finding solutions to a complex problem involving multiple and interrelated issues, or several related problems, by identifying and analysing the issue, developing solutions, evaluating the potential effects of the solutions and executing a chosen solution."
* #BlockL1-d11 #BlockL2-d11 #d177 "Making decisions" "Making a choice among options, implementing the choice, and evaluating the effects of the choice, such as selecting and purchasing a specific item, or deciding to undertake and undertaking one task from among several tasks that need to be done."
* #BlockL1-d11 #BlockL2-d21 "General tasks and demands" "This chapter is about general aspects of carrying out single or multiple tasks, organizing routines and handling stress. These items can be used in conjunction with more specific tasks or actions to identify the underlying features of the execution of tasks under different circumstances."
* #BlockL1-d11 #BlockL2-d21 #d210 "Undertaking a single task" "Carrying out simple or complex and coordinated actions related to the mental and physical components of a single task, such as initiating a task, organizing time, space and materials for a task, pacing task performance, and carrying out, completing, and sustaining a task."
* #BlockL1-d11 #BlockL2-d21 #d210 #d2100 "Undertaking a simple task" "Preparing, initiating and arranging the time and space required for a simple task; executing a simple task with a single major component, such as reading a book, writing a letter, or making one's bed."
* #BlockL1-d11 #BlockL2-d21 #d210 #d2101 "Undertaking a complex task" "Preparing, initiating and arranging the time and space for a single complex task; executing a complex task with more than one component, which may be carried out in sequence or simultaneously, such as arranging the furniture in one's home or completing an assignment for school."
* #BlockL1-d11 #BlockL2-d21 #d210 #d2102 "Undertaking a single task independently" "Preparing, initiating and arranging the time and space for a simple or complex task; managing and executing a task on one's own and without the assistance of others."
* #BlockL1-d11 #BlockL2-d21 #d210 #d2103 "Undertaking a single task in a group" "Preparing, initiating and arranging the time and space for a single task, simple or complex; managing and executing a task with people who are involved in some or all steps of the task."
* #BlockL1-d11 #BlockL2-d21 #d220 "Undertaking multiple tasks" "Carrying out simple or complex and coordinated actions as components of multiple, integrated and complex tasks in sequence or simultaneously."
* #BlockL1-d11 #BlockL2-d21 #d220 #d2200 "Carrying out multiple tasks" "Preparing, initiating and arranging the time and space needed for several tasks, and managing and executing several tasks, together or sequentially."
* #BlockL1-d11 #BlockL2-d21 #d220 #d2201 "Completing multiple tasks" "Completing several tasks, together or sequentially."
* #BlockL1-d11 #BlockL2-d21 #d220 #d2202 "Undertaking multiple tasks independently" "Preparing, initiating and arranging the time and space for multiple tasks, and managing and executing several tasks together or sequentially, on one's own and without the assistance of others."
* #BlockL1-d11 #BlockL2-d21 #d220 #d2203 "Undertaking multiple tasks in a group" "Preparing, initiating and arranging the time and space for multiple tasks, and managing and executing several tasks together or sequentially with others who are involved in some or all steps of the multiple tasks."
* #BlockL1-d11 #BlockL2-d21 #d230 "Carrying out daily routine" "Carrying out simple or complex and coordinated actions in order to plan, manage and complete the requirements of day-to-day procedures or duties, such as budgeting time and making plans for separate activities throughout the day."
* #BlockL1-d11 #BlockL2-d21 #d230 #d2301 "Managing daily routine" "Carrying out simple or complex and coordinated actions in order to plan and manage the requirements of day-to-day procedures or duties."
* #BlockL1-d11 #BlockL2-d21 #d230 #d2302 "Completing the daily routine" "Carrying out simple or complex and coordinated actions in order to complete the requirements of usual day-to-day procedures or duties, such as getting dressed, eating breakfast, leaving for school or work and returning home at the end of the day."
* #BlockL1-d11 #BlockL2-d21 #d230 #d2303 "Managing one's own activity level" "Carrying out actions and behaviours to arrange the requirements in energy and time day-to-day procedures or duties."
* #BlockL1-d11 #BlockL2-d21 #d230 #d2304 "Adapting to changes in daily routine" "Interrupting and shifting tasks and actions in response to new requirements or making a transition from a usual pattern of activities to a new set of activities as a means of fulfilling daily tasks."
* #BlockL1-d11 #BlockL2-d21 #d240 "Handling stress and other psychological demands" "Carrying out simple or complex and coordinated actions to manage and control the psychological demands required to carry out tasks demanding significant responsibilities and involving stress, distraction, or crises, such as driving a vehicle during heavy traffic or taking care of many children."
* #BlockL1-d11 #BlockL2-d21 #d240 #d2400 "Handling responsibilities" "Carrying out simple or complex and coordinated actions to manage the duties of task performance and to assess the requirements of these duties."
* #BlockL1-d11 #BlockL2-d21 #d240 #d2401 "Handling stress" "Carrying out simple or complex and coordinated actions to cope with pressure, emergencies or stress associated with task performance."
* #BlockL1-d11 #BlockL2-d21 #d240 #d2402 "Handling crisis" "Carrying out simple or complex and coordinated actions to cope with decisive turning points in a situation or times of acute danger or difficulty."
* #BlockL1-d11 #BlockL2-d31 "Communication" "This chapter is about general and specific features of communicating by language, signs and symbols, including receiving and producing messages, carrying on conversations, and using communication devices and techniques."
* #BlockL1-d11 #BlockL2-d31 #d310 "Communicating with - receiving - spoken messages" "Comprehending literal and implied meanings of messages in spoken language, such as understanding that a statement asserts a fact or is an idiomatic expression."
* #BlockL1-d11 #BlockL2-d31 #d310 #d3101 "Communicating with - receiving - simple spoken messages" "Comprehending the literal meaning conveyed by simple spoken messages."
* #BlockL1-d11 #BlockL2-d31 #d310 #d3102 "Communicating with - receiving - complex spoken messages" "Comprehending the literal and implied meaning conveyed by complex spoken messages."
* #BlockL1-d11 #BlockL2-d31 #d315 "Communicating with - receiving - nonverbal messages" "Comprehending the literal and implied meanings of messages conveyed by gestures, symbols and drawings, such as realizing that a child is tired when she rubs her eyes or that a warning bell means that there is a fire."
* #BlockL1-d11 #BlockL2-d31 #d315 #d3150 "Communicating with - receiving - body gestures" "Comprehending the meaning conveyed by facial expressions, hand movements or signs, body postures, and other forms of body language."
* #BlockL1-d11 #BlockL2-d31 #d315 #d3151 "Communicating with - receiving - general signs and symbols" "Comprehending the meaning represented by public signs and symbols, such as traffic signs, warning symbols, musical or scientific notations, and icons."
* #BlockL1-d11 #BlockL2-d31 #d315 #d3152 "Communicating with - receiving - drawings and photographs" "Comprehending the meaning represented by drawings (e.g. line drawings, graphic designs, paintings, three-dimensional representations, pictograms), graphs, charts and photographs, such as understanding that an upward line on a height chart indicates that a child is growing."
* #BlockL1-d11 #BlockL2-d31 #d320 "Communicating with - receiving - formal sign language messages" "Receiving and comprehending messages in formal sign language with literal and implied meaning."
* #BlockL1-d11 #BlockL2-d31 #d325 "Communicating with - receiving - written messages" "Comprehending the literal and implied meanings of messages that are conveyed through written language (including Braille), such as following political events in the daily newspaper or understanding the intent of religious scripture."
* #BlockL1-d11 #BlockL2-d31 #d330 "Speaking" "Producing words, phrases and longer passages in spoken messages with literal and implied meaning, such as expressing a fact or telling a story in oral language."
* #BlockL1-d11 #BlockL2-d31 #d331 "Non-speech vocal expression" "Vocalising when aware of another person in the proximal environment, such as making a sound when the mother is close; babbling; babbling in turn-taking activities. Vocalising in response to speech through imitating speech-sounds in a turn taking procedure."
* #BlockL1-d11 #BlockL2-d31 #d332 "Singing" "Producing tones in a sequence resulting in a melody to convey messages."
* #BlockL1-d11 #BlockL2-d31 #d335 "Producing nonverbal messages" "Using gestures, symbols and drawings to convey messages, such as shaking one's head to indicate disagreement or drawing a picture or diagram to convey a fact or complex idea."
* #BlockL1-d11 #BlockL2-d31 #d335 #d3350 "Producing body language" "Conveying messages by intentional movements of the body, such as facial gestures (e.g. smiling, frowning, wincing), by arm and hand movements, and by postures (e.g. embracing to indicate affection or pointing to receive attention or an object)."
* #BlockL1-d11 #BlockL2-d31 #d335 #d3351 "Producing signs and symbols" "Conveying meaning by using signs and symbols (e.g. icons, Bliss board, scientific symbols) and symbolic notation systems, such as using musical notation to convey a melody."
* #BlockL1-d11 #BlockL2-d31 #d335 #d3352 "Producing drawings and photographs" "Conveying meaning by drawing, painting, sketching, and making diagrams, pictures or photographs, such as drawing a map to give someone directions to a location."
* #BlockL1-d11 #BlockL2-d31 #d340 "Producing messages in formal sign language" "Conveying, with formal sign language, literal and implied meaning."
* #BlockL1-d11 #BlockL2-d31 #d345 "Writing messages" "Producing the literal and implied meanings of messages that are conveyed through written language, such as writing a letter to a friend."
* #BlockL1-d11 #BlockL2-d31 #d350 "Conversation" "Starting, sustaining and ending an interchange of thoughts and ideas, carried out by means of spoken, written, signed or other forms of language, with one or more people one knows or who are strangers, in formal or casual settings."
* #BlockL1-d11 #BlockL2-d31 #d350 #d3500 "Starting a conversation" "Beginning an interchange, such as initiating turn-taking activity through eye-contact or other means, that leads to communication or dialogue, such as by introducing oneself, expressing customary greetings, or by introducing a topic or asking questions."
* #BlockL1-d11 #BlockL2-d31 #d350 #d3501 "Sustaining a conversation" "Continuing an interchange by taking turns in vocalising, speaking or signing, by adding ideas, introducing a new topic or retrieving a topic that has been previously mentioned."
* #BlockL1-d11 #BlockL2-d31 #d350 #d3502 "Ending a conversation" "Finishing a dialogue or interchange with customary termination statements or expressions and by bringing closure to the topic under discussion."
* #BlockL1-d11 #BlockL2-d31 #d350 #d3503 "Conversing with one person" "Initiating, maintaining, shaping and terminating a dialogue or interchange with one person, such as in discussing the weather with a friend."
* #BlockL1-d11 #BlockL2-d31 #d350 #d3504 "Conversing with many people" "Initiating, maintaining, shaping and terminating a dialogue or interchange with more than one individual, such as in starting and participating in a group interchange."
* #BlockL1-d11 #BlockL2-d31 #d355 "Discussion" "Starting, sustaining and ending an examination of a matter, with arguments for or against, or debate carried out by means of spoken, written, sign or other forms of language, with one or more people one knows or who are strangers, in formal or casual settings."
* #BlockL1-d11 #BlockL2-d31 #d355 #d3550 "Discussion with one person" "Initiating, maintaining, shaping or terminating an argument or debate with one person."
* #BlockL1-d11 #BlockL2-d31 #d355 #d3551 "Discussion with many people" "Initiating, maintaining, shaping or terminating an argument or debate with more than one individual."
* #BlockL1-d11 #BlockL2-d31 #d360 "Using communication devices and techniques" "Using devices, techniques and other means for the purposes of communicating, such as calling a friend on the telephone."
* #BlockL1-d11 #BlockL2-d31 #d360 #d3600 "Using telecommunication devices" "Using telephones, computers and other electronic devices as a means of telecommunication."
* #BlockL1-d11 #BlockL2-d31 #d360 #d3601 "Using writing machines" "Using machines for writing, such as typewriters, computers and Braille writers, as a means of communication."
* #BlockL1-d11 #BlockL2-d31 #d360 #d3602 "Using communication techniques" "Performing actions and tasks involved in techniques for communicating, such as reading lips."
* #BlockL1-d11 #BlockL2-d41 "Mobility" "This chapter is about moving by changing body position or location or by transferring from one place to another, by carrying, moving or manipulating objects, by walking, running or climbing, and by using various forms of transportation."
* #BlockL1-d11 #BlockL2-d41 #d410 "Changing basic body position" "Getting into and out of a body position and moving from one location to another, such as getting up out of a chair to lie down on a bed, and getting into and out of positions of sitting, standing, kneeling or squatting."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4100 "Lying down" "Getting into and out of a lying down position or changing body position, from horizontal to any other position, such as standing up or sitting down."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4101 "Squatting" "Getting into and out of the seated or crouched posture on one's haunches with knees closely drawn up or sitting on one's heels, such as may be necessary in toilets that are at floor level, or changing body position from squatting to any other position, such as standing up."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4102 "Kneeling" "Getting into and out of a position where the body is supported by the knees with legs bent, such as during prayers, or changing body position from kneeling to any other position, such as standing up."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4103 "Sitting" "Getting into and out of a seated position and changing body position from sitting down to any other position, such as standing up or lying down."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4104 "Standing" "Getting into and out of a standing position or changing body position from standing to any other position, such as lying down or sitting down."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4105 "Bending" "Tilting the back downwards or to the side, at the torso, such as in bowing or reaching down for an object."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4106 "Shifting the body's centre of gravity" "Adjusting or moving the weight of the body from one position to another while sitting, standing or lying, such as moving from one foot to another while standing."
* #BlockL1-d11 #BlockL2-d41 #d410 #d4107 "Rolling over" "Moving the body from one position to another while lying such as turning from side to side or from stomach to back."
* #BlockL1-d11 #BlockL2-d41 #d415 "Maintaining body position" "Staying in the same body position as required, such as remaining seated or remaining standing for carrying out a task, in play, work or school."
* #BlockL1-d11 #BlockL2-d41 #d415 #d4150 "Maintaining a lying position" "Staying in a lying position for some time as required, such as remaining in a prone position in a bed."
* #BlockL1-d11 #BlockL2-d41 #d415 #d4151 "Maintaining a squatting position" "Staying in a squatting position such as when sitting on the floor without a seat."
* #BlockL1-d11 #BlockL2-d41 #d415 #d4152 "Maintaining a kneeling position" "Staying in a kneeling position where the body is supported by the knees with legs bent for some time such as during prayers in church."
* #BlockL1-d11 #BlockL2-d41 #d415 #d4153 "Maintaining a sitting position" "Staying in a seated position, on a seat or the floor, for some time such as when sitting at a desk or table."
* #BlockL1-d11 #BlockL2-d41 #d415 #d4154 "Maintaining a standing position" "Staying in a standing position for some time such as when standing in a queue."
* #BlockL1-d11 #BlockL2-d41 #d415 #d4155 "Maintaining head position" "Controlling the position of the head and supporting its weight for a determined period of time."
* #BlockL1-d11 #BlockL2-d41 #d420 "Transferring oneself" "Moving from one surface to another, such as sliding along a bench or moving from a bed to a chair, without changing body position."
* #BlockL1-d11 #BlockL2-d41 #d420 #d4200 "Transferring oneself while sitting" "Moving from a sitting position on one seat to another seat on the same or a different level, such as moving from a chair to a bed."
* #BlockL1-d11 #BlockL2-d41 #d420 #d4201 "Transferring oneself while lying" "Moving from one lying position to another on the same or a different level, such as moving from one bed to another."
* #BlockL1-d11 #BlockL2-d41 #d430 "Lifting and carrying objects" "Raising up an object or taking something from one place to another, such as when lifting a cup or toy or carrying a box, or a child from one room to another."
* #BlockL1-d11 #BlockL2-d41 #d430 #d4300 "Lifting" "Raising up an object in order to move it from a lower to a higher level, such as when lifting a glass from the table."
* #BlockL1-d11 #BlockL2-d41 #d430 #d4301 "Carrying in the hands" "Taking or transporting an object from one place to another using the hands, such as when carrying a drinking glass or a suitcase."
* #BlockL1-d11 #BlockL2-d41 #d430 #d4302 "Carrying in the arms" "Taking or transporting an object from one place to another using the arms and hands, such as when carrying a pet or a child or other large object."
* #BlockL1-d11 #BlockL2-d41 #d430 #d4303 "Carrying on shoulders, hip and back" "Taking or transporting an object from one place to another using the shoulders, hip or back, or some combination of these, such as when carrying a large parcel or school-bag."
* #BlockL1-d11 #BlockL2-d41 #d430 #d4304 "Carrying on the head" "Taking or transporting an object from one place to another using the head, such when as carrying a container of water on the head."
* #BlockL1-d11 #BlockL2-d41 #d430 #d4305 "Putting down objects" "Using hands, arms or other parts of the body to place an object down on a surface or place, such as when lowering a container of water to the ground."
* #BlockL1-d11 #BlockL2-d41 #d435 "Moving objects with lower extremities" "Performing coordinated actions aimed at moving an object by using the legs and feet, such as kicking a ball or pushing pedals on a bicycle."
* #BlockL1-d11 #BlockL2-d41 #d435 #d4350 "Pushing with lower extremities" "Using the legs and feet to exert a force on an object to move it away, such as pushing a chair away with a foot."
* #BlockL1-d11 #BlockL2-d41 #d435 #d4351 "Kicking" "Using the legs and feet to propel something away, such as kicking a ball."
* #BlockL1-d11 #BlockL2-d41 #d440 "Fine hand use" "Performing the coordinated actions of handling objects, picking up, manipulating and releasing them using one's hand, fingers and thumb, such as required to lift coins off a table or turn a dial or knob."
* #BlockL1-d11 #BlockL2-d41 #d440 #d4400 "Picking up" "Lifting or taking up a small object with hands and fingers, such as when picking up a pencil."
* #BlockL1-d11 #BlockL2-d41 #d440 #d4401 "Grasping" "Using one or both hands to seize and hold something, such as when grasping a tool or a door knob."
* #BlockL1-d11 #BlockL2-d41 #d440 #d4402 "Manipulating" "Using fingers and hands to exert control over, direct or guide something, such as when handling coins or other small objects, such as scissors, shoe laces, pencils, chop sticks, knives and forks."
* #BlockL1-d11 #BlockL2-d41 #d440 #d4403 "Releasing" "Using fingers and hands to let go or set free something so that it falls or changes position, such as when dropping an item of clothing or a piece of food for a pet."
* #BlockL1-d11 #BlockL2-d41 #d445 "Hand and arm use" "Performing the coordinated actions required to move objects or to manipulate them by using hands and arms, such as when turning door handles or throwing or catching an object."
* #BlockL1-d11 #BlockL2-d41 #d445 #d4450 "Pulling" "Using fingers, hands and arms to bring an object towards oneself, or to move it from place to place, such as when pulling on a string or pulling a door closed."
* #BlockL1-d11 #BlockL2-d41 #d445 #d4451 "Pushing" "Using fingers, hands and arms to move something from oneself, or to move it from place to place, such as when pushing a toy or an animal away."
* #BlockL1-d11 #BlockL2-d41 #d445 #d4452 "Reaching" "Using the hands and arms to extend outwards and touch and grasp something, such as when reaching across a table or desk for a book."
* #BlockL1-d11 #BlockL2-d41 #d445 #d4453 "Turning or twisting the hands or arms" "Using fingers, hands or arms to rotate, turn or bend an object, as is required to open a jar or use tools such as toothbrush or screwdriver."
* #BlockL1-d11 #BlockL2-d41 #d445 #d4454 "Throwing" "Using fingers, hands and arms to lift something and propel it with some force through the air, such as when tossing a ball."
* #BlockL1-d11 #BlockL2-d41 #d445 #d4455 "Catching" "Using fingers, hands and arms to grasp a moving object in order to bring it to a stop and hold it, such as when catching a ball."
* #BlockL1-d11 #BlockL2-d41 #d446 "Fine foot use" "Performing the coordinated actions to move or manipulate objects using one's foot and toes."
* #BlockL1-d11 #BlockL2-d41 #d450 "Walking" "Moving along a surface on foot, step by step, so that one foot is always on the ground, such as when strolling, sauntering, walking forwards, backwards, or sideways."
* #BlockL1-d11 #BlockL2-d41 #d450 #d4500 "Walking short distances" "Walking for less than a kilometre, such as walking around rooms or hallways, within a building or for short distances outside."
* #BlockL1-d11 #BlockL2-d41 #d450 #d4501 "Walking long distances" "Walking for more than a kilometre, such as across a village or town, between villages or across open areas."
* #BlockL1-d11 #BlockL2-d41 #d450 #d4502 "Walking on different surfaces" "Walking on sloping, uneven, or moving surfaces, such as on grass, gravel or ice and snow, or walking aboard a ship, train or other vehicle."
* #BlockL1-d11 #BlockL2-d41 #d450 #d4503 "Walking around obstacles" "Walking in ways required to avoid moving and immobile objects, people, animals, and vehicles, such as walking around a marketplace or shop, around or through traffic or other crowded areas."
* #BlockL1-d11 #BlockL2-d41 #d451 "Going up and down stairs" "Moving upwards and downwards so that at least one foot is always on the ground such as ascending and descending stairs or curbs."
* #BlockL1-d11 #BlockL2-d41 #d455 "Moving around" "Moving the whole body from one place to another by means other than walking, such as climbing over a rock or running down a street, skipping, scampering, jumping, somersaulting or running around obstacles."
* #BlockL1-d11 #BlockL2-d41 #d455 #d4550 "Crawling" "Moving the whole body in a prone position from one place to another on hands, or hands and arms, and knees."
* #BlockL1-d11 #BlockL2-d41 #d455 #d4551 "Climbing" "Moving the whole body upwards or downwards, over surfaces or objects, such as climbing steps, rocks, ladders or stairs, curbs or other objects."
* #BlockL1-d11 #BlockL2-d41 #d455 #d4552 "Running" "Moving with quick steps so that both feet may be simultaneously off the ground."
* #BlockL1-d11 #BlockL2-d41 #d455 #d4553 "Jumping" "Moving up off the ground by bending and extending the legs, such as jumping on one foot, hopping, skipping and jumping or diving into water."
* #BlockL1-d11 #BlockL2-d41 #d455 #d4554 "Swimming" "Propelling the whole body through water by means of limb and body movements without taking support from the ground underneath."
* #BlockL1-d11 #BlockL2-d41 #d460 "Moving around in different locations" "Walking and moving around in various places and situations, such as walking between rooms in a house, within a building, or down the street of a town."
* #BlockL1-d11 #BlockL2-d41 #d460 #d4600 "Moving around within the home" "Walking and moving around in one's home, within a room, between rooms, and around the whole residence or living area."
* #BlockL1-d11 #BlockL2-d41 #d460 #d4601 "Moving around within buildings other than home" "Walking and moving around within buildings other than one's residence, such as moving around other people's homes, other private buildings, community and public buildings and enclosed areas."
* #BlockL1-d11 #BlockL2-d41 #d460 #d4602 "Moving around outside the home and other buildings" "Walking and moving around close to or far from one's home and other buildings, without the use of transportation, public or private, such as walking for short or long distances around a town or village."
* #BlockL1-d11 #BlockL2-d41 #d465 "Moving around using equipment" "Moving the whole body from place to place, on any surface or space, by using specific devices designed to facilitate moving or create other ways of moving around, such as with skates, skis, or scuba equipment, or moving down the street in a self-propelled wheelchair or a walker."
* #BlockL1-d11 #BlockL2-d41 #d470 "Using transportation" "Using transportation to move around as a passenger, such as being driven in a car, bus, rickshaw, jitney, pram or stroller, wheelchair, animal-powered vehicle, private or public taxi, train, tram, subway, boat or aircraft and using humans for transportation."
* #BlockL1-d11 #BlockL2-d41 #d470 #d4700 "Using human-powered vehicles" "Being transported as a passenger by a mode of transportation powered by one or more people, such as riding in a pram or stroller, wheelchair propelled by another, rickshaw or rowboat."
* #BlockL1-d11 #BlockL2-d41 #d470 #d4701 "Using private motorized transportation" "Being transported as a passenger by private motorized vehicle over land, sea or air, such as by car, taxi or privately owned aircraft or boat."
* #BlockL1-d11 #BlockL2-d41 #d470 #d4702 "Using public motorized transportation" "Being transported as a passenger by a motorized vehicle over land, sea or air designed for public transportation, such as being a passenger on a bus, train, subway or aircraft."
* #BlockL1-d11 #BlockL2-d41 #d470 #d4703 "Using humans for transportation" "Being transported by another person, such as being crried in he arms, in a sheet, in a backpack or a transportation device."
* #BlockL1-d11 #BlockL2-d41 #d475 "Driving" "Being in control of and moving a vehicle or the animal that draws it, travelling under one's own direction or having at one's disposal any form of transportation appropriate for age, such as a car , bicycle, boat or animal powered vehicles."
* #BlockL1-d11 #BlockL2-d41 #d475 #d4750 "Driving human-powered transportation" "Driving a human-powered vehicle, such as a bicycle, tricycle, or rowboat."
* #BlockL1-d11 #BlockL2-d41 #d475 #d4751 "Driving motorized vehicles" "Driving a vehicle with a motor, such as an automobile, motorcycle, motorboat or aircraft."
* #BlockL1-d11 #BlockL2-d41 #d475 #d4752 "Driving animal-powered vehicles" "Driving a vehicle powered by an animal, such as a horse-drawn cart or carriage."
* #BlockL1-d11 #BlockL2-d41 #d480 "Riding animals for transportation" "Travelling on the back of an animal, such as a horse, ox, camel or elephant."
* #BlockL1-d11 #BlockL2-d51 "Self-care" "This chapter is about caring for oneself, washing and drying oneself, caring for one's body and body parts, dressing, eating and drinking, and looking after one's health."
* #BlockL1-d11 #BlockL2-d51 #d510 "Washing oneself" "Washing and drying one's whole body, or body parts, using water and appropriate cleaning and drying materials or methods, such as bathing, showering, washing hands and feet, face and hair, and drying with a towel."
* #BlockL1-d11 #BlockL2-d51 #d510 #d5100 "Washing body parts" "Applying water, soap and other substances to body parts, such as hands, face, feet, hair or nails, in order to clean them."
* #BlockL1-d11 #BlockL2-d51 #d510 #d5101 "Washing whole body" "Applying water, soap and other substances to the whole body in order to clean oneself, such as taking a bath or shower."
* #BlockL1-d11 #BlockL2-d51 #d510 #d5102 "Drying oneself" "Using a towel or other means for drying some part or parts of one's body, or the whole body, such as after washing."
* #BlockL1-d11 #BlockL2-d51 #d520 "Caring for body parts" "Looking after those parts of the body, such as skin, face, teeth, scalp, nails and genitals, that require more than washing and drying."
* #BlockL1-d11 #BlockL2-d51 #d520 #d5200 "Caring for skin" "Looking after the texture and hydration of one's skin, such as by removing calluses or corns and using moisturizing lotions or cosmetics."
* #BlockL1-d11 #BlockL2-d51 #d520 #d5201 "Caring for teeth" "Looking after dental hygiene, such as by brushing teeth, flossing, and taking care of a dental prosthesis or orthosis."
* #BlockL1-d11 #BlockL2-d51 #d520 #d5202 "Caring for hair" "Looking after the hair on the head and face, such as by combing, styling, shaving, or trimming"
* #BlockL1-d11 #BlockL2-d51 #d520 #d5203 "Caring for fingernails" "Cleaning, trimming or polishing the nails of the fingers."
* #BlockL1-d11 #BlockL2-d51 #d520 #d5204 "Caring for toenails" "Cleaning, trimming or polishing the nails of the toes."
* #BlockL1-d11 #BlockL2-d51 #d520 #d5205 "Caring for nose" "Cleaning the nose, looking after nasal hygiene."
* #BlockL1-d11 #BlockL2-d51 #d530 "Toileting" "Planning and carrying out the elimination of human waste (menstruation, urination and defecation), and clean oneself afterwards."
* #BlockL1-d11 #BlockL2-d51 #d530 #d5300 "Regulating urination" "Coordinating and managing urination, such as by indicating need, getting into the proper position, choosing and getting to an appropriate place for urination, manipulating clothing before and after urination, and cleaning oneself after urination."
* #BlockL1-d11 #BlockL2-d51 #d530 #d5301 "Regulating defecation" "Coordinating and managing defecation such as by indicating need, getting into the proper position, choosing and getting to an appropriate place for defecation, manipulating clothing before and after defecation, and cleaning oneself after defecation."
* #BlockL1-d11 #BlockL2-d51 #d530 #d5302 "Menstrual care" "Coordinating, planning and caring for menstruation, such as by anticipating menstruation and using sanitary towels and napkins."
* #BlockL1-d11 #BlockL2-d51 #d540 "Dressing" "Carrying out the coordinated actions and tasks of putting on and taking off clothes and footwear in sequence and in keeping with climatic and social conditions, such as by putting on, adjusting and removing shirts, skirts, blouses, pants, undergarments, saris, kimono, tights, hats, gloves, coats, shoes, boots, sandals and slippers."
* #BlockL1-d11 #BlockL2-d51 #d540 #d5400 "Putting on clothes" "Carrying out the coordinated tasks of putting clothes on various parts of the body, such as putting clothes on over the head, over the arms and shoulders, and on the lower and upper halves of the body; putting on gloves and headgear."
* #BlockL1-d11 #BlockL2-d51 #d540 #d5401 "Taking off clothes" "Carrying out the coordinated tasks of taking clothes off various parts of the body, such as pulling clothes off and over the head, off the arms and shoulders, and off the lower and upper halves of the body; taking off gloves and headgear."
* #BlockL1-d11 #BlockL2-d51 #d540 #d5402 "Putting on footwear" "Carrying out the coordinated tasks of putting on socks, stockings and footwear."
* #BlockL1-d11 #BlockL2-d51 #d540 #d5403 "Taking off footwear" "Carrying out the coordinated tasks of taking off socks, stockings and footwear."
* #BlockL1-d11 #BlockL2-d51 #d540 #d5404 "Choosing appropriate clothing" "Following implicit or explicit dress codes and conventions of one's society or culture and dressing in keeping with climatic conditions."
* #BlockL1-d11 #BlockL2-d51 #d550 "Eating" "Carrying out the coordinated tasks and actions of eating food that has been served, bringing it to the mouth and consuming it in culturally acceptable ways, cutting or breaking food into pieces, opening containers and packets, using eating implements, having meals, feasting or dining."
* #BlockL1-d11 #BlockL2-d51 #d560 "Drinking" "Taking hold of a drink, bringing it to the mouth, and consuming the drink in culturally acceptable ways, mixing, stirring and pouring liquids for drinking, opening bottles and cans, drinking through a straw or drinking running water such as from a tap or a spring; feeding from the breast."
* #BlockL1-d11 #BlockL2-d51 #d570 "Looking after one's health" "Ensuring physical comfort, health and physical and mental well-being, such as by maintaining a balanced diet, and an appropriate level of physical activity, keeping warm or cool, avoiding harms to health, following safe sex practices, including such as using condoms, getting immunizations and regular physical examinations."
* #BlockL1-d11 #BlockL2-d51 #d570 #d5700 "Ensuring one's physical comfort" "Caring for oneself by being aware that one needs to ensure, and ensuring, that one's body is in a comfortable position, that one is not feeling too hot, cold or wet, and that one has adequate lighting."
* #BlockL1-d11 #BlockL2-d51 #d570 #d5701 "Managing diet and fitness" "Caring for oneself by being aware of the need and by selecting and consuming nutritious foods and maintaining physical fitness."
* #BlockL1-d11 #BlockL2-d51 #d570 #d5702 "Maintaining one's health" "Caring for oneself by being aware of the need and doing what is required to look after one's health, both to respond to risks to health and to prevent ill-health, such as by seeking assistance (professional and non professional); following medical and other health advice; and managing risks to health such as injuries, communicable diseases, drug-taking and sexual transmitted diseases."
* #BlockL1-d11 #BlockL2-d61 "Domestic life" "This chapter is about carrying out domestic and everyday actions and tasks. Areas of domestic life include, caring for one's belongings and space, acquiring food, clothing and other necessities, household cleaning and repairing, caring for personal and other household objects, and assisting others."
* #BlockL1-d11 #BlockL2-d61 #d610 "Acquiring a place to live" "Buying, renting, furnishing and arranging a room, house, apartment or other dwelling."
* #BlockL1-d11 #BlockL2-d61 #d610 #d6100 "Buying a place to live" "Acquiring ownership of a house, apartment or other dwelling."
* #BlockL1-d11 #BlockL2-d61 #d610 #d6101 "Renting a place to live" "Acquiring the use of a house, apartment or other dwelling belonging to another in exchange for payment."
* #BlockL1-d11 #BlockL2-d61 #d610 #d6102 "Furnishing a place to live" "Equipping and arranging a living space with furniture, fixtures and other fittings and decorating rooms, arranging ones own space, room."
* #BlockL1-d11 #BlockL2-d61 #d620 "Acquisition of goods and services" "Selecting, procuring and transporting all goods and services required for daily living, such as selecting, procuring, transporting and storing food, drink, clothing, cleaning materials, fuel, household items, utensils, cooking ware, play and recreational materials, domestic appliances and tools; procuring utilities and other household services, and picking up and delivering paper mail or packages."
* #BlockL1-d11 #BlockL2-d61 #d620 #d6200 "Shopping" "Obtaining, in exchange for money, goods and services required for daily living (including instructing and supervising an intermediate to do the shopping), such as selecting food, drink, cleaning materials, household items, play and recreational materials or clothing in a shop or market; comparing quality and price of the items required, negotiating and paying for selected goods or services and transporting goods."
* #BlockL1-d11 #BlockL2-d61 #d620 #d6201 "Gathering daily necessities" "Obtaining, without exchange of money, goods and services required for daily living (including instructing and supervising an intermediate to gather daily necessities), such as by harvesting vegetable and fruits, getting water and fuel and picking up and delivering paper mail or packages."
* #BlockL1-d11 #BlockL2-d61 #d630 "Preparing meals" "Planning, organizing, cooking and serving simple and complex meals for oneself and others, such as by making a menu, selecting edible food and drink, getting together ingredients for preparing meals,cooking with heat and preparing cold foods and drinks, and serving the food."
* #BlockL1-d11 #BlockL2-d61 #d630 #d6300 "Preparing simple meals" "Planning, organizing, cooking and serving meals with small number of ingredients that require easy methods of preparation and serving, such as making a snack or small meal, and transforming food ingredients by cutting and stirring, boiling and heating food such as rice or potatoes."
* #BlockL1-d11 #BlockL2-d61 #d630 #d6301 "Preparing complex meals" "Planning, organizing, cooking and serving meals with large number of ingredients that require complex methods of preparation and serving, such as planning a meal with serveral dishes, and transforming food ingredients by combined actions of peeling, slicing, mixing, kneading, stirring, presenting and serving food in a manner appropriate to the occasion and culture."
* #BlockL1-d11 #BlockL2-d61 #d640 "Doing housework" "Managing a household by cleaning the house, washing clothes, using household appliances, storing food and disposing of garbage, such as by sweeping, mopping, washing counters, walls and other surfaces; collecting and disposing of household garbage; tidying rooms, closets and drawers; collecting, washing, drying, folding and ironing clothes; cleaning footwear; using brooms, brushes and vacuum cleaners; using washing machines, dryers and irons."
* #BlockL1-d11 #BlockL2-d61 #d640 #d6400 "Washing and drying clothes and garments" "Washing clothes and garments by hand and hanging them out to dry in the air."
* #BlockL1-d11 #BlockL2-d61 #d640 #d6401 "Cleaning cooking area and utensils" "Cleaning up after cooking, such as by washing dishes, pans, pots and cooking utensils, and cleaning tables and floors around cooking and eating area."
* #BlockL1-d11 #BlockL2-d61 #d640 #d6402 "Cleaning living area" "Cleaning the living areas of the household, such as by tidying and dusting, sweeping, swabbing, mopping floors, cleaning windows and walls, cleaning bathrooms and toilets, cleaning household furnishings."
* #BlockL1-d11 #BlockL2-d61 #d640 #d6403 "Using household appliances" "Using all kinds of household appliances, such as washing machines, driers, irons, vacuum cleaners, dishwashers."
* #BlockL1-d11 #BlockL2-d61 #d640 #d6404 "Storing daily necessities" "Storing food, drinks, clothes and other household goods required for daily living; preparing food for conservation by canning, salting or refrigerating, keeping food fresh and out of the reach of animals."
* #BlockL1-d11 #BlockL2-d61 #d640 #d6405 "Disposing of garbage" "Disposing of household garbage such as by collecting trash and rubbish around the house, preparing garbage for disposal, using garbage disposal appliances; burning garbage."
* #BlockL1-d11 #BlockL2-d61 #d650 "Caring for household objects" "Maintaining and repairing household and other personal objects, including play material, house and contents, clothes, play and recreational materials, vehicles and assistive devices, and caring for plants and animals, such as painting or wallpapering rooms, fixing furniture, repairing plumbing, ensuring the proper working order of vehicles, watering plants, grooming and feeding pets and domestic animals and taking care of entrances, walkways and driveways."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6500 "Making and repairing clothes" "Making and repairing clothes, such as by sewing, producing or mending clothes; reattaching buttons and fasteners; ironing clothes, fixing and polishing footwear."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6501 "Maintaining dwelling and furnishings" "Repairing and taking care of dwelling, its exterior, interior and contents, such as by painting, repairing fixtures and furniture, and using required tools for repair work."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6502 "Maintaining domestic appliances" "Repairing and taking care of all domestic appliances for cooking, cleaning and repairing, such as by oiling and repairing tools and maintaining the washing machine."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6503 "Maintaining vehicles" "Repairing and taking care of motorized and non-motorized vehicles for personal use, including bicycles, carts, automobiles and boats."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6504 "Maintaining assistive devices" "Repairing and taking care of assistive devices such as prostheses, orthoses and specialized tools and aids for housekeeping and personal care; maintaining and repairing aids for personal mobility such as canes, walkers, wheelchairs and scooters; and maintaining communication and recreational aids."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6505 "Taking care of plants, indoors and outdoors" "Taking care of plants inside and outside the house, such as by planting, watering and fertilizing plants; gardening and growing foods for personal use."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6506 "Taking care of animals" "Taking care of domestic animals and pets, such as by feeding, cleaning, grooming and exercising pets; watching over the health of animals or pets; planning for the care of animals or pets in one's absence."
* #BlockL1-d11 #BlockL2-d61 #d650 #d6507 "Taking care of walkways and driveways" "Taking care of domestic pathways such as walkways and driveways or entrances to houses (covered or uncovered) for example removing snow, leaves, rubble or sand from enrances as well as spreading sand or other material."
* #BlockL1-d11 #BlockL2-d61 #d660 "Assisting others" "Assisting household members and others with their learning, communicating, self-care, movement, within the house or outside; being concerned about the well-being of household members and others."
* #BlockL1-d11 #BlockL2-d61 #d660 #d6600 "Assisting others with self-care" "Assisting household members and others in performing self-care, including helping others with eating, bathing and dressing; taking care of children or members of the household who are sick or have difficulties with basic self-care; helping others with their toileting."
* #BlockL1-d11 #BlockL2-d61 #d660 #d6601 "Assisting others in movement" "Assisting household members and others in movements and in moving outside the home, such as in the neighbourhood or city, to or from school, place of employment or other destination."
* #BlockL1-d11 #BlockL2-d61 #d660 #d6602 "Assisting others in communication" "Assisting household members and others with their communication, such as by helping with speaking, writing or readings."
* #BlockL1-d11 #BlockL2-d61 #d660 #d6603 "Assisting others in interpersonal relations" "Assisting household members and others with their interpersonal interactions, such as by helping them to initiate, maintain or terminate relationships."
* #BlockL1-d11 #BlockL2-d61 #d660 #d6604 "Assisting others in nutrition" "Assisting household members and others with their nutrition, such as by helping them to prepare and eat meals."
* #BlockL1-d11 #BlockL2-d61 #d660 #d6605 "Assisting others in health maintenance" "Assisting household members and others with formal and informal health care, such as by ensuring that a child gets regular medical check-ups, or that an elderly relative takes required medication."
* #BlockL1-d11 #BlockL2-d71 "Interpersonal interactions and relationships" "This chapter is about carrying out the actions and tasks required for basic and complex interactions with people (strangers, friends, relatives, family members and lovers) in a contextually and socially appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d710 "Basic interpersonal interactions" "Interacting with people in a contextually and socially appropriate manner, such as by showing consideration and esteem when appropriate, or responding to the feelings of others."
* #BlockL1-d11 #BlockL2-d71 #d710 #d7100 "Respect and warmth in relationships" "Showing and responding to consideration and esteem, in a contextually and socially appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d710 #d7101 "Appreciation in relationships" "Showing and responding to satisfaction and gratitude, in a contextually and socially appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d710 #d7102 "Tolerance in relationships" "Showing and responding to understanding and acceptance of behaviour, in a contextually and socially appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d710 #d7103 "Criticism in relationships" "Providing and responding to implicit and explicit differences of opinion or disagreement, in a contextually and socially appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d710 #d7104 "Social cues in relationships" "Giving and reacting appropriately to signs and hints that occur in social interactions."
* #BlockL1-d11 #BlockL2-d71 #d710 #d7105 "Physical contact in relationships" "Making and responding to bodily contact with others, in a contextually and socially appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d710 #d7106 "Differentiation of familiar persons" "Showing differential responses to individuals, such as by reaching out for the familiar person and differentiating them from strangers and reacting in an appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d720 "Complex interpersonal interactions" "Maintaining and managing interactions with other people, in a contextually and socially appropriate manner, such as by regulating emotions and impulses, controlling verbal and physical aggression, acting independently in social interactions, and acting in accordance with social rules and conventions, when for example playing, studying or working with others."
* #BlockL1-d11 #BlockL2-d71 #d720 #d7200 "Forming relationships" "Beginning and maintaining interactions with others for a short or long period of time, in a contextually and socially appropriate manner, such as by introducing oneself, finding and establishing friendships and professional relationships, starting a relationship that may become permanent, romantic or intimate."
* #BlockL1-d11 #BlockL2-d71 #d720 #d7201 "Terminating relationships" "Bringing interactions to a close in a contextually and socially appropriate manner, such as by ending temporary relationships at the end of a visit, ending long-term relationships with friends when moving to a new town or ending relationships with work colleagues, professional colleagues and service providers, and ending romantic or intimate relationships."
* #BlockL1-d11 #BlockL2-d71 #d720 #d7202 "Regulating behaviours within interactions" "Regulating emotions and impulses, verbal aggression and physical aggression in interactions with others, in a contextually and socially appropriate manner."
* #BlockL1-d11 #BlockL2-d71 #d720 #d7203 "Interacting according to social rules" "Acting independently in social interactions and complying with social conventions governing one's role, position or other social status in interactions with others."
* #BlockL1-d11 #BlockL2-d71 #d720 #d7204 "Maintaining social space" "Being aware of and maintaining a distance between oneself and others that is contextually, socially and culturally appropriate."
* #BlockL1-d11 #BlockL2-d71 #d730 "Relating with strangers" "Engaging in temporary contacts and links with strangers for specific purposes, such as asking for directions or making a purchase. Engaging in temporary contacts and links with strangers for specific purposes, such as when asking for information, directions or making a purchase."
* #BlockL1-d11 #BlockL2-d71 #d740 "Formal relationships" "Creating and maintaining specific relationships in formal settings, such as with teachers, employers, professionals or service providers."
* #BlockL1-d11 #BlockL2-d71 #d740 #d7400 "Relating with persons in authority" "Creating and maintaining formal relations with people in positions of power of a higher rank or prestige relative to one's own position, such as an employer."
* #BlockL1-d11 #BlockL2-d71 #d740 #d7401 "Relating with subordinates" "Creating and maintaining formal relations with people in positions of lower rank or prestige relative to one's own social position, such as an employee or servant."
* #BlockL1-d11 #BlockL2-d71 #d740 #d7402 "Relating with equals" "Creating and maintaining formal relations with people in the same position of authority, rank or prestige relative to one's own social position."
* #BlockL1-d11 #BlockL2-d71 #d750 "Informal social relationships" "Entering into relationships with others, such as casual relationships with people living in the same community or residence, or with co-workers, students, playmates, people with similar backgrounds or professions."
* #BlockL1-d11 #BlockL2-d71 #d750 #d7500 "Informal relationships with friends" "Creating and maintaining friendship relationships that are characterized by mutual esteem an common interests."
* #BlockL1-d11 #BlockL2-d71 #d750 #d7501 "Informal relationships with neighbours" "Creating and maintaining informal relationships with people who live in nearby dwellings or living areas."
* #BlockL1-d11 #BlockL2-d71 #d750 #d7502 "Informal relationships with acquaintances" "Creating and maintaining informal relationships with people whom one knows but who are not close friends."
* #BlockL1-d11 #BlockL2-d71 #d750 #d7503 "Informal relationships with co-inhabitants" "Creating and maintaining informal relationships with people who are co-inhabitants of a house or other dwelling, privately or publicly run, for any purpose."
* #BlockL1-d11 #BlockL2-d71 #d750 #d7504 "Informal relationships with peers" "Creating and maintaining informal relationships with people who share the same age, interest or other common feature."
* #BlockL1-d11 #BlockL2-d71 #d760 "Family relationships" "Creating and maintaining kinship relationships, such as those with members of the nuclear family, extended family, foster and adopted family and step-relationships, more distant relationships such as second cousins, or legal guardians."
* #BlockL1-d11 #BlockL2-d71 #d760 #d7600 "Parent-child relationships" "Becomming and being a parent, both natural and adoptive, such as by having a child and relating to it as a parent or creating and maintaining a parental relationships with an adoptive child, and providing physical, intellectual and emotional nurture to one's natural or adoptive child."
* #BlockL1-d11 #BlockL2-d71 #d760 #d7601 "Child-parent relationships" "Creating and maintaining relationships with one's parent, such as a young child obeying his or her parents or an adult child taking care of his or her elderly parents."
* #BlockL1-d11 #BlockL2-d71 #d760 #d7602 "Sibling relationships" "Creating and maintaining a brotherly or sisterly relationship with a person who shares one or both parents by birth, adoption or marriage."
* #BlockL1-d11 #BlockL2-d71 #d760 #d7603 "Extended family relationships" "Creating and maintaining a family relationship with members of one's extended family, such as with cousins, aunts and uncles and grandparents."
* #BlockL1-d11 #BlockL2-d71 #d770 "Intimate relationships" "Creating and maintaining close or romantic relationships between individuals, such as husband and wife, lovers or sexual partners."
* #BlockL1-d11 #BlockL2-d71 #d770 #d7700 "Romantic relationships" "Creating and maintaining a relationship based on emotional and physical attraction, potentially leading to long-term intimate relationships."
* #BlockL1-d11 #BlockL2-d71 #d770 #d7701 "Spousal relationships" "Creating and maintaining an intimate relationship of a legal nature with another person, such as in a legal marriage, including becoming and being a legally maried wife or husband or an unmarried spouse."
* #BlockL1-d11 #BlockL2-d71 #d770 #d7702 "Sexual relationships" "Creating and maintaining a relationship of a sexual nature, with a spouse or other partner."
* #BlockL1-d11 #BlockL2-d81 "Major life areas" "This chapter is about carrying out the tasks and actions required to engage in education, work and employment and to conduct economic transactions."
* #BlockL1-d11 #BlockL2-d81 #d810 "Informal education" "Learning at home or in some other non-institutional setting, such as learning crafts and other skills from parents or family members, or home schooling."
* #BlockL1-d11 #BlockL2-d81 #d815 "Preschool education" "Learning at an initial level of organized instruction, designed primarily to introduce a child to the school-type environment and prepare it for compulsory education, such as by acquiring skills in a day-care or similar setting as preparation for advancement to school."
* #BlockL1-d11 #BlockL2-d81 #d820 "School education" "Gaining admission to school, education, engaging in all school-related responsibilities and privileges, and learning the course material, subjects and other curriculum requirements in a primary or secondary education programme, including attending school regularly, working cooperatively with other students, taking directions from teachers, organizing, studying and completing assigned tasks and projects, and advancing to other stages of education."
* #BlockL1-d11 #BlockL2-d81 #d825 "Vocational training" "Engaging in all activities of a vocational programme and learning the curriculum material for preparation for employment in a trade, job or profession."
* #BlockL1-d11 #BlockL2-d81 #d830 "Higher education" "Engaging in the activities of advanced educational programmes in universities, colleges and professional schools and learning all aspects of the curriculum required for degrees, diplomas, certificates and other accreditations, such as completing a university bachelor's or master's course of study, medical school or other professional school."
* #BlockL1-d11 #BlockL2-d81 #d835 "Education life" "Engaging in aspects of life of education institutions, such as university and school related associations, including: clubs, sports, related civic bodies (e.g. school council), and other institutionally-organized initiatives that are not part of the academic curriculum."
* #BlockL1-d11 #BlockL2-d81 #d840 "Apprenticeship (work preparation)" "Engaging in programmes related to preparation for employment, such as performing the tasks required of an apprenticeship, internship, articling and in-service training."
* #BlockL1-d11 #BlockL2-d81 #d845 "Acquiring, keeping and terminating a job" "Seeking, finding and choosing employment, being hired and accepting employment, maintaining and advancing through a job, trade, occupation or profession, and leaving a job in an appropriate manner."
* #BlockL1-d11 #BlockL2-d81 #d845 #d8450 "Seeking employment" "Locating and choosing a job, in a trade, profession or other form of employment, and performing the required tasks to get hired, such as showing up at the place of employment or participating in a job interview."
* #BlockL1-d11 #BlockL2-d81 #d845 #d8451 "Maintaining a job" "Performing job-related tasks to keep an occupation, trade, profession or other form of employment, and obtaining promotion and other advancements in employment."
* #BlockL1-d11 #BlockL2-d81 #d845 #d8452 "Terminating a job" "Leaving or quitting a job in the appropriate manner."
* #BlockL1-d11 #BlockL2-d81 #d850 "Remunerative employment" "Engaging in all aspects of work, as an occupation, trade, profession or other form of employment, for payment, as an employee, full or part time, or self-employed, such as seeking employment and getting a job, doing the required tasks of the job, attending work on time as required, supervising other workers or being supervised, and performing required tasks alone or in groups."
* #BlockL1-d11 #BlockL2-d81 #d850 #d8500 "Self employment" "Engaging in remunerative work sought or generated by the individual, or contracted from others without a formal employment relationship, such as migratory agricultural work, working as a free-lance writer or consultant, short-term contract work, working as an artist or crafts person, owning and running a shop or other business."
* #BlockL1-d11 #BlockL2-d81 #d850 #d8501 "Part-time employment" "Engaging in all aspects of work for payment on a part-time basis, as an employee, such as seeking employment and getting a job, doing the tasks required of the job, attending work on time as required, supervising other workers or being supervised, and performing required tasks alone or in groups."
* #BlockL1-d11 #BlockL2-d81 #d850 #d8502 "Full-time employment" "Engaging in all aspects of work for payment on a full-time basis, as an employee, such as seeking employment and getting a job, doing the required tasks of the job, attending work on time as required, supervising other workers or being supervised, and performing required tasks alone or in groups."
* #BlockL1-d11 #BlockL2-d81 #d855 "Non-remunerative employment" "Engaging in all aspects of work in which pay is not provided, full-time or part-time, including organized work activities, doing the required tasks of the job, attending work on time as required, supervising other workers or being supervised, and performing required tasks alone or in groups, such as volunteer work, charity work, working for a community or religious group without remuneration, working around the home without remuneration."
* #BlockL1-d11 #BlockL2-d81 #d860 "Basic economic transactions" "Engaging in any form of simple economic transaction, such as using money to purchase food or bartering, exchanging goods or services; or saving money."
* #BlockL1-d11 #BlockL2-d81 #d865 "Complex economic transactions" "Engaging in any form of complex economic transaction that involves the exchange of capital or property, and the creation of profit or economic value, such as buying a business, factory, or equipment, maintaining a bank account, or trading in commodities."
* #BlockL1-d11 #BlockL2-d81 #d870 "Economic self-sufficiency" "Having command over economic resources, from private or public sources, in order to ensure economical security for present and future needs."
* #BlockL1-d11 #BlockL2-d81 #d870 #d8700 "Personal economic resources" "Having command over personal or private economic resources, in order to ensure economical security for present and future needs."
* #BlockL1-d11 #BlockL2-d81 #d870 #d8701 "Public economic entitlements" "Having command over public economic resources, in order to ensure economical security for present and future needs."
* #BlockL1-d11 #BlockL2-d91 "Community, social and civic life" "This chapter is about the actions and tasks required to engage in organized social life outside the family, in community, social and civic areas of life."
* #BlockL1-d11 #BlockL2-d91 #d910 "Community life" "Engaging in aspects of community social life, such as engaging in charitable organizations, services clubs or professional social organizations."
* #BlockL1-d11 #BlockL2-d91 #d910 #d9100 "Informal associations" "Engaging in social or community associations organized by people with common interests, such as local social clubs or ethics groups."
* #BlockL1-d11 #BlockL2-d91 #d910 #d9101 "Formal associations" "Engaging in professional or other exclusive social groups, such as associations of lawyers, physicians, or academics."
* #BlockL1-d11 #BlockL2-d91 #d910 #d9102 "Ceremonies" "Engaging in non-religious rites or social ceremonies, such as marriages, funerals or initiation ceremonies."
* #BlockL1-d11 #BlockL2-d91 #d920 "Recreation and leisure" "Engaging in any form of play, recreational or leisure activity, such as informal or organized play and sports, programmes of physical fitness, relaxation, amusement or diversion, going to art galleries, museums, cinemas or theatres; engaging in crafts or hobbies, reading for enjoyment, playing musical instruments; sightseeings, tourism and travelling for pleasure."
* #BlockL1-d11 #BlockL2-d91 #d920 #d9200 "Play" "Engaging in games with rules or unstructured or unorganized games and spontaneous recreation, such as playing chess or cards or children's play."
* #BlockL1-d11 #BlockL2-d91 #d920 #d9201 "Sports" "Engaging in competitive and informal or formally organized games or athletic events, performed alone or in a group, such as bowling, gymnastics or soccer."
* #BlockL1-d11 #BlockL2-d91 #d920 #d9202 "Arts and culture" "Engaging in, or appreciating, fine arts or cultural events, such as going to the theatre, cinema, museum or art gallery, or acting in a play, reading, being read to, dancing, singing or playing a musical instrument for enjoyment."
* #BlockL1-d11 #BlockL2-d91 #d920 #d9203 "Crafts" "Engaging in handicrafts, such as pottery or knitting."
* #BlockL1-d11 #BlockL2-d91 #d920 #d9204 "Hobbies" "Engaging in pastimes such as stamp collecting, coins or antiques."
* #BlockL1-d11 #BlockL2-d91 #d920 #d9205 "Socializing" "Engaging in informal or casual gatherings with others, such as visiting friends or relatives or meeting informally in public places."
* #BlockL1-d11 #BlockL2-d91 #d930 "Religion and spirituality" "Engaging in religious or spiritual activities, organizations and practices for self-fulfilment, finding meaning, religious or spiritual value and establishing connection with a divine power, such as is involved in attending a church, temple, mosque or synagogue, praying or chanting for a religious purpose, and spiritual contemplation."
* #BlockL1-d11 #BlockL2-d91 #d930 #d9300 "Organized religion" "Engaging in organized religious ceremonies, activities and events."
* #BlockL1-d11 #BlockL2-d91 #d930 #d9301 "Spirituality" "Engaging in spiritual activities or events, outside of a organized religion."
* #BlockL1-d11 #BlockL2-d91 #d940 "Human rights" "Enjoying all nationally and internationally recognized rights that are accorded to people by virtue of their humanity alone, such as human rights as recognized by the United Nations Universal Declaration of Human Rights (1948), the United Nations Convention on the Rights of the Child (1989), the United Nations Standard Rules for the Equalization of Opportunities for Persons with Disabilities (1993), and the United Nations Convention on the Rights of Persons with Disabilities (2006); the right to self-determination or autonomy; and the right to control over one's destiny."
* #BlockL1-d11 #BlockL2-d91 #d950 "Political life and citizenship" "Engaging in the social, political, governmental life of a citizen, having legal status as a citizen and enjoying the rights, protections, privileges and duties associated with that role, such as the right to vote and run for political office, to form political associations, enjoying the rights and freedoms associated with citizenship (e.g. the rights of freedom of speech, association, religion, protections against unreasonable search and seizure, the right to counsel, to a trial and other legal rights and protections against discrimination); having legal standing as a citizen."


---

// File: input/fsh/Extensions.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Extension: ObservationEventLocation
Parent: EventLocation
Description: "This extension is used to indicate the principal physical location where an observation event occurred."
Id: event-location
* value[x] only Reference(USCoreLocation)

Extension: DevicePatientUsed
Description: "Associated with the PAC Collection profile to point to a record indicating what healthcare-related assistive device was used by a patient during an observation. This extension leverages the DeviceUseStatement resource instead of Device resource so as to indicate appropriately a record of assistive device usage by a patient."
Id: device-patient-used
* ^context.type = #element
* ^context.expression = "Observation"
* value[x] only Reference(PFEUseOfDevice)
* value[x] ^short = "Points to a record of a healthcare-related assistive device being used by a patient during an assessment."

Extension: AssistanceRequired
Description: "Associated with the Narrative History of Status profile to provide a high-level indication of assistance required for the person's baseline ability (status immediately preceding the current admission, illness, or exacerbation for a patient). The CMS Assessment answer list LL4309-2 provides possible values for this extension."
Id: assistance-required
* ^context.type = #element
* ^context.expression = "DiagnosticReport"
* value[x] only CodeableConcept
* value[x] from LL4309-2 (extensible)

---

// File: input/fsh/GlobalAliasList.fsh

// Code Systems
// NOTE: use a code system (not value set) in instances
Alias: $LNC = http://loinc.org
Alias: SCT = http://snomed.info/sct
Alias: CAT = http://terminology.hl7.org/CodeSystem/observation-category
Alias: UOM = http://unitsofmeasure.org
Alias: DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: Hl7FhirAdminGender  = http://hl7.org/fhir/administrative-gender
Alias: NUCC = http://nucc.org/provider-taxonomy
Alias: USCORECAT = http://hl7.org/fhir/us/core/CodeSystem/us-core-category
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category

// Value Sets
// NOTE: use a value set (not code system) when binding a field
Alias: LNCVS = http://hl7.org/fhir/ValueSet/observation-codes
Alias: CATVS = http://hl7.org/fhir/ValueSet/observation-category
Alias: LL4309-2 = http://loinc.org/vs/LL4309-2

// Misc
Alias: EventLocation = http://hl7.org/fhir/StructureDefinition/event-location
Alias: USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: USCoreEncounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias: USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias: USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: USCoreQuestionnaireResponse = http://hl7.org/fhir/us/core/StructureDefinition/us-core-questionnaireresponse
Alias: USCoreDocumentReference = http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference
Alias: USCoreDiagnosticReport = http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note
Alias: $us-core-diagnosticreport-category = http://hl7.org/fhir/us/core/ValueSet/us-core-diagnosticreport-category


//Alias: MDS3.0-NC-1.17 = https://api.logicahealth.org/PACIO/open/Questionnaire/MDS3.0-NC-1.17
Alias: MDS3.0-NC-1.17 = http://example.org/Questionnaire/MDS3.0-NC-1.17


---

// File: input/fsh/PFEAbstractObservation.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFEAbstractObservation
Parent:         Observation
Id:             pfe-observation-abstract
Title:          "Personal Functioning and Engagement Abstract Observation"
Description:    "An abstract profile representing the cross-cutting requirements for Personal Functioning and Engagement Observation instances. This profile is not intended to be used directly. Implementers should use specific profiles that layer these requirements on top of specific US Core Observation profiles."
* ^abstract = true

* extension contains 
	ObservationEventLocation named event-location 0..1 MS and
	DevicePatientUsed named device-use 0..* MS
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension[device-use] ^short = "An extension to indicate a record of assistive device usage by a patient during an assessment."

* status MS
* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."

* category MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^requirements = "To identify that observation is derived from a questionnaire, is related to personal functioning and engagement, and optionally to identify the domain(s) it falls under."

* category contains functioning 1..1 MS
* category[functioning] = PFEFunctioningCS#functioning "Functioning"
* category[functioning] ^requirements = "Used to identify that this is an observation related to personal functioning and engagement."

* category contains PFEDomain 0..* MS
* category[PFEDomain] from PFECategoryVS (required)
* category[PFEDomain] ^requirements = "Indicates the personal functioning and engagement domain(s) that this observation is related to."

* code MS
* code from PFEExampleObservationsVS (example)

* subject 1..1 MS

* effective[x] MS
* effective[x] 1..1 

* performer MS
* performer 1..* 

* value[x] MS


---

// File: input/fsh/PFEClinicalTestObservation.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFEClinicalTestObservation
Parent:         USCoreObservationClinicalResultProfile
Id:             pfe-observation-clinicaltest
Title:          "Personal Functioning and Engagement Clinical Test Observation"
Description:    "An exchange of post-acute care observation for a patient. This profile is used for exchanging a single piece of observation data that resulted from a clinical test."

* extension contains 
	ObservationEventLocation named event-location 0..1 MS and
	DevicePatientUsed named device-use 0..* MS
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension[device-use] ^short = "An extension to indicate a record of assistive device usage by a patient during an assessment."

* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."

* category MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^requirements = "To identify that observation is derived from a questionnaire, is related to personal functioning and engagement, and optionally to identify the domain(s) it falls under."

* category[us-core] 0..* MS
* category[us-core] from http://hl7.org/fhir/us/core/ValueSet/us-core-clinical-result-observation-category (required)
* category[us-core] ^requirements = "Used to identify the category of personal functioning and engagement observation."

* category contains PFEDomain 0..* MS
* category[PFEDomain] from PFECategoryVS (required)
* category[PFEDomain] ^requirements = "Indicates the personal functioning and engagement domain(s) that this observation is related to."

* effective[x] 1..1 
* effective[x] only dateTime

* performer 1..* 
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."

---

// File: input/fsh/PFECollection.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFECollection
Parent:         USCoreSimpleObservationProfile
Id:             pfe-collection
Title:          "Personal Functioning and Engagement Collection"
Description:    "A point in time collection of post-acute care observations for a patient. This profile is used for exchanging a set of observation data collected through the use of a structured resource (e.g., assessment tool, instrument, or screen) with multiple questions."

* extension contains 
	ObservationEventLocation named event-location 0..1 MS and
	DevicePatientUsed named device-use 0..* MS
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension[device-use] ^short = "An extension to indicate a record of assistive device usage by a patient during an assessment."

* status ^short = "Should have the value 'final' when all the observatons are complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^requirements = "To identify that observation is derived from a questionnaire, is related to personal functioning and engagement, and optionally to identify the domain(s) it falls under."

* category contains
	survey 0..1 MS and 
	PFEDomain 0..* MS

* category[us-core] from PFEUSCoreCategoryVS (required)
* category[us-core] ^requirements = "Used to identify the category of personal functioning and engagement observation."

* category[survey] from PFESurveyCategoryVS 
* category[survey] ^requirements = "Indicates the personal functioning and engagement observation is of type survey"

* category[PFEDomain] from PFECategoryVS (required)
* category[PFEDomain] ^requirements = "Indicates the personal functioning and engagement domain(s) that this observation is related to."

* code ^short = "For a Post-Acute Care structured assessment resource such as an instrument or screen, use a LOINC code to identify the instrument/screen name or panel/section title to indicate the kind of assessment."

* effective[x] 1..1 
* effective[x] only dateTime or Period
* effective[x] ^short = "Clinical relevant time for an assessment such as post-acute care observations performed with structured evaluation tools is the time the evaluation occurs, i.e., when the clinician obtains the answers entered in the tool. However, the only timing available may be when then tool is completed by the clinician. That timing is generally documented as a point in time (dateTime)."
* effective[x] ^definition = "Clinical relevant time for an assessment such as post-acute care observations performed with structured evaluation tools is the time the evaluation occurs, i.e., when the clinician obtains the answers entered in the tool. However, the only timing available may be when then tool is completed by the clinician. That timing is generally documented as a point in time (dateTime)."
* effective[x] ^comment = "The use of effective[x] and dateTime versus Period is subject to implementer workflow and needs.  In most situations, an observation is considered as a point in time, even if the assessment occurred over a period of time.  Period is included in this implementation guide to provide additional flexibility for specific use cases.  However, it is expected most observations will be recorded using DateTime.  Furthermore, any retrieval of information should return the relevant if DateTime is requested, even if the original observation was recorded as a period.  Some implementers may choose to use additional functions in there retrieves to 'normalize' intervals, as is done in Clinical Quality Language (CQL)."

* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."
* performer 1..* 
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)

* value[x] 0..0
* component 0..0

* hasMember only Reference(PFESingleObservation)
* hasMember MS
* hasMember ^short = "Each post-acute care observation in the collection. May also be another collection to support nested sections."

* derivedFrom only Reference(USCoreQuestionnaireResponse or USCoreSimpleObservationProfile)
* derivedFrom MS
* derivedFrom ^short = "Should point back to the QuestionnaireResponse that this resource is derived from."


---

// File: input/fsh/PFEConditionEncounterDiagnosis.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFEConditionEncounterDiagnosis
Parent:         USCoreConditionEncounterDiagnosisProfile
Id:             pfe-condition-encounter-diagnosis
Title:          "Personal Functioning and Engagement Condition Encounter Diagnosis Profile"
Description:    "An exchange of post-acute care condition encounter diagnosis for a patient. This profile is used for exchanging a condition encounter diagnosis."

* asserter MS
* bodySite MS

---

// File: input/fsh/PFEConditionProblemsHealthConcerns.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFEConditionProblemsHealthConcerns
Parent:         USCoreConditionProblemsHealthConcernsProfile
Id:             pfe-condition-problems-health-concerns
Title:          "Personal Functioning and Engagement Condition Problems and Health Concerns Profile"
Description:    "An exchange of post-acute care condition, problem, or health concern for a patient. This profile is used for exchanging a problem list item or a health concern."

* asserter MS
* bodySite MS

---

// File: input/fsh/PFEDiagnosticReportNoteExchange.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFEDiagnosticReportNoteExchange        
Parent:         USCoreDiagnosticReportProfileNoteExchange         
Id:             pfe-diagnostic-report-note-exchange
Title:          "Personal Functioning and Engagement Diagnostic Report Note Exchange Profile"
Description:    "An exchange of post-acute care diagonistic report notes for a patient. This profile is used for exchanging diagnostic report notes, as opposed to laboratory notes."

* basedOn MS
* conclusion MS
* conclusionCode MS









---

// File: input/fsh/PFEGoal.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFEGoal
Parent:         USCoreGoalProfile
Id:             pfe-goal
Title:          "Personal Functioning and Engagement Goal Profile"
Description:    "An exchange of post-acute care goal for a patient. This profile is used for exchanging a personal functioning and engagement goal."

* achievementStatus MS
* achievementStatus from GoalAchievementStatus (extensible)

* note MS
* addresses MS

---

// File: input/fsh/PFENarrativeHistoryOfStatus.fsh

Profile:        PFENarrativeHistoryOfStatus
Parent:         USCoreDiagnosticReport
Id:             pfe-narrative-history-of-status
Title:          "Personal Functioning and Engagement Narrative History of Status"
Description:    "An exchange of a narrative summary regarding the most recent prior status immediately preceding the current admission, illness, or exacerbation for a patient. The use of this profile is encouraged in the absence of formal prior level assessments. For formal assessments conducted with for example, an assessment instrument, use the [collection](StructureDefinition-pfe-collection.html) and [single observation](StructureDefinition-pfe-observation-single.html) profiles defined in this IG to capture assessment data."

* extension contains ObservationEventLocation named event-location 0..1 MS
* extension[event-location] ^short = "An extension to indicate where the documented information was collected."
* extension[event-location] ^definition = "The principal physical location where the documented information was collected."
* extension contains AssistanceRequired named assistance-required 0..1 MS
* extension[assistance-required] ^short = "An extension to indicate the level of assistance required for a patient during an assessment."

* status MS
* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."

* category MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open

* category 1.. MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^requirements = "To identify that this narrative note is related to personal functioning and engagement and optionally to identify the domain(s) it falls under. These narratives are not expected to have a US Core DiagnosticReport Category."

* category[us-core] 0..* MS
* category[us-core] from http://hl7.org/fhir/us/core/ValueSet/us-core-diagnosticreport-category (required)
* category[us-core] ^requirements = "Used to identify the category of personal functioning and engagement observation."

* category contains PFEDomain 0..* MS
* category[PFEDomain] from PFECategoryVS (required)
* category[PFEDomain] ^requirements = "Indicates the personal functioning and engagement domain(s) that this observation is related to."

* code ^short = "US Core Report Code"
* code ^definition = "The test, panel, report, or note that was ordered."

* effective[x] only dateTime or Period
* effective[x] 1..1 MS
* effective[x] ^short = "Diagnostically relevant time (typically the time of the procedure)"
* effective[x] ^type.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* effective[x] ^type.extension.valueBoolean = true
* effective[x] ^condition = "us-core-10"

* performer 1..*
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."

* presentedForm 1..*
* presentedForm ^short = "The narrative text describing the patient's history of status."


Invariant: us-core-10
Description: "effective[x] SHALL be present if the status is 'partial', 'preliminary', 'final', 'amended', 'corrected' or 'appended'"
Severity: #error
Expression: "(status='partial' or status='preliminary' or status='final' or status='amended' or status='corrected' or status='appended' ) implies effective.exists()"

---

// File: input/fsh/PFENutritionOrder.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFENutritionOrder
Parent:         NutritionOrder
Id:             pfe-nutrition-order
Title:          "Personal Functioning and Engagement Nutrition Order Profile"
Description:    "An exchange of post-acute care nutrition order for a patient. This profile is used for exchanging a personal functioning and engagement nutrition order for oral diet, supplement, or enteral formula."

//top level data elements
* encounter MS
* orderer MS
* allergyIntolerance 1..*
* foodPreferenceModifier MS
* excludeFoodModifier MS

//oral diet data elements
* oralDiet MS
* oralDiet.type MS
* oralDiet.nutrient MS
* oralDiet.nutrient.modifier MS 
* oralDiet.nutrient.amount MS
* oralDiet.texture MS
* oralDiet.texture.modifier MS
* oralDiet.texture.foodType MS
* oralDiet.fluidConsistencyType MS
* oralDiet.instruction MS

//supplement data elements
* supplement MS
* supplement.type MS
* supplement.schedule MS
* supplement.quantity MS
* supplement.instruction MS

//enteral formula data elements
* enteralFormula MS
* enteralFormula.baseFormulaType MS
* enteralFormula.additiveType MS
* enteralFormula.caloricDensity MS
* enteralFormula.routeofAdministration MS
* enteralFormula.administration MS
* enteralFormula.administration.schedule MS
* enteralFormula.administration.quantity MS
* enteralFormula.administration.rate[x] MS
* enteralFormula.administrationInstruction MS

---

// File: input/fsh/PFEServiceRequest.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFEServiceRequest
Parent:         USCoreServiceRequestProfile
Id:             pfe-service-request
Title:          "Personal Functioning and Engagement Service Request Profile"
Description:    "An exchange of post-acute care service request for a patient. This profile is used for exchanging service requests."

* reasonReference MS
* orderDetail MS
* note MS


---

// File: input/fsh/PFESingleObservation.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        PFESingleObservation
Parent:         USCoreSimpleObservationProfile
Id:             pfe-observation-single
Title:          "Personal Functioning and Engagement Single Observation"
Description:    "An exchange of post-acute care observation for a patient. This profile is used for exchanging an observation for a single question generally included in a structured resource (e.g., assessment tool, instrument, or screen)."

* extension contains 
	ObservationEventLocation named event-location 0..1 MS and
	DevicePatientUsed named device-use 0..* MS
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension[device-use] ^short = "An extension to indicate a record of assistive device usage by a patient during an assessment."

* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."

* category MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^requirements = "To identify that observation is derived from a questionnaire, is related to personal functioning and engagement, and optionally to identify the domain(s) it falls under."

* category contains
	survey 0..1 MS and 
	PFEDomain 0..* MS

* category[us-core] from PFEUSCoreCategoryVS

* category[survey] from PFESurveyCategoryVS 
* category[survey] ^requirements = "Indicates the personal functioning and engagement observation is of type survey"

* category[PFEDomain] from PFECategoryVS (required)
* category[PFEDomain] ^requirements = "Indicates the personal functioning and engagement domain(s) that this observation is related to."

* code ^short = "For PFE Assessments, should include a LOINC code and text for the question or concept name."
* category ^requirements = "This code should be included in the Value Set associated with the selected PFE category ICF domain for this observation."

* effective[x] 1..1 
* effective[x] only dateTime

* performer 1..* 
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."

* value[x] ^short = "Whenever possible should use the CodeableConcept datatype to provide a suitable code to define the concept for the observation data. As for values like an assessment score or roll-up value, the datatype for this element should be determined by Observation.code. However, for values that are ordinal, may use the CodeableConcept datatype along with the Ordinal Value Extension."

* derivedFrom ^short = "Should point back to the QuestionnaireResponse that this resource is derived from."
* derivedFrom only Reference(USCoreQuestionnaireResponse or USCoreSimpleObservationProfile)

* hasMember 0..0


---

// File: input/fsh/PFEUseOfDevice.fsh

Alias:  DVT = https://www.hl7.org/fhir/valueset-device-nametype.html
Alias: ObservationLocation = http://hl7.org/fhir/StructureDefinition/event-location

Profile:        PFEUseOfDevice
Parent:         DeviceUseStatement
Id:             pfe-use-of-device
Title:          "Personal Functioning and Engagement Use of Device"
Description:    "A record of an assistive device (e.g., eyeglasses or hearing aid) being used by a patient during a post-acute care observation. This profile based on the DeviceUseStatement resource provides a way to include information about device usage during an assessment."
* subject 1..1
* subject only Reference(USCorePatient)
* device ^short = "The description of the device that the patient used."
* bodySite ^requirements = "Knowing where the device is targeted is important for tracking if multiple sites are possible. If more information than just a code is required, use the extension http://hl7.org/fhir/R4/extension-bodysite."


---

// File: input/fsh/SearchParameter-Condition-bodySite.fsh

Instance: Condition-bodySite
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/Condition-bodySite"
* version = "1.9.1"
* name = "ConditionBodySiteSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select Conditions with the specified BodySite"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #Condition
* type = #string
* expression = "Condition.bodySite"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-Condition-code.fsh

Instance: Condition-code
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/Condition-code"
* version = "1.9.1"
* name = "ConditionCodeSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select Conditions with the specified code"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #Condition
* type = #string
* expression = "Condition.code"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-Condition-identifier.fsh

Instance: Condition-identifier
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/Condition-identifier"
* version = "1.9.1"
* name = "ConditionIdentifierSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select Conditions with the specified identifier"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #Condition
* type = #string
* expression = "Condition.identifier"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-Condition-recordedDate.fsh

Instance: Condition-recordedDate
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/Condition-recordedDate"
* version = "1.9.1"
* name = "ConditionRecordedDateSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select Conditions with the specified recordedDate"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #Condition
* type = #string
* expression = "Condition.recordedDate"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-Goal-achievementStatus.fsh

Instance: Goal-achievementStatus
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/Goal-achievementStatus"
* version = "1.9.1"
* name = "GoalAachievementStatusSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select Goals with the specified achievementStatus"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #Goal
* type = #string
* expression = "Goal.achievementStatus"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-Goal-addresses.fsh

Instance: Goal-addresses
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/Goal-addresses"
* version = "1.9.1"
* name = "GoalAddressesSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select Goals with the specified addresses"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #Goal
* type = #string
* expression = "Goal.addresses"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-Goal-identifier.fsh

Instance: Goal-identifier
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/Goal-identifier"
* version = "1.9.1"
* name = "GoalidentifierSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select Goals with the specified identifier"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #Goal
* type = #string
* expression = "Goal.identifier"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-NutritionOrder-encounter.fsh

Instance: NutritionOrder-encounter
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/NutritionOrder-encounter"
* version = "1.9.1"
* name = "NutritionOrderEncounterSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select NutritionOrders with the specified encounter"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #NutritionOrder
* type = #string
* expression = "NutritionOrder.encounter"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-NutritionOrder-identifier.fsh

Instance: NutritionOrder-identifier
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/NutritionOrder-identifier"
* version = "1.9.1"
* name = "NutritionOrderidentifierSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select NutritionOrders with the specified identifier"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #NutritionOrder
* type = #string
* expression = "NutritionOrder.identifier"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-NutritionOrder-orderer.fsh

Instance: NutritionOrder-orderer
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/NutritionOrder-orderer"
* version = "1.9.1"
* name = "NutritionOrderOrdererSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select NutritionOrders with the specified orderer"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #NutritionOrder
* type = #string
* expression = "NutritionOrder.orderer"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-NutritionOrder-subject.fsh

Instance: NutritionOrder-subject
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/NutritionOrder-subject"
* version = "1.9.1"
* name = "NutritionOrderSubjectSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select NutritionOrders with the specified subject"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #NutritionOrder
* type = #string
* expression = "NutritionOrder.patient"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-ServiceRequest-code.fsh

Instance: ServiceRequest-code
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/ServiceRequest-code"
* version = "1.9.1"
* name = "ServiceRequestCodeSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select ServiceRequests with the specified code"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #ServiceRequest
* type = #string
* expression = "ServiceRequest.code"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-ServiceRequest-identifier.fsh

Instance: ServiceRequest-identifier
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/ServiceRequest-identifier"
* version = "1.9.1"
* name = "ServiceRequestIdentifierSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select ServiceRequests with the specified identifier"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #ServiceRequest
* type = #string
* expression = "ServiceRequest.identifier"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/SearchParameter-ServiceRequest-reasonReference.fsh

Instance: ServiceRequest-reasonReference
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/pacio-pfe/SearchParameter/ServiceRequest-reasonReference"
* version = "1.9.1"
* name = "ServiceRequestReasonReferenceSearchParameter"
* status = #active
* date = "2024-09-01T18:06:11+00:00"
* publisher = "HL7 International / Patient Care"
* contact.name = "HL7 International / Patient Care"
* description = "Select ServiceRequests with the specified reasonReference"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #name
* base = #ServiceRequest
* type = #string
* expression = "ServiceRequest.reasonReference"
* xpathUsage = #normal
* multipleOr = true
* multipleAnd = true
* modifier[0] = #exact
* modifier[+] = #contains

---

// File: input/fsh/ValueSets.fsh

ValueSet: PFEUSCoreCategoryVS
Title: "Personal Functioning and Engagement US Core Value Set"
Id: pfe-us-core-category-vs
Description: "Subset of the us core categories to identify the type of PFE observation"
* ^experimental = false
* USCORECAT#functional-status "Functional Status"
* USCORECAT#cognitive-status "Cognitive Status"

ValueSet: PFESurveyCategoryVS
Title: "Personal Functioning and Engagement Survey Value Set"
Id: pfe-survey-category-vs
Description: "Used to indicate that all PFE observations of of type Survey"
* ^experimental = false
* OBSCAT#survey "Survey"

ValueSet: PFECategoryVS
Title: "Personal Functioning and Engagement Category Value Set"
Description: "This value set includes codes representing health and health-related domains into which functioning observations can be further categorized."
Id: pfe-category-vs
* ^experimental = false
* include codes from system PFECategoryCS

ValueSet: PFEExampleObservationsVS
Title: "Personal Functioning and Engagement Example Observations Value Set"
Description: "This value set includes LOINC codes that provide examples of observations within the scope of the Personal Functioning and Engagement IG."
Id: pfe-example-obs-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#101265-7 "MDS v3.0 - RAI v1.18.11 - Functional Abilities and Goals - Admission [CMS Assessment]"
* $LNC#95019-6 "Eating - usual functional ability during assessment period [CMS Assessment]"
* $LNC#79532-8 "Daily activity score [AM-PAC]"
* $LNC#99828-6 "Functional Communication Measure - Multi-Modal Functional Communication panel [ASHA NOMS]"
* $LNC#99831-0 "Frequency of conveying meaningful complex messages in low demand situations"
* $LNC#99835-1 "Functional Communication Measure - Multi-Modal Functional Communication score [ASHA NOMS]"
* $LNC#91375-6 "Hearing threshold Ear - left --250 Hz"

ValueSet: PFESensoryFunctionsAndPainClinicalTestVS
Title: "Personal Functioning and Engagement Sensory Functions and Pain Clinical Test Value Set"
Description: "This value set includes LOINC codes that represent clinicl test observations regarding individual's sensory functioning and pain."
Id: pfe-sensory-functions-pain-clinical-test-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#89016-0
* $LNC#89017-8
* $LNC#89018-6
* $LNC#89019-4
* $LNC#89020-2
* $LNC#89021-0
* $LNC#89022-8
* $LNC#89023-6
* $LNC#89024-4
* $LNC#89025-1
* $LNC#89026-9
* $LNC#89027-7
* $LNC#89028-5
* $LNC#89029-3
* $LNC#91372-3
* $LNC#91373-1
* $LNC#91374-9
* $LNC#91375-6
* $LNC#91376-4
* $LNC#91377-2
* $LNC#91378-0
* $LNC#91379-8

ValueSet: PFECommunicationVS
Title: "Personal Functioning and Engagement Communication Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's communication."
Id: pfe-communication-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#54602-8
* $LNC#83250-1
* $LNC#87503-9
* $LNC#95737-3
* $LNC#95740-7
* $LNC#99829-4
* $LNC#99830-2
* $LNC#99831-0
* $LNC#99832-8
* $LNC#99833-6
* $LNC#99834-4
* $LNC#99835-1

ValueSet: PFEDomesticLifeVS
Title: "Personal Functioning and Engagement Domestic Life Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's domestic life."
Id: pfe-domestic-life-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#94878-6
* $LNC#94963-6
* $LNC#94964-4
* $LNC#94965-1
* $LNC#94966-9
* $LNC#94967-7
* $LNC#94968-5
* $LNC#94969-3
* $LNC#94970-1
* $LNC#94971-9
* $LNC#94972-7
* $LNC#94973-5
* $LNC#94974-3
* $LNC#94976-8
* $LNC#94977-6
* $LNC#94978-4
* $LNC#94979-2
* $LNC#94980-0
* $LNC#94981-8
* $LNC#94982-6
* $LNC#94983-4
* $LNC#94984-2
* $LNC#94985-9
* $LNC#94986-7
* $LNC#94987-5

ValueSet: PFEFunctionsOfDigestiveMetabolicEndocrineSystemsVS
Title: "Personal Functioning and Engagement Functions Of Digestive, Metabolic, and Endocrine Systems Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's digestive, metabolic, and endocrine systems functioning."
Id: pfe-functions-of-digestive-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#46587-2
* $LNC#54773-7
* $LNC#83242-8
* $LNC#86471-0
* $LNC#86624-4
* $LNC#86677-2
* $LNC#95736-5
* $LNC#95946-0
* $LNC#99853-4
* $LNC#99854-2
* $LNC#99855-9
* $LNC#99856-7
* $LNC#99857-5
* $LNC#99858-3

ValueSet: PFEFunctionsOfSkinAndRelatedStructuresVS
Title: "Personal Functioning and Engagement Functions of Skin and Related Structures Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's skin and related structures functioning."
Id: pfe-skin-functions-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#46536-9
* $LNC#54884-2
* $LNC#54886-7
* $LNC#54887-5
* $LNC#54890-9
* $LNC#54893-3
* $LNC#54894-1
* $LNC#54946-9
* $LNC#54947-7
* $LNC#54950-1
* $LNC#54951-9
* $LNC#54970-9
* $LNC#55124-2
* $LNC#55125-9
* $LNC#55126-7
* $LNC#57222-2
* $LNC#57231-3
* $LNC#57232-1
* $LNC#57233-9
* $LNC#57234-7
* $LNC#57235-4
* $LNC#57236-2
* $LNC#57280-0
* $LNC#58214-8
* $LNC#85918-1
* $LNC#86708-5
* $LNC#86748-1
* $LNC#88494-0
* $LNC#88696-0

ValueSet: PFEGenitourinaryReproductiveFunctionsVS
Title: "Personal Functioning and Engagement Genitourinary and Reproductive Functions Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's genitourinary and reproductive functioning."
Id: pfe-genitourinary-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#46552-6
* $LNC#46553-4
* $LNC#83238-6
* $LNC#95735-7

ValueSet: PFELearningAndApplyingKnowledgeVS
Title: "Personal Functioning and Engagement Learning and Applying Knowledge Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's ability to learn and apply knowledge."
Id: pfe-learning-and-applying-knowledge-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#93157-6

ValueSet: PFEMentalFunctionsVS
Title: "Personal Functioning and Engagement Mental Functions Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's mental functioning."
Id: pfe-mental-functions-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#11332-4
* $LNC#44250-9
* $LNC#44255-8
* $LNC#45482-7
* $LNC#46473-5
* $LNC#46589-8
* $LNC#46592-2
* $LNC#52731-7
* $LNC#52732-5
* $LNC#52733-3
* $LNC#52735-8
* $LNC#52736-6
* $LNC#52737-4
* $LNC#54597-0
* $LNC#54605-1
* $LNC#54609-3
* $LNC#54614-3
* $LNC#54615-0
* $LNC#54616-8
* $LNC#54617-6
* $LNC#54624-2
* $LNC#54628-3
* $LNC#54629-1
* $LNC#54632-5
* $LNC#54634-1
* $LNC#54636-6
* $LNC#54637-4
* $LNC#54638-2
* $LNC#54639-0
* $LNC#54640-8
* $LNC#54641-6
* $LNC#54642-4
* $LNC#54643-2
* $LNC#54644-0
* $LNC#54645-7
* $LNC#54646-5
* $LNC#54647-3
* $LNC#54648-1
* $LNC#54649-9
* $LNC#54650-7
* $LNC#54651-5
* $LNC#54652-3
* $LNC#54653-1
* $LNC#54654-9
* $LNC#54658-0
* $LNC#54659-8
* $LNC#54660-6
* $LNC#54661-4
* $LNC#54662-2
* $LNC#54663-0
* $LNC#54664-8
* $LNC#54665-5
* $LNC#54666-3
* $LNC#54667-1
* $LNC#54668-9
* $LNC#54669-7
* $LNC#54670-5
* $LNC#54671-3
* $LNC#54672-1
* $LNC#54673-9
* $LNC#54674-7
* $LNC#54675-4
* $LNC#54676-2
* $LNC#54677-0
* $LNC#54682-0
* $LNC#54683-8
* $LNC#54684-6
* $LNC#54685-3
* $LNC#54686-1
* $LNC#54687-9
* $LNC#54688-7
* $LNC#54689-5
* $LNC#54690-3
* $LNC#54691-1
* $LNC#54692-9
* $LNC#54693-7
* $LNC#54694-5
* $LNC#54695-2
* $LNC#54696-0
* $LNC#54904-8
* $LNC#57242-0
* $LNC#58104-1
* $LNC#72106-8
* $LNC#72172-0
* $LNC#83248-5
* $LNC#85073-5
* $LNC#85629-4
* $LNC#85631-0
* $LNC#85634-4
* $LNC#85651-8
* $LNC#86495-9
* $LNC#86527-9
* $LNC#86597-2
* $LNC#93159-2
* $LNC#93414-1
* $LNC#95743-1
* $LNC#95812-4
* $LNC#95813-2
* $LNC#95814-0
* $LNC#95815-7
* $LNC#95855-3
* $LNC#95856-1
* $LNC#95857-9
* $LNC#95858-7

ValueSet: PFEMobilityVS
Title: "Personal Functioning and Engagement Mobility Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's mobility."
Id: pfe-mobility-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#10158-4 // Found in the self-care and mobility Value Sets
* $LNC#45588-1
* $LNC#45589-9
* $LNC#45590-7
* $LNC#45591-5
* $LNC#45592-3
* $LNC#45593-1
* $LNC#45594-9
* $LNC#45595-6
* $LNC#45596-4
* $LNC#45597-2
* $LNC#45598-0
* $LNC#45599-8
* $LNC#54749-7
* $LNC#54750-5
* $LNC#54751-3
* $LNC#54752-1
* $LNC#54753-9
* $LNC#57244-6
* $LNC#57246-1
* $LNC#57247-9
* $LNC#83188-3
* $LNC#83190-9
* $LNC#83192-5
* $LNC#83194-1
* $LNC#83196-6
* $LNC#83198-2
* $LNC#83200-6
* $LNC#83202-2
* $LNC#83204-8
* $LNC#83206-3
* $LNC#83208-9
* $LNC#83210-5
* $LNC#83212-1
* $LNC#83214-7
* $LNC#83216-2
* $LNC#83218-8
* $LNC#83235-2
* $LNC#85071-9
* $LNC#85072-7
* $LNC#85926-4
* $LNC#89376-8
* $LNC#89378-4
* $LNC#89380-0
* $LNC#89382-6
* $LNC#89384-2
* $LNC#89386-7
* $LNC#89393-3
* $LNC#89395-8
* $LNC#89399-0
* $LNC#89403-0
* $LNC#89413-9
* $LNC#89415-4
* $LNC#89417-0
* $LNC#89419-6
* $LNC#89421-2
* $LNC#94877-8
* $LNC#94932-1
* $LNC#94940-4
* $LNC#94941-2
* $LNC#94942-0
* $LNC#94943-8
* $LNC#94944-6
* $LNC#94945-3
* $LNC#94946-1
* $LNC#94947-9
* $LNC#94948-7
* $LNC#94949-5
* $LNC#94950-3
* $LNC#94951-1
* $LNC#94952-9
* $LNC#94953-7
* $LNC#94954-5
* $LNC#94955-2
* $LNC#94956-0
* $LNC#94957-8
* $LNC#94958-6
* $LNC#94959-4
* $LNC#94960-2
* $LNC#94961-0
* $LNC#94962-8
* $LNC#94989-1
* $LNC#94990-9
* $LNC#94991-7
* $LNC#94992-5
* $LNC#94993-3
* $LNC#94994-1
* $LNC#94995-8
* $LNC#94996-6
* $LNC#94997-4
* $LNC#94998-2
* $LNC#94999-0
* $LNC#95000-6
* $LNC#95001-4
* $LNC#95002-2
* $LNC#95003-0
* $LNC#95004-8
* $LNC#95005-5
* $LNC#95006-3
* $LNC#95007-1
* $LNC#95008-9
* $LNC#95009-7
* $LNC#95010-5
* $LNC#95011-3

ValueSet: PFENeuromusculoskeletalMovementRelatedFunctionsVS
Title: "Personal Functioning and Engagement Neuromusculoskeletal and Movement Related Functions Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's neuromusculoskeletal and movement related functioning."
Id: pfe-neuromusculoskeletal-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#92850-7
* $LNC#92851-5

ValueSet: PFEBodyStructuresVS
Title: "Personal Functioning and Engagement Body Structures Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's body structures."
Id: pfe-body-structures-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#3137-7
* $LNC#3141-9
* $LNC#54863-6
* $LNC#86678-0

ValueSet: PFESelfCareVS
Title: "Personal Functioning and Engagement Self-Care Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's ability to perform self-care."
Id: pfe-self-care-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#10158-4 // Found in the self-care and mobility Value Sets
* $LNC#45600-4
* $LNC#45601-2
* $LNC#45602-0
* $LNC#45603-8
* $LNC#45604-6
* $LNC#45605-3
* $LNC#45606-1
* $LNC#45607-9
* $LNC#45608-7
* $LNC#45609-5
* $LNC#45613-7
* $LNC#46466-9
* $LNC#46595-5
* $LNC#46597-1
* $LNC#46599-7
* $LNC#54767-9
* $LNC#54768-7
* $LNC#54769-5
* $LNC#55123-4
* $LNC#57243-8
* $LNC#57245-3
* $LNC#57248-7
* $LNC#71444-4
* $LNC#71445-1
* $LNC#83220-4
* $LNC#83222-0
* $LNC#83224-6
* $LNC#83226-1
* $LNC#83228-7
* $LNC#83230-3
* $LNC#83232-9
* $LNC#85070-1
* $LNC#85652-6
* $LNC#86681-4
* $LNC#86683-0
* $LNC#86684-8
* $LNC#86687-1
* $LNC#88695-2
* $LNC#89388-3
* $LNC#89397-4
* $LNC#89401-4
* $LNC#89405-5
* $LNC#89407-1
* $LNC#89410-5
* $LNC#91555-3
* $LNC#93178-2
* $LNC#94933-9
* $LNC#94934-7
* $LNC#94935-4
* $LNC#94936-2
* $LNC#94937-0
* $LNC#94938-8
* $LNC#94939-6
* $LNC#95012-1
* $LNC#95013-9
* $LNC#95014-7
* $LNC#95015-4
* $LNC#95016-2
* $LNC#95017-0
* $LNC#95018-8
* $LNC#95019-6
* $LNC#95043-6

ValueSet: PFESensoryFunctionsAndPainVS
Title: "Personal Functioning and Engagement Sensory Functions and Pain Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's sensory functioning and pain."
Id: pfe-sensory-functions-pain-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#57215-6
* $LNC#67235-2
* $LNC#67242-8
* $LNC#67467-1
* $LNC#89016-0
* $LNC#89017-8
* $LNC#89018-6
* $LNC#89019-4
* $LNC#89020-2
* $LNC#89021-0
* $LNC#89022-8
* $LNC#89023-6
* $LNC#89024-4
* $LNC#89025-1
* $LNC#89026-9
* $LNC#89027-7
* $LNC#89028-5
* $LNC#89029-3
* $LNC#91372-3
* $LNC#91373-1
* $LNC#91374-9
* $LNC#91375-6
* $LNC#91376-4
* $LNC#91377-2
* $LNC#91378-0
* $LNC#91379-8
* $LNC#93309-3
* $LNC#93310-1
* $LNC#95744-9
* $LNC#95745-6
* $LNC#98419-5
* $LNC#98420-3
* $LNC#98421-1
* $LNC#98422-9
* $LNC#98423-7
* $LNC#98424-5
* $LNC#98425-2
* $LNC#98426-0
* $LNC#98427-8
* $LNC#98428-6
* $LNC#98429-4
* $LNC#98430-2
* $LNC#98431-0
* $LNC#98432-8
* $LNC#98481-5
* $LNC#98482-3

ValueSet: PFEStructuresInvolvedInVoiceAndSpeechVS
Title: "Personal Functioning and Engagement Structures Involved in Voice and Speech Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's structures involved in voice and speech."
Id: pfe-structures-voice-and-speech-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#86706-9

ValueSet: PFEVoiceAndSpeechFunctionsVS
Title: "Personal Functioning and Engagement Voice and Speech Functions Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding individual's voice and speech functioning."
Id: pfe-voice-and-speech-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#54600-2

ValueSet: PFEProductsAndTechnologyVS
Title: "Personal Functioning and Engagement Products and Technology Value Set"
Description: "This value set includes LOINC codes that represent patient observations regarding the products and technology that affect their lives."
Id: pfe-products-and-technology-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#54599-6
* $LNC#54604-4
* $LNC#83234-5
* $LNC#83271-7
* $LNC#83272-5
* $LNC#86602-0
* $LNC#89408-9
* $LNC#89411-3
* $LNC#94879-4
* $LNC#94880-2
* $LNC#94881-0
* $LNC#94882-8
* $LNC#94883-6
* $LNC#94884-4
* $LNC#94885-1
* $LNC#94886-9
* $LNC#94887-7
* $LNC#94888-5
* $LNC#94889-3
* $LNC#94890-1
* $LNC#94891-9
* $LNC#94892-7
* $LNC#94893-5
* $LNC#94894-3
* $LNC#94895-0
* $LNC#94896-8
* $LNC#94897-6
* $LNC#94898-4
* $LNC#94899-2
* $LNC#94900-8
* $LNC#94901-6
* $LNC#94902-4
* $LNC#94903-2
* $LNC#94904-0
* $LNC#94905-7
* $LNC#94906-5
* $LNC#94907-3
* $LNC#94908-1
* $LNC#94909-9
* $LNC#94910-7
* $LNC#95021-2
* $LNC#95022-0
* $LNC#95042-8
* $LNC#95738-1
* $LNC#95739-9

ValueSet: PFEPanelVS
Title: "Personal Functioning and Engagement Panel Value Set"
Description: "This value set includes LOINC panel codes that represent headers and sub-headers in CMS assessments and are tied to PFE collections."
Id: pfe-panel-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#46008-9
* $LNC#52491-8
* $LNC#52493-4
* $LNC#54510-3
* $LNC#54514-5
* $LNC#54515-2
* $LNC#54516-0
* $LNC#54517-8
* $LNC#54524-4
* $LNC#54527-7
* $LNC#54530-1
* $LNC#54567-3
* $LNC#54568-1
* $LNC#54635-8
* $LNC#54657-2
* $LNC#58052-2
* $LNC#72107-6
* $LNC#72133-2
* $LNC#83233-7
* $LNC#83239-4
* $LNC#83246-9
* $LNC#83254-3
* $LNC#85642-7
* $LNC#85665-8
* $LNC#85667-4
* $LNC#86585-7
* $LNC#86833-1
* $LNC#86843-0
* $LNC#86844-8
* $LNC#86880-2
* $LNC#86881-0
* $LNC#86891-9
* $LNC#87501-3
* $LNC#87502-1
* $LNC#88330-6
* $LNC#88331-4
* $LNC#88485-8
* $LNC#88486-6
* $LNC#88961-8
* $LNC#89474-1
* $LNC#89475-8
* $LNC#89477-4
* $LNC#89479-0
* $LNC#90540-6
* $LNC#90541-4
* $LNC#92908-3
* $LNC#93180-8
* $LNC#93417-4
* $LNC#94849-7
* $LNC#94850-5
* $LNC#94851-3
* $LNC#94852-1
* $LNC#94876-0
* $LNC#95020-4
* $LNC#95023-8
* $LNC#95024-6
* $LNC#95025-3
* $LNC#95026-1
* $LNC#95027-9
* $LNC#95028-7
* $LNC#95029-5
* $LNC#95030-3
* $LNC#95031-1
* $LNC#95131-9
* $LNC#95732-4
* $LNC#95734-0
* $LNC#95741-5
* $LNC#95742-3
* $LNC#95816-5
* $LNC#95852-0
* $LNC#95859-5
* $LNC#95861-1
* $LNC#98480-7
* $LNC#99149-7
* $LNC#99150-5


ValueSet: PFEGoalsMobilityVS
Title: "Personal Functioning and Engagement Goals Mobility Value Set"
Description: "This value set includes LOINC codes that represent patient goals regarding individual's mobility."
Id: pfe-goals-mobility-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#83187-5
* $LNC#83189-1
* $LNC#83191-7
* $LNC#83193-3
* $LNC#83195-8
* $LNC#83197-4
* $LNC#83199-0
* $LNC#83201-4
* $LNC#83203-0
* $LNC#83205-5
* $LNC#83207-1
* $LNC#83209-7
* $LNC#83211-3
* $LNC#83213-9
* $LNC#83215-4
* $LNC#83217-0
* $LNC#83236-0
* $LNC#85927-2
* $LNC#89375-0
* $LNC#89377-6
* $LNC#89379-2
* $LNC#89381-8
* $LNC#89383-4
* $LNC#89385-9
* $LNC#89390-9
* $LNC#89392-5
* $LNC#89394-1
* $LNC#89398-2
* $LNC#89402-2
* $LNC#89412-1
* $LNC#89414-7
* $LNC#89416-2
* $LNC#89418-8
* $LNC#89420-4
* $LNC#95862-9

ValueSet: PFEGoalsSelfCareVS
Title: "Personal Functioning and Engagement Goals Self-Care Value Set"
Description: "This value set includes LOINC codes that represent patient goals regarding individual's ability to perform self-care."
Id: pfe-goals-self-care-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#83227-9
* $LNC#83229-5
* $LNC#83231-1
* $LNC#85653-4
* $LNC#89387-5
* $LNC#89389-1
* $LNC#89396-6
* $LNC#89400-6
* $LNC#89404-8
* $LNC#89406-3
* $LNC#89409-7
* $LNC#96098-9


ValueSet: PFEGoalsPanelVS
Title: "Personal Functioning and Engagement Goals Panel Value Set"
Description: "This value set includes LOINC panel codes that are goals represent headers and sub-headers in CMS assessments and are tied to PFE collections."
Id: pfe-goals-panel-vs
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $LNC#85056-0
* $LNC#85661-7
* $LNC#89476-6
* $LNC#89478-2
* $LNC#95860-3

---

// File: input/fsh/examples/Cognitive-Device.instances.fsh



Instance: PFEIG-CMS-Device-HearingAid
InstanceOf: Device
Description: "Example Device: Hearing aid"
* deviceName.name = "Hearing aid"
* deviceName.type = #user-friendly-name


Instance: PFEIG-CMS-Device-Eyeglasses
InstanceOf: Device
Description: "Example Device: Eyeglasses"
* deviceName.name = "Eyeglasses"
* deviceName.type = #user-friendly-name


---

// File: input/fsh/examples/Cognitive-NarrativeHistory.instances.fsh

Alias: $loinc = http://loinc.org
Alias: $pfe-functioning-cs = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-functioning-cs

Instance: PFEIG-Narrative-History-Cognitive-Status-1
InstanceOf: PFENarrativeHistoryOfStatus
Description: "Example PFE Narrative History of Status: History of Cognitive Function Narrative"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-narrative-history-of-status"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/event-location"
* extension[=].valueReference = Reference(Location/PFEIG-provider-org-loc-01)
* extension[+].url = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/assistance-required"
* extension[=].valueCodeableConcept = $loinc#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."
* status = #final
* category[us-core] = $loinc#LP7839-6 "Pathology"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* code = $loinc#11332-4 "History of Cognitive Function Narrative"
* subject = Reference(Patient/PFEIG-patientBSJ1)
* effectivePeriod.start = "2019-07-01"
* effectivePeriod.end = "2020-11-30"
* performer = Reference(PractitionerRole/PFEIG-provider-role-pcp)
* presentedForm.data = "UHJpb3IgdG8gdGhlIGN1cnJlbnQgYWRtaXNzaW9uLCBwYXRpZW50IHdhcyBhbGVydCBhbmQgb3JpZW50ZWQgeCAzLiBTaGUgd2FzIGluZGVwZW5kZW50IGluIGhvdXNlaG9sZCBmaW5hbmNlcywgc29jaWFsIGFuZCBjb21tdW5pdHkgYWN0aXZpdGllcywgY29laGVyZW50IGFuZCBhcHByb3ByaWF0ZSBjb21tdW5pY2F0aW9uLiBTaGUgd2FzIGFibGUgdG8gaW5kZXBlbmRlbnRseSBzZWxlY3QgYXBwcm9wcmlhdGUgYXR0aXJlIGZvciBsb2NhdGlvbiBhbmQgd2VhdGhlci4="
* presentedForm.contentType = #text/plain

---

// File: input/fsh/examples/Cognitive-PFECollection.instances.fsh


Alias: PFEDOMAINCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs
Alias: FUNCTIONINGCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-functioning-cs
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category

Instance: PFEIG-CSC-Hospital-MOCA-1
InstanceOf: PFECollection
Description: "Example PFE Collection for hospital MOCA assessment"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[survey] = OBSCAT#survey "Survey"
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = http://loinc.org#72133-2 "Montreal Cognitive Assessment [MoCA]"
* code.text = "Montreal Cognitive Assessment [MoCA]"
* performer[+] = Reference(PFEIG-Role-SLP-JennyGlass)
* hasMember[+] = Reference(PFEIG-CSC-Hospital-MOCA-1-Ob-Question-1)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-MOCA-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)

Instance: PFEIG-CSC-Hospital-MMSE-1
InstanceOf: PFECollection
Description: "Example PFE Collection for hospital MMSE assessment"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[survey] = OBSCAT#survey "Survey"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = http://loinc.org#72107-6 "Mini-Mental State Examination [MMSE]"
* code.text = "Mini-Mental State Examination [MMSE]"
* performer[+] = Reference(PFEIG-Role-SLP-JennyGlass)
* hasMember[+] = Reference(PFEIG-CSC-Hospital-MMSE-1-Ob-Question-31)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-MMSE-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)

Instance: PFEIG-CSC-SNF-CAM-Admission-1
InstanceOf: PFECollection
Description: "Example PFE Collection for SNF CAM assessment"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[survey] = OBSCAT#survey
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = http://loinc.org#86585-7 "MDS v3.0 - RAI v1.17.2, OASIS E - Signs and symptoms of delirium (from CAM) during assessment period [CMS Assessment]"
* code.text = "MDS v3.0 - RAI v1.17.2, OASIS E - Signs and symptoms of delirium (from CAM) during assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* hasMember[+] = Reference(PFEIG-CSC-SNF-CAM-Admission-1-Ob-Question-1)
* hasMember[+] = Reference(PFEIG-CSC-SNF-CAM-Admission-1-Ob-Question-3)
* hasMember[+] = Reference(PFEIG-CSC-SNF-CAM-Admission-1-Ob-Question-5)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-CAM-Admission-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)

Instance: PFEIG-CSC-SNF-PHQ9-1
InstanceOf: PFECollection
Description: "Example PFE Collection for resident mood interview"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[survey] = OBSCAT#survey
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54635-8 "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* code.text = "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-11)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-12)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-13)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-14)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-15)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-16)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-17)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-18)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-19)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-20)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-21)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-22)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-23)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-24)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-25)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-26)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-27)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-28)
* hasMember[+] = Reference(PFEIG-CSC-SNF-PHQ9-1-Ob-Question-29)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)

Instance: PFEIG-CSC-SNF-BIMS-1
InstanceOf: PFECollection
Description: "Example PFE Collection for SNF BIMS assessment"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52491-8 "Brief interview for mental status [BIMS]"
* code.text = "Brief interview for mental status [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Temporal)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Recall)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-9)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-10)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-CSC-SNF-BIMS-1-UseOfDevice-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-CSC-SNF-BIMS-1-UseOfDevice-2)

Instance: PFEIG-CSC-SNF-BIMS-1-Recall
InstanceOf: PFECollection
Description: "Example PFE Collection for SNF BIMS assessment: recall"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52493-4 "Recall [BIMS]"
* code.text = "Recall"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-4)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-5)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-6)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-CSC-SNF-BIMS-1-UseOfDevice-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-CSC-SNF-BIMS-1-UseOfDevice-2)

Instance: PFEIG-CSC-SNF-BIMS-1-Temporal
InstanceOf: PFECollection
Description: "Example PFE Collection for SNF BIMS assessment: temporal"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54510-3 "Temporal orientation (orientation to year, month, and day) [BIMS]"
* code.text = "Temporal orientation (orientation to year, month, and day)"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-3)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-7)
* hasMember[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-8)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-CSC-SNF-BIMS-1-UseOfDevice-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-CSC-SNF-BIMS-1-UseOfDevice-2)




---

// File: input/fsh/examples/Cognitive-PFEDeviceUseStatement.instances.fsh



Instance: PFEIG-CSC-SNF-BIMS-1-UseOfDevice-2
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for hearing aid"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-HearingAid)
* recordedOn = "2020-07-11T11:30:00-05:00"
* source = Reference(PFEIG-Practitioner-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1)


Instance: PFEIG-CSC-SNF-BIMS-1-UseOfDevice-1
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for eyeglasses"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-Eyeglasses)
* recordedOn = "2020-07-11T11:30:00-05:00"
* source = Reference(PFEIG-Practitioner-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1)


---

// File: input/fsh/examples/Cognitive-PFEObservation.instances.fsh


Alias: PFEDOMAINCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs
Alias: FUNCTIONINGCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-functioning-cs
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category


Instance: PFEIG-CSC-Hospital-MOCA-1-Ob-Question-1
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Total score [MoCA]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = http://loinc.org#72172-0 "Total score [MoCA]"
* performer[+] = Reference(PFEIG-Role-SLP-JennyGlass)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-MOCA-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueQuantity.value = 18 
* valueQuantity.unit = "{score}"

Instance: PFEIG-CSC-Hospital-MMSE-1-Ob-Question-31
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Total score [MMSE]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey "Survey"
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = http://loinc.org#72106-8 "Total score [MMSE]"
* performer[+] = Reference(PFEIG-Role-SLP-JennyGlass)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-MMSE-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueQuantity.value = 20
* valueQuantity.unit = "{score}"


Instance: PFEIG-CSC-SNF-CAM-Admission-1-Ob-Question-1
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Inattention in last 7 days [CAM.CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = http://loinc.org#54628-3 "Inattention in last 7 days [CAM.CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-CAM-Admission-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA61-7 "Behavior not present"


Instance: PFEIG-CSC-SNF-CAM-Admission-1-Ob-Question-3
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Disorganized thinking in last 7 days [CAM.CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = http://loinc.org#54629-1 "Disorganized thinking in last 7 days [CAM.CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-CAM-Admission-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA61-7 "Behavior not present"


Instance: PFEIG-CSC-SNF-CAM-Admission-1-Ob-Question-5
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Acute onset mental status change [CAM.CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = http://loinc.org#54632-5 "Acute onset mental status change [CAM.CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-CAM-Admission-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-11
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Feeling tired or having little energy in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54643-2 "Feeling tired or having little energy in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-12
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Poor appetite or overeating in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54644-0 "Poor appetite or overeating in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-13
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Feeling down, depressed or hopeless in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54639-0 "Feeling down, depressed or hopeless in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-14
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Trouble falling or staying asleep, or sleeping too much in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54640-8 "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-15
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Trouble falling or staying asleep, or sleeping too much in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54641-6 "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-16
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Feeling tired or having little energy in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54642-4 "Feeling tired or having little energy in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-17
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Little interest or pleasure in doing things in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54636-6 "Little interest or pleasure in doing things in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-18
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Little interest or pleasure in doing things in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54637-4 "Little interest or pleasure in doing things in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10998-5 "2-6 days (several days)"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-19
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Feeling down, depressed or hopeless in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54638-2 "Feeling down, depressed or hopeless in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA33-6 "Yes"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-20
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54650-7 "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-21
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54649-9 "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-22
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54652-3 "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10996-9 "No response"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-23
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54651-5 "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-24
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54646-5 "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-25
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Poor appetite or overeating in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54645-7 "Poor appetite or overeating in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-26
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.presence [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54648-1 "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.presence [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA32-8 "No"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-27
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54647-3 "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueCodeableConcept = http://loinc.org#LA10997-7 "Never or 1 day"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-28
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Mood interview total severity score [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54654-9 "Mood interview total severity score [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* valueQuantity.value = 3
* valueQuantity.unit = "{score}"


Instance: PFEIG-CSC-SNF-PHQ9-1-Ob-Question-29
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54653-1 "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* performer[+] = Reference(PFEIG-Role-SLP-LunaBaskins)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-PHQ9-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-03)
* dataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason#not-asked "Not Asked"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-3
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Temporal orientation - current year [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52732-5 "Temporal orientation - current year [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA10008-3 "Missed by 1 year"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-4
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Recall - bed [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey 
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52737-4 "Recall - bed [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
// * valueCodeableConcept = http://loinc.org#LA10125-5 "Yes, after cueing \(\"a piece of furniture\"\)"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-5
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Recall - blue [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52736-6 "Recall - blue [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
// * valueCodeableConcept = http://loinc.org#LA10978-7 "Yes, after cueing (\"a color\")"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-6
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Recall - sock [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52735-8 "Recall - sock [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
// * valueCodeableConcept = http://loinc.org#LA10126-3 "Yes, after cueing (\"something to wear\")"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-7
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Temporal orientation - current day of the week [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54609-3 "Temporal orientation - current day of the week [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA9960-1 "Correct"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-8
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Temporal orientation - current month [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52733-3 "Temporal orientation - current month [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA10010-9 "Missed by 6 days to 1 month"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-9
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Repetition of three words # [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#52731-7 "Repetition of three words # [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA6404-3 "Two"


Instance: PFEIG-CSC-SNF-BIMS-1-Ob-Question-10
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Brief Interview for Mental Status - summary score [BIMS]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#cognitive-status "Cognitive Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b11 "Mental functions"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = http://loinc.org#54614-3 "Brief Interview for Mental Status - summary score [BIMS]"
* performer[+] = Reference(PFEIG-Role-SLP-HoneyJones)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-BIMS-1)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-3)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-4)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-5)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-6)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-7)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-8)
* derivedFrom[+] = Reference(PFEIG-CSC-SNF-BIMS-1-Ob-Question-9)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueQuantity.value = 9
* valueQuantity.unit = "{score}"

---

// File: input/fsh/examples/Cognitive-QuestionnaireResponse.instances.fsh

Instance: PFEIG-QResponse-Hospital-MMSE-1
InstanceOf: USCoreQuestionnaireResponseProfile
Description: "Example U.S. Core Questionnaire Response: Mini-Mental State Examination [MMSE]"
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-07-08T17:32:00-05:00"
* author = Reference(PractitionerRole/PFEIG-Role-SLP-JennyGlass)
* item.linkId = "MMSE"
* item.text = "Mini-Mental State Examination [MMSE]"
* item.item.linkId = "MMSE/ToTalScore"
* item.item.text = "MMSE Total Score"
* item.item.answer.valueInteger = 20

Instance: PFEIG-QResponse-Hospital-MOCA-1
InstanceOf: USCoreQuestionnaireResponseProfile
Description: "Example U.S. Core Questionnaire Response: Montreal Cognitive Assessment [MoCA]"
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-07-08T17:32:00-05:00"
* author = Reference(PractitionerRole/PFEIG-Role-SLP-JennyGlass)
* item.linkId = "MoCA"
* item.text = "Montreal Cognitive Assessment [MoCA]"
* item.item.linkId = "MoCA/TotalScore"
* item.item.text = "Total score [MoCA]"
* item.item.answer.valueInteger = 18

Instance: PFEIG-QResponse-SNF-BIMS-1
InstanceOf: USCoreQuestionnaireResponseProfile
Description: "Example U.S. Core Questionnaire Response: Brief interview for mental status [BIMS]"
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-07-11T11:30:00-05:00"
* author = Reference(PractitionerRole/PFEIG-Role-SLP-HoneyJones)
* item.linkId = "Section-3"
* item.text = "MDS v3.0 - RAI v1.17.2 - Cognitive patterns [CMS Assessment]"
* item.item.linkId = "Section-3/C0200-C0500"
* item.item.text = "Brief interview for mental status [BIMS]"
* item.item.item[0].linkId = "Section-3/C0200"
* item.item.item[=].text = "Repetition of Three Words. Number of words repeated after first attempt"
* item.item.item[=].answer.valueCoding = $loinc#LA6404-3 "Two"
* item.item.item[+].linkId = "Section-3/C0300"
* item.item.item[=].text = "Temporal orientation (orientation to year, month, and day) [BIMS]"
* item.item.item[=].item[0].linkId = "Section-3/C0300A"
* item.item.item[=].item[=].text = "Able to report correct year"
* item.item.item[=].item[=].answer.valueCoding = $loinc#LA10008-3 "Missed by 1 year"
* item.item.item[=].item[+].linkId = "Section-3/C0300B"
* item.item.item[=].item[=].text = "Able to report correct month"
* item.item.item[=].item[=].answer.valueCoding = $loinc#LA10010-9 "Missed by 6 days to 1 month"
* item.item.item[=].item[+].linkId = "Section-3/C0300C"
* item.item.item[=].item[=].text = "Able to report correct day of the week"
* item.item.item[=].item[=].answer.valueCoding = $loinc#LA9960-1 "Correct"
* item.item.item[+].linkId = "Section-3/C0400"
* item.item.item[=].text = "Recall [BIMS]"
* item.item.item[=].item[0].linkId = "Section-3/C0400A"
* item.item.item[=].item[=].text = "Able to recall \"sock\""
// * item.item.item[=].item[=].answer.valueCoding = $loinc#LA10126-3 "Yes, after cueing (\"something to wear\")"
* item.item.item[=].item[+].linkId = "Section-3/C0400B"
* item.item.item[=].item[=].text = "Able to recall \"blue\""
// * item.item.item[=].item[=].answer.valueCoding = $loinc#LA10978-7 "Yes, after cueing (\"a color\")"
* item.item.item[=].item[+].linkId = "Section-3/C0400C"
* item.item.item[=].item[=].text = "Able to recall \"bed\""
// * item.item.item[=].item[=].answer.valueCoding = $loinc#LA10125-5 "Yes, after cueing (\"a piece of furniture\")"
* item.item.item[+].linkId = "Section-3/C0500"
* item.item.item[=].text = "BIMS Summary Score"
* item.item.item[=].answer.valueInteger = 9

Instance: PFEIG-QResponse-SNF-CAM-Admission-1
InstanceOf: USCoreQuestionnaireResponseProfile
Description: "Example U.S. Core Questionnaire Response: Signs and Symptoms of Delirium (from CAM)"
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-04-09T18:00:00-05:00"
* item.linkId = "Section-3"
* item.text = "Cognitive Patterns"
* item.item.linkId = "Section-3/C1310"
* item.item.text = "Signs and Symptoms of Delirium (from CAM)"
* item.item.item[0].linkId = "Section-3/C1310A"
* item.item.item[=].text = "Is there evidence of an acute change in mental status from the patients baseline?"
* item.item.item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item.item[+].linkId = "Section-3/C1310B"
* item.item.item[=].text = "Did the patient have difficulty focusing attention, for example being easily distractible, or having difficulty keeping track of what was being said?"
* item.item.item[=].answer.valueCoding = $loinc#LA61-7 "Behavior not present"
* item.item.item[+].linkId = "Section-3/C1310C"
* item.item.item[=].text = "Did the resident have altered level of consiousness as indicated by any of the following criteria: (1) Vigilant - startles easily to any sound or touch, (2) Lethargic - repeatedly dozed off when being asked questions, but responded to voice or touch, (3) Stuporous - very difficult to arouse and keep aroused for the interview, (4) Comatose - could not be aroused"
* item.item.item[=].answer.valueCoding = $loinc#LA61-7 "Behavior not present"

Instance: PFEIG-QResponse-SNF-PHQ9-1
InstanceOf: USCoreQuestionnaireResponseProfile
Description: "Example U.S. Core Questionnaire Response: Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-07-11T11:30:00-05:00"
* author = Reference(PractitionerRole/PFEIG-Role-SLP-LunaBaskins)
* item.linkId = "Section-4"
* item.text = "MDS v3.0 - RAI v1.18.1 - Mood - OSA [CMS Assessment]"
* item.item[0].linkId = "Section-4/D0200"
* item.item[=].text = "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* item.item[=].item[0].linkId = "Section-4/D0200_1"
* item.item[=].item[=].text = "Resident mood interview (PHQ-9) - symptom presence in the last 2 weeks [CMS Assessment]"
* item.item[=].item[=].item[0].linkId = "Section-4/D0200A1"
* item.item[=].item[=].item[=].text = "Little interest or pleasure in doing things"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200B1"
* item.item[=].item[=].item[=].text = "Feeling down"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200C1"
* item.item[=].item[=].item[=].text = "Trouble falling or staying asleep"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200D1"
* item.item[=].item[=].item[=].text = "Feeling tired or having little energy"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200E1"
* item.item[=].item[=].item[=].text = "Poor appetite or overeating"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200F1"
* item.item[=].item[=].item[=].text = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200G1"
* item.item[=].item[=].item[=].text = "Trouble concentrating on things"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200H1"
* item.item[=].item[=].item[=].text = "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200I1"
* item.item[=].item[=].item[=].text = "Thoughts that you would be better off dead"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10996-9 "No response"
* item.item[=].item[+].linkId = "Section-4/D0200_2"
* item.item[=].item[=].text = "Resident mood interview (PHQ-9) - symptom frequency in the last 2 weeks [CMS Assessment]"
* item.item[=].item[=].item[0].linkId = "Section-4/D0200A2"
* item.item[=].item[=].item[=].text = "Little interest or pleasure in doing things"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10998-5 "2-6 days (several days)"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200B2"
* item.item[=].item[=].item[=].text = "Feeling down"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10998-5 "2-6 days (several days)"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200C2"
* item.item[=].item[=].item[=].text = "Trouble falling or staying asleep"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10998-5 "2-6 days (several days)"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200D2"
* item.item[=].item[=].item[=].text = "Feeling tired or having little energy"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10997-7 "Never or 1 day"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200E2"
* item.item[=].item[=].item[=].text = "Poor appetite or overeating"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10997-7 "Never or 1 day"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200F2"
* item.item[=].item[=].item[=].text = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10997-7 "Never or 1 day"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200G2"
* item.item[=].item[=].item[=].text = "Trouble concentrating on things"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10997-7 "Never or 1 day"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200H2"
* item.item[=].item[=].item[=].text = "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual"
* item.item[=].item[=].item[=].answer.valueCoding = $loinc#LA10997-7 "Never or 1 day"
* item.item[=].item[=].item[+].linkId = "Section-4/D0200I2"
* item.item[=].item[=].item[=].text = "Thoughts that you would be better off dead"
* item.item[+].linkId = "Section-4/D0300"
* item.item[=].text = "PHQ-9 Total Score"
* item.item[=].answer.valueInteger = 3



---

// File: input/fsh/examples/Common-AllergyIntolerance.instances.fsh

Alias: $sct = http://snomed.info/sct
Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
Alias: $allergyintolerance-verification = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm


Instance: PFEIG-AllergyACE
InstanceOf: AllergyIntolerance
Description: "Example Allergy Intolerance for angiotensin-converting enzyme inhibitor mechanism of action."
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
* code = $sct#372733002 "Substance with angiotensin-converting enzyme inhibitor mechanism of action (substance)"
* patient = Reference(PFEIG-patientBSJ1)
* clinicalStatus = $allergyintolerance-clinical#active
* verificationStatus = $allergyintolerance-verification#confirmed
* category = #medication
* criticality = #high
* lastOccurrence = "2011-10"
* asserter = Reference(PFEIG-patientBSJ1)
* reaction.substance = $rxnorm#308963 "captopril 12.5 MG Oral Tablet"
* reaction.manifestation = $sct#427195008 "Hyperkalemia caused by angiotensin-converting enzyme inhibitor (disorder)"

---

// File: input/fsh/examples/Common-Location.instances.fsh



Instance: PFEIG-provider-org-loc-16
InstanceOf: Location
Description: "Example Location: Neuro Care INC."
* name = "Neuro Care INC."
* address.text = "26022 Meadowlark Bay, San Antonio, TX 78260"
* status = #active


Instance: PFEIG-Org-Loc-02
InstanceOf: Location
Description: "Example Location: Happy Nursing Facility"
* name = "Happy Nursing Facility"
* address.text = "8100 Pinebrook Dr, San Antonio, TX, 78230"
* status = #active


Instance: PFEIG-Org-Loc-03
InstanceOf: Location
Description: "Example Location: Sky Harbor Home Health Services"
* name = "Sky Harbor Home Health Services"
* address.text = "8810 Old Sky Harbor, San Antonio, TX 78242"
* status = #active


Instance: PFEIG-provider-org-loc-01
InstanceOf: Location
Description: "Example Location: Primary Care INC."
* name = "Primary Care INC."
* address.text = "177 Deerfield St. San Antonio, TX 78207"
* status = #active


Instance: PFEIG-Org-Loc-01
InstanceOf: Location
Description: "Example Location: San Antonio General Hospital"
* name = "San Antonio General Hospital"
* address.text = "26022 Meadowlark Bay, San Antonio, TX 78260"
* status = #active


Instance: PFEIG-Org-Loc-Primary-Care-Michigan
InstanceOf: Location
Description: "Example Location: Michigan Primary Health Care Associates"
* name = "Michigan Primary Health Care Associates"
* address.text = "123 Spruce Dr. Grand Rapids, MI 49503"
* status = #active


---

// File: input/fsh/examples/Common-Organization.instances.fsh



Instance: PFEIG-provider-org-16
InstanceOf: Organization
Description: "Example Organization: Neuro Care INC."
* name = "Neuro Care INC."


Instance: PFEIG-Org-01
InstanceOf: Organization
Description: "Example Organization: San Antonio General Hospital"
* name = "San Antonio General Hospital"


Instance: PFEIG-provider-org-01
InstanceOf: Organization
Description: "Example Organization: Primary Care INC."
* name = "Primary Care INC."


Instance: PFEIG-Org-03
InstanceOf: Organization
Description: "Example Organization: Sky Harbor Home Health Services"
* name = "Sky Harbor Home Health Services"


Instance: PFEIG-Org-02
InstanceOf: Organization
Description: "Example Organization: Happy Nursing Facility"
* name = "Happy Nursing Facility"


Instance: PFEIG-Org-Primary-Care-Michigan
InstanceOf: Organization
Description: "Example Organization: Michigan Primary Health Care Associates"
Usage: #example
* name = "Michigan Primary Health Care Associates"


---

// File: input/fsh/examples/Common-Patient.instances.fsh

Alias: Hl7FhirAdminGender = http://hl7.org/fhir/administrative-gender
Alias: Hl7V3MS = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: LANGVALSET = urn:ietf:bcp:47
Alias: Hl7V2TBL0131 = http://hl7.org/fhir/v2/0131
Alias: Hl7V3ROLE = http://terminology.hl7.org/CodeSystem/v3-RoleCode


Instance: PFEIG-patientBSJ1
InstanceOf: USCorePatientProfile
Description: "Example US Core Patient: Betsy Smith-Johnson"
* active = true

* name.text = "Betsy Smith-Johnson"
* name.given = "Betsy"
* name.family = "Smith-Johnson"

* identifier.system = "http://example.org/identifiers/patient"
* identifier.value = "10A3D58WH1600"

* gender = Hl7FhirAdminGender#female


* maritalStatus = Hl7V3MS#U

* telecom.system = #phone
* telecom.value = "210-222-1111"
* telecom.use = #mobile

* address.text = "111 Maple Ct, San Antonio, TX 78212"

* communication.language.coding = urn:ietf:bcp:47#en
* communication.preferred = true

* contact.name.text = "Charles Johnson"
* contact.address.text = "100 Montana St., San Antonio, TX 78203"
* contact.telecom.system = #phone
* contact.telecom.value = "(210) 222-3333"

* generalPractitioner = Reference(PFEIG-Practitioner-JohnSmith)


---

// File: input/fsh/examples/Common-Practitioner.instances.fsh

Alias: Hl7FhirAdminGender = http://hl7.org/fhir/administrative-gender


Instance: PFEIG-Practitioner-ScottDumble
InstanceOf: Practitioner
Description: "Example Practitioner: Scott Dumble"
* name.given = "Scott"
* name.family = "Dumble"
* name.text = "Scott Dumble"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone


Instance: PFEIG-Practitioner-JohnSmith
InstanceOf: Practitioner
Description: "Example Practitioner: John Smith"
* name.given = "John"
* name.family = "Smith"
* name.text = "John Smith"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone


Instance: PFEIG-Practitioner-JenCadbury
InstanceOf: Practitioner
Description: "Example Practitioner: Jen Cadbury"
* name.given = "Jen"
* name.family = "Cadbury"
* name.text = "Jen Cadbury"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone


Instance: PFEIG-Practitioner-NoraOlogist
InstanceOf: Practitioner
Description: "Example Practitioner: Nora Ologist"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "3668788925"
* name.given = "Nora"
* name.family = "Ologist"
* name.text = "Nora Ologist"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 7632"
* address.text = "26022 Meadowlark Bay, San Antonio, TX 78260"


Instance: PFEIG-Practitioner-LunaBaskins
InstanceOf: Practitioner
Description: "Example Practitioner: Luna Baskins"
* name.given = "Luna"
* name.family = "Baskins"
* name.text = "Luna Baskins"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone


Instance: PFEIG-Practitioner-DanielGranger
InstanceOf: Practitioner
Description: "Example Practitioner: Daniel Granger"
* name.given = "Daniel"
* name.family = "Granger"
* name.text = "Daniel Granger"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone


Instance: PFEIG-Practitioner-RonMarble
InstanceOf: Practitioner
Description: "Example Practitioner: Ron Marble"
* name.given = "Ron"
* name.family = "Marble"
* name.text = "Ron Marble"
* active = true
* gender = Hl7FhirAdminGender#male
* telecom.system = #phone


Instance: PFEIG-Practitioner-SallySmith
InstanceOf: Practitioner
Description: "Example Practitioner: Sally Smith"
* name.given = "Sally"
* name.family = "Smith"
* name.text = "Sally Smith"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone


Instance: PFEIG-Practitioner-JennyGlass
InstanceOf: Practitioner
Description: "Example Practitioner: Jenny Glass"
* name.given = "Jenny"
* name.family = "Glass"
* name.text = "Jenny Glass"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone


Instance: PFEIG-Practitioner-HoneyJones
InstanceOf: Practitioner
Description: "Example Practitioner: Honey Jones"
* name.given = "Honey"
* name.family = "Jones"
* name.text = "Honey Jones"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone


Instance: PFEIG-Practitioner-JillBradley
InstanceOf: Practitioner
Description: "Example Practitioner: Jill Bradley"
* name.given = "Jill"
* name.family = "Bradley"
* name.text = "Jill Bradley"
* active = true
* gender = Hl7FhirAdminGender#female


Instance: PFEIG-Practioner-GeraldPark
InstanceOf: Practitioner
Description: "Example Practitioner: Gerald Park"
* name.given = "Gerald"
* name.family = "Park"
* name.text = "Gerald Park"
* active = true
* gender = Hl7FhirAdminGender#male


Instance: PFEIG-Practitioner-AnitaChu
InstanceOf: Practitioner
Description: "Example Practitioner: Anita Chu"
* name.given = "Anita"
* name.family = "Chu"
* name.text = "Anita Chu"
* active = true
* gender = Hl7FhirAdminGender#female


---

// File: input/fsh/examples/Common-PractitionerRole.instances.fsh



Instance: PFEIG-Role-OT-JenCadbury
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Occupational therapist"
* code = http://snomed.info/sct#80546007 "Occupational therapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-JenCadbury)
* organization = Reference(PFEIG-Org-02)
* location = Reference(PFEIG-Org-Loc-02)



Instance: PFEIG-Role-PT-ScottDumble
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Physiotherapist"
* code = http://snomed.info/sct#36682004 "Physiotherapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-ScottDumble)
* organization = Reference(PFEIG-Org-03)
* location = Reference(PFEIG-Org-Loc-03)



Instance: PFEIG-Role-OT-DanielGranger
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Occupational therapist"
* code = http://snomed.info/sct#80546007 "Occupational therapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-DanielGranger)
* organization = Reference(PFEIG-Org-02)
* location = Reference(PFEIG-Org-Loc-02)



Instance: PFEIG-Role-PT-SallySmith
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Physiotherapist"
* code = http://snomed.info/sct#36682004 "Physiotherapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-SallySmith)
* organization = Reference(PFEIG-Org-01)
* location = Reference(PFEIG-Org-Loc-01)



Instance: PFEIG-provider-role-pcp
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Primary Care Physician"
* code = http://nucc.org/provider-taxonomy#261QP2300X "Primary Care Clinic/Center"
* active = true
* practitioner = Reference(PFEIG-Practitioner-JohnSmith)
* organization = Reference(PFEIG-provider-org-01)
* location = Reference(PFEIG-provider-org-loc-01)



Instance: PFEIG-Role-PT-RonMarble
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Physiotherapist"
* code = http://snomed.info/sct#36682004 "Physiotherapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-RonMarble)
* organization = Reference(PFEIG-Org-01)
* location = Reference(PFEIG-Org-Loc-01)



Instance: PFEIG-provider-role-neurologist
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Neurologist"
* code = http://nucc.org/provider-taxonomy#2084N0400X "Neurology Physician"
* active = true
* practitioner = Reference(PFEIG-Practitioner-NoraOlogist)
* organization = Reference(PFEIG-provider-org-16)
* location = Reference(PFEIG-provider-org-loc-16)



Instance: PFEIG-Role-SLP-LunaBaskins
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Speech and language therapist"
* code = http://snomed.info/sct#159026005 "Speech and language therapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-LunaBaskins)
* organization = Reference(PFEIG-Org-03)
* location = Reference(PFEIG-Org-Loc-03)



Instance: PFEIG-Role-SLP-HoneyJones
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Speech and language therapist"
* code = http://snomed.info/sct#159026005 "Speech and language therapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-HoneyJones)
* organization = Reference(PFEIG-Org-02)
* location = Reference(PFEIG-Org-Loc-02)



Instance: PFEIG-Role-Audio-JillBradley
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Audiologist"
* code = http://snomed.info/sct#309418004 "Audiologist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-JillBradley)



Instance: PFEIG-Role-SLP-JennyGlass
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Speech and language therapist"
* code = http://snomed.info/sct#159026005 "Speech and language therapist"
* active = true
* practitioner = Reference(PFEIG-Practitioner-JennyGlass)
* organization = Reference(PFEIG-Org-01)
* location = Reference(PFEIG-Org-Loc-01)



Instance: PFEIG-Role-SNFDoc-GeraldPark
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Geriatric Medicine Physician"
* active = true
* code = http://nucc.org/provider-taxonomy#207QG0300X "Geriatric Medicine (Family Medicine) Physician"
* practitioner = Reference(PFEIG-Practioner-GeraldPark) "Gerald Park"
* organization = Reference(PFEIG-Org-02) "Happy Nursing Facility"
* location = Reference(PFEIG-Org-Loc-02)



Instance: PFEIG-Role-IMMD-AnitaChu
InstanceOf: PractitionerRole
Description: "Example Practitioner Role: Internal Medicine Physician"
* active = true
* code = http://nucc.org/provider-taxonomy#207R00000X "Internal Medicine Physician"
* practitioner = Reference(PFEIG-Practitioner-AnitaChu) "Dr. Anita Chu"
* organization = Reference(PFEIG-Org-Primary-Care-Michigan) "Michigan Primary Health Care Associates"
* location = Reference(PFEIG-Org-Loc-Primary-Care-Michigan)




---

// File: input/fsh/examples/Functional-Device.instances.fsh



Instance: PFEIG-CMS-Device-RollingWalker
InstanceOf: Device
Description: "Example Device: Rolling walker"
* deviceName.name = "Rolling walker"
* deviceName.type = #user-friendly-name


Instance: PFEIG-CMS-Device-RaisedToiletSeat
InstanceOf: Device
Description: "Example Device: Raised toilet seat"
* deviceName.name = "Raised toilet seat"
* deviceName.type = #user-friendly-name


Instance: PFEIG-CMS-Device-HandleBars
InstanceOf: Device
Description: "Example Device: Handle bars"
* deviceName.name = "Handle bars"
* deviceName.type = #user-friendly-name


Instance: PFEIG-CMS-Device-BedsideRails
InstanceOf: Device
Description: "Example Device: Bedside rails"
* deviceName.name = "Bedside rails, device"
* deviceName.type = #user-friendly-name


Instance: PFEIG-CMS-Device-Walker
InstanceOf: Device
Description: "Example Device: Walker"
* deviceName.name = "Walker"
* deviceName.type = #user-friendly-name


---

// File: input/fsh/examples/Functional-NarrativeHistory.instances.fsh

Alias: $loinc = http://loinc.org
Alias: $pfe-functioning-cs = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-functioning-cs
Alias: PFEDOMAINCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs

Instance: PFEIG-Narrative-History-Functional-Status-1
InstanceOf: PFENarrativeHistoryOfStatus
Description: "Example PFE Narrative History of Status for mobility and self-care"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-narrative-history-of-status"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/event-location"
* extension[=].valueReference = Reference(Location/PFEIG-provider-org-loc-01)
* extension[+].url = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/assistance-required"
* extension[=].valueCodeableConcept = $loinc#LA11539-6 "Independent - Patient completed all the activities by themself, with or without an assistive device, with no assistance from a helper."
* status = #final
* category[us-core] = $loinc#LP7839-6 "Pathology"
* category[PFEDomain][0] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[PFEDomain][1] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* code = $loinc#10158-4 "History of Functional status Narrative"
* subject = Reference(Patient/PFEIG-patientBSJ1)
* effectivePeriod.start = "2019-07-01"
* effectivePeriod.end = "2020-11-30"
* performer = Reference(PractitionerRole/PFEIG-provider-role-pcp)
* presentedForm.data = "UHJpb3IgdG8gdGhlIGN1cnJlbnQgYWRtaXNzaW9uLCBwYXRpZW50IHdhcyBhIGNvbW11bml0eSBhbWJ1bGF0b3IsIGFibGUgdG8gYXR0ZW5kIGRlc2lyZWQgYWN0aXZpdGVzIGFuZCBjYXJlIGZvciBoZXJzZWxmIGluZGVwZW5kZW50bHku"
* presentedForm.contentType = #text/plain


---

// File: input/fsh/examples/Functional-PFECollection.instances.fsh

Alias: PFEDOMAINCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs
Alias: FUNCTIONINGCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-functioning-cs
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1
InstanceOf: PFECollection
Description: "Example PFE Collection of mobility observations for hospital discharge"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[survey] = OBSCAT#survey
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#88331-4 "Mobility - discharge performance during 3 day assessment period [CMS Assessment]"
* code.text = "Mobility - discharge performance during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-2)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-4)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-6)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-8)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-10)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-12)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-14)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-16)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-18)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-20)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-22)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-24)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-26)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-28)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-30)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-32)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-34)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-2)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-3)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-4)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-5)


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1
InstanceOf: PFECollection
Description: "Example PFE Collection of mobility observations for hospital admission"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[survey] = OBSCAT#survey
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#88330-6 "Mobility - admission performance during 3 day assessment period [CMS Assessment]"
* code.text = "Mobility - admission performance during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-1)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-3)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-5)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-7)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-9)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-11)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-13)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-15)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-17)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-19)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-21)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-23)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-25)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-27)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-29)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-31)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-33)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-UseOfDevice-6)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-UseOfDevice-7)


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1
InstanceOf: PFECollection
Description: "Example PFE Collection of self-care observations for SNF admission"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[survey] = OBSCAT#survey
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83233-7 "Self-care - admission performance [CMS Assessment]"
* code.text = "Self-care - admission performance [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-3)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-7)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-11)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-15)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-19)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-23)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-27)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)

---

// File: input/fsh/examples/Functional-PFECondition.instances.fsh

Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $sct = http://snomed.info/sct
Alias: $icf = http://hl7.org/fhir/sid/icf
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $us-core-category = http://hl7.org/fhir/us/core/CodeSystem/us-core-category
Alias: $problem-category = http://hl7.org/fhir/us/core/CodeSystem/condition-category


Instance: PFEIG-Condition-AnemiaDiagnosis
InstanceOf: Condition
Description: "Example PFE Condition Encounter Diagnosis for anemia"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-encounter-diagnosis"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#691421000119108 "Anemia co-occurrent and due to chronic kidney disease stage 3 (disorder)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
//* category[+] = $icf#b539 "Functions related to the digestive system, other specified and unspecified"
* bodySite = $sct#113257007 "Structure of cardiovascular system"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2024-06-23T13:15:00-04:00"
* recordedDate = "2024-06-23T13:15:00-04:00"
* note.text = "See lab"


Instance: PFEIG-Condition-KidneyDisease
InstanceOf: Condition
Description: "Example PFE Condition Encounter Diagnosis for kidney disease"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-encounter-diagnosis"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#731000119105 "Chronic kidney disease stage 3 due to type 2 diabetes mellitus (disorder)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
//* category[+] = $icf#b610 "Urinary excretory functions"
* bodySite = $sct#17373004 "Both kidneys"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2021-04-10"
* recordedDate = "2021-04-10T15:00:00-04:00"
* asserter = Reference(PFEIG-Role-IMMD-AnitaChu)


Instance: PFEIG-Condition-DiabetesDiagnosis
InstanceOf: Condition
Description: "Example PFE Condition Encounter Diagnosis for diabetes"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-encounter-diagnosis"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#359642000 "Diabetes mellitus type 2 in nonobese (disorder)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
//* category[+] = $icf#b5401 "Carbohydrate metabolism"
* bodySite = $sct#113331007 "Structure of endocrine system"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2017-06"
* onsetDateTime = "2017-06"
* recordedDate = "2017-06-05"
* asserter = Reference(PFEIG-Role-IMMD-AnitaChu)


Instance: PFEIG-Condition-Hyperlipidemia
InstanceOf: Condition
Description: "Example PFE Condition Encounter Diagnosis for hyperlipidemia"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-encounter-diagnosis"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#55822004 "Hyperlipidemia (disorder)"
* subject = Reference(PFEIG-patientBSJ1)
* recordedDate = "2018-06-06"
* category[0] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
//* category[+] = $icf#b5403 "Fat metabolism"
* bodySite = $sct#113257007 "Structure of cardiovascular system"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2018-06"
* asserter = Reference(PFEIG-Role-IMMD-AnitaChu)


Instance: PFEIG-Condition-HemiparesisDiagnosis
InstanceOf: Condition
Description: "Example PFE Condition Encounter Diagnosis for a hemiparesis diagnosis"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-encounter-diagnosis"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2023-12-16T13:30:00-05:00"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#278286009 "Right hemiparesis (disorder)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
//* category[+] = $icf#b7302 "Power of muscles on one side of the body"
* bodySite = $sct#368209003 "Right upper arm structure (body structure)"
* onsetDateTime = "2023-12-15T15:40:00-05:00"
* recordedDate = "2023-12-16T13:30:00-05:00"
* note.text = "Patient began experiencing right sided weakness, primarily in arm and shoulder. There was no facial droop, but patient reports \"tingling\" in R face / numbness along R brow. Symptoms in face resolved post tPA administration. Strength improved in shoulder, weakness did not fully resolve. Demonstrates R arm weakness and lack of coordination. Fine motor skills significantly degraded and have not improved post tPA."


Instance: PFEIG-Condition-StrokeDiagnosis
InstanceOf: Condition
Description: "Example PFE Condition Encounter Diagnosis for a stroke diagnosis"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-encounter-diagnosis"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2023-12-15T18:40:00-05:00"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#422504002 "Ischemic Stroke (disorder)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
//* category[+] = $icf#s11009 "Structure of cortical lobes, unspecified"
* bodySite[0] = $sct#414722000 "Structure of middle cerebral artery M1 segment (body structure)"
* bodySite[+] = $sct#7771000 "Left"
* onsetDateTime = "2023-12-15T15:40:00-05:00"
* recordedDate = "2023-12-15T18:40:00-05:00"
* note.text = "Partial occlusion of MCA. Stroke event witnessed. EMS response / patient arrived within 45 minutes of symptom onset. Verified by CT with contrast. tPA administered within 2 hours of symptom onset."


Instance: PFEIG-Condition-DressingConcern
InstanceOf: Condition
Description: "Example PFE Condition Problems Health Concerns for a dressing concern"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-problems-health-concerns"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#284972002 "Difficulty performing dressing activity (finding)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $problem-category#health-concern "Health Concern"
* category[+] = $us-core-category#functional-status "Functional Status"
//* category[+] = $icf#b7601 "control of complex voluntary movements"
* recordedDate = "2024-01-18T14:10:00-05:00"
* asserter = Reference(PFEIG-Practitioner-JenCadbury)
* note.text = "Betsy is frustrated, embarrassed, and worried about not being able to dress herself"


Instance: PFEIG-Condition-UndressingConcern
InstanceOf: Condition
Description: "Example PFE Condition Problems Health Concerns for an undressing concern"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-problems-health-concerns"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#284989005 "Difficulty undressing (finding)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $problem-category#health-concern "Health Concern"
* category[+] = $us-core-category#functional-status "Functional Status"
//* category[+] = $icf#b7602 "Coordination of voluntary movements"
* recordedDate = "2024-01-18T14:10:00-05:00"
* asserter = Reference(PFEIG-Practitioner-JenCadbury)
* note.text = "Betsy is frustrated, embarrassed, and worried about not being able to undress herself"


Instance: PFEIG-Condition-Decondition
InstanceOf: Condition
Description: "Example PFE Condition Problems Health Concerns for physical deconditioning"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-problems-health-concerns"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2023-12-23T17:15:00-05:00"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#31031000119102 "Physical deconditioning (finding)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $problem-category#health-concern "Health Concern"
* category[+] = $us-core-category#functional-status "Functional Status"
//* category[+] = $icf#b7303 "Power of muscles in lower half of the body"
* bodySite = $sct#362875007 "Entire lower body (body structure)"
* onsetDateTime = "2023-12-23T16:30:00-05:00"
* recordedDate = "2024-01-18T14:10:00-05:00"
* evidence[0].detail = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-16)
* evidence[+].detail = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-7)
* evidence[+].detail = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-5)
* asserter = Reference(PFEIG-Practitioner-JenCadbury)
* note.text = "The weakness in the patient's lower extremities is secondary to deconditioning. According to the report from Neurology, patient did not have motor or sensory deficits below upper chest. High rehab potential."


Instance: PFEIG-Condition-RightWeak
InstanceOf: Condition
Description: "Example PFE Condition Problems Health Concerns for right-side upper limb weakness"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-condition-problems-health-concerns"
* extension.url = "http://hl7.org/fhir/StructureDefinition/condition-assertedDate"
* extension.valueDateTime = "2023-12-16T13:30:00-05:00"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code = $sct#570961000124101 "Weakness of right upper limb (finding)"
* subject = Reference(PFEIG-patientBSJ1)
* category[0] = $problem-category#health-concern "Health Concern"
* category[+] = $us-core-category#functional-status "Functional Status"
//* category[+] = $icf#b7301 "Power of muscles of one limb"
* bodySite = $sct#368209003 "Right upper arm structure (body structure)"
* onsetDateTime = "2023-12-15T15:40:00-05:00"
* recordedDate = "2024-01-18T14:10:00-05:00"
* evidence.detail = Reference(PFEIG-Condition-HemiparesisDiagnosis)
* asserter = Reference(PFEIG-Practitioner-JenCadbury)
* note.text = "The weakness and lack of coordination in the patient's right shoulder, arm, and hand are secondary to the stroke. PT/OT from SNF report improvements to rotator cuff strength over last month."




---

// File: input/fsh/examples/Functional-PFEDeviceUseStatement.instances.fsh



Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-5
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for handle bars"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-HandleBars)
* recordedOn = "2020-07-10T14:34:00-05:00"
* source = Reference(PFEIG-Practitioner-RonMarble)
* derivedFrom[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1)


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-4
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for raised toilet seat"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-RaisedToiletSeat)
* recordedOn = "2020-07-10T14:34:00-05:00"
* source = Reference(PFEIG-Practitioner-RonMarble)
* derivedFrom[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1)


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-3
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for walker"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-Walker)
* recordedOn = "2020-07-10T14:34:00-05:00"
* source = Reference(PFEIG-Practitioner-RonMarble)
* derivedFrom[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1)


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-2
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for rolling walker"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-RollingWalker)
* recordedOn = "2020-07-10T14:34:00-05:00"
* source = Reference(PFEIG-Practitioner-RonMarble)
* derivedFrom[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1)


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-1
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for bedside rails"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-BedsideRails)
* recordedOn = "2020-07-10T14:34:00-05:00"
* source = Reference(PFEIG-Practitioner-RonMarble)
* derivedFrom[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1)


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-UseOfDevice-6
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for bedside rails"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-BedsideRails)
* recordedOn = "2020-07-08T16:00:00-05:00"
* source = Reference(PFEIG-Practitioner-SallySmith)
* derivedFrom[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1)


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-UseOfDevice-7
InstanceOf: PFEUseOfDevice
Description: "Example PFE Use of Device for walker"
* subject = Reference(PFEIG-patientBSJ1)
* status = #active
* device = Reference(PFEIG-CMS-Device-Walker)
* recordedOn = "2020-07-08T16:00:00-05:00"
* source = Reference(PFEIG-Practitioner-SallySmith)
* derivedFrom[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1)


---

// File: input/fsh/examples/Functional-PFEDiagnosticReportNoteExchange.instances.fsh

Alias: $loinc = http://loinc.org


Instance: PFEIG-DiagnosticReport
InstanceOf: PFEDiagnosticReportNoteExchange
Description: "Example Diagnostic Report Note Exchange for nutrition order"
* basedOn = Reference(PFEIG-NutritionOrder-SNFDischargeDiet)
* status = #final
* category[us-core] = $loinc#LP7839-6 "Pathology"
* code = $loinc#100492-8 "Nutrition and dietetics Outpatient Progress note"
* subject = Reference(PFEIG-patientBSJ1)
* effectiveDateTime = "2024-02-07T13:28:17-05:00"
* issued = "2024-02-07T13:28:17-05:00"
* performer = Reference(PFEIG-Practioner-GeraldPark)
* conclusion = "Conclusion"

---

// File: input/fsh/examples/Functional-PFEGoal.instances.fsh

Alias: $goal-achievement = http://terminology.hl7.org/CodeSystem/goal-achievement
Alias: $icf = http://hl7.org/fhir/sid/icf
Alias: $sct = http://snomed.info/sct


Instance: PFEIG-Goal-DressingGoal
InstanceOf: Goal
Description: "Example PFE Goal for dressing"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-goal"
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#in-progress "In Progress"
* achievementStatus.text = "In Progress"
//* category = $icf#d540 "Carrying out the coordinated actions and tasks of putting on and taking off clothes and footwear in sequence and in keeping with climatic and social conditions, such as by putting on, adjusting and removing shirts, skirts, blouses, pants, undergarments, saris, kimono, tights, hats, gloves, coats, shoes, boots, sandals and slippers."
* description = $sct#284968001 "Able to perform dressing activity (finding)"
* description.text = "Able to perform dressing activity (finding)"
* subject = Reference(PFEIG-patientBSJ1)
* startDate = "2024-01-18"
* expressedBy = Reference(PFEIG-Practitioner-JenCadbury)
* addresses[0] = Reference(PFEIG-Condition-DressingConcern)
* addresses[+] = Reference(PFEIG-Condition-UndressingConcern)
* addresses[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-19)
* addresses[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-23)
* note.authorReference = Reference(PFEIG-Practitioner-JenCadbury)
* note.time = "2024-01-18"
* note.text = "Betsy reports wanting to \"get back to the way I was\" specifying that completing upper body and lower body dressing is her top priority for therapy."


Instance: PFEIG-Goal-StandingGoal
InstanceOf: Goal
Description: "Example PFE Goal for standing"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-goal"
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#in-progress "In Progress"
* achievementStatus.text = "In Progress"
//* category = $icf#d4104 "Getting into and out of a standing position or changing body position from standing to any other position, such as lying down or sitting down."
* description = $sct#282971008 "Able to stand (finding)"
* description.text = "Able to stand (finding)"
* subject = Reference(PFEIG-patientBSJ1)
* startDate = "2024-01-18"
* expressedBy = Reference(PFEIG-Practitioner-JenCadbury)
* addresses[0] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-7)
* addresses[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-5)
* note.authorReference = Reference(PFEIG-Practitioner-JenCadbury)
* note.time = "2024-01-18"
* note.text = "Betsy demonstrates good rehab potential to progress to completing functional transfers without assistance. She will complete functional transfers including bed mobility and sit to stand transfers from various heights to improve safety and independence in the home."
//* target.detailString = "Betsy demonstrates good rehab potential post stroke to progress to independence for improving functional mobility, balance, and functional transfers to improve independence and quality of life. "


Instance: PFEIG-Goal-WalkingGoal
InstanceOf: Goal
Description: "Example PFE Goal for walking"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-goal"
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#in-progress "In Progress"
* achievementStatus.text = "In Progress"
//* category = $icf#d4600 "Walking and moving around in one's home, within a room, between rooms, and around the whole residence or living area."
* description = $sct#715032004 "Able to walk in room (finding)"
* description.text = "Able to walk in room (finding)"
* subject = Reference(PFEIG-patientBSJ1)
* startDate = "2024-01-18"
* expressedBy = Reference(PFEIG-Practitioner-JenCadbury)
* addresses[0] = Reference(PFEIG-Condition-Decondition)
* addresses[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-16)
* note.authorReference = Reference(PFEIG-Practitioner-JenCadbury)
* note.time = "2024-01-18"
* note.text = "Betsy will be able to complete functional mobility including navigating around furniture, mainingin balance, and demonstrating good functional endurance for completing activities of daily life, and instrumental activities of daily life, and in order to decrease risk of fall and risk of hospital readmission."


---

// File: input/fsh/examples/Functional-PFENutritionOrder.instances.fsh

Alias: $sct = http://snomed.info/sct

Instance: PFEIG-NutritionOrder-SNFDischargeDiet
InstanceOf: PFENutritionOrder
Description: "Example Nutrition Order for a diet to follow upon a skilled nursing facility discharge"
Usage: #example
* status = #active
* intent = #order
* patient = Reference(PFEIG-patientBSJ1)
* dateTime = "2024-07-18"
* orderer = Reference(PFEIG-Role-SNFDoc-GeraldPark)
* excludeFoodModifier = $sct#226559002 "Bread"
* allergyIntolerance = Reference(PFEIG-AllergyACE)
* oralDiet.type.coding[0] = $sct#1055201009 "Decreased protein and/or protein derivative diet (regime/therapy)"
* oralDiet.type.coding[+] = $sct#437421000124105 "Decreased sodium diet (regime/therapy)"
* oralDiet.type.coding[+] = $sct#1237451006 "International Dysphagia Diet Standardisation Initiative Framework - Regular Level 7"
* oralDiet.schedule.repeat.boundsPeriod.start = "2024-07-18"
* oralDiet.schedule.repeat.frequency = 3
* oralDiet.schedule.repeat.frequencyMax = 4
* oralDiet.schedule.repeat.period = 1
* oralDiet.schedule.repeat.periodUnit = #d
* oralDiet.fluidConsistencyType = $sct#1231508001 "International Dysphagia Diet Standardisation Initiative Framework - Thin Level 0"
* oralDiet.instruction = "May have a snack if desired"
* supplement.type.coding[0] = $sct#443481000124101 "Renal Formula"
* supplement.type.coding[+] = $sct#443051000124104 "Adult diabetic specialty formula"
* supplement.schedule.repeat.boundsPeriod.start = "2024-07-18"
* supplement.schedule.repeat.frequency = 1
* supplement.schedule.repeat.period = 1
* supplement.schedule.repeat.periodUnit = #d
* supplement.schedule.repeat.when = #MORN

---

// File: input/fsh/examples/Functional-PFEObservation.instances.fsh

Alias: PFEDOMAINCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs
Alias: FUNCTIONINGCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-functioning-cs
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-25
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: 4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83194-1 "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-27
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: 12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83192-5 "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-21
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83198-2 "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-23
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: 1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83196-6 "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-29
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83190-9 "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-23
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Lower body dressing - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83222-0 "Lower body dressing - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-18
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83202-2 "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-16
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83204-8 "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-14
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83206-3 "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-12
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83208-9 "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-10
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83210-5 "Bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-34
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83235-2 "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-30
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83190-9 "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-32
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83188-3 "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-9
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83210-5 "Bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA27665-1 "Dependent - Helper does all of the effort. Patient does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the patient to complete the activity."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-19
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83200-6 "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-7
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Oral hygiene - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83230-3 "Oral hygiene - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-3
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83216-2 "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-17
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83202-2 "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-3
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Eating - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83232-9 "Eating - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-7
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83212-1 "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-5
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83214-7 "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-33
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83235-2 "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-31
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83188-3 "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-28
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: 12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83192-5 "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-15
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83204-8 "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-2
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83218-8 "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-11
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Toileting hygiene - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83228-7 "Toileting hygiene - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-1
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83218-8 "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-6
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83214-7 "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-15
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Shower/bathe self - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83226-1 "Shower/bathe self - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-4
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83216-2 "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-22
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83198-2 "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-20
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83200-6 "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-8
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83212-1 "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-26
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: 4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83194-1 "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Discharge-Mobility-1-Ob-Question-24
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: 1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#83196-6 "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-11
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83208-9 "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-27
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Putting on/taking off footwear - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83220-4 "Putting on/taking off footwear - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


Instance: PFEIG-FSC-Hospital-Admission-Mobility-1-Ob-Question-13
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = http://loinc.org#83206-3 "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* valueCodeableConcept = http://loinc.org#LA26735-3 "Not attempted due to medical condition or safety concerns"


Instance: PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-19
InstanceOf: PFESingleObservation
Description: "Example PFE Observation: Upper body dressing - functional ability during 3 day assessment period [CMS Assessment]"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = USCORECAT#functional-status "Functional Status"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d51 "Self-care"
* category[survey] = OBSCAT#survey
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = http://loinc.org#83224-6 "Upper body dressing - functional ability during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* valueCodeableConcept = http://loinc.org#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."


---

// File: input/fsh/examples/Functional-PFEServiceRequest.instances.fsh

Alias: $sct = http://snomed.info/sct


Instance: PFEIG-ServiceRequest-PCPFollowUp
InstanceOf: ServiceRequest
Description: "Example PFE Service Request to order PCP follow-up"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-service-request"
* status = #active
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
* code = $sct#185389009 "Follow-up visit (procedure)"
* subject = Reference(PFEIG-patientBSJ1)
* priority = #routine
* occurrenceDateTime = "2024-07-29"
* authoredOn = "2024-07-17"
* requester = Reference(PFEIG-Role-SNFDoc-GeraldPark)


Instance: PFEIG-ServiceRequest-SNFDischargeCallOTRefer
InstanceOf: ServiceRequest
Description: "Example PFE Service Request to order a occupational therapy assessment"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-service-request"
* status = #active
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
* code = $sct#410155007 "Occupational therapy assessment (procedure)"
* subject = Reference(PFEIG-patientBSJ1)
* priority = #routine
* occurrencePeriod.start = "2024-07-18"
* authoredOn = "2024-07-17"
* requester = Reference(PFEIG-Role-SNFDoc-GeraldPark)
* reasonReference = Reference(PFEIG-Condition-HemiparesisDiagnosis)


Instance: PFEIG-ServiceRequest-SNFDischargeCallOrder
InstanceOf: ServiceRequest
Description: "Example PFE Service Request to inform doctor"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-service-request"
* status = #active
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
* code = $sct#304562007 "Informing doctor (procedure)"
* subject = Reference(PFEIG-patientBSJ1)
* priority = #routine
* occurrencePeriod.start = "2024-07-17"
* authoredOn = "2024-07-17"
* requester = Reference(PFEIG-Role-SNFDoc-GeraldPark)


Instance: PFEIG-ServiceRequest-SNFDischargeCallSLPRefer
InstanceOf: ServiceRequest
Description: "Example PFE Service Request to order a speech therapy assessment"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-service-request"
* status = #active
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
* code = $sct#410161005 "Speech therapy assessment (procedure)"
* subject = Reference(PFEIG-patientBSJ1)
* priority = #routine
* occurrencePeriod.start = "2024-07-18"
* authoredOn = "2024-07-17"
* requester = Reference(PFEIG-Role-SNFDoc-GeraldPark)


Instance: PFEIG-ServiceRequest-SNFDischargeLabOrderBMP
InstanceOf: ServiceRequest
Description: "Example PFE Service Request to order a blood chemistry lab procedure"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-service-request"
* status = #active
* intent = #order
* category = $sct#108252007 "Laboratory procedure"
* code = $sct#166312007 "Blood chemistry (procedure)"
* subject = Reference(PFEIG-patientBSJ1)
* priority = #routine
* occurrenceDateTime = "2024-07-29"
* authoredOn = "2024-07-17"
* requester = Reference(PFEIG-Role-SNFDoc-GeraldPark)
* reasonReference[0] = Reference(PFEIG-Condition-AnemiaDiagnosis)
* reasonReference[+] = Reference(PFEIG-Condition-Hyperlipidemia)
* reasonReference[+] = Reference(PFEIG-Condition-KidneyDisease)
* reasonReference[+] = Reference(PFEIG-Condition-DiabetesDiagnosis)


Instance: PFEIG-ServiceRequest-SNFDischargeLabOrderCBC
InstanceOf: ServiceRequest
Description: "Example PFE Service Request to order a complete blood count"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-service-request"
* status = #active
* intent = #order
* category = $sct#108252007 "Laboratory procedure"
* code = $sct#43789009 "Complete blood count without differential (procedure)"
* subject = Reference(PFEIG-patientBSJ1)
* priority = #routine
* occurrenceDateTime = "2024-07-29"
* authoredOn = "2024-07-17"
* requester = Reference(PFEIG-Role-SNFDoc-GeraldPark)
* reasonReference = Reference(PFEIG-Condition-AnemiaDiagnosis)


Instance: PFEIG-ServiceRequest-SNFDischargePTRefer
InstanceOf: ServiceRequest
Description: "Example PFE Service Request to order a physical therapy assessment"
* meta.profile = "http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/pfe-service-request"
* status = #active
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
* code = $sct#410158009 "Physical therapy assessment (procedure)"
* subject = Reference(PFEIG-patientBSJ1)
* priority = #routine
* occurrencePeriod.start = "2024-07-18"
* authoredOn = "2024-07-17"
* requester = Reference(PFEIG-Role-SNFDoc-GeraldPark)
* reasonReference = Reference(PFEIG-Condition-HemiparesisDiagnosis)


---

// File: input/fsh/examples/Functional-QuestionnaireResponse.instances.fsh

Instance: PFEIG-QResponse-Hospital-Admission-Mobility-1
InstanceOf: USCoreQuestionnaireResponseProfile
Description: "Example U.S. Core Questionaire Response: Minimum Data Set (MDS) admission mobility assessment"
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-07-08T16:00:00-05:00"
* author = Reference(PractitionerRole/PFEIG-Role-PT-SallySmith)
* item.linkId = "Section-37"
* item.text = "Functional abilities and goals - admission [CMS Assessment]"
* item.item.linkId = "Section-37/GG0170_1"
* item.item.text = "Mobility - admission performance during 3 day assessment period [CMS Assessment]"
* item.item.item[0].linkId = "Section-37/GG0170A1"
* item.item.item[=].text = "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170B1"
* item.item.item[=].text = "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170C1"
* item.item.item[=].text = "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170D1"
* item.item.item[=].text = "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170E1"
* item.item.item[=].text = "Chair/bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA27665-1 "Dependent - Helper does all of the effort. Patient does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the patient to complete the activity."
* item.item.item[+].linkId = "Section-37/GG0170F1"
* item.item.item[=].text = "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170G1"
* item.item.item[=].text = "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170I1"
* item.item.item[=].text = "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170J1"
* item.item.item[=].text = "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170K1"
* item.item.item[=].text = "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170L1"
* item.item.item[=].text = "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170M1"
* item.item.item[=].text = "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170N1"
* item.item.item[=].text = "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170O1"
* item.item.item[=].text = "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170P1"
* item.item.item[=].text = "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170R1"
* item.item.item[=].text = "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170S1"
* item.item.item[=].text = "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"

Instance: PFEIG-QResponse-Hospital-Discharge-Mobility-1
InstanceOf: USCoreQuestionnaireResponseProfile
Description: "Example U.S. Core Questionaire Response: Minimum Data Set (MDS) discharge mobility assessment"
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-07-10T14:34:00-05:00"
* author = Reference(PractitionerRole/PFEIG-Role-PT-RonMarble)
* item.linkId = "Section-37"
* item.text = "Functional abilities and goals - discharge [CMS Assessment]"
* item.item.linkId = "Section-37/GG0170_3"
* item.item.text = "Mobility - discharge performance during 3 day assessment period [CMS Assessment]"
* item.item.item[0].linkId = "Section-37/GG0170A3"
* item.item.item[=].text = "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170B3"
* item.item.item[=].text = "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170C3"
* item.item.item[=].text = "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170D3"
* item.item.item[=].text = "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170E3"
* item.item.item[=].text = "Chair/bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170F3"
* item.item.item[=].text = "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170G3"
* item.item.item[=].text = "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170I3"
* item.item.item[=].text = "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170J3"
* item.item.item[=].text = "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170K3"
* item.item.item[=].text = "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170L3"
* item.item.item[=].text = "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170M3"
* item.item.item[=].text = "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170N3"
* item.item.item[=].text = "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170O3"
* item.item.item[=].text = "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170P3"
* item.item.item[=].text = "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0170R3"
* item.item.item[=].text = "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0170S3"
* item.item.item[=].text = "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."

Instance: PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1
Description: "Example U.S. Core Questionaire Response: Minimum Data Set (MDS) admission self-care assessment"
InstanceOf: USCoreQuestionnaireResponseProfile
Usage: #example
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* status = #completed
* subject = Reference(Patient/PFEIG-patientBSJ1)
* authored = "2020-07-11T16:32:00-05:00"
* author = Reference(PractitionerRole/PFEIG-Role-OT-JenCadbury)
* item.linkId = "Section-37"
* item.text = "Functional abilities and goals - admission [CMS Assessment]"
* item.item.linkId = "Section-37/GG0130_1"
* item.item.text = "Self-care - admission performance [CMS Assessment]"
* item.item.item[0].linkId = "Section-37/GG0130A1"
* item.item.item[=].text = "Eating"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0130B1"
* item.item.item[=].text = "Oral hygiene"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0130C1"
* item.item.item[=].text = "Toileting hygiene"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0130E1"
* item.item.item[=].text = "Shower/bathe self"
* item.item.item[=].answer.valueCoding = $loinc#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item.item.item[+].linkId = "Section-37/GG0130F1"
* item.item.item[=].text = "Upper body dressing"
* item.item.item[=].answer.valueCoding = $loinc#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item.item.item[+].linkId = "Section-37/GG0130G1"
* item.item.item[=].text = "Lower body dressing"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item.item.item[+].linkId = "Section-37/GG0130H1"
* item.item.item[=].text = "Putting on/taking off footwear"
* item.item.item[=].answer.valueCoding = $loinc#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


---

// File: input/fsh/examples/Nested-PFECollection.instances.fsh

Alias: PFEDOMAINCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-category-cs
Alias: FUNCTIONINGCAT = http://hl7.org/fhir/us/pacio-pfe/CodeSystem/pfe-functioning-cs
Alias: OBSCAT = http://terminology.hl7.org/CodeSystem/observation-category


Instance: PFEIG-Nested-Collection-Mobility
InstanceOf: PFECollection
Description: "Example Nested Personal Functioning and Engagement Collection, ie. a Collection of Collections"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core][0] = USCORECAT#functional-status "Functional Status"
* category[us-core][1] = USCORECAT#cognitive-status "Cognitive Status"
* category[survey] = OBSCAT#survey
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-d41 "Mobility"
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = http://loinc.org#88331-4 "Mobility - discharge performance during 3 day assessment period [CMS Assessment]"
* code.text = "Mobility - discharge performance during 3 day assessment period [CMS Assessment]"
* performer[+] = Reference(PFEIG-Role-PT-RonMarble)
* performer[+] = Reference(PFEIG-Role-PT-SallySmith)
* performer[+] = Reference(PFEIG-Role-OT-JenCadbury)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1)
* hasMember[+] = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1)
* hasMember[+] = Reference(PFEIG-FSC-SNF-Admission-Mobility-SelfCare-1)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Discharge-Mobility-1)
* derivedFrom[+] = Reference(PFEIG-QResponse-Hospital-Admission-Mobility-1)
* derivedFrom[+] = Reference(PFEIG-QResponse-SNF-Admission-Mobility-SelfCare-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-01)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/event-location].valueReference = Reference(PFEIG-Org-Loc-02)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-1)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-2)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-3)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-4)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Discharge-Mobility-1-UseOfDevice-5)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-UseOfDevice-6)
* extension[http://hl7.org/fhir/us/pacio-pfe/StructureDefinition/device-patient-used][+].valueReference = Reference(PFEIG-FSC-Hospital-Admission-Mobility-1-UseOfDevice-7)

---

// File: input/fsh/examples/SPLASCH-Observation.instances.fsh


Instance: PFEIG-SPLASCH-Hearingtonethresh-01-Obs-L250
InstanceOf: PFEClinicalTestObservation
Description: "Example PFE Clinical Test Observation for sensory functions and pain"
* subject = Reference(PFEIG-patientBSJ1)
* status = #final
* category[us-core] = OBSCAT#exam "Exam"
* category[PFEDomain] = PFEDOMAINCAT#BlockL2-b21 "Sensory functions and pain"
* effectiveDateTime = "2020-11-06T10:45:00-05:00"
* code = http://loinc.org#91375-6 "Hearing threshold Ear - left --250 Hz"
* performer[+] = Reference(PractitionerRole/PFEIG-Role-Audio-JillBradley)
* valueQuantity = 45 'dB'


---

