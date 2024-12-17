File: repos/HL7_SLASH_fhir-ichom-breast-cancer-ig/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                    │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.uv.ichom-breast-cancer
canonical: http://hl7.org/fhir/uv/ichom-breast-cancer
name: Breast Cancer - ICHOM
title: "ICHOM Patient Centered Outcomes Measure Set for Breast Cancer"
status: draft
version: 1.0.0
fhirVersion: 4.0.1
copyrightYear: 2021+
releaseLabel: trial-use # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"
publisher:
  name: HL7 International - Clinical Interoperability Council Group
  url: http://www.hl7.org/Special/committees/cic

extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
    valueInteger: 2

dependencies:
  hl7.fhir.uv.sdc: 3.0.0
  hl7.fhir.uv.extensions: 1.0.0

pages:
  index.md:
    title: Introduction
  fhir-basics.md:
    title: FHIR basics
  use-cases.md:
    title: Use Cases
  standard-set.md:
    title: ICHOM Set
  security.md:
    title: Security
  downloads.md:
    title: Downloads

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  FHIR basics: fhir-basics.html
  Use Cases: use-cases.html
  ICHOM Set: standard-set.html
  Security: security.html
  Examples: artifacts.html#example-example-instances
  Artifacts: artifacts.html
  Downloads: downloads.html

parameters:
  usage-stats-opt-out: true
  show-inherited-invariants: false
  shownav: true
  jira-code: ichom-breastcancer


---

// File: input/pagecontent/downloads.md

### Package File

The following package file includes an NPM package file used by many of the FHIR tools.  It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc. defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. For more information, see the [validating profiles and resources] documentation in FHIR.

- [Package(compressed folder)](package.tgz){::download="true"}

### Downloadable Copy of Entire Specification

A downloadable version of this IG is available so it can be hosted locally:

- [Downloadable Copy(compressed folder)](full-ig.zip)

### Examples

All the examples that are used in this Implementation Guide available for download:

- [XML(compressed folder)](examples.xml.zip)
- [JSON(compressed folder)](examples.json.zip)

### Consolidated Excel File Representation of Observation Profiles

A table to compare all the observation profiles in this IG is also provided:

- [Excel](observations-summary.xlsx)

## IG/package dependencies

The following dependencies are used in production of this guide:

{% include dependency-table-short.xhtml %}

## Globals table

{% include globals-table.xhtml %}

## Cross version analysis

{% include cross-version-analysis-inline.xhtml %}

{% include markdown-link-references.md %}



---

// File: input/pagecontent/fhir-basics.md

The ICHOM Breast Cancer implementation guide uses terminology, notations and design principles that are specific to the HL7 FHIR standard. It is important to be familiar with the basic principles of FHIR and how to read FHIR specifications. Readers who are unfamiliar with FHIR are therefore encouraged to review the following explanation prior to reading the rest of this implementation guide.

### FHIR overview

Fast healthcare interoperability resources (FHIR) is a Health Level 7 (HL7) platform specification that supports the exchange of healthcare information between healthcare systems and applications. Medical data must be available and understandable when patients move around the healthcare ecosystem. To assure this, FHIR defines a set of capabilities used across the healthcare process, in all jurisdictions, and in lots of different contexts. FHIR is universally applicable, meaning that it can be used in a broad variety of implementation environments, e.g. EHR-based data sharing, mobile phone apps, and cloud communications. Also, FHIR has a strong focus on fast and easy implementation, which lowers the barriers of entry for new developers to work with FHIR.

### Clinical application

FHIR is designed to standardize and enable the exchange of all healthcare-related information. This involves not only clinical data but also healthcare-related administrative and research data. FHIR can be used in both human and veterinary medicine and is worldwide applicable in a wide variety of contexts, including in-patient, acute care, long-term care, ambulatory care, community care, etc. One of the benefits of HL7 FHIR is that it is independent of any EHR vendor or health system. Furthermore, the specification is free for everyone to use and there are many public examples available to assist in development of new applications.

### Resources
The basic building blocks of FHIR are called resources, which are represented in XML or JSON. A resource is considered a collection of information, called data elements, to exchange or store data. For instance, the resource Patient contains demographic and administrative details about the person who is receiving care. There are multiple resources covering different aspects of the healthcare domain, from research and patient management to medical billing and clinical reports. The main goal is that a set of resources should cover most clinical use cases. This can be achieved by combining resources through references. For instance, by linking Patient to Observation (which stores (clinical) findings of a patient), Condition (problem or diagnosis) and Medication (ingredients, amount and strength of medications), you can implement and tailor specific cases.

### Profiling
A profile defines the use of a resource in a specific scenario. The term profiling refers to the act of applying constraints to the so-called core resources. These resources are created by workgroups of specialists to accommodate the most common use cases. Because of the generic nature, the rules in this specification are fairly loose. By applying a set of constraints to a FHIR resource, it can be tailored to a specific scenario. The chances that you will need something that specifically fits your domain when using FHIR are high. As a result, the FHIR specification expects that you will need to apply constraints to the existing resources to create a profile to satisfy your needs. For this reason, you will find national, regional, or even hospital-specific profiles. FHIR consciously chose to cover 80 percent of the data elements that are used in healthcare systems in their resources. The remaining 20 percent are specific use cases and can be dealt with as FHIR extensions. Extensions are additional resources that are useful to cover data not handled by existing core FHIR profiles from HL7.

### Terminology
To improve interoperability, standardized terminology is crucial. By using standardized terminology, healthcare information can be collected, documented and processed in similar data concepts. This allows healthcare providers to share and compare clinical knowledge in a consistent and internationally accepted system. FHIR cannot define every code required in a healthcare system across the world, so instead, they provided two resources to manage codes and their meaning, namely:

* CodeSystem – is a collection of codes that define several codes and their meaning. The concept of a CodeSystem is similar to a catalog, containing all kinds of codes and their definitions. The CodeSystem may be SNOMED-CT or LOINC or even one you created yourself.

* ValueSet - specifies a selection of codes extracted from one or more CodeSystems, intended for use in a particular context. A ValueSet contains the links to the actual codes from a particular CodeSystem. The advantage is that when a CodeSystem gets updated, the ValueSets containing codes from this CodeSystem will be updated automatically.

### Links

For further reading, we recommend to use the following links:

* [FHIR summary](http://hl7.org/fhir/r4/summary.html)
* [Developer’s introduction](http://hl7.org/fhir/r4/overview-dev.html)
* [Data types](http://hl7.org/fhir/r4/datatypes.html)
* [Using codes](http://hl7.org/fhir/r4/terminologies.html)
* [References between resources](http://hl7.org/fhir/r4/references.html)
* [How to read resource & profile definitions](http://hl7.org/fhir/r4/formats.html#table)
* [Base resource definitions](http://hl7.org/fhir/r4/resource.html)


---

// File: input/pagecontent/index.md

### Introduction

The International Consortium for Health Outcomes Measurement ([ICHOM](https://www.ichom.org/)) aims to unlock the potential of value-based healthcare by defining global Patient-Centered Outcome Measure Sets that involve provider observations as well as patient reported outcomes, and that drive adoption, reporting, and benchmarking of these measures worldwide to create better health outcomes for all stakeholders.

So far, measurement sets for 40 health conditions have been defined by bringing together global teams of patient advocates, healthcare professionals and researchers, representing over 50% of the global disease burden, as described at [this page](https://www.ichom.org/patient-centered-outcome-measures).

To facilitate adoption and implementation of these ICHOM Patient-Centered Outcome Measure Sets in healthcare, IT systems require them to be published in an interoperable, open-standards-based machine-readable form. This will facilitate the semantically-interoperability collection of the required measurements along the patient care pathway, as well as the subsequent outcomes reporting based on these measurements. To this end, ICHOM is creating the Breast Cancer patient-centered outcome measure set. The international scope of ICHOM standard sets will enable global usage, adoption, and implementation in clinical practice.

This implementation guide works with the R4 version of the FHIR standard to ensure alignment with the current direction of the FHIR standard.

### Background

There is a growing need for representing the ICHOM Patient-Centered Outcome Measure Sets through HL7 FHIR APIs for the international community. The clinical elements of the ICHOM Patient-centered Outcomes Measures are already created and accepted as per international clinical research, patient represented and peer-reviewed process and are mapped to standard ontologies, such as SNOMED.

The aim of this IG is to develop and publish the HL7 FHIR representation of the already internationally validated and peer-reviewed ICHOM patient-centered outcome measure set for breast cancer. This will provide the support for interoperability in exchange of data related to the measurement of value-based healthcare as defined by our international community of experts who were gathered to create the set.

### Prerequisites

Users of this guide must be familiar with the ICHOM Breast Cancer Set and the accompanying Data Dictionary that lists all the variables needed for data collection by implementers, [available here](https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer/). Users should also be familiar with [FHIR resources](http://hl7.org/fhir/R4/resourcelist.html) to understand how the ICHOM Breast Cancer variables are represented in the Implementation Guide - see below for basics.

### Alignment with HL7 specifications

Artifacts in this Implementation Guide are in alignment with:

- [Breast Radiology Reporting, 0.2.0](http://hl7.org/fhir/us/breast-radiology/2019Sep/)
- [minimal Common Oncology Data Elements (mCODE), STU2](http://hl7.org/fhir/us/mcode/STU2/)
  - Alignment on the TNM staging profiles
- [QI-Core, 5.0.0-ballot](http://hl7.org/fhir/us/qicore/2022Sep/)
- [US Core, 5.0.1 - STU5](http://hl7.org/fhir/us/core/STU5.0.1/)
  - Alignment on demographic information
- [International Patient Summary, 1.0.0 - STU 1](http://hl7.org/fhir/uv/ips/)
  - Alignment on the patient and procedure profiles
- [International Patient Access, 0.1.0 - STU 1 ballot](http://hl7.org/fhir/uv/ipa/2022Jan/)
  - Alignment on the patient, observation and condition profiles

#### IP Statements

{% include ip-statements.xhtml %}

### Authors

This body of work would not have been possible without the following individuals:

- Chris Melo (Philips, Facilitator)
- Greg Robinson (ICHOM, Project lead)
- Marieke Span (Furore, FHIR Modeller)
- Mica Carr (ex-ICHOM, Former project coordinator)
- Umanga DeSilva (ICHOM, Project coordinator)
- Vadim Peretokin (Philips, Technical lead)

The authors recognize HL7 sponsorship and input from Clinical Interoperability Council, with special thanks to Laura Heermann Langford, Russell Leftwich, James McClay, and Kurt Allen.

### Attribution Notice

ICHOM acknowledges that the ICHOM related content of this IG is contributed under the terms of section 09.01.02 of HL7’s Governance and Operations manual (version updated March 27, 2023) and that the content in the IG is used with permission. Additionally, permission is granted that HL7 can use the trademark “ICHOM”(without the TM designation) in the title of this specification, and throughout thenarrative content, profile names, etc. The following text may be included as a footnote in the IG, _“ICHOM is a registered United States trademark of International Consortium for Health Outcomes Measurement, Inc. Used with Permission.”_


---

// File: input/pagecontent/security.md

ICHOM created Patient-Centered Outcome Measure Sets to compare performance globally, allow clinicians to learn from each other, and rapidly improve healthcare for patients. The breast cancer set includes both clinical and patient-reported outcomes. 

This is a domain of knowledge IG, focused only on representing ICHOM Breast Cancer Set elements in FHIR and not supporting any specific usecases. As a result, extensive security measures are out of scope, and the responsibility for safe storage and transmission of patient data as applicable to a given usecase falls upon the implementers.


---

// File: input/pagecontent/standard-set.md

This domain of knowledge IG focuses on representing the same variables in the measure set in two ways - 1) as [FHIR Questionnaires](artifacts.html#structures-questionnaires) for patient-reported and clinical-reported outcomes, and 2) as [discrete FHIR resources](artifacts.html#structures-resource-profiles) for clinical-reported outcomes. Implementers are free to choose whether they want to implement the questionnaires, profiles, or both.

### Questionnaires
[Questionnaires](artifacts.html#structures-questionnaires) in this IG are organized differently than the ICHOM reference guide and data dictionary, and this is due to their different focuses or intended uses. The reference guide and data dictionary are meant to describe all of the data elements included in the set, so they are organized by data or variable type (e.g. Demographics, Baseline Clinical Factors). In contrast, this IG is meant to facilitate collection of the data elements. Therefore, it is organized by when in the patient's care pathway the data is to be collected (e.g. Baseline, 1 year follow-up) and the source of the data (clinical or patient reported). Despite this difference in organization, the data elements with the FHIR IG and ICHOM's reference guide and data dictionary are completely aligned.

<object data="Questionnaires-layout.svg" type="image/svg+xml"></object>
<br/>

### Profiles
[Profiles](artifacts.html#structures-resource-profiles) follow the ICHOM reference guide and data dictionary organisation, as laid out in the table below. Each variable is mapped to a single FHIR resource, or several variables are mapped to the same FHIR resource. The mappings themselves are communicated using [a FHIR profile](https://www.hl7.org/fhir/profiling.html). 

<object data="ArchitectureOfProfiles-ICHOM.svg" type="image/svg+xml"></object>
<br/>

The table below lays out the measure set variable to FHIR profile mappings. A backwards FHIR to ICHOM mapping is available within each profile's `Mappings` tab.

| Variable ID                      | ITEM                                     | FHIR profile                                                     |
|:---------------------------------|:-----------------------------------------|:-----------------------------------------------------------------|
| **Demographic factors**          |                                          |                                                                  |
| Sex                              | Sex                                      | [BreastCancerPatient]                                            |
| YearOfBirth                      | Year of Birth                            | [BreastCancerPatient]                                            |
| COUNTRY                          | Country                                  | [BreastCancerPatient]                                            |
| Ethnicity                        | Ethnicity                                | [BreastCancerPatient]                                            |
| Race                             | Race                                     | [BreastCancerPatient]                                            |
| EducationLevel                   | Level of education                       | [BreastCancerPatient]                                            |
| RelationshipStatus               | Relationship status                      | [BreastCancerPatient]                                            |
| MENOPAUSE                        | Menopause status                         | [MenopausalStatus]                                               |
| **Baseline clinical factors**    |                                          |                                                                  |
| HeightValue                      | Body height                              | [BodyHeight]                                                     |
| HeightUnit                       | Body height units                        | [BodyHeight]                                                     |
| WeightValue                      | Body weight                              | [BodyWeight]                                                     |
| WeightUnit                       | Body weight units                        | [BodyWeight]                                                     |
| LATERAL                          | Laterality                               | [PrimaryBreastCancerCondition]                                   |
| FIRSTBC                          | First breast cancer                      | [PrimaryBreastCancerCondition]                                   |
| SECONDBC                         | Second breast cancer                     | [SecondaryBreastCancerCondition]                                 |
| **Baseline tumor factors**       |                                          |                                                                  |
| HistologicalDiagnosisDate        | Date of histological diagnosis           | [Histotype]                                                      |
| HISTOTYPE                        | Histological type                        | [Histotype]                                                      |
| MUTBC                            | Genetic mutation                         | [GermlineMutation]                                               |
| GRADEINV                         | Invasion grade                           | [InvasionGrade]                                                  |
| GRADEDCIS                        | Tumor grade                              | [TumorGrade]                                                     |
| TNMCT\_BREAST                    | Clinical tumor stage                     | [TNMPrimaryTumorStage] and [TNMStageGroup]                       |
| TNMCN\_BREAST                    | Clinical nodal stage                     | [TNMRegionalNodalStage] and [TNMStageGroup]                      |
| TNMCM\_BREAST                    | Clinical distant metastatsis             | [TNMDistantMetastases] and [TNMStageGroup]                       |
| TNMPT\_BREAST                    | Pathological tumor stage                 | [TNMPrimaryTumorStage] and [TNMStageGroup]                       |
| TNMPN\_BREAST                    | Pathological nodal stage                 | [TNMRegionalNodalStage] and [TNMStageGroup]                      |
| TNMPM\_BREAST                    | Pathological distant metastasis          | [TNMDistantMetastases] and [TNMStageGroup]                       |
| SIZEINV                          | Size of invasive tumor                   | [TumorSize]                                                      |
| NumLymphNodesResect              | Number lymph nodes resected              | [LymphNodesResected]                                             |
| LYMPHINV\_BREAST                 | Lymph nodes involved                     | [LymphNodesInvolved]                                             |
| ERSTATUS                         | Estrogen receptor status                 | [ERStatus]                                                       |
| PRSTATUS                         | Progesterone receptor status             | [PRStatus]                                                       |
| HER2STATUS                       | HER2 receptor status                     | [HERStatus]                                                      |
| MolecularProfiling               | Molecular profiling                      | See [MammaprintScore], [OncotypeScore], and [EndopredictonScore] |
| Mammaprint                       | Mammaprint score                         | [MammaprintScore]                                                |
| Oncotype                         | Oncotype Score                           | [OncotypeScore]                                                  |
| Endopredict                      | Endopredict Score                        | [EndopredictonScore]                                             |
| MultMeet                         | Multidisciplinary meeting                | [TreatmentPlan]                                                  |
| MultRecTreatments                | Multidisciplinary Recommended Treatments | [TreatmentPlan]                                                  |
| **Treatment variables**          |                                          |                                                                  |
| TREATMENT\_BREAST                | Treatment                                | All the procedures                                               |
| SURGERY\_BREAST                  | Surgery                                  | [BreastCancerSurgery]                                            |
| SurgeryDate                      | Surgery date                             | [BreastCancerSurgery]                                            |
| SURGERYAX                        | Surgery axilla                           | [AxillaSurgery]                                                  |
| SURGERYAXDATE                    | Surgery axilla date                      | [AxillaSurgery]                                                  |
| SURGERYAX2                       | Axillary clearance                       | [AxillaryClearance]                                              |
| SURGERYAX2DATE                   | Axillary clearance date                  | [AxillaryClearance]                                              |
| RECONSTRUCTION\_DELAY            | Reconstruction                           | [ReconstructionSurgery]                                          |
| SURGERY\_RECONSTRUCTION          | Reconstruction type                      | [ReconstructionSurgery]                                          |
| ImplantReconstruction            | Implant reconstruction                   | [ReconstructionSurgery]                                          |
| RECONSTRUCTDATE                  | Reconstruction date                      | [ReconstructionSurgery]                                          |
| RADIOTX\_BREAST                  | Radiotherapy                             | [Radiotherapy]                                                   |
| RADIOTXTYPE\_BREAST              | Radiotherapy type                        | [Radiotherapy]                                                   |
| RadioTxStartDate                 | Radiotherapy start date                  | [Radiotherapy]                                                   |
| RadioTxStopDate                  | Radiotherapy stop date                   | [Radiotherapy]                                                   |
| CHEMOTXINTENT                    | Chemotherapy                             | [Chemotherapy]                                                   |
| CHEMOTXTYPE\_BREAST              | Type of chemotherapy                     | [Chemotherapy]                                                   |
| ChemoTxStartDate                 | Chemotherapy start date                  | [Chemotherapy]                                                   |
| ChemoTxStopdate                  | Chemotherapy stop date                   | [Chemotherapy]                                                   |
| HORMONTX\_BREAST                 | Hormonal therapy                         | [Hormonaltherapy]                                                |
| HORMONTXTYPE                     | Hormonal therapy type                    | [Hormonaltherapy]                                                |
| HORMONTXSTARTDATE                | Start of hormonal therapy                | [Hormonaltherapy]                                                |
| HORMONTXSTOPDATE                 | Stop of hormonal therapy                 | [Hormonaltherapy]                                                |
| TARGETTX\_BREAST                 | Targeted therapy                         | [TargetedTherapy]                                                |
| TargetTxStartDate                | Targeted therapy start date              | [TargetedTherapy]                                                |
| TargetTxStopDate                 | Targeted therapy stop date               | [TargetedTherapy]                                                |
| SURGERYPATIENT                   | Surgery                                  | [ReoperationSurgery]                                             |
| SURGERYDATEPATIENT               | Surgery date                             | [ReoperationSurgery]                                             |
| TreatmentPlanFollowed            | Real treatment plan followed             | [TreatmentPlanFollowed]                                          |
| TreatmentPlanNotFollowed         | Treatment plan not followed              | [TreatmentPlanNotFollowed]                                       |
| **Disutility of care**           |                                          |                                                                  |
| REOP\_BREAST                     | Involved margins reoperation             | [ReoperationSurgery]                                             |
| REOP\_RECONSTRUCTION             | Reconstruction reoperation               | [ReconstructionSurgery]                                          |
| REOPDATE\_BREAST                 | Positive margins reoperation date        | [ReoperationSurgery]                                             |
| ComplicationImpact0              | Impact of complication                   | [Complication]                                                   |
| ComplicationAttrTreatment        | Complication attributed to treatment     | [Complication]                                                   |
| COMPL\_BREAST                    | Complication type                        | [Complication]                                                   |
| **Survival and Disease control** |                                          |                                                                  |
| MalignancyRecur                  | Recurrence                               | [PrimaryBreastCancerCondition]                                   |
| RecurMethod                      | Recurrence method                        | [RecurrenceMethod]                                               |
| RecurDateCancer                  | Date of cancer recurrence                | [PrimaryBreastCancerCondition]                                   |
| VitalStatus                      | Vital status                             | [BreastCancerPatient]                                            |
| DeceasedDate                     | Date of death                            | [BreastCancerPatient]                                            |
| DEATHBC                          | Death attributable to breast cancer      | [DeathAttributableBC]                                            |
{: .grid }

### Must Support
[Must Support] in this implementation guide is used to indicate that a particular element is mapped a measure set variable, and must be populated with data should it be available in the system.

In case an element cannot be populated because it is not available in the source system, if the cardinality rules allow it, the element can be left unfilled. In case the cardinality rules require an element to be populated, the [Data Absent Reason] extension SHALL be used.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/use-cases.md

### Business needs
This is a domain of knowledge IG: it focuses on representing the set's data elements in FHIR only and it does not aim to solve specific use cases. Concrete interaction patterns for information exchange are out of scope for this document.

That said, to give you an idea where this set is applicable, here are a few example business needs to get you started:

1. Tracking and comparing outcomes that matter most to different cohorts of patients to guide quality improvement initiatives within a provider organization, e.g using health analytic tools

2. Tracking individual patient outcomes against an average reference value to inform treatment decisions and facilitate shared decision making

3. Creating interactive dashboards that allow healthcare organizations to compare their risk adjusted outcomes to the ICHOM global average with the goal of establishing learning collaboratives and setting a standard of excellence in patient outcomes. This could, for example, faciliate sharing treatment outcomes with other provider organizations for the purpose of research or participation in a learning collaborative

### Actors
* Health informaticist or IT professionals working within a healthcare provider organization.
* Clinical research informatics expert.

### Definitions
* PROM (Patient reported outcome measure: A scientifically validated questionnaire that assesses specific aspects of a patient’s experience of their health. Responses to each question receive a score and the scores are tallied based on a published algorithm. Typically both responses to individual questions and summary scores are saved but analytics are only performed on summary scores. (Examples: PHQ-9, PROMIS Global).
* Third-party vendor: Typically a technology or analytics company offering a platform to solve a discrete data or analytic need (such as collecting PROMs data from patients).
* Learning collaborative: A quality improvement activity in which provider organizations agree to privately share their de-identified patient outcome data for the purpose of facilitating conversations and learning best care practices from each other (example: [https://msqc.org](https://msqc.org)).



---

// File: input/includes/markdown-link-references.md

[AnnualClinicalResponse]: Questionnaire-ClinicalResponseAnnualUpdate.html
[AxillaryClearance]: StructureDefinition-axillary-clearance.html
[AxillaSurgery]: StructureDefinition-axilla-surgery.html
[AxillaSurgeryVS]: ValueSet-AxillaSurgeryVS.html
[BestSupportiveCare]: StructureDefinition-best-supportive-care.html
[BodyHeight]: StructureDefinition-ichom-body-height.html
[BodyWeight]: StructureDefinition-ichom-body-weight.html
[BodyWeightVS]: ValueSet-BodyWeightVS.html
[BreastCancerPatient]: StructureDefinition-patient.html
[BreastCancerStageGroup]: StructureDefinition-breast-cancer-stage-group.html
[BreastCancerSurgery]: StructureDefinition-breast-cancer-surgery.html
[SatisfactionResponseCodeSystem]: CodeSystem-SatisfactionResponseCodeSystem.html
[SatisfactionResponseVS]: ValueSet-SatisfactionResponseVS.html
[BreastSurgeryTypesCodeSystem]: CodeSystem-BreastSurgeryTypesCodeSystem.html
[BreastSurgeryTypeVS]: ValueSet-BreastSurgeryTypeVS.html
[Chemotherapy]: StructureDefinition-chemotherapy.html
[ChemoTherapyTypeVS]: ValueSet-ChemoTherapyType.html
[ClinicalResponseBaseline]: Questionnaire-ClinicalResponseBaseline.html
[ClinicalResponseSixMonths]: Questionnaire-ClinicalResponseSixMonths.html
[Complication]: StructureDefinition-complication.html
[ComplicationImpactCodeSystem]: CodeSystem-ComplicationImpactCodeSystem.html
[ComplicationImpactVS]: ValueSet-ComplicationImpactVS.html
[ComplicationTypeCodeSystem]: CodeSystem-ComplicationTypeCodeSystem.html
[ComplicationTypeVS]: ValueSet-ComplicationTypeVS.html
[DeathAttributableBC]: StructureDefinition-death-attr-bc.html
[EducationLevel]: StructureDefinition-EducationLevel.html
[EducationLevelVS]: ValueSet-EducationLevelVS.html
[EndopredictonScore]: StructureDefinition-endopredicton-score.html
[AgreementResponseCodeSystem]: CodeSystem-AgreementResponseCodeSystem.html
[AgreementResponseVS]: ValueSet-AgreementResponseVS.html
[ERStatus]: StructureDefinition-er-status.html
[EstrogenStatusVS]: ValueSet-EstrogenStatusVS.html
[Ethnicity]: StructureDefinition-Ethnicity.html
[GermlineMutation]: StructureDefinition-germline-mutation.html
[GermlineMutationVS]: ValueSet-GermlineMutationVS.html
[GradingVS]: ValueSet-GradingVS.html
[HER2ReceptorStatusVS]: ValueSet-HER2ReceptorStatusVS.html
[HERStatus]: StructureDefinition-her-status.html
[HistologicalTypeVS]: ValueSet-HistologicalTypeVS.html
[Histotype]: StructureDefinition-histo-type.html
[Hormonaltherapy]: StructureDefinition-hormonal-therpay.html
[HormonalTherapyTypeVS]: ValueSet-HormonalTherapyTypeVS.html
[Immunotherapy]: StructureDefinition-immunotherapy.html
[ImplantLocationCodeSystem]: CodeSystem-ImplantLocationCodeSystem.html
[ImplantLocationVS]: ValueSet-ImplantLocationVS.html
[InvasionGrade]: StructureDefinition-invasion-grade.html
[LateralityNewCancerVS]: ValueSet-LateralityNewCancerVS.html
[LateralityVS]: ValueSet-LateralityVS.html
[LocationRadiotherapyVS]: ValueSet-LocationRadiotherapyVS.html
[LymphNodesInvolved]: StructureDefinition-lymph-nodes-involved.html
[LymphNodesResected]: StructureDefinition-lymph-nodes-resected.html
[MammaprintScore]: StructureDefinition-mammaprint-score.html
[MenopausalStatus]: StructureDefinition-menopausal-status.html
[MenopausalStatusVS]: ValueSet-MenopausalStatusVS.html
[NoYesUnknownVS]: ValueSet-NoYesUnknownValueSet.html
[OncotypeScore]: StructureDefinition-oncotype-score.html
[PatientReportedBaseline]: Questionnaire-PatientReportedBaseline.html
[PatientReportedFollowUp]: Questionnaire-PatientReportedFollowUp.html
[PatientTreatPrefCodeSystem]: CodeSystem-PatientTreatPrefCodeSystem.html
[PatientTreatPrefVS]: ValueSet-PatientTreatPrefVS.html
[PrimaryBreastCancerCondition]: StructureDefinition-primary-breastcancer.html
[ProgesteroneStatusVS]: ValueSet-ProgesteroneStatusVS.html
[PRStatus]: StructureDefinition-pr-status.html
[Race]: StructureDefinition-Race.html
[Radiotherapy]: StructureDefinition-radiotherapy.html
[RecommendedTreatmentTypeVS]: ValueSet-RecommendedTreatmentTypeVS.html
[ReconstructionSurgery]: StructureDefinition-reconstruction-surgery.html
[ReconstructionTypeCodeSystem]: CodeSystem-ReconstructionTypeCodeSystem.html
[ReconstructionTypeVS]: ValueSet-ReconstructionTypeVS.html
[RecurrenceMethod]: StructureDefinition-recr-method.html
[RecurrenceMethodVS]: ValueSet-RecurrenceMethodVS.html
[RecurrenceMethodCodeSystem]: CodeSystem-RecurrenceMethodCodeSystem.html
[RelationshipStatusVS]: ValueSet-RelationshipStatusVS.html
[ReoperationSurgery]: StructureDefinition-reoperation-surgery.html
[ReoperationTypeVS]: ValueSet-ReoperationTypeVS.html
[SACQPatientComorbidityCodeSystem]: CodeSystem-SACQPatientComorbidityCodeSystem.html
[SACQPatientComorbidityHistory]: ValueSet-SACQPatientComorbidityHistory.html
[SecondaryBreastCancerCondition]: StructureDefinition-secondary-breastcancer.html
[TargetedTherapy]: StructureDefinition-targeted-therapy.html
[TargetedTherapyCodeSystem]: CodeSystem-TargetedTherapyCodeSystem.html
[TargetedTherapyVS]: ValueSet-TargetedTherapyVS.html
[TherapyIntentVS]: ValueSet-TherapyIntentVS.html
[TNMDistantMetastases]: StructureDefinition-tnm-distant-metastases.html
[TNMDistantMetastasesVS]: ValueSet-tnm-distant-metastases-category-vs.html
[TNMPrimaryTumorStage]: StructureDefinition-tnm-primary-tumor-stage.html
[TNMPrimaryTumorVS]: ValueSet-tnm-primary-tumor-category-vs.html
[TNMRegionalNodalStage]: StructureDefinition-tnm-regional-nodes-stage.html
[TNMRegionalNodesVS]: ValueSet-tnm-regional-nodes-category-vs.html
[TNMStageGroup]: StructureDefinition-breast-cancer-stage-group.html
[TNMStageGroupVS]: ValueSet-tnm-stage-group-vs.html
[TreatmentPlan]: StructureDefinition-treatment-plan.html
[TreatmentPlanComplianceCodeSystem]: CodeSystem-TreatmentPlanComplianceCodeSystem.html
[TreatmentPlanComplianceVS]: ValueSet-TreatmentPlanComplianceVS.html
[TreatmentPlanFollowed]: StructureDefinition-treatment-plan-followed.html
[TreatmentPlanFollowedCodeSystem]: CodeSystem-TreatmentPlanFollowedCodeSystem.html
[TreatmentPlanFollowedVS]: ValueSet-TreatmentPlanFollowedVS.html
[TreatmentPlanNotFollowed]: StructureDefinition-treatment-plan-not-followed.html
[TreatmentPlanNotFollowedCodeSystem]: CodeSystem-TreatmentPlanNotFollowedCodeSystem.html
[TreatmentPlanNotFollowedVS]: ValueSet-TreatmentPlanNotFollowedVS.html
[TreatmentTypesCodeSystem]: CodeSystem-TreatmentTypesCodeSystem.html
[TreatmentTypeValueSet]: ValueSet-TreatmentTypeValueSet.html
[TumorGrade]: StructureDefinition-tumor-grade.html
[TumorSize]: StructureDefinition-sizeinvasivetumor.html
[validating profiles and resources]: {{site.data.fhir.path}}validation.html
[Must Support]: {{site.data.fhir.path}}profiling.html#mustsupport
[Data Absent Reason]: {{site.data.fhir.path}}extension-data-absent-reason.html


---

// File: input/fsh/debug-bundles.fsh

// // Clinical Response at baseline
// Instance: DebugBundleClinical-01-Baseline
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle the clinical response at baseline"
// Description: "Bundle of all valuesystems and questionnaires related to the clinical response at baseline"
// * type = #transaction

// * entry[+]
//   * request.url = "ValueSet/LateralityVS"
//   * request.method = #PUT
//   * resource = LateralityVS

// * entry[+]
//   * request.url = "ValueSet/NoYesUnknownVS"
//   * request.method = #PUT
//   * resource = NoYesUnknownVS

// * entry[+]
//   * request.url = "ValueSet/LateralityNewCancerVS"
//   * request.method = #PUT
//   * resource = LateralityNewCancerVS

// * entry[+]
//   * request.url = "ValueSet/HistologicalTypeVS"
//   * request.method = #PUT
//   * resource = HistologicalTypeVS

// * entry[+]
//   * request.url = "ValueSet/GermlineMutationVS"
//   * request.method = #PUT
//   * resource = GermlineMutationVS

// * entry[+]
//   * request.url = "ValueSet/GradingVS"
//   * request.method = #PUT
//   * resource = GradingVS

// * entry[+]
//   * request.url = "ValueSet/TNMPrimaryTumorVS"
//   * request.method = #PUT
//   * resource = TNMPrimaryTumorVS

// * entry[+]
//   * request.url = "ValueSet/TNMRegionalNodesVS"
//   * request.method = #PUT
//   * resource = TNMRegionalNodesVS

// * entry[+]
//   * request.url = "ValueSet/TNMDistantMetastasesVS"
//   * request.method = #PUT
//   * resource = TNMDistantMetastasesVS

// * entry[+]
//   * request.url = "ValueSet/EstrogenStatusVS"
//   * request.method = #PUT
//   * resource = EstrogenStatusVS

// * entry[+]
//   * request.url = "ValueSet/ProgesteroneStatusVS"
//   * request.method = #PUT
//   * resource = ProgesteroneStatusVS

// * entry[+]
//   * request.url = "ValueSet/HER2ReceptorStatusVS"
//   * request.method = #PUT
//   * resource = HER2ReceptorStatusVS

// * entry[+]
//   * request.url = "CodeSystem/MolecularProfilingCodeSystem"
//   * request.method = #PUT
//   * resource = MolecularProfilingCodeSystem

// * entry[+]
//   * request.url = "ValueSet/MolecularProfilingStatusVS"
//   * request.method = #PUT
//   * resource = MolecularProfilingStatusVS

// * entry[+]
//   * request.url = "ValueSet/RecommendedTreatmentTypeVS"
//   * request.method = #PUT
//   * resource = RecommendedTreatmentTypeVS

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseBaseline"
//   * request.method = #PUT
//   * resource = ClinicalResponseBaseline

// // Clinical Response at 6 months follow-up
// Instance: DebugBundleClinical-02-SixMonths
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle of the clinical response at 6 months follow-up"
// Description: "Bundle of all valuesystems and questionnaires related to the clinical response at 6 months follow-up"
// * type = #transaction

// * entry[+]
//   * request.url = "ValueSet/TNMPrimaryTumorVS"
//   * request.method = #PUT
//   * resource = TNMPrimaryTumorVS
// * entry[+]
//   * request.url = "ValueSet/TNMRegionalNodesVS"
//   * request.method = #PUT
//   * resource = TNMRegionalNodesVS
// * entry[+]
//   * request.url = "ValueSet/TNMDistantMetastasesVS"
//   * request.method = #PUT
//   * resource = TNMDistantMetastasesVS

// * entry[+]
//   * request.url = "CodeSystem/TreatmentTypesCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentTypesCodeSystem

// * entry[+]
//   * request.url = "ValueSet/TreatmentTypeVS"
//   * request.method = #PUT
//   * resource = TreatmentTypeVS

// * entry[+]
//   * request.url = "CodeSystem/BreastSurgeryTypesCodeSystem"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypesCodeSystem

// * entry[+]
//   * request.url = "ValueSet/BreastSurgeryTypeVS"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypeVS

// * entry[+]
//   * request.url = "ValueSet/AxillaSurgeryVS"
//   * request.method = #PUT
//   * resource = AxillaSurgeryVS

// * entry[+]
//   * request.url = "ValueSet/NoYesUnknownVS"
//   * request.method = #PUT
//   * resource = NoYesUnknownVS

// * entry[+]
//   * request.url = "CodeSystem/ReconstructionTypeCodeSystem"
//   * request.method = #PUT
//   * resource = ReconstructionTypeCodeSystem

// * entry[+]
//   * request.url = "ValueSet/ReconstructionTypeVS"
//   * request.method = #PUT
//   * resource = ReconstructionTypeVS

// * entry[+]
//   * request.url = "CodeSystem/ImplantLocationCodeSystem"
//   * request.method = #PUT
//   * resource = ImplantLocationCodeSystem

// * entry[+]
//   * request.url = "ValueSet/ImplantLocationVS"
//   * request.method = #PUT
//   * resource = ImplantLocationVS

// * entry[+]
//   * request.url = "ValueSet/TherapyIntentVS"
//   * request.method = #PUT
//   * resource = TherapyIntentVS

// * entry[+]
//   * request.url = "ValueSet/LocationRadiotherapyVS"
//   * request.method = #PUT
//   * resource = LocationRadiotherapyVS

// * entry[+]
//   * request.url = "ValueSet/ChemoTherapyTypeVS"
//   * request.method = #PUT
//   * resource = ChemoTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/HormonalTherapyTypeVS"
//   * request.method = #PUT
//   * resource = HormonalTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/TargetedTherapyVS"
//   * request.method = #PUT
//   * resource = TargetedTherapyVS
  
// * entry[+]
//   * request.url = "ValueSet/ReoperationTypeVS"
//   * request.method = #PUT
//   * resource = ReoperationTypeVS

// * entry[+]
//   * request.url = "ValueSet/InvolvedMarginsReoperationTypeVS"
//   * request.method = #PUT
//   * resource = InvolvedMarginsReoperationTypeVS

// * entry[+]
//   * request.url = "CodeSystem/ComplicationImpactCodeSystem"
//   * request.method = #PUT
//   * resource = ComplicationImpactCodeSystem

// * entry[+]
//   * request.url = "ValueSet/ComplicationImpactVS"
//   * request.method = #PUT
//   * resource = ComplicationImpactVS

// * entry[+]
//   * request.url = "CodeSystem/ComplicationTypeCodeSystem"
//   * request.method = #PUT
//   * resource = ComplicationTypeCodeSystem

// * entry[+]
//   * request.url = "ValueSet/ComplicationTypeVS"
//   * request.method = #PUT
//   * resource = ComplicationTypeVS

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseSixMonths"
//   * request.method = #PUT
//   * resource = ClinicalResponseSixMonths

// // Clinical Response at annual follow-up
// Instance: DebugBundleClinical-03-Annual
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle of the clinical response at annual follow-up"
// Description: "Bundle of all valuesystems and questionnaires related to the clinical response at annual follow-up"
// * type = #transaction

// * entry[+]
//   * request.url = "ValueSet/GermlineMutationVS"
//   * request.method = #PUT
//   * resource = GermlineMutationVS

// * entry[+]
//   * request.url = "CodeSystem/TreatmentTypesCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentTypesCodeSystem

// * entry[+]
//   * request.url = "ValueSet/TreatmentTypeVS"
//   * request.method = #PUT
//   * resource = TreatmentTypeVS

// * entry[+]
//   * request.url = "CodeSystem/BreastSurgeryTypesCodeSystem"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypesCodeSystem

// * entry[+]
//   * request.url = "ValueSet/BreastSurgeryTypeVS"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypeVS

// * entry[+]
//   * request.url = "ValueSet/AxillaSurgeryVS"
//   * request.method = #PUT
//   * resource = AxillaSurgeryVS

// * entry[+]
//   * request.url = "ValueSet/NoYesUnknownVS"
//   * request.method = #PUT
//   * resource = NoYesUnknownVS

// * entry[+]
//   * request.url = "CodeSystem/ReconstructionTypeCodeSystem"
//   * request.method = #PUT
//   * resource = ReconstructionTypeCodeSystem

// * entry[+]
//   * request.url = "ValueSet/ReconstructionTypeVS"
//   * request.method = #PUT
//   * resource = ReconstructionTypeVS

// * entry[+]
//   * request.url = "CodeSystem/ImplantLocationCodeSystem"
//   * request.method = #PUT
//   * resource = ImplantLocationCodeSystem

// * entry[+]
//   * request.url = "ValueSet/ImplantLocationVS"
//   * request.method = #PUT
//   * resource = ImplantLocationVS

// * entry[+]
//   * request.url = "ValueSet/TherapyIntentVS"
//   * request.method = #PUT
//   * resource = TherapyIntentVS

// * entry[+]
//   * request.url = "ValueSet/LocationRadiotherapyVS"
//   * request.method = #PUT
//   * resource = LocationRadiotherapyVS

// * entry[+]
//   * request.url = "ValueSet/ChemoTherapyTypeVS"
//   * request.method = #PUT
//   * resource = ChemoTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/HormonalTherapyTypeVS"
//   * request.method = #PUT
//   * resource = HormonalTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/TargetedTherapyVS"
//   * request.method = #PUT
//   * resource = TargetedTherapyVS
  
// * entry[+]
//   * request.url = "ValueSet/ReoperationTypeVS"
//   * request.method = #PUT
//   * resource = ReoperationTypeVS

// * entry[+]
//   * request.url = "CodeSystem/RecurrenceCodeSystem"
//   * request.method = #PUT
//   * resource = RecurrenceCodeSystem

// * entry[+]
//   * request.url = "ValueSet/RecurrenceVS"
//   * request.method = #PUT
//   * resource = RecurrenceVS
  
// * entry[+]
//   * request.url = "CodeSystem/RecurrenceMethodCodeSystem"
//   * request.method = #PUT
//   * resource = RecurrenceMethodCodeSystem

// * entry[+]
//   * request.url = "ValueSet/RecurrenceMethodVS"
//   * request.method = #PUT
//   * resource = RecurrenceMethodVS

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseAnnualUpdate"
//   * request.method = #PUT
//   * resource = ClinicalResponseAnnualUpdate

// // BaselinePatientReported
// Instance: DebugBundlePatient-01-Baseline
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle of the patient response at baseline"
// Description: "Bundle of all valuesystems and questionnaires related to the patient response at baseline"
// * type = #transaction

// * entry[+]
//   * request.url = "ValueSet/SACQPatientComorbidityHistory"
//   * request.method = #PUT
//   * resource = SACQPatientComorbidityHistory

// * entry[+]
//   * request.url = "CodeSystem/AgreementResponseCodeSystem"
//   * request.method = #PUT
//   * resource = AgreementResponseCodeSystem

// * entry[+]
//   * request.url = "ValueSet/AgreementResponseVS"
//   * request.method = #PUT
//   * resource = AgreementResponseVS

// * entry[+]
//   * request.url = "CodeSystem/SatisfactionResponseCodeSystem"
//   * request.method = #PUT
//   * resource = SatisfactionResponseCodeSystem

// * entry[+]
//   * request.url = "ValueSet/SatisfactionResponseVS"
//   * request.method = #PUT
//   * resource = SatisfactionResponseVS 

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedBaseline"
//   * request.method = #PUT
//   * resource = PatientReportedBaseline

// // FollowUpPatientReported
// Instance: DebugBundlePatient-02-Follow-Up
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle of the patient response during post-treatment follow-up"
// Description: "Bundle of all valuesystems and questionnaires related to the patient response during post-treatment follow-up"
// * type = #transaction

// * entry[+]
//   * request.url = "CodeSystem/AgreementResponseCodeSystem"
//   * request.method = #PUT
//   * resource = AgreementResponseCodeSystem

// * entry[+]
//   * request.url = "ValueSet/AgreementResponseVS"
//   * request.method = #PUT
//   * resource = AgreementResponseVS

// * entry[+]
//   * request.url = "CodeSystem/SatisfactionResponseCodeSystem"
//   * request.method = #PUT
//   * resource = SatisfactionResponseCodeSystem

// * entry[+]
//   * request.url = "ValueSet/SatisfactionResponseVS"
//   * request.method = #PUT
//   * resource = SatisfactionResponseVS 

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedFollowUp"
//   * request.method = #PUT
//   * resource = PatientReportedFollowUp



---

// File: input/fsh/debug-definitions-bundle.fsh

// // Bundle containing all definitions from the ICHOM's IG

// // created from output/ImplementationGuide-hl7.fhir.uv.ichom-breast-cancer.json using regex:
// // \{\n +"reference": \{\n +"reference": "(\w+)\/(.+)"\n.+\n.+\n.+\n.+\n.+
// // with replacement:
// // * entry[+]
// //   * request.url = "$1/$2"
// //   * request.method = #PUT
// //   * resource = $2

// Instance: DebugBundleDefinitions
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle of all the definitions in the IG"
// Description: "Bundle of all the conformance resources in the IG"
// // batch as some servers have a limit on the number of transactions possible
// * type = #batch

// * entry[+]
//   * request.url = "StructureDefinition/axilla-surgery"
//   * request.method = #PUT
//   * resource = axilla-surgery

// * entry[+]
//   * request.url = "StructureDefinition/axillary-clearance"
//   * request.method = #PUT
//   * resource = axillary-clearance

// * entry[+]
//   * request.url = "StructureDefinition/best-supportive-care"
//   * request.method = #PUT
//   * resource = best-supportive-care

// * entry[+]
//   * request.url = "StructureDefinition/ichom-body-height"
//   * request.method = #PUT
//   * resource = ichom-body-height

// * entry[+]
//   * request.url = "StructureDefinition/ichom-body-weight"
//   * request.method = #PUT
//   * resource = ichom-body-weight

// * entry[+]
//   * request.url = "StructureDefinition/patient"
//   * request.method = #PUT
//   * resource = patient

// * entry[+]
//   * request.url = "StructureDefinition/breast-cancer-stage-group"
//   * request.method = #PUT
//   * resource = breast-cancer-stage-group

// * entry[+]
//   * request.url = "StructureDefinition/breast-cancer-surgery"
//   * request.method = #PUT
//   * resource = breast-cancer-surgery

// * entry[+]
//   * request.url = "StructureDefinition/death-attr-bc"
//   * request.method = #PUT
//   * resource = death-attr-bc

// * entry[+]
//   * request.url = "StructureDefinition/chemotherapy"
//   * request.method = #PUT
//   * resource = chemotherapy

// * entry[+]
//   * request.url = "StructureDefinition/complication"
//   * request.method = #PUT
//   * resource = complication

// * entry[+]
//   * request.url = "StructureDefinition/er-status"
//   * request.method = #PUT
//   * resource = er-status

// * entry[+]
//   * request.url = "StructureDefinition/endopredicton-score"
//   * request.method = #PUT
//   * resource = endopredicton-score

// * entry[+]
//   * request.url = "StructureDefinition/germline-mutation"
//   * request.method = #PUT
//   * resource = germline-mutation

// * entry[+]
//   * request.url = "StructureDefinition/her-status"
//   * request.method = #PUT
//   * resource = her-status

// * entry[+]
//   * request.url = "StructureDefinition/histo-type"
//   * request.method = #PUT
//   * resource = histo-type

// * entry[+]
//   * request.url = "StructureDefinition/hormonal-therpay"
//   * request.method = #PUT
//   * resource = hormonal-therpay

// * entry[+]
//   * request.url = "StructureDefinition/immunotherapy"
//   * request.method = #PUT
//   * resource = immunotherapy

// * entry[+]
//   * request.url = "StructureDefinition/invasion-grade"
//   * request.method = #PUT
//   * resource = invasion-grade

// * entry[+]
//   * request.url = "StructureDefinition/involved-margins-reoperation"
//   * request.method = #PUT
//   * resource = involved-margins-reoperation

// * entry[+]
//   * request.url = "StructureDefinition/lymph-nodes-involved"
//   * request.method = #PUT
//   * resource = lymph-nodes-involved

// * entry[+]
//   * request.url = "StructureDefinition/lymph-nodes-resected"
//   * request.method = #PUT
//   * resource = lymph-nodes-resected

// * entry[+]
//   * request.url = "StructureDefinition/mammaprint-score"
//   * request.method = #PUT
//   * resource = mammaprint-score

// * entry[+]
//   * request.url = "StructureDefinition/menopausal-status"
//   * request.method = #PUT
//   * resource = menopausal-status

// * entry[+]
//   * request.url = "StructureDefinition/oncotype-score"
//   * request.method = #PUT
//   * resource = oncotype-score

// * entry[+]
//   * request.url = "StructureDefinition/pr-status"
//   * request.method = #PUT
//   * resource = pr-status

// * entry[+]
//   * request.url = "StructureDefinition/primary-breastcancer"
//   * request.method = #PUT
//   * resource = primary-breastcancer

// * entry[+]
//   * request.url = "StructureDefinition/radiotherapy"
//   * request.method = #PUT
//   * resource = radiotherapy

// * entry[+]
//   * request.url = "StructureDefinition/reconstruction-surgery"
//   * request.method = #PUT
//   * resource = reconstruction-surgery

// * entry[+]
//   * request.url = "StructureDefinition/recr-method"
//   * request.method = #PUT
//   * resource = recr-method

// * entry[+]
//   * request.url = "StructureDefinition/reoperation-surgery"
//   * request.method = #PUT
//   * resource = reoperation-surgery

// * entry[+]
//   * request.url = "StructureDefinition/secondary-breastcancer"
//   * request.method = #PUT
//   * resource = secondary-breastcancer

// * entry[+]
//   * request.url = "StructureDefinition/tnm-distant-metastases"
//   * request.method = #PUT
//   * resource = tnm-distant-metastases

// * entry[+]
//   * request.url = "StructureDefinition/tnm-primary-tumor-stage"
//   * request.method = #PUT
//   * resource = tnm-primary-tumor-stage

// * entry[+]
//   * request.url = "StructureDefinition/tnm-regional-nodes-stage"
//   * request.method = #PUT
//   * resource = tnm-regional-nodes-stage

// * entry[+]
//   * request.url = "StructureDefinition/targeted-therapy"
//   * request.method = #PUT
//   * resource = targeted-therapy

// * entry[+]
//   * request.url = "StructureDefinition/treatment-plan"
//   * request.method = #PUT
//   * resource = treatment-plan

// * entry[+]
//   * request.url = "StructureDefinition/treatment-plan-followed"
//   * request.method = #PUT
//   * resource = treatment-plan-followed

// * entry[+]
//   * request.url = "StructureDefinition/treatment-plan-not-followed"
//   * request.method = #PUT
//   * resource = treatment-plan-not-followed

// * entry[+]
//   * request.url = "StructureDefinition/tumor-grade"
//   * request.method = #PUT
//   * resource = tumor-grade

// * entry[+]
//   * request.url = "StructureDefinition/sizeinvasivetumor"
//   * request.method = #PUT
//   * resource = sizeinvasivetumor

// * entry[+]
//   * request.url = "StructureDefinition/EducationLevel"
//   * request.method = #PUT
//   * resource = EducationLevel

// * entry[+]
//   * request.url = "StructureDefinition/Ethnicity"
//   * request.method = #PUT
//   * resource = Ethnicity

// * entry[+]
//   * request.url = "StructureDefinition/Race"
//   * request.method = #PUT
//   * resource = Race

// * entry[+]
//   * request.url = "ValueSet/AxillaSurgeryVS"
//   * request.method = #PUT
//   * resource = AxillaSurgeryVS

// * entry[+]
//   * request.url = "ValueSet/BodyWeightVS"
//   * request.method = #PUT
//   * resource = BodyWeightVS

// * entry[+]
//   * request.url = "ValueSet/BreastQValueSet"
//   * request.method = #PUT
//   * resource = BreastQValueSet

// * entry[+]
//   * request.url = "ValueSet/BreastSurgeryTypeVS"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypeVS

// * entry[+]
//   * request.url = "ValueSet/ChemoTherapyTypeVS"
//   * request.method = #PUT
//   * resource = ChemoTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/ComplicationImpactVS"
//   * request.method = #PUT
//   * resource = ComplicationImpactVS

// * entry[+]
//   * request.url = "ValueSet/ComplicationTypeVS"
//   * request.method = #PUT
//   * resource = ComplicationTypeVS

// * entry[+]
//   * request.url = "ValueSet/EORTCQLQValueSet"
//   * request.method = #PUT
//   * resource = EORTCQLQValueSet

// * entry[+]
//   * request.url = "ValueSet/EducationLevelVS"
//   * request.method = #PUT
//   * resource = EducationLevelVS

// * entry[+]
//   * request.url = "ValueSet/EstrogenStatusVS"
//   * request.method = #PUT
//   * resource = EstrogenStatusVS

// * entry[+]
//   * request.url = "ValueSet/FACTESValueSet"
//   * request.method = #PUT
//   * resource = FACTESValueSet

// * entry[+]
//   * request.url = "ValueSet/GermlineMutationVS"
//   * request.method = #PUT
//   * resource = GermlineMutationVS

// * entry[+]
//   * request.url = "ValueSet/GradingVS"
//   * request.method = #PUT
//   * resource = GradingVS

// * entry[+]
//   * request.url = "ValueSet/HER2ReceptorStatusVS"
//   * request.method = #PUT
//   * resource = HER2ReceptorStatusVS

// * entry[+]
//   * request.url = "ValueSet/HistologicalTypeVS"
//   * request.method = #PUT
//   * resource = HistologicalTypeVS

// * entry[+]
//   * request.url = "ValueSet/HormonalTherapyTypeVS"
//   * request.method = #PUT
//   * resource = HormonalTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/ImplantLocationVS"
//   * request.method = #PUT
//   * resource = ImplantLocationVS

// * entry[+]
//   * request.url = "ValueSet/InvolvedMarginsReoperationTypeVS"
//   * request.method = #PUT
//   * resource = InvolvedMarginsReoperationTypeVS

// * entry[+]
//   * request.url = "ValueSet/LateralityNewCancerVS"
//   * request.method = #PUT
//   * resource = LateralityNewCancerVS

// * entry[+]
//   * request.url = "ValueSet/LateralityVS"
//   * request.method = #PUT
//   * resource = LateralityVS

// * entry[+]
//   * request.url = "ValueSet/LocationRadiotherapyVS"
//   * request.method = #PUT
//   * resource = LocationRadiotherapyVS

// * entry[+]
//   * request.url = "ValueSet/MenopausalStatusVS"
//   * request.method = #PUT
//   * resource = MenopausalStatusVS

// * entry[+]
//   * request.url = "ValueSet/NoYesUnknownVS"
//   * request.method = #PUT
//   * resource = NoYesUnknownVS

// * entry[+]
//   * request.url = "ValueSet/PatientTreatPrefVS"
//   * request.method = #PUT
//   * resource = PatientTreatPrefVS

// * entry[+]
//   * request.url = "ValueSet/ProgesteroneStatusVS"
//   * request.method = #PUT
//   * resource = ProgesteroneStatusVS

// * entry[+]
//   * request.url = "ValueSet/RecommendedTreatmentTypeVS"
//   * request.method = #PUT
//   * resource = RecommendedTreatmentTypeVS

// * entry[+]
//   * request.url = "ValueSet/ReconstructionTypeVS"
//   * request.method = #PUT
//   * resource = ReconstructionTypeVS

// * entry[+]
//   * request.url = "ValueSet/RecurrenceMethodVS"
//   * request.method = #PUT
//   * resource = RecurrenceMethodVS

// * entry[+]
//   * request.url = "ValueSet/RelationshipStatusVS"
//   * request.method = #PUT
//   * resource = RelationshipStatusVS

// * entry[+]
//   * request.url = "ValueSet/ReoperationTypeVS"
//   * request.method = #PUT
//   * resource = ReoperationTypeVS

// * entry[+]
//   * request.url = "ValueSet/SACQPatientComorbidityHistory"
//   * request.method = #PUT
//   * resource = SACQPatientComorbidityHistory

// * entry[+]
//   * request.url = "ValueSet/tnm-distant-metastases-category-vs"
//   * request.method = #PUT
//   * resource = tnm-distant-metastases-category-vs

// * entry[+]
//   * request.url = "ValueSet/tnm-primary-tumor-category-vs"
//   * request.method = #PUT
//   * resource = tnm-primary-tumor-category-vs

// * entry[+]
//   * request.url = "ValueSet/tnm-regional-nodes-category-vs"
//   * request.method = #PUT
//   * resource = tnm-regional-nodes-category-vs

// * entry[+]
//   * request.url = "ValueSet/tnm-stage-group-vs"
//   * request.method = #PUT
//   * resource = tnm-stage-group-vs

// * entry[+]
//   * request.url = "ValueSet/TargetedTherapyVS"
//   * request.method = #PUT
//   * resource = TargetedTherapyVS

// * entry[+]
//   * request.url = "ValueSet/TherapyIntentVS"
//   * request.method = #PUT
//   * resource = TherapyIntentVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentPlanComplianceVS"
//   * request.method = #PUT
//   * resource = TreatmentPlanComplianceVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentPlanFollowedVS"
//   * request.method = #PUT
//   * resource = TreatmentPlanFollowedVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentPlanNotFollowedVS"
//   * request.method = #PUT
//   * resource = TreatmentPlanNotFollowedVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentTypeValueSet"
//   * request.method = #PUT
//   * resource = TreatmentTypeValueSet

// * entry[+]
//   * request.url = "CodeSystem/BreastQCodeSystem"
//   * request.method = #PUT
//   * resource = BreastQCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/BreastSurgeryTypesCodeSystem"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypesCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ComplicationImpactCodeSystem"
//   * request.method = #PUT
//   * resource = ComplicationImpactCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ComplicationTypeCodeSystem"
//   * request.method = #PUT
//   * resource = ComplicationTypeCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/EORTCQLQCodeSystem"
//   * request.method = #PUT
//   * resource = EORTCQLQCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/FACTESCodeSystem"
//   * request.method = #PUT
//   * resource = FACTESCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ImplantLocationCodeSystem"
//   * request.method = #PUT
//   * resource = ImplantLocationCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/MolecularProfilingCodeSystem"
//   * request.method = #PUT
//   * resource = MolecularProfilingCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/PatientTreatPrefCodeSystem"
//   * request.method = #PUT
//   * resource = PatientTreatPrefCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ReconstructionTypeCodeSystem"
//   * request.method = #PUT
//   * resource = ReconstructionTypeCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/RecurrenceMethodCodeSystem"
//   * request.method = #PUT
//   * resource = RecurrenceMethodCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/SACQPatientComorbidityCodeSystem"
//   * request.method = #PUT
//   * resource = SACQPatientComorbidityCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentPlanComplianceCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentPlanComplianceCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentPlanFollowedCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentPlanFollowedCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentPlanNotFollowedCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentPlanNotFollowedCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentTypesCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentTypesCodeSystem

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseAnnualUpdate"
//   * request.method = #PUT
//   * resource = ClinicalResponseAnnualUpdate

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseBaseline"
//   * request.method = #PUT
//   * resource = ClinicalResponseBaseline

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseSixMonths"
//   * request.method = #PUT
//   * resource = ClinicalResponseSixMonths

// * entry[+]
//   * request.url = "Bundle/DebugBundleClinical-01-Baseline"
//   * request.method = #PUT
//   * resource = DebugBundleClinical-01-Baseline

// * entry[+]
//   * request.url = "Bundle/DebugBundleClinical-02-SixMonths"
//   * request.method = #PUT
//   * resource = DebugBundleClinical-02-SixMonths

// * entry[+]
//   * request.url = "Bundle/DebugBundleClinical-03-Annual"
//   * request.method = #PUT
//   * resource = DebugBundleClinical-03-Annual

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-01-Baseline"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-01-Baseline

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-02-SixMonths"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-02-SixMonths

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-03-Year1and2"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-03-Year1and2

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-04-Year3and4"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-04-Year3and4

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedBaseline"
//   * request.method = #PUT
//   * resource = PatientReportedBaseline

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedSixMonths"
//   * request.method = #PUT
//   * resource = PatientReportedSixMonths

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedYear1and2"
//   * request.method = #PUT
//   * resource = PatientReportedYear1and2

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedYear3and4"
//   * request.method = #PUT
//   * resource = PatientReportedYear3and4


---

// File: input/fsh/debug-everything-bundle.fsh

// // Massive bundle containing everything in the IG
// // backup option for loading all data into a FHIR server in case it does not support FHIR packages

// // created from output/ImplementationGuide-hl7.fhir.uv.ichom-breast-cancer.json using regex:
// // \{\n +"reference": \{\n +"reference": "(\w+)\/(.+)"\n.+\n.+\n.+\n.+\n.+
// // with replacement:
// // * entry[+]
// //   * request.url = "$1/$2"
// //   * request.method = #PUT
// //   * resource = $2

// Instance: DebugBundleEverything
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle of everything"
// Description: "Bundle of all conformance and instance resources in the IG"
// // batch as some servers have a limit on the number of transactions possible
// * type = #batch

// * entry[+]
//   * request.url = "StructureDefinition/axilla-surgery"
//   * request.method = #PUT
//   * resource = axilla-surgery

// * entry[+]
//   * request.url = "StructureDefinition/axillary-clearance"
//   * request.method = #PUT
//   * resource = axillary-clearance

// * entry[+]
//   * request.url = "StructureDefinition/best-supportive-care"
//   * request.method = #PUT
//   * resource = best-supportive-care

// * entry[+]
//   * request.url = "StructureDefinition/ichom-body-height"
//   * request.method = #PUT
//   * resource = ichom-body-height

// * entry[+]
//   * request.url = "StructureDefinition/ichom-body-weight"
//   * request.method = #PUT
//   * resource = ichom-body-weight

// * entry[+]
//   * request.url = "StructureDefinition/patient"
//   * request.method = #PUT
//   * resource = patient

// * entry[+]
//   * request.url = "StructureDefinition/breast-cancer-stage-group"
//   * request.method = #PUT
//   * resource = breast-cancer-stage-group

// * entry[+]
//   * request.url = "StructureDefinition/breast-cancer-surgery"
//   * request.method = #PUT
//   * resource = breast-cancer-surgery

// * entry[+]
//   * request.url = "StructureDefinition/death-attr-bc"
//   * request.method = #PUT
//   * resource = death-attr-bc

// * entry[+]
//   * request.url = "StructureDefinition/chemotherapy"
//   * request.method = #PUT
//   * resource = chemotherapy

// * entry[+]
//   * request.url = "StructureDefinition/complication"
//   * request.method = #PUT
//   * resource = complication

// * entry[+]
//   * request.url = "StructureDefinition/er-status"
//   * request.method = #PUT
//   * resource = er-status

// * entry[+]
//   * request.url = "StructureDefinition/endopredicton-score"
//   * request.method = #PUT
//   * resource = endopredicton-score

// * entry[+]
//   * request.url = "StructureDefinition/germline-mutation"
//   * request.method = #PUT
//   * resource = germline-mutation

// * entry[+]
//   * request.url = "StructureDefinition/her-status"
//   * request.method = #PUT
//   * resource = her-status

// * entry[+]
//   * request.url = "StructureDefinition/histo-type"
//   * request.method = #PUT
//   * resource = histo-type

// * entry[+]
//   * request.url = "StructureDefinition/hormonal-therpay"
//   * request.method = #PUT
//   * resource = hormonal-therpay

// * entry[+]
//   * request.url = "StructureDefinition/immunotherapy"
//   * request.method = #PUT
//   * resource = immunotherapy

// * entry[+]
//   * request.url = "StructureDefinition/invasion-grade"
//   * request.method = #PUT
//   * resource = invasion-grade

// * entry[+]
//   * request.url = "StructureDefinition/involved-margins-reoperation"
//   * request.method = #PUT
//   * resource = involved-margins-reoperation

// * entry[+]
//   * request.url = "StructureDefinition/lymph-nodes-involved"
//   * request.method = #PUT
//   * resource = lymph-nodes-involved

// * entry[+]
//   * request.url = "StructureDefinition/lymph-nodes-resected"
//   * request.method = #PUT
//   * resource = lymph-nodes-resected

// * entry[+]
//   * request.url = "StructureDefinition/mammaprint-score"
//   * request.method = #PUT
//   * resource = mammaprint-score

// * entry[+]
//   * request.url = "StructureDefinition/menopausal-status"
//   * request.method = #PUT
//   * resource = menopausal-status

// * entry[+]
//   * request.url = "StructureDefinition/oncotype-score"
//   * request.method = #PUT
//   * resource = oncotype-score

// * entry[+]
//   * request.url = "StructureDefinition/pr-status"
//   * request.method = #PUT
//   * resource = pr-status

// * entry[+]
//   * request.url = "StructureDefinition/primary-breastcancer"
//   * request.method = #PUT
//   * resource = primary-breastcancer

// * entry[+]
//   * request.url = "StructureDefinition/radiotherapy"
//   * request.method = #PUT
//   * resource = radiotherapy

// * entry[+]
//   * request.url = "StructureDefinition/reconstruction-surgery"
//   * request.method = #PUT
//   * resource = reconstruction-surgery

// * entry[+]
//   * request.url = "StructureDefinition/recr-method"
//   * request.method = #PUT
//   * resource = recr-method

// * entry[+]
//   * request.url = "StructureDefinition/reoperation-surgery"
//   * request.method = #PUT
//   * resource = reoperation-surgery

// * entry[+]
//   * request.url = "StructureDefinition/secondary-breastcancer"
//   * request.method = #PUT
//   * resource = secondary-breastcancer

// * entry[+]
//   * request.url = "StructureDefinition/tnm-distant-metastases"
//   * request.method = #PUT
//   * resource = tnm-distant-metastases

// * entry[+]
//   * request.url = "StructureDefinition/tnm-primary-tumor-stage"
//   * request.method = #PUT
//   * resource = tnm-primary-tumor-stage

// * entry[+]
//   * request.url = "StructureDefinition/tnm-regional-nodes-stage"
//   * request.method = #PUT
//   * resource = tnm-regional-nodes-stage

// * entry[+]
//   * request.url = "StructureDefinition/targeted-therapy"
//   * request.method = #PUT
//   * resource = targeted-therapy

// * entry[+]
//   * request.url = "StructureDefinition/treatment-plan"
//   * request.method = #PUT
//   * resource = treatment-plan

// * entry[+]
//   * request.url = "StructureDefinition/treatment-plan-followed"
//   * request.method = #PUT
//   * resource = treatment-plan-followed

// * entry[+]
//   * request.url = "StructureDefinition/treatment-plan-not-followed"
//   * request.method = #PUT
//   * resource = treatment-plan-not-followed

// * entry[+]
//   * request.url = "StructureDefinition/tumor-grade"
//   * request.method = #PUT
//   * resource = tumor-grade

// * entry[+]
//   * request.url = "StructureDefinition/sizeinvasivetumor"
//   * request.method = #PUT
//   * resource = sizeinvasivetumor

// * entry[+]
//   * request.url = "StructureDefinition/EducationLevel"
//   * request.method = #PUT
//   * resource = EducationLevel

// * entry[+]
//   * request.url = "StructureDefinition/Ethnicity"
//   * request.method = #PUT
//   * resource = Ethnicity

// * entry[+]
//   * request.url = "StructureDefinition/Race"
//   * request.method = #PUT
//   * resource = Race

// * entry[+]
//   * request.url = "ValueSet/AxillaSurgeryVS"
//   * request.method = #PUT
//   * resource = AxillaSurgeryVS

// * entry[+]
//   * request.url = "ValueSet/BodyWeightVS"
//   * request.method = #PUT
//   * resource = BodyWeightVS

// * entry[+]
//   * request.url = "ValueSet/BreastQValueSet"
//   * request.method = #PUT
//   * resource = BreastQValueSet

// * entry[+]
//   * request.url = "ValueSet/BreastSurgeryTypeVS"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypeVS

// * entry[+]
//   * request.url = "ValueSet/ChemoTherapyTypeVS"
//   * request.method = #PUT
//   * resource = ChemoTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/ComplicationImpactVS"
//   * request.method = #PUT
//   * resource = ComplicationImpactVS

// * entry[+]
//   * request.url = "ValueSet/ComplicationTypeVS"
//   * request.method = #PUT
//   * resource = ComplicationTypeVS

// * entry[+]
//   * request.url = "ValueSet/EORTCQLQValueSet"
//   * request.method = #PUT
//   * resource = EORTCQLQValueSet

// * entry[+]
//   * request.url = "ValueSet/EducationLevelVS"
//   * request.method = #PUT
//   * resource = EducationLevelVS

// * entry[+]
//   * request.url = "ValueSet/EstrogenStatusVS"
//   * request.method = #PUT
//   * resource = EstrogenStatusVS

// * entry[+]
//   * request.url = "ValueSet/FACTESValueSet"
//   * request.method = #PUT
//   * resource = FACTESValueSet

// * entry[+]
//   * request.url = "ValueSet/GermlineMutationVS"
//   * request.method = #PUT
//   * resource = GermlineMutationVS

// * entry[+]
//   * request.url = "ValueSet/GradingVS"
//   * request.method = #PUT
//   * resource = GradingVS

// * entry[+]
//   * request.url = "ValueSet/HER2ReceptorStatusVS"
//   * request.method = #PUT
//   * resource = HER2ReceptorStatusVS

// * entry[+]
//   * request.url = "ValueSet/HistologicalTypeVS"
//   * request.method = #PUT
//   * resource = HistologicalTypeVS

// * entry[+]
//   * request.url = "ValueSet/HormonalTherapyTypeVS"
//   * request.method = #PUT
//   * resource = HormonalTherapyTypeVS

// * entry[+]
//   * request.url = "ValueSet/ImplantLocationVS"
//   * request.method = #PUT
//   * resource = ImplantLocationVS

// * entry[+]
//   * request.url = "ValueSet/InvolvedMarginsReoperationTypeVS"
//   * request.method = #PUT
//   * resource = InvolvedMarginsReoperationTypeVS

// * entry[+]
//   * request.url = "ValueSet/LateralityNewCancerVS"
//   * request.method = #PUT
//   * resource = LateralityNewCancerVS

// * entry[+]
//   * request.url = "ValueSet/LateralityVS"
//   * request.method = #PUT
//   * resource = LateralityVS

// * entry[+]
//   * request.url = "ValueSet/LocationRadiotherapyVS"
//   * request.method = #PUT
//   * resource = LocationRadiotherapyVS

// * entry[+]
//   * request.url = "ValueSet/MenopausalStatusVS"
//   * request.method = #PUT
//   * resource = MenopausalStatusVS

// * entry[+]
//   * request.url = "ValueSet/NoYesUnknownVS"
//   * request.method = #PUT
//   * resource = NoYesUnknownVS

// * entry[+]
//   * request.url = "ValueSet/PatientTreatPrefVS"
//   * request.method = #PUT
//   * resource = PatientTreatPrefVS

// * entry[+]
//   * request.url = "ValueSet/ProgesteroneStatusVS"
//   * request.method = #PUT
//   * resource = ProgesteroneStatusVS

// * entry[+]
//   * request.url = "ValueSet/RecommendedTreatmentTypeVS"
//   * request.method = #PUT
//   * resource = RecommendedTreatmentTypeVS

// * entry[+]
//   * request.url = "ValueSet/ReconstructionTypeVS"
//   * request.method = #PUT
//   * resource = ReconstructionTypeVS

// * entry[+]
//   * request.url = "ValueSet/RecurrenceMethodVS"
//   * request.method = #PUT
//   * resource = RecurrenceMethodVS

// * entry[+]
//   * request.url = "ValueSet/RelationshipStatusVS"
//   * request.method = #PUT
//   * resource = RelationshipStatusVS

// * entry[+]
//   * request.url = "ValueSet/ReoperationTypeVS"
//   * request.method = #PUT
//   * resource = ReoperationTypeVS

// * entry[+]
//   * request.url = "ValueSet/SACQPatientComorbidityHistory"
//   * request.method = #PUT
//   * resource = SACQPatientComorbidityHistory

// * entry[+]
//   * request.url = "ValueSet/tnm-distant-metastases-category-vs"
//   * request.method = #PUT
//   * resource = tnm-distant-metastases-category-vs

// * entry[+]
//   * request.url = "ValueSet/tnm-primary-tumor-category-vs"
//   * request.method = #PUT
//   * resource = tnm-primary-tumor-category-vs

// * entry[+]
//   * request.url = "ValueSet/tnm-regional-nodes-category-vs"
//   * request.method = #PUT
//   * resource = tnm-regional-nodes-category-vs

// * entry[+]
//   * request.url = "ValueSet/tnm-stage-group-vs"
//   * request.method = #PUT
//   * resource = tnm-stage-group-vs

// * entry[+]
//   * request.url = "ValueSet/TargetedTherapyVS"
//   * request.method = #PUT
//   * resource = TargetedTherapyVS

// * entry[+]
//   * request.url = "ValueSet/TherapyIntentVS"
//   * request.method = #PUT
//   * resource = TherapyIntentVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentPlanComplianceVS"
//   * request.method = #PUT
//   * resource = TreatmentPlanComplianceVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentPlanFollowedVS"
//   * request.method = #PUT
//   * resource = TreatmentPlanFollowedVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentPlanNotFollowedVS"
//   * request.method = #PUT
//   * resource = TreatmentPlanNotFollowedVS

// * entry[+]
//   * request.url = "ValueSet/TreatmentTypeValueSet"
//   * request.method = #PUT
//   * resource = TreatmentTypeValueSet

// * entry[+]
//   * request.url = "CodeSystem/BreastQCodeSystem"
//   * request.method = #PUT
//   * resource = BreastQCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/BreastSurgeryTypesCodeSystem"
//   * request.method = #PUT
//   * resource = BreastSurgeryTypesCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ComplicationImpactCodeSystem"
//   * request.method = #PUT
//   * resource = ComplicationImpactCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ComplicationTypeCodeSystem"
//   * request.method = #PUT
//   * resource = ComplicationTypeCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/EORTCQLQCodeSystem"
//   * request.method = #PUT
//   * resource = EORTCQLQCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/FACTESCodeSystem"
//   * request.method = #PUT
//   * resource = FACTESCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ImplantLocationCodeSystem"
//   * request.method = #PUT
//   * resource = ImplantLocationCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/MolecularProfilingCodeSystem"
//   * request.method = #PUT
//   * resource = MolecularProfilingCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/PatientTreatPrefCodeSystem"
//   * request.method = #PUT
//   * resource = PatientTreatPrefCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/ReconstructionTypeCodeSystem"
//   * request.method = #PUT
//   * resource = ReconstructionTypeCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/RecurrenceMethodCodeSystem"
//   * request.method = #PUT
//   * resource = RecurrenceMethodCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/SACQPatientComorbidityCodeSystem"
//   * request.method = #PUT
//   * resource = SACQPatientComorbidityCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentPlanComplianceCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentPlanComplianceCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentPlanFollowedCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentPlanFollowedCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentPlanNotFollowedCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentPlanNotFollowedCodeSystem

// * entry[+]
//   * request.url = "CodeSystem/TreatmentTypesCodeSystem"
//   * request.method = #PUT
//   * resource = TreatmentTypesCodeSystem

// * entry[+]
//   * request.url = "Procedure/AxillaSurgeryPatient147"
//   * request.method = #PUT
//   * resource = AxillaSurgeryPatient147

// * entry[+]
//   * request.url = "Procedure/AxillaryClearancePatient147"
//   * request.method = #PUT
//   * resource = AxillaryClearancePatient147

// * entry[+]
//   * request.url = "Procedure/BestSupportiveCarePatient147"
//   * request.method = #PUT
//   * resource = BestSupportiveCarePatient147

// * entry[+]
//   * request.url = "Observation/BodyHeightPatient147"
//   * request.method = #PUT
//   * resource = BodyHeightPatient147

// * entry[+]
//   * request.url = "Observation/BodyWeightPatient147"
//   * request.method = #PUT
//   * resource = BodyWeightPatient147

// * entry[+]
//   * request.url = "Patient/BreastCancerPatient121"
//   * request.method = #PUT
//   * resource = BreastCancerPatient121

// * entry[+]
//   * request.url = "Patient/BreastCancerPatient134"
//   * request.method = #PUT
//   * resource = BreastCancerPatient134

// * entry[+]
//   * request.url = "Patient/BreastCancerPatient147"
//   * request.method = #PUT
//   * resource = BreastCancerPatient147

// * entry[+]
//   * request.url = "Procedure/BreastCancerSurgeryPatient147"
//   * request.method = #PUT
//   * resource = BreastCancerSurgeryPatient147

// * entry[+]
//   * request.url = "Procedure/ChemotherapyPatient147"
//   * request.method = #PUT
//   * resource = ChemotherapyPatient147

// * entry[+]
//   * request.url = "Observation/ClinicalMetastasesPatient147"
//   * request.method = #PUT
//   * resource = ClinicalMetastasesPatient147

// * entry[+]
//   * request.url = "Observation/ClinicalNodalStagePatient147"
//   * request.method = #PUT
//   * resource = ClinicalNodalStagePatient147

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseAnnualUpdate"
//   * request.method = #PUT
//   * resource = ClinicalResponseAnnualUpdate

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseBaseline"
//   * request.method = #PUT
//   * resource = ClinicalResponseBaseline

// * entry[+]
//   * request.url = "Questionnaire/ClinicalResponseSixMonths"
//   * request.method = #PUT
//   * resource = ClinicalResponseSixMonths

// * entry[+]
//   * request.url = "Observation/ClinicalTNMStagePatient147"
//   * request.method = #PUT
//   * resource = ClinicalTNMStagePatient147

// * entry[+]
//   * request.url = "Observation/ClinicalTumorStagePatient147"
//   * request.method = #PUT
//   * resource = ClinicalTumorStagePatient147

// * entry[+]
//   * request.url = "Condition/ComplicationPatient147"
//   * request.method = #PUT
//   * resource = ComplicationPatient147

// * entry[+]
//   * request.url = "Observation/DeathAttributableBCPatient147"
//   * request.method = #PUT
//   * resource = DeathAttributableBCPatient147

// * entry[+]
//   * request.url = "Bundle/DebugBundleClinical-01-Baseline"
//   * request.method = #PUT
//   * resource = DebugBundleClinical-01-Baseline

// * entry[+]
//   * request.url = "Bundle/DebugBundleClinical-02-SixMonths"
//   * request.method = #PUT
//   * resource = DebugBundleClinical-02-SixMonths

// * entry[+]
//   * request.url = "Bundle/DebugBundleClinical-03-Annual"
//   * request.method = #PUT
//   * resource = DebugBundleClinical-03-Annual

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-01-Baseline"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-01-Baseline

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-02-SixMonths"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-02-SixMonths

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-03-Year1and2"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-03-Year1and2

// * entry[+]
//   * request.url = "Bundle/DebugBundlePatient-04-Year3and4"
//   * request.method = #PUT
//   * resource = DebugBundlePatient-04-Year3and4

// * entry[+]
//   * request.url = "Observation/ERStatusPatient147"
//   * request.method = #PUT
//   * resource = ERStatusPatient147

// * entry[+]
//   * request.url = "Observation/EndopredictonPatient147"
//   * request.method = #PUT
//   * resource = EndopredictonPatient147

// * entry[+]
//   * request.url = "Observation/GermlineMutationPatient147"
//   * request.method = #PUT
//   * resource = GermlineMutationPatient147

// * entry[+]
//   * request.url = "Observation/HERStatusPatient147"
//   * request.method = #PUT
//   * resource = HERStatusPatient147

// * entry[+]
//   * request.url = "Observation/HistotypePatient147"
//   * request.method = #PUT
//   * resource = HistotypePatient147

// * entry[+]
//   * request.url = "Procedure/HormonaltherapyPatient147"
//   * request.method = #PUT
//   * resource = HormonaltherapyPatient147

// * entry[+]
//   * request.url = "Procedure/ImmunotherapyPatient147"
//   * request.method = #PUT
//   * resource = ImmunotherapyPatient147

// * entry[+]
//   * request.url = "Observation/InvasionGradePatient147"
//   * request.method = #PUT
//   * resource = InvasionGradePatient147

// * entry[+]
//   * request.url = "Observation/LymphNodesInvolvedPatient147"
//   * request.method = #PUT
//   * resource = LymphNodesInvolvedPatient147

// * entry[+]
//   * request.url = "Observation/LymphNodesResectedPatient147"
//   * request.method = #PUT
//   * resource = LymphNodesResectedPatient147

// * entry[+]
//   * request.url = "Observation/MammaprintPatient147"
//   * request.method = #PUT
//   * resource = MammaprintPatient147

// * entry[+]
//   * request.url = "Observation/MenopausalStatusPatient147"
//   * request.method = #PUT
//   * resource = MenopausalStatusPatient147

// * entry[+]
//   * request.url = "Observation/OncotypePatient147"
//   * request.method = #PUT
//   * resource = OncotypePatient147

// * entry[+]
//   * request.url = "Observation/PRStatusPatient147"
//   * request.method = #PUT
//   * resource = PRStatusPatient147

// * entry[+]
//   * request.url = "Observation/PathologicalMetastasesPatient147"
//   * request.method = #PUT
//   * resource = PathologicalMetastasesPatient147

// * entry[+]
//   * request.url = "Observation/PathologicalNodalStagePatient147"
//   * request.method = #PUT
//   * resource = PathologicalNodalStagePatient147

// * entry[+]
//   * request.url = "Observation/PathologicalTNMStagePatient147"
//   * request.method = #PUT
//   * resource = PathologicalTNMStagePatient147

// * entry[+]
//   * request.url = "Observation/PathologicalTumorStagePatient147"
//   * request.method = #PUT
//   * resource = PathologicalTumorStagePatient147

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedBaseline"
//   * request.method = #PUT
//   * resource = PatientReportedBaseline

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedSixMonths"
//   * request.method = #PUT
//   * resource = PatientReportedSixMonths

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedYear1and2"
//   * request.method = #PUT
//   * resource = PatientReportedYear1and2

// * entry[+]
//   * request.url = "Questionnaire/PatientReportedYear3and4"
//   * request.method = #PUT
//   * resource = PatientReportedYear3and4

// * entry[+]
//   * request.url = "Condition/PrimaryBreastCancerPatient147"
//   * request.method = #PUT
//   * resource = PrimaryBreastCancerPatient147

// * entry[+]
//   * request.url = "Procedure/RadiotherapyPatient147"
//   * request.method = #PUT
//   * resource = RadiotherapyPatient147

// * entry[+]
//   * request.url = "Procedure/ReconstructionSurgeryPatient147"
//   * request.method = #PUT
//   * resource = ReconstructionSurgeryPatient147

// * entry[+]
//   * request.url = "Observation/RecurrenceMethodPatient147"
//   * request.method = #PUT
//   * resource = RecurrenceMethodPatient147

// * entry[+]
//   * request.url = "Procedure/ReoperationPatient147"
//   * request.method = #PUT
//   * resource = ReoperationPatient147

// * entry[+]
//   * request.url = "Procedure/ReoperationSurgeryPatient147"
//   * request.method = #PUT
//   * resource = ReoperationSurgeryPatient147

// * entry[+]
//   * request.url = "Condition/SecondaryBreastCancerPatient147"
//   * request.method = #PUT
//   * resource = SecondaryBreastCancerPatient147

// * entry[+]
//   * request.url = "Procedure/TargetedTherapyPatient134"
//   * request.method = #PUT
//   * resource = TargetedTherapyPatient134

// * entry[+]
//   * request.url = "Observation/TreatmentPlanFollowedPatient147"
//   * request.method = #PUT
//   * resource = TreatmentPlanFollowedPatient147

// * entry[+]
//   * request.url = "Observation/TreatmentPlanNotFollowedPatient147"
//   * request.method = #PUT
//   * resource = TreatmentPlanNotFollowedPatient147

// * entry[+]
//   * request.url = "CarePlan/TreatmentPlanPatient147"
//   * request.method = #PUT
//   * resource = TreatmentPlanPatient147

// * entry[+]
//   * request.url = "Observation/TumorGradePatient147"
//   * request.method = #PUT
//   * resource = TumorGradePatient147

// * entry[+]
//   * request.url = "Observation/TumorSizePatient147"
//   * request.method = #PUT
//   * resource = TumorSizePatient147


---

// File: input/fsh/debug-examples-bundle.fsh

// // Bundle containing all the examples in the IG
// // backup option for loading all data into a FHIR server in case it does not support FHIR packages

// // created from output/ImplementationGuide-hl7.fhir.uv.ichom-breast-cancer.json using regex:
// // \{\n +"reference": \{\n +"reference": "(\w+)\/(.+)"\n.+\n.+\n.+\n.+\n.+
// // with replacement:
// // * entry[+]
// //   * request.url = "$1/$2"
// //   * request.method = #PUT
// //   * resource = $2

// Instance: DebugBundleExamples
// InstanceOf: Bundle
// Usage: #example
// Title: "Bundle of all the examples"
// Description: "Bundle of all the instance resources in the IG"
// // batch as some servers have a limit on the number of transactions possible
// * type = #batch

// * entry[+]
//   * request.url = "Procedure/AxillaSurgeryPatient147"
//   * request.method = #PUT
//   * resource = AxillaSurgeryPatient147

// * entry[+]
//   * request.url = "Procedure/AxillaryClearancePatient147"
//   * request.method = #PUT
//   * resource = AxillaryClearancePatient147

// * entry[+]
//   * request.url = "Procedure/BestSupportiveCarePatient147"
//   * request.method = #PUT
//   * resource = BestSupportiveCarePatient147

// * entry[+]
//   * request.url = "Observation/BodyHeightPatient147"
//   * request.method = #PUT
//   * resource = BodyHeightPatient147

// * entry[+]
//   * request.url = "Observation/BodyWeightPatient147"
//   * request.method = #PUT
//   * resource = BodyWeightPatient147

// * entry[+]
//   * request.url = "Patient/BreastCancerPatient121"
//   * request.method = #PUT
//   * resource = BreastCancerPatient121

// * entry[+]
//   * request.url = "Patient/BreastCancerPatient134"
//   * request.method = #PUT
//   * resource = BreastCancerPatient134

// * entry[+]
//   * request.url = "Patient/BreastCancerPatient147"
//   * request.method = #PUT
//   * resource = BreastCancerPatient147

// * entry[+]
//   * request.url = "Procedure/BreastCancerSurgeryPatient147"
//   * request.method = #PUT
//   * resource = BreastCancerSurgeryPatient147

// * entry[+]
//   * request.url = "Procedure/ChemotherapyPatient147"
//   * request.method = #PUT
//   * resource = ChemotherapyPatient147

// * entry[+]
//   * request.url = "Observation/ClinicalMetastasesPatient147"
//   * request.method = #PUT
//   * resource = ClinicalMetastasesPatient147

// * entry[+]
//   * request.url = "Observation/ClinicalNodalStagePatient147"
//   * request.method = #PUT
//   * resource = ClinicalNodalStagePatient147


// * entry[+]
//   * request.url = "Observation/ClinicalTNMStagePatient147"
//   * request.method = #PUT
//   * resource = ClinicalTNMStagePatient147

// * entry[+]
//   * request.url = "Observation/ClinicalTumorStagePatient147"
//   * request.method = #PUT
//   * resource = ClinicalTumorStagePatient147

// * entry[+]
//   * request.url = "Condition/ComplicationPatient147"
//   * request.method = #PUT
//   * resource = ComplicationPatient147

// * entry[+]
//   * request.url = "Observation/DeathAttributableBCPatient147"
//   * request.method = #PUT
//   * resource = DeathAttributableBCPatient147

// * entry[+]
//   * request.url = "Observation/ERStatusPatient147"
//   * request.method = #PUT
//   * resource = ERStatusPatient147

// * entry[+]
//   * request.url = "Observation/EndopredictonPatient147"
//   * request.method = #PUT
//   * resource = EndopredictonPatient147

// * entry[+]
//   * request.url = "Observation/GermlineMutationPatient147"
//   * request.method = #PUT
//   * resource = GermlineMutationPatient147

// * entry[+]
//   * request.url = "Observation/HERStatusPatient147"
//   * request.method = #PUT
//   * resource = HERStatusPatient147

// * entry[+]
//   * request.url = "Observation/HistotypePatient147"
//   * request.method = #PUT
//   * resource = HistotypePatient147

// * entry[+]
//   * request.url = "Procedure/HormonaltherapyPatient147"
//   * request.method = #PUT
//   * resource = HormonaltherapyPatient147

// * entry[+]
//   * request.url = "Procedure/ImmunotherapyPatient147"
//   * request.method = #PUT
//   * resource = ImmunotherapyPatient147

// * entry[+]
//   * request.url = "Observation/InvasionGradePatient147"
//   * request.method = #PUT
//   * resource = InvasionGradePatient147

// * entry[+]
//   * request.url = "Observation/LymphNodesInvolvedPatient147"
//   * request.method = #PUT
//   * resource = LymphNodesInvolvedPatient147

// * entry[+]
//   * request.url = "Observation/LymphNodesResectedPatient147"
//   * request.method = #PUT
//   * resource = LymphNodesResectedPatient147

// * entry[+]
//   * request.url = "Observation/MammaprintPatient147"
//   * request.method = #PUT
//   * resource = MammaprintPatient147

// * entry[+]
//   * request.url = "Observation/MenopausalStatusPatient147"
//   * request.method = #PUT
//   * resource = MenopausalStatusPatient147

// * entry[+]
//   * request.url = "Observation/OncotypePatient147"
//   * request.method = #PUT
//   * resource = OncotypePatient147

// * entry[+]
//   * request.url = "Observation/PRStatusPatient147"
//   * request.method = #PUT
//   * resource = PRStatusPatient147

// * entry[+]
//   * request.url = "Observation/PathologicalMetastasesPatient147"
//   * request.method = #PUT
//   * resource = PathologicalMetastasesPatient147

// * entry[+]
//   * request.url = "Observation/PathologicalNodalStagePatient147"
//   * request.method = #PUT
//   * resource = PathologicalNodalStagePatient147

// * entry[+]
//   * request.url = "Observation/PathologicalTNMStagePatient147"
//   * request.method = #PUT
//   * resource = PathologicalTNMStagePatient147

// * entry[+]
//   * request.url = "Observation/PathologicalTumorStagePatient147"
//   * request.method = #PUT
//   * resource = PathologicalTumorStagePatient147

// * entry[+]
//   * request.url = "Condition/PrimaryBreastCancerPatient147"
//   * request.method = #PUT
//   * resource = PrimaryBreastCancerPatient147

// * entry[+]
//   * request.url = "Procedure/RadiotherapyPatient147"
//   * request.method = #PUT
//   * resource = RadiotherapyPatient147

// * entry[+]
//   * request.url = "Procedure/ReconstructionSurgeryPatient147"
//   * request.method = #PUT
//   * resource = ReconstructionSurgeryPatient147

// * entry[+]
//   * request.url = "Observation/RecurrenceMethodPatient147"
//   * request.method = #PUT
//   * resource = RecurrenceMethodPatient147

// * entry[+]
//   * request.url = "Procedure/ReoperationPatient147"
//   * request.method = #PUT
//   * resource = ReoperationPatient147

// * entry[+]
//   * request.url = "Procedure/ReoperationSurgeryPatient147"
//   * request.method = #PUT
//   * resource = ReoperationSurgeryPatient147

// * entry[+]
//   * request.url = "Condition/SecondaryBreastCancerPatient147"
//   * request.method = #PUT
//   * resource = SecondaryBreastCancerPatient147

// * entry[+]
//   * request.url = "Procedure/TargetedTherapyPatient134"
//   * request.method = #PUT
//   * resource = TargetedTherapyPatient134

// * entry[+]
//   * request.url = "Observation/TreatmentPlanFollowedPatient147"
//   * request.method = #PUT
//   * resource = TreatmentPlanFollowedPatient147

// * entry[+]
//   * request.url = "Observation/TreatmentPlanNotFollowedPatient147"
//   * request.method = #PUT
//   * resource = TreatmentPlanNotFollowedPatient147

// * entry[+]
//   * request.url = "CarePlan/TreatmentPlanPatient147"
//   * request.method = #PUT
//   * resource = TreatmentPlanPatient147

// * entry[+]
//   * request.url = "Observation/TumorGradePatient147"
//   * request.method = #PUT
//   * resource = TumorGradePatient147

// * entry[+]
//   * request.url = "Observation/TumorSizePatient147"
//   * request.method = #PUT
//   * resource = TumorSizePatient147


---

// File: input/fsh/Profiles clinical datapoints/BodyMeasures.fsh

// BODY HEIGHT
Profile: BodyHeight
Parent: StandardBodyHeight
Id: ichom-body-height
Title: "Body height"
Description: "Represents the height of a person diagnosed with breast cancer"
* insert PublicationProfileRuleset
* subject only Reference(BreastCancerPatient)
* code and status and valueQuantity MS

// Adjusted Observation.code.coding slice to fix error "The slice definition has min of 0 but add up to 1..."
* code.coding 1..* MS

Instance: BodyHeightPatient147
InstanceOf: BodyHeight
Description: "Example of the height of a patient diagnosed with breast cancer"
* status = ObservationStatusCS#final
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value = 48
* valueQuantity.unit = "in_i"
* valueQuantity.code = UCUM#[in_i]
* effectiveDateTime = "2019-04-01" 

Mapping: BodyHeightToICHOM
Source:	BodyHeight
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: BodyHeightMapping
Title: "Body height to ICHOM set"
Description: "Mapping of the body height to the ICHOM breast cancer PCOM set." 	
* valueQuantity.value -> "Body height"
* valueQuantity.code -> "Body height units"

// BODY WEIGHT
Profile: BodyWeight
Parent: StandardBodyWeight
Id: ichom-body-weight
Title: "Body weight"
Description: "Represents the weight of a person diagnosed with breastcancer"
* insert PublicationProfileRuleset
* subject only Reference(BreastCancerPatient)
* valueQuantity.unit from BodyWeightVS
* code and status and valueQuantity MS

// Adjusted Observation.code.coding slice to fix error "The slice definition has min of 0 but add up to 1..."
* code.coding 1..* MS

Instance: BodyWeightPatient147
InstanceOf: BodyWeight
Description: "Example of the weight of a patient diagnosed with breast cancer"
* status = ObservationStatusCS#final
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value = 70
* valueQuantity.unit = "kg"
* valueQuantity.code = #kg
* valueQuantity.system = UCUM
* effectiveDateTime = "2019-04-01"

Mapping: BodyWeightToICHOM
Source:	BodyWeight
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: BodyWeightMapping
Title: "Body weight mapping to ICHOM set"
Description: "Mapping of the body weight to the ICHOM breast cancer PCOM set." 	
* valueQuantity.value -> "Body weight"
* valueQuantity.code -> "Body weight units"

// MENOPAUSAL STATUS
Profile: MenopausalStatus
Parent: Observation 
Id: menopausal-status
Title: "Menopausal status"
Description: "Represents the menopausal status of a patient"
* insert PublicationProfileRuleset
* code = SCT#161712005 "Menopause, function (observable entity)"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from MenopausalStatusVS (required)
* code and status and subject and valueCodeableConcept MS

Instance: MenopausalStatusPatient147
InstanceOf: MenopausalStatus 
Title: "Example of menopausal status"
Description: "Example of the menopausal status of a patient"
* status = ObservationStatusCS#unknown
* code = SCT#161712005 "Menopause, function (observable entity)"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#309606002

Mapping: MenopausalStatusToICHOM
Source:	MenopausalStatus
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: MenopausalStatusMapping
Title: "Observation of menopausal status to ICHOM set"
Description: "Mapping of the menopausal status to the ICHOM breast cancer PCOM set." 	
* valueCodeableConcept -> "Menopause status"


---

// File: input/fsh/Profiles clinical datapoints/BreastCancerPatient.fsh

Profile: BreastCancerPatient
Parent: Patient
Id: patient
Title: "Breast cancer patient"
Description: "A patient who has been diagnosed with or is receiving medical treatment for breast cancer. This profile includes the ICHOM patient characteristics and demographic factors."
* insert PublicationProfileRuleset
* identifier.value and name.family and birthDate and maritalStatus and deceased[x] MS
* deceased[x] only dateTime
* address.country from CountryVS (required)
* address.country 0..1 MS
* maritalStatus from RelationshipStatusVS (required)
* extension contains patient-sexParameterForClinicalUse named sexForClinicalUse 0..1 MS
* extension contains EducationLevel named educationLevel 0..1 MS
* extension contains Ethnicity named ethnicity 0..1 MS
* extension contains Race named race 0..1 MS

Instance: BreastCancerPatient147
InstanceOf: BreastCancerPatient
Title: "Example of Breast Cancer Patient Letsche"
Description: "The characteristics and demographic factors of an example patient."
* identifier.value = "147"
* name.family = "Letsche"
* birthDate = "1920"
* address.country = CountryCS#USA
* extension[sexForClinicalUse]
  * extension[value].valueCodeableConcept = SexForClinicalUseCS#male-typical
* extension[educationLevel].valueCodeableConcept = SCT#224297003
* extension[ethnicity].valueCodeableConcept = EthnicityCS#2135-2
* extension[race].valueCodeableConcept  = RaceCS#2076-8
* maritalStatus = NullFlavor#UNK

Instance: BreastCancerPatient121
InstanceOf: BreastCancerPatient
Title: "Example of Breast Cancer Patient Cornetet"
Description: "The characteristics and demographic factors of an example patient."
* identifier.value = "121"
* name.family = "Cornetet"
* birthDate = "1933"
* address.country = CountryCS#GB
* extension[sexForClinicalUse]
  * extension[value].valueCodeableConcept = SexForClinicalUseCS#male-typical
* extension[educationLevel].valueCodeableConcept = SCT#224297003
* extension[ethnicity].valueCodeableConcept = EthnicityCS#2186-5
* extension[race].valueCodeableConcept  = RaceCS#2054-5
* maritalStatus = RelationshipStatusCS#D "Divorced"
* deceasedDateTime = "1990-05-26"

Instance: BreastCancerPatient134
InstanceOf: BreastCancerPatient
Title: "Example of Breast Cancer Patient Mortera"
Description: "The characteristics and demographic factors of an example patient."
* identifier.value = "134"
* name.family = "Mortera"
* birthDate = "1978"
* address.country = CountryCS#GB
* extension[sexForClinicalUse]
  * extension[value].valueCodeableConcept = SexForClinicalUseCS#male-typical
* extension[educationLevel].valueCodeableConcept = SCT#224297003
* extension[ethnicity].valueCodeableConcept = EthnicityCS#2135-2
* extension[race].valueCodeableConcept  = RaceCS#2028-9
* maritalStatus = RelationshipStatusCS#D "Divorced"
* deceasedDateTime = "2014-01-13"

Mapping: BreastCancerPatientToICHOM
Source:	BreastCancerPatient
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: patientmapping
Title: "Breast cancer patient to ICHOM set"
Description: "Mapping of the breast cancer patient profile to the ICHOM breast cancer PCOM set."
* identifier.value -> "Patient ID"
* name.family -> "Last name"
* birthDate -> "Year of birth"
* deceased[x] -> "Date of death"
* deceased[x] -> "Vital status"
* address.country -> "Country"
* maritalStatus -> "Relationship status"
* extension[sexForClinicalUse] -> "Sex"
* extension[educationLevel] -> "Level of education"
* extension[ethnicity] -> "Ethnicity"
* extension[race] -> "Race"


---

// File: input/fsh/Profiles clinical datapoints/Condition.fsh

// Primary Breast Cancer
Profile: PrimaryBreastCancerCondition
Parent: Condition 
Id: primary-breastcancer
Title: "Primary Breast Cancer Condition"
Description: "Represent the properties of the primary breast cancer diagnosis"
* insert PublicationProfileRuleset
* code = SCT#372137005 "Primary malignant neoplasm of breast"
* subject only Reference(BreastCancerPatient)
* bodySite from LateralityVS (preferred)
* subject and code and bodySite and clinicalStatus MS

Instance: PrimaryBreastCancerPatient147
InstanceOf: PrimaryBreastCancerCondition
Description: "Example of the primary breast cancer diagnosis of a patient"
* code = SCT#372137005 "Primary malignant neoplasm of breast"
* clinicalStatus = ConditionStatusCS#recurrence "Recurrence"
* subject = Reference(BreastCancerPatient147)
* bodySite = SCT#80248007 "Left breast"

Mapping: PrimaryBreastCancerConditionToICHOM
Source:	PrimaryBreastCancerCondition
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: primaryconditionmapping
Title: "Primary condition to ICHOM set"
Description: "Mapping of the primary breast cancer condition to the ICHOM breast cancer PCOM set. To ensure this is the first breast cancer diagnosed in a patient, the application can search for previous conditions." 	
* -> "First breast cancer"

// Secondary Breast Cancer
Profile: SecondaryBreastCancerCondition
Parent: Condition 
Id: secondary-breastcancer
Title: "Secondary Breast Cancer Condition"
Description: "Represent the properties of the secondary breast cancer diagnosis"
* insert PublicationProfileRuleset
* code = SCT#145501000119108 "Secondary malignant neoplasm of breast"
* subject only Reference(BreastCancerPatient)
* bodySite from LateralityNewCancerVS
* subject and code and bodySite and clinicalStatus MS

Instance: SecondaryBreastCancerPatient147
InstanceOf: SecondaryBreastCancerCondition
Description: "Example of the secondary condition breast cancer diagnosed in a patient"
* code = SCT#145501000119108 "Secondary malignant neoplasm of breast"
* clinicalStatus = ConditionStatusCS#active "Active"
* bodySite = SCT#255209002 "Contralateral"
* subject = Reference(BreastCancerPatient147)

Mapping: SecondaryBreastCancerConditionToICHOM
Source:	SecondaryBreastCancerCondition
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: secondaryconditionmapping
Title: "Secondary condition to ICHOM set"
Description: "Mapping of the secondary breast cancer condition to the ICHOM breast cancer PCOM set. To ensure this is secondary breast cancer diagnosed in a patient, the application can search for previous conditions." 	
* -> "Second breast cancer"
* bodySite -> "Second breast cancer"


---

// File: input/fsh/Profiles clinical datapoints/DisutilityOfCare.fsh

Profile: ReoperationSurgery
Parent: Procedure 
Id: reoperation-surgery
Title: "Re-operation surgery"
Description: "Represents whether the patient has had a re-operation since their surgery for breast cancer and whether it was due to involved margins."
* insert PublicationProfileRuleset
* category = SCT#261554009 "Reoperation"
* code from ReoperationTypeVS (required)
* subject only Reference(BreastCancerPatient)
* performed[x] only dateTime 
* reasonCode from ReoperationReasonVS (preferred)
  * ^short = "The reasonCode explains whether or not the reoperation was due to involved margins"
* reasonReference only Reference (PrimaryBreastCancerCondition)
* partOf MS
  * ^short = "Original procedure that prompted the reoperation"
  * ^definition = "A larger event of which this particular procedure is a component or step. In this case, the original procedure that prompted the reoperation."
* status and subject and category and code and performedDateTime and reasonCode and reasonReference MS

Instance: ReoperationSurgeryPatient147
InstanceOf: ReoperationSurgery
Description: "Example of a reoperation due to involved margins after primary surgery"
* status = ProcedureStatusCS#completed 
* category = SCT#261554009 "Reoperation"
* code = BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction "Mastectomy with immediate reconstruction"
* subject = Reference(BreastCancerPatient147)
* performedDateTime = "2022-07-09"
* reasonCode = SCT#1156344002 "Presence of primary malignant neoplasm of breast at surgical margin in excised specimen of breast"
* reasonReference = Reference(PrimaryBreastCancerPatient147)
* partOf = Reference(BreastCancerSurgeryPatient147)

Mapping: ReoperationSurgeryToICHOM
Source:	ReoperationSurgery
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: reoperation-surgery-mapping
Title: "Reoperation surgery to ICHOM set"
Description: "Mapping of the reoperation surgery to the ICHOM breast cancer PCOM set" 	
* -> "Surgery"
* reasonCode -> "Involved margins reoperation"
* performed[x] -> "Positive margins reoperation date or surgery date"

// Complication
Profile: Complication
Parent: Condition 
Id: complication
Title: "Complication"
Description: "Represents the type and impact of a complication experienced by a patient"
* insert PublicationProfileRuleset
* code from ComplicationTypeVS (preferred)
* subject only Reference(BreastCancerPatient)
* severity from ComplicationImpactVS (required)
* subject and code and severity MS
* extension contains DueToEx named dueTo 0..* MS
* extension[dueTo] ^short = "Previous procedure that prompted this complication"
* extension[dueTo] ^definition = "This element indicates whether the complication was attributable to the breast cancer treatment the patient received"
* extension[dueTo].value[x] only Reference
* extension[dueTo].valueReference only Reference (Procedure)

Instance: ComplicationPatient147
InstanceOf: Complication
Description: "Example of a complication in patient with breast cancer"
* clinicalStatus = ConditionStatusCS#active "Active"
* code = SCT#233604007 "Pneumonia"
* subject = Reference(BreastCancerPatient147)
* severity = SCT#397945004 "Unexpected admission to intensive care unit"
* extension[dueTo].valueReference = Reference(BreastCancerSurgeryPatient147)

Mapping: ComplicationToICHOM
Source:	Complication
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: complication-mapping
Title: "Complication to ICHOM set"
Description: "Mapping of the type and impact of a complication to the ICHOM breast cancer PCOM set" 	
* code -> "Complication type"
* severity -> "Impact of complication"
* extension[dueTo] -> "Complication attributed to treatment"


---

// File: input/fsh/Profiles clinical datapoints/Extensions.fsh

Extension: EducationLevel
Id: EducationLevel
Title:  "Education Level Extension"
Description: "Represents the level of education of a patient."
* value[x] only CodeableConcept
* value[x] from EducationLevelVS (required)
* insert ExtensionContext(Patient)

Mapping: EducationLevelToICHOM
Source:	EducationLevel
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: EducationLevelMapping
Title: "Education level mapping to ICHOM set"
Description: "Mapping of the education level to the ICHOM breast cancer PCOM set." 	
* -> "Level of education"

Extension: Race
Id: Race
Title:  "Race Extension"
Description: "Represents the race of a patient. This extension is aligned with USCore."
* value[x] only CodeableConcept
* value[x] from RaceVS (example) 
* insert ExtensionContext(Patient)

Mapping: RaceToICHOM
Source:	Race
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: RaceMapping
Title: "Race mapping to ICHOM set"
Description: "Mapping of the race to the ICHOM breast cancer PCOM set." 	
* -> "Race"

Extension: Ethnicity
Id: Ethnicity
Title:  "Ethnicity Extension"
Description: "Represents the ethnicity of a patient. This extension is aligned with USCore"
* value[x] only CodeableConcept
* value[x] from EthnicityVS (example)
* insert ExtensionContext(Patient)

Mapping: EthnicityToICHOM
Source:	Ethnicity
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: EthnicityMapping
Title: "Ethnicity mapping to ICHOM set"
Description: "Mapping of the ethnicity to the ICHOM breast cancer PCOM set." 	
* -> "Ethnicity"


---

// File: input/fsh/Profiles clinical datapoints/ListofAliases.fsh

// Profiles HL7 FHIR
Alias: StandardBodyWeight = http://hl7.org/fhir/StructureDefinition/bodyweight
Alias: StandardBodyHeight = http://hl7.org/fhir/StructureDefinition/bodyheight

// CodeSystems:
Alias: SCT = http://snomed.info/sct
Alias: LNC = http://loinc.org
Alias: UCUM = http://unitsofmeasure.org
Alias: NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor

Alias: ObservationStatusCS = http://hl7.org/fhir/observation-status
Alias: ConditionStatusCS = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: EventStatusCS = http://hl7.org/fhir/event-status
Alias: CareplanStatusCS = http://hl7.org/fhir/request-status
Alias: CareplanIntentCS = http://hl7.org/fhir/request-intent
Alias: CareplanActivityStatusCS = http://hl7.org/fhir/care-plan-activity-status
Alias: ProcedureStatusCS = http://hl7.org/fhir/event-status
Alias: RelationshipStatusCS = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: MedicationRequestStatusCS = http://hl7.org/fhir/CodeSystem/medicationrequest-status
Alias: MedicationRequestIntentCS = http://hl7.org/fhir/CodeSystem/medicationrequest-intent
Alias: MedicationAdministrationStatusCS = http://terminology.hl7.org/CodeSystem/medication-admin-status

Alias: RaceCS = http://terminology.hl7.org/CodeSystem/v3-Race
Alias: GenderCS = http://hl7.org/fhir/administrative-gender
Alias: EthnicityCS = http://terminology.hl7.org/CodeSystem/v3-Ethnicity
Alias: CountryCS = urn:iso:std:iso:3166
Alias: YesNoUnkCS = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: AdministrativeGenderCS = http://hl7.org/fhir/administrative-gender
Alias: SexForClinicalUseCS = http://terminology.hl7.org/CodeSystem/sex-parameter-for-clinical-use
Alias: DataAbsentCS = http://terminology.hl7.org/CodeSystem/data-absent-reason

// Valuesets
Alias: EthnicityVS = http://terminology.hl7.org/ValueSet/v3-Ethnicity
Alias: CountryVS = 	http://hl7.org/fhir/ValueSet/iso3166-1-3
Alias: RaceVS = http://terminology.hl7.org/ValueSet/v3-Race
Alias: AdministrativeGenderVS = http://hl7.org/fhir/ValueSet/administrative-gender

// Extensions
Alias: DueToEx = http://hl7.org/fhir/StructureDefinition/condition-dueTo
Alias: ProcedureMethodEx = http://hl7.org/fhir/StructureDefinition/procedure-method
Alias: ProcedureCausedByEx = http://hl7.org/fhir/StructureDefinition/procedure-causedBy
Alias: VariableEx = http://hl7.org/fhir/StructureDefinition/variable
Alias: InitialExpressionEx = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression
Alias: MinQuantityEx = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-minQuantity
Alias: MaxQuantityEx = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-maxQuantity
Alias: UnitOptionEx = http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption
Alias: ObservationExtractEx = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationExtract
Alias: ObservationLinkPeriodEx = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-observationLinkPeriod
Alias: CalculatedExpressionEx = http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression
Alias: HiddenEx = http://hl7.org/fhir/StructureDefinition/questionnaire-hidden
Alias: SexForClinicalUse = http://hl7.org/fhir/StructureDefinition/patient-sexForClinicalUse


---

// File: input/fsh/Profiles clinical datapoints/RulesetsProfiles.fsh

// Copyrights SNOMED
RuleSet: SNOMEDCopyrightForVS
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"

// Copyrights Loinc
RuleSet: LOINCCopyrightForVS
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"

// Copyrights HL7
RuleSet: HL7CopyrightForVS
* ^copyright = "Copyright HL7. Licensed under creative commons public domain"

// Copyrights UCUM
RuleSet: UCUMCopyrightForVS
* ^copyright = "UCUM is Copyright © 1999-2013 Regenstrief Institute, Inc. and The UCUM Organization, Indianapolis, IN. All rights reserved. See http://unitsofmeasure.org/trac//wiki/TermsOfUse for details"


---

// File: input/fsh/Profiles clinical datapoints/SurvivalandDiseaseControl.fsh

// SURIVAL AND DISEASE CONTROL
// Vital status
Profile: DeathAttributableBC
Parent: Observation 
Id: death-attr-bc
Title: "Death attributable to breast cancer"
Description: "Represents if breast cancer was the cause of death"
* insert PublicationProfileRuleset
* code = SCT#419620001:42752001=254837009 "Death where Due to = Malignant tumor of breast"
* value[x] only CodeableConcept 
* valueCodeableConcept from NoYesUnknownVS (required)
* code and status and valueCodeableConcept and subject MS

Instance: DeathAttributableBCPatient147
InstanceOf: DeathAttributableBC
Description: "Example of death attributable to breast cancer"
* code = SCT#419620001:42752001=254837009 "Death where Due to = Malignant tumor of breast"
* status = ObservationStatusCS#final
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = YesNoUnkCS#N

Mapping: DeathAttributableBCToICHOM
Source:	DeathAttributableBC
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: deathbcmapping
Title: "Death attributable to breast cancer to ICHOM set"
Description: "Mapping of death attributable to breast cancer to the ICHOM breast cancer PCOM set." 	
* valueCodeableConcept -> "Death attributable to breast cancer"

// Cancer recurrence
Profile: RecurrenceMethod
Parent: Observation 
Id: recr-method
Title: "Recurrence Method"
Description: "The method of confirming recurrence breast cancer"
* insert PublicationProfileRuleset
* focus only Reference(PrimaryBreastCancerCondition)
* code = SCT#103693007 "Diagnostic procedure"
* value[x] only CodeableConcept 
* valueCodeableConcept from RecurrenceMethodVS (required)
* code and status and focus and subject and valueCodeableConcept MS

Instance: RecurrenceMethodPatient147
InstanceOf: RecurrenceMethod
Description: "Example of method of confirming recurrence breast cancer"
* focus = Reference(PrimaryBreastCancerPatient147)
* code = SCT#103693007 "Diagnostic procedure"
* status = ObservationStatusCS#final
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#67151002 "Histologic"

Mapping: RecurrenceMethodToICHOM
Source:	RecurrenceMethod
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: recr-methodmapping
Title: "Recurrence method to ICHOM set"
Description: "Mapping of method of confirming recurrence breast cancer to the ICHOM breast cancer PCOM set." 	
* valueCodeableConcept -> "Recurrence method"


---

// File: input/fsh/Profiles clinical datapoints/TreatmentVariables.fsh

// BREAST SURGERY
Profile: BreastCancerSurgery
Parent: Procedure 
Id: breast-cancer-surgery
Title: "Breast cancer surgery"
Description: "Represents if the breast cancer patient received surgery during the last year."
* category 1.. MS
* category = SCT#387713003 "Surgical procedure" 
* code from BreastSurgeryTypeVS (required)
* subject only Reference(BreastCancerPatient)
* reasonReference only Reference (PrimaryBreastCancerCondition)
* status and subject and code and performedDateTime	and reasonReference MS

Instance: BreastCancerSurgeryPatient147
InstanceOf: BreastCancerSurgery 
Description: "Example of the surgical procedure the breast cancer patient underwent"
* category = SCT#387713003 "Surgical procedure" 
* status = EventStatusCS#completed
* code = BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction "Mastectomy with immediate reconstruction"
* subject = Reference(BreastCancerPatient147)
* performedDateTime = "1989-03-25"
* reasonReference = Reference(PrimaryBreastCancerPatient147)

Mapping: BreastCancerSurgeryToICHOM
Source:	BreastCancerSurgery
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: breast-cancer-surgery-mapping
Title: "Breast cancer surgery to ICHOM set"
Description: "Mapping of the breast cancer surgery to the ICHOM breast cancer PCOM set."
* -> "Treatment"
* code -> "Surgery"
* performedDateTime -> "Surgery date" 

// AXILLA SURGERY
Profile: AxillaSurgery
Parent: Procedure 
Id: axilla-surgery
Title: "Axilla surgery"
Description: "Represents if the breast cancer patient received surgery to the axilla during the last year."
* category 1.. MS
* category = SCT#699455008 "Operative procedure on axilla"
* code from TargetedAxillaSurgeryVS (required)
* subject only Reference(BreastCancerPatient)
* reasonReference only Reference (PrimaryBreastCancerCondition)
* status and subject and code and performedDateTime	and reasonReference MS

Instance: AxillaSurgeryPatient147
InstanceOf: AxillaSurgery 
Description: "Example of a breast cancer patient who underwent surgery to the axilla"
* status = EventStatusCS#completed
* category = SCT#699455008 "Operative procedure on axilla"
* code = SCT#234262008 "Excision of axillary lymph node"
* subject = Reference(BreastCancerPatient147)
* performedDateTime = "2022-02-12"
* reasonReference = Reference(PrimaryBreastCancerPatient147)

Mapping: AxillaSurgeryToICHOM
Source:	AxillaSurgery
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: axilla-surgery-mapping
Title: "Axilla surgery to ICHOM set"
Description: "Mapping of the axilla surgery to the ICHOM breast cancer PCOM set." 
* -> "Treatment"	
* category -> "Treatment"
* code -> "Surgery axilla"
* performedDateTime -> "Surgery axilla date" 

// AXILLARY CLEARANCE
Profile: AxillaryClearance
Parent: Procedure 
Id: axillary-clearance
Title: "Axillary clearance"
Description: "Represents if the breast cancer patient received axillary clearance during the last year. Axilla clearance could be due to lymph node involvement after sentinel lymph node biopsy."
* code 1.. MS
* code = SCT#79544006 "Complete axillary lymphadenectomy"
* subject only Reference(BreastCancerPatient)
* reasonReference only Reference (AxillaSurgery)
* status and subject and performedDateTime and reasonReference MS

Instance: AxillaryClearancePatient147
InstanceOf: AxillaryClearance
Description: "Example of a breast cancer patient who received axilla clearance"
* status = EventStatusCS#completed
* code = SCT#79544006 "Complete axillary lymphadenectomy"
* subject = Reference(BreastCancerPatient147)
* performedDateTime = "2022-02-12"
* reasonReference = Reference(AxillaSurgeryPatient147)

Mapping: AxillaryClearanceToICHOM
Source:	AxillaryClearance
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: axillary-clearance-mapping
Title: "Axillary clearance to ICHOM set"
Description: "Mapping of axillary clearance to the ICHOM breast cancer PCOM set" 	
* -> "Treatment"
* code -> "Axillary clearance"
* performedDateTime -> "Axillary clearance date" 

// RECONSTRUCTION
Profile: ReconstructionSurgery
Parent: Procedure 
Id: reconstruction-surgery
Title: "Reconstruction surgery"
Description: "Represents if the breast cancer patient received reconstruction surgery during the last year."
* code 1.. MS
* code = SCT#33496007 "Reconstruction of breast" 
* subject only Reference(BreastCancerPatient)
* performedDateTime	and complication MS
* reasonReference only Reference (PrimaryBreastCancerCondition)
* bodySite from ImplantLocationVS (required)
* usedCode from ReconstructionTypeVS (required)
* status and subject and performedDateTime and reasonReference and bodySite and usedCode MS 
* partOf MS
  * ^short = "Original procedure that preceded the reconstruction (e.g. mastectomy)"
  * ^definition = "A larger event of which this particular procedure is a component or step. In this case, the original procedure (e.g. mastectomy) that preceded the reoperation."

Instance: ReconstructionSurgeryPatient147
InstanceOf: ReconstructionSurgery
Description: "Example of a breast cancer patient who underwent reconstruction surgery"
* status = EventStatusCS#completed
* code = SCT#33496007 "Reconstruction of breast"
* subject = Reference(BreastCancerPatient147)
* performedDateTime = "1999-02-13"
* reasonReference = Reference(PrimaryBreastCancerPatient147)
* bodySite = ImplantLocationCodeSystem#pre-pectoral "Pre-pectoral"
* usedCode = ReconstructionTypeCodeSystem#staged-implant "Staged implant"
* partOf = Reference(ReoperationSurgeryPatient147)

Mapping: ReconstructionSurgeryToICHOM
Source:	ReconstructionSurgery
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: reconstruction-surgery-mapping
Title: "Reconstruction surgery to ICHOM set"
Description: "Mapping of the reconstruction surgery to the ICHOM breast cancer PCOM set" 
* -> "Treatment"
* code -> "Delayed Reconstruction"
* performedDateTime -> "Surgery date" 
* bodySite -> "Implant Reconstruction"
* usedCode -> "Reconstruction Type"
* partOf -> "Reconstruction reoperation"

// RADIOTHERAPY
Profile: Radiotherapy
Parent: Procedure 
Id: radiotherapy
Title: "Radiotherapy"
Description: "Represents if the breast cancer patient received radiotherapy during the last year." 
* code 1.. MS
* code = SCT#108290001 "Radiation oncology AND/OR radiotherapy" 
* subject only Reference(BreastCancerPatient)
* performedPeriod.start ^short = "Radiotherapy start date"
* performedPeriod.end ^short = "Radiotherapy stop date"
* reasonReference only Reference (PrimaryBreastCancerCondition)
* reasonCode from TherapyIntentVS (required)
* bodySite from LocationRadiotherapyVS (preferred) 
* status and subject and performedPeriod and reasonReference and reasonCode and bodySite MS 

Instance: RadiotherapyPatient147
InstanceOf: Radiotherapy
Description: "Example of a breast cancer patient who received radiotherapy"
* status = EventStatusCS#completed
* code = SCT#108290001 "Radiation oncology AND/OR radiotherapy"
* subject = Reference(BreastCancerPatient147)
* performedPeriod.start = "2021-06-19"
* performedPeriod.end = "2021-12-01"
* reasonCode = SCT#373846009 "Adjuvant - intent" 
* reasonReference = Reference(PrimaryBreastCancerPatient147)
* bodySite = SCT#263601005 "Site of tumor"

Mapping: RadiotherapyToICHOM
Source:	Radiotherapy
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: radiotherapy-mapping
Title: "Radiotherapy to ICHOM set"
Description: "Mapping of radiotherapy to the ICHOM breast cancer PCOM set" 	
* -> "Treatment"
* performedPeriod.start -> "Radiotherapy start date" 
* performedPeriod.end -> "Radiotherapy stop date" 
* reasonCode -> "Radiotherapy"
* bodySite -> "Radiotherapy type"

// CHEMOTHERAPY
Profile: Chemotherapy
Parent: Procedure 
Id: chemotherapy
Title: "Chemotherapy"
Description: "Represents if the patient received chemotherapy during the last year."
* code 1.. MS
* code = SCT#385786002 "Chemotherapy care"
* subject only Reference(BreastCancerPatient)
* performedPeriod.start ^short = "Chemotherapy start date"
* performedPeriod.end ^short = "Chemotherapy stop date"
* reasonReference only Reference (PrimaryBreastCancerCondition)
* reasonCode from TherapyIntentVS (required)
* extension contains ProcedureMethodEx named method 0..1 MS
* extension[method].valueCodeableConcept from ChemoTherapyTypeVS (preferred)
* status and subject and performedPeriod and reasonReference and reasonCode MS 

Instance: ChemotherapyPatient147
InstanceOf: Chemotherapy
Description: "Example of a breast cancer patient who received chemotherapy"
* status = EventStatusCS#completed
* code = SCT#385786002 "Chemotherapy care"
* subject = Reference(BreastCancerPatient147)
* performedPeriod.start = "2019-01-09"
* performedPeriod.end = "2019-09-04"
* reasonCode = SCT#373846009 "Adjuvant - intent" 
* reasonReference = Reference(PrimaryBreastCancerPatient147)
* extension[method].valueCodeableConcept = NullFlavor#OTH "other"

Mapping: ChemotherapyToICHOM
Source:	Chemotherapy
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: chemotherapy-mapping
Title: "Chemotherapy to ICHOM set"
Description: "Mapping of chemotherapy to the ICHOM breast cancer PCOM set" 
* -> "Treatment"
* performedPeriod.start -> "Chemotherapy start date" 
* performedPeriod.end -> "Chemotherapy stop date" 
* reasonCode -> "Chemotherapy"
* extension[method] -> "Type of chemotherapy"

// HORMONAL THERAPY
Profile: Hormonaltherapy
Parent: Procedure 
Id: hormonal-therpay
Title: "Hormonal therapy"
Description: "Represents if the patient received hormonal therapy during the last year."
* code 1.. MS
* code = SCT#169413002 "Hormone therapy" 
* subject only Reference(BreastCancerPatient)
* reasonReference only Reference (PrimaryBreastCancerCondition)
* reasonCode from TherapyIntentVS (required)
* performedPeriod.start ^short = "Hormonal therapy start date"
* performedPeriod.end ^short = "Hormonal therapy stop date"
* extension contains ProcedureMethodEx named method 0..1 MS
* extension[method].valueCodeableConcept from HormonalTherapyTypeVS (preferred)
* status and subject and performedPeriod and reasonReference and reasonCode MS 

Instance: HormonaltherapyPatient147
InstanceOf: Hormonaltherapy
Description: "Example of a breast cancer patient who received hormonal therapy"
* status = EventStatusCS#completed
* code = SCT#169413002 "Hormone therapy" 
* subject = Reference(BreastCancerPatient147)
* performedPeriod.start = "2020-10-06"
* performedPeriod.end = "2021-06-04"
* reasonCode = SCT#373847000 "Neo-adjuvant - intent"
* reasonReference = Reference(PrimaryBreastCancerPatient147)
* extension[method].valueCodeableConcept = SCT#83152002 "Oophorectomy"

Mapping: HormonaltherapyToICHOM
Source:	Hormonaltherapy
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: hormonal-therapy-mapping
Title: "Hormonal therapy to ICHOM set"
Description: "Mapping of hormonal therapy to the ICHOM breast cancer PCOM set" 
* -> "Treatment"
* performedPeriod.start -> "Start of hormonal therapy" 
* performedPeriod.end -> "Stop of hormonal therapy" 
* reasonCode -> "hormonal therapy"
* extension[method] -> "Type of hormonal therapy"

// BEST SUPPORTIVE CARE
Profile: BestSupportiveCare
Parent: Procedure 
Id: best-supportive-care
Title: "Best supportive care"
Description: "Represents if breast cancer patient received best supportive care during the last year."
* code 1.. MS
* code = SCT#243114000 "Support"
* subject only Reference(BreastCancerPatient)
* reasonReference only Reference (PrimaryBreastCancerCondition)
* status and subject and reasonReference MS

Instance: BestSupportiveCarePatient147
InstanceOf: BestSupportiveCare 
Description: "Example of a breast cancer patient who received best supportive care"
* status = EventStatusCS#completed
* code = SCT#243114000 "Support"
* subject = Reference(BreastCancerPatient147)
* reasonReference = Reference(PrimaryBreastCancerPatient147)

Mapping: BestSupportiveCareToICHOM
Source:	BestSupportiveCare
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: best-supportive-care-mapping
Title: "Best supportive care of breast cancer patient to ICHOM set"
Description: "Mapping of best supportive care to the ICHOM breast cancer PCOM set" 	
* -> "Treatment"

// IMMUNOTHERAPY
Profile: Immunotherapy
Parent: Procedure 
Id: immunotherapy
Title: "Immunotherapy"
Description: "Represents if the breast cancer patient received immunotherapy during the last year."
* code 1.. MS
* code = SCT#76334006 "Immunotherapy"
* subject only Reference(BreastCancerPatient)
* reasonReference only Reference (PrimaryBreastCancerCondition)
* status and subject and reasonReference MS

Instance: ImmunotherapyPatient147
InstanceOf: Immunotherapy 
Description: "Example of a breast cancer patient who received immunotherapy"
* status = EventStatusCS#completed
* code = SCT#76334006 "Immunotherapy"
* subject = Reference(BreastCancerPatient147)
* reasonReference = Reference(PrimaryBreastCancerPatient147)

Mapping: ImmunotherapyToICHOM
Source:	Immunotherapy
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: immunotherapy-mapping
Title: "Immunotherapy of the breast cancer patient to ICHOM set"
Description: "Mapping of immunotherapy to the ICHOM breast cancer PCOM set" 	
* -> "Treatment"

// TARGETED THERAPY
Profile: TargetedTherapy
Parent: Procedure 
Id: targeted-therapy
Title: "Targeted therapy"
Description: "Type and duration of targeted therapy"
* code 1.. MS
* code = TreatmentTypesCodeSystem#targeted-therapy "Targeted therapy"
* subject only Reference(BreastCancerPatient)
* performedPeriod.start ^short = "Targeted therapy start date"
* performedPeriod.end ^short = "Targeted therapy stop date"
* extension contains ProcedureMethodEx named method 0..1 MS
* extension[method].valueCodeableConcept from TargetedTherapyVS (preferred)
* status and subject and performedPeriod MS

Instance: TargetedTherapyPatient134
InstanceOf: TargetedTherapy 
Title: "Example of Targeted therapy"
Description: "Example of the targeted therapy for this patient."
* status = EventStatusCS#unknown
* subject = Reference(BreastCancerPatient134)
* code = TreatmentTypesCodeSystem#targeted-therapy "Targeted therapy"
* performedPeriod.start = "1979-11-21"
* performedPeriod.end = "1979-11-23"
* extension[method].valueCodeableConcept = SCT#784176007 "HER2 (Human epidermal growth factor receptor 2) inhibitor"

Mapping: TargetedTherapyToICHOM
Source:	TargetedTherapy
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: targetedtherapymapping
Title: "Targeted therapy to ICHOM set"
Description: "Mapping of targeted thereapy to the ICHOM breast cancer PCOM set" 	
* performedPeriod.start -> "Targeted therapy start date"
* performedPeriod.end -> "Targeted therapy start date"
* extension[method] -> "Targeted therapy"

// Multidisciplinary meeting 
Profile: TreatmentPlan
Parent: CarePlan 
Id: treatment-plan 
Title: "Treatment recommended by a multidisciplinary team"
Description: "Represents the treatment that a multidisciplinary team recommended during a multidisciplinary meeting"
* insert PublicationProfileRuleset
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "coding.code"
* category ^slicing.rules = #open
* category ^slicing.ordered = false
* category contains
  multidisciplinaryAssessment 0..1 MS
* category[multidisciplinaryAssessment]
  * coding 1..1
  * coding.system 1..1
  * coding.code 1..1
  * coding.system = SCT
  * coding.code = #312384001
  * coding.display = "Multidisciplinary assessment"
* subject only Reference(BreastCancerPatient)
* activity.detail.code from RecommendedTreatmentTypeVS
* status and intent and subject and category and created and activity.detail.code MS

Instance: TreatmentPlanPatient147
InstanceOf: TreatmentPlan
Description: "Example of the treatment that a multidisciplinary team recommended during a multidisciplinary meeting"
* status = CareplanStatusCS#active
* intent = CareplanIntentCS#plan 
* category[multidisciplinaryAssessment] = SCT#312384001 "Multidisciplinary assessment"
* subject = Reference(BreastCancerPatient147)
* activity.detail.code = SCT#387713003 "Surgical procedure"
* activity.detail.status = CareplanActivityStatusCS#unknown

Mapping: TreatmentPlanToICHOM
Source:	TreatmentPlan
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: TreatmentPlanMapping
Title: "Treatmentplan to ICHOM set"
Description: "Mapping of the treatment that a multidisciplinary team recommended to the ICHOM breast cancer PCOM set" 	
* -> "Multidisciplinary Meeting"
* activity.detail.code -> "Multidisciplinary Recommended Treatments"

// TreatmentPlanFollowed	
Profile: TreatmentPlanFollowed
Parent: Observation
Id: treatment-plan-followed
Title: "Real Treatment Plan Followed"
Description: "Indicate if the patient followed the multidisciplinary recommended treatment plan"
* insert PublicationProfileRuleset
* basedOn only Reference(TreatmentPlan)
* code = SCT#410110000 "Compliance care assessment"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from TreatmentPlanFollowedVS (required)
* status and code and basedOn and subject and valueCodeableConcept MS

Instance: TreatmentPlanFollowedPatient147
InstanceOf: TreatmentPlanFollowed 
Title: "Example Real Treatment Plan Followed"
Description: "Example of how the real treatment plan was followed"
* basedOn = Reference(TreatmentPlanPatient147)
* code = SCT#410110000 "Compliance care assessment"
* status = ObservationStatusCS#final
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = TreatmentPlanFollowedCodeSystem#yes "Yes, fully followed"

Mapping: TreatmentPlanFollowedToICHOM
Source:	TreatmentPlanFollowed
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: treatmentplanfollowedmapping
Title: "TreatmentPlanFollowed to ICHOM set"
Description: "Mapping of Treatment Plan Followed to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept -> "Real Treatment Plan Followed"

// TreatmentPlanNotFollowed	
Profile: TreatmentPlanNotFollowed
Parent: Observation
Id: treatment-plan-not-followed
Title: "Treatment Plan Not Followed"
Description: "Indicate why the multidisciplinary recommended treatment plan was not followed"
* insert PublicationProfileRuleset
* basedOn only Reference(TreatmentPlan)
* code = TreatmentPlanComplianceCodeSystem#reason-for-not-following "Reason for not following original treatment plan"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from TreatmentPlanNotFollowedVS (required)
* status and code and basedOn and subject and valueCodeableConcept MS

Instance: TreatmentPlanNotFollowedPatient147
InstanceOf: TreatmentPlanNotFollowed 
Title: "Example Treatment Plan Not Followed"
Description: "Example of why the treatment plan was not followed"
* basedOn = Reference(TreatmentPlanPatient147)
* code = TreatmentPlanComplianceCodeSystem#reason-for-not-following "Reason for not following original treatment plan"
* status = ObservationStatusCS#final
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = TreatmentPlanNotFollowedCodeSystem#patient-preference "Patient preference"

Mapping: TreatmentPlanNotFollowedToICHOM
Source:	TreatmentPlanNotFollowed
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: treatmentplannotfollowedmapping
Title: "TreatmentPlanNotFollowed to ICHOM set"
Description: "Mapping of Treatment Plan Not Followed to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept -> "Treatment Plan Not Followed"












---

// File: input/fsh/Profiles clinical datapoints/TumorFactors.fsh

// HISTOTYPE
Profile: Histotype
Parent: Observation 
Id: histo-type
Title: "Histological type of the tumor"
Description: "Represents the histological type of the tumor"
* insert PublicationProfileRuleset
* code = SCT#396984004 "Histologic feature of neoplasm"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from HistologicalTypeVS (preferred)
* code and status and effectiveDateTime and subject and valueCodeableConcept MS

Instance: HistotypePatient147
InstanceOf: Histotype
Description: "Example of the histological type of the breast cancer tumor"
* status = ObservationStatusCS#final
* code = SCT#396984004 "Histologic feature of neoplasm"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#722524005
* effectiveDateTime = "1921-01-30"

Mapping: HistotypeToICHOM
Source:	Histotype
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: histotypemapping
Title: "Histotype to ICHOM set"
Description: "Mapping of the histologival type of tumor to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept -> "Histological type"
* effectiveDateTime -> "Date of histological diagnosis"

// GERLINE MUTATION
Profile: GermlineMutation
Parent: Observation 
Id: germline-mutation
Title: "Germline mutation"
Description: "Represents if the patient carries a germline mutation predisposing breast cancer"
* insert PublicationProfileRuleset
* code = SCT#55446002 "Genetic mutation"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from GermlineMutationVS (preferred)
* code and status and subject and valueCodeableConcept MS

Instance: GermlineMutationPatient147
InstanceOf: GermlineMutation
Description: "Example of whether a patient carries a germline mutation predisposing breast cancer"
* status = ObservationStatusCS#final
* code = SCT#55446002 "Genetic mutation"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#445180002 

Mapping: GermlineMutationToICHOM
Source:	GermlineMutation
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: GermlineMutationMapping
Title: "Germline mutation to ICHOM set"
Description: "Mapping of the germline mutation to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept -> "Germline mutation"

// TUMOR GRADING
Profile: TumorGrade
Parent: Observation 
Id: tumor-grade
Title: "Tumor grade"
Description: "Represents the grade of the breast cancer tumor"
* insert PublicationProfileRuleset
* code = SCT#371469007 "Histologic grade of neoplasm"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from GradingVS (required)
* code and status and subject and valueCodeableConcept MS

Instance: TumorGradePatient147
InstanceOf: TumorGrade
Description: "Example of the grade of a breast cancer tumor"
* status = ObservationStatusCS#final
* code = SCT#371469007 "Histologic grade of neoplasm"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#399415002

Mapping: TumorGradeToICHOM
Source:	TumorGrade
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: tumorgrademapping
Title: "Tumor grade to ICHOM set"
Description: "Mapping of the tumor grade to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept ->  "Tumor grade"

//INVASION GRADE
Profile: InvasionGrade
Parent: Observation 
Id: invasion-grade
Title: "Invasion grade"
Description: "Represents the tumor grade of DCIS component of the breast cancer tumor"
* insert PublicationProfileRuleset
* code = SCT#371469007 "Histologic grade of neoplasm"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from GradingVS (required)
* code and status and subject and valueCodeableConcept MS

Instance: InvasionGradePatient147
InstanceOf: InvasionGrade
Description: "Example of the tumor grade of DCIS component of the breast cancer tumor"
* status = ObservationStatusCS#final
* code = SCT#371469007 "Histologic grade of neoplasm"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#399415002

Mapping: InvasionGradeToICHOM
Source:	InvasionGrade
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: Invasiongrademapping
Title: "Invasion grade to ICHOM set"
Description: "Mapping of the invasion grade to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept ->  "Invasion grade"

// TUMOR SIZE
Profile: TumorSize
Parent: Observation 
Id: sizeinvasivetumor
Title: "Size of invasive tumor"
Description: "Represents the size of the invasive tumor"
* insert PublicationProfileRuleset
* code = SCT#384630000 "Tumor size, invasive component"
* subject only Reference(BreastCancerPatient)
* value[x] only Quantity
* valueQuantity.unit = UCUM#mm "mm"
* code and status and subject and valueQuantity.value and valueQuantity.unit MS

Instance: TumorSizePatient147
InstanceOf: TumorSize
Description: "Example of the size of the invasive tumor of a patient with breast cancer"
* status = ObservationStatusCS#final
* code = SCT#384630000 "Tumor size, invasive component"
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value = 59
* valueQuantity.unit = UCUM#mm "mm"

Mapping: TumorSizeToICHOM
Source:	TumorSize
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: tumorsizemapping
Title: "Size of the invasive tumor to ICHOM set"
Description: "Mapping of the size of the invasive tumor to the ICHOM breast cancer PCOM set" 	
* valueQuantity.value -> "Size of the invasive tumor"

// LYMPH NODES RESECTED
Profile: LymphNodesResected
Parent: Observation 
Id: lymph-nodes-resected
Title: "Resected lymph nodes"
Description: "Represents the number of lymph nodes resected"
* insert PublicationProfileRuleset
* code = SCT#444025001 "Number of lymph nodes examined"
* subject only Reference(BreastCancerPatient)
* value[x] only Quantity
* code and status and subject and valueQuantity MS

Instance: LymphNodesResectedPatient147
InstanceOf: LymphNodesResected
Description: "Example of the number of resected lymph nodes in a patient with breast cancer"
* status = ObservationStatusCS#final
* code = SCT#444025001 "Number of lymph nodes examined"
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value = 11

Mapping: LymphNodesResectedToICHOM
Source:	LymphNodesResected
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: lymphnodesresectedmapping
Title: "Resected lymph nodes to ICHOM set"
Description: "Mapping of the resected lymph nodes to the ICHOM breast cancer PCOM set." 	
* valueQuantity.value ->  "Number lymph nodes resected"

// LYMPH NODES INVOLVED
Profile: LymphNodesInvolved
Parent: Observation 
Id: lymph-nodes-involved
Title: "Lymph nodes involved"
Description: "Represents the number of lymph nodes involved"
* insert PublicationProfileRuleset
* code = SCT#443527007 "Number of lymph nodes involved by malignant neoplasm"
* subject only Reference(BreastCancerPatient)
* value[x] only Quantity
* code and status and subject and valueQuantity MS

Instance: LymphNodesInvolvedPatient147
InstanceOf: LymphNodesInvolved
Description: "Example of the number of involved lymph nodes in a patient with breast cancer"
* status = ObservationStatusCS#final
* code = SCT#443527007 "Number of lymph nodes involved by malignant neoplasm"
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value[+] = 28

Mapping: LymphNodesInvolvedToICHOM
Source:	LymphNodesInvolved
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: lymphnodesinvolvedmapping
Title: "Involved lymph nodes to ICHOM set"
Description: "Mapping of the involved lymph nodes to the ICHOM breast cancer PCOM set." 	
* valueQuantity.value ->  "Lymph nodes involved"

// ER STATUS
Profile: ERStatus
Parent: Observation 
Id: er-status
Title: "Estrogen receptor status"
Description: "Represents if the estrogen receptor status is positive in a patient with breast cancer"
* insert PublicationProfileRuleset
* code = SCT#445028008 "Status of estrogen receptors of neoplasm"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from EstrogenStatusVS (required)
* code and status and subject and valueCodeableConcept MS

Instance: ERStatusPatient147
InstanceOf: ERStatus
Description: "Example of the estrogen receptor status in a patient with breast cancer"
* status = ObservationStatusCS#final
* code = SCT#445028008 "Status of estrogen receptors of neoplasm"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#416053008 "Estrogen receptor positive tumor"

Mapping: ERStatusToICHOM
Source:	ERStatus
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: erstatusmapping
Title: "ER status to ICHOM set"
Description: "Mapping of the estrogen receptor status to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept -> "Estrogen receptor status"

// PR STATUS
Profile: PRStatus
Parent: Observation 
Id: pr-status
Title: "Progesterone receptor status"
Description: "Represents if the progesterone receptor status is positive in a patient with breast cancer"
* insert PublicationProfileRuleset
* code = SCT#445029000 "Status of progesterone receptors of neoplasm"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from ProgesteroneStatusVS (required)
* code and status and subject and valueCodeableConcept MS

Instance: PRStatusPatient147
InstanceOf: PRStatus
Description: "Example of the progesterone receptor status in a patient with breast cancer"
* status = ObservationStatusCS#final
* code = SCT#445029000 "Status of progesterone receptors of neoplasm"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = NullFlavor#UNK "unknown"

Mapping: PRStatusToICHOM
Source:	PRStatus
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: prstatusmapping
Title: "PR status to ICHOM set"
Description: "Mapping of the progesterone receptor status to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept -> "Progesterone receptor status"

// HER STATUS
Profile: HERStatus
Parent: Observation 
Id: her-status
Title: "HER2 receptor status"
Description: "Represents if the human epidermal growth factor receptor 2 (HER2) receptor status is positive in a patient with breast cancer"
* insert PublicationProfileRuleset
* code = LNC#48676-1 "HER2 [Interpretation] in tissue"
* subject only Reference(BreastCancerPatient)
* value[x] only CodeableConcept 
* valueCodeableConcept from HER2ReceptorStatusVS (required)
* code and status and subject and valueCodeableConcept MS

Instance: HERStatusPatient147
InstanceOf: HERStatus
Description: "Example of the human epidermal growth factor receptor 2 (HER2) status in a patient with breast cancer"
* status = ObservationStatusCS#final
* code = LNC#48676-1 "HER2 [Interpretation] in tissue"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#431396003 "Human epidermal growth factor 2 negative carcinoma of breast"

Mapping: HERStatusToICHOM
Source:	HERStatus
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: herstatusmapping
Title: "HER status to ICHOM set"
Description: "Mapping of the human epidermal growth factor receptor 2 (HER2) status to the ICHOM breast cancer PCOM set" 	
* valueCodeableConcept -> "HER2 receptor status"

// Mammaprint score
Profile: MammaprintScore
Parent: Observation 
Id: mammaprint-score
Title: "Mammaprint score"
Description: "Represents the mammaprintscore on a scale of 0.000 to 1.000"
* insert PublicationProfileRuleset
* code = MolecularProfilingCodeSystem#mammaprint "Mammaprint Score"
* subject only Reference(BreastCancerPatient)
* value[x] only Quantity
* code and status and subject and valueQuantity MS

Instance: MammaprintPatient147
InstanceOf: MammaprintScore
Description: "Example of the mammaprint score"
* status = ObservationStatusCS#final
* code = MolecularProfilingCodeSystem#mammaprint "Mammaprint Score"
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value = 0.761854476345979

Mapping: MammaprintToICHOM
Source:	MammaprintScore
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: Mammaprintmapping
Title: "Mammaprint score to ICHOM set"
Description: "Mapping of the mammaprint score to the ICHOM breast cancer PCOM set" 	
* code -> "Molecular Profiling"
* valueQuantity -> "Mammaprint Score"

// Oncotype score
Profile: OncotypeScore
Parent: Observation 
Id: oncotype-score
Title: "Oncotype Score"
Description: "Represents the oncotype score on a scale of 0 to 100"
* code = MolecularProfilingCodeSystem#oncotype "Oncotype Score" 
* insert PublicationProfileRuleset
* subject only Reference(BreastCancerPatient)
* value[x] only Quantity
* code and status and subject and valueQuantity MS

Instance: OncotypePatient147
InstanceOf: OncotypeScore
Description: "Example of the oncotype score"
* status = ObservationStatusCS#final
* code = MolecularProfilingCodeSystem#oncotype "Oncotype Score" 
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value = 92

Mapping: OncotypeToICHOM
Source:	OncotypeScore
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: Oncotypescoremapping
Title: "Oncotype score to ICHOM set"
Description: "Mapping of the Oncotype score to the ICHOM breast cancer PCOM set" 	
* code -> "Molecular Profiling"
* valueQuantity -> "Oncotype score"

// Endopredict Score
Profile: EndopredictonScore
Parent: Observation 
Id: endopredicton-score
Title: "Endopredict score"
Description: "Represents the endopredict score on a scale of 1.1 to 6.2"
* insert PublicationProfileRuleset
* code = MolecularProfilingCodeSystem#endopredict "Endopredict Score" 
* subject only Reference(BreastCancerPatient)
* value[x] only Quantity
* code and status and subject and valueQuantity MS

Instance: EndopredictonPatient147
InstanceOf: EndopredictonScore
Description: "Example of the endopredict score"
* status = ObservationStatusCS#final
* code = MolecularProfilingCodeSystem#endopredict "Endopredict Score" 
* subject = Reference(BreastCancerPatient147)
* valueQuantity.value = 1.86494098478133

Mapping: EndopredictonToICHOM
Source:	EndopredictonScore
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: Endopredictonmapping
Title: "Endopredict score to ICHOM set"
Description: "Mapping of the endopredict score to the ICHOM breast cancer PCOM set" 	
* code -> "Molecular Profiling"
* valueQuantity -> "Endopredict Score"



---

// File: input/fsh/Profiles clinical datapoints/TumorStaging.fsh

Profile: BreastCancerStageGroup
Id: breast-cancer-stage-group
Parent: Observation
Title: "Cancer Stage Group"
Description: "A staging system to describe the amount and spread of breast cancer in a patient's body, using TNM staging (per AJCC 8th Ed.). This profile is in alignment with the mCODE TNM Stage Group Profile."
* insert PublicationProfileRuleset
* code from TNMStageGroupVS (required)
* subject only Reference(BreastCancerPatient)
* code and subject and hasMember MS
* hasMember only Reference(Observation)
* hasMember ^slicing.discriminator.type = #pattern  
* hasMember ^slicing.discriminator.path = "$this.resolve().code"
* hasMember ^slicing.rules = #open
* hasMember ^slicing.description = "Slicing based on referenced resource code attribute."
* hasMember contains
    TNMPrimaryTumorStage 0..1 MS and
    TNMRegionalNodalStage 0..1 MS and
    TNMDistantMetastases 0..1 MS
* hasMember[TNMPrimaryTumorStage] only Reference(TNMPrimaryTumorStage)
* hasMember[TNMPrimaryTumorStage] ^short = "TNM Primary Tumor Stage"
* hasMember[TNMPrimaryTumorStage] ^definition = "Represents the stage of the primary tumor (per AJCC 8th Ed.)"
* hasMember[TNMRegionalNodalStage] only Reference(TNMRegionalNodalStage)
* hasMember[TNMRegionalNodalStage] ^short = "TNM Regional Nodal Stage"
* hasMember[TNMRegionalNodalStage] ^definition = "Represents the presence or absence of metastases in regional lymph nodes (per AJCC 8th Ed.)"
* hasMember[TNMDistantMetastases] only Reference(TNMDistantMetastases)
* hasMember[TNMDistantMetastases] ^short = "TNM Distant Metastases"
* hasMember[TNMDistantMetastases] ^definition = "Represents the extent of a tumor metastasis in remote anatomical locations (per AJCC 8th Ed.)"

Instance: ClinicalTNMStagePatient147
InstanceOf: BreastCancerStageGroup
Description: "Example showing TNM staging in patient with breast cancer"
* status = #final "final"
* code = LNC#21908-9 "Stage group.clinical Cancer"
* subject = Reference(BreastCancerPatient147)
* hasMember[+] = Reference(ClinicalTumorStagePatient147)
* hasMember[+] = Reference(ClinicalNodalStagePatient147)
* hasMember[+] = Reference(ClinicalMetastasesPatient147)

Instance: PathologicalTNMStagePatient147
InstanceOf: BreastCancerStageGroup
Description: "Example showing TNM staging in patient with breast cancer"
* status = #final "final"
* code = LNC#21902-2 "Stage group.pathology Cancer"
* subject = Reference(BreastCancerPatient147)
* hasMember[+] = Reference(PathologicalTumorStagePatient147)
* hasMember[+] = Reference(PathologicalNodalStagePatient147)
* hasMember[+] = Reference(PathologicalMetastasesPatient147)

// TNM TUMOR STAGE
Profile: TNMPrimaryTumorStage
Id: tnm-primary-tumor-stage
Parent: Observation
Title: "TNM Primary Tumor Stage"
Description: "Represents the stage of the primary tumor (per AJCC 8th Ed.). This profile is in alignment with mCODE TNM Primary Tumor Category Profile."
* insert PublicationProfileRuleset
* code = SCT#385356007 "Tumor stage finding"
* subject only Reference(BreastCancerPatient)
* subject ^definition = "The patient associated with staging data"
* value[x] only CodeableConcept 
* valueCodeableConcept from TNMPrimaryTumorVS (required)
* focus only Reference(PrimaryBreastCancerCondition)
* code and status and subject and valueCodeableConcept and focus MS

Instance: ClinicalTumorStagePatient147
InstanceOf: TNMPrimaryTumorStage
Description: "Extended example: example showing clinical TNM staging (T)"
* status = #final "final"
* code = SCT#385356007 "Tumor stage finding"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#1228888009 "American Joint Committee on Cancer cTis(Paget)"
* focus = Reference(PrimaryBreastCancerPatient147)

Instance: PathologicalTumorStagePatient147
InstanceOf: TNMPrimaryTumorStage
Description: "Extended example: example showing patholgical TNM staging (T)"
* status = #final "final"
* code = SCT#385356007 "Tumor stage finding"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#1228956002 "American Joint Committee on Cancer pTis(Paget)"
* focus = Reference(PrimaryBreastCancerPatient147)

Mapping: TNMPrimaryTumorStageToICHOM
Source:	TNMPrimaryTumorStage
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: TNMPrimaryTumorStageMapping
Title: "TNM primary tumor stage to ICHOM set"
Description: "Mapping of the TNM primary tumor stage to the ICHOM breast cancer PCOM set." 	
* valueCodeableConcept -> "Clinical or pathological tumor stage"

// TNM NODAL STAGE
Profile: TNMRegionalNodalStage
Id: tnm-regional-nodes-stage
Parent: Observation
Title: "TNM Regional Nodal Stage"
Description: "Represents the presence or absence of metastases in regional lymph nodes (per AJCC 8th Ed.). This profile is in alignment with mCODE TNM Regional Nodes Category Profile."
* insert PublicationProfileRuleset
* code = SCT#385382003 "Node stage finding"
* subject only Reference(BreastCancerPatient)
* subject ^definition = "The patient associated with staging data."
* value[x] only CodeableConcept 
* valueCodeableConcept from TNMRegionalNodesVS (required)
* focus only Reference(PrimaryBreastCancerCondition)
* code and status and subject and valueCodeableConcept and focus MS

Instance: ClinicalNodalStagePatient147
InstanceOf: TNMRegionalNodalStage
Description: "Extended example: example showing clinical TNM staging (N)"
* status = #final "final"
* code = SCT#385382003 "Node stage finding"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#1229973008 "American Joint Committee on Cancer cN1"
* focus = Reference(PrimaryBreastCancerPatient147)

Instance: PathologicalNodalStagePatient147
InstanceOf: TNMRegionalNodalStage
Description: "Extended example: example showing patholgical TNM staging (N)"
* status = #final "final"
* code = SCT#385382003 "Node stage finding"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#1229947003 "American Joint Committee on Cancer pN0"
* focus = Reference(PrimaryBreastCancerPatient147)

Mapping: TNMRegionalNodalStageToICHOM
Source:	TNMRegionalNodalStage
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: TNMRegionalNodalStageMapping
Title: "TNM regional nodal stage to ICHOM set"
Description: "Mapping of the TNM regional nodal stage to the ICHOM breast cancer PCOM set." 	
* valueCodeableConcept -> "Clinical or pathological nodal stage"

// TNM DISTANT METASTASES
Profile: TNMDistantMetastases
Id: tnm-distant-metastases
Parent: Observation
Title: "TNM Distant Metastases"
Description: "Represents the extent of a tumor metastasis in remote anatomical locations (per AJCC 8th Ed.). This profile is in alignment with mCODE TNM Distant Metastases Category Profile."
* insert PublicationProfileRuleset
* code = SCT#385380006 "Metastasis category finding"
* subject only Reference(BreastCancerPatient)
* subject ^definition = "The patient associated with staging data."
* value[x] only CodeableConcept 
* valueCodeableConcept from TNMDistantMetastasesVS (required)
* focus only Reference(PrimaryBreastCancerCondition)
* code and status and subject and valueCodeableConcept and focus MS

Instance: ClinicalMetastasesPatient147
InstanceOf: TNMDistantMetastases
Description: "Extended example: example showing clinical TNM staging (M)"
* status = #final "final"
* code = SCT#385380006 "Metastasis category finding"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#1229903009 "American Joint Committee on Cancer cM1"
* focus = Reference(PrimaryBreastCancerPatient147)

Instance: PathologicalMetastasesPatient147
InstanceOf: TNMDistantMetastases
Description: "Extended example: example showing patholgical TNM staging (M)"
* status = #final "final"
* code = SCT#385380006 "Metastasis category finding"
* subject = Reference(BreastCancerPatient147)
* valueCodeableConcept = SCT#1229916009 "American Joint Committee on Cancer pM1"
* focus = Reference(PrimaryBreastCancerPatient147)

Mapping: TNMDistantMetastasesToICHOM
Source:	TNMDistantMetastases
Target: "https://connect.ichom.org/patient-centered-outcome-measures/breast-cancer"
Id: TNMDistantMetastasesMapping
Title: "TNM distant metastases to ICHOM set"
Description: "Mapping of the TNM distant metastases to the ICHOM breast cancer PCOM set." 	
* valueCodeableConcept -> "Clinical or pathological  distant metastasis"


---

// File: input/fsh/publication-rulesets.fsh

RuleSet: PublicationInstanceRuleset
* status = #active
* experimental = true
* publisher = "ICHOM"

RuleSet: PublicationProfileRuleset
* ^version = "5.1"
* ^status = #active
* ^experimental = true
* ^publisher = "ICHOM"

RuleSet: CodeSystemRuleset
* ^version = "5.1"
* ^status = #active
* ^experimental = false
* ^publisher = "ICHOM"
* ^caseSensitive = true
* ^content = #complete

RuleSet: ValuesetRuleset
* ^version = "5.1"
* ^status = #active
* ^experimental = false
* ^publisher = "ICHOM"

RuleSet: ExtensionContext(path)
* ^context[+].type = #element
* ^context[=].expression = "{path}"


---

// File: input/fsh/Questionnaires/Clinical-Response-01-Baseline.fsh

Instance: ClinicalResponseBaseline
InstanceOf: Questionnaire
Usage: #definition
Description: "Clinical response questionnaire at baseline (first doctors' visit)"
* insert PublicationInstanceRuleset

* name = "ClinicalResponseBaseline"
* title = "Clinical response questionnaire at baseline"
* status = #draft
* extension[0]
  * url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext"
  //
  // Launch Context: always patient
  //
  * extension[0]
    * url = "name"
    * valueCoding
      * code = #patient
      * system = "http://hl7.org/fhir/uv/sdc/CodeSystem/launchContext"
      * display = "Patient"
  * extension[1]
    * url = "type"
    * valueCode = #Patient
  * extension[2]
    * url = "description"
    * valueString = "Patient information to pre-populate the form with"

// GROUP 1 - GENERAL INFORMATION (ON ALL FORMS)
* item[+]
  * linkId = "General-Information-Clinical"
  * type = #group
  * text = "General information"
  * required = true

  * item[+]
//    * linkId = "N/A-Clinical"
    * linkId = "NA-Clinical"
    * type = #string 
    * text = "What is the patient's medical record number?"
    * required = true
    * extension[+]
      * url = InitialExpressionEx
      * valueExpression[+]
        * language = #text/fhirpath
        * expression = "%patient.id"

  * item[+]
    * linkId = "LastName-Clinical"
    * type = #string
    * text = "What is the patient's last name?"
    * required = true
    * extension[+]
      * url = InitialExpressionEx
      * valueExpression[+]
        * language = #text/fhirpath
        * expression = "%patient.name.first().family.first()"

// GROUP 2 - DEMOGRAPHICS
* item[+]
  * linkId = "Demographics"
  * type = #group
  * text = "Demographic factors"
  * required = true

  * item[+]
    * linkId = "Sex"
    * type = #choice
    * text = "Indicate the sex of the patient at birth:"
    * answerValueSet = Canonical(AdministrativeGenderVS)
    * required = true
    * extension[+]
      * url = VariableEx
      * valueExpression[+]
        * name = "expandedGender"
        * language = #application/x-fhir-query
        * expression = "ValueSet/$expand?url=http://hl7.org/fhir/ValueSet/administrative-gender"
    * extension[+]
      * url = InitialExpressionEx
      * valueExpression[+]
        * language = #text/fhirpath
        * expression = "%expandedGender.expansion.contains.where(code=%patient.gender)"

  * item[+]
    * linkId = "YearOfBirth"
    * type = #integer
    * text = "In what year was the patient born?"
    * required = true
    * maxLength = 4
    * extension[+]
      * url = InitialExpressionEx
      * valueExpression[+]
        * language = #text/fhirpath
        * expression = "%patient.birthDate.substring(0,4)"

// GROUP 3 - CLINICAL FACTORS
* item[+]
  * linkId = "Clinical-Factors"
  * type = #group
  * text = "Clinical factors"
  * required = true

  * item[+]
    * linkId = "Height"
    * type = #quantity
    * text = "Indicate the patient's body height"
    * required = true
    * code[+] = LNC#8302-2 "Body height"
    * extension[+]
      * url = ObservationLinkPeriodEx // limit the observation fetching to (300 years before current date)
      * valueDuration[+]
        * value = 300
        * system = UCUM
        * code = #a  // years
    * extension[+]
      * url = ObservationExtractEx
      * valueBoolean = true
    * extension[+]
      * url = UnitOptionEx
      * valueCoding[+] = UCUM#cm "cm"
    * extension[+]
      * url = MinQuantityEx
      * valueQuantity[+]
        * value = 10
        * system = UCUM
        * code = #cm
    * extension[+]
      * url = MaxQuantityEx
      * valueQuantity[+]
        * value = 320
        * system = UCUM
        * code = #cm
    * extension[+]
      * url = UnitOptionEx
      * valueCoding[+] = UCUM#[in_i] "[in_i]"
    * extension[+]
      * url = MinQuantityEx
      * valueQuantity[+]
        * value = 3.94
        * system = UCUM
        * code = #[in_i]
    * extension[+]
      * url = MaxQuantityEx
      * valueQuantity[+]
        * value = 126
        * system = UCUM 
        * code = #[in_i]

  // Weight, as quantity
  * item[+]
    * type = #quantity
    * linkId = "Weight"
    * text = "Indicate the patient's weight."
    * required = true
    * code[+] = LNC#29463-7 "Body weight"
    * code[+] = LNC#3141-9 "Body weight Measured"
    * code[+] = SCT#27113001 "Body weight"
    * extension[+]
      * url = ObservationLinkPeriodEx  // limit the observation fetching to (300 years before current date)
      * valueDuration[+]
        * value = 300
        * system = UCUM
        * code = #a // years
    * extension[+]
      * url = ObservationExtractEx
      * valueBoolean = true
    * extension[+]
      * url = UnitOptionEx
      * valueCoding[+] = UCUM#kg "kg"
    * extension[+]
      * url = MinQuantityEx
      * valueQuantity[+]
        * value = 0.1
        * system = UCUM
        * code = #kg
    * extension[+]
      * url = MaxQuantityEx
      * valueQuantity[+]
        * value = 750
        * system = UCUM
        * code = #kg
    * extension[+]
      * url = UnitOptionEx
      * valueCoding[+] = UCUM#[lb_av] "[lb_av]"
    * extension[+]
      * url = MinQuantityEx
      * valueQuantity[+]
        * value = 0.22
        * system = UCUM
        * code = #[lb_av]
    * extension[+]
      * url = MaxQuantityEx
      * valueQuantity[+]
        * value = 1653.47
        * system = UCUM 
        * code = #[lb_av]

  * item[+]
    * linkId = "LATERAL"
    * type = #choice
    * text = "Indicate the laterality of breast cancer"
    * answerValueSet = Canonical(LateralityVS)
    * required = true

  * item[+]
    * linkId = "FIRSTBC"
    * type = #choice
    * text = "Indicate if this is the first breast cancer"
    * answerValueSet = Canonical(NoYesUnknownVS)
    * required = true

  * item[+]
    * linkId = "NewBC"
    * type = #choice
    * text = "Indicate if this is a new cancer on contralateral or ipsilateral breast"
    * answerValueSet = Canonical(LateralityNewCancerVS)
    * enableWhen[+]
      * question = "FIRSTBC"
      * operator = #=
      * answerCoding = YesNoUnkCS#N
    * required = true

   // GROUP 4 - TUMOR FACTORS
* item[+]
  * linkId = "Tumor-Factors"
  * type = #group
  * text = "Tumor factors"
  * required = true

  * item[+]
    * linkId = "HistologicalDateKnown"
    * type = #boolean
    * text = "Is the date of histological diagnosis known?"
    * required = true

  * item[+]
    * linkId = "HistologicalDiagnosisDate"
    * type = #date
    * text = "Indicate the initial date of histological diagnosis:"
    * required = true
    * insert enableWhenTrue(HistologicalDateKnown)

  * item[+]
    * linkId = "HISTOTYPE"
    * type = #choice
    * text = "Indicate the histologic type of the tumor (select all that apply)"
    * answerValueSet = Canonical(HistologicalTypeVS)
    * required = true
    * repeats = true

  * item[+]
    * linkId = "MUTBC"
    * type = #choice
    * text = "Indicate if the patient carries a germline mutation predisposing breast cancer"
    * answerValueSet = Canonical(GermlineMutationVS)
    * required = true
    * repeats = true

  * item[+]
    * linkId = "GRADEINV"
    * type = #choice
    * text = "Indicate the grade of the invasive component of tumor"
    * answerValueSet = Canonical(GradingVS)
    * required = true

  * item[+]
    * linkId = "GRADEDCIS"
    * type = #choice
    * text = "Indicate the tumor grade of DCIS component of tumor"
    * answerValueSet = Canonical(GradingVS)
    * required = true

  * item[+]
    * linkId = "TNMCT_BREAST"
    * type = #choice
    * text = "Indicate the clinical tumor stage (per AJCC 8th Ed.):"
    * answerValueSet = Canonical(TNMPrimaryTumorVS)
    * required = true

  * item[+]
    * linkId = "TNMCN_BREAST"
    * type = #choice
    * text = "Indicate the clinical nodal stage (per AJCC 8th Ed.):"
    * answerValueSet = Canonical(TNMRegionalNodesVS)
    * required = true

  * item[+]
    * linkId = "TNMCM_BREAST"
    * type = #choice
    * text = "Indicate the clinical distant metastasis (per AJCC 8th Ed.):"
    * answerValueSet = Canonical(TNMDistantMetastasesVS)     
    * required = true

  * item[+]
    * linkId = "ERSTATUS"
    * type = #choice
    * text = "Indicate if the estrogen receptor status is positive:"
    * answerValueSet = Canonical(EstrogenStatusVS)
    * required = true

  * item[+]
    * linkId = "PRSTATUS"
    * type = #choice
    * text = "Indicate if the progesterone receptor status is positive:"
    * answerValueSet = Canonical(ProgesteroneStatusVS)
    * required = true

  * item[+]
    * linkId = "HER2STATUS"
    * type = #choice
    * text = "Indicate if the HER2 receptor status is positive:"
    * answerValueSet = Canonical(HER2ReceptorStatusVS)
    * required = true

  * item[+]
    * linkId = "MolecularProfiling"
    * type = #choice
    * text = "Indicate if a molecular profiling tool was used. If so, which one?" 
    * answerValueSet = Canonical(MolecularProfilingStatusVS)
    * required = true

  * item[+]
    * linkId = "Mammaprint"
    * type = #decimal
    * text = "Indicate the mammaprint score on a scale of 0.000 to 1.000"
    * insert enableWhenSMolecularProfiling(#mammaprint)
    * required = true

  * item[+]
    * linkId = "Oncotype"
    * type = #decimal
    * text = "Indicate the oncotype score on a scale of 0 to 100"
    * insert enableWhenSMolecularProfiling(#oncotype)
    * required = true

  * item[+]
    * linkId = "Endopredict"
    * type = #decimal
    * text = "Indicate the endopredict score on a scale of 1.1 to 6.2"
    * insert enableWhenSMolecularProfiling(#endopredict)
    * required = true

// Group 5 - TREATMENT VARIABLES
* item[+]
  * linkId = "Treatment-Variables"
  * type = #group
  * text = "Treatment variables"
  * required = true

  * item[+]
    * linkId = "MultMeet"
    * type = #choice
    * text = "Indicate if a multidisciplinary meeting was conducted"
    * answerValueSet = Canonical(NoYesUnknownVS)
    * required = true

  * item[+]
    * linkId = "MultRecTreatments"
    * type = #choice   
    * text = "Which treatments did the multidisciplinary team recommend (select all that apply)?"
    * answerValueSet = Canonical(RecommendedTreatmentTypeVS)
    * enableWhen[+]
      * question = "MultMeet"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y
    * required = true
    * repeats = true










---

// File: input/fsh/Questionnaires/Clinical-Response-02-6-Months.fsh

Instance: ClinicalResponseSixMonths
InstanceOf: Questionnaire
Usage: #definition
Description: "Clinical response questionnaire at 6 months post-treatment follow-up"
* insert PublicationInstanceRuleset

* name = "ClinicalResponseSixMonths"
* title = "Clinical response at 6 months post-treatment follow-up"
* status = #draft

// GROUP 1 - GENERAL INFORMATION (ON ALL FORMS)
* item[+]
  * linkId = "General-Information-Clinical"
  * type = #group
  * text = "General information"
  * required = true

  * item[+]
//    * linkId = "N/A-Clinical"
    * linkId = "NA-Clinical"
    * type = #string 
    * text = "What is the patient's medical record number?"
    * required = true

  * item[+]
    * linkId = "LastName-Clinical"
    * type = #string
    * text = "What is the patient's last name?"
    * required = true

// GROUP 2 - TUMOR FACTORS
* item[+]
  * linkId = "Tumor-Factors"
  * type = #group
  * text = "Tumor factors"
  * required = true
  
  * item[+]
    * linkId = "received_surgery"
    * type = #boolean
    * text = "Has the patient received surgery?"
    * required = true

  * item[+]
    * linkId = "TNMPT_BREAST"
    * type = #choice
    * text = "Indicate the pathological tumor stage (per AJCC 8th Ed.)"
    * answerValueSet = Canonical(TNMPrimaryTumorVS)
    * insert enableWhenTrue(received_surgery)
    * required = true

  * item[+]
    * linkId = "TNMPN_BREAST"
    * type = #choice
    * text = "Indicate the pathological nodal stage (per AJCC 8th Ed.)"
    * answerValueSet = Canonical(TNMRegionalNodesVS)
    * insert enableWhenTrue(received_surgery)
    * required = true

  * item[+]
    * linkId = "TNMPM_BREAST"
    * type = #choice
    * text = "Indicate the pathological distant metastasis (per AJCC 8th Ed.)"
    * answerValueSet = Canonical(TNMDistantMetastasesVS)
    * insert enableWhenTrue(received_surgery)
    * required = true

  * item[+]
    * linkId = "SIZEINV"
    * type = #integer
    * text = "Indicate size of invasive component of tumor (in mm)"
    * insert enableWhenTrue(received_surgery)
    * required = true

  * item[+]
    * linkId = "NumLymphNodesResect"
    * type = #integer
    * text = "Indicate the number of lymph nodes resected"
    * insert enableWhenTrue(received_surgery)
    * required = true

  * item[+]
    * linkId = "LYMPHINV_BREAST"
    * type = #integer
    * text = "Indicate the number of lymph nodes involved according to the TNM stage AJCC 8th Ed."
    * insert enableWhenTrue(received_surgery)
    * required = true

// GROUP 3 - TREATMENT VARIABLES 
* item[+]
  * linkId = "Treatment-Variables"
  * type = #group
  * text = "Treatment Variables"
  * required = true

  * item[+]
    * linkId = "TREATMENT_BREAST"
    * type = #choice
    * text = "Indicate whether the patient received one of the following treatment during the last year (select all that apply)"
    * answerValueSet = Canonical(TreatmentTypeVS)
    * required = true
    * repeats = true

// Breast surgery 
  * item[+]
    * linkId = "SURGERY_BREAST"
    * type = #choice
    * text = "Indicate whether the patient received surgery during the last year"
    * answerValueSet = Canonical(BreastSurgeryTypeVS)
    * insert enableWhenTreatmentSCT(SCT#387713003) //Surgical procedure
    * required = true

  * item[+]
    * linkId = "SurgeryDateKnown"
    * type = #boolean
    * text = "Is the date of surgery known?"
    * insert enableWhenTreatmentSCT(SCT#387713003) //Surgical procedure
    * required = true

  * item[+]
    * linkId = "SurgeryDate"
    * type = #date
    * text = "Please provide the date of surgery"
    * insert enableWhenTrue(SurgeryDateKnown)
    * required = true

// Axilla surgery
  * item[+]
    * linkId = "SURGERYAX"
    * type = #choice
    * text = "Indicate whether the patient received surgery to the axilla"
    * answerValueSet = Canonical(AxillaSurgeryVS) 
    * insert enableWhenTreatmentSCT(SCT#699455008) // Operative procedure on axilla
    * required = true

  * item[+]
    * linkId = "SURGERYAXDATE-Known"
    * type = #boolean
    * text = "Is the date of surgery to the axilla known?"
    * insert enableWhenTreatmentSCT(SCT#699455008) // Operative procedure on axilla
    * required = true

  * item[+]
    * linkId = "SURGERYAXDATE"
    * type = #date
    * text = "Please provide the date of surgery to the axilla"
    * insert enableWhenTrue(SURGERYAXDATE-Known)
    * required = true

// Axilla clearance
  * item[+]
    * linkId = "SURGERYAX2"
    * type = #choice
    * text = "Indicate whether the patient received axillary clearance due to lymph node involvement after sentinel lymph node biopsy during the last year"
    * answerValueSet = Canonical(NoYesUnknownVS)
    * enableWhen[+]
      * question = "SURGERYAX"
      * operator = #=
      * answerCoding = SCT#396487001 "Sentinel lymph node biopsy"
    * enableWhen[+]
      * question = "SURGERYAX"
      * operator = #=
      * answerCoding = SCT#234262008 "Excision of axillary lymph node"
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "SURGERYAX2DATE-Known"
    * type = #boolean
    * text = "Is the date of axillary clearance known?"
    * enableWhen[+]
      * question = "SURGERYAX2"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y
    * required = true

  * item[+]
    * linkId = "SURGERYAX2DATE"
    * type = #date
    * text = "Please provide the date of axillary clearance"
    * insert enableWhenTrue(SURGERYAX2DATE-Known)
    * required = true

// Reconstruction surgery
  * item[+]
    * linkId = "RECONSTRUCTION_DELAY"
    * type = #choice
    * text = "Indicate whether the patient received a delayed reconstruction"
    * answerValueSet = Canonical(NoYesUnknownVS) 
    * enableWhen[+]
      * question = "SURGERY_BREAST"
      * operator = #=
      * answerCoding = BreastSurgeryTypesCodeSystem#mastectomy-without-immediate-reconstruction // Mastectomy without immediate reconstruction
    * required = true

  * item[+]
    * linkId = "SURGERY_RECONSTRUCTION"
    * type = #choice
    * text = "Indicate what type of reconstruction the patient received"
    * answerValueSet = Canonical(ReconstructionTypeVS) 
    * enableWhen[+]
      * question = "SURGERY_BREAST"
      * operator = #=
      * answerCoding = BreastSurgeryTypesCodeSystem#mastectomy-without-immediate-reconstruction // Mastectomy without immediate reconstruction
    * enableWhen[+]
      * question = "SURGERY_BREAST"
      * operator = #=
      * answerCoding = BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction // Mastectomy with reconstruction
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "ImplantReconstruction"
    * type = #choice
    * text = "Indicate the location of the implant"
    * answerValueSet = Canonical(ImplantLocationVS) 
    * enableWhen[+]
      * question = "SURGERY_RECONSTRUCTION"
      * operator = #!=
      * answerCoding = ReconstructionTypeCodeSystem#autologous
    * enableWhen[+]
      * question = "SURGERY_RECONSTRUCTION"
      * operator = #!=
      * answerCoding = NullFlavor#UNK
    * enableBehavior = #all
    * required = true

  * item[+]
    * linkId = "RECONSTRUCTDATE-Known"
    * type = #boolean
    * text = "Is the date of the delayed reconstruction known?"
    * enableWhen[+]
      * question = "RECONSTRUCTION_DELAY"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y
    * required = true

  * item[+]
    * linkId = "RECONSTRUCTDATE"
    * type = #date
    * text = "Please provide the date of delayed reconstruction"
    * insert enableWhenTrue(RECONSTRUCTDATE-Known)
    * required = true

// Radiotherapy
  * item[+]
    * linkId = "RADIOTX_BREAST"
    * type = #choice
    * text = "What was the intent of radiotherapy"
    * answerValueSet = Canonical(TherapyIntentVS)
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true
    * repeats = true

  * item[+]
    * linkId = "RADIOTXTYPE_BREAST"
    * type = #choice
    * text = "Indicate location/type of radiotherapy"
    * answerValueSet = Canonical(LocationRadiotherapyVS)
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true

  * item[+]
    * linkId = "RadioTxStartDate-Known"
    * type = #boolean
    * text = "Is the start date of radiotherapy known?"
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true

  * item[+]
    * linkId = "RadioTxStartDate"
    * type = #date
    * text = "Please provide the start date of radiotherapy"
    * insert enableWhenTrue(RadioTxStartDate-Known)
    * required = true

  * item[+]
    * linkId = "RadioTxStopDate-Known"
    * type = #boolean
    * text = "Is the stop date of radiotherapy known?"
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true

  * item[+]
    * linkId = "RadioTxStopDate"
    * type = #date
    * text = "Please provide the stop date of radiotherapy"
    * insert enableWhenTrue(RadioTxStopDate-Known)
    * required = true

// Chemotherapy
  * item[+]
    * linkId = "CHEMOTXINTENT"
    * type = #choice
    * text = "Indicate the intent of chemotherapy"
    * answerValueSet = Canonical(TherapyIntentVS)
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "CHEMOTXTYPE_BREAST"
    * type = #choice
    * text = "Indicate the type of chemotherapy (select all that apply)"
    * answerValueSet = Canonical(ChemoTherapyTypeVS)
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true
    * repeats = true

  * item[+]
    * linkId = "ChemoTxStartDate-Known"
    * type = #boolean
    * text = "Is the start date of chemotherapy known?"
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "ChemoTxStartDate"
    * type = #date
    * text = "Please provide the start date of chemotherapy"
    * insert enableWhenTrue(ChemoTxStartDate-Known)
    * required = true

  * item[+]
    * linkId = "ChemoTxStopdate-Known"
    * type = #boolean
    * text = "Is the stop date of chemotherapy known?"
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "ChemoTxStopdate"
    * type = #date
    * text = "Please provide the stop date of chemotherapy"
    * insert enableWhenTrue(ChemoTxStopdate-Known)
    * required = true

// Hormonal therapy 
  * item[+]
    * linkId = "HORMONTX_BREAST"
    * type = #choice
    * text = "Indicate the intent of hormonal therapy"
    * answerValueSet = Canonical(TherapyIntentVS)
    * insert enableWhenTreatmentSCT(SCT#169413002) //Hormone therapy
    * required = true

  * item[+]
    * linkId = "HORMONTXTYPE"
    * type = #choice
    * text = "Indicate the type of hormonal therapy (select all that apply)"
    * answerValueSet = Canonical(HormonalTherapyTypeVS)
    * insert enableWhenTreatmentSCT(SCT#169413002) // Hormone therapy
    * required = true
    * repeats = true

  * item[+]
    * linkId = "HORMONTXSTARTDATE-Known"
    * type = #boolean
    * text = "Is the start date of hormonal therapy known?"
    * insert enableWhenTreatmentSCT(SCT#169413002) // Hormone therapy
    * required = true

  * item[+]
    * linkId = "HORMONTXSTARTDATE"
    * type = #date
    * text = "Please provide the start date of hormonal therapy"
    * insert enableWhenTrue(HORMONTXSTARTDATE-Known)
    * required = true

  * item[+]
    * linkId = "HORMONTXSTOPDATE-Known"
    * type = #boolean
    * text = "Is the stop date of hormonal therapy known?"
    * insert enableWhenTreatmentSCT(SCT#169413002) // Hormone therapy
    * required = true

  * item[+]
    * linkId = "HORMONTXSTOPDATE"
    * type = #date
    * text = "Please provide the stop date of hormonal therapy, if applicable"
    * insert enableWhenTrue(HORMONTXSTOPDATE-Known)
    * required = true

// Targeted therapy
  * item[+]
    * linkId = "TARGETTX_BREAST"
    * type = #choice
    * text = "Indicate the type of targeted therapy"
    * answerValueSet = Canonical(TargetedTherapyVS)
    * insert enableWhenTreatment(#targeted-therapy) // Targeted therapy
    * required = true

  * item[+]
    * linkId = "TargetTxStartDate-Known"
    * type = #boolean
    * text = "Is the start date of targeted therapy known?"
    * insert enableWhenTreatment(#targeted-therapy) //Targeted therapy
    * required = true

  * item[+]
    * linkId = "TargetTxStartDate"
    * type = #date
    * text = "Please provide the start date of targeted therapy"
    * insert enableWhenTrue(TargetTxStartDate-Known) 
    * required = true

  * item[+]
    * linkId = "TargetTxStopDate-Known"
    * type = #boolean
    * text = "Is the stop date of targeted therapy known?"
    * insert enableWhenTreatment(#targeted-therapy) // Targeted therapy
    * required = true

  * item[+]
    * linkId = "TargetTxStopDate"
    * type = #date
    * text = "Please provide the stop date of targeted therapy"
    * insert enableWhenTrue(TargetTxStopDate-Known)
    * required = true
  
// Reoperations   
  * item[+]
    * linkId = "SURGERYPATIENT"
    * type = #choice
    * text = "Indicate if the patient has had one of the following re-operations since their surgery for breast cancer (select all that apply)"
    * answerValueSet = Canonical(ReoperationTypeVS)
    * required = true
    * repeats = true

  * item[+]
    * linkId = "SURGERYDATEPATIENT-Known"
    * type = #boolean
    * text = "Is the date of the reoperation known?"
    * enableWhen[+]
      * question = "SURGERYPATIENT"
      * operator = #!=
      * answerCoding = NullFlavor#UNK "unknown"
    * enableWhen[+]
      * question = "SURGERYPATIENT"
      * operator = #!=
      * answerCoding = SCT#373572006 "Clinical finding absent"
    * enableBehavior = #all
    * required = true

  * item[+]
    * linkId = "SURGERYDATEPATIENT"
    * type = #date
    * text = "Please provide the date of the reoperation"
    * insert enableWhenTrue(SURGERYDATEPATIENT-Known)
    * required = true

// GROUP 4 - DISUTILITY OF CARE
* item[+]
  * linkId = "DisutilityofCare"
  * type = #group
  * text = "Disutility of care"
  * required = true

// Reoperation
  * item[+]
    * linkId = "REOP_BREAST"
    * type = #choice
    * text = "Indicate if the patient has undergone a reoperation due to involved margins after primary surgery"
    * answerValueSet = Canonical(InvolvedMarginsReoperationTypeVS)
    * enableWhen[+]
      * question = "SURGERY_BREAST"
      * operator = #!=
      * answerCoding = NullFlavor#UNK
    * required = true

  * item[+]
    * linkId = "REOP_RECONSTRUCTION"
    * type = #choice
    * text = "What type of reconstruction did the patient receive during reoperation?"
    * answerValueSet = Canonical(ReconstructionTypeVS) 
    * enableWhen[+]
      * question = "REOP_BREAST"
      * operator = #=
      * answerCoding = BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction //Mastectomy with immediate reconstruction
    * required = true

  * item[+]
    * linkId = "REOPDATE_BREAST-Known"
    * type = #boolean
    * text = "Is the date of the reoperation due to positive margins known?"
    * enableWhen[+]
      * question = "REOP_BREAST"
      * operator = #!=
      * answerCoding = NullFlavor#UNK
    * required = true

  * item[+]
    * linkId = "REOPDATE_BREAST"
    * type = #date
    * text = "Provide the date of the reoperation due to positive margins"
    * insert enableWhenTrue(REOPDATE_BREAST-Known)
    * required = true

// Comlication
  * item[+]
    * linkId = "ComplicationImpact"
    * type = #choice
    * text = "What was the impact of the complication experienced by the patient"
    * answerValueSet = Canonical(ComplicationImpactVS)
    * enableWhen[+]
      * question = "TREATMENT_BREAST"
      * operator = #!=
      * answerCoding = TreatmentTypesCodeSystem#no-treatment
    * enableWhen[+]
      * question = "TREATMENT_BREAST"
      * operator = #!=
      * answerCoding = NullFlavor#UNK
    * enableBehavior = #all
    * required = true
    * repeats = true

  * item[+]
    * linkId = "ComplicationAttrTreatment"
    * type = #choice
    * text = "Indicate whether the complication is attributable to treatment"
    * answerValueSet = Canonical(NoYesUnknownVS)
    * enableWhen[+]
      * question = "ComplicationImpact"
      * operator = #!=
      * answerCoding = ComplicationImpactCodeSystem#no-complication  // No complication
    * enableWhen[+]
      * question = "ComplicationImpact"
      * operator = #!=
      * answerCoding = NullFlavor#UNK
    * enableBehavior = #all
    * required = true

  * item[+]
    * linkId = "COMPL_BREAST"
    * type = #choice
    * text = "Indicate the type of complication"
    * answerValueSet = Canonical(ComplicationTypeVS)
    * enableWhen[+]
      * question = "ComplicationAttrTreatment"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y
    * required = true


---

// File: input/fsh/Questionnaires/Clinical-Response-03-Annual-Follow-Up-2.fsh

Instance: ClinicalResponseAnnualUpdate
InstanceOf: Questionnaire
Usage: #definition
Description: "Clinical response questionnaire at annual post-treatment follow-up"
* insert PublicationInstanceRuleset

* name = "AnnualClinicalResponse"
* title = "Annual follow-up of clinical questionnaire response"
* status = #draft

// GROUP 1 - GENERAL INFORMATION (ON ALL FORMS)
* item[+]
  * linkId = "General-Information-Clinical"
  * type = #group
  * text = "General information"
  * required = true

  * item[+]
    * linkId = "NA-Clinical"
//    * linkId = "N/A-Clinical"
    * type = #string
    * text = "What is the patient's medical record number?"
    * required = true

  * item[+]
    * linkId = "LastName-Clinical"
    * type = #string
    * text = "What is the patient's last name?"
    * required = true

// GROUP 2 - TUMOR FACTORS
* item[+]
  * linkId = "Tumor-Factors"
  * type = #group
  * text = "Tumor factors"
  * required = true

  * item[+]
    * linkId = "MUTBC"
    * type = #choice
    * text = "Indicate if the patient carries a genetic mutation predisposing breast cancer"
    * answerValueSet = Canonical(GermlineMutationVS)
    * required = true
    * repeats = true

// GROUP 3 - TREATMENT VARIABLES 
* item[+]
  * linkId = "Treatment-Variables"
  * type = #group
  * text = "Treatment Variables"
  * required = true

  * item[+]
    * linkId = "TREATMENT_BREAST"
    * type = #choice
    * text = "Indicate whether the patient received one of the following treatment during the last year (select all that apply)"
    * answerValueSet = Canonical(TreatmentTypeVS)
    * required = true
    * repeats = true

// Breast surgery 
  * item[+]
    * linkId = "SURGERY_BREAST"
    * type = #choice
    * text = "Indicate whether the patient received surgery during the last year"
    * answerValueSet = Canonical(BreastSurgeryTypeVS)
    * insert enableWhenTreatmentSCT(SCT#387713003) //Surgical procedure
    * required = true

  * item[+]
    * linkId = "SurgeryDateKnown"
    * type = #boolean
    * text = "Is the date of surgery known?"
    * insert enableWhenTreatmentSCT(SCT#387713003) //Surgical procedure
    * required = true

  * item[+]
    * linkId = "SurgeryDate"
    * type = #date
    * text = "Please provide the date of surgery"
    * insert enableWhenTrue(SurgeryDateKnown)
    * required = true

// Axilla surgery
  * item[+]
    * linkId = "SURGERYAX"
    * type = #choice
    * text = "Indicate whether the patient received surgery to the axilla"
    * answerValueSet = Canonical(AxillaSurgeryVS) 
    * insert enableWhenTreatmentSCT(SCT#699455008) // Operative procedure on axilla
    * required = true

  * item[+]
    * linkId = "SURGERYAXDATE-Known"
    * type = #boolean
    * text = "Is the date of surgery to the axilla known?"
    * insert enableWhenTreatmentSCT(SCT#699455008) // Operative procedure on axilla
    * required = true

  * item[+]
    * linkId = "SURGERYAXDATE"
    * type = #date
    * text = "Please provide the date of surgery to the axilla"
    * insert enableWhenTrue(SURGERYAXDATE-Known)
    * required = true

// Axilla clearance
  * item[+]
    * linkId = "SURGERYAX2"
    * type = #choice
    * text = "Indicate whether the patient received axillary clearance due to lymph node involvement after sentinel lymph node biopsy during the last year"
    * answerValueSet = Canonical(NoYesUnknownVS)
    * enableWhen[+]
      * question = "SURGERYAX"
      * operator = #=
      * answerCoding = SCT#396487001 "Sentinel lymph node biopsy"
    * enableWhen[+]
      * question = "SURGERYAX"
      * operator = #=
      * answerCoding = SCT#234262008 "Excision of axillary lymph node"
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "SURGERYAX2DATE-Known"
    * type = #boolean
    * text = "Is the date of axillary clearance known?"
    * enableWhen[+]
      * question = "SURGERYAX2"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y
    * required = true

  * item[+]
    * linkId = "SURGERYAX2DATE"
    * type = #date
    * text = "Please provide the date of axillary clearance"
    * insert enableWhenTrue(SURGERYAX2DATE-Known)
    * required = true

// Reconstruction surgery
  * item[+]
    * linkId = "RECONSTRUCTION_DELAY"
    * type = #choice
    * text = "Indicate whether the patient received a delayed reconstruction"
    * answerValueSet = Canonical(NoYesUnknownVS) 
    * enableWhen[+]
      * question = "SURGERY_BREAST"
      * operator = #=
      * answerCoding = BreastSurgeryTypesCodeSystem#mastectomy-without-immediate-reconstruction // Mastectomy without immediate reconstruction
    * required = true

  * item[+]
    * linkId = "SURGERY_RECONSTRUCTION"
    * type = #choice
    * text = "Indicate what type of reconstruction the patient received"
    * answerValueSet = Canonical(ReconstructionTypeVS) 
    * enableWhen[+]
      * question = "SURGERY_BREAST"
      * operator = #=
      * answerCoding = BreastSurgeryTypesCodeSystem#mastectomy-without-immediate-reconstruction // Mastectomy without immediate reconstruction
    * enableWhen[+]
      * question = "SURGERY_BREAST"
      * operator = #=
      * answerCoding = BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction // Mastectomy with reconstruction
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "ImplantReconstruction"
    * type = #choice
    * text = "Indicate the location of the implant"
    * answerValueSet = Canonical(ImplantLocationVS) 
    * enableWhen[+]
      * question = "SURGERY_RECONSTRUCTION"
      * operator = #!=
      * answerCoding = ReconstructionTypeCodeSystem#autologous
    * enableWhen[+]
      * question = "SURGERY_RECONSTRUCTION"
      * operator = #!=
      * answerCoding = NullFlavor#UNK
    * enableBehavior = #all
    * required = true

  * item[+]
    * linkId = "RECONSTRUCTDATE-Known"
    * type = #boolean
    * text = "Is the date of the delayed reconstruction known?"
    * enableWhen[+]
      * question = "RECONSTRUCTION_DELAY"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y
    * required = true

  * item[+]
    * linkId = "RECONSTRUCTDATE"
    * type = #date
    * text = "Please provide the date of delayed reconstruction"
    * insert enableWhenTrue(RECONSTRUCTDATE-Known)
    * required = true

// Radiotherapy
  * item[+]
    * linkId = "RADIOTX_BREAST"
    * type = #choice
    * text = "What was the intent of radiotherapy"
    * answerValueSet = Canonical(TherapyIntentVS)
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true
    * repeats = true

  * item[+]
    * linkId = "RADIOTXTYPE_BREAST"
    * type = #choice
    * text = "Indicate location/type of radiotherapy"
    * answerValueSet = Canonical(LocationRadiotherapyVS)
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true

  * item[+]
    * linkId = "RadioTxStartDate-Known"
    * type = #boolean
    * text = "Is the start date of radiotherapy known?"
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true

  * item[+]
    * linkId = "RadioTxStartDate"
    * type = #date
    * text = "Please provide the start date of radiotherapy"
    * insert enableWhenTrue(RadioTxStartDate-Known)
    * required = true

  * item[+]
    * linkId = "RadioTxStopDate-Known"
    * type = #boolean
    * text = "Is the stop date of radiotherapy known?"
    * insert enableWhenTreatmentSCT(SCT#108290001) // Radiation oncology AND/OR radiotherapy
    * required = true

  * item[+]
    * linkId = "RadioTxStopDate"
    * type = #date
    * text = "Please provide the stop date of radiotherapy"
    * insert enableWhenTrue(RadioTxStopDate-Known)
    * required = true

// Chemotherapy
  * item[+]
    * linkId = "CHEMOTXINTENT"
    * type = #choice
    * text = "Indicate the intent of chemotherapy"
    * answerValueSet = Canonical(TherapyIntentVS)
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "CHEMOTXTYPE_BREAST"
    * type = #choice
    * text = "Indicate the type of chemotherapy (select all that apply)"
    * answerValueSet = Canonical(ChemoTherapyTypeVS)
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true
    * repeats = true

  * item[+]
    * linkId = "ChemoTxStartDate-Known"
    * type = #boolean
    * text = "Is the start date of chemotherapy known?"
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "ChemoTxStartDate"
    * type = #date
    * text = "Please provide the start date of chemotherapy"
    * insert enableWhenTrue(ChemoTxStartDate-Known)
    * required = true

  * item[+]
    * linkId = "ChemoTxStopdate-Known"
    * type = #boolean
    * text = "Is the stop date of chemotherapy known?"
    * insert enableWhenTreatment(#adjuvant-chemotherapy) // Adjuvant chemotherapy
    * insert enableWhenTreatment(#neoadjuvant-chemotherapy) // Neoadjuvant chemotherapy
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "ChemoTxStopdate"
    * type = #date
    * text = "Please provide the stop date of chemotherapy"
    * insert enableWhenTrue(ChemoTxStopdate-Known)
    * required = true

// Hormonal therapy 
  * item[+]
    * linkId = "HORMONTX_BREAST"
    * type = #choice
    * text = "Indicate the intent of hormonal therapy"
    * answerValueSet = Canonical(TherapyIntentVS)
    * insert enableWhenTreatmentSCT(SCT#169413002) //Hormone therapy
    * required = true

  * item[+]
    * linkId = "HORMONTXTYPE"
    * type = #choice
    * text = "Indicate the type of hormonal therapy (select all that apply)"
    * answerValueSet = Canonical(HormonalTherapyTypeVS)
    * insert enableWhenTreatmentSCT(SCT#169413002) // Hormone therapy
    * required = true
    * repeats = true

  * item[+]
    * linkId = "HORMONTXSTARTDATE-Known"
    * type = #boolean
    * text = "Is the start date of hormonal therapy known?"
    * insert enableWhenTreatmentSCT(SCT#169413002) // Hormone therapy
    * required = true

  * item[+]
    * linkId = "HORMONTXSTARTDATE"
    * type = #date
    * text = "Please provide the start date of hormonal therapy"
    * insert enableWhenTrue(HORMONTXSTARTDATE-Known)
    * required = true

  * item[+]
    * linkId = "HORMONTXSTOPDATE-Known"
    * type = #boolean
    * text = "Is the stop date of hormonal therapy known?"
    * insert enableWhenTreatmentSCT(SCT#169413002) // Hormone therapy
    * required = true

  * item[+]
    * linkId = "HORMONTXSTOPDATE"
    * type = #date
    * text = "Please provide the stop date of hormonal therapy, if applicable"
    * insert enableWhenTrue(HORMONTXSTOPDATE-Known)
    * required = true

// Targeted therapy
  * item[+]
    * linkId = "TARGETTX_BREAST"
    * type = #choice
    * text = "Indicate the type of targeted therapy"
    * answerValueSet = Canonical(TargetedTherapyVS)
    * insert enableWhenTreatment(#targeted-therapy) // Targeted therapy
    * required = true

  * item[+]
    * linkId = "TargetTxStartDate-Known"
    * type = #boolean
    * text = "Is the start date of targeted therapy known?"
    * insert enableWhenTreatment(#targeted-therapy) //Targeted therapy
    * required = true

  * item[+]
    * linkId = "TargetTxStartDate"
    * type = #date
    * text = "Please provide the start date of targeted therapy"
    * insert enableWhenTrue(TargetTxStartDate-Known) 
    * required = true

  * item[+]
    * linkId = "TargetTxStopDate-Known"
    * type = #boolean
    * text = "Is the stop date of targeted therapy known?"
    * insert enableWhenTreatment(#targeted-therapy) // Targeted therapy
    * required = true

  * item[+]
    * linkId = "TargetTxStopDate"
    * type = #date
    * text = "Please provide the stop date of targeted therapy"
    * insert enableWhenTrue(TargetTxStopDate-Known)
    * required = true
  
// Reoperations   
  * item[+]
    * linkId = "SURGERYPATIENT"
    * type = #choice
    * text = "Indicate if the patient has had one of the following re-operations since their surgery for breast cancer (select all that apply)"
    * answerValueSet = Canonical(ReoperationTypeVS)
    * required = true
    * repeats = true

  * item[+]
    * linkId = "SURGERYDATEPATIENT-Known"
    * type = #boolean
    * text = "Is the date of the reoperation known?"
    * enableWhen[+]
      * question = "SURGERYPATIENT"
      * operator = #!=
      * answerCoding = NullFlavor#UNK "unknown"
    * enableWhen[+]
      * question = "SURGERYPATIENT"
      * operator = #!=
      * answerCoding = SCT#373572006 "Clinical finding absent"
    * enableBehavior = #all
    * required = true

  * item[+]
    * linkId = "SURGERYDATEPATIENT"
    * type = #date
    * text = "Please provide the date of the reoperation"
    * insert enableWhenTrue(SURGERYDATEPATIENT-Known)
    * required = true


// GROUP 5 - Survival and disease control
* item[+]
  * linkId = "Survival-and-Disease-control"
  * type = #group
  * text = "Survival and disease control"
  * required = true

  * item[+]
    * linkId = "Survival-Q0"
    * type = #boolean
    * text = "Was the intent of the treatment curative?"
    * required = true

  * item[+]
    * linkId = "MalignancyRecur"
    * type = #choice
    * text = "Is there evidence of local, regional or distant recurrence of neoplasm?"
    * answerValueSet = Canonical(RecurrenceVS)
    * insert enableWhenTrue(Survival-Q0)
    * required = true
    
  * item[+]
    * linkId = "RecurMethod"
    * type = #choice
    * text = "What was the method of confirming recurrence of neoplasm?"
    * answerValueSet = Canonical(RecurrenceMethodVS)
    * insert enableWhenRecurrence(#local-recurrence)
    * insert enableWhenRecurrence(#regional-recurrence)
    * insert enableWhenRecurrence(#distant-recurrence)
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "RecurDateCancer-Known"
    * type = #boolean
    * text = "Is the date of cancer recurrence known?"
    * insert enableWhenRecurrence(#local-recurrence)
    * insert enableWhenRecurrence(#regional-recurrence)
    * insert enableWhenRecurrence(#distant-recurrence)
    * enableBehavior = #any
    * required = true

  * item[+]
    * linkId = "RecurDateCancer"
    * type = #date
    * text = "What is the date of cancer recurrence?"
    * insert enableWhenTrue(RecurDateCancer-Known)
    * required = true

  * item[+]
    * linkId = "VitalStatus"
    * type = #choice
    * text = "Indicate if the person has deceased, regardless of cause"
    * answerValueSet = Canonical(NoYesUnknownVS)
    * required = true

  * item[+]
    * linkId = "DeceasedDate-Known"
    * type = #boolean
    * text = "Is the date of death of the patient known?"
    * enableWhen
      * question = "VitalStatus"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y "Yes" 
    * required = true

  * item[+]
    * linkId = "DeceasedDate"
    * type = #date
    * text = "Please provide the date of death of the patient"
    * insert enableWhenTrue(DeceasedDate-Known)
    * required = true

  * item[+]
    * linkId = "DEATHBC"
    * type = #choice
    * text = "Is the death attributable to breast cancer?"
    * answerValueSet = Canonical(NoYesUnknownVS)
    * enableWhen
      * question = "VitalStatus"
      * operator = #=
      * answerCoding = YesNoUnkCS#Y "Yes" 
    * required = true




---

// File: input/fsh/Questionnaires/Eaxmple-Patient-Reported-Response-01-Baseline.fsh

// Instance: PatientReportedBaselineExample
// InstanceOf: QuestionnaireResponse
// Usage: #example
// * questionnaire = Canonical(PatientReportedBaseline)
// * status = #completed
// * authored = "2022-09-02T15:58:58.381Z"
// * item[0].linkId = "General-Information-Clinical"
// * item[=].text = "General information"
// * item[=].item[0].linkId = "NA-Clinical"
// * item[=].item[=].text = "What is the patient's medical record number?"
// * item[=].item[=].answer.valueInteger = 11577
// * item[=].item[+].linkId = "LastName-Clinical"
// * item[=].item[=].text = "What is the patient's last name?"
// * item[=].item[=].answer.valueString = "Carrizosa"
// * item[+].linkId = "Demographics"
// * item[=].text = "Demographic factors"
// * item[=].item[0].linkId = "Sex"
// * item[=].item[=].text = "Please indicate your sex at birth."
// * item[=].item[=].answer.valueCoding = GenderCS#female "Female"
// * item[=].item[+].linkId = "COUNTRY"
// * item[=].item[=].text = "What is your country of residence?"
// * item[=].item[=].answer.valueCoding = urn:iso:std:iso:3166#GBR "United Kingdom"
// * item[=].item[+].linkId = "Ethnicity"
// * item[=].item[=].text = "Please indicate the ethnicity that you identify with."
// * item[=].item[=].answer.valueString = "Hispanic/Latino/Spanish Origin"
// * item[=].item[+].linkId = "Race"
// * item[=].item[=].text = "Please indicate the biological race that you identify with."
// * item[=].item[=].answer.valueString = "White"
// * item[=].item[+].linkId = "EducationLevel"
// * item[=].item[=].text = "Please indicate your highest level of schooling."
// * item[=].item[=].answer.valueCoding = urn:uuid:47dcf78e-3c63-4a6b-8ac7-f4f669be2b96#2 "Secondary"
// * item[=].item[+].linkId = "RelationshipStatus"
// * item[=].item[=].text = "Please indicate your current relationship status."
// * item[=].item[=].answer.valueCoding = urn:uuid:98b0862c-ffe9-46a3-ad47-f4e2ede907c3#0 "Not married/partnered"
// * item[=].item[+].linkId = "MENOPAUSE"
// * item[=].item[=].text = "Please indicate your current menopausal status:"
// * item[=].item[=].answer.valueCoding = urn:uuid:cc3b3106-bc4b-4b9b-bf15-249ae1c3443f#1 "Post-menopausei (natural/surgical): if you have not had your period >12 months, caused by natural decline of hormones or due to surgery"
// * item[+].linkId = "Baseline-Clinical-Factors"
// * item[=].text = "Clinical factors"
// * item[=].item[0].linkId = "ComorbiditiesSACQ"
// * item[=].item[=].text = "Have you been told by a doctor that you have any of the following?"
// * item[=].item[=].answer.valueCoding = SCT#363346000 "Cancer/Other cancer (within the last 5 years)"
// * item[=].item[+].linkId = "ComorbiditiesSACQ_CancerFU1"
// * item[=].item[=].text = "Do you receive treatment for cancer/another cancer?"
// * item[=].item[=].answer.valueBoolean = true
// * item[=].item[+].linkId = "ComorbiditiesSACQ_CancerFU2"
// * item[=].item[=].text = "Does your cancer/other cancer limit your activities?"
// * item[=].item[=].answer.valueBoolean = true
// * item[+].linkId = "Degree-of-Health-EORTC-QLQ"
// * item[=].text = "Degree of Health - EORTC-QLQ"
// * item[=].item[0].linkId = "EORTC-QLQ-Q01-Q05"
// * item[=].item[=].text = "We are interested in some things about you and your health. Please answer all of the questions yourself by selecting the answer that best applies to you. There are no 'right' or 'wrong' answers. The information that you provide will remain strictly confidential."
// * item[=].item[=].item[0].linkId = "EORTCQLQC30_Q01"
// * item[=].item[=].item[=].text = "Do you have any trouble doing strenuous activities, like carrying a heavy shopping bag or a suitcase?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q02"
// * item[=].item[=].item[=].text = "Do you have any trouble taking a long walk?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q03"
// * item[=].item[=].item[=].text = "Do you have any trouble taking a short walk outside of the house?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q04"
// * item[=].item[=].item[=].text = "Do you need to stay in bed or a chair during the day?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q05"
// * item[=].item[=].item[=].text = "Do you need help with eating, dressing, washing yourself or using the toilet?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[+].linkId = "EORTC-QLQ-Q06-Q28"
// * item[=].item[=].text = "During the past week:"
// * item[=].item[=].item[0].linkId = "EORTCQLQC30_Q06"
// * item[=].item[=].item[=].text = "Were you limited in doing either your work or other daily activities?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q07"
// * item[=].item[=].item[=].text = "Were you limited in pursuing your hobbies or other leisure time activities?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q08"
// * item[=].item[=].item[=].text = "Were you short of breath?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q09"
// * item[=].item[=].item[=].text = "Have you had pain?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q10"
// * item[=].item[=].item[=].text = "Did you need to rest?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q11"
// * item[=].item[=].item[=].text = "Have you had trouble sleeping?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q12"
// * item[=].item[=].item[=].text = "Have you felt weak?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q13"
// * item[=].item[=].item[=].text = "Have you lacked appetite?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q14"
// * item[=].item[=].item[=].text = "Have you felt nauseated?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q15"
// * item[=].item[=].item[=].text = "Have you vomited?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q16"
// * item[=].item[=].item[=].text = "Have you been constipated?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q17"
// * item[=].item[=].item[=].text = "Have you had diarrhea?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q18"
// * item[=].item[=].item[=].text = "Were you tired?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q19"
// * item[=].item[=].item[=].text = "Did pain interfere with your daily activities?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q20"
// * item[=].item[=].item[=].text = "Have you had difficulty in concentrating on things, like reading a newspaper or watching television?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q21"
// * item[=].item[=].item[=].text = "Did you feel tense?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q22"
// * item[=].item[=].item[=].text = "Did you worry?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q23"
// * item[=].item[=].item[=].text = "Did you feel irritable?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q24"
// * item[=].item[=].item[=].text = "Did you feel depressed?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q25"
// * item[=].item[=].item[=].text = "Have you had difficulty remembering things?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q26"
// * item[=].item[=].item[=].text = "Has your physical condition or medical treatment interfered with your family life?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q27"
// * item[=].item[=].item[=].text = "Has your physical condition or medical treatment interfered with your social activities?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q28"
// * item[=].item[=].item[=].text = "Has your physical condition or medical treatment caused you financial difficulties?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[+].linkId = "EORTC-QLQ-Q29-Q30"
// * item[=].item[=].text = "For the following questions please select the number between 1 and 7 that best applies to you, with 1 = Very poor and 7 = Excellent."
// * item[=].item[=].item[0].linkId = "EORTCQLQC30_Q29"
// * item[=].item[=].item[=].text = "How would you rate your overall health during the past week?"
// * item[=].item[=].item[=].answer.valueCoding.display = "5"
// * item[=].item[=].item[+].linkId = "EORTCQLQC30_Q30"
// * item[=].item[=].item[=].text = "How would you rate your overall quality of life during the past week?"
// * item[=].item[=].item[=].answer.valueCoding.display = "5"
// * item[=].item[+].linkId = "EORTC-QLQ-Q31-Q43"
// * item[=].item[=].text = "Patients sometimes report that they have the following symptoms or problems. Please indicate the extent to which you have experienced these symptoms or problems during the past week. \n  Please answer by selecting the answer that best applies to you. During the past week:"
// * item[=].item[=].item[0].linkId = "EORTCQLQBR23_Q31"
// * item[=].item[=].item[=].text = "Did you have a dry mouth?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q32"
// * item[=].item[=].item[=].text = "Did food and drink taste different than usual?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q33"
// * item[=].item[=].item[=].text = "Were your eyes painful, irritated or watery?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q34"
// * item[=].item[=].item[=].text = "Have you lost any hair?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q36"
// * item[=].item[=].item[=].text = "Did you feel ill or unwell?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q37"
// * item[=].item[=].item[=].text = "Did you have hot flushes?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q38"
// * item[=].item[=].item[=].text = "Did you have headaches?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q39"
// * item[=].item[=].item[=].text = "Have you felt physically less attractive as a result of your disease or treatment?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q40"
// * item[=].item[=].item[=].text = "Have you been feeling less feminine as a result of your disease or treatment?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q41"
// * item[=].item[=].item[=].text = "Did you find it difficult to look at yourself naked?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q42"
// * item[=].item[=].item[=].text = "Have you been dissatisfied with your body?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q43"
// * item[=].item[=].item[=].text = "Were you worried about your health in the future?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[+].linkId = "EORTC-QLQ-Q44-Q46"
// * item[=].item[=].text = "During the past four weeks:"
// * item[=].item[=].item[0].linkId = "EORTCQLQBR23_Q44"
// * item[=].item[=].item[=].text = "To what extent were you interested in sex?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q45"
// * item[=].item[=].item[=].text = "To what extent were you sexually active? (with or without intercourse)"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#1 "Not at all"
// * item[=].item[+].linkId = "EORTC-QLQ-Q47-Q53"
// * item[=].item[=].text = "During the past week:"
// * item[=].item[=].item[0].linkId = "EORTCQLQBR23_Q48"
// * item[=].item[=].item[=].text = "Did you have a swollen arm or hand?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q49"
// * item[=].item[=].item[=].text = "Was it difficult to raise your arm or to move it sideways?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q50"
// * item[=].item[=].item[=].text = "Have you had any pain in the area of your affected breast?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q51"
// * item[=].item[=].item[=].text = "Was the area of your affected breast swollen?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q52"
// * item[=].item[=].item[=].text = "Was the area of your affected breast oversensitive?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#4 "Very much"
// * item[=].item[=].item[+].linkId = "EORTCQLQBR23_Q53"
// * item[=].item[=].item[=].text = "Have you had skin problems on or in the area of your affected breast (e.g., itchy, dry, flaky)?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#2 "A little"
// * item[=].item[=].item[+].linkId = "EORTC QLQ-LMC21"
// * item[=].item[=].item[=].text = "Have you had tingling hands or feet?"
// * item[=].item[=].item[=].answer.valueCoding = EORTCQLQCodeSystem#3 "Quite a bit"
// * item[+].linkId = "Degree-of-Health-BreastQ"
// * item[=].text = "Degree of Health - BreastQ:"
// * item[=].item.linkId = "IntroBreastQ"
// * item[=].item.text = "With your breasts in mind, or if you have had a mastectomy, with your breast area in mind, in the past 2 weeks, \n      how satisfied or dissatisfied have you been with:"
// * item[=].item.item[0].linkId = "BREASTQMAST_Q01"
// * item[=].item.item[=].text = "How you look in the mirror clothed?"
// * item[=].item.item[=].answer.valueCoding = BreastQCodeSystem#3 "Somewhat satisfied"
// * item[=].item.item[+].linkId = "BREASTQMAST_Q02"
// * item[=].item.item[=].text = "How comfortable your bras fit?"
// * item[=].item.item[=].answer.valueCoding = BreastQCodeSystem#1 "Very dissatisfied"
// * item[=].item.item[+].linkId = "BREASTQMAST_Q03"
// * item[=].item.item[=].text = "Being able to wear clothing that is more fitted?"
// * item[=].item.item[=].answer.valueCoding = BreastQCodeSystem#2 "Somewhat dissatisfied"
// * item[=].item.item[+].linkId = "BREASTQMAST_Q04"
// * item[=].item.item[=].text = "How you look in the mirror unclothed?"
// * item[=].item.item[=].answer.valueCoding = BreastQCodeSystem#2 "Somewhat dissatisfied"
// * item[+].linkId = "Degree-of-Health-FACTES"
// * item[=].text = "Degree of Health - FACTES"
// * item[=].item.linkId = "IntroFactes"
// * item[=].item.text = "Please indicate your response as it applies to the past 7 days:"
// * item[=].item.item[0].linkId = "FACTES_BRM1"
// * item[=].item.item[=].text = "I have pain in my joints"
// * item[=].item.item[=].answer.valueCoding = FACTESCodeSystem#3 "Somewhat"
// * item[=].item.item[+].linkId = "FACTES_ES4"
// * item[=].item.item[=].text = "I have vaginal discharge"
// * item[=].item.item[=].answer.valueCoding = FACTESCodeSystem#3 "Somewhat"
// * item[=].item.item[+].linkId = "FACTES_ES5"
// * item[=].item.item[=].text = "I have vaginal itching/irritation"
// * item[=].item.item[=].answer.valueCoding = FACTESCodeSystem#4 "Quite a bit"
// * item[=].item.item[+].linkId = "FACTES_ES6"
// * item[=].item.item[=].text = "I have vaginal bleeding or spotting"
// * item[=].item.item[=].answer.valueCoding = FACTESCodeSystem#1 "Not at all"
// * item[=].item.item[+].linkId = "FACTES_ES7"
// * item[=].item.item[=].text = "I have vaginal dryness"
// * item[=].item.item[=].answer.valueCoding = FACTESCodeSystem#1 "Not at all"
// * item[=].item.item[+].linkId = "FACTES_ES8"
// * item[=].item.item[=].text = "I have pain or discomfort with intercourse"
// * item[=].item.item[=].answer.valueCoding = FACTESCodeSystem#5 "Very much"


---

// File: input/fsh/Questionnaires/Patient-Reported-Response-01-Baseline.fsh

Instance: PatientReportedBaseline
InstanceOf: Questionnaire
Usage: #definition
Description: "Patient-reported response at baseline (first doctors' visit)"
* insert PublicationInstanceRuleset

* name = "PatientReportedBaseline"
* title = "Patient reported response at baseline"
* status = #draft

// GROUP 1 - GENERAL INFORMATION (ON ALL FORMS)
* item[+]
  * linkId = "General-Information-Clinical"
  * type = #group
  * text = "General information"
  * required = true

  * item[+]
//    * linkId = "N/A-Clinical"
    * linkId = "NA-Clinical"
    * type = #string 
    * text = "What is your medical record number?"
    * required = true

  * item[+]
    * linkId = "LastName-Clinical"
    * type = #string
    * text = "What is your last name?"
    * required = true

// GROUP 2 - DEMOGRAPHIC FACTORS
* item[+]
  * linkId = "Demographics"
  * type = #group
  * text = "Demographic factors"
  * required = true

  * item[+]
    * linkId = "Sex"
    * type = #choice
    * text = "Please indicate your sex at birth"
    * answerValueSet = Canonical(AdministrativeGenderVS)
    * required = true

  * item[+]
    * linkId = "COUNTRY"
    * type = #choice
    * text = "What is your country of residence?"
    * answerValueSet = Canonical(CountryVS)
    * required = true

  * item[+]
    * linkId = "Ethnicity"
    * type = #choice
    * text = "Please indicate the ethnicity that you identify with"
    * answerValueSet = Canonical(EthnicityVS)
    * required = true
    
  * item[+]
    * linkId = "Race"
    * type = #choice
    * text = "Please indicate the biological race that you identify with"
    * answerValueSet = Canonical(RaceVS)
    * required = true
 
  * item[+]
    * linkId = "EducationLevel"
    * type = #choice
    * text = "Please indicate your highest level of schooling"
    * answerValueSet = Canonical(EducationLevelVS)
    * required = true
   
  * item[+]
    * linkId = "RelationshipStatus"
    * type = #choice
    * text = "Please indicate your current relationship status"
    * answerValueSet = Canonical(RelationshipStatusVS)
    * required = true

  * item[+]
    * linkId = "MENOPAUSE"
    * type = #choice
    * text = "Please indicate your current menopausal status"
    * answerValueSet = Canonical(MenopausalStatusVS)   
    * enableWhen
      * question = "Sex"
      * operator = #=
      * answerCoding = AdministrativeGenderCS#female
    * required = true

// GROUP 3 - BASELINE CLINICAL FACTORS
* item[+]
  * linkId = "Baseline-Clinical-Factors"
  * type = #group
  * text = "Clinical factors"
  * required = true

  * item[+]
    * linkId = "ComorbiditiesSACQ"
    * type = #choice
    * text = "Have you been told by a doctor that you have any of the following?"
    * answerValueSet = Canonical(SACQPatientComorbidityHistory)
    * required = true
    * repeats = true

  * item[+]
    * linkId = "ComorbiditiesSACQ_HeartDiseaseFU1"
    * type = #boolean
    * text = "Do you receive treatment for heart disease (For example, angina, heart failure, or heart attack)?"
    * insert enableWhenComorbidity(SCT#56265001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_HeartDiseaseFU2"
    * type = #boolean
    * text = "Does your heart disease limit your activities?"
    * insert enableWhenComorbidity(SCT#56265001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_HighBloodPressureFU1"
    * type = #boolean
    * text = "Do you receive treatment for high blood pressure?"
    * insert enableWhenComorbidity(SCT#38341003)

  * item[+]
    * linkId = "ComorbiditiesSACQ_HighBloodPressureFU2"
    * type = #boolean
    * text = "Does your high blood pressure limit your activities?"
    * insert enableWhenComorbidity(SCT#38341003)

  * item[+]
    * linkId = "ComorbiditiesSACQ_LungDiseaseFU1"
    * type = #boolean
    * text = "Do you receive treatment for lung disease?"
    * insert enableWhenComorbidity(SCT#19829001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_LungDiseaseFU2"
    * type = #boolean
    * text = "Does your lung disease limit your activities?"
    * insert enableWhenComorbidity(SCT#19829001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_DiabetesFU1"
    * type = #boolean
    * text = "Do you receive treatment for diabetes?"
    * insert enableWhenComorbidity(SCT#73211009)

  * item[+]
    * linkId = "ComorbiditiesSACQ_DiabetesFU2"
    * type = #boolean
    * text = "Does your diabetes limit your activities?"
    * insert enableWhenComorbidity(SCT#73211009)

  * item[+]
    * linkId = "ComorbiditiesSACQ_StomachDiseaseFU1"
    * type = #boolean
    * text = "Do you receive treatment for an ulcer or stomach disease?"
    * insert enableWhenComorbidity(SCT#29384001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_StomachDiseaseFU2"
    * type = #boolean
    * text = "Does your ulcer or stomach disease limit your activities?"
    * insert enableWhenComorbidity(SCT#29384001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_KidneyDiseaseFU1"
    * type = #boolean
    * text = "Do you receive treatment for kidney disease?"
    * insert enableWhenComorbidity(SCT#90708001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_KidneyDiseaseFU2"
    * type = #boolean
    * text = "Does your kidney disease limit your activities?"
    * insert enableWhenComorbidity(SCT#90708001)

  * item[+]
    * linkId = "ComorbiditiesSACQ_LiverDiseaseFU1"
    * type = #boolean
    * text = "Do you receive treatment for liver disease?"
    * insert enableWhenComorbidity(SCT#235856003)

  * item[+]
    * linkId = "ComorbiditiesSACQ_LiverDiseaseFU2"
    * type = #boolean
    * text = "Does your liver disease limit your activities?"
    * insert enableWhenComorbidity(SCT#235856003)

  * item[+]
    * linkId = "ComorbiditiesSACQ_BloodDiseaseFU1"
    * type = #boolean
    * text = "Do you receive treatment for anemia or other blood disease?"
    * insert enableWhenComorbidity(SCT#414022008)

  * item[+]
    * linkId = "ComorbiditiesSACQ_BloodDiseaseFU2"
    * type = #boolean
    * text = "Does your anemia or other blood disease limit your activities?"
    * insert enableWhenComorbidity(SCT#414022008)

  * item[+]
    * linkId = "ComorbiditiesSACQ_CancerFU1"
    * type = #boolean
    * text = "Do you receive treatment for cancer/another cancer?"
    * insert enableWhenComorbidity(SCT#363346000)

  * item[+]
    * linkId = "ComorbiditiesSACQ_CancerFU2"
    * type = #boolean
    * text = "Does your cancer/other cancer limit your activities?"
    * insert enableWhenComorbidity(SCT#363346000)

  * item[+]
    * linkId = "ComorbiditiesSACQ_DepressionFU1"
    * type = #boolean
    * text = "Do you receive treatment for depression?"
    * insert enableWhenComorbidity(SCT#35489007)

  * item[+]
    * linkId = "ComorbiditiesSACQ_DepressionFU2"
    * type = #boolean
    * text = "Does your depression limit your activities?"
    * insert enableWhenComorbidity(SCT#35489007)

  * item[+]
    * linkId = "ComorbiditiesSACQ_OsteoarthritisFU1"
    * type = #boolean
    * text = "Do you receive treatment for osteoarthritis/degenerative arthritis?"
    * insert enableWhenComorbidity(SCT#396275006)

  * item[+]
    * linkId = "ComorbiditiesSACQ_OsteoarthritisFU2"
    * type = #boolean
    * text = "Does your osteoarthritis/degenerative arthritis limit your activities?"
    * insert enableWhenComorbidity(SCT#396275006)

  * item[+]
    * linkId = "ComorbiditiesSACQ_BackPainFU1"
    * type = #boolean
    * text = "Do you receive treatment for back pain?"
    * insert enableWhenComorbidity(SCT#161891005)

  * item[+]
    * linkId = "ComorbiditiesSACQ_BackPainFU2"
    * type = #boolean
    * text = "Does your back pain limit your activities?"
    * insert enableWhenComorbidity(SCT#161891005)

  * item[+]
    * linkId = "ComorbiditiesSACQ_RheumatoidArthritisFU1"
    * type = #boolean
    * text = "Do you receive treatment for rheumatoid arthritis?"
    * insert enableWhenComorbidity(SCT#69896004)

  * item[+]
    * linkId = "ComorbiditiesSACQ_RheumatoidArthritisFU2"
    * type = #boolean
    * text = "Does your rheumatoid arthritis limit your activities?"
    * insert enableWhenComorbidity(SCT#69896004)

  * item[+]
    * linkId = "ComorbiditiesSACQ_Other"
    * type = #text
    * text = "What other medical problems are you experiencing?"
    * insert enableWhenComorbidity(NullFlavor#OTH)

  // * item[+]
  //   * linkId = "ComorbiditiesSACQ_Score"
  //   * type = #integer
  //   * text = "What is the total summed score of the patient's SACQ responses?"
  //   * maxLength = 2
  // Add answerOptions to limit the possible answers?

// GROUP 4 - TREATMENT VARIABLES
* item[+]
  * linkId = "Treatment-Variables"
  * type = #group
  * text = "Treatment Variables"
  * required = true

  * item[+]
    * linkId = "PatientEducation"
    * text = "Did you feel you received sufficient information about your treatment options?"
    * type = #choice
    * answerValueSet = Canonical(PatientEducationVS)
    * required = true


// GROUP 5 - DEGREE OF HEALTH
* insert EORTCQuestionnaire

// BREASTQ - Baseline
* item[+]
  * linkId = "Degree-of-Health-BreastQ"
  * text = "Degree of Health - BreastQ:"
  * type = #group

  * item[+]
    * linkId = "IntroBreastQ"
    * text = "With your breasts in mind, or if you have had a mastectomy, with your breast area in mind, in the past 2 weeks, 
      how satisfied or dissatisfied have you been with:"
    * type = #group
    
    * item[+]
      * linkId = "BREASTQMAST_Q01"
      * type = #choice
      * text = "How you look in the mirror clothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * required = true

    * item[+]
      * linkId = "BREASTQMAST_Q02"
      * type = #choice
      * text = "How comfortable your bras fit?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * required = true

    * item[+]
      * linkId = "BREASTQMAST_Q03"
      * type = #choice
      * text = "Being able to wear clothing that is more fitted?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * required = true

    * item[+]
      * linkId = "BREASTQMAST_Q04"
      * type = #choice
      * text = "How you look in the mirror unclothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * required = true


---

// File: input/fsh/Questionnaires/Patient-Reported-Response-02-Follow-Up.fsh

Instance: PatientReportedFollowUp
InstanceOf: Questionnaire
Usage: #definition
Description: "Patient-reported response at every 6 months for first 2 years post-treatment, after 2 years tracked annually for up to 10 years"
* insert PublicationInstanceRuleset

* name = "PatientReportedFollowUp"
* title = "Patient reported response at post-treatment follow-up"
* status = #draft

// GROUP 1 - GENERAL INFORMATION (ON ALL FORMS)
* item[+]
  * linkId = "General-Information-Clinical"
  * type = #group
  * text = "General information"
  * required = true

  * item[+]
//    * linkId = "N/A-Clinical"
    * linkId = "NA-Clinical"
    * type = #string
    * text = "What is the patient's medical record number?"
    * required = true

  * item[+]
    * linkId = "LastName-Clinical"
    * type = #string
    * text = "What is the patient's last name?"
    * required = true

// GROUP 5 - DEGREE OF HEALTH

// EORTC-QLQ
* insert EORTCQuestionnaire

// BreastQ
* insert BreastQFollowup


---

// File: input/fsh/Questionnaires/Questionnaire BreastQ.fsh

RuleSet: BreastQFollowup
* item[+]
  * linkId = "Degree-of-Health-BreastQ"
  * text = "Degree of Health BreastQ"
  * type = #group
    
  * item[+]
    * linkId = "BreastQ_Surgery"
    * type = #choice
    * text = "Which type of surgery did you receive?"
    * answerValueSet = Canonical(BreastSurgeryTypeVS) 
    * required = true

// Group 1 - Patients with mastectomy without immediate reconstruction
  * item[+]
    * linkId = "MastectomyFollowUp"
    * type = #group
    * text = "With your breast area in mind, in the past 2 weeks, how satisfied or dissatisfied have you been with:"
    * insert enableWhenSurgeryType(#mastectomy-without-immediate-reconstruction)
    * enableBehavior = #all

    * item[+]
      * linkId = "BREASTQMASTP_Q01"
      * type = #choice
      * text = "How you look in the mirror clothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-without-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQMASTP_Q02"
      * type = #choice
      * text = "How comfortably your bras fit?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-without-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQMASTP_Q03"
      * type = #choice
      * text = "Being able to wear clothing that is more fitted?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-without-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQMASTP_Q04"
      * type = #choice
      * text = "How you look in the mirror unclothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-without-immediate-reconstruction)


  // Group 2 - Patients with breast conserving therapy (#0 and #1)
  * item[+]
    * linkId = "BreastConservingTherapyFollowUp"
    * type = #group
    * text = "The following questions are about your breasts and your breast cancer treatment (by treatment, we mean lumpectomy with or without radiation). If you have had a lumpectomy and radiation of both breasts, answer these questions thinking of the breast you are least satisfied with. With your breasts in mind, in the past week, how satisfied or dissatisfied have you been with:"
    * insert enableWhenSurgeryType(#bcs)
    * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
    * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q01"
      * type = #choice
      * text = "How you look in the mirror clothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q02"
      * type = #choice
      * text = "The shape of your lumpectomy breast when you are wearing a bra?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any
      
    * item[+]
      * linkId = "BREASTQBCTP_Q03"
      * type = #choice
      * text = "How normal you feel in your clothes?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q04"
      * type = #choice
      * text = "Being able to wear clothing that is more fitted?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any
      
    * item[+]
      * linkId = "BREASTQBCTP_Q05"
      * type = #choice
      * text = "How your lumpectomy breast sits/hangs?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q06"
      * type = #choice
      * text = "How smoothly shaped your lumpectomy breast looks?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q07"
      * type = #choice
      * text = "The contour (outline) of your lumpectomy breast?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q08"
      * type = #choice
      * text = "How equal in size your breasts are to each other?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q09"
      * type = #choice
      * text = "How normal your lumpectomy breast looks?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q10"
      * type = #choice
      * text = "How much your breast look the same?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

    * item[+]
      * linkId = "BREASTQBCTP_Q11"
      * type = #choice
      * text = "How you look in the mirror unclothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#bcs)
      * insert enableWhenSurgeryType(#bcs-with-mammoplasty)
      * enableBehavior = #any

  // Group 3 - Patients with reconstruction (#3) 
  * item[+]
    * linkId = "ReconstructionFollowUp"
    * type = #group
    * text = "If you have had a mastectomy and reconstruction of both breasts, answer these questions thinking of the breast you are least satisfied with. With your breasts in mind ,in the past week, how satisfied or dissatisfied have you been with:"
    * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q01"
      * type = #choice
      * text = "How you look in the mirror clothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q02"
      * type = #choice
      * text = "The shape of your reconstructed breast(s) when you are wearing a bra?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q03"
      * type = #choice
      * text = "How normal you feel in your clothes?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q04"
      * type = #choice
      * text = "The size of your reconstructed breast(s)?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q05"
      * type = #choice
      * text = "Being able to wear clothing that is more fitted?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q06"
      * type = #choice
      * text = "How your breasts are lined up in relation to each other?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q07"
      * type = #choice
      * text = "How comfortably your bras fit?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q08"
      * type = #choice
      * text = "The softness of your reconstructed breast(s)?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q09"
      * type = #choice
      * text = "How equal in size your breasts are to each other?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q10"
      * type = #choice
      * text = "How natural your reconstructed breast(s) looks?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q11"
      * type = #choice
      * text = "How naturally your reconstructed breast(s) sits/hangs?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q12"
      * type = #choice
      * text = "How your reconstructed breast(s) feel to touch?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q13"
      * type = #choice
      * text = "How much your reconstructed breast(s) feels like a natural part of your body?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q14"
      * type = #choice
      * text = "How closely matched (similar) your breasts are to each other?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)

    * item[+]
      * linkId = "BREASTQRECP_Q15"
      * type = #choice
      * text = "How your reconstructed breast(s) look now compared to before you had any breast surgery?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)
 
    * item[+]
      * linkId = "BREASTQRECP_Q16"
      * type = #choice
      * text = "How you look in the mirror unclothed?"
      * answerValueSet = Canonical(SatisfactionResponseVS)
      * insert enableWhenSurgeryType(#mastectomy-with-immediate-reconstruction)



---

// File: input/fsh/Questionnaires/Questionnaire EORTCQLQ.fsh

RuleSet: EORTCQuestionnaire
* item[+]
  * linkId = "Degree-of-Health-EORTC-QLQ"
  * text = "Degree of Health - EORTC-QLQ"
  * type = #group

  * item[+]
    * linkId = "EORTCQLQ-Question01-05"
    * text = "We are interested in some things about you and your health. Please answer all of the questions yourself by selecting the answer that best applies to you. There are no 'right' or 'wrong' answers. The information that you provide will remain strictly confidential."
    * type = #group 

    * item[+]
      * linkId = "EORTCQLQC30_Q01"
      * type = #choice
      * text = "Do you have any trouble doing strenuous activities, like carrying a heavy shopping bag or a suitcase?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q02"
      * type = #choice
      * text = "Do you have any trouble taking a long walk?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q03"
      * type = #choice
      * text = "Do you have any trouble taking a short walk outside of the house?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q04"
      * type = #choice
      * text = "Do you need to stay in bed or a chair during the day?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q05"
      * type = #choice
      * text = "Do you need help with eating, dressing, washing yourself or using the toilet?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

  * item[+]
    * linkId = "EORTCQLQ-Question06-28"
    * type = #group
    * text = "During the past week:"

    * item[+]
      * linkId = "EORTCQLQC30_Q06"
      * type = #choice
      * text = "Were you limited in doing either your work or other daily activities?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q07"
      * type = #choice
      * text = "Were you limited in pursuing your hobbies or other leisure time activities?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q08"
      * type = #choice
      * text = "Were you short of breath?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q09"
      * type = #choice
      * text = "Have you had pain?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q10"
      * type = #choice
      * text = "Did you need to rest?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q11"
      * type = #choice
      * text = "Have you had trouble sleeping?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q12"
      * type = #choice
      * text = "Have you felt weak?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q13"
      * type = #choice
      * text = "Have you lacked appetite?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q14"
      * type = #choice
      * text = "Have you felt nauseated?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q15"
      * type = #choice
      * text = "Have you vomited?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q16"
      * type = #choice
      * text = "Have you been constipated?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q17"
      * type = #choice
      * text = "Have you had diarrhea?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q18"
      * type = #choice
      * text = "Were you tired?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q19"
      * type = #choice
      * text = "Did pain interfere with your daily activities?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q20"
      * type = #choice
      * text = "Have you had difficulty in concentrating on things, like reading a newspaper or watching television?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q21"
      * type = #choice
      * text = "Did you feel tense?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q22"
      * type = #choice
      * text = "Did you worry?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q23"
      * type = #choice
      * text = "Did you feel irritable?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q24"
      * type = #choice
      * text = "Did you feel depressed?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q25"
      * type = #choice
      * text = "Have you had difficulty remembering things?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q26"
      * type = #choice
      * text = "Has your physical condition or medical treatment interfered with your family life?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q27"
      * type = #choice
      * text = "Has your physical condition or medical treatment interfered with your social activities?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQC30_Q28"
      * type = #choice
      * text = "Has your physical condition or medical treatment caused you financial difficulties?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

  * item[+]
    * linkId = "EORTCQLQ-Question29-30"
    * type = #group
    * text = "For the following questions please select the number between 1 and 7 that best applies to you, with 1 = Very poor and 7 = Excellent."

    * item[+]
      * linkId = "EORTCQLQC30_Q29"
      * type = #choice
      * text = "How would you rate your overall health during the past week?"
      * required = true
      * answerOption[+].valueInteger = 1
      * answerOption[+].valueInteger = 2
      * answerOption[+].valueInteger = 3
      * answerOption[+].valueInteger = 4
      * answerOption[+].valueInteger = 5
      * answerOption[+].valueInteger = 6
      * answerOption[+].valueInteger = 7

    * item[+]
      * linkId = "EORTCQLQC30_Q30"
      * type = #choice
      * text = "How would you rate your overall quality of life during the past week?"
      * required = true
      * answerOption[+].valueInteger = 1
      * answerOption[+].valueInteger = 2
      * answerOption[+].valueInteger = 3
      * answerOption[+].valueInteger = 4
      * answerOption[+].valueInteger = 5
      * answerOption[+].valueInteger = 6
      * answerOption[+].valueInteger = 7

  * item[+]
    * linkId = "EORTCQLQ-Question31-43"
    * type = #group
    * text = "Patients sometimes report that they have the following symptoms or problems. Please indicate the extent to which you have experienced these symptoms or problems during the past week. Please answer by selecting the answer that best applies to you. During the past week:"

    * item[+]
      * linkId = "EORTCQLQBR45_Q31"
      * type = #choice
      * text = "Have you had dry mouth?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q32"
      * type = #choice
      * text = "Have food and drink tasted different than usual?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q33"
      * type = #choice
      * text = "Have your eyes been painful, irritated or watery?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q34"
      * type = #choice
      * text = "Have you lost any hair?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q35"
      * type = #choice
      * text = "Have you been upset by the loss of your hair?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * enableWhen[+]
        * question = "EORTCQLQBR45_Q34"
        * operator = #!=
        * answerCoding = AgreementResponseCodeSystem#no "Not at all"

    * item[+]
      * linkId = "EORTCQLQBR45_Q36"
      * type = #choice
      * text = "Have you felt ill or unwell?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q37"
      * type = #choice
      * text = "Have you had hot flushes?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q38"
      * type = #choice
      * text = "Have you had headaches?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q39"
      * type = #choice
      * text = "Have you felt physically less attractive as a result of your disease or treatment?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q40"
      * type = #choice
      * text = "Have you felt less feminine as a result of your disease or treatment?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q41"
      * type = #choice
      * text = "Have you had problems looking at yourself naked?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q42"
      * type = #choice
      * text = "Have you been dissatisfied with your body?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q43"
      * type = #choice
      * text = "Have you worried about your health in the future?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

  * item[+]
    * linkId = "EORTCQLQ-Question44-46"
    * type = #group
    * text = "During the past four weeks:"

    * item[+]
      * linkId = "EORTCQLQBR45_Q44"
      * type = #choice
      * text = "Have you been sexually active? (with or without intercourse)"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q45"
      * type = #choice
      * text = "To what extent were you sexually active? (with or without intercourse)"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q46"
      * type = #choice
      * text = "Has sex been enjoyable for you?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * enableWhen[+]
        * question = "EORTCQLQBR45_Q45"
        * operator = #!=
        * answerCoding = AgreementResponseCodeSystem#no "Not at all"

  * item[+]
    * linkId = "EORTCQLQ-Question47-69"
    * type = #group
    * text = "During the past week:"

    * item[+]
      * linkId = "EORTCQLQBR45_Q47"
      * type = #choice
      * text = "Have you had any pain in your arm or shoulder?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

      * item[+]
      * linkId = "EORTCQLQBR45_Q48"
      * type = #choice
      * text = "Have you had a swollen arm or hand?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q49"
      * type = #choice
      * text = "Have you had problems raising your arm or moving it sideways?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q50"
      * type = #choice
      * text = "Have you had any pain in the area of your affected breast?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q51"
      * type = #choice
      * text = "Has the area of your affected breast been swollen?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q52"
      * type = #choice
      * text = "Has the area of your affected breast been oversensitive?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q53"
      * type = #choice
      * text = "Have you had skin problems on or in the area of your affected breast (e.g., itchy, dry, flaky)?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q54"
      * type = #choice
      * text = "Have you sweated excessively?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q55"
      * type = #choice
      * text = "Have you had mood swings?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q56"
      * type = #choice
      * text = "Have you been dizzy?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q57"
      * type = #choice
      * text = "Have you had soreness in your mouth?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q58"
      * type = #choice
      * text = "Have you had any reddening in your mouth?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q59"
      * type = #choice
      * text = "Have you had pain in your hands or feet?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q60"
      * type = #choice
      * text = "Have you had any redenning on your hands or feet?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q61"
      * type = #choice
      * text = "Have you had tingling in your fingers or toes?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q62"
      * type = #choice
      * text = "Have you had numbness in your fingers or toes?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q63"
      * type = #choice
      * text = "Have you had problems with your joints?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q64"
      * type = #choice
      * text = "Have you had stiffness in your joints?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q65"
      * type = #choice
      * text = "Have you had pain in your joints?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q66"
      * type = #choice
      * text = "Have you had aches or pains in your bones?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q67"
      * type = #choice
      * text = "Have you had aches or pains in your muscles?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q68"
      * type = #choice
      * text = "Have you gained weight?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q69"
      * type = #choice
      * text = "Has weight gain been a problem for you?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

  * item[+]
    * linkId = "EORTCQLQ-Question70-71"
    * type = #group
    * text = "During the past four weeks:"

    * item[+]
      * linkId = "EORTCQLQBR45_Q70"
      * type = #choice
      * text = "Have you had a dry vagina?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q71"
      * type = #choice
      * text = "Have you had discomfort in your vagina?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

  * item[+]
    * linkId = "EORTCQLQ-Question72-73"
    * type = #group
    * text = "Please answer the following two questions only if you have been sexually active:"

    * item[+]
      * linkId = "EORTCQLQBR45_Q72"
      * type = #choice
      * text = "Have you had pain in your vagina during sexual activity?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q73"
      * type = #choice
      * text = "Have you experienced a dry vagina during sexual activity?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

  * item[+]
    * linkId = "EORTCQLQ-Question74-75"
    * type = #group
    * text = "During the past week:"

    * item[+]
      * linkId = "EORTCQLQBR45_Q74"
      * type = #choice
      * text = "Have you been satisfied with the cosmetic result of the surgery?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true

    * item[+]
      * linkId = "EORTCQLQBR45_Q75"
      * type = #choice
      * text = "Have you been satisfied with the appearance of the skin of your affected breast (thoracic area)?"
      * answerValueSet = Canonical(AgreementResponseVS)
      * required = true


---

// File: input/fsh/Questionnaires/RulesetsQuestionnaires.fsh

// Rulesets: shorthand notation to only show a particular question based on the type of comorbidity

// identifies if the question is true 
RuleSet: enableWhenTrue(question)
* enableWhen
  * question = "{question}"
  * operator = #=
  * answerBoolean = true
  
// identifies the type of comorbidity
RuleSet: enableWhenComorbidity(code)
* enableWhen
  * question = "ComorbiditiesSACQ"
  * operator = #=
  * answerCoding = {code}

// identifies the type of treatment with ICHOM custom codes
RuleSet: enableWhenTreatment(code)
* enableWhen[+]
  * question = "TREATMENT_BREAST"
  * operator = #=
  * answerCoding = TreatmentTypesCodeSystem{code}

// identifies the type of snomedcode for treatment
RuleSet: enableWhenTreatmentSCT(code)
* enableWhen[+]
  * question = "TREATMENT_BREAST"
  * operator = #=
  * answerCoding = {code}

// identifies if there was cancer recurrence
RuleSet: enableWhenRecurrence(code)
* enableWhen[+]
  * question = "MalignancyRecur"
  * operator = #=
  * answerCoding = RecurrenceCodeSystem{code}

// identifies the type of breast cancer surgery the patient received
RuleSet: enableWhenSurgeryType(code)
* enableWhen[+]
  * question = "BreastQ_Surgery"
  * operator = #=
  * answerCoding = BreastSurgeryTypesCodeSystem{code}


// identifies the which molecular profiling tool was used
RuleSet: enableWhenSMolecularProfiling(code)
* enableWhen[+]
  * question = "MolecularProfiling"
  * operator = #=
  * answerCoding = MolecularProfilingCodeSystem{code}


---

// File: input/fsh/Terminology.fsh

// DEMOGRAPHICS CodeSystems 
ValueSet: RelationshipStatusVS
Id: RelationshipStatusVS
Title: "Relationship status of patient ValueSet"
Description: "Valueset of the relationship status of a patient"
* insert ValuesetRuleset
* RelationshipStatusCS#U "unmarried"
* RelationshipStatusCS#M "Married"
* RelationshipStatusCS#D "Divorced"
* RelationshipStatusCS#W "Widowed"
* NullFlavor#UNK "unknown"

ValueSet: EducationLevelVS
Id: EducationLevelVS
Title: "Education level of patient ValueSet"
Description: "Valueset of the education level of a patient"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#224294005 "No formal education (finding)"
* SCT#224295006 "Only received primary school education (finding)"
* SCT#224297003 "Educated to secondary school level (finding)"
* SCT#224299000 "Received higher education (finding)"

ValueSet: MenopausalStatusVS
Id: MenopausalStatusVS
Title: "Menopausal status of patient ValueSet"
Description: "Valueset of the menopausal status of a patient"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#309606002 "Before menopause"
* SCT#307429007 "After menopause"
* NullFlavor#ASKU "Asked but unknown"

// Tumor Factors
ValueSet: HistologicalTypeVS
Id: HistologicalTypeVS
Title: "Histological type of the tumor ValueSet"
Description: "Valueset of the histological types of tumors"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#399935008 "Ductal carcinoma in situ - category"
* SCT#373395001 "Invasive ductal carcinoma with an extensive intraductal component"
* SCT#722524005 "Primary invasive pleomorphic lobular carcinoma of breast"
* NullFlavor#OTH "other"
* NullFlavor#UNK "unknown"

ValueSet: GermlineMutationVS
Id: GermlineMutationVS
Title: "Germline Mutation ValueSet"
Description: "Valueset of the genetic mutation predisposing breast cancer"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#445180002 "Breast cancer genetic marker of susceptibility not detected (finding)"
* SCT#412734009 "BRCA1 gene mutation positive (finding)"
* SCT#412738007 "BRCA2 gene mutation detected (finding)"
* NullFlavor#OTH "other"
* SCT#416237000 "Procedure not done (situation)"

ValueSet: GradingVS
Id: GradingVS
Title: "Grading of tumor ValueSet"
Description: "Valueset of the grade of the tumor"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#399415002 "Low grade histologic differentiation (finding)"
* SCT#405986005 "Intermediate grade histologic differentiation (finding)"
* SCT#399611001 "High grade histologic differentiation (finding)"
* NullFlavor#NI "No information"

// BREAST CANCER STAGING GROUP
ValueSet: TNMStageGroupVS
Id: TNMStageGroupVS
Title: "Staging Type for Stage Group ValueSet"
Description: "Valueset indicating the type of staging, clinical or pathological, of breast cancer."
* insert LOINCCopyrightForVS
* insert ValuesetRuleset
* LNC#21908-9 "Stage group.clinical Cancer"
* LNC#21902-2 "Stage group.pathology Cancer"

ValueSet: TNMPrimaryTumorVS
Id: TNMPrimaryTumorVS
Title: "TNM Primary Tumor ValueSet"
Description: "Valueset of the TNM stage for the T category, according to TNM staging rules"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#1222604002 "American Joint Committee on Cancer cTX (qualifier value)"
* SCT#1228882005 "American Joint Committee on Cancer cT0 (qualifier value)"
* SCT#1228885007 "American Joint Committee on Cancer cTis(DCIS) (qualifier value)"
* SCT#1228888009 "American Joint Committee on Cancer cTis(Paget) (qualifier value)"
* SCT#1228889001 "American Joint Committee on Cancer cT1 (qualifier value)"
* SCT#1228929004 "American Joint Committee on Cancer cT2 (qualifier value)"
* SCT#1228938002 "American Joint Committee on Cancer cT3 (qualifier value)"
* SCT#1228944003 "American Joint Committee on Cancer cT4 (qualifier value)"
* SCT#1228950008 "American Joint Committee on Cancer pTX (qualifier value)"
* SCT#1228951007 "American Joint Committee on Cancer pT0 (qualifier value)"
* SCT#1228954004 "American Joint Committee on Cancer pTis(DCIS) (qualifier value)"
* SCT#1228956002 "American Joint Committee on Cancer pTis(Paget) (qualifier value)"
* SCT#1228957006 "American Joint Committee on Cancer pT1 (qualifier value)"
* SCT#1229852009 "American Joint Committee on Cancer pT2 (qualifier value)"
* SCT#1229859000 "American Joint Committee on Cancer pT3 (qualifier value)"
* SCT#1229864001 "American Joint Committee on Cancer pT4 (qualifier value)"
* NullFlavor#UNK "unknown"

ValueSet: TNMRegionalNodesVS
Id: TNMRegionalNodesVS
Title: "TNM Regional Nodes ValueSet"
Description: "Valueset of the TNM stage for the N category, according to TNM staging rules"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset

* SCT#1229966003 "American Joint Committee on Cancer cNX"
* SCT#1229967007 "American Joint Committee on Cancer cN0"
* SCT#1229973008 "American Joint Committee on Cancer cN1"
* SCT#1229978004 "American Joint Committee on Cancer cN2"
* SCT#1229984001 "American Joint Committee on Cancer cN3"
* SCT#1229945006 "American Joint Committee on Cancer pNX"
* SCT#1229947003 "American Joint Committee on Cancer pN0"
* SCT#1229951001 "American Joint Committee on Cancer pN1"
* SCT#1229957002 "American Joint Committee on Cancer pN2"
* SCT#1229962001 "American Joint Committee on Cancer pN3"
* NullFlavor#UNK "unknown"

ValueSet: TNMDistantMetastasesVS
Id: TNMDistantMetastasesVS
Title: "TNM Distant Metastases ValueSet"
Description: "Valueset of the TNM stage for the M category, according to TNM staging rules"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#1229901006 "American Joint Committee on Cancer cM0"
* SCT#1229903009 "American Joint Committee on Cancer cM1"
* SCT#1229916009 "American Joint Committee on Cancer pM1"
* NullFlavor#UNK "unknown"

ValueSet: EstrogenStatusVS
Id: EstrogenStatusVS
Title: "Estrogen receptor status ValueSet"
Description: "Valueset of the Estrogen receptor status"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#373572006 "Clinical finding absent"
* SCT#416053008 "Estrogen receptor positive tumor"
* SCT#416237000 "Procedure not done"
* NullFlavor#UNK "unknown"

ValueSet: ProgesteroneStatusVS
Id: ProgesteroneStatusVS
Title: "Progesterone receptor status ValueSet"
Description: "Valueset of the Progesterone receptor status"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#441118006 "Progesterone receptor negative neoplasm"
* SCT#416561008 "Progesterone receptor positive tumor"
* SCT#416237000 "Procedure not done"
* NullFlavor#UNK "unknown"

ValueSet: HER2ReceptorStatusVS
Id: HER2ReceptorStatusVS
Title: "HER2 receptor status ValueSet"
Description: "Valueset of the HER2 receptor status"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#431396003 "Human epidermal growth factor 2 negative carcinoma of breast"
* SCT#427685000 "Human epidermal growth factor 2 positive carcinoma of breast"
* SCT#280414007 "Equivocal result"
* SCT#416237000 "Procedure not done"

CodeSystem: MolecularProfilingCodeSystem
Id: MolecularProfilingCodeSystem
Title: "Molecular Profiling CodeSystem"
Description: "Codes used to describe the different types of molecular profiling scoring"

* insert CodeSystemRuleset

* #mammaprint "Mammaprint Score" 
* #oncotype "Oncotype Score" 
* #endopredict "Endopredict Score" 

ValueSet: MolecularProfilingStatusVS
Id: MolecularProfilingStatusVS
Title: "Molecular profiling"
Description: "Valueset indicating if a molecular profiling tool was used"
* insert ValuesetRuleset
* include MolecularProfilingCodeSystem#mammaprint "Mammaprint Score" 
* include MolecularProfilingCodeSystem#oncotype "Oncotype Score" 
* include MolecularProfilingCodeSystem#endopredict "Endopredict Score" 

//  BASELINE CLINICAL FACTORS 
ValueSet: SACQPatientComorbidityHistory
Id: SACQPatientComorbidityHistory
Title: "SACQ Patient's comorbidity history ValueSet"
Description: "Patient's documented history of comorbidities"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset 
* include SCT#373572006 "I have no other diseases"
* include SCT#56265001 "Heart disease (For example, angina, heart attack, or heart failure)"
* include SCT#38341003 "High blood pressure"
* include SCT#19829001 "Lung disease (For example,  asthma, chronic bronchitis, or emphysema)"
* include SCT#73211009 "Diabetes"
* include SCT#29384001 "Ulcer or stomach disease"
* include SCT#90708001 "Kidney disease"
* include SCT#235856003 "Liver disease"
* include SCT#414022008 "Anemia or other blood disease"
* include SCT#363346000 "Cancer/Other cancer (within the last 5 years)"
* include SCT#35489007 "Depression"
* include SCT#396275006 "Osteoarthritis, degenerative arthritis"
* include SCT#161891005 "Back pain" 
* include SCT#69896004 "Rheumatoid arthritis"
* include NullFlavor#OTH "Other medical problems" 

ValueSet: BodyWeightVS
Id: BodyWeightVS
Title: "Units of patient's body weight ValueSet"
Description: "Valueset of the unit  of the patient's body weight"
* insert UCUMCopyrightForVS
* insert ValuesetRuleset
* UCUM#kg "kg"
* UCUM#[lb_av] "[lb_av]"

ValueSet: LateralityVS
Id: LateralityVS
Title: "Laterality of breast cancer ValueSet"
Description: "Valueset of the laterality of breast cancer"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#80248007 "Left breast structure"
* SCT#73056007 "Right breast structure"
* SCT#63762007 "Both breasts"

ValueSet: LateralityNewCancerVS
Id: LateralityNewCancerVS
Title: "Laterality of new cancer ValueSet"
Description: "Valueset of the laterality of new breast cancer"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#255208005 "Ipsilateral"
* SCT#255209002 "Contralateral"

//  TREATMENT VARIABLES 
// TreatmentType \\
CodeSystem: TreatmentTypesCodeSystem
Id: TreatmentTypesCodeSystem
Title: "Treatment variables CodeSytem"
Description: "Codes defining types of treatment a breast cancer patient could receive"

* insert CodeSystemRuleset

* #adjuvant-chemotherapy "Adjuvant chemotherapy"
* #neoadjuvant-chemotherapy "Neoadjuvant chemotherapy"
* #targeted-therapy "Targeted therapy"
* #no-treatment "No treatment"

ValueSet: TreatmentTypeVS
Id: TreatmentTypeVS
Title: "Type of treatments ValueSet"
Description: "Valueset of the kind of treatment a patient with breastcancer underwent"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* include TreatmentTypesCodeSystem#no-treatment "No treatment"
* include SCT#387713003 "Surgical procedure"
* include SCT#699455008 "Operative procedure on axilla"
* include SCT#33496007 "Reconstruction of breast" 
* include SCT#108290001 "Radiation oncology AND/OR radiotherapy"
* include TreatmentTypesCodeSystem#adjuvant-chemotherapy "Adjuvant chemotherapy"
* include TreatmentTypesCodeSystem#neoadjuvant-chemotherapy "Neoadjuvant chemotherapy"
* include SCT#169413002 "Hormone therapy"
* include TreatmentTypesCodeSystem#targeted-therapy "Targeted therapy"
* include SCT#76334006 "Immunotherapy"
* include SCT#243114000 "Support"
* NullFlavor#UNK "unknown"

ValueSet: RecommendedTreatmentTypeVS
Id: RecommendedTreatmentTypeVS
Title: "Recommended treatment types ValueSet"
Description: "Valueset of the kind of treatment that the multidisciplinary team recommended"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* include SCT#387713003 "Surgical procedure"
* include SCT#108290001 "Radiation oncology AND/OR radiotherapy"
* include TreatmentTypesCodeSystem#adjuvant-chemotherapy "Adjuvant chemotherapy"
* include TreatmentTypesCodeSystem#neoadjuvant-chemotherapy "Neoadjuvant chemotherapy"
* include SCT#169413002 "Hormone therapy"
* include TreatmentTypesCodeSystem#targeted-therapy "Targeted therapy"
* include SCT#76334006 "Immunotherapy"
* include SCT#243114000 "Support"

// Breast Surgery Type \\
CodeSystem: BreastSurgeryTypesCodeSystem
Id: BreastSurgeryTypesCodeSystem
Title: "Breast surgery types CodeSystem"
Description: "Codes indicating the types of breast surgery a patient underwent"

* insert CodeSystemRuleset

* #bcs "Breast conserving surgery (BCS)"
* #bcs-with-mammoplasty "BCS with mammoplasty"
* #mastectomy-without-immediate-reconstruction "Mastectomy without immediate reconstruction"
* #mastectomy-with-immediate-reconstruction "Mastectomy with immediate reconstruction"

ValueSet: BreastSurgeryTypeVS
Id: BreastSurgeryTypeVS
Title: "Types of breast surgery ValueSet"
Description: "Valueset of the types of breast surgery a patient underwent"
* insert ValuesetRuleset
* include BreastSurgeryTypesCodeSystem#bcs "Breast conserving surgery (BCS)"
* include BreastSurgeryTypesCodeSystem#bcs-with-mammoplasty "BCS with mammoplasty"
* include BreastSurgeryTypesCodeSystem#mastectomy-without-immediate-reconstruction "Mastectomy without immediate reconstruction"
* include BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction "Mastectomy with immediate reconstruction"
* NullFlavor#UNK "unknown"

// Axilla surgery
ValueSet: AxillaSurgeryVS
Id: AxillaSurgeryVS
Title: "Axilla surgery ValueSet"
Description: "Valueset of surgery types of the axilla"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#396487001 "Sentinel lymph node biopsy"
* SCT#234262008 "Excision of axillary lymph node"
* SCT#79544006 "Complete axillary lymphadenectomy"
* NullFlavor#UNK "unknown"

ValueSet: TargetedAxillaSurgeryVS
Id: TargetedAxillaSurgeryVS
Title: "Targeted axilla surgery ValueSet"
Description: "Valueset of targeted surgery types of the axilla"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#396487001 "Sentinel lymph node biopsy"
* SCT#234262008 "Excision of axillary lymph node"
* NullFlavor#UNK "unknown"

// Reconstruction surgery 
CodeSystem: ReconstructionTypeCodeSystem
Id: ReconstructionTypeCodeSystem
Title: "Type of reconstruction surgery CodeSystem"
Description: "Codes indicating the type of reconstruction surgery that is performed"

* insert CodeSystemRuleset

* #direct-implant "Direct implant"
* #staged-implant "Staged implant"
* #autologous "Autologous"
* #both "Both implant and autologous"

ValueSet: ReconstructionTypeVS
Id: ReconstructionTypeVS
Title: "Type of reconstruction surgery ValueSet"
Description: "Valueset of the type of reconstruction surgery that is performed"
* insert ValuesetRuleset
* include ReconstructionTypeCodeSystem#direct-implant "Direct implant"
* include ReconstructionTypeCodeSystem#staged-implant "Staged implant"
* include ReconstructionTypeCodeSystem#autologous "Autologous"
* include ReconstructionTypeCodeSystem#both "Both implant and autologous"
* NullFlavor#UNK "unknown"

CodeSystem: ImplantLocationCodeSystem
Id: ImplantLocationCodeSystem
Title: "Location of the implant CodeSystem"
Description: "Codes indicating the location of the implant that was placed during reconstruction surgery"

* insert CodeSystemRuleset

* #pre-pectoral "Pre-pectoral"
* #sub-pectoral "Sub-pectoral"

ValueSet: ImplantLocationVS
Id: ImplantLocationVS
Title: "Location of the implant ValueSet"
Description: "Valueset of the location of the implant during reconstruction surgery"
* insert ValuesetRuleset
* include ImplantLocationCodeSystem#pre-pectoral "Pre-pectoral"
* include ImplantLocationCodeSystem#sub-pectoral "Sub-pectoral"
// Therapy intent
ValueSet: TherapyIntentVS
Id: TherapyIntentVS
Title: "Intent of therapy ValueSet"
Description: "Valueset of intent of therapy"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#373847000 "Neo-adjuvant - intent"
* SCT#373846009 "Adjuvant - intent"
* NullFlavor#UNK "unknown"

// Radiotherapy
ValueSet: LocationRadiotherapyVS
Id: LocationRadiotherapyVS
Title: "The location of radiotherapy ValueSet"
Description: "Valueset of the location of radiotherapy"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#76752008 "Breast structure"
* SCT#78904004 "Chest wall structure"
* SCT#68171009 "Axillary lymph node structure"
* SCT#76838003 "Structure of supraclavicular lymph node"
* SCT#245282001 "Internal mammary lymph node group"
* SCT#263601005 "Site of tumor"
* SCT#277671009 "Intraoperative"
* NullFlavor#OTH "other"
* NullFlavor#UNK "unknown"

// Chemotherapy
ValueSet: ChemoTherapyTypeVS
Id: ChemoTherapyTypeVS
Title: "Type of chemotherapy ValueSet"
Description: "Valueset of the types of chemotherapy"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#108787006 "Medicinal product containing anthracycline and acting as antineoplastic agent"
* SCT#418965003 "Taxane derivative"
* SCT#768621002 "Product containing platinum and platinum compound"
* SCT#386906001 "Capecitabine"
* NullFlavor#OTH "other"
* NullFlavor#UNK "unknown"

// Hormonal therapy
ValueSet: HormonalTherapyTypeVS
Id: HormonalTherapyTypeVS
Title: "Type of hormonal therapy ValueSet"
Description: "Valueset of the types of hormonal therapy"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#413575009 "Substance with aromatase inhibitor mechanism of action"
* SCT#373336003 "Substance with estrogen receptor antagonist mechanism of action"
* SCT#83152002 "Oophorectomy"
* SCT#418974001 "Gonad regulating hormone agent"
* NullFlavor#OTH "other"
* NullFlavor#UNK "unknown"

// Targeted therapy
ValueSet: TargetedTherapyVS
Id: TargetedTherapyVS
Title: "Type of targeted therapy ValueSet"
Description: "Valueset of the types of targeted therapy"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#784176007 "HER2 (Human epidermal growth factor receptor 2) inhibitor"
* SCT#426265004 "Substance with protein kinase inhibitor mechanism of action"
* SCT#432253008 "Substance with nicotinamide adenine dinucleotide adenosine diphosphate ribosyltransferase inhibitor mechanism of action"
* NullFlavor#OTH "other"
* NullFlavor#UNK "unknown"

// Treatment plan
CodeSystem: TreatmentPlanFollowedCodeSystem
Id: TreatmentPlanFollowedCodeSystem
Title: "Real Treatment Plan Followed CodeSystem"
Description: "Codes covering if the patient followed the multidisciplinary recommended treatment plan"

* insert CodeSystemRuleset

* #no "No, not followed"
* #yes "Yes, fully followed"
* #some "Some treatments followed"

ValueSet: TreatmentPlanFollowedVS
Id: TreatmentPlanFollowedVS
Title: "Real Treatment Plan Followed ValueSet"
Description: "Valueset of if the patient followed the multidisciplinary recommended treatment plan"
* insert ValuesetRuleset
* TreatmentPlanFollowedCodeSystem#no "No, not followed"
* TreatmentPlanFollowedCodeSystem#yes "Yes, fully followed"
* TreatmentPlanFollowedCodeSystem#some "Some treatments followed"

CodeSystem: TreatmentPlanNotFollowedCodeSystem
Id: TreatmentPlanNotFollowedCodeSystem
Title: "Real Treatment Plan Not Followed CodeSystem"
Description: "Codes covering if the patient has not followed the multidisciplinary recommended treatment plan"

* insert CodeSystemRuleset

* #patient-preference "Patient preference"
* #clinical-reasons "Clinical reasons"

ValueSet: TreatmentPlanNotFollowedVS
Id: TreatmentPlanNotFollowedVS
Title: "Treatment Plan Not Followed ValueSet"
Description: "Valueset of reason for the treatment plan not being followed"
* insert ValuesetRuleset
* TreatmentPlanNotFollowedCodeSystem#patient-preference "Patient preference" // SCT#105480006 "Refusal of treatment by patient"
* TreatmentPlanNotFollowedCodeSystem#clinical-reasons "Clinical reasons"
* NullFlavor#UNK "unknown"

// Patient education
CodeSystem: PatientEducationCodeSystem
Id: PatientEducationCodeSystem
Title: "Patient Treatment Education Codesystem"
Description: "Codes covering if the patient received sufficient information about the treatment options"

* insert CodeSystemRuleset

* #strongly-agree "Strongly agree"
* #agree "Agree"
* #somewhat-agree "Somewhat agree"
* #disagree "Disagree"
* #strongly-disagree "Strongly disagree"

ValueSet: PatientEducationVS
Id: PatientEducationVS
Title: "Patient Treatment Education ValueSet"
Description: "Valueset covering if the patient received sufficient information about the treatment options"
* insert ValuesetRuleset
* PatientEducationCodeSystem#strongly-agree "Strongly agree"
* PatientEducationCodeSystem#agree "Agree"
* PatientEducationCodeSystem#somewhat-agree "Somewhat agree"
* PatientEducationCodeSystem#disagree "Disagree" 
* PatientEducationCodeSystem#strongly-disagree "Strongly disagree"

// Patient preference 
CodeSystem: PatientTreatPrefCodeSystem
Id: PatientTreatPrefCodeSystem
Title: "Patient treatment preference CodeSystem"
Description: "Codes covering for why the treatment plan was not followed"

* insert CodeSystemRuleset

* #personal-preference "Personal preference"
* #different-plan-recommended "Different plan recommended by clinical team"

ValueSet: PatientTreatPrefVS
Id: PatientTreatPrefVS
Title: "Patient treatment preference ValueSet"
Description: "Valueset of reason for why the treatment plan was not followed"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* PatientTreatPrefCodeSystem#personal-preference "Personal preference" // SCT#105480006 "Refusal of treatment by patient"
* SCT#309846006 "Treatment not available"
* PatientTreatPrefCodeSystem#different-plan-recommended "Different plan recommended by clinical team"
* NullFlavor#OTH "other"

CodeSystem: TreatmentPlanComplianceCodeSystem
Id: TreatmentPlanComplianceCodeSystem
Title: "Observation identifiers for treatment plan non-compliance reason CodeSystem"
Description: "Codes covering observation identifiers for treatment plan non-compliance reaso"

* insert CodeSystemRuleset

* #reason-for-not-following "Reason for not following original treatment plan"
* #patient-reason-for-not-following "Patient reported reason for not following recommened treatment"

ValueSet: TreatmentPlanComplianceVS
Id: TreatmentPlanComplianceVS
Title: "Observation identifiers for treatment plan non-compliance reason ValueSet"
Description: "Valueset of reason for why the treatment plan was not followed"
* insert ValuesetRuleset
* TreatmentPlanComplianceCodeSystem#reason-for-not-following "Reason for not following original treatment plan"
* TreatmentPlanComplianceCodeSystem#patient-reason-for-not-following "Patient reported reason for not following recommened treatment"
// DISUTILITY OF CARE
// Reoperations
ValueSet: ReoperationTypeVS
Id: ReoperationTypeVS
Title: "Type of re-operation"
Description: "Valueset of the types of re-operation"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#33496007 "Reconstruction of breast"
* SCT#69031006 "Excision of breast tissue"
* SCT#234254000 "Excision of axillary lymph nodes group"
* BreastSurgeryTypesCodeSystem#bcs "Breast conserving surgery (BCS)"
* BreastSurgeryTypesCodeSystem#bcs-with-mammoplasty "Breast conserving surgery with mammoplasty"
* BreastSurgeryTypesCodeSystem#mastectomy-without-immediate-reconstruction "Mastectomy without immediate reconstruction"
* BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction "Mastectomy with immediate reconstruction"
* NullFlavor#UNK "unknown"

ValueSet: InvolvedMarginsReoperationTypeVS
Id: InvolvedMarginsReoperationTypeVS
Title: "Re-operation due to involved margins ValueSet"
Description: "Kind of re-operation due to involved margins"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#373572006 "Clinical finding absent"
* BreastSurgeryTypesCodeSystem#bcs "Breast conserving surgery (BCS)"
* BreastSurgeryTypesCodeSystem#bcs-with-mammoplasty "BCS with mammoplasty"
* BreastSurgeryTypesCodeSystem#mastectomy-without-immediate-reconstruction "Mastectomy without immediate reconstruction"
* BreastSurgeryTypesCodeSystem#mastectomy-with-immediate-reconstruction "Mastectomy with immediate reconstruction"
* NullFlavor#UNK "unknown"

ValueSet: ReoperationReasonVS
Id: ReoperationReasonVS
Title: "Reasoncode of the re-operation"
Description: "Valueset of the reasons of a re-operation"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#1156344002 "Presence of primary malignant neoplasm of breast at surgical margin in excised specimen of breast"
* NullFlavor#OTH "other"

// Complications
CodeSystem: ComplicationImpactCodeSystem
Id: ComplicationImpactCodeSystem
Title: "Impact of complication CodeSystem"
Description: "Codes indicating the impact of a complication experienced by the breast cancer patient"

* insert CodeSystemRuleset

* #no-complication "No complication"
* #prolonged-hospitalization "Complication leading to prolonged hospitalization (>14days)"
* #treatment-discontinuation "Complication leading to discontinuing of treatment"
* #no-changes "Complication, but did not result in any of the abovementioned"

ValueSet: ComplicationImpactVS
Id: ComplicationImpactVS
Title: "Impact of complication ValueSet"
Description: "ValueSet of the impact of a complication experienced by the breast cancer patient"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* ComplicationImpactCodeSystem#no-complication "No complication"
* SCT#240917005 "Interventional radiology"  
* SCT#303577009 "Interventional debulking surgery" 
* ComplicationImpactCodeSystem#prolonged-hospitalization "Complication leading to prolonged hospitalization (>14days)"
* SCT#417005 "Hospital re-admission"
* SCT#397945004 "Unexpected admission to intensive care unit"
* ComplicationImpactCodeSystem#treatment-discontinuation "Complication leading to discontinuing of treatment"
* SCT#182879007 "Medication decreased"
* SCT#419620001 "Death"
* ComplicationImpactCodeSystem#no-changes "Complication, but did not result in any of the abovementioned"
* NullFlavor#UNK "unknown"

CodeSystem: ComplicationTypeCodeSystem
Id: ComplicationTypeCodeSystem
Title: "Type of complication CodeSystem"
Description: "Codes indicating the type of a complication experienced by the breast cancer patient"

* insert CodeSystemRuleset

* #partial-loss "Partial autologous graft loss"
* #total-loss "Total autologous graft loss"
* #delay-wound "Delay wound healing/dehiscence"
* #immune-toxicity "Immune related toxicity"

ValueSet: ComplicationTypeVS
Id: ComplicationTypeVS
Title: "Type of complication ValueSet"
Description: "ValueSet of the type of complication experienced by the breast cancer patient"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#76844004  "Local infection of wound"
* SCT#715068009 "Seroma"
* SCT#385494008 "Hematoma"
* SCT#131148009 "Bleeding"
* SCT#403678005 "Skin flap necrosis"
* ComplicationTypeCodeSystem#partial-loss "Partial autologous graft loss"
* ComplicationTypeCodeSystem#total-loss "Total autologous graft loss"
* SCT#27315000 "Removal of breast implant"
* SCT#371039008 "Thromboembolic disorder"
* SCT#57182000  "Nerve injury"
* ComplicationTypeCodeSystem#delay-wound "Delay wound healing/dehiscence"
* SCT#403675008 "Drug-induced dermatosis"
* SCT#233604007 "Pneumonia"
* SCT#443980004 "Neutropenic sepsis"
* ComplicationTypeCodeSystem#immune-toxicity "Immune related toxicity"
* NullFlavor#UNK "unknown"
* NullFlavor#OTH "other"

// SURVIVAL AND DISEASE CONTROL 
ValueSet: NoYesUnknownVS
Id: NoYesUnknownVS
Title: "Yes, No and Unknown Valueset"
Description: "Valueset with yes, no and unknown answers"
* insert HL7CopyrightForVS
* insert ValuesetRuleset
* YesNoUnkCS#Y "Yes" 
* YesNoUnkCS#N "No"
* YesNoUnkCS#UNK "Unknown"

// Recurrence
CodeSystem: RecurrenceCodeSystem
Id: RecurrenceCodeSystem
Title: "Recurrence of neoplasm CodeSystem"
Description: "Additional code covering whether there is evidence of local, regional or distant recurrence of neoplasm"

* insert CodeSystemRuleset

* #local-recurrence "Yes, local recurrence"
* #regional-recurrence "Yes, regional recurrence" 
* #distant-recurrence "Yes, distant recurrence"

ValueSet: RecurrenceVS
Id: RecurrenceVS
Title: "Recurrence of neoplasm ValueSet"
Description: "Valueset about whether there is evidence of local, regional or distant recurrence of neoplasm"
* insert ValuesetRuleset
* YesNoUnkCS#N "No"
* RecurrenceCodeSystem#local-recurrence "Yes, local recurrence"
* RecurrenceCodeSystem#regional-recurrence "Yes, regional recurrence" 
* RecurrenceCodeSystem#distant-recurrence "Yes, distant recurrence"
* NullFlavor#UNK "unknown"

CodeSystem: RecurrenceMethodCodeSystem
Id: RecurrenceMethodCodeSystem
Title: "Recurrence method CodeSystem"
Description: "Additional code covering combination of radiological and histological diagnosis method"

* insert CodeSystemRuleset

* #radiological-histological "Radiological and histological diagnosis"

ValueSet: RecurrenceMethodVS
Id: RecurrenceMethodVS
Title: "Recurrence method ValueSet"
Description: "Valueset of the methods used to confirm recurrence of breast cancer"
* insert SNOMEDCopyrightForVS
* insert ValuesetRuleset
* SCT#394914008 "Radiology"
* SCT#67151002 "Histologic"
* RecurrenceMethodCodeSystem#radiological-histological "Radiological and histological diagnosis"
* NullFlavor#UNK "unknown"
//  DEGREE OF HEALTH 

// EORTC-QLQ
CodeSystem: AgreementResponseCodeSystem
Id: AgreementResponseCodeSystem
Title: "Agreement response CodeSystem"
Description: "Codes used in a Patient Reported Outcomes Instrument to express the degree of agreement"

* insert CodeSystemRuleset

* #no "Not at all"
* #little "A little"
* #quite "Quite a bit"
* #very "Very much"

ValueSet: AgreementResponseVS
Id: AgreementResponseVS
Title: "Agreement response ValueSet"
Description: "Valueset used in a Patient Reported Outcomes Instrument to express the degree of agreement"
* insert ValuesetRuleset
* AgreementResponseCodeSystem#no "Not at all"
* AgreementResponseCodeSystem#little "A little"
* AgreementResponseCodeSystem#quite "Quite a bit"
* AgreementResponseCodeSystem#very "Very much"

// BreastQ \\
CodeSystem: SatisfactionResponseCodeSystem
Id: SatisfactionResponseCodeSystem
Title: "Satisfaction response CodeSystem"
Description: "Codes used in a Patient Reported Outcomes Instrument to express the statisfation response"

* insert CodeSystemRuleset

* #very-dissatisfied "Very dissatisfied"
* #somewhat-dissatisfied "Somewhat dissatisfied"
* #somewhat-satisfied "Somewhat satisfied"
* #very-satisfied "Very satisfied"

ValueSet: SatisfactionResponseVS 
Id: SatisfactionResponseVS
Title: "Satisfaction response ValueSet"
Description: "Valueset used in a Patient Reported Outcomes Instrument to express the statisfation response"
* insert ValuesetRuleset
* SatisfactionResponseCodeSystem#very-dissatisfied "Very dissatisfied"
* SatisfactionResponseCodeSystem#somewhat-dissatisfied "Somewhat dissatisfied"
* SatisfactionResponseCodeSystem#somewhat-satisfied "Somewhat satisfied"
* SatisfactionResponseCodeSystem#very-satisfied "Very satisfied"


---

// File: input/fsh/Questionnaires/Example-Clinical-Response-01-Baseline.fsh

// Instance: ClinicalResponseBaselineExample
// InstanceOf: QuestionnaireResponse
// Usage: #example
// * questionnaire = Canonical(ClinicalResponseBaseline)
// * status = #completed
// * authored = "2022-09-02T15:41:07.412Z"
// * item[0].linkId = "General-Information-Clinical"
// * item[=].text = "General information"
// * item[=].item[0].linkId = "NA-Clinical"
// * item[=].item[=].text = "What is the patient's medical record number?"
// * item[=].item[=].answer.valueInteger = 11577
// * item[=].item[+].linkId = "LastName-Clinical"
// * item[=].item[=].text = "What is the patient's last name?"
// * item[=].item[=].answer.valueString = "Carrizosa"
// * item[+].linkId = "Demographics"
// * item[=].text = "Demographic factors"
// * item[=].item[0].linkId = "Sex"
// * item[=].item[=].text = "Please indicate the sex of the patient at birth:"
// * item[=].item[=].answer.valueCoding = GenderCS#female "Female"
// * item[=].item[+].linkId = "YearOfBirth"
// * item[=].item[=].text = "In what year was the patient born?"
// * item[=].item[=].answer.valueInteger = 1973
// * item[+].linkId = "Clinical-Factors"
// * item[=].text = "Clinical factors"
// * item[=].item[0].linkId = "HeightValue"
// * item[=].item[=].text = "Please indicate the patient's body height:"
// * item[=].item[=].answer.valueInteger = 65
// * item[=].item[+].linkId = "HeightUnit"
// * item[=].item[=].text = "Please indicate the units of measurement you recorded the patient's height in:"
// * item[=].item[=].answer.valueCoding = urn:uuid:f36dcb8d-aede-4634-9194-f0f948d87ddd#2 "inches"
// * item[=].item[+].linkId = "WeightValue"
// * item[=].item[=].text = "Please indicate the patient's body weight:"
// * item[=].item[=].answer.valueInteger = 167
// * item[=].item[+].linkId = "WeightUnit"
// * item[=].item[=].text = "Please indicate the units of measurement you recorded the patient's weight in:"
// * item[=].item[=].answer.valueCoding = urn:uuid:6d020c76-9ac1-4dfd-bfad-c084afd9f045#2 "lbs"
// * item[=].item[+].linkId = "LATERAL"
// * item[=].item[=].text = "Please indicate the laterality of breast cancer:"
// * item[=].item[=].answer.valueCoding = urn:uuid:e7d240f0-ea4c-4206-b488-f83c055fc1d4#1 "Right breast"
// * item[=].item[+].linkId = "FIRSTBC"
// * item[=].item[=].text = "Please indicate if this is first breast cancer or new cancer on contralateral or ipsilateral breast:"
// * item[=].item[=].answer.valueCoding = urn:uuid:23e2a296-dce5-447d-9a7c-7f4ac97b6ebe#0 "Primary tumor"
// * item[+].linkId = "Tumor-Factors"
// * item[=].text = "Tumor factors"
// * item[=].item[0].linkId = "HistologicalDateKnown"
// * item[=].item[=].text = "Is the date of histological diagnosis known?"
// * item[=].item[=].answer.valueBoolean = true
// * item[=].item[+].linkId = "HistologicalDiagnosisDate"
// * item[=].item[=].text = "Please indicate the initial date of histological diagnosis:"
// * item[=].item[=].answer.valueDate = "2021-07-21"
// * item[=].item[+].linkId = "HISTOTYPE"
// * item[=].item[=].text = "Please indicate the histologic type of the tumor (select all that apply):"
// * item[=].item[=].answer.valueCoding = urn:uuid:54f3b593-e92c-49c2-838a-5e59196de2f0#1 "Invasive ductal carcinoma"
// * item[=].item[+].linkId = "MUTBC"
// * item[=].item[=].text = "Please indicate if the patient carries a genetic mutation predisposing breast cancer:"
// * item[=].item[=].answer.valueCoding = urn:uuid:4574904d-f3a9-44c4-9349-40ea58076505#1 "BRCA 1"
// * item[=].item[+].linkId = "GRADEINV"
// * item[=].item[=].text = "Please indicate the grade of the invasive component of tumor:"
// * item[=].item[=].answer.valueCoding = urn:uuid:ce2aba40-12ae-41cd-85a6-fa8ae68d3284#1 "Grade 2"
// * item[=].item[+].linkId = "GRADEDCIS"
// * item[=].item[=].text = "Please indicate the tumor grade of DCIS component of tumor:"
// * item[=].item[=].answer.valueCoding = urn:uuid:28afa2eb-fab0-4985-85c0-b560b1de5cb4#1 "Intermediate"
// * item[=].item[+].linkId = "TNMCT_BREAST"
// * item[=].item[=].text = "Please indicate the clinical tumor stage (per AJCC 5th - 7th Ed.):"
// * item[=].item[=].answer.valueCoding = urn:uuid:bbf043ae-77f6-4d72-9c26-54120c64877a#4 "cT2"
// * item[=].item[+].linkId = "TNMCN_BREAST"
// * item[=].item[=].text = "Please indicate the clinical nodal stage (per AJCC 5th - 7th Ed.):"
// * item[=].item[=].answer.valueCoding = urn:uuid:aac07446-dc50-4dfe-a241-77d0fa203591#2 "cN1"
// * item[=].item[+].linkId = "TNMCM_BREAST"
// * item[=].item[=].text = "Please indicate the clinical distant metastasis (per AJCC 5th - 7th Ed.):"
// * item[=].item[=].answer.valueCoding = urn:uuid:5f8d75d7-3fd5-4899-a6af-6e1ea80520b3#2 "cM0"
// * item[=].item[+].linkId = "ERSTATUS"
// * item[=].item[=].text = "Please indicate if the estrogen receptor status is positive:"
// * item[=].item[=].answer.valueCoding = urn:uuid:93e05a33-3b00-4ae9-b4cd-ba7ba3e1f54e#1 "Yes"
// * item[=].item[+].linkId = "PRSTATUS"
// * item[=].item[=].text = "Please indicate if the progesterone receptor status is positive:"
// * item[=].item[=].answer.valueCoding = urn:uuid:02d110fd-1183-41fa-bacb-a689e0c67149#999 "Unkown"
// * item[=].item[+].linkId = "HER2STATUS"
// * item[=].item[=].text = "Please indicate if the HER2 receptor status is positive:"
// * item[=].item[=].answer.valueCoding = urn:uuid:17b96500-8800-4371-87d3-1498c8d2e039#1 "Positive"


---

