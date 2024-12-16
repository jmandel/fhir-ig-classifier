File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/changes.md

### Version 4.0.0-ballot

The changes in this version of Consolidated CDA were made from comments raised plus additions for new USCDI elements.

#### Major Changes

* Updated USCDI Table
* Updated Terminology page

##### New Templates
* Advance Directive Existence Observation
* Smoking Status Meaningful Use
* Individual Pronoun Observation
* Interpreter Needed Observation
* Sex Parameter For Clinical Use Observation

##### Deprecated Templates
* Advance Directive Organizer
* Tobacco Use
* Smoking Status

##### Replaced Templates
* Instruction replaced by Instruction Observation
* Pregnancy Observation replaced by Pregnancy Status Observation

##### Changed Templates

###### Entry Templates
* AssessmentScaleObservation - changed code binding
* EncounterActivity - change code and discharge disposition binding, added InterpreterNeededObservation entry
* GenderIdentityObservation - no longer a Social History Observation
* PlannedEncounter - changed code binding, added InterpreterNeededObservation entry
* PlannedProcedure - added sdtcCategory
* PregnancyIntentionInNextYear - mood changed from INT to EVN
* ResultOrganizer - add sdtcCategory
* ServiceDeliveryLocation - changed code binding
* SexualOrientationObservation - no longer a Social History Observation
* SpecimenConditionObservation - changed value binding

###### Section Templates
* AdvanceDirectivesSection - removed organizer, changed observation to existence observation
* AssessmentSection - added MAY NotesActivity
* AssessmentAndPlanSection - added MAY NotesActivity
* PlanOfTreatmentSection - added MAY NotesActivity
* SocialHistorySection - added IndividualPronounObservation

#### Tracker Issues Applied
* CDA-20007
* CDA-20887
* CDA-21022
* CDA-21112
* CDA-21113
* CDA-21114
* CDA-21120
* CDA-21123
* CDA-21124
* CDA-21125
* CDA-21126
* CDA-21127
* CDA-21128
* CDA-21129
* CDA-21130
* CDA-21134
* CDA-21137
* CDA-21143
* CDA-21144
* CDA-21148
* CDA-21151
* CDA-21153
* CDA-21157
* CDA-21178
* CDA-21179
* CDA-21180
* CDA-21181
* CDA-21215
* CDA-21221
* CDA-21222
* CDA-21224
* CDA-21225
* CDA-21226
* CDA-21227
* CDA-21228
* CDA-21229
* CDA-21230
* CDA-21231
* CDA-21232
* CDA-21233
* CDA-21234
* CDA-21235
* CDA-21237
* CDA-21244
* CDA-22328

### Version 3.0.0

The changes in this version of Consolidated CDA were made from comments raised during the January 2024 ballot of Consolidated CDA plus other issues that were raised during the ballot timeframe.

#### Major Changes

* Removed Planned Activity Act and Planned Activity Observation templates
* Deprecated the Smoking Status - Meaningful Use and Tobacco Use templates
* Added new Smoking Status template
* Added new Average Blood Pressure Organizer template


#### Tracker Issues Applied
- [CDA-2089](https://jira.hl7.org/browse/CDA-2089) - Create sdtc:telecom extension in CDA and reference it in the US Realm Header template.
- [CDA-20848](https://jira.hl7.org/browse/CDA-20848) - C-CDA Vital Sign Result Type value set in VSAC corrected with appropriate vital signs types.
- [CDA-20849](https://jira.hl7.org/browse/CDA-20849) - Update Social History Section description.
- [CDA-20854](https://jira.hl7.org/browse/CDA-20854) - Add constraint to only contain inactive Problem observations in Past Medical History.
- [CDA-20855](https://jira.hl7.org/browse/CDA-20855) - Update Problem Observation effectiveTime description.
- [CDA-20882](https://jira.hl7.org/browse/CDA-20882) - Change LOINC codes for Care Team Member Act and Planned Coverage.
- [CDA-20883](https://jira.hl7.org/browse/CDA-20883) - Update How To Read section on tabs to use the proper names of the tabs.
- [CDA-20884](https://jira.hl7.org/browse/CDA-20884) - Provide an example of Template Inheritance showing how the old Profile that showed all constraints is different from the Differential Tab which only shows new constraints.
- [CDA-20885](https://jira.hl7.org/browse/CDA-20885) - Add statements about US@ to US Realm Address.
- [CDA-20886](https://jira.hl7.org/browse/CDA-20886) - Change binding at Gender Identity observationCode to Gender Identity value set and remove binding to nullFlavor (but don't preclude)
- [CDA-20888](https://jira.hl7.org/browse/CDA-20888) - Update Care Experience Preference description.
- [CDA-20894](https://jira.hl7.org/browse/CDA-20894) - Update Goal Observation description.
- [CDA-20896](https://jira.hl7.org/browse/CDA-20896) - Will add effectiveTime 1..1 (nullFlavor is allowed) with just a value that indicates the point in time when the ProgressTowardsGoalObservation was made.
- [CDA-20898](https://jira.hl7.org/browse/CDA-20898) - Fix typos.
- [CDA-20899](https://jira.hl7.org/browse/CDA-20899) - Fix typos.
- [CDA-20901](https://jira.hl7.org/browse/CDA-20901) - Fix typos.
- [CDA-20902](https://jira.hl7.org/browse/CDA-20902) - Add USCDI Flag to Care Team Member Act elements.
- [CDA-20903](https://jira.hl7.org/browse/CDA-20903) - Add display name for fixed code.
- [CDA-20904](https://jira.hl7.org/browse/CDA-20904) - Update the How To Read page to be version-agnostic.
- [CDA-20905](https://jira.hl7.org/browse/CDA-20905) - Add guidance in the How To Read page that the Snapshot table will show all guidance, including that inherited from base CDA models.
- [CDA-20906](https://jira.hl7.org/browse/CDA-20906) - Changed closed templates from using invariants to specifically excluding unneeded elements.
- [CDA-20907](https://jira.hl7.org/browse/CDA-20907) - Fix script to create valid artifact descriptions.
- [CDA-20908](https://jira.hl7.org/browse/CDA-20908) - Update CoverageAct.effectiveTime, Remove PolicyActivity.effectiveTime, provide guidance on PolicyActivity.participant.coverage-target.time.
- [CDA-20909](https://jira.hl7.org/browse/CDA-20909) - Change binding on the Related Person Relationship and Name Participant associated Entity to a value set.
- [CDA-20910](https://jira.hl7.org/browse/CDA-20910) - Make the Key Elements Table tab the default for CDA specifications.
- [CDA-20911](https://jira.hl7.org/browse/CDA-20911) - Fix guidance on Medication Activity and Medication Information templates for typos and clarification.
- [CDA-20912](https://jira.hl7.org/browse/CDA-20912) - Add constraint about Observation.value using UCUM units for PQ datatype to Social History Observation.
- [CDA-20914](https://jira.hl7.org/browse/CDA-20914) - Give EncounterDiagnosis a new template version as this is a breaking change.
- [CDA-20915](https://jira.hl7.org/browse/CDA-20915) - Change Smoking Status-Meaningful Use value from required to preferred.
- [CDA-20916](https://jira.hl7.org/browse/CDA-20916) - Change Payers section in Referral Note from required to optional.
- [CDA-20918](https://jira.hl7.org/browse/CDA-20918) - Add binding to Observation Interpretation on Vital Sign Observation interpretationCode.
- [CDA-20919](https://jira.hl7.org/browse/CDA-20919) - Add USCDI flags to Encounter Activity elements.
- [CDA-20920](https://jira.hl7.org/browse/CDA-20920) - Add link to NUBC codes as well as the license in the comments of Encounter.sdtcDischargeDispositionCode.
- [CDA-20922](https://jira.hl7.org/browse/CDA-20922) - Add clarification on USCDI interpretation to the USCDI page.
- [CDA-20924](https://jira.hl7.org/browse/CDA-20924) - Create actual terminology bindings for the Goal Observation constraint text.
- [CDA-20925](https://jira.hl7.org/browse/CDA-20925) - Add missing USCDI flags to Coverage Activity
- [CDA-20926](https://jira.hl7.org/browse/CDA-20926) - Add display name for fixed code.
- [CDA-20927](https://jira.hl7.org/browse/CDA-20927) - Add missing USCDI flag to Result Organizer.
- [CDA-20928](https://jira.hl7.org/browse/CDA-20928) - Add text guidance in the Description field that states that the Specimen Collection Procedure "Includes representation of the USCDI data element "Specimen Condition Acceptability"
- [CDA-20929](https://jira.hl7.org/browse/CDA-20929) - Fix Result Organizer description.
- [CDA-20930](https://jira.hl7.org/browse/CDA-20930) - Add missing USCDI flag to Result Observation.
- [CDA-20931](https://jira.hl7.org/browse/CDA-20931) - Fix typo.
- [CDA-20932](https://jira.hl7.org/browse/CDA-20932) - Add missing USCDI flag to Patient Language Code.
- [CDA-20933](https://jira.hl7.org/browse/CDA-20933) - Ensure binding to UCUM units is preferred and not required.
- [CDA-20936](https://jira.hl7.org/browse/CDA-20936) - We will make a note of the should-relatedParticipant invariant on the participant so that it is more prevalent.
- [CDA-20938](https://jira.hl7.org/browse/CDA-20938) - Update SDOH bindings and add USCDI tags on the relevant elements.
- [CDA-20939](https://jira.hl7.org/browse/CDA-20939) - Add new binding to SDOH Screening Assessments in AssessmentScaleObservation template.
- [CDA-20940](https://jira.hl7.org/browse/CDA-20940) - Add the @code requirement on US Realm Header and reset the bindings on all document templates to the code element
- [CDA-20941](https://jira.hl7.org/browse/CDA-20941) - Remove comment and short from Procedure Note encompassingEncounter location.
- [CDA-20942](https://jira.hl7.org/browse/CDA-20942) - Add binding to ServiceEvent.Performer.functionCode in Patient Generated Header.
- [CDA-20943](https://jira.hl7.org/browse/CDA-20943) - Add a constraint that if @code and @codeSystem exists, @nullFlavor can not exist.
- [CDA-20944](https://jira.hl7.org/browse/CDA-20944) - Change Referral Participant Name template to Person Name.
- [CDA-20945](https://jira.hl7.org/browse/CDA-20945) - Remove the Short since the invariant expresses the proper constraint.
- [CDA-20946](https://jira.hl7.org/browse/CDA-20946) - Move the note that is on PCP.typeCode to functionCode
- [CDA-20947](https://jira.hl7.org/browse/CDA-20947) - Remove the EVN entryRelationships from the Planned Intervention Act.
- [CDA-20948](https://jira.hl7.org/browse/CDA-20948) - Remove the note about Hospital Discharge Diagnosis from the Encounter Diagnosis template.
- [CDA-20949](https://jira.hl7.org/browse/CDA-20949) - Update the Care Plan notes around the required and optional sections.
- [CDA-20950](https://jira.hl7.org/browse/CDA-20950) - Model the Planned Medication Activity's effectiveTime similar to Medication Activity.
- [CDA-20951](https://jira.hl7.org/browse/CDA-20951) - Make an example binding to the proper value set.
- [CDA-20952](https://jira.hl7.org/browse/CDA-20952) - Update the Health Status Evaluations Section description.
- [CDA-20953](https://jira.hl7.org/browse/CDA-20953) - Remove the language around Assessments and Assessment and Plan from the Care Plan document.
- [CDA-20954](https://jira.hl7.org/browse/CDA-20954) - Make both Performer slices have typeCode = PRF and remove the constraint language.
- [CDA-20955](https://jira.hl7.org/browse/CDA-20955) - Created new [Average Blood Pressure Organizer](StructureDefinition-AverageBloodPressureOrganizer.html) template
- [CDA-20957](https://jira.hl7.org/browse/CDA-20957) - Change the Problem Observation code binding to a new Grouper value set.
- [CDA-20958](https://jira.hl7.org/browse/CDA-20958) - Change the Problem Value set binding to the US Core Condition value set.
- [CDA-20961](https://jira.hl7.org/browse/CDA-20961) - Update the Advance Directive Organizer description.
- [CDA-20962](https://jira.hl7.org/browse/CDA-20962) - Change the Procedure code bindings to use the US Core Procedure set.
- [CDA-20963](https://jira.hl7.org/browse/CDA-20963) - Remove Planned Activity Act and Planned Activity Observation Templates.
- [CDA-20965](https://jira.hl7.org/browse/CDA-20965) - Update the Advance Directive Observation description.
- [CDA-20966](https://jira.hl7.org/browse/CDA-20966) - Update the Advance Directive Organizer description.
- [CDA-20967](https://jira.hl7.org/browse/CDA-20967) - Update the Advance Directive Observation description.
- [CDA-20969](https://jira.hl7.org/browse/CDA-20969) - Bind the playingEntity.code to the Personal and Legal Relationship Role Types value set.
- [CDA-20970](https://jira.hl7.org/browse/CDA-20970) - Update the Advance Directive Observation externalDocument.code binding to to be Preferred to Advance Directive Categories.
- [CDA-20971](https://jira.hl7.org/browse/CDA-20971) - Update the Advance Directive Observation code binding to be to a new grouper value set.
- [CDA-20973](https://jira.hl7.org/browse/CDA-20973) - Remove the prohibition on ReferenceRange.code.
- [CDA-20974](https://jira.hl7.org/browse/CDA-20974) - Create an invariant on Indication similarly to how EntryReference and AuthorParticipation do it.
- [CDA-20975](https://jira.hl7.org/browse/CDA-20975) - Update the value set binding from Nutrition Recommendations to Nutrition Recommendation Grouping.
- [CDA-20976](https://jira.hl7.org/browse/CDA-20976) - Add a paragraph about how the guide uses FHIR Structure Definitions and change "based on FHIR" to be "generated with"
- [CDA-20977](https://jira.hl7.org/browse/CDA-20977) - Add information about XML vs JSON in the new section that explains what "based on FHIR" means.
- [CDA-20978](https://jira.hl7.org/browse/CDA-20978) - Fix a broken link.
- [CDA-20980](https://jira.hl7.org/browse/CDA-20980) - Add a note that SDTC extensions are used in the templates and provide a link to find information about those extensions.
- [CDA-20981](https://jira.hl7.org/browse/CDA-20981) - Move section 3.12 to the Validation page.
- [CDA-20983](https://jira.hl7.org/browse/CDA-20983) - Move the "How to Read" into the Guidance menu structure.
- [CDA-20985](https://jira.hl7.org/browse/CDA-20985) - Add information about required value set bindings to the General Guidance section.
- [CDA-20989](https://jira.hl7.org/browse/CDA-20989) - We will change the title of the guide to include C-CDA.
- [CDA-20990](https://jira.hl7.org/browse/CDA-20990) - Fix capitalizations.
- [CDA-20992](https://jira.hl7.org/browse/CDA-20992) - We will add a section to the How to Read about why the template versions are no longer in the name.
- [CDA-20993](https://jira.hl7.org/browse/CDA-20993) - Remove figure numbering.
- [CDA-20995](https://jira.hl7.org/browse/CDA-20995) - Fix typos.
- [CDA-21017](https://jira.hl7.org/browse/CDA-21017) - Change the binding on routeCode.translation to be Preferred instead of Required.
- [CDA-21019](https://jira.hl7.org/browse/CDA-21019) - Rename USCDI "Time of Procedure" element to "Performance Time"
- [CDA-21041](https://jira.hl7.org/browse/CDA-21041) - Change the CCDA IG template to use the word Template instead of Profile.
- [CDA-21042](https://jira.hl7.org/browse/CDA-21042) - Remove the SpecimenRejectReasonObservation template.
- [CDA-21048](https://jira.hl7.org/browse/CDA-21048) - Swap the bindings on the code and the translations on Advance Directive Observation code.
- [CDA-21049](https://jira.hl7.org/browse/CDA-21049) - Change Problem Type value set bindings to use a new Grouper value set.
- [CDA-21051](https://jira.hl7.org/browse/CDA-21051) - Update VSAC/LOINC/SNOMED display names.
- [CDA-21052](https://jira.hl7.org/browse/CDA-21052) - Change Vital Signs Organizer code to use LOINC code.
- [CDA-21053](https://jira.hl7.org/browse/CDA-21053) - Changed the Patient Referral Act statusCode binding to be to ActStatus code system.
- [CDA-21054](https://jira.hl7.org/browse/CDA-21054) - Created new [Smoking Status](StructureDefinition-SmokingStatus.html) template and deprecated [Smoking Status - Meaningful Use](StructureDefinition-SmokingStatusMeaningfulUse.html) and [Tobacco Use](StructureDefinition-TobaccoUse.html)
- [CDA-21056](https://jira.hl7.org/browse/CDA-21056) - Update Basic Industry Occupation examples to match templates.
- [CDA-21057](https://jira.hl7.org/browse/CDA-21057) - Added explanatory text on what effectiveTime means within goals
- [CDA-21058](https://jira.hl7.org/browse/CDA-21058) - Updated the Immunization Refusal Reason template to Immunization Not Given Reason and use proper codes and value set bindings.
- [CDA-21060](https://jira.hl7.org/browse/CDA-21060) - Update Sex Observation value set.
- [CDA-21062](https://jira.hl7.org/browse/CDA-21062) - Update Patient Generated Document description.
- [CDA-21064](https://jira.hl7.org/browse/CDA-21064) - Add 0..* authors to the Disability Status Observation.
- [CDA-21065](https://jira.hl7.org/browse/CDA-21065) - Change the Sex Observation value set binding to be Preferred.
- [CDA-21066](https://jira.hl7.org/browse/CDA-21066) - Update slice names throughout guide
- [CDA-21067](https://jira.hl7.org/browse/CDA-21067) - Change Patient Referral Act participant from SHALL contain exactly one to MAY contain zero or one.
- [CDA-21070](https://jira.hl7.org/browse/CDA-21070) - Add slicing logic to [Medications Administered Section](StructureDefinition-MedicationsAdministeredSection.html)
- [CDA-21076](https://jira.hl7.org/browse/CDA-21076) - Add test for SHOULD NOT on [Allergy](StructureDefinition-SubstanceOrDeviceAllergyIntoleranceObservation.html) severity
- [CDA-21080](https://jira.hl7.org/browse/CDA-21080) - Fix comment to reference proper code on ProcedureNote participant typeCode
- [CDA-21081](https://jira.hl7.org/browse/CDA-21081) - Combine Goal Observation's two REFR EntryReference entries into one
- [CDA-21087](https://jira.hl7.org/browse/CDA-21087) - Fix the OID for LOINC 
- [CDA-21088](https://jira.hl7.org/browse/CDA-21088) - Combine Risk Concern Act's two REFR EntryReference entries into one

### Version 3.0.0-ballot 

The changes in this version of Consolidated CDA have been made from STU comments and JIRA issues that were raised by the community and approved by the Structured Documents working group.

#### Major Changes

* Removed Diagnostic Imaging Report document template and relevant section and entry templates
* Removed any templates that are DEPRECATED
* Removed Entries Optional templates if an equivalent Entries Required template exists
* Combined Companion Guide and C-CDA narrative into one guide
* Added Medication Adherence, Treatment Intervention Preference, and Care Experience Preference USCDI Entry templates
* Added USCDI tag and extensions to relevant USCDI elements
* Moved USCDI guidance to the relevant template element

#### Tracker Issues Applied

- [CDA-814](https://jira.hl7.org/browse/CDA-814) - Change assorted vocabulary bindings
- [CDA-939](https://jira.hl7.org/browse/CDA-939) - Make Interventions section mandatory in Care Plan
- [CDA-1693](https://jira.hl7.org/browse/CDA-1693) - Change the name of the Interventions Section to Activities Section.
- [CDA-1240](https://jira.hl7.org/browse/CDA-1240) - Added assignedPerson with US Realm Person Name to Procedure Activity Procedure template.
- [CDA-1273](https://jira.hl7.org/browse/CDA-1273) - Changed Problem Observation in Problem Concern Act from 1..* to 1..1.
- [CDA-1274](https://jira.hl7.org/browse/CDA-1274) - Changed Allergy Intolerance Observation in Allergy Concern Act from 1..* to 1..1.
- [CDA-1277](https://jira.hl7.org/browse/CDA-1277) - Added a Progress Towards Goal Observation to the Goal Observation template.
- [CDA-1278](https://jira.hl7.org/browse/CDA-1278) - Changed the GoalObservation statusCode to be bound to a value set.
- [CDA-1367](https://jira.hl7.org/browse/CDA-1367) - Use proper LOINC code (8693-4) with no translations on Mental Status Observation template.
- [CDA-1381](https://jira.hl7.org/browse/CDA-1381) - Constraint that doseQuantity/@unit and administrationUnitCode SHALL NOT both be present.
- [CDA-1381](https://jira.hl7.org/browse/CDA-1381) - Prevent doseQuantity/@unit and administrationUnitCode/@code from both being present where both are on a template
- [CDA-1429](https://jira.hl7.org/browse/CDA-1429) - Remove Goal Observation value constraint
- [CDA-1430](https://jira.hl7.org/browse/CDA-1430) - Added code constraints to Findings Section
- [CDA-1469](https://jira.hl7.org/browse/CDA-1469) - Updated MentalStatusObservation.value to be from new SNOMED cognitive function value set.
- [CDA-1505](https://jira.hl7.org/browse/CDA-1505) - Patient Generated Document header has the same bindings as US Realm Header for performer functionCode.
- [CDA-1513](https://jira.hl7.org/browse/CDA-1513) - Change the Health Insurance Type binding to be the X12N Insurance Type code system
- [CDA-1526](https://jira.hl7.org/browse/CDA-1526) - Add guidance on @unit in Vital Sign Observation
- [CDA-1627](https://jira.hl7.org/browse/CDA-1627) - Bind Procedure Act Procedure code to US Core Procedure value set.
- [CDA-1637](https://jira.hl7.org/browse/CDA-1637)/[CDA-1638](https://jira.hl7.org/browse/CDA-1638) - Update Discharge Disposition code binding.
- [CDA-1757](https://jira.hl7.org/browse/CDA-1757) - Updated BirthSex template to align with Gender Harmony.
- [CDA-1760](https://jira.hl7.org/browse/CDA-1760) - Changed Smoking Status statusCode to be bound to a value set.
- [CDA-1762](https://jira.hl7.org/browse/CDA-1762) - Update the encompassingEncounter responsibleParty to be SHOULD.
- [CDA-1789](https://jira.hl7.org/browse/CDA-1789) - Provided guidance on using PlannedEncounter template for future encounters.
- [CDA-1793](https://jira.hl7.org/browse/CDA-1793) - Remove Vaccine Clinical Drug value set from Immunization Medication Information template
- [CDA-1797](https://jira.hl7.org/browse/CDA-1797) - Add optional Payers Section to Referral Note
- [CDA-1802](https://jira.hl7.org/browse/CDA-1802) - Change Smoking Status binding from SHALL to MAY
- [CDA-1806](https://jira.hl7.org/browse/CDA-1806) - Updated wording of documentationOf.serviceEvent.code in Operative Note
- [CDA-1873](https://jira.hl7.org/browse/CDA-1873) - Changed Encounter Diagnosis statusCode to be 'completed'.
- [CDA-1922](https://jira.hl7.org/browse/CDA-1922) - NullFlavor is not allowed on confidentialityCode.
- [CDA-1922](https://jira.hl7.org/browse/CDA-1922) - Added @code and disallowed @nullFlavor from confidentialityCode in US Realm Header
- [CDA-2007](https://jira.hl7.org/browse/CDA-2007) - Change Authorization Activity entryRelationship from SHALL to MAY
- [CDA-2108](https://jira.hl7.org/browse/CDA-2108) - Prevent both @code and @nullFlavor from being present on Result Observation
- [CDA-20004](https://jira.hl7.org/browse/CDA-20004) - Remove binding to HL7 Discharge Disposition code system
- [CDA-20005](https://jira.hl7.org/browse/CDA-20005) - Added LOINC Scale chart to description in Result Observation
- [CDA-20008](https://jira.hl7.org/browse/CDA-20008) - Updated ProcedureNote.encompassingEncounter.code binding to requested valueset. Added code 0..1 to USRealmHeader.encompassingEncounter with binding to requested valueset
- [CDA-20014](https://jira.hl7.org/browse/CDA-20014) - Added new problem observation example that includes a SNOMED post-coordinated code.
- [CDA-20022](https://jira.hl7.org/browse/CDA-20022) - Added a page that lists all of the used value sets and used code systems.
- [CDA-20047](https://jira.hl7.org/browse/CDA-20047) - Remove Diagnostic Imaging Report document template and child section and entry templates.  Remove templates with DEPRECATED in title
- [CDA-20053](https://jira.hl7.org/browse/CDA-20053) - Updated languageCode to use valueset AllLanguages in US Realm Header and US Realm Header for Patient Generated Document
- [CDA-20053](https://jira.hl7.org/browse/CDA-20053) - Updated value set binding for languageCode to be AllLanguages.
- [CDA-20076](https://jira.hl7.org/browse/CDA-20076) - Changed value on Severity Observation from SHALL to SHOULD and modified description to match
- [CDA-20085](https://jira.hl7.org/browse/CDA-20085) - Allow Result Observation value to be from SNOMED or LOINC.
- [CDA-20085](https://jira.hl7.org/browse/CDA-20085) - Updated Observation/value to include LOINC codes in Result Observation
- [CDA-20324](https://jira.hl7.org/browse/CDA-20324) - Moved binding to ObservationInterpretation from interpretationCode/@code to interpretationCode.
- [CDA-20444](https://jira.hl7.org/browse/CDA-20444) - Bind Problem Observation code to US Core Condition value set.
- [CDA-20449](https://jira.hl7.org/browse/CDA-20449) - Added Mental Status Section to Progress Note
- [CDA-20449](https://jira.hl7.org/browse/CDA-20449) - Allow Mental Status section in Progress Note document.
- [CDA-20451](https://jira.hl7.org/browse/CDA-20451) - Allow HCPCS to Procedure Note serviceEvent code
- [CDA-20462](https://jira.hl7.org/browse/CDA-20462) - Allow multiple performers in Operative Note
- [CDA-20463](https://jira.hl7.org/browse/CDA-20463) - Allow HCPCS to Planned Procedure code
- [CDA-20478](https://jira.hl7.org/browse/CDA-20478) - Added @code under dosumentationOf.serviceEvent in Operative Note and moved constraint there
- [CDA-20478](https://jira.hl7.org/browse/CDA-20478) / [CDA-1806](https://jira.hl7.org/browse/CDA-1806) - Update OperativeNote/ProcedureNote binding on serviceEvent.
- [CDA-20482](https://jira.hl7.org/browse/CDA-20482) - Extensionless templates are not allowed to have an extension.
- [CDA-20516](https://jira.hl7.org/browse/CDA-20516) - Added specific wording to code defining nullFlavor in designconsiderations.md
- [CDA-20516](https://jira.hl7.org/browse/CDA-20516) - Updated guidance on how to specify when NullFlavors are allowed.
- [CDA-20518](https://jira.hl7.org/browse/CDA-20518) - Allow NDC codes when specifying MedicationInformation.
- [CDA-20543](https://jira.hl7.org/browse/CDA-20543) - Change guidance on Supply repeatNumber
- [CDA-20546](https://jira.hl7.org/browse/CDA-20546) - PQ values require a @unit
- [CDA-20565](https://jira.hl7.org/browse/CDA-20565) - Remove requirement to send R1.1 template Ids
- [CDA-20568](https://jira.hl7.org/browse/CDA-20568) - Add the word DYNAMIC to Encounter Activity binding.
- [CDA-20664](https://jira.hl7.org/browse/CDA-20664) - Remove Entries Optional section templates
- [CDA-20673](https://jira.hl7.org/browse/CDA-20673) - Update Policy Activity to be "SHOULD contain 0..1 address".
- [CDA-20681](https://jira.hl7.org/browse/CDA-20681) - Templates no longer contain a version label in their name (such as V2, V3, etc.)
- [CDA-20687](https://jira.hl7.org/browse/CDA-20687) - Update MedicationActivity doseQuantity guidance.
- [CDA-20693](https://jira.hl7.org/browse/CDA-20693) - typo correction to USCDI guidance
- [CDA-20698](https://jira.hl7.org/browse/CDA-20698) / [CDA-20697](https://jira.hl7.org/browse/CDA-20697) - Add sections to Discharge Summary document.
- [CDA-20711](https://jira.hl7.org/browse/CDA-20711) - update Gender Harmony guidance
- [CDA-20713](https://jira.hl7.org/browse/CDA-20713) - Care Team Member Function value set updated.
- [CDA-20737](https://jira.hl7.org/browse/CDA-20737) - Remove Procedure Activity Act and Procedure Activity Observation templates.
- [CDA-20757](https://jira.hl7.org/browse/CDA-20757), [CDA-20771](https://jira.hl7.org/browse/CDA-20771), [CDA-20758](https://jira.hl7.org/browse/CDA-20758) - Updated USCDI guidance on Coverage Activity and Policy Activity.
- [CDA-20763](https://jira.hl7.org/browse/CDA-20763) - Updated text on Policy Activity Act around coverage information.
- [CDA-20767](https://jira.hl7.org/browse/CDA-20767) - Remove CarePlan intendedRecipient/receivedOrganization/name rule
- [CDA-20769](https://jira.hl7.org/browse/CDA-20769) - Added new Disability Status Observation example that meets the template.
- [CDA-20771](https://jira.hl7.org/browse/CDA-20771) - Added SHOULD effectiveTime to Policy Activity Act.
- [CDA-20772](https://jira.hl7.org/browse/CDA-20772) - Updated RelatedPersonRelationshipandNameParticipant associatedEntity.code to new valueset
- [CDA-20775](https://jira.hl7.org/browse/CDA-20775) - Make USRealmDateTime require timezone offsets; use this template in any other modified templates where it was missed
- [CDA-20784](https://jira.hl7.org/browse/CDA-20784) - Updated the Advance Directive Section, Organizer, and Observation to the latest versions of the templates.
- [CDA-20786](https://jira.hl7.org/browse/CDA-20786) - Set some bound observations to have a type.
- [CDA-20787](https://jira.hl7.org/browse/CDA-20787) - Add guidance on the use of subsections.
- [CDA-20788](https://jira.hl7.org/browse/CDA-20788) - Updated the purpose statement of the Advance Directive Section template.
- [CDA-20789](https://jira.hl7.org/browse/CDA-20789) - Added Advance Directives Section to all Document templates (as MAY if not already there)
- [CDA-20790](https://jira.hl7.org/browse/CDA-20790) - Added guidance on machine readable information to Advance Directive Section
- [CDA-20792](https://jira.hl7.org/browse/CDA-20792) - Added subsection guidance to Procedures and Results sections
- [CDA-20794](https://jira.hl7.org/browse/CDA-20794) - Restrict Immunization.repeatNumber to just a value
- [CDA-20803](https://jira.hl7.org/browse/CDA-20803) - Updated description in ResultOrganizer to include specimen clarification
- [CDA-20807](https://jira.hl7.org/browse/CDA-20807) - Add should rules for Performer, Author, and Informant to Advance Directive Organizer and Observation
- [CDA-20813](https://jira.hl7.org/browse/CDA-20813) - Changed the DeceasedInd and DeceasedTime constraints.
- [CDA-20814](https://jira.hl7.org/browse/CDA-20814) - Updated all UDI templates to allow additional templateIds.
- [CDA-20822](https://jira.hl7.org/browse/CDA-20822) - Updated CareTeamMemberAct to clean up untestable constraints and unnecessary "such that it".
- [CDA-20823](https://jira.hl7.org/browse/CDA-20823) - Updated USRealmAddress Value Sets; used everywhere addr was referenced in IG
- [CDA-20825](https://jira.hl7.org/browse/CDA-20825) - Clean up PlannedSupply product vs device modeling
- [CDA-20827](https://jira.hl7.org/browse/CDA-20827) - Removed slicing from USRealmHeader authenticator
- [CDA-20828](https://jira.hl7.org/browse/CDA-20828) - Changed constraint in Advance Directive Observation to only allow a timestamp instead of an interval
- [CDA-20877](https://jira.hl7.org/browse/CDA-20877) - Removed compatibility comment on vital signs organizer
- [CDA-20878](https://jira.hl7.org/browse/CDA-20878) - Updated LOINC code on Coverage Activity to 52556-8 Payment sources


#### Templates with New Extensions due to Major Change

{% raw %}
<blockquote class="note-to-balloters">
<p>
	The intent of providing a new extension to a template was to indicate when major change had occurred and thus instances of the template that were previously valid might no longer be valid due to changes in the template.  We have tried to identify all templates where major change occurred.  Comments about specific templates that SHOULD have received a new extension or templates that SHOULD NOT have received a new extension are appreciated.
</p>
</blockquote>
{% endraw %}


Templates that received a new extension in this version of the guide have '2024-05-01' as their extension.

##### Document Templates
*US Realm Header* had a number of changes that propagate through the other Document Templates.  Due to this, all document template ids received a new extension.

##### Section Templates
No section templates had major changes and thus they all retain their previous template id.

##### Entry Templates
The following entry templates had major changes and thus their template ids received a new extension:

| Entry | Changes |
| --- | --- |
| [Birth Sex Observation](StructureDefinition-BirthSexObservation.html) | value binding changed |
| [Coverage Activity](StructureDefinition-CoverageActivity.html) | updated LOINC code |
| [Mental Status Observation](StructureDefinition-MentalStatusObservation.html) | updated code and new value binding |
| [Planned Supply](StructureDefinition-PlannedSupply.html) | one form of product SHALL be present |
| [Policy Activity](StructureDefinition-PolicyActivity.html) | effectiveTime is now SHOULD |
| [Problem Concern Act](StructureDefinition-ProblemConcernAct.html) | only one ProblemObservation is allowed |
| [Problem Observation](StructureDefinition-ProblemObservation.html) | value has US-Core value set binding |
| [Procedure Activity Procedure](StructureDefinition-ProcedureActivityProcedure.html) | code has new US-Core binding |
| [Smoking Status - Meaningful Use](StructureDefinition-SmokingStatusMeaningfulUse.html) | statusCode.code bound to new valueset |


---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition, there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** All the examples that are used in this Implementation Guide are available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)


### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Dependency Table

{% include dependency-table.xhtml %}

### Global Profiles Table

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/generalguidance.md

These General Guidance Pages are drawn from C-CDA R2.1 and the C-CDA Companion Guide R4.1 guidance pages. The content has been merged and deduplicated with references and links updated for this StructureDefintion publication. The pages from the Companion Guide covering Document, Section and Entry Level (Representing Discrete Data) guidance are largely unchanged. Some text was made more concise, links and references are updated and in a few cases, text was replaced with links to the same information in the [CDA StructureDefinition Publication]({{site.data.fhir.cda}}/index.html).

### What is CDA?
Clinical Document Architecture (CDA) is the underlying standard that Consolidated Clinical Document Architecture (C-CDA) is derived from. The HL7 CDA is a document markup standard that specifies the structure and semantics of a clinical document (such as a discharge summary, progress note, procedure report) for the purpose of exchange. A CDA document is a defined and complete information object that can include text, images, sounds, and other multimedia content. It can be transferred within a message, and can exist independently, outside the transferring message.

CDA documents are encoded in Extensible Markup Language (XML). They derive their machine processable meaning from the HL7 RIM and use the HL7 Version 3 data types. CDA incorporates concepts from standard coding systems such as Systemized Nomenclature of Medicine Clinical Terms (SNOMED CT) and Logical Observation Identifiers Names and Codes (LOINC).

The CDA specification is richly expressive and flexible and is designed to be broad enough to cover the domain of clinical documents. Templates and implementation guides are used to constrain the CDA specification within a particular implementation and to provide validation rule sets that check conformance to these constraints.

For more detail about CDA, C-CDA’s underlying standard, please see the [CDA Overview]({{site.data.fhir.cda}}/overview.html).

### Templated CDA

CDA can be constrained through creating rules which provide the semantic and syntactic rules for representing data elements. The “templated CDA” approach uses a library of modular CDA template definitions. Templates can be reused across any number of CDA document types, as shown in the following figure. Each template meets a defined purpose. Templates are managed over time through versioning. A template version is a specific set of conformance constraints (rules) designed to meet the template’s purpose.
<img src="templated-cda.png" style="float: none; display: block; margin-left: auto; margin-right: auto;" />

The types of templates defined in this guide are Document, Section, Entry, and Participation and Other:

* Document-level templates: These templates constrain fields in the CDA header, and define containment relationships to CDA sections. For example, a History and Physical document-level template might require that the patient’s name be present, and that the document contain a Physical Exam section.
* Section-level templates: These templates constrain fields in the CDA section, and define containment relationships to CDA entries. For example, a Physical Exam section-level template might require that the section/code be fixed to a particular LOINC code, and that the section contains a Systolic Blood Pressure observation.
* Entry-level templates: These templates constrain the CDA clinical statement model in accordance with real-world observations and acts. For example, a Systolic Blood Pressure entry-level template defines how the CDA Observation class is constrained (how to populate observation/code, how to populate observation/value, etc.) to represent the notion of a systolic blood pressure.
* •	Participation and Other templates: These templates exist to establish a set of constraints that are reused in the CDA document. They are only used within another template, rather than on their own as a complete clinical statement. For example, [US Realm Date and Time (Point in Time)](StructureDefinition-USRealmDateTime.html) includes a set of common constraints for recording time. This template is referenced several times within other templates used in the implementation guide. They reduce the need to repeat constraints in templates that use the common set.

A CDA implementation guide (such as this one) defines templates of these various types specifying them to represent particular use cases and/or data elements.

Regarding implementation, the creator of a CDA instance populates the template identifier (templateId) field to assert conformance to a given template version. On the receiving side, the recipient can then not only test the instance for conformance against the CDA Extensible Markup Language (XML) schema, but also test the instance for conformance against asserted templates, historically, using custom schematron.

StructureDefinition publishing provides inherent validation and versioning without needing to develop custom schematron. However, the validity and reliability of this has not been fully tested and there is wide use of schematron in the industry. This current publication retains the templateIds, as a secondary StructureDefininition.id, but the publication does not rely on it for QA and validation within the specification itself. Tooling is being investigated to support instance validation using inherent processes that can be made available for the industry to leverage in sending and receiving instances.

#### Template Versioning
C-CDA templates are identified with a templateId. The templateId is a two-part identifier that consists of a root that is an Object Identifier (OID) and an optional date extension. The root identifies the named template and the extension identifies the version of that template. Initially C-CDA templates did not include versions so the templateId/@extension attribute was not used.  Some of these templates are still present on C-CDA 3.0.  See [Template Versioning](howtoread.html#template-versioning) for more explanation of the differences in versioning from previous versions of the guide.

#### Open and Closed Templates

In CDA. templates are declared to be either Open or Closed templates. In Open templates, all of the features of the CDA R2 base specification are allowed except as constrained by the templates. Open templates allow HL7 CDA implementers to develop additional structured content not constrained within this guide. HL7 encourages implementers to bring their use cases forward as candidate requirements to be formalized in a subsequent version of the standard to maximize the use of shared semantics.
By contrast, a Closed template specifies everything that is allowed and nothing further may be included. There are only two templates in C-CDA 3.0 that are closed templates. [Estimated Date of Delivery](StructureDefinition-EstimatedDateofDelivery.html) and [Medication Free Text Sig](StructureDefinition-MedicationFreeTextSig.html). Closed templates are indicated by a "sig-closed": constraint.

### Template Conformance

Conformance statements inherited from the pdf publications (C-CDA R2.1 and prior and the Companion Guides) may be  identified with unique identifiers (e.g., CONF:86-7345) produced by the previous publication tooling. These historical identifiers are now present on the “Detailed Description pages” and on the “Description & Constraints” column on the “Formal Views of Profile” and are expected to be removed in a future version of C-CDA.

This StructureDefinition publication of C-CDA adheres to the FHIR Conformance Rules. C-CDA StructureDefinitions define the minimum elements, extensions, vocabularies, and ValueSets that **SHALL** or **SHOULD** be present and constrains the way the elements are used when using the template.

The Template elements consist of **SHALL** (Mandatory), **SHOULD** (Best Practice), and USCDI Requirements elements. **SHALL** elements have a minimum cardinality of 1 (min=1). **SHOULD** elements are identified with a minimum cardinality of 0 (min=0) and a “C” with a constraint (invariant), (e.g. should-NPI (the constraint identifier) with the description “**SHOULD** be NPI”). Additional **SHALL** and **SHOULD** requirements are represented as constraints (invariants) with a severity of error (Mandatory) or warning (Best Practice).
USCDI classes or data elements are flagged with (USCDI) on the CDA element and/or on an entire template and identify data elements required for ONC Health IT Certification.

Terminology Conformance
All terminology constraints are represented as value set or code system bindings in the template. All bound value sets are represented by the name of the value set and this name is a direct hyperlink to the appropriate value set found in [National Library of Medicine’s Value Set Authortiy Center (VSAC)](https://vsac.nlm.nih.gov/valueset/expansions?pr=all) which can also be retrieved as a downloadable package: [Value Set Authority Center(VSAC)C-CDA Value Sets](https://vsac.nlm.nih.gov/download/ccda), in [HL7 Terminology Home (THO)](https://terminology.hl7.org/3.1.0/index.html) or within the US Core Implementation Guide [US Core Terminology]({{site.data.fhir.uscore}}/terminology.html#value-sets). **SHALL** bindings are represented as Required bindings while **SHOULD** and **MAY** bindings are represented as Preferred bindings.

### Context Conduction

CDA establishes a "context" in its header, which generally applies to the entire document but can be overridden in specific sections or entries. This context encompasses various components such as Author, Confidentiality, and Human Language, ensuring that information (like the subject of observations or authorship) remains consistent throughout the document unless explicitly altered. 
Notably:
The CDA Header sets initial context, with certain participants (e.g., Author, Confidentiality) having propagating values applicable across the document unless overridden. CDA participants that have propagating values:

- Author
- Confidentiality
- Data enterer
- Human language
- Informant
- Legal authenticator
- Participant
- Record target

Context components can be overridden at various levels:

- Document Level: Confidentiality and Human Language
- Section Level: Author, Confidentiality, Human Language, Informant, Subject
- Entry Level: Author, Confidentiality, Human Language, Informant, Participant, Subject

Contextual information trickles down from broader ("outer") contexts to more specific ("nested") contexts and can be specifically overridden at each level.
In instances of unknown or imprecise context, overriding with a null value is employed.

The objective of the CDA Context rule is to render practices explicit in relation to the RIM (Reference Information Model), ensuring computerized understanding of document context aligns with human interpretation. This approach maintains coherent information flow and facilitates logical data propagation and override when necessary within nested document components.
### CDA Participations
A CDA participant (e.g., Author, Informant), is an association between an Act and a Role with an Entity playing that Role. Each Entity (in a Role) involved in an Act in a certain way is linked to the Act by one Participation-instance. The kind of involvement in the Act is specified by the Participation.typeCode.

CDA principles when asserting participations include:

- Participation persistence: An object’s participations (and participation time stamps) don’t change just because that object is reused. For instance, authorship of an object doesn’t change just because that object is now included in a summary document.
- Participation evolution: Additional participations (and participation time stamps) can be ascribed to an object over its lifetime. In some cases, an electronic health record (EHR) system will create a new object instead of adding participants to an existing object, such as when an EHR has imported a CCD and the receiving clinician chooses to create a local problem list entry corresponding to a problem in the CCD.
- Device participation: Devices do not participate as legally responsible entities but can participate as authors in some scenarios.

### Assessing the Status of a Clinical Statement

It's essential for a recipient to ascertain the status of the data in a clinical statement, which can encompass various items such as problems, medication administrations, and more. The precise determination hinges upon the combined factors from multiple components of the act, like the statusCode and effectiveTime. 
Key principles to understand when delineating or interpreting the status of a clinical statement are:

Role of Act.statusCode: 

- The Act.statusCode directly indicates the state of the entry. As per the RIM definition, the statusCode mirrors the current state of the activity. For instance, when referencing an Observation, the statusCode represents the status of the observational activity rather than the status of the observed item.

Interplay Between Act.statusCode and Act.moodCode:
- An act in the EVN (event) mood typically signifies a distinct event (like a user observing, listening, or recording actions). Hence, most acts in the EVN mood usually have a statusCode of "completed."
- There are exceptions, such as prolonged observations. In this scenario, the observation in the EVN mood might be "active."
- For an Observation in the RQO (request) mood, the statusCode is usually "active" until the request is finalized. Once done, the statusCode switches to "completed."
- If an Observation is in the GOL (goal) mood, the statusCode often stays "active" provided the observation remains a current goal for the patient.

Relationship Between Act.statusCode and Act.effectiveTime:
- The effectiveTime, sometimes termed the "biologically pertinent time," denotes the moment the act is relevant to the patient. This means while the effectiveTime indicates the medically significant period, the statusCode represents the action's current state.
- To illustrate, for a healthcare provider reviewing a patient's medical history noting a heart attack that took place 5 years prior, the observation's status is "completed," with the effectiveTime being five years in the past.

### Rendering Header Information for Human Presentation
Metadata carried in the header may already be available for rendering from EHRs or other sources external to the document. An example of this would be a doctor using an EHR that already contains the patient’s name, date of birth, current address, and phone number. When a CDA document is rendered within that EHR, those pieces of information may not need to be displayed since they are already known and displayed within the EHR’s user interface.

Good practice recommends that the following be present whenever the document is viewed:
- Document title and document dates
- Service and encounter types and date ranges as appropriate
- Names of all persons along with their roles, participations, participation date ranges, identifiers, address, and telecommunications information
- Names of selected organizations along with their roles, participations, participation date ranges, identifiers, address, and telecommunications information
- Date of birth for recordTarget(s)

In Operative and Procedure Notes, the following information is typically displayed in the EHR and/or rendered directly in the document:

- The performers of the surgery or procedure, including any assistants
- The surgery or procedure performed (serviceEvent)
- The date of the surgery or procedure

HL7 has created a style sheet available for the community to use, as is, or to customize for their vendor’s implementations. The [HL7 CDA style sheet](https://github.com/HL7/cda-core-xsl) is housed in the CDA-core-xsl GitHub repository.

### The Use of Sections for Document Organization in C-CDA

Section templates are open, allowing for the inclusion of subsections to enhance the organization of narrative content. This structured approach may facilitate a more efficient and less cumbersome interpretation of the information. Entries linked to the primary section can also be nested within its relevant subsections. When processing sections in a CDA document, machines should be prepared to handle potential subsection divisions.

To ensure clarity and minimize complexity, it's advisable to limit subsection depth to three levels: a main section followed by up to two subsection layers.

Subsections utilize codes from the LOINC Document Ontology to signify the information's context within them. When designating entries for a particular subsection, a translation of the entry's primary code element can correspond to the LOINC code associated with that subsection. While this method of applying translation to entry.code diverges from typical vocabulary translation practices, it may aid in the systematic categorization of entries, facilitating machine processing in alignment with the intended document structure.

### Narrative Referencing

The C-CDA R3.0 recommends that clinical statements include a link between the narrative (section.text) and coded clinical data (entry). Please see the [Narrative Block]({{site.data.fhir.cda}}/narrative.html) section in the StructureDefinition publication of CDA for implementation details about referencing. Each template contains conformance statements recommending (SHOULD) textReferencing unless explicitly prohibited.

### Unknown and No Known Information
Information technology solutions store and manage data, but sometimes data are not available. An item may be unknown, not relevant, or not computable or measurable, such as where a patient arrives at an emergency department unconscious and with no identification.

Many C-CDA templates will stipulate that a piece of information is required (e.g., via a SHALL conformance verb). However, in most of these cases, the CDA standard provides an “out”, allowing the sender to indicate that the information isn’t known.

Here, we provide guidance on representing unknown information. Further details can be found in the HL7 V3 Data Types Release 1 specification that accompanies the CDA R2 normative standard. However, it should be noted that the focus of Consolidated CDA is on the unambiguous representation of known data, and that in general, the often subtle nuances of unknown information representation are less relevant to the recipient.

Many fields in C-CDA contain a “@nullFlavor” attribute, used to indicate an exceptional value. Some flavors of Null are used to indicate that the known information falls outside of value set binding constraints. Not all uses of the @nullFlavor attribute are associated with a case in which information is unknown. Allowable values for populating the attribute give details about the reason the information is unknown, as shown in the following example.

**nullFlavor Example**

```
<birthTime nullFlavor=”UNK”/> <!--Sender does not know the birthTime, but a proper value is applicable -->
```

Use null flavors for unknown, required, or optional attributes:

| NI | No information. This is the most general and default null flavor. |
| NA | Not applicable. Known to have no proper value (e.g., last menstrual period for a male). |
| UNK | Unknown. A proper value is applicable, but is not known. |
| ASKU | Asked, but not known. Information was sought, but not found (e.g., the patient was asked but did not know). |
| NAV | Temporarily unavailable. The information is not available, but is expected to be available later. |
| NASK | Not asked. The patient was not asked. |
| MSK | There is information on this item available but it has not been provided by the sender due to security, privacy, or other reasons. There may be an alternate mechanism for gaining access to this information. |
| OTH | The actual value is not an element in the value domain of a variable. (e.g., concept not provided by required code system). |

The list above contains those null flavors that are commonly used in clinical documents. For the full list and descriptions, see the nullFlavor vocabulary domain in the CDA R2 normative edition.10.

Any SHALL, SHOULD or MAY conformance statement may use nullFlavor, unless the nullFlavor is explicitly disallowed (e.g., through another conformance statement which includes a SHALL conformance for a vocabulary binding to the @code attribute, or through an explicit SHALL NOT allow use of nullFlavor conformance).

**Attribute Required (nullFlavor not allowed)**

1. *SHALL* contain exactly one [1..1] code (CONF:15407).
  a. This code *SHALL* contain exactly one [1..1] @code="11450-4" Problem List (CodeSystem: LOINC 2.16.840.1.113883.6.1) (CONF:15408).
  or
2. *SHALL* contain exactly one [1..1] *effectiveTime/@value* (CONF:5256).

**Allowed nullFlavors When Element is Required (with xml examples)**

1. *SHALL* contain at least one [1..*] id
2. *SHALL* contain exactly one [1..1] code which SHALL be selected from ValueSet ValueSetName
3. *SHALL* contain exactly one [1..1] effectiveTime

```
<entry>
 <observation classCode="OBS" moodCode="EVN">
  <id nullFlavor="NI"/>
  <code nullFlavor="OTH">
   <originalText>New Grading system</originalText>
  </code>
  <statusCode code="completed"/>
  <effectiveTime nullFlavor="UNK"/>
  <value xsi:type="CD" nullFlavor="OTH">
   <originalText>Spiculated mass grade 5</originalText>
  </value>
 </observation>
</entry>
```

If a sender wants to state that a piece of information is unknown, the following principles apply:

1. If the sender doesn’t know an attribute of an act, that attribute can be null.

**Unknown Medication Example**

1. *SHALL* contain exactly one [1..1] code

```
<entry>
 <text>patient was given a medication but I do not know what it was</text>
 <substanceAdministration moodCode="EVN" classCode="SBADM">
  <consumable>
   <manufacturedProduct>
    <manufacturedLabeledDrug>
     <code nullFlavor="NI"/>
    </manufacturedLabeledDrug>
   </manufacturedProduct>
  </consumable>
 </substanceAdministration>
</entry>
```

2. If the sender doesn’t know if an act occurred, the nullFlavor is on the act (detail could include specific allergy, drug, etc.).

**Unknown Medication Use of Anticoagulant Drug Example**

```
<entry>
 <substanceAdministration moodCode="EVN" classCode="SBADM" nullFlavor="NI">
  <text>I do not know whether or not patient received an anticoagulant drug</text>
  <consumable>
   <manufacturedProduct>
    <manufacturedLabeledDrug>
     <code code="81839001" displayName="anticoagulant drug" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"/>
    </manufacturedLabeledDrug>
   </manufacturedProduct>
  </consumable>
 </substanceAdministration>
</entry>
```

3. If the sender wants to state "no known", a negationInd can be used on the corresponding act (substanceAdministration, Procedure, etc.) Previously, CCD, IHE, and HITSP recommended using specific codes to assert no known content, for example 160244002 No known allergies or 160245001 No current problems or disability. Specific codes are still allowed; however, use of these codes is not recommended. These next examples illustrate nuances of representing information in coded fields when information is a negative assertion, for example it is not the case that the patient has an allergy or it is not the case that a patient takes a medication. The phrases "no known allergies" or "no known medications" are typically associated with this type of negative assertion.

**No Known Medications Example**

```
<entry>
 <substanceAdministration moodCode="EVN" classCode="SBADM" negationInd=”true”>
  <text>No known medications</text>
  <consumable>
   <manufacturedProduct>
    <manufacturedLabeledDrug>
     <code code="410942007" displayName="drug or medication" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"/>
    </manufacturedLabeledDrug>
   </manufacturedProduct>
  </consumable>
 </substanceAdministration>
</entry>
```

**Value Known, Code for Value Not Known**

```
<entry>
 <observation classCode="OBS" moodCode="EVN">
  …
  <value xsi:type="CD" nullFlavor="OTH">
   <originalText>Spiculated mass grade 5</originalText>
  </value>
 </observation>
</entry>
```

**Value Completely Unknown**

```
<entry>
 <observation classCode="OBS" moodCode="EVN">
  …
  <value xsi:type="CD" nullFlavor="UNK"/>
 </observation>
</entry>
```

**Value Known, Code in Required Code System Not Known But Code from Another Code System is Known**

```
<entry>
 <observation classCode="OBS" moodCode="EVN">
  …
  <value xsi:type="CD" nullFlavor="OTH">
   <originalText>Spiculated mass grade 5</originalText>
   <translation code="129742005" displayName="spiculated lesion" codeSystem="2.16.840.1.113883.6.96" codeSystemName="SNOMED CT"/>
  </value>
 </observation>
</entry>
```

#### Constraining Usage of Concepts for Unknown, No Known and Other Data Absent Reasons
Some C-CDA templates are designed to be more specific and eliminate the “out” provided by the CDA standard. When these templates stipulate that a piece of information is required (e.g., via a SHALL conformance verb), the allowable null flavor or data absent reason concepts are constrained as part of the vocabulary binding on the code attribute of the data element.
 
When the information being modeled requires the set of allowable reasons that the data may be absent be constrained along with the allowable concepts for the data itself, this can be accomplished using the following method. The allowable concepts from the nullFlavor codeSystem as well as those needed from the Data Absent Reason codeSystem are incorporated into the value set bound directly to the code attribute of the element in the model that is being constrained.  This allows the modeling for standardized answers to be more precise.  It establishes the full range of allowable answers including the permitted concepts for “missing” information.
 
Binding the value set to the code attribute of the element prevents the use of the nullFlavor attribute in the model and thus avoids the possibility of contradictory information being added into the model.
 
This constraint pattern can be used to clarify when only certain NullFlavor concepts are permitted or when a mix of NullFlavor and DataAbsentReason concepts are allowed in addition to the range of expected data concepts.

### Schema and Schema Extensions
CDA defines a standard schema, based on the HL7 RIM, for all CDA documents. The XML Schema is designed to achieve the intentions of the CDA architecture. Please see section [The "A" in CDA]({{site.data.fhir.cda}}/overview.html) for more information. When there is a need to represent information where there is no suitable representation in the schema, the CDA standard permits extensions to be developed. The HL7 Structured Documents Work Group (SDWG) maintains a complete list of [CDA R2 extensions](https://confluence.hl7.org/display/SD/CDA+Extensions) that are approved for use within the **sdtc** namespace. These extensions exist in the stdc schema. The most current [CDA Schema](https://github.com/HL7/cda-core-2.0) is housed in the HL7 CDA GitHub repository.


### Required Binding Expansions
For any Required binding, any valid expansion of a value set is conformant; any version of the value set used with any version of the needed code systems. If an implementation or dependent IG needs to be more restrictive, then additional constraints must be added, such as adding a specific value set version and or code system version in the binding.


### Clinically Relevant Information Requirements
In all C-CDA Document templates, at least one section SHALL contain clinically relevant information. A document that contains only empty sections (nullFlavor = NI) is unhelpful to providers and fails to meet the essential purpose of conveying meaningful clinical data. Such documents contribute to inefficiencies and frustration in the healthcare process, as they do not provide the necessary information for informed decision-making

### C-CDA Examples
Although this guide contains a lot of examples, the CDA Examples Task Force maintains even more examples.  The [CDA Example Search repository](http://cdasearch.hl7.org) can be used to find examples for specific templates.


---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/howtoread.md

### How To Read Consolidated CDA Implementation Guide
The following document provides guidance to readers of the Consolidated CDA Implementation Guide published using HL7 Structure Definition.  With the switch to representing C-CDA templates using StructureDefinition, the presentation of the templates is different.  Although all the same content is present, it can be found in different places and in different formats.  This guide highlights where all template content can be found.

The Artifact Index/Summary page presents the templates that had been previously located in Volume 2.  The Artifact Summary page lists the Document Templates, the Section Templates, the Entry Templates, and the Other Templates.  As well, there is a listing of all the Examples found in the guide.

C-CDA Templates are represented as Templates in the Implementation Guide.  There are several different ways of viewing a Template.  The most useful tab is the Key Elements Table, but the Differential Table does provide some information and the Snapshot Table presents all the elements present in the template.  The Statistics/References tab shows a summary of elements and a list of templates that are used by the template.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="resource_profile_info_tabs.png"/>
  <figcaption>Figure 1 - Formal Views of Template Content</figcaption>
</figure>
{::options parse_block_html="true" /}
 
#### Template Differentials
All the Templates inherit from either a CDA Clinical Statement structure or from another Template.  The Key Elements Table tab shows all of the changes from the base CDA structure including any changes from a parent Template.  The Differential Table shows *only* the differences between a Template and the parent Template.  See the [Allergy-Intolerance Observation template](StructureDefinition-AllergyIntoleranceObservation.html) for an example of the difference between the two tabs.  To see everything that is specified in a template, looking at the Snapshot Table will show all of the elements.

#### Template Identifier
The Template Identifier is listed as another identifier of the template.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="template_identifier.png"/>
  <figcaption>Figure 2 - Template Identifier</figcaption>
</figure>
{::options parse_block_html="true" /}
 
#### Template Contexts
The Context tables in the pdf publication that list the templates that contain a given template and the templates that are contained by the same template are represented in two different manners.  

The Contained By templates:
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_template_contained_by.png"/>
  <figcaption>Figure 3 – Sample Template Contained By Table</figcaption>
</figure>
{::options parse_block_html="true" /}

are listed in the Usage section of the Template:
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_profile_usage.png"/>
  <figcaption>Figure 4 - Sample Template Usage Section</figcaption>
</figure>
{::options parse_block_html="true" /}


The Contained templates: 
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_template_contains.png"/>
  <figcaption>Figure 5 - Sample Template Contains Table</figcaption>
</figure>
{::options parse_block_html="true" /}

are listed in the Statistics/References tab under the Structures heading:
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_profile_structures.png"/>
  <figcaption>Figure 6 - Sample Template Structures Summary</figcaption>
</figure>
{::options parse_block_html="true" /}

NOTE: The indication of optional or required for contained by and contains is not present in the corresponding template.  This can be seen in Figure 7 where the three templates have “(optional)” while the templates in Figure 8 do not.  This means that sometimes a template may be listed twice in the Contained By or Contains in the pdf publication, (once as required and once as optional) but will only be listed once in the corresponding template documentation.

#### Template Constraints
All the template constraints can be found in two equivalent places in the template listing.  The Key Elements Table tab presents constraints as they affect the underlying structure (Document, Section, Entry, or Other).  Cardinality constraints, fixed value constraints, template constraints, and terminology constraints will all be found in the Differential Table.  Some of the text constraints that affect a specific element can also be found in the Key Elements Table.
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_template_constraint.png"/>
  <figcaption>Figure 7 - Sample Template Constraint Table</figcaption>
</figure>
{::options parse_block_html="true" /}

 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_profile_differential.png"/>
  <figcaption>Figure 8 - Sample Template Key Elements Tab</figcaption>
</figure>
{::options parse_block_html="true" /}

NOTE: For elements that repeat but have been constrained, the Template will be “sliced”, and the constraint will be found on one of the slices.  This applies to fixed value constraints as well as template constraints.

NOTE: If a template inherits constraints from a parent template, e.g., Care Team Member Act inherits from Care Team Organizer, the full constraints will not be present in the Differential Tab of the child template but will be found in in the Snapshot Tab of the child template, or in the Differential Tab of the parent template.

The Detailed Descriptions tab will have all the Template Constraints listed by the specific element being constrained. This is where constraint numbers as found in the pdf publication are asserted.
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_template_constraint_doc.png"/>
  <figcaption>Figure 9 - Sample Template Constraint Documentation</figcaption>
</figure>
{::options parse_block_html="true" /}
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_profile_detailed_desc.png"/>
  <figcaption>Figure 10 - Sample Template Detailed Descriptions</figcaption>
</figure>
{::options parse_block_html="true" /}

#### Template Terminology Bindings
All terminology constraints are represented as value set bindings in the template listing.  All bound value sets are represented by the name of the value set and this name is a hyperlink.  Many of the value sets can be found in National Library of Medicine’s Value Set Authority Center (VSAC) and will require a UMLS login to see the value set content.  SHALL constraints are represented as Required bindings while SHOULD and MAY are represented as Preferred bindings.

 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_template_vocabulary.png"/>
  <figcaption>Figure 11 - Sample Template Constraint Table showing Vocabulary Constraints</figcaption>
</figure>
{::options parse_block_html="true" /}
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_profile_vocabulary.png"/>
  <figcaption>Figure 12 - Sample Template Differential showing Terminology Bindings</figcaption>
</figure>
{::options parse_block_html="true" /}


#### Template References
All template constraints that refer to a separate template (e.g., document templates referencing section or entry templates) are represented as specific Types in the Template.
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="profile_differential_element_types.png"/>
  <figcaption>Figure 13 - Template Differential showing Element Types</figcaption>
</figure>
{::options parse_block_html="true" /}

In Figure 13, there are six entryRelationship slices that refer to other templates and this is shown in the Element Type column.  The Type name is the Template Name with all spaces and punctuation removed, e.g., Medication Supply Order becomes MedicationSupplyOrder.  Each name is a hyperlink to the appropriate template definition.

#### Template Examples
If a template has examples, those will be found listed on the Examples tab of the template.  Each example will be listed with its name which is a hyperlink to the example XML instance.

 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="sample_profile_example.png"/>
  <figcaption>Figure 14 -- Sample Template Example</figcaption>
</figure>
{::options parse_block_html="true" /}

#### Template Versioning
In previous releases of the C-CDA guide, templates were versioned in two ways.  The template templateId would receive a new extension and the name of the template would have "(Vn)" appended to it.  With this release of the C-CDA guide, only the templateId extensions will change.  The names will remain consistent from one release to another and will no longer have "(Vn)" appended to it.  Any templates that did have the Vn in their name have had it removed.

#### Providing Feedback
Feedback on the C-CDA Structured Definition web publication can be made by clicking the “Propose a change” at the bottom of every page.
 
{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:0px" src="propose_a_change.png"/>
  <figcaption>Figure 15 - Propose a Change link</figcaption>
</figure>
{::options parse_block_html="true" /}

Following that link will take the reader to the HL7 JIRA.  On JIRA, clicking on the Create button will allow one to create an issue against the HL7 Software Change Request project.  The component should be set to “C-CDA Templates Clinical Notes”.  A clear summary and description of the issue should be submitted.

---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/index.md

### Introduction

This Consolidated Clinical Document Architecture (C-CDA) guide, in conjunction with the HL7 CDA Release 2 (CDA R2) standard, is to be used for implementing the following CDA documents and header constraints for clinical notes.

Header Constraints:

* <a href="StructureDefinition-USRealmHeader.html">US Realm Header</a>
* <a href="StructureDefinition-USRealmHeaderforPatientGeneratedDocument.html">Patient Generated Document (US Realm Header)</a>

Document Types:

* <a href="StructureDefinition-CarePlan.html">Care Plan</a>
* <a href="StructureDefinition-ConsultationNote.html">Consultation Note</a>
* <a href="StructureDefinition-ContinuityofCareDocumentCCD.html">Continuity of Care Document (CCD)</a>
* <a href="StructureDefinition-DischargeSummary.html">Discharge Summary</a>
* <a href="StructureDefinition-HistoryandPhysical.html">History and Physical (H&P)</a>
* <a href="StructureDefinition-OperativeNote.html">Operative Note</a>
* <a href="StructureDefinition-ProcedureNote.html">Procedure Note</a>
* <a href="StructureDefinition-ProgressNote.html">Progress Note</a>
* <a href="StructureDefinition-ReferralNote.html">Referral Note</a>
* <a href="StructureDefinition-TransferSummary.html">Transfer Summary</a>
* <a href="StructureDefinition-UnstructuredDocument.html">Unstructured Document</a>

Section templates, which help organize content within a document, and entry templates, that represent discrete computable data within sections, are defined in this implementation Guide.

The [Artifact Index page](artifacts.html) lists the C-CDA Templates that have been defined for this IG.

The Guidance pages provide USCDI guidance, call out key information from the underlying CDA standard, provide learnings gleaned from vendors and CDA Implementation-a-thons, and include other improvements added since C-CDA’s inception in 2011. The Guidance was drawn from  C-CDA 2.1 Introduction (Volume 1) Sept 2022 Errata  and  C-CDA 2.1 Companion Guide R4.1 June 2023 Publication and edited to be appropriate for this StructureDefinition publication and has been added to with new versions.

### Background
Consolidated CDA (C-CDA) is a library of CDA templates developed by HL7. It leveraged prior CDA implementation guides developed under the HL7 Health Story Project, Integrating the Healthcare Enterprise (IHE), and the Health Information Technology Standards Panel (HITSP). It harmonized and consolidated the templates into the C-CDA guide. The C-CDA guide was developed within the ONC’s Standards and Interoperability (S&I) Framework to provide a definitive set of harmonized CDA templates for the US Realm.

Since 2017, separate C-CDA Companion Guides were developed to provide supplemental implementer guidance and new templates, initially to meet Meaningful Use criteria, and then with designs and guidance for the USCDI annual data element releases. The C-CDA 2.1 guide has had only errata releases since 2015 and no new design.

### This Project

C-CDA 3.0 merges the C-CDA R2.1 and the C-CDA Companion Guides, adds C-CDA enhancement requests, and incorporates new design and guidance for USCDI V4.  Annual updates will occur to provide design for USCDI releases and to address comments or requests from the US Realm C-CDA community. 

Within HL7, since 2020, an initiative to develop the same underlying publication process technical stack across all HL7 standards has been underway. The intent is to provide the same look and feel, to leverage inherent [validation and versioning](validation.html), to ease annual updates, and to avoid the unwieldy word and pdf publication process. This publication of C-CDA R3.0 is the realization of that intent for the CDA product family.

The guide represents C-CDA templates using HL7 FHIR StructureDefinition. It is built upon the underlying [CDA standard’s structures defined as Logical Models in CDA 2.0 StructureDefinition](https://build.fhir.org/ig/HL7/CDA-core-2.0/). These FHIR Logical models are abstract data structures which have been instantiated into physical CDA templates to be implemented in CDA data exchange. As such, it adheres to the [CDA Release 2.0 standard](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) and remains a CDA-based Implementation Guide (IG). 

<style>
	.important::before {
	  white-space: pre;
	  content: "NOTE\A ";
	  #background-color: yellow;
	  color: red;
	  font-weight: bold;
	}
	.important{
	    margin: 5px;
	    padding: 10px;
	    border-left-style: solid;
	}
</style>
<p class="important">
	This is a C-CDA specification that uses FHIR R5 StructureDefinitions and ElementDefinitions to define its templates.  It does not use any of the FHIR R5 resources nor any of the FHIR R5 General-Purpose Datatypes.  Thus it is based on FHIR R5 but not in a way that FHIR Implementation Guides would be based by profiling FHIR resources.  It is important and relevant to declare the version of FHIR structures that are being used for toolsmiths and others using those structures.
	Further, the specification is generated with the FHIR IG Publisher tooling.  Although the tooling allows for JSON and XML representations of structures, at this time, only XML is allowed for CDA documents.
</p>

### Acknowledgements

This C-CDA guide was developed and produced through the efforts of Health Level Seven (HL7).

The editors appreciate the support and sponsorship of the HL7 Structured Documents Working Group (SDWG), the HL7 Patient Care Work Group, the HL7 Cross Group Projects Work Group, the CDA Management Group, HL7’s Chief Standards Development Officer, and all volunteers and staff associated with the creation of this Implementation Guide.  Much appreciated are the many individual authors from those work groups who contributed to the design and build of C-CDA and CDA Implementation Guides since 2007.
This guide would not have been possible without the support of the [Office of the National Coordinator](https://www.healthit.gov), and the [Federal Electronic Health Record Modernization (FEHRM)](https://www.fehrm.gov).
	
### C-CDA Primary Authors

|Name|Organization|Email|
|Jean Duteau|Dogwood Health Consulting|jean.duteau@dogwoodhealthconsulting.com|
|Benjamin Flessner|Availity|benjamin.flessner@availity.com|
|Brett Marquard|Wave One Associates|brett@waveoneassociates.com|
|Gay Dolin|Namaste Informatics|gdolin@NamasteInformatics.com|
|Rosemary Hofstede|Dogwood Health Consulting|rosemary@duteaudesign.com|


---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/screeningandassessments.md


Clinicians use various terms such as assessments, scales, surveys, and screenings to describe the tools and processes to collect health-related information for assessing a patient’s health-related matter. C-CDA uses the term Screening and Assessments for the process of recording responses and capturing assertions/determinations resulting from this process and these tools. This page documents how Screening and Assessments are used to identify various problems or health concerns and how C-CDA templates record Screenings and Assessments utilizing Social History Observations, Problem Observations, and Assessment Scale observations and its supporting observation to record complex structured evaluations.


### Assessment Screenings

Assessment Screenings can represent a structured evaluation of risk (e.g., PRAPARE, Hunger Vital Sign, AHC-HRSN
screening tool) for any Social Determinants of Health domain such as food, housing, or transportation security. They can also be used for physical health evaluations such as an Apgar score, or Glasgow coma scale.
Assessment Screening responses are represented in C-CDA with the [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) together with [Assessment Scale Supporting observations](StructureDefinition-AssessmentScaleSupportingObservation.html). The
[Social History Observation](StructureDefinition-SocialHistoryObservation.html) is for simple observations made by an individual about a patient's social history status during the course of care.
Both can contribute to the identification of SDOH Problems (Conditions) or Observations or can be the reason for
Service Requests (Planned Procedures) or Procedures.

[Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) and its contained [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) are designed to represent [LOINC Panels](https://loinc.org/panels/) that are
collections of LOINC terms that represent specific sets of information, intended for forms or assessments related to health that are completed by patients and/or providers.

When an Assessment Scale Observation is contained in a Problem Observation, a Social History Observation, a
Procedure, or a Planned Procedure instance that is Social Determinant of Health focused, that Assessment scale
may contain assessment scale observations that represent question and answer pairs from SDOH screening
instruments.

For communicating detailed observations related to an individual’s work information, implementers can consider
utilizing the templates in the [C- CDA 2.1 Supplemental Templates for Occupational Data for Health](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=522) implementation
guide.

SDOH Observations and Survey Screenings and the resultant plans and interventions are foundational towards
improving a person's overall health and wellness when confronted with health problems.

### Specific USCDI Data Elements Represented with Assessment Screening

Systems **SHALL** support representing detailed questions and answers from a formal assessment in the [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) together with [Assessment Scale Supporting observations](StructureDefinition-AssessmentScaleSupportingObservation.html).

Systems **SHALL** support representing a simple question and answer from a formal assessment in the [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) without contained Assessment Scale Supporting Observations. 

Systems **SHALL** support representing a clinical judgement that may be derived from a formal assessment using the [Problem Observation](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.707/expansion) at Observation.value or with [Social History Observation](StructureDefinition-SocialHistoryObservation.html) Observation.value.
- When a Problem observation or Social History Observation is recorded based on a structured screening and assessment, the Assessment Scale Observation should be contained in the Problem Observation or Social History Observation or they should refer to the Assessment Scale Observation using the [Entry Reference Template](StructureDefinition-EntryReference.html).

Specific observations, such as Disability Status Observation, includes a USCDI indicator on the Assessment scale observation to formalize this USCDI requirement. 
The ability for systems to support  [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) together with [Assessment Scale Supporting observations](StructureDefinition-AssessmentScaleSupportingObservation.html) is a USCDI requirement.

#### Alcohol Use

The [Alcohol Use Related Questionnaire Panel Codes](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1585/expansion) contains the LOINC Panel Codes for Alcohol Use Disorder Identification Test - Consumption AUDIT-C and PROMIS short form - alcohol - alcohol use 7a - version 1.0.
This value set is used with [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) together with [Assessment Scale Supporting observations](StructureDefinition-AssessmentScaleSupportingObservation.html) to represent detailed patient questionnaires about alcohol use.

#### Substance Use (Including Alcohol Use)

The [Substance Use](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1015/expansion) is used with [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) without the Assessment Scale Supporting Observation
to represent simple question and answer assessement questions such as, "How often do you have a drink containing alcohol" or "How often have you used any prescription medications just for the feeling, more than prescribed or that were not prescribed for you in past 12 months (TAPS)".

The [Drug Misuse](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.707/expansion) value set is used with [Problem Observation](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.707/expansion) at Observation.value or with [Social History Observation](StructureDefinition-SocialHistoryObservation.html) at Observation.value
to represent conclusions or diagnoses pertaining to drug misuse or abuse.

#### Mental and Cognitive Health

The [Cognitive Health Related Questionnaire Panel Codes](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.979/expansion) contains LOINC panel Codes that represent Mental or Cognitive health screening assessments, such as FACIT, PROMIS and MoCA.
This value set is used with [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) together with [Assessment Scale Supporting observations](StructureDefinition-AssessmentScaleSupportingObservation.html) to represent detailed patient questionnaires about assessing mental or cognitive health.

The [Cognitive Function Clinician Interpretation](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1015/expansion) value set is used with [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) without the Assessment Scale Supporting Observation
to represent simple question and answer assessement questions. Examples are "Cognitive Function Interpretation", that may have a text answer of clinician's assessment and "Memory/recall ability during assessment period" that may have answers such as the ability to recall the current season or the where the person is.

The [Mental Status Observation](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1240.1/expansion) value set is used with [Mental Status Observation](StructureDefinition-MentalStatusObservation.html) to represent an observation about mental status that can come from a broad range of subjective and objective information 
such as Assessment and Screening tools.

#### Functional Status

The [Functional Status Related Questionnaire Panel Codes](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1586/expansion) contains LOINC panel codes that represent functional status questionnaire LOINC panel codes
This value set is used with [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) together with [Assessment Scale Supporting observations](StructureDefinition-AssessmentScaleSupportingObservation.html) to represent detailed patient questionnaires about functional status.

The [Functional Status Observation](StructureDefinition-FunctionalStatusObservation.html) may be used to represent an observation about mental status that can come from a broad range of subjective and objective information such as what may be derived from Assessment and Screening tools.

#### Physical Activity

The [Physical Activity Level](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1068/expansion) value set is used with [Assessment Scale observation](StructureDefinition-AssessmentScaleObservation.html) without the Assessment Scale Supporting Observation
to represent simple question and answer assessement questions such as, "Kinds of physical activity you usually performed while on the job this last year" or "Days per week of moderate to vigorous physical activity".

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="Figure 9 SDOH Assessment and Planning Process.png" alt="Assessment and Planning Process SDOH example"/>
  <figcaption>Assessment and Planning Process SDOH example</figcaption>
</figure>
{::options parse_block_html="true" /}

### Social Determinant of Health Vocabulary Design Notes
#### Value Sets Developed by the Gravity Project

For the SDOH Clinical Care HL7 Implementation Guide, the Gravity project has defined the following value sets
across specific social risk factor domains for problems/health concerns, goals, procedures, service requests and health screening assessments:

- [Social Determinants of Health Conditions Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion)
- [Social Determinants of Health Procedures Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.789/expansion)
- [Social Determinants of Health Goals Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion)
- [Social Determinants of Health Service Requests Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.790/expansion) (Used in the Planned Procedure Template)
- [Social Determinants of Health Screening Assessments And Questions](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.206/expansion)



The Figure below illustrates how the Gravity value sets are grouped for use in the C- CDA Problem Observation
template.

{::options parse_block_html="false" /}
<figure>
  <img style="padding-top:0;padding-bottom:30px" width="800px" src="Figure 8 Example of SDOH Grouping Value set in VSAC (Conditions).png" alt="Example of SDOH Grouping Value set in VSAC (Conditions)"/>
  <figcaption>Example of SDOH Grouping Value set in VSAC (Conditions)</figcaption>
</figure>
{::options parse_block_html="true" /}

#### Other SDOH Value Sets Available for Use

The following value sets are stewarded by the HL7 Patient Care Work Group and were built for the [Multiple Chronic Care Implementation Guide](https://build.fhir.org/ig/HL7/fhir-us-mcc/) for use in the Care Planning process, but they could be used with [Assessment Scale observations](StructureDefinition-AssessmentScaleObservation.html) without contained Assessment Scale Supporting Observations or [Assessment Scale Supporting observations](StructureDefinition-AssessmentScaleSupportingObservation.html) at Observation.code.


<table border="1" cellspacing="0" style="width:100.0%">
    <tbody>
        <tr>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:116.75pt">
                <p><strong>Value Set Name and VSAC Link</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:132.7pt">
                <p><strong>Value Set Clinical Focus</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:153.55pt">
                <p><strong>OID</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:64.9pt">
                <p><strong>Profile Element</strong></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1058/expansion">Caregiver Availability</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of caregiver availability.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1058</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1057/expansion">Caregiver Characteristics</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of caregiver characteristics.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1057</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1082/expansion">Criminal Justice Involvement or Incarceration History</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of criminal justice involvement or incarceration history.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1082</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1048/expansion">Current or Former Occupation</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of current or former occupation.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1048</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1065/expansion">Dependents in Home</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of the number of dependents in home.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1065</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="border-color:#cccccc; height:41.25pt; vertical-align:top; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1030/expansion">English Proficiency</a></p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:132.7pt">
                <p>This set of values addresses terms representing an observation of English proficiency.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1030</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1080/expansion">Experiences of Discrimination</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of an experiences of discrimination.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1080</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1075/expansion">Exposure to Environmental Hazards</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of exposure to environmental hazards.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1075</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1083/expansion">Immigration Status</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of immigration status or citizenship.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1083</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1053/expansion">Income Level</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of an individual or household income level.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1053</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1069/expansion">Leisure Activity Engagement</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of engagement in leisure activities.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1069</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1060/expansion">Living Situation</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of a patient&#39;s living situation/living arrangements.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1060</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1064/expansion">Marital or Spousal Status</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of marital or spousal status.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1064</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:27.75pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1042/expansion">Neglect</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:27.75pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of neglect.</p>
            </td>
            <td style="background-color:#fcfdfd; height:27.75pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1042</p>
            </td>
            <td style="height:27.75pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1068/expansion">Physical Activity Level</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of physical activity level.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1068</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1076/expansion">Unsafe Neighborhood</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation that a patient lives in an unsafe neighborhood.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1076</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1050/expansion">Work Productivity</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of work productivity.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1050</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
    </tbody>
</table>


---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/supportingguidance.md

This Supporting Guidance Page provides guidance aimed at increasing consistency in the way data in C-CDA templates are represented and used across all implementations. The information was derived from learnings gleaned since 2012 from cross vendor C-CDA implementations, C-CDA Implementation-A-Thons and quality review of HIE C-CDAs such as [CareEquality](https://carequality.org/).

This pages provides generalized document, section and entry guidance and additional guidance for specific types of C-CDA documents.

### Document Level Guidance
#### Reusable, Nesting Templates

C-CDA establishes two document header templates. These header templates establish consistent rules for
populating the data elements in a C-CDA document header. Document header elements create context for the
information contained in the body of the document.

The US Realm General Header is used for documents that are authored by clinicians and systems supporting
clinicians, and the US Realm Patient Generated Header is used for documents that are authored by patients and systems supporting patients.


<table
    style="border-collapse:collapse;margin-left:24.01pt" cellspacing="0">
    <tr style="height:37pt">
        <td
            style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >Each document template defined in C-CDA indicates the
                header template that the document is expected to conform to,
                and each MAY include additional header constraints that are
                relevant to the type of clinical note being represented in the document.
                    <b>[BP-028]</b></p></td>
    </tr>
</table>
                        
Additionally, document templates define the sections of content that **SHALL**, **SHOULD**, or **MAY** be present for exchanging clinical notes. Each section is identified with a code that tells the receiving systems the type of information in the section.

Further, the sections define entry templates which **SHALL**, **SHOULD**, or **MAY** be used to represent the information in each section using discrete representations that aid further computer processing of the clinical information in the section.

#### Nested Content and Context Conduction

CDA context is set in the CDA header and applies to the entire document. Context can be overridden at the level of
the section, and/or CDA entry. A document, in a sense, is a contextual wrapper for its contents. Assertions in the
document header are typically applicable to statements made in the body of the document, unless overridden. For
instance, the patient identified in the header is assumed to be the subject of observations described in the body of
the document, unless a different subject is explicitly stated. The author identified in the header is assumed to be
the author of the information in the sections and entries of the document, unless a different author is explicitly
identified on a section or on individual entries. The objective of the CDA context rule is to make these practices
explicit with relationship to the RIM, such that a computer will understand the context of a portion of a document
the same way that a human interprets it.

CDA's approach to context, and the propagation of that context to nested document components, follows these design principles:

- The CDA Header sets context for the entire document. A propagating value specified in the document
    header holds true throughout the document, unless explicitly overridden. This principal applies only
    to designated participations and attributes of the CDA Header that support propagating context
    conduction. Contextual header components (i.e., those that have propagating values) include:
       o Author
       o Confidentiality
       o Data enterer
       o Human language
       o Informant
       o Legal authenticator
       o Participant
       o Record target
- Context components that can be overridden at the level of the document body include:
    o Confidentiality
    o Human language
- Context components that can be overridden at the level of a document section include:
    o Author
    o Confidentiality
    o Human language
    o Informant
    o Subject

- Context components that can be overridden at the level of a CDA entry include:
    o Author
    o Confidentiality
    o Human language
    o Informant
    o Participant
    o Subject
- Context propagates from outer context to nested context. Context that is specified on an outer tag
    holds true for all nested tags, unless overridden on a nested tag. Context specified on a tag within the
    CDA body always overrides context propagated from an outer tag. For instance, the specification of
    authorship at a document section level overrides all authorship propagated from the header. The
    outer context for an entryRelationship component in an entry is the outer entry act. The outer
    context for an entry is the encompassing section. The outer context for a section is the document
    header.
- Context is sometimes known precisely, and is sometimes unknown, such as in the case where a
    document is comprised of a large unparsed narrative block that potentially includes statements that
    contradict outer context. Because CDA context always propagates unless overridden, the
    representation of unknown context is achieved by overriding with a null value.
- To override the Confidentiality at the entry level, an implementation must use Confidentiality see [HL7 Data Security for Privacy](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=354) and HL7 Privacy Consent Directives implementation guides define
for how to override confidentiality context at the entry level.

**Example 4: Section with narrative text and a nullFlavor for the author**

This example explains that the author of the section is not known. Thus the author in the header does not
conduct to be the author of the unparsed narrative information contained in the section.

{% include examplebutton_default.html example="section_narrative_nullFlavor.xml" b_title = "Click Here to See 'Section with narrative and nullFlavor' Example" %}

**Reference:** For additional information on Context Conduction mechanisms in CDA documents,see [CDA Context](https://build.fhir.org/ig/HL7/CDA-core-sd/overview.html#cda-context) in the HL7 CDA R2.0 Structure Definition Publication. 

**Reference:** The [HL7 Data Security for Privacy](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=354) and HL7 Privacy Consent Directives implementation guides define
how to override confidentiality context at the entry level.


#### Structured Header

All CDA documents include a structured header regardless if the document is a CDA document with a structured
structuredBody element (a “structured document”) or a CDA document with a nonXMLBody element (an
“unstructured document”). The structured header permits computer processing (parsing) to occur on its content.

#### Patient

The recordTarget represents the medical record that this document belongs to. In the uncommon case where a
clinical document (such as a group encounter note) is placed into more than one patient chart, more than one
recordTarget participants can be stated. The recordTarget records the administrative and demographic data of
the patient whose health information is described by the clinical document; each recordTarget must contain at
least one patientRole element.

The recordTarget contains many elements that hold core data for interoperability. The table below summarizes
data elements present in the recordTarget.

Patient matching continues to be one of the major challenges for interoperability due to the lack of a universal patient identifier, similar to a Social Security Number, but used for healthcare.


| **Data Element**   | **Data element xPath**    |
| ---- | ------ |
| **First Name**   | /ClinicalDocument/recordTarget/patientRole/patient/name/given[1]  |
| **Last Name**   | /ClinicalDocument/recordTarget/patientRole/patient/name/family  |   
| **Previous Name**   | /ClinicalDocument/recordTarget/patientRole/patient/name/family/@qualifier  |
| **Middle Name**   | /ClinicalDocument/recordTarget/patientRole/patient/name/given[2]  |
| **Suffix**   | /ClinicalDocument/recordTarget/patientRole/patient/name/suffix  |   
| **Administrative Gender**   | /ClinicalDocument/recordTarget/patientRole/patient/administrativeGenderCode  |
| **Birth Sex**   | **Reference:** [Birth Sex](StructureDefinition-BirthSexObservation.html)  |
| **Date of Birth**   | /ClinicalDocument/recordTarget/patientRole/patient/birthTime  |   
| **Race**   | /ClinicalDocument/recordTarget/patientRole/patient/raceCode  |
| **Ethnicity**   | /ClinicalDocument/recordTarget/patientRole/patient/ethnicGroupCode  |
| **Preferred Language (requires preferenceInd="true")**   | /ClinicalDocument/recordTarget/patientRole/patient/languageCommunication<br />/ClinicalDocument/recordTarget/patientRole/patient/languageCommunication/preferenceInd  |   
| **Address**   | /ClinicalDocument/recordTarget/patientRole/addr  |
| **Phone Number**   | /ClinicalDocument/recordTarget/patientRole/telecom  | 
{:.grid}

**Table 10: Patient Data Elements**

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:49pt">
        <td
            style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD include identifiers
                that improve the accuracy of automated patient
                matching mechanisms. <b>[BP-029]</b></p><p
                class="s19"
                style="padding-left: 57pt;text-indent: 0pt;text-align: left;"
                >Note: Testability would require business decisions
                to be made about what type of identifiers improve automated matching.</p></td>
    </tr>
    <tr style="height:26pt">
        <td
            style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHALL include the patient’s
                administrative gender in the demographic information
                of the recordTarget. <b>[CONF-030]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
            style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >When C-CDA Content Creators include birth sex they
                SHALL use the Birth Sex Observation in the Social
                History Section. <b>[CONF-031]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
            style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s80"
                style="padding-left: 41pt;padding-right: 6pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators who choose to include a
                non-null patient address SHOULD follow the
                 guidance in the <a href="https://oncprojectracking.healthit.gov/wiki/pages/viewpage.action?pageId=180486153&amp;preview=/180486153/237306191/Project%20US%40%20FINAL%20Technical%20Specification%20Version%201.0.pdf">
                 Project US@ Technical Specification</a>
                <b>[BP-099]</b>
                  </p></td>
    </tr>
</table>


**Example 5: recordTarget with demographic data**

{% include examplebutton_default.html example="recordTarget_demographic_data.xml" b_title = "Click Here to See 'recordTarget with demographic data' Example" %}


**Example 6: recordTarget including the provider organization context for the clinical documentation**

{% include examplebutton_default.html example="recordTarget_provider_context.xml" b_title = "Click Here to See 'recordTarget with including provider organization context' Example" %}


The CDA Examples Search tool provides useful examples showing the Patient Demographic data elements
represented in a C-CDA document. The examples below show how to include information about a patient’s prior
name or prior address in a C-CDA document. The relevance and pertinence of including this type of information in
an exchange document remains a business decision to be made by organizations engaged in sharing information.

[CDA Header: Patient Demographic Information](https://cdasearch.hl7.org/examples/view/Header/Patient%20Demographic%20Information)

**Example 7: How to represent Patient demographic Information**

{% include examplebutton_default.html example="patient_demographic_data.xml" b_title = "Click Here to See 'Patient Demographic Information' Example" %}


**Example 8: How to represent Patient with Previous Name**

{% include examplebutton_default.html example="patient_previous_names.xml" b_title = "Click Here to See 'Patient with Previous Names' Example" %}


[Previous Name](https://cdasearch.hl7.org/examples/view/Header/Patient%20Previous%20Name)

**Example 9: How to represent Patient with Prior Address**

{% include examplebutton_default.html example="patient_prior_address.xml" b_title = "Click Here to See 'Patient with Prior Address' Example" %}


[Prior Address](http://hl7-c-cda-examples.herokuapp.com/examples/view/Header/Patient%20With%20Prior%20Addresses)

##### @use and @qualifier attributes for Patient name

The US Realm Patient Name template (2.16.840.1.113883.10.20.22.5.1) supports the @use attribute on the name
tag. This template also supports the @qualifier attribute on the given and family tags.

These value sets are available in the C-CDA Value Set Release Package available from the Downloads page of the
[Value Set Authority Center](https://vsac.nlm.nih.gov/download/ccda).

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
          style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >Concepts available for use with the @use
          attribute of the name element SHALL be selected
          from the EntityNameUse value set
          (2.16.840.1.113883.1.11.15913 ).
          <b>[CONF-032]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
          style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >Concepts available for use with the @qualifier
          attribute of the name element SHALL be selected
          from the EntityPersonNamePartQualifier value set
          (2.16.840.1.113883.11.20.9.26 ).
          <b>[CONF-033]</b></p></td>
    </tr>
</table>

**Example 10: Logical display order of name pieces**

(i.e., such that a receiver which only extracts the text and ignores the markup around <given>, <family>, etc. would still display the name in a way a human would interpret correctly).

{% include examplebutton_default.html example="name_display_order.xml" b_title = "Click Here to See 'Name Display Order' Example" %}


#### Representing Multiple Races or Multiple Ethnicities

The recordTarget utilizes two CDA R2 extensions for representing multiple races and multiple ethnicities.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:41pt">
        <td
          style="width:469pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >This patient <b>SHALL </b>contain exactly one
          [1..1] <b>raceCode</b>, which <b>SHALL </b>be
          selected from ValueSet <b>Race Category Excluding
          Nulls </b>urn:oid:2.16.840.1.113883.3.2074.1.1.3
          <b>DYNAMIC </b>[CONF:1198-5322].</p></td>
    </tr>
    <tr style="height:92pt">
        <td
          style="width:469pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 2pt;text-indent: 0pt;text-align: left;"
          >This patient <b>MAY </b>contain zero or more
          [0..*] <b>sdtc:raceCode</b>, which <b>SHALL </b>be
          selected from ValueSet <b>Race
          </b>urn:oid:2.16.840.1.113883.1.11.14914
          <b>DYNAMIC </b>(CONF:1198-7263). Note: The
          sdtc:raceCode is only used to record additional
          values when the patient has indicated multiple
          races or additional race detail beyond the five
          categories required for Meaningful Use Stage 2.
          The prefix sdtc: SHALL be bound to the namespace
          “urn:hl7-org:sdtc”. The use of the namespace
          provides a necessary extension to CDA R2 for the
          use of the additional raceCode elements. a. If
          sdtc:raceCode is present, then the patient
          <b>SHALL </b>contain [1..1] raceCode
          [CONF:1198-31347].</p></td>
    </tr>
    <tr style="height:38pt">
        <td
          style="width:469pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
          >This patient <b>SHALL </b>contain exactly one
          [1..1] <b>ethnicGroupCode</b>, which <b>SHALL
          </b>be selected from ValueSet <b>Ethnicity </b> <span class="s19"
          >urn:oid:2.16.840.1.114222.4.11.837 </span> <b>DYNAMIC </b>
          <span class="s19"
          >[CONF:1198-5323].</span></p></td>
    </tr>
    <tr style="height:37pt">
        <td
          style="width:469pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >This patient MAY contain zero or more [0..*]
          sdtc:ethnicGroupCode, which <b>SHALL </b>be
          selected from ValueSet Detailed Ethnicity
          urn:oid:2.16.840.1.114222.4.11.877 DYNAMIC
          (CONF:1198-32901).</p></td>
    </tr>
</table>

#### Patient Identifiers

Patient identifiers are included in a C-CDA within the patientRole structure of the recordTarget. The @extension
attribute of the id tag holds the identifier. The @root attribute holds an OID associated with the assigning
authority of the identifier. The @assigningAuthorityName attribute holds the name of the assigning authority.
Many organizations that assign trusted identifiers exist today and have registered OIDs to support exchange of the
identifiers they assign. The table below includes some examples.

| **Assigning Authority Name**   | **Assigning Authority OID identifier**    |
| ---- | ------ |
| **U.S. Social Security Administration**   | 2.16.840.1.113883.4.1  |
| **Driver’s license issuing authority**   | 2.16.840.1.113883.12.333  |   
| **DT.org PATIENT (DirectTrust assigned identity for Consumer entity)**   | 1.3.6.1.4.1.41179.2.4  |
{:.grid}
**Table 11: Patient Identifiers**

**Example 11: How to represent a social security number (SSN)**

{% include examplebutton_default.html example="social_security_number.xml" b_title = "Click Here to See 'Social Security Number' Example" %}

Some systems may collect a patient’s Social Security number but organizational business rules prohibit distribution
of the full number and require that all but the final four digits of the identifier to be masked when distributing this
information to data sharing partners.

<table
	style="border-collapse:collapse;margin-left:24.01pt"
	cellspacing="0">
	<tr style="height:26pt">
	    <td
	      style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
	      bgcolor="#C5D9F0"><p class="s19"
	      style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
	      >Content Consumers SHALL NOT treat id elements that
	include a nullFlavor attribute as globally unique
	identifiers. <b>[BP-034]</b></p></td>
	</tr>
</table>

**Example 12: How to represent a social security number (SSN) that has been masked to show only the last four digits**

{% include examplebutton_default.html example="social_security_number_masked.xml" b_title = "Click Here to See 'Masked Social Security Number' Example" %}


#### recordTarget Provider Organization

While the recordTarget represents the medical record that this document belongs to, the providerOrganization
within the recordTarget represents the provider organization to which the medical record belongs.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:32pt">
        <td
          style="width:467pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 40pt;padding-right: 4pt;text-indent: 0pt;line-height: 107%;text-align: left;"
          >C-CDA Content Creators SHOULD populate the
          providerOrganization within the recordTarget when
          the document represents information from a
          provider’s medical record system.
          <b>[CONF-035]</b></p></td>
    </tr>
    <tr style="height:45pt">
        <td
          style="width:467pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 40pt;padding-right: 4pt;text-indent: 0pt;line-height: 107%;text-align: left;"
          >C-CDA Content Creators SHOULD include an
          identifier for the provider organization in the
          id/@extension attribute and SHOULD identify the
          assigning authority for the identifier using a
          globally unique identifier (GUID or OID) in the
          id/@root attribute. <b>[CONF-036]</b></p></td>
    </tr>
</table>



#### Authors Versus Performers

CDA includes structures to record the author of information, and separately, the performer of a service. It is
important for implementers to avoid recording a performer as an author, if that performer was not the individual
who authored content.

A performer participant represents a clinician who actually and principally carried out a service. A performer
participation indicated at one location in a document does not conduct throughout the document and must be
repeated at each entry to indicate involvement. For example, the performer indicated in the serviceEvent in the
CDA header is not automatically implied to be the performer in procedures or medication activities represented by
the entries in the document. An author represents the human or machine that authored content. Authors listed in
the header are responsible for all content in the document, while authors recorded in a section or entry are only
responsible for content within that structure and override the author in the header. Section authorship applies to
the full content of a section, including both the narrative block and any entries. Entry authorship applies only to the specific entry.

One example where confusion between these roles might arise for implementers is related to quality
measurement use cases, which require clinical documentation to indicate who diagnosed a patient’s condition and
when a clinician made or re-confirmed the diagnosis. The provider who documents the diagnosis (data enterer or
author) may not be the provider who makes the diagnosis (performer).

The Author Participation template (2.16.840.1.113883.10.20.22.4.119) is used to explicitly indicate an Author in a
section or entry. The template provides conformance rules for representing the author and author.time elements
associated with individual entries. The HL7 Basic Provenance project also developed additional guidance on
sharing the Author in the Provenance - [Provenance - Author Participation](StructureDefinition-ProvenanceAuthorParticipation.html).

The C-CDA specification requires the following:

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:32pt">
            <td
              style="width:467pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
              bgcolor="#C5D9F0"><p class="s19"
              style="padding-left: 40pt;padding-right: 4pt;text-indent: 0pt;line-height: 107%;text-align: left;"
              >1. <b>SHALL </b><span class="s19">contain exactly one [1..1]
        </span><b>templateId </b><span class="s19">(CONF:1098-32017)
            such that it</span></p><p class="s31"
              style="padding-top: 5pt;padding-left: 85pt;padding-right: 14pt;text-indent: -9pt;text-align: left;"
              ><b>a. SHALL </b><span class="s19">contain exactly one
              ["..1] </span><b>@root</b><span class="s19"
              >=&quot;2.16.840.1.113883.10”20.22.4.119&quot;
              (CONF:1098- 32018).</span></p><p class="s31"
        style="padding-top: 6pt;padding-left: 51pt;text-indent: -9pt;text-align: left;"
        bgcolor="#C5D9F0">2. <b>SHALL </b><span class="s19">contain exactly one [1..1]
        </span><b>time </b><span class="s19"
        >(CONF:1098-31471).</span></p><p class="s31"
        style="padding-top: 6pt;padding-left: 51pt;text-indent: -9pt;text-align: left;"
        bgcolor="#C5D9F0">3. <b>SHALL </b><span class="s19">contain exactly one [1..1]
        </span><b>assignedAuthor </b><span class="s19"
            >(CONF:1098-31472).</span></p><p class="s19"
              style="padding-top: 6pt;padding-left: 82pt;text-indent: -9pt;text-align: left;"
              >a. This assignedAuthor <b>SHALL </b>contain at least
              one [1..*] <b>id </b>(CONF:1098-31473).</p><br/><p class="s19"
            style="padding-top: 5pt;padding-left: 40pt;padding-right: 3pt;text-indent: 1pt;text-align: left;"
            >Note: This id may be set equal to (a pointer to) an
            id on a participant elsewhere in the document
            (header or entries) or a new author participant can
            be described here. If the id is pointing to a
            participant already described elsewhere in the
            document, assignedAuthor/id is sufficient to
            identify this participant and none of the remaining
            details of assignedAuthor are required to be set.
            Application Software must be responsible for
            resolving the identifier back to its original object
            and then rendering the information in the correct
            place in the containing section&#39;s narrative
            text. This id must be a pointer to another author
            participant.</p><p class="s19"
            style="padding-top: 6pt;padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
            >If the id isn&#39;t referencing an author
            described elsewhere in the document, then the author
            components required in US Realm Header are required
            here as well (CONF:1098-32628).</p><p class="s19"
            style="padding-left: 90pt;padding-right: 3pt;text-indent: 0pt;text-align: left;"
            >This assignedAuthor SHOULD contain zero or one [0..1] code, 
            which <b>SHOULD </b> be selected from ValueSet <b>Healthcare 
            Provider Taxonomy (HIPAA) </b> 
            urn:oid:2.16.840.1.114222.4.11.1066 <b>DYNAMIC </b> 
            (CONF:1098-31671). i. If the content is patient authored 
            the code <b>SHOULD </b>be selected
            from Personal And Legal Relationship Role Type
            (2.16.840.1.113883.11.20.12.1)
            (CONF:1098-32315).</p><p class="s19"
            style="padding-left: 108pt;text-indent: 0pt;text-align: left;"
            >i. The representedOrganization, if present, <b>MAY </b> contain 
            zero or more [0..*] <b>id </b>(CONF:1098-31478).</p><p class="s19"
            style="padding-left: 108pt;text-indent: 0pt;text-align: left;"
            >ii. The representedOrganization, if present, <b>MAY </b> contain zero 
            or more [0..*] <b>name </b>(CONF:1098-31479).</p><p class="s19"
            style="padding-left: 108pt;text-indent: 0pt;text-align: left;"
            >The representedOrganization, if present, <b>MAY </b> contain zero 
            or more [0..*] <b>telecom </b>(CONF:1098-31480).</p><p class="s19"
            style="padding-left: 108pt;text-indent: 0pt;text-align: left;"
            >The representedOrganization, if present, <b>MAY </b> contain zero 
            or more [0..*] <b>addr </b>(CONF:1098-31481).</p></td>
    </tr>
</table>


**Author Participation**

Inclusion of an entry-level author is allowed in open entry templates in C-CDA where use of entry-level authors has
not explicitly been prohibited. Its use is required on only one entry template, the [Handoff Communication Participants template](StructureDefinition-HandoffCommunicationParticipants.html).

[Basic Provenance](https://confluence.hl7.org/display/SEC/Basic+Provenance+Implementation+Guide)

[Author Participation](StructureDefinition-AuthorParticipation.html)

<table
    style="border-collapse:collapse;margin-left:18.61pt"
    cellspacing="0">
    <tr style="height:28pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 33pt;padding-right: 10pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators MAY explicitly indicate the
                performer for observations and acts, not just the
                author who documents those activities.
                  <b>[BP-038]</b></p></td>
    </tr>
</table>

#### Identifying Practitioners

The example below shows how to identify a practitioner playing the role of author, performer or other roles such
as authenticator and legal authenticator. It shows how to represent the provider’s National Provider Identifier (NPI)
number and his or her Direct Address. It also shows how to represent a provider Organization’s NPI number and
Direct Address. It includes how to indicate the preferred telecom addresses for various forms of communication.

**Example 13: How to represent a provider and the provider’s organization in the role of author**

This representation pattern is applicable for other roles such as performer, authenticator, legal
authenticator, etc. The example shows how to represent NPI information for the provider and for the
provider organization. It also shows how to represent Direct address information and how to indicate the
preferred telecom address to use.

{% include examplebutton_default.html example="provider_organization.xml" b_title = "Click Here to See 'Provider and Provider Organization' Example" %}


If a provider’s NPI number is not known, it can be represented using a nullFlavor of UNK. However, is it important
to note the id’s populated with a nullFlavor cannot be used as a globally unique identifier.

**Example 14: Provider with an unknown NPI number.**

{% include examplebutton_default.html example="provider_unknown_npi.xml" b_title = "Click Here to See 'Provider with unknown NPI' Example" %}


#### Custodian

Every CDA document has exactly one custodian. The custodian represents the organization who is in charge of
maintaining the document. The custodian is the steward that is entrusted with the care of the document. The
custodian participation satisfies the CDA definition of Stewardship.

#### Care Team Members

Recommendations for care team member representation in the header of documents are included below. This
guidance aims to explain the options available for representation of care team members and clarify which care
team members belong in the available header structures.

Implementers can help reduce variability in the representation of care team members by adopting these
recommendations.

This guide includes representation of care team members in a care team section template with structured
entries. The care team section documents care team members involved in support of care provision and
coordination for the patient. Business rules are used to determine which care team members are involved in the
encounter or services represented and documented in the header. Care team members established in the header
should be included in the care team section template as well as any others who are relevant to the patient’s care.

**Reference:** [Care Team Organizer](StructureDefinition-CareTeamOrganizer.html)

Because of the variability of how care team members are represented in the header, and because there is a lack of
normative guidance on which header items must be rendered, it is recommended that receiving systems should
render ALL the participants in the header, rather than only rendering participants of a particular type. The [HL7 CDA style sheet](https://github.com/HL7/cda-core-xsl) supports complete participant rendering.

The term “care team member” encompasses any participant in the care of a patient. A patient’s care team may
include individuals providing support to the patient, such as family members or caregivers, as well as physician
providers and non-physician providers, including nurses, social workers, behavioral health specialists, community-
based providers, technicians, and assistants. In fact, a patient may have more than one care team. Different care
teams exist for different purposes and at different times.

When exchanging information about a care team member, it is recommended to capture the name, identification
number, and contact information, along with codes to indicate the type of provider and the role they play on
the patient’s care team. These details help to distinguish care team members from different care settings and
helps clarify who is involved in the patient’s care and in what ways.

Within CDA, care team members are represented as participants in elements of the document header and may be
associated with the patient (i.e. guardian), the clinical encounter, and/or service event(s) detailed in the document,
and the document itself. Applicable header elements for documenting care team members from Chapter 1.1 of the
C- CDA Implementation Guide are described in the following table.


| **Participant**   | **Description**    |
| ---- | ------ |
| **documentationOf/<br />serviceEvent/<br />performer**   | Care team member who performs the service event detailed in the document.<br />Examples: PCP, surgeon, consulting physician  |
| **encompassingEncounter/<br />responsibleParty**   | Care team member who is responsible for the patient encounter described in the document.<br />Examples: PCP, surgeon, consulting physician, home health nurse  |
| **recordTarget**   | The patient, his or herself, is considered a member of the Care team.  |
| **author**   | Care team member who documents events included in the documentation of the encounter or documentation of the provision of care over time.<br />Example: PCP, surgeon, consulting physician, home health nurse  |
| **custodian**   |  The steward of the document is likely an organization with a role on the patient’s care team, although not necessarily.<br />Example: PCP practice, Hospital, home health agency, HIE |
| **legalAuthenticator**   | Care team member who authenticates content contained in the document and accepts legal responsibility.<br />Examples: PCP, consulting physician, attending physician  |
| **authenticator**   | Care team member who authenticates content contained in the document.<br />Examples: PCP, consulting physician, attending physician  |
| **informationRecipient**   | Care team member who the document is intended for.<br />Examples: PCP, caregiver, consulting physician  |
| **participant**   | Other supporting care team members associated with the patient.<br />Examples: Caregiver, family member, emergency contact  |
{:.grid}
**Table 12: Header Elements for Care Team Members**

In the header of an Encounter Summary, a care team member may be documented as fulfilling more than one
responsibility. For example, a consulting physician who sees a patient in a clinical encounter may be:

1. the author of the Consultation Note;
2. the responsible party for the Encounter (rendering physician); or
3. the authenticator (physician attesting to the human readable content in the document).

The physician also may be the person who legally authenticates the information contained in the document. In this
example, the consulting physician is participating as the encompassingEncounter/responsibleParty, the author, the
authenticator and the legalAuthenticator.

In the header of a Patient Summary, it is most common to see care team members identified in the
documentationOf/serviceEvent as performers who were involved in the provision of care for the patient during the
range of time covered by the summary. Again, depending on the use case behind how the Patient Summary is
generated, care team members also may be documented in other roles such as the author, the authenticator and
the legalAuthenticator.

Semantically, the actRelationships hold the key data elements for documenting Care Team members in the header.
These are the data elements that tell who was responsible for the patient encounter and who was responsible for
performing care services.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 39pt;text-indent: 0pt;text-align: left;"
                >For Encounter Summary documents, C-CDA Content
                Creators SHALL document the provider who is
                responsible for the encounter in the
                componentOf/encompassingEncounter/responsibleParty.
                  <b>[BP-039]</b></p></td>
    </tr>
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 39pt;padding-right: 5pt;text-indent: 0pt;text-align: left;"
                >For Patient Summary documents, C-CDA Content
                Creators SHALL document providers who played the
                role of Primary Care Provider for the patient during
                the range of time covered in the summary using</p><p
                class="s19"
                style="padding-left: 39pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
                >the documentationOf/serviceEvent/performer.
                  <b>[BP-040]</b></p></td>
    </tr>
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 39pt;padding-right: 5pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHALL populate the
                functionCode element with the provider’s or person’s
                role on the patient’s care team. Coded concepts for
                the functionCode SHALL be selected from the
                Care</p><p class="s19"
                style="padding-left: 39pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
                >Team Member Function value set
                (2.16.840.1.113762.1.4.1099.30).
            <b>[BP-041]</b></p></td>
    </tr>
</table>


#### sdtc:signatureText in Authenticator and legalAuthenticator

Sharing clinical documents with payers is one use case for C-CDA. To meet the needs of this use case,
document authentication and signing of C-CDA documents guidance is provided.

The legalAuthenticator is recorded in ClinicalDocument.legalAuthenticator and represents a participant who has
legally authenticated the document. Authenticators are recorded in ClinicalDocument.authenticator, and each
authenticator represents a participant who has attested to the accuracy of the document, but who does not have
privileges to legally authenticate the document. An example would be a resident physician who sees a patient and
dictates a note and signs it. Later an attending physician may sign it who would be reprensented by the legalAuthenticator participant.

Additional Guidance is in the following table:

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:92pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 5pt;text-indent: 0pt;text-align: left;"
                >All documents SHALL have a <i>legalAuthenticator.
                </i>In the case of generated summary documents,
                institutions may meet the requirement for a Legal
                Authenticator by extending the practice of
                maintaining a “Signature on File”. The person,
                entity, organization, role, etc. indicated is
                responsible for the contents of the note where it is
                understood that this Legal Authenticator is not an
                author of the document. Policy for determining who
                is responsible for legal authentication of the
                summary document rests with the originating
                organization. In real-world exchange, organizations
                and roles are being used as legalAuthenticators;
                this is consistent with the CDA base standard.
                  <b>[AIGEX-HD4]</b></p></td>
    </tr>
    <tr style="height:32pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 3pt;text-indent: 0pt;text-align: left;"
                >All documents that contain
                  <i>sdtc:signatureText</i>, SHALL conform to the
                HL7 Digital Signatures and Delegation of Rights
                Implementation Guide R1<i>.
                </i><b>[AIGEX-HD7]</b></p></td>
    </tr>
</table>

The HL7 Digital Signatures and Delegation of Rights Implementation Guide R1 defines the standards for [digitally
signing C-CDA documents](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=375).

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators MAY include the
                sdtc:signatureText extension for Authenticators and
                LegalAuthenticators. <b>[BP-042]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Consumers MAY render certificate
                information associated with digital signed C-CDA
                Documents when rendering the document.
                  <b>[BP-043]</b></p></td>
    </tr>
</table>

#### Context of Care

Two common use cases for C-CDA are exchanging Patient Summary Dcouments and Exchanging Encounter Summary Documents.

In a Patient Summary, the documentationOf/serviceEvent holds the key information about the
range of time covered by the document and the key providers involved in the provision of the summarized care.

In an Encounter Summary, the header needs to capture the context of care for a particular encounter via the encompasssingEncounter.

For more information and Guidance see [Concise Consolidated CDA: Deploying Encounter Summary CDA Documents with Clinical Notes ](https://www.commonwellalliance.org/wp-content/uploads/2019/01/Improve-Joint-Document-Content-Whitepaper.pdf).

#### Encompassing Encounter

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:49pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >In an Encounter Summary, C-CDA Content Creators
          SHALL populate the
          encompassingEncounter/effectiveTime and the
          encompassingEncounter/location/healthCareFacility/serviceProviderOrganization
          and the</p><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
          >encompassingEncounter/responsibleParty/assignedEntity.
          <b>[CONF-044]</b></p></td>
    </tr>
</table>

#### Service Events

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >In an Encounter Summary, C-CDA Content Creators
          MAY populate the documentationOf/serviceEvent,
          including the serviceEvent/effectiveTime,
          serviceEvent/code, and serviceEvent/performer(s).
          <b>[BP-045]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >In a Patient Summary, C-CDA Content Creators
          SHALL populate the documentationOf/serviceEvent
          based on conformance requirements of the C-CDA
          specification for CCD documents.
          <b>[CONF-046]</b></p></td>
    </tr>
</table>

#### Orders Fulfilled

If an Encounter occurred as a result of a previously placed order (e.g., a visit to perform an MRI), the id of that
order should be provided as context for the Encounter.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >In an Encounter Summary, C-CDA Content Creators
          SHOULD populate the infulfillmentOf/order and the
          infulfillmentOf/order/id element where the
          order/id references the id of a previously placed
          order.</p><p class="s31"
          style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
          ><b>[BP-047]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >The Order Fulfilled area of the header MAY carry
          information about fulfilled orders, rereferrals or
          other requests that have been fulfilled.
          <b>[BP-048]</b></p></td>
    </tr>
</table>

#### Related Parent Document

The ParentDocument represents the source of a document revision, addendum, or transformation. The
relatedDocument/parentDocument/id element is a mechanism used to link a revised, addendum, or transformed
document to its original source document. There are many situations where a document may be updated. For
example, a pending laboratory result or a missing note may trigger an update. The base CDA standard provides this
mechanism to replace or append a previously sent document through the parentDocument relationship.

C-CDA Content Creators cannot know with certainty what documents a Content Consumer has previously stored.
Therefore, it always is preferable for Content Creators to send a complete document that replaces a prior
document rather than sending an addendum to a prior document. Indicate the parent document is being
replaced by using a replaceRelationship type of RPLC.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators SHOULD populate the ClinicalDocument/relatedDocument using
          @typeCode="RPLC" when a document replaces a prior document.</p><p class="s31"
          style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
          ><b>[BP-049]</b></p></td>
    </tr>
</table>

**Example 15: Replacement Discharge Summary Document with Hospital Course Added**

{% include examplebutton_default.html example="replacement_document.xml" b_title = "Click Here to See 'Replacment Document' Example" %}


#### C-CDA Document Templates

While all C-CDA documents share a common US Realm Header template, the C-CDA implementation guide
defines distinct types of document templates for exchanging different types of clinical notes.

Document-level templates describe the purpose and rules for constructing a conforming CDA document.
Document templates include constraints on the CDA header and indicate contained section-level templates.

Each document-level template contains the following information:

- Scope and intended use of the document type
- Description and explanatory narrative
- Template metadata ( _e.g.,_ templateId)
- Header constraints ( _e.g._ , document type, template id, participants)
- Required and optional section-level templates

Templates for structured documents (those that include a structuredBody) also define required and optional
section-level templates.

All section-level templates include human readable narrative that conveys the information in that section. CDA
calls this the Narrative Block. Each section-level template also includes:

- Scope and intended use within a document
- Description and explanatory narrative
- Template metadata ( _e.g.,_ templateId)

The section may also define required and optional entry-level templates. Entry-level templates are structures for
representing the information in the Narrative Block using machine representations that facilitates computerized
information processing.

The table below describes the various document types defined by C-CDA for use in representing clinical notes
as structured documents that facilitate digital information exchange.


| **Document-Level Templates for Representing Clinical Notes as Structured Documents**   | **Description**    |
| ---- | ------ |
| **Care Plan**   | A Care Plan (including Home Health Plan of Care [HHPoC]) is a consensus-driven dynamic plan that represents a patient’s and Care Team Members’ prioritized concerns, goals, and planned interventions.<br />The CDA Care Plan represents an instance of this dynamic Care Plan at a point in time. The CDA document itself is NOT dynamic.  |
| **Consultation Note**   | The Consultation Note is generated by a request from a clinician for an opinion or advice from another clinician.  |
| **Continuity of Care Document (CCD)**   | The Continuity of Care Document (CCD) represents a core data set of the most relevant administrative, demographic, and clinical information facts about a patient's healthcare, covering one or more healthcare encounters. It provides a means for one healthcare practitioner, system, or setting to aggregate all of the pertinent data about a patient and forward it to another to support the continuity of care.  |
| **Discharge Summary**   | The Discharge Summary is a document which synopsizes a patient's admission to a hospital, LTPAC provider, or other setting. It provides information for the continuation of care following discharge.  |
| **History and Physical**   | A History and Physical (H&P) Note is a medical report that documents the current and past conditions of the patient. It contains essential information that helps determine an individual's health status.  |
| **Operative Note**   | The Operative Note is a frequently used type of procedure note with specific requirements set forth by regulatory agencies. The Operative Note is created immediately following a surgical or other high-risk procedure. It records the pre- and post-surgical diagnosis, pertinent events of the procedure, as well as the condition of the patient following the procedure.  |
| **Progress Note**   | This template represents a patient’s clinical status during a hospitalization, outpatient visit, treatment with a LTPAC provider, or other healthcare encounter.  |
| **Procedure Note**   | This template encompasses many types of non-operative procedures including interventional cardiology, gastrointestinal endoscopy, osteopathic manipulation, and many other specialty fields. Procedure Notes are differentiated from Operative Notes because they do not involve incision or excision as the primary act.  |
| **Referral Note**   | A Referral Note communicates pertinent information from a provider who is requesting services of another provider of clinical or non-clinical services.  |
| **Transfer Summary**   | The Transfer Summary standardizes critical information for exchange of information between providers of care when a patient moves between health care settings.  |
{:.grid}
**Table 13: C-CDA Document-Level Templates for Representing Clinical Notes as Structured Documents**

The table below describes the document template defined by C-CDA for use in representing clinical notes as
an unstructured document that facilitates digital information exchange.

| **Document Templates for Unstructured Clinical Notes**   | **Description**    |
| ---- | ------ |
| **Unstructured Document**   | An Unstructured Document (UD) document type can<br />(1) include unstructured content, such as a graphic, directly in a text element with a mediaType attribute, or<br />(2) reference a single document file, such as a word-processing document using a text/reference element.  |
{:.grid}
**Table 14: Document Templates of Unstructured Clinical Notes**

The C-CDA Unstructured Document template defines a C-CDA document with a structured header and a non-XML body. This template is used to convey information as an embedded object or referenced file. It may be
appropriate for use cases where the exchange of clinical information does not require structured representation of
the content. Simply having the structured header information may be beneficial for information exchange.

When the content to be exchanged does not have structured document templates defined in C-CDA, such as for
Laboratory Report Narrative or Pathology Report Narrative, the Unstructured Document template can be used to
represent the clinical note information.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:49pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators MAY support the Unstructured
                Document template for representing clinical note
                types when the type of clinical note to be exchanged
                does not have an appropriate structured document
                template or when it is not possible for the C-CDA
                Content Creator to represent the clinical note 
                information using a structured document template. <b>[BP-050]</b></p></td>
    </tr>
</table>

Each distinct document template defines the specific code that is used to identify that document type.  Since the ClinicalDocument.code is defined as a CE, it allows for translation codes to also be specified.  These translation codes can provide more details about the document type.

#### Section Structure by Document Type

The following tables describe the required and optional section templates for each document type defined in C-CDA. They include sections that support best practices for representing data for exchange such as Patient Goals and Health Concerns.

<table
    style="border-collapse:collapse;margin-left:24.01pt" cellspacing="0">
    <tr style="height:32pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 45pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
                >Transition of Care C-CDA Documents SHALL include a Health
                Concerns section and a Goals Section.</p><p class="s31"
                style="padding-left: 45pt;text-indent: 0pt;text-align: left;"
                ><b>[CONF-051]</b></p></td>
    </tr>
</table>

#### Care Plan: Document Template

A Care Plan is a consensus-driven dynamic plan that represents a
patient’s and Care Team Members’ prioritized concerns, goals, and planned interventions. It serves as a blueprint
shared by all Care Team Members (including the patient, their caregivers and providers), to guide the patient’s
care. A Care Plan integrates multiple interventions proposed by multiple providers and disciplines for multiple
conditions.

A Care Plan represents one or more Care Plans and serves to reconcile and resolve conflicts between the
various Care Plans developed for a specific patient by different providers. Care Plans include the patient’s life goals and require Care Team Members (including patients) to prioritize goals and
interventions, the reconciliation process becomes more complex as the number of merged Care Plans increase. The
Care Plan also serves to enable longitudinal coordination of care.

The C-CDA Care Plan represents an instance of a dynamic Care Plan at a point in time. The CDA document itself is NOT dynamic.

This document template enables Care Plan information to be shared in a way that includes:

- The ability to identify patient and provider priorities with each act.
- A header participant to indicate occurrences of Care Plan review.


A Care Plan document can include entry references from the information in these sections to the information (entries) in other sections. 

##### Structured Sections

The table below describes the required and optional sections in a Care Plan document template: [Care Plan](StructureDefinition-CarePlan.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Care Plan**   | Health Concerns Section<br />Goals Section  | Activities Section<br />Health Status Evaluations and Outcomes Section  |
| **Sample**   | CarePlan.xml Sample  | Included with this Companion Guide  |
{:.grid}
**Table 16: Care Plan: Document Template.**

#### Consultation Note: Document Template

The Consultation Note is generated by a request from a clinician for an opinion or advice from another clinician.
Consultations may involve face-to-face time with the patient or may fall under the auspices of telemedicine visits.
Consultations may occur while the patient is inpatient or ambulatory. The Consultation Note should also be used
to summarize an Emergency Room or Urgent Care encounter. A Consultation Note includes the reason for the
referral, history of present illness, physical examination, and decision-making components (Assessment and Plan).

##### Structured Sections

The table below describes the required and optional sections in a Consultation Note document template:[Consultation Note](StructureDefinition-ConsultationNote.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Consultation Note**   | History of Present Illness Section<br />Allergies and Intolerances Section<br />Problem Section  | Assessment Section<br />Assessment and Plan Section<br />Plan of Treatment Section<br />Reason for Visit Section<br />Physical Exam Section<br />Chief Complaint Section<br />Chief Complaint and Reason for Visit Section<br />Family History Section<br />General Status Section<br />Past Medical History<br />Immunizations Section<br /> Medications Section <br /> Procedures Section<br />Results Section<br />Social History Section<br />Vital Signs Section<br />Functional Status Section<br />Review of Systems Section<br />Medical Equipment Section  |
{:.grid}
**Table 17: Consultation Note: Document Template.**

#### Continuity of Care Document (CCD): Document Template

The Continuity of Care Document (CCD) represents a
core data set of the most relevant administrative, demographic, and clinical information facts about a patient's
healthcare, covering one or more healthcare encounters. It provides a means for one healthcare practitioner,
system, or setting to aggregate all of the pertinent data about a patient and forward it to another to support the
continuity of care. The primary use case for the CCD is to provide a snapshot in time containing the germane
clinical, demographic, and administrative data for a specific patient. The key characteristic of a CCD is that the
ServiceEvent is constrained to "PCPR" “care provision.” This means that the contents of the document reflect the
care that was actually provided within the time range indicated in serviceEvent.effectiveTime range. It reports on
care that has already been provided. The CCD provides a historical tally of the care over a range of time and is not
a record of new services delivered. More specific use cases, such as a Discharge Summary, Transfer Summary,
Referral Note, Consultation Note, or Progress Note, are available as alternative documents in this guide.

##### Structured Sections

The table below describes the required and optional sections in a Continuity of Care Document (CCD) document
template: [Continuity of Care Document (CCD)](StructureDefinition-ContinuityofCareDocumentCCD.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Continuity of Care Document (CCD)**   | Allergies and Intolerances Section<br />Medications Section<br />Problem Section<br />Results Section<br />Social History Section<br />Vital Signs Section  | Procedures Section<br />Encounters Section<br />Family History Section<br />Functional Status Section<br />Immunizations Section<br />Medical Equipment Section<br />Payers Section<br />Plan of Treatment Section<br />Mental Status Section<br />Nutrition Section<br />Advance Directives Section<br />Goals Section<br />Health Concerns Section  |
{:.grid}
**Table 18: Continuity of Care Document: Document Template.**

#### Discharge Summary: Document Template

The Discharge Summary is a document which summarizes a patient's admission to a hospital, LTPAC provider, or
other setting. It provides information for the continuation of care following discharge. [The Joint Commission](http://www.jointcommission.org/)
requires the following information to be included in the Discharge Summary:

- Reason for hospitalization (the admission)
- Procedures performed, as applicable
- Care, treatment, and services provided
- Patient’s condition and disposition at discharge
- Information provided to the patient and family
- Provisions for follow-up care

The best practice for a Discharge Summary is to include the discharge disposition in the display of the header.

##### Structured Sections

The table below describes the required and optional sections in a Discharge Summary document template: [Discharge Summary](StructureDefinition-DischargeSummary.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Discharge Summary**   | Allergies and Intolerances Section<br />Hospital Course Section<br />Discharge Diagnosis Section<br />Plan of Treatment Section (DIR)  | Discharge Medications Section<br />Chief Complaint Section<br />Chief Complaint and Reason for Visit Section<br />Nutrition Section<br />Family History Section<br />Functional Status Section<br />Past Medical History<br />History of Present Illness Section<br />Admission Diagnosis Section<br />Admission Medications Section<br />Hospital Consultations Section<br />Hospital Discharge Instructions Section<br />Hospital Discharge Studies Summary Section<br />Immunizations Section<br />Procedures Section<br />Reason for Visit Section<br />Review of Systems Section<br />Social History Section<br />Vital Signs Section<br />Discharge Medications Section<br />Goals Section<br />Health Concerns Section  |
| **Example**   | DischargeSummary.xml Sample  | Included with this Companion Guide  |
{:.grid}
**Table 20: Discharge Summary: Document Template.**


#### History and Physical: Document Template

A History and Physical (H&P) Note is a medical report that documents the current and past conditions of the
patient. It contains essential information that helps determine an individual's health status. The first portion of the
report is a current collection of organized information unique to an individual. This is typically supplied by the
patient or the caregiver, concerning the current medical problem or the reason for the patient encounter. This
information is followed by a description of any past or ongoing medical issues, including current medications and
allergies. Information is also obtained about the patient's lifestyle, habits, and diseases among family members.
The next portion of the report contains information obtained by physically examining the patient and gathering
diagnostic information in the form of laboratory tests, imaging, or other diagnostic procedures. The report ends
with the clinician's assessment of the patient's situation and the intended plan to address those issues. A History
and Physical Examination is required upon hospital admission as well as before operative procedures. An initial
evaluation in an ambulatory setting is often documented in the form of an H&P Note.

##### Structured Sections

The table below describes the required and optional sections in a History and Physical document template: [History and Physical](StructureDefinition-HistoryandPhysical.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **History and Physical**   | Allergies and Intolerances Section<br />Family History Section<br />General Status Section<br />Past Medical History<br />Medications Section<br />Physical Exam Section<br />Results Section Review of Systems Section<br />Social History Section<br />Vital Signs Section  | Assessment Section<br />Plan of Treatment Section<br />Assessment and Plan Section<br />Chief Complaint Section<br />Chief Complaint and Reason for Visit Section<br />History of Present Illness Section<br />Immunizations Section<br />Instructions Section<br />Problem Section<br />Procedures Section<br />Reason for Visit Section  |
{:.grid}
**Table 21: History and Physical: Document Template.**

#### Operative Note: Document Template

The Operative Note is a frequently used type of procedure note with specific requirements set forth by regulatory
agencies. The Operative Note is created immediately following a surgical or other high-risk procedure. It records
the pre- and post-surgical diagnosis, pertinent events of the procedure, as well as the condition of the patient
following the procedure. The report should be sufficiently detailed to support the diagnoses, justify the treatment,
document the course of the procedure, and provide continuity of care.

##### Structured Sections

The table below describes the required and optional sections in an Operative Note document template: [Operative Note](StructureDefinition-OperativeNote.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Operative Note**   | Anesthesia Section<br />Complications Section<br />Preoperative Diagnosis Section<br />Procedure Estimated Blood Loss Section Procedure Findings Section<br />Procedure Specimens Taken Section<br />Procedure Description Section<br />Postoperative Diagnosis Section  | Procedure Implants Section<br />Operative Note Fluids Section<br />Operative Note<br />Surgical Procedure Section<br />Plan of Treatment Section<br />Planned Procedure Section<br />Procedure Disposition Section<br />Procedure Indications Section<br />Surgical Drains Section  |
{:.grid}
**Table 22 Operative Note: Document Template.**

#### Procedure Note: Document Template

A Procedure Note encompasses many types of non-operative procedures including interventional cardiology,
gastrointestinal endoscopy, osteopathic manipulation, and many other specialty fields. Procedure Notes are
differentiated from Operative Notes because they do not involve incision or excision as the primary act. The
Procedure Note is created immediately following a non-operative procedure. It records the indications for the
procedure and, when applicable, post-procedure diagnosis, pertinent events of the procedure, and the patient’s
tolerance for the procedure. It should be detailed enough to justify the procedure, describe the course of the
procedure, and provide continuity of care.

##### Structured Sections

The table below describes the required and optional sections in [Procedure Note](StructureDefinition-ProcedureNote.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Procedure Note**   | Complications Section<br />Procedure Description Section<br />Procedure Indications Section<br />Postprocedure Diagnosis Section  | Assessment Section<br />Assessment and Plan Section<br />Plan of Treatment Section<br />Allergies and Intolerances Section<br />Anesthesia Section<br />Chief Complaint Section<br />Chief Complaint and Reason for Visit Section<br />Family History Section<br />Past Medical History<br />History of Present Illness Section<br />Medical (General) History Section<br />Medications Section<br />Medications Administered Section<br />Physical Exam Section<br />Planned Procedure Section<br />Procedure Disposition Section<br />Procedure Estimated Blood Loss Section<br />Procedure Findings Section<br />Procedure Implants Section<br />Procedure Specimens Taken Section<br />Procedures Section<br />Reason for Visit Section<br />Review of Systems Section<br />Social History Section  |
{:.grid}
**Table 23: Procedure Note: Document Template.**

#### Progress Note: Document Template

The Progress Note represents a patient’s clinical status during a hospitalization, outpatient visit, treatment with a
LTPAC provider, or other healthcare encounter. [Taber’s medical dictionary](https://www.tabers.com/tabersonline/) defines a Progress Note as “An ongoing
record of a patient's illness and treatment. Physicians, nurses, consultants, and therapists record their notes
concerning the progress or lack of progress made by the patient between the time of the previous note and the
most recent note. A Progress Note is not a re-evaluation note. A Progress Note is not intended to be a
Progress Report for Medicare. Medicare B Section 1833(e) defines the requirements of a Medicare Progress
Report. The [Joint Document Content Work Group](https://www.commonwellalliance.org/wp-content/uploads/2019/01/Improve-Joint-Document-Content-Whitepaper.pdf) recommends use of the Progress Note document template to
represent an encounter summary for a non-inpatient setting in Chapter 2.2 Outpatient/Ambulatory Summary (Progress Note Document). The Progress Note document template does not
include any required sections and the open nature of the template enables Content Creators to include the right
sections to express the source data or the needed sections to satisfy the requirements of Content Consumers.

##### Structured Sections

The table below describes the required and optional sections in a Progress Note document template: [Progress Note](StructureDefinition-ProgressNote.html)

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Progress Note**   |   | Assessment Section<br />Plan of Treatment Section<br />Assessment and Plan Section<br />Allergies and Intolerances Section<br />Chief Complaint Section<br />Activities Section<br />Instructions Section<br /><br />Medications Section<br />Objective Section<br />Physical Exam Section<br />Problem Section<br />Results Section<br />Review of Systems Section<br />Subjective Section<br />Vital Signs Section<br />Nutrition Section  |
| **Example**   | ProgressNote.xml Sample  | Included with this Companion Guide  |
{:.grid}
**Table 24 Progress Note: Document Template.**

#### Referral Note: Document Template

A Referral Note communicates pertinent information from a provider who is requesting services of another
provider of clinical or non-clinical services which includes the reason for the referral and additional information
that would augment decision making and care delivery. Examples of referral situations include when a patient is:

- Referred from a family physician to a cardiologist for cardiac evaluation.
- Sent by a cardiologist to an emergency department for angina.
- Referred by a nurse practitioner to an audiologist for hearing screening.
- Referred by a hospitalist to social services.

##### Structured Sections

The table below describes the required and optional sections in a Referral Note document template: [Referral Note](StructureDefinition-ReferralNote.html) 

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Referral Note**   | Problem Section<br />Allergies and Intolerances Section<br />Medications Section<br />Reason for Referral Section  | Plan of Treatment Section<br />History of Present Illness Section<br />Family History Section<br />Immunizations Section<br />Procedures Section<br />Results Section<br />Review of Systems Section<br />Social History Section<br />Vital Signs Section<br />Functional Status Section<br />Physical Exam Section<br />Nutrition Section<br />Mental Status Section<br />Medical Equipment Section<br />Assessment Section<br />Assessment and Plan Section<br />Past Medical History<br />General Status Section<br />Advance Directives Section<br />Health Concerns Section<br />Goals Section  |
| **Example**   | ReferralNote.xml Sample  | Included with this Companion Guide  |
{:.grid}
**Table 25: Referral Note: Document Template.**

#### Transfer Summary: Document Template

The Transfer Summary template describes constraints on the Clinical Document Architecture (CDA) header and
body elements for a Transfer Summary. The Transfer Summary standardizes critical information for exchange of
information between providers of care when a patient moves between health care settings. Standardization of
information used in this form will promote interoperability; create information suitable for reuse in quality
measurement, public health, research, and for reimbursement.

##### Structured Sections

The table below describes the required and optional sections in a Transfer Summary document template: [Transfer Summary](StructureDefinition-TransferSummary.html) 

| **Document Type**   | **Required Sections**    | **Optional Sections** |
| -- | -------- | ------ |
| **Transfer Summary**   | Allergies and Intolerances Section<br />Medications Section<br />Problem Section<br />Results Section<br />Vital Signs Section<br />Reason for Referral Section  | Physical Exam Section<br />Encounters Section<br />Family History Section<br />Functional Status Section<br />Discharge Diagnosis Section<br />Immunizations Section<br />Medical Equipment Section<br />Payers Section<br />Plan of Treatment Section<br />Procedures Section<br />Social History Section<br />Mental Status Section<br />General Status Section<br />Review of Systems Section<br />Nutrition Section<br />Past Medical History<br />History of Present Illness Section<br />Assessment and Plan Section<br />Assessment Section<br />Admission Medications Section<br />Admission Diagnosis Section<br />Course of Care Section
{:.grid}
**Table 26: Transfer Summary: Document Template.**

#### Other Section-Level Templates Available for Use in C-CDA Documents

Implementers may use templates developed in other CDA implementation guides which are compatible with C-
CDA. Employing additional C-CDA compatible templates within existing document types will expand the range of
interoperable information available for exchange and help address emerging use cases for data exchange.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:32pt">
        <td
            style="width:462pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 45pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators MAY include in existing
                C-CDA documents, other C-CDA compatible section-
                level templates defined in other implementation
                guides. <b>[BP-052]</b></p></td>
    </tr>
</table>

A C-CDA compatible template is a template that further constrains a template defined in C- CDA or a template
that does not conflict with templates defined in C-CDA. Determining if a template is C-CDA compliant may require
human discernment and consensus building within the C-CDA implementer community. A particularly important
collection of C-CDA compatible templates are the Supplemental Implementation Guides, which define new
template versions and templates for additional use cases. These Supplemental Implementation Guides are
published within the main [C-CDA specification Product Brief page](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=492)

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators MAY support further
                constraints on the document templates defined in
                C-CDA <b>[BP-053]</b></p></td>
    </tr>
</table>

### Section Level Guidance

The idea of improving the communication of information contained in clinical notes has been around for decades.
Long before C-CDA, a documentation methodology called “SOAP (Subjective, Objective, Assessment, and Plan)
notes” was invented. The birth of the problem-oriented medical record (POMR) and SOAP note marked an epoch
in the history of health care. [Dr. Lawrence Weed, developer of the SOAP note and professor of medicine and
pharmacology at Yale University](https://journals.lww.com/academicmedicine/fulltext/2019/01000/remembering_lawrence_weed__a_pioneer_of_the_soap.9.aspx), challenged conventional medical documentation and advocated for a scientific
structure to frame clinical reasoning in the 1950s. Today, the SOAP note is the most common method of
documentation used by providers to input notes into patients’ medical records. They allow providers to record and
share information in a universal, systematic and easy to read format. Ineffective communication contributes to
the top causes of sentinel events and continues to be an unremitting area for refinement.

After the development of the HL7 Clinical Document Architecture R2 standard in 2005, an alliance of healthcare
vendors, providers and associations pooled resources in a rapid-development initiative. In a span of three years,
the Health Story Project produced eight Health Level Seven (HL7) data standards for the flow of information using
common types of healthcare documents. The alliance examined thousands of common clinical notes generated by
a variety of medical transcription solutions and identified what structured sections were needed to represent the
SOAP notes commonly generated by current-day clinicians. The “Health Story Guides,” as they were originally
named, defined the initial set of section templates based on this analysis. Every section template includes a
section.text element designed to hold the human readable narrative of that section of the structured document.

While no longer active today, the [HIMSS Health Story Project](https://www.hcinnovationgroup.com/clinical-it/clinical-documentation/news/13022021/himss-introduces-health-story-project) provided education to the health IT community on
tools and resources to aid in the creation of comprehensive electronic records that tell a patient's _complete health
story._ Some especially educational concepts from this initiative are summarized in the following chapters.

#### The Storytelling Power of C-CDA

This roundtable presentation explained the twelve common clinical document types that are defined in
Consolidated CDA (C-CDA) and described how each can be leveraged for information exchange in different care
settings and for different encounter types. When should each C-CDA clinical document type be leveraged? What
sections are used in C-CDA clinical documents and how do they differ from a Continuity of Care Document (CCD)?
The Roundtable showed how to apply the SOAP framework to reveal the storytelling power of C-CDA by thinking of
the section templates in terms of the subjective, objective, assessment, and plan information each contains. In
some cases, the information in one section may be classified in multiple SOAP categories. The categorization is an
approximation designed to improve understanding of the full collection of C-CDA section templates.

<table><tr><td><img src="Figure 5 Visualizing C-CDA section templates by applying the SOAP framework.png" /></td></tr></table>
**Visualizing C-CDA section templates by applying the SOAP framework**

##### A More Meaningful Patient Story Using C-CDA: Tell it. Use it. Share it.

This presentation explained how documentation-based exchange via Consolidated Clinical Document Architecture
(C-CDA), when implemented correctly, has the power to capture and share a more comprehensive electronic
record that can be used to improve care.

By 2011, when C-CDA R1.0 was first published, a larger industry effort brought together CDA templates for clinical
SOAP notes that had been defined by several organizations including Integrating the Healthcare Enterprise (IHE),
HITSP, and HL7. The harmonized work included not only definitions for section templates needed to structure
common clinical note types, but also included entry templates that defined how to represent the human readable
section information using machine processable “clinical statements”. Clinical statements were templated using the
syntax and data structures supported by the HL7 CDA R2 standard which derived its data types and modeling from
an Version 2.0.7 of the V3 RIM found here [HL7 V3 Reference Information Model (RIM)](https://www.hl7.org/implement/standards/rim.cfm). The HL7 V3 RIM is the cornerstone of all HL7 Version
3 standards. It is a shared model between all domains and, as such, forms a common basis from which all domains
can create information exchange artifacts and messages.

Today in C-CDA and in the C-CDA Supplemental Implementation Guides, the C-CDA standards development
community has defined and published a wide array of section templates to represent clinical information in the
context of structured documents. It is important to note that the purpose of each section template is dependent
on the context of its intended use within a larger document structure. While some templates have been defined
generically and are suitable for reuse in multiple structured documents, others due to the nature of their
definitions may not be appropriate for re-use across other documents. For this reason, is it important for the
context of the overarching document to be considered when determining if it is appropriate to include a particular
type of section template in a particular type of document template.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD use section templates
                that are appropriate within the context of a
                document based on the defined purpose of the section
                template. <b>[BP-054]</b></p></td>
    </tr>
</table>

#### General Section-Level Guidance

The following guidance elements are not specific to any one C-CDA template but rather are overarching guidance
elements that apply to an entire C-CDA document.

##### Data Provenance for a Section

The author role is key to understanding the provenance of the information.

The roles populated in the header of the document apply to each section of content as well, unless explicitly
indicated otherwise. If the author information for a section is not explicitly declared, then the author of the
information in that section can be assumed to be the author contained in the document header. This is behavior
within a CDA document is called context conduction.

This assumption extends to entries contained in the section as well. If the author information for an entry is not
explicitly declared, then the author of the information in that entry can be assumed to be the author contained in
the encompassing section.

While it is generally preferred that provenance be conveyed either at the document level, or at the entry level, it is
possible for provenance to be conveyed at the section level when the default context conduction does not apply.

When representing a clinical note using structured sections, each section of information receives its context from
the document’s header. If author information for a section is not explicitly declared, then the author of that
section of information can be assumed to be the same as the author information contained in the document
header.

The recordTarget, author, and informant roles populated in the header of the document apply to each section of
content as well, unless explicitly indicated otherwise. The author role is key to understanding the provenance of
the information in the document. If the author information for a section is not explicitly declared, then the author
of that section of information can be assumed to be the same as the author information contained in the header.

This assumption extends to entries contained in the section as well, unless the author information is explicitly
declared at the entry level. While it is generally preferred that provenance be conveyed at the entry level,
provenance information included at the document or section level conducts to the entry when provenance at the
entry level is not stated explicitly.

##### Declaring Section Template Conformance

Template conformance may be declared at any
level of a C-CDA document—header, section, entry, or within an entry at a sub-structural level.

A template declaration in a C-CDA section asserts the constraints applicable for that section of XML. The template
declaration tells validators and Content Consumers what to expect in terms of the information that, may, should,
or shall be populated within this section of the document.

C- CDA templates are identified with a templateId. The templateId is a two-part identifier that consists of a root
and an extension. The root identifies the named template and the extension identifies the version of that
template. Initially C-CDA templates did not include versions. The templateId/@extension attribute was not used.
Many of those original template versions are still used in C-CDA today.
A duplicate templateId declaration is a template declaration for the same structural part of a C-CDA document (i.e.,
document, section, entry, entry-part) with identical @root and @extension information. The order of the @root
and @extension attributes does not matter when determining duplication.

To avoid confusion and minimize inclusion of unnecessary information in C-CDA documents, implementers should avoid including duplicate or irrelevant templateId declarations.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD NOT declare
                conformance to irrelevant templates.
                <b>[BP-066]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
                >C-CDA Content Creators SHALL NOT include
                duplicate templateId declarations.
                <b>[CONF-067]</b></p></td>
    </tr>
</table>

As standards evolve an implementer community may decide to deprecate a version of a template or a collection of
templates published in a version of an implementation guide. It should be anticipated that implementer
communities may determine that a certain version of a template should not be used going forward.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators and C-CDA Content Consumers
                SHOULD NOT attribute semantic meaning to templateId
                declarations in C-CDA documents.
            <b>[BP-057]</b></p></td>
    </tr>
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD support template
                deprecation requiring discontinued use of all
                versions of a templateId or a specific version of a
                templateId. <b>[BP-058]</b></p></td>
    </tr>
</table>

**Example 16: Declaring template conformance at the section level.**

{% include examplebutton_default.html example="template_conformance.xml" b_title = "Click Here to See 'Section Template Conformance' Example" %}


**Example 17: Declaring conformance to multiple templates.**

{% include examplebutton_default.html example="multiple_template_conformance.xml" b_title = "Click Here to See 'Section Multiple Template Conformance' Example" %}


**Example 18: (Wrong) Duplicate template declarations at the section level.**

{% include examplebutton_default.html example="wrong_template_conformance.xml" b_title = "Click Here to See 'Section Wrong Template Conformance' Example" %}


**Example of how to include templateIds for Companion Guide templates**

{% include examplebutton_default.html example="companion_guide_template_conformance.xml" b_title = "Click Here to See 'Companion Guide Template Conformance' Example" %}


#### Narrative Block Formatting

The CDA requirement for human readability guarantees that a receiver of a CDA document can algorithmically
display the clinical content of the note on a standard Web browser. This requirement impacts C-CDA in the
following ways:

- There must be a deterministic way for a recipient of an arbitrary CDA document to render the
    attested content.
- Human readability shall not require a sender to transmit a special style sheet along with a CDA
    document. It must be possible to render all CDA documents with a single style sheet and general
    market display tools.
- Human readability applies to the authenticated content.
- When structured content is derived from narrative, there must be a mechanism to describe the
    process (e.g. by author, by human coder, by natural language processing algorithm, by specific
    software) by which machine-processable portions were derived from a block of narrative.
- When narrative is derived from structured content, there must be a mechanism to identify the
    process by which narrative was generated from structured data.

These principles and requirements have led to the current approach, where the material to be rendered is placed
into the section.text field. In some cases, the data design of the entry templates required in the section heavily
influences what clinical information can be expected to be present in the Narrative Block. In other cases, where
entry templates are optional or not defined at all, the content in the Narrative Block may reflect information
gathered in source systems as text and human crafted notes.

If the CDA Body is structured, the Content Creator includes the attested narrative content in the appropriate
section.text field, regardless of whether information is also conveyed in CDA entries. An originator of a CDA
document is not required to fully encode all narrative into CDA entries within the CDA body. Within specific
implementations, trading partners may ascribe additional originator responsibilities to create various entries that
meet certain conformance requirements or meet the conformance requirements described by defined templates.



**Example 19: Sample Narrative Block in a Section**

{% include examplebutton_default.html example="narrative_block.xml" b_title = "Click Here to See 'Narrative Block' Example" %}


CDA permits additional information conveyed in the document that is there primarily for machine processing that
is not authenticated and need not be rendered. However, the requirement that all attested content be present in
the section.text field, suggests best practice is for all clinical content to be rendered through section.text.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 47pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD include all clinical
                content conveyed by a document in the section.text
                field. <b>[BP-059]</b></p></td>
    </tr>
</table>


##### Tags for formatting Narrative Text

The content model of the CDA Narrative Block schema is specially hand crafted to meet the requirements outlined above.
The table below provides information on some of the formatting tags commonly used to organize and render the human readable information in the Narrative Block.

| **Tag Description**   | **Description**    |
| ---- | ------ |
| **&lt;content&gt;**   | The CDA <content> element is used to wrap a string of text so that it can be explicitly referenced, or so that it can suggest rendering characteristics. The <content> element contains an optional identifier, that can serve as the target of a reference. All values of attributes of type XML id must be unique within the document (per the [W3C XML specification](https://www.w3.org/TR/xml/). The originalText component of a RIM attribute present in any CDA entry can make explicit reference to the identifier, thereby indicating the original text associated with the attribute in the CDA entry.  |
| **&lt;br&gt;**   | The CDA element is used to indicate a hard line break. It differs from the CDA <paragraph> element in that the element has no content. Receivers are required to interpret this element when rendering so as to represent a line break.  |
| **&lt;list&gt;**   | A CDA <list> is similar to the HTML list. A CDA <list> has an optional caption and contains one or more <item> elements. A CDA <item> element contains an optional caption, which if present must come first before any other character data. The required listType attribute specifies whether the <list> is ordered or unordered (with unordered being the default). Unordered lists are typically rendered with bullets, whereas ordered lists are typically rendered with numbers, although this is not a requirement.  |
| **&lt;table&gt;**   | The CDA <table> is similar to the HTML table. The table markup is for presentation purposes only and, unlike a database table, does not possess meaningful field names.  |
| **&lt;linkHtml&gt;**   | The CDA <linkHtml> is a generic referencing mechanism, similar, but not identical, to the HTML anchor tag. It can be used to reference identifiers that are either internal or external to the document.  |
| **styleCode attribute**   | The styleCode attribute is used within the CDA Narrative Block to give the instance author the ability to suggest rendering characteristics of the nested character data (e.g. Bold, Underline, Italics). Receivers are not required to render documents using the style hints provided and can present stylized text in accordance with their local style conventions. Reference: HL7 CDA Chapter 4.3.5.11 for information on additional stylecodes.  |
{:.grid}
**Table 27: Tags for formatting Narrative Text**


#### Multiple Views and styleCodes

Sharing documents requires different views based on user needs. HL7 Relevant and Pertinent Survey highlights the need to enhance CDA document rendering. CDA uses XML stylesheets with @styleCode, as defined by IHE's MCV Profile. Refer to [IHE Multiple Content Views (MCV) Profile](https://www.ihe.net/uploadedFiles/Documents/PCC/IHE_PCC_Suppl_MCV.pdf) for details and examples.

Implementers should use MCV Profile's @styleCode values for consistency in rendering human-readable content, covering codes, dates, dateTimes, alerts, and more. These values enhance clinical content rendering features, ensuring information is not omitted or obscured unless a specific rendering view calls for it.

#### Date/Time Guidance

Temporal information is often included as relevant and pertinent information to be exchanged. However,
implementers need to be diligent when representing date/time information to make sure irrelevant or inaccurate
levels of precision are not introduced when representing this type of information.

#### Use of Open Templates

CDA features prioritize template reusability and flexibility for tailored content in sections, aligning with patient, provider, or setting needs. Most C-CDA templates are open, allowing additional relevant content.
Example: The Social History Section focuses on data influencing a patient's health (e.g., smoking, pregnancy). Information like education, housing, food security, or transportation can be added here if not covered elsewhere. Implementers can also explore external CDA templates from Supplemental Implementation Guides for expanded use cases within the C-CDA standard. [C-CDA Specification Product Brief](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=492).
Caution: Implementers should be aware that recipients may not understand templates included at an unexpected location within a document.

##### Table 38: Section Time Range Observation Template

To indicate the application of business rules limiting information in a C-CDA section, Content Creators should clarify the time range in the section's human-readable text.
For example, the Vital Signs Section includes recent vital signs based on business rules, like the most recent readings within a requested time interval, documented in the section.
The [Section Time Range Observation](StructureDefinition-SectionTimeRangeObservation.html) template is helpful when responding to queries requesting extensive data. It allows specifying the business logic for data constraint within a section.
This template communicates the 'business logic' used to restrict information to a specific time range. For instance, if a CCD document request covers 5 years but the system only returns one year of past lab results, the Section Time Range template indicates this limitation. The business logic is stated in the value element using datatype IVL_TS. No effectiveTime element is included.

**Example 20: Example of Section Time Range Observation**

{% include examplebutton_default.html example="section_time_range.xml" b_title = "Click Here to See 'Section Time Range Observation' Example" %}


#### Sections Defined in C-CDA (ordered using SOAP framework)

As explained in the [Health Story Roundtable presentation titled The Storytelling Power of C-CDA](http://www.himss.org/sites/hde/files/HSP%20March%202019%20Roundtable%20Q%26A.pdf), understanding
the purpose of the C-CDA section templates is not facilitated by considering them in alphabetical order. The C-CDA Implementation Guide presents them in alphabetical order to speed access for readers. Considering the C-CDA section templates using the SOAP framework makes it easier to see how these sections can be used in a structured document to express the content of a clinical SOAP note.

The application of the SOAP framework does not produce a perfect classification result. Some sections don’t fit
well into the SOAP framework. They have been classified as “other types of sections”. Some sections are defined to
contain “heterogeneous” information, meaning the section’s content spans the boundaries of the SOAP
framework. For example, the Assessment and Plan Section contains both assessment (A) and plan (P) information.
Section structures that contain “homogeneous” information, all of the same type with the same purpose, improves
information processing.


<table style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD use section templates
                containing “homogeneous” information with regards to not
                mixing subjective, objective, assessment, and plan types of
                information together in a single section. <b>[BP-060]</b></p></td>
    </tr>
</table>

##### Subjective Information


| **Section Name<br />LOINC<br />OID**   | **Purpose Description**    |
| ---- | ------ |
| **Subjective Section**<br />61150-9<br />2.16.840.1.113883.10.20.21.2.2  | This section describes in a narrative format the patient’s current condition and/or interval changes as reported by the patient or by the patient’s guardian or another informant.  |
| **Reason for Visit**<br />29299-5<br />2.16.840.1.113883.10.20.22.2.12  | This section records the patient’s reason for the patients’ visit (as documented by the provider). Local policy determines whether Reason for Visit and Chief Complaint are in separate or combined sections.  |
| **Reason for Referral**<br />42349-1<br />1.3.6.1.4.1.19376.1.5.3.1.3.1:2014-06-09  | This section describes the clinical reason why a provider is sending a patient to another provider for care. The reason for referral may become the reason for visit documented by the receiving provider.  |
| **Chief Complaint**<br />10154-3<br />2.16.840.1.113883.10.20.22.2.13  | This section records the patient’s chief complaint (the patient’s own description).  |
| **Chief Complain and Reason for Visit**<br />46239-0<br />2.16.840.1.113883.10.20.22.2.13  | This section records the patient’s chief complaint (the patient’s own description) and/or the reason for the patient’s visit (the provider’s description of the reason for visit). Local policy determines whether the information is divided into two sections or recorded in one section serving both purposes.<br /> |
| **Health Concerns Section**<br />75310-3<br />2.16.840.1.113883.10.20.22.2.58:2015-08-01  | This section contains data describing an interest or worry about a health state or process that could possibly require attention, intervention, or management. A Health Concern is a health-related matter that is of interest, importance or worry to someone, who may be the patient, patient’s family or patient’s health care provider. Health concerns are derived from a variety of sources within IEHR.<br />Health concerns can be medical, surgical, nursing, allied health or patient-reported concerns. “Transportation difficulties” for someone who doesn't drive and has trouble getting to appointments, or “Underinsured” for someone who doesn't have sufficient insurance to properly cover their medical needs such as medications. Problem Concerns are a subset of Health Concerns that have risen to the level of importance that they typically would be described in the Problems Section.  |
| **Allergies and Intolerances Section**<br />48765-2<br />2.16.840.1.113883.10.20.22.2.6.1:2015-08-01  | This section lists and describes any medication allergies, adverse reactions, idiosyncratic reactions, anaphylaxis/anaphylactoid reactions to food items, and metabolic variations or adverse reactions/allergies to other substances (such as latex, iodine, tape adhesives). At a minimum, it should list currently active and any relevant historical allergies and adverse reactions.  |
| **Review of Systems Section**<br />10187-3<br />1.3.6.1.4.1.19376.1.5.3.1.3.18  | This section contains a relevant collection of symptoms and functions systematically gathered by a clinician. It includes symptoms the patient is currently experiencing, some of which were not elicited during the history of present illness, as well as a potentially large number of pertinent negatives, for example, symptoms that the patient denied experiencing.  |
| **History of Present Illness**<br />10164-2<br />1.3.6.1.4.1.19376.1.5.3.1.3.4  | This section describes the history related to the reason for the encounter. It contains the historical details leading up to and pertaining to the patient’s current complaint or reason for seeking medical care.  |
| **Past Medical History**<br />11348-0<br />2.16.840.1.113883.10.20.22.2.20:2015-08-01  | This section contains a record of the patient’s past complaints, problems, and diagnoses. It contains data from the patient’s past, up to the patient’s current complaint or reason for seeking medical care.  |
| **Social History Section**<br />29762-2<br />2.16.840.1.113883.10.20.22.2.17:2015-08-01  | This section contains social history data that influence a patient’s physical, psychological or emotional health (e.g., smoking status, pregnancy, work). Demographic data, such as marital status, race, ethnicity, and religious affiliation, is captured in the header.  |<br />
| **Family History Section**<br />10157-6<br />2.16.840.1.113883.10.20.22.2.15:2015-08-01  | This section contains data defining the patient’s genetic relatives in terms of possible or relevant health risk factors that have a potential impact on the patient’s healthcare risk profile.  |
{:.grid}
**Table 28: Subjective Information**

##### Objective Information

| **Sections defined in C-CDA<br />LOINC<br />OID**   | **Purpose Description**    |
| ---- | ------ |
| **Objective Section**<br />61149-1<br />2.16.840.1.113883.10.20.21.2.1  | This section contains data about the patient gathered through tests, measures, or observations that produce a quantified or categorized result. It includes important and relevant positive and negative test results, physical findings, review of systems, and other measurements and observations.  |
| **Problems Section**<br />11450-4<br />2.16.840.1.113883.10.20.22.2.5.1:2015-08-01  | This section lists and describes all relevant clinical problems at the time the document is generated. At a minimum, all pertinent current and historical problems should be listed. Overall health status may be represented in this section.  |
| **Medical (General) History Section**<br />11329-0<br />2.16.840.1.113883.10.20.22.2.39  | This section describes all aspects of the medical history of the patient even if not pertinent to the current procedure, and may include chief complaint, past medical history, social history, family history, surgical or procedure history, medication history, and other history information. The history may be limited to information pertinent to the current procedure or may be more comprehensive. The history may be reported as a collection of random clinical statements or it may be reported categorically. Categorical report formats may be divided into multiple subsections including Past Medical History, Social History.  |
| **Medications Section**<br />10160-0<br />2.16.840.1.113883.10.20.22.2.1.1:2014-06-09  | This section contains a patient’s current medications and pertinent medication history. At a minimum, the currently active medications are listed. An entire medication history is an option. The section can describe a patient’s prescription and dispense history and information about intended drug monitoring.  |
| **Immunizations Section**<br />11369-6<br />2.16.840.1.113883.10.20.22.2.2.1:2015-08-01  | This section defines a patient’s current immunization status and pertinent immunization history. The primary use case for the Immunization Section is to enable communication of a patient’s immunization status. The section should include current immunization status and may contain the entire immunization history that is relevant to the period of time being summarized.  |
| **Medical Equipment Section**<br />46264-8 2.16.840.1.113883.10.20.22.2.23:2014-06-09  | This section defines a patient’s implanted and external health and medical devices and equipment. This section lists any pertinent durable medical equipment (DME) used to help maintain the patient’s health status. All equipment relevant to the diagnosis, care, or treatment of a patient should be included. Devices applied to, or placed in, the patient are represented with the Procedure Activity Procedure template. Equipment supplied to the patient (e.g., pumps, inhalers, wheelchairs) is represented by the Non-Medicinal Supply Activity template. These devices may be grouped together within a Medical Equipment Organizer.  |
| **Procedures Section**<br />47519-4<br />2.16.840.1.113883.10.20.22.2.7.1:2014-06-09  | This section describes all interventional, surgical, diagnostic, or therapeutic procedures or treatments pertinent to the patient historically at the time the document is generated. The section should include notable procedures.  |
| **Results Section**<br />30954-2<br />2.16.840.1.113883.10.20.22.2.3.1:2015-08-01  | This section contains the results of observations generated by laboratories, imaging and other procedures. The scope includes observations of hematology, chemistry, serology, virology, toxicology, microbiology, plain x-ray, ultrasound, CT, MRI, angiography, echocardiography, nuclear medicine, pathology, and procedure observations. This section often includes notable results such as abnormal values or relevant trends.  |
| **Vital Signs Section**<br />8716-3<br />2.16.840.1.113883.10.20.22.2.4.1:2015-08-01  | This section contains relevant vital signs for the context and use case of the document type, such as blood pressure, heart rate, respiratory rate, height, weight, body mass index, head circumference, pulse oximetry, temperature, and body surface area. The section should include notable vital signs such as the most recent, maximum and/or minimum, baseline, or relevant trends. Vital signs are represented in the same way as other results. However, they are represented in their own section to follow clinical conventions.  |
| **Course of Care Section**<br />8648-8<br />2.16.840.1.113883.10.20.22.2.64  | This section describes what happened during the course of an encounter.  |
| **General Status Section**<br />10210-3<br />2.16.840.1.113883.10.20.2.5  |This section describes general observations and readily observable attributes of the patient, including affect and demeanor, apparent age compared to actual age, gender, ethnicity, nutritional status based on appearance, body build and habitus (e.g., muscular, cachectic, obese), developmental or other deformities, gait and mobility, personal hygiene, evidence of distress, and voice quality and speech.   |
| **Functional Status Section**<br />47420-5 2.16.840.1.113883.10.20.22.2.14:2014-06-09  | This section contains observations and assessments of a patient’s physical abilities. A patient’s functional status may include information regarding the patient’s ability to perform Activities of Daily Living (ADLs) in areas such as Mobility (e.g., ambulation), Self-Care (e.g., bathing, dressing, feeding, grooming) or Instrumental Activities of Daily Living (IADLs) (e.g., shopping, using a telephone, balancing a check book). Problems that impact function (e.g., dyspnea, dysphagia) can be contained in the section.  |
| **Mental Status Section**<br />10190-7<br />2.16.840.1.113883.10.20.22.2.56:2015-08-01  | This section contains observations and evaluations related to a patient’s psychological and mental competency and deficits including, but not limited to any of the following types of information: • Appearance (e.g., unusual grooming, clothing or body modifications) • Attitude (e.g., cooperative, guarded, hostile) • Behavior/psychomotor (e.g., abnormal movements, eye contact, tics) • Mood and affect (e.g., anxious, angry, euphoric) • Speech and Language (e.g., pressured speech, perseveration) • Thought process (e.g., logic, coherence) • Thought content (e.g., delusions, phobias) • Perception (e.g., voices, hallucinations) • Cognition (e.g., memory, alertness/consciousness, attention, orientation) – which were included in Cognitive Status Observation in earlier publications of C-CDA.• Insight and judgment (e.g., understanding of condition, decision making)  |
| **Nutrition Section**<br />61144-2<br />2.16.840.1.113883.10.20.22.2.57  |This section represents diet and nutrition information including special diet requirements and restrictions (e.g., texture modified diet, liquids only, enteral feeding). It also represents the overall nutritional status of the patient and nutrition assessment findings.   |
| **Specific to Inpatient Encounter Notes**  ||
| **Admission Diagnosis Section**<br />46241-6<br />2.16.840.1.113883.10.20.22.2.43:2015-08-01  | This section contains a narrative description of the problems or diagnoses identified by the clinician at the time of the patient’s admission. This section may contain a coded entry which represents the admitting diagnoses.  |
| **Admission Medications Section**<br />42346-7<br />2.16.840.1.113883.10.20.22.2.44:2015-08-01  | This section contains the medications taken by the patient prior to and at the time of admission to the facility.  |
| **Hospital Course Section**<br />8648-8<br />1.3.6.1.4.1.19376.1.5.3.1.3.5  | This section describes the sequence of events from admission to discharge in a hospital facility.  |
| **Hospital Consultations Section**<br />18841-7<br />2.16.840.1.113883.10.20.22.2.42  | This section records consultations that occurred during the admission.  |
| **Hospital Discharge Studies Summary Section**<br />11493-4<br />2.16.840.1.113883.10.20.22.2.16  | This section records the results of observations generated by laboratories, imaging procedures, and other procedures. The scope includes hematology, chemistry, serology, virology, toxicology, microbiology, plain x-ray, ultrasound, CT, MRI, angiography, echocardiography, nuclear medicine, pathology, and procedure observations. This section often includes notable results such as abnormal values or relevant trends and could record all results for the period of time being documented.  |
| **Hospital Discharge Physical Section**<br />10184-0<br />1.3.6.1.4.1.19376.1.5.3.1.3.2  | This section records a narrative description of the patient’s physical findings generated by the discharge physician at the time of discharge.  |
| **Discharge Medications Section**<br />10183-2<br />2.16.840.1.113883.10.20.22.2.11.1:2015-08-01  | This section contains the medications the patient is intended to take or stop after discharge. Current, active medications must be listed. The section may also include a patient’s prescription history and indicate the source of the medication list.  |
| **Specific to Procedure and Operative Notes**  ||
| **Medications Administered Section**<br />29549-3<br />2.16.840.1.113883.10.20.22.2.38:2014-06-09  | This section usually resides inside a Procedure Note describing a procedure. This section defines medications and fluids administered during the procedure, its related encounter, or other procedure related activity excluding anesthetic medications.  |
| **Anesthesia Section**<br />59774-0<br />2.16.840.1.113883.10.20.22.2.25:2014-06-09  | This section records the type of anesthesia (e.g., general or local) and may state the actual agent used. This may be a subsection of the Procedure Description Section. The full details of anesthesia are usually found in a separate Anesthesia Note.  |
| **Procedure Indications Section**<br />59768-2<br />2.16.840.1.113883.10.20.22.2.29:2014-06-09  | This section contains the reason(s) for the procedure or surgery. This section may include the pre-procedure diagnoses as well as symptoms contributing to the reason for the procedure.  |
| **Medical Equipment Section**<br />46264-8<br />urn:hl7ii:2.16.840.1.113883.10.20.22.2.23:2014-06-09  | This section contains devices that have been placed in a patient. This section is also relevant for recording information about non-implanted medical equipment and non-medicinal supplied equipment (e.g. wheelchair, hearing aid, walker).<br /> |
| **Complications Section**<br />55109-3<br />2.16.840.1.113883.10.20.22.2.37:2015-08-01  | This section contains problems that occurred during or around the time of a procedure. The complications may be known risks or unanticipated problems.  |
{:.grid}
**Table 29: Objective Information**

##### Assessment Information

| **Sections defined in C-CDA<br />LOINC<br />OID**   | **Purpose Description**    |
| ---- | ------ |
| **Assessment Section**<br />51848-0<br />2.16.840.1.113883.10.20.22.2.8  | This section (also referred to as “impression” or “diagnoses” outside of the context of CDA) represents the clinician’s conclusions and working assumptions that will guide treatment of the patient. The assessment may be a list of specific disease entities or a narrative block.  |
| **Assessment and Plan Section**<br />51847-2<br />2.16.840.1.113883.10.20.22.2.9:2014-06-09  | This section represents the clinician’s conclusions and working assumptions that will guide treatment of the patient. The Assessment and Plan Section may be combined or separated to meet local policy requirements. Best practice is to separate these distinct types of information by using the Assessment Section: templateId 2.16.840.1.113883.10.20.22.2.8 and the Plan of Treatment Section: templateId 2.16.840.1.113883.10.20.22.2.10:2014-06-09<br />  |
|**Specific to Inpatient Encounter Notes:**||
| **Discharge Diagnosis Section**<br />11535-2<br />2.16.840.1.113883.10.20.22.2.24:2015-08-01  | This section represents problems or diagnoses present at the time of discharge which occurred during the hospitalization. This section includes an optional entry to record patient diagnoses specific to this visit. Problems that need ongoing tracking should also be included in the Problem Section.  |
|**Specific to Procedure and Operative Notes:**||
| **Postprocedure Diagnosis Section**<br />59769-0<br />2.16.840.1.113883.10.20.22.2.36:2015-08-01  | This section records the diagnosis or diagnoses discovered or confirmed during the procedure. Often it is the same as the preprocedure diagnosis or indication.  |
| **Postoperative Diagnosis Section**<br />10219-4<br />2.16.840.1.113883.10.20.22.2.35  | This section records the diagnosis or diagnoses discovered or confirmed during the surgery. Often it is the same as the preoperative diagnosis.  |
{:.grid}
**Table 30: Assessment Information**


##### Plan/Planning Information

| **Sections defined in C-CDA <br />LOINC<br />OID**   | **Purpose Description**    |
| ---- | ------ |
| **Goals Section**<br />61146-7<br />2.16.840.1.113883.10.20.22.2.60  | This section represents patient Goals. A goal is a defined outcome or condition to be achieved in the process of patient care. Goals include patient-defined over-arching goals and health concern-specific or intervention-specific goals to achieve desired outcomes.  |
| **Advance Directives Section**<br />42348-3<br />2.16.840.1.113883.10.20.22.2.21.1:2015-08-01  | This section contains data defining the patient’s advance directives and any reference to supporting documentation, including living wills, healthcare proxies, and CPR and resuscitation status. If the referenced documents are available, they can be included in the exchange package.  |
| Assessment and Plan Section<br />51847-2<br />2.16.840.1.113883.10.20.22.2.9:2014-06-09  | This section represents the clinician’s conclusions and working assumptions that will guide treatment of the patient. The Assessment and Plan Section may be combined or separated to meet local policy requirements. Best practice is to separate these distinct types of information by using the Assessment Section: templateId 2.16.840.1.113883.10.20.22.2.8 and the Plan of Treatment Section: templateId 2.16.840.1.113883.10.20.22.2.10:2014-06-09<br /> |
| **Plan of Treatment Section**<br />18776-5<br />2.16.840.1.113883.10.20.22.2.10:2014-06-09  | This section, formerly known as "Plan of Care", contains data that define pending orders, interventions, encounters, services, and procedures for the patient. It is limited to prospective, unfulfilled, or incomplete orders and requests only. All active, incomplete, or pending orders, appointments, referrals, procedures, services, or any other pending event of clinical significance to the current care of the patient should be listed.  |
| **Instructions Sections**<br />69730-0<br />2.16.840.1.113883.10.20.22.4.20:2014-06-09  | This section can be used in several ways, such as to record patient instructions within a Medication Activity or to record fill instructions within a supply order.  |
| **Specific to Procedure and Operative Notes:** |
| **Planned Procedures Section**<br />59772-4<br />2.16.840.1.113883.10.20.22.2.30:2014-06-09  | This section contains the procedure(s) that a clinician planned based on the preoperative assessment.  |
| **Specific to Procedure and Operative Notes:** |
| **Hospital Discharge Instructions Section**<br />8653-8<br />2.16.840.1.113883.10.20.22.2.41  | This section records instructions at discharge.  |
{:.grid}
**Table 31: Plan/Planning Information**

##### Other Information

| **Sections defined in C-CDA<br />LOINC<br />OID**   | **Purpose Description**    |
| ---- | ------ |
| **Encounters Section**<br />46240-8<br />2.16.840.1.113883.10.20.22.2.22.1:2015-08-01<br />2.16.840.1.113883.10.20.22.2.18:2015-08-01  | This section is relevant in nearly all documents. It lists and describes any healthcare encounters pertinent to the patient’s current health status or historical health history. An encounter is an interaction, regardless of the setting, between a patient and a practitioner who is vested with primary responsibility for diagnosing, evaluating, or treating the patient’s condition. It may include visits, appointments, or non-face-to-face interactions. An encounter also may be a contact between a patient and a practitioner who has primary responsibility (exercising independent judgment) for assessing and treating the patient at a given contact. This section may include a single encounter in an Encounter Summary. It contains relevant encounters for the time period being summarized in a Patient Summary Document.  |
| **Payers Section**<br />48768-6<br />2.16.840.1.113883.10.20.22.2.18:2015-08-01  | This section contains data on the patient’s payers, "third party" insurance, self-pay, other payer or guarantor, or some combination of payers, and is used to define which entity is the responsible fiduciary for the financial aspects of a patient’s care. Each unique instance of a payer and all the pertinent data needed to contact, bill to, and collect from that payer should be included. Authorization information that can be used to define pertinent referral, authorization tracking number, procedure, therapy, intervention, device, or similar authorizations for the patient or provider, or both should be included. At a minimum, the patient’s pertinent current payment sources should be listed.  |
{:.grid}
**Table 32: Other Information**

#### Supplemental C-CDA Section Templates

Several section templates have been developed specifically to supplement C-CDA. They are defined within the
context of C-CDA Supplemental Guides that have been balloted and reconciled separately from C-CDA, and are
published alongside the main C-CDA Specification<br/>[https://www.hl7.org/implement/standards/product_brief.cfm?product_id=492](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=492). These guides are developed with
the intention of eventually replacing earlier version of the templates in C-CDA or eventually being added to the set
of templates considered a part of the C-CDA set of templates.

At the time of this publication, the following Supplemental Implementation Guides are published within the [C-CDA specification Product Brief page](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=492) and may be used within a C-CDA 3.0 Templates:

- [C- CDA R2.1; Advance Directives Templates, Release 1 – US Realm](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=473)
- [HL7 CDA® R2 Implementation Guide: C-CDA R2.1 Supplemental Templates for Nutrition, Release 1 - US Realm](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=478)
- [HL7 CDA® R2 Implementation Guide: C-CDA R2.1 Supplemental Templates for Pregnancy Status, Release 1 - US Realm](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=494)
- [HL7 CDA® R2 Implementation Guide: C-CDA R2.1 Supplemental Templates for Infectious Disease, Release 1 – US Realm](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=502)
- [HL7 CDA® R2 Implementation Guide: C-CDA R2.1 Supplemental Templates for Occupational Data for Health Release 1, STU Release 1.1 – US Realm](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=522)

### Entry Level Guidance
#### General Entry-Level Guidance

The guidance below pertains when document sections include machine processable discrete data to aid processing
of information contained in the section. The following general entry-level guidance is applicable to all C-CDA entry
templates.

##### Narrative Text Linking (Referencing)

Best practice for CDA creation is to represent all human readable text in the section, then reference the text from
the discrete entries that represent the human readable information as machine processable data. To include
narrative text linking, the text element of the primary (outer-most) act in an entry should point, by reference, to
the portion of the narrative text corresponding to the meaning of the entire clinical statement expressed in the
discrete entry.

**Example 21: Narrative Text with Links to Machine Processable Data**

{% include examplebutton_default.html example="narrative_with_data_links.xml" b_title = "Click Here to See 'Narrative Text with Data Links' Example" %}


In accordance with general CDA principles for human readability, every CDA shall be viewable through the use of a
CDA stylesheet. it is recommended to regularly test using the HL7
[CDA stylesheet approved by SDWG and managed in the HL7 GitHub](https://hl7.org/permalink/?CDAStyleSheet).

##### OriginalText

When a CDA document section contains coded discrete entries (such as allergy, medication, problem, etc. to
support machine processing of the available human readable information), coded data within the discrete entry
SHOULDD include an originalText element to link the coded information back to the original human readable
information represented by that code. The use of code/originalText/reference and value/originalText/reference
should be used where it is useful to point to the human readable information associated with more specific areas
within the narrative related to a specific coded element within a discrete entry.

Narrative text linking from the text element in the entry (for the entire discrete entry, meaning the entire machine
processable clinical statement) and from the originalText element (for a specific part of the clinical statement)
referencing from coded concepts in the entry can be used together to provide very tight correspondences between
human readable and machine processable information.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >Coded entries MAY include an originalText element
                to link the coded data back to the associated human
                readable information represented by that code.
                  <b>[CONF-061]</b></p></td>
    </tr>
</table>


The referencing mechanism when used with the original text component of a coded CDA entry:

Sometimes the original text will be repeated in the originalText element rather than
using a reference link into the narrative text. This is not incorrect and should not be flagged as an error. In
this case, the originalText element, allows the human readable information to include a quality check.


The HL7 CDA standard recommends use of narrative text linking to minimize mismatch errors
where the human readable narrative information is not identical to the original text.

**Example 22: originalText used to record the term actually selected from the EHR**

{% include examplebutton_default.html example="original_text.xml" b_title = "Click Here to See 'Original Text' Example" %}


**Example 23: originalText linking the coded concept used in the machine entry to the narrative**
<br />
originalText linking the coded concept used in the machine entry to the narrative that was actually
stated by the clinician or what was actually in the EHR when this problem was entered by the clinician.
Narrative text linking is the preferred method of representation because it eliminates the possibility for
mismatch between the attested content in the section.text and what was actually seen or said by the
clinician.

{% include examplebutton_default.html example="original_text_link.xml" b_title = "Click Here to See 'Original Text with Linking' Example" %}


The originalText contains what the human stated or the terms selected from the EHR user interface.

NOTE: The C-CDA specification does not currently include an explicit coded indicator to define whether the
narrative text contains additional information beyond the coded data or not. Narrative text and user
selected terms may routinely have more robust content than the structured entries. The narrative text may
contain additional nuances and should never be ignored by receiving systems.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >The originalText attribute SHOULD reference text in
                the Narrative Block which mirrors what the clinician
                saw or selected in the user interface of the system
                that created the source data.
            <b>[BP-062]</b></p></td>
    </tr>
</table>

It is valuable to send the local code that represents the originalText as a translation,
along with one or more translations to publicly defined code systems. This practice is encouraged in FHIR
when using data elements of type [CodableConcept](https://www.hl7.org/fhir/datatypes.html#CodeableConcept). In CDA this can be accomplished through translationCode.

The following best practices were agreed upon by HL7 Structured Documents Work Group and the HL7 Vocabulary Work Group
in [January of 2017](https://confluence.hl7.org/display/VOC/Vocabulary+WG+Policy+on+Use+of+translationCode+in+the+V3+%28and+CDA%29+Datatypes) :

- The @code attribute for a data element of type Coded Data (CD) SHALL use a code from a
    nationally recognized code system as identified in the [ONC Interoperability Standards
    Advisory.]( https://www.healthit.gov/isa/)
- The originalText property MAY capture the text that the clinician captured or selected in the
    user interface of the system used in creating the data element instance
- A code that represents the meaning for the originalText drawn from custom interface
    terminologies or another (local) code system according to agreement of the trading partners MAY be populated in translation.Code
- When a code is populated in translation.Code, it SHALL be more specific than the best available
    standard code system code
- A code populated in translation.Code SHALL NOT be broader than the code populated in the
    Code property

**Example 24: TranslationCode, with originalText and local coded term**

{% include examplebutton_default.html example="translation_codes.xml" b_title = "Click Here to See 'Translation Codes' Example" %}

##### DisplayName Representation

When sending coded information, the CD datatype (most commonly used in &lt;code&gt; and &lt;value&gt; elements) has a
‘displayName’ element. This element is intended to be a valid human readable representation of the concept
defined by the code system and associated with the ‘code’ element at the time of data entry. As an example, for
LOINC codes, the ‘displayName’ element should convey either the short name or long name in LOINC for the code
used in the associated code element.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
                >The displayName attribute SHALL NOT modify the
                meaning of the code. <b>[BP-063]</b></p><p
                class="s19"
                style="padding-left: 41pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
                >Note: Testability requires fuzzy match
                capabilities.</p></td>
    </tr>
</table>

The guidance for the use of the displayName element are:

- display name is included as a courtesy to an unaided human interpreter of a coded value.
- display name adds no semantic meaning to the coded information, and it SHALL never exist without an
associated code.
- display name may not be present if the code is an expression for which no display name has been
assigned or can be derived in the associated code system.
- display name element must accurately represent the concept associated with the @code attribute of
the associated code or value element.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
                >The displayName attribute MAY be included where
                syntactically allowed. <b>[BP-064]</b></p></td>
    </tr>
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >The displayName attribute SHALL never exist without
                an associated code. <b>[CONF-065]</b></p></td>
    </tr>
</table>

When a CDA document includes coded data in discrete entries (such as allergen, medication, problem, etc.) to
support machine processing, every discrete entry SHOULD include a text element that references the human
readable representation of the information discretely represented by a code.

For example, a new version of SNOMED CT is released with a new problem code of 99999123 and a display name
of “Obsessional thoughts of augmented reality video games” and this code is used in a Problem Observation. If
neither originalText nor display were included in the xml entry, the human readable narrative for the entry (if not otherwise processed) might only say, “Problem 99999123 began on July 6, 2016 as noted by Dr. Ishihara.” This would violate the core CDA
principal of human readability.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD include a human
                readable representation of the concept associated
                with the code as defined by the code system in the
                @displayName attribute of a code element.
                  <b>[BP-066]</b></p></td>
    </tr>
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Validators MAY require a fuzzy match
                between the @displayName attribute of a code element
                and the preferred concept description for the code
                as defined by the associated code system.</p><p
                class="s31"
                style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
                ><b>[CONF-067]</b></p></td>
    </tr>
</table>

**Example 25: Code Display Name Representation**

{% include examplebutton_default.html example="code_display_name.xml" b_title = "Click Here to See 'Code Display Names' Example" %}


##### Use of Consistent Identifiers

The "id" element serves as a globally unique identifier for data collections, such as documents, sections, entries, or sub-entries (e.g., authors).

Consistency in using ids is crucial within a document and across different document instances from the same system. If data remains the same, the id remains constant. Any changes leading to a new instance of data result in a new id.

For instance, if a patient's penicillin allergy is documented in a CCD, the id for this allergy should remain the same in subsequent C-CDA documents unless there's a fundamental change. Consistent ids simplify data reconciliation and matching, increasing accuracy.

One way to implement consistent unique ids is by maintaining multiple GUIDs for each object in a database. Object Identifiers (OIDs) can identify the assigning authority for each GUID. CDA id elements consist of a root (GUID or OID) and an optional extension, ensuring global uniqueness.

Vendors have flexibility in generating valid GUIDs.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                 bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >Content Creators SHOULD include ids to identify
                pieces of information and use consistent ids for the
                same piece of information <b>[BP-068]</b></p></td>
    </tr>
</table>

##### Use of nullFlavor and Handling Missing Information

HL7 V3 CDA handles unavailable, unknown, or incomplete data with 'null flavors,' representing coded values that explain the missing information.
Assigning a value for missing data is required for validation and considered good practice in other cases. Precision in indicating null flavors is encouraged to convey the reason for missing data. The CDA R2 standard's null flavor vocabulary provides a complete hierarchy of these values.
The @nullFlavor attribute is especially informative when used with intervals. For instance, in a Tobacco Use observation, "effectiveTime/high/@nullFlavor='UNK'" indicates the patient has stopped using a tobacco product, but the exact cessation time is unknown. Other nullFlavors like NI (no information), NAV (not available), and NASK (not asked) convey uncertainty about the patient's current substance use.

**Example 26: Tobacco Use – Current Smoker with an unknown stop date**

{% include examplebutton_default.html example="current_smoker.xml" b_title = "Click Here to See 'Current Smoker' Example" %}


**Example 27: Tobacco Use – Smoker where cessation date was not asked**

{% include examplebutton_default.html example="current_smoker_stop_date_not_asked.xml" b_title = "Click Here to See 'Current Smoker with Not Asked Cessation Date' Example" %}


If the resolution to a problem is not known, its effectiveTime/high should contain a value or nullFlavor=UNK. If the nullFlavor=NA, then the problem is definitely
_not_ resolved. And if the nullFlavor is anything else, then it is unclear as to whether the problem is still active or if it
has been resolved.

The @nullFlavor attribute also conveys when information is unknown. However, a nullFlavor SHALL NOT be used
to bypass IG requirements for convenience ( _e.g._ you may send a nullFlavor=UNK for a patient’s birthTime when it
is not recorded in a chart, but you must not send it simply because it is too difficult to convert the method your
system uses to record birth dates to an HL7 timestamp). NullFlavor attributes need not be included for non-
required elements, such as religiousAffiliationCode. If an element is optional and unknown, it may simply be
omitted.

##### Unknown Data in Sections That Require Entries

The following guidelines clarify the use of the “No Information” nullflavor=”NI” pattern for a section with no information:

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:101pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >If a document template requires a section to be
                present and the source system contains no
                information to populate the section:</p><p
                style="text-indent: 0pt;text-align: left;"
                ><br />
                - The section SHALL be included in the xml and SHALL be declared as having no information. - If the source system contains no information to populate a section that is not required (with a SHALL conformance statement) in the document template:</p><br/>
                <p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >The section MAY be omitted, or the section MAY be
                included and declared as having no
                information.</p><p class="s31"
                style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
                ><b>[BP-069]</b></p></td>
    </tr>
</table>

Machine-readable data in these sections is essential for clinical best practice and should not be omitted unless the entire section contains no information (section/@nullFlavor=NI). In such cases, you may use "unknown" information within specific acts, like Procedure Activity, along with a description and a code for the nature of the unknown data.

The goal is to describe unknown information explicitly for accurate communication. Fields related to problems, medications, and medication allergies cannot be left blank; instead, the section must be included with a null value, and the narrative text should explicitly state that the information is unknown.

**Example 28: No Information Problems Section**

{% include examplebutton_default.html example="no_information_section.xml" b_title = "Click Here to See 'No Information Section' Example" %}


##### Representing “no known” Information Versus “no information”

Distinguishing between "no information" and "no known information" is important. In the case of "no known information," the author isn't asserting the presence or absence of data for the element. "No information" explicitly states that there's no data for that element in the system.
For example, "I don't know if the patient has any allergies" (no information) versus "The patient claims no allergies" (no known).
When asserting "no known" information, use negation indicators (negationInd). Avoid explicit codes like "no known allergies"; instead, use a negation indicator on the act, accompanied by a text description and a code indicating the data lacks value.
Acknowledging some ambiguity due to earlier RIM versions in CDA R2, specific examples like "no known problems" and "no known allergies" have been adopted. 

**Example 29: Allergy List**

{% include examplebutton_default.html example="allergy_list.xml" b_title = "Click Here to See 'Allergy List' Example" %}


To indicate a section has "no information," include the section with a null value of NI. To show that a section contains information in the source system but is excluded from the exchange document, include the section with a null value of MSK, indicating that the sender has not provided this information due to security, privacy, or other reasons. The specific wording for "no information" and "masked information" in the narrative text can be determined locally.

**Example 30: Allergies Section with No Information**

{% include examplebutton_default.html example="allergy_list_no_information.xml" b_title = "Click Here to See 'Allergy List with No Information' Example" %}

**Example 31: Excluding section due to business rules.**

Entire section excluded because business rules of the author determine the section of information is not present due to security, privacy, or other reasons.

{% include examplebutton_default.html example="excluded_section.xml" b_title = "Click Here to See 'Excluded Section' Example" %}

```
```

**Example 32: Procedures Section with Excluded Information, example of locally selected wording**

{% include examplebutton_default.html example="excluded_information.xml" b_title = "Click Here to See 'Section with Excluded Information' Example" %}


##### Detailed Date/Time Guidance

A study by the Association for Healthcare Documentation Integrity, presented at the [HIMSS Health Story Project Roundtable on March 5, 2019](https://www.himss.org/sites/hde/files/HSP%20March%202019%20Roundtable%20Q%26A.pdf), showed that consistent style in healthcare records enhances clear communication, boosts patient safety, and improves information exchange. Applying style standards to human-readable text can reduce physician burden, with a focus on improving the representation of temporal date/time information in the narrative text. While temporal details are vital for clinical understanding, excessive date/time precision can overwhelm or mislead. The Roundtable urged C-CDA creators to ensure that date/time information in the Narrative Block is relevant, pertinent, and appropriately styled to ease physician burden.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD apply a consistent
                style to date/time information reported in the
                Narrative Blocks <b>[BP-070]</b></p></td>
    </tr>
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 6pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD render date/time
                information using a level of precision that is
                relevant and pertinent to the intended purpose of
                the section within the context of the document<b>.
                  [BP-071</b></p></td>
    </tr>
</table>

###### Timestamp Data Representation

Time values are represented in ISO 8601 compliant form, which is traditional in HL7 and lacks dashes, colons, and a "T" between date and time. The syntax is "YYYYMMDDHHMMSS.UUUU[+|-ZZzz]," with the option to omit digits for less precision. Common forms are "YYYYMMDD" and "YYYYMMDDHHMM," but truncation on the right side can occur with other variants.
The ".UUUU" part allows for precision down to tenths of a millisecond (e.g., ".001"). Timezone information is indicated using offsets from UTC, like -0500 for Eastern Standard Time (EST) and -0400 for Eastern Daylight Saving Time (EDT). UTC Time is represented as -0000.
Without a timezone offset, assumptions about time should not be made unless there's a local exchange agreement. When timezone is NULL (unknown), it implies "local time," which is context-dependent and should not be converted to UTC. Specifying timezone for all TS values is important to avoid loss of precision during TS comparisons.
In administrative data, values often lack a timezone. For instance, specifying a timezone for a date of birth in administrative data could alter the date when converted to other timezones. Therefore, administrative data typically has a NULL timezone (not applicable).
See [TS Point in Time in the StructureDefinition Publication of CDA V3 Data Types]({{site.data.fhir.cda}}/StructureDefinition-TS.html)
<table
style="border-collapse:collapse;margin-left:24.01pt"
cellspacing="0">
<tr style="height:147pt">
    <td
      style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
      bgcolor="#C5D9F0"><p class="s19"
      style="padding-left: 41pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
      >When populating any effectiveTime or time element
      in a document, C-CDA Content Creators:</p><p class="s31"
      style="padding-left: 51pt;text-indent: -9pt;text-align: left;"
      >1. <b>SHOULD </b><span class="s19">be precise to the
      day.</span></p><p class="s31"
      style="padding-left: 51pt;text-indent: -9pt;line-height: 12pt;text-align: left;"
      >2. <b>SHOULD </b> <span class="s19">be precise to the
      minute.</span></p><p
      style="text-indent: 0pt;text-align: left;"
      ></p><p class="s31"
      style="padding-left: 51pt;text-indent: -9pt;line-height: 12pt;text-align: left;"
      >3. <b>MAY </b> <span class="s19">be precise to the
      second.</span></p><p class="s19"
      style="padding-left: 51pt;text-indent: -9pt;line-height: 12pt;text-align: left;"
      >4. If more precise than day, <b>SHALL </b>include
      time-zone offset.</p><p class="s31"
      style="padding-left: 43pt;text-indent: 0pt;text-align: left;"
      ><b>[CONF-072]</b></p><p
      style="text-indent: 0pt;text-align: left;"
      ><br /></p><p class="s19"
      style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
      >Note: This conformance does not apply to the
      birthTime element because use of a timezone offset
      could have an unintended negative effect when
      doing patient matching. It also does not apply to
      the effectiveTime element of the Birth Sex
      Observation
      (2.16.840.1.113883.10.20.22.4.200:2016-06-01) template</p></td>
</tr>
</table>

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:87pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >When populating a birthTime metadata element in
          the header or section of a document, C-CDA Content
          Creators:</p><p class="s31"
          style="padding-left: 51pt;text-indent: -9pt;text-align: left;"
          >1. <b>SHALL </b><span class="s19">be precise to the
          day.</span></p><p class="s31"
          style="padding-left: 51pt;text-indent: -9pt;line-height: 12pt;text-align: left;"
          >2. <b>SHOULD </b> <span class="s19">be precise to the
          minute.</span></p><p
          style="text-indent: 0pt;text-align: left;"
          ></p><p class="s31"
          style="padding-left: 51pt;text-indent: -9pt;line-height: 12pt;text-align: left;"
          >3. <b>MAY </b> <span class="s19">be precise to the
          second.</span></p><p class="s19"
          style="padding-left: 51pt;text-indent: -9pt;line-height: 12pt;text-align: left;"
          >4. <b>SHALL NOT </b>include time or
          time-zone offset.</p><p class="s31"
          style="padding-left: 43pt;text-indent: 0pt;text-align: left;"
          ><b>[CONF-073]</b></p></td>
    </tr>
</table>



###### Date/Time Precision

When specifying dates and times, care should be taken to only capture data with as much precision as is known.
The timestamp format allows for partial dates and partial times to be specified. For information see [TS - Detailed Description](https://build.fhir.org/ig/HL7/CDA-core-sd/StructureDefinition-TS.html) from the CDA V3 Data Type Specification StructureDefinition publication.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >Dates and Times SHOULD NOT be padded with zeroes
          as this implies a precision that is probably not
          true. <b>[CONF-074]</b></p></td>
    </tr>
</table>



#### Referencing Information Within a Document

The [Entry Reference](StructureDefinition-EntryReference.html) template represents the act of referencing another entry in the same CDA document instance.
Its purpose is to remove the need to repeat the complete XML representation of the referred entry when relating
one entry to another. This template can be used to reference many types of Act class derivations, such as 
encounters, observations, procedures etc., as it is often necessary when authoring CDA documents to repeatedly
reference other Acts of these types. For example, in a Care Plan it is necessary to repeatedly relate Health
Concerns, Goals, Activities and Outcomes.

The id is required and must be the same id as the entry/id it is referencing. The id cannot be a null value. Act/Code
is set to nullFlavor=“NP” (Not Present). This means the value is not present in the message (in act/Code).

The `<linkHtml>` tag, is a generic referencing mechanism that can be used to reference identifiers that are internal
to a document. Note that security considerations need to be given to support for linking mechanisms. Not all
stylesheets enable the linking features of the `<linkHtml>` tag to be operationalized.


<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;line-height: 12pt;text-align: left;"
                >C-CDA Content Creators MAY use id-based linking
                mechanisms within a C-CDA document.
                <b>[BP-076]</b></p></td>
    </tr>
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Consumer SHOULD support stylesheets that
                facilitate the use of internal linking mechanisms,
                because linking within a single file does not pose
                security risks, facilitates readability and.
                Improves user experience when viewing C-CDA documents.
                  <b>[BP-077]</b></p></td>
    </tr>
</table>

#### Referencing Information in an External Acts

The base HL7 CDA standard supports four act classes that enable information in one document to reference
information in an external document, external procedure, external observation, or external act. 

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators MAY explore the use of
                linking mechanisms to external C-CDA documents,
                observations, or acts, depending on business
                decisions and the assessment of risk associated with
                this functionality. <b>[BP-078]</b></p></td>
    </tr>
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Consumers MAY support stylesheets
                that support or prohibit the use of external linking
                mechanisms, depending on business decisions and the
                assessment of risk associated with this functionality. 
                <b>[BP-079]</b></p></td>
    </tr>
</table>


#### How Negation Works in C-CDA Templates

C-CDA entry templates include a negationInd attribute for Act classes (act, procedure, encounter, substanceAdministration, supply, and observation). When Act.negationInd is set to "true," it asserts that the Act as a whole is negated. Certain properties like Act.id, Act.moodCode, and participations remain unaffected and retain their original meaning.

A statement with negationInd still conveys information about the specific fact described by the Act. For example, a negated "finding of wheezing on July 1" means the author denies the presence of wheezing on that date, assuming the same responsibility and evidence requirement as for a non-negated statement.

In the case of observations, entry templates may specify whether the observation.negationInd attribute applies to the entire act or only to the observation.value element. CDA template definitions should explicitly describe this intention.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHALL follow template
                conformance and additional companion guidance
                regarding the use of negationInd when representing
                discrete data in C-CDA documents.
                <b>[BP-080]</b></p></td>
    </tr>
    <tr style="height:37pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Consumers SHALL follow template
                conformance and additional companion guidance
                regarding the use of negationInd when processing
                discrete data represented in C-CDA documents.
                  <b>[BP-081]</b></p></td>
    </tr>
</table>


#### Specific Entry-Level Guidance

This guidance is specific to individual entry templates and has been collected from various sources, including C-CDA implementer community feedback, published implementation guides, C-CDA Implementation-A-Thons,HL7's Cross Work Group work on mappings between C-CDA and FHIR, and efforts by the HL7 C-CDA Examples Task Force.

Each entry template described below includes its purpose, details about any associated state model, information on representing negated data, and special considerations from the C-CDA implementer community's experience.

The data classes listed provide guidance for relevant entry templates associated with each data class.


#### Provenance

As demand increases for higher quality, more trusted clinical data in C-CDA documents, new efforts have emerged
to clarify basic information requirements for representing data “provenance.” Provenance provides traceability of
information and supports clinical information reconciliation and incorporation.

| **Entry Template**   | **Provenance Author Participation<br />[author: identifier urn:oid:2.16.840.1.113883.10.20.22.5.6:2019-10-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Provenance Author Participation](StructureDefinition-ProvenanceAuthorParticipation.html) |
| **Purpose**   | This template provides a mechanism to record basic Provenance in an Author Participation.  |
| **ActStatus**   | Not applicable  |
| **Negation**   | Not applicable  |
| **Other Considerations**   | This template constrains the CDA Author Participation and is appropriate at the Header, Section, or Entry level. The conformance criteria specializes the C-CDA Author Participation (2.16.840.1.113883.10.20.22.4.119) but does not require generators to include this additional templateId.  |
| **Example**   | Example 33: Use of the Provenance Author Participation  |
{:.grid}
**Table 36: Provenance Author Participation Template**


**Example 33: Use of the Provenance Author Participation**

{% include examplebutton_default.html example="provenance_author.xml" b_title = "Click Here to See 'Provenance Author Participation' Example" %}


#### Provenance mapping to FHIR

Systems can use the [Provenance Author Participation](StructureDefinition-ProvenanceAuthorParticipation.html) to identify the author of content. This corresponds to a FHIR Provenance.agent.type="author" with a relevant Provenance.target.

When a system transforms a CDA entry using a Provenance - Author template assertion, the information from the template should go into the FHIR Provenance.agent and may also fill an appropriate Resource element.

If a CDA entry lacks an explicit Provenance-Author template assertion, it may not provide enough role specificity for populating a FHIR Provenance Resource with certainty.

Implementers will need to determine suitable mappings based on the specific situation.


#### Section Time Range

The [Section Time Range Observation](StructureDefinition-SectionTimeRangeObservation.html) defines a machine-readable business rule for restricting the time interval of information within a section. It's optional and can be applied in any section to avoid overwhelming or irrelevant content. This entry links to human-readable information that explains the applied business rules found in the section's narrative text.

#### Section Time Range Observation

| **Entry Template**   | **Section Time Range Observation<br />[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.201:2016-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Section Time Range Observation](StructureDefinition-SectionTimeRangeObservation.html)  |
| **Purpose**   | This observation describes a date/time range applied by the document creator to limit the range of information contained in a section.  |
| **ActStatus**   | Section Time Range observation always has a statusCode of “completed”.<br />This template does not include an effectiveTime element. See other considerations below.  |
| **Negation**   | Not specified.  |
| **Other Considerations**   | Narrative text linking applies for this entry. The human readable information describing the date/time range used to limit the information SHOULD be reported in the Narrative Block and SHOULD NOT be implied by the section.title only.<br />The specified date/time range of the content limit is specified in the observation.value element.  |
| **Example**   | Example 34: Section Time Range Template Example  |
{:.grid}
**Table 37: Section Time Range Observation Template**

**Example 34: Section Time Range Template Example**

{% include examplebutton_default.html example="section_time_range_template.xml" b_title = "Click Here to See 'Section Time Range Template' Example" %}

#### Care Team

The C-CDA document header contains roles filled by those involved in patient care. The roles are implicit, but the [Care Teams Section](StructureDefinition-CareTeamsSection.html) and [Care Team Organizer](StructureDefinition-CareTeamOrganizer.html) templates allow for explicit documentation of care team information. These templates offer more details about the type of care team and the roles of its members, providing greater expressiveness.

##### Care Team Organizer

| **Entry Template**   | **Care Team Organizer<br />[organizer: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.500:2019-07-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Care Team Organizer](StructureDefinition-CareTeamOrganizer.html) |
| **Purpose**   | This organizer template contains information about a single care team.<br /> The author of the organizer is the person who documented the care team information.<br /> The participants of the organizer are the care team lead(s) and the care team organization.<br /> The components of the organizer contain the following information:<br /> - The encounter that caused the care team to be formed<br /> - Narrative information about the care team<br /> - The care team members<br /> - Reasons for the care team<br /> - The care team type(s) - a care team can have multiple care team types  |
| **ActStatus**   | The actStatus of this entry is statically bound to ValueSet ActStatus urn:oid:2.16.840.1.113883.1.11.15933. Implementers need to be prepared to address the specified state model. Possible states include: active, completed, cancelled, held, suspended, new, normal, nullified, obsolete, and aborted.  |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | Implementers are encouraged to take guidance from the structure of this entry, even if only populating the Narrative Block of the Care Teams Section.<br />Implementers should note the functionCode element vocabulary binding extends the set of concepts for a Care Team member’s role on the Care Team. A new value set called “Care Team Member Function” is grouped with the original value set called “ParticipationFunction.” In cases where a concept overlaps between these two value sets, implementers should use the concept from the ParticipationFunction value set.  |
| **Example**   | Example 35: Care Teams Section with Care Team Member Organizer for discrete data representation.  |
{:.grid}
**Table 38: Care Team Organizer Template**

<table><tr><td><img src="Figure 7 Logical design for Care Team Organizer Template.png" /></td></tr></table>


##### Care Team Organizer Template Design

**Logical design for Care Team Organizer Template**

**Example 35: Care Teams Section with Care Team Member Organizer for discrete data representation.**

{% include examplebutton_default.html example="care_team_member_organizer.xml" b_title = "Click Here to See 'Care Team Member Organizer' Example" %}


#### Encounter

The [Encounters Section](StructureDefinition-EncountersSection.html) lists past and ongoing patient encounters, including the one that led to the document's creation. Future appointments and requested encounters should be mentioned in the Plan of Treatment Section.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >When the document pertains to a single encounter,
                the Encounter section SHALL contain information
                about that encounter, but MAY also contain
                additional encounters. <b>[CONF-082]</b></p></td>
    </tr>
</table>

The [Encounter Activity](StructureDefinition-EncounterActivity.html) entry with a matching id in the encompassingEncounter header represents the primary encounter.

Encounter Diagnosis is always shown as an entryRelationship to an Encounter Activity, even for single encounters. Historical encounters are each documented as an Encounter Activity, with information recorded through entryRelationships within the corresponding Encounter Activity. Additional details, like free-text notes, can be conveyed through extra entryRelationships within the associated Encounter Activity.

To add a note to the Encounter, use the Note Activity entry, and link it with an entryRelationship to this new Note Activity entry template.

##### Encounter Activity

| **Entry Template**   | **Encounter Activity<br />[encounter: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.49:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Encounter Activity](StructureDefinition-EncounterActivity.html)  |
| **Purpose**   | This clinical statement describes an interaction between a patient and clinician. Interactions may include in-person encounters, telephone conversations, and email exchanges.  |
| **ActStatus**   | No constraint specified.  |
| **Negation**   | No constraint specified.  |
| **Other Considerations**   | This template may leverage the sdtc:dischargeDispositionCode extension, which records patient discharge disposition information. It may also include data on involved practitioners, encounter locations, encounter reasons, and multiple encounter diagnoses.  |
| **Reference**   | Visit [HL7 CDA Example Search](http://hl7-c-cda-examples.herokuapp.com/sections/Encounters)  |
| **Example**   | How to represent [Outpatient Encounter with Diagnoses](http://hl7-c-cda-examples.herokuapp.com/examples/view/Encounters/Outpatient%20Encounter%20with%20Diagnoses)  |
{:.grid}
**Table 39: Encounter Activity Template**


##### Encounter Diagnosis

| **Entry Template**   | **Encounter Diagnosis<br />[act: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.80:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Encounter Diagnosis](StructureDefinition-EncounterDiagnosis.html)  |
| **Purpose**   | This template wraps relevant problems or diagnoses at the close of a visit or that need to be followed after the visit.  |
| **ActStatus**   | Fixed to 'completed'.  |
| **Negation**   | No constraint specified.  |
| **Other Considerations**   | This template requires at least one contained Problem Observation template.  |
| **Reference**   | Visit [HL7 CDA Example Search](http://hl7-c-cda-examples.herokuapp.com/sections/Encounters)  |
| **Example**   | How to represent [Outpatient Encounter with Diagnoses](http://hl7-c-cda-examples.herokuapp.com/examples/view/Encounters/Outpatient%20Encounter%20with%20Diagnoses)  |
{:.grid}
**Table 40: Encounter Diagnosis Template**


##### Hospital Admission Diagnosis

| **Entry Template**   | **Hospital Admission Diagnosis<br />[act: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.34:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Hospital Admission Diagnosis](StructureDefinition-HospitalAdmissionDiagnosis.html)  |
| **Purpose**   | This template represents problems or diagnoses identified by the clinician at the time of the patient’s admission.  |
| **ActStatus**   | No constraint specified.  |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | This Hospital Admission Diagnosis act can contain multiple Problem Observations to represent multiple diagnoses during hospital admission. The only distinction from a Hospital Discharge Diagnosis is the LOINC code in the Act.code element, which is 46241-6 for Hospital Admission Diagnosis.<br />(Hospital admission diagnosis Narrative - Reported), while Hospital Discharge Diagnosis uses LOINC code 11535-2 (Hospital discharge Dx Narrative)  |
| **Example**   | Example 36: Hospital Admission Diagnosis  |
{:.grid}
**Table 41: Hospital Admission Diagnosis Template**

**Example 36: Hospital Admission Diagnosis**

{% include examplebutton_default.html example="hospital_admission_diagnosis.xml" b_title = "Click Here to See 'Hospital Admission Diagnosis' Example" %}


##### Hospital Discharge Diagnosis

| **Entry Template**   | **Hospital Discharge Diagnosis<br />[act: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.33:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Hospital Discharge Diagnosis](StructureDefinition-HospitalDischargeDiagnosis.html)   |
| **Purpose**   | This template represents problems or diagnoses present at the time of discharge which occurred during the hospitalization or need to be monitored after hospitalization.  |
| **ActStatus**   | No constraint specified.  |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | This template requires at least one contained Problem Observation template. The primary difference between a Discharge Diagnosis and a Hospital Discharge Diagnosis is the LOINC code used in the Act.code element of the act wrapper. Encounter Diagnosis uses LOINC code 29308-4 (Diagnosis), while Hospital Discharge Diagnosis uses LOINC code 11535-2 (Hospital discharge Dx Narrative)  |
| **Reference**   | [Hospital Discharge Diagnosis](StructureDefinition-HospitalDischargeDiagnosis.html) |
| **Example**   | How to reference [Hospital Discharge Encounter with Billable Diagnoses](http://hl7-c-cda-examples.herokuapp.com/examples/view/Encounters/Hospital%20Discharge%20Encounter%20with%20Billable%20Diagnoses)  |
{:.grid}
**Table 42: Hospital Discharge Diagnosis Template**

#### Orders

**Fulfilled Orders**: The inFulfillmentOf/order in the document header records fulfilled orders within the [Encompassing Encounter]({{site.data.fhir.cda}}/StructureDefinition-EncompassingEncounter.html) or [Service Event]({{site.data.fhir.cda}}/StructureDefinition-ServiceEvent.html). For instance, when a provider orders an X-Ray, and it's performed, the X-Ray order identifier goes in inFulfillmentOf/order, while the performed X-Ray procedure is documented in documentationOf/ServiceEvent. In the document body, templates are used to represent the service activities fulfilling the order, such as tests, procedures, substance administrations, supplies, encounters, or other acts.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 9pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHALL represent completed
                orders in the inFulfillmentOf area of the header for
                orders completed in the context established for the
                document. <b>[BP-083]</b></p></td>
    </tr>
    <tr style="height:49pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
            bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Consumers SHALL render information
                about completed orders documented in the
                inFulfillmentOf area of the header for orders
                completed in the context established for the
                document. For example, a consumer might opt to
                render any inFulfillmentOf/order/id elements
                where @displayable=&quot;true&quot;, the
                inFulfillmentOf/order/code/originalText or
                @displayName, or both. <b>[BP-084]</b></p></td>
    </tr>
</table>

#### Fulfilled Order

Entry templates defined to represent performed service acts are [Intervention Act](StructureDefinition-InterventionAct.html), [Procedure Activity Procedure](StructureDefinition-ProcedureActivityProcedure.html), [Immunization Activity](StructureDefinition-ImmunizationActivity.html), [Encounter Activity](StructureDefinition-EncounterActivity.html), [Medication Activity](StructureDefinition-MedicationActivity.html), [Non-Medicinal Supply Activity](StructureDefinition-NonMedicinalSupplyActivity.html), etc. Templates types are discussed in the context of the data class used to categorize the type of service act.

#### Placed Order

Entry templates defined to represent ordered service acts such as [Planned Encounter](StructureDefinition-PlannedEncounter.html), [Planned Medication Activity](StructureDefinition-PlannedMedicationActivity.html), [Planned Procedure](StructureDefinition-PlannedProcedure.html), [Planned Supply](StructureDefinition-PlannedSupply.html), etc.

Templates of these types are discussed in the context of the data class used to categorize the type of service
activity. The key distinction for representing a placed order is to utilize the moodCode attribute with a value of
RQO. RQO in comes from the HL7 ActMood code system and conceptually means “requested”. It is used to represent an ordered service activity.

#### Problem

Problem information encompasses health concerns, problem concerns, and problem observations, including statements about no known allergies.

A patient's problem is represented using templates designed for health concerns, which describe health-related matters of interest, importance, or worry, derived from various EHR sources. Problem concerns are a specific subset that typically appear on a "Problem List" and are of broad interest to the care team. Other health concerns, not typically considered problem concerns, address specific issues like transportation difficulties or underinsurance. Risk concerns, like "Risk of Hyperkalemia" for a patient taking an ACE-inhibitor medication, are also identified.

Currently, the Problem Section uses the Problem Concern template for concerns on the patient's problem list. The Health Concerns section employs Health Concern and Risk Concern templates for broader concerns and risks not typically on the problem list.

Implementers face challenges when source information doesn't align with the designed clinical statement patterns, especially regarding the concern pattern because many EHR systems organize source problem data differently in the patient's record.

#### Problem Concern

| **Entry Template**   | **Problem Concern Act<br />[act: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.3:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Problem Concern Act](StructureDefinition-ProblemConcernAct.html)  |
| **Purpose**   | This template reflects an ongoing concern on behalf of the provider who is managing the patient’s condition.  |
| **ActStatus**   | The statusCode of a concern is "active" as long as it's of interest to the provider, regardless of whether the condition is resolved. It becomes "completed" only when the condition is no longer a concern. <br />The effectiveTime reflects when the condition was concerning, which may differ from the condition's actual timeline.<br />The statusCode of the Problem Concern Act indicates the concern's status, while the effectiveTime of the nested Problem Observation specifies when the patient experienced the problem. The effectiveTime/low of the Problem Concern Act marks when the concern became active, and the effectiveTime/high indicates when it was completed, i.e., when there's no longer a need to track the condition.  |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | A Problem Concern Act can contain one or more Problem Observations (templateId 2.16.840.1.113883.10.20.22.4.4). In practice, most EHRs do not support this template design. See best practice guidance below for implementers who do not support problem concern tracking at this time.<br />Visit [HL7 CDA Example Search](http://hl7-c-cda-examples.herokuapp.com/sections/Problems) for representing the expression [“No Known Problems”](http://hl7-c-cda-examples.herokuapp.com/examples/view/Problems/No%20Known%20Problems)<br /> |
| **Reference**   | Visit [HL7 CDA Example Search](http://hl7-c-cda-examples.herokuapp.com/sections/Problems) |
| **Example**   | Example 37: Problem Concern containing a Problem Observation  |
{:.grid}
**Table 43: Problem Concern Template**

The following is guidance with respect to the relationship between the Problem Concern Act and the Problem Observation.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:257pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators who do not natively
          support organizing a patient’s problem
          observations into collections associated with a
          tracked concern SHOULD use the following
          guidance:</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">1. Populate the Act.statusCode of the Problem Concern Act to reflect the status of the clinical statement about the problem stored within the source system.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">2. Use nullFlavor=”NI” for the effectiveTime of the outer concern act wrapper.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">3. Do not populate the author participation template associated with the outer concern act wrapper.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">4. Include a single Problem Observation within the act wrapper. A future release of C-CDA will only allow the following within the act wrapper: only 1 entryRelationship of type REFR or COMP (1..1 entryRelationship of @typeCode=REFR OR @typeCode=COMP), and any number of supporting entryRelationships (0..* entryRelationship of @typeCode=SPRT)</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">5. Populate the effectiveTime of the Problem Observation with the clinically relevant time period associated with problem.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">6. Include the author participation template associated with the Problem Observation to record the person who documented the problem.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">7. Use the performer associated with the Problem Observation to record the person who made the diagnosis or observed the problem if that person is not also the author.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">8. Use the Problem Status Observation template to record the clinical status assigned to the problem. Note that clinical status is a judgement assigned by the performer of the observation.
          <b>[BP-085]</b></p></td>
    </tr>
</table>

**Example 37: Problem Concern containing a Problem Observation**

C-CDA Examples Task Force [Problem Section entry](https://hl7-c-cda-examples.herokuapp.com/sections/Problems) examples

{% include examplebutton_default.html example="problem_concern.xml" b_title = "Click Here to See 'Problem Concern' Example" %}



#### Problem Observation

| **Entry Template**   | **Problem Observation<br />[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.4:2022-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Problem Observation](StructureDefinition-ProblemObservation.html)  |
| **Purpose**   | This template reflects a discrete observation about a patient's problem.  |
| **ActStatus**   | This template always has a statusCode of “completed”.<br />The effectiveTime, also referred to as the “clinically relevant time” is the time at which the observation holds true for the patient. For a provider seeing a patient in the clinic today, observing a history of heart attack that occurred five years ago, the effectiveTime is five years ago. The effectiveTime of the Problem Observation is the definitive indication of when the problem occurred. If the problem is known to be resolved, then an effectiveTime/high would be present. If the date of resolution is not known, then effectiveTime/high will be present with a nullFlavor of "UNK". |
| **Negation**   | In this template, the negationInd attribute is used to indicate the absence of the condition in observation/value (Observation.ValueNegationInd).  |
| **Other Considerations**   | The optional Problem Status Observation template (identifier: urn:oid:2.16.840.1.113883.10.20.22.4.6) represents a clinical judgement of the status of the problem.<br /> negationInd of "true" coupled with an observation/value of SNOMED code 55607006 "Problem" indicates that the patient has [no known conditions](http://hl7-c-cda-examples.herokuapp.com/examples/view/Problems/No%20Known%20Problems).  |
| **Example**   | Example 37: Problem Concern containing a Problem Observation |
| **Example**   | Example 38: No Known Problems  |
{:.grid}
**Table 44: Problem Observation Template**


**Example 38: No Known Problems**

{% include examplebutton_default.html example="no_known_problems.xml" b_title = "Click Here to See 'No Known Problems' Example" %}


#### Health Concern, Risk Concern

A health concern signifies interest or worry about a health state, possibly requiring attention. It's a health-related matter of importance to the patient, family, or healthcare provider, derived from various EHR sources. Problem Concerns are a subset of Health Concerns, specifically those on the patient's "Problem List."

A Health Concern Act tracks suboptimal physical or psychological situations drawing the patient to healthcare. If the underlying condition remains of concern, the statusCode is "active"; it switches to "completed" when it's no longer a concern. The effectiveTime marks when the condition became concerning, not necessarily corresponding to the condition's timeline. Health concerns guide interventions to achieve care goals.

A Risk Concern Act represents potential health issues needing intervention. It's derived similarly to Health Concerns but carries different semantics with Act.code. The templates are otherwise identical, following implementer best practices for Health Concerns.

In summary, Health Concerns express health-related worries, Problem Concerns are those on the Problem List, and Risk Concerns address potential issues requiring attention, all tracked with similar templates.

| **Entry Template**   | **Health Concern<br />[act: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.132:2022-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Health Concern Act](StructureDefinition-HealthConcernAct.html)  |
| **Purpose**   | This template represents a single health concern which may be derived from a variety of sources within an EHR (such as Problem List, Family History, Social History, Social Worker Note, etc.). A Health Concern is used to track non-optimal physical or psychological situations drawing the patient to the healthcare system. These may be from the perspective of the care team or from the perspective of the patient.  |
| **ActStatus**   | When the underlying condition is of concern (i.e., as long as the condition, whether active or resolved, is of ongoing concern and interest), the statusCode is “active”. Only when the underlying condition is no longer of concern is the statusCode set to “completed”.<br />The effectiveTime reflects the time that the underlying condition was felt to be a concern; it may or may not correspond to the effectiveTime of the condition (e.g., even five years later, a prior heart attack may remain a concern).  |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | In its simplest form, a Health Concern template can be used to wrap a Problem Observation template. Also, best practice guidance associated with the Problem Concern Act template can be applied similarly to the Health Concern template.<br />Examples of a Health Concern that might not be considered a Problem Concern include: "Risk of Hyperkalemia” for a patient taking an ACE-inhibitor medication, “Transportation difficulties” for a patient who doesn’t drive and has trouble getting to appointments, or “Under-insured” for a patient who doesn’t have sufficient insurance to cover their medical needs such as medications. Problem Concerns are a subset of Health Concerns. Problem Concerns are problems and diagnoses typically found on a classic “Problem List”, such as “Diabetes Mellitus” or “Family History of Melanoma” or “Multi-vessel Coronary Artery Disease”.  |
| **Example**   | Example 39: Health Concern narrative entry |
{:.grid}
**Table 45: Health Concern Template**

**Example 39: Health Concern narrative entry**

{% include examplebutton_default.html example="health_concern_narrative.xml" b_title = "Click Here to See 'Health Concern Narrative' Example" %}


#### Allergy

Allergy information includes medication and non-medication allergy concerns and observations including
statements about no known allergies.

##### Allergy Concern

The Allergy Concern template groups multiple allergy intolerance observations into one concern. It represents patient allergies or intolerances that may need attention, intervention, or management and is typically used for items on the patient's allergy list. The Allergy Concern Act template serves as a wrapper for the underlying Allergy - Intolerance Observations.


| **Entry Template**   | **Allergy Concern Act<br />[act: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.30:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Allergy Concern Act](StructureDefinition-AllergyConcernAct.html)  |
| **Purpose**   | This template reflects an ongoing concern on behalf of the provider who is managing the patient’s care.  |
| **ActStatus**   | So long as the underlying allergy or intolerance is of ongoing concern and interest to the provider, the statusCode of the concern is “active”. Only when the underlying allergy or intolerance is no longer of concern is the statusCode of the Allergy Concern Act set to “completed.”<br />The effectiveTime reflects the time that the underlying allergy or intolerance was felt to be a concern; it may or may not correspond to the effectiveTime of the observation associated with the actual allergic reaction experienced by the patient.<br />The statusCode of the Allergy Concern Act is the status of the concern, whereas the effectiveTime of the nested Allergy - Intolerance Observation tells when the allergy or intolerance was experienced by the patient. The effectiveTime/low of the Allergy Concern Act asserts when the concern became active. The effectiveTime/high asserts when the concern was completed (e.g., when the clinician deemed there is no longer any need to track the underlying allergy or intolerance).  |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | An Allergy Concern Act can contain one or more Allergy - Intolerance Observations (templateId .16.840.1.113883.10.20.22.4.7). In practice, most EHRs do not support this template design. See best practice guidance below for implementers who do not support allergy concern tracking at this time.<br />Visit [HL7 CDA Example Search](http://hl7-c-cda-examples.herokuapp.com) for representing the expression “No Known Allergies”, [“No Known Medication Allergies”](http://hl7-c-cda-examples.herokuapp.com/examples/view/Allergies/No%20Known%20Medication%20Allergies).  |
| **Example**   | Example 40: Allergy concern for food allergy to eggs |
| **Example**   | Example 41: No known allergies |
| **Example**   | Visit [HL7 CDA Example Search](http://hl7-c-cda-examples.herokuapp.com/) for additional examples showing allergies to specific medication. |
{:.grid}
**Table 46: Allergy Concern Template**

This guidance for allergy concerns is needed because mismatches between clinical statement patterns and source information pose challenges for implementers. Many EHR systems don't organize allergy data in this manner, creating implementation difficulties.


<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:257pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators who do not natively
          support organizing a patient’s allergy/intolerance observations into collections associated with a tracked concern SHOULD use the following guidance:</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">1. Populate the Act.statusCode of the Allergy Concern Act to reflect the status of the clinical statement about the allergy/intolerance stored within the source system.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">2. Use nullFlavor=”NI” for the effectiveTime of the outer concern act wrapper.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">3. Do not populate the author participation template associated with the outer concern act wrapper.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">4. Include a single Allergy-Intolerance Observation within the act wrapper. A future release of C-CDA will only allow the following within the act wrapper: only 1 entryRelationship of type REFR or COMP (1..1 entryRelationship of @typeCode=REFR OR @typeCode=COMP), and any number of supporting entryRelationships (0..* entryRelationship of @typeCode=SPRT)</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">5. Populate the effectiveTime of the Problem Observation with the clinically relevant time period associated with allergy/intolerance.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">6. Include the author participation template associated with the Allergy-Intolerance Observation to record the person who documented the problem.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">7. Use the performer associated with the Allergy-Intolerance Observation to record the person who made the diagnosis or observed the allergy/intolerance.</p>
          <p class="s19" style="padding-left: 78pt;text-indent: 0pt;line-height: 11pt;text-align: left;">8. Use the Allergy Status Observation template to record the clinical status assigned to the problem. Note that clinical status is a judgement assigned by the performer of the observation.
          <b>[BP-086]</b></p></td>
    </tr>
</table>

**Example 40: Allergy concern for food allergy to eggs**
Please see the Example Task Forces [Allergy Examples](https://hl7-c-cda-examples.herokuapp.com/sections/Allergies)

{% include examplebutton_default.html example="allergy_concern.xml" b_title = "Click Here to See 'Allergy Concern' Example" %}

**Example 41: No known allergies**

{% include examplebutton_default.html example="no_known_allergies.xml" b_title = "Click Here to See 'No Known Allergies' Example" %}


##### Allergy – Intolerance

This guidance for allergy observations is needed because mismatches between clinical statement patterns and source information pose challenges for implementers. Many EHR systems don't organize allergy data in this manner, creating implementation difficulties.

| **Entry Template**   | **Allergy - Intolerance Observation<br />[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.7:2014-06-09 (open)]**    |
| ---- | ------ |
| **Template**   | [Allergy - Intolerance Observation](StructureDefinition-AllergyIntoleranceObservation.html)  |
| **Purpose**   | This template reflects a discrete observation about a patient's allergy or intolerance.  |
| **ActStatus**   | This is a discrete observation documented with a "completed" statusCode.<br />The effectiveTime, or clinically relevant time, indicates when the observation holds true for the patient. For instance, if a provider notes a penicillin allergy history from five years ago during a current clinic visit, the effectiveTime is five years ago. It serves as the definitive indication of when the allergy-intolerance occurred. If resolved, an effectiveTime/high is present; if ongoing, it's not.  |
| **Negation**   | In this template, the negationInd attribute is used to indicate the absence of the allergy in observation/value (Observation.ValueNegationInd).  |
| **Other Considerations**   | The optional Allergy Status Observation template (identifier: urn:oid:<br />2.16.840.1.113883.10.20.22.4.28) signifies the status of the allergy-intolerance.<br />Within the Allergy-Intolerance Observation, there is a Reaction Observation detailing the associated reaction, including its severity. Additionally, a Criticality Observation is included to indicate the seriousness of the allergy-intolerance, with possible values being high, low, or unable to assess criticality. Visit [HL7 CDA Example Search](https://hl7-c-cda-examples.herokuapp.com/examples/view/Allergies/No%20Known%20Allergies) for representing the expression “No Known Allergies. A negationInd of "true" coupled with an observation/value of SNOMED code 41919907. <br />"Allergy to substance (disorder)" indicates that the patient has no known allergies. |
| **Example**   | Example 42: Recording an allergy that started in January of 2009, but became a tracked concern as of January 4, 2014 |
| **Example**   | Example 43: Updating an allergy that is no longer a concern |
| **Example**   | Visit [HL7 CDA Example Search](http://hl7-c-cda-examples.herokuapp.com/sections/Allergies) for additional examples for allergies |
{:.grid}


**Table 47: Allergy - Intolerance Observation Template**

**Example 42: Recording an allergy that started in January of 2009, but became a tracked concern as of January 4, 2014**

{% include examplebutton_default.html example="allergy_recording.xml" b_title = "Click Here to See 'Allergy Recording' Example" %}


During an encounter, if a patient's record was updated to indicate that a penicillin allergy/intolerance concern noted one month ago, relating to an event five years ago, is no longer a concern, the CDA document would show:

- act/statusCode - completed
- act/effectiveTime/low – a month ago
- act/effectiveTime/high – today (no longer a concern)
- act/author/time – today
- act/entryRelationship/observation/effectiveTime/low – five years ago
- act/entryRelationship/observation/effectiveTime/high - not present (allergy still ongoing)

**Example 43: Updating an allergy that is no longer a concern**

{% include examplebutton_default.html example="allergy_update.xml" b_title = "Click Here to See 'Allergy Updating' Example" %}


#### Medical Equipment

Medical Equipment includes devices implanted within the patient and devices the patient has or uses.

#### Implanted Device

Each implanted device can be represented in an Individual Procedure Activity Procedure template. 

Implanted devices can also go in a Medical Equipment Organizer template. Adding device info in procedure details doesn't replace listing it in the Medical Equipment section. Each part of the Medical Equipment Organizer has a Procedure Activity Procedure template.

UDI information is essential for interoperability. Content Creators should use a UDI Organizer in a Procedure Activity Procedure to represent parsed universal identifier data for implanted devices. Content Consumers should process this info when received.

| **Entry Template**   | **Procedure Activity Procedure<br/>[procedure: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.14:2014-06-09 (open)]**    |
| ---- | ------ |
| **Template**   | [Procedure Activity Procedure](StructureDefinition-ProcedureActivityProcedure.html)  |
| **Purpose**   | This template is used to represent any type of procedure from a surgical procedure to an education session. It may be used with a contained Product Instance template to represent a device implanted in or on a patient. In this case, targetSiteCode is used to record the location of the device in or on the patient's body.  |
| **ActStatus**   | This template has a state model with states: active, completed, aborted, and cancelled. When documenting an implanted medical device, use statusCode "completed."<br />The effectiveTime, or clinically relevant time, represents when the procedure was performed, indicating when the device was implanted. Best practice is to use the TS data type to record a single point in time for the implantation.|
| **Negation**   | In this template, the negationInd attribute is used to indicate the procedure was not performed.  |
| **Other Considerations**   | A Product Instance template is used template represents a specific device used in a patient or procedure.<br />For device removal, use a separate Procedure Activity Procedure template with the device removal code. Use TS data type to record the removal time and link it to the original implant procedure using the [Entry Reference template](StructureDefinition-EntryReference.html).<br />To indicate a procedure was not performed, you may use the Indication template to explain the rationale. Multiple indication templates can be in a Procedure template.


**Example 44: Implanted Device – known procedure details**

{% include examplebutton_default.html example="implanted_device.xml" b_title = "Click Here to See 'Implanted Device' Example" %}


**Example 45: Additional Implanted Device**

{% include examplebutton_default.html example="implanted_device_2.xml" b_title = "Click Here to See 'Additional Implanted Device' Example" %}



To declare that a patient has no implanted devices, the Medical Equipment section should be used that has a
Procedure Activity Procedure entry with an effectiveTime that has a nullFlavor of ‘NA’ and a participantRole that
has an id with a nullFlavor of ‘NA’ and a code of 40388003 – Implant. This combination states that the patient has
not had a procedure to implant anything.

**Example 46: [No Implanted Devices](http://hl7-c-cda-examples.herokuapp.com/examples/view/Medical%20Equipment/No%20Implanted%20Devices)**

{% include examplebutton_default.html example="no_implanted_device.xml" b_title = "Click Here to See 'No Implanted Device' Example" %}


#### Non-Implanted Device

Non-implanted devices are represented with the Non-Medicinal Supply Activity template. This template is used to
represent devices the patient has such as eyeglasses or a cane.

| **Entry Template**   | **Non-Medicinal Supply<br/>[organizer: identifier urn: : hl7ii:2.16.840.1.113883.10.20.22.4.50:2014-06-09 (open)] )]**    |
| ---- | ------ |
| **Template**   | [Non-Medicinal Supply Activity](StructureDefinition-NonMedicinalSupplyActivity.html) |
| **Purpose**   | This template represents equipment supplied to the patient (e.g., pump, inhaler, wheelchair, cane, eyeglasses, hearing aid).  |
| **ActStatus**   | This template uses a state model that includes the full range of status values defined in the ActStatus value set (2.16.840.1.113883.1.11.15933).<br />The effectiveTime/low of the Non-Medicinal Supply act asserts when the person was first supplied with the indicated device. The effectiveTime/high asserts when the patient stopped using the supplied device. If the clinical statement is not about a specific non-medicinal device, it may be interpreted to generally describe when, for example, the patient first began wearing glasses or using a cane. If the clinical statement is about a specifically identified device, it may be interpreted to describe when the patient was supplied with that specific device. |
| **Negation**   | Not specified.  |
| **Other Considerations**   | This template is not used when represented devices that are implanted within the patient. For information about how to represent implanted devices see the Procedure Activity Procedure template. |
| **Example**   | Example 47: Non-Medicinal Supply – Cane and Eyeglasses |
{:.grid}
**Table 49: Non-Implanted Device Template**


**Example 47: Non-Medicinal Supply – Cane and Eyeglasses**

{% include examplebutton_default.html example="non_medicinal_supply.xml" b_title = "Click Here to See 'Non Medicinal Supply' Example" %}


#### Product Instance

The Product Instance template is used to represent a particular device that was placed in a patient or used as part
of a procedure or other act.

| **Entry Template**   | **Product Instance [participantRole: identifier urn:oid:2.16.840.1.113883.10.20.22.4.37]**    |
| ---- | ------ |
| **Template**   | [Product Instance](StructureDefinition-ProductInstance.html) |
| **Purpose**   | This template is used to record the identifier and other details about the given product that was used. For example, it is important to have a record that indicates not just that a hip prostheses was placed in a patient but that it was a particular hip prostheses number with a unique identifier.  |
| **ActStatus**   | Not applicable. |
| **Negation**   | Not applicable.  |
| **Other Considerations**   | The FDA Amendments Act specifies the creation of a Unique Device Identification (UDI) System that requires the label of devices to bear a unique identifier that will standardize device identification and identify the device through distribution and use. |
| **Example**   | Example 44: Implanted Device – known procedure details |
| **Example**   | Example 47: Non-Medicinal Supply – Cane and Eyeglasses |
{:.grid}
**Table 50: Product Instance Template**

#### Unique Device Identifiers

A Unique Device Identifier (UDI) is used to identify a device.

| **Entry Template**   | **UDI Organizer<br/>[organizer: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.312:2019-06-21 (open)]**    |
| ---- | ------ |
| **Template**   | [UDI Organizer](StructureDefinition-UDIOrganizer.html) |
| **Purpose**   | This template is used to manage all the UDI-related templates to exchange the parsed UDI data elements and associated metadata including: device manufacturer, lot or batch number, serial number, manufacturing date, expiration date, distinct identification code, brand name, and model number, catalog number, company name, MRI safety, latex safety, and implantable device status.  |
| **ActStatus**   | The statusCode for the organizer is not specified.<br/>The effectiveTime element for the organizer is not specified. This template only conveys information about the UDI identifiers associated with a device. |
| **Negation**   | Not specified.  |
| **Other Considerations**   | Only the device manufacturer information is required in this template. All other component observations are optional.<br/><br/>If the implantable device status information is included, it SHALL contain one of following values from the NCI Thesaurus Code System (2.16.840.1.113883.3.26.1.1):<br/>- Active (C45329)<br/>- Inactive (C154407)<br/>- Malfunctioning (C122711)<br/>- Reduced Function (C160942)<br/><br/>From the value set identified with OID 2.16.840.1.113762.1.4.1021.48 |
| ** Reference**  | [Product Instance](StructureDefinition-ProductInstance.html), [UDI Organizer](StructureDefinition-UDIOrganizer.html), [Device Identifier Observation](StructureDefinition-DeviceIdentifierObservation.html)|
| ** Reference**  | See [UDI Organizer](StructureDefinition-UDIOrganizer.html) for guidance on how to include an entryRelationship (typeCode=”COMP”) to reference a UDI Organizer containing the parsed components of the UDI identifier. The parsed components in the UDI Organizer shall align with the full UDI in the Product Instance. |
| **Example**   | [C-CDA Excamples Task Force Medical Equipment Section Examples](http://cdasearch.hl7.org/sections/Medical%20Equipment) |
{:.grid}
**Table 51: Unique Device Identifiers Template**

#### Goal

The C-CDA Goal Observation entry template is designed to represent three different types of goals: patient goals,
provider goals, and shared goals. The semantics to indicate if a goal is a patient, provider, or shared goal is
represented in the author structure of the entry. The [Progress Toward Goal observation](StructureDefinition-ProgressTowardGoalObservation.html) is designed to sit inside the Goal and Outcome Observations to track the progress towards reaching a goal.

##### Goal Observation

| **Entry Template**   | **Goal Observation<br/>[observation: identifier urn:oid:2.16.840.1.113883.10.20.22.4.121:2022-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Progress Toward Goal Observation](StructureDefinition-ProgressTowardGoalObservation.html)  |
| **Purpose**   | This template represents a patient health goal. A Goal Observation template may have related components that are acts, encounters, observations, procedures, substance administrations, or supplies.<br />A goal may be a patient or provider goal. If the author is set to the recordTarget (patient), this is a patient goal. If the author is set to a provider, this is a provider goal. If both patient and provider are set as authors, this is a negotiated goal.<br />A goal usually has a related health concern and/or risk.<br />A goal may have components consisting of other goals (milestones). These milestones are related to the overall goal through entryRelationships.  |
| **ActStatus**   | Currently bound to the single concept of “active”. This has been reported as a limitation that needs to be addressed. |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | This template current provides no guidance on what should be populated in the value element. A comment has been made against the design to request greater guidance be provided regarding the use of the value element in the design of the template.<br />This template allows for multiple author participations ([0..*]).<br />If the author is the recordTarget (patient), this is a patient goal. If the author is a provider, this is a provider goal. If both patient and provider are authors, this is a negotiated goal. If no author is present, it is assumed the document or section author(s) is the author of this goal. |
| **Example**   | C-CDA R2.1 Figure 154 Goal Observation Example |
{:.grid}
**Table 52: Goal Observation Template**
[Example task Force Goal examples](https://hl7-c-cda-examples.herokuapp.com/sections/Goals)
**Example 48: Goal Observation narrative**

{% include examplebutton_default.html example="goal_observation.xml" b_title = "Click Here to See 'Goal Observation' Example" %}


#### Social History

The Social History Observation template is a general template designed to represent a full range of social history
observations. The Social History Observation Template has been updated to leverage Gravity Value Sets covering
multiple social risk domains. See the [Screening And Assessments](screeningandassessments.html) page.

The Social History Observation template remains open to represent any SDOH observation related to conditions in
which people live, learn, work, and play even if not defined in the [Social Determinants of Health Conditions Value
Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion) or in a specific template.


<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators SHOULD use specific
                templates over general templates when an appropriate
                specific template has been defined.
                <b>[BP-087]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Social History Observation<br/>[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.38:2022-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Social History Observation](StructureDefinition-SocialHistoryObservation.html) |
| **Purpose**   | This template represents a patient's occupations, lifestyle, and environmental health risk factors. Demographic data (e.g., marital status, race, ethnicity, religious affiliation) are captured in the header.  |
| **ActStatus**   | This template always has a statusCode of “completed.”<br />This template does not include specific guidance about the meaning of the effectiveTime element. As an observation, the effectiveTime is the time at which the observation holds true for the patient. |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | Additional more specific social history observation templates also exist. They constrain the Social History Observation in specific ways to represent key social history data elements that are essential for interoperable data exchange. Though tobacco use and exposure may be represented with a general Social History Observation template, it is recommended to use the Current Smoking Status template or the Tobacco Use template instead to aid in their exchange. |
| **Example**   | Example 49: Social History Observation – Lead-Based paint in home environment illustrating use of the Social History Observation template for any social history observation |
{:.grid}
**Table 53: Entry Template**

**Example 49: Social History Observation - Lead-Based Paint in the Home**

{% include examplebutton_default.html example="social_history_observation.xml" b_title = "Click Here to See 'Social History Observation' Example" %}


#### Smoking Status

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators SHALL NOT use the Smoking
          Status– Meaningful Use template to represent
          when the current smoking status started.
          <b>[BP-088]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Smoking Status – Meaningful Use<br/>[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.78:2014-06-09 (open)]**    |
| ---- | ------ |
| **Template**   | [Smoking Status – Meaningful Use](StructureDefinition-SmokingStatusMeaningfulUse.html)  |
| **Purpose**   | This template represents the current smoking status of the patient as specified in Meaningful Use (MU) Stage 2 requirements.  |
| **ActStatus**   | This template always has a statusCode of “completed.”<br />This template represents a "snapshot in time" observation. It reflects the patient's smoking status at the time the observation is made. As a result, the effectiveTime is constrained to a time stamp that approximately corresponds with the author/time. |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | This template requires use of the following range of possible answers:<br />- Never smoked tobacco<br />- Occasional tobacco smoker<br />- Ex-smoker<br />- Heavy tobacco smoker<br />- Smokes tobacco daily<br />- Smoker<br />- Light tobacco smoker<br />- Tobacco smoking consumption unknown<br />Best practice implementation guidance allows alternate answers to be used.<br /><br />Within the Social History Section of a document there can be more than one Smoking Status observation recorded. The person’s “current” smoking status may have been recorded at several different points in time. |
| **Example**   | Example 50: Unknown Smoking Status |

{:.grid}
**Table 54: Smoking Status**

**Example 50: Smoking Status**

{% include examplebutton_default.html example="smoking_status.xml" b_title = "Click Here to See 'Smoking Status' Example" %}


#### Tobacco Use

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 9pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators SHALL use the Tobacco Use
          template to describe dates associated with
          the patient&#39;s tobacco use over time.
          <b>[BP-089]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Tobacco Use<br/>[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.85:2014-06-09 (open)]**    |
| ---- | ------ |
| **Template**   | [Tobacco Use](StructureDefinition-TobaccoUse.html)  |
| **Purpose**   | This template contains information that describes a patient's tobacco use over time.  |
| **ActStatus**   | This template always has a statusCode of “completed.”<br />The effectiveTime element is used to describe dates associated with the patient's tobacco use. It represents the clinically relevant time of the observation about the patient’s tobacco use. |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | All the types of tobacco use from the tobacco use and exposure-finding hierarchy in SNOMED CT, including codes required for recording smoking status in Meaningful Use Stage 2 are used by this template. |
| **Example**   | Example 51: Tobacco Use –Light Tobacco Smoker between 4/12/2010 and 4/12/2016. |
{:.grid}
**Table 55: Tobacco Use**


**Example 51: Tobacco Use –Light Tobacco Smoker between 4/12/2010 and 4/12/2016.**

{% include examplebutton_default.html example="tobacco_use.xml" b_title = "Click Here to See 'Tobacco Use' Example" %}

#### Birth Sex

This observation represents the biological sex assigned to the patient at birth. This observation often reflects the sex that is entered on the person's birth certificate at time of birth.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:49pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 2pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators SHALL populate the
          effectiveTime/value of the Birth Sex Observation
          template with the patient’s birthdate. The
          effectiveTime/low and effectiveTime/high elements
          SHALL NOT be used in the Birth Sex Observation
          template. Conformance SHALL be identical to the
          conformance of the birthTime metadata element.
          <b>[CONF-090]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Birth Sex Observation<br/>[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.200:2016-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Birth Sex Observation](StructureDefinition-BirthSexObservation.html) |
| **Purpose**   | This observation represents the sex of the patient at birth. It is often the sex that is entered on the person's birth certificate at time of birth.  |
| **ActStatus**   | This template always has a statusCode of “completed.” |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | This observation is intended to be used in the Social History section.<br />This observation is not appropriate for recording patient gender (administrativeGender). The patient’s administrative gender is recorded in the header of the document using the recordTarget.administrativeGender element. |
| **Example**   | Example 52: Birth Sex |
{:.grid}
**Table 56: Birth Sex Template**

**Example 52: Birth Sex**

{% include examplebutton_default.html example="birth_sex.xml" b_title = "Click Here to See 'Birth Sex' Example" %}


#### Pregnancy Status

The Pregnancy Status Observation is used to represent a person’s pregnancy status over time. It is a type of social history
observation and can included in the Social History Section. For communicating more detailed observations related
to an individual’s pregnancy status, implementers can also consider utilizing the templates in the [HL7 CDA® R2
Implementation Guide: C-CDA R2.1 Supplemental Templates for Pregnancy Status, Release 1 - US Realm](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=494).

| **Entry Template**   | **Pregnancy Status Observation<br/>[observation: identifier urn:oid:2.16.840.1.113883.10.20.15.3.8 (open)]**    |
| ---- | ------ |
| **Template**   | [Pregnancy Status Observation](StructureDefinition-PregnancyStatusObservation.html) |
| **Purpose**   | This template contains information that describes a patient's pregnancy status over time.  |
| **ActStatus**   | This template always has a statusCode of “completed.”<br />The effectiveTime element is used to describe dates associated with the patient's different pregnancy statuses over time. It represents the clinically relevant time of the observation about the patient’s pregnancy status. |
| **Negation**   | Not explicitly specified.  |
| **Other Considerations**   | The value element of this template holds the patient’s pregnancy status. Possible coded concepts for this data element include:<br />- Possible pregnancy (finding)<br />- Not pregnant (finding)<br />- Pregnant (finding) |
| **Example**   | Example 53: Patient was pregnant from 4/10/2011 to 1/12/2012 |
| **Example**   | Example 54: Patient was not pregnant |
| **Example**   | Example 55: Unknown if the patient was pregnant or not |
{:.grid}
**Table 57: Pregnancy Status Observation**

**Example 53: Patient was pregnant from 4/10/2011 to 1/12/2012**

{% include examplebutton_default.html example="pregnancy.xml" b_title = "Click Here to See 'Pregnancy' Example" %}

To indicate that the patient was not pregnant during a specified date range, the Pregnancy Status Observation entry
should also be used, but with a negationInd set to “true” to indicate that the patient was not pregnant during the
date range specified by the effectiveTime element.

**Example 54: Patient was not pregnant**

{% include examplebutton_default.html example="not_pregnant.xml" b_title = "Click Here to See 'Not Pregnant' Example" %}

Finally, to indicate that it was unknown if the patient was pregnant or not, then a nullFlavor should be used on the
observation to indicate that the patient’s pregnancy status was unknown. An effectiveTime element can be
included to assert the period over which it was unknown.

**Example 55: Unknown if the patient was pregnant or not**

{% include examplebutton_default.html example="unknown_pregnant.xml" b_title = "Click Here to See 'Unknown Pregnant' Example" %}


#### Result

Results generated by laboratories, imaging procedures, and other procedures are coded as result observations and
contained within a Results Organizer. The Result Organizer.code element is used to categorize the contained
results into one of several commonly accepted values (e.g., “Hematology”, “Chemistry”, “Nuclear Medicine”). This is how laboratory tests are distinguished from Diagnostic imaging tests.

##### Pathology and Laboratory Result Domain

Pathology is the superset domain that encompasses several subdisciplines: anatomic pathology, chemical pathology, clinical pathology, forensic pathology, genetic pathology, hematology, immunopathology, etc.([Pathology Tests Definition](https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/Blood-and-pathology-tests)).
Therefore, a laboratory test is a type of pathology test.

##### Result Organizer

This template provides a mechanism for grouping result observations. It contains information applicable to all of
the contained result observations. If any Result Observation within the organizer has a statusCode of "active", the Result Organizer must also have a statusCode of "active."

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 5pt;text-indent: 0pt;text-align: left;"
          >The Result Organizer.code element is used to
          categorize the contained results. This element
          SHOULD be populated with a LOINC code that defines
          a specific test panel (<i>e.g</i>., “CBC W Auto
          Differential panel - Blood“) or general type of testing (<i>e.g.,
          </i>“Hematology”, “Chemistry”, “Nuclear
          Medicine”). <b>[BP-091]</b></p></td>
    </tr>
                <tr style="height:37pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 5pt;text-indent: 0pt;text-align: left;"
          >The Result Organizer should contain at least one Result Observation <b>[BP-092]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Result Organizer<br/>[organizer: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.1:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Result Organizer](StructureDefinition-ResultOrganizer.html)  |
| **Purpose**   | This template provides a mechanism for grouping result observations. It contains information applicable to all of the contained result observations.  |
| **ActStatus**   | If any Result Observation within the organizer has a statusCode of "active", the Result Organizer must also have a statusCode of "active".<br />The range of time specified in the Result Organizer/effectiveTime element should encompass the lowest effectiveTime/low and the highest effectiveTime/high for the Result Observations within the organizer. |
| **Negation**   | Not specified.  |
| **Other Considerations**   | If the Author Participation template is specified for the Organizer, this context applies to all the component observations unless a component observation includes a different Author Participation template.) |
| **Example**   | Example 56: Result Organizer for CBC W Auto Differential panel - Blood |
{:.grid}
**Table 58: Result Organizer Template**

**Example 56: Result Organizer for CBC W Auto Differential panel - Blood**

C-CDA Example Task Force [Result Section](https://hl7-c-cda-examples.herokuapp.com/sections/Results) examples

{% include examplebutton_default.html example="result_organizer.xml" b_title = "Click Here to See 'Result Organizer' Example" %}


#### Result Observation

| **Entry Template**   | **Result Observation<br/>[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.2:2023-05-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Result Observation](StructureDefinition-ResultObservation.html) |
| **Purpose**   | This template represents the results of a laboratory, radiology, or other study performed on a patient.  |
| **ActStatus**   | The result observation includes a statusCode to allow recording the status of an observation. “Pending” results (e.g., a test has been run but results have not been reported yet) should be represented as “active” ActStatus.<br />The effectiveTime element represents the clinically relevant time of the measurement (e.g., the time a blood pressure reading is obtained, the time the blood sample was obtained for a chemistry test). |
| **Negation**   | Not specified. To indicate that a test was not performed use the Procedure Activity Procedure template with the negationInd attribute of “true.”<br />|
| **Other Considerations**   | If the Author Participation template is specified for the Organizer, this context applies to all the component observations unless a component observation includes a different Author Participation template.<br />If any Result Observation within the organizer has a statusCode of "active," the Result Organizer must also have a statusCode of "active." The range of time specified in the Result Organizer/effectiveTime element should encompass the lowest effectiveTime/low and the highest effectiveTime/high for the Result Observations within the organizer. |
| **Example**   | Example 56: Result Organizer for CBC W Auto Differential panel - Blood |
{:.grid}
**Table 59: Result Observation Template**

#### Vital Signs

##### Vital Signs Organizer

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >A Vital Signs Organizer SHALL contain at least
          one Vital Sign Observation component observation
          template. <b>[CONF-093]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Vital Signs Organizer<br/>[organizer: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.26:2015-08-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Vital Signs Organizer](StructureDefinition-VitalSignsOrganizer.html) |
| **Purpose**   | This template provides a mechanism for grouping vital signs (e.g., grouping systolic blood pressure and diastolic blood pressure, BMI, body height, body weight).  |
| **ActStatus**   | A Vital Signs Organizer SHALL have a statusCode of "completed".<br />The effectiveTime may be a timestamp or an interval that spans the effectiveTimes of the contained vital signs observations. |
| **Negation**   | Not specified. |
| **Other Considerations**   | If the Author Participation template is specified for the Organizer, this context applies to all the component observations unless a component observation includes a different Author Participation template.|
| **Example**   | Example 57: Vital Signs Organizer |
{:.grid}
**Table 60: Vital Signs Organizer Template**
C-CDA Examples Task Force [Vital Sign Section examples](https://hl7-c-cda-examples.herokuapp.com/sections/Vital%20Signs)
**Example 57: Vital Signs Organizer**

{% include examplebutton_default.html example="vital_signs_organizer.xml" b_title = "Click Here to See 'Vital Signs Organizer' Example" %}

##### Vital Sign Observation

| **Entry Template**   | **Vital Sign Observation<br/>[observation: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.27:2014-06-09 (open)]**    |
| ---- | ------ |
| **Template**   | [Vital Sign Observation](StructureDefinition-VitalSignObservation.html)  |
| **Purpose**   | This template represents measurements of common vital signs.  |
| **ActStatus**   | The result observation includes a statusCode to allow recording the status of an observation. “Pending” results (e.g., a test has been run but results have not been reported yet) should be represented as “active” ActStatus.<br />The effectiveTime element represents the clinically relevant time of the measurement (e.g., the time a blood pressure reading is obtained, the time the blood sample was obtained for a chemistry test). |
| **Negation**   | Not specified. To indicate that a test was not performed use the Procedure Activity Procedure template with the negationInd attribute of “true.”<br />Reference: 5.2.15 Procedure |
| **Other Considerations**   | If the Author Participation template is specified for the Organizer, this context applies to all the component observations unless a component observation includes a different Author Participation template.<br />Vital Signs Observations require standard units to be used when recording a particular value.<br />The Vital Sign Result Type value set includes method-less types of vital sign observations. When method-specific vital sign measures are used, a more specific LOINC code can be used in the translation element of the vital sign observation code element. |
| **Example**   | Example 57: Vital Signs Organizer |
| **Example**   | Example 58: Vital Sign Coding with Translation |
{:.grid}
**Table 61: Vital Signs Observation Template**

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:37pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators SHALL represent vital sign
          observations using the vocabulary constraints and
          units of measure shown in the table below and MAY
          include more specific LOINC terms as a
          translation.</p><p class="s31"
          style="padding-left: 41pt;text-indent: 0pt;line-height: 11pt;text-align: left;"
          ><b>[CONF-094]</b></p></td>
    </tr>
</table>

| **Vital Sign**   | **LOINC Code**    | **Unit of Measure**    |
| ---------- | ---- | --- |
| **Body height**   | 8302-2  | cm  |
| **Head Occipital-frontal circumference**   | 9843-4  | cm  |
| **Body Weight**   | 29463-7  | kg  |
| **Body Temperature**   | 8310-5  | Cel  |
| **Systolic blood pressure**   | 8480-6  | Mm[Hg]  |
| **Diastolic blood pressure**   | 8462-4  | Mm[Hg]  |
| **Respiratory Rate**   | 9279-1  | /min  |
| **Body mass index (BMI) [Ratio]**   | 39156-5  | kg/m2  |
| **Body surface area Derived from formula**   | 3140-1  | m2  |
| **Heart Rate (synonym for Pulse)**   | 8867-4  | /min  |
| **Inhaled Oxygen concentration**   | 3151-8  | liters/min  |
| **Oxygen Saturation in Arterial blood**   | 2708-6  | %  |
| **Additional concept codes often needed as a translation to a method-specific measure** |
| **Oxygen saturation in Arterial blood by Pulse oximetry**   | 59408-5  | % |
| **Heart Rate by Pulse oximetry**   | 8889-8  | /min |
{:.grid}
** Table 62: Vital Sign Observation LOINC Codes and Units for Essential Vital Sign Data Elements**

**Example 58: Vital Sign Coding with Translation**

{% include examplebutton_default.html example="vital_sign_coding.xml" b_title = "Click Here to See 'Vital Sign Coding' Example" %}


#### Medication

The Medication Activity Entry template is used to record a medication that has been administered and also is used
to record statements about medications being taken. These two clinical statement patterns are identical, so the
semantics is discerned through the context of use. Both are represented as a Medications with a
substanceAdministration/@moodCode="EVN". A statement of this type can be interpreted to represent an actual
administration of the medication. It also can be used to make a statement about the medication a patient takes.

The Admission Medication and Discharge Medication entry templates include a structural context around the
Medication Activity Entry template. The additional structure includes semantic coding that identifies the
medication information as admission or discharge medication information.

**Example 59: Medication Administration**

{% include examplebutton_default.html example="medication_administration.xml" b_title = "Click Here to See 'Medication Administration' Example" %}

Medication activities with substanceAdministration/@moodCode= "INT" document what a clinician intends a
patient to be taking. For example, a clinician may intend that a patient begin taking Lisinopril 20 mg PO for blood
pressure control. The Planned Medication Activity entry can also be used to record a medication that the physician
intends the patient to take at some time in the future.

**Example 60: Planned Medication**

{% include examplebutton_default.html example="planned_medication.xml" b_title = "Click Here to See 'Planned Medication' Example" %}


The Medication Supply Order entry records activities associated with ordering medications. The Medication
Dispense entry records when medications are dispensed to the patient.

**Example 61: Medication Dispense**

{% include examplebutton_default.html example="medication_dispense.xml" b_title = "Click Here to See 'Medication Dispense' Example" %}

The structure of a medication entry can be complex. It is complicated by the fact that any one of these templates
may include other types of medication templates within additional entryRelationships. To support interoperability,
implementers should minimize the amount of template nesting used to express medication information.

When representing medications, consideration needs to be given to the way date/time intervals are represented.
See Chapter 5.1.10.2 Date/Time Precision for additional information about how to represent and interpret date
ranges that use an effectiveTime/low and effectiveTime/high. The CDA Example Task Force includes a document
that summarizes commonly used [medication frequencies](https://docs.google.com/document/d/1Y0Z458o_MrR2aPnpx6EygO6hpI88Bl95esjRWZ0agtY/edit).

C-CDA Examples Task Force [Medication Examples](https://hl7-c-cda-examples.herokuapp.com/sections/Medications)

#### Immunization

##### Recording Immunization Date

When recording an actual immunization (with moodCode = EVN), the effectiveTime represents when the
immunization was given, and this will generally just be a single dateTime value. Most of the time, when recording
the immunization date, the effectiveTime element should contain just a single @value. However, there is a use
case for using an interval when requesting an immunization, i.e. have this immunization done between date 1 and
date 2.

C-CDA Examples Task Force [Immunization Examples](https://hl7-c-cda-examples.herokuapp.com/sections/Immunizations)

{% include examplebutton_default.html example="immunization_date.xml" b_title = "Click Here to See 'Immunization Date' Example" %}


#### Immunization Status Code

When recording the immunization status code, the normal value would be “completed”, as this represents an
immunization that has been completely given. In extremely rare circumstances, a status of “active” could be used.
The use of ”active” implies that a single immunization is still on-going. This would not be appropriate for one shot
in a series of immunizations. Series immunizations should be represented with multiple Immunization Activity entries.

#### Procedure

Historically, C-CDA, up to version 2.1, aligned with the HL7 v3 RIM definition of a procedure as an act that alters the physical condition of the subject. It defined three procedure types using the Observation and Act classes for procedures that do not alter the subject's physical condition. Industry uses the procedure template design regardless of procedure type, which is contained in C-CDA as the Procedure Activity Procedure Template. This template records current and historical procedures performed on or for a patient, encompassing various activities like surgical, diagnostic, endoscopic procedures, counseling, physiotherapy, and more. These procedures can be performed by healthcare professionals, service providers, friends or relatives, or even the patients themselves.

##### Procedure

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:49pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 28pt;text-indent: 0pt;text-align: left;"
          >When representing that a procedure was not
          performed, the Indication (identifier:
          urn:hl7ii:2.16.840.1.113883.10.20.22.4.19:2023-05-01
          template MAY be used to represent the rationale
          for not performing the procedure. More than one
          indication template may be contained within a Procedure template<b>.
          [BP-095]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Procedure Activity Procedure<br />[procedure: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.14:2022-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Procedure Activity Procedure](StructureDefinition-ProcedureActivityProcedure.html) |
| **Purpose**   | This template records current and historical procedures performed on or for a patient, encompassing various activities like surgical, diagnostic, endoscopic procedures, counseling, physiotherapy, and more. These procedures can be performed by healthcare professionals, service providers, friends or relatives, or even the patients themselves. |
| **ActStatus**   | The template includes a state model that includes active, completed, aborted, and cancelled.<br />The effectiveTime, also referred to as the “clinically relevant time” is the time at which the procedure was performed. If the status of a procedure was active at the time a C-CDA document was created, the effectiveTime/low would indicate the date/time the procedure was started and the effectiveTime/high SHOULD not be present. If the status of a procedure was completed, aborted or cancelled, the effectiveTime/high SHOULD be populated. Implementer best practice would be use of the TS_IVL data type. For implementers who are not able to represent a time interval, effectiveTime/value MAY be populated. |
| **Negation**   | In this template, the negationInd attribute is used to indicate the procedure was not performed. |
| **Other Considerations**   | When representing that a procedure was not performed, the<br />Indication (identifier: urn:hl7ii:2.16.840.1.113883.10.20.22.4.19:2014-06-09 template MAY be used to represent the rationale for not performing the procedure. More than one indication template may be contained within a Procedure template. |
| **Example**   | How to represent [Procedure Activity Procedure](http://hl7-c-cda-examples.herokuapp.com/sections/Procedures) |
{:.grid}



#### Assessment

An assessment is a collection of observations that together yield a summary evaluation of a particular condition.
Examples include the Braden Scale (assesses pressure ulcer risk), APACHE Score (estimates mortality in critically ill
patients), Mini-Mental Status Exam (assesses cognitive function), APGAR Score (assesses the health of a newborn),
and Glasgow Coma Scale (assesses coma and impaired consciousness). This template is
designed to represent both the question or type of information assessed as well as the associated answer/result.

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:26pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >The Assessment Scale Observation Template SHOULD be
                used to represent the content of the Assessment.
                  <b>[BP-096]</b></p></td>
    </tr>
</table>

##### Assessment Scale Observation

| **Entry Template**   | **Assessment Scale Observation<br />[observation: identifier urn:oid:2.16.840.1.113883.10.20.22.4.69:2022-06-01 (open)]**    |
| ---- | ------ |
| **Template**   | [Assessment Scale Observation](StructureDefinition-AssessmentScaleObservation.html) |
| **Purpose**   | An assessment scale is a collection of observations that together yield a summary evaluation of a particular condition.  |
| **ActStatus**   | This template always has a statusCode of “completed”.<br />The effectiveTime represents the clinically relevant time of the measurement, which may be when the assessment was performed. |
| **Negation**   | Not specified. |
| **Other Considerations**   | The observation/value element represents the “answer” or result for the assessed “question” or measurement. The clinical statement may also include an interpretation and may include multiple reference ranges. Additionally, each assessment scale observation may contain zero or more Assessment Scale Supporting Observations. This structure allows the Assessment Scale Observation to mirror the format of many assessment tools. An Assessment Scale Supporting Observation represents the components of a scale used in an Assessment Scale Observation. The individual parts that make up the component may be a group of cognitive or functional status observations. |
| **Example**   | [PHQ-9](https://cdasearch.hl7.org/examples/view/Mental%20Status/Patient%20Health%20Questionnaire%20PHQ-9) |
| **Example**   | [WE CARE](https://hl7-c-cda-examples.herokuapp.com/examples/view/Social%20History/WE%20Care%20Assessment) |
| **Example**   | [Glasgow Coma](https://hl7-c-cda-examples.herokuapp.com/examples/view/Functional%20Status/Functional%20Assessment%20-%20Glasgow%20Coma) |
{:.grid}
**Table 64: Assessment Scale Observation Template**


#### Clinical Note

Note Activity entries provide structured information for notes found in a Notes Section or designated sections in clinical note documents, making the human-readable narrative notes more machine-processable.

##### Note Activity

<table
    style="border-collapse:collapse;margin-left:24.01pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
          style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
          bgcolor="#C5D9F0"><p class="s19"
          style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
          >C-CDA Content Creators SHOULD NOT use the Note
          Activity template in place of a more specific
          C-CDA entry template. <b>[BP-097]</b></p></td>
    </tr>
</table>

| **Entry Template**   | **Note Activity<br />[act: identifier urn:hl7ii:2.16.840.1.113883.10.20.22.4.202:2016-11-01 (open)]]**    |
| ---- | ------ |
| **Template**   | [Note Activity ](StructureDefinition-NoteActivity.html) |
| **Purpose**   | The Note Activity represents a clinical note.  |
| **ActStatus**   | This template always has a statusCode of “completed.”<br />The effectiveTime represents the clinically relevant time of note, which may be when the note was written. |
| **Negation**   | Not specified. |
| **Other Considerations**   | Similar to Comment Activity, Note Activity allows for specific coding of note content, ensuring relevance to the document's message. It can augment data in a related standard C-CDA entry using entryRelationship, such as adding it to a Procedure Activity Procedure or an Encounter Activity in the Encounters Section. The Note Activity template can also stand alone in a C-CDA section (e.g., a note about procedures in the Procedures Section) or enhance a narrative-only section like Hospital Course. When the data type is unknown or no single section fits, place the Note Activity in a general Notes Section, such as a free-text consultation note or one with subjective, objective, assessment, and plan information combined. The examples below illustrate various clinical note representations using the Note Activity template.|
{:.grid}
**Table 65: Note Activity Template**

**Example 63: Note Activity as entryRelationship to C-CDA Entry.**

{% include examplebutton_default.html example="note_activity_entryRelationship.xml" b_title = "Click Here to See 'Note Activity Entry Relationship' Example" %}


**Example 64: Note Activity as Standalone Entry**

{% include examplebutton_default.html example="note_activity_standalone.xml" b_title = "Click Here to See 'Note Activity Standalone' Example" %}

**Example 65: Rich Text Format (RTF) Example**

{% include examplebutton_default.html example="rich_text_format.xml" b_title = "Click Here to See 'Rich Text Format' Example" %}

#### Advance Directive

In addition to the entry templates defined in the [Advance Directive Section](StructureDefinition-AdvanceDirectivesSection.html), additional Advance Directive C-CDA compatible templates from [HL7 CDA® R2 Implementation Guide: C-CDA R2.1; Advance Directives Templates, Release 1 ](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=473), or newer versions of this Advance Directive guide, may be used in C-CDA documents.


<table
    style="border-collapse:collapse;margin-left:18.61pt"
    cellspacing="0">
    <tr style="height:29pt">
        <td
            style="width:468pt;border-top-style:solid;border-top-width:1pt;border-left-style:solid;border-left-width:1pt;border-bottom-style:solid;border-bottom-width:1pt;border-right-style:solid;border-right-width:1pt"
                bgcolor="#C5D9F0"><p class="s19"
                style="padding-left: 41pt;padding-right: 8pt;text-indent: 0pt;text-align: left;"
                >C-CDA Content Creators MAY use templates
                and template versions from HL7 CDA® R2 Implementation Guide: C-CDA R2.1; Advance Directives Templates, Release 1 or newer versions for representing Advance
                Directive information. <b>[BP-098]</b></p></td>
    </tr>
</table>


#### Indications and Reasons
##### Use of Indication Versus Reason Templates

In certain situations, clinicians need to record why something was or was not done. C-CDA provides three
methods to record this information:

- [Indication](StructureDefinition-Indication.html) is used to represent the rationale for an action such as an encounter, a medication administration, or a procedure. 
- [Reason](StructureDefinition-Reason.html) is used to provide the rationale for why something was not done.
- [Immunization Not Given Reason](StructureDefinition-ImmunizationNotGivenReason.html) is used to represent the rationale for the patient declining an immunization as the value set is crafted for the immunization use case.

---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/terminology.md


This page lists all the ValueSets, CodeSystems, and ConceptMaps defined as part of the Consolidated CDA Implementation Guide

### Value Sets

These value sets are used in this implementation guide:

{% include valueset-ref-all-table-generator.html %}

### Code Systems

These code systems are used in this implementation guide:

{% include codesystem-ref-all-table-generator.html %}

---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/uscdi.md

<!-- {% raw %} to make the USCDI table

need 

source CSV file = `input/data/uscdi-table.csv`
markdown page file = `input/pagecontent/uscdi.md`
liquid template files = `input/includes/uscdi-ccda-map.html`,`input/includes/sd_link.html`
icons (png files) = `input/images/<"kebab case" USCDI class names>.png`

1. create the source CSV file with all the same column names
    - FHIRPath column is not used for rendering so can replace with template name or whatever
    - this file lives in the `input/data` folder
    - It is copied to the `input/images` folder as both a csv and convert to excel file using a bash/python script.
2. The pagecontent/uscdi.md page is where the table is rendered
3. the liquid template tag "{% include uscdi-ccda-map.html %}" references `includes/uscdi-ccda-map.html` which does the rendering
   - this file depends on another liquid template {% include sd_link.html title = title  %} which refererence `includes/sd_link.html` to get the profile page link.
   1. icons (png images) are in the `input/images` are named using the "kebab case" USCDI class names.{% endraw %} -->

The C-CDA templates were designed to meet the 2015 Edition certification criterion for Consolidated CDA Creation 170.315(g)(6). They were created for each item in the [2015 Edition Common Clinical Data Set (CCDS)](https://www.healthit.gov/sites/default/files/ccds_reference_document_v1_1.pdf). The C-CDA templates on this page contain requirements up to and including [U.S. Core Data for Interoperability (USCDI) v5](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi).  Consolidated CDA is based on community input and used for USCDI  ONC certification.

Note that:
-  USCDI Data Classes and Element names may not be the same as the C-CDA template names and element names.
-  Not every USCDI Data Class and Element is mapped to a single template.
-  Many C-CDA elements do not map to a USCDI Data Class or Element because C-CDA usage is broader than certification and because additional C-CDA elements are required to make CDA implementable.

ONC's USCDI and Consolidated CDA are complementary initiatives, with USCDI defining high-level data requirements and Consolidated CDA providing detailed templates for meeting those requirements. Mapping between them is necessary for achieving interoperability and consistency in healthcare data exchange within the United States.  Consolidated CDA is broader than USCDI and therefore, to make USCDI implementable in CDA, interpretation of USCDI is necessary.  USCDI data classes and element names may not be the same as the Consolidated CDA template and element names.

Updates to C-CDA depend upon community input and we encourage our audience to submit questions and feedback to C-CDA specifications by clicking on the *Propose a change* link in the footer of every page.  In addition, we encourage our audience to request any necessary clarifications to USCDI through the [USCDI ONDEC process](https://www.healthit.gov/isa/ONDEC) that helps inform future updates to C-CDA.

| USCDI Version | Referenced Specification                      |
|---------------|----------------------------------------------|
| v5            | [C-CDA STU 4.0](https://hl7.org/cda/us/ccda/) |
| v4            | [C-CDA STU 3.0](https://hl7.org/cda/us/ccda/) |
| v3            | [C-CDA Companion Guide Release 4.1](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)      |
| v2            | [C-CDA Companion Guide Release 3](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)        |
| v1            | [C-CDA Companion Guide Release 2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=447)        |
{:.grid}

The table below lists the C-CDA templates used for the corresponding USCDI Data elements.  It is a mapping between USCDI data elements and C-CDA Templates and C-CDA elements.

<!-- Do we add this later: This information is also available as a [csv](uscdi-table.csv) or [excel](uscdi-table.xlsx) file -->

{% include uscdi-ccda-map.html %}








   


---

File: repos/HL7_SLASH_CDA-ccda/input/pagecontent/validation.md

### Validate C-CDA Documents Using FHIR Tooling
The FHIR validator can be used to validate C-CDA documents.  There are three ways of using the FHIR validator.

#### Web version of the FHIR Validator
There is a web version of the FHIR validator available at [validator.fhir.org](https://validator.fhir.org).  Simply select "US CCDA Document" from the "Common Validation Options", paste in your document, and validate.

#### Run FHIR validator locally
There is a Java version of the FHIR validator that can be run locally.  Information is available on how to do this at [Using the FHIR Validator](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator).  An example command line for running it is:

java -jar validator_cli.jar -ig hl7.cda.us.ccda#current -profile http://hl7.org/cda/us/ccda/StructureDefinition/specific-document-template document-file-name

#### Incorporate the FHIR validator into your code

There is a [Confluence page](https://confluence.hl7.org/pages/viewpage.action?pageId=35718864#ProfileTooling-ValidatingResourcesagainstthespecificationandProfiles) that addresses how to incorporate the FHIR validator into your code.

### Validate C-CDA Documents Using Schematron
For those who prefer Schematron validation for C-CDA documents, HL7 created an [open-source tool](https://github.com/HL7/fhir-cda-validation) which generates Schematron and other validation files for implementation guides created with FHIR StructureDefinitions. While we plan to integrate this functionality into the IG Publisher in the future, you can currently find C-CDA Schematron in the implementation guide's [GitHub repository](https://github.com/HL7/CDA-ccda/releases/).

To learn more about how the Schematron is generated and how other CDA implementation guides using FHIR StructureDefinitions can utilize it, refer to the [Confluence Documentation](https://confluence.hl7.org/display/SD/FHIR-CDA-Validation).


---

