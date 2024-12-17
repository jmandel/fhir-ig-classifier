File: repos/HL7_SLASH_fhir-pacio-cognitive-status/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭─────────────────────────ImplementationGuide-hl7.fhir.us.pacio-cs.json──────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.pacio-cs
##### use this URL when publishing the IG:
canonical: http://hl7.org/fhir/us/pacio-cs
#####canonical: https://build.fhir.org/ig/HL7/fhir-pacio-cognitive-status
version: 1.0.0
name: PACIOCognitiveStatusImplementationGuide
title: PACIO Cognitive Status Implementation Guide
status: active
publisher:
  name: HL7 Patient Care Work Group
  url: http://www.hl7.org/Special/committees/patientcare
  email: patientcare@lists.HL7.org
jurisdiction: urn:iso:std:iso:3166#US
contact:
  - name: PACIO project
    telecom:
      - system: url
        value: http://www.hl7.org/Special/committees/patientcare
      - system: email
        value: info@pacioproject.org
description: To advance interoperable health data exchange between post-acute care (PAC)
  and other providers, patients, and key stakeholders
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core: 3.1.1
  hl7.fhir.uv.sdc: 2.7.0
parameters:
  show-inherited-invariants: false
  path-expansion-params: '../../input/_resources/terminology-settings.json'  # for using US ed of SNOMED
copyrightYear: 2020+
releaseLabel: STU 1

# ╭───────────────────────────────────────package-list.json────────────────────────────────────────╮
# │  To use a provided ig-data/package-list.json file, delete the "history" property below.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
### NOTE: created ig-data/package-list.json

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#menu:
#   IG Home: index.html
#   Table of Contents: toc.html
#   Underlying Technologies: underlying_technologies.html
#   Use Case Example: Cognitive_status_use_case.html
#   Profile Highlights and Guidance: profile_highlights_and_guidance.html
#   Artifacts Summary: artifacts.html
#   Other Resources:
#     "FHIR Spec ": new-tab external {{site.data.fhir.path}}index.html


---

// File: input/pagecontent/cognitive_status_use_case.md

### Example Scenario

Cognitive and mental status observations may be collected in various ways including assessment tools, instruments, screens,  or other types of structured resources.  Although the example and use case reflect a post-acute care (PAC) scenario, this IG is intended to cover the FHIR-based exchange of cognitive and mental status observations completed and exchanged between healthcare settings and Home and Community-Based Services (HCBS) broadly.

Post-acute care patients are typically complex from a healthcare perspective and have many stops during their healthcare journey (as shown in Figure 1). Cognitive and mental observations are conducted by professional staff at the healthcare settings. As the patient moves from one healthcare setting to another, it is important that their cognitive data travel with them so that the new healthcare setting has the most complete information about that patient to provide the best care, effectively coordinates care with multiple providers/professionals, and has a picture of an individual’s cognitive status (and changes) over time.

Figure 1, the example PAC patient healthcare journey, illustrates a common scenario for an elderly patient moving through the healthcare ecosystem. The journey starts with Ms. Smith in her home. She has a medical event that results in an emergency medical service (EMS) transport to Hospital A. Following her hospital stay, Ms. Smith returns home and receives PAC Home Health services. The Home Health agency is coordinating care with multiple professionals and provider organizations including Ms. Smith’s primary physician and her pharmacy, behavioral health provider, and outpatient dialysis provider. During her Home Health encounter, an Outcome and Assessment Information Set (OASIS) is complete which includes cognitive and mental observations and electronically transmitted to CMS as required. The assessment instrument resides in the agencies EHR and the cognitive and mental observations are shared using FHIR with her and her care team as appropriate.

Ms. Smith has another medical event at home and is transferred to Hospital B. Her previous cognitive and mental observations data is shared with the hospital. From Hospital B, Ms. Smith is transferred to a PAC Skilled Nursing Facility (SNF). The hospital shares information with the SNF including cognitive and mental details. The SNF completes a Minimum Data Set (MDS) assessment instrument which includes cognitive and mental information and electronically transmits the MDS to CMS. The cognitive and mental observations are shared with Ms. Smith and her care team (Physician, Pharmacy, Daughter, etc.). She is discharged from the SNF and returns home with a variety of home and community-based Services. The SNF shares information with Ms. Smith, her daughter, her physician and HCBS providers to support care transition and coordination. While receiving HCBS, the Functional Assessment Standardized Items (FASI) is completed which includes a cognitive and mental observations. FASI data is electronically transmitted to CMS. The HCBS provider shares current and longitudinal cognitive and mental observations with Ms. Smith’s care team and providers.


![Patient Journey](Patient_Journey.png){:style="float: none;"}

Figure 1: Example Post-acute Care Patient Healthcare Journey


### Data Exchange

In Figure 2, the patient is admitted to Healthcare Setting A due to the result of an event requiring medical attention, such as a stroke. Healthcare setting A has the patient complete several cognitive and mental assessment instruments. The results are documented in the electronic health record (EHR) system of Healthcare Setting A.

Healthcare Setting A transfers the patient to Healthcare Setting B. When the patient arrives at Healthcare Setting B, their clinicians can retrieve the results from the cognitive and mental assessment instruments that were performed on the patient at Healthcare Setting A, as part of the transfer summary, using the profiles for exchanging cognitive status data defined in this Implementation Guide. Additionally, during the patients stay in Healthcare setting B, the clinician documents the results from completed cognitive and mental assessment instruments.

Healthcare Setting B transfers the patient to Healthcare Setting C. When the patient arrives at Healthcare Setting C, their clinicians can retrieve the results from the cognitive and mental assessment instruments that were performed on the patient at Healthcare Setting A and Healthcare Setting B, as part of the transfer summary, using the profiles for exchanging cognitive status data defined in this Implementation Guide.

Authorized caregivers, including the patient, their family, and clinicians can also access the results from the cognitive and mental assessment instruments from Healthcare Setting A, Healthcare Setting B, and Healthcare Setting C at any time through a patient sharing system (mobile/web application), so that they are informed about the patient’s care, can track progress, and can be more engaged in their healthcare decisions.


![Cognitive Status Use Case](Cognitive_Status_Use_Case.png){:style="float: none;"}

Figure 2: Cognitive Status Use Case

---

// File: input/pagecontent/index.md

### Background

An individual’s cognitive status and mental functioning is crucial information to communicate for successful care coordination at transition of care and for on-going shared care. Care coordination – when a person transitions between healthcare settings, including ambulatory care, acute care, long-term post-acute care (LTPAC), and home- and community-based services (HCBS) – is often fragmented and can lead to poor health outcomes, increased burden, and increased costs. Interoperable health information exchange has the potential to improve patient and provider communications and supports access to longitudinal health information that enables improved efficiencies, improved quality of care, and improved health outcomes. Data should be usable across the continuum of care, and beyond the traditional healthcare system – into the community.

Providers frequently are not receiving complete and accurate information including cognitive status and mental functioning in a timely manner, leading to adverse outcomes and additional expenses. Failure to exchange accurate, timely data often leads to inefficient workflows, duplicative data entries, and increased risk of patient harm attributable to missing or inaccurate information. Health Information Technology (Health IT) can significantly alleviate administrative burden by supporting health information exchange across care settings to ensure that the relevant information necessary to care for the incoming patient is delivered to the right person, at the right time- therefore improving patient outcomes, reducing provider burden, improving cost efficiencies, and improving workflows. Moreover, enhanced data exchange would allow for advanced computability, standardization, usability, and real-time data analytics, enabling broader data use by health IT developers, researchers, providers, and payers.

Poor quality discharge information is a major barrier to safe and effective transitions. With 45% of Medicare beneficiaries requiring post-acute care (PAC) services after hospitalization, the need for a seamless exchange of health information is great. The findings from a 2020 study highlight the significant gap in sharing information at transition.The survey assessed continuity between hospitals and skilled nursing facilities (SNF) and found that at transition of care complete mental status information was received by the SNF only 6% of the time. [[JAMA Network Open. 2021;4(1):e2033980. doi: 10.1001/jamanetworkopen.2020.33980](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2775075)].

The scope of this Cognitive Status Implementation Guide (IG) focuses on exchanging cognitive and mental function observations primarily involving PAC transitions with various care settings and HCBS. While this is the start, the IG is intended to expand over time and include cognitive status and mental functioning observations not limited to post-acute care. The impetus for this initial focus is the amendment to the Social Security Act in 2014 to include the Improving Medicare Post-Acute Care Transformation (IMPACT) Act. IMPACT required the standardization and interoperability of patient assessment in specific categories for PAC settings, including long-term care hospitals (LTCHs), home health agencies (HHAs), SNFs, and inpatient rehabilitation facilities (IRFs). It focuses on standardizing data elements in specified quality measure domains and patient assessment domains for cross setting comparison and clinical information exchange, respectively.

The Act requires:
* Reporting of standardized patient assessment data through commonly used PAC assessment instruments:
    * Minimum Data Set (MDS)for SNFs
    * Inpatient Rehabilitation Facility – Patient Assessment Information (IRF – PAI) for IRFs
    * LTCH Continuity Assessment Record and Evaluation (CARE) Data Set (LCDS) for LTCHs
    * Outcome and Assessment Information Set (OASIS) for HHAs
* Implementation of data elements specified in each domain using standardized data elements to be nested within the assessment instruments currently required for submission by LTCH, IRF, SNF, and HHA providers.
* Data to be standardized and interoperable to allow exchange of data between PAC providers, among others, using common standards and definitions to provide access to longitudinal information and facilitate coordinated care.

![PACIO logo](./pacio.png)

### The PACIO Project

The PACIO Project is a collaborative effort to advance interoperable health data exchange between PAC and other providers, patients, and key stakeholders across health care and to promote health data exchange in collaboration with policy makers, standards organizations, and industry through a consensus-based approach.

The primary goal of the PACIO Project is to establish a framework for the development of Fast Healthcare Interoperability Resource (FHIR) technical implementation guides (IGs) and reference implementations that will facilitate health data exchange through standards-based use case-driven application programming interfaces (APIs).

### Cognitive Status

While the IG references cognitive status, it is intended to include more broadly clinical domains in mental functioning observations (characteristics that can be tested, measured, or observed and are communicated with a name-value pair structure).  Mental functioning is a broad domain. We are using the conceptual framework of the International Classification of Functioning, Disability and Health (commonly known as ICF), to highlight areas of expansion in the future including aspects such as memory functions, orientation functions, attention functions, mood, etc.  More information on mental function concepts that may be included in this IG can be found in the [ICF Browser](https://apps.who.int/classifications/icfbrowser/).

The focus of this IG is on cognitive status and mental functioning observation data (not the representation of the condition, problem, diagnosis, or health concern) utilized by various settings by providing examples using observation data from Brief Interview for Mental Status (BIMS),  Confusion Assessment Method (CAM), Montreal Cognitive Assessment (MoCA), Mini-Mental State Examination (MMSE), prior level of cognitive function, and Patient Health Questionnaire (PHQ-9) all of which have LOINC representation for the question/answer structure. This IG is not limited to PAC cognitive status and mental functioning observations and in the future will be expanded to include other relevant observations utilized by health care settings and practitioners more broadly. A cognitive status and mental functioning observation are part of an evaluation or assessment of a patient’s status. The cognitive and mental observations may include details of a patient’s mood, memory, and ability to make decisions. The observation data, if present, will include supporting caregivers, non-medical devices, and the time period for which the assessment instruments were performed.

In this IG a set of starter profiles based on some well-established FHIR resources is presented to define data models which specify data elements and coding standards to promote standardization and interoperability.

### Content and Organization
The implementation guide is organized into the following sections:
* [Use Case Example](cognitive_status_use_case.html) Describes an example of its use and provides a high-level overview of expected process flow.
* [Underlying Technologies](underlying_technologies.html) Describes the different specifications this implementation guide relies on and indicates what developers should read and understand prior to implementing this specification.
* [Profile Highlights and Guidance](profile_highlights_and_guidance.html) Provides a closer look at the IG profiles and guidance for constructing profile instances with examples for data exchange.
* [Representative Assessments](representative_assessments.html) Presents representative examples of standardized instruments and guidance on the use of standardized code systems.
* [Security and Data Sharing](security_and_data_sharing.html) Covers issues concerning security and patient information access and sharing.
* [Artifacts Summary](artifacts.html) Introduces and provides links to the Capability Statement, IG Resource Profiles, and IG Extension Definitions as well as example profile instances.

### Dependencies
This implementation guide relies on the following other specifications:
* [FHIR R4]({{site.data.fhir.path}}) - The 'current' official version of FHIR as of the time this implementation guide was published.  See the [background page](underlying_technologies.html) for key pieces of this specification implementers should be familiar with.
* [US Core STU3](http://hl7.org/fhir/us/core) - The version of US Core based on FHIR R4.

This implementation guide defines additional constraints and usage expectations above and beyond the information found in these base specifications.

### Downloads
* The full [PACIO Cognitive Status Implementation Guide](full-ig.zip)
* [FHIR R4 PACIO CS Resource Definitions](definitions.json.zip) for use with the FHIR PACIO CS IG validator
* [FHIR R4 PACIO CS IG Validator Pack](validator-hl7.fhir.us.pacio-cs.pack) which can be used to check FHIR PACIO CS IG resource instance validity

---

// File: input/pagecontent/profile_highlights_and_guidance.md

This implementation guide provides a set of resource profiles to define how information should be packaged and retrieved in the exchange of PAC assessment data. In the following sections the highlights of the key fields of each profile are presented and guidance for building profile instances is provided.

A note on the use of "Must Support" in the Implementation Guide:
For profiles defined in other IGs, the meaning of "Must Support" is established in the defining IG. For profiles defined in this IG, [Must Support](http://hl7.org/fhir/us/core/general-guidance.html#must-support) will conform with US Core definition.

### Resource Profile: CognitiveStatusCollection

This resource profile is intended to be used for the data exchange of a point in time set of cognitive status observations collected through the use of a structured resource (e.g. assessment tool, instrument, or screen). It is derived from the FHIR Observation resource.

### Resource Profile: CognitiveStatus

This resource profile is intended to be used for the data exchange of a single cognitive status observation generally included in a set of observations collected through the use of a structured resource (e.g. assessment tool, instrument, or screen). It is derived from the FHIR Observation resource.
### Resource Profile: PriorLevelOfCognitiveFunction

This resource profile is intended to be used for the data exchange of a summary observation regarding the most recent prior level of cognitive function immediately preceding the current admission, illness, or exacerbation for a patient. The use of this profile is encouraged in the absence of formal prior level of cognitive assessments. For formal assessments conducted with for example, an assessment instrument, use the Cognitive Status Collection and Cognitive Status profiles to capture assessment data. It is derived from the FHIR Observation resource.

### Resource Profile: UseOfDevice

This resource profile is intended to be used for specifying a device used by a patient during a cognitive status assessment. It is derived from the FHIR resource DeviceUseStatement.


### Data Exchange Guidance and Examples

The PACIO data model as expressed in the resource profiles is designed to be flexible so as to facilitate the exchange of a variety of types of PAC assessment data. The key to effective data exchange and searching of assessment data is the use of content standards. Therefore, it is paramount that nationally accepted, standardized coding systems such as LOINC and SNOMED are used in specifying assessment data elements.

In the following set of examples, we provide guidance for using specific codes and conventions for constructing profile instances for data exchange. Although we reference a number of particular PAC patient/resident assessment instruments and provide examples to show how those particular types of assessment data can be exchanged, we do not endorse any of those assessment instruments over other assessment instruments that we have not mentioned. Our intention is to demonstrate the flexibility and adequacy of the PACIO data model, rather than to suggest the best types of cognitive assessment data for clinicians to use.

### SDC QuestionnaireResponse – CAM Example

![QResponse CAM Example](QResponse_CAM_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. The ‘questionnaire’ field is the URL pointing to the file of the questionnaire that defines and organizes the questions for which answers are being provided.
2. Each ‘linkId’ field should match the ‘linkId’ of the corresponding section title or question from the questionnaire.
3. The nesting structure of the ‘item’ fields should correspond to the nesting structure as showed in the questionnaire.

### CognitiveStatusCollection – CAM Example

![BCS CAM Example](BCS_CAM_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Here is how the ‘event-location’ extension is used to point to a FHIR Location resource to indicate where the observation event occurred.
2. Use the right LOINC code to indicate the particular kind of cognitive assessment. In this case the LOINC code ‘86585-7’ is used to indicate ‘Signs and Symptoms of Delirium (from CAM©)’.
3. The ‘category’ field should contain the value ‘survey’ for a PAC assessment.

### CognitiveStatusCollection – BIMS Example

![BCS BIMS Example](BCS_BIMS_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Use the right LOINC code to indicate the particular kind of cognitive assessment. In this case the LOINC code ‘52491-8’ is used to indicate ‘Brief Interview for Mental Status (BIMS)’.
2. Use multiple ‘performer’ fields to provide references to FHIR Practitioner, PractitionerRole, and Organization resource instances.

### CognitiveStatusCollection – MoCA Example

![BCS MOCA Example](BCS_MOCA_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Use the right LOINC code to indicate the particular kind of cognitive assessment. In this case the LOINC code ‘52491-8’ is used to indicate ‘Montreal Cognitive Assessment [MoCA]’.
2. Use the ‘value’ field of type CodeableConcept to store the total score of the MoCA assessment.

### CognitiveStatusCollection – PHQ-9 Two-Column Example

![BCS PHQ9 Example](BCS_PHQ9_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Use the right LOINC code to indicate the particular kind of cognitive assessment. In this case the LOINC code ‘54635-8’ is used to indicate ‘Resident Mood Interview (PHQ-9)’.
2. An assessment with more than one observation questions would have a number of ‘hasMember’ elements, each of which would point to an observation in the assessment.
3. The observation questions of the PHQ-9 assessment are grouped under two headings. One way to determine which ‘hasMember’ elements (i.e. observation questions) should be grouped together and under which heading is to examine the CognitionQuestionnaireResponse resource, which has the nesting structure to show how the questions were organized.

### PriorLevelOfCognitiveFunction – Prior Level of Cognitive Function Example

![PLOCF Example](PLOCF_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Use the extension to provide indication of 'independent' vs. 'assistance needed'.
2. Text summary of the prior level of cognitive function for the patient.


---

// File: input/pagecontent/representative_assessments.md

<blockquote class="stu-note">
<p><b>Note to Commenters:</b>
The PACIO Cognitive Status workgroup is seeking feedback on the level of guidance needed related to specific assessment instruments. In addition, comments around whether this guidance should be included in the Cognitive Assessment IG or published as a supplemental guide.
</p>
<p><b>Note to Commenters:</b>
LOINC is included as an example. We would like to find out how prevalent other code systems (i.e. SNOMED) and should guidance be included here.
</p>
</blockquote>
<br>
### Standardized Assessments and Code Systems

A large number and variety of assessment instruments exist for assessing cognitive function in care settings. The following instruments have been analyzed for the purposes of providing implementation guidance and exchange of cognitive status. Standardized instruments that assess cognitive function fall into three broad categories based on use of standardized code systems.

1. Fully Codified -- These instruments have standardized terminology associated with them, meaning the entire instrument can be modelled.
2. Partially Codified -- These instruments generally have standardized question and answer pairs and a code to describe the instrument and total score. However, critical meta data or other information may only be found on the assessment itself.
3. Not Codified -- These instruments do not have standard codes associated with them and may be proprietary. Exchange of this information may require special handling and/or development. In this case it is expected that the assessment instrument and result are expected to be exchanged.

Representative examples of each of these categories are provided in the following sections to guide implementers.

### Fully Codified Assessments

 The following are considered fully codified assessments:

<table class="grid">
  <thead>
    <tr>
      <th>COGNITIVE TESTS/SCREENS</th>
      <th>LOINC</th>
    </tr>
  </thead>
  <tr>
    <td>Confusion Assessment Method (CAM)</td>
    <td>52495-9 Confusion Assessment Method (CAM)<br>
        &nbsp;&nbsp; 52738-2 Inattention<br>
        &nbsp;&nbsp; 52739-0 Disorganized thinking<br>
        &nbsp;&nbsp; 52740-8 Altered level of consciousness/alertness<br>
        &nbsp;&nbsp; 52741-6 Psychomotor retardation
    </td>
  </tr>
  <tr>
    <td>Brief Interview for Mental Status (BIMS)</td>
    <td>52491-8 Brief Interview for Mental Status<br>
        &nbsp;&nbsp; 52731-7 Repetition of Three Words. Number of words repeated after first attempt<br>
        &nbsp;&nbsp; 54510-3 Temporal Orientation (orientation to year, month, and day)<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52732-5 Able to report correct year<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52733-3 Able to report correct month<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 54609-3 Able to report correct day of the week<br>
        &nbsp;&nbsp; 52493-4 Recall<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52735-8 Able to recall "sock"<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52736-6 Able to recall "blue"<br>
        &nbsp;&nbsp;&nbsp;&nbsp; 52737-4 Able to recall "bed"<br>
        &nbsp;&nbsp; 54614-3 BIMS Summary Score
    </td>
  </tr>
  <tr>
    <td>Patient Health Questionnaire (PHQ)</td>
    <td>58120-7 Patient Health Questionnaire 2 item (PHQ-2) [PHQ.CMS]<br>
        55758-7 Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]<br><br>
        54635-8 Patient Mood Interview (PHQ-2 to 9)<br>
        44261-6 Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]<br><br>
        54657-2 Staff assessment of resident mood (PHQ-9-OV) [Observed PHQ-9 CMS]<br>
        54677-0 Staff assessment of resident mood total severity score [Observed PHQ-9 CMS]<br><br>
        89206-7 Patient Health Questionnaire-9: Modified for Teens [Reported.PHQ.Teen]<br>
        89204-2 Patient Health Questionnaire-9: Modified for Teens total score [Reported.PHQ.Teen]
    </td>
  </tr>
</table>

### Partially Codified Assessments

Assessments that have LOINC codes for representing the instrument should be used for exchanging the instrument and result. Additional ‘meta data’ fields, such as author can be mapped using QuestionnaireResponse.

MoCA is provided as an example:

<table class="grid">
  <tr>
    <td>Montreal Cognitive Assessment (MoCA)</td>
    <td>72133-2 Montreal Cognitive Assessment [MoCA]<br>
        72172-0 Total score [MoCA]
    </td>
  </tr>
</table>

### Not Codified Assessments

Some assessments do not have any codes associated with them. In this case, the individual data elements contained in the assessment instrument can be mapped to QuestionnaireResponse fields.

The Brief Cognitive Assessment Tool (BCAT) is included here as an example:

<table class="grid">
  <thead>
    <tr>
      <th>BCAT Fields</th>
      <th>Mapping</th>
      <th>Reference Mapping</th>
      <th>Values</th>
    </tr>
  </thead>
  <tr>
    <td>Name</td>
    <td>QuestionnaireResponse.Subject</td>
    <td>patient.name</td>
    <td></td>
  </tr>
  <tr>
    <td>DOB</td>
    <td>QuestionnaireResponse.Subject</td>
    <td>patient.birthDate</td>
    <td></td>
  </tr>
  <tr>
    <td>Gender</td>
    <td>QuestionnaireResponse.Subject</td>
    <td>patient.gender</td>
    <td>AdministrativeGender (required)</td>
  </tr>
  <tr>
    <td>Education</td>
    <td>Observation.component</td>
    <td></td>
    <td>91694-0, LL836-8</td>
  </tr>
  <tr>
    <td>Examiner</td>
    <td>QuestionnaireResponse.author</td>
    <td>Reference to Practitioner/role</td>
    <td></td>
  </tr>
  <tr>
    <td>Today's Date</td>
    <td>QuestionnaireResponse.authored ('dateTime' type)</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Total Score</td>
    <td>Observation.value</td>
    <td>Not contained in QuestionareResponse</td>
    <td></td>
  </tr>
  <tr>
    <td>referenceRange</td>
    <td>Observation.ReferenceRange</td>
    <td>Not part of BCAT form but needed for interpreting total score.</td>
    <td></td>
  </tr>
</table>

Codes for Education:
* CMS Data Element [A1050](https://del.cms.gov/DELWeb/pubDataEleDetail?asmtId=6&asmtItmId=A1050) Highest education completed<br>
* LOINC [91694-0](https://loinc.org/91694-0/) Highest level of education of Personnel


---

// File: input/pagecontent/security_and_data_sharing.md

### Security, Privacy, and Consent

The FHIR specification includes a set of security considerations including security, privacy, and access control (see [FHIR Security](http://hl7.org/fhir/security.html)). These considerations apply to diverse use cases and provide general guidance for choosing among security specifications for particular use cases.

This Implementation Guide leverages the [SMART-on-FHIR](http://docs.smarthealthit.org/) and [OAuth2.0](https://oauth.net/2/) standards, which add authentication and authorization capabilities to FHIR. This architecture is intended to maximize the number of clinical systems that conform to this guide as well as to allow for easy growth and extensibility of system capabilities in the future.

### SMART-on-FHIR Patient-Access

The sharing of data with a patient-controlled third-party app is accomplished through the patient’s HIPAA Right of Access, which allows the patient to use their data in any way they desire. As a result, the third-party app may not be a HIPAA Covered Entity or Business Associate of a covered entity and may not be covered by HIPAA controls in the use of data, sensitive or otherwise.

The patient or authorized caregiver **SHALL** authenticate using credentials that have been issued, or recognized and accepted, by the provider. These are typically the provider’s credentials for a patient portal or health information exchange network.


---

// File: input/pagecontent/underlying_technologies.md

Based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard, this implementation guide uses terminology, notations, and design principles that are specific to FHIR. Implementers of this specification therefore need to understand some basic information about this specification.

### Fast Healthcare Interoperability Resources

Before reading this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read the following prior to reading the rest of this implementation guide.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html)
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html)
* [Base resource]({{site.data.fhir.path}}resource.html)
* [Security]({{site.data.fhir.path}}security.html)
* [Security Labels]({{site.data.fhir.path}}security-labels.html)

This implementation guide supports the [R4]({{site.data.fhir.path}}index.html) version of the FHIR standard and builds on the [US Core Implementation Guide](http://hl7.org/fhir/us/core), and implementers need to familiarize themselves with the profiles in that guide.


---

// File: input/fsh/bundledCognitiveStatus.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        CognitiveStatusCollection
Parent:         Observation
Id:             pacio-csc
Title:          "PACIO Cognitive Status Collection"
Description:    "A point in time collection of cognitive status observations for a patient. This profile is used for exchanging a set of observation data collected through the use of a structured resource (e.g. assessment tool, instrument, or screen)."

* code from LNCVS (extensible)

* subject 1..1
* subject only Reference(USCorePatient)

* encounter only Reference(USCoreEncounter)

* performer 1..*
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)

//* value[x] only CodeableConcept or Quantity

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "coding"
//* category[1] ^slicing.discriminator.type = #value
//* category[1] ^slicing.discriminator.path = #system
// * category ^slicing.discriminator[1].type = #value
// * category ^slicing.discriminator[1].path = "coding"
* category ^slicing.rules = #open
//* category ^slicing.ordered = true
// * category ^slicing.description = "Slice based on the category pattern"

* category contains functioning 1..1

* category[functioning] from PACIOFunctioningCategoryVS (extensible)
// first slice: must have fixed value 'functioning'
//* category[functioning] 1..*
* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// second slice: any code from the Observation Categaory Value Set
//* category[other] 0..1
//* category[other].coding from CATVS (extensible)





// * category.coding ^slicing.discriminator.type = #pattern
// * category.coding ^slicing.discriminator.path = "code"
// //* category[1] ^slicing.discriminator.type = #value
// //* category[1] ^slicing.discriminator.path = #system
// * category ^slicing.rules = #open
// * category ^slicing.ordered = true
// * category ^slicing.description = "Slice based on the category pattern"

// * category contains functioning 1..1 and other 0..1

// * category[functioning].coding from PACIOFunctioningCategoryVS (extensible)
// // first slice: must have fixed value 'functioning'
// //* category[functioning] 1..*
// * category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// // second slice: any code from the Observation Categaory Value Set
// //* category[other] 0..1
// * category[other].coding from CATVS (extensible)

* effective[x] 1..1
* effective[x] only dateTime or Period

* hasMember only Reference(CognitiveStatus)
* hasMember MS

* derivedFrom only Reference(SDCQR)
* derivedFrom MS

* effective[x] ^short = "Clinical relevant time for an assessment such as cognitive assessments performed with structured evaluation tools is the time the evaluation occurs, i.e., when the clinician obtains the answers entered in the tool. However, the only timing available may be when then tool is completed by the clinician. That timing is generally documented as a point in time (dateTime)."
* effective[x] ^definition = "Clinical relevant time for an assessment such as cognitive assessments performed with structured evaluation tools is the time the evaluation occurs, i.e., when the clinician obtains the answers entered in the tool. However, the only timing available may be when then tool is completed by the clinician. That timing is generally documented as a point in time (dateTime)."
* effective[x] ^comment = "The use of effective[x] and dateTime versus Period is subject to implementer workflow and needs.  In most situations, an observation is considered as a point in time, even if the assessment occurred over a period of time.  Period is included in this implementation guide to provide additional flexibility for specific use cases.  However, it is expected most observations will be recorded using DateTime.  Furthermore, any retrieval of information should return the relevant if DateTime is requested, even if the original observation was recorded as a period.  Some implementers may choose to use additional functions in there retrieves to 'normalize' intervals, as is done in Clinical Quality Language (CQL)."
* category ^short = "A second category code may be used along with the code “functioning”. For example, for assessment tool/survey instrument observations use “survey” as a second code."
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."
* code ^short = "For a Post-Acute Care structured assessment resource such as an instrument or screen, use a LOINC code to identify the instrument/screen name or panel/section title to indicate the kind of assessment."
* subject ^short = "Should only reference a Patient resource."
* value[x] ^short = "If used, should use the CodeableConcept datatype whenever possible to provide a suitable code to define the concept for the observation data. When capturing a collection of related observations, typically this field is not used. If the outcome of an assessment includes one or more summary scores, leave this field unused and use the 'hasMember' field to point to one or more Observation resources with each of which has a score provided in the 'value' field."
* component ^short = "Currently not used in CognitiveStatusCollection."
* basedOn ^short = "Currently not used in CognitiveStatusCollection."
* partOf ^short = "Currently not used in CognitiveStatusCollection."
* status ^short = "Should have the value 'final' when all the observatons are complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."
* focus ^short = "Currently not used in CognitiveStatusCollection."
* issued ^short = "Currently not used in CognitiveStatusCollection."
* dataAbsentReason ^short = "Currently not used in CognitiveStatusCollection."
* interpretation ^short = "Currently not used in CognitiveStatusCollection."
* bodySite ^short = "Currently not used in CognitiveStatusCollection."
* method ^short = "Currently not used in CognitiveStatusCollection."
* specimen ^short = "Currently not used in CognitiveStatusCollection."
* device ^short = "Currently not used in CognitiveStatusCollection."
* referenceRange ^short = "Currently not used in CognitiveStatusCollection."
* hasMember ^short = "Each cognitive status observation in the collection."
* derivedFrom ^short = "Should point back to the SDC QuestionnaireResponse that this resource is derived from."

* extension contains ObservationEventLocation named event-location 0..1 MS
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension contains DevicePatientUsed named device-use 0..* MS
* extension[device-use] ^short = "An extension to indicate a record of assistive device usage by a patient during an assessment."

Extension: ObservationEventLocation
Parent: EventLocation
Description: "This extension is used to indicate the principal physical location where an observation event occurred."
Id: event-location
* value[x] only Reference(USCoreLocation)

Extension: DevicePatientUsed
Description: "Associated with the Cognitive Status Collection profile to point to a record indicating what healthcare-related assistive device was used by a patient during a functional status assessment. This extension leverages the DeviceUseStatement resource instead of Device resource so as to indicate appropriately a record of assistive device usage by a patient."
Id: device-patient-used
* value[x] only Reference(UseOfDevice)
* value[x] ^short = "Points to a record of a healthcare-related assistive device being used by a patient during an assessment."

---

// File: input/fsh/CAM-BundledObservationInstances.fsh

/*************
Alias:  LNC = http://loinc.org
Alias:  CAT = http://terminology.hl7.org/CodeSystem/observation-category
Alias:  DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason
*************/

Instance: CSC-SNF-CAM-Admission-1
InstanceOf: CognitiveStatusCollection
Description: "An instance of CognitiveStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = LNC#86585-7
* code.coding.display = "MDS v3.0 - RAI v1.17.2 - Signs and symptoms of delirium (from CAM) [CMS Assessment]"
//* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* hasMember[0] = Reference(CSC-SNF-CAM-Admission-1-Ob-Question-1)
* hasMember[1] = Reference(CSC-SNF-CAM-Admission-1-Ob-Question-3)
* hasMember[2] = Reference(CSC-SNF-CAM-Admission-1-Ob-Question-5)
* derivedFrom = Reference(QResponse-SNF-CAM-Admission-1)
//* derivedFrom.display = "Questionnaire Response"


---

// File: input/fsh/CAM-CognitionQuestionnaireResponseInstances.fsh

//Alias: Q-MDS3-NC-1.17 = https://api.logicahealth.org/PACIO/open/Questionnaire/MDS3.0-NC-1.17

Instance: QResponse-SNF-CAM-Admission-1
InstanceOf: SDCQR
Description: "An instance of SDC QuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-04-09T18:00:00-05:00"

* item[0].linkId = "Section-3"
* item[0].text =  "Cognitive Patterns"
//* item[0].id = "86529-5"
* item[0].item[0].linkId = "Section-3/C1310"
* item[0].item[0].text =  "Signs and Symptoms of Delirium (from CAM)"
//* item[0].item[0].id = "86585-7"
* item[0].item[0].item[0].linkId = "Section-3/C1310A"
* item[0].item[0].item[0].text =  "Is there evidence of an acute change in mental status from the patients baseline?"
//* item[0].item[0].item[0].id = "54632-5"
* item[0].item[0].item[0].answer.valueCoding = LNC#LA32-8 "No"
* item[0].item[0].item[1].linkId = "Section-3/C1310B"
* item[0].item[0].item[1].text =  "Did the patient have difficulty focusing attention, for example being easily distractible, or having difficulty keeping track of what was being said?"
//* item[0].item[0].item[1].id = "54628-3"
* item[0].item[0].item[1].answer.valueCoding = LNC#LA61-7 "Behavior not present"
* item[0].item[0].item[2].linkId = "Section-3/C1310C"
* item[0].item[0].item[2].text =  "Did the resident have altered level of consiousness as indicated by any of the following criteria: (1) Vigilant - startles easily to any sound or touch, (2) Lethargic - repeatedly dozed off when being asked questions, but responded to voice or touch, (3) Stuporous - very difficult to arouse and keep aroused for the interview, (4) Comatose - could not be aroused"
//* item[0].item[0].item[2].id = "54629-1"
* item[0].item[0].item[2].answer.valueCoding = LNC#LA61-7 "Behavior not present"


---

// File: input/fsh/CAM-ObservationInstances.fsh

/***********
Alias: LNC = http://loinc.org
Alias: UOM = http://unitsofmeasure.org
Alias: DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason
**********/

Instance: CSC-SNF-CAM-Admission-1-Ob-Question-1
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = LNC#54632-5
* code.text = "Acute Onset Mental Status Change. Is there evidence of an acute change in mental status from the resident's baseline?"
* code.coding.display = "Acute onset mental status change [CAM.CMS]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA32-8
* valueCodeableConcept.text = "No"
* valueCodeableConcept.coding.display = "No"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-CAM-Admission-1)

Instance: CSC-SNF-CAM-Admission-1-Ob-Question-3
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = LNC#54628-3
* code.text = "Inattention - Did the resident have difficulty focusing attention, for example, being easily distractible or having difficulty keeping track of what was being said?"
* code.coding.display = "Inattention in last 7 days [CAM.CMS]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA61-7
* valueCodeableConcept.text = "Behavior not present"
* valueCodeableConcept.coding.display = "Behavior not present"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-CAM-Admission-1)

Instance: CSC-SNF-CAM-Admission-1-Ob-Question-5
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-04-09T18:00:00-05:00"
* code = LNC#54629-1
* code.text = "Disorganized Thinking - Was the resident's thinking disorganized or incoherent (rambling or irrelevant conversation, unclear or illogical flow of ideas, or unpredictable switching from subject to subject)?"
* code.coding.display = "Disorganized thinking in last 7 days [CAM.CMS]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA61-7
* valueCodeableConcept.text = "Behavior not present"
* valueCodeableConcept.coding.display = "Behavior not present"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-CAM-Admission-1)


---

// File: input/fsh/CodeSystemsAndValueSets.fsh

CodeSystem: PACIOFunctioningCategoryCS
Title: "PACIO Functioning Category Code System"
Id: pacio-cat-cs
Description: "Defining a specific code for the classification of patient observation regarding individual's functioning."
* #functioning "Functioning" "Functioning is an umbrella term for body function, body structures, activities, and participation in societal roles. An individual’s functioning represents a dynamic interaction between their health condition, environmental factors, and personal factors. Taking a broad view of health that encompasses physical, mental, and social well-being, includes optimizing functioning as a component of optimizing their health. Characterizing an individual’s functioning includes both understanding the severity of an individual’s signs, symptoms, impairments and limitations, and how they correspond with day-to-day activities. Functioning also serves as a key health outcome within health care."

ValueSet: PACIOFunctioningCategoryVS
Title: "PACIO Functioning Category Value Set"
Description: "Codes for the classification of patient observation. This is an extension of the ObservationCategoryCodes value set"
Id: pacio-cat-vs
* include codes from valueset CATVS
* include codes from system PACIOFunctioningCategoryCS


---

// File: input/fsh/CognitiveStatus.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        CognitiveStatus
Parent:         Observation
Id:             pacio-cs
Title:          "PACIO Cognitive Status"
Description:    "An exchange of cognitive status observation for a patient. This profile is used for exchanging a single observation data generally included in a set of observation data collected through the use of a structured resource (e.g. assessment tool, instrument, or screen)."

* code from LNCVS (extensible)

* subject 1..1
* subject only Reference(USCorePatient)

* encounter only Reference(USCoreEncounter)

* performer 1..*
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)

//* value[x] only CodeableConcept

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "coding"
* category ^slicing.rules = #open
//* category ^slicing.ordered = true
* category contains functioning 1..1
* category[functioning] from PACIOFunctioningCategoryVS (extensible)
* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"

// * category 1..* MS
// * category from PACIOFunctioningCategoryVS (extensible)
// * category = PACIOFunctioningCategoryCS#functioning

* effective[x] 1..1
* effective[x] only dateTime

* derivedFrom only Reference(SDCQR)
* derivedFrom MS

* extension contains ObservationEventLocation named event-location 0..1 MS

// * component.code from LNCVS (extensible)
// * component.value[x] only CodeableConcept

* category ^short = "A second category code may be used along with the code “functioning”. For example, for assessment tool/survey instrument observations use “survey” as a second code."
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."
* code ^short = "For a Post-Acute Care Assessment, should include a LOINC code and text for the question or concept name."
* subject ^short = "Should only reference a Patient resource."
* value[x] ^short = "Whenever possible should use the CodeableConcept datatype to provide a suitable code to define the concept for the observation data. As for values like an assessment score or roll-up value, the datatype for this element should be determined by Observation.code. However, for values that are ordinal, may use the CodeableConcept datatype along with the Ordinal Value Extension."
* component ^short = "Currently not used in CognitiveStatus."
// * component ^short = "If used, the answers for the associated questions (for the purpose of grouping answers under a heading and displaying side-by-side columns)"
// * component.code ^short = "If used, the LOINC code or text of the column header (for the purpose of grouping answers under a heading and displaying side-by-side columns)."
// * component.value[x] ^short = "The code and text for the answer to the (associated) question."
* basedOn ^short = "Currently not used in CognitiveStatus."
* partOf ^short = "Currently not used in CognitiveStatus."
* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."
* focus ^short = "Currently not used in CognitiveStatus."
* issued ^short = "Currently not used in CognitiveStatus."
* interpretation ^short = "Currently not used in CognitiveStatus."
* bodySite ^short = "Currently not used in CognitiveStatus."
* method ^short = "Currently not used in CognitiveStatus."
* specimen ^short = "Currently not used in CognitiveStatus."
* device ^short = "Currently not used in CognitiveStatus."
* referenceRange ^short = "Currently not used in CognitiveStatus."
* hasMember ^short = "Currently not used in CognitiveStatus."
* derivedFrom ^short = "Should point back to the SDC QuestionnaireResponse that this resource is derived from."
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."



---

// File: input/fsh/DeviceInstances.fsh

Alias: DVT = https://www.hl7.org/fhir/valueset-device-nametype.html
Alias: SCT = http://snomed.info/sct

Instance: CMS-Device-1
InstanceOf: Device
Description: "An instance of Device"
* deviceName.name = "Eyeglasses"
* deviceName.type = DVT#user-friendly-name
* type = SCT#50121007

Instance: CMS-Device-2
InstanceOf: Device
Description: "An instance of Device"
* deviceName.name = "Hearing aid"
* deviceName.type = DVT#user-friendly-name
* type = SCT#6012004


---

// File: input/fsh/DeviceUse.fsh

Alias:  DVT = https://www.hl7.org/fhir/valueset-device-nametype.html
Alias: ObservationLocation = http://hl7.org/fhir/StructureDefinition/event-location
//Alias: BodySite = http://hl7.org/fhir/StructureDefinition/bodySite


Profile:        UseOfDevice
Parent:         DeviceUseStatement
Id:             pacio-cs-dev
Title:          "Use of Device"
Description:    "A record of an assistive device--e.g. eyeglasses or hearing aid, being used by a patient during a cognitive status assessment. This profile based on the DeviceUseStatement resource provides a way to include information about device usage during an assessment."
* subject 1..1
* subject only Reference(USCorePatient)
* device ^short = "The description of the device that the patient used."
* bodySite ^requirements = "Knowing where the device is targeted is important for tracking if multiple sites are possible. If more information than just a code is required, use the extension http://hl7.org/fhir/R4/extension-bodysite."


---

// File: input/fsh/GlobalAliasList.fsh

// Code Systems
// NOTE: use a code system (not value set) in instances
Alias: LNC = http://loinc.org
Alias: SCT = http://snomed.info/sct
Alias: CAT = http://terminology.hl7.org/CodeSystem/observation-category
Alias: UOM = http://unitsofmeasure.org
Alias: DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: Hl7FhirAdminGender  = http://hl7.org/fhir/administrative-gender
Alias: NUCC = http://nucc.org/provider-taxonomy

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
Alias: SDCQR = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse

//Alias: MDS3.0-NC-1.17 = http://build.fhir.org/ig/HL7/fhir-pacio-cognitive-status/MDS3.0-NC-1.17
//Alias: MDS3.0-NC-1.17 = https://api.logicahealth.org/PACIO/open/Questionnaire/MDS3.0-NC-1.17
Alias: MDS3.0-NC-1.17 = http://example.org/Questionnaire/MDS3.0-NC-1.17

---

// File: input/fsh/MicsInstances.fsh

// Patient instance
Instance: patientBSJ1
Description: "An instance of Patient"
InstanceOf: Patient
* name.given = "Betsy"
* name.family = "Smith-Johnson"
* name.text = "Betsy Smith-Johnson"

// PractitionerRole instances
Instance: Role-SLP-HoneyJones
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#159026005
* code.coding.display = "Speech and language therapist"
* active = true
* practitioner = Reference(Practitioner-HoneyJones)
* organization = Reference(Org-02)
* location = Reference(Org-Loc-02)

Instance: Role-SLP-JennyGlass
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#159026005
* code.coding.display = "Speech and language therapist"
* active = true
* practitioner = Reference(Practitioner-JennyGlass)
* organization = Reference(Org-01)
* location = Reference(Org-Loc-01)

Instance: Role-SLP-LunaBaskins
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#159026005
* code.coding.display = "Speech and language therapist"
* active = true
* practitioner = Reference(Practitioner-LunaBaskins)
* organization = Reference(Org-03)
* location = Reference(Org-Loc-03)


// Practitioner instances
Instance: Practitioner-LunaBaskins
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Luna"
* name.family = "Baskins"
* name.text = "Luna Baskins"
* active = true
* gender = #female

Instance: Practitioner-JennyGlass
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Jenny"
* name.family = "Glass"
* name.text = "Jenny Glass"
* active = true
* gender = #female

Instance: Practitioner-HoneyJones
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Honey"
* name.family = "Jones"
* name.text = "Honey Jones"
* active = true
* gender = #female

// Organization instances
Instance: Org-01
InstanceOf: Organization
Description: "An instance of Organization"
* name = "San Antonio General Hospital"

Instance: Org-02
InstanceOf: Organization
Description: "An instance of Organization"
* name = "Happy Nursing Facility"

Instance: Org-03
InstanceOf: Organization
Description: "An instance of Organization"
* name = "Sky Harbor Home Health Services"

// Location instances
Instance: Org-Loc-01
InstanceOf: Location
Description: "An instance of Location"
* status = #active
* name = "San Antonio General Hospital"
* address.text = "26022 Meadowlark Bay, San Antonio, TX 78260"

Instance: Org-Loc-02
InstanceOf: Location
Description: "An instance of Location"
* status = #active
* name = "Happy Nursing Facility"
* address.text  = "8100 Pinebrook Dr, San Antonio, TX, 78230"

Instance: Org-Loc-03
InstanceOf: Location
Description: "An instance of Location"
* status = #active
* name = "Sky Harbor Home Health Services"
* address.text  = "8810 Old Sky Harbor, San Antonio, TX 78242"


//////////////////////////////////////////////////////////

Instance: provider-role-pcp
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = NUCC#261QP2300X
* code.coding.display = "Primary Care Clinic/Center"
//* specialty = NUCC#363LP2300X
//* specialty.coding.display = "Primary Care Clinic/Center"
* active = true
* practitioner = Reference(Practitioner-JohnSmith)
//* practitioner.display = "John Smith"
* organization = Reference(provider-org-01)
* location = Reference(provider-org-loc-01)

Instance: provider-role-neurologist
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = NUCC#2084N0400X
* code.coding.display = "Neurology Physician"
//* specialty = NUCC#2084N0400X
//* specialty.coding.display = "Neurology Physician"
* active = true
* practitioner = Reference(Practitioner-NoraOlogist)
* organization = Reference(provider-org-16)
* location = Reference(provider-org-loc-16)

Instance: Practitioner-JohnSmith
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "4278275001"
* name.given = "John"
* name.family = "Smith"
* name.text = "John Smith"
* active = true
* gender = #male

Instance: Practitioner-NoraOlogist
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "3668788925"
* name.given = "Nora"
* name.family = "Ologist"
* name.text = "Nora Ologist"
* active = true
* gender = #female

Instance: provider-org-01
InstanceOf: Organization
Description: "An instance of Organization"
* name = "Primary Care INC."

Instance: provider-org-loc-01
InstanceOf: Location
Description: "An instance of Location"
* status = #active
* name = "Primary Care INC."
* address.text = "177 Deerfield St. San Antonio, TX 78207"

Instance: provider-org-16
InstanceOf: Organization
Description: "An instance of Organization"
* name = "Neuro Care INC."

Instance: provider-org-loc-16
InstanceOf: Location
Description: "An instance of Location"
* status = #active
* name = "Neuro Care INC."
* address.text = "26022 Meadowlark Bay, San Antonio, TX 78260"


---

// File: input/fsh/MocaBimsPhq9MmesBcat-BundledObservationInstances.fsh

//Alias:  LNC = http://loinc.org
//Alias:  CAT = http://terminology.hl7.org/CodeSystem/observation-category

// Instance: CSC-SNF-BCAT-1
// InstanceOf: CognitiveStatusCollection
// Description: "An instance of CognitiveStatusCollection"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T11:30:00-05:00"
// //* code = LNC#TBD-LOINC1
// //* code.coding.display = "Brief Cognitive Assessment Tool [BCAT]"
// * code.text = "Brief Cognitive Assessment Tool [BCAT]"
// //* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// * category[1].coding = CAT#survey "Survey"
// * performer = Reference(Role-SLP-HoneyJones)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * hasMember[0] = Reference(CSC-SNF-BCAT-1-Ob-Question-30)
// * derivedFrom = Reference(QResponse-SNF-BCAT-1)
// * derivedFrom.display = "Questionnaire Response"

Instance: CSC-SNF-BIMS-1
InstanceOf: CognitiveStatusCollection
Description: "An instance of CognitiveStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#52491-8
* code.coding.display = "Brief interview for mental status [BIMS]"
//* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* extension[device-patient-used][0].valueReference = Reference(CSC-SNF-BIMS-1-UseOfDevice-1)
* extension[device-patient-used][1].valueReference = Reference(CSC-SNF-BIMS-1-UseOfDevice-2)
* hasMember[0] = Reference(CSC-SNF-BIMS-1-Ob-Question-3)
* hasMember[1] = Reference(CSC-SNF-BIMS-1-Ob-Question-4)
* hasMember[2] = Reference(CSC-SNF-BIMS-1-Ob-Question-5)
* hasMember[3] = Reference(CSC-SNF-BIMS-1-Ob-Question-6)
* hasMember[4] = Reference(CSC-SNF-BIMS-1-Ob-Question-7)
* hasMember[5] = Reference(CSC-SNF-BIMS-1-Ob-Question-8)
* hasMember[6] = Reference(CSC-SNF-BIMS-1-Ob-Question-9)
* hasMember[7] = Reference(CSC-SNF-BIMS-1-Ob-Question-10)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)
//* derivedFrom.display = "Questionnaire Response"

Instance: CSC-Hospital-MOCA-1
InstanceOf: CognitiveStatusCollection
Description: "An instance of CognitiveStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = LNC#72133-2
* code.coding.display = "Montreal Cognitive Assessment [MoCA]"
//* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-SLP-JennyGlass)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* hasMember[0] = Reference(CSC-Hospital-MOCA-1-Ob-Question-1)
* derivedFrom = Reference(QResponse-Hospital-MOCA-1)
//* derivedFrom.display = "Questionnaire Response"

// Instance: CSC-Hospital-MOCA-2
// InstanceOf: CognitiveStatusCollection
// Description: "An instance of CognitiveStatusCollection"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-10T12:16:00-05:00"
// * code = LNC#72133-2
// * code.coding.display = "Montreal Cognitive Assessment [MoCA]"
// //* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// * category[1].coding = CAT#survey "Survey"
// * performer = Reference(Role-SLP-JennyGlass)
// * extension[event-location].valueReference = Reference(Org-Loc-01)
// * hasMember[0] = Reference(CSC-Hospital-MOCA-2-Ob-Question-2)
// * derivedFrom = Reference(QResponse-Hospital-MOCA-2)
// //* derivedFrom.display = "Questionnaire Response"

Instance: CSC-SNF-PHQ9-1
InstanceOf: CognitiveStatusCollection
Description: "An instance of CognitiveStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54635-8
* code.coding.display = "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
//* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* hasMember[0] = Reference(CSC-SNF-PHQ9-1-Ob-Question-11)
* hasMember[1] = Reference(CSC-SNF-PHQ9-1-Ob-Question-12)
* hasMember[2] = Reference(CSC-SNF-PHQ9-1-Ob-Question-13)
* hasMember[3] = Reference(CSC-SNF-PHQ9-1-Ob-Question-14)
* hasMember[4] = Reference(CSC-SNF-PHQ9-1-Ob-Question-15)
* hasMember[5] = Reference(CSC-SNF-PHQ9-1-Ob-Question-16)
* hasMember[6] = Reference(CSC-SNF-PHQ9-1-Ob-Question-17)
* hasMember[7] = Reference(CSC-SNF-PHQ9-1-Ob-Question-18)
* hasMember[8] = Reference(CSC-SNF-PHQ9-1-Ob-Question-19)
* hasMember[9] = Reference(CSC-SNF-PHQ9-1-Ob-Question-20)
* hasMember[10] = Reference(CSC-SNF-PHQ9-1-Ob-Question-21)
* hasMember[11] = Reference(CSC-SNF-PHQ9-1-Ob-Question-22)
* hasMember[12] = Reference(CSC-SNF-PHQ9-1-Ob-Question-23)
* hasMember[13] = Reference(CSC-SNF-PHQ9-1-Ob-Question-24)
* hasMember[14] = Reference(CSC-SNF-PHQ9-1-Ob-Question-25)
* hasMember[15] = Reference(CSC-SNF-PHQ9-1-Ob-Question-26)
* hasMember[16] = Reference(CSC-SNF-PHQ9-1-Ob-Question-27)
* hasMember[17] = Reference(CSC-SNF-PHQ9-1-Ob-Question-28)
* hasMember[18] = Reference(CSC-SNF-PHQ9-1-Ob-Question-29)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)
//* derivedFrom.display = "Questionnaire Response"

// Instance: CSC-Hospital-MMSE-2
// InstanceOf: CognitiveStatusCollection
// Description: "An instance of CognitiveStatusCollection"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-10T12:16:00-05:00"
// * code = LNC#72107-6
// * code.coding.display = "Mini-Mental State Examination [MMSE]"
// //* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// * category[1].coding = CAT#survey "Survey"
// * performer = Reference(Role-SLP-JennyGlass)
// * extension[event-location].valueReference = Reference(Org-Loc-01)
// * hasMember[0] = Reference(CSC-Hospital-MMSE-2-Ob-Question-32)
// * derivedFrom = Reference(QResponse-Hospital-MMSE-2)
// //* derivedFrom.display = "Questionnaire Response"

Instance: CSC-Hospital-MMSE-1
InstanceOf: CognitiveStatusCollection
Description: "An instance of CognitiveStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = LNC#72107-6
* code.coding.display = "Mini-Mental State Examination [MMSE]"
//* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-SLP-JennyGlass)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* hasMember[0] = Reference(CSC-Hospital-MMSE-1-Ob-Question-31)
* derivedFrom = Reference(QResponse-Hospital-MMSE-1)
//* derivedFrom.display = "Questionnaire Response"


---

// File: input/fsh/MocaBimsPhq9MmesBcat-ObservationInstances.fsh

//Alias: LNC = http://loinc.org
//Alias: UOM = http://unitsofmeasure.org
//Alias: DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason

Instance: CSC-SNF-BIMS-1-Ob-Question-4
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#52732-5
* code.text = "Able to report correct year"
* code.coding.display = "Temporal orientation - current year [BIMS]"
* category[0].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10008-3
* valueCodeableConcept.text = "Missed by 1 year"
* valueCodeableConcept.coding.display = "Missed by 1 year"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)

// Instance: CSC-Hospital-MOCA-2-Ob-Question-2
// InstanceOf: CognitiveStatus
// Description: "An instance of CognitiveStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-10T12:16:00-05:00"
// * code = LNC#72172-0
// //* code.text = "MoCA"
// * code.coding.display = "Total score [MoCA]"
// * category[0].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// * category[1].coding = CAT#survey
// * valueQuantity = 22 UOM#{score}
// * performer = Reference(Role-SLP-JennyGlass)
// * extension[event-location].valueReference = Reference(Org-Loc-01)
// * derivedFrom = Reference(QResponse-Hospital-MOCA-2)

Instance: CSC-SNF-PHQ9-1-Ob-Question-18
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54643-2
* code.text = "Feeling tired or having little energy"
* code.coding.display = "Feeling tired or having little energy in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10997-7
* valueCodeableConcept.text = "Never or 1 day"
* valueCodeableConcept.coding.display = "Never or 1 day"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-19
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54644-0
* code.text = "Poor appetite or overeating"
* code.coding.display = "Poor appetite or overeating in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA32-8
* valueCodeableConcept.text = "No"
* valueCodeableConcept.coding.display = "No"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-14
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54639-0
* code.text = "Feeling down"
* code.coding.display = "Feeling down, depressed or hopeless in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10998-5
* valueCodeableConcept.text = "2-6 days (several days)"
* valueCodeableConcept.coding.display = "2-6 days (several days)"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-15
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54640-8
* code.text = "Trouble falling or staying asleep"
* code.coding.display = "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA33-6
* valueCodeableConcept.text = "Yes"
* valueCodeableConcept.coding.display = "Yes"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-16
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54641-6
* code.text = "Trouble falling or staying asleep"
* code.coding.display = "Trouble falling or staying asleep, or sleeping too much in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10998-5
* valueCodeableConcept.text = "2-6 days (several days)"
* valueCodeableConcept.coding.display = "2-6 days (several days)"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

// Instance: CSC-Hospital-MMSE-2-Ob-Question-32
// InstanceOf: CognitiveStatus
// Description: "An instance of CognitiveStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-10T12:16:00-05:00"
// * code = LNC#72106-8
// * code.text = "Total score [MMSE]"
// * category[1].coding = CAT#survey
// * code.coding.display = "Total score [MMSE]"
// * valueQuantity = 24 UOM#{score}
// * performer = Reference(Role-SLP-JennyGlass)
// * extension[event-location].valueReference = Reference(Org-Loc-01)
// * derivedFrom = Reference(QResponse-Hospital-MMSE-2)

Instance: CSC-SNF-PHQ9-1-Ob-Question-11
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54636-6
* code.text = "Little interest or pleasure in doing things"
* code.coding.display = "Little interest or pleasure in doing things in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA33-6
* valueCodeableConcept.text = "Yes"
* valueCodeableConcept.coding.display = "Yes"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-12
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54637-4
* code.text = "Little interest or pleasure in doing things"
* code.coding.display = "Little interest or pleasure in doing things in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10998-5
* valueCodeableConcept.text = "2-6 days (several days)"
* valueCodeableConcept.coding.display = "2-6 days (several days)"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-13
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54638-2
* code.text = "Feeling down"
* code.coding.display = "Feeling down, depressed or hopeless in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA33-6
* valueCodeableConcept.text = "Yes"
* valueCodeableConcept.coding.display = "Yes"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-17
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54642-4
* code.text = "Feeling tired or having little energy"
* code.coding.display = "Feeling tired or having little energy in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA32-8
* valueCodeableConcept.text = "No"
* valueCodeableConcept.coding.display = "No"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-Hospital-MMSE-1-Ob-Question-31
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = LNC#72106-8
* code.text = "Total score [MMSE]"
* code.coding.display = "Total score [MMSE]"
* category[1].coding = CAT#survey
* valueQuantity = 20 UOM#{score}
* performer = Reference(Role-SLP-JennyGlass)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-MMSE-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-25
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54650-7
* code.text = "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual"
* code.coding.display = "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA32-8
* valueCodeableConcept.text = "No"
* valueCodeableConcept.coding.display = "No"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-24
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54649-9
* code.text = "Trouble concentrating on things"
* code.coding.display = "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10997-7
* valueCodeableConcept.text = "Never or 1 day"
* valueCodeableConcept.coding.display = "Never or 1 day"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-27
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54652-3
* code.text = "Thoughts that you would be better off dead"
* code.coding.display = "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10996-9
* valueCodeableConcept.text = "No response"
* valueCodeableConcept.coding.display = "No response"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-26
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54651-5
* code.text = "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual"
* code.coding.display = "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* valueCodeableConcept = LNC#LA10997-7
* category[1].coding = CAT#survey
* valueCodeableConcept.text = "Never or 1 day"
* valueCodeableConcept.coding.display = "Never or 1 day"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-21
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54646-5
* code.text = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down"
* code.coding.display = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA32-8
* valueCodeableConcept.text = "No"
* valueCodeableConcept.coding.display = "No"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-20
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54645-7
* code.text = "Poor appetite or overeating"
* code.coding.display = "Poor appetite or overeating in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10997-7
* valueCodeableConcept.text = "Never or 1 day"
* valueCodeableConcept.coding.display = "Never or 1 day"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-23
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54648-1
* code.text = "Trouble concentrating on things"
* code.coding.display = "Trouble concentrating on things, such as reading the newspaper or watching television in last 2 weeks.presence [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA32-8
* valueCodeableConcept.text = "No"
* valueCodeableConcept.coding.display = "No"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-22
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54647-3
* code.text = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down"
* code.coding.display = "Feeling bad about yourself - or that you are a failure or have let yourself or your family down in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10997-7
* valueCodeableConcept.text = "Never or 1 day"
* valueCodeableConcept.coding.display = "Never or 1 day"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-29
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54654-9
* code.text = "Total Severity Score"
* code.coding.display = "Mood interview total severity score [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* valueQuantity = 3 UOM#{score}
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-PHQ9-1-Ob-Question-28
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54653-1
* code.text = "Thoughts that you would be better off dead"
* code.coding.display = "Thoughts that you would be better off dead, or of hurting yourself in some way in last 2 weeks.frequency [Reported PHQ-9 CMS]"
* category[1].coding = CAT#survey
* dataAbsentReason = DAR#not-asked
* dataAbsentReason.coding.display = "Not Asked"
* performer = Reference(Role-SLP-LunaBaskins)
* extension[event-location].valueReference = Reference(Org-Loc-03)
* derivedFrom = Reference(QResponse-SNF-PHQ9-1)

Instance: CSC-SNF-BIMS-1-Ob-Question-9
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#52737-4
* code.text = "Able to recall \"bed\""
* code.coding.display = "Recall - bed [BIMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10125-5
* valueCodeableConcept.text = "Yes, after cueing (\"a piece of furniture\")"
* valueCodeableConcept.coding.display = "Yes, after cueing (\"a piece of furniture\")"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)

Instance: CSC-SNF-BIMS-1-Ob-Question-8
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#52736-6
* code.text = "Able to recall \"blue\""
* code.coding.display = "Recall - blue [BIMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10978-7
* valueCodeableConcept.text = "Yes, after cueing (\"a color\")"
* valueCodeableConcept.coding.display = "Yes, after cueing (\"a color\")"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)

Instance: CSC-SNF-BIMS-1-Ob-Question-7
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#52735-8
* code.text = "Able to recall \"sock\""
* code.coding.display = "Recall - sock [BIMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10126-3
* valueCodeableConcept.text = "Yes, after cueing (\"something to wear\")"
* valueCodeableConcept.coding.display = "Yes, after cueing (\"something to wear\")"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)

Instance: CSC-SNF-BIMS-1-Ob-Question-6
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54609-3
* code.text = "Able to report correct day of the week"
* code.coding.display = "Temporal orientation - current day of the week [BIMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA9960-1
* valueCodeableConcept.text = "Correct"
* valueCodeableConcept.coding.display = "Correct"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)

Instance: CSC-SNF-BIMS-1-Ob-Question-5
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#52733-3
* code.text = "Able to report correct month"
* code.coding.display = "Temporal orientation - current month [BIMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA10010-9
* valueCodeableConcept.text = "Missed by 6 days to 1 month"
* valueCodeableConcept.coding.display = "Missed by 6 days to 1 month"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)

Instance: CSC-Hospital-MOCA-1-Ob-Question-1
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T17:32:00-05:00"
* code = LNC#72172-0
//* code.text = "MoCA"
* code.coding.display = "Total score [MoCA]"
* category[1].coding = CAT#survey
* valueQuantity = 18 UOM#{score}
* performer = Reference(Role-SLP-JennyGlass)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-MOCA-1)

Instance: CSC-SNF-BIMS-1-Ob-Question-3
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#52731-7
* code.text = "Repetition of Three Words. Number of words repeated after first attempt"
* code.coding.display = "Repetition of three words # [BIMS]"
* category[1].coding = CAT#survey
* valueCodeableConcept = LNC#LA6404-3
* valueCodeableConcept.text = "Two"
* valueCodeableConcept.coding.display = "Two"
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)

// Instance: CSC-SNF-BCAT-1-Ob-Question-30
// InstanceOf: CognitiveStatus
// Description: "An instance of CognitiveStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T11:30:00-05:00"
// //* code = LNC#TBD-LOINC2
// //* code.coding.display = "BCAT Summary Score"
// * code.text = "BCAT Summary Score"
// * category[1].coding = CAT#survey
// * valueQuantity = 16 UOM#{score}
// * performer = Reference(Role-SLP-HoneyJones)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-BCAT-1)

Instance: CSC-SNF-BIMS-1-Ob-Question-10
InstanceOf: CognitiveStatus
Description: "An instance of CognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T11:30:00-05:00"
* code = LNC#54614-3
* code.text = "BIMS Summary Score			{score}"
* code.coding.display = "Brief Interview for Mental Status - summary score [BIMS]"
* category[1].coding = CAT#survey
* valueQuantity = 9 UOM#{score}
* performer = Reference(Role-SLP-HoneyJones)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-BIMS-1)


---

// File: input/fsh/MocaBimsPhq9MmesBcat-SDCQuestionnaireResponseInstances.fsh

//Alias: MDS3.0-NC-1.17 = https://api.logicahealth.org/PACIO/open/Questionnaire/MDS3.0-NC-1.17
Alias: SDCQR = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse
Alias: LNC = http://loinc.org

Instance: QResponse-SNF-BIMS-1
InstanceOf: SDCQR
Description: "An instance of QuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-07-11T11:30:00-05:00"
* author = Reference(Role-SLP-HoneyJones)
* item[0].linkId = "Section-3"
* item[0].text =  "MDS v3.0 - RAI v1.17.2 - Cognitive patterns [CMS Assessment]"
* item[0].item[0].linkId = "Section-3/C0200-C0500"
* item[0].item[0].text =  "Brief interview for mental status [BIMS]"
* item[0].item[0].item[0].linkId = "Section-3/C0200"
* item[0].item[0].item[0].text =  "Repetition of Three Words. Number of words repeated after first attempt"
* item[0].item[0].item[0].answer.valueCoding = LNC#LA6404-3 "Two"
* item[0].item[0].item[1].linkId = "Section-3/C0300"
* item[0].item[0].item[1].text =  "Temporal orientation (orientation to year, month, and day) [BIMS]"
* item[0].item[0].item[1].item[0].linkId = "Section-3/C0300A"
* item[0].item[0].item[1].item[0].text =  "Able to report correct year"
* item[0].item[0].item[1].item[0].answer.valueCoding = LNC#LA10008-3 "Missed by 1 year"
* item[0].item[0].item[1].item[1].linkId = "Section-3/C0300B"
* item[0].item[0].item[1].item[1].text =  "Able to report correct month"
* item[0].item[0].item[1].item[1].answer.valueCoding = LNC#LA10010-9 "Missed by 6 days to 1 month"
* item[0].item[0].item[1].item[2].linkId = "Section-3/C0300C"
* item[0].item[0].item[1].item[2].text =  "Able to report correct day of the week"
* item[0].item[0].item[1].item[2].answer.valueCoding = LNC#LA9960-1 "Correct"
* item[0].item[0].item[2].linkId = "Section-3/C0400"
* item[0].item[0].item[2].text =  "Recall [BIMS]"
* item[0].item[0].item[2].item[0].linkId = "Section-3/C0400A"
* item[0].item[0].item[2].item[0].text =  "Able to recall \"sock\""
* item[0].item[0].item[2].item[0].answer.valueCoding = LNC#LA10126-3 "Yes, after cueing (\"something to wear\")"
* item[0].item[0].item[2].item[1].linkId = "Section-3/C0400B"
* item[0].item[0].item[2].item[1].text =  "Able to recall \"blue\""
* item[0].item[0].item[2].item[1].answer.valueCoding = LNC#LA10978-7 "Yes, after cueing (\"a color\")"
* item[0].item[0].item[2].item[2].linkId = "Section-3/C0400C"
* item[0].item[0].item[2].item[2].text =  "Able to recall \"bed\""
* item[0].item[0].item[2].item[2].answer.valueCoding = LNC#LA10125-5 "Yes, after cueing (\"a piece of furniture\")"
* item[0].item[0].item[3].linkId = "Section-3/C0500"
* item[0].item[0].item[3].text =  "BIMS Summary Score"
* item[0].item[0].item[3].answer.valueQuantity = 9 UOM#{score}

// Instance: QResponse-SNF-BCAT-1
// InstanceOf: SDCQR
// Description: "An instance of QuestionnaireResponse"
// * subject = Reference(patientBSJ1)
// * status = #completed
// * questionnaire = MDS3.0-NC-1.17
// * authored = "2020-07-11T11:30:00-05:00"
// * author = Reference(Role-SLP-HoneyJones)
// * item[0].linkId = "BCAT"
// * item[0].text =  "Brief Cognitive Assessment Tool [BCAT]"
// * item[0].item[0].linkId = "BCAT/SummaryScore"
// * item[0].item[0].text =  "BCAT Summary Score"
// * item[0].item[0].answer.valueQuantity = 16 UOM#{score}

// Instance: QResponse-Hospital-MOCA-2
// InstanceOf: SDCQR
// Description: "An instance of QuestionnaireResponse"
// * subject = Reference(patientBSJ1)
// * status = #completed
// * questionnaire = MDS3.0-NC-1.17
// * authored = "2020-07-10T12:16:00-05:00"
// * author = Reference(Role-SLP-JennyGlass)
// * item[0].linkId = "MoCA"
// * item[0].text =  "Montreal Cognitive Assessment [MoCA]"
// * item[0].item[0].linkId = "MoCA/TotalScore"
// * item[0].item[0].text =  "Total score [MoCA]"
// * item[0].item[0].answer.valueQuantity = 22 UOM#{score}

Instance: QResponse-SNF-PHQ9-1
InstanceOf: SDCQR
Description: "An instance of QuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-07-11T11:30:00-05:00"
* author = Reference(Role-SLP-LunaBaskins)
* item[0].linkId = "Section-4"
* item[0].text =  "MDS v3.0 - RAI v1.18.1 - Mood - OSA [CMS Assessment]"
* item[0].item[0].linkId = "Section-4/D0200"
* item[0].item[0].text =  "Resident mood interview (PHQ-9) [Reported PHQ-9 CMS]"
* item[0].item[0].item[0].linkId = "Section-4/D0200_1"
* item[0].item[0].item[0].text =  "Resident mood interview (PHQ-9) - symptom presence in the last 2 weeks [CMS Assessment]"
* item[0].item[0].item[0].item[0].linkId = "Section-4/D0200A1"
* item[0].item[0].item[0].item[0].text =  "Little interest or pleasure in doing things"
* item[0].item[0].item[0].item[0].answer.valueCoding = LNC#LA33-6 "Yes"
* item[0].item[0].item[0].item[1].linkId = "Section-4/D0200B1"
* item[0].item[0].item[0].item[1].text =  "Feeling down"
* item[0].item[0].item[0].item[1].answer.valueCoding = LNC#LA33-6 "Yes"
* item[0].item[0].item[0].item[2].linkId = "Section-4/D0200C1"
* item[0].item[0].item[0].item[2].text =  "Trouble falling or staying asleep"
* item[0].item[0].item[0].item[2].answer.valueCoding = LNC#LA33-6 "Yes"
* item[0].item[0].item[0].item[3].linkId = "Section-4/D0200D1"
* item[0].item[0].item[0].item[3].text =  "Feeling tired or having little energy"
* item[0].item[0].item[0].item[3].answer.valueCoding = LNC#LA32-8 "No"
* item[0].item[0].item[0].item[4].linkId = "Section-4/D0200E1"
* item[0].item[0].item[0].item[4].text =  "Poor appetite or overeating"
* item[0].item[0].item[0].item[4].answer.valueCoding = LNC#LA32-8 "No"
* item[0].item[0].item[0].item[5].linkId = "Section-4/D0200F1"
* item[0].item[0].item[0].item[5].text =  "Feeling bad about yourself - or that you are a failure or have let yourself or your family down"
* item[0].item[0].item[0].item[5].answer.valueCoding = LNC#LA32-8 "No"
* item[0].item[0].item[0].item[6].linkId = "Section-4/D0200G1"
* item[0].item[0].item[0].item[6].text =  "Trouble concentrating on things"
* item[0].item[0].item[0].item[6].answer.valueCoding = LNC#LA32-8 "No"
* item[0].item[0].item[0].item[7].linkId = "Section-4/D0200H1"
* item[0].item[0].item[0].item[7].text =  "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual"
* item[0].item[0].item[0].item[7].answer.valueCoding = LNC#LA32-8 "No"
* item[0].item[0].item[0].item[8].linkId = "Section-4/D0200I1"
* item[0].item[0].item[0].item[8].text =  "Thoughts that you would be better off dead"
* item[0].item[0].item[0].item[8].answer.valueCoding = LNC#LA10996-9 "No response"
* item[0].item[0].item[1].linkId = "Section-4/D0200_2"
* item[0].item[0].item[1].text =  "Resident mood interview (PHQ-9) - symptom frequency in the last 2 weeks [CMS Assessment]"
* item[0].item[0].item[1].item[0].linkId = "Section-4/D0200A2"
* item[0].item[0].item[1].item[0].text =  "Little interest or pleasure in doing things"
* item[0].item[0].item[1].item[0].answer.valueCoding = LNC#LA10998-5 "2-6 days (several days)"
* item[0].item[0].item[1].item[1].linkId = "Section-4/D0200B2"
* item[0].item[0].item[1].item[1].text =  "Feeling down"
* item[0].item[0].item[1].item[1].answer.valueCoding = LNC#LA10998-5 "2-6 days (several days)"
* item[0].item[0].item[1].item[2].linkId = "Section-4/D0200C2"
* item[0].item[0].item[1].item[2].text =  "Trouble falling or staying asleep"
* item[0].item[0].item[1].item[2].answer.valueCoding = LNC#LA10998-5 "2-6 days (several days)"
* item[0].item[0].item[1].item[3].linkId = "Section-4/D0200D2"
* item[0].item[0].item[1].item[3].text =  "Feeling tired or having little energy"
* item[0].item[0].item[1].item[3].answer.valueCoding = LNC#LA10997-7 "Never or 1 day"
* item[0].item[0].item[1].item[4].linkId = "Section-4/D0200E2"
* item[0].item[0].item[1].item[4].text =  "Poor appetite or overeating"
* item[0].item[0].item[1].item[4].answer.valueCoding = LNC#LA10997-7 "Never or 1 day"
* item[0].item[0].item[1].item[5].linkId = "Section-4/D0200F2"
* item[0].item[0].item[1].item[5].text =  "Feeling bad about yourself - or that you are a failure or have let yourself or your family down"
* item[0].item[0].item[1].item[5].answer.valueCoding = LNC#LA10997-7 "Never or 1 day"
* item[0].item[0].item[1].item[6].linkId = "Section-4/D0200G2"
* item[0].item[0].item[1].item[6].text =  "Trouble concentrating on things"
* item[0].item[0].item[1].item[6].answer.valueCoding = LNC#LA10997-7 "Never or 1 day"
* item[0].item[0].item[1].item[7].linkId = "Section-4/D0200H2"
* item[0].item[0].item[1].item[7].text =  "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual"
* item[0].item[0].item[1].item[7].answer.valueCoding = LNC#LA10997-7 "Never or 1 day"
* item[0].item[0].item[1].item[8].linkId = "Section-4/D0200I2"
* item[0].item[0].item[1].item[8].text =  "Thoughts that you would be better off dead"
* item[0].item[1].linkId = "Section-4/D0300"
* item[0].item[1].text =  "PHQ-9 Total Score"
* item[0].item[1].answer.valueQuantity = 3 UOM#{score}

Instance: QResponse-Hospital-MOCA-1
InstanceOf: SDCQR
Description: "An instance of QuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-07-08T17:32:00-05:00"
* author = Reference(Role-SLP-JennyGlass)
* item[0].linkId = "MoCA"
* item[0].text =  "Montreal Cognitive Assessment [MoCA]"
* item[0].item[0].linkId = "MoCA/TotalScore"
* item[0].item[0].text =  "Total score [MoCA]"
* item[0].item[0].answer.valueQuantity = 18 UOM#{score}

Instance: QResponse-Hospital-MMSE-1
InstanceOf: SDCQR
Description: "An instance of QuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-07-08T17:32:00-05:00"
* author = Reference(Role-SLP-JennyGlass)
* item[0].linkId = "MMSE"
* item[0].text =  "Mini-Mental State Examination [MMSE]"
* item[0].item[0].linkId = "MMSE/ToTalScore"
* item[0].item[0].text =  "MMSE Total Score"
* item[0].item[0].answer.valueQuantity = 20 UOM#{score}

// Instance: QResponse-Hospital-MMSE-2
// InstanceOf: SDCQR
// Description: "An instance of QuestionnaireResponse"
// * subject = Reference(patientBSJ1)
// * status = #completed
// * questionnaire = MDS3.0-NC-1.17
// * authored = "2020-07-10T12:16:00-05:00"
// * author = Reference(Role-SLP-JennyGlass)
// * item[0].linkId = "MMSE"
// * item[0].text =  "Mini-Mental State Examination [MMSE]"
// * item[0].item[0].linkId = "MMSE/ToTalScore"
// * item[0].item[0].text =  "MMSE Total Score"
// * item[0].item[0].answer.valueQuantity = 24 UOM#{score}


---

// File: input/fsh/PriorLevelOfCognitiveFunction.fsh

Profile:        NarrativeHistoryOfCognitiveStatus
Parent:         Observation
Id:             pacio-nhcs
Title:          "PACIO Narrative History of Cognitive Status"
Description:    "An exchange of summary observation regarding the most recent prior level of cognitive function immediately preceding the current admission, illness, or exacerbation for a patient. The use of this profile is encouraged in the absence of formal prior level of cognitive assessments. For formal assessments conducted with for example, an assessment instrument, use the Cognitive Status Collection and Cognitive Status profiles to capture assessment data."

* code from LNCVS
* code = LNC#11332-4 "History of Cognitive Function Narrative"
//* code.text = "History of Cognitive Function Narrative"

* value[x] 1..1
* value[x] only string
* value[x] ^short = "Unstructured summary of cognitive status observation for the patient. (Strongly encouraged until more structured method is established)"
* value[x] ^definition = "Unstructured summary of cognitive status observation for the patient. (Strongly encouraged until more structured method is established)"

* subject 1..1
* subject only Reference(USCorePatient)

* encounter only Reference(USCoreEncounter)

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "coding"
* category ^slicing.rules = #open
* category ^slicing.ordered = true
* category contains functioning 1..1
* category[functioning] from PACIOFunctioningCategoryVS (extensible)
* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// * category 1..*
// * category from PACIOFunctioningCategoryVS (extensible)
// * category = PACIOFunctioningCategoryCS#functioning

* performer 1..*
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."

* effective[x] 1..1
* effective[x] only dateTime or Period

* extension contains ObservationEventLocation named event-location 0..1 MS
* extension contains AssistanceRequired named assistance-required 0..1 MS

//* category ^short = "A second category code may be used along with the code “functioning”. For example, for assessment tool/survey instrument observations use “survey” as a second code."
* component ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* basedOn ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* partOf ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."
* focus ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* issued ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* interpretation ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* bodySite ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* method ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* specimen ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* device ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* referenceRange ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* hasMember ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* derivedFrom ^short = "Currently not used in PriorLevelOfCognitiveFunction."
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension[assistance-required] ^short = "An extension to indicate the level of assistance required for a patient during an assessment."

Extension: AssistanceRequired
Description: "Associated with the Narrative History of Cognitive Status profile to provide a high-level indication of assistance required for the person’s baseline ability (cognitive function immediately preceding the current admission, illness, or exacerbation for a patient) to answer cognitive related clinical questions. The CMS Assessment answer list LL4309-2 provides possible values for this extension."
Id: assistance-required
* value[x] only CodeableConcept
* value[x] from LL4309-2 (extensible)

---

// File: input/fsh/PriorLevelOfCognitiveFunction.instances.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/

Instance: BSJ-Narrative-History-Cognitive-Status-1
InstanceOf: NarrativeHistoryOfCognitiveStatus
Description: "An instance of NarrativeHistoryOfCognitiveStatus"
* subject = Reference(patientBSJ1)
* status = #final
//* code = LNC#11332-4 "History of Cognitive Function Narrative"
* extension[event-location].valueReference = Reference(provider-org-loc-01)
* extension[assistance-required].valueCodeableConcept = LNC#LA11539-6
* extension[assistance-required].valueCodeableConcept.coding.display = "Independent - Patient completed the activities by him/herself, with or without an assistive device, with no assistance from a helper."
* valueString = "Alert and oriented x 3. She is independent in household finances, social and community activities, coeherent and appropriate communication. Appropriate attire for location and weather."
* performer = Reference(provider-role-pcp)
* effectivePeriod.start = "2019-07-01"
* effectivePeriod.end = "2020-11-30"


---

// File: input/fsh/UseOfDeviceInstances.fsh


Instance: CSC-SNF-BIMS-1-UseOfDevice-1
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(CSC-SNF-BIMS-1)
* recordedOn = 2020-07-11T11:30:00-05:00
* source = Reference(Practitioner-HoneyJones)
* device = Reference(CMS-Device-1)
* status = #active

Instance: CSC-SNF-BIMS-1-UseOfDevice-2
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(CSC-SNF-BIMS-1)
* recordedOn = 2020-07-11T11:30:00-05:00
* source = Reference(Practitioner-HoneyJones)
* device = Reference(CMS-Device-2)
* status = #active


---

