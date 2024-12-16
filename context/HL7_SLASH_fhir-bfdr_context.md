File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/BundleCodedIndustryOccupation.fsh

Profile: BundleDocumentCodedIndustryOccupation
Parent: Bundle
Id: Bundle-document-coded-industry-occupation  
Title: "Bundle - Document Coded Industry and Occupation"
Description: "This bundle profile contains instances of the resources comprising coded industry and occupation."
//* insert RequireMetaProfile(CodedContentDocument)
* insert BundleIdentifiersParam(fileNumber, Birth Certificate or Fetal Death Report Number, localFileNumber1, Local File Number 1, localFileNumber2, Local File Number 2)

* type 1..1
* type only code
* type = #document (exactly)
* insert ProfileBasedEntrySlicing
* insert BundleSlice(  Composition, 1, 1, Composition, Composition, CompositionCodedIndustryAndOccupation)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/BundleDocumentBirthReport.fsh

Profile: BundleDocumentBirthReport
Parent: Bundle
Title: "Bundle - Document Birth Report"
Description: "This Bundle profile represents a Birth Document Bundle. It contains any one of the Birth Report Compositions."
Id: Bundle-document-birth-report
* insert BundleIdentifiersParam(birthCertificateNumber, Birth Certificate Number, localFileNumber1, Local File Number 1, localFileNumber2, Local File Number 2)
* type = #document (exactly)
* entry 
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "$this.resource"
  * ^slicing.rules = #open
* entry contains BirthReportComposition 1..1 
* entry[BirthReportComposition].resource 1.. 
* entry[BirthReportComposition].resource only CompositionProviderLiveBirthReport or CompositionJurisdictionLiveBirthReport


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/BundleDocumentCodedCauseOfFetalDeath.fsh

Profile: BundleDocumentCodedCauseOfFetalDeath
Parent: Bundle
Id: Bundle-document-coded-cause-of-fetal-death
Title: "Bundle - Document Coded Cause of Fetal Death"
Description: "This bundle profile contains instances of the resources comprising  cause of fetal death coded content."
//* insert RequireMetaProfile(CodedContentDocument)
//* insert BundleIdentifiers
* insert BundleIdentifiersParam(fetalDeathReportNumber, Fetal Death Report Number, localFileNumber1, Local File Number 1, localFileNumber2, Local File Number 2)
* type 1..1
* type only code
* type = #document (exactly)
* insert ProfileBasedEntrySlicing
* insert BundleSlice(  Composition, 1, 1, Composition, Composition, CompositionCodedCauseOfFetalDeath)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/BundleDocumentDemographicCodedContent.fsh



Profile: BundleDocumentDemographicCodedContent
Parent: Bundle
Id: Bundle-document-demographic-coded-content 
Title: "Bundle - Document Demographic Coded Content"
Description: "This bundle profile contains instances of the resources comprising demographic (race and ethnicity) coded content. 
This bundle is information-content equivalent to the traditional NCHS [MRE](https://www.cdc.gov/nchs/data/dvs/200XMOR_web_with%20clearance%20revisions-acc.pdf)/NRE format."
//* insert RequireMetaProfile(CodedContentDocument)
* insert BundleIdentifiersParam(fileNumber, Birth Certificate or Fetal Death Report Number, localFileNumber1, Local File Number 1, localFileNumber2, Local File Number 2)

* type 1..1
* type only code
* type = #document (exactly)
* insert ProfileBasedEntrySlicing
* insert BundleSlice(  Composition, 1, 1, Composition, Composition, CompositionCodedRaceAndEthnicity)
// The content of the bundle is completely defined by the Composition.  So, no need to restrict it here.
// * insert BundleSlice(  Father, 0, 1, Father, Father, RelatedPersonFatherNaturalVitalRecords )
// * insert BundleSlice(  Mother, 0, 1, Mother, Mother, PatientMotherVitalRecords )
// * insert BundleSlice(  CodedRaceAndEthnicity,  2, 2,  CodedRaceAndEthnicity,  CodedRaceAndEthnicity,  ObservationCodedRaceAndEthnicityVitalRecords)
// * insert BundleSlice(  InputRaceAndEthnicity,  2, 2,  InputRaceAndEthnicity,  InputRaceAndEthnicity,  ObservationInputRaceAndEthnicityVitalRecords)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/BundleDocumentFetalDeathReport.fsh

Profile: BundleDocumentFetalDeathReport
Parent: Bundle
Title: "Bundle - Document Fetal Death Report"
Description: "This Bundle profile represents a Fetal Death Document Bundle. It contains any one of the Fetal Death Compositions."
Id: Bundle-document-fetal-death-report
* insert BundleIdentifiersParam(fetalDeathReportNumber, Fetal Death Report Number, localFileNumber1, Local File Number 1, localFileNumber2, Local File Number 2)
* type = #document (exactly)
* type 
* entry 
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "$this.resource"
  * ^slicing.rules = #open
* entry contains FetalDeathComposition 1..1 
* entry[FetalDeathComposition].resource 1.. 
* entry[FetalDeathComposition].resource only CompositionProviderFetalDeathReport  or CompositionJurisdictionFetalDeathReport

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/CompositionCodedCauseOfFetalDeath.fsh

Profile: CompositionCodedCauseOfFetalDeath
Parent: Composition
Title: "Composition - Coded Cause of Fetal Death"
Description: "This profile communicates coded cause of fetal death information to appropriate jurisdictional Vital Records Offices."
Id: Composition-coded-cause-of-fetal-death
* extension 
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "url"
  * ^slicing.rules = #open
* type = $loinc#86804-2
  * ^short = "Cause of death classification and related information Document"
  * ^definition = "Cause of death classification and related information Document"
* subject 1.. 
* subject only Reference(PatientDecedentFetus)
* author ..1 
  * ^short = "The author is the NCHS."
  * ^definition = "The author is the NCHS."
* section ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
* section contains codedCauseOfFetalDeath 1..1 
* section[codedCauseOfFetalDeath] ^short = "Coded cause of fetal death"
  * ^definition = "Coded cause of fetal death"
  * code 1..
  * code = $loinc#86804-2
    * ^short = "Cause of death classification and related information Document"
    * ^definition = "Cause of death classification and related information Document"
  * entry ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
    * ^short = "Entries that are contained in the coded cause of fetal death section"
    * ^definition = "Entries that are contained in the coded cause of fetal death section"
  * entry contains
      codedInitiatingFetalDeathCauseOrCondition 0..1 and
      codedOtherSignificantFetalDeathCauseOrCondition 0..7
  * entry[codedInitiatingFetalDeathCauseOrCondition] only Reference(ObservationCodedInitiatingFetalDeathCauseOrCondition)
    * ^short = "Coded initiating cause or condition of fetal death"
    * ^definition = "Coded initiating cause or condition of fetal death"
  * entry[codedOtherSignificantFetalDeathCauseOrCondition] only Reference(ObservationCodedOtherFetalDeathCauseOrCondition)
    * ^short = "Coded other significant cause or condition of fetal death"
    * ^definition = "Coded other significant cause or condition of fetal death"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/CompositionCodedIndustryAndOccupation.fsh

Profile: CompositionCodedIndustryAndOccupation
Parent: Composition
Id: Composition-coded-industry-and-occupation
Title: "Composition - Coded Industry and Occupation"
Description: "This Composition profile communicates coded industry and occupation information to the appropriate jurisdictional Vital Records Office."
* type = LocalBFDRCodesCS#industry_occupation_document
* type 
  * ^short = "Industry and Occupation information Document"
  * ^definition = "Race and ethnicity information Document"
* subject only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* author ..1 
  * ^short = "The author is the NCHS."
  * ^definition = "The author is the NCHS."
* section 1..2 
* section 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^short = "The Composition is broken into sections, where each section includes the input and output race and ethnicity for one individual."
  * ^definition = "The Composition is broken into sections where each section includes the input and output race and ethnicity for one individual."
* insert BFDRCompositionLocalSectionEntrySlicing(mother, 0, $v3-RoleCode#MTH, Coded Industry and Occupation - Mother)
* insert BFDRCompositionSectionSlice(mother, motherPatient, 0, 1, Mother, PatientMotherVitalRecordsNew, PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(mother, codedIndustryAndOccupation, 0, 1, Coded Industry and Occupation, Coded Race And Ethnicity, ObservationPresentJob)
* insert BFDRCompositionLocalSectionEntrySlicing(father, 0, $v3-RoleCode#NFTH, Coded Industry and Occupation - Father)
* insert BFDRCompositionSectionSlice(father, fatherPatient, 0, 1, Father, Father, RelatedPersonParentVitalRecords)
* insert BFDRCompositionSectionSlice(father, codedIndustryAndOccupation, 0, 1, Coded Industry and Occupation, Coded Race And Ethnicity, ObservationPresentJob)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/CompositionCodedRaceAndEthnicity.fsh

Profile: CompositionCodedRaceAndEthnicity
Parent: Composition
Id: Composition-coded-race-and-ethnicity
Title: "Composition - Coded Race and Ethnicity"
Description: "This Composition profile communicates coded race and ethnicity information to the appropriate jurisdictional Vital Records Office, along with the submitted input race and ethnicity information."
* type = $loinc#86805-9
* type 
  * ^short = "Race and ethnicity information Document"
  * ^definition = "Race and ethnicity information Document"
* subject only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* author ..1 
  * ^short = "The author is the NCHS."
  * ^definition = "The author is the NCHS."
* section 1..2 
* section 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^short = "The Composition is broken into sections, where each section includes the input and output race and ethnicity for one individual."
  * ^definition = "The Composition is broken into sections where each section includes the input and output race and ethnicity for one individual."
* insert BFDRCompositionLocalSectionEntrySlicing(mother, 0, $v3-RoleCode#MTH, Race and Ethnicity - Mother)
* insert BFDRCompositionSectionSlice(mother, motherPatient, 0, 1, Mother, PatientMotherVitalRecordsNew, PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(mother, inputRaceAndEthnicity, 0, 1, Input Race And Ethnicity, InputRaceAndEthnicity, ObservationInputRaceAndEthnicityVitalRecords)
* insert BFDRCompositionSectionSlice(mother, codedRaceAndEthnicity, 0, 1, Coded Race And Ethnicity, Coded Race And Ethnicity, ObservationCodedRaceAndEthnicityVitalRecords)
* insert BFDRCompositionLocalSectionEntrySlicing(father, 0, $v3-RoleCode#NFTH, Race and Ethnicity - Father)
* insert BFDRCompositionSectionSlice(father, fatherPatient, 0, 1, Father, Father, RelatedPersonParentVitalRecords)
* insert BFDRCompositionSectionSlice(father, inputRaceAndEthnicity, 0, 1, Input Race And Ethnicity, InputRaceAndEthnicity, ObservationInputRaceAndEthnicityVitalRecords)
* insert BFDRCompositionSectionSlice(father, codedRaceAndEthnicity, 0, 1, Coded Race And Ethnicity, Coded Race And Ethnicity, ObservationCodedRaceAndEthnicityVitalRecords)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/CompositionJurisdictionFetalDeathReport.fsh

Profile: CompositionJurisdictionFetalDeathReport
Parent: Composition
Title: "Composition - Jurisdiction Fetal Death Report"
Description: "This Composition profile contains information of a fetal death and the creation of a jurisdictional file to be recorded and communicated to the national statistics agency."
Id: Composition-jurisdiction-fetal-death-report 
// Status is deprecated (now flag in message header)
// * extension[replacementStatus] ^short = "Replace Status (deprecated)"
* status 
  * ^short = "In the case of a fetal death sent in error, a status of 'entered-in-error' must be set."
  * ^definition = "In the case of a fetal death sent in error, a status of 'entered-in-error' must be set."
* type = $loinc#92010-8
* type 
  * ^short = "Jurisdiction fetal death report Document"
  * ^definition = "Jurisdiction fetal death report Document"
* subject 1.. 
* subject only Reference(PatientDecedentFetus)
  * ^short = "The subject of the composition is the decedent fetus"
  * ^definition = "The subject of the composition as a whole is the decedent fetus. Different sections in the composition have different focus (e.g.: the mother)."
* encounter only Reference(EncounterMaternity)
* encounter 
  * ^short = "The Encounter for the Composition is the mother's maternity encounter."
  * ^definition = "The Encounter for the Composition is the mother's maternity encounter."
* date 
  * ^short = "Date report completed"
  * ^definition = "Date report completed"
* author ..1 
* author only Reference(USCoreOrganizationProfile)
  * ^short = "The author is the jurisdictional Vital Records Office."
  * ^definition = "The author is the jurisdictional Vital Records Office."
* section 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^short = "The Composition is broken into sections that, where possible, align with the sections in the Fetal Death Report."
  * ^definition = "The Composition is broken into sections that, where possible, align with the sections in the Fetal Death Report. The sections are Mother, Father, Mother Prenatal,  Medical and Health, and fetus. Various administrative and demographic data in the Birth Certificate are contained in other locations in the Composition, such as the Patient and Encounter profiles."
* insert BFDRCompositionSectionEntrySlicing(motherPrenatal, 0, 57073-9, Jurisdiction Fetal Death)
* insert FocusRule(motherPrenatal, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherPrenatal, firstPrenatalCareVisit, 0, 1, First prenatal care visit, Date that mother had her first prenatal care visit, ObservationDateOfFirstPrenatalCareVisit)
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastNormalMenses, 0, 1, Date last normal menses began, Date that the mother's last normal menses began. This item is used to compute the gestational age of the infant., ObservationLastMenstrualPeriod)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowLiving, 0, 1, Number of previous live births now living, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowLiving) 
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowDead, 0, 1, Number of previous live births now dead, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowDead) 
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastLiveBirth, 0, 1, Date of last live birth, The pregnancy history of the mother with respect to previous children born alive, ObservationDateOfLastLiveBirth)
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersHeight, 0, 1, Mother's height, Mother's height, ObservationMotherHeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersPrepregnancyWeight, 0, 1, Mother's prepregnancy weight, The mother's prepregnancy weight, ObservationMotherPrepregnancyWeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, motherReceivedWICFood, 0, 1, Use, Use of the Women\, Infant's\, and Children (WIC\) nutritional program by the mother during the pregnancy., ObservationMotherReceivedWICFood)
* insert BFDRCompositionSectionSlice(motherPrenatal, cigaretteSmokingBeforeDuringPregnancy, 0, 4, Cigarettes smoked by the mother before and during the pregnancy, The number of cigarettes or packs of cigarettes the mother smoked 3 months before and at various intervals during the pregnancy, ObservationCigaretteSmokingBeforeDuringPregnancy)
* insert BFDRCompositionSectionEntrySlicing(medicalHealthInformation, 0, 55752-0, Jurisdiction Fetal Death)
* insert FocusRule(medicalHealthInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, pregnancyRiskFactors, 0, *, Risk factors in this pregnancy, Selected medical risk factors of the mother during this pregnancy, ConditionPrepregnancyDiabetes or ConditionGestationalDiabetes or ConditionPrepregnancyHypertension or ConditionGestationalHypertension or ConditionEclampsiaHypertension or ObservationPreviousPretermBirth or ProcedureInfertilityTreatment or ProcedureFertilityEnhancingDrugTherapyArtificialInsemination or ProcedureAssistedReproductiveTechnology or ObservationPreviousCesarean or ObservationNoneOfSpecifiedPregnancyRiskFactors)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, numberPreviousCesareans, 0, 1, If mother had a previous cesarean delivery\, how many, Number of previous cesarean deliveries, ObservationNumberPreviousCesareans)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, fetalPresentation, 0, 1, Fetal presentation at birth, Fetal presentation at birth, ObservationFetalPresentation)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, finalRouteMethodDelivery, 0, 1, Final route and method of delivery, Final route and method of delivery, ProcedureFinalRouteMethodDelivery or ObservationUnknownFinalRouteMethodDelivery)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, maternalMorbidity, 0, *, Maternal morbidity (complications associated with labor and delivery\), Serious complications experienced by the mother associated with labor and delivery, ConditionRupturedUterus or ObservationICUAdmission or ObservationNoneOfSpecifiedMaternalMorbidities)
* insert BFDRCompositionSectionEntrySlicing(fetus, 0, 76400-1, Jurisdiction Fetal Death)
* insert BFDRCompositionSectionSlice(fetus, deliveryWeight, 0, 1, Delivery weight, The weight of the infant/fetus at birth/delivery, ObservationBirthWeight)
* insert BFDRCompositionSectionSlice(fetus, gestationalAgeAtDelivery, 0, 1, Obstetric estimate of gestation, The obstetric estimate of the infant's gestation in completed weeks based on the birth/delivery attendant's final estimate of gestation which should be determined by all perinatal factors and assessments such as ultrasound\, but not the neonatal exam, ObservationGestationalAgeAtDelivery)
* insert BFDRCompositionSectionSlice(fetus, fetalRemainsDispositionMethod, 0, 1, Method of decedent fetus disposition, Method of decedent fetus disposition, ObservationFetalRemainsDispositionMethod) 
* insert BFDRCompositionSectionSlice(fetus, causeOfFetalDeath, 0, 1, Initiating cause or condition of fetal death, Initiating cause or condition of fetal death, ConditionFetalDeathInitiatingCauseOrCondition) 
* insert BFDRCompositionSectionSlice(fetus, otherCauseOfDeath, 0, *, Another significant cause or condition for the death of the fetus., Another significant cause or condition for the death of the fetus., ConditionFetalDeathOtherCauseOrCondition) 
* insert BFDRCompositionSectionSlice(fetus, estimatedTimeFetalDeath, 0, 1, The estimated time of fetal death; the time of death is characterized by the relationship to the time of delivery., The estimated time of fetal death; the time of death is characterized by the relationship to the time of delivery., ObservationFetalDeathTimePoint) 
* insert BFDRCompositionSectionSlice(fetus, autopsyPerformed, 0, 1, An indication if an autopsy has been performed on the subject., An indication if an autopsy has been performed on the subject., ObservationAutopsyPerformedIndicator)   
* insert BFDRCompositionSectionSlice(fetus, histologicalExamPerformed, 0, 1, Whether or not a histological placental examination was performed., Whether or not a histological placental examination was performed., ObservationHistologicalPlacentalExamPerformed)   
* insert BFDRCompositionSectionSlice(fetus, autopsyOrHistologicalExamUsed, 0, 1, Whether or not the results of a performed autopsy or a performed histological placental examination were used as part of determining the cause of death., Whether or not the results of a performed autopsy or a performed histological placental examination were used as part of determining the cause of death., ObservationAutopsyHistologicalExamResultsUsed)   
* insert BFDRCompositionSectionSlice(fetus, numberFetalDeathsThisDelivery, 0, 1, Number of fetal deaths this delivery, Number of fetal deaths this delivery, ObservationNumberFetalDeathsThisDelivery)   
* insert BFDRCompositionSectionEntrySlicing(motherInformation, 0, 92014-0, Jurisdiction Fetal Death)
* insert FocusRule(motherInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherInformation, mothersEducation, 0, 1, Mother's Education, Mother's Education, ObservationEducationLevelVitalRecords)  
* insert BFDRCompositionSectionSlice(motherInformation, mothersPresentJob, 0, 1, Mother's Present Job, Mother's Present Job, ObservationPresentJob) 
* insert BFDRCompositionSectionSlice(motherInformation, mothersRaceEthnicity, 0, 1, Mother's Input Race and Ethnicity, Mother's Input Race and Ethnicity, ObservationInputRaceAndEthnicityVitalRecords)  
* insert BFDRCompositionSectionEntrySlicing(fatherInformation, 0, 92013-2, Jurisdiction Fetal Death)
//* section contains fatherInformation 0..1
* section[fatherInformation] ^short = "Father Administrative Section on the Fetal Death Report"
  * ^definition = "This section contains items from the Father administrative section on the Fetal Death Report."
  * code 1.. 
  * code = $loinc#92013-2
    * ^short = "Father's administrative information"
    * ^definition = "Father's administrative information"
* insert FocusRule(fatherInformation, The focus of this section is the father, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the father., RelatedPersonFatherNaturalVitalRecords)
* insert BFDRCompositionSectionSlice(fatherInformation, fathersPresentJob, 0, 1, Father's Present Job, Father's Present Job, ObservationPresentJob) 
* insert BFDRCompositionLocalSectionEntrySlicing(emergingIssues, 0, CodeSystemLocalObservationsCodesVitalRecords#emergingissues, Jurisdiction Fetal Death)
* insert BFDRCompositionSectionSlice(emergingIssues, EmergingIssues,  0, 1, Emerging Issues, Emerging Issues, ObservationEmergingIssuesVitalRecords)
//* insert BFDRCompositionSectionEntrySlicing(editFlags, 1, 92012-4, Jurisdiction Fetal Death)
//* section[editFlags].entry ..8
//* insert BFDRCompositionSectionSlice(editFlags, editFlagWeightOfFetus, 1, 1, Birth weight edit flag, Birth weight edit flag, ObservationEditFlagBirthweight)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagEstimateOfGestation, 1, 1, Estimate of gestation edit flag, Estimate of gestation edit flag, ObservationEditFlagEstimateOfGestation)   
// * insert BFDRCompositionSectionSlice(editFlags, editFlagMothersDateOfBirth, 1, 1, Mother DOB edit flag, Mother DOB edit flag, ObservationEditFlagMothersDateOfBirth)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagMothersEducation, 1, 1, Mother education edit flag, Mother education edit flag, ObservationEditFlagMothersEducation)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagMothersHeight, 1, 1, Mother height edit flag, Mother height edit flag, ObservationEditFlagMothersHeight)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagMothersPrepregnancyWeight, 1, 1, Mother prepregnancy weight edit flag, Mother prepregnancy weight edit flag, ObservationEditFlagMothersPrepregnancyWeight)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagNumberPreviousCesareans, 1, 1, Mother number previous cesareans edit flag, Mother number previous cesareans edit flag, ObservationEditFlagNumberPreviousCesareans)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagPlurality, 1, 1, Plurality edit flag, Plurality edit flag, ObservationEditFlagPlurality)   


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/CompositionJurisdictionLiveBirthReport.fsh

Profile: CompositionJurisdictionLiveBirthReport
Parent: Composition
Title: "Composition - Jurisdiction Live Birth Report"
Description: "This Composition profile contains information of a live birth and the issuance of a Birth Certificate to be recorded and communicated to the national statistics agency."
Id: Composition-jurisdiction-live-birth-report 
* . ^short = "Jurisdiction Live Birth Report"
// Status is deprecated (now flag in message header)
// * extension[replacementStatus] ^short = "Replace Status (deprecated)"
* status 
  * ^short = "In the case of a live birth sent in error, a status of 'entered-in-error' must be set."
  * ^definition = "In the case of a live birth sent in error, a status of 'entered-in-error' must be set."
* type = $loinc#92011-6
* type 
  * ^short = "Jurisdiction live birth report Document"
  * ^definition = "Jurisdiction live birth report Document"
* subject 1.. 
* subject only Reference(PatientChildVitalRecords)
  * ^short = "The subject of the composition is the newborn baby"
  * ^definition = "The subject of the composition as a whole is the newborn baby. Different sections in the composition have different focus (e.g.: the mother)."
* encounter only Reference(EncounterBirth)
* encounter 
  * ^short = "The Encounter for the Composition is the newborn's birth encounter."
  * ^definition = "The Encounter for the Composition is the newborn's birth encounter. This Encounter links to the mother's encounter by the Encounter.partOf data element."
  * extension ..1
  * extension only ExtensionEncounterMaternityReference
  //* extension only $Extension-encounter-maternity-reference
* date
  * ^short = "Date report completed"
* author ..1 
* author only Reference(USCoreOrganizationProfile)
  * ^short = "The author is the jurisdictional Vital Records Office."
  * ^definition = "The author is the jurisdictional Vital Records Office."
* section 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^short = "The Composition is broken into sections that, where possible, align with the sections in the Live Birth Certificate."
  * ^definition = "The Composition is broken into sections that, where possible, align with the sections in the Live Birth Certificate. Various administrative and demographic data in the Birth Certificate are contained in other locations in the Composition, such as the Patient and Encounter profiles."
* insert BFDRCompositionSectionEntrySlicing(motherPrenatal, 0, 57073-9, Jurisdiction Live Birth)
* insert FocusRule(motherPrenatal, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherPrenatal, firstPrenatalCareVisit, 0, 1, First prenatal care visit, Date that mother had her first prenatal care visit, ObservationDateOfFirstPrenatalCareVisit)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberPrenatalCareVisits, 0, 1, Number of prenatal care visits, Those visits which are listed in the mother's prenatal care and/or facility records., ObservationNumberPrenatalVisits)
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastNormalMenses, 0, 1, Date last normal menses began, Date that the mother's last normal menses began. This item is used to compute the gestational age of the infant., ObservationLastMenstrualPeriod)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowLiving, 0, 1, Number of previous live births now living, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowLiving)   
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowDead, 0, 1, Number of previous live births now dead, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowDead) 
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastLiveBirth, 0, 1, Date of last live birth, The pregnancy history of the mother with respect to previous children born alive, ObservationDateOfLastLiveBirth)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberOtherOutcomes, 0, 1, Number of other pregnancy outcomes, The pregnancy history of the mother with respect to other pregnancy outcomes (included pregnancy losses of any gestational age\, e.g.\, spontaneous or induced losses or ectopic pregnancies\)., ObservationNumberOtherPregnancyOutcomes)
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastOtherOutcome, 0, 1, Date of last other pregnancy outcome, The pregnancy history of the mother with respect to other pregnancy outcomes (included pregnancy losses of any gestational age\, e.g.\, spontaneous or induced losses or ectopic pregnancies\)., ObservationDateOfLastOtherPregnancyOutcome)
* insert BFDRCompositionSectionSlice(motherPrenatal, principalSourceOfPayment, 0, 1, Principal source of payment for this delivery, The principal payer for this delivery, CoveragePrincipalPayerDelivery)   
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersWeightAtDelivery, 0, 1, Mother's weight at delivery, The mother's weight at the time of delivery, ObservationMotherDeliveryWeight)   
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersHeight, 0, 1, Mother's height, Mother's height, ObservationMotherHeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersPrepregnancyWeight, 0, 1, Mother's prepregnancy weight, The mother's prepregnancy weight, ObservationMotherPrepregnancyWeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, motherReceivedWICFood, 0, 1, Use, Use of the Women\, Infant's\, and Children (WIC\) nutritional program by the mother during the pregnancy., ObservationMotherReceivedWICFood)
* insert BFDRCompositionSectionSlice(motherPrenatal, cigaretteSmokingBeforeDuringPregnancy, 0, 4, Cigarettes smoked by the mother before and during the pregnancy, The number of cigarettes or packs of cigarettes the mother smoked 3 months before and at various intervals during the pregnancy, ObservationCigaretteSmokingBeforeDuringPregnancy)
* insert BFDRCompositionSectionEntrySlicing(medicalHealthInformation, 0, 55752-0, Jurisdiction Live Birth)
* insert FocusRule(medicalHealthInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, pregnancyRiskFactors, 0, *, Risk factors in this pregnancy, Selected medical risk factors of the mother during this pregnancy, ConditionPrepregnancyDiabetes or ConditionGestationalDiabetes or ConditionPrepregnancyHypertension or ConditionGestationalHypertension or ConditionEclampsiaHypertension or ObservationPreviousPretermBirth or ProcedureInfertilityTreatment or ProcedureFertilityEnhancingDrugTherapyArtificialInsemination or ProcedureAssistedReproductiveTechnology or ObservationPreviousCesarean or ObservationNoneOfSpecifiedPregnancyRiskFactors)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, numberPreviousCesareans, 0, 1, If mother had a previous cesarean delivery\, how many, Number of previous cesarean deliveries, ObservationNumberPreviousCesareans)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, infectionsDuringPregnancy, 0, *, Infections present and/or treated during this pregnancy, Selected infections that the mother had or was treated for during the course of this pregnancy, ConditionInfectionPresentDuringPregnancy or ObservationNoneOfSpecifiedInfectionsPresentDuringPregnancy)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, obstetricProcedures, 0, 1, Obstetric procedures, Selected medical treatments or invasive/manipulative procedures performed during this pregnancy specifically for management of labor and delivery, ProcedureObstetric or ObservationNoneOfSpecifiedObstetricProcedures)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, characteristicsLaborDelivery, 0, *, Characteristics of labor and delivery, Information about the course of labor and delivery, ProcedureInductionOfLabor or ProcedureAugmentationOfLabor or ObservationSteroidsFetalLungMaturation or ObservationAntibioticsAdministeredDuringLabor or ConditionChorioamnionitis or ProcedureEpiduralOrSpinalAnesthesia or ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, fetalPresentation, 0, 1, Fetal presentation at birth, Fetal presentation at birth, ObservationFetalPresentation)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, finalRouteMethodDelivery, 0, 1, Final route and method of delivery, Final route and method of delivery, ProcedureFinalRouteMethodDelivery or ObservationUnknownFinalRouteMethodDelivery)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, maternalMorbidity, 0, *, Maternal morbidity - complications associated with labor and delivery, Serious complications experienced by the mother associated with labor and delivery, ProcedureBloodTransfusion or ConditionPerinealLaceration or ConditionRupturedUterus or ProcedureUnplannedHysterectomy or ObservationICUAdmission or ObservationNoneOfSpecifiedMaternalMorbidities)
* insert BFDRCompositionSectionEntrySlicing(newbornInformation, 0, 57075-4, Jurisdiction Live Birth)
* insert BFDRCompositionSectionSlice(newbornInformation, birthWeight, 0, 1, Birthweight, The weight of the infant/fetus at birth/delivery, ObservationBirthWeight)
* insert BFDRCompositionSectionSlice(newbornInformation, gestationalAgeAtDelivery, 0, 1, Obstetric estimate of gestation, The obstetric estimate of the infant's gestation in completed weeks based on the birth/delivery attendant's final estimate of gestation which should be determined by all perinatal factors and assessments such as ultrasound\, but not the neonatal exam, ObservationGestationalAgeAtDelivery)
* insert BFDRCompositionSectionSlice(newbornInformation, APGARScore, 0, 2, APGAR Score - while the APGAR timing value set contains 3 possible values\, 5 and 10 are the only scores used., The Apgar Score for the child., ObservationApgarScore) 
* insert BFDRCompositionSectionSlice(newbornInformation, numberLiveBirthsThisDelivery, 0, 1, Number of live births this delivery, Number of live births this delivery, ObservationNumberLiveBirthsThisDelivery)   
* insert BFDRCompositionSectionSlice(newbornInformation, abnormalConditionsNewborn, 0, *, Abnormal conditions of the newborn, Disorders or significant morbidity experienced by the newborn infant, ProcedureAssistedVentilationFollowingDelivery or ProcedureAssistedVentilationMoreThanSixHours or ObservationNICUAdmission or ProcedureSurfactantReplacementTherapy or ProcedureAntibioticSuspectedNeonatalSepsis or ConditionSeizure or ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn)   
* insert BFDRCompositionSectionSlice(newbornInformation, congenitalAnomaliesNewborn, 0, *, Congenital anomolies of the newborn, Malformations of the newborn diagnosed prenatally or after delivery, ConditionCongenitalAnomalyOfNewborn or ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn)   
* insert BFDRCompositionSectionSlice(newbornInformation, infantLiving, 0, 1, Is infant living at time of report?, Information on the infant's survival, ObservationInfantLiving)   
* insert BFDRCompositionSectionSlice(newbornInformation, infantBreastfedAtDischarge, 0, 1, Is infant being breastfed at discharge?, Information on whether the infant is being breastfed at discharge from the hospital, ObservationInfantBreastfedAtDischarge)   
* insert BFDRCompositionSectionEntrySlicing(motherInformation, 0, 92014-0, Jurisdiction Live Birth)
* insert FocusRule(motherInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherInformation, marriedDuringPregnancy, 0, 1, Mother married during pregnancy, Was mother married at conception\, at the time of birth\, or at any time between conception and giving birth?, ObservationMotherMarriedDuringPregnancy)   
* insert BFDRCompositionSectionSlice(motherInformation, ssnRequestedForChild, 0, 1, Was social security number requested for the child, Was social security number requested for the child, ObservationSSNRequestedForChild)   
* insert BFDRCompositionSectionSlice(motherInformation, mothersEducation, 0, 1, Mother's education, Mother's education, ObservationEducationLevelVitalRecords) 
* insert BFDRCompositionSectionSlice(motherInformation, mothersPresentJob, 0, 1, Mother's Present Job, Mother's Present Job, ObservationPresentJob) 
* insert BFDRCompositionSectionSlice(motherInformation, mothersRaceEthnicity, 0, 1, Mother's Input Race and Ethnicity, Mother's Input Race and Ethnicity, ObservationInputRaceAndEthnicityVitalRecords)  
* insert BFDRCompositionSectionEntrySlicing(fatherInformation, 0, 92013-2, Jurisdiction Live Birth)
* insert FocusRule(fatherInformation, The focus of this section is the father, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the father., RelatedPersonFatherNaturalVitalRecords)
* insert BFDRCompositionSectionSlice(fatherInformation, paternityAcknowledgementSigned, 0, 1, Paternity acknowledgement signed by father, Whether or not a paternity acknowledgement was signed by the father if the mother was not married at conception\, at the time of birth\, or at any time between conception and giving birth., ObservationPaternityAcknowledgementSigned)   
* insert BFDRCompositionSectionSlice(fatherInformation, fathersEducation, 0, 1, Father's education, Father's education, ObservationEducationLevelVitalRecords)   
* insert BFDRCompositionSectionSlice(fatherInformation, fathersPresentJob, 0, 1, Father's Present Job, Father's Present Job, ObservationPresentJob) 
* insert BFDRCompositionSectionSlice(fatherInformation, fathersRaceEthnicity, 0, 1, Father's Input Race and Ethnicity, Father's Input Race and Ethnicity, ObservationInputRaceAndEthnicityVitalRecords)  
* insert BFDRCompositionLocalSectionEntrySlicing(emergingIssues, 0, CodeSystemLocalObservationsCodesVitalRecords#emergingissues, Jurisdiction Live Birth)
* insert BFDRCompositionSectionSlice(emergingIssues, EmergingIssues,  0, 1, Emerging Issues, Emerging Issues, ObservationEmergingIssuesVitalRecords)
//* insert BFDRCompositionSectionEntrySlicing(editFlags, 1, 92012-4, Jurisdiction Live Birth)
//* section[editFlags].entry ..12
//* insert BFDRCompositionSectionSlice(editFlags, editFlagBirthweight, 1, 1, Birth weight edit flag, Birth weight edit flag, ObservationEditFlagBirthweight)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagEstimateOfGestation, 1, 1, Estimate of gestation edit flag, Estimate of gestation edit flag, ObservationEditFlagEstimateOfGestation)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagFathersDateOfBirth, 1, 1, Father DOB edit flag, Father DOB edit flag, ObservationEditFlagFathersDateOfBirth)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagFathersEducation, 1, 1, Father education edit flag, Father education edit flag, ObservationEditFlagFathersEducation)   
// * insert BFDRCompositionSectionSlice(editFlags, editFlagMothersDateOfBirth, 1, 1, Mother DOB edit flag, Mother DOB edit flag, ObservationEditFlagMothersDateOfBirth)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagMothersDeliveryWeight, 1, 1, Mother delivery weight edit flag, Mother delivery weight edit flag, ObservationEditFlagMothersDeliveryWeight)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagMothersEducation, 1, 1, Mother education edit flag, Mother education edit flag, ObservationEditFlagMothersEducation)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagMothersHeight, 1, 1, Mother height edit flag, Mother height edit flag, ObservationEditFlagMothersHeight)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagMothersPrepregnancyWeight, 1, 1, Mother prepregnancy weight edit flag, Mother prepregnancy weight edit flag, ObservationEditFlagMothersPrepregnancyWeight)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagNumberPrenatalCareVisits, 1, 1, Number prenatal visits edit flag, Number prenatal visits edit flag, ObservationEditFlagNumberPrenatalCareVisits)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagNumberPreviousCesareans, 1, 1, Mother number previous cesareans edit flag, Mother number previous cesareans edit flag, ObservationEditFlagNumberPreviousCesareans)   
//* insert BFDRCompositionSectionSlice(editFlags, editFlagPlurality, 1, 1, Plurality edit flag, Plurality edit flag, ObservationEditFlagPlurality)   

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/CompositionProviderFetalDeathReport.fsh

Profile: CompositionProviderFetalDeathReport
Parent: Composition
Id: Composition-provider-fetal-death-report
Title: "Composition - Provider Fetal Death Report"
Description: "This Composition profile contains constraints to address the use case describing the need for fetal death information to be recorded and communicated to the jurisdictional Vital Records Office."
// Status is deprecated (now flag in message header)
// * extension[replacementStatus] ^short = "Replace Status (deprecated)"
* status 
  * ^short = "In the case of a fetal death sent in error, a status of 'entered-in-error' must be set."
  * ^definition = "In the case of a fetal death sent in error, a status of 'entered-in-error' must be set."
* type = $loinc#69045-3
* type 
  * ^short = "U.S. standard report of fetal death - 2003 revision"
  * ^definition = "U.S. standard report of fetal death - 2003 revision"
* subject 1.. 
* subject only Reference(PatientDecedentFetus)
  * ^short = "The subject of the composition is the decedent fetus"
  * ^definition = "The subject of the composition as a whole is the decedent fetus. Different sections in the composition have different focus (e.g.: the mother)."
* encounter only Reference(EncounterMaternity)
* encounter 
  * ^short = "The Encounter for the Composition is the mother's maternity encounter."
  * ^definition = "The Encounter for the Composition is the mother's maternity encounter."
* date
  * ^short = "Date report completed"
* author ..1 
* author only Reference(PractitionerVitalRecords)
  * ^short = "The author is the person who verifies/approves the accuracy of the data to be sent to the vital records system."
  * ^definition = "Name and title of person completing the report. May be, but need not be, the same as the attendant at delivery."
* section 1.. 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^short = "The Composition is broken into sections that, where possible, align with the sections in the Fetal Death Report."
  * ^definition = "The Composition is broken into sections that, where possible, align with the sections in the Fetal Death Report. The sections are Mother, Mother Prenatal,  Medical and Health, and fetus. Various administrative and demographic data in the Birth Certificate are contained in other locations in the Composition, such as the Patient and Encounter profiles."
* insert BFDRCompositionSectionEntrySlicing(motherPrenatal, 0, 57073-9, Provider Fetal Death)
* insert FocusRule(motherPrenatal, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherPrenatal, firstPrenatalCareVisit, 0, 1, First prenatal care visit, Date that mother had her first prenatal care visit, ObservationDateOfFirstPrenatalCareVisit)
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastNormalMenses, 0, 1, Date last normal menses began, Date that the mother's last normal menses began. This item is used to compute the gestational age of the infant., ObservationLastMenstrualPeriod)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowLiving, 0, 1, Number of previous live births now living, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowLiving) 
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowDead, 0, 1, Number of previous live births now dead, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowDead) 
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastLiveBirth, 0, 1, Date of last live birth, The pregnancy history of the mother with respect to previous children born alive, ObservationDateOfLastLiveBirth)
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersHeight, 0, 1, Mother's height, Mother's height, ObservationMotherHeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersPrepregnancyWeight, 0, 1, Mother's prepregnancy weight, The mother's prepregnancy weight, ObservationMotherPrepregnancyWeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, motherReceivedWICFood, 0, 1, Use, Use of the Women\, Infant's\, and Children (WIC\) nutritional program by the mother during the pregnancy., ObservationMotherReceivedWICFood)
* insert BFDRCompositionSectionSlice(motherPrenatal, cigaretteSmokingBeforeDuringPregnancy, 0, 4, Cigarettes smoked by the mother before and during the pregnancy, The number of cigarettes or packs of cigarettes the mother smoked 3 months before and at various intervals during the pregnancy, ObservationCigaretteSmokingBeforeDuringPregnancy)
* insert BFDRCompositionSectionEntrySlicing(medicalHealthInformation, 0, 55752-0, Provider Fetal Death)
* insert FocusRule(medicalHealthInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, pregnancyRiskFactors, 0, *, Risk factors in this pregnancy, Selected medical risk factors of the mother during this pregnancy, ConditionPrepregnancyDiabetes or ConditionGestationalDiabetes or ConditionPrepregnancyHypertension or ConditionGestationalHypertension or ConditionEclampsiaHypertension or ObservationPreviousPretermBirth or ProcedureInfertilityTreatment or ProcedureFertilityEnhancingDrugTherapyArtificialInsemination or ProcedureAssistedReproductiveTechnology or ObservationPreviousCesarean or ObservationNoneOfSpecifiedPregnancyRiskFactors)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, numberPreviousCesareans, 0, 1, If mother had a previous cesarean delivery\, how many, Number of previous cesarean deliveries, ObservationNumberPreviousCesareans)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, fetalPresentation, 0, 1, Fetal presentation at birth, Fetal presentation at birth, ObservationFetalPresentation)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, finalRouteMethodDelivery, 0, 1, Final route and method of delivery, Final route and method of delivery, ProcedureFinalRouteMethodDelivery or ObservationUnknownFinalRouteMethodDelivery)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, maternalMorbidity, 0, *, Maternal morbidity - complications associated with labor and delivery, Serious complications experienced by the mother associated with labor and delivery, ConditionRupturedUterus or ObservationICUAdmission or ObservationNoneOfSpecifiedMaternalMorbidities)
* insert BFDRCompositionSectionEntrySlicing(fetus, 0, 76400-1, Provider Fetal Death)
* insert BFDRCompositionSectionSlice(fetus, deliveryWeight, 0, 1, Delivery weight, The weight of the infant/fetus at birth/delivery, ObservationBirthWeight)
* insert BFDRCompositionSectionSlice(fetus, gestationalAgeAtDelivery, 0, 1, Obstetric estimate of gestation, The obstetric estimate of the infant's gestation in completed weeks based on the birth/delivery attendant's final estimate of gestation which should be determined by all perinatal factors and assessments such as ultrasound\, but not the neonatal exam, ObservationGestationalAgeAtDelivery)
* insert BFDRCompositionSectionSlice(fetus, fetalRemainsDispositionMethod, 0, 1, Method of decedent fetus disposition, Method of decedent fetus disposition, ObservationFetalRemainsDispositionMethod) 
* insert BFDRCompositionSectionSlice(fetus, causeOfFetalDeath, 0, 1, Initiating cause or condition of fetal death, Initiating cause or condition of fetal death, ConditionFetalDeathInitiatingCauseOrCondition) 
* insert BFDRCompositionSectionSlice(fetus, otherCauseOfDeath, 0, *, Another significant cause or condition for the death of the fetus., Another significant cause or condition for the death of the fetus., ConditionFetalDeathOtherCauseOrCondition) 
* insert BFDRCompositionSectionSlice(fetus, estimatedTimeFetalDeath, 0, 1, The estimated time of fetal death; the time of death is characterized by the relationship to the time of delivery., The estimated time of fetal death; the time of death is characterized by the relationship to the time of delivery., ObservationFetalDeathTimePoint) 
* insert BFDRCompositionSectionSlice(fetus, autopsyPerformed, 0, 1, An indication if an autopsy has been performed on the subject., An indication if an autopsy has been performed on the subject., ObservationAutopsyPerformedIndicator)   
* insert BFDRCompositionSectionSlice(fetus, histologicalExamPerformed, 0, 1, Whether or not a histological placental examination was performed., Whether or not a histological placental examination was performed., ObservationHistologicalPlacentalExamPerformed)   
* insert BFDRCompositionSectionSlice(fetus, autopsyOrHistologicalExamUsed, 0, 1, Whether or not the results of a performed autopsy or a performed histological placental examination were used as part of determining the cause of death., Whether or not the results of a performed autopsy or a performed histological placental examination were used as part of determining the cause of death., ObservationAutopsyHistologicalExamResultsUsed)   
* insert BFDRCompositionSectionSlice(fetus, numberFetalDeathsThisDelivery, 0, 1, Number of fetal deaths this delivery, Number of fetal deaths this delivery, ObservationNumberFetalDeathsThisDelivery)   
* insert BFDRCompositionSectionEntrySlicing(motherInformation, 0, 92014-0, Provider Fetal Death)
* insert FocusRule(motherInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherInformation, mothersEducation, 0, 1, Mother's Education, Mother's Education, ObservationEducationLevelVitalRecords) 
* insert BFDRCompositionSectionSlice(motherInformation, mothersPresentJob, 0, 1, Mother's Present Job, Mother's Present Job, ObservationPresentJob) 
* insert BFDRCompositionSectionSlice(motherInformation, mothersRaceEthnicity, 0, 1, Mother's Input Race and Ethnicity, Mother's Input Race and Ethnicity, ObservationInputRaceAndEthnicityVitalRecords)  
* insert BFDRCompositionSectionEntrySlicing(fatherInformation, 0, 92013-2, Provider Fetal Death)
//* section contains fatherInformation 0..1
* section[fatherInformation] ^short = "Father Administrative Section on the Fetal Death Report"
  * ^definition = "This section contains items from the Father administrative section on the Fetal Death Report."
  * code 1.. 
  * code = $loinc#92013-2
    * ^short = "Father's administrative information"
    * ^definition = "Father's administrative information"
* insert FocusRule(fatherInformation, The focus of this section is the father, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the father., RelatedPersonFatherNaturalVitalRecords)
* insert BFDRCompositionSectionSlice(fatherInformation, fathersPresentJob, 0, 1, Father's Present Job, Father's Present Job, ObservationPresentJob) 
* section contains patientsQuestionnaireResponse 0..1
* section[patientsQuestionnaireResponse] ^short = "Optional section containing a QuestionnaireResponse with recorded answers to the Questionnaire - Mother's Worksheet for Child's Birth Certificate"
  * code 1..
  * code = $loinc#74465-6
    * ^short = "Questionnaire response Document"
  * entry 1..1
  * entry only Reference(QuestionnaireResponse)
    * ^short = "QuestionnaireResponse with recorded answers to the Questionnaire - Patient's Worksheet for Fetal Death Report"
* insert BFDRCompositionLocalSectionEntrySlicing(emergingIssues, 0, CodeSystemLocalObservationsCodesVitalRecords#emergingissues, Provider Fetal Death)
* insert BFDRCompositionSectionSlice(emergingIssues, EmergingIssues,  0, 1, Emerging Issues, Emerging Issues, ObservationEmergingIssuesVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/bundlescompositions/CompositionProviderLiveBirthReport.fsh

Profile: CompositionProviderLiveBirthReport
Parent: Composition
Title: "Composition - Provider Live Birth Report"
Description: "This Composition profile defines constraints to address the use case in which information for live birth information is recorded and communicated to the jurisdictional Vital Records Office."
Id: Composition-provider-live-birth-report 
* . ^short = "Provider Live Birth Report"
// Status is deprecated (now flag in message header)
// * extension[replacementStatus] ^short = "Replace Status (deprecated)"
* status
  * ^short = "In the case of a live birth sent in error, a status of 'entered-in-error' must be set."
  * ^definition = "In the case of a live birth sent in error, a status of 'entered-in-error' must be set."
* type = $loinc#68998-4
* type 
  * ^short = "U.S. standard certificate of live birth - 2003 revision"
  * ^definition = "U.S. standard certificate of live birth - 2003 revision"
* subject 1.. 
* subject only Reference(PatientChildVitalRecords)
  * ^short = "The subject of the composition is the newborn baby"
  * ^definition = "The subject of the composition as a whole is the newborn baby. Different sections in the composition have different focus (e.g.: the mother)."
* encounter only Reference(EncounterBirth)
* encounter 
  * ^short = "The Encounter for the Composition is the newborn's birth encounter."
  * ^definition = "The Encounter for the Composition is the newborn's birth encounter. This Encounter links to the mother's encounter by the Encounter.partOf data element."
  * extension ..1
  * extension only ExtensionEncounterMaternityReference
* date
  * ^short = "Date report completed"
  * ^definition = "Date report completed"
* author ..1 
* author only Reference(PractitionerVitalRecords)
  * ^short = "The author is the person who verifies/approves the accuracy of the data to be sent to the vital records system."
  * ^definition = "Name and title of person completing the report. May be, but need not be, the same as the attendant at delivery."
* section 1.. 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^short = "The Composition is broken into sections that, where possible, align with the sections in the Live Birth Certificate."
  * ^definition = "The Composition is broken into sections that, where possible, align with the sections in the Live Birth Certificate. Various administrative and demographic data in the Birth Certificate are contained in other locations in the Composition, such as the Patient and Encounter profiles."
* insert BFDRCompositionSectionEntrySlicing(motherPrenatal, 0, 57073-9, Provider Live Birth)
* insert FocusRule(motherPrenatal, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherPrenatal, firstPrenatalCareVisit, 0, 1, First prenatal care visit, Date that mother had her first prenatal care visit, ObservationDateOfFirstPrenatalCareVisit)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberPrenatalCareVisits, 0, 1, Number of prenatal care visits, Those visits which are listed in the mother's prenatal care and/or facility records., ObservationNumberPrenatalVisits)
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastNormalMenses, 0, 1, Date last normal menses began, Date that the mother's last normal menses began. This item is used to compute the gestational age of the infant., ObservationLastMenstrualPeriod)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowLiving, 0, 1, Number of previous live births now living, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowLiving)   
* insert BFDRCompositionSectionSlice(motherPrenatal, numberNowDead, 0, 1, Number of previous live births now dead, The pregnancy history of the mother with respect to previous children born alive, ObservationNumberBirthsNowDead) 
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastLiveBirth, 0, 1, Date of last live birth, The pregnancy history of the mother with respect to previous children born alive, ObservationDateOfLastLiveBirth)
* insert BFDRCompositionSectionSlice(motherPrenatal, numberOtherOutcomes, 0, 1, Number of other pregnancy outcomes, The pregnancy history of the mother with respect to other pregnancy outcomes (included pregnancy losses of any gestational age\, e.g.\, spontaneous or induced losses or ectopic pregnancies\)., ObservationNumberOtherPregnancyOutcomes)
* insert BFDRCompositionSectionSlice(motherPrenatal, dateLastOtherOutcome, 0, 1, Date of last other pregnancy outcome, The pregnancy history of the mother with respect to other pregnancy outcomes (included pregnancy losses of any gestational age\, e.g.\, spontaneous or induced losses or ectopic pregnancies\)., ObservationDateOfLastOtherPregnancyOutcome)  
* insert BFDRCompositionSectionSlice(motherPrenatal, principalSourceOfPayment, 0, 1, Principal source of payment for this delivery, The principal payer for this delivery, CoveragePrincipalPayerDelivery)     
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersWeightAtDelivery, 0, 1, Mother's weight at delivery, The mother's weight at the time of delivery, ObservationMotherDeliveryWeight)   
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersHeight, 0, 1, Mother's height, Mother's height, ObservationMotherHeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, mothersPrepregnancyWeight, 0, 1, Mother's prepregnancy weight, The mother's prepregnancy weight, ObservationMotherPrepregnancyWeight)
* insert BFDRCompositionSectionSlice(motherPrenatal, motherReceivedWICFood, 0, 1, Use, Use of the Women\, Infant's\, and Children (WIC\) nutritional program by the mother during the pregnancy., ObservationMotherReceivedWICFood)
* insert BFDRCompositionSectionSlice(motherPrenatal, cigaretteSmokingBeforeDuringPregnancy, 0, 4, Cigarettes smoked by the mother before and during the pregnancy, The number of cigarettes or packs of cigarettes the mother smoked 3 months before and at various intervals during the pregnancy, ObservationCigaretteSmokingBeforeDuringPregnancy)
* insert BFDRCompositionSectionEntrySlicing(medicalHealthInformation, 0, 55752-0, Provider Live Birth)
* insert FocusRule(medicalHealthInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, pregnancyRiskFactors, 0, *, Risk factors in this pregnancy, Selected medical risk factors of the mother during this pregnancy, ConditionPrepregnancyDiabetes or ConditionGestationalDiabetes or ConditionPrepregnancyHypertension or ConditionGestationalHypertension or ConditionEclampsiaHypertension or ObservationPreviousPretermBirth or ProcedureInfertilityTreatment or ProcedureFertilityEnhancingDrugTherapyArtificialInsemination or ProcedureAssistedReproductiveTechnology or ObservationPreviousCesarean or ObservationNoneOfSpecifiedPregnancyRiskFactors)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, numberPreviousCesareans, 0, 1, If mother had a previous cesarean delivery\, how many, Number of previous cesarean deliveries, ObservationNumberPreviousCesareans)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, infectionsDuringPregnancy, 0, *, Infections present and/or treated during this pregnancy, Selected infections that the mother had or was treated for during the course of this pregnancy, ConditionInfectionPresentDuringPregnancy or ObservationNoneOfSpecifiedInfectionsPresentDuringPregnancy)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, obstetricProcedures, 0, 1, Obstetric procedures, Selected medical treatments or invasive/manipulative procedures performed during this pregnancy specifically for management of labor and delivery, ProcedureObstetric or ObservationNoneOfSpecifiedObstetricProcedures)  
* insert BFDRCompositionSectionSlice(medicalHealthInformation, characteristicsLaborDelivery, 0, *, Characteristics of labor and delivery, Information about the course of labor and delivery, ProcedureInductionOfLabor or ProcedureAugmentationOfLabor or ObservationSteroidsFetalLungMaturation or ObservationAntibioticsAdministeredDuringLabor or ConditionChorioamnionitis or ProcedureEpiduralOrSpinalAnesthesia or ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, fetalPresentation, 0, 1, Fetal presentation at birth, Fetal presentation at birth, ObservationFetalPresentation)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, finalRouteMethodDelivery, 0, 1, Final route and method of delivery, Final route and method of delivery, ProcedureFinalRouteMethodDelivery or ObservationUnknownFinalRouteMethodDelivery)
* insert BFDRCompositionSectionSlice(medicalHealthInformation, maternalMorbidity, 0, *, Maternal morbidity - complications associated with labor and delivery, Serious complications experienced by the mother associated with labor and delivery, ProcedureBloodTransfusion or ConditionPerinealLaceration or ConditionRupturedUterus or ProcedureUnplannedHysterectomy or ObservationICUAdmission or ObservationNoneOfSpecifiedMaternalMorbidities)
* insert BFDRCompositionSectionEntrySlicing(newbornInformation, 0, 57075-4, Provider Live Birth)
* insert BFDRCompositionSectionSlice(newbornInformation, birthWeight, 0, 1, Birthweight, The weight of the infant/fetus at birth/delivery, ObservationBirthWeight)
* insert BFDRCompositionSectionSlice(newbornInformation, gestationalAgeAtDelivery, 0, 1, Obstetric estimate of gestation, The obstetric estimate of the infant's gestation in completed weeks based on the birth/delivery attendant's final estimate of gestation which should be determined by all perinatal factors and assessments such as ultrasound\, but not the neonatal exam, ObservationGestationalAgeAtDelivery)
* insert BFDRCompositionSectionSlice(newbornInformation, APGARScore, 0, 2, APGAR Score - while the APGAR timing value set contains 3 possible values\, 5 and 10 are the only scores used., The Apgar Score for the child., ObservationApgarScore)   
* insert BFDRCompositionSectionSlice(newbornInformation, numberLiveBirthsThisDelivery, 0, 1, Number of live births this delivery, Number of live births this delivery, ObservationNumberLiveBirthsThisDelivery)   
* insert BFDRCompositionSectionSlice(newbornInformation, abnormalConditionsNewborn, 0, *, Abnormal conditions of the newborn, Disorders or significant morbidity experienced by the newborn infant, ProcedureAssistedVentilationFollowingDelivery or ProcedureAssistedVentilationMoreThanSixHours or ObservationNICUAdmission or ProcedureSurfactantReplacementTherapy or ProcedureAntibioticSuspectedNeonatalSepsis or ConditionSeizure or ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn)   
* insert BFDRCompositionSectionSlice(newbornInformation, congenitalAnomaliesNewborn, 0, *, Congenital anomolies of the newborn, Malformations of the newborn diagnosed prenatally or after delivery, ConditionCongenitalAnomalyOfNewborn or ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn)   
* insert BFDRCompositionSectionSlice(newbornInformation, infantLiving, 0, 1, Is infant living at time of report?, Information on the infant's survival, ObservationInfantLiving)   
* insert BFDRCompositionSectionSlice(newbornInformation, infantBreastfedAtDischarge, 0, 1, Is infant being breastfed at discharge?, Information on whether the infant is being breastfed at discharge from the hospital, ObservationInfantBreastfedAtDischarge)   
* insert BFDRCompositionSectionEntrySlicing(motherInformation, 0, 92014-0, Provider Live Birth)
* insert FocusRule(motherInformation, The focus of this section is the mother, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the mother., PatientMotherVitalRecords)
* insert BFDRCompositionSectionSlice(motherInformation, marriedDuringPregnancy, 0, 1, Mother married during pregnancy, Was mother married at conception\, at the time of birth\, or at any time between conception and giving birth?, ObservationMotherMarriedDuringPregnancy)   
* insert BFDRCompositionSectionSlice(motherInformation, ssnRequestedForChild, 0, 1, Was social security number requested for the child, Was social security number requested for the child, ObservationSSNRequestedForChild)     
* insert BFDRCompositionSectionSlice(motherInformation, mothersEducation, 0, 1, Mother's education, Mother's education, ObservationEducationLevelVitalRecords)  
* insert BFDRCompositionSectionSlice(motherInformation, mothersPresentJob, 0, 1, Mother's Usual Work, Mother's Usual Work, ObservationPresentJob) 
* insert BFDRCompositionSectionSlice(motherInformation, mothersRaceEthnicity, 0, 1, Mother's Input Race and Ethnicity, Mother's Input Race and Ethnicity, ObservationInputRaceAndEthnicityVitalRecords)  
* insert BFDRCompositionSectionEntrySlicing(fatherInformation, 0, 92013-2, Provider Live Birth)
* insert FocusRule(fatherInformation, The focus of this section is the father, The subject of the composition as a whole is the fetus baby. The focus of this section in the composition is the father., RelatedPersonFatherNaturalVitalRecords)
* insert BFDRCompositionSectionSlice(fatherInformation, paternityAcknowledgementSigned, 0, 1, Paternity acknowledgement signed by father, Whether or not a paternity acknowledgement was signed by the father if the mother was not married at conception\, at the time of birth\, or at any time between conception and giving birth., ObservationPaternityAcknowledgementSigned)   
* insert BFDRCompositionSectionSlice(fatherInformation, fathersEducation, 0, 1, Father's education, Father's education, ObservationEducationLevelVitalRecords)   
* insert BFDRCompositionSectionSlice(fatherInformation, fathersPresentJob, 0, 1, Father's Present Job, Father's Usual Work, ObservationPresentJob) 
* insert BFDRCompositionSectionSlice(fatherInformation, fathersRaceEthnicity, 0, 1, Father's Input Race and Ethnicity, Father's Input Race and Ethnicity, ObservationInputRaceAndEthnicityVitalRecords)       
* section contains patientsQuestionnaireResponse 0..1
* section[patientsQuestionnaireResponse] ^short = "Optional section containing a QuestionnaireResponse with recorded answers to the Questionnaire - Patient's Worksheet for Fetal Death Report"
  * code 1..
  * code = $loinc#74465-6
    * ^short = "Questionnaire response Document"
  * entry 1..1
  * entry only Reference(QuestionnaireResponse)
    * ^short = "QuestionnaireResponse with recorded answers to the Questionnaire - Mother's Worksheet for Child's Birth Certificate"
* insert BFDRCompositionLocalSectionEntrySlicing(emergingIssues, 0, CodeSystemLocalObservationsCodesVitalRecords#emergingissues, Provider Live Birth)
* insert BFDRCompositionSectionSlice(emergingIssues, EmergingIssues,  0, 1, Emerging Issues, Emerging Issues, ObservationEmergingIssuesVitalRecords)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/codesystems/CodeSystemEditFlags.fsh

CodeSystem: EditFlagsCS
Id: CodeSystem-edit-flags
Title: "Birth Edit Flags"
Description: "This code system contains codes to represent edit flags specific to BFDR. Additional edit flag codes are located in [CodeSystemEditFlagsVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-vr-edit-flags.html)"
* ^caseSensitive = true
* ^content = #complete
* ^experimental = false
* #1correctOutOfRange "Queried data correct, out of range" "Queried data correct, out of range" //PHC1491
* #1failedVerified "Edit Failed, Verified" "Edit Failed, Verified" //PHC1492
* #2failedBirthWeightGestationEdit "Queried, failed birthweight/gestation edit" "Queried, failed birthweight/gestation edit"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/codesystems/CodeSystemLocalCodes.fsh

CodeSystem: LocalBFDRCodesCS
Id: CodeSystem-local-bfdr-codes
Title: "Local BFDR Codes"
Description: "Local Codes for concepts in BFDR that lack an appropriate LOINC or SCT code"
* ^caseSensitive = true
* ^content = #complete
* ^experimental = false
* #unknownplannedhomebirth "Unknown if Planned Home Birth" "Unknown if Planned Home Birth" // PHC1297
* #assistedventfollowingdelivery "Assisted ventilation required immediately following delivery" "Assisted ventilation required immediately following delivery" //PHC1250
* #assistedventmorethan6hrs "Assisted ventilation required for more than six hours" "Assisted ventilation required for more than six hours" //PHC1251
* #FCOD_maternalconditions "Maternal Conditions/Diseases (Specify)" "Maternal Conditions/Diseases (Specify)" // PHC1301
* #FCOD_membranes "Complications of Placenta, Cord, or Membranes: Other (Specify)" "Complications of Placenta, Cord, or Membranes: Other (Specify)" // PHC1298
* #FCOD_obstetricalcomplications "Other Obstetrical or Pregnancy Complications (Specify)" "Other Obstetrical or Pregnancy Complications (Specify)" // PHC1299
* #FCOD_fetalconditions "Other Fetal Conditions/Disorder (Specify)" "Other Fetal Conditions/Disorder (Specify)" // PHC1300
* #rel_fatherofbaby "Father of baby" "Father of baby" //1496
* #rel_hospitalemployee "Hospital employee" "Hospital employee" //1498
* #rel_other "Other (with write in text)" "Other (with write in text)" //1499
* #rel_otherrelative "Other relative" "Other relative" //1497
* #loc_birth "Birth Location"                  // birth and maternity encounters
* #loc_transfer-from "Transfer-from Location"  // maternity encounter
* #loc_transfer-to "Transfer-to Location"      // birth encounter
* #industry_occupation_document "Industry and Occupation Document" // 

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_BirthAndFetalDeathFinancialClass.fsh

Instance: BirthAndFetalDeathFinancialClassCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(BirthAndFetalDeathFinancialClass, BirthAndFetalDeathFinancialClassVS)
* insert AddGroup($IJE, $PHCS_BirthAndFetalDeathFinancialClass_NCHS)  // This is the "Source of Payment Typology"or "Payer Type" Codesystem
* insert MapConcept( #1,  "Medicaid", #2, "MEDICAID")
* insert MapConcept( #2,  "Private Insurance", #5, "PRIVATE HEALTH INSURANCE")
* insert MapConcept( #3,  "Self-pay", #81, "Self-pay (Includes applicants for insurance and Medicaid applicants\)" )
* insert MapConcept( #4,  "Indian Health Service", #33, "Indian Health Service or Tribe")
* insert MapConcept( #5,  "CHAMPUS/TRICARE", #311, "TRICARE (CHAMPUS\)")
* insert MapConcept( #6,  "Other Government (Fed\, State\, Local\)", #38, "Other Government (Federal\, State\, Local not specified\)" )
* insert MapConcept( #8,  "Other", #99, "No Typology Code available for payment source")
* insert MapConcept( #9,  "Unknown", #9999, "Unavailable / No Payer Specified / Blank" //9999" )


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_BirthAttendantTitles.fsh

Instance: BirthAttendantTitlesCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(BirthAttendantTitles, BirthAttendantTitlesVS)
* insert AddGroup($IJE, $sct)
* insert MapConcept( #1,  "MD", #112247003, "Medical Doctor")
* insert MapConcept( #2,  "DO", #76231001, "Osteopath")
* insert MapConcept( #3,  "CNM/CM", #445521000124102, "Advanced Practice Midwife" )
* insert MapConcept( #4,  "Other Midwife", #445531000124104, "Lay Midwife" )
* insert AddGroup($IJE, $v3-NullFlavor)
* insert MapConcept( #5,  "Other (specify\)", #OTH, "other")
* insert MapConcept( #9,  "Unknown", #UNK, "Unknown")


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_BirthDeliveryOccurred.fsh

Instance: BirthDeliveryOccurredCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(BirthDeliveryOccurred, BirthDeliveryOccurredVS)
* insert AddGroup($IJE, $sct)
* insert MapConcept( #1,  "Hospital", #22232009, "Hospital")
* insert MapConcept( #2,  "Freestanding Birth Center", #91154008, "Free-standing birthing center")
* insert MapConcept( #3,  "Home (Intended\)", #408839006, "Planned home birth" )
* insert MapConcept( #4,  "Home (Not Intended\)", #408838003, "Unplanned home birth")
* insert MapConcept( #6,  "Clinic/Doctor's Office", #67190003, "Free-standing clinic" )
* insert AddGroup($IJE, [[Canonical(LocalBFDRCodesCS)]])
* insert MapConcept( #5,  "Home (Unknown if Intended\)", #unknownplannedhomebirth, "Unknown if Planned Home Birth")
* insert AddGroup($IJE, $v3-NullFlavor)
* insert MapConcept( #7,  "Other", #OTH, "Other")
* insert MapConcept( #9,  "Unknown", #UNK, "Unknown" )



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_BirthWeightEditFlag.fsh

Instance: BirthWeightEditFlagsCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(BirthWeightEditFlags, BirthWeightEditFlagsVS)
* insert AddGroup($IJE, [[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept( #0,  "Off", #0off, "Off")
* insert AddGroup($IJE, [[Canonical(EditFlagsCS)]])
* insert MapConcept( #1,  "Queried data correct\, out of range", #1correctOutOfRange, "Queried data correct\, out of range")
* insert MapConcept( #2,  "Queried\, failed  delivery weight/gestation edit", #2failedBirthWeightGestationEdit, "Queried\, failed birthweight/gestation edit")


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_DeliveryRoutes.fsh

Instance: DeliveryRoutesCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(DeliveryRoutes, DeliveryRoutesVS)
* insert AddGroup($IJE, $sct)
* insert MapConcept( #1,  "Spontaneous", #700000006, "Vaginal delivery of fetus (procedure\)")
* insert MapConcept( #2,  "Forceps", #302383004, "Forceps delivery (procedure\)")
* insert MapConcept( #3,  "Vacuum", #61586001, "Delivery by vacuum extraction (procedure\)")
* insert MapConcept( #4,  "Cesarean", #11466000, "Cesarean section (procedure\)")
//* insert MapConcept( #9,  "Unknown", #261665006, "Unknown")

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_EstimateOfGestationEditFlag.fsh

Instance: EstimateOfGestationEditFlagsCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(EstimateOfGestationEditFlags, EstimateOfGestationEditFlagsVS)
* insert AddGroup($IJE, [[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept( #0,  "Off", #0off, "Off")
* insert AddGroup($IJE, [[Canonical(EditFlagsCS)]])
* insert MapConcept( #1,  "Queried data correct\, out of range", #1correctOutOfRange, "Queried data correct\, out of range")

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_FetalDeathCauseOrCondition.fsh

Instance: FetalDeathCauseOrConditionCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(FetalDeathCauseOrCondition, FetalDeathCauseOrConditionVS)
* insert AddGroup($IJE, $sct)
// snomed to IJE fields 
* insert MapConcept( #COD18a1,  "Initiating cause/condition - Rupture of membranes prior to onset of labor", #44223004, "Premature rupture of membranes")
* insert MapConcept( #COD18a2,  "Initiating cause/condition - Abruptio placenta", #415105001, "Placental abruption")
* insert MapConcept( #COD18a3,  "Initiating cause/condition - Placental insufficiency", #237292005 , "Placental insufficiency")
* insert MapConcept( #COD18a4,  "Initiating cause/condition - Prolapsed cord", #270500004, "Prolapsed cord")
* insert MapConcept( #COD18a5,  "Initiating cause/condition - Chorioamnionitis", #11612004, "Chorioamnionitis")
* insert MapConcept( #COD18a11,  "Initiating cause/condition - Fetal anomaly literal", #702709008, "Congenital anomaly of fetus (Specify\)")
* insert MapConcept( #COD18a12,  "Initiating cause/condition - Fetal injury literal", #277489001, "Fetal trauma (Specify\)")
* insert MapConcept( #COD18a13,  "Initiating cause/condition - Fetal infection literal", #128270001, "Infectious disorder of the fetus (Specify\)")
* insert AddGroup($IJE, [[Canonical(LocalBFDRCodesCS)]])
* insert MapConcept( #COD18a8,  "Initiating cause/condition - Maternal conditions/diseases literal", #FCOD_maternalconditions, "Maternal Conditions/Diseases (Specify\)")
// #COD18a6 and #COD18a8 go together.  One is a boolean that says that there is an other condition.  One is the literal for that condition.
* insert MapConcept( #COD18a9,  "Initiating cause/condition - Other complications of placenta\, cord\, or membranes literal", #FCOD_membranes, "Complications of Placenta\, Cord\, or Membranes: Other (Specify\)")
* insert MapConcept( #COD18a10,  "Initiating cause/condition - Other obstetrical or pregnancy complications literal", #FCOD_obstetricalcomplications, "Other Obstetrical or Pregnancy Complications (Specify\)")
* insert MapConcept( #COD18a14,  "Initiating cause/condition - Other fetal conditions/disorders literal", #FCOD_fetalconditions, "Other Fetal Conditions/Disorder (Specify\)" )
* insert AddGroup($IJE, $v3-NullFlavor)
* insert MapConcept( #COD18a7,  "Initiating cause/condition - Unknown", #UNK, "Unknown")

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_FetalDeathTimePoints.fsh

Instance: FetalDeathTimePointsCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(FetalDeathTimePoints, FetalDeathTimePointsVS)
* insert AddGroup($IJE, $sct)
* insert MapConcept( #N,  "At assessment\, no labor", #434681000124104, "Antepartum fetal death with cessation of labor")
* insert MapConcept( #L,  "At assessment\, labor", #434671000124102, "Antepartum fetal death with continued labor")
* insert MapConcept( #A,  "Labor\, no assessment", #434631000124100, "Fetal intrapartum death after first assessment")
* insert AddGroup($IJE, $v3-NullFlavor)
* insert MapConcept( #U,  "Unknown", #UNK, "Unknown")



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_FetalPresentation.fsh

Instance: FetalPresentationCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(FetalPresentation, FetalPresentationsVS)
* insert AddGroup($IJE, $sct)
* insert MapConcept( #1,  "Cephalic", #70028003, "Vertex presentation (finding\)")
* insert MapConcept( #2,  "Breech", #6096002, "Breech presentation (finding\)")
* insert AddGroup($IJE, $v3-NullFlavor)
* insert MapConcept( #3,  "Other", #OTH, "other") // #163518000, "On examination - fetal presentation unsure	Unknown fetal presentation (finding\)" )
* insert MapConcept( #9,  "Unknown", #UNK, "unknown")


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_InfectionsDuringPregnancyLiveBirth.fsh

Instance: InfectionsDuringPregnancyLiveBirthCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(InfectionsDuringPregnancyLiveBirth, InfectionsDuringPregnancyLiveBirthVS)
* insert AddGroup($IJE, $sct)
* insert MapConcept( #GON,  "Infections Present--Gonorrhea", #15628003, "Gonorrhea")
* insert MapConcept( #SYPH,  "Infections Present--Syphilis", #76272004, "Syphilis")
// Herpes simplex removed from IJE by NCHS 
// * insert MapConcept( #HSV,  "Infections Present--Herpes Simplex (HSV) ", #33839006, "Genital herpes simplex" )
* insert MapConcept( #CHAM,  "Infections Present--Chlamydia", #105629000, "Chlamydia" )
* insert MapConcept( #HEPB,  "Infections Present--Hepatitis B", #66071002, "Hepatitis B" )
* insert MapConcept( #HEPC,  "Infections Present--Hepatitis C", #50711007, "Hepatitis C" )
// no "None" mapping - these mappings are between IJE fields that are Y, N, U and SNOMED codes
// * insert MapConcept( ---,  ---, #260413007, "None" )



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_NewbornCongenitalAnomalies.fsh

Instance: NewbornCongenitalAnomaliesCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(NewbornCongenitalAnomalies, NewbornCongenitalAnomaliesVS)
* insert AddGroup($IJE, $sct)
// snomed to IJE fields (Y, N ,U) 
* insert MapConcept( #ANEN,  "Congenital Anomalies of the Newborn--Anencephaly", #89369001, "Anencephaly")
* insert MapConcept( #MNSB,  "Congenital Anomalies of the Newborn--Meningomyelocele/Spina Bifida", #67531005, "Meningomyelocele/Spina bifida")
* insert MapConcept( #CCHD,  "Congenital Anomalies of the Newborn--Cyanotic congenital heart disease", #12770006, "Cyanotic congenital heart disease")
* insert MapConcept( #CDH,  "Congenital Anomalies of the Newborn--Congenital diaphragmatic hernia", #17190001, "Congenital diaphragmatic hernia")
* insert MapConcept( #OMPH,  "Congenital Anomalies of the Newborn--Omphalocele", #18735004, "Omphalocele")
* insert MapConcept( #GAST,  "Congenital Anomalies of the Newborn--Gastroschisis", #72951007, "Gastroschisis")
* insert MapConcept( #LIMB,  "Congenital Anomalies of the Newborn--Limb Reduction Defect", #67341007, "Limb reduction defect (excluding congenital amputation and dwarfing syndromes\)")
* insert MapConcept( #CL,  "Congenital Anomalies of the Newborn--Cleft Lip with or without Cleft Palate", #80281008, "Cleft Lip with or without Cleft Palate")
* insert MapConcept( #CP,  "Congenital Anomalies of the Newborn--Cleft Palate Alone", #87979003, "Cleft Palate alone")
* insert MapConcept( #DOWT,  "Congenital Anomalies of the Newborn--Down Syndrome", #70156005, "Down Syndrome")
* insert MapConcept( #CDIT,  "Congenital Anomalies of the Newborn--Suspected Chromosomal disorder", #409709004, "Suspected chromosomal disorder")
* insert MapConcept( #HYPO,  "Congenital Anomalies of the Newborn--Hypospadias", #416010008, "Hypospadias")
// There does not appear to be an IJE field that corresponds to the following value 
//* insert MapConcept( #NA,  "None - not in IJE", #260413007, "None")


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_NumberPreviousCesareansEditFlag.fsh

Instance: NumberPreviousCesareansEditFlagsCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(NumberPreviousCesareansEditFlags, NumberPreviousCesareansEditFlagsVS)
* insert AddGroup($IJE, [[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept( #0,  "Edit Passed", #0, "Edit Passed")
* insert AddGroup($IJE, [[Canonical(EditFlagsCS)]])
* insert MapConcept( #1,  "Edit Failed\, Verified", #1failedVerified, "Edit Failed\, Verified")




---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_PerformedNotPerformedPlanned.fsh

Instance: PerformedNotPerformedPlannedCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(PerformedNotPerformedPlanned, PerformedNotPerformedPlannedVS)
* insert AddGroup($IJE, $sct)
* insert MapConcept( #Y,  "Yes", #398166005, "Performed")
* insert MapConcept( #N,  "No", #262008008, "Not Performed")
* insert MapConcept( #P,  "Planned", #397943006, "Planned" )


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/CM_PregnancyReportEditFlag.fsh

Instance: PregnancyReportEditFlagsCM
InstanceOf: ConceptMap
Usage: #definition
* experimental = false
* insert ConceptMapIntro(PregnancyReportEditFlags, PregnancyReportEditFlagsVS)
* insert AddGroup($IJE, [[Canonical(CodeSystemEditFlagsVitalRecords)]])
* insert MapConcept( #0,  "Edit Passed", #0, "Edit Passed")
* insert MapConcept( #1,  "Edit Failed\, Number Verified", #1, "Edit Failed\, Data Queried\, and Verified")
* insert MapConcept( #2,  "Edit Failed\, Number not Verified", #2, "Edit Failed\, Data Queried\, but not Verified")


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/conceptmaps/DEF_ConceptMapRuleSets.fsh

RuleSet: ConceptMapIntro(name, vsname)
* name = "{name}"
* title = "{name} Concept Map"
* status = #draft
* contact.telecom.system = #url
* contact.telecom.value = "http://hl7.org/fhir"
* description = "A mapping between NCHS IJE and FHIR {name} Value Sets"
* useContext.code = http://terminology.hl7.org/CodeSystem/usage-context-type#focus
* useContext.valueCodeableConcept.text = "for IJE to FHIR alignment"
* jurisdiction = urn:iso:std:iso:3166#US
* purpose = "To help implementers map from IJE to FHIR Vocabulary"
* targetCanonical = Canonical({vsname})
* sourceCanonical = Canonical(ValueSetIJEVitalRecords)

RuleSet: MapConcept(code, display, targetcode, targetdisplay)
* group[=].element[+]
  * code = {code}
  * display = {display}
  * target
    * code = {targetcode}
    * display = {targetdisplay}
    * equivalence = #equivalent

RuleSet: AddGroup(source, target)
* group[+].target = {target}
* group[=].source = {source}

RuleSet: UnmatchedMapConcept(code, display, targetcode, targetdisplay)
* group[=].element[+]
  * code = {code}
  * display = {display}
  * target
    * equivalence = #unmatched
    * comment = {code}

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/extensions/ExtensionEncounterMaternityReference.fsh

Extension: ExtensionEncounterMaternityReference
Id: Extension-encounter-maternity-reference
Title: "Encounter Maternity Reference"
Description: "This Extension profile is a reference to the maternity encounter."
* ^context.type = #element
* ^context.expression = "Composition.encounter"
* value[x] 0..1
* value[x] only Reference(EncounterMaternity)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/extensions/ExtensionJurisdictionalFacilityIdentifier.fsh

Extension: JurisdictionalFacilityIdentifier
Id: Extension-jurisdictional-facility-identifier
Title: "Jurisdictional Facility Identifier"
Description: "This extension profile is an identifier associated with a birth or fetal death facility location.  Four character string per NCHS edit specifications."
* insert ExtensionContextResource(Identifier)
* value[x] 1..1
* value[x] only string
* valueString ^maxLength = 4

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/extensions/ExtensionRole.fsh

Extension: ExtensionRole
Id: Extension-role
Title: "Extension Parental Role"
Description: "Used to indicate whether an instance relates to the father or the mother."
* insert ExtensionContextResource(Observation)
* insert ExtensionContextResource(Encounter)
* insert ExtensionContextResource(Extension)
* insert MotherOrFather



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/CapabilityStatement-bfdr.fsh

Instance: CapabilityStatement-bfdr
InstanceOf: CapabilityStatement
Title: "CapabilityStatement - Birth and Fetal Death"
Description: "This section describes the expected capabilities of a BFDR Document producer actor who is responsible for producing clinical documents and a BFDR Document consumer who receives and consumes the clinical documents."
Usage: #definition
//* url = Canonical(CapabilityStatement-bfdr) // "http://hl7.org/fhir/us/bfdr/CapabilityStatement/CapabilityStatement-bfdr"
* version = "1.0.0"
* name = "CapabilityStatementBFDR"
* title = "CapabilityStatement - Birth and Fetal Death"
* status = #active
* experimental = false
* date = "2020-11-01"
* description = "This section describes the expected capabilities of a BFDR Document producer actor who is responsible for producing clinical documents and a BFDR Document consumer who receives and consumes the clinical documents."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[+] = #json
  // These are produced by  the source of the reports and sent to a Jurisdiction VRO or to NCHS
* document[0]
  * mode = #producer
  * profile = Canonical(CompositionJurisdictionLiveBirthReport)
  * documentation = "Produced by the source of the reports and sent to a Jurisdiction VRO or to NCHS"
* document[+]
  * mode = #producer
  * profile = Canonical(CompositionJurisdictionFetalDeathReport)
  * documentation = "Produced by the source of the reports and sent to a Jurisdiction VRO or to NCHS"
* document[+]
  * mode = #producer
  * profile = Canonical(CompositionProviderLiveBirthReport)
  * documentation = "Produced by the source of the reports and sent to a Jurisdiction VRO or to NCHS"
* document[+]
  * mode = #producer
  * profile = Canonical(CompositionProviderFetalDeathReport)
  * documentation = "Produced by the source of the reports and sent to a Jurisdiction VRO or to NCHS"
  // These are produced by NCHS and consumed by the source of the reports
* document[+]
  * mode = #consumer
  * profile = Canonical(CompositionCodedCauseOfFetalDeath)
  * documentation = "Produced by NCHS and consumed by the source of the reports"
* document[+]
  * mode = #consumer
  * profile = Canonical(CompositionCodedRaceAndEthnicity)
  * documentation = "Produced by NCHS and consumed by the source of the reports"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-chorioamnionitis-jada-ann-quinn.fsh

Instance: condition-chorioamnionitis-jada-ann-quinn
InstanceOf: ConditionChorioamnionitis
Title: "Condition - Chorioamnionitis - Jada Ann Quinn"
Description: "Condition - Chorioamnionitis: Jada Ann Quinn example"
Usage: #example
* category[us-core] = $condition-category#problem-list-item
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* code = $sct#11612004 "Chorioamnionitis (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-congenital-anomaly-of-newborn-babyg-quinn-2.fsh

Instance: condition-congenital-anomaly-of-newborn-babyg-quinn-2
InstanceOf: ConditionCongenitalAnomalyOfNewborn
Title: "Condition - Congenital Anomaly of Newborn - Baby G Quinn"
Description: "Condition - Congenital Anomaly of Newborn: Baby G Quinn example"
Usage: #example
* category[us-core] = $condition-category#problem-list-item "Problem List Item"
* category[requiredCategory] = $loinc#73780-9 "Congenital anomalies of the newborn [US Standard Certificate of Live Birth]"
* code = $sct#70156005 "Anomaly of chromosome pair 21 (disorder)"
  * text = "Anomaly of chromosome pair 21 (disorder)"
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* subject = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* evidence.code = $sct#312948004 "Karyotype determination"
  * text = "Karyotype determination pending"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-congenital-anomaly-of-newborn-babyg-quinn.fsh

Instance: condition-congenital-anomaly-of-newborn-babyg-quinn
InstanceOf: ConditionCongenitalAnomalyOfNewborn
Title: "Condition - Congenital Anomaly of Newborn - BabyG Quinn"
Description: "Condition - Congenital Anomaly of Newborn: BabyG Quinn example"
Usage: #example
* category[us-core] = $condition-category#problem-list-item "Problem List Item"
* category[requiredCategory] = $loinc#73780-9 "Congenital anomalies of the newborn [US Standard Certificate of Live Birth]"
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* code = $sct#12770006 "Cyanotic congenital heart disease (disorder)"
  * text = "Cyanotic congenital heart disease (disorder)"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-eclampsia-hypertension-jada-ann-quinn.fsh

Instance: condition-eclampsia-hypertension-jada-ann-quinn
InstanceOf: ConditionEclampsiaHypertension
Title: "Condition - Eclampsia Hypertension - Jada Ann Quinn"
Description: "Condition - Eclampsia Hypertension: Jada Ann Quinn example"
Usage: #example
* meta
  * versionId = "4"
  * lastUpdated = "2023-06-13T23:01:43.965Z"
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category[us-core] = $condition-category#problem-list-item
* code = $sct#15938005 "Eclampsia (disorder)"
  * text = "Eclampsia (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* onsetDateTime = "2018-12-12"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-fetal-death-cause-or-condition-not-named.fsh

Instance: condition-fetal-death-cause-or-condition-not-named
InstanceOf: ConditionFetalDeathInitiatingCauseOrCondition
Title: "Condition - Fetal Death Initiating Cause or Condition - Fetus Not Named"
Description: "Condition - Fetal Death Initiating Cause or Condition: Fetus Not Named example"
Usage: #example
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[initiatingCauseOrCondition] = $loinc#76060-3 "Initiating cause or condition of fetal death [US Standard Report of Fetal Death]"
* code = $sct#44223004 "Premature rupture of membranes (disorder)"
  * text = "Premature rupture of membranes (disorder)"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-fetal-death-other-significant-cause-not-named.fsh

Instance: condition-fetal-death-other-significant-cause-not-named
InstanceOf: ConditionFetalDeathOtherCauseOrCondition
Title: "Condition - Fetal Death Other Cause or Condition - Fetus Not Named"
Description: "Condition - Fetal Death Other Cause or Condition: Fetus Not Named example"
Usage: #example
* category[us-core] = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category[requiredCategory] = $loinc#76061-1 "Other significant causes or conditions of fetal death [US Standard Report of Fetal Death]"
* code = $sct#237292005 "Placental insufficiency (disorder)"
  * text = "Placental insufficiency (disorder)"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-gestational-diabetes-carmen-teresa-lee-new.fsh

Instance: condition-gestational-diabetes-carmen-teresa-lee
InstanceOf: ConditionGestationalDiabetes
Title: "Condition - Gestational Diabetes - Carmen Teresa Lee"
Description: "Condition - Gestational Diabetes: Carmen Teresa Lee example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category[us-core] = $condition-category#problem-list-item
* code = $sct#11687002 "Gestational diabetes mellitus (disorder)"
  * text = "Gestational diabetes mellitus (disorder)"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* onsetDateTime = "2018-12-12"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-gestational-diabetes-jada-ann-quinn-new.fsh

Instance: condition-gestational-diabetes-jada-ann-quinn
InstanceOf: ConditionGestationalDiabetes
Title: "Condition - Gestational Diabetes - Jada Ann Quinn"
Description: "Condition - Gestational Diabetes: Jada Ann Quinn example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category[us-core] = $condition-category#problem-list-item
* code = $sct#11687002 "Gestational diabetes mellitus (disorder)"
  * text = "Gestational diabetes mellitus (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* onsetDateTime = "2018-12-12"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-gestational-hypertension-jada-ann-quinn-new.fsh

Instance: condition-gestational-hypertension-jada-ann-quinn
InstanceOf: ConditionGestationalHypertension
Title: "Condition - Gestational Hypertension - Jada Ann Quinn"
Description: "Condition - Gestational Hypertension: Jada Ann Quinn example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category[us-core] = $condition-category#problem-list-item
* code = $sct#48194001 "Pregnancy-induced hypertension (disorder)"
  * text = "Pregnancy-induced hypertension (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-infection-present-during-pregnancy-jada-ann-quinn.fsh

Instance: condition-infection-present-during-pregnancy-jada-ann-quinn
InstanceOf: ConditionInfectionPresentDuringPregnancy
Title: "Condition - Infection Present During Pregnancy - Jada Ann Quinn"
Description: "Condition - Infection Present During Pregnancy: Jada Ann Quinn example"
Usage: #example
* category[us-core] = $condition-category#problem-list-item "Problem List Item"
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* code = $sct#105629000 "Chlamydial infection (disorder)"
  * text = "Chlamydial infection (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-perineal-laceration-jada-ann-quinn.fsh

Instance: condition-perineal-laceration-jada-ann-quinn
InstanceOf: ConditionPerinealLaceration
Title: "Condition - Perineal Laceration - Jada Ann Quinn"
Description: "Condition - Perineal Laceration: Jada Ann Quinn example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category = $condition-category#problem-list-item "Problem List Item"
* code = $sct#398019008 "Perineal laceration during delivery (disorder)"
  * text = "Perineal laceration during delivery (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-prepregnancy-diabetes-jada-ann-quinn-new.fsh

Instance: condition-prepregnancy-diabetes-jada-ann-quinn
InstanceOf: ConditionPrepregnancyDiabetes
Title: "Condition - Prepregnancy Diabetes - Jada Ann Quinn"
Description: "Condition - Prepregnancy Diabetes: Jada Ann Quinn example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category[us-core] = $condition-category#problem-list-item
* code = $sct#73211009 "Diabetes mellitus (disorder)"
  * text = "Diabetes mellitus (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* onsetDateTime = "2015-02-12"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-prepregnancy-hypertension-carmen-teresa-lee-new.fsh

Instance: condition-prepregnancy-hypertension-carmen-teresa-lee
InstanceOf: ConditionPrepregnancyHypertension
Title: "Condition - Prepregnancy Hypertension - Carmen Teresa Lee"
Description: "Condition - Prepregnancy Hypertension: Carmen Teresa Lee example"
Usage: #example
* category[us-core] = $condition-category#problem-list-item
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* code = $sct#38341003 "Hypertensive disorder, systemic arterial (disorder)"
  * text = "Hypertensive disorder, systemic arterial (disorder)"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* onsetDateTime = "2015-02-12"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-prepregnancy-hypertension-jada-ann-quinn-new.fsh

Instance: condition-prepregnancy-hypertension-jada-ann-quinn
InstanceOf: ConditionGestationalHypertension
Title: "Condition - Prepregnancy Hypertension - Jada Ann Quinn"
Description: "Condition - Prepregnancy Hypertension: Jada Ann Quinn example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category = $condition-category#problem-list-item
// * code = $sct#38341003 "Hypertensive disorder, systemic arterial (disorder)"
  * text = "Hypertensive disorder, systemic arterial (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* onsetDateTime = "2015-02-12"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-ruptured-uterus-jada-ann-quinn.fsh

Instance: condition-ruptured-uterus-jada-ann-quinn
InstanceOf: ConditionRupturedUterus
Title: "Condition - Ruptured Uterus - Jada Ann Quinn"
Description: "Condition - Ruptured Uterus: Jada Ann Quinn example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category = $condition-category#problem-list-item "Problem List Item"
* code = $sct#34430009 "Rupture of uterus (disorder)"
  * text = "Rupture of uterus (disorder)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/condition-seizure-babyg-quinn.fsh

Instance: condition-seizure-babyg-quinn
InstanceOf: ConditionSeizure
Title: "Condition - Seizure - BabyG Quinn"
Description: "Condition - Seizure: BabyG Quinn example"
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
  * text = "Active"
* category = $condition-category#problem-list-item "Problem List Item"
* code = $sct#91175000 "Seizure (finding)"
  * text = "Seizure (finding)"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/coverage-principal-payer-for-delivery-jada-ann-quinn.fsh

Instance: coverage-principal-payer-for-delivery-jada-ann-quinn
InstanceOf: CoveragePrincipalPayerDelivery
Title: "Coverage - Principal Payer for Delivery - Jada Ann Quinn"
Description: "Coverage - Principal Payer for Delivery: Jada Ann Quinn example"
Usage: #example
* status = #active
* type = $PHCS_BirthAndFetalDeathFinancialClass_NCHS#5 "Private Health Insurance"
  * text = "Private Health Insurance"
* beneficiary = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* payor
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
    * valueCode = #not-asked
  * display = "Not asked"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/encounter-birth-babyg-quinn.fsh

Instance: encounter-birth-babyg-quinn
InstanceOf: EncounterBirth
Title: "Encounter - Birth - Baby G Quinn"
Description: "Encounter - Birth: Baby G Quinn example"
Usage: #example
* identifier
  * system = "http://hospital.smarthealthit.org"
  * value = "9937012"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $cpt#99234
  * text = "Under Observation or Inpatient Care Services (Including Admission and Discharge Services)"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* participant[0]
  * type = $loinc#87287-9 "Birth certifier [Extended Identifier]"
  * period.start = "2019-02-12T13:30:00-07:00"
  * individual = Reference(practitioner-vital-records-avery-jones) "Practitioner - Vital Records (Avery Jones, MD)"
* participant[+]
  * type = $loinc#87286-1 "Birth attendant [Extended Identifier]"
  * individual = Reference(practitioner-vital-records-avery-jones) "Practitioner - Vital Records (Avery Jones, MD)"
* period
  * start = "2019-02-12T13:00:00-07:00"
  * end = "2019-02-15T10:00:00-07:00"
* hospitalization
  * destination = Reference(location-east-hospital) "East Hospital Location"
  * dischargeDisposition = $discharge-disposition#other-hcf "Other healthcare facility"
    * text = "The patient was transferred to another healthcare facility."
* location
  * location = Reference (location-south-hospital) "Location - US Core Location (South Hospital)"
  * physicalType = $sct#22232009 "Hospital"
* partOf = Reference(encounter-maternity-jada-ann-quinn) "Maternity Encounter - Jada Ann Quinn"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/encounter-maternity-carmen-teresa-lee.fsh

Instance: encounter-maternity-carmen-teresa-lee
InstanceOf: EncounterMaternity
Title: "Encounter - Maternity - Carmen Teresa Lee"
Description: "Encounter - Maternity: Carmen Teresa Lee example"
Usage: #example
* identifier
  * system = "http://hospital.smarthealthit.org"
  * value = "8937015"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $cpt#99234
  * text = "Under Observation or Inpatient Care Services (Including Admission and Discharge Services)"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* participant
  * type = $loinc#87286-1 "Birth attendant [Extended Identifier]"
  * individual = Reference(practitioner-vital-records-janet-seito) "Practitioner - Vital Records (Janet Seito, DO)"
* period
  * start = "2019-01-08T10:00:00-07:00"
  * end = "2019-01-09T17:00:00-07:00"
* location
  * location = Reference(location-south-hospital) "Location - US Core Location (South Hospital)"
  * physicalType = $sct#22232009 "Hospital"
* serviceProvider = Reference(organization-south-hospital) "Organization - US Core Organization (South Hospital Organization)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/encounter-maternity-jada-ann-quinn.fsh

Instance: encounter-maternity-jada-ann-quinn
InstanceOf: EncounterMaternity
Title: "Encounter - Maternity - Jada Ann Quinn"
Description: "Encounter - Maternity: Jada Ann Quinn example"
Usage: #example
* identifier
  * system = "http://hospital.smarthealthit.org"
  * value = "9937012"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $cpt#99234
  * text = "Under Observation or Inpatient Care Services (Including Admission and Discharge Services)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* participant
  * type = $loinc#87286-1 "Birth attendant [Extended Identifier]"
  * individual = Reference(practitioner-vital-records-avery-jones) "Practitioner - Vital Records (Avery Jones, MD)"
* period
  * start = "2019-02-11T10:00:00-07:00"
  * end = "2019-02-15T10:00:00-07:00"
* hospitalization
  * origin = Reference(location-north-hospital) "Location - US Core Location (North Hospital)"
  * admitSource = $admit-source#hosp-trans "Transferred from other hospital"
    * text = "The Patient has been transferred from another hospital for this encounter."
* location
  * location = Reference(location-south-hospital) "Location - US Core Location (South Hospital)"
  * physicalType = $sct#22232009 "Hospital"
* serviceProvider = Reference(organization-south-hospital) "Organization - US Core Organization (South Hospital Organization)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/expansion-parameters-bfdr.fsh

Instance: expansion-parameters
InstanceOf: Parameters
Title: "USA SNOMED-CT"
Description: "USA SNOMED-CT"
Usage: #example
* parameter[0]
  * name = "profile-url"
  * valueString = "dc8fd4bc-091a-424a-8a3b-6198ef146891"
* parameter[+]
  * name = "system-version"
  * valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/location-east-hospital.fsh

Instance: location-east-hospital
InstanceOf: LocationBFDR
Title: "Location BFDR - East Hospital"
Description: "Location BFDR: East Hospital example"
Usage: #example
* status = #active
* name = "East Hospital"
* type[0] = $v3-RoleCode#HOSP "Hospital"
* type[+] = LocalBFDRCodesCS#loc_transfer-to "Transfer-to Location"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/location-north-hospital.fsh

Instance: location-north-hospital
InstanceOf: LocationBFDR
Title: "Location BFDR - North Hospital"
Description: "Location BFDR: North Hospital example"
Usage: #example
* status = #active
* name = "North Hospital"
* type[0] = $v3-RoleCode#HOSP "Hospital"
* type[+] = LocalBFDRCodesCS#loc_transfer-from "Transfer-from Location"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/location-south-hospital.fsh

Instance: location-south-hospital
InstanceOf: LocationBFDR
Title: "Location BFDR - South Hospital"
Description: "Location BFDR: South Hospital example"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "116441967701"
* identifier.extension[JFI].valueString = "UT12"
* status = #active
* name = "South Hospital"
* type[0] = $v3-RoleCode#HOSP "Hospital"
* type[+] = LocalBFDRCodesCS#loc_birth "Birth Location"
* address
  * line = "2100 North Ave"
  * city = "Salt Lake City"
//    * extension[cityCode].valueString = "12345"
  * state = "UT"
  * postalCode = "84116"
  * country = "US"
  * district = "Made Up"
//    * extension[districtCode].valueString = "12345"
* managingOrganization = Reference(organization-south-hospital) "Organization - South Hospital"
* position.longitude = 40.8
* position.latitude = 111.9

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-antibiotics-during-labor-jada-ann-quinn.fsh

Instance: observation-antibiotics-during-labor-jada-ann-quinn
InstanceOf: ObservationAntibioticsAdministeredDuringLabor
Title: "Observation - Antibiotics Administered During Labor - Jada Ann Quinn"
Description: "Observation - Antibiotics Administered During Labor: Jada Ann Quinn example"
Usage: #example
* status = #final
* code = $loinc#73813-8 "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
  * text = "Characteristics of labor and delivery"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#434691000124101 "Antibacterial administered during labor"
  * text = "Antibiotics received during labor"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-apgar-score-babyg-quinn-10-min-new.fsh

Instance: observation-apgar-score-babyg-quinn-10-min
InstanceOf: ObservationApgarScore
Title: "Observation - Apgar Score - BabyG Quinn: 10 min"
Description: "Observation - Apgar Score: BabyG Quinn: 10 min example"
Usage: #example
//* meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-apgar-score-vr"
* status = #final
* code = $loinc#9271-8 "10 minute Apgar Score"
  * text = "10 minute Apgar Score"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 7

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-apgar-score-babyg-quinn-5-min-new.fsh

Instance: observation-apgar-score-babyg-quinn-5-min
InstanceOf: ObservationApgarScore
Title: "Observation - Apgar Score - BabyG Quinn: 5 min"
Description: "Observation - Apgar Score: BabyG Quinn: 5 min example"
Usage: #example
//* meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-apgar-score-vr"
* status = #final
* code = $loinc#9274-2 "5 minute Apgar Score"
  * text = "5 minute Apgar Score"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 5

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-autopsy-histological-exam-results-used-not-named.fsh

Instance: observation-autopsy-histological-exam-results-used-not-named
InstanceOf: ObservationAutopsyHistologicalExamResultsUsed
Title: "Observation - Autopsy or Histological Exam Results Used - Fetus Not Named"
Description: "Observation - Autopsy or Histological Exam Results Used: Fetus Note Named example"
Usage: #example
* status = #final
* code = $loinc#74498-7 "Autopsy or histological placental examination results were used [US Standard Report of Fetal Death]"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $v2-0136#Y "Yes"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-autopsy-performed-not-named.fsh

Instance: observation-autopsy-performed-not-named
InstanceOf: ObservationAutopsyPerformedIndicator
Title: "Observation - Autopsy Performed - Fetus Not Named"
Description: "Observation - Autopsy Performed: Fetus Not Named example"
Usage: #example
* status = #final
* code = $loinc#85699-7 "Autopsy was performed"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
//* valueCodeableConcept = $sct#716347009 "Autopsy performed (situation)"
* valueCodeableConcept = $sct#398166005 "Performed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-birth-plurality-carmen-teresa-lee.fsh

Instance: observation-plurality-carmen-teresa-lee
InstanceOf: ObservationBirthPluralityOfPregnancy
Title: "Observation - Plurality of Pregnancy example [Carmen Teresa Lee]"
Description: "Example of Observation-birth-plurality-of-pregnancy profile (Carmen Teresa Lee)"
Usage: #example
* status = #final
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-birth-weight-babyg-quinn-new.fsh

Instance: observation-birth-weight-babyg-quinn
InstanceOf: ObservationBirthWeight
Title: "Observation - Birth Weight - Baby G Quinn"
Description: "Observation - Birth Weight: Baby G Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-birth-weight-vr"
* status = #final
* code = $loinc#8339-4 "Birth weight Measured"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 2500 'g'

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-birth-weight-babyg-quinn-w-edit.fsh


Instance: observation-birth-weight-babyg-quinn-w-edit
InstanceOf: ObservationBirthWeight
Title: "Observation - Birth Weight - Baby G Quinn, with Edit Flag"
Description: "Observation - Birth Weight: Baby G Quinn example, with Edit Flag"
Usage: #example
* status = #final
* code = $loinc#8339-4 "Birth weight Measured"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 2500 'g'
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0off "Off"



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-birth-weight-not-named-new.fsh

Instance: observation-birth-weight-not-named
InstanceOf: ObservationBirthWeight
Title: "Observation - Birth Weight - Fetus Not Named"
Description: "Observation - Birth Weight: Fetus Not Named example"
Usage: #example
// * meta
  //should have a meta.profile
* status = #final
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-01-10"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 1530 'g'

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-birth-weight-not-named-w-edit.fsh

Instance: observation-birth-weight-not-named-w-edit
InstanceOf: ObservationBirthWeight
Title: "Observation - Birth Weight - Fetus Not Named, with Edit Flag"
Description: "Observation - Birth Weight: Fetus Not Named example, with Edit Flag"
Usage: #example

* status = #final
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-02-10"
* performer = Reference(organization-jurisdictional-vital-records-office)
* valueQuantity = 1530 'g'
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0off "Off"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-1-carmen-teresa-lee.fsh

Instance: observation-cig-smoking-pregnancy-1-carmen-teresa-lee
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before During Pregnancy - 3 months prior: Carmen Teresa Lee"
Description: "Observation - Cigarette Smoking Before During Pregnancy - 3 months prior: Carmen Teresa Lee example"
Usage: #example
* status = #final
* code = $loinc#64794-1 "In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day [PhenX]"
  * text = "In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day [PhenX]"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* focus = Reference (patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-1-jada-ann-quinn.fsh

Instance: observation-cig-smoking-pregnancy-1-jada-ann-quinn
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before/During Pregnancy - Jada Ann Quinn: 3 months prior"
Description: "Observation - Cigarette Smoking Before/During Pregnancy: Jada Ann Quinn: 3 months prior example"
Usage: #example
* status = #final
* code = $loinc#64794-1 "In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day [PhenX]"
  * text = "In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day [PhenX]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueInteger = 20

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-2-carmen-teresa-lee.fsh

Instance: observation-cig-smoking-pregnancy-2-carmen-teresa-lee
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before During Pregnancy - first 3 months: Carmen Teresa Lee"
Description: "Observation - Cigarette Smoking Before During Pregnancy - first 3 months: Carmen Teresa Lee example"
Usage: #example
* status = #final
* code = $loinc#87298-6 "Cigarettes smoked per day by Mother--1st trimester"
  * text = "Cigarettes smoked per day by Mother--1st trimester"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* focus = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-2-jada-ann-quinn.fsh

Instance: observation-cig-smoking-pregnancy-2-jada-ann-quinn
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before/During Pregnancy - Jada Ann Quinn: first 3 months"
Description: "Observation - Cigarette Smoking Before/During Pregnancy: Jada Ann Quinn: first 3 months example"
Usage: #example
* status = #final
* code = $loinc#87298-6 "Cigarettes smoked per day by Mother--1st trimester"
  * text = "Cigarettes smoked per day by Mother--1st trimester"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueInteger = 3

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-3-carmen-teresa-lee.fsh

Instance: observation-cig-smoking-pregnancy-3-carmen-teresa-lee
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before During Pregnancy example - second 3 months: Carmen Teresa Lee"
Description: "Observation - Cigarette Smoking Before During Pregnancy example - second 3 months: Carmen Teresa Lee example"
Usage: #example
* status = #final
* code = $loinc#87299-4 "Cigarettes smoked per day by Mother--2nd trimester"
  * text = "Cigarettes smoked per day by Mother--2nd trimester"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* focus = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-3-jada-ann-quinn.fsh

Instance: observation-cig-smoking-pregnancy-3-jada-ann-quinn
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before/During Pregnancy - Jada Ann Quinn: second 3 months"
Description: "Observation - Cigarette Smoking Before/During Pregnancy: Jada Ann Quinn: second 3 months example"
Usage: #example
* status = #final
* code = $loinc#87299-4 "Cigarettes smoked per day by Mother--2nd trimester"
  * text = "Cigarettes smoked per day by Mother--2nd trimester"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-4-carmen-teresa-lee.fsh

Instance: observation-cig-smoking-pregnancy-4-carmen-teresa-lee
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before During Pregnancy - last 3 months: Carmen Teresa Lee"
Description: "Observation - Cigarette Smoking Before During Pregnancy - last 3 months: Carmen Teresa Lee example"
Usage: #example
* status = #final
* code = $loinc#64795-8 "In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day [PhenX]"
  * text = "In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day [PhenX]"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* focus = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-cig-smoking-pregnancy-4-jada-ann-quinn.fsh

Instance: observation-cig-smoking-pregnancy-4-jada-ann-quinn
InstanceOf: ObservationCigaretteSmokingBeforeDuringPregnancy
Title: "Observation - Cigarette Smoking Before/During Pregnancy - Jada Ann Quinn: last 3 months"
Description: "Observation - Cigarette Smoking Before/During Pregnancy: Jada Ann Quinn: last 3 months example"
Usage: #example
* status = #final
* code = $loinc#64795-8 "In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day [PhenX]"
  * text = "In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day [PhenX]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueInteger = 0



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-coded-initiating-fetal-death-cause-or-condition.fsh

Instance: observation-coded-initiating-fetal-death-cause-or-condition
InstanceOf: ObservationCodedInitiatingFetalDeathCauseOrCondition
Title: "Observation - Coded Initiating Cause of Fetal Death"
Description: "Observation - Coded Initiating Cause of Fetal Death example"
Usage: #example
* valueCodeableConcept = $icd-10#P01.1 "Fetus and newborn affected by premature rupture of membranes"
* subject.display = "Patient - Decedent Fetus (Fetus Not Named)"
* status = #final

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-coded-other-fetal-death-cause-or-condition-not-named.fsh

Instance: observation-coded-other-fetal-death-cause-or-condition-not-named
InstanceOf: ObservationCodedOtherFetalDeathCauseOrCondition
Title: "Observation - Coded Other Cause of Fetal Death"
Description: "Observation - Coded Other Cause of Fetal Death example"
Usage: #example
* valueCodeableConcept = $icd-10#P02.1 "Fetus and newborn affected by other forms of placental separation and haemorrhage"
* subject.display = "Patient - Decedent Fetus (Fetus Not Named)"
* component[position].valueInteger = 1
* status = #final



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-date-of-first-prenatal-care-visit-carmen-teresa-lee.fsh

Instance: observation-date-of-first-prenatal-care-visit-carmen-teresa-lee
InstanceOf: ObservationDateOfFirstPrenatalCareVisit
Title: "Observation - Date of First Prenatal Care Visit - Carmen Teresa Lee"
Description: "Observation - Date of First Prenatal Care Visit: Carmen Teresa Lee example"
Usage: #example
* status = #final
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)" 
* focus = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueDateTime = "2018-05-18"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-date-of-first-prenatal-care-visit-jada-ann-quinn.fsh

Instance: observation-date-of-first-prenatal-care-visit-jada-ann-quinn
InstanceOf: ObservationDateOfFirstPrenatalCareVisit
Title: "Observation - Date of First Prenatal Care Visit - Jada Ann Quinn"
Description: "Observation - Date of First Prenatal Care Visit: Jada Ann Quinn example"
Usage: #example
* status = #final
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueDateTime = "2018-07-20"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-date-of-last-live-birth-carmen-teresa-lee.fsh

Instance: observation-date-of-last-live-birth-carmen-teresa-lee
InstanceOf: ObservationDateOfLastLiveBirth
Title: "Observation - Date of Last Live Birth - Carmen Teresa Lee"
Description: "Observation - Date of Last Live Birth: Carmen Teresa Lee example"
Usage: #example
* status = #final
* code = $loinc#68499-3 "Date last live birth"
  * text = "Date of last live birth"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueDateTime = "2016-01-28"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-date-of-last-live-birth-jada-ann-quinn.fsh

Instance: observation-date-of-last-live-birth-jada-ann-quinn
InstanceOf: ObservationDateOfLastLiveBirth
Title: "Observation - Date of Last Live Birth - Jada Ann Quinn"
Description: "Observation - Date of Last Live Birth: Jada Ann Quinn example"
Usage: #example
* status = #final
* code = $loinc#68499-3 "Date last live birth"
  * text = "Date of last live birth"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueDateTime = "2014-11-20"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-date-of-last-other-pregnancy-outcome-jada-ann-quinn.fsh

Instance: observation-date-of-last-other-pregnancy-outcome-jada-ann-quinn
InstanceOf: ObservationDateOfLastOtherPregnancyOutcome
Title: "Observation - Date of Last Other Pregnancy Outcome - Jada Ann Quinn"
Description: "Observation - Date of Last Other Pregnancy Outcome: Jada Ann Quinn example"
Usage: #example
* status = #final
* code = $loinc#68500-8 "Date last other pregnancy outcome"
  * text = "Date of last other pregnancy outcome"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueDateTime = "2015-05"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-fetal-death-time-point-not-named.fsh

Instance: observation-fetal-death-time-point-not-named
InstanceOf: ObservationFetalDeathTimePoint
Title: "Observation - Observation Estimated Fetal Death Time Point - Fetus Not Named"
Description: "Observation - Observation Estimated Fetal Death Time Point: Fetus Not Named example"
Usage: #example
* status = #final
//* code = $loinc#73811-2 "Estimated timing of fetal death [US Standard Report of Fetal Death]"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#434631000124100 "Fetal intrapartum death after first assessment (event)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-fetal-presentation-babyg-quinn.fsh

Instance: observation-fetal-presentation-babyg-quinn
InstanceOf: ObservationFetalPresentation
Title: "Observation - Fetal Presentation Baby G Quinn"
Description: "Observation - Fetal Presentation Baby G Quinn"
Usage: #example
* status = #final
//* code = $loinc#73761-9 "Fetal presentation--at birth [US Standard Certificate of Live Birth]"
* subject = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#6096002 "Breech presentation (finding)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-fetal-presentation-not-named.fsh

Instance: observation-fetal-presentation-not-named
InstanceOf: ObservationFetalPresentation
Title: "Observation - Fetal Presentation - Fetus Not Named"
Description: "Observation - Fetal Presentation: Fetus Not Named example"
Usage: #example
* status = #final
//* code = $loinc#73761-9 "Fetal presentation--at birth [US Standard Certificate of Live Birth]"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#6096002 "Breech presentation (finding)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-gestational-age-at-delivery-babyg-quinn-premature-d.fsh

Instance: observation-gestational-age-at-delivery-babyg-quinn-prem-d
InstanceOf: ObservationGestationalAgeAtDelivery
Title: "Observation - Gestational Age at Delivery - Baby G Quinn - Premature"
Description: "Observation - Gestational Age at Delivery: Baby G Quinn example of reporting gestational age of 33 weeks and 5 days in days."
Usage: #example
* status = #final
* code = $loinc#11884-4 "Gestational age Estimated"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 236 'd' // 33 weeks and 5 days = 236 days


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-gestational-age-at-delivery-babyg-quinn-premature-w.fsh

Instance: observation-gestational-age-at-delivery-babyg-quinn-prem-w
InstanceOf: ObservationGestationalAgeAtDelivery
Title: "Observation - Gestational Age at Delivery - Baby G Quinn - Premature in weeks"
Description: "Observation - Gestational Age at Delivery: Baby G Quinn example of reporting gestational age of 33 weeks and 5 days in weeks."
Usage: #example
* status = #final
* code = $loinc#11884-4 "Gestational age Estimated"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 33.71 'wk' // 33 weeks and 5 days = 33 + 5/7 = 33.71

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-gestational-age-at-delivery-babyg-quinn-w-edit.fsh

Instance: observation-gestational-age-at-delivery-babyg-quinn-w-edit
InstanceOf: ObservationGestationalAgeAtDelivery
Title: "Observation - Gestational Age at Delivery - Baby G Quinn, with Edit Flag"
Description: "Observation - Gestational Age at Delivery: Baby G Quinn example, with Edit Flag"
Usage: #example
* status = #final
* code = $loinc#11884-4 "Gestational age Estimated"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 36 'wk'
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0off "Off"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-gestational-age-at-delivery-babyg-quinn.fsh

Instance: observation-gestational-age-at-delivery-babyg-quinn
InstanceOf: ObservationGestationalAgeAtDelivery
Title: "Observation - Gestational Age at Delivery - Baby G Quinn"
Description: "Observation - Gestational Age at Delivery: Baby G Quinn example"
Usage: #example
* status = #final
* code = $loinc#11884-4 "Gestational age Estimated"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 36 'wk'


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-gestational-age-at-delivery-not-named-w-edit.fsh

Instance: observation-gestational-age-at-delivery-not-named-w-edit
InstanceOf: ObservationGestationalAgeAtDelivery
Title: "Observation - Gestational Age at Delivery - Fetus Not Named, with Edit Flag"
Description: "Observation - Gestational Age at Delivery: Fetus Not Named example, with Edit Flag"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-gestational-age-at-delivery-vr"
* status = #final
* code = $loinc#11884-4 "Gestational age Estimated"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 20 'wk'
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0off "Off"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-gestational-age-at-delivery-not-named.fsh

Instance: observation-gestational-age-at-delivery-not-named
InstanceOf: ObservationGestationalAgeAtDelivery
Title: "Observation - Gestational Age at Delivery - Fetus Not Named"
Description: "Observation - Gestational Age at Delivery: Fetus Not Named example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-gestational-age-at-delivery-vr"
* status = #final
* code = $loinc#11884-4 "Gestational age Estimated"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 20 'wk'

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-histological-placental-exam-performed-not-named.fsh

Instance: observation-histological-placental-exam-performed-not-named
InstanceOf: ObservationHistologicalPlacentalExamPerformed
Title: "Observation - Histological Placental Exam Performed - Fetus Not Named"
Description: "Observation - Histological Placental Exam Performed: Fetus Not Named example"
Usage: #example
* status = #final
//* code = $loinc#73767-6 "Histological placental examination was performed [US Standard Report of Fetal Death]"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#398166005 "Performed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-icu-admission-jada-ann-quinn.fsh

Instance: observation-icu-admission-jada-ann-quinn
InstanceOf: ObservationICUAdmission
Title: "Observation - ICU Admission - Jada Ann Quinn"
Description: "Observation - ICU Admission: Jada Ann Quinn example"
Usage: #example
* status = #final
//* code = $loinc#73781-7 "Maternal morbidity [US Standard Certificate of Live Birth]"
//  * text = "Maternal morbidity [US Standard Certificate of Live Birth]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#309904001 "Intensive care unit (environment)"
  * text = "Intensive care unit (environment)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-infant-breastfed-at-discharge-babyg-quinn.fsh

Instance: observation-infant-breastfed-at-discharge-babyg-quinn
InstanceOf: ObservationInfantBreastfedAtDischarge
Title: "Observation - Infant Breastfed at Discharge - Baby G Quinn"
Description: "Observation - Infant Breastfed at Discharge: BabyG Quinn"
Usage: #example
* status = #final
//* code = $loinc#73756-9 "Infant is being breastfed at discharge [US Standard Certificate of Live Birth]"
//  * text = "Infant is being breastfed at discharge [US Standard Certificate of Live Birth]"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-infant-living-babyg-quinn-new.fsh

Instance: observation-infant-living-babyg-quinn
InstanceOf: ObservationInfantLiving
Title: "Observation - Infant Living - Baby G Quinn"
Description: "Observation - Infant Living: BabyG Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-infant-living-vr"
* status = #final
* code = $loinc#73757-7 "Infant living at time of report [US Standard Certificate of Live Birth]"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-input-race-and-ethnicity-multiple.fsh


Instance: observation-input-race-and-ethnicity-jada-ann-quinn
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [jada ann quinn]"
Description: "Example of input-race-and-ethnicity-vr profile (jada-ann-quinn)"
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother
* status = #final
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = true
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[HispanicMexican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"


Instance: observation-input-race-and-ethnicity-carmen-teresa-lee
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [carmen teresa lee]"
Description: "Example of input-race-and-ethnicity-vr profile (carmen-teresa-lee)"
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother
* status = #final
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = true
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = false
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"

Instance: observation-input-race-and-ethnicity-james-quinn-w-edit
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [james-quinn with edit]"
Description: "Example of input-race-and-ethnicity-vr profile (James Quinn with edit)"
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather
* status = #final
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* focus = Reference(relatedperson-father-natural-james-brandon-quinn-w-edit)
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = false
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = false
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"

Instance: observation-input-race-and-ethnicity-james-quinn
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [james-quinn]"
Description: "Example of input-race-and-ethnicity-vr profile (James Quinn)"
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather
* status = #final
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* focus = Reference(relatedperson-father-natural-james-brandon-quinn)
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = false
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = false
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#N "No"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-labor-trial-attempted-babyg-quinn.fsh

Instance: observation-labor-trial-attempted-babyg-quinn
InstanceOf: ObservationLaborTrialAttempted
Title: "Observation - Labor Trial Attempted - Baby G Quinn"
Description: "Observation - Labor Trial Attempted: Baby G Quinn example"
Usage: #example
* status = #final
//* code = $loinc#73760-1 "If cesarean, a trial of labor was attempted [US Standard Certificate of Live Birth]"
//  * text = "If cesarean, a trial of labor was attempted [US Standard Certificate of Live Birth]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-last-menstrual-period-carmen-teresa-lee-new.fsh

Instance: observation-last-menstrual-period-carmen-teresa-lee
InstanceOf: ObservationLastMenstrualPeriod
Title: "Observation - Last Menstrual Period - Carmen Teresa Lee"
Description: "Observation - Last Menstrual Period: Carmen Teresa Lee example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-last-menstrual-period-vr"
* status = #final
* code = $loinc#8665-2 "Last menstrual period start date"
  * text = "Last menstrual period start date"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2018-05-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueDateTime = "2018-04-18"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-last-menstrual-period-jada-ann-quinn-new.fsh

Instance: observation-last-menstrual-period-jada-ann-quinn
InstanceOf: ObservationLastMenstrualPeriod
Title: "Observation - Last Menstrual Period - Jada Ann Quinn"
Description: "Observation - Last Menstrual Period: Jada Ann Quinn example"
Usage: #example
// * meta
  //TODO this will have to change
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-last-menstrual-period-vr"
* status = #final
* code = $loinc#8665-2 "Last menstrual period start date"
  * text = "Last menstrual period start date"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueDateTime = "2018-06-05"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-method-of-disposition-not-named.fsh

Instance: observation-method-of-disposition-not-named
InstanceOf: ObservationFetalRemainsDispositionMethod
Title: "Observation - Method of Disposition - Fetus Not Named"
Description: "Observation - Method of Disposition: Fetus Not Named example"
Usage: #example
* status = #final
* code = $loinc#88241-5 "Fetal remains disposition method"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#449971000124106 "Patient status determination, deceased and buried (finding)"
  * text = "Patient status determination, deceased and buried (finding)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-delivery-weight-jada-ann-quinn-new.fsh

Instance: observation-mother-delivery-weight-jada-ann-quinn
InstanceOf: ObservationMotherDeliveryWeight
Title: "Observation - Mother Delivery Weight - Jada Ann Quinn"
Description: "Observation - Mother Delivery Weight: Jada Ann Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-delivery-weight-vr"
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#69461-2 "Mother's body weight --at delivery"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-02-12"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 175 '[lb_av]'

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-delivery-weight-jada-ann-quinn-w-edit.fsh

Instance: observation-mother-delivery-weight-jada-ann-quinn-w-edit
InstanceOf: ObservationMotherDeliveryWeight
Title: "Observation - Mother Delivery Weight - Jada Ann Quinn, with Edit Flag"
Description: "Observation - Mother Delivery Weight: Jada Ann Quinn example, with Edit Flag"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-delivery-weight-vr"
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#69461-2 "Mother's body weight --at delivery"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-02-12"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 175 '[lb_av]'
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-height-carmen-teresa-lee-new.fsh

Instance: observation-mother-height-carmen-teresa-lee
InstanceOf: ObservationMotherHeight
Title: "Observation - Mother Height - Carmen Teresa Lee"
Description: "Observation - Mother Height: Carmen Teresa Lee example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-height-vr"
* status = #final
// * category = $observation-category#vital-signs "Vital Signs"
//   * text = "Vital Signs"
// * code = $loinc#3137-7 "Body height Measured"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-01-10"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueQuantity = 65 '[in_i]' "in"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-height-carmen-teresa-lee-w-edit.fsh

Instance: observation-mother-height-carmen-teresa-lee-w-edit
InstanceOf: ObservationMotherHeight
Title: "Observation - Mother Height - Carmen Teresa Lee, with Edit Flag"
Description: "Observation - Mother Height: Carmen Teresa Lee example, with Edit Flag"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-height-vr"
* status = #final
// * category = $observation-category#vital-signs "Vital Signs"
//   * text = "Vital Signs"
//* code = $loinc#3137-7 "Body height Measured"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-01-10"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueQuantity = 56 '[in_i]' "in"
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-height-jada-ann-quinn-new.fsh

Instance: observation-mother-height-jada-ann-quinn
InstanceOf: ObservationMotherHeight
Title: "Observation - Mother Height - Jada Ann Quinn"
Description: "Observation - Mother Height: Jada Ann Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-height-vr"
* status = #final
// * category = $observation-category#vital-signs "Vital Signs"
//   * text = "Vital Signs"
//* code = $loinc#3137-7 "Body height Measured"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-02-10"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueQuantity = 67 '[in_i]' "in"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-height-jada-ann-quinn-w-edit.fsh

Instance: observation-mother-height-jada-ann-quinn-w-edit
InstanceOf: ObservationMotherHeight
Title: "Observation - Mother Height - Jada Ann Quinn, with Edit Flag"
Description: "Observation - Mother Height: Jada Ann Quinn example, with Edit Flag"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-height-vr"
* status = #final
// * category = $observation-category#vital-signs "Vital Signs"
//   * text = "Vital Signs"
//* code = $loinc#3137-7 "Body height Measured"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-02-10"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueQuantity = 67 '[in_i]' "in"
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-married-during-pregnancy-jada-ann-quinn.fsh

Instance: observation-mother-married-during-pregnancy-jada-ann-quinn
InstanceOf: ObservationMotherMarriedDuringPregnancy
Title: "Observation - Mother Married During Pregnancy - Jada Ann Quinn"
Description: "Observation - Mother Married During Pregnancy: Jada Ann Quinn example"
Usage: #example
* status = #final
//* code = $loinc#87301-8 "Mother was married at any time during pregnancy"
//  * text = "Was mother married at conception, at the time of birth, or at any time between conception and giving birth?"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
// * performer = Reference(patient-mother-jada-ann-quinn)
* valueCodeableConcept = $v2-0136#Y "Yes"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-prepregnancy-weight-carmen-teresa-lee-new.fsh

Instance: observation-mother-prepregnancy-weight-carmen-teresa-lee
InstanceOf: ObservationMotherPrepregnancyWeight
Title: "Observation - Mother Prepregnancy Weight - Carmen Teresa Lee"
Description: "Observation - Mother Prepregnancy Weight: Carmen Teresa Lee example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-prepregnancy-weight-vr"
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#56077-1 "Body weight --pre current pregnancy"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 180 '[lb_av]'

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-prepregnancy-weight-carmen-teresa-lee-w-edit.fsh

Instance: observation-mother-prepregnancy-weight-carmen-teresa-lee-w-edit
InstanceOf: ObservationMotherPrepregnancyWeight
Title: "Observation - Mother Prepregnancy Weight - Carmen Teresa Lee, with Edit Flag"
Description: "Observation - Mother Prepregnancy Weight: Carmen Teresa Lee example, with Edit Flag"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-mother-prepregnancy-weight-vr"
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#56077-1 "Body weight --pre current pregnancy"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 180 '[lb_av]'
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-prepregnancy-weight-jada-ann-quinn-new.fsh

Instance: observation-mother-prepregnancy-weight-jada-ann-quinn
InstanceOf: ObservationMotherPrepregnancyWeight
Title: "Observation - Mother Prepregnancy Weight - Jada Ann Quinn"
Description: "Observation - Mother Prepregnancy Weight: Jada Ann Quinn example"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#56077-1 "Body weight --pre current pregnancy"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 145 '[lb_av]'

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-prepregnancy-weight-jada-ann-quinn-w-edit.fsh

Instance: observation-mother-prepregnancy-weight-jada-ann-quinn-w-edit
InstanceOf: ObservationMotherPrepregnancyWeight
Title: "Observation - Mother Prepregnancy Weight - Jada Ann Quinn, with Edit Flag"
Description: "Observation - Mother Prepregnancy Weight: Jada Ann Quinn example, with Edit Flag"
Usage: #example
* status = #final
* category[VSCat] = $observation-category#vital-signs "Vital Signs"
* code = $loinc#56077-1 "Body weight --pre current pregnancy"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueQuantity = 145 '[lb_av]'
* valueQuantity.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-received-wic-food-carmen-teresa-lee.fsh

Instance: observation-mother-received-wic-food-carmen-teresa-lee
InstanceOf: ObservationMotherReceivedWICFood
Title: "Observation - Mother Received WIC Food - Carmen Teresa Lee"
Description: "Observation - Mother Received WIC Food: Carmen Teresa Lee example"
Usage: #example
* status = #final
//* code = $loinc#87303-4 "Mother WIC food recipient"
//  * text = "Did mother get WIC food for herself during this pregnancy?"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* focus = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueCodeableConcept = $v2-0136#N "No"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-mother-received-wic-food-jada-ann-quinn.fsh

Instance: observation-mother-received-wic-food-jada-ann-quinn
InstanceOf: ObservationMotherReceivedWICFood
Title: "Observation - Mother Received WIC Food - Jada Ann Quinn"
Description: "Observation - Mother Received WIC Food: Jada Ann Quinn example"
Usage: #example
* status = #final
//* code = $loinc#87303-4 "Mother WIC food recipient"
//  * text = "Did mother get WIC food for herself during this pregnancy?"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn" 
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $v2-0136#Y "Yes"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-nicu-admission-babyg-quinn.fsh

Instance: observation-nicu-admission-babyg-quinn
InstanceOf: ObservationNICUAdmission
Title: "Observation - NICU Admission - BabyG Quinn"
Description: "Observation - NICU Admission: BabyG Quinn example"
Usage: #example
* status = #final
//* code = $loinc#73812-0 "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
//  * text = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
//* valueCodeableConcept = $sct#830077005 "Admission to neonatal intensive care unit (procedure)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-none-abnormal-conditions-babyg-quinn.fsh

Instance: observation-none-abnormal-conditions-babyg-quinn
InstanceOf: ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn
Title: "Observation - None Of Specified Abnormal Conditions of Newborn - BabyG Quinn"
Description: "Observation - None Of Specified Abnormal Conditions of Newborn: BabyG Quinn example"
Usage: #example
* status = #final
//* code = $loinc#73812-0 
//  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* subject = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept
  * text = "None of the specified abnormal conditions of the newborn"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-none-chars-labor-delivery-jada-ann-quinn.fsh

Instance: observation-none-chars-labor-delivery-jada-ann-quinn
InstanceOf: ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery
Title: "Observation - None Of Specified Characteristics of Labor and Delivery - Jada Ann Quinn"
Description: "Observation - None Of Specified Characteristics of Labor and Delivery: Jada Ann Quinn example"
Usage: #example
* status = #final
* code = $loinc#73813-8 "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
  * text = "Characteristics of labor and delivery"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept 
  * text = "None"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-none-congenital-anomolies-babyg-quinn.fsh

Instance: observation-none-congenital-anomolies-babyg-quinn
InstanceOf: ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn
Title: "Observation - None Of Specified Congenital Anomolies of Newborn - BabyG Quinn"
Description: "Observation - None Of Specified Congenital Anomolies of Newborn: BabyG Quinn example"
Usage: #example
* status = #final
* subject = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
// code and value are specified in profile

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-none-maternal-morbidities-jada-ann-quinn.fsh

Instance: observation-none-maternal-morbidities-jada-ann-quinn
InstanceOf: ObservationNoneOfSpecifiedMaternalMorbidities
Title: "Observation - None Of Specified Maternal Morbidities - Jada Ann Quinn"
Description: "Observation - None Of Specified Maternal Morbidities: Jada Ann Quinn example"
Usage: #example
* status = #final
//* code = $loinc#73781-7 "Maternal morbidity [US Standard Certificate of Live Birth]"
//* text = "Maternal morbidity [US Standard Certificate of Live Birth]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept 
  * text = "None of the specified maternal morbidities"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-none-of-the-above-examples-jada-ann-quinn.fsh


Instance: observation-no-infections-present-jada-ann-quinn
InstanceOf: ObservationNoneOfSpecifiedInfectionsPresentDuringPregnancy
Title: "Observation - None Of Specified Infections During Pregnancy - Jada Ann Quinn"
Description: "Observation - None Of Specified Infections During Pregnancy: Jada Ann Quinn example"
Usage: #example
* status = #final
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)


Instance: observation-none-obstetric-procedures-jada-ann-quinn
InstanceOf: ObservationNoneOfSpecifiedObstetricProcedures
Title: "Observation - None Of Specified Obstetric Procedures - Jada Ann Quinn"
Description: "Observation - None Of Specified Obstetric Procedures: Jada Ann Quinn example"
Usage: #example
* status = #final
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)



Instance: observation-unknown-route-method-delivery-jada-ann-quinn
InstanceOf: ObservationUnknownFinalRouteMethodDelivery
Title: "Observation - Unknown Final Route Method of Delivery - Jada Ann Quinn"
Description: "Observation - Unknown Final Route Method of Delivery: Jada Ann Quinn example"
Usage: #example
* status = #final
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-none-specified-risk-factors-jada-ann-quinn-new.fsh

Instance: observation-none-specified-risk-factors-jada-ann-quinn
InstanceOf: ObservationNoneOfSpecifiedPregnancyRiskFactors
Title: "Observation - None of Specified Risk Factors - Jada Ann Quinn"
Description: "Observation - Previous Cesarean: Jada Ann Quinn example"
Usage: #example
* meta
  * versionId = "2"
  * lastUpdated = "2023-06-21T02:01:01.814Z"
* status = #final
* code = $loinc#73775-9 "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
  * text = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#260413007 "None"
  * text = "None of the specified risk factors"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-births-now-dead-carmen-teresa-lee-new.fsh

Instance: observation-number-births-now-dead-carmen-teresa-lee
InstanceOf: ObservationNumberBirthsNowDead
Title: "Observation - Number of Births Now Dead - Carmen Teresa Lee"
Description: "Observation - Number of Births Now Dead: Carmen Teresa Lee example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-births-now-dead-vr"
* status = #final
* code = $loinc#68496-9 "Previous live births now dead #"
  * text = "Previous live births now dead #"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-births-now-dead-jada-ann-quinn-new.fsh

Instance: observation-number-births-now-dead-jada-ann-quinn
InstanceOf: ObservationNumberBirthsNowDead
Title: "Observation - Number Births Now Dead - Jada Ann Quinn"
Description: "Observation - Number Births Now Dead: Jada Ann Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-births-now-dead-vr"
* status = #final
* code = $loinc#68496-9 "Previous live births now dead #"
  * text = "Previous live births now dead #"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-births-now-living-carmen-teresa-lee-new.fsh

Instance: observation-number-births-now-living-carmen-teresa-lee
InstanceOf: ObservationNumberBirthsNowLiving
Title: "Observation - Number of Births Now Living - Carmen Teresa Lee"
Description: "Observation - Number of Births Now Living: Carmen Teresa Lee example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-births-now-living-vr"
* status = #final
* code = $loinc#11638-4 "[#] Births.still living"
  * text = "[#] Births.still living"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-births-now-living-jada-ann-quinn-new.fsh

Instance: observation-number-births-now-living-jada-ann-quinn
InstanceOf: ObservationNumberBirthsNowLiving
Title: "Observation - Number Births Now Living - Jada Ann Quinn"
Description: "Observation - Number Births Now Living: Jada Ann Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-births-now-living-vr"
* status = #final
* code = $loinc#11638-4 "[#] Births.still living"
  * text = "[#] Births.still living"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-deaths-this-delivery-carmen-teresa-lee-new.fsh

Instance: observation-number-deaths-this-delivery-carmen-teresa-lee
InstanceOf: ObservationNumberFetalDeathsThisDelivery
Title: "Observation - Number of Fetal Deaths This Delivery - Carmen Teresa Lee"
Description: "Observation - Number of Fetal Deaths This Delivery: Carmen Teresa Lee example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-fetal-deaths-this-delivery-vr"
* status = #final
* code = $loinc#73772-6 "Number of fetal deaths delivered"
  * text = "Number of fetal deaths delivered"
// VRCL had:
// * subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
// * focus = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* focus = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-live-births-this-delivery-carmen-teresa-lee-new.fsh

Instance: observation-number-live-births-this-delivery-carmen-teresa-lee
InstanceOf: ObservationNumberLiveBirthsThisDelivery
Title: "Observation - Number Live Births This Delivery - Carmen Teresa Lee"
Description: "Observation - Number Live Births This Delivery: Carmen Teresa Lee example"
Usage: #example
* status = #final
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-live-births-this-delivery-jada-ann-quinn-new.fsh

Instance: observation-number-live-births-this-delivery-jada-ann-quinn
InstanceOf: ObservationNumberLiveBirthsThisDelivery
Title: "Observation - Number Live Births This Delivery - Jada Ann Quinn"
Description: "Observation - Number Live Births This Delivery: Jada Ann Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-live-births-this-delivery-vr"
* status = #final
* code = $loinc#73773-4 "Number of infants in this delivery delivered alive"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 2

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-other-pregnancy-outcomes-jada-ann-quinn-new.fsh

Instance: observation-number-other-pregnancy-outcomes-jada-ann-quinn
InstanceOf: ObservationNumberOtherPregnancyOutcomes
Title: "Observation - Number Other Pregnancy Outcomes - Jada Ann Quinn"
Description: "Observation - Number Other Pregnancy Outcomes: Jada Ann Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-other-pregnancy-outcomes-vr"
* status = #final
* code = $loinc#69043-8 "Other pregnancy outcomes #"
  * text = "Other pregnancy outcomes #"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-prenatal-visits-jada-ann-quinn-new.fsh

Instance: observation-number-prenatal-visits-jada-ann-quinn
InstanceOf: ObservationNumberPrenatalVisits
Title: "Observation - Number Prenatal Visits - Jada Ann Quinn"
Description: "Observation - Number Prenatal Visits: Jada Ann Quinn example"
Usage: #example
// * meta
  //TODO this will have to change
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-prenatal-visits-vr"
* status = #final
* code = $loinc#68493-6 "Prenatal visits for this pregnancy #"
  * text = "Prenatal visits for this pregnancy #"
// VRCL had:
// * subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
// * focus = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)" 
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)" 
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 8

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-prenatal-visits-jada-ann-quinn-w-edit.fsh

Instance: observation-number-prenatal-visits-jada-ann-quinn-w-edit
InstanceOf: ObservationNumberPrenatalVisits
Title: "Observation - Number Prenatal Visits - Jada Ann Quinn, with Edit Flag"
Description: "Observation - Number Prenatal Visits: Jada Ann Quinn example, with Edit Flag"
Usage: #example
// * meta
  //TODO this will have to change
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-prenatal-visits-vr"
* status = #final
* code = $loinc#68493-6 "Prenatal visits for this pregnancy #"
  * text = "Prenatal visits for this pregnancy #"
// VRCL had:
// * subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
// * focus = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)" 
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)" 
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 8
* valueInteger.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-previous-cesareans-carmen-teresa-lee-new.fsh

Instance: observation-number-previous-cesareans-carmen-teresa-lee
InstanceOf: ObservationNumberPreviousCesareans
Title: "Observations - Number Previous Cesareans - Carmen Teresa Lee"
Description: "Observations - Number Previous Cesareans: Carmen Teresa Lee example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-previous-cesareans-vr"
* status = #final
* code = $loinc#68497-7 "Previous cesarean deliveries #"
  * text = "Previous cesarean deliveries #"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-previous-cesareans-carmen-teresa-lee-w-edit.fsh

Instance: observation-number-previous-cesareans-carmen-teresa-lee-w-edit
InstanceOf: ObservationNumberPreviousCesareans
Title: "Observations - Number Previous Cesareans - Carmen Teresa Lee, with Edit Flag"
Description: "Observations - Number Previous Cesareans: Carmen Teresa Lee example, with Edit Flag"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-previous-cesareans-vr"
* status = #final
* code = $loinc#68497-7 "Previous cesarean deliveries #"
  * text = "Previous cesarean deliveries #"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 1
* valueInteger.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-previous-cesareans-jada-ann-quinn-new.fsh

Instance: observation-number-previous-cesareans-jada-ann-quinn
InstanceOf: ObservationNumberPreviousCesareans
Title: "Observation - Number Previous Cesareans - Jada Ann Quinn"
Description: "Observation - Number Previous Cesareans: Jada Ann Quinn example"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-previous-cesareans-vr"
* status = #final
* code = $loinc#68497-7 "Previous cesarean deliveries #"
  * text = "Previous cesarean deliveries #"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 1

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-number-previous-cesareans-jada-ann-quinn-w-edit.fsh

Instance: observation-number-previous-cesareans-jada-ann-quinn-w-edit
InstanceOf: ObservationNumberPreviousCesareans
Title: "Observation - Number Previous Cesareans - Jada Ann Quinn, with Edit Flag"
Description: "Observation - Number Previous Cesareans: Jada Ann Quinn example, with Edit Flag"
Usage: #example
// * meta
  //* profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-number-previous-cesareans-vr"
* status = #final
* code = $loinc#68497-7 "Previous cesarean deliveries #"
  * text = "Previous cesarean deliveries #"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueInteger = 1
* valueInteger.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-carmen-teresa-lee-new.fsh

Instance: observation-parent-education-level-carmen-teresa-lee
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - Carmen Teresa Lee"
Description: "Observation - Parent Education Level: Carmen Teresa Lee example"
Usage: #example
* status = #final
* code = $loinc#57712-2 "Highest level of education Mother"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* focus = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueCodeableConcept = $HL7_EducationLevelCS#SEC "Some secondary or high school education"
  * text = "9th through 12th grade; no diploma"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-carmen-teresa-lee-w-edit.fsh

Instance: observation-parent-education-level-carmen-teresa-lee-w-edit
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - Carmen Teresa Lee, with Edit Flag"
Description: "Observation - Parent Education Level: Carmen Teresa Lee example, with Edit Flag"
Usage: #example
* status = #final
* code = $loinc#57712-2 "Highest level of education Mother"
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* focus = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueCodeableConcept = $HL7_EducationLevelCS#SEC "Some secondary or high school education"
  * text = "9th through 12th grade; no diploma"
* valueCodeableConcept.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-jada-ann-quinn-new.fsh

Instance: observation-parent-education-level-jada-ann-quinn
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - Jada Ann Quinn"
Description: "Observation - Parent Education Level: Jada Ann Quinn example"
Usage: #example
* status = #final
* code = $loinc#57712-2 "Highest level of education Mother"
* subject = Reference(patient-child-babyg-quinn)
* focus = Reference(patient-mother-jada-ann-quinn)
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueCodeableConcept = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
  * text = "Doctoral or post graduate education"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-jada-ann-quinn-w-edit.fsh

Instance: observation-parent-education-level-jada-ann-quinn-w-edit
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - Jada Ann Quinn, with Edit Flag"
Description: "Observation - Parent Education Level: Jada Ann Quinn example, with Edit Flag"
Usage: #example
* status = #final
* code = $loinc#57712-2 "Highest level of education Mother"
* subject = Reference(patient-child-babyg-quinn)
* focus = Reference(patient-mother-jada-ann-quinn)
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueCodeableConcept = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
  * text = "Doctoral or post graduate education"
* valueCodeableConcept.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-james-quinn-new.fsh

Instance: observation-parent-education-level-james-quinn
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - James Quinn"
Description: "Observation - Parent Education Level: James Quinn example"
Usage: #example
* status = #final
* code = $loinc#87300-0 "Highest level of education Father"
* subject = Reference(patient-child-babyg-quinn)
* focus = Reference(relatedperson-father-natural-james-brandon-quinn)
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueCodeableConcept = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
  * text = "Doctoral or post graduate education"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-james-quinn-w-edit.fsh

Instance: observation-parent-education-level-james-quinn-w-edit
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - James Quinn, with Edit Flag"
Description: "Observation - Parent Education Level: James Quinn example, with Edit Flag"
Usage: #example
* status = #final
* code = $loinc#87300-0 "Highest level of education Father"
* subject = Reference(patient-child-babyg-quinn)
* focus = Reference(relatedperson-father-natural-james-brandon-quinn-w-edit)
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueCodeableConcept = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
  * text = "Doctoral or post graduate education"
* valueCodeableConcept.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-tom-yan-lee-new.fsh

Instance: observation-parent-education-level-tom-yan-lee
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - Tom Yan Lee"
Description: "Observation - Parent Education Level: Tom Yan Lee example"
Usage: #example
* status = #final
* code = $loinc#87300-0 "Highest level of education Father"
* subject = Reference(patient-decedent-fetus-not-named)
* focus = Reference(relatedperson-father-natural-tom-yan-lee)
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
  * text = "Doctoral or post graduate education"
// * valueCodeableConcept = urn:oid:2.16.840.1.114222.4.5.274#PHC1455 "Doctorate Degree or Professional Degree"
//   * text = "Doctorate Degree or Professional Degree"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-parent-education-level-tom-yan-lee-w-edit.fsh

Instance: observation-parent-education-level-tom-yan-lee-w-edit
InstanceOf: ObservationEducationLevelVitalRecords
Title: "Observation - Parent Education Level - Tom Yan Lee, with Edit Flag"
Description: "Observation - Parent Education Level: Tom Yan Lee example, with Edit Flag"
Usage: #example
* status = #final
* code = $loinc#87300-0 "Highest level of education Father"
* subject = Reference(patient-decedent-fetus-not-named)
* focus = Reference(relatedperson-father-natural-tom-yan-lee)
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
  * text = "Doctoral or post graduate education"
* valueCodeableConcept.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-paternity-acknowledgement-signed-james-quinn-w-edit.fsh

Instance: observation-paternity-acknowledgement-signed-james-quinn-w-edit
InstanceOf: ObservationPaternityAcknowledgementSigned
Title: "Observation - Paternity Acknowledgement Signed - James Quinn with edit reference"
Description: "Observation - Paternity Acknowledgement Signed: James Quinn example"
Usage: #example
* status = #final
//* code = $loinc#87302-6 "Paternity acknowledgment form signed Father"
//  * text = "Paternity acknowledgment form signed Father"
* subject = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* focus  = Reference(relatedperson-father-natural-james-brandon-quinn-w-edit) "RelatedPerson - Father (James Brandon Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueCodeableConcept = $v2-0136#Y "Yes"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-paternity-acknowledgement-signed-james-quinn.fsh

Instance: observation-paternity-acknowledgement-signed-james-quinn
InstanceOf: ObservationPaternityAcknowledgementSigned
Title: "Observation - Paternity Acknowledgement Signed - James Quinn"
Description: "Observation - Paternity Acknowledgement Signed: James Quinn example"
Usage: #example
* status = #final
//* code = $loinc#87302-6 "Paternity acknowledgment form signed Father"
//  * text = "Paternity acknowledgment form signed Father"
* subject = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* focus  = Reference(relatedperson-father-natural-james-brandon-quinn) "RelatedPerson - Father (James Brandon Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueCodeableConcept = $v2-0136#Y "Yes"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-planned-to-deliver-at-home-babyg-quinn.fsh

Instance: observation-planned-to-deliver-at-home-babyg-quinn
InstanceOf: ObservationPlannedToDeliverAtHome
Title: "Observation - Planned to Deliver at Home - Baby G Quinn"
Description: "Observation - Planned to Deliver at Home: Baby G Quinn example"
Usage: #example
* status = #final
//* code = $loinc#73765-0 "Mother Planned to deliver at home [US Standard Certificate of Live Birth]"
//  * text = "Planned to deliver at home?"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* issued = "2019-02-11T20:02:00-07:00"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-jada-ann-quinn)
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-planned-to-deliver-at-home-not-named.fsh

Instance: observation-planned-to-deliver-at-home-not-named
InstanceOf: ObservationPlannedToDeliverAtHome
Title: "Observation - Planned to Delivery at Home - Fetus Not Named"
Description: "Observation - Planned to Delivery at Home: Fetus Not Named example"
Usage: #example
* status = #final
//* code = $loinc#73765-0 "Mother Planned to deliver at home [US Standard Certificate of Live Birth]"
//  * text = "Planned to deliver at home?" 
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)" 
* focus = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(patient-mother-carmen-teresa-lee)
* valueBoolean = false

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-present-job-carmen-teresa-lee.fsh

Instance: observation-present-job-carmen-teresa-lee
InstanceOf: ObservationPresentJob
Title: "Observation - Mother Present Job - Carmen Teresa Lee"
Description: "Observation - Mother Present Job: Carmen Teresa Lee example"
Usage: #example
* status = #final
* extension[roleMotherOrFather].valueCodeableConcept = $v3-RoleCode#MTH "mother"
* subject = Reference(patient-decedent-fetus-not-named)
* focus = Reference(relatedperson-mother-carmen-teresa-lee)
* valueCodeableConcept.text = "Secretary"
* component[odh-PastOrPresentIndustry].valueCodeableConcept.text = "State Agency"
* effectivePeriod.start = "2019-01-09"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-present-job-jada-ann-quinn-coded.fsh

Instance: observation-present-job-jada-ann-quinn-coded
InstanceOf: ObservationPresentJob
Title: "Observation - Mother Present Job - Jada Ann Quinn - coded"
Description: "Observation - Mother Present Job: Jada Ann Quinn example"
Usage: #example
* status = #final
* extension[roleMotherOrFather].valueCodeableConcept = $v3-RoleCode#MTH "mother"
* subject.display = "Patient - Child (Baby G Quinn)" // subject = Reference(patient-child-babyg-quinn)
* focus.display = "Jada Ann Quinn - Mother"
* valueCodeableConcept.text = "Carpenter"
* valueCodeableConcept = urn:oid:2.16.840.1.114222.4.11.8068#47-2031
* component[odh-PastOrPresentIndustry]
  * valueCodeableConcept.text = "Construction"
  * valueCodeableConcept = urn:oid:2.16.840.1.114222.4.11.8067#23
* effectivePeriod.start = "2019-01-09"



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-present-job-jada-ann-quinn.fsh

Instance: observation-present-job-jada-ann-quinn
InstanceOf: ObservationPresentJob
Title: "Observation - Mother Present Job - Jada Ann Quinn"
Description: "Observation - Mother Present Job: Jada Ann Quinn example"
Usage: #example
* status = #final
* extension[roleMotherOrFather].valueCodeableConcept = $v3-RoleCode#MTH "mother"
* subject = Reference(patient-child-babyg-quinn)
* focus.display = "Jada Ann Quinn - Mother"
* valueCodeableConcept.text = "Carpenter"
* component[odh-PastOrPresentIndustry].valueCodeableConcept.text = "Construction"
* effectivePeriod.start = "2019-01-09"



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-present-job-james-brandon-quinn-coded.fsh

Instance: observation-present-job-james-brandon-quinn-coded
InstanceOf: ObservationPresentJob
Title: "Observation - Father Present Job - James Brandon Quinn - coded"
Description: "Observation - Father Present Job: James Brandon Quinn example"
Usage: #example
* status = #final
* extension[roleMotherOrFather].valueCodeableConcept = $v3-RoleCode#FTH "father"
* subject.display = "Patient - Child (Baby G Quinn)" // subject = Reference(patient-child-babyg-quinn)
* focus.display = "James Brandon Quinn - Father"

* effectivePeriod.start = "2019-01-09"
* valueCodeableConcept.text = "Lawyer"
* valueCodeableConcept = urn:oid:2.16.840.1.114222.4.11.8068#23-1011
* component[odh-PastOrPresentIndustry]
  * valueCodeableConcept.text = "Legal Services"
  * valueCodeableConcept = urn:oid:2.16.840.1.114222.4.11.8067#5411

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-present-job-james-brandon-quinn.fsh

Instance: observation-present-job-james-brandon-quinn
InstanceOf: ObservationPresentJob
Title: "Observation - Father Present Job - James Brandon Quinn"
Description: "Observation - Father Present Job: James Brandon Quinn example"
Usage: #example
* status = #final
* extension[roleMotherOrFather].valueCodeableConcept = $v3-RoleCode#FTH "father"
* subject = Reference(patient-child-babyg-quinn)
* focus.display = "James Brandon Quinn - Father"
* valueCodeableConcept.text = "Lawyer"
* component[odh-PastOrPresentIndustry].valueCodeableConcept.text = "Legal Services"
* effectivePeriod.start = "2019-01-09"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-present-job-tom-yan-lee.fsh

Instance: observation-present-job-tom-yan-lee
InstanceOf: ObservationPresentJob
Title: "Observation - Father Present Job - Tom Yan Lee"
Description: "Observation - Father Present Job: Tom Yan Lee example"
Usage: #example
* status = #final
* extension[roleMotherOrFather].valueCodeableConcept = $v3-RoleCode#FTH "father"
* subject = Reference(patient-decedent-fetus-not-named)
* focus = Reference(relatedperson-father-natural-tom-yan-lee)
* valueCodeableConcept.text = "Teaching Assistant"
* component[odh-PastOrPresentIndustry].valueCodeableConcept.text = "Elementary and Secondary Schools"
* effectivePeriod.start = "2019-01-09"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-previous-cesarean-jada-ann-quinn-new.fsh

Instance: observation-previous-cesarean-jada-ann-quinn
InstanceOf: ObservationPreviousCesarean
Title: "Observation - Previous Cesarean - Jada Ann Quinn"
Description: "Observation - Previous Cesarean: Jada Ann Quinn example"
Usage: #example
* meta
  * versionId = "1"
  * lastUpdated = "2023-06-21T01:56:46.788Z"
* status = #final
* code = $loinc#73775-9 "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
  * text = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#200144004 "Deliveries by cesarean (finding)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-previous-preterm-births-jada-ann-quinn-new.fsh

Instance: observation-previous-preterm-births-jada-ann-quinn
InstanceOf: ObservationPreviousPretermBirth
Title: "Observation - Previous Preterm Births - Jada Ann Quinn"
Description: "Observation - Previous Preterm Births: Jada Ann Quinn example"
Usage: #example
* status = #final
* code = $loinc#73775-9 "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
  * text = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer = Reference(practitioner-vital-records-janet-seito)
* valueCodeableConcept = $sct#161765003 "History of premature delivery"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-ssn-requested-for-child-babyg-quinn.fsh

Instance: observation-ssn-requested-for-child-babyg-quinn
InstanceOf: ObservationSSNRequestedForChild
Title: "Observation - SSN Requested for Child - BabyG Quinn"
Description: "Observation - SSN Requested for Child: BabyG Quinn example"
Usage: #example
* status = #final
//* code = $loinc#87295-2 "Social Security Number was requested"
//  * text = "Social security number requested for child"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* focus = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* effectiveDateTime = "2019-12-02"
* performer.reference = "Patient/patient-mother-jada-ann-quinn"
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/observation-steroids-fetal-lung-maturation-jada-ann-quinn.fsh

Instance: observation-steroids-fetal-lung-maturation-jada-ann-quinn
InstanceOf: ObservationSteroidsFetalLungMaturation
Title: "Observation - Administration of Steroids for Fetal Lung Maturation - Jada Ann Quinn"
Description: "Observation - Administration of Steroids for Fetal Lung Maturation: Jada Ann Quinn example"
Usage: #example
* status = #final
//* code = $loinc#73813-8 "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
//  * text = "Characteristics of labor and delivery"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* focus = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* effectiveDateTime = "2019-12-02"
* performer.reference = "Practitioner/practitioner-vital-records-janet-seito"
* valueCodeableConcept = $sct#434611000124106 "Maternal antenatal administration of corticosteroids for fetal lung maturation (situation)"
  * text = "None"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/organization-jurisdictional-vital-records-office.fsh

Instance: organization-jurisdictional-vital-records-office
InstanceOf: Organization
Title: "US Core Organization - Jurisdictional Vital Records Office"
Description: "US Core Organization: Jurisdictional Vital Records Office example"
Usage: #example
* active = true
* name = "Jurisdictional Vital Records Office"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/organization-nchs.fsh

Instance: organization-nchs
InstanceOf: Organization
Title: "US Core Organization - National Center for Health Statistics [NCHS]"
Description: "US Core Organization: National Center for Health Statistics [NCHS] example"
Usage: #example
* active = true
* name = "National Center for Health Statistics (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/organization-south-hospital.fsh

Instance: organization-south-hospital
InstanceOf: Organization
Title: "US Core Organization - South Hospital"
Description: "US Core Organization: South Hospital example"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "5555512"
* active = true
* type = $v3-RoleCode#HOSP "Hospital"
* name = "South Hospital"
* telecom[0]
  * system = #phone
  * value = "+1-555-555-1111"
* telecom[+]
  * system = #email
  * value = "mail@southhospital.com"
* address
  * line = "2100 North Ave"
  * city = "Salt Lake City"
  * state = "UT"
  * postalCode = "84116"
  * country = "US"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-child-babyg-quinn-w-edit.fsh

Instance: patient-child-babyg-quinn-w-edit
InstanceOf: PatientChildVitalRecords
Title: "Patient - Child example [Baby G Quinn], with Edit Flag"
Description: "Example of Patient-child-vr profile (Baby G Quinn), with Edit Flag"
Usage: #example
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
  * extension[text]
    * valueString = "White"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[text]
    * valueString = "Not Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress
    * city = "Salt Lake City"
    * district = "Salt Lake"
    * state = "UT"
* deceasedBoolean = false 
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9932702"
// NOTE TODO: this was marked usual, but could be marked official?
* name[currentLegalName]
  * family = "Quinn"
  * given[0] = "Baby"
  * given[+] = "G"
* gender = #female
* birthDate = "2019-02-12"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
    * valueDateTime = "2019-02-12T13:00:00-07:00"
* multipleBirthInteger = 1
* multipleBirthInteger.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#1queriedCorrect "Queried, and Correct"
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 34 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#MTH "mother"
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 35 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#FTH "father"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-child-babyg-quinn.fsh

Instance: patient-child-babyg-quinn
InstanceOf: PatientChildVitalRecords
Title: "Patient - Child example [Baby G Quinn]"
Description: "Example of Patient-child-vr profile (Baby G Quinn)"
Usage: #example
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
  * extension[text]
    * valueString = "White"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[text]
    * valueString = "Not Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress
    * city = "Salt Lake City"
    * district = "Salt Lake"
    * state = "UT"
* deceasedBoolean = false 
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9932702"
// NOTE TODO: this was marked usual, but could be marked official?
* name[currentLegalName]
  * family = "Quinn"
  * given[0] = "Baby"
  * given[+] = "G"
* gender = #female
* birthDate = "2019-02-12"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
    * valueDateTime = "2019-02-12T13:00:00-07:00"
* multipleBirthInteger = 1
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 34 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#MTH "mother"
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 35 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#FTH "father"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-decedent-fetus-not-named-w-edit.fsh

Instance: patient-decedent-fetus-not-named-w-edit
InstanceOf: PatientDecedentFetus
Title: "Patient - Decedent Fetus example [Fetus Not Named], with Edit Flag"
Description: "Example of Patient-decedent-fetus-vr profile (Fetus Not Named) with Edit Flag"
Usage: #example
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress
    * city = "Ann Arbor"
    * state = "MI"
    * postalCode = "48103"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9932702"
// NOTE TODO: name.use is a required element and the child is unnamed
// want to confirm this is the appropriate code
* name[currentLegalName]
  * family
    * extension[dataAbsentReason].valueCode = #not-applicable
* gender = #female
* birthDate = "2019-01-09"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
    * valueDateTime = "2019-01-09T18:23:00-07:00"
* multipleBirthInteger = 3
* multipleBirthInteger.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#1queriedCorrect "Queried, and Correct"
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 34 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#MTH "mother"
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 35 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#FTH "father"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-decedent-fetus-not-named.fsh

Instance: patient-decedent-fetus-not-named
InstanceOf: PatientDecedentFetus
Title: "Patient - Decedent Fetus example [Fetus Not Named]"
Description: "Example of Patient-decedent-fetus profile (Fetus Not Named)"
Usage: #example

* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress
    * city = "Ann Arbor"
    * state = "MI"
    * postalCode = "48103"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9932702"
// NOTE TODO: name.use is a required element and the child is unnamed
// want to confirm this is the appropriate code
* name[currentLegalName]
  * family
    * extension[dataAbsentReason].valueCode = #not-applicable
    // * url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
    // * valueCode = #not-applicable
* gender = #female
* birthDate = "2019-01-09"
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/patient-birthTime"
    * valueDateTime = "2019-01-09T18:23:00-07:00"
* multipleBirthInteger = 3
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 34 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#MTH "mother"
* extension[parentReportedAgeAtDelivery][+]
  * extension[reportedAge]
    * valueQuantity = 35 'a'
  * extension[motherOrFather]
    * valueCodeableConcept = $v3-RoleCode#FTH "father"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-mother-birth-date-part-absent-new.fsh

Instance: patient-mother-birth-date-part-absent
InstanceOf: PatientMotherVitalRecords
Title: "Patient - Mother Date Part Absent"
Description: "Example of Patient-mother-vr profile (Date Part Absent)"
Usage: #example
//* extension[USCoreRaceExtension]
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2054-5 "Black or African American"
  * extension[text]
    * valueString = "Black or African America"
//* extension[USCoreEthnicityExtension]
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
  * extension[text]
    * valueString = "Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress.state = "PR"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9992702"
* name[0]
  * use = #official
  * family = "Lee"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* name[+]
  * use = #maiden
  * family = "Santos"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* gender = #female
* birthDate = "1986"
* address
  //* extension[withinCityLimitsIndicator].valueCoding = $v2-0532#N "No"
  * extension[withinCityLimitsIndicator].valueCoding = $v2-0136#N "No"
  * use = #home
  * line = "3670 Miller Road"
  * city = "Ann Arbor"
  * state = "MI"
  * postalCode = "48103"
  * country = "US"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-mother-carmen-teresa-lee-new.fsh

Instance: patient-mother-carmen-teresa-lee
InstanceOf: PatientMotherVitalRecords
Title: "Patient - Mother example [Carmen Teresa Lee]"
Description: "Example of Patient-mother-vr profile (Carmen Teresa Lee)"
Usage: #example
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2054-5 "Black or African American"
  * extension[text]
    * valueString = "Black or African America"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
  * extension[text]
    * valueString = "Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress.state = "PR"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9992702"
* name[0]
  * use = #official
  * family = "Lee"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* name[+]
  * use = #maiden
  * family = "Santos"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* gender = #female
* birthDate = "1986-02-15"
* address
  //* extension[withinCityLimitsIndicator].valueCoding = $v2-0532#N "No" 
  * extension[withinCityLimitsIndicator].valueCoding = $v2-0136#N "No"
  * use = #home
  * line = "3670 Miller Road"
  * city = "Ann Arbor"
  * state = "MI"
  * postalCode = "48103"
  * country = "US"
* link[mother]
  * other = Reference(relatedperson-mother-carmen-teresa-lee)
  // * type = #seealso

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-mother-carmen-teresa-lee-w-edit.fsh

Instance: patient-mother-carmen-teresa-lee-w-edit
InstanceOf: PatientMotherVitalRecords
Title: "Patient - Mother example [Carmen Teresa Lee], with Edit Flag"
Description: "Example of Patient-mother-vr profile (Carmen Teresa Lee), with Edit Flag"
Usage: #example
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2054-5 "Black or African American"
  * extension[text]
    * valueString = "Black or African America"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
  * extension[text]
    * valueString = "Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress.state = "PR"
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "9992702"
* name[0]
  * use = #official
  * family = "Lee"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* name[+]
  * use = #maiden
  * family = "Santos"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* gender = #female
* birthDate = "1986-02-15"
* birthDate.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* address
  //* extension[withinCityLimitsIndicator].valueCoding = $v2-0532#N "No" 
  * extension[withinCityLimitsIndicator].valueCoding = $v2-0136#N "No"
  * use = #home
  * line = "3670 Miller Road"
  * city = "Ann Arbor"
  * state = "MI"
  * postalCode = "48103"
  * country = "US"
* link[mother]
  * other = Reference(relatedperson-mother-carmen-teresa-lee)
  // * type = #seealso

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-mother-jada-ann-quinn-new.fsh

Instance: patient-mother-jada-ann-quinn
InstanceOf: PatientMotherVitalRecords
Title: "Patient - Mother Jada Ann Quinn"
Description: "Example of Patient-mother-vr profile (Jada Ann Quinn)"
Usage: #example
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
  * extension[text]
    * valueString = "White, American Indian or Alaska Native"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[text]
    * valueString = "Not Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress.state = "UT"
* identifier[0]
  * use = #usual
  * type = $v2-0203#SS "Social Security number"
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "132225986"
* identifier[+]
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "1032702"
* name[0]
  * use = #official
  * family = "Quinn"
  * given[0] = "Jada"
  * given[+] = "Ann"
* name[+]
  * use = #maiden
  * family = "King"
  * given[0] = "Jada"
  * given[+] = "Ann"
* telecom[0]
  * system = #phone
  * value = "1-(404)555-1212"
  * use = #home
* telecom[+]
  * system = #email
  * value = "jadaann.quinn@example.com"
* gender = #female
* birthDate = "1985-01-15"
* address[0]
  * extension[withinCityLimitsIndicator].valueCoding = $v2-0136#Y "Yes"
  // * extension[withinCityLimitsIndicator].valueCoding = $v2-0532#Y "Yes"
  * use = #home
  * line = "1875 West Morton Avenue"
  * city = "Salt Lake City"
  * district = "Salt Lake"
  * state = "UT"
  * postalCode = "84116"
  * country = "US"
* address[+]
  * use = #billing
  * line = "1848 South 1300 East"
  * city = "Salt Lake City"
  * state = "UT"
  * postalCode = "84401"
  * country = "US"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/patient-mother-jada-ann-quinn-w-edit.fsh

Instance: patient-mother-jada-ann-quinn-w-edit
InstanceOf: PatientMotherVitalRecords
Title: "Patient - Mother Jada Ann Quinn, with Edit Flag"
Description: "Example of Patient-mother-vr profile (Jada Ann Quinn), with Edit Flag"
Usage: #example
* extension[race]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
  * extension[text]
    * valueString = "White, American Indian or Alaska Native"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[text]
    * valueString = "Not Hispanic or Latino"
* extension[birthsex]
  * valueCode = #F
* extension[birthPlace]
  * valueAddress.state = "UT"
* identifier[0]
  * use = #usual
  * type = $v2-0203#SS "Social Security number"
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "132225986"
* identifier[+]
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "1032702"
* name[0]
  * use = #official
  * family = "Quinn"
  * given[0] = "Jada"
  * given[+] = "Ann"
* name[+]
  * use = #maiden
  * family = "King"
  * given[0] = "Jada"
  * given[+] = "Ann"
* telecom[0]
  * system = #phone
  * value = "1-(404)555-1212"
  * use = #home
* telecom[+]
  * system = #email
  * value = "jadaann.quinn@example.com"
* gender = #female
* birthDate = "1985-01-15"
* birthDate.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#0 "Edit Passed"
* address[0]
  * extension[withinCityLimitsIndicator].valueCoding = $v2-0136#Y "Yes"
  // * extension[withinCityLimitsIndicator].valueCoding = $v2-0532#Y "Yes"
  * use = #home
  * line = "1875 West Morton Avenue"
  * city = "Salt Lake City"
  * district = "Salt Lake"
  * state = "UT"
  * postalCode = "84116"
  * country = "US"
* address[+]
  * use = #billing
  * line = "1848 South 1300 East"
  * city = "Salt Lake City"
  * state = "UT"
  * postalCode = "84401"
  * country = "US"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/practitioner-vital-records-avery-jones.fsh

Instance: practitioner-vital-records-avery-jones
InstanceOf: PractitionerVitalRecords
Title: "Practitioner - Vital Records - Avery Jones, MD"
Description: "Practitioner - Vital Records: Avery Jones, MD example.   This instance satisfies both the Birth Attendant and BirthCertifier profiles."
Usage: #example
* insert AddMetaProfile(PractitionerBirthCertifier)
* insert AddMetaProfile(PractitionerBirthAttendant)
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "76231001"
* name
  * family = "Jones"
  * given = "Avery"
  * suffix = "D.O."
  * text = "Avery Jones"
* qualification.code = $sct#76231001 "Osteopath (occupation)"
* extension[0]
  * url = "http://hl7.org/fhir/us/bfdr/StructureDefinition/practitioner-role-birth-attendant" 
  * valueCode = #attendant
* extension[+]
  * url = "http://hl7.org/fhir/us/bfdr/StructureDefinition/practitioner-role-birth-certifier" 
  * valueCode = #certifier

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/practitioner-vital-records-janet-seito.fsh

Instance: practitioner-vital-records-janet-seito
InstanceOf: PractitionerVitalRecords
Title: "Practitioner - Vital Records - Janet Seito"
Description: "Practitioner - Vital Records: Janet Seito example"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "223347044"
* name
  * family = "Janet"
  * given = "Seito"
  * suffix = "D.O."
  * text = "Janet Seito"
// This seems like a mistake (not by us)
// * name
//   * family = "Jones"
//   * given = "Avery"
//   * suffix = "M.D."
* qualification.code = $sct#76231001 "Osteopath (occupation)"
* extension[0]
  * url = "http://hl7.org/fhir/us/bfdr/StructureDefinition/practitioner-role-birth-attendant" 
  * valueCode = #attendant
* extension[+]
  * url = "http://hl7.org/fhir/us/bfdr/StructureDefinition/practitioner-role-birth-certifier" 
  * valueCode = #certifier



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/practitioner-vital-records-jessica-leung.fsh

Instance: practitioner-vital-records-jessica-leung
InstanceOf: PractitionerVitalRecords
Title: "Practitioner - Vital Records - Jessica Leung"
Description: "Practitioner - Vital Records: Jessica Leung example"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "223347055"
* name
  * family = "Jessica"
  * given = "Leung"
* qualification.code = $v3-NullFlavor#OTH "other"
  * text = "Birth Clerk"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-antibiotic-sepsis-babyg-quinn.fsh

Instance: procedure-antibiotic-sepsis-babyg-quinn
InstanceOf: ProcedureAntibioticSuspectedNeonatalSepsis
Title: "Procedure - Antibiotic for Suspected Neonatal Sepsis - BabyG Quinn"
Description: "Procedure - Antibiotic for Suspected Neonatal Sepsis: BabyG Quinn example"
Usage: #example
* status = #completed
* code = $sct#434621000124103 "Antibiotic given for suspected neonatal sepsis (situation)"
* subject
  * reference = "Patient/patient-child-babyg-quinn"
  * display = "BabyG Quinn"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-artificial-insemination-jada-ann-quinn-new.fsh

Instance: procedure-artificial-insemination-jada-ann-quinn
InstanceOf: ProcedureFertilityEnhancingDrugTherapyArtificialInsemination
Title: "Procedure - Artificial Insemniation - Jada Ann Quinn"
Description: "Procedure - Artificial Insemniation: Jada Ann Quinn example"
Usage: #example
* meta
  * versionId = "1"
  * lastUpdated = "2023-06-21T01:45:22.509Z"
* status = #completed
* code = $sct#58533008 "Artificial insemination (procedure)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-assisted-reproductive-technology-jada-ann-quinn-new.fsh

Instance: procedure-assisted-reproductive-technology-jada-ann-quinn
InstanceOf: ProcedureAssistedReproductiveTechnology
Title: "Procedure - Assisted Reproductive Technology - Jada Ann Quinn"
Description: "Procedure - Assisted Reproductive Technology: Jada Ann Quinn example"
Usage: #example
* status = #completed
* code = $sct#63487001 "Assisted fertilization (procedure)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-augmentation-of-labor-quinn.fsh

Instance: procedure-augmentation-of-labor-quinn
InstanceOf: ProcedureAugmentationOfLabor
Title: "Procedure - Augmentation of Labor - Jada Ann Quinn"
Description: "Procedure - Augmentation of Labor: Jada Ann Quinn example"
Usage: #example
* status = #completed
* code = $sct#237001001 "Augmentation of labor (procedure)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-blood-transfusion-jada-ann-quinn.fsh

Instance: procedure-blood-transfusion-jada-ann-quinn
InstanceOf: ProcedureBloodTransfusion
Title: "Procedure - Blood Transfusion - Jada Ann Quinn"
Description: "Procedure - Blood Transfusion: Jada Ann Quinn example"
Usage: #example
* status = #completed
* code = $sct#116859006 "Transfusion of blood product (procedure)"
  * text = "Transfusion of blood product (procedure)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-epidural-or-spinal-anesthesia-jada-ann-quinn.fsh

Instance: procedure-epidural-or-spinal-anesthesia-jada-ann-quinn
InstanceOf: ProcedureEpiduralOrSpinalAnesthesia
Title: "Procedure - Epidural or Spinal Anesthesia - Jada Ann Quinn"
Description: "Procedure - Epidural or Spinal Anesthesia: Jada Ann Quinn example"
Usage: #example
* status = #completed
* code = $sct#18946005 "Epidural anesthesia (procedure)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-final-route-method-delivery-babyg-quinn.fsh

Instance: procedure-final-route-method-delivery-babyg-quinn
InstanceOf: ProcedureFinalRouteMethodDelivery
Title: "Procedure - Final Route and Method of Delivery - Baby G Quinn"
Description: "Procedure - Final Route and Method of Delivery: Baby G Quinn example"
Usage: #example
* status = #completed
* code = $sct#11466000 "Cesarean section"
  * text = "Cesarean section"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod 
  * start = "2019-02-12T12:45:00-07:00"
  * end = "2019-02-12T13:15:00-07:00"
* reasonReference = Reference(observation-labor-trial-attempted-babyg-quinn) "Labor trial attempted - true"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-final-route-method-delivery-not-named.fsh

Instance: procedure-final-route-method-delivery-not-named
InstanceOf: ProcedureFinalRouteMethodDelivery
Title: "Procedure - Final Route / Method of Delivery - Fetus Not Named"
Description: "Procedure - Final Route / Method of Delivery: Fetus Not Named example"
Usage: #example
* status = #completed
* code = $sct#700000006 "Vaginal delivery of fetus (procedure)" // 48782003 "Delivery normal (finding)"
  * text = "Spontaneous vaginal delivery"
* subject = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* performedPeriod
  * start = "2019-01-19T18:00:00-07:00"
  * end = "2019-01-19T18:23:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-induction-of-labor-jada-ann-quinn.fsh

Instance: procedure-induction-of-labor-jada-ann-quinn
InstanceOf: ProcedureInductionOfLabor
Title: "Procedure - Induction of Labor - Jada Ann Quinn"
Description: "Procedure - Induction of Labor: Jada Ann Quinn example"
Usage: #example
* status = #completed
* code = $sct#236958009 "Induction of labor (procedure)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-infertility-treatment-jada-ann-quinn-new.fsh

Instance: procedure-infertility-treatment-jada-ann-quinn
InstanceOf: ProcedureInfertilityTreatment
Title: "Procedure - Infertility Treatment - Jada Ann Quinn"
Description: "Procedure - Infertility Treatment: Jada Ann Quinn example"
Usage: #example
* status = #completed
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-obstetric-procedure-jada-ann-quinn.fsh

Instance: procedure-obstetric-procedure-jada-ann-quinn
InstanceOf: ProcedureObstetric
Title: "Procedure - Obstetric Procedure - Jada Ann Quinn"
Description: "Procedure - Obstetric Procedure: Jada Ann Quinn example"
Usage: #example
* status = #completed
* code = $sct#240278000 "External cephalic version (procedure)"
  * text = "External cephalic version: Failed"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"
* outcome = $sct#385671000 "Unsuccessful"
  * text = "External cephalic version: Unsuccessful"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-surfactant-replacement-babyg-quinn.fsh

Instance: procedure-surfactant-replacement-babyg-quinn
InstanceOf: ProcedureSurfactantReplacementTherapy
Title: "Procedure - Surfactant Replacement - BabyG Quinn"
Description: "Procedure - Surfactant Replacement: BabyG Quinn example"
Usage: #example
* status = #completed
* code = $sct#434701000124101 "Surfactant replacement therapy (procedure)"
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-unplanned-hysterectomy-quinn.fsh

Instance: procedure-unplanned-hysterectomy-quinn
InstanceOf: ProcedureUnplannedHysterectomy
Title: "Procedure Unplanned Hysterectomy - Jada Ann Quinn"
Description: "Procedure Unplanned Hysterectomy: Jada Ann Quinn example"
Usage: #example
* status = #completed
* code = $sct#236987005 "Emergency cesarean hysterectomy (procedure)"
* subject = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-ventilation-following-babyg-quinn.fsh

Instance: procedure-ventilation-following-babyg-quinn
InstanceOf: ProcedureAssistedVentilationFollowingDelivery
Title: "Procedure - Assisted Ventilation Following Delivery - BabyG Quinn"
Description: "Procedure - Assisted Ventilation Following Delivery: BabyG Quinn example"
Usage: #example
* status = #completed
* code = LocalBFDRCodesCS#assistedventfollowingdelivery "Assisted ventilation required immediately following delivery" //PHC1250
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/procedure-ventilation-more-6-hours-babyg-quinn.fsh

Instance: procedure-ventilation-more-6-hours-babyg-quinn
InstanceOf: ProcedureAssistedVentilationMoreThanSixHours
Title: "Procedure - Assisted Ventilation More Than Six Hours - BabyG Quinn"
Description: "Procedure - Assisted Ventilation More Than Six Hours: BabyG Quinn example"
Usage: #example
* status = #completed
* code = LocalBFDRCodesCS#assistedventmorethan6hrs "Assisted ventilation required for more than six hours" //PHC1251
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* performedPeriod
  * start = "2019-02-07T08:30:00-07:00"
  * end = "2019-02-07T08:45:00-07:00"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/QuestionnaireResponse-mothers-live-birth-jada-quinn.fsh

Instance: QuestionnaireResponse-mothers-live-birth-jada-quinn
InstanceOf: QuestionnaireResponse
Title: "QuestionnaireResponse - Mother's Worksheet for Child's Birth Certificate: Jada Ann Quinn"
Description: "Questionnaire - Mother's Worksheet for Child's Birth Certificate: Jada Ann Quinn"
Usage: #example
* questionnaire = Canonical(Questionnaire-mothers-live-birth)
* status = #completed
* subject = Reference(patient-child-babyg-quinn) "BabyG Quinn"
* source = Reference(patient-mother-jada-ann-quinn) "Patient - Mother (Jada Ann Quinn)"
* item[0]
  * linkId = "mother-current-legal-name"
  * text = "What is your current legal name?"
  * item[0]
    * linkId = "mother-first-name"
    * text = "First"
    * answer.valueString = "Jada"
  * item[+]
    * linkId = "mother-middle-name"
    * text = "Middle"
    * answer.valueString = "Ann"
  * item[+]
    * linkId = "mother-last-name"
    * text = "Last"
    * answer.valueString = "Quinn"
* item[+]
  * linkId = "child-name"
  * text = "What will be your baby's legal name (as it should appear on the birth certificate)?"
  * item[0]
    * linkId = "child-first-name"
    * text = "First"
    * answer.valueString = "Baby"
  * item[+]
    * linkId = "child-middle-name"
    * text = "Middle"
    * answer.valueString = "G"
  * item[+]
    * linkId = "child-last-name"
    * text = "Last"
    * answer.valueString = "Quinn"
* item[+]
  * linkId = "mother-address"
  * text = "Where do you usually live - that is - where is your household/residence located?"
  * item[0]
    * linkId = "mother-nbr-street"
    * text = "Complete number and street (do not enter rural route numbers)"
    * answer.valueString = "1875 West Morton Avenue"
  * item[+]
    * linkId = "mother-city"
    * text = "City, Town, or Location"
    * answer.valueString = "Salt Lake City"
  * item[+]
    * linkId = "mother-county"
    * text = "County"
    * answer.valueString = "Salt Lake"
  * item[+]
    * linkId = "mother-state"
    * text = "State (or U.S. Territory, Canadian Province)"
    * answer.valueString = "UT"
  * item[+]
    * linkId = "mother-zip"
    * text = "Zip Code"
    * answer.valueString = "84116"
* item[+]
  * linkId = "inside-city-limits"
  * text = "Is this household inside city limits (inside the incorporated limits of the city, town, or location where you live)?"
  * answer.valueCoding = $v2-0136#Y "Yes"
* item[+]
  * linkId = "mother-mail"
  * text = "What is your mailing address"
  * item[0]
    * linkId = "mother-mail-same"
    * text = "Same as residence [Go to next question]"
    * answer.valueBoolean = false
  * item[+]
    * linkId = "mother-mail-nbr-street"
    * text = "Complete number and street"
    * answer.valueString = "1848 South 1300 East"
  * item[+]
    * linkId = "mother-mail-city"
    * text = "City, Town, or Location"
    * answer.valueString = "Salt Lake City"
  * item[+]
    * linkId = "mother-mail-state"
    * text = "State (or U.S. Territory, Canadian Province)"
    * answer.valueString = "UT"
  * item[+]
    * linkId = "mother-mail-zip"
    * text = "Zip Code"
    * answer.valueString = "84401"
* item[+]
  * linkId = "mother-dob"
  * text = "What is your date of birth?"
  * answer.valueDate = "1985-01-15"
* item[+]
  * linkId = "mother-birthplace"
  * text = "In what State, U.S. territory, or foreign country were you born? Please specify one of the following:"
  * item
    * linkId = "mother-birthplace-state"
    * text = "State"
    * answer.valueString = "UT"
* item[+]
  * linkId = "mother-education"
  * text = "What is the highest level of schooling that you have completed at the time of delivery? (Check the box that best describes your education. If you are currently enrolled, check the box that indicates the previous grade or highest degree received)."
  * answer.valueCoding = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
* item[+]
  * linkId = "mother-ethnicity"
  * answer.valueBoolean = false
* item[+]
  * linkId = "mother-race"
  * item[0]
    * linkId = "mother-race-white"
    * text = "White"
    * answer.valueBoolean = true
  * item[+]
    * linkId = "mother-race-aian"
    * text = "American Indian or Alaskan Native"
    * answer.valueBoolean = true
* item[+]
  * linkId = "receive-wic"
  * text = "Did you receive WIC (Women, Infants and Children) food for yourself during this pregnancy?"
  * answer.valueCoding = $v2-0136#Y "Yes"
* item[+]
  * linkId = "infertility-treatment"
  * text = "Did this pregnancy result from infertility treatment? (If yes, please answer 12a and 12b)"
  * answer
    * valueBoolean = true
    * item[0]
      * linkId = "drugs-ai-ii"
      * text = "If yes, did this pregnancy result from fertility-enhancing drugs, artificial insemination, or intrauterine insemination?"
      * answer.valueBoolean = false
    * item[+]
      * linkId = "art-ivf-gift"
      * text = "If yes, did this pregnancy result from assisted reproductive technology (e.g., in-vitro fertilization (IVF), gamete intrafallopian transfer (GIFT))?"
      * answer.valueBoolean = true
* item[+]
  * linkId = "mothers-height"
  * text = "What is your height?"
  * item[0]
    * linkId = "mothers-height-feet"
    * text = "Feet"
    * answer.valueQuantity = 5 'ft' "ft"
  * item[+]
    * linkId = "mothers-height-inches"
    * text = "Inches"
    * answer.valueQuantity = 7 '[in_i]' "[in_i]"
* item[+]
  * linkId = "mothers-prepregnancy-weight"
  * answer.valueQuantity = 145 '[lb_av]' "[lb_av]"
* item[+]
  * linkId = "mothers-smoking"
  * text = "How many cigarettes OR packs of cigarettes did you smoke on an average day during each of the following time periods? If you NEVER smoked, enter zero for each time period."
  * item[0]
    * linkId = "mothers-smoking-3-months-prior"
    * text = "Three months before pregnancy"
    * item[0]
      * linkId = "mothers-smoking-3-months-prior-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 0
    * item[+]
      * linkId = "mothers-smoking-3-months-prior-pck"
      * text = "# of packs"
      * answer.valueInteger = 1
  * item[+]
    * linkId = "mothers-smoking-trimester-1"
    * text = "First three months of pregnancy"
    * item[0]
      * linkId = "mothers-smoking-trimester-1-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 3
    * item[+]
      * linkId = "mothers-smoking-trimester-1-pck"
      * text = "# of packs"
      * answer.valueInteger = 0
  * item[+]
    * linkId = "mothers-smoking-trimester-2"
    * text = "Second three months of pregnancy"
    * item[0]
      * linkId = "mothers-smoking-trimester-2-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 1
    * item[+]
      * linkId = "mothers-smoking-trimester-2-pck"
      * text = "# of packs"
      * answer.valueInteger = 0
  * item[+]
    * linkId = "mothers-smoking-trimester-3"
    * text = "Third trimester of pregnancy"
    * item[0]
      * linkId = "mothers-smoking-trimester-3-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 0
    * item[+]
      * linkId = "mothers-smoking-trimester-3-pck"
      * text = "# of packs"
      * answer.valueInteger = 0
* item[+]
  * linkId = "mother-prior-name"
  * text = "What name did you use prior to your first marriage?"
  * item[0]
    * linkId = "mother-prior-first-name"
    * text = "First"
    * answer.valueString = "Jada"
  * item[+]
    * linkId = "mother-prior-middle-name"
    * text = "Middle"
    * answer.valueString = "Ann"
  * item[+]
    * linkId = "mother-prior-last-name"
    * text = "Last"
    * answer.valueString = "King"
* item[+]
  * linkId = "married-conception"
  * text = "Were you married at the time you conceived this child, at the time of birth, or at any time between conception and giving birth? [If yes, please go to question 19; If no, please see below]"
  * answer.valueBoolean = true
* item[+]
  * linkId = "father-current-legal-name"
  * text = "What is the current legal name of your baby's father?"
  * item[0]
    * linkId = "father-first-name"
    * text = "First"
    * answer.valueString = "James"
  * item[+]
    * linkId = "father-middle-name"
    * text = "Middle"
    * answer.valueString = "Brandon"
  * item[+]
    * linkId = "father-last-name"
    * text = "Last"
    * answer.valueString = "Quinn"
* item[+]
  * linkId = "father-dob"
  * text = "What the father's date of birth?"
  * answer.valueDate = "1983-09-27"
* item[+]
  * linkId = "father-birthplace"
  * text = "In what State, U.S. territory, or foreign country was the father born? Please specify one of the following:"
  * item
    * linkId = "father-birthplace-state"
    * text = "State"
    * answer.valueString = "NY"
* item[+]
  * linkId = "father-education"
  * text = "What is the highest level of schooling that the father will have completed at the time of delivery? (Check the box that best describes his education. If he is currently enrolled, check the box that indicates the previous grade or highest degree received)."
  * answer.valueCoding = $HL7_EducationLevelCS#POSTG "Doctoral or post graduate education"
* item[+]
  * linkId = "father-ethnicity"
  * answer.valueBoolean = false
* item[+]
  * linkId = "father-race"
  * item[0]
    * linkId = "father-race-white"
    * text = "White"
    * answer.valueBoolean = true
* item[+]
  * linkId = "parents-ssn"
  * text = "Furnishing parent(s) Social Security Number(s) (SSNs) is required by Federal Law, 42 USC 405(c) (section 205(c) of the Social Security Act). The number(s) will be made available to the (State Social Services Agency) to assist with child support enforcement activities and to the Internal Revenue Service for the purpose of determining Earned Income Tax Credit compliance."
  * item[0]
    * linkId = "mother-ssn"
    * text = "What is your Social Security Number?"
    * answer.valueString = "132-22-5986"
  * item[+]
    * linkId = "father-ssn"
    * text = "What is the father’s Social Security Number? If you are not married, and if a paternity acknowledgment has not been completed, leave this item blank."
    * answer.valueString = "132-22-5987"
* item[+]
  * linkId = "baby-ssn"
  * text = "Do you want a Social Security Number issued for your baby? [If yes, please sign request below"
  * answer.valueBoolean = false
* item[+]
  * linkId = "informant-name"
  * text = "If other than the mother, what is the name of the person providing information for this worksheet?"
  * item[0]
    * linkId = "informant-first-name"
    * text = "First"
    * answer.valueString = "Jane"
  * item[+]
    * linkId = "informant-last-name"
    * text = "Last"
    * answer.valueString = "King"
* item[+]
  * linkId = "informant-relationship"
  * text = "What is your relationship to the baby's mother?"
  * answer.valueCoding = LocalBFDRCodesCS#rel_otherrelative "Other relative"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/QuestionnaireResponse-patients-fetal-death-carmen-lee.fsh

Instance: QuestionnaireResponse-patients-fetal-death-carmen-lee
InstanceOf: QuestionnaireResponse
Title: "QuestionnaireResponse - Patient's Fetal Death Worksheet: Carmen Lee"
Description: "QuestionnaireResponse - Patient's Fetal Death Worksheet: Carmen Lee"
Usage: #example
* questionnaire = Canonical(Questionnaire-patients-fetal-death)
* status = #completed
* subject = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* source = Reference(patient-mother-carmen-teresa-lee) "Patient - Mother (Carmen Teresa Lee)"
* item[0]
  * linkId = "mother-current-legal-name"
  * text = "What is your current legal name?"
  * item[0]
    * linkId = "mother-first-name"
    * text = "First"
    * answer.valueString = "Carmen"
  * item[+]
    * linkId = "mother-middle-name"
    * text = "Middle"
    * answer.valueString = "Teresa"
  * item[+]
    * linkId = "mother-last-name"
    * text = "Last"
    * answer.valueString = "Lee"
* item[+]
  * linkId = "mother-address"
  * text = "Where do you usually live - that is - where is your household/residence located?"
  * item[0]
    * linkId = "mother-nbr-street"
    * text = "Complete number and street (do not enter rural route numbers)"
    * answer.valueString = "3670 Miller Road"
  * item[+]
    * linkId = "mother-city"
    * text = "City, Town, or Location"
  * item[+]
    * linkId = "mother-state"
    * text = "State (or U.S. Territory, Canadian Province)"
    * answer.valueString = "MI"
  * item[+]
    * linkId = "mother-zip"
    * text = "Zip Code"
    * answer.valueString = "48103"
* item[+]
  * linkId = "inside-city-limits"
  * text = "Is this household inside city limits (inside the incorporated limits of the city, town, or location where you live)?"
  * answer.valueCoding = $v2-0136#N "No"
* item[+]
  * linkId = "mother-mail"
  * text = "What is your mailing address"
  * item
    * linkId = "mother-mail-same"
    * text = "Same as residence [Go to next question]"
    * answer.valueBoolean = true
* item[+]
  * linkId = "mother-dob"
  * text = "What is your date of birth?"
  * answer.valueDate = "1986-02-15"
* item[+]
  * linkId = "mother-birthplace"
  * text = "In what State, U.S. territory, or foreign country were you born? Please specify one of the following:"
  * item
    * linkId = "mother-birthplace-territory"
    * text = "or U.S. territory, i.e., Puerto Rico, U.S. Virgin Islands, Guam, American Samoa or Norther Marianas"
    * answer.valueString = "PR"
* item[+]
  * linkId = "mother-education"
  * text = "What is the highest level of schooling that you have completed at the time of delivery? (Check the box that best describes your education. If you are currently enrolled, check the box that indicates the previous grade or highest degree received)."
  * answer.valueCoding = $HL7_EducationLevelCS#SEC "Some secondary or high school education"
* item[+]
  * linkId = "mother-ethnicity"
  * answer.valueBoolean = true
* item[+]
  * linkId = "mother-ethnicity-mexican"
  * answer.valueBoolean = true
* item[+]
  * linkId = "mother-ethnicity-puerto-rican"
  * answer.valueBoolean = true
* item[+]
  * linkId = "mother-ethnicity-cuban"
  * answer.valueBoolean = true
* item[+]
  * linkId = "mother-ethnicity-other"
  * answer.valueBoolean = false
* item[+]
  * linkId = "mother-race"
  * item[0]
    * linkId = "mother-race-black-or-aa"
    * answer.valueBoolean = true
* item[+]
  * linkId = "father-current-legal-name"
  * text = "What is the current legal name of your baby's father?"
  * item[0]
    * linkId = "father-first-name"
    * text = "First"
    * answer.valueString = "Tom"
  * item[+]
    * linkId = "father-middle-name"
    * text = "Middle"
    * answer.valueString = "Yan"
  * item[+]
    * linkId = "father-last-name"
    * text = "Last"
    * answer.valueString = "Lee"
* item[+]
  * linkId = "father-dob"
  * text = "What is the father's date of birth?"
  * answer.valueDate = "1984-02-27"
* item[+]
  * linkId = "father-birthplace"
  * text = "In what State, U.S. territory, or foreign country was the father born? Please specify one of the following:"
  * item
    * linkId = "father-birthplace-state"
    * text = "State"
    * answer.valueString = "NY"
* item[+]
  * linkId = "receive-wic"
  * text = "Did you receive WIC (Women, Infants and Children) food for yourself during this pregnancy?"
  * answer.valueCoding = $v2-0136#N "No"
* item[+]
  * linkId = "mothers-height"
  * text = "What is your height?"
  * item
    * linkId = "mothers-height-inches"
    * text = "Inches"
    * answer.valueQuantity = 65 '[in_i]' "[in_i]"
* item[+]
  * linkId = "mothers-prepregnancy-weight"
  * text = "lbs"
  * answer.valueQuantity = 180 '[lb_av]' "[lb_av]"
* item[+]
  * linkId = "mothers-smoking"
  * text = "How many cigarettes OR packs of cigarettes did you smoke on an average day during each of the following time periods? If you NEVER smoked, enter zero for each time period."
  * item[0]
    * linkId = "mothers-smoking-3-months-prior"
    * text = "Three months before pregnancy"
    * item[0]
      * linkId = "mothers-smoking-3-months-prior-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 0
    * item[+]
      * linkId = "mothers-smoking-3-months-prior-pck"
      * text = "# of packs"
      * answer.valueInteger = 0
  * item[+]
    * linkId = "mothers-smoking-trimester-1"
    * text = "First three months of pregnancy"
    * item[0]
      * linkId = "mothers-smoking-trimester-1-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 0
    * item[+]
      * linkId = "mothers-smoking-trimester-1-pck"
      * text = "# of packs"
      * answer.valueInteger = 0
  * item[+]
    * linkId = "mothers-smoking-trimester-2"
    * text = "Second three months of pregnancy"
    * item[0]
      * linkId = "mothers-smoking-trimester-2-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 0
    * item[+]
      * linkId = "mothers-smoking-trimester-2-pck"
      * text = "# of packs"
      * answer.valueInteger = 0
  * item[+]
    * linkId = "mothers-smoking-trimester-3"
    * text = "Third trimester of pregnancy"
    * item[0]
      * linkId = "mothers-smoking-trimester-3-cig"
      * text = "# of cigarettes*"
      * answer.valueInteger = 0
    * item[+]
      * linkId = "mothers-smoking-trimester-3-pck"
      * text = "# of packs"
      * answer.valueInteger = 0

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/relatedperson-father-natural-james-brandon-quinn-w-edit.fsh

Instance: relatedperson-father-natural-james-brandon-quinn-w-edit
InstanceOf: RelatedPersonFatherNaturalVitalRecords
Title: "RelatedPerson - Father Natural - Vital Records - James Brandon Quinn, with Edit Flag"
Description: "RelatedPerson - Father Natural - Vital Records: James Brandon Quinn example, with Edit Flag"
Usage: #example
* extension[birthPlace].valueAddress.state = "NY"
  // * url = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-relatedperson-birthplace-vr"
* identifier
  * type = $v2-0203#SS
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "132225987"
* active = true
* patient = Reference(patient-child-babyg-quinn)
* relationship = $v3-RoleCode#NFTH "natural father"
  * text = "Natural Father"
* name
  * use = #official
  * family = "Quinn"
  * given[0] = "James"
  * given[+] = "Brandon"
* gender = #male
* birthDate = "1972-11-24"
* birthDate.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#1dataQueried "Data queried"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/relatedperson-father-natural-james-brandon-quinn.fsh

Instance: relatedperson-father-natural-james-brandon-quinn
InstanceOf: RelatedPersonFatherNaturalVitalRecords
Title: "RelatedPerson - Father Natural - Vital Records - James Brandon Quinn"
Description: "RelatedPerson - Father Natural - Vital Records: James Brandon Quinn example"
Usage: #example
* extension[birthPlace].valueAddress.state = "NY"
  // * url = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-relatedperson-birthplace-vr"
* identifier
  * type = $v2-0203#SS
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "132225987"
* active = true
* patient = Reference(patient-child-babyg-quinn)
* relationship = $v3-RoleCode#NFTH "natural father"
  * text = "Natural Father"
* name
  * use = #official
  * family = "Quinn"
  * given[0] = "James"
  * given[+] = "Brandon"
* gender = #male
* birthDate = "1972-11-24"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/relatedperson-father-natural-tom-yan-lee-w-edit.fsh

Instance: relatedperson-father-natural-tom-yan-lee-w-edit
InstanceOf: RelatedPersonFatherNaturalVitalRecords
Title: "RelatedPerson - Father Natural - Vital Records - Tom Yan Lee, with Edit Flag"
Description: "RelatedPerson - Father Natural - Vital Records - Tom Yan Lee example, with Edit Flag"
Usage: #example
  // * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[birthPlace].valueAddress.state = "NY"
  // * url = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-relatedperson-birthplace-vr"
* active = true
* patient = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* relationship = $v3-RoleCode#NFTH "natural father"
  * text = "Natural Father"
* name
  * use = #official
  * family = "Lee"
  * given[0] = "Tom"
  * given[+] = "Yan"
* gender = #male
* birthDate = "1984-02-27"
* birthDate.extension[bypassEditFlag].valueCodeableConcept = CodeSystemEditFlagsVitalRecords#1dataQueried "Data queried"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/relatedperson-father-natural-tom-yan-lee.fsh

Instance: relatedperson-father-natural-tom-yan-lee
InstanceOf: RelatedPersonFatherNaturalVitalRecords
Title: "RelatedPerson - Father Natural - Vital Records - Tom Yan Lee"
Description: "RelatedPerson - Father Natural - Vital Records - Tom Yan Lee example"
Usage: #example
  // * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[birthPlace].valueAddress.state = "NY"
  // * url = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-relatedperson-birthplace-vr"
* active = true
* patient = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* relationship = $v3-RoleCode#NFTH "natural father"
  * text = "Natural Father"
* name
  * use = #official
  * family = "Lee"
  * given[0] = "Tom"
  * given[+] = "Yan"
* gender = #male
* birthDate = "1984-02-27"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/relatedperson-mother-carmen-teresa-lee.fsh

Instance: relatedperson-mother-carmen-teresa-lee
InstanceOf: RelatedPersonMotherVitalRecords
Title: "RelatedPerson - Mother Gestational - Vital Records - Carmen Teresa Lee"
Description: "RelatedPerson - Mother Gestational - Vital Records - Carmen Teresa Lee example"
Usage: #example
  // * url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* active = true
* patient = Reference(patient-decedent-fetus-not-named) "Patient - Decedent Fetus (Fetus Not Named)"
* relationship = $v3-RoleCode#GESTM "gestational mother"
  * text = "Gestational Mother"
* name
  * use = #official
  * family = "Lee"
  * given[0] = "Carmen"
  * given[+] = "Teresa"
* gender = #female
* birthDate = "1986-02-15"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instances/relatedperson-mother-jada-ann-quinn.fsh

Instance: relatedperson-mother-jada-ann-quinn
InstanceOf: RelatedPersonMotherVitalRecords
Title: "RelatedPerson - Mother Gestational - Vital Records - Jada Ann Quinn"
Description: "RelatedPerson - Mother Gestational - Vital Records - Jada Ann Quinn example"
Usage: #example
* identifier
  * use = #usual
  * type = $v2-0203#SS "Social Security number"
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "132225986"
* active = true
* patient = Reference(patient-child-babyg-quinn)
* relationship = $v3-RoleCode#GESTM "gestational mother"
  * text = "Gestational Mother"
* name
  * use = #official
  * family = "Quinn"
  * given[0] = "Jada"
  * given[+] = "Ann"
* telecom[0]
  * system = #phone
  * value = "1-(404)555-1212"
  * use = #home
* telecom[+]
  * system = #email
  * value = "jadaann.quinn@example.com"
* gender = #female
* birthDate = "1985-01-15"
* address
  * use = #home
  * line = "1875 West Morton Avenue"
  * city = "Salt Lake City"
  * district = "Salt Lake"
  * state = "UT"
  * postalCode = "84116"
  * country = "US"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/bundle-coded-cause-of-fetal-death-not-named.fsh

Instance: bundle-coded-cause-of-fetal-death-not-named
InstanceOf: BundleDocumentCodedCauseOfFetalDeath
Title: "Bundle - Coded Cause of Fetal Death - not named"
Description: "Bundle - Coded Cause of Fetal Death - not named"
Usage: #example 
* identifier
  * value = "2019NJ009876"
  * extension[fetalDeathReportNumber].valueString = "9876"
  * extension[localFileNumber1].valueString = "11111-11111"
* timestamp = "2019-10-15T08:51:14.637+00:00"
* insert addentry(Composition, composition-coded-cause-of-fetal-death-not-named )
* insert addentry(Observation, observation-coded-initiating-fetal-death-cause-or-condition)
* insert addentry(Observation, observation-coded-other-fetal-death-cause-or-condition-not-named)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/bundle-coded-industry-and-occupation-baby-g-quinn.fsh

Instance: bundle-coded-industry-occupation-baby-g-quinn
InstanceOf: BundleDocumentCodedIndustryOccupation
Title: "Bundle - Coded Industry and Occupation - Baby G Quinn"
Description: "Bundle - Coded Industry and Occupation - example Baby G Quinn"
Usage: #example 
* identifier
  * value = "2019NJ15075"
  * extension[fileNumber].valueString = "15075"
  * extension[localFileNumber1].valueString = "444455555"
* timestamp = "2019-10-15T08:51:14.637+00:00"
* insert addentry(Composition, composition-coded-industry-and-occupation-baby-g-quinn )
* insert addentry(Observation, observation-present-job-jada-ann-quinn-coded )
* insert addentry(Observation, observation-present-job-james-brandon-quinn-coded )

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/bundle-coded-race-and-ethnicity-baby-g-quinn.fsh

Instance: bundle-coded-race-and-ethnicity-baby-g-quinn
InstanceOf: BundleDocumentDemographicCodedContent
Title: "Bundle - Coded Race and Ethnicity - Baby G Quinn"
Description: "Bundle - Coded Race and Ethnicity - example Baby G Quinn"
Usage: #example 
* identifier
  * value = "2019NJ15075"
  * extension[fileNumber].valueString = "15075"
  * extension[localFileNumber1].valueString = "444455555"
* timestamp = "2019-10-15T08:51:14.637+00:00"
* insert addentry(Composition, composition-coded-race-and-ethnicity-baby-g-quinn )
* insert addentry(Observation, observation-input-race-and-ethnicity-mother)
* insert addentry(Observation, observation-input-race-and-ethnicity-father)
* insert addentry(Observation, observation-coded-race-and-ethnicity-mother)
* insert addentry(Observation, observation-coded-race-and-ethnicity-father)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/bundle-jurisdiction-fetal-death-not-named.fsh

// RuleSet: addentry(type, id)
// * entry[+].resource = {id}
// * entry[=].fullUrl = "http://www.example.org/fhir/{type}/{id}"

Instance: bundle-jurisdiction-fetal-death-not-named
InstanceOf: BundleDocumentFetalDeathReport 
Title: "Bundle - Jurisdiction Fetal Death Report - Fetus Not Named"
Description: "Bundle - Jurisdiction Fetal Death Report: Fetus Not Named example"
Usage: #example
* identifier
  * value = "2019NJ009876"
  * extension[fetalDeathReportNumber].valueString = "9876"
  * extension[localFileNumber1].valueString = "11111-11111"
* timestamp = "2019-10-15T08:51:14.637+00:00"
* insert addentry(Composition, composition-jurisdiction-fetal-death-not-named)
* insert addentry(Patient, patient-decedent-fetus-not-named)
* insert addentry(Encounter, encounter-maternity-carmen-teresa-lee)
* insert addentry(Organization, organization-jurisdictional-vital-records-office)
* insert addentry(Patient, patient-mother-carmen-teresa-lee)
* insert addentry(Observation, observation-date-of-first-prenatal-care-visit-carmen-teresa-lee)
* insert addentry(Observation, observation-last-menstrual-period-carmen-teresa-lee)
* insert addentry(Observation, observation-number-births-now-living-carmen-teresa-lee)
* insert addentry(Observation, observation-number-births-now-dead-carmen-teresa-lee)
* insert addentry(Observation, observation-date-of-last-live-birth-carmen-teresa-lee)
* insert addentry(Observation, observation-mother-height-carmen-teresa-lee-w-edit)
* insert addentry(Observation, observation-mother-prepregnancy-weight-carmen-teresa-lee-w-edit)
* insert addentry(Observation, observation-mother-received-wic-food-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-1-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-2-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-3-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-4-carmen-teresa-lee)
* insert addentry(Observation, observation-number-previous-cesareans-carmen-teresa-lee-w-edit)
* insert addentry(Condition, condition-gestational-diabetes-carmen-teresa-lee)
* insert addentry(Observation, observation-fetal-presentation-not-named)
* insert addentry(Procedure, procedure-final-route-method-delivery-not-named)
* insert addentry(Observation, observation-birth-weight-not-named-w-edit)
* insert addentry(Observation, observation-gestational-age-at-delivery-not-named-w-edit)
* insert addentry(Condition, condition-fetal-death-cause-or-condition-not-named)
* insert addentry(Condition, condition-fetal-death-other-significant-cause-not-named)
* insert addentry(Observation, observation-fetal-death-time-point-not-named)
// indicated that as observation, not Observation-autopsy-performed-indicator-vr
* insert addentry(Observation, observation-autopsy-performed-not-named)
* insert addentry(Observation, observation-histological-placental-exam-performed-not-named)
* insert addentry(Observation, observation-autopsy-histological-exam-results-used-not-named)
// no plurality in STU1.1 - could be replaced by numberFetalDeathsThisDelivery
//* insert addentry(Observation, observation-plurality-carmen-teresa-lee)
* insert addentry(Observation, observation-number-deaths-this-delivery-carmen-teresa-lee)
* insert addentry(Observation, observation-parent-education-level-carmen-teresa-lee-w-edit)
* insert addentry(Observation, observation-present-job-carmen-teresa-lee)
* insert addentry(Observation, observation-present-job-tom-yan-lee)
* insert addentry(Observation, observation-input-race-and-ethnicity-carmen-teresa-lee)
* insert addentry(Practitioner, practitioner-vital-records-janet-seito)
* insert addentry(Location, location-south-hospital)
* insert addentry(Organization, organization-south-hospital)
* insert addentry(RelatedPerson, relatedperson-mother-carmen-teresa-lee)
* insert addentry(RelatedPerson, relatedperson-father-natural-tom-yan-lee)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/bundle-jurisdiction-live-birth-babyg-quinn.fsh

Instance: bundle-jurisdiction-live-birth-babyg-quinn
InstanceOf: BundleDocumentBirthReport
Title: "Bundle - Jurisdiction Live Birth Report - Baby G Quinn"
Description: "Bundle - Jurisdiction Live Birth Report: Baby G Quinn example"
Usage: #example
* timestamp = "2019-02-13T02:06:15.234Z"
* identifier
  * value = "2019NJ15075"
  * extension[birthCertificateNumber].valueString = "15075"
  * extension[localFileNumber1].valueString = "444455555"
* insert addentry(Composition, composition-jurisdiction-live-birth-babyg-quinn)
* insert addentry(Patient, patient-child-babyg-quinn)
* insert addentry(Encounter, encounter-birth-babyg-quinn)
* insert addentry(Encounter, encounter-maternity-jada-ann-quinn)
* insert addentry(Organization, organization-jurisdictional-vital-records-office)
* insert addentry(Patient, patient-mother-jada-ann-quinn)
* insert addentry(Observation, observation-date-of-first-prenatal-care-visit-jada-ann-quinn)
* insert addentry(Observation, observation-number-prenatal-visits-jada-ann-quinn)
* insert addentry(Observation, observation-last-menstrual-period-jada-ann-quinn)
* insert addentry(Observation, observation-number-births-now-living-jada-ann-quinn)
* insert addentry(Observation, observation-number-births-now-dead-jada-ann-quinn)
* insert addentry(Observation, observation-date-of-last-live-birth-jada-ann-quinn)
* insert addentry(Observation, observation-number-other-pregnancy-outcomes-jada-ann-quinn)
* insert addentry(Observation, observation-date-of-last-other-pregnancy-outcome-jada-ann-quinn)
* insert addentry(Coverage, coverage-principal-payer-for-delivery-jada-ann-quinn)
* insert addentry(Observation, observation-mother-delivery-weight-jada-ann-quinn-w-edit)
* insert addentry(Observation, observation-mother-height-jada-ann-quinn-w-edit)
* insert addentry(Observation, observation-mother-prepregnancy-weight-jada-ann-quinn-w-edit)
* insert addentry(Observation, observation-mother-received-wic-food-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-1-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-2-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-3-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-4-jada-ann-quinn)
* insert addentry(Observation, observation-number-previous-cesareans-jada-ann-quinn-w-edit)
* insert addentry(Condition, condition-infection-present-during-pregnancy-jada-ann-quinn)
* insert addentry(Procedure, procedure-obstetric-procedure-jada-ann-quinn)
* insert addentry(Condition, condition-chorioamnionitis-jada-ann-quinn)
* insert addentry(Procedure, procedure-induction-of-labor-jada-ann-quinn)
* insert addentry(Observation, observation-fetal-presentation-babyg-quinn)
* insert addentry(Procedure, procedure-final-route-method-delivery-babyg-quinn)
* insert addentry(Condition, condition-ruptured-uterus-jada-ann-quinn)
* insert addentry(Observation, observation-birth-weight-babyg-quinn-w-edit)
* insert addentry(Observation, observation-gestational-age-at-delivery-babyg-quinn-w-edit)
* insert addentry(Observation, observation-apgar-score-babyg-quinn-5-min)
* insert addentry(Observation, observation-apgar-score-babyg-quinn-10-min)
* insert addentry(Observation, observation-number-live-births-this-delivery-jada-ann-quinn)
// no plurality in STU1.1
// * insert addentry(Observation, observation-plurality-jada-ann-quinn)
* insert addentry(Condition, condition-congenital-anomaly-of-newborn-babyg-quinn)
* insert addentry(Condition, condition-congenital-anomaly-of-newborn-babyg-quinn-2)
* insert addentry(Observation, observation-infant-living-babyg-quinn)
* insert addentry(Observation, observation-infant-breastfed-at-discharge-babyg-quinn)
* insert addentry(Observation, observation-mother-married-during-pregnancy-jada-ann-quinn)
* insert addentry(Observation, observation-parent-education-level-jada-ann-quinn-w-edit)
* insert addentry(Observation, observation-present-job-jada-ann-quinn)
* insert addentry(Observation, observation-input-race-and-ethnicity-jada-ann-quinn)
* insert addentry(Observation, observation-ssn-requested-for-child-babyg-quinn)
* insert addentry(RelatedPerson, relatedperson-father-natural-james-brandon-quinn-w-edit)
* insert addentry(Observation, observation-paternity-acknowledgement-signed-james-quinn-w-edit)
* insert addentry(Observation, observation-parent-education-level-james-quinn-w-edit)
* insert addentry(Observation, observation-present-job-james-brandon-quinn)
* insert addentry(Observation, observation-input-race-and-ethnicity-james-quinn-w-edit)
* insert addentry(Practitioner, practitioner-vital-records-avery-jones)
* insert addentry(Practitioner, practitioner-vital-records-janet-seito ) // why?
* insert addentry(Location, location-east-hospital)
* insert addentry(Location, location-south-hospital)
* insert addentry(Location, location-north-hospital)
* insert addentry(Organization, organization-south-hospital)
* insert addentry(Observation, observation-labor-trial-attempted-babyg-quinn)
//* insert addentry(RelatedPerson, relatedperson-mother-jada-ann-quinn)
* insert addentry(Condition, condition-gestational-hypertension-jada-ann-quinn) 
* insert addentry(Condition, condition-prepregnancy-diabetes-jada-ann-quinn) 
* insert addentry(Procedure, procedure-infertility-treatment-jada-ann-quinn) 
* insert addentry(Procedure, procedure-artificial-insemination-jada-ann-quinn) 
* insert addentry(Observation, observation-antibiotics-during-labor-jada-ann-quinn) 
* insert addentry(Procedure, procedure-antibiotic-sepsis-babyg-quinn)
* insert addentry(Procedure,  procedure-epidural-or-spinal-anesthesia-jada-ann-quinn) 


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/bundle-provider-fetal-death-not-named.fsh

Instance: bundle-provider-fetal-death-not-named
InstanceOf: BundleDocumentFetalDeathReport
Title: "Bundle - Provider Fetal Death Report - Fetus Not Named"
Description: "Bundle - Provider Fetal Death Report: Fetus Not Named example"
Usage: #example
* timestamp = "2019-02-11T02:05:44.434Z"
* identifier
  * value = "2019NJ009876"
  * extension[fetalDeathReportNumber].valueString = "9876"
  * extension[localFileNumber1].valueString = "11111-11111"
* insert addentry(Composition, composition-provider-fetal-death-not-named)
* insert addentry(Patient, patient-decedent-fetus-not-named)
* insert addentry(Encounter, encounter-maternity-carmen-teresa-lee)
//* insert addentry(Practitioner, practitioner-vital-records-jessica-leung)
* insert addentry(Patient, patient-mother-carmen-teresa-lee)
* insert addentry(Observation, observation-date-of-first-prenatal-care-visit-carmen-teresa-lee)
* insert addentry(Observation, observation-last-menstrual-period-carmen-teresa-lee)
* insert addentry(Observation, observation-number-births-now-living-carmen-teresa-lee)
* insert addentry(Observation, observation-number-births-now-dead-carmen-teresa-lee)
* insert addentry(Observation, observation-date-of-last-live-birth-carmen-teresa-lee)
* insert addentry(Observation, observation-mother-height-carmen-teresa-lee)
* insert addentry(Observation, observation-mother-prepregnancy-weight-carmen-teresa-lee)
* insert addentry(Observation, observation-mother-received-wic-food-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-1-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-2-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-3-carmen-teresa-lee)
* insert addentry(Observation, observation-cig-smoking-pregnancy-4-carmen-teresa-lee)
* insert addentry(Observation, observation-number-previous-cesareans-carmen-teresa-lee)
* insert addentry(Condition, condition-gestational-diabetes-carmen-teresa-lee)
* insert addentry(Observation, observation-fetal-presentation-not-named)
* insert addentry(Procedure, procedure-final-route-method-delivery-not-named)
* insert addentry(Observation, observation-birth-weight-not-named)
* insert addentry(Observation, observation-gestational-age-at-delivery-not-named)
* insert addentry(Condition, condition-fetal-death-cause-or-condition-not-named)
* insert addentry(Condition, condition-fetal-death-other-significant-cause-not-named)
* insert addentry(Observation, observation-fetal-death-time-point-not-named)
// indicated that as observation, not Observation-autopsy-performed-indicator-vr
* insert addentry(Observation, observation-autopsy-performed-not-named)
* insert addentry(Observation, observation-histological-placental-exam-performed-not-named)
* insert addentry(Observation, observation-autopsy-histological-exam-results-used-not-named)
// possibly to be replaced by deaths @ birth
//* insert addentry(Observation, observation-plurality-carmen-teresa-lee)
* insert addentry(Observation, observation-number-deaths-this-delivery-carmen-teresa-lee)
* insert addentry(Observation, observation-parent-education-level-carmen-teresa-lee)
* insert addentry(Observation, observation-present-job-carmen-teresa-lee)
* insert addentry(Observation, observation-present-job-tom-yan-lee)
* insert addentry(Observation, observation-input-race-and-ethnicity-carmen-teresa-lee)
* insert addentry(QuestionnaireResponse, QuestionnaireResponse-patients-fetal-death-carmen-lee)
* insert addentry(Practitioner, practitioner-vital-records-janet-seito)
* insert addentry(Location, location-south-hospital)
* insert addentry(Organization, organization-south-hospital)
* insert addentry(RelatedPerson, relatedperson-mother-carmen-teresa-lee)
* insert addentry(RelatedPerson, relatedperson-father-natural-tom-yan-lee)
* insert addentry(Practitioner, practitioner-vital-records-jessica-leung) // author

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/bundle-provider-live-birth-babyg-quinn.fsh

Instance: bundle-provider-live-birth-babyg-quinn
InstanceOf: BundleDocumentBirthReport
Title: "Bundle - Provider Live Birth - Baby G Quinn"
Description: "Bundle - Provider Live Birth: Baby G Quinn example"
Usage: #example
* identifier.system = Canonical(CodeSystemIJEVitalRecords)
* identifier
  * value = "2019NJ15075"
  * extension[birthCertificateNumber].valueString = "15075"
  * extension[localFileNumber1].valueString = "444455555"
* timestamp = "2019-02-11T02:05:44.434Z"
* insert addentry(Composition, composition-provider-live-birth-babyg-quinn)
* insert addentry(Patient, patient-child-babyg-quinn)
* insert addentry(Encounter, encounter-birth-babyg-quinn)
* insert addentry(Encounter, encounter-maternity-jada-ann-quinn)
* insert addentry(Practitioner, practitioner-vital-records-avery-jones)
* insert addentry(Practitioner, practitioner-vital-records-janet-seito ) // why?
* insert addentry(Patient, patient-mother-jada-ann-quinn)
* insert addentry(Observation, observation-date-of-first-prenatal-care-visit-jada-ann-quinn)
* insert addentry(Observation, observation-number-prenatal-visits-jada-ann-quinn)
* insert addentry(Observation, observation-last-menstrual-period-jada-ann-quinn)
* insert addentry(Observation, observation-number-births-now-living-jada-ann-quinn)
* insert addentry(Observation, observation-number-births-now-dead-jada-ann-quinn)
* insert addentry(Observation, observation-date-of-last-live-birth-jada-ann-quinn)
* insert addentry(Observation, observation-number-other-pregnancy-outcomes-jada-ann-quinn)
* insert addentry(Observation, observation-date-of-last-other-pregnancy-outcome-jada-ann-quinn)
* insert addentry(Coverage, coverage-principal-payer-for-delivery-jada-ann-quinn)
* insert addentry(Observation, observation-mother-delivery-weight-jada-ann-quinn)
* insert addentry(Observation, observation-mother-height-jada-ann-quinn)
* insert addentry(Observation, observation-mother-prepregnancy-weight-jada-ann-quinn)
* insert addentry(Observation, observation-mother-received-wic-food-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-1-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-2-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-3-jada-ann-quinn)
* insert addentry(Observation, observation-cig-smoking-pregnancy-4-jada-ann-quinn)
* insert addentry(Condition, condition-prepregnancy-diabetes-jada-ann-quinn)
* insert addentry(Condition, condition-gestational-hypertension-jada-ann-quinn)
* insert addentry(Observation, observation-number-previous-cesareans-jada-ann-quinn)
* insert addentry(Condition, condition-infection-present-during-pregnancy-jada-ann-quinn)
* insert addentry(Procedure, procedure-obstetric-procedure-jada-ann-quinn)
* insert addentry(Condition, condition-chorioamnionitis-jada-ann-quinn)
* insert addentry(Procedure, procedure-induction-of-labor-jada-ann-quinn)
* insert addentry(Observation, observation-fetal-presentation-babyg-quinn)
* insert addentry(Procedure, procedure-final-route-method-delivery-babyg-quinn)
* insert addentry(Condition, condition-ruptured-uterus-jada-ann-quinn)
* insert addentry(Observation, observation-birth-weight-babyg-quinn)
* insert addentry(Observation, observation-gestational-age-at-delivery-babyg-quinn)
* insert addentry(Observation, observation-apgar-score-babyg-quinn-5-min)
* insert addentry(Observation, observation-apgar-score-babyg-quinn-10-min)
* insert addentry(Observation, observation-number-live-births-this-delivery-jada-ann-quinn)
* insert addentry(Condition, condition-congenital-anomaly-of-newborn-babyg-quinn)
* insert addentry(Condition, condition-congenital-anomaly-of-newborn-babyg-quinn-2)
* insert addentry(Observation, observation-infant-living-babyg-quinn)
* insert addentry(Observation, observation-infant-breastfed-at-discharge-babyg-quinn)
* insert addentry(Observation, observation-mother-married-during-pregnancy-jada-ann-quinn)
* insert addentry(Observation, observation-parent-education-level-jada-ann-quinn)
* insert addentry(Observation, observation-present-job-jada-ann-quinn)
* insert addentry(Observation, observation-input-race-and-ethnicity-jada-ann-quinn)
* insert addentry(Observation, observation-ssn-requested-for-child-babyg-quinn)
* insert addentry(RelatedPerson, relatedperson-father-natural-james-brandon-quinn)
* insert addentry(Observation, observation-paternity-acknowledgement-signed-james-quinn)
* insert addentry(Observation, observation-parent-education-level-james-quinn)
* insert addentry(Observation, observation-present-job-james-brandon-quinn)
* insert addentry(Observation, observation-input-race-and-ethnicity-james-quinn)
* insert addentry(QuestionnaireResponse, QuestionnaireResponse-mothers-live-birth-jada-quinn)
* insert addentry(Location, location-east-hospital)
* insert addentry(Location, location-south-hospital)
* insert addentry(Location, location-north-hospital)
* insert addentry(Organization, organization-south-hospital)
* insert addentry(Observation, observation-labor-trial-attempted-babyg-quinn)
//* insert addentry(RelatedPerson, relatedperson-mother-jada-ann-quinn)
* insert addentry(Procedure, procedure-infertility-treatment-jada-ann-quinn) 
* insert addentry(Procedure, procedure-artificial-insemination-jada-ann-quinn) 
* insert addentry(Observation, observation-antibiotics-during-labor-jada-ann-quinn) 
* insert addentry(Procedure, procedure-antibiotic-sepsis-babyg-quinn)
* insert addentry(Procedure,  procedure-epidural-or-spinal-anesthesia-jada-ann-quinn) 

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/composition-coded-cause-of-fetal-death-not-named.fsh

Instance: composition-coded-cause-of-fetal-death-not-named
InstanceOf: CompositionCodedCauseOfFetalDeath
Title: "Composition - Coded Cause of Fetal Death - Fetus Not Named"
Description: "Composition - Coded Cause of Fetal Death: Fetus Not Named example"
Usage: #example
* status = #final
* type = $loinc#86804-2 "Cause of death classification and related information Document"
* subject.display  = "Patient - Decedent Fetus (Fetus Not Named)"
* date = "2019-01-09"
* author.display = "National Center for Health Statistics"
* title = "Coded Cause of Fetal Death"
* section[codedCauseOfFetalDeath]
  * title = "Coded Initiating Cause of Fetal Death"
  *  insert addNamedEntryComposition(codedInitiatingFetalDeathCauseOrCondition, Observation, observation-coded-initiating-fetal-death-cause-or-condition)
  *  insert addNamedEntryComposition(codedOtherSignificantFetalDeathCauseOrCondition, Observation, observation-coded-other-fetal-death-cause-or-condition-not-named)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/composition-coded-industry-and-occupation-babyg-quinn.fsh

Instance: composition-coded-industry-and-occupation-baby-g-quinn 
InstanceOf: CompositionCodedIndustryAndOccupation
Title: "Composition - Coded Industry and Occuption - Baby G Quinn"
Description: "Composition - Coded Industry and Occupation: Baby G Quinn example"
Usage: #example
* status = #final
* type = LocalBFDRCodesCS#industry_occupation_document  "Industry and Occupation Document"
* subject.display = "Patient - Child (Baby G Quinn)" // = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* date = "2019-01-09"
* author.display =  "National Center for Health Statistics"
* title = "Coded Industry and Occupation"
* section[mother]
  * title = "Mother's Industry and Occupation"
  //* focus = Reference(patient-mother-jada-ann-quinn)
  * focus.display = "patient-mother-jada-ann-quinn"
  * insert addentryComposition(Observation, observation-present-job-jada-ann-quinn-coded)
* section[father]
  * title = "Father's Industry and Occupationi"
  //* focus = Reference(relatedperson-father-natural-james-brandon-quinn)
  * focus.display = "relatedperson-father-natural-james-brandon-quinn"
  * insert addentryComposition(Observation, observation-present-job-james-brandon-quinn-coded)




---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/composition-coded-race-and-ethnicity-babyg-quinn.fsh

Instance: composition-coded-race-and-ethnicity-baby-g-quinn 
InstanceOf: CompositionCodedRaceAndEthnicity
Title: "Composition - Coded Race and Ethnicity - Baby G Quinn"
Description: "Composition - Coded Race and Ethnicity: Baby G Quinn example"
Usage: #example
* status = #final
* type = $loinc#86805-9 "Race and ethnicity information Document"
* subject.display = "Patient - Child (Baby G Quinn)" // = Reference(patient-child-babyg-quinn) "Patient - Child (Baby G Quinn)"
* date = "2019-01-09"
* author.display =  "National Center for Health Statistics"
* title = "Coded Race and Ethnicity"
* section[mother]
  * title = "Mother's Coded Race and Ethnicity"
  //* focus = Reference(patient-mother-jada-ann-quinn)
  * focus.display = "patient-mother-jada-ann-quinn"
  * insert addentryComposition(Observation, observation-input-race-and-ethnicity-mother )
  * insert addentryComposition(Observation, observation-coded-race-and-ethnicity-mother )
* section[father]
  * title = "Father's Coded Race and Ethnicity"
  //* focus = Reference(relatedperson-father-natural-james-brandon-quinn)
  * focus.display = "relatedperson-father-natural-james-brandon-quinn"
  * insert addentryComposition(Observation, observation-input-race-and-ethnicity-father )
  * insert addentryComposition(Observation, observation-coded-race-and-ethnicity-father )


Instance: observation-coded-race-and-ethnicity-mother
InstanceOf: ObservationCodedRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - CodedRaceAndEthnicity example [Mother]"
Description: "Example of coded-race-and-ethnicity-vr profile (Mother)"
* code = CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother
* status = #final
* subject.display = "NCHS generated - mother"
* component[FirstEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#101 "White"
* component[SecondEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#122 "Israeli"
* component[FirstAmericanIndianCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#A31 "Arikara"
* component[RaceRecode40].valueCodeableConcept = CodeSystemRaceRecode40VitalRecords#20 "AIAN and Asian"
* component[HispanicCode].valueCodeableConcept = CodeSystemHispanicOriginVitalRecords#233 "Chilean"

Instance: observation-coded-race-and-ethnicity-father
InstanceOf: ObservationCodedRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - CodedRaceAndEthnicity example [Father]"
Description: "Example of coded-race-and-ethnicity-vr profile (Father)"
* code = CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather
* status = #final
* subject.display = "NCHS generated - father"
* component[FirstEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#101 "White"
* component[SecondEditedCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#122 "Israeli"
* component[FirstAmericanIndianCode].valueCodeableConcept = CodeSystemRaceCodeVitalRecords#A31 "Arikara"
* component[RaceRecode40].valueCodeableConcept = CodeSystemRaceRecode40VitalRecords#20 "AIAN and Asian"
* component[HispanicCode].valueCodeableConcept = CodeSystemHispanicOriginVitalRecords#233 "Chilean"


Instance: observation-input-race-and-ethnicity-mother
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [Mother]"
Description: "Example of input-race-and-ethnicity-vr profile (Mother)"
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother
* status = #final
* subject.display = "EBRS-generated - mother"
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = true
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"


Instance: observation-input-race-and-ethnicity-father
InstanceOf: ObservationInputRaceAndEthnicityVitalRecords
Usage: #example
Title: "Observation - InputRaceAndEthnicity example [Father]"
Description: "Example of input-race-and-ethnicity-vr profile (Father)"
* code = CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather
* status = #final
* subject.display = "EBRS-generated - father"
* component[White].valueBoolean = true
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[BlackOrAfricanAmerican].valueBoolean = false
* component[AmericanIndianOrAlaskanNative].valueBoolean = true
* component[AsianIndian].valueBoolean = false
* component[Chinese].valueBoolean = false
* component[Filipino].valueBoolean = false
* component[Japanese].valueBoolean = false
* component[Korean].valueBoolean = false
* component[Vietnamese].valueBoolean = false
* component[OtherAsian].valueBoolean = true
* component[NativeHawaiian].valueBoolean = false
* component[GuamanianOrChamorro].valueBoolean = false
* component[Samoan].valueBoolean = false
* component[OtherPacificIslander].valueBoolean = false
* component[OtherRace].valueBoolean = false
* component[FirstOtherAsianLiteral].valueString = "Malaysian"
* component[FirstAmericanIndianOrAlaskanNativeLiteral].valueString = "Arikara"
* component[HispanicMexican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicCuban].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicPuertoRican].valueCodeableConcept = $v2-0136#Y "Yes"
* component[HispanicOther].valueCodeableConcept = $v2-0136#N "No"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/composition-jurisdiction-fetal-death-not-named.fsh

Instance: composition-jurisdiction-fetal-death-not-named
InstanceOf: CompositionJurisdictionFetalDeathReport
Title: "Composition - Jurisdiction Fetal Death Report - Fetus Not Named"
Description: "Composition Jurisdiction Fetal Death Report: Fetus Not Named example"
Usage: #example

* status = #final
* type = $loinc#92010-8 "Jurisdiction fetal death report Document"
* insert addReferenceComposition(subject,Patient, patient-decedent-fetus-not-named)
// * subject = Reference() "Patient - Decedent Fetus (Fetus Not Named)"
* insert addReferenceComposition(encounter,Encounter, encounter-maternity-carmen-teresa-lee)
//* encounter = Reference(encounter-maternity-carmen-teresa-lee) "Encounter - Maternity (Carmen Teresa Lee)"
* date = "2019-01-09"
* insert addReferenceComposition(author, Organization, organization-jurisdictional-vital-records-office)
* title = "Jurisdiction fetal death report Document"
* section[motherPrenatal]
  // * title = "Mother (prenatal) Section on the Fetal Death Report"
  // * code = $loinc#57073-9 "Prenatal records"
  * insert addReferenceComposition(focus, Patient, patient-mother-carmen-teresa-lee)
  * insert addNamedEntryComposition(firstPrenatalCareVisit, Observation, observation-date-of-first-prenatal-care-visit-carmen-teresa-lee)
  * insert addNamedEntryComposition(dateLastNormalMenses, Observation, observation-last-menstrual-period-carmen-teresa-lee)
  * insert addNamedEntryComposition(numberNowLiving, Observation, observation-number-births-now-living-carmen-teresa-lee)
  * insert addNamedEntryComposition(numberNowDead, Observation, observation-number-births-now-dead-carmen-teresa-lee)
  * insert addNamedEntryComposition(dateLastLiveBirth, Observation, observation-date-of-last-live-birth-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersHeight, Observation, observation-mother-height-carmen-teresa-lee-w-edit)
  * insert addNamedEntryComposition(mothersPrepregnancyWeight, Observation, observation-mother-prepregnancy-weight-carmen-teresa-lee-w-edit)
  * insert addNamedEntryComposition(motherReceivedWICFood, Observation, observation-mother-received-wic-food-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-1-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-2-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-3-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-4-carmen-teresa-lee)
* section[medicalHealthInformation] 
  // * title = "Medical and Health Information on the Fetal Death Report"
  // * code = $loinc#55752-0 "Clinical information"
  * insert addReferenceComposition(focus, Patient, patient-mother-carmen-teresa-lee)
  * insert addNamedEntryComposition(numberPreviousCesareans, Observation, observation-number-previous-cesareans-carmen-teresa-lee-w-edit)
  * insert addNamedEntryComposition(fetalPresentation, Observation, observation-fetal-presentation-not-named)
  * insert addNamedEntryComposition(finalRouteMethodDelivery, Procedure, procedure-final-route-method-delivery-not-named)
  * insert addNamedEntryComposition(pregnancyRiskFactors, Condition, condition-gestational-diabetes-carmen-teresa-lee)
  // No maternal morbidity
  // No pregnancy risk factors
* section[fetus]
  // * title = "Fetal delivery information section on the Fetal Death Report"
  // * code = $loinc#76400-1 "Fetal delivery information Document [US Standard Report of Fetal Death]"
  * insert addNamedEntryComposition(deliveryWeight, Observation, observation-birth-weight-not-named-w-edit)
  * insert addNamedEntryComposition(gestationalAgeAtDelivery, Observation, observation-gestational-age-at-delivery-not-named-w-edit)
  * insert addNamedEntryComposition(causeOfFetalDeath, Condition, condition-fetal-death-cause-or-condition-not-named)
  * insert addNamedEntryComposition(otherCauseOfDeath, Condition, condition-fetal-death-other-significant-cause-not-named)
  * insert addNamedEntryComposition(estimatedTimeFetalDeath, Observation, observation-fetal-death-time-point-not-named)
  * insert addNamedEntryComposition(autopsyPerformed, Observation, observation-autopsy-performed-not-named)
  * insert addNamedEntryComposition(histologicalExamPerformed, Observation, observation-histological-placental-exam-performed-not-named)
  * insert addNamedEntryComposition(autopsyOrHistologicalExamUsed, Observation, observation-autopsy-histological-exam-results-used-not-named)
  // * entry[+]
  //   * reference = "Observation/observation-plurality-carmen-teresa-lee"
  //   * display = "Observation - Plurality (Carmen Teresa Lee)" 
  * insert addNamedEntryComposition(numberFetalDeathsThisDelivery, Observation, observation-number-deaths-this-delivery-carmen-teresa-lee)
* section[motherInformation]
  * insert addReferenceComposition(focus, Patient, patient-mother-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersEducation, Observation, observation-parent-education-level-carmen-teresa-lee-w-edit)
  * insert addNamedEntryComposition(mothersPresentJob, Observation, observation-present-job-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersRaceEthnicity, Observation, observation-input-race-and-ethnicity-carmen-teresa-lee)
* section[fatherInformation]
  * insert addReferenceComposition(focus,RelatedPerson, relatedperson-father-natural-tom-yan-lee)
  * insert addNamedEntryComposition(fathersPresentJob, Observation, observation-present-job-tom-yan-lee)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/composition-jurisdiction-live-birth-babyg-quinn.fsh

Instance: composition-jurisdiction-live-birth-babyg-quinn
InstanceOf: CompositionJurisdictionLiveBirthReport
Title: "Composition - Jurisdiction Live Birth Report - BabyG Quinn"
Description: "Composition - Jurisdiction Live Birth Report: BabyG Quinn example"
Usage: #example
* identifier.value = "c03eab8c-11e8-4d0c-ad2a-b385395e27df"
* status = #final
* type = $loinc#92011-6 "Jurisdiction live birth report Document"
* insert addReferenceComposition(subject,Patient, patient-child-babyg-quinn)
* insert addReferenceComposition(encounter,Encounter, encounter-birth-babyg-quinn)
* insert addReferenceComposition(encounter.extension[Extension-encounter-maternity-reference].valueReference,Encounter, encounter-maternity-jada-ann-quinn)
* date = "2019-02-12"
* insert addReferenceComposition(author, Organization, organization-jurisdictional-vital-records-office) 
* title = "Jurisdiction live birth report Document"
* section[motherPrenatal]
  // * title = "Mother (prenatal) Section on the Live Birth Certificate"
  // * code = $loinc#57073-9 "Prenatal records"
  * insert addReferenceComposition(focus,Patient, patient-mother-jada-ann-quinn)
  * insert addNamedEntryComposition(firstPrenatalCareVisit, Observation, observation-date-of-first-prenatal-care-visit-jada-ann-quinn)
  * insert addNamedEntryComposition(numberPrenatalCareVisits, Observation, observation-number-prenatal-visits-jada-ann-quinn)
  * insert addNamedEntryComposition(dateLastNormalMenses, Observation, observation-last-menstrual-period-jada-ann-quinn)
  * insert addNamedEntryComposition(numberNowLiving, Observation, observation-number-births-now-living-jada-ann-quinn)
  * insert addNamedEntryComposition(numberNowDead, Observation, observation-number-births-now-dead-jada-ann-quinn)
  * insert addNamedEntryComposition(dateLastLiveBirth, Observation, observation-date-of-last-live-birth-jada-ann-quinn)
  * insert addNamedEntryComposition(numberOtherOutcomes, Observation, observation-number-other-pregnancy-outcomes-jada-ann-quinn)
  * insert addNamedEntryComposition(dateLastOtherOutcome, Observation, observation-date-of-last-other-pregnancy-outcome-jada-ann-quinn)  
  * insert addNamedEntryComposition(principalSourceOfPayment, Coverage, coverage-principal-payer-for-delivery-jada-ann-quinn) 
  * insert addNamedEntryComposition(mothersWeightAtDelivery, Observation, observation-mother-delivery-weight-jada-ann-quinn-w-edit)   
  * insert addNamedEntryComposition(mothersHeight, Observation, observation-mother-height-jada-ann-quinn-w-edit)
  * insert addNamedEntryComposition(mothersPrepregnancyWeight, Observation, observation-mother-prepregnancy-weight-jada-ann-quinn-w-edit)
  * insert addNamedEntryComposition(motherReceivedWICFood, Observation, observation-mother-received-wic-food-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-1-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-2-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-3-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-4-jada-ann-quinn)

* section[medicalHealthInformation]
  // * title = "Medical Health Information Section"
  // * code = $loinc#55752-0 "Clinical information"
  * insert addReferenceComposition(focus,Patient, patient-mother-jada-ann-quinn)
  // removing because there is no pregnancy risk factor example for baby quinn 
  // based on this profile http://hl7.org/fhir/us/vr-common-library/StructureDefinition-Observation-pregnancy-risk-factor.html
  //* entry[pregnancyRiskFactors]
    // this example was previously unreferenced
    //* reference = "Observation/observation-pregnancy-risk-factor-jada-ann-quinn-4"
    // this example does not exist in the published or unpublished version, but is referenced in the published version
    // * reference : "Observation/observation-pregnancy-risk-factor-jada-ann-quinn-1"
    // this is from the unpublished version
  * insert addNamedEntryComposition(obstetricProcedures, Procedure, procedure-obstetric-procedure-jada-ann-quinn) 
  * insert addNamedEntryComposition(numberPreviousCesareans, Observation, observation-number-previous-cesareans-jada-ann-quinn-w-edit) 
  * insert addNamedEntryComposition(infectionsDuringPregnancy, Condition, condition-infection-present-during-pregnancy-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Condition, condition-gestational-hypertension-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Condition, condition-prepregnancy-diabetes-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Procedure, procedure-infertility-treatment-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Procedure, procedure-artificial-insemination-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Condition, condition-chorioamnionitis-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Procedure, procedure-induction-of-labor-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Observation, observation-antibiotics-during-labor-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Procedure,  procedure-epidural-or-spinal-anesthesia-jada-ann-quinn) 
  * insert addNamedEntryComposition(fetalPresentation, Observation, observation-fetal-presentation-babyg-quinn) 
  * insert addNamedEntryComposition(finalRouteMethodDelivery, Procedure, procedure-final-route-method-delivery-babyg-quinn) 
  * insert addNamedEntryComposition(maternalMorbidity, Condition, condition-ruptured-uterus-jada-ann-quinn) 
* section[newbornInformation]
  // * title = "Newborn section on the Live Birth Certificate"
  // * code = $loinc#57075-4 "Newborn delivery information"
  * insert addNamedEntryComposition(birthWeight, Observation, observation-birth-weight-babyg-quinn-w-edit) 
  * insert addNamedEntryComposition(gestationalAgeAtDelivery, Observation, observation-gestational-age-at-delivery-babyg-quinn-w-edit) 
  * insert addNamedEntryComposition(APGARScore, Observation, observation-apgar-score-babyg-quinn-5-min) 
  * insert addNamedEntryComposition(APGARScore, Observation, observation-apgar-score-babyg-quinn-10-min) 
  * insert addNamedEntryComposition(numberLiveBirthsThisDelivery, Observation, observation-number-live-births-this-delivery-jada-ann-quinn) 
    // * entry[+]
  //   * reference = "Observation/observation-plurality-jada-ann-quinn"
  //   * display = "Observation - Plurality (Jada Ann Quinn)"
  * insert addNamedEntryComposition(abnormalConditionsNewborn, Procedure, procedure-antibiotic-sepsis-babyg-quinn) 
  * insert addNamedEntryComposition(congenitalAnomaliesNewborn, Condition, condition-congenital-anomaly-of-newborn-babyg-quinn) 
  * insert addNamedEntryComposition(congenitalAnomaliesNewborn, Condition, condition-congenital-anomaly-of-newborn-babyg-quinn-2) 
  * insert addNamedEntryComposition(infantLiving, Observation, observation-infant-living-babyg-quinn) 
  * insert addNamedEntryComposition(infantBreastfedAtDischarge, Observation, observation-infant-breastfed-at-discharge-babyg-quinn) 
* section[motherInformation]
  // * title = "Mother's Information Section"
  // * code = $loinc#92014-0 "Mother's administrative information"
  * insert addReferenceComposition(focus,Patient, patient-mother-jada-ann-quinn)
  * insert addNamedEntryComposition(marriedDuringPregnancy, Observation, observation-mother-married-during-pregnancy-jada-ann-quinn) 
  * insert addNamedEntryComposition(mothersEducation, Observation, observation-parent-education-level-jada-ann-quinn-w-edit)
  * insert addNamedEntryComposition(mothersPresentJob, Observation, observation-present-job-jada-ann-quinn)
  * insert addNamedEntryComposition(mothersRaceEthnicity, Observation, observation-input-race-and-ethnicity-jada-ann-quinn)
  * insert addNamedEntryComposition(ssnRequestedForChild, Observation, observation-ssn-requested-for-child-babyg-quinn) 
* section[fatherInformation]
  // * title = "Father's Information Section"
  // * code = $loinc#92013-2 "Father's Administrative Information"
  * insert addReferenceComposition(focus,RelatedPerson, relatedperson-father-natural-james-brandon-quinn-w-edit)
  * insert addNamedEntryComposition(paternityAcknowledgementSigned, Observation, observation-paternity-acknowledgement-signed-james-quinn-w-edit)
  * insert addNamedEntryComposition(fathersEducation, Observation, observation-parent-education-level-james-quinn-w-edit) 
  * insert addNamedEntryComposition(fathersPresentJob, Observation, observation-present-job-james-brandon-quinn)
  * insert addNamedEntryComposition(fathersRaceEthnicity, Observation, observation-input-race-and-ethnicity-james-quinn-w-edit)

  //* section[editFlags]
  // * title = "Edit Flags Section"
  // * code = $loinc#92012-4 "Edit flags section"
  // * entry[editFlagBirthweight] = Reference(observation-edit-birth-weight-babyg-quinn) "Observation - Edit flag birthweight"
  //* entry[editFlagEstimateOfGestation] = Reference(observation-edit-flag-estimate-of-gestation-example) "Observation - Edit flag estimate of gestation"
  //* entry[editFlagFathersDateOfBirth] = Reference(observation-edit-flag-fathers-date-of-birth-example) "Observation - Edit flag father's date of birth"
  //* entry[editFlagFathersEducation] = Reference(observation-edit-flag-fathers-education-example) "Observation - Edit flag father's education"
  // * entry[editFlagMothersDateOfBirth] = Reference(observation-edit-flag-mothers-date-of-birth-example) "Observation - Edit flag mother's date of birth"
  //* entry[editFlagMothersDeliveryWeight] = Reference(observation-edit-flag-mothers-delivery-weight-example) "Observation - Edit flag mother's delivery weight"
  //* entry[editFlagMothersEducation] = Reference(observation-edit-flag-mothers-education-example) "Observation - Edit flag mother's education"
  //* entry[editFlagMothersHeight] = Reference(observation-edit-flag-mothers-height-example) "Observation - Edit flag mother's height"
  //* entry[editFlagMothersPrepregnancyWeight] = Reference(observation-edit-flag-mothers-prepregnancy-weight-example) "Observation - Edit flag mother's prepregnancy weight"
  //* entry[editFlagNumberPrenatalCareVisits] = Reference(observation-edit-flag-number-prenatal-care-visits-example) "Observation - Edit flag number prenatal care visits"
  //* entry[editFlagNumberPreviousCesareans] = Reference(observation-edit-flag-number-previous-cesareans-example) "Observation - Edit flag number previous cesareans"
  //* entry[editFlagPlurality] = Reference(observation-edit-flag-plurality-example) "Observation - Edit flag plurality"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/composition-provider-fetal-death-not-named.fsh

Instance: composition-provider-fetal-death-not-named
InstanceOf: CompositionProviderFetalDeathReport
Title: "Composition - Provider Fetal Death Report - Fetus Not Named"
Description: "Composition - Provider Fetal Death Report: Fetus Not Named"
Usage: #example
* status = #final
* type = $loinc#69045-3 "U.S. standard report of fetal death - 2003 revision"
* insert addReferenceComposition(subject,Patient, patient-decedent-fetus-not-named)
// * subject = Reference() "Patient - Decedent Fetus (Fetus Not Named)"
* insert addReferenceComposition(encounter,Encounter, encounter-maternity-carmen-teresa-lee)
//* encounter = Reference(encounter-maternity-carmen-teresa-lee) "Encounter - Maternity (Carmen Teresa Lee)"
* insert addReferenceComposition(author, Practitioner, practitioner-vital-records-jessica-leung)
* date = "2019-01-09"
* title = "Provider fetal death report Document"
* section[motherPrenatal]
  // * title = "Mother (prenatal) Section on the Fetal Death Report"
  // * code = $loinc#57073-9 "Prenatal records"
  * insert addReferenceComposition(focus, Patient, patient-mother-carmen-teresa-lee)
  * insert addNamedEntryComposition(firstPrenatalCareVisit, Observation, observation-date-of-first-prenatal-care-visit-carmen-teresa-lee)
  * insert addNamedEntryComposition(dateLastNormalMenses, Observation, observation-last-menstrual-period-carmen-teresa-lee)
  * insert addNamedEntryComposition(numberNowLiving, Observation, observation-number-births-now-living-carmen-teresa-lee)
  * insert addNamedEntryComposition(numberNowDead, Observation, observation-number-births-now-dead-carmen-teresa-lee)
  * insert addNamedEntryComposition(dateLastLiveBirth, Observation, observation-date-of-last-live-birth-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersHeight, Observation, observation-mother-height-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersPrepregnancyWeight, Observation, observation-mother-prepregnancy-weight-carmen-teresa-lee)
  * insert addNamedEntryComposition(motherReceivedWICFood, Observation, observation-mother-received-wic-food-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-1-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-2-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-3-carmen-teresa-lee)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-4-carmen-teresa-lee)
* section[medicalHealthInformation]
  // * title = "Medical and Health Information on the Fetal Death Report"
  // * code = $loinc#55752-0 "Clinical information"
  * insert addReferenceComposition(focus, Patient, patient-mother-carmen-teresa-lee)
  * insert addNamedEntryComposition(numberPreviousCesareans, Observation, observation-number-previous-cesareans-carmen-teresa-lee)
  * insert addNamedEntryComposition(fetalPresentation, Observation, observation-fetal-presentation-not-named)
  * insert addNamedEntryComposition(finalRouteMethodDelivery, Procedure, procedure-final-route-method-delivery-not-named)
  * insert addNamedEntryComposition(pregnancyRiskFactors, Condition, condition-gestational-diabetes-carmen-teresa-lee)
* section[fetus]
  // * title = "Fetal delivery information section on the Fetal Death Report"
  // * code = $loinc#76400-1 "Fetal delivery information Document [US Standard Report of Fetal Death]"
  * insert addNamedEntryComposition(deliveryWeight, Observation, observation-birth-weight-not-named)
  * insert addNamedEntryComposition(gestationalAgeAtDelivery, Observation, observation-gestational-age-at-delivery-not-named)
  * insert addNamedEntryComposition(causeOfFetalDeath, Condition, condition-fetal-death-cause-or-condition-not-named)
  * insert addNamedEntryComposition(otherCauseOfDeath, Condition, condition-fetal-death-other-significant-cause-not-named)
  * insert addNamedEntryComposition(estimatedTimeFetalDeath, Observation, observation-fetal-death-time-point-not-named)
  * insert addNamedEntryComposition(autopsyPerformed, Observation, observation-autopsy-performed-not-named)
  * insert addNamedEntryComposition(histologicalExamPerformed, Observation, observation-histological-placental-exam-performed-not-named)
  * insert addNamedEntryComposition(autopsyOrHistologicalExamUsed, Observation, observation-autopsy-histological-exam-results-used-not-named)
  * insert addNamedEntryComposition(numberFetalDeathsThisDelivery, Observation, observation-number-deaths-this-delivery-carmen-teresa-lee)

* section[motherInformation]
  // * title = "Mother Administrative Section on the Fetal Death Report"
  // * code = $loinc#92014-0 "Mother's administrative information"
  * insert addReferenceComposition(focus, Patient, patient-mother-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersEducation, Observation, observation-parent-education-level-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersPresentJob, Observation, observation-present-job-carmen-teresa-lee)
  * insert addNamedEntryComposition(mothersRaceEthnicity, Observation, observation-input-race-and-ethnicity-carmen-teresa-lee)
* section[fatherInformation]
  * insert addReferenceComposition(focus,RelatedPerson, relatedperson-father-natural-tom-yan-lee)
  * insert addNamedEntryComposition(fathersPresentJob, Observation, observation-present-job-tom-yan-lee)
* section[patientsQuestionnaireResponse]
  * title = "Patient's QuestionnaireResponse Section"
  // * code = $loinc#74465-6 "Questionnaire response Document"
  * insert addReferenceComposition(focus, Patient, patient-mother-carmen-teresa-lee)
  * insert addentryComposition(QuestionnaireResponse, QuestionnaireResponse-patients-fetal-death-carmen-lee)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/instancesBundlesCompositions/composition-provider-live-birth-babyg-quinn.fsh

Instance: composition-provider-live-birth-babyg-quinn
InstanceOf: CompositionProviderLiveBirthReport
Title: "Composition - Provider Live Birth Report - BabyG Quinn"
Description: "Composition - Provider Live Birth Report: BabyG Quinn example"
Usage: #example
* status = #final
* type = $loinc#68998-4 "U.S. standard certificate of live birth - 2003 revision"
* insert addReferenceComposition(subject,Patient, patient-child-babyg-quinn)
* insert addReferenceComposition(encounter,Encounter, encounter-birth-babyg-quinn)
* insert addReferenceComposition(encounter.extension[Extension-encounter-maternity-reference].valueReference,Encounter, encounter-maternity-jada-ann-quinn)
// * encounter
//   * extension
//     * url = "http://hl7.org/fhir/us/bfdr/StructureDefinition/Extension-encounter-maternity-reference"
//     * valueReference.reference = "Encounter/encounter-maternity-jada-ann-quinn"
//   * reference = "Encounter/encounter-birth-babyg-quinn"
//   * display = "Encounter - Birth (Baby G Quinn)"
* date = "2019-02-12"
* insert addReferenceComposition(author, Practitioner, practitioner-vital-records-avery-jones) 
* title = "Provider supplied live birth report Document"
* section[motherPrenatal]
  // * title = "Mother (prenatal) Section on the Live Birth Certificate"
  // * code = $loinc#57073-9 "Prenatal records"
  * insert addReferenceComposition(focus,Patient, patient-mother-jada-ann-quinn)
  * insert addNamedEntryComposition(firstPrenatalCareVisit, Observation, observation-date-of-first-prenatal-care-visit-jada-ann-quinn)
  * insert addNamedEntryComposition(numberPrenatalCareVisits, Observation, observation-number-prenatal-visits-jada-ann-quinn)
  * insert addNamedEntryComposition(dateLastNormalMenses, Observation, observation-last-menstrual-period-jada-ann-quinn)
  * insert addNamedEntryComposition(numberNowLiving, Observation, observation-number-births-now-living-jada-ann-quinn)
  * insert addNamedEntryComposition(numberNowDead, Observation, observation-number-births-now-dead-jada-ann-quinn)
  * insert addNamedEntryComposition(dateLastLiveBirth, Observation, observation-date-of-last-live-birth-jada-ann-quinn)
  * insert addNamedEntryComposition(numberOtherOutcomes, Observation, observation-number-other-pregnancy-outcomes-jada-ann-quinn)
  * insert addNamedEntryComposition(dateLastOtherOutcome, Observation, observation-date-of-last-other-pregnancy-outcome-jada-ann-quinn)  
  * insert addNamedEntryComposition(principalSourceOfPayment, Coverage, coverage-principal-payer-for-delivery-jada-ann-quinn) 
  * insert addNamedEntryComposition(mothersWeightAtDelivery, Observation, observation-mother-delivery-weight-jada-ann-quinn)   
  * insert addNamedEntryComposition(mothersHeight, Observation, observation-mother-height-jada-ann-quinn)
  * insert addNamedEntryComposition(mothersPrepregnancyWeight, Observation, observation-mother-prepregnancy-weight-jada-ann-quinn)
  * insert addNamedEntryComposition(motherReceivedWICFood, Observation, observation-mother-received-wic-food-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-1-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-2-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-3-jada-ann-quinn)
  * insert addNamedEntryComposition(cigaretteSmokingBeforeDuringPregnancy, Observation, observation-cig-smoking-pregnancy-4-jada-ann-quinn)
* section[medicalHealthInformation]
  // * title = "Medical Health Information Section"
  // * code = $loinc#55752-0 "Clinical information"
  * insert addReferenceComposition(focus,Patient, patient-mother-jada-ann-quinn)
  * insert addNamedEntryComposition(obstetricProcedures, Procedure, procedure-obstetric-procedure-jada-ann-quinn) 
  * insert addNamedEntryComposition(numberPreviousCesareans, Observation, observation-number-previous-cesareans-jada-ann-quinn) 
  * insert addNamedEntryComposition(infectionsDuringPregnancy, Condition, condition-infection-present-during-pregnancy-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Condition, condition-gestational-hypertension-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Condition, condition-prepregnancy-diabetes-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Procedure, procedure-infertility-treatment-jada-ann-quinn) 
  * insert addNamedEntryComposition(pregnancyRiskFactors, Procedure, procedure-artificial-insemination-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Condition, condition-chorioamnionitis-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Procedure, procedure-induction-of-labor-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Observation, observation-antibiotics-during-labor-jada-ann-quinn) 
  * insert addNamedEntryComposition(characteristicsLaborDelivery, Procedure,  procedure-epidural-or-spinal-anesthesia-jada-ann-quinn) 
  * insert addNamedEntryComposition(fetalPresentation, Observation, observation-fetal-presentation-babyg-quinn) 
  * insert addNamedEntryComposition(finalRouteMethodDelivery, Procedure, procedure-final-route-method-delivery-babyg-quinn) 
  * insert addNamedEntryComposition(maternalMorbidity, Condition, condition-ruptured-uterus-jada-ann-quinn) 
* section[newbornInformation]
  // * title = "Newborn section on the Live Birth Certificate"
  // * code = $loinc#57075-4 "Newborn delivery information"
  * insert addNamedEntryComposition(birthWeight, Observation, observation-birth-weight-babyg-quinn) 
  * insert addNamedEntryComposition(gestationalAgeAtDelivery, Observation, observation-gestational-age-at-delivery-babyg-quinn) 
  * insert addNamedEntryComposition(APGARScore, Observation, observation-apgar-score-babyg-quinn-5-min) 
  * insert addNamedEntryComposition(APGARScore, Observation, observation-apgar-score-babyg-quinn-10-min) 
  * insert addNamedEntryComposition(numberLiveBirthsThisDelivery, Observation, observation-number-live-births-this-delivery-jada-ann-quinn) 
  * insert addNamedEntryComposition(congenitalAnomaliesNewborn, Condition, condition-congenital-anomaly-of-newborn-babyg-quinn) 
  * insert addNamedEntryComposition(congenitalAnomaliesNewborn, Condition, condition-congenital-anomaly-of-newborn-babyg-quinn-2)
  * insert addNamedEntryComposition(abnormalConditionsNewborn, Procedure, procedure-antibiotic-sepsis-babyg-quinn)  
  * insert addNamedEntryComposition(infantLiving, Observation, observation-infant-living-babyg-quinn) 
  * insert addNamedEntryComposition(infantBreastfedAtDischarge, Observation, observation-infant-breastfed-at-discharge-babyg-quinn) 
* section[motherInformation]
  // * title = "Mother's Information Section"
  // * code = $loinc#92014-0 "Mother's administrative information"
  * insert addReferenceComposition(focus,Patient, patient-mother-jada-ann-quinn)
  * insert addNamedEntryComposition(marriedDuringPregnancy, Observation, observation-mother-married-during-pregnancy-jada-ann-quinn) 
  * insert addNamedEntryComposition(mothersEducation, Observation, observation-parent-education-level-jada-ann-quinn)
  * insert addNamedEntryComposition(mothersPresentJob, Observation, observation-present-job-jada-ann-quinn)
  * insert addNamedEntryComposition(mothersRaceEthnicity, Observation, observation-input-race-and-ethnicity-jada-ann-quinn)
  * insert addNamedEntryComposition(ssnRequestedForChild, Observation, observation-ssn-requested-for-child-babyg-quinn) 
* section[fatherInformation]
  // * title = "Father's Information Section"
  // * code = $loinc#92013-2 "Father's Administrative Information"
  * insert addReferenceComposition(focus,RelatedPerson, relatedperson-father-natural-james-brandon-quinn)
  * insert addNamedEntryComposition(paternityAcknowledgementSigned, Observation, observation-paternity-acknowledgement-signed-james-quinn)
  * insert addNamedEntryComposition(fathersEducation, Observation, observation-parent-education-level-james-quinn) 
  * insert addNamedEntryComposition(fathersPresentJob, Observation, observation-present-job-james-brandon-quinn)
  * insert addNamedEntryComposition(fathersRaceEthnicity, Observation, observation-input-race-and-ethnicity-james-quinn)  
* section[patientsQuestionnaireResponse]
  // * title = "Mother's QuestionnaireResponse Section"
  // * code = $loinc#74465-6 "Questionnaire response Document"
  * insert addReferenceComposition(focus, Patient, patient-mother-jada-ann-quinn)
  * insert addentryComposition(QuestionnaireResponse, QuestionnaireResponse-mothers-live-birth-jada-quinn)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/mappings/fetal-death-report-for-ObservationFetalDeathTimePoint.fsh

Mapping: fetal-death-report-for-ObservationFetalDeathTimePoint
Id: fetal-death-report
Title: "U.S. Standard Report of Fetal Death (rev. 2003)"
Description: "This table maps profile elements to  U.S. Standard Report of Fetal Death (rev. 2003)"
Source: ObservationFetalDeathTimePoint
Target: "https://www.cdc.gov/nchs/data/dvs/FDEATH11-03finalACC.pdf"
* value[x] -> "18e. Estimated Time of Fetal Death"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/mappings/fetal-death-report-for-ObservationFetalPresentation.fsh

Mapping: fetal-death-report-for-ObservationFetalPresentation
Id: fetal-death-report
Title: "U.S. Standard Report of Fetal Death (rev. 2003)"
Description: "This table maps profile elements to  U.S. Standard Report of Fetal Death (rev. 2003)"
Source: ObservationFetalPresentation
Target: "https://www.cdc.gov/nchs/data/dvs/FDEATH11-03finalACC.pdf"
* value[x] -> "38c. Fetal presentation at delivery"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/mappings/live-birth-certificate.fsh

Mapping: live-birth-certificate
Id: live-birth-certificate
Title: "U.S. Standard Certificate of Live Birth (rev. 2003)"
Description: "This table maps profile elements to U.S. Standard Certificate of Live Birth (rev. 2003)"
Source: ObservationFetalPresentation
Target: "https://www.cdc.gov/nchs/data/dvs/birth11-03final-ACC.pdf"
* value[x] -> "46c. Fetal presentation at birth"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionChorioamnionitis.fsh

Profile: ConditionChorioamnionitis
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-chorioamnionitis
Title: "Condition - Chorioamnionitis"
Description: "This Condition profile indicates a labor and delivery characteristic of chorioamnionitis."
* . ^short = "This Condition profile indicates a labor and delivery characteristic of chorioamnionitis."
* insert CategorySlicingRules
* category[requiredCategory] = $loinc#73813-8
  * ^short = "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
* code = $sct#11612004
  * ^short = "Chorioamnionitis (disorder)"
* subject only Reference(PatientMotherVitalRecords)
* clinicalStatus = $condition-clinical#active "Active"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionCongenitalAnomalyOfNewborn.fsh

Profile: ConditionCongenitalAnomalyOfNewborn
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-congenital-anomaly-of-newborn
Title: "Condition - Congenital Anomaly of Newborn"
Description: "This Condition profile represents information on whether the infant suffered from one or more of a list of known malformations diagnosed prenatally or after delivery.

In the case the infant suffers from a chromosomal disorder or Down syndrome, a Karyotype status of confirmed or pending can be provided.  If neither is provided the status is unknown."
* . ^short = "Information on whether the infant suffered from one or more of a list of known malformations diagnosed prenatally or after delivery."
* insert CategorySlicingRules
* category[requiredCategory] = $loinc#73780-9
  * ^short = "Congenital anomalies of the newborn [US Standard Certificate of Live Birth]"
* code from NewbornCongenitalAnomaliesVS (required)
  * ^short = "The value set contain the list of values use to specify malformations of the newborn diagnosed prenatally or after delivery."
  * ^binding.description = "Newborn Congenital Anomalies (NCHS)"
* subject only Reference(PatientChildVitalRecords)
* evidence 0..1 
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
* evidence ^short = "In the case there is a diagnosis of syspected chromosomal disorder or Down syndrome, a Karyotype status of confirmed or pending can be provided.  Lack of karyotype status signifies status is unknown."
* evidence contains
    karyotypePending 0..1 and
    karyotypeConfirmedAbmormal 0..1 
* evidence[karyotypePending] ^short = "Karyotype pending if there is a diagnosis of suspected chromosomal disorder or Down syndrome, Trisomy 21."
  * code 1..1 
  * code = $sct#312948004
    * ^short = "Suspected chromosomal disorder or Down Syndrome: Karyotype pending"
* evidence[karyotypeConfirmedAbmormal] ^short = "Karyotype confirmed if there is a diagnosis of suspected chromosomal disorder or Down syndrome, Trisomy 21."
  * code 1..1 
  * code = $sct#442124003
    * ^short = "Suspected chromosomal disorder or Down Syndrome: Karyotype confirmed"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionEclampsiaHypertension.fsh

Profile: ConditionEclampsiaHypertension
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-eclampsia-hypertension
Title: "Condition - Eclampsia Hypertension"
Description: "This Condition profile indicates that the mother had a pregnancy risk factor of eclampsia hypertension."
* insert CategorySlicingRules
* category[requiredCategory] =  $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code = $sct#15938005
  * ^short = "Eclampsia (disorder)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionFetalDeathInitiatingCauseOrCondition.fsh

Profile: ConditionFetalDeathInitiatingCauseOrCondition
Parent: USCoreConditionEncounterDiagnosisProfile
Id: Condition-fetal-death-initiating-cause-or-condition
Title: "Condition - Fetal Death Initiating Cause or Condition"
Description: "This Condition profile should be used by the clinician to indicate the initiating cause of fetal death."
* . ^short = "Information provided by the clinician to indicate the initiating cause of the fetal death."
* category contains initiatingCauseOrCondition 1..1 
* category[initiatingCauseOrCondition] = $loinc#76060-3
  * ^short = "Initiating cause or condition of fetal death [US Standard Report of Fetal Death]"
* code from FetalDeathCauseOrConditionVS (required)
  * ^short = "The value sets contains the list of values used to report initiating cause or condition or other significant causes or conditions contributing to fetal death."
  * ^binding.description = "Fetal Death Cause or Condition (NCHS)"
  * coding 
    * ^short = "The type of cause or condition should be selected from the bound value set."
  * text 
    * ^short = "Any further specification should be entered as free text to fully record the provider's view of the cause."
* subject only Reference(PatientDecedentFetus)
* clinicalStatus = $condition-clinical#active "Active"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionFetalDeathOtherCauseOrCondition.fsh

Profile: ConditionFetalDeathOtherCauseOrCondition
Parent: USCoreConditionEncounterDiagnosisProfile
Id: Condition-fetal-death-other-cause-or-condition
Title: "Condition - Fetal Death Other Cause or Condition"
Description: "This Condition profile should be used to indicate other significant causes or conditions for the death of the fetus."
* . ^short = "Another significant cause or condition for the death of the fetus."
* insert CategorySlicingRules
* category[requiredCategory] = $loinc#76061-1
  * ^short = "Other significant causes or conditions of fetal death [US Standard Report of Fetal Death]"
* code from FetalDeathCauseOrConditionVS (required)
  * ^short = "The value sets contains the list of values used to report initiating cause or condition or other significant causes or conditions contributing to fetal death."
  * ^binding.description = "Fetal Death Cause or Condition (NCHS)"
  * coding 
    * ^short = "The type of cause or condition should be selected from the bound value set."
  * text 
    * ^short = "Any further specification should be entered as free text to fully record the provider's view of the cause."
* subject only Reference(PatientDecedentFetus)
* clinicalStatus = $condition-clinical#active "Active"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionGestationalDiabetes.fsh

Profile: ConditionGestationalDiabetes
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-gestational-diabetes
Title: "Condition - Gestational Diabetes"
Description: "This Condition profile indicates that the mother had a pregnancy risk factor of gestational diabetes."
* insert CategorySlicingRules
* category[requiredCategory] =  $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code = $sct#11687002
  * ^short = "Gestational diabetes mellitus (disorder)"
* subject only Reference(PatientMotherVitalRecords)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionGestationalHypertension.fsh

Profile: ConditionGestationalHypertension
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-gestational-hypertension
Title: "Condition - Gestational Hypertension"
Description: "This Condition profile indicates that the mother had a pregnancy risk factor of gestational hypertension."
* insert CategorySlicingRules
* category[requiredCategory] =  $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code = $sct#48194001
  * ^short = "Pregnancy-induced hypertension (disorder)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionInfectionPresentDuringPregnancy.fsh

Profile: ConditionInfectionPresentDuringPregnancy
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-infection-present-during-pregnancy
Title: "Condition - Infection Present During Pregnancy"
Description: "This Condition profile represents infections present and/or treated during the pregnancy."
* . ^short = "Information on infections present and/or treated during the pregnancy. This includes infections present at the start of pregnancy or confirmed diagnosis during pregnancy with or without documentation of treatment. Documentation of treatment during this pregnancy is adequate if a definitive diagnosis is not present in the available record."
* insert CategorySlicingRules
* category[requiredCategory] = $loinc#72519-2
  * ^short = "Infections present and/or treated during this pregnancy for live birth [US Standard Certificate of Live Birth]"
* code from InfectionsDuringPregnancyLiveBirthVS (required)
  * ^short = "Infections present and/or treated during this pregnancy for live birth as required by the National US Standards. Note: Genital herpes simplex (SNOMED code 33839006) is only a Michigan state-specific requirement."
  * ^binding.description = "Infections During Pregnancy - Live Birth (NCHS)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionPerinealLaceration.fsh

Profile: ConditionPerinealLaceration
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-perineal-laceration
Title: "Condition - Perineal Laceration"
Description: "This Condition profile indicates a maternal morbidity of perineal laceration."
* . ^short = "This Condition profile indicates a maternal morbidity of perineal laceration."
* insert CategorySlicingRules
* category[requiredCategory] =  $loinc#73781-7
  * ^short = "Maternal morbidity [US Standard Certificate of Live Birth]"
* code = $sct#398019008
  * ^short = "Perineal laceration during delivery (disorder)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionPrepregnancyDiabetes.fsh

Profile: ConditionPrepregnancyDiabetes
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-prepregnancy-diabetes
Title: "Condition - Prepregnancy Diabetes"
Description: "This Condition profile indicates that the mother had a pregnancy risk factor of prepregnancy diabetes."
* insert CategorySlicingRules
* category[requiredCategory] = $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code = $sct#73211009
  * ^short = "Diabetes mellitus (disorder)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionPrepregnancyHypertension.fsh

Profile: ConditionPrepregnancyHypertension
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-prepregnancy-hypertension
Title: "Condition - Prepregnancy Hypertension"
Description: "This Condition profile indicates that the mother had a pregnancy risk factor of prepregnancy hypertension."
// * category[uscore][+] = $condition-category#problem-list-item
* insert CategorySlicingRules
* category[requiredCategory] =  $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code = $sct#38341003
  * ^short = "Hypertensive disorder, systemic arterial (disorder)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionRupturedUterus.fsh

Profile: ConditionRupturedUterus
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-ruptured-uterus
Title: "Condition - Ruptured Uterus"
Description: "This Condition profile indicates a maternal morbidity of ruptured uterus."
* . ^short = "This Condition profile indicates a maternal morbidity of ruptured uterus."
* insert CategorySlicingRules
* category[requiredCategory] =  $loinc#73781-7
  * ^short = "Maternal morbidity [US Standard Certificate of Live Birth]"
* code = $sct#34430009
  * ^short = "Rupture of uterus (disorder)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ConditionSeizure.fsh

Profile: ConditionSeizure
Parent: USCoreConditionProblemsHealthConcernsProfile
Id: Condition-seizure
Title: "Condition - Seizure"
Description: "This Condition profile indicates the newborn had an abnormal condition of seizure."
* . ^short = "This Condition profile indicates the newborn had an abnormal condition of seizure."
* insert CategorySlicingRules
* category[requiredCategory] = $loinc#73812-0
  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* code = $sct#91175000
  * ^short = "Seizure (finding)"
* subject only Reference(PatientChildVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/CoveragePrincipalPayerDelivery.fsh

Profile: CoveragePrincipalPayerDelivery
Parent: Coverage
Id: Coverage-principal-payer-delivery
Title: "Coverage - Principal Payer for Delivery"
Description: "This Coverage profile represents the principal payer for this delivery."
* type 1.. 
* type from BirthAndFetalDeathFinancialClassVS (required)
  * ^short = "The value set contains the list of values used to indicate the principle source of payment for the labor and delivery (from codesystem https://nahdo.org/sopt)."
  * ^binding.description = "Birth and Fetal Death Financial Class (NCHS)"
* payor.extension ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "url"
  * ^slicing.rules = #open
* payor.extension contains $data-absent-reason named dataAbsentReason 0..1 

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/EncounterBirth.fsh

Profile: EncounterBirth
Parent: USCoreEncounterProfile
Id: Encounter-birth
Title: "Encounter - Birth"
Description: "This Encounter profile represents the child's birth encounter."
* extension contains    // Extension makes it possible to query this encounter from bundle with simple FHIRPath query
    ExtensionRole named role 1..1
* extension[role].valueCodeableConcept = $v3-RoleCode#CHILD
* extension[role] ^short = "Differentiates Birth and Maternity Encounters."
* subject 1..1 
* subject only Reference(PatientChildVitalRecords)
* participant 
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* participant contains
    attendant 0..* and
    certifier 0..* 
* participant[attendant] ^short = "The person responsible for delivering the child."
  * ^definition = "The attendant at birth is defined as the individual at the delivery who is responsible for the delivery. For example, if an intern or nurse-midwife delivers an infant under the supervision of an obstetrician who is present in the delivery room, the obstetrician is to be reported as the attendant. However, a person who is not physically present at the delivery should not be reported as the attendant. For example, if the obstetrician is not physically present, the intern or nurse-midwife MUST be reported as the attendant."
  * type 1.. 
  * insert TypeSlicingRules
  * type[requiredType] = $loinc#87286-1
    * ^short = "Birth attendant [Extended Identifier]"
    * ^definition = "Birth attendant [Extended Identifier]"
  * individual 1.. 
  * individual only Reference(PractitionerBirthAttendant)
* participant[certifier] ^short = "The individual who certifies to the fact that the birth occurred."
  * ^definition = "The individual who certifies to the fact that the birth occurred. May be, but need not be, the same as the attendant at birth."
  * type 1.. 
  * insert TypeSlicingRules
  * type[requiredType] = $loinc#87287-9
    * ^short = "Birth certifier [Extended Identifier]"
    * ^definition = "Birth certifier [Extended Identifier]"
  * period.start 
    * ^short = "Date certified"
    * ^definition = "Date certified."
  * individual 1.. 
  * individual only Reference(PractitionerBirthCertifier)
* hospitalization 
  * destination only Reference(LocationBFDR)
  * destination
    * ^short = "If infant transferred, facility transferred to"
    * ^definition = "If infant transferred, facility transferred to"
  * dischargeDisposition 
    * ^short = "If infant transferred within 24 hours of delivery, set code = \"other-hcf\" (Other healthcare facility) from codesystem https://terminology.hl7.org/5.4.0/CodeSystem-discharge-disposition.html"
    * ^definition = "If infant transferred within 24 hours of delivery, set code = \"other-hcf\" (Other healthcare facility): the patient was transferred to another healthcare facility."
* location 
  * ^short = "Information about the location of birth"
  * ^definition = "Information about the location of birth"
  * location only Reference(LocationBFDR)
  * location 
    * ^short = "Facility where birth occurred"
  * physicalType 
  * physicalType from BirthDeliveryOccurredVS (preferred)
    * ^short = "The value set contains the list of values used to indicate the type of place where birth or delivery occurred."
    * ^definition = "Place where birth occurred (type of place)"
    * ^binding.description = "Birth or Delivery Occurred (NCHS)"
* partOf only Reference(EncounterMaternity)
* partOf 
  * ^short = "Reference to the mother's maternity encounter"
  * ^definition = "Reference to the mother's maternity encounter"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/EncounterMaternity.fsh

Profile: EncounterMaternity
Parent: USCoreEncounterProfile
Id: Encounter-maternity
Title: "Encounter - Maternity"
Description: "This Encounter profile represents the mother's maternity encounter."
* extension contains   // Extension makes it possible to query this encounter from bundle with simple FHIRPath query
    ExtensionRole named role 1..1
* extension[role].valueCodeableConcept = $v3-RoleCode#MTH 
* extension[role] ^short = "Differentiates Birth and Maternity Encounters."
* identifier 
* status 
* class 
* subject 1..1 
* subject only Reference(PatientMotherVitalRecords)
* participant 
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* participant contains
    attendant 0..* and
    certifier 0..* 
* participant[attendant] ^short = "The person responsible for delivering the child/fetus."
  * ^definition = "The attendant at birth/delivery is defined as the individual at the delivery who is responsible for the delivery. For example, if an intern or nurse-midwife delivers an infant/fetus under the supervision of an obstetrician who is present in the delivery room, the obstetrician is to be reported as the attendant. However, a person who is not physically present at the delivery should not be reported as the attendant. For example, if the obstetrician is not physically present, the intern or nurse-midwife MUST be reported as the attendant."
  * type 1..1 
  * type = $loinc#87286-1
    * ^short = "Birth attendant [Extended Identifier]"
    * ^definition = "Birth attendant [Extended Identifier]"
  * individual 1.. 
  * individual only Reference(PractitionerBirthAttendant)
* participant[certifier] ^short = "The individual who certifies to the fact that the birth occurred."
  * ^definition = "The individual who certifies to the fact that the birth occurred. May be, but need not be, the same as the attendant at birth."
  * type 1..1 
  * type = $loinc#87287-9
    * ^short = "Birth certifier [Extended Identifier]"
    * ^definition = "Birth certifier [Extended Identifier]"
  * period.start 
    * ^short = "Date certified"
    * ^definition = "Date certified."
  * individual 1.. 
  * individual only Reference(PractitionerBirthCertifier)
* period 
* hospitalization 
  * origin only Reference(LocationBFDR)
  * origin 
    * ^short = "If mother transferred, facility transferred from"
    * ^definition = "If mother transferred, facility transferred from"
  * admitSource 
    * ^short = "If mother transferred for delivery set code = \"hosp-trans\" (Transferred from other hospital) from codesystem http://terminology.hl7.org/CodeSystem/admit-source."
    * ^definition = "If mother transferred for maternal medical or fetal indications for delivery set code = \"hosp-trans\" (Transferred from other hospital): The Patient has been transferred from another hospital for this encounter."
* location 
  * ^short = "Information about the location of delivery"
  * ^definition = "Information about the location of devivery"
  * location only Reference(LocationBFDR)
  * location 
    * ^short = "Facility name (if not institution, give street and number)"
    * ^definition = "Facility name (if not institution, give street and number)"
    // * name ^short = "Name of delivery facility"
    * id ^short = "Facility ID"
    * identifier ^short = "Facility ID (state-assigned)"
    // * address.line ^short = "Place of delivery street address"
  * physicalType 
  * physicalType from BirthDeliveryOccurredVS (preferred)
    * ^short = "The value set contains the list of values used to indicate the type of place where birth or delivery occurred."
    * ^binding.description = "Birth or Delivery Occurred (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/LocationBFDR.fsh

Profile: LocationBFDR
Parent: LocationVitalRecords 
Id: Location-bfdr
Title: "Birth and Fetal Death Location"
Description: "Location used for source/destination of transfers and location of birth.  Includes all standard extensions"
* name ^short = "Name of Facility"
* type ^slicing.discriminator.type = #value
* type ^slicing.discriminator.path = "$this"
* type ^slicing.rules = #open
* type contains BFDR 1..*  // A single location instance could be used for multiple purposes
* type[BFDR] from LocationTypeVS (required)
* type[BFDR] ^short = "BFDR Location type"
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier.system 1..1 
* identifier.system only uri
* identifier.value 1..1 
* identifier.value only string
* identifier contains NPI 0..1
* identifier[NPI] ^patternIdentifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier[NPI] ^short = "Facility NPI Number"
* identifier.extension contains JurisdictionalFacilityIdentifier named JFI 0..1
* identifier.extension[JFI] ^short = "Jurisdictional Facility Identifier"
* address ^short = "Address of Location"
  * line ^short = "Street Address"
  * state ^short = "State"
  * district 
    * ^short = "County"
    * extension[districtCode] ^short = "County code"
  * city 
    * ^short = "City"
    * extension[cityCode] ^short = "City Code"
  * postalCode ^short = "Postal Code"
  * country ^short = "Country"
  * extension[predir] ^short = "Predirectional"
  * extension[postdir] ^short = "Postdirectional"
  * extension[stname] ^short = "Street Name"
  * extension[stnum] ^short = "Street Number"
  * extension[stdesig] ^short = "Street Designator"
  * extension[unitnumber] ^short = "Unit Number"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationAntibioticsAdministeredDuringLabor.fsh

Profile: ObservationAntibioticsAdministeredDuringLabor
Parent: Observation
Id: Observation-antibiotics-administered-during-labor
Title: "Observation - Antibiotics Administered During Labor"
Description: "This Observation profile indicates a characteristic of labor of antibiotics administered during labor."
* code = $loinc#73813-8
  * ^short = "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* focus 1..
* focus only Reference(PatientChildVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#434691000124101
  * ^short = "Antibacterial administered during labor (situation)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationApgarScore_new.fsh

//content from ObservationApgarVitalRecords moving from VRCL to BFDR. Changed to reference PatientChild profile in BFDR. Should it reference ValueSetApgarTiming in BFDR instead of VRCL?
Profile: ObservationApgarScore
Parent: USCoreObservationSurveyProfile
Id: Observation-apgar-score
Title: "Observation - APGAR Score"
Description: "APGAR score post-birth."
* code from ApgarTimingVS (required)
  * ^short = "Standard timings for APGAR assessments. Birth certificates only require 5 and 10 minute timings. Other use cases may require/accept other timings."
  * ^binding.description = "ApgarTiming"
* subject 1..
* subject only Reference(PatientChildVitalRecords)
* value[x] 1..
* value[x] only integer

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationAutopsyHistologicalExamResultsUsed.fsh

Profile: ObservationAutopsyHistologicalExamResultsUsed
Parent: Observation
Id: Observation-autopsy-histological-exam-results-used
Title: "Observation - Autopsy or Histological Exam Results Used"
Description: "This profile represents whether or not the results of a performed autopsy or a performed histological placental examination were used as part of determining the cause of death."
* code 1..1 
* code = $loinc#74498-7
  * ^short = "Autopsy or histological placental examination results were used [US Standard Report of Fetal Death]"
* subject 1.. 
* subject only Reference(PatientDecedentFetus)
* value[x] 1..1 
* value[x] only CodeableConcept
* value[x] from ValueSetYesNoNotApplicableVitalRecords (required)
  * ^short = "Were autopsy or histological placental examinations results used in determining the cause of fetal death?"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationAutopsyPerformedIndicator.fsh

Profile: ObservationAutopsyPerformedIndicator
Parent: Observation
Id: Observation-autopsy-performed-indicator
Title: "Observation - Autopsy Performed Indicator"
Description: "This Observation records if an autopsy was performed, if autopsy findings are available, and the autopsy Performer (US Core Practioner)."
* status MS
* code = $loinc#85699-7
  * ^short = "Autopsy was performed"
* code 
* subject 1..1 
* subject only Reference(PatientVitalRecords)
* performer ..1
  * ^short = "Autopsy Performer using USCorePractioner"
* value[x] 1..1 
* value[x] only CodeableConcept
* value[x] from PerformedNotPerformedPlannedVS (required)
* valueCodeableConcept 1..1
  * ^short = "Autopsy was performed?"
* component ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
* component contains autopsyResultsAvailable 0..1
* component[autopsyResultsAvailable] ^short = "Autopsy Results Available"
  * code = $loinc#69436-4
    * ^short = "Autopsy results available"
  * value[x] 1..1
  * value[x] only CodeableConcept
  * value[x] from ValueSetYesNoUnknownVitalRecords (required)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationBirthPluralityOfPregnancy.fsh


Profile: ObservationBirthPluralityOfPregnancy
Parent: Observation
Id: Observation-birth-plurality-of-pregnancy 
Title: "Observation - Birth Plurality of Pregnancy"
Description: "The number of fetuses delivered live or dead at any time in the pregnancy regardless of gestational age, or if the fetuses were delivered at different dates in the pregnancy. 

This profile is not explicitly mapped to an IJE value and supports encoding plurality as a characteristic of pregnancy (outside of the core BFDR use case)."
* code = $loinc#73773-4
  * ^short = "Birth plurality of Pregnancy"
* subject 1..1
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..1
* value[x] only integer

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationBirthWeight.fsh

//content from ObservationBirthWeightVitalRecords moving from VRCL to BFDR. Changed to reference PatientChild and PatientDecedentFetus profiles in BFDR.
Profile: ObservationBirthWeight
Parent: USCoreVitalSignsProfile
Id: Observation-birth-weight
Title: "Observation - Birth Weight"
Description: "The weight of the infant/fetus at birth/delivery (reported in grams)."
* code = $loinc#8339-4
  * ^short = "Birth weight Measured"
* category[VSCat] = $observation-category#vital-signs
* subject 1..
* subject only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* value[x] 1..
* value[x] only Quantity
* valueQuantity ^short = "Birth weight in grams"
  * code = $UCUM#g (exactly)
    * ^short = "grams"
  * value 1..1
// Add Edit Flags, a la VRDR 
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag]
  * value[x] from BirthWeightEditFlagsVS (required)
  * value[x] only CodeableConcept
  * value[x] 
    * ^short = "To reflect the relevant edit possibilities for birth weight."
    * ^binding.description = "Birth Weight Edit Flags (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationCigaretteSmokingBeforeDuringPregnancy.fsh

Profile: ObservationCigaretteSmokingBeforeDuringPregnancy
Parent: Observation
Id: Observation-cigarette-smoking-before-during-pregnancy
Title: "Observation - Cigarette Smoking Before and During Pregnancy"
Description: "This profile represents the average number of cigarettes smoked per day for each time period indicated by the value selected for code."
* code 1..1 
* code from CigaretteSmokingBeforeAndDuringPregnancyVS (required)
  * ^short = "This value set contains codes to determine the number of cigarettes smoked in specific periods before and during pregnancy."
  * ^binding.description = "CigaretteSmokingBeforeAndDuringPregnancy"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords)
* focus 1..1 
* focus only Reference(PatientVitalRecords) /// (PatientChildVitalRecordsNew or PatientDecedentFetusVitalRecordsNew) -- these are indistinguishable
* value[x] 1..1 
* value[x] only integer
  * ^short = "Average number of cigarettes smoked per day"
  * ^definition = "Average number of cigarettes smoked per day. Where number of packs per day are provided, calculate number of cigarettes per day (a pack has 20 cigarettes) and record that number."

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationCodedInitiatingFetalDeathCauseOrCondition.fsh

Profile: ObservationCodedInitiatingFetalDeathCauseOrCondition
Parent: Observation
Id: Observation-coded-initiating-fetal-death-cause-or-condition
Title: "Observation - Coded Initiating Fetal Death Cause or Condition"
Description: "This profile represents the coded initiating cause/condition of fetal death."
* . ^short = "This profile represents the coded initiating cause/condition of fetal death."
* code = $loinc#92022-3 "Coded initiating cause or condition of fetal death"
  * ^short = "Coded initiating cause or condition of fetal death"
* code 1..1 
* value[x] 1..1 
* value[x] only CodeableConcept
* value[x] from $2.16.840.1.114222.4.11.7933 (required)
  * ^short = "This value set contains the ICD10 codes for causes of fetal death as defined by the ICD-10-Mortality Fetal Manual (2016)."
  * ^definition = "This value set contains the ICD10 codes for causes of fetal death as defined by the ICD-10-Mortality Fetal Manual (2016). Defined as the following, a cause of fetal death is the morbid condition or disease process, abnormality, injury, or poisoning leading directly to fetal death. The initiating cause of fetal death is the disease or injury, which initiated the chain of morbid events leading directly to death or the circumstances of the accident or violence, which produced fatal injury. A fetal death often results from the combined effect of two or more conditions. These conditions may be completely unrelated, arising independently of each other or they may be causally related to each other; that is, one cause may lead to another which in turn, leads to a third cause, etc."
  * ^binding.description = "Cause of Fetal Death ICD-10"
* subject only Reference(PatientDecedentFetus)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationCodedOtherFetalDeathCauseOrCondition.fsh

Profile: ObservationCodedOtherFetalDeathCauseOrCondition
Parent: Observation
Id: Observation-coded-other-fetal-death-cause-or-condition
Title: "Observation - Coded Other Fetal Death Cause or Condition"
Description: "This profile represents a coded other significant cause/condition of fetal death."
* code = $loinc#92023-1 "Coded other significant causes or conditions of fetal death"
  * ^short = "Coded other significant causes or conditions of fetal death"
* code 1..1 
* subject only Reference(PatientDecedentFetus)
* value[x] 1..1 
* value[x] only CodeableConcept
* value[x] from $2.16.840.1.114222.4.11.7933 (required)
* value[x] ^short = "This value set contains the ICD10 codes for causes of fetal death as defined by the ICD-10-Mortality Fetal Manual (2016)."  
* value[x] ^definition = "This value set contains the ICD10 codes for causes of fetal death as defined by the ICD-10-Mortality Fetal Manual (2016). Defined as the following, a cause of fetal death is the morbid condition or disease process, abnormality, injury, or poisoning leading directly to fetal death. The initiating cause of fetal death is the disease or injury, which initiated the chain of morbid events leading directly to death or the circumstances of the accident or violence, which produced fatal injury. A fetal death often results from the combined effect of two or more conditions. These conditions may be completely unrelated, arising independently of each other or they may be causally related to each other; that is, one cause may lead to another which in turn, leads to a third cause, etc."
* value[x] ^binding.description = "Cause of Fetal Death ICD-10"
* component ^slicing.discriminator.type = #value
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component contains position 1..1
* component[position].value[x] only integer 
* component[position].valueInteger ^maxValueInteger = 7
* component[position].valueInteger ^minValueInteger = 1
* component[position].code = $sct#246268007 "Position (attribute)"
  * ^short = "Position (attribute)"
* component[position] ^short = "Position"
* component[position].code 1..1
* component[position].value[x] 1..1


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationDateOfFirstPrenatalCareVisit.fsh

Profile: ObservationDateOfFirstPrenatalCareVisit
Parent: Observation
Id: Observation-date-of-first-prenatal-care-visit
Title: "Observation - Date of First Prenatal Care Visit"
Description: "This profile represents the date of the first prenatal care visit for this pregnancy. A prenatal visit is where a physician or other health care professional examined and/or counseled the pregnant woman for the pregnancy. If this profile is not present it indicates that the mother did not receive prenatal care at any time during the pregnancy.
FHIR observations do not support date as a value and if a date is partial. It must follow FHIR requirements for [dateTime](https://build.fhir.org/datatypes.html#dateTime)."
* code 1..1 
* code = $loinc#69044-6
  * ^short = "Date of first prenatal care visit"
* subject 1..1 
* subject only Reference(PatientMotherVitalRecords)
* focus 1..1 
* focus only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* value[x] 1..1 
* value[x] only dateTime
  * ^short = "Date of first prenatal care visit"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationDateOfLastLiveBirth.fsh

Profile: ObservationDateOfLastLiveBirth
Parent: Observation
Id: Observation-date-of-last-live-birth
Title: "Observation - Date of Last Live Birth"
Description: "This profile represents the date of the mother's last live born infant (do not include this birth)."
* code 1..1 
* code = $loinc#68499-3
  * ^short = "Date last live birth"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords)
// * focus 1..1 
// * focus only Reference(PatientMotherVitalRecordsNew)
* value[x] 1..1 
* value[x] only dateTime
  * ^short = "Date of of last live birth"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationDateOfLastOtherPregnancyOutcome.fsh

Profile: ObservationDateOfLastOtherPregnancyOutcome
Parent: Observation
Id: Observation-date-of-last-other-pregnancy-outcome
Title: "Observation - Date of Last Other Pregnancy Outcome"
Description: "This profile represents the date of the mother's last other pregnancy outcome (includes pregnancy losses of any gestational age, e.g., spontaneous or induced losses or ectopic pregnancies) (do not include this birth)."
* code 1..1 
* code = $loinc#68500-8
  * ^short = "Date last other pregnancy outcome"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords)
// * focus 1..1 
// * focus only Reference(PatientMotherVitalRecordsNew)
* value[x] 1..1 
* value[x] only dateTime
  * ^short = "Date of last other pregnancy outcome"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationFetalDeathTimePoint.fsh

Profile: ObservationFetalDeathTimePoint
Parent: Observation
Id: Observation-fetal-death-time-point
Title: "Observation - Fetal Death Time Point"
Description: "This Observation profile represents the estimated time of fetal death; the time of death is characterized by the relationship to the time of delivery."
* code 1..1 
* code = $loinc#73811-2
  * ^short = "Estimated timing of fetal death"
* subject 1.. 
* subject only Reference(PatientDecedentFetus)
* value[x] 1..1 
* value[x] only CodeableConcept
* value[x] from FetalDeathTimePointsVS (required)
  * ^short = "The value set contains a list of items to indicate when the fetus died with respect to labor and assessment."
  * ^binding.description = "Fetal Death Time Points (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationFetalPresentation.fsh

Profile: ObservationFetalPresentation
Parent: Observation
Id: Observation-fetal-presentation
Title: "Observation - Fetal Presentation at Birth/Delivery"
Description: "This Observation profile represents the fetal presentation (orientation within the mother's womb) of a fetus prior to delivery/birth. Only the presentations in the preferred
binding can be reported to NCHS.  The full set of abnormal presentations is included to support more general use."
* code 1..1 
* code = $loinc#73761-9
  * ^short = "Fetal presentation at birth/delivery"
* subject 1.. 
* subject only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* value[x] 1..1 
* value[x] only CodeableConcept
  * ^short = "The preferred value set contains the list of reportable presentations (orientations within the mother's womb) that a fetus may be in prior to delivery."
  * ^definition = "The presentation (orientation within the mother's womb) that a fetus may be in prior to delivery/birth."
  * ^binding.description = "Fetal Presentations (NCHS)"
* value[x] from FetalPresentationsVS (preferred)
* value[x] ^binding.extension[http://hl7.org/fhir/StructureDefinition/elementdefinition-maxValueSet].valueCanonical = Canonical(FetalPresentationsMaxVS)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationGestationalAgeAtDelivery.fsh

//content from ObservationGestationalAgeAtDeliveryVitalRecords moving from VRCL to BFDR. Changed to reference PatientChild and PatientDecedentFetus profiles in BFDR.
Profile: ObservationGestationalAgeAtDelivery
Parent: Observation
Id: Observation-gestational-age-at-delivery
Title: "Observation - Gestational Age at Delivery"
Description: "The obstetric estimate of the infant’s gestation in completed weeks based on the birth/delivery attendant’s final estimate of gestation which should be 
determined by all perinatal factors and assessments such as ultrasound, but not the neonatal exam.  For submission to NCHS, values in days will be divided by 7 without remainder, and values
in weeks will be rounded down to an integer."
* code = $loinc#11884-4
  * ^short = "Gestational age Estimated"
* subject 1..
* subject only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* value[x] 1..
* value[x] only Quantity
* valueQuantity ^short = "Age in weeks or days"
  * code from UnitsOfGestationalAgeVS (required) // = $UCUM#wk (exactly)
  * value 1..1
* method 
// Add Edit Flags, a la VRDR 
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag]
  * value[x] from EstimateOfGestationEditFlagsVS (required)
  * value[x] only CodeableConcept
  * value[x] 
    * ^short = "To reflect the relevant edit possibilities for estimate of gestation."
    * ^binding.description = "Estimate Of Gestation Edit Flags (NCHS)"



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationHistologicalPlacentalExamPerformed.fsh

Profile: ObservationHistologicalPlacentalExamPerformed
Parent: Observation
Id: Observation-histological-placental-exam-performed
Title: "Observation - Histological Placental Exam Performed"
Description: "This profile represents whether or not a histological placental examination was performed."
* code 1..1 
* code = $loinc#73767-6
  * ^short = "Histological placental examination was performed [US Standard Report of Fetal Death]"
* subject 1.. 
* subject only Reference(PatientDecedentFetus)
* value[x] 1..1 
* value[x] only CodeableConcept
* value[x] from PerformedNotPerformedPlannedVS (required)
  * ^short = "The value set contains the list of values used to indicate whether or not a histological placental examination was performed."
  * ^binding.description = "Histological Placental Examination (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationICUAdmission.fsh

Profile: ObservationICUAdmission
Parent: Observation
Id: Observation-icu-admission
Title: "Observation - ICU Admission"
Description: "This profile indicates that the maternal morbidity of an admission to the ICU was present. NOTE: this may be better modeled as an Encounter."
* code = $loinc#73781-7
  * ^short = "Maternal morbidity [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#309904001
  * ^short = "Intensive care unit (environment)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationInfantBreastfedAtDischarge.fsh

Profile: ObservationInfantBreastfedAtDischarge
Parent: Observation
Id: Observation-infant-breastfed-at-discharge
Title: "Observation - Infant Breastfed at Discharge"
Description: "This profile represents whether or not the infant was being breastfed at discharge."
* code 1..1 
* code = $loinc#73756-9
  * ^short = "Infant is being breastfed at discharge [US Standard Certificate of Live Birth]"
* subject 1.. 
* subject only Reference(PatientChildVitalRecords)
* value[x] 1..1 
* value[x] only boolean
  * ^short = "Is the infant being breastfed at discharge?"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationInfantLiving.fsh

//content from ObservationInfantLivingVitalRecords moving from VRCL to BFDR. Changed to reference PatientChild profile in BFDR.
Profile: ObservationInfantLiving
Parent: Observation
Id: Observation-infant-living
Title: "Observation - Infant Living"
Description: "An indication of whether the infant is living at the time the report is being submitted."
* code = $loinc#73757-7
  * ^short = "Infant living at time of report [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientChildVitalRecords)
* value[x] 1..
* value[x] only boolean

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationLaborTrialAttempted.fsh

Profile: ObservationLaborTrialAttempted
Parent: Observation
Id: Observation-labor-trial-attempted
Title: "Observation - Labor Trial Attempted"
Description: "This Observation profile represents whether, in the case of a cesarean delivery, a trial of labor was attempted."
* code 1..1 
* code = $loinc#73760-1 "If cesarean, a trial of labor was attempted [US Standard Certificate of Live Birth]"
  * ^short = "If cesarean, a trial of labor was attempted [US Standard Certificate of Live Birth]"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords)
* focus 1.. 
* focus only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* value[x] 1..1
* value[x] only boolean

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationLastMenstrualPeriod.fsh

//content from ObservationLastMenstrualPeriodVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationLastMenstrualPeriod
Parent: Observation
Id: Observation-last-menstrual-period
Title: "Observation - Last Menstrual Period"
Description: "This profile represents the date of the last menstrual period of the patient. The first day of last menstrual period should be captured. The effectiveDateTime captures the observation date."
* code = $loinc#8665-2
* code 
  * ^short = "Last menstrual period start date"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords)
* effective[x] only dateTime
* effective[x] 
  * ^short = "Observation date (date on which the observation was reported to the provider)."
  * ^definition = "The date on which the observation was made/reported to the provider for recording in the EHR."
* value[x] 1.. 
* value[x] only dateTime
  * ^short = "Start of last menstrual period"
  * ^definition = "Start date of last menstrual period."

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationMethodOfDisposition.fsh

Profile: ObservationFetalRemainsDispositionMethod
Parent: Observation
Id: Observation-fetal-remains-disposition-method
Title: "Observation - Fetal Remains Disposition Method"
Description: "This Observation profile represents the method of disposition of the deceased fetus."
* code 1..1 
* code = $loinc#88241-5
  * ^short = "Fetal remains disposition method"
* subject 1.. 
* subject only Reference(PatientDecedentFetus)
* value[x] 1..1 
* value[x] only CodeableConcept
* value[x] from FetalRemainsDispositionMethodVS (required)
  * ^short = "The collection of disposition methods of fetal remains used within birth and fetal death reporting."
  * ^binding.description = "Fetal Remains Disposition Method (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationMotherDeliveryWeight.fsh

//content from ObservationMotherDeliveryVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationMotherDeliveryWeight
Parent: USCoreVitalSignsProfile
Id: Observation-mother-delivery-weight
Title: "Observation - Mother Delivery Weight (reported in pounds)"
Description: "The weight of the mother at the time of birth/delivery."
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only Quantity
* valueQuantity ^short = "Mother's weight in lb"
  * code = $UCUM#[lb_av] (exactly)
    * ^short = "pound"
  * value 1..1 
* category
  * text = "Vital Signs"
* code = $loinc#69461-2 "Mother's body weight --at delivery"
  * ^short = "Mother's body weight --at delivery"
// Add Edit Flags, a la VRDR 
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag]
  * value[x] from PregnancyReportEditFlagsVS (required)
  * value[x] only CodeableConcept
  * value[x] 
    * ^short = "To reflect the relevant edit possibilities for pregnancy report of Education, Mother's height, Mother's pre-pregnancy weight and Prenatal care visit number and also to reflect the relevant edit possibilities for pregnancy status of Female decedent."
    * ^binding.description = "Pregnancy Report Edit Flags (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationMotherHeight.fsh

//content from ObservationMotherHeightVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationMotherHeight
Parent: USCoreBodyHeightProfile
Id: Observation-mother-height
Title: "Observation - Mother Height"
Description: "The height of the mother (reported in inches)."
//* code = $loinc#3137-7
//  * ^short = "Body height Measured"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1.. 
* value[x] only Quantity
* valueQuantity ^short = "Height of Mother in inches"
  * code = $UCUM#[in_i] (exactly)
    * ^short = "inch"
  * value 1..1 
// Add Edit Flags, a la VRDR 
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag]
  * value[x] from PregnancyReportEditFlagsVS (required)
  * value[x] only CodeableConcept
  * value[x] 
    * ^short = "To reflect the relevant edit possibilities for pregnancy report of Education, Mother's height, Mother's pre-pregnancy weight and Prenatal care visit number and also to reflect the relevant edit possibilities for pregnancy status of Female decedent."
    * ^binding.description = "Pregnancy Report Edit Flags (NCHS)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationMotherMarriedDuringPregnancy..fsh

//changed to reference VRCL VS not phinvads VS
Profile: ObservationMotherMarriedDuringPregnancy
Parent: Observation
Id: Observation-mother-married-during-pregnancy
Title: "Observation - Mother Married During Pregnancy"
Description: "This profile represents whether or not the mother was married at conception, at the time of birth, or at any time between conception and giving birth."
* code 1..1
* code = $loinc#87301-8
  * ^short = "Mother was married at any time during pregnancy"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords)
// * focus 1..1
// * focus only Reference(PatientMotherVitalRecordsNew)
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from ValueSetYesNoUnknownVitalRecords (required)
  * ^short = "Was mother married at conception, at the time of birth, or at any time between conception and giving birth?"
  * ^binding.description = "Yes No Unknown (YNU)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationMotherPrepregnancyWeight.fsh

//content from ObservationMotherPrepregnancyWeightVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationMotherPrepregnancyWeight
Parent: USCoreVitalSignsProfile
Id: Observation-mother-prepregnancy-weight
Title: "Observation - Mother Prepregnancy Weight"
Description: "The weight of the mother before becoming pregnant."
* code = $loinc#56077-1
  * ^short = "Body weight --pre current pregnancy"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only Quantity
* valueQuantity ^short = "Weight in lb"
  * code = $UCUM#[lb_av] (exactly)
    * ^short = "pound"
  * value 1..1 
// Add Edit Flags, a la VRDR 
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag]
  * value[x] from PregnancyReportEditFlagsVS (required)
  * value[x] only CodeableConcept
  * value[x] 
    * ^short = "To reflect the relevant edit possibilities for pregnancy report of Education, Mother's height, Mother's pre-pregnancy weight and Prenatal care visit number and also to reflect the relevant edit possibilities for pregnancy status of Female decedent."
    * ^binding.description = "Pregnancy Report Edit Flags (NCHS)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationMotherReceivedWICFood.fsh

//changed to reference VRCL VS not phinvads VS
Profile: ObservationMotherReceivedWICFood
Parent: Observation
Id: Observation-mother-received-wic-food
Title: "Observation - Mother Recieved WIC Food"
Description: "This profile represents whether or not the mother made use of the Women, Infants and Children (WIC) nutritional program during the pregnancy."
* code 1..1
* code = $loinc#87303-4
  * ^short = "Mother WIC food recipient"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords) 
* focus 1..1
* focus only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from ValueSetYesNoUnknownVitalRecords (required)
  * ^short = "Did mother get WIC food for herself during this pregnancy?"
  * ^binding.description = "Yes No Unknown (YNU)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNICUAdmission.fsh

Profile: ObservationNICUAdmission
Parent: Observation
Id: Observation-nicu-admission
Title: "Observation - NICU Admission"
Description: "This profile indicates that the abnormal condition of an admission to the NICU was present. NOTE: this may be better modeled as an Encounter."
* code = $loinc#73812-0
  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientChildVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#830077005 
  * ^short = "Admission to neonatal intensive care unit (procedure)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn.fsh

Profile: ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn
Parent: Observation
Id: Observation-none-of-specified-abnormal-conditions-of-newborn
Title: "Observation - None Of Specified Abnormal Conditions of Newborn"
Description: "This profile indicates that none of the specified abnormal conditions of the newborn were present."
* code = $loinc#73812-0
  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientChildVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#260413007 
  * ^short = "None (qualifier value)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery.fsh

Profile: ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery
Parent: Observation
Id: Observation-none-of-specified-characteristics-labor-delivery
Title: "Observation - None Of Specified Characteristics of Labor and Delivery"
Description: "This profile indicates that none of the specified characteristics of labor and delivery were present."
* code = $loinc#73813-8
  * ^short = "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#260413007 
  * ^short = "None (qualifier value)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn.fsh

Profile: ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn
Parent: Observation
Id: Observation-none-congenital-anomolies-of-the-newborn 
Title: "Observation - None Of Specified Congenital Anomolies Of The Newborn"
Description: "This profile indicates that none of the specified congenital anomolies of the newborn were present."
* code = $loinc#73780-9 
  * ^short = "Congenital anomalies of the newborn [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientChildVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#260413007 
  * ^short = "None (qualifier value)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNoneOfSpecifiedInfectionsPresentDuringPregnancy.fsh

Profile: ObservationNoneOfSpecifiedInfectionsPresentDuringPregnancy
Parent: Observation
Id: Observation-no-infections-present-during-pregnancy  
Title: "Observation - None Of Specified Infections During Pregnancy"
Description: "This profile indicates that none of the specified infections during pregnancy were present."
* code = $loinc#72519-2 
  * ^short = "Infections present and/or treated during this pregnancy for live birth [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#260413007 
  * ^short = "None (qualifier value)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNoneOfSpecifiedMaternalMorbidities.fsh

Profile: ObservationNoneOfSpecifiedMaternalMorbidities
Parent: Observation
Id: Observation-none-of-specified-maternal-morbidities
Title: "Observation - None Of Specified Maternal Morbidities"
Description: "This profile indicates that none of the specified maternal morbidities were present."
* code = $loinc#73781-7
  * ^short = "Maternal morbidity [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#260413007 
  * ^short = "None (qualifier value)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNoneOfSpecifiedObstetricProcedures.fsh

Profile: ObservationNoneOfSpecifiedObstetricProcedures
Parent: Observation
Id: Observation-none-of-specified-obstetric-procedures
Title: "Observation - None Of Specified Obstetric Procedures"
Description: "This profile indicates that none of the specified obstetric procedures were present."
* code = $loinc#73814-6 
  * ^short = "Obstetric procedures performed [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#260413007 
  * ^short = "None (qualifier value)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNoneOfSpecifiedPregnancyRiskFactorsNew.fsh

Profile: ObservationNoneOfSpecifiedPregnancyRiskFactors
Parent: Observation
Id: Observation-none-of-specified-pregnancy-risk-factors
Title: "Observation - None Of Specified Pregnancy Risk Factors"
Description: "This profile indicates that none of the specified pregnancy risk factors specifiable in this IG (73775-9) are present. "
* code = $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#260413007
  * ^short = "None (qualifier value)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNumberBirthsNowDead.fsh

//content from ObservationNumberBirthsNowDeadVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationNumberBirthsNowDead
Parent: Observation
Id: Observation-number-births-now-dead
Title: "Observation - Number of Births Now Dead"
Description: "The total number of previous live-born infants for the mother now dead."
* code = $loinc#68496-9
  * ^short = "Previous live births now dead #"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only integer

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNumberBirthsNowLiving.fsh

//content from ObservationNumberBirthsNowLivingVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationNumberBirthsNowLiving
Parent: Observation
Id: Observation-number-births-now-living
Title: "Observation - Number of Births Now Living"
Description: "The total number of previous live-born infants for the mother now living."
* code = $loinc#11638-4
  * ^short = "[#] Births.still living"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only integer

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNumberFetalDeathsThisDelivery.fsh

//content from ObservationNumberFetalDeathsThisDeliveryVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationNumberFetalDeathsThisDelivery
Parent: Observation
Id: Observation-number-fetal-deaths-this-delivery
Title: "Observation - Number of Fetal Deaths This Delivery"
Description: "The number of fetal deaths in this delivery."
* code = $loinc#73772-6
  * ^short = "LOINC LCN: Number of fetal deaths delivered"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only integer

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNumberLiveBirthsThisDelivery.fsh

//content from ObservationNumberLiveBirthsThisDeliveryVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationNumberLiveBirthsThisDelivery
Parent: Observation
Id: Observation-number-live-births-this-delivery
Title: "Observation - Number of Live Births This Delivery"
Description: "The number of live births in this delivery."
* code = $loinc#73773-4
  * ^short = "Number of infants in this delivery delivered alive"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only integer

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNumberOtherPregnancyOutcomes.fsh

//content from ObservationNumberOtherPregnancyOutcomesVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationNumberOtherPregnancyOutcomes
Parent: Observation
Id: Observation-number-other-pregnancy-outcomes
Title: "Observation - Number of Other Pregnancy Outcomes"
Description: "The total number of other pregnancy outcomes for the mother that did not result in a live birth  (included pregnancy losses of any gestational age, e.g., spontaneous or induced losses or ectopic pregnancies)."
* code = $loinc#69043-8
  * ^short = "Number of other pregnancy outcomes"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only integer

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNumberPrenatalVisits.fsh

//content from ObservationNumberPrenatalVisitsVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationNumberPrenatalVisits
Parent: Observation
Id: Observation-number-prenatal-visits
Title: "Observation - Number of Prenatal Visits"
Description: "The total number of prenatal visits for the mother. The dates of the first and last prenatal visit are indicated by the effective date range. If the mother received no prenatal care, the value should indicate 0 visits."
* code = $loinc#68493-6
  * ^short = "Prenatal visits for this pregnancy #"
* subject 1.. 
* subject only Reference(PatientMotherVitalRecords)
* effective[x] only dateTime
// updated to accommodate effective date time inserted everywhere instances
// * effective[x] only Period
* effective[x] 
* value[x] 1.. 
* value[x] only integer
// Add Edit Flags, a la VRDR 
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag]
  * value[x] from PregnancyReportEditFlagsVS (required)
  * value[x] only CodeableConcept
  * value[x] 
    * ^short = "To reflect the relevant edit possibilities for pregnancy report of Education, Mother's height, Mother's pre-pregnancy weight and Prenatal care visit number and also to reflect the relevant edit possibilities for pregnancy status of Female decedent."
    * ^binding.description = "Pregnancy Report Edit Flags (NCHS)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationNumberPreviousCesareans.fsh

//content from ObservationNumberPreviousCesareansVitalRecords moving from VRCL to BFDR. Changed to reference PatientMother profile in BFDR.
Profile: ObservationNumberPreviousCesareans
Parent: Observation
Id: Observation-number-previous-cesareans
Title: "Observation - Number of Previous Cesareans"
Description: "The total number of prior cesarean deliveries for the mother."
* code = $loinc#68497-7
  * ^short = "Previous cesarean deliveries #"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only integer
// Add Edit Flags, a la VRDR 
* value[x].extension contains
    BypassEditFlag named bypassEditFlag 0..1
* value[x].extension[bypassEditFlag]
  * value[x] from NumberPreviousCesareansEditFlagsVS (required)
  * value[x] only CodeableConcept
  * value[x] 
    * ^short = "To reflect the relevant edit possibilities for number of previous cesareans."
    * ^binding.description = "Number Of Previous Cesareans Edit Flags (NCHS)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationPaternityAcknowledgementSigned.fsh

//changed to reference VRCL VS not phinvads VS
Profile: ObservationPaternityAcknowledgementSigned
Parent: Observation
Id: Observation-paternity-acknowledgement-signed
Title: "Observation - Paternity Acknowledgement Signed"
Description: "This Observation represents whether or not a paternity acknowledgement was signed by the father if the mother was not married at conception, at the time of birth, or at any time between conception and giving birth."
* code 1..1
* code = $loinc#87302-6
  * ^short = "Paternity acknowledgment form signed Father"
* subject 1.. 
* subject only Reference(PatientChildVitalRecords)
* focus 1..1
* focus only Reference(RelatedPersonFatherNaturalVitalRecords)
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from ValueSetYesNoNotApplicableVitalRecords (required)
  * ^short = "Whether or not a paternity acknowledgement was signed by the father"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationPlannedToDeliverAtHome.fsh

Profile: ObservationPlannedToDeliverAtHome
Parent: Observation
Id: Observation-planned-to-deliver-at-home
Title: "Observation - Planned to Deliver at Home"
Description: "This Observation profile represents whether or not a home birth was planned for the infant."
* code 1..1
* code = $loinc#73765-0
  * ^short = "Mother Planned to deliver at home [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* focus 1..1
* focus only Reference(PatientChildVitalRecords or PatientDecedentFetus)
* value[x] 1..1
* value[x] only boolean
  * ^short = "Planned to deliver at home?"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationPresentJob.fsh

Profile: ObservationPresentJob
Parent: PastOrPresentJob
Id: Observation-present-job
Title: "Observation - Present Job"
Description: "Used to send text-string present job information from Jurisdictions to NCHS, and coded versions from NCHS to Jurisdictions."
* subject only Reference(PatientVitalRecords)  // Mother, Child... required by the Past or Present Job Profile
* focus only  Reference(RelatedPersonParentVitalRecords)  // Mother or Father
* extension[ODHIsCurrentJobExtension].valueBoolean = true 
* extension contains ExtensionRole named roleMotherOrFather 0..1 
* extension[roleMotherOrFather] ^short = "Vital Records Role (father,mother if present)"
  * value[x] ^short = "Parent (MTH | FTH)"
* component[odh-PastOrPresentIndustry] ^short = "Literal text string submitted to NCHS for present Industry"
  * valueCodeableConcept
    * text ^short = "Industry - Literal"
    * coding[industryCDCCensus2018] ^short = "Industry Code"
    * coding contains CDC_NAICS2017  0..1
    * coding[CDC_NAICS2017] ^short = "CDC_NAICS2017"
    * coding[CDC_NAICS2017] from http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8067 (required)
* valueCodeableConcept ^short = "Literal text string submitted to NCHS for present occupation"
  * text ^short = "Occupation - Literal"
  * coding[occupationCDCCensus2018] ^short = "Occupation Code"
  * coding contains CDC_SOC2018  0..1
  * coding[CDC_SOC2018] ^short = "CDC_SOC2018"
  * coding[CDC_SOC2018] from http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8068 (required)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationPreviousCesarean_new.fsh

Profile: ObservationPreviousCesarean
Parent: Observation
Id: Observation-previous-cesarean
Title: "Observation - Previous Cesarean"
Description: "This profile indicates that the mother had a pregnancy risk factor of previous cesarean."
* code = $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#200144004
  * ^short = "Deliveries by cesarean (finding)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationPreviousPretermBirth.fsh

Profile: ObservationPreviousPretermBirth
Parent: Observation
Id: Observation-previous-preterm-birth
Title: "Observation - Previous Preterm Birth"
Description: "This Observation profile indicates that the mother had a pregnancy risk factor of previous preterm birth."
* code = $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#161765003
  * ^short = "History of premature delivery (situation)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationSSNRequestedForChild.fsh

Profile: ObservationSSNRequestedForChild
Parent: Observation
Id: Observation-ssn-requested-for-child
Title: "Observation - Social Security Number Requested For Child"
Description: "This Observation profile represents whether or not a social security number has been requested for the child. If a social security number was requested, set valueBoolean=true and enter the time requested in the effectiveDateTime data element."
* code 1..1
* code = $loinc#87295-2
  * ^short = "Social Security Number was requested"
* subject 1.. 
* subject only Reference(PatientChildVitalRecords)
* effective[x] 0..1
* effective[x] only dateTime
  * ^short = "Date/time social security number requested"
* value[x] 1..1
* value[x] only boolean
  * ^short = "Social security number requested for child?"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationSteroidsFetalLungMaturation.fsh

Profile: ObservationSteroidsFetalLungMaturation
Parent: Observation
Id: Observation-steroids-fetal-lung-maturation
Title: "Observation - Administration of Steroids for Fetal Lung Maturation"
Description: "This Observation profile indicates a characteristic of labor of administration of steroids for fetal lung maturation."
* code = $loinc#73813-8
  * ^short = "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..
* value[x] only CodeableConcept
* value[x] = $sct#434611000124106
  * ^short = "Maternal antenatal administration of corticosteroids for fetal lung maturation (situation)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ObservationUnknownRouteAndMethodOfDelivery.fsh

Profile: ObservationUnknownFinalRouteMethodDelivery
Parent: Observation
Id: Observation-unknown-final-route-and-method-of-delivery 
Title: "Observation - Unknown Final Route and Method of Delivery"
Description: "Unknown Final route and method of delivery as defined by the US Standard Certificate of Live Birth (2003) and US Standard Fetal Death Report (2003)." 
* code = $loinc#73762-7 
  * ^short = "Final route and method of delivery [US Standard Certificate of Live Birth]"
* subject 1..
* subject only Reference(PatientMotherVitalRecords)
* value[x] 1..1
* value[x] only CodeableConcept 
* valueCodeableConcept = $sct#261665006	
  * ^short = "Unknown (qualifier value)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/PatientDecedentFetus.fsh

Profile: PatientDecedentFetus
Parent: PatientVitalRecords
Id: Patient-decedent-fetus
Title: "Patient - Decedent Fetus"
Description: "A stillborn for whom clinical data is included in the report."
* extension[birthPlace]
  * value[x].state ^short = "State"
  * value[x].district.extension[districtCode] ^short = "County"
* extension[parentReportedAgeAtDelivery]
  * ^short = "The mother or father's reported age at the time of delivery of the child"
  * extension[reportedAge].value[x] ^short = "Parent's reported age"
  * extension[motherOrFather].valueCodeableConcept ^short = "Indicates mother/Father code"
* extension[birthsex].valueCode from ValueSetSexAssignedAtBirthVitalRecords (required)
* insert decedentFetusName 
* insert birthDateAndTime 
* deceasedBoolean 1..1 
* deceasedBoolean = true
  * ^short = "The fetus is deceased"
* deceasedBoolean.extension[fetalDeath] 1..1
* deceasedBoolean.extension[fetalDeath].valueBoolean = true
* multipleBirth[x] only integer
* multipleBirth[x]
  * .extension[bypassEditFlag].value[x]
    * ^short = "To reflect the relevant edit possibilities for plurality."
  * .extension[multipleBirthTotal]
    * ^short = "Where a patient is a part of a multiple delivery, this is the total number of deliveries that occurred in this pregnancy."
    * value[x] ^short = "Plurality"


RuleSet: decedentFetusName
* name 
  * family 1.. 
    * extension[dataAbsentReason] ^short = "When fetus not named use code \"unknown\""
  * given 
    * extension[dataAbsentReason] ^short = "When fetus not named use code \"unknown\""
  * use ^short = "The use of a human name"
  * suffix ^short = "Surname suffix"

RuleSet: birthDateAndTime 
* birthDate 1..
  * extension[birthTime] 
  * extension[partialDateTime] 

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/PractitionerAttendant.fsh

Profile: PractitionerBirthAttendant
Parent: PractitionerVitalRecords
Id: Practitioner-birth-attendant
Title: "Practitioner - Birth Attendant"
Description: "The attendant at birth is defined as the individual at the delivery who is responsible for the delivery."
* name.text ^short = "Attendant's name"
* identifier ^short = "Note: required by USCore"
* identifier[NPI] ^short = "Attendant's NPI Number"
* qualification 0..1
* qualification 
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^slicing.description = "Slicing based on the profile conformance of the sliced element"
* qualification contains birthAttendantQualification 0..1
* qualification[birthAttendantQualification].code from ValueSetBirthAttendantTitlesVitalRecords (required)
* qualification[birthAttendantQualification].code ^short = "List of titles"
* qualification[birthAttendantQualification].code ^binding.description = "Live Birth/Fetal Death Practitioner title"
* qualification[birthAttendantQualification].code.text ^short = "Attendant 'other'"
* extension contains PractitionerRoleBirthAttendant named role 1..1
// * insert SlicedRoleExtension
// * extension[role] contains
//     attendantRole 1..1 
// * extension[role]  ^short = "Differentiates Attendant and Certifier practitioners"
// * extension[role][attendantRole] 
//   * ^short = "Attendant"
//   * valueCode = #attendant
//     * ^short = "Attendant"


// RuleSet: SlicedRoleExtension
// * extension contains    // Extension makes it possible to query this encounter from bundle with simple FHIRPath query
//   PractitionerRole named role 1..*
// * extension
//   // Additionally slice the extension by its valueCode
//   * ^slicing.discriminator[1].type = #value
//   * ^slicing.discriminator[=].path = "value"


Extension: PractitionerRoleBirthAttendant
Id: practitioner-role-birth-attendant
Title: "Practitioner Role - Birth Attendant"
Description: "This extension profile is used to indicate that an instance relates to the birth attendant."
* insert ExtensionContextResource(Practitioner)
* value[x] 1..1
* value[x] only code
* valueCode = #attendant 



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/PractitionerCertifier.fsh

Profile: PractitionerBirthCertifier
Parent: PractitionerVitalRecords
Id: Practitioner-birth-certifier
Title: "Practitioner - Birth Certifier"
Description: "Certifier (USCorePractitioner) used in BFDR"
* name.text ^short = "Certifier's name"
* identifier ^short = "Note: required by USCore"
* identifier[NPI] ^short = "Certifier's NPI Number"
* qualification 0..1
* qualification 
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^slicing.description = "Slicing based on the profile conformance of the sliced element"
* qualification contains birthAttendantQualification 0..1
* qualification[birthAttendantQualification].code from ValueSetBirthAttendantTitlesVitalRecords (required)
* qualification[birthAttendantQualification].code ^short = "List of titles"
* qualification[birthAttendantQualification].code ^binding.description = "Live Birth/Fetal Death Practitioner title"
* qualification[birthAttendantQualification].code.text ^short = "Certifier 'other'"
* extension contains PractitionerRoleBirthCertifier  named role 1..1
// * insert SlicedRoleExtension
// * extension[role] contains
//     certifierRole 1..1
// * extension[role][certifierRole] 
//   * ^short = "Certifier"
//   * valueCode = #certifier
//     * ^short = "Certifier"

Extension: PractitionerRoleBirthCertifier
Id: practitioner-role-birth-certifier
Title: "Practitioner Role - Certifier"
Description: "This extension profile is used to indicate that an instance relates to the birth certifier."
* insert ExtensionContextResource(Practitioner)
* value[x] 1..1
* value[x] only code
* valueCode = #certifier 


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureAntibioticSuspectedNeonatalSepsis.fsh

Profile: ProcedureAntibioticSuspectedNeonatalSepsis
Parent: USCoreProcedureProfile
Id: Procedure-antibiotic-suspected-neonatal-sepsis
Title: "Procedure - Antibiotic for Suspected Neonatal Sepsis"
Description: "This profile represents an abnormal condition of antibiotic given for suspected neonatal sepsis."
* category 1..1
* category = $loinc#73812-0
  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* code = $sct#434621000124103
* code
  * ^short = "Antibiotic given for suspected neonatal sepsis (situation)"
* subject only Reference(PatientChildVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureAssisstedVentilationFollowingDelivery.fsh

Profile: ProcedureAssistedVentilationFollowingDelivery
Parent: USCoreProcedureProfile
Id: Procedure-assisted-ventilation-following-delivery
Title: "Procedure - Assisted Ventilation Following Delivery"
Description: "This profile represents an abnormal condition of the newborn of assisted ventilation immediately following delivery."
* category 1..1
* category = $loinc#73812-0
  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* code = LocalBFDRCodesCS#assistedventfollowingdelivery
* code 
  * ^short = "Assisted ventilation required immediately following delivery"
* subject only Reference(PatientChildVitalRecords)


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureAssisstedVentilationMoreThanSixHours.fsh

Profile: ProcedureAssistedVentilationMoreThanSixHours
Parent: USCoreProcedureProfile
Id: Procedure-assisted-ventilation-more-than-six-hours
Title: "Procedure - Assisted Ventilation More Than Six Hours"
Description: "This profile represents an abnormal condition of the newborn of assisted ventilation for more than six hours."
* category 1..1
* category = $loinc#73812-0
  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* code = LocalBFDRCodesCS#assistedventmorethan6hrs
* code 
  * ^short = "Assisted ventilation required for more than six hours"
* subject only Reference(PatientChildVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureAssistedFertilization.fsh

Profile: ProcedureAssistedReproductiveTechnology
Parent: USCoreProcedureProfile
Id: Procedure-assisted-reproductive-technology
Title: "Procedure - Assisted Reproductive Technology"
Description: "This Procedure profile records that Any assisted reproduction technology (ART)/technical procedures (e.g., in vitro
fertilization (IVF), gamete intrafallopian transfer (GIFT), ZIFT)) used to initiate the pregnancy. "
* category 1..1
* category = $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code = $sct#63487001
  * ^short = "Assisted fertilization (procedure)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureAugmentationOfLabor.fsh

Profile: ProcedureAugmentationOfLabor
Parent: USCoreProcedureProfile
Id: Procedure-augmentation-of-labor
Title: "Procedure - Augmentation of Labor"
Description: "This Procedure profile indicates a characteristic of labor of augmentation of labor."
* category 1..1
* category = $loinc#73813-8
  * ^short = "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
* code = $sct#237001001
  * ^short = "Augmentation of labor (procedure)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureBloodTransfusion.fsh

Profile: ProcedureBloodTransfusion
Parent: USCoreProcedureProfile
Id: Procedure-blood-transfusion
Title: "Procedure - Blood Transfusion"
Description: "This Procedure profile indicates a maternal morbidity of a blood transfusion."
* category 1..1
* category =  $loinc#73781-7
  * ^short = "Maternal morbidity [US Standard Certificate of Live Birth]"
* code = $sct#116859006
  * ^short = "Transfusion of blood product (procedure)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureEpiduralOrSpinalAnesthesia.fsh

Profile: ProcedureEpiduralOrSpinalAnesthesia
Parent: USCoreProcedureProfile
Id: Procedure-epidural-or-spinal-anesthesia
Title: "Procedure - Epidural or Spinal Anesthesia"
Description: "This Procedure profile indicates a characteristic of labor of epidural or spinal anesthesia."
* category 1..1
* category = $loinc#73813-8
  * ^short = "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
* code = $sct#18946005
  * ^short = "Epidural anesthesia (procedure)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureFertilityEnhancingDrugTherapyArtificialInsemination.fsh

Profile: ProcedureFertilityEnhancingDrugTherapyArtificialInsemination
Parent: USCoreProcedureProfile
Id: Procedure-fertility-enhancing-drug-therapy-artificial-insem
Title: "Procedure - Fertility Enhancing Drug Therapy, Artificial or Intrauterine Insemination"
Description: "This Procedure profile records that fertility-enhancing drug therapy (e.g., Clomid, Pergonal), artificial insemination, or intrauterine insemination was used to initiate the pregnancy."
* category 1..1
* category = $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code from FertilityEnhancingDrugTherapyArtificialInseminationVS (required)
  * ^short = "The value set contains codes for fertitlity enhanncing drug therapy and artificial insemination."
* subject only Reference(PatientMotherVitalRecords)



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureFinalRouteMethodDelivery.fsh

Profile: ProcedureFinalRouteMethodDelivery
Parent: USCoreProcedureProfile
Id: Procedure-final-route-method-delivery
Title: "Procedure - Final Route and Method of Delivery"
Description: "This profile represents the final route and method of delivery."
* category 1..1
* category = $loinc#73762-7 
  * ^short = "Final route and method of delivery [US Standard Certificate of Live Birth]"
* code from DeliveryRoutesVS (required)
  * ^short = "The value set contains the list of the possible routes by which the infant or fetus may be delivered."
  * ^binding.description = "Delivery Routes (NCHS)"
* subject only Reference(PatientMotherVitalRecords)
* reasonReference only Reference(ObservationLaborTrialAttempted)
* reasonReference 
  * ^short = "If cesarean, was a trial of labor attempted?"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureInductionOfLabor.fsh

Profile: ProcedureInductionOfLabor
Parent: USCoreProcedureProfile
Id: Procedure-induction-of-labor
Title: "Procedure - Induction of Labor"
Description: "This Procedure profile indicates a characteristic of labor of induction of labor."
* category 1..1
* category = $loinc#73813-8
  * ^short = "Characteristics of labor and delivery [US Standard Certificate of Live Birth]"
* code = $sct#236958009
  * ^short = "Induction of labor (procedure)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureInfertilityTreatment.fsh

Profile: ProcedureInfertilityTreatment
Parent: USCoreProcedureProfile
Id: Procedure-infertility-treatment
Title: "Procedure - Infertility Treatment"
Description: "This Procedure profile records that infertility treatment was used to initiate the pregnancy. Includes
fertility-enhancing drugs (e.g., Clomid, Pergonal), artificial insemination, or intrauterine insemination and assisted reproduction technology
procedures (e.g., IVF, GIFT and ZIFT)."
* category 1..1
* category = $loinc#73775-9
  * ^short = "Mothers Risk factors in this pregnancy [US Standard Certificate of Live Birth]"
* code = $sct#773261007 
  * ^short = "Procedure relating to reproduction (procedure)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureObstetric.fsh

Profile: ProcedureObstetric
Parent: USCoreProcedureProfile
Id: Procedure-obstetric
Title: "Procedure - Obstetric"
Description: "This profile represents information about a particular medical treatment or invasive/manipulative procedure that was performed during this pregnancy specifically in the treatment of the pregnancy, management of labor and/or delivery."
* code = $sct#240278000 
  * ^short = "External cephalic version (procedure)" 
* category 1..1
* category = $loinc#73814-6 
  * ^short = "Obstetric procedures performed [US Standard Certificate of Live Birth]"
* subject only Reference(PatientMotherVitalRecords)
* outcome from ObstetricProcedureOutcomeVS (required)
  * ^short = "Outcome, if procedure was performed."
  * ^binding.description = "Subset of ProcedureOutcomeCodes(SNOMEDCT) including successful or unsuccessful"





---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureSurfactantReplacementTherapy.fsh

Profile: ProcedureSurfactantReplacementTherapy
Parent: USCoreProcedureProfile
Id: Procedure-surfactant-replacement-therapy
Title: "Procedure - Surfactant Replacement Therapy"
Description: "This profile represents an abnormal condition of the newborn of surfactant replacement therapy."
* category 1..1
* category = $loinc#73812-0
  * ^short = "Abnormal conditions of the newborn [US Standard Certificate of Live Birth]"
* code = $sct#434701000124101
  * ^short = "Surfactant replacement therapy (procedure)"
* subject only Reference(PatientChildVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/profiles/ProcedureUnplannedHysterectomy.fsh

Profile: ProcedureUnplannedHysterectomy
Parent: USCoreProcedureProfile
Id: Procedure-unplanned-hysterectomy
Title: "Procedure - Unplanned Hysterectomy"
Description: "This Procedure profile indicates a maternal morbidity of unplanned hysterectomy."
* category 1..1
* category =  $loinc#73781-7
  * ^short = "Maternal morbidity [US Standard Certificate of Live Birth]"
* code = $sct#236987005
  * ^short = "Emergency cesarean hysterectomy (procedure)"
* subject only Reference(PatientMotherVitalRecords)

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/questionnaires/Questionnaire-mothers-live-birth.fsh

Instance: Questionnaire-mothers-live-birth
InstanceOf: Questionnaire
Title: "Questionnaire - Mother's Worksheet for Child's Birth Certificate"
Description: "This Questionnaire represents the [Mother's Worksheet for Child's Birth Certificate](https://www.cdc.gov/nchs/data/dvs/moms-worksheet-2016-508.pdf)."
Usage: #example
* name = "QuestionnaireMothersWorksheetChildsBirthCertificate"
* title = "Questionnaire - Mother's Worksheet for Child's Birth Certificate"
* status = #draft
* experimental = false
* subjectType = #Patient
* purpose = "Purpose"
* item[0]
  * linkId = "intro"
  * text = "The information you provide below will be used to create your child’s birth certificate. The birth certificate is a document that will be used for legal purposes to prove your child’s age, citizenship and parentage. This document will be used by your child throughout his/her life. State laws provide protection against the unauthorized release of identifying information from the birth certificates to ensure the confidentiality of the parents and their child.\n            \n            It is very important that you provide complete and accurate information to all of the questions. In addition to information used for legal purposes, other information from the birth certificate is used by health and medical researchers to study and improve the health of mothers and newborn infants. Items such as parent’s education, race, and smoking will be used for studies but will not appear on copies of the birth certificate issued to you or your child. \n            \n            All information on the mother should be for the woman who delivered the infant. In cases of surrogacy or gestational carrier, the information reported should be that for the surrogate or the gestational carrier, that is, the woman who delivered the infant."
  * type = #display
* item[+]
  * linkId = "mother-current-legal-name"
  * prefix = "1"
  * text = "What is your current legal name?"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "mother-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "mother-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "mother-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "child-name"
  * prefix = "2"
  * text = "What will be your baby's legal name (as it should appear on the birth certificate)?"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "child-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "child-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "child-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "child-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "mother-address"
  * prefix = "3"
  * text = "Where do you usually live - that is - where is your household/residence located?"
  * type = #group
  * item[0]
    * linkId = "mother-nbr-street"
    * text = "Complete number and street (do not enter rural route numbers)"
    * type = #string
  * item[+]
    * linkId = "mother-apt-nbr"
    * text = "Apartment Number"
    * type = #string
  * item[+]
    * linkId = "mother-city"
    * text = "City, Town, or Location"
    * type = #string
  * item[+]
    * linkId = "mother-county"
    * text = "County"
    * type = #string
  * item[+]
    * linkId = "mother-state"
    * text = "State (or U.S. Territory, Canadian Province)"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetStatesTerritoriesAndProvincesVitalRecords)  //    "http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.888"
  * item[+]
    * linkId = "mother-zip"
    * text = "Zip Code"
    * type = #string
  * item[+]
    * linkId = "mother-country"
    * text = "If not in the United States, country"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetResidenceCountryVitalRecords)  //    "http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.888"
* item[+]
  * linkId = "inside-city-limits"
  * prefix = "4"
  * text = "Is this household inside city limits (inside the incorporated limits of the city, town, or location where you live)?"
  * type = #choice
  * answerValueSet =   Canonical(ValueSetYesNoUnknownVitalRecords)  //    "http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.888"
* item[+]
  * linkId = "mother-mail"
  * prefix = "5"
  * text = "What is your mailing address"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-mail-same"
    * text = "Same as residence [Go to next question]"
    * type = #boolean
  * item[+]
    * linkId = "mother-mail-nbr-street"
    * text = "Complete number and street"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-apt-nbr"
    * text = "Apartment Number"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-po-box"
    * text = "P.O. Box"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-city"
    * text = "City, Town, or Location"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-state"
    * text = "State (or U.S. Territory, Canadian Province)"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetStatesTerritoriesAndProvincesVitalRecords)  //    "http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.888"

    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-zip"
    * text = "Zip Code"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-country"
    * text = "If not in the United States, country"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetResidenceCountryVitalRecords)  //    "http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.888"

    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
* item[+]
  * linkId = "mother-dob"
  * prefix = "6"
  * text = "What is your date of birth?"
  * type = #date
  * repeats = false
* item[+]
  * linkId = "mother-birthplace"
  * prefix = "7"
  * text = "In what State, U.S. territory, or foreign country were you born? Please specify one of the following:"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-birthplace-state"
    * text = "State"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetUSStatesVitalRecords)  // Should be just states
  * item[+]
    * linkId = "mother-birthplace-territory"
    * text = "or U.S. territory, i.e., Puerto Rico, U.S. Virgin Islands, Guam, American Samoa or Norther Marianas"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetUSTerritoriesVitalRecords) // SHould be just states 
  * item[+]
    * linkId = "mother-birthplace-country"
    * text = "or Foreign country"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetBirthplaceCountryVitalRecords)
* item[+]
  * linkId = "mother-education"
  * definition = #Observation.value // Canonical(ObservationEducationLevelVitalRecordsNew)#Observation.value //#"http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-parent-education-level-vr#Observation.value"
  * code = $loinc#57712-2 "Highest level of education Mother"
  * prefix = "8"
  * text = "What is the highest level of schooling that you have completed at the time of delivery? (Check the box that best describes your education. If you are currently enrolled, check the box that indicates the previous grade or highest degree received)."
  * type = #choice
  * repeats = false
  * answerValueSet = Canonical(ValueSetEducationLevelVitalRecords)
* item[+]
  * linkId = "mother-ethnicity"
  * prefix = "9"
  * text = "Are you Spanish/Hispanic/Latina?"
  * type = #boolean
  * repeats = false
* item[+]
  * linkId = "mother-ethnicity-mexican"
  * text = "Are you Mexican, Mexican-American?"
  * type = #boolean
  * repeats = false
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true
* item[+]
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true    
  * linkId = "mother-ethnicity-puerto-rican"
  * text = "Are you Puerto Rican?"
  * type = #boolean
  * repeats = false
* item[+]
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true    
  * linkId = "mother-ethnicity-cuban"
  * text = "Are you Cuban?"
  * type = #boolean
  * repeats = false
* item[+]
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true    
  * linkId = "mother-ethnicity-other"
  * text = "Are you of other Spanish/Hispanic/Latina (e.g., Spaniard, Salvadoran, Dominican, Columbian)."
  * type = #boolean
  * repeats = false
  * item[+]
    * enableWhen
      * question = "mother-ethnicity-other"
      * operator = #=
      * answerBoolean = true    
    * linkId = "mother-ethnicity-other-literal"
    * text = "(specify)"
    * type = #string
    * repeats = false
* item[+]
  * linkId = "mother-race"
  * prefix = "10"
  * text = "What is your race? (Please check one or more races to indicate what you consider yourself to be)."
  * type = #group
  * repeats = false
  * item[+]
    * linkId = "mother-race-white"
    * text = "White"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-black-or-aa"
    * text = "Black or African American"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-aian"
    * text = "American Indian or Alaskan Native"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-aian-tribe"
      * text = "(name of enrolled or principal tribe)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-aian"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "mother-race-asian-indian"
    * text = "Asian Indian"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-chinese"
    * text = "Chinese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-filipino"
    * text = "Filipino"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-japanese"
    * text = "Japanese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-korean"
    * text = "Korean"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-vietnamese"
    * text = "Vietnamese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-other-asian"
    * text = "Other Asian"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-other-asian-literal"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-other-asian"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "mother-race-native-hawaiian"
    * text = "Native Hawaiian"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-guamanian-or-chamorro"
    * text = "Guamanian or Chamorro"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-samoan"
    * text = "Samoan"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-other-pacific-islander"
    * text = "Other Pacific Islander"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-other-pacific-islander-specify"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-other-pacific-islander"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "mother-race-other"
    * text = "Other (specify)"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-other-specify"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-other"
        * operator = #=
        * answerBoolean = true
* item[+]
  * linkId = "receive-wic"
  * definition = #Observation.code  // Canonical(ObservationMotherReceivedWICFood)#Observation.code // "http://hl7.org/fhir/us/bfdr/StructureDefinition/Observation-mother-received-wic-food"
  * prefix = "11"
  * text = "Did you receive WIC (Women, Infants and Children) food for yourself during this pregnancy?"
  * type = #choice
  * repeats = false
  * answerValueSet = Canonical(ValueSetYesNoUnknownVitalRecords)  //"http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.888"
* item[+]
  * linkId = "infertility-treatment"
  * prefix = "12"
  * text = "Did this pregnancy result from infertility treatment? (If yes, please answer 12a and 12b)"
  * type = #boolean
  * item[0]
    * linkId = "drugs-ai-ii"
    * text = "If yes, did this pregnancy result from fertility-enhancing drugs, artificial insemination, or intrauterine insemination?"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "art-ivf-gift"
    * text = "If yes, did this pregnancy result from assisted reproductive technology (e.g., in-vitro fertilization (IVF), gamete intrafallopian transfer (GIFT))?"
    * type = #boolean
    * repeats = false
* item[+]
  * linkId = "mothers-height"
  * prefix = "13"
  * text = "What is your height?"
  * type = #group
  * item[0]
    * linkId = "mothers-height-feet"
    * text = "Feet"
    * type = #quantity
    * repeats = false
  * item[+]
    * linkId = "mothers-height-inches"
    * text = "Inches"
    * type = #quantity
    * repeats = false
* item[+]
  * linkId = "mothers-prepregnancy-weight"
  * prefix = "14"
  * text = "What was your prepregnancy weight in lbs, that is, your weight immediately before you became pregnant?"
  * type = #quantity
  * repeats = false
* item[+]
  * linkId = "mothers-smoking"
  * prefix = "15"
  * text = "How many cigarettes OR packs of cigarettes did you smoke on an average day during each of the following time periods? If you NEVER smoked, enter zero for each time period."
  * type = #group
  * item[0]
    * linkId = "mothers-smoking-3-months-prior"
    * text = "Three months before pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-3-months-prior-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-3-months-prior-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "mothers-smoking-trimester-1"
    * text = "First three months of pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-trimester-1-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-trimester-1-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "mothers-smoking-trimester-2"
    * text = "Second three months of pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-trimester-2-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-trimester-2-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "mothers-smoking-trimester-3"
    * text = "Third trimester of pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-trimester-3-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-trimester-3-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "cigarette-note"
    * text = "*refers to tobacco products only, NOT e-cigarettes."
    * type = #display
* item[+]
  * linkId = "mother-ever-married"
  * prefix = "16"
  * text = "Question 'Have you ever been married?' removed."
  * type = #display
* item[+]
  * linkId = "mother-prior-name"
  * prefix = "17"
  * text = "What name did you use prior to your first marriage?"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-prior-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "mother-prior-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "mother-prior-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "mother-prior-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "married-conception"
  * prefix = "18"
  * text = "Were you married at the time you conceived this child, at the time of birth, or at any time between conception and giving birth? [If yes, please go to question 19; If no, please see below]"
  * type = #boolean
  * repeats = false
  * item
    * linkId = "paternity-ack"
    * text = "If no, has a paternity acknowledgment been completed? (That is, have you and the father signed a form [insert name of State paternity acknowledgment form] in which the father accepted legal responsibility for the child?) If you were not married, or if a paternity acknowledgment has not been completed, information about the father cannot be included on the birth certificate. Information about the procedures for adding the father’s information to the Birth Certificate after it has been filed can be obtained from the State Vital Statistics Office. [If yes, please go to question 19; If no, please go to question 25]"
    * type = #boolean
    * enableWhen
      * question = "married-conception"
      * operator = #=
      * answerBoolean = false
* item[+]
  * linkId = "father-current-legal-name"
  * prefix = "19"
  * text = "What is the current legal name of your baby's father?"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "father-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "father-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "father-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "father-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "father-dob"
  * prefix = "20"
  * text = "What the father's date of birth?"
  * type = #date
  * repeats = false
* item[+]
  * linkId = "father-birthplace"
  * text = "In what State, U.S. territory, or foreign country was the father born? Please specify one of the following:"
  * type = #group
  * repeats = false
  * prefix = "21"
  * item[0]
    * linkId = "father-birthplace-state"
    * text = "State"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetUSStatesVitalRecords)  // Should be just states
  * item[+]
    * linkId = "father-birthplace-territory"
    * text = "or U.S. territory, i.e., Puerto Rico, U.S. Virgin Islands, Guam, American Samoa or Norther Marianas"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetUSTerritoriesVitalRecords) // SHould be just states 
  * item[+]
    * linkId = "father-birthplace-country"
    * text = "or Foreign country"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetBirthplaceCountryVitalRecords)
* item[+]
  * linkId = "father-education"
  * code = $loinc#87300-0 "Highest level of education Father"
  * prefix = "22"
  * text = "What is the highest level of schooling that the father will have completed at the time of delivery? (Check the box that best describes his education. If he is currently enrolled, check the box that indicates the previous grade or highest degree received)."
  * type = #choice
  * repeats = false
  * answerValueSet = Canonical(ValueSetEducationLevelVitalRecords)
* item[+]
  * linkId = "father-ethnicity"
  * prefix = "23"
  * text = "Is the father Spanish/Hispanic/Latina?"
  * type = #boolean
  * repeats = false
* item[+]
  * linkId = "father-ethnicity-mexican"
  * text = "Is the father Mexican, Mexican-American?"
  * type = #boolean
  * repeats = false
* item[+]
  * linkId = "father-ethnicity-puerto-rican"
  * text = "Is the father Puerto Rican?"
  * type = #boolean
  * repeats = false
* item[+]
  * linkId = "father-ethnicity-cuban"
  * text = "Is the father Cuban?"
  * type = #boolean
  * repeats = false
* item[+]
  * enableWhen
    * question = "father-ethnicity"
    * operator = #=
    * answerBoolean = true    
  * linkId = "father-ethnicity-other"
  * text = "Is the father of other Spanish/Hispanic/Latina (e.g., Spaniard, Salvadoran, Dominican, Columbian)."
  * type = #boolean
  * repeats = false
  * item[+]
    * enableWhen
      * question = "father-ethnicity-other"
      * operator = #=
      * answerBoolean = true    
    * linkId = "father-ethnicity-other-literal"
    * text = "(specify)"
    * type = #string
    * repeats = false
* item[+]
  * linkId = "father-race"
  * prefix = "24"
  * text = "What is the father's race? (Please check one or more races to indicate what he considers himself to be)."
  * type = #group
  * repeats = false
  * item[+]
    * linkId = "father-race-white"
    * text = "White"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-black-or-aa"
    * text = "Black or African American"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-aian"
    * text = "American Indian or Alaskan Native"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "father-race-aian-tribe"
      * text = "(name of enrolled or principal tribe)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "father-race-aian"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "father-race-asian-indian"
    * text = "Asian Indian"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-chinese"
    * text = "Chinese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-filipino"
    * text = "Filipino"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-japanese"
    * text = "Japanese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-korean"
    * text = "Korean"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-vietnamese"
    * text = "Vietnamese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-other-asian"
    * text = "Other Asian"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "father-race-other-asian-literal"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "father-race-other-asian"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "father-race-native-hawaiian"
    * text = "Native Hawaiian"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-guamanian-or-chamorro"
    * text = "Guamanian or Chamorro"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-samoan"
    * text = "Samoan"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "father-race-other-pacific-islander"
    * text = "Other Pacific Islander"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "father-race-other-pacific-islander-specify"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "father-race-other-pacific-islander"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "father-race-other"
    * text = "Other (specify)"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "father-race-other-specify"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "father-race-other"
        * operator = #=
        * answerBoolean = true

* item[+]
  * linkId = "parents-ssn"
  * prefix = "25"
  * text = "Furnishing parent(s) Social Security Number(s) (SSNs) is required by Federal Law, 42 USC 405(c) (section 205(c) of the Social Security Act). The number(s) will be made available to the (State Social Services Agency) to assist with child support enforcement activities and to the Internal Revenue Service for the purpose of determining Earned Income Tax Credit compliance."
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-ssn"
    * text = "What is your Social Security Number?"
    * type = #string
    * repeats = false
  * item[+]
    * linkId = "father-ssn"
    * text = "What is the father’s Social Security Number? If you are not married, and if a paternity acknowledgment has not been completed, leave this item blank."
    * type = #string
    * repeats = false
* item[+]
  * linkId = "baby-ssn"
  * prefix = "26a"
  * text = "Do you want a Social Security Number issued for your baby? [If yes, please sign request below"
  * type = #boolean
  * repeats = false
* item[+]
  * linkId = "baby-ssn-sig"
  * prefix = "26b"
  * text = "I request that the Social Security Administration assign a Social Security number to the child named on this form and authorize the State to provide the Social Security Administration with the information from this form which is needed to assign a number. (Either parent, or the legal guardian, may sign.)"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "baby-ssn-sig-parent"
    * text = "Signature of infant's mother or father"
    * type = #attachment
    * repeats = false
  * item[+]
    * linkId = "baby-ssn-sig-date"
    * text = "Date"
    * type = #date
    * repeats = false
* item[+]
  * linkId = "informant-note"
  * text = "If you are the Mother, please STOP here. If other than the mother please answer the following questions:"
  * type = #display
* item[+]
  * linkId = "informant-name"
  * prefix = "27a"
  * text = "If other than the mother, what is the name of the person providing information for this worksheet?"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "informant-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "informant-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "informant-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "informant-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "informant-relationship"
  * prefix = "27a"
  * text = "What is your relationship to the baby's mother?"
  * type = #open-choice
  * repeats = false
  * answerValueSet = Canonical(InformantRelationshipToMotherVS)
  // * answerValueSet = "http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.7580"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/questionnaires/Questionnaire-patients-fetal-death.fsh

Instance: Questionnaire-patients-fetal-death
InstanceOf: Questionnaire
Title: "Questionnaire - Patient's Fetal Death Worksheet"
Description: "This Questionnaire represents the [Patient's Worksheet for the Report of Fetal Death](https://www.cdc.gov/nchs/data/dvs/fetal-death-mother-worksheet-english-2019-508.pdf)."
Usage: #example
//* url = "http://hl7.org/fhir/us/bfdr/Questionnaire/Questionnaire-patients-fetal-death"
* version = "1.0.0"
* name = "QuestionnairePatientsFetalDeathWorksheet"
* title = "Questionnaire - Patient's Worksheet for the Report of Fetal Death"
* status = #draft
* experimental = false
* subjectType = #Patient
* publisher = "HL7 Public Health Work Group"
* description = "This Questionnaire represents the [Patient's Worksheet for the Report of Fetal Death](https://www.cdc.gov/nchs/data/dvs/fetal-death-mother-worksheet-english-2019-508.pdf)."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
  * text = "United States of America"
* item[0]
  * linkId = "intro"
  * text = "We are truly sorry about the loss you have experienced. We understand that this is a difficult time for you and your loved ones. We need to ask you a few questions to assist in the completion of the official report of fetal death. State laws provide protection against the unauthorized release of identifying information from the report of fetal death to ensure confidentiality of the parents. This information may also help researchers understand some of the factors that are related to miscarriage and stillbirth. Your assistance in providing complete and accurate information is very important. We appreciate your help, especially during this very difficult time."
  * type = #display
* item[+]
  * linkId = "child-name"
  * prefix = "1"
  * text = "Would you like to name the child? This is entirely optional."
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "child-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "child-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "child-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "child-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "mother-current-legal-name"
  * prefix = "2"
  * text = "What is your current legal name?"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "mother-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "mother-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "mother-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "mother-address"
  * prefix = "3"
  * text = "Where do you usually live - that is - where is your household/residence located?"
  * type = #group
  * item[0]
    * linkId = "mother-nbr-street"
    * text = "Complete number and street (do not enter rural route numbers)"
    * type = #string
  * item[+]
    * linkId = "mother-apt-nbr"
    * text = "Apartment Number"
    * type = #string
  * item[+]
    * linkId = "mother-city"
    * text = "City, Town, or Location"
    * type = #string
  * item[+]
    * linkId = "mother-county"
    * text = "County"
    * type = #string
  * item[+]
    * linkId = "mother-state"
    * text = "State (or U.S. Territory, Canadian Province)"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetStatesTerritoriesAndProvincesVitalRecords) 
  * item[+]
    * linkId = "mother-zip"
    * text = "Zip Code"
    * type = #string
  * item[+]
    * linkId = "mother-country"
    * text = "If not in the United States, country"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetResidenceCountryVitalRecords)  
* item[+]
  * linkId = "inside-city-limits"
  * prefix = "4"
  * text = "Is this household inside city limits (inside the incorporated limits of the city, town, or location where you live)?"
  * type = #choice
  * answerValueSet = Canonical(ValueSetYesNoUnknownVitalRecords) 
* item[+]
  * linkId = "mother-mail"
  * prefix = "5"
  * text = "What is your mailing address"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-mail-same"
    * text = "Same as residence [Go to next question]"
    * type = #boolean
  * item[+]
    * linkId = "mother-mail-nbr-street"
    * text = "Complete number and street"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-apt-nbr"
    * text = "Apartment Number"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-po-box"
    * text = "P.O. Box"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-city"
    * text = "City, Town, or Location"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-state"
    * text = "State (or U.S. Territory, Canadian Province)"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetStatesTerritoriesAndProvincesVitalRecords) 
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-zip"
    * text = "Zip Code"
    * type = #string
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
  * item[+]
    * linkId = "mother-mail-country"
    * text = "If not in the United States, country"
    * type = #choice
    * answerValueSet =   Canonical(ValueSetResidenceCountryVitalRecords)
    * enableWhen
      * question = "mother-mail-same"
      * operator = #=
      * answerBoolean = false
* item[+]
  * linkId = "mother-dob"
  * prefix = "6"
  * text = "What is your date of birth?"
  * type = #date
  * repeats = false
* item[+]
  * linkId = "mother-birthplace"
  * prefix = "7"
  * text = "In what State, U.S. territory, or foreign country were you born? Please specify one of the following:"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "mother-birthplace-state"
    * text = "State"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetUSStatesVitalRecords)  // Should be just states
  * item[+]
    * linkId = "mother-birthplace-territory"
    * text = "or U.S. territory, i.e., Puerto Rico, U.S. Virgin Islands, Guam, American Samoa or Norther Marianas"
    * repeats = false
    * type = #choice
    * answerValueSet = Canonical(ValueSetUSTerritoriesVitalRecords) // SHould be just states 
  * item[+]
    * linkId = "mother-birthplace-country"
    * text = "or Foreign country"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetBirthplaceCountryVitalRecords)
* item[+]
  * linkId = "mother-education"
  * code = $loinc#57712-2 "Highest level of education Mother"
  * prefix = "8"
  * text = "What is the highest level of schooling that you have completed at the time of delivery? (Check the box that best describes your education. If you are currently enrolled, check the box that indicates the previous grade or highest degree received)."
  * type = #choice
  * repeats = false
  * answerValueSet = Canonical(ValueSetEducationLevelVitalRecords)
* item[+]
  * linkId = "mother-ethnicity"
  * prefix = "9"
  * text = "Are you Spanish/Hispanic/Latina? (if so, please answer 9a-9d)"
  * type = #boolean
  * repeats = false
* item[+]
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true   
  * linkId = "mother-ethnicity-mexican"
  * text = "Are you Mexican, Mexican-American?"
  * type = #boolean
  * repeats = false
* item[+]
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true   
  * linkId = "mother-ethnicity-puerto-rican"
  * text = "Are you Puerto Rican?"
  * type = #boolean
  * repeats = false
* item[+]
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true   
  * linkId = "mother-ethnicity-cuban"
  * text = "Are you Cuban?"
  * type = #boolean
  * repeats = false
* item[+]
  * enableWhen
    * question = "mother-ethnicity"
    * operator = #=
    * answerBoolean = true    
  * linkId = "mother-ethnicity-other"
  * text = "Are you of other Spanish/Hispanic/Latina (e.g., Spaniard, Salvadoran, Dominican, Columbian)."
  * type = #boolean
  * repeats = false
  * item[+]
    * enableWhen
      * question = "mother-ethnicity-other"
      * operator = #=
      * answerBoolean = true    
    * linkId = "mother-ethnicity-other-literal"
    * text = "(specify)"
    * type = #string
    * repeats = false
* item[+]
  * linkId = "mother-race"
  * prefix = "10"
  * text = "What is your race? (Please check one or more races to indicate what you consider yourself to be)."
  * type = #group
  * repeats = false
  * item[+]
    * linkId = "mother-race-white"
    * text = "White"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-black-or-aa"
    * text = "Black or African American"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-aian"
    * text = "American Indian or Alaskan Native"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-aian-tribe"
      * text = "(name of enrolled or principal tribe)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-aian"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "mother-race-asian-indian"
    * text = "Asian Indian"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-chinese"
    * text = "Chinese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-filipino"
    * text = "Filipino"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-japanese"
    * text = "Japanese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-korean"
    * text = "Korean"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-vietnamese"
    * text = "Vietnamese"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-other-asian"
    * text = "Other Asian"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-other-asian-literal"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-other-asian"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "mother-race-native-hawaiian"
    * text = "Native Hawaiian"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-guamanian-or-chamorro"
    * text = "Guamanian or Chamorro"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-samoan"
    * text = "Samoan"
    * type = #boolean
    * repeats = false
  * item[+]
    * linkId = "mother-race-other-pacific-islander"
    * text = "Other Pacific Islander"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-other-pacific-islander-specify"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-other-pacific-islander"
        * operator = #=
        * answerBoolean = true
  * item[+]
    * linkId = "mother-race-other"
    * text = "Other (specify)"
    * type = #boolean
    * repeats = false
    * item[+]
      * linkId = "mother-race-other-specify"
      * text = "(specify)"
      * type = #string
      * repeats = false
      * enableWhen
        * question = "mother-race-other"
        * operator = #=
        * answerBoolean = true

* item[+]
  * linkId = "father-current-legal-name"
  * prefix = "11"
  * text = "What is the current legal name of your baby's father?"
  * type = #group
  * repeats = false
  * item[0]
    * linkId = "father-first-name"
    * text = "First"
    * type = #string
  * item[+]
    * linkId = "father-middle-name"
    * text = "Middle"
    * type = #string
  * item[+]
    * linkId = "father-last-name"
    * text = "Last"
    * type = #string
  * item[+]
    * linkId = "father-suffix"
    * text = "Suffix (Jr., III, etc.)"
    * type = #string
* item[+]
  * linkId = "father-dob"
  * prefix = "12"
  * text = "What is the father's date of birth?"
  * type = #date
  * repeats = false
* item[+]
  * linkId = "father-birthplace"
  * text = "In what State, U.S. territory, or foreign country was the father born? Please specify one of the following:"
  * type = #group
  * repeats = false
  * prefix = "13"
  * item[0]
    * linkId = "father-birthplace-state"
    * text = "State"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetUSStatesVitalRecords)  
  * item[+]
    * linkId = "father-birthplace-territory"
    * text = "or U.S. territory, i.e., Puerto Rico, U.S. Virgin Islands, Guam, American Samoa or Norther Marianas"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetUSTerritoriesVitalRecords) 
  * item[+]
    * linkId = "father-birthplace-country"
    * text = "or Foreign country"
    * type = #choice
    * repeats = false
    * answerValueSet = Canonical(ValueSetBirthplaceCountryVitalRecords)
* item[+]
  * linkId = "receive-wic"
  * prefix = "14"
  * text = "Did you receive WIC (Women, Infants and Children) food for yourself during this pregnancy?"
  * type = #choice
  * repeats = false
  * answerValueSet = Canonical(ValueSetYesNoUnknownVitalRecords)  //"http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.888"
* item[+]
  * linkId = "mothers-height"
  * prefix = "15"
  * text = "What is your height?"
  * type = #group
  * item[0]
    * linkId = "mothers-height-feet"
    * text = "Feet"
    * type = #quantity
    * repeats = false
  * item[+]
    * linkId = "mothers-height-inches"
    * text = "Inches"
    * type = #quantity
    * repeats = false
* item[+]
  * linkId = "mothers-prepregnancy-weight"
  * prefix = "16"
  * text = "lbs"
  * type = #quantity
  * repeats = false
* item[+]
  * linkId = "mothers-smoking"
  * prefix = "17"
  * text = "How many cigarettes OR packs of cigarettes did you smoke on an average day during each of the following time periods? If you NEVER smoked, enter zero for each time period."
  * type = #group
  * item[0]
    * linkId = "mothers-smoking-3-months-prior"
    * text = "Three months before pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-3-months-prior-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-3-months-prior-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "mothers-smoking-trimester-1"
    * text = "First three months of pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-trimester-1-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-trimester-1-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "mothers-smoking-trimester-2"
    * text = "Second three months of pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-trimester-2-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-trimester-2-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "mothers-smoking-trimester-3"
    * text = "Third trimester of pregnancy"
    * type = #group
    * item[0]
      * linkId = "mothers-smoking-trimester-3-cig"
      * text = "# of cigarettes*"
      * type = #integer
      * repeats = false
    * item[+]
      * linkId = "mothers-smoking-trimester-3-pck"
      * text = "# of packs"
      * type = #integer
      * repeats = false
  * item[+]
    * linkId = "cigarette-note"
    * text = "*refers to tobacco products only, NOT e-cigarettes."
    * type = #display
* item[+]
  * linkId = "outro"
  * text = "Thank you for completing this worksheet at this very difficult time. The information you have provided is very important; it will be used by researchers to better understand factors related to miscarriage and stillbirth and lead to improved prevention strategies for the future."
  * type = #display

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/rulesets/DEF_AddressRuleSets.fsh

RuleSet: CityCode
* address.city.extension contains
    CityCode named cityCode 0..1
* address.city.extension[cityCode] ^label = "City Code"
* address.city.extension[cityCode] ^short = "City Code"
* address.city.extension[cityCode] ^definition = "Numeric code from in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf) and https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt."

RuleSet: CountyCode
* address.district.extension contains
    DistrictCode named districtCode 0..1
* address.district.extension[districtCode] ^label = "County code"
* address.district.extension[districtCode] ^short = "County code"
// Add usage note that codes are from: https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt and
* address.district.extension[districtCode] ^definition = "Numeric code in accordance with the NCHS Instruction Manual Part 8, Vital Records Geographic Classification, 2014 (https://www.cdc.gov/nchs/data/dvs/IMP8_2014.pdf) and https://ftp.cdc.gov/pub/health_Statistics/nchs/Manuals/Mortality/PLACE_CODES.txt."

// See https://gisweb.miamidade.gov/addresssearch/Standards/DC_USPS_Address_Standards.pdf
// for an address like: 5576 S Miami Ave E  Apt 13
RuleSet: AddressComponents
* address.extension contains
   PreDirectional named predir 0..1 and // S
   StreetNumber named stnum 0..1 and    // 5576
   StreetName named stname 0..1 and     // Miami
   StreetDesignator named stdesig 0..1 and // Ave
   PostDirectional named postdir 0..1 and // E
   UnitOrAptNumber named unitnumber 0..1 // Apt 13

RuleSet: addressextension(length)
//* . ^short = "label"
* ^context.type = #element
* ^context.expression = "Address"
* value[x] 1..1
* value[x] only string
* value[x] ^maxLength = {length}

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/rulesets/DEF_BundleIdentifierRuleSet.fsh

RuleSet: BundleIdentifiers
* identifier.value ^short = "Record Identifier (YYYYJJNNNNNN)"
* identifier.value ^definition = "A unique value used by the NCHS to identify a  record. The NCHS uniquely identifies  records by combining three concepts: the year of death (as a four digit number), the jurisdiction of death (as a two character jurisdiction identifier), and the  certificate number assigned by the jurisdiction (a number with up to six digits, left padded with zeros). "
* identifier.value ^maxLength = 12
* identifier 1..1
* identifier.system = $IJE 
* identifier.extension contains
    CertificateNumber named certificateNumber 0..1 and
    AuxiliaryStateIdentifier1 named auxiliaryStateIdentifier1 0..1 and
    AuxiliaryStateIdentifier2 named auxiliaryStateIdentifier2 0..1
* identifier.extension[auxiliaryStateIdentifier1] ^short = "Auxiliary State Identifier 1.  12 characters."
* identifier.extension[auxiliaryStateIdentifier2] ^short = "Auxiliary State Identifier 2.  12 characters."
* identifier.extension[certificateNumber] ^short = "Certificate Number.  Six digit number.  Leading zeroes are optional."

RuleSet: BundleIdentifiersParam(certname, certdesc, local1name, local1desc, local2name, local2desc)
* identifier.value ^short = "Record Identifier (YYYYJJNNNNNN)"
* identifier.value ^definition = "A unique value used by the NCHS to identify a  record. The NCHS uniquely identifies  records by combining three concepts: the year of death (as a four digit number), the jurisdiction of death (as a two character jurisdiction identifier), and the  certificate number assigned by the jurisdiction (a number with up to six digits, left padded with zeros). "
* identifier.value ^maxLength = 12
* identifier.system = Canonical(CodeSystemIJEVitalRecords) (exactly)
* identifier.system ^short = "FHIR requires a codesystem"
* identifier.value 1..1
* identifier.system 1..1
* identifier 1..1
* identifier.extension contains
    CertificateNumber named {certname} 0..1 and
    AuxiliaryStateIdentifier1 named {local1name} 0..1 and
    AuxiliaryStateIdentifier2 named {local2name} 0..1
* identifier.extension[{local1name}] ^short =  "{local1desc}"
* identifier.extension[{local2name}] ^short = "{local2desc}"
* identifier.extension[{certname}] ^short = "{certdesc}"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/rulesets/DEF_CompositionRuleSets.fsh

RuleSet: BFDRCompositionSectionEntrySlicing(section, min, code, composition)
* section contains {section} {min}..1
* section[{section}].code = $loinc#{code} //1..1
* section[{section}] ^short = "{section} Section on the {composition} Report"
* section[{section}] ^definition = "{section}"
* section[{section}].entry ^slicing.discriminator.type = #profile
* section[{section}].entry ^slicing.discriminator.path = "$this.resolve()"
* section[{section}].entry ^slicing.rules = #open
* section[{section}].entry ^short = "Entries that are contained in the {section} Section"
* section[{section}].entry ^definition = "Entries that are contained in the {section} Section"

RuleSet: BFDRCompositionLocalSectionEntrySlicing(section, min, code, composition)
* section contains {section} {min}..1
* section[{section}].code = {code} //1..1
* section[{section}] ^short = "{section} Section on the {composition} Report"
* section[{section}] ^definition = "{section}"
* section[{section}].entry ^slicing.discriminator.type = #profile
* section[{section}].entry ^slicing.discriminator.path = "$this.resolve()"
* section[{section}].entry ^slicing.rules = #open
* section[{section}].entry ^short = "Entries that are contained in the {section} Section"
* section[{section}].entry ^definition = "Entries that are contained in the {section} Section"

RuleSet: BFDRCompositionSectionSlice(section, name, min, max, short, def, class)
* section[{section}].entry contains {name} {min}..{max}
* section[{section}].entry[{name}] ^short = "{short}"
* section[{section}].entry[{name}] ^definition = "{def}"
* section[{section}].entry[{name}] only Reference({class})

RuleSet: FocusRule(section, short, def, class)
* section[{section}].focus 1..1 
* section[{section}].focus ^short = "{short}"
* section[{section}].focus ^definition = "{def}"
* section[{section}].focus only Reference({class})


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/rulesets/DEF_MotherOrFather.fsh

RuleSet: MotherOrFather
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from ValueSetRoleVitalRecords (extensible)
  * ^short = "Value set used to indicate father or mother."
  * ^binding.description = "Parental Role"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/rulesets/DEF_ProfileBasedEntrySlicing.fsh

RuleSet: ProfileBasedEntrySlicing
* entry.resource 1..1 // each entry must have a resource
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the profile"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/rulesets/DEF_Rulesets.fsh

RuleSet: boilerplate
// * ^status = #draft
// * ^experimental = false
// * ^date = "2022-02-08"
* ^publisher = "Health Level Seven International"
// * ^contact[0].name = "HL7 International - Public Health"
// * ^contact[=].telecom.system = #url
// * ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/pher"
// * ^contact[+].name = "Cynthia Bush, Health Scientist (Informatics), CDC/National Center for Health Statistics"
// * ^contact[=].telecom.system = #email
// * ^contact[=].telecom.value = "pdz1@cdc.gov"
// * ^contact[+].name = "AbdulMalik Shakir, FHL7, President and Chief Informatics Scientist Hi3 Solutions"
// * ^contact[=].telecom.system = #email
// * ^contact[=].telecom.value = "abdulmalik.shakir@hi3solutions.com"
// * ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
// * ^jurisdiction.text = "US Realm"


RuleSet: Extension(name, min, max, short, def, class)
* extension contains {name} {min}..{max}
* extension[{name}] ^short = "{short}"
* extension[{name}] ^definition = "{def}"
* extension[{name}].value[x] only {class}

RuleSet: CodingExtension(name, min, max, short, def, valueset)
* insert Extension({name},{min},{max},{short},{def}, Coding)
* extension[{name}].value[x] from {valueset} (required)

RuleSet: BundleSlice(name, min, max, short, def, class)
* entry contains {name} {min}..{max}
* entry[{name}] ^short = "{short}"
* entry[{name}] ^definition = "{def}"
* entry[{name}].resource only {class}
//* entry[{name}].resource.meta.profile = Canonical({class})

RuleSet: RequireMetaProfile(profile)
// * meta 1..1
// * meta.profile 1..*
// * meta.profile ^slicing.discriminator.type = #pattern
// * meta.profile ^slicing.discriminator.path = "$this"
// * meta.profile ^slicing.rules = #open
// * meta.profile ^slicing.ordered = false
// * meta.profile ^slicing.description = "Slice based on value"
// * meta.profile contains supportedProfile 1..1
// * meta.profile[supportedProfile] = Canonical({profile})
// this now does nothing
* hello

RuleSet: AddMetaProfile(profile)
* meta
  * profile[+] = Canonical({profile})


RuleSet: SNOMEDCopyright
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"

RuleSet: LOINCCopyright
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"

RuleSet: LOINCSNOMEDCopyright
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement.
This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"

RuleSet: ExtensionContext(path)
* ^context[+].type = #element
* ^context[=].expression = "{path}"

RuleSet: ExtensionContextResource(path)
* insert ExtensionContext({path})
//* insert ExtensionContext({path}.Extension)

RuleSet: ExtensionContextFhirpath(fhirpath)
* ^context[+].type = #fhirpath
* ^context[=].expression = "{fhirpath}"



RuleSet: ParameterSlicing
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.description = "Slicing based on the profile conformance of the sliced element"

RuleSet: ParameterName(name,short,def)
* parameter contains {name} 0..1
* parameter[{name}].name = "{name}"
* parameter[{name}] ^short = "{short}"
* parameter[{name}] ^definition = "{def}"
* parameter[{name}].extension 0..0

RuleSet: ParameterNameType(name, type, short, def)
* insert ParameterName({name},{short}, {def})
* parameter[{name}].value[x] only {type}
* parameter[{name}].value[x] 1..1
* parameter[{name}].resource 0..0
* parameter[{name}].part 0..0
* parameter[{name}].extension 0..0

RuleSet: obscodecomponent(code, valueSet)
* component contains {code} 0..1
* component[{code}].code 1..1
* component[{code}].code = ComponentCS#{code}
* component[{code}].value[x] 1..1
* component[{code}].value[x] only CodeableConcept
* component[{code}] ^short = "{code}"
* component[{code}].value[x] from {valueSet}

RuleSet: primobscodecomponent(code, type)
* component contains {code} 0..1
* component[{code}].code 1..1
* component[{code}].code = ComponentCS#{code}
* component[{code}].value[x] 1..1
* component[{code}].value[x] only {type}
* component[{code}] ^short = "{code}"

RuleSet: NCHSObservationCommon
* subject only Reference(PatientVitalRecords) //generalized to PatientVitalRecords
* subject ^short = "Decedent"
// * effective[x] 1..1
* effective[x] only dateTime
* effective[x] ^short = "Date/Time when added to death record"

RuleSet: addentry(type, id)
* entry[+].resource = {id}
* entry[=].fullUrl = "http://www.example.org/fhir/{type}/{id}"

RuleSet: addentryComposition(type, id)
* entry[+].reference = "{type}/{id}"

RuleSet: addNamedEntryComposition(name, type, id)
* entry[{name}][+].reference = "{type}/{id}"

RuleSet: addReferenceComposition (field, type, id)
* {field}.reference = "{type}/{id}"

RuleSet: CategorySlicingRules
* insert FieldSlicingRules(category, Category)

RuleSet: TypeSlicingRules
* insert FieldSlicingRules(type, Type)


RuleSet: FieldSlicingRules(field,Field)
* {field} 1.. 
* {field} ^slicing.discriminator.type = #pattern
* {field} ^slicing.discriminator.path = "$this"
* {field} ^slicing.rules = #open
* {field} ^slicing.description = "Slicing requires the given value but allows additional values"
* {field} contains required{Field} 1..1





---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetApgarTiming.fsh

ValueSet: ApgarTimingVS
Id: ValueSet-apgar-timing
Title: "APGAR Score Timing"
Description: "This valueset contains codes to represent standard timings for APGAR assessments."
* ^experimental = false
* ^status = #active 
* insert LOINCSNOMEDCopyright
* $loinc#9272-6 "1 minute Apgar Score"
* $loinc#9274-2 "5 minute Apgar Score"
* $loinc#9271-8 "10 minute Apgar Score"
* SNOMED_CT#443848000 "Apgar score at 15 minutes (observable entity)"
* SNOMED_CT#443849008 "Apgar score at 20 minutes (observable entity)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetBirthAndFetalDeathFinancialClass.fsh

ValueSet: BirthAndFetalDeathFinancialClassVS
Id: ValueSet-birth-and-fetal-death-financial-class
Title: "Birth and Fetal Death Financial Class"
Description: "This valueset contains codes to represent birth and fetal death financial class. 

Mapping to IJE codes [here](ConceptMap-BirthAndFetalDeathFinancialClassCM.html)."
* ^experimental = false
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#33 "Indian Health Service or Tribe" //33
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#2 "MEDICAID" //2
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#99 "No Typology Code available for payment source" //99
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#38 "Other Government (Federal, State, Local not specified)" //38
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#5 "PRIVATE HEALTH INSURANCE" //5
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#81 "Self-pay" //81
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#311 "TRICARE (CHAMPUS)" //311
* $PHCS_BirthAndFetalDeathFinancialClass_NCHS#9999 "Unavailable / Unknown" //9999

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetBirthAttendantTitles.fsh

ValueSet: BirthAttendantTitlesVS
Id: ValueSet-birth-attendant-titles
Title: "Birth Attendants Titles"
Description: "This valueset contains codes to represent the type of birth attendant titles. 

Mapping to IJE codes [here](ConceptMap-BirthAttendantTitlesCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* $sct#112247003 "Medical Doctor"
* $sct#76231001 "Osteopath"
* $sct#445521000124102 "Advanced Practice Midwife"
* $sct#445531000124104 "Lay Midwife"
* $v3-NullFlavor#OTH "Other"
* $v3-NullFlavor#UNK "Unknown"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetBirthDeliveryOccurred.fsh

ValueSet: BirthDeliveryOccurredVS
Id: ValueSet-birth-delivery-occurred
Title: "Birth Delivery Occurred"
Description: "This valueset contains codes to represent the type of place where birth or delivery occurred.

Mapping to IJE codes [here](ConceptMap-BirthDeliveryOccurredCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* $sct#22232009 "Hospital"
* $sct#91154008 "Free-standing birthing center"
* $sct#408839006 "Planned home birth"
* $sct#408838003 "Unplanned home birth"
* LocalBFDRCodesCS#unknownplannedhomebirth "Unknown if Planned Home Birth" // PHC1297
* $sct#67190003 "Free-standing clinic"
* $v3-NullFlavor#OTH "Other"
* $v3-NullFlavor#UNK "Unknown"



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetBirthWeightEditFlags.fsh

ValueSet: BirthWeightEditFlagsVS
Id: ValueSet-birth-weight-edit-flags 
Title: "Birth Weight Edit Flags (NCHS)"
Description: "This valueset contains codes to represent Birth Weight Edit Flags.

Mapping to IJE codes [here](ConceptMap-BirthWeightEditFlagsCM.html)."
* ^experimental = false
* CodeSystemEditFlagsVitalRecords#0off "Off"
* EditFlagsCS#1correctOutOfRange "Queried data correct, out of range"
* EditFlagsCS#2failedBirthWeightGestationEdit "Queried, failed birthweight/gestation edit"



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetCigaretteSmokingBeforeAndDuringPregnancy.fsh

ValueSet: CigaretteSmokingBeforeAndDuringPregnancyVS
Id: cigarette-smoking-before-during-pregnancy
Title: "Cigarette Smoking Before and During Pregnancy"
Description: "This valueset contains codes to represent the number of cigarettes smoked in specific periods before and during pregnancy."
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false 
* $loinc#64794-1 "In the 3 months before you got pregnant, how many cigarettes did you smoke on an average day [PhenX]"
* $loinc#87298-6 "Cigarettes smoked per day by Mother--1st trimester"
* $loinc#87299-4 "Cigarettes smoked per day by Mother--2nd trimester"
* $loinc#64795-8 "In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day [PhenX]"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetDeliveryRoutes.fsh

ValueSet: DeliveryRoutesVS
Id: ValueSet-delivery-routes
Title: "Delivery Routes"
Description: "This valueset contains codes to represent Delivery Routes. 

Mapping to IJE codes [here](ConceptMap-DeliveryRoutesCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* $sct#700000006 "Vaginal delivery of fetus (procedure)"
//       48782003	"Spontaneous vaginal delivery (finding)"
* $sct#302383004 "Forceps delivery (procedure)"
// 302383004	"Vaginal/Forceps" -- procedure 
* $sct#61586001	"Delivery by vacuum extraction (procedure)"
* $sct#11466000	"Cesarean section (procedure)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetEstimateOfGestationEditFlags.fsh

ValueSet: EstimateOfGestationEditFlagsVS
Id: ValueSet-estimate-of-gestation-edit-flags 
Title: "Estimate of Gestation Edit Flags (NCHS)"
Description: "This valueset contains codes to represent Estimate of Gestation Edit Flags. 

Mapping to IJE codes [here](ConceptMap-EstimateOfGestationEditFlagsCM.html)."
* ^experimental = false
* CodeSystemEditFlagsVitalRecords#0off "Off"
* EditFlagsCS#1correctOutOfRange "Queried data correct, out of range"




---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetFertilityEnhancingDrugTherapyArtificialInsemination.fsh

ValueSet: FertilityEnhancingDrugTherapyArtificialInseminationVS
Id: ValueSet-fertility-enhancing-drug-therapy-artificial-insem
Title: "Fertility Enhancing Drug Therapy and Artificial Insemination Value Set"
Description: "This valueset contains codes to represent fertility enhancing drug therapy and artificial insemination."
* ^experimental = false
* ^status = #active 
* insert SNOMEDCopyright
* SNOMED_CT#58533008 "Artificial Insemination (procedure)"
* SNOMED_CT#265064001 "Intrauterine artificial insemination (procedure)"
* SNOMED_CT#445151000124101 "Fertility Enhancing Drug Therapy Procedure (procedure)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetFetalDeathCauseOrConditionVitalRecords.fsh

ValueSet: FetalDeathCauseOrConditionVS
Id: ValueSet-fetal-death-cause-or-condition
Title: "Fetal Death Cause or Condition"
Description: "This valueset contains codes to represent fetal death cause or condition. 

Mapping to IJE codes [here](ConceptMap-FetalDeathCauseOrConditionCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* SNOMED_CT#44223004  "Premature rupture of membranes (disorder)"
* SNOMED_CT#415105001 "Placental abruption (disorder)"
* SNOMED_CT#237292005 "Placental insufficiency (disorder)"
* SNOMED_CT#270500004 "Prolapsed cord (disorder)"
* SNOMED_CT#11612004  "Chorioamnionitis (disorder)"
* SNOMED_CT#702709008 "Congenital anomaly of fetus (Specify) (disorder)"
* SNOMED_CT#277489001 "Fetal trauma (Specify) (disorder)"
* SNOMED_CT#128270001 "Infectious disorder of the fetus (Specify) (disorder)"
* LocalBFDRCodesCS#FCOD_maternalconditions "Maternal Conditions/Diseases (Specify)(disorder)" // PHC1301
* LocalBFDRCodesCS#FCOD_membranes "Complications of Placenta, Cord, or Membranes: Other (Specify)(disorder)" // PHC1298
* LocalBFDRCodesCS#FCOD_obstetricalcomplications "Other Obstetrical or Pregnancy Complications (Specify)(disorder)" // PHC1299
* LocalBFDRCodesCS#FCOD_fetalconditions "Other Fetal Conditions/Disorder (Specify)(disorder)" // PHC1300
* $v3-NullFlavor#UNK "unknown"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetFetalDeathTimePoints.fsh

ValueSet: FetalDeathTimePointsVS
Id: ValueSet-fetal-death-time-points
Title: "Fetal Death Time Points"
Description: "This valueset contains codes to represent fetal death time points. 

Mapping to IJE codes [here](ConceptMap-FetalDeathTimePointsCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* $sct#434681000124104 "Antepartum fetal death with cessation of labor"
* $sct#434671000124102 "Antepartum fetal death with continued labor"
* $sct#434631000124100 "Fetal intrapartum death after first assessment"
* $v3-NullFlavor#UNK "Unknown"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetFetalPresentations.fsh

ValueSet: FetalPresentationsVS
Id: ValueSet-fetal-presentations
Title: "Fetal Presentations"
Description: "This valueset contains codes to represent fetal presentations. Only these codes are supported for exchange with NCHS.

Mapping to IJE codes [here](ConceptMap-FetalPresentationCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* $sct#70028003 "Vertex presentation (finding)" // 1 Cephalic
* $sct#6096002 "Breech presentation (finding)" // 2 Breech
// * $sct#163518000 "On examination - fetal presentation unsure	Unknown fetal presentation (finding)"
* $v3-NullFlavor#OTH "Other"     //3 Other
* $v3-NullFlavor#UNK "unknown"   // 9 Unknown
// Expanded maximum of valueset to include all abnormal presentations based on FHIR-44554



ValueSet: FetalPresentationsMaxVS
Id: ValueSet-fetal-presentations-max
Title: "Fetal Presentations - Max"
Description: "This valueset contains codes to represent fetal presentations. It expands on the [FetalPresentationsVS](ValueSet-ValueSet-fetal-presentations.html) by including intensionally all codes for abnormal presentations, 
as suggested by [FHIR-44554](https://jira.hl7.org/browse/FHIR-44554)."
* ^experimental = false
* insert SNOMEDCopyright
* include codes from valueset FetalPresentationsVS
* include codes from system $sct where concept is-a #15028002 "Abnormal fetal presentation (finding)"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetInfectionsDuringPregnancyLiveBirth.fsh

ValueSet: InfectionsDuringPregnancyLiveBirthVS
Id: ValueSet-infections-during-pregnancy-live-birth
Title: "Infections During Pregnancy Live Birth"
Description: "This valueset contains codes to represent Infections During Pregnancy Live Birth. Includes 'Other' value for general utility, although #OTH is not allowed for birth submissions to NCHS.

Mapping to IJE codes [here](ConceptMap-InfectionsDuringPregnancyLiveBirthCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* SNOMED_CT#15628003 "Gonorrhea (disorder)"
* SNOMED_CT#76272004 "Syphilis (disorder)"
* SNOMED_CT#105629000 "Chlamydia (disorder)"
* SNOMED_CT#66071002 "Hepatitis B (disorder)"
* SNOMED_CT#50711007 "Hepatitis C (disorder)"
* SNOMED_CT#33839006 "Genital herpes simplex (disorder)"
//* SNOMED_CT#260413007 "None"
* $v3-NullFlavor#OTH "Other"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetInformantRelationshipToMother.fsh

ValueSet: InformantRelationshipToMotherVS
Id: ValueSet-informant-relationship-to-mother
Title: "Informant Relationship to Mother"
Description: "This valueset contains codes to represent informants relationship to mother."
* ^experimental = false
* ^copyright = "include appropriate copyright ruleset"
* LocalBFDRCodesCS#rel_fatherofbaby "Father of baby" //1496
* LocalBFDRCodesCS#rel_hospitalemployee "Hospital employee" //1498
* LocalBFDRCodesCS#rel_other "Other (with write in text)" //1499
* LocalBFDRCodesCS#rel_otherrelative "Other relative" //1497


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetLocationType.fsh

ValueSet: LocationTypeVS
Id: ValueSet-location-types
Title: "Location Types"
Description: "This valueset contains codes used to differentate transfer and birth locations"
* ^experimental = false
* LocalBFDRCodesCS#loc_birth "Birth Location"                  // birth and maternity encounters
* LocalBFDRCodesCS#loc_transfer-from "Transfer-from Location"  // maternity encounter
* LocalBFDRCodesCS#loc_transfer-to "Transfer-to Location"      // birth encounter

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetMethodOfDisposition.fsh

ValueSet: FetalRemainsDispositionMethodVS
Id: ValueSet-fetal-remains-disposition-method
Title: "Fetal Remains Disposition Method"
Description: "This valueset contains codes to represent Fetal Remains Method of Disposition. Fetal Remains Disposition Method Value Set differs from the related VRDR [MethodOfDispositionVS](https://hl7.org/fhir/us/vrdr/ValueSet-vrdr-method-of-disposition-vs.html) since it includes 'Hospital Disposition', but not 'Entombment'."
* insert boilerplate
* insert SNOMEDCopyright
* $sct#449971000124106 "Burial"
* $sct#449961000124104 "Cremation"
* $sct#449951000124101 "Donation"
* $sct#455401000124109 "Hospital Disposition"
* $v3-NullFlavor#OTH "Other"
* $sct#449941000124103 "Removal from state"
* $v3-NullFlavor#UNK "Unknown"
* ^experimental = false

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetNewbornCongenitalAnomalies.fsh

ValueSet: NewbornCongenitalAnomaliesVS
Id: ValueSet-newborn-congenital-anomalies
Title: "Newborn Congenital Anomalies"
Description: "The valueset contains codes to represent newborn congenital anomalies. Includes 'Other' value for general utility, although #OTH is not allowed for birth submissions to NCHS.

Mapping to IJE codes [here](ConceptMap-NewbornCongenitalAnomaliesCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* SNOMED_CT#89369001	"Anencephalus"
* SNOMED_CT#67531005	"Meningomyelocele/Spina bifida" 
* SNOMED_CT#12770006	"Cyanotic congenital heart disease"
* SNOMED_CT#17190001	"Congenital diaphragmatic hernia"
* SNOMED_CT#18735004	"Congenital omphalocele"
* SNOMED_CT#72951007	"Gastroschisis"
* SNOMED_CT#67341007	"Longitudinal deficiency of limb - Limb reduction defect (excluding congenital amputation and dwarfing syndromes)"
* SNOMED_CT#80281008	"Cleft Lip with or without Cleft Palate"
* SNOMED_CT#87979003	"Cleft palate"
* SNOMED_CT#70156005	"Anomaly of chromosome pair 21"
* SNOMED_CT#409709004	"Chromosomal disorder"
* SNOMED_CT#416010008	"Hypospadias"
* $v3-NullFlavor#OTH    "Other"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetNumberPreviousCesareansEditFlags.fsh

ValueSet: NumberPreviousCesareansEditFlagsVS
Id: ValueSet-number-previous-cesareans-edit-flags 
Title: "Number of Previous Cesareans Edit Flags (NCHS)"
Description: "This valueset contains codes to represent Number of Previous Cesareans Edit Flags.

Mapping to IJE codes [here](ConceptMap-NumberPreviousCesareansEditFlagsCM.html)."
* ^experimental = false
* CodeSystemEditFlagsVitalRecords#0 "Edit Passed" //PHC1362
* EditFlagsCS#1failedVerified "Edit Failed, Verified" //PHC1492




---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetObstetricProcedureOutcome.fsh

ValueSet: ObstetricProcedureOutcomeVS
Id: ValueSet-obstetric-procedure-outcome
Title: "Obstetric Procedure Outcome"
Description: "This valueset contains codes that represent the successful or unsuccessful outcome of an obstretric procedure"
* ^status = #active
* ^experimental = false
* insert SNOMEDCopyright
* SNOMED_CT#385669000 "Successful (qualifier value)"
* SNOMED_CT#385671000 "Unsuccessful (qualifier value)"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetPerformedNotPerformedPlanned.fsh

ValueSet: PerformedNotPerformedPlannedVS
Id: ValueSet-performed-not-performed-planned
Title: "Performed NotPerformed Planned"
Description: "This valueset contains codes to represent the status (performed, not performed, planned) of histological placental examinations.

Mapping to IJE codes [here](ConceptMap-PerformedNotPerformedPlannedCM.html)."
* ^experimental = false
* insert SNOMEDCopyright
* $sct#398166005 "Performed"
* $sct#262008008 "Not Performed"
* $sct#397943006 "Planned"


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetPregnancyReportEditFlags.fsh

ValueSet: PregnancyReportEditFlagsVS
Id: ValueSet-pregnancy-report-edit-flags 
Title: "Pregnancy Report Edit Flags (NCHS)"
Description: "This valueset contains codes to represent Pregnancy Report Edit Flags. Used for MothersHeight, MothersDeliveryWeight, MothersPrepregnancyWeight, NumberPrenatalCareVisits.

Mapping to IJE codes [here](ConceptMap-PregnancyReportEditFlagsCM.html)."
* ^experimental = false
* CodeSystemEditFlagsVitalRecords#0 "Edit Passed" //PHC1362
* CodeSystemEditFlagsVitalRecords#1 "Edit Failed, Data Queried, and Verified" //PHC1363
* CodeSystemEditFlagsVitalRecords#2 "Edit Failed, Data Queried, but not Verified" //PHC1364 



---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/valuesets/ValueSetUnitsOfGestationalAge.fsh

ValueSet: UnitsOfGestationalAgeVS
Id: ValueSet-units-of-gestational-age
Title: "Units of Gestational Age"
Description: "This valueset contains the set of codes for specifying the units used when recording gestational age (days, weeks.).

Reporting to NCHS is always in units of weeks, but other users of the associated [ObservationGestationalAgeAtDelivery](StructureDefinition-Observation-gestational-age-at-delivery.html) profile may want to record days.
"
* ^status = #active
* ^experimental = false
* $unitsofmeasure#d "Days"
* $unitsofmeasure#wk "Weeks"

---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/aliases.fsh

Alias: $loinc = http://loinc.org
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $sct = http://snomed.info/sct
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $cpt = http://www.ama-assn.org/go/cpt
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $v2-0532 = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $discharge-disposition = http://terminology.hl7.org/CodeSystem/discharge-disposition
Alias: $admit-source = http://terminology.hl7.org/CodeSystem/admit-source
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $icd-10 = http://hl7.org/fhir/sid/icd-10
Alias: $sopt = https://nahdo.org/sopt
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v2-0005 =  urn:oid:2.16.840.1.113883.6.238  //RaceAndEthnicityCDC was http://terminology.hl7.org/CodeSystem/v2-0005
Alias: $v3-Ethnicity = http://terminology.hl7.org/CodeSystem/v3-Ethnicity
Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $2.16.840.1.114222.4.11.7933 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.7933
Alias: $2.16.840.1.114222.4.11.7567 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.7567
Alias: $procedure-outcome = http://hl7.org/fhir/ValueSet/procedure-outcome

Alias: $loinc = http://loinc.org
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $unitsofmeasure = http://unitsofmeasure.org
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $sct = http://snomed.info/sct
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
// Alias: $v2-0005 = RaceAndEthnicityCDC // http://terminology.hl7.org/CodeSystem/v2-0005
Alias: $v3-Ethnicity = http://terminology.hl7.org/CodeSystem/v3-Ethnicity
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v2-0532 = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $v3-AdministrativeGender = http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender
Alias: $us-core-birthsex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $patient-birthTime = http://hl7.org/fhir/StructureDefinition/patient-birthTime
Alias: $v3-Ethnicity_1 = http://terminology.hl7.org/ValueSet/v3-Ethnicity

// External CS and VS
Alias: $v2-0532 = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $admingender = http://hl7.org/fhir/administrative-gender
Alias: $maritalStatus = http://hl7.org/fhir/ValueSet/marital-status
Alias: $roleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $contactRole = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $degreeLicenseCertificateV2 = http://terminology.hl7.org/CodeSystem/v2-0360
Alias: $HL7_EducationLevelCS = 	http://terminology.hl7.org/CodeSystem/v3-EducationLevel
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-EducationLevel = http://terminology.hl7.org/CodeSystem/v3-EducationLevel
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $loinc = http://loinc.org
Alias: $sct = http://snomed.info/sct
Alias: $icd10 = http://hl7.org/fhir/sid/icd-10
Alias: $ICD10VS = http://hl7.org/fhir/ValueSet/icd-10
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $list-order = http://terminology.hl7.org/CodeSystem/list-order
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $location-physical-type = http://terminology.hl7.org/CodeSystem/location-physical-type
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $v3-ServiceDeliveryLocationRoleType = http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType
Alias: $statesVS = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
Alias: $statesCS = https://www.usps.com/
Alias: $UCUM = http://unitsofmeasure.org
Alias: $ssn = http://hl7.org/fhir/sid/us-ssn
// Alias: $provinces = http://canadapost.ca/CodeSystem/ProvinceCodes
Alias: $provinces = http://canadapost.ca

Alias: $dataabsentreason401 = http://hl7.org/fhir/CodeSystem/data-absent-reason|4.0.1  
Alias: $DataAbsentReason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
// USCore
Alias: USCoreRelatedPerson = http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson
Alias: USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner


// PHINVADS ValueSets - only occupation and industry and Financial Class remain
Alias: $PHVS_Industry_CDC_Census2018 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8066
Alias: $PHVS_Occupation_CDC_Census2018 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8065
Alias: $PHVS_Industry_CDC_Census2012 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8027
Alias: $PHVS_Occupation_CDC_Census2012 = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.8026
Alias:  $PHVS_BirthAndFetalDeathFinancialClass_NCHS = http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.7163
Alias:  $PHCS_BirthAndFetalDeathFinancialClass_NCHS = https://nahdo.org/sopt
// Local Codes from IJE
Alias: $IJE = http://hl7.org/fhir/us/vr-common-library/CodeSystem/codesystem-ije-vr


---

File: repos/HL7_SLASH_fhir-bfdr/input/fsh/changelog.md

## Change Log

### 15 November 2023
- Moved PatientDecedentFetus and related examples from VRCL to BFDR

### 31 October 2023
- Removed ObservationRaceVitalRecords and ObservationTabulatedEthnicityVitalRecords in VRCL and related instances in BFDR

### 25 October 2023
- ObservationFetalRemainsDispositionMethod and related instance were removed to the superseded folder, per discussion: There is no disposition info in the mapping spreadsheet, the data dictionary, or the 1.1 BFDR that I can see.  This might need to move back to VRDR. MDI doesn’t cover entombment – it is upstream from disposition.   If it is already in VRDR, perhaps it could simply be commented out in VRCL and BFDR for now with a note added to change log.
- EmergingIssues section added to birth and fetal death compositions

### 17 October 2023

#### **Summary**
- ObservationPluralityVitalRecords and associated instances removed and replaced by multipleBirths extension.
- editFlags were removed and are now extensions in their corresponding profiles
- editFlags value sets were consolidated

#### Deleted Instances
- observation-edit-birth-weight-babyg-quinn
- observation-edit-flag-delivery-wgt-not-named
- observation-edit-flag-est-gestation-not-named
- observation-edit-flag-estimate-of-gestation-example
- observation-edit-flag-fathers-date-of-birth-example
- observation-edit-flag-fathers-education-example
- observation-edit-flag-mothers-date-of-birth-example
- observation-edit-flag-mothers-delivery-weight-example
- observation-edit-flag-mothers-dob-not-named
- observation-edit-flag-mothers-education-example
- observation-edit-flag-mothers-education-not-named
- observation-edit-flag-mothers-height-example
- observation-edit-flag-mothers-height-not-named
- observation-edit-flag-mothers-prepreg-wgt-not-named
- observation-edit-flag-mothers-prepregnancy-weight-example
- observation-edit-flag-nbr-previous-cesareans-not-named
- observation-edit-flag-number-prenatal-care-visits-example
- observation-edit-flag-number-previous-cesareans-example
- observation-edit-flag-plurality-example
- observation-edit-flag-plurality-not-named


#### Deleted Profiles
- ObservationEditFlagPlurality
- ObservationEditFlagBirthweight
- ObservationEditFlagEstimateOfGestation
- ObservationEditFlagFathersDateOfBirth
- ObservationEditFlagFathersEducation
- ObservationEditFlagMothersDateOfBirth
- ObservationEditFlagMothersDeliveryWeight
- ObservationEditFlagMothersEducation
- ObservationEditFlagMothersHeight
- ObservationEditFlagMothersPrepregnancyWeight
- ObservationEditFlagNumberPrenatalCareVisits
- ObservationEditFlagNumberPreviousCesareans

### As of 5 October 2023

#### **Summary**
The main change was that a subset of profiles/instances were moved between VRCL and BFDR. Those moved to BFDR had archived copies put in a "superseded" folder in VRCL and those moved to VRCL had archived copies put in a "superseded" folder in BFDR. Old instances were deleted after harmonization and STU1.1 updates were incorporated to profiles. - compositions/- bundles (besides those - related to race/ethnicity and cause of death) were updated accordingly. 

#### **Profiles Moving from VRCL (Superseded)**

- observationPreviousPretermBirth_new
- conditionEclampsiaHypertension_new
- conditionGestationalDiabetes_new
- conditionGestationalHypertension_new
- conditionPrepregnancyDiabetes_new
- conditionPrepregnancyHypertension_new
- observationApgarScore_new
- observationBirthWeight_new
- observationGestationalAgeAtDelivery_new
- observationInfantLiving_new
- observationLastMenstrualPeriod_new
- observationMotherDeliveryWeight_new
- observationMotherHeight_new
- observationMotherPrepregnancyWeight_new
- observationNoneOfSpecifiedPregnancyRiskFactorsNew
- observationNumberBirthsNowDead_new
- observationNumberBirthsNowLiving_new
- observationNumberFetalDeathsThisDelivery_new
- observationNumberLiveBirthsThisDelivery_new
- observationNumberOtherPregnancyOutcomes_new
- observationNumberPrenatalVisits_new
- observationNumberPreviousCesareans_new
- observationPreviousCesarean_new
- procedureArtificialInsemination_new
- procedureAssistedFertilization_new
- procedureInfertilityTreatment_new

#### **Profiles Moving to VRCL (Superseded)**

- patientChild_new
- patientDecedentFetus_new
- patientMother_new

#### **Instances Moving from VRCL**

- observation-gestational-age-at-delivery-not-named-new
- condition-gestational-diabetes-carmen-teresa-lee-new
- condition-gestational-diabetes-jada-ann-quinn-new
- condition-gestational-hypertension-jada-ann-quinn-new
- condition-prepregnancy-diabetes-jada-ann-quinn-new
- condition-prepregnancy-hypertension-carmen-teresa-lee-new
- observation-apgar-score-babyg-quinn-1-min-new
- observation-apgar-score-babyg-quinn-5-min-new
- observation-birth-weight-babyg-quinn-new
- observation-birth-weight-not-named-new
- observation-gestational-age-at-delivery-babyg-quinn-new
- observation-infant-living-babyg-quinn-new
- observation-last-menstrual-period-carmen-teresa-lee-new
- observation-last-menstrual-period-jada-ann-quinn-new
- observation-mother-delivery-weight-jada-ann-quinn-new
- observation-mother-height-carmen-teresa-lee-new
- observation-mother-height-jada-ann-quinn-new
- observation-mother-prepregnancy-weight-carmen-teresa-lee-new
- observation-mother-prepregnancy-weight-jada-ann-quinn-new
- observation-number-births-now-dead-carmen-teresa-lee-new
- observation-number-births-now-dead-jada-ann-quinn-new
- observation-number-births-now-living-carmen-teresa-lee-new
- observation-number-births-now-living-jada-ann-quinn-new
- observation-number-deaths-this-delivery-carmen-teresa-lee-new
- observation-number-live-births-this-delivery-carmen-teresa-lee-new
- observation-number-live-births-this-delivery-jada-ann-quinn-new
- observation-number-other-pregnancy-outcomes-jada-ann-quinn-new
- observation-number-prenatal-visits-jada-ann-quinn-new
- observation-number-previous-cesareans-carmen-teresa-lee-new
- observation-number-previous-cesareans-jada-ann-quinn-new
- procedure-assisted-fertilization-jada-ann-quinn-new
- procedure-infertility-treatment-jada-ann-quinn-new

#### **Instances Moving to VRCL**

- practitioner-vital-records-avery-jones
- observation-parent-education-level-carmen-teresa-lee-new
- observation-parent-education-level-jada-ann-quinn-new
- observation-parent-education-level-james-quinn-new
- observation-race-carmen-teresa-lee
- observation-race-jada-ann-quinn
- observation-race-james-quinn
- observation-race-tom-yan-lee
- observation-tabulated-ethnicity-carmen-teresa-lee
- observation-tabulated-ethnicity-jada-ann-quinn
- observation-tabulated-ethnicity-james-quinn
- observation-tabulated-ethnicity-tom-yan-lee
- patient-decedent-fetus-not-named-new
- patient-mother-birth-date-part-absent-new
- patient-mother-carmen-teresa-lee-new
- patient-mother-jada-ann-quinn-new
- practitioner-vital-records-janet-seito
- practitioner-vital-records-jessica-leung
- relatedperson-father-natural-james-brandon-quinn-new
- relatedperson-father-natural-tom-yan-lee
- relatedperson-mother-carmen-teresa-lee
- relatedperson-mother-jada-ann-quinn

#### **Deleted Profiles**

- conditionBirthInjury
- observationMeconiumStainedLiquor
- observationNonVertexPresentation
- observationPregnancyRiskFactor_new
- procedureEmergencyOperationFollowingDelivery

#### **Deleted Instances**

- composition-coded-race-and-ethnicity-not-named
- bundle-jurisdiction-fetal-death-not-named
- bundle-jurisdiction-live-birth-babyg-quinn
- bundle-provider-fetal-death-not-named
- bundle-provider-live-birth-babyg-quinn
- composition-coded-cause-of-fetal-death-not-named
- composition-jurisdiction-fetal-death-not-named
- composition-jurisdiction-live-birth-babyg-quinn
- composition-provider-fetal-death-not-named
- composition-provider-live-birth-babyg-quinn
- observation-apgar-score-babyg-quinn-1-min
- observation-apgar-score-babyg-quinn-5-min
- observation-birth-weight-babyg-quinn
- observation-birth-weight-not-named
- observation-gestational-age-at-delivery-babyg-quinn
- observation-gestational-age-at-delivery-not-named
- observation-infant-living-babyg-quinn
- observation-last-menstrual-period-carmen-teresa-lee
- observation-last-menstrual-period-jada-ann-quinn
- observation-mother-delivery-weight-jada-ann-quinn
- observation-mother-height-carmen-teresa-lee
- observation-mother-height-jada-ann-quinn
- observation-mother-prepregnancy-weight-carmen-teresa-lee
- observation-mother-prepregnancy-weight-jada-ann-quinn
- observation-number-births-now-dead-carmen-teresa-lee
- observation-number-births-now-dead-jada-ann-quinn
- observation-number-births-now-living-carmen-teresa-lee
- observation-number-births-now-living-jada-ann-quinn
- observation-number-deaths-this-delivery-carmen-teresa-lee
- observation-number-live-births-this-delivery-carmen-teresa-lee
- observation-number-live-births-this-delivery-jada-ann-quinn
- observation-number-other-pregnancy-outcomes-jada-ann-quinn
- observation-number-prenatal-visits-jada-ann-quinn
- observation-number-previous-cesareans-carmen-teresa-lee
- observation-number-previous-cesareans-jada-ann-quinn
- observation-parent-education-level-carmen-teresa-lee
- observation-parent-education-level-jada-ann-quinn
- observation-parent-education-level-james-quinn
- observation-plurality-carmen-teresa-lee
- observation-plurality-jada-ann-quinn
- observation-pregnancy-risk-factor-carmen-teresa-lee-1-new
- observation-pregnancy-risk-factor-jada-ann-quinn-4
- patient-child-babyg-quinn
- patient-decedent-fetus-not-named
- patient-mother-carmen-teresa-lee
- patient-mother-jada-ann-quinn
- practitioner-vital-records-avery-jones
- practitioner-vital-records-janet-seito
- practitioner-vital-records-jessica-leung
- relatedperson-father-natural-james-brandon-quinn
- relatedperson-father-natural-tom-yan-lee
- relatedperson-mother-carmen-teresa-lee
- relatedperson-mother-jada-ann-quinn

---

File: repos/HL7_SLASH_fhir-bfdr/input/includes/documentationNote.md

<div class="documentation-note" markdown="1">

####  January 2024 Ballot of STU2

The STU2 versions of the BFDR and VRCL FHIR IGs are part of an effort to [harmonize and reduce duplication](vr_ig_harmonization.html) among FHIR IGs for vital records and medico-legal investigation.
As a result of this effort there has been a significant realignment of content among these FHIR IGs.   The tables below show the provenance of all current content of the BFDR STU2 IG, as well as content that was previously included and has been moved, superceded, or obsoleted.

  
</div><!-- documentation-note -->

---

File: repos/HL7_SLASH_fhir-bfdr/input/pagecontent/appendices.md

Appendices for the IG

---

File: repos/HL7_SLASH_fhir-bfdr/input/pagecontent/appendix_a_-_example_facility_worksheet_for_the_live_birth_certificate.md

Example of a completed Facility Worksheet for the Live Birth Certificate:
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_1.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p1" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_2.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p2" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_3.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p3" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_4.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p4" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_5.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p5" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_6.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p6" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_7.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p7" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-live-birth-jada-quinn-fhir-sample-data_Page_8.png" alt="Example Facility Worksheet for Live Birth Certificate for Baby G Quinn - p8" width="100%" /></td></tr></table>


---

File: repos/HL7_SLASH_fhir-bfdr/input/pagecontent/appendix_b_-_example_live_birth_certificate.md

Example of a completed Live Birth Certificate:
<table><tr><td><img src="birth-certificate-babyg-quinn-fhir-sample-data_Page_1.png" alt="Example Birth Certficate for Baby G Quinn - p1" width="100%" /></td></tr></table>
<table><tr><td><img src="birth-certificate-babyg-quinn-fhir-sample-data_Page_2.png" alt="Example Birth Certficate for Baby G Quinn - p2" width="100%" /></td></tr></table>

---

File: repos/HL7_SLASH_fhir-bfdr/input/pagecontent/appendix_c_-_example_facility_worksheet_for_the_fetal_death_report.md

Example of a completed Facility Worksheet for the Fetal Death Report:
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_1.png" alt="Example Facility Worksheet for Fetal Death Report - p1" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_2.png" alt="Example Facility Worksheet for Fetal Death Report - p2" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_3.png" alt="Example Facility Worksheet for Fetal Death Report - p3" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_4.png" alt="Example Facility Worksheet for Fetal Death Report - p4" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_5.png" alt="Example Facility Worksheet for Fetal Death Report - p5" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_6.png" alt="Example Facility Worksheet for Fetal Death Report - p6" width="100%" /></td></tr></table>

---

File: repos/HL7_SLASH_fhir-bfdr/input/pagecontent/appendix_d_-_example_fetal_death_report.md

Example of a completed Fetal Death Report:
<table><tr><td><img src="death-report-not-named-fhir-sample-data_Page_1.png" alt="Example Death Report - p1" width="100%" /></td></tr></table>
<table><tr><td><img src="death-report-not-named-fhir-sample-data_Page_2.png" alt="Example Death Report - p2" width="100%" /></td></tr></table>

---

File: repos/HL7_SLASH_fhir-bfdr/input/pagecontent/categories.md

The BFDR uses categories to simplifiy query of conformant data.  Each of the following categories (with associated LOINC code) has one or more associated Observations, Conditions and Procedures.  Within each category the IG provides a mechanism to express the presence of various factors, and an indication that none of the factors is present, or the factor is unknown. 

* [Abnormal Conditions of the Newborn](artifacts.html#8) (73812-0)
* [Congenital Anomolies of the Newborn](artifacts.html#9) (73780-9)
* [Characteristics of Labor and Delivery](artifacts.html#10) (73813-8)
* [Pregnancy Risk Factors](artifacts.html#16) (73769-2)
* [Final Route and Method of Delivery](artifacts.html#15) (73762-7)
* [Obstetric Procedures](artifacts.html#14) (73814-6)
* [Infections During Pregnancy](artifacts.html#12) (73769-2)
* [Maternal Morbities](artifacts.html#17) (73781-7)

The interpretation of data sent for a given category is as follows:
* If *no instances* of data from the category are provided, all data in this category is considered *unknown*.
* If *any instances* of the associated Observations, Conditions and Procedures are provided, then the data associated with those profiles is considered to be *present*.
* If an instance of the *'none-of-the-above' or 'unknown'* observation within the category is provided, than all associated data elements are considered to be *absent*.

This behavior matches the behavior of the electronic or paper forms used to capture that data.   The none-of-the-above or unknown observations are associated with checking a none-of-the-above or unknown checkbox on the form as an alternative to checking one of the boxes in a grouping.

Developers parsing input specified by this IG can take advantage of the category field to query all of the data elements relating to a different category as follows:
* Observations:   the code field has the LOINC value for the category
* Conditions:     one of the category values has the LOINC value for the category
* Procedures:     the single category value has the LOINC value for the category


---

