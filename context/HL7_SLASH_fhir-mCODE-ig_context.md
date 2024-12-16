File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/AL_CodeSystems.fsh


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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/AL_Genomics.fsh

// Other
Alias: FMM = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: CGMedicationRecommendation = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/medication-recommendation
Alias: CGTherapeuticImplication = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication
Alias: NCBI = http://www.ncbi.nlm.nih.gov/refseq
Alias: TMB = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/tmb
Alias: MSI = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/msi


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/AL_Other.fsh

Alias: FMM = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: CGMedicationRecommendation = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/medication-recommendation
Alias: CGTherapeuticImplication = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/therapeutic-implication
Alias: NCBI = http://www.ncbi.nlm.nih.gov/refseq
Alias: TMB = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/tmb
Alias: MSI = http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/msi


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/AL_USCore.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/CM_TG263.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-receiver-cancer-conditions-then-patients.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-receiver-patient-bundle.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-receiver-patients-and-cancer-conditions.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-receiver-patients-in-group.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-receiver-patients-with-cancer-condition.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-sender-cancer-conditions-then-patients.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-sender-patient-bundle.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-sender-patients-and-cancer-conditions.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-sender-patients-in-group.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Cap_mcode-sender-patients-with-cancer-condition.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Capabilities_Receiver_Rulesets.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Capabilities_Sender_Rulesets.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_ConceptMapRuleSets.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_Operations.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_RuleSets.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_SearchParameters.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/DEF_TG263.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_Basic.fsh

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

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_Bundle.fsh

Instance: group-mcode-patients
InstanceOf: MCODEPatientGroup
Usage: #example
Title: "mCODE Patient Group Example"
Description: "Example of a Group identifying in-scope patients"
* type = #person
* actual = true
* code = NCIT#C19700  "Cancer Patient"
* member[0].entity = Reference(Patient/cancer-patient-john-anyperson)
* member[1].entity = Reference(Patient/cancer-patient-eve-anyperson)

Instance: mcode-patient-bundle-jenny-m
InstanceOf: MCODEPatientBundle
Description: "Extended example as a mCODE Patient Bundle"
* entry[0].resource = cancer-patient-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Patient/cancer-patient-jenny-m"
* entry[+].resource = primary-cancer-condition-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Condition/primary-cancer-condition-jenny-m"
* entry[+].resource = cancer-related-medication-request-cyclophosphamide-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-cyclophosphamide-jenny-m"
* entry[+].resource = cancer-related-medication-request-doxorubicin-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-doxorubicin-jenny-m"
* entry[+].resource = cancer-related-medication-request-paclitaxel-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-paclitaxel-jenny-m"
* entry[+].resource = cancer-related-medication-request-anastrozole-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-anastrozole-jenny-m"
* entry[+].resource = cancer-disease-status-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/cancer-disease-status-jenny-m"
* entry[+].resource = genomic-variant-jenny-m   // slice 7
* entry[=].fullUrl = "http://example.org/fhir/Observation/genomic-variant-jenny-m"
* entry[+].resource = genomics-report-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/DiagnosticReport/genomics-report-jenny-m"
* entry[+].resource = cancer-related-surgical-procedure-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Procedure/cancer-related-surgical-procedure-jenny-m"
* entry[+].resource = cancer-related-comorbidities-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/cancer-related-comorbidities-jenny-m"
* entry[+].resource = radiotherapy-treatment-summary-chest-wall-jenny-m  // slice 11
* entry[=].fullUrl = "http://example.org/fhir/Procedure/radiotherapy-treatment-summary-chest-wall-jenny-m"
* entry[+].resource = tnm-clinical-stage-group-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-stage-group-jenny-m"
* entry[+].resource = tnm-clinical-primary-tumor-category-jenny-m  //slice 13
* entry[=].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-primary-tumor-category-jenny-m"
* entry[+].resource = tnm-clinical-regional-nodes-category-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-regional-nodes-category-jenny-m"
* entry[+].resource = tnm-clinical-distant-metastases-category-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-distant-metastases-category-jenny-m"
* entry[+].resource = human-specimen-left-breast-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Specimen/human-specimen-left-breast-jenny-m"
* entry[+].resource = genomic-region-studied-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/genomic-region-studied-jenny-m"
* entry[+].resource = ecog-performance-status-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/ecog-performance-status-jenny-m"
* entry[+].resource = tumor-marker-test-er-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-er-jenny-m"
* entry[+].resource = tumor-marker-test-pr-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-pr-jenny-m"
* entry[+].resource = tumor-marker-test-her2-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-her2-jenny-m"
* entry[+].resource = tumor-marker-test-oncotype-dx-jenny-m  // slice 22 - code is from GTR (extending)
* entry[=].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-oncotype-dx-jenny-m"
* entry[+].resource = tumor-size-jenny-m  // slice 23
* entry[=].fullUrl = "http://example.org/fhir/Observation/tumor-size-jenny-m"
// Other optional entries like vital signs, providers
// Note: If named slices are used, then the first unnamed slice entry must be numbered
* entry[+].resource = us-core-procedure-biopsy-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Procedure/us-core-procedure-biopsy-jenny-m"
* entry[+].resource = bodyweight-jenny-m-2018-03-16
* entry[=].fullUrl = "http://example.org/fhir/Observation/bodyweight-jenny-m-2018-03-16"
* entry[+].resource = us-core-observation-lab-neutrophils-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/us-core-observation-lab-neutrophils-jenny-m"
* entry[+].resource = us-core-organization-physician-services-inc
* entry[=].fullUrl = "http://example.org/fhir/Organization/us-core-organization-physician-services-inc"
* entry[+].resource = us-core-smokingstatus-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/us-core-smokingstatus-jenny-m"
* entry[+].resource = us-core-procedure-mammogram-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Procedure/us-core-procedure-mammogram-jenny-m"
* entry[+].resource = family-member-history-aunt-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/FamilyMemberHistory/family-member-history-aunt-jenny-m"
* entry[+].resource = family-member-history-uncle-jenny-m  // slice 31
* entry[=].fullUrl = "http://example.org/fhir/FamilyMemberHistory/family-member-history-uncle-jenny-m"
* entry[+].resource = us-core-diagnosticreport-lab-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/DiagnosticReport/us-core-diagnosticreport-lab-jenny-m"
* entry[+].resource = observation-smoking-pack-years-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/observation-smoking-pack-years-jenny-m"
* entry[+].resource = us-core-observation-lab-tumor-invasion-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/us-core-observation-lab-tumor-invasion-jenny-m"
* entry[+].resource = us-core-observation-lab-tumor-margins-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/us-core-observation-lab-tumor-margins-jenny-m"
* entry[+].resource = us-core-observation-lab-sentinel-nodes-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/us-core-observation-lab-sentinel-nodes-jenny-m"
* entry[+].resource = us-core-observation-lab-tumor-dcis-jenny-m
* entry[=].fullUrl = "http://example.org/fhir/Observation/us-core-observation-lab-tumor-dcis-jenny-m"
* entry[+].resource = us-core-practitioner-owen-oncologist
* entry[=].fullUrl = "http://example.org/fhir/Practitioner/us-core-practitioner-owen-oncologist"
* entry[+].resource = us-core-practitioner-peter-pathologist
* entry[=].fullUrl = "http://example.org/fhir/Practitioner/us-core-practitioner-peter-pathologist"


/* Using named slices in assignments is preferred, maybe, but it makes things longer and harder to read, IMO. So using indices instead
* entry[cancerPatient].resource = cancer-patient-jenny-m
* entry[cancerPatient].fullUrl = "http://example.org/fhir/Patient/cancer-patient-jenny-m"
* entry[cancerCondition].resource = primary-cancer-condition-jenny-m
* entry[cancerCondition].fullUrl = "http://example.org/fhir/Condition/primary-cancer-condition-jenny-m"
* entry[cancerRelatedMedicationRequest][0].resource = cancer-related-medication-request-cyclophosphamide-jenny-m
* entry[cancerRelatedMedicationRequest][0].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-cyclophosphamide-jenny-m"
* entry[cancerRelatedMedicationRequest][1].resource = cancer-related-medication-request-doxorubicin-jenny-m
* entry[cancerRelatedMedicationRequest][1].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-doxorubicin-jenny-m"
* entry[cancerRelatedMedicationRequest][2].resource = cancer-related-medication-request-paclitaxel-jenny-m
* entry[cancerRelatedMedicationRequest][2].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-paclitaxel-jenny-m"
* entry[cancerRelatedMedicationRequest][3].resource = cancer-related-medication-request-anastrozole-jenny-m
* entry[cancerRelatedMedicationRequest][3].fullUrl = "http://example.org/fhir/MedicationRequest/cancer-related-medication-request-anastrozole-jenny-m"
* entry[cancerDiseaseStatus].resource = cancer-disease-status-jenny-m
* entry[cancerDiseaseStatus].fullUrl = "http://example.org/fhir/Observation/cancer-disease-status-jenny-m"
* entry[genomicVariant].resource = genomic-variant-jenny-m
* entry[genomicVariant].fullUrl = "http://example.org/fhir/Observation/genomic-variant-jenny-m"
* entry[genomicsReport].resource = genomics-report-jenny-m
* entry[genomicsReport].fullUrl = "http://example.org/fhir/DiagnosticReport/genomics-report-jenny-m"
* entry[cancerRelatedSurgicalProcedure].resource = cancer-related-surgical-procedure-jenny-m
* entry[cancerRelatedSurgicalProcedure].fullUrl = "http://example.org/fhir/Procedure/cancer-related-surgical-procedure-jenny-m"
//* entry[+].resource = cancer-related-comorbidities-elixhauser-jenny-m
//* entry[=].fullUrl = "http://example.org/fhir/Observation/cancer-related-comorbidities-elixhauser-jenny-m"
* entry[radiotherapyCourseSummary].resource = radiotherapy-treatment-summary-chest-wall-jenny-m
* entry[radiotherapyCourseSummary].fullUrl = "http://example.org/fhir/Procedure/radiotherapy-treatment-summary-chest-wall-jenny-m"
* entry[cancerStageAssessment].resource = tnm-clinical-stage-group-jenny-m
* entry[cancerStageAssessment].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-stage-group-jenny-m"
* entry[primaryTumorCategory].resource = tnm-clinical-primary-tumor-category-jenny-m
* entry[primaryTumorCategory].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-primary-tumor-category-jenny-m"
* entry[regionalNodesCategory].resource = tnm-clinical-regional-nodes-category-jenny-m
* entry[regionalNodesCategory].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-regional-nodes-category-jenny-m"
* entry[distantMetastasesCategory].resource = tnm-clinical-distant-metastases-category-jenny-m
* entry[distantMetastasesCategory].fullUrl = "http://example.org/fhir/Observation/tnm-clinical-distant-metastases-category-jenny-m"
* entry[humanSpecimen].resource = human-specimen-left-breast-jenny-m
* entry[humanSpecimen].fullUrl = "http://example.org/fhir/Specimen/human-specimen-left-breast-jenny-m"
* entry[genomicRegionStudied].resource = genomic-region-studied-jenny-m
* entry[genomicRegionStudied].fullUrl = "http://example.org/fhir/Observation/genomic-region-studied-jenny-m"
* entry[ecogPerformanceStatus].resource = ecog-performance-status-jenny-m
* entry[ecogPerformanceStatus].fullUrl = "http://example.org/fhir/Observation/ecog-performance-status-jenny-m"
* entry[tumorMarkerTest][0].resource = tumor-marker-test-er-jenny-m
* entry[tumorMarkerTest][0].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-er-jenny-m"
* entry[tumorMarkerTest][1].resource = tumor-marker-test-pr-jenny-m
* entry[tumorMarkerTest][1].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-pr-jenny-m"
* entry[tumorMarkerTest][2].resource = tumor-marker-test-her2-jenny-m
* entry[tumorMarkerTest][2].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-her2-jenny-m"
* entry[tumorMarkerTest][3].resource = tumor-marker-test-oncotype-dx-jenny-m
* entry[tumorMarkerTest][3].fullUrl = "http://example.org/fhir/Observation/tumor-marker-test-oncotype-dx-jenny-m"
* entry[tumorSize].resource = tumor-size-jenny-m
* entry[tumorSize].fullUrl = "http://example.org/fhir/Observation/tumor-size-jenny-m"
*/


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_ExtendedExample_Pediatric.fsh

Instance: cancer-patient-brian-l
InstanceOf: CancerPatient
Description: "Extended pediatric example: example cancer patient"
* identifier.use = #usual
* identifier.type = IDTYPE#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "MRN5678"
* name.family = "L"
* name.given[0] = "Brian"
* gender = #male
* birthDate = "2021-01-01"
* address.line = "456 Main St"
* address.city = "Anytown"
* address.postalCode = "67891"
* address.country = "United States"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "123-456-7891"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "example@example.com"
* communication.language = urn:ietf:bcp:47#en-US
* communication.language.text = "English"
* extension[USCoreRace].extension[ombCategory].valueCoding = OmbRaceCat#2028-9 "Asian"
* extension[USCoreRace].extension[text].valueString = "Asian"
* extension[USCoreEthnicity].extension[ombCategory].valueCoding = OmbRaceCat#2186-5 "Not Hispanic or Latino"
* extension[USCoreEthnicity].extension[text].valueString = "Not Hispanic or Latino"
* extension[USCoreBirthSex].valueCode = #M

Instance: us-core-condition-atrial-septal-defect-brian-l
InstanceOf: USCoreCondition
Description: "Extended pediatric example: example showing past medical condition (atrial septal defect)"
* clinicalStatus = ClinStatus#resolved "Resolved"
* verificationStatus = VerStatus#confirmed "Confirmed"
* category = CondCat#problem-list-item "Problem List Item"
* code = SCT#301130004 "Atrial septal defect murmur (finding)"
* subject = Reference(cancer-patient-brian-l)
* onsetDateTime = "2021-01-02"
* abatementDateTime = "2021-02-01"
* asserter = Reference(us-core-practitioner-kyle-anydoc)

Instance: family-member-history-grandmother-brian-l
InstanceOf: FamilyMemberHistory
Description: "Extended pediatric example: example showing family member history of cancer"
* status = #completed "completed"
* patient = Reference(cancer-patient-brian-l)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#GRMTH "grandmother"
* condition.code = SCT#372137005 "Primary malignant neoplasm of breast (disorder)"
* condition.onsetAge = 55.0 'a'

Instance: hemoglobin-brian-l
InstanceOf: USCoreObservationLab
Description: "Extended pediatric example: example showing hemoglobin blood test result"
* status = #final "final"
* code = LNC#718-7 "Hgb Bld-mCnc"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-04"
* valueQuantity = 6.7 'g/dL' "g/dL"
* referenceRange.low = 13.2 'g/dL' "g/dL"
* referenceRange.high = 16.5 'g/dL' "g/dL"
* referenceRange.type = RefMeaning#normal "Normal Range"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: hematocrit-brian-l
InstanceOf: USCoreObservationLab
Description: "Extended pediatric example: example showing hematocrit blood test result"
* status = #final "final"
* code = LNC#20570-8 "Hct VFr Bld"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-04"
* valueQuantity = 22.3 '%' "%"
* referenceRange.low = 39.7 '%' "%"
* referenceRange.high = 50.3 '%' "%"
* referenceRange.type = RefMeaning#normal "Normal Range"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: white-blood-cell-brian-l
InstanceOf: USCoreObservationLab
Description: "Extended pediatric example: example showing white blood cell blood test result"
* status = #final "final"
* code = LNC#26464-8 "WBC # Bld"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-04"
* valueQuantity = 88.5 '10*3/uL' "10*3/uL"
* referenceRange.low = 39.7 '10*3/uL' "10*3/uL"
* referenceRange.high = 50.3 '10*3/uL' "10*3/uL"
* referenceRange.type = RefMeaning#normal "Normal Range"
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: us-core-diagnosticreport-cbc-brian-l
InstanceOf: USCoreDiagnosticReportLab
Description: "Extended pediatric example: example of cbc."
* status = #final "final"
* code = LNC#58410-2 "CBC panel - Blood by Automated count"
* subject = Reference(cancer-patient-brian-l)
* issued = "2024-01-04T00:00:00Z"
* effectiveDateTime = "2024-01-04"
* result[0] = Reference(hemoglobin-brian-l)
* result[1] = Reference(hematocrit-brian-l)
* result[2] = Reference(white-blood-cell-brian-l)

Instance: us-core-procedure-bone-marrow-aspiration-brian-l
InstanceOf: USCoreProcedure
Description: "Extended pediatric example: example bone marrow aspiration"
* status = #completed "completed"
* code = SCT#49401003 "Bone marrow aspiration procedure (procedure)"
* subject = Reference(cancer-patient-brian-l)
* performedDateTime = 2024-01-06

Instance: us-core-procedure-bone-marrow-biopsy-brian-l
InstanceOf: USCoreProcedure
Description: "Extended pediatric example: example bone marrow biopsy"
* status = #completed "completed"
* code = SCT#234326005 "Bone marrow sampling (procedure)"
* subject = Reference(cancer-patient-brian-l)
* performedDateTime = 2024-01-06

Instance: bone-marrow-aspirate-result-brian-l
InstanceOf: USCoreObservationLab
Description: "Extended pediatric example: example showing bone marrow aspirate test result"
* status = #final "final"
* code = LNC#48807-2 "Bone marrow aspiration report"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-07"
* valueString = "predominance of immature cells"
* partOf = Reference(us-core-procedure-bone-marrow-aspiration-brian-l)
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: bone-marrow-biopsy-result-brian-l
InstanceOf: USCoreObservationLab
Description: "Extended pediatric example: example showing bone marrow biopsy test result"
* status = #final "final"
* code = LNC#33721-2 "Mar Path Bx report"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-07"
* valueString = "predominance of immature cells"
* partOf = Reference(us-core-procedure-bone-marrow-biopsy-brian-l)
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: immunophenotype-brian-l
InstanceOf: USCoreObservationLab
Description: "Extended pediatric example: example showing immunophenotyping test result"
* status = #final "final"
* code = LNC#101119-6 "Leuk and lymphma immnphntypng Spec"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-07"
* valueString = "positive for CD10, CD79a, TdT, CD19, and CD20"
* partOf = Reference(us-core-procedure-bone-marrow-aspiration-brian-l)
* performer = Reference(us-core-practitioner-kyle-anydoc)

Instance: primary-cancer-condition-brian-l
InstanceOf: PrimaryCancerCondition
Description: "Extended pediatric example: example showing primary cancer condition"
* clinicalStatus = ClinStatus#active
* verificationStatus = VerStatus#confirmed
* category = CondCat#problem-list-item
* code = SCT#277571004 "B-cell acute lymphoblastic leukemia (disorder)"
* subject = Reference(cancer-patient-brian-l)
* onsetDateTime = "2024-01-01"
* asserter = Reference(us-core-practitioner-owen-oncologist)

Instance: lansky-performance-status-brian-l
InstanceOf: LanskyPlayPerformanceStatus
Description: "Extended pediatric example: example showing Lansky performance status"
* status = #final "final"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-12"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueInteger = 80
* interpretation = NCIT#C69424 "Lansky Performance Status 80"
* method = SCT#5880005 "Physical examination procedure (procedure)"
* category = ObsCat#survey "Survey"

Instance: cancer-related-medication-request-cyclophosphamide-brian-l
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended pediatric example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#inpatient
* intent = #order
* medicationCodeableConcept = RXN#3002 "cyclophosphamide"
* subject = Reference(cancer-patient-brian-l)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2024-01-09"
* authoredOn = "2024-01-09"
* dosageInstruction.text = "cyclophosphamide (750 mg/m² IV), 450.03mg, once per day on days 1 & 8"
* dosageInstruction.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.doseQuantity = 450.03 'mg' "mg"
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 1 'wk' "week"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: cancer-related-medication-admin-cyclophosphamide-brian-l
InstanceOf: CancerRelatedMedicationAdministration
Description: "Extended pediatric example: example showing chemotherapy medication"
* status = #completed "completed"
* category = MedReqCat#inpatient
* medicationCodeableConcept = RXN#3002 "cyclophosphamide"
* subject = Reference(cancer-patient-brian-l)
* performer.actor = Reference(us-core-practitioner-nancy-oncology-nurse)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* request = Reference(cancer-related-medication-request-cyclophosphamide-brian-l)
* effectiveDateTime = "2024-01-09"
* note.authorReference = Reference(us-core-practitioner-nancy-oncology-nurse)
* note.time = "2024-01-09"
* note.text = "cyclophosphamide (750 mg/m² IV). Patient tolerated infusion without side effects."
* dosage.dose = 105.96 'mg' "mg"
* dosage.route = SCT#47625008 "Intravenous route (qualifier value)"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: cancer-related-medication-request-idarubicin-brian-l
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended pediatric example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#inpatient
* intent = #order
* medicationCodeableConcept = RXN#5650 "IDArubicin"
* subject = Reference(cancer-patient-brian-l)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2024-01-09"
* authoredOn = "2024-01-09"
* dosageInstruction.text = "IDArubicin (9 mg/m² IV), 5.4mg, once per day on days 1, 2, 3"
* dosageInstruction.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.doseQuantity = 5.40 'mg' "mg"
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 1 'wk' "week"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: cancer-related-medication-admin-idarubicin-brian-l
InstanceOf: CancerRelatedMedicationAdministration
Description: "Extended pediatric example: example showing chemotherapy medication"
* status = #completed "completed"
* category = MedReqCat#inpatient
* medicationCodeableConcept = RXN#5650 "IDArubicin"
* subject = Reference(cancer-patient-brian-l)
* performer.actor = Reference(us-core-practitioner-nancy-oncology-nurse)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* request = Reference(cancer-related-medication-request-idarubicin-brian-l)
* effectiveDateTime = "2024-01-09"
* note.authorReference = Reference(us-core-practitioner-nancy-oncology-nurse)
* note.time = "2024-01-09"
* note.text = "IDArubicin (c), 5.4mg. Patient tolerated infusion without side effects."
* dosage.dose = 5.40 'mg' "mg"
* dosage.route = SCT#47625008 "Intravenous route (qualifier value)"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: cancer-related-medication-request-vincristine-brian-l
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended pediatric example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#inpatient
* intent = #order
* medicationCodeableConcept = RXN#11202 "vincristine"
* subject = Reference(cancer-patient-brian-l)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2024-01-09"
* authoredOn = "2024-01-09"
* dosageInstruction.text = "Vincristine (2 mg IV), once per day on days 1, 8, 15, 22"
* dosageInstruction.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.doseQuantity = 2 'mg' "mg"
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 1 'wk' "week"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: cancer-related-medication-admin-vincristine-brian-l
InstanceOf: CancerRelatedMedicationAdministration
Description: "Extended pediatric example: example showing chemotherapy medication"
* status = #completed "completed"
* category = MedReqCat#inpatient
* medicationCodeableConcept = RXN#11202 "vincristine"
* subject = Reference(cancer-patient-brian-l)
* performer.actor = Reference(us-core-practitioner-nancy-oncology-nurse)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* request = Reference(cancer-related-medication-request-vincristine-brian-l)
* effectiveDateTime = "2024-01-09"
* note.authorReference = Reference(us-core-practitioner-nancy-oncology-nurse)
* note.time = "2024-01-09"
* note.text = "Vincristine (2 mg IV), 2mg. Patient tolerated infusion without side effects."
* dosage.dose = 2 'mg' "mg"
* dosage.route = SCT#47625008 "Intravenous route (qualifier value)"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: cancer-related-medication-request-prednisone-brian-l
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended pediatric example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#inpatient
* intent = #order
* medicationCodeableConcept = RXN#8640 "predniSONE"
* subject = Reference(cancer-patient-brian-l)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2024-01-09"
* authoredOn = "2024-01-09"
* dosageInstruction.text = "Prednisone (36.01 mg/m² IV), days 1 to 7, 15 to 21"
* dosageInstruction.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.doseQuantity = 36.01 'mg' "mg"
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 1 'wk' "week"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: cancer-related-medication-admin-prednisone-brian-l
InstanceOf: CancerRelatedMedicationAdministration
Description: "Extended pediatric example: example showing chemotherapy medication"
* status = #completed "completed"
* category = MedReqCat#inpatient
* medicationCodeableConcept = RXN#8640 "predniSONE"
* subject = Reference(cancer-patient-brian-l)
* performer.actor = Reference(us-core-practitioner-nancy-oncology-nurse)
* reasonReference = Reference(primary-cancer-condition-brian-l)
* request = Reference(cancer-related-medication-request-prednisone-brian-l)
* effectiveDateTime = "2024-01-09"
* note.authorReference = Reference(us-core-practitioner-nancy-oncology-nurse)
* note.time = "2024-01-09"
* note.text = "Prednisone (36.01 mg/m² IV), 36.01 mg. Patient tolerated infusion without side effects."
* dosage.dose = 36.01 'mg' "mg"
* dosage.route = SCT#47625008 "Intravenous route (qualifier value)"
* extension[normalizationBasis].valueCodeableConcept = SCT#301898006 "Body surface area (observable entity)"

Instance: gx-genomic-variant-fusion-ETV6-RUNX1-brian-l
InstanceOf: GenomicVariant
Description: "Extended pediatric example: example showing gene fusion"
* status = #final "Final"
* method = LNC#LA26406-1 "Karyotyping"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-08"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied][0].valueCodeableConcept.coding[0] = HGNC#HGNC:3495 "ETV6" 
* component[gene-studied][1].valueCodeableConcept.coding[0] = HGNC#HGNC:10471 "RUNx1"
* component[coding-change-type].valueCodeableConcept = SO#SO:1000044 "chromosomal_translocation"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-procedure-lumbar-puncture-brian-l
InstanceOf: USCoreProcedure
Description: "Extended pediatric example: example lumbar puncture"
* status = #completed "completed"
* code = SCT#277762005 "Lumbar puncture (procedure)"
* subject = Reference(cancer-patient-brian-l)
* performedDateTime = 2024-01-08

Instance: us-core-lumbar-puncture-result-brian-l
InstanceOf: USCoreObservationLab
Description: "Extended pediatric example: example showing negative result for cancer spreading to brian or spine"
* status = #final "final"
* code = LNC#48807-2 "Bone marrow aspiration report"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-07"
* valueString = "negative for presence of cancer in the brain or spine"
* partOf = Reference(us-core-procedure-lumbar-puncture-brian-l)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: cancer-disease-status-improved-brian-l
InstanceOf: CancerDiseaseStatus
Description: "Extended pediatric example: improved cancer disease status"
* extension[evidenceType].valueCodeableConcept = SCT#386344002 "Laboratory data interpretation (procedure)"
* status = #final "final"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-02-08"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueCodeableConcept = SCT#268910001 "Patient's condition improved (finding)"

Instance: body-surface-area-brian-l
InstanceOf: BodySurfaceArea
Description: "Extended pediatric example: body surface area"
* status = #final "final"
* subject = Reference(cancer-patient-brian-l)
* effectiveDateTime = "2024-01-01"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueQuantity = 0.59 'm2' "square meter"

Instance: all-risk-assessment-standard-brian-l
InstanceOf: ALLRiskAssessment
Description: "Extended pediatric example: ALL risk assessment standard"
* valueCodeableConcept = NCIT#C122457 "Standard Risk Acute Leukemia"
* status = #final "final"
* category = ObsCat#exam "Exam"
* subject = Reference(cancer-patient-brian-l)
* focus = Reference(primary-cancer-condition-brian-l)
* effectiveDateTime = "2021-02-08"
* performer = Reference(us-core-practitioner-owen-oncologist)


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_ExtendedExample.fsh

/* Order of Events
2018-02-01  MammogramDate
2018-03-06  Biopsy Performed by Obgyn
2018-03-10  Tumor marker test results
2018-03-16  Initial Oncologist visit
   - Medical History
   - Family History
   - Vital Signs
2018-03-16  Diagnosis and Clinical Staging
2018-03-16  Tumor Marker Test Results
2018-03-16  7-Gene Panel Results
2018-04-01  Partial Mastectomy
2018-04-01  Tumor specimen collected and given to pathology
2018-04-05  Pathology Results
2018-04-12  21-Gene Panel Results
2018-04-12  Chemo begins  // 4 cycles, each 28 days (~ 4 months)
2018-08-21  Radiation begins
2018-09-30  Radiation ends
2018-10-01  Anastrazole begins
2018-11-01  Disease status assessed following first line of therapy
*/

// Mammogram 3/1/2018

Instance: us-core-procedure-mammogram-jenny-m
InstanceOf: USCoreProcedure
Description: "Extended example: example mammogram"
* status = #completed "completed"
* code = SCT#71651007 "Mammography (procedure)"
* subject = Reference(cancer-patient-jenny-m)
* performer.actor = Reference(us-core-practitioner-jane-radiotech)
* performedDateTime = 2018-02-01
* asserter = Reference(us-core-practitioner-mary-obgyn)
* reasonCode = SCT#360156006 "Screening - procedure intent (qualifier value)"

// Biopsy Procedure - 3/6/2018

Instance: us-core-procedure-biopsy-jenny-m
InstanceOf: USCoreProcedure
Description: "Extended example: example biopsy procedure"
* status = #completed "completed"
* code = SCT#723990008 "Biopsy of breast using ultrasonographic guidance (procedure)"
* subject = Reference(cancer-patient-jenny-m)
* performer.actor = Reference(us-core-practitioner-mary-obgyn)
* performedDateTime = "2018-03-06"
* asserter = Reference(us-core-practitioner-mary-obgyn)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* bodySite = SCT#80248007 "Left breast structure (body structure)"

Instance: human-specimen-left-breast-jenny-m
InstanceOf: HumanSpecimen
Description: "Extended example: example showing human specimen for genomic sequencing"
* status = #available "available"
* type = SPTY#TISS
* subject = Reference(cancer-patient-jenny-m)
* collection.collector = Reference(us-core-practitioner-owen-oncologist)
* collection.bodySite = SCT#80248007 "Left breast structure (body structure)"
* processing[0].timeDateTime = "2018-03-06"

// Initial Oncologist Appointment 3/16/2018

Instance: us-core-smokingstatus-jenny-m
InstanceOf: USCoreSmokingStatusProfile
Description: "Extended example: example showing smoking status"
* status = #final "final"
* code = LNC#72166-2 "Tobacco smoking status"
* subject = Reference(cancer-patient-jenny-m)
* issued = "2018-03-16T00:00:00Z"
* effectiveDateTime = "2018-03-16"
* valueCodeableConcept = SCT#449868002 "Smokes tobacco daily (finding)"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: observation-smoking-pack-years-jenny-m
InstanceOf: Observation
Description: "Extended example: example showing smoking history"
* status = #final "final"
* category = ObsCat#social-history "Social History"
* code = SCT#401201003 "Cigarette pack-years (observable entity)" // No LOINC available
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-16"
* valueQuantity = 20 '1' "Pack-Years"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-condition-anxiety-jenny-m
InstanceOf: USCoreCondition
Description: "Extended example: example showing comorbid condition (anxiety)"
* clinicalStatus = ClinStatus#active "Active"
* verificationStatus = VerStatus#confirmed "Confirmed"
* category = CondCat#problem-list-item "Problem List Item"
* code = SCT#48694002 "Anxiety (finding)"
* subject = Reference(cancer-patient-jenny-m)
* onsetDateTime = "2005-01-01"
* asserter = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-condition-depression-jenny-m
InstanceOf: USCoreCondition
Description: "Extended example: example showing comorbid condition (depression)"
* clinicalStatus = ClinStatus#active
* verificationStatus = VerStatus#confirmed
* category = CondCat#problem-list-item "Problem List Item"
* code = SCT#35489007 "Depressive disorder (disorder)"
* subject = Reference(cancer-patient-jenny-m)
* onsetDateTime = "2005-01-01"
* asserter = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-condition-hypertension-jenny-m
InstanceOf: USCoreCondition
Description: "Extended example: example showing comorbid condition (hypertension)"
* clinicalStatus = ClinStatus#active
* verificationStatus = VerStatus#confirmed
* category = CondCat#problem-list-item "Problem List Item"
* code = SCT#77970009 "Benign hypertensive heart disease without congestive heart failure (disorder)"  // Changed to avoid IG Publisher error ICD10CM#I11.9 "Hypertensive heart disease without heart failure"
* subject = Reference(cancer-patient-jenny-m)
* onsetDateTime = "2012-01-01"
* asserter = Reference(us-core-practitioner-owen-oncologist)

// Family History

Instance: family-member-history-aunt-jenny-m
InstanceOf: FamilyMemberHistory
Description: "Extended example: example showing family member history of cancer"
* status = #completed "completed"
* patient = Reference(cancer-patient-jenny-m)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MAUNT "maternal aunt"
* condition.code = SCT#363443007 "Malignant tumor of ovary (disorder)"
* condition.onsetAge = 69.0 'a'

Instance: family-member-history-sister-jenny-m
InstanceOf: FamilyMemberHistory
Description: "Extended example: example showing family member history of cancer"
* status = #completed "completed"
* patient = Reference(cancer-patient-jenny-m)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#NSIS "natural sister"
* condition.code = SCT#254837009 "Malignant neoplasm of breast (disorder)"
* condition.onsetAge = 64.0 'a'
* condition.contributedToDeath = false

Instance: family-member-history-uncle-jenny-m
InstanceOf: FamilyMemberHistory
Description: "Extended example: example showing family member history of cancer"
* status = #completed "completed"
* patient = Reference(cancer-patient-jenny-m)
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#PUNCLE "paternal uncle"
* condition.code = SCT#363418001 "Malignant tumor of pancreas (disorder)"
* condition.contributedToDeath = true
* deceasedBoolean = true

Instance: cancer-related-comorbidities-jenny-m
InstanceOf: Comorbidities
Description: "mCODE Example for Cancer-Related Comorbidities"
* subject = Reference(cancer-patient-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)
* status = #final "final"
* effectiveDateTime = "2018-03-16"
* focus = Reference(primary-cancer-condition-jenny-m)
// present -- note these could be codes instead of references (either are acceptable)
* extension[comorbidConditionPresent][0].valueReference = Reference(us-core-condition-depression-jenny-m)
* extension[comorbidConditionPresent][1].valueReference = Reference(us-core-condition-anxiety-jenny-m)
* extension[comorbidConditionPresent][2].valueReference = Reference(us-core-condition-hypertension-jenny-m)
// absent -- These could also be references, but having a resource representing a non-condition would be unusual
* extension[comorbidConditionAbsent][0].valueCodeableConcept = SCT#414916001 "Obesity (disorder)"
* extension[comorbidConditionAbsent][1].valueCodeableConcept = SCT#19829001 "Disorder of lung (disorder)"
* category = ObsCat#social-history "Social History"

/* Not used -- model of comorbidities as Questionnaire
Instance: cancer-related-comorbidity-response-jenny-m
InstanceOf: ComorbiditiesResponse
Description: "mCODE Example for Cancer-Related Comorbidities"
* subject = Reference(cancer-patient-jenny-m)
* author = Reference(us-core-practitioner-owen-oncologist)
* status = #completed
* authored = "2018-03-16"
* item[0]
  * linkId = "indexConditionReference"
  * answer.valueReference = Reference(primary-cancer-condition-jenny-m)
* item[1]
  * linkId = "comorbidConditionsPresent"
  * item[0]
    * linkId = "comorbidConditionPresentReference"
    * answer[0].valueReference = Reference(us-core-condition-depression-jenny-m)
    * answer[1].valueReference = Reference(us-core-condition-anxiety-jenny-m)
    * answer[2].valueReference = Reference(us-core-condition-hypertension-jenny-m)
* item[2]
  * linkId = "comorbidConditionsAbsent"
  * answer[0].valueCoding = SCT#414916001 "Obesity (disorder)"
  * answer[1].valueCoding = SCT#19829001 "Disorder of lung (disorder)"
*/

Instance: ecog-performance-status-jenny-m
InstanceOf: ECOGPerformanceStatus
Description: "Extended example: example showing ECOG performance status"
* status = #final "final"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-12"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueInteger = 0
* interpretation = LNC#LA9622-7 "Fully active, able to carry on all pre-disease performance without restriction"
* method = SCT#5880005 "Physical examination procedure (procedure)"
* category = ObsCat#survey "Survey"

// body weight and height added to calculate BSA needed to convert chemotherapy relative dose orders to absolute doses for CancerRelatedMedicationAdministration

Instance: bodyweight-jenny-m-2018-03-16
InstanceOf: http://hl7.org/fhir/StructureDefinition/bodyweight
Description: "Extended example: example of body weight vital sign"
* status = #final "final"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-06"
* valueQuantity = 155.0 '[lb_av]' "lb"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: bodyheight-jenny-m-2018-03-06
InstanceOf: http://hl7.org/fhir/StructureDefinition/bodyheight
Description: "Extended example: example of body height vital sign"
* status = #final "final"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-16"
* valueQuantity = 65 '[in_i]' "in"
* performer = Reference(us-core-practitioner-owen-oncologist)

// Diagnosis and Clinical Staging 3/16/2018

Instance: primary-cancer-condition-jenny-m
InstanceOf: PrimaryCancerCondition
Description: "Extended example: example showing primary cancer condition"
* extension[histologyMorphologyBehavior].valueCodeableConcept = SCT#82711006 "Infiltrating duct carcinoma (morphologic abnormality)"
* clinicalStatus = ClinStatus#remission
* verificationStatus = VerStatus#confirmed
* category = CondCat#problem-list-item
* code = SCT#353431000119107 "Primary malignant neoplasm of female left breast (disorder)"
* subject = Reference(cancer-patient-jenny-m)
* onsetDateTime = "2018-03-16"
* asserter = Reference(us-core-practitioner-owen-oncologist)
* stage.summary = SCT#1222806003 "American Joint Committee on Cancer stage IIIC (qualifier value)"
* stage.assessment = Reference(tnm-clinical-stage-group-jenny-m)
* stage.type = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"

Instance: tnm-clinical-stage-group-jenny-m
InstanceOf: TNMStageGroup
Description: "Extended example: example showing TNM staging (stage group)"
* status = #final "final"
//* code = LNC#21908-9 "Stage group.clinical Cancer"
* code = SCT#399537006 "Clinical TNM stage grouping"
* subject = Reference(cancer-patient-jenny-m)
* focus = Reference(primary-cancer-condition-jenny-m)  // new STU3 requirement
* effectiveDateTime = "2018-03-16"
* valueCodeableConcept = SCT#1222769001 "American Joint Committee on Cancer stage IIB (qualifier value)"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* hasMember[0] = Reference(tnm-pathologic-primary-tumor-category-jenny-m)
* hasMember[1] = Reference(tnm-pathologic-regional-nodes-category-jenny-m)
* hasMember[2] = Reference(tnm-pathologic-distant-metastases-category-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"

Instance: tnm-clinical-primary-tumor-category-jenny-m
InstanceOf: TNMPrimaryTumorCategory
Description: "Extended example: example showing TNM staging (T)"
* status = #final "final"
//* code = LNC#21905-5 "Primary tumor.clinical [Class] Cancer"
* code = SCT#399504009 "cT category"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-16"
* valueCodeableConcept = SCT#1228938002 "American Joint Committee on Cancer cT3 (qualifier value)"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"


Instance: tnm-clinical-regional-nodes-category-jenny-m
InstanceOf: TNMRegionalNodesCategory
Description: "Extended example: example showing TNM staging (N)"
* status = #final "final"
//* code = LNC#21906-3 "Regional lymph nodes.clinical [Class] Cancer"
* code = SCT#399534004 "cN category"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-16"
* valueCodeableConcept = SCT#1229967007 "American Joint Committee on Cancer cN0 (qualifier value)"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"

Instance: tnm-clinical-distant-metastases-category-jenny-m
InstanceOf: TNMDistantMetastasesCategory
Description: "Extended example: example showing TNM staging (M)"
* status = #final "final"
//* code = LNC#21907-1 "Distant metastases.clinical [Class] Cancer"
* code = SCT#399387003 "cM category"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-16"
* valueCodeableConcept = SCT#1229901006 "American Joint Committee on Cancer cM0 (qualifier value)"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"

// Tumor marker test results 3-16-2018

Instance: tumor-marker-test-er-jenny-m
InstanceOf: TumorMarkerTest
Description: "Extended example: example showing ER status"
* status = #final "final"
* code = LNC#85337-4 "Estrogen receptor Ag [Presence] in Breast cancer specimen by Immune stain"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-10"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueCodeableConcept = LNC#LA6576-8 "Positive"

Instance: tumor-marker-test-pr-jenny-m
InstanceOf: TumorMarkerTest
Description: "Extended example: example showing PR status"
* status = #final "final"
* code = LNC#85339-0 "Progesterone receptor Ag [Presence] in Breast cancer specimen by Immune stain"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-10"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueCodeableConcept = LNC#LA6577-6 "Negative"

Instance: tumor-marker-test-her2-jenny-m
InstanceOf: TumorMarkerTest
Description: "Extended example: example showing HER2 status"
* status = #final "final"
* code = LNC#48676-1 "HER2 [Interpretation] in Tissue"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-10"
* performer = Reference(us-core-practitioner-owen-oncologist)
* valueCodeableConcept = LNC#LA6577-6 "Negative"

// 7-Gene Panel

Instance: genomics-report-jenny-m
InstanceOf: GenomicsReport
Description: "Extended example: example of gene panel report"
* status = #final "final"
* code = LNC#51969-4 "Genetic analysis report"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-03-15"
* issued = "2020-03-15T00:00:01+00:00"
* specimen = Reference(human-specimen-left-breast-jenny-m)
* result[0] = Reference(genomic-variant-jenny-m)
* result[1] = Reference(genomic-region-studied-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: genomic-region-studied-jenny-m
InstanceOf: GenomicRegionStudied
Description: "Extended example: example showing which regions were included in the genomics panel"
* status = #final "final"
* code = LNC#53041-0 "DNA region of interest panel"
* subject = Reference(cancer-patient-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)
* effectiveDateTime = "2018-03-15"
* issued = "2018-03-15T00:00:01+00:00"
* component.code = LNC#48018-6 "Gene studied [ID]"
* component[gene-studied].valueCodeableConcept.coding[+] = HGNC#1100 "BRCA1"
* component[gene-studied].valueCodeableConcept.coding[+] = HGNC#1101 "BRCA2"
* component[gene-studied].valueCodeableConcept.coding[+] = HGNC#1748 "CDH1"
* component[gene-studied].valueCodeableConcept.coding[+] = HGNC#26144 "PALB2"
* component[gene-studied].valueCodeableConcept.coding[+] = HGNC#9588 "PTEN"
* component[gene-studied].valueCodeableConcept.coding[+] = HGNC#11389 "STK11"
* component[gene-studied].valueCodeableConcept.coding[+] = HGNC#11998 "TP53"

Instance: genomic-variant-jenny-m
InstanceOf: GenomicVariant
Description: "Extended example: example showing genomic variant found by breast cancer genomics panel"
* status = #final "final"
* code = LNC#69548-6 "Genetic variant assessment"
* subject = Reference(cancer-patient-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)
* effectiveDateTime = "2018-03-15"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* method = LNC#LA26398-0 "Sequencing"
* component[gene-studied].valueCodeableConcept = HGNC#HGNC:26144 "PALB2"
* component[variation-code].valueCodeableConcept = CLINVAR#128144 "NM_024675.3(PALB2):c.3549C>A (p.Tyr1183Ter)"
* component[genomic-hgvs].valueCodeableConcept = HGVS#NC_000016.10:g.23603471G>T
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"


// Partial Mastectomy

Instance: cancer-related-surgical-procedure-jenny-m
InstanceOf: CancerRelatedSurgicalProcedure
Description: "Extended example: example showing partial mastectomy surgical procedure"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #completed "completed"
* code = SCT#64368001 "Excision of part of breast (procedure)"
* subject = Reference(cancer-patient-jenny-m)
* performedDateTime = "2018-04-01"
* asserter = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* bodySite = SCT#80248007 "Left breast structure (body structure)"

Instance: tumor-specimen-left-breast-jenny-m
InstanceOf: HumanSpecimen
Description: "Extended example: example tumor specimen"
* status = #available "available"
* type = SPTY#TUMOR
* identifier[bodyStructureIdentifier].use = #usual
* identifier[bodyStructureIdentifier].type = http://hl7.org/fhir/resource-types#BodyStructure
* identifier[bodyStructureIdentifier].system = "http://radiology.hospital.example.org"
* identifier[bodyStructureIdentifier].value = "Tumor 1234"
* subject = Reference(cancer-patient-jenny-m)
* receivedTime = "2018-04-01"
* collection.bodySite = SCT#80248007 "Left breast structure (body structure)"

// Pathology Results

Instance: us-core-diagnosticreport-lab-jenny-m
InstanceOf: USCoreDiagnosticReportLab
Description: "Extended example: example of pathology findings represented as a DiagnosticReport resource."
* status = #final "final"
//* category[1] = DiagnosticService#SP "Surgical Pathology"  // does not match any known slice in US Core Diagnostic Report -- but that's ok
* code = LNC#22637-3 "Pathology report final diagnosis Narrative"
* subject = Reference(cancer-patient-jenny-m)
* issued = "2018-04-05T00:00:00Z"
* effectiveDateTime = "2018-04-01T00:00:00Z"
* specimen = Reference(tumor-specimen-left-breast-jenny-m)
* result[0] = Reference(us-core-observation-lab-tumor-invasion-jenny-m)
* result[1] = Reference(us-core-observation-lab-tumor-margins-jenny-m)
* result[2] = Reference(us-core-observation-lab-sentinel-nodes-jenny-m)
* result[3] = Reference(tumor-size-jenny-m)
* result[4] = Reference(us-core-observation-lab-tumor-dcis-jenny-m)
* result[5] = Reference(tumor-marker-test-her2-jenny-m)
//** adding pathology results **//
* result[6] = Reference(tumor-marker-test-er-jenny-m)
* result[7] = Reference(tumor-marker-test-pr-jenny-m)
* result[8] = Reference(us-core-observation-lab-tumor-grade-jenny-m)
* performer = Reference(us-core-organization-physician-services-inc)
* resultsInterpreter = Reference(us-core-practitioner-peter-pathologist)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-observation-lab-tumor-invasion-jenny-m
InstanceOf: USCoreObservationLab
Description: "Extended example: example showing negative invasion for the removed tumor"
* status = #final "final"
* code = SCT#370052007 "Status of invasion by tumor" // No LOINC for invasion status
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01T00:00:00Z"
* valueCodeableConcept = SCT#260385009 "Negative (qualifier value)"
* specimen = Reference(tumor-specimen-left-breast-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-observation-lab-tumor-margins-jenny-m
InstanceOf:  USCoreObservationLab
Description: "Extended example: example showing negative margins for the removed tumor"
* status = #final "final"
* code = LNC#44669-0 "Margin involvement in Breast tumor"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01T00:00:00Z"
* valueCodeableConcept = LNC#LA27151-2 "Uninvolved by invasive carcinoma"
* specimen = Reference(tumor-specimen-left-breast-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-observation-lab-sentinel-nodes-jenny-m
InstanceOf:  USCoreObservationLab
Description: "Extended example: example showing 3 sentinel lymph nodes were examined"
* status = #final "final"
* code = LNC#92832-5 "Sentinel lymph nodes with metastasis [#] in Cancer specimen"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01T00:00:00Z"
* component.code = LNC#92833-3 "Lymph nodes examined [#] in Cancer specimen by Light microscopy"
* component.valueQuantity = 3 '1' "Count"
* specimen = Reference(tumor-specimen-left-breast-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: tumor-size-jenny-m
InstanceOf:  TumorSize
Description: "Extended example: example showing tumor size"
* status = #final "final"
* code = LNC#21889-1 "Size Tumor"
* category = ObsCat#laboratory
* method = SCT#787377000 "Gross examination and sampling of tissue specimen (procedure)"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01T00:00:00Z"
* component[tumorLongestDimension].valueQuantity = 2.5 'cm' "centimeters"
* specimen = Reference(tumor-specimen-left-breast-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-observation-lab-tumor-dcis-jenny-m
InstanceOf:  USCoreObservationLab
Description: "Extended example: example showing DCIS diagnosis"
* status = #final "final"
* code = LNC#85336-6 "DCIS intraductal extension in Breast cancer specimen Qualitative by Light microscopy"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01T00:00:00Z"
* valueCodeableConcept = LNC#LA27261-9 "DCIS present with extensive intraductal component (EIC)"
* specimen = Reference(tumor-specimen-left-breast-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: us-core-observation-lab-tumor-grade-jenny-m
InstanceOf:  USCoreObservationLab
Description: "Extended example: example showing DCIS diagnosis"
* status = #final "final"
* code = LNC#44648-4 "Histologic grade [Score] in Breast cancer specimen by Nottingham"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01T00:00:00Z"
* valueCodeableConcept = LNC#LA27824-4 "Nottingham grade 2"
* specimen = Reference(tumor-specimen-left-breast-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: tnm-pathologic-stage-group-jenny-m
InstanceOf: TNMStageGroup
Description: "Extended example: example showing TNM staging (stage group)"
* status = #final "final"
//* code = LNC#21902-2 "Stage group.pathology Cancer"
* code = SCT#399588009 "Pathologic TNM stage grouping"
* subject = Reference(cancer-patient-jenny-m)
* focus = Reference(primary-cancer-condition-jenny-m)  // new STU3 requirement
* effectiveDateTime = "2018-04-05"
* valueCodeableConcept = SCT#1222769001 "American Joint Committee on Cancer stage IIB (qualifier value)"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* hasMember[0] = Reference(tnm-pathologic-primary-tumor-category-jenny-m)
* hasMember[1] = Reference(tnm-pathologic-regional-nodes-category-jenny-m)
* hasMember[2] = Reference(tnm-pathologic-distant-metastases-category-jenny-m)
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"

Instance: tnm-pathologic-primary-tumor-category-jenny-m
InstanceOf: TNMPrimaryTumorCategory
Description: "Extended example: example showing TNM staging (T)"
* status = #final "final"
//* code = LNC#21899-0 "Primary tumor.pathology Cancer"
* code = SCT#384625004 "pT category"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01"
* valueCodeableConcept = SCT#1229859000 "American Joint Committee on Cancer pT3 (qualifier value)"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"

Instance: tnm-pathologic-regional-nodes-category-jenny-m
InstanceOf: TNMRegionalNodesCategory
Description: "Extended example: example showing TNM staging (N)"
* status = #final "final"
//* code = LNC#21900-6 "Regional lymph nodes.pathology [Class] Cancer"
* code = SCT#371494008 "pN category"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01"
* valueCodeableConcept = SCT#1229947003 "American Joint Committee on Cancer pN0 (qualifier value)"
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"

Instance: tnm-pathologic-distant-metastases-category-jenny-m
InstanceOf: TNMDistantMetastasesCategory
Description: "Extended example: example showing TNM staging (M)"
* status = #final "final"
//* code = LNC#21901-4 "Distant metastases.pathology [Class] Cancer"
* code = SCT#371497001 "pM category"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-01"
* valueCodeableConcept = AbsentReason#not-applicable "Not Applicable"   // cancer is not metastatic, pM0 is not valid
* method = SCT#897275008 "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
* performer = Reference(us-core-practitioner-owen-oncologist)
* category = ObsCat#imaging "Imaging"

// 21-Gene Assay

Instance: tumor-marker-test-oncotype-dx-jenny-m
InstanceOf: TumorMarkerTest
Description: "Extended example: example showing Oncotype DX breast recurrence score. Note that this test has no assigned LOINC code, so GTR is being used as a backup. Only the score from the Oncotype DX panel (as opposed to variant data from the genes in the panel) is represented here."
* status = #final "final"
* code = GTR#509910 "Oncotype DX Breast Recurrence Score Assay"  // take advantage of extensibility
* code.text = "Oncotype DX Breast Recurrence Score Assay"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-12"
* performer = Reference(us-core-organization-bedrock-medicine)
* valueQuantity = 47 '1' "Recurrence score"
* interpretation = ObsInt#H "High"

// Initial Chemotherapy

Instance: cancer-related-medication-request-doxorubicin-jenny-m
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#outpatient
* intent = #order
* medicationCodeableConcept = RXN#3639 "DOXOrubicin"
* subject = Reference(cancer-patient-jenny-m)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2018-04-01"
* authoredOn = "2018-04-12"
* dosageInstruction.text = "doxorubicin (60 mg/m² IV)"
* dosageInstruction.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.rateQuantity = 60 'mg/m2' "mg/m2"
// Once every 3 weeks
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 3 'wk' "week"

Instance: cancer-related-medication-request-cyclophosphamide-jenny-m
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#outpatient
* intent = #order
* medicationCodeableConcept = RXN#3002 "cyclophosphamide"
* subject = Reference(cancer-patient-jenny-m)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2018-04-01"
* authoredOn = "2018-04-12"
* dosageInstruction.text = "cyclophosphamide (600 mg/m² IV), 932.59mg"
* dosageInstruction.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.doseQuantity = 932.59 'mg' "mg"
// Once every 3 weeks
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 3 'wk' "week"

Instance: cancer-related-medication-request-paclitaxel-jenny-m
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#outpatient
* intent = #order
* medicationCodeableConcept = RXN#56946 "PACLitaxel"
* subject = Reference(cancer-patient-jenny-m)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2018-04-12"
* authoredOn = "2018-04-12"
* dosageInstruction.text = "PACLitaxel (175 mg/m² IV), 272.01mg"
* dosageInstruction.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.doseQuantity = 272.01 'mg' "mg"
// Once every 3 weeks
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 3 'wk' "week"


// The order, placed on 4/12/18 was administered on Day 1 chemotherapy admin on 4/22/18.
// A new weight was obtained to calculate the absolute chemotherapy dose for administration.
Instance: bodyweight-jenny-m-2018-04-22
InstanceOf: http://hl7.org/fhir/StructureDefinition/bodyweight
Description: "Extended example: body weight vital sign at the time of chemotherapy administration"
* status = #final "final"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-04-22"
* valueQuantity = 150.0 '[lb_av]' "lb"
* performer = Reference(us-core-practitioner-owen-oncologist)

// Based on the relative dose, height, and current weight, we calculate the absolute dose to be 105.96 mg of doxorubicin.
// Chemotherapy preparation details (e.g.: number of vials used for the absolute dose, IV mixing solution, etc.)
// have been omitted for simplicity.
Instance: cancer-related-medication-admin-doxorubicin-jenny-m
InstanceOf: CancerRelatedMedicationAdministration
Description: "Extended example: example showing chemotherapy medication"
* status = #completed "completed"
* category = MedReqCat#outpatient
* medicationCodeableConcept = RXN#1790099 "10 ML doxorubicin hydrochloride 2 MG/ML Injection"
* subject = Reference(cancer-patient-jenny-m)
* performer.actor = Reference(us-core-practitioner-nancy-oncology-nurse)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* request = Reference(cancer-related-medication-request-doxorubicin-jenny-m)
* effectiveDateTime = "2018-04-22"
* note.authorReference = Reference(us-core-practitioner-nancy-oncology-nurse)
* note.time = "2018-04-22"
* note.text = "doxorubicin (60 mg/m² IV), 105.96 mg in 50 ml 0.9% normal saline administered by continuous infusion. Patient tolerated infusion without side effects."
* dosage.dose = 105.96 'mg' "mg"
* dosage.route = SCT#47625008 "Intravenous route (qualifier value)"
* extension[normalizationBasis].valueCodeableConcept = SCT#363804004 "Body weight characteristic (observable entity)"


Instance: cancer-related-medication-admin-cyclophosphamide-jenny-m
InstanceOf: CancerRelatedMedicationAdministration
Description: "Extended example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #completed "completed"
* category = MedReqCat#outpatient
* medicationCodeableConcept = RXN#3002 "cyclophosphamide"
* subject = Reference(cancer-patient-jenny-m)
* performer.actor = Reference(us-core-practitioner-nancy-oncology-nurse)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* effectiveDateTime = "2018-04-22"
* note.authorReference = Reference(us-core-practitioner-nancy-oncology-nurse)
* note.time = "2018-04-22"
* note.text = "cyclophosphamide (60 mg/m² IV), 932.59 mg in 50 ml 0.9% normal saline administered by continuous infusion. Patient tolerated infusion without side effects."
* dosage.dose = 932.59 'mg' "mg"
* dosage.route = SCT#47625008 "Intravenous route (qualifier value)"

Instance: cancer-related-medication-admin-paclitaxel-jenny-m
InstanceOf: CancerRelatedMedicationAdministration
Description: "Extended example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #completed "completed"
* category = MedReqCat#outpatient
* medicationCodeableConcept = RXN#56946 "PACLitaxel"
* subject = Reference(cancer-patient-jenny-m)
* performer.actor = Reference(us-core-practitioner-nancy-oncology-nurse)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* note.time = "2018-04-12"
* note.text = "PACLitaxel (175 mg/m² IV), 272.01mg"
* dosage.route = SCT#47625008 "Intravenous route (qualifier value)"
* dosage.dose = 272.01 'mg' "mg"
* effectiveDateTime = "2018-04-22"


Instance: radiotherapy-treatment-summary-chest-wall-jenny-m
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* status = #completed "completed"
* code = SCT#1217123003 // "Radiotherapy course of treatment (regime/therapy)"
//* category = SCT#108290001 "Radiation oncology AND/OR radiotherapy (procedure)"
* bodySite = SCT#78904004 "Chest Wall Structure (body structure)"
* reasonCode = ICD10CM#C50.811 "Malignant neoplasm of overlapping sites of right female breast"
* extension[actualNumberOfSessions].valueUnsignedInt = 31
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* performedPeriod.start = "2018-08-15"
* performedPeriod.end = "2018-10-25"
// modified example to demonstrate new RadiotherapyModalityAndTechnique structure in Course Summary
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#1156506007 "External beam radiation therapy using photons (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1156530009 "Volumetric Modulated Arc Therapy (procedure)"
* extension[modalityAndTechnique][1].extension[modality][0].valueCodeableConcept = SCT#45643008  "Teleradiotherapy using electrons"
* extension[modalityAndTechnique][1].extension[technique][0].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"
* extension[doseDeliveredToVolume][0].extension[volume].valueReference = Reference(jenny-m-chest-wall-treatment-volume)
* extension[doseDeliveredToVolume][0].extension[totalDoseDelivered].valueQuantity = 6000 'cGy'
* extension[doseDeliveredToVolume][0].extension[fractionsDelivered].valueUnsignedInt = 30
* extension[doseDeliveredToVolume][1].extension[volume].valueReference = Reference(jenny-m-chest-wall-lymph-nodes-treatment-volume)
* extension[doseDeliveredToVolume][1].extension[totalDoseDelivered].valueQuantity = 5000 'cGy'
* extension[doseDeliveredToVolume][1].extension[fractionsDelivered].valueUnsignedInt = 25
* subject = Reference(cancer-patient-jenny-m)
* asserter = Reference(us-core-practitioner-kyle-anydoc)

// FOR TESTING
/*
RuleSet: CourseSummaryContent
* status = #completed "completed"
* category = SCT#108290001 "Radiation oncology AND/OR radiotherapy (procedure)"
* bodySite = SCT#78904004 "Chest Wall Structure (body structure)"
* reasonCode = ICD10CM#C50.811 "Malignant neoplasm of overlapping sites of right female breast"
* extension[actualNumberOfSessions].valueUnsignedInt = 31
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* performedPeriod.start = "2018-08-15"
* performedPeriod.end = "2018-10-25"
// modified example to demonstrate new RadiotherapyModalityAndTechnique structure in Course Summary
* extension[doseDeliveredToVolume][0].extension[volume].valueReference = Reference(jenny-m-chest-wall-treatment-volume)
* extension[doseDeliveredToVolume][0].extension[totalDoseDelivered].valueQuantity = 6000 'cGy'
* extension[doseDeliveredToVolume][0].extension[fractionsDelivered].valueUnsignedInt = 30
* extension[doseDeliveredToVolume][1].extension[volume].valueReference = Reference(jenny-m-chest-wall-lymph-nodes-treatment-volume)
* extension[doseDeliveredToVolume][1].extension[totalDoseDelivered].valueQuantity = 5000 'cGy'
* extension[doseDeliveredToVolume][1].extension[fractionsDelivered].valueUnsignedInt = 25
* subject = Reference(cancer-patient-jenny-m)
* asserter = Reference(us-core-practitioner-kyle-anydoc)

Instance: radiotherapy-treatment-valid-modality-technique-combos
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
// Electrons
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#45643008  "Teleradiotherapy using electrons"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156526006 "Two dimensional external beam radiation therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#168524008 "Radiotherapy - intraoperative control (procedure)"
// Protons
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#10611004 "External beam radiation therapy protons (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#1156529004 "External beam radiation therapy using particle passive scattering technique (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156528007 "External beam radiation therapy using particle spot scanning technique (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1204242009 "External beam radiation therapy using particle scanning technique (procedure)"
// Neutrons
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#80347004 "External beam radiation therapy neutrons (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#169317000 "Neutron capture therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"
// Carbon Ions
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#1156505006 "External beam radiation therapy using carbon ions (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#1156529004 "External beam radiation therapy using particle passive scattering technique (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156528007 "External beam radiation therapy using particle spot scanning technique (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1204242009 "External beam radiation therapy using particle scanning technique (procedure)"
// Photons
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#1156506007 "External beam radiation therapy using photons (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#441799006 "Intensity modulated radiation therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156530009 "Volumetric Modulated Arc Therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156526006 "Two dimensional external beam radiation therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#168524008 "Radiotherapy - intraoperative control (procedure)"
// Brach LDR
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#1156708005 "Low dose rate brachytherapy using temporary radioactive source (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#384692006 "Intracavitary brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#113120007 "Interstitial brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#14473006 "Surface brachytherapy (procedure)"
// Brach permanent
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#169359004 "Internal radiotherapy - permanent seeds (procedure)"  //* RT#LDR-PERM
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#113120007 "Interstitial brachytherapy (procedure)"
// Brach Pulsed
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#1156384006 "Pulsed dose rate brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#384692006 "Intracavitary brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#113120007 "Interstitial brachytherapy (procedure)"
// Brach HDR
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#394902000 "High dose brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#384692006 "Intracavitary brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156382005 "Intensity modulated intracavitary brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156383000 "Intravascular brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#113120007 "Interstitial brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#384691004 "Intraluminal brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#168524008 "Radiotherapy - intraoperative control (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#14473006 "Surface brachytherapy (procedure)"
// Brach HDRe
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#438629002 "High dose rate electronic brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#384692006 "Intracavitary brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156382005 "Intensity modulated intracavitary brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#113120007 "Interstitial brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#384691004 "Intraluminal brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#168524008 "Radiotherapy - intraoperative control (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#14473006 "Surface brachytherapy (procedure)"
// Brach Radiopharm
* extension[modalityAndTechnique][+].extension[modality][0].valueCodeableConcept = SCT#440252007 "Administration of radiopharmaceutical (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#16560241000119104 "Oral radionuclide therapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#1156383000 "Intravascular brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][0].valueCodeableConcept = SCT#384692006 "Intracavitary brachytherapy (procedure)"
* extension[modalityAndTechnique][=].extension[technique][+].valueCodeableConcept = SCT#113120007 "Interstitial brachytherapy (procedure)"

Instance: radiotherapy-treatment-invalid-photon-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#1156506007 "External beam radiation therapy using photons (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1204242009 "External beam radiation therapy using particle scanning technique (procedure)"

Instance: radiotherapy-treatment-invalid-carbonion-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#1156505006 "External beam radiation therapy using carbon ions (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"

Instance: radiotherapy-treatment-invalid-proton-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#10611004 "External beam radiation therapy protons (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"

Instance: radiotherapy-treatment-invalid-proton-valid-photon-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#10611004 "External beam radiation therapy protons (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"
* extension[modalityAndTechnique][1].extension[modality][0].valueCodeableConcept = SCT#1156506007 "External beam radiation therapy using photons (procedure)"
* extension[modalityAndTechnique][1].extension[technique][0].valueCodeableConcept = SCT#1162782007 "Three dimensional external beam radiation therapy (procedure)"


Instance: radiotherapy-treatment-invalid-neutron-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#80347004 "External beam radiation therapy neutrons (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1204242009 "External beam radiation therapy using particle scanning technique (procedure)"

Instance: radiotherapy-treatment-invalid-brachperm-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#169359004 "Internal radiotherapy - permanent seeds (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#384692006 "Intracavitary brachytherapy (procedure)"

Instance: radiotherapy-treatment-invalid-brachldr-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#1156708005 "Low dose rate brachytherapy using temporary radioactive source (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#16560241000119104 "Oral radionuclide therapy (procedure)"

Instance: radiotherapy-treatment-invalid-brachpulsed-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#1156384006 "Pulsed dose rate brachytherapy (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#16560241000119104 "Oral radionuclide therapy (procedure)"

Instance: radiotherapy-treatment-invalid-brachhdr-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#394902000 "High dose brachytherapy (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#16560241000119104 "Oral radionuclide therapy (procedure)"

Instance: radiotherapy-treatment-invalid-brachhdre-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#438629002 "High dose rate electronic brachytherapy (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1156383000 "Intravascular brachytherapy (procedure)"

Instance: radiotherapy-treatment-invalid-brachradiopharm-technique
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* insert CourseSummaryContent
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#440252007 "Administration of radiopharmaceutical (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#14473006 "Surface brachytherapy (procedure)"

*/


Instance: jenny-m-chest-wall-treatment-volume
InstanceOf: RadiotherapyVolume
Description: "Anatomic volume 1 for Jenny M's teleradiotherapy."
* patient = Reference(cancer-patient-jenny-m)
* description = "Chest Wall"
* identifier.value = "1.2.246.352…1"
* identifier.use = #usual
* location = SCT#78904004 "Chest wall structure (body structure)"
* locationQualifier = SCT#255503000 "Entire (qualifier value)"

Instance: jenny-m-chest-wall-lymph-nodes-treatment-volume
InstanceOf: RadiotherapyVolume
Description: "Anatomic volume 2 for Jenny M's teleradiotherapy."
* patient = Reference(cancer-patient-jenny-m)
* description = "Chest Wall Lymph Nodes"
* identifier.value = "1.2.246.352…2"
* identifier.use = #usual
* location = SCT#62683002 "Mediastinal lymph node structure (body structure)"
* locationQualifier = SCT#51440002  "Right and left (qualifier value)"

Instance: cancer-related-medication-request-anastrozole-jenny-m
InstanceOf: CancerRelatedMedicationRequest
Description: "Extended example: example showing chemotherapy medication"
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* category = MedReqCat#community
* intent = #order
* medicationCodeableConcept = RXN#84857 "anastrozole"
* subject = Reference(cancer-patient-jenny-m)
* requester = Reference(us-core-practitioner-owen-oncologist)
* reasonReference = Reference(primary-cancer-condition-jenny-m)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2018-09-30"
* authoredOn = "2018-09-30"
* dosageInstruction.text = "1mg orally once daily"
* dosageInstruction.route = SCT#26643006 "Oral route (qualifier value)"
* dosageInstruction.doseAndRate.doseQuantity = 1 'mg' "mg"
* dosageInstruction.maxDosePerPeriod.numerator.value = 1
* dosageInstruction.maxDosePerPeriod.denominator = 1 'd' "day"

// Check side effects

Instance: us-core-observation-lab-neutrophils-jenny-m
InstanceOf: USCoreObservationLab
Description: "Extended example: neutrophils lab test"
* status = #final "final"
* code = LNC#26499-4 "Neutrophils [#/volume] in Blood"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-05-20T00:00:00Z"
* valueQuantity = 3000 '10*3/uL' "10*3/uL"
* referenceRange.low = 2500 '10*3/uL' "10*3/uL"
* referenceRange.high = 5000 '10*3/uL' "10*3/uL"
* referenceRange.type = RefMeaning#normal "Normal Range"
* performer = Reference(us-core-practitioner-owen-oncologist)

// Following first line of therapy

Instance: cancer-disease-status-jenny-m
InstanceOf: CancerDiseaseStatus
Description: "Extended example: example showing disease status (patient's condition improved)"
* extension[evidenceType].valueCodeableConcept = SCT#363679005 "Imaging (procedure)"
* status = #final "final"
* code = LNC#97509-4 "Cancer Disease Progression"
* subject = Reference(cancer-patient-jenny-m)
* effectiveDateTime = "2018-11-01"
* performer = Reference(us-core-practitioner-owen-oncologist)
* focus = Reference(primary-cancer-condition-jenny-m)
* valueCodeableConcept = SCT#268910001 "Patient's condition improved (finding)"

// Actors

Instance: cancer-patient-jenny-m
InstanceOf: CancerPatient
Description: "Extended example: example cancer patient"
* identifier.use = #usual
* identifier.type = IDTYPE#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "MRN1234"
* name.family = "M"
* name.given[0] = "Jenny"
* gender = #female
* birthDate = "1965-01-01"
* address.line = "123 Main St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "United States"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "555-867-5309"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "example@example.com"
* communication.language = urn:ietf:bcp:47#en-US
* communication.language.text = "English"
* extension[USCoreRace].extension[ombCategory].valueCoding = OmbRaceCat#2106-3 "White"
* extension[USCoreRace].extension[text].valueString = "White"
* extension[USCoreEthnicity].extension[ombCategory].valueCoding = OmbRaceCat#2186-5 "Not Hispanic or Latino"
* extension[USCoreEthnicity].extension[text].valueString = "Not Hispanic or Latino"
* extension[USCoreBirthSex].valueCode = #F

Instance: us-core-practitioner-jane-radiotech
InstanceOf: USCorePractitioner
Description: "Extended example: example PCP practitioner"
* identifier[NPI].value = "2345123675"
* name.family = "Radiologist"
* name.given[0] = "Jane"
* name.prefix[0] = "Dr."
* address.use = #work
* address.line[0] = "123 Primary Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* gender = #female
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#MD
* qualification.code.coding[0].version = "2.7"

Instance: us-core-practitioner-mary-obgyn
InstanceOf: USCorePractitioner
Description: "Extended example: example PCP practitioner"
* identifier[NPI].value = "2345123675"
* name.family = "Obgyn"
* name.given[0] = "Mary"
* name.prefix[0] = "Dr."
* address.use = #work
* address.line[0] = "123 Primary Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* gender = #female
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#MD
* qualification.code.coding[0].version = "2.7"


Instance: us-core-practitioner-owen-oncologist
InstanceOf: USCorePractitioner
Description: "Extended example: example practitioner"
* identifier[NPI].value = "9988776651"
* name.family = "Oncologist"
* name.given[0] = "Owen"
* name.prefix[0] = "Dr."
* address.use = #work
* address.line[0] = "123 Corporate Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* gender = #male
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#MD
* qualification.code.coding[0].version = "2.7"

Instance: us-core-practitioner-peter-pathologist
InstanceOf: USCorePractitioner
Description: "Extended example: example practitioner (pathologist)"
* identifier[NPI].value = "1122334455"
* name.family = "Pathologist"
* name.given[0] = "Peter"
* name.prefix[0] = "Dr."
* address.use = #work
* address.line[0] = "123 Corporate Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* gender = #female
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#MD
* qualification.code.coding[0].version = "2.7"

Instance: us-core-practitioner-nancy-oncology-nurse
InstanceOf: USCorePractitioner
Description: "Extended example: example RN practitioner"
* identifier[NPI].value = "5566778895"
* name.family = "Nurse"
* name.given[0] = "Nancy"
* name.prefix[0] = "Ms."
* address.use = #work
* address.line[0] = "123 Corporate Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* gender = #female
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#RN
* qualification.code.coding[0].version = "2.7"

Instance: us-core-organization-physician-services-inc
InstanceOf: USCoreOrganization
Description: "Extended example: example organization"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov "Healthcare Provider"
* name = "Physician Services, Inc."
* telecom.system = #phone
* telecom.value = "999-999-9999"
* telecom.use = #work
* address.line = "123 Corporate Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"

Instance: us-core-organization-bedrock-medicine
InstanceOf: USCoreOrganization
Description: "Example of US Core Organization"
* identifier[NPI].value = "1265710008"
* active = true
* name = "Bedrock Medicine"
* contact.telecom.system = #phone
* contact.telecom.value = "617-555-2200"
* address.line = "55 Secant Street"
* address.city = "Cambridge"
* address.state = "MA"
* address.postalCode = "02141"
* address.country = "USA"

/*
Instance: radiotherapy-treatment-summary-chest-wall-RTtestNonCompliant-m
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost,  THIS INSTANCE IS SUPPOSED TO FAIL VALIDATION!   Need to expand testing of modality/technique combination invariants."
* status = #completed "completed"
* category = SCT#108290001 //"Radiation oncology AND/OR radiotherapy (procedure)"
* bodySite = SCT#78904004 //"Chest Wall Structure (body structure)"
* reasonCode = ICD10CM#C50.811 //"Malignant neoplasm of overlapping sites of right female breast"
* extension[actualNumberOfSessions].valueUnsignedInt = 31
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 //"Curative - procedure intent"
* performedPeriod.start = "2018-05-01"
* performedPeriod.end = "2018-06-29"
// Technique assigned NOT associated with brachytherapy radiopharmaceutical modality
* extension[modalityAndTechnique][0].extension[modality][0].valueCodeableConcept = SCT#440252007 //"Administration of radiopharmaceutical (procedure)"
* extension[modalityAndTechnique][0].extension[technique][0].valueCodeableConcept = SCT#1156530009 // "Volumetric Modulated Arc Therapy (procedure)"
* extension[doseDeliveredToVolume][0].extension[volume].valueReference = Reference(jenny-m-chest-wall-treatment-volume)
* extension[doseDeliveredToVolume][0].extension[totalDoseDelivered].valueQuantity = 6000 'cGy'
* extension[doseDeliveredToVolume][0].extension[fractionsDelivered].valueUnsignedInt = 30
* extension[doseDeliveredToVolume][1].extension[volume].valueReference = Reference(jenny-m-chest-wall-lymph-nodes-treatment-volume)
* extension[doseDeliveredToVolume][1].extension[totalDoseDelivered].valueQuantity = 5000 'cGy'
* extension[doseDeliveredToVolume][1].extension[fractionsDelivered].valueUnsignedInt = 25
* subject = Reference(cancer-patient-jenny-m)
* asserter = Reference(us-core-practitioner-kyle-anydoc)
*/


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_GenomeX.fsh

// GenomeX example for Use Case 1 - Reference lab to EHR
// The following examples will be used as a prototype and based on de-identified RWD test data. There is no PHI.

// **************************************************************
// ************* Example 1: Tumor-Normal Test *******************
// **************************************************************

Instance: gx-cancer-patient-adam-anyperson
InstanceOf: CancerPatient
Description: "GenomeX Example of NGS Patient"
* identifier.use = #usual
* identifier[0].type = IDTYPE#PT "Patient external identifier"
* identifier[0].system = "https://www.gensop.com"
* identifier[0].value = "22ea1d1b-03a5-47d6-81e0-b9b4cbb15ccf"
* identifier[1].type = IDTYPE#MR "Medical Record Number"
* identifier[1].system = "http://hospital.example.org"
* identifier[1].value = "123456789"
* name.family = "Anyperson"
* name.given[0] = "Adam"
* gender = #male
* extension[birthsex].valueCode = #M
* birthDate = "1990-01-01"
* address.line = "987 Main St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"


Instance: gx-order-tumornormal-gensop-inc
InstanceOf: ServiceRequest
Description: "GenomeX example: Order information"
* identifier[0].type = IDTYPE#FILL "Filler Identifier"
* identifier[0].system = "https://www.gensop.com"
* identifier[0].value = "22howe"
* status = #completed
* intent = #order
* subject = Reference(gx-cancer-patient-adam-anyperson)
* code = https://www.gensop.com#XT.V4 "xT - 648 gene panel"
* reasonCode[0].coding[0] = ICD10CM#C34.9 "Malignant neoplasm of unspecified part of bronchus or lung"
* reasonCode[0].coding[1] = ICDO3#"C34.9 8140/3" "Lung adenocarcinoma"

Instance: gx-us-core-organization-gensop-inc
InstanceOf: USCoreOrganization
Description: "GenomeX example: example organization"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#other "Other"
* name = "Gensop Labs, Inc."
* identifier[0].system = "urn:oid:2.16.840.1.113883.4.7"  //CLIA number
* identifier[0].value = "14D7329100"
* telecom[0].system = #phone
* telecom[0].value = "555-555-5555"
* telecom[1].system = #email
* telecom[1].value = "support@gensop.com"
* telecom.use = #work
* address.line = "8415 Hitech Road"
* address.city = "Chicago"
* address.state = "IL"
* address.postalCode = "60654"
* address.country = "US"
* contact.name.text = "Quinn Chen, MD"

Instance: gx-practitioner-test-pathologist
InstanceOf: Practitioner
Description: "GenomeX mCODE example: results interpreter of the NGS test."
// Note that the example report only has a text name of the practitioner so we cannot use US Core.
* name.text = "Test Pathologist, MD"

Instance: gx-genomic-specimen-tumornormal-tumor
InstanceOf: HumanSpecimen
Description: "GenomeX mCODE Example for Genomic Specimen - Tumor specimen of the TumorNormal test"
* status = #available "Available"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* type = SPTY#TUMOR "Tumor"
* receivedTime = "2021-02-09T21:30:50+05:00"
* collection.bodySite = SCT#44029006 "Left lung structure (body structure)"
* collection.collectedDateTime = "2021-02-06T17:15:00+05:00"

Instance: gx-genomic-specimen-tumornormal-normal
InstanceOf: HumanSpecimen
Description: "GenomeX mCODE Example for Genomic Specimen - Tumor specimen of the TumorNormal test"
* status = #available "Available"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* type = SPTY#BLD "Whole Blood"  // HL7v2 Specimen type does not handle "a normal sample" for TumorNormal
* receivedTime = "2021-02-09T21:30:50+05:00"
* collection.collectedDateTime = "2021-02-06T17:15:00+05:00"

// ******** "Biologically significant" Variants **********
// Note: the Example 1 Tumor-Normal report does not explicitly identify the variant's clinical significance

Instance: gx-genomic-variant-somatic-bap1-indel
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - BAP1"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
// value[x] has alternate codings depending on where to place the interpretation of "Positive or Negative".
// * interpretation = SCT#10828004 "Positive (qualifier value)"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:950 "BAP1"
* component[gene-studied].valueCodeableConcept.coding[1] = ENTREZ#3815 "BAP1"
* component[transcript-ref-seq].valueCodeableConcept = NCBI#NM_004656 "NM_004656.4"
* component[coding-hgvs].valueCodeableConcept = HGVS#NM_004656.4:c.1768C>T "NM_004656.4:c.1768C>T"
* component[protein-hgvs].valueCodeableConcept = HGVS#NP_004647.1:p.(Gln590Ter) "NP_004647.1:p.(Gln590Ter)"  // Mutalizer normalized HGVS string for HGVS#p.Q590* "p.Q590*".
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[sample-allelic-frequency].valueQuantity = 57.4 '%' "%"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001587 "stop_gained"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-diagnostic-implication-bap1
InstanceOf: DiagnosticImplication
Description: "GenomeX mCODE Example for functional effect (loss of function) - BAP1"
* status = #final "Final"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* derivedFrom = Reference(gx-genomic-variant-somatic-bap1-indel)
* component[functional-effect].valueCodeableConcept = SO#SO:0002054 "loss of function variant"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-variant-somatic-cdkn2a-cnv
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - CDKN2A"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:1787 "CDKN2A"
* component[gene-studied].valueCodeableConcept.coding[1] = ENTREZ#1029 "CDKN2A"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001743 "copy_number_loss"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-variant-somatic-cdkn2b-cnv
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - CDKN2B"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:1788 "CDKN2B"
* component[gene-studied].valueCodeableConcept.coding[1] = ENTREZ#1030 "CDKN2B"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001743 "copy_number_loss"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-variant-somatic-kdm5d
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - KDM5D"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:11115 "KDM5D"
* component[gene-studied].valueCodeableConcept.coding[1] = ENTREZ#8284 "KDM5D"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001743 "copy_number_loss"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-variant-somatic-mtap
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - MTAP"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:7413 "MTAP"
* component[gene-studied].valueCodeableConcept.coding[1] = ENTREZ#4507 "MTAP"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001743 "copy_number_loss"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-variant-somatic-mycn
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - MYCN"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:7559 "MYCN"
* component[gene-studied].valueCodeableConcept.coding[1] = ENTREZ#4613 "MYCN"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001742 "copy_number_gain"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

// MLT: All pertinent negative genes for a single report were combined into one variant "absent" resource.

Instance: gx-genomic-variant-pertinent-negative-nras-kit-braf
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for the absence of a notable variant - KIT and BRAF"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9634-2 "Absent"
* component[gene-studied][0].valueCodeableConcept = HGNC#HGNC:6342 "NRAS" 
* component[gene-studied][1].valueCodeableConcept = HGNC#HGNC:7989 "KIT"
* component[gene-studied][+].valueCodeableConcept = HGNC#HGNC:1097 "BRAF" 
* performer = Reference(us-core-practitioner-owen-oncologist)

/* genomic-variant-fusion is an example of the
 * GenomicVariant to represent a gene fusion event.
 * This example demonstrates a test for the gene fusion MET-ALK.
 */
Instance: gx-genomic-variant-fusion-met-alk
InstanceOf: GenomicVariant
Description: "mCODE Example for Genomic Variant gene fusion event"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied][0].valueCodeableConcept.coding[0] = HGNC#HGNC:7029 "MET" 
* component[gene-studied][0].valueCodeableConcept.coding[1] = ENTREZ#4233 "MET"
* component[gene-studied][1].valueCodeableConcept.coding[0] = HGNC#HGNC:427 "ALK"
* component[gene-studied][1].valueCodeableConcept.coding[1] = ENTREZ#238 "ALK"
* component[coding-change-type].valueCodeableConcept = SO#SO:0002062 "complex chromosomal rearrangement"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* performer = Reference(us-core-practitioner-owen-oncologist)

// ******** Variants of Unknown Significance (VUS) **********

Instance: gx-genomic-variant-somatic-pof1b
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - POF1B"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:13711 "POF1B"
* component[gene-studied].valueCodeableConcept.coding[1] = ENTREZ#79983 "POF1B"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001583 "missense_variant"
* component[transcript-ref-seq].valueCodeableConcept = NCBI#NM_004656 "NM_004656"
* component[coding-hgvs].valueCodeableConcept = HGVS#NM_001307940.2:c.430C>T "NM_001307940.2:c.430C>T"
* component[protein-hgvs].valueCodeableConcept = HGVS#NP_001294869.1:p.(Pro144Ser) "NP_001294869.1:p.(Pro144Ser)"  // VariantValidator normalized HGVS string for p.P144S*".
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[sample-allelic-frequency].valueQuantity = 78.6 '%' "%"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-diagnostic-implication-pof1b
InstanceOf: DiagnosticImplication
Description: "GenomeX mCODE Example for Clinical Significance of VUS - POF1B"
* status = #final "Final"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* derivedFrom = Reference(gx-genomic-variant-somatic-pof1b)
* component[clinical-significance].valueCodeableConcept = LNC#LA26333-7 "Uncertain significance"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-variant-somatic-polrmt
InstanceOf: GenomicVariant
Description: "GenomeX mCODE Example for Genomic Variant - POLRMT"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept.coding[0] = HGNC#HGNC:9200 "POLRMT"
* component[gene-studied].valueCodeableConcept.coding[0] = ENTREZ#5442 "POLRMT"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[molecular-consequence].valueCodeableConcept = SO#SO:0001583 "missense_variant"
* component[transcript-ref-seq].valueCodeableConcept = NCBI#NM_004656 "NM_005035"
* component[coding-hgvs].valueCodeableConcept = HGVS#NM_005035.4:c.598G>A "NM_005035.4:c.598G>A"
* component[protein-hgvs].valueCodeableConcept = HGVS#NP_005026.3:p.(Gly200Arg) "NP_005026.3:p.(Gly200Arg)"  // VariantValidator normalized HGVS string for p.G200R
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* component[sample-allelic-frequency].valueQuantity = 75.6 '%' "%"
* component[reference-sequence-assembly].valueCodeableConcept = LNC#LA14029-5 "GRCh37"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-diagnostic-implication-polrmt
InstanceOf: DiagnosticImplication
Description: "GenomeX mCODE Example for Clinical Significance of VUS - POLRMT"
* status = #final "Final"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* derivedFrom = Reference(gx-genomic-variant-somatic-polrmt)
* component[clinical-significance].valueCodeableConcept = LNC#LA26333-7 "Uncertain significance"
* performer = Reference(us-core-practitioner-owen-oncologist)

// ******* Tumor Mutation Burden *********
Instance: gx-genomic-tmb
InstanceOf: TMB
Description: "Example for Tumor Mutation Burden"
* status = #final "final"
* effectiveDateTime = "2019-04-01"
* category[labCategory] = ObsCat#laboratory
* subject = Reference(gx-cancer-patient-adam-anyperson)
* valueQuantity.value = 57.1
* performer = Reference(us-core-practitioner-owen-oncologist)

// ******* Microsatellite Instability *********
Instance: gx-genomic-msi
InstanceOf: MSI
Description: "Example for Microsatellite Instability"
* status = #final "final"
* effectiveDateTime = "2019-04-01"
* category[labCategory] = ObsCat#laboratory
* subject = Reference(gx-cancer-patient-adam-anyperson)
* valueCodeableConcept = LNC#LA26203-2 "MSI-H"
* performer = Reference(us-core-practitioner-owen-oncologist)

// ******** Therapeutic Implications *********

Instance: gx-genomic-therapeutic-implication-alectinib
InstanceOf: CGTherapeuticImplication
Description: "Example of how Genomics Reporting IG Therapeutic Implications fits with mCODE"
* status = #final "Final"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* category[labCategory] = ObsCat#laboratory
* derivedFrom = Reference(gx-genomic-variant-fusion-met-alk)
* component[medication-assessed].valueCodeableConcept = RXN#1727455 "alectinib"
* component[predicted-therapeutic-implication].valueCodeableConcept = LNC#LA9661-5 "Presumed responsive"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-therapeutic-implication-brigatinib
InstanceOf: CGTherapeuticImplication
Description: "Example of how Genomics Reporting IG Therapeutic Implications fits with mCODE"
* status = #final "Final"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* category[labCategory] = ObsCat#laboratory
* derivedFrom = Reference(gx-genomic-variant-fusion-met-alk)
* component[medication-assessed].valueCodeableConcept = RXN#1921217 "brigatinib"
* component[predicted-therapeutic-implication].valueCodeableConcept = LNC#LA9661-5 "Presumed responsive"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-therapeutic-implication-ceritinib
InstanceOf: CGTherapeuticImplication
Description: "Example of how Genomics Reporting IG Therapeutic Implications fits with mCODE"
* status = #final "Final"
* category[labCategory] = ObsCat#laboratory
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* derivedFrom = Reference(gx-genomic-variant-fusion-met-alk)
* component[medication-assessed].valueCodeableConcept = RXN#1535457 "ceritinib"
* component[predicted-therapeutic-implication].valueCodeableConcept = LNC#LA9661-5 "Presumed responsive"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-therapeutic-implication-crizotinib
InstanceOf: CGTherapeuticImplication
Description: "Example of how Genomics Reporting IG Therapeutic Implications fits with mCODE"
* status = #final "Final"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* category[labCategory] = ObsCat#laboratory
* derivedFrom = Reference(gx-genomic-variant-fusion-met-alk)
* component[medication-assessed].valueCodeableConcept = RXN#1148495 "crizotinib"
* component[predicted-therapeutic-implication].valueCodeableConcept = LNC#LA9661-5 "Presumed responsive"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: gx-genomic-therapeutic-implication-lorlatinib
InstanceOf: CGTherapeuticImplication
Description: "Example of how Genomics Reporting IG Therapeutic Implications fits with mCODE"
* status = #final "Final"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* effectiveDateTime = "2019-04-01"
* category[labCategory] = ObsCat#laboratory
* derivedFrom = Reference(gx-genomic-variant-fusion-met-alk)
* component[medication-assessed].valueCodeableConcept = RXN#2103164 "lorlatinib"
* component[predicted-therapeutic-implication].valueCodeableConcept = LNC#LA9661-5 "Presumed responsive"
* performer = Reference(us-core-practitioner-owen-oncologist)

// ********** Genomics Report ***********
Instance: gx-genomics-report-adam-anyperson
InstanceOf: mcode-genomics-report
Description: "GenomeX Example for Genomics Report"
* status = #final "Final"
* code = LNC#51969-4 "Genetic analysis report"
* subject = Reference(gx-cancer-patient-adam-anyperson)
* performer = Reference(gx-us-core-organization-gensop-inc)
* effectiveDateTime = "2022-02-15T19:28:58+05:00"
* basedOn = Reference(gx-order-tumornormal-gensop-inc)
* resultsInterpreter = Reference(gx-practitioner-test-pathologist)
* specimen[0] = Reference(Specimen/gx-genomic-specimen-tumornormal-tumor)
* specimen[1] = Reference(Specimen/gx-genomic-specimen-tumornormal-normal)
* result[0] = Reference(Observation/gx-genomic-variant-somatic-bap1-indel)
* result[1] = Reference(Observation/gx-genomic-variant-somatic-cdkn2a-cnv)
* result[+] = Reference(Observation/gx-genomic-variant-somatic-cdkn2b-cnv)
* result[+] = Reference(Observation/gx-genomic-variant-somatic-kdm5d)
* result[+] = Reference(Observation/gx-genomic-variant-somatic-mtap)
* result[+] = Reference(Observation/gx-genomic-variant-somatic-mycn)
* result[+] = Reference(Observation/gx-genomic-variant-somatic-pof1b)
* result[+] = Reference(Observation/gx-genomic-variant-somatic-polrmt)
* result[+] = Reference(Observation/gx-genomic-diagnostic-implication-bap1)
* result[+] = Reference(Observation/gx-genomic-diagnostic-implication-pof1b)
* result[+] = Reference(Observation/gx-genomic-diagnostic-implication-polrmt)
* result[+] = Reference(Observation/gx-genomic-variant-fusion-met-alk)
* result[+] = Reference(Observation/gx-genomic-variant-pertinent-negative-nras-kit-braf)
* result[+] = Reference(Observation/gx-genomic-tmb)
* result[+] = Reference(Observation/gx-genomic-msi)
* result[+] = Reference(Observation/gx-genomic-therapeutic-implication-alectinib)
* result[+] = Reference(Observation/gx-genomic-therapeutic-implication-brigatinib)
* result[+] = Reference(Observation/gx-genomic-therapeutic-implication-ceritinib)
* result[+] = Reference(Observation/gx-genomic-therapeutic-implication-crizotinib)
* result[+] = Reference(Observation/gx-genomic-therapeutic-implication-lorlatinib)

// * presentedForm.id = "ig-loader-XT_d6eeedd1-92d3-45b9-bf33-6401e804425f.pdf"  // removed the PDF attachment at the request of the lab vendor


// ************* Genomic Bundle *******************

Instance: gx-genomic-bundle-adam-anyperson
InstanceOf: Bundle
Description: "Extended genomics example conformant with an mCODE Bundle."
* type = #collection "Collection"
* entry[0].resource = gx-cancer-patient-adam-anyperson
* entry[=].fullUrl = "http://example.org/fhir/Patient/gx-cancer-patient-adam-anyperson"
* entry[+].resource = gx-genomics-report-adam-anyperson
* entry[=].fullUrl = "http://example.org/fhir/DiagnosticReport/gx-genomics-report-adam-anyperson"
* entry[+].resource = gx-order-tumornormal-gensop-inc
* entry[=].fullUrl = "http://example.org/fhir/ServiceRequest/gx-order-tumornormal-gensop-inc"
* entry[+].resource = gx-practitioner-test-pathologist
* entry[=].fullUrl = "http://example.org/fhir/Practitioner/gx-practitioner-test-pathologist"
* entry[+].resource = gx-genomic-specimen-tumornormal-tumor
* entry[=].fullUrl = "http://example.org/fhir/Specimen/gx-genomic-specimen-tumornormal-tumor"
* entry[+].resource = gx-genomic-specimen-tumornormal-normal
* entry[=].fullUrl = "http://example.org/fhir/Specimen/gx-genomic-specimen-tumornormal-normal"
* entry[+].resource = gx-genomic-variant-somatic-bap1-indel
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-bap1-indel"
* entry[+].resource = gx-genomic-variant-somatic-cdkn2a-cnv
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-cdkn2a-cnv"
* entry[+].resource = gx-genomic-variant-somatic-cdkn2b-cnv
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-cdkn2b-cnv"
* entry[+].resource = gx-genomic-variant-somatic-kdm5d
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-kdm5d"
* entry[+].resource = gx-genomic-variant-somatic-mtap
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-mtap"
* entry[+].resource = gx-genomic-variant-somatic-mycn
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-mycn"
* entry[+].resource = gx-genomic-variant-somatic-pof1b
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-pof1b"
* entry[+].resource = gx-genomic-variant-somatic-polrmt
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-somatic-polrmt"
* entry[+].resource = gx-genomic-diagnostic-implication-bap1
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-diagnostic-implication-bap1"
* entry[+].resource = gx-genomic-diagnostic-implication-pof1b
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-diagnostic-implication-pof1b"
* entry[+].resource = gx-genomic-diagnostic-implication-polrmt
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-diagnostic-implication-polrmt"
* entry[+].resource = gx-genomic-variant-fusion-met-alk
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-fusion-met-alk"
* entry[+].resource = gx-genomic-variant-pertinent-negative-nras-kit-braf
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-variant-pertinent-negative-nras-kit-braf"
* entry[+].resource = gx-genomic-tmb
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-tmb"
* entry[+].resource = gx-genomic-therapeutic-implication-alectinib
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-therapeutic-implication-alectinib"
* entry[+].resource = gx-genomic-therapeutic-implication-brigatinib
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-therapeutic-implication-brigatinib"
* entry[+].resource = gx-genomic-therapeutic-implication-ceritinib
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-therapeutic-implication-ceritinib"
* entry[+].resource = gx-genomic-therapeutic-implication-crizotinib
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-therapeutic-implication-crizotinib"
* entry[+].resource = gx-genomic-therapeutic-implication-lorlatinib
* entry[=].fullUrl = "http://example.org/fhir/Observation/gx-genomic-therapeutic-implication-lorlatinib"

---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_Genomics.fsh

Instance: genomic-variant-somatic-single-nucleotide
InstanceOf: GenomicVariant
Description: "mCODE Example for Genomic Variant"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
// value[x] has alternate codings depending on where to place the interpretation of "Positive or Negative".
// * valueCodeableConcept = SCT#10828004 "Positive (qualifier value)"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* interpretation = SCT#10828004 "Positive (qualifier value)"
* component[gene-studied].valueCodeableConcept = HGNC#HGNC:11389 "STK11"
// variant type: single nucleotide variant
// https://www.ncbi.nlm.nih.gov/clinvar/variation/619728/
// https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/HGNC:8023
* component[variation-code].valueCodeableConcept = CLINVAR#611264 "NM_000455.5(STK11):c.725G>A (p.Gly242Glu)"
* component[genomic-hgvs].valueCodeableConcept = HGVS#NM_000455.5:c.725G>A
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* performer = Reference(us-core-practitioner-owen-oncologist)

/* genomic-variant-germline-deletion is an example of the GenomicVariant to represent a single mutation test.
 * This example demonstrates a test for a single germline mutation, BRCA1 gene.c.185delAG, equivalent to the LOINC test https://loinc.org/21637-4/.
 */
Instance: genomic-variant-germline-deletion
InstanceOf: GenomicVariant
Description: "mCODE Example for Genomic Variant"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
// value[x] has alternate codings depending on where to place the interpretation of "Positive or Negative".
* interpretation = SCT#10828004 "Positive (qualifier value)"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied].valueCodeableConcept = HGNC#HGNC:1100 "BRCA1" // NOTE: HGNC and HGVS codes have special characters in them so SUSHI needs to handle this.
* component[genomic-hgvs].valueCodeableConcept = HGVS#NG_005905.2:g.126148_126152del "NG_005905.2:g.126148_126152del"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6683-2 "Germline"
* performer = Reference(us-core-practitioner-owen-oncologist)

/* genomic-variant-fusion is an example of the
 * GenomicVariant to represent a gene fusion event.
 * This example demonstrates a test for the gene fusion ABR-BCL1.
 */
Instance: genomic-variant-fusion
InstanceOf: GenomicVariant
Description: "mCODE Example for Genomic Variant gene fusion event"
* status = #final "Final"
* method = LNC#LA26398-0 "Sequencing"
* interpretation = SCT#10828004 "Positive (qualifier value)"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* valueCodeableConcept = LNC#LA9633-4 "Present"
* component[gene-studied][0].valueCodeableConcept = HGNC#HGNC:1014 "BCR" // NOTE: HGNC and HGVS codes have special characters in them so SUSHI needs to handle this.
* component[gene-studied][1].valueCodeableConcept = HGNC#HGNC:76 "ABL1"
//* component[molecularConsequence].valueCodeableConcept = SO#SO:001565 "gene_fusion"
* component[genomic-hgvs].valueCodeableConcept = HGVS#NM_005157.6:c.1076T>G "NM_005157.6:c.1076T>G"   // "NM_005157.6(ABL1):c.1076T>G (p.Phe359Cys)"
* component[genomic-source-class].valueCodeableConcept = LNC#LA6684-0 "Somatic"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: genomics-report-john-anyperson
InstanceOf: mcode-genomics-report
Description: "mCODE Example for Genomics Report"
* status = #final "Final"
* code = LNC#51969-4 "Genetic analysis report"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* specimen = Reference(Specimen/human-specimen-lung)
* issued = "2019-04-01T11:45:33+11:00"
* result[variant] = Reference(Observation/genomic-variant-somatic-single-nucleotide)
* result[region-studied] = Reference(genomic-region-studied-stk11)

Instance: genomic-region-studied-stk11
InstanceOf: GenomicRegionStudied
Description: "mCODE Example for Genomic Region Studied"
* status = #final "final"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* issued = "2019-04-01T11:45:33+11:00"
* component[gene-studied].valueCodeableConcept = HGNC#HGNC:11389 "STK11"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: tumor-marker-test-egf
InstanceOf: TumorMarkerTest
Description: "mCODE Example for Tumor Marker Test"
* status = #final "final"
* code = LNC#39004-7 "Epidermal growth factor receptor Ag [Presence] in Tissue"
* subject = Reference(cancer-patient-john-anyperson)
* effectiveDateTime = "2019-04-01"
* performer = Reference(us-core-practitioner-kyle-anydoc)
* valueCodeableConcept = SCT#10828004 "Positive (qualifier value)"

Instance: human-specimen-lung
InstanceOf: HumanSpecimen
Description: "mCODE Example of human specimen"
* status = #available "Available"
* subject = Reference(cancer-patient-john-anyperson)
* processing.timeDateTime = "2019-03-20"
* collection.collector = Reference(us-core-practitioner-kyle-anydoc)
* type = SPTY#TISS "Tissue"
* collection.bodySite = SCT#41224006 "Structure of lower lobe of left lung (body structure)"

---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_Radiotherapy.fsh

Instance: radiotherapy-treatment-summary-other-with-text
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* status = #completed "completed"
* code = SCT#1217123003 // "Radiotherapy course of treatment (regime/therapy)"
//* category = SCT#108290001 "Radiation oncology AND/OR radiotherapy (procedure)"
* bodySite = SCT#78904004 "Chest Wall Structure (body structure)"
* reasonCode = ICD10CM#C50.811 "Malignant neoplasm of overlapping sites of right female breast"
* extension[actualNumberOfSessions].valueUnsignedInt = 31
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* performedPeriod.start = "2018-08-15"
* performedPeriod.end = "2018-10-25"
// modified example to demonstrate new RadiotherapyModalityAndTechnique structure in Course Summary
* extension[modalityAndTechnique][0]
  * extension[modality][0]
    * valueCodeableConcept
      * coding[0] = NULLFLAVOR#UNC "un-encoded"
      * coding[+] = SCT#169317000 "Neutron capture therapy (procedure)"
      * text = "Boron neutron capture therapy (procedure)"
  * extension[technique][0].valueCodeableConcept = SCT#1156530009 "Volumetric Modulated Arc Therapy (procedure)"
* extension[modalityAndTechnique][+]
  * extension[modality][0].valueCodeableConcept = SCT#45643008  "Teleradiotherapy using electrons"
  * extension[technique][0]
    * valueCodeableConcept = NULLFLAVOR#UNC "un-encoded"
    * valueCodeableConcept.text = "Three dimensional external beam radiation therapy (procedure) - my version"
* extension[doseDeliveredToVolume][0].extension[volume].valueReference = Reference(jenny-m-chest-wall-treatment-volume)
* extension[doseDeliveredToVolume][0].extension[totalDoseDelivered].valueQuantity = 6000 'cGy'
* extension[doseDeliveredToVolume][0].extension[fractionsDelivered].valueUnsignedInt = 30
* extension[doseDeliveredToVolume][1].extension[volume].valueReference = Reference(jenny-m-chest-wall-lymph-nodes-treatment-volume)
* extension[doseDeliveredToVolume][1].extension[totalDoseDelivered].valueQuantity = 5000 'cGy'
* extension[doseDeliveredToVolume][1].extension[fractionsDelivered].valueUnsignedInt = 25
* subject = Reference(cancer-patient-jenny-m)
* asserter = Reference(us-core-practitioner-kyle-anydoc)

/* This is for testing purposes -- if un-commented, it should cause error message: "Rule ModalityTextRequiredForOther: 'Require a text literal for code other' Failed"
Instance: radiotherapy-treatment-summary-other-without-text
InstanceOf: RadiotherapyCourseSummary
Description: "Example of radiotherapy treatment summary involving external beam radiation to chest wall and regional node radiation with a chest wall boost"
* status = #completed "completed"
* code = SCT#1217123003 // "Radiotherapy course of treatment (regime/therapy)"
* category = SCT#108290001 "Radiation oncology AND/OR radiotherapy (procedure)"
* bodySite = SCT#78904004 "Chest Wall Structure (body structure)"
* reasonCode = ICD10CM#C50.811 "Malignant neoplasm of overlapping sites of right female breast"
* extension[actualNumberOfSessions].valueUnsignedInt = 31
* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent"
* performedPeriod.start = "2018-08-15"
* performedPeriod.end = "2018-10-25"
// modified example to demonstrate new RadiotherapyModalityAndTechnique structure in Course Summary
* extension[modalityAndTechnique][0]
  * extension[modality][0]
    * valueCodeableConcept = NULLFLAVOR#UNC "un-encoded"
//    * valueCodeableConcept.text = "External beam radiation therapy using photons (procedure) - my version"
  * extension[technique][0].valueCodeableConcept = SCT#1156530009 "Volumetric Modulated Arc Therapy (procedure)"
* extension[modalityAndTechnique][+]
  * extension[modality][0].valueCodeableConcept = SCT#45643008  "Teleradiotherapy using electrons"
  * extension[technique][0]
    * valueCodeableConcept = NULLFLAVOR#UNC "un-encoded"
    * valueCodeableConcept.text = "Three dimensional external beam radiation therapy (procedure) - my version"
* extension[doseDeliveredToVolume][0].extension[volume].valueReference = Reference(jenny-m-chest-wall-treatment-volume)
* extension[doseDeliveredToVolume][0].extension[totalDoseDelivered].valueQuantity = 6000 'cGy'
* extension[doseDeliveredToVolume][0].extension[fractionsDelivered].valueUnsignedInt = 30
* extension[doseDeliveredToVolume][1].extension[volume].valueReference = Reference(jenny-m-chest-wall-lymph-nodes-treatment-volume)
* extension[doseDeliveredToVolume][1].extension[totalDoseDelivered].valueQuantity = 5000 'cGy'
* extension[doseDeliveredToVolume][1].extension[fractionsDelivered].valueUnsignedInt = 25
* subject = Reference(cancer-patient-jenny-m)
* asserter = Reference(us-core-practitioner-kyle-anydoc)
*/

---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_Staging_Other.fsh

Instance: primary-cancer-condition-nonspecific
InstanceOf: PrimaryCancerCondition
Description: "A non-specific Primary Cancer Condition (PCC) used in IG examples. Any real PCC would use a specific diagnostic code."

* clinicalStatus = ClinStatus#active "Active"
* verificationStatus = VerStatus#confirmed "Confirmed"
* category = CondCat#problem-list-item
* code = SCT#128462008 "Metastatic malignant neoplasm (disorder)"
* subject = Reference(cancer-patient-adam-everyman)
* asserter = Reference(us-core-practitioner-kyle-anydoc)
* onsetDateTime = "2020-05-12"

RuleSet: StagingInstanceRuleSet
* status = #final "final"
* focus = Reference(primary-cancer-condition-nonspecific)
* subject = Reference(cancer-patient-john-anyperson)
* performer = Reference(us-core-practitioner-kyle-anydoc)
* effectiveDateTime = "2021-04-01"

//-------------------------------------------------

Instance: binet-stage-group-B
InstanceOf: CancerStage
Description: "Example of Binet staging for CLL."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = NCIT#C141212 "Binet Stage"
// method is optional because Binet staging is implicit in Observation.code
* method = SCT#1149099005 "Binet staging classification for chronic lymphocytic leukemia (tumor staging)"
* valueCodeableConcept = NCIT#C80135 "Binet Stage B"
* focus = Reference(primary-cancer-condition-cll) // added requirement STU3
* derivedFrom = Reference(lab-result-observation-hemoglobin)

Instance: rai-stage-II
InstanceOf: CancerStage
Description: "Example of Rai staging for CLL."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = NCIT#C141207 "Rai Stage"
* method = SCT#1149131009 "Rai staging system for chronic lymphocytic leukemia (tumor staging)"
* valueCodeableConcept = NCIT#C7875 "Stage II Chronic Lymphocytic Leukemia"

Instance: figo-stage-IIIA
InstanceOf: CancerStage
Description: "Example of gynecologic tumor staged by International Federation of Gynecology and Obstetrics (FIGO) Staging System."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = SCT#385361009 "International Federation of Gynecology and Obstetrics stage for gynecological malignancy (observable entity)"
* method = SCT#106250008 "International Federation of Gynecology and Obstetrics staging system for cervical carcinoma (tumor staging)"
* valueCodeableConcept = NCIT#C96256 "FIGO Stage IIIA"

Instance: gleason-grade-group-4
InstanceOf: CancerStage
Description: "Example of Gleason Grade Group for prostatic cancer, with Gleason score 3 + 5 = 8."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = SCT#385377005 "Gleason grade finding for prostatic cancer (finding)"
* valueCodeableConcept = SCT#1279718003 "International Society of Urological Pathology grade group 4 (Gleason score 3 + 5 = 8) (qualifier value)"

Instance: hodgkins-lymphoma-stage-IIIe
InstanceOf: LymphomaStage
Description: "Example of staging using Cotswold staging of Hodgkin's disease."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = SCT#385388004 "Lymphoma stage (observable entity)"
* method = SCT#254375000 "Cotswolds Hodgkin's disease tumor staging system (tumor staging)"
* valueCodeableConcept = SCT#44255004 "Lymphoma stage IIIe (finding)"
* component[stage-modifier].valueCodeableConcept = SCT#282436004 "E - Extralymphatic organ involvement marker"
* component[clin-or-path-modifier].valueCodeableConcept = SCT#261023001 "Pathological staging (qualifier value)"
* component[bulky-modifier].valueCodeableConcept = SCT#52101004 "Present (qualifier value)"

Instance: melanoma-breslow-depth-stage
InstanceOf: CancerStage
Description: "Example of Breslow depth stage for melanoma."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = SCT#106243009 "Breslow depth staging for melanoma of skin (observable entity)"
* valueCodeableConcept = SCT#17456000 "Breslow measurement - depth from 0.76 to 1.75 mm (finding)"

Instance: melanoma-clark-level-4
InstanceOf: CancerStage
Description: "Example of Clark level staging for melanoma."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = SCT#103419001 "Clark melanoma level of invasion of excised malignant melanoma of skin (observable entity)"
// method is optional because Clark staging is implicit in Observation.code
* valueCodeableConcept = SCT#1556006 "Clark melanoma level 4 (finding)"

Instance: multiple-myeloma-iss-stage-II
InstanceOf: CancerStage
Description: "Example of use of International Staging System (ISS) for myeloma staging."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = NCIT#C139007 "International Staging System Stage"
* valueCodeableConcept = NCIT#C70659 "ISS Stage II Plasma Cell Myeloma"

Instance: multiple-myeloma-riss-stage-II
InstanceOf: CancerStage
Description: "Example of Revised International Staging System (RISS) for myeloma staging."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = NCIT#C141392 "RISS Stage"
* valueCodeableConcept = NCIT#C141395 "RISS Stage II Plasma Cell Myeloma"

Instance: neuroblastoma-inss-stage-III
InstanceOf: CancerStage
Description: "Example of International Neuroblastoma Staging System (INSS) for neuroblastoma staging."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = SCT#409720004 "International neuroblastoma staging system stage (observable entity)"
* valueCodeableConcept = SCT#409725009 "International neuroblastoma staging system stage 3 (finding)"

Instance: neuroblastoma-inrgss-stage-MS
InstanceOf: CancerStage
Description: "Example of International Neuroblastoma Risk Group Staging System (INSS) for neuroblastoma staging."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = NCIT#C133427 "International Neuroblastoma Risk Group Staging System"
* valueCodeableConcept = NCIT#C133431 "INRG Stage MS"

Instance: wilms-tumor-stage-III
InstanceOf: CancerStage
Description: "Example of National Wilms Tumor Study Group stage for Wilms Tumor staging."
* insert StagingInstanceRuleSet
* category = ObsCat#laboratory
* code = SCT#405931009 "National Wilms Tumor Study Group Stage (observable entity)"
* valueCodeableConcept = SCT#405973001 "National Wilms Tumor Study Group Stage III (finding)"
* bodySite = SCT#18639004 "Left kidney structure (body structure)"

Instance: rhabdomyosarcoma-clinical-group-stage-IA
InstanceOf: CancerStage
Description: "Example of Rhabdomyosarcoma Clinical Group Stage for rhabdomyosarcoma staging."
* insert StagingInstanceRuleSet
* code = SCT#405916000 "Intergroup rhabdomyosarcoma study post-surgical clinical group (observable entity)"
* category = ObsCat#laboratory
* valueCodeableConcept = SCT#405957007 "Intergroup rhabdomyosarcoma study post-surgical clinical group IA: localized tumor, confined to site of origin, completely resected (finding)"


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/EX_TumorSize.fsh

// Add a breast cancer diagnosis to make the breast-related tumor size examples make sense
Instance: primary-cancer-condition-breast
InstanceOf: PrimaryCancerCondition
Description: "mCODE Example for Primary Cancer Condition (breast). The example shows post-coordinated coding using SNOMED CT, with separate codes for morphology and bodySite."
* clinicalStatus = ClinStatus#active "Active"
* verificationStatus = VerStatus#confirmed "Confirmed"
* category = CondCat#problem-list-item
* code = SCT#363346000 "Malignant neoplastic disease (disorder)" //SCT#109888004 "Lobular carcinoma in situ of breast (disorder)"
* extension[histologyMorphologyBehavior].valueCodeableConcept = SCT#77284006 "Lobular carcinoma in situ (morphologic abnormality)"
* bodySite = SCT#80248007 "Left breast structure (body structure)"
* subject = Reference(cancer-patient-eve-anyperson)
* onsetDateTime = "2019-04-01"
* asserter = Reference(us-core-practitioner-kyle-anydoc)
* stage.summary = SCT#1222806003 "American Joint Committee on Cancer stage IIIC (qualifier value)"
* stage.assessment = Reference(tnm-clinical-stage-group-3c)

Instance: tumor-size-pathology
InstanceOf: TumorSize
Description: "Example of a resource conforming to the tumor size profile."
* status = #final
* method = SCT#787377000 "Gross examination and sampling of tissue specimen (procedure)"
* subject = Reference(Patient/cancer-patient-eve-anyperson)
* focus = Reference(BodyStructure/tumor-lobular-carcinoma-left-breast)
* component[tumorLongestDimension].valueQuantity = 1.2 'cm' "cm"
* component[tumorOtherDimension].valueQuantity = 1.0 'cm' "cm"
* component[tumorOtherDimension].valueQuantity = 0.5 'cm' "cm"
* effectiveDateTime = "2019-05-01"
* performer = Reference(us-core-practitioner-owen-oncologist)

Instance: tumor-lobular-carcinoma-left-breast
InstanceOf: Tumor
Description: "Example of a resource conforming to the tumor profile."
* patient = Reference(Patient/cancer-patient-eve-anyperson)
// Resources conforming to this profile indicate that the tumor is still in the body.
// This implies it is being measured by imaging or physical exam. The identifier here is a hypothetical
// radiology identifier for a specific tumor.
* identifier[bodyStructureIdentifier].use = #usual
* identifier[bodyStructureIdentifier].type = http://hl7.org/fhir/resource-types#BodyStructure
* identifier[bodyStructureIdentifier].system = "http://radiology.hospital.example.org"
* identifier[bodyStructureIdentifier].value = "Tumor 1234"
* location = SCT#80248007 "Left breast structure (body structure)"
* extension[relatedCondition].valueReference = Reference(Condition/primary-cancer-condition-breast)


Instance: tumor-specimen-lobular-carcinoma-left-breast
InstanceOf: HumanSpecimen
Description: "Example of a tumor specimen, linked to [this Tumor](BodyStructure-tumor-lobular-carcinoma-left-breast.html) via `identifier`."
* subject = Reference(Patient/cancer-patient-eve-anyperson)
* status = #available "available"
* type = SPTY#TUMOR
* identifier[bodyStructureIdentifier].use = #usual
* identifier[bodyStructureIdentifier].type = http://hl7.org/fhir/resource-types#BodyStructure
* identifier.system = "http://radiology.hospital.example.org"
* identifier[bodyStructureIdentifier].value = "Tumor 1234"
* receivedTime = "2020-05-01"
* collection.bodySite = SCT#80248007 "Left breast structure (body structure)"

/*
Instance: multifocal-tumor-lobular-carcinoma
InstanceOf: MultifocalTumor
Usage: #example
Title: "multifocal-tumor-lobular-carcinoma"
Description: "Example of an Observation indicating a tumor is multifocal based on gross pathology."
* code = LNC#24419-4 "Pathology report gross observation"
* focus[+] = Reference(tumor-lobular-carcinoma-left-breast)
* focus[+] = Reference(tumor-specimen-lobular-carcinoma-left-breast)
* subject = Reference(Patient/cancer-patient-eve-anyperson)
* status = #final "final"
* effectiveDateTime = "2019-05-01"
*/

---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Bundle.fsh

Profile: MCODEPatientBundle
Parent: Bundle
Id: mcode-patient-bundle
Title: "mCODE Patient Bundle Profile"
Description: "A collection of data for an mCODE cancer patient."
* ^extension[FMM].valueInteger = 1
* type  = #collection
* entry 1..* MS
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the resource type"
* insert BundleSlice(cancerPatient, 1, 1, Cancer Patient, The Cancer Patient whose data is included in the bundle., CancerPatient)
* entry contains 
    mcodeObservations 0..* MS and
    mcodeConditions 0..* MS and
    mcodeMedicationAdministrations 0..* MS and
    mcodeMedicationRequests 0..* MS and
    mcodeDiagnosticReports 0..* MS and
    mcodeSpecimens 0..* MS and
    mcodeProcedures 0..* MS and
    mcodeBodyStructures 0..* MS
* entry[mcodeObservations] ^short = "FHIR Observation Resources, if they exist for the patient, including but not limited to: CancerDiseaseStatus, CancerStage (TNM and non-TNM), Comorbidities, ECOGPerformanceStatus, GenomicRegionStudied, GenomicVariant, KarnofskyPerformanceStatus, TumorMarkerTest, TumorSize, and USCoreVitalSigns."
* entry[mcodeObservations].resource only Observation
* entry[mcodeConditions] ^short = "FHIR Condition Resources, if they exist for the patient, including but not limited to: PrimaryCancerCondition, SecondaryCancerCondition, and HistoryOfMetastaticCancer."
* entry[mcodeConditions].resource only Condition
* entry[mcodeMedicationAdministrations] ^short = "FHIR Medication Administration Resources, if they exist for the patient, including but not limited to: CancerRelatedMedicationAdministration."
* entry[mcodeMedicationAdministrations].resource only MedicationAdministration
* entry[mcodeMedicationRequests] ^short = "FHIR Medication Request Resources, if they exist for the patient, including but not limited to: CancerRelatedMedicationRequest."
* entry[mcodeMedicationRequests].resource only MedicationRequest
* entry[mcodeDiagnosticReports] ^short = "FHIR Diagnostic Report Resources, if they exist for the patient, including but not limited to: GenomicsReport."
* entry[mcodeDiagnosticReports].resource only DiagnosticReport
* entry[mcodeSpecimens] ^short = "FHIR Specimen Resources, if they exist for the patient, including but not limited to: HumanSpecimen."
* entry[mcodeSpecimens].resource only Specimen
* entry[mcodeProcedures] ^short = "FHIR Procedure Resources, if they exist for the patient, including but not limited to: CancerRelatedSurgicalProcedure and RadiotherapyCourseSummary."
* entry[mcodeProcedures].resource only Procedure
* entry[mcodeBodyStructures] ^short = "FHIR BodyStructure Resources, if they exist for the patient, including but not limited to: RadiotherapyVolume and Tumor."
* entry[mcodeBodyStructures].resource only BodyStructure
* timestamp and entry and entry.resource MS



---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_ComorbidCondition.fsh

Profile: Comorbidities
Parent: USCoreObservationSimple
Id: mcode-comorbidities
Title: "Comorbidities Profile"
Description: "General structure for capturing comorbid conditions with respect to a primary ('index') condition. The user can use this profile in three ways: (1) free-form, listing any conditions they wish to highlight as significant comorbidities, (2) following a formal paradigm such as the Charlson Comorbidity Index or the NCI Comorbidity Index, or (3) use disease categories defined for registry reporting purposes, such as those defined by Center for International Blood and Marrow Transplant Research (CIBMTR)."
* ^extension[FMM].valueInteger = 1
* code = SCT#398192003 // Co-morbid conditions (finding) 
* method ^short = "Comorbidity framework used."
* method ^definition = "The formal methodology used, such as Charlson, NCI, Elixhauser, or ACE-27. The method must be specified if a comorbidity index is specified, otherwise the index cannot be correctly interpreted."
* focus only Reference(PrimaryCancerCondition)
* focus ^short = "The Index Condition"
* focus ^definition = "Comorbid conditions are typically defined with respect to a specific 'index' condition. For example, the US Centers for Disease Control (CDC) has provided a list of comorbid conditions important to COVID-19. In this case, the focus would be COVID-19 and the comorbid condition categories would be those specified by CDC, namely obesity, renal disease, respiratory disease, etc."
* subject only Reference(CancerPatient)
* subject ^definition = "The patient whose comorbidities are recorded."
// We cannot use hasMember because that element does not allow Reference(Condition) or CodeableConcept as a type
// We cannot use component because that element does not allow References of any type
// Therefore, we need extensions to record the comorbid conditions
* extension contains RelatedCondition named comorbidConditionPresent 0..*
* extension contains RelatedConditionAbsent named comorbidConditionAbsent 0..*
// Indicate MS and NotUsed elements
* extension and extension[comorbidConditionPresent] and extension[comorbidConditionAbsent] and status and code and subject and focus and effective[x] MS
* value[x] only Quantity or integer
* value[x] ^definition = "Comorbidity score or risk index"
* insert NotUsed(bodySite)
* insert NotUsed(specimen)
* insert NotUsed(device)
/* 
* Design options considered and rejected
* 1. Why not use component?
*    Component does not support references, and we would like to 
*    give users the option of either a condition code or Reference(Condition)
* 2. Why not use hasMember?
*    hasMember is a Reference, but cannot reference Conditions 
*    (it is limited to Reference(Observation | QuestionnaireResponse | MolecularSequence))
*/
* insert NotUsed(hasMember)
* insert NotUsed(component)

/*
Profile: ComorbiditiesResponse
Parent: USCoreQuestionnaireResponseProfile
Id: mcode-comorbidities-response
Title: "Comorbidities Questionnaire Response Profile"
Description: "General structure for capturing comorbid conditions with respect to a primary ('index') condition. The specific set of comorbidities present and absent appear in results."
* ^extension[FMM].valueInteger = 1
* questionnaire = Canonical(mcode-comorbidities-questionnaire)
* subject only Reference(CancerPatient)
* item.answer.value[x] only Coding or Reference(Condition) 


Instance: mcode-comorbidities-questionnaire
InstanceOf: SDCBaseQuestionnaire
Title: "Comorbidities Questionnaire Profile"
Description: "Questionnaire concerning a cancer patient's comorbidities."
* name = "ComorbidityQuestionnaire"
* subjectType = #Patient
* url = "http://hl7.org/fhir/us/mcode/Questionnaire/mcode-comorbidities-questionnaire"
* code = SCT#398192003 "Co-morbid conditions (finding)"
* status = #active
* item[0]
  * linkId = "indexConditionReference"
  * text = "What is the primary index condition that these comorbidities relate to?"
  * required = true
  * repeats = false
  * type = #reference
* item[1]
  * linkId = "comorbidConditionsPresent"
  * text = "List comorbid conditions present"
  * required = false
  * repeats = true
  * type = #group
  * item[0]
    * linkId = "comorbidConditionPresentReference"
    * text = "Reference to comorbid condition present"
    * required = false
    * repeats = true
    * type = #reference
  * item[1]
    * linkId = "comorbidConditionPresentCoding"
    * text = "Code for comorbid condition present"
    * required = false
    * repeats = true
    * type = #open-choice
* item[2]
  * linkId = "comorbidConditionsAbsent"
  * text = "Codes of comorbid conditions explicitly NOT present"
  * required = false
  * repeats = true
  * type = #open-choice
   
*/

---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Condition.fsh

RuleSet: CancerConditionCommonRules
* ^extension[FMM].valueInteger = 4
* extension contains
    HistologyMorphologyBehavior named histologyMorphologyBehavior 0..1 MS
* insert BodySiteQualifierAndLaterality(bodySite)
* bodySite from CancerBodyLocationVS (extensible)
* extension and bodySite and bodySite.extension[locationQualifier] and bodySite.extension[lateralityQualifier] MS

Profile: PrimaryCancerCondition
Id: mcode-primary-cancer-condition
Title: "Primary Cancer Condition Profile"
Parent: USCoreCondition
Description: "Records the primary cancer condition, the original or first neoplasm in the body (Definition from: [NCI Dictionary of Cancer Terms](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/primary-tumor)). Cancers that are not clearly secondary (i.e., of uncertain origin or behavior) should be documented as primary."
* insert CancerConditionCommonRules
* code from PrimaryCancerDisorderVS (extensible)
* stage.assessment only Reference(CancerStage)
* stage and stage.assessment MS
* stage.summary ^short = "Stage at time of last staging."
* stage.summary ^definition = "Most recent overall cancer stage, such as stage group IIA in TNM staging. More detailed staging information (such as the individual T, N, and M categories) SHOULD be captured in a separate Observation resource, referenced by stage.assessment, conforming to CancerStage profile."
* stage.type ^short = "The type of stage Staging system or method used."
* stage.type ^definition = "The type of stage reported in stage.summary, or the staging method used to arrive at the stage.summary value."
* stage.type from CancerStagingMethodVS (extensible)
* evidence.code from CancerDiseaseStatusEvidenceTypeVS (required)
* evidence.code ^orderMeaning = "If more than one code or Reference is present, it is interpreted as the the physician's declaration of how the cancer was diagnosed, with the most invasive method first (e.g., autopsy/histopathology, cytology, radiology, physicial exam, etc.)"


Profile: SecondaryCancerCondition
Parent: USCoreCondition
Id: mcode-secondary-cancer-condition
Title: "Secondary Cancer Condition Profile"
Description: "Records the history of secondary neoplasms, including location(s) and the date of onset of metastases. A secondary cancer results from the spread (metastasization) of cancer from its original site (Definition from: NCI Dictionary of Cancer Terms)."
* insert CancerConditionCommonRules
* extension contains condition-related named relatedPrimaryCancerCondition 0..1 MS
* extension[relatedPrimaryCancerCondition].value[x] only Reference(PrimaryCancerCondition)
* extension[relatedPrimaryCancerCondition] ^short = "Related Primary Cancer Condition"
* extension[relatedPrimaryCancerCondition] ^definition = "A reference to the primary cancer condition that provides context for this resource."
* code from SecondaryCancerDisorderVS (extensible)
* insert NotUsed(stage)
* extension and extension[relatedPrimaryCancerCondition] MS
* evidence.code from CancerDiseaseStatusEvidenceTypeVS (required)
* evidence.code ^orderMeaning = "If more than one code or Reference is present, it is interpreted as the the physician's declaration of how the cancer was diagnosed, with the most invasive method first (e.g., autopsy/histopathology, cytology, radiology, physicial exam, etc.)"


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_DiseaseStatus.fsh

Profile:  CancerDiseaseStatus
Parent:   Observation
Id: mcode-cancer-disease-status
Title:    "Cancer Disease Status Profile"
Description:    "A clinician's qualitative judgment on the current trend of the cancer, e.g., whether it is stable, worsening (progressing), or improving (responding). The judgment may be based a single type or multiple kinds of evidence, such as imaging data, assessment of symptoms, tumor markers, laboratory data, etc."
* ^extension[FMM].valueInteger = 3
* extension contains
    CancerDiseaseStatusEvidenceType named evidenceType 0..*
* insert NotUsed(specimen)
* insert NotUsed(device)
* insert NotUsed(referenceRange)
* insert NotUsed(hasMember)
* insert NotUsed(component)
* subject 1..1
* code = LNC#97509-4 // "Cancer Disease Progression"
* subject only Reference(CancerPatient)
* subject ^definition = "Patient whose disease status is recorded."
* focus only Reference(USCoreCondition or Tumor or RadiotherapyVolume)  // Added RadiotherapyVolume per Saul's request in Sept 21, 2022 email
* effective[x] only dateTime
* performer only Reference(USCorePractitioner)
* value[x] only CodeableConcept
* value[x] from ConditionStatusTrendVS (preferred)
* value[x] ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(ConditionStatusTrendMaxVS)
// ALL MUST SUPPORTS
* status and code and subject and effective[x] and value[x] and focus and extension[evidenceType]  MS
//* dataAbsentReason MS


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Extensions.fsh

Extension: RelatedCondition
Id: mcode-related-condition
Title:  "Related Condition Extension"
Description: "A condition that has a relationship with the resource."
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(Observation)
* insert ExtensionContext(DiagnosticReport)
* insert ExtensionContext(BodyStructure)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept or Reference(Condition) 
* value[x] 1..1

Extension: RelatedConditionAbsent
Id: mcode-related-condition-absent
Title:  "Related Condition Absent Extension"
Description: "A condition that is NOT present, related to the resource."
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(Observation)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept
* value[x] 1..1

Extension: CancerDiseaseStatusEvidenceType
Id: mcode-cancer-disease-status-evidence-type
Title: "Cancer Disease Status Evidence Type Extension"
Description: "Categorization of the kind of evidence contributing to a clinical judgment on cancer disease progression."
* insert ExtensionContext(Observation)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept
* value[x] from CancerDiseaseStatusEvidenceTypeVS (required)
* value[x] 1..1

Extension: HistologyMorphologyBehavior
Id: mcode-histology-morphology-behavior
Title: "Histology-Morphology-Behavior Extension"
Description: "An extension describing the morphologic and behavioral characteristics of the cancer."
* insert ExtensionContext(Condition)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept
* value[x] from HistologyMorphologyBehaviorVS (extensible)
* value[x] 1..1

Extension: BodyLocationQualifier
Id: mcode-body-location-qualifier
Title: "Body Location Qualifier Extension"
Description: "Qualifier to refine an body location. These include qualifiers for relative location, directionality, number, and plane, and exclude qualifiers for laterality."
// context removed as per FHIR-32243 for STU2 // re-added as part of STU4 because radiation therapy IG was created
* insert ExtensionContext(Specimen.collection.bodySite)
* insert ExtensionContext(Procedure.bodySite)
* insert ExtensionContext(Condition.bodySite)
* insert ExtensionContext(Observation.bodySite)
* insert ExtensionContext(ServiceRequest.bodySite)
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(CodeableConcept)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept
* value[x] from BodyLocationQualifierVS (required)
* value[x] 1..1

Extension: LateralityQualifier
Id: mcode-laterality-qualifier
Title: "Laterality Qualifier Extension"
Description: "Qualifier to specify laterality."
// context removed as per FHIR-32243 for STU2 // re-added as part of STU4 because radiation therapy IG was created
* insert ExtensionContext(Specimen.collection.bodySite)
* insert ExtensionContext(Procedure.bodySite)
* insert ExtensionContext(Condition.bodySite)
* insert ExtensionContext(Observation.bodySite)
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(CodeableConcept)
* insert ExtensionContext(ServiceRequest.bodySite)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept
* value[x] from LateralityQualifierVS (required)
* value[x] 1..1

Extension: TreatmentTerminationReason
Id: mcode-treatment-termination-reason
Title: "Treatment Termination Reason Extension (deprecated)"
Description: "A code explaining the unplanned or premature termination, or normal completion, of a plan of treatment, course of medication, or research study.
This extension is deprecated since it is redundant with the statusReason field."
// context removed as per FHIR-32243 for STU2 // re-added as part of STU4 because radiation therapy IG was created
//* insert ExtensionContext(MedicationRequest) - not used in this profile anymore
* insert ExtensionContext(Procedure)       
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* ^extension[FMM].valueInteger = 3
* value[x] only CodeableConcept
* value[x] from TreatmentTerminationReasonVS (extensible)
* value[x] 1..1
* ^status = #retired

Extension: ProcedureIntent
Id: mcode-procedure-intent
Title: "Procedure Intent Extension"
Description: "The purpose of a treatment, medication, or procedure."
// context removed as per FHIR-32243 for STU2 // re-added as part of STU4 because radiation therapy IG was created
* insert ExtensionContext(MedicationRequest)
* insert ExtensionContext(MedicationAdministration)
* insert ExtensionContext(Procedure)         
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(ServiceRequest)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept
* value[x] from ProcedureIntentVS (extensible)
* value[x] 1..1

Extension: NormalizationBasis
Id: mcode-normalization-basis
Title:  "Normalization Basis Extension"
Description: "The method (e.g., body weight, body surface area, flat dose, age) used to normalize the medication dosage."
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(MedicationRequest)
* insert ExtensionContext(MedicationAdministration)
* ^extension[FMM].valueInteger = 4
* value[x] only CodeableConcept
* value[x] from NormalizationBasisVS (required)
* value[x] 1..1


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Genomics.fsh

Profile:    GenomicRegionStudied
Parent:     RegionStudied
Id:         mcode-genomic-region-studied
Title:      "Genomic Region Studied Profile"
Description:    "A subset of genes or genomic regions of interest in a targeted resequencing study."
* ^extension[FMM].valueInteger = 1
* subject 1..1 // subject is required in US Core Laboratory Result (although I am not quite sure this represents a laboratory result, since it isn't strictly a result. It is more like what we are observing, additional information behind Observation.code.)
* value[x] ^definition = "Not used in this profile."
* category[labCategory].coding 1..1  // To prevent the message "The repeating element has a pattern. The pattern will apply to all the repeats (this has not been clear to all users)"
* category[labCategory] = ObsCat#laboratory
* subject only Reference(CancerPatient)
* component[gene-mutations] and component[gene-mutations].code and component[gene-mutations].value[x] MS
* component[region-description] and component[region-description].code and component[region-description].value[x] MS
* component[gene-studied] and component[gene-studied].code and component[gene-studied].value[x] MS
* component[ranges-examined] and component[ranges-examined].code and component[ranges-examined].value[x] MS	
* component[coordinate-system] and component[coordinate-system].code and component[coordinate-system].value[x] MS	
* component[genomic-ref-seq] and component[genomic-ref-seq].code and component[genomic-ref-seq].value[x] MS
* status and category and code and subject and effective[x] and effectiveDateTime and dataAbsentReason and component MS

Profile: GenomicVariant
Parent: Variant
Id: mcode-genomic-variant
Title:      "Genomic Variant Profile"
Description:    "Details about a set of changes in the tested sample compared to a reference sequence. The term variant can be used to describe an alteration that may be benign, pathogenic, or of unknown significance. The term variant is increasingly being used in place of the term mutation. Variants can be computed relative to reference sequence assembly from which it was identified."
* ^extension[FMM].valueInteger = 1
* insert NotUsed(referenceRange)
* insert NotUsed(hasMember)
* subject only Reference(CancerPatient)
* specimen only Reference(HumanSpecimen)
* value[x] ^slicing.rules = #closed
* category[labCategory].coding 1..1  // To prevent the message "The repeating element has a pattern. The pattern will apply to all the repeats (this has not been clear to all users)"
* category[labCategory] = ObsCat#laboratory
* component[gene-studied] and component[gene-studied].code and component[gene-studied].value[x] MS
* component[variation-code] and component[variation-code].code and component[variation-code].value[x] MS
* component[genomic-hgvs] and component[genomic-hgvs].code and component[genomic-hgvs].value[x] MS
* component[coding-change-type] and component[coding-change-type].code and component[coding-change-type].value[x] MS
* component[molecular-consequence] and component[molecular-consequence].code and component[molecular-consequence].value[x] MS
* component[genomic-source-class] and component[genomic-source-class].code and component[genomic-source-class].value[x] MS
* component[protein-hgvs] and component[protein-hgvs].code and component[protein-hgvs].value[x] MS
* component[amino-acid-change-type] and component[amino-acid-change-type].code and component[amino-acid-change-type].value[x] MS
* component[copy-number] and component[copy-number].code and component[copy-number].value[x] MS
* component[sample-allelic-frequency] and component[sample-allelic-frequency].code and component[sample-allelic-frequency].value[x] MS
* component[allelic-state] and component[allelic-state].code and component[allelic-state].value[x] MS
* component[cytogenomic-nomenclature] and component[cytogenomic-nomenclature].code and component[cytogenomic-nomenclature].value[x] MS
* component[cytogenetic-location] and component[cytogenetic-location].code and component[cytogenetic-location].value[x] MS
* status and category and code and subject and effective[x] and effectiveDateTime and value[x] and dataAbsentReason and method and specimen and component MS

Profile:     GenomicsReport
Parent:      http://hl7.org/fhir/uv/genomics-reporting/StructureDefinition/genomics-report
Id:          mcode-genomics-report
Title:      "Genomics Report Profile"
Description:    "Genomic analysis summary report. The report may include one or more tests, with two distinct test types. The first type is a targeted mutation test, where a specific mutation on a specific gene is tested for. The result is either positive or negative for that mutation. The second type is a more general test for variants. This type of test returns the identity of variants found in a certain region of the genome."
* ^extension[FMM].valueInteger = 1
* category[Genetics].coding 1..1  // To prevent the message "The repeating element has a pattern. The pattern will apply to all the repeats (this has not been clear to all users)"
* subject only Reference(CancerPatient)
* specimen only Reference(HumanSpecimen)
* result[variant] only Reference(GenomicVariant)
* result[region-studied] only Reference(GenomicRegionStudied)
* result[region-studied] and result[variant] MS
* status and category and code and subject and effective[x] and effectiveDateTime and issued and performer and result and specimen MS

Profile: TumorMarkerTest
Parent:  USCoreObservationLab
Id:      mcode-tumor-marker-test
Title:   "Tumor Marker Test Profile"
Description: "The result of a tumor marker test. Tumor marker tests are generally used to guide cancer treatment decisions and monitor treatment, as well as to predict the chance of recovery and cancer recurrence."
* ^extension[FMM].valueInteger = 4
* subject 1..1
* value[x] 1..1
* code from TumorMarkerTestVS (extensible)
* subject only Reference(CancerPatient)
* subject ^definition = "Patient whose test result is recorded."
* effective[x] only dateTime or Period
* value[x] only Quantity or Ratio or string or CodeableConcept
// Already MS in US Core Obs Lab: status, category, code, subject, effective[x], value[x], dataAbsentReason
* specimen only Reference(HumanSpecimen)
* specimen MS  // is not MS in US Core 4.0.0 and 5.0.1 
// RelatedCondition added 11/14/2022, see https://chat.fhir.org/#narrow/stream/229074-CodeX/topic/Reference.20between.20tumor.20characteristics.20and.20cancer.20diagnosis
* extension contains RelatedCondition named relatedCondition 0..* MS 
* extension[relatedCondition] ^short = "Condition associated with this test."
* extension[relatedCondition] ^definition = "Associates the tumor marker test with a condition, if one exists. Condition can be given by a reference or a code. In the case of a screening test such as prostate-specific antigen (PSA), there may be no existing condition to reference."

Profile: HumanSpecimen
Parent: USCoreSpecimen
Id: mcode-human-specimen
Title:  "Human Specimen Profile"
Description:  "A specimen taken from a Patient for the purpose of oncology-related testing. The profile includes extensions to specify a more precise body site and an identifier of source body structure at that site (for example, a tumor identifier)."
* ^extension[FMM].valueInteger = 1
* type from HumanSpecimenTypeVS (extensible)
* subject only Reference(CancerPatient)
* subject ^definition = "The patient associated with this specimen."
* insert BodySiteQualifierAndLaterality(collection.bodySite)
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slicing by identifier.type"
* identifier contains bodyStructureIdentifier 0..*
* identifier[bodyStructureIdentifier] only BodyStructureIdentifier
* identifier[bodyStructureIdentifier] ^short = "An identifier associating the specimen with a identified body structure, such as a tumor with a tumor identifier."
// FHIR-32352
// * identifier[bodyStructureIdentifier] ^definition = "To associate this with a specific BodyStructure conforming to the Tumor profile, add an identifier with a value that matches a persistent identifier from `BodyStructure.identifier.value` that is unique in the context of the Patient."
* subject and status and type and collection and collection.bodySite and collection.bodySite.extension and collection.bodySite.extension[locationQualifier] and collection.bodySite.extension[lateralityQualifier] MS
* identifier and identifier[bodyStructureIdentifier] and identifier[bodyStructureIdentifier].type and identifier[bodyStructureIdentifier].value MS



---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Histology.fsh

Profile: TumorMorphology
Parent: USCoreObservationSimple
Id: mcode-tumor-morphology
Title: "Tumor Morphology Report"
Description: "Tumor morphology can include information on the type of cell (type), the malignant potential of the tumor (behavior), and the degree of differentiation (grade). For some cancers, the type and behavior are described in the ICD-O-3 code."
* ^extension[FMM].valueInteger = 4
* specimen only Reference(HumanSpecimen)
* specimen MS
* code = LNC#77753-2  // Tumor morphology panel Cancer
* subject only Reference(CancerPatient)
* subject ^definition = "Patient whose test result is recorded."
* subject 1..1
* effective[x] only dateTime or Period
* extension contains RelatedCondition named relatedCondition 0..* MS 
* extension[relatedCondition] ^short = "Condition associated with this test."
* extension[relatedCondition] ^definition = "Associates the tumor marker test with a condition, if one exists. Condition can be given by a reference or a code. In the case of a screening test such as prostate-specific antigen (PSA), there may be no existing condition to reference."
* hasMember only Reference(HistologicBehaviorAndType or HistologicGrade)


Profile: HistologicBehaviorAndType
Parent: USCoreObservationLab
Id: mcode-histologic-behavior-and-type
Title: "Histologic Behavior and Type"
Description: "Histologic behavior and type determined from examination of tumor sample. ICD-O-3 morphology codes are referenced in the logical definition but not expanded in the value set for intellectual property reasons. For primary cancers, the ICD-O-3 behavior suffix should be /1, /2, or /3. For secondary cancers, the ICD-O-3 behavior suffix should be /6. "
* ^extension[FMM].valueInteger = 4
* specimen only Reference(HumanSpecimen)
* specimen 0..1 MS
* code = LNC#31206-6 // Behavior ICD-O-3 Cancer
* value[x] only CodeableConcept
* value[x] 1..1
* value[x] from HistologicBehaviorAndTypeVS (extensible)
* subject only Reference(CancerPatient)
* subject ^definition = "Patient whose test result is recorded."
* subject 1..1
* effective[x] only dateTime or Period
* extension contains RelatedCondition named relatedCondition 0..* MS 
* extension[relatedCondition] ^short = "Condition associated with this test."
* extension[relatedCondition] ^definition = "Associates the tumor marker test with a condition, if one exists. Condition can be given by a reference or a code. In the case of a screening test such as prostate-specific antigen (PSA), there may be no existing condition to reference."


Profile: HistologicGrade
Parent: USCoreObservationLab
Id: mcode-histologic-grade
Title: "Histologic Grade"
Description: "Histologic grade determined from examination of tumor sample. The grade system should be captured using the method data element."
* ^extension[FMM].valueInteger = 4
* specimen only Reference(HumanSpecimen)
* specimen 0..1 MS  // is not MS in US Core 4.0.0 and 5.0.1 
* code = NCIT#C18000 // Histologic Grade
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from HistologicGradeVS (extensible)
* subject only Reference(CancerPatient)
* subject ^definition = "Patient whose test result is recorded."
* subject 1..1
* effective[x] only dateTime or Period
* extension contains RelatedCondition named relatedCondition 0..* MS 
* extension[relatedCondition] ^short = "Condition associated with this test."
* extension[relatedCondition] ^definition = "Associates the histologic grade test with a condition, if one exists. Condition can be given by a reference or a code."
* method from HistologicGradingSystemVS (extensible)
* method MS

// Already MS in US Core Obs Lab: status, category, code, subject, effective[x], value[x], dataAbsentReason
// RelatedCondition added 11/14/2022, see https://chat.fhir.org/#narrow/stream/229074-CodeX/topic/Reference.20between.20tumor.20characteristics.20and.20cancer.20diagnosis





---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_HistoryOfMetastaticCancer.fsh

// This profile requires an exception from the CGP WG for use of Observation
// In USCore STU6, it could be based on the SimpleObservation profile, but that does not exist in STU5
Profile: HistoryOfMetastaticCancer
Parent: USCoreObservationSimple
Id: mcode-history-of-metastatic-cancer
Title: "History of Metastatic Cancer"
Description: "Records the existence of a past episode of metastatic cancer, for the purpose of long term management and tracking."
* code from HistoryOfMetastaticMalignantNeoplasmVS (extensible)
* value[x] only boolean // If false indicates no history of metastatic cancer
* value[x] 0..1 MS ?!  // modifies meaning of the observation
* value[x] ^isModifierReason = "When value is false, the resource semantics are reversed and the resource represents an assertion of NO history of metastatic cancer (either absolutely, or of the type indicated by Observation.code)"
* extension contains RelatedCondition named relatedCondition 0..*
// Cannot have a default value; Rule sdf-21: 'Default values can only be specified on specializations' 
//* value[x] ^defaultValueBoolean = true   // If absent, value is true.  

ValueSet: HistoryOfMetastaticMalignantNeoplasmVS
Id: mcode-history-of-metastatic-malignant-neoplasm-vs
Title: "History of Metastatic Malignant Neoplasm Value Set"
Description: "Values defining history of metastatic cancer."
* insert SNOMEDCopyrightForVS
* include codes from system SCT where concept is-a #1287652008 "History of metastatic malignant neoplasm (situation)"


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Medications.fsh

Profile:  CancerRelatedMedicationRequest
Parent:   USCoreMedicationRequest
Id: mcode-cancer-related-medication-request
Title:    "Cancer-Related Medication Request Profile"
Description:  "A record of a medication prescription or consumption associated with cancer treatment. The medication may reported by the prescriber, prescribing organization, or patient. It does not have to be directly observed."
* insert MedicationResourcesRS
* requester only Reference(USCorePractitioner or USCoreOrganization or CancerPatient)
* extension contains NormalizationBasis named normalizationBasis 0..1


Profile:  CancerRelatedMedicationAdministration
Parent:   MedicationAdministration
Id: mcode-cancer-related-medication-administration
Title:    "Cancer-Related Medication Administration Profile"
Description:    "An episode of medication administration for a patient whose condition is related to a primary or secondary cancer condition. In the context of chemotherapy drugs, the medication administration in most cases is performed and documented by the provider."
* insert MedicationResourcesRS
* medication[x] from http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4 (extensible) // as per USCore 4.0.0
// Model the Must Supports on US Core MedicationRequest
* status and medication[x] and subject and effective[x] MS
* extension contains NormalizationBasis named normalizationBasis 0..1


RuleSet: MedicationResourcesRS
* ^extension[FMM].valueInteger = 3
* obeys mcode-reason-required
* obeys termination-reason-code-invariant 
* obeys termination-reason-invariant 
* subject only Reference(CancerPatient)
* subject ^definition = "The patient receiving the medication."
* extension contains
    ProcedureIntent named treatmentIntent 0..1 MS
* statusReason from TreatmentTerminationReasonVS (preferred)
* reasonCode from CancerDisorderVS (extensible)
* reasonReference only Reference(USCoreCondition) // only for cancer-related reasons
* reasonCode and reasonReference and statusReason and extension and extension[treatmentIntent] MS

Invariant:  mcode-reason-required
Description: "One of reasonCode or reasonReference SHALL be present"
Expression: "reasonCode.exists() or reasonReference.exists()"
Severity:   #warning    // FHIR-32387 error-->warning


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Patient.fsh

Profile: CancerPatient
Parent: USCorePatient
Id: mcode-cancer-patient
Title: "Cancer Patient Profile"
Description: "A patient who has been diagnosed with or is receiving medical treatment for a malignant growth or tumor. The only difference between CancerPatient and [US Core Patient](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html) is that Patient.deceased is a [must-support](https://www.hl7.org/fhir/profiling.html#mustsupport) element in mCODE. Must-support is an instruction to implementers of FHIR clients and servers, rather than a constraint on data structure. Any Patient resource complying with US Core Patient Profile will also comply with CancerPatient."
* ^extension[FMM].valueInteger = 5
* deceased[x] MS
* extension[us-core-birthsex] MS
* . MS


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_PerformanceStatus.fsh

RuleSet: PerformanceStatusCommonRules
* ^extension[FMM].valueInteger = 4
* subject 1..1
* insert NotUsed(bodySite)
* insert NotUsed(specimen)
* insert NotUsed(device)
* insert NotUsed(hasMember)
* insert NotUsed(component)
* basedOn only Reference (ServiceRequest or CarePlan)
* partOf only Reference (Procedure)
* subject only Reference(CancerPatient)
* subject ^definition = "Patient whose performance status is recorded."
* effective[x] only dateTime or Period
// EGOG and Karnofsky have exactly the same set of MS
* status and code and subject and effective[x] and value[x] and interpretation MS

Profile:    KarnofskyPerformanceStatus
Parent:     USCoreClinicalResult
Id: mcode-karnofsky-performance-status
Title:      "Karnofsky Performance Status Profile"
Description:    "The Karnofsky Performance Status (KPS) is a tool used to measure a patient's functional status. It can be used to compare the effectiveness of different therapies and to help assess the prognosis of certain patients, such as those with certain cancers. The KPS score ranges from 0 to 100 in intervals of 10. Higher scores are associated with better functional status, with 100 representing no symptoms or evidence of disease, and 0 representing death."
* insert PerformanceStatusCommonRules
* code = LNC#89243-0 //"Karnofsky Performance Status score"
* value[x] only integer
* interpretation from http://loinc.org/vs/LL4986-7 (required)


Profile:    ECOGPerformanceStatus
Parent:     USCoreClinicalResult
Id: mcode-ecog-performance-status
Title:      "ECOG Performance Status Profile"
Description:    "The Eastern Cooperative Oncology Group (ECOG) Performance Status represents the patient's functional status and is used to determine their ability to tolerate therapies in serious illness, specifically for chemotherapy. (Definition from: [LOINC](https://loinc.org/89262-0/))"
* insert PerformanceStatusCommonRules
* code = LNC#89247-1 //"ECOG Performance Status score"
* value[x] only integer
* interpretation from http://loinc.org/vs/LL529-9 (required)


Profile: LanskyPlayPerformanceStatus
Parent:  USCoreClinicalResult
Id: mcode-lansky-play-performance-status
Title:  "Lansky Play Performance Status Profile"
Description:  "The Lansky Play-Performance Status for children is a parent-rated instrument which records usual play activity as the index of performance. It is similar to the Karnofsky Performance Scale for adults (Definition from: [NCI Thesaurus](https://ncithesaurus.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus&code=C38144&ns=ncit))."
* insert PerformanceStatusCommonRules
* code = NCIT#C38144 // Lansky Play-Performance Status
* value[x] only integer 
* interpretation from LanskyPlayPerformanceStatusVS (extensible)


Profile: DeauvilleScale
Id: mcode-deauville-scale
Parent: USCoreClinicalResult
Title: "Deauville Scale Profile"
Description: "Profile for Deauville Scale. A 5 point scale devised to assess the response to treatment of Hodgkin and aggressive Non-Hodgkin lymphoma."
* code = SCT#708895006 "Deauville five point scale (assessment scale)"
* basedOn only Reference(CarePlan or MedicationRequest or ServiceRequest)
* partOf only Reference(MedicationAdministration or MedicationDispense or MedicationStatement or Procedure or ImagingStudy)
* performer only Reference(Practitioner or PractitionerRole or Organization or CareTeam)
* subject only Reference(CancerPatient)
* subject ^definition = "The patient associated with the Deauville Score."
* value[x] only integer 
* focus only Reference(PrimaryCancerCondition)
* focus ^short = "The cancer condition associated with the Deauville Score"
* focus ^definition = "Deauville Score is associated with a particular primary cancer condition. Observation.focus is used to point back to that condition."
* status and code and subject and effective[x] and value[x] and focus and interpretation MS
* insert NotUsed (specimen)
* interpretation from DeauvilleScaleVS (extensible)

Profile: BodySurfaceArea
Parent: USCoreVitalSignsProfile
Id: mcode-body-surface-area
Title: "Body Surface Area"
Description: "Entire body surface area, either measured or calculated."
* code = LNC#8277-6 // Body Surface Area
* value[x] only Quantity
//* valueQuantity = UCUM#m2 <-- THIS LINE IS CAUSING THE PUBLISHER TO CRASH 6/30/2023 VERSION 1.3.20






---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Radiotherapy.fsh


// -------------- Identifier Display Name Field ---------------
RuleSet: IdentifierDisplayName  // FHIR-32239
* identifier 0..* MS
* identifier ^definition = "Display name and technical identifiers (e.g., the Conceptual Volume UID used in DICOM.)"
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "use"
* identifier ^slicing.rules = #open
* identifier contains
    displayName 0..1 MS
* identifier[displayName].use = #usual
* identifier[displayName].value 1..1 MS

Invariant:  termination-reason-invariant 
Description: "Certain statusReason values are allowed only when status is stopped" 
Severity: #error
* expression =  "statusReason.exists() and statusReason.coding.exists(
      system = 'http://snomed.info/sct' and (code = '182992009' or code = '266721009' or code = '407563006' or code = '160932005' or
 code = '105480006' or code = '184081006' or code = '309846006' or code = '399307001' or  code = '419620001' or code = '7058009' or code = '443729008' or code = '77386006')) implies status = 'stopped'"

Invariant:  termination-reason-code-invariant 
Description: "When status is stopped, only certain statusReason values are allowed"
Severity: #error
* expression = "status = 'stopped' and statusReason.exists() and statusReason.coding.exists() implies statusReason.coding.exists(system = 'http://snomed.info/sct' and (code = '182992009' or code = '266721009' or code = '407563006' or code = '160932005' or code = '105480006' or code = '184081006' or code = '309846006' or code = '399307001' or code = '419620001' or code = '7058009' or code = '443729008' or code = '77386006'))"

Profile:  RadiotherapyCourseSummary
Parent:   USCoreProcedure  // considered one procedure with multiple parts
Id:       mcode-radiotherapy-course-summary
Title:    "Radiotherapy Course Summary Profile"
Description: "A summary of a course of radiotherapy delivered to a patient. It records the treatment intent, termination reason, modalities, techniques, number of sessions, and doses delivered to one or more body volumes. Whether the course has been fully delivered or stopped is indicated in the status element."
* ^extension[FMM].valueInteger = 3
* obeys termination-reason-code-invariant 
* obeys termination-reason-invariant 
* performed[x] only Period
* subject only Reference(CancerPatient)
* subject ^definition = "The patient on whom the procedure was performed."
* extension MS
// Summary-specific content
* code = SCT#1217123003 // "Radiotherapy course of treatment (regime/therapy)"
* extension contains
    ProcedureIntent named treatmentIntent 0..1 MS and
    TreatmentTerminationReason named terminationReason 0..1 and
    RadiotherapyModalityAndTechnique named modalityAndTechnique 0..* MS and
    RadiotherapySessions named actualNumberOfSessions 0..1 MS and
    RadiotherapyDoseDeliveredToVolume named doseDeliveredToVolume 0..* MS
* bodySite from RadiotherapyTreatmentLocationVS (extensible)
* bodySite ^short = "All body structure(s) treated"
* bodySite ^definition = "Coded body structure(s) treated in this course of radiotherapy. These codes represent general locations. For additional detail, refer to the BodyStructures references in the doseDeliveredToVolume extension."
* insert BodySiteQualifierAndLaterality(bodySite)
* reasonCode from CancerDisorderVS (extensible)
* statusReason MS
* statusReason from TreatmentTerminationReasonVS (preferred)
* reasonReference only Reference(USCoreCondition)
* reasonCode and reasonReference and bodySite and statusReason MS
* obeys mcode-reason-required

//---------- Extensions -------------------------

Extension: RadiotherapyModalityAndTechnique
Id:        mcode-radiotherapy-modality-and-technique
Title:     "Radiotherapy Modality And Technique Extension"
Description: "Extension capturing modality and technique of a given radiotherapy procedure.  The allowed combinations of modality and technique are constrained by invariants, one per modality."
* ^extension[FMM].valueInteger = 3
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(Procedure)
* insert ExtensionContext(ServiceRequest)
* extension contains
    RadiotherapyModality named modality 1..1 MS and
    RadiotherapyTechnique named technique 0..* MS
* extension[modality].value[x] from RadiotherapyModalityVS (required)
* extension[technique].value[x] from RadiotherapyTechniqueVS (required)
* obeys TechniquesForNeutronBeamModality
* obeys TechniquesForPhotonBeamModality
* obeys TechniquesForElectronBeamModality
* obeys TechniquesForCarbonIonBeamModality
* obeys TechniquesForProtonBeamModality
* obeys TechniquesForInternalRadiotherapyPermanentSeeds
* obeys TechniquesForLowDoseRateUsingTempRadSource
* obeys TechniquesForPulsedDoseRate
* obeys TechniquesForHighDoseRate
* obeys TechniquesForHighDoseRateElectronic
* obeys TechniquesForRadioPharmaceutical
* obeys ModalityTextRequiredForOther
* obeys TechniqueTextRequiredForOther


Invariant: ModalityTextRequiredForOther
Description:  "Require a text literal for code other"
* expression = 
     "extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').value.exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').value.coding.exists(system = 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor' and code = 'UNC')
   implies
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').value.text.exists()"
* severity =  #error


Invariant: TechniqueTextRequiredForOther
Description:  "Require a text literal for code other"
Expression: 
     "extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').value.exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').value.coding.exists(system = 'http://terminology.hl7.org/CodeSystem/v3-NullFlavor' and code = 'UNC')
   implies
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').value.text.exists()"
Severity: #error

RuleSet: ModTechniqueConstraint(modCode, techCodes)
* expression = 
     "extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').value.exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-modality').value.coding.exists(system = 'http://snomed.info/sct' and code = '{modCode}')
   implies
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').value.exists() and
      extension.where(url = 'http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-radiotherapy-technique').value.coding.exists({techCodes})"
* severity = #error

Invariant: TechniquesForPhotonBeamModality
Description: "Allowed Techniques for Photon Beam Modality"
* insert ModTechniqueConstraint([[1156506007]], [[code = 'UNC' or code = '441799006' or code = '1156530009' or code = '1162782007' or code = '1156526006' or code = '168524008' or code = '1156530009' or code = '1163157007']])

Invariant: TechniquesForElectronBeamModality
Description:  "Allowed Techniques for Electron Beam Modality"
* insert ModTechniqueConstraint([[45643008]], [[code = 'UNC' or code = '1162782007' or code = '1156526006' or code = '168524008' or code = '1163157007']])

Invariant: TechniquesForNeutronBeamModality
Description:  "Allowed Techniques for Neutron Beam Modality"
* insert ModTechniqueConstraint([[80347004]], [[code = 'UNC' or code = '169317000' or code = '1162782007']])

Invariant: TechniquesForCarbonIonBeamModality
Description:  "Allowed Techniques for Carbon Ion Beam Modality"
* insert ModTechniqueConstraint([[1156505006]], [[code = 'UNC' or code = '1156529004' or code = '1156528007' or code='1204242009']])

Invariant: TechniquesForProtonBeamModality
Description:  "Allowed Techniques for Proton Beam Modality"
* insert ModTechniqueConstraint([[10611004]], [[code = 'UNC' or code = '1156529004' or code = '1156528007' or code = '1204242009' or code = '1163157007']])

Invariant: TechniquesForInternalRadiotherapyPermanentSeeds
Description:  "Allowed Techniques for Internal Radiotherapy - Permanent Seeds"
* insert ModTechniqueConstraint([[169359004]], [[code = 'UNC' or code = '113120007']])

Invariant: TechniquesForLowDoseRateUsingTempRadSource
Description:  "Allowed Techniques for Low Dose Rate Using Temp Radiation Source"
* insert ModTechniqueConstraint([[1156708005]], [[code = 'UNC' or code = '384692006' or code = '113120007' or code = '14473006']])

Invariant: TechniquesForPulsedDoseRate
Description:  "Allowed Techniques for Pulsed Dose Rate"
//Intracavitary, Interstitial, UNC (.text required)
* insert ModTechniqueConstraint([[1156384006]], [[code = 'UNC' or code = '384692006' or code = '113120007']])

Invariant: TechniquesForHighDoseRate
Description:  "Allowed Techniques for High Dose Rate"
// Intracavitary, IMB, Interstitial, Intravascular, Intraluminal, IORT, Surface, UNC (.text required)
* insert ModTechniqueConstraint([[394902000]], [[code = 'UNC' or code = '384692006' or code = '1156382005' or code = '113120007' or code = ' 1156383000' or code = '384691004' or code = '168524008' or code = '14473006']])

Invariant: TechniquesForHighDoseRateElectronic
Description:  "Allowed Techniques for High Dose Rate Electronic"
* insert ModTechniqueConstraint([[438629002]], [[code = 'UNC' or code = '384692006' or code = '1156382005' or code = '113120007' or code = '384691004' or code = '168524008' or code = '14473006']])

Invariant: TechniquesForRadioPharmaceutical
Description:  "Allowed Techniques for Radiopharmaceutical"
* insert ModTechniqueConstraint([[440252007]], [[code = 'UNC' or code = '16560241000119104' or code = '1156383000' or code = '384692006' or code = '113120007']])

Extension: RadiotherapyModality
Id:        mcode-radiotherapy-modality
Title:    "Radiotherapy Modality Extension"
Description: "Extension capturing a modality of external beam or brachytherapy radiation procedures."
// context removed as per FHIR-32243 for STU2 // re-added as part of STU4 because radiation therapy IG was created
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(Procedure)
* insert ExtensionContext(ServiceRequest)
* ^extension[FMM].valueInteger = 3
* value[x] only CodeableConcept
* value[x] 1..1

Extension: RadiotherapyTechnique
Id:        mcode-radiotherapy-technique
Title:     "Radiotherapy Technique Extension"
Description: "Extension capturing a technique of external beam or brachytherapy radiation procedures."
// context removed as per FHIR-32243 for STU2 // re-added as part of STU4 because radiation therapy IG was created
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(Procedure)
* insert ExtensionContext(ServiceRequest)
* ^extension[FMM].valueInteger = 3
* value[x] only CodeableConcept
* value[x] 1..1

Extension: RadiotherapySessions
Id:        mcode-radiotherapy-sessions
Title:     "Radiotherapy Number of Sessions Extension"
Description: "The number of sessions in a course of radiotherapy."
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(Procedure)
// * insert ExtensionContext(Procedure) - removed as per FHIR-32243
* ^extension[FMM].valueInteger = 3
* value[x] only unsignedInt
* value[x] 1..1

Extension: RadiotherapyDoseDeliveredToVolume
Id: mcode-radiotherapy-dose-delivered-to-volume
Title: "Radiotherapy Dose Delivered To Volume Extension"
Description: "Dose delivered to a given radiotherapy volume."
// context removed as per FHIR-32243 for STU2 // re-added as part of STU4 because radiation therapy IG was created
* insert ExtensionContext(DomainResource)
* insert ExtensionContext(Extension)
* insert ExtensionContext(Procedure)
* ^extension[FMM].valueInteger = 3
* extension contains
    volume 1..1 MS and
    totalDoseDelivered 0..1 MS and
    fractionsDelivered 0..1 MS
* extension[volume].value[x] only Reference(RadiotherapyVolume)
* extension[totalDoseDelivered].value[x] only Quantity
* extension[totalDoseDelivered].valueQuantity = UCUM#cGy
* extension[fractionsDelivered].value[x] only unsignedInt
// Definitions of in-line extensions
* extension[volume] ^short = "Volume in the body where radiation was delivered"
* extension[volume] ^definition = "A BodyStructure resource representing volume in the body where radiation was delivered, for example, Chest Wall Lymph Nodes."
* extension[totalDoseDelivered] ^short = "Total Physical Radiation Dose Delivered"
* extension[totalDoseDelivered] ^definition = "The total amount of physical radiation delivered to this volume within the scope of this dose delivery, i.e., dose delivered from the Procedure in which this extension is used."
* extension[fractionsDelivered] ^short = "Number of Fractions Delivered"
* extension[fractionsDelivered] ^definition = "The number of fractions delivered to this volume."


//------ Radiotherapy Volume -------

Profile: RadiotherapyVolume
Parent: BodyStructure
Id: mcode-radiotherapy-volume
Title: "Radiotherapy Volume Profile"
Description: "A volume of the body used in radiotherapy planning or treatment delivery."
* ^extension[FMM].valueInteger = 3
* obeys mcode-description-or-id-required
* insert IdentifierDisplayName
* identifier ^short = "Volume Identifier"
* identifier ^definition = "Unique identifier to reliably identify the same target volume in different requests and procedures, for example, the Conceptual Volume UID used in DICOM."
* description ^short = "Volume Description"
* description ^definition = "A text description of the radiotherapy volume, which SHOULD contain any additional information above and beyond the location and locationQualifier that describe the volume."
* morphology from RadiotherapyVolumeTypeVS (extensible)
* morphology ^short = "Type of Radiotherapy Volume"
// definition --> comment FHIR-32352
* morphology ^comment = "The type of radiotherapy volume this resource represents. Although the name of the element is 'morphology', this element is defined in the base resource as 'The kind of structure being represented by the body structure'. The name is somewhat of a misnomer, and might be better interpreted simply as 'type' or 'kind'."
* location from RadiotherapyTreatmentLocationVS (extensible)
* location ^short = "Body Location Code."
* location ^definition = "The location and locationQualifier codes specify a TG263 body structure comprising the irradiated volume."
* locationQualifier from RadiotherapyTreatmentLocationQualifierVS (extensible)
* locationQualifier ^short = "Qualifiers on location used to specify a TG263 body structure comprising the irradiated volume."
* locationQualifier ^definition = "Qualifiers that together with the associated location code specify the TG263 body structure comprising the irradiated volume."
* identifier and location and description and patient and morphology and locationQualifier  MS
* patient only Reference(CancerPatient)
* patient ^definition = "The patient for which a radiotherapy procedure is planned or performed."

Invariant:  mcode-description-or-id-required
Description: "One of description or identifier MUST be present"
Expression: "description.exists() or identifier.exists()"
Severity:   #error

/* HOLD

If either Modality value set needs to be extended, here are the invariants;

    Invariant: teleradiotherapy-procedure-code-invariant
    Description: "If the code 'Other Teleradiotherapy Modality, specify' is used, a second code from outside the original value set must be present. The second code MUST NOT represent a concept in or subsumed by any concept in the original value set."
    Expression: "coding.where(code = 'OtherTeleradiotherapyModality').exists() implies coding.where(code != 'OtherTeleradiotherapyModality' and $this.memberOf('http://hl7.org/fhir/us/mcode/ValueSet/mcode-teleradiotherapy-modality-vs').not()).exists()"
    Severity:   #error

    Invariant: brachytherapy-code-invariant
    Description: "If the code representing 'Other brachytherapy, specify' is used, a second code from outside the original value set must be present. The second code MUST NOT represent a concept in or subsumed by any concept in the original value set."
    Expression: "coding.where(code = 'OtherBrachytherapyModality').exists() implies coding.where(code != 'OtherBrachytherapyModality' and $this.memberOf('http://hl7.org/fhir/us/mcode/ValueSet/brachytherapy-modality-vs').not()).exists()"
    Severity:   #error

Profile: BrachytherapyImplantableDevice
Parent:  USCoreImplantableDeviceProfile
Id:      mcode-brachytherapy-implantable-device
Title: "Brachytherapy Implantable Device Profile"
Description: "A radioactive source device implanted into the body and remaining there temporarily or permanently."
* type from BrachytherapyDeviceVS (extensible)

*/


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_RiskAssessment.fsh

//Parent//
Profile: CancerRiskAssessment
Id: mcode-cancer-risk-assessment
Parent: USCoreObservationSimple
Title: "Cancer Risk Assessment Profile"
Description: "Parent profile for observations regarding cancer risk assessment. Risk assessment is a process used to estimate the risk that a certain event will happen. In medicine, this may include a person’s risk of having a child with a certain condition or disease, such as cancer. It may also be used to estimate the risk of carrying a certain gene mutation (change), or of having an adverse event (unexpected medical problem) in response to certain types of drugs or other substances. A risk assessment may be done by collecting information about a person’s age, sex, personal and family medical history, ethnic background, lifestyle, and other factors and using statistics tools to calculate risk (Definition from: [NCI Dictionary of Cancer Terms](https://www.cancer.gov/publications/dictionaries/cancer-terms/def/risk-assessment)).

The key elements are the code, method, value, and optionally, prognostic factors referenced in the hasMember element."
* ^abstract = true
* code from CancerRiskAssessmentTypeVS (preferred)
* code ^short = "The type of risk assessment information reported."
* code ^definition = "The kind of risk assessment reported. This element identifies the type of value that is reported in Observation.value and is necessary for the correct interpretation of that value. The distinction between Observation.code and Observation.method is important. Observation.code identifies the kind of risk assessment being reported while Observation.method represents the risk assessment system used to determine the code. Observation.code may imply the risk assessment system. When the risk assessment system is implied by Observation.code, Observation.method is not required. However, when Observation.code does not imply a risk assessment system, then the risk assessment system must be specified in Observation.method. The value (Observation.valueCodeableConcept) may also imply certain things about the kind of risk assessment being reported. However, even if the value is partly or wholly self-identifying, it is not a reliable indicator of the type of risk assessment being reported or the method of assessment. Therefore, Observation.code must in all cases be reported."

/*I don't have any methods picked out right now
* method from RiskAssessmentMethodVS (extensible)
* method ^short = "The risk assessment system used."
* method ^definition = "The risk assessment system or protocol used to determine the risk, risk group, or category of the cancer."
*/

* value[x] only CodeableConcept
* value[x] from RiskAssessmentValueVS (example)
* value[x] ^comment = ""    // suppress QA error on #notes link
* value[x] ^short = "The value of the risk assessment"
* value[x] ^definition = "The classification resulting from the risk evaluation."

* insert NotUsed(device)
* insert NotUsed(referenceRange)
* focus only Reference(PrimaryCancerCondition)
* focus ^short = "The cancer condition associated with risk assessment."
* focus ^definition = "Risk assessments are associated with a particular primary cancer condition. Observation.focus is used to point back to that condition."
* hasMember ^short = "Prognostic factors contributing to risk assessment."
* hasMember ^definition = "References to the prognostic factors affecting the risk assessment."
* subject only Reference(CancerPatient)
* subject ^definition = "The patient associated with risk assessment."
* status and code and subject and effective[x] and value[x] and focus MS

//Rhabdomyosarcoma//

Profile: RhabdomyosarcomaRiskAssessment
Id: mcode-rhabdomyosarcoma-risk-assessment
Parent: CancerRiskAssessment
Title: "Rhabdomyocaroma Risk Assessment Profile"
Description: "Risk assessment for rhabdomyocaroma. The assessment is based on three things - TNM stage, clinical group, and whether cancer cells have a PAX/FOX01 fusion gene."
* ^extension[FMM].valueInteger = 0
* code = NCIT#C148010 // "Intergroup Rhabdomyosarcoma Study Group Clinical Staging and Grouping System"
* value[x] from RhabdomyosarcomaAssessmentValueVS (required)


//Acute lymphoblastic leukemia//

Profile: ALLRiskAssessment
Id: mcode-ALL-risk-assessment
Parent: CancerRiskAssessment
Title: "ALL Risk Assessment Profile"
Description: "Risk assessment for acute lymphoblastic leukemia (ALL)."
* ^extension[FMM].valueInteger = 0
* code = NCIT#C167435 // "Leukemia Finding" 
* value[x] from ALLRiskAssessmentVS (extensible)



/* decided not to include 
//Mantle Cell Lymphoma//

Profile: LymphomaMIPIRiskAssessment
Id: mcode-lymphoma-mipi-risk-assessment
Parent: CancerRiskAssessment
Title: "Lymphoma MIPI Risk Assessment"
Description: "Risk assessment for mantle cell lymphoma by the International Prognostic Index Profile. A asessment is designed to classify a patient's risk of mantle cell lymphoma progression or relapse and overall survival following therapy. It uses the criteria of patient's age, ECOG performance status, serum LDH activity, WBC count and Ki-67 index to classify patients into low risk, medium risk or high risk groups."
* ^extension[FMM].valueInteger = 0
* code = SCT#763236005 // "Mantle Cell Lymphoma International Prognostic Index (assessment scale)"
* value[x] from LymphomaMIPIRiskAssessmentVS (required)
*/


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Staging_Other.fsh

// Lymphoma Stage

Profile: LymphomaStage
Id: mcode-lymphoma-stage
Parent: CancerStage
Title: "Lymphoma Stage Profile"
Description: "Staging of lymphoma (both Hodgkins and Non-Hodgkins) by Ann Arbor, Cotswold, or Lugano staging systems. The method (required) indicates which of these related staging systems was used."
* ^extension[FMM].valueInteger = 0
* code = SCT#385388004 // "Lymphoma stage (observable entity)"
* method 1..1 MS
* method from LymphomaStagingMethodVS
* value[x] from LymphomaStageValueVS (required)
* insert ObservationComponentSlicingRules
* component contains stage-modifier 0..* and clin-or-path-modifier 0..1 and bulky-modifier 0..1
* component[stage-modifier].value[x] only CodeableConcept
* component[stage-modifier].value[x] from LymphomaStageValueModifierVS
* component[stage-modifier].code = SCT#106252000 "Staging classification for lymphoma (tumor staging)"

* component[clin-or-path-modifier].value[x] only CodeableConcept
* component[clin-or-path-modifier].value[x] from ClinOrPathModifierVS
* component[clin-or-path-modifier].code = SCT#277366005 "Nature of staging values (qualifier value)"

* component[bulky-modifier].value[x] only CodeableConcept
* component[bulky-modifier].value[x] from LymphomaStageBulkyModifierVS
* component[bulky-modifier].code = SCT#260873006 "Bulky disease status (attribute)"

/*
//  Leukemia Stage

Profile: CLLBinetStage
Id: mcode-cll-binet-stage
Parent: CancerStage
Title: "CLL Binet Stage Profile"
Description: "Binet stage for chronic lymphocytic leukemia (CLL)"
* ^extension[FMM].valueInteger = 0
* code = NCIT#C141212 // Binet Stage -- request a SNOMED code?
//* method = SCT#1149099005 // "Binet staging classification for chronic lymphocytic leukemia (tumor staging)"
* value[x] from BinetStageValueVS (extensible)

Profile: CLLRaiStage
Id: mcode-cll-rai-stage
Parent: CancerStage
Title: "CLL Rai Stage Profile"
Description: "Rai stage for chronic lymphocytic leukemia (CLL)"
* ^extension[FMM].valueInteger = 0
* code = NCIT#C141207 // Rai Stage -- request a SNOMED code?
* method from RaiStagingMethodVS
* value[x] from RaiStageValueVS (extensible)

// Gynecologic Tumors

Profile: GynecologicTumorFIGOStage
Id: mcode-gynecologic-tumor-figo-stage
Parent: CancerStage
Title: "Gynecologic Tumor FIGO Stage Profile"
Description: "Gynecologic tumor stage by International Federation of Gynecology and Obstetrics (FIGO) Staging System"
* ^extension[FMM].valueInteger = 0
* code = SCT#385361009 // "International Federation of Gynecology and Obstetrics stage for gynecological malignancy (observable entity)"
* method from FIGOStagingMethodVS (extensible)
* value[x] from FIGOStageValueVS (extensible)

// Melanoma

Profile: MelanomaBreslowDepthStage
Id: mcode-melanoma-breslow-depth-stage
Parent: CancerStage
Title: "Melanoma Breslow Depth Stage Profile"
Description: "Breslow depth stage for melanoma of the skin"
* ^extension[FMM].valueInteger = 0
* code = SCT#106243009 // Breslow depth staging for melanoma of skin (observable entity)
* value[x] from BreslowDepthStageValueVS

Profile: MelanomaClarkLevel
Id: mcode-melanoma-clark-level
Parent: CancerStage
Title: "Melanoma Clark Level Profile"
Description: "Clark level for melanoma"
* ^extension[FMM].valueInteger = 0
* code = SCT#103419001 // "Clark melanoma level of invasion of excised malignant melanoma of skin (observable entity)
* value[x] from ClarkLevelValueVS (required)


// Myeloma (aka Multiple Myeloma, Plasma Cell Myeloma) Stage. There is no code for Myeloma Stage independent of the staging system, so we need separate profiles for each method (ISS and RISS)

Profile: MyelomaISSStage
Id: mcode-myeloma-iss-stage
Parent: CancerStage
Title: "Myeloma ISS Stage Profile"
Description: "Myeloma Stage by International Staging System (ISS)"
* ^extension[FMM].valueInteger = 0
* code = NCIT#C139007  // "International Staging System Stage"
// How do I say "method is not required, but if you include it, it must be this code"?
//* method = SCT#1149162008 // International Staging System for multiple myeloma (staging scale)
* value[x] from MyelomaISSValueVS (extensible)

Profile: MyelomaRISSStage
Id: mcode-myeloma-riss-stage
Parent: CancerStage
Title: "Myeloma RISS Stage Profile"
Description: "Myeloma Stage by Revised International Staging System (RISS)"
* ^extension[FMM].valueInteger = 0
// There is no code for Myeloma Stage independent of the staging system, so we need two separate profiles for ISS and RISS
* code = NCIT#C141392 // "Revised International Staging System Stage"
// How do I say "method is not required, but if you include it, it must be this code"?
//* method = SCT#1149163003 // Revised International Staging System for multiple myeloma (staging scale)
* value[x] from MyelomaRISSValueVS (extensible)

// Prostate Cancer

Profile: ProstateGleasonGradeGroup
Id: mcode-prostate-gleason-grade-group
Parent: CancerStage
Title: "Prostate Gleason Grade Group Profile"
Description: "Gleason Grade Group for prostate cancer"
* ^extension[FMM].valueInteger = 0
* code = SCT#385377005 // Gleason grade finding for prostatic cancer (finding)
* value[x] from GleasonGradeGroupValueVS (required)


//Neuroblastoma//

Profile: NeuroblastomaINSSStage
Id: mcode-neuroblastoma-inss-stage
Parent: CancerStage
Title: "Neuroblastoma INSS Stage Profile"
Description: "The International Neuroblastoma Staging System (INSS) stage for neuroblastoma."
* ^extension[FMM].valueInteger = 0
* code = SCT#409720004  // International neuroblastoma staging system stage (observable entity)
* value[x] from NeuroblastomaINSSValueVS (required)


Profile: NeuroblastomaINRGSSStage
Id: mcode-neuroblastoma-inrgss-stage
Parent: CancerStage
Title: "Neuroblastoma INRGSS Stage Profile"
Description: "International Neuroblastoma Risk Group Staging System (INRGSS) for neuroblastoma."
* ^extension[FMM].valueInteger = 0
* code = NCIT#C133427 // International Neuroblastoma Risk Group Staging System
* value[x] from NeuroblastomaINRGSSValueVS (extensible)

//WilmsTumor//

Profile: WilmsTumorStage
Id: mcode-wilms-tumor-stage
Parent: CancerStage
Title: "Wilms Tumor Stage Profile"
Description: "Wilms Tumors (nephroblastoma) Stage by the National Wilms Tumor Study Group."
* ^extension[FMM].valueInteger = 0
* code = SCT#405931009 // National Wilms Tumor Study Group Stage (observable entity)
* value[x] from WilmsTumorStageValueVS (required)
* bodySite from WilmsTumorBodySiteVS (extensible)

//Rhabdomyosarcoma//

Profile: RhabdomyosarcomaClinicalGroupStage
Id: mcode-rhabdomyosarcoma-clinical-group-stage
Parent: CancerStage
Title: "Rhabdomyocaroma Clinical Group Stage Profile"
Description: "Clinical stage group for rhabdomyocaroma."
* ^extension[FMM].valueInteger = 0
* code = SCT#405916000 // Intergroup rhabdomyosarcoma study post-surgical clinical group (observable entity)
* value[x] from RhabdomyosarcomaClinicalGroupValueVS (required)
*/

---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Staging_TNM.fsh

//----------- AJCC TNM Staging Profiles--------------
Profile: TNMCategory
Id: mcode-tnm-category
Parent: USCoreObservationSimple
Title: "Parent for T, N, and M Categories."
Description: "Parent profile for T, N, and M category profiles."
* ^abstract = true
* subject only Reference(CancerPatient)
* subject ^definition = "The patient associated with TNM category."
* value[x] only CodeableConcept
* method 1..1
* method from TNMStagingMethodVS (extensible)
* method ^short = "The staging system used."
* method ^definition = "The staging system or protocol used to determine the category of the cancer based on its extent. When the staging system is implied by Observation.code, Observation.method is not required. However, when Observation.code does not imply a staging system (for example, if the code is SNOMED CT 385388004 Lymphoma stage), then the staging system must be specified in Observation.method. "
* focus only Reference(PrimaryCancerCondition)
* focus ^short = "The cancer condition associated with TNM category."
* focus ^definition = "Staging is associated with a particular primary cancer condition. Observation.focus is used to point back to that condition."
* insert NotUsed(device)
* insert NotUsed(referenceRange)
* insert NotUsed(hasMember)
* status and code and subject and effective[x] and value[x] and method and focus MS

Profile: TNMStageGroup
Id: mcode-tnm-stage-group
Parent: CancerStage
Title: "TNM Stage Group Profile"
Description: "Reporting of the stage group representing the overall extent of a cancer, based on AJCC staging guidelines."
* ^extension[FMM].valueInteger = 4
* insert NotUsed(component)
* code from TNMStageGroupStagingTypeVS (preferred)
* code ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMStageGroupStagingTypeMaxVS)
* value[x] from TNMStageGroupVS (preferred)
* value[x] ^short = "The stage group"
* value[x] ^definition = "The overall cancer stage, such as stage group IIA."
* value[x] ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMStageGroupMaxVS)
* hasMember MS
* method 1..1  // NEW requirement 
* method from TNMStagingMethodVS (extensible)
* focus 1..1  // NEW requirement -- see https://jira.hl7.org/browse/FHIR-37575
* insert SliceReferenceOnProfile(hasMember)
* hasMember contains TNMCategory 0..3 MS
* hasMember ^short = "Element containing the T, N, and M categories as references to separate T, N, M observations. The referenced resources are observations leading to the Stage Group reported in the current resource."

Profile:  TNMPrimaryTumorCategory
Id: mcode-tnm-primary-tumor-category
Parent: TNMCategory
Title: "TNM Primary Tumor Category Profile"
Description: "Category of the primary tumor, based on its size and extent, based on evidence such as physical examination, imaging, and/or biopsy."
* ^extension[FMM].valueInteger = 4
* code from TNMPrimaryTumorStagingTypeVS (preferred)
* code ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMPrimaryTumorStagingTypeMaxVS)
// MK 8/29/2022 - Using "preferred" binding with a maximum value set because some users might use AJCC codes directly
// In addition, the codes for "r" and "a" staging are not in SNOMED
* value[x] from TNMPrimaryTumorCategoryVS (preferred)  
* value[x] ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMPrimaryTumorCategoryMaxVS)

Profile:  TNMRegionalNodesCategory
Id: mcode-tnm-regional-nodes-category
Parent: TNMCategory
Title: "TNM Regional Nodes Category Profile"
Description: "Category of the presence or absence of metastases in regional lymph nodes, based on evidence such as physical examination, imaging, and/or biopsy."
* ^extension[FMM].valueInteger = 4
* code from TNMRegionalNodesStagingTypeVS (preferred)
* code ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMRegionalNodesStagingTypeMaxVS)
* value[x] from TNMRegionalNodesCategoryVS (preferred)
* value[x] ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMRegionalNodesCategoryMaxVS)

Profile:  TNMDistantMetastasesCategory
Id: mcode-tnm-distant-metastases-category
Parent: TNMCategory
Title: "TNM Distant Metastases Category Profile"
Description: "Category describing the extent of a tumor metastasis in remote anatomical locations, based on evidence such as physical examination, imaging, and/or biopsy."
* ^extension[FMM].valueInteger = 4
* code from TNMDistantMetastasesStagingTypeVS (preferred)
* code ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMDistantMetastasesStagingTypeMaxVS)
* value[x] from TNMDistantMetastasesCategoryVS (preferred)
* value[x] ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TNMDistantMetastasesCategoryMaxVS)


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Staging.fsh

Profile: CancerStage
Id: mcode-cancer-stage
Parent: USCoreObservationSimple
Title: "Cancer Stage Profile"
Description: "Profile for observations regarding cancer stage, grade, or classification. The stage is an assessment of the extent of the cancer in the body, according to a given cancer staging classification system. The key elements are the code, method, value, and optionally, prognostic factors referenced in the hasMember (if the prognostic factor is captured in a different profile) or component (if the prognostic factor is not captured in a different profile) element."
* insert NotUsed(device)
* insert NotUsed(referenceRange)
* focus only Reference(PrimaryCancerCondition)
* focus ^short = "The cancer condition associated with staging assessment."
* focus ^definition = "Staging is associated with a particular primary cancer condition. Observation.focus is used to point back to that condition."
* hasMember ^short = "Prognostic factors contributing to stage determination."
* hasMember ^definition = "References to the prognostic factors affecting the stage, for example, the T, N, and M categories."
* subject only Reference(CancerPatient)
* subject ^definition = "The patient associated with staging assessment."
* status and code and subject and effective[x] and value[x] and method and focus MS

* code from CancerStageTypeVS (preferred)
* code ^short = "The type of stage information reported."
* code ^definition = """The kind of stage reported, e.g., a pathologic TNM stage, a Lugano lymphoma stage, or a Rai stage for leukemia. This element identifies the type of value that is reported in Observation.value and is necessary for the correct interpretation of that value. The distinction between Observation.code and Observation.method is important. Observation.code identifies the kind of stage being reported while Observation.method represents the staging system used to determine the code. Observation.code may imply the staging system. For example, the SNOMED CT 103420007 says the reported value is a modified Dukes stage, implying the Modified Dukes staging system (SNOMED CT 385359000) was used to determine the stage. When the staging system is implied by Observation.code, Observation.method is not required. However, when Observation.code does not imply a staging system (for example, if the code is SNOMED CT 385388004 Lymphoma stage), then the staging system must be specified in Observation.method. The value (Observation.valueCodeableConcept) may also imply certain things about the kind of stage being reported. For example, the value cN0 implies the value is a clinical stage. However, even if the value is partly or wholly self-identifying, it is not a reliable indicator of the type of stage being reported or the method of staging. Therefore, Observation.code must in all cases be reported."""

* method from CancerStagingMethodVS (preferred)
* method ^short = "The staging system used."
* method ^definition = "The staging system or protocol used to determine the stage, stage group, or category of the cancer based on its extent. When the staging system is implied by Observation.code, Observation.method is not required. However, when Observation.code does not imply a staging system (for example, if the code is SNOMED CT 385388004 Lymphoma stage), then the staging system must be specified in Observation.method. "

* value[x] only CodeableConcept // SEER extent of disease codings are strings -- this might have to be generalized to include strings
* value[x] from CancerStageValueVS (preferred)
* value[x] ^comment = ""    // suppress QA error on #notes link
* value[x] ^short = "The value of the stage"
* value[x] ^definition = "The stage, stage group, category, or classification resulting from the staging evaluation."

* component.code only CodeableConcept
* component.code from CancerStagingPrognosticFactorTypeVS (preferred)
* component.code ^short = "Type of prognostic factor"
* component.value[x] only CodeableConcept
* component.value[x] from CancerStagingPrognosticFactorValueVS (preferred)
* component.value[x] ^short = "Prognostic factor value"

---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_Surgery.fsh

Profile:  CancerRelatedSurgicalProcedure
Parent:   USCoreProcedure
Id: mcode-cancer-related-surgical-procedure
Title:    "Cancer-Related Surgical Procedure Profile"
Description: "A surgical action addressing a cancer condition. The scope of this profile has been narrowed to cancer-related procedures by constraining the reasonReference and reasonCode to cancer conditions, one of which is required. If a procedure occurs that is NOT a surgical procedure, use the US Core Procedure profile."
* ^extension[FMM].valueInteger = 3
* subject ^definition = "The patient on whom the procedure was performed"
* obeys mcode-reason-required
* extension contains
    ProcedureIntent named treatmentIntent 0..1 MS
* reasonCode from CancerDisorderVS (extensible)
* reasonReference only Reference(USCoreCondition)  // primary or secondary
* insert BodySiteQualifierAndLaterality(bodySite)
// It is not kosher to slice a 0..1 element, however, the cardinality of Procedure.category is a mistake. It was supposed to have changed in 2019 to 0..* (https://jira.hl7.org/browse/FHIR-20628). However, it is still 0..1 in R4, but the change has been made for R5.
* code from CancerRelatedSurgicalProcedureVS (extensible)
// MUST SUPPORTS -- US Core Procedure sets status, code, subject, performed[x]
* bodySite and bodySite.extension and extension and reasonCode and reasonReference and bodySite.extension[locationQualifier] and bodySite.extension[lateralityQualifier] MS


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/SD_TumorSize.fsh

Profile: TumorSize 
Parent:  Observation  // not US Core, because the method could be laboratory, imaging, or clinical
Id: mcode-tumor-size
Title: "Tumor Size Profile"
Description:  "Records the dimensions of a tumor"
// LOINC code indicating this is a tumor size observation
* ^extension[FMM].valueInteger = 3
* code = LNC#21889-1 //"Size Tumor"
* subject ^short = "The patient whose tumor was measured."
* subject ^definition = "The patient whose tumor was measured. SHALL be a `Patient` resource conforming to `CancerPatient`."
* subject 1..1
* subject only Reference(CancerPatient)
* focus 0..1
* focus only Reference(Tumor)
* focus ^short = "Identifies a tumor that has NOT been removed from the body"
* focus ^definition = "Reference to a BodyStructure resource conforming to Tumor."
* focus ^comment = "Use **only** when the tumor **has not** been removed from the body. If the tumor has been removed, use `specimen` instead and leave `focus` empty."
* specimen only Reference(HumanSpecimen)
* specimen ^short = "Identifies a tumor that has been removed from the body"
* specimen ^definition = "Reference to a Specimen resource consistent with HumanSpecimen with type = http://terminology.hl7.org/CodeSystem/v2-0487#TUMOR."
* specimen ^comment = "Use specimen **only** when the tumor **has** been removed from the body. If the tumor has been not removed, use `focus` instead and leave `specimen` empty."
* obeys must-have-focus-or-specimen-invariant
* method from TumorSizeMethodVS (extensible)
* method ^short = "Method for measuring the tumor"
* method ^definition = "Method for measuring the tumor"
* method ^comment = "Tumors are typically measured via gross pathology after excision, or via diagnostic imaging or physical exam prior to removal. If `specimen` is set, `method` is expected to be a \"gross pathology\" code. If `focus` is set, `method` is expected to be a type of diagnostic imaging or physical exam."
* insert ObservationComponentSlicingRules
// Require 1 dimension; the additional dimensions are optional
* insert CreateComponent(tumorLongestDimension, 1, 1)
* insert CreateComponent(tumorOtherDimension, 0, 2)
* component[tumorLongestDimension] ^short = "Longest tumor dimension (cm or mm)"
* component[tumorLongestDimension] ^definition = "The longest tumor dimension in cm or mm."
* component[tumorLongestDimension].code = LNC#33728-7 // "Size.maximum dimension in Tumor"
* component[tumorLongestDimension].value[x] only Quantity
* component[tumorLongestDimension].valueQuantity from TumorSizeUnitsVS (required)
* component[tumorOtherDimension] ^short = "2nd or 3rd tumor dimension (cm or mm)"
* component[tumorOtherDimension] ^definition = "The second or third tumor dimension in cm or mm."
* component[tumorOtherDimension] ^comment = "Additional tumor dimensions should be ordered from largest to smallest."
* component[tumorOtherDimension].code = LNC#33729-5 // "Size additional dimension in Tumor"
* component[tumorOtherDimension].value[x] only Quantity
* component[tumorOtherDimension].valueQuantity from TumorSizeUnitsVS (required)
// Group the MustSupports to make it easier to see what's what
* subject and code and effective[x] and component and method and specimen and focus MS
* insert NotUsed(value[x])

// This invariant has been exhaustively tested with the FHIR validator
Invariant: must-have-focus-or-specimen-invariant
Description: "Either `focus` OR `specimen` MUST be populated"
Expression: "(focus.exists() or specimen.exists()) and (focus.exists() and specimen.exists()).not()"
Severity: #error


// Valuesets to help maintain compatibility between STU3 and STU3 Tumor across changes in SNOMEDCT codes

ValueSet: TumorMorphologyCodeVS
Id: mcode-tumor-morphology-code-vs
Title: "Tumor Morphology Code Value Set"
Description: "Contains the preferred preferred (active) code for tumor morphology."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system SCT where concept is-a #1240414004 "Malignant neoplasm (morphologic abnormality)"

ValueSet: TumorMorphologyCodeMaxVS
Id: mcode-tumor-morphology-code-max-vs
Title: "Tumor Morphology Code Max Value Set"
Description: "Contains the preferred codes for tumor morphology and the old, inactive code used in STU2, for backwards compatibility."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from valueset TumorMorphologyCodeVS
* SCT#367651003 "Malignant neoplasm of primary, secondary, or uncertain origin (morphologic abnormality)"


// OPEN QUESTION: How do we indicate that a tracked tumor has been surgically removed? Some sort of status? Specimen.active is the only possibility in BodyStructure, but the definition doesn't lend itself to this purpose.
Profile: Tumor
Parent:  BodyStructure
Id: mcode-tumor
Title: "Tumor Profile"
Description:  "Identifies a tumor that has not been removed from the body. Whenever possible, a single resource conforming to this profile will be used to track a tumor over time (as opposed to creating new Tumor-conforming BodyStructure resources each time that tumor is measured). Use HumanSpecimen to represent the tumor after removal from the body. 
Note that the required code for morphology used in STU2 is now inactive.  A new code has been specified and SHOULD be used, but the old code remains conformant."
* ^extension[FMM].valueInteger = 3
* patient only Reference(CancerPatient)
* patient ^definition = "The patient associated with this tumor."
// The purpose of this profile is to uniquely identify a tumor, so it follows that there must be at least one identifier value provided
* identifier ^short = "Stable identifier(s) for this tumor"
* identifier ^definition = "Stable identifier(s) for this specific tumor. The identifiers MUST be unique within the context of the referenced `CancerPatient`."
* identifier ^comment = "If applicable, an identifier should correspond to the physical tag inserted into the tumor during a procedure that is used for tracking the tumor by radiology and pathology."
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice containing at least one tumor identifier"
* identifier contains bodyStructureIdentifier 1..*
* identifier[bodyStructureIdentifier] only BodyStructureIdentifier
* identifier[bodyStructureIdentifier] ^short = "A persistent identifier of this tumor."
* identifier[bodyStructureIdentifier] ^definition = "A persistent identifier used to identify and track the tumor over time. The identifier must be unique in the context of the patient."
* morphology from TumorMorphologyCodeVS (extensible)
* morphology ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(TumorMorphologyCodeMaxVS)
// This VS is used for the primary/secondary cancer conditions; rule set here for consistency with these profiles.
* location from CancerBodyLocationVS (extensible)
* location 1..1 // Tumor is meaningless without a location; parent profile is 0..1
* locationQualifier from BodyLocationAndLateralityQualifierVS (required)
// Related cancer condition
* extension contains RelatedCondition named relatedCondition 0..1
* extension[relatedCondition].value[x] only Reference(USCoreCondition)
* extension[relatedCondition] ^short = "Reference to cancer condition associated with this tumor"
* extension[relatedCondition] ^definition = "Associates this tumor with a cancer condition. This could be a causal association (e.g., this is believed to be the primary tumor causing the cancer) or a different type of relationship (e.g., this tumor is a metastasis)"
// Gather MS in one place
* identifier and location and morphology and locationQualifier and patient and extension and extension[relatedCondition] and extension[relatedCondition].value[x] MS

Profile: BodyStructureIdentifier
Parent: Identifier
Id: mcode-body-structure-identifier
Title: "Body Structure Identifier Profile"
Description: "An identifier that designates a body structure such as a tumor and can be used for tracking the structure over time."
* ^extension[FMM].valueInteger = 3
* type = http://hl7.org/fhir/resource-types#BodyStructure
* value 1..1
* use = #usual

/* Commenting out MultifocalTumor observation for now
Issues to consider further:
1) Does this rise to the level of "minimal"?
2) You were missing Observation.code that says what is being observed.
3) Is this an Observation or a Condition? Conditions are uni-valued findings, while Observations need a question (code) and an answer set (value[x]). Observations on a HumanSpecimen are not Conditions although it is arguable that a multifocal tumor in the body could be modeled as a Condition.
4) If this is modeled as an Observation, then what is the question and what are the possible answers? Are we playing Jeopardy where the answer is "multi-focal"? Or is the question something about morphology, and "multi-focal" is among the possible answers?
5) I know we convinced ourselves otherwise, but we shouldn't forget the option of allowing a value set for Tumor.morphology (perhaps by slicing Tumor.morphology and fixing the first code.)

Profile: MultifocalTumor
Parent: USCoreClinicalTest
Id: mcode-multifocal-tumor
Title: "Multifocal Tumor Observation Profile"
Description: "Identifies multiple [Tumor](StructureDefinition-mcode-tumor.html) or [HumanSpecimen](StructureDefinition-mcode-tumor-specimen.html)-conforming resources as part of a multifocal tumor."
* ^status = #draft
* ^experimental = true
* valueCodeableConcept = SCT#399506006 "Multifocal tumor (finding)"
* focus only Reference(Tumor or HumanSpecimen)
* focus MS
* focus ^short = "References individual masses that comprise the multifocal tumor"
* focus ^definition = "If [Tumor](StructureDefinition-mcode-tumor.html) or [HumanSpecimen](StructureDefinition-mcode-tumor-specimen.html) are used to represent this multifocal tumor, or are used to represent multiple masses that comprise the multifocal tumor, they SHOULD be referenced here. If the same tumor is represented by both [Tumor](StructureDefinition-mcode-tumor.html) and [HumanSpecimen](StructureDefinition-mcode-tumor-specimen.html) at the time the multifocal observation was made, both resources SHOULD be referenced in `focus`."
* subject only Reference(CancerPatient)
* subject MS
* status MS
* effective[x] only dateTime
* effective[x] MS
*/


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/fsh/VS_CancerCondition.fsh

// THIS FILE CONTAINS THE VALUE SETS FOR PRIMARY AND SECONDARY CANCER CONDITIONS
// Updated based on spreadsheet in https://jira.hl7.org/browse/FHIR-32956 using valuesets used
// used by cancer registries.

ValueSet:   SecondaryCancerDisorderVS
Id: mcode-secondary-cancer-disorder-vs
Title: "Secondary Cancer Disorder Value Set"
Description:  "Types of secondary malignant neoplastic disease, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system SCT where concept is-a #128462008  "Secondary malignant neoplastic disease (disorder)"
* ICD10CM#C77 "SECONDARY AND UNSPECIFIED MALIGNANT NEOPLASM OF LYMPH NODES"
* ICD10CM#C77.0 "Secondary and unspecified malignant neoplasm of lymph nodes of head, face and neck"
* ICD10CM#C77.1 "Secondary and unspecified malignant neoplasm of intrathoracic lymph nodes"
* ICD10CM#C77.2 "Secondary and unspecified malignant neoplasm of intra-abdominal lymph nodes"
* ICD10CM#C77.3 "Secondary and unspecified malignant neoplasm of axilla and upper limb lymph nodes"
* ICD10CM#C77.4 "Secondary and unspecified malignant neoplasm of inguinal and lower limb lymph nodes"
* ICD10CM#C77.5 "Secondary and unspecified malignant neoplasm of intrapelvic lymph nodes"
* ICD10CM#C77.8 "Secondary and unspecified malignant neoplasm of lymph nodes of multiple regions"
* ICD10CM#C77.9 "Secondary and unspecified malignant neoplasm of lymph node, unspecified"
* ICD10CM#C78 "SECONDARY MALIGNANT NEOPLASM OF RESPIRATORY AND DIGESTIVE ORGANS"
* ICD10CM#C78.0 "Secondary malignant neoplasm of lung"
* ICD10CM#C78.00 "Secondary malignant neoplasm of unspecified lung"
* ICD10CM#C78.01 "Secondary malignant neoplasm of right lung"
* ICD10CM#C78.02 "Secondary malignant neoplasm of left lung"
* ICD10CM#C78.1 "Secondary malignant neoplasm of mediastinum"
* ICD10CM#C78.2 "Secondary malignant neoplasm of pleura"
* ICD10CM#C78.3 "Secondary malignant neoplasm of other and unspecified respiratory organs"
* ICD10CM#C78.30 "Secondary malignant neoplasm of unspecified respiratory organ"
* ICD10CM#C78.39 "Secondary malignant neoplasm of other respiratory organs"
* ICD10CM#C78.4 "Secondary malignant neoplasm of small intestine"
* ICD10CM#C78.5 "Secondary malignant neoplasm of large intestine and rectum"
* ICD10CM#C78.6 "Secondary malignant neoplasm of retroperitoneum and peritoneum"
* ICD10CM#C78.7 "Secondary malignant neoplasm of liver and intrahepatic bile duct"
* ICD10CM#C78.8 "Secondary malignant neoplasm of other and unspecified digestive organs"
* ICD10CM#C78.80 "Secondary malignant neoplasm of unspecified digestive organ"
* ICD10CM#C78.89 "Secondary malignant neoplasm of other digestive organs"
* ICD10CM#C79 "SECONDARY MALIGNANT NEOPLASM OF OTHER AND UNSPECIFIED SITES"
* ICD10CM#C79.0 "Secondary malignant neoplasm of kidney and renal pelvis"
* ICD10CM#C79.00 "Secondary malignant neoplasm of unspecified kidney and renal pelvis"
* ICD10CM#C79.01 "Secondary malignant neoplasm of right kidney and renal pelvis"
* ICD10CM#C79.02 "Secondary malignant neoplasm of left kidney and renal pelvis"
* ICD10CM#C79.1 "Secondary malignant neoplasm of bladder and other urinary organs"
* ICD10CM#C79.10 "Secondary malignant neoplasm of unspecified urinary organs"
* ICD10CM#C79.11 "Secondary malignant neoplasm of bladder"
* ICD10CM#C79.19 "Secondary malignant neoplasm of other urinary organs"
* ICD10CM#C79.2 "Secondary malignant neoplasm of skin"
* ICD10CM#C79.3 "Secondary malignant neoplasm of brain cerebral  meninges"
* ICD10CM#C79.31 "Secondary malignant neoplasm of brain"
* ICD10CM#C79.32 "Secondary malignant neoplasm of cerebral meninges"
* ICD10CM#C79.4 "Secondary malignant neoplasm of other and unspecified of nervous system"
* ICD10CM#C79.40 "Secondary malignant neoplasm of unspecified part of nervous system"
* ICD10CM#C79.49 "Secondary malignant neoplasm of other parts of nervous system"
* ICD10CM#C79.5 "Secondary malignant neoplasm of bone and bone marrow"
* ICD10CM#C79.51 "Secondary malignant neoplasm of bone"
* ICD10CM#C79.52 "Secondary malignant neoplasm of bone marrow"
* ICD10CM#C79.6 "Secondary malignant neoplasm of ovary"
* ICD10CM#C79.60 "Secondary malignant neoplasm of unspecified ovary"
* ICD10CM#C79.61 "Secondary malignant neoplasm of right ovary"
* ICD10CM#C79.62 "Secondary malignant neoplasm of left ovary"
* ICD10CM#C79.7 "Secondary malignant neoplasm of adrenal gland"
* ICD10CM#C79.70 "Secondary malignant neoplasm of unspecified adrenal gland"
* ICD10CM#C79.71 "Secondary malignant neoplasm of right adrenal gland"
* ICD10CM#C79.72 "Secondary malignant neoplasm of left adrenal gland"
* ICD10CM#C79.8 "Secondary malignant neoplasm of other specified sites"
* ICD10CM#C79.81 "Secondary malignant neoplasm of breast"
* ICD10CM#C79.82 "Secondary malignant neoplasm of genital organs"
* ICD10CM#C79.89 "Secondary malignant neoplasm of other specified sites"
* ICD10CM#C79.9 "Secondary malignant neoplasm of unspecified site"
* ICD10CM#C7B "SECONDARY NEUROENDOCRINE TUMORS"
* ICD10CM#C7B.0 "Secondary carcinoid tumors"
* ICD10CM#C7B.00 "Secondary carcinoid tumors, unspecified site"
* ICD10CM#C7B.01 "Secondary carcinoid tumors of distant lymph nodes"
* ICD10CM#C7B.02 "Secondary carcinoid tumors of liver"
* ICD10CM#C7B.03 "Secondary carcinoid tumors of bone"
* ICD10CM#C7B.04 "Secondary carcinoid tumors of peritoneum"
* ICD10CM#C7B.09 "Secondary carcinoid tumors of other sites"
* ICD10CM#C7B.1 "Secondary merkel cell carcinoma"
* ICD10CM#C7B.8 "Other secondary neuroendocrine tumors"

ValueSet:  MelanomaInSituDisorderVS
Id: mcode-melanoma-in-situ-disorder-vs
Title: "Melanoma In-Situ Disorder Value Set"
Description:    "Types of melanoma in-situ, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system SCT where concept is-a #189758001 "Melanoma in situ (disorder)"
* ICD10CM#D03 "Melanoma in situ of skin"
* ICD10CM#D03.0 "Melanoma in situ of lip"
* ICD10CM#D03.1 "Melanoma in situ of eyelid, including canthus"
* ICD10CM#D03.10 "Melanoma in situ of unspecified eyelid, including canthus"
* ICD10CM#D03.11 "Melanoma in situ of right eyelid, including canthus"
* ICD10CM#D03.111 "Melanoma in situ of right upper eyelid, including canthus"
* ICD10CM#D03.112 "Melanoma in situ of right lower eyelid, including canthus"
* ICD10CM#D03.12 "Melanoma in situ of left eyelid, including canthus"
* ICD10CM#D03.121 "Melanoma in situ of left upper eyelid, including canthus"
* ICD10CM#D03.122 "Melanoma in situ of left lower eyelid, including canthus"
* ICD10CM#D03.2 "Melanoma in situ of ear and external auricular canal"
* ICD10CM#D03.20 "Melanoma in situ of unspecified ear and external auricular canal"
* ICD10CM#D03.21 "Melanoma in situ of right ear and external auricular canal"
* ICD10CM#D03.22 "Melanoma in situ of left ear and external auricular canal"
* ICD10CM#D03.3 "Melanoma in situ of other and unspecified parts of face"
* ICD10CM#D03.30 "Melanoma in situ of unspecified part of face"
* ICD10CM#D03.39 "Melanoma in situ of other parts of face"
* ICD10CM#D03.4 "Melanoma in situ of scalp and neck"
* ICD10CM#D03.5 "Melanoma in situ of trunk"
* ICD10CM#D03.51 "Melanoma in situ of anal skin"
* ICD10CM#D03.52 "Melanoma in situ of breast (skin) (soft tissue)"
* ICD10CM#D03.59 "Melanoma in situ of other part of trunk"
* ICD10CM#D03.6 "Melanoma in situ of upper limb, including shoulder"
* ICD10CM#D03.60 "Melanoma in situ of unspecified upper limb, including shoulder"
* ICD10CM#D03.61 "Melanoma in situ of right upper limb, including shoulder"
* ICD10CM#D03.62 "Melanoma in situ of left upper limb, including shoulder"
* ICD10CM#D03.7 "Melanoma in situ of lower limb, including hip"
* ICD10CM#D03.70 "Melanoma in situ of unspecified lower limb, including hip"
* ICD10CM#D03.71 "Melanoma in situ of right lower limb, including hip"
* ICD10CM#D03.72 "Melanoma in situ of left lower limb, including hip"
* ICD10CM#D03.8 "Melanoma in situ of other sites"
* ICD10CM#D03.9 "Melanoma in situ, unspecified"

ValueSet:  CytologicEvidenceOfMalignancyVS
Id: mcode-cytologic-evidence-malignancy-vs
Title: "Cytologic Evidence of Malignancy Value Set"
Description:    "Types of cytological evidence of malignancy, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* SCT#126361000119107 "Cytological evidence of malignancy on anal Papanicolaou smear (finding)"
* SCT#126371000119101 "Cytological evidence of malignancy on vaginal Papanicolaou smear (finding)"
* ICD10CM#R85.614 "Cytologic evidence of malignancy on smear of anus"
* ICD10CM#R87.624 "Cytologic evidence of malignancy on smear of vagina"

ValueSet:  HypereosinophilicSyndromeDisorderVS
Id: mcode-hypereosinophilic-syndrome-disorder-vs
Title: "Specific Diagnosis of Cancer Value Set"
Description:    "Types of hypereosinophilic syndrome, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system SCT where concept is-a #393573009 "Hypereosinophilic syndrome (disorder)"
* ICD10CM#D72.110	"Idiopathic hypereosinophilic syndrome [HES]"
* ICD10CM#D72.111	"Lymphocytic Variant Hypereosinophilic Syndrome [LHES]"
* ICD10CM#D72.118	"Other hypereosinophilic syndrome"
* ICD10CM#D72.119	"Hypereosinophilic syndrome [HES], unspecified"

ValueSet:  CarcinomaInSituDisorderVS
Id: mcode-carcinoma-in-situ-disorder-vs
Title: "Carcinoma In-Situ Disorder Value Set"
Description:    "Types of carcinoma in-situ, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system SCT where concept is-a #109355002 "Carcinoma in situ (disorder)"
* ICD10CM#D00 "CARCINOMA IN SITU OF ORAL CAVITY, ESOPHAGUS AND STOMACH"
* ICD10CM#D00.0 "Carcinoma in situ of lip, oral cavity and pharynx"
* ICD10CM#D00.00 "Carcinoma in situ of oral cavity, unspecified site"
* ICD10CM#D00.01 "Carcinoma in situ of labial mucosa and vermilion border"
* ICD10CM#D00.02 "Carcinoma in situ of buccal mucosa"
* ICD10CM#D00.03 "Carcinoma in situ of gingiva and edentulous alveolar ridge"
* ICD10CM#D00.04 "Carcinoma in situ of soft palate"
* ICD10CM#D00.05 "Carcinoma in situ of hard palate"
* ICD10CM#D00.06 "Carcinoma in situ of floor of mouth"
* ICD10CM#D00.07 "Carcinoma in situ of tongue"
* ICD10CM#D00.08 "Carcinoma in situ of pharynx"
* ICD10CM#D00.1 "Carcinoma in situ of esophagus"
* ICD10CM#D00.2 "Carcinoma in situ of stomach"
* ICD10CM#D01 "CARCINOMA IN SITU OF OTHER AND UNSPECIFIED DIGESTIVE ORGANS"
* ICD10CM#D01.0 "Carcinoma in situ of colon"
* ICD10CM#D01.1 "Carcinoma in situ of rectosigmoid junction"
* ICD10CM#D01.2 "Carcinoma in situ of rectum"
* ICD10CM#D01.3 "Carcinoma in situ of anus and anal canal"
* ICD10CM#D01.4 "Carcinoma in situ of other and unspecified parts of intestine"
* ICD10CM#D01.40 "Carcinoma in situ of unspecified part of intestine"
* ICD10CM#D01.49 "Carcinoma in situ of other parts of intestine"
* ICD10CM#D01.5 "Carcinoma in situ of liver, gallbladder and bile ducts"
* ICD10CM#D01.7 "Carcinoma in situ of other specified digestive organs"
* ICD10CM#D01.9 "Carcinoma in situ of digestive organ, unspecified"
* ICD10CM#D02 "CARCINOMA IN SITU OF MIDDLE EAR AND RESPIRATORY SYSTEM"
* ICD10CM#D02.0 "Carcinoma in situ of larynx"
* ICD10CM#D02.1 "Carcinoma in situ of trachea"
* ICD10CM#D02.2 "Carcinoma in situ of bronchus and lung"
* ICD10CM#D02.20 "Carcinoma in situ of unspecified bronchus and lung"
* ICD10CM#D02.21 "Carcinoma in situ of right bronchus and lung"
* ICD10CM#D02.22 "Carcinoma in situ of left bronchus and lung"
* ICD10CM#D02.3 "Carcinoma in situ of other parts of respiratory system"
* ICD10CM#D02.4 "Carcinoma in situ of respiratory system, unspecified"
// Misc Carcinoma In-Situ from ECR
* ICD10CM#D05 "CARCINOMA IN SITU OF BREAST"
* ICD10CM#D05.0 "Lobular carcinoma in situ of breast"
* ICD10CM#D05.00 "Lobular carcinoma in situ of unspecified breast"
* ICD10CM#D05.01 "Lobular carcinoma in situ of right breast"
* ICD10CM#D05.02 "Lobular carcinoma in situ of left breast"
* ICD10CM#D05.1 "Intraductal carcinoma in situ of breast"
* ICD10CM#D05.10 "Intraductal carcinoma in situ of unspecified breast"
* ICD10CM#D05.11 "Intraductal carcinoma in situ of right breast"
* ICD10CM#D05.12 "Intraductal carcinoma in situ of left breast"
* ICD10CM#D05.8 "Other specified type of carcinoma in situ of breast"
* ICD10CM#D05.80 "Other specified type of carcinoma in situ of unspecified breast"
* ICD10CM#D05.81 "Other specified type of carcinoma in situ of right breast"
* ICD10CM#D05.82 "Other specified type of carcinoma in situ of left breast"
* ICD10CM#D05.9 "Unspecified type of carcinoma in situ of breast"
* ICD10CM#D05.90 "Unspecified type of carcinoma in situ of unspecified breast"
* ICD10CM#D05.91 "Unspecified type of carcinoma in situ of right breast"
* ICD10CM#D05.92 "Unspecified type of carcinoma in situ of left breast"
* ICD10CM#D07 "CARCINOMA IN SITU OF OTHER AND UNSPECIFIED GENITAL ORGANS"
* ICD10CM#D07.0 "Carcinoma in situ of endometrium"
* ICD10CM#D07.1 "Carcinoma in situ of vulva"
* ICD10CM#D07.2 "Carcinoma in situ of vagina"
* ICD10CM#D07.3 "Carcinoma in situ of other and unspecified female genital organs"
* ICD10CM#D07.30 "Carcinoma in situ of unspecified female genital organs"
* ICD10CM#D07.39 "Carcinoma in situ of other female genital organs"
* ICD10CM#D07.4 "Carcinoma in situ of penis"
* ICD10CM#D07.6 "Carcinoma in situ of other and unspecified male genital organs"
* ICD10CM#D07.60 "Carcinoma in situ of unspecified male genital organs"
* ICD10CM#D07.61 "Carcinoma in situ of scrotum"
* ICD10CM#D07.69 "Carcinoma in situ of other male genital organs"
* ICD10CM#D09 "CARCINOMA IN SITU OF OTHER AND UNSPECIFIED SITES"
* ICD10CM#D09.0 "Carcinoma in situ of bladder"
* ICD10CM#D09.1 "Carcinoma in situ of other and unspecified urinary organs"
* ICD10CM#D09.10 "Carcinoma in situ of unspecified urinary organ"
* ICD10CM#D09.19 "Carcinoma in situ of other urinary organs"
* ICD10CM#D09.2 "Carcinoma in situ of eye"
* ICD10CM#D09.20 "Carcinoma in situ of unspecified eye"
* ICD10CM#D09.21 "Carcinoma in situ of right eye"
* ICD10CM#D09.22 "Carcinoma in situ of left eye"
* ICD10CM#D09.3 "Carcinoma in situ of thyroid and other endocrine glands"
* ICD10CM#D09.8 "Carcinoma in situ of other specified sites"
* ICD10CM#D09.9 "Carcinoma in situ, unspecified"

ValueSet:  BenignUncertainNeoplasmBrainCNSDisorderVS
Id: mcode-benign-uncertain-neoplasm-brain-cns-disorder-vs
Title: "Benign Neoplasm of Brain and CNS Disorder Value Set"
Description:    "Types of benign neoplasms and neoplasms of uncertain behavior of the brain and central nervous system, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system SCT where concept is-a #93468003 "Hemangioma of intracranial structure (disorder)"
* include codes from system SCT where concept is-a #109913001 "Benign neoplasm of meninges (disorder)"
* include codes from system SCT where concept is-a #92030004 "Benign neoplasm of brain (disorder)"
* include codes from system SCT where concept is-a #92048008 "Benign neoplasm of central nervous system (disorder)"
* include codes from system SCT where concept is-a #92296004 "Benign neoplasm of pituitary gland (disorder)" // includes craniopharyngeal duct
* include codes from system SCT where concept is-a #92294001 "Benign neoplasm of pineal gland (disorder)"
* include codes from system SCT where concept is-a #94963005 "Neoplasm of uncertain behavior of nervous system (disorder)"
* include codes from system SCT where concept is-a #94767002 "Neoplasm of uncertain behavior of brain (disorder)"
* include codes from system SCT where concept is-a #95002008 "Neoplasm of uncertain behavior of pineal gland (disorder)"
* include codes from system SCT where concept is-a #95004009 "Neoplasm of uncertain behavior of pituitary gland (disorder)" // includes craniopharyngeal duct
* ICD10CM#D18.02 "Hemangioma of intracranial structures"
* ICD10CM#D32 "BENIGN NEOPLASM OF MENINGES"
* ICD10CM#D32.0 "Benign neoplasm of cerebral meninges"
* ICD10CM#D32.1 "Benign neoplasm of spinal meninges"
* ICD10CM#D32.9 "Benign neoplasm of meninges, unspecified"
* ICD10CM#D33 "BENIGN NEOPLASM OF BRAIN AND OTHER PARTS OF CENTRAL NERVOUS SYSTEM"
* ICD10CM#D33.0 "Benign neoplasm of brain, supratentorial"
* ICD10CM#D33.1 "Benign neoplasm of brain, infratentorial"
* ICD10CM#D33.2 "Benign neoplasm of brain, unspecified"
* ICD10CM#D33.3 "Benign neoplasm of cranial nerves"
* ICD10CM#D33.4 "Benign neoplasm of spinal cord"
* ICD10CM#D33.7 "Benign neoplasm of other specified parts of central nervous system"
* ICD10CM#D33.9 "Benign neoplasm of central nervous system, unspecified"
* ICD10CM#D35.2 "Benign neoplasm of pituitary gland"
* ICD10CM#D35.3 "Benign neoplasm of craniopharyngeal duct"
* ICD10CM#D35.4 "Benign neoplasm of pineal gland"
* ICD10CM#D42.0 "Neoplasm of uncertain behavior of cerebral meninges"
* ICD10CM#D42.1 "Neoplasm of uncertain behavior of spinal meninges"
* ICD10CM#D42.9 "Neoplasm of uncertain behavior of meninges, unspecified"
* ICD10CM#D43.0 "Neoplasm of uncertain behavior of brain, supratentorial"
* ICD10CM#D43.1 "Neoplasm of uncertain behavior of brain, infratentorial"
* ICD10CM#D43.2 "Neoplasm of uncertain behavior of brain, unspecified"
* ICD10CM#D43.3 "Neoplasm of uncertain behavior of cranial nerves"
* ICD10CM#D43.4 "Neoplasm of uncertain behavior of spinal cord"
* ICD10CM#D43.8 "Neoplasm of uncertain behavior of other specified parts of central nervous system"
* ICD10CM#D43.9 "Neoplasm of uncertain behavior of central nervous system, unspecified"
* ICD10CM#D44.3 "Neoplasm of uncertain behavior of pituitary gland"
* ICD10CM#D44.4 "Neoplasm of uncertain behavior of craniopharyngeal duct"
* ICD10CM#D44.5 "Neoplasm of uncertain behavior of pineal gland"


// This VS is big, so I put it last in the file (order doesn't matter to FSH)

ValueSet:  PrimaryCancerDisorderVS
Id: mcode-primary-cancer-disorder-vs
Title: "Primary Cancer Disorder Value Set"
Description:    "Types of primary malignant neoplastic disease, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from valueset PrimaryMalignantNeoplasmDisorderVS
* include codes from valueset HypereosinophilicSyndromeDisorderVS
* include codes from valueset CarcinomaInSituDisorderVS
* include codes from valueset MelanomaInSituDisorderVS
* include codes from valueset BenignUncertainNeoplasmBrainCNSDisorderVS
* include codes from valueset CytologicEvidenceOfMalignancyVS

ValueSet: CancerDisorderVS
Id: mcode-cancer-disorder-vs
Title: "Cancer Disorder Value Set"
Description:   "A broad cancer-related value set containing both primary and secondary tumor types, with codes from ICD-10 and SNOMED CT, including both diagnosis and histology/morphology/behavior codes. ICD-O-3 morphology codes may also be used and are considered conformant to the specification. For SNOMED, the value set includes all codes descending from 363346000 'Malignant neoplastic disease (disorder)' and 108369006 'Neoplasm (morphologic abnormality)'."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from valueset PrimaryCancerDisorderVS
* include codes from valueset SecondaryCancerDisorderVS
* include codes from valueset HistologyMorphologyBehaviorVS


ValueSet:   HistologyMorphologyBehaviorVS
Id: mcode-histology-morphology-behavior-vs
Title: "Histology Morphology Behavior Value Set"
Description: "Codes representing the structure, arrangement, and behavioral characteristics of malignant neoplasms, and cancer cells. Inclusion criteria: in situ neoplasms and malignant neoplasms. Exclusion criteria: benign neoplasms and neoplasms of unspecified behavior. Note: ICD-O-3 morphology codes are referenced in the logical definition but not expanded in the value set for intellectual property reasons. For primary cancers, the ICD-O-3 behavior suffix should be /1, /2, or /3. For secondary cancers, the ICD-O-3 behavior suffix should be /6."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system ICDO3
* include codes from system SCT where concept is-a #1240414004 "Malignant neoplasm (morphologic abnormality)"
* include codes from system SCT where concept is-a #1187138006 "Carcinoma in situ (morphologic abnormality)"
* include codes from system SCT where concept is-a #60286009 "Adenocarcinoma in situ in adenomatous polyp (morphologic abnormality))"
* SCT#399878004 "Malignant neoplasm with pilar differentiation (morphologic abnormality)"
* SCT#253035009 "In situ melanocytic morphology (morphologic abnormality)"
* exclude codes from system SCT where concept is-a #450893003 "Papillary neoplasm, pancreatobiliary-type, with high grade intraepithelial neoplasia (morphologic abnormality)"
* exclude codes from system SCT where concept is-a #128640002 "Glandular intraepithelial neoplasia, grade III (morphologic abnormality)"
* exclude codes from system SCT where concept is-a #450890000 "Glandular intraepithelial neoplasia, low grade (morphologic abnormality)"
* exclude codes from system SCT where concept is-a #703548001 "Endometrioid intraepithelial neoplasia (morphologic abnormality)"

ValueSet:  PrimaryMalignantNeoplasmDisorderVS
Id: mcode-primary-malignant-neoplasm-disorder-vs
Title: "Primary Malignant Neoplasm Disorder Value Set"
Description:    "Types of primary malignant neoplasms, coded in SNOMED CT or ICD-10-CM."
* insert SNOMEDCopyrightForVS
* ^extension[FMM].valueInteger = 4
* include codes from system SCT where concept is-a #363346000 "Malignant neoplastic disease (disorder)"
* exclude codes from system SCT where concept is-a #128462008  "Secondary malignant neoplastic disease (disorder)"
* ICD10CM#C00.0 "Malignant neoplasm of external upper lip"
* ICD10CM#C00.1 "Malignant neoplasm of external lower lip"
* ICD10CM#C00.2 "Malignant neoplasm of external lip, unspecified"
* ICD10CM#C00.3 "Malignant neoplasm of upper lip, inner aspect"
* ICD10CM#C00.4 "Malignant neoplasm of lower lip, inner aspect"
* ICD10CM#C00.5 "Malignant neoplasm of lip, unspecified, inner aspect"
* ICD10CM#C00.6 "Malignant neoplasm of commissure of lip, unspecified"
* ICD10CM#C00.8 "Malignant neoplasm of overlapping sites of lip"
* ICD10CM#C00.9 "Malignant neoplasm of lip, unspecified"
* ICD10CM#C01 "MALIGNANT NEOPLASM OF BASE OF TONGUE"
* ICD10CM#C02.0 "Malignant neoplasm of dorsal surface of tongue"
* ICD10CM#C02.1 "Malignant neoplasm of border of tongue"
* ICD10CM#C02.2 "Malignant neoplasm of ventral surface of tongue"
* ICD10CM#C02.3 "Malignant neoplasm of anterior two-thirds of tongue, part unspecified"
* ICD10CM#C02.4 "Malignant neoplasm of lingual tonsil"
* ICD10CM#C02.8 "Malignant neoplasm of overlapping sites of tongue"
* ICD10CM#C02.9 "Malignant neoplasm of tongue, unspecified"
* ICD10CM#C03.0 "Malignant neoplasm of upper gum"
* ICD10CM#C03.1 "Malignant neoplasm of lower gum"
* ICD10CM#C03.9 "Malignant neoplasm of gum, unspecified"
* ICD10CM#C04.0 "Malignant neoplasm of anterior floor of mouth"
* ICD10CM#C04.1 "Malignant neoplasm of lateral floor of mouth"
* ICD10CM#C04.8 "Malignant neoplasm of overlapping sites of floor of mouth"
* ICD10CM#C04.9 "Malignant neoplasm of floor of mouth, unspecified"
* ICD10CM#C05.0 "Malignant neoplasm of hard palate"
* ICD10CM#C05.1 "Malignant neoplasm of soft palate"
* ICD10CM#C05.2 "Malignant neoplasm of uvula"
* ICD10CM#C05.8 "Malignant neoplasm of overlapping sites of palate"
* ICD10CM#C05.9 "Malignant neoplasm of palate, unspecified"
* ICD10CM#C06.0 "Malignant neoplasm of cheek mucosa"
* ICD10CM#C06.1 "Malignant neoplasm of vestibule of mouth"
* ICD10CM#C06.2 "Malignant neoplasm of retromolar area"
* ICD10CM#C06.80 "Malignant neoplasm of overlapping sites of unspecified parts of mouth"
* ICD10CM#C06.89 "Malignant neoplasm of overlapping sites of other parts of mouth"
* ICD10CM#C06.9 "Malignant neoplasm of mouth, unspecified"
* ICD10CM#C07 "MALIGNANT NEOPLASM OF PAROTID GLAND"
* ICD10CM#C08.0 "Malignant neoplasm of submandibular gland"
* ICD10CM#C08.1 "Malignant neoplasm of sublingual gland"
* ICD10CM#C08.9 "Malignant neoplasm of major salivary gland, unspecified"
* ICD10CM#C09.0 "Malignant neoplasm of tonsillar fossa"
* ICD10CM#C09.1 "Malignant neoplasm of tonsillar pillar (anterior) (posterior)"
* ICD10CM#C09.8 "Malignant neoplasm of overlapping sites of tonsil"
* ICD10CM#C09.9 "Malignant neoplasm of tonsil, unspecified"
* ICD10CM#C10.0 "Malignant neoplasm of vallecula"
* ICD10CM#C10.1 "Malignant neoplasm of anterior surface of epiglottis"
* ICD10CM#C10.2 "Malignant neoplasm of lateral wall of oropharynx"
* ICD10CM#C10.3 "Malignant neoplasm of posterior wall of oropharynx"
* ICD10CM#C10.4 "Malignant neoplasm of branchial cleft"
* ICD10CM#C10.8 "Malignant neoplasm of overlapping sites of oropharynx"
* ICD10CM#C10.9 "Malignant neoplasm of oropharynx, unspecified"
* ICD10CM#C11.0 "Malignant neoplasm of superior wall of nasopharynx"
* ICD10CM#C11.1 "Malignant neoplasm of posterior wall of nasopharynx"
* ICD10CM#C11.2 "Malignant neoplasm of lateral wall of nasopharynx"
* ICD10CM#C11.3 "Malignant neoplasm of anterior wall of nasopharynx"
* ICD10CM#C11.8 "Malignant neoplasm of overlapping sites of nasopharynx"
* ICD10CM#C11.9 "Malignant neoplasm of nasopharynx, unspecified"
* ICD10CM#C12 "MALIGNANT NEOPLASM OF PYRIFORM SINUS"
* ICD10CM#C13.0 "Malignant neoplasm of postcricoid region"
* ICD10CM#C13.1 "Malignant neoplasm aryepiglottic fold, hypopharyngeal aspect"
* ICD10CM#C13.2 "Malignant neoplasm of posterior wall of hypopharynx"
* ICD10CM#C13.8 "Malignant neoplasm of overlapping sites of hypopharynx"
* ICD10CM#C13.9 "Malignant neoplasm of hypopharynx, unspecified"
* ICD10CM#C14.0 "Malignant neoplasm of pharynx, unspecified"
* ICD10CM#C14.2 "Malignant neoplasm of Waldeyer's ring"
* ICD10CM#C14.8 "Malignant neoplasm of overlapping sites of lip, oral cavity and pharynx"
* ICD10CM#C15.3 "Malignant neoplasm of upper third of esophagus"
* ICD10CM#C15.4 "Malignant neoplasm of middle third of esophagus"
* ICD10CM#C15.5 "Malignant neoplasm of lower third of esophagus"
* ICD10CM#C15.8 "Malignant neoplasm of overlapping sites esophagus"
* ICD10CM#C15.9 "Malignant neoplasm of esophagus, unspecified"
* ICD10CM#C16.0 "Malignant neoplasm of cardia"
* ICD10CM#C16.1 "Malignant neoplasm of fundus of stomach"
* ICD10CM#C16.2 "Malignant neoplasm of body of stomach"
* ICD10CM#C16.3 "Malignant neoplasm of pyloric antrum"
* ICD10CM#C16.4 "Malignant neoplasm of pylorus"
* ICD10CM#C16.5 "Malignant neoplasm of lesser curvature of stomach, unspecified"
* ICD10CM#C16.6 "Malignant neoplasm of greater curvature of stomach, unspecified"
* ICD10CM#C16.8 "Malignant neoplasm of overlapping sites of stomach"
* ICD10CM#C16.9 "Malignant neoplasm of stomach, unspecified"
* ICD10CM#C17.0 "Malignant neoplasm of duodenum"
* ICD10CM#C17.1 "Malignant neoplasm of jejunum"
* ICD10CM#C17.2 "Malignant neoplasm of ileum"
* ICD10CM#C17.3 "Meckel's diverticulum, malignant"
* ICD10CM#C17.8 "Malignant neoplasm of overlapping sites of small intestine"
* ICD10CM#C17.9 "Malignant neoplasm of small intestine, unspecified"
* ICD10CM#C18.0 "Malignant neoplasm of cecum"
* ICD10CM#C18.1 "Malignant neoplasm of appendix"
* ICD10CM#C18.2 "Malignant neoplasm of ascending colon"
* ICD10CM#C18.3 "Malignant neoplasm of hepatic flexure"
* ICD10CM#C18.4 "Malignant neoplasm of transverse colon"
* ICD10CM#C18.5 "Malignant neoplasm of splenic flexure"
* ICD10CM#C18.6 "Malignant neoplasm of descending colon"
* ICD10CM#C18.7 "Malignant neoplasm of sigmoid colon"
* ICD10CM#C18.8 "Malignant neoplasm of overlapping sites of colon"
* ICD10CM#C18.9 "Malignant neoplasm of colon, unspecified"
* ICD10CM#C19 "MALIGNANT NEOPLASM OF RECTOSIGMOID JUNCTION"
* ICD10CM#C20 "MALIGNANT NEOPLASM OF RECTUM"
* ICD10CM#C21.0 "Malignant neoplasm of anus, unspecified"
* ICD10CM#C21.1 "Malignant neoplasm of anal canal"
* ICD10CM#C21.2 "Malignant neoplasm of cloacogenic zone"
* ICD10CM#C21.8 "Malignant neoplasm of overlapping sites of rectum, anus and anal canal"
* ICD10CM#C22.0 "Liver cell carcinoma"
* ICD10CM#C22.1 "Intrahepatic bile duct carcinoma"
* ICD10CM#C22.2 "Hepatoblastoma"
* ICD10CM#C22.3 "Angiosarcoma of liver"
* ICD10CM#C22.4 "Other sarcomas of liver"
* ICD10CM#C22.7 "Other specified carcinomas of liver"
* ICD10CM#C22.8 "Malignant neoplasm of liver, primary, unspecified as to type"
* ICD10CM#C22.9 "Malignant neoplasm of liver, not specified as primary or secondary"
* ICD10CM#C23 "MALIGNANT NEOPLASM OF GALLBLADDER"
* ICD10CM#C24.0 "Malignant neoplasm of extrahepatic bile duct"
* ICD10CM#C24.1 "Malignant neoplasm of Ampulla of Vater"
* ICD10CM#C24.8 "Malignant neoplasm of overlapping sites of biliary tract"
* ICD10CM#C24.9 "Malignant neoplasm of biliary tract, unspecified"
* ICD10CM#C25.0 "Malignant neoplasm of head of pancreas"
* ICD10CM#C25.1 "Malignant neoplasm of body of pancreas"
* ICD10CM#C25.2 "Malignant neoplasm of tail of pancreas"
* ICD10CM#C25.3 "Malignant neoplasm of pancreatic duct"
* ICD10CM#C25.4 "Malignant neoplasm of endocrine pancreas"
* ICD10CM#C25.7 "Malignant neoplasm of other parts of pancreas"
* ICD10CM#C25.8 "Malignant neoplasm of overlapping sites of pancreas"
* ICD10CM#C25.9 "Malignant neoplasm of pancreas, unspecified"
* ICD10CM#C26.0 "Malignant neoplasm of intestinal tract, part unspecified"
* ICD10CM#C26.1 "Malignant neoplasm of spleen"
* ICD10CM#C26.9 "Malignant neoplasm of ill-defined sites within the digestive system"
* ICD10CM#C30.0 "Malignant neoplasm of nasal cavity"
* ICD10CM#C30.1 "Malignant neoplasm of middle ear"
* ICD10CM#C31.0 "Malignant neoplasm of maxillary sinus"
* ICD10CM#C31.1 "Malignant neoplasm of ethmoidal sinus"
* ICD10CM#C31.2 "Malignant neoplasm of frontal sinus"
* ICD10CM#C31.3 "Malignant neoplasm of sphenoid sinus"
* ICD10CM#C31.8 "Malignant neoplasm of overlapping sites of accessory sinuses"
* ICD10CM#C31.9 "Malignant neoplasm of accessory sinus, unspecified"
* ICD10CM#C32.0 "Malignant neoplasm of glottis"
* ICD10CM#C32.1 "Malignant neoplasm of supraglottis"
* ICD10CM#C32.2 "Malignant neoplasm of subglottis"
* ICD10CM#C32.3 "Malignant neoplasm of laryngeal cartilage"
* ICD10CM#C32.8 "Malignant neoplasm of overlapping sites of larynx"
* ICD10CM#C32.9 "Malignant neoplasm of larynx, unspecified"
* ICD10CM#C33 "MALIGNANT NEOPLASM OF TRACHEA"
* ICD10CM#C34.00 "Malignant neoplasm of unspecified main bronchus"
* ICD10CM#C34.01 "Malignant neoplasm of right main bronchus"
* ICD10CM#C34.02 "Malignant neoplasm of left main bronchus"
* ICD10CM#C34.10 "Malignant neoplasm of upper lobe, unspecified bronchus or lung"
* ICD10CM#C34.11 "Malignant neoplasm of upper lobe, right bronchus or lung"
* ICD10CM#C34.12 "Malignant neoplasm of upper lobe, left bronchus or lung"
* ICD10CM#C34.2 "Malignant neoplasm of middle lobe, bronchus or lung"
* ICD10CM#C34.30 "Malignant neoplasm of lower lobe, unspecified bronchus or lung"
* ICD10CM#C34.31 "Malignant neoplasm of lower lobe, right bronchus or lung"
* ICD10CM#C34.32 "Malignant neoplasm of lower lobe, left bronchus or lung"
* ICD10CM#C34.80 "Malignant neoplasm of overlapping sites of unspecified bronchus and lung"
* ICD10CM#C34.81 "Malignant neoplasm of overlapping sites of right bronchus and lung"
* ICD10CM#C34.82 "Malignant neoplasm of overlapping sites of left bronchus and lung"
* ICD10CM#C34.90 "Malignant neoplasm of unspecified part of unspecified bronchus or lung"
* ICD10CM#C34.91 "Malignant neoplasm of unspecified part of right bronchus or lung"
* ICD10CM#C34.92 "Malignant neoplasm of unspecified part of left bronchus or lung"
* ICD10CM#C37 "MALIGNANT NEOPLASM OF THYMUS"
* ICD10CM#C38.0 "Malignant neoplasm of heart"
* ICD10CM#C38.1 "Malignant neoplasm of anterior mediastinum"
* ICD10CM#C38.2 "Malignant neoplasm of posterior mediastinum"
* ICD10CM#C38.3 "Malignant neoplasm of mediastinum, part unspecified"
* ICD10CM#C38.4 "Malignant neoplasm of pleura"
* ICD10CM#C38.8 "Malignant neoplasm of overlapping sites of heart, mediastinum and pleura"
* ICD10CM#C39.0 "Malignant neoplasm of upper respiratory tract, part unspecified"
* ICD10CM#C39.9 "Malignant neoplasm of lower respiratory tract, part unspecified"
* ICD10CM#C40.00 "Malignant neoplasm of scapula and long bones of unspecified upper limb"
* ICD10CM#C40.01 "Malignant neoplasm of scapula and long bones of right upper limb"
* ICD10CM#C40.02 "Malignant neoplasm of scapula and long bones of left upper limb"
* ICD10CM#C40.10 "Malignant neoplasm of short bones of unspecified upper limb"
* ICD10CM#C40.11 "Malignant neoplasm of short bones of right upper limb"
* ICD10CM#C40.12 "Malignant neoplasm of short bones of left upper limb"
* ICD10CM#C40.20 "Malignant neoplasm of long bones of unspecified lower limb"
* ICD10CM#C40.21 "Malignant neoplasm of long bones of right lower limb"
* ICD10CM#C40.22 "Malignant neoplasm of long bones of left lower limb"
* ICD10CM#C40.30 "Malignant neoplasm of short bones of unspecified lower limb"
* ICD10CM#C40.31 "Malignant neoplasm of short bones of right lower limb"
* ICD10CM#C40.32 "Malignant neoplasm of short bones of left lower limb"
* ICD10CM#C40.80 "Malignant neoplasm of overlapping sites of bone and articular cartilage of unspecified limb"
* ICD10CM#C40.81 "Malignant neoplasm of overlapping sites of bone and articular cartilage of right limb"
* ICD10CM#C40.82 "Malignant neoplasm of overlapping sites of bone and articular cartilage of left limb"
* ICD10CM#C40.90 "Malignant neoplasm of unspecified bones and articular cartilage of unspecified limb"
* ICD10CM#C40.91 "Malignant neoplasm of unspecified bones and articular cartilage of right limb"
* ICD10CM#C40.92 "Malignant neoplasm of unspecified bones and articular cartilage of left limb"
* ICD10CM#C41.0 "Malignant neoplasm of bones of skull and face"
* ICD10CM#C41.1 "Malignant neoplasm of mandible"
* ICD10CM#C41.2 "Malignant neoplasm of vertebral column"
* ICD10CM#C41.3 "Malignant neoplasm of ribs, sternum and clavicle"
* ICD10CM#C41.4 "Malignant neoplasm of pelvic bones, sacrum and coccyx"
* ICD10CM#C41.9 "Malignant neoplasm of unspecified bones and articular cartilage of limb"
* ICD10CM#C43.0 "Malignant melanoma of lip"
* ICD10CM#C43.10 "Malignant melanoma of unspecified eyelid, including canthus"
* ICD10CM#C43.111 "Malignant melanoma of right upper eyelid, including canthus"
* ICD10CM#C43.112 "Malignant melanoma of right lower eyelid, including canthus"
* ICD10CM#C43.121 "Malignant melanoma of left upper eyelid, including canthus"
* ICD10CM#C43.122 "Malignant melanoma of left lower eyelid, including canthus"
* ICD10CM#C43.20 "Malignant melanoma of unspecified ear and external auricular canal"
* ICD10CM#C43.21 "Malignant melanoma of right ear and external auricular canal"
* ICD10CM#C43.22 "Malignant melanoma of left ear and external auricular canal"
* ICD10CM#C43.30 "Malignant melanoma of unspecified part of face"
* ICD10CM#C43.31 "Malignant melanoma of nose"
* ICD10CM#C43.39 "Malignant melanoma of other parts of face"
* ICD10CM#C43.4 "Malignant melanoma of scalp and neck"
* ICD10CM#C43.51 "Malignant melanoma of anal skin"
* ICD10CM#C43.52 "Malignant melanoma of skin of breast"
* ICD10CM#C43.59 "Malignant melanoma of other part of trunk"
* ICD10CM#C43.60 "Malignant melanoma of unspecified upper limb, including shoulder"
* ICD10CM#C43.61 "Malignant melanoma of right upper limb, including shoulder"
* ICD10CM#C43.62 "Malignant melanoma of left upper limb, including shoulder"
* ICD10CM#C43.70 "Malignant melanoma of unspecified lower limb, including hip"
* ICD10CM#C43.71 "Malignant melanoma of right lower limb, including hip"
* ICD10CM#C43.72 "Malignant melanoma of left lower limb, including hip"
* ICD10CM#C43.8 "Malignant melanoma of overlapping sites of skin"
* ICD10CM#C43.9 "Malignant melanoma of skin, unspecified"
* ICD10CM#C44.131 "Sebaceous cell carcinoma of skin of unspecified eyelid, including canthus"
* ICD10CM#C44.1321 "Sebaceous cell carcinoma of skin of right upper eyelid, including canthus"
* ICD10CM#C44.1322 "Sebaceous cell carcinoma of skin of right lower eyelid, including canthus"
* ICD10CM#C44.1391 "Sebaceous cell carcinoma of skin of left upper eyelid, including canthus"
* ICD10CM#C44.1392 "Sebaceous cell carcinoma of skin of left lower eyelid, including canthus"
* ICD10CM#C44.90 "Unspecified malignant neoplasm of skin, unspecified"
* ICD10CM#C44.99 "Other specified malignant neoplasm of skin, unspecified"
* ICD10CM#C45.0 "Mesothelioma of pleura"
* ICD10CM#C45.1 "Mesothelioma of peritoneum"
* ICD10CM#C45.2 "Mesothelioma of pericardium"
* ICD10CM#C45.7 "Mesothelioma of other sites"
* ICD10CM#C45.9 "Mesothelioma, unspecified"
* ICD10CM#C46.0 "Kaposi's sarcoma of skin"
* ICD10CM#C46.1 "Kaposi's sarcoma of soft tissue"
* ICD10CM#C46.2 "Kaposi's sarcoma of palate"
* ICD10CM#C46.3 "Kaposi's sarcoma of lymph nodes"
* ICD10CM#C46.4 "Kaposi’s sarcoma of gastrointestinal sites"
* ICD10CM#C46.50 "Kaposi's sarcoma of unspecified lung"
* ICD10CM#C46.51 "Kaposi's sarcoma of right lung"
* ICD10CM#C46.52 "Kaposi's sarcoma of left lung"
* ICD10CM#C46.7 "Kaposi's sarcoma of other sites"
* ICD10CM#C46.9 "Kaposi's sarcoma, unspecified"
* ICD10CM#C47.0 "Malignant neoplasm of peripheral nerves of head, face and neck"
* ICD10CM#C47.1 "Malignant neoplasm of peripheral nerves of upper limb, including shoulder"
* ICD10CM#C47.10 "Malignant neoplasm of peripheral nerves of unspecified upper limb, including shoulder"
* ICD10CM#C47.11 "Malignant neoplasm of peripheral nerves of right upper limb, including shoulder"
* ICD10CM#C47.12 "Malignant neoplasm of peripheral nerves of left upper limb, including shoulder"
* ICD10CM#C47.20 "Malignant neoplasm of peripheral nerves of unspecified lower limb, including hip"
* ICD10CM#C47.21 "Malignant neoplasm of peripheral nerves of right lower limb, including hip"
* ICD10CM#C47.22 "Malignant neoplasm of peripheral nerves of left lower limb, including hip"
* ICD10CM#C47.3 "Malignant neoplasm of peripheral nerves of thorax"
* ICD10CM#C47.4 "Malignant neoplasm of peripheral nerves of abdomen"
* ICD10CM#C47.5 "Malignant neoplasm of peripheral nerves of pelvis"
* ICD10CM#C47.6 "Malignant neoplasm of peripheral nerves of trunk, unspecified"
* ICD10CM#C47.8 "Malignant neoplasm of overlapping sites of peripheral nerves and autonomic nervous system"
* ICD10CM#C47.9 "Malignant neoplasm of peripheral nerves and autonomic nervous system, unspecified"
* ICD10CM#C48.0 "Malignant neoplasm of retroperitoneum"
* ICD10CM#C48.1 "Malignant neoplasm of specified parts of peritoneum"
* ICD10CM#C48.2 "Malignant neoplasm of peritoneum, unspecified"
* ICD10CM#C48.8 "Malignant neoplasm of overlapping sites of retroperitoneum and peritoneum"
* ICD10CM#C49.0 "Malignant neoplasm of connective and soft tissue of head, face and neck"
* ICD10CM#C49.10 "Malignant neoplasm of connective and soft tissue of unspecified upper limb, including shoulder"
* ICD10CM#C49.11 "Malignant neoplasm of connective and soft tissue of right upper limb, including shoulder"
* ICD10CM#C49.12 "Malignant neoplasm of connective and soft tissue of left upper limb, including shoulder"
* ICD10CM#C49.20 "Malignant neoplasm of connective and soft tissue of unspecified lower limb, including hip"
* ICD10CM#C49.21 "Malignant neoplasm of connective and soft tissue of right lower limb, including hip"
* ICD10CM#C49.22 "Malignant neoplasm of connective and soft tissue of left lower limb, including hip"
* ICD10CM#C49.3 "Malignant neoplasm of connective and soft tissue of thorax"
* ICD10CM#C49.4 "Malignant neoplasm of connective and soft tissue of abdomen"
* ICD10CM#C49.5 "Malignant neoplasm of connective and soft tissue of pelvis"
* ICD10CM#C49.6 "Malignant neoplasm of connective and soft tissue of trunk, unspecified"
* ICD10CM#C49.8 "Malignant neoplasm of overlapping sites of connective and soft tissue"
* ICD10CM#C49.9 "Malignant neoplasm of connective and soft tissue, unspecified"
* ICD10CM#C49.A0 "Gastrointestinal stromal tumor, unspecified site"
* ICD10CM#C49.A1 "Gastrointestinal stromal tumor of esophagus"
* ICD10CM#C49.A2 "Gastrointestinal stromal tumor of stomach"
* ICD10CM#C49.A3 "Gastrointestinal stromal tumor of small intestine"
* ICD10CM#C49.A4 "Gastrointestinal stromal tumor of large intestine"
* ICD10CM#C49.A5 "Gastrointestinal stromal tumor of rectum"
* ICD10CM#C49.A9 "Gastrointestinal stromal tumor of other site"
* ICD10CM#C4A.0 "Merkel cell carcinoma of lip"
* ICD10CM#C4A.10 "Merkel cell carcinoma of unspecified eyelid, including canthus"
* ICD10CM#C4A.111 "Merkel cell carcinoma of right upper eyelid, including canthus"
* ICD10CM#C4A.112 "Merkel cell carcinoma of right lower eyelid, including canthus"
* ICD10CM#C4A.121 "Merkel cell carcinoma of left upper eyelid, including canthus"
* ICD10CM#C4A.122 "Merkel cell carcinoma of left lower eyelid, including canthus"
* ICD10CM#C4A.20 "Merkel cell carcinoma of unspecified ear and external auricular canal"
* ICD10CM#C4A.21 "Merkel cell carcinoma of right ear and external auricular canal"
* ICD10CM#C4A.22 "Merkel cell carcinoma of left ear and external auricular canal"
* ICD10CM#C4A.30 "Merkel cell carcinoma of unspecified part of face"
* ICD10CM#C4A.31 "Merkel cell carcinoma of nose"
* ICD10CM#C4A.39 "Merkel cell carcinoma of other parts of face"
* ICD10CM#C4A.4 "Merkel cell carcinoma of scalp and neck"
* ICD10CM#C4A.51 "Merkel cell carcinoma of anal skin"
* ICD10CM#C4A.52 "Merkel cell carcinoma of skin of breast"
* ICD10CM#C4A.59 "Merkel cell carcinoma of other part of trunk"
* ICD10CM#C4A.60 "Merkel cell carcinoma of unspecified upper limb, including shoulder"
* ICD10CM#C4A.61 "Merkel cell carcinoma of right upper limb, including shoulder"
* ICD10CM#C4A.62 "Merkel cell carcinoma of left upper limb, including shoulder"
* ICD10CM#C4A.70 "Merkel cell carcinoma of unspecified lower limb, including hip"
* ICD10CM#C4A.71 "Merkel cell carcinoma of right lower limb, including hip"
* ICD10CM#C4A.72 "Merkel cell carcinoma of left lower limb, including hip"
* ICD10CM#C4A.8 "Merkel cell carcinoma of overlapping sites"
* ICD10CM#C4A.9 "Merkel cell carcinoma, unspecified"
* ICD10CM#C50.011 "Malignant neoplasm of nipple and areola, right female breast"
* ICD10CM#C50.012 "Malignant neoplasm of nipple and areola, left female breast"
* ICD10CM#C50.019 "Malignant neoplasm of nipple and areola, unspecified female breast"
* ICD10CM#C50.021 "Malignant neoplasm of nipple and areola, right male breast"
* ICD10CM#C50.022 "Malignant neoplasm of nipple and areola, left male breast"
* ICD10CM#C50.029 "Malignant neoplasm of nipple and areola, unspecified male breast"
* ICD10CM#C50.111 "Malignant neoplasm of central portion of right female breast"
* ICD10CM#C50.112 "Malignant neoplasm of central portion of left female breast"
* ICD10CM#C50.119 "Malignant neoplasm of central portion of unspecified female breast"
* ICD10CM#C50.121 "Malignant neoplasm of central portion of right male breast"
* ICD10CM#C50.122 "Malignant neoplasm of central portion of left male breast"
* ICD10CM#C50.129 "Malignant neoplasm of central portion of unspecified male breast"
* ICD10CM#C50.211 "Malignant neoplasm of upper-inner quadrant of right female breast"
* ICD10CM#C50.212 "Malignant neoplasm of upper-inner quadrant of left female breast"
* ICD10CM#C50.219 "Malignant neoplasm of upper-inner quadrant of unspecified female breast"
* ICD10CM#C50.221 "Malignant neoplasm of upper-inner quadrant of right male breast"
* ICD10CM#C50.222 "Malignant neoplasm of upper-inner quadrant of left male breast"
* ICD10CM#C50.229 "Malignant neoplasm of upper-inner quadrant of unspecified male breast"
* ICD10CM#C50.311 "Malignant neoplasm of lower-inner quadrant of right female breast"
* ICD10CM#C50.312 "Malignant neoplasm of lower-inner quadrant of left female breast"
* ICD10CM#C50.319 "Malignant neoplasm of lower-inner quadrant of unspecified female breast"
* ICD10CM#C50.321 "Malignant neoplasm of lower-inner quadrant of right male breast"
* ICD10CM#C50.322 "Malignant neoplasm of lower-inner quadrant of left male breast"
* ICD10CM#C50.329 "Malignant neoplasm of lower-inner quadrant of unspecified male breast"
* ICD10CM#C50.411 "Malignant neoplasm of upper-outer quadrant of right female breast"
* ICD10CM#C50.412 "Malignant neoplasm of upper-outer quadrant of left female breast"
* ICD10CM#C50.419 "Malignant neoplasm of upper-outer quadrant of unspecified female breast"
* ICD10CM#C50.421 "Malignant neoplasm of upper-outer quadrant of right male breast"
* ICD10CM#C50.422 "Malignant neoplasm of upper-outer quadrant of left male breast"
* ICD10CM#C50.429 "Malignant neoplasm of upper-outer quadrant of unspecified male breast"
* ICD10CM#C50.511 "Malignant neoplasm of lower-outer quadrant of right female breast"
* ICD10CM#C50.512 "Malignant neoplasm of lower-outer quadrant of left female breast"
* ICD10CM#C50.519 "Malignant neoplasm of lower-outer quadrant of unspecified female breast"
* ICD10CM#C50.521 "Malignant neoplasm of lower-outer quadrant of right male breast"
* ICD10CM#C50.522 "Malignant neoplasm of lower-outer quadrant of left male breast"
* ICD10CM#C50.529 "Malignant neoplasm of lower-outer quadrant of unspecified male breast"
* ICD10CM#C50.611 "Malignant neoplasm of axillary tail of right female breast"
* ICD10CM#C50.612 "Malignant neoplasm of axillary tail of left female breast"
* ICD10CM#C50.619 "Malignant neoplasm of axillary tail of unspecified female breast"
* ICD10CM#C50.621 "Malignant neoplasm of axillary tail of right male breast"
* ICD10CM#C50.622 "Malignant neoplasm of axillary tail of left male breast"
* ICD10CM#C50.629 "Malignant neoplasm of axillary tail of unspecified male breast"
* ICD10CM#C50.811 "Malignant neoplasm of overlapping sites of right female breast"
* ICD10CM#C50.812 "Malignant neoplasm of overlapping sites of left female breast"
* ICD10CM#C50.819 "Malignant neoplasm of overlapping sites of unspecified female breast"
* ICD10CM#C50.821 "Malignant neoplasm of overlapping sites of right male breast"
* ICD10CM#C50.822 "Malignant neoplasm of overlapping sites of left male breast"
* ICD10CM#C50.829 "Malignant neoplasm of overlapping sites of unspecified male breast"
* ICD10CM#C50.911 "Malignant neoplasm of unspecified site of right female breast"
* ICD10CM#C50.912 "Malignant neoplasm of unspecified site of left female breast"
* ICD10CM#C50.919 "Malignant neoplasm of unspecified site of unspecified female breast"
* ICD10CM#C50.921 "Malignant neoplasm of unspecified site of right male breast"
* ICD10CM#C50.922 "Malignant neoplasm of unspecified site of left male breast"
* ICD10CM#C50.929 "Malignant neoplasm of unspecified site of unspecified male breast"
* ICD10CM#C51.0 "Malignant neoplasm of labium majus"
* ICD10CM#C51.1 "Malignant neoplasm of labium minus"
* ICD10CM#C51.2 "Malignant neoplasm of clitoris"
* ICD10CM#C51.8 "Malignant neoplasm of other specified female genital organs"
* ICD10CM#C51.9 "Malignant neoplasm of vulva, unspecified"
* ICD10CM#C52 "MALIGNANT NEOPLASM OF VAGINA"
* ICD10CM#C53.0 "Malignant neoplasm of endocervix"
* ICD10CM#C53.1 "Malignant neoplasm of exocervix"
* ICD10CM#C53.8 "Malignant neoplasm of overlapping sites of cervix uteri"
* ICD10CM#C53.9 "Malignant neoplasm of cervix uteri, unspecified"
* ICD10CM#C54.0 "Malignant neoplasm of isthmus uteri"
* ICD10CM#C54.1 "Malignant neoplasm of endometrium"
* ICD10CM#C54.2 "Malignant neoplasm of myometrium"
* ICD10CM#C54.3 "Malignant neoplasm of fundus uteri"
* ICD10CM#C54.8 "Malignant neoplasm of overlapping sites of corpus uteri"
* ICD10CM#C54.9 "Malignant neoplasm of corpus uteri, unspecified"
* ICD10CM#C55 "MALIGNANT NEOPLASM OF UTERUS, PART UNSPECIFIED"
* ICD10CM#C56.1 "Malignant neoplasm of right ovary"
* ICD10CM#C56.2 "Malignant neoplasm of left ovary"
* ICD10CM#C56.9 "Malignant neoplasm of unspecified ovary"
* ICD10CM#C57.00 "Malignant neoplasm of unspecified fallopian tube"
* ICD10CM#C57.01 "Malignant neoplasm of right fallopian tube"
* ICD10CM#C57.02 "Malignant neoplasm of left fallopian tube"
* ICD10CM#C57.10 "Malignant neoplasm of unspecified broad ligament"
* ICD10CM#C57.11 "Malignant neoplasm of right broad ligament"
* ICD10CM#C57.12 "Malignant neoplasm of left broad ligament"
* ICD10CM#C57.20 "Malignant neoplasm of unspecified round ligament"
* ICD10CM#C57.21 "Malignant neoplasm of right round ligament"
* ICD10CM#C57.22 "Malignant neoplasm of left round ligament"
* ICD10CM#C57.3 "Malignant neoplasm of parametrium"
* ICD10CM#C57.4 "Malignant neoplasm of uterine adnexa, unspecified"
* ICD10CM#C57.7 "Malignant neoplasm of overlapping sites of vulva"
* ICD10CM#C57.8 "Malignant neoplasm of overlapping sites of female genital organs"
* ICD10CM#C57.9 "Malignant neoplasm of female genital organ, unspecified"
* ICD10CM#C58 "MALIGNANT NEOPLASM OF PLACENTA"
* ICD10CM#C60.0 "Malignant neoplasm of prepuce"
* ICD10CM#C60.1 "Malignant neoplasm of glans penis"
* ICD10CM#C60.2 "Malignant neoplasm of body of penis"
* ICD10CM#C60.8 "Malignant neoplasm of overlapping sites of penis"
* ICD10CM#C60.9 "Malignant neoplasm of penis, unspecified"
* ICD10CM#C61 "MALIGNANT NEOPLASM OF PROSTATE"
* ICD10CM#C62.00 "Malignant neoplasm of unspecified undescended testis"
* ICD10CM#C62.01 "Malignant neoplasm of undescended right testis"
* ICD10CM#C62.02 "Malignant neoplasm of undescended left testis"
* ICD10CM#C62.10 "Malignant neoplasm of unspecified descended testis"
* ICD10CM#C62.11 "Malignant neoplasm of descended right testis"
* ICD10CM#C62.12 "Malignant neoplasm of descended left testis"
* ICD10CM#C62.90 "Malignant neoplasm of unspecified testis, unspecified whether descended or undescended"
* ICD10CM#C62.91 "Malignant neoplasm of right testis, unspecified whether descended or undescended"
* ICD10CM#C62.92 "Malignant neoplasm of left testis, unspecified whether descended or undescended"
* ICD10CM#C63.00 "Malignant neoplasm of unspecified epididymis"
* ICD10CM#C63.01 "Malignant neoplasm of right epididymis"
* ICD10CM#C63.02 "Malignant neoplasm of left epididymis"
* ICD10CM#C63.10 "Malignant neoplasm of unspecified spermatic cord"
* ICD10CM#C63.11 "Malignant neoplasm of right spermatic cord"
* ICD10CM#C63.12 "Malignant neoplasm of left spermatic cord"
* ICD10CM#C63.2 "Malignant neoplasm of scrotum"
* ICD10CM#C63.7 "Malignant neoplasm of other specified male genital organs"
* ICD10CM#C63.8 "Malignant neoplasm of overlapping sites of male genital organs"
* ICD10CM#C63.9 "Malignant neoplasm of male genital organ, unspecified"
* ICD10CM#C64.1 "Malignant neoplasm of right kidney, except renal pelvis"
* ICD10CM#C64.2 "Malignant neoplasm of left kidney, except renal pelvis"
* ICD10CM#C64.9 "Malignant neoplasm of unspecified kidney, except renal pelvis"
* ICD10CM#C65.1 "Malignant neoplasm of right renal pelvis"
* ICD10CM#C65.2 "Malignant neoplasm of left renal pelvis"
* ICD10CM#C65.9 "Malignant neoplasm of unspecified renal pelvis"
* ICD10CM#C66.1 "Malignant neoplasm of right ureter"
* ICD10CM#C66.2 "Malignant neoplasm of left ureter"
* ICD10CM#C66.9 "Malignant neoplasm of unspecified ureter"
* ICD10CM#C67.0 "Malignant neoplasm of trigone of bladder"
* ICD10CM#C67.1 "Malignant neoplasm of dome of bladder"
* ICD10CM#C67.2 "Malignant neoplasm of lateral wall of bladder"
* ICD10CM#C67.3 "Malignant neoplasm of anterior wall of bladder"
* ICD10CM#C67.4 "Malignant neoplasm of posterior wall of bladder"
* ICD10CM#C67.5 "Malignant neoplasm of bladder neck"
* ICD10CM#C67.6 "Malignant neoplasm of ureteric orifice"
* ICD10CM#C67.7 "Malignant neoplasm of urachus"
* ICD10CM#C67.8 "Malignant neoplasm of overlapping sites of bladder"
* ICD10CM#C67.9 "Malignant neoplasm of bladder, unspecified"
* ICD10CM#C68.0 "Malignant neoplasm of urethra"
* ICD10CM#C68.1 "Malignant neoplasm of paraurethral glands"
* ICD10CM#C68.8 "Malignant neoplasm of overlapping sites of urinary organs"
* ICD10CM#C68.9 "Malignant neoplasm of urinary organ, unspecified"
* ICD10CM#C69.00 "Malignant neoplasm of unspecified conjunctiva"
* ICD10CM#C69.01 "Malignant neoplasm of right conjunctiva"
* ICD10CM#C69.02 "Malignant neoplasm of left conjunctiva"
* ICD10CM#C69.10 "Malignant neoplasm of unspecified cornea"
* ICD10CM#C69.11 "Malignant neoplasm of right cornea"
* ICD10CM#C69.12 "Malignant neoplasm of left cornea"
* ICD10CM#C69.20 "Malignant neoplasm of unspecified retina"
* ICD10CM#C69.21 "Malignant neoplasm of right retina"
* ICD10CM#C69.22 "Malignant neoplasm of left retina"
* ICD10CM#C69.30 "Malignant neoplasm of unspecified choroid"
* ICD10CM#C69.31 "Malignant neoplasm of right choroid"
* ICD10CM#C69.32 "Malignant neoplasm of left choroid"
* ICD10CM#C69.40 "Malignant neoplasm of unspecified ciliary body"
* ICD10CM#C69.41 "Malignant neoplasm of right ciliary body"
* ICD10CM#C69.42 "Malignant neoplasm of left ciliary body"
* ICD10CM#C69.50 "Malignant neoplasm of unspecified lacrimal gland and duct"
* ICD10CM#C69.51 "Malignant neoplasm of right lacrimal gland and duct"
* ICD10CM#C69.52 "Malignant neoplasm of left lacrimal gland and duct"
* ICD10CM#C69.60 "Malignant neoplasm of unspecified orbit"
* ICD10CM#C69.61 "Malignant neoplasm of right orbit"
* ICD10CM#C69.62 "Malignant neoplasm of left orbit"
* ICD10CM#C69.80 "Malignant neoplasm of overlapping sites of unspecified eye and adnexa"
* ICD10CM#C69.81 "Malignant neoplasm of overlapping sites of right eye and adnexa"
* ICD10CM#C69.82 "Malignant neoplasm of overlapping sites of left eye and adnexa"
* ICD10CM#C69.90 "Malignant neoplasm of unspecified site of unspecified eye"
* ICD10CM#C69.91 "Malignant neoplasm of unspecified site of right eye"
* ICD10CM#C69.92 "Malignant neoplasm of unspecified site of left eye"
* ICD10CM#C70.0 "Malignant neoplasm of cerebral meninges"
* ICD10CM#C70.1 "Malignant neoplasm of spinal meninges"
* ICD10CM#C70.9 "Malignant neoplasm of meninges, unspecified"
* ICD10CM#C71.0 "Malignant neoplasm of cerebrum, except lobes and ventricles"
* ICD10CM#C71.1 "Malignant neoplasm of frontal lobe"
* ICD10CM#C71.2 "Malignant neoplasm of temporal lobe"
* ICD10CM#C71.3 "Malignant neoplasm of parietal lobe"
* ICD10CM#C71.4 "Malignant neoplasm of occipital lobe"
* ICD10CM#C71.5 "Malignant neoplasm of cerebral ventricle"
* ICD10CM#C71.6 "Malignant neoplasm of cerebellum"
* ICD10CM#C71.7 "Malignant neoplasm of brain stem"
* ICD10CM#C71.8 "Malignant neoplasm of overlapping sites of brain"
* ICD10CM#C71.9 "Malignant neoplasm of brain, unspecified"
* ICD10CM#C72.0 "Malignant neoplasm of spinal cord"
* ICD10CM#C72.1 "Malignant neoplasm of cauda equina"
* ICD10CM#C72.20 "Malignant neoplasm of unspecified olfactory nerve"
* ICD10CM#C72.21 "Malignant neoplasm of right olfactory nerve"
* ICD10CM#C72.22 "Malignant neoplasm of left olfactory nerve"
* ICD10CM#C72.30 "Malignant neoplasm of unspecified optic nerve"
* ICD10CM#C72.31 "Malignant neoplasm of right optic nerve"
* ICD10CM#C72.32 "Malignant neoplasm of left optic nerve"
* ICD10CM#C72.40 "Malignant neoplasm of unspecified acoustic nerve"
* ICD10CM#C72.41 "Malignant neoplasm of right acoustic nerve"
* ICD10CM#C72.42 "Malignant neoplasm of left acoustic nerve"
* ICD10CM#C72.50 "Malignant neoplasm of unspecified cranial nerve"
* ICD10CM#C72.59 "Malignant neoplasm of other cranial nerves"
* ICD10CM#C72.9 "Malignant neoplasm of central nervous system, unspecified"
* ICD10CM#C73 "MALIGNANT NEOPLASM OF THYROID GLAND"
* ICD10CM#C74.00 "Malignant neoplasm of cortex of unspecified adrenal gland"
* ICD10CM#C74.01 "Malignant neoplasm of cortex of right adrenal gland"
* ICD10CM#C74.02 "Malignant neoplasm of cortex of left adrenal gland"
* ICD10CM#C74.10 "Malignant neoplasm of medulla of unspecified adrenal gland"
* ICD10CM#C74.11 "Malignant neoplasm of medulla of right adrenal gland"
* ICD10CM#C74.12 "Malignant neoplasm of medulla of left adrenal gland"
* ICD10CM#C74.90 "Malignant neoplasm of unspecified part of unspecified adrenal gland"
* ICD10CM#C74.91 "Malignant neoplasm of unspecified part of right adrenal gland"
* ICD10CM#C74.92 "Malignant neoplasm of unspecified part of left adrenal gland"
* ICD10CM#C75.0 "Malignant neoplasm of parathyroid gland"
* ICD10CM#C75.1 "Malignant neoplasm of pituitary gland"
* ICD10CM#C75.2 "Malignant neoplasm of craniopharyngeal duct"
* ICD10CM#C75.3 "Malignant neoplasm of pineal gland"
* ICD10CM#C75.4 "Malignant neoplasm of carotid body"
* ICD10CM#C75.5 "Malignant neoplasm of aortic body and other paraganglia"
* ICD10CM#C75.8 "Malignant neoplasm with pluriglanduar involvement, unspecified"
* ICD10CM#C75.9 "Malignant neoplasm of endocrine gland, unspecified"
* ICD10CM#C76.0 "Malignant neoplasm of head, face and neck"
* ICD10CM#C76.1 "Malignant neoplasm of thorax"
* ICD10CM#C76.2 "Malignant neoplasm of abdomen"
* ICD10CM#C76.3 "Malignant neoplasm pelvis"
* ICD10CM#C76.40 "Malignant neoplasm of unspecified upper limb"
* ICD10CM#C76.41 "Malignant neoplasm of right upper limb"
* ICD10CM#C76.42 "Malignant neoplasm of left upper limb"
* ICD10CM#C76.50 "Malignant neoplasm of unspecified lower limb"
* ICD10CM#C76.51 "Malignant neoplasm of right lower limb"
* ICD10CM#C76.52 "Malignant neoplasm of left lower limb"
* ICD10CM#C76.8 "Malignant neoplasm of overlapping sites of other and ill-defined sites"
* ICD10CM#C7A.00 "Malignant carcinoid tumor of unspecified site"
* ICD10CM#C7A.010 "Malignant carcinoid tumor of the duodenum"
* ICD10CM#C7A.011 "Malignant carcinoid tumor of the jejunum"
* ICD10CM#C7A.012 "Malignant carcinoid tumor of the ileum"
* ICD10CM#C7A.019 "Malignant carcinoid tumor of the small intestine, unspecified portion"
* ICD10CM#C7A.020 "Malignant carcinoid tumor of the appendix"
* ICD10CM#C7A.021 "Malignant carcinoid tumor of the cecum"
* ICD10CM#C7A.022 "Malignant carcinoid tumor of the ascending colon"
* ICD10CM#C7A.023 "Malignant carcinoid tumor of the transverse colon"
* ICD10CM#C7A.024 "Malignant carcinoid tumor of the descending colon"
* ICD10CM#C7A.025 "Malignant carcinoid tumor of the sigmoid colon"
* ICD10CM#C7A.026 "Malignant carcinoid tumor of the rectum"
* ICD10CM#C7A.029 "Malignant carcinoid tumor of the large intestine, unspecified portion"
* ICD10CM#C7A.090 "Malignant carcinoid tumor of the bronchus and lung"
* ICD10CM#C7A.091 "Malignant carcinoid tumor of thymus"
* ICD10CM#C7A.092 "Malignant carcinoid tumor of the stomach"
* ICD10CM#C7A.093 "Malignant carcinoid tumor of the kidney"
* ICD10CM#C7A.094 "Malignant carcinoid tumors of the foregut NOS"
* ICD10CM#C7A.095 "Malignant carcinoid tumors of the midgut NOS"
* ICD10CM#C7A.096 "Malignant carcinoid tumors of the hindgut NOS"
* ICD10CM#C7A.098 "Malignant carcinoid tumors of other sites"
* ICD10CM#C7A.1 "Malignant poorly differentiated neuroendocrine tumors"
* ICD10CM#C7A.8 "Other malignant neuroendocrine tumors"
* ICD10CM#C80.0 "Disseminated malignant neoplasm, unspecified"
* ICD10CM#C80.1 "Malignant (primary) neoplasm, unspecified"
* ICD10CM#C80.2 "Malignant neoplasm associated with transplanted organ"
* ICD10CM#C81.00 "Nodular lymphocyte predominant Hodgkin lymphoma, unspecified site"
* ICD10CM#C81.01 "Nodular lymphocyte predominant Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C81.02 "Nodular lymphocyte predominant Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C81.03 "Nodular lymphocyte predominant Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C81.04 "Nodular lymphocyte predominant Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C81.05 "Nodular lymphocyte predominant Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C81.06 "Nodular lymphocyte predominant Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C81.07 "Nodular lymphocyte predominant Hodgkin lymphoma, spleen"
* ICD10CM#C81.08 "Nodular lymphocyte predominant Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C81.09 "Nodular lymphocyte predominant Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C81.10 "Nodular sclerosis classical Hodgkin lymphoma, unspecified site"
* ICD10CM#C81.11 "Nodular sclerosis classical Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C81.12 "Nodular sclerosis classical Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C81.13 "Nodular sclerosis classical Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C81.14 "Nodular sclerosis classical Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C81.15 "Nodular sclerosis classical Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C81.16 "Nodular sclerosis classical Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C81.17 "Nodular sclerosis classical Hodgkin lymphoma, spleen"
* ICD10CM#C81.18 "Nodular sclerosis classical Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C81.19 "Nodular sclerosis classical Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C81.20 "Mixed cellularity classical Hodgkin lymphoma, unspecified site"
* ICD10CM#C81.21 "Mixed cellularity classical Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C81.22 "Mixed cellularity classical Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C81.23 "Mixed cellularity classical Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C81.24 "Mixed cellularity classical Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C81.25 "Mixed cellularity classical Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C81.26 "Mixed cellularity classical Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C81.27 "Mixed cellularity classical Hodgkin lymphoma, spleen"
* ICD10CM#C81.28 "Mixed cellularity classical Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C81.29 "Mixed cellularity classical Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C81.30 "Lymphocyte depleted classical Hodgkin lymphoma, unspecified site"
* ICD10CM#C81.31 "Lymphocyte depleted classical Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C81.32 "Lymphocyte depleted classical Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C81.33 "Lymphocyte depleted classical Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C81.34 "Lymphocyte depleted classical Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C81.35 "Lymphocyte depleted classical Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C81.36 "Lymphocyte depleted classical Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C81.37 "Lymphocyte depleted classical Hodgkin lymphoma, spleen"
* ICD10CM#C81.38 "Lymphocyte depleted classical Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C81.39 "Lymphocyte depleted classical Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C81.40 "Lymphocyte-rich classical Hodgkin lymphoma, unspecified site"
* ICD10CM#C81.41 "Lymphocyte-rich classical Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C81.42 "Lymphocyte-rich classical Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C81.43 "Lymphocyte-rich classical Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C81.44 "Lymphocyte-rich classical Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C81.45 "Lymphocyte-rich classical Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C81.46 "Lymphocyte-rich classical Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C81.47 "Lymphocyte-rich classical Hodgkin lymphoma, spleen"
* ICD10CM#C81.48 "Lymphocyte-rich classical Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C81.49 "Lymphocyte-rich classical Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C81.70 "Other classical Hodgkin lymphoma, unspecified site"
* ICD10CM#C81.71 "Other classical Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C81.72 "Other classical Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C81.73 "Other classical Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C81.74 "Other classical Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C81.75 "Other classical Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C81.76 "Other classical Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C81.77 "Other classical Hodgkin lymphoma, spleen"
* ICD10CM#C81.78 "Other classical Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C81.79 "Other classical Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C81.90 "Hodgkin lymphoma, unspecified, unspecified site"
* ICD10CM#C81.91 "Hodgkin lymphoma, unspecified, lymph nodes of head, face, and neck"
* ICD10CM#C81.92 "Hodgkin lymphoma, unspecified, intrathoracic lymph nodes"
* ICD10CM#C81.93 "Hodgkin lymphoma, unspecified, intra-abdominal lymph nodes"
* ICD10CM#C81.94 "Hodgkin lymphoma, unspecified, lymph nodes of axilla and upper limb"
* ICD10CM#C81.95 "Hodgkin lymphoma, unspecified, lymph nodes of inguinal region and lower limb"
* ICD10CM#C81.96 "Hodgkin lymphoma, unspecified, intrapelvic lymph nodes"
* ICD10CM#C81.97 "Hodgkin lymphoma, unspecified, spleen"
* ICD10CM#C81.98 "Hodgkin lymphoma, unspecified, lymph nodes of multiple sites"
* ICD10CM#C81.99 "Hodgkin lymphoma, unspecified, extranodal and solid organ sites"
* ICD10CM#C82.00 "Follicular lymphoma grade I, unspecified site"
* ICD10CM#C82.01 "Follicular lymphoma grade I, lymph nodes of head, face, and neck"
* ICD10CM#C82.02 "Follicular lymphoma grade I, intrathoracic lymph nodes"
* ICD10CM#C82.03 "Follicular lymphoma grade I, intra-abdominal lymph nodes"
* ICD10CM#C82.04 "Follicular lymphoma grade I, lymph nodes of axilla and upper limb"
* ICD10CM#C82.05 "Follicular lymphoma grade I, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.06 "Follicular lymphoma grade I, intrapelvic lymph nodes"
* ICD10CM#C82.07 "Follicular lymphoma grade I, spleen"
* ICD10CM#C82.08 "Follicular lymphoma grade I, lymph nodes of multiple sites"
* ICD10CM#C82.09 "Follicular lymphoma grade I, extranodal and solid organ sites"
* ICD10CM#C82.10 "Follicular lymphoma grade II, unspecified site"
* ICD10CM#C82.11 "Follicular lymphoma grade II, lymph nodes of head, face, and neck"
* ICD10CM#C82.12 "Follicular lymphoma grade II, intrathoracic lymph nodes"
* ICD10CM#C82.13 "Follicular lymphoma grade II, intra-abdominal lymph nodes"
* ICD10CM#C82.14 "Follicular lymphoma grade II, lymph nodes of axilla and upper limb"
* ICD10CM#C82.15 "Follicular lymphoma grade II, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.16 "Follicular lymphoma grade II, intrapelvic lymph nodes"
* ICD10CM#C82.17 "Follicular lymphoma grade II, spleen"
* ICD10CM#C82.18 "Follicular lymphoma grade II, lymph nodes of multiple sites"
* ICD10CM#C82.19 "Follicular lymphoma grade II, extranodal and solid organ sites"
* ICD10CM#C82.20 "Follicular lymphoma grade III, unspecified, unspecified site"
* ICD10CM#C82.21 "Follicular lymphoma grade III, unspecified, lymph nodes of head, face, and neck"
* ICD10CM#C82.22 "Follicular lymphoma grade III, unspecified, intrathoracic lymph nodes"
* ICD10CM#C82.23 "Follicular lymphoma grade III, unspecified, intra-abdominal lymph nodes"
* ICD10CM#C82.24 "Follicular lymphoma grade III, unspecified, lymph nodes of axilla and upper limb"
* ICD10CM#C82.25 "Follicular lymphoma grade III, unspecified, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.26 "Follicular lymphoma grade III, unspecified, intrapelvic lymph nodes"
* ICD10CM#C82.27 "Follicular lymphoma grade III, unspecified, spleen"
* ICD10CM#C82.28 "Follicular lymphoma grade III, unspecified, lymph nodes of multiple sites"
* ICD10CM#C82.29 "Follicular lymphoma grade III, unspecified, extranodal and solid organ sites"
* ICD10CM#C82.30 "Follicular lymphoma grade IIIa, unspecified site"
* ICD10CM#C82.31 "Follicular lymphoma grade IIIa, lymph nodes of head, face, and neck"
* ICD10CM#C82.32 "Follicular lymphoma grade IIIa, intrathoracic lymph nodes"
* ICD10CM#C82.33 "Follicular lymphoma grade IIIa, intra-abdominal lymph nodes"
* ICD10CM#C82.34 "Follicular lymphoma grade IIIa, lymph nodes of axilla and upper limb"
* ICD10CM#C82.35 "Follicular lymphoma grade IIIa, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.36 "Follicular lymphoma grade IIIa, intrapelvic lymph nodes"
* ICD10CM#C82.37 "Follicular lymphoma grade IIIa, spleen"
* ICD10CM#C82.38 "Follicular lymphoma grade IIIa, lymph nodes of multiple sites"
* ICD10CM#C82.39 "Follicular lymphoma grade IIIa, extranodal and solid organ sites"
* ICD10CM#C82.40 "Follicular lymphoma grade IIIb, unspecified site"
* ICD10CM#C82.41 "Follicular lymphoma grade IIIb, lymph nodes of head, face, and neck"
* ICD10CM#C82.42 "Follicular lymphoma grade IIIb, intrathoracic lymph nodes"
* ICD10CM#C82.43 "Follicular lymphoma grade IIIb, intra-abdominal lymph nodes"
* ICD10CM#C82.44 "Follicular lymphoma grade IIIb, lymph nodes of axilla and upper limb"
* ICD10CM#C82.45 "Follicular lymphoma grade IIIb, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.46 "Follicular lymphoma grade IIIb, intrapelvic lymph nodes"
* ICD10CM#C82.47 "Follicular lymphoma grade IIIb, spleen"
* ICD10CM#C82.48 "Follicular lymphoma grade IIIb, lymph nodes of multiple sites"
* ICD10CM#C82.49 "Follicular lymphoma grade IIIb, extranodal and solid organ sites"
* ICD10CM#C82.50 "Diffuse follicle center lymphoma, unspecified site"
* ICD10CM#C82.51 "Diffuse follicle center lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C82.52 "Diffuse follicle center lymphoma, intrathoracic lymph nodes"
* ICD10CM#C82.53 "Diffuse follicle center lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C82.54 "Diffuse follicle center lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C82.55 "Diffuse follicle center lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.56 "Diffuse follicle center lymphoma, intrapelvic lymph nodes"
* ICD10CM#C82.57 "Diffuse follicle center lymphoma, spleen"
* ICD10CM#C82.58 "Diffuse follicle center lymphoma, lymph nodes of multiple sites"
* ICD10CM#C82.59 "Diffuse follicle center lymphoma, extranodal and solid organ sites"
* ICD10CM#C82.60 "Cutaneous follicle center lymphoma, unspecified site"
* ICD10CM#C82.61 "Cutaneous follicle center lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C82.62 "Cutaneous follicle center lymphoma, intrathoracic lymph nodes"
* ICD10CM#C82.63 "Cutaneous follicle center lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C82.64 "Cutaneous follicle center lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C82.65 "Cutaneous follicle center lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.66 "Cutaneous follicle center lymphoma, intrapelvic lymph nodes"
* ICD10CM#C82.67 "Cutaneous follicle center lymphoma, spleen"
* ICD10CM#C82.68 "Cutaneous follicle center lymphoma, lymph nodes of multiple sites"
* ICD10CM#C82.69 "Cutaneous follicle center lymphoma, extranodal and solid organ sites"
* ICD10CM#C82.80 "Other types of follicular lymphoma, unspecified site"
* ICD10CM#C82.81 "Other types of follicular lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C82.82 "Other types of follicular lymphoma, intrathoracic lymph nodes"
* ICD10CM#C82.83 "Other types of follicular lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C82.84 "Other types of follicular lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C82.85 "Other types of follicular lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.86 "Other types of follicular lymphoma, intrapelvic lymph nodes"
* ICD10CM#C82.87 "Other types of follicular lymphoma, spleen"
* ICD10CM#C82.88 "Other types of follicular lymphoma, lymph nodes of multiple sites"
* ICD10CM#C82.89 "Other types of follicular lymphoma, extranodal and solid organ sites"
* ICD10CM#C82.90 "Follicular lymphoma, unspecified, unspecified site"
* ICD10CM#C82.91 "Follicular lymphoma, unspecified, lymph nodes of head, face, and neck"
* ICD10CM#C82.92 "Follicular lymphoma, unspecified, intrathoracic lymph nodes"
* ICD10CM#C82.93 "Follicular lymphoma, unspecified, intra-abdominal lymph nodes"
* ICD10CM#C82.94 "Follicular lymphoma, unspecified, lymph nodes of axilla and upper limb"
* ICD10CM#C82.95 "Follicular lymphoma, unspecified, lymph nodes of inguinal region and lower limb"
* ICD10CM#C82.96 "Follicular lymphoma, unspecified, intrapelvic lymph nodes"
* ICD10CM#C82.97 "Follicular lymphoma, unspecified, spleen"
* ICD10CM#C82.98 "Follicular lymphoma, unspecified, lymph nodes of multiple sites"
* ICD10CM#C82.99 "Follicular lymphoma, unspecified, extranodal and solid organ sites"
* ICD10CM#C83.00 "Small cell B-cell lymphoma, unspecified site"
* ICD10CM#C83.01 "Small cell B-cell lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C83.02 "Small cell B-cell lymphoma, intrathoracic lymph nodes"
* ICD10CM#C83.03 "Small cell B-cell lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C83.04 "Small cell B-cell lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C83.05 "Small cell B-cell lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C83.06 "Small cell B-cell lymphoma, intrapelvic lymph nodes"
* ICD10CM#C83.07 "Small cell B-cell lymphoma, spleen"
* ICD10CM#C83.08 "Small cell B-cell lymphoma, lymph nodes of multiple sites"
* ICD10CM#C83.09 "Small cell B-cell lymphoma, extranodal and solid organ sites"
* ICD10CM#C83.10 "Mantle cell lymphoma, unspecified site"
* ICD10CM#C83.11 "Mantle cell lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C83.12 "Mantle cell lymphoma, intrathoracic lymph nodes"
* ICD10CM#C83.13 "Mantle cell lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C83.14 "Mantle cell lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C83.15 "Mantle cell lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C83.16 "Mantle cell lymphoma, intrapelvic lymph nodes"
* ICD10CM#C83.17 "Mantle cell lymphoma, spleen"
* ICD10CM#C83.18 "Mantle cell lymphoma, lymph nodes of multiple sites"
* ICD10CM#C83.19 "Mantle cell lymphoma, extranodal and solid organ sites"
* ICD10CM#C83.30 "Diffuse large B-cell lymphoma, unspecified site"
* ICD10CM#C83.31 "Diffuse large B-cell lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C83.32 "Diffuse large B-cell lymphoma, intrathoracic lymph nodes"
* ICD10CM#C83.33 "Diffuse large B-cell lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C83.34 "Diffuse large B-cell lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C83.35 "Diffuse large B-cell lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C83.36 "Diffuse large B-cell lymphoma, intrapelvic lymph nodes"
* ICD10CM#C83.37 "Diffuse large B-cell lymphoma, spleen"
* ICD10CM#C83.38 "Diffuse large B-cell lymphoma, lymph nodes of multiple sites"
* ICD10CM#C83.39 "Diffuse large B-cell lymphoma, extranodal and solid organ sites"
* ICD10CM#C83.50 "Lymphoblastic (diffuse) lymphoma, unspecified site"
* ICD10CM#C83.51 "Lymphoblastic (diffuse) lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C83.52 "Lymphoblastic (diffuse) lymphoma, intrathoracic lymph nodes"
* ICD10CM#C83.53 "Lymphoblastic (diffuse) lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C83.54 "Lymphoblastic (diffuse) lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C83.55 "Lymphoblastic (diffuse) lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C83.56 "Lymphoblastic (diffuse) lymphoma, intrapelvic lymph nodes"
* ICD10CM#C83.57 "Lymphoblastic (diffuse) lymphoma, spleen"
* ICD10CM#C83.58 "Lymphoblastic (diffuse) lymphoma, lymph nodes of multiple sites"
* ICD10CM#C83.59 "Lymphoblastic (diffuse) lymphoma, extranodal and solid organ sites"
* ICD10CM#C83.70 "Burkitt lymphoma, unspecified site"
* ICD10CM#C83.71 "Burkitt lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C83.72 "Burkitt lymphoma, intrathoracic lymph nodes"
* ICD10CM#C83.73 "Burkitt lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C83.74 "Burkitt lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C83.75 "Burkitt lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C83.76 "Burkitt lymphoma, intrapelvic lymph nodes"
* ICD10CM#C83.77 "Burkitt lymphoma, spleen"
* ICD10CM#C83.78 "Burkitt lymphoma, lymph nodes of multiple sites"
* ICD10CM#C83.79 "Burkitt lymphoma, extranodal and solid organ sites"
* ICD10CM#C83.80 "Other non-follicular lymphoma, unspecified site"
* ICD10CM#C83.81 "Other non-follicular lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C83.82 "Other non-follicular lymphoma, intrathoracic lymph nodes"
* ICD10CM#C83.83 "Other non-follicular lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C83.84 "Other non-follicular lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C83.85 "Other non-follicular lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C83.86 "Other non-follicular lymphoma, intrapelvic lymph nodes"
* ICD10CM#C83.87 "Other non-follicular lymphoma, spleen"
* ICD10CM#C83.88 "Other non-follicular lymphoma, lymph nodes of multiple sites"
* ICD10CM#C83.89 "Other non-follicular lymphoma, extranodal and solid organ sites"
* ICD10CM#C83.90 "Non-follicular (diffuse) lymphoma, unspecified, unspecified site"
* ICD10CM#C83.91 "Non-follicular (diffuse) lymphoma, unspecified, lymph nodes of head, face, and neck"
* ICD10CM#C83.92 "Non-follicular (diffuse) lymphoma, unspecified, intrathoracic lymph nodes"
* ICD10CM#C83.93 "Non-follicular (diffuse) lymphoma, unspecified, intra-abdominal lymph nodes"
* ICD10CM#C83.94 "Non-follicular (diffuse) lymphoma, unspecified, lymph nodes of axilla and upper limb"
* ICD10CM#C83.95 "Non-follicular (diffuse) lymphoma, unspecified, lymph nodes of inguinal region and lower limb"
* ICD10CM#C83.96 "Non-follicular (diffuse) lymphoma, unspecified, intrapelvic lymph nodes"
* ICD10CM#C83.97 "Non-follicular (diffuse) lymphoma, unspecified, spleen"
* ICD10CM#C83.98 "Non-follicular (diffuse) lymphoma, unspecified, lymph nodes of multiple sites"
* ICD10CM#C83.99 "Non-follicular (diffuse) lymphoma, unspecified, extranodal and solid organ sites"
* ICD10CM#C84.00 "Mycosis fungoides, unspecified site"
* ICD10CM#C84.01 "Mycosis fungoides, lymph nodes of head, face, and neck"
* ICD10CM#C84.02 "Mycosis fungoides, intrathoracic lymph nodes"
* ICD10CM#C84.03 "Mycosis fungoides, intra-abdominal lymph nodes"
* ICD10CM#C84.04 "Mycosis fungoides, lymph nodes of axilla and upper limb"
* ICD10CM#C84.05 "Mycosis fungoides, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.06 "Mycosis fungoides, intrapelvic lymph nodes"
* ICD10CM#C84.07 "Mycosis fungoides, spleen"
* ICD10CM#C84.08 "Mycosis fungoides, lymph nodes of multiple sites"
* ICD10CM#C84.09 "Mycosis fungoides, extranodal and solid organ sites"
* ICD10CM#C84.10 "Sezary disease, unspecified site"
* ICD10CM#C84.11 "Sezary disease, lymph nodes of head, face, and neck"
* ICD10CM#C84.12 "Sezary disease, intrathoracic lymph nodes"
* ICD10CM#C84.13 "Sezary disease, intra-abdominal lymph nodes"
* ICD10CM#C84.14 "Sezary disease, lymph nodes of axilla and upper limb"
* ICD10CM#C84.15 "Sezary disease, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.16 "Sezary disease, intrapelvic lymph nodes"
* ICD10CM#C84.17 "Sezary disease, spleen"
* ICD10CM#C84.18 "Sezary disease, lymph nodes of multiple sites"
* ICD10CM#C84.19 "Sezary disease, extranodal and solid organ sites"
* ICD10CM#C84.40 "Peripheral T-cell lymphoma, not classified, unspecified site"
* ICD10CM#C84.41 "Peripheral T-cell lymphoma, not classified, lymph nodes of head, face, and neck"
* ICD10CM#C84.42 "Peripheral T-cell lymphoma, not classified, intrathoracic lymph nodes"
* ICD10CM#C84.43 "Peripheral T-cell lymphoma, not classified, intra-abdominal lymph nodes"
* ICD10CM#C84.44 "Peripheral T-cell lymphoma, not classified, lymph nodes of axilla and upper limb"
* ICD10CM#C84.45 "Peripheral T-cell lymphoma, not classified, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.46 "Peripheral T-cell lymphoma, not classified, intrapelvic lymph nodes"
* ICD10CM#C84.47 "Peripheral T-cell lymphoma, not classified, spleen"
* ICD10CM#C84.48 "Peripheral T-cell lymphoma, not classified, lymph nodes of multiple sites"
* ICD10CM#C84.49 "Peripheral T-cell lymphoma, not classified, extranodal and solid organ sites"
* ICD10CM#C84.60 "Anaplastic large cell lymphoma, ALK-positive, unspecified site"
* ICD10CM#C84.61 "Anaplastic large cell lymphoma, ALK-positive, lymph nodes of head, face, and neck"
* ICD10CM#C84.62 "Anaplastic large cell lymphoma, ALK-positive, intrathoracic lymph nodes"
* ICD10CM#C84.63 "Anaplastic large cell lymphoma, ALK-positive, intra-abdominal lymph nodes"
* ICD10CM#C84.64 "Anaplastic large cell lymphoma, ALK-positive, lymph nodes of axilla and upper limb"
* ICD10CM#C84.65 "Anaplastic large cell lymphoma, ALK-positive, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.66 "Anaplastic large cell lymphoma, ALK-positive, intrapelvic lymph nodes"
* ICD10CM#C84.67 "Anaplastic large cell lymphoma, ALK-positive, spleen"
* ICD10CM#C84.68 "Anaplastic large cell lymphoma, ALK-positive, lymph nodes of multiple sites"
* ICD10CM#C84.69 "Anaplastic large cell lymphoma, ALK-positive, extranodal and solid organ sites"
* ICD10CM#C84.70 "Anaplastic large cell lymphoma, ALK-negative, unspecified site"
* ICD10CM#C84.71 "Anaplastic large cell lymphoma, ALK-negative, lymph nodes of head, face, and neck"
* ICD10CM#C84.72 "Anaplastic large cell lymphoma, ALK-negative, intrathoracic lymph nodes"
* ICD10CM#C84.73 "Anaplastic large cell lymphoma, ALK-negative, intra-abdominal lymph nodes"
* ICD10CM#C84.74 "Anaplastic large cell lymphoma, ALK-negative, lymph nodes of axilla and upper limb"
* ICD10CM#C84.75 "Anaplastic large cell lymphoma, ALK-negative, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.76 "Anaplastic large cell lymphoma, ALK-negative, intrapelvic lymph nodes"
* ICD10CM#C84.77 "Anaplastic large cell lymphoma, ALK-negative, spleen"
* ICD10CM#C84.78 "Anaplastic large cell lymphoma, ALK-negative, lymph nodes of multiple sites"
* ICD10CM#C84.79 "Anaplastic large cell lymphoma, ALK-negative, extranodal and solid organ sites"
* ICD10CM#C84.90 "Mature T/NK-cell lymphomas, unspecified, unspecified site"
* ICD10CM#C84.91 "Mature T/NK-cell lymphomas, unspecified, lymph nodes of head, face, and neck"
* ICD10CM#C84.92 "Mature T/NK-cell lymphomas, unspecified, intrathoracic lymph nodes"
* ICD10CM#C84.93 "Mature T/NK-cell lymphomas, unspecified, intra-abdominal lymph nodes"
* ICD10CM#C84.94 "Mature T/NK-cell lymphomas, unspecified, lymph nodes of axilla and upper limb"
* ICD10CM#C84.95 "Mature T/NK-cell lymphomas, unspecified, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.96 "Mature T/NK-cell lymphomas, unspecified, intrapelvic lymph nodes"
* ICD10CM#C84.97 "Mature T/NK-cell lymphomas, unspecified, spleen"
* ICD10CM#C84.98 "Mature T/NK-cell lymphomas, unspecified, lymph nodes of multiple sites"
* ICD10CM#C84.99 "Mature T/NK-cell lymphomas, unspecified, extranodal and solid organ sites"
* ICD10CM#C84.A0 "Cutaneous T-cell lymphoma, unspecified, unspecified site"
* ICD10CM#C84.A1 "Cutaneous T-cell lymphoma, unspecified lymph nodes of head, face, and neck"
* ICD10CM#C84.A2 "Cutaneous T-cell lymphoma, unspecified, intrathoracic lymph nodes"
* ICD10CM#C84.A3 "Cutaneous T-cell lymphoma, unspecified, intra-abdominal lymph nodes"
* ICD10CM#C84.A4 "Cutaneous T-cell lymphoma, unspecified, lymph nodes of axilla and upper limb"
* ICD10CM#C84.A5 "Cutaneous T-cell lymphoma, unspecified, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.A6 "Cutaneous T-cell lymphoma, unspecified, intrapelvic lymph nodes"
* ICD10CM#C84.A7 "Cutaneous T-cell lymphoma, unspecified, spleen"
* ICD10CM#C84.A8 "Cutaneous T-cell lymphoma, unspecified, lymph nodes of multiple sites"
* ICD10CM#C84.A9 "Cutaneous T-cell lymphoma, unspecified, extranodal and solid organ sites"
* ICD10CM#C84.Z0 "Other mature T/NK-cell lymphomas, unspecified site"
* ICD10CM#C84.Z1 "Other mature T/NK-cell lymphomas, lymph nodes of head, face, and neck"
* ICD10CM#C84.Z2 "Other mature T/NK-cell lymphomas, intrathoracic lymph nodes"
* ICD10CM#C84.Z3 "Other mature T/NK-cell lymphomas, intra-abdominal lymph nodes"
* ICD10CM#C84.Z4 "Other mature T/NK-cell lymphomas, lymph nodes of axilla and upper limb"
* ICD10CM#C84.Z5 "Other mature T/NK-cell lymphomas, lymph nodes of inguinal region and lower limb"
* ICD10CM#C84.Z6 "Other mature T/NK-cell lymphomas, intrapelvic lymph nodes"
* ICD10CM#C84.Z7 "Other mature T/NK-cell lymphomas, spleen"
* ICD10CM#C84.Z8 "Other mature T/NK-cell lymphomas, lymph nodes of multiple sites"
* ICD10CM#C84.Z9 "Other mature T/NK-cell lymphomas, extranodal and solid organ sites"
* ICD10CM#C85.10 "Unspecified B-cell lymphoma, unspecified site"
* ICD10CM#C85.11 "Unspecified B-cell lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C85.12 "Unspecified B-cell lymphoma, intrathoracic lymph nodes"
* ICD10CM#C85.13 "Unspecified B-cell lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C85.14 "Unspecified B-cell lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C85.15 "Unspecified B-cell lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C85.16 "Unspecified B-cell lymphoma, intrapelvic lymph nodes"
* ICD10CM#C85.17 "Unspecified B-cell lymphoma, spleen"
* ICD10CM#C85.18 "Unspecified B-cell lymphoma, lymph nodes of multiple sites"
* ICD10CM#C85.19 "Unspecified B-cell lymphoma, extranodal and solid organ sites"
* ICD10CM#C85.20 "Mediastinal (thymic) large B-cell lymphoma, unspecified site"
* ICD10CM#C85.21 "Mediastinal (thymic) large B-cell lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C85.22 "Mediastinal (thymic) large B-cell lymphoma, intrathoracic lymph nodes"
* ICD10CM#C85.23 "Mediastinal (thymic) large B-cell lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C85.24 "Mediastinal (thymic) large B-cell lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C85.25 "Mediastinal (thymic) large B-cell lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C85.26 "Mediastinal (thymic) large B-cell lymphoma, intrapelvic lymph nodes"
* ICD10CM#C85.27 "Mediastinal (thymic) large B-cell lymphoma, spleen"
* ICD10CM#C85.28 "Mediastinal (thymic) large B-cell lymphoma, lymph nodes of multiple sites"
* ICD10CM#C85.29 "Mediastinal (thymic) large B-cell lymphoma, extranodal and solid organ sites"
* ICD10CM#C85.80 "Other specified types of non-Hodgkin lymphoma, unspecified site"
* ICD10CM#C85.81 "Other specified types of non-Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C85.82 "Other specified types of non-Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C85.83 "Other specified types of non-Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C85.84 "Other specified types of non-Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C85.85 "Other specified types of non-Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C85.86 "Other specified types of non-Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C85.87 "Other specified types of non-Hodgkin lymphoma, spleen"
* ICD10CM#C85.88 "Other specified types of non-Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C85.89 "Other specified types of non-Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C85.90 "Non-Hodgkin lymphoma, unspecified site"
* ICD10CM#C85.91 "Non-Hodgkin lymphoma, lymph nodes of head, face, and neck"
* ICD10CM#C85.92 "Non-Hodgkin lymphoma, intrathoracic lymph nodes"
* ICD10CM#C85.93 "Non-Hodgkin lymphoma, intra-abdominal lymph nodes"
* ICD10CM#C85.94 "Non-Hodgkin lymphoma, lymph nodes of axilla and upper limb"
* ICD10CM#C85.95 "Non-Hodgkin lymphoma, lymph nodes of inguinal region and lower limb"
* ICD10CM#C85.96 "Non-Hodgkin lymphoma, intrapelvic lymph nodes"
* ICD10CM#C85.97 "Non-Hodgkin lymphoma, spleen"
* ICD10CM#C85.98 "Non-Hodgkin lymphoma, lymph nodes of multiple sites"
* ICD10CM#C85.99 "Non-Hodgkin lymphoma, extranodal and solid organ sites"
* ICD10CM#C86.0 "Extranodal NK/T-cell lymphoma, nasal type"
* ICD10CM#C86.1 "Hepatosplenic T-cell lymphoma"
* ICD10CM#C86.2 "Enteropathy-type (intestinal) T-cell lymphoma"
* ICD10CM#C86.3 "Subcutaneous panniculitis-like T-cell lymphoma"
* ICD10CM#C86.4 "Blastic NK-cell lymphoma"
* ICD10CM#C86.5 "Angioimmunoblastic T-cell lymphoma"
* ICD10CM#C86.6 "Primary cutaneous CD30-positive T-cell proliferation"
* ICD10CM#C88.0 "Waldenstrom's macroglobulinemia"
* ICD10CM#C88.2 "Heavy chain disease"
* ICD10CM#C88.3 "Immunoproliferative small intestinal diseases"
* ICD10CM#C88.4 "Extranodal marginal zone B-cell lymphoma of mucosa-associated lymphoid tissue [MALT-lymphoma]"
* ICD10CM#C88.8 "Other malignant immunoproliferative diseases"
* ICD10CM#C88.9 "Malignant immunoproliferative disease, unspecified"
* ICD10CM#C90.00 "Multiple myeloma not having achieved remission"
* ICD10CM#C90.01 "Multiple myeloma in remission"
* ICD10CM#C90.02 "Multiple myeloma in relapse"
* ICD10CM#C90.10 "Plasma cell leukemia not having achieved remission"
* ICD10CM#C90.11 "Plasma cell leukemia in remission"
* ICD10CM#C90.12 "Plasma cell leukemia in relapse"
* ICD10CM#C90.20 "Extramedullary plasmacytoma not having achieved remission"
* ICD10CM#C90.21 "Extramedullary plasmacytoma in remission"
* ICD10CM#C90.22 "Extramedullary plasmacytoma in relapse"
* ICD10CM#C90.30 "Solitary plasmacytoma not having achieved remission"
* ICD10CM#C90.31 "Solitary plasmacytoma in remission"
* ICD10CM#C90.32 "Solitary plasmacytoma in relapse"
* ICD10CM#C91.00 "Acute lymphoblastic leukemia not having achieved remission"
* ICD10CM#C91.01 "Acute lymphoblastic leukemia, in remission"
* ICD10CM#C91.02 "Acute lymphoblastic leukemia, in relapse"
* ICD10CM#C91.10 "Chronic lymphocytic leukemia of B-cell type not having achieved remission"
* ICD10CM#C91.11 "Chronic lymphocytic leukemia of B-cell type in remission"
* ICD10CM#C91.12 "Chronic lymphocytic leukemia of B-cell type in relapse"
* ICD10CM#C91.30 "Prolymphocytic leukemia of B-cell type not having achieved remission"
* ICD10CM#C91.31 "Prolymphocytic leukemia of B-cell type, in remission"
* ICD10CM#C91.32 "Prolymphocytic leukemia of B –cell type, in relapse"
* ICD10CM#C91.40 "Hairy cell leukemia not having achieved remission"
* ICD10CM#C91.41 "Hairy cell leukemia, in remission"
* ICD10CM#C91.42 "Hairy cell leukemia, in relapse"
* ICD10CM#C91.50 "Adult T-cell lymphoma/leukemia (HTLV-1-associated) not having achieved remission"
* ICD10CM#C91.51 "Adult T-cell lymphoma/leukemia (HTLV-1-associated) in remission"
* ICD10CM#C91.52 "Adult T-cell lymphoma/leukemia (HTLV-1-associated) in relapse"
* ICD10CM#C91.60 "Prolymphocytic leukemia of T-cell type not having achieved remission"
* ICD10CM#C91.61 "Prolymphocytic leukemia of T-cell type, in remission"
* ICD10CM#C91.62 "Prolymphocytic leukemia of T –cell type, in relapse"
* ICD10CM#C91.90 "Lymphoid leukemia, unspecified not having achieved remission"
* ICD10CM#C91.91 "Lymphoid leukemia, unspecified, in remission"
* ICD10CM#C91.92 "Lymphoid leukemia, unspecified, in relapse"
* ICD10CM#C91.A0 "Mature B-cell leukemia Burkitt-type not having achieved remission"
* ICD10CM#C91.A1 "Mature B-cell leukemia Burkitt-type, in remission"
* ICD10CM#C91.A2 "Mature B-cell leukemia Burkitt-type, in relapse"
* ICD10CM#C91.Z0 "Other lymphoid leukemia not having achieved remission"
* ICD10CM#C91.Z1 "Other lymphoid leukemia, in remission"
* ICD10CM#C91.Z2 "Other lymphoid leukemia, in relapse"
* ICD10CM#C92.00 "Acute myeloblastic leukemia, not having achieved remission"
* ICD10CM#C92.01 "Acute myeloblastic leukemia, in remission"
* ICD10CM#C92.02 "Acute myeloblastic leukemia, in relapse"
* ICD10CM#C92.10 "Chronic myeloid leukemia, BCR/ABL-positive, not having achieved remission"
* ICD10CM#C92.11 "Chronic myeloid leukemia, BCR/ABL-positive, in remission"
* ICD10CM#C92.12 "Chronic myeloid leukemia, BCR/ABL-positive, in relapse"
* ICD10CM#C92.20 "Atypical chronic myeloid leukemia, BCR/ABL-negative not having achieved remission"
* ICD10CM#C92.21 "Atypical chronic myeloid leukemia, BCR/ABL-negative, in remission"
* ICD10CM#C92.22 "Atypical chronic myeloid leukemia, BCR/ABL-negative, in relapse"
* ICD10CM#C92.30 "Myeloid sarcoma, not having achieved remission"
* ICD10CM#C92.31 "Myeloid sarcoma, in remission"
* ICD10CM#C92.32 "Myeloid sarcoma, in relapse"
* ICD10CM#C92.40 "Acute promyelocytic leukemia, not having achieved remission"
* ICD10CM#C92.41 "Acute promyelocytic leukemia, in remission"
* ICD10CM#C92.42 "Acute promyelocytic leukemia, in relapse"
* ICD10CM#C92.50 "Acute myelomonocytic leukemia, not having achieved remission"
* ICD10CM#C92.51 "Acute myelomonocytic in remission"
* ICD10CM#C92.52 "Acute myelomonocytic in relapse"
* ICD10CM#C92.60 "Acute myeloid leukemia with 11q23 abnormality not having achieved remission"
* ICD10CM#C92.61 "Acute myeloid leukemia with 11q23 abnormality in remission"
* ICD10CM#C92.62 "Acute myeloid leukemia with 11q23 abnormality in relapse"
* ICD10CM#C92.90 "Myeloid leukemia, unspecified, not having achieved remission"
* ICD10CM#C92.91 "Myeloid leukemia, unspecified in remission"
* ICD10CM#C92.92 "Myeloid leukemia, unspecified in relapse"
* ICD10CM#C92.A0 "Acute myeloid leukemia with multilineage dysplasia not having achieved remission"
* ICD10CM#C92.A1 "Acute myeloid leukemia with multilineage dysplasia, in remission"
* ICD10CM#C92.A2 "Acute myeloid leukemia with multilineage dysplasia, in relapse"
* ICD10CM#C92.Z0 "Other myeloid leukemia not having achieved remission"
* ICD10CM#C92.Z1 "Other myeloid leukemia, in remission"
* ICD10CM#C92.Z2 "Other myeloid leukemia, in relapse"
* ICD10CM#C93.00 "Acute monoblastic/monocytic leukemia, not having achieved remission"
* ICD10CM#C93.01 "Acute monoblastic/monocytic leukemia, in remission"
* ICD10CM#C93.02 "Acute monoblastic/monocytic leukemia, in relapse"
* ICD10CM#C93.10 "Chronic myelomonocytic leukemia not having achieved remission"
* ICD10CM#C93.11 "Chronic myelomonocytic leukemia, in remission"
* ICD10CM#C93.12 "Chronic myelomonocytic leukemia, in relapse"
* ICD10CM#C93.30 "Juvenile myelomonocytic leukemia not having achieved remission"
* ICD10CM#C93.31 "Juvenile myelomonocytic leukemia, in remission"
* ICD10CM#C93.32 "Juvenile myelomonocytic leukemia, in relapse"
* ICD10CM#C93.90 "Monocytic leukemia, unspecified, not having achieved remission"
* ICD10CM#C93.91 "Monocytic leukemia, unspecified in remission"
* ICD10CM#C93.92 "Monocytic leukemia, unspecified in relapse"
* ICD10CM#C93.Z0 "Other monocytic leukemia, not having achieved remission"
* ICD10CM#C93.Z1 "Other monocytic leukemia in remission"
* ICD10CM#C93.Z2 "Other monocytic leukemia in relapse"
* ICD10CM#C94.00 "Acute erythroid leukemia, not having achieved remission"
* ICD10CM#C94.01 "Acute erythroid leukemia, in remission"
* ICD10CM#C94.02 "Acute erythroid leukemia, in relapse"
* ICD10CM#C94.20 "Acute megakaryoblastic leukemia not having achieved remission"
* ICD10CM#C94.21 "Acute megakaryoblastic leukemia, in remission"
* ICD10CM#C94.22 "Acute megakaryoblastic leukemia, in relapse"
* ICD10CM#C94.30 "Mast cell leukemia not having achieved remission"
* ICD10CM#C94.31 "Mast cell leukemia, in remission"
* ICD10CM#C94.32 "Mast cell leukemia, in relapse"
* ICD10CM#C94.40 "Acute panmyelosis with myelofibrosis not having achieved remission"
* ICD10CM#C94.41 "Acute panmyelosis with myelofibrosis, in remission"
* ICD10CM#C94.42 "Acute panmyelosis with myelofibrosis, in relapse"
* ICD10CM#C94.6  "Myelodysplastic disease, not classified"
* ICD10CM#C94.80 "Other specified leukemias not having achieved remission"
* ICD10CM#C94.81 "Other specified leukemias, in remission"
* ICD10CM#C94.82 "Other specified leukemias, in relapse"
* ICD10CM#C95.00 "Acute leukemia of unspecified cell type not having achieved remission"
* ICD10CM#C95.01 "Acute leukemia of unspecified cell type, in remission"
* ICD10CM#C95.02 "Acute leukemia of unspecified cell type, in relapse"
* ICD10CM#C95.10 "Chronic leukemia of unspecified cell type not having achieved remission"
* ICD10CM#C95.11 "Chronic leukemia of unspecified cell type, in remission"
* ICD10CM#C95.12 "Chronic leukemia of unspecified cell type, in relapse"
* ICD10CM#C95.90 "Leukemia, unspecified not having achieved remission"
* ICD10CM#C95.91 "Leukemia, unspecified, in remission"
* ICD10CM#C95.92 "Leukemia, unspecified, in relapse"
* ICD10CM#C96.0 "Multifocal and multisystemic (disseminated)  Langerhans-cell histiocytosis"
* ICD10CM#C96.20 "Malignant mast cell neoplasm, unspecified"
* ICD10CM#C96.21 "Aggressive systemic mastocytosis"
* ICD10CM#C96.22 "Mast cell sarcoma"
* ICD10CM#C96.29 "Other malignant cell neoplasm"
* ICD10CM#C96.4 "Sarcoma of dendritic cells (accessory cells) Malignant neoplasm of lymphoid, hematopoietic and related tissue, unspecified"
* ICD10CM#C96.5 "Multifocal and unisystemic Langerhans-cell histiocytosis"
* ICD10CM#C96.6 "Unifocal Langerhans-cell histiocytosis"
* ICD10CM#C96.9 "Malignant neoplasm of lymphoid, hematopoietic and related tissue, unspecified"
* ICD10CM#C96.A "Histiocytic sarcoma"
* ICD10CM#C96.Z "Other specified malignant neoplasms of lymphoid, hematopoietic and related tissue"
* ICD10CM#D45 "POLYCYTHEMIA VERA"
* ICD10CM#D46.0 "Refractory anemia without ring sideroblasts, so stated"
* ICD10CM#D46.1 "Refractory anemia with ring sideroblasts"
* ICD10CM#D46.20 "Refractory anemia with excess of blasts, unspecified"
* ICD10CM#D46.21 "Refractory anemia with excess of blasts 1"
* ICD10CM#D46.22 "Refractory anemia with excess of blasts 2"
* ICD10CM#D46.4 "Refractory anemia, unspecified"
* ICD10CM#D46.9 "Myelodysplastic syndrome, unspecified"
* ICD10CM#D46.B "Refractory cytopenia with multilineage dysplasia and ring sideroblasts"
* ICD10CM#D46.C "Myelodysplastic syndrome with isolated del (5q) chromosomal abnormality"
* ICD10CM#D46.Z "Other myelodysplastic syndromes"
* ICD10CM#D47.02 "Systemic mastocytosis"
* ICD10CM#D47.1 "Chronic myeloproliferative disease"
* ICD10CM#D47.3 "Essential (hemorrhagic) thrombocythemia"
* ICD10CM#D47.4 "Osteomyelofibrosis"
* ICD10CM#D47.9 "Neoplasm of uncertain behavior of lymphoid, hematopoietic and related tissue, unspecified"
* ICD10CM#D47.Z1 "Post-transplant lymphoproliferative disorder (PTLD)"
* ICD10CM#D47.Z9 "Other specified neoplasms of uncertain behavior of lymphoid, hematopoietic and related tissue"
* ICD10CM#D49.6 "Neoplasm of unspecified behavior of brain"
* ICD10CM#D49.7 "Neoplasm of unspecified behavior of endocrine glands and other parts of nervous system"



---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/images-source/cancer-conditions-then-patients.plantuml

@startuml
skinparam defaultFontName Arial

title Identifying mCODE Patients: Conditions-then-patients approach
hide footbox
participant "mCODE Data Receiver" as Receiver
participant "mCODE Data Sender" as Sender

group Get Conditions, then Patients
    "Receiver" -> "Sender" : ""GET [base]/Condition?code:in=...""
    "Sender" --> "Receiver" : HTTP response containing Bundle of relevant Conditions
    ...
    note over Receiver
    Receiver extracts unique
    patient IDs from Conditions to
    generate a second request:
    end note
    "Receiver" -> "Sender" : ""GET [base]/Patient?_id=id_1,id_2,...,id_n""
    "Sender" --> "Receiver" : HTTP response containing Bundle of Patients
end


@enduml


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/images-source/mcode-patient-bundle-pull.plantuml

@startuml
skinparam defaultFontName Arial

title Retrieving an mCODE Patient Bundle
hide footbox
participant "mCODE Data Receiver" as Receiver
participant "mCODE Data Sender" as Sender
"Receiver" -> "Sender" : ""GET [base]/Patient/[id]/$mcode-everything""
"Sender" --> "Receiver" : HTTP response containing mCODE Patient Bundle
@enduml


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/images-source/mcode-patient-pull.plantuml

@startuml
skinparam defaultFontName Arial

title Retrieving an mCODE Patient
hide footbox
participant "mCODE Data Receiver" as Receiver
participant "mCODE Data Sender" as Sender

group Get Patients
    "Receiver" -> "Sender" : ""GET [base]/Patient/[id]""
    "Sender" --> "Receiver" : HTTP response containing Patient resource
end


@enduml


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/images-source/patients-and-cancer-conditions.plantuml

@startuml
skinparam defaultFontName Arial

title Identifying mCODE Patients: Patients-and-cancer-conditions approach
hide footbox
participant "mCODE Data Receiver" as Receiver
participant "mCODE Data Sender" as Sender

group Get Patients via reverse chaining
    "Receiver" -> "Sender" : ""GET [base]/Condition?_has:Condition:subject:code:in=...""
    "Sender" --> "Receiver" : HTTP response containing Bundle of relevant Patients
end

@enduml


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/images-source/patients-in-group.plantuml

@startuml
skinparam defaultFontName Arial

title Identifying mCODE Patients: Patients-in-group approach
hide footbox
participant "mCODE Data Receiver" as Receiver
participant "mCODE Data Sender" as Sender

group Get Patients via ""_profile""
    "Receiver" -> "Sender" : ""GET [base]/Group/mcode-patients""
    "Sender" --> "Receiver" : HTTP response containing Group referencing relevant Patients
    ...
    note over Receiver
    Receiver extracts references
    to Patients from Group to
    generate a second request:
    end note
    "Receiver" -> "Sender" : ""GET [base]/Patient?_id=id_1,id_2,...,id_n""
    "Sender" --> "Receiver" : HTTP response containing Bundle of Patients
end


@enduml


---

File: repos/HL7_SLASH_fhir-mCODE-ig/input/images-source/patients-with-cancer-condition.plantuml

@startuml
skinparam defaultFontName Arial

title Identifying mCODE Patients: Patients-with-cancer-condition approach
hide footbox
participant "mCODE Data Receiver" as Receiver
participant "mCODE Data Sender" as Sender

group Get Patients via reverse chaining
    "Receiver" -> "Sender" : ""GET [base]/Patient?_has:Condition:subject:code:in=...""
    "Sender" --> "Receiver" : HTTP response containing Bundle of relevant Patients
end

@enduml


---

