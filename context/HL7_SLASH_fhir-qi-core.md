// File: input/_resources/README.md

This folder contains 'private' resources used for publishing and hidden from the reader. Won't show up in the IG.


---

// File: input/pages/changes.md

{: toc}

{: #changes}

This page lists the change history for each version of QI-Core.


### STU7 Publication (7.0.0)

1. Added reasonCode and doNotPerform to DeviceRequest negation examples ([FHIR-46669](https://jira.hl7.org/browse/FHIR-46669)) Applied ([here](DeviceRequest-negation-example.html)) and ([here](DeviceRequest-negation-with-code-example.html))  
1. QDM-to-QICore Mapping change Average Blood Pressure to PhysicalExam rather than AssessmentPerformed ([FHIR-46662](https://jira.hl7.org/browse/FHIR-46662)) Applied ([here](qdm-to-qicore.html))
1. Add hyperlink to Using CQL with FHIR IG ([FHIR-47411](https://jira.hl7.org/browse/FHIR-47411)) Applied ([here](modelinfo.html))
1. 13.12.1 Resource Profile: QICore wording changes  ([FHIR-47540](https://jira.hl7.org/browse/FHIR-47540)) Applied ([here](StrucutreDefinition-qicore-condition-encounter-diagnosis.html)) 

### STU7-ballot (7.0.0)

1. Should have a CapablityStatement to describe the capabilities of a deployed and configured solution that follows this IG. - 2018-Jan QI-Core #29 ([FHIR-14994](https://jira.hl7.org/browse/FHIR-14994)) Applied ([here](index.html#summary-of-conformance-requirements))
1. It'd be helpful to list a default retriever for each profile ([FHIR-42084](https://jira.hl7.org/browse/FHIR-42084)) Applied in each profile ([here](profiles.html))
1. Consider refactoring to Using CQL IG ([FHIR-43570](https://jira.hl7.org/browse/FHIR-43570)) Applied ([here](modelinfo.html)) and ([here](patterns.html)) and ([here](negation.html))
1. MedicationNotRequested binding is incorrect ([FHIR-44737](https://jira.hl7.org/browse/FHIR-44737)) Applied ([here](StructureDefinition-qicore-medicationnotrequested.html))
1. MedicationDispenseDeclined negation pattern incorrectly allows for medication reference ([FHIR-44738](https://jira.hl7.org/browse/FHIR-44738)) Applied ([here](StructureDefinition-qicore-medicationdispensedeclined.html))
1. TLS 1.1 has been deprecated ([FHIR-44743](https://jira.hl7.org/browse/FHIR-44743)) Applied ([here](index.html#privacy-security-and-consent))
1. Link to Terminology "guidance section" doesn't work as intended ([FHIR-44808](https://jira.hl7.org/browse/FHIR-44808)) Applied ([here](terminology.html))
1. Add reference to 3 new US Core observation profiles in QI-Core ([FHIR-45359](https://jira.hl7.org/browse/FHIR-45359)) Applied ([here](profiles.html))
1. Update QI-Core references to USCDI consistent with US Core 7.0 approach ([FHIR-45360](https://jira.hl7.org/browse/FHIR-45360)) Applied in each profile ([here](profiles.html))
1. Update qiqore-notDoneValueSet Extension ([FHIR-45368](https://jira.hl7.org/browse/FHIR-45368)) Applied ([here](extensions.html))
1. Update QI-Core to use extensions pack ([FHIR-45369](https://jira.hl7.org/browse/FHIR-45369)) Applied ([here](extensions.html))
1. Update AllergyIntolerance, CarePlan, CareTeam, and Coverage profiles to address US Core 7.0 ([FHIR-45395](https://jira.hl7.org/browse/FHIR-45395)) Applied ([here](StructureDefinition-qicore-careplan.html)) and ([here](StructureDefinition-qicore-careteam.html))
1. Update QI-Core Condition Encounter Diagnosis and QI-Core Condition Problems and Health Concerns Profiles to build off of US Core 7.0 ([FHIR-45396](https://jira.hl7.org/browse/FHIR-45396)) Applied ([here](StructureDefinition-qicore-condition-problems-health-concerns.html)) and ([here](StructureDefinition-qicore-condition-encounter-diagnosis.html))
1. Update QICore DiagnosticReport Profile for Laboratory Results Reporting and QI Core DiagnosticReport Profile for Report and Note Exchange to reflect updates in US Core 7.0's respective profile ([FHIR-45397](https://jira.hl7.org/browse/FHIR-45397)) Applied ([here](StructureDefinition-qicore-diagnosticreport-lab.html))
1. Update QICore Encounter profile to build off of US Core 7.0 Encounter profile ([FHIR-45398](https://jira.hl7.org/browse/FHIR-45398)) Applied ([here](StructureDefinition-qicore-encounter.html))
1. Update QI-Core Goal profile to reflect US Core 7.0 Goal profile ([FHIR-45399](https://jira.hl7.org/browse/FHIR-45399)) Applied ([here](StructureDefinition-qicore-goal.html))
1. Update QI-Core Immunization, QI-Core ImmunizationNotDone profiles to build from US 7.0 Core Immunization Profile ([FHIR-45400](https://jira.hl7.org/browse/FHIR-45400)) Applied ([here](StructureDefinition-qicore-immunizationnotdone.html))
1. Update QI-Core Location profile consistently with US Core version 7.0 Location Profile ([FHIR-45401](https://jira.hl7.org/browse/FHIR-45401)) Applied ([here](StructureDefinition-qicore-location.html))
1. Update QI-Core Medication and QI-Core MedicationDispense and QI-Core MedicationDispenseDeclined profiles to build from US Core 7.0 Medication and MedicationDispense profiles ([FHIR-45402](https://jira.hl7.org/browse/FHIR-45402)) Applied ([here](StructureDefinition-qicore-medicationdispense.html)) and ([here](StructureDefinition-qicore-medicationdispensedeclined.html))
1. Update QI-Core MedicationRequest and QI-Core MedicationNotRequested to changes reflected in US Core 7.0 MedicationRequest Profile ([FHIR-45403](https://jira.hl7.org/browse/FHIR-45403)) Applied ([here](StructureDefinition-qicore-medicationrequest.html)) and ([here](StructureDefinition-qicore-medicationnotrequested.html))
1. update QI-Core SimpleObservation and ObservationCancelled to reflect changes in US Core 7.0 ([FHIR-45415](https://jira.hl7.org/browse/FHIR-45415)) Applied ([here](StructureDefinition-qicore-simple-observation.html)) and ([here](StructureDefinition-qicore-observationcancelled.html))
1. Update QI-Core ObservationClinicalResult and QI-Core LaboratoryResultObservation Profile to reflect changes in US Core 7.0 ([FHIR-45416](https://jira.hl7.org/browse/FHIR-45416)) Applied ([here](StructureDefinition-qicore-observation-clinical-result.html)) and ([here](StructureDefinition-qicore-observation-lab.html))
1. Update QI-Core ObservationScreeningAssessment to reflect changes in US Core 7.0 ([FHIR-45417](https://jira.hl7.org/browse/FHIR-45417)) Applied ([here](StructureDefinition-qicore-observation-screening-assessment.html))
1. Update QI-Core Organization Profile to reflect changes in US Core 7.0 ([FHIR-45419](https://jira.hl7.org/browse/FHIR-45419)) Applied ([here](StructureDefinition-qicore-organization.html))
1. Update QI-Core Patient profile to align with changes in US Core 7.0 ([FHIR-45424](https://jira.hl7.org/browse/FHIR-45424)) Applied ([here](StructureDefinition-qicore-patient.html))
1. Update QI-Core Practitioner profile to reflect changes in US Core 7.0 ([FHIR-45425](https://jira.hl7.org/browse/FHIR-45425)) Applied ([here](StructureDefinition-qicore-practitioner.html))
1. Update QI-Core PractitionerRole profile to reflect changes in US Core 7.0 ([FHIR-45426](https://jira.hl7.org/browse/FHIR-45426)) Applied ([here](StructureDefinition-qicore-practitionerrole.html))
1. Update QI-Core Related Person to reflect changes in US Core 7.0 ([FHIR-45427](https://jira.hl7.org/browse/FHIR-45427)) Applied ([here](StructureDefinition-qicore-relatedperson.html))
1. Update QI-Core Procedure and ProcedureNotDone to reference US Core 7.0 respective profile ([FHIR-45429](https://jira.hl7.org/browse/FHIR-45429)) Applied ([here](StructureDefinition-qicore-procedure.html)) and ([here](StructureDefinition-qicore-procedurenotdone.html))
1. Update QI-Core QuestionnaireResponse profile to align with updated US Core 7.0 respective profile ([FHIR-45430](https://jira.hl7.org/browse/FHIR-45430)) Applied ([here](StructureDefinition-qicore-questionnaireresponse.html))
1. Update QI-Core ServiceRequest and QI-Core ServiceNotRequested to align with changes to US Core 7.0 respective profiles ([FHIR-45431](https://jira.hl7.org/browse/FHIR-45431)) Applied ([here](StructureDefinition-qicore-servicerequest.html)) and ([here](StructureDefinition-qicore-servicenotrequested.html))
1. Update QDM to QI-Core Mapping Tables to reference changes in QI-Core 7.0 ([FHIR-45597](https://jira.hl7.org/browse/FHIR-45597)) Applied ([here](qdm-to-qicore.html))
1. Limit subject reference in AdverseEvent to patient ([FHIR-45693](https://jira.hl7.org/browse/FHIR-45693)) Applied ([here](StructureDefinition-qicore-adverseevent.html))
1. Update Negation page to include 3 new US Core observation profiles ([FHIR-45722](https://jira.hl7.org/browse/FHIR-45722)) Applied ([here](negation.html))
1. Update landing page for version 7.0 ([FHIR-45947](https://jira.hl7.org/browse/FHIR-45947)) Applied ([here](index.html))
1. Move Negation Value Set to THO ([FHIR-45957](https://jira.hl7.org/browse/FHIR-45957)) Applied ([here](ValueSet-qicore-negation-reason.html))
1. Update QI-Core Claim to include key elements for present on admission and principal diagnosis ([FHIR-45959](https://jira.hl7.org/browse/FHIR-45959)) Applied ([here](StructureDefinition-qicore-claim.html))
1. Add (QI) tags to QI-Core profile elements used in test FHIR measures ([FHIR-46015](https://jira.hl7.org/browse/FHIR-46015)) Applied in each profile ([here](profiles.html))
1. Add list of QI-Core-flagged elements to the narrative ([FHIR-46030](https://jira.hl7.org/browse/FHIR-46030)) Applied in each profile ([here](profiles.html))
1. QICore MedicationRequest prohibits reportedBoolean ([FHIR-46040](https://jira.hl7.org/browse/FHIR-46040)) Applied ([here](StructureDefinition-qicore-medicationrequest.html)) 
1. Update medication[x] content across not done for reason medication actions to assure consistency ([FHIR-46291](https://jira.hl7.org/browse/FHIR-46291)) Applied ([here](StructureDefinition-qicore-medicationnotrequested.html)) and ([here](StructureDefinition-qicore-medicationadministrationnotdone.html)) and ([here](StructureDefinition-qicore-medicationdispensedeclined.html)) 
1. QICoreCommunicationRequest description text change ([FHIR-46654](https://jira.hl7.org/browse/FHIR-46654)) Applied ([here](StructureDefinition-qicore-task.html))
1. Remove "ADDITIONAL USCDI" indicator ([FHIR-46657](https://jira.hl7.org/browse/FHIR-46657)) Applied ([here](StructureDefinition-qicore-medicationnotrequested.html)) and ([here](StructureDefinition-qicore-medicationrequest.html))
1. QICoreTask description text change ([FHIR-46659](https://jira.hl7.org/browse/FHIR-46659)) Applied ([here](StructureDefinition-qicore-task.html))
1. Update to QI Core Profile Headings w/Current Version ([FHIR-47398](https://jira.hl7.org/browse/FHIR-47398)) Applied ([here](profiles.html))
1. Correct duplicate content error from MustSupport Flag section ([FHIR-47407](https://jira.hl7.org/browse/FHIR-47407)) Applied ([here](index.html#mustsupport-flag)) 
1. Removed performer items, added reasonCode to procedure negation examples ([FHIR-46670](https://jira.hl7.org/browse/FHIR-46670)) Applied ([here](Procedure-negation-with-code-example.html)) and ([here](Procedure-negation-example.html))

### STU6 Release (6.0.0)

1. QICore Simple Observation Profile - removed additional subjects ([FHIR-41755](https://jira.hl7.org/browse/FHIR-41755))
1. QI-Core is spelled various ways throughout the implementation guide ([FHIR-41783](https://jira.hl7.org/browse/FHIR-41783))
1. Technical correction: remove "`" at the end of the sentence. ([FHIR-41784](https://jira.hl7.org/browse/FHIR-41784))
1. The first sentence of bullet point 1 in 1.0.1 must be updated ([FHIR-41786](https://jira.hl7.org/browse/FHIR-41786))
1. Add a space between "support" and "(vMR)"([FHIR-41787](https://jira.hl7.org/browse/FHIR-41787))
1. Remove comma after "data" ([FHIR-41788](https://jira.hl7.org/browse/FHIR-41788))
1. Consider capitalizing "url" to "URL" throughout the entire implementation guide. ([FHIR-41789](https://jira.hl7.org/browse/FHIR-41789))
1. Are any of these duplicates in the table in 8.7? ([FHIR-41790](https://jira.hl7.org/browse/FHIR-41790))
1. 1.4 Relevance of QI-Core Profiles to Authors ([FHIR-41974](https://jira.hl7.org/browse/FHIR-41974))
1. 1.5 Scope ([FHIR-41975](https://jira.hl7.org/browse/FHIR-41975))
1. 1.5 Scope ([FHIR-41976](https://jira.hl7.org/browse/FHIR-41976))
1. 1.5 Scope ([FHIR-41978](https://jira.hl7.org/browse/FHIR-41978))
1. 1.6 Privacy, Security, and Consent ([FHIR-41979](https://jira.hl7.org/browse/FHIR-41979))
1. 1.6 Privacy, Security, and Consent ([FHIR-41980](https://jira.hl7.org/browse/FHIR-41980))
1. 1.6 Privacy, Security, and Consent ([FHIR-41981](https://jira.hl7.org/browse/FHIR-41981))
1. 1.7 Provenance ([FHIR-41982](https://jira.hl7.org/browse/FHIR-41982))
1. 1.8 Relationship to Other Initiatives ([FHIR-41983](https://jira.hl7.org/browse/FHIR-41983))
1. 1.8 Relationship to Other Initiatives ([FHIR-41984](https://jira.hl7.org/browse/FHIR-41984))
1. 1.11 MustSupport Flag ([FHIR-41987](https://jira.hl7.org/browse/FHIR-41987))
1. 1.11 MustSupport Flag ([FHIR-41988](https://jira.hl7.org/browse/FHIR-41988))
1. 1.11 MustSupport Flag ([FHIR-41989](https://jira.hl7.org/browse/FHIR-41989))
1. 1.11 MustSupport Flag ([FHIR-41991](https://jira.hl7.org/browse/FHIR-41991))
1. 1.13.3 Negation Rationale ([FHIR-41994](https://jira.hl7.org/browse/FHIR-41994))
1. 1.13.3 Negation Rationale ([FHIR-41995](https://jira.hl7.org/browse/FHIR-41995))
1. 1.13.4 Guidance for the use of Negation Profiles ([FHIR-41996](https://jira.hl7.org/browse/FHIR-41996))
1. Value Sets ([FHIR-41997](https://jira.hl7.org/browse/FHIR-41997))
1. 1.13.4 Guidance for the use of Negation Profiles ([FHIR-41999](https://jira.hl7.org/browse/FHIR-41999))
1. 1.13.4 Guidance for the use of Negation Profiles ([FHIR-42000](https://jira.hl7.org/browse/FHIR-42000))
1. 1.13.4 Guidance for the use of Negation Profiles ([FHIR-42001](https://jira.hl7.org/browse/FHIR-42001))
1. 1.13.4 Guidance for the use of Negation Profiles ([FHIR-42002](https://jira.hl7.org/browse/FHIR-42002))
1. NutritionIntake profile should more closely address the FHIR R5 NutritionIntake modeling ([FHIR-42009](https://jira.hl7.org/browse/FHIR-42009))
1. onAdmission required value set shoud use QICore Present On Admission Codes ([FHIR-42054](https://jira.hl7.org/browse/FHIR-42054))
1. Pregnancy Status Profile Needs More Detail ([FHIR-42056](https://jira.hl7.org/browse/FHIR-42056))
1. Typo in Blood Pressure Profile ([FHIR-42057](https://jira.hl7.org/browse/FHIR-42057))
1. Typo in Encounter-Related Diagnoses and Procedures ([FHIR-42058](https://jira.hl7.org/browse/FHIR-42058))
1. Provide Additional Guidance on Negation Profiles ([FHIR-42099](https://jira.hl7.org/browse/FHIR-42099))
1. Remove Resource Rows from Profile Table ([FHIR-42100](https://jira.hl7.org/browse/FHIR-42100))
1. Profile Table Typo: DiagnositcReport ([FHIR-42101](https://jira.hl7.org/browse/FHIR-42101))
1. Links to lines of code on GitHub should be targeted to a commit or release ([FHIR-42153](https://jira.hl7.org/browse/FHIR-42153))
1. Multiple issues with specification of QICore Nutrition Intake profile ([FHIR-42158](https://jira.hl7.org/browse/FHIR-42158))
1. Typos found in Quality Data Model (QDM)v5.6 to QI-Core R6 Mapping ([FHIR-42370](https://jira.hl7.org/browse/FHIR-42370))
1. Typo in 8.8 IP Statement ([FHIR-42371](https://jira.hl7.org/browse/FHIR-42371))
1. Bad URL link in 5 QI-Core Extensions ([FHIR-42372](https://jira.hl7.org/browse/FHIR-42372))
1. Typos in 9.12.3 Encounter-Related Diagnoses and Procedures ([FHIR-42375](https://jira.hl7.org/browse/FHIR-42375))
1. Bolding of "SHALLs" ([FHIR-42406](https://jira.hl7.org/browse/FHIR-42406))
1. Add space between "patient" and "It" ([FHIR-42407](https://jira.hl7.org/browse/FHIR-42407))
1. US Core is spelled "US Core" and "USCore" throughout the implementation guide. ([FHIR-42408](https://jira.hl7.org/browse/FHIR-42408))
1. Change "inherit" to "inherited" in the first sentence of 2.2. ([FHIR-42409](https://jira.hl7.org/browse/FHIR-42409))
1. Broken Links or Sign In Required ([FHIR-42411](https://jira.hl7.org/browse/FHIR-42411))
1. Definition of "QICore Reasons Rejecting Goal" in 6.1 ([FHIR-42412](https://jira.hl7.org/browse/FHIR-42412))
1. Add space between "i.e.," and "no" in last row of table in 9.4 ([FHIR-42415](https://jira.hl7.org/browse/FHIR-42415))
1. Either parenthesis is included in error after the word "individual/organization" or the other half is missing in last row of 9.5.3. ([FHIR-42416](https://jira.hl7.org/browse/FHIR-42416))
1. Remove double space between "etc." and "The following" in the first paragraph of 9.8. ([FHIR-42417](https://jira.hl7.org/browse/FHIR-42417))
1. Regarding the sentence, "Mere disclosure of information would be considered a Communication."...would this be an Encounter, if it's patient to practitioner? ([FHIR-42421](https://jira.hl7.org/browse/FHIR-42421))
1. Remove sentence in 9.9 ([FHIR-42422](https://jira.hl7.org/browse/FHIR-42422))
1. Remove double space between "Immunization, Administered." and "The Immunization profile". ([FHIR-42426](https://jira.hl7.org/browse/FHIR-42426))
1. the comma after "record" should be a period ([FHIR-42427](https://jira.hl7.org/browse/FHIR-42427))
1. "In" should be lowercase ([FHIR-42429](https://jira.hl7.org/browse/FHIR-42429))
1. Should skilled nursing facilities, CBRFs, outpatient surgery centers, etc. be included in the list? ([FHIR-42432](https://jira.hl7.org/browse/FHIR-42432))
1. Remove extra space between "necessary" and "The" ([FHIR-42433](https://jira.hl7.org/browse/FHIR-42433))
1. Change "self-prescribed" to "self-reported" throughout 9.18.3. ([FHIR-42434](https://jira.hl7.org/browse/FHIR-42434))
1. Expand list of examples ([FHIR-42437](https://jira.hl7.org/browse/FHIR-42437))
1. Remove extra space between sentences in 9.21.2.  ([FHIR-42438](https://jira.hl7.org/browse/FHIR-42438))
1. Change "existing" to "exist" ([FHIR-42439](https://jira.hl7.org/browse/FHIR-42439))
1. Add "(AE)" to the sentence ([FHIR-42440](https://jira.hl7.org/browse/FHIR-42440))
1. Change "assesment" to "assessment" in two places in 11.0.5: ([FHIR-42442](https://jira.hl7.org/browse/FHIR-42442))
1. Change "individuals" to "individual's" in two places in 11.0.5: ([FHIR-42444](https://jira.hl7.org/browse/FHIR-42444))
1. Is it supposed to be "valueset" instead of "valuset"? ([FHIR-42445](https://jira.hl7.org/browse/FHIR-42445))
1. Change "Inhalent" to "Inhalant" ([FHIR-42446](https://jira.hl7.org/browse/FHIR-42446))
1. Change "appropiateness" to "appropriateness" in two places in 11.0.5 ([FHIR-42667](https://jira.hl7.org/browse/FHIR-42667))
1. Develop QI-Core profile based on ODH ([FHIR-42448](https://jira.hl7.org/browse/FHIR-42448))
1. Remove QI-Core specific Must Support flags ([FHIR-42889](https://jira.hl7.org/browse/FHIR-42889))
1. Cut-and-paste errors in QDM to QI-Core mapping table ([FHIR-42993](https://jira.hl7.org/browse/FHIR-42993))
1. QDM to QI-Core Mapping section 9.22.1 - Modify based on FHIR-42158 resolution ([FHIR-42987](https://jira.hl7.org/browse/FHIR-42987))
1. Relax cardinality for specific elements to stay with US Core cardinality assignments ([FHIR-43010](https://jira.hl7.org/browse/FHIR-43010))
1. Correct QDM Substance mapping to Observation ([FHIR-44605](https://jira.hl7.org/browse/FHIR-44605))
1. Correct mapping for prinicpal procedure ([FHIR-44835](https://jira.hl7.org/browse/FHIR-44835))




### STU6-ballot (6.0.0)

1. History page is broken/absent ([FHIR-37970](https://jira.hl7.org/browse/FHIR-37970))
1. Provide guidance re: convention for differentiating admission from arrival time ([FHIR-40547](https://jira.hl7.org/browse/FHIR-40547))
1. Remove Must Supports and Adverse Event Profile ([FHIR-41263](https://jira.hl7.org/browse/FHIR-41263))
1. remove Must Support for Encounter.diagnosis and its respective elements ([FHIR-41265](https://jira.hl7.org/browse/FHIR-41265))
1. Round out ODH example ([FHIR-41286](https://jira.hl7.org/browse/FHIR-41286))
1. Reference ODH in Profiles and Extensions ([FHIR-41287](https://jira.hl7.org/browse/FHIR-41287))
1. Create extension profile for NutritionIntake ([FHIR-41338](https://jira.hl7.org/browse/FHIR-41338))
1. Adjust QI-Core AllergyIntolerance Must Supports ([FHIR-41461](https://jira.hl7.org/browse/FHIR-41461))
1. Adjust QI-Core Communication must supports ([FHIR-41462](https://jira.hl7.org/browse/FHIR-41462))
1. Adjust QI-Core CommunicationNotDone must supports ([FHIR-41463](https://jira.hl7.org/browse/FHIR-41463))
1. Adjust QI-Core Condition Problems Health Concerns must supports ([FHIR-41464](https://jira.hl7.org/browse/FHIR-41464))
1. Adjust QI-Core Coverage must supports ([FHIR-41465](https://jira.hl7.org/browse/FHIR-41465))
1. Adjust QI-Core Device Not Requested must supports ([FHIR-41466](https://jira.hl7.org/browse/FHIR-41466))
1. Adjust QI-Core Device Request must supports ([FHIR-41467](https://jira.hl7.org/browse/FHIR-41467))
1. Adjust QI-Core Immunization must supports  ([FHIR-41468](https://jira.hl7.org/browse/FHIR-41468))
1. Adjust QI-Core Laboratory Result Observation must supports ([FHIR-41469](https://jira.hl7.org/browse/FHIR-41469))
1. Adjust QI-Core Medication Not Requested must supports  ([FHIR-41470](https://jira.hl7.org/browse/FHIR-41470))
1. Adjust QI-Core Medication Administration must supports ([FHIR-41471](https://jira.hl7.org/browse/FHIR-41471))
1. Adjust QI-Core Medication Administration Not Done must supports ([FHIR-41472](https://jira.hl7.org/browse/FHIR-41472))
1. Adjust QI-Core Medication Dispense must supports ([FHIR-41473](https://jira.hl7.org/browse/FHIR-41473))
1. Adjust QI-Core Medication Request must supports ([FHIR-41474](https://jira.hl7.org/browse/FHIR-41474))
1. Adjust QI-Core Observation must supports ([FHIR-41475](https://jira.hl7.org/browse/FHIR-41475))
1. Adjust QI-Core Observation Cancelled must supports ([FHIR-41476](https://jira.hl7.org/browse/FHIR-41476))
1. Adjust QI-Core Observation Clinical Test Result must supports ([FHIR-41477](https://jira.hl7.org/browse/FHIR-41477))
1. Adjust QI-Core Patient must supports ([FHIR-41479](https://jira.hl7.org/browse/FHIR-41479))
1. Adjust QI-Core Procedure must supports ([FHIR-41480](https://jira.hl7.org/browse/FHIR-41480))
1. Adjust QI-Core Procedure Not Done must supports ([FHIR-41481](https://jira.hl7.org/browse/FHIR-41481))
1. Adjust QI-Core Service Not Requested must supports ([FHIR-41482](https://jira.hl7.org/browse/FHIR-41482))
1. Adjust QI-Core ServiceRequest must supports ([FHIR-41483](https://jira.hl7.org/browse/FHIR-41483))
1. Add MS elements to QI-Core Claim profile ([FHIR-41505](https://jira.hl7.org/browse/FHIR-41505))
1. Update QI-Core Medication Dispense Declined to align with US Core and USCDI ([FHIR-41511](https://jira.hl7.org/browse/FHIR-41511))
1. Remove Observation Imaging from QI-Core 6.0 (merged with Clinical Result in US Core 6.1.0 ([FHIR-41525](https://jira.hl7.org/browse/FHIR-41525))
1. Update QI-Core Observation Survey to US Core 6.1.0 Observation Screening Assessment ([FHIR-41526](https://jira.hl7.org/browse/FHIR-41526))
1. Update QICore ConditionEncounterDiagnosis to US Core ConditionEncounterDiagnosis and remove extraneous elements ([FHIR-41527](https://jira.hl7.org/browse/FHIR-41527))
1. QI Core Version 6.0 ImmunizationNotDone Update recommendations ([FHIR-41528](https://jira.hl7.org/browse/FHIR-41528))
1. Remove QI-Core Specimen profile and inherit new US Core Specimen profile ([FHIR-41530](https://jira.hl7.org/browse/FHIR-41530))
1. Update QI-Core CarePlan Profile consistent with US Core 6.1.0 ([FHIR-41533](https://jira.hl7.org/browse/FHIR-41533))
1. Update QI-Core CareTeam to align with US Core 6.1.0 and simplify ([FHIR-41534](https://jira.hl7.org/browse/FHIR-41534))
1. Update QI-Core DiagnosticReportLab to align with US Core 6.1.0 ([FHIR-41535](https://jira.hl7.org/browse/FHIR-41535))
1. Update QI-Core DiagnosticProfileforReportandNoteExchange ([FHIR-41536](https://jira.hl7.org/browse/FHIR-41536))
1. Update QI-Core Goal profile to align with US Core 6.1.0 and to simplify ([FHIR-41537](https://jira.hl7.org/browse/FHIR-41537))
1. Update QI-Core to align with US Core Location profile ([FHIR-41538](https://jira.hl7.org/browse/FHIR-41538))
1. Update QI-Core Medication profile to align with US Core 6.1.0 ([FHIR-41539](https://jira.hl7.org/browse/FHIR-41539))
1. Update QI-Core Organization Profile to align with US Core 6.1.0 ([FHIR-41540](https://jira.hl7.org/browse/FHIR-41540))
1. Update QI-Core Practitioner profile to align with US Core 6.1.0  ([FHIR-41541](https://jira.hl7.org/browse/FHIR-41541))
1. Update QI-Core PractitionerRole profile to align with US Core 6.1.0 ([FHIR-41542](https://jira.hl7.org/browse/FHIR-41542))
1. Update QI-Core QuestionnaireResponse profile to align with US Core 6.1.0 ([FHIR-41543](https://jira.hl7.org/browse/FHIR-41543))
1. Update QI-Core RelatedPerson profile to align with US Core 6.1.0 ([FHIR-41544](https://jira.hl7.org/browse/FHIR-41544))
1. Include Question to Balloters in QI-Core September Ballot ([FHIR-41545](https://jira.hl7.org/browse/FHIR-41545))
1. Typo in 11.79.1 AllergyIntolerance Example headers ([FHIR-41555](https://jira.hl7.org/browse/FHIR-41555))
1. Update QI-Core QDM to QI-Core mapping section for QI-Core 6.0 ([FHIR-41570](https://jira.hl7.org/browse/FHIR-41570))
1. Add additional notes to commenters in QI-Core 6.0 ballot ([FHIR-41574](https://jira.hl7.org/browse/FHIR-41574))
1. Update landing page for QI-Core 6.0 ballot ([FHIR-41575](https://jira.hl7.org/browse/FHIR-41575))
1. Removed NutritionIntake profile and example. Removed related Example-Foods valueset ([FHIR-41258](https://jira.hl7.org/browse/FHIR-41258), [FHIR-42009](https://jira.hl7.org/browse/FHIR-42009))
1. Altered profiles table in profiles.md to increase readability. ([FHIR-42100](https://jira.hl7.org/browse/FHIR-42100))
1. Changed "self-prescribed" to "self-reported" throughout section 9.18.3 in QDM-QICore Mapping ([FHIR-42434](https://jira.hl7.org/browse/FHIR-42434))
1. Added further details to Race, Ethnicity and Sex table elements in QDM-QICore Mapping for Patient Characteristics table ([FHIR-41932](https://jira.hl7.org/browse/FHIR-41932))
1. Clarifying text edits in QDM-QI Core mapping ([FHIR-42432](https://jira.hl7.org/browse/FHIR-42432), [FHIR-42429](https://jira.hl7.org/browse/FHIR-42429), [FHIR-42422](https://jira.hl7.org/browse/FHIR-42422), [FHIR-42421](https://jira.hl7.org/browse/FHIR-42421) )


### STU5 Release (5.0.0)

1. Add ODH - 2016-09 qicore #21 ([FHIR-12091](https://jira.hl7.org/browse/FHIR-12091))
1. Add ODH - 2018-Jan QI-Core #33 ([FHIR-14998](https://jira.hl7.org/browse/FHIR-14998))
1. Update QI-Core to incorporate changes from US Core 3.2.0 ballot ([FHIR-30116](https://jira.hl7.org/browse/FHIR-30116))
1. qicore-encounter-diagnosisPresentOnAdmission not applicable for outpatient encounters but always required when sending a diagnosis ([FHIR-31764](https://jira.hl7.org/browse/FHIR-31764))
1. Update Cumulative Medication Duration examples in upcoming update ([FHIR-32007](https://jira.hl7.org/browse/FHIR-32007))
1. Add extension for MedicationDispense.statusChange ([FHIR-32805](https://jira.hl7.org/browse/FHIR-32805))
1. Add pattern for blood pressure ([FHIR-32945](https://jira.hl7.org/browse/FHIR-32945))
1. QI Core Specimen Profile not used in QI Core ImagingStudy or QI Core ServiceRequest ([FHIR-32967](https://jira.hl7.org/browse/FHIR-32967))
1. QI Core ImagingStudy needs more Resource types for Referrer and Interpreter ([FHIR-32968](https://jira.hl7.org/browse/FHIR-32968))
1. Mark timing.bounds as mustSupport ([FHIR-33017](https://jira.hl7.org/browse/FHIR-33017))
1. Mark mandatory top level elements MUST SUPPORT ([FHIR-33029](https://jira.hl7.org/browse/FHIR-33029))
1. QI Core Immunization Profile should only allow Completed status and statusReason should not be allowed ([FHIR-33087](https://jira.hl7.org/browse/FHIR-33087))
1. Remove duplicate profile statements ([FHIR-33199](https://jira.hl7.org/browse/FHIR-33199))
1. FamilyMemberHistory profile needs to have a more constrained binding on Relationship code set ([FHIR-33230](https://jira.hl7.org/browse/FHIR-33230))
1. Need ClaimResponse Resource added to QI Core Profiles ([FHIR-33373](https://jira.hl7.org/browse/FHIR-33373))
1. Should Encounter.diagnosis.condition be restricted to reference (condition) and NOT (procedure) and specify the change in QDM mapping - September Update ([FHIR-33491](https://jira.hl7.org/browse/FHIR-33491))
1. Medication.code Preferred binding is less than US Core extensible binding ([FHIR-34071](https://jira.hl7.org/browse/FHIR-34071))
1. Medication.form appears on the Differential View but no apparent change from US Core ([FHIR-34072](https://jira.hl7.org/browse/FHIR-34072))
1. Aligning with US Core - New conformance expectations page ([FHIR-34154](https://jira.hl7.org/browse/FHIR-34154))
1. Align with US CORE on VSAC terminology references ([FHIR-34167](https://jira.hl7.org/browse/FHIR-34167))
1. Change $docref start and end input parameter types from date to dateTime ([FHIR-34169](https://jira.hl7.org/browse/FHIR-34169))
1. Align with US Core 4.0 - must support complex elements ([FHIR-34176](https://jira.hl7.org/browse/FHIR-34176))
1. Align with US Core 4.0 - include VSAC instructions in terminology section ([FHIR-34177](https://jira.hl7.org/browse/FHIR-34177))
1. Align with US Core 4.0 - must support choice of profile elements ([FHIR-34178](https://jira.hl7.org/browse/FHIR-34178))
1. Align with US Core 4.0 - align invariants and binding change in PractitionerRole ([FHIR-34179](https://jira.hl7.org/browse/FHIR-34179))
1. CommunicationNotDone profile does not have Subject as Must Support ([FHIR-34313](https://jira.hl7.org/browse/FHIR-34313))
1. AdverseEvent. referenceDocument does not reference US Core Document Reference ([FHIR-34367](https://jira.hl7.org/browse/FHIR-34367))
1. AdverseEvent.contributor does not reference QI Core profiles for  Contributor or suspectEntity.causality.author ([FHIR-34368](https://jira.hl7.org/browse/FHIR-34368))
1. Organization profile should mirror US Core telecom must support elements of system and value ([FHIR-34482](https://jira.hl7.org/browse/FHIR-34482))
1. Add due duration to QI Core Goal.target ([FHIR-34484](https://jira.hl7.org/browse/FHIR-34484))
1. Consider updating StructureDefinition-qicore-diagnosticreport-lab to mirror US Core for performer element ([FHIR-34531](https://jira.hl7.org/browse/FHIR-34531))
1. Consider updating choice type for Encounter.referenceReason to mirror US Core ([FHIR-34534](https://jira.hl7.org/browse/FHIR-34534))
1. Careplan.text.div should be MS to mirror US Core ([FHIR-34535](https://jira.hl7.org/browse/FHIR-34535))
1. Consider adding MS datatypes on observation.value[x] ([FHIR-34536](https://jira.hl7.org/browse/FHIR-34536))
1. Consider adding MS datatypes on observation.effective[x] ([FHIR-34537](https://jira.hl7.org/browse/FHIR-34537))
1. Update definition of diagnosticreport.effective[x] ([FHIR-34557](https://jira.hl7.org/browse/FHIR-34557))
1. Consider adding MS on medicationrequest.requester choice type of Practitioner ([FHIR-34559](https://jira.hl7.org/browse/FHIR-34559))
1. ServiceRequest.statusReason is not bound to a value set yet it is an extension added for use by QI Core ([FHIR-35100](https://jira.hl7.org/browse/FHIR-35100))
1. Change example value sets for MS items to Preferred - Immunization-related ([FHIR-35813](https://jira.hl7.org/browse/FHIR-35813))
1. Change example value sets for MS items to Preferred - Medication-related ([FHIR-35814](https://jira.hl7.org/browse/FHIR-35814))
1. Change QI Core Communication Resource MS items to Preferred Value Set bindings ([FHIR-35815](https://jira.hl7.org/browse/FHIR-35815))
1. QI Core Care Plan and Goal Profiles have MS items with example bindings to value sets - change to Preferred ([FHIR-35816](https://jira.hl7.org/browse/FHIR-35816))
1. Change value set bindings for QI-Core AllergyIntolerance, AdverseEvent, Condition, Procedure elements with MS ([FHIR-35817](https://jira.hl7.org/browse/FHIR-35817))
1. QICore Flag profile elements with MS example bindings should change to preferred bindings ([FHIR-35818](https://jira.hl7.org/browse/FHIR-35818))
1. QICore ServiceRequest, ServiceNotRequested MS item should have preferred value set bindings ([FHIR-35819](https://jira.hl7.org/browse/FHIR-35819))
1. Change QICore Specimen value set bindings where items are Must Support ([FHIR-35820](https://jira.hl7.org/browse/FHIR-35820))
1. Device-related QI-Core profile elements that are Must Support should have preferred bindings, not example bindings ([FHIR-35821](https://jira.hl7.org/browse/FHIR-35821))
1. QI-Core observation-related profile Must Support elements should all have Preferred bindings, not example bindings ([FHIR-35822](https://jira.hl7.org/browse/FHIR-35822))
1. QI-Core Task profile elements that are Must Support should use preferred bindings to value sets, not examples ([FHIR-35823](https://jira.hl7.org/browse/FHIR-35823))
1. QI-Core Encounter and Organization Profile MS elements should have preferred value set bindings, not examples ([FHIR-35824](https://jira.hl7.org/browse/FHIR-35824))
1. QI Core Profile on FamilyMemberHistory has Relationship as a Must Support field but code set is Must Support ([FHIR-35903](https://jira.hl7.org/browse/FHIR-35903))
1. Nutrition Order is not consistent with out Request pattern resources ([FHIR-35944](https://jira.hl7.org/browse/FHIR-35944))
1. QI Core Substance has code as Must Support but bound to example code set ([FHIR-35946](https://jira.hl7.org/browse/FHIR-35946))
1. Goal.target.measure and goal.target.date are both required so should be Must Support ([FHIR-35947](https://jira.hl7.org/browse/FHIR-35947))
1. Don't assign system values for tax id or other identifiers ([FHIR-35971](https://jira.hl7.org/browse/FHIR-35971))
1. Need practitionerRole in Encounter.participant.individual as it supports specialty taxonomy which is needed in some quality scenarios ([FHIR-36745](https://jira.hl7.org/browse/FHIR-36745))
1. Update PractionerRole.specialty value set binding to match US Core 5.0.0 ([FHIR-37365](https://jira.hl7.org/browse/FHIR-37365))
1. Update ServiceRequest to match US Core 5.0.0 ([FHIR-37447](https://jira.hl7.org/browse/FHIR-37447))
1. Update QI-Core to reference new US Core 5.0 Observation profiles ([FHIR-37457](https://jira.hl7.org/browse/FHIR-37457))
1. Create new QI-Core QuestionnaireResponse Profile consistent with US Core 5.0.0 ([FHIR-37458](https://jira.hl7.org/browse/FHIR-37458))
1. Create new Observation Clinical Test Result profile consistent with US Core 5.0.0 ([FHIR-37459](https://jira.hl7.org/browse/FHIR-37459))
1. Create new Observation Imaging Result Profile consistent with US Core 5.0.0 ([FHIR-37460](https://jira.hl7.org/browse/FHIR-37460))
1. Create Observation Sexual Orientation Profile consistent with US Core 5.0.0 ([FHIR-37461](https://jira.hl7.org/browse/FHIR-37461))
1. Create new Observation Social History Profile consistent with US Core 5.0.0 ([FHIR-37462](https://jira.hl7.org/browse/FHIR-37462))
1. Create new Observation Survey Profile Consistent with US Core 5.0.0 ([FHIR-37463](https://jira.hl7.org/browse/FHIR-37463))
1. Add new Conditions Problems and Health Concerns Profile and Encounter Diagnosis Profile consistent with US Core 5.0.0 ([FHIR-37464](https://jira.hl7.org/browse/FHIR-37464))
1. Update ObservationNotDone profile to indicate use for all observation profiles ([FHIR-37489](https://jira.hl7.org/browse/FHIR-37489))
1. Update QICore Observation Profile to indicate restricted use ([FHIR-37490](https://jira.hl7.org/browse/FHIR-37490))
1. Add full QI-Core Laboratory Result Observation Profile ([FHIR-37505](https://jira.hl7.org/browse/FHIR-37505))
1. Add Must Support for Procedure.usedReference ([FHIR-37532](https://jira.hl7.org/browse/FHIR-37532))
1. Add note to balloters for feedback in next ballot version ([FHIR-37535](https://jira.hl7.org/browse/FHIR-37535))
1. Update QDM to QI-Core Mapping section ([FHIR-37536](https://jira.hl7.org/browse/FHIR-37536))
1. Modify text on introduction page for QI-Core ([FHIR-37539](https://jira.hl7.org/browse/FHIR-37539))
1. Update Model Info ([FHIR-37579](https://jira.hl7.org/browse/FHIR-37579))
1. Encounter.hospitalization.dischargeDisposition binding - for QI-Core R5 is incorrect ([FHIR-37627](https://jira.hl7.org/browse/FHIR-37627))
1. TaskNotDone Task.code binding to task-code value set should be preferred, not example ([FHIR-37656](https://jira.hl7.org/browse/FHIR-37656))
1. Changes to Coverage profile ([FHIR-37669](https://jira.hl7.org/browse/FHIR-37669))
1. Remove CCN Number Identifier Slice from QI Core Practitioner as this only applies to an Organization ([FHIR-37751](https://jira.hl7.org/browse/FHIR-37751))
1. Adding ODH capability to QICore ([FHIR-37755](https://jira.hl7.org/browse/FHIR-37755))
1. Remove references for .subject in ObservationLab and ObservationClinicalTest ([FHIR-37782](https://jira.hl7.org/browse/FHIR-37782))
1. Small typo ([FHIR-37788](https://jira.hl7.org/browse/FHIR-37788))
1. Modify language in section 1.8 - Relationship to Other Initiatives ([FHIR-37806](https://jira.hl7.org/browse/FHIR-37806))
1. CCN system should use URL not OID ([FHIR-37900](https://jira.hl7.org/browse/FHIR-37900))
1. Put all Updates in Change tab ([FHIR-38077](https://jira.hl7.org/browse/FHIR-38077))
1. Blood Pressure Pattern Example ([FHIR-38112](https://jira.hl7.org/browse/FHIR-38112))
1. Inconsistency In Naming Profiles ([FHIR-38119](https://jira.hl7.org/browse/FHIR-38119))
1. Provide links to Example Source ([FHIR-38135](https://jira.hl7.org/browse/FHIR-38135))
1. POA value set codes ([FHIR-38181](https://jira.hl7.org/browse/FHIR-38181))
1. 2 Resource Profile name for Medication Not Requested / Service Not Requested are not align with other negation profiles ([FHIR-38182](https://jira.hl7.org/browse/FHIR-38182))
1. Suggest that examples that are CQL based be added to the QICore manual in addition to the FHIR based examples that already exist ([FHIR-38185](https://jira.hl7.org/browse/FHIR-38185))
1. QICoreProcedureType Value Set missing CLD ([FHIR-38204](https://jira.hl7.org/browse/FHIR-38204))
1. Consistency of multi-word element names ([FHIR-38213](https://jira.hl7.org/browse/FHIR-38213))
1. Allergy Example ([FHIR-38217](https://jira.hl7.org/browse/FHIR-38217))
1. Typo correction to Section 1.4 ([FHIR-38315](https://jira.hl7.org/browse/FHIR-38315))
1. Encounter.diagnosis reference ([FHIR-38316](https://jira.hl7.org/browse/FHIR-38316))
1. Typo correction to Section 2.2 ([FHIR-38360](https://jira.hl7.org/browse/FHIR-38360))
1. Typo correction to Section 9.1 ([FHIR-38363](https://jira.hl7.org/browse/FHIR-38363))
1. Defining URL should be anchored in THO. 1. ([FHIR-38548](https://jira.hl7.org/browse/FHIR-38548))
1. Defining URL should be anchored in THO. 2. ([FHIR-38549](https://jira.hl7.org/browse/FHIR-38549))
1. Defining URL should be anchored in THO. 3. ([FHIR-38550](https://jira.hl7.org/browse/FHIR-38550))
1. Defining URL should be anchored in THO. 4. ([FHIR-38551](https://jira.hl7.org/browse/FHIR-38551))
1. Defining URL should be anchored in THO. 5. ([FHIR-38552](https://jira.hl7.org/browse/FHIR-38552))
1. Defining URL should be anchored in THO. 6. ([FHIR-38553](https://jira.hl7.org/browse/FHIR-38553))
1. Defining URL should be anchored in THO. 7. ([FHIR-38554](https://jira.hl7.org/browse/FHIR-38554))
1. Defining URL should be anchored in THO. 8. ([FHIR-38555](https://jira.hl7.org/browse/FHIR-38555))
1. Defining URL should be anchored in THO. 9. ([FHIR-38556](https://jira.hl7.org/browse/FHIR-38556))
1. Defining URL should be anchored in THO. 10. ([FHIR-38557](https://jira.hl7.org/browse/FHIR-38557))
1. Defining URL should be anchored in THO. 11. ([FHIR-38558](https://jira.hl7.org/browse/FHIR-38558))
1. Defining URL should be anchored in THO. 12. ([FHIR-38559](https://jira.hl7.org/browse/FHIR-38559))
1. Defining URL should be anchored in THO. 13. ([FHIR-38560](https://jira.hl7.org/browse/FHIR-38560))
1. Defining URL should be anchored in THO. 14. ([FHIR-38561](https://jira.hl7.org/browse/FHIR-38561))
1. Defining URL should be anchored in THO. 15. ([FHIR-38562](https://jira.hl7.org/browse/FHIR-38562))
1. Defining URL should be anchored in THO. 16. ([FHIR-38563](https://jira.hl7.org/browse/FHIR-38563))
1. Defining URL should be anchored in THO. 20. ([FHIR-38567](https://jira.hl7.org/browse/FHIR-38567))
1. Defining URL should be anchored in THO. 21. ([FHIR-38568](https://jira.hl7.org/browse/FHIR-38568))
1. Defining URL should be anchored in THO. 22. ([FHIR-38569](https://jira.hl7.org/browse/FHIR-38569))
1. Defining URL should be anchored in THO. 23. ([FHIR-38570](https://jira.hl7.org/browse/FHIR-38570))
1. Defining URL should be anchored in THO. 25. ([FHIR-38572](https://jira.hl7.org/browse/FHIR-38572))
1. Defining URL should be anchored in THO. 27. ([FHIR-38574](https://jira.hl7.org/browse/FHIR-38574))
1. Consider topic, rather than reasonCode as the primary code path for Communication and CommunicationNotDone ([FHIR-38591](https://jira.hl7.org/browse/FHIR-38591))
1. Ensure negation profiles are disjoint ([FHIR-38788](https://jira.hl7.org/browse/FHIR-38788))
1. Provide consistent naming for QI-Core negation profiles ([FHIR-38850](https://jira.hl7.org/browse/FHIR-38850))
1. Update QICoreCommon Library ([FHIR-39164](https://jira.hl7.org/browse/FHIR-39164))
1. Update QDM to QI-Core Mappings for new terms for negation profiles ([FHIR-39307](https://jira.hl7.org/browse/FHIR-39307))
1. statusReason extension is unbounded ([FHIR-39361](https://jira.hl7.org/browse/FHIR-39361))



### STU4.1 Release with 1 Technical Errata for FHIR R4 (v4.1.1)


* [FHIR-35873](https://jira.hl7.org/browse/FHIR-35873): Corrected version-independent links to USCore throughout
* [FHIR-35802](https://jira.hl7.org/browse/FHIR-35802): Corrected negation examples and added guidance for usage of valueset-based negation

### STU4.1 Release for FHIR R4 (v4.1.0)


1. Broken Link for QUICK AdverseEvent actuality value set binding ([FHIR-23934](https://jira.hl7.org/browse/FHIR-23934))
1. Immunization.occurrence should remove the String choice ([FHIR-26407](https://jira.hl7.org/browse/FHIR-26407))
1. MedicationNotDispensed ([FHIR-26409](https://jira.hl7.org/browse/FHIR-26409))
1. Naming of QUICK vs QI-Core Logical View  ([FHIR-26592](https://jira.hl7.org/browse/FHIR-26592))
1. Medication list patient reported medications use Intent = Plan (not order) ([FHIR-26829](https://jira.hl7.org/browse/FHIR-26829))
1. wrong link in QDM to QICore mapping ([FHIR-27031](https://jira.hl7.org/browse/FHIR-27031))
1. Remove imagingStudy must support from the QICoreDiagnosticReportLab profile ([FHIR-27163](https://jira.hl7.org/browse/FHIR-27163))
1. Add TIN to QICore Organization Profile ([FHIR-27804](https://jira.hl7.org/browse/FHIR-27804))
1. DEQM Practitioner and DEQM Organization Profile should be added to QI Core ([FHIR-28157](https://jira.hl7.org/browse/FHIR-28157))
1. Patient resource generalpractitioner needs to consider PractitionerRole (https://jira.hl7.org/browse/FHIR-28220))
1. Can you add my affiliation? ([FHIR-28231](https://jira.hl7.org/browse/FHIR-28231))
1. change D.role to D.use in example with Encounter.diagnosis ([FHIR-28241](https://jira.hl7.org/browse/FHIR-28241))
1. Add MUST HAVE for MedicationRequest timing elements ([FHIR-28286](https://jira.hl7.org/browse/FHIR-28286))
1. Update Present On Admission in QDM to QI Core Mapping ([FHIR-29703](https://jira.hl7.org/browse/FHIR-29703))
1. Change mapping of \"Encounter, Performed\" code from Encounter.class to Encounter.type ([FHIR-29819](https://jira.hl7.org/browse/FHIR-29819))
1. QDM to QI-Core mapping for AdverseEvent error ([FHIR-30098](https://jira.hl7.org/browse/FHIR-30098))
1. Add QICoreModelInfo ([FHIR-30771](https://jira.hl7.org/browse/FHIR-30771))
1. Include US Core errata (3.1.1) to QI-Core Update process ([FHIR-31350](https://jira.hl7.org/browse/FHIR-31350))
1. Add MedicationDispense.whenPrepared MUST SUPPORT ([FHIR-31609](https://jira.hl7.org/browse/FHIR-31609))
1. Update QDM to QI-Core Mapping to address QDM 5.6 ([FHIR-31629](https://jira.hl7.org/browse/FHIR-31649))
1. Add guidance about use of references in profiles QI-Core inherits from US Core and FHIR ([FHIR-31738](https://jira.hl7.org/browse/FHIR-31738))
1. Update QDM to QI-Core mapping for ([FHIR-31740](https://jira.hl7.org/browse/FHIR-31740))
1. Profile Procedure NOT Done - why is element code not required ([FHIR-31929](https://jira.hl7.org/browse/FHIR-31929))
1. Procedure NOT Done - what is the intent of the valueset-reference in Code element ([FHIR-31930](https://jira.hl7.org/browse/FHIR-31930))
1. Procedure NOT Done - recorded does not have a clear description ([FHIR-31931](https://jira.hl7.org/browse/FHIR-31931))
1. Coverage.period shows in Differential but we cannot identify the change from FHIR Core ([FHIR-31932](https://jira.hl7.org/browse/FHIR-31932))
1. QI Core Observation.code binding is just example to LOINC ([FHIR-31933](https://jira.hl7.org/browse/FHIR-31933))
1. QI Core IG does not have a Table of Contents page ([FHIR-31935](https://jira.hl7.org/browse/FHIR-31935))
1. QDM to QI-Core mapping Section 8.1 correct text to QDM 5.6 ([FHIR-31974](https://jira.hl7.org/browse/FHIR-31974))
1. Adverse Event QDM-to-QI-Core mapping errata ([FHIR-31975](https://jira.hl7.org/browse/FHIR-31975))
1. QDM to Qi-Core mapping AllergyIntolerance ([FHIR-31976](https://jira.hl7.org/browse/FHIR-31976))
1. QDM to Qi-Core sections 8.4.1, 8.4.3 Assessment Order/Recommended ([FHIR-31977](https://jira.hl7.org/browse/FHIR-31977))
1. QDM to QI-Core mapping Communication, Performed ([FHIR-31978](https://jira.hl7.org/browse/FHIR-31978))
1. QDM to Qi-Core mapping for Device Order, Device Recommended ([FHIR-31979](https://jira.hl7.org/browse/FHIR-31979))
1. QDM to QI-Core mapping Diagnostic Study corrections ([FHIR-31980](https://jira.hl7.org/browse/FHIR-31980))
1. QDM to QI-Core mapping - Encounter ([FHIR-31981](https://jira.hl7.org/browse/FHIR-31981))
1. QDM to QI-Core mapping Immunization Administered status error ([FHIR-31982](https://jira.hl7.org/browse/FHIR-31982))
1. QDM to QI-Core mapping Intervention performed errors ([FHIR-31983](https://jira.hl7.org/browse/FHIR-31983))
1. QDM to QI-Core mapping Laboratory order and recommended error ([FHIR-31984](https://jira.hl7.org/browse/FHIR-31984))
1. QDM to QI-Core mapping Medication Administered error ([FHIR-31985](https://jira.hl7.org/browse/FHIR-31985))
1. QDM to QI-Core mapping Medication, Discharge error ([FHIR-31987](https://jira.hl7.org/browse/FHIR-31987))
1. QDM to QI-Core mapping update for Medication, Dispensed ([FHIR-31988](https://jira.hl7.org/browse/FHIR-31988))
1. QDM to QI-Core mapping Physical Exam Order and Recommended error ([FHIR-31989](https://jira.hl7.org/browse/FHIR-31989))
1. QDM to QI Core mapping changes for Procedure, Order, Procedure, Recommended and Procedure, Performed ([FHIR-31990](https://jira.hl7.org/browse/FHIR-31990))
1. QDM to QI-Core mapping - error in Immunization, Administered not done mapping ([FHIR-32005](https://jira.hl7.org/browse/FHIR-32005
1. QDM to QI-Core mapping for \"Medication, Order\" status constraints ([FHIR-32037](https://jira.hl7.org/browse/FHIR-32037
1. CommunicationNotDone code requires change in cardinality and modeling ([FHIR-32052](https://jira.hl7.org/browse/FHIR-32052))
1. DeviceRequestNotDone code binding and cardinality may require a specific slice for the eCQM use case ([FHIR-32053](https://jira.hl7.org/browse/FHIR-32053))
1. ImmunizationNotDone should allow indication an individual immunization was not performed and a slice to indicate none of the members of a value set was performed ([FHIR-32054](https://jira.hl7.org/browse/FHIR-32054))
1. MedicationNotAdministered requires ability to specify a single medication or an entire value set slice ([FHIR-32055](https://jira.hl7.org/browse/FHIR-32055))
1. MedicationNotDispensed should allow indication of a single medication not dispensed or a slice to indicate an entire value set was not dispensed ([FHIR-32056](https://jira.hl7.org/browse/FHIR-32056))
1. MedicationNotRequested should allow reference to a single medication not requested or a slice for a value set of all medications not requested ([FHIR-32057](https://jira.hl7.org/browse/FHIR-32057))
1. ObservationCancelled should allow reference to a single observation not performed or a slice for a value set for which none of the items were performed ([FHIR-32058](https://jira.hl7.org/browse/FHIR-32058))
1. ServiceNotRequested requires ability to specify a single service not requested or a slice for any one of a value set of services not requested ([FHIR-32059](https://jira.hl7.org/browse/FHIR-32059))
1. DiagnosticReportLab does not have Performer or Issued as Must Support even though the US Core Specification Does ([FHIR-32235](https://jira.hl7.org/browse/FHIR-32235))
1. How to reference TaskNotDone ([FHIR-32273](https://jira.hl7.org/browse/FHIR-32273))
1. Create QICorePresentOnAdmission value set ([FHIR-32378](https://jira.hl7.org/browse/FHIR-32378))
1. Add Must Support to Procedure.usedCode ([FHIR-32991](https://jira.hl7.org/browse/FHIR-32991))
1. Add Must Support for ServiceRequest.intent, MedicationRequest.intent, NutritionOrder.intent, NutritionOrder.status ([FHIR-33027](https://jira.hl7.org/browse/FHIR-33027))
1. Update identifiers throughout ([FHIR-33085](https://jira.hl7.org/browse/FHIR-33085))
1. Remove Authoring section ([FHIR-33260](https://jira.hl7.org/browse/FHIR-33260))



#### The following tickets listed below were incorporated from the **US Core errata (3.1.1)**:

* Add guidance for representing patient name suffix and previous patient name to the US Core Patient Profile ([FHIR-28129](https://jira.hl7.org/browse/FHIR-28129))
* Correct copy/paste error in Goal Profile ([FHIR-28109](https://jira.hl7.org/browse/FHIR-28109))
* Correct US Core Provider Speciality (NUCC) ValueSet to hide abstract grouping codes ([FHIR-27975](https://jira.hl7.org/browse/FHIR-27975))
* Added example of US Core Direct Extension to Practitioner-2 Example ([FHIR-27947](https://jira.hl7.org/browse/FHIR-27947))
* Corrected technical errors in pediatric profiles StructureDefinitions ([FHIR-27946](https://jira.hl7.org/browse/FHIR-27946))
* Corrected errors in DiagnosticReport Cardiology Example ([FHIR-27913](https://jira.hl7.org/browse/FHIR-27913))
* Update Federal Register link for OMB race and ethnicity category classifications. ([FHIR-27907](https://jira.hl7.org/browse/FHIR-27907))
* Clarified token search syntax ([FHIR-27897](https://jira.hl7.org/browse/FHIR-27897))
* Corrected US Core DocumentReference Profile to support multiple attachments ([FHIR-25778](https://jira.hl7.org/browse/FHIR-25778))
* Fix FHIRPath Expression in USCoreGoalTargetDate ([FHIR-27892](https://jira.hl7.org/browse/FHIR-27892))
* Fix FHIRPath Expression in USCoreProcedureDate ([FHIR-27887](https://jira.hl7.org/browse/FHIR-27887))
* Add omitted ge comparators to SearchParameters ([FHIR-27893](https://jira.hl7.org/browse/FHIR-27893))
* Remove Must Support References to non US Core Profiles ([FHIR-27876](https://jira.hl7.org/browse/FHIR-27876))
* Add missing reaction to the US Core AllergyIntolerance Profile ([FHIR-27867](https://jira.hl7.org/browse/FHIR-27867))
* Clarify reference to US Core Patient in Vitals Signs Profiles ([FHIR-27857](https://jira.hl7.org/browse/FHIR-27857))
* Corrected US Core Pulse Oximetry Profile component.valueQuantity.code and component.valueQuantity.unit min from 0 to 1 to be consistent with the valueQuantity constraints within US Core ([FHIR-27846](https://jira.hl7.org/browse/FHIR-27846))
* Correct UCUM Unit in US Core Pulse Oximetry Profile Text Summary ([FHIR-27845](https://jira.hl7.org/browse/FHIR-27845))
* Update Procedure Codes Value Set to include ICD-10 PCS codes ([FHIR-27836](https://jira.hl7.org/browse/FHIR-27836))
* Update Procedure Codes Value Set to include CDT codes ([FHIR-27737](https://jira.hl7.org/browse/FHIR-27737))
* Clarify that pediatric vital sign percentile Observations should reference growth chart ([FHIR-27549](https://jira.hl7.org/browse/FHIR-27549))
* Added Missing US core Head Occipital-frontal Circumference Percentile Profile ([FHIR-27542](https://jira.hl7.org/browse/FHIR-27542))
* Correct requirements for supporting CLIA identifiers ([FHIR-27158](https://jira.hl7.org/browse/FHIR-27158))
* Change Description of ICD-10-PCS Value Set ([FHIR-27116](https://jira.hl7.org/browse/FHIR-27176))
* Correct AllergyIntolerance guidance for verificationStatus ([FHIR-27096](https://jira.hl7.org/browse/FHIR-27096))
* Fix example US Core heart-rate example ([FHIR-27086](https://jira.hl7.org/browse/FHIR-27086))
* Review period comments Update smoking status codes to align with USCDI ([FHIR-27082](https://jira.hl7.org/browse/FHIR-27082))
* Fix invariant provenance-1 ([FHIR-27065](https://jira.hl7.org/browse/FHIR-27065))
* Fix invalid json snippet ([FHIR-27001](https://jira.hl7.org/browse/FHIR-27001))
* Review period comments Remove Provenance requirement from Medication, Location, Practitioner, PractitionerRole, and Organization and correct copy and paste error to Medication and Provenance searchType support in CapabilityStatement ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840)),([FHIR-28161](https://jira.hl7.org/browse/FHIR-28161))
* Correction on USCDI Table change MedicationStatement to MedicationRequest and remove references to MedicationStatement in the Medication Profile and CapabilityStatements ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))
* Clarify that US Core Location/PractitionerRole are not being referenced by other resources ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))
* Correct editing error restoring Write and Operation capability guidance into DocumentReference QuickStart ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))
* Clarify guidance that servers SHALL support search with status if status required ([FHIR-26840](https://jira.hl7.org/browse/FHIR-26840))
* Correct canonical URL for ImplementationGuide ([FHIR-26686](https://jira.hl7.org/browse/FHIR-26686))
* Correct system URI for ICD-10 procedure codes ([FHIR-26679](https://jira.hl7.org/browse/FHIR-26679))
* Fix invariant us-core-1 ([FHIR-26605](https://jira.hl7.org/browse/FHIR-26605))
* Change valueCode min from 0 to 1 for US Core Birth Sex Extension and valueBoolean min from 0 to 1 forUS Core Direct email Extension ([FHIR-26459](https://jira.hl7.org/browse/FHIR-26459))
* Change valueQuantity min from 1 to 0 for US Core Pediatric BMI for Age Observation Profile and US Core Pediatric Weight for Height Observation Profile ([FHIR-26363](https://jira.hl7.org/browse/FHIR-26363))
* Add page contents to Clinical Notes and Basic Provenance pages ([FHIR-25785](https://jira.hl7.org/browse/FHIR-25785))
* Fix duplicate URL causing validation failure. ([FHIR-25536](https://jira.hl7.org/browse/FHIR-25536))
* Fix Invariant us-core-8 ([FHIR-25459](https://jira.hl7.org/browse/FHIR-25459))
* Corrected the wording should support to shall support in Clinical Notes Guidance ([FHIR-25455](https://jira.hl7.org/browse/FHIR-25455))
* Fix Invariant us-core-8 to allow for Data Absent Reason Extension on Patient name.([FHIR-25249](https://jira.hl7.org/browse/FHIR-25249))
* Fix Link to LOINC LP29708-2 ([FHIR-25213](https://jira.hl7.org/browse/FHIR-25213))
* Corrected guidance for conveying Patient-Reported medications ([FHIR-25035](https://jira.hl7.org/browse/FHIR-25035))

### STU4 Release for FHIR R4 (v4.0.0)


* Created negation profiles
* Added patterns pages and CQL examples
* Corrections throughout
* Updated QDM-to-QI-Core mapping
* Added negation reason value set and bindings

### STU4 Ballot for FHIR R4 (v3.3.0)


* Updated profiles to be based on FHIR R4 and US Core STU 3
* #22645 Added profiles on Immunization and Evaluation
* #15012 Added a profile on NutritionOrder
* #20727 Updated Observation documentation to provide clarity on use of FHIR and US Core profiles
* #20610 Created the notDone extension and modified the DeviceUseStatement profile to use it; added the DeviceRequest profile, use the doNotPerform extension
* #22646 Relaxed Must Support requirement on some fields of Immunization and ImmunizationRecommendation profiles
* #14991 Added an example of using body position with an Observation

### STU3.2 Release for FHIR STU3 (v3.2.0)


* Updated profiles to be based on US Core 2.0.0
* Derived Encounter and PractitionerRole profiles from US Core profiles

### STU3 Release for FHIR STU3 (v3.1.0)


* Added profile for PractitionerRole and removed Practitioner.role extension
* Added profile for Task
* Established pattern for representing QDM Principal Diagnosis in Encounters
* Relaxed conformance requirements from all profiles to profiles that are relevant to a particular use case

### STU3 Ballot for FHIR STU3 (v2.1.0)


* Incorporates ballot reconciliation from all comments from the September 2016 ballot which have been applied to FHIR 3.0 and US Core Release 1.0.1
* Includes mapping to QDM Version 5.3 Annotated available at: https://ecqi.healthit.gov/qdm
* Includes an updated Mapping table from the QI-Core metadata to QDM 5.3
* Includes a direct mapping from QDM version 5.3 to QI Core

### STU2 Release for FHIR STU3 (v2.0.0)


* Updated to FHIR STU3 (3.0.1)
* Changed from Universal Realm to US Realm
* Derived from US Core profiles where possible
* Added support for Claim and Coverage resources
* Changed AdverseEvent profile to use the base resource
* Numerous typographical and technical errors corrected

### STU2 Ballot for FHIR STU3 Ballot (v1.6.0)


* Moved out of main FHIR publication package to its own home
* Updated QI-Core profiles for changes to underlying specification
* Added an additional profile on Condition
* The QUICK logical model is included

### STU1 Release for FHIR DSTU2 (v1.0.2)

DSTU 1 (Permanent home)

### DSTU1 Preview for FHIR STU1 (v1.0.0)

DSTU1 Preview

### DSTU1 Ballot for FHIR STU1 (v0.5.0)

DSTU1 Ballot


---

// File: input/pages/downloads.md

{:toc}

{: #downloads }

### Full Implementation Guide
{: #full-ig}

The following file contains the complete, downloadable implementation guide:

-  [Full IG](full-ig.zip)

### IG Package
{: #package}

The following file is the FHIR IG Package [NPM Subset](https://confluence.hl7.org/display/FHIR/NPM+Package+Specification)

- [package.tgz](package.tgz)

### Definitions
{: #definitions}

In addition to the above, we have provided format-specific _definitions_:

-  [XML](definitions.xml.zip)
-  [JSON](definitions.json.zip)
-  [TTL](definitions.ttl.zip)

These files should be the first choice whenever generating any implementation artifacts since they contain all of the
rules about what makes these US Core profiles valid. Implementers will still need to be familiar with the content of the
specification and profiles that apply in order to make a conformant implementation. See the overview on
[validating FHIR profiles and resources](http://hl7.org/fhir/validation.html) for more information about validating
profiles and how to use these artifacts.

### Examples
{: #examples}

All examples used in this Implementation Guide:

-  [XML](examples.xml.zip)
-  [JSON](examples.json.zip)
-  [TTL](examples.ttl.zip)


### Dependencies

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pages/extensions.md

{:toc}


This page lists the [Extensions](http://hl7.org/fhir/extensibility.html) defined as part of the QI-Core Implementation
Guide. A [registry of standard extensions](http://hl7.org/fhir/R4/extensibility-registry.html) can be found in the FHIR
specification and additional extensions may be registered on the [HL7 FHIR registry](http://hl7.org/fhir/registry).

{% include list-simple-extensions.xhtml %}


---

// File: input/pages/index.md

{:toc}


{:.stu-note}
> This STU 7.0.0-ballot update to the QI-Core profiles aligns with US-Core STU v7.0.0. For a complete list of changes in this version, please refer to the version history.

<div class="note-to-balloters" markdown="1">
> 
> Some QI-Core users have requested addition of a section on each QI-Core profile page indicating those elements identified as essential for expressing data required for measure and clinical decision support artifacts.  
> 
> Please provide feedback or suggested edits for the new sections.

> NOTE TO REVIEWERS:

* US Core 7.0, and thus QI-Core 7.0, has a new approach to USCDI requirements.
    * As noted in the US Core 7.0 [Must Support](https://hl7.org/fhir/us/core/must-support.html#must-support-elements) section, US Core 7.0 no longer highlights mandatory (cardinality 1..* or 1..1) and Must Support elements with a (USCDI) indicator as such items must be supported for interoperability.
    * Those USCDI elements that are not mandatory or Must Support now include an indicator (ADDITIONAL USCDI) in US Core. QI-Core 7.0 does not reference USCDI elements; rather, users should access US Core 7.0 to understand its implementation of USCDI version 4.
* We invite comments about the approach and suggestions for other options that would also avoid unnecessary noise or reading load to the QI-Core profile representation.
* Further, QI-Core 7.0 does not discuss [USCDI+Quality](https://uscdiplus.healthit.gov/uscdi) because at the time of ballot preparation, no published version of USCDI+Quality is available. We seek reviewer advice regarding how QI-Core might address future USCDI+Quality.

</div>

<div class="new-content" markdown="1">
{{ site.data.new_items.list[0].desc }}
</div>

{: #qi-core-implementation-guide}


### Summary
{: #summary}

The QI-Core Implementation Guide defines a set of FHIR profiles with extensions and bindings needed to create
interoperable, quality-focused applications. The profiles in this implementation guide derive from and extend the
Core profiles to provide a common foundation for building, sharing, and evaluating
knowledge artifacts across quality improvement efforts in the US Realm.

As an HL7 FHIR Implementation Guide, changes to this specification are managed by the sponsoring workgroup,
[Clinical Quality Information](http://www.hl7.org/Special/committees/cqi/index.cfm), and incorporated as part of the
standard balloting process. The current roadmap follows closely behind the base FHIR roadmap, and the US Core
Implementation Guide.

### Contents
{: #contents}

This guide is divided into pages which are listed at the top of each page in the menu bar:

* **[Home](index.html)**: The home page provides summary and background information

<div class="new-content" markdown="1">
* **Profiles**
    * **[QI-Core Profiles](profiles.html)**: The profiles page provides a complete listing of all the profiles defined in or used by QI-Core
    * **[QI Elements](qi-elements.html)**: The QI Elements page provides a complete listing of all the QI Elements in each profile used by QI-Core
</div>

* **[QI-Core Negation](negation.html)**: The negations page describes QI-Core Negation
* **[Patterns](patterns.html)**: The patterns page describes patterns of usage for QI-Core applications
* **[Model Info](modelinfo.html)**: The model info page provides the QI-Core model information to support implementation
* **[Extensions](extensions.html)**: The extensions page lists all the extensions defined as part of QI-Core
* **[Terminology](terminology.html)**: The terminology page lists all terminology defined as part of QI-Core
* **[Examples](examples.html)**: The examples page provides an index of all the examples defined as part of QI-Core
* **[Downloads](downloads.html)**: Downloads for definitions, examples, as well as the entire IG
* **[QDM-to-QI-Core Mapping](qdm-to-qicore.html)**: This page provides a detailed description of mapping from QDM to QI-Core

### Background
{: #background}

This Implementation Guide originated as a US Realm Specification with support from the
Clinical Quality Framework (CQF) initiative [(that concluded in 2017)](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/CQF+Home),
which was a public-private partnership sponsored by the Centers for Medicare &amp; Medicaid Services (CMS) and the U.S.
Office of the National Coordinator (ONC) to harmonize standards for clinical decision support and electronic clinical
quality measurement. The [Clinical Quality Framework](https://confluence.hl7.org/display/CQIWC/Clinical+Quality+Framework)
effort transitioned to HL7's Clinical Quality Information (CQI) and Clinical Decision Support (CDS) Work Groups in 2016.
The HL7 CQI Work Group maintains this Implementation Guide, co-sponsored by the Clinical Decision Support (CDS) HL7 Work
Group to inform electronic clinical quality improvement (i.e., measurement and decision support). This Quality
Improvement Core (QI-Core) Implementation Guide is intended to be usable for multiple use cases across domains, and much
of the content is likely to be usable outside the US Realm.

Understanding QI-Core and its use in quality applications requires an understanding of the role of common
reference models. Electronic Health Records (EHRs) are stored in many different local formats. Exchanging data between
EHRs requires mapping between local data formats. It is well understood that standards can reduce the number of data
maps each data provider must create. In a similar manner, to share quality measures and clinical decision support
artifacts, the measures and artifacts must refer to data in a standardized way.

In the US Realm, the common reference model for electronic clinical quality measures (eCQMs) is the
[Quality Data Model (QDM)](https://ecqi.healthit.gov/qdm). For clinical decision support, a common reference model is
the [HL7 Virtual Medical Record for Clinical Decision Support (vMR)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=342).
Decision support and quality measures are closely related, and can be viewed as "two sides of the same coin".
Specifically, decision support provides guidance for clinical best practices, and quality measures assess whether
clinical best practices have been followed. It therefore makes intuitive sense to use the same common reference model
for both types of applications.


This initiative began in 2013 with the creation of the [Quality Improvement Domain Analysis Model (QIDAM)](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=378), which drew on the vMR and QDM as sources of requirements. The result, Quality Improvement Core (QI-Core) profiles consist of objects, attributes, and relationships as a common model for quality and interoperability that leverages US Core and other FHIR-related efforts and Clinical Document Architecture (CDA) on FHIR. The QI-Core versions have evolved with FHIR-specific tooling to include views showing differential from base FHIR resources or US Core profiles including US Core defined Must Support elements and Key Element Table specifying elements spcifically significanty for each respective QI-Core profile.


### Relevance of QI-Core Profiles to Authors

<div class="new-content" markdown="1">

QI-Core classes and attributes are the most relevant to the broader QI community, lying in the intersection of clinical
quality measures (CQM) and CDS, thus providing a common foundation for reusability. QI-Core
derives content from US Core profiles and extensions to the extent possible. The CQI Workgroup expects that QI-Core will continue to grow in concert with
US Core by incorporating needed extensions with broad applicability. To the extent possible, CQM and CDS authors should incorporate published domain-specific profiles to express content as much as possible rather than duplicating such concepts in QI-Core (e.g., minimum Common Oncology Data Elements (mCode)). The CQI and CDS Work Groups
coordinate with HL7 Work Groups that manage specific FHIR resources to align definitions and value sets including
concepts required for CDS and retrospective CQM use cases. Additional classes and attributes needed for
specific quality applications can be added through FHIR's extension mechanism. This QI-Core STU 7.0 uses FHIR extensions promoted from the previous Clinical Quality Framework (CQF) extensions to improve shareablility. QI-Core will evolve to include more of the extensional content when the community
identifies a common need, and the additional content has been validated.

QI-Core profile authoring provides a relatively facile method for creating CQM and CDS artifacts with CQL that expand to full FHIR representation for implementation through CQL-to-ELM conversion.
</div>

### Scope

The QI-Core FHIR Implementation Guide provides requirements and guidance for using FHIR in quality measurement and
decision support. The profiles in this implementation guide will be used to meet QI-Core project objectives of:

-  Encouraging consistent access and use of data for clinical quality applications across organizations and between healthcare systems,
-  Providing guidance for consistent use of vocabularies and value sets, and
-  Standardizing the requirements for data servers and data consumers (clients) that exchange quality-related clinical data needed for calculation of quality measures and decision support.

This IG is focused on representation of clinical data and is limited in breadth to the profiles currently included in
QI-Core. Not all FHIR resources are profiled, especially those that do not have clinical value in the context of quality
improvement, or do not map to QIDAM. Additional extensions may be added to the current set of profiles, and additional
profiles may be added later. QI-Core represents a subset of the semantics covered in QIDAM,
vMR, and QDM. The parts of the latter specifications that are not in the QI-Core profiles could be handled with
additional profiles, if the DSTU period reveals the need for such additions. Keeping the QI-Core profiles in
line with FHIR and FHIR's "80%" rule is one way to make sure that the quality artifacts produced from QI-Core
are computable, based on commonly collected clinical data. The current set of profiles will evolve to reflect changes to
the underlying FHIR resources.

The following topics are explicitly out of scope for this implementation guide:

-  Representing knowledge artifacts, analogous to Health Quality Measures Format (HQMF) or Clinical Decision Support (CDS) Knowledge Artifact Specification (KAS)
-  Representation of patient-data documents, analogous to Quality Reporting Document Architecture (QRDA) Cat I
-  Representation of documents containing results of quality measures, analogous to QRDA Cat III
-  Specifying implementation architectures and platforms for QI-Core
-  User extensions to the QI-Core profiles

Some of the above topics are under active investigation and will be topics of future standards efforts. Specifically,
the FHIR [Clinical Reasoning]({{site.data.fhir.path}}clinicalreasoning-module.html) module provides resources and
guidance representing and evaluating quality improvement artifacts within FHIR.

Consistent with changes in QI-Core STU 6.0, this STU 7.0 includes simplification to reduce the number of must support elements and further constraints on US Core content. The approach in previous QI-Core versions listed as [key elements](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#model-views) all metadata that might be relevant to clinical quality measurement and clinical decision support use cases. QI-Core STU 7.0 advances the concept that measurement and decision support real-world use cases should drive content for the IG. Thus, the profile key element tables are more concise, including only those elements necessary due to the base resource or relevant US Core profile and those elements used by tested and implemented use cases.


### Privacy, Security, and Consent

Quality applications may make use of patient-specific information. For this reason, all transactions must be
appropriately secured, limiting access to authorized individuals and protecting data while in transit (as laid out in
the [FHIR Implementer's Safety Check List]({{site.data.fhir.path}}safety.html#7.10.1)). These 
considerations relate to any FHIR implementation, including authentication, authorization, access control
consistent with patient consent, transaction logging, and following best practices. QI-Core security conformance rules are as follows:

<div class="new-content" markdown="1">

-  Systems **SHOULD** refer to BCP195 to ensure transmissions are taking place over a secure network connection.
</div>

-  Systems **SHOULD** use OAuth or an equivalent mechanism to provide necessary authentication (user or system-level).
-  Systems **SHOULD** use either IHE's ATNA standard for audit logging or an equivalent using the AuditEvent resource.

The server (data provider) is responsible for ensuring that any necessary consent records exist and are
reviewed prior to each exchange of patient-identifiable healthcare information. This verification should be logged in
the same manner as other transactions, as discussed above under General Security Considerations.

### Provenance

QI-Core addresses provenance at a data element level. We address data element provenance as defined by each respective
FHIR resource.  Each FHIR resource has its own way to address provenance (author, performer, author or issued date,
occurrence date, etc.). Therefore, we assure QI-Core can handle provenance based on the resource modeling.  The US
domain Quality Data Model handles provenance in the same way and the mapping tables from QDM attributes to QI-Core/FHIR
resource elements occurs at that level. There are some instances for which QI-Core creates extensions to ensure it
captures the resource-specific data provenance. Decisions to create such extensions are intentionally consistent with
each resource owner's future FHIR version direction and with discussions with the HL7 Work Groups responsible for the
respective resource. QI-Core closely follows US Core and will address future US Core versions that enhance its
approach to provenance.

### Relationship to Other Initiatives

QI-Core has been harmonized with other FHIR-based initiatives, particularly, the
[Data Access Framework (DAF)](https://oncprojectracking.healthit.gov/wiki/display/TechLabSC/DAF+Home).
[US Core]({{site.data.fhir.ver.uscore}}) is a US Realm Implementation Guide, developed under the DAF initiative, that
maps ONC Common Clinical Data Set elements to FHIR resources. The data elements in US Core are also in QI-Core, and
whenever possible, profiles defined in QI-Core are derived from the profiles in US Core. As a result, conforming to US
Core automatically satisfies a significant subset of the conformance requirements of QI-Core. QI-Core conformance
involves supporting certain additional data elements not required by US Core, because they are needed for quality
measures or clinical decision support.

Because QI-Core profiles derive from US Core profiles where possible, wherever US Core defines a binding, the QI-Core
profiles inherit that binding. QI-Core may specify additional constraints, such as requiring a binding that is only
preferred in the US Core base profile, but in general, the QI-Core profiles use the same bindings as US Core. This means
that QI-Core is currently a US Realm specification. To support applications outside the US Realm, additional binding
analysis and effort would be required.

<div class="new-content" markdown="1">
This IG contains only one QI-Core-specific extension "QI-Core Key Element Extension" to enable entry of (QI) references to specific profile elements. Otherwise, this IG uses only FHIR or US Core extensions. Other initiatives that the QI-Core effort is aligning with include the
[Clinical Information Modeling Initiative (CIMI)](https://confluence.hl7.org/display/CIMI/Mission%2C+Charter%2C+Work+Products%2C+HL7+Working+Group+Relationships) and [Graphite Health](https://www.graphitehealth.io/).
</div>

In addition, the QI-Core effort *continues* to update the mapping from QDM to QI-Core such that a CQL-based artifact written with QDM as the model would be executable against a QI-Core compliant FHIR endpoint.

### Naming Conventions

QI-Core profiles are indicated by the prefix "QICore". For example, the QI-Core profile of Patient is named QICorePatient.

### Extensions and Mappings

QI-Core adds a variety of [extensions](extensions.html) to core FHIR classes. These extensions derive from two primary
sources: the Quality Improvement Domain Analysis Model (QIDAM), and the Quality Data Model (QDM). Profile pages contain
definitions of extensions and mappings to QDM as an aid for current users of QDM.

### MustSupport Flag

<div class="new-content" markdown="1">

QI-Core inherits Must Support references from US Core and so the [requirements on "MustSupport" defined in US Core]({{site.data.fhir.ver.uscore}}/must-support.html) must be respected; QI-Core does not add any Must Support elements.

QI-Core flags elements that the quality improvement community has identified as significant to express the full intent of measures 
and CDS artifacts or those that are used in established measures or CDS support services. Implementers are only required to support 
these additional elements when they are used in the measures or CDS artifacts implemented on or otherwise supported by the system. 
Since not all artifacts use each of these additional elements, QI-Core does not use the “MustSupport” flag to indicate these elements. 
Instead, “(QI)” is prepended to the element’s short description found in the Description & Constraints column of the Key Elements Table, 
and the computable [QI-Core Key Element Extension](StructureDefinition-qicore-keyelement.html) is added to each element definition. This approach 
allows IGs that extend QI-Core, such as those representing data requirements for specific measures or supporting CDS, to avoid inheriting requirements for those QI-Core-flagged elements that they do not use. This is inspired by the way that [US Core communicates USCDI requirements]({{site.data.fhir.ver.uscore}}/must-support.html#uscdi-requirements).

Quality improvement artifacts communicate the elements they reference using the DataRequirement structure in FHIR. This structure allows 
the base resource type and profile to be specified, as well as a MustSupport element that indicates which elements of the resource and 
profile are reference by the logic. Implementers can use this information directly from the effective data requirements to determine 
which elements must be provided to achieve a successful evaluation of the artifact. In addition, repositories and publishers may 
make use of this information to define artifact-specific profiles using the effective data requirements provided by the artifact.
</div>

### Modifying Attributes

Within FHIR resources, some elements are considered [Modifying Elements]({{site.data.fhir.path}}conformance-rules.html#isModifier),
indicating that the value of that element may change the interpretation of the resource.
Examples of modifying elements include status (in many resources), negations (e.g. Immunization.wasNotGiven),
and certainty qualifications (e.g. Observation.reliability). Decision support and
quality implementations MUST always check the values of modifying elements. For example, in processing an Immunization
resource, the application must inspect the "wasNotGiven" element to determine whether the immunization was given or was
not given to the patient. For this reason, applications that make use of resources must make sure they handle modifier elements appropriately.



### Identifying Occupational Data for Health
{: #Identifying-Occupational-Data-for-Health}

The profile inherited from US Core Observation Occupation Profile is based upon the core FHIR Observation Resource and implements 
the US Core Data for Interoperability (USCDI) Occupation and Occupation Industry requirements. 
That profile's Example Usage Scenarios include:

- Query for a patient’s work history
- [Record or update](https://www.hl7.org/fhir/us/core/future-of-US-core.html#future-candidate-requirements-under-consideration) past or present jobs belonging to a patient

To obtain information regarding other Occupational Data for Health (ODH)-specific concepts as indicated in the ODH version 
STU 1.3 [Artifacts Summary](https://hl7.org/fhir/us/odh/STU1.3/artifacts.html) use the QI-Core SimpleObservation profile Observation.code 
element to reference the exact LOINC code referenced by the specific ODH element of interest (e.g., 74165-2 for History of employment 
status NIOSH; 11341-5 for History of Occupation, 87510-4 Date of Retirement, etc.).

### Negation in QI-Core
{: #negation-in-qi-core}


QI-Core’s concept of negation follows the informative publication established by HL7.[^1] QI-Core constrains these concepts in the following way:

[^1]: For further information about representing negatives in HL7 standards, see: HL7 Cross Paradigm Specification: Representing Negatives, Release I. April 2022. Available at: <http://www.hl7.org/implement/standards/product_brief.cfm?product_id=592>. Retrieved 31 December 2023.

1.  Absence of data

    The measure or CDS artifact uses CQL to determine that an expected record artifact does not exist

2.  Documented absence of data with a valid reason

    The measure or CDS artifact uses specifically designed QI-Core profiles to indicate that an activity intentionally did not occur for a valid reason.

When there is a need to document evidence that an expected activity was not done due to patient intent and/or specific criteria, 
systems should use one of the ten QI-Core specific *negation* *rationale* patterns that align with existing profiles representing the expected actions. 
<a href="negation.html"><b>QI-Core Negation</b></a> provides detailed descriptions and guidance.


### Terminology Bindings

Uniformity in vocabularies and value sets enhances the interoperability of knowledge artifacts, but also forces data
owners to translate local data into the required vocabulary. As a US Realm product, QI-Core requires value sets and
vocabularies referenced in the ONC Common Clinical Data Set (CCDS) and the US Core Data for Interoperability. Because
QI-Core is expected to be applied outside the US Realm, and in clinical settings where local terminologies exist,
US Realm bindings could be  accompanied by alternative codes as translation codes in the QI-Core profiles. In the case
that the US Core Data for Interoperability adopts QI-Core and CQL, policy should be created to mandate the
preferred bindings given in the standard.

Note that quality improvement artifact authors should pay close attention to binding parameters specified in the
profiles to determine whether the value set defined in the binding is exemplar or should be constrained to a specific
value set when used. For example, the code element of the MedicationRequest profile is bound to the complete value set
for the RxNorm code system, indicating that all MedicationRequest instances **SHALL** use codes from the RxNorm code system,
but within any given artifact, instances will typically use a restricted value set.

### Resource References and "Any"

FHIR resources frequently contain references (pointers) to other FHIR resources. For example, Encounter.patient is a
reference to a Patient resource. In QI-Core, most references are constrained to QICore-profiled resources. For example,
QICore-Encounter.patient must point to a Patient resource that conforms to the QICore-Patient profile. Consequently, any
extensions or bindings expected to exist in QICore-Patient are also present in the resource pointed to by
Encounter.patient. References to QI-Core extensions accessed through references are guaranteed to be valid. References to resources that do not currently have
QI-Core profiles are not constrained, and as such, only the core FHIR properties and bindings are guaranteed to exist.

A particular problem occurs when a resource reference permits any type of resource, such as Encounter.indication. When
dealing with "Any" references, the current method of specifying profiles does not allow the profile author to specify
something to the effect of "a QI-Core resource when there is one, and a FHIR core resource if there isn't." In QI-Core,
the resources in "Any" references SHALL conform to QI-Core profiles if the base resource has been profiled.

### Summary of Conformance Requirements

Conformance to this QI-Core Implementation Guide requires the following (in addition to adherence to core FHIR requirements):

-  Implementations **SHALL** support all profile types in the QI-Core set (listed in the [profiles](profiles.html) page) for resources they exchange

<div class="new-content" markdown="1">
-  This IG does not define the capability statements as it does not address accessing patient level data directly via API calls; however, server implementations **SHALL** declare their support of the QI-Core profiles in a FHIR CapabilityStatement.
</div>

-  Conformant servers will at minimum support FHIR's read and search operations
-  Servers **SHALL** supply the MustSupport data elements whenever that data is available
-  Quality improvement applications **SHALL** recognize and process all MustSupport elements in QI-Core
-  Modifying attributes **SHALL** be treated as MustSupport, even if not explicitly declared
-  The resources in "Any" references **SHALL** conform to QI-Core profiles if the base resource has a QI-Core profile
-  Applications **SHALL NOT** process resource instances that include unknown modifying attributes
-  Applications **SHOULD** use the preferred value sets
-  In the US Realm, applications **SHALL** be simultaneously compliant with QI-Core profiles and US Core profiles. As such, the more restrictive bindings between US Core and QI-Core **SHALL** be adhered to. For example, all value sets that are required in US Core **SHALL** be required by QI-Core, regardless of the binding strength in QI-Core.

### Author Information

|Author Name|Affiliation|Role|
|---|---|---|
|Abdullah Rafiqi|ICF|Editor|
|Anne Smith|NCQA|Contributor|
|Ben Hamlin|NCQA|Contributor|
|Bryn Rhodes|Smile Digital Health|Editor|
|Chris Moesel|The MITRE Corporation|Contributor|
|Claude Nanjo|University of Utah|Originator|
|Claudia Hall||Contributor|
|Floyd Eisenberg|iParsimony, LLC|Primary|
|James Bradley|The MITRE Corporation|Contributor|
|Jason Walonoski|The MITRE Corporation|Contributor|
|Jen Seeman|ICF|Editor|
|Juliet Rubini|ICF|Contributor|
|Karl Naden|The MITRE Corporation|Contributor|
|Linda Michaelsen|Optum|Contributor|
|Mark Kramer|The MITRE Corporation|Originator|
|Jason Mathews|The MITRE Corporation|Originator|
|Lisa Anderson|Mathematica|Contributor|
|Lloyd McKenzie|Gevity Consulting|Contributor|
|Marc Hadley|The MITRE Corporation|Contributor|
|Paul Denning|The MITRE Corporation|Contributor|
|Peter Muir|ICF, Inc.|Contributor|
|Raman Srinivasan|IBM Watson Health|Contributor|
|Robert Samples||Contributor|
|Sam Sayer|The MITRE Corporation|Contributor|
|Stan Rankins|Telligen|Contributor|
|Yan Heras|Optimum eHealth, LLC|Contributor|
|Yanyan Hu|The Joint Commission|Contributor|
{: .list}


---

// File: input/pages/modelinfo.md

{: toc}

{: #modelinfo}

To support implementations using Clinical Quality Language (CQL) and QI-Core, model information for this IG is provided in conformance with [Using ModelInfo](https://hl7.org/fhir/uv/cql/using-modelinfo.html) in the Using CQL with FHIR IG.  
This implementation guide includes a QICore Model Definition [(QICore ModelInfo Library)](Library-QICore-ModelInfo.html) library that provides model information for the profiles and extensions defined in QI-Core. To use the QICore model, include a using declaration as shown in the example below:
```cql
using QICore version '7.0.0'
```
Although not required by CQL, current best-practice is to include the version of the QICore model. For more information about how this library is constructed, refer to the [Using ModelInfo topic in the Using CQL with FHIR IG](https://hl7.org/fhir/uv/cql/using-modelinfo.html).


Complete documentation for this tooling is provided in the CQFramework github repository:

[https://github.com/cqframework/cqf-tooling/blob/23c5f8b12b79cf1036c3d813a2dffe22d44c355b/tooling/src/main/java/org/opencds/cqf/tooling/modelinfo/StructureDefinitionToModelInfo.java#L45](https://github.com/cqframework/cqf-tooling/blob/23c5f8b12b79cf1036c3d813a2dffe22d44c355b/tooling/src/main/java/org/opencds/cqf/tooling/modelinfo/StructureDefinitionToModelInfo.java#L45)

As an example, to generate the ModelInfo file for QICore version 7.0.0, the following arguments are used:

```
-GenerateMIs -ip=C:\Users\UserName\Documents\Src\HL7\FHIR-Spec -rp="4.0.1;US-Core/7.0.0;QI-Core/7.0.0" -mn=QICore -mv=7.0.0 -im=false -ucp=true
```




---

// File: input/pages/negation.md

{:toc}

{: #QICore-Negation}

###  QI Core Negation Profile Index

For common workflow activities, QI-Core defines general profiles that establish expectations for exchange in general, as well as two derived profiles, a positive and negative profile to define constraints for making positive and negative statements about activities:

| **QI-Core General Profile**                                                                 | **QI-Core Positive Profile**                                                                                | **QI-Core Negation Profile**                                                                                | **Base Resource**                                                                |
|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [QICore Communication](StructureDefinition-qicore-communication.html)                       | [QICore Communication Done](StructureDefinition-qicore-communicationdone.html)                              | [QICore Communication Not Done](StructureDefinition-qicore-communicationnotdone.html)                       | [Communication]({{site.data.fhir.path}}communication.html)                       |
| [QICore DeviceRequest](StructureDefinition-qicore-devicerequest.html)                       | [QICore Device Requested](StructureDefinition-qicore-devicerequested.html)                                  | [QICore Device Prohibited](StructureDefinition-qicore-deviceprohibited.html)                                | [DeviceRequest]({{site.data.fhir.path}}devicerequest.html)                       |
| [QICore Immunization](StructureDefinition-qicore-immunization.html)                         | [QICore Immunization Done](StructureDefinition-qicore-immunizationdone.html)                                | [QICore Immunization Not Done](StructureDefinition-qicore-immunizationnotdone.html)                         | [Immunization]({{site.data.fhir.path}}immunization.html)                         |
| [QICore MedicationAdministration](StructureDefinition-qicore-medicationadministration.html) | [QICore MedicationAdministration Done](StructureDefinition-qicore-medicationadministrationdone.html)        | [QICore MedicationAdministration Not Done](StructureDefinition-qicore-medicationadministrationnotdone.html) | [MedicationAdministration]({{site.data.fhir.path}}medicationadministration.html) |
| [QICore MedicationDispense](StructureDefinition-qicore-medicationdispense.html)             | [QICore MedicationDispense Done](StructureDefinition-qicore-medicationdispensedone.html)                    | [QICore MedicationDispense Declined](StructureDefinition-qicore-medicationdispensedeclined.html)            | [MedicationDispense]({{site.data.fhir.path}}medicationdispense.html)             |
| [QICore MedicationRequest](StructureDefinition-qicore-medicationrequest.html)               | [QICore MedicationRequested](StructureDefinition-qicore-medicationrequested.html)                           | [QICore Medication Prohibited](StructureDefinition-qicore-medicationprohibited.html)                        | [MedicationRequest]({{site.data.fhir.path}}medicationrequest.html)               |
| [QICore Procedure](StructureDefinition-qicore-procedure.html)                               | [QICore Procedure Done](StructureDefinition-qicore-proceduredone.html)                                      | [QICore Procedure Not Done](StructureDefinition-qicore-procedurenotdone.html)                               | [Procedure]({{site.data.fhir.path}}procedure.html)                               |
| [QICore ServiceRequest](StructureDefinition-qicore-servicerequest.html)                     | [QICore ServiceRequested](StructureDefinition-qicore-servicerequested.html)                                 | [QICore Service Prohibited](StructureDefinition-qicore-serviceprohibited.html)                              | [ServiceRequest]({{site.data.fhir.path}}servicerequest.html)                     |
| [QICore Task](StructureDefinition-qicore-task.html)                                         | [QICore Task Done](StructureDefinition-qicore-taskdone.html)                                                | [QICore Task Rejected](StructureDefinition-qicore-taskrejected.html)                                        | [Task]({{site.data.fhir.path}}task.html)                                         |

Each of the QI-Core negation rationale profiles define at least the following information:

-   What activity/event did not occur (typically in terms of a value set or list of codes, or as a reference to a request)
-   Explicit indication that the action/event did not or should not occur (such as doNotPerform or a status of notDone)
-   Date, and optionally, a time a clinician indicated a reason for avoiding the activity/event
-   The reason the activity/event did not occur (Preferably represented using one of an established set of [Negation Reason Codes](ValueSet-qicore-negation-reason.html))

**NOTE:** Although these aspects are all present within each negation profile defined by QI-Core, they are represented differently in the various FHIR resources. As a result, each negation profile uses a combination of constraints and extensions to ensure complete representation of negated actions or events within QI-Core.

### Using QI-Core Negation Profiles

#### Kinds of Negation Statements

The QICore negation profiles support three general classes of negation statements:

1. Documentation that an activity was not performed for a reason (i.e. a notDone event)
2. Documentation that an activity should not be performed for a reason (i.e. a doNotPerform request)
3. Documentation that a request was not performed for a reason (i.e. a taskRejected)
 
#### Extent of Negation

The negation profiles in QI-Core can be used to make two different types of negative statements:

1.	 Documentation that a particular activity/event should not or did not occur
2.	 Documentation that a class of activities/events should not or did not occur (typically represented with a value set)

##### Documenting one member of a value set was not performed for a given reason.

In the following example the measure numerator criterion allows for documentation that specifies a single antithrombotic medication using a CodeableConcept drawn from the list of possible expected medications (in the values set) was not administered. In the example the profiled MedicationAdministration resource documents that the clinician specifically did not administer ticagrelor 90 MG Oral Tablet because drug treatment is not indicated. The evidence of a reason for not administering this single member of the value set “Antithrombotic Therapy for Ischemic Stroke” fulfills criteria for the numerator.

See the <a href="MedicationAdministration-negation-with-code-example.html">MedicationAdministration</a> example using a specific code) for a complete example.

```json
{
    "resourceType" : "MedicationAdministration",
    "id" : "negation-with-code-example",
    "meta" : {
        "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-medicationadministrationnotdone"]
    },
    "extension" : [{
        "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-MedicationAdministration.recorded",
        "valueDateTime" : "2015-01-15"
    }],
    "status" : "not-done",
    "statusReason" : [{
        "coding" : [{
            "system" : "http://snomed.info/sct",
            "code" : "183966005",
            "display" : "Drug treatment not indicated (situation)"
        }]
    }],
    "medicationCodeableConcept" : {
        "coding" : [{
            "system" : "http://www.nlm.nih.gov/research/umls/rxnorm",
            "code" : "1116635",
            "display" : "ticagrelor 90 MG Oral Tablet"
        }]
    },
    "subject" : ...,
    "context" : ...,
    "supportingInformation" : ...,
    "effectivePeriod" : ...,
    "request" : ...,
    "note" : ...,
    "dosage" : ...
}
```

##### Documenting no members of an entire value set were performed for a given reason.

This is applicable when a measure criterion can be satisfied when none of the medications in a value set is administered for a specified reason. This can occur when the no treatment of the type included in the value set is appropriate. The approach provided allows systems to document using one profiled data instance that none of the activities in a particular value set were performed, rather than requiring documentation of multiple individual activities from the value set.

The following example documents that providers did not prescribe any of the medications in the "Antithrombotic Therapy for Ischemic Stroke" value set using the <a href="http://hl7.org/fhir/StructureDefinition/codeOptions">codeOptions</a> extension fulfills criteria for the numerator:

**NOTE:** Implementing systems must ensure that this approach does not result in conflicting data. For example, the above example indicating no administration of a medication in the Antithrombotic Therapy value set should not be used if there are administrations of individual medications in the same value set. In other words, it is a contradiction to say "a provider administered a specific medication" at the same time as "a provider did not administer any of the medications in this value set" if that value set includes the medication that was administered in the specific case.

See the <a href="MedicationAdministration-negation-example.html">MedicationAdministration example using a value set</a> for a complete example.

<div class="new-content" markdown="1">

```json
{
    "resourceType" : "MedicationAdministration",
    "id" : "negation-example",
    "meta" : {
        "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-medicationadministrationnotdone"]
    },
    "extension" : [{
        "url" : "http://hl7.org/fhir/5.0/StructureDefinition/extension-MedicationAdministration.recorded",
        "valueDateTime" : "2015-01-15"
    }],
    "status" : "not-done",
    "statusReason" : [{
        "coding" : [{
            "system" : "http://snomed.info/sct",
            "code" : "183966005",
            "display" : "Drug treatment not indicated (situation)"
        }]
    }],
    "medicationCodeableConcept" : {
        "extension" : [{
            "url" : "http://hl7.org/fhir/StructureDefinition/codeOptions",
            "valueCanonical" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1110.62"
        }],
        "text" : "Value Set: Antithrombotic Therapy for Ischemic Stroke"
    },
    "subject" : ...,
    "context" : ...,
    "supportingInformation" : ...,
    "effectivePeriod" : ...,
    "request" : ...,
    "note" : ...,
    "dosage" : ...
}
```

</div>

#### Do Not Perform Requests

To indicate that an activity should not be performed, use the "Prohibited" profiles:

* [DeviceProhibited](StructureDefinition-qicore-deviceprohibited.html)
* [MedicationProhibited](StructureDefinition-qicore-medicationprohibited.html)
* [ServiceProhibited](StructureDefinition-qicore-serviceprohibited.html)

##### Request not to perform a specific activity

The following example illustrates a request not to apply Graduated compression elastic hosiery:

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "negation-example-code",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-serviceprohibited"]
  },
  "status" : "completed",
  "intent" : "order",
  "category" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "387713003",
      "display" : "Surgical Procedure"
    }]
  }],
  "priority" : "urgent",
  "doNotPerform" : true,
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "348681001",
      "display" : "Graduated compression elastic hosiery (physical object)"
    }]
  },
  "subject" : ...,
  "encounter" : ...,
  "occurrenceDateTime" : "2013-04-05",
  "authoredOn" : "2013-04-04",
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "416406003",
      "display" : "Procedure discontinued (situation)"
    }]
  }]
}
```

See the [Service Prohibited With Code Example](ServiceRequest-negation-example-code.html) for a complete example.

##### Request not to perform any of a class of activities

The following example illustrates a request not to apply any of a class of devices, indicated by the Intermittent pneumatic compression devices values set:

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "negation-example",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-serviceprohibited"]
  },
  "status" : "completed",
  "intent" : "order",
  "category" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "387713003",
      "display" : "Surgical Procedure"
    }]
  }],
  "priority" : "urgent",
  "doNotPerform" : true,
  "code" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/codeOptions",
      "valueCanonical" : "http://cts.nlm.nih.gov/fhir/2.16.840.1.113883.3.117.1.7.1.214"
    }],
    "text" : "Value Set: Intermittent pneumatic compression devices (IPC)"
  },
  "subject" : ...,
  "encounter" : ...,
  "occurrenceDateTime" : "2013-04-05",
  "authoredOn" : "2013-04-04",
  "reasonCode" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "416406003",
      "display" : "Procedure discontinued (situation)"
    }]
  }],
  "bodySite" : ...
}
```

See the [Service Prohibited Example](ServiceRequest-negation-example.html) for a complete example.

#### Rejected Requests

To indicate that a request to perform an activity was rejected, use the task pattern:

1. A request resource indicating the activity to be performed (or not performed)
2. A TaskRejected with the request resource as `focus`, indicating the request to perform the activity was rejected

As with not done events and orders not to perform, the extent of negation for a rejected request can be a single activity, or any of a class of activities:

##### Rejecting a proposal to perform a specific activity

To indicate that a request to perform a specific activity was rejected:

First, the request to perform a specific activity as a ServiceRequest:

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "proposal-example-code",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-servicerequested"]
  },
  "status" : "active",
  "intent" : "proposal",
  "priority" : "urgent",
  "code" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "348681001",
      "display" : "Graduated compression elastic hosiery (physical object)"
    }]
  },
  "subject" : ...,
  "encounter" : ...,
  "occurrenceDateTime" : "2013-04-05",
  "authoredOn" : "2013-04-04"
}
```

Second, a fulfillment task with a status of `rejected` and the `focus` referencing the proposal:

```json
{
  "resourceType" : "Task",
  "id" : "rejected-with-code-example",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-taskrejected"]
  },
  "status" : "rejected",
  "statusReason" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "275936005",
      "display" : "Patient noncompliance - general (situation)"
    }]
  },
  "intent" : "proposal",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "fulfill",
      "display" : "Fulfill the focal request"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/proposal-example-code"
  },
  "for" : ...,
  "executionPeriod" : ...
}
```

See the [Service Requested With Code](ServiceRequest-proposal-example-code.html) for a complete example.

See the [Task Rejected With Code Example](Task-rejected-with-code-example.html) for a complete example.

##### Rejecting a proposal to perform any of a class of activities

To indicate that a request to perform any of a class of activities was rejected:

Similar to the specific activity case, first a request to perform any of a class of activities:

```json
{
  "resourceType" : "ServiceRequest",
  "id" : "proposal-example",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-servicerequested"]
  },
  "status" : "active",
  "intent" : "proposal",
  "category" : [{
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "387713003",
      "display" : "Surgical Procedure"
    }]
  }],
  "priority" : "urgent",
  "code" : {
    "extension" : [{
      "url" : "http://hl7.org/fhir/StructureDefinition/codeOptions",
      "valueCanonical" : "http://cts.nlm.nih.gov/fhir/2.16.840.1.113883.3.117.1.7.1.214"
    }],
    "text" : "Value Set: Intermittent pneumatic compression devices (IPC)"
  },
  "subject" : ...,
  "encounter" : ...,
  "occurrenceDateTime" : "2013-04-05",
  "authoredOn" : "2013-04-04"
}
```

Followed by a fulfillment task with a status of `rejected` and the `focus` referencing the proposal:

```json
{
  "resourceType" : "Task",
  "id" : "rejected-example",
  "meta" : {
    "profile" : ["http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-taskrejected"]
  },
  "status" : "rejected",
  "statusReason" : {
    "coding" : [{
      "system" : "http://snomed.info/sct",
      "code" : "275936005",
      "display" : "Patient noncompliance - general (situation)"
    }]
  },
  "intent" : "proposal",
  "code" : {
    "coding" : [{
      "system" : "http://hl7.org/fhir/CodeSystem/task-code",
      "code" : "fulfill",
      "display" : "Fulfill the focal request"
    }]
  },
  "focus" : {
    "reference" : "ServiceRequest/proposal-example"
  },
  "for" : ...,
  "executionPeriod" : ...
}
```

See the [Service Requested Example](ServiceRequest-proposal-example.html) for a complete example.

See the [Task Rejected Example](Task-rejected-example.html) for a complete example.

### Negation in CQL

For quality measurement and reporting, measure expression may only need to determine the existence or absence of an activity or event to determine if criteria have been met. If the reason for absence is not relevant to the measure evaluation, the absence of evidence pattern should be used as described on the [Patterns page of the Using CQL with FHIR IG]({{site.data.fhir.ver.cql}}/patterns.html#negation-in-fhir).


---

// File: input/pages/patterns.md

{:toc}

{: #QICore-Patterns}

The patterns described here have been developed through usage of QI-Core profiles in the development of
CQL-based quality measures and decision support. CMS program measures can be accessed at [HealthIT.gov](https://ecqi.healthit.gov/). Multiple repositories of draft FHIR-based measures have been developed and are indexed in the [eCQM Content Index](https://github.com/cqframework/ecqm-content) repository.

> NOTE: The examples in this section follow recommended best-practices as of the time of publication. However, these practices are constantly being revised based on implementer and community feedback. For a complete discussion of authoring patterns, see the [Authoring Patterns](https://github.com/cqframework/CQL-Formatting-and-Usage-Wiki/wiki/Authoring-Patterns) topic in the CQL Formatting and Usage Wiki.


#### Primitives

The QI-Core model info represents FHIR primitive elements using the system types directly, so when using QI-Core, no `.value` accessor is required.

To facilitate implementation in FHIR, references to primitive elements are translated to the FHIR representation using the same `FHIRHelpers` library used for pure-FHIR artifacts, so this library is still required as a runtime, rather than a compile-time dependency for profile-informed authoring models.

In profile-informed authoring, the primitive type is mapped to the CQL type and represented with the CQL type in the model. So a `FHIR.string` element is modeled as a `System.String`, and the translator maps that to the `FHIR.string` value using the `FHIRHelpers` library.

```cql
include FHIRHelpers version '4.0.1'
```

Note that the FHIRHelpers version must be consistent with the FHIR version being used.

#### Extensions

Extensions in FHIR provide a standard mechanism to describe additional content that is not part of the base
FHIR resources. By defining extensions in a uniform way as part of the base specification, FHIR enables extension-based functionality to be introduced through the use of profiles and implementation guidance. QI-Core includes several extensions related to quality improvement applications.

With profile-informed authoring in QI-Core, extensions and slices defined in profiles are represented directly as elements in the types. For example:

```cql
define TestSlices:
  [USCoreBloodPressure] BP
    where BP.systolic.value < 140 'mm[Hg]'
      and BP.diastolic.value < 90 'mm[Hg]'

define TestSimpleExtensions:
  Patient P
    where P.birthsex = 'M'

define TestComplexExtensions:
  Patient P
    where P.race.ombCategory contains "American Indian or Alaska Native"
      and P.race.detailed contains "Alaska Native"
```

#### Choice Types

FHIR includes the notion of Choice Types, or elements that can be of any of a number of types. For example,
the `Patient.deceased` element can be specified as a `Boolean` or as a `DateTime`. Since CQL also supports choice types, these are manifest directly as Choice Types within the Model Info.

Where appropriate, QI-Core profiles restrict choice types to those that are appropriate for the quality improvement use case. For example, The `QICoreConditionProblemsHealthConcerns` profile removes `String` as a possible type for the `onset` element, to communicate the expectation that a computable representation of onset is required for quality improvement applications.

Quality improvement logic must be prepared to deal with choice elements of any of the available types because systems may communicate instances with values of any of these types. To support the most common usages of choice types (for timing elements), the following functions have been defined:

```cql
define fluent function toInterval(choice Choice<DateTime, Quantity, Interval<DateTime>, Interval<Quantity>>):
  case
	  when choice is DateTime then
    	Interval[choice as DateTime, choice as DateTime]
		when choice is Interval<DateTime> then
  		choice as Interval<DateTime>
		when choice is Quantity then
		  Interval[Patient.birthDate + (choice as Quantity),
			  Patient.birthDate + (choice as Quantity) + 1 year)
		when choice is Interval<Quantity> then
		  Interval[Patient.birthDate + (choice.low as Quantity),
			  Patient.birthDate + (choice.high as Quantity) + 1 year)
		else
			null as Interval<DateTime>
	end

define fluent function abatementInterval(condition Condition):
	if condition.abatement is DateTime then
	  Interval[condition.abatement as DateTime, condition.abatement as DateTime]
	else if condition.abatement is Quantity then
		Interval[Patient.birthDate + (condition.abatement as Quantity),
			Patient.birthDate + (condition.abatement as Quantity) + 1 year)
	else if condition.abatement is Interval<Quantity> then
	  Interval[Patient.birthDate + (condition.abatement.low as Quantity),
		  Patient.birthDate + (condition.abatement.high as Quantity) + 1 year)
	else if condition.abatement is Interval<DateTime> then
	  Interval[condition.abatement.low, condition.abatement.high)
	else null as Interval<DateTime>

define fluent function prevalenceInterval(condition Condition):
if condition.clinicalStatus ~ "active"
  or condition.clinicalStatus ~ "recurrence"
  or condition.clinicalStatus ~ "relapse" then
  Interval[start of ToInterval(condition.onset), end of ToAbatementInterval(condition)]
else
  Interval[start of ToInterval(condition.onset), end of ToAbatementInterval(condition))

define fluent function latest(choice Choice<DateTime, Quantity, Interval<DateTime>, Interval<Quantity>> ):
  (choice.toInterval()) period
    return
      if period.hasEnd() then end of period
      else start of period

define fluent function earliest(choice Choice<DateTime, Quantity, Interval<DateTime>, Interval<Quantity>> ):
  (choice.toInterval()) period
    return
      if period.hasStart() then start of period
      else end of period
```

Note that these functions make use of the FHIRHelpers library to ensure correct processing.

> NOTE: The examples throughout this topic have been simplified to illustrate specific usage. Refer to the originating context for complete expressions.


---

// File: input/pages/profiles.md

{:toc}

### QI-Core Profiles
The following table lists the QI-Core profiles that are part of the IG, which US Core profile they are derived from, if any, and the underlying FHIR resources:

<br>


|QI-Core (7.0.0) Profile|US Core (7.0.0) Profile|FHIR Resource|
|----|:----:|----:|
|**2.1.1 AdverseEvent**|
|&emsp; [QICore AdverseEvent](StructureDefinition-qicore-adverseevent.html)| &mdash; |&emsp; [ AdverseEvent]({{site.data.fhir.path}}adverseevent.html)|
|**2.1.2 AllergyIntolerance**|
|&emsp; [QICore AllergyIntolerance](StructureDefinition-qicore-allergyintolerance.html)| [US Core AllergyIntolerance]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-allergyintolerance.html) |&emsp; [ AllergyIntolerance]({{site.data.fhir.path}}allergyintolerance.html)|
|**2.1.3 BodyStructure**|
|&emsp; [QICore BodyStructure](StructureDefinition-qicore-bodystructure.html)| &mdash; |&emsp; [ BodyStructure]({{site.data.fhir.path}}bodystructure.html)|
|**2.1.4 CarePlan**|
|&emsp; [QICore CarePlan](StructureDefinition-qicore-careplan.html)| [US Core CarePlan]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-careplan.html) |&emsp; [ CarePlan]({{site.data.fhir.path}}careplan.html)|
|**2.1.5 CareTeam**|
|&emsp; [QICore CareTeam](StructureDefinition-qicore-careteam.html)| [US Core CareTeam]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-careteam.html) |&emsp; [ CareTeam]({{site.data.fhir.path}}careteam.html)|
|**2.1.6 Claim**|
|&emsp; [QICore Claim](StructureDefinition-qicore-claim.html)| &mdash; |&emsp; [ Claim]({{site.data.fhir.path}}claim.html)|
|**2.1.7 ClaimResponse**|
|&emsp; [QICore ClaimResponse](StructureDefinition-qicore-claimresponse.html)| &mdash; |&emsp; [ ClaimResponse]({{site.data.fhir.path}}claimresponse.html)|
|**2.1.8 Communication**|
|&emsp; [QICore Communication](StructureDefinition-qicore-communication.html)| &mdash; |&emsp; [ Communication]({{site.data.fhir.path}}communication.html)|
|&emsp; &emsp; [QICore Communication Done](StructureDefinition-qicore-communicationdone.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore Communication Not Done](StructureDefinition-qicore-communicationnotdone.html)| &mdash; | &mdash; |
|**2.1.9 CommunicationRequest**|
|&emsp; [QICore CommunicationRequest](StructureDefinition-qicore-communicationrequest.html)| &mdash; |&emsp; [ CommunicationRequest]({{site.data.fhir.path}}communicationrequest.html)|
|**2.1.10 Condition**|
|&emsp; [QICore Condition Encounter Diagnosis](StructureDefinition-qicore-condition-encounter-diagnosis.html)| [US Core Condition Encounter Diagnosis]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-condition-encounter-diagnosis.html) |&emsp; [ Condition]({{site.data.fhir.path}}condition.html)|
|&emsp; [QICore Condition Problems Health Concerns](StructureDefinition-qicore-condition-problems-health-concerns.html)| [US Core Condition Problems Health Concerns]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-condition-problems-health-concerns.html) |&emsp; [ Condition]({{site.data.fhir.path}}condition.html)|
|**2.1.11 Coverage**|
|&emsp; [QICore Coverage](StructureDefinition-qicore-coverage.html)| [US Core Coverage]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-coverage.html) |&emsp; [ Coverage]({{site.data.fhir.path}}coverage.html)|
|**2.1.12 Device**|
|&emsp; [QICore Device](StructureDefinition-qicore-device.html)| &mdash; |&emsp; [ Device]({{site.data.fhir.path}}device.html)|
|  &mdash; |[US Core Implantable Device]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-implantable-device.html) |&emsp; [ Device]({{site.data.fhir.path}}device.html)|
|**2.1.13 DeviceRequest**|
|&emsp; [QICore DeviceRequest](StructureDefinition-qicore-devicerequest.html)| &mdash; |&emsp; [ DeviceRequest]({{site.data.fhir.path}}devicerequest.html)|
|&emsp; &emsp; [QICore Device Requested](StructureDefinition-qicore-devicerequested.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore Device Prohibited](StructureDefinition-qicore-deviceprohibited.html)| &mdash; | &mdash; |
|**2.1.14 DeviceUseStatement**|
|&emsp; [QICore DeviceUseStatement](StructureDefinition-qicore-deviceusestatement.html)| &mdash; |&emsp; [ DeviceUseStatement]({{site.data.fhir.path}}deviceusestatement.html)|
|**2.1.15 DiagnosticReport**|
|&emsp; [QICore DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-qicore-diagnosticreport-lab.html)&emsp;| [US Core DiagnosticReport Profile for Laboratory Results Reporting]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-diagnosticreport-lab.html) |&emsp; [ DiagnosticReport]({{site.data.fhir.path}}diagnosticreport.html)|
|&emsp; [QICore DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-qicore-diagnosticreport-note.html)| [US Core DiagnosticReport Profile for Report and Note Exchange]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-diagnosticreport-note.html) |&emsp; [ DiagnosticReport]({{site.data.fhir.path}}diagnosticreport.html)|
|**2.1.16 Encounter**|
|&emsp; [QICore Encounter](StructureDefinition-qicore-encounter.html)| [US Core Encounter]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-encounter.html) |&emsp; [ Encounter]({{site.data.fhir.path}}encounter.html)|
|**2.1.17 FamilyMemberHistory**|
|&emsp; [QICore FamilyMemberHistory](StructureDefinition-qicore-familymemberhistory.html)| &mdash; |&emsp; [ FamilyMemberHistory]({{site.data.fhir.path}}familymemberhistory.html)|
|**2.1.18 Flag**|
|&emsp; [QICore Flag](StructureDefinition-qicore-flag.html)| &mdash; |&emsp; [ Flag]({{site.data.fhir.path}}flag.html)|
|**2.1.19 Goal**|
|&emsp; [QICore Goal](StructureDefinition-qicore-goal.html)| [US Core Goal]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-goal.html) |&emsp; [ Goal]({{site.data.fhir.path}}goal.html)|
|**2.1.20 ImagingStudy**|
|&emsp; [QICore ImagingStudy](StructureDefinition-qicore-imagingstudy.html)| &mdash; |&emsp; [ ImagingStudy]({{site.data.fhir.path}}imagingstudy.html)|
|**2.1.21 Immunization**|
|&emsp; [QICore Immunization](StructureDefinition-qicore-immunization.html)| [US Core Immunization]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-immunization.html) |&emsp; [ Immunization]({{site.data.fhir.path}}immunization.html)|
|&emsp; &emsp; [QICore Immunization Done](StructureDefinition-qicore-immunizationdone.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore Immunization Not Done](StructureDefinition-qicore-immunizationnotdone.html)| &mdash; | &mdash; |
|**2.1.22 ImmunizationEvaluation**|
|&emsp; [QICore ImmunizationEvaluation](StructureDefinition-qicore-immunizationevaluation.html)| &mdash; |&emsp; [ ImmunizationEvaluation]({{site.data.fhir.path}}immunizationevaluation.html)|
|**2.1.23 ImmunizationRecommendation**|
|&emsp; [QICore ImmunizationRecommendation](StructureDefinition-qicore-immunizationrecommendation.html)| &mdash; |&emsp; [ ImmunizationRecommendation]({{site.data.fhir.path}}immunizationrecommendation.html)|
|**2.1.24 Location**|
|&emsp; [QICore Location](StructureDefinition-qicore-location.html)| [US Core Location]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-location.html) |&emsp; [ Location]({{site.data.fhir.path}}location.html)|
|**2.1.25 Medication**|
|&emsp; [QICore Medication](StructureDefinition-qicore-medication.html)| [US Core Medication]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-medication.html) |&emsp; [ Medication]({{site.data.fhir.path}}medication.html)|
|**2.1.26 MedicationAdministration**|
|&emsp; [QICore MedicationAdministration](StructureDefinition-qicore-medicationadministration.html)| &mdash; |&emsp; [ MedicationAdministration]({{site.data.fhir.path}}medicationadministration.html)|
|&emsp; &emsp; [QICore MedicationAdministration Done](StructureDefinition-qicore-medicationadministrationdone.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore MedicationAdministration Not Done](StructureDefinition-qicore-medicationadministrationnotdone.html)| &mdash; | &mdash; |
|**2.1.27 MedicationDispense**|
|&emsp; [QICore MedicationDispense](StructureDefinition-qicore-medicationdispense.html)| [US Core MedicationDispense]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-medicationdispense.html)  |&emsp; [ MedicationDispense]({{site.data.fhir.path}}medicationdispense.html)|
|&emsp; &emsp; [QICore MedicationDispense Done](StructureDefinition-qicore-medicationdispensedone.html)| &mdash;  | &mdash; |
|&emsp; &emsp; [QICore MedicationDispense Declined](StructureDefinition-qicore-medicationdispensedeclined.html)| &mdash; | &mdash; |
|**2.1.28 MedicationRequest**|
|&emsp; [QICore MedicationRequest](StructureDefinition-qicore-medicationrequest.html)| [US Core MedicationRequest]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-medicationrequest.html) |&emsp; [ MedicationRequest]({{site.data.fhir.path}}medicationrequest.html)|
|&emsp; &emsp; [QICore Medication Requested](StructureDefinition-qicore-medicationrequested.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore Medication Prohibied](StructureDefinition-qicore-medicationprohibited.html)| &mdash; | &mdash; |
|**2.1.29 MedicationStatement**|
|&emsp; [QICore MedicationStatement](StructureDefinition-qicore-medicationstatement.html)| &mdash; |&emsp; [ MedicationStatement]({{site.data.fhir.path}}medicationstatement.html)|
|**2.1.30 NutritionOrder**|
|&emsp; [QICore NutritionOrder](StructureDefinition-qicore-nutritionorder.html)| &mdash; |&emsp; [ NutritionOrder]({{site.data.fhir.path}}nutritionorder.html)|
|**2.1.31 Observation**|
|&emsp; [QICore Simple Observation](StructureDefinition-qicore-simple-observation.html)| [US Core Simple Observation]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-simple-observation.html) |&emsp; [ Observation]({{site.data.fhir.path}}observation.html)|
|&emsp; [QICore NonPatient Observation](StructureDefinition-qicore-nonpatient-observation.html)| &mdash; |&emsp; [ Observation]({{site.data.fhir.path}}observation.html)|
|&emsp; [QICore Laboratory Result Observation](StructureDefinition-qicore-observation-lab.html)| [US Core Laboratory Result Observation]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-lab.html) |&emsp; [ Observation]({{site.data.fhir.path}}observation.html)|
|&emsp; [QICore Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html)| [US Core Observation Clinical Result]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-clinical-result.html) |&emsp; [ Observation]({{site.data.fhir.path}}observation.html)|
|&emsp; [QICore Observation Screening Assessment](StructureDefinition-qicore-observation-screening-assessment.html)| [US Core Observation Screening Assessment]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-screening-assessment.html) |&emsp; [ Observation]({{site.data.fhir.path}}observation.html)|
|  &mdash;  |[US Core Vital Signs]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-vital-signs.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Blood Pressure]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-blood-pressure.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core BMI]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-bmi.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Body Height]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-height.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Body Temperature]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-temperature.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Body Weight]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-weight.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Head Circumference]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-head-circumference.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Heart Rate]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-heart-rate.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Pediatric BMI for Age Observation]({{site.data.fhir.ver.uscore}}/StructureDefinition-pediatric-bmi-for-age.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Pediatric Head Occipital-frontal Circumference Percentile]({{site.data.fhir.ver.uscore}}/StructureDefinition-head-occipital-frontal-circumference-percentile.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Pediatric Weight for Height Observation]({{site.data.fhir.ver.uscore}}/StructureDefinition-pediatric-weight-for-height.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Pulse Oximetry]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-pulse-oximetry.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Respiratory Rate]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-respiratory-rate.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Smoking Status]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-smokingstatus.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Observation Occupation]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-occupation.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Observation Sexual Orientation]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-sexual-orientation.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Observation Pregnancy Intent]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancyintent.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Observation Pregnancy Status]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancystatus.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Average Blood Pressure]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-average-blood-pressure.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Care Experience Preference]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-care-experience-preference.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|  &mdash;  |[US Core Treatment Intervention Preference]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-treatment-intervention-preference.html) | [Observation]({{site.data.fhir.path}}observation.html) |
|**2.1.32 Organization**|
|&emsp; [QICore Organization](StructureDefinition-qicore-organization.html)| [US Core Organization]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-organization.html) |&emsp; [ Organization]({{site.data.fhir.path}}organization.html)|
|**2.1.33 Patient**|
|&emsp; [QICore Patient](StructureDefinition-qicore-patient.html)| [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) |&emsp; [ Patient]({{site.data.fhir.path}}patient.html)|
|**2.1.34 Practitioner**|
|&emsp; [QICore Practitioner](StructureDefinition-qicore-practitioner.html)| [US Core Practitioner]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-practitioner.html) |&emsp; [ Practitioner]({{site.data.fhir.path}}practitioner.html)|
|**2.1.35 PractitionerRole**|
|&emsp; [QICore PractitionerRole](StructureDefinition-qicore-practitionerrole.html)| [US Core PractitionerRole]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-practitionerrole.html) |&emsp; [ PractitionerRole]({{site.data.fhir.path}}practitionerrole.html)|
|**2.1.36 Procedure**|
|&emsp; [QICore Procedure](StructureDefinition-qicore-procedure.html)| [US Core Procedure]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-procedure.html) |&emsp; [ Procedure]({{site.data.fhir.path}}procedure.html)|
|&emsp; &emsp; [QICore Procedure Done](StructureDefinition-qicore-proceduredone.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore Procedure Not Done](StructureDefinition-qicore-procedurenotdone.html)| &mdash; | &mdash; |
|**2.1.37 QuestionnaireResponse**|
|&emsp; [QICore QuestionnaireResponse](StructureDefinition-qicore-questionnaireresponse.html)| [US Core QuestionnaireResponse]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-questionnaireresponse.html) |&emsp; [ QuestionnaireResponse]({{site.data.fhir.path}}questionnaireresponse.html)|
|**2.1.38 RelatedPerson**|
|&emsp; [QICore RelatedPerson](StructureDefinition-qicore-relatedperson.html)|&emsp; [ US Core RelatedPerson]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-relatedperson.html) |&emsp; [ RelatedPerson]({{site.data.fhir.path}}relatedperson.html)|
|**2.1.39 ServiceRequest**|
|&emsp; [QICore ServiceRequest](StructureDefinition-qicore-servicerequest.html)|&emsp; [ US Core ServiceRequest]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-servicerequest.html) |&emsp; [ ServiceRequest]({{site.data.fhir.path}}servicerequest.html)|
|&emsp; &emsp; [QICore Service Requested](StructureDefinition-qicore-servicerequested.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore Service Prohibited](StructureDefinition-qicore-serviceprohibited.html)| &mdash; | &mdash; |
|**2.1.40 Specimen**|
|  &mdash;  |[US Core Specimen]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-specimen.html)|&emsp; [ Specimen]({{site.data.fhir.path}}specimen.html)|
|**2.1.41 Substance**|
|&emsp; [QICore Substance](StructureDefinition-qicore-substance.html)| &mdash; |&emsp; [ Substance]({{site.data.fhir.path}}substance.html)|
|**2.1.42 Task**|
|&emsp; [QICore Task](StructureDefinition-qicore-task.html)| &mdash; |&emsp; [ Task]({{site.data.fhir.path}}task.html)|
|&emsp; &emsp; [QICore Task Done](StructureDefinition-qicore-taskdone.html)| &mdash; | &mdash; |
|&emsp; &emsp; [QICore Task Rejected](StructureDefinition-qicore-taskrejected.html)| &mdash; | &mdash; |
{: .list}


### Referencing QI-Core Profiles

There are a number of  QI-Core profiles inherited directly from US Core profiles, if any, or other FHIR resources (i.e. US Core Implantable Device Profile, FHIR Vital Signs, US Core Smoking Status etc.) and the underlying Reference elements can address the US Core or FHIR profiles for the items referenced. For any other references to base FHIR resources or not formally defined in a QI-Core Profile, the referenced resource **SHALL** be a QI-Core Profile if a QI-Core Profile exists for the resource type. For example, US Core Smoking Status references US Core Patient profile, the reference to Patient **SHALL** be a valid QI-Core Patient.

Note to Implementers: QI-Core profiles have been developed with the principle that if the profiles only need to provide references to QI-Core Profiles, that is insufficient to require individual QI-Core profiles for all US Core profiles. There are edge cases using this approach where the FHIR validator would not validate an assumption made by the measure author, such as that an encounter traced through an observation is a QI-Core Encounter. We think that general validation of all the resources provided to the context of a measure evaluation can address that risk without the need for deriving specific profiles that only constraint reference types. We seek feedback on this point.

This change will strengthen the requirement to use a QI-Core profile when using a base FHIR or US Core profile not formally defined in QI-Core and to use QI-Core profiles as referenced resources if a QI-Core Profile exists for that resource.


---

// File: input/pages/qdm-to-qicore.md

{:toc}



This page is part of the Quality Improvement Core Framework (v7.0.0: [STU](https://confluence.hl7.org/display/HL7/HL7+Balloting) 7) based on [FHIR R4](http://hl7.org/fhir/R4/). This is the current published version. For a full list of available versions, see the [Directory of published versions](http://hl7.org/fhir/us/qicore/history.html).  

### Introduction

The CMS Quality Data Model (QDM) has been used to express electronic
clinical quality measures (eCQMs) in HQMF since 2012. QDM is a
conceptual data model that has evolved based on feedback, testing and
use. The current version (Version 5.6 for eCQM implementation 2024, 2025 and 2026) and QDM's complete history can be found on the [eCQI Resource Center](https://ecqi.healthit.gov/qdm). Most of
the QDM concepts map directly to US Core R5, FHIR R4 resources or Clinical Quality Framework (CQF) extensions in FHIR Extensions Pack v5.1 and represented in QI-Core.

This version of QI-Core updates mappings from QI-Core to QDM based on
US Core STU7 (v7.0.0) and FHIR R4 and QDM version 5.6. Reviewers can evaluate the
comparisons, represented in the *Mappings* table for each QI-Core
resource. Each *mapping* table shows the QI-Core concept in the
right-hand column and the corresponding QDM datatype(s) and attributes in
the left-hand column. The *mapping* tables primarily reference the QI-Core metadata concepts represented in QDM. 
The tables also include some QI-Core concepts identified as beneficial by measure developers and implementers; such elements appear in the respective table’s middle column (under QI-Core) and have no corresponding left-hand column QDM attributes. The effort mapped the intended
meaning of each QDM datatype and attribute to a QI-Core resource
metadata element. In some cases, multiple QDM datatypes map to a single
QI-Core resource. Since QDM is a conceptual data model some of the elements may not have a direct mapping to a QI-Core profile or one of the items in its respective Key Element Table. Content in the QI-Core profile Key Element Table tabs derive from US Core 7.0.0 requirements, or directly from FHIR 4.0.1 in the absence of a respective US Core profile.

In addition to the QI-Core to QDM comparisons presented with each
QI-Core resource, this section of the implementation guide presents the
mapping directly from QDM concepts. Thus, the IG provides a view of the
mappings in both directions (QI-Core to QDM, and QDM to QI-Core). This
section is divided into 55 sections, one for each QDM concept, or QDM
datatype. Each QDM datatype includes a general description of the
concept and a table mapping each of the QDM datatype-related attributes
to QI-Core metadata elements. Refer to the [eCQI Resource
Center](https://ecqi.healthit.gov/qdm) for the full QDM 5.6
documentation.



### Change from QI-Core STU6 to QI-Core STU7
QI-Core builds upon US Core and new US Core STU7 (7.0.0) profiles include a number of changes that impact expression of requests for information. US Core STU7 also incorporates requirements of [United States Core Data for Interoperability version 3](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi#uscdi-v4). These include new observation profiles.

QI-Core addresses these changes as follows:

1) Observations

QI-Core STU 7 includes 7 observation-related profiles that provide QI-Core-specific constraints with reference to the respective US Core profile. These six observations include:
a)	[QICore Simple Observation](StructureDefinition-qicore-simple-observation.html) – used to capture any “simple” type of observation that is not classified as vital signs, laboratory, imaging, or other more specific observation types; generally used with QDM “Assessment, Performed”
b)	[QICore ObservationCancelled](StructureDefinition-qicore-observationcancelled.html) – used to reference indication that any given observation did not occur for a specific reason; US Core does not include such a profile to address the QDM concept of negation rationale (See section 3.0 QI-Core Negation for a comprehensive description)
c)	[QICore Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) – generally used with QDM “Diagnostic Study, Performed”; based on US Core 7.0.0 Observation Clinical Result, includes non-laboratory clinical test results
d)	[QICore Laboratory Result Observation](StructureDefinition-qicore-observation-lab.html) – generally used with QDM “Laboratory Test, Performed”
e)	[QICore Observation Screening Assessment](StructureDefinition-qicore-observation-screening-assessment.html) – generally used with QDM “Assessment, Performed” when referencing panels of multi-question surveys or evaluation tools
f)	[QICore NonPatient Observation](StructureDefinition-qicore-nonpatient-observation.html) – developed to enable structural measures evaluating available resources for which a patient is not the measure subject; this profile is an approved variance from US Core only for use in structural measures. 
http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-occupation.html


QI-Core STU 7.0.0 also incorporates 20 observation-related profiles directly from US Core. The subsequent mapping tables provide more detail about how to address these new profiles when converting measures from QDM to QI-Core:

a) [US Core Average Blood Pressure Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-average-blood-pressure.html) – generally used with QDM “Physical Exam, Performed”
b.)	[US Core Care Experience Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-care-experience-preference.html) – generally used with QDM “Assessment, Performed” 
c.)	[US Core Observation Occupation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-occupation.html) –generally used with QDM “Assessment, Performed”
d.)	[US Core Observation Pregnancy Intent Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancyintent.html) – generally used with QDM “Assessment, Performed”
e.)	[US Core Observation Pregnancy Status Profile ]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancystatus.html) - generally used with QDM “Assessment, Performed”
f.)	[US Core Observation Sexual Orientation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-sexual-orientation.html) – generally used with QDM “Assessment, Performed”
g.)	[US Core Smoking Status Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-smokingstatus.html) – generally used with QDM “Assessment, Performed”
h.)	[US Core Treatment Intervention Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-treatment-intervention-preference.html) – Generally used with QDM “Assessment, Performed” 
i.)	[US Core Pediatric BMI for Age Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-pediatric-bmi-for-age.html) – generally used with QDM “Physical Exam, Performed”
j.)	[US Core Pediatric Weight for Height Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-pediatric-weight-for-height.html) – generally used with QDM “Physical Exam, Performed”
k.)	[US Core Blood Pressure Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-blood-pressure.html) – generally used with QDM “Physical Exam, Performed”
l.)	[US Core BMI Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-bmi.html) – generally used with QDM “Physical Exam, Performed”
m.)	[US Core Body Height Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-height.html) – generally used with QDM “Physical Exam, Performed”
n.)	[US Core Body Temperature Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-temperature.html) – generally used with QDM “Physical Exam, Performed”
o.)	[US Core Body Weight Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-weight.html) – generally used with QDM “Physical Exam, Performed”
p.)	[US Core Head Circumference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-head-circumference.html) – generally used with QDM “Physical Exam, Performed”
q.)	[US Core Heart Rate Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-heart-rate.html) – generally used with QDM “Physical Exam, Performed”
r.)	[US Core Pulse Oximetry Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-pulse-oximetry.html) – generally used with QDM “Physical Exam, Performed”
s.)	[US Core Respiratory Rate Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-respiratory-rate.html) – generally used with QDM “Physical Exam, Performed”

### Adverse Event

QDM defines Adverse Event as any untoward medical occurrence associated
with the clinical care delivery, whether or not considered drug related.
The concepts aligns with the [FHIR R4 resource Adverse Event.](https://hl7.org/fhir/r4/adverseevent-definitions.html#key_AdverseEvent)
The FHIR resource provides clearer expressivity as compared with QDM.

The HL7 Patient Care Workgroup documented some [use cases](https://confluence.hl7.org/display/PC/Adverse+Event+Use+Cases) and [supporting information](https://confluence.hl7.org/display/PC/Adverse+Event+and+consequence) for using this resource; however, most adverse event information is more identifiable in clinical records as findings, conditions, or observations. Thus, measure developers may find more effective information retrieval by using the condition, simple observation, or specific observation profiles to identify triggers indicating potential adverse events. References for information regarding potential adverse event triggers: [CMS Hospital-Acquired Condition Reduction Program.](https://www.cms.gov/medicare/quality-initiatives-patient-assessment-instruments/value-based-programs/hac/hospital-acquired-conditions)
Also useful: [Institute for Healthcare Improvement Trigger Tool for Measuring Adverse Drug Events (requires registration)](https://www.ihi.org/resources/Pages/Tools/TriggerToolforMeasuringAdverseDrugEvents.aspx)

Much of the detail about adverse events is present in separate risk management systems based on incident reports rather than the electronic health record (EHR) except for some details in unstructured progress notes. For those using this “Adverse Event” QDM datatype, QDM includes an attribute code that represents the specific type of event that occurred, consistent with [AdverseEvent.event](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.event).



QDM does not include an attribute to address the additional elements available in QI-Core: [AdverseEvent.suspectEntity](StructureDefinition-qicore-adverseevent-definitions.html#diff_AdverseEvent.suspectEntity) (the suspected cause), or the [AdverseEvent.resultingCondition](StructureDefinition-qicore-adverseevent-definitions.html#diff_AdverseEvent.resultingCondition). As an example to differentiate these elements:
* [AdverseEvent.event](StructureDefinition-qicore-adverseevent-definitions.html#diff_AdverseEvent.event) = fall
* [AdverseEvent.resultingCondition](StructureDefinition-qicore-adverseevent-definitions.html#diff_AdverseEvent.resultingCondition) = fracture
* [AdverseEvent.suspectEntity](StructureDefinition-qicore-adverseevent-definitions.html#diff_AdverseEvent.suspectEntity) = area rug

QDM version 5.6 (and earlier versions) only address one of these elements, the event.
Therefore, QDM AdverseEvent code maps to AdverseEvent.event. Measure developers seeking to retrieve data about the cause of an AdverseEvent may be able to relate the occurrence timing of a potential causative event and the AdverseEvent.event timing. Further detail about the AdverseEvent will require use of FHIR or potentially a subsequent version of QDM after QDM 5.6.

| **QDM Context**    | **QI-Core STU7**       | **Comments**                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Adverse Event      | [AdverseEvent](StructureDefinition-qicore-adverseevent.html)        |                                                            |
|                    | [AdverseEvent.actuality](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.actuality)                          |    Although not specified in QDM, QI-Core provides the ability to differentiate between potential versus actual events                                                        |
| **QDM Attributes** |                    |                                                            |
| code               | [AdverseEvent.event](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.event)               | Type of the event itself in relation to the subject; reference SNOMED-CT event hierarchy to represent the event in an eCQM. Note: QDM does not include an attribute to address additional elements available in QI-Core: AdverseEvent.suspectEntity (the suspected cause), or the AdverseEvent.resultingCondition. |
| type               | [AdverseEvent.category](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.category)         |                                                            |
| severity           | [AdverseEvent.severity](StructureDefinition-qicore-adverseevent-definitions.html#AdverseEvent.severity)         |                                                            |
| relevantdateTime   | [AdverseEvent.date](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.date)                 |                                                            |
| facilityLocations  | [AdverseEvent.location](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.location)         |                                                            |
| authorDatetime     | [AdverseEvent.recordedDate](StructureDefinition-qicore-adverseevent-definitions.html#AdverseEvent.recordedDate) |                                                            |
| id                 | [AdverseEvent.id](StructureDefinition-qicore-adverseevent-definitions.html#AdverseEvent.id)                     |                                                            |
| recorder           | [AdverseEvent.recorder](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.recorder)         |                                                            |
|                    | [AdverseEvent.suspectEntity.instance](StructureDefinition-qicore-adverseevent-definitions.html#key_AdverseEvent.suspectEntity.instance)         | The actual instance of what caused the adverse event. May be a substance, medication, medication administration, medication statement or a device.              |
{: .grid}


### Allergy/Intolerance

Allergy is used to address immune-mediated reactions to a substance such
as type 1 hypersensitivity reactions, other allergy-like reactions,
including pseudo-allergy.

Intolerance is a record of a clinical assessment of a propensity, or a
potential risk to an individual, to have a non-immune mediated adverse
reaction on future exposure to the specified substance, or class of
substance.

| **QDM Context**  | **QI-Core STU7** | **Comments** |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Allergy/Intolerance | [AllergyIntolerance](StructureDefinition-qicore-allergyintolerance.html)    |       |
|                     | [AllergyIntolerance.clinicalStatus](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.clinicalStatus)      | Identifies if active, inactive, resolved; while not a QDM attribute, this is an important element for retrieving active allergies or intolerances.    |
|                     | [AllergyIntolerance.type](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.type)   | Defines difference between Allergy and Intolerance; while not a QDM attribute, this is an important element for differentiating between allergies and intolerances.    |
|                     | [AllergyIntolerance.verificationStatus](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.verificationStatus)   | Identifies if unconfirmed, confirmed, refuted, entered-in-error; while not a QDM attribute, this is an important element for retrieving confirmed allergies or intolerances.   |
|                     | [AllergyIntolerance.category](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.category)  | Helpful to identify classes of potential allergens such as food, medication, environment, biologic; while not a QDM attribute, this may be a helpful element for some use cases.    |
| **QDM Attributes**  |     |    |
| code                | [AllergyIntolerance.code](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.code)  | USCoreAllergySubstance; RxNorm for medication ingredients   |
| id                  | [AllergyIntolerance.id](StructureDefinition-qicore-allergyintolerance-definitions.html#AllergyIntolerance.id)    |           |
| prevalencePeriod    | [AllergyIntolerance.onset\[x\]](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.onset[x])    | Prevalence Period start time maps to AllergyIntolerance.onset[x]. Implementers may need to “map” existing allergy onset timings (e.g., day, age, year, etc.) to a corresponding dateTime to allow calculation of measure or CDS expressions.     |
| authorDatetime      | [AllergyIntolerance.recordedDate](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.recordedDate)    |  Indicates when recorded in the record, not necessarily the onset date             |
| type                | [AllergyIntolerance.reaction.manifestation](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.reaction.manifestation)   |   Clinical symptoms/signs associated with the event     |
| severity            | [AllergyIntolerance.reaction.severity](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.reaction.severity)   | Indicates seriousness, e.g., mild, moderate severe   |
|                     | [AllergyIntolerance.criticality](StructureDefinition-qicore-allergyintolerance-definitions.html#key_AllergyIntolerance.criticality)  | Indicates potential for clinical harm, e.g., low, high, unable-to-assess; not present as an attribute in QDM but may be helpful for some use cases   |
| recorder            | [AllergyIntolerance.recorder](StructureDefinition-qicore-allergyintolerance-definitions.html#AllergyIntolerance.recorder)    |  The individual entering the data about the allergy or intolerance. Note this element is included in QDM but it is not included in the Key Element Table for QI-Core AllergyIntolerance as it does not have a clear use case; i.e., no existing measures or clinical decision support usage requires the recorder or even the asserter of the allergy or intolerance.   |
{: .grid}


### Assessment

QDM defines Assessment as a resource used to define specific observations that clinicians use to guide treatment of the patient. An assessment can be a single question, or observable entity with an expected response, an organized collection of questions intended to solicit information from patients, providers or other individuals, or a single observable entity that is part of such a collection of questions. In previous versions of QI-Core, QDM Assessment category mapped directly to QICore Observation. US Core STU7 includes a number of specific observation profiles such that there are now six profiles providing greater specificity in defining observations. QI-Core inherits eight of the observation profiles directly from US Core as no additional constraints are necessary:
* [US Core Average Blood Pressure Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-average-blood-pressure.html)
* [US Core Care Experience Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-care-experience-preference.html)
*	[US Core Observation Occupation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-occupation.html)
*	[US Core Observation Pregnancy Intent Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancyintent.html)
*	[US Core Observation Pregnancy Status Profile ]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancystatus.html)
*	[US Core Observation Sexual Orientation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-sexual-orientation.html)
*	[US Core Smoking Status Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-smokingstatus.html)
* [US Core Treatment Intervention Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-treatment-intervention-preference.html)

QI-Core adds additional constraints to the US Core Observation Screening Assessment and the US Core Simple Observation profiles. Thus, QI-Core profiles for these observations build on the US Core profiles:
*	[QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html) – generally used with for evaluation surveys and assessment tools
*	[QICore Simple Observation Profile](StructureDefinition-qicore-simple-observation.html) – represents any type of observation that is not classified as vital signs, laboratory, imaging, or other more specific observation types. For example, gestational age at birth as a standalone observation (i.e., not part of a survey or assessment tool).

#### Assessment, Order

Assessment, Order uses the ServiceRequest resource. The codes for ordering specific observations should reference the code element specified in the respective profiles: QICore Observation Screening Assessment, QICore Simple Observation; US Core Observation Occupation, US Core Observation Pregnancy Intent, US Core Pregnancy Status, US Core Observation Sexual Orientation, or US Core Smoking Status Observation.

| **QDM Context**   | **QI-Core STU7**   | **Comments**    |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Assessment, Order**      | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)    |              |
|                            | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)     | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Assessment, Order” and “Assessment, Recommended” datatypes. 	   |
|                            | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)     | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
| **QDM Attributes**         |            |             |
| Code                       | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)     |      What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)                      |
| id                         | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)  |                       |
| Reason                     | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)      |  Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)     |
| Author dateTime            | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)                           | When the request transitioned to being actionable.    |
| Negation Rationale          | See Below |
| Requester                   | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)   |    Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Assessment, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.extension.code:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


#### Assessment, Performed

QDM defines Assessment as a resource used to define specific
observations that clinicians use to guide treatment of the patient. An
assessment can be a single question, or observable entity with an
expected response, an organized collection of questions intended to
solicit information from patients, providers or other individuals, or a
single observable entity that is part of such a collection of questions.

"Assessment, Performed" maps to the one of several QI-Core or US Core profiles as applicable for the information desired:

*	[QICore Simple Observation Profile](StructureDefinition-qicore-simple-observation.html)
*	[QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html)
*	[US Core Care Experience Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-care-experience-preference.html)
*	[US Core Observation Occupation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-occupation.html)
*	[US Core Observation Pregnancy Intent Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancyintent.html)
*	[US Core Observation Pregnancy Status Profile ]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancystatus.html)
*	[US Core Observation Sexual Orientation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-sexual-orientation.html)
*	[US Core Smoking Status Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-smokingstatus.html)
*	[US Core Treatment Intervention Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-treatment-intervention-preference.html)


| **QDM Context**     | **QI-Core STU7**  | **Comments**        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Assessment, Performed: General Use Case**   | [Observation](StructureDefinition-qicore-simple-observation.html)           |       |
|                            | [Observation.category](StructureDefinition-qicore-simple-observation-definitions.html#Observation.category)   | Category helps to narrow the request to the class of observation required to meet measure intent. Each QI-Core or US Core profile has a specific binding to concepts appropriate to the respective profile. Note that QDM does not have an attribute comparable to category, the element may be helpful in expressing a quality measure.        |
|                            | [Observation.status](StructureDefinition-qicore-simple-observation-definitions.html#Observation.status)    | Constrain status to -  final, amended, corrected. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Assessment, Performed” datatype.  |
| **QDM Attributes**         |     |     |
| code                       | [Observation.code](StructureDefinition-qicore-simple-observation-definitions.html#Observation.code)    |  Note specific bindings based on the QI-Core or US Core profile used.     |
| id                         | [Observation.id](StructureDefinition-qicore-simple-observation-definitions.html#Observation.id)            |          |
| method                     | [Observation.method](StructureDefinition-qicore-simple-observation-definitions.html#Observation.method)    |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.  |
| relatedTo                  | [Observation.basedOn](StructureDefinition-qicore-simple-observation-definitions.html#Observation.basedOn)  |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.           |
|                             | [Observation.partOf](StructureDefinition-qicore-simple-observation-definitions.html#Observation.partOf)    | A larger event of which this particular Observation is a component or step. For example, an observation as part of a procedure.    |
|                             | [Observation.derivedFrom](StructureDefinition-qicore-simple-observation-definitions.html#Observation.derivedFrom)  |  Allows reference to the activity that led to the observation. |
| negationRationale           | See Below |
| reason                      | [Observation.basedOn](StructureDefinition-qicore-simple-observation-definitions.html#Observation.basedOn)   | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.    |
| result                      | [Observation.value\[x\]](StructureDefinition-qicore-simple-observation-definitions.html#Observation.value[x])  |          |
| interpretation              | [Observation.interpretation](StructureDefinition-qicore-simple-observation-definitions.html#Observation.interpretation)    | Explanation of significance of the observation result (e.g., critical, high, low)  |
| relevantDatetime            | [Observation.effective\[x\] dateTime](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x])     |   Time observation occurred if a point in time.  |
| relevantPeriod              | [Observation.effective\[x\] Period](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x])   |  Time observation occurred if it occurs over a period of time. |
| authorDatetime              | [Observation.issued](StructureDefinition-qicore-simple-observation-definitions.html#Observation.issued)     |   Time observation result made available.   |
| component                   | [Observation.component](StructureDefinition-qicore-simple-observation-definitions.html#Observation.component)   |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Many measures address components of a panel of simple observations as single elements. Note that the [QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html) allows reference to components by identifying the parent screening assessment and using the Observation.hasMember element to reference the individual observations within the set rather than using the .component element. Thus, all “member” observables in a screening assessment/panel should be referenced as SimpleObservations and the “parent” observable reference .hasMember for each of the respective “component” elements.  |
| component.code              | [Observation.component.code](StructureDefinition-qicore-simple-observation-definitions.html#Observation.component.code)  |   See comment about component.  |
| component.result            | [Observation.component.value\[x\]](StructureDefinition-qicore-simple-observation-definitions.html#Observation.component.value[x])   |   See comment about component.   |
| performer                   | [Observation.performer](StructureDefinition-qicore-simple-observation-definitions.html#Observation.performer)  |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished. |
{: .grid}

##### Negation Rationale for Assessment, Performed
Use [QICoreObservationCancelled](StructureDefinition-qicore-observationcancelled.html) and reference the code element specified in the respective observation profile:
* [Observation.status](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.status) - Fixed as "cancelled"

<div class="new-content" markdown="1">

* [Observation.extension:event-StatusReason](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.extension:event-statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [Observation.issued](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.issued) - When this was made available
* [Observation.code.extension:notDoneValueSet](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific Observation that was not performed


#### Assessment, Recommended

Assessment, Recommended uses the ServiceRequest resource. The codes for recommending specific observations should reference the code element specified in the respective profile:
*	[QICore Simple Observation Profile](StructureDefinition-qicore-simple-observation.html)
*	[QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html)
*	[US Core Average Blood Pressure Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-average-blood-pressure.html)
*	[US Core Care Experience Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-care-experience-preference.html)
*	[US Core Observation Occupation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-occupation.html)
*	[US Core Observation Pregnancy Intent Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancyintent.html)
*	[US Core Observation Pregnancy Status Profile ]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-pregnancystatus.html)
*	[US Core Observation Sexual Orientation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-sexual-orientation.html)
*	[US Core Smoking Status Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-smokingstatus.html)
*	[US Core Treatment Intervention Preference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-treatment-intervention-preference.html)

| **QDM Context**    | **QI-Core STU7**  | **Comments**  |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Assessment, Recommended**   | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)     |             |
|                               | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Assessment, Order” and “Assessment, Recommended” datatypes.    |
|                               | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”   |
| **QDM Attributes**     |              |                |
| code                   | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)  |   What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)     |
| id                     | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)   |         |
| reason                 | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)   |    Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)    |
| authorDatetime         | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)  | When the request transitioned to being actionable.    |
| negationRationale      | See Below |
| requester              | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)    |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Assessment, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed



### Care Experience

QDM defines Care Experience as the understanding and involvement derived from the direct participation of an individual in the maintenance or improvement of health. QDM represents two kinds of care experience: Patient Care Experience and Provider Care Experience. While generally interpreted as patient or provider satisfaction, experience may also represent understanding, involvement and other factors about the care received or given. Most often organizations obtain such information using questionnaires. Use cases are welcome to help provide examples for us of this concept. The Care Experience concept best fits with the FHIR Observation resource.

QDM’s “Care Experience” maps to either one of two QI-Core profiles, dependent on the type of information desired:
* [QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html) – generally used with for evaluation surveys and assessment tools; if the care experience information is obtained using a survey, the QICore Observation Screening Assessment Profile is appropriate.
* [QICore Simple Observation Profile](StructureDefinition-qicore-simple-observation.html) – If care experience is expressed as a single finding or observation, the QICore Simple Observation profile is appropriate.


#### Patient Care Experience

QDM “Patient Care Experience” maps to [QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html) or [QICore Simple Observation](StructureDefinition-qicore-simple-observation.html), as applicable, for the information desired:


| **QDM Context**  | **QI-Core STU7**  | **Comments**  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Patient Care Experience**  | [Observation](StructureDefinition-qicore-simple-observation.html)  |      |
|                              | [Observation.status](StructureDefinition-qicore-simple-observation-definitions.html#Observation.status)  | Constrain status to -  final, amended, corrected. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Assessment, Performed” datatype.  |
| **QDM Attributes**    |       |
| code                  | [Observation.code](StructureDefinition-qicore-simple-observation-definitions.html#Observation.code)   |  Note specific bindings based on the QI-Core or US Core profile used.   |
| id                    | [Observation.id](StructureDefinition-qicore-simple-observation-definitions.html#Observation.id)     |               |
|                       | [Observation.effective\[x\] dateTime](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x]) |   Time observation occurred if a point in time. Although not present in QDM’s “Patient Care Experience” datatype, this element could be useful in expressing measures.  |
|                       | [Observation.effective\[x\] Period](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x])   |   Time observation occurred if it occurs over a period of time. Although not present in QDM’s “Patient Care Experience” datatype, this element could be useful in expressing measures.    |
| authorDatetime        | [Observation.issued](StructureDefinition-qicore-simple-observation-definitions.html#Observation.issued)      |   Time observation result made available.    |
| recorder              | [Observation.performer](StructureDefinition-qicore-simple-observation-definitions.html#Observation.performer)  | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished. [QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html) |
{: .grid}

#### Provider Care Experience

QDM “Provider Care Experience” maps to [QICore Observation Screening Assessment Profile](StructureDefinition-qicore-observation-screening-assessment.html) or [QICore Simple Observation](StructureDefinition-qicore-simple-observation.html), as applicable, for the information desired:

| **QDM Context**    | **QI-Core STU7**    | **Comments**         |
| ---------------------------- | -------------------------------------------------------------- | ------------------------------------------- |
| **Provider Care Experience** | [Observation.code](StructureDefinition-qicore-simple-observation-definitions.html#Observation.code)     |   Note specific bindings based on the QI-Core or US Core profile used   |
| **QDM Attributes**  |             |                    |
| code                | [Observation.code](StructureDefinition-qicore-simple-observation-definitions.html#Observation.code)       |  Note specific bindings based on the QI-Core or US Core profile used  |
| id                  | [Observation.id](StructureDefinition-qicore-simple-observation-definitions.html#Observation.id)           |             |
|                     | [Observation.effective\[x\] dateTime](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x]) | Time observation occurred if a point in time. Although not present in QDM’s “Provider Care Experience” datatype, this element could be useful in expressing measures. |
|                     | [Observation.effective\[x\] Period](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x])   | Time observation occurred if it occurs over a period of time. Although not present in QDM’s “Provider Care Experience” datatype, this element could be useful in expressing measures. |
| authorDatetime      | [Observation.issued](StructureDefinition-qicore-simple-observation-definitions.html#Observation.issued)  | Time observation result made available.|
| recorder            | [Observation.performer](StructureDefinition-qicore-simple-observation-definitions.html#Observation.performer) | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished. |
{: .grid}

### Care Goal

QDM defines Care Goal as a defined target or measure to be achieved in
the process of patient care, that is, an expected outcome. A typical
goal is expressed as a change in status expected at a defined future
time. That change can be an observation represented by other QDM
categories (diagnostic tests, laboratory tests, symptoms, etc.)
scheduled for some time in the future and with a particular value. A
goal can be found in the plan of care (care plan), the structure used by
many stakeholders to define the management actions for the various
conditions, problems, or issues identified for the target of the plan.
This structure, through which the goals and care-planning actions and
processes can be organized, planned, communicated, and checked for
completion, is represented in QDM as a Record Artifact in which Care
Goal is found.

| **QDM Context**    | **QI-Core STU7**  | **Comments** |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **Care Goal**      | [Goal](StructureDefinition-qicore-goal.html)           |   Describes the intended objective(s) for a patient, group or organization  |
|                    | [Goal.achievementStatus](StructureDefinition-qicore-goal-definitions.html#Goal.achievementStatus) |  QDM does not include an attribute to determine the status of a goal. QI-Core inherits US Core and USCDI requirements to include this element that indicates concepts such as proposed, planned, accepted, active, on-hold, completed, cancelled, rejected, entered in error with a required binding to [value set GoalLifecyleStatus](http://hl7.org/fhir/R4/valueset-goal-status.html).  |
| **QDM Attributes** |         |              |
| code               | [Goal.description](StructureDefinition-qicore-goal-definitions.html#Goal.description)    |  Code or test describing the goal. Description has an extensible binding to [US Core Goal Codes.]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-goal-description.html)  |
| id                 | [Goal.id](StructureDefinition-qicore-goal-definitions.html#Goal.id)    |              |
| statusDate         |                         |              |
| targetOutcome      | [Goal.target.detail\[x\]](StructureDefinition-qicore-goal-definitions.html#Goal.target.detail[x]) |  US Core 7.0.0 (USCDI) includes target outcome with a due date, but it does not include information about the target outcome. Thus neither the target outcome nor the target due date is included in the QI-Core Key Element Table. |
| relevantPeriod     | [Goal.start\[x\]](StructureDefinition-qicore-goal-definitions.html#Goal.start[x])                 |  When the goal pursuit begins. US Core 7.0.0 (USCDI) includes startDate (date) with binding to GoalStartEvent, events that might initiate a goal; examples include admission to hospital, discharge from hospital, completion time of procedure, childbirth. QI-Core includes the start timing (date) and the triggering event with a preferred binding to [GoalStartEvent.](http://hl7.org/fhir/R4/valueset-goal-start-event.html)            |
|                    | [Goal.target.due\[x\]](StructureDefinition-qicore-goal-definitions.html#Goal.target.due[x])       |  QDM does not include a target due date for a goal. US Core 7.0.0 (USCDI) and QI-Core STU 6 include the target due date in their respective profile Key Element Tables. However, likelihood of retrieving a target due date may be limited and those using this element in measure expressions should work with implementers to determine feasibility.            |
| statusDate         | [Goal.statusDate](StructureDefinition-qicore-goal-definitions.html#Goal.statusDate)               |  Date when goal status took effect. Neither US Core nor QI-Core include this element in the Key Elements Table for this profile.    |
| relatedTo          | [Goal.addresses](StructureDefinition-qicore-goal-definitions.html#Goal.addresses)                 |  Issues addressed by this goal. Neither US Core nor QI-Core include this element in the Key Elements Table for this profile.            |
| performer          | [Goal.expressedBy](StructureDefinition-qicore-goal-definitions.html#Goal.expressedBy)             | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM performer attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished. QI-Core does not include this element in the Key Elements Table for this profile.       |
{: .grid}



### Communication

QDM defines Communication as the transmission, receipt, or
acknowledgement of information sent from a source to a recipient, such
as from one clinician to another regarding findings, assessments, plans
of care, consultative advice, instructions, educational resources, etc.
The following text from the FHIR Communication and Procedure Resources
may help to differentiate when to use Communication.

[***FHIR Communication Resource***](http://hl7.org/fhir/communication.html)

This resource is a record of a communication. A communication is a
conveyance of information from one entity, a sender, to another entity,
a receiver. The sender and receivers may be patients, practitioners,
related persons, organizations, or devices. Communication use cases
include:

  - A reminder or alert delivered to a responsible provider

  - A recorded notification from the nurse to the on-call physician (or
    any other specified person) that a patient's temperature exceeds a
    value

  - A notification to a public health agency of a patient presenting
    with a communicable disease reportable to the public health agency

  - Patient educational material sent by a provider to a patient

  - Unable to deliver lab results to ordering physician

Non-patient specific communication use cases may include:

  - A nurse call from a hall bathroom

  - Advisory for battery service from a pump

**Boundaries and Relationships (Section 8.22.2) - Communication and
Encounter**

  - The Communication is about the transfer of information (which might
    or might not occur as part of an encounter), while Encounter is
    about the coming together (in person or virtually) of a Patient with
    a Practitioner. Communication does not deal with the duration of a
    call, it represents the fact that information was transferred at a
    particular point in time.

  - The phone calls involving the Patient should be handled
    using [Encounter](http://hl7.org/fhir/encounter.html). Phone calls
    not involving the patient (e.g. between practitioners or
    practitioner to relative) that are tracked for billing or other
    purposes can use Communication to represent the information
    transferred but are not ideal to represent the call itself. A better
    mechanism for handling such calls will be explored in a future
    release.



#### Communication, Performed


| **QDM Context**    | **QI-Core STU7**  | **Comments**   |
| ---------------------------- |-----------------------------------------------------|--------------------------------------------------------- |
| **Communication, Performed** | [Communication](StructureDefinition-qicore-communication.html)    |                       |
|                              | [Communication.status](StructureDefinition-qicore-communication-definitions.html#Communication.status)   | QDM is a conceptual data model and it does not include a status attribute since it is incorporated in the name of the QDM datatype. QI-Core requires specific detail about status. Constrain to completed.   |
| **QDM Attributes**      |             |                |
| code                    | [Communication.topic](StructureDefinition-qicore-communication-definitions.html#Communication.topic)         |    Description of the purpose/content with preferred binding to [Communication Topic](http://terminology.hl7.org/ValueSet/communication-topic)    |
| id                      | [Communication.id](StructureDefinition-qicore-communication-definitions.html#Communication.id)      |                    |
| category                | [Communication.category](StructureDefinition-qicore-communication-definitions.html#Communication.category) |  QDM includes the attribute category allowing specification of the class of the communication (e.g., alert, notification, reminder, instruction). However, no current measures require this attribute as a specific category has not been significant to measure intent. Therefore, this element is not present in the QI-Core profile Key Elements Table.   |
| medium                  | [Communication.medium](StructureDefinition-qicore-communication-definitions.html#Communication.medium)  |  How communication occurs (e.g., physical presence, online written, email, handwritten, etc.). This element is not present in the QI-Core profile Key Elements Table.  |
| sentDatetime            | [Communication.sent](StructureDefinition-qicore-communication-definitions.html#Communication.sent)    |     When sent     |
| receivedDatetime        | [Communication.received](StructureDefinition-qicore-communication-definitions.html#Communication.received)  | When received  |
| authorDatetime          | [Communication.extension:event-recorded](StructureDefinition-qicore-communicationnotdone-definitions.html#Communication.extension:event-recorded) | Use of this QDM attribute is restricted to the QDM negation rationale use case. It does not apply to a communication with any status other than “not-done”. See Negation Rationale for Communication, Performed. |
| relatedTo               | [Communication.basedOn](StructureDefinition-qicore-communication-definitions.html#Communication.basedOn)  | An order, proposal or plan fulfilled in whole or in part by this Communication. No current measures require this attribute. Therefore, this element is not present in the QI-Core profile Key Elements Table  |
|                         | [Communication.inResponseTo](StructureDefinition-qicore-communication-definitions.html#Communication.inResponseTo) | Response to a communication   |
| sender                  | [Communication.sender](StructureDefinition-qicore-communication-definitions.html#Communication.sender)  |  Message sender  |
| recipient               | [Communication.recipient](StructureDefinition-qicore-communication-definitions.html#Communication.recipient)  | Message recipient  |
| negationRationale       | See Below   |
{: .grid}

##### Negation Rationale for Communication, Performed

Use [QICoreCommunicationNotDone](StructureDefinition-qicore-communicationnotdone.html), which contains:
* [Communication.status](StructureDefinition-qicore-communicationnotdone-definitions.html#Communication.status) - Fixed Value: "not-done"
* [Communication.statusReason](StructureDefinition-qicore-communicationnotdone-definitions.html#Communication.statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)

<div class="new-content" markdown="1">

* [Communication.extension:event-recorded](StructureDefinition-qicore-communicationnotdone-definitions.html#Communication.extension:event-recorded) - dateTime when this was made available
</div>

* [Communication.topic.extension:notDoneValueSet](StructureDefinition-qicore-communicationnotdone-definitions.html#Communication.topic.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific Communication that was not performed


### Diagnosis

QDM defines Condition/Diagnosis/Problem as a practitioner’s
identification of a patient’s disease, illness, injury, or condition.
This category contains a single datatype to represent all of these
concepts: Diagnosis. A practitioner determines the diagnosis by means of
examination, diagnostic test results, patient history, and/or family
history. 

Based on changes in US Core STU5, QI-Core now has two methods for expressing conditions, [QICore Condition Problems and Health Concerns Profile](StructureDefinition-qicore-condition-problems-health-concerns.html), and [QICore Condition Encounter Diagnosis Profile](StructureDefinition-qicore-condition-encounter-diagnosis.html). Please reference the respective profile pages for explanation of the rationale for using each of these profiles. Briefly, the Condition Problems and Health Concerns Profile meets the US Core Data for Interoperability (USCDI) version 2 ‘Problems’ and ‘Health Concerns’ and SDOH Problems/Health Concerns requirements. The Condition Encounter Diagnosis Profile further meets the USCDI v2 requirement to define Encounter Diagnosis.


| **QDM Context** | **QI-Core STU7**  | **Comments**  |
| ----------------------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| **Condition - Diagnosis - Problem** | [Condition Problems and Health Concerns](StructureDefinition-qicore-condition-problems-health-concerns.html)    |     |
|                                     | [ConditionProblemsHealthConcerns.clinicalStatus](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.clinicalStatus)         | QDM is a conceptual data model and it does not include a status attribute since it is incorporated in the name of the QDM datatype. QI-Core requires specific detail about status. Clinical status defines active, recurrence, relapse, inactive, remission, resolved with required binding to [ConditionClinicalStatusCodes](http://hl7.org/fhir/R4/valueset-condition-clinical.html)  |
|                                     | [ConditionProblemsHealthConcerns.verificationStatus](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.verificationStatus) | Verification status defines confirmed, unconfirmed, provisional, differential, refuted, entered-in-error with required binding to [ConditionVerificationStatus](http://hl7.org/fhir/R4/valueset-condition-ver-status.html). QDM does not contain this attribute but it is valuable to determine metadata about a documented condition. |
|                                     | [ConditionProblemsHealthConcerns.category](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.category)                     | Category defines the class of condition documentation, e.g., problem-list-item, encounter-diagnosis, health-concern. QDM does not contain this attribute but it is valuable to determine metadata about a documented condition. |
| **QDM Attributes**           |    |                                                                     |
| code                         | [ConditionProblemsHealthConcerns.code](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.code)    |  Identification of the condition with extensible binding to [US Core Condition Codes.]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)                      |
| id                           | [ConditionProblemsHealthConcerns.id](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.id)   |                    |
| prevalencePeriod             | [ConditionProblemsHealthConcerns.onset\[x\]](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.onset[x])                   |Estimated or actual date, date-time, or age. Note that some clinical products default condition documentation to date entered with option to change to date of onset.    |
|                              | [ConditionProblemsHealthConcerns.abatement\[x\]](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.abatement[x])           | When in resolution/remission. May be dateTime, Age, Period Range, string.   |
| authorDatetime               | [ConditionProblemsHealthConcerns.recordedDate](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.recordedDate) <br> [ConditionProblemsHealthConcerns.assertedDate](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.extension:assertedDate)   |   Recorded date is date record was first recorded. <br> Asserted date the condition was first asserted.   |
| severity                      | [ConditionProblemsHealthConcerns.severity](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.severity)      | Subjective severity of the condition (e.g., severe, moderate, mild). This element has limited feasibility and it is not in the Key Elements Table for US Core or QI-Core for Condition Diagnosis and Health Concern or Condition Encounter Diagnosis.    |
| anatomicalLocationSite        | [ConditionProblemsHealthConcerns.bodySite](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.bodySite)      |   Anatomical location, if relevant. This element has limited feasibility and it is not in the Key Elements Table for US Core or QI-Core for Condition Diagnosis and Health Concern or Condition Encounter Diagnosis. Often, condition.code indicates the body site.   |
| recorder                      | [ConditionProblemsHealthConcerns.recorder](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.recorder)          | Individual who recorded the record and takes responsibility for its content. This element has limited utility for a measure use case and it is not in the Key Elements Table for US Core or QI-Core for Condition Diagnosis and Health Concern or Condition Encounter Diagnosis.  |
|                               | [ConditionProblemsHealthConcerns.asserter](StructureDefinition-qicore-condition-problems-health-concerns-definitions.html#Condition.asserter)                     | Individual who is making the condition statement. This element has limited utility for a measure use case and it is not in the Key Elements Table for US Core or QI-Core for Condition Diagnosis and Health Concern or Condition Encounter Diagnosis.   |
{: .grid}


### Device

QDM defines Device as an instrument, apparatus, implement, machine, contrivance,
implant, in-vitro reagent, or other similar or related article, including a
component part or accessory, intended for use in the diagnosis, cure,
mitigation, treatment, or prevention of disease and not dependent on being
metabolized to achieve any of its primary intended purposes.

FHIR defines the [Device Resource](http://hl7.org/fhir/R4/device.html) as a
type of a manufactured item that is used in the provision of healthcare without
being substantially changed through that activity. The device may be a medical
or non-medical device.

FHIR and US Core further differentiate devices into two "classes":
* Devices that interact with the human body but do not stay in it are referred
to as non-implantable medical devices.
* Implantable devices are those which stay in the human body with a medical
objective for an extended period of time, or even a lifetime.

[Definition reference: Imam W. How to use ISO 13485:2016 to manage implantable
devices, *ISO 13485 Blog*. July 4, 2016. Available at: https://advisera.com/13485academy/blog/2017/07/04/how-to-use-iso-134852016-to-manage-implantable-medical-devices/.
Accessed 28 January 2020.]

The FHIR [Device Resource](http://hl7.org/fhir/R4/device.html) addresses both
implantable and non-implantable devices. US Core only references [Implantable
Device]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-implantable-device.html).
QI-Core inherits Implantable Device from US Core and builds directly from FHIR
for the QI-Core Device Resource.

#### Device, Applied
QDM originally designed Device, Applied to allow access to documentation of
device usage. However, evaluation over time indicates that all documentation
about usage of a device occurs as an observation. Thus, information about an
implanted pacemaker status check, utilization of a patient-use Continuous
Positive Airway Pressure (CPAP) device, results from a glucometer, or use of a
wheelchair or cane should use the QDM datatype, Assessment, Performed, or
QI-Core Observation. Use of Device, Applied has been synonymous with
Procedure, Performed, i.e., placement of or adjustment to a device.

"Device Applied" has been retired in QDM 5.6 in favor of using "Procedure, Performed" or
"Assessment, Performed" as appropriate.



#### Device, Order – Non-Patient-use Devices

| **QDM Context**         | **QI-Core STU7**     | **Comments**  |
| ----------------------- | ------------------------------------------------ | ---------------------------------------------------- |
| **Device Request**      | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)   |                                    |
|                         | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)   | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Device, Order” and “Device, Recommended” datatypes.  |
| **Device, Order**       | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)      |
| **QDM Attributes**      |                       |              |
| code                    | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)  |     What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)          |
| id                      | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                   |           |
| reason                  | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)   |   Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)   |
| authorDatetime          | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)   | When the request transitioned to being actionable.   |
| negationRationale       | See Below |
| requester               | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)     |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Device, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html), which contains:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


#### Device, Order – Personal Use Devices

| **QDM Context**         | **QI-Core STU7**    | **Comments**      |
| ----------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Device Request**      | [DeviceRequest](StructureDefinition-qicore-devicerequest.html)  |                   |
|                         | [DeviceRequest.status](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.status)     | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Device, Order” and “Device, Recommended” datatypes.  |
| **Device, Order**       | [DeviceRequest.intent](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.intent)     | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
| **QDM Attributes**      |                      |                  |
| code                    | [DeviceRequest.code\[x\]](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.code[x])       |    Device requested with preferred binding to [FHIRDeviceTypes.](http://hl7.org/fhir/R4/valueset-device-kind.html)      |
| id                      | [DeviceRequest.id](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.id)                   |              |
| reason                  | [DeviceRequest.reasonReference](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.reasonReference)   |  Linked reason for the request (e.g., condition or observation). This element is not included in the QI-Core profile Key Elements Table since feasibility of retrieval is limited.  |
| authorDatetime          | [DeviceRequest.authoredOn](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.authoredOn)             | FHIR allows dateTime or Period for desired time or schedule for use.                                                                     |
| negationRationale       | See Below |
| requester               | [DeviceRequest.requester](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.requester)      |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}



##### Negation Rationale for Device, Order – Personal Use Devices

Use [QICoreDeviceNotRequested](StructureDefinition-qicore-devicenotrequested.html), which contains:
* [DeviceRequest.modifierExtension:doNotPerform](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.modifierExtension:doNotPerform) - Fixed value: "true"
* [DeviceRequest.status](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [DeviceRequest.reasonCode](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [DeviceRequest.authoredOn](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.authoredOn) - dateTime when this was made available
* [DeviceRequest.code\[x\].extension:doNotPerformValueSet](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.code%5Bx%5D.extension:doNotPerformValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific DeviceRequest that was not performed




#### Device, Recommended – Non-Patient-use Devices

| **QDM Context**       | **QI-Core STU7**  | **Comments**      |
| --------------------- | ----------------- | ----------------- |
| **Device Request**    | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)   |            |
|                       | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)    | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Device, Order” and “Device, Recommended” datatypes. |
| **Device, Order**     | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)    | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”   |
| **QDM Attributes**    |                               |                                                                                  |
| code                  | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)  |  What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)   |
| id                    | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                     |         |
| reason                | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)     |   Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)   |
| authorDateTime        | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)     |   When the request transitioned to being actionable  |
| negationRationale     | See Below |
| requester             | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)       |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Device, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html), which contains:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


#### Device, Recommended – Personal Use Devices

| **QDM Context**      | **QI-Core STU7**  | **Comments**     |
| -------------------- | ----------------- | ---------------- |
| **Device Request**   | [DeviceRequest](StructureDefinition-qicore-devicerequest.html)                                                 |                    |
|                      | [DeviceRequest.status](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.status)         |  Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Device, Order” and “Device, Recommended” datatypes.   |
| **Device, Order**    | [DeviceRequest.intent](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.intent)         |   Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”.   |
| **QDM Attributes**   |                   |                  |
| code                 | [DeviceRequest.code\[x\]](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.code[x])     |   Device requested with preferred binding to [FHIRDeviceTypes.](http://hl7.org/fhir/R4/valueset-device-kind.html)   |
| id                   | [DeviceRequest.id](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.id)                 |                   |
| reason               | [DeviceRequest.reasonReference](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.reasonReference)    |   Linked reason for the request (e.g., condition or observation). This element is not included in the QI-Core profile Key Elements Table since feasibility of retrieval is limited.   |
| authorDatetime       | [DeviceRequest.authoredOn](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.authoredOn) |   FHIR allows dateTime or Period for desired time or schedule for use.   |
| negationRationale    | See Below |
| requester            | [DeviceRequest.requester](StructureDefinition-qicore-devicerequest-definitions.html#DeviceRequest.requester)   |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Device, Recommended – Personal Use Devices

Use [QICoreDeviceNotRequested](StructureDefinition-qicore-devicenotrequested.html), which contains:
* [DeviceRequest.modifierExtension:doNotPerform](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.modifierExtension:doNotPerform) - Fixed value: "true"
* [DeviceRequest.status](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [DeviceRequest.reasonCode](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [DeviceRequest.authoredOn](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.authoredOn) - dateTime when this was made available
* [DeviceRequest.code\[x\].extension:doNotPerformValueSet](StructureDefinition-qicore-devicenotrequested-definitions.html#DeviceRequest.code%5Bx%5D.extension:doNotPerformValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific DeviceRequest that was not performed




### Diagnostic Study

QDM defines Diagnostic Study as any kind of medical test performed as a specific test or series of steps to aid in diagnosing or detecting disease (e.g., to establish a diagnosis, measure the progress or recovery from disease, confirm that a person is free from disease). The QDM differentiates diagnostic studies from laboratory tests in that diagnostic studies are those that are not performed in organizations that perform testing on samples of human blood, tissue, or other substance from the body. Diagnostic studies may make use of digital images and textual reports. Such studies include but are not limited to imaging studies, cardiology studies (electrocardiogram, treadmill stress testing), pulmonary-function testing, vascular laboratory testing, and others.



QI-Core has added specific constraints on the US Core STU7 profile that address such non-laboratory tests. This US Core v7.0.0 profile addresses (USCDI) requirements for Diagnostic Imaging and Clinical Tests Data Classes including all non-laboratory clinical test results (e.g., radiology and other clinical observations generated from procedures). It includes content represented in the previous US Core v5.0.1 and QI-Core STU5 version profiles Clinical Test Result, and Imaging Result:

* •	[QICore Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) – non-laboratory, non-imaging tests; this profile is sufficiently broad that it should be used instead of the [QI-Core Simple Observation](StructureDefinition-qicore-simple-observation.html) profile for all non-laboratory test results.


#### Diagnostic Study, Order

“Diagnostic Study, Order” should reference orders for studies that will generate results for activities that meet criteria for Observation Clinical Result.


| **QDM Context**                | **QI-Core STU7**      | **Comments**     |
| ------------------------------ | ------------------------------------------------ | ------------------------------------------------------------ |
| **Diagnostic Study, Order**    | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)                                                  |     |
|                                | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)         | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Diagnostic Study, Order” and “Diagnostic Study, Recommended” datatypes. |
|                                | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)         |  Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
| **QDM Attributes**             |                         |                 |
| code                           | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)             |    What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)    |
| id                             | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                 |              |
| reason                         | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode) |  Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime                 | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn) | When the request transitioned to being actionable.  |
| negationRationale              | See Below |
| requester                      | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)   |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Diagnostic Study, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed



#### Diagnostic Study, Performed

Individual studies may use [QI-Core DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-qicore-diagnosticreport-note.html) to provide information about an individual study (e.g., a cardiac ultrasound, MRI, etc.) although some have considered use of other reporting resources and artifacts. Since new studies regularly become available and the nature of existing studies change over time, a complete list of studies to reference a desired result cannot be assured. Therefore, a quality measure or clinical decision support (CDS) artifacts seeking a specific result value should use [QICore Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) to request a retrieve of the result value desired. This practice will enable implementers to determine which is the best source for the desired observation. LOINC observable entities may indicate specific methods for determination of results. Measure and CDS developers can reference direct reference codes or value sets using such LOINC codes to specify the type of testing considered acceptable to provide sufficient fidelity to their requests.


| **QDM Context**                 | **QI-Core  STU7**      | **Comments**    |
| ------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------- |
| **Diagnostic Study, Performed** | [Observation Clinical Result Profile](StructureDefinition-qicore-observation-clinical-result.html) |           |
|                                 | [ObservationClinicalResult.category](StructureDefinition-qicore-observation-clinical-result-definitions.html#key_Observation.category) | Category helps to narrow the request to the class of observation required to meet measure intent. Each QI-Core or US Core profile has a specific binding to concepts appropriate to the respective profile. ClinicalTestResult has a required binding to  [US Core Clinical Result Observation Category.]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-clinical-result-observation-category.html)   Note that QDM does not have an attribute comparable to category, the element may be helpful in expressing a quality measure.|
| **QDM Attributes**       |             |               |
| code                     | [ObservationClinicalResult.code](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.code)     |   Note specific binding to [LOINCCodes](http://hl7.org/fhir/R4/valueset-observation-codes.html)     |
| id                       | [ObservationClinicalResult.id](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.id)         |    |
| method                   | [ObservationClinicalResult.method](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.method) |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.   |
| facilityLocation         | N/A       |   Although QDM includes this attribute it has not been used in existing measures with respect to “Diagnostic Study, Performed”. There is also no clear element to which to map in the Observation resource |
| negationRationale        | See Below |
| reason                   | N/A       | There is no comparable concept element in the Observation resource |
| relatedTo                | [ObservationClinicalResult.basedOn](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.basedOn) | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles   |
| result                   | [ObservationClinicalResult.value\[x\]](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.value[x]) | Result Value  |
| interpretation           | [ObservationClinicalResult.interpretation](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.interpretation) | Explanation of significance of the observation result (e.g., critical, high, low) |
| resultDatetime           | [ObservationClinicalResult.issued](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.issued) |   Time observation result made available. |
| relevantDatetime         | [ObservationClinicalResult.effective\[x\] dateTime](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.effective[x])  |   Time observation occurred if a point in time.  |
| relevantPeriod           | [ObservationClinicalResult.effective\[x\] Period](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.effective[x])  |   Time observation occurred if it occurs over a period of time.   |
| status                   | [ObservationClinicalResult.status](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.status) | Constrain status to - final, amended, corrected. |
| authorDatetime           | [ObservationClinicalResult.issued](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.issued) | Time observation result made available. |
| component                | [ObservationClinicalResult.component](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.component) | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Many measures address components of an observation as single elements. Therefore, component is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles |
| component.code           | [ObservationClinicalResult.component.code](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.component.code) |   See comment about component.   |
| component.result         | [ObservationClinicalResult.component.value\[x\]](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.component.value[x])  |    See comment about component.       |
| performer                | [ObservationClinicalResult.performer](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.performer) |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM performer attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Diagnostic Study, Performed

Use [QICoreObservationCancelled](StructureDefinition-qicore-observationcancelled.html) and reference the code element specified in the respective observation profile:
* [Observation.status](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.status) - Fixed value: "cancelled"

<div class="new-content" markdown="1">

* [Observation.extension:event-StatusReason](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.extension:event-statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [Observation.issued](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.issued) - dateTime when this was made available
* [Observation.code.extension:notDoneValueSet](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific Observation that was not performed


#### Diagnostic Study, Recommended

“Diagnostic Study, Recommended” should reference recommendations for studies that will generate results for activities that meet criteria for Observation Clinical Result.


| **QDM Context**     | **QI-Core STU7**   | **Comments**     |
| ------------------- | ------------------------------------- | ------------------------------------------------------------ |
| **Diagnostic Study, Recommended** | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)    |                  |
|                                   | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Diagnostic Study, Order” and “Diagnostic Study, Recommended” datatypes.  |
|                                   | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”    |
| **QDM Attributes**  |             |                         |
| code                | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)  | What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) |
| id                  | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                      |     |
| reason              | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)      |  Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime      | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)      | When the request transitioned to being actionable.     |
| negationRationale   | See Below |
| requester           | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)  |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Diagnostic Study, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"
<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed



### Encounter

QDM defines Encounter as an identifiable grouping of healthcare-related
activities characterized by the entity relationship between the subject
of care and a healthcare provider; such a grouping is determined by the
healthcare provider. A patient encounter represents interaction between
a healthcare provider and a patient with a face-to-face patient visit to
a clinician’s office, or any electronically remote interaction with a
clinician for any form of diagnostic treatment or therapeutic event.

#### Encounter Timing

Implementation considerations must be considered when referencing
encounter periods (start to end time).  Some clinical sites may leave
Encounters "open" until all documentation has been completed which may
take 72 hours or more.  However, the actual encounter may have lasted
for a much shorter time period (e.g., 15 minutes for an ambulatory
encounter). This issue is addressed in The Office of the National
Coordinator for Health IT (ONC) Issue Tracking System as item
[QDM-235](https://oncprojectracking.healthit.gov/support/projects/QDM/issues/QDM-235?filter=recentlyviewed).
Two approaches clinical sites have used to manage this issue include:

* Include a patient check-in and check-out time as part of the visit
documentation. These times represent when the patient arrives and
leaves, respectively, and these times are used for the Encounter
relevant period. However, patient arrival at a location does not
necessarily mean the start of the encounter (e.g. a patient arrives
an hour earlier than he or she is actually seen by a practitioner).

* Default an Encounter end as 23:59 on the date of the Encounter date
if it is left open to allow completion of documentation and update
the end time if the practitioner closing the chart enters a specific
time that the encounter ended.

Undoubtedly, other clinical sites have implemented other solutions to
documenting end times for ambulatory visits. Quality measure and
clinical decision support (CDS) artifact authors should consider such
issues when testing the validity and reliability of retrieved responses
to data queries.



#### Defining Arrival Time

Encounter.period provides the start and stop times of an encounter.
Some measures require specific reference to encounter _admissionTime_
while others require reference to a concept called _arrivalTime_.
The meaning of Encounter.period start cannot reference both timings.
Therefore, by convention and based on previous discussions with various HL7 workgroups,
Encounter.period _startTime_ represents _admissionTime_ for hospitalizations.
Therefore, to reference _arrivalTime_ QDM and QI-Core use Encounter.location
to indicate the physical place where the initial encounter services occur,
and Encounter.location.period to indicate the _arrivalTime_ and the _departureTime_.
Thus, the measure query can differentiate between _admissionTime_ used to
determine length of stay and _arrivalTime_ used to indicate when the patient
presented for care at the location which is prior to the formal completion of the admission process.

An example of an encounter can be found [here](Encounter-encounter-ed-example.html)

#### Encounter-Related Diagnoses and Procedures

Previous versions of QI-Core have used the [Encounter.diagnosis](StructureDefinition-qicore-encounter-definitions.html#Encounter.diagnosis) element to reference to the list of diagnosis/diagnoses and procedures relevant to the encounter.
The [Encounter.diagnosis.usevalue](http://hl7.org/fhir/R4/valueset-diagnosis-role.html)
helped to differentiates if the diagnosis or procedure role with respect to the encounter,
e.g., the admission diagnosis (AD), the discharge diagnosis (DD), the chief complaint (CC),
a comorbidity diagnosis (CM), a pre-op diagnosis (pre-op), a post-op diagnosis (post-op)
or a billing diagnosis (billing). Further, _principal diagnosis_ was specified by
Encounter.diagnosis.use= _billing_, and Encounter.diagnosis.rank=1 with similar modeling for
principal procedures. Further prior versions of QI-Core identified _present on admission (POA)_
using Encounter.diagnosis.onAdmission.

Feedback from implementers and standards experts indicated that concepts such as _principal diagnosis_,
_principal procedure_, and _present on admission_ were more appropriately retrieved using the [Claim profile](StructureDefinition-qicore-claim.html).
Medical record coders review documentation and work with physicians to provide the adjudicated
determination of what represents a _principal diagnosis_, a _principal procedure_, and the final
_present on admission_ flag for each diagnosis. Therefore, the [Claim.diagnosis.sequence](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.sequence) = 1 plus
[Claim.diagnosis.diagnosis\[x\]](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.diagnosis[x]) defines a _principal diagnosis_. The [Claim.diagnosis.onAdmission](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.onAdmission) plus
[Claim.diagnosis.diagnosis\[x\]](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.diagnosis[x]) defines which diagnoses are _present on admission_. The [Claim.procedure.sequence](StructureDefinition-qicore-claim-definitions.html#Claim.procedure.sequence) = 1
plus [Claim.procedure.procedure\[x\]](StructureDefinition-qicore-claim-definitions.html#Claim.procedure.procedure[x]) defines a _principal procedure_.

For this reason, QI-Core STU7 does not includes Encounter.diagnosis in the Key Element Table of
the profile. This QI-Core version aligns with the US Core 7.0.0 using [Encounter.reasonCode](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonCode) and
[Encounter.reasonReference](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonReference)
for diagnoses or procedures managed during an encounter. Note the [Encounter.reasonCode](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonCode)
preferred binding to [Encounter Reason Code value set](http://hl7.org/fhir/R4/valueset-encounter-reason.html) allows use of SNOMED-CT clinical findings,
procedures, context-dependent categories, and events; [Encounter.reasonReference](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonReference) allows reference to [QICore ConditionProblemsHeatlhConcerns](StructureDefinition-qicore-condition-problems-health-concerns.html), [QICore ConditionEncounterDiagnosis](StructureDefinition-qicore-condition-encounter-diagnosis.html), [QICore Procedure](StructureDefinition-qicore-procedure.html), [QICore SimpleObservation](StructureDefinition-qicore-simple-observation.html), and [QICore ImmunzationRecommendation](StructureDefinition-qicore-immunizationrecommendation.html).

#### Encounter, Order

| **QDM Context**      | **QI-Core STU7**  | **Comments**   |
| -------------------- | -------------------------------------- | ------------------------------------------------------------ |
| **Encounter, Order** | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)   |                                                              |
|                      | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  |  Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Encounter, Order” and “Encounter, Recommended” datatypes.  |
|                      | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
| **QDM Attributes**   |                  |                  |
| code                 | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)     |  What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)    |
| id                   | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                  |                  |
| reason               | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)  |  Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html) |
| authorDatetime       | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)  | When the request transitioned to being actionable.  |
| facilityLocation     | [ServiceRequest.locationCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.locationCode)   |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM “Encounter, Requested” _location_ attribute was to differentiate where an encounter is expected to take place. Discussions with standards experts and vendor implementers at HL7 meetings indicate the request for an encounter should use the scheduling and/or appointment process (these are two different resources in HL7 FHIR). Only in those resources would the concept of the expected location. While the ServiceRequest resource includes a locationCode element with example binding to the [ServiceDeliveryLocationRoleType](http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType), the QI-Core ServiceRequest profile does not include the item in the Key Element Table.  |
| priority             | [ServiceRequest.modifierExtension:isElective](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.extension)  | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM “Encounter, Requested” _priority_ attribute was to differentiate elective encounters from non-elective encounters. Discussions with standards experts and vendor implementers at HL7 meetings indicate the request for an encounter should use the scheduling and/or appointment process (these are two different resources in HL7 FHIR). Only in those resources would the concept of priority be identified. Thus, the concept is not a clinical one. A procedure may have a priority but not an encounter. Therefore, the QI-Core ServiceRequest profile does not include the modifierExtension:isElective in the Key Element Tale. |
| negationRationale    | See Below |
| requester            | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)   | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Encounter, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html), which contains:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"
<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


#### Encounter, Performed

| **QDM Context**           | **QI-Core STU7**  | **Comments**  |
| ------------------------- | ----------------- | ------------- |
| **Encounter, Performed**  | [Encounter](StructureDefinition-qicore-encounter.html)     |         |
|                           | [Encounter.status](StructureDefinition-qicore-encounter-definitions.html#Encounter.status)   | Constrain to - arrived, triaged, in-progress, on-leave, finished Note: most retrospective eCQMs will constrain Encounter.status to “finished”. Measures designed to monitor active encounters should consider using “in-progress”. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Encounter, Performed”. |
| **QDM Attribute**         |                   |               |
| code                      | [Encounter.type](StructureDefinition-qicore-encounter-definitions.html#Encounter.type)       | Uses extensible binding to value set: [USCoreEncounterType]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-encounter-type.html)  |
| id                        | [Encounter.id](StructureDefinition-qicore-encounter-definitions.html#Encounter.id)                 |               |
| class                     | [Encounter.class](StructureDefinition-qicore-encounter-definitions.html#Encounter.class)           | Classification of the encounter (e.g., ambulatory, hospital, virtual) with extensible binding to value set:  [ActEncounterCode](http://terminology.hl7.org/ValueSet/v3-ActEncounterCode)  |
| relatedTo                 | [Encounter.basedOn](StructureDefinition-qicore-encounter-definitions.html#Encounter.basedOn)       | Prior versions of QI-Core included a Must Support for basedOn to reference the ServiceRequest generating the encounter. However, there has been no use of this element. Therefore, it no longer appears in the Encounter profile Key Element Table.  |
| relevantPeriod            | [Encounter.period](StructureDefinition-qicore-encounter-definitions.html#Encounter.period)         | start and end time of encounter                                                                                      |
| diagnoses                 |                 |                                                     |
| diagnosis (code)          | [Encounter.reasonCode](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonCode) <br> or <br>[Encounter.reasonReference](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonReference)  | [Encounter.reasonCode](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonCode) has preferred binding to [Encounter Reason Code value set](http://hl7.org/fhir/R4/valueset-encounter-reason.html). [Encounter.reasonReference](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonReference) allows reference to [QICore ConditionProblemsHeatlhConcerns](StructureDefinition-qicore-condition-problems-health-concerns.html), [QICore ConditionEncounterDiagnosis](StructureDefinition-qicore-condition-encounter-diagnosis.html), [QICore Procedure](StructureDefinition-qicore-procedure.html), [QICore SimpleObservation](StructureDefinition-qicore-simple-observation.html), and [QICore ImmunzationRecommendation](StructureDefinition-qicore-immunizationrecommendation.html). |
| presentOnAdmissionIndicator (code) | [Claim.diagnosis.onAdmission](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.onAdmission) <br> plus <br> [Claim.diagnosis.diagnosis\[x\]](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.diagnosis[x]) defines which diagnoses are _present on admission_. | Indicator of whether the Encounter diagnosis was present at the time of admission. Note: this element uses the value set (required) diagnosis-on-admission (the same value set as used with the claim resource)  |
| rank (Integer)            | Different from prior QI-Core versions, QI-Core STU7 defines the following concepts: <br> * _principal diagnosis_ is <br> [Claim.diagnosis.sequence](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.sequence) = 1 <br> plus <br> [Claim.diagnosis.diagnosis\[x\]](StructureDefinition-qicore-claim-definitions.html#Claim.diagnosis.diagnosis[x]) <br> * _principal procedure_ is <br> [Claim.procedure.sequence](StructureDefinition-qicore-claim-definitions.html#Claim.procedure.sequence) = 1 <br> plus <br>  [Claim.procedure.procedure\[x\]](StructureDefinition-qicore-claim-definitions.html#Claim.procedure.procedure[x])   | Note change in QI-Core STU7   |
| procedures                | [Encounter.reasonCode](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonCode) <br> or <br>[Encounter.reasonReference](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonReference)   | [[Encounter.reasonCode](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonCode) has preferred binding to [Encounter Reason Code value set](http://hl7.org/fhir/R4/valueset-encounter-reason.html). [Encounter.reasonReference](StructureDefinition-qicore-encounter-definitions.html#Encounter.reasonReference) allows reference to [QICore ConditionProblemsHeatlhConcerns](StructureDefinition-qicore-condition-problems-health-concerns.html), [QICore ConditionEncounterDiagnosis](StructureDefinition-qicore-condition-encounter-diagnosis.html), [QICore Procedure](StructureDefinition-qicore-procedure.html), [QICore SimpleObservation](StructureDefinition-qicore-simple-observation.html), and [QICore ImmunzationRecommendation](StructureDefinition-qicore-immunizationrecommendation.html). |
| lengthOfStay              | [Encounter.length](StructureDefinition-qicore-encounter-definitions.html#Encounter.length)           |    The QDM concept length of stay is expressed using CQL expressions rather than a specific Encounter profile element. Therefore, this element is no longer included in the Encounter profile Key Element Table.      |
| authorDatetime            | Not Addressed      |    This QDM attribute is not addressed in the FHIR resource. And encounter occurs or it does not.    |
| admissionSource           | [Encounter.hospitalization.admitSource](StructureDefinition-qicore-encounter-definitions.html#Encounter.hospitalization.admitSource)  |  The QDM concept hospital admission source has not been used in CMS measures to-date. In an effort to streamline QI-Core STU7, this element is no longer included in the Encounter profile Key Element Table.  It is available from the Snapshot Table but it is not clear that the information is available in clinical records even though it may be in administrative records.   |
| dischargeDisposition      | [Encounter.hospitalization.dischargeDisposition](StructureDefinition-qicore-encounter-definitions.html#Encounter.hospitalization.dischargeDisposition) | Category or kind of location to which the patient is discharged. E.g., home, hospice, long-term care, etc.   |      
| facilityLocations         |                     |                          |
| code                      | [Encounter.location.location](StructureDefinition-qicore-encounter-definitions.html#Encounter.location.location)   |   The location the encounter takes place.    |
| locationPeriod            | [Encounter.location.period](StructureDefinition-qicore-encounter-definitions.html#Encounter.location.period)       |  The time during which the patient is present at a specific location. Measures use the location period to identify the arrival and departure times for a location, distinguishing those times from the Encounter.period which provides a hospital _admissionTime_ and _dischargeTime_.   |
| participant               | [Encounter.participant.individual](StructureDefinition-qicore-encounter-definitions.html#Encounter.participant.individual)    |   QDM includes this attribute to designate the individual responsible the patient’s care during this encounter. However, any given encounter may have more than one participant so using this element to specify attribution of care is challenging. Further   clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished. Therefore, QI-Core STU 6 has removed this element from the Key Elements Table. It is not used in measures to-date.    |
|                           | [Encounter.serviceProvider](StructureDefinition-qicore-encounter-definitions.html#Encounter.serviceProvider)| Encounter.serviceProvider identifies the organization that is primarily responsible for the Encounter’s services. Since US Core Encounter includes serviceProvider as a USCDI element, QI-Core STU 6 includes Encounter.serviceProvider in the Key Elements Table. Unlike details about a participant, the organization responsible for the encounter should be available. |
{: .grid}

#### Encounter, Recommended

| **QDM Context**             | **QI-Core STU7**    | **Comments**                  |
| --------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Encounter, Recommended**  | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)   |                                                              |
|                             | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Encounter, Order” and “Encounter, Recommended” datatypes.	 |
|                             | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”   |
| **QDM Attributes**    |                          |                                                              |
| code                  | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)                 |    What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)  |
| id                    | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                     |                 |
| reason                | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)     | Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime        | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)     | When the request transitioned to being actionable.  |
| facilityLocation      | [ServiceRequest.locationCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.locationCode) |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM “Encounter, Requested” _location_ attribute was to differentiate where an encounter is expected to take place. Discussions with standards experts and vendor implementers at HL7 meetings indicate the request for an encounter should use the scheduling and/or appointment process (these are two different resources in HL7 FHIR). Only in those resources would the concept of the expected location. While the ServiceRequest resource includes a locationCode element with example binding to the [ServiceDeliveryLocationRoleType](http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType), the [QI-Core ServiceRequest](StructureDefinition-qicore-servicerequest.html) profile does not include the item in the Key Element Table. |
| priority              | [ServiceRequest.modifierExtension:isElective](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.extension)| Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM “Encounter, Requested” _priority_ attribute was to differentiate elective encounters from non-elective encounters. Discussions with standards experts and vendor implementers at HL7 meetings indicate the request for an encounter should use the scheduling and/or appointment process (these are two different resources in HL7 FHIR). Only in those resources would the concept of priority be identified. Thus, the concept is not a clinical one. A procedure may have a priority but not an encounter. Therefore, the QI-Core ServiceRequest profile does not include the modifierExtension:isElective in the Key Element Tale. |
| negationRationale      | See Below |
| requester              | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)   |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.  |
{: .grid}



##### Negation Rationale for Encounter, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html), which contains:
* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"
<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


### Family History

QDM defines Family History as a diagnosis or problem experienced by a
family member of the patient. Typically, a family history will not
contain very much detail, but the simple identification of a diagnosis
or problem in the patient’s family history may be relevant to the care
of the patient.


| **QDM Context**    | **QI-Core STU7**        | **Comments**                    |
| ------------------ | ----------------------------------------------------------------- | ------------------------------- |
| **Family History** | [FamilyMemberHistory](StructureDefinition-qicore-familymemberhistory.html)                                               |              |
|                    | [FamilyMemberHistory.status](StructureDefinition-qicore-familymemberhistory-definitions.html#FamilyMemberHistory.status) | While QDM does not have an attribute comparable to status, as a conceptual model, status is required for us of most QI-Core profiles. Constrain to partial, completed |
| **QDM Attributes** |                          |                                 |
| code               | [FamilyMemberHistory.condition.code](StructureDefinition-qicore-familymemberhistory-definitions.html#FamilyMemberHistory.condition.code) | Condition suffered by relation. Extensible binding to [Condition/Problem/DiagnosisCodes](http://hl7.org/fhir/R4/valueset-condition-code.html)  |
| id                 | [FamilyMemberHistory.id](StructureDefinition-qicore-familymemberhistory-definitions.html#FamilyMemberHistory.id)     |                                 |
| authorDatetime     | [FamilyMemberHistory.date](StructureDefinition-qicore-familymemberhistory-definitions.html#FamilyMemberHistory.date) |  When history was recorded or last updated   |
| relationship       | [FamilyMemberHistory.relationship](StructureDefinition-qicore-familymemberhistory-definitions.html#FamilyMemberHistory.relationship)     | Relationship to the subject. Preferred binding to [FamilyMember](http://terminology.hl7.org/ValueSet/v3-FamilyMember)  |
| recorder           | N/A        |  There is no comparable element in the FHIR FamilyMemberHistory resource and there is no use case evident for such information     |
{: .grid}



### Immunization

QDM defines Immunization as vaccines administered to patients in
healthcare settings but does not include non-vaccine agents. The [FHIR
Immunization
Recommendation](http://hl7.org/fhir/immunizationrecommendation.html)
resource is specifically designed to provide an immunization forecast
from a forecasting engine to a provider, basically to carry clinical
decision support recommendations specific to immunizations and,
therefore, is not consistent with the intent of the QDM datatype
"Immunization, Order" or "Immunization, Administered." The FHIR
[Immunization
Evaluation](http://hl7.org/fhir/immunizationevaluation.html) references
an appraisal of an immunization that was administered to determine if it
is valid with respect to the expected immunization schedule. The
[US Core
Immunization]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-immunization.html)
profile is most consistent with the QDM datatype *Immunization,
Administered*. The mapping tables provided include mapping from QDM
*Immunization, Administered* and a reference to the FHIR [Immunization
Evaluation](http://hl7.org/fhir/immunizationevaluation.html) resource.
Note, the mapping table includes additional metadata about immunizations
that QDM does not address, but that may be relevant to quality measures
or clinical decision support (CDS) artifacts.



#### Immunization, Administered

| **QDM Context**     | **QI-Core STU7**        | **Comments**                                       |
| ------------------------------ | --------------------------- | -------------------------------------------------- |
| **Immunization, Administered** | [Immunization](StructureDefinition-qicore-immunization.html)                                          |                         |
|                                | [Immunization.status](StructureDefinition-qicore-immunization-definitions.html#Immunization.status)   | While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Immunization, Administered”. Constrain to “completed”     |
| **QDM Attributes**   |                    |                                                    |
| code                 | [Immunization.vaccineCode](StructureDefinition-qicore-immunization-definitions.html#Immunization.vaccineCode)       |  Vaccine product type with extensible binding to [CVX Vaccines Administered Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.6/expansion).  |
| id                   | [Immunization.id](StructureDefinition-qicore-immunization-definitions.html#Immunization.id)                         |            |
| dosage               | [Immunization.doseQuantity](StructureDefinition-qicore-immunization-definitions.html#Immunization.doseQuantity)     |  Amount of vaccine administered. In most measure use cases, immunization dose is not required. Therefore, this element is not present in the QI-Core profile Key Elements Table. |
| negationRationale    | See Below |
| route                | [Immunization.route](StructureDefinition-qicore-immunization-definitions.html#Immunization.route)                   |  How the vaccine entered the body. In most measure use cases, immunization route is not required. Therefore, this element is not present in the QI-Core profile Key Elements Table.   |
| reason               | [Immunization.reasonCode](StructureDefinition-qicore-immunization-definitions.html#Immunization.reasonCode)         |  Why the immunization occurred. In most measure use cases, immunization rationale is not required. Therefore, this element is not present in the QI-Core profile Key Elements Table.  |
| relevantDatetime     | [Immunization.occurrence\[x\]](StructureDefinition-qicore-immunization-definitions.html#Immunization.occurrence[x]) |   Vaccine administration date.     |
| authorDatetime       | [Immunization.recorded](StructureDefinition-qicore-immunization-definitions.html#Immunization.recorded)             |  When the immunization was first captured in the subject's record. This QDM attribute is most useful for the negation rationale use case – i.e., documentation why an immunization did not happen. Since the meaning is the timing of information capture, this element may also not be helpful to determine when vaccines given elsewhere were administered. |
| performer            | [Immunization.performer.actor](StructureDefinition-qicore-immunization-definitions.html#Immunization.performer)     |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.  |
{: .grid}



##### Negation Rationale for Immunization, Administered

Use [QICoreImmunizationNotDone](StructureDefinition-qicore-immunizationnotdone.html), which contains:
* [Immunization.status](StructureDefinition-qicore-immunizationnotdone-definitions.html#Immunization.status) - Fixed value: "not-done"
* [Immunization.statusReason](StructureDefinition-qicore-immunizationnotdone-definitions.html#Immunization.statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [Immunization.recorded](StructureDefinition-qicore-immunizationnotdone-definitions.html#Immunization.recorded) - dateTime
* [Immunization.vaccineCode.extension:notDoneValueSet](StructureDefinition-qicore-immunizationnotdone-definitions.html#Immunization.vaccineCode.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific immunization that was not administered



#### Immunization, Order

This QDM context references the QI-Core MedicationRequest profile as
there is no other FHIR resource to reference an order for an
immunization. The mapping uses the QI-Core MedicationRequest resource
with the MedicationRequest.intent = *order* and
MedicationRequest.setting set to the setting most appropriate for the
intended meaning of the quality measure or clinical decision support
(CDS) expression.



| **QDM Context**         | **QI-Core STU7**   | **Comments**    |
| ----------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Immunization, Order** | [MedicationRequest](StructureDefinition-qicore-medicationrequest.html)                                               |           |
|                         | [MedicationRequest.status](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.status)   |    While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Immunization, Order”. Constrain to active, completed.  |
|                         | [MedicationRequest.intent](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.intent)   |    Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order) |
| **QDM Attributes**   |                 |                  |
| code                 | [MedicationRequest.medication\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.medication[x])   | The QDM “Immunization, Order” datatype uses the QI-Core MedicationRequest profile which has an extensible binding to [MedicationClinicalDrug (RxNorm)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion). For Immunizations, can use the same Vaccine product type with extensible binding to [CVX Vaccines Administered Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.6/expansion) as with “Immunization, Administered”. |
| id                   | [MedicationRequest.id](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.id)        |             |
| activeDatetime       | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing)<br> with <br> [Timing.repeat.bounds\[x\]](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.bounds_x_) Period    | QDM defines active dateTime as when the order indicates the first immunization administration should occur. Active dateTime is most often used to specify immunizations for which administration is intended at a specific time in the future. FHIR allows specification of the period during which the immunization should occur (start dateTime to end dateTime)   |
| authorDatetime       | [MedicationRequest.authoredOn](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.authoredOn)    |       |
| dosage               | [MedicationRequest.dosageInstruction.doseAndRate.dose\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.doseAndRate.dose[x]) | Amount of medication to be administered. Range, quantity    |
| route                | [MedicationRequest.dosageInstruction.route](StructureDefinition-qicore-medicationrequest.html#MedicationRequest.dosageInstruction.route)   |   How drug should enter body.   |
| reason               | [MedicationRequest.reasonCode](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.reasonCode)  | The reason for ordering or not ordering the medication. This element has not been used by existing quality measures. It is not present in the QI-Core profile Key Elements Table.  |
| supply               | [MedicationRequest.dispenseRequest.quantity](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.quantity)  | Amount to be dispensed in one fill    |
| negationRationale    | See Below |
| requester            | [MedicationRequest.requester](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.requester)  | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM performer attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}



##### Negation Rationale for Immunization, Order

Use [QICoreMedicationNotRequested](StructureDefinition-qicore-medicationnotrequested.html), which contains:
* [MedicationRequest.doNotPerform](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.doNotPerform) - Fixed value: "true"
* [MedicationRequest.status](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.status) - Fixed value: "completed"
* [MedicationRequest.reasonCode](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [MedicationRequest.authoredOn](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.authoredOn) - dateTime when this was made available
* [MedicationRequest.medication\[x\].extension:notDoneValueSet](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.medication[x].extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific MedicationRequest that was not performed


### Individual Characteristics

QDM’s approach to defining information about participants in the
healthcare process by defining specific attributes of healthcare participants. These
properties of a patient, clinician, provider, or facility include
demographics, behavioral factors, social or cultural factors, available
resources, and preferences. Behaviors reference responses or actions
that affect (either positively or negatively) health or healthcare.
Included in this category are mental health issues, adherence issues
unrelated to other factors or resources, coping ability, grief issues,
and substance use/abuse. Social/cultural factors are characteristics of
an individual related to family/caregiver support, education, and
literacy (including health literacy), primary language, cultural beliefs
(including health beliefs), persistent life stressors, spiritual and
religious beliefs, immigration status, and history of abuse or neglect.
Resources are means available to a patient to meet health and healthcare
needs, which might include caregiver support, insurance coverage,
financial resources, and community resources to which the patient is
already connected and from which the patient is receiving benefit.
Preferences are choices made by patients and their caregivers relative
to options for care or treatment (including scheduling, care experience,
and meeting of personal health goals) and the sharing and disclosure of
their health information.

FHIR more effectively represents these concepts in the Level 3
Administration Module – base data that is linked into other modules for
clinical content, finance/billing, workflow, etc. The Administration
Module specifies information about the patient, related person,
practitioner and organization that is the basis of healthcare-related
interactions such as encounters. QDM version 5.5 adopted a similar
approach to such information by adding a new concept called *Entities.
Entities* represent concepts that can be used to specify details about
an actor (or performer) participant in any activity represented by a QDM
datatype. These *entities* are analogous to the FHIR resources *Patient,
RelatedPerson, Practitioner,* and *Organization,* respectively called
*Patient, CarePartner, Practitioner* and *Organization* in QDM. The
mapping tables show these direct relationships to FHIR resources.
However, to maintain backward compatibility with prior QDM versions, QDM
5.5 retains the concept of Patient Characteristics for some metadata
about a patient; most of these characteristics map directly to metadata
elements in the FHIR Patient resource. QDM 5.5 removed the Provider
Characteristics QDM *datatype* in favor of the Practitioner and
Organization entities since there had been little, if any, use of these
QDM elements.

Accommodating patient-related metadata requires QI-Core extensions for
several elements including:

  - Clinical Trial – Patients may be excluded from some quality measures
    or clinical decision support (CDS) workflows if they are
    participating in clinical trials. It is often necessary to determine
    the nature of the trial as exclusions may only apply if the clinical
    trial addresses the same clinical condition as the measure or CDS
    artifact, or if treatments potentially used in the clinical trial or
    the measure or CDS intervention conflict.

QDM 5.5 also added a new QDM *datatype Related Person* to allow
reference to an individual who has a personal or non-healthcare-specific
professional relationship with a patient. Modeled the same as the
*CarePartner* entity, the *Related Person* is an individual from whose
record clinical information should be retrieved to support care provided
to the index patient. 

  - Example 1: An infant’s gestational age at the time of birth may be
    calculated as the difference between the days between the mother’s
    estimated date of delivery (EDD) and the actual birth date. The
    mother’s EDD might be entered directly on the infant’s record as an
    observable entity about a *Related Person* (the infant’s mother).
    Alternatively, a cross-context query might request the information
    from the *Related Person’s* (mother’s) record.

  - Example 2: An organ recipient risk factor may include a donor’s
    positive Hepatitis C antibody result. The result relates to the
    donor (Related Person) whether that result is present on the
    recipient’s record or if the a cross-context query to the donor’s
    record retrieves the information.

#### QDM Entities

| **QDM Entities & Attributes** | **QI-Core STU7**  | **Comment**    |
| ----------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------- |
| **Patient**                   | [Patient](StructureDefinition-qicore-patient.html)       |                |
| identifier                    | [Patient.identifier.value](StructureDefinition-qicore-patient-definitions.html#Patient.identifier.value)        |                |
| id                            | [Patient.id](StructureDefinition-qicore-patient-definitions.html#Patient.id)        |                |
| **Care Partner**              | [RelatedPerson](StructureDefinition-qicore-relatedperson.html)         | Related Person |
| identifier                    | [RelatedPerson.identifier](StructureDefinition-qicore-relatedperson-definitions.html#RelatedPerson.identifier)     |                |
| id                            | [RelatedPerson.id](StructureDefinition-qicore-relatedperson-definitions.html#RelatedPerson.id)         |                |
| relationship                  | [RelatedPerson.relationship](StructureDefinition-qicore-relatedperson-definitions.html#RelatedPerson.relationship)     |                |
| **Practitioner**              | [Practitioner](StructureDefinition-qicore-practitioner.html)           |                |
| identifier                    | [Practitioner.identifier](StructureDefinition-qicore-practitioner-definitions.html#Practitioner.identifier) <br> (or specific practitioner identifier types: [Practitioner.identifier:ein](StructureDefinition-qicore-practitioner-definitions.html#Practitioner.identifier:ein))   |                |
| id                            | [Practitioner.id](StructureDefinition-qicore-practitioner-definitions.html#Practitioner.id)     |                |
| role                          | [PractitionerRole.code](StructureDefinition-qicore-practitionerrole-definitions.html#PractitionerRole.code)           |                |
| specialty                     | [PractitionerRole.specialty](StructureDefinition-qicore-practitionerrole-definitions.html#PractitionerRole.specialty)            |                |
| qualification                 | [Practitioner.qualification.code](StructureDefinition-qicore-practitioner-definitions.html#Practitioner.qualification.code) |                |
| **Organization**              | [Organization](StructureDefinition-qicore-organization.html)         |                |
| identifier                    | [Organization.identifier](StructureDefinition-qicore-organization-definitions.html#Organization.identifier) <br> (or specific organizational identifier types: [Organization.identifier:ccn](StructureDefinition-qicore-organization-definitions.html#Organization.identifier:ccn), [Organization.identifier:ein](StructureDefinition-qicore-organization-definitions.html#Organization.identifier:ein))                |                |
| id                            | [Organization.id](StructureDefinition-qicore-organization-definitions.html#Organization.id)   |                |
| organizationType              | [Organization.type](StructureDefinition-qicore-organization-definitions.html#Organization.type)   | QDM attribute name update in QDM 5.6     |
| **Location**                  | [Location](StructureDefinition-qicore-location.html)    | New in QDM 5.6   |
| identifier                    | [Location.identifier.value](StructureDefinition-qicore-location-definitions.html#Location.identifier)    | New in QDM 5.6   |
| id                            | [Location.id](StructureDefinition-qicore-location-definitions.html#Location.id)             | New in QDM 5.6 |
| locationType                  | [Location.type](StructureDefinition-qicore-location-definitions.html#Location.type)         | New in QDM 5.6   |
{: .grid}

#### Patient Characteristics

| **QDM Attribute**  | **QI-Core STU7**        | **Comments**    |
| ------------------------------------ | ------------------------------------------------------------ | --------------------------------------------------- |
| **Race**      |                                                                                                                    |  See US CoreRaceExtension for details   |
| code          | [Patient.extension:race](StructureDefinition-qicore-patient-definitions.html#Patient.extension:race)               |  URL: <{{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-race.html>        |
| id            |                                                                                                                    |          |
|               | [tribalAffiliation](StructureDefinition-qicore-patient-definitions.html#key_Patient.extension:tribalAffiliation) | USCDI version 3 added a new concept, [tribalAffiliation](StructureDefinition-qicore-patient-definitions.html#key_Patient.extension:tribalAffiliation), using US Core Tribal Affiliation Extension <br/> URL: <{{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-tribal-affiliation.html> | 
|**Ethnicity**  |                                                                                                                    |          |
| code          | [Patient.extention:ethnicity](StructureDefinition-qicore-patient-definitions.html#Patient.extension:ethnicity)     | URL: <{{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-ethnicity.html> |
| id            |                                                                                                                    |          |
| **Sex**       |                                                                                                                    |          |
| code          | [Patient.extension:birthsex](StructureDefinition-qicore-patient-definitions.html#Patient.extension:birthsex)       | When created, QDM's focus was to address the concept of sex as identified at birth. Hence, this birthsex is the most direct mapping to the intent of QDM.  However, USCDI version 3 changes the focus for data capture to [Sex](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1240.3/expansion) as noted in US Core 7.0.0. USCDI also adds the concept of [genderIdentity](StructureDefinition-qicore-patient-definitions.html#key_Patient.extension:genderIdentity)   |
|               | [Sex](StructureDefinition-qicore-patient-definitions.html#key_Patient.extension:sex) |  USCDI version 3 Sex extension <{{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-sex.html> with binding: [Created specifically to support United States USCDI v3 data element "Sex" (required)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1240.3/expansion), a data element used for general documentation of sex representation: concepts limited to Male, Female, Patient Sex Unknown, asked-declined.  |
|               | [genderIdentity](StructureDefinition-qicore-patient-definitions.html#key_Patient.extension:genderIdentity)                               |  USCDI version 3 Individual's gender identity <{{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-genderIdentity.html> with binding: [Gender Identity (extensible)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1021.32/expansion)  |
| id            |                                                                                                                    |          |
| **Birthdate** |                                                                                                                    |          |
| birthDatetime | [Patient.birthdate](StructureDefinition-qicore-patient-definitions.html#Patient.birthDate)                         |  Fixed code 21112-8   |
| id            |                                                                                                                    |          |
| **Clinical Trial Participant** |    | Clinical Trial Participant should be handled as an Observation (i.e., Assessment, Performed) in QDM rather than a Patient Characteristic |
| **Expired**        |                                                                                                                    |           |
| code               | [Patient.deceased\[x\] boolean](StructureDefinition-qicore-patient-definitions.html#Patient.deceased[x])           |           |
| id                 |                                                                                                                    |           |
| cause              |                     | Expiration cause requires use of Observation  |
| expirationDatetime | [Patient.deceased\[x\] dateTime](StructureDefinition-qicore-patient-definitions.html#Patient.deceased[x])          |            |
| **Payer**          | [Coverage](StructureDefinition-qicore-coverage.html)                                                               |            |
| code               | [Coverage.payor](StructureDefinition-qicore-coverage-definitions.html#Coverage.payor)    | QI-Core currently maps to policy holder which actually references the person who owns the policy, not the payor. |
| relevantPeriod     | [Coverage.period](StructureDefinition-qicore-coverage-definitions.html#Coverage.period)                            |             |
| id                 | [Coverage.id](StructureDefinition-qicore-coverage-definitions.html#Coverage.id)                                    |             |
| **Patient Characteristic (generic)** |                    |                     |
| N/A                                  |                    |    Requires definition for modeling a characteristic to QI-Core and FHIR     |
{: .grid}

#### QDM *datatype* - Related Person

| **QDM Attribute**   | **QI-Core STU7**     | **Comments** |
| ------------------- | -------------------------------------------------------- | ------------ |
| **Related Person**  | [RelatedPerson](StructureDefinition-qicore-relatedperson.html)    |              |
| identifier          | [RelatedPerson.identifier](StructureDefinition-qicore-relatedperson-definitions.html#RelatedPerson.identifier)     |              |
| id                  | [RelatedPerson.id](StructureDefinition-qicore-relatedperson-definitions.html#RelatedPerson.id)                     |              |
| linkedPatientId     | N/A                                                                                                                | Not present in QI-Core    |
| code                | [RelatedPerson.relationship](StructureDefinition-qicore-relatedperson-definitions.html#RelatedPerson.relationship) |  The nature of the relationship; preferred binding to [PatientRelationshipType](http://hl7.org/fhir/R4/valueset-relatedperson-relationshiptype.html)  |
{: .grid}

### Intervention

QDM defines Intervention as a course of action intended to achieve a result in
the care of persons with health problems that does not involve
direct physical contact with a patient. Examples include patient
education and therapeutic communication.

#### Procedure Vs Intervention

FHIR references both of these concepts using the *Procedure* resource,
specifically noting a process that involves verification of the
patient's comprehension or to change the patient's mental state would be
a Procedure. Therefore, both QDM *datatypes*, Procedure and Intervention
are included in this section of the QDM to QI-Core mapping especially
since all of the QDM attributes for each of these QDM *datatypes* are
identical.



#### Intervention, Performed

| **QDM Context**             | **QI-Core STU7**                                            | **Comments**                   |
| --------------------------- | ----------------------------------------------------------- | ------------------------------ |
| **Intervention, Performed** | [Procedure](StructureDefinition-qicore-procedure.html)      |                                |
| **QDM Attributes**      |                                             |                                                 |
| status                  | [Procedure.status](StructureDefinition-qicore-procedure-definitions.html#Procedure.status)   | While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the QDM datatype name “Procedure, Performed”. Constrain to “completed”   |
| code                    | [Procedure.code](StructureDefinition-qicore-procedure-definitions.html#Procedure.code)       | Identification of the procedure. Extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) |
| id                      | [Procedure.id](StructureDefinition-qicore-procedure-definitions.html#Procedure.id)           |        |
| relatedTo               | [Procedure.basedOn](StructureDefinition-qicore-procedure-definitions.html#Procedure.basedOn) |   A reference to a resource that contains details of the request for this procedure. There has not been a use case for this element in existing measures; therefore, it is not included in the QI-Core profile Key Elements Table. |
| method                  | N/A                            | Procedure.method does not exist in FHIR. Rather than create an extension, QI-Core's approach is to assume the Procedure.code includes reference to the method.  |
| rank                    | [Claim.procedure.sequence](StructureDefinition-qicore-claim-definitions.html#Claim.procedure.sequence)  | Used to identify a principal procedure in the content of an encounter. See discussion in the QDM “Encounter, Performed” section indicating the rationale for using the Claim profile to identify principal or primary procedures and conditions. |
| priority                | N/A   | This QDM attribute is intended to reference elective from non-elective procedures. See discussion regarding “Encounter, Order” _priority_ which was created to differentiate elective encounters from non-elective encounters. Similar to the encounter discussion, a given procedure is not inherently elective or non-elective, the urgency is based on a patient’s status and other factors. Information about urgency, elective, non-elective may be found a scheduling or appointment application which may generate a tag for a procedure in the clinical record. This item is not present in the FHIR Procedure resource. Measure developers should work with clinical sites to determine the most effective method for identifying procedure priority. |
| anatomicalLocationSite  | [Procedure.bodySite](StructureDefinition-qicore-procedure-definitions.html#Procedure.bodySite)  |   Target body sites with preferred binding to [SNOMEDCT Body Structures](http://hl7.org/fhir/R4/valueset-body-site.html). Existing measures have not provided a use case for this element. Therefore, the element does not appear in the QI-Core profile Key Elements Table.   |
| reason                  | [Procedure.reasonCode](StructureDefinition-qicore-procedure-definitions.html#Procedure.reasonCode)  |  Code reason procedure is performed. Preferred binding to [Procedure Reason Codes](http://hl7.org/fhir/R4/valueset-procedure-reason.html).     |
| result                  | [Simple Observation](StructureDefinition-qicore-simple-observation.html) or [Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) that includes the element [SimpleObservation.partOf](StructureDefinition-qicore-simple-observation-definitions.html#Observation.partOf) to reference the procedure to which it applies.     |        [Procedure.report](StructureDefinition-qicore-procedure-definitions.html#Procedure.report) references [DiagnosticReport-note](StructureDefinition-qicore-diagnosticreport-note.html), DocumentReference, Composition (histology result, pathology report, surgical report, etc.); the latter two are not QI-Core resources. However, based on feedback suggested that a procedure result might be better identified as [Simple Observation](StructureDefinition-qicore-simple-observation.html) or [Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) that includes the element [SimpleObservation.partOf](StructureDefinition-qicore-simple-observation-definitions.html#Observation.partOf) resources referencing the [ObservatonClinicalResult.partOf](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.partOf), or the [SimpleObservation.partOf](StructureDefinition-qicore-simple-observation-definitions.html#Observation.partOf) element to reference the procedure to which it applies.  |
| negationRationale       | See Below |
| relevantDatetime        | [Procedure.performed\[x\] dateTime](StructureDefinition-qicore-procedure-definitions.html#Procedure.performed[x])   |  When the procedure was performed (as a single point in time).   |
| relevantPeriod          | [Procedure.performed\[x\] Period](StructureDefinition-qicore-procedure-definitions.html#Procedure.performed[x])     |   When the procedure was performed (over a period of time).      |
| incisionDatetime        | [Procedure.extension:incisionDateTime](StructureDefinition-qicore-procedure-definitions.html#Procedure.extension)   |    The first incision time. Existing measures do not use this element; therefore, it is not included in the QI-Core profile Key Elements Table.       |
| authorDatetime          | [Procedure.extension:recorded](StructureDefinition-qicore-procedure-definitions.html#Procedure.extension:recorded)  | When the procedure was first captured in the subject’s record. This element is useful for historical procedures and for the QDM negation rationale concept.   |
|                         | [Procedure.usedReference](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.usedReference) <br> [Procedure.usedCode](StructureDefinition-qicore-procedure-definitions.html#Procedure.usedCode)         |      These elements help to add reference to a device, medication, or substance used as part of a procedure the QI-Core element to address the device is used by the procedure. However, feedback has suggested that implementers prefer a direct, precoordinated code for the procedure that also indicates the type of device used rather than having to connect a specific item/device used to perform the procedure. Thus, while modeling allows usedCode or usedReference, feasibility is very limited. For that reason, these elements are not included in the QI-Core profile Key Elements Table.   |
| components              | N/A                            | Procedure does not include component.    |
| component.code          | N/A                            | N/A                                      |
| component.result        | N/A                            | N/A                                      |
| performer               | [Procedure.performer.actor](StructureDefinition-qicore-procedure-definitions.html#Procedure.performer.actor)      |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished    |
{: .grid}



##### Negation Rationale for Intervention, Performed

Use [QICoreProcedureNotDone](StructureDefinition-qicore-procedurenotdone.html), which contains:
* [Procedure.status](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.status) - Fixed value: "not-done"
* [Procedure.statusReason](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [Procedure.extension:recorded](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.extension:recorded) - dateTime when this was made available
* [Procedure.code.extension:notDoneValueSet](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific Procedure that was not performed




#### Intervention, Order

| **QDM Context**     | **QI-Core STU7**         | **Comments**                                                 |
| --------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Intervention, Order**     | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)                                             |                |
|                             | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)    | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Intervention, Order” and “Intervention, Recommended” datatypes.  |
|                             | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)     | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order) |
| **QDM Attributes**  |                                              |                                                              |
| code                | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)    |   What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)  |
| id                  | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                    |                   |
| reason              | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)    | Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)   |
| authorDatetime      | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)    | When the request transitioned to being actionable.   |
| negationRationale   | See Below |
| requester           | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)      |     Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.        |
{: .grid}


##### Negation Rationale for Intervention, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"
<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


#### Intervention, Recommended

| **QDM Context**                 | **QI-Core STU7**          | **Comments**        |
| ------------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------ |
| **Intervention, Recommended**   | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)    |                                                              |
|                                 | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)    | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Intervention, Order” and “Intervention, Recommended” datatypes.    |
|                                 | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)    | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”        |
| **QDM Attributes**    |                                        |                                                              |
| code                  | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code) |   What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)     |
| id                    | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)     |                |
| reason                | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)      |    Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime        | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)      | When the request transitioned to being actionable. |
| negationRationale     | See Below |
| requester             | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)        |    Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Intervention, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed



### Laboratory Test

QDM defines Laboratory Test as a medical procedure that involves testing a sample of blood, urine, or other body fluids or specimens. Tests can help determine a diagnosis, plan treatment, check to see if treatment is working, or monitor the disease over time. This QDM data category for Laboratory Test is only used for information about the subject of record.


Rather than directly referencing the [US Core Laboratory Result Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-observation-lab.html), QI-Core 5.0.0 builds on that profile to add further constraint requirements as [QICore Laboratory Result Observation](StructureDefinition-qicore-observation-lab.html). The reason for this approach is to assure the profile Key Element Table includes elements such as  interpretation, specific result datatypes, and additional constraints.


Each laboratory test may be ordered individually or in a panel. Many use panels for convenience for ordering laboratory tests. Since new laboratory panels regularly become available and the myriad of potential laboratory panels available, a complete list cannot be assured. LOINC observable entities may indicate specific methods for determination of results. Measure and CDS developers can reference direct reference codes or value sets using such LOINC codes to specify the type of testing considered acceptable to provide sufficient fidelity to their requests.


#### Laboratory Test, Order

“Laboratory Test, Order” should reference orders for studies that will generate results for activities that meet criteria for Observation Lab Result.


| **QDM Context**      | **QI-Core STU7**               | **Comments**                                                 |
| --------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Laboratory Test, Order**  | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)       |                                                              |
|                             | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Laboratory Test, Order” and “Laboratory Test, Recommended” datatypes. |
|                             | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
| **QDM Attributes**    |                                          |                                                              |
| code                  | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)   |  What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)   |
| id                    | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)       |                  |
| reason                | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)        |   Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime        | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)        | When the request transitioned to being actionable.                                                             |
| negationRationale     | See Below |
| requester             | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)      | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Laboratory Test, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"
<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


#### Laboratory Test, Performed


| **QDM Context**    | **QI-Core STU7**         |**Comments**                           |
| ------------------ | -----------------------  | ------------------------------------- |
| **Laboratory Test, Performed** | [Laboratory Result Observation](StructureDefinition-qicore-observation-lab.html)               |                            |
| **QDM Attribute**  |             |                            |
| code               | [Observation.code](StructureDefinition-qicore-observation-lab-definitions.html#Observation.code)         |   Note specific bindings based on the QI-Core or US Core profile used.  |
| id                 | [Observation.id](StructureDefinition-qicore-observation-lab-definitions.html#Observation.id)             |                            |
| method             | [Observation.method](StructureDefinition-qicore-observation-lab-definitions.html#Observation.method)     |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.  |
| negationRationale  | See Below |
| reason             | [Observation.basedOn](StructureDefinition-qicore-observation-lab-definitions.html#Observation.basedOn)   | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.    |
| result             | [Observation.value\[x\]](StructureDefinition-qicore-observation-lab-definitions.html#Observation.value[x])           |                            |
| interpretation     | [Observation.interpretation](StructureDefinition-qicore-observation-lab-definitions.html#Observation.interpretation) |  Explanation of significance of the observation result (e.g., critical, high, low).    |
| relatedTo          | [Observation.partOf](StructureDefinition-qicore-observation-lab-definitions.html#Observation.partOf)   | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.   |
| resultDatetime     | [Observation.issued](StructureDefinition-qicore-observation-lab-definitions.html#Observation.issued)   |  Time observation result made available.  |
| relevantDatetime   | [Observation.effective\[x\]](StructureDefinition-qicore-observation-lab-definitions.html#Observation.effective[x])   | Time observation occurred if a point in time.   |
| relevantPeriod     | [Observation.effective\[x\]](StructureDefinition-qicore-observation-lab-definitions.html#Observation.effective[x])   | Time observation occurred if it occurs over a period of time.  |
| status             | [Observation.status](StructureDefinition-qicore-observation-lab-definitions.html#Observation.status)   | Constrain status to -  final, amended, corrected. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Assessment, Performed” datatype.  |
| authorDatetime     | [Observation.issued](StructureDefinition-qicore-observation-lab-definitions.html#Observation.issued)   | Time observation result made available. |
| referenceRangeHigh | [Observation.referenceRange.high](StructureDefinition-qicore-observation-lab-definitions.html#Observation.referenceRange.high)   |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.  |
| referenceRangeLow  | [Observation.referenceRange.low](StructureDefinition-qicore-observation-lab-definitions.html#Observation.referenceRange.low)     | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.   |
| component          | [Observation.component](StructureDefinition-qicore-observation-lab-definitions.html#Observation.component)     |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Many measures address components of a panel of simple observations as single elements. Therefore, _component_ is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles   |
| component.code     | [Observation.component.code](StructureDefinition-qicore-observation-lab-definitions.html#Observation.component.code)      |   See comment about component.  |
| component.result   | [Observation.component.value\[x\]](StructureDefinition-qicore-observation-lab-definitions.html#Observation.component.value[x])    |  See comment about component.  |
| component.referenceRangeHigh | [Observation.component.referenceRange](StructureDefinition-qicore-observation-lab-definitions.html#Observation.component.referenceRange)   |   See comment about component.  |
| component.referenceRangeLow  | [Observation.component.referenceRange](StructureDefinition-qicore-observation-lab-definitions.html#Observation.component.referenceRange)   |  See comment about component.  |
| performer         | [Observation.performer](StructureDefinition-qicore-observation-lab-definitions.html#Observation.performer)   |    Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Laboratory Test, Performed

Use [QICoreObservationCancelled](StructureDefinition-qicore-observationcancelled.html) and reference the code element specified in the respective observation profile:

* [Observation.status](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.status) - Fixed value: "cancelled"

<div class="new-content" markdown="1">

* [Observation.extension:event-StatusReason](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.extension:event-statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [Observation.issued](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.issued) - When this was made available
* [Observation.code.extension:notDoneValueSet](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific Observation that was not performed


#### Laboratory Test, Recommended

| **QDM Context**      | **QI-Core STU7**               | **Comments**                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------- | -------------------------------------------- |
| **Laboratory Test, Recommended**  | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)      |                                                              |
|                                   | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)       | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, _status_ is implied by the name “Laboratory Test, Order” and “Laboratory Test, Recommended” datatypes.   |
|                                   | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)       | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”    |
| **QDM Attributes**  |                               |                                                              |
| code                | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)   |   What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)  |
| id                  | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)       |                    |
| reason              | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)   |  Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html) |  
| authorDatetime      | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)   | When the request transitioned to being actionable.   |
| negationRationale   | See Below |
| requester           | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)     | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.  |
{: .grid}

##### Negation Rationale for Laboratory Test, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"
<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed



### Medication

QDM defines Medication as clinical drugs or chemical substances intended
for use in the medical diagnosis, cure, treatment, or prevention of
disease. Medications are defined as direct referenced values or value
sets containing values derived from code systems such as RxNorm. QDM
defines five contexts for Medication, each of which is listed below
referencing the US Core or FHIR resource which provides the expected
context:

#### Medication, Active

This QDM context correlates with a medication on a patient’s active medication
list. In QI-Core STU3, Medication, Active was mapped to MedicationStatement.
However, consistent with US Core R4 and subsequent versions, medication list should use
MedicationRequest and not MedicationStatement. The mapping table provides
guidance about how to use MedicationRequest.requester to specify medications
ordered directly, those reported by a physician and those reported by the
patient for a medication list.

Include all MedicationRequest resources with an intent = "order" representing authorized medication orders directly derived from the system’s orders. 

The MedicationRequest **SHALL** include all practitioner-reported and "self-reported" medications reported by the Provider, Patient or Related Person.

* **SHALL** use reported[x] to indicate the MedicationRequest record was captured as a secondary “reported” record rather than an original primary source-of-truth record. It may also indicate the source of the report
* When recording "self-reported" or "self-prescribed" medications **SHALL** use intent = “plan”
* When recording "self-prescribed" orders, **SHOULD** use the requester to indicate the Patient or RelatedPerson as the prescriber


| **QDM Context**  | **QI-Core STU7**     | **Comments**          |
| ----------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Medication, Active**  | [MedicationRequest](StructureDefinition-qicore-medicationrequest.html)              |      |
|                         | [MedicationRequest.status](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.status)    | While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Medication, Order”. Constrain to active, completed  |
|                         | [MedicationRequest.intent](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.intent)    | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)    |
|                         | [MedicationRequest.reported[x]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.reported[x])   | When recording "self-reported" or "self-prescribed" medications **SHALL** use reported[x] to indicate the MedicationRequest record was captured as a secondary “reported” record rather than an original primary source-of-truth record; "self-prescribed" medication **SHOULD** indicate the MedicationRequest.requester as the patient or related person.     |
|                         | [MedicationRequest.category](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.category) | Type of medication usage using [Medication Category Codes](http://hl7.org/fhir/R4/valueset-medicationrequest-category.html) |
| **QDM Attribute**   |                                |                          |
| code                | [MedicationRequest.medication\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.medication[x])  |   Medication to be taken an extensible binding to [MedicationClinicalDrug (RxNorm)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion).   |
| id                  | [MedicationRequest.id](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.id)   |                          |
| dosage              | [MedicationRequest.dosageInstruction.doseAndRate.dose\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.doseAndRate.dose[x])  | Amount of medication per dose     |
| frequency           | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) | Amount of medication to be administered. Range, quantity |
| route               | [MedicationRequest.dosageInstruction.route](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.route)  |   How drug should enter body   |
|                     | [MedicationRequest.reasonCode](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.reasonCode)  |   The reason for ordering or not ordering the medication. This element has not been used to-date in quality measures; it is not included in the QI-Core profile Key Elements Table  |
| relevantDatetime    | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) <br> with <br> [Timing.event](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.event) dateTime  |    Timing – when medication should be administered; Timing.event when the event occurs    |
| relevantPeriod      | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) <br> with <br> [Timing.repeat.bounds\[x\]](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.bounds_x_) Period | Length/Range of lengths, or (Start and/or End) limits   |
|                     | [MedicationRequest.authoredOn](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.authoredOn)   |  When request was originally authored. Not referenced in QDM  |
| recorder            | [MedicationRequest.requester](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.requester)  |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.  |
{: .grid}

#### Medication, Administered

This QDM context correlates with a record of a patient consuming or
otherwise being administered a medication. It references individual
medication administration events and, therefore, may not reference
frequency of administration. Note that a separate QDM and US Core
profile address Immunization, Administered.


| **QDM Context**   | **QI-Core STU7**    | **Comments**      |
| ---------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Medication, Administered** | [MedicationAdministration](StructureDefinition-qicore-medicationadministration.html)    |                          |
|                              | [MedicationAdministration.status](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.status)  |    While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Medication, Administered”. Constrain status to “In-progress” or “completed” Note: Measures that look for evidence of potential adverse events might use MedicationAdministration.status = on-hold, or stopped as possible indicators of such events. |
|                              | [MedicationAdministration.category](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.category)  | Type of medication usage using [Medication Category Codes](http://hl7.org/fhir/R4/valueset-medicationrequest-category.html). Allows specification of Inpatient, Outpatient, Community |
| **QDM Attributes**   |                                            |                                                                         |
| code                 | [MedicationAdministration.medication\[x\]](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.medication[x])  |Medication to be taken an extensible binding to [MedicationClinicalDrug (RxNorm)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion).   |
| id                   | [MedicationAdministration.id](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.id) |               |
| dosage               | [MedicationAdministration.dosage.dose](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.dosage.dose)   | Simple Quantity - Amount of medication for one administration  |
| route                | [MedicationAdministration.dosage.route](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.dosage.route)  |  Path of substance into the body with preferred binding to [SNOMEDCT Route Codes](http://hl7.org/fhir/R4/valueset-route-codes.html).  |
| frequency            | [MedicationAdministration.request](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.request)  | Reference to original MedicationRequest with content about prescription. Generally, retrieval of medication administration events applies to locations that administer medications directly to a patient (e.g., hospital settings, skilled nursing facilities, Community-Based Residential Facilities (CBRFs), outpatient surgery centers). Linkage to the original authorizing prescription has not been considered relevant for the existing measure use cases requiring only to retrieve information about one or more administration events.  |
|                      | [MedicationAdministration.dosage.rate\[x\]](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.dosage.rate[x])     | The rate, dose quantity per unit of time (e.g., infusion rate). This element has not been the focus of measures to date, therefore, it is not included in the QI-Core profile Key Elements Table.     |
|                      | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing)        | Timing schedule (e.g., every 8 hours). [MedicationAdministration.request](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.request) provides reference to the applicable [MedicationRequest ](StructureDefinition-qicore-medicationrequest.html)for this information. Generally, retrieval of medication administration events applies to the hospital setting with a few exceptions. Linkage to the original authorizing prescription has not been considered relevant for the existing measure use cases requiring only to retrieve information about one or more administration events. |
| reason               | [MedicationAdministration.reasonCode](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.reasonCode)               | Reason administration performed, e.g., none, given as ordered, emergency. Preferred binding to [ReasonMedicationGivenCodes](http://hl7.org/fhir/R4/valueset-reason-medication-given-codes.html).|
| relevant dateTime    | [MedicationAdministration.effective\[x\] dateTime](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.effective[x])|   Start and end time of administration – dateTime if given at a single point in time.  |
| relevant Period      | [MedicationAdministration.effective\[x\] Period](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.effective[x])  |  Start and end time of administration – period if given at over a time interval (e.g., an infusion).   |
| author dateTime      | [MedicationAdministration.extension:recorded](StructureDefinition-qicore-medicationadministrationnotdone-definitions.html#MedicationAdministration.extension:recorded)        |   Recorded time is used exclusively for the QDM negation rationale concept.      |
| Negation Rationale   | See Below |
| Performer            | [MedicationAdministration.performer.actor](StructureDefinition-qicore-medicationadministration-definitions.html#MedicationAdministration.performer.actor)     |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.     |
{: .grid}



##### Negation Rationale for Medication, Administered

Use [QICoreMedicationAdministrationNotDone](StructureDefinition-qicore-medicationadministrationnotdone.html), which contains:

* [MedicationAdministration.status](StructureDefinition-qicore-medicationadministrationnotdone-definitions.html#MedicationAdministration.status) - Fixed value: "not-done"
* [MedicationAdministration.statusReason](StructureDefinition-qicore-medicationadministrationnotdone-definitions.html#MedicationAdministration.statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [MedicationAdministration.extension:recorded](StructureDefinition-qicore-medicationadministrationnotdone-definitions.html#MedicationAdministration.extension:recorded) - dateTime when this was made available
* [MedicationAdministration.medication\[x\].extension:notDoneValueSet](StructureDefinition-qicore-medicationadministrationnotdone-definitions.html#MedicationAdministration.medication[x].extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific MedicationAdministration that was not performed


#### Medication, Discharge

This QDM context specifically references the discharge medication list
provided to a patient at the time of discharge from an inpatient
setting. The list may include reference to new prescriptions sent to a
pharmacy for dispensing and self-administration after discharge. It may
also include over-the-counter medications and those medications already
present in the patient’s home for which new prescriptions are not
necessary. The QDM Medication, Discharge concept is mapped to
MedicationRequest as a request to the patient to take the medication
with MedicationRequest.intent = *plan* and MedicationRequest.setting =
*discharge.*

MedicationRequest.intent should always be *order* even if the medication is
patient reported and the order is not processed as an e-prescription.
The reporter is specified as MedicationRequest.reported[x] which is a
reportedBoolean and uses reportedReference (patient, practitioner,
practitionerRole, relatedPerson, organization).

This change should also be used to reference the mapping from QDM Medication,
Order which can address order or recommended.



| **QDM Context**              | **QI-Core STU7**       | **Comments**          |
| ---------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Medication, Discharge**    | [MedicationRequest](StructureDefinition-qicore-medicationrequest.html)    |             |
| Medication, Discharge active | [MedicationRequest.status](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.status)  | While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Medication, Order”. Constrain to active, completed  |
|                              | [MedicationRequest.intent](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.intent)     | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
| **QDM Attributes**   |                      |                           |
| code                 | [MedicationRequest.medication\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.medication[x])   | Medication to be taken an extensible binding to [MedicationClinicalDrug (RxNorm)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion)  |
| id                   | [MedicationRequest.id](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.id)    |             |
| dosage               | [MedicationRequest.dosageInstruction.doseAndRate.dose\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.doseAndRate.dose[x]) | Amount of medication to be administered. Range, quantity |
| supply               | [MedicationRequest.dispenseRequest.quantity](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.quantity)  | Amount to be dispensed in one fill  |
| daysSupplied         | [MedicationRequest.dispenseRequest.expectedSupplyDuration](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.expectedSupplyDuration) | Number of days supply per dispense  |
| frequency            | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing)  | When medication should be administered. Timing schedule (e.g., every 8 hours)  |
| refills              | [MedicationRequest.dispenseRequest.numberOfRepeatsAllowed](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.numberOfRepeatsAllowed) | Number of refills allowed. Integer |
| route                | [MedicationRequest.dosageInstruction.route](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.route)  |  How drug should enter body |
| setting              | [MedicationRequest.category](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.category)  | Type of medication usage using [Medication Category Codes](http://hl7.org/fhir/R4/valueset-medicationrequest-category.html) For MedicationDischarge, constrain category to “Community”.   |
| reason               | [MedicationRequest.reasonCode](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.reasonCode)  | The reason for ordering or not ordering the medication. This element has not been used to-date in quality measures; it is not included in the QI-Core profile Key Elements Table.      |
| relevantDatetime     | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) <br> with <br> [Timing.event](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.event) dateTime  |   Timing – when the medication should be administered; Event – when the event occurs.   |
| relevantPeriod       | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) <br> with <br> [Timing.repeat.bounds\[x\]](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.bounds_x_) Period   |  Length/Range of lengths or (Start and/or End) limits  |
| authorDatetime       | [MedicationRequest.authoredOn](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.authoredOn)  |  When request was originally authored  |
| negationRationale    | See Below |
| prescriber           | [MedicationRequest.requester](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.requester) |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.  |
{: .grid}


##### Negation Rationale for Medication, Discharge

Use [QICoreMedicationNotRequested](StructureDefinition-qicore-medicationnotrequested.html), which contains:
* [MedicationRequest.doNotPerform](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.doNotPerform) - Fixed value: "true"
* [MedicationRequest.status](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.status) - Fixed value: "completed"
* [MedicationRequest.reasonCode](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [MedicationRequest.authoredOn](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.authoredOn) - dateTime when this was made available
* [MedicationRequest.medication\[x\].extension:notDoneValueSet](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.medication[x].extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific MedicationRequest that was not performed


#### Medication, Dispensed

This QDM context maps to the QI-Core MedicationDispense resource,
indicating information about medications that have been dispensed.


| **QDM Context**           | **QI-Core STU7**             | **Comments**                         |
| ------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------- |
| **Medication, Dispensed** | [MedicationDispense](StructureDefinition-qicore-medicationdispense.html)       |        |
|                           | [MedicationDispense.status](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.status)  | While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Medication, Dispensed”. Constrain MedicationDispense.status to completed |
| **QDM Attributes** |                         |                                     |
| code               | [MedicationDispense.medication\[x\]](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.medication[x])   |    What medication was supplied; extensible binding to [Medication Clinical Drug](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion)     |
| id                 | [MedicationDispense.id](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.id)      |             |
| dosage             | [MedicationDispense.dosageInstruction.doseAndRate.dose\[x\]](StructureDefinition-qicore-medicationdispense-definitions.html#key_MedicationDispense.dosageInstruction.doseAndRate.dose[x]) |    Amount of medication per dose    |
| supply             | [MedicationDispense.quantity](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.quantity)      |   Amount dispensed    |
| daysSupplied       | [MedicationDispense.daysSupply](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.daysSupply)  |   Amount of medication expressed as a timing amount.  |
| frequency          | [MedicationDispense.dosageInstruction.timing](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.dosageInstruction.timing) |  When medication should be administered   |
| refills            | [MedicationDispense.authorizingPrescription](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.authorizingPrescription)   | Medication order that authorizes the dispense. Reference authorizing prescription ([MedicationRequest](StructureDefinition-qicore-medicationrequest.html)) which contains [MedicationRequest.dispenseRequest.numberOfRepeatsAllowed](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.numberOfRepeatsAllowed) (number of refills authorized) |
| route              | [MedicationDispense.dosageInstruction.route](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.dosageInstruction.route)  | How drug should enter body. Most quality measures indicate the route by choosing RxNorm concepts specific to the routes acceptable to meet measure intent. Therefore, this element has not been used in measures with the “Medication, Dispense” QDM datatype and the element is not present in the MedicationDispense profile Key Elements Table.  |
| setting            | [MedicationDispense.category](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.category)    | Type of medication usage, with required binding to value set [MedicationRequest Category Codes](http://hl7.org/fhir/R4/valueset-medicationrequest-category.html).  Inpatient, Outpatient, Community, Discharge  |
| reason             | [MedicationDispense.statusReason\[x\]](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.statusReason[x])   | Reason for the current status.  |
| relatedTo          | [MedicationDispense.authorizingPrescription](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.authorizingPrescription)  | Medication order that authorizes the dispense. Reference authorizing prescription ([MedicationRequest](StructureDefinition-qicore-medicationrequest.html)).  |
| relevant dateTime  | [MedicationDispense.whenHandedOver](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.whenHandedOver)    | When provided to patient or representative. Recommendations from pharmacy experts suggest that all medication dispensing events include a time for MedicationDispense.whenPrepared (i.e., when the dispensed product was packaged and reviewed. The time the medication was handed over to the patient or representative may not be populated.) Note that medications not picked up are restocked such that a MedicationDispense.status = completed will assure the patient or representative received the medication even if whenHandedOver is not available. Therefore, measure developers should consider including the time whenPrepared if whenHandedOver is null and status = completed.                                |
| relevant Period    | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) <br> with <br> [Timing.repeat.bounds\[x\]](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.bounds_x_) Period     |   The anticipated time from starting to stopping an ordered or dispensed medication can also be computed in an expression and derived from the duration attribute   |
| author dateTime    | [MedicationDispense.extension:recorded](StructureDefinition-qicore-medicationdispensedeclined-definitions.html#MedicationDispense.extension:recorded)  | Used only for QDM negation rationale concept, to indicate the time for documentation of reason not dispensed   |
| Negation Rationale | See Below |
| Prescriber         | [MedicationDispense.authorizingPrescription](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.authorizingPrescription)  | Reference authorizing prescription (MedicationRequest) which contains [MedicationRequest.requester](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.requester)    |
| dispenser          | [MedicationDispense.performer.actor](StructureDefinition-qicore-medicationdispense-definitions.html#MedicationDispense.performer.actor)   |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}



##### Negation Rationale for Medication, Dispensed

Use [QICoreMedicationDispenseDeclined](StructureDefinition-qicore-medicationdispensedeclined.html), which contains:
* [MedicationDispense.status](StructureDefinition-qicore-medicationdispensedeclined-definitions.html#MedicationDispense.status) - Fixed value: "declined"
* [MedicationDispense.statusReason\[x\]](StructureDefinition-qicore-medicationdispensedeclined-definitions.html#MedicationDispense.statusReason[x]) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [MedicationDispense.extension:recorded](StructureDefinition-qicore-medicationdispensedeclined-definitions.html#MedicationDispense.extension:recorded) - dateTime when this was made available
* [MedicationDispense.medication\[x\].extension:notDoneValueSet](StructureDefinition-qicore-medicationdispensedeclined-definitions.html#MedicationDispense.medication[x].extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific MedicationDispense that was not performed


The MedicationDispensed.status is fixed to "declined" which is defined as "The dispense was declined and not performed." Considering the clinical workflow, only the pharmacist likely performs the "decline" status - based on medication interaction or on failure of insurance authorization (e.g., medication interaction, denial of insurance authorization, treatment abandonment due to co-pay cost). But the patient would not enter the status, only the pharmacist would do so. The use case likely still works for the measure developer intent (that a valid reason exists for not dispensing the medication). However, if the measure developer wants to address patient's decisions to avoid dispensing, the patient will likely not show up at the pharmacy for the medication to be dispensed - hence, there will be no dispensing event. The best way to capture that scenario may be to assure the MedicationRequest includes a Patient reason.

#### Medication, Order

This QDM context references the QI-Core MedicationRequest resource with
MedicationRequest.intent = *order* and MedicationRequest.setting
as the most appropriate for the intended meaning of the quality
measure or clinical decision support (CDS) expression.


| **QDM Context**          | **QI-Core STU7**    | **Comments**      |
| ------------------------ | -------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Medication, Order**    | [MedicationRequest](StructureDefinition-qicore-medicationrequest.html)    |    |
| Medication, Order active | [MedicationRequest.status](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.status) | While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Medication, Order”. Constrain to active, completed   |
|                          | [MedicationRequest.intent](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.intent) | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
|                          | [MedicationRequest.reported[x]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.reported[x])  | When recording “self-prescribed” medications **SHALL** use reported[x] to indicate the MedicationRequest record was captured as a secondary “reported” record rather than an original primary source-of-truth record    |
| **QDM Attributes**   |                   |                  |
| code                 | [MedicationRequest.medication\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.medication[x]) | Medication to be taken an extensible binding to [MedicationClinicalDrug (RxNorm)](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion) |
| id                   | [MedicationRequest.id](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.id)  |               |
| dosage               | [MedicationRequest.dosageInstruction.doseAndRate.dose\[x\]](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.doseAndRate.dose[x]) | Amount of medication to be administered. Range, quantity    |
| supply               | [MedicationRequest.dispenseRequest.quantity](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.quantity) | Amount to be dispensed in one fill  |
| daysSupplied         | [MedicationRequest.dispenseRequest.expectedSupplyDuration](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.expectedSupplyDuration) | Number of days supply per dispense |
| frequency            | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing)  | When medication should be administered. Timing schedule (e.g., every 8 hours)    |
| refills              | [MedicationRequest.dispenseRequest.numberOfRepeatsAllowed](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dispenseRequest.numberOfRepeatsAllowed) |  Number of refills allowed. Integer |
| route                | [MedicationRequest.dosageInstruction.route](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.route) | How drug should enter body |
| setting              | [MedicationRequest.category](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.category) | Type of medication usage using [Medication Category Codes](http://hl7.org/fhir/R4/valueset-medicationrequest-category.html) |
| reason               | [MedicationRequest.reasonCode](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.reasonCode) | The reason for ordering or not ordering the medication. This element has not been used to-date in quality measures; it is not included in the QI-Core profile Key Elements Table. |
| relatedTo            | [MedicationRequest.basedOn](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.basedOn) | What request fulfills. There has not yet been a use case requiring this element. Therefore, it is not included in the QI-Core profile Key Elements Table.    |
| relevantDatetime     | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) <br> with <br> [Timing.event](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.event) dateTime  |  Timing – when the medication should be administered; Event – when the event occurs.   |
| relevantPeriod       | [MedicationRequest.dosageInstruction.timing](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.dosageInstruction.timing) <br> with <br> [Timing.repeat.bounds\[x\]](http://hl7.org/fhir/R4/datatypes-definitions.html#Timing.repeat.bounds_x_) Period     | Length/Range of lengths or (Start and/or End) limits    |
| authorDatetime       | [MedicationRequest.authoredOn](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.authoredOn)   |   When request was originally authored   |
| negationRationale    | See Below |
| prescriber           | [MedicationRequest.requester](StructureDefinition-qicore-medicationrequest-definitions.html#MedicationRequest.requester)   | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}


##### Negation Rationale for Medication, Order

Use [QICoreMedicationNotRequested](StructureDefinition-qicore-medicationnotrequested.html), which contains:

* [MedicationRequest.doNotPerform](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.doNotPerform) - Fixed value: "true"
* [MedicationRequest.status](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.status) - Fixed value: "completed"
* [MedicationRequest.reasonCode](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [MedicationRequest.authoredOn](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.authoredOn) - dateTime when this was made available
* [MedicationRequest.medication\[x\].extension:notDoneValueSet](StructureDefinition-qicore-medicationnotrequested-definitions.html#MedicationRequest.medication[x].extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific MedicationRequest that was not performed




### Participation

QDM defines Participation as a patient’s coverage by a program such as
an insurance or medical plan or a payment agreement. Such programs can
include patient-centered medical home, disease-specific programs, etc.
Definitions modeled similar to the FHIR R4
[Coverage](http://hl7.org/fhir/R4/coverage.html) resource.


| **QDM Context**         | **QI-Core STU7**    | **Comments**          |
| ----------------------- | ---------------------------------------------------------- | --------------------- |
| **Participation**       | [Coverage](StructureDefinition-qicore-coverage.html)                                        |                             |
|                         | [Coverage.status](StructureDefinition-qicore-coverage-definitions.html#key_Coverage.status) | While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name ”Participation”. Constrain to “active” |
| **QDM Attributes**      |                                                                                             |                             |
| code                    | [Coverage.type](StructureDefinition-qicore-coverage-definitions.html#key_Coverage.type)     | Coverage category such as medical or accident. Required binding to https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.3591   |
| id                      | [Coverage.id](StructureDefinition-qicore-coverage-definitions.html#Coverage.id)         |                              |
| participationPeriod     | [Coverage.period](StructureDefinition-qicore-coverage-definitions.html#key_Coverage.period) | Coverage start and end dates |
{: .grid}



### Physical Exam

QDM defines Physical Exam as the evaluation of the patient’s body and/or
mental status exam to determine its state of health. The techniques of
examination can include palpation (feeling with the hands or fingers),
percussion (tapping with the fingers), auscultation (listening), visual
inspection or observation, inquisition and smell. Measurements may
include vital signs (blood pressure, pulse, respiration) as well as
other clinical measures (such as expiratory flow rate and size of lesion).
Physical exam includes psychiatric examinations.

US Core STU7 contains twelve observation profiles that address specific elements of physical examinations. The following table lists each profile and the respective data element codes referenced in each of those profiles.


| **Profile**         | **Data element codes**                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [US Core Vital Signs Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-vital-signs.html)    | Vital Signs (panel) – **Fixed Value:** 85353-1                                    |
|  [US Core Pediatric Head Occipital-frontal Circumference Percentile Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-head-occipital-frontal-circumference-percentile.html)                       | Head Occipital-Frontal Circumference Percentile - **Fixed Value:** 8289-1 |
| [US Core Average Blood Pressure Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-average-blood-pressure.html)      |  •Blood Pressure - **Fixed Value:** 96607-7<br>•Systolic average blood pressure - **Fixed Value:** 96608-5<br>•diastolic average blood pressure - **Fixed Value:** 96609-3<br>|
| [US Core Blood Pressure Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-blood-pressure.html)      |   •Blood Pressure Systolic and Diastolic – **Fixed Value:** 85354-9<br>•Systolic Blood Pressure – **Fixed Value:** 8480-6<br>•Diastolic Blood Pressure – **Fixed Value:** 8462-4<br>•valueQuantity - **Fixed Value:** mm[Hg]<br> |
|[US Core BMI Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-bmi.html) |•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br> •ValueQuantity.code - Coded responses from the common UCUM units for vital signs value set - **Fixed Value:** kg/m2<br>|
|[US Core Body Height Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-height.html)  |•Body Height – **Fixed Value:** 8302-2<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code - - Coded responses from the common UCUM units for vital signs value set - **Binding:** [BodyLengthUnits](http://hl7.org/fhir/R4/valueset-ucum-bodylength.html) ([required](http://hl7.org/fhir/R4/terminologies.html#required))|
| [US Core Body Temperature Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-temperature.html) | •Body Temperature – **Fixed Value:** 8310-5<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code - - Coded responses from the common UCUM units for vital signs value set –  **Binding:** [BodyTemperatureUnits](http://hl7.org/fhir/R4/valueset-ucum-bodytemp.html) ([required](http://hl7.org/fhir/R4/terminologies.html#required))|
| [US Core Body Weight Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-body-weight.html)     | •Body Weight – **Fixed Value:** 29463-7<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code – Coded responses from the common UCUM units for vital signs value set – **Binding:** [BodyWeightUnits](http://hl7.org/fhir/R4/valueset-ucum-bodyweight.html) ([required](http://hl7.org/fhir/R4/terminologies.html#required))|
|[US Core Head Circumference Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-head-circumference.html)| •Head Circumference – **Fixed Value:** 9843-4<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code - Coded responses from the common UCUM units for vital signs value set - **Binding:** [BodyLengthUnits](http://hl7.org/fhir/R4/valueset-ucum-bodylength.html) ([required](http://hl7.org/fhir/R4/terminologies.html#required))|
|[US Core Heart Rate Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-heart-rate.html)| •Vital Signs – Heart Rate – **Fixed Value:**  8867-4<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code - **Fixed Value:** /min|
|[US Core Pediatric BMI for Age Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-pediatric-bmi-for-age.html)| •Pediatric BMI for Age – **Fixed Value:** 59576-9<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org |
|[US Core Pediatric Weight for Height Observation Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-pediatric-weight-for-height.html)| •Pediatric Weight for Height – **Fixed Value:** 77606-2<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code - Coded responses from the common UCUM units for vital signs value set. **Fixed Value:** %|
|[US Core Pulse Oximetry Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-pulse-oximetry.html)| •Pulse Oximetry – **Fixed Value:** 59408-5<br>•O2 Saturation - **Fixed Value:** 2708-6<br>•Flow rate **Fixed Value:** 2708-6<br>•Flow rate Value quantity **Fixed Value:** L/min<br>•Concentration **Fixed Value:** 3150-0<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code – **Fixed Value:** % |
|[US Core Respiratory Rate Profile]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-respiratory-rate.html)| •Vital Signs – Respiratory Rate – **Fixed Value:** 9279-1<br>•ValueQuantity.system - **Fixed Value:** http://unitsofmeasure.org<br>•ValueQuantity.code - Coded responses from the common UCUM units for vital signs value set - **Fixed Value:** /min|
{: .grid}


#### Physical Exam, Order

QDM “Physical Exam, Order” should use ServiceRequest with *intent* = order for the specific examination requested.


| **QDM Context**   | **QI-Core STU7**        | **Comments**            |
| -------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Physical Exam, Order**   | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)         |          |
|                            | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)   | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Physical Exam, Order” and “Physical Exam, Recommended” datatypes.  |
|                            | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)   | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order)  |
| **QDM Attributes**      |                           |                                                              |
| code                    | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)     |    What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)  |
| id                      | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)                  |            |
| reason                  | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)  | Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime          | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)  | When the request transitioned to being actionable. |
| anatomicalLocationSite  | N/A    |  No comparable element in the ServiceRequest resource. This element has not been used in measures to-date as the requested procedure / action code can reference the respective anatomical site. |
| negationRationale       | See Below |
| requester               | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)  |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Physical Exam, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"
<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed



#### Physical Exam, Performed

QDM “Physical Exam, Performed” should reference the specific US Core vital signs profiles directly as appropriate. Some results may also be identified using the QICore Observation Clinical Result profile. The QI-Core Simple Observation profile may be appropriate for other physical examination observations not covered by the Observation Clinical Result profile.

| **QDM Context**   | **QI-Core STU7**    | **Comments**     |
| -------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| **Physical Exam, Performed - General** | [QI-Core Simple Observation](StructureDefinition-qicore-simple-observation.html) <br> [QI-Core Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html)  |        |
|                                        | [Observation.status](StructureDefinition-qicore-simple-observation-definitions.html#Observation.status)   | Constrain status to -  final, amended, corrected. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Physical Exam, Performed” datatype. |
|                                        | [Observation.category](StructureDefinition-qicore-simple-observation-definitions.html#Observation.category) | Category helps to narrow the request to the class of observation required to meet measure intent. Each QI-Core or US Core profile has a specific binding to concepts appropriate to the respective profile. Note that QDM does not have an attribute comparable to category, the element may be helpful in expressing a quality measure. |
| **QDM Attributes**     |                        |                     |
| code                   | [Observation.code](StructureDefinition-qicore-simple-observation-definitions.html#Observation.code)  |   Note specific bindings based on the QI-Core or US Core profile used. |
| id                     | [Observation.id](StructureDefinition-qicore-simple-observation-definitions.html#Observation.id)              |                       |
| anatomicalLocationSite | [Observation.bodySite](StructureDefinition-qicore-simple-observation-definitions.html#Observation.bodySite)  |                       |
| relatedTo              | [Observation.basedOn](StructureDefinition-qicore-simple-observation-definitions.html#Observation.basedOn)    | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.   |
| negationRationale      | See Below |
| reason                 | [Observation.basedOn](StructureDefinition-qicore-simple-observation-definitions.html#Observation.basedOn)    | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Therefore, it is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.  |
| result                  | [Observation.value\[x\]](StructureDefinition-qicore-simple-observation-definitions.html#Observation.value[x])   |                         |
|                         | [Observation.interpretation](StructureDefinition-qicore-simple-observation-definitions.html#Observation.interpretation)  |    Explanation of significance of the observation result (e.g., critical, high, low)  |
| relevantDatetime        | [Observation.effective\[x\] dateTime](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x])   |   Time observation occurred if a point in time.   |
| relevantPeriod          | [Observation.effective\[x\] Period](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x])     |   Time observation occurred if it occurs over a period of time.     |
| authorDatetime          | [Observation.issued](StructureDefinition-qicore-simple-observation-definitions.html#Observation.issued) |  Time observation result made available   |
| component               | [Observation.component](StructureDefinition-qicore-simple-observation-definitions.html#Observation.component)    |      Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. Many measures address components of a panel of simple observations as single elements. Therefore, component is not in the profile Key Elements Table; it can be found in the Snapshot Table tab of the respective profiles.  |
| component.code          | [Observation.component.code](StructureDefinition-qicore-simple-observation-definitions.html#Observation.component.code)    | See comment about component |
| component.result        | [Observation.component.value\[x\]](StructureDefinition-qicore-simple-observation-definitions.html#Observation.component.value[x])  | See comment about component  |
| performer               | [Observation.performer](StructureDefinition-qicore-simple-observation-definitions.html#Observation.performer)  |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.  |
{: .grid}

##### Negation Rationale for Physical Exam, Performed

Use [QICoreObservationCancelled](StructureDefinition-qicore-observationcancelled.html) and reference the code element specified in the respective observation profile:

* [Observation.status](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.status) - Fixed value: "cancelled"

<div class="new-content" markdown="1">

* [Observation.extension:event-StatusReason](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.extension:event-statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [Observation.issued](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.issued) - When this was made available
* [Observation.code.extension:notDoneValueSet](StructureDefinition-qicore-observationcancelled-definitions.html#Observation.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific Observation that was not performed



#### Physical Exam, Recommended

QDM “Physical Exam, Recommended” should use ServiceRequest with *intent* = plan for the specific examination recommended.

| **QDM Context**                | **QI-Core STU7**            | **Comments**                                                 |
| ------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| **Physical Exam, Recommended** | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)  |             |
|                                | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, _status_ is implied by the name “Physical Exam” and “Physical Exam, Recommended” datatypes.  |
|                                | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan”   |
| **QDM Attributes**     |                         |                 |
| code                   | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code) |  What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)  |
| id                     | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)     |             |
| reason                 | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)   |  Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime         | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)   | When the request transitioned to being actionable.  |
| anatomicalLocationSite | N/A   |  No comparable element in the ServiceRequest resource. This element has not been used in measures to-date as the requested procedure / action code can reference the respective anatomical site.  |
| negationRationale      | See Below |
| requester              | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)     |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Physical Exam, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed




### Procedure

QDM defines Procedure as an act whose immediate and primary outcome
(post-condition) is the alteration of the physical condition of the subject. A
*procedure* may be a surgery or other type of physical manipulation of a
person’s body in whole or in part for purposes of making observations and
diagnoses or providing treatment.

#### Procedure Vs Intervention

FHIR references both of these concepts using the Procedure resource, specifically
noting a process that involves verification of the patient’s comprehension or
to change the patient’s mental state would be a Procedure.

#### Procedure Vs Task

Some use cases have considered differentiating a FHIR Procedure Resource
from a FHIR core Task Resource. For example, should a request to perform
medication reconciliation be classified as a Task or a Procedure? The
FHIR [Procedure Resource](http://hl7.org/fhir/procedure.html) Boundaries
and Relationships (Section 9.3.2) provides some distinction between a
[Task](http://hl7.org/fhir/task.html) and a
[Procedure](http://hl7.org/fhir/procedure.html):

*A [Task](http://hl7.org/fhir/task.html) is
a workflow step such as cancelling an order, fulfilling an order,
signing an order, merging a set of records, admitting a patient.
Procedures are actions that are intended to result in a physical or
mental change to or for the subject (e.g. surgery, physiotherapy,
training, counseling).
A [Task](http://hl7.org/fhir/task.html) resource
often exists in parallel with clinical resources. For example,
a [Task](http://hl7.org/fhir/task.html) might
request fulfillment of
a [ServiceRequest](http://hl7.org/fhir/servicerequest.html) ordering
a Procedure.*

Based on the guidance provided above, the workflow step to reconcile
medication lists may be considered a Task to perform the Procedure that
includes reviewing the medication list with the patient to assure it is
correct and to education the patient about proper medication usage.


The sponsoring work group is specifically seeking feedback on the following
suggestions for use of Task rather than Procedure for workflow steps that require
attestation such as medication list review or reconciliation:
Example: A workflow step to review or to reconcile medication lists may be considered
a Task to perform the Procedure that includes reviewing the medication list with the
patient to assure it is correct and to educate the patient about proper medication usage.
Thus, a Task can reference the Task.focus as a procedure.

QDM 5.6 does not address Task; therefore, there is no direct mapping
from QDM Intervention or Procedure to the FHIR Task resource. The
mapping presented is from QDM to QI-Core referencing the FHIR Procedure
resource.

Consistent with the method for specifying QDM’s concept negation rationale, a [TaskRejected](StructureDefinition-qicore-taskrejected.html) is represented with the following content:
* [Task.status](StructureDefinition-qicore-taskrejected-definitions.html#Task.status) with valueset-task-status constrained to "rejected" (The potential performer who claimed ownership of the task has decided not to execute it prior to performing any action.)
* [Task.statusReason](StructureDefinition-qicore-taskrejected-definitions.html#Task.statusReason) binding to Negation Reason Codes (extensible)
* [Task.code](StructureDefinition-qicore-taskrejected-definitions.html#Task.code) (Codes to identify how the task manages fulfillment of activities - the specific choice depends on the measure context) the direct reference code, it needs a cardinality of 1..1 and binding to the code or value set (it would need a notDoneValueSet url: [notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to reference the value set not performed)
* [Task.focus](StructureDefinition-qicore-taskrejected-definitions.html#Task.focus) to reference the Resource (likely procedure) the task was acting on
* [Task.encounter](StructureDefinition-qicore-taskrejected-definitions.html#Task.encounter) (Healthcare event during which this task originated)
* [Task.for](StructureDefinition-qicore-taskrejected-definitions.html#Task.for) (Beneficiary of the Task) Reference (qicore-patient)
* [Task.executionPeriod](StructureDefinition-qicore-taskrejected-definitions.html#Task.executionPeriod) for the period/dateTime - the timing the task was rejected and the reason.

#### Procedure Priority

Procedure: *priority* has the following definition:

*Priority indicates the urgency of the procedure or the encounter
referenced. In \[electronic clinical quality measures\] (eCQMs) the
priority attribute will help specify elective from urgent encounters
(e.g., hospital admissions) or procedures. Priority is a codeable concept
(i.e., may use a direct reference code or a value set). For example,
priority is used to express an elective procedure or encounter from an
emergency procedure or encounter.*


As noted in the QDM to QI-Core Mapping for Encounter-Related Diagnoses
and Procedures, a specific measure may have interest in evaluating care
provided for elective procedures (e.g., hip surgery due to
osteoarthritis) while excluding emergency, non-planned procedures (e.g.,
hip surgery due to acute fracture). The procedure code does not
necessarily allow differentiation of the two concepts. A
[ServiceRequest.priority](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.priority) does have the ability to differentiate the
urgency with which the *request* (or order) should be fulfilled.
However, there is no current usage in existing measures and the ServiceRequest.priority
element is not included in the ServiceRequest Key Element Table. There is no
element within the FHIR Procedure resource to address the issue. Based on lack
of a current use case QI-Core has not added an extension to address Procedure.priority
and, as a result, there is no direct mapping from the QDM Procedure priority attribute to QI-Core.

#### Procedure, Performed


| **QDM Context**         | **QI-Core STU7**                                            | **Comments**                   |
| ----------------------- | ----------------------------------------------------------- | ------------------------------ |
| **Procedure, Performed**| [Procedure](StructureDefinition-qicore-procedure.html)                                   |                                  |
| **QDM Attributes**  |                                                                                              |                                  |
| status              | [Procedure.status](StructureDefinition-qicore-procedure-definitions.html#Procedure.status)   | While QDM does not have an attribute comparable to status, as a conceptual model, _status_ is implied by the QDM datatype name “Procedure, Performed”. Constrain to “completed”  |
| code                | [Procedure.code](StructureDefinition-qicore-procedure-definitions.html#Procedure.code)       |  Identification of the procedure. Extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)  |
| id                  | [Procedure.id](StructureDefinition-qicore-procedure-definitions.html#Procedure.id)           |                                  |
| relatedTo           | [Procedure.basedOn](StructureDefinition-qicore-procedure-definitions.html#Procedure.basedOn) | A reference to a resource that contains details of the request for this procedure. There has not been a use case for this element in existing measures; therefore, it is not included in the QI-Core profile Key Elements Table. |
| method              | N/A           | Procedure.method does not exist in FHIR. Rather than create an extension, QI-Core’s approach is to assume the Procedure.code includes reference to the method, therefore, this element does not exist in the QI-Core profile   |
| rank                | [Claim.procedure.sequence](StructureDefinition-qicore-claim-definitions.html#Claim.procedure.sequence)) | Used to identify a principal procedure in the context of an encounter. See discussion in the QDM “Encounter, Performed” section indicating the rationale for using the Claim profile to identify principal or primary procedures and conditions. |
| priority            | N/A           |   This QDM attribute is intended to reference elective from non-elective procedures. See discussion regarding “Encounter, Order” priority which was created to differentiate elective encounters from non-elective encounters. Similar to the encounter discussion, a given procedure is not inherently elective or non-elective, the urgency is based on a patient’s status and other factors. Information about urgency, elective, non-elective may be found a scheduling or appointment application which may generate a tag for a procedure in the clinical record. This item is not present in the FHIR Procedure resource. Measure developers should work with clinical sites to determine the most effective method for identifying procedure priority.  |
| anatomicalLocationSite  | [Procedure.bodySite](StructureDefinition-qicore-procedure-definitions.html#Procedure.bodySite)  |    Target body sites with preferred binding to [SNOMEDCT Body Structures](http://hl7.org/fhir/R4/valueset-body-site.html). Existing measures have not provided a use case for this element. Therefore, the element does not appear in the QI-Core profile Key Elements Table.    |
| reason                  | [Procedure.reasonCode](StructureDefinition-qicore-procedure-definitions.html#Procedure.reasonCode)   |  Code reason procedure is performed. Preferred binding to [Procedure Reason Codes](http://hl7.org/fhir/R4/valueset-procedure-reason.html) |
| result                  | [Simple Observation](StructureDefinition-qicore-simple-observation.html) or [Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) that includes the element [SimpleObservation.partOf](StructureDefinition-qicore-simple-observation-definitions.html#Observation.partOf) to reference the procedure to which it applies.  |  [Procedure.report](StructureDefinition-qicore-procedure-definitions.html#Procedure.report) references [DiagnosticReport-note](StructureDefinition-qicore-diagnosticreport-note.html), DocumentReference, Composition (histology result, pathology report, surgical report, etc.); the latter two are not QI-Core resources. However, based on feedback suggested that a procedure result might be better identified as  [Simple Observation](StructureDefinition-qicore-simple-observation.html) or [Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) resources referencing the [SimpleObservation.partOf](StructureDefinition-qicore-simple-observation-definitions.html#Observation.partOf) or [ObservationClinicalResult.partOf](StructureDefinition-qicore-observation-clinical-result-definitions.html#Observation.partOf) element to reference the procedure to which it applies.  |
| Negation Rationale      | See Below |
| Relevant dateTime       | [Procedure.performed\[x\] dateTime](StructureDefinition-qicore-procedure-definitions.html#Procedure.performed[x]) | When the procedure was performed (as a single point in time).  |
| Relevant Period         | [Procedure.performed\[x\] Period](StructureDefinition-qicore-procedure-definitions.html#Procedure.performed[x])   | When the procedure was performed (over a period of time).  |
| Incision dateTime       | [Procedure.extension:incisionDateTime](StructureDefinition-qicore-procedure-definitions.html#Procedure.extension) | The first incision time. Existing measures do not use this element; therefore, it is not included in the QI-Core profile Key Elements Table.  |
| Author dateTime         | [Procedure.extension:recorded](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.extension:recorded)   | When the procedure was first captured in the subject’s record. This element is useful for historical procedures and for the QDM negation rationale concept.  |
|                         | [Procedure.usedReference](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.usedReference) <br> [Procedure.usedCode](StructureDefinition-qicore-procedure-definitions.html#Procedure.usedCode)| These elements help to add reference to a device, medication, or substance used as part of a procedure the QI-Core element to address the device is used by the procedure. However, feedback has suggested that implementers prefer a direct, precoordinated code for the procedure that also indicates the type of device used rather than having to connect a specific item/device used to perform the procedure. Thus, while modeling allows usedCode or usedReference, feasibility is very limited. For that reason, these elements are not included in the QI-Core profile Key Elements Table.  |
| Components              | N/A                            | Procedure does not include component.  |
| Component code          | N/A                            | N/A                                                                                                       |
| Component result        | N/A                            | N/A                                                                                                       |
| Performer               | [Procedure.performer.actor](StructureDefinition-qicore-procedure-definitions.html#Procedure.performer.actor)      | Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM requester attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Procedure, Performed

Use [QICoreProcedureNotDone](StructureDefinition-qicore-procedurenotdone.html), which contains:
* [Procedure.status](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.status) - Fixed value: "not-done"
* [Procedure.statusReason](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.statusReason) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
* [Procedure.extension:recorded](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.extension:recorded) - dateTime when this was made available
* [Procedure.code.extension:notDoneValueSet](StructureDefinition-qicore-procedurenotdone-definitions.html#Procedure.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific Procedure that was not performed


#### Procedure, Order

| **QDM Context**      | **QI-Core STU7**    | **Comments**          |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
| **Procedure, Order** | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)        |                                                              |
|                      | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, _status_ is implied by the name “Procedure, Order” and “Procedure, Recommended” datatypes.   |
|                      | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate an order from a recommendation. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “order” (include children: original-order, reflex-order, filler-order, instance-order) |
| **QDM Attributes**  |                                                       |                                                              |
| code                | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)  |   What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) |
| id                  | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)    |                       |
| reason              | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode) |  Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)  |
| authorDatetime      | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn) | When the request transitioned to being actionable.   |
| negationRationale   | See Below |
| requester           | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)    |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.    |
{: .grid}

##### Negation Rationale for Procedure, Order

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed


#### Procedure, Recommended

| **QDM Context**            | **QI-Core STU7**          | **Comments**                                                 |
| -------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Procedure, Recommended** | [ServiceRequest](StructureDefinition-qicore-servicerequest.html)   |                                                              |
|                            | [ServiceRequest.status](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.status)  | Constrain to active, completed. While QDM does not have an attribute comparable to status, as a conceptual model, _status_ is implied by the name “Procedure, Order” and “Procedure, Recommended” datatypes. |
|                            | [ServiceRequest.intent](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.intent)  | Required to differentiate a recommendation from an order. The intent value set allows such differentiation using “order” for orders and “plan” for recommendation. Constrain only to “plan    |
| **QDM Attributes** |                                       |                                                              |
| code               | [ServiceRequest.code](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.code)   |  What is requested, extensible binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) |
| id                 | [ServiceRequest.id](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.id)   |                              |
| reason             | [ServiceRequest.reasonCode](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.reasonCode)  |    Explanation/justification for procedure or service with extensible binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)   |
| authorDateTime     | [ServiceRequest.authoredOn](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.authoredOn)   |   When the request transitioned to being actionable.  |
| negationRationale  | See Below |
| requester          | [ServiceRequest.requester](StructureDefinition-qicore-servicerequest-definitions.html#ServiceRequest.requester)  |  Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _requester_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that requested the procedure or service. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.   |
{: .grid}

##### Negation Rationale for Procedure, Recommended

Use [QICoreServiceNotRequested](StructureDefinition-qicore-servicenotrequested.html) and reference the code element specified in the respective observation profile:

* [ServiceRequest.doNotPerform](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.doNotPerform) - Fixed value: "true"
* [ServiceRequest.status](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.status) - Fixed value: "completed"

<div class="new-content" markdown="1">

* [ServiceRequest.reasonCode](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.reasonCode) - Use value set [NegationReasonCodes](ValueSet-qicore-negation-reason.html)
</div>

* [ServiceRequest.authoredOn](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.authoredOn) - dateTime when this was made available
* [ServiceRequest.code.extension:notDoneValueSet](StructureDefinition-qicore-servicenotrequested-definitions.html#ServiceRequest.code.extension:notDoneValueSet) - Use [cqf-notDoneValueSet](http://hl7.org/fhir/StructureDefinition/cqf-notDoneValueSet) to indicate the specific ServiceRequest that was not performed




### Substance

#### Substance, Administered; Substance, Order; Substance Recommended

QDM defines Substance as a homogeneous material with a definite
composition that includes allergens, biological materials, chemicals,
foods, drugs and materials. QDM distinguishes between medications from
non-medication substances by separately listing medication datatypes.
Substance may or may not have a code or be classified by a code system
such as RxNorm. Examples of a substance may include environmental agents
(e.g., pollen, dust) and food (e.g., vitamins). Where a measure can use 
medication terminology (e.g., egg albumin) to represent QDM concept Substance,
measure developers should consider expressing intent using the Substance mappings listed in this QDM-to-QI-Core section.

Ideally, use of a substance-related resource should be driven by use
cases and examples. Two such use cases currently exist in the quality
measure community:

* Identifying blood products (a biological product in FHIR
resources) ordered or administered within specific time
relationships to other data elements – The FHIR Resource,
[BiologicallyDerivedProduct](http://hl7.org/fhir/biologicallyderivedproduct.html),
possibly using Procedure and ServiceRequest might have promise.
However, the resource is still in development. Therefore, until
further information is available, rather than expressing the QDM
*datatype* Substance, Administration to address administration of
blood transfusion, quality measure and clinical decision support
(CDS) authors should consider using the procedure resource with a
code representing transfusion.
*  Determining exclusive newborn feeding with human breast milk 
during the initial stay in the hospital after birth
– Currently, FHIR R4 includes a
[NutritionOrder](http://hl7.org/fhir/nutritionorder.html) resource
to reference a request for a specific diet, or supplements to a
diet. However, a resource for documenting administration of
nutrition-related substances is still in development. 
The focus of the FHIR R5 resource NutritionIntake is interoperable messaging between
nutrition applications and the EHR (i.e., not EHR to EHR nutrition information sharing).  Therefore, for
this use case a quality measure or a clinical decision support (CDS)
author could reference a NutritionOrder for an exclusive breast milk
diet for the infant; however, such an expression could not reference
clinical intake and output records to determine if anything other
than human breast milk was administered to the infant. 
Summarizing discussion among HL7 workgroups in late 2023, the QI-Core resource best suited
to retrieve information about enteral intake is Observation (i.e., QI-Core Observation in versions STU4.1.1 and STU5.0, and SimpleObservation in STU 6.0 & STU7.0). 
The following guidance may help measure developers trying to express retrieval of enteral intake data using SimpleObservation:  

    * SimpleObservation.code = with binding to a direct reference code or value set indicating observation of enteral intake
    * SimpleObservation.value with binding to a direct reference code or value set indicating the nutritional product of interest to the measure intent.  



NOTE – There is no specific QDM datatype to address the  [Nutrition Order](StructureDefinition-qicore-nutritionorder.html) QI-Core STU 6 profile. 
Since no current eCQM uses this profile, determination of key elements is challenging. The following table
may help measure developers determine what to use for potential use cases:


| **Nutrition Order**                                    | **QI-Core STU7**                 | **Comments**                                          |
| -------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| **Substance, Order/Recommended - For Diet Orders** | [NutritionOrder](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder)  | Limited to orders for diets or diets with supplements |
| Substance Order/Recommended Activity               | [NutritionOrder.status](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.status) | Determination of which order status is appropriate to retrieve, specifically  constrain to active, completed. Profile has required binding to [RequestStatus](http://hl7.org/fhir/R4/valueset-request-status.html).  |
| Substance, Order                                   | [NutritionOrder.intent](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.intent) | Enables differentiation of order versus plan. Required binding to [RequestIntent](http://hl7.org/fhir/R4/valueset-request-intent.html). Constrain to “order” and child concepts   |
| Substance, Recommended                             | [NutritionOrder.intent](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.intent) | Enables differentiation of order versus plan. Required binding to [RequestIntent](http://hl7.org/fhir/R4/valueset-request-intent.html). Constrain to “plan” |
| **QDM Attributes**   |                       |                                                       |
| ORAL DIET                         | [NutritionOrder.oralDiet](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.oralDiet) |  Oral Diet Components  |
| code (to represent a diet order)  | [NutritionOrder.oralDiet.type](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.oralDiet.type)  |   Type of oral diet or diet restrictions that describe what can be consumed orally   |
| ENTERAL FORMULA                   | [NutrientOrder.enteralFormula](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.enteralFormula)  |  Enteral Formula Components  |
| code (to represent a enteral formula) | [NutrientOrder.eternalFormula.baseFormulaType](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.enteralFormula.baseFormulaType)   |    Type of enteral or infant formula    |                                                    
| negationRationale           | N/A           |                                                       |
| authorDatetime              | [NutritionOrder.dateTime](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.dateTime)  | Date and time nutrition order was requested  |
| relevantPeriod              | [NutritionOrder.enteralFormula.administration.schedule](StructureDefinition-qicore-nutritionorder-definitions.html#NutritionOrder.enteralFormula.administration.schedule)  |  Likely not relevant for measure use cases. Not present in QI-Core Key Elements Table.   |
{: .grid}



### Symptom

QDM defines Symptom as an indication that a person has a condition or
disease. Some examples include headache, fever, fatigue, nausea,
vomiting, and pain. Symptoms are subjective manifestations of the
disease perceived by the patient. As an example to differentiate symptom
from finding, the patient’s subjective symptom of fever is distinguished
from the temperature (a finding). For a finding, there is either a
source of a temperature-measuring device together with a recorder
of the device (electronically) or an individual (healthcare provider,
patient, etc.).

Note: Definitions regarding symptom on the FHIR condition resource
Boundaries and Relationships (Section 9.2.2:
<http://hl7.org/fhir/condition.html>):

* \[The Condition\] resource is not typically used to record
information about subjective and objective information that might
lead to the recording of a Condition resource. Such signs and
symptoms are typically captured using
the [Observation](http://hl7.org/fhir/R4/observation.html) resource;
although in some cases a persistent symptom, e.g. fever, headache
may be captured as a condition before a definitive diagnosis can be
discerned by a clinician. By contrast, headache may be captured as
an Observation when it contributes to the establishment of a
meningitis Condition.

* Use the [Observation](http://hl7.org/fhir/R4/observation.html) resource
when a symptom is resolved without long term management, tracking,
or when a symptom contributes to the establishment of a condition.

* Use Condition when a symptom requires long term management,
tracking, or is used as a proxy for a diagnosis or problem that is
not yet determined.

Based on the FHIR referenced provided above, the QDM *datatype* Symptom
maps to the FHIR Observation resource.

| **QDM Context**    | **QI-Core STU7**         | **Comments**                                                                     |
| ------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Symptom**        | [Simple Observation](StructureDefinition-qicore-simple-observation.html)     |                  |
|                    | [Observation.status](StructureDefinition-qicore-simple-observation-definitions.html#Observation.status)  | Constrain status to - preliminary, final, amended, corrected. While QDM does not have an attribute comparable to status, as a conceptual model, status is implied by the name “Symptom” datatype.  |
|                    | [Observation.category](StructureDefinition-qicore-simple-observation-definitions.html#Observation.category)  | Category helps to narrow the request to the class of observation required to meet measure intent. Each QI-Core or US Core profile has a specific binding to concepts appropriate to the respective profile. Note that QDM does not have an attribute comparable to category, the element may be helpful in expressing a quality measure.   |
| **QDM Attributes** |              |                                                                                  |
| code               | [Observation.value\[x\]](StructureDefinition-qicore-simple-observation-definitions.html#Observation.value[x])   | Note specific bindings based on the QI-Core or US Core profile used.  |
| id                 | [Observation.id](StructureDefinition-qicore-simple-observation-definitions.html#Observation.id)     |                                               |
| severity           | [Observation.interpretation](StructureDefinition-qicore-simple-observation-definitions.html#Observation.interpretation) | Explanation of significance of the observation result (e.g., critical, high, low). |
| prevalencePeriod   | [Observation.effective\[x\]](StructureDefinition-qicore-simple-observation-definitions.html#Observation.effective[x])   | Time observation occurred if a point in time, or a period. Most likely Symptom will be recorded as a point in time.    |
| recorder           | [Observation.performer](StructureDefinition-qicore-simple-observation-definitions.html#Observation.performer)    |   Although QDM includes this attribute it has not been used in existing measures and a clear use case has not been established. The original purpose for the QDM _performer_ attribute was to designate the individual/organization responsible for reporting the measure results is the same individual/organization that performed the observation or task. However, clinical software generally tracks the individual user entering data and linking that individual to a clinical role, a specialty, or an organization is not easily accomplished.     |
{: .grid}




---

// File: input/pages/qi-elements.md

<div class="new-content" markdown="1">

### [QICore AdverseEvent](StructureDefinition-qicore-adverseevent.html) ###
**QI Elements:**
* actuality: (QI) actual \| potential
* category: (QI) product-problem \| product-quality \| product-use-error \| wrong-dose \| incorrect-prescribing-information \| wrong-technique \| wrong-route-of-administration \| wrong-rate \| wrong-duration \| wrong-time \| expired-drug \| medical-device-use-error \| problem-different-manufacturer \| unsafe-physical-environment
* event: (QI) Type of the event itself in relation to the subject
* subject: (QI) Subject impacted by event
* encounter: (QI) Encounter created as part of
* recordedDate: (QI) When the event was recorded
* resultingCondition: (QI) Effect on the subject due to this event
* suspectEntity.instance: (QI) Refers to the specific entity that caused the adverse event

**Primary code path:** event
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore AllergyIntolerance](StructureDefinition-qicore-allergyintolerance.html) ###
**Must Have:**
* code: (QI) Code that identifies the allergy or intolerance
* patient: (QI) Who the sensitivity is for
* reaction.manifestation: Clinical symptoms/signs associated with the Event


**QI Elements:**
* clinicalStatus: (QI) active \| inactive \| resolved
* type: (QI) allergy \| intolerance - Underlying mechanism (if known)
* category: (QI) food \| medication \| environment \| biologic
* criticality: (QI) low \| high \| unable-to-assess
* onset[x]: (QI) When allergy or intolerance was identified
* recordedDate: (QI) Date first version of the resource instance was recorded
* lastOccurrence: (QI) Date(/time) of last known occurrence of a reaction
* reaction: (QI) Adverse Reaction Events linked to exposure to substance
* reaction.severity: (QI) mild \| moderate \| severe (of event as a whole)

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore BodyStructure](StructureDefinition-qicore-bodystructure.html) ###
**QI Elements:**
* active: (QI) Whether this record is in active use
* location: (QI) Body site
* locationQualifier: (QI) Body site modifier
* patient: (QI) Who this is about

**Primary code path:** location
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore CarePlan](StructureDefinition-qicore-careplan.html) ###
**Must Have:**
* text.status: generated \| additional
* text.div: Limited xhtml content
* status: draft \| active \| on-hold \| revoked \| completed \| entered-in-error \| unknown
* intent: proposal \| plan \| order \| option
* category: (QI) Type of plan
* category: (QI) Type of plan
* subject: (QI) Who the care plan is for.

**Primary code path:** category
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore CareTeam](StructureDefinition-qicore-careteam.html) ###
**Must Have:**
* subject: (QI) Who the care team is for.
* participant: Members of the team
* participant.role: Type of involvement
* participant.member: (QI) Who is involved

**Primary code path:** category
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Claim](StructureDefinition-qicore-claim.html) ###
**QI Elements:**
* Claim: Claim, Pre-determination or Pre-authorization
* patient: (QI) The recipient of the products and services
* billablePeriod: (QI) Relevant time frame for the claim
* created: (QI) Resource creation date
* provider: (QI) Party responsible for the claim
* prescription: (QI) Prescription authorizing services and products
* diagnosis: (QI) Pertinent diagnosis information
* diagnosis.sequence: (QI) Diagnosis instance identifier
* diagnosis.diagnosis[x]: (QI) Nature of illness or problem
* diagnosis.type: (QI) Timing or nature of the diagnosis
* diagnosis.onAdmission: (QI) Present on admission
* procedure: (QI) Clinical procedures performed
* procedure.sequence: (QI) Procedure instance identifier
* procedure.type: (QI) Category of Procedure
* procedure.procedure[x]: (QI) Specific clinical procedure
* item.encounter: (QI) Encounters related to this billed item

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore ClaimResponse](StructureDefinition-qicore-claimresponse.html) ###
**QI Elements:**
* status: (QI) active \| cancelled \| draft \| entered-in-error
* type: (QI) More granular claim type
* use: (QI) claim \| preauthorization \| predetermination
* patient: (QI) The recipient of the products and services
* created: (QI) Response creation date
* insurer: (QI) Party responsible for reimbursement
* requestor: (QI) Party responsible for the claim
* request: (QI) Id of resource triggering adjudication
* item: (QI) Adjudication for claim line items
* item.adjudication: (QI) Adjudication details
* item.adjudication.category: (QI) This code is fixed to 'submitted' to indicate that the adjudication result is on what was submitted.
* item.adjudication.amount: (QI) Monetary amount
* item.detail.detailSequence: (QI) Claim detail instance identifier

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Communication Not Done](StructureDefinition-qicore-communicationnotdone.html) ###
**QI Elements:**
* event-recorded: (QI) Captures the recorded date of the communication
* status: (QI) preparation \| in-progress \| not-done \| on-hold \| stopped \| completed \| entered-in-error \| unknown
* statusReason: (QI) Reason for current status
* subject: (QI) Focus of message
* topic: (QI) Description of the purpose/content
* notDoneValueSet: (QI) Url of a value set of activities not requested or performed

**Primary code path:** reasonCode
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Communication](StructureDefinition-qicore-communication.html) ###
**QI Elements:**
* status: (QI) preparation \| in-progress \| on-hold \| stopped \| completed \| entered-in-error \| unknown
* subject: (QI) Focus of message
* topic: (QI) Description of the purpose/content
* sent: (QI) When sent
* received: (QI) When received
* recipient: (QI) Message recipient
* sender: (QI) Message sender

**Primary code path:** reasonCode
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore CommunicationRequest](StructureDefinition-qicore-communicationrequest.html) ###
**QI Elements:**
* status:  draft \| active \| on-hold \| revoked \| completed \| entered-in-error \| unknown
* category:  Message category
* doNotPerform:  True if request is prohibiting action
* subject:  Focus of message
* encounter:  Encounter created as part of
* recipient:  Message recipient
* sender:  Message sender

**Primary code path:** category
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Condition Encounter Diagnosis](StructureDefinition-qicore-condition-encounter-diagnosis.html) ###
**Must Have:**
* category: category codes
* category: encounter-diagnosis
* code: Identification of the condition, problem or diagnosis
* subject: (QI) Who has the condition?


**QI Elements:**
* encounter: (QI) Encounter created as part of
* onset[x]: (QI) Estimated or actual date, date-time, or age
* abatement[x]: (QI) When in resolution/remission

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Condition Problems Health Concerns](StructureDefinition-qicore-condition-problems-health-concerns.html) ###
**Must Have:**
* category: category codes
* category: problem-list-item \| health-concern
* code: (QI) Identification of the condition, problem or diagnosis
* subject: (QI) Who has the condition?


**QI Elements:**
* clinicalStatus: (QI) active \| recurrence \| relapse \| inactive \| remission \| resolved
* verificationStatus: (QI) unconfirmed \| provisional \| differential \| confirmed \| refuted \| entered-in-error
* severity: (QI) Subjective severity of condition
* onset[x]: (QI) Estimated or actual date, date-time, or age
* abatement[x]: (QI) When in resolution/remission
* recordedDate: (QI) Date record was first recorded

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Coverage](StructureDefinition-qicore-coverage.html) ###
**Must Have:**
* identifier.type: Member Number identifier type
* status: active \| cancelled \| draft \| entered-in-error
* beneficiary: (QI) Plan beneficiary
* relationship: Beneficiary relationship to the subscriber
* payor: (QI) Issuer of the policy
* class.value: Group Number
* class.value: Plan Number


**QI Elements:**
* type: (QI) Coverage category such as medical or accident
* policyHolder:  Owner of the policy
* subscriberId: (QI) ID assigned to the subscriber
* period: (QI) Coverage start and end dates

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Device Not Requested](StructureDefinition-qicore-devicenotrequested.html) ###
**QI Elements:**
* modifierExtension: (QI) Extension
* modifierExtension.value[x]: (QI) Value of extension
* status: (QI) draft \| active \| on-hold \| revoked \| completed \| entered-in-error \| unknown
* intent: (QI) proposal \| plan \| directive \| order \| original-order \| reflex-order \| filler-order \| instance-order \| option
* code[x]: (QI) Device requested
* doNotPerformValueSet: (QI) What was not done
* subject: (QI) Focus of request
* authoredOn: (QI) When recorded
* reasonCode: (QI) Explanation/Justification for procedure or service

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Device](StructureDefinition-qicore-device.html) ###
**QI Elements:**
* patient: (QI) Patient to whom Device is affixed

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore DeviceRequest](StructureDefinition-qicore-devicerequest.html) ###
**QI Elements:**
* modifierExtension: (QI) Extension
* modifierExtension.value[x]: (QI) Value of extension
* identifier: (QI) External Request identifier
* status: (QI) draft \| active \| on-hold \| revoked \| completed \| entered-in-error \| unknown
* intent: (QI) proposal \| plan \| directive \| order \| original-order \| reflex-order \| filler-order \| instance-order \| option
* code[x]: (QI) Device requested
* subject: (QI) Focus of request
* authoredOn: (QI) When recorded

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore DeviceUseStatement](StructureDefinition-qicore-deviceusestatement.html) ###
**QI Elements:**
* status: (QI) active \| completed \| entered-in-error +
* subject: (QI) Patient using device
* timing[x]: (QI) How often the device was used
* recordedOn: (QI) When statement was recorded
* device: (QI) Reference to device used
* bodySite: (QI) Target body site

**Primary code path:** device.type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore DiagnosticReport Profile for Laboratory Results Reporting](StructureDefinition-qicore-diagnosticreport-lab.html) ###
**Must Have:**
* status: registered \| partial \| preliminary \| final +
* category: (QI) Service category
* category: (QI) Service category
* code: US Core Laboratory Report Order Code
* subject: (QI) The subject of the report - usually, but not always, the patient


**QI Elements:**
* basedOn: What was requested
* effective[x]: (QI) Diagnostically relevant time (typically the time of specimen collection)
* performer: (QI) Responsible Diagnostic Service
* result: (QI) Observations

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore DiagnosticReport Profile for Report and Note Exchange](StructureDefinition-qicore-diagnosticreport-note.html) ###
**Must Have:**
* status: registered \| partial \| preliminary \| final +
* category: (QI) Service Category
* code: (QI) QI-Core Report Code
* subject: (QI) The subject of the report - usually, but not always, the patient
* media.link: Reference to the image source


**QI Elements:**
* encounter: (QI) Health care event when test ordered
* effective[x]: (QI) Diagnostically relevant time (typically the time of the procedure)
* issued: (QI) DateTime this version was made
* performer: (QI) Responsible Diagnostic Service
* result: (QI) Observations
* imagingStudy:  Reference to full details of imaging associated with the diagnostic report
* media: (QI) Key images associated with this report

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Encounter](StructureDefinition-qicore-encounter.html) ###
**Must Have:**
* identifier.system: The namespace for the identifier value
* identifier.value: The value that is unique
* status: (QI) planned \| arrived \| triaged \| in-progress \| onleave \| finished \| cancelled +
* class: Classification of patient encounter
* type: (QI) Specific type of encounter
* subject: (QI) The patient or group present at the encounter
* location.location: (QI) Location the encounter takes place


**QI Elements:**
* participant: (QI) List of participants involved in the encounter
* participant.individual: (QI) Persons involved in the encounter other than the patient
* period: (QI) The start and end time of the encounter
* reasonCode: (QI) Coded reason the encounter takes place
* reasonReference: (QI) Reason the encounter takes place (reference)
* hospitalization: (QI) Details about the admission to a healthcare service
* hospitalization.dischargeDisposition: (QI) Category or kind of location after discharge
* location: (QI) List of locations where the patient has been
* location.period: (QI) Time period during which the patient was present at the location
* serviceProvider: (QI) The organization (facility) responsible for this encounter

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore FamilyMemberHistory](StructureDefinition-qicore-familymemberhistory.html) ###
**QI Elements:**
* patient: (QI) Patient history is about
* date: (QI) When history was recorded or last updated
* relationship: (QI) Relationship to the subject
* age[x]: (QI) (approximate) age
* deceased[x]: (QI) Dead? How old/when?
* condition.code: (QI) Condition suffered by relation

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Flag](StructureDefinition-qicore-flag.html) ###
**QI Elements:**
* status: (QI) active \| inactive \| entered-in-error
* category: (QI) Clinical, administrative, etc.
* code: (QI) Coded or textual message to display to user
* subject: (QI) Who/What is flag about?
* period: (QI) Time period when flag is active

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Goal](StructureDefinition-qicore-goal.html) ###
**Must Have:**
* lifecycleStatus: proposed \| planned \| accepted \| active \| on-hold \| completed \| cancelled \| entered-in-error \| rejected
* description: Code or text describing goal
* subject: (QI) Who this goal is intended for


**QI Elements:**
* start[x]: (QI) When goal pursuit begins
* target: (QI) Target outcome for the goal

**Primary code path:** category
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore ImagingStudy](StructureDefinition-qicore-imagingstudy.html) ###
**QI Elements:**
* subject: (QI) Who or what is the subject of the study
* encounter: Encounter with which this imaging study is associated
* started: (QI) When the study was started
* basedOn: (QI) Request fulfilled
* procedureReference: (QI) The performed Procedure reference

**Primary code path:** procedure
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Immunization Not Done](StructureDefinition-qicore-immunizationnotdone.html) ###
**Must Have:**
* status: (QI) completed \| entered-in-error \| not-done
* statusReason: (QI) Reason not done
* vaccineCode: Vaccine Product Type (bind to CVX)
* patient: (QI) Who was immunized
* occurrence[x]: Vaccine administration date


**QI Elements:**
* notDoneValueSet: (QI) What wasn't administered
* recorded: (QI) Documented date Immunization did not occur.

**Primary code path:** vaccineCode
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Immunization](StructureDefinition-qicore-immunization.html) ###
**Must Have:**
* status: (QI) completed \| entered-in-error
* vaccineCode: (QI) Vaccine Product Type (bind to CVX)
* patient: (QI) Who was immunized
* occurrence[x]: (QI) Vaccine administration date


**QI Elements:**
* statusReason: (QI) Reason not done
* recorded: (QI) When the immunization was first captured in the subject's record

**Primary code path:** vaccineCode
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore ImmunizationEvaluation](StructureDefinition-qicore-immunizationevaluation.html) ###
**QI Elements:**
* identifier: (QI) Business identifier
* status: (QI) completed \| entered-in-error
* patient: (QI) Who this evaluation is for
* date: (QI) Date evaluation was performed
* targetDisease: (QI) Evaluation target disease
* immunizationEvent: (QI) Immunization being evaluated
* doseStatus: (QI) Status of the dose relative to published recommendations
* doseStatusReason: (QI) Reason for the dose status

**Primary code path:** targetDisease
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore ImmunizationRecommendation](StructureDefinition-qicore-immunizationrecommendation.html) ###
**QI Elements:**
* patient: (QI) Who this profile is for
* recommendation: (QI) Vaccine administration recommendations
* recommendation.vaccineCode: (QI) Vaccine or vaccine group recommendation applies to
* recommendation.doseNumber[x]: (QI) Recommended dose number within series

**Primary code path:** recommendation.vaccineCode
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Laboratory Result Observation](StructureDefinition-qicore-observation-lab.html) ###
**Must Have:**
* status: (QI) registered \| prliminary \| final \| amended \| corrected \| entered-in-error \| unknown
* category: (QI) Classification of type of observation
* category: (QI) Classification of type of observation
* code: (QI) Laboratory Test Name
* subject: (QI) Who and/or what the observation is about


**QI Elements:**
* encounter: (QI) Encounter associated with Observation
* effective[x]: (QI) Clinically relevant time/time-period for observation
* issued: (QI) Date/Time this version was made available
* value[x]: (QI) Result Value
* interpretation: (QI) High, low, normal, etc.

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Location](StructureDefinition-qicore-location.html) ###
**Must Have:**
* name: Name by which a facility or location is known.


**QI Elements:**
* type: (QI) Category of service or resource available in a location.
* telecom: (QI) Contact details of the location
* managingOrganization: (QI) Organization responsible for provisioning and upkeep

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Medication Not Requested](StructureDefinition-qicore-medicationnotrequested.html) ###
**Must Have:**
* status: (QI) active \| on-hold \| cancelled \| completed \| entered-in-error \| stopped \| draft \| unknown
* intent: (QI) proposal \| plan \| order \| original-order \| reflex-order \| filler-order \| instance-order \| option
* medication[x]: (QI) Medication to be taken
* subject: (QI) Who or group medication request is for
* authoredOn: (QI) When request was initially authored


**QI Elements:**
* doNotPerform: (QI) True if medication was not requested
* reported[x]: (QI) Reported rather than primary record
* encounter: (QI) Encounter created as part of encounter/admission/stay
* requester: (QI) Who/What requested the Request
* reasonCode: (QI) Reason or indication for ordering or not ordering the medication
* reasonReference: (QI) US Core Condition or Observation that supports the prescription

**Primary code path:** medication
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Medication](StructureDefinition-qicore-medication.html) ###
**Must Have:**
* code: Codes that identify this medication

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore MedicationAdministration Not Done](StructureDefinition-qicore-medicationadministrationnotdone.html) ###
**QI Elements:**
* implicitRules: (QI) A set of rules under which this content was created
* recorded: (QI) Recorded
* status: (QI) in-progress \| not-done \| on-hold \| completed \| entered-in-error \| stopped \| unknown
* statusReason: (QI) Reason administration not performed
* medication[x]: (QI) What was administered
* notDoneValueSet: (QI) Url of a value set of activities not requested or performed
* subject: (QI) Who received medication
* context: (QI) Encounter or Episode of Care administered as part of
* effective[x]: (QI) Start and end time of administration
* request: (QI) Request administration performed against

**Primary code path:** medication
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore MedicationAdministration](StructureDefinition-qicore-medicationadministration.html) ###
**QI Elements:**
* recorded: (QI) Recorded
* status: (QI) in-progress \| on-hold \| completed \| entered-in-error \| stopped \| unknown
* medication[x]: (QI) What was administered
* subject: (QI) Who received medication
* context: (QI) Encounter or Episode of Care administered as part of
* effective[x]: (QI) Start and end time of administration
* request: (QI) Request administration performed against
* dosage: (QI) Details of how medication was taken
* dosage.route: (QI) Path of substance into body
* dosage.dose: (QI) Amount of medication per dose

**Primary code path:** medication
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore MedicationDispense Declined](StructureDefinition-qicore-medicationdispensedeclined.html) ###
**Must Have:**
* status: (QI) preparation \| in-progress \| cancelled \| on-hold \| completed \| entered-in-error \| stopped \| declined \| unknown
* medication[x]: (QI) What medication was supplied
* subject: (QI) Who the dispense is for
* performer.actor: Individual who was performing


**QI Elements:**
* recorded: (QI) Extension
* statusReason[x]: (QI) Why a dispense was not performed
* notDoneValueSet: (QI) Url of a value set of activities not requested or performed
* dosageInstruction.text: (QI) Free text dosage instructions e.g. SIG
* dosageInstruction.timing: (QI) When medication should be administered
* dosageInstruction.doseAndRate: (QI) Amount of medication administered
* dosageInstruction.doseAndRate.type: (QI) The kind of dose or rate specified
* dosageInstruction.doseAndRate.dose[x]: (QI) Amount of medication per dose

**Primary code path:** medication
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore MedicationDispense](StructureDefinition-qicore-medicationdispense.html) ###
**Must Have:**
* status: (QI) preparation​ \| in-progress​ \| cancelled​ \| on-hold​ \| completed​ \| entered-in-error​ \| stopped​ \| unknown
* medication[x]: (QI) What medication was supplied
* subject: (QI) Who the dispense is for
* performer.actor: Individual who was performing


**QI Elements:**
* recorded: (QI) Extension
* authorizingPrescription: (QI) Medication order that authorizes the dispense
* type: (QI) Trial fill, partial fill, emergency fill, etc.
* quantity: (QI) Amount dispensed
* daysSupply: (QI) Amount of medication expressed as a timing amount
* whenPrepared: (QI) When product was packaged and reviewed
* whenHandedOver: (QI) When product was given out or mailed
* dosageInstruction: (QI) How the medication is to be used by the patient or administered by the caregiver
* dosageInstruction.text: (QI) Free text dosage instructions e.g. SIG
* dosageInstruction.timing: (QI) When medication should be administered
* dosageInstruction.doseAndRate: (QI) Amount of medication administered
* dosageInstruction.doseAndRate.dose[x]: (QI) Amount of medication per dose

**Primary code path:** medication
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore MedicationRequest](StructureDefinition-qicore-medicationrequest.html) ###
**Must Have:**
* status: (QI) active \| on-hold \| cancelled \| completed \| entered-in-error \| stopped \| draft \| unknown
* intent: (QI) proposal \| plan \| order \| original-order \| reflex-order \| filler-order \| instance-order \| option
* medication[x]: (QI) Medication to be taken
* subject: (QI) Who or group medication request is for


**QI Elements:**
* doNotPerform: (QI) True if medication was not requested
* reported[x]: (QI) Reported rather than primary record
* encounter: (QI) Encounter created as part of encounter/admission/stay
* authoredOn: (QI) When request was initially authored
* requester: (QI) Who/What requested the Request
* reasonCode: (QI) Reason or indication for ordering or not ordering the medication
* reasonReference: (QI) QI-Core Condition or Observation that supports the prescription
* dosageInstruction: (QI) How medication should be taken
* dosageInstruction.timing: (QI) When medication should be administered
* dosageInstruction.timing.repeat: (QI) When the event is to occur
* dosageInstruction.timing.repeat.bounds[x]: (QI) Length/Range of lengths, or (Start and/or end) limits
* dosageInstruction.timing.repeat.frequency: (QI) Event occurs frequency times per period
* dosageInstruction.timing.repeat.frequencyMax: (QI) Event occurs frequencyMax times per period
* dosageInstruction.timing.repeat.period: (QI) Event occurs frequency times per period
* dosageInstruction.timing.repeat.periodMax: (QI) Upper limit of period (3-4 hours)
* dosageInstruction.timing.repeat.periodUnit: (QI) s \| min \| h \| d \| wk \| mo \| a - unit of time (UCUM)
* dosageInstruction.asNeeded[x]: (QI) Take "as needed" (for x)
* dosageInstruction.doseAndRate: (QI) Amount of medication administered
* dosageInstruction.doseAndRate.dose[x]: (QI) Amount of medication per dose
* dispenseRequest: (QI) Medication supply authorization
* dispenseRequest.dispenseInterval: (QI) Minimum period of time between dispenses
* dispenseRequest.validityPeriod: (QI) Time period supply is authorized for
* dispenseRequest.numberOfRepeatsAllowed: (QI) Number of refills authorized
* dispenseRequest.quantity: (QI) Amount of medication to supply per dispense
* dispenseRequest.expectedSupplyDuration: (QI) Number of days supply per dispense

**Primary code path:** medication
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore MedicationStatement](StructureDefinition-qicore-medicationstatement.html) ###
**QI Elements:**
* status: (QI) active \| completed \| entered-in-error \| intended \| stopped \| on-hold \| unknown \| not-taken
* medication[x]: (QI) What medication was taken
* subject: (QI) Who is/was taking the medication
* effective[x]: (QI) The date/time or interval when the medication is/was/will be taken
* dateAsserted: (QI) When the statement was asserted?
* informationSource: (QI) Person or organization that provided the information about the taking of this medication
* derivedFrom: (QI) Additional supporting information
* dosage.timing: (QI) When medication should be administered
* dosage.route: (QI) How drug should enter body
* dosage.doseAndRate: (QI) Amount of medication administered
* dosage.doseAndRate.dose[x]: (QI) Amount of medication per dose

**Primary code path:** medication
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore NonPatient Observation](StructureDefinition-qicore-nonpatient-observation.html) ###
**QI Elements:**
* status: (QI) registered \| prliminary \| final \| amended \| corrected \| entered-in-error \| unknown
* category: (QI) Classification of type of observation
* code: (QI) Type of observation (code / type)
* subject: (QI) The device/location/implantable device the observation is about
* effective[x]: (QI) Clinically relevant time/time-period for observation
* performer: (QI) Who is responsible for the observation
* value[x]: (QI) Actual result
* value[x]: (QI) actual \| potential
* interpretation: (QI) High, low, normal, etc.
* derivedFrom: (QI) QI Core Profiles or other resource the observation is made from

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore NutritionOrder](StructureDefinition-qicore-nutritionorder.html) ###
**QI Elements:**
* patient: (QI) The person who requires the diet, formula or nutritional supplement



<br>
<br>

### [QICore Observation Cancelled](StructureDefinition-qicore-observationcancelled.html) ###
**QI Elements:**
* event-statusReason: (QI) Event Status Reason
* status: (QI) registered \| preliminary \| final \| amended +
* category: (QI) Classification of type of observation
* code: (QI) Type of observation (code / type)
* notDoneValueSet: (QI) What was not done
* subject: (QI) Who and/or what the observation is about
* effective[x]: (QI) Clinically relevant time/time-period for observation
* issued: (QI) Date/Time this version was made available
* value[x]: (QI) Actual result
* value[x]: (QI) Actual result
* interpretation: (QI) High, low, normal, etc.

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Observation Clinical Result](StructureDefinition-qicore-observation-clinical-result.html) ###
**Must Have:**
* status: (QI) registered \| prliminary \| final \| amended \| corrected \| entered-in-error \| unknown
* category: (QI) Classification of type of observation
* code: (QI) Clinical Test or Procedure Name
* subject: (QI) Who and/or what the observation is about


**QI Elements:**
* category: (QI) Classification of type of observation
* effective[x]: (QI) Clinically relevant time/time-period for observation
* value[x]: (QI) Result Value
* dataAbsentReason: (QI) Why the result is missing

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Observation Screening Assessment](StructureDefinition-qicore-observation-screening-assessment.html) ###
**Must Have:**
* status: (QI) registered \| prliminary \| final \| amended \| corrected \| entered-in-error \| unknown
* category: (QI) Classification of type of observation
* category: (QI) Classification of type of observation
* code: (QI) Type of observation (code / type)
* subject: (QI) Who and/or what the observation is about


**QI Elements:**
* category: (QI) Classification of type of observation
* effective[x]: (QI) Clinically relevant time/time-period for observation
* performer: (QI) Who is responsible for the observation
* value[x]: (QI) Actual result
* dataAbsentReason: (QI) Why the result is missing
* interpretation: (QI) High, low, normal, etc.
* hasMember: (QI) Reference to panel or multi-select responses
* derivedFrom: (QI) Related Observations or QuestionnaireResponses that the observation is made from

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Organization](StructureDefinition-qicore-organization.html) ###
**Must Have:**
* active: Whether the organization's record is still in active use
* name: Name used for the organization


**QI Elements:**
* identifier: (QI) CMS Certification Number
* identifier.use: (QI) usual \| official \| temp \| secondary \| old (If known)
* identifier.value: (QI) The value that is unique
* identifier: (QI) Employer Identification Number
* identifier.use: (QI) usual \| official \| temp \| secondary \| old (If known)
* identifier.value: (QI) The value that is unique

**Primary code path:** type
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Patient](StructureDefinition-qicore-patient.html) ###
**Must Have:**
* identifier: An identifier for this patient
* identifier.system: The namespace for the identifier value
* identifier.value: The value that is unique within the system.
* name: A name associated with the patient
* telecom.system: phone \| fax \| email \| pager \| url \| sms \| other
* telecom.value: The actual contact point details
* gender: male \| female \| other \| unknown
* communication.language: The language which can be used to communicate with the patient about his or her health


**QI Elements:**
* race: (QI) US Core Race Extension
* ethnicity: (QI) US Core ethnicity Extension
* tribalAffiliation: (QI) Tribal Affiliation Extension
* sex: (QI) Sex Extension
* genderIdentity: (QI) The individual's gender identity
* name.use: (QI) usual \| official \| temp \| nickname \| anonymous \| old \| maiden
* name.suffix: (QI) Parts that come after the name
* name.period: (QI) Time period when name was/is in use
* telecom: (QI) A contact detail for the individual
* birthDate: (QI) The date of birth for the individual
* deceased[x]: (QI) Indicates if the individual is deceased or not
* address: (QI) An address for the individual
* address.use: (QI) home \| work \| temp \| old \| billing - purpose of this address
* address.period: (QI) Time period when address was/is in use
* communication: (QI) A language which may be used to communicate with the patient about his or her health



<br>
<br>

### [QICore Practitioner](StructureDefinition-qicore-practitioner.html) ###
**Must Have:**
* identifier: (QI) An identifier for the person as this agent
* identifier.system: (QI) The namespace for the identifier value
* identifier.value: (QI) The value that is unique
* name: The name(s) associated with the practitioner
* name.family: Family name (often called 'Surname')


**QI Elements:**
* identifier: (QI) An identifier for the person as this agent
* identifier: (QI) There is not a general Tax Identifier Numer (TIN) OID. There is an SSN, a PTIN, and an ITIN, but no TIN generally. So the only slice specified here is EIN, if consumers determine a need for an SSN, submit a comment to that effect.
* identifier.use: (QI) usual \| official \| temp \| secondary \| old (If known)
* identifier.value: (QI) The value that is unique



<br>
<br>

### [QICore PractitionerRole](StructureDefinition-qicore-practitionerrole.html) ###
**Must Have:**
* telecom.system: (QI) phone \| fax \| email \| pager \| url \| sms \| other
* telecom.value: (QI) The actual contact point details


**QI Elements:**
* identifier: (QI) Business Identifiers that are specific to a role/location
* identifier.use: (QI) usual \| official \| temp \| secondary \| old (If known)
* identifier.system: (QI) The namespace for the identifier value
* identifier.value: (QI) The value that is unique
* active: (QI) Whether this practitioner role record is in active use
* period: (QI) The period during which the practitioner is authorized to perform in these role(s)
* practitioner: (QI) Practitioner that is able to provide the defined services for the organization
* organization: (QI) Organization where the roles are available
* code: (QI) Roles which this practitioner may perform
* specialty: (QI) Specific specialty of the practitioner
* location: (QI) The location(s) at which this practitioner provides care
* telecom: (QI) Contact details that are specific to the role/location/service
* endpoint: (QI) Technical endpoints providing access to services operated for the practitioner with this role

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Procedure Not Done](StructureDefinition-qicore-procedurenotdone.html) ###
**Must Have:**
* status: (QI) preparation \| in-progress \| not-done \| on-hold \| stopped \| completed \| entered-in-error \| unknown
* code: (QI) Identification of the procedure
* subject: (QI) Who the procedure was performed on


**QI Elements:**
* recorded: (QI) When the procedure was first captured in the subject's record
* basedOn: (QI) A request for this procedure
* statusReason: (QI) Reason for the current status
* notDoneValueSet: (QI) What was not performed
* performed[x]: (QI) When the procedure was performed
* reasonCode: (QI) Coded reason procedure performed
* reasonReference: (QI) The justification that the procedure was performed

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Procedure](StructureDefinition-qicore-procedure.html) ###
**Must Have:**
* status: (QI) preparation \| in-progress \| ​on-hold​ \| stopped​ \| completed \| entered-in-error​ \| unknown​
* code: (QI) Identification of the procedure
* subject: (QI) Who the procedure was performed on


**QI Elements:**
* implicitRules: (QI) A set of rules under which this content was created
* recorded: (QI) When the procedure was first captured in the subject's record
* basedOn: (QI) A request for this procedure
* performed[x]: (QI) When the procedure was performed
* reasonCode: (QI) Coded reason procedure performed
* reasonReference: (QI) The justification that the procedure was performed

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore QuestionnaireResponse](StructureDefinition-qicore-questionnaireresponse.html) ###
**Must Have:**
* questionnaire: Form being answered
* status: in-progress \| completed \| amended \| entered-in-error \| stopped
* subject: (QI) The subject of the questions
* authored: Date the answers were gathered
* item.linkId: (QI) Pointer to specific item from Questionnaire


**QI Elements:**
* author: (QI) Person who received and recorded the answers
* item: (QI) Groups and questions
* item.answer.value[x]: (QI) Single-valued answer to the question



<br>
<br>

### [QICore RelatedPerson](StructureDefinition-qicore-relatedperson.html) ###
**Must Have:**
* active: (QI) Whether this related person's record is in active use
* patient: (QI) The patient this person is related to


**QI Elements:**
* relationship: (QI) The nature of the relationship
* name: (QI) A name associated with the person
* telecom: (QI) A contact detail for the person

**Primary code path:** relationship
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Service Not Requested](StructureDefinition-qicore-servicenotrequested.html) ###
**Must Have:**
* status: (QI) draft \| active \| on-hold \| revoked \| completed \| entered-in-error \| unknown
* intent: (QI) proposal \| plan \| directive \| order \| original-order \| reflex-order \| filler-order \| instance-order \| option
* code: What is being requested/ordered
* subject: (QI) Individual or Entity the service is ordered for
* authoredOn: (QI) Date request signed


**QI Elements:**
* notDoneValueSet: (QI) What was not requested
* occurrence[x]: (QI) When service should occur
* reasonCode: (QI) Explanation/Justification for procedure or service
* reasonReference: (QI) Explanation/Justification for service or service

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore ServiceRequest](StructureDefinition-qicore-servicerequest.html) ###
**Must Have:**
* status: (QI) draft \| active \| on-hold \| revoked \| completed \| entered-in-error \| unknown
* intent: (QI) proposal \| plan \| directive \| order \| original-order \| reflex-order \| filler-order \| instance-order \| option
* code: (QI) What is being requested/ordered
* subject: (QI) Individual or Entity the service is ordered for


**QI Elements:**
* doNotPerform: (QI) True if service/procedure should not be performed
* occurrence[x]: (QI) When service should occur
* authoredOn: (QI) Date request signed
* reasonCode: (QI) Explanation/Justification for procedure or service
* reasonReference: (QI) Explanation/Justification for service or service

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Simple Observation](StructureDefinition-qicore-simple-observation.html) ###
**Must Have:**
* status: (QI) registered \| prliminary \| final \| amended \| corrected \| entered-in-error \| unknown
* category: (QI) Classification of type of observation
* code: (QI) Type of observation (code / type)
* subject: (QI) Who and/or what the observation is about


**QI Elements:**
* partOf: (QI) Part of referenced event
* effective[x]: (QI) Clinically relevant time/time-period for observation
* performer: (QI) Who is responsible for the observation
* value[x]: (QI) Actual result
* value[x]: (QI) actual \| potential
* interpretation: (QI) High, low, normal, etc.
* derivedFrom: (QI) US Core Profiles or other resource the observation is made from

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Substance](StructureDefinition-qicore-substance.html) ###
**QI Elements:**
* code: (QI) If this describes a specific package/container of the substance
* instance.quantity: (QI) Amount of substance in the package
* ingredient.quantity: (QI) Optional amount (concentration)
* ingredient.substance[x]: (QI) A component of the substance

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Task Rejected](StructureDefinition-qicore-taskrejected.html) ###
**QI Elements:**
* executionPeriod: (QI) The timing the task was rejected and the reason.

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

### [QICore Task](StructureDefinition-qicore-task.html) ###
**QI Elements:**
* identifier:  Task Instance Identifier
* basedOn: (QI) Request fulfilled by this task
* status:  draft​ \| requested​ \| received​ \| accepted​ \| ready​ \| cancelled​ \| in-progress​ \| on-hold​ \| failed​ \| completed \| entered-in-error
* intent:  unknown \| proposal \| plan \| order \| original-order \| reflex-order \| filler-order \| instance
* priority:  routine \| urgent \| asap \| stat
* code:  Task Type
* executionPeriod: (QI) Start and end time of execution

**Primary code path:** code
<br>
(PCPath) This element is the primary code path for this resource [CQL Retrieve](https://cql.hl7.org/02-authorsguide.html#filtering-with-terminology)
<br>



<br>
<br>

</div>


---

// File: input/pages/registry.md

---
layout: default
title: Registry
topofpage: true
---

---

<!-- TOC  the css styling for this is \pages\assets\css\project.css under 'markdown-toc'-->

* Do not remove this line (it will not be displayed)
{:toc}

## Conformance Resource Registry

This table contains a list of all the conformance resources defined as part of the Quality Improvement Core (QI-Core) 
Implementation Guide:

<table class="grid">
	<thead>
		<tr>
			<th>Resource</th><th>Description</th>
		</tr>
	</thead>
	<tbody>
		{% include table-profiles.xhtml %}
		{% include table-extensions.xhtml %}
		{% include table-codesystems.xhtml %}
		{% include table-valuesets.xhtml %}
	</tbody>
</table>



---

// File: input/pages/terminology.md

{:toc}


This page lists all the ValueSets, CodeSystems, and ConceptMaps defined as part of the QI-Core Implementation Guide. For
more information on using codes in resources, see the
[guidance section]({{site.data.fhir.ver.uscore}}/general-requirements.html#using-codes-in-us-core-profiles) as well as in the
[FHIR specification](http://hl7.org/fhir/terminologies.html).

Further guidance on using Value Set Authority Center (VSAC) Resources with FHIR® Terminology Service
can be found [here.]({{site.data.fhir.ver.uscore}}/terminology.html#using-value-set-authority-center-vsac)

### Value Set Resources

These value sets have been defined for this implementation guide.

<table class="list">
	<thead>
		<tr>
			<th>ValueSet</th><th>Description</th>
		</tr>
	</thead>
	<tbody>
		{% include table-valuesets.xhtml %}
	</tbody>
</table>


### CodeSystem Resources

See the [FHIR terminology section](http://hl7.org/fhir/terminologies-systems.html) for a complete discussion on code
systems and a list of codes system names used in FHIR. The following additional names (URIs) have been identified for
this implementation guide.

**Code systems published in this IG**

<table class="list">
	<thead>
		<tr>
			<th>CodeSystem</th><th>Description</th>
		</tr>
	</thead>
	<tbody>
		{% include table-codesystems.xhtml %}
	</tbody>
</table>


---

// File: input/resources/README.md

This folder contains project specific conformance resource in xml or json.

These are used by the ig-publisher to create fragments to include in the IG.


---

// File: input/data/new_items.yml

package-id: hl7.fhir.us.qicore
title: Quality Improvement Core Framework
canonical: 'http://hl7.org/fhir/us/qicore'
introduction: >-
  The QI-Core (Quality Improvement Core Framework) Implementation Guide defines a set of FHIR profiles with extensions and bindings needed to create interoperable, quality-focused applications. The profiles in this implementation guide derive from and extend the [US Core](http://hl7.org/fhir/us/core) profiles to provide a common foundation for building, sharing, and evaluating knowledge artifacts across quality improvement efforts in the US Realm
list:
  - version: current
    desc: |-
      The following resolutions have been voted on by the members of the sponsoring work group [HL7 International Clinical Quality Information](http://www.hl7.org/Special/committees/cqi/index.cfm).


      **Comments and their resolutions**

      Listed below are the resolved trackers for this version:

      **Status**: **Summary**:(**Jira Issue**))
      1. **Applied**: Should have a CapablityStatement to describe the capabilities of a deployed and configured solution that follows this IG. - 2018-Jan QI-Core #29 ([FHIR-14994](https://jira.hl7.org/browse/FHIR-14994)) Applied ([here](index.html#summary-of-conformance-requirements))
      1. **Applied**: It'd be helpful to list a default retriever for each profile ([FHIR-42084](https://jira.hl7.org/browse/FHIR-42084)) Applied in each profile ([here](profiles.html))
      1. **Applied**: Consider refactoring to Using CQL IG ([FHIR-43570](https://jira.hl7.org/browse/FHIR-43570)) Applied ([here](modelinfo.html)) and ([here](patterns.html)) and ([here](negation.html))
      1. **Applied**: MedicationNotRequested binding is incorrect ([FHIR-44737](https://jira.hl7.org/browse/FHIR-44737)) Applied ([here](StructureDefinition-qicore-medicationnotrequested.html))
      1. **Applied**: MedicationDispenseDeclined negation pattern incorrectly allows for medication reference ([FHIR-44738](https://jira.hl7.org/browse/FHIR-44738)) Applied ([here](StructureDefinition-qicore-medicationdispensedeclined.html))
      1. **Applied**: TLS 1.1 has been deprecated ([FHIR-44743](https://jira.hl7.org/browse/FHIR-44743)) Applied ([here](index.html#privacy-security-and-consent))
      1. **Applied**: Link to Terminology "guidance section" doesn't work as intended ([FHIR-44808](https://jira.hl7.org/browse/FHIR-44808)) Applied ([here](terminology.html))
      1. **Applied**: Add reference to 3 new US Core observation profiles in QI-Core ([FHIR-45359](https://jira.hl7.org/browse/FHIR-45359)) Applied ([here](profiles.html))
      1. **Applied**: Update QI-Core references to USCDI consistent with US Core 7.0 approach ([FHIR-45360](https://jira.hl7.org/browse/FHIR-45360)) Applied in each profile ([here](profiles.html))
      1. **Applied**: Update qiqore-notDoneValueSet Extension ([FHIR-45368](https://jira.hl7.org/browse/FHIR-45368)) Applied ([here](extensions.html))
      1. **Applied**: Update QI-Core to use extensions pack ([FHIR-45369](https://jira.hl7.org/browse/FHIR-45369)) Applied ([here](extensions.html)), ([here](StructureDefinition-qicore-servicenotrequested.html)), ([here](StructureDefinition-qicore-devicenotrequested.html)), ([here](StructureDefinition-qicore-observationcancelled.html)), ([here](StructureDefinition-qicore-procedurenotdone.html)), ([here](StructureDefinition-qicore-medicationdispensedeclined.html)) and ([here](StructureDefinition-qicore-medicationadministrationnotdone.html))
      1. **Applied**: Update AllergyIntolerance, CarePlan, CareTeam, and Coverage profiles to address US Core 7.0 ([FHIR-45395](https://jira.hl7.org/browse/FHIR-45395)) Applied ([here](StructureDefinition-qicore-careplan.html)) and ([here](StructureDefinition-qicore-careteam.html))
      1. **Applied**: Update QI-Core Condition Encounter Diagnosis and QI-Core Condition Problems and Health Concerns Profiles to build off of US Core 7.0 ([FHIR-45396](https://jira.hl7.org/browse/FHIR-45396)) Applied ([here](StructureDefinition-qicore-condition-problems-health-concerns.html)) and ([here](StructureDefinition-qicore-condition-encounter-diagnosis.html))
      1. **Applied**: Update QICore DiagnosticReport Profile for Laboratory Results Reporting and QI Core DiagnosticReport Profile for Report and Note Exchange to reflect updates in US Core 7.0's respective profile ([FHIR-45397](https://jira.hl7.org/browse/FHIR-45397)) Applied ([here](StructureDefinition-qicore-diagnosticreport-lab.html))
      1. **Applied**: Update QICore Encounter profile to build off of US Core 7.0 Encounter profile ([FHIR-45398](https://jira.hl7.org/browse/FHIR-45398)) Applied ([here](StructureDefinition-qicore-encounter.html))
      1. **Applied**: Update QI-Core Goal profile to reflect US Core 7.0 Goal profile ([FHIR-45399](https://jira.hl7.org/browse/FHIR-45399)) Applied ([here](StructureDefinition-qicore-goal.html))
      1. **Applied**: Update QI-Core Immunization, QI-Core ImmunizationNotDone profiles to build from US 7.0 Core Immunization Profile ([FHIR-45400](https://jira.hl7.org/browse/FHIR-45400)) Applied ([here](StructureDefinition-qicore-immunizationnotdone.html))
      1. **Applied**: Update QI-Core Location profile consistently with US Core version 7.0 Location Profile ([FHIR-45401](https://jira.hl7.org/browse/FHIR-45401)) Applied ([here](StructureDefinition-qicore-location.html))
      1. **Applied**: Update QI-Core Medication and QI-Core MedicationDispense and QI-Core MedicationDispenseDeclined profiles to build from US Core 7.0 Medication and MedicationDispense profiles ([FHIR-45402](https://jira.hl7.org/browse/FHIR-45402)) Applied ([here](StructureDefinition-qicore-medicationdispense.html)) and ([here](StructureDefinition-qicore-medicationdispensedeclined.html))
      1. **Applied**: Update QI-Core MedicationRequest and QI-Core MedicationNotRequested to changes reflected in US Core 7.0 MedicationRequest Profile ([FHIR-45403](https://jira.hl7.org/browse/FHIR-45403)) Applied ([here](StructureDefinition-qicore-medicationrequest.html)) and ([here](StructureDefinition-qicore-medicationnotrequested.html))
      1. **Applied**: update QI-Core SimpleObservation and ObservationCancelled to reflect changes in US Core 7.0 ([FHIR-45415](https://jira.hl7.org/browse/FHIR-45415)) Applied ([here](StructureDefinition-qicore-simple-observation.html)) and ([here](StructureDefinition-qicore-observationcancelled.html))
      1. **Applied**: Update QI-Core ObservationClinicalResult and QI-Core LaboratoryResultObservation Profile to reflect changes in US Core 7.0 ([FHIR-45416](https://jira.hl7.org/browse/FHIR-45416)) Applied ([here](StructureDefinition-qicore-observation-clinical-result.html)) and ([here](StructureDefinition-qicore-observation-lab.html))
      1. **Applied**: Update QI-Core ObservationScreeningAssessment to reflect changes in US Core 7.0 ([FHIR-45417](https://jira.hl7.org/browse/FHIR-45417)) Applied ([here](StructureDefinition-qicore-observation-screening-assessment.html))
      1. **Applied**: Update QI-Core Organization Profile to reflect changes in US Core 7.0 ([FHIR-45419](https://jira.hl7.org/browse/FHIR-45419)) Applied ([here](StructureDefinition-qicore-organization.html))
      1. **Applied**: Update QI-Core Patient profile to align with changes in US Core 7.0 ([FHIR-45424](https://jira.hl7.org/browse/FHIR-45424)) Applied ([here](StructureDefinition-qicore-patient.html))
      1. **Applied**: Update QI-Core Practitioner profile to reflect changes in US Core 7.0 ([FHIR-45425](https://jira.hl7.org/browse/FHIR-45425)) Applied ([here](StructureDefinition-qicore-practitioner.html))
      1. **Applied**: Update QI-Core PractitionerRole profile to reflect changes in US Core 7.0 ([FHIR-45426](https://jira.hl7.org/browse/FHIR-45426)) Applied ([here](StructureDefinition-qicore-practitionerrole.html))
      1. **Applied**: Update QI-Core Related Person to reflect changes in US Core 7.0 ([FHIR-45427](https://jira.hl7.org/browse/FHIR-45427)) Applied ([here](StructureDefinition-qicore-relatedperson.html))
      1. **Applied**: Update QI-Core Procedure and ProcedureNotDone to reference US Core 7.0 respective profile ([FHIR-45429](https://jira.hl7.org/browse/FHIR-45429)) Applied ([here](StructureDefinition-qicore-procedure.html)) and ([here](StructureDefinition-qicore-procedurenotdone.html))
      1. **Applied**: Update QI-Core QuestionnaireResponse profile to align with updated US Core 7.0 respective profile ([FHIR-45430](https://jira.hl7.org/browse/FHIR-45430)) Applied ([here](StructureDefinition-qicore-questionnaireresponse.html))
      1. **Applied**: Update QI-Core ServiceRequest and QI-Core ServiceNotRequested to align with changes to US Core 7.0 respective profiles ([FHIR-45431](https://jira.hl7.org/browse/FHIR-45431)) Applied ([here](StructureDefinition-qicore-servicerequest.html)) and ([here](StructureDefinition-qicore-servicenotrequested.html))
      1. **Applied** Update QDM to QI-Core Mapping Tables to reference changes in QI-Core 7.0 ([FHIR-45597](https://jira.hl7.org/browse/FHIR-45597)) Applied ([here](qdm-to-qicore.html))
      1. **Applied**: Limit subject reference in AdverseEvent to patient ([FHIR-45693](https://jira.hl7.org/browse/FHIR-45693)) Applied ([here](StructureDefinition-qicore-adverseevent.html))
      1. **Applied**: Update Negation page to include 3 new US Core observation profiles ([FHIR-45722](https://jira.hl7.org/browse/FHIR-45722)) Applied ([here](negation.html))
      1. **Applied**: Update landing page for version 7.0 ([FHIR-45947](https://jira.hl7.org/browse/FHIR-45947)) Applied ([here](index.html))
      1. **Applied**: Move Negation Value Set to THO ([FHIR-45957](https://jira.hl7.org/browse/FHIR-45957)) Applied ([here](ValueSet-qicore-negation-reason.html))
      1. **Applied**: Update QI-Core Claim to include key elements for present on admission and principal diagnosis ([FHIR-45959](https://jira.hl7.org/browse/FHIR-45959)) Applied ([here](StructureDefinition-qicore-claim.html))
      1. **Applied**: Add (QI) tags to QI-Core profile elements used in test FHIR measures ([FHIR-46015](https://jira.hl7.org/browse/FHIR-46015)) Applied in each profile ([here](profiles.html))
      1. **Applied**: Add list of QI-Core-flagged elements to the narrative ([FHIR-46030](https://jira.hl7.org/browse/FHIR-46030)) Applied in each profile ([here](profiles.html))
      1. **Applied**: QICore MedicationRequest prohibits reportedBoolean ([FHIR-46040](https://jira.hl7.org/browse/FHIR-46040)) Applied ([here](StructureDefinition-qicore-medicationrequest.html)) 
      1. **Applied**: Update medication[x] content across not done for reason medication actions to assure consistency ([FHIR-46291](https://jira.hl7.org/browse/FHIR-46291)) Applied ([here](StructureDefinition-qicore-medicationnotrequested.html)) and ([here](StructureDefinition-qicore-medicationadministrationnotdone.html)) and ([here](StructureDefinition-qicore-medicationdispensedeclined.html)) 
      1. **Applied**: Removed performer items, added reasonCode to procedure negation examples ([FHIR-46670](https://jira.hl7.org/browse/FHIR-46670)) Applied ([here](Procedure-negation-with-code-example.html)) and ([here](Procedure-negation-example.html))
      1. **Applied**: Added reasonCode and doNotPerform to DeviceRequest negation examples ([FHIR-46669](https://jira.hl7.org/browse/FHIR-46669)) Applied ([here](DeviceRequest-negation-example.html)) and ([here](DeviceRequest-negation-with-code-example.html))  


---

// File: input/pages/examples.md




**QICoreAdverseEvent**
* [Mild Rash Example](AdverseEvent-example.html)

**QICoreAllergyIntolerance**
* [Typical Food Allergy](AllergyIntolerance-example.html)
* [Refuted Food Allergy](AllergyIntolerance-example-refuted.html)

**QICoreBodyStructure**
* [BodyStructure example identifying a specific tumor or lesion](BodyStructure-example.html)

**QICoreCarePlan**
* [Assessment and care plan for a pregnancy](CarePlan-example.html)

**QICoreCareTeam**
* [Example of a CareTeam involved in the delivery of care for a pregnancy](CareTeam-example.html)

**QICoreClaim**
* [Simple Vision Claim](Claim-example.html)

**QICoreClaimResponse**
* [Simple Vision ClaimResponse](ClaimResponse-example.html)

**QICoreCommunication**
* [Written Alert Example](Communication-example.html)

**QICoreCommunicationNotDone**
* [Negation Example](Communication-negation-example.html)

**QICoreCommunicationRequest**
* [CommunicationRequest Example](CommunicationRequest-example.html)

**QICoreConditionEncounterDiagnosis**
* [Severe Burn Example](Condition-example.html)
* [Appendicitis Example](Condition-appendicitis-example.html)

**QICoreConditionProblemsHealthConcerns**
* [Patient with concerns of becoming fat](Condition-health-concern-example.html)

**QICoreCoverage**
* [General Person Primary Coverage Example](Coverage-example.html)
* [General Subscriber ID Coverage Example](Coverage-example-new.html)

**QICoreDevice**
* [General Device Example](Device-example.html)

**QICoreDeviceNotRequested**
* [Negation Example with valueset](DeviceRequest-negation-example.html)
* [Negation Example with code](DeviceRequest-negation-with-code-example.html)

**QICoreDeviceRequest**
* [General DeviceRequest Example](DeviceRequest-example.html)

**QICoreDeviceUseStatement**
* [The provision of a wheelchair to a patient example](DeviceUseStatement-example.html)

**QICoreDiagnosticReportLab**
* [Blood Panel Example](DiagnosticReport-example.html)

**QICoreDiagnosticReportNote**
* [Radiology Diagnostic Report Example](DiagnosticReport-note-example.html)

**QICoreEncounter**
* [Inpatient Admission for Appendicitis](Encounter-example.html)

**QICoreFamilyMemberHistory**
* [Father Died of Heart Attack Example](FamilyMemberHistory-example.html)

**QICoreFlag**
* [Large Dog Warning Example](Flag-example.html)

**QICoreGoal**
* [Weight Loss Example](Goal-example.html)

**QICoreImagingStudy**
* [Chest CT](ImagingStudy-example.html)

**QICoreImmunization**
* [Example of Influenza immunization shot](Immunization-example.html)

**QICoreImmunizationNotDone**
* [Negation Example using valueset reference](Immunization-negation-example.html)
* [Negation Example using coding](Immunization-negation-example-code.html)

**QICoreImmunizationEvaluation**
* [Example of immunization evaluation](ImmunizationEvaluation-example.html)

**QICoreImmunizationRecommendation**
* [Example of immunizationrecommendation using a vaccine code](ImmunizationRecommendation-example.html)

**QICoreMedication**
* [Example of an IV medication - Alemtuzumab](Medication-example.html)

**QICoreMedicationAdministration**
* [Inhalant Example](MedicationAdministration-example.html)
* [Cumulative Duration Example](MedicationAdministration-cmd-example.html)

**QICoreMedicationAdministrationNotDone**
* [Medication not administered using a value set to indicate what was not administered](MedicationAdministration-negation-example.html)
* [Medication not administered using a code to indicate that a particular medication was not administered](MedicationAdministration-negation-with-code-example.html)

**QICoreMedicationDispense**
* [Penicillin MedicationDispense Example](MedicationDispense-example.html)
* [Cumulative Medication Dispense Example](MedicationDispense-cmd-example.html)

**QICoreMedicationDispenseDeclined**
* [Negation Example with valueset](MedicationDispense-negation-example.html)
* [Negation Example with code](MedicationDispense-negation-with-code-example.html)

**QICoreMedicationNotRequested**
* [Negation Example using Valueset](MedicationRequest-negation-example.html)
* [Negation Example using code](MedicationRequest-negation-example-code.html)

**QICoreMedicationRequest**
* [Penicillin MedicationRequest Example](MedicationRequest-example.html)
* [Cumulative Medication Duration Example](MedicationRequest-cmd-example.html)
* [Patient Reported MedicationRequest Example](MedicationRequest-patient-reported-example.html)
* [Patient Requested MedicationRequest Example](MedicationRequest-patient-requester-example.html)
* [Practitioner Ordered MedicationRequest Example](MedicationRequest-practitioner-ordered-example.html)

**QICoreMedicationStatement**
* [Penicillin MedicationStatement Example](MedicationStatement-example.html)

**QICoreNutritionOrder**
* [Diabetic diet example](NutritionOrder-example.html)

**QICoreSimpleObservation**
* [Frailty Observation Example](Observation-example-frailty.html)
* [Gestational Age at Birth Example](Observation-example-gestation.html)
* [Date and Time of Obstetric Delivery Example](Observation-example-obstetric-delivery.html)
* [Delivery Date Estimated Example](Observation-example-delivery-date-estimate.html)
* [Number of Preterm Births Example](Observation-example-preterm-births.html)
* [Number of Term Births Example](Observation-example-births.html)
* [Number of Parity Example](Observation-example-parity.html)
* [Number of Pregnancies Example](Observation-example-pregnancies.html)

**QICoreObservationCancelled**
* [Negation Example with valueset](Observation-negation-example.html)
* [Negation Example with code](Observation-negation-with-code-example.html)

**QICoreNonPatientObservation**
* [Hemodialysis Machine Availability](Observation-example-nonpatient-hemodialysis-machine.html)
* [Hospital Bed Availability](Observation-example-nonpatient-hospital-bed.html)
* [Mechanical Ventilator Availability](Observation-example-nonpatient-mechanical-ventilator.html)

**QICoreLaboratoryResultObservation**
* [Glucose Lab Result Observation](Observation-laboratory-result-observation-example-blood-glucose.html)

**QICoreObservationClinicalResult**
* [Heart Rate Rhythm Clinical Result Observation](Observation-clinical-result-heart-rate-rhythm.html)

**QICoreObservationScreeningAssessment**
* [10 minute Apgar Heart Rate Screening Assessment Observation](Observation-example-screening-assessment-10-minute-apgar-heart-rate.html)

**QICoreOrganization**
* [HL7 Organization Example](Organization-example.html)

**QICorePatient**
* [Basic Patient Example](Patient-example.html)
* [Senior Patient Example](Patient-example-2.html)
* [Infant Patient Example](Patient-infant-example.html)

**QICorePractitioner**
* [Referring Practitioner Example](Practitioner-example.html)

**QICorePractitionerRole**
* [PractitionerRole Example](StructureDefinition-qicore-practitionerrole.html)

**QICoreProcedure**
* [Appendectomy Example](Procedure-example.html)

**QICoreProcedureNotDone**
* [Negation Example with valuset](Procedure-negation-example.html)
* [Negation Example with code](Procedure-negation-with-code-example.html)

**QICoreRelatedPerson**
* [Emergency Contact Example](RelatedPerson-example.html)

**QICoreServiceNotRequested**
* [Negation Example with valueset](ServiceRequest-negation-example.html)
* [Negation Example with code](ServiceRequest-negation-example-code.html)

**QICoreServiceRequest**
* [Request for Appendectomy Example](ServiceRequest-example.html)
* [Request for Myringotomy Procedure Example](ServiceRequest-myringotomy-example.html)

**QICoreSubstance**
* [Honey Bee venom (apitoxin) Example](Substance-example.html)

**QICoreTask**
* [Task Example](Task-example.html)

**QICoreTaskRejected**
* [Task rejected using a value set to indicate what was not done](Task-negation-example.html)
* [Task rejected using a code to indicate what was not done](Task-negation-with-code-example.html)

**Additional Examples**
* [ODH Example](Observation-example.html)



---

