File: repos/HL7_SLASH_fhir-bfdr/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.bfdr
canonical: http://hl7.org/fhir/us/bfdr
title: Birth And Fetal Death (BFDR) FHIR Implementation Guide
name: Birth And Fetal Death 
# title: Example Title
# description: Example Implementation Guide for getting started with SUSHI
releaseLabel: STU2
status: active 
version: 2.0.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core: 
    version: 5.0.1
    id: hl7fhiruscore
  us.nlm.vsac:
    version: 0.19.0
    uri: http://fhir.org/packages/us.nlm.vsac/ImplementationGuide/us.nlm.vsac
    id: usnlmvsac
  us.cdc.phinvads:
    version: 0.12.0
    uri: http://fhir.org/packages/us.cdc.phinvads/ImplementationGuide/us.cdc.phinvads
    id: uscdcphinvads
  hl7.fhir.us.vr-common-library: 
    version: 2.0.0
    id: hl7fhirusvrcommonlibrary
  hl7.fhir.us.odh: 
    version: 1.3.0
    id: odh
copyrightYear: 2023+
license: CC0-1.0  # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: urn:iso:std:iso:3166#US "United States of America" # https://www.hl7.org/fhir/valueset-jurisdiction.html
publisher:
  name: HL7 International / Public Health
  url: http://www.hl7.org/Special/committees/pher
  # email: test@example.org

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
# dependencies:
#   hl7.fhir.us.core: 3.1.0
#   hl7.fhir.us.mcode:
#     id: mcode
#     uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#     version: 1.0.0
#
#
# The pages property corresponds to IG.definition.page. SUSHI can
# auto-generate the page list, but if the author includes pages in
# this file, it is assumed that the author will fully manage the
# pages section and SUSHI will not generate any page entries.
# The page file name is used as the key. If title is not provided,
# then the title will be generated from the file name.  If a
# generation value is not provided, it will be inferred from the
# file name extension.  Any subproperties that are valid filenames
# with supported extensions (e.g., .md/.xml) will be treated as
# sub-pages.
#
pages:
  index.md: 
    title: Birth and Fetal Death Reporting Home
  content-transitions.md:
    title: Content Transitions 
  ije_mapping_natality.md:
   title: Data Dictionary Natality
  ije_mapping_fetalDeath.md:
   title: Data Dictionary Fetal Death
  appendices.md:
    title: Appendices
  appendix_a_-_example_facility_worksheet_for_the_live_birth_certificate.md:
    title: Facility Worksheet for Live Birth
  appendix_b_-_example_live_birth_certificate.md:
    title: Example Live Birth Certificate
  appendix_c_-_example_facility_worksheet_for_the_fetal_death_report.md:
    title: Facility Worksheet for Fetal Death
  appendix_d_-_example_fetal_death_report.md:
    title: Example Fetal Death Report
  change_log.md:
    title: Change Log
  patient_worksheet_questionnaires.md:
    title: Patient Worksheet Questionnaires
  the_specification.md:
    title: Specification 
  use_cases.md:
    title: Use Cases 
  vital_records_form_mapping.md:
    title: Vital Records Form Mapping 
  EHR_Data_mapping.md:
    title: Mapping Electronic Health Record Data to the Birth and Fetal Death Record Data Elements
  #ihe_specification_relationship_and_guidance.md:
  #  title: IHE Specification Relationship and Guidance
  downloads.md:
    title: Downloads 
  vr_ig_harmonization.md:
    title: FHIR Implementation Guide Harmonization Plan 
  usage.md:
    title: Usage 
  categories.md:
    title: Use of Categories 
  example_baby_g_quinn.md:
    title: Live Birth Report Example - Baby G Quinn 
  example_fetal_death.md:
    title: Fetal Death Report Example - Not Named  
  credits.md:
    title: Credits 


#
#
# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array.
# For parameters defined by core FHIR see:
# http://build.fhir.org/codesystem-guide-parameter-code.html
# For parameters defined by the FHIR Tools IG see:
# http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html
#
# parameters:
#   excludettl: true
#   validation: [allow-any-extensions, no-broken-links]
parameters:
  show-inherited-invariants: false
  path-expansion-params: '../../exp-params.json'  #path is relative to [base]/fsh-generated/resources
  path-liquid: liquid
  auto-oid-root: 2.16.840.1.113883.4.642.40.13
#
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │ The menu property will be used to generate the input/menu.xml file. The menu is represented    │
# │ as a simple structure where the YAML key is the menu item name and the value is the URL.       │
# │ The IG publisher currently only supports one level deep on sub-menus. To provide a             │
# │ custom menu.xml file, do not include this property and include a `menu.xml` file in            │
# │ input/includes. To use a provided input/includes/menu.xml file, delete the "menu"              │
# │ property below.                                                                                │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home:
    Home: index.html
    UseCases: use_cases.html
    Vital Records IG Harmonization:  vr_ig_harmonization.html
    # BFDR Relationship to IHE: ihe_specification_relationship_and_guidance.html
    Credits: credits.html 
  Implementer Guidance:
    Specification: the_specification.html
    Categories: categories.html
    Usage Notes: usage.html
    Worksheet Questionnaires: patient_worksheet_questionnaires.html
    Natality Data Dictionary: ije_mapping_natality.html
    Fetal Death Data Dictionary: ije_mapping_fetalDeath.html
    Forms Mapping: vital_records_form_mapping.html
    EHR Data Mapping: EHR_Data_mapping.html
    IJE Mapping to FHIR (csv): IJE_File_Layouts_and_FHIR_Mapping_24-06-21.csv
    IJE Mapping to FHIR (xlsx): IJE_File_Layouts_and_FHIR_Mapping_24-06-21.xlsx
  FHIR Artifacts: artifacts.html
  Examples:
    Example Live Birth: example_baby_g_quinn.html 
    Example Fetal Death: example_fetal_death.html 
  Changes: 
    Change Log: change_log.html
    STU1.1 to STU2 Changes: content-transitions.html
  Appendices:
    A Live Birth Worksheet: appendix_a_-_example_facility_worksheet_for_the_live_birth_certificate.html
    B Live Birth Certificate: appendix_b_-_example_live_birth_certificate.html
    C Fetal Death Worksheet: appendix_c_-_example_facility_worksheet_for_the_fetal_death_report.html
    D Fetal Death Report: appendix_d_-_example_fetal_death_report.html
  Downloads: downloads.html



# ╭───────────────────────────Less Common Implementation Guide Properties──────────────────────────╮
# │  Uncomment the properties below to configure additional properties on the ImplementationGuide  │
# │  resource. These properties are less commonly needed than those above.                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#
# Those who need more control or want to add additional details to the contact values can use
# contact directly and follow the format outlined in the ImplementationGuide resource and
# ContactDetail.
#
# contact:
#   - name: Bob Smith
#     telecom:
#       - system: email # phone | fax | email | pager | url | sms | other
#         value: bobsmith@example.org
#         use: work
#
#
# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs. If a value is an id or name, SUSHI will replace
# it with the correct canonical when generating the IG JSON.
#
# global:
#   Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#   Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile
#
#
# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key.
#   * if the key is an id or name, SUSHI will replace it with the
#     correct URL when generating the IG JSON.
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * if the exampleCanonical is an id or name, SUSHI will replace
#     it with the correct canonical when generating the IG JSON.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:
#
# resources:
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit
#
#
# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds. If a resource
# is specified by id or name, SUSHI will replace it with the correct
# URL when generating the IG JSON.
#

groups:

  BFDRCapabilityStatements:
    name: Capability Statements
    resources: 
      - CapabilityStatement-bfdr
  
  BFDRBundles:
    name: Bundles
    resources:
      - BundleDocumentBirthReport
      - BundleDocumentFetalDeathReport
      - BundleDocumentDemographicCodedContent
      - BundleDocumentCodedCauseOfFetalDeath
      - BundleDocumentCodedIndustryOccupation
  
  BFDRCompositionsEHRtoVRO:
    name: Compositions EHR to VRO
    resources:
      - CompositionProviderFetalDeathReport
      - CompositionProviderLiveBirthReport
  
  BFDRCompositionsVROtoNCHS:
    name: Compositions VRO to NCHS
    resources:
      - CompositionJurisdictionFetalDeathReport
      - CompositionJurisdictionLiveBirthReport
  
  BFDRCompositionsNCHStoVRO:
    name: Compositions NCHS to VRO
    resources:
      - CompositionCodedCauseOfFetalDeath
      - CompositionCodedRaceAndEthnicity
      - CompositionCodedIndustryAndOccupation

  BFDRQuestionnaires:
    name: Questionnaires 
    resources:
      - Questionnaire-mothers-live-birth
      - Questionnaire-patients-fetal-death
  
  BFDRProfilesEncounter:
    name: Encounter and Location Profiles and Extensions
    resources:
      - EncounterBirth
      - EncounterMaternity
      - LocationBFDR
      - JurisdictionalFacilityIdentifier
      - ExtensionEncounterMaternityReference
  
  BFDRProfilesPractitioner:
    name: Practitioner Profiles and Extensions
    resources:
      - PractitionerBirthAttendant
      - PractitionerBirthCertifier
      - PractitionerRoleBirthAttendant
      - PractitionerRoleBirthCertifier

  BFDRProfilesNewbornFetus:
    name: Newborn/Fetus Profiles
    resources:
      - ObservationApgarScore
      - ObservationBirthWeight
      - ObservationFetalPresentation
      - ObservationGestationalAgeAtDelivery
      - ObservationInfantBreastfedAtDischarge
      - ObservationInfantLiving
      - ObservationMotherDeliveryWeight
      - ObservationNumberFetalDeathsThisDelivery
      - ObservationNumberLiveBirthsThisDelivery  
      
  BFDRProfilesAbnormalConditionoftheNewborn:
    name: Profiles - Abnormal Condition of the Newborn (73812-0)
    resources:
      - ConditionSeizure
      - ObservationNICUAdmission
      - ProcedureAntibioticSuspectedNeonatalSepsis
      - ProcedureAssistedVentilationFollowingDelivery
      - ProcedureAssistedVentilationMoreThanSixHours
      - ProcedureSurfactantReplacementTherapy
      - ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn

  BFDRProfilesCongenitalAnomoliesoftheNewborn:
    name: Profiles - Congenital Anomolies of the Newborn (73780-9) 
    resources:
      - ConditionCongenitalAnomalyOfNewborn
      - ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn

  BFDRProfilesCharacteristicsofLaborandDelivery :
    name: Profiles - Characteristics of Labor and Delivery (73813-8)
    resources:
      - ConditionChorioamnionitis
      - ObservationAntibioticsAdministeredDuringLabor
      - ObservationSteroidsFetalLungMaturation
      - ProcedureAugmentationOfLabor
      - ProcedureEpiduralOrSpinalAnesthesia
      - ProcedureInductionOfLabor
      - ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery

  BFDRProfilesMotherPrenatal:
    name: Mother Prenatal Profiles
    resources:
      - CoveragePrincipalPayerDelivery
      - ObservationCigaretteSmokingBeforeDuringPregnancy
      - ObservationDateOfFirstPrenatalCareVisit
      - ObservationDateOfLastLiveBirth
      - ObservationDateOfLastOtherPregnancyOutcome
      - ObservationLastMenstrualPeriod
      - ObservationMotherHeight
      - ObservationMotherPrepregnancyWeight
      - ObservationMotherReceivedWICFood
      - ObservationNumberBirthsNowDead
      - ObservationNumberBirthsNowLiving
      - ObservationNumberOtherPregnancyOutcomes
      - ObservationNumberPrenatalVisits

  BFDRProfilesInfections:
    name: Profiles - Infections During Pregnancy (73769-2)
    resources:
      - ConditionInfectionPresentDuringPregnancy
      - ObservationNoneOfSpecifiedInfectionsPresentDuringPregnancy   
  
  BFDRProfilesMedicalandHealthInformation:
    name: Medical and Health Information Profiles
    resources:
      - ObservationLaborTrialAttempted
      - ObservationNumberPreviousCesareans

  BFDRProfilesObstetricProcedures: 
    name: Profiles - Obstetric Procedures (73814-6)
    resources:
      - ProcedureObstetric
      - ObservationNoneOfSpecifiedObstetricProcedures

  BFDRProfilesFinalRouteMethodDelivery:
    name: Profiles - Final Route and Method of Delivery (73762-7)
    resources:
      - ProcedureFinalRouteMethodDelivery
      - ObservationUnknownFinalRouteMethodDelivery

  BFDRProfilesPregnancyRiskFactors:
    name: Profiles - Pregnancy Risk Factors (73769-2)
    resources:
      - ConditionEclampsiaHypertension
      - ConditionGestationalDiabetes
      - ConditionGestationalHypertension
      - ConditionPrepregnancyDiabetes
      - ConditionPrepregnancyHypertension
      - ObservationPreviousCesarean
      - ObservationPreviousPretermBirth
      - ProcedureFertilityEnhancingDrugTherapyArtificialInsemination
      - ProcedureAssistedReproductiveTechnology
      - ProcedureInfertilityTreatment
      - ObservationNoneOfSpecifiedPregnancyRiskFactors
      
  BFDRProfilesMaternalMorbidity:
    name: Profiles - Maternal Morbidity Profiles (73781-7)
    resources:
      - ConditionPerinealLaceration
      - ConditionRupturedUterus
      - ObservationICUAdmission
      - ProcedureBloodTransfusion
      - ProcedureUnplannedHysterectomy
      - ObservationNoneOfSpecifiedMaternalMorbidities
  
  BFDRProfilesFetalDeathInformation:
    name: Fetal Death Information Profiles
    resources:
      - ConditionFetalDeathInitiatingCauseOrCondition
      - ConditionFetalDeathOtherCauseOrCondition
      - ObservationAutopsyPerformedIndicator
      - ObservationAutopsyHistologicalExamResultsUsed
      - ObservationFetalDeathTimePoint
      - ObservationFetalRemainsDispositionMethod
      - ObservationHistologicalPlacentalExamPerformed
      - PatientDecedentFetus
      
  BFDRProfilesParentInformation:
    name: Parent Information Profiles
    resources:
      - ObservationMotherMarriedDuringPregnancy
      - ObservationPaternityAcknowledgementSigned
      - ObservationSSNRequestedForChild
      - ExtensionRole
      - ObservationPresentJob

  BFDRProfilesPregnancyInformation:
    name: Other information about pregnancy (not used by birth and fetal death use cases)
    resources:
      - ObservationBirthPluralityOfPregnancy
      - ObservationPlannedToDeliverAtHome


  BFDRProfilesCodedFetalDeath:
    name: Fetal Death Coded Cause of Death Profiles (NCHS to VRO)
    resources:
      - ObservationCodedInitiatingFetalDeathCauseOrCondition
      - ObservationCodedOtherFetalDeathCauseOrCondition

  BFDRCodeSystems:
    name: CodeSystems
    resources:
      #- AbnormalConditionsNewbornCS
      #- BirthAndFetalDeathFinancialClassCS
      #- BirthDeliveryOccurredCS
      - EditFlagsCS
      #- FetalDeathCauseOrConditionCS
      #- InformantRelationshipToMotherCS
      #- LocationTypeCS
      - LocalBFDRCodesCS

  BFDRValueSets:
    name: ValueSets
    resources:
      - ApgarTimingVS 
      - BirthAndFetalDeathFinancialClassVS
      - BirthAttendantTitlesVS
      - BirthDeliveryOccurredVS
      - BirthWeightEditFlagsVS
      - CigaretteSmokingBeforeAndDuringPregnancyVS
      - DeliveryRoutesVS
      - EstimateOfGestationEditFlagsVS
      #- FathersDateOfBirthEditFlagsVS
      - FetalDeathCauseOrConditionVS
      - FetalDeathTimePointsVS
      - FetalPresentationsVS
      - FetalRemainsDispositionMethodVS
      - PerformedNotPerformedPlannedVS
      - InfectionsDuringPregnancyLiveBirthVS
      - InformantRelationshipToMotherVS
      - LocationTypeVS
      - FetalPresentationsMaxVS 
      #- MothersDateOfBirthEditFlagsVS
      - NewbornCongenitalAnomaliesVS
      - NumberPreviousCesareansEditFlagsVS
      #- ObstetricProcedureVS
      #- PluralityEditFlagsVS
      - PregnancyReportEditFlagsVS
      - ObstetricProcedureOutcomeVS
      - UnitsOfGestationalAgeVS
      - FertilityEnhancingDrugTherapyArtificialInseminationVS 
      
    
  BFDRConceptMaps:
    name: Concept Maps
    resources:
      - BirthAndFetalDeathFinancialClassCM
      - BirthAttendantTitlesCM
      - BirthDeliveryOccurredCM 
      - BirthWeightEditFlagsCM
      - DeliveryRoutesCM 
      - EstimateOfGestationEditFlagsCM
      - FetalDeathCauseOrConditionCM
      - FetalDeathTimePointsCM
      - FetalPresentationCM
      - InfectionsDuringPregnancyLiveBirthCM
      - NewbornCongenitalAnomaliesCM
      - NumberPreviousCesareansEditFlagsCM
      - PerformedNotPerformedPlannedCM
      #- PluralityEditFlagsCM
      - PregnancyReportEditFlagsCM

  BFDRParameters:
    name: Parameters
    resources:
      - expansion-parameters

  BFDRExamples1:
    name: Fetal Death Record Examples (Not Named)
    resources:
      - bundle-coded-cause-of-fetal-death-not-named
      - bundle-jurisdiction-fetal-death-not-named
      - bundle-provider-fetal-death-not-named
      - composition-jurisdiction-fetal-death-not-named
      - composition-coded-cause-of-fetal-death-not-named
      - composition-provider-fetal-death-not-named
      - condition-fetal-death-cause-or-condition-not-named
      - condition-fetal-death-other-significant-cause-not-named
      - condition-gestational-diabetes-carmen-teresa-lee
      - encounter-maternity-carmen-teresa-lee
      - observation-autopsy-histological-exam-results-used-not-named
      - observation-autopsy-performed-not-named
      - observation-birth-weight-not-named
      - observation-birth-weight-not-named-w-edit
      - observation-cig-smoking-pregnancy-1-carmen-teresa-lee
      - observation-cig-smoking-pregnancy-2-carmen-teresa-lee
      - observation-cig-smoking-pregnancy-3-carmen-teresa-lee
      - observation-cig-smoking-pregnancy-4-carmen-teresa-lee
      - observation-coded-initiating-fetal-death-cause-or-condition
      - observation-coded-other-fetal-death-cause-or-condition-not-named
      - observation-date-of-first-prenatal-care-visit-carmen-teresa-lee
      - observation-date-of-last-live-birth-carmen-teresa-lee
      - observation-fetal-death-time-point-not-named
      - observation-fetal-presentation-not-named
      - observation-gestational-age-at-delivery-not-named
      - observation-gestational-age-at-delivery-not-named-w-edit
      - observation-histological-placental-exam-performed-not-named
      - observation-input-race-and-ethnicity-carmen-teresa-lee
      - observation-last-menstrual-period-carmen-teresa-lee
      - observation-method-of-disposition-not-named
      - observation-mother-height-carmen-teresa-lee
      - observation-mother-height-carmen-teresa-lee-w-edit
      - observation-mother-prepregnancy-weight-carmen-teresa-lee
      - observation-mother-prepregnancy-weight-carmen-teresa-lee-w-edit
      - observation-mother-received-wic-food-carmen-teresa-lee
      - observation-number-births-now-dead-carmen-teresa-lee
      - observation-number-deaths-this-delivery-carmen-teresa-lee
      - observation-number-live-births-this-delivery-carmen-teresa-lee
      - observation-number-births-now-living-carmen-teresa-lee
      - observation-number-previous-cesareans-carmen-teresa-lee
      - observation-number-previous-cesareans-carmen-teresa-lee-w-edit
      - observation-parent-education-level-carmen-teresa-lee
      - observation-parent-education-level-carmen-teresa-lee-w-edit
      - observation-present-job-carmen-teresa-lee
      - observation-present-job-tom-yan-lee
      - procedure-final-route-method-delivery-not-named
      - patient-decedent-fetus-not-named
      - patient-decedent-fetus-not-named-w-edit
      - patient-mother-carmen-teresa-lee
      - patient-mother-carmen-teresa-lee-w-edit
      - QuestionnaireResponse-patients-fetal-death-carmen-lee
      - relatedperson-father-natural-tom-yan-lee
      - relatedperson-father-natural-tom-yan-lee-w-edit
      - relatedperson-mother-carmen-teresa-lee


  BFDRExamples2:
    name: Live Birth Examples - Baby G Quinn 
    resources:
      - bundle-coded-race-and-ethnicity-baby-g-quinn
      - bundle-jurisdiction-live-birth-babyg-quinn
      - bundle-provider-live-birth-babyg-quinn
      - composition-coded-race-and-ethnicity-baby-g-quinn 
      - composition-jurisdiction-live-birth-babyg-quinn
      - composition-provider-live-birth-babyg-quinn
      - condition-chorioamnionitis-jada-ann-quinn
      - condition-congenital-anomaly-of-newborn-babyg-quinn
      - condition-congenital-anomaly-of-newborn-babyg-quinn-2
      - condition-eclampsia-hypertension-jada-ann-quinn
      - condition-gestational-diabetes-jada-ann-quinn
      - condition-gestational-hypertension-jada-ann-quinn
      - condition-infection-present-during-pregnancy-jada-ann-quinn
      - condition-perineal-laceration-jada-ann-quinn
      - condition-prepregnancy-diabetes-jada-ann-quinn
      - condition-prepregnancy-hypertension-carmen-teresa-lee
      - condition-prepregnancy-hypertension-jada-ann-quinn
      - condition-ruptured-uterus-jada-ann-quinn
      - condition-seizure-babyg-quinn
      - coverage-principal-payer-for-delivery-jada-ann-quinn
      - encounter-birth-babyg-quinn
      - encounter-maternity-jada-ann-quinn
      - observation-antibiotics-during-labor-jada-ann-quinn
      - observation-apgar-score-babyg-quinn-5-min
      - observation-apgar-score-babyg-quinn-10-min
      - observation-birth-weight-babyg-quinn
      - observation-birth-weight-babyg-quinn-w-edit
      - observation-cig-smoking-pregnancy-1-jada-ann-quinn
      - observation-cig-smoking-pregnancy-2-jada-ann-quinn
      - observation-cig-smoking-pregnancy-3-jada-ann-quinn
      - observation-cig-smoking-pregnancy-4-jada-ann-quinn
      - observation-date-of-first-prenatal-care-visit-jada-ann-quinn
      - observation-date-of-last-live-birth-jada-ann-quinn
      - observation-date-of-last-other-pregnancy-outcome-jada-ann-quinn
      - observation-fetal-presentation-babyg-quinn
      - observation-input-race-and-ethnicity-jada-ann-quinn
      - observation-input-race-and-ethnicity-james-quinn
      - observation-input-race-and-ethnicity-james-quinn-w-edit
      - observation-last-menstrual-period-jada-ann-quinn
      - observation-mother-delivery-weight-jada-ann-quinn
      - observation-mother-delivery-weight-jada-ann-quinn-w-edit
      - observation-mother-height-jada-ann-quinn
      - observation-mother-height-jada-ann-quinn-w-edit
      - observation-no-infections-present-jada-ann-quinn
      - observation-none-obstetric-procedures-jada-ann-quinn
      - observation-paternity-acknowledgement-signed-james-quinn
      - observation-paternity-acknowledgement-signed-james-quinn-w-edit
      - procedure-final-route-method-delivery-babyg-quinn
      - observation-gestational-age-at-delivery-babyg-quinn
      - observation-gestational-age-at-delivery-babyg-quinn-w-edit
      - observation-icu-admission-jada-ann-quinn
      - observation-infant-breastfed-at-discharge-babyg-quinn
      - observation-infant-living-babyg-quinn
      - observation-labor-trial-attempted-babyg-quinn
      #- observation-method-of-disposition-not-named
      - observation-mother-married-during-pregnancy-jada-ann-quinn
      - observation-mother-prepregnancy-weight-jada-ann-quinn
      - observation-mother-prepregnancy-weight-jada-ann-quinn-w-edit
      - observation-mother-received-wic-food-jada-ann-quinn
      #- observation-nbr-live-births-delivery-carmen-teresa-lee
      #- observation-nbr-other-pregnancy-outcomes-jada-ann-quinn
      - observation-nicu-admission-babyg-quinn
      - observation-none-abnormal-conditions-babyg-quinn
      - observation-none-chars-labor-delivery-jada-ann-quinn
      - observation-none-maternal-morbidities-jada-ann-quinn
      - observation-none-specified-risk-factors-jada-ann-quinn
      - observation-number-births-now-dead-jada-ann-quinn
      - observation-number-births-now-living-jada-ann-quinn
      - observation-number-live-births-this-delivery-jada-ann-quinn
      - observation-number-other-pregnancy-outcomes-jada-ann-quinn
      - observation-number-prenatal-visits-jada-ann-quinn
      - observation-number-prenatal-visits-jada-ann-quinn-w-edit
      - observation-number-previous-cesareans-jada-ann-quinn
      - observation-number-previous-cesareans-jada-ann-quinn-w-edit
      - observation-parent-education-level-jada-ann-quinn
      - observation-parent-education-level-jada-ann-quinn-w-edit
      - observation-parent-education-level-james-quinn
      - observation-parent-education-level-james-quinn-w-edit
      - observation-parent-education-level-tom-yan-lee
      - observation-parent-education-level-tom-yan-lee-w-edit
      - observation-planned-to-deliver-at-home-babyg-quinn
      - observation-planned-to-deliver-at-home-not-named
      - observation-previous-cesarean-jada-ann-quinn
      - observation-previous-preterm-births-jada-ann-quinn
      - observation-ssn-requested-for-child-babyg-quinn
      - observation-steroids-fetal-lung-maturation-jada-ann-quinn
      - observation-unknown-route-method-delivery-jada-ann-quinn
      - patient-child-babyg-quinn
      - patient-child-babyg-quinn-w-edit
      - patient-mother-birth-date-part-absent
      - patient-mother-jada-ann-quinn
      - patient-mother-jada-ann-quinn-w-edit
      - procedure-antibiotic-sepsis-babyg-quinn
      - procedure-artificial-insemination-jada-ann-quinn
      - procedure-assisted-reproductive-technology-jada-ann-quinn
      - procedure-augmentation-of-labor-quinn
      - procedure-blood-transfusion-jada-ann-quinn
      - procedure-epidural-or-spinal-anesthesia-jada-ann-quinn
      - procedure-induction-of-labor-jada-ann-quinn
      - procedure-infertility-treatment-jada-ann-quinn
      - procedure-obstetric-procedure-jada-ann-quinn
      - procedure-surfactant-replacement-babyg-quinn
      - procedure-unplanned-hysterectomy-quinn
      - procedure-ventilation-following-babyg-quinn
      - procedure-ventilation-more-6-hours-babyg-quinn
      - QuestionnaireResponse-mothers-live-birth-jada-quinn
      - relatedperson-father-natural-james-brandon-quinn
      - relatedperson-father-natural-james-brandon-quinn-w-edit
      - relatedperson-mother-jada-ann-quinn
      - observation-present-job-james-brandon-quinn-coded
      - observation-present-job-james-brandon-quinn
      - observation-present-job-jada-ann-quinn-coded
      - observation-present-job-jada-ann-quinn
      - bundle-coded-industry-occupation-baby-g-quinn
      - composition-coded-industry-and-occupation-baby-g-quinn 

  BFDRExamples3:
    name: Misc Examples 
    resources:
      - location-east-hospital
      - location-north-hospital
      - location-south-hospital
      - observation-gestational-age-at-delivery-babyg-quinn-prem-d
      - observation-gestational-age-at-delivery-babyg-quinn-prem-w
      - observation-plurality-carmen-teresa-lee
      - observation-coded-race-and-ethnicity-father  
      - observation-coded-race-and-ethnicity-mother
      - observation-input-race-and-ethnicity-father
      - observation-input-race-and-ethnicity-mother
      - observation-none-congenital-anomolies-babyg-quinn
      - organization-jurisdictional-vital-records-office
      - organization-nchs
      - organization-south-hospital
      - practitioner-vital-records-avery-jones
      - practitioner-vital-records-janet-seito
      - practitioner-vital-records-jessica-leung
  
#
# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * date
# * meta
# * implicitRules
# * language
# * text
# * contained
# * extension
# * modifierExtension
# * experimental
# * useContext
# * copyright
# * packageId
#
#
# ╭──────────────────────────────────────────SUSHI flags───────────────────────────────────────────╮
# │  The flags below configure aspects of how SUSHI processes FSH.                                 │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#
# applyExtensionMetadataToRoot: true
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.
#
instanceOptions:
  # When set to true, slices must be referred to by name and not only by a numeric index in order to be used
  # in an Instance's assignment rule. All slices appear in the order in which they are specified in FSH rules.
  # While SUSHI defaults to false for legacy reasons, manualSliceOrding is recommended for  projects.
  manualSliceOrdering: true # true | false
  # Determines for which types of Instances SUSHI will automatically set meta.profile
  # if InstanceOf references a profile:
  #
  # setMetaProfile: always # always | never | inline-only | standalone-only
  #
  #
  # Determines for which types of Instances SUSHI will automatically set id
  # if InstanceOf references a profile:
  #
  # setId: always # always | standalone-only
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pher

---

// File: input/pagecontent/appendices.md

Appendices for the IG

---

// File: input/pagecontent/appendix_a_-_example_facility_worksheet_for_the_live_birth_certificate.md

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

// File: input/pagecontent/appendix_b_-_example_live_birth_certificate.md

Example of a completed Live Birth Certificate:
<table><tr><td><img src="birth-certificate-babyg-quinn-fhir-sample-data_Page_1.png" alt="Example Birth Certficate for Baby G Quinn - p1" width="100%" /></td></tr></table>
<table><tr><td><img src="birth-certificate-babyg-quinn-fhir-sample-data_Page_2.png" alt="Example Birth Certficate for Baby G Quinn - p2" width="100%" /></td></tr></table>

---

// File: input/pagecontent/appendix_c_-_example_facility_worksheet_for_the_fetal_death_report.md

Example of a completed Facility Worksheet for the Fetal Death Report:
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_1.png" alt="Example Facility Worksheet for Fetal Death Report - p1" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_2.png" alt="Example Facility Worksheet for Fetal Death Report - p2" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_3.png" alt="Example Facility Worksheet for Fetal Death Report - p3" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_4.png" alt="Example Facility Worksheet for Fetal Death Report - p4" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_5.png" alt="Example Facility Worksheet for Fetal Death Report - p5" width="100%" /></td></tr></table>
<table><tr><td><img src="facility-worksheet-fetal-death-not-named-fhir-sample-data_Page_6.png" alt="Example Facility Worksheet for Fetal Death Report - p6" width="100%" /></td></tr></table>

---

// File: input/pagecontent/appendix_d_-_example_fetal_death_report.md

Example of a completed Fetal Death Report:
<table><tr><td><img src="death-report-not-named-fhir-sample-data_Page_1.png" alt="Example Death Report - p1" width="100%" /></td></tr></table>
<table><tr><td><img src="death-report-not-named-fhir-sample-data_Page_2.png" alt="Example Death Report - p2" width="100%" /></td></tr></table>

---

// File: input/pagecontent/categories.md

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

// File: input/pagecontent/change_log.md

### Post-Ballot Changes
### Major
- [FHIR-46274](https://jira.hl7.org/browse/FHIR-46274) - Added a new [ObservationPresentJob] profile to capture the industry and occupation of the father and mother.   Previously the IG used a UsualWork profile whose definition made it inappropriate for capturing the relevant information about the father and mother.
- [FHIR-43458](https://jira.hl7.org/browse/FHIR-43458) - Improve support for birth, transfer-from, and transfer-to locations.   Added new [BFDR Location Profile][LocationBFDR], and updated [EncounterMaternity] and [EncounterBirth] to reference the new profile.   Data dictionary has been updated to correctly document mapping of SFN and FNPI fields, and all other facility-related fields.
 - [FHIR-43473](https://jira.hl7.org/browse/FHIR-43473) - To improve consistency with VRDR the key reporting identifiers (birth cert no, fetal death report number, local file numbers, and overall record identifier) were moved from the Composition.identifier to the Bundle.identifier and were updated to use standardized extensions. The definitions of these extensions will also be moved to the Vital Records Common Library.
 - [FHIR-46420](https://jira.hl7.org/browse/FHIR-46420) - Renamed ProcedureArtificialInsemination to ProcedureFertilityEnhancingDrugTreatment to better reflect intent.  The code of the new profile is bound to a new valueset that includes FertilityEnhancingDrugTherapy and Artificial Insemination.  In ProcedureFertilityTreatment changed the code from 445151000124101 Fertility Enhancing Drug Therapy Procdedure (procedure) to a more general code 773261007 Procedure related to reproduction (procedure).  Every place that referenced ProcedureArtificialInsemination now references ProcedureFertilityTreatment. 

### Minor
- [FHIR-44187](https://jira.hl7.org/browse/FHIR-44187) Renamed HistologicalPlacentalExaminationVS to [PerformedNotPerformedPlannedVS], and corresponding concept map for discoverability. Additionally renamed ValuesetUnitsOfGestationalAge and ValuesetObstetricProcedureOutcome to UnitsOfGestationalAgeVS and ObstetricProcedureOutcomeVS, respectively, for consistency in naming convention.
- [FHIR-45500](https://jira.hl7.org/browse/FHIR-45500) Created extension for [jurisdictional facility identifier][JurisdictionalFacilityIdentifier] to be used in [LocationBFDR] in lieu of AuxiliaryStateIdentifier1. 
- [FHIR-44679](https://jira.hl7.org/browse/FHIR-44679) Clarified precedence of QuestionnaireResponse data in patient_worksheet_questionnaries(patient_worksheet-questionnaires.html)
- Added [PractitionerBirthAttendant] and [PractitionerBirthCertifier] profiles with corresponding extensions that distinguish these two types of Practitioner
- [FHIR-44554](https://jira.hl7.org/browse/FHIR-44554) Corrected [FetalPresentationsVS] and [FetalPresentationCM] added a max binding that includes all abnormal presentations.
- [FHIR-44555](https://jira.hl7.org/browse/FHIR-44555) Extended [ObservationGestationalAgeAtDelivery] for partial weeks and added two examples of its usage.
- Removed composition references to [ObservationPlannedToDeliverAtHome] profile. Reporting of home delivery plan relies on [EncounterMaternity] and [EncounterBirth] (using [BirthDeliveryOccurredVS])
- [FHIR-43506](https://jira.hl7.org/browse/FHIR-43506) - Added forms mappings for [ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn]
- Fixing broken links in IJE mapping tables ([PR](https://github.com/HL7/fhir-bfdr/pull/55))
- [FHIR-43403](https://jira.hl7.org/browse/FHIR-43403) - Constrained units of all quantity values -- [ObservationBirthWeight], [ObservationGestationalAgeAtDelivery], [ObservationMotherDeliveryWeight], [ObservationMotherHeight], [ObservationMotherPrepregnancyWeight].
- reinstate missing [Observation - Birth Plurality of Pregnancy][ObservationBirthPluralityOfPregnancy] [FHIR-43383](https://jira.hl7.org/browse/FHIR-43383)
- Added narrative content to clarify indicating 'Y', 'N', and 'U' for TRAN and ITRAN in the data dictionary usage page [FHIR-43414](https://jira.hl7.org/browse/FHIR-43414)
- Added missing IJE mappings for [RelatedPersonFatherNatural](https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-RelatedPerson-father-natural-vr.html) profile
- Initially added [roleVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Extension-role-vr.html) extension to [EncounterMaternity] and [EncounterBirth] to make them easily queryable from the bundles with a simple FHIRPath expression without traversing Composition references. Subsequently added [RoleExtension] after the extension in VRCL was removed.
- Concept maps added - [BirthWeightEditFlagsCM], [EstimateOfGestationEditFlagsCM], [NumberPreviousCesareansEditFlagsCM], [PregnancyReportEditFlagsCM]
- Edit Flag Valueset cleanup: Edit flag codes were renamed to use consistent naming convention, which includes the IJE value in the name. Where possible, valuesets use the edit flag codes located in [VRCL](http://hl7.org/fhir/us/vr-common-library/CodeSystem/CodeSystem-vr-edit-flags). For edit flag codes specific to BFDR, [EditFlagsCS] codesystem was added. Valueset and concept maps for FathersDateOfBirthEditFlags, MothersDateOfBirthEditFlags, and PluralityEditFlags were relocated to VRCL, since they are of general utility in the Patient and RelatedPersons profiles. 
- Removed 'None' value from valueset [NewbornCongenitalAnomaliesVS] since [ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn] is used for indicating 'none' and included 'Other' value in valueset for general utility with documentation in [Usage page](usage.html) that it's not allowed for NCHS submission 
- [PatientDecedentFetus] made to reference [ValueSetSexAssignedAtBirthVitalRecords](https://build.fhir.org/ig/HL7/vr-common-library/ValueSet-ValueSet-sex-assigned-at-birth-vr.html)
- Consolidated miscellaneous local codesystems into a single codesystem called [LocalBFDRCodesCS]
- Drop prefixes in titles so words like codesystem, valueset, extension, and conceptmap don't appear twice
- Renamed [ObservationMethodOfDisposition] to [ObservationFetalRemainsDispositionMethod] to help clearly distinguish it from [DecedentDispositionMethod]
- Minor narrative corrections ([FHIR-43953](https://jira.hl7.org/browse/FHIR-43953),[FHIR-43951](https://jira.hl7.org/browse/FHIR-43951),[FHIR-43950](https://jira.hl7.org/browse/FHIR-43950))
- Additional documentation of [ObservationBirthPluralityOfPregnancy] profile

### STU2 Ballot, January 2024
#### Major Changes
- Reorganization and harmonization of vital records FHIR IG content across BFDR, VRCL and VRDR to reduce redundancy, ease implementation, and reduce maintenance effort.   See [Vital Records IG Harmonization](vr_ig_harmonization.html), and [BFDR content changes](content-transitions.html).
- Incorporate the vital records approach to capturing race and ethnicity, and reporting coded race and ethnicity to support BDRS to NCHS use cases. See [ObservationCodedRaceAndEthnicityVitalRecords], [ObservationInputRaceAndEthnicityVitalRecords], and [CompositionCodedRaceAndEthnicity].
- Incorporate the vital records approach to capturing usual work for mother and father, including adding an extension called [roleVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Extension-role-vr.html) to distinguish between mother and father. See [ObservationUsualWorkVitalRecords](https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Observation-usual-work-vr.html).
- Incorporation of edit flags as extensions within profiles, rather than as standalone observations.  This follows the path taken by VRDR STU2 that is in production use.  See [ObservationBirthWeight], [ObservationGestationalAgeAtDelivery], [ObservationMotherDeliveryWeight], [ObservationMotherHeight], [ObservationMotherPrepregnancyWeight], [ObservationNumberPrenatalVisits], [ObservationNumberPreviousCesareans], [PatientDecedentFetus], [ObservationEducationLevelVitalRecords], [PatientVitalRecords], [PatientMotherVitalRecords], [RelatedPersonMotherVitalRecords], [RelatedPersonFatherVitalRecords], [RelatedPersonParentVitalRecords].
- Consistent support for groups of responses that have a 'none-of-the-above' response using Observations and categories.  See [categories](categories.html). This includes resolution of [FHIR-43001](https://jira.hl7.org/FHIR-43001).
- Improved documentation of mapping of IJE fields to BFDR and VRCL profiles and fields.  See [Natality Data Dictionary](ije_mapping_natality.html) and [Fetal Death Data Dictionary](ije_mapping_fetalDeath.html).

#### Minor Changes
- Body Height LOINC Code 8302-2 Body Height Measured --> 3137-7 Body Height, based on new publication requirements.  Mother's Body Height based on USCoreBodyHeightProfile.
- Profile ID's were changed for [ObservationFetalDeathTimePoint], [CoveragePrincipalPayerDelivery], and [ObservationAntibioticsAdministeredDuringLabor] to be made consistent with their profile names. [EncounterMaternity] profile name was changed from Encounter_Maternity to EncounterMaternity to be consistent with naming convention of EncounterBirth.




### STU 1.1 Update, July 2023

| Jira Issue | Description of Change | Changes Made |
|---|---|---|
| [FHIR-40613](https://jira.hl7.org/browse/FHIR-40613)| On profiles:<br/>    Composition - Provider Live Birth Report<br/>    Composition - Provider Fetal Death Report<br/>Make all slices on Composition.identifier optional (0..1) (as opposed to 1..1) | Update Composition.identifier slices to 0..1 on:<br/>Composition - Provider Live Birth Report<br/>Composition - Provider Fetal Death Report |
| [FHIR-40680](https://jira.hl7.org/browse/FHIR-40680)| Observations with value sets containing a mix of Conditions, Observations, and Procedures have been used in the IG. This is not how the data is represented in the real world. Split the Observations into separate profiles using the appropriate resource.<br/>Replaced profiles:<br/><br/>Condition - Abnormal Condition of Newborn<br/>Condition - Maternal Morbidity<br/>Observation - Characteristic of Labor and Delivery | Added the following profiles:<br/><br/>Procedure - Assissted Ventilation Following Delivery<br/>Procedure - Assisted Ventilation More Than Six Hours<br/>Observation - NICU Admission<br/>Procedure - Surfactant Replacement Therapy<br/>Procedure - Antibiotic for Suspected Neonatal Sepsis<br/>Condition - Seizure<br/>Observation - None Of Specified Abnormal Conditions of Newborn<br/>Procedure - Blood Transfusion<br/>Condition - Perineal Laceration<br/>Condition - Ruptured Uterus<br/>Procedure - Unplanned Hysterectomy<br/>Observation - ICU Admission<br/>Observation - None Of Specified Maternal Morbidities<br/>Procedure - Induction of Labor<br/>Procedure - Augmentation of Labor<br/>Observation - Administration of Steroids for Fetal Lung Maturation<br/>Observation - Antibiotics Administered During Labor<br/>Condition - Chorioamnionitis<br/>Procedure - Epidural or Spinal Anesthesia<br/>Observation - None Of Specified Characteristics of Labor and Delivery |
| [FHIR-40847](https://jira.hl7.org/browse/FHIR-40847)| Update to latest published version of US Core (5.0.1) | Small updates based on US Core profiles changes<br/>Update to Condition profiles due to split in US Core Condition into US Core Condition Encounter Diagnosis and US Core Problems and Health Concerns Profile<br/> - after consultation on Zulip, all cause of death condition profiles are based on US Core Condition Encounter Diagnosis, and all other Condition profiles are based on US Core Problems and Health Concerns Profile |
| [FHIR-40929](https://jira.hl7.org/browse/FHIR-40929)| Revisit profile focus/subject mappings (mother and child/fetus) and update where needed<br/>During the Connectathon implementers noticed that there were a few profiles where the focus and subject were the wrong way round. Need to list all the profiles and ensure that they are all correct and update where needed. |  |
| [FHIR-41323](https://jira.hl7.org/browse/FHIR-41323)| Add and update a "Change Log" narrative page to the BFDR | This file/referencing page |
| [FHIR-41325](https://jira.hl7.org/browse/FHIR-41325)| Update Narrative pages for project info, correct external links, etc. Additionally, remove the IHE page and include relevant information on remaining narrative pages. | Narrative pages |
| [FHIR-41385](https://jira.hl7.org/browse/FHIR-41385)| Add Extension to Live Birth Compositions to reference maternity Encounter<br/><br/>Composition.encounter is limited to a maximum of 1 encounter, however a Live Birth spans two encounters - the Birth Encounter and the Maternity Encounter. The two Live Birth Compositions have the Birth Encounter as the one encounter referenced. Pilot implementers have requested that we add an extension to these Compositions to reference the Maternity Encounter to allow them to more easily get to the data in that Encounter.<br/><br/>Add to Composition - Provider Live Birth Report and Composition - Jurisdiction Live Birth Report an extension (must support and 0..1) that references the Maternity Encounter. | Added: Extension-encounter-maternity-reference<br/>Updated both Live Birth Compositions to optionally contain extension (on Composition.encounter) |
| [FHIR-41386](https://jira.hl7.org/browse/FHIR-41386)| Add receipt date Parameters profile similar to VRDR "Coding Status Values"<br/>Adding a Parameters profile similar to [StructureDefinition-vrdr-coding-status-values](https://hl7.org/fhir/us/vrdr/STU2.2/StructureDefinition-vrdr-coding-status-values.html)<br/>will allow BFDR implementers to use status flags that result from the NCHS coding process, e.g., Receipt date – Day, Month, Year (IJE codes R_DY, R_MO, R_YR) | Added profile to VRCPL: Parameters-coding-status-values-vr |
| [FHIR-41387](https://jira.hl7.org/browse/FHIR-41387)| Add Extension similar to VRDR “Extension: Replacement Status of a Death Record”, for replacement status of a birth / fetal death record<br/><br/>Adding an Extension will allow implementers to designate a Replacement (amended) record (IJE code: REPLACE) in IJE exchanges.<br/><br/>In VRDR, the Extension is on the Death Certificate composition.<br/><br/>Similarly, in BFDR, the extension will be available for the 4 Compositions (Provider/Jurisdiction Live Birth Report & Provider/Jurisdiction Fetal Death Report) | Added profile: Extension-replacement-status |
| [FHIR-41564](https://jira.hl7.org/browse/FHIR-41564)| FHIR-IJE Mismatch: This profile is used for the value known as AUTOPF.<br/><br/>According to IJE Spreadsheet, the AUTOPF is a Y/N/NA value.<br/>The profile provides only a boolean value.<br/>Suggest that it be a codeable concept bound to a Y/N/NA valueset. | Updated as suggested |
| [FHIR-41580](https://jira.hl7.org/browse/FHIR-41580)| Obsolete value in PHVS_FetalPresentations_NCHS value set:  SNOMEDCT code 163518000  – On examination – fetal presentation unsure | Replace code with nullFlavor UNK in PhinVads value set: [2.16.840.1.114222.4.11.7113](https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7113) |
| [FHIR-41596](https://jira.hl7.org/browse/FHIR-41596)| Composition data sources for items on the mother's/patient's worksheet: The provider live birth composition  HL7.FHIR.US.BFDR\Composition - Provider Live Birth Report - FHIR v4.0.1 and the provider fetal death report composition HL7.FHIR.US.BFDR\Composition - Provider Fetal Death Report - FHIR v4.0.1 include elements that have information that is directly asked from the mother and typically not found in the same format within an EMR unless this information is collected from the mother using the questions and wording of the jurisdiction’s mothers’ worksheet for the birth certificate via a patient portal or tablet that is uploaded to the EMR.  The data source for this information should be the mother (live birth) or patient (fetal death). To help make this more explicit for implementers we are requesting that descriptions within the entries be updated to include such information on where the information may be found. | Add data source to Composition, Profiles, add guidance on mapping tables page, add guidance on use cases page. |
| [FHIR-41600](https://jira.hl7.org/browse/FHIR-41600)| Add guidance on:Mother/Baby linkage: Consider adding guidance (perhaps on [Use Cases](use_cases.html)) on how FHIR models mother/baby linkage using RelatedPerson and noting that EHR systems may not use this method of linking the two participants. | Added guidance as suggested and also added guidance on alternate way of linking mother and baby found in some EHRs. |
| [FHIR-41601](https://jira.hl7.org/browse/FHIR-41601)| Add guidance on Plurality & Multiple Births | Added guidance as suggested on Use Cases page |
| [FHIR-41602](https://jira.hl7.org/browse/FHIR-41602)| Add guidance on sources and coding of data for forms | Added guidance as suggested on Use Cases page |
{: .grid }

{% include markdown-link-references.md %}

---

// File: input/pagecontent/content-transitions_old.md

# Provider Live Birth

| Name of Profile | Group | change  |  Current Profile   | New Profile  | Comment         |
| ------------- | ----- | ------- | ------------------ | ------------ | ----------------- | 
|Patient-Child |   subject  |    adding edit flag extension to patient VR   |   [PatientChildVitalRecords] |     [PatientChildVitalRecordsNew]     |   staying in VRCL with updates   |
|Encounter-Birth |   encounter  |    -    | [EncounterBirth] |     -         |   -      |
|Encounter-Maternity (ext) |   encounter  |    -    | [EncounterMaternity] |     -         |   -      |
|Practitioner |   author  |  generalized profile that adds a further constraint to capture the title of the practitioner  | [PractitionerVitalRecords] | [PractitionerVitalRecordsNew] | - |
|Patient-Mother |   focus  |    adding edit flag extension to patient VR    | [PatientMotherVitalRecords] |     [PatientMotherVitalRecordsNew]        |   staying in VRCL with updates   |
|Planned to Deliver at Home |   motherPrenatal  |    -    | [ObservationPlannedToDeliverAtHome] |     -         |   -      |
|First Prenatal Care Visit |   motherPrenatal  |    -    | [ObservationDateOfFirstPrenatalCareVisit] |       -       |    -     |
|Number Prenatal Care Visits|     motherPrenatal     |    adding edit flag extension    | [ObservationNumberPrenatalVisitsVitalRecords] |   [ObservationNumberPrenatalVisitsNew]    |    moving from VRCL to BFDR    |
|Date Last Normal Menses |     motherPrenatal     |    -    | [ObservationLastMenstrualPeriodVitalRecords] |     [ObservationLastMenstrualPeriodNew]     |    moving from VRCL to BFDR    |
|Number Now Living |     motherPrenatal     |    -    | [ObservationNumberBirthsNowLivingVitalRecords] |    [ObservationNumberBirthsNowLivingNew]    |    moving from VRCL to BFDR    |
|Number Now Dead |     motherPrenatal     |    -    | [ObservationNumberBirthsNowDeadVitalRecords] |     [ObservationNumberBirthsNowDeadNew]     |    moving from VRCL to BFDR    |
|Number Other Outcomes |     motherPrenatal     |    -    | [ObservationNumberOtherPregnancyOutcomesVitalRecords] | [ObservationNumberOtherPregnancyOutcomesNew]     |    moving from VRCL to BFDR    |
|Date Last Other Outcome |     motherPrenatal     |    -    | [ObservationDateOfLastOtherPregnancyOutcome] |       -       |    -     |
|Principal Source of Payment |    motherPrenatal     |    -    | [CoveragePrincipalPayerDelivery] |       -       |    -     |
|Mother's Weight at Delivery |     motherPrenatal    |    adding edit flag extension   | [ObservationMotherDeliveryWeightVitalRecords] |    [ObservationMotherDeliveryWeightNew]     |    moving from VRCL to BFDR    |
|Mother's Height |     motherPrenatal    |    adding edit flag extension   | [ObservationMotherHeightVitalRecords] | [ObservationMotherHeightNew] |    moving from VRCL to BFDR    |
|Mother's Prepregancy Weight|     motherPrenatal     |    adding edit flag extension    | [ObservationMotherPrepregnancyWeightVitalRecords] |   [ObservationMotherPrepregnancyWeightNew]    |    moving from VRCL to BFDR    |
|Mother Received WIC Food|     motherPrenatal     |    -    | [ObservationMotherReceivedWICFood] |       -       |    -     |
|Cigarette Smoking Before During Pregnancy|     motherPrenatal     |    -    | [ObservationCigaretteSmokingBeforeDuringPregnancy] |       -       |    -     |
|Prepregnancy Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Gestational Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Prepregnancy Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Gestational Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Eclampsia Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionEclampsiaHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Previous Preterm Birth |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousPretermBirthNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Infertility Treatment |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureInfertilityTreatmentNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Artificial Insemination |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureArtificialInseminationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Assisted Fertilization |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureAssistedFertilizationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles    |
|Previous Cesarean |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousCesareanNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|None Of Specified Pregnancy Risk Factors |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationNoneOfSpecifiedPregnancyRiskFactorsNew]   |    Risk factors broken up into individual profiles; if this profile is present, then all the missing individual risk factors are interpreted as ‘N’; if a risk factor is present along with 'none specified', 'none specified' is marked 'N'; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented for risk factors    |
|Number Previous Cesareans |     medicalHealthInformation     |    adding edit flag extension    | [ObservationNumberPreviousCesareansVitalRecords] |  [ObservationNumberPreviousCesareansNew]   |    moving from VRCL to BFDR; '99' corresponds to 'unknown'    |
|Infections During Pregnancy |     medicalHealthInformation   |    -    | [ConditionInfectionPresentDuringPregnancy] |       -       |    Infections During Pregnancy VS includes 'other' (not specified in the DVS birth edit spec) and 'none'; if marked 'none', all missing infections get interpreted as 'N'; if any are present and 'none of the above' is as well, 'none of the above' interpreted as 'N'; Although the item cannot be left blank for submission, DVS birth edit spec states that before transmitted to the state electronically, blank entries must be coded as all unknown - the current VS does not include an 'unknown'     |
|Obstetric Procedures |     medicalHealthInformation    |    -    | [ProcedureObstetric] |       -       |    -     |
|Induction of Labor |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ProcedureInductionOfLabor] |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles    |
|Augmentation of Labor |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ProcedureAugmentationOfLabor] |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles    |
|Steroids Fetal Lung Maturation |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ObservationSteroidsFetalLungMaturation] |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles     |
|Antibiotics Administered During Labor |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ObservationAntibioticsAdministeredDuringLabor] |     -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles    |
|Chorioamnionitis |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ConditionChorioamnionitis]  |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles    |
|Epidural or Spinal Anesthesia |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ProcedureEpiduralOrSpinalAnesthesia]  |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles    |
|None of Specified Characteristics of Labor and Delivery |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery]  |       -       |    if this profile is present, then all missing individual characteristics are interpreted as ‘N’; if a characteristic is present along with ‘none of the above’, 'none of the above' is marked 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles     |
|Fetal Presentations |     medicalHealthInformation   |    -    | [ObservationFetalPresentation] |       -       |     Fetal Presentations VS includes 'On examination - fetal presentation unsure Unknown fetal presentation' and 'other' codes    |
|Final Route Method Delivery|     medicalHealthInformation   |    -    | [ProcedureFinalRouteMethodDelivery] |       -       |    Delivery Routes VS includes 'unknown' code (single entry); profile contains Labor Trial reference (MS, but only valid when delivery.code is cesarean)     |
|Blood Transfusion |     medicalHealthInformation/Maternal Morbidity    |    -    | [ProcedureBloodTransfusion] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles     |
|Perineal Laceration |     medicalHealthInformation/Maternal Morbidity    |    -    | [ConditionPerinealLaceration] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|Ruptured Uterus  |     medicalHealthInformation/Maternal Morbidity    |    -    | [ConditionRupturedUterus] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|Unplanned Hysterectomy |     medicalHealthInformation/Maternal Morbidity    |    -    | [ProcedureUnplannedHysterectomy] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|ICU Admission |     medicalHealthInformation/Maternal Morbidity    |    -    | [ObservationICUAdmission] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|None of Specified Maternal Morbidities |     medicalHealthInformation/Maternal Morbidity    |    -    | [ObservationNoneOfSpecifiedMaternalMorbidities] |       -       |    if this resource is present, missing individual morbidities are interpreted as ‘N’; if any morbidity is present in addition to 'none specified', 'none specified' is marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current profiles        |
|Birth Weight |     newbornInformation   |    adding edit flag extension     | [ObservationBirthWeightVitalRecords] |    [ObservationBirthWeightNew]    |    moving from VRCL to BFDR    |
|Gestational Age at Delivery |     newbornInformation    |    adding edit flag extension    | [ObservationGestationalAgeAtDeliveryVitalRecords] |  [ObservationGestationalAgeAtDeliveryNew]   |    moving from VRCL to BFDR    |
|Apgar Score |     newbornInformation    |    -    | [ObservationApgarScoreVitalRecords] | [ObservationApgarScoreNew]  |    moving from VRCL to BFDR    |
|Number Live Births This Delivery |     newbornInformation   |    -    | [ObservationNumberLiveBirthsThisDeliveryVitalRecords] |   [ObservationNumberLiveBirthsThisDeliveryNew]   |    moving from VRCL to BFDR    |
|Assisted Ventilation Following Delivery |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureassistedVentilationFollowingDelivery]  |       -       |    -     |
|Assisted Ventilation More than Six Hours  |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureassistedVentilationMoreThanSixHours]   |       -       |    -     |
|NICU Admission |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ObservationNICUAdmission]   |       -       |    -     |
|Surfactant Replacement Therapy |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureSurfactantReplacementTherapy]   |       -       |    -     |
|Antibiotic Suspected Neonatal Sepsis |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureAntibioticSuspectedNeonatalSepsis]   |       -       |    -     |
|Seizure|     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ConditionSeizure]   |       -       |    -     |
|None of Specified Abnormal Conditions of Newborn |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn] |       -       |    if this profile is present, then all the missing individual abnormalities are interpreted as ‘N’; it is interpreted as 'N' if a condition is present (even if this resource is present); DVS edit spec includes 'unknown at this time' - not supported by the current profiles     |
|Congenital Anomalies Newborn |     newbornInformation    |    -    |    [ConditionCongenitalAnomalyOfNewborn]    |    Newborn Congenital Anomalies VS includes explicit 'none' code for no anomalies - DVS edit spec specifies that 'none of the above' should cause all missing anomalies to be interpreted as 'N'; if an anomaly and 'None of the anomalies listed above' are included, 'None of the anomalies listed above' is interpreted as 'N'; if the “Down syndrome” and/or 'Suspected chromosomal disorder' variables are present, but it is unknown whether the karyotype is 'Confirmed' or 'Pending,' leave both the 'Confirmed' and 'Pending' boxes blank. Processing variables DOWC AND DOWP, CDIC and CDIP are assigned the value 'U'; DVS edit spec includes 'unknown at this time' - not included in the current profile       |
|Infant Living |     newbornInformation    |    -    | [ObservationInfantLivingVitalRecords] |     [ObservationInfantLivingNew]    |    moving from VRCL to BFDR    |
|Infant Breastfed at Discharge|     newbornInformation    |    -    | [ObservationInfantBreastfedAtDischarge] |       -       |    -     |
|Married During Pregnancy |     motherInformation   |    -    | [ObservationMotherMarriedDuringPregnancy] |       -       |    -     |
|SSN Requested for Child |     motherInformation   |    -    | [ObservationSSNRequestedForChild] |       -       |    -     |
|Mothers Education|     motherInformation   |  added Decedent education level code, removed MS flags, adding edit flag extension  | [ObservationParentEducationLevelVitalRecords] | [ObservationEducationLevelVitalRecordsNew] |  - |
|Paternity Acknowledgement Signed |     fatherInformation   |    -    | [ObservationPaternityAcknowledgementSigned] |       -       |    -     |
|Fathers Education|     fatherInformation  |   added Decedent education level code, removed MS flags, adding edit flag extension   | [ObservationParentEducationLevelVitalRecords] | [ObservationEducationLevelVitalRecordsNew] |  - |
|Father Related Person|     fatherInformation  |   adding edit flag extension to related person profile  | [RelatedPersonFatherNaturalVitalRecords] | - |  - |
|Question Response|     patientsQuestionnaireResponse  |   -  | [QuestionnaireResponse] | - |  - |
{: .grid }
<!-- |Questionnaire-Mother's Worksheet for Child's Birth Certificate |     mothersQuestionnaireResponse   |    -    | [Questionnaire-mothers-live-birth] |       -       |    Not a profile    | -->

| Name of Extension  | change  |  Current Extension   | New Extension  | Comment |
| ------------------ | ------- | ------------------ | ------------ | ----- | 
|Live Birth Certificate Number  |    -    | [ExtensionLiveBirthCertificateNumber] |     -       |   -      |
|Live Birth Local File Number  |    -    | [ExtensionLiveBirthLocalFileNumber] |     -      |   -      |
|Date Filed by Registrar |    -    | [ExtensionDateFiledByRegistrar] |     -         |   -      |
|Replacement Status |    -    | [ReplaceStatus] |     -         |    The use of this extension has been deprecated and wil be ignored for NCHS submissions.  |
|Encounter Maternity Reference |    -    | [ExtensionEncounterMaternityReference] |     -         |   -  |
{: .grid }
<!-- |Partial Date  |    -    | [PartialDate] |    [ExtensionDatePartAbsentReasonVitalRecords]         |   -      |
|Partial Date Time  |    -    | [PartialDateTime] | [ExtensionPartialDateTimeVitalRecords]             |    -     | -->

# Provider Fetal Death

| Name of Profile | Group | change  |  Current Profile   | New Profile  | Comment         |
| ------------- | ----- | ------- | ------------------ | ------------ | ----------------- | 
|Patient-Decedent Fetus |   subject  |    adding edit flag extension to patient VR     | [PatientDecedentFetusVitalRecords] |  [PatientDecedentFetusVitalRecordsNew]   |   staying in VRCL with updates   |
|Encounter-Maternity |   encounter  |    -    | [EncounterMaternity] |     -         |   -      |
|Practitioner |   author  |    generalized profile that adds a further constraint to capture the title of the practitioner    | [PractitionerVitalRecords] | [PractitionerVitalRecordsNew] |  -  |
|Patient-Mother |   focus  |    adding edit flag extension to related person profile    | [PatientMotherVitalRecords] |   [RelatedPersonMotherVitalRecordsNew]    |   staying in VRCL with updates    |
|Planned to Deliver at Home |   motherPrenatal  |    -    | [ObservationPlannedToDeliverAtHome] |     -         |   -      |
|First Prenatal Care Visit |   motherPrenatal  |    -    | [ObservationDateOfFirstPrenatalCareVisit] |       -       |    -     |
|Date Last Normal Menses |     motherPrenatal     |    -    | [ObservationLastMenstrualPeriodVitalRecords] |   [ObservationLastMenstrualPeriodNew]   |    moving from VRCL to BFDR    |
|Number Now Living |     motherPrenatal     |    -    | [ObservationNumberBirthsNowLivingVitalRecords] |   [ObservationNumberBirthsNowLivingNew]    |    moving from VRCL to BFDR    |
|Number Now Dead |     motherPrenatal     |    -    | [ObservationNumberBirthsNowDeadVitalRecords] |   [ObservationNumberBirthsNowDeadNew]   |    moving from VRCL to BFDR    |
|Date Last Live Birth |     motherPrenatal     |    -    | [ObservationDateOfLastLiveBirth] |       -       |    -     |
|Mother's Height |     motherPrenatal    |    adding edit flag extension    | [ObservationMotherHeightVitalRecords] |  [ObservationMotherHeightNew]   |    moving from VRCL to BFDR    |
|Mother's Prepregancy Weight|     motherPrenatal     |    adding edit flag extension    | [ObservationMotherPrepregnancyWeightVitalRecords] |   [ObservationMotherPrepregnancyWeightNew]    |    moving from VRCL to BFDR    |
|Mother Received WIC Food|     motherPrenatal     |    -    | [ObservationMotherReceivedWICFood] |       -       |    -     |
|Cigarette Smoking Before During Pregnancy|     motherPrenatal     |    -    | [ObservationCigaretteSmokingBeforeDuringPregnancy] |       -       |    -     |
|Prepregnancy Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Gestational Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Prepregnancy Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Gestational Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Eclampsia Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionEclampsiaHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Previous Preterm Birth |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousPretermBirthNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Infertility Treatment |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureInfertilityTreatmentNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Artificial Insemination |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureArtificialInseminationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Assisted Fertilization |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureAssistedFertilizationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Previous Cesarean |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousCesareanNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|None Of Specified Pregnancy Risk Factors |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationNoneOfSpecifiedPregnancyRiskFactorsNew]   |    Risk factors broken up into individual profiles; if this profile is present, then all the missing individual risk factors are interpreted as ‘N’; if a risk factor is present along with 'none specified', 'none specified' is marked 'N'; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented for risk factors    |
|Number Previous Cesareans |     medicalHealthInformation     |    adding edit flag extension   | [ObservationNumberPreviousCesareansVitalRecords] |  [ObservationNumberPreviousCesareansNew]   |    moving from VRCL to BFDR; '99' corresponds to 'unknown'   |
|Fetal Presentations |     medicalHealthInformation   |    -    | [ObservationFetalPresentation] |       -       |    Fetal Presentations VS includes 'On examination - fetal presentation unsure Unknown fetal presentation' and 'other' codes    |
|Final Route Method Delivery|     medicalHealthInformation   |    -    | [ProcedureFinalRouteMethodDelivery] |       -       |    Delivery Routes VS includes 'unknown' code (single entry); profile contains Labor Trial reference (MS, but only valid when delivery.code is cesarean)    |
|Blood Transfusion |     medicalHealthInformation/Maternal Morbidity   |    -    | [ProcedureBloodTransfusion] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|Perineal Laceration |     medicalHealthInformation/Maternal Morbidity   |    -    | [ConditionPerinealLaceration] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|Ruptured Uterus |     medicalHealthInformation/Maternal Morbidity   |    -    | [ConditionRupturedUterus] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles   |
|Unplanned Hysterectomy |     medicalHealthInformation/Maternal Morbidity   |    -    | [ProcedureUnplannedHysterectomy] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|ICU Admission|     medicalHealthInformation/Maternal Morbidity   |    -    | [ObservationICUAdmission] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|None of Specified Maternal Morbidities|     medicalHealthInformation/Maternal Morbidity   |    -    | [ObservationNoneOfSpecifiedMaternalMorbidities] |       -       |    if this resource is present, missing individual morbidities are interpreted as ‘N’; if any morbidity is present in addition to 'none specified', 'none specified' is marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current profiles       |
|Delivery Weight |     fetus   |    adding edit flag extension    | [ObservationBirthWeightVitalRecords] | [ObservationBirthWeightNew]   |    moving from VRCL to BFDR    |
|Gestational Age at Delivery |     fetus     |    adding edit flag extension   | [ObservationGestationalAgeAtDeliveryVitalRecords] |   [ObservationGestationalAgeAtDeliveryNew]   |    moving from VRCL to BFDR    |
|Cause of Fetal Death |     fetus     |    -    | [ConditionFetalDeathCauseOrCondition] |       -       |    -     |
|Other Cause of Death |     fetus    |    -    | [ConditionFetalDeathOtherCauseOrCondition] |       -       |    -     |
|Estimated Time Fetal Death |     fetus     |    -    | [ObservationFetalDeathTimePoint] |    -    |    -     |
|Autopsy Performed |     fetus     |    -    | [AutopsyPerformedIndicator] |    -    |    -     |
|Histological Exam Performed |     fetus     |    -    | [ObservationHistologicalPlacentalExamPerformed] |       -       |    -     |
|Autopsy or Histological Exam Used|     fetus     |    -    | [ObservationAutopsyHistologicalExamResultsUsed] |       -       |    -     |
|Number Live Births This Delivery |     fetus    |    -    | [ObservationNumberLiveBirthsThisDeliveryVitalRecords] |  [ObservationNumberLiveBirthsThisDeliveryNew]  |    moving from VRCL to BFDR    |
|Number Fetal Deaths This Delivery |     fetus    |    -    | [ObservationNumberFetalDeathsThisDeliveryVitalRecords] |  [ObservationNumberFetalDeathsThisDeliveryNew]   |    moving from VRCL to BFDR    |
|Mothers Education|     motherInformation   |    added Decedent education level code, removed MS flags, adding edit flag extension   | [ObservationParentEducationLevelVitalRecords] | [ObservationEducationLevelVitalRecordsNew] |  -  |
|Father Related Person|     fatherInformation  |   adding edit flag extension to related person profile  | [RelatedPersonFatherNaturalVitalRecords] | - |  - |
|Question Response|     patientsQuestionnaireResponse  |   -  | [QuestionnaireResponse] | - |  - |
{: .grid }
<!-- | Mother's Race and Ethnicity| motherInfo |    -    |  <not included> | [InputRaceAndEthnicityNew] | moving from VRDR to VRCL | -->
<!-- |Patients Questionnaire Response |     patientsQuestionnaireResponse   |    -    | [Questionnaire-patients-fetal-death] |       -       |    Not a profile    | -->


| Name of Extension  | change  |  Current Extension   | New Extension  | Comment |
| ------------------ | ------- | ------------------ | ------------ | ----- | 
|Fetal Death Report Number  |    -    | [ExtensionFetalDeathReportNumber] |     -       |   -      |
|Fetal Death Local File Number  |    -    | [ExtensionFetalDeathLocalFileNumber] |     -      |   -      |
|Date Received by Registrar |    -    | [ExtensionDatereceivedByRegistrar] |     -         |   -      |
|Replacement Status |    -    | [ReplaceStatus] |     -         |    The use of this extension has been deprecated and wil be ignored for NCHS submissions.  |
|Encounter Maternity Reference |    -    | [ExtensionEncounterMaternityReference] |     -         |   -  |
{: .grid }
<!-- |Partial Date  |    -    | [PartialDate] |    [ExtensionDatePartAbsentReasonVitalRecords]         |   -      |
|Partial Date Time  |    -    | [PartialDateTime] | [ExtensionPartialDateTimeVitalRecords]             |    -     | -->

# Jurisdiction Live Birth

| Name of Profile | Group | change  |  Current Profile   | New Profile  | Comment         |
| ------------- | ----- | ------- | ------------------ | ------------ | ----------------- | 
|Encounter-Birth |   encounter  |    -    | [EncounterBirth] |     -         |   -      |
|Patient-Child |   subject  |    adding edit flag extension to patient VR     |   [PatientChildVitalRecords] |     [PatientChildVitalRecordsNew]     |   staying in VRCL with updates   |
|US Core Organization Profile |   Author  |    -    | [USCoreOrganization] |     -         |   -      |
|Patient-Mother |   focus  |    adding edit flag extension to patient VR     | [PatientMotherVitalRecords] |     [PatientMotherVitalRecordsNew]        |   staying in VRCL with updates   |
|Planned to Deliver at Home |   motherPrenatal  |    -    | [ObservationPlannedToDeliverAtHome] |     -         |   -      |
|Number Prenatal Care Visits|     motherPrenatal     |    adding edit flag extension    | [ObservationNumberPrenatalVisitsVitalRecords] |   [ObservationNumberPrenatalVisitsNew]    |    moving from VRCL to BFDR    |
|Date Last Normal Menses |     motherPrenatal     |    -    | [ObservationLastMenstrualPeriodVitalRecords] |     [ObservationLastMenstrualPeriodNew]     |    moving from VRCL to BFDR    |
|Number Now Living |     motherPrenatal     |    -    | [ObservationNumberBirthsNowLivingVitalRecords] |    [ObservationNumberBirthsNowLivingNew]    |    moving from VRCL to BFDR    |
|Number Now Dead |     motherPrenatal     |    -    | [ObservationNumberBirthsNowDeadVitalRecords] |     [ObservationNumberBirthsNowDeadNew]     |    moving from VRCL to BFDR    |
|Date Last Live Birth |     motherPrenatal     |    -    | [ObservationDateOfLastLiveBirth] |       -       |    -     |
|Number Other Outcomes |     motherPrenatal     |    -    | [ObservationNumberOtherPregnancyOutcomesVitalRecords] | [ObservationNumberOtherPregnancyOutcomesNew]     |    moving from VRCL to BFDR    |
|Date Last Other Outcome |     motherPrenatal     |    -    | [ObservationDateOfLastOtherPregnancyOutcome] |       -       |    -     |
|Principal Source of Payment |    motherPrenatal     |    -    | [CoveragePrincipalPayerDelivery] |       -       |    -     |
|Mother's Weight at Delivery |     motherPrenatal    |    adding edit flag extension    | [ObservationMotherDeliveryWeightVitalRecords] |    [ObservationMotherDeliveryWeightNew]     |    moving from VRCL to BFDR    |
|Mother's Height |     motherPrenatal    |    adding edit flag extension    | [ObservationMotherHeightVitalRecords] | [ObservationMotherHeightNew] |    moving from VRCL to BFDR    |
|Mother's Prepregancy Weight|     motherPrenatal     |    adding edit flag extension    | [ObservationMotherPrepregnancyWeightVitalRecords] |   [ObservationMotherPrepregnancyWeightNew]    |    moving from VRCL to BFDR    |
|Mother Received WIC Food|     motherPrenatal     |    -    | [ObservationMotherReceivedWICFood] |       -       |    -     |
|Cigarette Smoking Before During Pregnancy|     motherPrenatal     |    -    | [ObservationCigaretteSmokingBeforeDuringPregnancy] |       -       |    -     |
|Prepregnancy Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Gestational Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Prepregnancy Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Gestational Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Eclampsia Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionEclampsiaHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Previous Preterm Birth |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousPretermBirthNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Infertility Treatment |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureInfertilityTreatmentNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Artificial Insemination |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureArtificialInseminationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Assisted Fertilization |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureAssistedFertilizationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Previous Cesarean |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousCesareanNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|None Of Specified Pregnancy Risk Factors |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationNoneOfSpecifiedPregnancyRiskFactorsNew]   |    Risk factors broken up into individual profiles; if this profile is present, then all the missing individual risk factors are interpreted as ‘N’; if a risk factor is present along with 'none specified', 'none specified' is marked 'N'; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented for risk factors    |
|Number Previous Cesareans |     medicalHealthInformation     |    adding edit flag extension    | [ObservationNumberPreviousCesareansVitalRecords] |  [ObservationNumberPreviousCesareansNew]   |    moving from VRCL to BFDR; '99' corresponds to 'unknown'    |
|Infections During Pregnancy |     medicalHealthInformation   |    -    | [ConditionInfectionPresentDuringPregnancy] |       -       |    Infections During Pregnancy VS includes 'other' (not specified in the DVS birth edit spec) and 'none'; if marked 'none', all missing infections get interpreted as 'N'; if any are present and 'none of the above' is as well, 'none of the above' interpreted as 'N'; Although the item cannot be left blank for submission, DVS birth edit spec states that before transmitted to the state electronically, blank entries must be coded as all unknown - the current VS does not include an 'unknown'     |
|Obstetric Procedures |     medicalHealthInformation    |    -    | [ProcedureObstetric] |       -       |    -     |
|Induction of Labor |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ProcedureInductionOfLabor] |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles    |
|Augmentation of Labor |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ProcedureAugmentationOfLabor] |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles     |
|Steroids Fetal Lung Maturation |     medicalHealthInformation/Characteristics Labor Delivery    |    -if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles   | [ObservationSteroidsFetalLungMaturation] |       -       |    -     |
|Antibiotics Administered During Labor |     medicalHealthInformation/Characteristics Labor Delivery    |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles    | [ObservationAntibioticsAdministeredDuringLabor] |     -       |    -     |
|Chorioamnionitis |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ConditionChorioamnionitis]  |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles     |
|Epidural or Spinal Anesthesia |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ProcedureEpiduralOrSpinalAnesthesia]  |       -       |    if the 'none specified' resource is present and this resource is not present, it is marked 'N'; if any other labor characteristic is present and this one is blank (with 'none of the above' absent), it is interpreted as 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles     |
|None of Specified Characteristics of Labor and Delivery |     medicalHealthInformation/Characteristics Labor Delivery    |    -    | [ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery]  |       -       |    if this profile is present, then all missing individual characteristics are interpreted as ‘N’; if a characteristic is present along with ‘none of the above’, 'none of the above' is marked 'N'; DVS edit spec includes ‘unknown at this time’ which maps to ‘unknown’ in IJE - this is not represented in the labor characteristics profiles     |
|Fetal Presentations |     medicalHealthInformation   |    -    | [ObservationFetalPresentation] |       -       |    Fetal Presentations VS includes 'On examination - fetal presentation unsure Unknown fetal presentation' and 'other' codes     |
|Final Route Method Delivery|     medicalHealthInformation   |    -    | [ProcedureFinalRouteMethodDelivery] |       -       |    Delivery Routes VS includes 'unknown' code (single entry); profile contains Labor Trial reference (MS, but only valid when delivery.code is cesarean)    |
|Blood Transfusion |     medicalHealthInformation/Maternal Morbidity    |    -    | [ProcedureBloodTransfusion] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|Perineal Laceration |     medicalHealthInformation/Maternal Morbidity    |    -    | [ConditionPerinealLaceration] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|Ruptured Uterus  |     medicalHealthInformation/Maternal Morbidity    |    -    | [ConditionRupturedUterus] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|Unplanned Hysterectomy |     medicalHealthInformation/Maternal Morbidity    |    -    | [ProcedureUnplannedHysterectomy] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles    |
|ICU Admission |     medicalHealthInformation/Maternal Morbidity    |    -    | [ObservationICUAdmission] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles   |
|None of Specified Maternal Morbidities |     medicalHealthInformation/Maternal Morbidity    |    -    | [ObservationNoneOfSpecifiedMaternalMorbidities] |       -       |    if this resource is present, missing individual morbidities are interpreted as ‘N’; if any morbidity is present in addition to 'none specified', 'none specified' is marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current profiles       |
|Birth Weight |     newbornInformation   |    adding edit flag extension    | [ObservationBirthWeightVitalRecords] |    [ObservationBirthWeightNew]    |    moving from VRCL to BFDR    |
|Gestational Age at Delivery |     newbornInformation    |    adding edit flag extension   | [ObservationGestationalAgeAtDeliveryVitalRecords] |  [ObservationGestationalAgeAtDeliveryNew]   |    moving from VRCL to BFDR    |
|Apgar Score |     newbornInformation    |    -    | [ObservationApgarScoreVitalRecords] | [ObservationApgarScoreNew]  |    moving from VRCL to BFDR    |
|Number Live Births This Delivery |     newbornInformation   |    -    | [ObservationNumberLiveBirthsThisDeliveryVitalRecords] |   [ObservationNumberLiveBirthsThisDeliveryNew]   |    moving from VRCL to BFDR    |
|Assisted Ventilation Following Delivery |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureassistedVentilationFollowingDelivery]  |       -       |    -     |
|Assisted Ventilation More than Six Hours  |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureassistedVentilationMoreThanSixHours]   |       -       |    -     |
|NICU Admission |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ObservationNICUAdmission]   |       -       |    -     |
|Surfactant Replacement Therapy |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureSurfactantReplacementTherapy]   |       -       |    -     |
|Antibiotic Suspected Neonatal Sepsis |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ProcedureAntibioticSuspectedNeonatalSepsis]   |       -       |    -     |
|Seizure|     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ConditionSeizure]   |       -       |    -     |
|None of Specified Abnormal Conditions of Newborn |     newbornInformation/Abnormal Conditions Newborn  |    if 'none of the above' or another abnormal condition is present and this resource is missing, it is interpreted as ’N’    | [ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn] |       -       |    if this profile is present, then all the missing individual abnormalities are interpreted as ‘N’; it is interpreted as 'N' if a condition is present (even if this resource is present); DVS edit spec includes 'unknown at this time' - not supported by the current profiles     |
|Congenital Anomalies Newborn |     newbornInformation    |    -    |    [ConditionCongenitalAnomalyOfNewborn]    |    -    |    Newborn Congenital Anomalies VS includes explicit 'none' code for no anomalies - DVS edit spec specifies that 'none of the above' should cause all missing anomalies to be interpreted as 'N'; if an anomaly and 'None of the anomalies listed above' are included, 'None of the anomalies listed above' is interpreted as 'N'; if the “Down syndrome” and/or 'Suspected chromosomal disorder' variables are present, but it is unknown whether the karyotype is 'Confirmed' or 'Pending,' leave both the 'Confirmed' and 'Pending' boxes blank. Processing variables DOWC AND DOWP, CDIC and CDIP are assigned the value 'U'; DVS edit spec includes 'unknown at this time' - not included in the current profile    |
|Infant Living |     newbornInformation    |    -    | [ObservationInfantLivingVitalRecords] |     [ObservationInfantLivingNew]    |    moving from VRCL to BFDR    |
|Infant Breastfed at Discharge|     newbornInformation    |    -    | [ObservationInfantBreastfedAtDischarge] |       -       |    -     |
|Married During Pregnancy |     motherInformation   |    -    | [ObservationMotherMarriedDuringPregnancy] |       -       |    -     |
|SSN Requested for Child |     motherInformation   |    -    | [ObservationSSNRequestedForChild] |       -       |    -     |
|Father Related Person |     fatherInformation  |   adding edit flag extension to related person profile  | [RelatedPersonFatherNaturalVitalRecords] | - |  - |
|Fathers Education |     fatherInformation  |   added Decedent education level code, removed MS flags, adding edit flag extension   | [ObservationParentEducationLevelVitalRecords] | [ObservationEducationLevelVitalRecordsNew] |  - |
|Paternity Acknowledgement Signed |     fatherInformation   |    -    | [ObservationPaternityAcknowledgementSigned] |       -       |    -     |
| Edit Flag Birthweight  |     editFlags  |   deleted and replaced by extensions in related profiles  | [ObservationEditFlagBirthweight] |       -       |    -     |
| Edit Flag Estimate of Gestation  |     editFlags  |   deleted and replaced by extensions in related profiles    | [ObservationEditFlagEstimateOfGestation] |       -       |    -     |
| Edit Flag Father's Date of Birth  |     editFlags  |    deleted and replaced by extensions in related profiles   | [ObservationEditFlagFathersDateOfBirth] |       -       |    -     |
| Edit Flag Father's Education  |     editFlags  |   deleted and replaced by extensions in related profiles    | [ObservationEditFlagFathersEducation] |       -       |    -     |
| Edit Flag Mother's Date of Birth  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagMothersDateOfBirth] |       -       |    -     |
| Edit Flag Mother's Delivery Weight  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagMothersDeliveryWeight] |       -       |    -     |
| Edit Flag Father's Education  |     editFlags  |    deleted and replaced by extensions in related profiles   | [ObservationEditFlagMothersEducation] |       -       |    -     |
| Edit Flag Mother's Height  |     editFlags  |   deleted and replaced by extensions in related profiles    | [ObservationEditFlagMothersHeight] |       -       |    -     |
| Edit Flag Mother's Prepregnancy Weight  |     editFlags  |   deleted and replaced by extensions in related profiles   | [ObservationEditFlagMothersPrepregnancyWeight] |       -       |    -     |
| Edit Flag Number Prenatal Care Visits  |     editFlags  |    deleted and replaced by extensions in related profiles   | [ObservationEditFlagNumberPrenatalCareVisits] |       -       |    -     |
| Edit Flag Number of Previous Cesareans  |     editFlags  |   deleted and replaced by extensions in related profiles    | [ObservationEditFlagNumberPreviousCesareans] |       -       |    -     |
| Edit Flag Plurality  |     editFlags  |   deleted and replaced by extensions in related profiles    | [ObservationEditFlagPlurality] |       -       |    -     |
{: .grid }

# Jurisdiction Fetal Death

| Name of Profile | Group | change  |  Current Profile   | New Profile  | Comment         |
| ------------- | ----- | ------- | ------------------ | ------------ | ----------------- | 
|Patient-Decedent Fetus |   subject  |    adding edit flag extension to patient VR     | [PatientDecedentFetusVitalRecords] |  [PatientDecedentFetusVitalRecordsNew]   |   staying in VRCL with updates   |
|Encounter-Maternity |   encounter  |    -    | [EncounterMaternity] |     -         |   -      |
|US Core Organization Profile |   Author  |    -    | [USCoreOrganization] |     -         |   -      |
|Patient-Mother |   focus  |    adding edit flag extension to patient VR     | [PatientMotherVitalRecords] |     [PatientMotherVitalRecordsNew]        |   staying in VRCL with updates   |
|Planned to Deliver at Home |   motherPrenatal  |    -    | [ObservationPlannedToDeliverAtHome] |     -         |   -      |
|Number Prenatal Care Visits|     motherPrenatal     |    -    | [ObservationDateOfFirstPrenatalCareVisit] |   -    |    -    |
|Date Last Normal Menses |     motherPrenatal     |    -    | [ObservationLastMenstrualPeriodVitalRecords] |     [ObservationLastMenstrualPeriodNew]     |    moving from VRCL to BFDR    |
|Number Now Living |     motherPrenatal     |    -    | [ObservationNumberBirthsNowLivingVitalRecords] |    [ObservationNumberBirthsNowLivingNew]    |    moving from VRCL to BFDR    |
|Number Now Dead |     motherPrenatal     |    -    | [ObservationNumberBirthsNowDeadVitalRecords] |     [ObservationNumberBirthsNowDeadNew]     |    moving from VRCL to BFDR    |
|Date Last Live Birth |     motherPrenatal     |    -    | [ObservationDateOfLastLiveBirth] |       -       |    -     |
|Mother's Height |     motherPrenatal    |    adding edit flag extension    | [ObservationMotherHeightVitalRecords] | [ObservationMotherHeightNew] |    moving from VRCL to BFDR    |
|Mother's Prepregancy Weight|     motherPrenatal     |    adding edit flag extension    | [ObservationMotherPrepregnancyWeightVitalRecords] |   [ObservationMotherPrepregnancyWeightNew]    |    moving from VRCL to BFDR    |
|Mother Received WIC Food|     motherPrenatal     |    -    | [ObservationMotherReceivedWICFood] |       -       |    -     |
|Cigarette Smoking Before During Pregnancy|     motherPrenatal     |    -    | [ObservationCigaretteSmokingBeforeDuringPregnancy] |       -       |    -     |
|Prepregnancy Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Gestational Diabetes |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalDiabetesNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Prepregnancy Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionPrepregnancyHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Gestational Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionGestationalHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Eclampsia Hypertension |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ConditionEclampsiaHypertensionNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Previous Preterm Birth |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousPretermBirthNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Infertility Treatment |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureInfertilityTreatmentNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Artificial Insemination |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureArtificialInseminationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Assisted Fertilization |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ProcedureAssistedFertilizationNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|Previous Cesarean |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationPreviousCesareanNew]   |    Risk factors broken up into individual profiles; if the 'none specified' (or any other risk factor without 'none specified' present) resource is present, then all the omitted risk factors are interpreted as ‘N’; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented in risk factors profiles   |
|None Of Specified Pregnancy Risk Factors |     medicalHealthInformation    |    -    | [ObservationPregnancyRiskFactorVitalRecords] |   [ObservationNoneOfSpecifiedPregnancyRiskFactorsNew]   |    Risk factors broken up into individual profiles; if this profile is present, then all the missing individual risk factors are interpreted as ‘N’; if a risk factor is present along with 'none specified', 'none specified' is marked 'N'; although DVS edit spec requires a response (present/not), 'unknown' can be submitted in the electronic record - 'unknown' code is not represented for risk factors    |
|Number Previous Cesareans |     medicalHealthInformation     |    adding edit flag extension    | [ObservationNumberPreviousCesareansVitalRecords] |  [ObservationNumberPreviousCesareansNew]   |    moving from VRCL to BFDR; '99' corresponds to 'unknown'    |
|Fetal Presentations |     medicalHealthInformation   |    -    | [ObservationFetalPresentation] |       -       |    Fetal Presentations VS includes 'On examination - fetal presentation unsure Unknown fetal presentation' and 'other' codes     |
|Final Route Method Delivery|     medicalHealthInformation   |    -    | [ProcedureFinalRouteMethodDelivery] |       -       |    Delivery Routes VS includes 'unknown' code (single entry); profile contains Labor Trial reference (MS, but only valid when delivery.code is cesarean)     |
|Blood Transfusion |     medicalHealthInformation/Maternal Morbidity    |    -    | [ProcedureBloodTransfusion] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles     |
|Perineal Laceration |     medicalHealthInformation/Maternal Morbidity    |    -    | [ConditionPerinealLaceration] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles     |
|Ruptured Uterus  |     medicalHealthInformation/Maternal Morbidity    |    -    | [ConditionRupturedUterus] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles     |
|Unplanned Hysterectomy |     medicalHealthInformation/Maternal Morbidity    |    -    | [ProcedureUnplannedHysterectomy] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles     |
|ICU Admission |     medicalHealthInformation/Maternal Morbidity    |    -    | [ObservationICUAdmission] |       -       |    if this resource is not present in the document and 'none specified' (or any other morbidity) is, this resource gets marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current morbidity profiles      |
|None of Specified Maternal Morbidities |     medicalHealthInformation/Maternal Morbidity    |    -    | [ObservationNoneOfSpecifiedMaternalMorbidities] |       -       |    if this resource is present, missing individual morbidities are interpreted as ‘N’; if any morbidity is present in addition to 'none specified', 'none specified' is marked 'N'; DVS edit spec includes 'unknown at this time' code - this is not supported in the current profiles       |
|Birth Weight |     newbornInformation   |    adding edit flag extension    | [ObservationBirthWeightVitalRecords] |    [ObservationBirthWeightNew]    |    moving from VRCL to BFDR    |
|Gestational Age at Delivery |     newbornInformation    |    adding edit flag extension    | [ObservationGestationalAgeAtDeliveryVitalRecords] |  [ObservationGestationalAgeAtDeliveryNew]   |    moving from VRCL to BFDR    |
|Cause of Fetal Death |     fetus     |    -    | [ConditionFetalDeathCauseOrCondition] |       -       |    -     |
|Other Cause of Death |     fetus    |    -    | [ConditionFetalDeathOtherCauseOrCondition] |       -       |    -     |
|Estimated Time Fetal Death |     fetus     |    -    | [ObservationFetalDeathTimePoint] |    -    |    -     |
|Autopsy Performed |     fetus     |    -    | [AutopsyPerformedIndicator] |    -    |    -     |
|Histological Exam Performed |     fetus     |    -    | [ObservationHistologicalPlacentalExamPerformed] |       -       |    -     |
|Autopsy or Histological Exam Used|     fetus     |    -    | [ObservationAutopsyHistologicalExamResultsUsed] |       -       |    -     |
|Number Live Births This Delivery |     fetus    |    -    | [ObservationNumberLiveBirthsThisDeliveryVitalRecords] |  [ObservationNumberLiveBirthsThisDeliveryNew]  |    moving from VRCL to BFDR    |
|Number Fetal Deaths This Delivery |     fetus    |    -    | [ObservationNumberFetalDeathsThisDeliveryVitalRecords] |  [ObservationNumberFetalDeathsThisDeliveryNew]   |    moving from VRCL to BFDR    |
|Father Related Person |     fatherInformation  |   adding edit flag extension to related person profile  | [RelatedPersonFatherNaturalVitalRecords] | - |  - |
|Fathers Education |     fatherInformation  |   added Decedent education level code, removed MS flags, adding edit flag extension   | [ObservationParentEducationLevelVitalRecords] | [ObservationEducationLevelVitalRecordsNew] |  - |
| Edit Flag Weight of Fetus  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagBirthweight] |       -       |    -     |
| Edit Flag Estimate of Gestation  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagEstimateOfGestation] |       -       |    -     |
| Edit Flag Mother's Date of Birth  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagMothersDateOfBirth] |       -       |    -     |
| Edit Flag Father's Education  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagMothersEducation] |       -       |    -     |
| Edit Flag Mother's Height  |     editFlags  |    deleted and replaced by extensions in related profiles   | [ObservationEditFlagMothersHeight] |       -       |    -     |
| Edit Flag Mother's Prepregnancy Weight  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagMothersPrepregnancyWeight] |       -       |    -     |
| Edit Flag Number of Previous Cesareans  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagNumberPreviousCesareans] |       -       |    -     |
| Edit Flag Plurality  |     editFlags  |    deleted and replaced by extensions in related profiles    | [ObservationEditFlagPlurality] |       -       |    -     |
{: .grid }

# Demographic Coded Content Bundle for BFDR

| Name of Profile | Group | change  |  Current Profile   | New Profile  | Comment         |
| ------------- | ----- | ------- | ------------------ | ------------ | ----------------- | 
| Coded Race and Ethnicity |     CodedContent   |    -    |    -    |      [CodedRaceAndEthnicityNew]       |    -     |
| Input Race and Ethnicity |     InputContent    |    -    |    -    |       [InputRaceAndEthnicityNew]       |    -     |
{: .grid }

<!-- # Coded Race and Ethnicity - same as VRDR, ignore for now -->

<!-- # Coded Cause of Fetal Death - needs review, ignore for now -->


{% include markdown-link-references.md %}

---

// File: input/pagecontent/content-transitions.md

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
        border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
        border-bottom: 2px solid #98c1d9;
    }
    table.style1 td:first-of-type {
        text-align: left;
    }
    table.style1 td:nth-of-type(2) {
        text-align: center;
    }
    table.style1 td:nth-of-type(3) {
        text-align: left;
    }
</style>
{% include documentationNote.md %}
<br/><br/>
<br/><br/>
<br/><br/>

### STU2 Bundles and Compositions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-Bundle-document-birth-report.html'>BundleDocumentBirthReport</a></td><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Bundle-document-bfdr.html'>BFDR</a></td><td> Separated Birth and Fetal Death into separate bundles </td></tr>
<tr><td> <a href='StructureDefinition-Bundle-document-coded-cause-of-fetal-death.html'>BundleDocumentDemographicCodedCauseOfFetalDeath</a></td><td> New </td><td> New Addition </td></tr>
<tr><td> <a href='StructureDefinition-Bundle-document-demographic-coded-content.html'>BundleDocumentDemographicCodedContent</a></td><td> New </td><td> New Addition </td></tr>
<tr><td> <a href='StructureDefinition-Bundle-document-fetal-death-report.html'>BundleDocumentFetalDeathReport</a></td><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Bundle-document-bfdr.html'>BFDR</a></td><td> Separated Birth and Fetal Death into separate bundles </td></tr>
<tr><td> <a href='StructureDefinition-Composition-coded-cause-of-fetal-death.html'>CompositionCodedCauseOfFetalDeath</a></td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Composition-coded-cause-of-fetal-death.html'>BFDR</a></td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-Composition-coded-race-and-ethnicity.html'>CompositionCodedRaceAndEthnicity</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Composition-coded-race-and-ethnicity.html'>BFDR</a></td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-Composition-jurisdiction-fetal-death-report.html'>CompositionJurisdictionFetalDeathReport</a></td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Composition-jurisdiction-fetal-death-report.html'>BFDR</a></td><td> emergingIssues section added </td></tr>
<tr><td> <a href='StructureDefinition-Composition-jurisdiction-live-birth-report.html'>CompositionJurisdictionLiveBirthReport</a></td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Composition-jurisdiction-live-birth-report.html'>BFDR</a></td><td> emergingIssues section added </td></tr>
<tr><td> <a href='StructureDefinition-Composition-provider-fetal-death-report.html'>CompositionProviderFetalDeathReport</a></td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Composition-provider-fetal-death-report.html'>BFDR</a></td><td> emergingIssues section added </td></tr>
<tr><td> <a href='StructureDefinition-Composition-provider-live-birth-report.html'>CompositionProviderLiveBirthReport</a></td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Composition-provider-live-birth-report.html'>BFDR</a></td><td> emergingIssues section added </td></tr>
</tbody>
</table>



### STU2 Profiles

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-Condition-chorioamnionitis.html'>ConditionChorioamnionitis</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-chorioamnionitis.html'>BFDR</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Condition-eclampsia-hypertension.html'>ConditionEclampsiaHypertension</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Condition-eclampsia-hypertension-vr.html'>VRCL</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-fetal-death-cause-or-condition.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Condition-gestational-diabetes.html'>ConditionGestationalDiabetes</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Condition-gestational-diabetes-vr.html'>VRCL</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a>  </td></tr>
<tr><td> <a href='StructureDefinition-Condition-gestational-hypertension.html'>ConditionGestationalHypertension</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Condition-gestational-hypertension-vr.html'>VRCL</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-infection-present-during-pregnancy.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Condition-perineal-laceration.html'>ConditionPerinealLaceration</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-perineal-laceration.html'>BFDR</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Condition-prepregnancy-diabetes.html'>ConditionPrepregnancyDiabetes</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Condition-prepregnancy-diabetes-vr.html'>VRCL</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Condition-prepregnancy-hypertension.html'>ConditionPrepregnancyHypertension</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Condition-prepregnancy-hypertension-vr.html'>VRCL</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Condition-ruptured-uterus.html'>ConditionRupturedUterus</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-ruptured-uterus.html'>BFDR</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Condition-seizure.html'>ConditionSeizure</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-seizure.html'>BFDR</a></td><td> Added requiredCategory slice, see <a href='categories.html'>categories</a> </td></tr>
<tr><td> <a href='StructureDefinition-Coverage-principal-payer-delivery.html'>CoveragePrincipalPayerDelivery</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Coverage-principal-payer-for-delivery.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Encounter-maternity.html'>EncounterMaternity</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Encounter-maternity.html'>BFDR</a></td><td> Added a <a href='https://build.fhir.org/ig/HL7/vr-common-library//StructureDefinition-Extension-role-vr.html'>role extension</a> to differentiate from Encounter Birth </td></tr>
<tr><td> <a href='StructureDefinition-Encounter-birth.html'>EncounterBirth</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Encounter-birth.html'>BFDR</a></td><td> Added a <a href='https://build.fhir.org/ig/HL7/vr-common-library//StructureDefinition-Extension-role-vr.html'>role extension</a> to differentiate from Encounter Maternity </td></tr>
<tr><td> <a href='StructureDefinition-Observation-antibiotics-administered-during-labor.html'>ObservationAntibioticsAdministeredDuringLabor</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-antibiotics-during-labor.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-apgar-score.html'>ObservationApgarScore</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-apgar-score-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-autopsy-histological-exam-results-used.html'>ObservationAutopsyHistologicalExamResultsUsed</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-autopsy-histological-exam-results-used.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-autopsy-performed-indicator.html'>ObservationAutopsyPerformedIndicator</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-autopsy-performed-indicator-vr.html'>VRCL</a> </td><td> Value field now a slice definition ("actual result") and "autopsy was performed?" is reported under valueCodeableConcept field </td></tr>
<tr><td> <a href='StructureDefinition-Observation-birth-plurality-of-pregnancy.html'>ObservationBirthPluralityOfPregnancy</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Observation-plurality-vr.html'>VRCL</a></td><td> Changed name to better reflect LOINC code description.    It is not used by the birth and fetal death use cases, but is provided for general utility. </td></tr>
<tr><td> <a href='StructureDefinition-Observation-birth-weight.html'>ObservationBirthWeight</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-birth-weight-vr.html'>VRCL</a></td><td> Now includes birthWeight bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-Observation-cigarette-smoking-before-during-pregnancy.html'>ObservationCigaretteSmokingBeforeDuringPregnancy</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition/Observation-cigarette-smoking-before-during-pregnancy'>BFDR</a></td><td> Focus generalized to Patient </td></tr>
<tr><td> <a href='StructureDefinition-Observation-coded-initiating-fetal-death-cause-or-condition.html'>ObservationCodedInitiatingFetalDeathCauseOrCondition</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-coded-initiating-fetal-death-cause-or-condition.html'>BFDR</a></td><td> Changed from Condition to Observation </td></tr>
<tr><td> <a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Condition-coded-other-fetal-death-cause-or-condition.html'>BFDR</a></td><td> Changed from Condition to Observation. Added component:position to represent order of fetal death cause or condition codes </td></tr>
<tr><td> <a href='StructureDefinition-Observation-date-of-first-prenatal-care-visit.html'>ObservationDateOfFirstPrenatalCareVisit</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-date-of-first-prenatal-care-visit.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-date-of-last-live-birth.html'>ObservationDateOfLastLiveBirth</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-date-of-last-live-birth.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-date-of-last-other-pregnancy-outcome.html'>ObservationDateOfLastOtherPregnancyOutcome</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-date-of-last-other-pregnancy-outcome.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-fetal-death-time-point.html'>ObservationFetalDeathTimePoint</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-estimated-fetal-death-time-point.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-fetal-presentation.html'>ObservationFetalPresentation</a> </td><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-fetal-presentation.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-gestational-age-at-delivery.html'>ObservationGestationalAgeAtDelivery</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-gestational-age-at-delivery-vr.html'>VRCL</a></td><td> Now includes estimateOfGestation bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-Observation-histological-placental-exam-performed.html'>ObservationHistologicalPlacentalExamPerformed</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-histological-placental-exam-performed.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-icu-admission.html'>ObservationICUAdmission</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-icu-admission.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-infant-breastfed-at-discharge.html'>ObservationInfantBreastfedAtDischarge</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-infant-breastfed-at-discharge.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-infant-living.html'>ObservationInfantLiving</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-infant-living-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-labor-trial-attempted.html'>ObservationLaborTrialAttempted</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-labor-trial-attempted.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-last-menstrual-period.html'>ObservationLastMenstrualPeriod</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-last-menstrual-period-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-fetal-remains-disposition-method.html'>ObservationFetalRemainsDispositionMethod</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-method-of-disposition.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-mother-delivery-weight.html'>ObservationMotherDeliveryWeight</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-mother-delivery-weight-vr.html'>VRCL</a></td><td> Now includes pregnancyReport bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-Observation-mother-height.html'>ObservationMotherHeight</a> </td><td> <a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-mother-height-vr.html'>VRCL</a></td><td> Now includes pregnancyReport bypassEditFlag. Base profile changed to use <a href='{{site.data.fhir.ver.hl7fhiruscore}}/StructureDefinition-us-core-body-height.html'>USCoreBodyHeight</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-mother-married-during-pregnancy.html'>ObservationMotherMarriedDuringPregnancy</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-mother-married-during-pregnancy.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-mother-prepregnancy-weight.html'>ObservationMotherPrepregnancyWeight</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-mother-prepregnancy-weight-vr.html'>VRCL</a></td><td> Now includes pregnancyReport bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-Observation-mother-received-wic-food.html'>ObservationMotherReceivedWICFood</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-mother-received-wic-food.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-nicu-admission.html'>ObservationNICUAdmission</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-nicu-admission.html'>BFDR</a></td><td> snomed code change from 405269005 Neonatal intensive care unit to 830077005 Admission to neonatal intensive care unit </td></tr>
<tr><td> <a href='StructureDefinition-Observation-none-of-specified-abnormal-conditions-of-newborn.html'>ObservationNoneOfSpecifiedAbnormalConditionsOfNewborn</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-none-of-specified-abnormal-conditions-of-newborn.html'>BFDR</a></td><td> See <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-none-of-specified-characteristics-labor-delivery.html'>ObservationNoneOfSpecifiedCharacteristicsOfLaborAndDelivery</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-none-of-specified-characteristics-labor-delivery.html'>BFDR</a></td><td> See <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-none-congenital-anomolies-of-the-newborn.html'>ObservationNoneOfSpecifiedCongenitalAnomoliesOfTheNewborn</a> </td><td> New </td><td> New Addition, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-no-infections-present-during-pregnancy.html'>ObservationNoneOfSpecifiedInfectionsPresentDuringPregnancy</a> </td><td> New </td><td> New Addition, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-none-of-specified-maternal-morbidities.html'>ObservationNoneOfSpecifiedMaternalMorbidities</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-none-of-specified-maternal-morbidities.html'>BFDR</a></td><td> See <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-none-of-specified-obstetric-procedures.html'>ObservationNoneOfSpecifiedObstetricProcedures</a> </td><td> New </td><td> New Addition, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-none-of-specified-pregnancy-risk-factors.html'>ObservationNoneOfSpecifiedPregnancyRiskFactors</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-none-of-specified-pregnancy-risk-factors-vr.html'>VRCL</a></td><td> See <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Observation-number-births-now-dead.html'>ObservationNumberBirthsNowDead</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-number-births-now-dead-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-number-births-now-living.html'>ObservationNumberBirthsNowLiving</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-number-births-now-living-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-number-fetal-deaths-this-delivery.html'>ObservationNumberFetalDeathsThisDelivery</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-number-fetal-deaths-this-delivery-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-number-live-births-this-delivery.html'>ObservationNumberLiveBirthsThisDelivery</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-number-live-births-this-delivery-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-number-other-pregnancy-outcomes.html'>ObservationNumberOtherPregnancyOutcomes</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-number-other-pregnancy-outcomes-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-number-prenatal-visits.html'>ObservationNumberPrenatalVisits</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-number-prenatal-visits-vr.html'>VRCL</a></td><td> Now includes pregnancyReport bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-Observation-number-previous-cesareans.html'>ObservationNumberPreviousCesareans</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-number-previous-cesareans-vr.html'>VRCL</a></td><td> Now includes numberPreviousCeseareans bypassEditFlag </td></tr>
<tr><td> <a href='StructureDefinition-Observation-paternity-acknowledgement-signed.html'>ObservationPaternityAcknowledgementSigned</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-paternity-acknowledgement-signed.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-planned-to-deliver-at-home.html'>ObservationPlannedToDeliverAtHome</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-planned-to-deliver-at-home.html'>BFDR</a></td><td> Encounter profiles now handle home delivery plan. It is no longer used by the birth and fetal death use cases, but is provided for general utility.</td></tr>
<tr><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-present-job.html'>New</a></td><td> New Addition </td></tr>
<tr><td> <a href='StructureDefinition-Observation-previous-cesarean.html'>ObservationPreviousCesarean</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-previous-cesarean-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-previous-preterm-birth.html'>ObservationPreviousPretermBirth</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Observation-previous-preterm-birth-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-ssn-requested-for-child.html'>ObservationSSNRequestedForChild</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-ssn-requested-for-child.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-steroids-fetal-lung-maturation.html'>ObservationSteroidsFetalLungMaturation</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-steroids-fetal-lung-maturation.html'>BFDR</a></td><td> - </td></tr>
<tr><td> <a href='StructureDefinition-Observation-unknown-final-route-and-method-of-delivery.html'>ObservationUnknownFinalRouteMethodDelivery</a> </td><td> New </td><td> New Addition, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Patient-decedent-fetus-vr.html'>VRCL</a></td><td> Now includes a <a href="https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-BypassEditFlag.html"> bypassEditFlag </a>  extension on multipleBirth</td></tr>
<tr><td> <a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a> </td><td> New </td><td> Includes a <a href='StructureDefinition-practitioner-role-birth-attendant.html'>role extension</a> to differentiate from BirthCertifier practitioner </td></tr>
<tr><td> <a href='StructureDefinition-Practitioner-birth-certifier.html'>PractitionerBirthCertifier</a> </td><td> New </td><td> Includes a <a href='StructureDefinition-practitioner-role-birth-certifier.html'>role extension</a> to differentiate from BirthAttendant practitioner </td></tr>
<tr><td> <a href='StructureDefinition-Procedure-antibiotic-suspected-neonatal-sepsis.html'>ProcedureAntibioticSuspectedNeonatalSepsis</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-antibiotic-suspected-neonatal-sepsis.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-fertility-enhancing-drug-therapy-artificial-insem.html'>ProcedureFertilityEnhancingDrugTherapyArtificialInsemination</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Procedure-artificial-insemination-vr.html'>VRCL</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a>.  The profile was renamed to reflect its intent and that it includes artificial insemination.</td></tr>
<tr><td> <a href='StructureDefinition-Procedure-assisted-reproductive-technology.html'>ProcedureAssistedReproductiveTechnology</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1/StructureDefinition-Procedure-assisted-fertilization-vr.html'>VRCL</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a>.  The profile was renamed to reflect its intent.</td></tr>
<tr><td> <a href='StructureDefinition-Procedure-assisted-ventilation-following-delivery.html'>ProcedureAssistedVentilationFollowingDelivery</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-assisted-ventilation-following-delivery.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-assisted-ventilation-more-than-six-hours.html'>ProcedureAssistedVentilationMoreThanSixHours</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-assisted-ventilation-more-than-six-hours.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-augmentation-of-labor.html'>ProcedureAugmentationOfLabor</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-augmentation-of-labor.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-blood-transfusion.html'>ProcedureBloodTransfusion</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-blood-transfusion.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-epidural-or-spinal-anesthesia.html'>ProcedureEpiduralOrSpinalAnesthesia</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-epidural-or-spinal-anesthesia.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-final-route-method-delivery.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-induction-of-labor.html'>ProcedureInductionOfLabor</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-induction-of-labor.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-infertility-treatment.html'>ProcedureInfertilityTreatment</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//StructureDefinition-Procedure-infertility-treatment-vr.html'>VRCL</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-obstetric.html'>ProcedureObstetric</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-obstetric.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a>. Outcome constrained to new valueset that contains subset of <a href='http://hl7.org/fhir/ValueSet/procedure-outcome'>ProcedureOutcomeCodes(SNOMEDCT)</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-surfactant-replacement-therapy.html'>ProcedureSurfactantReplacementTherapy</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-surfactant-replacement-therapy.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
<tr><td> <a href='StructureDefinition-Procedure-unplanned-hysterectomy.html'>ProcedureUnplannedHysterectomy</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Procedure-unplanned-hysterectomy.html'>BFDR</a></td><td> Added LOINC category value, see <a href='categories.html'>categories</a></td></tr>
</tbody>
</table>

### STU2 Extensions
<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-Extension-jurisdictional-facility-identifier.html'>JurisdictionalFacilityIdentifier</a></td><td> New </td><td> New Addition </td></tr>
<tr><td> <a href='StructureDefinition-Extension-role.html'>ExtensionRole</a> </td><td> New </td><td> New Addition </td></tr>
</tbody>
</table>

### STU2 Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='ValueSet-ValueSet-apgar-timing.html'>ApgarTimingVS</a> </td><td><a href='https://hl7.org/fhir/us/vr-common-library/STU1.1//ValueSet-ValueSet-apgar-timing-vr.html'>VRCL</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-birth-attendant-titles.html'>BirthAttendantTitlesVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=7B108BDB-5F50-482F-9E9D-643EC75364A2'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-birth-and-fetal-death-financial-class.html'>BirthAndFetalDeathFinancialClassVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=D20CD804-8487-E311-AE2A-0017A477041A'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-birth-delivery-occurred.html'>BirthDeliveryOccurredVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=BC64CB23-8210-4CE0-B2AE-F45169BBDC51'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-birth-weight-edit-flags.html'>BirthWeightEditFlagsVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=FA7A83A3-FCFD-E611-A856-0017A477041A'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-cigarette-smoking-before-during-pregnancy.html'>CigaretteSmokingBeforeAndDuringPregnancyVS</a> </td><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/ValueSet-cigarette-smoking-before-during-pregnancy.html'>BFDR</a></td><td> -  </td></tr> 
<tr><td> <a href='ValueSet-ValueSet-delivery-routes.html'>DeliveryRoutesVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=0C9E4D45-3FFD-4E97-AEF3-18CE5B878F46'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-estimate-of-gestation-edit-flags.html'>EstimateOfGestationEditFlagsVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7567'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-fetal-death-cause-or-condition.html'>FetalDeathCauseOrConditionVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=DC1C6A94-C9FF-42CD-B546-E789003ED793'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-fetal-death-time-points.html'>FetalDeathTimePointsVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=52F8C812-2C70-4038-8F0F-D6E0532D4EBD'>PHINVADS</a></td><td> -  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-fetal-presentations.html'>FetalPresentationsVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3C696B7B-BB33-4818-8996-1E3461E3F512'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-fertility-enhancing-drug-therapy-artificial-insem.html'>FertilityEnhancingDrugTherapyArtificialInseminationVS</a> </td><td> New </td><td> New Addition, including two SNOMEDCT codes for artificial insemination and fertility enhancing drug therapy </td></tr>
<tr><td> <a href='ValueSet-ValueSet-infections-during-pregnancy-live-birth.html'>InfectionsDuringPregnancyLiveBirthVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=AEF5A3D4-960C-4194-8BB6-392C7282D216'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-informant-relationship-to-mother.html'>InformantRelationshipToMotherVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=ADF95682-912A-E711-BE3F-0017A477041A'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-fetal-remains-disposition-method.html'>FetalRemainsDispositionMethodVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7585'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-newborn-congenital-anomalies.html'>NewbornCongenitalAnomaliesVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=BC64CB23-8210-4CE0-B2AE-F45169BBDC51'>PHINVADS</a></td><td> - </td></tr>
<tr><td> <a href='ValueSet-ValueSet-number-previous-cesareans-edit-flags.html'>NumberPreviousCesareansEditFlagsVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=C5BC6D8B-DDFA-E611-A856-0017A477041A'>PHINVADS</a></td><td> -  </td></tr>
<tr><td> <a href='ValueSet-ValueSet-obstetric-procedure-outcome.html'>ObstetricProcedureOutcomeVS</a> </td><td> New </td><td> New Addition, contains subset of <a href='http://hl7.org/fhir/ValueSet/procedure-outcome'>ProcedureOutcomeCodes(SNOMEDCT)</a>, indicating whether procedure was 'Successful' or 'Unsuccessful' </td></tr>
<tr><td> <a href='ValueSet-ValueSet-performed-not-performed-planned.html'>PerformedNotPerformedPlannedVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=82BF4C7F-D01F-4019-A1E1-9F7CAACB7FC6'>PHINVADS</a></td><td> Renamed from HistologicalPlacentalExaminationVS to better reflect content </td></tr>
<tr><td> <a href='ValueSet-ValueSet-pregnancy-report-edit-flags.html'>PregnancyReportEditFlagsVS</a> </td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?id=BD25B456-85EC-45D7-B578-1024EE2920F4'>PHINVADS</a></td><td> Used in bypassEditFlag extension for <a href='StructureDefinition-Observation-mother-height.html'>ObservationMotherHeight</a>, <a href='StructureDefinition-Observation-mother-delivery-weight.html'>ObservationMotherDeliveryWeight</a>, <a href='StructureDefinition-Observation-mother-prepregnancy-weight.html'>ObservationMotherPrepregnancyWeight</a>, <a href='StructureDefinition-Observation-number-prenatal-visits.html'>ObservationNumberPrenatalVisits</a> </td></tr>
</tbody>
</table>



### STU2 Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='CodeSystem-CodeSystem-edit-flags.html'>EditFlagsCS</a> </td><td> New </td><td>  New Addition  </td></tr>
<tr><td> <a href='CodeSystem-CodeSystem-local-bfdr-codes.html'>LocalBFDRCodesCS</a> </td><td> New </td><td>  New Addition  </td></tr>
</tbody>
</table>



### Removed Profiles
This section has been updated to reflect changes at ballot time, allowing the reader to follow the harmonization process.
For details on the subsequent evolution of these profiles, see their new home IG.

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-birthweight.html'>ObservationEditFlagBirthWeight</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='StructureDefinition-Observation-birth-weight.html'>ObservationBirthWeight</a> </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-estimate-of-gestation.html'>ObservationEditFlagEstimateOfGestation</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='StructureDefinition-Observation-gestational-age-at-delivery.html'>ObservationGestationalAgeAtDelivery</a> </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-fathers-date-of-birth.html'>ObservationEditFlagFathersDateOfBirth</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-RelatedPerson-father-vr.html'>RelatedPersonFatherVitalRecords</a></td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-fathers-education.html'>ObservationEditFlagFathersEducation</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a></td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-mothers-date-of-birth.html'>ObservationEditFlagMothersDateOfBirth</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-mothers-delivery-weight.html'>ObservationEditFlagMothersDeliveryWeight</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='StructureDefinition-Observation-mother-delivery-weight.html'>ObservationMotherDeliveryWeight</a></td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-mothers-education.html'>ObservationEditFlagMothersEducation</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a></td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-mothers-height.html'>ObservationEditFlagMothersHeight</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='StructureDefinition-Observation-mother-height.html'>ObservationMotherHeight</a></td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-mothers-prepregnancy-weight.html'>ObservationEditFlagMothersPrepregnancyWeight</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='StructureDefinition-Observation-mother-prepregnancy-weight.html'>ObservationMotherPrepregnancyWeight</a></td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-number-prenatal-care-visits.html'>ObservationEditFlagNumberPrenatalCareVisits</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='StructureDefinition-Observation-number-prenatal-visits.html'>ObservationNumberPrenatalVisits</a> </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-number-previous-cesareans.html'>ObservationEditFlagNumberPreviousCesareans</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='StructureDefinition-Observation-number-previous-cesareans.html'>ObservationNumberPreviousCesareans</a> </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Observation-edit-flag-plurality.html'>ObservationEditFlagPlurality</a></td><td> Deleted </td><td>  bypassEditFlag extension added to <a href='https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Patient-child-vr.html'>PatientChildVitalRecords</a></td></tr>
</tbody>
</table>



### Removed Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>

<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-date-filed-by-registrar.html'>ExtensionDateFiledByRegistrar</a></td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-date-received-by-registrar.html'>ExtensionDateReceivedByRegistrar</a></td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-encounter-maternity-reference.html'>ExtensionEncounterMaternityReference</a> </td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-fetal-death-local-file-number.html'>ExtensionFetalDeathLocalFileNumber</a> </td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-fetal-death-report-number.html'>ExtensionFetalDeathReportNumber</a> </td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-live-birth-certificate-number.html'>ExtensionLiveBirthCertificateNumber</a> </td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-live-birth-local-file-number.html'>ExtensionLiveBirthLocalFileNumber</a> </td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/StructureDefinition-Extension-replacement-status.html'>ExtensionReplacementStatus</a></td><td> Deleted </td><td> Deprecated </td></tr>
</tbody>
</table>



### Removed Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/ValueSet-ValueSet-replacement-status.html'>ValueSetReplacementStatus</a></td><td> Deleted </td><td> Deprecated </td></tr>
<tr><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/ValueSet-ValueSet-yes-no-not-applicable.html'>ValueSetYesNoNotApplicable</a></td><td><a href='https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-yes-no-not-applicable-vr.html'>VRCL</a></td><td> Moved to VRCL </td></tr>
<tr><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/ValueSet-ValueSet-obstetric-procedure.html'>ObstetricProcedureVS</a></td><td> Deleted </td><td> Deprecated </td></tr>
</tbody>
</table>



### Removed Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td><a href='https://hl7.org/fhir/us/bfdr/STU1.1/CodeSystem-CodeSystem-replacement-status.html'>CodeSystemReplacement</a></td><td>  Deleted  </td><td> Deprecated </td></tr>
</tbody>
</table>


---

// File: input/pagecontent/credits.md

### Project Team
#### Project Facilitators
The Center for Disease Control (CDC), National Center for Health Statistics (NCHS), Division of Vital Records (DVS) facilitated the project in collaboration with the [NVSS Modernization Community of Practice (CoP)](https://www.cdc.gov/nchs/nvss/modernization/cop.htm), and the DVS Statistical Analysis and Surveillance Branch (SASB).
Contributors from CDC/NCHS/DVS included:
* [Paul Sutton](https://www.cdc.gov/nchs/about/organization.htm), Acting Director of DVS
* Kate Brett, DVS Office of the Director
* [Cynthia Bush](https://www.linkedin.com/in/cynthia-cindy-bush-584bb0158/), Health Scientist (Informatics), DVS Office of the Director 
* Alaina Gregory, DVS Office of the Director
* Kelly Brown, NVSS CoP team
* Bontu Fitta (Metas Solutions), NVSS CoP team
* [Prachi Mehta](https://www.linkedin.com/in/prachimehtad/), Sr Health Scientist (Informatics), Office of the Director
* Donna Hoyert,  DVS/SASB
* Joyce Martin, DVS/SASB
* Claudia Valenzuela DVS/SASB

#### STU1 and STU1.1 Specification Developers
* [Sarah Gaunt](https://www.linkedin.com/in/sarahgaunt/), Lantana

#### STU2 Specification Developers
* [Saul A. Kravitz](https://www.linkedin.com/in/skravitz/), MITRE
* [Robert Passas](https://www.linkedin.com/in/robert-passas-b2b795124/), MITRE
* [Patricia Tran](https://www.linkedin.com/in/patricia-tran-56896874/), MITRE

#### Development Team
* [Lantana Consulting Group](https://www.lantanagroup.com/) provides services and software for standards-based health information exchange. 
* [MITRE](https://www.mitre.org/) is a not-for-profit organization working in the public interest across federal, state and local governments, as well as industry and academia.

### Acknowledgements
* The development of the BFDR and VRCL implementation guides by the [development team](credits.html#development-team) was performed under contract to The Centers for Disease Control (CDC), National Center for Health Statistics (NCHS), Division of Vital Records (DVS) under the direction of the [project facilitators](credits.html#project-facilitators).
* STU1 and STU1.1 versions of these guides were developed using [Trifolia-on-FHIR](https://trifolia-fhir-dev.lantanagroup.com/) and professional guidance provided by [Lantana Consulting Group](https://www.lantanagroup.com/).
* The published content of the STU2 versions of these guides was developed using [FHIR Shorthand syntax](http://hl7.org/fhir/uv/shorthand/) and the [SUSHI tookit](https://fshschool.org/docs/sushi/), a free, open source toolchain from the [MITRE](https://www.mitre.org). Generous guidance on FHIR Shorthand and SUSHI was provided by [Chris Moesel](https://www.linkedin.com/in/cmoesel/). The data dictionaries were produced using the [makeIJEMappingFromCSVtoHTML.rb](https://github.com/HL7/fhir-bfdr/blob/master/tools/makeIJEMappingFromCSVtoHTML.rb) script developed by Rob Passas and Patricia Tran. For a description of how to maintain the data dictionary content, please see https://github.com/HL7/fhir-bfdr/blob/master/tools/README.md
* The BFDR FHIR IG is a work product of the [HL7 Public Health Workgroup](http://www.hl7.org/Special/committees/pher/overview.cfm). The HL7 Project Insight reference number for this project is [1643](http://www.hl7.org/Special/committees/pher/projects.cfm?action=edit&ProjectNumber=1643).


### Testing Partners
The VRCL project team would like to express a special thanks to the following testing partners in their contributions:

* Jurisdictional Vital Records Community:
* Vendor community


{% include markdown-link-references.md %}

---

// File: input/pagecontent/downloads.md

### Download

You can download:

* [this entire guide](full-ig.zip)
* the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
* the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on IHE GitHub [https://github.com/HL7/fhir-bfdr](https://github.com/HL7/fhir-bfdr).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/EHR_Data_mapping.md

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
        border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
        border-bottom: 2px solid #98c1d9;
    }
    table.style1 td:first-of-type {
        text-align: left;
    }
    table.style1 td:nth-of-type(2) {
        text-align: left;
    }
    table.style1 td:nth-of-type(3) {
        text-align: left;
    }
</style>
Data elements that are included in a birth or fetal death report are based on data that are part of the mother, child or fetus' electronic health record (EHR).
The following PHINVADs-hosted valuesets were published as part of the [IHE Quality, Research and Public Health Technical Framework Supplement Birth and Fetal Death Reporting-Enhanced (BFDR-E)](https://www.ihe.net/uploadedFiles/Documents/QRPH/IHE_QRPH_Suppl_BFDR-E.pdf) to support query of data elements from an EHR.  Implementers can use these valuesets as a supplement to the [Guide to Completing the Facility Worksheets for the Certificate of Live Birth and Report of Fetal Death](https://www.cdc.gov/nchs/data/dvs/GuidetoCompleteFacilityWks.pdf).

The table shows the name of the data element, the IJE element that corresponds to the data element, the FHIR profile in this IG used to represent the data element, the type of element, and the valueset that can be used as part of a query.   Please note that the referenced value sets have not been updated since the publication of the IHE document in 2021. Therefore, implementers should consider these value sets as an informative guide rather than a definitive resource. 

This content is provided in support of implementers of this IG, but is not formally a part of the FHIR specification for exchange of birth and fetal death records.

Note: In some cases, there is not a direct mapping between data element and IJE element, and the IJE element that is most closely associated with the the data element is denoted with an asterisk.

### Observations

<table  align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<thead>
  <tr>
    <td style='background-color:#98c1d9; text-align: center; width: 20%'><b>Name</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 8%'><b>IJE Name</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Purpose</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Profile</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 10%'><b>Codesystem</b></td>
  </tr>
</thead>
<tbody>

<tr>
  <td style='text-align: center'>﻿10 Min Apgar Score</td>
  <td>APGAR10</td>
  <td>10 Min Apgar Score</td>
  <td><a href='StructureDefinition-Observation-apgar-score.html'>ObservationApgarScore</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.13'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>5 Min Apgar Score</td>
  <td>APGAR5</td>
  <td>5 Min Apgar Score</td>
  <td><a href='StructureDefinition-Observation-apgar-score.html'>ObservationApgarScore</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.12'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Augmentation of Labor Finding</td>
  <td>AUGL*</td>
  <td>Labor was augmented</td>
  <td><a href='StructureDefinition-Procedure-augmentation-of-labor.html'>ProcedureAugmentationOfLabor</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7532'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birth Plurality of Delivery</td>
  <td>PLUR</td>
  <td>Plurality, which is the number of fetuses delivered live or dead at any time in the pregnancy regardless of gestational age or if the fetuses were delivered at different dates in the pregnancy. (“Reabsorbed” fetuses, those which are not “delivered” (expulsed or extracted from the mother) should not be counted.)</td>
  <td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-child-vr.html'>PatientChildVitalRecords</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.132'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birth Weight</td>
  <td>BWG</td>
  <td>Birth Weight</td>
  <td><a href='StructureDefinition-Observation-birth-weight.html'>ObservationBirthWeight</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.20'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birth Place Home Intended</td>
  <td></td>
  <td>Birth occurred in the at home as intended</td>
  <td><a href='StructureDefinition-Observation-planned-to-deliver-at-home.html'>ObservationPlannedToDeliverAtHome</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.193'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birth Place Home Unintended</td>
  <td></td>
  <td>Birth occurred in the at home as unintended</td>
  <td><a href='StructureDefinition-Observation-planned-to-deliver-at-home.html'>ObservationPlannedToDeliverAtHome</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.194'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birthplace Setting</td>
  <td></td>
  <td>Birthplace of the newborn (setting)</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.184'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Body Weight</td>
  <td></td>
  <td>Body weight of the patient</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7421'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Breastfed Infant</td>
  <td>BFED</td>
  <td>Breastfed Infant at discharge</td>
  <td><a href='StructureDefinition-Observation-infant-breastfed-at-discharge.html'>ObservationInfantBreastfedAtDischarge</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.41'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Conception Date</td>
  <td></td>
  <td>Conception Date</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.180'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Date of Last Live Birth</td>
  <td>YLLB, MLLB</td>
  <td>Date of Last Live Birth</td>
  <td><a href='StructureDefinition-Observation-date-of-last-live-birth.html'>ObservationDateOfLastLiveBirth</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.67'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Date of Last Menses</td>
  <td>DLMP_YR, DLMP_MO, DLMP_DY</td>
  <td>Date of Last Menses</td>
  <td><a href='StructureDefinition-Observation-last-menstrual-period.html'>ObservationLastMenstrualPeriod</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.69'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Date of Last Other Pregnancy Outcome</td>
  <td>YOPO, MOPO</td>
  <td>Date of Last Other Pregnancy Outcome such as spontaneous or induced losses or ectopic pregnancy</td>
  <td><a href='StructureDefinition-Observation-date-of-last-other-pregnancy-outcome.html'>ObservationDateOfLastOtherPregnancyOutcome</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.70'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Estimated Time Of Fetal Death</td>
  <td>ETIME</td>
  <td>Question as to the estimated time of fetal death</td>
  <td><a href='StructureDefinition-Observation-fetal-death-time-point.html'>ObservationFetalDeathTimePoint</a></td>
  <td><a href='http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7426'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Fetal Presentation at Birth- Breech</td>
  <td>PRES*</td>
  <td>Fetal Presentation at Birth- Breech method of delivery</td>
  <td><a href='StructureDefinition-Observation-fetal-presentation.html'>ObservationFetalPresentation</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.108'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Fetal Presentation at Birth- Cephalic</td>
  <td>PRES*</td>
  <td>Fetal Presentation at Birth- Cephalic method of delivery</td>
  <td><a href='StructureDefinition-Observation-fetal-presentation.html'>ObservationFetalPresentation</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.109'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Fetal Presentation at Birth- Other</td>
  <td>PRES*</td>
  <td>Fetal Presentation at Birth- Other</td>
  <td><a href='StructureDefinition-Observation-fetal-presentation.html'>ObservationFetalPresentation</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.110'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Fever Greater Than 100.4</td>
  <td></td>
  <td>Fever Greater Than 100.4 During Labor</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.25'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>First Prenatal Care Visit</td>
  <td>DOFP_YR, DOFP_MO, DOFP_DY</td>
  <td>Date of the First Prenatal Care Visit</td>
  <td><a href='StructureDefinition-Observation-date-of-first-prenatal-care-visit.html'>ObservationDateOfFirstPrenatalCareVisit</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.133'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Height</td>
  <td>HFT, HIN</td>
  <td>Mother’s height</td>
  <td><a href='StructureDefinition-Observation-mother-height.html'>ObservationMotherHeight</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7155'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Induction of Labor Finding</td>
  <td>INDL*</td>
  <td>Labor was induced</td>
  <td><a href='StructureDefinition-Procedure-induction-of-labor.html'>ProcedureInductionOfLabor</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7531'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Institution Referred to</td>
  <td></td>
  <td>Institution to which the patient was referred</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.191'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Karyotype Confirmed</td>
  <td></td>
  <td>Karyotype Confirmed as an anomaly of the newborn</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.56'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Karyotype Result</td>
  <td></td>
  <td>Karyotyping to determine that the result is pending</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.59'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Method of Delivery Cesarean Finding</td>
  <td></td>
  <td>Delivery of the entire fetus through the vaginal wall (cesarean)</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7527'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Method of Delivery Vaginal Forceps Finding</td>
  <td>ATTF - NOT IMPLEMENTED</td>
  <td>Delivery of the fetus using vaginal forceps</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7528'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Method of Delivery Vaginal-Spon Finding</td>
  <td></td>
  <td>Delivery of the entire fetus through the vagina by the natural force of labor with or without manual assistance from the delivery attendant.</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7526'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Method of Delivery Vaginal Vacuum Finding</td>
  <td>ATTV - NOT IMPLEMENTED</td>
  <td>Delivery of the fetus using vaginal vacuum</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7529'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Mothers Delivery Weight</td>
  <td>DWGT</td>
  <td>Mother’s Delivery Weight</td>
  <td><a href='StructureDefinition-Observation-mother-delivery-weight.html'>ObservationMotherDeliveryWeight</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.120'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number of Fetal Deaths This Delivery</td>
  <td>FDTH</td>
  <td>Number of Fetal Deaths This Delivery</td>
  <td><a href='StructureDefinition-Observation-number-fetal-deaths-this-delivery.html'>ObservationNumberFetalDeathsThisDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.164'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number of Live Births</td>
  <td>LIVEB</td>
  <td>Number of Live Births for the current pregnancy</td>
  <td><a href='StructureDefinition-Observation-number-live-births-this-delivery.html'>ObservationNumberLiveBirthsThisDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.68'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number of Preterm Births</td>
  <td></td>
  <td>Number of preterm births in prior pregnancies</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.187'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number of Previous Cesareans</td>
  <td>NPCES</td>
  <td>Number of Previous Cesareans as a Risk Factor in Pregnancy</td>
  <td><a href='StructureDefinition-Observation-number-previous-cesareans.html'>ObservationNumberPreviousCesareans</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.148'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number of Previous Live Births Now Dead</td>
  <td>PLBD</td>
  <td>Number of Previous Live Births Now Dead</td>
  <td><a href='StructureDefinition-Observation-number-births-now-dead.html'>ObservationNumberBirthsNowDead</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.122'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number of Previous Live Births Now Living</td>
  <td>PLBL</td>
  <td>Number of Live Births Now Living</td>
  <td><a href='StructureDefinition-Observation-number-births-now-living.html'>ObservationNumberBirthsNowLiving</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.123'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number of Prior Pregnancies</td>
  <td></td>
  <td>Number of Prior Pregnancies</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.71'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Number Prenatal Care Visits</td>
  <td>NPREV</td>
  <td>Number Prenatal Care Visits</td>
  <td><a href='StructureDefinition-Observation-number-prenatal-visits.html'>ObservationNumberPrenatalVisits</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.135'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Obstetric Estimate of Gestation</td>
  <td>OWGEST</td>
  <td>Obstetric Estimate of Gestation of the newborn</td>
  <td><a href='StructureDefinition-Observation-gestational-age-at-delivery.html'>ObservationGestationalAgeAtDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.124'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Pre-Pregnancy Weight</td>
  <td>PWGT</td>
  <td>Mother’s Pre-Pregnancy Weight</td>
  <td><a href='StructureDefinition-Observation-mother-prepregnancy-weight.html'>ObservationMotherPrepregnancyWeight</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.118'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Previous Cesarean</td>
  <td>PCES</td>
  <td>Risk Factors of Pregnancy Previous Cesarean</td>
  <td><a href='StructureDefinition-Observation-previous-cesarean.html'>ObservationPreviousCesarean</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7165'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Previous Other Pregnancy Outcomes</td>
  <td>POPO</td>
  <td>Previous Other Pregnancy Outcomes</td>
  <td><a href='StructureDefinition-Observation-number-other-pregnancy-outcomes.html'>ObservationNumberOtherPregnancyOutcomes</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.121'>LOINC</a></td>
</tr>

<tr>
  <td style='text-align: center'>Scheduled Cesarean Finding</td>
  <td></td>
  <td>Cesarean Section was scheduled</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7530'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Seizure or Serious Neurologic Dysfunction</td>
  <td>SEIZ</td>
  <td>Newborn suffered a Seizure or Serious Neurologic Dysfunction reflecting an abnormal condition of the newborn</td>
  <td><a href='StructureDefinition-Condition-seizure.html'>ConditionSeizure</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.10'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Spontaneous Onset of Labor</td>
  <td></td>
  <td>Spontaneous Onset of Labor</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.35'>SNOMED-CT</a></td>
</tr>
</tbody>
</table>

### Conditions

<table  align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<thead>
  <tr>
    <td style='background-color:#98c1d9; text-align: center; width: 20%'><b>Name</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 8%'><b>IJE Name</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Purpose</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Profile</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 10%'><b>Codesystem</b></td>
  </tr>
</thead>
<tbody>

<tr>
  <td style='text-align: center'>Anencephaly of the Newborn</td>
  <td>ANEN</td>
  <td>Anencephaly of the Newborn as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.53'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Chlamydia</td>
  <td>CHAM</td>
  <td>Chlamydia as Infections present and treated during this pregnancy</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.93'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Chorioamnionitis During Labor</td>
  <td>CHOR</td>
  <td>Chorioamnionitis During Labor</td>
  <td><a href='StructureDefinition-Condition-chorioamnionitis.html'>ConditionChorioamnionitis</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.24'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Cleft Lip with or without Cleft Palate</td>
  <td>CL</td>
  <td>Cleft Lip with/without Cleft Palate as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.58'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Cleft Palate Alone</td>
  <td>CP</td>
  <td>Cleft Palate alone as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.189'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Congenital Diaphragmatic Hernia</td>
  <td>CDH</td>
  <td>Congenital Diaphragmatic Hernia as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.55'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Cyanotic Congenital Heart Disease</td>
  <td>CCHD</td>
  <td>Cyanotic Congenital Heart Disease as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.54'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Cytomegalovirus</td>
  <td></td>
  <td>Infection with Cytomegalovirus</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.167'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Downs Syndrome</td>
  <td>DOWT</td>
  <td>Downs Syndrome as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.61'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Eclampsia</td>
  <td>EHYPE</td>
  <td>Risk Factors of Eclampsia</td>
  <td><a href='StructureDefinition-Condition-eclampsia-hypertension.html'>ConditionEclampsiaHypertension</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.140'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Fourth Degree Perineal Laceration</td>
  <td>PLAC</td>
  <td>Fourth Degree Perineal Laceration as a maternal morbidity</td>
  <td><a href='StructureDefinition-Condition-perineal-laceration.html'>ConditionPerinealLaceration</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.101'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Gastroschisis of the Newborn</td>
  <td>GAST</td>
  <td>Gastroschisis of the Newborn as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.62'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Gestational Diabetes</td>
  <td>GDIAB</td>
  <td>Risk Factors of Gestational Diabetes</td>
  <td><a href='StructureDefinition-Condition-gestational-diabetes.html'>ConditionGestationalDiabetes</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.137'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Gestational Hypertension</td>
  <td>GHYPE</td>
  <td>Risk Factors of Gestational Hypertension</td>
  <td><a href='StructureDefinition-Condition-gestational-hypertension.html'>ConditionGestationalHypertension</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.139'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Gonorrhea</td>
  <td>GON</td>
  <td>Gonorrhea as Infections present and treated during this pregnancy</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.6071'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Group B Streptococcus</td>
  <td>GBS - NOT IMPLEMENTED</td>
  <td>Infection with Group B Streptococcus</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.166'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Hepatitis B</td>
  <td>HEPB</td>
  <td>Hepatitis B as Infections present and treated during this pregnancy</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.96'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Hepatitis C</td>
  <td>HEPC</td>
  <td>Hepatitis C as Infections present and treated during this pregnancy</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.97'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Hypospadias</td>
  <td>HYPO</td>
  <td>Hypospadias as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.63'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Limb Reduction Defect</td>
  <td>LIMB</td>
  <td>Limb Reduction Defect as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=6.1.4.1.19376.1.7.3.1.1.13.8.64'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Listeria</td>
  <td></td>
  <td>Listeria as Infections present and treated during this pregnancy</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.147'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Meningomyelocele/Spina Bifida - Newborn</td>
  <td>MNSB</td>
  <td>Meningomyelocele/Spina Bifida of the Newborn as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.65'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Neonatal Sepsis</td>
  <td></td>
  <td>Newborn had suspected neonatal sepsis reflecting an abnormal condition of the newborn</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.6'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Omphalocele of the Newborn</td>
  <td>OMPH</td>
  <td>Omphalocele of the Newborn as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.66'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Parvovirus</td>
  <td></td>
  <td>Infection with Parvovirus</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.168'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Precipitous Labor</td>
  <td>PRIC - NOT IMPLEMENTED</td>
  <td>Onset of labor with Precipitous Labor</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.130'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Premature Rupture</td>
  <td>PROM  - NOT IMPLEMENTED</td>
  <td>Onset of labor with Premature Rupture</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.129'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Prepregnancy Diabetes</td>
  <td>PDIAB</td>
  <td>Risk Factors of Prepregnancy Diabetes</td>
  <td><a href='StructureDefinition-Condition-prepregnancy-diabetes.html'>ConditionPrepregnancyDiabetes</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.136'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Prepregnancy Hypertension</td>
  <td>PHYPE</td>
  <td>Risk Factors of Prepregnancy Hypertension</td>
  <td><a href='StructureDefinition-Condition-prepregnancy-hypertension.html'>ConditionPrepregnancyHypertension</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.138'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Prolonged Labor</td>
  <td>PROL - NOT IMPLEMENTED</td>
  <td>Onset of labor with Prolonged Labor</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.131'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Ruptured Uterus</td>
  <td>RUT</td>
  <td>Ruptured Uterus as a maternal morbidity</td>
  <td><a href='StructureDefinition-Condition-ruptured-uterus.html'>ConditionRupturedUterus</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.102'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Significant Birth Injury</td>
  <td>BINJ - NOT IMPLEMENTED</td>
  <td>Newborn suffered a Significant Birth Injury (skeletal fracture(s), peripheral nerve injury, and/ or soft tissue/solid organ hemorrhage which requires intervention) reflecting an abnormal condition of the newborn</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.9'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Suspected Chromosomal Disorder</td>
  <td>CDIT</td>
  <td>Suspected Chromosomal Disorder as an anomaly of the newborn</td>
  <td><a href='StructureDefinition-Condition-congenital-anomaly-of-newborn.html'>ConditionCongenitalAnomalyOfNewborn</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.57'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Syphilis</td>
  <td>SYPH</td>
  <td>Syphilis as Infections present and treated during this pregnancy</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.98'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Third Degree Perineal Laceration</td>
  <td>PLAC</td>
  <td>Third Degree Perineal Laceration as a maternal morbidity</td>
  <td><a href='StructureDefinition-Condition-perineal-laceration.html'>ConditionPerinealLaceration</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.100'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Toxoplasmosis</td>
  <td></td>
  <td>Infection with Toxoplasmosis</td>
  <td><a href='StructureDefinition-Condition-infection-present-during-pregnancy.html'>ConditionInfectionPresentDuringPregnancy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.169'>SNOMED-CT</a></td>
</tr>
</tbody>
</table>

### Procedures

<table  align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<thead>
  <tr>
    <td style='background-color:#98c1d9; text-align: center; width: 20%'><b>Name</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 8%'><b>IJE Name</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Purpose</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Profile</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 10%'><b>Codesystem</b></td>
  </tr>
</thead>
<tbody>

<tr>
  <td style='text-align: center'>Antibiotic Administration Procedure</td>
  <td>ANTI*</td>
  <td>Antibiotic Administration Procedure during labor and delivery</td>
  <td><a href='StructureDefinition-Observation-antibiotics-administered-during-labor.html'>ObservationAntibioticsAdministeredDuringLabor</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.178'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Artificial or Intrauterine Insemination</td>
  <td>INFT_DRG</td>
  <td>Artificial or Intrauterine Insemination as a Risk Factor in Pregnancy</td>
  <td>[ProcedureArtificialInsemination]</td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.145'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Assisted Ventilation</td>
  <td>AVEN1*, AVEN6*</td>
  <td>Newborn was provided assisted ventilation reflecting an abnormal condition of the newborn</td>
  <td><a href='StructureDefinition-Procedure-assisted-ventilation-following-delivery.html'>ProcedureAssistedVentilationFollowingDelivery</a>, <a href='StructureDefinition-Procedure-assisted-ventilation-more-than-six-hours.html'>ProcedureAssistedVentilationMoreThanSixHours</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7156'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Assistive Reproductive Technology</td>
  <td>INFT_ART</td>
  <td>Assistive Reproductive Technology as a Risk Factor in Pregnancy</td>
  <td>[ProcedureAssistedFertilization]</td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.146'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Augmentation of Labor - Procedure</td>
  <td>AUGL</td>
  <td>Procedure of Augmentation of Labor</td>
  <td><a href='StructureDefinition-Procedure-augmentation-of-labor.html'>ProcedureAugmentationOfLabor</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.22'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Cervical Cerclage</td>
  <td>CERV - NOT IMPLEMENTED</td>
  <td>Obstetric Procedures as Cervical Cerclage</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.125'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Delivery</td>
  <td>ROUT</td>
  <td>Delivery Procedure</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.14'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Epidural Anesthesia - Procedure</td>
  <td>ESAN</td>
  <td>Epidural Anesthesia Procedure</td>
  <td><a href='StructureDefinition-Procedure-epidural-or-spinal-anesthesia.html'>ProcedureEpiduralOrSpinalAnesthesia</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.27'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>External Cephalic Version</td>
  <td>ECVS</td>
  <td>Obstetric Procedures as External Cephalic Version</td>
  <td><a href='StructureDefinition-Procedure-obstetric.html'>ProcedureObstetric</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.127'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Autopsy Performed</td>
  <td>AUTOP</td>
  <td>Autopsy was performed</td>
  <td><a href='StructureDefinition-Observation-autopsy-performed-indicator.html'>ObservationAutopsyPerformedIndicator</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.23.8.1'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Hysterotomy Hysterectomy</td>
  <td>UHYS</td>
  <td>hysterotomy/hysterectomy as the method of delivery in fetal death</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.150'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>ICU Care</td>
  <td>AINT</td>
  <td>Mother was transferred to ICU following the birth</td>
  <td><a href='StructureDefinition-Observation-icu-admission.html'>ObservationICUAdmission</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.188'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Induction of Labor</td>
  <td>INDL</td>
  <td>Induction of Labor</td>
  <td><a href='StructureDefinition-Procedure-induction-of-labor.html'>ProcedureInductionOfLabor</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.34'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Infertility Treatment</td>
  <td>INFT</td>
  <td>Risk Factors of Pregnancy Infertility Treatment</td>
  <td><a href='StructureDefinition-Procedure-infertility-treatment.html'>ProcedureInfertilityTreatment</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.143'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Karyotype Determination</td>
  <td></td>
  <td>Karyotype determination as an anomaly of the newborn</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.154'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Pregnancy Resulting From Fertility Enhancing Drugs</td>
  <td>INFT_DRG*</td>
  <td>Indicate whether a pregnancy resulted from fertility enhancing drugs</td>
  <td>[ProcedureArtificialInsemination]</td>
  <td><a href='http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7423'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Surfactant Replacement Therapy</td>
  <td>SURF</td>
  <td>Surfactant Replacement Therapy</td>
  <td><a href='StructureDefinition-Procedure-surfactant-replacement-therapy.html'>ProcedureSurfactantReplacementTherapy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7431'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>NICU Care</td>
  <td>NICU</td>
  <td>Baby was transferred to NICU following the birth</td>
  <td><a href='StructureDefinition-Observation-nicu-admission.html'>ObservationNICUAdmission</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.198'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Route and Method of Delivery - Cesarean</td>
  <td>ROUT*</td>
  <td>Route and Method of Delivery as Cesarean Delivery</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.114'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Route and Method of Delivery - Forceps</td>
  <td>ROUT*</td>
  <td>Route and Method of Delivery as Forceps Delivery</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.112'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Route and Method of Delivery - Scheduled C</td>
  <td>ROUT*</td>
  <td>Route and Method of Delivery as Scheduled Cesarean</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.116'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Route and Method of Delivery - Spontaneous</td>
  <td>ROUT*</td>
  <td>Route and Method of Delivery as Spontaneous Delivery</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.111'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Route Method of Delivery - Trial of Labor</td>
  <td>TLAB</td>
  <td>Route and Method of Delivery if Cesarean was as Trial of Labor Attempted</td>
  <td><a href='StructureDefinition-Observation-labor-trial-attempted.html'>ObservationLaborTrialAttempted</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.115'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Route and Method of Delivery - Vacuum</td>
  <td>ROUT*</td>
  <td>Route and Method of Delivery as Vacuum Delivery</td>
  <td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.113'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Spinal Anesthesia - Procedure</td>
  <td>ESAN*</td>
  <td>Spinal Anesthesia Procedure</td>
  <td><a href='StructureDefinition-Procedure-epidural-or-spinal-anesthesia.html'>ProcedureEpiduralOrSpinalAnesthesia</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.29'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Steroids For Fetal Lung Maturation</td>
  <td>STER</td>
  <td>Indicate whether steroids (glucocorticoids) for fetal lung maturation was received by the mother before delivery</td>
  <td><a href='StructureDefinition-Observation-steroids-fetal-lung-maturation.html'>ObservationSteroidsFetalLungMaturation</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7423'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Tocolysis</td>
  <td>TOC - NOT IMPLEMENTED</td>
  <td>Obstetric Procedures as Tocolysis</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.128'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Transfer to</td>
  <td>HOSPTO</td>
  <td>If the infant was transferred within 24 hours of delivery to another facility</td>
  <td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.190'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Transferred for Maternal Medical or Fetal Indications for Delivery</td>
  <td>TRAN</td>
  <td>Transferred for Maternal Medical or Fetal Indications for Delivery</td>
  <td><a href='StructureDefinition-Encounter-maternity.html'>EncounterMaternity</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.176'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Transfusion Whole Blood or Packed Red Bld</td>
  <td>MTR</td>
  <td>Transfusion Whole Blood or Packed Red Blood as a maternal morbidity</td>
  <td><a href='StructureDefinition-Procedure-blood-transfusion.html'>ProcedureBloodTransfusion</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.99'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Unplanned Hysterectomy</td>
  <td>UHYS</td>
  <td>Unplanned hysterectomy as a maternal morbidity</td>
  <td><a href='StructureDefinition-Procedure-unplanned-hysterectomy.html'>ProcedureUnplannedHysterectomy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.103'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Unplanned Operation</td>
  <td>UOPR - NOT IMPLEMENTED</td>
  <td>Unplanned operation as a maternal morbidity</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.105'>SNOMED-CT</a></td>
</tr>
</tbody>
</table>

### Medications

<table  align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<thead>
  <tr>
    <td style='background-color:#98c1d9; text-align: center; width: 20%'><b>Name</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 8%'><b>IJE Name</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Purpose</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Profile</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 10%'><b>Codesystem</b></td>
  </tr>
</thead>
<tbody>

<tr>
  <td style='text-align: center'>Antibiotics</td>
  <td>ANTI</td>
  <td>Antibiotics were received by the mother during delivery and by the newborn for suspected neonatal sepsis</td>
  <td><a href='StructureDefinition-Procedure-antibiotic-suspected-neonatal-sepsis.html'>ProcedureAntibioticSuspectedNeonatalSepsis</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.3'>RxNorm</a></td>
</tr>

<tr>
  <td style='text-align: center'>Augmentation of Labor - Medication</td>
  <td>AUGL*</td>
  <td>Medication used for the of Augmentation of Labor</td>
  <td><a href='StructureDefinition-Procedure-augmentation-of-labor.html'>ProcedureAugmentationOfLabor</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.23'>RxNorm</a></td>
</tr>

<tr>
  <td style='text-align: center'>Epidural/Spinal Anesthesia - Medication</td>
  <td>ESAN*</td>
  <td>Epidural and Spinal Anesthesia Medication</td>
  <td><a href='StructureDefinition-Procedure-epidural-or-spinal-anesthesia.html'>ProcedureEpiduralOrSpinalAnesthesia</a></td>
  <td><a href='http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7475'>RxNorm</a></td>
</tr>

<tr>
  <td style='text-align: center'>Fertility Enhancing Drugs Medications</td>
  <td>INFT_DRG</td>
  <td>Fertility Enhancing Drugs were administered as a risk factor for pregnancy</td>
  <td>[ProcedureArtificialInsemination]</td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.144'>RxNorm</a></td>
</tr>

<tr>
  <td style='text-align: center'>Newborn Receiving Surfactant Replacement Therapy</td>
  <td>SURF*</td>
  <td>Newborn received Surfactant Replacement Therapy reflecting an abnormal condition of the newborn</td>
  <td><a href='StructureDefinition-Procedure-surfactant-replacement-therapy.html'>ProcedureSurfactantReplacementTherapy</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.11'>RxNorm</a></td>
</tr>
</tbody>
</table>

### Locations

<table  align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<thead>
  <tr>
    <td style='background-color:#98c1d9; text-align: center; width: 20%'><b>Name</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 8%'><b>IJE Name</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Purpose</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Profile</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 10%'><b>Codesystem</b></td>
  </tr>
</thead>
<tbody>

<tr>
  <td style='text-align: center'>Facility Location ICU</td>
  <td>AINT</td>
  <td>Patient (mother) was treated in the ICU for complications associated with labor and delivery reflecting a maternal morbidity.</td>
  <td><a href='StructureDefinition-Observation-icu-admission.html'>ObservationICUAdmission</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.2'>HL7 Service Delivery Location</a></td>
</tr>

<tr>
  <td style='text-align: center'>Facility Location NICU</td>
  <td>NICU</td>
  <td>Newborn was admitted to the NICU reflecting an abnormal condition of the newborn</td>
  <td><a href='StructureDefinition-Observation-nicu-admission.html'>ObservationNICUAdmission</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.1'>HL7 Service Delivery Location</a></td>
</tr>

<tr>
  <td style='text-align: center'>Facility Location OR</td>
  <td></td>
  <td>Patient (mother) was treated in the OR for an unplanned operation for complications associated with labor and delivery reflecting unplanned operation</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.104'>HL7 Service Delivery Location</a></td>
</tr>
</tbody>
</table>

### Miscellaneous

<table  align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<thead>
  <tr>
    <td style='background-color:#98c1d9; text-align: center; width: 20%'><b>Name</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 8%'><b>IJE Name</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Purpose</b></td>
    <td style='background-color:#98c1d9; text-align: center;'><b>Profile</b></td>
    <td style='background-color:#98c1d9; text-align: center; width: 10%'><b>Codesystem</b></td>
  </tr>
</thead>
<tbody>

<tr>
  <td style='text-align: center'>Autopsy Planned</td>
  <td>AUTOP*</td>
  <td>Autopsy was planned</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7140'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birth Place Clinic Office</td>
  <td></td>
  <td>Birth occurred in the at clinic or office</td>
  <td><a href='StructureDefinition-Encounter-birth.html'>EncounterBirth</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.197'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birth Place Freestanding Birthing Center</td>
  <td></td>
  <td>Birth occurred at a freestanding birthing center</td>
  <td><a href='StructureDefinition-Encounter-birth.html'>EncounterBirth</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.196'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Birthplace Hospital</td>
  <td></td>
  <td>Birth occurred in the hospital</td>
  <td><a href='StructureDefinition-Encounter-birth.html'>EncounterBirth</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.192'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Certified Midwife</td>
  <td>ATTEND*</td>
  <td>Title of the Attendant responsible for the delivery Procedure as a Certified Midwife</td>
  <td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.17'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Doctor of Osteopathic Medicine</td>
  <td>ATTEND*</td>
  <td>Title of the Attendant responsible for the delivery Procedure as a Doctor of Osteopathic Medicine</td>
  <td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.16'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Fetal Death Time Point</td>
  <td>ETIME</td>
  <td>A list of time points during the delivery process at which the fetal death is thought to have occurred. Note, SNOMED is being used as the primary source for codes within the value set.</td>
  <td><a href='StructureDefinition-Observation-fetal-death-time-point.html'>ObservationFetalDeathTimePoint</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7112'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Histological Placental Examination</td>
  <td>HISTOP</td>
  <td>Histological Placental Examination for fetal death</td>
  <td><a href='StructureDefinition-Observation-histological-placental-exam-performed.html'>ObservationHistologicalPlacentalExamPerformed</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7138'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>IM Medication Administration Route</td>
  <td></td>
  <td>Intramuscular Medication Administration Route was used to administer a medication</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.5'>HL7 Route of Administration</a></td>
</tr>

<tr>
  <td style='text-align: center'>IV Medication Administration Route</td>
  <td></td>
  <td>IV Medication Administration Route was used to administer a medication</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.4'>HL7 Route of Administration</a></td>
</tr>

<tr>
  <td style='text-align: center'>Midwife</td>
  <td>ATTEND*</td>
  <td>Title of the Attendant responsible for the delivery Procedure as a Midwife excluding registered midwife which is reflected in the ‘certified midwife’ value set</td>
  <td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.18'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Neonatal Death</td>
  <td></td>
  <td>Newborn died</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.149'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Physician</td>
  <td>ATTEND*</td>
  <td>Title of the Attendant responsible for the delivery Procedure as a Physician</td>
  <td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.15'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Preterm Birth</td>
  <td>PPB</td>
  <td>Risk Factors of Preterm Birth (history)</td>
  <td><a href='StructureDefinition-Observation-previous-preterm-birth.html'>ObservationPreviousPretermBirth</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.141'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Problem Status Active</td>
  <td></td>
  <td>Problem Status Active</td>
  <td></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.119'>SNOMED-CT</a></td>
</tr>

<tr>
  <td style='text-align: center'>Transfer In</td>
  <td>HOSPFROM</td>
  <td>If the mother was transferred to this facility</td>
  <td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td>
  <td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=1.3.6.1.4.1.19376.1.7.3.1.1.13.8.177'>Admit source (HL7)</a></td>
</tr>
</tbody>
</table>



---

// File: input/pagecontent/ije_mapping_fetalDeath.md

The following table illustrates the mappings of fields in the Interjurisdictional Exchange (IJE) formats for fetal death to profiles and fields within this FHIR Implementation guide. This information is provided to guide implementers who are transitioning from the familiar IJE to the new FHIR format for this information.

Note that string fields in FHIR-formatted data will often be subject to the same string length limitations of the IJE format for the same content.
For example, name fields in IJE (e.g., HOSP_D, FETFNAME) are restricted to 50 characters. Including strings longer than the IJE strength length limitations may lead to data truncation and/or business rule violations when data is sent to certain receivers, including NCHS. The IG includes maximum length restrictions on FHIR strings for some fields, and the FHIR validator will flag violations of these conformance restrictions. The IG does not impose maximum length restrictions for general FHIR fields like names and addresses since this seemed an unnatural constraint of widely used FHIR resources.

#### Specifying None of the Above and Missing Data
All of the none-of-the-above values are represented as observations with a clear code, and a value of 'None'. If the none-of-the-above observation is present in the bundle, then its complement should not be used. See <a href='usage.html#specifying-none-of-the-above-and-missing-data'>note on missing data</a>.

| **Observation** |  **Complements**   |
| --------------- | ------------------ |
| <a href='StructureDefinition-Observation-none-of-specified-maternal-morbidities.html'>ObservationNoneOfSpecifiedMaternalMorbidities</a> | <a href='StructureDefinition-Procedure-blood-transfusion.html'>ProcedureBloodTransfusion</a>, <a href='StructureDefinition-Condition-perineal-laceration.html'>ConditionPerinealLaceration</a>, <a href='StructureDefinition-Condition-ruptured-uterus.html'>ConditionRupturedUterus</a>, <a href='StructureDefinition-Procedure-unplanned-hysterectomy.html'>ProcedureUnplannedHysterectomy</a>, <a href='StructureDefinition-Observation-icu-admission.html'>ObservationICUAdmission</a> |
| <a href='StructureDefinition-Observation-none-of-specified-pregnancy-risk-factors.html'>ObservationNoneOfSpecifiedPregnancyRiskFactors</a> | <a href='StructureDefinition-Condition-prepregnancy-diabetes.html'>ConditionPrepregnancyDiabetes</a>, <a href='StructureDefinition-Condition-gestational-diabetes.html'>ConditionGestationalDiabetes</a>, <a href='StructureDefinition-Condition-prepregnancy-hypertension.html'>ConditionPrepregnancyHypertension</a>, <a href='StructureDefinition-Condition-gestational-hypertension.html'>ConditionGestationalHypertension</a>, <a href='StructureDefinition-Condition-eclampsia-hypertension.html'>ConditionEclampsiaHypertension</a>, <a href='StructureDefinition-Observation-previous-preterm-birth.html'>ObservationPreviousPretermBirth</a>, <a href='StructureDefinition-Procedure-infertility-treatment.html'>ProcedureInfertilityTreatment</a>, <a href='StructureDefinition-Procedure-fertility-enhancing-drug-therapy-artificial-insem.html'>ProcedureFertilityEnhancingDrugTherapyArtificialInsemination</a>, <a href='StructureDefinition-Procedure-assisted-reproductive-technology.html'>ProcedureAssistedReproductiveTechnology</a>, <a href='StructureDefinition-Observation-previous-cesarean.html'>ObservationPreviousCesarean</a> |
| <a href='StructureDefinition-Observation-unknown-final-route-and-method-of-delivery.html'>ObservationUnknownFinalRouteMethodDelivery</a> | <a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a> |
{: .grid }

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
    border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
    border-bottom: 2px solid #98c1d9;
    }
    </style>
### Fetal Death IJE Mapping
*IJE Names in <span style='color:darkviolet'>purple</span> text indicate element is unique to the Jurisdiction report, otherwise element is used for both Jurisdiction and Provider reports. IJE fields that are part of the [Vital Statistics Cooperative Program (VSCP)](https://www.ncbi.nlm.nih.gov/books/NBK219877/pdf/Bookshelf_NBK219877.pdf) reporting requirements as of 2022 are denoted with a US Flag.

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO <img height='16' img src='usflag.png' alt='FILENO'/></td><td><a href='StructureDefinition-Bundle-document-fetal-death-report.html'>BundleDocumentFetalDeathReport</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CertificateNumber.html'>fetalDeathReportNumber</a>].value</td><td style='text-align: center;'>string(6)</td><td></td></tr>
<tr><td style='text-align: center;'>5</td><td>Auxiliary State file number</td><td>AUXNO <img height='16' img src='usflag.png' alt='AUXNO'/></td><td><a href='StructureDefinition-Bundle-document-fetal-death-report.html'>BundleDocumentFetalDeathReport</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier1.html'>localFileNumber1</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Auxiliary State file number (2)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-fetal-death-report.html'>BundleDocumentFetalDeathReport</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier2.html'>localFileNumber2</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-fetal-death-report.html'>BundleDocumentFetalDeathReport</a></td><td>identifier.value</td><td style='text-align: center;'>string(12)</td><td>YYYYJJNNNNNN,  YYYY = year, JJ = jurisdiction,  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>176</td><td>Date of Registration--Year</td><td>DOR_YR <img height='16' img src='usflag.png' alt='DOR_YR'/></td><td><a href='StructureDefinition-Composition-provider-fetal-death-report.html'>CompositionProviderFetalDeathReport</a></td><td>date</td><td style='text-align: center;'>dateTime</td><td>Used for Jurisdiction Report also</td></tr>
<tr><td style='text-align: center;'>177</td><td>Date of Registration--Month</td><td>DOR_MO <img height='16' img src='usflag.png' alt='DOR_MO'/></td><td><a href='StructureDefinition-Composition-provider-fetal-death-report.html'>CompositionProviderFetalDeathReport</a></td><td>date</td><td style='text-align: center;'>dateTime</td><td>Used for Jurisdiction Report also</td></tr>
<tr><td style='text-align: center;'>178</td><td>Date of Registration--Day</td><td>DOR_DY <img height='16' img src='usflag.png' alt='DOR_DY'/></td><td><a href='StructureDefinition-Composition-provider-fetal-death-report.html'>CompositionProviderFetalDeathReport</a></td><td>date</td><td style='text-align: center;'>dateTime</td><td>Used for Jurisdiction Report also</td></tr>
<tr><td style='text-align: center;'>173</td><td>Risk Factors--Hypertension Eclampsia (added after 2004)</td><td>EHYPE <img height='16' img src='usflag.png' alt='EHYPE'/></td><td><a href='StructureDefinition-Condition-eclampsia-hypertension.html'>ConditionEclampsiaHypertension</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>180</td><td>Initiating cause/condition - Rupture of membranes prior to onset of labor</td><td>COD18a1 <img height='16' img src='usflag.png' alt='COD18a1'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=44223004 (Premature rupture of membranes (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>181</td><td>Initiating cause/condition - Abruptio placenta</td><td>COD18a2 <img height='16' img src='usflag.png' alt='COD18a2'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=415105001 (Placental abruption (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>182</td><td>Initiating cause/condition - Placental insufficiency</td><td>COD18a3 <img height='16' img src='usflag.png' alt='COD18a3'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=237292005 (Placental insufficiency (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>183</td><td>Initiating cause/condition - Prolapsed cord</td><td>COD18a4 <img height='16' img src='usflag.png' alt='COD18a4'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=270500004 (Prolapsed cord (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>184</td><td>Initiating cause/condition - Chorioamnionitis</td><td>COD18a5 <img height='16' img src='usflag.png' alt='COD18a5'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=11612004 (Chorioamnionitis (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>185</td><td>Initiating cause/condition - Other complications of placenta, cord, or membranes</td><td>COD18a6 <img height='16' img src='usflag.png' alt='COD18a6'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#membranes</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>186</td><td>Initiating cause/condition - Unknown</td><td>COD18a7 <img height='16' img src='usflag.png' alt='COD18a7'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=UNK</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>187</td><td>Initiating cause/condition - Maternal conditions/diseases literal</td><td>COD18a8 <img height='16' img src='usflag.png' alt='COD18a8'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#maternalconditions, code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>188</td><td>Initiating cause/condition - Other complications of placenta, cord, or membranes literal</td><td>COD18a9 <img height='16' img src='usflag.png' alt='COD18a9'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#membranes, code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>189</td><td>Initiating cause/condition - Other obstetrical or pregnancy complications literal</td><td>COD18a10 <img height='16' img src='usflag.png' alt='COD18a10'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#obstetricalcomplications, code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>190</td><td>Initiating cause/condition - Fetal anomaly literal</td><td>COD18a11 <img height='16' img src='usflag.png' alt='COD18a11'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=702709008 (Fetal Anomaly (Specify)), <br />code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>191</td><td>Initiating cause/condition - Fetal injury literal</td><td>COD18a12 <img height='16' img src='usflag.png' alt='COD18a12'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=277489001 (Fetal trauma (disorder)), <br />code.text</td><td style='text-align: center;'>string</td><td>specific description of fetal trauma should be provided in the code.text field</td></tr>
<tr><td style='text-align: center;'>192</td><td>Initiating cause/condition - Fetal infection literal</td><td>COD18a13 <img height='16' img src='usflag.png' alt='COD18a13'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=128270001 (Infectious disorder of the fetus (disorder)), <br />code.text</td><td style='text-align: center;'>string</td><td>specific description of fetal infection should be provided in the code.text field</td></tr>
<tr><td style='text-align: center;'>193</td><td>Initiating cause/condition - Other fetal conditions/disorders literal</td><td>COD18a14 <img height='16' img src='usflag.png' alt='COD18a14'/></td><td><a href='StructureDefinition-Condition-fetal-death-initiating-cause-or-condition.html'>ConditionFetalDeathInitiatingCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#fetalconditions, <br />code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>194</td><td>Other significant causes or conditions - Rupture of membranes prior to onset of labor</td><td>COD18b1 <img height='16' img src='usflag.png' alt='COD18b1'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=44223004 (Premature rupture of membranes (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>195</td><td>Other significant causes or conditions - Abruptio placenta</td><td>COD18b2 <img height='16' img src='usflag.png' alt='COD18b2'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=415105001 (Placental abruption (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>196</td><td>Other significant causes or conditions  - Placental insufficiency</td><td>COD18b3 <img height='16' img src='usflag.png' alt='COD18b3'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=237292005 (Placental insufficiency (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>197</td><td>Other significant causes or conditions - Prolapsed cord</td><td>COD18b4 <img height='16' img src='usflag.png' alt='COD18b4'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=270500004 (Prolapsed cord (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>198</td><td>Other significant causes or conditions - Chorioamnionitis</td><td>COD18b5 <img height='16' img src='usflag.png' alt='COD18b5'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=11612004 (Chorioamnionitis (disorder))</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>199</td><td>Other significant causes or conditions - Other complications of placenta, cord, or membranes</td><td>COD18b6 <img height='16' img src='usflag.png' alt='COD18b6'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#membranes</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>200</td><td>Other significant causes or conditions - Unknown</td><td>COD18b7 <img height='16' img src='usflag.png' alt='COD18b7'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=UNK</td><td style='text-align: center;'>na</td><td></td></tr>
<tr><td style='text-align: center;'>201</td><td>Other significant causes or conditions - Maternal conditions/diseases literal</td><td>COD18b8 <img height='16' img src='usflag.png' alt='COD18b8'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#maternalconditions, <br />code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>202</td><td>Other significant causes or conditions - Other complications of placenta, cord, or membranes literal</td><td>COD18b9 <img height='16' img src='usflag.png' alt='COD18b9'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#membranes, <br />code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>203</td><td>Other significant causes or conditions - Other obstetrical or pregnancy complications literal</td><td>COD18b10 <img height='16' img src='usflag.png' alt='COD18b10'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#obstetricalcomplications, <br />code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>204</td><td>Other significant causes or conditions - Fetal anomaly literal</td><td>COD18b11 <img height='16' img src='usflag.png' alt='COD18b11'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=702709008 (Fetal Anomaly (Specify)), <br />code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>205</td><td>Other significant causes or conditions - Fetal injury literal</td><td>COD18b12 <img height='16' img src='usflag.png' alt='COD18b12'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=277489001 (Fetal trauma (disorder)), <br />code.text</td><td style='text-align: center;'>string</td><td>specific description of fetal trauma should be provided in the code.text field</td></tr>
<tr><td style='text-align: center;'>206</td><td>Other significant causes or conditions - Fetal infection literal</td><td>COD18b13 <img height='16' img src='usflag.png' alt='COD18b13'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=128270001 (Infectious disorder of the fetus (disorder)), <br />code.text</td><td style='text-align: center;'>string</td><td>specific description of fetal infection should be provided in the code.text field</td></tr>
<tr><td style='text-align: center;'>207</td><td>Other significant causes or conditions - Other fetal conditions/disorders literal</td><td>COD18b14 <img height='16' img src='usflag.png' alt='COD18b14'/></td><td><a href='StructureDefinition-Condition-fetal-death-other-cause-or-condition.html'>ConditionFetalDeathOtherCauseOrCondition</a></td><td>code=FetalDeathCauseOrConditionCS#fetalconditions, <br />code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>111</td><td>Risk Factors--Gestational Diabetes</td><td>GDIAB <img height='16' img src='usflag.png' alt='GDIAB'/></td><td><a href='StructureDefinition-Condition-gestational-diabetes.html'>ConditionGestationalDiabetes</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>113</td><td>Risk Factors--Hypertension Gestational  (SEE ADDITIONAL HYPERTENSION CATEGORY IN LOCATION 573 TO REFLECT RECOMMENDED CHANGES EFFECTIVE 2004)</td><td>GHYPE <img height='16' img src='usflag.png' alt='GHYPE'/></td><td><a href='StructureDefinition-Condition-gestational-hypertension.html'>ConditionGestationalHypertension</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>110</td><td>Risk Factors--Prepregnancy Diabetes  (NOTE: SEE INSERTED NOTES FOR RISK FACTOR LOCATIONS 490-501 AND 573-575 TO REFLECT 2004 CHANGES)</td><td>PDIAB <img height='16' img src='usflag.png' alt='PDIAB'/></td><td><a href='StructureDefinition-Condition-prepregnancy-diabetes.html'>ConditionPrepregnancyDiabetes</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>112</td><td>Risk Factors--Hypertension Prepregnancy</td><td>PHYPE <img height='16' img src='usflag.png' alt='PHYPE'/></td><td><a href='StructureDefinition-Condition-prepregnancy-hypertension.html'>ConditionPrepregnancyHypertension</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>139</td><td>Maternal Morbidity--Ruptured Uterus</td><td>RUT <img height='16' img src='usflag.png' alt='RUT'/></td><td><a href='StructureDefinition-Condition-ruptured-uterus.html'>ConditionRupturedUterus</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#maternal-morbidities'>note on missing maternal morbidity data</a></td></tr>
<tr><td style='text-align: center;'>11</td><td>Place Where Delivery Occurred</td><td>DPLACE <img height='16' img src='usflag.png' alt='DPLACE'/></td><td><a href='StructureDefinition-Encounter-maternity.html'>EncounterMaternity</a></td><td>location.physicalType</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-birth-delivery-occurred.html'>BirthDeliveryOccurredVS</a></td></tr>
<tr><td style='text-align: center;'>347</td><td>Date Signed by Certifier--Year</td><td>CERTIFIED_YR</td><td><a href='StructureDefinition-Encounter-maternity.html'>EncounterMaternity</a></td><td>participant:certifier.period.start</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>348</td><td>Date Signed by Certifier--Month</td><td>CERTIFIED_MO</td><td><a href='StructureDefinition-Encounter-maternity.html'>EncounterMaternity</a></td><td>participant:certifier.period.start</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>349</td><td>Date Signed by Certifier--Day</td><td>CERTIFIED_DY</td><td><a href='StructureDefinition-Encounter-maternity.html'>EncounterMaternity</a></td><td>participant:certifier.period.start</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>12</td><td>Facility ID (NPI) - If available</td><td>FNPI <img height='16' img src='usflag.png' alt='FNPI'/></td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>identifier:NPI, type:BFDR = "birth"</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>13</td><td>Facility ID (State-Assigned)</td><td>SFN <img height='16' img src='usflag.png' alt='SFN'/></td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>identifier.extension[<a href='StructureDefinition-Extension-jurisdictional-facility-identifier.html'>JFI</a>], type:BFDR = "birth"</td><td style='text-align: center;'>Identifier</td><td></td></tr>
<tr><td style='text-align: center;'>224</td><td>Name of Delivery Facility</td><td>HOSP_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>name</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>225</td><td>Place of Delivery Street number</td><td>STNUM_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetNumber.html'>stnum</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>226</td><td>Place of Delivery Pre Directional</td><td>PREDIR_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-PreDirectional.html'>predir</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>227</td><td>Place of Delivery Street name</td><td>STNAME_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetName.html'>stname</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>228</td><td>Place of Delivery Street designator</td><td>STDESIG_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetDesignator.html'>stdesig</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>229</td><td>Place of Delivery Post Directional</td><td>POSTDIR_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-PostDirectional.html'>postdir</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>230</td><td>Place of Delivery Unit or Apartment Number</td><td>APTNUMB_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-UnitOrAptNumber.html'>unitnum</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>231</td><td>Place of Delivery Street Address</td><td>ADDRESS_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.line</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>232</td><td>Place of Delivery Zip code and Zip+4</td><td>ZIPCODE_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.postalCode</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>233</td><td>Place of Delivery County (literal)</td><td>CNTY_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.district</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>234</td><td>Place of Delivery City/Town/Place (literal)</td><td>CITY_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.city</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>235</td><td>State, U.S. Territory or Canadian Province of Place of Delivery - literal</td><td>STATE_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.state (expanded from 2 letter code)</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>236</td><td>Place of Delivery Country (literal)</td><td>COUNTRY_D</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>address.country (expanded from 2 letter code)</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a></td></tr>
<tr><td style='text-align: center;'>339</td><td>Facility Mother Moved From (if transferred)</td><td>HOSPFROM</td><td><a href='StructureDefinition-Location-bfdr.html'>LocationBFDR</a></td><td>name, type:BFDR = "transfer-from"</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>34</td><td>Mother of Hispanic Origin?--Mexican</td><td>METHNIC1 <img height='16' img src='usflag.png' alt='METHNIC1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicMexican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>35</td><td>Mother of Hispanic Origin?--Puerto Rican</td><td>METHNIC2 <img height='16' img src='usflag.png' alt='METHNIC2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicPuertoRican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>36</td><td>Mother of Hispanic Origin?--Cuban</td><td>METHNIC3 <img height='16' img src='usflag.png' alt='METHNIC3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCuban].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>37</td><td>Mother of Hispanic Origin?--Other</td><td>METHNIC4 <img height='16' img src='usflag.png' alt='METHNIC4'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicOther].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>38</td><td>Mother of Hispanic Origin?--Other Literal</td><td>METHNIC5 <img height='16' img src='usflag.png' alt='METHNIC5'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>39</td><td>Mother's Race--White</td><td>MRACE1 <img height='16' img src='usflag.png' alt='MRACE1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[White].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>40</td><td>Mother's Race--Black or African American</td><td>MRACE2 <img height='16' img src='usflag.png' alt='MRACE2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[BlackOrAfricanAmerican].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>41</td><td>Mother's Race--American Indian or Alaska Native</td><td>MRACE3 <img height='16' img src='usflag.png' alt='MRACE3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianOrAlaskanNative].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>42</td><td>Mother's Race--Asian Indian</td><td>MRACE4 <img height='16' img src='usflag.png' alt='MRACE4'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AsianIndian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>43</td><td>Mother's Race--Chinese</td><td>MRACE5 <img height='16' img src='usflag.png' alt='MRACE5'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Chinese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>44</td><td>Mother's Race--Filipino</td><td>MRACE6 <img height='16' img src='usflag.png' alt='MRACE6'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Filipino].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>45</td><td>Mother's Race--Japanese</td><td>MRACE7 <img height='16' img src='usflag.png' alt='MRACE7'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Japanese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>46</td><td>Mother's Race--Korean</td><td>MRACE8 <img height='16' img src='usflag.png' alt='MRACE8'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Korean].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>47</td><td>Mother's Race--Vietnamese</td><td>MRACE9 <img height='16' img src='usflag.png' alt='MRACE9'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Vietnamese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>48</td><td>Mother's Race--Other Asian</td><td>MRACE10 <img height='16' img src='usflag.png' alt='MRACE10'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>49</td><td>Mother's Race--Native Hawaiian</td><td>MRACE11 <img height='16' img src='usflag.png' alt='MRACE11'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[NativeHawaiian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>50</td><td>Mother's Race--Guamanian or Chamorro</td><td>MRACE12 <img height='16' img src='usflag.png' alt='MRACE12'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[GuamanianOrChamorro].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>51</td><td>Mother's Race--Samoan</td><td>MRACE13 <img height='16' img src='usflag.png' alt='MRACE13'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Samoan].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>52</td><td>Mother's Race--Other Pacific Islander</td><td>MRACE14 <img height='16' img src='usflag.png' alt='MRACE14'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslander].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>53</td><td>Mother's Race--Other</td><td>MRACE15 <img height='16' img src='usflag.png' alt='MRACE15'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRace].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>54</td><td>Mother's Race--First American Indian or Alaska Native Literal</td><td>MRACE16 <img height='16' img src='usflag.png' alt='MRACE16'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>55</td><td>Mother's Race--Second American Indian or Alaska Native Literal</td><td>MRACE17 <img height='16' img src='usflag.png' alt='MRACE17'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>56</td><td>Mother's Race--First Other Asian Literal</td><td>MRACE18 <img height='16' img src='usflag.png' alt='MRACE18'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>57</td><td>Mother's Race--Second Other Asian Literal</td><td>MRACE19 <img height='16' img src='usflag.png' alt='MRACE19'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>58</td><td>Mother's Race--First Other Pacific Islander Literal</td><td>MRACE20 <img height='16' img src='usflag.png' alt='MRACE20'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>59</td><td>Mother's Race--Second Other Pacific Islander Literal</td><td>MRACE21 <img height='16' img src='usflag.png' alt='MRACE21'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>60</td><td>Mother's Race--First Other Literal</td><td>MRACE22 <img height='16' img src='usflag.png' alt='MRACE22'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>61</td><td>Mother's Race--Second Other Literal</td><td>MRACE23 <img height='16' img src='usflag.png' alt='MRACE23'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>285</td><td>Father of Hispanic Origin?--Mexican</td><td>FETHNIC1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicMexican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>286</td><td>Father of Hispanic Origin?--Puerto Rican</td><td>FETHNIC2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicPuertoRican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>287</td><td>Father of Hispanic Origin?--Cuban</td><td>FETHNIC3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCuban].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>288</td><td>Father of Hispanic Origin?--Other</td><td>FETHNIC4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicOther].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>289</td><td>Father of Hispanic Origin?--Other Literal</td><td>FETHNIC5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>290</td><td>Father's Race--White</td><td>FRACE1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[White].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>291</td><td>Father's Race--Black or African American</td><td>FRACE2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[BlackOrAfricanAmerican].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>292</td><td>Father's Race--American Indian or Alaska Native</td><td>FRACE3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianOrAlaskanNative].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>293</td><td>Father's Race--Asian Indian</td><td>FRACE4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AsianIndian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>294</td><td>Father's Race--Chinese</td><td>FRACE5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Chinese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>295</td><td>Father's Race--Filipino</td><td>FRACE6</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Filipino].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>296</td><td>Father's Race--Japanese</td><td>FRACE7</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Japanese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>297</td><td>Father's Race--Korean</td><td>FRACE8</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Korean].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>298</td><td>Father's Race--Vietnamese</td><td>FRACE9</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Vietnamese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>299</td><td>Father's Race--Other Asian</td><td>FRACE10</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>300</td><td>Father's Race--Native Hawaiian</td><td>FRACE11</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[NativeHawaiian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>301</td><td>Father's Race--Guamanian or Chamorro</td><td>FRACE12</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[GuamanianOrChamorro].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>302</td><td>Father's Race--Samoan</td><td>FRACE13</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Samoan].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>303</td><td>Father's Race--Other Pacific Islander</td><td>FRACE14</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslander].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>304</td><td>Father's Race--Other</td><td>FRACE15</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRace].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>305</td><td>Father's Race--First American Indian or Alaska Native Literal</td><td>FRACE16</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>306</td><td>Father's Race--Second American Indian or Alaska Native Literal</td><td>FRACE17</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>307</td><td>Father's Race--First Other Asian Literal</td><td>FRACE18</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>308</td><td>Father's Race--Second Other Asian Literal</td><td>FRACE19</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>309</td><td>Father's Race--First Other Pacific Islander Literal</td><td>FRACE20</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>310</td><td>Father's Race--Second Other Pacific Islander Literal</td><td>FRACE21</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>311</td><td>Father's Race--First Other Literal</td><td>FRACE22</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>312</td><td>Father's Race--Second Other Literal</td><td>FRACE23</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>150</td><td>Were Autopsy or Histological Placental Examination Results Used in Determining the Cause of Fetal Death?</td><td>AUTOPF <img height='16' img src='usflag.png' alt='AUTOPF'/></td><td><a href='StructureDefinition-Observation-autopsy-histological-exam-results-used.html'>ObservationAutopsyHistologicalExamResultsUsed</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-not-applicable-vr.html'>ValueSetYesNoNotApplicableVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>148</td><td>Was an Autopsy Performed?</td><td>AUTOP <img height='16' img src='usflag.png' alt='AUTOP'/></td><td><a href='StructureDefinition-Observation-autopsy-performed-indicator.html'>ObservationAutopsyPerformedIndicator</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-performed-not-performed-planned.html'>PerformedNotPerformedPlannedVS</a></td></tr>
<tr><td style='text-align: center;'>143</td><td>Weight of Fetus</td><td>FWG <img height='16' img src='usflag.png' alt='FWG'/></td><td><a href='StructureDefinition-Observation-birth-weight.html'>ObservationBirthWeight</a></td><td>value</td><td style='text-align: center;'>quantity</td><td></td></tr>
<tr><td style='text-align: center;'>144</td><td>Weight of Fetus--Edit Flag</td><td style='color: darkviolet'>FW_BYPASS <img height='16' img src='usflag.png' alt='FW_BYPASS'/></td><td><a href='StructureDefinition-Observation-birth-weight.html'>ObservationBirthWeight</a></td><td>value.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-birth-weight-edit-flags.html'>BirthWeightEditFlagsVS</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a></td></tr>
<tr><td style='text-align: center;'>103</td><td>Number of Cigarettes Smoked in 3 months prior to Pregnancy</td><td>CIGPN <img height='16' img src='usflag.png' alt='CIGPN'/></td><td><a href='StructureDefinition-Observation-cigarette-smoking-before-during-pregnancy.html'>ObservationCigaretteSmokingBeforeDuringPregnancy</a></td><td>value, <br />code=64794-1 (In the 3 months before you got pregnant, <br />how many cigarettes did you smoke on an average day)</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>104</td><td>Number of Cigarettes Smoked in 1st 3 months</td><td>CIGFN <img height='16' img src='usflag.png' alt='CIGFN'/></td><td><a href='StructureDefinition-Observation-cigarette-smoking-before-during-pregnancy.html'>ObservationCigaretteSmokingBeforeDuringPregnancy</a></td><td>value, <br />code=87298-6 (Cigarettes smoked per day by Mother--1st trimester)</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>105</td><td>Number of Cigarettes Smoked in 2nd 3 months</td><td>CIGSN <img height='16' img src='usflag.png' alt='CIGSN'/></td><td><a href='StructureDefinition-Observation-cigarette-smoking-before-during-pregnancy.html'>ObservationCigaretteSmokingBeforeDuringPregnancy</a></td><td>value, <br />code=87299-4 (Cigarettes smoked per day by Mother--2nd trimester)</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>106</td><td>Number of Cigarettes Smoked in third trimester (RECOMMENDED CHANGE EFFECTIVE 2004)</td><td>CIGLN <img height='16' img src='usflag.png' alt='CIGLN'/></td><td><a href='StructureDefinition-Observation-cigarette-smoking-before-during-pregnancy.html'>ObservationCigaretteSmokingBeforeDuringPregnancy</a></td><td>value, <br />code=64795-8 (In the last 3 months of your pregnancy, how many cigarettes did you smoke on an average day)</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>80</td><td>Date of First Prenatal Care Visit--Month</td><td>DOFP_MO <img height='16' img src='usflag.png' alt='DOFP_MO'/></td><td><a href='StructureDefinition-Observation-date-of-first-prenatal-care-visit.html'>ObservationDateOfFirstPrenatalCareVisit</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-date'>note on partial dates</a></td></tr>
<tr><td style='text-align: center;'>81</td><td>Date of First Prenatal Care Visit--Day</td><td>DOFP_DY <img height='16' img src='usflag.png' alt='DOFP_DY'/></td><td><a href='StructureDefinition-Observation-date-of-first-prenatal-care-visit.html'>ObservationDateOfFirstPrenatalCareVisit</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-date'>note on partial dates</a></td></tr>
<tr><td style='text-align: center;'>82</td><td>Date of First Prenatal Care Visit--Year</td><td>DOFP_YR <img height='16' img src='usflag.png' alt='DOFP_YR'/></td><td><a href='StructureDefinition-Observation-date-of-first-prenatal-care-visit.html'>ObservationDateOfFirstPrenatalCareVisit</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-date'>note on partial dates</a></td></tr>
<tr><td style='text-align: center;'>99</td><td>Date of Last Live Birth--Month</td><td>MLLB <img height='16' img src='usflag.png' alt='MLLB'/></td><td><a href='StructureDefinition-Observation-date-of-last-live-birth.html'>ObservationDateOfLastLiveBirth</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>100</td><td>Date of Last Live Birth--Year</td><td>YLLB <img height='16' img src='usflag.png' alt='YLLB'/></td><td><a href='StructureDefinition-Observation-date-of-last-live-birth.html'>ObservationDateOfLastLiveBirth</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>147</td><td>Estimated time of fetal death</td><td>ETIME <img height='16' img src='usflag.png' alt='ETIME'/></td><td><a href='StructureDefinition-Observation-fetal-death-time-point.html'>ObservationFetalDeathTimePoint</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-fetal-death-time-points.html'>FetalDeathTimePointsVS</a></td></tr>
<tr><td style='text-align: center;'>133</td><td>Method of Delivery--Fetal Presentation</td><td>PRES <img height='16' img src='usflag.png' alt='PRES'/></td><td><a href='StructureDefinition-Observation-fetal-presentation.html'>ObservationFetalPresentation</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-fetal-presentations.html'>FetalPresentationsVS</a></td></tr>
<tr><td style='text-align: center;'>145</td><td>Obstetric Estimation of Gestation</td><td>OWGEST <img height='16' img src='usflag.png' alt='OWGEST'/></td><td><a href='StructureDefinition-Observation-gestational-age-at-delivery.html'>ObservationGestationalAgeAtDelivery</a></td><td>value</td><td style='text-align: center;'>quantity</td><td>value is a decimal; unit is from <a href='ValueSet-ValueSet-units-of-gestational-age.html'>UnitsOfGestationalAgeVS</a></td></tr>
<tr><td style='text-align: center;'>146</td><td>Obstetric Estimation of Gestation--Edit Flag</td><td style='color: darkviolet'>OWGEST_BYPASS <img height='16' img src='usflag.png' alt='OWGEST_BYPASS'/></td><td><a href='StructureDefinition-Observation-gestational-age-at-delivery.html'>ObservationGestationalAgeAtDelivery</a></td><td>value.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-estimate-of-gestation-edit-flags.html'>EstimateOfGestationEditFlagsVS</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a> </td></tr>
<tr><td style='text-align: center;'>149</td><td>Was a Histological Placental Examination Performed?</td><td>HISTOP <img height='16' img src='usflag.png' alt='HISTOP'/></td><td><a href='StructureDefinition-Observation-histological-placental-exam-performed.html'>ObservationHistologicalPlacentalExamPerformed</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-performed-not-performed-planned.html'>PerformedNotPerformedPlannedVS</a></td></tr>
<tr><td style='text-align: center;'>141</td><td>Maternal Morbidity--Admit to Intensive Care</td><td>AINT <img height='16' img src='usflag.png' alt='AINT'/></td><td><a href='StructureDefinition-Observation-icu-admission.html'>ObservationICUAdmission</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#maternal-morbidities'>note on missing maternal morbidity data</a></td></tr>
<tr><td style='text-align: center;'>135</td><td>Method of Delivery--Trial of Labor Attempted</td><td>TLAB <img height='16' img src='usflag.png' alt='TLAB'/></td><td><a href='StructureDefinition-Observation-labor-trial-attempted.html'>ObservationLaborTrialAttempted</a></td><td>value</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>107</td><td>Date Last Normal Menses Began--Year</td><td>DLMP_YR <img height='16' img src='usflag.png' alt='DLMP_YR'/></td><td><a href='StructureDefinition-Observation-last-menstrual-period.html'>ObservationLastMenstrualPeriod</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>108</td><td>Date Last Normal Menses Began--Month</td><td>DLMP_MO <img height='16' img src='usflag.png' alt='DLMP_MO'/></td><td><a href='StructureDefinition-Observation-last-menstrual-period.html'>ObservationLastMenstrualPeriod</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>109</td><td>Date Last Normal Menses Began--Day</td><td>DLMP_DY <img height='16' img src='usflag.png' alt='DLMP_DY'/></td><td><a href='StructureDefinition-Observation-last-menstrual-period.html'>ObservationLastMenstrualPeriod</a></td><td>value</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Method of Disposition</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Observation-fetal-remains-disposition-method.html'>ObservationFetalRemainsDispositionMethod</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-fetal-remains-disposition-method.html'>FetalRemainsDispositionMethodVS</a></td></tr>
<tr><td style='text-align: center;'>88</td><td>Mother's Height--Feet</td><td>HFT <img height='16' img src='usflag.png' alt='HFT'/></td><td><a href='StructureDefinition-Observation-mother-height.html'>ObservationMotherHeight</a></td><td>value</td><td style='text-align: center;'>quantity</td><td></td></tr>
<tr><td style='text-align: center;'>89</td><td>Mother's Height--Inches</td><td>HIN <img height='16' img src='usflag.png' alt='HIN'/></td><td><a href='StructureDefinition-Observation-mother-height.html'>ObservationMotherHeight</a></td><td>value</td><td style='text-align: center;'>quantity</td><td></td></tr>
<tr><td style='text-align: center;'>90</td><td>Mother's Height--Edit Flag</td><td style='color: darkviolet'>HGT_BYPASS <img height='16' img src='usflag.png' alt='HGT_BYPASS'/></td><td><a href='StructureDefinition-Observation-mother-height.html'>ObservationMotherHeight</a></td><td>value.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-pregnancy-report-edit-flags.html'>PregnancyReportEditFlagsVS</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a> </td></tr>
<tr><td style='text-align: center;'>91</td><td>Mother's Prepregnancy Weight</td><td>PWGT <img height='16' img src='usflag.png' alt='PWGT'/></td><td><a href='StructureDefinition-Observation-mother-prepregnancy-weight.html'>ObservationMotherPrepregnancyWeight</a></td><td>value</td><td style='text-align: center;'>quantity</td><td></td></tr>
<tr><td style='text-align: center;'>92</td><td>Mother's Prepregnancy Weight--Edit Flag</td><td style='color: darkviolet'>PWGT_BYPASS <img height='16' img src='usflag.png' alt='PWGT_BYPASS'/></td><td><a href='StructureDefinition-Observation-mother-prepregnancy-weight.html'>ObservationMotherPrepregnancyWeight</a></td><td>value.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-pregnancy-report-edit-flags.html'>PregnancyReportEditFlagsVS</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a></td></tr>
<tr><td style='text-align: center;'>95</td><td>Did Mother get WIC Food for Herself?</td><td>WIC <img height='16' img src='usflag.png' alt='WIC'/></td><td><a href='StructureDefinition-Observation-mother-received-wic-food.html'>ObservationMotherReceivedWICFood</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>97</td><td>Previous Live Births Now Dead</td><td>PLBD <img height='16' img src='usflag.png' alt='PLBD'/></td><td><a href='StructureDefinition-Observation-number-births-now-dead.html'>ObservationNumberBirthsNowDead</a></td><td>value</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>96</td><td>Previous Live Births Now Living</td><td>PLBL <img height='16' img src='usflag.png' alt='PLBL'/></td><td><a href='StructureDefinition-Observation-number-births-now-living.html'>ObservationNumberBirthsNowLiving</a></td><td>value</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>153</td><td>Number of Fetal Deaths</td><td>FDTH <img height='16' img src='usflag.png' alt='FDTH'/></td><td><a href='StructureDefinition-Observation-number-fetal-deaths-this-delivery.html'>ObservationNumberFetalDeathsThisDelivery</a></td><td>value</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>119</td><td>Risk Factors--Number Previous Cesareans</td><td>NPCES <img height='16' img src='usflag.png' alt='NPCES'/></td><td><a href='StructureDefinition-Observation-number-previous-cesareans.html'>ObservationNumberPreviousCesareans</a></td><td>value</td><td style='text-align: center;'>integer</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>120</td><td>Risk Factors--Number Previous Cesareans--Edit Flag</td><td style='color: darkviolet'>NPCES_BYPASS <img height='16' img src='usflag.png' alt='NPCES_BYPASS'/></td><td><a href='StructureDefinition-Observation-number-previous-cesareans.html'>ObservationNumberPreviousCesareans</a></td><td>value.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-number-previous-cesareans-edit-flags.html'>NumberPreviousCesareansEditFlagsVS</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a> </td></tr>
<tr><td style='text-align: center;'>32</td><td>Mother's Education</td><td>MEDUC <img height='16' img src='usflag.png' alt='MEDUC'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a></td><td>value, <br />code=57712-2 (Highest level of education Mother)</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-education-level-vr.html'>ValueSetEducationLevelVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>33</td><td>Mother's Education--Edit Flag</td><td style='color: darkviolet'>MEDUC_BYPASS <img height='16' img src='usflag.png' alt='MEDUC_BYPASS'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a></td><td>value.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value, <br />code=57712-2 (Highest level of education Mother)</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-valueset-edit-bypass-01234-vr.html'>ValueSetEditBypass01234VitalRecords</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a></td></tr>
<tr><td style='text-align: center;'>283</td><td>Father's Education</td><td>FEDUC</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a></td><td>value, <br />code=87300-0 (Highest level of education Father)</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-education-level-vr.html'>ValueSetEducationLevelVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>284</td><td>Father's Education--Edit Flag</td><td style='color: darkviolet'>FEDUC_BYPASS</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-education-level-vr.html'>ObservationEducationLevelVitalRecords</a></td><td>value.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value, <br />code=87300-0 (Highest level of education Father)</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-valueset-edit-bypass-01234-vr.html'>ValueSetEditBypass01234VitalRecords</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a></td></tr>
<tr><td style='text-align: center;'>269</td><td>Occupation of Mother</td><td>MOM_OC_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='MTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'>271</td><td>Occupation of Father</td><td>DAD_OC_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='FTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'>273</td><td>Industry of Mother</td><td>MOM_IN_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>component[odh-PastOrPresentIndustry].value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='MTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'>275</td><td>Industry of Father</td><td>DAD_IN_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>component[odh-PastOrPresentIndustry].value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='FTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'>118</td><td>Risk Factors--Previous Cesarean</td><td>PCES <img height='16' img src='usflag.png' alt='PCES'/></td><td><a href='StructureDefinition-Observation-previous-cesarean.html'>ObservationPreviousCesarean</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>1</td><td>Date of Delivery (Fetus)--Year</td><td>FDOD_YR <img height='16' img src='usflag.png' alt='FDOD_YR'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#birth-date-and-time'>note on birth date and time</a></td></tr>
<tr><td style='text-align: center;'>2</td><td>State, U.S. Territory or Canadian Province of Place of Delivery - code</td><td>DSTATE <img height='16' img src='usflag.png' alt='DSTATE'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>extension[<a href='http://hl7.org/fhir/StructureDefinition/patient-birthPlace'>birthPlace</a>].value[x].state or extension[<a href='http://hl7.org/fhir/StructureDefinition/patient-birthPlace'>birthPlace</a>].value[x].state.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-jurisdiction-id-vr.html'>nationalReportingJurisdictionId</a>]</td><td style='text-align: center;'>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a> in state field or <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-jurisdiction-vr.html'>ValueSetJurisdictionVitalRecords</a> in extension</td></tr>
<tr><td style='text-align: center;'>6</td><td>Time of Delivery</td><td>TD <img height='16' img src='usflag.png' alt='TD'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>birthDate.extension[<a href='http://hl7.org/fhir/extensions/StructureDefinition-patient-birthTime.html'>patient-birthTime</a>]</td><td style='text-align: center;'>dateTime</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#birth-date-and-time'>note on birth date and time</a></td></tr>
<tr><td style='text-align: center;'>7</td><td>Sex</td><td>FSEX <img height='16' img src='usflag.png' alt='FSEX'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>extension[<a href='http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-birthsex.html'>birthsex</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-sex-assigned-at-birth-vr.html'>ValueSetSexAssignedAtBirthVitalRecords</a></td></tr>
<tr><td style='text-align: center;'></td><td>Gender</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>gender</td><td style='text-align: center;'>codeable</td><td><a href='http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html'>USCorePatient</a> requires gender - can be 'unknown'. See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#gender'>Note on Gender</a></td></tr>
<tr><td style='text-align: center;'>8</td><td>Date of Delivery (Fetus)--Month</td><td>FDOD_MO <img height='16' img src='usflag.png' alt='FDOD_MO'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#birth-date-and-time'>note on birth date and time</a></td></tr>
<tr><td style='text-align: center;'>9</td><td>Date of Delivery (Fetus)--Day</td><td>FDOD_DY <img height='16' img src='usflag.png' alt='FDOD_DY'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#birth-date-and-time'>note on birth date and time</a></td></tr>
<tr><td style='text-align: center;'>10</td><td>County of Delivery</td><td>CNTYO <img height='16' img src='usflag.png' alt='CNTYO'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>extension[<a href='http://hl7.org/fhir/StructureDefinition/patient-birthPlace'>birthPlace</a>].value[x].district.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-DistrictCode.html'>districtCode</a>]</td><td style='text-align: center;'>integer</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td></tr>
<tr><td style='text-align: center;'>151</td><td>Plurality</td><td>PLUR <img height='16' img src='usflag.png' alt='PLUR'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>extension[<a href='http://hl7.org/fhir/extensions/StructureDefinition-patient-multipleBirthTotal.html'>patient-multipleBirthTotal</a>].valuePositiveInt</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>152</td><td>Set Order</td><td>SORD <img height='16' img src='usflag.png' alt='SORD'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>multipleBirth[x]</td><td style='text-align: center;'>integer</td><td></td></tr>
<tr><td style='text-align: center;'>155</td><td>Plurality--Edit Flag</td><td style='color: darkviolet'>PLUR_BYPASS <img height='16' img src='usflag.png' alt='PLUR_BYPASS'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>multipleBirth.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-plurality-edit-flags-vr.html'>ValueSetPluralityEditFlagsVitalRecords</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a></td></tr>
<tr><td style='text-align: center;'>171</td><td>Mother's Reported Age</td><td>MAGER <img height='16' img src='usflag.png' alt='MAGER'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-reported-parent-age-at-delivery-vr.html'>parentReportedAgeAtDelivery</a>].extension[reportedAge].value, <br />extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-reported-parent-age-at-delivery-vr.html'>parentReportedAgeAtDelivery</a>].extension[<a href='StructureDefinition-Extension-role.html'>motherOrFather</a>].value='MTH'</td><td style='text-align: center;'>quantity</td><td></td></tr>
<tr><td style='text-align: center;'>172</td><td>Father's Reported Age</td><td>FAGER <img height='16' img src='usflag.png' alt='FAGER'/></td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-reported-parent-age-at-delivery-vr.html'>parentReportedAgeAtDelivery</a>].extension[reportedAge].value, <br />extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-reported-parent-age-at-delivery-vr.html'>parentReportedAgeAtDelivery</a>].extension[<a href='StructureDefinition-Extension-role.html'>motherOrFather</a>].value='FTH'</td><td style='text-align: center;'>quantity</td><td></td></tr>
<tr><td style='text-align: center;'>219</td><td>Fetus First Name</td><td>FETFNAME</td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>name.given, <br />name.use = official</td><td style='text-align: center;'>string</td><td>See <a href='usage.html#child-and-decedent-fetus-name'>note on Child and Decedent Fetus name</a></td></tr>
<tr><td style='text-align: center;'>220</td><td>Fetus Middle Name</td><td>FETMNAME</td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>name.given, <br />name.use = official</td><td style='text-align: center;'>string</td><td>See <a href='usage.html#child-and-decedent-fetus-name'>note on Child and Decedent Fetus name</a></td></tr>
<tr><td style='text-align: center;'>221</td><td>Fetus Last Name</td><td>FETLNAME</td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>name.family, name.use = official. (absence is equivalent to ‘UNKNOWN’.)</td><td style='text-align: center;'>string</td><td>See <a href='usage.html#child-and-decedent-fetus-name'>note on Child and Decedent Fetus name</a></td></tr>
<tr><td style='text-align: center;'>222</td><td>Fetus Surname Suffix</td><td>SUFFIX</td><td><a href='StructureDefinition-Patient-decedent-fetus.html'>PatientDecedentFetus</a></td><td>name.suffix, <br />name.use = official</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>14</td><td>Date of Birth (Mother)--Year</td><td>MDOB_YR <img height='16' img src='usflag.png' alt='MDOB_YR'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>15</td><td>Date of Birth (Mother)--Month</td><td>MDOB_MO <img height='16' img src='usflag.png' alt='MDOB_MO'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>16</td><td>Date of Birth (Mother)--Day</td><td>MDOB_DY <img height='16' img src='usflag.png' alt='MDOB_DY'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>17</td><td>Date of Birth (Mother)--Edit Flag</td><td style='color: darkviolet'>MAGE_BYPASS <img height='16' img src='usflag.png' alt='MAGE_BYPASS'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>birthDate.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-date-of-birth-edit-flags-vr.html'>ValueSetDateOfBirthEditFlagsVitalRecords</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a></td></tr>
<tr><td style='text-align: center;'>18</td><td>State, U.S. Territory or Canadian Province of Birth (Mother) - code</td><td>BPLACEC_ST_TER <img height='16' img src='usflag.png' alt='BPLACEC_ST_TER'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>extension[<a href='http://hl7.org/fhir/StructureDefinition/patient-birthPlace'>birthPlace</a>].value[x].state</td><td style='text-align: center;'>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>19</td><td>Mother's Birthplace--Country</td><td>BPLACEC_CNT <img height='16' img src='usflag.png' alt='BPLACEC_CNT'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>extension[<a href='http://hl7.org/fhir/StructureDefinition/patient-birthPlace'>birthPlace</a>].value[x].country</td><td style='text-align: center;'>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>20</td><td>Residence of Mother--City/Town</td><td>CITYC <img height='16' img src='usflag.png' alt='CITYC'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.city.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CityCode.html'>cityCode</a>]</td><td style='text-align: center;'>integer</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#city-codes'>CityCodes</a></td></tr>
<tr><td style='text-align: center;'>21</td><td>Residence of Mother--County</td><td>COUNTYC <img height='16' img src='usflag.png' alt='COUNTYC'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.district.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-DistrictCode.html'>districtCode</a>]</td><td style='text-align: center;'>integer</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#county-codes'>CountyCodes</a></td></tr>
<tr><td style='text-align: center;'>22</td><td>State, U.S. Territory or Canadian Province of Residence (Mother) - code</td><td>STATEC <img height='16' img src='usflag.png' alt='STATEC'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.state</td><td style='text-align: center;'>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>23</td><td>Residence of Mother--Country</td><td>COUNTRYC <img height='16' img src='usflag.png' alt='COUNTRYC'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.country</td><td style='text-align: center;'>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-residence-country-vr.html'>ValueSetResidenceCountryVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>24</td><td>Residence of Mother--Inside City/Town Limits</td><td>LIMITS <img height='16' img src='usflag.png' alt='LIMITS'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-within-city-limits-indicator-vr.html'>withinCityLimitsIndicator</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>239</td><td>Mother's Legal First Name</td><td>MOMFNAME</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.given, <br />name.use = official</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>240</td><td>Mother's Legal Middle Name</td><td>MOMMNAME</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.given, <br />name.use = official </td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>241</td><td>Mother's Legal Last Name</td><td>MOMLNAME</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.family, <br />name.use = official</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>242</td><td>Mother's Legal Surname Suffix</td><td>MOMSUFFIX</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.suffix, <br />name.use = official </td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>243</td><td>Mother's First Maiden Name</td><td>MOMFMNME</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.given, <br />name.use = maiden</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>244</td><td>Mother's Middle Maiden Name</td><td>MOMMMID</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.given, <br />name.use = maiden</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>245</td><td>Mother's Last Maiden Name</td><td>MOMMAIDN</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.family, <br />name.use = maiden</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>246</td><td>Mother's Maiden Surname Suffix</td><td>MOMMSUFFIX</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>name.suffix, <br />name.use = maiden</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'></td><td>Gender</td><td>*NO IJE MAPPING*</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>gender</td><td style='text-align: center;'>codeable</td><td><a href='http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html'>USCorePatient</a> requires gender - can be 'unknown'. See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#gender'>Note on Gender</a></td></tr>
<tr><td style='text-align: center;'>247</td><td>Mother's Residence Street number</td><td>STNUM <img height='16' img src='usflag.png' alt='STNUM'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetNumber.html'>stnum</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>248</td><td>Mother's Residence Pre Directional</td><td>PREDIR <img height='16' img src='usflag.png' alt='PREDIR'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-PreDirectional.html'>predir</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>249</td><td>Mother's Residence Street name</td><td>STNAME <img height='16' img src='usflag.png' alt='STNAME'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetName.html'>stname</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>250</td><td>Mother's Residence Street designator</td><td>STDESIG <img height='16' img src='usflag.png' alt='STDESIG'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-StreetDesignator.html'>stdesig</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>251</td><td>Mother's Residence Post Directional</td><td>POSTDIR <img height='16' img src='usflag.png' alt='POSTDIR'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-PostDirectional.html'>postdir</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>252</td><td>Mother's Residence Unit or Apartment Number</td><td>APTNUMB <img height='16' img src='usflag.png' alt='APTNUMB'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-UnitOrAptNumber.html'>unitnum</a>]</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>253</td><td>Mother's Residence Street Address</td><td>ADDRESS <img height='16' img src='usflag.png' alt='ADDRESS'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.line</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>254</td><td>Mother's Residence Zip code and Zip+4</td><td>ZIPCODE <img height='16' img src='usflag.png' alt='ZIPCODE'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.postalCode</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>255</td><td>Mother's Residence County (literal)</td><td>COUNTYTXT <img height='16' img src='usflag.png' alt='COUNTYTXT'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.district</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>256</td><td>Mother's Residence City/Town/Place (literal)</td><td>CITYTXT <img height='16' img src='usflag.png' alt='CITYTXT'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.city</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>257</td><td>State, U.S. Territory or Canadian Province of Residence (Mother) - literal</td><td>STATETXT <img height='16' img src='usflag.png' alt='STATETXT'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.state (expanded from 2 letter code)</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>258</td><td>Mother's Residence Country (literal)</td><td>CNTRYTXT <img height='16' img src='usflag.png' alt='CNTRYTXT'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>address.country (expanded from 2 letter code)</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a></td></tr>
<tr><td style='text-align: center;'>265</td><td>Mother's Social Security Number</td><td>MOM_SSN</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>identifier.value where system = ‘http://terminology.hl7.org/CodeSystem/v2-0203' <br />and type.coding.code=”SS”</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>279</td><td>State, U.S. Territory or Canadian Province of Birth (Mother) - literal</td><td>MBPLACE_ST_TER_TXT</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>extension[<a href='http://hl7.org/fhir/extensions/StructureDefinition-patient-birthPlace.html'>patient-birthPlace</a>].value[x].state</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>280</td><td>Mother's Country of Birth (Literal)</td><td>MBPLACE_CNTRY_TXT</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Patient-mother-vr.html'>PatientMotherVitalRecords</a></td><td>extension[<a href='http://hl7.org/fhir/extensions/StructureDefinition-patient-birthPlace.html'>patient-birthPlace</a>].value[x].country (expanded from 2 letter code)</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a></td></tr>
<tr><td style='text-align: center;'>78</td><td>Attendant</td><td>ATTEND <img height='16' img src='usflag.png' alt='ATTEND'/></td><td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td><td>qualification.code</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-birth-attendant-titles.html'>BirthAttendantTitlesVS</a></td></tr>
<tr><td style='text-align: center;'>340</td><td>Attendant's Name</td><td>ATTEND_NAME</td><td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td><td>name.text</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>341</td><td>Attendant's NPI</td><td>ATTEND_NPI</td><td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td><td>identifier:NPI</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>342</td><td>Attendant ("Other" specified text)</td><td>ATTEND_OTH_TXT</td><td><a href='StructureDefinition-Practitioner-birth-attendant.html'>PractitionerBirthAttendant</a></td><td>qualification.code.text</td><td style='text-align: center;'>string</td><td>code.text should contain description</td></tr>
<tr><td style='text-align: center;'>174</td><td>Risk Factors--Infertility: Fertility Enhancing Drugs (added after 2004)</td><td>INFT_DRG <img height='16' img src='usflag.png' alt='INFT_DRG'/></td><td><a href='StructureDefinition-Procedure-fertility-enhancing-drug-therapy-artificial-insem.html'>ProcedureFertilityEnhancingDrugTherapyArtificialInsemination</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>175</td><td>Risk Factors--Infertility: Asst. Rep. Technology (added after 2004)</td><td>INFT_ART <img height='16' img src='usflag.png' alt='INFT_ART'/></td><td><a href='StructureDefinition-Procedure-assisted-reproductive-technology.html'>ProcedureAssistedReproductiveTechnology</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>134</td><td>Method of Delivery--Route and Method of Delivery</td><td>ROUT <img height='16' img src='usflag.png' alt='ROUT'/></td><td><a href='StructureDefinition-Procedure-final-route-method-delivery.html'>ProcedureFinalRouteMethodDelivery</a></td><td>code</td><td style='text-align: center;'>codeable</td><td><a href='ValueSet-ValueSet-delivery-routes.html'>DeliveryRoutesVS</a> unless unknown, <br />See  <a href='usage.html#method-of-delivery'>note on missing method of delivery data</a></td></tr>
<tr><td style='text-align: center;'>117</td><td>Risk Factors--Infertility Treatment  (SEE ADDITIONAL SUBCATEGORIES IN LOCATIONS 574-575)</td><td>INFT <img height='16' img src='usflag.png' alt='INFT'/></td><td><a href='StructureDefinition-Procedure-infertility-treatment.html'>ProcedureInfertilityTreatment</a></td><td></td><td style='text-align: center;'>na</td><td>See <a href='usage.html#pregnancy-risk-factors'>note on missing pregnancy risk factors data</a></td></tr>
<tr><td style='text-align: center;'>25</td><td>Date of Birth (Father)--Year</td><td>FDOB_YR <img height='16' img src='usflag.png' alt='FDOB_YR'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>26</td><td>Date of Birth (Father)--Month</td><td>FDOB_MO <img height='16' img src='usflag.png' alt='FDOB_MO'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>27</td><td>Date of Birth (Father)--Day</td><td>FDOB_DY <img height='16' img src='usflag.png' alt='FDOB_DY'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>birthDate.value</td><td style='text-align: center;'>date</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#partial-dates-and-times'>PartialDatesAndTimes</a></td></tr>
<tr><td style='text-align: center;'>28</td><td>Date of Birth (Father)--Edit Flag</td><td style='color: darkviolet'>FAGE_BYPASS <img height='16' img src='usflag.png' alt='FAGE_BYPASS'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>birthDate.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-BypassEditFlag.html'>bypassEditFlag</a>].value</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-date-of-birth-edit-flags-vr.html'>ValueSetDateOfBirthEditFlagsVitalRecords</a>, <br />See <a href='usage.html#handling-of-edit-flags'>Handling of edit flags</a></td></tr>
<tr><td style='text-align: center;'>261</td><td>Father's Legal First Name</td><td>DADFNAME</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>name.given, <br />name.use = official</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>262</td><td>Father's Legal Middle Name</td><td>DADMNAME</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>name.given, <br />name.use = official</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>263</td><td>Father's Legal Last Name</td><td>DADLNAME</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>name.family, <br />name.use = official</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>264</td><td>Father's Legal Surname Suffix</td><td>DADSUFFIX</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>name.suffix, <br />name.use = official</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>266</td><td>Father's Social Security Number</td><td>DAD_SSN</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>identifier.value where system = ‘http://terminology.hl7.org/CodeSystem/v2-0203' <br />and type.coding.code=”SS”</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>277</td><td>State, U.S. Territory or Canadian Province of Birth (Father) - code</td><td>FBPLACD_ST_TER_C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-relatedperson-birthplace-vr.html'>Extension-relatedperson-birthplace-vr</a>].value[x].state</td><td style='text-align: center;'>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-states-territories-provinces-vr.html'>ValueSetStatesTerritoriesAndProvincesVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>278</td><td>Father's Country of Birth (Code)</td><td>FBPLACE_CNT_C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-relatedperson-birthplace-vr.html'>Extension-relatedperson-birthplace-vr</a>].value[x].country</td><td style='text-align: center;'>string</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-birthplace-country-vr.html'>ValueSetBirthplaceCountryVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>281</td><td>State, U.S. Territory or Canadian Province of Birth (Father) - literal</td><td>FBPLACE_ST_TER_TXT</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-relatedperson-birthplace-vr.html'>Extension-relatedperson-birthplace-vr</a>].value[x].state (expanded from 2 letter code)</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#state-literals'>StateLiterals</a></td></tr>
<tr><td style='text-align: center;'>282</td><td>Father's Country of Birth (Literal)</td><td>FBPLACE_CNTRY_TXT</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-RelatedPerson-father-natural-vr.html'>RelatedPersonFatherNaturalVitalRecords</a></td><td>extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Extension-relatedperson-birthplace-vr.html'>Extension-relatedperson-birthplace-vr</a>].value[x].country (expanded from 2 letter code)</td><td style='text-align: center;'>string</td><td>See <a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/usage.html#country-literals'>CountryLiterals</a></td></tr>
<tr><td style='text-align: center;'>354</td><td>Blank for One-Byte Field 1</td><td>PLACE1_1 <img height='16' img src='usflag.png' alt='PLACE1_1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_1].value</td><td style='text-align: center;'>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>355</td><td>Blank for One-Byte Field 2</td><td>PLACE1_2 <img height='16' img src='usflag.png' alt='PLACE1_2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_2].value</td><td style='text-align: center;'>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>356</td><td>Blank for One-Byte Field 3</td><td>PLACE1_3 <img height='16' img src='usflag.png' alt='PLACE1_3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_3].value</td><td style='text-align: center;'>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>357</td><td>Blank for One-Byte Field 4</td><td>PLACE1_4 <img height='16' img src='usflag.png' alt='PLACE1_4'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_4].value</td><td style='text-align: center;'>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>358</td><td>Blank for One-Byte Field 5</td><td>PLACE1_5 <img height='16' img src='usflag.png' alt='PLACE1_5'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_5].value</td><td style='text-align: center;'>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>359</td><td>Blank for One-Byte Field 6</td><td>PLACE1_6 <img height='16' img src='usflag.png' alt='PLACE1_6'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue1_6].value</td><td style='text-align: center;'>string(1)</td><td></td></tr>
<tr><td style='text-align: center;'>360</td><td>Blank for Eight-Byte Field 1</td><td>PLACE8_1 <img height='16' img src='usflag.png' alt='PLACE8_1'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue8_1].value</td><td style='text-align: center;'>string(8)</td><td></td></tr>
<tr><td style='text-align: center;'>361</td><td>Blank for Eight-Byte Field 2</td><td>PLACE8_2 <img height='16' img src='usflag.png' alt='PLACE8_2'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue8_2].value</td><td style='text-align: center;'>string(8)</td><td></td></tr>
<tr><td style='text-align: center;'>362</td><td>Blank for Eight-Byte Field 3</td><td>PLACE8_3 <img height='16' img src='usflag.png' alt='PLACE8_3'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue8_3].value</td><td style='text-align: center;'>string(8)</td><td></td></tr>
<tr><td style='text-align: center;'>363</td><td>Blank for Twenty-Byte Field</td><td>PLACE20 <img height='16' img src='usflag.png' alt='PLACE20'/></td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-Observation-emerging-issues-vr.html'>ObservationEmergingIssuesVitalRecords</a></td><td>component[EmergingIssue20].value</td><td style='text-align: center;'>string(20)</td><td></td></tr>
</tbody>
</table>
### Coded Content (Fetal Death Cause or Condition)

*Coded content is used for compositions from NCHS to VRO, and is not included in Jurisdiction or Provider reports

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO</td><td><a href='StructureDefinition-Bundle-document-coded-cause-of-fetal-death.html'>BundleDocumentCodedCauseOfFetalDeath</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CertificateNumber.html'>fetalDeathReportNumber</a>].value</td><td style='text-align: center;'>string(6)</td><td></td></tr>
<tr><td style='text-align: center;'>5</td><td>Auxiliary State file number</td><td>AUXNO</td><td><a href='StructureDefinition-Bundle-document-coded-cause-of-fetal-death.html'>BundleDocumentCodedCauseOfFetalDeath</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier1.html'>localFileNumber1</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Auxiliary State file number (2)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-coded-cause-of-fetal-death.html'>BundleDocumentCodedCauseOfFetalDeath</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier2.html'>localFileNumber2</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-coded-cause-of-fetal-death.html'>BundleDocumentCodedCauseOfFetalDeath</a></td><td>identifier.value</td><td style='text-align: center;'>string(12)</td><td>YYYYJJNNNNNN,  YYYY = year, JJ = jurisdiction,  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>208</td><td>Coded initiating cause/condition</td><td>ICOD</td><td><a href='StructureDefinition-Observation-coded-initiating-fetal-death-cause-or-condition.html'>ObservationCodedInitiatingFetalDeathCauseOrCondition</a></td><td>value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
<tr><td style='text-align: center;'>209</td><td>Coded other significant causes or conditions- first mentioned</td><td>OCOD1</td><td><a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a></td><td>position.value=1,  <br />value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
<tr><td style='text-align: center;'>210</td><td>Coded other significant causes or conditions- second mentioned</td><td>OCOD2</td><td><a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a></td><td>position.value=2,  <br />value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
<tr><td style='text-align: center;'>211</td><td>Coded other significant causes or conditions- third mentioned</td><td>OCOD3</td><td><a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a></td><td>position.value=3,  <br />value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
<tr><td style='text-align: center;'>212</td><td>Coded other significant causes or conditions- fourth mentioned</td><td>OCOD4</td><td><a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a></td><td>position.value=4,  <br />value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
<tr><td style='text-align: center;'>213</td><td>Coded other significant causes or conditions- fifth mentioned</td><td>OCOD5</td><td><a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a></td><td>position.value=5,  <br />value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
<tr><td style='text-align: center;'>214</td><td>Coded other significant causes or conditions- sixth mentioned</td><td>OCOD6</td><td><a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a></td><td>position.value=6,  <br />value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
<tr><td style='text-align: center;'>215</td><td>Coded other significant causes or conditions- seventh mentioned</td><td>OCOD7</td><td><a href='StructureDefinition-Observation-coded-other-fetal-death-cause-or-condition.html'>ObservationCodedOtherFetalDeathCauseOrCondition</a></td><td>position.value=7,  <br />value</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7933'>PHIN VADS - Cause of Fetal Death</a></td></tr>
</tbody>
</table>
### Coded Content (Demographic)

*Coded content is used for compositions from NCHS to VRO, and is not included in Jurisdiction or Provider reports

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO</td><td><a href='StructureDefinition-Bundle-document-demographic-coded-content.html'>BundleDocumentDemographicCodedContent</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CertificateNumber.html'>fileNumber</a>].value</td><td style='text-align: center;'>string(6)</td><td></td></tr>
<tr><td style='text-align: center;'>5</td><td>Auxiliary State file number</td><td>AUXNO</td><td><a href='StructureDefinition-Bundle-document-demographic-coded-content.html'>BundleDocumentDemographicCodedContent</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier1.html'>localFileNumber1</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Auxiliary State file number (2)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-demographic-coded-content.html'>BundleDocumentDemographicCodedContent</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier2.html'>localFileNumber2</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-demographic-coded-content.html'>BundleDocumentDemographicCodedContent</a></td><td>identifier.value</td><td style='text-align: center;'>string(12)</td><td>YYYYJJNNNNNN,  YYYY = year, JJ = jurisdiction,  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>62</td><td>Mother's Race Tabulation Variable 1E</td><td>MRACE1E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>63</td><td>Mother's Race Tabulation Variable 2E</td><td>MRACE2E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>64</td><td>Mother's Race Tabulation Variable 3E</td><td>MRACE3E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedtraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>65</td><td>Mother's Race Tabulation Variable 4E</td><td>MRACE4E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>66</td><td>Mother's Race Tabulation Variable 5E</td><td>MRACE5E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>67</td><td>Mother's Race Tabulation Variable 6E</td><td>MRACE6E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>68</td><td>Mother's Race Tabulation Variable 7E</td><td>MRACE7E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>69</td><td>Mother's Race Tabulation Variable 8E</td><td>MRACE8E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>70</td><td>Mother's Race Tabulation Variable 16C</td><td>MRACE16C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>71</td><td>Mother's Race Tabulation Variable 17C</td><td>MRACE17C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>72</td><td>Mother's Race Tabulation Variable 18C</td><td>MRACE18C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>73</td><td>Mother's Race Tabulation Variable 19C</td><td>MRACE19C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>74</td><td>Mother's Race Tabulation Variable 20C</td><td>MRACE20C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>75</td><td>Mother's Race Tabulation Variable 21C</td><td>MRACE21C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>76</td><td>Mother's Race Tabulation Variable 22C</td><td>MRACE22C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>77</td><td>Mother's Race Tabulation Variable 23C</td><td>MRACE23C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>313</td><td>Father's Race Tabulation Variable 1E</td><td>FRACE1E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>314</td><td>Father's Race Tabulation Variable 2E</td><td>FRACE2E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>315</td><td>Father's Race Tabulation Variable 3E</td><td>FRACE3E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[ThirdEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>316</td><td>Father's Race Tabulation Variable 4E</td><td>FRACE4E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FourthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>317</td><td>Father's Race Tabulation Variable 5E</td><td>FRACE5E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FifthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>318</td><td>Father's Race Tabulation Variable 6E</td><td>FRACE6E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SixthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>319</td><td>Father's Race Tabulation Variable 7E</td><td>FRACE7E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SeventhEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>320</td><td>Father's Race Tabulation Variable 8E</td><td>FRACE8E</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[EighthEditedCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>321</td><td>Father's Race Tabulation Variable 16C</td><td>FRACE16C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>322</td><td>Father's Race Tabulation Variable 17C</td><td>FRACE17C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondAmericanIndianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>323</td><td>Father's Race Tabulation Variable 18C</td><td>FRACE18C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>324</td><td>Father's Race Tabulation Variable 19C</td><td>FRACE19C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherAsianCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>325</td><td>Father's Race Tabulation Variable 20C</td><td>FRACE20C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>326</td><td>Father's Race Tabulation Variable 21C</td><td>FRACE21C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherPacificIslanderCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>327</td><td>Father's Race Tabulation Variable 22C</td><td>FRACE22C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[FirstOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>328</td><td>Father's Race Tabulation Variable 23C</td><td>FRACE23C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[SecondOtherRaceCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-race-code-vr.html'>ValueSetRaceCodeVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>329</td><td>Mother's Hispanic Code for Literal</td><td>METHNIC5C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>330</td><td>Mother's Edited Hispanic Origin Code</td><td>METHNICE</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>332</td><td>Father's Hispanic Code for Literal</td><td>FETHNIC5C</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCodeForLiteral].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>333</td><td>Father's Edited Hispanic Origin Code</td><td>FETHNICE</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-coded-race-and-ethnicity-vr.html'>ObservationCodedRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCode].value, <br />code=CodeSystemLocalObservationsCodesVitalRecords#codedraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-hispanic-origin-vr.html'>ValueSetHispanicOriginVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>34</td><td>Mother of Hispanic Origin?--Mexican</td><td>METHNIC1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicMexican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>35</td><td>Mother of Hispanic Origin?--Puerto Rican</td><td>METHNIC2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicPuertoRican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>36</td><td>Mother of Hispanic Origin?--Cuban</td><td>METHNIC3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCuban].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>37</td><td>Mother of Hispanic Origin?--Other</td><td>METHNIC4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicOther].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>38</td><td>Mother of Hispanic Origin?--Other Literal</td><td>METHNIC5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>39</td><td>Mother's Race--White</td><td>MRACE1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[White].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>40</td><td>Mother's Race--Black or African American</td><td>MRACE2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[BlackOrAfricanAmerican].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>41</td><td>Mother's Race--American Indian or Alaska Native</td><td>MRACE3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianOrAlaskanNative].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>42</td><td>Mother's Race--Asian Indian</td><td>MRACE4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AsianIndian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>43</td><td>Mother's Race--Chinese</td><td>MRACE5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Chinese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>44</td><td>Mother's Race--Filipino</td><td>MRACE6</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Filipino].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>45</td><td>Mother's Race--Japanese</td><td>MRACE7</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Japanese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>46</td><td>Mother's Race--Korean</td><td>MRACE8</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Korean].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>47</td><td>Mother's Race--Vietnamese</td><td>MRACE9</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Vietnamese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>48</td><td>Mother's Race--Other Asian</td><td>MRACE10</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>49</td><td>Mother's Race--Native Hawaiian</td><td>MRACE11</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[NativeHawaiian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>50</td><td>Mother's Race--Guamanian or Chamorro</td><td>MRACE12</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[GuamanianOrChamorro].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>51</td><td>Mother's Race--Samoan</td><td>MRACE13</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Samoan].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>52</td><td>Mother's Race--Other Pacific Islander</td><td>MRACE14</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslander].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>53</td><td>Mother's Race--Other</td><td>MRACE15</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRace].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>54</td><td>Mother's Race--First American Indian or Alaska Native Literal</td><td>MRACE16</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>55</td><td>Mother's Race--Second American Indian or Alaska Native Literal</td><td>MRACE17</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>56</td><td>Mother's Race--First Other Asian Literal</td><td>MRACE18</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>57</td><td>Mother's Race--Second Other Asian Literal</td><td>MRACE19</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>58</td><td>Mother's Race--First Other Pacific Islander Literal</td><td>MRACE20</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>59</td><td>Mother's Race--Second Other Pacific Islander Literal</td><td>MRACE21</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>60</td><td>Mother's Race--First Other Literal</td><td>MRACE22</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>61</td><td>Mother's Race--Second Other Literal</td><td>MRACE23</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityMother</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>285</td><td>Father of Hispanic Origin?--Mexican</td><td>FETHNIC1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicMexican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>286</td><td>Father of Hispanic Origin?--Puerto Rican</td><td>FETHNIC2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicPuertoRican].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>287</td><td>Father of Hispanic Origin?--Cuban</td><td>FETHNIC3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicCuban].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>288</td><td>Father of Hispanic Origin?--Other</td><td>FETHNIC4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicOther].valueCoding, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>codeable</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/ValueSet-ValueSet-yes-no-unknown-vr.html'>ValueSetYesNoUnknownVitalRecords</a></td></tr>
<tr><td style='text-align: center;'>289</td><td>Father of Hispanic Origin?--Other Literal</td><td>FETHNIC5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[HispanicLiteral].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>290</td><td>Father's Race--White</td><td>FRACE1</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[White].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>291</td><td>Father's Race--Black or African American</td><td>FRACE2</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[BlackOrAfricanAmerican].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>292</td><td>Father's Race--American Indian or Alaska Native</td><td>FRACE3</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianOrAlaskanNative].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>293</td><td>Father's Race--Asian Indian</td><td>FRACE4</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AsianIndian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>294</td><td>Father's Race--Chinese</td><td>FRACE5</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Chinese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>295</td><td>Father's Race--Filipino</td><td>FRACE6</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Filipino].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>296</td><td>Father's Race--Japanese</td><td>FRACE7</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Japanese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>297</td><td>Father's Race--Korean</td><td>FRACE8</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Korean].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>298</td><td>Father's Race--Vietnamese</td><td>FRACE9</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Vietnamese].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>299</td><td>Father's Race--Other Asian</td><td>FRACE10</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>300</td><td>Father's Race--Native Hawaiian</td><td>FRACE11</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[NativeHawaiian].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>301</td><td>Father's Race--Guamanian or Chamorro</td><td>FRACE12</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[GuamanianOrChamorro].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>302</td><td>Father's Race--Samoan</td><td>FRACE13</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[Samoan].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>303</td><td>Father's Race--Other Pacific Islander</td><td>FRACE14</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslander].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>304</td><td>Father's Race--Other</td><td>FRACE15</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRace].valueBoolean, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>boolean</td><td></td></tr>
<tr><td style='text-align: center;'>305</td><td>Father's Race--First American Indian or Alaska Native Literal</td><td>FRACE16</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>306</td><td>Father's Race--Second American Indian or Alaska Native Literal</td><td>FRACE17</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[AmericanIndianorAlaskanNativeLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>307</td><td>Father's Race--First Other Asian Literal</td><td>FRACE18</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>308</td><td>Father's Race--Second Other Asian Literal</td><td>FRACE19</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherAsianLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>309</td><td>Father's Race--First Other Pacific Islander Literal</td><td>FRACE20</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>310</td><td>Father's Race--Second Other Pacific Islander Literal</td><td>FRACE21</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherPacificIslandLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>311</td><td>Father's Race--First Other Literal</td><td>FRACE22</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral1].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
<tr><td style='text-align: center;'>312</td><td>Father's Race--Second Other Literal</td><td>FRACE23</td><td><a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-input-race-and-ethnicity-vr.html'>ObservationInputRaceAndEthnicityVitalRecords</a></td><td>component[OtherRaceLiteral2].valueString, <br />code=CodeSystemLocalObservationsCodesVitalRecords#inputraceandethnicityFather</td><td style='text-align: center;'>string</td><td></td></tr>
</tbody>
</table>
### Coded Content (Industry & Occupation)

*Coded content is used for compositions from NCHS to VRO, and is not included in Jurisdiction or Provider reports

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>3</td><td>Certificate Number</td><td>FILENO</td><td><a href='StructureDefinition-Bundle-document-coded-industry-occupation.html'>BundleDocumentCodedIndustryOccupation</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-CertificateNumber.html'>fileNumber</a>].value</td><td style='text-align: center;'>string(6)</td><td></td></tr>
<tr><td style='text-align: center;'>5</td><td>Auxiliary State file number</td><td>AUXNO</td><td><a href='StructureDefinition-Bundle-document-coded-industry-occupation.html'>BundleDocumentCodedIndustryOccupation</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier1.html'>localFileNumber1</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Auxiliary State file number (2)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-coded-industry-occupation.html'>BundleDocumentCodedIndustryOccupation</a></td><td>identifier.extension[<a href='{{site.data.fhir.ver.hl7fhirusvrcommonlibrary}}/StructureDefinition-AuxiliaryStateIdentifier2.html'>localFileNumber2</a>].value</td><td style='text-align: center;'>string(12)</td><td></td></tr>
<tr><td style='text-align: center;'>NA</td><td>Record Identifier</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Bundle-document-coded-industry-occupation.html'>BundleDocumentCodedIndustryOccupation</a></td><td>identifier.value</td><td style='text-align: center;'>string(12)</td><td>YYYYJJNNNNNN,  YYYY = year, JJ = jurisdiction,  and NNNNNN = certificate number</td></tr>
<tr><td style='text-align: center;'>269</td><td>Occupation of Mother</td><td>MOM_OC_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='MTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'></td><td>Occupation of Mother (coded)-- 2018 Standard Occupational Classification (SOC)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>valueCodeableConcept.coding[occupationCDCSOC2018], <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='MTH'</td><td style='text-align: center;'>codeable</td><td><a href='http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8068'>PHVS_Occupation_CDC_SOC2018</a></td></tr>
<tr><td style='text-align: center;'>271</td><td>Occupation of Father</td><td>DAD_OC_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='FTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'></td><td>Occupation of Father (coded)-- 2018 Standard Occupational Classification (SOC)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>valueCodeableConcept.coding[occupationCDCSOC2018], <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='FTH'</td><td style='text-align: center;'>codeable</td><td><a href='http://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8068'>PHVS_Occupation_CDC_SOC2018</a></td></tr>
<tr><td style='text-align: center;'>273</td><td>Industry of Mother</td><td>MOM_IN_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>component[odh-PastOrPresentIndustry].value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='MTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'></td><td>Industry of Mother (coded)-- North American Industry Classification System (NAICS)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>component[odh-UsualIndustry].valueCodeableConcept.coding[industryCDCNAICS2017], <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='MTH'</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8067'>PHVS_Industry_CDC_NAICS2017</a></td></tr>
<tr><td style='text-align: center;'>275</td><td>Industry of Father</td><td>DAD_IN_T</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>component[odh-PastOrPresentIndustry].value.text, <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='FTH'</td><td style='text-align: center;'>string(25)</td><td></td></tr>
<tr><td style='text-align: center;'></td><td>Industry of Father (coded)-- North American Industry Classification System (NAICS)</td><td>*NO IJE MAPPING*</td><td><a href='StructureDefinition-Observation-present-job.html'>ObservationPresentJob</a></td><td>component[odh-UsualIndustry].valueCodeableConcept.coding[industryCDCNAICS2017], <br />extension[<a href='StructureDefinition-Extension-role.html'>roleMotherOrFather</a>].value='FTH'</td><td style='text-align: center;'>codeable</td><td><a href='https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8067'>PHVS_Industry_CDC_NAICS2017</a></td></tr>
</tbody>
</table>
### Not Implemented Content

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 4%;'><b>#</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>Description</b></td>
<td style='background-color:#98c1d9; width: 16%;'><b>IJE Name*</b></td>
<td style='background-color:#98c1d9; width: 27%;'><b>Profile</b></td>
<td style='background-color:#98c1d9;'><b>Field</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 7%;'><b>Type</b></td>
<td style='background-color:#98c1d9; width: 14%;'><b>Value Set/Comments</b></td>
</tr>
<tr><td style='text-align: center;'>4</td><td>Void flag</td><td>VOID</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td>The NCHS Vital Records FHIR Messaging Implementation Guide is used to indicate that a record should be voided.</td></tr>
<tr><td style='text-align: center;'>29</td><td>Mother Married?--Ever(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>MARE</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>30</td><td>Mother Married?-- At Conception, at Delivery or any Time in Between(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>MARN</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>31</td><td>FILLER</td><td>*NO IJE MAPPING*</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>79</td><td>Mother Transferred?(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>TRAN</td><td>[not implemented]</td><td>Encounter-maternity.hospitalization.admitSource (Y if present, N if not present)</td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>83</td><td>Date of Last Prenatal Care Visit--Month(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>DOLP_MO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>84</td><td>Date of Last Prenatal Care Visit--Day(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>DOLP_DY</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>85</td><td>Date of Last Prenatal Care Visit--Year(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>DOLP_YR</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>86</td><td>Total Number of Prenatal Care Visits(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>NPREV</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>87</td><td>Total Number of Prenatal Care Visits--Edit Flag(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>NPREV_BYPASS</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>93</td><td>Mother's Weight at Delivery(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>DWGT</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>94</td><td>Mother's Weight at Delivery--Edit Flag(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>DWGT_BYPASS</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>98</td><td>Previous Other Pregnancy Outcomes(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>POPO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>101</td><td>Date of Last Other Pregnancy Outcome--Month(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>MOPO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>102</td><td>Date of Last Other Pregnancy Outcome--Year(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>YOPO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>114</td><td>Risk Factors--Previous Preterm Births(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>PPB</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>115</td><td>Risk Factors--Poor Pregnancy Outcomes(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>PPO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>116</td><td>Risk Factors--Vaginal Bleeding  (RECOMMENDED DELETION EFFECTIVE 2004)  (NCHS DELETED THIS ITEM EFFECTIVE 2011)</td><td>VB</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>121</td><td>Infections Present--Gonorrhea(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>GON</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>122</td><td>Infections Present--Syphilis(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>SYPH</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>123</td><td>Infections Present--Herpes Simplex (HSV)  (RECOMMENDED DELETION EFFECTIVE 2004) (NCHS DELETED THIS ITEM EFFECTIVE 2011)</td><td>HSV</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>124</td><td>Infections Present--Chlamydia(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>CHAM</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>125</td><td>Infections Present--Listeria(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>LM</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>126</td><td>Infections Present--Group B streptococcus(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>GBS</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>127</td><td>Infections Present--Cytomeglovirus(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>CMV</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>128</td><td>Infections Present--Parvo virus(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>B19</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>129</td><td>Infections Present--Toxoplasmosis(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>TOXO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>130</td><td>Infections Present--Other(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>OTHERI</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>131</td><td>Method of Delivery--Attempted Forceps (NCHS DELETED THIS ITEM EFFECTIVE 2011)</td><td>ATTF</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>132</td><td>Method of Delivery--Attempted Vacuum (NCHS DELETED THIS ITEM EFFECTIVE 2011)</td><td>ATTV</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>136</td><td>Method of Delivery--Hysterotomy/Hysterectomy(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>HYST</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>137</td><td>Maternal Morbidity--Maternal Transfusion(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>MTR</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>138</td><td>Maternal Morbidity--Perineal Laceration(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>PLAC</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>140</td><td>Maternal Morbidity--Unplanned Hysterectomy(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>UHYS</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>142</td><td>Maternal Morbidity--Unplanned Operation(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>UOPR</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>154</td><td>Matching Number</td><td>MATCH</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>156</td><td>Congenital Anomalies of the Fetus--Anencephaly(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>ANEN</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>157</td><td>Congenital Anomalies of the Fetus--Meningomyelocele/Spina Bifida(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>MNSB</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>158</td><td>Congenital Anomalies of the Fetus--Cyanotic congenital heart disease(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>CCHD</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>159</td><td>Congenital Anomalies of the Fetus--Congenital diaphragmatic hernia(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>CDH</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>160</td><td>Congenital Anomalies of the Fetus--Omphalocele(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>OMPH</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>161</td><td>Congenital Anomalies of the Fetus--Gastroschisis(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>GAST</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>162</td><td>Congenital Anomalies of the Fetus--Limb Reduction Defect(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>LIMB</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>163</td><td>Congenital Anomalies of the Fetus--Cleft Lip with or without Cleft Palate(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>CL</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>164</td><td>Congenital Anomalies of the Fetus--Cleft Palate Alone(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>CP</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>165</td><td>Congenital Anomalies of the Fetus--Down Syndrome(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>DOWT</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>166</td><td>Congenital Anomalies of the Fetus--Suspected Chromosomal disorder(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>CDIT</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>167</td><td>Congenital Anomalies of the Fetus--Hypospadias(NCHS DELETED THIS ITEM EFFECTIVE 2014/2015)</td><td>HYPO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>168</td><td>NCHS USE ONLY: Receipt date -- Year</td><td>R_YR</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>169</td><td>NCHS USE ONLY: Receipt date -- Month</td><td>R_MO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>170</td><td>NCHS USE ONLY: Receipt date -- Day</td><td>R_DY</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>179</td><td>FILLER</td><td>*NO IJE MAPPING*</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>216</td><td>Infections Present--Genital Herpes (Subcategory in position 504)</td><td>HSV1</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>217</td><td>Infections Present--HIV</td><td>HIV</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>218</td><td>Alcohol Used?</td><td>ALCOHOL</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>223</td><td>Fetus Legal Name--Alias</td><td>ALIAS</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>237</td><td>Place of Delivery Longitude</td><td>LONG_D</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>238</td><td>Place of Delivery Latitude</td><td>LAT_D</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>259</td><td>Mother's Residence Longitude</td><td>LONG</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>260</td><td>Mother's Residence Latitude</td><td>LAT</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>267</td><td>Mother's Age (Calculated)</td><td>MAGE_CALC</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>268</td><td>Father's Age (Calculated)</td><td>FAGE_CALC</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>270</td><td>Occupation of Mother (coded)</td><td>MOM_OC_C</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>272</td><td>Occupation of Father (coded)</td><td>DAD_OC_C</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>274</td><td>Industry of Mother (coded)</td><td>MOM_IN_C</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>276</td><td>Industry of Father (coded)</td><td>DAD_IN_C</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>331</td><td>Mother's Bridged Race - NCHS Code</td><td>MRACEBG_C</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>334</td><td>Father's Bridged Race - NCHS Code</td><td>FRACEBG_C</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>335</td><td>Mother's Hispanic Origin - Specify</td><td>METHNIC_T</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>336</td><td>Mother's Race - Specify</td><td>MRACE_T</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>337</td><td>Father's Hispanic Origin - Specify</td><td>FETHNIC_T</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>338</td><td>Father's Race - Specify</td><td>FRACE_T</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>343</td><td>Informant's First Name</td><td>INFORMFST</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>344</td><td>Informant's Middle Name</td><td>INFORMMID</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>345</td><td>Informant's Last Name</td><td>INFORMLST</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>346</td><td>Informant's Relationship to Fetus</td><td>INFORMRELATE</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>350</td><td>Date Filed by Registrar--Year</td><td>REGISTER_YR</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>351</td><td>Date Filed by Registrar--Month</td><td>REGISTER_MO</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>352</td><td>Date Filed by Registrar--Day</td><td>REGISTER_DY</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>353</td><td>Replacement (amended) Record</td><td>REPLACE (*deprecated*)</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td>Deprecated, see <a href='https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/message.html#successful-death-record-submission'>VRFM</a></td></tr>
<tr><td style='text-align: center;'>364</td><td>Blank for future expansion</td><td>BLANK</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
<tr><td style='text-align: center;'>365</td><td>Blank for Jurisdictional Use Only</td><td>BLANK2</td><td>[not implemented]</td><td></td><td style='text-align: center;'></td><td></td></tr>
</tbody>
</table>


---

