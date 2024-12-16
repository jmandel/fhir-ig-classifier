File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/adverseEventResearchProfile.fsh

Extension: Note
Id: note
Title: "Note"
Description: "Comments made about the adverse event by the performer, subject or other participants."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* value[x] only Annotation

Extension: ExpectedInResearchStudy
Id: expected-in-research-study
Title: "Expected In Research Study"
Description: "Considered likely or probable or anticipated in the research study.  Whether the reported event matches any of the outcomes for the patient that are considered by the study as known or likely."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* value[x] only boolean

Extension: Status
Id: status
Title: "Workflow Status"
Description: "The current workflow state of the adverse event or potential adverse event. This is not the reporting of the event to any regulatory or quality organization.  This is not the outcome of the patient's condition."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* . ^isModifier = true
* . ^isModifierReason = "This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid"
* value[x] only code
//* valueCode from http://hl7.org/fhir/ValueSet/adverse-event-status (required)
* valueCode from adverse-event-status-vs (required)


//AdverseEvent.supportingMedicationInfo
//MedicationAdministration | MedicationStatement
//Extension: SupportingMedicationInfo
//Id: supporting-medication-info
//Title: "Additional information regarding medications the subject is taking"
//Description: "Provides references to medications the subject has been prescribed for additional context. These should be medications that are not suspected or considered as potential suspects for the adverse event. For example, a patient who became nauseous after eating a study drug that was not meant to be taken orally. This element could indicate that the patient was using topical acne medication."
//* value[x] only Reference(MedicationStatement)


//AdverseEvent.contributingFactor
Extension: ContributingFactor
Id: contributing-factor
Title: "Contributing Factor"
Description: "The contributing factors suspected to have increased the probability or severity of the adverse event."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* extension contains
    item 1..1
* extension[item] ^short = "Item suspected to have increased the probability or severity of the adverse event"
* extension[item].valueReference only Reference(Condition or Observation or AllergyIntolerance or FamilyMemberHistory or Immunization or Procedure or Device or DocumentReference or MedicationAdministration or MedicationStatement)
* extension[item].valueCodeableConcept from adverse-event-contributing-factor-vs (example)
* extension[item].valueCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* extension[item].valueCodeableConcept ^binding.extension.valueString = "AdverseEventContributingFactor"
* extension[item].valueCodeableConcept ^binding.description = "Codes describing the contributing factors suspected to have increased the probability or severity of the adverse event."


//AdverseEvent.preventiveAction
//Extension: PreventiveAction
//Id: preventive-action
//Title: "Preventive Action"
//Description: "Preventive actions that contributed to avoiding the adverse event."
//* ^context.type = #element
//* ^context.expression = "AdverseEvent"
//* extension contains
//    item 1..1
//* extension[item] ^short = "Action that contributed to avoiding the adverse event"
//* extension[item].valueReference only Reference(Immunization or Procedure or DocumentReference or MedicationAdministration or MedicationRequest)
//* extension[item].valueCodeableConcept from adverse-event-preventive-action-vs (example)
//* extension[item].valueCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
//* extension[item].valueCodeableConcept ^binding.extension.valueString = "AdverseEventPreventiveAction"
//* extension[item].valueCodeableConcept ^binding.description = "Codes describing the preventive actions that contributed to avoiding the adverse event."



//AdverseEvent.mitigatingAction
Extension: MitigatingAction
Id: mitigating-action
Title: "Mitigating Action"
Description: "Ameliorating actions taken after the adverse event occurred in order to reduce the extent of harm."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* extension contains
    item 1..1
* extension[item] ^short = "Ameliorating action taken after the adverse event occurred in order to reduce the extent of harm"
* extension[item].valueReference only Reference(Procedure or DocumentReference or MedicationAdministration or MedicationRequest)
* extension[item].valueCodeableConcept from adverse-event-mitigating-action-vs (example)
* extension[item].valueCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* extension[item].valueCodeableConcept ^binding.extension.valueString = "AdverseEventMitigatingAction"
* extension[item].valueCodeableConcept ^binding.description = "Codes describing the ameliorating actions taken after the adverse event occurred in order to reduce the extent of harm."



//AdverseEvent.suspectEntity
//AdverseEvent.suspectEntity.causality
Extension: SuspectEntity
Id: suspect-entity
Title: "Suspect Entity"
Description: "Describes the entity that is suspected to have caused the adverse event."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* extension contains
    instance 1..1 and
	causality 1..1
* extension[instance] ^short = "Refers to the specific entity that is suspected of causing the adverse event"
* extension[instance].valueCodeableConcept 
//from http://snomed.info/sct (example)
* extension[instance].valueReference only Reference(Immunization or Procedure or Substance or Medication or MedicationAdministration or MedicationStatement or Device or BiologicallyDerivedProduct or ResearchStudy)

//AdverseEvent.suspectEntity.causality
* extension[causality] ^short = "Causality - information on the possible cause of the event"

* extension[causality].extension contains
    assessmentMethod 0..1 and
    entityRelatedness 0..1 and
    author 0..1
* extension[causality].extension[assessmentMethod] ^short = "Method of evaluating the relatedness of the suspected entity to the event."
* extension[causality].extension[assessmentMethod].valueCodeableConcept from http://hl7.org/fhir/ValueSet/adverse-event-causality-method (preferred)
* extension[causality].extension[assessmentMethod].valueCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* extension[causality].extension[assessmentMethod].valueCodeableConcept ^binding.extension.valueString = "AdverseEventCausalityMethod"
* extension[causality].extension[assessmentMethod].valueCodeableConcept ^binding.description = "Codes for the method of evaluating the relatedness of the suspected entity to the event, such as ProbabilityScale | Bayesian | Checklist."

* extension[causality].extension[entityRelatedness] ^short = "Result of the assessment regarding the relatedness of the suspected entity to the event"
* extension[causality].extension[entityRelatedness].valueCodeableConcept from http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-causality-relatedness (preferred)
//adverse-event-causality-related-vs (preferred)

* extension[causality].extension[author] ^short = "Author of the information on the possible cause of the event"
* extension[causality].extension[author].valueReference only Reference(Patient or Practitioner or PractitionerRole or RelatedPerson or ResearchSubject)


//AdverseEvent.supportingInfo
Extension: SupportingInfo
Id: supporting-info
Title: "Supporting information relevant to the event"
Description: "Relevant past history for the subject. In a clinical care context, an example being a patient had an adverse event following a penicillin administration and the patient had a previously documented penicillin allergy. In a clinical trials context, an example is a bunion or rash that was present prior to the study. Additionally, the supporting item can be a document that is relevant to this instance of the adverse event that is not part of the subject's medical history. For example, a clinical note, staff list, or material safety data sheet (MSDS). Supporting information is not a contributing factor, preventive action, or mitigating action."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* extension contains
    item 1..1
* extension[item] ^short = "Subject medical history or document relevant to this adverse event"
* extension[item].valueReference only Reference(Condition or Observation or AllergyIntolerance or FamilyMemberHistory or Immunization or Procedure or DocumentReference or MedicationAdministration or MedicationStatement or QuestionnaireResponse)
* extension[item].valueCodeableConcept from adverse-event-supporting-info (example)
* extension[item].valueCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* extension[item].valueCodeableConcept ^binding.extension.valueString = "Adverse Event Supporting Info"
* extension[item].valueCodeableConcept ^binding.description = "Codes describing the supporting information relevant to the event."



//Extension: SeverityOrGrade
//Id: severity-or-grade
//Title: "Severity Or Grade"
//Description: "Describes the severity of the adverse event, in relation to the subject not the resulting condition. In the context of clinical research, it is //the investigator’s assessment of severity. For cancer related trials, severity is represented as a grade."
//* ^context.type = #element
//* ^context.expression = "AdverseEvent"
//* value[x] only CodeableConcept
//* valueCodeableConcept from adverse-event-severity-or-grade-vs (preferred)
//http://hl7.org/fhir/R4B/valueset-adverse-event-severity (preferred)
//http://hl7.org/fhir/ValueSet/adverse-event-severity (extensible)

//Extension: AdverseEventSeverity
//Id: ae-severity
//Title: "Adverse Event Severity"
//Description: "Describes the severity of the adverse event, in relation to the subject not the resulting condition. In the context of clinical research, it is //the investigator’s assessment of severity."
//* ^context.type = #element
//* ^context.expression = "AdverseEvent"
//* value[x] only CodeableConcept
//* valueCodeableConcept from http://terminology.hl7.org/ValueSet/adverse-event-severity (preferred) //adverse-event-severity-or-grade-vs (preferred)
//http://hl7.org/fhir/ValueSet/adverse-event-severity (extensible)

Extension: AdverseEventGrade
Id: ae-grade
Title: "Adverse Event Grade"
Description: "For cancer related trials, severity is represented as a grade. Describes the grade of the adverse event, in relation to the subject not the resulting condition. In the context of clinical research, it is the investigator’s assessment of severity, in oncology related trials this is reported as grade."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* value[x] only CodeableConcept
* valueCodeableConcept from http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-grades (preferred)
//adverse-event-severity-or-grade-vs 
//http://hl7.org/fhir/ValueSet/adverse-event-severity (extensible)

Extension: CausedSubjectToDiscontinueStudy
Id: caused-subject-to-discontinue-study
Title: "Adverse event caused subject to discontinue the study"
Description: "Indicates if the subject discontinued the study due to the adverse event."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* value[x] only boolean

Extension: SeriousnessCriteria
Id: seriousness-criteria
Title: "Criteria reviewed in determining serious adverse event"
Description: "Element to capture the presence or absence of specific factors (criteria) associated with serious adverse events."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* extension contains
    criterionCode 1..1 MS and
    criterionPresent 1..1
* extension[criterionCode] ^short = "Action criteria usually associated with events that pose a threat to a patient's life or functioning"
//* extension[criterionCode] ^description = "Action criteria usually associated with events that pose a threat to a patient's life or functioning"
* extension[criterionCode].value[x] only CodeableConcept
* extension[criterionCode].valueCodeableConcept from http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-seriousness-criteria (extensible)
//adverse-event-seriousness-criteria-vs (extensible)
* extension[criterionCode].valueCodeableConcept 1..1

* extension[criterionPresent] ^short = "Presence or absence of the specified criteria"
//* extension[criterionPresent] ^description = "Boolean to indicate if the specified criteria is present or absence"
* extension[criterionPresent].value[x] only boolean
* extension[criterionPresent].value[x] 1..1


Extension: ResolvedDate
Id: resolve-date
Title: "Adverse Event resolution date"
Description: "The date the adverse event was resolved."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* value[x] only dateTime

Extension: ResearchSubjectRef
Id: research-subject-ref
Title: "Research Subject record of subject"
Description: "Communicates Research Subject related metadata."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* value[x] only Reference(ResearchSubject)

//AdverseEvent.resultingEffect
Extension: ResultingEffect
Id: resultingEffect
Title: "Resulting Effect"
Description: "Information about the condition that occurred as a result of the adverse event."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* value[x] only Reference(Condition or Observation)

//AdverseEvent.participant
Extension: Participant
Id: participant
Title: "Participant"
Description: "Indicates who or what participated in the adverse event and how they were involved."
* ^context.type = #element
* ^context.expression = "AdverseEvent"
* extension contains
    function 0..1 and
	actor 1..1
* extension[function] ^short = "Type of involvement"
* extension[function].valueCodeableConcept from adverse-event-participant-function-vs (example)
* extension[actor] ^short = "Who was involved in the adverse event or the potential adverse event"
* extension[actor].valueReference only Reference(Practitioner or PractitionerRole or Organization or CareTeam or Patient or Device or RelatedPerson or ResearchSubject)

ValueSet: AdverseEventParticipantFunction
Id: adverse-event-participant-function-vs
Title: "Adverse Event Participant Functions"
Description: "This value set includes codes that describe the type of involvement of the actor in the adverse event."
* ^status = #draft
* ^experimental = true
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF	"informant"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PART	"Participation" 
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#WIT	"witness"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT	"author (originator)"

//ValueSet: AdverseEventSerCrit
//Id: adverse-event-seriousness-criteria-vs 
//Title: "Adverse Event Seriousness Criteria"
//Description: "Action criteria usually associated with serious events that pose a threat to a patient's life or functioning. Adverse Events criteria to expand on the seriousness of the adverse event. Typically used in reporting for Clinical Research, post-market surveillance (e.g. Form FDA 3500A MedWatch). The adverse event seriousness criteria value set is based on the ICH E2D Post-Approval Safety Data Management: Definitions and Standards for Expedited Reporting guidance (https://database.ich.org/sites/default/files/E2D_Guideline.pdf). For information on ICH see https://admin.ich.org/sites/default/files/inline-files/OID_Information_Paper_1.pdf from the INTERNATIONAL CONFERENCE ON HARMONISATION OF TECHNICAL REQUIREMENTS FOR REGISTRATION OF PHARMACEUTICALS FOR HUMAN USE (ICH) document ICH E2B(R3), the Electronic Transmission of Individual Case Safety Reports (ICSRs) Implementation Guide Data Elements and Message Specification, and ICH M8, the Electronic Common Technical Document"
//* ^status = #draft
//* ^experimental = true
////* codes from system seriousness-criteria-cs
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#34	"Results In Death" //"Was the serious adverse event life-threatening?"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#21	"Is Life Threatening" 
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#33	"Requires Inpatient Hospitalization"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#35	"Results In Persistent Or Significant Disability"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#12	"Congenital Anomaly or Birth Defect"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#26	"Other Medically Important Condition" 
//* fda-add-seriousness-criteria-cs#requiresPreventImpairment "Required Intervention to Prevent Permanent Impairment or Damage (Devices)"
//
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275	"Results In Death" //"Was the serious adverse event life-threatening?"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C84266	"Is Life Threatening" 
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83052	"Requires Inpatient Hospitalization"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C11338	"Results In Persistent Or Significant Disability"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83117	"Congenital Anomaly or Birth Defect"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C82521	"Other Medically Important Condition" 

//CodeSystem: FDAaddSeriousnessCriteriaCS
//Id: fda-add-seriousness-criteria-cs
//Title: "FDA Additional Seriousness Criteria CodeSystem"
//Description: "Additional codes found on https://www.fda.gov/safety/reporting-serious-problems-fda/what-serious-adverse-event#:~:text=Required%20Intervention%20to%20Prevent%20Permanent%20Impairment%20or%20Damage%20(Devices),use%20of%20a%20medical%20product. Typically used in reporting for Clinical Research, post-market surveillance (e.g. Form FDA 3500A MedWatch)."
//* ^status = #draft
//* ^caseSensitive = true
//* ^experimental = true
//* #requiresPreventImpairment "Required Intervention to Prevent Permanent Impairment or Damage (Devices)" "Report if you believe that medical or surgical intervention was necessary to preclude permanent impairment of a body function, or prevent permanent damage to a body structure, either situation suspected to be due to the use of a medical product"

//ValueSet: OutcomeAEClinRes
//Id: adverse-event-outcome-clinical-research-vs
//Title: "Adverse Event Clinical Research Outcomes"
//Description: "This value set includes codes that describe the type of outcome from the adverse event as typically used in reporting for Clinical Research, post-market surveillance (e.g. Medwatch forms). NCI codes used here This list originates from the ICH E2B R3 (https://database.ich.org/sites/default/files/E2D_Guideline.pdf), specifically CDISC CL.C66768.OUT. For information on ICH see https://admin.ich.org/sites/default/files/inline-files/OID_Information_Paper_1.pdf from the INTERNATIONAL CONFERENCE ON HARMONISATION OF TECHNICAL REQUIREMENTS FOR REGISTRATION OF PHARMACEUTICALS FOR HUMAN USE (ICH) document ICH E2B(R3), the Electronic Transmission of Individual Case Safety Reports (ICSRs) Implementation Guide Data Elements and Message Specification, and ICH M8, the Electronic Common Technical Document."
//* ^status = #draft
//* ^experimental = true
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#fatal "Fatal" //"Was the serious adverse event life-threatening?"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#notrecoveredorresolved "Not recovering/not resolved" 
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#resolvedwithsequelae "Recovered/Resolved with sequelae"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#recoveredorresolved "Recovered/Resolved"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#recoveringorresolving "Recovering/Resolving"
//
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275 "Fatal" //"Was the serious adverse event life-threatening?"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49494 "Not recovering/not resolved" 
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49495 "Recovered/Resolved with sequelae"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49498 "Recovered/Resolved"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49496 "Recovering/Resolving"



//CodeSystem: SeriousnessCriteriaCS
//Id: seriousness-criteria-cs
//Title: "Seriousness Criteria Code System"
//Description: "Action criteria usually associated with serious events that pose a threat to a patient's life or functioning"
//* #resultsInDeath "Resulted in Death" "Adverse event resulted in death"
//* #lifeThreatening "Life Threatening" "Life Threatening"
//* #resultsinHospitalization "Resulted in Hospitalization" "Resulted in Hospitalization"
//* #resultsInDisabliity "Resulted in Disability" "Resulted in Disability"
//* #isBirthDefect "Resulted in Birth defect" "Resulted in Birth Defect"
//* #requiresPreventImpairment "Required Intervention" "Required Intervention to Prevent Permanent Impairment or Damage"

ValueSet: AdverseEventSupportingInformation
Id: adverse-event-supporting-info
Title: "AdverseEvent Supporting Information"
Description: "This value set includes codes that describe the supporting information relevant to the event."
* ^status = #draft
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system SNOMED_CT where concept is-a #609328004
* include codes from system SNOMED_CT where concept is-a #416471007
* include codes from system SNOMED_CT where concept is-a #425457005
* include codes from system SNOMED_CT where concept is-a #365861007
* include codes from system SNOMED_CT where concept is-a #71388002
* include codes from system SNOMED_CT where concept is-a #404684003
* include codes from system SNOMED_CT where concept is-a #410942007
* include codes from system SNOMED_CT where concept is-a #373873005
* include codes from system SNOMED_CT where concept is-a #106181007

//ValueSet: CausalityRelatedness
//Id: adverse-event-causality-related-vs
//Title: "Causality Relatedness values"
//Description: "Value set for stating if a suspected entity is Not Related, Unlikely Related, Possibly Related, or Related to the cause of the adverse event. Using NCI codes. The values originate with ICH. For information on ICH see https://admin.ich.org/sites/default/files/inline-files/OID_Information_Paper_1.pdf from the INTERNATIONAL CONFERENCE ON HARMONISATION OF TECHNICAL REQUIREMENTS FOR REGISTRATION OF PHARMACEUTICALS FOR HUMAN USE (ICH) document ICH E2B(R3), the Electronic Transmission of Individual Case Safety Reports (ICSRs) Implementation Guide Data Elements and Message Specification, and ICH M8, the Electronic Common Technical Document"
//* ^status = #draft
//* ^experimental = true
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#notrelated "Not Related"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#unlikely "Unlikely Related"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#possibly "Possibly Related"
////* urn:oid:2.16.840.1.113883.3.989.2.1.1.19#related "Related"
//
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53256 "Not Related"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53257 "Unlikely Related"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
//* http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53260 "Related"

ValueSet: AdverseEventStatus
Id: adverse-event-status-vs
Title: "Adverse Event Status"
Description: "Codes identifying the lifecycle stage of an adverse event."
* ^status = #draft
* ^experimental = true
* http://hl7.org/fhir/event-status#in-progress
* http://hl7.org/fhir/event-status#completed
* http://hl7.org/fhir/event-status#entered-in-error
* http://hl7.org/fhir/event-status#unknown

ValueSet: AdverseEventType
Id: adverse-event-type-vs
Title: "AdverseEvent Type"
Description: "This value set includes codes that describe the adverse event or incident that occurred or was averted."
* ^status = #draft
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system SNOMED_CT where concept is-a #370894009
* SNOMED_CT#1912002

ValueSet: AdverseEventContributingFactor
Id: adverse-event-contributing-factor-vs
Title: "AdverseEvent Contributing Factor"
Description: "This value set includes codes that describe the contributing factors suspected to have increased the probability or severity of the adverse event."
* ^status = #draft
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system SNOMED_CT where concept is-a #609328004
* include codes from system SNOMED_CT where concept is-a #416471007
* include codes from system SNOMED_CT where concept is-a #425457005
* include codes from system SNOMED_CT where concept is-a #365861007
* include codes from system SNOMED_CT where concept is-a #71388002
* include codes from system SNOMED_CT where concept is-a #404684003
* include codes from system SNOMED_CT where concept is-a #410942007
* include codes from system SNOMED_CT where concept is-a #373873005
* include codes from system SNOMED_CT where concept is-a #106181007

//ValueSet: AdverseEventPreventiveAction
//Id: adverse-event-preventive-action-vs
//Title: "AdverseEvent Preventive Action"
//Description: "This value set includes codes that describe the preventive actions that contributed to avoiding the adverse event."
//* ^status = #draft
//* ^experimental = true
//* include codes from system SNOMED_CT where concept is-a #425457005
//* include codes from system SNOMED_CT where concept is-a #365861007
//* include codes from system SNOMED_CT where concept is-a #71388002
//* include codes from system SNOMED_CT where concept is-a #410942007
//* include codes from system SNOMED_CT where concept is-a #373873005
//* include codes from system SNOMED_CT where concept is-a #106181007

ValueSet: AdverseEventMitigatingAction
Id: adverse-event-mitigating-action-vs
Title: "AdverseEvent Mitigating Action"
Description: "This value set includes codes that describe the ameliorating actions taken after the adverse event occurred in order to reduce the extent of harm."
* ^status = #draft
* ^experimental = true
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system SNOMED_CT where concept is-a #71388002
* include codes from system SNOMED_CT where concept is-a #410942007
* include codes from system SNOMED_CT where concept is-a #373873005
* include codes from system SNOMED_CT where concept is-a #106181007

ValueSet: AdverseEventSeriousnessNonOnly
Id: adverse-event-seriousness-non-only-vs
Title: "AdverseEvent Seriousness Non-serious Codes Only"
Description: "This value set includes codes that describe the ameliorating actions taken after the adverse event occurred in order to reduce the extent of harm."
* ^status = #draft
* ^experimental = true
* http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#serious "Serious"
* http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#non-serious "Non-serious"


//CodeSystem: AdverseEventSeverityOrGradeCS
//Id: adverse-event-severity-or-grade-cs
//Title: "AdverseEvent Severity or Grade Codes"
//Description: "Hierarchical Code System for codes that indicate severity of the adverse event or grade."
//* ^url = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^experimental = true
//* ^caseSensitive = true
//* ^hierarchyMeaning = #is-a
//* ^property[0].code = #abstract
//* ^property[=].type = #boolean
//* ^property[=].description = "True when the code is not intended to be used"
//* ^property[+].code = #parent
//* ^property[=].uri = "http://hl7.org/fhir/concept-properties#parent"
//* ^property[=].type = #code
//* ^property[=].description = "The parent term of the current term"
//* #severity "Severity Codes" "Grouping concept for severities"
//* #severity ^property.code = #abstract
//* #severity ^property.valueBoolean = true
//* #grade "Grade Codes" "Grouping concept for grades"
//* #grade ^property.code = #abstract
//* #grade ^property.valueBoolean = true
//* #1 "Mild" "An experience that is usually transient, and requires no special treatment or intervention. The event does not generally interfere with usual daily activities. Includes transient laboratory test alterations."
//* #1 ^property[+].code = #parent
//* #1 ^property[=].valueCode = #grade
//* #1 ^property[+].code = #parent
//* #1 ^property[=].valueCode = #severity
//* #2 "Moderate" "An experience that is alleviated with simple therapeutic treatments. The event impacts usual daily activities. Includes laboratory test alterations indicating injury, but without long-term risk."
//* #2 ^property[+].code = #parent
//* #2 ^property[=].valueCode = #grade
//* #2 ^property[+].code = #parent
//* #2 ^property[=].valueCode = #severity
//* #3 "Severe" "An adverse event experience that requires intensive therapeutic intervention and interrupts usual daily activities."
//* #3 ^property[+].code = #parent
//* #3 ^property[=].valueCode = #grade
//* #3 ^property[+].code = #parent
//* #3 ^property[=].valueCode = #severity
//* #4 "Life Threatening or Disabling" "Any adverse event that places the patient, in the view of the initial reporter, at immediate risk of death from the adverse event as it occurred, i.e., it does not include an adverse experience that, had it occurred in a more severe form, might have caused death."
//* #4 ^property[+].code = #parent
//* #4 ^property[=].valueCode = #grade
//* #5 "Death Related to Adverse Event" "The termination of life associated with an adverse event."
//* #5 ^property[+].code = #parent
//* #5 ^property[=].valueCode = #grade

//https://hl7.org/fhir/R4/valueset-example-hierarchical.json.html
//http://hl7.org/fhir/R4B/valueset-example-expansion.json.html
//ValueSet: AdverseEventSeverityOrGrade
//Id: adverse-event-severity-or-grade-vs
//Title: "AdverseEvent Severity or Grade Value Set"
//Description: "This value set includes codes that indicate severity of the adverse event or grade."
//* ^status = #draft
//* ^experimental = true
//* include codes from system adverse-event-severity-or-grade-cs
////http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs
//    where parent in "severity, grade"
//* ^expansion.timestamp = "2022-05-22T13:56:07Z"
//* ^expansion.total = 8
//* ^expansion.offset = 0
//* ^expansion.parameter.name = "version"
//* ^expansion.parameter.valueString = "1.00"	
//* ^expansion.contains[+].display = "Severity codes"
//* ^expansion.contains[=].abstract = true
//* ^expansion.contains[=].contains[0].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #1
//* ^expansion.contains[=].contains[=].display = "Mild"
//* ^expansion.contains[=].contains[+].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #2
//* ^expansion.contains[=].contains[=].display = "Moderate"
//* ^expansion.contains[=].contains[+].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #3
//* ^expansion.contains[=].contains[=].display = "Severe"
//* ^expansion.contains[+].display = "Grade codes"
//* ^expansion.contains[=].abstract = true
//* ^expansion.contains[=].contains[0].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #1
//* ^expansion.contains[=].contains[=].display = "Mild"
//* ^expansion.contains[=].contains[+].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #2
//* ^expansion.contains[=].contains[=].display = "Moderate"
//* ^expansion.contains[=].contains[+].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #3
//* ^expansion.contains[=].contains[=].display = "Severe"
//* ^expansion.contains[=].contains[+].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #4
//* ^expansion.contains[=].contains[=].display = "Life Threatening or Disabling"
//* ^expansion.contains[=].contains[+].system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"
//* ^expansion.contains[=].contains[=].code = #5
//* ^expansion.contains[=].contains[=].display = "Death Related to Adverse Event"


//* ^compose.property = "parent"
//* include codes from system http://hl7.org/fhir/R4/valueset-adverse-event-severity.html
//* include codes from system http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs
//adverse-event-severity-or-grade-cs
//* compose.property[0] = #parent
//* compose.include.system = "http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs"


Invariant: aeClinRes-seriousness-1
Description: "If seriousness is serious then must have at least one seriousness criterion."
Expression: 
"(seriousness.coding
.exists(system='http://terminology.hl7.org/CodeSystem/adverse-event-seriousness' and code='serious')
and extension('http://hl7.org/fhir/uv/ae-research-backport-ig/StructureDefinition/seriousness-criteria').exists()
and seriousness.coding
.exists(system='http://terminology.hl7.org/CodeSystem/adverse-event-seriousness' and code='non-serious').not()
)
or
(seriousness.coding.exists(system='http://terminology.hl7.org/CodeSystem/adverse-event-seriousness'
and code='non-serious') and
seriousness.coding
.exists(system='http://terminology.hl7.org/CodeSystem/adverse-event-seriousness' and code='serious').not()
and
extension('http://hl7.org/fhir/uv/ae-research-backport-ig/StructureDefinition/seriousness-criteria').exists().not()
)"

//"(AdverseEvent.seriousness.coding
//.exists(system='http://terminology.hl7.org/CodeSystem/adverse-event-seriousness' and code='serious')
//and extension.where(url='http://hl7.org/fhir/uv/ae-research-backport-ig/StructureDefinition/seriousness-criteria').exists()
//)
//or
//(AdverseEvent.seriousness.coding.exists(system='http://terminology.hl7.org/CodeSystem/adverse-event-seriousness'
//and code='non-serious')
//)"
Severity: #error
//XPath: " "


Invariant:      cnt-3
Description:    "There SHALL be a code with a value of '1' if there is a value. If system is present, it SHALL be UCUM. If present, the value SHALL be a whole number."
Expression:     "(code.exists() or value.empty()) and (system.empty() or system = %ucum) and (code.empty() or code = '1') and (value.empty() or value.hasValue().not() or value.toString().contains('.').not())"
Severity:       #error


Profile: AdverseEventClinicalResearch
Parent: AdverseEvent
Id: AdverseEvent-clinical-research
Title: "Adverse Event Clinical Research"
Description: "Convenience backport into R4 of FHIR R5 Foundational profile of AdverseEvent for Clinical Research communications."

* obeys aeClinRes-seriousness-1

* modifierExtension contains
    Status named status 1..1 ?! SU 

* extension contains 
    //study-info-associated-with-AE named study-info-associated-with-AE 0..* and
	ResearchSubjectRef named research-subject-ref 0..1 and
	CausedSubjectToDiscontinueStudy named caused-subject-to-discontinue-study 0..1 and
    SeriousnessCriteria named seriousness-criteria 0..* and
//   SeverityOrGrade named severity-or-grade 0..1 and
//    AdverseEventSeverity named ae-severity 0..1 and
	AdverseEventGrade named ae-grade 0..1 and
    expected-in-research-study named expected-in-research-study 0..1 and
    Note named note 0..* and
//	Status named status 1..1 ?! SU and //?!
	ResolvedDate named resolve-date 0..1 and
//	SupportingMedicationInfo named supporting-medication-info 0..* and
	SuspectEntity named suspect-entity 0..* SU and
	ContributingFactor named contributing-factor 0..* SU and
//	PreventiveAction named preventive-action 0..* SU and
	MitigatingAction named mitigating-action 0..* SU and
	SupportingInfo named supporting-info 0..* SU and
	Participant named participant 0..* and
	ResultingEffect named resultingEffect 0..*

* modifierExtension[Status] ^short = "in-progress | completed | entered-in-error | unknown"
* modifierExtension[Status] ^definition = "The current state of the adverse event or potential adverse event."
* modifierExtension[Status] ^comment = "This is not the reporting of the event to any regulatory or quality organization.  This is not the outcome of the patient's condition."
//* modifierExtension[Status] ^isModifier = true
* modifierExtension[Status] ^isModifierReason = "This element is labeled as a modifier because it is a status element that contains status entered-in-error which means that the resource should not be treated as valid"
* modifierExtension[Status] ^binding.strength = #required
* modifierExtension[Status] ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* modifierExtension[Status] ^binding.extension.valueString = "AdverseEventStatus"
* modifierExtension[Status] ^binding.description = "Codes identifying the lifecycle stage of an event."

* extension[ResultingEffect] ^short = "Effect on the subject due to this event"

* extension[ResearchSubjectRef] ^short = "Research Subject record of subject"
//* extension[ae-severity] ^short = "The degree of something undesirable"
* extension[ae-grade] ^short = "The degree of something undesirable, used in oncology trials"
* extension[expected-in-research-study] ^short = "Considered likely or probable or anticipated in the research study"
* extension[Note] ^short = "Comment on adverse event"

* extension[ResolvedDate] ^short = "Adverse Event resolution date"

//* extension[SupportingMedicationInfo] ^short = "Additional information regarding medications the subject is taking"
//* extension[SupportingMedicationInfo] ^definition = "Provides references to medications the subject has been prescribed for additional context. These should be medications that are not suspected or considered as potential suspects for the adverse event. For example, a patient who became nauseous after eating a study drug that was not meant to be taken orally. This element could indicate that the patient was using topical acne medication."

* extension[SuspectEntity] ^short = "A suspected agent causing the adverse event"
* extension[SuspectEntity] ^definition = "Describes an entity that is suspected to have caused the adverse event."

* extension[ContributingFactor] ^short = "Contributing factors suspected to have increased the probability or severity of the adverse event"
* extension[ContributingFactor] ^definition = "A contributing factors suspected to have increased the probability or severity of the adverse event."
//* extension[PreventiveAction] ^short = "Preventive actions that contributed to avoiding the adverse event"
//* extension[PreventiveAction] ^definition = "Preventive actions that contributed to avoiding the adverse event."
* extension[MitigatingAction] ^short = "Ameliorating actions taken after the adverse event occurred in order to reduce the extent of harm"
* extension[MitigatingAction] ^definition = "The ameliorating action taken after the adverse event occurred in order to reduce the extent of harm."
* extension[SupportingInfo] ^short = "Subject medical history or document relevant to this adverse event"

* extension[Participant] ^short = "Who was involved in the adverse event or the potential adverse event and what they did"

* event 0..1 SU
* event from adverse-event-type-vs (example)
* event ^short = "Event or incident that occurred or was averted"
* event ^definition = "Specific event that occurred or that was averted, such as patient fall, wrong organ removed, or wrong blood transfused."
* event ^isModifier = false
* event ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* event ^binding.extension.valueString = "AdverseEventType"
* event ^binding.description = "Detailed type of event."

* suspectEntity 0..0
//.extension contains InstanceCodeableConcept named instance-codeable-concept 0..1
//* suspectEntity.causality 1..1 MS
//* suspectEntity.causality.productRelatedness 0..0
//* suspectEntity.causality.entityRelatedness from adverse-event-causality-related-vs (preferred)
//* suspectEntity.causality.assessment from adverse-event-causality-related-vs (preferred)

* actuality = http://hl7.org/fhir/adverse-event-actuality#actual
* actuality ^short = "actual"

//* expectedInResearchStudy 0..* MS contentReference http://build.fhir.org/adverseevent-definitions.html#AdverseEvent.expectedInResearchStudy //"expectedInResearchStudy" "Considered likely or probable or anticipated in the research study"

* event 1..1

//* occurrence[x] only Period
//* occurrencePeriod 0..1 MS
* seriousness 1..1 MS 
* seriousness from http://terminology.hl7.org/ValueSet/adverse-event-seriousness (required)
//* seriousness from adverse-event-seriousness-non-only-vs (required)

* seriousness
//obeys aeClinRes-seriousness-1
* seriousness ^short = "Investigator defined severity of the adverse event, in relation to the subject not the resulting condition"
* outcome 1..1 MS
* outcome from http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-outcomes (required)
//adverse-event-outcome-clinical-research-vs (required)
//* severity 0..0
* subjectMedicalHistory 0..0
* referenceDocument 0..0
* study 1..1 MS
* resultingCondition 0..0








---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/alias.fsh

Alias: $ae-severity-or-grade-cs = http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/adverse-event-severity-or-grade-cs
Alias: $fda-add-seriousness-criteria-cs = http://hl7.org/fhir/uv/ae-research-backport-ig/CodeSystem/fda-add-seriousness-criteria-cs


---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/exampleCancerClinicalTrial.fsh

// Cancer clinical trial example (narrative provided by Alliance), ideally this would use mCODE profiles for cancer condition and cancer medications
Instance: patient-example-kaitlyn-b
InstanceOf: Patient
Description: "Compass Trial example patient Kaitlyn"
* identifier.use = #usual
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m123"
* name.family = "Bounce"
* name.given[0] = "Kaitlyn"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "545-123-4560"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "kaitlynb@example.com"
* gender = #female
* birthDate = "1985-02-20"
* address.line = "123 Main St"
* address.city = "Anytown"
* address.postalCode = "12345"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (Region=United States)"
* communication.language.text = "English"

Instance: practitioner-oncology-nurse-jane
InstanceOf: Practitioner
Description: "Example RN practitioner"
* name.family = "Nurse"
* name.given[0] = "Jane"
* name.prefix[0] = "Ms."
* address.use = #work
* address.line[0] = "123 Corporate Drive"
* address.city = "Anytown"
* address.state = "MA"
* address.postalCode = "12345"
* address.country = "US"
* gender = #female
* qualification.code = http://terminology.hl7.org/CodeSystem/v2-0360#RN
//* qualification.code.coding[0].version = "2.7"

Instance: practitioner-owen-oncologist
InstanceOf: Practitioner
Description: "Example Oncologist"
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
//* qualification.code.coding[0].version = "2.7"

Instance: medication-request-example-kadcyla
InstanceOf: MedicationRequest
Description: "Example showing clinical trial medication Kadcyla"
* status = #active "active"
* intent = #order
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#1371046 "KADCYLA"
* subject = Reference(patient-example-kaitlyn-b)
* requester = Reference(practitioner-owen-oncologist)
//* reasonReference = Reference(kaitlyn-primary-cancer-condition-ex1)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2020-04-01"
* authoredOn = "2020-03-12"
* dosageInstruction.text = "Kadcyla IV at 3.6mg"
* dosageInstruction.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.rateQuantity = 3.6 'mg' "mg"
// Once every 21 days
* dosageInstruction.maxDosePerAdministration.value = 1

Instance: medication-request-example-tucatinib
InstanceOf: MedicationRequest
Description: "Example showing clinical trial medication Tucatinib"
//* extension[treatmentIntent].valueCodeableConcept = SCT#373808002 "Curative - procedure intent (qualifier value)"
* status = #active "active"
* intent = #order
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#2361290 "tucatinib 150 MG Oral Tablet"
* subject = Reference(patient-example-kaitlyn-b)
* requester = Reference(practitioner-owen-oncologist)
//* reasonReference = Reference(kaitlyn-primary-cancer-condition-ex1)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2020-04-01"
* authoredOn = "2020-03-12"
* dosageInstruction.text = "oral twice a day every day"
* dosageInstruction.route = http://snomed.info/sct#26643006 "Oral route (qualifier value)"
* dosageInstruction.doseAndRate.rateQuantity = 150 'MG' "MG"
// twice a day every day
* dosageInstruction.maxDosePerAdministration.value = 2

Instance: medication-administration-kadcyla
InstanceOf: MedicationAdministration
Description: "Example showing clinical trial medication adminstration Kadcyla"
* status = #completed "completed"
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#1371046 "KADCYLA"
* subject = Reference(patient-example-kaitlyn-b)
* performer.actor = Reference(practitioner-oncology-nurse-jane)
//* reasonReference = Reference(kaitlyn-primary-cancer-condition-ex1)
* request = Reference(medication-request-example-kadcyla)
* effectiveDateTime = "2020-04-01"
* note.authorReference = Reference(practitioner-oncology-nurse-jane)
* note.time = "2020-04-01"
* note.text = "3.6mg administered by continuous infusion. Patient tolerated infusion without side effects."
* dosage.dose = 3.6 'mg' "mg"
* dosage.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"

Instance: medication-administration-tucatinib
InstanceOf: MedicationAdministration
Description: "Example showing clinical trial medication adminstration Tucatinib"
* status = #completed "completed"
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#2361290 "tucatinib 150 MG Oral Tablet"
* subject = Reference(patient-example-kaitlyn-b)
* performer.actor = Reference(practitioner-oncology-nurse-jane)
//* reasonReference = Reference(kaitlyn-primary-cancer-condition-ex1)
* request = Reference(medication-request-example-tucatinib)
* effectiveDateTime = "2020-04-01"
* note.authorReference = Reference(practitioner-oncology-nurse-jane)
* note.time = "2020-04-01"
* note.text = "Patient took 2 tablets"
* dosage.dose = 300 'MG' "MG"
* dosage.route = http://snomed.info/sct#26643006 "Oral route (qualifier value)"

Instance: clinical-trial-example-compass
InstanceOf: ResearchStudy
Description: "Alliance COMPASS Protocol A011801"
* title = "Alliance COMPASS Trial A011801" 
* status =  http://hl7.org/fhir/research-study-status#active "Active"

Instance: clinical-trial-example-subject
InstanceOf: ResearchSubject
Description: "Alliance COMPASS trial research subject"
* identifier[0].use = #usual
* identifier[=].value = "ABC2134"
* status = http://hl7.org/fhir/research-subject-status#on-study "On-study"
* study = Reference(clinical-trial-example-compass)
* individual = Reference(patient-example-kaitlyn-b)
* consent.display = "this would be a reference to a Consent instance"

// mitigating action 
// Kadcyla was dose reduced to 3.0mg and 
// Tucatinib was also dose reduced to 250mg twice daily per dose 
Instance: medication-administration-kadcyla-reduced
InstanceOf: MedicationAdministration
Description: "Example reduced dose of clinical trial medication adminstration Kadcyla"
* status = #completed "completed"
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#1371046 "KADCYLA"
* subject = Reference(patient-example-kaitlyn-b)
* performer.actor = Reference(practitioner-oncology-nurse-jane)
* request = Reference(medication-request-example-kadcyla)
* effectiveDateTime = "2020-05-20"
* note.authorReference = Reference(practitioner-oncology-nurse-jane)
* note.time = "2020-05-20"
* note.text = "reduced dose of 3.0mg administered by continuous infusion. Patient tolerated infusion without side effects."
* dosage.dose = 3.0 'mg' "mg"
* dosage.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"

Instance: medication-administration-tucatinib-reduced
InstanceOf: MedicationAdministration
Description: "Example reduced does of clinical trial medication adminstration Tucatinib"
* status = #completed "completed"
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#2361290 "tucatinib 150 MG Oral Tablet"
* subject = Reference(patient-example-kaitlyn-b)
* performer.actor = Reference(practitioner-oncology-nurse-jane)
* request = Reference(medication-request-example-tucatinib)
* effectiveDateTime = "2020-05-20"
* note.authorReference = Reference(practitioner-oncology-nurse-jane)
* note.time = "2020-05-20"
* note.text = "Patient took 1 tablet 2x daily"
* dosage.dose = 250 'MG' "MG"
* dosage.route = http://snomed.info/sct#26643006 "Oral route (qualifier value)"

Instance: adverse-event-compass-ex1
InstanceOf: AdverseEvent-clinical-research
Description: "Grade 1 ALT"
* subject = Reference(patient-example-kaitlyn-b)
* modifierExtension[status].valueCode = #in-progress
* event = https://www.meddra.org#10001551  "Alanine aminotransferase increased" 
* event.text = "Alanine aminotransferase (ALT) increased at 50"

* extension[resultingEffect][0].valueReference.display = "Reference to Observation of Alanine aminotransferase (ALT) increased at 50"
* extension[supporting-info][+].extension[item].valueReference.display = "Supporting info would have context such as an Reference to Observation of Alanine aminotransferase (ALT) increased at 50"

* extension[ae-grade].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C41338
* extension[ae-grade].valueCodeableConcept.text = "Grade 1 Mild Adverse Event"

* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#non-serious "Non-serious"
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49494 "Not recovering/not resolved"
* date = "2020-04-22"
* recorder = Reference(practitioner-oncology-nurse-jane)
* extension[participant][0].extension[function].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUTHEN 
* extension[participant][=].extension[actor].valueReference = Reference(practitioner-owen-oncologist)
* study = Reference(clinical-trial-example-compass)
* extension[research-subject-ref].valueReference = Reference(clinical-trial-example-subject)
* extension[suspect-entity][0].extension[instance].valueReference = Reference(medication-administration-kadcyla)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[suspect-entity][+].extension[instance].valueReference = Reference(medication-administration-tucatinib)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[expected-in-research-study].valueBoolean = true

Instance: adverse-event-compass-ex1a
InstanceOf: AdverseEvent-clinical-research
Description: "Grade 3 ALT"
* subject = Reference(patient-example-kaitlyn-b)
* modifierExtension[status].valueCode = #in-progress
* event = https://www.meddra.org#10001551  "Alanine aminotransferase increased" 
* event.text = "Alanine aminotransferase (ALT) increased to 200"

* extension[resultingEffect][0].valueReference.display = "Reference to Observation of Alanine aminotransferase (ALT) increased at 200"
* extension[supporting-info][+].extension[item].valueReference.display = "Supporting info would have context such as an Reference to Observation of Alanine aminotransferase (ALT) increased at 200"

* extension[ae-grade].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C41340
* extension[ae-grade].valueCodeableConcept.text = "Grade 3 Severe Adverse Event"

* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#non-serious "Non-serious"
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49494 "Not recovering/not resolved"
* date = "2020-05-13"
* recorder = Reference(practitioner-oncology-nurse-jane)
* extension[participant][0].extension[function].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUTHEN 
* extension[participant][0].extension[actor].valueReference = Reference(practitioner-owen-oncologist)
* study = Reference(clinical-trial-example-compass)
//* extension[research-subject-ref].valueReference = Reference(clinical-trial-example-subject)
* extension[suspect-entity][0].extension[instance].valueReference = Reference(medication-administration-kadcyla)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[suspect-entity][+].extension[instance].valueReference = Reference(medication-administration-tucatinib)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[expected-in-research-study].valueBoolean = true
* extension[note][0].valueAnnotation.text = "treatment held today per protocol guidelines and the patient was scheduled to return in one week for repeat lab work"
// treatment held, but don't know how to document this as mitigating action

Instance: adverse-event-compass-ex1b
InstanceOf: AdverseEvent-clinical-research
Description: "ALT back to grade 1 and resolved"
* subject = Reference(patient-example-kaitlyn-b)
* modifierExtension[status].valueCode = #completed
* event = https://www.meddra.org#10001551  "Alanine aminotransferase increased" 
* event.text = "Alanine aminotransferase (ALT) decreased to 60"

* extension[resultingEffect][0].valueReference.display = "Reference to Observation of Alanine aminotransferase (ALT) decreased to 60"
* extension[supporting-info][+].extension[item].valueReference.display = "Supporting info would have context such as an Reference to Observation of Alanine aminotransferase (ALT) decreased to 60"

* extension[ae-grade].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C41338
* extension[ae-grade].valueCodeableConcept.text = "Grade 1 Mild Adverse Event"
* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#non-serious "Non-serious"
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49498 "Recovered/Resolved"
* date = "2020-05-20"
* recorder = Reference(practitioner-oncology-nurse-jane)
* extension[participant][0].extension[function].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUTHEN 
* extension[participant][0].extension[actor].valueReference = Reference(practitioner-owen-oncologist)
* study = Reference(clinical-trial-example-compass)
//* extension[research-subject-ref].valueReference = Reference(clinical-trial-example-subject)
* extension[suspect-entity][0].extension[instance].valueReference = Reference(medication-administration-kadcyla)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[suspect-entity][+].extension[instance].valueReference = Reference(medication-administration-tucatinib)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[expected-in-research-study].valueBoolean = true
* extension[resolve-date].valueDateTime = "2020-06-10"
* extension[note][0].valueAnnotation.text = "treatment given with reduced dose per protocol guidelines"
* extension[mitigating-action][0].extension[item].valueReference = Reference(medication-administration-kadcyla-reduced)
* extension[mitigating-action][+].extension[item].valueReference = Reference(medication-administration-tucatinib-reduced)

// Mitigating action
//Additional antiemetics were prescribed on 6/10/20 (Zofran 8mg orally every 6-8 hours as needed).
Instance: medication-request-example-zofran
InstanceOf: MedicationRequest
Description: "Example for medication Zofran"
* status = #active "active"
* intent = #order
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#66981 "Zofran"
* subject = Reference(patient-example-kaitlyn-b)
* requester = Reference(practitioner-oncology-nurse-jane)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2020-06-10"
* authoredOn = "2020-06-10"
* dosageInstruction.text = "orally every 6-8 hours as needed"
* dosageInstruction.route = http://snomed.info/sct#26643006 "Oral route (qualifier value)"
* dosageInstruction.doseAndRate.rateQuantity = 8 'mg' "mg"
* dosageInstruction.maxDosePerAdministration.value = 4

Instance: adverse-event-compass-ex2
InstanceOf: AdverseEvent-clinical-research
Description: "Grade 1 Nausea/vomiting"  // both are AEs, which to use or make them separate?
* subject = Reference(patient-example-kaitlyn-b)
* modifierExtension[status].valueCode = #completed
* event = https://www.meddra.org#10028813  "Nausea" 
* event.text = "Nausea"

* extension[resultingEffect][0].valueReference.display = "Reference to Condition instance of Nausea that resolved"
* extension[supporting-info][+].extension[item].valueReference.display = "Supporting info would have context such as an Reference to Condition instance of Nausea, where Condition.status is resolved."

* extension[ae-grade].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C41338
* extension[ae-grade].valueCodeableConcept.text = "Grade 1 Mild Adverse Event"

* extension[ae-grade].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C41338
* extension[ae-grade].valueCodeableConcept.text = "Grade 1 Mild Adverse Event"
* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#non-serious "Non-serious"
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49494 "Not recovering/not resolved" 
// resolved on 6/10/20 after 3 more visits - goes to grade 3 then back to 1 then WNL
* date = "2020-05-25"
* recorder = Reference(practitioner-oncology-nurse-jane)
* extension[participant][0].extension[function].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUTHEN 
* extension[participant][0].extension[actor].valueReference = Reference(practitioner-owen-oncologist)
* study = Reference(clinical-trial-example-compass)
//* extension[research-subject-ref].valueReference = Reference(clinical-trial-example-subject)
* extension[suspect-entity][0].extension[instance].valueReference = Reference(medication-administration-kadcyla)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[suspect-entity][+].extension[instance].valueReference = Reference(medication-administration-tucatinib)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[expected-in-research-study].valueBoolean = true
* extension[resolve-date].valueDateTime = "2021-01-21"
* extension[mitigating-action][+].extension[item].valueReference = Reference(medication-request-example-zofran)


---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/examples.fsh


Instance: SCHJO
InstanceOf: Patient
Usage: #example
Title: "Serious Adverse Event"
Description: "SAE Patient SCHJO on Research Study XYZ, Study ID XYZ-123, Subject number XYZ-123-002. "
* name
  * given[0] = "SCHJO"
  //* family = "Clinical Trial"
//* identifier

Instance: ClinicalTrialSubject5
InstanceOf: Patient
Usage: #example
Title: "ClinicalTrialSubject5"
Description: "Clinical Trial subject number 5. Acute Hepatic Failure."
* name
  * given[0] = "Subject 5"
  * family = "Clinical Trial"
* identifier

//https://confluence.hl7.org/pages/viewpage.action?pageId=49646529#AdverseEventUseCases--Clinicaltrial:significantadverseevent
Instance: ClinicalTrialSignificantAdverseEvent
InstanceOf: AdverseEvent-clinical-research
Usage: #example
Title: "ClinicalTrialSignificantAdverseEvent"
Description: "example"
//* actuality = http://hl7.org/fhir/adverse-event-actuality#actual 
* modifierExtension[status].valueCode = http://hl7.org/fhir/event-status#completed
* subject = Reference(ClinicalTrialSubject5)
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49496 "Recovering/Resolving"
//* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#serious
//* resultingCondition[0] = Reference(AEHepaticFailure)
* extension[ResultingEffect][0].valueReference = Reference(AEHepaticFailure)
//* resultingCondition[1] = Reference(AEHepaticFailurecomplication)
* extension[ResultingEffect][1].valueReference = Reference(AEHepaticFailurecomplication)
//* category = http://terminology.hl7.org/CodeSystem/adverse-event-category#medication-mishap "Medication Mishap"
* study.display = "NCT1010101"
//https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4435341/
//* extension[suspect-entity][0].extension[instance].valueReference.display = "Aspirin"
//* extension[suspect-entity][0].instance.display = "see instance-codeable-concept"
//* suspectEntity[=].causality.entityRelatedness = http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess#certain "Certain"
//* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess#certain "Certain"

* extension[suspect-entity][+].extension[instance].valueReference = Reference(medadmin0301) "Study Medication Use Case 7"
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53260 "Related"

* recorder.display = "Clinical Research Associate"
* detected = "1905-08-23"
* recordedDate = "1905-08-24"
* event = http://snomed.info/sct#370901008 "Serious reportable event associated with product or device"

* extension[seriousness-criteria][0].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C11338 "Results In Persistent Or Significant Disability"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83052 "Requires Inpatient Hospitalization"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = true
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275 "Death Related to Adverse Event"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C84266 "Is Life Threatening"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = true
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83117 "Congenital Anomaly or Birth Defect"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C82521 "Other Medically Important Condition"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C201939 "Required Intervention to Prevent Permanent Impairment/damage"
//$fda-add-seriousness-criteria-cs#requiresPreventImpairment "Required Intervention to Prevent Permanent Impairment or Damage (Devices)"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = true


* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#serious
* severity = http://terminology.hl7.org/CodeSystem/adverse-event-severity#severe "Severe"
//* extension[severity-or-grade].valueCodeableConcept = $ae-severity-or-grade-cs#4 "Life Threatening or Disabling"

* extension[mitigating-action][+].extension[item].valueReference = Reference(medicationrequest0301-discontinue)
* extension[mitigating-action][=].extension[item].valueReference.display = "Medication Request where study drug prescription was discontinued"


//Here we indicate medication discontinued with stopped status
Instance: medicationrequest0301-discontinue
InstanceOf: MedicationRequest
Usage: #example
Title: "Medication Request for discontinued clinical trial medication 0301"
Description: "Study medication info Medication Request for clinical trial medication 0301 - discontinued"
* contained[0] = med0301
* status = #stopped "Stopped"
* intent = #order
* identifier.use = #official
* identifier.system = "http://www.bmc.nl/portal/medstatements"
* identifier.value = "med0301-studyDrug" 
* medicationReference = Reference(med0301) 
* medicationReference.display = "study medication"
* subject = Reference(ClinicalTrialSubject5)
* authoredOn = "1905-08-23"
* requester.display = "Could be reference to inline contained profile such as Reference(practitioner-1) Ronald Bone, MD"
* reasonCode = http://snomed.info/sct#9014002 "Psoriasis"
* dosageInstruction.text = "500mg IV q6h x 3 days"
* dosageInstruction.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.method.text = "IV Push"

Instance: AEHepaticFailure
InstanceOf: Condition
Usage: #example
Title: "AEHepaticFailure"
Description: "The fifth subject enrolled in the trial develops severe hepatic failure complicated by encephalopathy one month after starting the study. The study sponsors determined that is an unanticipated problem that must be reported because although the risk of mild liver injury was foreseen, severe liver injury resulting in hepatic failure was unexpected in severity; possibly related to participation in the research; and serious."
* subject = Reference(ClinicalTrialSubject5)
* severity = http://snomed.info/sct#24484000 "Severe"
* code =  http://snomed.info/sct#197270009 "Acute Hepatic Failure"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active

Instance: AEHepaticFailurecomplication
InstanceOf: Condition
Usage: #example
Title: "AEHepaticFailurecomplication"
Description: "The fifth subject enrolled in the trial develops severe hepatic failure complicated by encephalopathy one month after starting the study. The study sponsors determined that is an unanticipated problem that must be reported because although the risk of mild liver injury was foreseen, severe liver injury resulting in hepatic failure was unexpected in severity; possibly related to participation in the research; and serious."
* subject = Reference(ClinicalTrialSubject5)
* severity = http://snomed.info/sct#24484000 "Severe"
* code =  http://snomed.info/sct#13920009 "Hepatic encephalopathy"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active

Instance: medadmin0301
InstanceOf: MedicationAdministration
Usage: #example
Title: "Medication Administration of Med0301"
Description: "Medication administration example"
* contained[0] = med0301
* contained[+] = signature
* status = #in-progress
* medicationReference = Reference(med0301)
* subject.display = "Reference(Patient/pat1) Donald Duck"
* subject.identifier.system = "http://hospital.org/"
* subject.identifier.value = "pat1"
* context.identifier.system = "http://hospital.org/"
* context.identifier.value = "f001"
* context.display = "Reference(Encounter/f001) encounter who leads to this prescription"
* effectivePeriod.start = "2015-01-15T14:30:00+01:00"
* performer.actor.identifier.system = "http://hospital.org/"
* performer.actor.identifier.value = "f007"
* performer.actor.display = "Reference(Practitioner/f007) Patrick Pump"
* reasonCode = http://terminology.hl7.org/CodeSystem/reason-medication-given#b "Given as Ordered"
* request.identifier.system = "http://hospital.org/"
* request.identifier.value = "medrx0318"
* request.display = "Reference(MedicationRequest/medrx0318)"
* dosage.text = "500mg IV q6h x 3 days"
* dosage.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"
* dosage.method.text = "IV Push"
* dosage.dose = 500 'mg' "mg"
* eventHistory = Reference(signature) "Author's Signature"

Instance: med0301
InstanceOf: Medication
Usage: #inline
* code = http://hl7.org/fhir/sid/ndc#0069-2587-10 
* code.text = "Vancomycin"
//"Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"

Instance: signature
InstanceOf: Provenance
Usage: #inline
* target.identifier.system = "http://hospital.org/"
* target.identifier.value = "physiotherapy"
* target.display = "Reference(ServiceRequest/physiotherapy)"
* recorded = "2017-02-01T17:23:07Z"
* agent.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT
* agent.who.display = "Reference(Practitioner/example) Dr Adam Careful"
* signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.1 "Author's Signature"
* signature.when = "2017-02-01T17:23:07Z"
* signature.who.display = "Practitioner/example Dr Adam Careful"
* signature.targetFormat = #application/fhir+xml
* signature.sigFormat = #application/signature+xml
* signature.data = "dGhpcyBibG9iIGlzIHNuaXBwZWQ="

---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/exampleUseCase15.fsh

// Adverse Event Example Use Case 15
Instance: GIBleed
InstanceOf: Condition
Description: "Gastrointestinal (GI) bleed"
* subject = Reference(SCHJO)
* severity = http://snomed.info/sct#24484000 "Severe"
* code =  http://snomed.info/sct#74474003 "GI hemorrhage"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active

//Research Study XYZ, Study ID XYZ-123,
Instance: research-study-XYZ
InstanceOf: ResearchStudy
Description: "Research Study XYZ"
* title = "Research Study XYZ"
* identifier.value = "XYZ-123"
* status =  http://hl7.org/fhir/research-study-status#active "Active"

// Study Medication ABC 10 mg orally daily every morning
// chose an ingredient for blood thinner just to create medication reference 
Instance: study-medication-ABC
InstanceOf: Medication
Description: "Example study medication ABC"
* code = http://www.nlm.nih.gov/research/umls/rxnorm#114194
* code.text = "warafin sodium"

Instance: study-medication-administration-ABC
InstanceOf: MedicationAdministration
Description: "Example for clinical trial medication ABC"
* status = #in-progress "In Progress"
* medicationReference = Reference(study-medication-ABC)
* subject = Reference(SCHJO)
* effectiveDateTime = "2021-06-12"
* dosage.dose = 10 'mg' "mg"
* dosage.route = http://snomed.info/sct#26643006 "Oral use"

//Here we indicate medication discontinued with stopped status
Instance: medicationrequest-for-study-medication-administration-ABC
InstanceOf: MedicationRequest
Title: "Medication Request for discontinued clinical trial medication ABC"
Description: "Study medication info Medication Request for clinical trial medication ABC - discontinued"
Usage: #example
* status = #stopped "Stopped"
* intent = #order
* identifier.use = #official
* identifier.system = "http://www.bmc.nl/portal/medstatements"
* identifier.value = "medABC-studyDrug" 
* medicationReference = Reference(study-medication-ABC) "study-medication-ABC 10 mg tablet"
* subject = Reference(SCHJO)
* authoredOn = "2021-06-12"
* requester.display = "Could be reference to inline contained profile such as Reference(practitioner-1) Ronald Bone, MD"
* reasonCode = http://snomed.info/sct#49436004  "Atrial fibrillation"
* dosageInstruction.sequence = 1
* dosageInstruction.text = "10 mg PO daily every morning"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.route = http://snomed.info/sct#26643006 "Oral route (qualifier value)"
* dosageInstruction.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered "Ordered"
* dosageInstruction.doseAndRate.doseQuantity = 10 'mg' "mg"
* dispenseRequest.numberOfRepeatsAllowed = 1
* dispenseRequest.quantity = 1000 'mg' "mg"
* dispenseRequest.expectedSupplyDuration = 100 'd' "days"
* supportingInformation = Reference(research-study-XYZ)
* supportingInformation.display = "http://baseUrlOfHospitalHolding/PlanDefinition/protocol-for-the-ResearchStudy"

// Upper Endoscopy Procedure for mitigating action
Instance: procedure-upper-endoscopy
InstanceOf: Procedure
Description: "Example Procedure Upper Endoscopy"
* subject = Reference(SCHJO)
* status = http://hl7.org/fhir/event-status#completed "Completed"
* code = http://snomed.info/sct#1255196002 "Esophagogastroduodenoscopy with control of hemorrhage of esophagus (procedure)"

Instance: SeriousAdverseEventResearchStudy
InstanceOf: AdverseEvent-clinical-research
Title: "SeriousAdverseEventResearchStudy"
Description: "Serious Adverse Event Research Study Medication Example"
* modifierExtension[status].valueCode = #completed //http://hl7.org/fhir/event-status#completed
* subject = Reference(SCHJO)
* event = https://www.meddra.org#10017955 "Gastrointestinal haemorrhage"
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49498 "Recovered/Resolved"
* severity = http://terminology.hl7.org/CodeSystem/adverse-event-severity#severe "Severe"

//* resultingCondition[0] = Reference(GIBleed)
* extension[ResultingEffect][0].valueReference = Reference(GIBleed)
* study = Reference(research-study-XYZ)
* extension[suspect-entity][0].extension[instance].valueReference = Reference(study-medication-administration-ABC)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* date = "2021-12-02"
* extension[resolve-date].valueDateTime = "2021-12-09"

* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#serious "Serious"

* extension[seriousness-criteria][0].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C11338	"Results In Persistent Or Significant Disability"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83052	"Requires Inpatient Hospitalization"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = true
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275	"Death Related to Adverse Event"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C84266	"Is Life Threatening"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = true
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83117	"Congenital Anomaly or Birth Defect"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C82521	"Other Medically Important Condition"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C201939 "Required Intervention to Prevent Permanent Impairment/damage"
//$fda-add-seriousness-criteria-cs#requiresPreventImpairment "Required Intervention to Prevent Permanent Impairment or Damage (Devices)"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = true

* extension[mitigating-action][+].extension[item].valueReference = Reference(procedure-upper-endoscopy)

//consider changing to MedAmin reference to study drug being stopped
//* extension[mitigating-action][+].extension[item].valueCodeableConcept = http://snomed.info/sct#274512008 "Drug therapy discontinued (situation)"
* extension[mitigating-action][+].extension[item].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49502 "DRUG WITHDRAWN"
* extension[mitigating-action][=].extension[item].valueCodeableConcept.text = "study drug withdrawn"

* extension[mitigating-action][+].extension[item].valueReference = Reference(medicationrequest-for-study-medication-administration-ABC)
* extension[mitigating-action][=].extension[item].valueReference.display = "Medication Request where study drug prescription was discontinued"


* extension[caused-subject-to-discontinue-study].valueBoolean = true	
* extension[expected-in-research-study].valueBoolean = false
* extension[supporting-info][+].extension[item].valueReference.display = "Supporting info would have context such as an Observation on the drop in hemoglobin"
* extension[note][0].valueAnnotation.text = "The patient’s hemoglobin dropped to 6.5 g/dL and received 2 units of PRBCs. The patient had an upper endoscopy that showed a moderate amount of bleeding from the esophagus. The site was cauterized, and the patient had no further bleeding after the procedure. The GI bleed resolved within one week after discontinuation of study drug and the patient was discharged on 9-Dec-2021 in good condition."


---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/exampleUseCase16.fsh

Instance: patient-moumic
InstanceOf: Patient
Title: "Patient MOUMIC"
Description: "Patient MOUMIC on Research Study DISNEY"
* name.family = "Example"
* name.given[0] = "MOUMIC"

Instance: research-study-DISNEY
InstanceOf: ResearchStudy
Description: "Research Study DISNEY"
* title = "Research Study DISNEY"
* identifier.value = "DUCK-828"
* status =  http://hl7.org/fhir/research-study-status#active "Active"

// Study Medication 20 mg subcutaneously daily every morning for diabetes
Instance: study-medication-MMD
InstanceOf: Medication
Description: "Example study medication MMD"
* code = http://www.nlm.nih.gov/research/umls/rxnorm#1991302
* code.text = "semaglutide"

Instance: study-medication-administration-MMD
InstanceOf: MedicationAdministration
Description: "Example for clinical trial medication MMD"
* status = #in-progress "In Progress"
* medicationReference = Reference(study-medication-MMD)
* subject = Reference(patient-moumic)
* effectiveDateTime = "2022-01-21"
* dosage.dose = 20 'mg' "mg"
* dosage.route = http://snomed.info/sct#263887005 "Subcutaneous"

// Tylenol for mitigating action
Instance: medication-tylenol
InstanceOf: Medication
Description: "Example medication for Tylenol"
* code = http://www.nlm.nih.gov/research/umls/rxnorm#202433
* code.text = "Tylenol"

Instance: medication-administration-tylenol
InstanceOf: MedicationAdministration
Description: "Example of Tylenol"
* status = #in-progress "In Progress"
* medicationReference = Reference(medication-tylenol)
* subject = Reference(patient-moumic)
* effectiveDateTime = "2022-02-01"
* dosage.dose = 325 'mg' "mg"
* dosage.route = http://snomed.info/sct#26643006 "Oral use"

Instance: AEHeadache
InstanceOf: Condition
Usage: #example
Title: "AEHeadache"
Description: "Headaches are mild, occur once a week and resolved with Tylenol, but still ongoing. Action taken with the study is dose not changed."
* subject = Reference(patient-moumic)
* severity = http://snomed.info/sct#255604002 "Mild"
* code =  http://snomed.info/sct#25064002 "Headache"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active

Instance: NonSeriousAdverseEventResearchStudyMed
InstanceOf: AdverseEvent-clinical-research
Title: "NonSeriousAdverseEventResearchStudyMed"
Description: "Non-Serious Adverse Event Research Study Medication Example"
* modifierExtension[status].valueCode = #completed //http://hl7.org/fhir/event-status#completed
* subject = Reference(patient-moumic)
* event = https://www.meddra.org#10019211 "Headache"

* extension[resultingEffect][0].valueReference = Reference(AEHeadache)
* extension[resultingEffect][0].valueReference.display  = "Mild Headache"

* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49494	"Not recovering/not resolved"
* severity = http://terminology.hl7.org/CodeSystem/adverse-event-severity#mild "Mild"

* study = Reference(research-study-DISNEY)
* extension[suspect-entity][0].extension[instance].valueReference = Reference(study-medication-administration-MMD)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53257 "Unlikely Related"
* date = "2022-02-01"

* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#non-serious "Non-serious"
* extension[mitigating-action][+].extension[item].valueReference = Reference(medication-administration-tylenol)
//* extension[mitigating-action][+].extension[item].valueCodeableConcept.text = "study drug dose not changed"

* extension[caused-subject-to-discontinue-study].valueBoolean = false	
* extension[expected-in-research-study].valueBoolean = true
* extension[note][0].valueAnnotation.text = "Headaches are mild, occur once a week and resolved with Tylenol, but still ongoing. Action taken with the study is dose not chnaged."


---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/exampleUseCase17.fsh

// Adverse Event Example Use Case 17
Instance: patient-slp
InstanceOf: Patient
Title: "Example patient SLP"
Description: "Patient enrolled in ACME study, taking Study Medication WBY 10 mg orally daily every morning for moderate asthma"
* identifier.use = #usual
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "mrn467"
* name.family = "Example"
* name.given[0] = "SLP"

Instance: research-study-acme
InstanceOf: ResearchStudy
Description: "Use Case 17 Research Study ACME"
* title = "Research Study ACME"
* identifier.value = "ACME-789"
* status =  http://hl7.org/fhir/research-study-status#active "Active"

Instance: clinical-trial-acme-subject
InstanceOf: ResearchSubject
Description: "Clinical trial ACME research subject"
* identifier[0].use = #usual
* identifier[=].value = "ACME-789-100"
* status = http://hl7.org/fhir/research-subject-status#on-study "On-study"
* study = Reference(research-study-acme)
* individual = Reference(patient-slp)

Instance: clinical-trial-acme-procedure
InstanceOf: Procedure
Description: "Clinical trial ACME protocol-prescribed procedure of a Lung CT Scan, with contrast dye"
* subject = Reference(patient-slp)
* status = http://hl7.org/fhir/event-status#completed "Completed"
* code = http://snomed.info/sct#241540006 "CT of lungs"

Instance: resstudy-medication-WBY
InstanceOf: Medication
Description: "Example clinical trial medication WBY"
* code = http://www.nlm.nih.gov/research/umls/rxnorm#115713
* code.text = "montelukast sodium"

Instance: study-medication-administration-WBY
InstanceOf: MedicationAdministration
Description: "Example for clinical trial medication WBY"
* status = #in-progress "In Progress"
* medicationReference = Reference(resstudy-medication-WBY)
* subject = Reference(patient-slp)
* effectiveDateTime = "2021-01-02"
* dosage.dose = 10 'mg' "mg"
* dosage.route = http://snomed.info/sct#26643006 "Oral use"

Instance: medication-contrast-dye
InstanceOf: Medication
Description: "Example contrast dye medication"
* code = http://snomed.info/sct#39290007
* code.text = "Barium"

Instance: medication-administration-contrast-dye
InstanceOf: MedicationAdministration
Description: "Example medication administration for contrast dye"
* status = #completed "Completed"
* medicationReference = Reference(medication-contrast-dye)
* subject = Reference(patient-slp)
* effectiveDateTime = "2021-01-15"
* dosage.dose = 150 'mg' "mg"
* dosage.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"

Instance: medication-forhives
InstanceOf: Medication
Description: "Example medication for hives"
* code = http://www.nlm.nih.gov/research/umls/rxnorm#1158446
* code.text = "diphenhydramine Injectable Product"

Instance: medication-administration-forhives
InstanceOf: MedicationAdministration
Description: "Example medication administration for hives"
* status = #completed "Completed"
* medicationReference = Reference(medication-forhives)
* subject = Reference(patient-slp)
* effectiveDateTime = "2021-01-15"
* dosage.dose = 50 'mg' "mg"
* dosage.route = http://snomed.info/sct#129326001 "Injection"

Instance: AEModeratehives
InstanceOf: Condition
Usage: #example
Title: "AEModeratehives"
Description: "Moderate Hives"
* subject = Reference(patient-slp)
* severity = http://snomed.info/sct#6736007 "Moderate severity"
* severity.text = "Moderate"
* code.coding[0] = http://snomed.info/sct#402408009 "Acute urticaria"
* code.coding[1] = https://www.meddra.org#10040785 "Urticaria"
* code.text = "Moderate hives"

//http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C57954 "Grade 2 - Urticaria" 
//medra Urticaria 10040785

* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active

Instance: AdverseEventFromProcedureNotStudyDrug
InstanceOf: AdverseEvent-clinical-research
Description: "Adverse event from procedure, not study drug"
* subject = Reference(patient-slp)
* modifierExtension[status].valueCode = #completed
* event = https://www.meddra.org#10019211 "Hypersensitivity reaction"
* event.text = "Moderate hives"

* extension[resultingEffect][0].valueReference = Reference(AEModeratehives)
* extension[resultingEffect][0].valueReference.display  = "Moderate hives"

* severity = http://terminology.hl7.org/CodeSystem/adverse-event-severity#moderate "Moderate"
* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#non-serious "Non-serious"
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49498 "Recovered/Resolved"
* date = "2021-01-15"
* extension[resolve-date].valueDateTime = "2021-01-15"
* study = Reference(research-study-acme)
//* extension[research-subject-ref].valueReference = Reference(clinical-trial-acme-subject)
* extension[suspect-entity][0].extension[instance].valueReference = Reference(study-medication-administration-WBY)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53257 "Unlikely Related"

* extension[suspect-entity][+].extension[instance].valueReference = Reference(medication-administration-contrast-dye)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53260 "Related"
* extension[expected-in-research-study].valueBoolean = false
* extension[note][0].valueAnnotation.text = "The action taken with the study treatment was the study drug dose not changed"
* extension[caused-subject-to-discontinue-study].valueBoolean = false	
* extension[mitigating-action][+].extension[item].valueReference = Reference(medication-administration-forhives)
//* extension[mitigating-action][+].extension[item].valueCodeableConcept.text = "study drug dose not changed"
* extension[contributing-factor][+].extension[item].valueReference = Reference(clinical-trial-acme-procedure)


---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/exampleUseCase6b.fsh

//https://confluence.hl7.org/pages/viewpage.action?pageId=49646529#AdverseEventUseCases-UseCase6-AdverseReactionreportingviaFDAMedWatchform
//PRE_IC07 Vulcan Accelerator Adverse Event Use Case_BakerWillis_2022-05-03_FINAL

//A 64-year old woman (Janet)
Instance: JanetPatient
InstanceOf: Patient
Usage: #example
Title: "Janet Patient"
Description: "Patient Janet, 64-year old woman on clinical trial"
//* extension[0].id = "race"
//* extension[=].extension[0].url = "ombCategory"
//* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
//* extension[=].extension[+].url = "text"
//* extension[=].extension[=].valueString = "White"
//* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
//* extension[+].id = "ethnicity"
//* extension[=].extension[0].url = "ombCategory"
//* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
//* extension[=].extension[+].url = "text"
//* extension[=].extension[=].valueString = "Not Hispanic or Latino"
//* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* identifier[0].use = #usual
* identifier[=].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[=].type.coding.code = #MR
* identifier[=].type.text = "EPI"
* identifier[=].system = "urn:oid:2.16.840.1.113883.2.4.6.3"
* identifier[=].value = "738472983"
* name
  * given[0] = "Janet"
  * family = "Clinical Trial Patient"
* telecom[0].system = #phone
* telecom[=].value = "0648352638"
* telecom[=].use = #mobile
* telecom[+].system = #email
* telecom[=].value = "p.heuvel@gmail.com"
* telecom[=].use = #home
* gender = #female
* birthDate = 1961-04-08
* deceasedBoolean = false
* address.use = #home
* address.line = "123 Just Moved from Overseas St"
* address.city = "Sagaponack"
* address.state = "NY"
* address.postalCode = "11962"
* address.country = "US"
* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus#M "Married"
* multipleBirthBoolean = true
* contact.relationship = http://terminology.hl7.org/CodeSystem/v2-0131#C
* contact.name.use = #usual
* contact.name.family = "Abels"
* contact.name.given = "Sarah"
* contact.telecom.system = #phone
* contact.telecom.value = "0690383372"
* contact.telecom.use = #mobile
* communication.language = urn:ietf:bcp:47#nl "Dutch"
* communication.language.text = "Nederlands"
* communication.preferred = true
* managingOrganization.identifier.system = "http://hospital.orgsrus/"
* managingOrganization.identifier.value = "f001"
* managingOrganization.display = "Reference(Organization/f001) Burgers University Medical Centre"

// is participating in a breast cancer clinical trial.
Instance: BreastCancerTrial
InstanceOf: ResearchStudy
Usage: #example
Title: "Breast Cancer Trial"
Description: "Breast Cancer clinical trial example"
* identifier.system = "http://clinicaltrials.gov/"
* identifier.value = "NCT01234567"
* identifier.assigner.display = "Allesgut Pharmaceuticals"
* title = "Breast Cancer Clinical Trial bresentrik study" 
* status = http://hl7.org/fhir/research-study-status#active
* primaryPurposeType = http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type#treatment "Treatment"
* phase = http://terminology.hl7.org/CodeSystem/research-study-phase#phase-2-phase-3
//* category = http://hl7.org/fhir/study-design#SEVCO:01001 "Interventional research"
* category.text = "Interventional research"
* condition = http://snomed.info/sct#254837009 "Breast Cancer"
* contact.telecom.system = http://hl7.org/fhir/contact-point-system#phone
* contact.telecom.value = "123-123-1234"
* description = "Eligible participants will be those diagnosed with HER2-positive (IHC 3+ or ISH+), metastatic breast cancer, who have received no prior chemotherapy or HER2-targeted therapy for advanced or metastatic breast cancer. The study aims to evaluate the efficacy, and safety of bresentrik, alone or with pertuzumab, compared with the standard of care treatment (taxane [docetaxel or paclitaxel], trastuzumab and pertuzumab). This study aims to see if bresentrik allows patients to live longer without the cancer getting worse, or simply to live longer, compared to patients receiving standard of care chemotherapy. This study is also looking to see how the treatment and the cancer affects patients' quality of life."
* enrollment.display = "This would be a reference to a Group, use Group.characteristic to define inclusion and exclusion criteria"
* period.start = "2021-03-23"
* period.end = "2029-03-23"
* sponsor.display = "This would be a reference Organization and would be the body legally responsible for the trial"
* principalInvestigator.display = "This would be a reference to a Practitioner or PractionerRole"
* site.display = "This would be a reference to a Location containing the facility where the trial is taking place"
* arm[0].name = "Arm A"
//* arm[0].type = http://hl7.org/fhir/research-study-arm-type#experimental
* arm[0].type.text = "Experimental"
* arm[0].description = "Bresentrik (B) plus pertuzumab-matching placebo"
* arm[+].name = "Arm B"
//* arm[=].type = http://examplesystem#experimental
* arm[=].type.text = "Experimental"
* arm[=].description = "Bresentrik (B) plus pertuzumab"
* arm[+].name = "Arm C"
//* arm[=].type = http://examplesystem#active-comparator
* arm[=].type.text = "Active Comparator"
* arm[=].description = "Standard of care (Taxane (paclitaxel or docetaxel), trastuzumab, and pertuzumab)"
* protocol.display = "This would reference the PlanDefinition which would contain references to Bresentrik"


//weight observation example
Instance: weight-janet
InstanceOf: Observation
Usage: #example
Title: "Janet weight Observation"
Description: "Janet weight observation"
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = http://loinc.org#29463-7 "Body Weight"
* code.text = "weight"
* subject = Reference(JanetPatient) "Janet"
* encounter.display = "GP Visit"
* effectiveDateTime = "2023-04-10"
* valueQuantity = 20.09414 'kg' "kg"
* method.text = "Patient-entered"
* performer.display = "referred to in provenance for weight"


//Provenance for weight
Instance: provenance-for-weight
InstanceOf: Provenance
Usage: #example
Title: "Provenance for Janet weight Observation"
Description: "Provenance for Janet weight Observation"
//* target.extension.url = "http://hl7.org/fhir/StructureDefinition/targetElement"
//* target.extension.valueUri = "race"
* target = Reference(weight-janet)
* recorded = "2023-04-12T15:26:23.217+00:00"
//* agent[0].role =  http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV "healthcare provider"
* agent[0].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#author "Author"
* agent[=].who.display = "Provenance Author. Will be reference to the PractitionerRole that authored the measurement. Needs to include a reference to the organization that is responsible for the measurement, at a minimum"
* agent[+].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#informant "Informant"
* agent[=].who = Reference(JanetPatient)
* agent[=].who.display = "Janet, the patient who informed the system of the weight authored by the ProvanceAuthor"


//Blood pressure observation example
Instance: blood-pressure-janet
InstanceOf: Observation
Usage: #example
Title: "Janet Blood Pressure Observation"
Description: "Janet Blood Pressure Observation"
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs "Vital Signs"
* category.text = "Vital Signs"
* code = http://loinc.org#85354-9 "Blood pressure panel with all children optional"
* code.text = "Blood pressure systolic and diastolic"
* subject = Reference(JanetPatient) "Janet"
* encounter.display = "GP Visit"
* effectiveDateTime = "2023-04-10"
* component[0].code = http://loinc.org#8480-6 "Systolic blood pressure"
* component[=].code.text = "Systolic blood pressure"
* component[=].valueQuantity = 109 'mm[Hg]' "mmHg"
* component[+].code = http://loinc.org#8462-4 "Diastolic blood pressure"
* component[=].code.text = "Diastolic blood pressure"
* component[=].valueQuantity = 44 'mm[Hg]' "mmHg"
* performer.display = "referred to in provenance for blood-pressure-janet"


//Provenance for blood-pressure-janet
Instance: provenance-for-blood-pressure-janet
InstanceOf: Provenance
Usage: #example
Title: "Provenance for Janet Blood Pressure  Observation"
Description: "Provenance for Janet Blood Pressure  Observation"
//* target.extension.url = "http://hl7.org/fhir/StructureDefinition/targetElement"
//* target.extension.valueUri = "race"
* target = Reference(blood-pressure-janet)
* recorded = "2023-04-12T15:26:23.217+00:00"
//* agent[0].role =  http://terminology.hl7.org/CodeSystem/v3-RoleClass#PROV "healthcare provider"
* agent[0].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#author "Author"
* agent[=].who.display = "Provenance Author. Will be reference to the PractitionerRole that authored the measurement. Needs to include a reference to the organization that is responsible for the measurement, at a minimum"
* agent[+].type = http://terminology.hl7.org/CodeSystem/provenance-participant-type#informant "Informant"
* agent[=].who = Reference(JanetPatient)
* agent[=].who.display = "Janet, the patient who informed the system of the weight authored by the ProvanceAuthor"



//Janet medications
//reported by JanetPatient
Instance: example001
InstanceOf: MedicationStatement
Usage: #example
Title: "Janet Tylenol PM med"
Description: "Self reported Janet Tylenol PM med"
* contained = med0309
* identifier.use = #official
* identifier.system = "http://www.bmc.nl/portal/medstatements"
* identifier.value = "12345689"
* status = #active
* medicationReference = Reference(med0309)
* subject = Reference(JanetPatient) "Janet"
* effectiveDateTime = "2015-01-23"
* dateAsserted = "2023-04-12"
* informationSource = Reference(JanetPatient) "Janet"
* derivedFrom.identifier.system = "http://www.bmc.nl/portal/medstatements"
* derivedFrom.identifier.value = "medrx002"
* derivedFrom.display = "Reference(medrx002)"
* reasonCode = http://snomed.info/sct#32914008 "Restless Legs"
* note.text = "Patient indicates they miss the occasional dose"
* dosage.sequence = 1
* dosage.text = "1-2 tablets once daily at bedtime as needed for restless legs"
* dosage.additionalInstruction.text = "Taking at bedtime"
* dosage.timing.repeat.frequency = 1
* dosage.timing.repeat.period = 1
* dosage.timing.repeat.periodUnit = #d
* dosage.asNeededCodeableConcept = http://snomed.info/sct#32914008 "Restless Legs"
* dosage.route = http://snomed.info/sct#26643006 "Oral Route"
* dosage.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered "Ordered"
* dosage.doseAndRate.doseRange.low = 1 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB "TAB"
* dosage.doseAndRate.doseRange.high = 2 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB "TAB"

Instance: med0309
InstanceOf: Medication
Usage: #inline
* code = http://hl7.org/fhir/sid/ndc#50580-506-02 
//"Tylenol PM Extra Strength, 2 TABLET, FILM COATED in 1 POUCH (50580-506-02) (package)"
* code.text = "Tylenol PM"
* form = http://snomed.info/sct#385057009 "Film-coated tablet"
* ingredient[0].itemCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#315266 "Acetaminophen 500 MG"
* ingredient[=].strength.numerator = 500 'mg'
* ingredient[=].strength.denominator = 1 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB
* ingredient[+].itemCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#901813 "Diphenhydramine Hydrochloride 25 mg"
* ingredient[=].strength.numerator = 25 'mg'
* ingredient[=].strength.denominator = 1 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB
* batch.lotNumber = "9494788"
* batch.expirationDate = "2025-05-25"

Instance: example007
InstanceOf: MedicationStatement
Usage: #example
Title: "Janet allergy med"
Description: "Self reported Janet allergy med"
* contained = med0315
* status = #active
* medicationReference = Reference(med0315)
* subject = Reference(JanetPatient) "Janet"
* dateAsserted = "2023-04-12"
* informationSource = Reference(JanetPatient) "Janet"
* note.text = "patient plans to start using for seasonal allergies in the Spring when pollen is in the air"

Instance: med0315
InstanceOf: Medication
Usage: #inline
* code = http://www.nlm.nih.gov/research/umls/rxnorm#358793 
//"mometasone furoate 0.05mg/Actuat"
* code.text = "Nasonex"
* form = http://snomed.info/sct#385157007 "Nasal Spray"

Instance: example003
InstanceOf: MedicationStatement
Usage: #example
Title: "Janet pill for water retention med not known"
Description: "Self reported Janet pill for water retention med not known"
* status = #active
* medicationCodeableConcept.text = "Little Pink Pill for water retention"
* subject = Reference(JanetPatient) "Janet"
* effectiveDateTime = "2023-02-01"
* dateAsserted = "2023-04-12"
* informationSource = Reference(JanetPatient) "Janet"
* reasonReference = Reference(blood-pressure-janet)
* note.text = "Patient cannot remember the name of the tablet, but takes it every day in the morning for water retention"
* dosage.sequence = 1
* dosage.text = "1 tablet per day"
* dosage.asNeededBoolean = false
* dosage.route = http://snomed.info/sct#26643006 "Oral Route"
* dosage.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered "Ordered"
* dosage.doseAndRate.doseQuantity = 1 http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm#TAB "tab"
* dosage.maxDosePerPeriod.numerator.value = 1
* dosage.maxDosePerPeriod.denominator = 1 'd'

//bresentrik study medication treatment MedicationAdministration
//has timing details
Instance: medicationAdministration-for-bresentrik
InstanceOf: MedicationAdministration
Usage: #example
Title: "Medication Administration for bresentrik"
Description: "Study medication info Medication Administration for bresentrik"
* contained[0] = signature-medicationAdministration-bresentrik
* status = #completed
* medicationReference = Reference(bresentrik)
* subject = Reference(JanetPatient) "Janet"
* context.identifier.system = "http://hospitalNumber2"
* context.identifier.value = "f001"
* context.display = "Reference(Encounter/f001) encounter which leads to this prescription"
* effectivePeriod.start = "2023-04-05T14:30:00+01:00"
* effectivePeriod.end = "2023-04-07T14:30:00+01:00"
* performer.actor.identifier.system = "http://a.fhir.server/svc/StructureDefinition/"
* performer.actor.identifier.value = "c8973a22-2b5b-4e76-9c66-00639c99e61b"
* performer.actor.display = "Reference(http://a.fhir.server/svc/StructureDefinition/c8973a22-2b5b-4e76-9c66-00639c99e61b) Patrick Pump"
* reasonCode = http://terminology.hl7.org/CodeSystem/reason-medication-given#b "Given as Ordered"
* request = Reference(medicationrequest-for-bresentrik)
* dosage.text = "6 mg PO daily for remission induction; adjust dosage to white blood cell (WBC) count.  With hold treatment if WBC is less than 15,000/µL; resume when WBC is greater than 50,000/µL"
* dosage.route = http://snomed.info/sct#26643006 "Oral route (qualifier value)"
* dosage.dose = 6 'mg' "mg"
* eventHistory = Reference(signature-medicationAdministration-bresentrik) "Author's Signature"
//* performer.actor = Reference(Practitioner/f007) "Patrick Pump"

Instance: signature-medicationAdministration-bresentrik
InstanceOf: Provenance
Usage: #inline
* target.identifier.system = "http://hospital2.org/"
* target.identifier.value = "oncology321"
* target.display = "Reference(ServiceRequest/oncology321)"
* recorded = "2023-04-05T17:23:07Z"
* agent.role = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUT
* agent.who.display = "Reference(Practitioner/example) Dr Adam Careful"
* signature.type = urn:iso-astm:E1762-95:2013#1.2.840.10065.1.12.1.1 "Author's Signature"
* signature.when = "2023-04-05T17:23:07Z"
* signature.who.identifier.system = "http://hospital.org/"
* signature.who.identifier.value = "DrAdamCareful"
* signature.who.display = "Reference(Practitioner/example) Dr Adam Careful"
* signature.targetFormat = #application/fhir+xml
* signature.sigFormat = #application/signature+xml
* signature.data = "dGhpcyBibG9iIGlzIHNuaXBwZWQ="

//bresentrik study medication treatment MedicationRequest
//request
Instance: medicationrequest-for-bresentrik
InstanceOf: MedicationRequest
Title: "Medication Request for bresentrik"
Description: "Study medication info Medication Request for bresentrik"
Usage: #example
//* contained = bresentrik
* status = #active
* intent = #order
* identifier.use = #official
* identifier.system = "http://www.bmc.nl/portal/medstatements"
* identifier.value = "1234568900-studyDrug" 
* medicationReference = Reference(bresentrik) "bresentrik 2mg tablet"
* subject = Reference(JanetPatient) "Janet"
* authoredOn = "2023-04-05"
* requester.display = "Could be reference to inline contained profile such as Reference(practitioner-1) Ronald Bone, MD"
* reasonCode = http://snomed.info/sct#254837009 "Breast Cancer"
* dosageInstruction.sequence = 1
* dosageInstruction.text = "6 mg PO daily for remission induction; adjust dosage to white blood cell (WBC) count.  With hold treatment if WBC is less than 15,000/µL; resume when WBC is greater than 50,000/µL"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.route = http://snomed.info/sct#26643006 "Oral route (qualifier value)"
* dosageInstruction.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered "Ordered"
* dosageInstruction.doseAndRate.doseQuantity = 6 'mg' "mg"
* dispenseRequest.numberOfRepeatsAllowed = 1
* dispenseRequest.quantity = 600 'mg' "mg"
* dispenseRequest.expectedSupplyDuration = 30 'd' "days"
* supportingInformation = Reference(BreastCancerTrial)
* instantiatesCanonical = "http://baseUrlOfHospitalHolding/PlanDefinition/protocol-for-the-ResearchStudy"


Instance: bresentrik
InstanceOf: Medication
Usage: #example
Title: "Medication is bresentrik"
Description: "Study medication, bresentrik"
//* code = http://www.nlm.nih.gov/research/umls/rxnorm#000000 "bresentrik 15 MG/ML Oral Solution"
* code.text = "bresentrik 15 MG/ML Oral Solution"

//Janet went home and began vomiting uncontrollably. 
//problem
//Her husband called an ambulance and Janet was taken to the hospital where she was treated in the ER and released.
//ER Encounter, the ER encounter is referenced in the condition
//reference to condition where http://snomed.info/sct#332982000 "Uncontrollable vomiting"
Instance: janetReported-condition
InstanceOf: Condition
Usage: #example
Title: "Problem"
Description: "Patient reported AE problem"
* identifier.value = "12345"
* code = http://snomed.info/sct#332982000 "Uncontrollable vomiting"
* subject = Reference(JanetPatient) "Janet"
* encounter.display = "Reference to ER visit Janet went to. Be sure to include provenance"
* onsetDateTime = "2023-04-10"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#resolved
* abatementString = "around April 10, 2023"
* recordedDate = "2023-04-12"
* recorder = Reference(JanetPatient) "Janet"
* asserter = Reference(JanetPatient) "Janet"
* evidence.code = http://snomed.info/sct#258710007 "degrees C"
* evidence.detail.identifier.system = "http://hospital"
* evidence.detail.identifier.value = "f202"
* evidence.detail.display = "Reference(Observation/f202) Temperature"


//research subject Janet?
//no research subject added to the Patient reported one as the Patient would not be given their study id at this point


//ADVERSE EVENT
Instance: clinical-research-ae-example-medwatch-patient-report
InstanceOf: AdverseEvent-clinical-research
Usage: #example
Title: "Patient reported AE during research study"
Description: "Patient report of Adverse Event, example of data that would be on MedWatch form as reported by Patient" 
* modifierExtension[status].valueCode = http://hl7.org/fhir/event-status#completed

//A1 What kind of problem was it? (Check all that apply)
//Were hurt or had a bad side effect (including new or worsening symptoms)
* event = http://snomed.info/sct#370901008 "Serious reportable event associated with product or device"

//"Required help to prevent permanent harm"
//A2 Did any of the following happen?
* extension[seriousness-criteria][0].extension[criterionPresent].valueBoolean = true
* extension[seriousness-criteria][=].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C201939 "Required Intervention to Prevent Permanent Impairment/damage"
//#requiresPreventImpairment "required intervention to prevent permanent damage"

* extension[seriousness-criteria][0].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C11338 "Results In Persistent Or Significant Disability"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83052 "Requires Inpatient Hospitalization"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275 "Death Related to Adverse Event"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C84266 "Is Life Threatening"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83117 "Congenital Anomaly or Birth Defect"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C82521 "Other Medically Important Condition"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false

//A3
//After receiving the study drug (bresentrik) during a study visit, 
//timing medication given before ae reported on 4/12
* date = 2023-04-10

//A4 note
* extension[note][+].valueAnnotation.authorReference = Reference(JanetPatient)
* extension[note][=].valueAnnotation.time = 2023-04-12
* extension[note][=].valueAnnotation.text = "A 64-year-old woman (Janet) is participating in a breast cancer clinical trial and taking an investigational drug. As part of her participation in the study, she was instructed to use a patient reported outcomes (ePRO) application to report an adverse event that resulted in any of the following: hospitalization, required help to prevent permanent harm, disability or health problem, birth defect, life-threatening, death, other serious/important medical incident (this list identifies the event as being serious events). The application is designed to capture data elements found on the 3500A Form. 

The Clinical Investigator (CI) receives a notification that Janet has an adverse event and reviews the event in Janet’s EHR system. The adverse event form is pre-populated from EHR data for the clinical investigator. The CI assesses causality for Janet’s adverse event and submits the serious adverse event to the sponsor. The sponsor reviews the received adverse event and performs its own causality assessment. Since this event is a Suspected Unexpected Serious Adverse Reaction (SUSAR) within FDA’s regulation. If the Suspected Unexpected Serious Adverse Reaction (SUSAR) was life threatening or death, it is submitted within 7 calendar days.

Any other types of seriousness are submitted within 15 calendar days."


//Janet went home and began vomiting uncontrollably. 
//problem
//Her husband called an ambulance and Janet was taken to the hospital where she was treated in the ER and released.
//ER Encounter, the ER encounter is referenced in the condition
* extension[resultingEffect][0].valueReference = Reference(Condition/janetReported-condition)
//reference to condition where http://snomed.info/sct#332982000 "Uncontrollable vomiting"

//seriousness will be defined by investigator, but required so in this patient reported version we get the patient choosing !?
//probably should be 0..1 !? 
* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#serious
//outcome is also strange for a patient to enter but can be revised by clinician
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C49498 "Recovered/Resolved"


//Section B PRODUCT AVAILABILITY
//Questionnaire? and DocuementReference for picture of product?
// add as an extension with 0..1 cardinality in use case specific IG, us realm? 

//Section C
//although some of this might also appear in section A4
//After receiving the study drug (bresentrik) during a study visit, 
//Medication - study drug given 4/10/2023
//Section C1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 all derived from the medication reference 
// in suspect entity
// note also need supporting-Info medicationRequest
* extension[suspect-entity][+].extension[instance].valueReference = Reference(bresentrik) 
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[suspect-entity][=].extension[causality].extension[author].valueReference = Reference(JanetPatient) "Janet"

* extension[supporting-info][+].extension[item].valueReference = Reference(MedicationAdministration/medicationAdministration-for-bresentrik)

* extension[suspect-entity][+].extension[instance].valueReference = Reference(BreastCancerTrial)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53258 "Possibly Related"
* extension[suspect-entity][=].extension[causality].extension[author].valueReference = Reference(JanetPatient) "Janet"
* study = Reference(BreastCancerTrial)
 

//C16, C17 we do not know from the data in the use case
//section C16 and C17, are either going to be inferred or possible use questionnaire
//16. Did the problem stop after the person reduced the dose or stopped taking or using the product? Yes No
//17. Did the problem return if the person started taking or using the product again? Yes No Didn’t restart
 


//section E1, initials?

//section E2, E4 from Patient resource. 
//section E6 and E7 rely on US CORE use of Ethnicity and Race -- specific to US realm 
//section E3 Age would be calculated from BirthDate
* subject = Reference(JanetPatient) "Janet"

//section E5 weight most recent observation picked from list - US realm specific
* extension[supporting-info][+].extension[item].valueReference = Reference(weight-janet)

//The data from her health systems were aggregated to allow her a single view of all her medical information. 
//section E8, 9, 10, 11, 12 all are references selected from drop-down plus patient additions
* extension[supporting-info][+].extension[item].valueReference = Reference(blood-pressure-janet)

//section E8, 9, 10, 11, 12 patient additions Janet was able to add more information that was not included in her imported data (OTC drugs, vitamins, etc.). as fhir resource vitamin
* extension[supporting-info][+].extension[item].valueReference = Reference(example001)
* extension[supporting-info][+].extension[item].valueReference = Reference(example007)
* extension[supporting-info][+].extension[item].valueReference = Reference(example003)


//The following morning, Janet opened the study designated consumer facing FHIR application and completed the MedWatch Form FDA 3500B autofill (demographics, meds, allergies, conditions, labs). She is given the option to display and choose the relevant items from each category (example: only current meds she is taking, current labs, etc. which might be a subset of her full PHR).
//section F
//if Janet Husband then would use RelatedPerson
* recorder = Reference(JanetPatient)

//section F10 and F11
//10. Did you report this problem to the company that makes the product (the manufacturer/compounder)? Yes No
//11. If you do NOT want your identity disclosed to the manufacturer, place an "X" in this box:
//Questionnaire? DocReference? 

//The data is then absorbed within the receiver’s system to auto populate a MedWatch Form FDA 3500B for submission to the FDA within 24 hours.

//Severity or grade is applied by clinical researcher, so a Patient would not provide one
//* severity = http://terminology.hl7.org/CodeSystem/adverse-event-severity#moderate "Moderate"

---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/fsh/exampleUseCaseDevice.fsh

// Cancer clinical trial example 
Instance: patient-example-kaitlyn-b1
InstanceOf: Patient
Description: "Compass Trial example patient Kaitlynn B1"
* identifier.use = #usual
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR "Medical Record Number"
* identifier.system = "http://hospital.example.org"
* identifier.value = "m1234"
* name.family = "Hammer"
* name.given[0] = "Kaitlynn"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "549-123-4560"
* contact.telecom[0].use = #home
* contact.telecom[1].system = #email
* contact.telecom[1].value = "kaitlynb1@example.com"
* gender = #female
* birthDate = "1985-02-25"
* address.line = "123 Main St"
* address.city = "Anytown"
* address.postalCode = "12347"
* address.country = "US"
* communication.language = urn:ietf:bcp:47#en-US "English (Region=United States)"
* communication.language.text = "English"


Instance: medication-request-example-kadcyla1
InstanceOf: MedicationRequest
Description: "Example showing clinical trial medication Kadcyla"
* status = #active "active"
* intent = #order
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#1371046 "KADCYLA"
* subject = Reference(patient-example-kaitlyn-b1)
* requester = Reference(practitioner-owen-oncologist)
* dosageInstruction.timing.repeat.boundsPeriod.start = "2020-04-03"
* authoredOn = "2020-03-15"
* dosageInstruction.text = "Kadcyla IV at 3.6mg"
* dosageInstruction.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"
* dosageInstruction.doseAndRate.rateQuantity = 3.6 'mg' "mg"
// Once every 21 days
* dosageInstruction.maxDosePerAdministration.value = 1


Instance: medication-administration-kadcyla1
InstanceOf: MedicationAdministration
Description: "Example showing clinical trial medication adminstration Kadcyla"
* status = #completed "completed"
* medicationCodeableConcept = http://www.nlm.nih.gov/research/umls/rxnorm#1371046 "KADCYLA"
* subject = Reference(patient-example-kaitlyn-b1)
* performer.actor = Reference(practitioner-oncology-nurse-jane)
//* reasonReference = Reference(kaitlyn-primary-cancer-condition-ex1)
* request = Reference(medication-request-example-kadcyla1)
* effectiveDateTime = "2020-04-01"
* note.authorReference = Reference(practitioner-oncology-nurse-jane)
* note.time = "2020-04-01"
* note.text = "3.6mg administered by continuous infusion. Patient tolerated infusion without side effects."
* dosage.dose = 3.6 'mg' "mg"
* dosage.route = http://snomed.info/sct#47625008 "Intravenous route (qualifier value)"

Instance: clinical-trial-example-subject1
InstanceOf: ResearchSubject
Description: "Alliance COMPASS trial research subject"
* identifier[0].use = #usual
* identifier[=].value = "ABC21348"
* status = #withdrawn
* study = Reference(clinical-trial-example-compass)
* individual = Reference(patient-example-kaitlyn-b1)
* consent.display = "this would be a reference to a Consent instance"


Instance: adverse-event-device-death
InstanceOf: AdverseEvent-clinical-research
Description: "Device suspected entity"
* subject = Reference(patient-example-kaitlyn-b1)
* modifierExtension[status].valueCode = #completed //http://hl7.org/fhir/event-status#completed

* event = http://snomed.info/sct#370903006  "Patient death or serious disability associated with the use or function of a device in patient care, in which the device is used or functions other than as intended (event)" 
* event.text = "Patient death due to device explosion"

* category = http://terminology.hl7.org/CodeSystem/adverse-event-category#device "Device"

* extension[ae-grade].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275
* extension[ae-grade].valueCodeableConcept.text = "Grade 5 Death related to adverse event"

* seriousness = http://terminology.hl7.org/CodeSystem/adverse-event-seriousness#serious "Serious"

* extension[seriousness-criteria][0].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C11338	"Results In Persistent Or Significant Disability"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83052	"Requires Inpatient Hospitalization"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275	"Death Related to Adverse Event"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = true
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C84266	"Is Life Threatening"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C83117	"Congenital Anomaly or Birth Defect"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C82521	"Other Medically Important Condition"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false
* extension[seriousness-criteria][+].extension[criterionCode].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C201939 "Required Intervention to Prevent Permanent Impairment/damage"
//$fda-add-seriousness-criteria-cs#requiresPreventImpairment "Required Intervention to Prevent Permanent Impairment or Damage (Devices)"
* extension[seriousness-criteria][=].extension[criterionPresent].valueBoolean = false

* extension[resultingEffect][0].valueReference.display = "Condition with Deep puncture wound (disorder) - SNOMED CT code. Note this different than the AdverseEvent.code in this instance."
* outcome = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C48275 
* outcome.text = "Fatal"
* date = "2020-05-20"

* recorder = Reference(practitioner-oncology-nurse-jane)

* extension[participant][0].extension[function].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#AUTHEN 
* extension[participant][0].extension[actor].valueReference = Reference(practitioner-owen-oncologist)

* study = Reference(clinical-trial-example-compass)

* extension[suspect-entity][0].extension[instance].valueReference = Reference(device-infuser)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53260 "Related"

* extension[suspect-entity][+].extension[instance].valueReference = Reference(medication-administration-kadcyla1)
* extension[suspect-entity][=].extension[causality].extension[entityRelatedness].valueCodeableConcept = http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#C53256 "Not Related"

* extension[expected-in-research-study].valueBoolean  = false

* extension[note][0].valueAnnotation.text = "During infusion of kadcyla an infuser exploded, shrapnel from the explosion caused a fatal puncture wound."


Instance: device-infuser
InstanceOf: Device
Description: "Device - Infuser that exploded"
Usage: #example
* identifier.type.coding.system = "http://hl7.org/fhir/NamingSystem/hibcc-dI"
* identifier.value = "10896128002012"
//* displayName = "Hyperspeed Chemo Infuser"
* udiCarrier.deviceIdentifier = "10896128002012"
* udiCarrier.issuer = "http://hl7.org/fhir/NamingSystem/hibcc-dI"
* udiCarrier.jurisdiction = "http://hl7.org/fhir/NamingSystem/fda-udi"
* status = #inactive
* manufacturer = "Safe Device Co"
* manufactureDate = "2000-02-01"
* expirationDate = "2021-02-01"
* modelNumber = "FRN"
* serialNumber = "C7H5N3O6"
//* category = http://hl7.org/fhir/device-category#reusable "Reusable"
* deviceName[0].name = "Hyperspeed"
* deviceName[=].type = http://hl7.org/fhir/device-nametype#manufacturer-name "Manufacturer name"
* deviceName[+].name = "Hyperspeed Chemo Infuser"
* deviceName[=].type = http://hl7.org/fhir/device-nametype#user-friendly-name "User Friendly name"
* type.text = "Infusion Pump"
* owner.display = "Place that owns the device"
* location.display = "Where device is found"





---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/pagecontent/background.md

## Background

Adverse Event (AE) data capture and standardization is a challenge in real world data systems. There are variations in the definitions, workflows, and data requirements across the use cases for patient monitoring, clinical intervention, regulatory safety reporting requirements and clinical trials monitoring.

The [Vulcan Adverse Event project](<https://confluence.hl7.org/display/VA/Adverse+Events>) was initiated in October 2021 to model the data elements to support the workflow for collecting and reporting serious and non-serious AEs in clinical research to meet the need of regulatory requirements. The goal of this project is to leverage Electronic Health Records (EHR) and other types of real-world data (RWD), such as Personal Health Records (PHR), as electronic source to collect adverse events that occur during clinical trials. In this project, the team leveraged the HL7 FHIR standard identifying gaps between data elements in EHRs, clinical research artifacts. and other existing standards such as:

* [FDA E2B(R3) Electronic Transmission of Individual Case Safety Reports Implementation Guide](<https://www.fda.gov/regulatory-information/search-fda-guidance-documents/e2br3-electronic-transmission-individual-case-safety-reports-implementation-guide-data-elements-and>)
* [CDISC FHIR Mapping to AE](<http://hl7.org/fhir/uv/cdisc-mapping/ae.html>)
* [ICH Harmonised Tripartite Guideline Clinical Safety Data Management: Definitions and Standards for Expedited Reporting E2A](<https://database.ich.org/sites/default/files/E2A_Guideline.pdf>)
* [Clinical Data Acquisition Standards Harmonization Implementation Guide for Human Clinical Trials Version 2.2 (Final)](<https://www.cdisc.org/standards/foundational/cdash>)
* [FDA Safety Reporting Requirements for investigational new drug (IND) and bioavailability (BA) and bioequivalence (BE) studies under 21 CFR 312.32, 312.64(b), and 320.31(d)(3).](<https://www.fda.gov/files/drugs/published/Safety-Reporting-Requirements-for-INDs-%28Investigational-New-Drug-Applications%29-and-BA-BE-%28Bioavailability-Bioequivalence%29-Studies.pdf>)
* [MedWatch the FDA safety information and adverse event reporting program](<https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program/reporting-serious-problems-fda>)

## Workflow

This IG will allow clinical trial AE representation in systems, including EHRs and PHRs, transmitted via FHIR to other systems; removing the need to transcribe AE data into secondary clinical trial management systems and improving efficiency for health authority reporting. The following workflows are examples to demonstrate the potential use of this AE profile in the clinical research spectrum via FHIR.

### Pre-Market

The following image shows a notional workflow for collecting and reporting adverse events and serious adverse events (SAE) for pre-market clinical trials. The dotted line represents a future vision of data flow using FHIR which will most likely be covered by a separate MedWatch IG that builds upon this IG.

<img src="ClinicalResearchAEScope-PreMarket-v2.png" alt="Clinical Research AE Pre-Market" width="50%" style="float:none; margin: 0px 0px 0px 0px;" />

Example scenarios: Pre-market clinical trial reporting of serious adverse events (SAE) using FHIR and utilized as part of clinical decision support actions within a clinical research trial setting.

* Adverse event is captured in EHR by Clinical Investigator and sent to Clinical Trial Management System, then sent to Sponsor or FDA.
* Patient records adverse event in a patient facing FHIR app that contains the MedWatch 3500B questionnaire. The data is sent from the patient FHIR app to the Clinical Investigator or Sponsor for inclusion in their reporting to the FDA.

### Post-Market

The following image shows a notional workflow for collecting and reporting adverse events, post-market. The dotted line represents a future vision of data flow using FHIR which will most likely be covered by a separate MedWatch IG that builds upon this IG.

<img src="ClinicalResearchAEScope-PostMarket-v2.png" alt="Clinical Research AE Post-Market" width="50%" style="float:none; margin: 0px 0px 0px 0px;" />

Example scenarios: Postmarketing adverse event reporting using FHIR for safety surveillance.

* Patient records adverse event that is sent to FDA
* Provider records adverse event in EHR that is sent to FDA
* Manufacturer (via call center) records adverse event and sends to FDA


---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

**Cross Version Analysis**

{% include cross-version-analysis.xhtml %}

**Dependency Table**

{% include dependency-table.xhtml %}

**Globals Table**

{% include globals-table.xhtml %}

**IP Statements**

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/pagecontent/exampleCancerClinicalTrial.md

# Cancer Clinical Trial Adverse Event Research Study Medications

Patient Kaitlyn B. is a 36 year old non-Hispanic white female with a past medical history significant for asthma. Her family history was significant for a mother and maternal aunt both with breast cancer diagnosed premenopausal.  Both are alive and well presently.  She also has a deceased paternal grandfather from non small cell lung carcinoma (NSCLC).

During a routine screening mammography in May 8, 2019, an abnormality was detected as a possible mass and suspected breast cancer (Birads 4). A ultrasound was done (5/9/2019) followed by an ultrasound biopsy of the left breast mass which measured 3.0cm on imaging.  Pathology confirmed a diagnosis of high grade invasive ductal carcinoma (IDC) that was ER Negative at 0%; PR Negative at 0% and HER2 Positive 3+ by IHC. There were no suspicious lymph nodes seen on imaging.  The patient is referred to an oncologist who clinically reviewed (5/17/21) the history, imaging and pathology results.  Physical exam shows about a 3cm palpable mass in the left breast thus the patient is clinically staged as cT3N0.  She was to receive neoadjuvant chemotherapy of Taxol 175mg/m2 as well as Pertuzumab and Trastuzumab for a total of 6 cycles.  Each cycle is 21 days.  Start date 5/20/2019 for cycle 1 (c2 was 6/10/19, c3 was 7/3/19, c4 was 7/22/19, c5 was 8/12/19 and cycle 6 was 9/2/19 (for start of that last three week cycle)). She completed treatment on 9/23/2019 without significant issues and no dose reductions or holding and was scheduled for surgery per her General Surgeon.

A left partial mastectomy was performed on December 3, 2019 with sentinel lymph node dissection, revealing residual disease with a 2.1 cm tumor without lymph-vascular invasion and negative margins of excision. Three sentinel lymph nodes were excised were negative. The pathology report  revealed a 2.8cm malignant tumor histological grade 3/3  invasive ductal carcinoma with prognostic tumor markers ER negative 0%, PR negative 0%, and HER2 Positive/3+ by IHC. The patient is pathologically staged as pT3 pN0 M0, stage group IIA. A 21-gene RT-PCR assay yielded a recurrence score of 29.

Patient was seen by her oncologist on 3/12/20 in follow up after surgery and after the completion of 4 weeks of post operative radiation therapy to the left chest (radiation start date was 1/30/20 and end date was 2/27/20). Treatment options were discussed between the patient and the medical oncologist and the patient consented on 3/12/20 to treatment on the Alliance Compass Protocol A011801.  She presently has an ECOG performance score of 0. She is to receive 14 four cycles of Kadcyla IV at 3.6mg every 21 days with oral Tucatinib 300mg twice a day every day.

She began her first cycle of Kadcyla and started on Tucatinib on 4/1/2020.  She tolerated cycle well.  On 4/22/20 she arrived for cycle 2.  Her lab work was all within normal limits except for an alanine aminotransferase (ALT) increased at 50 (grade 1 per CTCAE v 5.0)  This is considered probably related to both drugs.  Patient seen in 3 weeks for cycle 2.  Lab work stable.  On cycle 3 (5/13/20) she arrived and was noted to have an increased ALT to 200 U/L. This was grade 3 and probably related to one or both drugs. No other lab abnormalities noted.  Treatment was held today per protocol guidelines and the patient was scheduled to return in one week for repeat lab work. She was seen on 5/20/20 and her ALT was decreased down to 60 which was grade 1 level - OK to proceed with treatment and restart oral medication.  Kadcyla was dose reduced to 3.0mg and the Tucatinib was also dose reduced to 250mg twice daily per dose reduction guidelines in protocol.  Cycle 4 was then on 6/10/20 and patient c/o Nausea/vomiting grade 1 throughout this past cycle starting about 5/25/20.  This was attributed as possibly related to Kadcyla and probably related to Tucatinib and is ongoing.  Additional antiemetics were prescribed on 6/10/20 (Zofran 8mg orally every 6-8 hours as needed). Her ALT value was WNL and the adverse event was considered resolved on 6/10/20. She continued on treatment and completed the total of 14 cycles on 01/27/21 without further dose reductions or adverse events (chemo dates - C5: 7/1/20, C6: 7/22/20, C7: 8/12/20, C8: 9/02/20, C9: 9/23/20, C10:  10/14/20, C11:  11/04/20, C12: 11/25/20, C13: 12/16/20, C14: 01/06/21). She will be seen in f/u as per standard of care.

For simplicity, this example covers the Patient's journey starting with the Alliance clinical trial Compass, the events within the red box in the timeline.

Links to the adverse event examples:

- [Example AdverseEvent 1](AdverseEvent-adverse-event-compass-ex1.html)
- [Example AdverseEvent 1a](AdverseEvent-adverse-event-compass-ex1a.html)
- [Example AdverseEvent 1b](AdverseEvent-adverse-event-compass-ex1b.html)
- [Example AdverseEvent 2](AdverseEvent-adverse-event-compass-ex2.html)

<div style="text-align: center;">
<img src="AE-CancerClinicalTrial-PersonaTimeline.svg" alt="Example Timeline" />
</div>


---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/pagecontent/examples.md

### Introduction

The following use cases are exemplified with FHIR instances in this guide. Every effort has been made to be accurate, especially with regards to the AdverseEvent Clinical Research Profile instances, but these are intended as examples and may not include referenced data such as an Encounter. They are from real world examples and show how the AdverseEvent Clinical Research Profile is intended to be generally used. Keep in mind that it is intended that the profile in this guide be derived from to produce use case specific guidance. The examples are demonstrative of using FHIR in adverse event reporting but not prescriptive. As the use of adverse event reporting with FHIR matures, the examples could become outdated. Note the Patient resource was referenced as appropriate; however, in clinical research the data would go to the sponsor as a research subject identifier. Depending on the use case implementers will want to be aware of the ResearchSubject resource which points to the Patient resource.

### Clinical trial: significant adverse event

(Link to [Example AdverseEvent Clinical Research Profile](AdverseEvent-ClinicalTrialSignificantAdverseEvent.html))

This scenario involves a phase 2, clinical study evaluating the safety and efficacy of a new oral agent administered daily for treatment of severe psoriasis unresponsive to FDA-approved treatments.  There are two arms of the study – subjects receiving the new oral agent or a placebo.  Only the research pharmacist is aware of the arm assignment.    The fifth subject enrolled in the trial develops severe hepatic failure complicated by encephalopathy one month after starting the study. 

The known risk profile of the new oral agent prior to this event included mild elevation of serum liver enzymes in 10% of subjects receiving the agent during previous clinical studies, but there was no other history of subjects developing clinically significant liver disease.  The IRB approved protocol and informed consent document for the study identifies mild liver injury as a risk of the research.

The study sponsors determined that is an unanticipated problem that must be reported because although the risk of mild liver injury was foreseen, severe liver injury resulting in hepatic failure was unexpected in severity; possibly related to participation in the research; and serious.

### FDA MedWatch 3500A Form being used during a clinical trial

(Link to [Example AdverseEvent Clinical Research Profile](AdverseEvent-clinical-research-ae-example-medwatch-patient-report.html))

A 64-year-old woman (Janet) is participating in a breast cancer clinical trial and taking an investigational drug. As part of her participation in the study, she was instructed to use a patient reported outcomes (ePRO) application to report an adverse event that resulted in any of the following: hospitalization, required help to prevent permanent harm, disability or health problem, birth defect, life-threatening, death, other serious/important medical incident (this list identifies the event as being "serious events"). The application is designed to capture data elements found on the 3500A Form. 

The Clinical Investigator (CI) receives a notification that Janet has an adverse event and reviews the event in Janet’s EHR system.   The adverse event form is pre-populated from EHR data for the clinical investigator.  The CI assesses causality for Janet’s adverse event and submits the serious adverse event to the sponsor.  The sponsor reviews the received adverse event and performs its own causality assessment.  Since this event is a Suspected Unexpected Serious Adverse Reaction (SUSAR) within FDA’s regulation.  If the Suspected Unexpected Serious Adverse Reaction (SUSAR) was life threating or death, it is submitted within 7 calendar days.

Any other types of seriousness are submitted within 15 calendar days.

### Serious Adverse Event Research Study

(Link to [Example AdverseEvent Clinical Research Profile](AdverseEvent-SeriousAdverseEventResearchStudy.html))

Patient SCHJO on Research Study XYZ, Study ID XYZ-123, Subject number XYZ-123-002. SCHJO was enrolled in the study on 12-Jun-2021 taking Study Medication ABC 10 mg orally daily every morning for atrial fibrillation to prevent thromboembolism.  On 2-Dec-2021, the subject XYZ-123-002 was hospitalized with a Gastrointestinal (GI) bleed. The investigator was notified of the event on the day of admission when the patient presented with vomiting a large amount of coffee-ground like hematemesis.  The investigator stopped the study drug because the event was “Possibly related” to the study drug.  The patient’s hemoglobin dropped to 6.5 g/dL and received 2 units of PRBCs.  The patient had an upper endoscopy that showed a moderate amount of bleeding from the esophagus. The site was cauterized, and the patient had no further bleeding after the procedure. The GI bleed resolved within one week after discontinuation of study drug and the patient was discharged on 9-Dec-2021 in good condition.

### Non-Serious Adverse Event Research Study Medication

(Link to [Example AdverseEvent Clinical Research Profile](AdverseEvent-NonSeriousAdverseEventResearchStudyMed.html))

Patient MOUMIC on Research Study DISNEY, Study ID DUCK-828, Subject number DUCK-828-012. MOUMIC was enrolled in the study on 21-Jan-2022 taking Study Medication 20 mg subcutaneously daily every morning for diabetes.  At visit 3 on 21-Feb-2022, the patient stated that he had started to experience intermittent headaches on 1-Feb-2022 that were mild. They occurred once a week and resolved with Tylenol but were still ongoing. The investigator said the headaches were “UNLIKELY RELATED” to study drug.  The action taken with the study treatment was the “DOSE NOT CHANGED” and the outcome was noted to be “NOT RECOVERED/NOT RESOLVED”.

### Non-Serious Adverse Event Related to Study Procedure (not study drug)

(Link to [Example AdverseEvent Clinical Research Profile](AdverseEvent-AdverseEventFromProcedureNotStudyDrug.html))

Patient SLP on Research Study ACME, Study ID ACME-789, Subject number ACME-789-100. SLP was enrolled in the study on 2-Jan-2021, taking Study Medication WBY 10 mg orally daily every morning for moderate asthma.  
On 15-Jan-2021, the subject has the protocol-prescribed procedure of a Lung CT Scan, with contrast dye.  As a result of the contrast dye, the subject experiences moderate hives and itching from the contrast dye.  This is reported as an Adverse Event, related to study procedure.  He is treated with a Benadryl injection and recovers the same day.

The investigator said the reaction to the contrast dye was “UNLIKELY RELATED” to study drug.  The action taken with the study treatment was the “DOSE NOT CHANGED” and the outcome was noted to be “RECOVERED/RESOLVED”.

### Cancer Clinical Trial with Non-serious Adverse Events

This [use case persona](exampleCancerClinicalTrial.html) describes a hypothetical cancer patient on a cancer clinical trial with example instances to demonstrate how the adverse event profile can be used to guide the creation of resources representing a clinically realistic scenario.

### Device Example

Exemplification of referencing a device in an adverse event, [Device Example](AdverseEvent-adverse-event-device-death.html). The example has a device as the suspected entity, but the AdverseEvent Clinical Research Profile also has a reference for Device as a participant, contributingFactor, mitigatingAction, and supportingInfo. 

---

File: repos/HL7_SLASH_fhir-ae-research-backport-ig/input/pagecontent/security.md

Please review the guidance on Security from [FHIR CORE](https://hl7.org/fhir/R4/security.html). This implementation guide is a starting point for further specification in the Clinical Research domain, specifically from the AdverseEvent Clinical Research Profile. Please provide relevant further details on use case specific security concerns when deriving from this implementation guide. 

---

