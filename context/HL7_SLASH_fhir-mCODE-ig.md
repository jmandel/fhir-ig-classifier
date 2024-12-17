File: repos/HL7_SLASH_fhir-mCODE-ig/sushi-config.yaml

id: hl7.fhir.us.mcode
canonical: http://hl7.org/fhir/us/mcode
version:  4.0.0
name: MinimalCommonOncologyDataElements
title: "minimal Common Oncology Data Elements (mCODE) Implementation Guide"
status: active
publisher:
  name: HL7 International / Clinical Interoperability Council
  url: http://www.hl7.org/Special/committees/cic
  email: ciclist@lists.HL7.org
jurisdiction: urn:iso:std:iso:3166#US "United States of America"
description: mCODE™ (short for Minimal Common Oncology Data Elements) is an initiative intended to assemble a core set of structured data elements for oncology electronic health records.
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.uv.genomics-reporting: 2.0.0
#  hl7.fhir.uv.extensions: 5.1.0-cibuild
  hl7.fhir.us.core: 
    version: 6.1.0
    id: hl7fhiruscore
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: cic
parameters:
  show-inherited-invariants: false
  version-comparison: n/a
  path-expansion-params: '../../exp-params.json'  #path is relative to [base]/fsh-generated/resources
  path-binary: input/attachments
  apply-wg: true
  default-version: true
  version-comparison-master: true 
  auto-oid-root: 2.16.840.1.113883.4.642.40.15
copyrightYear: 2019+
releaseLabel: STU4
pages:
  index.md:
    title: Home
  group-patient.md:
    title: Patient Information
  group-disease.md:
    title: Disease Characterization
  group-assessment.md:
    title: Assessment
  group-genomics.md:
    title: Genomics
  group-treatment.md:
    title: Treatments
  group-outcome.md:
    title: Outcomes
  conformance-general.md:
    title: Conformance Expectations
  conformance-patients.md:
    title: Identifying In-Scope Patients
  conformance-profiles.md:
    title: Profile Conformance
  conformance-uscdi-plus.md:
    title: USCDI+ Cancer Conformance
  terminology.md:
    title: Terminology
  dictionary.md:
    title: Data Dictionary
  profiles.md:
    title: Profiles
  extensions.md:
    title: Extensions
  valuesets.md:
    title: Value Sets
  codesystems.md:
    title: Code Systems
  capabilitystatements.md:
    title: Capability Statements
  artifacts.html:
    title: Artifacts Summary
  basic_examples.md:
    title: Basic Examples
  examples_genomics.md:
    title: Genomics Examples
  examples.md:
    title: Extended Example
  examples_pediatric.md:
    title: Extended Pediatric Example
  change_log.md:
    title: Release Notes
  glossary.md:
    title: Glossary
  downloads.md:
    title: Download Specification
  ImplementationGuide-hl7.fhir.us.mcode.md:
    title: mCODE Implementation Guide Resource

menu:
  Home: index.html
  Content by Group:
    Patient: group-patient.html
    Disease: group-disease.html
    Assessment: group-assessment.html
    Genomics: group-genomics.html
    Treatment: group-treatment.html
    Outcome: group-outcome.html
  Conformance:
    General Expectations: conformance-general.html
    Identifying mCODE Patients: conformance-patients.html
    Profile Conformance: conformance-profiles.html
    USCDI+ Cancer Conformance: conformance-uscdi-plus.html
    Terminology: terminology.html
  FHIR Artifacts:
    Profiles: profiles.html
    Extensions: extensions.html
    Value Sets: valuesets.html
    Code Systems: codesystems.html
    Capability Statements: capabilitystatements.html
    Concept Maps: artifacts.html#terminology-concept-maps
    Complete Listing: artifacts.html
  Examples:
    Basic Examples: basic_examples.html
    Extended Example: examples.html
    Extended Pediatric Example: examples_pediatric.html
    Genomics Examples: examples_genomics.html
  Release Notes: change_log.html
  More:
    Data Dictionary: dictionary.html
    Radiotherapy Glossary:  glossary.html
    Download Specification: downloads.html
    Other Versions: http://hl7.org/fhir/us/mcode/history.html


---

// File: input/pagecontent/basic_examples.md

### [Body Surface Area][BodySurfaceArea]

* [Body Surface Area - 0.27](Observation-body-surface-area-example.html)

### [Cancer Disease Status](StructureDefinition-mcode-cancer-disease-status.html)

* [Cancer Disease Status Improved](Observation-cancer-disease-status-improved.html)

### [Cancer Patient](StructureDefinition-mcode-cancer-patient.html)

* [Cancer Patient Adam](Patient-cancer-patient-adam-everyman.html)
* [Cancer Patient Eve](Patient-cancer-patient-eve-anyperson.html)
* [Cancer Patient John](Patient-cancer-patient-john-anyperson.html)

### [Cancer Related Medication Request](StructureDefinition-mcode-cancer-related-medication-request.html)

* [CisPlatin - ChemoInfusion](MedicationRequest-cancer-related-medication-request-cisplatin.html)
* [CisPlatin - ChemoInfusion - Stopped](MedicationRequest-cancer-related-medication-request-cisplatin-stopped.html)
* [GeFitinib - Oral Tablet](MedicationRequest-cancer-related-medication-request-gefitinib.html)

### [Cancer Related Surgical Procedure][CancerRelatedSurgicalProcedure]
* [Lobectomy](Procedure-cancer-related-surgical-procedure-lobectomy.html)

### [CancerStage - TNM][CancerStage]

* [TNM Clinical Distant Metastases Category - cM0](Observation-tnm-clinical-distant-metastases-category-cM0.html)
* [TNM Clinical Primary Tumor Category - cT3](Observation-tnm-clinical-primary-tumor-category-cT3.html)
* [TNM Clinical Regional Nodes Category - cN3](Observation-tnm-clinical-regional-nodes-category-cN3.html)
* [TNM Clinical Stage Group 3](Observation-tnm-clinical-stage-group-3c.html)
* [Prognostic Factor: Lab Result Hemoglobin](Observation-lab-result-observation-hemoglobin.html)

### [CancerStage - non-TNM][CancerStage]

* [Binet staging for chronic lymphocytic leukemia](Observation-binet-stage-group-B.html)
* [Rai staging for chronic lymphocytic leukemia](Observation-rai-stage-II.html)
* [Cotswold staging of Hodgkin's disease](Observation-hodgkins-lymphoma-stage-IIIe.html)
* [Gynecologic tumor staged by FIGO (International Federation of Gynecology and Obstetrics)](Observation-figo-stage-IIIA.html)
* [Melanoma Breslow Depth Stage](Observation-melanoma-breslow-depth-stage.html)
* [Melanoma Clark Level 4](Observation-melanoma-clark-level-4.html)
* [Myeloma stage by International Staging System (ISS)](Observation-multiple-myeloma-iss-stage-II.html)
* [Myeloma stage by Revised International Staging System (RISS)](Observation-multiple-myeloma-riss-stage-II.html)
* [Neuroblastoma INSS Stage III](Observation-neuroblastoma-inss-stage-III.html)
* [Neuroblastoma INRGSS Stage M](Observation-neuroblastoma-inrgss-stage-MS.html)
* [Prostate cancer graded by Gleason Grade Group](Observation-gleason-grade-group-4.html)
* [Rhabdomyosarcoma Clinical Group Stage IA](Observation-rhabdomyosarcoma-clinical-group-stage-IA.html)
* [Wilms Tumor Stage III](Observation-wilms-tumor-stage-III.html)

### [Comorbidities]

* [Cancer Related Comorbidities - John Anyperson](Observation-cancer-related-comorbidities-john-anyperson.html)
* [Congestive Heart Failure Condition](Condition-john-anyperson-chf.html)


### [Deauville Scale - Five][DeauvilleScale]

* [Deauville Scale - Five](Observation-deauville-scale-five.html)

### [ECOG Performance Status][ECOGPerformanceStatus]

* [ECOG Performance - Fully Active](Observation-ecog-performance-status-fully-active.html)

### [Genomic Region Studied][GenomicRegionStudied]

* [Genomic Region Studied - STK11](Observation-genomic-region-studied-stk11.html)

### [Genomics Report][GenomicsReport]

* [Genomic Diagnostic Report - John Anyperson](DiagnosticReport-genomics-report-john-anyperson.html)

### [History of Metastatic Cancer][HistoryOfMetastaticCancer]

* [History of Cancer Metastatic to Liver](Observation-history-of-cancer-metastatic-to-liver.html)
* [No History of Metastatic Cancer (explicit assertion)](Observation-no-history-of-metastatic-cancer.html)

### [Human Specimen][HumanSpecimen]

* [Human Specimen - Lung](Specimen-human-specimen-lung.html)
* [Human Specimen - Tumor](Specimen-tumor-specimen-lobular-carcinoma-left-breast.html)

### [Genomic Variant][GenomicVariant]

* [Genomic Variant - Gene Fusion](Observation-genomic-variant-fusion.html)
* [Genomic Variant - Single Nucleotide Change](Observation-genomic-variant-somatic-single-nucleotide.html)
* [Genomic Variant - Single Germline Deletion](Observation-genomic-variant-germline-deletion.html)

### [Histologic Behavior and Type][HistologicBehaviorAndType]

* [Histologic Behavior and Type - Non-Small Cell, Malignant, Primary Site](Observation-histologic-behavior-and-type-non-small-cell.html)

### [Histologic Grade][HistologicGrade]

* [Histologic Grade - Intermediate](Observation-histologic-grade-intermediate.html)

### [Karnofsky Performance Status][KarnofskyPerformanceStatus]

* [Karnofsky Performance State - Normal Activities](Observation-karnofsky-performance-status-normal-activity.html)

### [Lansky Play Performance Status][LanskyPlayPerformanceStatus]

* [Lansky Play Performance Status - 20](Observation-lansky-play-performance-status-twenty.html)

### [mCODE Patient Group][MCODEPatientGroup]

* [Group identifying in-scope patients](Group-group-mcode-patients.html)

### [Primary Cancer Condition][PrimaryCancerCondition]

* [Chronic lymphoid leukemia, Binet Stage A](Condition-primary-cancer-condition-cll.html)
* [Non-Small Cell Lung Cancer, Stage IIc](Condition-primary-cancer-condition-nsclc.html)
* [Post-coordination example with separate codes for morphology and bodySite](Condition-primary-cancer-condition-breast.html)

### [Radiotherapy Course Summary][RadiotherapyCourseSummary]

* [Radiotherapy summary with novel modality (neutron capture)](Procedure-radiotherapy-treatment-summary-other-with-text.html)

### [Radiotherapy Volume][RadiotherapyVolume]

* [Lower lobe of left lung](BodyStructure-john-anyperson-treatment-volume.html)

### [Risk Assessments][CancerRiskAssessment]

* [Rhabdomyosarcoma - Low Risk](Observation-rhabdomyosarcoma-risk-assessment-low.html)
* [All Risk Assessment - High Risk](Observation-all-risk-assessment-high.html)

### [Secondary Cancer Condition][SecondaryCancerCondition]

* [Brain Metastases](Condition-secondary-cancer-condition-brain-mets.html)

### [Tumor][Tumor]

* [Lobular tumor in left breast](BodyStructure-tumor-lobular-carcinoma-left-breast.html)

### [Tumor Marker Test][TumorMarkerTest]

* [Tumor Marker Test - Epidermal Growth Factor](Observation-tumor-marker-test-egf.html)

### [Tumor Morphology][TumorMorphology]

* [Tumor Morphology Report - Non-Small Cell Carcinoma, Malignant, Primary Site, Intermediate Grade](Observation-tumor-morphology-report-non-small-cell-intermediate-grade.html)

### [Tumor Size][TumorSize]

* [Tumor size by gross anatomy](Observation-tumor-size-pathology.html)


{% include markdown-link-references.md %}

---

// File: input/pagecontent/capabilitystatements.md

Different Capability Statements in mCODE are associated with alternative methods of determining which patients are “in-scope” for mCODE (meaning cancer patients whose data is presented or exchanged with the intention of conforming to mCODE). For further information, see [Identifying In-Scope Patients](conformance-patients.html).

The following Capability Statements are defined in mCODE:

* For the information sender:  
  * [mcode-sender-cancer-conditions-then-patients]
  * [mcode-sender-patients-and-cancer-conditions]
  * [mcode-sender-patient-bundle]
  * [mcode-sender-patients-in-group]
  * [mcode-sender-patients-with-cancer-condition]

* For the information receiver:
  * [mcode-receiver-cancer-conditions-then-patients]
  * [mcode-receiver-patients-and-cancer-conditions]
  * [mcode-receiver-patient-bundle]
  * [mcode-receiver-patients-in-group]
  * [mcode-receiver-patients-with-cancer-condition]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/change_log.md


For a history of changes prior to STU4, please see the prior change logs in the [appropriate versions](https://hl7.org/fhir/us/mcode/history.html).

### Support for Staging Systems
See the section on cancer staging.

### Addition of Risk Assessment Profiles

Risk assessments have been identified as an essential piece of information to represent a cancer patient. To address this, an abstract, generic profile was created for risk assessment, and specific risk assessment profiles were added for illustrative purposes:

* [CancerRiskAssessment]
* [RhabdomyosarcomaRiskAssessment]
* [ALLRiskAssessment]

### Addition of Histology Profiles

Three new profiles were added for histologic reporting. [HistologicBehaviorAndType] reports the morphology and type of the tumor using ICD-O-3 codes and the proper suffix, while [HistologicGrade] reports the grade of the tumor. Both profiles are referenced in a summary with the [TumorMorphology] profile.

* [HistologicBehaviorAndType]
* [HistologicGrade]
* [TumorMorphology]

### Modification of Medication Profiles

The normalization basis for medication dosage is important, especially for pediatric oncology. As a result, the [CancerRelatedMedicationAdministration] and [CancerRelatedMedicationRequest] profiles were modified to include an extension for the normalization basis used.

### Addition of Lansky Play Performance Profile

The Lansky Play Performance assessment was identified as a key performance assessment used when treating pediatric cancer patients. As a result, the [LanskyPlayPerformanceStatus] profile was added.

### Addition of Deauville Scale Profile

Deauville Scale is a common assessment performed for lymphoma cancer patients, and as a result, a [DeauvilleScale] profile was added to mCODE.


### Addition of Body Surface Area Profile

Body surface area is measured/calculated commonly for pediatric patients and used to determine medication dosage. As a result, a [BodySurfaceArea] profile was added to mCODE.

### Clarified Codes for Cancer Disease Status

Adjusted the [ConditionStatusTrendVS] to avoid confusion. In mCODE STU3, some of the values can be true at the same time (example: a patient’s condition could have improved AND be in full remission). However, value[x] is 0.1. As a result, the codes for in full remission, partial remission, and distant metastasis present were moved into a maximum value set to ensure backward compatibility with this change.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/codesystems.md

The following code systems are defined in mCODE:

* [SnomedRequestedCS]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/ConceptMap-TG263CM-intro.md

###  Structure of this Concept Map

[TG263] is a source for standards in radiotherapy, proposed in 2018 by the American Association of Physicists in Medicine (AAPM). It is focused on describing body structures and location. mCODE uses SNOMED CT codes and qualifiers for treatment locations. See the brief discussion in [RadiotherapyTreatmentLocationVS]. This concept map shows how each term in TG263 maps to SNOMED CT.

Some of the TG263 terms are pre-coordinated, incorporating laterality and other qualifiers directly in the term. For the mapping to SNOMED CT, a code + laterality + additional qualifier(s) approach is used to uniquely map each TG263 concept. The mapping uses the 'product' field of each mapped element to enumerate the qualifiers needed in combination with the SNOMED CT code to express the same treatment location as the TG263 concept.

The mapping was initially documented by [spreadsheet](TG263_Nomenclature_to_SNOMEDCT_Codes_and_Qualifiers.xlsx) in the STU2 version of the IG, and this ConceptMap, derived directly from the spreadsheet using a [script](https://github.com/HL7/fhir-mCODE-ig/blob/master/tools/tg263ConceptMap.rb), has now been added to better support implementers.

Efforts to define SNOMED CT are ongoing for two of the TG263 concepts (Spc_Bowel and Spc_Bowel_Small) and two of the qualifiers (Level IIA and Level IIB).

### TG263 to SNOMEDCT Codes and Qualifiers Mapping

|A_Aorta| Aorta | &#8594; | 15825003 |  Aortic structure (body structure) | | | | |
|A_Aorta_Asc| Ascending Aorta | &#8594; | 54247002 |  Ascending aorta structure (body Structure) | | | | |
|A_Brachiocephls| Brachiocephalic Artery | &#8594; | 425444002 |  Branch of brachiocephalic artery (body structure) | | | | |
|A_Carotid| Common Carotid Artery | &#8594; | 69105007 |  Carotid artery structure (body structure) | | | | |
|A_Carotid_L| Carotid Artery | &#8594; | 69105007 |  Carotid artery structure (body structure) | 7771000| left (qualifier value)| | |
|A_Carotid_R| Carotid Artery | &#8594; | 69105007 |  Carotid artery structure (body structure) | 24028007| right (qualifier value)| | |
|A_Celiac| Celiac Artery | &#8594; | 57850000 |  Structure of celiac artery (body structure) | | | | |
|A_Coronary| Coronary Artery | &#8594; | 41801008 |  Coronary artery structure (body structure) | | | | |
|A_Coronary_L| Coronary Artery Left | &#8594; | 41801008 |  Coronary artery structure (body structure) | 7771000| left (qualifier value)| | |
|A_Coronary_R| Coronary Artery Right | &#8594; | 41801008 |  Coronary artery structure (body structure) | 24028007| right (qualifier value)| | |
|A_Femoral_L| Femoral Artery Left | &#8594; | 7657000 |  Structure of femoral artery (body structure) | 7771000| left (qualifier value)| | |
|A_Femoral_R| Femoral Artery Right | &#8594; | 7657000 |  Structure of femoral artery (body structure) | 24028007| right (qualifier value)| | |
|A_Humeral_Cflx_L| Circumflex Humeral Artery Left | &#8594; | 244314003 |  Circumflex humeral artery (body structure) | 7771000| Left (qualifier value)| | |
|A_Humeral_Cflx_R| Circumflex Humeral Artery Right | &#8594; | 244314003 |  Circumflex humeral artery (body structure) | 24028007| right (qualifier value)| | |
|A_Hypophyseal_I| Hypophyseal Artery Inferior | &#8594; | 74200005 |  Structure of inferior hypophyseal artery (body structure) | | | | |
|A_Hypophyseal_S| Hypophyseal Artery Superior | &#8594; | 55601007 |  Structure of superior hypophyseal artery (body structure) | | | | |
|A_Iliac_Cflx_L| Circumflex Left Iliac Artery | &#8594; | 244327004 |  Circumflex iliac artery (body structure) | 7771000| Left (qualifier value)| | |
|A_Iliac_Cflx_R| Circumflex Right Iliac Artery | &#8594; | 244327004 |  Circumflex iliac artery (body structure) | 24028007| right (qualifier value)| | |
|A_Iliac_Ext_L| External iliac artery Left | &#8594; | 113269004 |  Structure of external iliac artery (body structure) | 7771000| Left (qualifier value)| | |
|A_Iliac_Ext_R| External iliac artery Right | &#8594; | 113269004 |  Structure of external iliac artery (body structure) | 24028007| right (qualifier value)| | |
|A_Iliac_Int_L| Internal iliac artery Left | &#8594; | 90024005 |  Structure of internal iliac artery (body structure) | 7771000| Left (qualifier value)| | |
|A_Iliac_Int_R| Internal iliac artery Right | &#8594; | 90024005 |  Structure of internal iliac artery (body structure) | 24028007| right (qualifier value)| | |
|A_Iliac_L| Common iliac artery Left | &#8594; | 73634005 |  Common iliac artery structure (body structure) | 7771000| Left (qualifier value)| | |
|A_Iliac_R| Common iliac artery Right | &#8594; | 73634005 |  Common iliac artery structure (body structure) | 24028007| right (qualifier value)| | |
|A_LAD| Anterior interventricular branch of LCA (left anterior descending artery) | &#8594; | 33795007 |  Structure of anterior descending branch of left coronary artery (body structure) | | | | |
|A_Mesenteric_I| Inferior mesenteric artery  | &#8594; | 33795007 |  Structure of inferior mesenteric artery (body structure) | | | | |
|A_Mesenteric_S| Superior mesenteric artery  | &#8594; | 42258001 |  Superior mesenteric artery structure (body structure) | | | | |
|A_Pulmonary| Pulmonary Artery | &#8594; | 81040000 |  Pulmonary artery structure (body structure) | | | | |
|A_Subclavian| Subclavian Artery | &#8594; | 36765005 |  Structure of subclavian artery (body structure) | | | | |
|A_Subclavian_L| Subclavian Artery Left | &#8594; | 36765005 |  Structure of subclavian artery (body structure) | 7771000| left (qualifier value)| | |
|A_Subclavian_R| Subclavian Artery Right | &#8594; | 36765005 |  Structure of subclavian artery (body structure) | 24028007| right (qualifier value)| | |
|A_Vertebral| Vertebral arteries | &#8594; | 85234005 |  Structure of vertebral artery (body structure) | | | | |
|A_Vertebral_L| Vertebral arteries left | &#8594; | 85234005 |  Structure of vertebral artery (body structure) | 7771000| left (qualifier value)| | |
|A_Vertebral_R| Vertebral arteries right | &#8594; | 85234005 |  Structure of vertebral artery (body structure) | 24028007| right (qualifier value)| | |
|Acetabulum_L| Acetabulum | &#8594; | 37783008 |  Bone structure of acetabulum (body structure) | 7771000| Left (qualifier value)| | |
|Acetabulum_R| Acetabulum | &#8594; | 37783008 |  Bone structure of acetabulum (body structure) | 24028007| Right (qualifier value)| | |
|Acetabulums| Acetabulum | &#8594; | 37783008 |  Bone structure of acetabulum (body structure) | | | | |
|AirWay_Dist| Distal Airway | &#8594; | 89187006 |  Airway structure (body structure) | | |46053002| distal (qualifier value)|
|AirWay_Prox| Proximal Airway | &#8594; | 89187006 |  Airway structure (body structure) | | |40415009| proximal (qualifier value)|
|Anus| Anus | &#8594; | 123956007 |  Anus part (body structure) | | | | |
|Appendix| Appendix | &#8594; | 66754008 |  Appendix structure (body structure) | | | | |
|Arytenoid| Arytenoid cartilage | &#8594; | 77578007 |  Arytenoid cartilage structure (body structure) | | | | |
|Arytenoid_L| Arytenoid cartilage Left | &#8594; | 77578007 |  Arytenoid cartilage structure (body structure) | 7771000| left (qualifier value)| | |
|Arytenoid_R| Arytenoid cartilage Right | &#8594; | 77578007 |  Arytenoid cartilage structure (body structure) | 24028007| right (qualifier value)| | |
|Atrium| Atrium of the heart  | &#8594; | 59652004 |  Atrial structure (body structure) | | | | |
|Atrium_L| Atrium of the heart Left | &#8594; | 59652004 |  Atrial structure (body structure) | 7771000| left (qualifier value)| | |
|Atrium_R| Atrium of the heart Right | &#8594; | 59652004 |  Atrial structure (body structure) | 24028007| right (qualifier value)| | |
|BileDuct_Common| Common bile duct | &#8594; | 79741001 |  Common bile duct structure (body structure) | | | | |
|Bladder| Urinary Bladder | &#8594; | 89837001 |  Urinary bladder structure (body structure) | | | | |
|Bladder_Wall| Bladder Wall | &#8594; | 393006 |  Structure of wall of urinary bladder (body structure) | | | | |
|Bone| Bone | &#8594; | 119186007 |  Bone part (body structure) | | | | |
|Bone_Ethmoid| Ethmoid Bone | &#8594; | 52374004 |  Ethmoid bone structure (body structure) | | | | |
|Bone_Frontal| Frontal Bone | &#8594; | 74872008 |  Frontal bone structure (body structure) | | | | |
|Bone_Hyoid| Hyoid Bone | &#8594; | 21387005 |  Hyoid bone structure (body structure) | | | | |
|Bone_Ilium| Ilium | &#8594; | 22356005 |  Bone structure of ilium (body structure) | | | | |
|Bone_Ilium_L| Ilium Left | &#8594; | 22356005 |  Bone structure of ilium (body structure) | 7771000| left (qualifier value)| | |
|Bone_Ilium_R| Ilium Right | &#8594; | 22356005 |  Bone structure of ilium (body structure) | 24028007| right (qualifier value)| | |
|Bone_Incus| Incus | &#8594; | 421793000 |  Bone structure of incus (body structure) | | | | |
|Bone_Incus_L| Incus Left | &#8594; | 421793000 |  Bone structure of incus (body structure) | 7771000| left (qualifier value)| | |
|Bone_Incus_R| Incus Right | &#8594; | 421793000 |  Bone structure of incus (body structure) | 24028007| right (qualifier value)| | |
|Bone_Ischium_L| Ischium Left | &#8594; | 85710004 |  Bone structure of ischium (body structure) | 7771000| left (qualifier value)| | |
|Bone_Ischium_R| Ischium Right | &#8594; | 85710004 |  Bone structure of ischium (body structure) | 24028007| right (qualifier value)| | |
|Bone_Lacrimal| Lacrimal Bone | &#8594; | 6229007 |  Lacrimal bone structure (body structure) | | | | |
|Bone_Lacrimal_L| Lacrimal Bone Left | &#8594; | 6229007 |  Lacrimal bone structure (body structure) | 7771000| left (qualifier value)| | |
|Bone_Lacrimal_R| Lacrimal Bone Right | &#8594; | 6229007 |  Lacrimal bone structure (body structure) | 24028007| right (qualifier value)| | |
|Bone_Mandible| Mandible | &#8594; | 91609006 |  Bone structure of mandible (body structure) | | | | |
|Bone_Mastoid| Both Mastoids | &#8594; | 59066005 |  Mastoid structure (body structure) | | | | |
|Bone_Mastoid_L| Left Mastoid Bone | &#8594; | 59066005 |  Mastoid structure (body structure) | 7771000| left (qualifier value)| | |
|Bone_Mastoid_R| Right Mastoid Bone | &#8594; | 59066005 |  Mastoid structure (body structure) | 24028007| right (qualifier value)| | |
|Bone_Nasal| Nasal Bone | &#8594; | 74386004 |  Nasal bone structure (body structure) | | | | |
|Bone_Nasal_L| Nasal Bone Left | &#8594; | 74386004 |  Nasal bone structure (body structure) | 7771000| left (qualifier value)| | |
|Bone_Nasal_R| Nasal Bone Right | &#8594; | 74386004 |  Nasal bone structure (body structure) | 24028007| right (qualifier value)| | |
|Bone_Occipital| Occipital Bone | &#8594; | 31640002 |  Occipital bone structure (body structure) | | | | |
|Bone_Palatine| Palatine  bone | &#8594; | 51283005 |  Palatine bone structure (body structure) | | | | |
|Bone_Palatine_L| Palatine bone Left | &#8594; | 51283005 |  Palatine bone structure (body structure) | 7771000| left (qualifier value)| | |
|Bone_Palatine_R| Palatine bone Right | &#8594; | 51283005 |  Palatine bone structure (body structure) | 24028007| right (qualifier value)| | |
|Bone_Parietal| Parietal bone | &#8594; | 24924006 |  Parietal bone structure (body structure) | | | | |
|Bone_Parietal_L| Parietal bone Left | &#8594; | 24924006 |  Parietal bone structure (body structure) | 7771000| left (qualifier value)| | |
|Bone_Parietal_R| Parietal bone Right | &#8594; | 24924006 |  Parietal bone structure (body structure) | 24028007| right (qualifier value)| | |
|Bone_Pelvic| Pelvic Bones (Bony Pelvis) | &#8594; | 118645006 |  Structure of innominate bone and/or sacrum and/or coccyx (body structure) | | | | |
|Bone_Pelvic_L| Bony Pelvis Left | &#8594; | 118645006 |  Structure of innominate bone and/or sacrum and/or coccyx (body structure) | 7771000| left (qualifier value)| | |
|Bone_Pelvic_R| Bony Pelvis Right | &#8594; | 118645006 |  Structure of innominate bone and/or sacrum and/or coccyx (body structure) | 24028007| right (qualifier value)| | |
|Bone_Sphenoid| Sphenoid Bone | &#8594; | 73117003 |  Sphenoid bone structure (body structure) | | | | |
|Bone_Temporal| Temporal Bone | &#8594; | 60911003 |  Temporal bone structure (body structure) | | | | |
|Bone_Temporal_L| Temporal Bone Left | &#8594; | 60911003 |  Temporal bone structure (body structure) | 7771000| Left (qualifier value)| | |
|Bone_Temporal_R| Temporal Bone Right | &#8594; | 60911003 |  Temporal bone structure (body structure) | 24028007| Right (qualifier value)| | |
|Bone_Zygomatic_L| Zygomatic Bone Left | &#8594; | 13881006 |  Zygomatic bone structure (body structure) | 7771000| left (qualifier value)| | |
|Bone_Zygomatic_R| Zygomatic Bone Right | &#8594; | 13881006 |  Zygomatic bone structure (body structure) | 24028007| right (qualifier value)| | |
|Bone_Zygomatics| Zygomatic Bone | &#8594; | 13881006 |  Zygomatic bone structure (body structure) | | | | |
|BoneMarrow| Bone Marrow | &#8594; | 14016003 |  Bone marrow structure (body structure) | | | | |
|Diaphragm| Diaphragm | &#8594; | 5798000 |  Diaphragm structure (body structure) | | | | |
|Bowel| Bowel  | &#8594; | 113276009 |  Intestinal structure (body structure) | | | | |
|Bowel_Large| Large Bowel | &#8594; | 14742008 |  Structure of large intestine (body structure) | | | | |
|Bowel_Small| Small Bowel (small intestine) | &#8594; | 30315005 |  Structure of small intestine (body structure) | | | | |
|BrachialPlex_L| Brachial plexus Left | &#8594; | 36582005 |  Brachial plexus structure (body structure) | 7771000| left (qualifier value)| | |
|BrachialPlex_R| Brachial plexus Right | &#8594; | 36582005 |  Brachial plexus structure (body structure) | 24028007| right (qualifier value)| | |
|BrachialPlexs| Brachial plexus | &#8594; | 36582005 |  Brachial plexus structure (body structure) | | | | |
|Brain| Brain | &#8594; | 12738006 |  Brain structure (body structure) | | | | |
|Brainstem| Brain Stem | &#8594; | 15926001 |  Brainstem structure (body structure) | | | | |
|Brainstem_Core| Core of the brainstem | &#8594; | 15926001 |  Brainstem structure (body structure) | | |260235002| Core (qualifier value)|
|Brainstem_Surf| Surface of the brainstem | &#8594; | 15926001 |  Brainstem structure (body structure) | | |410679008| Surface (qualifier value)|
|Breast_L| Breast Left | &#8594; | 76752008 |  Breast structure (body structure) | 7771000| left (qualifier value)| | |
|Breast_R| Breast Right | &#8594; | 76752008 |  Breast structure (body structure) | 24028007| right (qualifier value)| | |
|Breasts| Both breasts | &#8594; | 76752008 |  Breast structure (body structure) | 51440002| right+left (qualifier value)| | |
|Bronchus| Bronchial tree | &#8594; | 955009 |  Bronchial structure (body structure) | | | | |
|Bronchus_L| Bronchial tree Left | &#8594; | 955009 |  Bronchial structure (body structure) | 7771000| left (qualifier value)| | |
|Bronchus_Main| Main Bronchus | &#8594; | 102297006 |  Main bronchus structure (body structure) | | | | |
|Bronchus_Main_L| Main Bronchus Left | &#8594; | 102297006 |  Main bronchus structure (body structure) | | | | |
|Bronchus_Main_R| Main Bronchus Right | &#8594; | 102297006 |  Main bronchus structure (body structure) | | | | |
|Bronchus_R| Bronchial tree Right | &#8594; | 955009 |  Bronchial structure (body structure) | 24028007| right (qualifier value)| | |
|Canal_Anal| Anal Canal | &#8594; | 34381000 |  Anal canal structure (body structure) | | | | |
|Carina| Carina | &#8594; | 28700002 |  Structure of carina of trachea (body structure) | | | | |
|Duodenum| Small bowel - Duodenum | &#8594; | 38848004 |  Duodenal structure (body structure) | | | | |
|CaudaEquina| Cauda equina | &#8594; | 7173007 |  Cauda equina structure (body structure) | | | | |
|Cavernosum| Penis Corpus Cavernosum | &#8594; | 9284003 |  Corpus cavernosum structure (body structure) | | | | |
|Cavity_Nasal| Nasal Cavity | &#8594; | 279549004 |  Nasal cavity structure (body structure) | | | | |
|Cavity_Oral| Oral cavity | &#8594; | 74262004 |  Oral cavity structure (body structure) | | | | |
|Cecum| Large bowel - Cecum | &#8594; | 32713005 |  Cecum structure (body structure) | | | | |
|Cerebellum| Cerebellum | &#8594; | 113305005 |  Cerebellar structure (body structure) | | | | |
|Cerebrum| Cerebrum | &#8594; | 83678007 |  Structure of cerebrum (body structure) | | | | |
|Cerebrum_L| L Cerebrum | &#8594; | 83678007 |  Structure of cerebrum (body structure) | 7771000| left (qualifier value)| | |
|Cerebrum_R| R Cerebrum | &#8594; | 83678007 |  Structure of cerebrum (body structure) | 24028007| right (qualifier value)| | |
|Cervix| Cervix of uterus | &#8594; | 71252005 |  Cervix uteri structure (body structure) | | | | |
|Chestwall| Chest wall | &#8594; | 78904004 |  Chest wall structure (body structure) | | | | |
|Chestwall_L| Left Chest Wall | &#8594; | 78904004 |  Chest wall structure (body structure) | 7771000| left (qualifier value)| | |
|Chestwall_R| Right Chest Wall | &#8594; | 78904004 |  Chest wall structure (body structure) | 24028007| right (qualifier value)| | |
|Cist_Pontine| Pontine Cistern | &#8594; | 369387006 |  Structure of cisterna pontis (body structure) | | | | |
|Esophagus_S| Upper Esophagus (cervical) | &#8594; | 60075002 |  Cervical esophagus structure (body structure) | | | | |
|Clavicle_L| Clavicle Left | &#8594; | 51299004 |  Bone structure of clavicle (body structure) | 7771000| left (qualifier value)| | |
|Clavicle_R| Clavicle Right | &#8594; | 51299004 |  Bone structure of clavicle (body structure) | 24028007| right (qualifier value)| | |
|CN_III| Third Cranial Nerve (Oculomotor nerve) | &#8594; | 56193007 |  Oculomotor nerve structure (body structure) | | | | |
|CN_III_L| Third Cranial Nerve (Oculomotor nerve) Left | &#8594; | 56193007 |  Oculomotor nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_III_R| Third Cranial Nerve (Oculomotor nerve) Right | &#8594; | 56193007 |  Oculomotor nerve structure (body structure) | 24028007| right (qualifier value)| | |
|CN_IX| Ninth Cranial Nerve (Glossopharyngeal nerve)  | &#8594; | 21161002 |  Glossopharyngeal nerve structure (body structure) | | | | |
|CN_IX_L| Ninth Cranial Nerve (Glossopharyngeal nerve) Left | &#8594; | 21161002 |  Glossopharyngeal nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_IX_R| Ninth Cranial Nerve (Glossopharyngeal nerve) Right | &#8594; | 21161002 |  Glossopharyngeal nerve structure (body structure) | 24028007| right (qualifier value)| | |
|CN_V| Fifth Cranial Nerve (Trigeminal nerve) | &#8594; | 27612005 |  Trigeminal nerve structure (body structure) | | | | |
|CN_V_L| Fifth Cranial Nerve (Trigeminal nerve) Left | &#8594; | 27612005 |  Trigeminal nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_V_R| Fifth Cranial Nerve (Trigeminal nerve) Right | &#8594; | 27612005 |  Trigeminal nerve structure (body structure) | 24028007| right (qualifier value)| | |
|CN_VI| Sixth Cranial Nerve (Abducens nerve) | &#8594; | 80622005 |  Abducens nerve structure (body structure) | | | | |
|CN_VI_L| Sixth Cranial Nerve (Abducens nerve) Left | &#8594; | 80622005 |  Abducens nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_VI_R| Sixth Cranial Nerve (Abducens nerve) Right | &#8594; | 80622005 |  Abducens nerve structure (body structure) | 24028007| right (qualifier value)| | |
|CN_VII| Seventh Cranial Nerve (Facial) | &#8594; | 56052001 |  Facial nerve structure (body structure) | | | | |
|CN_VII_L| Seventh Cranial Nerve (Facial) Left | &#8594; | 56052001 |  Facial nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_VII_R| Seventh Cranial Nerve (Facial) Right | &#8594; | 56052001 |  Facial nerve structure (body structure) | 24028007| right (qualifier value)| | |
|CN_VIII| Eighth Cranial (Vestibulocochlear) Nerve | &#8594; | 8598002 |  Vestibulocochlear nerve structure (body structure) | | | | |
|CN_VIII_L| Eighth Cranial (Vestibulocochlear)  Nerve Left | &#8594; | 8598002 |  Vestibulocochlear nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_VIII_R| Eighth Cranial (Vestibulocochlear)  Nerve Right | &#8594; | 8598002 |  Vestibulocochlear nerve structure (body structure) | 24028007| right (qualifier value)| | |
|CN_XI| Eleventh Cranial Nerve (Spinal accessory nerve) | &#8594; | 15119000 |  Accessory nerve structure (body structure) | | | | |
|CN_XI_L| Eleventh Cranial Nerve (Spinal accessory nerve) Left | &#8594; | 15119000 |  Accessory nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_XI_R| Eleventh Cranial Nerve (Spinal accessory nerve) Right | &#8594; | 15119000 |  Accessory nerve structure (body structure) | 24028007| right (qualifier value)| | |
|CN_XII| Twelfth Cranial Nerve (Hypoglossal nerve) | &#8594; | 37899009 |  Hypoglossal nerve structure (body structure) | | | | |
|CN_XII_L| Twelfth Cranial Nerve (Hypoglossal nerve) Left | &#8594; | 37899009 |  Hypoglossal nerve structure (body structure) | 7771000| left (qualifier value)| | |
|CN_XII_R| Twelfth Cranial Nerve (Hypoglossal nerve) Right | &#8594; | 37899009 |  Hypoglossal nerve structure (body structure) | 24028007| right (qualifier value)| | |
|Cochlea| Cochlea | &#8594; | 80169004 |  Cochlear structure (body structure) | | | | |
|Cochlea_L| Left Cochlea | &#8594; | 80169004 |  Cochlear structure (body structure) | | | | |
|Cochlea_R| Right Cochlea | &#8594; | 80169004 |  Cochlear structure (body structure) | | | | |
|Colon| Colon | &#8594; | 71854001 |  Colon structure (body structure) | | | | |
|Colon_Ascending| Large bowel - Ascending colon | &#8594; | 9040008 |  Ascending colon structure (body structure) | | | | |
|Colon_Decending| Large bowel - Descending colon | &#8594; | 32622004 |  Descending colon structure (body structure) | | | | |
|Eyes| Set of eyes | &#8594; | 81745001 |  Structure of eye proper (body structure) | 51440002| right+left (qualifier value)| | |
|Colon_Sigmoid| Large bowel - Sigmoid colon | &#8594; | 60184004 |  Sigmoid colon structure (body structure) | | | | |
|Colon_Transverse| Large bowel -Transverse colon | &#8594; | 485005 |  Transverse colon structure (body structure) | | | | |
|Cornea| Cornea | &#8594; | 28726007 |  Corneal structure (body structure) | | | | |
|Cornea_L| Cornea Left | &#8594; | 28726007 |  Corneal structure (body structure) | 7771000| left (qualifier value)| | |
|Cornea_R| Cornea Right | &#8594; | 28726007 |  Corneal structure (body structure) | 24028007| right (qualifier value)| | |
|CribriformPlate| Cribriform Plate | &#8594; | 36743005 |  Structure of cribriform plate (body structure) | | | | |
|Cricoid| Cricoid cartilage | &#8594; | 8600008 |  Cricoid cartilage structure (body structure) | | | | |
|Cricopharyngeus| Cricopharyngeal part of inferior pharyngeal constrictor | &#8594; | 28276008 |  Structure of cricopharyngeal part of inferior constrictor pharyngeus muscle (body structure) | | | | |
|Gallbladder| Gall bladder | &#8594; | 28231008 |  Gallbladder structure (body structure) | | | | |
|Genitals| Genitals | &#8594; | 71934003 |  Genital structure (body structure) | | | | |
|Glnd_Lacrimal| Lacrimal Gland | &#8594; | 13561001 |  Lacrimal gland structure (body structure) | | | | |
|Ear_External_L| External Ear Left | &#8594; | 117590005 |  Ear structure (body structure) | | | | |
|Ear_External_R| External Ear Right | &#8594; |  117590005 |  Ear structure (body structure) | 7771000| left (qualifier value)| 261074009| external (qualifier value) |
|Ear_Externals| External Ear | &#8594; | 117590005 |  Ear structure (body structure) | | |261074009| external (qualifier value)|
|Ear_Internal_L| Internal Ear Left | &#8594; |  117590005 |  Ear structure (body structure) | 7771000| left (qualifier value)| 260521003| internal (qualifier value) |
|Ear_Internal_R| Internal Ear Right | &#8594; |  117590005 |  Ear structure (body structure) | 24028007| right (qualifier value)| 260521003| internal (qualifier value) |
|Ear_Internals| Internal Ear | &#8594; | 117590005 |  Ear structure (body structure) | | |260521003| internal (qualifier value)|
|Ear_Middle| Middle Ear | &#8594; | 117590005 |  Ear structure (body structure) | | |260528009| middle (qualifier value)|
|Ear_Middle_L| Middle Ear Left | &#8594; |  117590005 |  Ear structure (body structure) | 7771000| left (qualifier value)| 260528009| middle (qualifier value) |
|Ear_Middle_R| Middle Ear Right | &#8594; |  117590005 |  Ear structure (body structure) | 24028007| right (qualifier value)| 260528009| middle (qualifier value) |
|Glnd_Parathyroid| Parathyroid gland | &#8594; | 111002 |  Parathyroid structure (body structure) | | | | |
|Elbow| Elbow | &#8594; | 127949000 |  Elbow region structure (body structure) | | | | |
|Elbow_L| Elbow Left | &#8594; | 127949000 |  Elbow region structure (body structure) | 7771000| Left (qualifier value)| | |
|Elbow_R| Elbow Right | &#8594; | 127949000 |  Elbow region structure (body structure) | 24028007| right (qualifier value)| | |
|Esophagus| Esophagus | &#8594; | 32849002 |  Esophageal structure (body structure) | | | | |
|Esophagus_I| Lower Esophagus (abdominal) | &#8594; | 32849002 |  Esophageal structure (body structure) | | |261122009| lower (qualifier value)|
|Esophagus_M| Middle Esophagus (thoracic) | &#8594; | 32849002 |  Esophageal structure (body structure) | | |260528009| middle (qualifier value)|
|Esophagus_NAdj| Non Adjacent Esophagus | &#8594; | 32849002 |  Esophageal structure (body structure) | | |1217011006| non-adjacent (qualifier value)|
|Glnd_Sublings| Sublingual gland | &#8594; | 88481005 |  Sublingual gland structure (body structure) | | | | |
|Glnd_Submands| Submandibular Gland | &#8594; | 385296007 |  Submandibular salivary gland structure (body structure) | | | | |
|Eye_L| Eyeball Left | &#8594; | 81745001 |  Structure of eye proper (body structure) | 7771000| left (qualifier value)| | |
|Eye_R| Eyeball Right | &#8594; | 81745001 |  Structure of eye proper (body structure) | 24028007| right (qualifier value)| | |
|Glnd_Thymus| Thymus Gland | &#8594; | 9875009 |  Thymus gland structure (body structure) | | | | |
|Glnd_Thyroid| Thyroid Gland | &#8594; | 69748006 |  Thyroid structure (body structure) | | | | |
|Femur_Head_L| Femur Head & Neck Left | &#8594; | 2812003 |  Structure of head of femur (body structure) | 7771000| left (qualifier value)| | |
|Femur_Head_R| Femur Head & Neck Right | &#8594; | 2812003 |  Structure of head of femur (body structure) | 24028007| right (qualifier value)| | |
|Femur_Joint_L| Femoral Joint Left | &#8594; | 24136001 |  Hip joint structure (body structure) | 7771000| left (qualifier value)| | |
|Femur_Joint_R| Femoral Joint Right | &#8594; | 24136001 |  Hip joint structure (body structure) | 24028007| right (qualifier value)| | |
|Femur| Femur  Whole  | &#8594; | 71341001 |  Bone structure of femur (body structure) | | | | |
|Femur_L| Femur  Whole  Left | &#8594; | 71341001 |  Bone structure of femur (body structure) | 7771000| left (qualifier value)| | |
|Femur_Neck| Femur Neck | &#8594; | 29627003 |  Structure of neck of femur (body structure) | | | | |
|Femur_Neck_L| Femur Neck Right | &#8594; | 29627003 |  Structure of neck of femur (body structure) | 24028007| right (qualifier value)| | |
|Femur_Neck_R| Femur Neck Left | &#8594; | 29627003 |  Structure of neck of femur (body structure) | 7771000| left (qualifier value)| | |
|Femur_R| Femur Whole Right | &#8594; | 71341001 |  Bone structure of femur (body structure) | 24028007| Right (qualifier value)| | |
|Femur_Shaft_L| Femur Shaft Left | &#8594; | 41111004 |  Bone structure of shaft of femur (body structure) | 7771000| left (qualifier value)| | |
|Femur_Shaft_R| Femur Shaft Right | &#8594; | 41111004 |  Bone structure of shaft of femur (body structure) | 24028007| right (qualifier value)| | |
|Femurs| Both Femurs | &#8594; | 71341001 |  Bone structure of femur (body structure) | 51440002| right+left (qualifier value)| | |
|Fibula| Fibula | &#8594; | 87342007 |  Bone structure of fibula (body structure) | | | | |
|Fibula_L| Fibula Left | &#8594; | 87342007 |  Bone structure of fibula (body structure) | 7771000| left (qualifier value)| | |
|Fibula_R| Fibula Right | &#8594; | 87342007 |  Bone structure of fibula (body structure) | 24028007| right (qualifier value)| | |
|Glottis| Glottis | &#8594; | 1307006 |  Glottis structure (body structure) | | | | |
|GreatVes| Great Vessels of the heart (aorta, vena cava S&I, pulmonary A&V) | &#8594; | 3711007 |  Structure of great blood vessel (organ) (body structure) | | | | |
|GreatVes_NAdj| Non Adjacent Great Vessels | &#8594; | 3711007 |  Structure of great blood vessel (organ) (body structure) | | |1217011006| non-adjacent (qualifier value)|
|Hardpalate| Hard palate | &#8594; | 90228003 |  Hard palate structure (body structure) | | | | |
|Glnd_Adrenal| Adrenal glands  | &#8594; | 23451007 |  Adrenal structure (body structure) | | | | |
|Glnd_Adrenal_L| Adrenal glands left | &#8594; | 23451007 |  Adrenal structure (body structure) | 7771000| left (qualifier value)| | |
|Glnd_Adrenal_R| Adrenal glands right | &#8594; | 23451007 |  Adrenal structure (body structure) | 24028007| right (qualifier value)| | |
|Heart| Heart | &#8594; | 80891009 |  Heart structure (body structure) | | | | |
|Glnd_Lacrimal_L| Lacrimal Gland Left | &#8594; | 13561001 |  Lacrimal gland structure (body structure) | 7771000| left (qualifier value)| | |
|Glnd_Lacrimal_R| Lacrimal Gland Right | &#8594; | 13561001 |  Lacrimal gland structure (body structure) | 24028007| right (qualifier value)| | |
|Hemispheres| Hemisphere | &#8594; | 372073000 |  Cerebral hemisphere structure (body structure) | 51440002| right+left (qualifier value)| | |
|Glnd_Subling_L| Sublingual gland | &#8594; | 88481005 |  Sublingual gland structure (body structure) | 7771000| left (qualifier value)| | |
|Glnd_Subling_R| Sublingual gland | &#8594; | 88481005 |  Sublingual gland structure (body structure) | 24028007| right (qualifier value)| | |
|Hippocampi| Hippocampus | &#8594; | 5366008 |  Hippocampal structure (body structure) | | | | |
|Glnd_Submand_L| Submandibular Gland Left | &#8594; | 385296007 |  Submandibular salivary gland structure (body structure) | 7771000| left (qualifier value)| | |
|Glnd_Submand_R| Submandibular Gland Right | &#8594; | 385296007 |  Submandibular salivary gland structure (body structure) | 24028007| right (qualifier value)| | |
|Hypothalmus| Hypothalamus | &#8594; | 67923007 |  Hypothalamic structure (body structure) | | | | |
|Ileum| Small bowel - Ileum | &#8594; | 34516001 |  Ileal structure (body structure) | | | | |
|Jejunum| Small bowel - Jejunum | &#8594; | 21306003 |  Jejunal structure (body structure) | | | | |
|Jejunum_Ileum| Both ileum and jejunum | &#8594; | 90228003 |  Jejunum and ileum (combined site) (body structure) | | | | |
|Joint_Elbow| Elbow joint | &#8594; | 16953009 |  Elbow joint structure (body structure) | | | | |
|Joint_Glenohum| Glenohumeral Joint | &#8594; | 85537004 |  Glenohumeral joint structure (body structure) | | | | |
|GrowthPlate_L| Left Growth Plate | &#8594; | 711190000 |  Structure of epiphyseal plate (body structure) | 7771000| left (qualifier value)| | |
|GrowthPlate_R| Right Growth Plate | &#8594; | 711190000 |  Structure of epiphyseal plate (body structure) | 24028007| right (qualifier value)| | |
|Joint_Surface| Joint Surface | &#8594; | 39352004 |  Joint structure (body structure) | | |410679008| Surface (qualifier value)|
|Joint_TM| Temperomandibular Joint  | &#8594; | 53620006 |  Temporomandibular joint structure (body structure) | | | | |
|Hemisphere_L| Left Hemisphere | &#8594; | 6566002 |  Cerebellar hemisphere structure (body structure) | 7771000| left (qualifier value)| | |
|Hemisphere_R| Right Hemisphere | &#8594; | 6566002 |  Cerebellar hemisphere structure (body structure) | 24028007| right (qualifier value)| | |
|Kidney_Cortex| Renal cortex for both Kidneys | &#8594; | 50403003 |  Structure of cortex of kidney (body structure) | 51440002| right+left (qualifier value)| | |
|Kidney_Hilums| Renal Hilum for both Kidneys | &#8594; | 74033008 |  Structure of hilum of kidney (body structure) | 51440002| right+left (qualifier value)| | |
|Hippocampus_L| Hippocampus Left | &#8594; | 5366008 |  Hippocampal structure (body structure) | 7771000| left (qualifier value)| | |
|Hippocampus_R| Hippocampus Right | &#8594; | 5366008 |  Hippocampal structure (body structure) | 24028007| right (qualifier value)| | |
|Humerus_L| Humerus Left | &#8594; | 85050009 |  Bone structure of humerus (body structure) | 7771000| left (qualifier value)| | |
|Humerus_R| Humerus Right | &#8594; | 85050009 |  Bone structure of humerus (body structure) | 24028007| right (qualifier value)| | |
|Kidneys| Both Kidneys | &#8594; | 64033007 |  Kidney structure (body structure) | 51440002| right+left (qualifier value)| | |
|Knee| Knee | &#8594; | 72696002 |  Knee region structure (body structure) | | | | |
|Laryngl_Pharynx| Laryngeal pharynx | &#8594; | 81502006 |  Hypopharyngeal structure (body structure) | | | | |
|Larynx| Larynx | &#8594; | 4596009 |  Laryngeal structure (body structure) | | | | |
|Larynx_SG| Supraglottic Larynx | &#8594; | 86483002 |  Structure of supraglottic space (body structure) | | | | |
|Joint_Elbow_L| Left Elbow joint | &#8594; | 16953009 |  Elbow joint structure (body structure) | 7771000| left (qualifier value)| | |
|Joint_Elbow_R| Right Elbow joint | &#8594; | 16953009 |  Elbow joint structure (body structure) | 24028007| right (qualifier value)| | |
|Lens| Eye Lens | &#8594; | 78076003 |  Structure of lens of eye (body structure) | | | | |
|Joint_Glenohum_L| Glenohumeral Joint Left | &#8594; | 85537004 |  Glenohumeral joint structure (body structure) | 7771000| left (qualifier value)| | |
|Joint_Glenohum_R| Glenohumeral Joint Right | &#8594; | 85537004 |  Glenohumeral joint structure (body structure) | 24028007| right (qualifier value)| | |
|Lig_Hepatogastrc| Hepatogastric ligament | &#8594; | 6544009 |  Structure of gastrohepatic ligament (body structure) | | | | |
|Lips| Lips | &#8594; | 81083006 |  Both lips (body structure) | | | | |
|Joint_TM_L| Temperomandibular Joint Left | &#8594; | 53620006 |  Temporomandibular joint structure (body structure) | 7771000| left (qualifier value)| | |
|Joint_TM_R| Temperomandibular Joint Right | &#8594; | 53620006 |  Temporomandibular joint structure (body structure) | 24028007| right (qualifier value)| | |
|Liver| Liver | &#8594; | 10200004 |  Liver structure (body structure) | | | | |
|Kidney_Cortex_L| Renal cortex left | &#8594; | 50403003 |  Structure of cortex of kidney (body structure) | 7771000| left (qualifier value)| | |
|Kidney_Cortex_R| Renal cortex right | &#8594; | 50403003 |  Structure of cortex of kidney (body structure) | 24028007| right (qualifier value)| | |
|Kidney_Hilum_L| Renal Hilum Left | &#8594; | 74033008 |  Structure of hilum of kidney (body structure) | 7771000| left (qualifier value)| | |
|Kidney_Hilum_R| Renal Hilum Right | &#8594; | 74033008 |  Structure of hilum of kidney (body structure) | 24028007| right (qualifier value)| | |
|Lobe_Frontal| Frontal Lobe | &#8594; | 83251001 |  Frontal lobe structure (body structure) | | | | |
|Kidney_L| Kidney Left | &#8594; | 64033007 |  Kidney structure (body structure) | 7771000| left (qualifier value)| | |
|Kidney_Pelvis_L| Renal pelvis Left | &#8594; | 25990002 |  Renal pelvis structure (body structure) | 7771000| left (qualifier value)| | |
|Kidney_Pelvis_R| Renal pelvis Right | &#8594; | 25990002 |  Renal pelvis structure (body structure) | 24028007| right (qualifier value)| | |
|Kidney_R| Kidney Right | &#8594; | 64033007 |  Kidney structure (body structure) | 24028007| right (qualifier value)| | |
|Lobe_Occipital| Occipital Lobe | &#8594; | 31065004 |  Occipital lobe structure (body structure) | | | | |
|Lobe_Parietal| Parietal Lobe | &#8594; | 16630005 |  Parietal lobe structure (body structure) | | | | |
|Knee_L| Knee Left | &#8594; | 72696002 |  Knee region structure (body structure) | 7771000| left (qualifier value)| | |
|Knee_R| Knee Right | &#8594; | 72696002 |  Knee region structure (body structure) | 24028007| right (qualifier value)| | |
|Lobe_Temporal| Temporal Lobe | &#8594; | 78277001 |  Temporal lobe structure (body structure) | | | | |
|Mediastinum| Mediastinum | &#8594; | 72410000 |  Mediastinal structure (body structure) | | | | |
|Musc| Muscle | &#8594; | 71616004 |  Skeletal and/or smooth muscle structure (body structure) | | | | |
|Musc_Constrict| Constrictor Muscle of Pharynx | &#8594; | 4866005 |  Constrictor muscle of pharynx structure (body structure) | | | | |
|Lens_L| Lens Left | &#8594; | 78076003 |  Structure of lens of eye (body structure) | 7771000| left (qualifier value)| | |
|Lens_R| Lens Right | &#8594; | 78076003 |  Structure of lens of eye (body structure) | 24028007| right (qualifier value)| | |
|Musc_Masseter| Masseter Muscle | &#8594; | 79368004 |  Masseter muscle structure (body structure) | | | | |
|Musc_Temporal_R| Temporal muscle - Right | &#8594; | 52927003 |  Structure of temporalis muscle (body structure) | 24028007| right (qualifier value)| | |
|Nasopharynx| Nasal part of pharynx | &#8594; | 71836000 |  Nasopharyngeal structure (body structure) | | | | |
|LN| Lymph Node | &#8594; | 59441001 |  Structure of lymph node (body structure) | | | | |
|LN_Ax_Apical| Set of apical axillary lymphatic vessels | &#8594; | 16051009 |  Structure of apical axillary lymph node (body structure) | | | | |
|LN_Ax_Apical_L| Axillary lymphatic chain - Apical Left | &#8594; | 16051009 |  Structure of apical axillary lymph node (body structure) | 7771000| Left (qualifier value)| | |
|LN_Ax_Apical_R| Axillary lymphatic chain - Apical Right | &#8594; | 16051009 |  Structure of apical axillary lymph node (body structure) | 24028007| Right (qualifier value)| | |
|LN_Ax_Central_L| Axillary lymphatic chain - Central Left | &#8594; |  16051009 |  Structure of apical axillary lymph node (body structure) | 7771000| left (qualifier value)| 26216008| central (qualifier value) |
|LN_Ax_Central_R| Axillary lymphatic chain - Central Right | &#8594; |  16051009 |  Structure of apical axillary lymph node (body structure) | 24028007| right (qualifier value)| 26216008| central (qualifier value) |
|LN_Ax_Centrals| Set of central axillary lymphatic vessels | &#8594; | 283001 |  Structure of central axillary lymph node (body structure) | | | | |
|LN_Ax_L| Axillary lymphatic chain Left | &#8594; | 68171009 |  Axillary lymph node structure (body structure) | 7771000| Left (qualifier value)| | |
|LN_Ax_L1_L| Level 1 Axillary Lymph Node Left | &#8594; |  68171009 |  Axillary lymph node structure (body structure) | 7771000| left (qualifier value)| 277733009| level 1 (qualifier value) |
|LN_Ax_L1_R| Level 1 Axillary Lymph Node Right | &#8594; |  68171009 |  Axillary lymph node structure (body structure) | 24028007| right (qualifier value)| 277733009| level 1 (qualifier value) |
|LN_Ax_L2_L| Level 2 Axillary Lymph Node Left | &#8594; |  68171009 |  Axillary lymph node structure (body structure) | 7771000| left (qualifier value)| 277734003| level 2 (qualifier value) |
|LN_Ax_L2_R| Level 2 Axillary Lymph Node Right | &#8594; |  68171009 |  Axillary lymph node structure (body structure) | 24028007| right (qualifier value)| 277734003| level 2 (qualifier value) |
|LN_Ax_L3_L| Level 3 Axillary Lymph Node Left | &#8594; |  68171009 |  Axillary lymph node structure (body structure) | 7771000| left (qualifier value)| 277735002| level 3 (qualifier value) |
|LN_Ax_L3_R| Level 3 Axillary Lymph Node Right | &#8594; |  68171009 |  Axillary lymph node structure (body structure) | 24028007| right (qualifier value)| 277735002| level 3 (qualifier value) |
|LN_Ax_Lateral_L| Axillary lymphatic chain - Lateral Left | &#8594; | 33770006 |  Structure of lateral axillary lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Ax_Lateral_R| Axillary lymphatic chain - Lateral Right | &#8594; | 33770006 |  Structure of lateral axillary lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Ax_Laterals|  lateral axillary lymph nodes | &#8594; | 33770006 |  Structure of lateral axillary lymph node (body structure) | | | | |
|LN_Ax_Pectoral_L| Axillary lymphatic chain - Pectoral Left | &#8594; | 69691007 |  Structure of pectoral axillary lymph node (body structure) | 7771000| Left (qualifier value)| | |
|LN_Ax_Pectoral_R| Axillary lymphatic chain - Pectoral Right | &#8594; | 69691007 |  Structure of pectoral axillary lymph node (body structure) | 24028007| Right (qualifier value)| | |
|LN_Ax_Pectorals| Set of pectoral axillary lymphatic vessels | &#8594; | 69691007 |  Structure of pectoral axillary lymph node (body structure) | | | | |
|LN_Ax_R| Axillary lymphatic chain Right | &#8594; | 68171009 |  Axillary lymph node structure (body structure) | 24028007| Right (qualifier value)| | |
|LN_Ax_Subscap_L| Axillary lymphatic chain - Subscapular Left | &#8594; | 12196003 |  Structure of subscapular axillary lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Ax_Subscap_R| Axillary lymphatic chain - Subscapular Right | &#8594; | 12196003 |  Structure of subscapular axillary lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Ax_Subscaps| Set of subscapular axillary lymphatic vessels | &#8594; | 12196003 |  Structure of subscapular axillary lymph node (body structure) | | | | |
|LN_Brachioceph_L| Lymph nodes of thorax - Brachiocephalic Left | &#8594; | 196821008 |  Structure of innominate lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Brachioceph_R| Lymph nodes of thorax - Brachiocephalic Right | &#8594; | 196821008 |  Structure of innominate lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Brachiocephs| Lymph nodes of thorax - Brachiocephalic | &#8594; | 196821008 |  Structure of innominate lymph node (body structure) | | | | |
|LN_Bronchpulm_L| Lymph nodes of thorax - Bronchopulmonary Left | &#8594; | 279816002 |  Bronchopulmonary lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_Bronchpulm_R| Lymph nodes of thorax - Bronchopulmonary Right | &#8594; | 279816002 |  Bronchopulmonary lymph node group (body structure) | 24028007| right (qualifier value)| | |
|LN_Bronchpulms| Lymph nodes of thorax - Bronchopulmonary | &#8594; | 279816002 |  Bronchopulmonary lymph node group (body structure) | | | | |
|LN_Diaphragmatic| Lymph nodes of thorax - Diaphragmatic | &#8594; | 196751009 |  Structure of diaphragmatic lymph node (body structure) | | | | |
|LN_Iliac_Ext| Lymph nodes of pelvis - External iliac | &#8594; | 65349008 |  Structure of external iliac lymph node (body structure) | | | | |
|LN_Iliac_Int| Lymph nodes of pelvis -  Internal iliac | &#8594; | 245357003 |  Structure of internal iliac lymph node (body structure) | | | | |
|LN_Iliac| Lymph nodes of pelvis -  common iliac | &#8594; | 84219008 |  Structure of iliac lymph node (body structure) | | | | |
|LN_Iliac_Ext_L| Lymph nodes of pelvis - external iliac Left | &#8594; | 65349008 |  Structure of external iliac lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Iliac_Ext_R| Lymph nodes of pelvis - external iliac Right | &#8594; | 65349008 |  Structure of external iliac lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Iliac_Int_L| Lymph nodes of pelvis - internal iliac Left | &#8594; | 245299000 |  Internal iliac lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_Iliac_L| Lymph nodes of pelvis - common iliac Left | &#8594; | 245295006 |  Common iliac lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_Iliac_R| Lymph nodes of pelvis - common iliac Right | &#8594; | 245295006 |  Common iliac lymph node group (body structure) | 24028007| right (qualifier value)| | |
|LN_IMN_L| Left Internal Mammary Lynph Node | &#8594; | 245282001 |  Internal mammary lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_IMN_R| Right Internal Mammary Lynph Node | &#8594; | 245282001 |  Internal mammary lymph node group (body structure) | 24028007| right (qualifier value)| | |
|LN_IMNs| Lymph nodes IMN | &#8594; | 245282001 |  Internal mammary lymph node group (body structure) | | | | |
|LN_Inguinofem| Lymph nodes of pelvis - inguinofemoral | &#8594; | 279763008 |  Inguinofemoral lymph node group (body structure) | | | | |
|LN_Inguinofem_L| Lymph nodes of pelvis - inguinofemoral left | &#8594; | 279763008 |  Inguinofemoral lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_Inguinofem_R| Lymph nodes of pelvis - inguinofemoral right | &#8594; | 279763008 |  Inguinofemoral lymph node group (body structure) | 24028007| right (qualifier value)| | |
|LN_Intercostals| Lymph nodes of thorax - Intercostal | &#8594; | 64038003 |  Intercostal lymph node (body structure) | | | | |
|LN_L| Lymph Node Left | &#8594; | 59441001 |  Structure of lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Ligamentarter| Lymph nodes of thorax - Ligamentum arteriosum | &#8594; | 127938006 |  Lymph node of aortopulmonary window (body structure) | | | | |
|LN_lliac_Int_R| Lymph nodes of pelvis - internal iliac Right | &#8594; | 245299000 |  Internal iliac lymph node group (body structure) | 24028007| right (qualifier value)| | |
|LN_Mediastinals| Lymph nodes of thorax - Mediastinal | &#8594; | 62683002 |  Mediastinal lymph node structure (body structure) | | | | |
|LN_Neck| Neck Lymph Node | &#8594; | 81105003 |  Cervical lymph node structure (body structure) | | | | |
|LN_Neck_IA_L| Level IA (Submental) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162616006| Level IA (qualifier value) |
|LN_Neck_IA_R| Level IA (Submental) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162616006| Level IA (qualifier value) |
|LN_Neck_IB_L| Level IB (Submandibular) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162617002| Level IB (qualifier value) |
|LN_Neck_IB_R| Level IB (Submandibular) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162617002| Level IB (qualifier value) |
|LN_Neck_II_L| Level IIA & IIB (Upper Jugular) neck nodes Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 258401000| Level II (qualifier value) |
|LN_Neck_II_R| Level IIA & IIB (Upper Jugular) neck nodes Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 258401000| Level II (qualifier value) |
|LN_Neck_IIA_L| Level IIA (Upper Jugular) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1284814003| Level IIA (qualifier value) |
|LN_Neck_IIA_R| Level IIA (Upper Jugular) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1284814003| Level IIA (qualifier value) |
|LN_Neck_IIB_L| Level IIB (Upper Jugular) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1284815002| Level IIB (qualifier value) |
|LN_Neck_IIB_R| Level IIB (Upper Jugular) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1284815002| Level IIB (qualifier value) |
|LN_Neck_III_L| Level III (Middle Jugular) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 258402007| Level III (qualifier value) |
|LN_Neck_III_R| Level III (Middle Jugular) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 258402007| Level III (qualifier value) |
|LN_Neck_IV_L| Level IV neck (Lower Jugular) node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 258403002| Level IV (qualifier value) |
|LN_Neck_IV_R| Level IV (Lower Jugular) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 258403002| Level IV (qualifier value) |
|LN_Neck_V_L| Level VA, VB and VC (Posterior Triangle) neck nodes Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 258404008| Level V (qualifier value) |
|LN_Neck_V_R| Level VA, VB and VC (Posterior Triangle) neck nodes Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 258404008| Level V (qualifier value) |
|LN_Neck_VA_L| Level VA (Posterior Triangle) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162622002| Level VA (qualifier value) |
|LN_Neck_VA_R| Level VA (Posterior Triangle) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162622002| Level VA (qualifier value) |
|LN_Neck_VB_L| Level VB (Posterior Triangle) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162623007| Level VB (qualifier value) |
|LN_Neck_VB_R| Level VB (Posterior Triangle) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162623007| Level VB (qualifier value) |
|LN_Neck_VC_L| Level VC (Posterior Triangle) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162624001| Level VC (qualifier value) |
|LN_Neck_VC_R| Level VC (Posterior Triangle) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162624001| Level VC (qualifier value) |
|LN_Neck_VI_L| Level VI (Anterior Triangle) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 258405009| Level VI (qualifier value) |
|LN_Neck_VI_R| Level VI (Anterior Triangle) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 258405009| Level VI (qualifier value) |
|LN_Neck_VII_L| Level VII (Upper Mediastinal) neck node Left | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 395168005| Level VII (qualifier value) |
|LN_Neck_VII_R| Level VII (Upper Mediastinal) neck node Right | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162628003| Level VIIA (qualifier value) |
|LN_Neck_VIIA_L| LN_Neck_VIIA_L | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162628003| Level VIIA (qualifier value) |
|LN_Neck_VIIA_R| LN_Neck_VIIA_R | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 395168005| Level VII (qualifier value) |
|LN_Neck_VIII_R| LN_Neck_VIII_R | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162618007| Level VIII (qualifier value) |
|LN_Neck_VIII_L| LN_Neck_VIII_L | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162618007| Level VIII (qualifier value) |
|LN_Neck_IX_R| LN_Neck_IX_R | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162619004| Level IX (qualifier value) |
|LN_Neck_IX_L| LN_Neck_IX_L | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162619004| Level IX (qualifier value) |
|LN_Neck_X_R| LN_Neck_X_R | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162614009| Level X (qualifier value) |
|LN_Neck_X_L| LN_Neck_X_L | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162614009| Level X (qualifier value) |
|LN_Neck_XA_R| LN_Neck_XA_R | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162615005| Level XA (qualifier value) |
|LN_Neck_XA_L| LN_Neck_XA_L | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162615005| Level XA (qualifier value) |
|LN_Neck_XB_R| LN_Neck_XB_R | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 24028007| Right (qualifier value)| 1162613003| Level XB (qualifier value) |
|LN_Neck_XB_L| LN_Neck_XB_L | &#8594; |  81105003 |  Cervical lymph node structure (body structure) | 7771000| Left (qualifier value)| 1162613003| Level XB (qualifier value) |
|LN_Obturator_L| Lymph nodes of pelvis - obturator Left | &#8594; | 36086000 |  Structure of obturator lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Obturator_R| Lymph nodes of pelvis - obturator Right | &#8594; | 36086000 |  Structure of obturator lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Paraaortic| Lymph nodes of abdomen- para-aortic | &#8594; | 35783009 |  Structure of aortic lymph node (body structure) | | | | |
|LN_Paramammary_L| Lymph nodes of thorax - Paramammary Left | &#8594; | 368550005 |  Structure of paramammary lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Paramammary_R| Lymph nodes of thorax - Paramammary Right | &#8594; | 368550005 |  Structure of paramammary lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Paramammarys| Lymph nodes of thorax - Paramammary | &#8594; | 368550005 |  Structure of paramammary lymph node (body structure) | | | | |
|LN_Parasternal_L| Lymph nodes of thorax - Parasternal Left | &#8594; | 82365008 |  Structure of parasternal lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Parasternal_R| Lymph nodes of thorax - Parasternal Right | &#8594; | 82365008 |  Structure of parasternal lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Parasternals| Lymph nodes of thorax - Parasternal | &#8594; | 82365008 |  Structure of parasternal lymph node (body structure) | | | | |
|LN_Pelvic_L| Pelvic Lymph Nodes Left | &#8594; | 245294005 |  Pelvic lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_Pelvic_R| Pelvic Lymph Nodes Right | &#8594; | 245294005 |  Pelvic lymph node group (body structure) | 24028007| right (qualifier value)| | |
|LN_Pelvics| Pelvic Lymph Nodes | &#8594; | 245294005 |  Pelvic lymph node group (body structure) | | | | |
|LN_Portahepatis| Porta hepatis | &#8594; | 245288002 |  Portahepatis lymph node group (body structure) | | | | |
|Nose| Nose | &#8594; | 45206002 |  Nasal structure (body structure) | | | | |
|LN_Presacral_L| Lymph nodes of pelvis - presacral Left | &#8594; | 1187336003 |  Presacral lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_Presacral_R| Lymph nodes of pelvis - presacral Right | &#8594; | 1187336003 |  Presacral lymph node group (body structure) | 24028007| right (qualifier value)| | |
|LN_Pulmonary_L| Lymph nodes of thorax - Pulmonary Left | &#8594; | 196662004 |  Structure of intrapulmonary lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Pulmonary_R| Lymph nodes of thorax - Pulmonary Right | &#8594; | 196662004 |  Structure of intrapulmonary lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Pulmonarys| Lymph nodes of thorax - Pulmonary | &#8594; | 196662004 |  Structure of intrapulmonary lymph node (body structure) | | | | |
|LN_R| Lymph Node Right | &#8594; | 59441001 |  Structure of lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Sclav_L| Supraclavicular Lymph Node Left | &#8594; | 76838003 |  Structure of supraclavicular lymph node (body structure) | 7771000| left (qualifier value)| | |
|LN_Sclav_R| Supraclavicular Lymph Node Right | &#8594; | 76838003 |  Structure of supraclavicular lymph node (body structure) | 24028007| right (qualifier value)| | |
|LN_Trachbrnchs| Lymph nodes of thorax - Tracheobronchial | &#8594; | 245283006 |  Tracheobronchial lymph node group (body structure) | | | | |
|LN_Trachbrnchs_L| Lymph nodes of thorax - Tracheobronchial Left | &#8594; | 245283006 |  Tracheobronchial lymph node group (body structure) | 7771000| left (qualifier value)| | |
|LN_Trachbrnchs_R| Lymph nodes of thorax - Tracheobronchial Right | &#8594; | 245283006 |  Tracheobronchial lymph node group (body structure) | 24028007| right (qualifier value)| | |
|Nrv_Peripheral| Peripheral Nerve | &#8594; | 84782009 |  Peripheral nerve structure (body structure) | | | | |
|Lobe_Frontal_L| Frontal Lobe Left | &#8594; | 83251001 |  Frontal lobe structure (body structure) | 7771000| left (qualifier value)| | |
|Lobe_Frontal_R| Frontal Lobe Right | &#8594; | 83251001 |  Frontal lobe structure (body structure) | 24028007| right (qualifier value)| | |
|Nrv_Root| Nerve Root | &#8594; | 40958000 |  Nerve root structure (body structure) | | | | |
|Lobe_Occipital_L| Occipital Lobe Left | &#8594; | 31065004 |  Occipital lobe structure (body structure) | 7771000| left (qualifier value)| | |
|Lobe_Occipital_R| Occipital Lobe Right | &#8594; | 31065004 |  Occipital lobe structure (body structure) | 24028007| right (qualifier value)| | |
|OpticChiasm| Optic chiasm | &#8594; | 244453006 |  Structure of optic chiasma (body structure) | | | | |
|Lobe_Parietal_L| Parietal Lobe Left | &#8594; | 16630005 |  Parietal lobe structure (body structure) | 7771000| left (qualifier value)| | |
|Lobe_Parietal_R| Parietal Lobe Right | &#8594; | 16630005 |  Parietal lobe structure (body structure) | 24028007| right (qualifier value)| | |
|OpticNrv| Optic nerve | &#8594; | 18234004 |  Optic nerve structure (body structure) | | | | |
|Lobe_Temporal_L| Temporal Lobe Left | &#8594; | 78277001 |  Temporal lobe structure (body structure) | 7771000| left (qualifier value)| | |
|Lobe_Temporal_R| Temporal Lobe Right | &#8594; | 78277001 |  Temporal lobe structure (body structure) | 24028007| right (qualifier value)| | |
|Lung_L| Lung Left | &#8594; | 39607008 |  Lung structure (body structure) | 7771000| left (qualifier value)| | |
|Lung_LLL| Lung - lower lobe of left | &#8594; |  31094006 |  Structure of lobe of lung (body structure) | 7771000| left (qualifier value)| 261122009| lower (qualifier value) |
|Lung_LUL| Lung - upper lobe of left | &#8594; |  31094006 |  Structure of lobe of lung (body structure) | 7771000| left (qualifier value)| 261183002| upper (qualifier value) |
|Lung_R| Lung Right | &#8594; | 31094006 |  Structure of lobe of lung (body structure) | 24028007| right (qualifier value)| | |
|Lung_RLL| Lung - lower lobe of right | &#8594; |  31094006 |  Structure of lobe of lung (body structure) | 24028007| right (qualifier value)| 261122009| lower (qualifier value) |
|Lung_RML| Lung - middle lobe of right | &#8594; |  31094006 |  Structure of lobe of lung (body structure) | 24028007| right (qualifier value)| 260528009| middle (qualifier value) |
|Lung_RUL| Lung - upper lobe of right | &#8594; |  31094006 |  Structure of lobe of lung (body structure) | 24028007| right (qualifier value)| 261183002| upper (qualifier value) |
|Lungs| Pair of Lungs | &#8594; | 39607008 |  Lung structure (body structure) | 51440002| right+left (qualifier value)| | |
|Malleus| Malleus | &#8594; | 34080009 |  Malleus structure (body structure) | | | | |
|Malleus_L| Malleus Left | &#8594; | 34080009 |  Malleus structure (body structure) | | | | |
|Malleus_R| Malleus Right | &#8594; | 34080009 |  Malleus structure (body structure) | | | | |
|Maxilla| Maxilla | &#8594; | 70925003 |  Bone structure of maxilla (body structure) | | | | |
|Maxilla_L| Maxilla Left | &#8594; | 70925003 |  Bone structure of maxilla (body structure) | | | | |
|Maxilla_R| Maxilla Right | &#8594; | 70925003 |  Bone structure of maxilla (body structure) | 24028007| right (qualifier value)| | |
|Orbit_L| Orbit Left | &#8594; | 363654007 |  Structure of orbit proper (body structure) | 7771000| left (qualifier value)| | |
|Orbit_R| Orbit Right | &#8594; | 363654007 |  Structure of orbit proper (body structure) | 24028007| right (qualifier value)| | |
|Oropharynx| Oral part of pharynx | &#8594; | 31389004 |  Oropharyngeal structure (body structure) | | | | |
|Musc_Constrict_I| Pharynx - Inferior pharyngeal constrictor | &#8594; | 4866005 |  Constrictor muscle of pharynx structure (body structure) | | |261089000| inferior (qualifier value)|
|Musc_Constrict_M|  Pharynx - Middle pharyngeal constrictor | &#8594; | 4866005 |  Constrictor muscle of pharynx structure (body structure) | | |260528009| middle (qualifier value)|
|Musc_Constrict_S| Pharynx - Superior pharyngeal constrictor | &#8594; | 4866005 |  Constrictor muscle of pharynx structure (body structure) | | |264217000| superior (qualifier value)|
|Musc_Digastric_L| Digastric muscle Left | &#8594; | 52410001 |  Digastric muscle structure (body structure) | 7771000| left (qualifier value)| | |
|Musc_Digastric_R| Digastric muscle Right | &#8594; | 52410001 |  Digastric muscle structure (body structure) | 24028007| right (qualifier value)| | |
|Ovaries| Ovary | &#8594; | 15497006 |  Ovarian structure (body structure) | 51440002| right+left (qualifier value)| | |
|Musc_Masseter_L| Masseter Muscle Left | &#8594; | 79368004 |  Masseter muscle structure (body structure) | | | | |
|Musc_Masseter_R| Masseter Muscle Right | &#8594; | 79368004 |  Masseter muscle structure (body structure) | | | | |
|Musc_Platysma_L| Platysma Left | &#8594; | 18252004 |  Structure of platysma muscle (body structure) | 7771000| left (qualifier value)| | |
|Musc_Platysma_R| Platysma Right | &#8594; | 18252004 |  Structure of platysma muscle (body structure) | 24028007| right (qualifier value)| | |
|Musc_Pterygoid_L| Pterygoid muscles - Left | &#8594; | 76738006 |  Structure of pterygoid muscle (body structure) | 7771000| left (qualifier value)| | |
|Musc_Pterygoid_R| Pterygoid muscles - Right | &#8594; | 76738006 |  Structure of pterygoid muscle (body structure) | 24028007| right (qualifier value)| | |
|Musc_Sclmast_L| Sternocleidomastoid Left | &#8594; | 22823000 |  Structure of sternocleidomastoid muscle (body structure) | 7771000| left (qualifier value)| | |
|Musc_Sclmast_R| Sternocleidomastoid Right | &#8594; | 22823000 |  Structure of sternocleidomastoid muscle (body structure) | 24028007| right (qualifier value)| | |
|Musc_Temporal_L| Temporal muscle - Left | &#8594; | 52927003 |  Structure of temporalis muscle (body structure) | 7771000| left (qualifier value)| | |
|Palate_Soft| Soft palate | &#8594; | 49460000 |  Soft palate structure (body structure) | | | | |
|Nasalconcha_LI| Inferior Nasal Concha Left | &#8594; |  46607005 |  Nasal turbinate structure (body structure) | 7771000| left (qualifier value)| 261089000| inferior (qualifier value) |
|Nasalconcha_RI| Inferior Nasal Concha Right | &#8594; |  46607005 |  Nasal turbinate structure (body structure) | 24028007| right (qualifier value)| 261089000| inferior (qualifier value) |
|Pancreas| Pancreas | &#8594; | 15776009 |  Pancreatic structure (body structure) | | | | |
|Pancreas_Head| Head of Pancreas | &#8594; | 64163001 |  Structure of head of pancreas (body structure) | | | | |
|Pancreas_Tail| Tail of Pancreas | &#8594; | 73239005 |  Structure of tail of pancreas (body structure) | | | | |
|Parametrium| Parametrium | &#8594; | 45682005 |  Structure of parametrium (body structure) | | | | |
|Parotids| Pair of Parotid Glands | &#8594; | 45289007 |  Parotid gland structure (body structure) | 51440002| right+left (qualifier value)| | |
|PenileBulb| Penile Bulb | &#8594; | 52737000 |  Structure of bulb of penis (body structure) | | | | |
|OpticNrv_L| Optic nerve - left | &#8594; | 18234004 |  Optic nerve structure (body structure) | 7771000| left (qualifier value)| | |
|OpticNrv_R| Optic nerve - right | &#8594; | 18234004 |  Optic nerve structure (body structure) | 7771000| left (qualifier value)| | |
|Penis| Penis | &#8594; | 18911002 |  Penile structure (body structure) | 24028007| right (qualifier value)| | |
|Pericardium| Pericardium | &#8594; | 76848001 |  Pericardial structure (body structure) | | | | |
|Perineum| Perineum | &#8594; | 38864007 |  Perineal structure (body structure) | | | | |
|Peritoneum| Peritoneal sac | &#8594; | 118762006 |  Peritoneal sac structure (body structure) | | | | |
|Ovary_L| Ovary Left | &#8594; | 15497006 |  Ovarian structure (body structure) | 7771000| left (qualifier value)| | |
|Ovary_R| Ovary Right | &#8594; | 15497006 |  Ovarian structure (body structure) | 24028007| right (qualifier value)| | |
|Pacemaker| Pacemaker | &#8594; | 14106009 |  Cardiac pacemaker, device (physical object) | | | | |
|Pharynx| Pharynx | &#8594; | 54066008 |  Pharyngeal structure (body structure) | | | | |
|PancJejuno| The pancreatic jejuno junction - generated by surgical procedure | &#8594; | 110822002 |  Pancreas and jejunum (combined site) (body structure) | | | | |
|Pineal| Pineal gland | &#8594; | 45793000 |  Pineal structure (body structure) | | | | |
|Pituitary| Pituitary gland | &#8594; | 56329008 |  Pituitary structure (body structure) | | | | |
|Pons| Pons | &#8594; | 49557009 |  Pontine structure (body structure) | | | | |
|Prostate| Prostate | &#8594; | 41216001 |  Prostatic structure (body structure) | | | | |
|Parotid_L| Parotid Left | &#8594; | 45289007 |  Parotid gland structure (body structure) | 7771000| left (qualifier value)| | |
|Parotid_R| Parotid Right | &#8594; | 45289007 |  Parotid gland structure (body structure) | 24028007| right (qualifier value)| | |
|ProstateBed| Prostate Bed | &#8594; | 1162492000 |  Tumor bed (morphologic abnormality) | | | | |
|Pterygoid_Lat_L| Pterygoid muscles lateral - Left | &#8594; | 88938001 |  Structure of lateral pterygoid muscle (body structure) | 7771000| left (qualifier value)| | |
|Pterygoid_Lat_R| Pterygoid muscles lateral - Right | &#8594; | 88938001 |  Structure of lateral pterygoid muscle (body structure) | 24028007| right (qualifier value)| | |
|Pterygoid_Med_L| Pterygoid muscles medial - Left | &#8594; | 85002005 |  Structure of medial pterygoid muscle (body structure) | 7771000| left (qualifier value)| | |
|Pterygoid_Med_R| Pterygoid muscles medial - Right | &#8594; | 85002005 |  Structure of medial pterygoid muscle (body structure) | 24028007| right (qualifier value)| | |
|Rectal_Wall| Rectal Wall | &#8594; | 511000202101 |  Rectum wall structure (body structure) | | | | |
|Rectum| Large bowel - Rectum | &#8594; | 34402009 |  Rectum structure (body structure) | | | | |
|SacralPlex| Sacral Plexus | &#8594; | 62397004 |  Sacral plexus structure (body structure) | | | | |
|Scalp| Scalp | &#8594; | 41695006 |  Scalp structure (body structure) | | | | |
|Proc_Condyloid_L| Condyloid process of mandible - Right | &#8594; | 67183008 |  Structure of condyloid process of mandible (body structure) | 24028007| right (qualifier value)| | |
|Proc_Condyloid_R| Condyloid process of mandible - Left | &#8594; | 67183008 |  Structure of condyloid process of mandible (body structure) | 7771000| left (qualifier value)| | |
|Proc_Coronoid_L| Coronoid process of mandible - Left | &#8594; | 124002 |  Structure of coronoid process of mandible (body structure) | 7771000| left (qualifier value)| | |
|Proc_Coronoid_R| Coronoid process of mandible - Right | &#8594; | 124002 |  Structure of coronoid process of mandible (body structure) | 24028007| right (qualifier value)| | |
|Scar| Scar | &#8594; | 12402003 |  Scar (morphologic abnormality) | | | | |
|Scar_Boost| Scar Boost | &#8594; | 12402003 |  Scar (morphologic abnormality) | | | | |
|Scrotum| Scrotum (skin & cremasteric fascia) | &#8594; | 20233005 |  Scrotal structure (body structure) | | | | |
|SeminalVes| Seminal vesicle | &#8594; | 64739004 |  Seminal vesicle structure (body structure) | | | | |
|SeminalVes_Dist| Distal Seminal Vesicle | &#8594; | 64739004 |  Seminal vesicle structure (body structure) | | |46053002| distal (qualifier value)|
|SeminalVes_Prox| Proximal Seminal Vesicle | &#8594; | 64739004 |  Seminal vesicle structure (body structure) | | |40415009| proximal (qualifier value)|
|Sinus_Ethmoid| Ethmoidal Sinus | &#8594; | 54215007 |  Ethmoid sinus structure (body structure) | | | | |
|PubicSymphys| Pubic Symphysis | &#8594; | 82561000 |  Symphysis pubis structure (body structure) | | | | |
|PubicSymphys_L| Pubic bone Left | &#8594; | 82561000 |  Symphysis pubis structure (body structure) | 7771000| left (qualifier value)| | |
|PubicSymphys_R| Pubic bone Right | &#8594; | 82561000 |  Symphysis pubis structure (body structure) | 24028007| right (qualifier value)| | |
|Radius_L| Radius Left | &#8594; | 62413002 |  Bone structure of radius (body structure) | 7771000| left (qualifier value)| | |
|Radius_R| Radius Right | &#8594; | 62413002 |  Bone structure of radius (body structure) | 24028007| right (qualifier value)| | |
|Sinus_Frontal| Frontal Sinus | &#8594; | 55060009 |  Frontal sinus structure (body structure) | | | | |
|Sinus_Maxilry| Maxillary Sinus | &#8594; | 15924003 |  Maxillary sinus structure (body structure) | | | | |
|Retina_L| Retina Left | &#8594; | 5665001 |  Retinal structure (body structure) | 7771000| left (qualifier value)| | |
|Retina_R| Retina Right | &#8594; | 5665001 |  Retinal structure (body structure) | 24028007| right (qualifier value)| | |
|Retinas| Both Retinas | &#8594; | 5665001 |  Retinal structure (body structure) | 51440002| right+left (qualifier value)| | |
|Rib| Any Rib volume | &#8594; | 113197003 |  Bone structure of rib (body structure) | | | | |
|Rib01_L| First Rib Left | &#8594; | 48535007 |  Bone structure of first rib (body structure) | 7771000| left (qualifier value)| | |
|Rib01_R| First Rib Right | &#8594; | 48535007 |  Bone structure of first rib (body structure) | 24028007| right (qualifier value)| | |
|Rib02_L| Second rib Left | &#8594; | 78247007 |  Bone structure of second rib (body structure) | 7771000| left (qualifier value)| | |
|Rib02_R| Second rib Right | &#8594; | 78247007 |  Bone structure of second rib (body structure) | 24028007| right (qualifier value)| | |
|Rib03_L| Third rib Left | &#8594; | 25888004 |  Bone structure of third rib (body structure) | 7771000| left (qualifier value)| | |
|Rib03_R| Third rib Right | &#8594; | 25888004 |  Bone structure of third rib (body structure) | 24028007| right (qualifier value)| | |
|Rib04_L| Fourth rib Left | &#8594; | 25523003 |  Bone structure of fourth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib04_R| Fourth rib Right | &#8594; | 25523003 |  Bone structure of fourth rib (body structure) | 24028007| right (qualifier value)| | |
|Rib05_L| Fifth rib Left | &#8594; | 15339008 |  Bone structure of fifth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib05_R| Fifth rib Right | &#8594; | 15339008 |  Bone structure of fifth rib (body structure) | 24028007| right (qualifier value)| | |
|Rib06_L| Sixth rib Left | &#8594; | 59558009 |  Bone structure of sixth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib06_R| Sixth rib Right | &#8594; | 59558009 |  Bone structure of sixth rib (body structure) | 24028007| right (qualifier value)| | |
|Rib07_L| Seventh rib Left | &#8594; | 24915002 |  Bone structure of seventh rib (body structure) | 7771000| left (qualifier value)| | |
|Rib07_R| Seventh rib Right | &#8594; | 24915002 |  Bone structure of seventh rib (body structure) | 24028007| right (qualifier value)| | |
|Rib08_L| Eighth rib Left | &#8594; | 5953002 |  Bone structure of eighth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib08_R| Eighth rib Right | &#8594; | 5953002 |  Bone structure of eighth rib (body structure) | 24028007| right (qualifier value)| | |
|Rib09_L| Ninth rib Left | &#8594; | 22565002 |  Bone structure of ninth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib09_R| Ninth rib Right | &#8594; | 22565002 |  Bone structure of ninth rib (body structure) | 24028007| right (qualifier value)| | |
|Rib10_L| Tenth rib Left | &#8594; | 77644006 |  Bone structure of tenth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib10_R| Tenth rib Right | &#8594; | 77644006 |  Bone structure of tenth rib (body structure) | 24028007| right (qualifier value)| | |
|Rib11_L| Eleventh rib Left | &#8594; | 58830002 |  Bone structure of eleventh rib (body structure) | 7771000| left (qualifier value)| | |
|Rib11_R| Eleventh rib Right | &#8594; | 58830002 |  Bone structure of eleventh rib (body structure) | 24028007| right (qualifier value)| | |
|Rib12_L| Twelfth rib Left | &#8594; | 43993008 |  Bone structure of twelfth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib12_R| Twelfth rib Right | &#8594; | 43993008 |  Bone structure of twelfth rib (body structure) | 24028007| right (qualifier value)| | |
|Skin| Skin | &#8594; | 39937001 |  Skin structure (body structure) | | | | |
|Rib13_L| Thirteenth   rib Left | &#8594; | 1193560003 |  Bone structure of thirteenth rib (body structure) | 7771000| left (qualifier value)| | |
|Rib13_R| Thirteenth  rib Right | &#8594; | 1193560003 |  Bone structure of thirteenth rib (body structure) | 24028007| right (qualifier value)| | |
|Skin_Perineum| Skin of Perineum | &#8594; | 48014002 |  Skin structure of perineum (body structure) | | | | |
|Scapula_L| Scapula Left | &#8594; | 79601000 |  Bone structure of scapula (body structure) | 7771000| left (qualifier value)| | |
|Scapula_R| Scapula Right | &#8594; | 79601000 |  Bone structure of scapula (body structure) | 24028007| right (qualifier value)| | |
|Skin_Peritoneum| Skin of Peritoneum | &#8594; | 75093004 |  Skin structure of anterior abdominal wall (body structure) | | | | |
|Spc_Bowel | Space occupied by bowel | &#8594; | 1285442003 |  Estimated contoured volume of bowel in peritoneal cavity using radiographic imaging (observable entity) | | | | |
|Spc_Bowel_Small| Space occupied by small bowel | &#8594; | 1285443008 |  Estimated contoured volume of small bowel in peritoneal cavity using imaging (observable entity) | | | | |
|Spc_Retrophars| Retropharyngeal space | &#8594; | 789564000 |  Structure of retropharyngeal space (body structure) | | | | |
|Spc_Retrosty| Retrostyloid space  | &#8594; | 1193554003 |  Retrostyloid space (body structure) | | | | |
|Spc_Supraclav_L| Supraclavicular space - Left | &#8594; | 76838003 |  Structure of supraclavicular lymph node (body structure) | 7771000| left (qualifier value)| | |
|Spc_Supraclav_R| Supraclavicular space - Right | &#8594; | 76838003 |  Structure of supraclavicular lymph node (body structure) | 24028007| right (qualifier value)| | |
|Sinus_Frontal_L| Frontal Sinus Left | &#8594; | 55060009 |  Frontal sinus structure (body structure) | 7771000| left (qualifier value)| | |
|Sinus_Frontal_R| Frontal Sinus Right | &#8594; | 55060009 |  Frontal sinus structure (body structure) | 24028007| right (qualifier value)| | |
|Sphincter_Anal| Internal Anal Sphincter  | &#8594; | 41178004 |  Structure of sphincter ani muscle (body structure) | | | | |
|Sinus_Maxilry_L| Maxillary Sinus | &#8594; | 15924003 |  Maxillary sinus structure (body structure) | 7771000| left (qualifier value)| | |
|Sinus_Maxilry_R| Maxillary Sinus | &#8594; | 15924003 |  Maxillary sinus structure (body structure) | 24028007| right (qualifier value)| | |
|SpinalCanal| Vertebral canal | &#8594; | 61853006 |  Spinal canal structure (body structure) | | | | |
|Sinus_Sphenoid_L| Sphenoidal Sinus Left | &#8594; | 24999009 |  Sphenoid sinus structure (body structure) | 7771000| left (qualifier value)| | |
|Sinus_Sphenoid_R| Sphenoidal Sinus Right | &#8594; | 24999009 |  Sphenoid sinus structure (body structure) | 24028007| right (qualifier value)| | |
|SpinalCord| Spinal Cord | &#8594; | 2748008 |  Spinal cord structure (body structure) | | | | |
|SpinalCord_Cerv| Spinal Cord Cervical | &#8594; | 54785003 |  Cervical spinal cord structure (body structure) | | | | |
|SpinalCord_Lum| Spinal Cord Lumbar | &#8594; | 60051002 |  Lumbar spinal cord structure (body structure) | | | | |
|Skull| Skeletal system of head | &#8594; | 89546000 |  Bone structure of cranium (body structure) | | | | |
|SpinalCord_Sac| Spinal Cord Sacral | &#8594; | 11478001 |  Sacral spinal cord structure (body structure) | | | | |
|SpinalCord_Thor| Spinal Cord Thoracic | &#8594; | 50800009 |  Thoracic spinal cord structure (body structure) | | | | |
|Spongiosum| Penis Corpus Spongiosum | &#8594; | 25270003 |  Corpus spongiosum structure (body structure) | | | | |
|Spc_Retrophar_L| Retropharyngeal space Left | &#8594; | 789564000 |  Structure of retropharyngeal space (body structure) | 7771000| left (qualifier value)| | |
|Spc_Retrophar_R| Retropharyngeal space Right | &#8594; | 789564000 |  Structure of retropharyngeal space (body structure) | 24028007| right (qualifier value)| | |
|Stapes| Stapes | &#8594; | 22718006 |  Stapes structure (body structure) | | | | |
|Stomach| Stomach | &#8594; | 69695003 |  Stomach structure (body structure) | | | | |
|Spc_Retrosty_L| Retrostyloid space -Left | &#8594; | 1193554003 |  Retrostyloid space (body structure) | 7771000| left (qualifier value)| | |
|Spc_Retrosty_R| Retrostyloid space -Left | &#8594; | 1193554003 |  Retrostyloid space (body structure) | 24028007| right (qualifier value)| | |
|Strct_Suprapatel| Suprapatellar Structures | &#8594; | 75415000 |  Structure of suprapatellar bursa (body structure) | | | | |
|Surf_Eye_L| Surface of Left Eye | &#8594; | 67548002 |  Structure of conjunctiva of left eye (body structure) | | | | |
|Surf_Eye_R| Surface of Right Eye | &#8594; | 13014005 |  Structure of conjunctiva of right eye (body structure) | | | | |
|Sys_Ventricular| Ventricular System of the Brain | &#8594; | 8997002 |  Space of ventricular system of brain (body structure) | | | | |
|Tendon | Tendon | &#8594; | 13024002 |  Tendon structure (body structure) | | | | |
|Tendon_Quad| Quadriceps Tendon | &#8594; | 70567001 |  Structure of quadriceps tendon (body structure) | | | | |
|Testis| Testis | &#8594; | 40689003 |  Testis structure (body structure) | 51440002| right+left (qualifier value)| | |
|ThecalSac| Thecal Sac | &#8594; | 37554007 |  Spinal dura mater structure (body structure) | | | | |
|Thoracic_Duct| Thoracic Duct | &#8594; | 1732005 |  Thoracic duct structure (body structure) | | | | |
|Spleen| Spleen | &#8594; | 78961009 |  Splenic structure (body structure) | | | | |
|Spleen_Hilum| Splenic hilum | &#8594; | 35378004 |  Structure of hilum of spleen (body structure) | | | | |
|Tongue| Tongue | &#8594; | 21974007 |  Tongue structure (body structure) | | | | |
|Tongue_All| Entire Tongue | &#8594; | 181226008 |  Entire tongue (body structure) | | | | |
|Stapes_L| Stapes Left | &#8594; | 22718006 |  Stapes structure (body structure) | | | | |
|Stapes_R| Stapes Right | &#8594; | 22718006 |  Stapes structure (body structure) | | | | |
|Tongue_Base| Base of Tongue | &#8594; | 47975008 |  Structure of root of tongue (body structure) | | | | |
|Tongue_Oral| Oral Tongue | &#8594; | 61344008 |  Structure of body of tongue (body structure) | | | | |
|Tongue_Oral_L| Left Oral Tonque | &#8594; | 61344008 |  Structure of body of tongue (body structure) | 7771000| left (qualifier value)| | |
|Trachea| Trachea | &#8594; | 44567001 |  Tracheal structure (body structure) | | | | |
|Trachea_NAdj| Trachea non adjacent wall | &#8594; | 44567001 |  Tracheal structure (body structure) | | |1217011006| non-adjacent (qualifier value)|
|Ureters| Both Ureters | &#8594; | 87953007 |  Ureteric structure (body structure) | 51440002| right+left (qualifier value)| | |
|Urethra| Urethra | &#8594; | 13648007 |  Urethral structure (body structure) | | | | |
|Urethra_Prostatc| Prostatic Urethra | &#8594; | 71553001 |  Prostatic urethra structure (body structure) | | | | |
|Testis_L| Testis Left | &#8594; | 40689003 |  Testis structure (body structure) | 7771000| left (qualifier value)| | |
|Testis_R| Testis Right | &#8594; | 40689003 |  Testis structure (body structure) | 24028007| right (qualifier value)| | |
|Uterus| Uterus | &#8594; | 35039007 |  Uterine structure (body structure) | | | | |
|V_Azygos| Azygos Vein | &#8594; | 72107004 |  Structure of azygous vein (body structure) | | | | |
|V_Brachioceph_L| Brachiocephalic vein Left | &#8594; | 8887007 |  Structure of brachiocephalic vein (body structure) | 7771000| left (qualifier value)| | |
|V_Brachioceph_R| Brachiocephalic vein Right | &#8594; | 8887007 |  Structure of brachiocephalic vein (body structure) | 24028007| right (qualifier value)| | |
|V_Iliac_Ext_L| External iliac vein Left | &#8594; | 63507001 |  Structure of external iliac vein (body structure) | 7771000| left (qualifier value)| | |
|Tongue_Base_L| Base of Tongue | &#8594; | 47975008 |  Structure of root of tongue (body structure) | 7771000| left (qualifier value)| | |
|Tongue_Base_R| Base of Tongue | &#8594; | 47975008 |  Structure of root of tongue (body structure) | 24028007| right (qualifier value)| | |
|V_Iliac_Ext_R| External iliac vein Right | &#8594; | 63507001 |  Structure of external iliac vein (body structure) | 24028007| right (qualifier value)| | |
|V_Iliac_Int_L| Internal iliac vein Left | &#8594; | 40300007 |  Structure of internal iliac vein (body structure) | 7771000| left (qualifier value)| | |
|Tongue_Oral_R| Right Oral Tongue | &#8594; | 61344008 |  Structure of body of tongue (body structure) | 24028007| right (qualifier value)| | |
|Tonsil| Tonsil | &#8594; | 75573002 |  Tonsillar structure (palatine) (body structure) | | | | |
|V_Iliac_Int_R| Internal iliac vein Right | &#8594; | 40300007 |  Structure of internal iliac vein (body structure) | 24028007| right (qualifier value)| | |
|V_Iliac_L| Common iliac vein Right | &#8594; | 46027005 |  Structure of common iliac vein (body structure) | 24028007| right (qualifier value)| | |
|TumorBed| Tumor Bed | &#8594; | 1162492000 |  Tumor bed (morphologic abnormality) | | | | |
|Ureter_L| Ureter Left | &#8594; | 87953007 |  Ureteric structure (body structure) | 7771000| left (qualifier value)| | |
|Ureter_R| Ureter Right | &#8594; | 87953007 |  Ureteric structure (body structure) | 24028007| right (qualifier value)| | |
|V_Iliac_R| Common iliac vein Left | &#8594; | 46027005 |  Structure of common iliac vein (body structure) | 7771000| left (qualifier value)| | |
|V_Jugular_Ext_L| external  jugular vein left | &#8594; | 71585003 |  Structure of external jugular vein (body structure) | 7771000| left (qualifier value)| | |
|V_Jugular_Ext_R| external jugular vein right | &#8594; | 71585003 |  Structure of external jugular vein (body structure) | 24028007| right (qualifier value)| | |
|V_Jugular_Int_L| Internal jugular vein left | &#8594; | 12123001 |  Internal jugular vein structure (body structure) | 7771000| left (qualifier value)| | |
|V_Jugular_Int_R| Internal jugular vein right | &#8594; | 12123001 |  Internal jugular vein structure (body structure) | 24028007| right (qualifier value)| | |
|V_Portal| Portal Vein | &#8594; | 32764006 |  Portal vein structure (body structure) | | | | |
|V_Pulmonary| Pulmonary vein | &#8594; | 430757002 |  Structure of pulmonary vein great vessel (body structure) | | | | |
|V_Subclavians| Subclavian Vein | &#8594; | 9454009 |  Structure of subclavian vein (body structure) | | | | |
|V_Venacava_I| Inferior vena cava | &#8594; | 35532006 |  Vena caval structure (body structure) | | |261089000| inferior (qualifier value)|
|V_Venacava_S| Superior vena cava | &#8594; | 35532006 |  Vena caval structure (body structure) | | |264217000| superior (qualifier value)|
|Vagina| Vagina | &#8594; | 76784001 |  Vaginal structure (body structure) | | | | |
|Vagina_Surf| Surface of Vagina | &#8594; | 279894000 |  Inferior surface of vaginal cervix (body structure) | | | | |
|VaginalCuff| Vaginal Cuff | &#8594; | 438074005 |  Vaginal cuff (morphologic abnormality) | | | | |
|Valve| Valve | &#8594; | 17401000 |  Cardiac valve structure (body structure) | | | | |
|V_Jugular| Any Jugular Vein | &#8594; | 63190004 |  Structure of jugular vein (body structure) | | | | |
|Valve_Mitral| Mitral Valve | &#8594; | 91134007 |  Mitral valve structure (body structure) | | | | |
|Valve_Pulmonic| Pulmonic Valve | &#8594; | 39057004 |  Pulmonary valve structure (body structure) | | | | |
|Valve_Tricuspid| Tricuspid Valve | &#8594; | 46030003 |  Tricuspid valve structure (body structure) | | | | |
|Ventricle| Ventricle (cardiac) | &#8594; | 21814001 |  Cardiac ventricular structure (body structure) | | | | |
|Ventricle_L| Ventricle (cardiac) Left | &#8594; | 21814001 |  Cardiac ventricular structure (body structure) | 7771000| left (qualifier value)| | |
|Ventricle_R| Ventricle (cardiac) Right | &#8594; | 21814001 |  Cardiac ventricular structure (body structure) | 24028007| right (qualifier value)| | |
|V_Subclavian_L| Subclavian Vein Left | &#8594; | 9454009 |  Structure of subclavian vein (body structure) | 7771000| left (qualifier value)| | |
|V_Subclavian_R| Subclavian Vein Right | &#8594; | 9454009 |  Structure of subclavian vein (body structure) | 24028007| right (qualifier value)| | |
|VocalCords| Vocal Cords | &#8594; | 46105003 |  Vocal cord structure (body structure) | 51440002| right+left (qualifier value)| | |
|Vulva| Vulva | &#8594; | 45292006 |  Vulval structure (body structure) | | | | |
|Wall_Vagina| Wall of vagina | &#8594; | 263355003 |  Vaginal wall (body structure) | | | | |
|Body| Only the body | &#8594; | 38266002 |  Entire body as a whole (body structure) | | | | |
|BoneMarrow_Act| Active Bone Marrow | &#8594; | 75330005 |  Structure of red bone marrow (body structure) | | | | |
|Cartlg_Thyroid| Thyroid cartilage | &#8594; | 52940008 |  Thyroid cartilage structure (body structure) | | | | |
|Cist_Suprasellar| Suprasellar Cistern | &#8594; | 15328005 |  Structure of suprasellar region (body structure) | | | | |
|Valve_Aortic| Aortic Valve | &#8594; | 34202007 |  Aortic valve structure (body structure) | | | | |
|Dens| Cervical vertebrae - Bony part of dens of axis | &#8594; | 1172006 |  Structure of odontoid process of axis (body structure) | | | | |
|External| Contour encompassing body plus other external items  | &#8594; | 123037004 |  Body structure (body structure) | | |261074009| external (qualifier value)|
|VB| Vertebral Body | &#8594; | 3572006 |  Structure of body of vertebra (body structure) | | | | |
|VB_C| Cervical vertebrae | &#8594; | 3572006 |  Bone structure of cervical vertebra (body structure) | | | | |
|VB_C1| Atlas - C1 | &#8594; | 14806007 |  Bone structure of atlas (body structure) | | | | |
|VB_C2| Axis - C2 | &#8594; | 39976000 |  Bone structure of axis (body structure) | | | | |
|VB_C3| Cervical vertebra - C3 | &#8594; | 91116008 |  Structure of body of third cervical vertebra (body structure) | | | | |
|VB_C4| Cervical vertebra - C4 | &#8594; | 14705001 |  Structure of body of fourth cervical vertebra (body structure) | | | | |
|VB_C5| Cervical vertebra - C5 | &#8594; | 67479001 |  Structure of body of fifth cervical vertebra (body structure) | | | | |
|VB_C6| Cervical vertebra - C6 | &#8594; | 88298007 |  Structure of body of sixth cervical vertebra (body structure) | | | | |
|VB_C7| Cervical vertebra - C7 | &#8594; | 16126006 |  Structure of body of seventh cervical vertebra (body structure) | | | | |
|VB_L| Lumbar Vertebrae | &#8594; | 73903008 |  Bone structure of lumbar vertebra (body structure) | | | | |
|VB_L1| Lumbar Vertebra L1 | &#8594; | 61032001 |  Structure of body of first lumbar vertebra (body structure) | | | | |
|VB_L2| Lumbar Vertebra L2 | &#8594; | 53983007 |  Structure of body of second lumbar vertebra (body structure) | | | | |
|VB_L3| Lumbar Vertebra L3 | &#8594; | 55492004 |  Structure of body of third lumbar vertebra (body structure) | | | | |
|VB_L4| Lumbar Vertebra L4 | &#8594; | 71996003 |  Structure of body of fourth lumbar vertebra (body structure) | | | | |
|VB_L5| Lumbar Vertebra L5 | &#8594; | 21799000 |  Structure of body of fifth lumbar vertebra (body structure) | | | | |
|VB_S| Sacral Vertebra | &#8594; | 87141009 |  Sacral vertebra structure (body structure) | | | | |
|VB_S1| Sacral Vertebra S1 | &#8594; | 65985001 |  Structure of first sacral vertebra (body structure) | | | | |
|VB_S2| Sacral Vertebra S2 | &#8594; | 11808007 |  Structure of second sacral vertebra (body structure) | | | | |
|VB_S3| Sacral Vertebra S3 | &#8594; | 49967005 |  Structure of third sacral vertebra (body structure) | | | | |
|VB_S4| Sacral Vertebra S4 | &#8594; | 69950008 |  Structure of fourth sacral vertebra (body structure) | | | | |
|VB_S5| Sacral Vertebra S5 | &#8594; | 21452006 |  Structure of fifth sacral vertebra (body structure) | | | | |
|VB_T| Thoracic Vertebra | &#8594; | 35769007 |  Bone structure of thoracic vertebra (body structure) | | | | |
|VB_T01| Thoracic Vertebra T1 | &#8594; | 56094003 |  Structure of body of first thoracic vertebra (body structure) | | | | |
|VB_T02| Thoracic Vertebra T2 | &#8594; | 50060007 |  Structure of body of secon thoracic vertebra (body structure) | | | | |
|VB_T03| Thoracic Vertebra T3 | &#8594; | 73138009 |  Structure of body of third thoracic vertebra (body structure) | | | | |
|VB_T04| Thoracic Vertebra T4 | &#8594; | 86197001 |  Structure of body of fourth thoracic vertebra (body structure) | | | | |
|VB_T05| Thoracic Vertebra T5 | &#8594; | 6105006 |  Structure of body of fifth thoracic vertebra (body structure) | | | | |
|VB_T06| Thoracic Vertebra T6 | &#8594; | 32430008 |  Structure of body of sixth thoracic vertebra (body structure) | | | | |
|VB_T07| Thoracic Vertebra T7 | &#8594; | 71737002 |  Structure of body of seventh thoracic vertebra (body structure) | | | | |
|VB_T08| Thoracic Vertebra T8 | &#8594; | 77435000 |  Structure of body of eighth thoracic vertebra (body structure) | | | | |
|VB_T09| Thoracic Vertebra T9 | &#8594; | 33766003 |  Structure of body of ninth thoracic vertebra (body structure) | | | | |
|VB_T10| Thoracic Vertebra T10 | &#8594; | 48405002 |  Structure of body of tenth thoracic vertebra (body structure) | | | | |
|VB_T11| Thoracic Vertebra T11 | &#8594; | 52120002 |  Structure of body of eleventh thoracic vertebra (body structure) | | | | |
|VB_T12| Thoracic Vertebra T12 | &#8594; | 280849005 |  Structure of body of twelfth  thoracic vertebra (body structure) | | | | |
|VB_T12| Thoracic Vertebra T13 | &#8594; | 1186895000 |  Structure of body of thirteenth  thoracic vertebra (body structure) | | | | |
|VBs| Vertebral Bodies | &#8594; | 3572006 |  Structure of body of vertebra (body structure) | | |255204007| multiple (qualifier value)|
|Fossa_Jugular| Jugular Fossa | &#8594; | 1187337007 |  Jugular Fossa (body structure) | | | | |
|Fossa_Posterior| Posterior Fossa | &#8594; | 35763008 |  Structure of posterior fossa of cranial cavity (body structure) | | | | |
|VocalCord_L| Left Vocal Cord | &#8594; | 46105003 |  Vocal cord structure (body structure) | 7771000| left (qualifier value)| | |
|VocalCord_R| Right Vocal Cord | &#8594; | 46105003 |  Vocal cord structure (body structure) | 24028007| right (qualifier value)| | |
|LN_Presacral| Lymph nodes of pelvis - presacral  | &#8594; | 1187336003 |  Presacral lymph node group (body structure) | | | | |
|Vomer| Vomer | &#8594; | 87166008 |  Vomer bone structure (body structure) | | | | |
|Sinus_Sphenoid| Sphenoidal Sinus | &#8594; | 24999009 |  Sphenoid sinus structure (body structure) | | | | |
|Strct | Structure | &#8594; | 123037004 |  Body structure (body structure) | | | | |
{:.grid}


{% include markdown-link-references.md %}

---

// File: input/pagecontent/conformance-general.md


This section outlines requirements and recommendations for mCODE participants. The conformance verbs - SHALL, SHOULD, and MAY - are defined in [FHIR Conformance Rules](http://hl7.org/fhir/R4/conformance-rules.html). MUST, MUST NOT, SHALL NOT, and REQUIRED are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119). 

### mCODE Participant Roles

Two roles for **mCODE Participants** are defined:

* **mCODE Data Sender** - a participant in exchange of mCODE data who provides mCODE data in response to a data query or autonomously pushes mCODE data to an mCODE receiver. The Data Sender does not have to be the originator of the data it possesses. The Data Sender role is similar to a [US Core Responder](https://www.hl7.org/fhir/us/core/#us-core-actors), except the data sent is not assumed to be a response to a query.
* **mCODE Data Receiver** - a participant in exchange of mCODE data who accepts mCODE data from an mCODE Data Sender. The Data Receiver may receive data as part of a predetermined workflow, or initiate the exchange via a query or on a regular basis via subscription. The Receiver role is similar to a [US Core Requestor](https://www.hl7.org/fhir/us/core/#us-core-actors), except the data does not have to be explicitly requested.

This IG currently only provides CapabilityStatements and documentation for "pull" (query-response) architectures, however, regardless how exchanges occur, all participants SHALL follow the conformance requirements in this IG, **except** those specifically identified as applying only to pull architectures.

### "SHALL" Requirements for Conformance

mCODE participants SHALL meet the following requirements for conformance:

1. [Identify in-scope patients](#identify-in-scope-patients)
1. [Follow conformance requirements for supported profiles](#follow-conformance-requirements-for-supported-profiles)
1. [Populate and meaningfully process mCODE resources](#populate-and-meaningfully-process-mcode-resources)
1. [Support querying mCODE-conforming resources](#support-querying-mcode-conforming-resources)
1. [Publish a CapabilityStatement identifying supported profiles and operations](#publish-a-capabilitystatement-identifying-supported-profiles-and-operations)
1. [Support US Core conformance requirements](#support-us-core-conformance-requirements)


#### Identify In-Scope Patients

To facilitate conformance testing, testing software must be able to determine which patients are "in-scope" (meaning cancer patients whose data is presented or exchanged with the intention of conforming to mCODE). In general, all patients with confirmed cancer diagnoses SHOULD be covered by mCODE, but mCODE provides several ways to identify this group of in-scope patients. See the [Identifying In-Scope Patients](conformance-patients.html) page for details.

#### Follow Conformance Requirements for Supported Profiles

The information produced and consumed by mCODE participants is defined by a set of profiles. Both Senders and Receivers must conform to the expectations set by these profiles. See the [Profile Conformance](conformance-profiles.html) page for details.

#### Populate and Meaningfully Process mCODE Resources

mCODE Senders MUST be able to populate data elements Must-Support (MS) obligations, for all profiles they support (as declared in their CapabilityStatement). Receivers MUST be able to meaningfully process elements with MS obligations for each of the profiles they support (as declared in their CapabilityStatement). "Able to Populate" and "Meaningfully Process" have particular meanings, as discussed on the [Profile Conformance](conformance-profiles.html) page.

#### Support Querying mCODE-Conforming Resources

mCODE defines operations that Senders and Receivers use to exchange mCODE information. In a "pull" (query-response) architecture, Senders SHALL support the requests below for retrieving all resources conforming to a given mCODE Profile, UNLESS they do not support the profile at all (see ["Support All mCODE Profiles"](#support-all-mcode-profiles) below). For more details on the conformance requirements for Senders and Receivers, see [Profile Conformance](conformance-profiles.html).

Note that the requests below may return resources associated with patients who are not [in-scope patients]. These resources MAY not conform to mCODE profiles.

* Patient
  * [CancerPatient]\: see [Identifying In-Scope Patients](conformance-patients.html) for the options to retrieve all conforming resources
  * [HumanSpecimen]\: Depends on type, for example: `GET [base]/Specimen?type=http://terminology.hl7.org/CodeSystem/v2-0487|TUMOR` (note that `TUMOR` must be capitalized)
  * [MCODEPatientBundle]\: see [Support the mCODE Bundle](#support-the-mcode-patient-bundle)
  * [MCODEPatientGroup]\: n/a

* Disease
  * Diagnosis
    * [PrimaryCancerCondition]\: `GET [base]/Condition?category=http://snomed.info/sct|372087000` (preferred form)
    * [PrimaryCancerCondition]\: `GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-or-uncertain-behavior-cancer-disorder-vs` (alternate form)
    * [SecondaryCancerCondition]\: `GET [base]/Condition?category=http://snomed.info/sct|128462008` (preferred form)
    * [SecondaryCancerCondition]\: `GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/CancerStageTypeVS` (alternate form)
  * Staging
    * Note: This single query returns all resources compliant with the profiles [CancerStage], [TNMStageGroup], [TNMPrimaryTumorCategory], [TNMRegionalNodesCategory], and [TNMDistantMetastasesCategory]:
    * [CancerStage]\: `GET [base]/Observation?category= http://snomed.info/sct|385356007` (preferred form)
    * [CancerStage]\: `GET [base]/Observation?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-cancer-stage-type-vs` (alternate form)
  * Characterization
    * [TumorMarkerTest]\: `GET [base]/Observation?category=http://snomed.info/sct|250724005` (preferred form)
    * [TumorMarkerTest]\: `GET [base]/Observation?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-tumor-marker-test-vs` (alternate form)

* Assessment
  * [Comorbidities]\: `GET [base]/Observation?code=http://snomed.info/sct|398192003`
  * [ECOGPerformanceStatus]\: `GET [base]/Observation?code=http://loinc.org|89247-1`
  * [KarnofskyPerformanceStatus]\: `GET [base]/Observation?code=http://loinc.org|89243-0`
  * [FHIR Vital Signs](https://www.hl7.org/fhir/observation-vitalsigns.html) and [US Core Vital Signs](https://hl7.org/fhir/us/core/3.2.0/StructureDefinition-us-core-vital-signs.html): `GET [base]/Observation?category=vital-signs`
  * [US Core DiagnosticReport Profile for Laboratory Results Reporting](http://hl7.org/fhir/us/core/StructureDefinition-us-core-diagnosticreport-lab.html): `GET [base]/DiagnosticReport?category=LAB` (note that `LAB` must be capitalized)
  * [US Core Laboratory Result Profile](http://hl7.org/fhir/us/core/StructureDefinition-us-core-observation-lab.html): `GET [base]/Observation?category=laboratory`

* Genomics
  * [GenomicVariant]\: `GET [base]/Observation?code=http://loinc.org|69548-6`
  * [HumanSpecimen]\: Resources referenced in the `specimen` element in resources conforming to [GenomicVariant] or [GenomicsReport]
  * [GenomicsReport]\: `GET [base]/DiagnosticReport?code=http://loinc.org|81247-9`
  * [GenomicRegionStudied]\: `GET [base]/Observation?code=http://loinc.org|53041-0`

* Treatment
  * Medication
    * [CancerRelatedMedicationRequest]\: Resources conforming to this profile MAY be identified by (1) a code from [CancerDisorderVS] in the `reasonCode` element, and/or (2) a reference to a resource conforming to [PrimaryCancerCondition] or [SecondaryCancerCondition] in the `reasonReference` element. Because these elements are not required, these criteria may not identify all conforming resources.
    * [CancerRelatedMedicationAdministration]\: Same as [CancerRelatedMedicationRequest] as described above.
  * Surgery
    * [CancerRelatedSurgicalProcedure]\: `GET [base]/Procedure?code=http://snomed.info/sct|387713003` will identify all surgical procedures. `Procedure.code` is extensibly bound to [CancerRelatedSurgicalProcedureVS], so further filtering to include only Procedures with `code` in this value set will identify some but not necessarily all cancer-related surgical procedures.
  * Radiotherapy
    * [RadiotherapyCourseSummary]\: `GET [base]/Procedure?code=mcode-radiotherapy-course-summary`

* Outcome
  * [CancerDiseaseStatus]\: `GET [base]/Observation?code=http://loinc.org|88040-1`
  * [Tumor]\: Not identifiable as there are no required elements with fixed values or required value sets in this profile. Note that `BodyStructure.morphology` is fixed to `http://snomed.info/sct|367651003`, but this is not a required element. This may therefore be used to identify some but not all BodyStructure resources conforming to this profile.
  * [TumorSize]\: `GET [base]/Observation?code=http://loinc.org|21889-1`

#### Publish a CapabilityStatement Identifying Supported Profiles and Operations

Each mCODE participant SHALL publish a FHIR CapabilityStatement listing their supported profiles, by declaring the profile in `CapabilityStatement.rest.resource.supportedProfile`. The CapabilityStatement SHALL be returned in response to a `GET [base]/metadata` request.

ALL mCODE participants SHALL at minimum support the [CancerPatient] and [PrimaryCancerCondition] profiles.

#### Support US Core Conformance Requirements

Additional [conformance requirements from US Core](https://hl7.org/fhir/us/core/general-requirements.html) apply to RESTful interactions, searches, and resource formats in mCODE. mCODE "inherits" all US Core conformance requirements. US Core provides base profiles for many (but not all) mCODE profiles, outlines expectations for handling of missing or unknown data elements, and outlines how to associate provenance information associated with collection, transfer, and updating clinical information.

International users of mCODE may find US Core an impediment to implementation. Application of mCODE to other countries is open to further discussion.

### "SHOULD" Recommendations for Conformance

mCODE participants SHOULD meet the following requirements for conformance:

1. [Support all mCODE Profiles](#support-all-mcode-profiles)
1. [Support the mCODE Patient Bundle](#support-the-mcode-patient-bundle)

#### Support All mCODE Profiles

In addition to supporting the core profiles as described above, mCODE participants SHOULD support all profiles defined in mCODE UNLESS the participant does not anticipate supplying or consuming a certain type of data, usually by virtue of playing a limited or specialized role in clinical or information workflows. For example, a genomics laboratory may support [GenomicsReport], but not vital signs or staging.

Participants SHOULD also support the non-mCODE-specific profiles that are considered part of an [mCODE Patient Bundle][MCODEPatientBundle], such as [blood pressure](http://hl7.org/fhir/StructureDefinition/bp).

#### Support the mCODE Patient Bundle

The [mCODE Patient Bundle][MCODEPatientBundle] provides a mechanism to retrieve cancer-related resources for an in-scope Patient. Participants SHOULD support this CapabilityStatement ([sender][mcode-sender-patient-bundle]/[receiver][mcode-receiver-patient-bundle]) for the [mcode-patient-everything] operation, which retrieves an mCODE Patient Bundle for a given Patient ID.

    GET [base]/Patient/[id]/$mcode-everything

This endpoint SHALL support `start` and `end` parameters and MAY support the `_since`, `_type`, and `_count` parameters, which operate the same as in the [`Patient/[id]/$everything` operation](https://www.hl7.org/fhir/operation-patient-everything.html). The _since parameter is provided to support periodic queries to obtain additional information that has changed about the patient since the last query.

For some types of resources, such as vital signs, a large number of resources may exist. Senders may use their discretion to select the resources that are most relevant, e.g., a subset of the vital signs that were recorded. Alternatively, servers may refuse to serve the request and indicate that the client asked for too much data (see [OperationOutcome](https://www.hl7.org/fhir/operationoutcome.html)). To limit the number of included resources, callers MAY specify a `_count` parameter that pages through the results.

<!-- If the image below is not wrapped in a div tag, the publisher tries to wrap text around the image, which is not desired. -->
<div style="text-align: center;">{%include mcode-patient-bundle-pull.svg%}</div>

mCODE Patient Bundles SHALL be identified by an `id` value that matches the `id` in the contained CancerPatient-conforming resource.

#### Use `meta.profile` to Signal Conformance

Participants SHOULD populate `meta.profile` elements for all resources to indicate which profiles the resources claim to conform to. Servers SHOULD also implement [profile search](https://www.hl7.org/fhir/search.html#profile), which allows participants to query using the `_profile` parameter to return resources conforming to the profiles declared in `meta.profile`.

Profile search and population of `meta.profile` originate as "SHALL" requirements in the base FHIR specification; they are not  additional requirements imposed by mCODE. However, in practice, few implementations have followed these requirements. Refer to the [FHIR Documentation on supported profiles](https://www.hl7.org/fhir/profiling.html#CapabilityStatement.rest.resource.supportedProfile) for details.

### Capability Statements

* **Receiver**
  * [mcode-receiver-patient-bundle]
* **Sender**
  * [mcode-sender-patient-bundle]

### Operations

* [mcode-patient-everything]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/conformance-patients.md

To facilitate conformance testing, testing software must be able to determine which patients are "in-scope" (meaning cancer patients whose data is presented or exchanged with the intention of conforming to mCODE). In FHIR terms, these are patients who have a Condition where `Condition.code` is a member of the value set [PrimaryCancerDisorderVS] and `Condition.verificationStatus` is confirmed.

However, due to technical, organizational, or legal reasons, mCODE Data Senders MAY exclude some cancer patients from mCODE. In that case, the mCODE Data Sender SHALL define a Group resource to identify ALL in-scope patients in their system. This Group resource SHALL set `Group.code` to `C19700` with code system `http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl` (this is the NCI code for concept "Cancer Patient"). Data Senders that do not exclude any cancer patients from mCODE MAY still populate a Group resource.

All mCODE Data Senders SHALL respond to `GET [base]/Group?code=C19700` with either zero or one Group resource. If no Group resource is returned, all patients with cancer diagnoses (as defined above) will be considered to be in-scope. If a Group resource is returned, patients not referenced in the Group resource are assumed to be out of scope, independent of any cancer diagnosis. This requirement is reflected in ALL CapabilityStatements referenced in this section.

The following CapabilityStatements define the various methods participants can use to identify in-scope Patients. Participants implementing a pull architecture SHALL support at least one of the CapabilityStatements listed from **most to least preferable**, below.

### Patients-in-Group Approach

In this approach, Senders respond to the following request with a Group resource referencing the Patient resources for all in-scope Patients, AND allow the Receiver to retrieve a Bundle of the Patient resources referenced in the first response using [composite search parameters](https://www.hl7.org/fhir/search.html#combining):

    GET [base]/Group?code=C19700

    GET [base]/Patient?_id=some_patient_id_1,some_patient_id_2,...,some_patient_id_n

**CapabilityStatements:**
* Sender: [mcode-sender-patients-in-group]
* Receiver: [mcode-receiver-patients-in-group]

<!-- If the image below is not wrapped in a div tag, the publisher tries to wrap text around the image, which is not desired. -->
<div style="text-align: center;">{%include patients-in-group.svg%}</div>


### Patients-With-Cancer-Condition Approach

In this approach, Senders respond to the following request with a FHIR Bundle of Patient resources for all in-scope Patients. This method is preferred over the approaches below UNLESS [reverse chaining](https://www.hl7.org/fhir/search.html#has) is entirely unsupported on the system.

    GET [base]/Patient?_has:Condition:subject:code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-or-uncertain-behavior-cancer-disorder-vs

**Capability Statements:**

* Sender: [mcode-sender-patients-with-cancer-condition]
* Receiver: [mcode-receiver-patients-with-cancer-condition]

<!-- If the image below is not wrapped in a div tag, the publisher tries to wrap text around the image, which is not desired. -->
<div style="text-align: center;">{%include patients-with-cancer-condition.svg%}</div>


### Patient-Then-Cancer-Conditions Approach

In this approach, Senders can respond to a request using [`_include`](https://www.hl7.org/fhir/search.html#revinclude) to get a Bundle of the relevant Patient resources along with the subset of Condition resources with `Condition.code` in [Primary Cancer Disorder Value Set][PrimaryCancerDisorderVS] in a single request. Preferred over the approach below UNLESS `_include` is entirely unsupported on the system.

    GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-or-uncertain-behavior-cancer-disorder-vs&_include=Condition:subject


**Capability Statements:**

* Sender: [mcode-sender-patients-and-cancer-conditions]
* Receiver: [mcode-receiver-patients-and-cancer-conditions]

<!-- If the image below is not wrapped in a div tag, the publisher tries to wrap text around the image, which is not desired. -->
<div style="text-align: center;">{%include patients-and-cancer-conditions.svg%}</div>


### Conditions-Then-Patients Approach

In this approach, Senders will return a Bundle with the subset of Condition resources with a `code` in the [Primary Cancer Disorder Value Set][PrimaryCancerDisorderVS] in a single request, AND allow the Receiver to retrieve a Bundle of the Patient resources referenced in the first response using [composite search parameters](https://www.hl7.org/fhir/search.html#combining):

    GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-or-uncertain-behavior-cancer-disorder-vs

    GET [base]/Patient?_id=some_patient_id_1,some_patient_id_2,...,some_patient_id_n

**Capability Statements:**

* Sender: [mcode-sender-cancer-conditions-then-patients]
* Receiver: [mcode-receiver-cancer-conditions-then-patients]

<!-- If the image below is not wrapped in a div tag, the publisher tries to wrap text around the image, which is not desired. -->
<div style="text-align: center;">{%include cancer-conditions-then-patients.svg%}</div>


{% include markdown-link-references.md %}


---

// File: input/pagecontent/conformance-profiles.md

### Profile Base


Most mCODE profiles are based on US Core profiles defined in the [US Core Implementation Guide (v6.1.0)](http://hl7.org/fhir/us/core/index.html). For example, [CancerPatient] is based on the [US Core Patient][USCorePatient] profile. Because of the way profiles work in FHIR, any resource that validates against an mCODE profile that is based a US Core profile will automatically be in compliance with the US Core profile.

Where US Core does not provide an appropriate base profile, mCODE profiles FHIR resources. An example is [CancerDiseaseStatus], based on Observation because US Core does not provide a profile for non-laboratory observations.

| Profile | Based on US Core?  | Immediate Parent Profile |
|---------|--------------------|--------------------------|
| [ALL Risk Assessment][ALLRiskAssessment] | no | CancerRiskAssessment |
| [Body Structure Identifier][BodyStructureIdentifier] | no | Identifier |
| [Body Surface Area][BodySurfaceArea] | yes | US Core Vital Signs |
| [Cancer Disease Status][CancerDiseaseStatus] | no | Observation |
| [Cancer Patient][CancerPatient] | yes | US Core Patient |
| [Cancer-Related Medication Administration][CancerRelatedMedicationAdministration] | no | Medication Administration |
| [Cancer-Related Medication Request][CancerRelatedMedicationRequest] | yes | US Core Medication Request |
| [Cancer-Related Surgical Procedure][CancerRelatedSurgicalProcedure] | yes | US Core Procedure |
| [Cancer Risk Assessment][CancerRiskAssessment] | no | Observation |
| [Cancer Stage][CancerStage] | no | Observation |
| [CLL Binet Stage Profile][CLLBinetStage] | no | CancerStage |
| [CLL Rai Stage Profile][CLLRaiStage] | no | CancerStage |
| [Comorbidities][Comorbidities] | no | Observation |
| [Deauville Scale][DeauvilleScale] | yes | US Core Observation Imaging Result |
| [ECOG Performance Status][ECOGPerformanceStatus] | yes | US Core Observation Clinical Test Result |
| [Genomic Region Studied][GenomicRegionStudied] | no | Genomics Reporting IG RegionStudied |
| [Genomics Report][GenomicsReport] | no | Genomics Reporting IG GenomicsReport |
| [Genomic Variant][GenomicVariant] | no | Genomics Reporting IG Variant |
| [Gynecologic Tumor FIGO Stage][GynecologicTumorFigoStage] | no | CancerStage |
| [Histologic Behavior and Type][HistologicBehaviorAndType] | yes | US Core Laboratory Result Observation |
| [Histologic Grade][HistologicGrade] | yes | US Core Laboratory Result Observation |
| [History of Metastatic Cancer][HistoryofMetastaticCancer] | no | Observation
| [Human Specimen][HumanSpecimen] | no | Specimen |
| [Karnofsky Performance Status][KarnofskyPerformanceStatus] | yes | US Core Observation Clinical Test Result |
| [Lansky Play Performance Status][LanskyPlayPerformanceStatus] | yes | US Core Observation Clinical Test Result |
| [Lymphoma Stage Profile][LymphomaStage] | no | CancerStage |
| [mCODE Patient Bundle][MCODEPatientBundle] | no | Bundle  |
| [mCODE Patient Group][MCODEPatientGroup] | no | Group  |
| [Melanoma Breslow Depth Stage][MelanomaBreslowDepthStage] | no | CancerStage |
| [Melanoma Clark Level][MelanomaClarkLevel] | no | CancerStage |
| [Myeloma ISS Stage][MyelomaISSStage] | no | CancerStage |
| [Myeloma RISS Stage][MyelomaRISSStage] | no | CancerStage |
| [Neuroblastoma INRGSS Stage][NeuroblastomaINRGSSStage] | no | CancerStage |
| [Neuroblastoma INSS Stage][NeuroblastomaINSSStage] | no | CancerStage |
| [Primary Cancer Condition][PrimaryCancerCondition] | yes | US Core Condition Problems Health Concerns |
| [Prostate Gleason Grade Group][ProstateGleasonGradeGroup] | no | CancerStage
| [Radiotherapy Course Summary][RadiotherapyCourseSummary] | yes | US Core Procedure |
| [Radiotherapy Volume][RadiotherapyVolume] | no | BodyStructure |
| [Rhabdomyosarcoma Clinical Group][RhabdomyosarcomaClinicalGroupStage] | no | CancerStage
| [Rhabdomyosarcoma Risk Assessment][RhabdomyosarcomaRiskAssessment] | no | CancerRiskAssessment
| [Secondary Cancer Condition][SecondaryCancerCondition] | yes | US Core Condition Problems Health Concerns |
| [TNM Distant Metastases Category][TNMDistantMetastasesCategory] | no | Observation |
| [TNM Primary Tumor Category][TNMPrimaryTumorCategory] | no | Observation |
| [TNM Regional Nodes Category][TNMRegionalNodesCategory] | no | Observation |
| [TNM Stage Group TNM][TNMStageGroup] | no | CancerStage |
| [Tumor][Tumor] | no | BodyStructure |
| [Tumor Marker Test][TumorMarkerTest] | yes | US Core Laboratory Result Observation |
| [Tumor Morphology][TumorMorphology] | yes | US Core Diagnostic Report Profile Laboratory Reporting |
| [Tumor Size][TumorSize] | no | Observation |
| [Wilms Tumor Stage][WilmsTumorStage] | no | CancerStage |
{: .grid }

### Profile-Level Conformance Expectations

mCODE expresses requirements and expectations for implementers on the level of entire profiles and individual data elements within those profiles. The conformance rules concerning profiles are as follows:

1. All mCODE profiles that have a top-level Must-Support (MS) flag SHALL be implemented[^1].
2. All profiles defined in mCODE SHOULD be implemented UNLESS the participant does not anticipate supplying or consuming a certain type of data, usually by virtue of playing a limited or specialized role in clinical or information workflows.
3. The list of implemented profiles SHALL be published in a CapabilityStatement.
4. For each implemented profile, a Data Sender SHALL follow that profile's conformance statement describing what data SHALL or SHOULD conform to that profile[^2].
5. Support of data elements that [reference](https://www.hl7.org/fhir/references.html) other profiles MAY require implementers to support additional profiles.
6. A Sender has the responsibility for creating instances that conform to the target profile. All such instances must pass [validation](https://www.hl7.org/fhir/validation.html) against the selected profile.
7. A Receiver SHOULD perform validation on instances it receives. If an instance fails validation, the Receiver MAY reject the instance.

Regarding #7, there are several ways the Receiver can identify the correct profile to use for validation:

* The instance is received in response to a [profile search](https://www.hl7.org/fhir/search.html#profile), so the validating profile is known in advance.
* The instance self-identifies an mCODE profile using `meta.profile`. Every Data Sender SHOULD populate this element.
* The Data Receiver examines the contents of the instance to associate it with a profile. Often, there is an identifying code or category that can be used to associate an instance with a profile.
* The Data Receiver iteratively tries to validate against each of its supported profiles applicable to the instance's resource type. This is typically a means of last resort.

### Element-Level Conformance Expectations

#### Implementing a Data Element

Implementing an mCODE data element means:

1. A Data Sender SHALL be capable of populating the element, UNLESS the sender does not anticipate supplying or consuming the element, usually by virtue of playing a limited or specialized role in clinical or information workflows.
2. If the element's minimum cardinality is greater than zero, and the Sender lacks the data necessary to populate the element, then the [US Core rules on missing data](http://hl7.org/fhir/us/core/general-guidance.html#missing-data) SHALL be followed.
3. If the element's minimum cardinality is zero and the Sender lacks the data necessary to populate the element, the element SHOULD be entirely omitted. If there is a specific reason the data is missing, a data absent reason (described in the [US Core rules on missing data](http://hl7.org/fhir/us/core/general-guidance.html#missing-data)) MAY be substituted.
4. Senders SHALL NOT substitute nonsense or filler values for missing values.
5. Receivers SHALL be capable of meaningfully processing the element. Depending on context, "meaningful processing" might mean displaying the data element for human use, reacting to it, or storing it for other purposes.

#### Must-Implement (Versus "Must-Support")

An implementer SHALL implement certain data elements. These are not necessarily the ones labeled "Must-Support" in the specification. Must-Support elements (marked with the <span style="padding-left: 3px; padding-right: 3px; color: white; background-color: red" >S</span> flag in IG profile pages) do not *necessarily* need to be implemented, and certain elements that lack MS flags *may have to be* implemented.

To see which elements have MS flags, consult the "Snapshot Table" or "Snapshot Table (Must-Support)" views of a profile. The "Snapshot Table" view shows _all_ elements, with flags (<span style="padding-left: 3px; padding-right: 3px; color: white; background-color: red" >S</span>) identifying the subset of these elements that are MS. The "Snapshot Table (Must-Support)" view shows _only_ MS elements and therefore does not display MS flags. Note that the "Differential Table" profile view hides MS flags inherited from the parent profile, and is therefore not appropriate for identifying MS elements in a profile.

Outside of data elements that must be implemented, additional data elements MAY be implemented. If a data element is implemented, the profile must be interpreted as if an MS flag were present on that element.

#### Must-Implement Rules

The following rules determine which data elements must be implemented:

1. Only data elements in implemented profiles (as declared in the Sender or Receiver's CapabilityStatement) can be designated as Must-Implement (MI). In other words, if a profile is not implemented, then none of the elements of that profile must be implemented, regardless of MS flags[^3]. *This rule takes precedence over subsequent rules.*
2. A top-level element with an MS flag SHALL be implemented.
3. A nested element (at the second-level or below) with MS flag whose parents all are implemented SHALL be implemented. Note that this includes parent elements that have been implemented electively.
4. An element whose cardinality is 0..0 does NOT need to be implemented, regardless of MS flag[^4].
5. For Data Senders, a [required element](#definition-of-required) SHALL be implemented, regardless of whether that element has an MS flag. This is because Data Senders must populate required elements.
6. For Data Receivers, a [required element](#definition-of-required) without an MS flag does NOT have to be implemented[^5]. This is because Receivers have the option of ignoring an element passed to them if they have elected to not support that element.

More complex cases involving references, sliced arrays, and choice types are outlined in the [Must-Implement Summary](#must-implement-summary).

#### Definition of "Required"

An mCODE data element is **required** if any of the following criteria are met:

* The element is a top-level element (a first-level property of the resource) and its minimum cardinality is > 0 in the profile.
* The element is not a top-level element (a second-level property or below), its minimum cardinality is > 0, and all elements directly containing that element have minimum cardinality > 0 in the profile.

In terms of instances, if profile P has an optional element A whose child element B has minimum cardinality > 0, then any instance where element A is present will only conform to P if element B is present.

### Must-Implement Summary

The following table summarizes how Must-Implement (MI) requirements derive from Must-Support (MS) flags. For the sake of completeness, this table covers certain cases not seen in mCODE.

| # | MS-Flagged Element  | Data Sender (Server) Must Implement?  | Data Receiver (Client) Must Implement? | Example |
|---|--------------|--------------|---------------|---|
| 1 | Top level element, or nested element whose parents are all MS | Yes | Yes | [`CancerDiseaseStatus.focus`][CancerDiseaseStatus] or [`CancerRelatedMedicationRequest.dosageInstruction.text`][CancerRelatedMedicationRequest] |
| 2 | Element is a nested (child) element and there is no MS flag on its parent element | MI only if the Sender elects to implement the parent element | MI only if the Receiver elects to implement the parent element | [US Core Patient version 3.2](https://bit.ly/us-core-2021Jan-StructureDefinition-us-core-patient) `Patient.telecom.system` |
| 3 | Element is a [complex data type](https://www.hl7.org/fhir/datatypes.html#complex) (such as CodeableConcept) with no MS flag on any immediate sub-element  | MI [at least one sub-element](https://bit.ly/us-core-2021Jan-conformance-expectations-must-support), and SHOULD implement every sub-element for which the server might possess data | MI every sub-element (since the Receiver cannot anticipate which sub-elements might be populated) | [`PrimaryCancerCondition.code`][PrimaryCancerCondition] |
| 4 | Element is a [complex data type](https://www.hl7.org/fhir/datatypes.html#complex) with an MS flag on one or more immediate sub-elements  | MI [only the sub-elements that are explicitly flagged](https://bit.ly/us-core-2021Jan-conformance-expectations-must-support) | same | [`CancerPatient.name`][CancerPatient] |
| 5 | Element is a [choice \[x\] type](https://www.hl7.org/fhir/stu3/formats.html#choice) with no MS flag on any choice | MI at least one datatype choice, and SHOULD implement every datatype for which the server might possess data | MI **all** datatype choices (since the Receiver cannot anticipate which sub-elements might be populated)| [`CancerPatient.deceased[x]`][CancerPatient] |
| 6 | Element is a [choice \[x\] type](https://www.hl7.org/fhir/stu3/formats.html#choice) with an MS flag on one or more choice | MI only on the datatype choice(s) that are explicitly flagged | same |  [US Core Laboratory Result Observation Profile version 3.2](https://bit.ly/us-core-2021Jan-StructureDefinition-us-core-observation-lab) `Observation.value[x]` |
| 7 | Element is a [Reference() data type](https://www.hl7.org/fhir/references.html#2.3.0) with no MS flag on any referenced resource or profile | MI all resources or profiles in the reference that are in Sender's capability statement | MI all resources or profiles in the reference unless they are outside the scope of the Receiver's capability statement | [`Tumor.extension[mcode-related-condition].value[x]`][Tumor] |
| 8 | Element is a [Reference() data type](https://www.hl7.org/fhir/references.html#2.3.0) with an MS flag on one or more of the referenced types | MI only on the resources or profiles in the reference that are explicitly MS-flagged, and only if they are in the Sender's capability statement | MI only on the resources or profiles in the reference that are explicitly MS-flagged, and only if they are in the Receiver's capability statement | [US Core DocumentReference Profile version 3.2](https://bit.ly/us-core-2021Jan-StructureDefinition-us-core-documentreference) `DocumentReference.author` |
| 9 | Element is a [backbone data type](https://www.hl7.org/fhir/backboneelement.html#2.29.0) | No implementation requirement on sub-elements unless they are explicitly MS-flagged  | same | [`SDC QuestionnaireResponse.item`](https://hl7.org/fhir/uv/sdc/2019May/sdc-questionnaireresponse.html) (subelement `QuestionResponse.item.definition` is not MS)  |
| 10 | Element is an [array that is sliced](https://www.hl7.org/fhir/profiling.html#slicing), with no MS flag on any slice | SHALL be able to populate the array, but [no implementation requirement any particular slice](https://confluence.hl7.org/pages/viewpage.action?pageId=35718826#GuidetoDesigningResources-HowdoIinterpret'MustSupport'withrespecttoslicing?) | MI array and its contents, including any or all defined slices |
| 11 | Element is an [array that is sliced](https://www.hl7.org/fhir/profiling.html#slicing), with MS flags on one or more slices | MI only on the slices that have MS flags | same | [`TNMStageGroup.hasMember`][TNMStageGroup] |
| 12 | Element that has MS flag is a slice and the containing array does not have an MS flag | No implementation requirement on the slice | same | [US Core Patient Profile version 3.1.1](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html) `Patient.extension:us-core-race` (because `Patient.extension` is not MS) |
{: .grid }

Footnotes:

[^1]: Although not common practice, profiles can have MS flags at the very top level (see [CancerPatient] for example).

[^2]: Typically, data reasonably expected to conform to an mCODE profile SHOULD conform to that profile. This rule is intended to discourage an mCODE Data Sender from creating different representations for data that *should* fall into the scope of mCODE. Compliance to this kind of condition is difficult to enforce, so it is expressed as a SHOULD.

[^3]: However, in FHIR, when exchanging ANY resources, systems SHOULD retain unknown extensions when they are capable of doing so, and they SHOULD retain core elements when they are capable of doing so (see <https://www.hl7.org/fhir/extensibility.html#exchange>)

[^4]: When inheriting from another profile, it is possible to set the upper cardinality to zero on an element that was MS in the parent profile. For example, you could inherit from US Core Patient, but forbid the patient’s name for privacy reasons.  In this case, neither Sender nor Receiver are expected to populate or support the element – in fact, it would be an error if the element were present.

[^5]: An example is a Receiver that does not meaningfully process a required element even though it was populated by the Sender.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/conformance-uscdi-plus.md

The Assistant Secretary for Technology Policy (ASTP), formerly the Office of the National Coordinator (ONC), is developing the USCDI+ for Cancer data elements required for cancer reporting and the Enhancing Oncology Model (EOM).  This is an important development that deserves early guidance on how mCODE can support this initiative as quickly as possible.

At the time of mCODE STU4 IG development, USCDI+ for Cancer just completed its comment period, so the proposed data elements may still be subject to change.  However, the current list of data elements suggests a higher priority should be applied to certain profiles within the mCODE data model.  This set of potential higher priority data elements have been collected into a group called "mCODE Core".  

The diagram below highlights the set of "mCORE Core" profiles within mCODE, as of October 10, 2024, that implementers may want to prioritize to meet the USCDI+ for Cancer proposal.

<br/>
<object data="mCodeCoreDiagram.svg" type="image/svg+xml"></object>
<br/>

Prioritizing the development of the highlighted profiles first provides a pathway for quickly supporting the USCDI+ for Cancer data elements while providing a rational stepping-stone towards full mCODE implementation.  Implementers should consider this option in their development plans.


---

// File: input/pagecontent/dictionary.md

### Data Dictionary Content

The Data Dictionary (DD) presents mCODE's content in a format that may be more accessible than the default FHIR artifact pages. The DD is an Excel spreadsheet that lists mCODE data elements and some details about them. If there is a discrepancy between the Data Dictionary and the FHIR artifacts, the FHIR artifacts are taken as the source of truth.

The DD intentionally omits certain elements in FHIR that are not expected to be implemented. Please be aware of the following:

* **Profiles not shown in the DD:** Not all profiles used by mCODE are included in the Data Dictionary. mCODE uses external profiles for vital signs and routine laboratory results. These profiles are not included in the DD because they are defined externally to mCODE.

* **Data elements not shown in the DD:** Only elements marked as "Must Support"(MS) are included in the Data Dictionary. These are elements that implementers may be expected to provide meaningful support for; see [Profile-Level Conformance Expectations](conformance-profiles.html#profile-level-conformance-expectations) for more information. Some of the MS elements are inherited from US Core.

Downloads:

* [STU 4 mCODE Data Dictionary (Excel download)](data-dictionary/mCODEDataDictionary-STU4.xlsx)
* [STU 3 mCODE Data Dictionary (Excel download)](https://hl7.org/fhir/us/mcode/mCODEDataDictionary-STU3.xlsx)


### Data Dictionary Differential

The Data Dictionary Differential (DDD) provides a detailed comparison between mCODE STU 4 and mCODE STU 3. The DDD is provided for convenience in understanding the changes between STU 4 and STU 3, and is not a formal part of the specification.

Download link:

* [mCODE Data Dictionary Differential STU4 versus STU3 (Excel download)](data-dictionary/mCODEDataDictionary-STU4-vs-STU3.xlsx)

---

// File: input/pagecontent/downloads.md

### Download

You can also download:

* [this entire guide](full-ig.zip)
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format.
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on HL7 GitHub [https://github.com/HL7/fhir-mCODE-ig](https://github.com/HL7/fhir-mCODE-ig).

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

The following Extensions are defined as part of mCODE:

* [BodyLocationQualifier]
* [CancerDiseaseStatusEvidenceType]
* [HistologyMorphologyBehavior]
* [LateralityQualifier]
* [ProcedureIntent]
* [RadiotherapyDoseDeliveredToVolume]
* [RadiotherapyModality]
* [RadiotherapyModalityAndTechnique]
* [RadiotherapySessions]
* [RadiotherapyTechnique]
* [RelatedCondition]
* [RelatedConditionAbsent]
* [TreatmentTerminationReason]
* [NormalizationBasis]

{% include markdown-link-references.md %}

---

// File: input/pagecontent/glossary.md

### Basic Definitions

|  Concept  | Definition | Additional Description|
|-----|-------------------|--------------------|
| Radiation Therapy (Radiotherapy) | Radiation therapy, or radiotherapy, is a treatment that uses doses of radiation to kill cells and shrink tumors.| Radiation therapy is generally divided into two classes, teleradiotherapy and brachytherapy. |
| Teleradiotherapy |  Radiation therapy in which high-energy beams are delivered from outside of the body. | Also known as [External Beam Radiation Therapy](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&ns=ncit&code=C15751). |
| Brachytherapy |  A type of radiation therapy in which radioactive material is placed inside the body, in a tumor or body cavity, or on the surface of the body. | [Reference](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&ns=ncit&code=C15195) |
| Modality | The main type of radiation delivery such as photons, protons, or high dose rate brachytherapy. |  Modalities are not strictly differentiated along a single physical property, but in a way that makes sense in practical categorization. For teleradiotherapy, modality refers to the type of particle used, while for brachytherapy, modality generally refers to the type of dose rate and placement. |
| Technique  |  The treatment delivery method such as Volumetric Modulated Arc Therapy or Particle Spot Scanning. | The technique defines how a certain modality is applied, enabling a more granular categorization of the treatment approach for a given modality. |
| Radiotherapy Volume | A volume of the body used in radiotherapy planning or treatment delivery. | Each volume can be further characterized by a type such as gross tumor volume (GTV) or planning target volume (PTV).  Radiotherapy Volumes may be subvolumes of anatomical structures, cover multiple anatomical structures fully or partly, or represent an anatomical structure plus a margin [Reference](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1434601/) |
{: .grid }

### Treatment Delivery Concepts

Radiotherapy delivery typically involves multiple sessions that can be conceptually divided into phases and fractions, following one or more treatment plans, each plan focused on achieving a certain clinical effect contributing to the overall treatment outcome. See the example provided below for more information.


|  Concept  | Definition | Additional Description|
|-----|-------------------|--------------------|
| Course | A course of treatment is a grouping that collects all radiation therapy treatments needed to treat a specific illness. A course is conceptually divided into one or more phases. | A course includes treatments from first delivery of radiation until the physician believes all body sites in need of radiation therapy have been treated, which can last for several months. For example, if radiotherapy is applied to the liver with one month between sessions, these are all part of the same course. If treatment is started for one body site (e.g., left breast) and subsequently another body site (e.g., right breast) is treated, the course includes both. |
| Phase | A phase is a conceptual series of treatments, comprised of one or more related treatment plans that focus on one set of target volumes with the same modality and technique. One or more related phases constitute a single course of treatment. | Phase is an abstraction from treatment plans to allow for continuous counting of phase fractions and dose tracking across multiple treatment plans. In the simplest case, a phase corresponds 1:1 to a treatment plan. Often phases within a course are sequential in time, but they may occur in parallel, overlapping, or in alternating temporal patterns. |
| Treatment Plan | A plan for radiation therapy using appropriate teleradiotherapy or brachytherapy treatment modalities, techniques, and doses for treating a patient. A treatment plan consists of a series of identical fractions. | The treatment plan is developed by a team consisting of radiation oncologists, radiation therapist, medical physicists and medical dosimetrists. The parameters of a treatment plan include the dose to be delivered to volumes, the number of fractions into which the treatment is subdivided, the modality, the technique, and the detailed device parameters required by a treatment device. Examples of device parameters are dose rate, field size, or irradiation angles. To vary any parameter between radiotherapy treatments, different treatment plans must be created and scheduled during a course of treatment to achieve the expected pattern. |
| Phase Fraction | Given one or more treatment plans belonging to a phase, a phase fraction is the combination of plan fractions delivered during a given session. | If a phase has only one plan, then the fractions of a phase and the fractions of a treatment plan are identical (in such a case, the term "fraction" can be used without qualification). When multiple plans are part of one phase, then a fraction of the phase contains the fractions of all those treatment plans during the session. |
| Treatment Plan Fraction | A portion of a treatment plan, delivered during a single session. | Each treatment plan is treated as a series of equivalent plan fractions, each fraction consisting of the same nominal dose to the same set of target volumes with the same modality, technique, and device parameters. The term "fraction" is also commonly used in the context of a phase, but here the concept of plan fraction is used for clarity when referring to subdivisions of a plan. |
| Session | A session is the period between when the patient enters the treatment room and when they leave it. A course consists of a series of sessions. | In one session, a fraction of one treatment plan or fractions from different treatment plans may be executed, depending on how the treatments of multiple phases and their specific treatment plans are assigned to sessions. For example, the first fraction of the right breast may be treated in the same session as the fifth fraction of the left breast. The actual number of sessions required to deliver a course may exceed the number of sessions originally scheduled. This is the case if the treatment in one session cannot be completed due to medical or technical issues and has to be continued in another session. |
{: .grid }

### Example

The following figures illustrate two different views of the treatment delivery concepts defined above. Here, one course of treatment is divided into three phases. The first of these phases is implemented by two plans, the second plan being a revision (adaptation) of the original plan after the first three sessions. The second and third phases are each implemented by a single treatment plan. The phases partially overlap and some sessions involve delivering fractions from two plans. For example, session 7 delivers the seventh fraction of the first (left breast tangents) phase (which is the fourth fraction of the adapted second plan of the first phase) and the third fraction of the third (right breast tangents) phase.



<img src="BreastTreatmentPlan.png" alt="Breast Treatment Plan" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />

<br/>
Here is a hierarchical view of the same course of treatment:
<br/>

<img src="BreastTreatmentSummary.png" alt="Relationship of Plans, Phases, and Course" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />


---

// File: input/pagecontent/group-assessment.md

The mCODE **Assessment** group contains information related to the patient's general health, before and during treatment.

### Comorbidities

Comorbidities are important in the prognosis and treatment of cancer. Any existing or new conditions can be designated as comorbidities.

### Performance Assessments

mCODE supports the [Eastern Cooperative Oncology Group (ECOG) Performance Status](https://ecog-acrin.org/resources/ecog-performance-status), [Karnofsky Performance Status (KPS)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3722041/), [Lansky Play Performance Status](https://pubmed.ncbi.nlm.nih.gov/4027922/), and [Deauville Assessment](https://www.ncbi.nlm.nih.gov/books/NBK65726/table/CDR0000062933__831/). Because performance assessments may be performed more than once over a period of time, multiple instances may exist for a single patient.

### Laboratory Tests

Many laboratory tests could be relevant to an individual with cancer. mCODE includes results from two common laboratory panels, the Complete Blood Count (CBC) (Automatic or Manual Differential) and Comprehensive Metabolic Panel (CMP). In practice, there are many variations on these panels, as exemplified by [this list of various CBCs](https://search.loinc.org/searchLOINC/search.zul?query=CBC). The individual LOINC codes of interest to mCODE are any that may be part of various CBC and CMP panels.

CBC and CMP results can be reported as individual laboratory observations or as panels, using the DiagnosticReport resource. Individual laboratory results must conform to the [US Core Laboratory Result Profile](http://hl7.org/fhir/us/core/StructureDefinition-us-core-observation-lab.html). Several examples of laboratory result reporting are given in the [US Core IG](http://hl7.org/fhir/us/core/STU6.1/index.html). For example, see this [erythrocytes laboratory reporting example](https://hl7.org/fhir/us/core/STU6.1/Observation-cbc-erythrocytes.html).

If DiagnosticReports are submitted, they must conform to the [US Core DiagnosticReport Profile for Laboratory Results Reporting][USCoreDiagnosticReport]. Examples of [CBC reporting](http://hl7.org/fhir/us/core/DiagnosticReport-cbc.html) and [CMP reporting](http://hl7.org/fhir/us/core/DiagnosticReport-metabolic-panel.html) are given in the [US Core IG](http://hl7.org/fhir/us/core/index.html).


Beyond the requirements of US Core, under [Clinical Laboratory Improvement Amendments (CLIA)](https://www.cms.gov/Regulations-and-Guidance/Legislation/CLIA/index.html?redirect=/clia) regulations, laboratory tests must include information on the performing technologist, performing laboratory, and performing laboratory medical director. These three roles would ideally appear as [slices](https://www.hl7.org/fhir/profiling.html#slicing) on Observation.performer and/or DiagnosticReport.performer. However, slicing requires a [discriminator](https://www.hl7.org/fhir/profiling.html#discriminator), a field that can be checked to determine whether a resource found in Observation.performer or DiagnosticReport.performer corresponds to the performing technologist or the performing laboratory medical director. While the performing laboratory can be determined by its resource type, in the current design of FHIR, there is no indicator that would discriminate between the roles of the two Practitioner participants.

### Vital Signs

Vital signs are measurements of the most essential, or "vital" body functions. For mCODE, blood pressure, body height, body weight, and body surface area are believed to be most critical to assessment and treatment. Instead of defining its own profiles, mCODE mostly uses the [FHIR R4 vital sign profile](http://hl7.org/fhir/R4/observation-vitalsigns.html), which is incorporated into [US Core](http://hl7.org/fhir/us/core/STU6.1/index.html). However, mCODE does define its own profile for [BodySurfaceArea]. As of Version 3.2, US Core defines its own set of vital signs profiles. These profiles are derived from the same FHIR base vital sign profile. mCODE accepts vital sign data conforming to either FHIR or US Core profiles. Examples of height, weight, and blood pressure are given in both sources.

### History of Metastatic Disease

Recurrences and unrelated cancers sometimes occur years after previous metastatic disease, for example, in the case of an adult with a history of childhood leukemia. The details of the previous disease may be unavailable, but the fact that the patient had cancer previously may be clinically significant. The profile [HistoryOfMetastaticCancer] provides a method of recording this fact in the absence of other details.

### Profiles

* [BodySurfaceArea]
* [Comorbidities]
* [DeauvilleScale]
* [ECOGPerformanceStatus]
* [FHIR Vital Signs](https://www.hl7.org/fhir/observation-vitalsigns.html)
* [HistoryOfMetastaticCancer]
* [KarnofskyPerformanceStatus]
* [LanskyPlayPerformanceStatus]
* [US Core Vital Signs](https://hl7.org/fhir/us/core/4.0.0/StructureDefinition-us-core-vital-signs.html) (version 4.0 and higher)
* [US Core DiagnosticReport Profile for Laboratory Results Reporting](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-diagnosticreport-lab.html)
* [US Core Laboratory Result Profile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-lab.html)

### Value Sets

* [ECOG performance status](https://loinc.org/LL529-9) (external)
* [HistoryOfMetastaticMalignantNeoplasmVS]
* [Karnofsky performance status](https://loinc.org/LL4986-7) (external)

* [LanskyPlayPerformanceStatusVS]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/group-disease.md

The mCODE **Disease Characterization** group includes data elements specific to the diagnosis and staging of cancer. This includes:

* **Cancer Diagnosis** - the date and location (body site/position and laterality) of the cancer diagnosis.
* **Tumor Characteristics** - histological classification, grade, morphology, and behavior of the tumor cell, compared to that of a normal cell.
* **CancerStage** - describes the severity of an individual's cancer based on the magnitude of the original (primary) tumor as well as the extent cancer has spread in the body. Understanding the stage of the cancer helps doctors to develop a prognosis and design a treatment plan for individual patients. Staging calculations leverage results from the previous two categories, along with prognostic factors relevant to the cancer type, in order to assess an overall cancer stage group (source: [AJCC](https://cancerstaging.org/references-tools/Pages/What-is-Cancer-Staging.aspx)).

### Representing the Cancer Diagnosis

The cancer diagnosis combines the type, site, and certain characteristics of the cancer. Depending on the EHR and provider organization, different code systems may be used, such as:

* [Systematized Nomenclature of Medicine - Clinical Terms (SNOMED CT)](https://www.snomed.org/)
* [International Classification of Diseases, 10th version, Clinical Modifications (ICD-10-CM)](https://www.cdc.gov/nchs/icd/icd10cm.htm)
* [International Classification of Diseases for Oncology, 3rd version (ICD-O-3)](https://codes.iarc.fr/)

Because the use of these code systems vary in different institutions, mCODE supports all three. Two elements and one [extension](https://www.hl7.org/fhir/extensibility.html) of the [FHIR Condition Resource](https://www.hl7.org/fhir/condition.html) are involved with coding the cancer diagnosis: `Condition.code`, `Condition.bodySite`, and the [HistologyMorphologyBehavior] extension. How these attributes are used, depending on the code system, is captured in the table below:

| Encoding | Code  | Histology Morphology Behavior Extension| Body Site |
|----------|-------|-----------------------------|----------|
| **SNOMED Encoded** | Any SNOMED CT code in the [Primary Cancer Disorder Value Set][PrimaryCancerDisorderVS] | Any SNOMED CT code in the [Histology Morphology Behavior Value Set][HistologyMorphologyBehaviorVS] | Any descendant of `123037004` "Body structure" |
| **ICD-10-CM Encoded** | Any ICD-10-CM primary code (precoordinated) | omit | optional; must be consistent with primary code if provided but may contain more detail |
| **ICD-O-3 Encoded** | SNOMED CT code `55342001` "Neoplastic disease (disorder)", `363346000` "Malignant neoplastic disease (disorder)", or `20376005` "Benign neoplastic disease (disorder)" | Full ICD-O-3 morphology code* | Any ICD-O-3 Topology Code |
{: .grid }

*The ICD-O-3 morphology code should be in the form `HHHH/B G` where HHHH is the 4-digit histology code, B is the 1-digit behavior code (i.e., /1, /2, or /3 suffix for primary cancers, and /6 suffix for secondary cancers), and G is the grade or equivalent in leukemias and lymphomas (1 digit). For more information, see [ICD-O Third Edition, Table 8](https://apps.who.int/iris/bitstream/handle/10665/96612/9789241548496_eng.pdf).

Implementers should reference the [PrimaryCancerCondition] and [SecondaryCancerCondition] profiles for further details on the use of these terminologies and associated value sets.

Histologic behavior, type, and grade can also be reported in the [HistologicBehaviorAndType] and [HistologicGrade] profiles. The[TumorMorphology] profile references those profiles in a report.

#### Clinical Status

On initial diagnosis, the `Condition.clinicalStatus` element will be `active`. Subsequent changes to the disease status SHOULD be recorded by updating the `clinicalStatus` element. The permitted values are active, recurrence, relapse, inactive, remission, resolved. Recurrence and relapse are often used interchangeably in the context of cancer. The resource's history can be accessed to see the history of the status value. 

Note that there is another resource profile, the [CancerDiseaseStatus], that is used to record the patient's condition on an encounter-by-encounter basis, and uses values such as improved, stable, worsened, as well as full and partial remission. When the value of CancerDiseaseStatus indicates remission, the `Condition.clinicalStatus` SHOULD be updated to reflect that finding.

#### Body Location

Body locations in FHIR are typically represented using a single code. However, a single code is often insufficient to describe where a tumor is located, where a surgery is targeted, or where a radiation treatment is focused. When a single code is insufficient, FHIR recommends using a BodyStructure resource. This is appropriate when the BodyStructure is tracked over time, for example, in the case of a [Tumor]. But generally, it is better to describe a body location without using an additional resource.

mCODE has adopted an approach that allows the user to add additional code or codes to further define the body site, without the need to create an independent resource. This takes the form of the [LateralityQualifier] and [BodyLocationQualifier] extensions. These extensions can be used to specify laterality, directionality, and plane.

### Staging and Risk Assessments

In mCODE, staging and risk assessment information has three components:

1. The type of stage or risk assessment reported (e.g., a clinical T category) 
2. The staging or risk assessment system, method, or protocol used to perform the staging or risk assessment (e.g., AJCC 7th Edition)
3. The actual stage or risk assessment value (e.g., cT3)

The stage or risk assessment value (3) is always reported. To interpret the meaning of the stage or risk assessment value, the staging or risk assessment system or method must be known. Depending on the code used, the stage or risk assessment type (1) can identify the staging or risk assessment system, the kind of stage or risk assessment reported, and factors such as the timing (e.g., at diagnosis or posttherapy) and the type of evidence (e.g., clinical or pathologic). If the stage or risk assessment type does not imply the staging or risk assessment system, the staging or risk assessment system is reported separately (2). 

A degree of redundancy may exist between these three elements. For example:

* If the stage is cT3, then the type of stage is a clinical T stage.
* If the stage being reported is a Binet stage, it can be assumed that the staging system is Binet and the disease is chronic lymphocytic leukemia.

The data sender must assure that the values in these three fields are self-consistent.

#### How to Report Staging or Risk Assessment Information

Staging or risk assessment information SHOULD be provided as Observation resource(s) conforming to the [CancerStage] or [CancerRiskAssessment] profile or a constrained version of those profiles. CancerStage and CancerRiskAssessment are parent profiles that should be used only if a more specific profile corresponding to a particular staging system or risk assessment is unavailable. If a patient has been staged or assessed more than once, there will be multiple CancerStage or RiskAssessment observations. 

In the CancerStage and CancerRiskAssessment profile and its descendants, the following elements are used to describe a stage or classification:

| Stage/Risk Assessment Information | FHIR Element | Description |
|-------------------|--------------|-------------|
| Type        | `Observation.code` |  LOINC or SNOMED term that describes the specific type of stage or risk assessment being reported, for example, a TNM stage group or International Federation of Gynecology and Obstetrics (FIGO) ovarian tumor stage. In terms of the SNOMED CT hierarchy, these are terms of type **Observable Entity**.  |
| System    | `Observation.method` |  The staging or risk assessment system, method, or protocol used, for example, AJCC Version 8 or the International Neuroblastoma Staging System. In the SNOMED CT hierarchy, these are terms in the **Staging and Scales** hierarchy, specifically, terms descending from **Tumor Staging** that represent staging systems. `Observation.method` is not required if the staging system is implicit in `Observation.code`. |
| Value | `Observation.valueCodeableConcept` | Contains the actual stage or category determined for the cancer. In terms of SNOMED CT, these are terms from the **Qualifier Value** and **Finding** hierarchies (some staging values appear, perhaps erroneously, in the Tumor Staging hierarchy). |
| Cancer | `Observation.focus` | A reference to the cancer condition being staged or assessed. |
| Prognostic Factors | `Observation.derivedFrom` | A reference to Observations contributing to the stage or risk assessment. |
{: .grid }

A reference to the CancerStage observation SHOULD be given in the PrimaryCancerCondition's `Condition.stage.assessment` element. If staging has been repeated for a patient, the reference in PrimaryCancerCondition SHOULD point to the most recent staging information.

#### TNM Staging

TNM staging is used for many types of solid-tumor cancers. The [TNMStageGroup] profile is a specialization of [CancerStage] dedicated to AJCC TNM staging. This profile contains the stage group in `Observation.valueCodeableConcept` and provides optional references in `Observation.hasMember` to additional resources representing the T, N, and M categories. The `Observation.code` element value in TNMStageGroup is used to distinguish the type of staging, e.g., [clinical](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/clinical-staging) or [pathologic](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/pathologic-staging). For other types of staging (e.g., retreatment (r) or autopsy (a)), a code indicating "other" staging type is used.

Clinical applications vary in their representation of T, N, and M staging category values, falling into one of two naming conventions:

* Prefixed with a staging classification abbreviation (e.g.: _cT3_, _ypT3_). This is the coding convention returned by American Joint Commission on Cancer (AJCC) in their digital data content retrieved via the [AJCC Application Programming Interface (API)](https://ajcc.3scale.net/).
* Without a prefixed staging classification abbreviation (e.g.: _T3_).

mCODE strongly recommends that the implementers align with AJCC's convention of representing the staging category value _including the classification prefix_. This code convention is aligned with the AJCC's digital data and clearly distinguishes the staging classification as clinical (c), pathologic (p), neoadjuvant (yc or yp), restage (r), or autopsy (a) without having to retrieve further context from the model. The selected prefix SHALL be consistent with the `Observation.code` value.

Several widely-used terminologies in the cancer domain, including ICD-O-3 and AJCC staging, are proprietary and cannot be reproduced in this guide. SNOMED-CT has reached an agreement with AJCC to create SNOMED codes that correspond to AJCC stages. mCODE uses these SNOMED codes where applicable, but licensed sites may continue to use AJCC codes and still be in conformance with mCODE. Under the [Fair Use doctrine](https://www.copyright.gov/fair-use/more-info.html), examples illustrating mCODE's representation of cancer diagnoses may use the more familiar AJCC staging values for the purposes of implementation guidance to FHIR developers.

#### Non-TNM Staging and Risk Assessments

Based on discussions with clinical experts, several common non-TNM staging systems and risk assessments were identified and added as profiles in mCODE. Not all cancer types are staged or assessed with a TNM-based staging system, including hematologic cancers like leukemias, multiple myeloma, lymphomas, and some solid tumors, for example, gynecologic tumors are staged using the FIGO (International Federation of Gynecology and Obstetrics) staging system.

Prognostic factors related to the cancer stage group or risk assessment can be specified with the `Observation.derivedFrom` element. For example, a hemoglobin lab result which was evaluated in the  staging of chronic lymphocytic leukemia (CLL) using the Binet staging system can be referenced under `Observation.derivedFrom` element. [This example of Binet staging](Observation-binet-stage-group-B.html) illustrates how this could be represented.

**Terminology.** SNOMED CT does not offer codes for every staging system. When SNOMED codes are unavailable, mCODE falls back on codes from the NCI Thesaurus (NCIT). From an implementation perspective, managing two code systems is difficult when there is no consistency of which code system is used for what purpose. We are actively working with SNOMED International to create a more consistent semantic approach to coding stages, by adding concepts required by non-TNM staging systems. The current approach of mixing SNOMED and NCIT depending on the cancer type should be regarded as temporary.

#### Summary Stage Information in PrimaryCancerCondition

To keep staging information together with cancer diagnosis, staging values and types can be included in the PrimaryCancerCondition. A stage reported in PrimaryCancerCondition is interpreted as the stage at the time of diagnosis. 

In PrimaryCancerCondition, only the stage type and stage value can be reported, as follows:

| Stage Information | FHIR Element | Description |
|-------------------|--------------|-------------|
| Stage Type        | `Condition.stage.type` | See "Reporting Staging Information" above. |
| Stage Value       | `Condition.stage.summary` | See "Reporting Staging Information" above. |
{: .grid }

Representing stage information in this way, i.e., without an explicit staging system, is valid only if the staging system is implicit in the stage type. 

### Tumor Marker Tests

Tumor markers are key prognostic factors in calculating cancer staging, identifying treatment options, and monitoring progression of disease. For example, an abnormal increase in prostate-specific antigen (PSA) levels is a prognostic factor for prostate cancer. Other tumor markers include estrogen receptor (ER) status, progesterone receptor (PR) status, carcinoembryonic antigen (CEA) levels, among others. mCODE distinguishes tumor marker tests from sequencing-based genomic tests measured at the DNA, RNA, or chromosomal level. The latter are addressed in the [Genomics](group-genomics.html) section.

mCODE includes single FHIR profile, [TumorMarkerTest], for all labs involving serum and tissue-based tumor markers. This is less than ideal. Not specifying units of measure or answer sets on a per-test basis, means reporting could vary. However, given the large number of tumor marker tests, creating individual profiles was judged impractical.

### Profiles

* Diagnosis
  * [PrimaryCancerCondition]
  * [SecondaryCancerCondition]
* Characterization
  * [TumorMarkerTest]
  * [HistologicBehaviorAndType]
  * [HistologicGrade]
  * [TumorMorphology]
* Staging and Risk Assessment, General
  * [CancerStage]
  * [CancerRiskAssessment]
* Staging, AJCC TNM
  * [TNMStageGroup]
  * [TNMPrimaryTumorCategory]
  * [TNMRegionalNodesCategory]
  * [TNMDistantMetastasesCategory]
* Risk Assessment
  * [RhabdomyosarcomaRiskAssessment]
  * [ALLRiskAssessment]

### Extensions

* [BodyLocationQualifier]
* [HistologyMorphologyBehavior]
* [LateralityQualifier]
* [RelatedCondition]

### Value Sets

* Disorder Type (Diagnosis)
  * [BenignUncertainNeoplasmBrainCNSDisorderVS]
  * [CancerDisorderVS]
  * [CarcinomaInSituDisorderVS]
  * [HypereosinophilicSyndromeDisorderVS]
  * [MelanomaInSituDisorderVS]
  * [PrimaryCancerDisorderVS]
  * [PrimaryMalignantNeoplasmDisorderVS]
  * [SecondaryCancerDisorderVS]

* Characterization
  * [CytologicEvidenceOfMalignancyVS]
  * [HistologyMorphologyBehaviorVS]
  * [TumorMarkerTestVS]
  * [HistologicBehaviorAndTypeVS]
  * [HistologicGradeVS]
  * [HistologicGradingSystemVS]
  
* Location
  * [BodyLocationQualifierVS]
  * [CancerBodyLocationVS]
  * [LateralityQualifierVS]

* Staging and Risk Assessment, General
  * [CancerStagingMethodVS]
  * [CancerStageTypeVS]
  * [CancerStageValueVS]
  * [CancerRiskAssessmentTypeVS]
  * [RiskAssessmentValueVS]

* Staging, TNM
  * [TNMStagingMethodVS]
  * Stage Group
    * [TNMStageGroupVS]
    * [TNMStageGroupMaxVS]
    * [TNMStageGroupStagingTypeVS]
    * [TNMStageGroupStagingTypeMaxVS]
  * Primary Tumor (T)
    * [TNMPrimaryTumorCategoryVS]
    * [TNMPrimaryTumorCategoryMaxVS]
    * [TNMPrimaryTumorStagingTypeVS]
    * [TNMPrimaryTumorStagingTypeMaxVS]
  * Regional Nodes (N)
    * [TNMRegionalNodesCategoryVS]
    * [TNMRegionalNodesCategoryMaxVS]
    * [TNMRegionalNodesStagingTypeVS]
    * [TNMRegionalNodesStagingTypeMaxVS]
  * Distant Metastases (M)
    * [TNMDistantMetastasesCategoryVS]
    * [TNMDistantMetastasesCategoryMaxVS]
    * [TNMDistantMetastasesStagingTypeVS]
    * [TNMDistantMetastasesStagingTypeMaxVS]

* Staging, non-TNM
    * [BinetStageValueVS]
    * [BreslowDepthStageValueVS]
    * [ClarkLevelValueVS]  
    * [ClinOrPathModifierVS]
    * [FIGOStagingMethodVS]
    * [FIGOStageValueVS]
    * [GleasonGradeGroupValueVS]
    * [MyelomaISSValueVS]
    * [MyelomaRISSValueVS]
    * [LymphomaStagingMethodVS]
    * [LymphomaStageValueVS]
    * [LymphomaStageValueModifierVS]
    * [LymphomaStageBulkyModifierVS]
    * [RaiStagingMethodVS]
    * [RaiStageValueVS]
    * [NeuroblastomaINSSValueVS]
    * [NeuroblastomaINRGSSValueVS]
    * [WilmsTumorStageValueVS]
    * [WilmsTumorBodySiteVS]
    * [RhabdomyosarcomaClinicalGroupValueVS]

* Risk Assessment
  * [RhabdomyosarcomaAssessmentValueVS]
  * [ALLRiskAssessmentVS]

### Code Systems

* [SnomedRequestedCS]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/group-genomics.md

### mCODE Use of Genomics Elements

mCODE includes genomics-related data elements needed to inform cancer assessment and treatment options. The profiles directly derive from the [HL7 CGWG Clinical Genomics Reporting Implementation Guide](https://hl7.org/fhir/uv/genomics-reporting/STU2/index.html) (GRIG) STU2 release. The GRIG provides helpful foundational concepts and guidance for representing different types of genomics reports. mCODE assumes one is familiar with the GRIG content and uses this additional guidance to identify what is clinically actionable and minimal for the purpose of diagnosis, treatment, and monitoring of cancer patients.

Three profiles relate to the capture of clinical genomics data:

* [GenomicsReport] - Contains results of genomic analyses. Genomic reports vary in complexity and content, as simple as the results for a single discrete variant to complex sequences. This profile inherits from the profile of the same name in GRIG.
* [GenomicVariant] - Used to record variants that could be found from tests that broadly analyze genomic regions (e.g.: exome tests) and stores results for any variants that could have been found. The region in which the variant was found could be specified in the RegionStudied attribute of the GenomicsReport profile. This profile derives from the Variant profile in GRIG.
* [GenomicRegionStudied] - Used to record the portion(s) of the genome that was tested for variants. This profile derives from the RegionStudied profile in GRIG.

Additionally, the following GRIG profiles are optionally included in the mCODE bundle:

* [Diagnostic Implication](https://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-diagnostic-implication.html)
* [Therapeutic Implication](https://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-therapeutic-implication.html)
* [Tumor Mutation Burden (TMB)](https://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-tmb.html)
* [Microsatellite Instability (MSI)](https://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-msi.html)

The diagram below illustrates the distinction within an mCODE bundle.

<div style="text-align: center;">
<img src="mcode-cg-overlap.svg" alt="mCODE use of GRIG profiles" />
</div>>

<br/>

The mCODE example [`Bundle-gx-genomic-bundle-adam-anyperson`](Bundle-gx-genomic-bundle-adam-anyperson.html) demonstrates a bundle containing resources conforming with the GRIG genomics report.

### Assumptions and Scope

* mCODE genomics elements are a superset of those that may be available for exchange. There is no assumption that all data elements need to be captured or exchanged.
* Genomic profiles represent results from genomic sequencing, whereas [TumorMarkerTest] (grouped in the [Disease Characterization](group-disease.html)) involve results from gene expression tests (e.g.: HER2 Immunohistochemistry tests) and serum-based measurements which could have an implication on cancer (e.g., PSA).


#### Positioning of mCODE with GenomeX

The GenomeX use case under the CodeX FHIR accelerator has a broader scope that is not limited to oncology-specific genomic tests, with the primary goal of validating the HL7 GRIG. However, it is widely recognized that the most prevalent and pervasive application for genomics and precision medicine is in the field of oncology. Consequently, there is a need for clarification and additional guidance between the mCODE FHIR IG.

### mCODE and the minimal and actionable set of data elements

A minimal set of genomics elements may vary based on the type of test. For example:

* A tumor-normal test will contain references to two specimens (one from a tumor specimen and a non-tumor specimen) as opposed to a cancer gene panel limited to one tumor specimen. 
* A gene panel analyzing somatic variants for one patient will differ from a family trio sequencing test which could analyze genomic sequences for both parents and the child for rare diseases.

**NOTE:** The initial mCODE scope will be with somatic variants in gene panels with the intention that these elements will also serve as foundational for non-oncology use cases.

Despite the variations, there is a general list of common elements. The Electronic Medical Records and Genomics (eMERGE) program provides a good illustration of the sections found in [a generalized pharmacogenomics report](https://hl7.org/fhir/uv/genomics-reporting/STU2/pharmacogenomics.html#how-to-use-the-report-mapping-images) which includes pharmacogenomics. This conceptual representation  serves as a good start for mCODE scoping but needs further guidance on how to specifically show certain representation patterns. These include the following patterns which will be covered in the sections to follow:

* Genomics test coding
* Representing variants
* Fusion events
* Search parameters for mCODE genomic data

### Genomics Test Coding

There is currently no general consensus on standardizing the ordering of next-generation sequencing (NGS) genomic tests. Regardless, mCODE provides some high level information on test codes that may be helpful for identifying tests.

The identity of non-genomic laboratory tests is typically represented by a [Logical Observation Identifiers and Names (LOINC)](https://loinc.org/) code. However, many genomic tests and panels do not have LOINC codes, although some might have an identifier in the [NCBI Genomic Testing Registry (GTR)](https://www.ncbi.nlm.nih.gov/gtr/), a central location for voluntary submission of genomic test information by providers. While GTR is a viable source for identifying many genomic tests, the user should be aware that the GTR is not a single authoritative source since the test data is voluntarily updated. Standardization of codes for genomic tests is essential to facilitate data analysis of genomic tests, and should be a priority for the genomics testing community in the near future. Implementers should also note that, to conform to the requirements of the [US Core Laboratory Result Profile](https://hl7.org/fhir/us/core/StructureDefinition-us-core-observation-lab.html), if a suitable LOINC exists, it must be used. If there is no suitable code in LOINC, then a code from an alternative code system such as GTR can be used.

### Representing Variants

#### Variant Nomenclature

The [HL7 GRIG guidance on defining variants](https://hl7.org/fhir/uv/genomics-reporting/STU2/sequencing.html) states support for two reporting patterns of specifying variants:
1. by [HGVS](http://varnomen.hgvs.org/) or [ISCN](https://www.karger.com/Book/Home/279152) nomenclature
2. by providing multiple component details in the style of VCF columns

Although mCODE should support both formats, it is preferable to use HGVS nomenclature for coding and protein variants where possible.

A full representation of an HGVS variant SHOULD include the following: 

* a transcript identifier or reference sequence id that includes the version number followed by a nomenclature which further characterizes the nature of the variant.
* the reference sequence assembly version populated in the Variant observation component [reference-sequence-assembly](https://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-finding-definitions.html#Observation.component:reference-sequence-assembly).


**NOTE**: The FHIR IG publisher validates HGVS-notated variants included in the FHIR examples, however it is not intended to validate all possible variants as there is no single HGVS validation tool that comprehensively covers the most up-to-date recognized variants for a given reference sequence. 

Every FHIR genomics resource referenced by a genomics report (e.g.: Variant, Diagnostic Implication, Therapeutic Implication), should include a date or datetime, even if there was only one date included in the genomic report for all results. Doing so simplifies the ability for the implementer to directly track changes in cases of a variant reclassification or reinterpretation. 

#### Representing Clinical Significance

A genomics report will oftentimes include the classification, or clinical significance, of a variant using a five-tier terminology from the American College of Medical Genetics and Genomics (ACMG) and the Association for Molecular Pathology (AMP) [2015 Guidelines for the interpretation of sequence variants](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4544753/). The five-tier terminology includes the following categories: pathogenic, likely pathogenic, uncertain significance, likely benign, and benign. In alignment with the GRIG, this is represented in the [DiagnosticImplication](https://hl7.org/fhir/uv/genomics-reporting/StructureDefinition-diagnostic-implication.html) profile as an Observation component, clinical-significance.

#### Pertinent Negatives

Some genomics reports are gene panels that include a list of genes that do not have relevant variants, otherwise known as pertinent negatives.

Represent pertinent negatives by creating one instance of GenomicVariant with the following representation:
* assert that the variant is absent by assigning the value of `LA9634-2 "Absent"` to Observation valueCodeableConcept
* include the list of all genes that are "negative" for the value in Observation component:gene-studied

#### Fusion Events

A fusion gene is made by joining parts of two different genes. Fusion genes, and the fusion proteins that come from them, arise when part of the DNA from one chromosome moves to another chromosome. Fusion proteins produced by this change may lead to the development of some types of cancer (source: [NCI Cancer Dictionary](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/fusion-gene)).

mCODE represents a fusion gene as an instance of **GenomicVariant** with the following changes:

* The _**molecularConsequence**_ component is fixed to the SequenceOntology code _SO:001565_ (gene_fusion)
* Two _**geneStudied**_ components are included, one for each gene involved in the fusion event

The diagram below shows an example representation for the gene fusion BCR_ABL1:

<div style="text-align: center;">
<img src="mCODE-gene-fusion.svg" alt="Example mCODE Gene Fusion" />
</div>>

The mCODE example [`genomic-variant-fusion`](Observation-genomic-variant-fusion.html) demonstrates the gene fusion representation.

**NOTE:** A fusion event that is related to two variants will be expressed as two separate variant instances. Both variants from the same fusion event can be included as DiagnosticReport.result slices under [GenomicsReport].

### Search Parameters for Genomic Variants

The [GRIG provides extensive guidance and examples](https://hl7.org/fhir/uv/genomics-reporting/usecases.html#appendix-d-query-guidance) for querying FHIR genomic reporting data. Some of the ones relevant to mCODE are listed below for convenience.

#### Search for Variants with a Given Gene

The following example FHIR query will retrieve all of a patient's variants reported for a given gene. Note that the gene is expressed as an HGNC identifier (e.g.: HGNC:11389 is the STK11 gene).

`GET <fhir endpoint>/Observation?subject=cancer-patient-john-anyperson&code=69548-6&component-code=48018-6&component-value-concept=HGNC:11389`

#### Get References to Sequences with Mutations Interpreted as Pathogenic

`GET <fhir endpoint>/Observation?subject:Patient=123&code-value-concept=http://loinc.org|53037-8$http://loinc.org|LA6668-3&_include:iterate=Observation:derived-from`


{% include markdown-link-references.md %}


---

// File: input/pagecontent/group-outcome.md

Recording patient outcomes in mCODE involves disease status, tumor size, and date of death. Other common outcome measures, such as progression-free survival, time to recurrence, and overall survival, can be derived from time-indexed observations of disease status. The date of diagnosis is also required for some derived measures (see [Disease Characterization](group-disease.html)). At this time, mCODE does not include patient reported outcomes.

### Disease Status

Formal recording of disease status is often limited to clinical trials, involving precise criteria such as [RECIST](https://ctep.cancer.gov/protocolDevelopment/docs/recist_guideline.pdf). The lack of outcome data outside of trials greatly limits the application of real-world data. Disease status information is rarely found in structured form in EHRs. If recorded at all, the information is found in clinical notes, which is of limited usefulness.

mCODE asks for disease status to be recorded in a structured form as part of patient encounters. In mCODE, disease status is defined as "A clinician's qualitative judgment on the current trend of the cancer, e.g., whether it is stable, worsening (progressing), or improving (responding). The judgment may be based on a single type or multiple kinds of evidence, such as imaging data, assessment of symptoms, tumor markers, laboratory data, etc." In other words, the disease status is an assessment by the oncologist that synthesizes all currently available information about the patient. The [ICAREdata™ Project](http://icaredata.org/) is conducting a study in association with a randomized controlled trial (RCT), which aims to demonstrate the ability to calculate equivalent clinical trial endpoints using computable clinical treatment data.

In addition, the history of tumor size is indicative of treatment efficacy.

#### Remission and Relapse

[PrimaryCancerCondition] has a status field, `Condition.clinicalStatus`, that records high-level status of the disease. When the [CancerDiseaseStatus] is determined to be in remission, an update to [PrimaryCancerCondition] is required. Specifically, the `Condition.clinicalStatus` element of [PrimaryCancerCondition] should be updated to `remission`. If subsequently there is a relapse, the  `clinicalStatus` field should be updated to `relapse`, then only in subsequent encounters is the [CancerDiseaseStatus] used to track the patient's status on an encounter-by-encounter basis.

#### Date of Death

Date of death data is recorded using the Patient resource. The death date can be obtained from several sources outside of the clinical setting. If available in the EHR, it can be reported via mCODE, but more likely, it will be filled in from vital records, after the last clinical interaction.

### Tumor Identification

To track and compare tumor characteristics over time, it is necessary to have a method for persistent identification of specific tumors. Two profiles are provided for this purpose:

1. [Tumor] SHALL be used when identifying tumors prior to removal from the body
1. [HumanSpecimen] SHALL be used when identifying tumors after removal

A single [Tumor]-conforming resource SHOULD be created for a tumor when it is first identified, and this resource SHOULD be referenced in Observations of this tumor or other resources that refer to a specific tumor until the tumor is removed from the body. After removal, a single [HumanSpecimen]-conforming resource SHOULD be created and used in the same manner. 

If both [Tumor] and [HumanSpecimen] are used to represent the same tumor, `identifier` SHALL be used to associate them: a persistent identifier from [Tumor] that is unique within the context of the Patient SHALL appear in [HumanSpecimen].

#### Tumor Size

The [TumorSize] profile provides a mechanism for recording the dimensions of an identified tumor. It SHALL reference a [Tumor] if the measurement is made while the tumor is still in the body, or [HumanSpecimen] if the tumor has been removed. Multiple [TumorSize] instances MAY be used to record changes in tumor size over time.

<!--
#### Multifocal and Multicentric Tumors

In the context of breast cancer, multifocal tumors refer to "multiple foci of the same tumor" while multicentric tumors are "different primary tumors in the same breast" ([Andea 2002](https://pubmed.ncbi.nlm.nih.gov/11920492/)).

For multifocal tumors, each foci may be separately tracked and measured by clinicians. Therefore, each foci SHOULD be represented by a separate [Tumor] or [HumanSpecimen] instance, and grouped together using the `focus` element in a [MultifocalTumor] Observation. [MultifocalTumor] SHOULD be referenced in `hasMember` of [TNMClinicalStageGroup] or [TNMPathologicalStageGroup] if relevant.

Multicentric tumors should also each be represented by a separate [Tumor] or [HumanSpecimen], which can each be associated with separate [PrimaryCancerCondition]-conforming resources using `extension[mcode-related-condition]` in [Tumor] or [HumanSpecimen].
-->

### Profiles

* [BodyStructureIdentifier]
* [CancerPatient] (for death date)
* [CancerDiseaseStatus]
* [PrimaryCancerCondition] (for remission and relapse)
* [Tumor]
* [TumorSize]

### Extension

* [CancerDiseaseStatusEvidenceType]

### Value Sets

* [BodyLocationAndLateralityQualifierVS]
* [CancerDiseaseStatusEvidenceTypeVS]
* [ConditionStatusTrendVS]
* [TumorSizeMethodVS]
* [TumorSizeUnitsVS]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/group-patient.md

The mCODE **Patient Information** group contains the following information about the patient:

* **Demographics** - including date of birth, gender, zip code, race, and ethnicity. This information is contained in the Patient resource that follows the [CancerPatient] profile.
* **Patient bundle** - the complete set of mCODE information about a patient that can be sent over the wire as one resource.
* **Patient group** -- a Group resource used to establish the set of patients that should be considered "mCODE Patients".

### Profiles

* [CancerPatient]
* [HumanSpecimen]
* [MCODEPatientBundle]
* [MCODEPatientGroup]

### Extensions

* [RelatedCondition]
* [RelatedConditionAbsent]

### Value Sets

* [HumanSpecimenTypeVS]
* [HistologyMorphologyBehaviorVS]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/group-treatment.md

The **Treatment** group includes reporting of procedures and medications used to treat a cancer patient, or relevant to that treatment. Treatments fall into three classes: medications, surgery, and radiotherapy.

### Medications

US Core gives preference to representing medications using the National Library of Medicine (NLM) [RxNorm](https://www.nlm.nih.gov/research/umls/rxnorm/) terminology - a coding standard established by the Office of the National Coordinator (ONC) for the exchange of drugs. However, RxNorm is restricted to FDA-approved drugs and does not include clinical trial drugs. mCODE allows for the inclusion of other code systems like the [NCI Thesaurus (NCIT)](https://ncit.nci.nih.gov/ncitbrowser/) to represent clinical trial oncology drugs.

Two profiled resources are used to record medications: MedicationRequest and MedicationAdministration. In version 3.1 and later, US Core does not use MedicationStatement, preferring to represent patient-reported medications by using MedicationRequest. mCODE uses MedicationAdministration for drugs administered by clinicians, as often the case for chemotherapy drugs.

### Surgery

Not all surgical procedures are relevant to treatment of cancer patients. To limit the scope of reported surgeries, mCODE uses the concept of _cancer-relatedness_. Only surgeries whose reason traces back to a cancer condition are in scope. mCODE does not at this time have detailed profiles for the many types of cancer-related surgeries.

### Radiotherapy

A radiation oncology work group convened under [CodeX FHIR Accelerator](https://confluence.hl7.org/display/COD/CodeX+Home) has helped create new profiles and value sets for radiotherapy. The group included American Society for Radiation Oncology (ASTRO), American Association of Physicists in Medicine (AAPM), Integrating Healthcare Enterprise - Radiation Oncology (IHE-RO), Varian, Elekta, Epic, and Wemedoo. The group defined value sets for modalities and techniques for teleradiotherapy and brachytherapy, as well as profiles for delivery of both types of treatment. To limit the scope, mCODE focused on high-level summarization of the treatment given, and avoids many details of the treatments. Ordering workflows are out of scope.

For definition of key terms in radiotherapy, see the [Radiotherapy Glossary](glossary.html) page.

### Profiles

* **Medication**
  * [CancerRelatedMedicationRequest]
  * [CancerRelatedMedicationAdministration]
* **Surgery**
  * [CancerRelatedSurgicalProcedure]
* **Radiotherapy**
  * [RadiotherapyCourseSummary]
  * [RadiotherapyVolume]

### Extensions

* **General**
  * [BodyLocationQualifier]
  * [LateralityQualifier]
  * [ProcedureIntent]
  * [TreatmentTerminationReason]
  * [NormalizationBasis]
* **Medication**
  * [NormalizationBasis]
* **Radiotherapy**
  * [RadiotherapyDoseDeliveredToVolume]
  * [RadiotherapyModality]
  * [RadiotherapyModalityAndTechnique]
  * [RadiotherapySessions]
  * [RadiotherapyTechnique]
  * [RelatedCondition]

### Value Sets

* **General**
  * [ProcedureIntentVS]
  * [TreatmentTerminationReasonVS]
* **Medication**
  * [Medication Clinical Drug (RxNorm)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion) (external)
  * [NormalizationBasisVS]
* **Surgery**
  * [CancerRelatedSurgicalProcedureVS]
* **Radiotherapy**
  * [BodyLocationQualifierVS]
  * [BrachytherapyPermanentSeedsTechniqueVS]
  * [BrachytherapyLowDoseRateTemporaryTechniqueVS]
  * [BrachytherapyPulsedDoseRateTechniqueVS]
  * [BrachytherapyRadiopharmaceuticalTechniqueVS]
  * [BrachytherapyHighDoseRateElectronicTechniqueVS]
  * [BrachytherapyHighDoseRateTechniqueVS]
  * [BrachytherapyModalityVS]
  * [BrachytherapyTechniqueVS]
  * [RadiotherapyModalityVS]
  * [RadiotherapyTechniqueVS]
  * [RadiotherapyTreatmentLocationVS]
  * [RadiotherapyTreatmentLocationQualifierVS]
  * [RadiotherapyVolumeTypeVS]
  * [TeleradiotherapyCarbonIonBeamTechniqueVS]
  * [TeleradiotherapyElectronBeamTechniqueVS]
  * [TeleradiotherapyModalityVS]
  * [TeleradiotherapyNeutronTechniqueVS]
  * [TeleradiotherapyPhotonBeamTechniqueVS]
  * [TeleradiotherapyProtonBeamTechniqueVS]
  * [TeleradiotherapyTechniqueVS]

### Code Systems

* [SnomedRequestedCS]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.mcode.md


|||
|---|---|
|*Official URL*: {{ site.data.ig.url }}|*Version*: {{ site.data.ig.version }}|
|*NPM package name*: {{ site.data.ig.packageId }}|*ComputableName*: {{ site.data.ig.name }}|
|*Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License|
{:.grid}

{{ site.data.ig.description }}

- [XML](definitions.xml.zip)
- [JSON](definitions.json.zip)

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


### Parameter Settings

The following [IG Parameters](https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters) are set for this Implementation Guide:

{% for p in site.data.ig.definition.parameter %}
- code: {{p.code}}<br/>value: {{p.value }}
{%- endfor -%}


---

// File: input/pagecontent/index.md


### Background

Cancer is among the leading causes of death worldwide. According to the National Cancer Institute, in the United States, 39.5 percent of men and women will be diagnosed with cancer at some point during their lifetimes. In 2020, an estimated 1,806,590 new cases of cancer will be diagnosed in the United States and 606,520 people will die from the disease. While these numbers are staggering, the silver lining in the wide prevalence of cancer is the potential to learn from the treatment of millions of patients. If we had research-quality data from all cancer patients, it would enable better health outcomes. Today, we lack the data models, technologies, and methods to capture that data.

[mCODE™](https://mcodeinitiative.org/) (short for Minimal Common Oncology Data Elements) is an initiative intended to increase interoperability by assembling a core set of structured data elements for oncology electronic health records (EHRs). mCODE is a step towards capturing research-quality data from the treatment of all cancer patients. This would enable the treatment of every cancer patient to contribute to [comparative effectiveness analysis (CEA)](https://en.wikipedia.org/wiki/Comparative_effectiveness_research) of cancer treatments by allowing for easier methods of data exchange between health systems.

### Overview

mCODE consists of approximately 40 FHIR profiles organized into six thematic groups. Groups are introduced for pedagogical purposes only and have no other meaning or consequence:

* [Patient Information Group](group-patient.html)
* [Disease Characterization Group](group-disease.html)
* [Health Assessment Group](group-assessment.html)
* [Genomics Group](group-genomics.html)
* [Cancer Treatments Group](group-treatment.html)
* [Outcomes Group](group-outcome.html)

The overall scope of mCODE and the relationships between mCODE profiles is shown in the following diagram (not all details are shown). Click on items to see their underlying definitions. When viewing the diagram, please note:

1. mCODE does not define a specific set of information that must be collected for each cancer patient. Instead, mCODE presents a set of patterns or templates, including controlled terminologies, to be used when certain data in the above groups are shared. ***Example:** mCODE includes a FHIR profile for ECOG performance status, but not every cancer patient undergoes such an evaluation. However, if a patient DOES have an ECOG performance evaluation, that information must conform to mCODE's ECOG profile when shared.*

2. If mCODE does not have a profile for a certain type of data, that data still can always be included with mCODE data using an appropriate resource or profile. The lack of an mCODE profile only means that mCODE does not impose requirements above and beyond the base FHIR specifications or US Core. ***Example:** mCODE does not include a profile for care teams. However, users can share care team information using [FHIR's CareTeam resource](https://hl7.org/fhir/R4B/careteam.html), using a profile such as [US Core CareTeam]({{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-careteam.html).*
  
3. Additional profiles can be derived from mCODE profiles. It is expected that mCODE will serve as the basis for future implementation guides dealing with new use cases, particular types of cancer, or specific demographic groups using mCODE as a base. ***Example:** Radiation oncologists and vendors collaborated on a [radiation therapy implementation guide](https://hl7.org/fhir/us/codex-radiation-therapy) that extends mCODE and facilitates structured data sharing between radiation oncology information systems and other health information systems.*

<br/>
<object data="mCodeDiagram.svg" type="image/svg+xml"></object>
<br/>

### Data Dictionary

Readers should take note of the [Data Dictionary](dictionary.html), a flattened list of data elements in mCODE in Microsoft Excel format. There is also a [Data Dictionary Differential](dictionary.html#data-dictionary-differential) that compares STU 4 with STU 3 on an element-by-element basis.

The Data Dictionary comes with several caveats:

* Only [must-support (MS)](https://www.hl7.org/fhir/conformance-rules.html#mustSupport) data elements are included. These are elements that implementers could be expected to provide meaningful support for (see [Profile Conformance](conformance-profiles.html) for details).
* Profiles defined externally to mCODE, such as vital signs defined in base FHIR or US Core, are not included.
* Sub-elements of complex types such as CodeableConcept and Period are not explicitly included.

The actual number of data elements in a resource can vary widely. For example, there are 16 MS data elements in the [CancerPatient] profile, but the full resource defines more than 60 elements. Of these, only four are [required](conformance-profiles.html#definition-of-required) (namely `identifier.system`, `identifier.value`, `name.family` or `name.given`, and `gender`). Moreover, different systems can implement different subsets of profiles, depending on their role in information workflows (see [Profile Conformance](conformance-profiles.html) for details). Therefore, not every mCODE-compliant system will support the same set of data elements. However, whatever portion of this specification is implemented will be compatible with other systems, wherever the implementations overlap.

### Development History

In late 2018, the [American Society of Clinical Oncology (ASCO®)](https://www.asco.org/), with the assistance of MITRE Corporation, convened a committee of twenty leading clinical experts in oncology, radiology, surgery, and public health. This group developed two use cases that drove the initial clinical data requirements for mCODE:

* **Use Case 1**: [Comparative Effectiveness Analysis and Cooperative Decision Making](mCODE-UseCase-RCC.docx)
* **Use Case 2**: [Comparative Effectiveness Analysis with Next Generation Sequencing (NGS)](mCODE-UseCase-NGS.docx)

After the initial analysis, an open survey was conducted to validate and prioritize the data elements from these use cases. Down-scoping was conducted based on the likelihood the data elements would be found in current EHRs, and if collecting the data would place undue burden on clinicians. In 2019, mCODE was balloted and approved as an HL7 Standard for Trial Use (STU 1). In the ensuing period, mCODE was piloted at a number of clinical sites, facilitated by the [CodeX FHIR Accelerator](https://confluence.hl7.org/display/COD/CodeX+Home). Use cases are tracked [here](https://confluence.hl7.org/display/COD/CodeX+Use+Cases). Incorporating that experience, the second trial use publication (STU 2) was balloted in May 2021, and published in January 2022. A non-balloted update containing terminology updates, version 2.1, was published in March 2023. STU 3 was balloted in April-May 2023. In [February 2023](https://www.whitehouse.gov/briefing-room/statements-releases/2023/02/02/fact-sheet-on-one-year-anniversary-of-reignited-cancer-moonshot-biden-harris-administration-announces-new-actions-to-end-cancer-as-we-know-it/), the National Cancer Institute launched the Childhood Cancer – Data Integration for Research, Education, Care, and Clinical Trials (CC-DIRECT) project to support children, Adolescents and Young Adults (AYAs) with cancer throughout their cancer journey; provide patient navigation support to families seeking information and optimal care; facilitate research participation; and establish a portable, shareable, standardized cancer health record. CC-DIRECT launched a Standards Task Team that identified high-priority information for pediatric and AYA oncology, which was incorporated in STU 4 and balloted in April – May 2024.

### Sources

In addition to information obtained from subject matter experts, several existing standards, nomenclatures, and guidelines were consulted during the development of this specification. These include:

* [American Association of Physicists in Medicine (AAPM): Task Group 263 Final Report][TG263]
* [American College of Surgeons (ACS): Standards for Registry Entry (STORE)](https://www.facs.org/-/media/files/quality-programs/cancer/ncdb/store_manual_2021.ashx)
* [American Society for Radiation Oncology (ASTRO): Minimum Data Elements for Radiation Oncology](https://www.practicalradonc.org/article/S1879-8500(19)30232-2/fulltext)
* [American Society for Radiation Oncology (ASTRO) Commission on Cancer Workgroup: A Multidisciplinary Consensus Recommendation on a Synoptic Radiation Treatment Summary](https://www.practicalradonc.org/article/S1879-8500(20)30002-3/fulltext)
* [American Joint Committee on Cancer (AJCC): Staging Manual (8th Edition)](https://www.facs.org/quality-programs/cancer-programs/american-joint-committee-on-cancer/)
* [Clinical Data Interchange Standards Consortium (CDISC): Therapeutic Area User Guides (TAUG)](https://www.cdisc.org/standards/therapeutic-areas/disease-area)
* [College of American Pathologists (CAP): Cancer Protocols](https://www.cap.org/protocols-and-guidelines)
* [Data for the Common Good, Pediatric Cancer Data Commons](https://commons.cri.uchicago.edu/pcdc/)
* [The DICOM Standard](https://www.dicomstandard.org/)
* [HL7 CDA R2 IG: Reporting to Public Health Cancer Registries from Ambulatory Healthcare Providers](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=383)
* [HL7 FHIR Genomics Reporting Implementation Guidance (STU1)](http://hl7.org/fhir/uv/genomics-reporting/index.html)
* [Human Genome Organization (HUGO): Gene Nomenclature Committee](https://www.genenames.org/)
* [Human Genome Variation Society: Nomenclature for defining genomic variants](https://varnomen.hgvs.org/).
* [National Center for Biotechnology Genomic Test Registry (GTR)](https://www.ncbi.nlm.nih.gov/gtr)
* [National Comprehensive Cancer Network (NCCN) Clinical Practice Guidelines in Oncology](https://www.nccn.org/professionals/physician_gls/default.aspx#site)
* [North American Association of Central Cancer Registries (NAACCR): 2018 Site-Specific Data Items Manual](https://www.naaccr.org/SSDI/SSDI-Manual.pdf?v=1531675132)
* [North American Association of Central Cancer Registries (NAACCR): Standards for Cancer Registries](https://www.naaccr.org/data-standards-data-dictionary/)
* [RECIST Guidelines v1.1](https://project.eortc.org/recist/wp-content/uploads/sites/4/2015/03/RECISTGuidelines.pdf)
* [SJCARES Hospital-Based Cancer Registry](https://www.stjude.org/content/dam/en_US/shared/www/clinical/no-index/sjcares-data-dictionary.pdf)

In addition, material was drawn from the [US Core Implementation Guide]( {{site.data.fhir.ver.hl7fhiruscore}}) and the [Genomics Reporting Implementation Guide](http://hl7.org/fhir/uv/genomics-reporting/).

### Understanding this Guide

mCODE is a "Domain of Knowledge" implementation guide (IG). The purpose is to show how to represent clinical concepts generally, not to have a complete set of agreements for interoperable exchanges.

The page layouts and symbols are explained [in the FHIR documentation](https://www.hl7.org/fhir/formats.html). In viewing a profile page, note that there are multiple views. The "Differential Table" view represents the difference between the current profile and its base resource or profile. When interpreting this view, bear in mind that the immediate parent may not be a base FHIR resource, but could be a US Core profile or another profile in this guide. The "Snapshot Table" represents the entire profile, with all elements.

In the event there are differences between the page renderings in this IG and the associated FHIR artifacts, the FHIR artifacts should be taken as the source of truth. In the event that an artifact's snapshot is inconsistent with its differential, the differential should be taken as the source of truth.

### Credits

The authors gratefully acknowledge the leadership of Dr. Monica Bertagnolli, former ASCO President and NCI Director (currently NIH Director) and Dr. Jay Schnitzer, MITRE's Chief Medical Officer and Corporate Chief Engineer. The ASCO/CancerLinQ team was led by Dr. Robert Miller. Dr. Travis Osterman of Vanderbilt University leads the CodeX Executive Committee. Dr. Sanjay Aneja leads the mCODE Technical Review Group. Dr. Charles Mayo of University of Michigan, Randi Kudner of ASTRO, and Martin von Siebenthal of Varian made significant contributions to the much improved radiotherapy portion of this IG. Wendy J. Blumenthal and Wendy Sharber of CDC provided essential input helping align mCODE with cancer registry reporting requirements.

The authors recognize HL7 sponsorship and input from [Clinical Interoperability Council](http://www.hl7.org/Special/committees/cic/index.cfm), with special thanks to Laura Heermann Langford, Russell Leftwich, and James McClay. The [HL7 Clinical Genomics Work Group](https://confluence.hl7.org/display/CGW) has been a consistent and constructive partner during this project. Lloyd McKenzie and Grahame Grieve contributed to mCODE in countless ways with their outstanding energy and dedication.

Andre Quina and Nicole Ng guide the overall mCODE effort at MITRE. Key MITRE contributors include Su Chen, Anthony DiDonato, Dave Hill, Mark Kramer, Saul Kravitz, Rute Martins, Max Masnick, Chris Moesel, Caroline Potteiger, Sharon Sebastian, and May Terry. Saneel Vasram leads the [CodeX FHIR Accelerator](https://confluence.hl7.org/display/COD/CodeX+Home), a member-driven community accelerating implementation around the mCODE standard. Capability statements were rendered with tools developed by Eric Haas and modified by Corey Spears. Max Masnick wrote the [Data Dictionary generator](https://github.com/HL7/fhir-mCODE-ig/tree/master/data-dictionary) (now known as the IG Summary Tool).

### Contact Information

If you have questions or comments about this guide, you can join the conversation on [chat.fhir.org](https://chat.fhir.org/#narrow/stream/179234-Cancer-Interoperability/topic/mCODE), create an issue in the [HL7 Jira](https://jira.hl7.org/issues/?filter=13361), or reach out to any of the following individuals:

| Topic | Who | Role | Email |
|----|---|---|------|
| CodeX Leadership | Saneel Vasram | CodeX Accelerator Program Manager | codex@hl7.org |
| mCODE Leadership | Dr. Travis Osterman | Chair, mCODE Executive Committee | travis.osterman@vumc.org |
| Oncology Domain Content | Dr. Sanjay Aneja | Chair, mCODE Technical Review Group | sanjay.aneja@yale.edu |
{: .grid }

mCODE is an open source project and welcomes all contributors. The source code for this IG is maintained in the [HL7 Github](https://github.com/HL7/fhir-mCODE-ig). All of the profiling work is done using [FHIR Shorthand](http://hl7.org/fhir/uv/shorthand/) and [SUSHI](https://fshschool.org).

MITRE: Approved for Public Release. Distribution Unlimited. Case Number 16-1988

{% include markdown-link-references.md %}


---

// File: input/pagecontent/neuroblastoma-inrgss-stage.md

Information about the Neuroblastoma INSS Stages can be found at [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2650389/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2650389/).
 
The INRGSS divides neuroblastomas into 4 stages:
* L1: The tumor has not spread from where it started and has not grown into vital structures as defined by the list of IDRFs. It is confined to one area of the body, such as the neck, chest, or abdomen.
* L2: The tumor has not spread far from where it started (for example, it may have grown from the left side of the abdomen into the left side of the chest), but it has at least one IDRF.
* M: The tumor has spread (metastasized) to a distant part of the body (except tumors that are stage MS).
* MS: Metastatic disease in children younger than 18 months, with cancer spread only to skin, liver, and/or bone marrow.

Since there are two main scales, and the initials on them are very close,  it would be good to have something in the narrative that makes it clear which one you mean. 

<i>To ensure data quality, definitions for each value should be provided.  Since the NCI Thesaurus provides definitions, it is easy to add this information.</i>

<i>Hyperlinks to the specific NCI Thesaurus concepts should be included and not just to the general browser site.  This makes it easier for end-users to find the concepts and is consistent with the approach used for other terminologies such as SNOMED.</i>



---

// File: input/pagecontent/neuroblastoma-inss-stage.md

The stage definitions for the Neuroblastoma INSS Stages can be found at [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2650389/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2650389/)

The International Neuroblastoma Staging System (INSS) is a postsurgical staging system:
* Stage 1: The cancer is still in the area where it started. It is on one side of the body (right or left). All visible tumor has been removed completely by surgery (although looking at the tumor's edges under the microscope after surgery may show some cancer cells). Lymph nodes near the tumor are free of cancer (although nodes enclosed within the tumor may contain neuroblastoma cells).
* Stage 2A: The cancer is still in the area where it started and on one side of the body, but not all of the visible tumor could be removed by surgery. Lymph nodes near the tumor are free of cancer (although nodes enclosed within the tumor may contain neuroblastoma cells).
* Stage 2B: The cancer is on one side of the body, and it may or may not have been removed completely by surgery. Nearby lymph nodes outside the tumor contain neuroblastoma cells, but the cancer has not spread to lymph nodes on the other side of the body or elsewhere.
* Stage 3: The cancer has not spread to distant parts of the body, but one of the following is true:0
    - The cancer can't be removed completely by surgery, and it has crossed the midline (defined as the spine) to the other side of the body. It may or may not have spread to nearby lymph nodes.
    - The cancer is still in the area where it started and is on one side of the body. It has spread to lymph nodes that are relatively nearby but on the other side of the body.
    - The cancer is in the middle of the body and is growing toward both sides (either directly or by spreading to nearby lymph nodes).
* Stage 4: The cancer has spread to distant parts of the body such as distant lymph nodes, bones, liver, skin, bone marrow, or other organs (but the child does not meet the criteria for stage 4S).
* Stage 4S (also called "special" neuroblastoma): The child is younger than 1 year old. The cancer is on one side of the body. It might have spread to lymph nodes on the same side of the body but not to nodes on the other side. The neuroblastoma has spread to the liver, skin, and/or the bone marrow. However, no more than 10% of marrow cells are cancer cells, and imaging tests such as an MIBG scan do not show cancer in the bone marrow.
* Recurrent: While not a formal part of the staging system, this term is used to describe cancer that has come back (recurred) after it has been treated. The cancer might come back in the area where it first started or in another part of the body.

---

// File: input/pagecontent/profiles.md

The following profiles have been defined for this implementation guide:

* [BodyStructureIdentifier]
* [CancerDiseaseStatus]
* [CancerPatient]
* [CancerRelatedMedicationAdministration]
* [CancerRelatedMedicationRequest]
* [CancerRelatedSurgicalProcedure]
* [CancerStage]
* [Comorbidities]
* [ECOGPerformanceStatus]
* [GenomicRegionStudied]
* [GenomicsReport]
* [GenomicVariant]
* [HistoryOfMetastaticCancer]
* [HumanSpecimen]
* [KarnofskyPerformanceStatus]
* [mCODEPatientBundle]
* [mCODEPatientGroup]
* [PrimaryCancerCondition]
* [RadiotherapyCourseSummary]
* [RadiotherapyVolume]
* [SecondaryCancerCondition]
* [TNMDistantMetastasesCategory]
* [TNMPrimaryTumorCategory]
* [TNMRegionalNodesCategory]
* [TNMStageGroup]
* [Tumor]
* [TumorMarkerTest]
* [TumorSize]

The following draft (maturity level 0) profiles have been defined for this implementation guide:

* [ALLRiskAssessment]
* [BodySurfaceArea]
* [CancerRiskAssessment]
* [DeauvilleScale]
* [HistologicBehaviorAndType]
* [HistologicGrade]
* [LanskyPlayPerformanceStatus]
* [RhabdomyosarcomaRiskAssessment]
* [TumorMorphology]

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-cancer-disease-status-intro.md


### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` LOINC `97509-4` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

In some cases, multiple values for Cancer Disease Status may be true at the same time. For example, a patient's condition may have improved AND the patient is in partial remission. However, this profile is derived from the Observation resource, which restricts value[x] to one value. If a patient has experienced multiple values for Cancer Disease Status, multiple instances should be created.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-cancer-patient-intro.md

### Conformance

Patient resources representing Cancer Patients in the scope of mCODE (as defined on the [Identifying in-scope Patients](conformance-patients.html) page) SHALL conform to this profile. Any resource intended to conform to this profile SHOULD populate `meta.profile` accordingly.


---

// File: input/pagecontent/StructureDefinition-mcode-cancer-related-medication-administration-intro.md

### Conformance

 MedicationAdministration resources associated with an [in-scope patient] SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.
{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-cancer-related-medication-request-intro.md

### Conformance

 MedicationRequest resources associated with an [in-scope patient] and associated with cancer treatment SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile (i.e., a prescription, administration, or medication exposure) SHOULD be published in this form.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-cancer-related-surgical-procedure-intro.md

### Conformance

Procedure resources associated with an [in-scope patient] with `Procedure.category` SNOMED CT `387713003` MAY conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form. Specifically, any surgical procedure related to the treatment of a [PrimaryCancerCondition] or [SecondaryCancerCondition] SHOULD published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-cancer-stage-group-intro.md

Rather than offer a separate staging profile for each stage system type, this profile can support any stage system type. Based on the code selected for Observation.code slice, the Table below provides the preferred valuesets for Observation.method and Observation.value[x]. If the value for Observation.method is "N/A", it means no specific method values have been identified.

| `Observation.code` | `Observation.method` ValueSet  | `Observation.value[x]` ValueSet |
|---------|--------------------|--------------------------|
| SNOMED 385361009 "International Federation of Gynecology and Obstetrics stage for gynecological malignancy (observable entity)" | FIGOStagingMethodVS | FIGOStageValueVS |
| NCI Thesaurus C141212 "Binet Stage" | N/A | BinetStageValueVS |
| NCI Thesaurus C141207 "Rai Stage" | RaiStagingMethodVS | RaiStageValueVS |
| SNOMED 385388004 "Lymphoma stage (observable entity)" | LymphomaStagingMethodVS | LymphomaStageValueVS |
| SNOMED 106243009 "Breslow depth staging for melanoma of skin (observable entity)" | N/A | BreslowDepthStageValueVS |
| SNOMED 103419001 "Clark melanoma level of invasion of excised malignant melanoma of skin (observable entity)" | N/A | ClarkLevelValueVS |
| NCI Thesaurus C139007 "International Staging System Stage" | N/A | MyelomaISSValueVS |
| NCI Thesaurus C141392 "RISS Stage" | N/A | MyelomaRISSValueVS |
| SNOMED 409720004 "International neuroblastoma staging system stage (observable entity)" | N/A | NeuroblastomaINSSValueVS |
| NCI Thesaurus C133427 "International Neuroblastoma Risk Group Staging System" | N/A | NeuroblastomaINRGSSValueVS |
| SNOMED 385377005 "Gleason grade finding for prostatic cancer (finding)" | N/A | GleasonGradeGroupValueVS |
| SNOMED 405916000 "Intergroup rhabdomyosarcoma study post-surgical clinical group (observable entity)" | N/A | RhabdomyosarcomaClinicalGroupValueVS |
| SNOMED 405931009 "National Wilms Tumor Study Group Stage (observable entity)" | N/A | WilmsTumorStageValueVS |
| SNOMED 1342413004 "International Intraocular Retinoblastoma Classification (tumor staging)" | N/A | InternationalRetinoblastomaStageValueVS |
| NCI Thesaurus C198190 "Childhood Hepatoblastoma by Toronto Guidelines v2 Stage, Tier 2" | N/A | 

{: .grid }

Some staging systems use specific prognostic factors, represented by the component data element. Based on the code selected for Observation.code slice, the Table below provides the preferred codes and valuesets for Observation.component.code and Observation.component.value[x].

| `Observation.code` | `Observation.component.code`  | `Observation.code.value[x]` ValueSet |
|---------|--------------------|--------------------------|
| SNOMED 385388004 "Lymphoma stage (observable entity)" | SNOMED 106252000 "Staging classification for lymphoma (tumor staging)" | LymphomaStageValueModifierVS |
| SNOMED 385388004 "Lymphoma stage (observable entity)" | SNOMED 277366005 "Nature of staging values (qualifier value)" | ClinOrPathModifierVS |
| SNOMED 385388004 "Lymphoma stage (observable entity)" | SNOMED 260873006 "Bulky disease status (attribute)" | LymphomaStageBulkyModifierVS |
{: .grid }


### Conformance

Observation resources associated with an [in-scope patient] representing cancer stage information SHALL conform to this profile.


{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-cancer-stage-intro.md

### Usage

Rather than offer a separate staging profiles for each type of cancer staging (also called domain – e.g., gynecologic FIGO stage, leukemia Binet stage, Melanoma Breslow stage, etc.), this profile can support many different staging categories. The Staging Domain can be specified in a CodeableConcept in the CancerStage.category slice. Based on the code selected for CancerStage.code slice, the Table below provides the valuesets to use for CancerStage.method and CancerStage.value[x] along with their bindings (e.g., required or extensible). If the value for CancerStage.method is "N/A", it means no specific method values have been identified.

Lymphoma and TNM staging are handled separately in [Lymphoma Stage Profile](StructureDefinition-mcode-lymphoma-stage.html) and [TNM Stage Group Profile](StructureDefinition-mcode-tnm-stage-group.html), respectively.

#### Cancer Staging Domains

Cancer stage definitions are disease specific.  Specific guidance is provided below on each stage type to provide development teams an understanding of what to look for in source systems, how to setup tests, etc.

| Domain | CancerStage.code | CancerStage.value | CancerStage.method |
| ------ | ---------------- | ----------------- | ------------------ |
| Gynecologic FIGO Stage | system: [http://snomed.info/sct](http://snomed.info/sct)<br />code: [385361009](https://browser.ihtsdotools.org/?perspective=full&conceptId1=385361009&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false) | [FIGO Stage Value Set (extensible)](ValueSet-mcode-figo-stage-value-vs.html) | [FIGO Staging Method Value Set (extensible)](ValueSet-mcode-figo-staging-method-vs.html) |
| Leukemia Binet Stage | system: [http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl](http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)<br />code: [C141212](https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI_Thesaurus&version=24.07e&code=C141212) | [Binet Stage Value Set (extensible)](ValueSet-mcode-binet-stage-value-vs.html) | N/A |
| Leukemia RAI Stage | system: [http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl](http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)<br />code: [C141207](https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI_Thesaurus&version=24.07e&code=C141207) | [Rai Stage Value Set (extensible)](ValueSet-mcode-rai-stage-value-vs.html ) | [Rai Staging System Value Set (required)](ValueSet-mcode-rai-staging-method-vs.html) |
| Melanoma Breslow Stage | system: [http://snomed.info/sct](http://snomed.info/sct)<br />code: [106243009](https://browser.ihtsdotools.org/?perspective=full&conceptId1=106243009&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false) | [Breslow Depth Stage Value Set (required)](ValueSet-mcode-breslow-depth-stage-value-vs.html) | N/A |
| Melanoma Clark Level | system: [http://snomed.info/sct](http://snomed.info/sct)<br />code: [103419001](https://browser.ihtsdotools.org/?perspective=full&conceptId1=103419001&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false) | [Clark Level Value Set (required)](ValueSet-mcode-clark-level-value-vs.html) | N/A |
| Myeloma ISS Stage | system: [http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl](http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)<br />code: [C139007](https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI_Thesaurus&version=24.07e&code=C139007) | [International Staging System (ISS) for Myeloma Stage Value Set (extensible)](ValueSet-mcode-myeloma-iss-stage-value-vs.html) | N/A |
| Myeloma RISS Stage | system: [http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl](http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)<br />code: [C141392](https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI_Thesaurus&version=24.07e&code=C141392) | [Revised International Staging System (ISS) for Multiple Myeloma Stage Value Set (extensible)](ValueSet-mcode-myeloma-riss-stage-value-vs.html) | N/A |
| Neuroblastoma INSS Stage | system: [http://snomed.info/sct](http://snomed.info/sct)<br />code: [409720004](https://browser.ihtsdotools.org/?perspective=full&conceptId1=40972000&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false) | [International Neuroblastoma Staging System (INSS) for Neuroblastoma Stage Value Set (required)](ValueSet-mcode-neuroblastoma-inss-value-vs.html) | N/A |
| Neuroblastoma INRGSS Stage | system: [http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl](http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)<br />code: [C133427](https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI_Thesaurus&version=24.07e&code=C133427) | [International Neuroblastoma Risk Group Staging System (INRGSS) for Neuroblastoma Risk Assessment Value Set (extensible)](ValueSet-mcode-neuroblastoma-INRGSS-value-vs.html) | N/A |
| Prostate Gleason Stage | system: [http://snomed.info/sct](http://snomed.info/sct)<br />code: [385377005](https://browser.ihtsdotools.org/?perspective=full&conceptId1=385377005&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false) | [Gleason Grade Value Set (required)](ValueSet-mcode-gleason-grade-group-value-vs.html) | N/A |
| Rhabdomyosarcoma Clinical Group Stage | system: [http://snomed.info/sct](http://snomed.info/sct)<br />code: [405916000](https://browser.ihtsdotools.org/?perspective=full&conceptId1=405916000&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false) | [Rhabdomyosarcoma Clinical Group Value Set](ValueSet-mcode-rhabdomyosarcoma-clinical-group-value-vs.html) | N/A |
| Wilms Tumor Stage | system: [http://snomed.info/sct](http://snomed.info/sct)<br />code: [405931009](https://browser.ihtsdotools.org/?perspective=full&conceptId1=405931009&edition=MAIN/2024-10-01&release=&languages=en&latestRedirect=false) | [Wilms Tumor Stage Value Set (required)](ValueSet-mcode-wilms-tumor-stage-value-vs.html) | [Wilms Tumor Body Site Value Set (extensible)](ValueSet-mcode-wilms-tumor-body-site-vsCOG.html) |
{:.grid}


---

// File: input/pagecontent/StructureDefinition-mcode-comorbidities-intro.md

### Background

"Comorbidity" speaks to the presence of more than one distinct condition in an individual. Typically, the term refers to *additional* disorders relative to a current "index" disease ([Valderas, et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2713155/)).

Co-occurring disorders are typically treated as high-level categories, for example, "liver disease, mild", "dementia", or "renal disease". Comorbidity categories are not universal, but rather, selected because of their clinical significance to the diagnosis, prognosis, or treatment of the index disease. The comorbidities significant in COVID-19 treatment are different than those for congestive heart failure.

There are several general models used to note the presence of multiple disease categories in one individual, typically used to calculate a morbidity burden or risk score. The [Charlson Comorbidity Index](https://www.mdcalc.com/calc/3917/charlson-comorbidity-index-cci) is one of the most widely used. The [NCI Comorbidity Index](https://healthcaredelivery.cancer.gov/seermedicare/considerations/comorbidity.html) is similar, however, the NCI comorbidities exclude solid tumors, leukemias, and lymphomas, given that the index was developed from a cohort of cancer patients. However, there is no uniform way to record comorbidities, and therefore mCODE does not impose any particular framework.

### FHIR Implementation Overview

The user can use this profile in three ways: (1) free-form, listing any conditions they wish to highlight as significant comorbidities, (2) by following a formal paradigm, such as Charlson or [Elixhauser](https://www.hcup-us.ahrq.gov/toolssoftware/comorbidityicd10/comorbidity_icd10.jsp), or (3) use codes defined for registry reporting purposes, such as [codes defined by Center for International Blood and Marrow Transplant Research (CIBMTR)](https://www.cibmtr.org/manuals/fim/1/en/topic/appendix-j). This profile contains two extensions, representing comorbidities that are present and those asserted to be absent.

#### Index Condition

Record the "index" condition (the condition the comorbidities are relevant to) in `Observation.focus`. Reference the patient's primary cancer condition.

#### Comorbidities Present

Comorbidities that are present are reported in the array `Observation.extension:comorbidConditionPresent` as a `valueReference` or `valueCodeableConcept`. The use of `valueReference` is optional and applicable only if there is an existing Condition resource representing the comorbid condition. In other cases, a diagnosis code or a comorbid condition category code appears in `valueCodeableConcept`.

Typically, a cancer condition would not be considered a comorbidity in a cancer patient, but it is possible that there could be a pre-existing or concurrent cancer condition included in the list of comorbidities.

#### Comorbidities Absent

Usually, only comorbidities that are present are recorded. However, assertions of absent comorbidities are useful when calculating comorbid risk indices. To assert a comorbidity is **not** present, the array `Observation.extension:comorbidConditionAbsent` is populated with either a diagnosis code or comorbid condition category code.

#### No Comorbidities

To represent no comorbidities, there should be only one entry in `Observation.extension:comorbidConditionAbsent` with the `valueCodeableConcept` of SNOMED CT ID 64572001 (Disease).


#### Comorbidity Method

If a formal methodology is used to assess comorbidities (e.g., Charlson, NCI, Elixhauser, CIMBTR, ACE-27), it should be identified in `Observation.method`. The comorbidity score (`Observation.value`) cannot be interpreted without knowing the method. The method may also provide the comorbidity categories used in present and absent comorbidities.

At present, only Charlson has a specific SNOMED CT code, so in other cases, a plain text can be specified in `Observation.method.text`.

#### Comorbidity Index or Risk Score

A comorbid condition risk index, if it exists, is reported in `Observation.value[x]`. In several frameworks the index is an integer, so the value would appear as `Observation.valueInteger`.

### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` of SCT#398192003 "Co-morbid conditions (finding)" SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-ecog-performance-status-intro.md

### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` LOINC `89247-1` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-genomic-region-studied-intro.md

### Usage

This profile identifies a specific region analyzed for gene mutations or variants in a given genomic test. For example, exome sequencing tests could analyze multiple non-contiguous regions. Each region is designated by a range of start and end location and referencing a coordinate system which is 0-based or 1-based.

RegionStudied is noted at the [GenomicsReport] level and not directly tied to a given [GenomicVariant].

### Conformance

Observation resources associated with an [in-scope patient] with `DiagnosticReport.code` LOINC `53041-0` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-genomic-variant-intro.md

### Usage

GenomicVariant SHOULD be sent as part of a GenomicsReport and MAY be sent as a standalone observation.

### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` LOINC `69548-6` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-genomics-report-intro.md

### Usage

The identity of non-genomic laboratory tests is typically represented by a LOINC code. However, many genomic tests and panels do not have LOINC codes. Some tests might have an identifier in NCBI Genomic Testing Registry (GTR), a central location for voluntary submission of genomic test information by providers. To identify the diagnostic report, the name of the report must be in the text sub-field of the code structure. If there is a coded identifier from GTR, LOINC, or other source, then it should be included into the code sub-field of the code structure. If there is no suitable code, the code can be omitted.

### Conformance

DiagnosticReport resources associated with an [in-scope patient] with `DiagnosticReport.code` LOINC `81247-9` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-history-of-metastatic-cancer-intro.md

### Usage
This profile supports recording of patient history of metastatic cancer, as determined by provider collection of patient history through face to face interactions or through a survey instrument. A patient-reported [SecondaryCancerCondition] with a clinical status of 'remission' could be used to record a patient's history of metastatic cancer in more detail. Metastatic cancer diagnosed as part of care within the current setting should be recorded using [SecondaryCancerCondition].

Recording history of metastatic disease as an Observation, rather than a Condition, adheres to [guidance from the Patient Care work group](http://community.fhir.org/t/how-can-i-represent-a-negative-condition/329). It also aligns with SNOMED's placement of "history of disorder" in its situation hierarchy, not the disorder hierarchy.

To query for a history of metastatic cancer implementers should look for Observations with codes in the value set [HistoryOfMetastaticMalignantNeoplasmVS], as well as instances of [SecondaryCancerCondition] with appropriate status values.

To represent a negative answer to a question regarding history of metastatic disease, the value of the Observation should be set to `false`.

The the parent value (`1287652008` history of metastatic cancer) should only be used when the site of metastasis is unknown.

To indicate the primary cancer in which the metastatic cancer was metastatic from, use the relatedCondition extension.

### Conformance

Observation resources associated with an [in-scope patient] with a Observation.code in the value set [HistoryOfMetastaticMalignantNeoplasmVS] SHALL conform to this profile. Any resource intended to conform to this profile SHOULD populate `meta.profile` accordingly.


{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-karnofsky-performance-status-intro.md

### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` LOINC `89243-0` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-normalization-basis-intro.md

It is important to note that the normalization basis extension is not meant to calculate the dosage. It is simply meant to record the method (body weight, body surface area, flat dose, or age) that was used to calculate the dosage. The dosageInstruction and dosage data element found in the CancerRelatedMedicationRequest and CancerRelatedAdministration profiles, respectively, include the details for the ordered and administered dose. 

---

// File: input/pagecontent/StructureDefinition-mcode-patient-bundle-intro.md

### Usage

The bundle SHALL contain exactly one Patient resource conforming to the [CancerPatient] profile (any patient conforming with US Core Patient is also conformant). The bundle SHALL also contain following mCODE-conformant resources, if available to the server:

* FHIR Observation Resources, if they exist for the patient, including but not limited to: [CancerDiseaseStatus], [CancerStage] (TNM and non-TNM), [Comorbidities], [ECOGPerformanceStatus], [GenomicRegionStudied], [GenomicVariant], [HistoryOfMetastaticCancer], [KarnofskyPerformanceStatus], [TumorMarkerTest], [TumorSize], and [USCoreVitalSigns].
* FHIR Condition Resources, if they exist for the patient, including but not limited to: [PrimaryCancerCondition] and [SecondaryCancerCondition].
* FHIR Medication Administration Resources, if they exist for the patient, including but not limited to: [CancerRelatedMedicationAdministration].
* FHIR Medication Request Resources, if they exist for the patient, including but not limited to: [CancerRelatedMedicationRequest].
* FHIR Diagnostic Report Resources, if they exist for the patient, including but not limited to: [GenomicsReport].
* FHIR Specimen Resources, if they exist for the patient, including but not limited to: [HumanSpecimen].
* FHIR Procedure Resources, if they exist for the patient, including but not limited to: [CancerRelatedSurgicalProcedure] and [RadiotherapyCourseSummary].
* FHIR BodyStructure Resources, if they exist for the patient, including but not limited to:[RadiotherapyVolume] and [Tumor].

In addition, the bundle SHOULD contain the following non-mCODE resources, following appropriate US Core profiles:

* US Core Observation resources representing vital signs, e.g., patient height, weight, blood pressure
* Laboratory results from Comprehensive Metabolic Panels (CMP) and Complete Blood Counts (CBC)
* Relevant resources from the Genomic Reporting IG that interpret genomic findings in terms of implications or medication recommendations, including but not limited to [DiagnosticImplication](http://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-diagnostic-implication.html) resources representing evidence for or against a particular disease, condition, or cancer diagnosis.
* Additional resources relevant to the patient but not part of mCODE, such as smoking status, family member history, and diagnostic procedures.
* Any other resources deemed relevant to care of the cancer patient

By default, this Bundle includes _all_ required resources described above, irrespective of care dates associated with the resources. For some types of resources, such as vital signs, a very large number of resources will therefore be included by default. To limit the number of included resources, callers MAY specify `start` and `end` parameters when requesting a patient's mCODE bundle via the Sender's FHIR API, which operate in the same way as for [the Fetch Patient Record operation](https://www.hl7.org/fhir/operation-patient-everything.html).

### Conformance

The bundle itself SHALL validate against the current profile.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-patient-group-intro.md

### Usage

This profile is used to return a list of all mCODE patients when a mCODE Data Sender identifies mCODE patients using the [Patients-in-Group Approach](conformance-patients.html#patients-in-group-approach). Use of this profile is explained in greater detail in the [conformance discussion](conformance-patients.html).


---

// File: input/pagecontent/StructureDefinition-mcode-patient-specimen-intro.md

### Usage

HumanSpecimen SHOULD be referenced by [GenomicsReport] and [TumorMarkerTest]. Multiple specimens are possible in the case of a tumor normal test where the variants found in a tumor specimen are compared with the variants in a normal specimen.

### Conformance

Specimen resources associated with an [in-scope patient] with a `Specimen.code` in the value set [HumanSpecimenTypeVS] SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-primary-cancer-condition-intro.md

### Usage

This profile captures the cancer diagnosis. More information on coding the diagnosis can be found on the page Content by Group -> Disease.

In mCODE, staging information SHALL be captured in an Observation that conforms to the StageGroup profile. The resulting stage group MAY appear in this profile, in `stage.summary` and `stage.type`, but mCODE Data Senders and Receivers MAY ignore it in favor of the TNMStageGroup Observation. If present, cancer staging information summarized in this profile should reflect the most recent staging assessment on the patient, and should be updated if and when there is a new staging assessment. Past staging assessments will be preserved in instances of the TNMStageGroup, which refer back to PrimaryCancerCondition.

For SNOMED CT coding, use a code from the disorder hierarchy under SNOMED CT 363346000 'Malignant neoplastic disease (disorder)' excluding codes descending from SNOMED CT 128462008 'Secondary malignant neoplastic disease (disorder)'. If body location is not precoordinated (i.e., implied by the code), the site of the primary tumor should be specified in the body site attribute.

For ICD-10-CM coding, use one of the codes given in this value set representing primary malignant neoplasms and neoplasms of uncertain or unspecified behavior.

Note that ICD-O-3 specifies morphology and topography, not disorder. If ICD-O-3 is used, the primary cancer disorder code must be specifically be SNOMED CT 363346000  'Malignant neoplastic disease (disorder)'. The ICD-O-3 morphology and topography codes should be entered in the HistologyMorphologyBehavior and body location fields, respectively.


### Conformance

Condition resources associated with an [in-scope patient] with a `Condition.code` in the value set [PrimaryCancerDisorderVS] SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-radiotherapy-course-summary-intro.md

### Usage

This profile is used to capture a course of radiotherapy delivered to a patient. A course of therapy systematically addresses a condition or set of related conditions. The course can include multiple sessions, can be divided into multiple phases, and can last for several months. A course of treatment has a distinct beginning and end. While the Radiotherapy Course Summary can be incrementally updated as the treatment progresses, the primary purpose is to summarize the entire course of treatment from beginning to end. The status element indicates whether the treatment is in progress or complete.

In radiotherapy, a _phase_ is a subset of a course. A phase is defined as a treatment consisting of one or more identical fractions. Phases are modeled in the forthcoming CODEX Radiation Therapy IG.

The relationship between a course and its phases is exemplified in the following diagram:

<img src="BreastTreatmentPlan.png" alt="Breast Treatment Plan" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />

In this example, the radiotherapy course encompasses three phases. The course summary captures each radiotherapy volume, the total dose for each volume, and total number of fractions delivered for each volume. The course summary also records the modalities and techniques used, without directly associating those with individual volumes. Other elements in the summary include the reason for treatment, the treatment intent, the period of treatment, and the total number of sessions.

At the phase level, each phase consists of a set of identical fractions. In this context, identical means that each fraction uses the same modality, technique, dose per fraction, and is applied to the same volume or volumes. Because of their spatial relationship or the technique used, all volumes do not necessarily receive the same total dose during a phase. Phases may occur in parallel, overlap, or in alternating temporal patterns.

Course and Phase definitions follow the recommendations of the American Association of Physicists in Medicine (AAPM) Operational Ontology for Oncology ([O3](https://pubmed.ncbi.nlm.nih.gov/37244628/)).


### Conformance

Procedure resources whose code is `mcode-radiotherapy-course-summary` (code system `http://hl7.org/fhir/us/mcode/CodeSystem/mcode-resource-identifier-cs`) SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form. Any resource intended to conform to this profile SHOULD populate `meta.profile` accordingly.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-radiotherapy-modality-and-technique-intro.md

### Usage

Extension capturing modality and technique of a given radiotherapy procedure. For definitions, see the [Radiotherapy Glossary](glossary.html) page.

Allowed combinations of modality and technique are shown here and enforced by invariants:

| **Treatment Type** |  **Modality**           |      **Technique**       |
| ---------------| ------------------------ | ------------------------ |
| All | UNC (.text required)   | Not constrained                 |
| External Beam Radiotherapy | Photons                 | IMRT, VMAT, 3D, 2D, IORT, FLASH, UNC (.text required) |
| External Beam Radiotherapy| Electrons                | 3D, 2D, IORT, FLASH, UNC (.text required)      |
| External Beam Radiotherapy| Neutrons                 | 3D, NCT, UNC (.text required)                  |
| External Beam Radiotherapy| Carbon Ions              | PPS, PSS, PS, UNC (.text required)           |
| External Beam Radiotherapy| Protons                  | PPS, PSS, PS, FLASH, UNC (.text required)    |
| Brachytherapy | Internal radiotherapy – permanent seeds | Interstitial, UNC (.text required) |
| Brachytherapy| Low Dose Rate using temporary source | Intracavitary, Interstitial, Surface, UNC (.text required) |
| Brachytherapy| Pulsed Dose Rate | Intracavitary, Interstitial, UNC (.text required) |
| Brachytherapy| High Dose Rate  | Intracavitary, IMB, Interstitial, Intravascular, Intraluminal, IORT, Surface, UNC (.text required) |
| Brachytherapy| High dose rate electronic  | Intracavitary, IMB, Interstitial, Intraluminal, IORT, Surface, UNC (.text required) |
| Brachytherapy| Radiopharmaceutical  | Oral, Intravascular, Intracavitary, Interstitial, UNC (.text required) |
{: .grid }

It may not be possible to map modalities and techniques to the coded values defined here, since the system may have been configured with a local code system, or the values may have been recorded as text strings. In order to enable systems to produce mCODE-conformant data, an "un-encoded" value ([HL7 Codesystem NullFlavor](https://terminology.hl7.org/CodeSystem-v3-NullFlavor.html) value `UNC`) is included in the value sets for both modality and technique. `UNC` means the original text or a local code has not been translated or encoded to the approved value set due to limitations of the sending system. If the `UNC` value is used, a text literal that specifies the source value SHALL be provided in the `.text` element of the CodeableConcept. This requirement is enforced by an invariant.


Technique Acronyms:

| **Acronym** |  **Meaning** |
| ---------------|------------ |
| IMB | Intensity Modulated Brachytherapy |
| IMRT | Intensity Modulated Radiation Therapy |
| VMAT | Volumetric Modulated Arc Therapy|
| 3D | Three Dimensional Planning  |
| 2D | Two Dimensional Planning  |
| IORT | Intraoperative Radiation Therapy |
| NCT | Neutron Capture Therapy|
| PS | Particle Scanning other than PSS |
| PPS | Particle Spot Scanning|
| PSS | Particle Passive Scattering |
| FLASH | Ultra high dose rate radiotherapy |
| UNC | "Un-encoded" value.  |
{: .grid }

### Conformance


{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-radiotherapy-volume-intro.md

### Background
Radiotherapy is a directed treatment that targets a specific areas or volumes in or on the body. The RadiotherapyVolume profile describes these areas or volumes in terms of a BodyStructure resource. Using a standalone resource permits reuse of the same body volume in planning, executing, and reporting a radiotherapy treatment, as opposed to repeating the same elements in multiple places.

The code list of anatomic structures and location qualifiers applicable to RadiotherapyVolume follows the recommendations of the American Association of Physicists in Medicine (AAPM) [Task Group 263 report on Standardizing Nomenclatures in Radiation Oncology][TG263]]. Volumes are further classified according to their type, including the following [Burnet et al., 2004](https://dx.doi.org/10.1102%2F1470-7330.2004.0054):

* Gross tumour volume (GTV) - what can be seen, palpated or imaged
* Clinical target volume (CTV) - the GTV plus a margin accounting for sub-clinical disease spread which therefore cannot be fully imaged
* Planning target volume (PTV) - a geometric concept designed to ensure that the radiotherapy dose is actually delivered to the CTV
* Organs at Risk (OR or OAR) - critical normal tissue structures that should be protected against excessive radiation

An additional volume types referenced by [ICRU62](https://www.icru.org/report/prescribing-recording-and-reporting-photon-beam-therapy-report-62/)
is the term Internal Target Volume (ITV), represents a volume encompassing the CTV with an internal margin compensating for patient movement.  As defined by [Ezhil et al](https://ro-journal.biomedcentral.com/articles/10.1186/1748-717X-4-4) the Internal Gross Tumor Volume (IGTV) represents the GTV with an internal margin to compensate for all movements.

### Usage
The treatment location should be expressed using the anatomical concepts in the American Association of Physicists in Medicine (AAPM) [Task Group 263 report on Standardizing Nomenclatures in Radiation Oncology][TG263]], expressed using SNOMED CT. The mapping from AAPM TG263 concepts to SNOMEDCT codes  ([RadiotherapyTreatmentLocationVS]) and qualifiers ([RadiotherapyTreatmentLocationQualifierVS]) can be found in this [spreadsheet](TG263_Nomenclature_to_SNOMEDCT_Codes_and_Qualifiers.xlsx). An excerpt of this spreadsheet is shown below.
For example, if the treatment location was the Left Breast, with TG263 primary name Breast_L, the location would be expressed by using the SNOMEDCT  `76752008` (Breast structure (body structure))  for location, and `7771000` (Left) for the locationQualifier.

![Excerpt from TG263 to SNOMED mapping](TG263mapping.png)

### Limitations

A known limitation of the RadiotherapyVolume is that it accepts only one coded location. This limitation stems from the base BodyStructure resource. As a result, a compound volume (such as prostate plus seminal vesicles) cannot be represented. If this presents a serious limitation in practice, an extension with additional pairs (location, location qualifiers) will be required.

### Conformance

BodyStructure resources whose morphology has a code from the value set [RadiotherapyVolumeTypeVS] SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form. Any resource intended to conform to this profile SHOULD populate `meta.profile` accordingly.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-secondary-cancer-condition-intro.md

### Usage
* SNOMED CT coding: Use a code from the disorder hierarchy under secondary malignant neoplastic disease (SNOMED CT 128462008).
* ICD-10-CM coding: Use one of the codes given in this value set representing secondary malignant neoplasms and neoplasms of uncertain or unspecified behavior. If body site is not precoordinated (implied by the code), it should be specified separately using the body location.

Note that ICD-O-3 specifies morphology and topography, not disorder; in this case that the disorder code must be SNOMED CT 128462008 (Secondary malignant neoplastic disease). The ICD-O-3 morphology and topography codes should be entered in the HistologyMorphologyBehavior and bodySite fields, respectively.

### Conformance

Condition resources associated with an [in-scope patient] with a Condition.code in the value set [SecondaryCancerDisorderVS] SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an mCODE patient that would reasonably be expected to conform to this profile SHOULD be published in this form, for example, when employing a code that extends the [SecondaryCancerDisorderVS] value set. Any resource intended to conform to this profile SHOULD populate `meta.profile` accordingly.


{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-tnm-distant-metastases-category-intro.md

### Conformance

Observation resources associated with an [in-scope patient] with Observation.code of LOINC 21907-1, 21901-4, or 21913-9 SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient]  that would reasonably be expected to conform to this profile SHOULD be published in this form.


---

// File: input/pagecontent/StructureDefinition-mcode-tnm-primary-tumor-category-intro.md

### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` LOINC `21905-5`, `21899-0`, or `21911-3` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an in-scope patient that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-tnm-regional-nodes-category-intro.md

### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` of LOINC `21906-3`, `21900-6`, or `21912-1` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an in-scope patient that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-tnm-stage-group-intro.md

### Conformance

Observation resources associated with an [in-scope patient] with `Observation.code` of LOINC `21908-9`, `21902-2`, or `21914-7` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an mCODE patient that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-mcode-tumor-intro.md

### Usage

Used to represent a tumor that has not been removed from the body, and track that specific tumor across encounters and procedures.

### Conformance

BodyStructure resources associated with an [in-scope patient] with `morphology` of SCT `367651003` SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] used to represent a tumor that has not been removed from the body SHALL be published in this form.

A single instance of BodyStructure conforming to this profile SHOULD be used to track a specific tumor over time.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-mcode-tumor-marker-test-intro.md

### Usage

A tumor marker is a substance found in tissue or blood or other body fluids that may be a sign of cancer or certain benign (non-cancer) conditions. Most tumor markers are made by both normal cells and cancer cells, but they are made in larger amounts by cancer cells. A tumor marker may help to diagnose cancer, plan treatment, or find out how well treatment is working or if cancer has come back. Examples of tumor markers include CA-125 (in ovarian cancer), CA 15-3 (in breast cancer), CEA (in colon cancer), and PSA (in prostate cancer). Tumor markers differ from genomic markers in that they are measured at the levels of the protein and substance post-RNA protein synthesis. (Definition adapted from: [NCI Dictionary of Cancer Terms](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/tumor-marker-test) and [Cancer.Net](https://www.cancer.net/navigating-cancer-care/diagnosing-cancer/tests-and-procedures/tumor-marker-tests)).

### Conformance

Observation resources associated with an [in-scope patient] with an Observation.code in the value set TumorMarkerTestVS SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an in-scope patient that would reasonably be expected to conform to this profile SHOULD be published in this form, for example, when employing a code that extends the TumorMarkerTestVS value set. Any resource intended to conform to this profile SHOULD populate `meta.profile` accordingly.


---

// File: input/pagecontent/StructureDefinition-mcode-tumor-size-intro.md

### Usage

Tumor size is modeled as an Observation with components for one required primary dimension (for example, length) and up to two additional optional dimensions (for example, width and depth). Note that the `Observation.value[x]` is not used for the primary dimension, because secondary dimensions cannot be considered _components_ of the length measurement. Instead, primary and secondary (e.g., length, width and depth) are all components of one tumor size measurement.

For staging and prognostic purposes, it is assumed that reported tumor measurements will include the longest dimension of the tumor. Therefore, this profile requires the longest dimension to be reported in `Observation.component.value` with `Observation.component.code` set to LOINC [`33728-7`](https://loinc.org/33728-7/) ("Size.maximum dimension in Tumor). To avoid confusion, it is not possible to represent tumor size with this profile without including a measurement of the tumor's longest dimension.

### Conformance

Observation resources associated with an [in-scope patient] with an `Observation.code` of LOINC [`21889-1`](https://loinc.org/21889-1/) ("Size Tumor") SHALL conform to this profile. Beyond this requirement, a producer of resources SHOULD ensure that any resource instance associated with an [in-scope patient] that would reasonably be expected to conform to this profile SHOULD be published in this form.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/terminology.md

This implementation guide draws on a number of formal terminologies (code systems). Several guiding principles were applied in selecting terminologies for mCODE:

1. Fit for purpose
2. Conformance with US Core and FHIR
3. Commonly used in real world practice

The following table presents the external code systems (and naming conventions) adopted in mCODE, and their primary purpose:

| Code System | Domain | [FHIR IG Publishing](https://confluence.hl7.org/display/FHIR/IG+Publisher+Documentation) support? | [HL7 Canonical](https://terminology.hl7.org/external_terminologies.html) |
|--------------|-------------|------------------|------------------|
| CPT | Procedure codes | No | <http://www.ama-assn.org/go/cpt> |
| HGNC | Gene identification | No | <http://www.genenames.org>  |
| HGVS | Sequence variant nomenclature | Yes | <http://varnomen.hgvs.org> |
| HTA  | Various HL7 V2 and FHIR-specific codes | Yes | <http://terminology.hl7.org> |
| ICD-O-3 | Cancer morphology and topology codes | No | <http://terminology.hl7.org/CodeSystem/icd-o> |
| ICD-10-CM | Diagnosis codes | Yes | <http://hl7.org/fhir/sid/icd-10-cm> |
| ICD-10-PCS | Procedure codes | No | <http://www.cms.gov/Medicare/Coding/ICD10> |
| LOINC | Observation and laboratory codes, answer codes | Yes | <http://loinc.org> |
| NCBI GTR | Genomic test codes | No | <https://www.ncbi.nlm.nih.gov/gtr/> |
| NCBI ClinVar | Genomic variations | No | <http://www.ncbi.nlm.nih.gov/clinvar> |
| NCIT | Cancer terminology | No | <http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl> |
| RxNorm | Medication codes | Yes | <http://www.nlm.nih.gov/research/umls/rxnorm> |
| Sequence Ontology | DNA change types | No | <http://www.sequenceontology.org/> |
| SNOMED CT | Disorders, body structures, findings, qualifiers | Yes | <http://snomed.info/sct> |
| UCUM | Units of measure | Yes | <http://unitsofmeasure.org> |
{: .grid }

**Key:**

* CPT - Current Procedural Terminology (American Medical Association)
* HGNC - Human Genome Organisation (HUGO) Gene Nomenclature Committee
* HGVS - Human Genome Variation Society
* HTA - HL7 Terminology Authority
* ICD - International Classification of Diseases (World Health Organization)
  * ICD-O-3 - Oncology, 3rd revision
  * ICD-10-CM - Clinical Modification, 10th revision
  * ICD-10-PCS - Procedure Coding System, 10th revision
* LOINC - Logical Observation Identifiers Names and Codes
* NCBI - National Center for Biotechnology Information (National Institutes of Health) (US)
  * NCBI GTR - Genomic Testing Registry
  * NCBI ClinVar - Not an acronym
* NCIT - National Cancer Institute (NCI) Thesaurus
* RxNorm - From National Library of Medicine (US)
* SNOMED CT - Systematized Nomenclature of Medicine Clinical Terms
* UCUM - Unified Code for Units of Measure
* UMLS - Unified Medical Language System Metathesaurus

### Local Code Systems

Local code systems `SnomedRequestedCS` are provided for terms submitted but not yet published and/or approved by SNOMED. It is expected that the local codes will be replaced with approved LOINC and SNOMED terms in a future technical correction to the STU 2 IG. Where codes have already been assigned by SNOMED, but not yet published, those codes are used as local codes to reduce future changes. In other cases, the submission numbers are used as the local codes.

**Links:**

* [Code systems defined in mCODE](codesystems.html)
* [Value sets used in mCODE](valuesets.html)

{% include markdown-link-references.md %}


---

// File: input/pagecontent/ValueSet-mcode-brachytherapy-modality-vs-intro.md


### Usage

Valid combinations of modality and technique are described in the modality and technique extension [RadiotherapyModalityAndTechnique]
### Code Descriptions

| **Common Usage Name**  | **Definition**|  **SNOMED CT Fully Specified Name**  | **SNOMED CT Concept ID**|
| ----------------- | ----------------------------- | ------------------------------ | ----------------------------- |
| Low Dose Rate Brachytherapy - Temporary Placement | Radiation treatment that irradiates a treatment volume with temporarily placed radiation sources delivering low dose rates (typically less than or equal to 2 Gy/hour).  |  Low dose rate brachytherapy using temporary radioactive source (procedure)  | 1156708005 |
| Low Dose Rate Brachytherapy - Permanent Placemet | Radiation treatment that irradiates a treatment volume with permanently placed radiation sources delivering low dose rates (typically less than or equal to 2 Gy/hour).  |  Internal radiotherapy - permanent seeds (procedure) | 169359004 |
| Pulsed Dose Rate Brachytherapy | Internal or surface radiation treatment that irradiates a treatment volume in short pulses (typically 10 to 30 minutes in every hour) with a stronger source than low dose rate brachytherapy (typically treatment rates up to 3 Gy/hour).  | Pulsed dose rate brachytherapy (procedure)   | 1156384006 |
| High Dose Rate Brachytherapy | Internal or surface radiation treatment that irradiates a treatment volume with high dose rates of radiation (typically greater than 12 Gy/hour).  | High dose brachytherapy (procedure)    | 394902000|
| Electronic Brachytherapy | A modality of internal or surface radiation that uses X-ray sources instead of radionuclides to deliver high rates of radiation.  | High dose rate electronic brachytherapy (procedure)  | 438629002 |
| Radiopharmaceutical Therapy | The use of radioactive drugs that can be given by mouth, infused, or injected.  | Administration of radiopharmaceutical (procedure)  | 440252007 |
{: .grid }
{% include markdown-link-references.md %}


---

// File: input/pagecontent/ValueSet-mcode-brachytherapy-technique-vs-intro.md



### Usage

Valid combinations of modality and technique are described in the modality and technique extension [RadiotherapyModalityAndTechnique].

### Code Descriptions

| **Common Usage Name**  | **Definition**|  **SNOMED CT Fully Specified Name**  | **SNOMED CT Concept ID**|
| ----------------- | ----------------------------- | ------------------------------ | ----------------------------- |
|  Intracavitary  |  Placement of a radiation source within an open cavity of the body.  |  Intracavitary brachytherapy (procedure)  | 384692006 |
|  Intracavitary, Intensity Modulated |  A technique of brachytherapy that dynamically directs the radiation into the tumours and away from healthy tissue, for example, by incorporation of metallic shields inside brachytherapy applicators.  |  Intensity modulated intracavitary brachytherapy (procedure) | 1156382005 |
| Interstitial  | Placement of a radiation source into tissue. | Interstitial brachytherapy (procedure)   | 113120007 |
| Intravascular | Placement of a radiation source into a blood vessel or blood vascular system or vascular injection of radiopharmaceutical.  | Intravascular brachytherapy (procedure)   | 1156383000|
|  Intraluminal | Placement of a radiation source into a lumen, usually understood to mean the gastrointestinal, esophageal, endobrochial, or less commonly, within the bile duct or urinary bladder.  | Intraluminal brachytherapy (procedure)  | 384691004 |
|  Intraoperative Radiation Therapy | A radiation treatment administered during surgery.   | Radiotherapy - intraoperative control (procedure)  | 168524008  |
|  Surface | Use of a radiation source to deliver dose to the surface of a target (e.g., skin or eye).   | Surface brachytherapy (procedure)   | 14473006 |
|   Oral | Delivery of radiopharmaceutical by oral intake. | Oral radionuclide therapy (procedure)   | 16560241000119104  |
{: .grid }
{% include markdown-link-references.md %}


---

// File: input/pagecontent/ValueSet-mcode-cancer-disease-status-evidence-type-vs-intro.md


### Usage

This is a large valueset built from the descendants of 7 high-level SNOMED CT codes.  It is recommended that any system that allows for selection of values from this value set include *at least* the 7 codes from which the value set is intensionally constructed.


---

// File: input/pagecontent/ValueSet-mcode-cancer-stage-vs-intro.md

### Usage

This value set contains codes representing the result of staging assessments for many staging methods and staging systems. It contains values of the stage or category to be used in the `Observation.valueCodeableConcept` element.

---

// File: input/pagecontent/ValueSet-mcode-cancer-staging-method-vs-intro.md

### Usage

The codes in this value set represent a variety of different cancer staging systems. The codes will appear in the `Observation.method` element of resources representing staging information.

---

// File: input/pagecontent/ValueSet-mcode-cancer-staging-type-vs-intro.md

### Usage

This value set is used in conjunction with the [CancerStage] profile. The codes identify the observable associated with the resource and includes tumor stage observables from the SNOMED CT observables hierarchy. The values from this value set appear in the `Observation.code` element.

When staging with a TNM-based system, the more specific profiles [TNMStageGroup], [TNMPrimaryTumorCategory], [TNMRegionalNodesCategory], and [TNMDistantMetastasesCategory] should be used.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/ValueSet-mcode-deauville-scale-vs-intro.md

### Usage
The following information from [this article](https://radiopaedia.org/articles/deauville-five-point-scale?lang=us) describes the values. The scale ranges from 1 to 5, where 1 is best and 5 is the worst. Each lesion is rated independently:

* **1:** There was no uptake or no residual uptake (when used interim) 
* **2:** There was slight uptake, but equal to or below blood pool (mediastinum) 
* **3:** There was uptake above mediastinal, but below or equal to uptake in the liver
* **4:** There was uptake slightly to moderately higher than liver
* **5:** There was markedly increased uptake or any new lesion (on response evaluation)

More information about the Deauville Scale can also be found in the [NCI Thesaurus](https://ncit.nci.nih.gov/ncitbrowser/pages/concept_details.jsf?dictionary=NCI_Thesaurus&version=24.07e&code=C99750).

---

// File: input/pagecontent/ValueSet-mcode-history-metastatic-malignant-neoplasm-vs-intro.md

### Usage

This value set contains codes representing an Observation of a history of metastatic cancer. The codes in this value set appear in the `Observation.code` element.

---

// File: input/pagecontent/ValueSet-mcode-history-of-metastatic-malignant-neoplasm-vs-intro.md

### Usage

This value set contains codes representing history of metastatic cancer.

The code SNOMED-CT code `1287652008` History of metastatic cancer (situation) should only be used if the site of metastasis is unknown.

---

// File: input/pagecontent/ValueSet-mcode-neuroblastoma-INRGSS-value-vs-intro.md

### Usage
The following information from [this article](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2650389/) describes the values.

The INRGSS divides neuroblastomas into 4 stages:
* **Stage L1:** Localized tumor not involving vital structures as defined by the list of image-defined risk factors and confined to one body compartment
* **Stage L2:** Locoregional tumor with presence of one or more image-defined risk factors
* **Stage M:** Distant metastatic disease (except stage MS)
* **Stage MS:** Metastatic disease in children younger than 18 months with metastases confined to skin, liver, and/or bone marrow


---

// File: input/pagecontent/ValueSet-mcode-neuroblastoma-inss-value-vs-intro.md

### Usage
The following information from [the American Cancer Society](https://www.cancer.org/cancer/types/neuroblastoma/detection-diagnosis-staging/staging.html) describes the values.

* **Stage 1:** The cancer is still in the area where it started. It is on one side of the body (right or left). All visible tumor has been removed completely by surgery (although looking at the tumor’s edges under the microscope after surgery may show some cancer cells). Lymph nodes near the tumor are free of cancer (although nodes enclosed within the tumor may contain neuroblastoma cells).
* **Stage 2A:** The cancer is still in the area where it started and on one side of the body, but not all of the visible tumor could be removed by surgery. Lymph nodes near the tumor are free of cancer (although nodes enclosed within the tumor may contain neuroblastoma cells).
* **Stage 2B:** The cancer is on one side of the body, and it may or may not have been removed completely by surgery. Nearby lymph nodes outside the tumor contain neuroblastoma cells, but the cancer has not spread to lymph nodes on the other side of the body or elsewhere.
* **Stage 3:** The cancer has not spread to distant parts of the body, but one of the following is true: The cancer can't be removed completely by surgery, and it has crossed the midline (defined as the spine) to the other side of the body. It may or may not have spread to nearby lymph nodes; the cancer is still in the area where it started and is on one side of the body. It has spread to lymph nodes that are relatively nearby but on the other side of the body; the cancer is in the middle of the body and is growing toward both sides (either directly or by spreading to nearby lymph nodes).
* **Stage 4:** The cancer has spread to distant parts of the body such as distant lymph nodes, bones, liver, skin, bone marrow, or other organs (but the child does not meet the criteria for stage 4S).
* **Stage 4S (also called “special” neuroblastoma):** The child is younger than 1 year old. The cancer is on one side of the body. It might have spread to lymph nodes on the same side of the body but not to nodes on the other side. The neuroblastoma has spread to the liver, skin, and/or the bone marrow. However, no more than 10% of marrow cells are cancer cells, and imaging tests such as an MIBG scan do not show cancer in the bone marrow.


---

// File: input/pagecontent/ValueSet-mcode-radiotherapy-treatment-location-qualifier-vs-intro.md

### Background

The codes and qualifiers for Radiotherapy Treatment Locations correspond to body structures defined in [AAPM Task Group 263 Final Report][TG263]], but are drawn from SNOMED CT (SCT).

### Usage

To prevent a combinatorial explosion of codes, and to describe each treatment location uniquely, these qualifiers are used in conjunction with codes taken from the [Radiotherapy Treatment Location Value Set][RadiotherapyTreatmentLocationVS], to specify a body location. For example, to specify the lower lobe of right lung, the code for lobe of lung structure (SCT#31094006) would be qualified with the codes lower (SCT#261122009) and right (SCT#24028007).

The content of this value set and the associated [Radiotherapy Treatment Location Value Set][RadiotherapyTreatmentLocationVS] supports expression of all of the anatomical concepts in the American Association of Physicists in Medicine (AAPM) [Task Group 263 report on Standardizing Nomenclatures in Radiation Oncology][TG263]]. The mapping from AAPM TG263 concepts to SNOMED CT codes and qualifiers can be found in this [spreadsheet](TG263_Nomenclature_to_SNOMEDCT_Codes_and_Qualifiers.xlsx), as well as in this [concept map][TG263CM].

{% include markdown-link-references.md %}


---

// File: input/pagecontent/ValueSet-mcode-radiotherapy-treatment-location-vs-intro.md

### Background

Codes correspond to body structures defined in [AAPM Task Group 263 Final Report][TG263], but are drawn from SNOMED CT (SCT). The body structure terms do not, however, include laterality or any other qualifier (see [Usage](#usage)).

### Usage

To prevent a combinatorial explosion of codes, and to describe each treatment location uniquely, the body structure codes may be used in conjunction with qualifiers taken from the [Radiotherapy Treatment Location Qualifier Value Set][RadiotherapyTreatmentLocationQualifierVS] and [LateralityQualifierVS], when necessary. For example, to specify the lower lobe of right lung, the code for lobe of lung structure (SCT#31094006) would be qualified with the codes lower (SCT#261122009) and right (SCT#24028007).

The content of this value set and the associated [Radiotherapy Treatment Location Qualifier Value Set][RadiotherapyTreatmentLocationQualifierVS] supports expression of all of the anatomical concepts in the American Association of Physicists in Medicine (AAPM) [Task Group 263 report on Standardizing Nomenclatures in Radiation Oncology][TG263].   The mapping from AAPM TG263 concepts to SNOMED CT codes and qualifiers can be found in this [spreadsheet](TG263_Nomenclature_to_SNOMEDCT_Codes_and_Qualifiers.xlsx), as well as in this [concept map][TG263CM].

{% include markdown-link-references.md %}


---

// File: input/pagecontent/ValueSet-mcode-rhabdomyosarcoma-assessment-vs-intro.md

### Usage
[This article](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8976559/) describes the different risk assessment values.

---

// File: input/pagecontent/ValueSet-mcode-teleradiotherapy-modality-vs-intro.md

### Usage

Valid combinations of modality and technique are described in the modality and technique extension [RadiotherapyModalityAndTechnique]

### Code Descriptions

| **Common Usage Name**  | **Definition**|  **SNOMED CT Fully Specified Name**  | **SNOMED CT Concept ID**|
| ----------------- | ----------------------------- | ------------------------------ | ----------------------------- |
|  Proton |  Proton Beam Radiation Therapy.  |  Teleradiotherapy protons (procedure)  | 10611004 |
|  Electron  |  Electron Beam Radiation Therapy  |  Teleradiotherapy using electrons (procedure) | 45643008 |
| Neutron   | Neutron Beam Radiation Therapy.   | Teleradiotherapy neutrons (procedure)   | 80347004 |
| Carbon Ion  | Carbon Ion Beam Radiation Therapy.   |External beam radiation therapy using carbon ions (procedure)  | 1156505006|
|  Photon | Photon Beam Radiation Therapy.   | External beam radiation therapy using photons (procedure)  | 1156506007 |
{: .grid }


---

// File: input/pagecontent/ValueSet-mcode-teleradiotherapy-technique-vs-intro.md

### Usage

The following rules apply to this value set:

1. Select the most specific term appropriate for a given situation.
2. Select the term that best describes the technique used, even if that term does not capture every detail of the technique. For example, image-guided intensity-modulated radiation therapy should be reported as IMRT because that category most closely aligns with the actual technique.

Valid combinations of modality and technique are described in the modality and technique extension [RadiotherapyModalityAndTechnique].

### Code Descriptions

| **Common Usage Name**  | **Definition**|  **SNOMED CT Fully Specified Name**  | **SNOMED CT Concept ID**|
| ----------------- | ----------------------------- | ------------------------------ | ----------------------------- |
|  Two Dimensional Planning (2D)  |  Dose calculated without projection onto 3D imaging and delivered without 3D techniques.  |  Two dimensional external beam radiation therapy (procedure)  | 1156526006 |
|  Three Dimensional Planning (3D)  |  Dose calculated with projection onto 3D imaging (e.g. CT or MR) delivered with either static aperture (Collimator, SRS Cone, Static MLC, blocks, etc) or non-IMRT/VMAT dynamic apertures (e.g. field-in-field, dynamic arc) using either single gantry angles or arcs.  |  Three dimensional external beam radiation therapy  | 1162782007 |
| Intensity Modulated Radiation Therapy (IMRT)   | A technique of high-precision radiotherapy that uses computer control to deliver precise radiation doses that conform to a three-dimensional (3-D) shape by modulating the intensity of the radiation beam across the areas irradiated by each of the beams, with patterns designed under computer control to optimize the dose distribution according to a set of limits specified for target, organ at risk, and other structures.   | Intensity modulated radiation therapy (procedure)   | 441799006 |
| Intraoperative Radiation Therapy (IORT)   | A radiation treatment administered during surgery.   | Radiotherapy - intraoperative control (procedure)   | 168524008 |
|  Neutron Capture Therapy (NCT)  | A technique where the patient is injected with a tumor-localizing drug containing a neutron absorber (boron-10), and then radiated with neutrons, which are captured, releasing high-energy alpha particles.   | Neutron capture therapy (procedure)  | 169317000 |
|  Particle Passive Scattering (PPS)  | In proton or carbon ion beam therapy, a technique where the beam is spread out to larger dimension using a scattering device such as lead foil.   | External beam radiation therapy using particle passive scattering technique (procedure)   | 1156529004 |
|  Particle Spot Scanning (PSS)   | In proton or carbon ion beam therapy, a technique where accelerated particles are focused into a small beam and then moved (scanned) over target regions in the patient.   | External beam radiation therapy using particle spot scanning technique (procedure)   | 1156528007  |
|  Volumetric Modulated Arc Therapy (VMAT)   | A type of IMRT technique where the radiotherapy machine rotates around the patient, radiating the target in a complete three-dimensional manner with variable speed and/or dose rate.   | Volumetric Modulated Arc Therapy (procedure)   | 1156530009   |
{: .grid }


---

// File: input/pagecontent/ValueSet-mcode-tnm-distant-metastases-category-vs-intro.md

### Usage

In AJCC terminology, examples of M categories include 'cM0', denoting there is no evidence of distant metastases, and 'pM1', an indication that the cancer has metastasized. Please note allowable M categories may vary between clinical, pathologic, and other classifications, and the M category prefix must align with Observation.code. The full set of allowable clinical, pathologic, and other (recurrence/retreatment/autopsy) M categories, along with current descriptions, can be accessed through the AJCC Staging Manual and any applicable updates and corrections, as well as the AJCC API.


---

// File: input/pagecontent/ValueSet-mcode-tnm-distant-metastases-staging-type-vs-intro.md

### Usage

The codes in this value set designate the staging observation as either clinical, pathological, or other. In AJCC terminology, clinical staging is represented by "c" or "yc" prefix, referring to staging done before first treatment, or staging done post-therapy or post-neoadjuvant therapy but before surgery. Pathological classification, represented by "p" or "yp" prefix, is used for patients if surgery is the first definitive therapy, or after neoadjuvant therapy and planned post-neoadjuvant therapy surgery. The "Other" code is meant to include staging at the time of recurrence or progression ("r" prefix), or for cancers not previously recognized and found as an incidental finding at autopsy ("a" prefix). The codes in this value set appear in the `Observation.code` element.

---

// File: input/pagecontent/ValueSet-mcode-tnm-primary-tumor-category-vs-intro.md

### Usage

Using AJCC terminology, examples of T categories include 'ycTX', used for post-therapy clinical staging if the tumor primary tumor cannot be evaluated, 'pT0', denoting there is no evidence of a primary tumor, and 'pTis', referencing carcinoma in situ (with some cancer-specific exceptions). Other T categories refer to increasing size of the primary tumor. Please note allowable T categories may vary between clinical, pathologic, and other classifications, and the T category prefix must align with Observation.code. The full set of allowable clinical, pathologic, and other (recurrence/retreatment/autopsy) T categories, along with current descriptions, can be accessed through the AJCC Staging Manual and any applicable updates and corrections, as well as the AJCC API.


---

// File: input/pagecontent/ValueSet-mcode-tnm-primary-tumor-staging-type-vs-intro.md

### Usage

The codes in this value set designate the staging observation as either clinical, pathological, or other. In AJCC terminology, clinical staging is represented by "c" or "yc" prefix, referring to staging done before first treatment, or staging done post-therapy or post-neoadjuvant therapy but before surgery. Pathological classification, represented by "p" or "yp" prefix, is used for patients if surgery is the first definitive therapy, or after neoadjuvant therapy and planned post-neoadjuvant therapy surgery. The "Other" code is meant to include staging at the time of recurrence or progression ("r" prefix), or for cancers not previously recognized and found as an incidental finding at autopsy ("a" prefix). The codes in this value set appear in the `Observation.code` element.

---

// File: input/pagecontent/ValueSet-mcode-tnm-regional-nodes-category-vs-intro.md

### Usage

In AJCC terminology, examples of N categories include 'ycN0', for post-therapy clinical staging indicating no evidence of lymph node involvement, and 'pN1', indicating regional lymph node involvement to a small extent, with specific thresholds for the lymph node groups and number of lymph nodes involved. Other N categories refer to increasing lymph node involvement. Please note allowable N categories may vary between clinical, pathologic, and other classifications, and the N category prefix must align with Observation.code. The full set of allowable clinical, pathologic, and other (recurrence/retreatment/autopsy) N categories, along with current descriptions, can be accessed through the AJCC Staging Manual and any applicable updates and corrections, as well as the AJCC API.

---

// File: input/pagecontent/ValueSet-mcode-tnm-regional-nodes-staging-type-vs-intro.md

### Usage

The codes in this value set designate the staging observation as either clinical, pathological, or other. In AJCC terminology, clinical staging is represented by "c" or "yc" prefix, referring to staging done before first treatment, or staging done post-therapy or post-neoadjuvant therapy but before surgery. Pathological classification, represented by "p" or "yp" prefix, is used for patients if surgery is the first definitive therapy, or after neoadjuvant therapy and planned post-neoadjuvant therapy surgery. The "Other" code is meant to include staging at the time of recurrence or progression ("r" prefix), or for cancers not previously recognized and found as an incidental finding at autopsy ("a" prefix). The values from this value set appear in the `Observation.code` element.


---

// File: input/pagecontent/ValueSet-mcode-tnm-stage-group-staging-type-vs-intro.md

### Usage

This value set is used in conjunction with the [TNMStageGroup] profile and contains values that appear in the `Observation.code` element. The codes identify the observable associated with the TNM Stage Group resource, specifically, whether the reported value represents clinical, pathological, or other type of staging. 

{% include markdown-link-references.md %}


---

// File: input/pagecontent/ValueSet-mcode-tnm-stage-group-vs-intro.md

### Usage

For AJCC terminology, examples of stage groups include 'Stage 0' and 'Stage IIA'. The full set of stage groups, as well rules on how to assign a stage group, can be accessed through the AJCC Staging Manual and any applicable updates and corrections, as well as the AJCC API.


---

// File: input/pagecontent/ValueSet-mcode-tnm-staging-method-vs-intro.md

### Usage

The codes in this value set represent different editions of AJCC TNM staging systems. The codes will appear in the `Observation.method` element of resources representing stage group and the separate T, M, and N categories. 


---

// File: input/pagecontent/ValueSet-mcode-treatment-intent-vs-intro.md

### Usage

Use these terms with the following definitions in mind:

* **Curative** is defined as any treatment meant to reduce or control a disease process, even if a 'cure' is not anticipated.
* **Palliative** treatments are intended to improve the quality of life, typically without concurrent curative treatments. Examples are pain medications or surgery to reduce the size (but not fully remove) a tumor close to the spine that could impact mobility. Palliative care most often refers specifically to end-of-life care.
* **Supportive** treatments do not treat or improve the underlying condition, but could extend life or be used in conjunction with curative treatments to improve patient comfort. They could be preventive drugs administered to preemptively manage side effects or toxicities from an anti-neoplastic (e.g.: G-CSFs to manage neutropenia, epoetins for anemia, dexamethasone for delayed nausea and vomiting, etc.). Supportive drugs could also be chemoprotective, or chemo-enhancing, and in some cases even included as part of the regimen even though the drug in itself is not an antineoplastic (e.g.: leucovorin is not an antineoplastic but an chemoprotectant oftentimes combined with the antineoplastics 5-FU and methotrexate).
* **Diagnostic** refers to procedures carried out to identify the nature of an illness
* **Preventive** refers to treatments designed to keep an illness or harm from occurring.
* **Screening** relates to procedures carried out to detect disease in individuals who do not have any symptoms of disease.
* **Guidance** relates to education and counselling, such as smoking cessation programs.
* **Forensic** in the medical context refers to procedures carried out to determine the cause of death.

These values appear in SNOMED CT under "Intents (nature of procedure values)" (code 363675004). There are certain terms under the same heading that were **not** included in this value set:

* **Prophylaxis** is essentially synonymous with preventive. See <https://en.wikipedia.org/wiki/Preventive_healthcare> for the distinction between these terms.
* **Neo-adjuvant** deals with the timing of a treatment relative to other treatments, not the intent. SNOMED's classification of this term is questionable.
* **Adjuvant** also relates to the relative timing of a treatment. Again, SNOMED's classification of this term is questionable.
* **Adjunct** refers to a treatment accompanying or in support of another therapy. This is a situation or circumstance, not an intent.


---

// File: input/pagecontent/ValueSet-mcode-tumor-size-method-vs-intro.md

### Usage

There are 3 broad categories of tumor size measurement methods:

1. Pathology
    - Macroscopic size from pathology report is represented by SCT `787377000` (\"Gross examination and sampling of tissue specimen (procedure)\")
    - Microscopic size from pathology report is represented by SCT `104157003` (\"Light microscopy (procedure)\")
2. Physical exam, represented by SCT `5880005` (\"Physical examination procedure (procedure)\")
3. Diagnostic imaging
    - Imaging modalities commonly used for tumor sizing
       - X-ray represented by SCT `363680008` (\"Physical examination procedure (procedure)\")
       - Ultrasound represented by SCT `16310003` (\"Diagnostic ultrasonography (procedure)\")
       - Magnetic Resonance Imaging (MRI) represented by SCT `113091000` (\"Magnetic resonance imaging (procedure)\")
       - Computerized axial tomography (CAT) represented by SCT `77477000` (\"Computerized axial tomography (procedure)\")
       - Positron emission tomograph (PET) represented by SCT `82918005` (\"Positron emission tomography (procedure)\")
    - Imaging modalities that are less commonly used for tumor sizing
        - Imaging represented by SCT `363679005` (\"Imaging (procedure)\")

        



---

// File: input/pagecontent/ValueSet-mcode-wilms-tumor-stage-value-vs-intro.md

### Usage
The following information [from NLM](https://www.ncbi.nlm.nih.gov/books/NBK442004/#_article-31369_s10_) describes the different stages.

* **Stage I** indicates the tumor was completely contained within the kidney without any breaks or spillage outside the renal capsule and no vascular invasion.
* **Stage II** would be a tumor that has grown outside the kidney to some degree, such as into surrounding fatty tissue. Usually, the tumor would be completely removable by surgery, and regional lymph nodes are negative.
* **Stage III** indicates a tumor which could not be completely removed surgically such as the following: 
    - Cancer has spread to the regional lymph nodes but not to more distant nodes, such as in the chest 
    - Cancer has grown into nearby vital structures so it could not be surgically removed completely 
    - Deposits of the tumor (tumor implants) are found in the peritoneum, or there are positive surgical margins
    - Cancer cells were accidentally “spilled” into the abdominal cavity during surgery
    - The tumor was removed in separate pieces surgically; such as one piece from the kidney and another from the adrenal gland 
    - A renal biopsy of the tumor was done before it was surgically removed
* **Stage IV** tumors are those that have spread through the vascular system to distant organs such as the lungs, liver, brain, or bones, or to distant lymph nodes.
* **Stage V** are those cases where both kidneys are involved with tumor at the time of initial diagnosis. Individual staging of each renal unit is needed as well.



---

// File: input/pagecontent/valuesets.md

### Value Sets Defined by mCODE

The following value sets are defined in this implementation guide:

* [BenignUncertainNeoplasmBrainCNSDisorderVS]
* [BinetStageValueVS]
* [BodyLocationAndLateralityQualifierVS]
* [BodyLocationQualifierVS]
* [BrachytherapyPermanentSeedsTechniqueVS]
* [BrachytherapyLowDoseRateTemporaryTechniqueVS]
* [BrachytherapyPulsedDoseRateTechniqueVS]
* [BrachytherapyRadiopharmaceuticalTechniqueVS]
* [BrachytherapyHighDoseRateElectronicTechniqueVS]
* [BrachytherapyHighDoseRateTechniqueVS]
* [BrachytherapyModalityVS]
* [BrachytherapyTechniqueVS]
* [BreslowDepthStageValueVS]
* [CancerBodyLocationVS]
* [CancerDiseaseStatusEvidenceTypeVS]
* [CancerDisorderVS]
* [CancerRelatedSurgicalProcedureVS]
* [CancerStageValueVS]
* [CancerStagingMethodVS]
* [CancerStageTypeVS]
* [CarcinomaInSituDisorderVS]
* [ClarkLevelValueVS]  
* [ClinOrPathModifierVS]
* [ConditionStatusTrendVS]
* [CytologicEvidenceOfMalignancyVS]
* [FIGOStagingMethodVS]
* [FIGOStageValueVS]
* [GleasonGradeGroupValueVS]
* [HistologyMorphologyBehaviorVS]
* [HistoryOfMetastaticMalignantNeoplasmVS]
* [HumanSpecimenTypeVS]
* [HypereosinophilicSyndromeDisorderVS]
* [LateralityQualifierVS]
* [LymphomaStagingMethodVS]
* [LymphomaStageValueVS]
* [LymphomaStageValueModifierVS]
* [MelanomaInSituDisorderVS]
* [PrimaryCancerDisorderVS]
* [PrimaryMalignantNeoplasmDisorderVS]
* [ProcedureIntentVS]
* [RadiotherapyModalityVS]
* [RadiotherapyTechniqueVS]
* [RadiotherapyTreatmentLocationQualifierVS]
* [RadiotherapyTreatmentLocationVS]
* [RadiotherapyVolumeTypeVS]
* [RaiStagingMethodVS]
* [RaiStageValueVS]
* [SecondaryCancerDisorderVS]
* [TeleradiotherapyCarbonIonBeamTechniqueVS]
* [TeleradiotherapyElectronBeamTechniqueVS]
* [TeleradiotherapyModalityVS]
* [TeleradiotherapyNeutronTechniqueVS]
* [TeleradiotherapyPhotonBeamTechniqueVS]
* [TeleradiotherapyProtonBeamTechniqueVS]
* [TeleradiotherapyTechniqueVS]
* [TNMDistantMetastasesCategoryVS]
* [TNMDistantMetastasesCategoryMaxVS]
* [TNMDistantMetastasesStagingTypeVS]
* [TNMDistantMetastasesStagingTypeMaxVS]
* [TNMPrimaryTumorCategoryVS]
* [TNMPrimaryTumorCategoryMaxVS]
* [TNMPrimaryTumorStagingTypeVS]
* [TNMPrimaryTumorStagingTypeMaxVS]
* [TNMRegionalNodesCategoryVS]
* [TNMRegionalNodesCategoryMaxVS]
* [TNMRegionalNodesStagingTypeVS]
* [TNMRegionalNodesStagingTypeMaxVS]
* [TNMStageGroupVS]
* [TNMStageGroupMaxVS]
* [TNMStageGroupStagingTypeVS]
* [TNMStageGroupStagingTypeMaxVS]
* [TNMStagingMethodVS]
* [TreatmentTerminationReasonVS]
* [TumorMarkerTestVS]
* [TumorSizeMethodVS]
* [TumorSizeUnitsVS]

The following draft (maturity level 0) value sets are defined in this implementation guide:

* [ALLRiskAssessmentVS]
* [CancerRiskAssessmentTypeVS]
* [DeauvilleScaleVS]
* [HistologicBehaviorAndTypeVS]
* [HistologicGradeVS]
* [HistologicGradingSystemVS]
* [LanskyPlayPerformanceStatusVS]
* [LymphomaStageBulkyModifierVS]
* [NeuroblastomaINSSValueVS]
* [NeuroblastomaINRGSSValueVS]
* [NormalizationBasisVS]
* [RhabdomyosarcomaClinicalGroupValueVS]
* [RhabdomyosarcomaAssessmentValueVS]
* [RiskAssessmentValueVS]
* [WilmsTumorBodySiteVS]
* [WilmsTumorStageValueVS]

### External Value Sets Used in mCODE

* [ECOG performance status](https://loinc.org/LL529-9)
* [Karnofsky performance status](https://loinc.org/LL4986-7)
* [Medication Clinical Drug (RxNorm)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion)

{% include markdown-link-references.md %}


---

// File: input/pagecontent/versions.md

<div xmlns="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://hl7.org/fhir ../../input-cache/schemas-r5/fhir-single.xsd">

### Maturity

For more information, see https://confluence.hl7.org/display/FHIR/FHIR+Maturity+Model.

</div>


---

// File: input/includes/markdown-link-references.md

<!-- Temporary changes to fix formatting for changelog -->
<style>
  ul.new-content {
    padding-left: 25px !important;
  }
</style>

<!-- links to all mCODE resources are generated by Sushi and included here. -->
{% include fsh-link-references.md %}

<!-- AAPM -->
[TG263]: https://www.aapm.org/pubs/reports/RPT_263.pdf

<!-- US Core -->
[USCoreMedicationRequest]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-medicationrequest.html
[USCoreLaboratoryResultObservation]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-lab.html
[USCoreClinicalTestObservation]: {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-observation-clinical-test.html
[USCorePatient]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-patient.html
[USCoreConditionProblemHealthConcern]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-condition-problems-health-concerns.html
[USCoreProcedure]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-procedure.html
[USCorePractitioner]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-practitioner.html
[USCoreSmokingStatus]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-smokingstatus.html
[USCoreDiagnosticReport]:  {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-diagnosticreport-lab.html
[USCoreOrganization]:   {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-organization.html
[USCoreCareTeam]:   {{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-careteam.html


<!-- R4 -->
[CapabilityStatement]: StructureDefinition-CapabilityStatement.html
[R4Observation]: http://hl7.org/fhir/R4/observation.html
[R4FamilyMemberHistory]: http://hl7.org/fhir/R4/familymemberhistory.html
[R4MedicationAdministration]: http://hl7.org/fhir/R4/medicationadministration.html
[R4Specimen]: http://hl7.org/fhir/R4/specimen.html
[R4Bundle]: http://hl7.org/fhir/R4/bundle.html
[R4ServiceRequest]: http://hl7.org/fhir/R4/servicerequest.html

<!-- Genomics -->
[Variant]: http://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-variant.html
[TherapeuticImplication]: http://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-therapeutic-implication.html
[DiagnosticImplication]: http://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-diagnostic-implication.html
[MSI]: http://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-msi.html
[TMB]: http://hl7.org/fhir/uv/genomics-reporting/STU2/StructureDefinition-tmb.html

<!-- Other links -->
[in-scope patient]: conformance-patients.html
[in-scope patients]: conformance-patients.html

---

// File: input/pagecontent/examples_genomics.md

### [Diagnostic Implications][DiagnosticImplication]

* [Loss of function - BAP1](Observation-gx-genomic-diagnostic-implication-bap1.html)
* [Clinical Significance of VUS - POF1B](Observation-gx-genomic-diagnostic-implication-pof1b.html)
* [Clinical Significance of VUS - POLRMT](Observation-gx-genomic-diagnostic-implication-polrmt.html)

### [Genomics Data Bundle][R4Bundle]

* [Patient bundle containing genomics test data and related resources](Bundle-gx-genomic-bundle-adam-anyperson.html)

### [Genomics Report][GenomicsReport]

* [Genomics Report](DiagnosticReport-gx-genomics-report-adam-anyperson.html)

### [Genomic Variants][GenomicVariant]

* [Absence of a notable variants - KIT and BRAF](Observation-gx-genomic-variant-pertinent-negative-nras-kit-braf.html)	
* [Genomic Variant - BAP1](Observation-gx-genomic-variant-somatic-bap1-indel.html)	
* [Genomic Variant - CDKN2A](Observation-gx-genomic-variant-somatic-cdkn2a-cnv.html)	
* [Genomic Variant - CDKN2B](Observation-gx-genomic-variant-somatic-cdkn2b-cnv.html)	
* [Genomic Variant - KDM5D](Observation-gx-genomic-variant-somatic-kdm5d.html)	
* [Genomic Variant - MTAP](Observation-gx-genomic-variant-somatic-mtap.html)	
* [Genomic Variant - MYCN](Observation-gx-genomic-variant-somatic-mycn.html)	
* [Genomic Variant - POF1B](Observation-gx-genomic-variant-somatic-pof1b.html)	
* [Genomic Variant - POLRMT](Observation-gx-genomic-variant-somatic-polrmt.html)
* [Genomic Variant gene fusion event](Observation-gx-genomic-variant-fusion-met-alk.html)

### [Microsatellite Instability][MSI]

* [Microsatellite Instability](Observation-gx-genomic-msi.html)

### [Specimens for Genomic Testing][HumanSpecimen]

* [Germline specimen for tumor normal test](Specimen-gx-genomic-specimen-tumornormal-normal.html)
* [Tumor specimen for tumor normal test](Specimen-gx-genomic-specimen-tumornormal-tumor.html)

### [Organization][USCoreOrganization]

* [Example organization](Organization-gx-us-core-organization-gensop-inc.html)

### [Patient][CancerPatient]

* [Patient for genomics examples](Patient-gx-cancer-patient-adam-anyperson.html)

### [Practitioner][USCorePractitioner]

* [Interpreter of the next-generation sequencing (NGS) test](Practitioner-gx-practitioner-test-pathologist.html)

### [Service Request][R4ServiceRequest]

* [Order for tumor-normal test](ServiceRequest-gx-order-tumornormal-gensop-inc.html)

### [Therapeutic Implications][TherapeuticImplication]

* [Therapeutic Implications-alectinib](Observation-gx-genomic-therapeutic-implication-alectinib.html)	
* [Therapeutic Implications-brigatinib](Observation-gx-genomic-therapeutic-implication-brigatinib.html)	
* [Therapeutic Implications-ceritinib](Observation-gx-genomic-therapeutic-implication-ceritinib.html)	
* [Therapeutic Implications-crizotinib](Observation-gx-genomic-therapeutic-implication-crizotinib.html)	
* [Therapeutic Implications-lorlatinib](Observation-gx-genomic-therapeutic-implication-lorlatinib.html)

### [Tumor Mutation Burden][TMB]

* [Tumor Mutation Burden](Observation-gx-genomic-tmb.html)


{% include markdown-link-references.md %}

---

// File: input/pagecontent/examples_pediatric.md

<style>
  a code {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif !important;

    text-decoration: underline;
    text-decoration-color: #0088f9;
    background-color: #f4faff;
  }
</style>

In addition to providing examples of mCODE profiles, this extended example demonstrates how to represent a clinically realistic scenario of a pediatric cancer patient.

* When information in the scenario does not map on to mCODE profiles, we provide examples using [USCore](http://hl7.org/fhir/us/core/index.html) or standard FHIR resources.
* We condense some repeated patterns. For example, we only show one example of MedicationAdministration when in reality, there could be multiple cycles, the only difference being the day of the administration.

### Patient description

<div class="well" style="padding: 0.5em;background-color: white;border: 1px solid #0088f9;">
<strong>Note:</strong> patient and clinical data in the narrative example below are linked to the relevant FHIR examples using <a href="#"><code style="background-color: #f5f2f0; color: #000;">this styling</code></a>.
</div>

[`Patient Brian L.`](Patient-cancer-patient-brian-l.html) is a 3 year old non-Hispanic Asian male with a past medical history of an [`atrial septal defect`](Condition-us-core-condition-atrial-septal-defect-brian-l.html)  that was repaired with surgery. His family history includes a [`grandmother with breast cancer at age 55`](FamilyMemberHistory-family-member-history-grandmother-brian-l.html).

During January 2024, Brian starts to complain of pain in his knees and his parents notice abnormal bruising. His parents take him to the pediatrician, who orders a complete blood count. The test revealed [`abnormal blood counts`](DiagnosticReport-us-core-diagnosticreport-cbc-brian-l.html): low hemoglobin (6.7 g/dL), low hematocrit (22.3%), and high white blood cells (88.5 10*3/uL). The pediatrician referred the patient to a hospital for further workup. A [`bone marrow aspiration`](Procedure-us-core-procedure-bone-marrow-aspiration-brian-l.html) and [`biopsy`](Procedure-us-core-procedure-bone-marrow-biopsy-brian-l.html) were performed, which showed a [`predominance of immature cells`](Observation-bone-marrow-aspirate-result-brian-l.html), indicating leukemia. To further characterize the cancer, [`immunophenotyping occurred`](Observation-immunophenotype-brian-l.html), which identified the leukemia as [`B-cell acute lymphoblastic leukemia`](Condition-primary-cancer-condition-brian-l.html). 

After the initial diagnosis, genetic testing was performed (karyotyping), revealing a [`chromosomal translocation`](Observation-gx-genomic-variant-fusion-ETV6-RUNX1-brian-l.html) between chromosomes 12 and 21. To understand if the cancer spread to the brain or spinal cord, a [`lumbar puncture`](Procedure-us-core-procedure-lumbar-puncture-brian-l.html) was performed, revealing [`negative results`](Observation-us-core-lumbar-puncture-result-brian-l.html).

Treatment options were discussed between the patient's family and the medical oncologist. With a [`Lansky Play Performance status of 80`](Observation-lansky-performance-status-brian-l.html), the family agreed to receive a 28-day treatment regimen of [`cyclophosphamide`](MedicationRequest-cancer-related-medication-request-cyclophosphamide-brian-l.html) (750 mg/m² IV once per day on days 1 & 8), [`idarubicin`](MedicationRequest-cancer-related-medication-request-idarubicin-brian-l.html) (9 mg/m² IV once per day on days 1, 2, 3, 8), [`vincristine`](MedicationRequest-cancer-related-medication-request-vincristine-brian-l.html) (2 mg IV once per day on days 1, 8, 15, 22), and [`prednisone`](MedicationRequest-cancer-related-medication-request-prednisone-brian-l.html) (60 mg/m²/day IV or PO on days 1 to 7, 15 to 21). The medication dosage is normalized based on Brian's [`body surface area`](Observation-body-surface-area-brian-l.html) of 0.59 m². After four weeks, a repeat bone marrow aspiration and blood count was performed, showing no evidence of persistent leukemia and normal blood counts. Due to the [`improved cancer disease status`](Observation-cancer-disease-status-improved-brian-l.html), age, test results, and type of leukemia, Brian was designated as [`standard risk`](Observation-all-risk-assessment-standard-brian-l.html) and then began consolidation therapy.

### FHIR instances from mCODE elements

| **Instance Description** | **mCODE Profile** |
| ------------ | ---------------- |
| [`Cancer Patient: Brian L`](Patient-cancer-patient-brian-l.html)|[CancerPatient] |
| [`Cancer Diagnosis`](Condition-primary-cancer-condition-brian-l.html) | [PrimaryCancerCondition] |
| [`Genomic Variant: Chromosomal Translocation`](Observation-gx-genomic-variant-fusion-ETV6-RUNX1-brian-l.html) | [GenomicVariant] |
| [`Performance Status: Lansky`](Observation-lansky-performance-status-brian-l.html) | [LanskyPlayPerformanceStatus] |
| [`Medication Request: Cyclophosphamide`](MedicationRequest-cancer-related-medication-request-cyclophosphamide-brian-l.html) | [CancerRelatedMedicationRequest] | 
| [`Medication Request: Idarubicin`](MedicationRequest-cancer-related-medication-request-idarubicin-brian-l.html) | [CancerRelatedMedicationRequest] |  
| [`MedicationRequest: Vincristine`](MedicationRequest-cancer-related-medication-request-vincristine-brian-l.html) | [CancerRelatedMedicationRequest] | 
| [`MedicationRequest: Prednisone`](MedicationRequest-cancer-related-medication-request-prednisone-brian-l.html) | [CancerRelatedMedicationRequest] |
| [`Medication Administration: Cyclophosphamide`](MedicationAdministration-cancer-related-medication-admin-cyclophosphamide-brian-l.html) | [CancerRelatedMedicationAdministration] | 
| [`Medication Administration: Idarubicin`](MedicationAdministration-cancer-related-medication-admin-idarubicin-brian-l.html) | [CancerRelatedMedicationAdministration] |  
| [`MedicationAdministration: Vincristine`](MedicationAdministration-cancer-related-medication-admin-vincristine-brian-l.html) | [CancerRelatedMedicationAdministration] | 
| [`MedicationAdministration: Prednisone`](MedicationAdministration-cancer-related-medication-admin-prednisone-brian-l.html) | [CancerRelatedMedicationAdministration] |
| [`Body Surface Area`](Observation-body-surface-area-brian-l.html) | [BodySurfaceArea] |
| [`Cancer Disease Status: Condition Improving`](Observation-cancer-disease-status-improved-brian-l.html) | [CancerDiseaseStatus] |
| [`ALL Risk Assessment: Standard`](Observation-all-risk-assessment-standard-brian-l.html) | [ALLRiskAssessment] |
{: .grid }


### FHIR instances from _non_-mCODE elements

| **Instance Description**  | **Profile/Resource** |
| ------------ |  -------------- |
| [`Past Condition: Atrial Septal Defect`](Condition-us-core-condition-atrial-septal-defect-brian-l.html) | [USCoreConditionProblemHealthConcern] | 
| [`Grandmother With Breast Cancer`](FamilyMemberHistory-family-member-history-grandmother-brian-l.html) | [R4FamilyMemberHistory] | 
| [`Complete Blood Count: Abnormal Blood Counts`](DiagnosticReport-us-core-diagnosticreport-cbc-brian-l.html) | [USCoreDiagnosticReportLab] | 
| [`Bone Marrow Aspiration Procedure`](Procedure-us-core-procedure-bone-marrow-aspiration-brian-l.html) | [USCoreProcedure] |
| [`Bone Marrow Biopsy Procedure`](Procedure-us-core-procedure-bone-marrow-biopsy-brian-l.html) | [USCoreProcedure] |
| [`Bone Marrow Biopsy Results: Predominance of Immature Cells`](Observation-bone-marrow-biopsy-result-brian-l.html) | [USCoreObservationLab] |
| [`Bone Marrow Aspirate Results: Predominance of Immature Cells`](Observation-bone-marrow-aspirate-result-brian-l.html) | [USCoreObservationLab] |
| [`Immunophenotyping`](Observation-immunophenotype-brian-l.html) | [USCoreObservationLab] |
| [`Lumbar Puncture`](Procedure-us-core-procedure-lumbar-puncture-brian-l.html) | [USCoreProcedure] |  
| [`Lumbar Puncture Result: Negative`](Observation-us-core-lumbar-puncture-result-brian-l.html) | [USCoreObservationLab] |
| [`Blood Test Result: Hemoglobin`](Observation-hemoglobin-brian-l.html) | [USCoreObservationLab] |
| [`Blood Test Result: Hematocrit`](Observation-hematocrit-brian-l.html) | [USCoreObservationLab] |
| [`Blood Test Result: White Blood Cell`](Observation-white-blood-cell-brian-l.html) | [USCoreObservationLab] |
{: .grid }

{% include markdown-link-references.md %}

---

// File: input/pagecontent/examples.md

<style>
  a code {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif !important;

    text-decoration: underline;
    text-decoration-color: #0088f9;
    background-color: #f4faff;
  }
</style>

In addition to providing examples of mCODE profiles, this extended example demonstrates how to represent a clinically realistic scenario.

* When information in the scenario does not map on to mCODE profiles, we provide examples using [USCore](http://hl7.org/fhir/us/core/index.html) or standard FHIR resources.
* We condense some repeated patterns. For example, we only show one example of MedicationAdministration when in reality, there could be multiple cycles, the only difference being the day of the administration.

### Patient description

<div class="well" style="padding: 0.5em;background-color: white;border: 1px solid #0088f9;">
<strong>Note:</strong> patient and clinical data in the narrative example below are linked to the relevant FHIR examples using <a href="#"><code style="background-color: #f5f2f0; color: #000;">this styling</code></a>.
</div>

[`Patient Jenny M.`](Patient-cancer-patient-jenny-m.html) is a 55 year old non-Hispanic white female with a [`past medical history`](Observation-cancer-related-comorbidities-jenny-m.html) significant for [`depression`](Condition-us-core-condition-depression-jenny-m.html), a [`20-pack-year history of smoking`](Observation-observation-smoking-pack-years-jenny-m.html) (current smoker), [`anxiety`](Condition-us-core-condition-anxiety-jenny-m.html), and [`hypertension`](Condition-us-core-condition-hypertension-jenny-m.html). Her family history was significant for a [`maternal aunt with ovarian cancer at age 69`](FamilyMemberHistory-family-member-history-aunt-jenny-m.json.html), a [`sister with breast cancer at age 64`](FamilyMemberHistory-family-member-history-sister-jenny-m.html), and a[`deceased paternal uncle due to pancreatic cancer`](FamilyMemberHistory-family-member-history-uncle-jenny-m.html).

During a routine screening mammography in February 2018, an abnormality was detected as a possible mass and suspected breast cancer. The gynecologist performing the biopsy refers the patient to an oncologist for further workup. An ultrasound-guided biopsy was performed along with prognostic tumor marker tests with [`ER positive`](Observation-tumor-marker-test-er-jenny-m.html), [`PR negative`](Observation-tumor-marker-test-pr-jenny-m.html), and [`HER2 negative`](Observation-tumor-marker-test-her2-jenny-m.html). The patient is referred to an oncologist who clinically reviews the mammogram and tumor marker results, and clinical staged the [`cancer diagnosis`](Condition-primary-cancer-condition-jenny-m.html) as [`cT3`](Observation-tnm-clinical-primary-tumor-category-jenny-m.html)[`N0`](Observation-tnm-clinical-regional-nodes-category-jenny-m.html).

Genetic counseling ordered a [7 gene panel](https://www.invitae.com/en/physician/tests/50001/), and the [`panel results`](DiagnosticReport-genomics-report-jenny-m.html) revealed a [`pathogenic variant`](Observation-genomic-variant-jenny-m.html) [in PALB2 (`c.3549C>A`)](https://www.ncbi.nlm.nih.gov/clinvar/variation/128144/).[^1]

[^1]: For the purposes of this example, we are assuming that a single relevant variant was returned by the clinical genomics laboratory. In practice, genomics testing may return (many) more variants. The standards for representing genomics data are currently under development by the [HL7 Clinical Genomics Work Group](https://confluence.hl7.org/display/CGW/WorkGroup+Home). The expectation is that mCODE will adopt those standards when they are completed.

A [`partial mastectomy`](Procedure-cancer-related-surgical-procedure-jenny-m.html) was performed, revealing a 2.5 cm tumor with no [`lymph-vascular invasion`](Observation-us-core-observation-lab-tumor-invasion-jenny-m.html) and [`negative margins of excision`](Observation-us-core-observation-lab-tumor-margins-jenny-m.html). Three sentinel lymph nodes were excised and were [`negative for metastatic carcinoma`](Observation-us-core-observation-lab-sentinel-nodes-jenny-m.html).  The [`tumor specimen`](Specimen-tumor-specimen-left-breast-jenny-m.html) was sent to the pathologist. The [`pathology report`](DiagnosticReport-us-core-diagnosticreport-lab-jenny-m.html) revealed a [`2.5cm malignant tumor`](Observation-tumor-size-jenny-m.html) [`histological grade 2`](Observation-us-core-observation-lab-tumor-grade-jenny-m.html) [`invasive ductal`](Observation-us-core-observation-lab-tumor-dcis-jenny-m.html) adenocarcinoma with prognostic tumor markers [`ER positive`](Observation-tumor-marker-test-er-jenny-m.html), [`PR negative`](Observation-tumor-marker-test-pr-jenny-m.html), and [`HER2 negative`](Observation-tumor-marker-test-her2-jenny-m.html). The patient is pathologically staged as [`pT3`](Observation-tnm-pathologic-primary-tumor-category-jenny-m.html) [`pN0`](Observation-tnm-pathologic-distant-metastases-category-jenny-m.html), [`stage group IIB`](Observation-tnm-pathologic-stage-group-jenny-m.html).

A [21-gene RT-PCR assay](https://www.oncotypeiq.com/en-US/breast-cancer/healthcare-professionals/oncotype-dx-breast-recurrence-score/about-the-test) yielded a [`recurrence score of 47`](Observation-tumor-marker-test-oncotype-dx-jenny-m.html).

Treatment options were discussed between the patient and the medical oncologist. With an [`ECOG performance score`](Observation-ecog-performance-status-jenny-m.html) of 0, the patient agrees to receive an AC-T chemotherapy regimen. She received four cycles of [`doxorubicin (60 mg/m² IV)`](MedicationAdministration-cancer-related-medication-admin-doxorubicin-jenny-m.html) and [`cyclophosphamide (600 mg/m² IV`)](MedicationAdministration-cancer-related-medication-admin-cyclophosphamide-jenny-m.html) followed by [`paclitaxel (175 mg/m² IV) (AC-T)`](MedicationAdministration-cancer-related-medication-admin-paclitaxel-jenny-m.html), administered on a dose-dense schedule. She subsequently received [`whole breast radiation therapy`](Procedure-radiotherapy-treatment-summary-chest-wall-jenny-m.html) with regional nodal irradiation.

One month following the completion of first-line therapy, the patient is evaluated and with her [`disease status`](Observation-cancer-disease-status-jenny-m.html) improving. The patient will undergo surveillance imaging and monitoring.

A timeline of the narrative is illustrated in the following diagram:

<div style="text-align: center;">
<img src="mCODE-PersonaExample.svg" alt="Example Timeline" />
</div>

### FHIR instances from mCODE elements

| **Instance Description** | **mCODE Profile** |
| ------------ | ---------------- |
| [`Cancer Diagnosis`](Condition-primary-cancer-condition-jenny-m.html)|[PrimaryCancerCondition] |
| [`Cancer Disease Status: Condition Improving`](Observation-cancer-disease-status-jenny-m.html) | [CancerDiseaseStatus] |
| [`Cancer Patient: Jenny M`](Patient-cancer-patient-jenny-m.html)  | [CancerPatient]  |
| [`Clinical CancerStage: 2B`](Observation-tnm-clinical-stage-group-jenny-m.html) |[TNMStageGroup] |
| [`Clinical Primary Tumor Category: cT3`](Observation-tnm-clinical-primary-tumor-category-jenny-m.html) | [TNMPrimaryTumorCategory] |
| [`Clinical Regional Lymph Nodes Category: cN0`](Observation-tnm-clinical-regional-nodes-category-jenny-m.html) | [TNMRegionalNodesCategory]|
| [`Clinical Distant Metastases Category: cM0`](Observation-tnm-clinical-distant-metastases-category-jenny-m.html)|[TNMDistantMetastasesCategory]|
| [`Comorbidities: Anxiety, Depression, Hypertension`](Observation-cancer-related-comorbidities-jenny-m.html) | [Comorbidities] |
| [`Genomic Region: BRCA1`](Observation-genomic-region-studied-jenny-m.html) |[GenomicRegionStudied]|
| [`Genomics Report`](DiagnosticReport-genomics-report-jenny-m.html)| [GenomicsReport] |
| [`Genomic Variant Results: Pathogenic Variant in PALB2`](Observation-genomic-variant-jenny-m.html) | [GenomicVariant] |
| [`Human Specimen: Left Breast`](Specimen-human-specimen-left-breast-jenny-m.html) | [HumanSpecimen] |
| [`mCODE Patient Bundle: Jenny M`](Bundle-mcode-patient-bundle-jenny-m.html) | [MCODEPatientBundle]|
| [`Medication Administration: Cyclophosphamide`](MedicationAdministration-cancer-related-medication-admin-cyclophosphamide-jenny-m.html) | [CancerRelatedMedicationAdministration] |
| [`Medication Administration: Paclitaxel`](MedicationAdministration-cancer-related-medication-admin-paclitaxel-jenny-m.html) | [CancerRelatedMedicationAdministration] | 
| [`Medication Administration: Doxorubicin`](MedicationAdministration-cancer-related-medication-admin-doxorubicin-jenny-m.html) | [CancerRelatedMedicationAdministration] |
| [`Medication Request: Doxorubicin`](MedicationRequest-cancer-related-medication-request-doxorubicin-jenny-m.html) | [CancerRelatedMedicationRequest] |
| [`Medication Request: Cyclophosphamide`](MedicationRequest-cancer-related-medication-request-cyclophosphamide-jenny-m.html) | [CancerRelatedMedicationRequest] |
| [`Medication Request: Paclitaxel`](MedicationRequest-cancer-related-medication-request-paclitaxel-jenny-m.html) | [CancerRelatedMedicationRequest] |
| [`Oncotype DX Breast Recurrence Score Assay: 47/High`](Observation-tumor-marker-test-oncotype-dx-jenny-m.html)| [TumorMarkerTest] |
| [`Pathologic CancerStage Group: stage IIB`](Observation-tnm-pathologic-stage-group-jenny-m.html) |[TNMStageGroup] |
| [`Pathologic Primary Tumor Category: pT3`](Observation-tnm-pathologic-primary-tumor-category-jenny-m.html) | [TNMPrimaryTumorCategory] |
| [`Pathologic Regional Lymph Nodes Category: pN0`](Observation-tnm-pathologic-regional-nodes-category-jenny-m.html) | [TNMRegionalNodesCategory]|
| [`Pathologic Distant Metastases Category: pM0`](Observation-tnm-pathologic-distant-metastases-category-jenny-m.html)| [TNMDistantMetastasesCategory]|
| [`Performance Status: ECOG`](Observation-ecog-performance-status-jenny-m.html) | [ECOGPerformanceStatus] |
| [`Radiation Treatment Summary`](Procedure-radiotherapy-treatment-summary-chest-wall-jenny-m.html) | [RadiotherapyCourseSummary]|
| [`Seven Gene Panel: BRCA1, BRCA2, CDH1, PALB2, PTEN, STK11, TP53`](Observation-genomic-region-studied-jenny-m.html) |[GenomicRegionStudied]|
| [`Surgical Procedure: Partial Mastectomy`](Procedure-cancer-related-surgical-procedure-jenny-m.html)|[CancerRelatedSurgicalProcedure] |
| [`Tumor Marker ER Positive`](Observation-tumor-marker-test-er-jenny-m.html)| [TumorMarkerTest] |
| [`Tumor Marker PR Negative`](Observation-tumor-marker-test-pr-jenny-m.html)| [TumorMarkerTest] |
| [`Tumor Marker Her2 Negative`](Observation-tumor-marker-test-her2-jenny-m.html)| [TumorMarkerTest] |
| [`Tumor Size: 2.5cm`](Observation-tumor-size-jenny-m.html)| [TumorSize]|
| [`Tumor Specimen: Left Breast`](Specimen-tumor-specimen-left-breast-jenny-m.html)| [HumanSpecimen] |
{: .grid }


### FHIR instances from _non_-mCODE elements

| **Instance Description**  | **Profile/Resource** |
| ------------ |  -------------- |
| [`Smoking History: 20 Pack-Years`](Observation-observation-smoking-pack-years-jenny-m.html) |[R4Observation]|
| [`Aunt With Ovarian Cancer`](FamilyMemberHistory-family-member-history-aunt-jenny-m.html) |[R4FamilyMemberHistory]|
| [`Sister With Breast Cancer`](FamilyMemberHistory-family-member-history-sister-jenny-m.html) |[R4FamilyMemberHistory]|
| [`Uncle With Pancreatic Cancer`](FamilyMemberHistory-family-member-history-uncle-jenny-m.html) |[R4FamilyMemberHistory]|
| [`Comorbidity: Anxiety Diagnosis`](Condition-us-core-condition-anxiety-jenny-m.html) |[USCoreConditionProblemHealthConcern]|
| [`Comorbidity: Depression Diagnosis`](Condition-us-core-condition-depression-jenny-m.html) |[USCoreConditionProblemHealthConcern]|
| [`Comorbidity: Hypertension Diagnosis`](Condition-us-core-condition-hypertension-jenny-m.html) |[USCoreConditionProblemHealthConcern]|
| [`Pathology Report`](DiagnosticReport-us-core-diagnosticreport-lab-jenny-m.html) |[USCoreDiagnosticReport]|
| [`DCIS intraductal extension Report`](Observation-us-core-observation-lab-tumor-dcis-jenny-m.html) |[USCoreLaboratoryResultObservation]|
| [`Histologic Grade in Specimen: Grade 2`](Observation-us-core-observation-lab-tumor-grade-jenny-m.html) |[USCoreLaboratoryResultObservation]|
| [`Tumor Invasion Report`](Observation-us-core-observation-lab-tumor-invasion-jenny-m.html) |[USCoreLaboratoryResultObservation]|
| [`Tumor Margins Report`](Observation-us-core-observation-lab-tumor-margins-jenny-m.html) |[USCoreLaboratoryResultObservation]|
| [`Sentinel Lymph Nodes Report: Negative`](Observation-us-core-observation-lab-sentinel-nodes-jenny-m.html) |[USCoreLaboratoryResultObservation]|
| [`Oncologist Owen`](Practitioner-us-core-practitioner-owen-oncologist.html) |[USCorePractitioner]|
| [`Breast Biopsy Procedure`](Procedure-us-core-procedure-biopsy-jenny-m.html) |[USCoreProcedure]|
| [`Mammogram Procedure`](Procedure-us-core-procedure-mammogram-jenny-m.html) |[USCoreProcedure]|
| [`Smoking Status: Smokes Daily`](Observation-us-core-smokingstatus-jenny-m.html) |[USCoreSmokingStatus]|
{: .grid }

{% include markdown-link-references.md %}

---

// File: input/fsh/AL_CodeSystems.fsh


// Package hl7.terminology#3.1.0 based on FHIR 4.0.1. Generated 2021-03-06

// External Code Systems with a external canonical recognized by terminology.hl7.org
Alias:   LNC = http://loinc.org
Alias:   SCT = http://snomed.info/sct
//Alias:   SCT = http://snomed.info/sct|http://snomed.info/sct/731000124108   // latest US edition (see exp-params.json)
//Alias:   SCT = http://snomed.info/sct|http://snomed.info/sct/900000000000207008/version/20230901   // Sept 2023 international edition
Alias:   SCT_TBD = http://hl7.org/fhir/us/mcode/CodeSystem/snomed-requested-cs
Alias:   UCUM = http://unitsofmeasure.org
Alias:   ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias:   ICD10PCS = http://www.cms.gov/Medicare/Coding/ICD10
Alias:   RXN = http://www.nlm.nih.gov/research/umls/rxnorm
Alias:   CPT = http://www.ama-assn.org/go/cpt
Alias:   HGNC = http://www.genenames.org
Alias:   HGVS = http://varnomen.hgvs.org
Alias:   NULLFLAVOR = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias:   DCM = http://dicom.nema.org/resources/ontology/DCM

// Code systems lacking a recognized canonical at terminology.hl7.org
Alias:   GTR = http://www.ncbi.nlm.nih.gov/gtr
Alias:   CLINVAR = http://www.ncbi.nlm.nih.gov/clinvar
Alias:   SO = http://www.sequenceontology.org/
Alias:   AJCC = http://cancerstaging.org
Alias:   ENTREZ = https://www.ncbi.nlm.nih.gov/gene
Alias:   NCIT = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl

// From terminology.hl7.org
Alias:   OmbRaceCat = urn:oid:2.16.840.1.113883.6.238
Alias:   ICDO3 = http://terminology.hl7.org/CodeSystem/icd-o-3
Alias:   UMLS = http://terminology.hl7.org/CodeSystem/umls
Alias:   IDTYPE = http://terminology.hl7.org/CodeSystem/v2-0203
Alias:   SPTY = http://terminology.hl7.org/CodeSystem/v2-0487
Alias:   CondCat = http://terminology.hl7.org/CodeSystem/condition-category
Alias:   ClinStatus = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias:   VerStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias:   ObsCat = http://terminology.hl7.org/CodeSystem/observation-category
Alias:   ObsStatus = http://hl7.org/fhir/observation-status
Alias:   ObsInt = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias:   DiagnosticService = http://terminology.hl7.org/CodeSystem/v2-0074
Alias:   TimingAbbreviation = http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation
Alias:   MedReqStatus = http://hl7.org/fhir/CodeSystem/medicationrequest-status
Alias:   MedReqIntent = http://hl7.org/fhir/CodeSystem/medicationrequest-intent
Alias:   MedReqCat = 	http://terminology.hl7.org/CodeSystem/medicationrequest-category
Alias:   RefMeaning = http://terminology.hl7.org/CodeSystem/referencerange-meaning
Alias:   AbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias:   MDR = http://terminology.hl7.org/CodeSystem/mdr

---

// File: input/fsh/AL_Genomics.fsh

// Other
Alias: FMM = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: CGMedicationRecommendation = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/medication-recommendation
Alias: CGTherapeuticImplication = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication
Alias: NCBI = http://www.ncbi.nlm.nih.gov/refseq
Alias: TMB = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/tmb
Alias: MSI = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/msi


---

// File: input/fsh/AL_Other.fsh

Alias: FMM = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: CGMedicationRecommendation = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/medication-recommendation
Alias: CGTherapeuticImplication = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication
Alias: NCBI = http://www.ncbi.nlm.nih.gov/refseq
Alias: TMB = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/tmb
Alias: MSI = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/msi


---

// File: input/fsh/AL_USCore.fsh

// Profiles
Alias:   USCoreCondition = http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns
Alias:   USCoreDiagnosticReportLab = http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab
Alias:   USCoreMedicationRequest = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest
Alias:   USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   USCoreProcedure = http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure
Alias:   USCoreObservationLab = http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab
Alias:   USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   USCoreClinicalResult = http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-clinical-result
Alias:   USCoreVitalSigns = http://hl7.org/fhir/us/core/StructureDefinition/us-core-vital-signs
Alias:   USCoreObservationSimple = http://hl7.org/fhir/us/core/StructureDefinition/us-core-simple-observation
Alias:   USCoreSpecimen = http://hl7.org/fhir/us/core/StructureDefinition/us-core-specimen

// Extensions
Alias:   USCoreBirthSex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
Alias:   USCoreRace = http://hl7.org/fhir/us/core/StructureDefinition/us-core-race
Alias:   USCoreEthnicity = http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity



---

// File: input/fsh/CM_TG263.fsh

Instance: TG263CM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(TG263, RadiotherapyTreatmentLocationVS)
* insert AddGroup(Canonical(TG263CS\),SCT)
* insert MapConcept(#A_Aorta, "Aorta", #15825003, "Aortic structure (body structure\)")
* insert MapConcept(#A_Aorta_Asc, "Ascending Aorta", #54247002, "Ascending aorta structure (body structure\)")
* insert MapConcept(#A_Brachiocephls, "Brachiocephalic Artery", #425444002, "Branch of brachiocephalic artery (body structure\)")
* insert MapConcept(#A_Carotid, "Common Carotid Artery", #69105007, "Carotid artery structure (body structure\)")
* insert MapConceptLateralityQualifier(#A_Carotid_L, "Carotid Artery", #69105007, "Carotid artery structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Carotid_R, "Carotid Artery", #69105007, "Carotid artery structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#A_Celiac, "Celiac Artery", #57850000, "Structure of celiac artery (body structure\)")
* insert MapConcept(#A_Coronary, "Coronary Artery", #41801008, "Coronary artery structure (body structure\)")
* insert MapConceptLateralityQualifier(#A_Coronary_L, "Coronary Artery Left", #41801008, "Coronary artery structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Coronary_R, "Coronary Artery Right", #41801008, "Coronary artery structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Femoral_L, "Femoral Artery Left", #7657000, "Structure of femoral artery (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Femoral_R, "Femoral Artery Right", #7657000, "Structure of femoral artery (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Humeral_Cflx_L, "Circumflex Humeral Artery Left", #244314003, "Circumflex humeral artery (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Humeral_Cflx_R, "Circumflex Humeral Artery Right", #244314003, "Circumflex humeral artery (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#A_Hypophyseal_I, "Hypophyseal Artery Inferior", #74200005, "Structure of inferior hypophyseal artery (body structure\)")
* insert MapConcept(#A_Hypophyseal_S, "Hypophyseal Artery Superior", #55601007, "Structure of superior hypophyseal artery (body structure\)")
* insert MapConceptLateralityQualifier(#A_Iliac_Cflx_L, "Circumflex Left Iliac Artery", #244327004, "Circumflex iliac artery (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Iliac_Cflx_R, "Circumflex Right Iliac Artery", #244327004, "Circumflex iliac artery (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Iliac_Ext_L, "External iliac artery Left", #113269004, "Structure of external iliac artery (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Iliac_Ext_R, "External iliac artery Right", #113269004, "Structure of external iliac artery (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Iliac_Int_L, "Internal iliac artery Left", #90024005, "Structure of internal iliac artery (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Iliac_Int_R, "Internal iliac artery Right", #90024005, "Structure of internal iliac artery (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Iliac_L, "Common iliac artery Left", #73634005, "Common iliac artery structure (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Iliac_R, "Common iliac artery Right", #73634005, "Common iliac artery structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#A_LAD, "Anterior interventricular branch of LCA (left anterior descending artery\)", #33795007, "Structure of anterior descending branch of left coronary artery (body structure\)")
* insert MapConcept(#A_Mesenteric_I, "Inferior mesenteric artery", #33795007, "Structure of inferior mesenteric artery (body structure\)")
* insert MapConcept(#A_Mesenteric_S, "Superior mesenteric artery", #42258001, "Superior mesenteric artery structure (body structure\)")
* insert MapConcept(#A_Pulmonary, "Pulmonary Artery", #81040000, "Pulmonary artery structure (body structure\)")
* insert MapConcept(#A_Subclavian, "Subclavian Artery", #36765005, "Structure of subclavian artery (body structure\)")
* insert MapConceptLateralityQualifier(#A_Subclavian_L, "Subclavian Artery Left", #36765005, "Structure of subclavian artery (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Subclavian_R, "Subclavian Artery Right", #36765005, "Structure of subclavian artery (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#A_Vertebral, "Vertebral arteries", #85234005, "Structure of vertebral artery (body structure\)")
* insert MapConceptLateralityQualifier(#A_Vertebral_L, "Vertebral arteries left", #85234005, "Structure of vertebral artery (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#A_Vertebral_R, "Vertebral arteries right", #85234005, "Structure of vertebral artery (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Acetabulum_L, "Acetabulum", #37783008, "Bone structure of acetabulum (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Acetabulum_R, "Acetabulum", #37783008, "Bone structure of acetabulum (body structure\)", #24028007, "Right (qualifier value\)", SCT)
* insert MapConcept(#Acetabulums, "Acetabulum", #37783008, "Bone structure of acetabulum (body structure\)")
* insert MapConceptLocationQualifier(#AirWay_Dist, "Distal Airway", #89187006, "Airway structure (body structure\)", #46053002, "distal (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#AirWay_Prox, "Proximal Airway", #89187006, "Airway structure (body structure\)", #40415009, "proximal (qualifier value\)", SCT)
* insert MapConcept(#Anus, "Anus", #123956007, "Anus part (body structure\)")
* insert MapConcept(#Appendix, "Appendix", #66754008, "Appendix structure (body structure\)")
* insert MapConcept(#Arytenoid, "Arytenoid cartilage", #77578007, "Arytenoid cartilage structure (body structure\)")
* insert MapConceptLateralityQualifier(#Arytenoid_L, "Arytenoid cartilage Left", #77578007, "Arytenoid cartilage structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Arytenoid_R, "Arytenoid cartilage Right", #77578007, "Arytenoid cartilage structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Atrium, "Atrium of the heart", #59652004, "Atrial structure (body structure\)")
* insert MapConceptLateralityQualifier(#Atrium_L, "Atrium of the heart Left", #59652004, "Atrial structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Atrium_R, "Atrium of the heart Right", #59652004, "Atrial structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#BileDuct_Common, "Common bile duct", #79741001, "Common bile duct structure (body structure\)")
* insert MapConcept(#Bladder, "Urinary Bladder", #89837001, "Urinary bladder structure (body structure\)")
* insert MapConcept(#Bladder_Wall, "Bladder Wall", #393006, "Structure of wall of urinary bladder (body structure\)")
* insert MapConcept(#Bone, "Bone", #119186007, "Bone part (body structure\)")
* insert MapConcept(#Bone_Ethmoid, "Ethmoid Bone", #52374004, "Ethmoid bone structure (body structure\)")
* insert MapConcept(#Bone_Frontal, "Frontal Bone", #74872008, "Frontal bone structure (body structure\)")
* insert MapConcept(#Bone_Hyoid, "Hyoid Bone", #21387005, "Hyoid bone structure (body structure\)")
* insert MapConcept(#Bone_Ilium, "Ilium", #22356005, "Bone structure of ilium (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Ilium_L, "Ilium Left", #22356005, "Bone structure of ilium (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Ilium_R, "Ilium Right", #22356005, "Bone structure of ilium (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Incus, "Incus", #421793000, "Bone structure of incus (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Incus_L, "Incus Left", #421793000, "Bone structure of incus (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Incus_R, "Incus Right", #421793000, "Bone structure of incus (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Ischium_L, "Ischium Left", #85710004, "Bone structure of ischium (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Ischium_R, "Ischium Right", #85710004, "Bone structure of ischium (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Lacrimal, "Lacrimal Bone", #6229007, "Lacrimal bone structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Lacrimal_L, "Lacrimal Bone Left", #6229007, "Lacrimal bone structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Lacrimal_R, "Lacrimal Bone Right", #6229007, "Lacrimal bone structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Mandible, "Mandible", #91609006, "Bone structure of mandible (body structure\)")
* insert MapConcept(#Bone_Mastoid, "Both Mastoids", #59066005, "Mastoid structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Mastoid_L, "Left Mastoid Bone", #59066005, "Mastoid structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Mastoid_R, "Right Mastoid Bone", #59066005, "Mastoid structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Nasal, "Nasal Bone", #74386004, "Nasal bone structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Nasal_L, "Nasal Bone Left", #74386004, "Nasal bone structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Nasal_R, "Nasal Bone Right", #74386004, "Nasal bone structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Occipital, "Occipital Bone", #31640002, "Occipital bone structure (body structure\)")
* insert MapConcept(#Bone_Palatine, "Palatine  bone", #51283005, "Palatine bone structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Palatine_L, "Palatine bone Left", #51283005, "Palatine bone structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Palatine_R, "Palatine bone Right", #51283005, "Palatine bone structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Parietal, "Parietal bone", #24924006, "Parietal bone structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Parietal_L, "Parietal bone Left", #24924006, "Parietal bone structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Parietal_R, "Parietal bone Right", #24924006, "Parietal bone structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Pelvic, "Pelvic Bones (Bony Pelvis\)", #118645006, "Structure of innominate bone and/or sacrum and/or coccyx (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Pelvic_L, "Bony Pelvis Left", #118645006, "Structure of innominate bone and/or sacrum and/or coccyx (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Pelvic_R, "Bony Pelvis Right", #118645006, "Structure of innominate bone and/or sacrum and/or coccyx (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Sphenoid, "Sphenoid Bone", #73117003, "Sphenoid bone structure (body structure\)")
* insert MapConcept(#Bone_Temporal, "Temporal Bone", #60911003, "Temporal bone structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bone_Temporal_L, "Temporal Bone Left", #60911003, "Temporal bone structure (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Temporal_R, "Temporal Bone Right", #60911003, "Temporal bone structure (body structure\)", #24028007, "Right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Zygomatic_L, "Zygomatic Bone Left", #13881006, "Zygomatic bone structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Bone_Zygomatic_R, "Zygomatic Bone Right", #13881006, "Zygomatic bone structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Bone_Zygomatics, "Zygomatic Bone", #13881006, "Zygomatic bone structure (body structure\)")
* insert MapConcept(#BoneMarrow, "Bone Marrow", #14016003, "Bone marrow structure (body structure\)")
* insert MapConcept(#Diaphragm, "Diaphragm", #5798000, "Diaphragm structure (body structure\)")
* insert MapConcept(#Bowel, "Bowel", #113276009, "Intestinal structure (body structure\)")
* insert MapConcept(#Bowel_Large, "Large Bowel", #14742008, "Structure of large intestine (body structure\)")
* insert MapConcept(#Bowel_Small, "Small Bowel (small intestine\)", #30315005, "Structure of small intestine (body structure\)")
* insert MapConceptLateralityQualifier(#BrachialPlex_L, "Brachial plexus Left", #36582005, "Brachial plexus structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#BrachialPlex_R, "Brachial plexus Right", #36582005, "Brachial plexus structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#BrachialPlexs, "Brachial plexus", #36582005, "Brachial plexus structure (body structure\)")
* insert MapConcept(#Brain, "Brain", #12738006, "Brain structure (body structure\)")
* insert MapConcept(#Brainstem, "Brain Stem", #15926001, "Brainstem structure (body structure\)")
* insert MapConceptLocationQualifier(#Brainstem_Core, "Core of the brainstem", #15926001, "Brainstem structure (body structure\)", #260235002, "Core (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Brainstem_Surf, "Surface of the brainstem", #15926001, "Brainstem structure (body structure\)", #410679008, "Surface (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Breast_L, "Breast Left", #76752008, "Breast structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Breast_R, "Breast Right", #76752008, "Breast structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Breasts, "Both breasts", #76752008, "Breast structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Bronchus, "Bronchial tree", #955009, "Bronchial structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bronchus_L, "Bronchial tree Left", #955009, "Bronchial structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConcept(#Bronchus_Main, "Main Bronchus", #102297006, "Main bronchus structure (body structure\)")
* insert MapConcept(#Bronchus_Main_L, "Main Bronchus Left", #102297006, "Main bronchus structure (body structure\)")
* insert MapConcept(#Bronchus_Main_R, "Main Bronchus Right", #102297006, "Main bronchus structure (body structure\)")
* insert MapConceptLateralityQualifier(#Bronchus_R, "Bronchial tree Right", #955009, "Bronchial structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Canal_Anal, "Anal Canal", #34381000, "Anal canal structure (body structure\)")
* insert MapConcept(#Carina, "Carina", #28700002, "Structure of carina of trachea (body structure\)")
* insert MapConcept(#Duodenum, "Small bowel - Duodenum", #38848004, "Duodenal structure (body structure\)")
* insert MapConcept(#CaudaEquina, "Cauda equina", #7173007, "Cauda equina structure (body structure\)")
* insert MapConcept(#Cavernosum, "Penis Corpus Cavernosum", #9284003, "Corpus cavernosum structure (body structure\)")
* insert MapConcept(#Cavity_Nasal, "Nasal Cavity", #279549004, "Nasal cavity structure (body structure\)")
* insert MapConcept(#Cavity_Oral, "Oral cavity", #74262004, "Oral cavity structure (body structure\)")
* insert MapConcept(#Cecum, "Large bowel - Cecum", #32713005, "Cecum structure (body structure\)")
* insert MapConcept(#Cerebellum, "Cerebellum", #113305005, "Cerebellar structure (body structure\)")
* insert MapConcept(#Cerebrum, "Cerebrum", #83678007, "Structure of cerebrum (body structure\)")
* insert MapConceptLateralityQualifier(#Cerebrum_L, "L Cerebrum", #83678007, "Structure of cerebrum (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Cerebrum_R, "R Cerebrum", #83678007, "Structure of cerebrum (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Cervix, "Cervix of uterus", #71252005, "Cervix uteri structure (body structure\)")
* insert MapConcept(#Chestwall, "Chest wall", #78904004, "Chest wall structure (body structure\)")
* insert MapConceptLateralityQualifier(#Chestwall_L, "Left Chest Wall", #78904004, "Chest wall structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Chestwall_R, "Right Chest Wall", #78904004, "Chest wall structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Cist_Pontine, "Pontine Cistern", #369387006, "Structure of cisterna pontis (body structure\)")
* insert MapConcept(#Esophagus_S, "Upper Esophagus (cervical\)", #60075002, "Cervical esophagus structure (body structure\)")
* insert MapConceptLateralityQualifier(#Clavicle_L, "Clavicle Left", #51299004, "Bone structure of clavicle (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Clavicle_R, "Clavicle Right", #51299004, "Bone structure of clavicle (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_III, "Third Cranial Nerve (Oculomotor nerve\)", #56193007, "Oculomotor nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_III_L, "Third Cranial Nerve (Oculomotor nerve\) Left", #56193007, "Oculomotor nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_III_R, "Third Cranial Nerve (Oculomotor nerve\) Right", #56193007, "Oculomotor nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_IX, "Ninth Cranial Nerve (Glossopharyngeal nerve\)", #21161002, "Glossopharyngeal nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_IX_L, "Ninth Cranial Nerve (Glossopharyngeal nerve\) Left", #21161002, "Glossopharyngeal nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_IX_R, "Ninth Cranial Nerve (Glossopharyngeal nerve\) Right", #21161002, "Glossopharyngeal nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_V, "Fifth Cranial Nerve (Trigeminal nerve\)", #27612005, "Trigeminal nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_V_L, "Fifth Cranial Nerve (Trigeminal nerve\) Left", #27612005, "Trigeminal nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_V_R, "Fifth Cranial Nerve (Trigeminal nerve\) Right", #27612005, "Trigeminal nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_VI, "Sixth Cranial Nerve (Abducens nerve\)", #80622005, "Abducens nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_VI_L, "Sixth Cranial Nerve (Abducens nerve\) Left", #80622005, "Abducens nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_VI_R, "Sixth Cranial Nerve (Abducens nerve\) Right", #80622005, "Abducens nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_VII, "Seventh Cranial Nerve (Facial\)", #56052001, "Facial nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_VII_L, "Seventh Cranial Nerve (Facial\) Left", #56052001, "Facial nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_VII_R, "Seventh Cranial Nerve (Facial\) Right", #56052001, "Facial nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_VIII, "Eighth Cranial (Vestibulocochlear\) Nerve", #8598002, "Vestibulocochlear nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_VIII_L, "Eighth Cranial (Vestibulocochlear\)  Nerve Left", #8598002, "Vestibulocochlear nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_VIII_R, "Eighth Cranial (Vestibulocochlear\)  Nerve Right", #8598002, "Vestibulocochlear nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_XI, "Eleventh Cranial Nerve (Spinal accessory nerve\)", #15119000, "Accessory nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_XI_L, "Eleventh Cranial Nerve (Spinal accessory nerve\) Left", #15119000, "Accessory nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_XI_R, "Eleventh Cranial Nerve (Spinal accessory nerve\) Right", #15119000, "Accessory nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CN_XII, "Twelfth Cranial Nerve (Hypoglossal nerve\)", #37899009, "Hypoglossal nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#CN_XII_L, "Twelfth Cranial Nerve (Hypoglossal nerve\) Left", #37899009, "Hypoglossal nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#CN_XII_R, "Twelfth Cranial Nerve (Hypoglossal nerve\) Right", #37899009, "Hypoglossal nerve structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Cochlea, "Cochlea", #80169004, "Cochlear structure (body structure\)")
* insert MapConcept(#Cochlea_L, "Left Cochlea", #80169004, "Cochlear structure (body structure\)")
* insert MapConcept(#Cochlea_R, "Right Cochlea", #80169004, "Cochlear structure (body structure\)")
* insert MapConcept(#Colon, "Colon", #71854001, "Colon structure (body structure\)")
* insert MapConcept(#Colon_Ascending, "Large bowel - Ascending colon", #9040008, "Ascending colon structure (body structure\)")
* insert MapConcept(#Colon_Decending, "Large bowel - Descending colon", #32622004, "Descending colon structure (body structure\)")
* insert MapConceptLateralityQualifier(#Eyes, "Set of eyes", #81745001, "Structure of eye proper (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Colon_Sigmoid, "Large bowel - Sigmoid colon", #60184004, "Sigmoid colon structure (body structure\)")
* insert MapConcept(#Colon_Transverse, "Large bowel -Transverse colon", #485005, "Transverse colon structure (body structure\)")
* insert MapConcept(#Cornea, "Cornea", #28726007, "Corneal structure (body structure\)")
* insert MapConceptLateralityQualifier(#Cornea_L, "Cornea Left", #28726007, "Corneal structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Cornea_R, "Cornea Right", #28726007, "Corneal structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#CribriformPlate, "Cribriform Plate", #36743005, "Structure of cribriform plate (body structure\)")
* insert MapConcept(#Cricoid, "Cricoid cartilage", #8600008, "Cricoid cartilage structure (body structure\)")
* insert MapConcept(#Cricopharyngeus, "Cricopharyngeal part of inferior pharyngeal constrictor", #28276008, "Structure of cricopharyngeal part of inferior constrictor pharyngeus muscle (body structure\)")
* insert MapConcept(#Gallbladder, "Gall bladder", #28231008, "Gallbladder structure (body structure\)")
* insert MapConcept(#Genitals, "Genitals", #71934003, "Genital structure (body structure\)")
* insert MapConcept(#Glnd_Lacrimal, "Lacrimal Gland", #13561001, "Lacrimal gland structure (body structure\)")
* insert MapConcept(#Ear_External_L, "External Ear Left", #117590005, "Ear structure (body structure\)")
* insert MapConceptQualifier2(#Ear_External_R, "External Ear Right", #117590005, "Ear structure (body structure\)", #7771000, "left (qualifier value\)", #261074009, "external (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Ear_Externals, "External Ear", #117590005, "Ear structure (body structure\)", #261074009, "external (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Ear_Internal_L, "Internal Ear Left", #117590005, "Ear structure (body structure\)", #7771000, "left (qualifier value\)", #260521003, "internal (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Ear_Internal_R, "Internal Ear Right", #117590005, "Ear structure (body structure\)", #24028007, "right (qualifier value\)", #260521003, "internal (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Ear_Internals, "Internal Ear", #117590005, "Ear structure (body structure\)", #260521003, "internal (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Ear_Middle, "Middle Ear", #117590005, "Ear structure (body structure\)", #260528009, "middle (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Ear_Middle_L, "Middle Ear Left", #117590005, "Ear structure (body structure\)", #7771000, "left (qualifier value\)", #260528009, "middle (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Ear_Middle_R, "Middle Ear Right", #117590005, "Ear structure (body structure\)", #24028007, "right (qualifier value\)", #260528009, "middle (qualifier value\)", SCT)
* insert MapConcept(#Glnd_Parathyroid, "Parathyroid gland", #111002, "Parathyroid structure (body structure\)")
* insert MapConcept(#Elbow, "Elbow", #127949000, "Elbow region structure (body structure\)")
* insert MapConceptLateralityQualifier(#Elbow_L, "Elbow Left", #127949000, "Elbow region structure (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Elbow_R, "Elbow Right", #127949000, "Elbow region structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Esophagus, "Esophagus", #32849002, "Esophageal structure (body structure\)")
* insert MapConceptLocationQualifier(#Esophagus_I, "Lower Esophagus (abdominal\)", #32849002, "Esophageal structure (body structure\)", #261122009, "lower (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Esophagus_M, "Middle Esophagus (thoracic\)", #32849002, "Esophageal structure (body structure\)", #260528009, "middle (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Esophagus_NAdj, "Non Adjacent Esophagus", #32849002, "Esophageal structure (body structure\)", #1217011006, "non-adjacent (qualifier value\)", SCT)
* insert MapConcept(#Glnd_Sublings, "Sublingual gland", #88481005, "Sublingual gland structure (body structure\)")
* insert MapConcept(#Glnd_Submands, "Submandibular Gland", #385296007, "Submandibular salivary gland structure (body structure\)")
* insert MapConceptLateralityQualifier(#Eye_L, "Eyeball Left", #81745001, "Structure of eye proper (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Eye_R, "Eyeball Right", #81745001, "Structure of eye proper (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Glnd_Thymus, "Thymus Gland", #9875009, "Thymus gland structure (body structure\)")
* insert MapConcept(#Glnd_Thyroid, "Thyroid Gland", #69748006, "Thyroid structure (body structure\)")
* insert MapConceptLateralityQualifier(#Femur_Head_L, "Femur Head & Neck Left", #2812003, "Structure of head of femur (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femur_Head_R, "Femur Head & Neck Right", #2812003, "Structure of head of femur (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femur_Joint_L, "Femoral Joint Left", #24136001, "Hip joint structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femur_Joint_R, "Femoral Joint Right", #24136001, "Hip joint structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Femur, "Femur  Whole", #71341001, "Bone structure of femur (body structure\)")
* insert MapConceptLateralityQualifier(#Femur_L, "Femur  Whole  Left", #71341001, "Bone structure of femur (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConcept(#Femur_Neck, "Femur Neck", #29627003, "Structure of neck of femur (body structure\)")
* insert MapConceptLateralityQualifier(#Femur_Neck_L, "Femur Neck Right", #29627003, "Structure of neck of femur (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femur_Neck_R, "Femur Neck Left", #29627003, "Structure of neck of femur (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femur_R, "Femur Whole Right", #71341001, "Bone structure of femur (body structure\)", #24028007, "Right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femur_Shaft_L, "Femur Shaft Left", #41111004, "Bone structure of shaft of femur (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femur_Shaft_R, "Femur Shaft Right", #41111004, "Bone structure of shaft of femur (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Femurs, "Both Femurs", #71341001, "Bone structure of femur (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Fibula, "Fibula", #87342007, "Bone structure of fibula (body structure\)")
* insert MapConceptLateralityQualifier(#Fibula_L, "Fibula Left", #87342007, "Bone structure of fibula (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Fibula_R, "Fibula Right", #87342007, "Bone structure of fibula (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Glottis, "Glottis", #1307006, "Glottis structure (body structure\)")
* insert MapConcept(#GreatVes, "Great Vessels of the heart (aorta\, vena cava S&I\, pulmonary A&V\)", #3711007, "Structure of great blood vessel (organ\) (body structure\)")
* insert MapConceptLocationQualifier(#GreatVes_NAdj, "Non Adjacent Great Vessels", #3711007, "Structure of great blood vessel (organ\) (body structure\)", #1217011006, "non-adjacent (qualifier value\)", SCT)
* insert MapConcept(#Hardpalate, "Hard palate", #90228003, "Hard palate structure (body structure\)")
* insert MapConcept(#Glnd_Adrenal, "Adrenal glands", #23451007, "Adrenal structure (body structure\)")
* insert MapConceptLateralityQualifier(#Glnd_Adrenal_L, "Adrenal glands left", #23451007, "Adrenal structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Glnd_Adrenal_R, "Adrenal glands right", #23451007, "Adrenal structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Heart, "Heart", #80891009, "Heart structure (body structure\)")
* insert MapConceptLateralityQualifier(#Glnd_Lacrimal_L, "Lacrimal Gland Left", #13561001, "Lacrimal gland structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Glnd_Lacrimal_R, "Lacrimal Gland Right", #13561001, "Lacrimal gland structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Hemispheres, "Hemisphere", #372073000, "Cerebral hemisphere structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Glnd_Subling_L, "Sublingual gland", #88481005, "Sublingual gland structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Glnd_Subling_R, "Sublingual gland", #88481005, "Sublingual gland structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Hippocampi, "Hippocampus", #5366008, "Hippocampal structure (body structure\)")
* insert MapConceptLateralityQualifier(#Glnd_Submand_L, "Submandibular Gland Left", #385296007, "Submandibular salivary gland structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Glnd_Submand_R, "Submandibular Gland Right", #385296007, "Submandibular salivary gland structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Hypothalmus, "Hypothalamus", #67923007, "Hypothalamic structure (body structure\)")
* insert MapConcept(#Ileum, "Small bowel - Ileum", #34516001, "Ileal structure (body structure\)")
* insert MapConcept(#Jejunum, "Small bowel - Jejunum", #21306003, "Jejunal structure (body structure\)")
* insert MapConcept(#Jejunum_Ileum, "Both ileum and jejunum", #90228003, "Jejunum and ileum (combined site\) (body structure\)")
* insert MapConcept(#Joint_Elbow, "Elbow joint", #16953009, "Elbow joint structure (body structure\)")
* insert MapConcept(#Joint_Glenohum, "Glenohumeral Joint", #85537004, "Glenohumeral joint structure (body structure\)")
* insert MapConceptLateralityQualifier(#GrowthPlate_L, "Left Growth Plate", #711190000, "Structure of epiphyseal plate (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#GrowthPlate_R, "Right Growth Plate", #711190000, "Structure of epiphyseal plate (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Joint_Surface, "Joint Surface", #39352004, "Joint structure (body structure\)", #410679008, "Surface (qualifier value\)", SCT)
* insert MapConcept(#Joint_TM, "Temperomandibular Joint", #53620006, "Temporomandibular joint structure (body structure\)")
* insert MapConceptLateralityQualifier(#Hemisphere_L, "Left Hemisphere", #6566002, "Cerebellar hemisphere structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Hemisphere_R, "Right Hemisphere", #6566002, "Cerebellar hemisphere structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_Cortex, "Renal cortex for both Kidneys", #50403003, "Structure of cortex of kidney (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_Hilums, "Renal Hilum for both Kidneys", #74033008, "Structure of hilum of kidney (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Hippocampus_L, "Hippocampus Left", #5366008, "Hippocampal structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Hippocampus_R, "Hippocampus Right", #5366008, "Hippocampal structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Humerus_L, "Humerus Left", #85050009, "Bone structure of humerus (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Humerus_R, "Humerus Right", #85050009, "Bone structure of humerus (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidneys, "Both Kidneys", #64033007, "Kidney structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Knee, "Knee", #72696002, "Knee region structure (body structure\)")
* insert MapConcept(#Laryngl_Pharynx, "Laryngeal pharynx", #81502006, "Hypopharyngeal structure (body structure\)")
* insert MapConcept(#Larynx, "Larynx", #4596009, "Laryngeal structure (body structure\)")
* insert MapConcept(#Larynx_SG, "Supraglottic Larynx", #86483002, "Structure of supraglottic space (body structure\)")
* insert MapConceptLateralityQualifier(#Joint_Elbow_L, "Left Elbow joint", #16953009, "Elbow joint structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Joint_Elbow_R, "Right Elbow joint", #16953009, "Elbow joint structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Lens, "Eye Lens", #78076003, "Structure of lens of eye (body structure\)")
* insert MapConceptLateralityQualifier(#Joint_Glenohum_L, "Glenohumeral Joint Left", #85537004, "Glenohumeral joint structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Joint_Glenohum_R, "Glenohumeral Joint Right", #85537004, "Glenohumeral joint structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Lig_Hepatogastrc, "Hepatogastric ligament", #6544009, "Structure of gastrohepatic ligament (body structure\)")
* insert MapConcept(#Lips, "Lips", #81083006, "Both lips (body structure\)")
* insert MapConceptLateralityQualifier(#Joint_TM_L, "Temperomandibular Joint Left", #53620006, "Temporomandibular joint structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Joint_TM_R, "Temperomandibular Joint Right", #53620006, "Temporomandibular joint structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Liver, "Liver", #10200004, "Liver structure (body structure\)")
* insert MapConceptLateralityQualifier(#Kidney_Cortex_L, "Renal cortex left", #50403003, "Structure of cortex of kidney (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_Cortex_R, "Renal cortex right", #50403003, "Structure of cortex of kidney (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_Hilum_L, "Renal Hilum Left", #74033008, "Structure of hilum of kidney (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_Hilum_R, "Renal Hilum Right", #74033008, "Structure of hilum of kidney (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Lobe_Frontal, "Frontal Lobe", #83251001, "Frontal lobe structure (body structure\)")
* insert MapConceptLateralityQualifier(#Kidney_L, "Kidney Left", #64033007, "Kidney structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_Pelvis_L, "Renal pelvis Left", #25990002, "Renal pelvis structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_Pelvis_R, "Renal pelvis Right", #25990002, "Renal pelvis structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Kidney_R, "Kidney Right", #64033007, "Kidney structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Lobe_Occipital, "Occipital Lobe", #31065004, "Occipital lobe structure (body structure\)")
* insert MapConcept(#Lobe_Parietal, "Parietal Lobe", #16630005, "Parietal lobe structure (body structure\)")
* insert MapConceptLateralityQualifier(#Knee_L, "Knee Left", #72696002, "Knee region structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Knee_R, "Knee Right", #72696002, "Knee region structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Lobe_Temporal, "Temporal Lobe", #78277001, "Temporal lobe structure (body structure\)")
* insert MapConcept(#Mediastinum, "Mediastinum", #72410000, "Mediastinal structure (body structure\)")
* insert MapConcept(#Musc, "Muscle", #71616004, "Skeletal and/or smooth muscle structure (body structure\)")
* insert MapConcept(#Musc_Constrict, "Constrictor Muscle of Pharynx", #4866005, "Constrictor muscle of pharynx structure (body structure\)")
* insert MapConceptLateralityQualifier(#Lens_L, "Lens Left", #78076003, "Structure of lens of eye (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lens_R, "Lens Right", #78076003, "Structure of lens of eye (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Musc_Masseter, "Masseter Muscle", #79368004, "Masseter muscle structure (body structure\)")
* insert MapConceptLateralityQualifier(#Musc_Temporal_R, "Temporal muscle - Right", #52927003, "Structure of temporalis muscle (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Nasopharynx, "Nasal part of pharynx", #71836000, "Nasopharyngeal structure (body structure\)")
* insert MapConcept(#LN, "Lymph Node", #59441001, "Structure of lymph node (body structure\)")
* insert MapConcept(#LN_Ax_Apical, "Set of apical axillary lymphatic vessels", #16051009, "Structure of apical axillary lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Ax_Apical_L, "Axillary lymphatic chain - Apical Left", #16051009, "Structure of apical axillary lymph node (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Ax_Apical_R, "Axillary lymphatic chain - Apical Right", #16051009, "Structure of apical axillary lymph node (body structure\)", #24028007, "Right (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_Central_L, "Axillary lymphatic chain - Central Left", #16051009, "Structure of apical axillary lymph node (body structure\)", #7771000, "left (qualifier value\)", #26216008, "central (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_Central_R, "Axillary lymphatic chain - Central Right", #16051009, "Structure of apical axillary lymph node (body structure\)", #24028007, "right (qualifier value\)", #26216008, "central (qualifier value\)", SCT)
* insert MapConcept(#LN_Ax_Centrals, "Set of central axillary lymphatic vessels", #283001, "Structure of central axillary lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Ax_L, "Axillary lymphatic chain Left", #68171009, "Axillary lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_L1_L, "Level 1 Axillary Lymph Node Left", #68171009, "Axillary lymph node structure (body structure\)", #7771000, "left (qualifier value\)", #277733009, "level 1 (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_L1_R, "Level 1 Axillary Lymph Node Right", #68171009, "Axillary lymph node structure (body structure\)", #24028007, "right (qualifier value\)", #277733009, "level 1 (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_L2_L, "Level 2 Axillary Lymph Node Left", #68171009, "Axillary lymph node structure (body structure\)", #7771000, "left (qualifier value\)", #277734003, "level 2 (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_L2_R, "Level 2 Axillary Lymph Node Right", #68171009, "Axillary lymph node structure (body structure\)", #24028007, "right (qualifier value\)", #277734003, "level 2 (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_L3_L, "Level 3 Axillary Lymph Node Left", #68171009, "Axillary lymph node structure (body structure\)", #7771000, "left (qualifier value\)", #277735002, "level 3 (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Ax_L3_R, "Level 3 Axillary Lymph Node Right", #68171009, "Axillary lymph node structure (body structure\)", #24028007, "right (qualifier value\)", #277735002, "level 3 (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Ax_Lateral_L, "Axillary lymphatic chain - Lateral Left", #33770006, "Structure of lateral axillary lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Ax_Lateral_R, "Axillary lymphatic chain - Lateral Right", #33770006, "Structure of lateral axillary lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Ax_Laterals, "lateral axillary lymph nodes", #33770006, "Structure of lateral axillary lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Ax_Pectoral_L, "Axillary lymphatic chain - Pectoral Left", #69691007, "Structure of pectoral axillary lymph node (body structure\)", #7771000, "Left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Ax_Pectoral_R, "Axillary lymphatic chain - Pectoral Right", #69691007, "Structure of pectoral axillary lymph node (body structure\)", #24028007, "Right (qualifier value\)", SCT)
* insert MapConcept(#LN_Ax_Pectorals, "Set of pectoral axillary lymphatic vessels", #69691007, "Structure of pectoral axillary lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Ax_R, "Axillary lymphatic chain Right", #68171009, "Axillary lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Ax_Subscap_L, "Axillary lymphatic chain - Subscapular Left", #12196003, "Structure of subscapular axillary lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Ax_Subscap_R, "Axillary lymphatic chain - Subscapular Right", #12196003, "Structure of subscapular axillary lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Ax_Subscaps, "Set of subscapular axillary lymphatic vessels", #12196003, "Structure of subscapular axillary lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Brachioceph_L, "Lymph nodes of thorax - Brachiocephalic Left", #196821008, "Structure of innominate lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Brachioceph_R, "Lymph nodes of thorax - Brachiocephalic Right", #196821008, "Structure of innominate lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Brachiocephs, "Lymph nodes of thorax - Brachiocephalic", #196821008, "Structure of innominate lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Bronchpulm_L, "Lymph nodes of thorax - Bronchopulmonary Left", #279816002, "Bronchopulmonary lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Bronchpulm_R, "Lymph nodes of thorax - Bronchopulmonary Right", #279816002, "Bronchopulmonary lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Bronchpulms, "Lymph nodes of thorax - Bronchopulmonary", #279816002, "Bronchopulmonary lymph node group (body structure\)")
* insert MapConcept(#LN_Diaphragmatic, "Lymph nodes of thorax - Diaphragmatic", #196751009, "Structure of diaphragmatic lymph node (body structure\)")
* insert MapConcept(#LN_Iliac_Ext, "Lymph nodes of pelvis - External iliac", #65349008, "Structure of external iliac lymph node (body structure\)")
* insert MapConcept(#LN_Iliac_Int, "Lymph nodes of pelvis -  Internal iliac", #245357003, "Structure of internal iliac lymph node (body structure\)")
* insert MapConcept(#LN_Iliac, "Lymph nodes of pelvis -  common iliac", #84219008, "Structure of iliac lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Iliac_Ext_L, "Lymph nodes of pelvis - external iliac Left", #65349008, "Structure of external iliac lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Iliac_Ext_R, "Lymph nodes of pelvis - external iliac Right", #65349008, "Structure of external iliac lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Iliac_Int_L, "Lymph nodes of pelvis - internal iliac Left", #245299000, "Internal iliac lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Iliac_L, "Lymph nodes of pelvis - common iliac Left", #245295006, "Common iliac lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Iliac_R, "Lymph nodes of pelvis - common iliac Right", #245295006, "Common iliac lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_IMN_L, "Left Internal Mammary Lynph Node", #245282001, "Internal mammary lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_IMN_R, "Right Internal Mammary Lynph Node", #245282001, "Internal mammary lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_IMNs, "Lymph nodes IMN", #245282001, "Internal mammary lymph node group (body structure\)")
* insert MapConcept(#LN_Inguinofem, "Lymph nodes of pelvis - inguinofemoral", #279763008, "Inguinofemoral lymph node group (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Inguinofem_L, "Lymph nodes of pelvis - inguinofemoral left", #279763008, "Inguinofemoral lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Inguinofem_R, "Lymph nodes of pelvis - inguinofemoral right", #279763008, "Inguinofemoral lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Intercostals, "Lymph nodes of thorax - Intercostal", #64038003, "Intercostal lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_L, "Lymph Node Left", #59441001, "Structure of lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConcept(#LN_Ligamentarter, "Lymph nodes of thorax - Ligamentum arteriosum", #127938006, "Lymph node of aortopulmonary window (body structure\)")
* insert MapConceptLateralityQualifier(#LN_lliac_Int_R, "Lymph nodes of pelvis - internal iliac Right", #245299000, "Internal iliac lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Mediastinals, "Lymph nodes of thorax - Mediastinal", #62683002, "Mediastinal lymph node structure (body structure\)")
* insert MapConcept(#LN_Neck, "Neck Lymph Node", #81105003, "Cervical lymph node structure (body structure\)")
* insert MapConceptQualifier2(#LN_Neck_IA_L, "Level IA (Submental\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162616006, "Level IA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IA_R, "Level IA (Submental\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162616006, "Level IA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IB_L, "Level IB (Submandibular\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162617002, "Level IB (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IB_R, "Level IB (Submandibular\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162617002, "Level IB (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_II_L, "Level IIA & IIB (Upper Jugular\) neck nodes Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #258401000, "Level II (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_II_R, "Level IIA & IIB (Upper Jugular\) neck nodes Left", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #258401000, "Level II (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IIA_L, "Level IIA (Upper Jugular\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1284814003, "Level IIA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IIA_R, "Level IIA (Upper Jugular\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1284814003, "Level IIA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IIB_L, "Level IIB (Upper Jugular\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1284815002, "Level IIB (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IIB_R, "Level IIB (Upper Jugular\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1284815002, "Level IIB (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_III_L, "Level III (Middle Jugular\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #258402007, "Level III (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_III_R, "Level III (Middle Jugular\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #258402007, "Level III (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IV_L, "Level IV neck (Lower Jugular\) node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #258403002, "Level IV (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IV_R, "Level IV (Lower Jugular\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #258403002, "Level IV (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_V_L, "Level VA\, VB and VC (Posterior Triangle\) neck nodes Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #258404008, "Level V (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_V_R, "Level VA\, VB and VC (Posterior Triangle\) neck nodes Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #258404008, "Level V (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VA_L, "Level VA (Posterior Triangle\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162622002, "Level VA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VA_R, "Level VA (Posterior Triangle\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162622002, "Level VA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VB_L, "Level VB (Posterior Triangle\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162623007, "Level VB (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VB_R, "Level VB (Posterior Triangle\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162623007, "Level VB (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VC_L, "Level VC (Posterior Triangle\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162624001, "Level VC (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VC_R, "Level VC (Posterior Triangle\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162624001, "Level VC (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VI_L, "Level VI (Anterior Triangle\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #258405009, "Level VI (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VI_R, "Level VI (Anterior Triangle\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #258405009, "Level VI (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VII_L, "Level VII (Upper Mediastinal\) neck node Left", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #395168005, "Level VII (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VII_R, "Level VII (Upper Mediastinal\) neck node Right", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162628003, "Level VIIA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VIIA_L, "LN_Neck_VIIA_L", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162628003, "Level VIIA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VIIA_R, "LN_Neck_VIIA_R", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #395168005, "Level VII (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VIII_R, "LN_Neck_VIII_R", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162618007, "Level VIII (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_VIII_L, "LN_Neck_VIII_L", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162618007, "Level VIII (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IX_R, "LN_Neck_IX_R", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162619004, "Level IX (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_IX_L, "LN_Neck_IX_L", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162619004, "Level IX (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_X_R, "LN_Neck_X_R", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162614009, "Level X (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_X_L, "LN_Neck_X_L", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162614009, "Level X (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_XA_R, "LN_Neck_XA_R", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162615005, "Level XA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_XA_L, "LN_Neck_XA_L", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162615005, "Level XA (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_XB_R, "LN_Neck_XB_R", #81105003, "Cervical lymph node structure (body structure\)", #24028007, "Right (qualifier value\)", #1162613003, "Level XB (qualifier value\)", SCT)
* insert MapConceptQualifier2(#LN_Neck_XB_L, "LN_Neck_XB_L", #81105003, "Cervical lymph node structure (body structure\)", #7771000, "Left (qualifier value\)", #1162613003, "Level XB (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Obturator_L, "Lymph nodes of pelvis - obturator Left", #36086000, "Structure of obturator lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Obturator_R, "Lymph nodes of pelvis - obturator Right", #36086000, "Structure of obturator lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Paraaortic, "Lymph nodes of abdomen- para-aortic", #35783009, "Structure of aortic lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Paramammary_L, "Lymph nodes of thorax - Paramammary Left", #368550005, "Structure of paramammary lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Paramammary_R, "Lymph nodes of thorax - Paramammary Right", #368550005, "Structure of paramammary lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Paramammarys, "Lymph nodes of thorax - Paramammary", #368550005, "Structure of paramammary lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Parasternal_L, "Lymph nodes of thorax - Parasternal Left", #82365008, "Structure of parasternal lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Parasternal_R, "Lymph nodes of thorax - Parasternal Right", #82365008, "Structure of parasternal lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Parasternals, "Lymph nodes of thorax - Parasternal", #82365008, "Structure of parasternal lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Pelvic_L, "Pelvic Lymph Nodes Left", #245294005, "Pelvic lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Pelvic_R, "Pelvic Lymph Nodes Right", #245294005, "Pelvic lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Pelvics, "Pelvic Lymph Nodes", #245294005, "Pelvic lymph node group (body structure\)")
* insert MapConcept(#LN_Portahepatis, "Porta hepatis", #245288002, "Portahepatis lymph node group (body structure\)")
* insert MapConcept(#Nose, "Nose", #45206002, "Nasal structure (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Presacral_L, "Lymph nodes of pelvis - presacral Left", #1187336003, "Presacral lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Presacral_R, "Lymph nodes of pelvis - presacral Right", #1187336003, "Presacral lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Pulmonary_L, "Lymph nodes of thorax - Pulmonary Left", #196662004, "Structure of intrapulmonary lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Pulmonary_R, "Lymph nodes of thorax - Pulmonary Right", #196662004, "Structure of intrapulmonary lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Pulmonarys, "Lymph nodes of thorax - Pulmonary", #196662004, "Structure of intrapulmonary lymph node (body structure\)")
* insert MapConceptLateralityQualifier(#LN_R, "Lymph Node Right", #59441001, "Structure of lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Sclav_L, "Supraclavicular Lymph Node Left", #76838003, "Structure of supraclavicular lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Sclav_R, "Supraclavicular Lymph Node Right", #76838003, "Structure of supraclavicular lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Trachbrnchs, "Lymph nodes of thorax - Tracheobronchial", #245283006, "Tracheobronchial lymph node group (body structure\)")
* insert MapConceptLateralityQualifier(#LN_Trachbrnchs_L, "Lymph nodes of thorax - Tracheobronchial Left", #245283006, "Tracheobronchial lymph node group (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#LN_Trachbrnchs_R, "Lymph nodes of thorax - Tracheobronchial Right", #245283006, "Tracheobronchial lymph node group (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Nrv_Peripheral, "Peripheral Nerve", #84782009, "Peripheral nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#Lobe_Frontal_L, "Frontal Lobe Left", #83251001, "Frontal lobe structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lobe_Frontal_R, "Frontal Lobe Right", #83251001, "Frontal lobe structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Nrv_Root, "Nerve Root", #40958000, "Nerve root structure (body structure\)")
* insert MapConceptLateralityQualifier(#Lobe_Occipital_L, "Occipital Lobe Left", #31065004, "Occipital lobe structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lobe_Occipital_R, "Occipital Lobe Right", #31065004, "Occipital lobe structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#OpticChiasm, "Optic chiasm", #244453006, "Structure of optic chiasma (body structure\)")
* insert MapConceptLateralityQualifier(#Lobe_Parietal_L, "Parietal Lobe Left", #16630005, "Parietal lobe structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lobe_Parietal_R, "Parietal Lobe Right", #16630005, "Parietal lobe structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#OpticNrv, "Optic nerve", #18234004, "Optic nerve structure (body structure\)")
* insert MapConceptLateralityQualifier(#Lobe_Temporal_L, "Temporal Lobe Left", #78277001, "Temporal lobe structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lobe_Temporal_R, "Temporal Lobe Right", #78277001, "Temporal lobe structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lung_L, "Lung Left", #39607008, "Lung structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Lung_LLL, "Lung - lower lobe of left", #31094006, "Structure of lobe of lung (body structure\)", #7771000, "left (qualifier value\)", #261122009, "lower (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Lung_LUL, "Lung - upper lobe of left", #31094006, "Structure of lobe of lung (body structure\)", #7771000, "left (qualifier value\)", #261183002, "upper (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lung_R, "Lung Right", #31094006, "Structure of lobe of lung (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Lung_RLL, "Lung - lower lobe of right", #31094006, "Structure of lobe of lung (body structure\)", #24028007, "right (qualifier value\)", #261122009, "lower (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Lung_RML, "Lung - middle lobe of right", #31094006, "Structure of lobe of lung (body structure\)", #24028007, "right (qualifier value\)", #260528009, "middle (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Lung_RUL, "Lung - upper lobe of right", #31094006, "Structure of lobe of lung (body structure\)", #24028007, "right (qualifier value\)", #261183002, "upper (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Lungs, "Pair of Lungs", #39607008, "Lung structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Malleus, "Malleus", #34080009, "Malleus structure (body structure\)")
* insert MapConcept(#Malleus_L, "Malleus Left", #34080009, "Malleus structure (body structure\)")
* insert MapConcept(#Malleus_R, "Malleus Right", #34080009, "Malleus structure (body structure\)")
* insert MapConcept(#Maxilla, "Maxilla", #70925003, "Bone structure of maxilla (body structure\)")
* insert MapConcept(#Maxilla_L, "Maxilla Left", #70925003, "Bone structure of maxilla (body structure\)")
* insert MapConceptLateralityQualifier(#Maxilla_R, "Maxilla Right", #70925003, "Bone structure of maxilla (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Orbit_L, "Orbit Left", #363654007, "Structure of orbit proper (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Orbit_R, "Orbit Right", #363654007, "Structure of orbit proper (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Oropharynx, "Oral part of pharynx", #31389004, "Oropharyngeal structure (body structure\)")
* insert MapConceptLocationQualifier(#Musc_Constrict_I, "Pharynx - Inferior pharyngeal constrictor", #4866005, "Constrictor muscle of pharynx structure (body structure\)", #261089000, "inferior (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Musc_Constrict_M, "Pharynx - Middle pharyngeal constrictor", #4866005, "Constrictor muscle of pharynx structure (body structure\)", #260528009, "middle (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#Musc_Constrict_S, "Pharynx - Superior pharyngeal constrictor", #4866005, "Constrictor muscle of pharynx structure (body structure\)", #264217000, "superior (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Digastric_L, "Digastric muscle Left", #52410001, "Digastric muscle structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Digastric_R, "Digastric muscle Right", #52410001, "Digastric muscle structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Ovaries, "Ovary", #15497006, "Ovarian structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Musc_Masseter_L, "Masseter Muscle Left", #79368004, "Masseter muscle structure (body structure\)")
* insert MapConcept(#Musc_Masseter_R, "Masseter Muscle Right", #79368004, "Masseter muscle structure (body structure\)")
* insert MapConceptLateralityQualifier(#Musc_Platysma_L, "Platysma Left", #18252004, "Structure of platysma muscle (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Platysma_R, "Platysma Right", #18252004, "Structure of platysma muscle (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Pterygoid_L, "Pterygoid muscles - Left", #76738006, "Structure of pterygoid muscle (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Pterygoid_R, "Pterygoid muscles - Right", #76738006, "Structure of pterygoid muscle (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Sclmast_L, "Sternocleidomastoid Left", #22823000, "Structure of sternocleidomastoid muscle (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Sclmast_R, "Sternocleidomastoid Right", #22823000, "Structure of sternocleidomastoid muscle (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Musc_Temporal_L, "Temporal muscle - Left", #52927003, "Structure of temporalis muscle (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConcept(#Palate_Soft, "Soft palate", #49460000, "Soft palate structure (body structure\)")
* insert MapConceptQualifier2(#Nasalconcha_LI, "Inferior Nasal Concha Left", #46607005, "Nasal turbinate structure (body structure\)", #7771000, "left (qualifier value\)", #261089000, "inferior (qualifier value\)", SCT)
* insert MapConceptQualifier2(#Nasalconcha_RI, "Inferior Nasal Concha Right", #46607005, "Nasal turbinate structure (body structure\)", #24028007, "right (qualifier value\)", #261089000, "inferior (qualifier value\)", SCT)
* insert MapConcept(#Pancreas, "Pancreas", #15776009, "Pancreatic structure (body structure\)")
* insert MapConcept(#Pancreas_Head, "Head of Pancreas", #64163001, "Structure of head of pancreas (body structure\)")
* insert MapConcept(#Pancreas_Tail, "Tail of Pancreas", #73239005, "Structure of tail of pancreas (body structure\)")
* insert MapConcept(#Parametrium, "Parametrium", #45682005, "Structure of parametrium (body structure\)")
* insert MapConceptLateralityQualifier(#Parotids, "Pair of Parotid Glands", #45289007, "Parotid gland structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#PenileBulb, "Penile Bulb", #52737000, "Structure of bulb of penis (body structure\)")
* insert MapConceptLateralityQualifier(#OpticNrv_L, "Optic nerve - left", #18234004, "Optic nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#OpticNrv_R, "Optic nerve - right", #18234004, "Optic nerve structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Penis, "Penis", #18911002, "Penile structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Pericardium, "Pericardium", #76848001, "Pericardial structure (body structure\)")
* insert MapConcept(#Perineum, "Perineum", #38864007, "Perineal structure (body structure\)")
* insert MapConcept(#Peritoneum, "Peritoneal sac", #118762006, "Peritoneal sac structure (body structure\)")
* insert MapConceptLateralityQualifier(#Ovary_L, "Ovary Left", #15497006, "Ovarian structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Ovary_R, "Ovary Right", #15497006, "Ovarian structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Pacemaker, "Pacemaker", #14106009, "Cardiac pacemaker\, device (physical object\)")
* insert MapConcept(#Pharynx, "Pharynx", #54066008, "Pharyngeal structure (body structure\)")
* insert MapConcept(#PancJejuno, "The pancreatic jejuno junction - generated by surgical procedure", #110822002, "Pancreas and jejunum (combined site\) (body structure\)")
* insert MapConcept(#Pineal, "Pineal gland", #45793000, "Pineal structure (body structure\)")
* insert MapConcept(#Pituitary, "Pituitary gland", #56329008, "Pituitary structure (body structure\)")
* insert MapConcept(#Pons, "Pons", #49557009, "Pontine structure (body structure\)")
* insert MapConcept(#Prostate, "Prostate", #41216001, "Prostatic structure (body structure\)")
* insert MapConceptLateralityQualifier(#Parotid_L, "Parotid Left", #45289007, "Parotid gland structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Parotid_R, "Parotid Right", #45289007, "Parotid gland structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#ProstateBed, "Prostate Bed", #1162492000, "Tumor bed (morphologic abnormality\)")
* insert MapConceptLateralityQualifier(#Pterygoid_Lat_L, "Pterygoid muscles lateral - Left", #88938001, "Structure of lateral pterygoid muscle (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Pterygoid_Lat_R, "Pterygoid muscles lateral - Right", #88938001, "Structure of lateral pterygoid muscle (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Pterygoid_Med_L, "Pterygoid muscles medial - Left", #85002005, "Structure of medial pterygoid muscle (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Pterygoid_Med_R, "Pterygoid muscles medial - Right", #85002005, "Structure of medial pterygoid muscle (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Rectal_Wall, "Rectal Wall", #511000202101, "Rectum wall structure (body structure\)")
* insert MapConcept(#Rectum, "Large bowel - Rectum", #34402009, "Rectum structure (body structure\)")
* insert MapConcept(#SacralPlex, "Sacral Plexus", #62397004, "Sacral plexus structure (body structure\)")
* insert MapConcept(#Scalp, "Scalp", #41695006, "Scalp structure (body structure\)")
* insert MapConceptLateralityQualifier(#Proc_Condyloid_L, "Condyloid process of mandible - Right", #67183008, "Structure of condyloid process of mandible (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Proc_Condyloid_R, "Condyloid process of mandible - Left", #67183008, "Structure of condyloid process of mandible (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Proc_Coronoid_L, "Coronoid process of mandible - Left", #124002, "Structure of coronoid process of mandible (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Proc_Coronoid_R, "Coronoid process of mandible - Right", #124002, "Structure of coronoid process of mandible (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Scar, "Scar", #12402003, "Scar (morphologic abnormality\)")
* insert MapConcept(#Scar_Boost, "Scar Boost", #12402003, "Scar (morphologic abnormality\)")
* insert MapConcept(#Scrotum, "Scrotum (skin & cremasteric fascia\)", #20233005, "Scrotal structure (body structure\)")
* insert MapConcept(#SeminalVes, "Seminal vesicle", #64739004, "Seminal vesicle structure (body structure\)")
* insert MapConceptLocationQualifier(#SeminalVes_Dist, "Distal Seminal Vesicle", #64739004, "Seminal vesicle structure (body structure\)", #46053002, "distal (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#SeminalVes_Prox, "Proximal Seminal Vesicle", #64739004, "Seminal vesicle structure (body structure\)", #40415009, "proximal (qualifier value\)", SCT)
* insert MapConcept(#Sinus_Ethmoid, "Ethmoidal Sinus", #54215007, "Ethmoid sinus structure (body structure\)")
* insert MapConcept(#PubicSymphys, "Pubic Symphysis", #82561000, "Symphysis pubis structure (body structure\)")
* insert MapConceptLateralityQualifier(#PubicSymphys_L, "Pubic bone Left", #82561000, "Symphysis pubis structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#PubicSymphys_R, "Pubic bone Right", #82561000, "Symphysis pubis structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Radius_L, "Radius Left", #62413002, "Bone structure of radius (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Radius_R, "Radius Right", #62413002, "Bone structure of radius (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Sinus_Frontal, "Frontal Sinus", #55060009, "Frontal sinus structure (body structure\)")
* insert MapConcept(#Sinus_Maxilry, "Maxillary Sinus", #15924003, "Maxillary sinus structure (body structure\)")
* insert MapConceptLateralityQualifier(#Retina_L, "Retina Left", #5665001, "Retinal structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Retina_R, "Retina Right", #5665001, "Retinal structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Retinas, "Both Retinas", #5665001, "Retinal structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Rib, "Any Rib volume", #113197003, "Bone structure of rib (body structure\)")
* insert MapConceptLateralityQualifier(#Rib01_L, "First Rib Left", #48535007, "Bone structure of first rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib01_R, "First Rib Right", #48535007, "Bone structure of first rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib02_L, "Second rib Left", #78247007, "Bone structure of second rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib02_R, "Second rib Right", #78247007, "Bone structure of second rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib03_L, "Third rib Left", #25888004, "Bone structure of third rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib03_R, "Third rib Right", #25888004, "Bone structure of third rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib04_L, "Fourth rib Left", #25523003, "Bone structure of fourth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib04_R, "Fourth rib Right", #25523003, "Bone structure of fourth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib05_L, "Fifth rib Left", #15339008, "Bone structure of fifth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib05_R, "Fifth rib Right", #15339008, "Bone structure of fifth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib06_L, "Sixth rib Left", #59558009, "Bone structure of sixth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib06_R, "Sixth rib Right", #59558009, "Bone structure of sixth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib07_L, "Seventh rib Left", #24915002, "Bone structure of seventh rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib07_R, "Seventh rib Right", #24915002, "Bone structure of seventh rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib08_L, "Eighth rib Left", #5953002, "Bone structure of eighth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib08_R, "Eighth rib Right", #5953002, "Bone structure of eighth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib09_L, "Ninth rib Left", #22565002, "Bone structure of ninth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib09_R, "Ninth rib Right", #22565002, "Bone structure of ninth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib10_L, "Tenth rib Left", #77644006, "Bone structure of tenth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib10_R, "Tenth rib Right", #77644006, "Bone structure of tenth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib11_L, "Eleventh rib Left", #58830002, "Bone structure of eleventh rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib11_R, "Eleventh rib Right", #58830002, "Bone structure of eleventh rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib12_L, "Twelfth rib Left", #43993008, "Bone structure of twelfth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib12_R, "Twelfth rib Right", #43993008, "Bone structure of twelfth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Skin, "Skin", #39937001, "Skin structure (body structure\)")
* insert MapConceptLateralityQualifier(#Rib13_L, "Thirteenth   rib Left", #1193560003, "Bone structure of thirteenth rib (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Rib13_R, "Thirteenth  rib Right", #1193560003, "Bone structure of thirteenth rib (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Skin_Perineum, "Skin of Perineum", #48014002, "Skin structure of perineum (body structure\)")
* insert MapConceptLateralityQualifier(#Scapula_L, "Scapula Left", #79601000, "Bone structure of scapula (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Scapula_R, "Scapula Right", #79601000, "Bone structure of scapula (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Skin_Peritoneum, "Skin of Peritoneum", #75093004, "Skin structure of anterior abdominal wall (body structure\)")
* insert MapConcept(#Spc_Bowel, "Space occupied by bowel", #1285442003, "Estimated contoured volume of bowel in peritoneal cavity using radiographic imaging (observable entity\)")
* insert MapConcept(#Spc_Bowel_Small, "Space occupied by small bowel", #1285443008, "Estimated contoured volume of small bowel in peritoneal cavity using imaging (observable entity\)")
* insert MapConcept(#Spc_Retrophars, "Retropharyngeal space", #789564000, "Structure of retropharyngeal space (body structure\)")
* insert MapConcept(#Spc_Retrosty, "Retrostyloid space", #1193554003, "Retrostyloid space (body structure\)")
* insert MapConceptLateralityQualifier(#Spc_Supraclav_L, "Supraclavicular space - Left", #76838003, "Structure of supraclavicular lymph node (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Spc_Supraclav_R, "Supraclavicular space - Right", #76838003, "Structure of supraclavicular lymph node (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Sinus_Frontal_L, "Frontal Sinus Left", #55060009, "Frontal sinus structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Sinus_Frontal_R, "Frontal Sinus Right", #55060009, "Frontal sinus structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Sphincter_Anal, "Internal Anal Sphincter", #41178004, "Structure of sphincter ani muscle (body structure\)")
* insert MapConceptLateralityQualifier(#Sinus_Maxilry_L, "Maxillary Sinus", #15924003, "Maxillary sinus structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Sinus_Maxilry_R, "Maxillary Sinus", #15924003, "Maxillary sinus structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#SpinalCanal, "Vertebral canal", #61853006, "Spinal canal structure (body structure\)")
* insert MapConceptLateralityQualifier(#Sinus_Sphenoid_L, "Sphenoidal Sinus Left", #24999009, "Sphenoid sinus structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Sinus_Sphenoid_R, "Sphenoidal Sinus Right", #24999009, "Sphenoid sinus structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#SpinalCord, "Spinal Cord", #2748008, "Spinal cord structure (body structure\)")
* insert MapConcept(#SpinalCord_Cerv, "Spinal Cord Cervical", #54785003, "Cervical spinal cord structure (body structure\)")
* insert MapConcept(#SpinalCord_Lum, "Spinal Cord Lumbar", #60051002, "Lumbar spinal cord structure (body structure\)")
* insert MapConcept(#Skull, "Skeletal system of head", #89546000, "Bone structure of cranium (body structure\)")
* insert MapConcept(#SpinalCord_Sac, "Spinal Cord Sacral", #11478001, "Sacral spinal cord structure (body structure\)")
* insert MapConcept(#SpinalCord_Thor, "Spinal Cord Thoracic", #50800009, "Thoracic spinal cord structure (body structure\)")
* insert MapConcept(#Spongiosum, "Penis Corpus Spongiosum", #25270003, "Corpus spongiosum structure (body structure\)")
* insert MapConceptLateralityQualifier(#Spc_Retrophar_L, "Retropharyngeal space Left", #789564000, "Structure of retropharyngeal space (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Spc_Retrophar_R, "Retropharyngeal space Right", #789564000, "Structure of retropharyngeal space (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Stapes, "Stapes", #22718006, "Stapes structure (body structure\)")
* insert MapConcept(#Stomach, "Stomach", #69695003, "Stomach structure (body structure\)")
* insert MapConceptLateralityQualifier(#Spc_Retrosty_L, "Retrostyloid space -Left", #1193554003, "Retrostyloid space (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Spc_Retrosty_R, "Retrostyloid space -Left", #1193554003, "Retrostyloid space (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Strct_Suprapatel, "Suprapatellar Structures", #75415000, "Structure of suprapatellar bursa (body structure\)")
* insert MapConcept(#Surf_Eye_L, "Surface of Left Eye", #67548002, "Structure of conjunctiva of left eye (body structure\)")
* insert MapConcept(#Surf_Eye_R, "Surface of Right Eye", #13014005, "Structure of conjunctiva of right eye (body structure\)")
* insert MapConcept(#Sys_Ventricular, "Ventricular System of the Brain", #8997002, "Space of ventricular system of brain (body structure\)")
* insert MapConcept(#Tendon, "Tendon", #13024002, "Tendon structure (body structure\)")
* insert MapConcept(#Tendon_Quad, "Quadriceps Tendon", #70567001, "Structure of quadriceps tendon (body structure\)")
* insert MapConceptLateralityQualifier(#Testis, "Testis", #40689003, "Testis structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#ThecalSac, "Thecal Sac", #37554007, "Spinal dura mater structure (body structure\)")
* insert MapConcept(#Thoracic_Duct, "Thoracic Duct", #1732005, "Thoracic duct structure (body structure\)")
* insert MapConcept(#Spleen, "Spleen", #78961009, "Splenic structure (body structure\)")
* insert MapConcept(#Spleen_Hilum, "Splenic hilum", #35378004, "Structure of hilum of spleen (body structure\)")
* insert MapConcept(#Tongue, "Tongue", #21974007, "Tongue structure (body structure\)")
* insert MapConcept(#Tongue_All, "Entire Tongue", #181226008, "Entire tongue (body structure\)")
* insert MapConcept(#Stapes_L, "Stapes Left", #22718006, "Stapes structure (body structure\)")
* insert MapConcept(#Stapes_R, "Stapes Right", #22718006, "Stapes structure (body structure\)")
* insert MapConcept(#Tongue_Base, "Base of Tongue", #47975008, "Structure of root of tongue (body structure\)")
* insert MapConcept(#Tongue_Oral, "Oral Tongue", #61344008, "Structure of body of tongue (body structure\)")
* insert MapConceptLateralityQualifier(#Tongue_Oral_L, "Left Oral Tonque", #61344008, "Structure of body of tongue (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConcept(#Trachea, "Trachea", #44567001, "Tracheal structure (body structure\)")
* insert MapConceptLocationQualifier(#Trachea_NAdj, "Trachea non adjacent wall", #44567001, "Tracheal structure (body structure\)", #1217011006, "non-adjacent (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Ureters, "Both Ureters", #87953007, "Ureteric structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Urethra, "Urethra", #13648007, "Urethral structure (body structure\)")
* insert MapConcept(#Urethra_Prostatc, "Prostatic Urethra", #71553001, "Prostatic urethra structure (body structure\)")
* insert MapConceptLateralityQualifier(#Testis_L, "Testis Left", #40689003, "Testis structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Testis_R, "Testis Right", #40689003, "Testis structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Uterus, "Uterus", #35039007, "Uterine structure (body structure\)")
* insert MapConcept(#V_Azygos, "Azygos Vein", #72107004, "Structure of azygous vein (body structure\)")
* insert MapConceptLateralityQualifier(#V_Brachioceph_L, "Brachiocephalic vein Left", #8887007, "Structure of brachiocephalic vein (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Brachioceph_R, "Brachiocephalic vein Right", #8887007, "Structure of brachiocephalic vein (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Iliac_Ext_L, "External iliac vein Left", #63507001, "Structure of external iliac vein (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Tongue_Base_L, "Base of Tongue", #47975008, "Structure of root of tongue (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Tongue_Base_R, "Base of Tongue", #47975008, "Structure of root of tongue (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Iliac_Ext_R, "External iliac vein Right", #63507001, "Structure of external iliac vein (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Iliac_Int_L, "Internal iliac vein Left", #40300007, "Structure of internal iliac vein (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Tongue_Oral_R, "Right Oral Tongue", #61344008, "Structure of body of tongue (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#Tonsil, "Tonsil", #75573002, "Tonsillar structure (palatine\) (body structure\)")
* insert MapConceptLateralityQualifier(#V_Iliac_Int_R, "Internal iliac vein Right", #40300007, "Structure of internal iliac vein (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Iliac_L, "Common iliac vein Right", #46027005, "Structure of common iliac vein (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#TumorBed, "Tumor Bed", #1162492000, "Tumor bed (morphologic abnormality\)")
* insert MapConceptLateralityQualifier(#Ureter_L, "Ureter Left", #87953007, "Ureteric structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Ureter_R, "Ureter Right", #87953007, "Ureteric structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Iliac_R, "Common iliac vein Left", #46027005, "Structure of common iliac vein (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Jugular_Ext_L, "external  jugular vein left", #71585003, "Structure of external jugular vein (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Jugular_Ext_R, "external jugular vein right", #71585003, "Structure of external jugular vein (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Jugular_Int_L, "Internal jugular vein left", #12123001, "Internal jugular vein structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Jugular_Int_R, "Internal jugular vein right", #12123001, "Internal jugular vein structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#V_Portal, "Portal Vein", #32764006, "Portal vein structure (body structure\)")
* insert MapConcept(#V_Pulmonary, "Pulmonary vein", #430757002, "Structure of pulmonary vein great vessel (body structure\)")
* insert MapConcept(#V_Subclavians, "Subclavian Vein", #9454009, "Structure of subclavian vein (body structure\)")
* insert MapConceptLocationQualifier(#V_Venacava_I, "Inferior vena cava", #35532006, "Vena caval structure (body structure\)", #261089000, "inferior (qualifier value\)", SCT)
* insert MapConceptLocationQualifier(#V_Venacava_S, "Superior vena cava", #35532006, "Vena caval structure (body structure\)", #264217000, "superior (qualifier value\)", SCT)
* insert MapConcept(#Vagina, "Vagina", #76784001, "Vaginal structure (body structure\)")
* insert MapConcept(#Vagina_Surf, "Surface of Vagina", #279894000, "Inferior surface of vaginal cervix (body structure\)")
* insert MapConcept(#VaginalCuff, "Vaginal Cuff", #438074005, "Vaginal cuff (morphologic abnormality\)")
* insert MapConcept(#Valve, "Valve", #17401000, "Cardiac valve structure (body structure\)")
* insert MapConcept(#V_Jugular, "Any Jugular Vein", #63190004, "Structure of jugular vein (body structure\)")
* insert MapConcept(#Valve_Mitral, "Mitral Valve", #91134007, "Mitral valve structure (body structure\)")
* insert MapConcept(#Valve_Pulmonic, "Pulmonic Valve", #39057004, "Pulmonary valve structure (body structure\)")
* insert MapConcept(#Valve_Tricuspid, "Tricuspid Valve", #46030003, "Tricuspid valve structure (body structure\)")
* insert MapConcept(#Ventricle, "Ventricle (cardiac\)", #21814001, "Cardiac ventricular structure (body structure\)")
* insert MapConceptLateralityQualifier(#Ventricle_L, "Ventricle (cardiac\) Left", #21814001, "Cardiac ventricular structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#Ventricle_R, "Ventricle (cardiac\) Right", #21814001, "Cardiac ventricular structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Subclavian_L, "Subclavian Vein Left", #9454009, "Structure of subclavian vein (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#V_Subclavian_R, "Subclavian Vein Right", #9454009, "Structure of subclavian vein (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#VocalCords, "Vocal Cords", #46105003, "Vocal cord structure (body structure\)", #51440002, "right+left (qualifier value\)", SCT)
* insert MapConcept(#Vulva, "Vulva", #45292006, "Vulval structure (body structure\)")
* insert MapConcept(#Wall_Vagina, "Wall of vagina", #263355003, "Vaginal wall (body structure\)")
* insert MapConcept(#Body, "Only the body", #38266002, "Entire body as a whole (body structure\)")
* insert MapConcept(#BoneMarrow_Act, "Active Bone Marrow", #75330005, "Structure of red bone marrow (body structure\)")
* insert MapConcept(#Cartlg_Thyroid, "Thyroid cartilage", #52940008, "Thyroid cartilage structure (body structure\)")
* insert MapConcept(#Cist_Suprasellar, "Suprasellar Cistern", #15328005, "Structure of suprasellar region (body structure\)")
* insert MapConcept(#Valve_Aortic, "Aortic Valve", #34202007, "Aortic valve structure (body structure\)")
* insert MapConcept(#Dens, "Cervical vertebrae - Bony part of dens of axis", #1172006, "Structure of odontoid process of axis (body structure\)")
* insert MapConceptLocationQualifier(#External, "Contour encompassing body plus other external items", #123037004, "Body structure (body structure\)", #261074009, "external (qualifier value\)", SCT)
* insert MapConcept(#VB, "Vertebral Body", #3572006, "Structure of body of vertebra (body structure\)")
* insert MapConcept(#VB_C, "Cervical vertebrae", #3572006, "Bone structure of cervical vertebra (body structure\)")
* insert MapConcept(#VB_C1, "Atlas - C1", #14806007, "Bone structure of atlas (body structure\)")
* insert MapConcept(#VB_C2, "Axis - C2", #39976000, "Bone structure of axis (body structure\)")
* insert MapConcept(#VB_C3, "Cervical vertebra - C3", #91116008, "Structure of body of third cervical vertebra (body structure\)")
* insert MapConcept(#VB_C4, "Cervical vertebra - C4", #14705001, "Structure of body of fourth cervical vertebra (body structure\)")
* insert MapConcept(#VB_C5, "Cervical vertebra - C5", #67479001, "Structure of body of fifth cervical vertebra (body structure\)")
* insert MapConcept(#VB_C6, "Cervical vertebra - C6", #88298007, "Structure of body of sixth cervical vertebra (body structure\)")
* insert MapConcept(#VB_C7, "Cervical vertebra - C7", #16126006, "Structure of body of seventh cervical vertebra (body structure\)")
* insert MapConcept(#VB_L, "Lumbar Vertebrae", #73903008, "Bone structure of lumbar vertebra (body structure\)")
* insert MapConcept(#VB_L1, "Lumbar Vertebra L1", #61032001, "Structure of body of first lumbar vertebra (body structure\)")
* insert MapConcept(#VB_L2, "Lumbar Vertebra L2", #53983007, "Structure of body of second lumbar vertebra (body structure\)")
* insert MapConcept(#VB_L3, "Lumbar Vertebra L3", #55492004, "Structure of body of third lumbar vertebra (body structure\)")
* insert MapConcept(#VB_L4, "Lumbar Vertebra L4", #71996003, "Structure of body of fourth lumbar vertebra (body structure\)")
* insert MapConcept(#VB_L5, "Lumbar Vertebra L5", #21799000, "Structure of body of fifth lumbar vertebra (body structure\)")
* insert MapConcept(#VB_S, "Sacral Vertebra", #87141009, "Sacral vertebra structure (body structure\)")
* insert MapConcept(#VB_S1, "Sacral Vertebra S1", #65985001, "Structure of first sacral vertebra (body structure\)")
* insert MapConcept(#VB_S2, "Sacral Vertebra S2", #11808007, "Structure of second sacral vertebra (body structure\)")
* insert MapConcept(#VB_S3, "Sacral Vertebra S3", #49967005, "Structure of third sacral vertebra (body structure\)")
* insert MapConcept(#VB_S4, "Sacral Vertebra S4", #69950008, "Structure of fourth sacral vertebra (body structure\)")
* insert MapConcept(#VB_S5, "Sacral Vertebra S5", #21452006, "Structure of fifth sacral vertebra (body structure\)")
* insert MapConcept(#VB_T, "Thoracic Vertebra", #35769007, "Bone structure of thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T01, "Thoracic Vertebra T1", #56094003, "Structure of body of first thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T02, "Thoracic Vertebra T2", #50060007, "Structure of body of second thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T03, "Thoracic Vertebra T3", #73138009, "Structure of body of third thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T04, "Thoracic Vertebra T4", #86197001, "Structure of body of fourth thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T05, "Thoracic Vertebra T5", #6105006, "Structure of body of fifth thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T06, "Thoracic Vertebra T6", #32430008, "Structure of body of sixth thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T07, "Thoracic Vertebra T7", #71737002, "Structure of body of seventh thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T08, "Thoracic Vertebra T8", #77435000, "Structure of body of eighth thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T09, "Thoracic Vertebra T9", #33766003, "Structure of body of ninth thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T10, "Thoracic Vertebra T10", #48405002, "Structure of body of tenth thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T11, "Thoracic Vertebra T11", #52120002, "Structure of body of eleventh thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T12, "Thoracic Vertebra T12", #280849005, "Structure of body of twelfth  thoracic vertebra (body structure\)")
* insert MapConcept(#VB_T12, "Thoracic Vertebra T13", #1186895000, "Structure of body of thirteenth  thoracic vertebra (body structure\)")
* insert MapConceptLocationQualifier(#VBs, "Vertebral Bodies", #3572006, "Structure of body of vertebra (body structure\)", #255204007, "multiple (qualifier value\)", SCT)
* insert MapConcept(#Fossa_Jugular, "Jugular Fossa", #1187337007, "Jugular Fossa (body structure\)")
* insert MapConcept(#Fossa_Posterior, "Posterior Fossa", #35763008, "Structure of posterior fossa of cranial cavity (body structure\)")
* insert MapConceptLateralityQualifier(#VocalCord_L, "Left Vocal Cord", #46105003, "Vocal cord structure (body structure\)", #7771000, "left (qualifier value\)", SCT)
* insert MapConceptLateralityQualifier(#VocalCord_R, "Right Vocal Cord", #46105003, "Vocal cord structure (body structure\)", #24028007, "right (qualifier value\)", SCT)
* insert MapConcept(#LN_Presacral, "Lymph nodes of pelvis - presacral", #1187336003, "Presacral lymph node group (body structure\)")
* insert MapConcept(#Vomer, "Vomer", #87166008, "Vomer bone structure (body structure\)")
* insert MapConcept(#Sinus_Sphenoid, "Sphenoidal Sinus", #24999009, "Sphenoid sinus structure (body structure\)")
* insert MapConcept(#Strct, "Structure", #123037004, "Body structure (body structure\)")
//* insert AddGroup("TG263",SCT_TBD)



---

// File: input/fsh/DEF_Cap_mcode-receiver-cancer-conditions-then-patients.fsh

Instance: mcode-receiver-cancer-conditions-then-patients
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Retrieves a Bundle of Condition resources with a code in mCODE's cancer condition value set, and allows for associated Patient resources to be retrieved in a subsequent request. Use ONLY when reverse chaining AND `_include` are not available on the system."
* name = "CapabilityStatementReceiverConditionsThenPatients"
* title = "mCODE Data Receiver: Get Conditions then Patients"
* insert mCODE_CapabilityStatement_Client_Common

* insert mCODE_CapabilityStatement_Patient_Client_Common_Rules // Has to be here to make indexing work for the Condition RuleSet below

// GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-cancer-disorder-vs
// GET [base]/Group?code=mcode-cancer-patient
* insert mCODE_CapabilityStatement_Condition_Client_Common_Rules

// GET [base]/Patient?_id=id1|id2|id3
* rest[0].resource[0].searchParam[0].name = "_id"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-id"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Cap_mcode-receiver-patient-bundle.fsh

Instance: mcode-receiver-patient-bundle
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Gets an [mCODE Patient Bundle](StructureDefinition-mcode-patient-bundle.html) for a specific patient that contains all of that patient's resources that conform to mCODE Profiles."
* name = "CapabilityStatementPatientBundle"
* title = "mCODE Data Receiver: Get Bundle for a Patient"
* insert mCODE_CapabilityStatement_Client_Common

// GET [base]/$mcode-patient-bundle/[id]
* rest[0].operation[0].name = "mcode-patient-bundle"
* rest[0].operation[0].definition = "http://hl7.org/fhir/us/mcode/OperationDefinition/mcode-patient-everything"
* rest[0].operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].operation[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Cap_mcode-receiver-patients-and-cancer-conditions.fsh

Instance: mcode-receiver-patients-and-cancer-conditions
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Uses `_include` to retrieve a Bundle of Condition resources with a code in mCODE's cancer condition value set, along with the associated Patient resources. Use ONLY when reverse chaining is not available on the system."
* name = "CapabilityStatementReceiverPatientsAndCancerConditions"
* title = "mCODE Data Receiver CapabilityStatement: Get in-scope patients (and associated Conditions) using _include"
* insert mCODE_CapabilityStatement_Client_Common

* insert mCODE_CapabilityStatement_Patient_Client_Common_Rules // Has to be here to make indexing work for the Condition RuleSet below

// GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-cancer-disorder-vs&_include=Condition:subject
// GET [base]/Group?code=mcode-cancer-patient
* insert mCODE_CapabilityStatement_Condition_Client_Common_Rules

* rest[0].resource[1].searchInclude[0] = "Condition:subject"


---

// File: input/fsh/DEF_Cap_mcode-receiver-patients-in-group.fsh

Instance: mcode-receiver-patients-in-group
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for an mCODE Data Receiver where not all cancer patients conform to mCODE. Retrieves a Group of references to Patient resources that conform to mCODE, and allows for the full Patient resources to be retrieved in a subsequent request."
* name = "CapabilityStatementReceiverPatientsInGroup"
* title = "mCODE Data Receiver: Get Patients in Group"
* insert mCODE_CapabilityStatement_Client_Common

// GET [base]/Group?code=mcode-cancer-patient
* rest[0].resource[1].type = #Group
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].code = #search-type
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].documentation = "Retrieve Group of references to Patient resources conforming to mCODE."

* rest[0].resource[1].searchParam[0].name = "code"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "http://hl7.org/fhir/SearchParameter/Group-code"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL

// GET [base]/Patient?_id=id1|id2|id3
* insert mCODE_CapabilityStatement_Patient_Client_Common_Rules
* rest[0].resource[0].searchParam[0].name = "_id"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-id"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Cap_mcode-receiver-patients-with-cancer-condition.fsh

Instance: mcode-receiver-patients-with-cancer-condition
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Uses reverse chaining to retrieve a Bundle of Patient resources with a condition code in mCODE's cancer condition value set."
* name = "CapabilityStatementReceiverPatientsWithCancerCondition"
* title = "mCODE Data Receiver CapabilityStatement: Get in-scope patients using reverse chaining"
* insert mCODE_CapabilityStatement_Client_Common

// GET [base]/Patient?_has:Condition:subject:code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-cancer-disorder-vs
* insert mCODE_CapabilityStatement_Patient_Client_Common_Rules
* rest[0].resource[0].interaction[1].code = #search-type
* rest[0].resource[0].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[1].extension.valueCode = #SHALL
* rest[0].resource[0].interaction[1].documentation = "Identify Patient resources conforming to mCODE's CancerPatient profile via reverse chaining searching for conditions in a specific ValueSet."

* rest[0].resource[0].searchParam[0].name = "_has:Condition:subject:code:in"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL

// GET [base]/Group?code=mcode-cancer-patient
// This must be implemented regardless of the method for identifying in-scope patients
* rest[0].resource[1].type = #Group
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].code = #search-type
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].documentation = "Retrieve Group of references to Patient resources conforming to mCODE."

* rest[0].resource[1].searchParam[0].name = "code"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "http://hl7.org/fhir/SearchParameter/Group-code"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Cap_mcode-sender-cancer-conditions-then-patients.fsh

Instance: mcode-sender-cancer-conditions-then-patients
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Retrieves a Bundle of Condition resources with a code in mCODE's cancer condition value set, and allows for associated Patient resources to be retrieved in a subsequent request. Use ONLY when reverse chaining AND `_include` are not available on the system."
* name = "CapabilityStatementSenderConditionsThenPatients"
* title = "mCODE Data Sender: Get Conditions then Patients"
* insert mCODE_CapabilityStatement_Server_Common

* insert mCODE_CapabilityStatement_Patient_Server_Common_Rules // Has to be here to make indexing work for the Condition RuleSet below

// GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-cancer-disorder-vs
// GET [base]/Group?code=mcode-cancer-patient
* insert mCODE_CapabilityStatement_Condition_Server_Common_Rules

// GET [base]/Patient?_id=id1|id2|id3
* rest[0].resource[0].searchParam[0].name = "_id"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-id"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Cap_mcode-sender-patient-bundle.fsh

Instance: mcode-sender-patient-bundle
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Retrieves a Bundle of Condition resources with a code in mCODE's cancer condition value set, and allows for associated Patient resources to be retrieved in a subsequent request. Use ONLY when reverse chaining AND `_include` are not available on the system."
* name = "CapabilityStatementPatientBundle"
* title = "mCODE Data Sender: Get Bundle for a Patient"
* insert mCODE_CapabilityStatement_Server_Common

// GET [base]/$mcode-patient-bundle/[id]
* rest[0].operation[0].name = "mcode-patient-bundle"
* rest[0].operation[0].definition = "http://hl7.org/fhir/us/mcode/OperationDefinition/mcode-patient-everything"
* rest[0].operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].operation[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Cap_mcode-sender-patients-and-cancer-conditions.fsh

Instance: mcode-sender-patients-and-cancer-conditions
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Uses `_include` to retrieve a Bundle of Condition resources with a code in mCODE's cancer condition value set, along with the associated Patient resources. Use ONLY when reverse chaining is not available on the system."
* name = "CapabilityStatementSenderPatientsAndCancerConditions"
* title = "mCODE Data Sender CapabilityStatement: Get in-scope patients (and associated Conditions) using _include"
* insert mCODE_CapabilityStatement_Server_Common

* insert mCODE_CapabilityStatement_Patient_Server_Common_Rules // Has to be here to make indexing work for the Condition RuleSet below

// GET [base]/Condition?code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-cancer-disorder-vs&_include=Condition:subject
// GET [base]/Group?code=mcode-cancer-patient
* insert mCODE_CapabilityStatement_Condition_Server_Common_Rules

* rest[0].resource[1].searchInclude[0] = "Condition:subject"


---

// File: input/fsh/DEF_Cap_mcode-sender-patients-in-group.fsh

Instance: mcode-sender-patients-in-group
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Capabilities for an mCODE Data Sender where not all cancer patients conform to mCODE. Retrieves a Group of references to Patient resources that conform to mCODE, and allows for the full Patient resources to be retrieved in a subsequent request."
* name = "CapabilityStatementSenderPatientsInGroup"
* title = "mCODE Data Sender: Get Patients in Group"
* insert mCODE_CapabilityStatement_Server_Common

// GET [base]/Group?code=mcode-cancer-patient
* rest[0].resource[1].type = #Group
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].code = #search-type
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].documentation = "Retrieve Group of references to Patient resources conforming to mCODE."

* rest[0].resource[1].searchParam[0].name = "code"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "http://hl7.org/fhir/SearchParameter/Group-code"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL

// GET [base]/Patient?_id=id1|id2|id3
* insert mCODE_CapabilityStatement_Patient_Server_Common_Rules
* rest[0].resource[0].searchParam[0].name = "_id"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-id"
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Cap_mcode-sender-patients-with-cancer-condition.fsh

Instance: mcode-sender-patients-with-cancer-condition
InstanceOf: CapabilityStatement
Usage: #definition
* description = "Uses reverse chaining to retrieve a Bundle of Patient resources with a condition code in mCODE's cancer condition value set."
* name = "CapabilityStatementSenderPatientsWithCancerCondition"
* title = "mCODE Data Sender CapabilityStatement: Get in-scope patients using reverse chaining"
* insert mCODE_CapabilityStatement_Server_Common

// GET [base]/Patient?_has:Condition:subject:code:in=http://hl7.org/fhir/us/mcode/ValueSet/mcode-primary-cancer-disorder-vs
* insert mCODE_CapabilityStatement_Patient_Server_Common_Rules
* rest[0].resource[0].interaction[1].code = #search-type
* rest[0].resource[0].interaction[1].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[1].extension.valueCode = #SHALL
* rest[0].resource[0].interaction[1].documentation = "Identify Patient resources conforming to mCODE's CancerPatient profile via reverse chaining searching for conditions in a specific ValueSet."

* rest[0].resource[0].searchParam[0].name = "_has:Condition:subject:code:in"
* rest[0].resource[0].searchParam[0].type = #token
* rest[0].resource[0].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].searchParam[0].extension.valueCode = #SHALL

// GET [base]/Group?code=mcode-cancer-patient
// This must be implemented regardless of the method for identifying in-scope patients
* rest[0].resource[1].type = #Group
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].code = #search-type
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].documentation = "Retrieve Group of references to Patient resources conforming to mCODE."

* rest[0].resource[1].searchParam[0].name = "code"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "http://hl7.org/fhir/SearchParameter/Group-code"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Capabilities_Receiver_Rulesets.fsh

// STOP!
// STOP!
// STOP! Do not edit this file directly. Instead, run the series of search/replace below to generate it.
// STOP!
// STOP!
/*

sed -i '' '11,$d' input/fsh/DEF_Capabilities_Client.fsh && cat input/fsh/DEF_Capabilities_Server.fsh | sed 's/Server/Client/g' | sed 's/server/client/g' | sed 's/sender/receiver/g' | sed 's/Sender/Receiver/g' >> input/fsh/DEF_Capabilities_Client.fsh

*/

// Defines common operations for the client role
RuleSet: mCODE_CapabilityStatement_Client_Common
* status = #draft
* experimental = true
* date = "2020-10-30T07:15:00.000000-04:00"
* kind = #requirements
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* implementationGuide = "http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode"
* rest[0].mode = #client
* rest.documentation =  "An mCODE Client **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all mCODE interactions.\n1. Identify the mCODE  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile individually and in combination.\n\nThe mCODE Client **SHOULD**:\n\n1. Support xml source formats for all mCODE interactions.\n"
* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A client **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client"   // Import the US Core Client Capability Statement

///////////////////////////////////////////////////////////////////////////////////////////////////
RuleSet: mCODE_CapabilityStatement_Patient_Client_Common_Rules
* rest[0].resource[0].type = #Patient
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[0].supportedProfile[0] = "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient"
* rest[0].resource[0].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL

// GET [base]/Patient/[id]
* rest[0].resource[0].interaction[0].code = #read
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #SHALL


///////////////////////////////////////////////////////////////////////////////////////////////////

// Common rules used by `patients-and-cancer-conditions` and `cancer-conditions-then-patients`
RuleSet: mCODE_CapabilityStatement_Condition_Client_Common_Rules
* rest[0].resource[1].type = #Condition
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[1].supportedProfile[0] = "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient"
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].code = #search-type
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].documentation = "Identify Patient resources conforming to mCODE's CancerPatient profile via searching for conditions in a specific ValueSet."

* rest[0].resource[1].searchParam[0].name = "code:in"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "http://hl7.org/fhir/us/mcode/SearchParameter/Condition-code"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL

// GET [base]/Group?code=mcode-cancer-patient
// This must be implemented regardless of the method for identifying in-scope patients
* rest[0].resource[2].type = #Group
* rest[0].resource[2].extension.valueCode = #SHALL
* rest[0].resource[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].code = #search-type
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[2].interaction[0].documentation = "Retrieve Group of references to Patient resources conforming to mCODE."

* rest[0].resource[2].searchParam[0].name = "code"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].definition = "http://hl7.org/fhir/SearchParameter/Group-code"
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_Capabilities_Sender_Rulesets.fsh

Profile: MCODEPatientGroup
Parent: Group
Id: mcode-patient-group
Title: "mCODE Patient Group Profile"
Description: "A group of patients included in the scope of mCODE, whose cancer-related resources conform to mCODE profiles."
* ^extension[FMM].valueInteger = 1
* code = NCIT#C19700  // Cancer Patient
* member.entity only Reference(CancerPatient)
* member.entity ^definition = "A cancer patient considered `in-scope` for mCODE."

// Defines common operations for the server role
RuleSet: mCODE_CapabilityStatement_Server_Common
* status = #draft
* experimental = true
* date = "2020-10-30T07:15:00.000000-04:00"
* kind = #requirements
* format[0] = #xml
* format[1] = #json
* fhirVersion = #4.0.1
* implementationGuide = "http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode"
* rest[0].mode = #server
* rest.documentation =  "An mCODE Server **SHALL**:\n\n1. Support all profiles defined in this Implementation Guide..\n1.  Implement the RESTful behavior according to the FHIR specification.\n1. Return the following response classes:\n   - (Status 400): invalid parameter\n   - (Status 401/4xx): unauthorized request\n   - (Status 403): insufficient scope\n   - (Status 404): unknown resource\n   - (Status 410): deleted resource.\n1. Support json source formats for all mCODE interactions.\n1. Identify the mCODE  profiles supported as part of the FHIR `meta.profile` attribute for each instance.\n1. Support the searchParameters on each profile individually and in combination.\n\nThe mCODE Server **SHOULD**:\n\n1. Support xml source formats for all mCODE interactions.\n"
* rest.security.description = "1. See the [General Security Considerations](https://www.hl7.org/fhir/security.html#general) section for requirements and recommendations.\n1. A server **SHALL** reject any unauthorized requests by returning an `HTTP 401` unauthorized response code."
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"   // Import the US Core Server Capability Statement

/////////////////////////////////////////////////////////////////////////////////////
RuleSet: mCODE_CapabilityStatement_Patient_Server_Common_Rules
* rest[0].resource[0].type = #Patient
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[0].supportedProfile[0] = "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient"
* rest[0].resource[0].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL

// GET [base]/Patient/[id]
* rest[0].resource[0].interaction[0].code = #read
* rest[0].resource[0].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[0].interaction[0].extension.valueCode = #SHALL


/////////////////////////////////////////////////////////////////////////////////////

// Common rules used by `patients-and-cancer-conditions` and `cancer-conditions-then-patients`
RuleSet: mCODE_CapabilityStatement_Condition_Server_Common_Rules
* rest[0].resource[1].type = #Condition
* rest[0].resource[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[=].extension.valueCode = #SHALL
* rest[0].resource[1].supportedProfile[0] = "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient"
* rest[0].resource[0].supportedProfile[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].code = #search-type
* rest[0].resource[1].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[1].interaction[0].documentation = "Identify Patient resources conforming to mCODE's CancerPatient profile via searching for conditions in a specific ValueSet."

* rest[0].resource[1].searchParam[0].name = "code:in"
* rest[0].resource[1].searchParam[0].type = #token
* rest[0].resource[1].searchParam[0].definition = "http://hl7.org/fhir/us/mcode/SearchParameter/Condition-code"
* rest[0].resource[1].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[1].searchParam[0].extension.valueCode = #SHALL

// GET [base]/Group?code=mcode-cancer-patient
// This must be implemented regardless of the method for identifying in-scope patients
* rest[0].resource[2].type = #Group
* rest[0].resource[2].extension.valueCode = #SHALL
* rest[0].resource[2].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].code = #search-type
* rest[0].resource[2].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].interaction[0].extension.valueCode = #SHALL
* rest[0].resource[2].interaction[0].documentation = "Retrieve Group of references to Patient resources conforming to mCODE."

* rest[0].resource[2].searchParam[0].name = "code"
* rest[0].resource[2].searchParam[0].type = #token
* rest[0].resource[2].searchParam[0].definition = "http://hl7.org/fhir/SearchParameter/Group-code"
* rest[0].resource[2].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[0].resource[2].searchParam[0].extension.valueCode = #SHALL


---

// File: input/fsh/DEF_ConceptMapRuleSets.fsh

RuleSet: ConceptMapIntro(name, vsname)
* name = "{name}"
* title = "{name} Concept Map"
* status = #draft
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/fhir"
* description = "A mapping between [TG263] Concepts and FHIR {name} Value Set"
* useContext.code = http://terminology.hl7.org/CodeSystem/usage-context-type#focus
* useContext.valueCodeableConcept.text = "For TG263 to SNOMEDCT alignment"
* jurisdiction = urn:iso:std:iso:3166#US
* purpose = "To help implementers map from TG263 Concepts to SNOMEDCT codes and qualifiers."
* targetCanonical = Canonical({vsname})
* sourceCanonical = Canonical(TG263VS)

RuleSet: MapConcept(code, display, targetcode, targetdisplay)
* group[=].element[+].code = {code}
* group[=].element[=].display = {display}
* group[=].element[=].target.code = {targetcode}
* group[=].element[=].target.display = {targetdisplay}
* group[=].element[=].target.equivalence = #equivalent

RuleSet: MapConceptLocationQualifier(code, display, targetcode, targetdisplay, qualifiercode1, qualifiercode1display, qualifiercode1system )
* group[=].element[+]
  * code = {code}
  * display = {display}
  * target
    * code = {targetcode}
    * display = {targetdisplay}
    * equivalence = #equivalent
    * product.
      * property = Canonical(BodyLocationQualifier)
      * system = {qualifiercode1system}
      * value = {qualifiercode1}
      * display = {qualifiercode1display}

RuleSet: MapConceptLateralityQualifier(code, display, targetcode, targetdisplay, qualifiercode1, qualifiercode1display, qualifiercode1system )
* group[=].element[+]
  * code = {code}
  * display = {display}
  * target
    * code = {targetcode}
    * display = {targetdisplay}
    * equivalence = #equivalent
    * product.
      * property = Canonical(LateralityQualifier)
      * system = {qualifiercode1system}
      * value = {qualifiercode1}
      * display = {qualifiercode1display}

RuleSet: MapConceptQualifier2(code, display, targetcode, targetdisplay, qualifiercode1, qualifiercode1display, qualifiercode2, qualifiercode2display, system)
* group[=].element[+]
  * code = {code}
  * display = {display}
  * target
    * code = {targetcode}
    * display = {targetdisplay}
    * equivalence = #equivalent
    * product[0].
      * property = Canonical(LateralityQualifier)
      * system = SCT
      * value = {qualifiercode1}
      * display = {qualifiercode1display}
    * product[1].
      * property = Canonical(BodyLocationQualifier)
      * system = {system}
      * value = {qualifiercode2}
      * display = {qualifiercode2display}



RuleSet: AddGroup(source, target)
* group[+].target = {target}
* group[=].source = {source}

RuleSet: UnmatchedMapConcept(code, display, targetcode, targetdisplay)
* group[=].element[+].display = {display}
* group[=].element[=].target.code = {targetcode}
* group[=].element[=].target.display = {targetdisplay}
* group[=].element[=].target.equivalence = #unmatched
* group[=].element[=].target.comment = {code}

---

// File: input/fsh/DEF_Operations.fsh

Instance: mcode-patient-everything
InstanceOf: OperationDefinition
Description: "Gets an [mCODE Patient Bundle](StructureDefinition-mcode-patient-bundle.html) for a specific patient that contains all of that patient's resources that conform to mCODE Profiles."
Usage: #definition

* name = "Fetch_mCODE_patient_bundle"
* title = "Fetch mCODE Patient Bundle for a given Patient"
* status = #draft
* kind = #operation
* code = #mcode-everything
* system = false
* type = false
* instance = true
* resource[0] = #Patient

// Parameter: Patient ID
* parameter[+].name = #id
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "Patient ID"
* parameter[=].type = #string

// Parameter: Start
* parameter[+].name = #start
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The date range relates to filtering by date for a subset of resources in the Bundle. If no start date is provided, all records prior to the end date are in scope. Filtering is inclusive (i.e., if `start=2020-01-01`, records from January 1, 2020 are in scope)."
* parameter[=].type = #date

// Parameter: End
* parameter[+].name = #end
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The date range relates to filtering by date for a subset of resources in the Bundle. If no end date is provided, all records subsequent to the start date are in scope.  Filtering is inclusive (i.e., if `end=2020-09-01`, records from September 1, 2020 are in scope)."
* parameter[=].type = #date

// Output
* parameter[+].name = #return
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "A Bundle conforming to [`MCODEPatientBundle`](StructureDefinition-mcode-patient-bundle.html)."
* parameter[=].type = #Bundle

---

// File: input/fsh/DEF_RuleSets.fsh

RuleSet: ObservationComponentSlicingRules
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component ^slicing.description = "Slice based on the component.code value"

RuleSet: CategorySlicingRules
* category 1.. MS
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^slicing.description = "Slicing requires the given value but allows additional categories"
* category contains requiredCategory 1..1

RuleSet: SliceReferenceOnProfile(path)
* {path} ^slicing.discriminator.type = #profile
* {path} ^slicing.discriminator.path = "$this.resolve()"
* {path} ^slicing.rules = #open
* {path} ^slicing.description = "Slicing based on profile conformance of the referenced resource."

RuleSet: BundleSlice(name, min, max, short, def, class)
* entry contains {name} {min}..{max} MS
* entry[{name}] ^short = "{short}"
* entry[{name}] ^definition = "{def}"
* entry[{name}].resource only {class}
//* entry[{name}].resource.meta.profile = Canonical({class})

/* MustSupportOnReference applies an MS flag to a selected reference. For example in Reference(Patient or Practitioner), an MS can be put on Practitioner without a MS on Patient. In some cases, this might better than using an "only" rule
For example, given that Practitioner is element [1] in the element "recorder":
* insert MustSupportOnReference(recorder, 1)
*/
RuleSet: MustSupportOnReference(path, refIndex)
* {path} ^type[0].targetProfile[{refIndex}].extension[0].url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* {path} ^type[0].targetProfile[{refIndex}].extension[0].valueBoolean = true

RuleSet: NotUsed(path)
* {path} ^short = "Not used in this profile"
* {path} ^definition = "Not used in this profile"

RuleSet: CreateComponent(sliceName, min, max)
* component contains {sliceName} {min}..{max} MS
* component[{sliceName}].code MS
* component[{sliceName}].value[x] MS
//* component[{sliceName}].dataAbsentReason MS

RuleSet: SNOMEDCopyrightForVS
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^experimental = false

RuleSet: LOINCCopyrightForVS
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false

RuleSet: SNOINCCopyrightForVS
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement. This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false

RuleSet: ExtensionContext(path)
* ^context[+].type = #element
* ^context[=].expression = "{path}"

RuleSet: BodySiteQualifierAndLaterality(path)
// path is the bodySite element that gets the qualifier and laterality extension
// may just be bodySite for elements at the top level
* {path}.extension contains
     BodyLocationQualifier named locationQualifier 0..*   and
     LateralityQualifier named lateralityQualifier 0..1
* {path}.extension[locationQualifier] ^short = "General location qualifier (excluding laterality) for this bodySite"
* {path}.extension[locationQualifier] ^definition = "General location qualifier (excluding laterality) for this bodySite"
* {path}.extension[lateralityQualifier] ^short = "Laterality qualifier for this bodySite"
* {path}.extension[lateralityQualifier] ^definition = "Laterality qualifier for this bodySite"



---

// File: input/fsh/DEF_SearchParameters.fsh

// Instance: Patient-id
// InstanceOf: SearchParameter
// Title: "Search by _id in Patients with multipleOr"
// * url = "http://hl7.org/fhir/us/mcode/SearchParameter/Patient-id"
// * derivedFrom = "http://hl7.org/fhir/SearchParameter/Resource-id"
// * name = "PatientIdSearchParameter"
// * status = #draft
// * experimental = true
// * description = "This SearchParameter enables query of patients by `_id` with `mutlipleOr` enabled."
// * code = #_id
// * base[0] = #Patient
// * type = #token
// * multipleOr = true
// * expression = "Patient.id"
// * xpath = "f:Patient/f:id"
// * xpathUsage = #normal

Instance: Condition-code
InstanceOf: SearchParameter
Title: "Search by code:in in Conditions"
Usage: #definition
* url = "http://hl7.org/fhir/us/mcode/SearchParameter/Condition-code"
* name = "ConditionCodeSearchParameter"
* status = #draft
* experimental = true
* description = "This SearchParameter enables query of conditions by code with the `in` modifier."
* code = #code
* base[0] = #Condition
* type = #token
* expression = "Condition.code"
* xpath = "f:Condition/f:code"
* xpathUsage = #normal
* modifier = #in


---

// File: input/fsh/DEF_TG263.fsh

CodeSystem: TG263CS
Id: tg263-cs
Title: "TG263 CodeSystem"
Description: "Placeholder Codesystem to represent concepts from the American Association of Physicists in Medicine (AAPM) [Task Group 263 report on Standardizing Nomenclatures in Radiation Oncology][TG263]."
* ^experimental = false
* ^compositional = false
* ^caseSensitive = true
* ^versionNeeded = false
* ^content = #not-present
* ^publisher = "American Association of Physicists in Medicine (AAPM)"
* ^useContext.code.display = "Radiation Therapy"
* ^useContext.valueCodeableConcept.text = "Radiation Therapy"
* ^status = #active 

ValueSet: TG263VS
Id: tg263-vs
Title: "TG263 ValueSet"
Description: "Placeholder ValueSet to represent concepts from the American Association of Physicists in Medicine (AAPM) [Task Group 263 report on Standardizing Nomenclatures in Radiation Oncology][TG263]."
* ^experimental = false
* include codes from system TG263CS

---

// File: input/fsh/EX_Basic.fsh

Instance: primary-cancer-condition-nsclc
InstanceOf: PrimaryCancerCondition
Description: "Example of Primary Cancer Condition"
* clinicalStatus = ClinStatus#active "Active"
* verificationStatus = VerStatus#confirmed "Confirmed"
* category = CondCat#problem-list-item
* code = SCT#254637007 "Non-small cell lung cancer (disorder)"
* extension[histologyMorphologyBehavior].valueCodeableConcept = SCT#1187332001 "Adenocarcinoma (morphologic abnormality)"
* bodySite = SCT#39607008 "Lung structure (body structure)"
* bodySite.extension[lateralityQualifier].valueCodeableConcept = SCT#7771000 "Left (qualifier value)"
* subject = Reference(cancer-patient-john-anyperson)
* onsetDateTime = "2019-04-01"
* asserter = Reference(us-core-practitioner-kyle-anydoc)
* stage.summary = SCT#1222806003 "American Joint Committee on Cancer stage IIIC (qualifier value)"
* stage.assessment = Reference(tnm-clinical-stage-group-3c)

Instance: primary-cancer-condition-cll
InstanceOf: PrimaryCancerCondition
Description: "Example of Primary Cancer Condition - hematologic cancer"
* clinicalStatus = ClinStatus#active "Active"
* verificationStatus = VerStatus#confirmed "Confirmed"
* category = CondCat#problem-list-item
* code = SCT#92814006 "Chronic lymphoid leukemia, disease (disorder)"
* subject = Reference(cancer-patient-adam-everyman)
* onsetDateTime = "2020-05-12"
* asserter = Reference(us-core-practitioner-kyle-anydoc)
* stage.summary = NCIT#C80135 "Binet Stage B"
//* stage.assessment = Reference(binet-stage-group-B)

Instance: secondary-cancer-condition-brain-mets
InstanceOf: SecondaryCancerCondition
Description: "Example of Secondary Cancer Condition"
* extension[relatedPrimaryCancerCondition].valueReference = Reference(primary-cancer-condition-nsclc)
* clinicalStatus = ClinStatus#active "Active"
* verificationStatus = VerStatus#confirmed "Confirmed"
* category = CondCat#problem-list-item
* code = SCT#94225005 "Secondary malignant neoplasm of brain"
* subject = Reference(cancer-patient-john-anyperson)
* onsetDateTime = "2019-05-01"
* asserter = Reference(us-core-practitioner-kyle-anydoc)

Instance: cancer-disease-status-improved
InstanceOf: CancerDiseaseStatus
Description: "Example of Cancer Disease Status"
* extension[evidenceType].valueCodeableConcept = SCT#108257001 "Anatomic pathology procedure (procedure)"
* status = #final "final"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)
* valueCodeableConcept = SCT#268910001 "Patient's condition improved (finding)"

Instance: cancer-related-comorbidities-john-anyperson
InstanceOf: Comorbidities
Description: "Example of Cancer-Related Comorbidities"
* subject = Reference(cancer-patient-john-anyperson)
* performer = Reference(us-core-practitioner-kyle-anydoc)
* focus = Reference(primary-cancer-condition-nsclc)
* status = #final "final"
* effectiveDateTime = "2019-04-01"
// present
* extension[comorbidConditionPresent].valueReference = Reference(john-anyperson-chf)
// absent
* extension[comorbidConditionAbsent][0].valueCodeableConcept = SCT#414916001 "Obesity (disorder)"
* extension[comorbidConditionAbsent][1].valueCodeableConcept = SCT#19829001 "Disorder of lung (disorder)"
* category = ObsCat#social-history "Social History"

Instance: john-anyperson-chf
InstanceOf: USCoreCondition
Description: "Example of comorbid condition (congestive heart failure) present"
* subject = Reference(cancer-patient-john-anyperson)
* asserter = Reference(us-core-practitioner-kyle-anydoc)
* category = CondCat#problem-list-item "Problem List Item"
* code = ICD10CM#I50.32 "Chronic diastolic (congestive) heart failure"
* verificationStatus = VerStatus#confirmed
* clinicalStatus = ClinStatus#active "Active"
* extension[condition-assertedDate].valueDateTime = "2019-04-01"

Instance: cancer-patient-john-anyperson
InstanceOf: CancerPatient
Description: "Example of Patient"
* identifier.use = #usual
* identifier.type = IDTYPE#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m123"
* name.family = "Anyperson"
* name.given[0] = "John"
* name.given[1] = "B."
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "555-555-5555"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "john.anyperson@example.com"
* gender = #male
* birthDate = "1951-01-20"
* address.line = "123 Main St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (United States)"
* communication.language.text = "English"
* extension[USCoreRace].extension[ombCategory].valueCoding = OmbRaceCat#2054-5 "Black or African American"
* extension[USCoreRace].extension[text].valueString = "Black or African American"
* extension[USCoreEthnicity].extension[ombCategory].valueCoding = OmbRaceCat#2186-5 "Not Hispanic or Latino"
* extension[USCoreEthnicity].extension[text].valueString = "Not Hispanic or Latino"
* extension[USCoreBirthSex].valueCode = #M

Instance: cancer-patient-eve-anyperson
InstanceOf: CancerPatient
Description: "Example of Patient"
// The following lines must use the slice names, not the defining URLs
// * extension[race].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
// * extension[race].extension[ombCategory].url = "ombCategory"
* extension[race].extension[ombCategory].valueCoding = OmbRaceCat#1002-5 "American Indian or Alaska Native"
// * extension[race].extension[text].url = "text"
* extension[race].extension[text].valueString = "Lakota and Crow"
* extension[birthsex].valueCode = #F
* identifier.use = #usual
* identifier.type = IDTYPE#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m456"
* name.family = "Anyperson"
* name.given[0] = "Eve"
* name.given[1] = "A."
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "999-999-9999"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "eve.anyperson@example.com"
* gender = #female
* birthDate = "1955-05-20"
* address.line = "456 Smith Lane"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (United States)"
* communication.language.text = "English"
* extension[USCoreRace].extension[ombCategory].valueCoding = OmbRaceCat#2106-3 "White"
* extension[USCoreRace].extension[text].valueString = "White"
* extension[USCoreEthnicity].extension[ombCategory].valueCoding = OmbRaceCat#2135-2 "Hispanic or Latino"
* extension[USCoreEthnicity].extension[text].valueString = "Hispanic or Latino"
* extension[USCoreBirthSex].valueCode = #F

Instance: cancer-patient-adam-everyman
InstanceOf: CancerPatient
Description: "Example of Patient"
* identifier.use = #usual
* identifier.type = IDTYPE#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m123"
* name.family = "Everyman"
* name.given[0] = "Adam"
* name.given[1] = "A."
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "333-555-5555"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "adam.everyman@example.com"
* gender = #male
* birthDate = "1962-02-05"
* address.line = "234 Anyway St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (United States)"
* communication.language.text = "English"
* extension[USCoreRace].extension[ombCategory].valueCoding = OmbRaceCat#2106-3 "White"
* extension[USCoreRace].extension[text].valueString = "White"
* extension[USCoreEthnicity].extension[ombCategory].valueCoding = OmbRaceCat#2186-5 "Not Hispanic or Latino"
* extension[USCoreEthnicity].extension[text].valueString = "Not Hispanic or Latino"
* extension[USCoreBirthSex].valueCode = #M

Instance: us-core-practitioner-kyle-anydoc
InstanceOf: USCorePractitioner
Description: "Example of Practitioner"
* identifier[NPI].value = "9988776651"
* name.family = "Anydoc"
* name.given = "Kyle"
* name.prefix = "Dr."
* gender = #male
* address.use = #home
* address.line = "567 Healthcare Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#MD "Doctor of Medicine"

Instance: ecog-performance-status-fully-active
InstanceOf: ECOGPerformanceStatus
Description: "Example of ECOG Performance Status"
* status = #final "final"
* code = LNC#89247-1 "ECOG Performance Status score"
* method = SCT#5880005 "Clinical examination"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)
* valueInteger = 0
* interpretation = LNC#LA9622-7 "Fully active, able to carry on all pre-disease performance without restriction"
* category = ObsCat#survey "Survey"

Instance: karnofsky-performance-status-normal-activity
InstanceOf: KarnofskyPerformanceStatus
Description: "Example of Karnofsky Performance Status"
* status = #final "final"
* code = LNC#89243-0 "Karnofsky Performance Status score"
* method = SCT#5880005 "Clinical examination"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)
* valueInteger = 90
* interpretation = LNC#LA29176-7 "Able to carry on normal activity; minor signs or symptoms of disease"
* category = ObsCat#survey "Survey"

Instance: cancer-related-surgical-procedure-lobectomy
InstanceOf: CancerRelatedSurgicalProcedure
Description: "Example of Cancer Related Surgical Procedure"
* status = #completed "completed"
* code = SCT#359615001 "Partial lobectomy of lung (procedure)"
* subject = Reference(cancer-patient-john-anyperson)
* asserter = Reference(us-core-practitioner-kyle-anydoc)
* performedDateTime = "2019-03-01"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* reasonReference = Reference(primary-cancer-condition-nsclc)
* bodySite = SCT#31094006  "Structure of lobe of lung (body structure)"
* bodySite.extension[lateralityQualifier].valueCodeableConcept = SCT#7771000 "Left (qualifier value)"
* bodySite.extension[locationQualifier].valueCodeableConcept = SCT#261122009 "Lower (qualifier value)"

Instance: john-anyperson-treatment-volume
InstanceOf: RadiotherapyVolume
Description: "Anatomic volume for John Anyperson's brachytherapy."
* patient = Reference(cancer-patient-john-anyperson)
* description = "Structure of lower lobe of left lung"
* location = SCT#31094006  "Structure of lobe of lung (body structure)"
* locationQualifier[0] = SCT#261122009 "Lower (qualifier value)"
* locationQualifier[1] = SCT#7771000 "Left (qualifier value)"

Instance: tnm-clinical-stage-group-3c
InstanceOf: TNMStageGroup
Description: "Example of TNM Clinical Stage Group"
//* code = LNC#21908-9 "Stage group.clinical Cancer"
* code = SCT#399537006 "Clinical TNM stage grouping"
* valueCodeableConcept = SCT#1222806003 "American Joint Committee on Cancer stage IIIC (qualifier value)"
* status = #final "final"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* subject = Reference(cancer-patient-john-anyperson)
* focus = Reference(primary-cancer-condition-nsclc)  // added requirement STU3
* effectiveDateTime = "2019-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)
* hasMember[0] = Reference(tnm-clinical-primary-tumor-category-cT3)
* hasMember[1] = Reference(tnm-clinical-regional-nodes-category-cN3)
* hasMember[2] = Reference(tnm-clinical-distant-metastases-category-cM0)
* category = ObsCat#imaging "Imaging"

Instance: tnm-clinical-distant-metastases-category-cM0
InstanceOf: TNMDistantMetastasesCategory
Description: "Example of TNM Clinical Distant Metastases Category"
//* code = LNC#21907-1 "Distant metastases.clinical [Class] Cancer"
* code = SCT#399387003 "cM category"
* status = #final "final"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* subject = Reference(cancer-patient-john-anyperson)
* performer = Reference(us-core-practitioner-kyle-anydoc)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = SCT#1229901006 "American Joint Committee on Cancer cM0 (qualifier value)"
* category = ObsCat#imaging "Imaging"

Instance: tnm-clinical-primary-tumor-category-cT3
InstanceOf: TNMPrimaryTumorCategory
Description: "Example of TNM Clinical Primary Tumor Category"
//* code = LNC#21905-5 "Primary tumor.clinical [Class] Cancer"
* code = SCT#399504009 "cT category"
* valueCodeableConcept = SCT#1228938002 "American Joint Committee on Cancer cT3 (qualifier value)"
* status = #final "final"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* subject = Reference(cancer-patient-john-anyperson)
* performer = Reference(us-core-practitioner-kyle-anydoc)
* effectiveDateTime = "2019-04-01"
* category = ObsCat#imaging "Imaging"

Instance: tnm-clinical-regional-nodes-category-cN3
InstanceOf: TNMRegionalNodesCategory
Description: "Example of TNM Clinical Regional Nodes Category"
//* code = LNC#21906-3 "Regional lymph nodes.clinical [Class] Cancer"
* code = SCT#399534004 "cN category"
* valueCodeableConcept = SCT#1229984001 "American Joint Committee on Cancer cN3 (qualifier value)"
* status = #final "final"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* subject = Reference(cancer-patient-john-anyperson)
* performer = Reference(us-core-practitioner-kyle-anydoc)
* effectiveDateTime = "2019-04-01"
* category = ObsCat#imaging "Imaging"

Instance: cancer-related-medication-request-gefitinib
InstanceOf: CancerRelatedMedicationRequest
Description: "Example of CancerRelatedMedicationRequest"
* subject = Reference(cancer-patient-john-anyperson)
* status = MedReqStatus#active
* intent = MedReqIntent#order
* authoredOn = "2019-04-01"
* medicationCodeableConcept = RXN#349472 "gefitinib 250 MG Oral Tablet"
* reasonCode = SCT#254637007 "Non-small cell lung cancer (disorder)"
* requester = Reference(us-core-practitioner-kyle-anydoc)
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"
* dosageInstruction.text = "250mg orally once daily with or without food"
* dosageInstruction.route = SCT#26643006 "Oral use"
* dosageInstruction.doseAndRate.doseQuantity = 250.0 'mg' "mg"
* dosageInstruction.timing.event = "2019-04-01"
* dosageInstruction.timing.repeat.frequency = 1  // frequency, period and periodUnit to reflect "once per day"
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = UCUM#d
* dosageInstruction.timing.repeat.boundsPeriod.start = "2019-04-01"
* dosageInstruction.timing.repeat.boundsPeriod.start = "2019-04-30"
* dosageInstruction.timing.code = TimingAbbreviation#QD // prescriber abbreviation for once daily

Instance: cancer-related-medication-request-cisplatin
InstanceOf: CancerRelatedMedicationRequest
Description: "Example of CancerRelatedMedicationRequest - Chemo Infusion"
* subject = Reference(cancer-patient-john-anyperson)
* status = MedReqStatus#completed
* intent = MedReqIntent#order
* authoredOn = "2019-04-01"
* medicationCodeableConcept = RXN#309311 "cisplatin 1 MG/ML Injectable Solution"
* reasonCode = SCT#254637007 "Non-small cell lung cancer (disorder)"
* requester = Reference(us-core-practitioner-kyle-anydoc)
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* dosageInstruction.text = "calculate absolute dose on day of administration."
* dosageInstruction.route = SCT#47625008 "Intravenous use"
* dosageInstruction.doseAndRate.doseQuantity = 75 'mg/m2' "mg/m2"
* dosageInstruction.timing.event = "2019-06-15"
* dosageInstruction.timing.repeat.count = 1  // frequency is one-time on day 1 of first cycle so there should be no repeat."
* note.text = "Day 1 of NSCLC regimen: Cisplatin 75 mg/m2 day 1; docetaxel 75 mg/m2 day 1 every 21 days for 4 cycles."
//* extension[terminationReason].valueCodeableConcept = SCT#182992009  "Treatment completed (situation)"

Instance: cancer-related-medication-request-cisplatin-stopped
InstanceOf: CancerRelatedMedicationRequest
Description: "Example of CancerRelatedMedicationRequest - Chemo Infusion"
* subject = Reference(cancer-patient-john-anyperson)
* status = MedReqStatus#stopped
* statusReason = SCT#407563006 "Treatment not tolerated (situation)"
* intent = MedReqIntent#order
* authoredOn = "2019-05-15"
* medicationCodeableConcept = RXN#309311 "cisplatin 1 MG/ML Injectable Solution"
* reasonCode = SCT#254637007 "Non-small cell lung cancer (disorder)"
* requester = Reference(us-core-practitioner-kyle-anydoc)
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* priorPrescription = Reference(cancer-related-medication-request-cisplatin)
* note.text = "Stopped due to blood in urine, possible kidney damage."

Instance: lab-result-observation-hemoglobin
InstanceOf: USCoreObservationLab
Description: "Hemoglobin lab result to support TNMStageGroup example"
* subject = Reference(cancer-patient-adam-everyman)
* status = ObsStatus#final
* code = LNC#718-7 "Hemoglobin [Mass/volume] in Blood"
* effectiveDateTime = "2020-03-06"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueQuantity = 13.5 'g/dl' "g/dl"
* category[us-core] = ObsCat#laboratory "laboratory"

Instance: history-of-cancer-metastatic-to-liver
InstanceOf: HistoryOfMetastaticCancer
Description: "Example showing history of metastatic cancer in the liver."
* status = #final 
* code = SCT#1098951000119108 "History of cancer metastatic to liver (situation)"
* subject = Reference(cancer-patient-adam-everyman)
* effectiveDateTime = "2018-11-16"
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#social-history "Social History"

Instance: no-history-of-metastatic-cancer 
InstanceOf: HistoryOfMetastaticCancer
Description: "Example showing no history of metastatic cancer"
* status = #final 
* code = SCT#1287652008 "History of metastatic malignant neoplasm (situation)"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2018-11-16"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueBoolean = false
* category = ObsCat#social-history "Social History"

Instance: histologic-behavior-and-type-non-small-cell
InstanceOf: HistologicBehaviorAndType
Description: "Example of non-small cell lung cancer."
* extension[relatedCondition].valueReference = Reference(primary-cancer-condition-nsclc)
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = ICDO3#"C34.9 80463/3" "non small cell"
* specimen = Reference(human-specimen-lung)
* status = #final "final"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: histologic-grade-intermediate
InstanceOf: HistologicGrade
Description: "Example of intermediate histologic grade."
* extension[relatedCondition].valueReference = Reference(primary-cancer-condition-nsclc)
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = SCT#1286893008 "Intermediate histologic grade (qualifier value)"
* method = SCT#1149430001 "World Health Organization classification of tumors histologic grading system fifth edition"
* specimen = Reference(human-specimen-lung)
* status = #final "final"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: tumor-morphology-report-non-small-cell-intermediate-grade
InstanceOf: TumorMorphology
Description: "Example of a tumor morphology report showing non-small cell cancer with an intermediate histologic grade."
* category[us-core] = ObsCat#laboratory
* extension[relatedCondition].valueReference = Reference(primary-cancer-condition-nsclc)
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* specimen = Reference(human-specimen-lung)
* hasMember[0] = Reference(histologic-grade-intermediate)
* hasMember[+] = Reference(histologic-behavior-and-type-non-small-cell)
* status = #final "final"
* issued = "2019-04-15T13:28:17.239+02:00"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: rhabdomyosarcoma-risk-assessment-low
InstanceOf: RhabdomyosarcomaRiskAssessment
Description: "Example of rhabdomyosarcoma with a low risk assessment."
* category[us-core] = ObsCat#laboratory
* valueCodeableConcept = SCT#723505004 "Low risk (qualifier value)"
* status = #final "final"
* subject = Reference(cancer-patient-john-anyperson)
* focus = Reference(primary-cancer-condition-nonspecific)
* effectiveDateTime = "2021-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: all-risk-assessment-high
InstanceOf: ALLRiskAssessment
Description: "Example of leukemia with a standard risk assessment."
* category[us-core] = ObsCat#laboratory
* valueCodeableConcept = NCIT#C122458 "High Risk Acute Leukemia"
* status = #final "final"
* subject = Reference(cancer-patient-john-anyperson)
* focus = Reference(primary-cancer-condition-nonspecific)
* effectiveDateTime = "2021-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: john-anyperson-hd
InstanceOf: USCoreCondition
Description: "Example of past heart disease"
* subject = Reference(cancer-patient-john-anyperson)
* asserter = Reference(us-core-practitioner-kyle-anydoc)
* category = CondCat#problem-list-item "Problem List Item"
* code = SCT#49601007 "Disorder of cardiovascular system (disorder)"
* verificationStatus = VerStatus#confirmed
* clinicalStatus = ClinStatus#resolved "Resolved"
* extension[condition-assertedDate].valueDateTime = "2000-04-01"

Instance: cancer-patient-lucy-child
InstanceOf: CancerPatient
Description: "Example of Patient"
* identifier.use = #usual
* identifier.type = IDTYPE#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m456"
* name.family = "Child"
* name.given[0] = "Lucy"
* name.given[1] = "L."
* gender = #female
* birthDate = "2023-02-05"
* address.line = "567 Anyway St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (United States)"
* communication.language.text = "English"
* extension[USCoreRace].extension[ombCategory].valueCoding = OmbRaceCat#2106-3 "White"
* extension[USCoreRace].extension[text].valueString = "White"
* extension[USCoreEthnicity].extension[ombCategory].valueCoding = OmbRaceCat#2186-5 "Not Hispanic or Latino"
* extension[USCoreEthnicity].extension[text].valueString = "Not Hispanic or Latino"
* extension[USCoreBirthSex].valueCode = #F

Instance: lansky-play-performance-status-twenty
InstanceOf: LanskyPlayPerformanceStatus
Description: "Example of Lansky Play Performance Status."
* status = #final "final"
* method = SCT#5880005 "Clinical examination"
* category = ObsCat#exam "Exam"
* subject = Reference(cancer-patient-lucy-child)
* effectiveDateTime = "2019-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)
* valueInteger = 20
* interpretation = NCIT#C70540 "Lansky Performance Status 20"

Instance: deauville-scale-five
InstanceOf: DeauvilleScale
Description: "Example of Deauville Scale."
* focus = Reference(primary-cancer-condition-nonspecific)
* category = ObsCat#exam "Exam"
* subject = Reference(cancer-patient-john-anyperson)
* performer = Reference(us-core-practitioner-kyle-anydoc)
* valueInteger = 5
* interpretation = NCIT#C99750 "London Deauville Criteria Point Scale 5"
* status = #final "final"
* effectiveDateTime = "2019-04-01"

Instance: body-surface-area-example
InstanceOf: BodySurfaceArea
Description: "Example of body surface area."
* valueQuantity = 0.27 'm^2' "m^2"
* status = #final "final"
* subject = Reference(cancer-patient-lucy-child)
* effectiveDateTime = "2023-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)


---

