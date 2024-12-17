File: repos/HL7_SLASH_fhir-pacio-functional-status/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭─────────────────────────ImplementationGuide-hl7.fhir.us.pacio-fs.json──────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/sushi/configuration/                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.pacio-fs
##### use this URL when publishing the IG:
canonical: http://hl7.org/fhir/us/pacio-fs
#####canonical: https://build.fhir.org/ig/HL7/fhir-pacio-functional-status
version: 1.0.0
name: PACIOFunctionalStatusImplementationGuide
title: PACIO Functional Status Implementation Guide
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


# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# menu:
#   IG Home: index.html 
#   Table of Contents: toc.html
#   Underlying Technologies: underlying_technologies.html
#   Use Case Example: functional_status_use_case.html
#   Profile Highlights and Guidance: profile_highlights_and_guidance.html
#   Artifacts Summary: artifacts.html
#   Other Resources:
#     "FHIR Spec ": new-tab external {{site.data.fhir.path}}index.html


---

// File: input/pagecontent/functional_status_use_case.md

### Example Scenario

Functioning observations of mobility, self-care, and domestic life may be collected in various ways including assessment tools, instruments, screens, or other types of structured resources.  Although the example and use case reflect a post-acute care (PAC) scenario, this IG is intended to cover the FHIR-based exchange of these observations completed and exchanged between healthcare settings and home- and community-based services (HCBS) broadly.

PAC patients are typically complex from a healthcare perspective and have many stops during their healthcare journey (as shown in Figure 1). As the patient moves from one healthcare setting to another, it is important that their mobility, self-care, and domestic life observational data travel with them so that the new healthcare setting has the most complete information about that patient so they can provide the best care, support effective coordination of care with multiple providers/professionals, and provides a picture of an individual’s ability to perform mobility, self-care and domestic life activities (and changes) over time. Although the example and use case reflect a PAC scenario, this IG is intended to cover the FHIR-based exchange of these observations completed and exchanged between healthcare settings and HCBS broadly.

Figure 1, the example PAC patient healthcare journey, illustrates a common scenario for an elderly patient moving through the healthcare ecosystem. The journey starts with Ms. Smith in her home. She has a medical event that results in an emergency medical service (EMS) transport to Hospital A. Following her hospital stay, Ms. Smith returns home and receives PAC Home Health services. The Home Health agency is coordinating care with multiple professionals and provider organizations including Ms. Smith’s primary physician and her pharmacy, behavioral health provider, and outpatient dialysis provider. During her Home Health encounter, an Outcome and Assessment Information Set (OASIS) is completed which includes mobility, self-care and domestic life observations and is electronically transmitted to CMS as required. The assessment instrument resides in the agencies EHR and the functioning observations are shared using FHIR with her and her care team as appropriate.

Ms. Smith has another medical event at home and is transferred to Hospital B. Her previous observational data related to mobility, self-care and domestic life is shared with the hospital. From Hospital B, Ms. Smith is transferred to a PAC Skilled Nursing Facility (SNF). The hospital shares information with the SNF including her performance of the same activities. The SNF completes a Minimum Data Set (MDS) assessment instrument which includes mobility and self-care functioning observation information and electronically transmits the MDS to CMS. These observations are shared with Ms. Smith and her care team (Physician, Therapists, Pharmacy, Daughter, etc.). She is discharged from the SNF and returns home with a variety of Home and Community-based Services. The SNF shares information with Ms. Smith, her daughter, her physician and HCBS providers to support care transition and coordination. While receiving HCBS, the Functional Assessment Standardized Items (FASI) is completed which includes mobility, self-care, and/or domestic life/instrumental activities of daily living (IADL) observations. FASI data is electronically transmitted to CMS.<sup>[1]</sup> The HCBS provider shares current related observations with Ms. Smith’s care team and providers.

<sup>[1] The showing of the transmission of FASI data to CMS in the figure does not imply any requirement for FASI data to be electronically shared with CMS. The technical capability for such transmission does exist, as demonstrated in recent HL7 FHIR Connectathon testing events.</sup>

![Patient Journey](Patient_Journey.png){:style="float: none;"}

Figure 1: Example Post-acute Care Patient Healthcare Journey


### Assessment Data Exchange

In Figure 2, the patient is admitted to Healthcare Setting A due to the result of an adverse event, such as a fall. Healthcare setting A completes an assessment instruments that include mobility, self-care, and/or domestic life/IADL observations by the healthcare team. The results are captured in the electronic health record (EHR) system of Healthcare Setting A.

Healthcare Setting A transfers the patient to Healthcare Setting B. When the patient arrives at Healthcare Setting B, their clinicians can retrieve the results from the functional assessment instruments that were performed on the patient at Healthcare Setting A, as part of the transfer summary, using the profiles for exchanging functional status data defined in this Implementation Guide. Additionally, during the patient’s stay in Healthcare setting B, the clinician documents the results from completed functional status assessment instruments.

Healthcare Setting B transfers the patient to Healthcare Setting C. When the patient arrives at Healthcare Setting C, the clinicians can retrieve the results from the functional status assessment instruments that were performed on the patient at Healthcare Setting A and Healthcare Setting B, as part of the transfer summary, using the profiles for exchanging functional status data defined in this Implementation Guide.

Authorized caregivers, including the patient, their family, and clinicians can also access the results from the functional assessment instruments from Healthcare Setting A, Healthcare Setting B, and Healthcare Setting C at any time through a patient sharing system (mobile/web application), so that they are informed about the patient’s care, can track progress, and can be more engaged in their healthcare decisions.


![Functional Status Use Case](Functional_Status_Use_Case.png){:style="float: none;"}

Figure 2: Functional Status Use Case

---

// File: input/pagecontent/index.md

### Background

An individual’s mobility, self-care, and domestic life functioning is crucial information to communicate for successful care coordination at transition of care and for on-going shared care. Care coordination – when a person transitions between healthcare settings, including ambulatory care, acute care, long-term post-acute care (LTPAC), and home- and community-based services (HCBS) – is often fragmented and can lead to poor health outcomes, increased burden, and increased costs. Interoperable health information exchange has the potential to improve patient and provider communications and supports access to longitudinal health information that enables improved efficiencies, improved quality of care, and improved health outcomes. Data should be usable across the continuum of care, and beyond the traditional healthcare system – into the community.

Providers frequently are not receiving complete and accurate information including mobility, self-care, and domestic life functioning in a timely manner, leading to adverse outcomes and additional-expenses. Failure to exchange accurate, timely data often leads to inefficient workflows, duplicative data entries, and increased risk of patient harm attributable to missing or inaccurate information. Health Information Technology (Health IT) can significantly alleviate administrative burden by supporting health information exchange across care settings to ensure that the relevant information necessary to care for the incoming patient is delivered to the right person, at the right time- therefore improving patient outcomes, reducing provider burden, improving cost efficiencies, and improving workflows. Moreover, enhanced data exchange would allow for advanced computability, standardization, usability, and real-time data analytics, enabling broader data use by health IT developers, researchers, providers, and payers.

Poor quality discharge information is a major barrier to safe and effective transitions. With 45% of Medicare beneficiaries requiring post-acute care (PAC) services after hospitalization, the need for a seamless exchange of health information is great. The findings from a 2020 study highlight the significant gap in sharing information at transition.  The survey assessed continuity between hospitals and skilled nursing facilities (SNF) and found that at transition of care observational information about mobility, self-care and domestic life was received by the SNF only  60% of the time. [[JAMA Network Open. 2021;4(1):e2033980. doi: 10.1001/jamanetworkopen.2020.33980](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2775075)].

The scope of this Functional Status Implementation Guide (IG) focuses on exchanging mobility, self-care, and domestic life observations primarily involving PAC transitions with various care settings and HCBS. While this is the start, the IG is intended to expand over time and include functioning observations not limited to PAC. The impetus for this initial focus is the amendment to the Social Security Act in 2014 to include the Improving Medicare Post-Acute Care Transformation (IMPACT) Act.  IMPACT required the standardization and interoperability of patient assessment in specific categories for PAC settings, including long-term care hospitals (LTCHs), home health agencies (HHAs), SNFs, and inpatient rehabilitation facilities (IRFs). It focuses on standardizing data elements in specified quality measure domains and patient assessment domains for cross setting comparison and clinical information exchange, respectively.

The Act requires:
* Reporting of standardized patient assessment data through commonly used CMS assessment instruments for LTCHs, SNFs, HHAs, IRFs, home and community-based services (HCBS), and Hospice Care:
    * Minimum Data Set (MDS) for SNFs
    * Inpatient Rehabilitation Facility – Patient Assessment Information (IRF – PAI) for IRFs
    * LTCH Continuity Assessment Record and Evaluation (CARE) Data Set (LCDS) for LTCHs
    * Outcome and Assessment Information Set (OASIS) for HHAs
    * Functional Assessment Standardized Items (FASI) for HCBS
    * Hospice Item Set (HIS) for Hospice Care
* Implementation of data elements specified in each domain using standardized data elements to be nested within the CMS assessment instruments currently required for submission by LTCH, IRF, SNF, HHA, and hospice providers.  For HCBS where no standardized data element requirement currently exists, a standardized item set (FASI) has been made available by CMS at no cost to the community, states, or providers.
* Data to be standardized and interoperable to allow exchange of data between PAC providers, among others, using common standards and definitions to provide access to longitudinal information and facilitate coordinated care.

![PACIO logo](./pacio.png)

### The PACIO Project

The PACIO Project is a collaborative effort to advance interoperable health data exchange between PAC and other providers, patients, and key stakeholders across health care and to promote health data exchange in collaboration with policy makers, standards organizations, and industry through a consensus-based approach.

The primary goal of the PACIO Project is to establish a framework for the development of Fast Healthcare Interoperability Resource (FHIR) technical implementation guides and reference implementations that will facilitate health data exchange through standards-based use case-driven application programming interfaces (APIs).

### Functional Status

Functioning observations related to mobility, self-care and domestic life are often used to describe how a person is able to interact with their environment and is a foundation to patient centered care. It is used in reporting outcomes for clinical care, quality improvement activities, quality measure reporting, and research. Identifying a decline in functioning has been shown to be a first sign in declining health for individuals with chronic conditions and indicative of the severity of an acute illness. Observations related to functioning are often used as a risk factor assessment tool; prognostic indicator hospital readmission; and predictor of morbidity and mortality. Information related to these observations are often a major focus for seeking healthcare and making end of life decisions. There has been discussion to include functioning as the sixth vital sign.

Domains in functioning observations include mobility, self-care, and domestic life/instrumental activities of daily living (IADLs). Using the conceptual framework of the International Classification of Functioning, Disability and Health (commonly known as ICF), these domains can be further broken down into more specific data elements. For example, mobility includes aspects such as rolling over, transferring, walking and moving, etc. Self-care includes aspects such as dressing, grooming, bathing, eating, toileting, etc. Domestic life and instrumental activities of daily living includes aspects such as household tasks, managing finances, acquiring goods and services, managing transportation, etc. More information on mental function concepts that may be included in this IG can be found in the [ICF Browser](https://apps.who.int/classifications/icfbrowser/).

The focus of this IG is on mobility, self-care, and domestic life functioning observation data (not the representation of the condition, problem, diagnosis or health concern; care plan; and goals) utilized by various settings by providing examples using observation data all of which have LOINC representation for the question/answer structure. This IG is not limited to PAC functioning observations and in the future will be expanded to include other relevant observations utilized by health care settings and practitioners more broadly, including HCBS. Descriptor functioning observations are part of an evaluation or assessment of a patient’s status. The functioning observations may include details of a patient’s mobility, ADL and/or IADL self-performance or need for assistance. The observation data, if present, will include supporting caregivers, non-medical devices, personal priorities, and the time period for which the assessment instruments were performed.

In this IG a set of starter profiles based on some well-established FHIR resources is presented to define data models which specify data elements and coding standards to promote standardization and interoperability.

### Content and Organization
The implementation guide is organized into the following sections:
* [Use Case Example](functional_status_use_case.html) Describes an example of its use and provides a high-level overview of expected process flow.
* [Underlying Technologies](underlying_technologies.html) Describes the different specifications this implementation guide relies on and indicates what developers should read and understand prior to implementing this specification.
* [Profile Highlights and Guidance](profile_highlights_and_guidance.html) Provides a closer look at the IG profiles and guidance for constructing profile instances with examples for data exchange.
* [Security and Data Sharing](security_and_data_sharing.html) Covers issues concerning security and patient information access and sharing.
* [Artifacts Summary](artifacts.html) Introduces and provides links to the Capability Statement, IG Resource Profiles, and IG Extension Definitions as well as example profile instances.

### Dependencies
This implementation guide relies on the following other specifications:
* [FHIR R4]({{site.data.fhir.path}}) - The 'current' official version of FHIR as of the time this implementation guide was published.  See the [background page](underlying_technologies.html) for key pieces of this specification implementers should be familiar with.
* [US Core STU3](http://hl7.org/fhir/us/core) - The version of US Core based on FHIR R4.

This implementation guide defines additional constraints and usage expectations above and beyond the information found in these base specifications.

### Downloads
* The full [PACIO Functional Status Implementation Guide](full-ig.zip)
* [FHIR R4 PACIO FS Resource Definitions](definitions.json.zip) for use with the FHIR FHIR PACIO FS IG validator
* [FHIR PACIO FS IG  Validator Pack](validator-hl7.fhir.us.pacio-fs.pack) which can be used to check FHIR PACIO FS IG resource instance validity

---

// File: input/pagecontent/profile_highlights_and_guidance.md

This implementation guide provides a set of resource profiles to define how information should be packaged and retrieved in the exchange of post-acute care (PAC) assessment data. In the following sections the highlights of the key fields of each profile are presented and guidance for building profile instances is provided.

A note on the use of "Must Support" in the Implementation Guide:
For profiles defined in other IGs, the meaning of "Must Support" is established in the defining IG. For profiles defined in this IG, [Must Support](http://hl7.org/fhir/us/core/general-guidance.html#must-support) will conform with US Core definition.


### Resource Profile: FunctionalStatusCollection

This resource profile is intended to be used for the data exchange of a point in time set of observation data collected through the use of a structured resource (e.g. assessment tool, instrument, or screen). It is derived from the FHIR Observation resource.

### Resource Profile: FunctionalStatus

This resource profile is intended to be used for the data exchange of a single observation data generally included in a set of observation data collected through the use of a structured resource (e.g. assessment tool, instrument, or screen). It is derived from the FHIR Observation resource.

### Resource Profile: NarrativeHistoryOfFunctionalStatus

This resource profile is intended to be used for the data exchange of a summary observation regarding the most recent prior level of function immediately preceding the current admission, illness, or exacerbation for a patient. The use of this profile is encouraged in the absence of formal prior level of function assessments. For formal assessments conducted with for example, an assessment instrument, use the Functional Status Collection and Functional Status profiles to capture assessment data. It is derived from the FHIR Observation resource.

### Resource Profile: UseOfDevice

This resource profile is intended to be used for specifying a record of an assistive device–e.g. walker or wheelchair, being used by a patient during a functional status assessment. This profile based on the DeviceUseStatement resource provides a way to include information about device usage during an assessment.

### Data Exchange Guidance and Examples

The PACIO data model as expressed in the resource profiles is designed to be flexible so as to facilitate the exchange of a variety of types of PAC assessment data. The key to effective data exchange and searching of assessment data is the use of content standards. Therefore, it is paramount that nationally accepted, standardized coding systems such as LOINC and SNOMED are used in specifying assessment data elements.

In the following set of examples, we provide guidance for using specific codes and conventions for constructing profile instances for data exchange. Although we reference a number of particular PAC patient/resident assessment instruments and provide examples to show how those particular types of assessment data can be exchanged, we do not endorse any of those assessment instruments over other assessment instruments that we have not mentioned. Our intention is to demonstrate the flexibility and adequacy of the PACIO data model, rather than to suggest the best types of functional assessment data for clinicians to use.

### PACIOfunctionalQuestionaireResponse – Mobility Example

![QResponse Mobility Example](QResponse_Mobility_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. The ‘questionnaire’ field is the URL pointing to the file of the questionnaire that defines and organizes the questions for which answers are being provided.
2. Each ‘linkId’ field should match the ‘linkId’ of the corresponding section title or question from the questionnaire.
3. The nesting structure of the ‘item’ fields should correspond to the nesting structure as showed in the questionnaire.

### FunctionalStatusCollection – Mobility Admission Example

![BFS Admission Example](BFS_Mobility_Admission_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Here is how the ‘event-location’ extension is used to point to a FHIR Location resource where the observation event occurred.
2. Use the right LOINC code to indicate the particular kind of functional assessment. In this case the LOINC code ‘88330-6’ is used to indicate ‘Mobility - Admission Performance’.
3. The ‘category’ field should contain the value ‘survey’ for a PAC assessment.

### FunctionalStatusCollection – Mobility Discharge and Device Used Example

![BFS Mobility Discharge and DeviceUsed Example](BFS_Mobility_Discharge_and_DeviceUsed_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Here is how the ‘device-patient-used’ extension is used to point to a UseOfDevice resource to specify a device used by the patient during assessment.
2. Use the right LOINC code to indicate the particular kind of functional assessment. In this case the LOINC code ‘88331-4’ is used to indicate ‘Mobility - Discharge Performance’.
3. Use the ‘performer’ field to reference a US Core PractitionerRole resource instance that specifies a practitioner and an organization.

### FunctionalStatusCollection – Self-Care Admission Example

![BFS SelfCare Admission Example](BFS_SelfCare_Admission_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Use the right LOINC code to indicate the particular kind of functional assessment. In this case the LOINC code ‘83233-7’ is used to indicate ‘Self-Care - Admission Performance’.
2. An assessment with more than one observation questions would have a number of ‘hasMember’ elements, each of which would point to an observation in the assessment.
3. The 'derivedFrom' points back to the PACIOfunctionalQuestionaireResponse resource, which provides context and structure for the observation-based information.

### PriorLevelOfFunction – Prior Level of Function Example

![PLOF Example](PLOF_Example.png){:style="float: none;"}

**Guidance and Notes:**
1. Use the extension to provide indication of 'independent' vs. 'assistance needed'.
2. Text summary of the prior level of function for the patient.


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

Based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard, this implementation guide uses terminology, notations, and design principles that are specific to Fast Healthcare Interoperability Resources (FHIR).
### Fast Healthcare Interoperability Resources

Implementers should be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read the following prior to reading the rest of this implementation guide.

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

// File: input/fsh/bundledFunctionalStatus.fsh

Profile:        FunctionalStatusCollection
Parent:         Observation
Id:             pacio-fsc
Title:          "PACIO Functional Status Collection"
Description:    "A point in time collection of functional status observations for a patient. This profile is used for exchanging a set of observation data collected through the use of a structured resource (e.g. assessment tool, instrument, or screen)."

* subject 1..1
* subject only Reference(USCorePatient)

* encounter only Reference(USCoreEncounter)

* code from LNCVS (extensible)

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
// * category 1..*
// * category from PACIOFunctioningCategoryVS (extensible)
// * category = PACIOFunctioningCategoryCS#functioning

* effective[x] 1..1
* effective[x] only dateTime or Period

* hasMember only Reference(FunctionalStatus)
* hasMember MS

* derivedFrom only Reference(SDCQR)
* derivedFrom MS

* extension contains ObservationEventLocation named event-location 0..1 MS
//* extension contains ObservationLocation named event-location 0..1 MS
* extension contains DevicePatientUsed named device-use 0..* MS

* effective[x] ^short = "Clinical relevant time for an assessment such as functional assessments performed with structured evaluation tools is the time the evaluation occurs, i.e., when the clinician obtains the answers entered in the tool. However, the only timing available may be when then tool is completed by the clinician. That timing is generally documented as a point in time (dateTime)."
* effective[x] ^definition = "Clinical relevant time for an assessment such as functional assessments performed with structured evaluation tools is the time the evaluation occurs, i.e., when the clinician obtains the answers entered in the tool. However, the only timing available may be when then tool is completed by the clinician. That timing is generally documented as a point in time (dateTime)."
* effective[x] ^comment = "The use of effective[x] and dateTime versus Period is subject to implementer workflow and needs.  In most situations, an observation is considered as a point in time, even if the assessment occurred over a period of time.  Period is included in this implementation guide to provide additional flexibility for specific use cases.  However, it is expected most observations will be recorded using DateTime.  Furthermore, any retrieval of information should return the relevant if DateTime is requested, even if the original observation was recorded as a period.  Some implementers may choose to use additional functions in there retrieves to 'normalize' intervals, as is done in Clinical Quality Language (CQL)."
* value[x] ^short = "If used, should use the CodeableConcept datatype whenever possible to provide a suitable code to define the concept for the observation data. When capturing a collection of related observations, typically this field is not used. If the outcome of an assessment includes one or more summary scores, leave this field unused and use the 'hasMember' field to point to one or more Observation resources with each of which has a score provided in the 'value' field."
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."
* category ^short = "A second category code may be used along with the code “functioning”. For example, for assessment tool/survey instrument observations use “survey” as a second code."
* code ^short = "For a Post-Acute Care structured assessment resource such as an instrument or screen, use a LOINC code to identify the instrument/screen name or panel/section title to indicate the kind of assessment."
* subject ^short = "Should only reference a Patient resource."
* hasMember ^short = "Each functional status observation in the collection."
* basedOn ^short = "Currently not used in FunctionalStatusCollection."
* partOf ^short = "Currently not used in FunctionalStatusCollection."
* status ^short = "Should have the value 'final' when all the observatons are complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."
* focus ^short = "Currently not used in FunctionalStatusCollection."
* issued ^short = "Currently not used in FunctionalStatusCollection."
* dataAbsentReason ^short = "Currently not used in FunctionalStatusCollection."
* interpretation ^short = "Currently not used in FunctionalStatusCollection."
* bodySite ^short = "Currently not used in FunctionalStatusCollection."
* method ^short = "Currently not used in FunctionalStatusCollection."
* specimen ^short = "Currently not used in FunctionalStatusCollection."
* device ^short = "Currently not used in FunctionalStatusCollection."
* referenceRange ^short = "Currently not used in FunctionalStatusCollection."
* component ^short = "Currently not used in FunctionalStatusCollection."
* derivedFrom ^short = "Should point back to the SDC QuestionnaireResponse that this resource is derived from."
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension[device-use] ^short = "An extension to indicate a record of assistive device usage by a patient during an assessment."

Extension: ObservationEventLocation
Parent: EventLocation
Description: "This extension is used to indicate the principal physical location where an observation event occurred."
Id: event-location
* value[x] only Reference(USCoreLocation)

Extension: DevicePatientUsed
Description: "Associated with the Funcational Status Collection profile to point to a record indicating what healthcare-related assistive device was used by a patient during a functional status assessment. This extension leverages the DeviceUseStatement resource instead of Device resource so as to indicate appropriately a record of assistive device usage by a patient."
Id: device-patient-used
* value[x] only Reference(UseOfDevice)
* value[x] ^short = "Points to a record of a healthcare-related assistive device being used by a patient during an assessment."

---

// File: input/fsh/BundledObservationInstances.fsh

Alias:  LNC = http://loinc.org
Alias:  CAT = http://terminology.hl7.org/CodeSystem/observation-category

Instance: FSC-Hospital-Discharge-Mobility-1
InstanceOf: FunctionalStatusCollection
Description: "An instance of FunctionalStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#88331-4
* code.coding.display = "Mobility - discharge performance during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* extension[device-patient-used][0].valueReference = Reference(FSC-Hospital-Discharge-Mobility-1-UseOfDevice-1)
* extension[device-patient-used][1].valueReference = Reference(FSC-Hospital-Discharge-Mobility-1-UseOfDevice-2)
* extension[device-patient-used][2].valueReference = Reference(FSC-Hospital-Discharge-Mobility-1-UseOfDevice-3)
* extension[device-patient-used][3].valueReference = Reference(FSC-Hospital-Discharge-Mobility-1-UseOfDevice-4)
* extension[device-patient-used][4].valueReference = Reference(FSC-Hospital-Discharge-Mobility-1-UseOfDevice-5)
* hasMember[0] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-2)
* hasMember[1] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-4)
* hasMember[2] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-6)
* hasMember[3] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-8)
* hasMember[4] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-10)
* hasMember[5] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-12)
* hasMember[6] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-14)
* hasMember[7] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-16)
* hasMember[8] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-18)
* hasMember[9] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-20)
* hasMember[10] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-22)
* hasMember[11] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-24)
* hasMember[12] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-26)
* hasMember[13] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-28)
* hasMember[14] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-30)
* hasMember[15] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-32)
* hasMember[16] = Reference(FSC-Hospital-Discharge-Mobility-1-Ob-Question-34)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)
* derivedFrom.type = "QuestionnaireResponse"

Instance: FSC-Hospital-Admission-Mobility-1
InstanceOf: FunctionalStatusCollection
Description: "An instance of FunctionalStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#88330-6
* code.coding.display = "Mobility - admission performance during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* extension[device-patient-used][0].valueReference = Reference(FSC-Hospital-Admission-Mobility-1-UseOfDevice-6)
* extension[device-patient-used][1].valueReference = Reference(FSC-Hospital-Admission-Mobility-1-UseOfDevice-7)
* hasMember[0] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-1)
* hasMember[1] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-3)
* hasMember[2] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-5)
* hasMember[3] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-7)
* hasMember[4] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-9)
* hasMember[5] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-11)
* hasMember[6] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-13)
* hasMember[7] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-15)
* hasMember[8] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-17)
* hasMember[9] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-19)
* hasMember[10] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-21)
* hasMember[11] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-23)
* hasMember[12] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-25)
* hasMember[13] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-27)
* hasMember[14] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-29)
* hasMember[15] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-31)
* hasMember[16] = Reference(FSC-Hospital-Admission-Mobility-1-Ob-Question-33)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)
* derivedFrom.type = "QuestionnaireResponse"

---

// File: input/fsh/CodeSystemsAndValueSets.fsh

CodeSystem: PACIOFunctioningCategoryCS
Title: "PACIO Functioning Category Code System"
Id: pacio-cat-fs
Description: "Defining a specific code for the classification of patient observation regarding individual's functioning."
* #functioning "Functioning" "Functioning is an umbrella term for body function, body structures, activities, and participation in societal roles. An individual’s functioning represents a dynamic interaction between their health condition, environmental factors, and personal factors. Taking a broad view of health that encompasses physical, mental, and social well-being, includes optimizing functioning as a component of optimizing their health. Characterizing an individual’s functioning includes both understanding the severity of an individual’s signs, symptoms, impairments and limitations, and how they correspond with day-to-day activities. Functioning also serves as a key health outcome within health care."

ValueSet: PACIOFunctioningCategoryVS
Title: "PACIO Functioning Category Value Set"
Description: "Codes for the classification of patient observation. This is an extension of the ObservationCategoryCodes value set"
Id: pacio-cat-vs
* include codes from valueset CATVS
* include codes from system PACIOFunctioningCategoryCS


---

// File: input/fsh/device_use.fsh

Alias:  DVT = https://www.hl7.org/fhir/valueset-device-nametype.html
Alias: ObservationLocation = http://hl7.org/fhir/StructureDefinition/event-location


Profile:        UseOfDevice
Parent:         DeviceUseStatement
Id:             pacio-dev
Title:          "Use of Device"
Description:    "A record of an assistive device–e.g. walker or wheelchair, being used by a patient during a functional status assessment. This profile based on the DeviceUseStatement resource provides a way to include information about device usage during an assessment."
* subject 1..1
* subject only Reference(USCorePatient)
* device ^short = "The description of the device that the patient used."
* bodySite ^requirements = "Knowing where the device is targeted is important for tracking if multiple sites are possible. If more information than just a code is required, use the extension http://hl7.org/fhir/R4/extension-bodysite."

---

// File: input/fsh/DeviceInstances.fsh

Alias: DVT = https://www.hl7.org/fhir/valueset-device-nametype.html
Alias: SCT = http://snomed.info/sct

Instance: CMS-Device-1
InstanceOf: Device
Description: "An instance of Device"
* deviceName.name = "Bedside rails, device"
* deviceName.type = DVT#user-friendly-name
* type = SCT#37953008

Instance: CMS-Device-3
InstanceOf: Device
Description: "An instance of Device"
* deviceName.name = "Rolling walker"
* deviceName.type = DVT#user-friendly-name
* type = SCT#404946006

Instance: CMS-Device-2
InstanceOf: Device
Description: "An instance of Device"
* deviceName.name = "Walker"
* deviceName.type = DVT#user-friendly-name
* type = SCT#466317003

Instance: CMS-Device-5
InstanceOf: Device
Description: "An instance of Device"
* deviceName.name = "Raised toilet seat"
* deviceName.type = DVT#user-friendly-name
* type = SCT#705593007

Instance: CMS-Device-4
InstanceOf: Device
Description: "An instance of Device"
* deviceName.name = "Handle bars"
* deviceName.type = DVT#user-friendly-name
* type = SCT#465550005


---

// File: input/fsh/FunctionalStatus.fsh

/**********
NOTE: Aliases are defined in GlobalAliasList.fsh
**********/
Profile:        FunctionalStatus
Parent:         Observation
Id:             pacio-fs
Title:          "PACIO Functional Status"
Description:    "An exchange of functional status observation for a patient. This profile is used for exchanging a single observation data generally included in a set of observation data collected through the use of a structured resource (e.g. assessment tool, instrument, or screen)."

* subject 1..1
* subject only Reference(USCorePatient)

* encounter only Reference(USCoreEncounter)

* code from LNCVS (extensible)

* performer 1..*
* performer only Reference(USCorePractitioner or USCorePractitionerRole or USCoreOrganization)

//* value[x] only CodeableConcept
//* value[x] from LNCVS (extensible)

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "coding"
* category ^slicing.rules = #open
//* category ^slicing.ordered = true
* category contains functioning 1..1
* category[functioning] from PACIOFunctioningCategoryVS (extensible)
* category[functioning].coding = PACIOFunctioningCategoryCS#functioning "Functioning"
// * category 1..*
// * category from PACIOFunctioningCategoryVS (extensible)
// * category = PACIOFunctioningCategoryCS#functioning

* effective[x] only dateTime
* effective[x] 1..1

* derivedFrom only Reference(SDCQR)
* derivedFrom MS

* extension contains ObservationEventLocation named event-location 0..1 MS
//* extension contains ObservationLocation named event-location 0..1 MS

* value[x] ^short = "Whenever possible should use the CodeableConcept datatype to provide a suitable code to define the concept for the observation data. As for values like an assessment score or roll-up value, the datatype for this element should be determined by Observation.code. However, for values that are ordinal, may use the CodeableConcept datatype along with the Ordinal Value Extension."
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."
* category ^short = "A second category code may be used along with the code “functioning”. For example, for assessment tool/survey instrument observations use “survey” as a second code."
* code ^short = "For a Post-Acute Care Assessment, code should be a LOINC code and text for the question or concept name."
* subject ^short = "Subject should only be Patient for functional status"
* component ^short = "Currently not used in FunctionalStatus."
// * component ^short = "If used, the answers for the associated questions (for the purpose of grouping answers under a heading and displaying side-by-side columns)"
// * component.code ^short = "If used, the LOINC code or text of the column header (for the purpose of grouping answers under a heading and displaying side-by-side columns)."
// * component.value[x] ^short = "The code and text for the answer to the (associated) question."
* basedOn ^short = "Currently not used in FunctionalStatus."
* partOf ^short = "Currently not used in FunctionalStatus."
* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."
* focus ^short = "Currently not used in FunctionalStatus."
* issued ^short = "Currently not used in FunctionalStatus."
//* dataAbsentReason ^short = "Currently not used in FunctionalStatus."
* interpretation ^short = "Currently not used in FunctionalStatus."
* bodySite ^short = "Currently not used in FunctionalStatus."
* method ^short = "Currently not used in FunctionalStatus."
* specimen ^short = "Currently not used in FunctionalStatus."
* device ^short = "Currently not used in FunctionalStatus."
* referenceRange ^short = "Currently not used in FunctionalStatus."
* hasMember ^short = "Currently not used in FunctionalStatus."
* derivedFrom ^short = "Should point back to the SDC QuestionnaireResponse that this resource is derived from."
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."

---

// File: input/fsh/GlobalAliasList.fsh

// Code Systems
// NOTE: use a code system (not value set) in instances
Alias:  LNC = http://loinc.org
Alias: CAT = http://terminology.hl7.org/CodeSystem/observation-category

// Value Sets
// NOTE: use a value set (not code system) when binding a field
Alias: LNCVS = http://hl7.org/fhir/ValueSet/observation-codes
Alias: CATVS = http://hl7.org/fhir/ValueSet/observation-category
Alias: LL4309-2 = http://loinc.org/vs/LL4309-2

// Misc.
Alias: EventLocation = http://hl7.org/fhir/StructureDefinition/event-location
Alias: USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: USCoreEncounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias: USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias: USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: SDCQR = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse

Alias: MDS3.0-NC-1.17 = http://example.org/Questionnaire/MDS3.0-NC-1.17
//Alias: MDS3.0-NC-1.17 = http://build.fhir.org/ig/HL7/fhir-pacio-functional-status/MDS3.0-NC-1.17

---

// File: input/fsh/MicsInstances.fsh

Alias: Hl7FhirAdminGender  = http://hl7.org/fhir/administrative-gender
Alias: SCT = http://snomed.info/sct
Alias: NUCC = http://nucc.org/provider-taxonomy


// Patient instance
Instance: patientBSJ1
InstanceOf: Patient
Description: "An instance of Patient"
* name.given = "Betsy"
* name.family = "Smith-Johnson"

// PractitionerRole instances
Instance: Role-PT-SallySmith
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#36682004
* code.coding.display = "Physiotherapist"
* active = true
* practitioner = Reference(Practitioner-SallySmith)
* organization = Reference(Org-01)
* location = Reference(Org-Loc-01)

Instance: Role-PT-RonMarble
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#36682004
* code.coding.display = "Physiotherapist"
* active = true
* practitioner = Reference(Practitioner-RonMarble)
* organization = Reference(Org-01)
* location = Reference(Org-Loc-01)

Instance: Role-OT-JenCadbury
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#80546007
* code.coding.display = "Occupational therapist"
* active = true
* practitioner = Reference(Practitioner-JenCadbury)
* organization = Reference(Org-02)
* location = Reference(Org-Loc-02)

Instance: Role-OT-DanielGranger
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#80546007
* code.coding.display = "Occupational therapist"
* active = true
* practitioner = Reference(Practitioner-DanielGranger)
* organization = Reference(Org-02)
* location = Reference(Org-Loc-02)

Instance: Role-PT-LunaBaskins
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#36682004
* code.coding.display = "Physiotherapist"
* active = true
* practitioner = Reference(Practitioner-LunaBaskins)
* organization = Reference(Org-03)
* location = Reference(Org-Loc-03)

Instance: Role-PT-ScottDumble
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = SCT#36682004
* code.coding.display = "Physiotherapist"
* active = true
* practitioner = Reference(Practitioner-ScottDumble)
* organization = Reference(Org-03)
* location = Reference(Org-Loc-03)

// Instance: Role-PT
// InstanceOf: PractitionerRole
// * code = SCT#36682004
// * code.coding.display = "Physiotherapist"
// * active = true

// Instance: Role-OT
// InstanceOf: PractitionerRole
// * code = SCT#80546007
// * code.coding.display = "Occupational therapist"
// * active = true

// Instance: Role-RN
// InstanceOf: PractitionerRole
// * code = SCT#224535009
// * code.coding.display = "Registered Nurse"
// * active = true

// Practitioner instances
Instance: Practitioner-SallySmith
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Sally"
* name.family = "Smith"
* active = true
* gender = Hl7FhirAdminGender#female

Instance: Practitioner-RonMarble
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Ron"
* name.family = "Marble"
* active = true
* gender = Hl7FhirAdminGender#male

Instance: Practitioner-JenCadbury
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Jen"
* name.family = "Cadbury"
* active = true
* gender = Hl7FhirAdminGender#female

Instance: Practitioner-DanielGranger
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Daniel"
* name.family = "Granger"
* active = true
* gender = Hl7FhirAdminGender#male

Instance: Practitioner-LunaBaskins
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Luna"
* name.family = "Baskins"
* active = true
* gender = Hl7FhirAdminGender#female

Instance: Practitioner-ScottDumble
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "Scott"
* name.family = "Dumble"
* active = true
* gender = Hl7FhirAdminGender#male

// Instance: Practitioner-JennyGlass
// InstanceOf: Practitioner
// * name.given = "Jenny"
// * name.family = "Glass"
// * active = true
// * gender = Hl7FhirAdminGender#female

// Instance: Practitioner-RonBurgendy
// InstanceOf: Practitioner
// * name.given = "Ron"
// * name.family = "Burgendy"
// * active = true
// * gender = Hl7FhirAdminGender#male

// Instance: Practitioner-HoneyJones
// InstanceOf: Practitioner
// * name.given = "Honey"
// * name.family = "Jones"
// * active = true
// * gender = Hl7FhirAdminGender#female


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


//////////////////////////////////////////
Instance: provider-role-pcp
InstanceOf: PractitionerRole
Description: "An instance of PractitionerRole"
* code = NUCC#261QP2300X
* code.coding.display = "Primary Care Clinic/Center"
* active = true
* practitioner = Reference(Practitioner-JohnSmith)
* organization = Reference(provider-org-01)
* location = Reference(provider-org-loc-01)

Instance: Practitioner-JohnSmith
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* name.given = "John"
* name.family = "Smith"
* name.text = "Primary Care Physician"
* active = true
* gender = Hl7FhirAdminGender#male

Instance: Practitioner-NoraOlogist
InstanceOf: Practitioner
Description: "An instance of Practitioner"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "3668788925"
* name.given = "Nora"
* name.family = "Ologist"
* name.text = "Neurologist"
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "(210) 555 7632"
* address.text = "26022 Meadowlark Bay, San Antonio, TX 78260"

Instance: provider-org-01
InstanceOf: Organization
Description: "An instance of Organization"
* name = "Primary Care"

Instance: provider-org-loc-01
InstanceOf: Location
Description: "An instance of Location"
* status = #active
* name = "Primary Care"
* address.text = "177 Deerfield St. San Antonio, TX 78207"


---

// File: input/fsh/ObservationInstances.fsh

Alias: LNC = http://loinc.org
Alias: UOM = http://unitsofmeasure.org
Alias: DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: CAT = http://terminology.hl7.org/CodeSystem/observation-category

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-25
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83194-1
* code.text = "4 steps"
* code.coding.display = "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-27
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83192-5
* code.text = "12 steps"
* code.coding.display = "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-21
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83198-2
* code.text = "Walking 10 feet on uneven surfaces"
* code.coding.display = "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-23
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83196-6
* code.text = "1 step (curb)"
* code.coding.display = "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-29
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83190-9
* code.text = "Picking up object"
* code.coding.display = "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-18
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83202-2
* code.text = "Walk 50 feet with two turns"
* code.coding.display = "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-16
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83204-8
* code.text = "Walk 10 feet"
* code.coding.display = "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-14
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83206-3
* code.text = "Car transfer"
* code.coding.display = "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-12
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83208-9
* code.text = "Toilet transfer"
* code.coding.display = "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-10
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83210-5
* code.text = "Chair/bed-to-chair transfer"
* code.coding.display = "Bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-34
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83235-2
* code.text = "Wheel 150 feet"
* code.coding.display = "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-30
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83190-9
* code.text = "Picking up object"
* code.coding.display = "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-32
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83188-3
* code.text = "Wheel 50 feet with two turns"
* code.coding.display = "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-9
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83210-5
* code.text = "Chair/bed-to-chair transfer"
* code.coding.display = "Bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA27665-1
* valueCodeableConcept.text = "Dependent"
* valueCodeableConcept.coding.display = "Dependent - Helper does all of the effort. Patient does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the patient to complete the activity."
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-19
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83200-6
* code.text = "Walk 150 feet"
* code.coding.display = "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-3
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83216-2
* code.text = "Sit to lying"
* code.coding.display = "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-1
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83218-8
* code.text = "Roll left and right"
* code.coding.display = "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-11
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83208-9
* code.text = "Toilet transfer"
* code.coding.display = "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-13
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83206-3
* code.text = "Car transfer"
* code.coding.display = "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-33
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83235-2
* code.text = "Wheel 150 feet"
* code.coding.display = "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-31
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83188-3
* code.text = "Wheel 50 feet with two turns"
* code.coding.display = "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-15
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83204-8
* code.text = "Walk 10 feet"
* code.coding.display = "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-2
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83218-8
* code.text = "Roll left and right"
* code.coding.display = "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-28
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83192-5
* code.text = "12 steps"
* code.coding.display = "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-17
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83202-2
* code.text = "Walk 50 feet with two turns"
* code.coding.display = "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-6
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83214-7
* code.text = "Lying to sitting on side of bed"
* code.coding.display = "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-4
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83216-2
* code.text = "Sit to lying"
* code.coding.display = "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-22
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83198-2
* code.text = "Walking 10 feet on uneven surfaces"
* code.coding.display = "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-20
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83200-6
* code.text = "Walk 150 feet"
* code.coding.display = "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-8
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83212-1
* code.text = "Sit to stand"
* code.coding.display = "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-26
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83194-1
* code.text = "4 steps"
* code.coding.display = "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Discharge-Mobility-1-Ob-Question-24
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-10T14:34:00-05:00"
* code = LNC#83196-6
* code.text = "1 step (curb)"
* code.coding.display = "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-PT-RonMarble)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Discharge-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-7
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83212-1
* code.text = "Sit to stand"
* code.coding.display = "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)

Instance: FSC-Hospital-Admission-Mobility-1-Ob-Question-5
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-08T16:00:00-05:00"
* code = LNC#83214-7
* code.text = "Lying to sitting on side of bed"
* code.coding.display = "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-PT-SallySmith)
* extension[event-location].valueReference = Reference(Org-Loc-01)
* derivedFrom = Reference(QResponse-Hospital-Admission-Mobility-1)


---

// File: input/fsh/PriorLevelOfFunction.fsh


Profile:        NarrativeHistoryOfFunctionalStatus
Parent:         Observation
Id:             pacio-nhfs
Title:          "PACIO Narrative History of Functional Status"
Description:    "An exchange of summary observation regarding the most recent prior level of function immediately preceding the current admission, illness, or exacerbation for a patient. The use of this profile is encouraged in the absence of formal prior level of function assessments. For formal assessments conducted with for example, an assessment instrument, use the Functional Status Collection and Functional Status profiles to capture assessment data."

* code from LNCVS
* code = LNC#10158-4 "History of Functional status Narrative"
//* code.text = "History of Functional status Narrative"

* value[x] 1..1
* value[x] only string
* value[x] ^short = "Unstructured summary of functional status observation for the patient. (Strongly encouraged until more structured method is established)"
* value[x] ^definition = "Unstructured summary of functional status observation for the patient. (Strongly encouraged until more structured method is established)"

* subject 1..1
* subject only Reference(USCorePatient)

* encounter only Reference(USCoreEncounter)

* category 1..*
* category from PACIOFunctioningCategoryVS (extensible)
* category = PACIOFunctioningCategoryCS#functioning

* performer 1..*
* performer ^short = "The person who performed the assessment. The preferred way to specify the performer is to use the PractitionerRole resource to provide both the practitioner and organization."


* effective[x] 1..1
* effective[x] only dateTime or Period

* extension contains ObservationEventLocation named event-location 0..1 MS
//* extension contains ObservationLocation named event-location 0..1 MS
* extension[event-location] ^short = "An extension to indicate where the observation event occurred."
* extension[event-location] ^definition = "The principal physical location where the observation event occurred."
* extension contains AssistanceRequired named assistance-required 0..1 MS
* extension[assistance-required] ^short = "An extension to indicate the level of assistance required for a patient during an assessment."

* basedOn ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* partOf ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* status ^short = "Should have the value 'final' when the observation is complete and there are no further actions needed. Otherwise, another value from the value set may appropriately be used."
* focus ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* issued ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* dataAbsentReason ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* interpretation ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* bodySite ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* method ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* specimen ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* device ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* referenceRange ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* hasMember ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* derivedFrom ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."
* component ^short = "Currently not used in NarrativeHistoryOfFunctionalStatus."


Extension: AssistanceRequired
Description: "Associated with the Narrative History of Functional Status profile to provide a high-level indication of assistance required for the person’s baseline ability (physical function immediately preceding the current admission, illness, or exacerbation for a patient) to perform everyday activities. The CMS Assessment answer list LL4309-2 provides possible values for this extension."
Id: assistance-required
* value[x] only CodeableConcept
* value[x] from LL4309-2 (extensible)


---

// File: input/fsh/PriorLevelOfFunction.instances.fsh

Alias: LNC = http://loinc.org


Instance: BSJ-Narrative-History-Functional-Status-1
InstanceOf: NarrativeHistoryOfFunctionalStatus
Description: "An instance of NarrativeHistoryOfFunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final

* extension[event-location].valueReference = Reference(provider-org-loc-01)
* extension[assistance-required].valueCodeableConcept = LNC#LA11539-6
* extension[assistance-required].valueCodeableConcept.coding.display = "Independent - Patient completed the activities by him/herself, with or without an assistive device, with no assistance from a helper."

* valueString = "Patient is a community ambulator, able to attend desired activites and able to care for herself independently."

* performer = Reference(provider-role-pcp)
* effectivePeriod.start = "2019-07-01"
* effectivePeriod.end = "2020-11-30"


---

// File: input/fsh/SDCQuestionnaireResponseInstances.fsh

Alias: SDCQR = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse
Alias: LNC = http://loinc.org

Instance: QResponse-Hospital-Discharge-Mobility-1
InstanceOf: SDCQR
Description: "An instance of SDCQuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-07-10T14:34:00-05:00"
* author = Reference(Role-PT-RonMarble)
* item[0].linkId = "Section-37"
* item[0].text =  "Functional abilities and goals - discharge [CMS Assessment]"
* item[0].item[0].linkId = "Section-37/GG0170_3"
* item[0].item[0].text =  "Mobility - discharge performance during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[0].linkId = "Section-37/GG0170A3"
* item[0].item[0].item[0].text =  "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[0].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[1].linkId = "Section-37/GG0170B3"
* item[0].item[0].item[1].text =  "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[1].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[2].linkId = "Section-37/GG0170C3"
* item[0].item[0].item[2].text =  "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[2].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[3].linkId = "Section-37/GG0170D3"
* item[0].item[0].item[3].text =  "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[3].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[4].linkId = "Section-37/GG0170E3"
* item[0].item[0].item[4].text =  "Chair/bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[4].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[5].linkId = "Section-37/GG0170F3"
* item[0].item[0].item[5].text =  "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[5].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[6].linkId = "Section-37/GG0170G3"
* item[0].item[0].item[6].text =  "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[6].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[7].linkId = "Section-37/GG0170I3"
* item[0].item[0].item[7].text =  "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[7].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[8].linkId = "Section-37/GG0170J3"
* item[0].item[0].item[8].text =  "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[8].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[9].linkId = "Section-37/GG0170K3"
* item[0].item[0].item[9].text =  "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[9].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[10].linkId = "Section-37/GG0170L3"
* item[0].item[0].item[10].text =  "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[10].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[11].linkId = "Section-37/GG0170M3"
* item[0].item[0].item[11].text =  "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[11].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[12].linkId = "Section-37/GG0170N3"
* item[0].item[0].item[12].text =  "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[12].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[13].linkId = "Section-37/GG0170O3"
* item[0].item[0].item[13].text =  "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[13].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[14].linkId = "Section-37/GG0170P3"
* item[0].item[0].item[14].text =  "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[14].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[15].linkId = "Section-37/GG0170R3"
* item[0].item[0].item[15].text =  "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[15].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[16].linkId = "Section-37/GG0170S3"
* item[0].item[0].item[16].text =  "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[16].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."



Instance: QResponse-Hospital-Admission-Mobility-1
InstanceOf: SDCQR
Description: "An instance of SDCQuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-07-08T16:00:00-05:00"
* author = Reference(Role-PT-SallySmith)
* item[0].linkId = "Section-37"
* item[0].text =  "Functional abilities and goals - admission [CMS Assessment]"
* item[0].item[0].linkId = "Section-37/GG0170_1"
* item[0].item[0].text =  "Mobility - admission performance during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[0].linkId = "Section-37/GG0170A1"
* item[0].item[0].item[0].text =  "Roll left and right - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[0].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[1].linkId = "Section-37/GG0170B1"
* item[0].item[0].item[1].text =  "Sit to lying - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[1].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[2].linkId = "Section-37/GG0170C1"
* item[0].item[0].item[2].text =  "Lying to sitting on side of bed - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[2].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[3].linkId = "Section-37/GG0170D1"
* item[0].item[0].item[3].text =  "Sit to stand - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[3].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[4].linkId = "Section-37/GG0170E1"
* item[0].item[0].item[4].text =  "Chair/bed-to-chair transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[4].answer.valueCoding = LNC#LA27665-1 "Dependent - Helper does all of the effort. Patient does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the patient to complete the activity."
* item[0].item[0].item[5].linkId = "Section-37/GG0170F1"
* item[0].item[0].item[5].text =  "Toilet transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[5].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[6].linkId = "Section-37/GG0170G1"
* item[0].item[0].item[6].text =  "Car transfer - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[6].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[7].linkId = "Section-37/GG0170I1"
* item[0].item[0].item[7].text =  "Walk 10 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[7].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[8].linkId = "Section-37/GG0170J1"
* item[0].item[0].item[8].text =  "Walk 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[8].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[9].linkId = "Section-37/GG0170K1"
* item[0].item[0].item[9].text =  "Walk 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[9].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[10].linkId = "Section-37/GG0170L1"
* item[0].item[0].item[10].text =  "Walking 10 feet on uneven surfaces - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[10].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[11].linkId = "Section-37/GG0170M1"
* item[0].item[0].item[11].text =  "1 step (curb) - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[11].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[12].linkId = "Section-37/GG0170N1"
* item[0].item[0].item[12].text =  "4 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[12].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[13].linkId = "Section-37/GG0170O1"
* item[0].item[0].item[13].text =  "12 steps - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[13].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[14].linkId = "Section-37/GG0170P1"
* item[0].item[0].item[14].text =  "Picking up object - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[14].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[15].linkId = "Section-37/GG0170R1"
* item[0].item[0].item[15].text =  "Wheel 50 feet with two turns - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[15].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[16].linkId = "Section-37/GG0170S1"
* item[0].item[0].item[16].text =  "Wheel 150 feet - functional ability during 3 day assessment period [CMS Assessment]"
* item[0].item[0].item[16].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"


---

// File: input/fsh/SelfCare-BundledObservationInstances.fsh

//Alias:  LNC = http://loinc.org
//Alias:  CAT = http://terminology.hl7.org/CodeSystem/observation-category

Instance: FSC-SNF-Admission-Mobility-SelfCare-1
InstanceOf: FunctionalStatusCollection
Description: "An instance of FunctionalStatusCollection"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83233-7
* code.coding.display = "Self-care - admission performance [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* hasMember[0] = Reference(FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-3)
* hasMember[1] = Reference(FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-7)
* hasMember[2] = Reference(FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-11)
* hasMember[3] = Reference(FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-15)
* hasMember[4] = Reference(FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-19)
* hasMember[5] = Reference(FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-23)
* hasMember[6] = Reference(FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-27)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)
* derivedFrom.type = "QuestionnaireResponse"

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1
// InstanceOf: FunctionalStatusCollection
// Description: "An instance of FunctionalStatusCollection"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#85054-5
// * code.coding.display = "Self-care - discharge goal [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * hasMember[0] = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-29)
// * hasMember[1] = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-30)
// * hasMember[2] = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-31)
// * hasMember[3] = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-32)
// * hasMember[4] = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-33)
// * hasMember[5] = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-34)
// * hasMember[6] = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-35)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)
// * derivedFrom.display = "Questionnaire Response"

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1
// InstanceOf: FunctionalStatusCollection
// Description: "An instance of FunctionalStatusCollection"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83254-3
// * code.coding.display = "Self-care - discharge performance [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * hasMember[0] = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-4)
// * hasMember[1] = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-8)
// * hasMember[2] = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-12)
// * hasMember[3] = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-16)
// * hasMember[4] = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-20)
// * hasMember[5] = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-24)
// * hasMember[6] = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-28)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)
// * derivedFrom.display = "Questionnaire Response"


---

// File: input/fsh/SelfCare-ObservationInstances.fsh


Instance: FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-11
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83228-7
* code.text = "Toileting hygiene"
* code.coding.display = "Toileting hygiene - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)

Instance: FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-3
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83232-9
* code.text = "Eating"
* code.coding.display = "Eating - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)

Instance: FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-7
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83230-3
* code.text = "Oral hygiene"
* code.coding.display = "Oral hygiene - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)

Instance: FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-27
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83220-4
* code.text = "Putting on/taking off footwear"
* code.coding.display = "Putting on/taking off footwear - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)

Instance: FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-23
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83222-0
* code.text = "Lower body dressing"
* code.coding.display = "Lower body dressing - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA11759-0
* valueCodeableConcept.text = "Substantial/maximal assistance"
* valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)

Instance: FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-19
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83224-6
* code.text = "Upper body dressing"
* code.coding.display = "Upper body dressing - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA10055-4
* valueCodeableConcept.text = "Partial/moderate assistance"
* valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)

Instance: FSC-SNF-Admission-Mobility-SelfCare-1-Ob-Question-15
InstanceOf: FunctionalStatus
Description: "An instance of FunctionalStatus"
* subject = Reference(patientBSJ1)
* status = #final
* effectiveDateTime = "2020-07-11T16:32:00-05:00"
* code = LNC#83226-1
* code.text = "Shower/bathe self"
* code.coding.display = "Shower/bathe self - functional ability during 3 day assessment period [CMS Assessment]"
* category[1].coding = CAT#survey "Survey"
* valueCodeableConcept = LNC#LA26735-3
* valueCodeableConcept.text = "Not attempted"
* valueCodeableConcept.coding.display = "Not attempted due to medical condition or safety concerns"
* performer = Reference(Role-OT-JenCadbury)
* extension[event-location].valueReference = Reference(Org-Loc-02)
* derivedFrom = Reference(QResponse-SNF-Admission-Mobility-SelfCare-1)

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-16
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83226-1
// * code.text = "Shower/bathe self"
// * code.coding.display = "Shower/bathe self - functional ability during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA11759-0
// * valueCodeableConcept.text = "Substantial/maximal assistance"
// * valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-12
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83228-7
// * code.text = "Toileting hygiene"
// * code.coding.display = "Toileting hygiene - functional ability during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA10073-7
// * valueCodeableConcept.text = "Setup or cleanup assistance"
// * valueCodeableConcept.coding.display = "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)

// Instance: FSC-HH-Discharge-Mobility-SelfCare-1-Ob-Question-47
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-30T14:00:00-05:00"
// * code = LNC#89407-1
// * code.text = "Lower body dressing"
// * code.coding.display = "Lower body dressing - functional ability [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA9983-3
// * valueCodeableConcept.text = "Independent"
// * valueCodeableConcept.coding.display = "Independent - Patient completes the activity by him/herself with no assistance from a helper."
// * performer = Reference(Role-PT-ScottDumble)
// * extension[event-location].valueReference = Reference(Org-Loc-03)
// * derivedFrom = Reference(QResponse-HH-Discharge-Mobility-SelfCare-1)

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-29
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#83231-1
// * code.text = "Eating"
// * code.coding.display = "Eating - functional goal during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA9983-3
// * valueCodeableConcept.text = "Independent"
// * valueCodeableConcept.coding.display = "Independent - Patient completes the activity by him/herself with no assistance from a helper."
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-28
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83220-4
// * code.text = "Putting on/taking off footwear"
// * code.coding.display = "Putting on/taking off footwear - functional ability during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA10055-4
// * valueCodeableConcept.text = "Partial/moderate assistance"
// * valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-20
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83224-6
// * code.text = "Upper body dressing"
// * code.coding.display = "Upper body dressing - functional ability during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA10073-7
// * valueCodeableConcept.text = "Setup or cleanup assistance"
// * valueCodeableConcept.coding.display = "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-24
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83222-0
// * code.text = "Lower body dressing"
// * code.coding.display = "Lower body dressing - functional ability during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA10055-4
// * valueCodeableConcept.text = "Partial/moderate assistance"
// * valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-33
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#83223-8
// * code.text = "Upper body dressing"
// * code.coding.display = "Upper body dressing - functional goal during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA10073-7
// * valueCodeableConcept.text = "Setup or cleanup assistance"
// * valueCodeableConcept.coding.display = "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-32
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#83225-3
// * code.text = "Shower/bathe self"
// * code.coding.display = "Shower/bathe self - functional goal during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA11759-0
// * valueCodeableConcept.text = "Substantial/maximal assistance"
// * valueCodeableConcept.coding.display = "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-30
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#83229-5
// * code.text = "Oral hygiene"
// * code.coding.display = "Oral hygiene - functional goal during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA9983-3
// * valueCodeableConcept.text = "Independent"
// * valueCodeableConcept.coding.display = "Independent - Patient completes the activity by him/herself with no assistance from a helper."
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-31
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#83227-9
// * code.text = "Toileting hygiene"
// * code.coding.display = "Toileting hygiene - functional goal during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA11757-4
// * valueCodeableConcept.text = "Supervision or touching assistance"
// * valueCodeableConcept.coding.display = "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-34
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#83221-2
// * code.text = "Lower body dressing"
// * code.coding.display = "Lower body dressing - functional goal during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA10055-4
// * valueCodeableConcept.text = "Partial/moderate assistance"
// * valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)

// Instance: FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-35
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-07-11T16:32:00-05:00"
// * code = LNC#83219-6
// * code.text = "Putting on/taking off footwear"
// * code.coding.display = "Putting on/taking off footwear - functional goal during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA10055-4
// * valueCodeableConcept.text = "Partial/moderate assistance"
// * valueCodeableConcept.coding.display = "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
// * performer = Reference(Role-OT-JenCadbury)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-DischargeGoal-Mobility-SelfCare-1)

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-4
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83232-9
// * code.text = "Eating"
// * code.coding.display = "Eating - functional ability during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA9983-3
// * valueCodeableConcept.text = "Independent"
// * valueCodeableConcept.coding.display = "Independent - Patient completes the activity by him/herself with no assistance from a helper."
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)

// Instance: FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-8
// InstanceOf: FunctionalStatus
// Description: "An instance of FunctionalStatus"
// * subject = Reference(patientBSJ1)
// * status = #final
// * effectiveDateTime = "2020-08-01T11:00:00-05:00"
// * code = LNC#83230-3
// * code.text = "Oral hygiene"
// * code.coding.display = "Oral hygiene - functional ability during 3 day assessment period [CMS Assessment]"
// * category[1].coding = CAT#survey "Survey"
// * valueCodeableConcept = LNC#LA9983-3
// * valueCodeableConcept.text = "Independent"
// * valueCodeableConcept.coding.display = "Independent - Patient completes the activity by him/herself with no assistance from a helper."
// * performer = Reference(Role-OT-DanielGranger)
// * extension[event-location].valueReference = Reference(Org-Loc-02)
// * derivedFrom = Reference(QResponse-SNF-Discharge-Mobility-SelfCare-1)


---

// File: input/fsh/SelfCare-SDCQuestionnaireResponseInstances.fsh

Alias:  LNC = http://loinc.org

Instance: QResponse-SNF-Admission-Mobility-SelfCare-1
InstanceOf: SDCQR
Description: "An instance of QuestionnaireResponse"
* subject = Reference(patientBSJ1)
* status = #completed
* questionnaire = MDS3.0-NC-1.17
* questionnaire.extension[questionnaireDisplay].valueString = "Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2020-07-11T16:32:00-05:00"
* author = Reference(Role-OT-JenCadbury)
* item[0].linkId = "Section-37"
* item[0].text =  "Functional abilities and goals - admission [CMS Assessment]"
* item[0].item[0].linkId = "Section-37/GG0130_1"
* item[0].item[0].text =  "Self-care - admission performance [CMS Assessment]"
* item[0].item[0].item[0].linkId = "Section-37/GG0130A1"
* item[0].item[0].item[0].text =  "Eating"
* item[0].item[0].item[0].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[1].linkId = "Section-37/GG0130B1"
* item[0].item[0].item[1].text =  "Oral hygiene"
* item[0].item[0].item[1].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[2].linkId = "Section-37/GG0130C1"
* item[0].item[0].item[2].text =  "Toileting hygiene"
* item[0].item[0].item[2].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[3].linkId = "Section-37/GG0130E1"
* item[0].item[0].item[3].text =  "Shower/bathe self"
* item[0].item[0].item[3].answer.valueCoding = LNC#LA26735-3 "Not attempted due to medical condition or safety concerns"
* item[0].item[0].item[4].linkId = "Section-37/GG0130F1"
* item[0].item[0].item[4].text =  "Upper body dressing"
* item[0].item[0].item[4].answer.valueCoding = LNC#LA10055-4 "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
* item[0].item[0].item[5].linkId = "Section-37/GG0130G1"
* item[0].item[0].item[5].text =  "Lower body dressing"
* item[0].item[0].item[5].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
* item[0].item[0].item[6].linkId = "Section-37/GG0130H1"
* item[0].item[0].item[6].text =  "Putting on/taking off footwear"
* item[0].item[0].item[6].answer.valueCoding = LNC#LA11759-0 "Substantial/maximal assistance - Helper does more than half the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."


// Instance: QResponse-SNF-DischargeGoal-Mobility-SelfCare-1
// InstanceOf: SDCQR
// Description: "An instance of QuestionnaireResponse"
// * subject = Reference(patientBSJ1)
// * status = #completed
// * questionnaire = MDS3.0-NC-1.17
// * authored = "2020-07-11T16:32:00-05:00"

// * item[0].linkId = "Section-37"
// * item[0].text =  "Functional abilities and goals - admission [CMS Assessment]"
// //* item[0].id = "88482-5"
// * item[0].item[0].linkId = "Section-37/GG0130_2"
// * item[0].item[0].text =  "Self-care - discharge goal [CMS Assessment]"
// //* item[0].item[0].id = "85054-5"
// * item[0].item[0].item[0].linkId = "Section-37/GG0130A2"
// * item[0].item[0].item[0].text =  "Eating - functional goal during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[0].id = "83231-1"
// * item[0].item[0].item[0].answer.valueReference = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-29)
// * item[0].item[0].item[1].linkId = "Section-37/GG0130B2"
// * item[0].item[0].item[1].text =  "Oral hygiene - functional goal during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[1].id = "83229-5"
// * item[0].item[0].item[1].answer.valueReference = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-30)
// * item[0].item[0].item[2].linkId = "Section-37/GG0130C2"
// * item[0].item[0].item[2].text =  "Toileting hygiene - functional goal during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[2].id = "83227-9"
// * item[0].item[0].item[2].answer.valueReference = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-31)
// * item[0].item[0].item[3].linkId = "Section-37/GG0130E2"
// * item[0].item[0].item[3].text =  "Shower/bathe self - functional goal during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[3].id = "83225-3"
// * item[0].item[0].item[3].answer.valueReference = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-32)
// * item[0].item[0].item[4].linkId = "Section-37/GG0130F2"
// * item[0].item[0].item[4].text =  "Upper body dressing - functional goal during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[4].id = "83223-8"
// * item[0].item[0].item[4].answer.valueReference = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-33)
// * item[0].item[0].item[5].linkId = "Section-37/GG0130G2"
// * item[0].item[0].item[5].text =  "Lower body dressing - functional goal during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[5].id = "83221-2"
// * item[0].item[0].item[5].answer.valueReference = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-34)
// * item[0].item[0].item[6].linkId = "Section-37/GG0130H2"
// * item[0].item[0].item[6].text =  "Putting on/taking off footwear - functional goal during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[6].id = "83219-6"
// * item[0].item[0].item[6].answer.valueReference = Reference(FSC-SNF-DischargeGoal-Mobility-SelfCare-1-Ob-Question-35)

// Instance: QResponse-SNF-Discharge-Mobility-SelfCare-1
// InstanceOf: SDCQR
// Description: "An instance of QuestionnaireResponse"
// * subject = Reference(patientBSJ1)
// * status = #completed
// * questionnaire = MDS3.0-NC-1.17
// * authored = "2020-08-01T11:00:00-05:00"

// * item[0].linkId = "Section-37"
// * item[0].text =  "Functional abilities and goals - discharge [CMS Assessment]"
// //* item[0].id = "88483-3"
// * item[0].item[0].linkId = "Section-37/GG0130_3"
// * item[0].item[0].text =  "Self-care - discharge performance [CMS Assessment]"
// //* item[0].item[0].id = "83254-3"
// * item[0].item[0].item[0].linkId = "Section-37/GG0130A3"
// * item[0].item[0].item[0].text =  "Eating - functional ability during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[0].id = "83232-9"
// * item[0].item[0].item[0].answer.valueReference = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-4)
// * item[0].item[0].item[1].linkId = "Section-37/GG0130B3"
// * item[0].item[0].item[1].text =  "Oral hygiene - functional ability during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[1].id = "83230-3"
// * item[0].item[0].item[1].answer.valueReference = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-8)
// * item[0].item[0].item[2].linkId = "Section-37/GG0130C3"
// * item[0].item[0].item[2].text =  "Toileting hygiene - functional ability during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[2].id = "83228-7"
// * item[0].item[0].item[2].answer.valueReference = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-12)
// * item[0].item[0].item[3].linkId = "Section-37/GG0130E3"
// * item[0].item[0].item[3].text =  "Shower/bathe self - functional ability during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[3].id = "83226-1"
// * item[0].item[0].item[3].answer.valueReference = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-16)
// * item[0].item[0].item[4].linkId = "Section-37/GG0130F3"
// * item[0].item[0].item[4].text =  "Upper body dressing - functional ability during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[4].id = "83224-6"
// * item[0].item[0].item[4].answer.valueReference = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-20)
// * item[0].item[0].item[5].linkId = "Section-37/GG0130G3"
// * item[0].item[0].item[5].text =  "Lower body dressing - functional ability during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[5].id = "83222-0"
// * item[0].item[0].item[5].answer.valueReference = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-24)
// * item[0].item[0].item[6].linkId = "Section-37/GG0130H3"
// * item[0].item[0].item[6].text =  "Putting on/taking off footwear - functional ability during 3 day assessment period [CMS Assessment]"
// //* item[0].item[0].item[6].id = "83220-4"
// * item[0].item[0].item[6].answer.valueReference = Reference(FSC-SNF-Discharge-Mobility-SelfCare-1-Ob-Question-28)


---

// File: input/fsh/UseOfDeviceInstances.fsh


Instance: FSC-Hospital-Admission-Mobility-1-UseOfDevice-6
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(FSC-Hospital-Admission-Mobility-1)
* recordedOn = 2020-07-08T16:00:00-05:00
* source = Reference(Practitioner-SallySmith)
* device = Reference(CMS-Device-1)
* status = #active

Instance: FSC-Hospital-Admission-Mobility-1-UseOfDevice-7
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(FSC-Hospital-Admission-Mobility-1)
* recordedOn = 2020-07-08T16:00:00-05:00
* source = Reference(Practitioner-SallySmith)
* device = Reference(CMS-Device-2)
* status = #active

Instance: FSC-Hospital-Discharge-Mobility-1-UseOfDevice-3
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(FSC-Hospital-Discharge-Mobility-1)
* recordedOn = 2020-07-10T14:34:00-05:00
* source = Reference(Practitioner-RonMarble)
* device = Reference(CMS-Device-2)
* status = #active

Instance: FSC-Hospital-Discharge-Mobility-1-UseOfDevice-4
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(FSC-Hospital-Discharge-Mobility-1)
* recordedOn = 2020-07-10T14:34:00-05:00
* source = Reference(Practitioner-RonMarble)
* device = Reference(CMS-Device-5)
* status = #active

Instance: FSC-Hospital-Discharge-Mobility-1-UseOfDevice-5
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(FSC-Hospital-Discharge-Mobility-1)
* recordedOn = 2020-07-10T14:34:00-05:00
* source = Reference(Practitioner-RonMarble)
* device = Reference(CMS-Device-4)
* status = #active

Instance: FSC-Hospital-Discharge-Mobility-1-UseOfDevice-1
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(FSC-Hospital-Discharge-Mobility-1)
* recordedOn = 2020-07-10T14:34:00-05:00
* source = Reference(Practitioner-RonMarble)
* device = Reference(CMS-Device-1)
* status = #active

Instance: FSC-Hospital-Discharge-Mobility-1-UseOfDevice-2
InstanceOf: UseOfDevice
Description: "An instance of UseOfDevice"
* subject  = Reference(patientBSJ1)
* derivedFrom = Reference(FSC-Hospital-Discharge-Mobility-1)
* recordedOn = 2020-07-10T14:34:00-05:00
* source = Reference(Practitioner-RonMarble)
* device = Reference(CMS-Device-3)
* status = #active


---

