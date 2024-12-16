File: repos/HL7_SLASH_Vulcan-schedule-ig/input/fsh/example-activity-definition-h2q-mc-lzzt-vitalsigns.fsh

Instance: H2Q-MC-LZZT-Vital-Signs-Temperature
InstanceOf: StudyActivitySoa
Description: "Planned Activity [Vital Signs]"
Usage: #example
Title: "Vital Signs/Temperature"
* status = #active
* title = "Vital Signs - Temperature"
* intent = #order
* kind = #ServiceRequest
* identifier[+]
  * value = "VitalSigns-Temperature-Measurement"
  * use = #usual
* code.coding[+]
  * code = #56342008
  * system = "http://snomed.info/sct"
  * display = "Temperature taking (procedure)"
* bodySite.coding[+]
  * code = #74262004
  * system = "http://snomed.info/sct"
  * display = "Oral cavity"
* bodySite.coding[+]
  * code = #34402009
  * system = "http://snomed.info/sct"
  * display = "Rectum"
* bodySite.coding[+]
  * code = #91470000
  * system = "http://snomed.info/sct"
  * display = "Axilla"
* bodySite.coding[+]
  * code = #42859004
  * system = "http://snomed.info/sct"
  * display = "Tympanic membrane structure"



---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/fsh/example-research-study-h2q-mc-lzzt.fsh

Alias: NCIT = http://ncimeta.nci.nih.gov
Alias: SCT = http://snomed.info/sct
Alias: PUBCHEM = https://pubchem.ncbi.nlm.nih.gov
Alias: MESH = https://www.nlm.nih.gov/mesh

Instance: SamGetWell
InstanceOf: Practitioner
Title: "Samuel Home, M.D."
Description: "Sample Practitioner: Samuel Home, M.D."
Usage: #example
* identifier[+]
  * value = "ABC1234"
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#UPIN
  * use = #official
* active = true
* name[+]
  * use = #usual
  * family = "Home"
  * given = "Samuel"
  * prefix = "Dr"
  * suffix[0] = "M.D."
* gender = #male
* telecom[+]
  * value = "555-123-5467"
  * system = #phone
  * use = #work

Instance: EliLillyAndCompany
InstanceOf: Organization
Title: "Eli Lilly and Company"
Description: "Sample Organization: Eli Lilly and Company"
Usage: #example
* identifier[+]
  * value = "Eli Lilly and Company Inc"
  * use = #official
* contact[+]
  * purpose = http://terminology.hl7.org/CodeSystem/contactentity-type#ADMIN
  * telecom[+]
    * system = #url
    * value = "https://www.lilly.com"
* type = http://terminology.hl7.org/CodeSystem/organization-type#crs


Instance: H2Q-MC-LZZT-ResearchStudy
InstanceOf: ResearchStudySoa
Title: "H2Q-MC-LZZT Research Study"
Usage: #example
* identifier[+]
  * use = #usual
  * value = "H2Q-MC-LZZT"
* identifier[+]
  * use = #official
  * value = "NCTA12313212"
  * system = "https://clinicaltrials.gov/show/"
* identifier[+]
  * value = PUBCHEM#60809
* title = "Safety and Efficacy of the Xanomeline Transdermal Therapeutic System (TTS) in Patients with Mild to Moderate Alzheimer’s Disease"
* protocol[StudyProtocolSoa] = Reference(PlanDefinition/H2Q-MC-LZZT-ProtocolDesign)
* status = #completed
* primaryPurposeType = http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type#treatment
* phase = http://terminology.hl7.org/CodeSystem/research-study-phase#phase-3
* category[0] = NCIT#C98388 "Interventional Study"
* category[1] = NCIT#C15417 "Randomized Clinical Trial"
* category[2] = NCIT#C15228 "Double Blind Study"
* category[3] = NCIT#C49648 "Placebo Control"
* category[4] = NCIT#C82639 "Parallel Study"
* focus[0] = NCIT#C152926 "Xanomeline"
* focus[1] = NCIT#C149996 "Transdermal Patch Dosage Form"
* focus[2].text = "PUBMED#9109749 Effects of xanomeline, a selective muscarinic receptor agonist, on cognitive function and behavioral symptoms in Alzheimer disease"
* condition[0] = SCT#26929004 "Alzheimer's Disease (Disorder)"
* contact[+]
  * name = "Bob James, Ph.D."
  * telecom
    * value = "555-555-5555"
    * system = #phone
    * use = #work
* relatedArtifact[+]
  * type = #documentation
  * label = "Arch Neurol.1997;54(4):465-473"
  * display = "Arch Neurol.1997;54(4):465-473"
  * citation = "Bodick NC, Offen WW, Levey AI, et al. Effects of xanomeline, a selective muscarinic receptor agonist, on cognitive function and behavioral symptoms in Alzheimer disease. Arch Neurol. 1997;54(4):465-473. doi:10.1001/archneur.1997.00550160091022"
* relatedArtifact[+]
  * type = #documentation
  * label = "Protocol H2Q-MC-LZZT(c)"
  * url = "https://clinicaltrials.gov/show/NCTA12313212/Lzzt_protocol_redacted.pdf"
// keywords
* keyword[+]
  * coding[+] = MESH#D018721
  * text = "Selective M1 muscarinic agonists"
* keyword[+]
  * coding[+] = MESH#D000544
  * text = "Alzheimer Disease"
* keyword[+]
  * coding[+] = MESH#D018721
  * text = "Selective M1 muscarinic agonists"
* description = """## Xanomeline (LY246708)
### Protocol H2Q-MC-LZZT(c) 
Safety and Efficacy of the Xanomeline Transdermal Therapeutic System (TTS) in Patients with Mild to Moderate Alzheimer’s Disease
"""
* principalInvestigator[Practitioner] = Reference(Practitioner/SamGetWell)
* reasonStopped = http://terminology.hl7.org/CodeSystem/research-study-reason-stopped#accrual-goal-met 
* arm[+]
  * name = "Placebo"
  * type = NCIT#C49648
  * description = "Placebo arm"
* arm[+]
  * name = "Low-dose xanomeline arm"
  * type = NCIT#C174266
  * description = "Low-dose xanomeline arm (50 cm2 TTS Formulation E, 54 mg xanomeline)"
* arm[+]
  * name = "High-dose xanomeline arm"
  * type = NCIT#C174266
  * description = "High-dose xanomeline arm (75 cm2 TTS Formulation E, 81 mg xanomeline)"
* objective[+]
  * name = "To determine if there is a statistically significant relationship (overall Type 1 error rate, α=.05) between the change in both ADAS-Cog and CIBIC scores, and drug dose (0, 50 cm2 [54 mg], and 75 cm2 [81 mg])."
  * type = http://terminology.hl7.org/CodeSystem/research-study-objective-type#primary
* objective[+]
  * name = "To document the safety profile of the xanomeline TTS."
  * type = http://terminology.hl7.org/CodeSystem/research-study-objective-type#primary
* objective[+]
  * name = "To assess the dose-dependent improvement in behavior. Improved scores on the Revised Neuropsychiatric Inventory (NPI-X) will indicate improvement in these areas."
  * type = http://terminology.hl7.org/CodeSystem/research-study-objective-type#secondary
* objective[+]
  * name = "To assess the dose-dependent improvements in activities of daily living. Improved scores on the Disability Assessment for Dementia (DAD) will indicate improvement in these areas."
  * type = http://terminology.hl7.org/CodeSystem/research-study-objective-type#secondary
* objective[+]
  * name = "To assess the dose-dependent improvements in an extended assessment of cognition that integrates attention/concentration tasks. The Alzheimer’s Disease Assessment Scale-14 item Cognitive Subscale, hereafter referred to as ADAS-Cog (14), will be used for this assessment."
  * type = http://terminology.hl7.org/CodeSystem/research-study-objective-type#secondary
* objective[+]
  * name = "To assess the treatment response as a function of Apo E genotype."
  * type = http://terminology.hl7.org/CodeSystem/research-study-objective-type#secondary
// * inclusion/exclusion criteria
* sponsor[Organization] = Reference(Organization/EliLillyAndCompany)


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/fsh/example-study-encounter-h2q-mc-lzzt-visit-1.fsh

Instance: H2Q-MC-LZZT-Study-Visit-1
InstanceOf: StudyVisitSoa
Title: "Visit-1"
Description: "Planned Visit [Visit-1]"
Usage: #example
* status = #active
* title = "H2Q-MC-LZZT Screening Visit"
* type = http://terminology.hl7.org/CodeSystem/plan-definition-type#clinical-protocol
* date = "2022-11-03"
* identifier[+]
  * value = "H2Q-MC-LZZT-Study-Visit-1"
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#PLAC
  * use = #usual
* identifier[+]
  * value = "VISIT-1"
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#PLAC
  * use = #usual
* action[+]
  * id = "VISIT-1-H2Q-MC-LZZT-Visit-Date"
  * title = "Record Visit Date"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Visit-Date"
* action[+]
  * title = "Informed Consent"
  * id = "H2Q-MC-LZZT-Informed-Consent"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Informed-Consent"
  * relatedAction[+]
    * actionId = "VISIT-1-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after
* action[+]
  * title = "Patient number assigned"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Patient-number-assigned"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Hachinski 4"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Hachinski-4"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "MMSE 10-23"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-MMSE-10-23"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Physical examination"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Physical-examination"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Medical History"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Medical-History"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Habits - Alcohol"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Habits-Alcohol"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Habits - Caffeine"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Habits-Caffeine"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Habits - Smoking"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Habits-Smoking"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Chest x-ray"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Chest-x-ray"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Vital signs: Height"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Vital-Signs-Height-PD"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Vital signs: Weight"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Vital-Signs-Weight-PD"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Vital Signs: Temperature"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Vital-Signs-Temperature-PD"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Vital Signs: Heart Rate and Blood Pressure"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Vital-Signs-HeartRate-BloodPressure"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "ECG"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-ECG"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Placebo TTS test"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Placebo-TTS-test"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "CT Scan"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-CT-Scan"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Concomitant Medications"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Concomitant-Medications"
  * relatedAction[+]
    * actionId = "VISIT-1-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after
* action[+]
  * title = "Laboratory (Hematology)"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Laboratory-Hemat"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Laboratory (Chemistry)"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Laboratory-Chem"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Laboratory (Urinalysis)"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Laboratory-Urinalysis"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Hemoglobin A1C"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Hemoglobin-A1C"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "ADAS-Cog"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-ADAS-Cog"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Clinician's Interview-Based Impression of Change"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-CIBIC"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Disability Assessment for Dementia"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-DAD"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Neuropsychiatric Inventory Questionnaire – Revised"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-NPI-X"
  * relatedAction[+]
    * actionId = "H2Q-MC-LZZT-Informed-Consent"
    * relationship = #after
* action[+]
  * title = "Adverse events"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Adverse-events"
  * relatedAction[+]
    * actionId = "VISIT-1-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/fsh/example-study-encounter-h2q-mc-lzzt-visit-3.fsh

Instance: H2Q-MC-LZZT-Study-Visit-3
InstanceOf: PlannedStudyVisitSoa
Usage: #example
Title: "Visit-3"
Description: "Planned Visit [Visit-3]"
* title = "H2Q-MC-LZZT Baseline/First Study Treatment Visit"
* type = http://terminology.hl7.org/CodeSystem/plan-definition-type#clinical-protocol
* date = "2022-11-03"
* identifier[+]
  * value = "VISIT-3"
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#PLAC
  * use = #usual
* status = #active
* action[+]
  * title = "Record Visit Date"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Visit-Date"
  * id = "VISIT-3-H2Q-MC-LZZT-Visit-Date"
* action[+]
  * title = "Vital signs: Weight"
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Vital-Signs-Weight-PD"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after
* action[+]
  * title = "Vital Signs: Temperature"
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Vital-Signs-Temperature-PD"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after
* action[+]
  * title = "Vital Signs: Heart Rate and Blood Pressure"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Vital-Signs-HeartRate-BloodPressure"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after
* action[+]
  * title = "Ambulatory ECG removed"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Ambulatory-ECG-removed"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after
* action[+]
  * title = "Concomitant Medications"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Concomitant-Medications"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Visit-Date"
    * relationship = #after
* action[+]
  * title = "Patient randomized"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Patient-randomized"
  * id = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
* action[+]
  * title = "Plasma Specimen (Xanomeline)"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Plasma-Specimen"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
    * relationship = #after
* action[+]
  * title = "Study drug record: Medications Dispensed/Returned"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Study-drug-record"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
    * relationship = #after
* action[+]
  * title = "ADAS-Cog"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-ADAS-Cog"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
    * relationship = #after
* action[+]
  * title = "Clinician's Interview-Based Impression of Change"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-CIBIC"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
    * relationship = #after
* action[+]
  * title = "Disability Assessment for Dementia"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-DAD"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
    * relationship = #after
* action[+]
  * title = "Neuropsychiatric Inventory Questionnaire – Revised"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-NPI-X"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
    * relationship = #after
* action[+]
  * title = "Adverse events"
  * definitionUri = "ActivityDefinition/H2Q-MC-LZZT-Adverse-events"
  * relatedAction[+]
    * actionId = "VISIT-3-H2Q-MC-LZZT-Patient-randomized"
    * relationship = #after


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/fsh/example-study-plan-h2q-mc-lzzt.fsh

Instance: H2Q-MC-LZZT-ProtocolDesign
InstanceOf: StudyProtocolSoa
Description: "H2Q-MC-LZZT-Protocol Schedule of Activities"
Usage: #example
* status = #active
* title = "H2Q-MC-LZZT Protocol Schedule of Activities"
* type = http://terminology.hl7.org/CodeSystem/plan-definition-type#clinical-protocol
* date = "2022-11-02"
* version = "LZZT_1"
* purpose = "The purpose of this PlanDefinition is to illustrate the planned study encounters."
* identifier[+]
  * value = "H2Q-MC-LZZT-ProtocolDesign-1"
  * type = http://terminology.hl7.org/CodeSystem/v2-0203#PLAC
  * use = #usual
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-1"
  * title = "Visit-1"
  * description = "Planned Visit [Visit-1]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #before
    * offsetDuration = 13 'd'
    * extension[acceptableOffsetRange].valueRange.low = 12 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 15 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-2"
  * title = "Visit-2"
  * description = "Planned Visit [Visit-2]"
  * id = "H2Q-MC-LZZT-Study-Visit-2"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #before
    * offsetDuration = 1 'd'
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-3"
  * id = "Index-Activity-Event"
  * title = "Visit-3"
  * description = "Planned Visit [Visit-3]"
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-4"
  * title = "Visit-4"
  * description = "Planned Visit [Visit-4]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 14 'd'
    * extension[acceptableOffsetRange].valueRange.low = 12 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 15 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-5"
  * title = "Visit-5"
  * description = "Planned Visit [Visit-5]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 28 'd'
    * extension[acceptableOffsetRange].valueRange.low = 26 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 30 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-6"
  * title = "Visit-6"
  * description = "Planned Visit [Visit-6]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 35 'd'
    * extension[acceptableOffsetRange].valueRange.low = 33 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 37 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-7"
  * title = "Visit-7"
  * description = "Planned Visit [Visit-7]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 42 'd'
    * extension[acceptableOffsetRange].valueRange.low = 40 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 44 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-8"
  * id = "H2Q-MC-LZZT-Study-Visit-8"
  * title = "Visit-8"
  * description = "Planned Visit [Visit-8]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 56 'd'
    * extension[acceptableOffsetRange].valueRange.low = 54 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 58 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-8T"
  * title = "Visit-8.1"
  * description = "Telephone Contact [Post Visit-8]"
  * relatedAction[+] 
    * actionId = "H2Q-MC-LZZT-Study-Visit-8"
    * relationship = #after
    * offsetDuration = 14 'd'
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-9"
  * id = "H2Q-MC-LZZT-Study-Visit-9"
  * title = "Visit-9"
  * description = "Planned Visit [Visit-9]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 84 'd'
    * extension[acceptableOffsetRange].valueRange.low = 82 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 86 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-9T"
  * title = "Visit-9.1"
  * description = "Telephone Contact Visit [Post Visit-9]"
  * relatedAction[+] 
    * actionId = "H2Q-MC-LZZT-Study-Visit-9"
    * relationship = #after
    * offsetDuration = 14 'd'
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-10"
  * id = "H2Q-MC-LZZT-Study-Visit-10"
  * title = "Visit-10"
  * description = "Planned Visit [Visit-10]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 112 'd'
    * extension[acceptableOffsetRange].valueRange.low = 110 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 114 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-10T"
  * title = "Visit-10.1"
  * description = "Telephone Contact Visit [Post Visit-10]"
  * relatedAction[+] 
    * actionId = "H2Q-MC-LZZT-Study-Visit-10"
    * relationship = #after
    * offsetDuration = 14 'd'
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-11"
  * id = "H2Q-MC-LZZT-Study-Visit-11"
  * title = "Visit-11"
  * description = "Planned Visit [Visit-11]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 140 'd'
    * extension[acceptableOffsetRange].valueRange.low = 138 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 142 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-11T"
  * title = "Visit-11.1"
  * description = "Telephone Contact Visit [Post Visit-11]"
  * relatedAction[+] 
    * actionId = "H2Q-MC-LZZT-Study-Visit-11"
    * relationship = #after
    * offsetDuration = 14 'd'
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-12"
  * title = "Visit-12"
  * description = "Planned Visit [Visit-12]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 168 'd'
    * extension[acceptableOffsetRange].valueRange.low = 166 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 170 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-Visit-13"
  * title = "Visit-13"
  * description = "Planned Visit [Visit-13]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
    * offsetDuration = 182 'd'
    * extension[acceptableOffsetRange].valueRange.low = 180 'd'    
    * extension[acceptableOffsetRange].valueRange.high = 184 'd'    
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-ET-14"
  * title = "ET-14"
  * description = "Planned Visit [ET-14]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after
* action[+]
  * definitionUri = "PlanDefinition/H2Q-MC-LZZT-Study-RT-15"
  * title = "RT-15"
  * description = "Planned Visit [RT-15]"
  * relatedAction[+] 
    * actionId = "Index-Activity-Event"
    * relationship = #after



---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/fsh/research.fsh

Profile: ResearchStudySoa
Parent: ResearchStudy
Description: "A profile that lists the data elements of a Research Study that must be supported when used to schedule activities."
* identifier MS
* title MS
* protocol MS
* protocol only Reference(StudyProtocolSoa)
* status MS
* primaryPurposeType MS
* phase MS
* category MS
* focus MS
* condition MS
* contact MS
* relatedArtifact MS
* keyword MS
* description MS
* sponsor MS
* principalInvestigator MS
* reasonStopped MS
* arm MS
  * name MS
  * type MS
  * description MS
* objective MS
  * name MS
  * type MS

Profile: StudyProtocolSoa
Parent: PlanDefinition
Description: "A profile that lists the data elements of a PlanDefinition that must be supported so that it can represent an entire set of visits and activities for a given study protocol."
* url MS
* name MS
* title MS
* status MS
* subject[x] MS
* description MS
* action MS
  * title MS
  * code MS
  * trigger MS
  * relatedAction MS
    * actionId MS
    * relationship MS
    * offset[x] MS
    * extension contains AcceptableOffsetRangeSoa named acceptableOffsetRange 0..1
  * timing[x] MS
  * requiredBehavior MS
  * cardinalityBehavior MS

Profile: StudyVisitSoa
Parent: PlanDefinition
Description: "An abstract profile that lists the data elements of a PlanDefinition that must be supported so that it can represent a Study Visit."
* ^abstract = true
* url MS
* name MS
* title MS
* status MS
* subject[x] MS
* description MS
* action MS
  * title MS
  * code MS
  * trigger MS
  * relatedAction MS
    * actionId MS
    * relationship MS
    * offset[x] MS
    * extension contains AcceptableOffsetRangeSoa named acceptableOffsetRange 0..1
  * timing[x] MS
  * requiredBehavior MS
  * cardinalityBehavior MS
  * definition[x] MS

Profile: PlannedStudyVisitSoa
Parent: StudyVisitSoa
Description: "A profile that further qualifies the StudyVisitSoa profile so that it can represent a planned visit."

// Profile: UnplannedStudyVisitSoa
// Parent: StudyVisitSoa
// Description: "A profile that further qualifies the StudyVisitSoa profile so that it can represent an unplanned visit."

Profile: StudyActivitySoa
Parent: ActivityDefinition
Description: "A profile lists the data elements of an ActivityDefinition that must be supported so that it can represent an activity that is being scheduled."
* url MS
* name MS
* title MS
* status MS
* subject[x] MS
* description MS
* observationRequirement MS


Extension: AcceptableOffsetRangeSoa
Title: "Acceptable Offset Range"
Description: "Provides an offset range that, along with offsetDuration, indicates an acceptable range of dates for a related action."
* ^context[+].type = #element
* ^context[=].expression = "PlanDefinition.action.relatedAction"
* value[x] 1..1
* value[x] only Range


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/images-source/basic-structure.plantuml

@startuml "basic-structure"

package "Design"{
    [ResearchStudy] ..> [StudyDefinition(PlanDefinition)] : protocol
    [StudyDefinition(PlanDefinition)] ..> [PlannedEncounter(PlanDefinition)] : action[n]
    [PlannedEncounter(PlanDefinition)] ..> [PlannedActivity(PlanDefinition | ActivityDefinition)] : action[n]
}

@enduml

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/images-source/def-ref.plantuml

@startuml "def-ref"

class ItemDef {
    OID
}

class ItemRef {
    ItemOID
}

ItemRef --> ItemDef: OID

@enduml

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/images-source/form-hierarchy.plantuml

@startuml "form-hierarchy"

package "ODM Definition"{
    class Protocol

    class MetaDataVersion {
        MetaDataVersionOID
    }

    class StudyEventDef

    class FormDef

    class ItemGroupDef

    class ItemDef

    MetaDataVersion -- Protocol
    Protocol *-- StudyEventDef: StudyEventRef
    StudyEventDef *-- FormDef : FormRef
    FormDef *-- ItemGroupDef : ItemGroupRef
    ItemGroupDef *-- ItemDef : ItemRef
}

package "ODM Data" {
    class ClinicalData
    class SubjectData 
    class StudyEventData
    class FormData
    class ItemGroupData
    class ItemData

    ClinicalData *-- SubjectData
    SubjectData *-- StudyEventData
    StudyEventData *-- FormData
    FormData *-- ItemGroupData
    ItemGroupData *-- ItemData

    ClinicalData --> MetaDataVersion: MetaDataVersionOID
    StudyEventData --> StudyEventDef: StudyEventOID
    FormData --> FormDef: FormOID
    ItemGroupData --> ItemGroupDef: ItemGroupOID
    ItemData --> ItemDef: ItemOID

}
@enduml

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/images-source/high-level-overview.plantuml

@startuml "high-level-overview"

package "Design"{
    [ResearchStudy] ..> [StudyDefinition(PlanDefinition)] : protocol
    [StudyDefinition(PlanDefinition)] ..> [PlannedVisit(PlanDefinition)] : action[n]
    [PlannedVisit(PlanDefinition)] ..> [PlannedActivity(PlanDefinition | ActivityDefinition)] : action[n]
}

package "H2Q-MC-LZZT" {
    [H2Q-MC-LZZT] <- [ResearchStudy]
    [H2Q-MC-LZZT Schedule of Activities] <- [StudyDefinition(PlanDefinition)]
    [H2Q-MC-LZZT] ..> [H2Q-MC-LZZT Schedule of Activities]: protocol
    [H2Q-MC-LZZT Visits] <- [PlannedVisit(PlanDefinition)]
    [H2Q-MC-LZZT Schedule of Activities] ..> [H2Q-MC-LZZT Visits] : refers
    [H2Q-MC-LZZT Planned Activities] <- [PlannedActivity(PlanDefinition | ActivityDefinition)]
    [H2Q-MC-LZZT Visits] ..> [H2Q-MC-LZZT Planned Activities]: refers
}

@enduml

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/images-source/implementation-plan-def.plantuml

@startuml "implementation-plan-def"


package "Definition" {
    object ResearchStudy 
    object PlannedStudyDefinition{
        type = PlanDefinition
    }
    object PlannedScreeningVisit {
        type = PlanDefinition
    }
    object VitalSignsActivity {
        type = ActivityDefinition
    }

    ResearchStudy --> PlannedStudyDefinition : protocol
    PlannedStudyDefinition --> PlannedScreeningVisit : action
    PlannedScreeningVisit --> VitalSignsActivity : action
}

package "Execution" {
    object Patient
    object ResearchSubject

    object StudyPlan {
        type = CarePlan
    }

    object PlannedVisit {
        type = CarePlan
    }

    object ScheduledVisit {
        type = ServiceRequest
    }

    object ScreeningVisit {
        type = Encounter
    } 

    object ScheduledVitalSigns {
        type = ServiceRequest
    }

    object ConductedVitalSigns {
        type = Procedure       
    }

    object SystolicBloodPressureValue {
        type = Observation
    }

    ResearchSubject --> ResearchStudy : study
    ResearchSubject --> Patient : individual
    StudyPlan <-- PlannedVisit : instantiatesCanonical
    PlannedVisit <-- ScheduledVisit : basedOn
    ScheduledVisit <-- ScreeningVisit : basedOn
    ScreeningVisit <-- ConductedVitalSigns : encounter
    ScheduledVitalSigns --> ConductedVitalSigns : basedOn
    ConductedVitalSigns <-- SystolicBloodPressureValue : partOf
    Patient <-- SystolicBloodPressureValue : subject
}

PlannedStudyDefinition <.. StudyPlan : instantiatesCanonical 
PlannedScreeningVisit <.. PlannedVisit: instantiatesCanonical
VitalSignsActivity <.. ScheduledVitalSigns : instantiatesCanonical

@enduml

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/images-source/odm-fhir-map.plantuml

@startuml "form-hierarchy"

package "ODM"{
    object Study
    object Protocol

    object MetaDataVersion {
        MetaDataVersionOID
    }

    object StudyEventDef

    object FormDef

    object ItemGroupDef

    object ItemDef

    Study -- MetaDataVersion
    MetaDataVersion -- Protocol
    Protocol *-- StudyEventDef: StudyEventRef
    StudyEventDef *-- FormDef : FormRef
    FormDef *-- ItemGroupDef : ItemGroupRef
    ItemGroupDef *-- ItemDef : ItemRef
}

package "FHIR" {
    object ResearchStudy{
        type ResearchStudy
    }


    object StudyDefinition{
        type PlanDefinition
    }

    object PlannedEncounter{
        type PlanDefinition
    }

    object PlannedActivity {
        type ActivityDefinition
    }


    ResearchStudy -- StudyDefinition : protocol
    StudyDefinition *-- PlannedEncounter : action[n]
    PlannedEncounter *-- PlannedActivity : action[n]

    ResearchStudy .. Study 
    StudyDefinition .. Protocol
    PlannedEncounter .. StudyEventDef
    PlannedActivity .. FormDef    
}

@enduml

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/images-source/plandef-actions.plantuml

@startuml "plandef-actions"

object StudyDefinition
object Screening
object Baseline
object Visit1 
object Visit2
object EndOfStudy

StudyDefinition --|> Screening : action
StudyDefinition --|> Baseline : action, id: BSL
StudyDefinition --|> Visit1 : action
StudyDefinition --|> Visit2 : action
StudyDefinition --|> EndOfStudy : action

Screening --> Baseline
Baseline --> Visit1
Visit1 --> Visit2
Visit2 --> EndOfStudy

Screening ..> Baseline : before:BSL
Visit1 ..> Baseline : after:BSL
Visit2 ..> Baseline : after:BSL

@enduml

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/basic-structure.md

### Core Implementation Model for Clinical Study Schedule of Activities (SoA)
The Schedule of Activities (SoA) forms a key part of a Clinical Trial Protocol; it is usually presented as a table with the columns detailing planned study 'visits' (Encounters) and the rows the details of study activities (Activities) that are to be undertaken at that visit, and they are key to understanding how the objectives of the study are to be implemented. 

The image below shows a typical example SoA:

<!-- <img src="lzzt_soa_800x585.png" alt="H2Q-LZZT-MC Schedule of Activities" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" /> -->

<!-- Image Map Generated by http://www.image-map.net/ -->
<img src="lzzt_soa_650x475_imagemap.png" usemap="#image-map" style="float:none; margin: 0px 0px 0px 0px;" width="650px">
<map name="image-map">
      <area alt="Research Study" title="Research Study" href="ResearchStudy-H2Q-MC-LZZT-ResearchStudy.html" coords="305,37,625,72" shape="rect" target="_blank">
      <area alt="Visit 3 (Study Encounter)" title="Visit 3 (Study Encounter)" href="PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html" coords="344,102,397,830" shape="rect" target="_blank">
      <area alt="Protocol Schedule of Activities " title="Protocol Schedule of Activities " href="PlanDefinition-H2Q-MC-LZZT-ProtocolDesign.html" coords="190,117,653,167" shape="rect" target="_blank">
      <area alt="Vital Signs/Temperature (ActivityDefinition)" title="Vital Signs/Temperature (ActivityDefinition)" href="ActivityDefinition-H2Q-MC-LZZT-Vital-Signs-Temperature.html" coords="541,375,602,406" shape="rect" target="_blank">
</map>

* The Encounters/Visits (any planned event corresponding to clinical data collection) are represented along the horizontal axis (for an example see [Visit 3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html))
* The Activities (the planned activities expected to occur at the event) are represented vertically (for an example see [Vital Signs/Temperature](ActivityDefinition-H2Q-MC-LZZT-Vital-Signs-Temperature.html))
* ... with the required Activities at each Encounter shown by a cross (X) in the matrix.

The SoA in this form represents the basic activities required at each Encounter and is usually accompanied by the details of the timings of the events (weeks) and an Encounter identifier (in the example the visit numbers... V1, V2... etc.)

The SoA table is then used as the basic building block for configuring the necessary tools and applications required to manage the progress of study participants during the study. This includes detailing activities such as when study interventions are to occur (e.g drug administration), and when required study evaluations are be made and the data collected and recorded.  

These SoA specifications form the basis for developing study specific Case Report Forms (CRFs): the primary data collection instrument.  Direct data collection and collation approaches such as the use of medical devices (Sensor Informed trials), or  remote study management (e.g. Decentralised Trials), and direct data transfer from service providers such as central laboratories require confirmed syntactic, structural and semantic interoperability.     

The key consideration for the SoA is the collection of data to support the hypotheses presented in the Protocol. The CRFs used in Clinical Research are the primary interface for recording **outcomes** of activities.  They are designed to record the sets of data the study requires, and usually takes little account of the practical activities required to obtain the data. For FHIR specified SoAs to be successful when requirements are transcribed from the SoA for eHR implementation, a more 'workflow-based' approach to data management is required.  Specifically, transcription needs to be able to clearly define:  

* **what** activities are being done
* **when** are they being done
* the **outcomes** from those activities, and potentially
* **who** is to perform/undertake the activities

### Implementing a SoA using FHIR Resources
The FHIR standard (Fast Healthcare Interoperability Resources) is designed to support the exchange of electronic health records. The 'Definitional Artifacts' section of the 'Specialized' FHIR Resources category provides a set of FHIR Resources that are designed to enable research specifications such as those in a SoA to be represented in a standard format that can consumed by  eHR systems to plan and execute research protocols directly. 

In order to represent the SoA we needed a set of definitional FHIR resources to represent the planned activities and the relationships between them.  The work to date has focused on a Workflow view of data management, and has leveraged the existing FHIR workflow patterns to achieve this.  

SoAs do not (a) stand alone - they are study specific, and (b) describe planned activities expected to be executed for each [Patient](http://hl7.org/fhir/Patient) recruited to the study.  Two Research-oriented resources have been used to associate SoA with the correct study and to recognise patients as being study participants:
* [ResearchStudy](http://hl7.org/fhir/ResearchStudy) - a representational artifact for a Research Study
* [ResearchSubject](http://hl7.org/fhir/ResearchSubject) - an artifact used to link a Patient research to the ResearchStudy

The project has also restricted its investigations and SoA IG development to using the [PlanDefinition](http://hl7.org/fhir/PlanDefinition) and [ActivityDefinition](http://hl7.org/fhir/ActivityDefinition). Other Structured Data Collection resources (e.g. Questionnaire, EventDefinition, etc.) have not been systematically investigated for their potential to define SoA requirements. The Workflow resources are defined on the [FHIR Workflow](https://hl7.org/fhir/workflow.html) page; the key points for modeling a SoA deal with the [Definition](https://hl7.org/fhir/workflow.html#definition) and [Request](https://hl7.org/fhir/workflow.html#request) patterns.

The Definitional Artifacts have been used to create the structure - schedule and activities - to support bot study SoA specification (definitions) and planned contextualization. 

The basic structure is summarized in the following diagram:

<img src="Vulcan-SoA-basic-structure.png" alt="Schedule of Activities Basic Structure" width="800px" style="float:none; margin: 0px 0px 0px 0px;" />

The high-level points are as follows:

* The [ResearchStudy](https://hl7.org/fhir/researchstudy.html) has at least one _protocol_ reference to a [PlanDefinition](https://hl7.org/fhir/plandefinition.html) for the Study Definition,
* Under the Study Definition there are references to each of the planned encounters/visits through the _action_ predicate (linking to the [PlanDefinition](http://hl7.org/fhir/PlanDefinition) instance for the encounter),  
* Within a planned encounter/visit, the planned activities are represented through the _action_ predicate linking to the [ActivityDefinition](http://hl7.org/fhir/ActivityDefinition) representing the activity.

Many activities are event or pre-condition based. The _action.relatedAction_ predicate is used to represent the relationships between activities.  This specifies what activities are to be done and when they are planned to be done (relative to a reference or pivot event).

The following example illustrates this for a flow of Study Visits:

<img src="vulcan_soa_related_actions.png" alt="Related Actions" width="800px" style="float:none; margin: 0px 0px 0px 0px;" />

 For example;  Informed Consent is required prior to any study activities commencing.  This is modeled using the _relatedAction_ predicate on the _action_ predicate. This is illustrated in the above diagram.  The `Treatment Day 1` Encounter is annotated in the design.  The other encounters are defined as being _before_ or _after_ this action; note - in this example we are binding the relationships between encounters; where these encounters are proxies for the activity within the encounter (e.g. First Study Intervention).  

It is also possible to define the interval between these actions as illustrated in the [Protocol Design Example](PlanDefinition-H2Q-MC-LZZT-ProtocolDesign.html).  In this example the planned event `Visit-3` has an _id_ assigned to the _action.relatedAction_ predicate.  Prior and subsequent activities use the _relatedAction.actionId_ to reference the pivot activity.  This allows elementary sequencing of planned elements to represent the SoA.  This sample also represents a simple windowing capability for scheduling activities relative to the index event.  There is a separate use case to address how targeted windows can be applied to the scheduling of study activities.

This is also illustrated within an encounter in the [Visit 1](PlanDefinition-H2Q-MC-LZZT-Study-Visit-1.html) and [Visit 3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html) examples.  Within an encounter tasks are defined using [ActivityDefinition](http://hl7.org/fhir/ActivityDefinition) resources, and key tasks have a _action.id_ attribute; tasks that should occur relative to the key task reference the task via the _action.relatedAction_ attribute.  In the H2Q-MC-LZZT study within-encounter activities are not as structured as they would be for say a Phase I Pharmacokinetic study, so the activities are defined as being before or after the key task (a specific example includes study data collection activities strictly occurring after collection of informed consent).

#### Observations on how the SoA can be implemented

Given the structure discussed above, consideration has been given to how best to implement/use the planned activities within an Electronic Healthcare Record System; particularly how they can be used to manage the progress of a [ResearchSubject](http://hl7.org/fhir/ResearchSubject) through the study.   

Following the [FHIR Workflow](https://hl7.org/fhir/workflow.html) paradigm, what needs to be done has been defined using the [Definition](https://hl7.org/fhir/definition.html) patterns, which are scheduled using [Request](https://hl7.org/fhir/request.html) patterns and ultimately manifested as [Event](https://hl7.org/fhir/event.html) patterns.   The current implementation examples are constrained to the minimum requirement in order that the core concepts in a clinical trial protocol are accurately modelled

The example below shows how a defined study plan can be related to an executed activity and the required outcomes/results.

{% include implementation-plan-def.svg %}

While the diagram may look complex it is methodologically sound as it builds out an approach using a set of common archetypes.  There is a flow of planned -> scheduled -> performed activities that IG implementers can follow to build processes and software meeting the SoA objectives.  This serves as a way to drive data collection (for both prospective and retrospective use cases) and it provides a broad scope for current and future use cases.  Please note, that much of the workflow is not shown in this representation; there are no references to scheduling and orchestration resources (eg [Appointment](https://hl7.org/fhir/appointment.html), [AppointmentResponse](https://hl7.org/fhir/appointmentresponse.html) )

Taking the above diagram a step further, the following is an illustration of which FHIR resources, with their respective associations, may be used to define the scheduling of activities, procedures, observations and investigational product (IP) administrations.
* [PlanDefinition](https://hl7.org/fhir/plandefinition.html) resources may be used to define each clinical encounter, the activities within that clinical encounter, the relative timing (before or after) and actual timing between activities. A [PlanDefinition](https://hl7.org/fhir/plandefinition.html) may reference other [PlanDefinition](https://hl7.org/fhir/plandefinition.html) resources.
* Activities within a [PlanDefinition](https://hl7.org/fhir/plandefinition.html) are further described in [ActivityDefinition](https://hl7.org/fhir/ActivityDefinition.html).
* It is the [CarePlan](https://hl7.org/fhir/careplan.html) resource that links an individual [Patient](https://hl7.org/fhir/Patient.html) to the [PlanDefinition](https://hl7.org/fhir/plandefinition.html). To maintain anonymity to the sponsor, the [ResearchSubject](https://hl7.org/fhir/ResearchSubject.html) resource is used to pseudonymize any identifiable information about the patient.
* [ServiceRequest](https://hl7.org/fhir/ServiceRequest.html) may trigger the instantiation request for a procedure or diagnostic or other service to be planned, proposed, or performed, as distinguished by the [ServiceRequest.intent](https://hl7.org/fhir/ServiceRequest.html) field value, with or on a patient. The procedure will lead to either a [Procedure](https://hl7.org/fhir/Procedure.html) or [DiagnosticReport](https://hl7.org/fhir/DiagnosticReport.html), which in turn may reference one or more [Observation](https://hl7.org/fhir/Observation.html) resources, which summarize the performance of the procedures and associated documentation such as observations, images, findings that are relevant to the treatment/management of the subject. [ServiceRequest](https://hl7.org/fhir/ServiceRequest.html) may also instantiate the scheduling of a [Encounter](https://hl7.org/fhir/Encounter.html), at which the planned activities, such as [Procedure](https://hl7.org/fhir/Procedure.html), [Observation](https://hl7.org/fhir/Observation.html), and [MedicationRequest](https://hl7.org/fhir/MedicationRequest.html) resources for investigation product, may be scheduled and performed.
* Although not directly germane to propagating the protocol schedule, it is important to note that, depending on how and where IP is administered to the patient, evidence of the IP administration may be recorded in [MedicationStatement](https://hl7.org/fhir/MedicationStatement.html) and/or [MedicationDispense](https://hl7.org/fhir/MedicationDispense.html) plus [MedicationAdministration](https://hl7.org/fhir/MedicationAdministration.html). That is discussed in more detail in the [Investigational Product Use Case](ip-administration.html).

<img src="FHIR_SOA_Resources_Used - Hierarchical View.png" usemap="#image-map" style="float:none; margin: 0px 0px 0px 0px;" width="800px">

#### Caveats
The SoA Working group team has relied heavily on the Workflow patterns as mentioned in the core specification as a how the process of data collection _could_ proceed, without being prescriptive about how activities _should_ be manifested in the many systems that are involved in the day to day execution of healthcare.  

The SoA FHIR IG assumes that how activities/tasks get executed is dependent on their respective services, procedures, and administrative mechanisms. The working group has assumed that it will vary dependent on the scenario and how each system, application, device, etc. are setup.



---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/cdisc-odm.md

### Alignment between the CDISC Operational Data Model (ODM) and the FHIR SoA Model

The CDISC Operational Data Model (ODM) structure is a common model for representing defined, planned and performed activities in Clinical Data Management Systems (CDMS, EDC, etc.) and Clinical Trial Management Systems (CTMS).  It is the de facto standard for exchanging data and metadata between clinical data management systems. 

Having a standard alignment between the ODM and FHIR will enable rapid and reproducible system builds using standardised interfaces. Whether the initial study design is developed in the ODM/XML formats or using FHIR Resources, each EHR system should then be able to use the study design as part of study start up activities by a Study Builder.  There will need to be some augmentation of the process to make best use of transportable concepts (e.g., test codes, procedure codes, etc.) but it is hoped the work here will be able to be used as a core implementation model.  
 
#### CDISC Operational Data Model (ODM)

The CDISC ODM is a model designed for the transportation and storage of Study Data for Clinical Studies.  The landing page for the standard can be found here:  [https://www.cdisc.org/standards/data-exchange/odm](https://www.cdisc.org/standards/data-exchange/odm)

Note: the CDISC ODM is owned by [CDISC](https://cdisc.org).  A free CDISC website account is required to access the material - [create an account here](https://www.cdisc.org/user/registration).

This document is a light touch overview of the ODM - more information can be found on the CDISC GitHub site:
* The CDISC repository for the ODM found [here](https://github.com/cdisc-org/DataExchange-ODM). 
* [ODM Schema](https://github.com/cdisc-org/DataExchange-ODM/tree/main/schema)

#### What is the ODM
The CDISC Operational Data Model (ODM) is a XML-based model defined for the transport and archival of Clinical Trials Data; it is broadly made up of the following top-level elements
* Clinical Data - actual datapoints gathered on study participants
* Metadata - definitions used to capture and report the data collected
* Administrative Data - information regarding the collection of data (sites, personnel, etc)
* Reference Data - common data needed to interpret the collected data

Structures within the ODM have little semantic meaning; it is a format focused on the representation of planned and performed activities so captures relationships between elements moreso than the actual actual definition of the element itself; for example - there is no characterisation of a participant (in contrast to the Patient resource); there is a **SubjectData** element used to collect captured datapoints for an individual participant.  The **SubjectData** element includes attributes such as an OID as an identifier, but there is no information model that says the OID is an external identifier (eg Subject ID) or some other internal identifier (eg Primary Key from a Subjects table, as an example). 

Data collection is driven by Forms; forms group activities by type (ie all the Vital Signs observations for a single visit are usually grouped in a single form, irrespective of multiple planned timepoints for the elements).  Individual fields on a form are Items in ODM parlance and have associated metadata pertaining to the allowable content (eg datatype, length, constrained values or allowable units for a value)


#### Structural Overview

The ODM specification is distributed as an XML document, and as such can be extended through the use of vendor namespaces; examples where this has been done include:
* Study Design Model - extensions to cover topics such as workflow, study design concepts
* Dataset-XML - extensions to use for transporting datasets

The implementation of the Study Metadata follows a DEF-REF pattern.  We define a type of element (eg Visit, Form, Field) and then reference it one or more times within the corresponding element; as an example:
```xml
<StudyEventDef OID="SE.SCREENING_VISIT" Name="Screening Visit (Visit 1)" Repeating="No" Type="Scheduled">
  <Description>
    <TranslatedText xml:lang="en">Screening Visit at day -14</TranslatedText>
  </Description>
  <FormRef FormOID="F.DOV" Mandatory="Yes" OrderNumber="1"/>
  <FormRef FormOID="F.DS_IC" Mandatory="Yes" OrderNumber="2"/>
  <FormRef FormOID="F.IE" Mandatory="Yes" OrderNumber="3"/>
  ...
</StudyEventDef>
...
<FormDef OID="F.DOV" Name="Date of Visit" Repeating="No">
	<Description>
			<TranslatedText xml:lang="en-US">Subject Visits consolidates information about the timing of subject visits that is otherwise spread over domains that include the visit variables (VISITNUM and possibly VISIT and/or VISITDY).</TranslatedText>
	</Description>
	<ItemGroupRef ItemGroupOID="IG.DOV" Mandatory="Yes" OrderNumber="1"/>
</FormDef>
```
The *OID* is the key here; it serves as the unique id (for a given --Def element type); the Reference to this --Def in the --Ref element is usually qualified with the Element type; eg

{%include def-ref.svg%}

*OID* are the best key to share data with clinical research systems.

#### How the schedule of activities implemented in ODM 
The linking of Data Elements (outcomes of Observations) and Definitions is illustrated here:

{%include form-hierarchy.svg%}

The top-level element for the definitions for the Study are contained within the **MetaDataVersion** element

##### MetaDataVersion
The **MetaDataVersion** is a set of study definition configuration; studies can have multiple versions of a study definition (sometimes in parallel); the version is identified by the *OID*

```xml
<MetaDataVersion Description="LZZT study design version 1" Name="LZZT study design version 1" OID="LZZT_1">
  <Protocol>
    <Description>
      <TranslatedText xml:lang="en">A randomized, double-blind, parallel (3 arm), placebo-controlled trial of 26 weeks duration.</TranslatedText>
    </Description>
...
</MetaDataVersion>
```

##### Protocol
The **Protocol** lists the study events/encounters that can occur within a Study. 
```xml
<Protocol>
	<Description>
		<TranslatedText xml:lang="en">A randomized, double-blind, parallel (3 arm), placebo-controlled trial of 26 weeks duration.</TranslatedText>
	</Description>
	<StudyEventRef Mandatory="Yes" StudyEventOID="SE.SCREENING_VISIT"/>
	<StudyEventRef Mandatory="Yes" StudyEventOID="SE.AMB_ECG_VISIT"/>
...
```
This is mostly a container element.

###### StudyEvent
The StudyEvent is the archetype for a Encounters or Study Visits.  
```xml
<StudyEventDef OID="SE.SCREENING_VISIT" Name="Screening Visit (Visit 1)" Repeating="No" Type="Scheduled">
  <Description>
    <TranslatedText xml:lang="en">Screening Visit at day -14</TranslatedText>
  </Description>
  <FormRef FormOID="F.DOV" Mandatory="Yes" OrderNumber="1"/>
  ...
</StudyEventDef>
...
```

##### Form
The Form is an archetype for activities within a Visit.  


```xml
<FormDef OID="F.DM_1" Name="Demographics" Repeating="No">
  <Description>
    <TranslatedText xml:lang="en-US">Definition of the variables needed to support the collection of a subject's date of birth, gender, race and ethnicity.</TranslatedText>
  </Description>
  <ItemGroupRef ItemGroupOID="IG.DM_1" Mandatory="Yes" OrderNumber="1"/>
</FormDef>
<FormDef OID="F.IE" Name="Inclusion / Exclusion Criteria" Repeating="No">
  <Description>
    <TranslatedText xml:lang="en">Inclusion / Exclusion Criteria</TranslatedText>
  </Description>
  <ItemGroupRef ItemGroupOID="IG.IE_IN" OrderNumber="1" Mandatory="Yes"/>
  <ItemGroupRef ItemGroupOID="IG.IE_EX" OrderNumber="2" Mandatory="Yes"/>
</FormDef>
```
Form designs are often driven by other business considerations that are not necessariy aligned with data domains.  As such a single **Form** may match to multiple resources in the source system.

##### ItemGroup
**ItemGroup** could be considered as primarily a stuctural concept; it links fields to the form.  Rather than attaching directly to the form, the **ItemGroup** is used to group fields within the form. In the current iteration it is primarily used to represent both repeating and non-repeating sets of fields in a CRF.  

An example of this would be a series of assessments done around a dosing event (eg Vitals Pre-dose, 1h Post-Dose, 2h Post-Dose, etc); the observations are repeated using an ItemGroup with the *Repeating* attribute set to `Yes`
```xml
<ItemGroupDef OID="IG.DM_1" Name="Demographics" SASDatasetName="DMSUBJ" Repeating="No">
  <ItemRef ItemOID="I.BRTHDAT" Mandatory="No" OrderNumber="1"/>
  <ItemRef ItemOID="I.SEX" Mandatory="Yes" OrderNumber="2"/>
  <ItemRef ItemOID="I.ETHNIC" Mandatory="Yes" OrderNumber="3"/>
  <ItemRef ItemOID="I.RACE" Mandatory="Yes" OrderNumber="4"/>
</ItemGroupDef>
```

##### Item
The **Item** represents an individual data collection element on a Form.
```xml
<ItemDef OID="I.BRTHDAT" SASFieldName="BRTHDAT" Name="Birth Date" DataType="date">
  <Description>
    <TranslatedText xml:lang="en-US">A subject's date of birth. The complete Date of Birth is made from the temporal components of Birth Year, Birth Month, and Birth Day.</TranslatedText>
  </Description>
  <Question>
    <TranslatedText xml:lang="en-US">What is the subject's date of birth?</TranslatedText>
  </Question>
</ItemDef>
...
<ItemDef OID="I.SEX" SASFieldName="SEX" Name="Sex" DataType="text" Origin="CRF" Length="50">
  <Description>
    <TranslatedText xml:lang="en-US">Sex captures a subject's or non-subject's chromosomal characteristic.</TranslatedText>
  </Description>
  <Question>
    <TranslatedText xml:lang="en-US">What is the sex of the subject?</TranslatedText>
  </Question>
  <CodeListRef CodeListOID="CL.SEX"/>
</ItemDef>
...
<ItemDef OID="I.SUDOSE_BEER" DataType="float" Origin="CRF" Length="6" Name="Beer Amount" SASFieldName="SUDOSBER" SignificantDigits="2">
  <Description>
    <TranslatedText xml:lang="en-US">Beer consumption amount.</TranslatedText>
  </Description>
  <Question>
    <TranslatedText xml:lang="en-US">What was the amount of beer consumed?</TranslatedText>
  </Question>
</ItemDef>
```
As can be seen from the examples, the attributes on the Item element are aimed at the characterisation of the datapoints on the form - in traditional data capture the data is constrained according to the attributes, e.g. the field will be restricted to values matching the declared *DataType* and *Length*.  Data transfers to these fields will need to conform.

The **ItemDef** can have two data related child elements; the *CodeListRef* (zero or one) and *MeasurementUnitRef* (zero or more).  These are links to **CodeList** and **MeasurementUnit** elements.

##### CodeList
A **CodeList** is used to constrain the permitted values for a field.  Each **CodeListItem** represents a permissible value for the field; these have a *CodedValue* and a *Decode*: the *CodedValue* is the value intended to be written to the backing store and the *Decode* is the representation of the *CodedValue* that is shown to the user. 
```xml
<CodeList OID="CL.SEX" Name="Sex" DataType="text">
  <CodeListItem CodedValue="F" OrderNumber="1">
    <Decode>
      <TranslatedText xml:lang="en-US">Female</TranslatedText>
    </Decode>
  </CodeListItem>
  <CodeListItem CodedValue="M" OrderNumber="2">
    <Decode>
      <TranslatedText xml:lang="en-US">Male</TranslatedText>
    </Decode>
  </CodeListItem>
</CodeList>
```

##### MeasurementUnit
The **MeasurementUnit** is used to represent the possible units for a physical quantity with a Unit; the Unit can be reused across many elements.
```xml
<MeasurementUnit OID="mmHg" Name="mmHg">
  <Symbol>
    <TranslatedText xml:lang="en">mmHg</TranslatedText>
    <TranslatedText xml:lang="ja">mmHg</TranslatedText>
  </Symbol>
</MeasurementUnit>
```
The *Symbol* is used for the representation of the Unit; the *OID* is used as the persisted value.

#### Linking between ODM Elements and FHIR Resources

As part of the current iteration of the IG the following ODM/XML to FHIR Resource high level concept alignments have been tested for defined activities:

* Align the _Protocol_ element with [PlanDefinition](https://hl7.org/fhir/plandefinition.html)
* Align the  _StudyEvent_ element with [PlanDefinition](https://hl7.org/fhir/plandefinition.html) (with the _kind_ driving the implementation towards an [Encounter](https://hl7.org/fhir/encounter.html) )
* Align the _FormDef_ with [ActivityDefinition](https://hl7.org/fhir/activitydefinition.html)

In modelling the H2Q-MC-LZZT study ODM the group used a pattern for the [Identifier](http://www.hl7.org/fhir/datatypes.html#Identifier) that was used to link the OIDs from the ODM elements to the FHIR resources.  Identifiers can be used to find resources using the common resource search patterns - this will be valuable for reconciling study elements.  Shared labelling between the model platforms can be built.

An example is shown here:
```json
{
  "resourceType": "PlanDefinition",
  "id": "H2Q-MC-LZZT-Study-Visit-1",
  "identifier": [
    {
      "value": "H2Q-MC-LZZT-Study-Visit-1",
      "type": {
        "coding": [
          {
            "code": "PLAC"
          }
        ]
      },
      "use": "usual"
    },
    {
      "value": "SE.SCREENING_VISIT",
      "system": "http://www.cdisc.org/ns/odm/v1.3/StudyDef#",
      "type": {
        "coding": [
          {
            "system": "http://www.cdisc.org/ns/odm/v1.3#",
            "display": "OID"
          }
        ],
        "text": "OID"
      },
      "use": "secondary"
    }
}
```
A sample ODM has a __StudyEventDef__ with an OID `SE.SCREENING_VISIT`; the [PlanDefinition](https://hl7.org/fhir/plandefinition.html) has an _identifier_ that links the planned event in the FHIR design back to the definition in the ODM.  This resource could then be requested using the following URL `/PlanDefinition?identifier=http://www.cdisc.org/ns/odm/v1.3/StudyDef|SE.SCREENING_VISIT`


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/credits.md

### Credits

This Implementation Guide was developed under the auspices of the HL7 Vulcan Schedule of Activities work group, and builds on the unballoted IG work published previously [Vulcan Schedule of Study Activities FHIR Implementation Guide](index.html). 

Contributing individuals and organisations are:

Current work group co-chairs: 

* **Michael Ward** - TransCelerate Biopharma / Eli Lilly & Company
* **Geoff Low** - Medidata/3DS

Core work group members:

* **Jean Duteau**  - Duteau Design
* **Rebecca Baker** - CDISC
* **Andy Richardson** - Zenetar
* **Rahul Thandavan** - Roche
* **Jeffrey Abolofia** - Pinnacle 21
* **Mike Hamidi** - Pfizer
* **Hugh Glover** - Bluewave Informatics/HL7 BR&R

Project Management:

* **Katie Warren** PHUSE  
* **Shani Sampson** Vulcan
* **Michael Van Campen** Vulcan

With contributions from other members who have from time to time, or quietly, participated in meetings, attended conference calls, and supported the core team during the development process.

If you are interested in participating in the Vulcan Schedule of Activities work group information about our calls, meetings and discussions can be found on HL7 Confluence pages [here](https://confluence.hl7.org/display/VA/Vulcan+Schedule+of+Activities).


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/downloads.md

### Downloads

This implementation guide is web-based and is intended to be browsed online. However, for the convenience of implementers, both this implementation guide and various sub-packages of it are available for download. The following links allow you to download various parts of this implementation guide and other referenced implementation guides for local use.

* This [full IG](full-ig.zip)
* The [resource definitions](definitions.json.zip)  from this IG for use with the FHIR validator (see below)
* The full FHIR [R4]({{site.data.fhir.path}}fhir-spec.zip) specifications
* A FHIR validator can be used to check FHIR resource instance validity - download and instructions for use can be found [here](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator) 



---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/examples.md

### H2Q-MC-LZZT Research Study

[H2Q-MC-LZZT](ResearchStudy-H2Q-MC-LZZT-ResearchStudy.html) was a study to evaluate the Safety and Efficacy of the Xanomeline Transdermal Therapeutic System (TTS) in Patients with Mild to Moderate Alzheimer’s Disease.  It was carried out by [Eli-Lilly and Company](Organization-EliLillyAndCompany.html).  It is a commonly used sample study that features regularly in Clinical Research data modelling exercises so is advantageous for providing realistic anonymised datasets.

#### Example Resources
* [ResearchStudySoa/H2Q-MC-LZZT-ResearchStudy](ResearchStudy-H2Q-MC-LZZT-ResearchStudy.html)
* [Organization/EliLillyAndCompany](Organization-EliLillyAndCompany.html)

### H2Q-MC-LZZT Study Plan

Patients with probable mild to moderate AD will be studied in a randomized, double-blind, parallel (3 arm), placebo-controlled trial of 26 weeks duration. The study will be conducted on an outpatient basis. Approximately 300 patients will be enrolled.

Following informed consent, patients will be screened at [Visit 1](PlanDefinition-H2Q-MC-LZZT-Study-Visit-1.html). At screening, patients will undergo complete neuropsychiatric assessment, psychometric testing, and general medical assessment (including medical history, pre-existing conditions, physical examination). In addition, [vital signs](ActivityDefinition-H2Q-MC-LZZT-Vital-Signs-Temperature.html), temperature, medication history, electrocardiogram (ECG), chest x-ray, and safety laboratories will be obtained. During the screening visit, patients will wear a placebo TTS to determine willingness and ability to comply with transdermal administration procedures. If patients have not had central nervous system (CNS) imaging in the previous 12 months, a computed tomography (CT) or magnetic resonance imaging (MRI) scan will be obtained. If patients are insulin dependent diabetics, a hemoglobin A1c will be obtained. Screening exams and procedures may be performed after [Visit 1](PlanDefinition-H2Q-MC-LZZT-Study-Visit-1.html); however, their results must be completed and available prior to randomization. The screening process should occur within 2 weeks of randomization (Visit 3 of the study).

Patients who meet enrollment criteria from [Visit 1](PlanDefinition-H2Q-MC-LZZT-Study-Visit-1.html) will proceed to Visit 2 at which time they will undergo a 24-hour Ambulatory ECG. At [Visit 3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html) the Ambulatory ECG will be removed and patients will be randomized to 1 of 3 treatment arms. The treatment arms will include a placebo arm, a low-dose xanomeline arm (50 cm2 TTS Formulation E, 54 mg xanomeline), and a high-dose xanomeline arm (75 cm2 TTS Formulation E, 81 mg xanomeline). All patients receiving xanomeline will be started at 50 cm2 TTS Formulation E. For the first 8 weeks of treatment, patients will be assessed at clinic visits every 2 weeks and, thereafter, at clinic visits every 4 weeks. Patients who discontinue prior to Visit 12 (Week 24) will be brought back for full efficacy assessments at or near to 24 weeks, whenever possible.

A Data Safety Monitoring Board (DSMB), chaired by an external cardiologist, will meet after 75, 150, 225, and 300 patients have completed 1 month of treatment. The DSMB will review cardiovascular findings to decide if discontinuation of the study or any treatment arm is appropriate, if additional cardiovascular monitoring is required, if further cardiovascular monitoring is unnecessary, or if adjustment of dose within a treatment arm (or arms) is appropriate.

At Visits [3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html), 8, 10, and 12, efficacy instruments (ADAS-Cog, CIBIC+, and DAD) will be administered. NPI-X will be administered at 2-week intervals either at clinic visits or via a telephone interview. Vital signs, temperature, and an assessment of adverse events will be obtained at all clinic visits. An electrocardiogram (ECG), and chemistry/hematology safety labs will be obtained at Visits 4, 5, 7, 8, 9, 10, 11, 12, and 13. Urinalysis will be done at Visits 4, 9, and 12. Use of concomitant medications will be collected at Visits [3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html), 4, 5, 7, 8, 9, 10, 11, 12, and 13. Plasma levels of xanomeline and metabolites will be obtained at Visits [3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html), 4, 5, 7, 9, and 11. At Visits [3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html), 4, 5, 7, 8, 9, 10, 11, and 12, medications will be dispensed to the patients.

Visits [1](PlanDefinition-H2Q-MC-LZZT-Study-Visit-1.html) through 13 should be scheduled relative to Visit [3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html) (Week 0 - randomization). Visits 4, 5, 7, 8, and 13 should occur within 3 days of their scheduled date. Visits 9, 10, 11, and 12 should occur within 4 days of their scheduled date. At Visit 13 patients will be given the option to enter the open-label extension phase (see Section 3.10.3. Study Extensions).

#### Example Resources 
* Study Plan - [StudyProtocolSoa/H2Q-MC-LZZT-ProtocolDesign](PlanDefinition-H2Q-MC-LZZT-ProtocolDesign.html)
* Visit 1 - [StudyVisitSoa/H2Q-MC-LZZT-Study-Visit-1](PlanDefinition-H2Q-MC-LZZT-Study-Visit-1.html)
* Visit 3 - [StudyVisitSoa/H2Q-MC-LZZT-Study-Visit-3](PlanDefinition-H2Q-MC-LZZT-Study-Visit-3.html)
* Vital Signs/Temperature - [StudyActivitySoa/H2Q-MC-LZZT-Vital-Signs-Temperature](ActivityDefinition-H2Q-MC-LZZT-Vital-Signs-Temperature.html)


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/implementation.md

# Implementation

## Basic Structure

## Visit Windowing

## Investigational Product Administration

## Unscheduled Activities


---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/index.md

### Background

#### Vulcan Schedule of Activities (SoA) Project
The core of this project is to define a usable pattern for a Clinical Trial Schedule of Activities structure using FHIR Resources and Processes, such that:
* it can be shared
* it can be interpreted, and 
* it can be implemented in healthcare systems (such as EHR or PHR systems) and/or clinical research systems 

The conduct of Clinical Trials are guided by the International Conference on Harmonization (ICH) guidelines for Good Clinical Practice (GCP) E6 (R2).[^1]  Core to this is the writing of a Clinical Trial Protocol, a document intended to describe the objectives, design, methodology, statistical considerations and aspects related to the organization of the clinical trial. 

Trial protocols provide the background and rationale for conducting a study, highlighting specific research questions that are addressed, and taking into consideration ethical issues. Trial protocols must meet a standard that adheres to the principles of Good Clinical Practice (as mentioned above), and are used to obtain ethics approval by local Ethics Committees or Institutional Review Boards.

The Clinical Trial Protocol incorporates all the aspects of what is needed to define how the study is to be conducted and reviewed; for the purposes of this first iteration of the Implementation Guide we are constraining the scope to focus just on the elements incorporated in the Schedule of Activities.

#### What is the Schedule of Activities?
The NCI Controlled Vocabulary definition of the Schedule of Activities is: [^2] 

> A standardized representation of planned clinical trial activities including interventions (e.g., administering drug, surgery) and study administrative activities (e.g., obtaining informed consent, distributing clinical trial material and diaries, randomization) as well as assessments. See also schedule of assessments. Compare to study design schematic.

It is a focused section of the Protocol Document that lays out what activities are expected, and structurally when they are expected to occur.  It is a design that is interpreted by the stakeholders to drive how the study is defined, planned and performed.

#### Vulcan SoA Implementation Guide (IG)
This IG is intended to provide a roadmap for adopters looking to use FHIR resources in order to support the planning and implementing Clinical Research designs.  The Schedule of Activities is defined ​in a clinical trial as a standardised representation of planned activities, including interventions (e.g., administering drug, surgery), studying administrative activities (e.g., obtaining informed consent, distributing clinical trial material and diaries, randomization) and assessments.​

​The purpose of the Schedule of Activities is to communicate the scheduling of the planned activities required to support the research objectives of the study to enable operational implementation.​

Within the Vulcan SoA project we have considered two principal study types:
* Prospective – e.g., randomized clinical trials (RCT), concurrent cohort studies, observational studies, epidemiology, real world evidence (RWE) 
* Retrospective – e.g., cohort studies, case-control studies, real world evidence

Examples of positive outcomes for this project include:
* Participant identification – feasibility , inclusion/exclusion criteria (prospective/retrospective)​
* Participant management – appointment scheduling (prospective)​
* Real world evidence – research data selection (retrospective)​
* Audit/Inspection – regulatory oversight period identification ​
* Resource planning (prospective)​
* Logistics planning (prospective)​
* Protocol adherence – streamlined deployment of protocol updates
* Portfolio management – reporting consistency across sites
* Site operational efficiency – task automation (e.g. order entry, reminders, etc) based on SoA
* Digital SOA can "serve as single source of truth" and be re-purposed downstream 
    * Automate creation of EDC specification 
    * Automate creation of SDTM datasets (especially trial design domains) 
* Help/automate sites set up a study leading a reduced site burden 
* Help sites run a study (scheduling, procedures to be performed) 
* Help ensure compliance with a protocol 
* Ensure SOA/protocol is implemented uniformly across sites 

This iteration of the IG is designed to provide directional guidance and not be a prescriptive instruction of how to exactly implement SOA across all systems. As we learn more about how the different systems work and can be interfaced, we will continue to improve the IG to accommodate more use cases; iteratively working towards a solution that will be both functional and scalable.

#### Future elements for the Implementation Guide

There are different levels of complexity of SoA, which may not be fully represented in the current iteration of this IG. For example, how the design of an SoA may be implemented concerning different protocol types (e.g., adaptive, master, umbrella, basket, etc.). Furthermore, the type of research can vary across SoA designs, such as randomized vs. observational clinical trials, including the different data modalities to collect data (e.g., electronic data capture vs. direct data capture).  The scope for the IG has been constrained to deliver a minimal viable solution for representation of a SoA.  The following topics will be or have been evaluated for incorporation in the IG: 

* Unscheduled or Conditional Activities
* Management of protocol compliance (deviations, violations, etc.)
* Complex protocols (e.g., adaptive, umbrella, basket)
* Non-trial integrations (e.g., use of RWD such as a vital statistic registry that determines a patients death via f/up period)
* How adjudications are managed
* Patient site transfers (i.e., relocations)
* Patients re-enrolling multiples times
* Inclusion/Exclusion criteria 
  * Computable and Evaluable criteria that can be defined and processed by electronic systems
  * Complex inclusion/exclusion criterions
* Enhanced SoA headers (e.g., that include visit type such as home health, satellite site, virtual)
* How to better describe more complex activities (multi-omics, digital therapeutics, etc.)
* Tracking of primary, secondary, tertiary, and exploratory endpoints
* Instructional guidance in other protocol sections/footers that provide additional detail
* Managing multiple sub-study consents that can occur throughout the trial (some voluntary and others conditional-based)

Note that many of these expand the existing scope of the SoA project and will work best in a collaboration with other research-aware IGs such as the [Vulcan Retrieval of Real World Data for Clinical Research IG](http://hl7.org/fhir/uv/vulcan-rwd/2023Jan/).  We have a rigorous process for evaluating and incorporating use cases into the development process.

#### References
[^1]: [https://database.ich.org/sites/default/files/E6_R2_Addendum.pdf](https://database.ich.org/sites/default/files/E6_R2_Addendum.pdf)
[^2]: [https://ncimetathesaurus.nci.nih.gov/ncimbrowser/ConceptReport.jsp?dictionary=NCI%20Metathesaurus&code=CL521320](https://ncimetathesaurus.nci.nih.gov/ncimbrowser/ConceptReport.jsp?dictionary=NCI%20Metathesaurus&code=CL521320)



---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/ip-administration.md

### Investigational Product (IP) Administration

In order to correctly relate data collected in a study to the times when investigation product (drug, therapy, device etc.) has been taken or used is central tenant of any study.  
This requires the clear specifications of when to provide, administer and record pivotal IP events (e.g., to calculate Dose Exposure, or those procedures and outcomes associated with the patient's exposure to the investigational product.)​

- IP Administration is core to prospective research protocols​
- All other observations support the efficacy and safety of the IP administration​
- IP administration activities must be well defined in the SOA

The set of FHIR medication resources have been used to review how to incorporate IP administration and record keeping into FHIR specified SoA.
​
**Note**: to date immunization (vaccine) and device trials have not been considered in this section (FHIR defines resources for immunization and devices separately from medications).

#### Scenarios

Investigational Product scenarios include, but are not limited to, IP: ​

- Administered at clinical encounter by HCP​
  - As explicitly directed per protocol​
  - With permissible changes in amount administered​
  - With permissible timing change​
    - For more complex example where IP admin may be dose delayed due to observation results
  - where clinical encounter might be "in office" or other locations (e.g., at patient's home by a mobile healthcare provider or at an ancillary location such as an infusion center)​
- Self-administered in between clinical encounters

#### Core requirements

The needs addressed as part of this use case include:
- Define the intent for the IP administration to occur at a given time relative to the Schedule of Activities and to utilise that intent as a reference point for other activities scheduled to occur. Examples include:
- define a pre-dose vitals assessment
- for a Pharmacokinetic study, precisely define pre- and post-administration activities that will be used to determine how the IP is absorbed, distributed, metabolised, and excreted.
- assert the timing relationship between patient consent and randomisation with that of the IP administration

The following diagrams illustrate how the FHIR medications resources may be used to record investigational or other drug product use within an EHR.  Four common administration or drug use scenarios are illustrated showing how the 5 medication resources might be used to manage and record IP use.  These diagrams are designed as templates to (a) enable study SoA definitions to recognise when, where and which resources will be required in scheduling plans, and (b) guide to those resources where searches for study medication details may be found. It is expected that individual studies will select and define only those resources and relationships necessary to ensure accuracy/compliance with the protocol objectives; for example, the [MedicationDispense](https://hl7.org/fhir/medicationdispense.html) resource might only be defined by FHIR SoAs if dispensing the IP is time-critical with respect to the administration.  

In each case the details of the IP itself are considered to have a [Medication](https://hl7.org/fhir/medication.html) resource record, with the red line(s) showing the *medication.medicationReference* references. All of the resources in these diagrams are not **definitional resources** but rather the targets for IP administration definitional resources (e.g. [PlanDefinition](https://hl7.org/fhir/plandefinition.html), [ActivityDefinition](https://hl7.org/fhir/activitydefinition.html), etc.) that would be specified in a SoA.  The blue line(s) show the relationships between the potential reporting medication resources.  


The following diagrams illustrate how the FHIR medications resources may be used to record investigational or other drug product use within an EHR. Four common administration or drug use scenarios are illustrated showing how the 5 medication resources might be used to manage and record IP use. These diagrams are designed as templates to (a) enable study SoA definitions to recognise when, where and which resources will be required in scheduling plans, and (b) guide to those resources where searches for study medication details may be found. It is expected that individual studies will select and define only those resources and relationships necessary to ensure accuracy/compliance with the protocol objectives; for example, the [MedicationDispense](https://hl7.org/fhir/medicationdispense.html) resource might only be defined by FHIR SoAs if dispensing the IP is time-critical with respect to the administration. In each case the details of the IP itself are considered to have a [Medication](https://hl7.org/fhir/medication.html) resource record, with the red line(s) showing the _medication.medicationReference_ references. All of the resources in these diagrams are **definitional resources** but rather the targets for IP administration definitional resources (e.g. [PlanDefinition](https://hl7.org/fhir/plandefinition.html), [ActivityDefinition](https://hl7.org/fhir/activitydefinition.html), etc.) that would be specified in a SoA.

---

Figure Legend: 

Green Circle: Start of sponsor requirement to record/review [ResearchSubject](https://hl7.org/fhir/researchsubject.html)ResearchSubject medication record

Red Circle: End of sponsor requirement to record/review ResearchSubject medication record

Gray Circle: eHR record recorded by study team recording a medication event - status: completed

White Circle: eHR record reflecting protocol expectation for medication intake - status: in progress, confirmed thereafter by [MedicationStatement](https://hl7.org/fhir/medicationstatement.html) records.

Red Lines: *medication.medicationReference* relationships

Blue Lines: *medicationXXX* relationships 


---
###### IP Administration at site under HCP (Health Care Provider) supervision (no changes)

<img src="ip-admin-no-change.png" alt="No Dose Change" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />

This case shows how the medication resources can be used to model 'at visit' IP administration, where the medication details (dose, form, etc.) remain the same at each visit. In this case two methods of using the [MedicationRequest](https://hl7.org/fhir/medicationrequest.html) resource is shown based on the _dispenseRequest.numberOfRepeatsAllowed_ option. The _numberOfRepeatsAllowed=0_ option implies individual
[MedicationRequest](https://hl7.org/fhir/medicationrequest.html) would be created prior to each visit; _numberOfRepeatsAllowed=4_ option implies that a single [MedicationRequest](https://hl7.org/fhir/medicationrequest.html) is created with instructions that the IP can be dispensed 4 times.

---
###### IP Administration at site under HCP supervision (dose change permissible, no delay)

<img src="ip-admin-permissible-change.png" alt="Permitted Dose Change" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />

The case here illustrates the use of the medication resources when changes in IP/medication details are permitted or required by the protocol, for example dose escalation. Individual "per visit" [MedicationRequest](https://hl7.org/fhir/medicationrequest.html) resources are used to reflect the revised IP details for dispensing, which would then be administered at the appropriate visit. _reasonReference_ can be used to document the planned study IP changes

---
###### IP Administration at site under HCP supervision (delay permissible)

<img src="ip-admin-permissible-obs.png" alt="Permitted Delay" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />

Illustrated here is the relationship between a clinical event (in this case an _Observation_) that requires IP administration to be delayed. If such study events are recognised in the study protocol, and are (a) critical to patient safety or (b) would compromise protocol compliance, SoA _PlanDefinition.trigger_ relations can be used to define the rules for delaying the associated _PlanDefinition.action.timing[x]_ that will be linked to the [MedicationAdministration](https://hl7.org/fhir/medicationadministration.html) record. Situations that might require these revisions include out of range laboratory values, or the use of a contra-indicated medication prior to the study visit.

---
###### IP Administration at home

<img src="ip-admin-home-dose.png" alt="Home Dosing" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />

Many studies require IP to be self-administered, and to continue thereafter 'at home'. The diagram here shows how IP self-administration might be recorded in an eHR. In this case the IP is initially taken during the clinic visit generating a _MedicationAdminstration.status_ record of 'completed' (solid circle) and four 'in progress' records reflecting the protocol expectation. [MedicationStatement](https://hl7.org/fhir/medicationstatement.html) resources can then be used to confirm compliance.

---
#### Issues for resolution
* [ActivityDefinition](https://hl7.org/fhir/activitydefinition.html) for planned dosing events expect a link to a [Medication](https://hl7.org/fhir/medication.html) record as well as a reason for dosing, etc.  In the case of a blinded clinical study the [Medication](https://hl7.org/fhir/medication.html) could be the study IP or could be placebo; this introduces an issue for retrospective review of subject medication records.  
  * Solution used was to define a mock [Medication](https://hl7.org/fhir/medication.html) using the Protocol Identifier plus the Compound identifier.
* In FHIR R5 the [MedicationStatement](https://hl7.org/fhir/medicationstatement.html) has been replaced by the [MedicationUsage](https://hl7.org/fhir/medicationusage.html) resource.  This has not currently been modelled.
 

---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/profiles.md

# SoA Resource Profiles
The following profiles are defined for exchanging study schedule information.

|**Resource**|**Profile Name**|**Profile Description**|
|---|---|---|
|ResearchStudy|[ResearchStudySoa](StructureDefinition-ResearchStudySoa.html)|A profile that lists the data elements of a Research Study that must be supported when used to schedule activities.|
|PlanDefinition|[StudyProtocolSoa](StructureDefinition-StudyProtocolSoa.html)|A profile that lists the data elements of a PlanDefinition that must be supported so that it can represent an entire set of visits and activities for a given study protocol.|
|PlanDefinition|[StudyVisitSoa](StructureDefinition-StudyVisitSoa.html)|An abstract profile that lists the data elements of a PlanDefinition that must be supported so that it can represent a Study Visit.|
|PlanDefinition|[PlannedStudyVisitSoa](StructureDefinition-PlannedStudyVisitSoa.html)|A profile that further qualifies the StudyVisitSoa profile so that it can represent a planned visit.|
|ActivityDefinition|[StudyActivitySoa](StructureDefinition-StudyActivitySoa.html)|A profile lists the data elements of an ActivityDefinition that must be supported so that it can represent an activity that is being scheduled.|
{: .grid }


### Extensions
The following extensions are defined to enable data elements that are not currently present in the core resources.

|**Extension**|**Context**|**Description**|
|---|---|---|
|[AcceptableOffsetRange](StructureDefinition-AcceptableOffsetRangeSoa.html)|PlanDefinition.action.relatedAction|Provides an offset range that, along with offsetDuration, indicates an acceptable range of dates for a related action, i.e. +10-15 days|
{: .grid }

### Global Profiles

  {% include globals-table.xhtml %}

### IG Dependencies

 This IG Contains the following dependencies on other IGs.

 {% include dependency-table.xhtml %}

### Cross-Version Analysis
{% include cross-version-analysis.xhtml %}

### Intellectual Property Statements
{% include ip-statements.xhtml %}



---

File: repos/HL7_SLASH_Vulcan-schedule-ig/input/pagecontent/visit-windows.md

### Visit Windows

The basic SoA visit timings (that is, the subject study day/times on which required activities should be performed) describes the optimal schedule to meet a protocols research objectives. Practical considerations in the clinic make it sensible to offer investigational sites some flexibility to accommodate issues such as visits falling on weekends, or hospital services availability (e.g. for X-Rays), or other logistical issues. These permitted variances are usually specified in SoA in the form of "visit date/time +/- duration" (V3 +/- 1 day). The flexibility around a planned visit/encounter may be symmetric or asymmetrically around a target date (e.g., no more than 2 days before and up to 4 days after the target date).  The adherence of an investigational site to the target and permitted visit windows ensures compliance with the protocol timings, and may be used as a measure of 'site quality'.

The existing FHIR structure for specifying ranges over which a related action can occur uses the [Period](https://hl7.org/fhir/datatypes.html#Period) datatype; which has _lower_ and _upper_ attributes defining the Range of dates/times that an encounter or activities can occur.  This can be used to specify visit windows, but does not then permit a single *target date* to be specified within that visit window.

##### Target Dates

In Clinical Research it is often important to be more rigorous about when activities can occur; this broadly comes under the heading of Visit Windows.  In conduct, it is important to be able to specify when an encounter (and the related observations) should occur, but allow some flexibility to deal with logistical issues arising (such as a public holiday, device maintenance, study participant travel arrangements).  The flexibility can be asymmetrically arranged around a target date (e.g., no more than 2 days before and up to 4 days after the target date).  

The adherence of an investigational site to these windows often constitutes one measure of 'site quality'.
Whilst the FHIR [Period](https://hl7.org/fhir/datatypes.html#Period) datatype is ideal for describing the Range over which planned activties or encounters may occur, it has no provision for associating it with the planned *target* time. (More specifically FHIR v4.3.0: R4B only permits one timing[x] element to be specified per *PlanDefinition.action*) 

##### Research

The visit window use case described above is the most commonly found in SoAs, and will describe the timing details of each visit/encounter from a defined t(zero) visit (e.g. as in the Core Model SoA example). Other timing use cases may also be specified such as "Visit-N to occur 28days from Visit-0 and no earlier than 7d after Visit-(N-1). The diagram below shows the relationship between the SoA visit descriptions, the actual times activities occur and the visit window Range. Also illustrated are the 2 principal options for calculating the visit window period:  (a) from the **target timepoint** or (b) from the **reference timepoint**.    

***

<img src="visit-window-research.png" alt="Visit Windows" width="1000px" style="float:none; margin: 0px 0px 0px 0px;" />

The diagram shows the relationship between an initial 'visit' (V1,left) and a subsequent 'visit' (V2, right) with permitted 'visit window' variances.  In the example a SoA would specify this case as V2 +/ 1 day.
* [S] 'Visit' period from a protocol SoAs identified, for example, as day 'V1'. Note the start and end time of the period are implied.  
* [DT] Date/time line with times when the subject might practically be expected to attend the clinic) 
* [P] Study participant 'visits' illustrating the acceptable 'visit' and 'visit window' periods. Full colour - Planned visits, Shaded - Permitted variance ('visit window') 
* [C] 'Window' timing and scheduling calculation options. Shown are 2 cases: (a) calculation relative to the visit, and (b) relative to the previous visit.  

***

##### Requirements

In order to meet the objectives above, SoA PlanDefinition 'Visit Window' specifications are required to support the following study types and typical general windowing use cases​:

* Prospective Studies​
  * Determination of future timings and permitted timing variances (new study participants)​
  * Calculation of timings of ‘next’ activities (ongoing study participants)​
  * Determination of scheduling compliance (completed participants)​

* Retrospective​ Studies
  * Determination of cohort data collection compliance​
    
* Multiple Reference/Index Point possibilities​
  * Unambiguous **reference/index** time point(s) as an 'anchor point' for scheduling (t0)​
  * Multiple reference/index points for any one scheduled time and 'window'​
  
* Values defined as durations (default) and/or absolute values
  * Defined as durations ​
  * For any timing durations – (units Y, M, D, h, m, s..)​
  * Fully flexible ​
  * Unequal 'early', 'late', 'windows'

##### Extension

As discussed above the issue with the FHIR Definition resources ([PlanDefinition](https://hl7.org/fhir/plandefinition.html) and [ActivityDefinition](https://hl7.org/fhir/activitydefinition.html)) is that they may have an _offsetDuration_ or _offsetRange_ and _timing[x]_ attributes that are mutually exclusive.  

An [extension](StructureDefinition-AcceptableOffsetRangeSoa.html) has been added to permit `acceptableOffsetRange` to the __relatedAction__ element; using this element it is possible to define an acceptable range for an action that can be used for scheduling and reviewing. 

Examples of the use of the extension can be seen in the [Protocol Design Example](PlanDefinition-H2Q-MC-LZZT-ProtocolDesign.html).

---
