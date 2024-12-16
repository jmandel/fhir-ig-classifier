File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-BaseQuestionnaire.fsh

Instance: dtr-base-questionnaire
InstanceOf: Questionnaire
Description: "An example base questionnaire."
Usage: #example
* url = "http://hl7.org/fhir/us/davinci-dtr/dtr-base-questionnaire"
* version = "0.1.0"
* name = "DTRBaseQuestionnaire"
* title = "Base Questionnaire"
* status = #draft
* subjectType = #Patient
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Example base questionnaire</div>"
* date = "2020-01-16T00:00:00+00:00"
* publisher = "Da Vinci DTR"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-Parameters.fsh

// **********************************************************************************************************************************
Instance: QuestionnairePackageInputParamsExample
InstanceOf: DTRQuestionnairePackageInputParameters
Description: "An example instance of [Input Parameters](StructureDefinition-dtr-qpackage-input-parameters.html) for the [QuestionnairePackage](OperationDefinition-questionnaire-package.html) operation."
Title: "$questionnaire-package Input Parameters Example"
Usage: #example
* parameter[coverage].resource = CoverageExample
* parameter[order].resource = ServiceRequestExample
* parameter[questionnaire].valueCanonical = "http://hl7.org/fhir/us/davinci-dtr/Questionnaire/home-o2-std-questionnaire"

// **********************************************************************************************************************************
Instance: QuestionnairePackageOutputParamsExample
InstanceOf: DTRQuestionnairePackageOutputParameters
Description: "An example instance of [Output Parameters](StructureDefinition-dtr-qpackage-output-parameters.html) for the [QuestionnairePackage](OperationDefinition-questionnaire-package.html) operation."
Title: "$questionnaire-package Output Parameters Example"
Usage: #example
* parameter[PackageBundle].resource = home-o2-questionnairepackage-bundle

// **********************************************************************************************************************************
Instance: LogQuestionnaireErrorsInputParamsExample
InstanceOf: DTRLogErrorsInputParameters
Description: "An example instance of [Input Parameters](StructureDefinition-dtr-log-errors-input-parameters.html) that are supplied to the [Log Questionnaire Errors](OperationDefinition-log-questionnaire-errors.html) operation."
Title: "$log-questionnaire-errors Input Parameters Example"
Usage: #example
* parameter[questionnaire].valueCanonical = "http://hl7.org/fhir/us/davinci-dtr/Questionnaire/home-o2-std-questionnaire"
* parameter[outcome].resource = OperationOutcomeExample

// **********************************************************************************************************************************
Instance: NextQuestionInputParamsExample
InstanceOf: DTRQuestionnaireNextQuestionnaireInputParameters
Description: "An example instance of [input Parameters](StructureDefinition-dtr-next-question-input-parameters.html) used by the [Next Question](OperationDefinition-DTR-Questionnaire-next-question.html) operation."
Title: "$next-question Input Parameters Example"
Usage: #example
* parameter[QuestionnaireResponse].resource = home-o2-questionnaireresponse

// **********************************************************************************************************************************
Instance: NextQuestionOutputParamsExample
InstanceOf: DTRQuestionnaireNextQuestionnaireOutputParameters
Description: "An example instance of [output Parameters](StructureDefinition-dtr-next-question-output-parameters.html) used by the [Next Question](OperationDefinition-DTR-Questionnaire-next-question.html) operation."
Title: "$next-question Output Parameters Example"
Usage: #example
* parameter[QuestionnaireResponse].resource = home-o2-questionnaireresponse


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-QuestionnaireAdaptive.fsh

// **********************************************************************************************************************************
Instance: home-o2-adaptive-questionnaire
InstanceOf: DTRQuestionnaireAdapt
Usage: #inline
Description: "An example Adaptive questionnaire for Home Oxygen Therapy."
* version = "0.1.0"
* name = "HomeOxygenTherapyAdaptiveQuestionnaire"
* title = "Adaptive Home Oxygen Therapy Order Template"
* status = #draft
* subjectType = #Patient
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Example adaptive questionnaire contained in a QuestionnaireResposne</div>"
* date = "2020-01-16T00:00:00+00:00"
* publisher = "Da Vinci DTR"
* contact.name = "Example Author"
* derivedFrom = Canonical(dtr-base-questionnaire)

// * derivedFrom = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-base-questionnaire"
// * derivedFrom.extension[+].url = "http://hl7.org/fhir/StructureDefinition/questionnaire-derivationType"
// * derivedFrom.extension[=].valueCodeableConcept = http://hl7.org/fhir/questionnaire-derivationType#compliesWith "Complies with"

* extension[sdc-questionnaire-questionnaireAdaptive].valueUrl = "http://example.com/fhir/R4"
* item[0].linkId = "1"
* item[=].text = "Relevant Patient Diagnoses (conditions that might be expected to improve with oxygen therapy)"
* item[=].type = #text
* item[=].required = true
* item[+].linkId = "2"
* item[=].text = "Order Reason"
* item[=].type = #choice
* item[=].required = true
* item[=].answerOption[0].valueCoding = http://example.org#1 "Initial or original order for certification"
* item[=].answerOption[+].valueCoding = http://example.org#2 "Change in status"
* item[=].answerOption[+].valueCoding = http://example.org#3 "Revision or change in equipment"
* item[=].answerOption[+].valueCoding = http://example.org#4 "Replacement"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-QuestionnairePackageBundle.fsh

// **********************************************************************************************************************************
Instance: home-o2-questionnairepackage-bundle
InstanceOf: DTRQuestionnairePackageBundle
Usage: #example
Description: "An example [QuestionnaireResponseBundle](StructureDefinition-DTR-QPackageBundle.html) for Home Oxygen Therapy."
* meta.profile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/DTR-QPackageBundle"
* type = #collection
* entry[questionnaire].fullUrl = "http://example.org/fhir/home-o2-questionnairepackage"
* entry[questionnaire].resource = home-o2-std-questionnaire

// **********************************************************************************************************************************
Instance: home-o2-questionnairepackage-bundle-2
InstanceOf: DTRQuestionnairePackageBundle
Usage: #example
Description: "An example [QuestionnaireResponseBundle](StructureDefinition-DTR-QPackageBundle.html) for Home Oxygen Therapy."
* meta.profile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/DTR-QPackageBundle"
* type = #collection

* entry[questionnaire].fullUrl = "http://example.org/fhir/home-o2-questionnaire"
* entry[questionnaire].resource = home-o2-std-questionnaire

* entry[questionnaireResponse].fullUrl = "http://example.org/fhir/home-o2-questionnaireresponse"
* entry[questionnaireResponse].resource = home-o2-questionnaireresponse

---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-QuestionnairePackageOperationResult.fsh

// ***********************************************************************************************************
Instance: DTRQuestionnairePackageOperationResultSimple
InstanceOf: DTRQuestionnairePackageBundle
Title: "Questionnaire Package Operation Results - Simple"
Description: "An example of [DTRQuestionnairePackageOperation](OperationDefinition-questionnaire-package.html) returning a Parameters instance containing multiple Questionnaire bundles, each with references to other Library and ValueSet resources."
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:90404930-204a-4127-9c40-997b2ed7f767"
* type = #collection
* timestamp = "2023-04-20T00:00:00+05:00"
* entry[questionnaire].fullUrl = "http://example.org/fhir/home-o2-adaptive-questionnaire"
* entry[questionnaire].id = "home-o2-adaptive-questionnaire"
* entry[questionnaire].resource = home-o2-adaptive-questionnaire

// ***********************************************************************************************************
Instance: DTRQuestionnairePackageOperationResultComplex
InstanceOf: DTRQuestionnairePackageBundle
Title: "Questionnaire Package Operation Results - Complex"
Description: "An example of [DTRQuestionnairePackageOperation](OperationDefinition-questionnaire-package.html) returning a Bundle with only a multiple questionnaires, with references to other Library and ValueSet resources"
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:90404930-204a-4127-9c40-997b2ed7f767"
* type = #collection
* timestamp = "2023-04-20T00:00:00+05:00"
* entry[questionnaire].fullUrl = "http://example.org/fhir/home-o2-adaptive-questionnaire"
* entry[questionnaire].id = "home-o2-adaptive-questionnaire"
* entry[questionnaire].resource = home-o2-adaptive-questionnaire



---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-QuestionnaireResponse-ForAdaptive.fsh

Instance: home-o2-adaptive-questionnaireresponse
InstanceOf: QuestionnaireResponse
Usage: #example
Description: "An example [QuestionnaireResponse](StructureDefinition-dtr-questionnaireresponse.html) for Adaptive Questionnaire."
* contained[0] = home-o2-adaptive-questionnaire
* questionnaire = "#home-o2-adaptive-questionnaire"
* status = #completed
* authored = "2022-01-26T20:36:57.544Z"
* item[+].linkId = "1"
* item[=].text = "Relevant Patient Diagnoses (conditions that might be expected to improve with oxygen therapy)"
* item[=].answer.valueString = "diagnosis"
* item[+].linkId = "2"
* item[=].text = "Order Reason"
* item[=].answer.valueCoding = http://example.org#4 "Replacement"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-QuestionnaireResponse.fsh

Instance: home-o2-questionnaireresponse
InstanceOf: DTRQuestionnaireResponse
Usage: #example
Description: "An example [QuestionnaireResponse](StructureDefinition-dtr-questionnaireresponse.html) for Home Oxygen Therapy."
* meta.profile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse"

* extension[context][0].valueReference = Reference(CoverageExample)
* extension[context][+].valueReference = Reference(ServiceRequestExample)
* extension[intendedUse].valueCodeableConcept.coding = http://hl7.org/fhir/us/davinci-crd/CodeSystem/temp#withorder "Include with order"

* questionnaire = Canonical(referred-questionnaire)
* status = #completed
* subject = Reference(PatientExample) "Vlad"
* authored = "2023-08-21"
// ===========================================================================================
* item[0].linkId = "1"
* item[=].text = "Patient Information"

* item[=].item[0].linkId = "1.1"
* item[=].item[=].text = "Last Name but Different This Time"
* item[=].item[=].answer[0].valueString = "Quinton"

* item[=].item[=].answer[=].extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #override
* item[=].item[=].answer[=].extension[=].extension[+].url = "author"
* item[=].item[=].answer[=].extension[=].extension[=].extension[0].url = "role"
* item[=].item[=].answer[=].extension[=].extension[=].extension[=].valueCodeableConcept = http://terminology.hl7.org/CodeSystem/practitioner-role#doctor "Doctor"
* item[=].item[=].answer[=].extension[=].extension[=].extension[+].url = "practitioner"
* item[=].item[=].answer[=].extension[=].extension[=].extension[=].valueReference = Reference(PractitionerExample) "Dr. Jane Doe"

* item[=].item[+].linkId = "1.2"
* item[=].item[=].text = "First Name"
* item[=].item[=].answer[0].valueString = "Vlad"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "1.3"
* item[=].item[=].text = "Middle Initial"
* item[=].item[=].answer[0].valueString = "A, N"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "1.4"
* item[=].item[=].text = "Date Of Birth"
* item[=].item[=].answer[0].valueDate = "1956-12-01"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "1.5"
* item[=].item[=].text = "Gender"
* item[=].item[=].answer[0].valueCoding = http://hl7.org/fhir/administrative-gender#male "Male"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
 
* item[=].item[+].linkId = "1.6"
* item[=].item[=].text = "Medicare ID"
* item[=].item[=].answer[0].valueString = "10A3D58WH22"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
* item[=].item[=].answer[=].extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

// ===========================================================================================
* item[+].linkId = "2"
* item[=].text = "Provider who is performing face-to-face evaluation"
        // ===========================================================================================
* item[=].item[0].linkId = "2.1"
* item[=].item[=].text = "Last Name"
* item[=].item[=].answer[0].valueString = "Doe"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
        // ===========================================================================================
* item[=].item[+].linkId = "2.2"
* item[=].item[=].text = "First Name"
* item[=].item[=].answer[0].valueString = "Jane"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
        // ===========================================================================================
* item[=].item[+].linkId = "2.3"
* item[=].item[=].text = "Middle Initial"
* item[=].item[=].answer[0].valueString = "B"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
        // ===========================================================================================
* item[=].item[+].linkId = "2.4"
* item[=].item[=].text = "NPI"
* item[=].item[=].answer[0].valueString = "1122334455"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
        // ===========================================================================================
* item[=].item[+].linkId = "2.5"
* item[=].item[=].text = "Date of Face-To-Face Evaluation"
* item[=].item[=].answer[0].valueDate = "2019-07-18"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
* item[=].item[=].answer[=].extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #override
* item[=].item[=].answer[=].extension[=].extension[+].url = "author"
* item[=].item[=].answer[=].extension[=].extension[=].extension[0].url = "role"
* item[=].item[=].answer[=].extension[=].extension[=].extension[=].valueCodeableConcept = 	http://terminology.hl7.org/CodeSystem/practitioner-role#doctor "Doctor"
* item[=].item[=].answer[=].extension[=].extension[=].extension[+].url = "practitioner"
* item[=].item[=].answer[=].extension[=].extension[=].extension[=].valueReference = Reference(PractitionerExample) "Dr. Jane Doe"
        // ===========================================================================================
* item[=].item[+].linkId = "2.6"
* item[=].item[=].text = "Record"
* item[=].item[=].answer[0].valueReference = Reference(PatientExample) "Mr. Saul Moki"
* item[=].item[=].answer[=].extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/containedReference"
* item[=].item[=].answer[=].extension[=].valueBoolean = false

// ===========================================================================================
* item[+].linkId = "3"
* item[=].text = "Coverage Requirements"

* item[=].item[0].linkId = "3.1"
* item[=].item[=].text = "Relevant Patient Diagnoses (conditions that might be expected to improve with oxygen therapy)"
* item[=].item[=].answer[+].valueCoding = http://snomed.info/sct#313296004 "Mild chronic obstructive pulmonary disease"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
// * item[=].item[=].answer[+].valueCoding = http://snomed.info/sct#389087006 "Hypoxemia (disorder)"
// * item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
// * item[=].item[=].answer[=].extension[=].extension[0].url = "source"
// * item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "3.2"
* item[=].item[=].text = "Arterial oxygen saturation (Patient on room air while at rest and awake when tested)"
* item[=].item[=].answer[0].valueQuantity = 95 'mm[Hg]'
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "3.3"
* item[=].item[=].text = "Arterial Partial Pressure of Oxygen (PO2) (Patient on room air while at rest and awake when tested)"
* item[=].item[=].answer[0].valueQuantity = 83 'mm[Hg]'
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "3.4"
* item[=].item[=].text = "Arterial oxygen saturation (Patient tested during exercise)"
* item[=].item[=].answer[0].valueQuantity = 95 'mm[Hg]'
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "3.5"
* item[=].item[=].answer[0].valueQuantity = 78 'mm[Hg]'
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
* item[=].item[=].text = "Arterial Partial Pressure of Oxygen (PO2) (Patient tested during exercise)"

* item[=].item[+].linkId = "3.6"
* item[=].item[=].text = "Is there a documented improvement of hypoxemia during exercise with oxygen?"
* item[=].item[=].answer[0].valueBoolean = true
* item[=].item[=].answer[=].extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

// ===========================================================================================
* item[+].linkId = "4"
* item[=].text = "Prescribed Use"

* item[=].item[0].linkId = "4.1"
* item[=].item[=].text = "Start date"
* item[=].item[=].answer[0].valueDate = "2019-07-18"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "4.2"
* item[=].item[=].text = "Length of need: (months) (99 = lifetime)"
* item[=].item[=].answer[0].valueQuantity.value = 99
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "4.3"
* item[=].item[=].text = "Peak Flow Rate"
* item[=].item[=].item[0].linkId = "4.3.1"
* item[=].item[=].item[=].text = "LPM"
* item[=].item[=].item[=].answer[0].valueQuantity.value = 2
* item[=].item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
* item[=].item[=].item[+].linkId = "4.3.2"
* item[=].item[=].item[=].text = "oxygen %"
* item[=].item[=].item[=].answer[0].valueQuantity.value = 98
* item[=].item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "4.4"
* item[=].item[=].text = "Average Flow Rate"
* item[=].item[=].item[0].linkId = "4.4.1"
* item[=].item[=].item[=].text = "LPM"
* item[=].item[=].item[=].answer[0].valueQuantity.value = 2
* item[=].item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
* item[=].item[=].item[+].linkId = "4.4.2"
* item[=].item[=].item[=].text = "oxygen %"
* item[=].item[=].item[=].answer[0].valueQuantity.value = 97
* item[=].item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto
* item[=].item[+].linkId = "4.5"
* item[=].item[=].text = "Frequency of use (choose all that apply)"
* item[=].item[=].answer[0].valueString = "At rest and awake"
* item[=].item[=].answer[=].extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

// ===========================================================================================
* item[+].linkId = "5"
* item[=].text = "Oxygen Supply Order Details"

* item[=].item[0].linkId = "5.1"
* item[=].item[=].text = "Current Order Description"
* item[=].item[=].answer[0].valueString = "HCPCS E0424 - Stationary Compressed Gaseous Oxygen System, Rental"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "5.1b"
* item[=].item[=].text = "Current Order Is For A Portable Device"

* item[=].item[+].linkId = "5.2"
* item[=].item[=].text = "Type"
* item[=].item[=].answer[0].valueCoding = http://example.org#122 "Compressed Gas"
* item[=].item[=].answer[=].extension[+].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto

* item[=].item[+].linkId = "5.3"
* item[=].item[=].text = "Means of oxygen delivery and accessories"
* item[=].item[=].answer[0].valueCoding = http://example.org#134 "Mask"
* item[=].item[=].answer[=].extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin"
* item[=].item[=].answer[=].extension[=].extension[0].url = "source"
* item[=].item[=].answer[=].extension[=].extension[=].valueCode = #auto


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-QuestionnaireResponseBundle.fsh

// **********************************************************************************************************************************
Instance: home-o2-questionnaireresponse-bundle
InstanceOf: DTRQuestionnaireResponseBundle
Usage: #example
Description: "An example [QuestionnaireResponseBundle](StructureDefinition-DTR-QRBundle.html) for Home Oxygen Therapy."
* type = #collection
* entry[0].fullUrl = "http://example.org/fhir/home-o2-questionnaireresponse"
* entry[=].resource = home-o2-questionnaireresponse

---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-QuestionnaireStandard.fsh

Instance: home-o2-std-questionnaire
InstanceOf: DTRStdQuestionnaire
Usage: #example
Description: "An example [Standard questionnaire](StructureDefinition-dtr-std-questionnaire.html) for Home Oxygen Therapy."

* url = "http://hl7.org/fhir/us/davinci-dtr/Questionnaire/home-o2-std-questionnaire"
* version = "0.1.0"
* name = "HomeOxygenTherapyStdQuestionnaire"
* title = "Home Oxygen Therapy Order Template"
* status = #draft
* subjectType = #Patient
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"border: 1px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top;\"><tr style=\"border: 2px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top\"><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"The linkId for the item\">LinkId</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"Text for the item\">Text</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"Minimum and Maximum # of times the the itemcan appear in the instance\">Cardinality</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"The type of the item\">Type</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"Other attributes of the item\">Flags</a></th><th style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"Additional information about the item\">Description &amp; Constraints</a><span style=\"float: right\"><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"Legend for this format\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goXBCwdPqAP0wAAAldJREFUOMuNk0tIlFEYhp9z/vE2jHkhxXA0zJCMitrUQlq4lnSltEqCFhFG2MJFhIvIFpkEWaTQqjaWZRkp0g26URZkTpbaaOJkDqk10szoODP//7XIMUe0elcfnPd9zsfLOYplGrpRwZaqTtw3K7PtGem7Q6FoidbGgqHVy/HRb669R+56zx7eRV1L31JGxYbBtjKK93cxeqfyQHbehkZbUkK20goELEuIzEd+dHS+qz/Y8PTSif0FnGkbiwcAjHaU1+QWOptFiyCLp/LnKptpqIuXHx6rbR26kJcBX3yLgBfnd7CxwJmflpP2wUg0HIAoUUpZBmKzELGWcN8nAr6Gpu7tLU/CkwAaoKTWRSQyt89Q8w6J+oVQkKnBoblH7V0PPvUOvDYXfopE/SJmALsxnVm6LbkotrUtNowMeIrVrBcBpaMmdS0j9df7abpSuy7HWehwJdt1lhVwi/J58U5beXGAF6c3UXLycw1wdFklArBn87xdh0ZsZtArghBdAA3+OEDVubG4UEzP6x1FOWneHh2VDAHBAt80IbdXDcesNoCvs3E5AFyNSU5nbrDPZpcUEQQTFZiEVx+51fxMhhyJEAgvlriadIJZZksRuwBYMOPBbO3hePVVqgEJhFeUuFLhIPkRP6BQLIBrmMenujm/3g4zc398awIe90Zb5A1vREALqneMcYgP/xVQWlG+Ncu5vgwwlaUNx+3799rfe96u9K0JSDXcOzOTJg4B6IgmXfsygc7/Bvg9g9E58/cDVmGIBOP/zT8Bz1zqWqpbXIsd0O9hajXfL6u4BaOS6SeWAAAAAElFTkSuQmCC\" alt=\"doco\" style=\"background-color: inherit\"/></a></span></th></tr><tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck1.png)\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon_q_root.gif\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"QuestionnaireRoot\" class=\"hierarchy\"/> HomeOxygenTherapySDCQuestionnaire</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Questionnaire</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">http://hl7.org/fhir/us/davinci-dtr/Questionnaire/home-o2-sdc-questionnaire#1.1.0-ballot</td></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck11.png)\" id=\"item.1\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-group.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Group\" class=\"hierarchy\"/> 1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Patient Information</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-group\">group</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck110.png)\" id=\"item.1.1\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vline.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"String\" class=\"hierarchy\"/> 1.1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Last Name</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">1..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string\">string</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck110.png)\" id=\"item.1.2\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vline.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"String\" class=\"hierarchy\"/> 1.2</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Fist Name</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">1..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string\">string</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck100.png)\" id=\"item.1.3\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vline.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin_end.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"String\" class=\"hierarchy\"/> 1.3</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Middle Name</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string\">string</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck10.png)\" id=\"item.1.4\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-string.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"String\" class=\"hierarchy\"/> 1.4</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Postal Code (A1A 1A1)</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string\">string</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck10.png)\" id=\"item.1.5\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-decimal.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Decimal\" class=\"hierarchy\"/> 1.5</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Enter your weight in lb</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-decimal\">decimal</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck10.png)\" id=\"item.1.6\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-attachment.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Attachment\" class=\"hierarchy\"/> 1.6</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Attach latest x-ray</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-attachment\">attachment</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white\"><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck01.png)\" id=\"item.2\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin_end.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-group.png\" alt=\".\" style=\"background-color: white; background-color: inherit\" title=\"Group\" class=\"hierarchy\"/> 2</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Calculation</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-group\">group</a></td><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/><td style=\"vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"/></tr>\r\n<tr style=\"border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7\"><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck000.png)\" id=\"item.3.1\" class=\"hierarchy\"><img src=\"tbl_spacer.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_blank.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"tbl_vjoin_end.png\" alt=\".\" style=\"background-color: inherit\" class=\"hierarchy\"/><img src=\"icon-q-date.png\" alt=\".\" style=\"background-color: #F7F7F7; background-color: inherit\" title=\"Date\" class=\"hierarchy\"/> 3.1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Deadline for submission (7 days from now)</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">0..1</td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-date\">date</a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\"><a href=\"http://hl7.org/fhir/R4/questionnaire-definitions.html#Questionnaire.item.readOnly\" title=\"Is Readonly\"><img src=\"icon-qi-readonly.png\" alt=\"icon\"/></a></td><td style=\"vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px\" class=\"hierarchy\">Expressions: <ul><li style=\"font-size: 11px\"><a href=\"http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression\">Initial Value</a>: <code>today() + 7 days</code></li></ul></td></tr>\r\n<tr><td colspan=\"6\" class=\"hierarchy\"><br/><a href=\"http://hl7.org/fhir/R4/formats.html#table\" title=\"Legend for this format\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goXBCwdPqAP0wAAAldJREFUOMuNk0tIlFEYhp9z/vE2jHkhxXA0zJCMitrUQlq4lnSltEqCFhFG2MJFhIvIFpkEWaTQqjaWZRkp0g26URZkTpbaaOJkDqk10szoODP//7XIMUe0elcfnPd9zsfLOYplGrpRwZaqTtw3K7PtGem7Q6FoidbGgqHVy/HRb669R+56zx7eRV1L31JGxYbBtjKK93cxeqfyQHbehkZbUkK20goELEuIzEd+dHS+qz/Y8PTSif0FnGkbiwcAjHaU1+QWOptFiyCLp/LnKptpqIuXHx6rbR26kJcBX3yLgBfnd7CxwJmflpP2wUg0HIAoUUpZBmKzELGWcN8nAr6Gpu7tLU/CkwAaoKTWRSQyt89Q8w6J+oVQkKnBoblH7V0PPvUOvDYXfopE/SJmALsxnVm6LbkotrUtNowMeIrVrBcBpaMmdS0j9df7abpSuy7HWehwJdt1lhVwi/J58U5beXGAF6c3UXLycw1wdFklArBn87xdh0ZsZtArghBdAA3+OEDVubG4UEzP6x1FOWneHh2VDAHBAt80IbdXDcesNoCvs3E5AFyNSU5nbrDPZpcUEQQTFZiEVx+51fxMhhyJEAgvlriadIJZZksRuwBYMOPBbO3hePVVqgEJhFeUuFLhIPkRP6BQLIBrmMenujm/3g4zc398awIe90Zb5A1vREALqneMcYgP/xVQWlG+Ncu5vgwwlaUNx+3799rfe96u9K0JSDXcOzOTJg4B6IgmXfsygc7/Bvg9g9E58/cDVmGIBOP/zT8Bz1zqWqpbXIsd0O9hajXfL6u4BaOS6SeWAAAAAElFTkSuQmCC\" alt=\"doco\" style=\"background-color: inherit\"/> Documentation for this format</a></td></tr></table></div>"
* date = "2020-01-13T00:00:00+00:00"
* publisher = "Da Vinci DTR"
* contact.name = "Example Author"
* extension[rendering-styleSensitive].valueBoolean = false
* extension[sdc-questionnaire-entryMode].valueCode = #sequential
* extension[cqf-library].valueCanonical = "http://example.org/fhir/Library/quick"
* item[+].linkId = "1"
* item[=].text = "Patient Information"
* item[=].type = #group

* item[=].item[0].linkId = "1.1"
// * item[=].item[=].extension[minLength].valueInteger = 2
// * item[=].item[=].extension[questionnaire-supportLink].valueUri = "https://example.com/supportLink"
* item[=].item[=].text = "Last Name"
* item[=].item[=].type = #string
* item[=].item[=].required = true

* item[=].item[+].linkId = "1.2"
* item[=].item[=].text = "Fist Name"
* item[=].item[=].type = #string
* item[=].item[=].required = true

* item[=].item[+].linkId = "1.3"
* item[=].item[=].text = "Middle Name"
* item[=].item[=].type = #string
* item[=].item[=].required = false

* item[=].item[+].linkId = "1.gender"
* item[=].item[=].definition = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-question-library#Demographics.sex"
* item[=].item[=].text = "What is this person's gender?"
* item[=].item[=].type = #choice
* item[=].item[=].required = true
* item[=].item[=].answerValueSet = "http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype"
* item[=].item[+].linkId = "1.4"
* item[=].item[=].extension.url = "http://hl7.org/fhir/StructureDefinition/regex"
* item[=].item[=].extension.valueString = "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]"
* item[=].item[=].text = "Postal Code (A1A 1A1)"
* item[=].item[=].type = #string

* item[=].item[+].linkId = "1.5"
* item[=].item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/minValue"
* item[=].item[=].extension[=].valueDecimal = 1
* item[=].item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/maxValue"
* item[=].item[=].extension[=].valueDecimal = 400
* item[=].item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/maxDecimalPlaces"
* item[=].item[=].extension[=].valueInteger = 2
* item[=].item[=].text = "Enter your weight in lb"
* item[=].item[=].type = #decimal

* item[=].item[+].linkId = "1.6"
* item[=].item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/mimeType"
* item[=].item[=].extension[=].valueCode = #image/jpeg
* item[=].item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/maxSize"
* item[=].item[=].extension[=].valueDecimal = 1048576
* item[=].item[=].text = "Attach latest x-ray"
* item[=].item[=].type = #attachment

* item[+].linkId = "2"
* item[=].text = "Calculation"
* item[=].type = #group
* item[=].item[+].linkId = "2.1"
* item[=].item[=].text = "Deadline for submission (7 days from now)"
* item[=].item[=].type = #date
* item[=].item[=].readOnly = true
* item[=].item[=].extension[sdc-questionnaire-initialExpression].valueExpression.description = "deadline for submission"
* item[=].item[=].extension[sdc-questionnaire-initialExpression].valueExpression.language = #text/fhirpath
* item[=].item[=].extension[sdc-questionnaire-initialExpression].valueExpression.expression = "today() + 7 days"
* item[=].item[=].extension[sdc-questionnaire-initialExpression].valueExpression.extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/alternativeExpression"
* item[=].item[=].extension[sdc-questionnaire-initialExpression].valueExpression.extension[0].valueExpression.language = #application/elm+json
* item[=].item[=].extension[sdc-questionnaire-initialExpression].valueExpression.extension[0].valueExpression.expression = "corresponding elm data"

---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-ReferredQuestionnaire.fsh

Instance: referred-questionnaire
InstanceOf: Questionnaire
Usage: #example
Description: "Inline Questionnaire for QuestionnaireResponse"
* version = "0.1.0"
* title = "Referred Questionnaire for QuestionnaireResponse"
* status = #active
* subjectType = #Patient
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Example adaptive questionnaire contained in a QuestionnaireResposne</div>"
* date = "2023-08-21T00:00:00+00:00"
* publisher = "Da Vinci DTR"
* contact.name = "Example Author"
* derivedFrom = Canonical(dtr-base-questionnaire)
* item[0].linkId = "1"
* item[=].text = "Patient Information"
* item[=].type = #group
* item[=].item[0].linkId = "1.1"
* item[=].item[=].text = "Last Name but Different This Time"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "1.2"
* item[=].item[=].text = "First Name"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "1.3"
* item[=].item[=].text = "Middle Initial"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "1.4"
* item[=].item[=].text = "Date Of Birth"
* item[=].item[=].type = #date
* item[=].item[+].linkId = "1.5"
* item[=].item[=].text = "Gender"
* item[=].item[=].type = #choice
* item[=].item[=].answerValueSet = "http://hl7.org/fhir/ValueSet/administrative-gender"
* item[=].item[+].linkId = "1.6"
* item[=].item[=].text = "Medicare ID"
* item[=].item[=].type = #text

* item[+].linkId = "2"
* item[=].text = "Provider who is performing face-to-face evaluation"
* item[=].type = #group
* item[=].item[0].linkId = "2.1"
* item[=].item[=].text = "Last Name"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "2.2"
* item[=].item[=].text = "First Name"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "2.3"
* item[=].item[=].text = "Middle Initial"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "2.4"
* item[=].item[=].text = "NPI"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "2.5"
* item[=].item[=].text = "Date of Face-To-Face Evaluation"
* item[=].item[=].type = #date

* item[=].item[+].linkId = "2.6"
* item[=].item[=].extension[0].url = "http://hl7.org/fhir/StructureDefinition/questionnaire-referenceResource"
* item[=].item[=].extension[=].valueCode = #Patient
* item[=].item[=].text = "Record"
* item[=].item[=].type = #reference
* item[=].item[=].required = true

* item[+].linkId = "3"
* item[=].text = "Coverage Requirements"
* item[=].type = #group
* item[=].item[0].linkId = "3.1"
* item[=].item[=].text = "Relevant Patient Diagnoses (conditions that might be expected to improve with oxygen therapy)"
* item[=].item[=].type = #choice
* item[=].item[=].answerOption[0].valueCoding = http://snomed.info/sct#313296004 "Mild chronic obstructive pulmonary disease"
* item[=].item[=].answerOption[+].valueCoding = http://snomed.info/sct#389087006 "Hypoxemia (disorder)"
* item[=].item[+].linkId = "3.2"
* item[=].item[=].text = "Arterial oxygen saturation (Patient on room air while at rest and awake when tested)"
* item[=].item[=].type = #quantity
* item[=].item[+].linkId = "3.3"
* item[=].item[=].type = #quantity
* item[=].item[=].text = "Arterial Partial Pressure of Oxygen (PO2) (Patient on room air while at rest and awake when tested)"
* item[=].item[+].linkId = "3.4"
* item[=].item[=].type = #quantity
* item[=].item[=].text = "Arterial oxygen saturation (Patient tested during exercise)"
* item[=].item[+].linkId = "3.5"
* item[=].item[=].type = #quantity
* item[=].item[=].text = "Arterial Partial Pressure of Oxygen (PO2) (Patient tested during exercise)"
* item[=].item[+].linkId = "3.6"
* item[=].item[=].text = "Is there a documented improvement of hypoxemia during exercise with oxygen?"
* item[=].item[=].type = #boolean

* item[+].linkId = "4"
* item[=].text = "Prescribed Use"
* item[=].type = #group
* item[=].item[0].linkId = "4.1"
* item[=].item[=].text = "Start date"
* item[=].item[=].type = #date
* item[=].item[+].linkId = "4.2"
* item[=].item[=].text = "Length of need: (months) (99 = lifetime)"
* item[=].item[=].type = #quantity
* item[=].item[+].linkId = "4.3"
* item[=].item[=].text = "Peak Flow Rate"
* item[=].item[=].type = #group
* item[=].item[=].item[0].linkId = "4.3.1"
* item[=].item[=].item[=].text = "LPM"
* item[=].item[=].item[=].type = #quantity
* item[=].item[=].item[+].linkId = "4.3.2"
* item[=].item[=].item[=].text = "oxygen %"
* item[=].item[=].item[=].type = #quantity
* item[=].item[+].linkId = "4.4"
* item[=].item[=].text = "Average Flow Rate"
* item[=].item[=].type = #group
* item[=].item[=].item[0].linkId = "4.4.1"
* item[=].item[=].item[=].text = "LPM"
* item[=].item[=].item[=].type = #quantity
* item[=].item[=].item[+].linkId = "4.4.2"
* item[=].item[=].item[=].text = "oxygen %"
* item[=].item[=].item[=].type = #quantity
* item[=].item[+].linkId = "4.5"
* item[=].item[=].text = "Frequency of use (choose all that apply)"
* item[=].item[=].type = #text

* item[+].linkId = "5"
* item[=].text = "Oxygen Supply Order Details"
* item[=].type = #group
* item[=].item[0].linkId = "5.1"
* item[=].item[=].text = "Current Order Description"
* item[=].item[=].type = #text
* item[=].item[+].linkId = "5.1b"
* item[=].item[=].text = "Current Order Is For A Portable Device"
* item[=].item[=].type = #boolean
* item[=].item[+].linkId = "5.2"
* item[=].item[=].text = "Type"
* item[=].item[=].type = #choice
* item[=].item[=].answerOption[0].valueCoding = http://example.org#121 "Liquid"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#122 "Compressed Gas"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#123 "Concentrator"
* item[=].item[+].linkId = "5.3"
* item[=].item[=].text = "Means of oxygen delivery and accessories"
* item[=].item[=].type = #choice
* item[=].item[=].answerOption[0].valueCoding = http://example.org#131 "Nasal cannula"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#132 "Non-rebreather"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#133 "Ventilator"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#134 "Mask"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#135 "PAP bleed in"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#136 "Oxygen conserving device"
* item[=].item[=].answerOption[+].valueCoding = http://example.org#137 "High flow oxygen therapy"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/examples/Examples-VariousResources.fsh

// =======================================================================================================================================================================================
// Various Examples
// =======================================================================================================================================================================================
Instance: CoverageExample
InstanceOf: http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-coverage
Description: "An instance of CRD Coverage"
Usage: #example
* contained = OrgExample
* subscriber = Reference(PatientExample)
* beneficiary = Reference(PatientExample)
* relationship = RELATE#self "Self"
* status = #active
* class.name = "Premim Family Plus Plan"
* class.type = COVCLASS#plan "Plan"
* class.value = "Premim Family Plus"
* period.start = "2022-01-01"
* period.end = "2023-01-01"
* payor = Reference(OrgExample) 
* subscriberId = "PFP123450000"

// *******************************************************************************************************************************
Instance: ServiceRequestExample
InstanceOf: http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest
Description: "Example of ServiceRequest used in the Home Oxygen Therapy (home-o2-questionnaireresponse) example"
* status = #active
* intent = #original-order
* authoredOn = "2019-09-18T07:53:21+07:00"
* requester = Reference(PractitionerExample)
* code = http://loinc.org#24338-6
* code.text = "Gas panel - Blood"
* subject = Reference(PatientExample)
* occurrenceDateTime = "2019-05-08T09:33:27+07:00"
* reasonCode.coding.code = #4565000
* reasonCode.coding.system = "http://snomed.info/sct"
* reasonCode.text = "Decreased oxygen affinity"

// *******************************************************************************************************************************
Instance: AdaptiveSearchExample
InstanceOf: DTRQuestionnaireAdaptSearch
Description: "An example [Adaptive Form](StructureDefinition-dtr-questionnaire-adapt-search.html) search instance."
Usage: #example
* url = "http://example.org/fhir/Questionnaire/dtr-questionnaire-adapt-search"
* status = #active
* extension[questionnaireAdaptive].valueUrl = "http://example.com/fhir/R4"

// *******************************************************************************************************************************
Instance: PatientExample
InstanceOf: Patient
Description: "An example patient used in the example resources."
Usage: #example
* id = "examplepatient"
* gender = #male
* birthDate = "1996-12-23"
* address.use = #home
* address.type = #both
* address.state = "MA"

// *******************************************************************************************************************************
Instance: PractitionerExample
InstanceOf: USCorePractitionerProfile
Description: "An example practitioner referred to by the example resources."
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1122334455"
* name.family = "Doe"
* name.given = "Jane"
* name.prefix = "Dr."
* extension[0].url = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/activeRole"
* extension[=].valueCodeableConcept = 	http://nucc.org/provider-taxonomy#363A00000X "Physician Assistant"

// *******************************************************************************************************************************
Instance: library-quick-model-definition
InstanceOf: Library
Description: "A sample library from the FHIR core spec to include in other examples in this IG to demonstrate the use of Library resources"
Usage: #example
* identifier.use = #official
* identifier.value = "QUICK"
* url = "http://example.org/fhir/Library/quick"
* version = "1.0.0"
* title = "QUICK Model Definition"
* status = #active
* type = http://terminology.hl7.org/CodeSystem/library-type#model-definition
* date = "2016-07-08"
* description = "Model definition for the QUICK Logical Model"
* topic.text = "QUICK"
* content.contentType = #application/xml
* content.url = "http://cqlrepository.org/quick-modelinfo.xml"

// =======================================================================================================================================================================================
// Inline Instances
// =======================================================================================================================================================================================
Instance: OrgExample
InstanceOf: http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-organization
Description: "An instance of Organization as a payer used in the example resources."
Usage: #inline
* identifier[0].value = "10D0202020"
* identifier[0].system = "urn:oid:2.16.840.1.113883.4.7"
* type = http://terminology.hl7.org/CodeSystem/organization-type#pay "Payer"
* name = "Insurance Company"
* active = true
* telecom.system = #phone
* telecom.value = "860-547-5001"
* telecom.use = #work
* address.line = "680 Asylum Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "06155"
* address.country = "US"

// *******************************************************************************************************************************
Instance: OperationOutcomeExample
InstanceOf: OperationOutcome
Description: "An example operation outcome instance."
Usage: #inline
* issue.severity = #error
* issue.code = #not-found



---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRCapabilityStatements-dtr-payer-service.fsh

Instance: dtr-payer-service
InstanceOf: CapabilityStatement
Title: "DTR Payer Service"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/dtr-payer-service"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h2 id=\"title\">DTR Payer Service</h2><ul><li><b>Official URL:</b><code>http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/dtr-payer-service</code></li><li><b>Implementation Guide Version:</b> 2.1.0-preview</li><li><b>FHIR Version:</b> 4.0.1</li><li><b>Intended Use:</b> Requirements</li><li><b>Supported Formats: </b>JSON</li><li><b>Published:</b> 2024-08-02</li><li><b>Published by:</b> HL7 International / Clinical Decision Support</li><li><b>Status:</b> Active</li></ul><p>This statement defines the expected capabilities of payer systems that provide questionnaires to DTR clients. Such systems need only support server capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations.</p><h3 id=\"behavior\">FHIR Server RESTful Capabilities</h3><p>A DTR Payer service provides a service endpoint for DTR apps and full EHRs to connect to</p><p id=\"security\"><strong>Security:</strong></p><p>Implementations <strong>SHALL</strong> meet the general security requirements documented in the <a href=\"https://build.fhir.org/ig/HL7/davinci-ehrx\">HRex implementation guide</a>.</p><p><strong>Summary of Server Wide Operations</strong></p><ul><li><strong>SHALL</strong> support the <a href=\"OperationDefinition-questionnaire-package.html\"><code>$questionnaire-package</code></a> operation.</li><li><strong>SHALL</strong> support the <a href=\"http://hl7.org/fhir/OperationDefinition/ValueSet-expand\"><code>$expand</code></a> operation.</li><li><strong>SHOULD</strong> support the <a href=\"http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question\"><code>$next-question</code></a> operation.</li></ul></div>"
* text.status = #generated
* version = "1.1.0-ballot"
* name = "DTRPayerService"
* title = "DTR Payer Service"
* status = #active
* experimental = false
* date = "2024-08-02"
* publisher = "HL7 Clinical Decision Support Work Group"
* contact.name = "HL7 Clinical Decision Support Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/dss"
* description = "This statement defines the expected capabilities of payer systems that provide questionnaires to DTR clients. Such systems need only support server capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #server
* rest.documentation = "A DTR Payer service provides a service endpoint for DTR apps and full EHRs to connect to"
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [HRex implementation guide](https://build.fhir.org/ig/HL7/davinci-ehrx)."

// Operations
* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "questionnaire-package"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "expand"
* rest.operation[=].definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-expand"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHOULD
* rest.operation[=].name = "next-question"
* rest.operation[=].definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question"



---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRCapabilityStatements-full-dtr-ehr.fsh

Instance: full-dtr-ehr-311
InstanceOf: CapabilityStatement
Title: "Full DTR EHR - USCDI 1"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/full-dtr-ehr-311"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h2 id=\"title\">Full DTR EHR</h2><ul><li><b>Official URL:</b><code>http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/full-dtr-ehr-311</code></li><li><b>Implementation Guide Version:</b> 2.1.0-preview</li><li><b>FHIR Version:</b> 4.0.1</li><li><b>Intended Use:</b> Requirements</li><li><b>Supported Formats: </b>JSON</li><li><b>Published:</b> 2024-08-02</li><li><b>Published by:</b> HL7 International / Clinical Decision Support</li><li><b>Status:</b> Active</li></ul><p>This statement defines the expected capabilities of EHRs that manage the form filling functions of DTR internally for USCDI 1 (US-Core 3.1.1). Such EHRs need only support client capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations.</p><!-- Imports --><h3 class=\"no_toc\" id=\"should_css\">Include And Support Everything In The Following CapabilityStatements:</h3><ul><li><a href=\"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|3.1.1\">US Core Client CapabilityStatement</a></li></ul><!-- REST Behavior --><h3 id=\"behavior\">FHIR Client RESTful Capabilities</h3><p>A DTR Native Client provides an EHR-based application</p><p id=\"security\"><strong>Security:</strong></p><p>Implementations <strong>SHALL</strong> meet the general security requirements documented in the <a href=\"https://build.fhir.org/ig/HL7/davinci-ehrx\">HRex implementation guide</a>.</p><p><strong>Summary of Client Wide Operations</strong></p><ul><li><strong>SHALL</strong> support the <a href=\"OperationDefinition-questionnaire-package.html\"><code>$questionnaire-package</code></a> operation.</li><li><strong>SHALL</strong> support the <a href=\"http://hl7.org/fhir/OperationDefinition/ValueSet-expand\"><code>$expand</code></a> operation.</li><li><strong>SHALL</strong> support the <a href=\"http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question\"><code>$next-question</code></a> operation.</li></ul></div>"
* text.status = #generated
* version = "1.1.0-ballot"
* name = "FullDTREHR"
* title = "Full DTR EHR"
* status = #active
* experimental = false
* date = "2024-08-02"
* publisher = "HL7 Clinical Decision Support Work Group"
* contact.name = "HL7 Clinical Decision Support Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/dss"
* description = "This statement defines the expected capabilities of EHRs that manage the form filling functions of DTR internally for USCDI 1 (US-Core 3.1.1). Such EHRs need only support client capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|3.1.1"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #client
* rest.documentation = "A DTR Native Client provides an EHR-based application"
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [HRex implementation guide](https://build.fhir.org/ig/HL7/davinci-ehrx)."

// Operations
* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "questionnaire-package"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "expand"
* rest.operation[=].definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-expand"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "next-question"
* rest.operation[=].definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question"

/**************************************************************************************************************************************************/
Instance: full-dtr-ehr-700
InstanceOf: CapabilityStatement
Title: "Full DTR EHR - USCDI 3 & 4"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/full-dtr-ehr-700"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h2 id=\"title\">Full DTR EHR</h2><ul><li><b>Official URL:</b><code>http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/full-dtr-ehr-700</code></li><li><b>Implementation Guide Version:</b> 2.1.0-preview</li><li><b>FHIR Version:</b> 4.0.1</li><li><b>Intended Use:</b> Requirements</li><li><b>Supported Formats: </b>JSON</li><li><b>Published:</b> 2024-08-02</li><li><b>Published by:</b> HL7 International / Clinical Decision Support</li><li><b>Status:</b> Active</li></ul><p>This statement defines the expected capabilities of EHRs that manage the form filling functions of DTR internally for USCDI 3 (US-Core 6.1) and USCDI 4 (US-Core 7.0). Such EHRs need only support client capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations.</p><!-- Imports --><h3 class=\"no_toc\" id=\"should_css\">Include And Support Everything In The Following CapabilityStatements:</h3><ul><li><a href=\"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|7.0.0\">US Core Client CapabilityStatement</a></li></ul><!-- REST Behavior --><h3 id=\"behavior\">FHIR Client RESTful Capabilities</h3><p>A DTR Native Client provides an EHR-based application</p><p id=\"security\"><strong>Security:</strong></p><p>Implementations <strong>SHALL</strong> meet the general security requirements documented in the <a href=\"https://build.fhir.org/ig/HL7/davinci-ehrx\">HRex implementation guide</a>.</p><p><strong>Summary of Client Wide Operations</strong></p><ul><li><strong>SHALL</strong> support the <a href=\"OperationDefinition-questionnaire-package.html\"><code>$questionnaire-package</code></a> operation.</li><li><strong>SHALL</strong> support the <a href=\"http://hl7.org/fhir/OperationDefinition/ValueSet-expand\"><code>$expand</code></a> operation.</li><li><strong>SHALL</strong> support the <a href=\"http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question\"><code>$next-question</code></a> operation.</li></ul></div>"
* text.status = #generated
* version = "1.1.0-ballot"
* name = "FullDTREHR"
* title = "Full DTR EHR"
* status = #active
* experimental = false
* date = "2024-08-02"
* publisher = "HL7 Clinical Decision Support Work Group"
* contact.name = "HL7 Clinical Decision Support Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/dss"
* description = "This statement defines the expected capabilities of EHRs that manage the form filling functions of DTR internally for USCDI 3 (US-Core 6.1) and USCDI 4 (US-Core 7.0). Such EHRs need only support client capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|7.0.0"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #client
* rest.documentation = "A DTR Native Client provides an EHR-based application"
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [HRex implementation guide](https://build.fhir.org/ig/HL7/davinci-ehrx)."

// Operations
* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "questionnaire-package"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "expand"
* rest.operation[=].definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-expand"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "next-question"
* rest.operation[=].definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRCapabilityStatements-light-dtr-ehr.fsh

/**************************************************************************************************************************************************/
Instance: light-dtr-ehr-311
InstanceOf: CapabilityStatement
Title: "Light DTR EHR - USCDI 1"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/light-dtr-ehr-311"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h2 id=\"title\">Light DTR EHR</h2><ul><li><b>Official URL:</b><code>http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/light-dtr-ehr-311</code></li><li><b>Implementation Guide Version:</b> 2.1.0-preview</li><li><b>FHIR Version:</b> 4.0.1</li><li><b>Intended Use:</b> Requirements</li><li><b>Supported Formats: </b>JSON</li><li><b>Published:</b> 2024-08-02</li><li><b>Published by:</b> HL7 International / Clinical Decision Support</li><li><b>Status:</b> Active</li></ul><p>This statement defines the expected capabilities of EHRs that rely on a SMART on FHIR application for USCDI 1 (US-Core 3.1.1) to handle the form filling function of DTR. This requires the server to provide access to the specified resources to allow such an app to retrieve and edit QuestionnaireResponses and related resources.</p><!-- Imports --><h3 class=\"no_toc\" id=\"should_css\">Include And Support Everything In The Following CapabilityStatements:</h3><ul><li><a href=\"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|3.1.1\">US Core Server CapabilityStatement</a></li></ul><!-- REST Behavior --><h3 id=\"behavior\">FHIR Server RESTful Capabilities</h3><p>EHR systems which leverage a SMART app to manage data capture and rules execution, but which must be able to launch the SMART app.</p><p id=\"security\"><strong>Security:</strong></p><p>Implementations <strong>SHALL</strong> meet the general security requirements documented in the <a href=\"https://build.fhir.org/ig/HL7/davinci-ehrx\">HRex implementation guide</a>.</p><h3 class=\"no_toc\" id=\"resource--details\">RESTful Capabilities by Resource/Profile:</h3><p><strong>Summary</strong></p><p><i>&#x2666; = <b>SHALL</b> expectation</i>;<i>&#x22C4; = <b>SHOULD</b> expectation</i>;<i>&#x25BF; = <b>MAY</b> expectation</i>;</p><table class=\"grid\"><thead><tr><th>Resource Type</th><th>Supported Interactions</th><th>Supported Profiles</th><th>Supported Searches</th><th>Supported <code>_includes</code></th><th>Supported <code>_revincludes</code></th><th>Supported Operations</th></tr></thead><tbody><tr><td><a href=\"#questionnaireresponse\"><span style=\"white-space: nowrap;\">QuestionnaireResponse</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">create<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">update<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">search-type<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"StructureDefinition-dtr-questionnaireresponse.html\">DTR Questionnaire Response</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td><span style=\"white-space: nowrap;\">context<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">patient<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#encounter\"><span style=\"white-space: nowrap;\">Encounter</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-profile-encounter.html\">CRD Encounter</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#devicerequest\"><span style=\"white-space: nowrap;\">DeviceRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-devicerequest\">CRD Device Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#medicationrequest\"><span style=\"white-space: nowrap;\">MedicationRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-medicationrequest\">CRD Medication Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#nutritionorder\"><span style=\"white-space: nowrap;\">NutritionOrder</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-nutritionorder\">CRD Nutrition Order</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#communicationrequest\"><span style=\"white-space: nowrap;\">CommunicationRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-communicationrequest\">CRD Communication Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#servicerequest\"><span style=\"white-space: nowrap;\">ServiceRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest\">CRD Service Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#visionprescription\"><span style=\"white-space: nowrap;\">VisionPrescription</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-visionprescription\">CRD Vision Prescription</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#task\"><span style=\"white-space: nowrap;\">Task</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span>, <span style=\"white-space: nowrap;\">create<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span>, <span style=\"white-space: nowrap;\">update<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-pas/StructureDefinition/profile-task\">PAS Task Profile</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr></tbody></table><!-- Resource Details --><h4 class=\"no_toc\" id=\"questionnaireresponse\">QuestionnaireResponse</h4><p>Supported Profiles:</p><ul><li><a href=\"StructureDefinition-dtr-questionnaireresponse.html\">DTR Questionnaire Response</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>, <code>create</code>, <code>update</code>, <code>search-type</code>.</li></ul><p>Modify Criteria:</p><ul><li>A Server <strong>SHALL</strong> be capable of creating a QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">POST [base]/QuestionnaireResponse/[id]{?_format=[mime-type]}</code></li><li>A Server <strong>SHALL</strong> be capable of updating an existing QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">PUT [base]/QuestionnaireResponse/[id]{?_format=[mime-type]}</code></li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHALL</strong> be capable of returning a QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse/[id]</code></li><li>A Server <strong>SHALL</strong> be capable of returning resources matching a search query using:<code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse/[id]{?[parameters]{&amp;_format=[mime-type]}}</code></li></ul><!-- Only included search parameters that are not MAY or there is no conformance requirement included --><p>Search Parameter Summary:</p><table class=\"grid\"><thead><tr><th style=\"white-space: nowrap;\">Conformance</th><th>Parameter</th><th>Type</th><th>Example</th></tr></thead><tbody><tr><td><strong>SHALL</strong></td><td><a href=\"SearchParameter-qr-context.html\">context</a></td><td>reference</td><td><code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse?context=[type]/[id]</code></td></tr><tr><td><strong>SHALL</strong></td><td><a href=\"http://hl7.org/fhir/R4/questionnaireresponse.html#search\">patient</a></td><td>reference</td><td><code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse?patient=[type]/[id]</code></td></tr></tbody></table><div><p>Search Parameter Requirements (When Used Alone or in Combination):</p><ul><li><a href=\"SearchParameter-qr-context.html\">context</a> (reference):<p>Allows retrieving QuestionnaireResponse for a context</p></li><li><a href=\"http://hl7.org/fhir/R4/questionnaireresponse.html#search\">patient</a> (reference):<p>Allows retrieving QuestionnaireResponse for a patient</p></li></ul></div><h4 class=\"no_toc\" id=\"encounter\">Encounter</h4><p>Supported Profiles:</p><ul><li><a href=\"https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-profile-encounter.html\">CRD Encounter</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning an Encounter resource using:<code class=\"highlighter-rouge\">GET [base]/Encounter/[id]</code></li></ul><h4 class=\"no_toc\" id=\"devicerequest\">DeviceRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-devicerequest\">CRD Device Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a DeviceRequest resource using:<code class=\"highlighter-rouge\">GET [base]/DeviceRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"medicationrequest\">MedicationRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-medicationrequest\">CRD Medication Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a MedicationRequest resource using:<code class=\"highlighter-rouge\">GET [base]/MedicationRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"nutritionorder\">NutritionOrder</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-nutritionorder\">CRD Nutrition Order</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a NutritionOrder resource using:<code class=\"highlighter-rouge\">GET [base]/NutritionOrder/[id]</code></li></ul><h4 class=\"no_toc\" id=\"communicationrequest\">CommunicationRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-communicationrequest\">CRD Communication Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a CommunicationRequest resource using:<code class=\"highlighter-rouge\">GET [base]/CommunicationRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"servicerequest\">ServiceRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest\">CRD Service Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a ServiceRequest resource using:<code class=\"highlighter-rouge\">GET [base]/ServiceRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"visionprescription\">VisionPrescription</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-visionprescription\">CRD Vision Prescription</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a VisionPrescription resource using:<code class=\"highlighter-rouge\">GET [base]/VisionPrescription/[id]</code></li></ul><h4 class=\"no_toc\" id=\"task\">Task</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-pas/StructureDefinition/profile-task\">PAS Task Profile</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>, <code>create</code>, <code>update</code>.</li></ul><p>Modify Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of creating a Task resource using:<code class=\"highlighter-rouge\">POST [base]/Task/[id]{?_format=[mime-type]}</code></li><li>A Server <strong>SHOULD</strong> be capable of updating an existing Task resource using:<code class=\"highlighter-rouge\">PUT [base]/Task/[id]{?_format=[mime-type]}</code></li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a Task resource using:<code class=\"highlighter-rouge\">GET [base]/Task/[id]</code></li></ul></div>"
* text.status = #generated
* version = "1.1.0-ballot"
* name = "LightDTREHR"
* title = "Light DTR EHR"
* status = #active
* experimental = false
* date = "2024-08-02"
* publisher = "HL7 Clinical Decision Support Work Group"
* contact.name = "HL7 Clinical Decision Support Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/dss"
* description = "This statement defines the expected capabilities of EHRs that rely on a SMART on FHIR application for USCDI 1 (US-Core 3.1.1) to handle the form filling function of DTR. This requires the server to provide access to the specified resources to allow such an app to retrieve and edit QuestionnaireResponses and related resources."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|3.1.1"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #server
* rest.documentation = "EHR systems which leverage a SMART app to manage data capture and rules execution, but which must be able to launch the SMART app."
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [HRex implementation guide](https://build.fhir.org/ig/HL7/davinci-ehrx)."
* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/qr-context"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a context"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a patient"

* rest.resource[+].type = #Encounter
* rest.resource[=].supportedProfile = $CRDEncounter
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #DeviceRequest
* rest.resource[=].supportedProfile = $CRDDeviceRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #MedicationRequest
* rest.resource[=].supportedProfile = $CRDMedicationRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #NutritionOrder
* rest.resource[=].supportedProfile = $CRDNutritionOrder
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #CommunicationRequest
* rest.resource[=].supportedProfile = $CRDCommunicationRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = $CRDServiceRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #VisionPrescription
* rest.resource[=].supportedProfile = $CRDVisionPrescription
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #Task
* rest.resource[=].supportedProfile = $PASTask
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #update


/**************************************************************************************************************************************************/
Instance: light-dtr-ehr-700
InstanceOf: CapabilityStatement
Title: "Light DTR EHR - USCDI 3 & 4"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/light-dtr-ehr-700"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h2 id=\"title\">Light DTR EHR</h2><ul><li><b>Official URL:</b><code>http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/light-dtr-ehr-700</code></li><li><b>Implementation Guide Version:</b> 2.1.0-preview</li><li><b>FHIR Version:</b> 4.0.1</li><li><b>Intended Use:</b> Requirements</li><li><b>Supported Formats: </b>JSON</li><li><b>Published:</b> 2024-08-02</li><li><b>Published by:</b> HL7 International / Clinical Decision Support</li><li><b>Status:</b> Active</li></ul><p>This statement defines the expected capabilities of EHRs that rely on a SMART on FHIR application for USCDI 3 (US-Core 6.1) and USCDI 4 (US-Core 7.0) to handle the form filling function of DTR. This requires the server to provide access to the specified resources to allow such an app to retrieve and edit QuestionnaireResponses and related resources.</p><!-- Imports --><h3 class=\"no_toc\" id=\"should_css\">Include And Support Everything In The Following CapabilityStatements:</h3><ul><li><a href=\"http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|7.0.0\">US Core Server CapabilityStatement</a></li></ul><!-- REST Behavior --><h3 id=\"behavior\">FHIR Server RESTful Capabilities</h3><p>EHR systems which leverage a SMART app to manage data capture and rules execution, but which must be able to launch the SMART app.</p><p id=\"security\"><strong>Security:</strong></p><p>Implementations <strong>SHALL</strong> meet the general security requirements documented in the <a href=\"https://build.fhir.org/ig/HL7/davinci-ehrx\">HRex implementation guide</a>.</p><h3 class=\"no_toc\" id=\"resource--details\">RESTful Capabilities by Resource/Profile:</h3><p><strong>Summary</strong></p><p><i>&#x2666; = <b>SHALL</b> expectation</i>;<i>&#x22C4; = <b>SHOULD</b> expectation</i>;<i>&#x25BF; = <b>MAY</b> expectation</i>;</p><table class=\"grid\"><thead><tr><th>Resource Type</th><th>Supported Interactions</th><th>Supported Profiles</th><th>Supported Searches</th><th>Supported <code>_includes</code></th><th>Supported <code>_revincludes</code></th><th>Supported Operations</th></tr></thead><tbody><tr><td><a href=\"#questionnaireresponse\"><span style=\"white-space: nowrap;\">QuestionnaireResponse</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">create<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">update<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">search-type<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"StructureDefinition-dtr-questionnaireresponse.html\">DTR Questionnaire Response</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td><span style=\"white-space: nowrap;\">context<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">patient<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#encounter\"><span style=\"white-space: nowrap;\">Encounter</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-profile-encounter.html\">CRD Encounter</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#devicerequest\"><span style=\"white-space: nowrap;\">DeviceRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-devicerequest\">CRD Device Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#medicationrequest\"><span style=\"white-space: nowrap;\">MedicationRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-medicationrequest\">CRD Medication Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#nutritionorder\"><span style=\"white-space: nowrap;\">NutritionOrder</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-nutritionorder\">CRD Nutrition Order</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#communicationrequest\"><span style=\"white-space: nowrap;\">CommunicationRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-communicationrequest\">CRD Communication Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#servicerequest\"><span style=\"white-space: nowrap;\">ServiceRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest\">CRD Service Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#visionprescription\"><span style=\"white-space: nowrap;\">VisionPrescription</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-visionprescription\">CRD Vision Prescription</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#task\"><span style=\"white-space: nowrap;\">Task</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span>, <span style=\"white-space: nowrap;\">create<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span>, <span style=\"white-space: nowrap;\">update<span title=\"SHOULD\"><sup>&#x22C4;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-pas/StructureDefinition/profile-task\">PAS Task Profile</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr></tbody></table><!-- Resource Details --><h4 class=\"no_toc\" id=\"questionnaireresponse\">QuestionnaireResponse</h4><p>Supported Profiles:</p><ul><li><a href=\"StructureDefinition-dtr-questionnaireresponse.html\">DTR Questionnaire Response</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>, <code>create</code>, <code>update</code>, <code>search-type</code>.</li></ul><p>Modify Criteria:</p><ul><li>A Server <strong>SHALL</strong> be capable of creating a QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">POST [base]/QuestionnaireResponse/[id]{?_format=[mime-type]}</code></li><li>A Server <strong>SHALL</strong> be capable of updating an existing QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">PUT [base]/QuestionnaireResponse/[id]{?_format=[mime-type]}</code></li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHALL</strong> be capable of returning a QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse/[id]</code></li><li>A Server <strong>SHALL</strong> be capable of returning resources matching a search query using:<code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse/[id]{?[parameters]{&amp;_format=[mime-type]}}</code></li></ul><!-- Only included search parameters that are not MAY or there is no conformance requirement included --><p>Search Parameter Summary:</p><table class=\"grid\"><thead><tr><th style=\"white-space: nowrap;\">Conformance</th><th>Parameter</th><th>Type</th><th>Example</th></tr></thead><tbody><tr><td><strong>SHALL</strong></td><td><a href=\"SearchParameter-qr-context.html\">context</a></td><td>reference</td><td><code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse?context=[type]/[id]</code></td></tr><tr><td><strong>SHALL</strong></td><td><a href=\"http://hl7.org/fhir/R4/questionnaireresponse.html#search\">patient</a></td><td>reference</td><td><code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse?patient=[type]/[id]</code></td></tr></tbody></table><div><p>Search Parameter Requirements (When Used Alone or in Combination):</p><ul><li><a href=\"SearchParameter-qr-context.html\">context</a> (reference):<p>Allows retrieving QuestionnaireResponse for a context</p></li><li><a href=\"http://hl7.org/fhir/R4/questionnaireresponse.html#search\">patient</a> (reference):<p>Allows retrieving QuestionnaireResponse for a patient</p></li></ul></div><h4 class=\"no_toc\" id=\"encounter\">Encounter</h4><p>Supported Profiles:</p><ul><li><a href=\"https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-profile-encounter.html\">CRD Encounter</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning an Encounter resource using:<code class=\"highlighter-rouge\">GET [base]/Encounter/[id]</code></li></ul><h4 class=\"no_toc\" id=\"devicerequest\">DeviceRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-devicerequest\">CRD Device Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a DeviceRequest resource using:<code class=\"highlighter-rouge\">GET [base]/DeviceRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"medicationrequest\">MedicationRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-medicationrequest\">CRD Medication Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a MedicationRequest resource using:<code class=\"highlighter-rouge\">GET [base]/MedicationRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"nutritionorder\">NutritionOrder</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-nutritionorder\">CRD Nutrition Order</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a NutritionOrder resource using:<code class=\"highlighter-rouge\">GET [base]/NutritionOrder/[id]</code></li></ul><h4 class=\"no_toc\" id=\"communicationrequest\">CommunicationRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-communicationrequest\">CRD Communication Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a CommunicationRequest resource using:<code class=\"highlighter-rouge\">GET [base]/CommunicationRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"servicerequest\">ServiceRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest\">CRD Service Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a ServiceRequest resource using:<code class=\"highlighter-rouge\">GET [base]/ServiceRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"visionprescription\">VisionPrescription</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-visionprescription\">CRD Vision Prescription</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a VisionPrescription resource using:<code class=\"highlighter-rouge\">GET [base]/VisionPrescription/[id]</code></li></ul><h4 class=\"no_toc\" id=\"task\">Task</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-pas/StructureDefinition/profile-task\">PAS Task Profile</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHOULD</strong> support <code>read</code>, <code>create</code>, <code>update</code>.</li></ul><p>Modify Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of creating a Task resource using:<code class=\"highlighter-rouge\">POST [base]/Task/[id]{?_format=[mime-type]}</code></li><li>A Server <strong>SHOULD</strong> be capable of updating an existing Task resource using:<code class=\"highlighter-rouge\">PUT [base]/Task/[id]{?_format=[mime-type]}</code></li></ul><p>Fetch and Search Criteria:</p><ul><li>A Server <strong>SHOULD</strong> be capable of returning a Task resource using:<code class=\"highlighter-rouge\">GET [base]/Task/[id]</code></li></ul></div>"
* text.status = #generated
* version = "1.1.0-ballot"
* name = "LightDTREHR"
* title = "Light DTR EHR"
* status = #active
* experimental = false
* date = "2024-08-02"
* publisher = "HL7 Clinical Decision Support Work Group"
* contact.name = "HL7 Clinical Decision Support Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/dss"
* description = "This statement defines the expected capabilities of EHRs that rely on a SMART on FHIR application for USCDI 3 (US-Core 6.1) and USCDI 4 (US-Core 7.0) to handle the form filling function of DTR. This requires the server to provide access to the specified resources to allow such an app to retrieve and edit QuestionnaireResponses and related resources."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server|7.0.0"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #server
* rest.documentation = "EHR systems which leverage a SMART app to manage data capture and rules execution, but which must be able to launch the SMART app."
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [HRex implementation guide](https://build.fhir.org/ig/HL7/davinci-ehrx)."
* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/qr-context"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a context"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a patient"

* rest.resource[+].type = #Encounter
* rest.resource[=].supportedProfile = $CRDEncounter
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #DeviceRequest
* rest.resource[=].supportedProfile = $CRDDeviceRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #MedicationRequest
* rest.resource[=].supportedProfile = $CRDMedicationRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #NutritionOrder
* rest.resource[=].supportedProfile = $CRDNutritionOrder
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #CommunicationRequest
* rest.resource[=].supportedProfile = $CRDCommunicationRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = $CRDServiceRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #VisionPrescription
* rest.resource[=].supportedProfile = $CRDVisionPrescription
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #Task
* rest.resource[=].supportedProfile = $PASTask
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #update

---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRCapabilityStatements-smart-dtr-client.fsh

Instance: smart-dtr-client
InstanceOf: CapabilityStatement
Title: "SMART DTR Client"
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/smart-dtr-client"
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h2 id=\"title\">SMART on FHIR DTR Client</h2><ul><li><b>Official URL:</b><code>http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/smart-dtr-client</code></li><li><b>Implementation Guide Version:</b> 2.1.0-preview</li><li><b>FHIR Version:</b> 4.0.1</li><li><b>Intended Use:</b> Requirements</li><li><b>Supported Formats: </b>JSON</li><li><b>Published:</b> 2024-08-02</li><li><b>Published by:</b> HL7 International / Clinical Decision Support</li><li><b>Status:</b> Active</li></ul><p>This statement defines the expected capabilities of DTR SMART on FHIR applications . Such apps require client support for retrieving and editing QuestionnaireResponse resources and related resources, as well as client support for the Questionnaire Package, ValueSet Expand, and Next Question operations.</p><!-- REST Behavior --><h3 id=\"behavior\">FHIR Client RESTful Capabilities</h3><p>A SMART on FHIR DTR Client provides an application conforming to the SMART on FHIR specification and related requirements declared in this Implementation Guide.</p><p id=\"security\"><strong>Security:</strong></p><p>Implementations <strong>SHALL</strong> meet the general security requirements documented in the <a href=\"https://build.fhir.org/ig/HL7/davinci-ehrx\">HRex implementation guide</a>.</p><p><strong>Summary of Client Wide Operations</strong></p><ul><li><strong>SHALL</strong> support the <a href=\"OperationDefinition-questionnaire-package.html\"><code>$questionnaire-package</code></a> operation.</li><li><strong>SHALL</strong> support the <a href=\"http://hl7.org/fhir/OperationDefinition/ValueSet-expand\"><code>$expand</code></a> operation.</li><li><strong>SHALL</strong> support the <a href=\"http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question\"><code>$next-question</code></a> operation.</li></ul><h3 class=\"no_toc\" id=\"resource--details\">RESTful Capabilities by Resource/Profile:</h3><p><strong>Summary</strong></p><p><i>&#x2666; = <b>SHALL</b> expectation</i>;<i>&#x22C4; = <b>SHOULD</b> expectation</i>;<i>&#x25BF; = <b>MAY</b> expectation</i>;</p><table class=\"grid\"><thead><tr><th>Resource Type</th><th>Supported Interactions</th><th>Supported Profiles</th><th>Supported Searches</th><th>Supported <code>_includes</code></th><th>Supported <code>_revincludes</code></th><th>Supported Operations</th></tr></thead><tbody><tr><td><a href=\"#questionnaireresponse\"><span style=\"white-space: nowrap;\">QuestionnaireResponse</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">create<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">update<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">search-type<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"StructureDefinition-dtr-questionnaireresponse.html\">DTR Questionnaire Response</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td><span style=\"white-space: nowrap;\">context<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">patient<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#encounter\"><span style=\"white-space: nowrap;\">Encounter</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-profile-encounter.html\">CRD Encounter</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#devicerequest\"><span style=\"white-space: nowrap;\">DeviceRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-devicerequest\">CRD Device Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#medicationrequest\"><span style=\"white-space: nowrap;\">MedicationRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-medicationrequest\">CRD Medication Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#nutritionorder\"><span style=\"white-space: nowrap;\">NutritionOrder</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-nutritionorder\">CRD Nutrition Order</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#communicationrequest\"><span style=\"white-space: nowrap;\">CommunicationRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-communicationrequest\">CRD Communication Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#servicerequest\"><span style=\"white-space: nowrap;\">ServiceRequest</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest\">CRD Service Request</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#visionprescription\"><span style=\"white-space: nowrap;\">VisionPrescription</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-visionprescription\">CRD Vision Prescription</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr><tr><td><a href=\"#task\"><span style=\"white-space: nowrap;\">Task</span></a></td><td><span style=\"white-space: nowrap;\">read<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">create<span title=\"SHALL\"><sup>&#x2666;</sup></span></span>, <span style=\"white-space: nowrap;\">update<span title=\"SHALL\"><sup>&#x2666;</sup></span></span></td><!-- Supported Profiles --><td><a href=\"http://hl7.org/fhir/us/davinci-pas/StructureDefinition/profile-task\">PAS Task Profile</a></td><!-- Supported Searches will need to do some sort of mapping instead of join to get the expectations printed out --><td></td><!-- Supported _includes --><td></td><!-- Supported _revincludes --><td><!----></td><!-- Supported Operations --><td></td></tr></tbody></table><!-- Resource Details --><h4 class=\"no_toc\" id=\"questionnaireresponse\">QuestionnaireResponse</h4><p>Supported Profiles:</p><ul><li><a href=\"StructureDefinition-dtr-questionnaireresponse.html\">DTR Questionnaire Response</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>, <code>create</code>, <code>update</code>, <code>search-type</code>.</li></ul><p>Modify Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of posting a QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">POST [base]/QuestionnaireResponse/[id]{?_format=[mime-type]}</code></li><li>A Client <strong>SHALL</strong> be capable of putting an existing QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">PUT [base]/QuestionnaireResponse/[id]{?_format=[mime-type]}</code></li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a QuestionnaireResponse resource using:<code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse/[id]</code></li><li>A Client <strong>SHALL</strong> be capable of fetching resources matching a search query using:<code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse/[id]{?[parameters]{&amp;_format=[mime-type]}}</code></li></ul><!-- Only included search parameters that are not MAY or there is no conformance requirement included --><p>Search Parameter Summary:</p><table class=\"grid\"><thead><tr><th style=\"white-space: nowrap;\">Conformance</th><th>Parameter</th><th>Type</th><th>Example</th></tr></thead><tbody><tr><td><strong>SHALL</strong></td><td><a href=\"SearchParameter-qr-context.html\">context</a></td><td>reference</td><td><code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse?context=[type]/[id]</code></td></tr><tr><td><strong>SHALL</strong></td><td><a href=\"SearchParameter-qr-context.html\">patient</a></td><td>reference</td><td><code class=\"highlighter-rouge\">GET [base]/QuestionnaireResponse?patient=[type]/[id]</code></td></tr></tbody></table><div><p>Search Parameter Requirements (When Used Alone or in Combination):</p><ul><li><a href=\"SearchParameter-qr-context.html\">context</a> (reference):<p>Allows retrieving QuestionnaireResponse for a context</p></li><li><a href=\"SearchParameter-qr-context.html\">patient</a> (reference):<p>Allows retrieving QuestionnaireResponse for a patient</p></li></ul></div><h4 class=\"no_toc\" id=\"encounter\">Encounter</h4><p>Supported Profiles:</p><ul><li><a href=\"https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-profile-encounter.html\">CRD Encounter</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching an Encounter resource using:<code class=\"highlighter-rouge\">GET [base]/Encounter/[id]</code></li></ul><h4 class=\"no_toc\" id=\"devicerequest\">DeviceRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-devicerequest\">CRD Device Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a DeviceRequest resource using:<code class=\"highlighter-rouge\">GET [base]/DeviceRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"medicationrequest\">MedicationRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-medicationrequest\">CRD Medication Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a MedicationRequest resource using:<code class=\"highlighter-rouge\">GET [base]/MedicationRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"nutritionorder\">NutritionOrder</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-nutritionorder\">CRD Nutrition Order</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a NutritionOrder resource using:<code class=\"highlighter-rouge\">GET [base]/NutritionOrder/[id]</code></li></ul><h4 class=\"no_toc\" id=\"communicationrequest\">CommunicationRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-communicationrequest\">CRD Communication Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a CommunicationRequest resource using:<code class=\"highlighter-rouge\">GET [base]/CommunicationRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"servicerequest\">ServiceRequest</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest\">CRD Service Request</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a ServiceRequest resource using:<code class=\"highlighter-rouge\">GET [base]/ServiceRequest/[id]</code></li></ul><h4 class=\"no_toc\" id=\"visionprescription\">VisionPrescription</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-visionprescription\">CRD Vision Prescription</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>.</li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a VisionPrescription resource using:<code class=\"highlighter-rouge\">GET [base]/VisionPrescription/[id]</code></li></ul><h4 class=\"no_toc\" id=\"task\">Task</h4><p>Supported Profiles:</p><ul><li><a href=\"http://hl7.org/fhir/us/davinci-pas/StructureDefinition/profile-task\">PAS Task Profile</a></li></ul><p>Profile Interaction Summary:</p><ul><li><strong>SHALL</strong> support <code>read</code>, <code>create</code>, <code>update</code>.</li></ul><p>Modify Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of posting a Task resource using:<code class=\"highlighter-rouge\">POST [base]/Task/[id]{?_format=[mime-type]}</code></li><li>A Client <strong>SHALL</strong> be capable of putting an existing Task resource using:<code class=\"highlighter-rouge\">PUT [base]/Task/[id]{?_format=[mime-type]}</code></li></ul><p>Fetch and Search Criteria:</p><ul><li>A Client <strong>SHALL</strong> be capable of fetching a Task resource using:<code class=\"highlighter-rouge\">GET [base]/Task/[id]</code></li></ul></div>"
* text.status = #generated
* version = "1.1.0-ballot"
* name = "DTRSmartClient"
* title = "SMART on FHIR DTR Client"
* status = #active
* experimental = false
* date = "2024-08-02"
* publisher = "HL7 Clinical Decision Support Work Group"
* contact.name = "HL7 Clinical Decision Support Work Group"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/dss"
* description = "This statement defines the expected capabilities of DTR SMART on FHIR applications. Such apps require client support for retrieving and editing QuestionnaireResponse resources and related resources, as well as client support for the Questionnaire Package, ValueSet Expand, and Next Question operations."
* jurisdiction = urn:iso:std:iso:3166#US
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client|7.0.0"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #client
* rest.documentation = "A SMART on FHIR DTR Client provides an application conforming to the SMART on FHIR specification and related requirements declared in this Implementation Guide."
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [HRex implementation guide](https://build.fhir.org/ig/HL7/davinci-ehrx)."
* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/qr-context"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a context"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a patient"

* rest.resource[+].type = #Encounter
* rest.resource[=].supportedProfile = $CRDEncounter
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #DeviceRequest
* rest.resource[=].supportedProfile = $CRDDeviceRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #MedicationRequest
* rest.resource[=].supportedProfile = $CRDMedicationRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #NutritionOrder
* rest.resource[=].supportedProfile = $CRDNutritionOrder
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #CommunicationRequest
* rest.resource[=].supportedProfile = $CRDCommunicationRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = $CRDServiceRequest
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #VisionPrescription
* rest.resource[=].supportedProfile = $CRDVisionPrescription
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #Task
* rest.resource[=].supportedProfile = $PASTask
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update

// Operations
* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "questionnaire-package"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "expand"
* rest.operation[=].definition = "http://hl7.org/fhir/OperationDefinition/ValueSet-expand"

* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "next-question"
* rest.operation[=].definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRExtensions.fsh

/**************************************************************************************************************/
Extension: AlternativeExpression
Id: alternativeExpression
Title: "Alternative Expression"
Description: "Provides an alternate expression containing the compiled JSON ELM for an expression. (**NOTE**: The expectation is that this extension will transition to the core extensions pack)"
* ^status = #active
* ^context[0].type = #element
* ^context[=].expression = "Expression"
* value[x] ^short = "Alternate expression containing compiled JSON ELM."
* value[x] 1..1
* value[x] only Expression

/**************************************************************************************************************/
Extension: ContainedReference
Id: containedReference
Title: "Contained Reference"
Description: "Indicates that when filling a QuestionnaireResponse and selecting a reference, that the referenced resource should be included as a 'contained' resource within the QuestionnaireResponse"
* ^status = #active
* ^context[0].type = #element
* ^context[=].expression = "QuestionnaireResponse.item.answer" //.value is Reference"
* value[x] ^short = "Contain the reference?"
* value[x] 1..1
* value[x] only boolean

/**************************************************************************************************************/
Extension: QuestionnaireResponseContext
Id: qr-context
Description: "Identifies the orders, coverages, and or other resources associated with the specified QuestionnaireResponse.  Allows finding the DTR responses associated with a particular Order/Encounter/Appointment for a particular insurance coverage."
* ^title = "Questionnaire Response Context"
* ^context[0].type = #element
* ^context[=].expression = "QuestionnaireResponse"
* ^status = #active
* value[x] 1..1
* value[x] only Reference($CRDCoverage or $CRDDeviceRequest or $CRDMedicationRequest or $CRDNutritionOrder or $CRDServiceRequest or $CRDEncounter or $CRDAppointmentBase)

/**************************************************************************************************************/
Extension: IntendedUse 
Id: intendedUse 
Title: "Intended Use"
Description: "Indicates how the EHR is to use the information with respect to the associated orders/records.  If the Adaptive QuestionnaireResponse includes a prior authorization number the `intendedUse` element should be set to 'retain-doc' and/or 'withorder'."
* ^context[0].type = #element
* ^context[=].expression = "QuestionnaireResponse"
* ^status = #active
* value[x] ^short = "Reference to the pertinent order associated with this QuestionnaireResponse."
* value[x] ^definition = "This contains references to the pertinent orders associated with this QuestionnaireResponse."
* value[x] only CodeableConcept
* value[x] from $CRDDocReason
* value[x] 1..1

/**************************************************************************************************************/
Extension: InformationOrigin
Id: information-origin
Description: "Identifies the origin of the information in the answer and how it came to exist."
* ^title = "Information Origin"
* ^context[0].type = #element
* ^context[=].expression = "QuestionnaireResponse.item.answer"
* ^status = #active
* obeys dtrx-1
* extension contains
    source 1..1 and
    author 0..1 
* extension[source] only Extension
* extension[source] ^short = "The origination of information"
* extension[source] ^definition = "The origination of information"
* extension[source].value[x] 1..1
* extension[source].value[x] from DTRInformationOrigins (extensible)
* extension[source].value[x] only code
* extension[source].value[x] ^short = "auto | override | manual"

* extension[author] only Extension
* extension[author] ^short = "The author of the information adjustment"
* extension[author] ^definition = "The author of the information adjustment"
* extension[author].extension contains 
    role 0..* and
    practitioner 0..1
    
* extension[author].extension[role] only Extension
* extension[author].extension[role] ^short = "The role of the final human who authored the information adjustment"
* extension[author].extension[role] ^definition = "The role of the final human who authored the information adjustment"
* extension[author].extension[role].value[x] 1..1
* extension[author].extension[role].value[x] only CodeableConcept
* extension[author].extension[role].value[x] from $USCORE311PRVS (extensible)

* extension[author].extension[practitioner] only Extension
* extension[author].extension[practitioner] ^short = "The final practitioner who authored the information adjustment"
* extension[author].extension[practitioner] ^definition = "The final practitioner who authored the information adjustment"
* extension[author].extension[practitioner].value[x] 1..1
* extension[author].extension[practitioner].value[x] only Reference(USCorePractitionerProfile)

/**************************************************************************************************************/
Extension: ActiveRole 
Id: activeRole 
Title: "Active Role"
Description: "An extension to indicate the active role(s) a practitioner is currently functioning in."
* ^context[0].type = #element
* ^context[=].expression = "Practitioner"
* ^status = #active
* value[x] ^short = "The active role(s) of the practitioner."
* value[x] ^definition = "The active role of the practitioner."
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from $USCORE311PRVS (extensible)


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRGlobalAliasList.fsh

// ------------------------------------------------------------------------------------------------------------------------
// US Core artifacts
Alias: $USCOREPractitionerRole311 = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|3.1.1
Alias: $USCOREPractitionerRole610 = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0
Alias: $USCORE311PRVS = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias: USCOREClientCapStatement = http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client

// ------------------------------------------------------------------------------------------------------------------------
// CRD artifacts
Alias: $CRDAppointmentBase = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-appointment-base
Alias: $CRDPatient = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-patient
Alias: $CRDCoverage = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-coverage
Alias: $CRDCommunicationRequest = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-communicationrequest
Alias: $CRDServiceRequest = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-servicerequest
Alias: $CRDDeviceRequest = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-devicerequest
Alias: $CRDVisionPrescription = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-visionprescription
Alias: $CRDMedicationRequest = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-medicationrequest
Alias: $CRDNutritionOrder = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-nutritionorder
Alias: $CRDOrganization = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-organization
Alias: $CRDOrderDetail = http://hl7.org/fhir/us/davinci-crd/ValueSet/orderDetail
Alias: $CRDEncounter = http://hl7.org/fhir/us/davinci-crd/StructureDefinition/profile-encounter
Alias: $CRDCoveredInfo = http://hl7.org/fhir/us/davinci-crd/ValueSet/coverageInfo
Alias: $CRDCoveragePaDetail = http://hl7.org/fhir/us/davinci-crd/ValueSet/coveragePaDetail
Alias: $CRDAdditionalDoc = http://hl7.org/fhir/us/davinci-crd/ValueSet/AdditionalDocumentation
Alias: $CRDInformationNeeded = http://hl7.org/fhir/us/davinci-crd/ValueSet/informationNeeded
Alias: $CRDDocReason = http://hl7.org/fhir/us/davinci-crd/ValueSet/DocReason

// ------------------------------------------------------------------------------------------------------------------------
// Miscellaneous artifacts
Alias: $cqf-expression = http://hl7.org/fhir/StructureDefinition/cqf-expression
Alias: $questionnaire-constraint = http://hl7.org/fhir/StructureDefinition/questionnaire-constraint
Alias: $CQFQ = http://hl7.org/fhir/StructureDefinition/cqf-questionnaire
Alias: $CQFLIB = http://hl7.org/fhir/StructureDefinition/cqf-library
Alias: $CQFEXP = http://hl7.org/fhir/StructureDefinition/cqf-expression
Alias: $QRAUTHOR = http://hl7.org/fhir/StructureDefinition/questionnaireresponse-author
Alias: $fmm = http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
Alias: $standards-status = http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
Alias: $issuetype-cs = http://hl7.org/fhir/issue-type
Alias: $issuedetails-cs = http://terminology.hl7.org/CodeSystem/operation-outcome
Alias: COVCLASS = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: COPAYTYPE = http://terminology.hl7.org/CodeSystem/coverage-copay-type
Alias: RELATE = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: CONTRACTTYPE = http://terminology.hl7.org/CodeSystem/contract-type
Alias: $sdcEntryMode = http://hl7.org/fhir/uv/sdc/ValueSet/entryMode
Alias: $PASTask = http://hl7.org/fhir/us/davinci-pas/StructureDefinition/profile-task

---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRInvariants.fsh

/*****************************************************************************************************/
Invariant: dtrq-1
Description: "Non-group items must have the cqf-expression extension"
Severity: #error
Expression: "type = 'group' or extension.url = 'http://hl7.org/fhir/StructureDefinition/cqf-expression'"

/*****************************************************************************************************/
Invariant:  dtr-1
Description: "At least one of 'order', 'questionnaire' and 'context' SHALL be present"
Severity:   #error
Expression: "parameter.exists(name='order' or name='questionnaire' or name='context')"

/*****************************************************************************************************/
Invariant:  dtrx-1
Description: "If source is 'override' or 'manual' then an author SHALL be supplied, otherwise author is prohibited."
Severity:   #error
Expression: "extension.exists(url = 'source' and value = 'auto') != extension.exists(url = 'author')"

/*****************************************************************************************************/
Invariant:  dtrb-1
Description: "The first resource in bundle must be a Questionnaire."
Severity:   #error
Expression: "entry.first().resource.is(Questionnaire)"

/*****************************************************************************************************/
Invariant:  dtrb-2
Description: "The first resource in bundle must be a QuestionnaireResponse."
Severity:   #error
Expression: "entry.first().resource.is(QuestionnaireResponse)"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRLogicalModels.fsh

Logical: DTRSupportedPayers
Id: DTRSupportedPayers
Title: "DTR Supported Payers"
Description: "A logical model describing the listing of payers currently supported by the DTR app."
* ^purpose = "**Purpose:** 

This logical model is NOT a FHIR data structure for information exchange. Instead, it is a model of the information that the DTR app will maintain for the Payers that are supported by the app. (See the [*Determination of Payers Supported by a DTR App*](specification.html#determination-of-payers-supported-by-a-dtr-app) section of the Formal Specification)
 
 The Payer Identifier used in structures based on this model **SHALL** be the same as the ones that are returned by the [endpoint discovery mechanism](https://build.fhir.org/ig/HL7/davinci-ehrx/endpoint-discovery.html) defined in HRex."
* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* ^extension[$standards-status].valueCode = #informative
* payer           0..* BackboneElement  "Supported Payer"  "Details for specific supported payer."
  * name          1..1 string           "Name of the payer" 
  * identifier    1..1 Identifier       "Identifier of the payer"
    * system      1..1                  
      * ^short = "Identifier namespace for this payer"
    * value       1..1                  
      * ^short = "Specific identifier value for this payer"

/**************************************************************************************************************************************************************/
Logical: DTRMetricData
Id: DTRMetricData
Title: "DTR Metric Data"
Description: "A logical model describing the information that should be captured by DTR implementers about every DTR invocation to support measures evaluating DTR implementation."
* ^purpose = "**Purpose:** 

This logical model is NOT a FHIR data structure for information exchange. Instead, it is a model of the information that **SHOULD** be collected and maintained for each DTR system action. While implementers may choose any internal storage format that is appropriate for their system, the information collected should ultimately be mapped to the information model below.
Mapping implementation data to these elements will allow metrics (see the [table on the metrics page]) to be represented in a way that provides consistent responses to requirements from various interested parties (providers, payers, regulators, quality organizations, certification agencies, states, etc.) by each of the participants in the DTR exchanges.
A separate instance should be created by each participant for each DTR 'session':
* For a 'Light' EHR, a session exists from the time the DTR SMART app launches until it closes.
* For a 'Full' EHR, a session exists from the time the user interface initiates the DTR process until the user interface returns from QuestionnaireResponse population to other activity.
* For a SMART app, a session runs from the time the app is launched until it closes.
* For a payer, a session runs from the time a SMART back-end connection from the Full EHR or SMART app is established until the last operation call is made using that security token.
Resumed DTR sessions initiated from a previously stored QuestionnaireResponse will be tracked separately from initial DTR sessions.  Unless there is at least one CRD-assigned assertion id present on the record, it will not be possible to tie together multiple sessions related to the same QuestionnaireResponse or order."

* ^status = #active
* ^experimental = false
* ^extension[$fmm].valueInteger = 1
* ^extension[$standards-status].valueCode = #informative

* source                 1..1 code            "provider-src | payer-src | DTRApp-src"  "A code to indicate which type of system collected the metric data (DTRApp can be either a Native or SMART on FHIR app)"
* source                 from MetricSource (required)
* sofApp                 0..1 url             "URL of SMART on FHIR application" "The URL of SMART on FHIR application to identify the specific DTR application used by the provider and payer.  If not present, then the DTR session is with a Full EHR."

* providerId             1..1 Identifier      "Identifier for the user initiating DTR"  "The NPI number of the user who initiated this DTR session."
* providerId.system      1..1
* providerId.system      = "http://hl7.org/fhir/sid/us-npi"
* providerId.value       1..1

* groupId                1..1 Identifier      "Identifier for the healthcare organization initiating DTR"  "The NPI of the hospital/clinic/other organization that initiated this DTR session."
* groupId.system         1..1
* groupId.system         = "http://hl7.org/fhir/sid/us-npi"
* groupId.value          1..1

* payerId                1..1 Identifier       "Payer receiving DTR request"  "The identifier of the payer organization supplying the questionnaire bundle for this session."
* payerId.system         1..1 
* payerId.value          1..1 

* assertionId            0..* string           "Unique ID for order item" "Assertion ids passed in on the coverage-information in Requests, Encounters, or QuestionnaireResponses used as context to launch DTR (or selected by the user as context post-launch) as well as passed as a Task questionnaire launch context parameter."
  * ^comment = "If there are multiple coverage-information extensions in context, this will be the union of distinct assertionIds."
  * ^requirements = "Allows linking DTR sessions to CRD, CDex, and potentially prior DTR sessions."

* docReason              0..* code             "withpa | withclaim | withorder | retain-doc | OTH" "doc-purpose passed in on the coverage-information in Requests, Encounters or QuestoinnaireResponses used as context to launch DTR (or selected by the user as context post-launch)."
* docReason              from $CRDDocReason    (required)
* docReason ^comment = "If there were multiple coverage-informations present in the launch context, this will be the union of distinct codes present."

* launchMode             0..1 code             "crdlaunch | relaunch | salaunch | cdexlaunch" "Indicates the launch mode involved for this session."
* launchMode             from MetricLaunchMode (required)

* orderItem              1..* CodeableConcept  "What was ordered" "The specific procedure, item, medication, appointment, nutrition that is the subject of the order/appointment."
* orderItem              from $CRDOrderDetail  (extensible)

* action                 1..* BackboneElement  "Actions the reporting system engaged in as part of the DTR session."  "Actions performed between a system and the DTR application."
  * ^comment = "See notes section below for how the action elements should be populated for different actions"
  * actionDetail         1..1 code             "launch | qpackage | mrquery | userresponse | nextq | storeqr" "What type of action occurred within the DTR session."
  * actionDetail         from MetricAction     (required)
  * requestTime          1..1 instant          "Time action initiated"  "The time stamp when the action was initiated from the perspective of the reporting system."
  * responseTime         0..1 instant          "Time of action response"  "The time stamp when the action was completed (including error return) from the perspective of the reporting system."
  * httpResponse         0..1 integer          "HTTP response status code" "The HTTP response status code associated with the action (successful or not)."
    * ^comment = "Must be present unless action is a userresponse"
  * questionnaire        0..1 canonical        "Associated Questionnaire" "The questionnaire(s) tied to the current action"
    * ^type.targetProfile[0] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-std-questionnaire"
    * ^type.targetProfile[+] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaire-adapt"
  * issue                0..* BackboneElement  "OperationOutcome info"  "If an OperationOutcome is returned, what were the issues?"
    * code               1..1 code             "Error code"  "The issue.code value from the OperationOutcome for this issue."
    * code               from IssueType        (required)
    * details            0..1 CodeableConcept  "More detailed error code"  "The issue.details value from the OperationOutcome for this issue."
    * details            from OperationOutcomeCodes (example)

* resources              0..* BackboneElement  "Resource types accessed"  "Information that was accessed from the EHR by the one or more of the questionnaires using CQL."
  * type                 1..1 code             "Kind of resource" "What kind of resource was accessed."
  * type                 from ResourceType     (required)
  * profile              0..1 canonical        "Solicited profile"  "Indicates the sub-type of data accessed in situations where multiple US-core profiles could apply (e.g., Observation).  Note: This does not mean that the data received was actually valid against the profile, merely that the search criteria used were intended to retrieve data of this type."
    * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/StructureDefinition"
  * count                1..1 positiveInt      "Number retrieved"  "How many resources of that type were accessed."

* questionnaire          0..* BackboneElement  "Questionnaire"  "Questionnaire that was returned in the Questionnaire package (and information about what was done with it)"
  * reference            1..1 canonical        "This is the URL for the canonical questionnaire"  "This is the URL for the canonical questionnaire that was returned by the $questionnaire-package operation"
    * ^type.targetProfile[0] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-std-questionnaire"
    * ^type.targetProfile[+] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaire-adapt"
  * adaptive             0..1 boolean          "True if adaptive form"  "If the Questionnaire is an adaptive form, the value is True."
    * ^meaningWhenMissing = "Questionnaire was a standard (non-adaptive) Questionnaire"
  * populated            0..1 boolean          "Whether a pre-populated response was provided from payer"  "If true, indicates that the draft QuestionnaireResponse provided in the Questionnaire package Bundle included at least some answers pre-populated with payer data."
    * ^meaningWhenMissing = "No population occurred"
  * failure              0..* CodeableConcept  "Questionnaire errors logged to payer"  "A failure reported to the payer about Questionnaire content using the $log-questionnaire-errors operation."
  * failure              from IssueType (required)
  * reviewPrior          0..1 boolean          "True if user reviewed answers prior to final save"  "If the provider reviewed the QuestionnaireResponse answers prior to marking it as complete or saving it in the EHR."
    * ^meaningWhenMissing = "User did not review the QuestionnaireRepsonse in this session"
  * enabledQuestions     0..1 positiveInt      "Number of enabled questions"  "The count of all questions enabled in the Questionnaire at the time it was marked 'complete'."
    * ^comment = "This element is a count of the number of enabled question items at the time the QuestionnaireResponse was last stored as part of this DTR session"
  * autoPopulated        0..1 positiveInt      "Number of questions autopopulated"  "The count of all questions that were auto-populated from the patient's medical record and/or by payer information."
    * ^comment = "The modification may have happened in a prior session.  This element is a count of the number of enabled question items with an information-origin extension of 'auto' or 'override' at the time the QuestionnaireResponse was last stored as part of this DTR session."
    * ^meaningWhenMissing = "No questions had their answers auto-populated"
  * roleInteraction      0..* BackboneElement  "Role specific interactions"  "A summary of the information-origin extensions for all enabled questions in the Questionnaire as they were at the time the QuestionnaireResponse was last stored within the DTR session reflecting human intervention."
    * role               1..1 CodeableConcept  "Role of information contributor" "The type of humanrole whose questionnaire completion is summarized here.  Corresponds to the information-origin.author.role.  NOTE: if a form is edited by multiple people with the same roles, the items they edit or override will be aggregated together."
    * role               from $USCORE311PRVS (extensible)
    * roleAction         1..1 code             "override | manual"  "This will indicate the type of human intervention action being summarized (auto, override or manual)."
    * roleAction         from MetricsInformationOrigins (extensible)
    * count              1..1 positiveInt      "Count of combination of role and roleInteraction"  "This is the sum of enabled questions for the specified with an information-origin of that source AND an author.role that matches the specified role."
  * elapsedTime       1..1 time             "Cumulative user response time that questionnaire was active in session"  "cumulative time from DTR start to QR store, including from multiple sessions."

* coverageInfo    0..* BackboneElement "Coverage information"                "Coverage information extensions returned as part of completed adaptive Questionnaires within this DTR session."
  * covered       0..1 code            "covered | not-covered | conditional" "Indicates whether the service is covered."
  * covered       from $CRDCoveredInfo          (required)
  * paNeeded      0..1 code            "auth-needed | no-auth | satisfied | performpa | conditional" "Indicates whether prior authorization is necessary or not, as well as considerations about applying for prior authorization."
  * paNeeded      from $CRDCoveragePaDetail     (required)
  * docNeeded     0..1 code            "clinical | admin | both | conditional"  "Indicates whether additional information is necessary (for prior auth, claims submission, or some other purpose)."
  * docNeeded     from $CRDAdditionalDoc        (required)
  * infoNeeded    0..1 code            "performer | location | timeframe | OTH" "Indicates what additional inforamtion is necessary in order to determine authorization/coverage - which might be available on a later hook invocation."
  * infoNeeded    from $CRDInformationNeeded    (required)
  * questionnaire 0..* BackboneElement "Questionnaire(s) returned"           "Information about the Questionnaire(s) returned to gather additional information (e.g. through DTR)."
    * ^requirements = "Allows linking metadata about forms identified 'to be filled out' in CRD with what is actually completed in DTR, and eventually submitted in CDex, PAS or claims"
    * reference   1..1 canonical       "Questionnaire url & version"         "The official identifier of one of the Questionnaires provided to be filled out."
      * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/Questionnaire"
    * adaptive    1..1 boolean         "Is questionnaire adaptive?"          "If true, indicates that the questionnaire is adaptive (i.e. uses the $next-question operation to determine questions)."
    * response    1..1 boolean         "Pre-pop response provided?"          "If true, indicates that the card included a partially populated QuestionnaireResponse with answers filled by the payer from pre-known data."
  * assertionId   1..1 string          "Id for coverage assertion"           "Corresponds to the coverage-assertion-id from the coverage-information extension."
    * ^requirements = "Used to link the results of CRD to metric information captured for DTR and/or PAS."
  * satisfiedId   0..1 string          "Id if PA is satisfied"               "Corresponds to the satisfied-pa-id from the coverage-information extension."
  * businessLine  0..1 CodeableConcept "e.g., MedicareAdvantage"              "A code that indicates which type of insurance this assertion applies to."


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTROperation-LogQuestionnaireErrors.fsh

/**************************************************************************************************************/
Instance: DTRLogQuestionnaireErrors
InstanceOf: OperationDefinition
Description: "The operation will pass a Questionnaire reference and an OperationOutcome detailing the issue(s) including where the error occurred back to the originating Payer."
Title: "DTR Log Questionnaire Errors"
Usage: #definition

* id = "log-questionnaire-errors"
* url = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/log-questionnaire-errors"
* name = "LogQuestionnaireErrors"
* title = "Log errors resulting from a specific Questionnaire and/or CQL to the originating Payer"
* status = #active
* kind = #operation
* description = "This operation **SHOULD** be supported by payers and DTR applications and allows submission of issues encountered when working with these DTR-provided artifacts.  The operation will pass the Questionnaire and an OperationOutcome detailing the issue(s) including where the error occurred.    

The input OperationOutcome resource **SHOULD** include information on the DTR application identity and version, date-time with time-zone offset, as well as the provider endpoint during which the error occurred, and it **SHALL NOT** contain information about the response or information retrieved from FHIR APIs that could potentially include PHI.  The Questionnaire reference **SHOULD** be version-specific."
* inputProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-log-errors-input-parameters"
* code = #log-questionnaire-errors
* base = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/log-questionnaire-errors"

* resource = #Questionnaire
* system = false
* type = true
* instance = false

// -------------------------- Input --------------------------
* parameter[0].name = #Questionnaire
* parameter[=].use = #in
* parameter[=].documentation = "The Questionnaire which generated the errors"
* parameter[=].type = #canonical
* parameter[=].min = 1
* parameter[=].max = "1"

* parameter[+].name = #OperationOutcome
* parameter[=].use = #in
* parameter[=].documentation = "The OperationOutcome documenting the Questionnaire/CQL errors and their location"
* parameter[=].type = #OperationOutcome
* parameter[=].min = 1
* parameter[=].max = "1"



---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTROperation-NextQuestion.fsh

Instance: DTR-Questionnaire-next-question
InstanceOf: OperationDefinition
Usage: #definition
* name = "DTRNextQuestion"
* title = "DTR Next Question Operation"
* status = #active
* kind = #operation
* description = "The Next Question operation is used for *adaptive questionnaires*.  For specific details, see the [SDC Next Question operation](http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question)."
* code = #next-question
* base = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-next-question"
* comment = "To return a calculated score for the questionnaire or group of items, the service may return a `readOnly` question with the score value in the corresponding QuestionnaireResponse.item.  The extension `questionnaire-hidden` can be included on the Questionnaire.item to indicate to the client that it should not be displayed to the end user"
* resource = #Questionnaire
* system = false
* type = true
* instance = false

* inputProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-next-question-input-parameters"
* outputProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-next-question-output-parameters"

* parameter[0].type = #Resource
* parameter[=].name = #questionnaire-response-in
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The [DTR QuestionnaireResponse Profile](StructureDefinition-dtr-questionnaireresponse.html) of the QuestionnaireResponse resource with a *contained* Questionnaire.  When invoking the operation for the first time, neither the QuestionnaireResponse nor the contained Questionnaire will have any items, as no questions are yet known.  In subsequent calls, the QuestionnaireResponse will include answers to all required questions asked so far and the contained QuestionnaireResponse will remain the same as provided back from the operation in the preceding response."

* parameter[+].type = #Resource
* parameter[=].name = #questionnaire-response-out
* parameter[=].use = #out
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The [DTR QuestionnaireResponse Profile](StructureDefinition-dtr-questionnaireresponse.html) of the QuestionnaireResponse resource with a *contained* Questionnaire.  The Server updates the QuestionnaireResponse's contained Questionnaire by appending with the next question or questions ittems and any score or instruction items and returns the QuestionnaireResponse (with all answers completed thus far plus any calculated scores) as this parameter.  When the questionnaire is complete, the Server updates the status of the QuestionnaireResponse resource parameter to `complete`."


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTROperation-QuestionnairePackage.fsh

Instance: DTRQuestionnairePackage
InstanceOf: OperationDefinition
Description: "This operation returns a collection Bundle containing one or more Questionnaire-specific collection Bundles each consisting of a single Questionnaire resource as well as any dependency Library and ValueSet instances needed to allow a renderer to fully render and otherwise process the Questionnaire."
Title: "DTR Questionnaire Package"
Usage: #definition

* id = "questionnaire-package"
* url = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"
* name = "QuestionnairePackage"
* title = "Get Questionnaire Packge for given order(s)"
* status = #active
* kind = #operation
* description = "This operation returns one or more 'collection' Bundles each consisting of a single Questionnaire resource, one or more QuestionnaireResponse resources, as well as any dependency Library and ValueSet instances needed to allow a renderer to fully render and otherwise process the Questionnaire.

The operation **SHALL** take as input the Coverage resource(s) identifying the member and the type(s) of Coverage for which additional information is needed and at least one of:  
* Zero or more canonicals specifying the URL and, (optionally) the version of the Questionnaire(s) to retrieve;
* A CRD/PAS context ID, and/or
* One or more Request or Encounter resources

If specific Questionnaires are specified, the operation will return the specified versions of the respective Questionnaires (or current version if no version is indicated).  For the other parameters (context id or resources) the payer will determine, all Questionnaires relevant to determining coverage, prior authorization, claims acceptability, documentation requirements, etc. that are relevant to the specified context.  The list of questionnaires returned will be the union of those determined by evaluating each of the provided parameters, with each Questionnaire version only being returned once.  If multiple versions of a questionnaire are returned, each **SHALL** be associated with distinct orders or coverages in the associated QuestionnaireResponses (see below).

In most cases, only one order and one coverage will be provided.  However, the operation allows for circumstances where the decision support engine can handle multiple active coverages - either for the same payer or multiple payers handled by the same engine.  It also handles multiple orders with overlapping requirements where a payer might be able to minimize the answers to be gathered by processing the answers as a group.

If any of the explicitly requested questionnaires cannot be found, a warning **SHALL** be provided in the [`Outcome`](StructureDefinition-dtr-qpackage-output-parameters.html) element of the outer `Parameters` resource.  Similarly, if there is an issue understanding any of the orders or coverages and determining appropriate Questionnaires, a warning will be provided.

Each Questionnaire will be packaged into a distinct Bundle.  If there is only one Questionnaire and there are no warnings, then the QuestionnaireBundle can be returned as the sole payload of the operation response.  If there are multiple Questionnaires and/or there is a need to convey an OperationOutcome alongside Questionnaires, the response will be a `Parameters` resource.  If the operation fails, the response payload **SHOULD** be an OperationOutcome.

The Bundle **SHALL** include the Questionnaire as the first entry along with all external Libraries referenced by the Questionnaire using the [cqf-library](https://build.fhir.org/ig/HL7/fhir-extensions/StructureDefinition-cqf-library.html) extension, as well as a recursive retrieval of all `relatedArtifact` references of type 'depends-on'.  All Libraries **SHALL** include both CQL and EML representations.  The Bundle **SHALL** include all external ValueSet instances referenced by the Questionnaire.  All value sets with expansions under 40 entries **SHALL** be expanded as of the current date and using expansion parameters (such as SNOMED release) as deemed appropriate by the payer.

All references to Questionnaires, Libraries, and ValueSets within the Bundle **SHALL** be version specific, as breaking changes may occur between versions and would likely cause failures or inconsistent data. Note that the same Libraries and/or ValueSets may appear in more than one Questionnaire Bundle, possibly with a different version.

If any of the dependencies cannot be retrieved or value sets expanded, a warning will be included in the [`Outcome`](StructureDefinition-dtr-qpackage-output-parameters.html). Each Library and ValueSet will only appear once in the Bundle, even if it is referenced multiple places.  The only exception is if more than one version of a Library or ValueSet are referenced.  Multiple versions of a ValueSet will be returned.  Multiple versions of a Library **MAY** be treated as an error, or **MAY** be handled by returning the 'most recent' version of the referenced versions.

As well, the Questionnaire Bundle **SHALL** contain one or more initial draft QuestionnaireResponses that reference the Questionnaire for that Bundle and populate the subject as well as repetitions of the Context extension that identify the Coverage(s) and Request or Encounter resources the Questionnaire is to be completed for. The same QuestionnaireResponse might be associated with multiple Request resources or may need to be filled out separately for different Requests.

The payer **MAY** opt to pre-populate some answers in the provided QuestionnaireResponses based on information the payer has in its own records or has from context from CRD or from other prior auth or claims submissions.

Payers must be cautious about prepopulating Questionnaires with sensitive information, because there are rare situations where a malicious application could attempt to access information that was not authorized by the EHR.

When resuming a work in progress questionnaire response the DTR client **SHALL** invoke the operation with the timestamp to see if the questionnaire package has changed since it was last retrieved, presuming that the `QuestionnaireResponse.meta.lastUpdated` element corresponds to the last package retrieval time.

### Notes
* For adaptive questionnaires, there will be no question items to reference any ValueSets and no expressions to reference any Libraries.  However, the payer may still opt to include Libraries or ValueSets in the initial Bundle to avoid the overhead of needing to send contained content with each [`$next-question`](http://hl7.org/fhir/uv/sdc/STU3/OperationDefinition-Questionnaire-next-question.html) invocation.  Alternatively, any needed Libraries and ValueSets may manifest as ‘contained’ resources within the QuestionnaireResponse returned by [`$next-question`](http://hl7.org/fhir/uv/sdc/STU3/OperationDefinition-Questionnaire-next-question.html) based on which questions have been selected. (see [Adaptive Form Considerations](https://build.fhir.org/ig/HL7/davinci-dtr/specification.html#adaptive-form-considerations))

* The `outcome` parameter is only present if the operation completes successfully with a 200 HTTP response code.  In the event of an error, no Parameters response will be returned at all, though a bare `OperationOutcome` might be returned."

* code = #questionnaire-package
* base = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"
* resource = #Questionnaire
* system = false
* type = true
* instance = false
* inputProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-qpackage-input-parameters"
* outputProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-qpackage-output-parameters"

// in
* parameter[0].name = #coverage
* parameter[=].use = #in
* parameter[=].documentation = "Coverage resource instances to establish the member and the coverage for which documentation is to be collected."
* parameter[=].type = #Coverage
* parameter[=].min = 0
* parameter[=].max = "*"

* parameter[+].name = #order
* parameter[=].use = #in
* parameter[=].documentation = "Order resource instances. e.g., DeviceRequest, ServiceRequest, MedicationRequest,... Encounter, Appointment, etc. to establish context for the information to be collected."
* parameter[=].type = #Any
* parameter[=].min = 0
* parameter[=].max = "*"

* parameter[+].name = #referenced
* parameter[=].use = #in
* parameter[=].documentation = "Order-related referenced resources which are necessary to support stand-alone launch – specifically the Patient, requester, performer and location-related resources. (SHALL NOT include resources from `supportingInformation`)."
* parameter[=].type = #Any
* parameter[=].min = 0
* parameter[=].max = "*"

* parameter[+].name = #questionnaire
* parameter[=].use = #in
* parameter[=].documentation = "Canonical url for Questionnaire(s) (possibly version-specific) to return."
* parameter[=].type = #canonical
* parameter[=].min = 0
* parameter[=].max = "*"

* parameter[+].name = #context
* parameter[=].use = #in
* parameter[=].documentation = "Context ID from CRD or CDex.  May be used to determine what Questionnaires to return and/or to support pre-population."
* parameter[=].type = #string
* parameter[=].min = 0
* parameter[=].max = "1"

* parameter[+].name = #changedsince
* parameter[=].use = #in
* parameter[=].documentation = "If present, only Questionnaire bundles whose Questionnaire or associated artifacts have changed since the specified timestamp.  If there are no changed artifacts the operation will simply return a 200 Ok indicating that nothing has changed since the specified timestamp."
* parameter[=].type = #dateTime
* parameter[=].min = 0
* parameter[=].max = "1"

// PackageBundle
* parameter[+].name = #PackageBundle
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "*"

* parameter[=].documentation = "A Bundle with a single Questionnaire, and 0..* Libraries containing needed CQL and/or ValueSets containing needed codes."
* parameter[=].type = #Bundle

* parameter[+].name = #outcome
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Warning or information messages related to the successful execution of the operation"
* parameter[=].type = #OperationOutcome


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRParameters.fsh

/**************************************************************************************************************/
Profile:        DTRQuestionnairePackageInputParameters
Parent:         Parameters
Id:             dtr-qpackage-input-parameters
Title:          "DTR Questionnaire Package Input Parameters"
Description:    "The Parameters profile used to define the inputs of the [$questionnaire-package](OperationDefinition-questionnaire-package.html) operation."
* obeys dtr-1
* ^status = #active
* parameter ^slicing.discriminator.type = #pattern
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.description = "Slice based on $this pattern"
* parameter 1..* MS
* parameter contains 
	  coverage 1..* MS and
    order 0..* MS and
    questionnaire 0..* MS and
	  context 0..1 MS and
	  changedsince 0..1 MS
* parameter[coverage].name = "coverage"
* parameter[coverage].resource 1..1 MS
* parameter[coverage].resource only $CRDCoverage
* parameter[order].name = "order"
* parameter[order].resource 1..1 MS
* parameter[order].resource only $CRDAppointmentBase or $CRDEncounter or $CRDCommunicationRequest or $CRDDeviceRequest or $CRDMedicationRequest or $CRDNutritionOrder or $CRDServiceRequest or SupplyRequest or $CRDVisionPrescription
* parameter[order].resource ^short = "One or more Order resource instances, e.g., DeviceRequest, ServiceRequest, MedicationRequest, ... Encounter, Appointment, or prior-auth Claim, etc."
* parameter[questionnaire].name = "questionnaire"
* parameter[questionnaire].value[x] 1..1 MS
* parameter[questionnaire].value[x] only canonical
  * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/Questionnaire"
* parameter[context].name = "context"
* parameter[context] ^short = "CRD or CDex-provided context"
* parameter[context].value[x] 1..1 MS
* parameter[context].value[x] only string
* parameter[changedsince].name = "changedsince"
* parameter[changedsince] ^short = "When the Questionnaire package was last retrieved"
* parameter[changedsince].value[x] 1..1 MS
* parameter[changedsince].value[x] only instant

/**************************************************************************************************************/
Profile:        DTRQuestionnairePackageOutputParameters
Parent:         Parameters
Id:             dtr-qpackage-output-parameters
Title:          "DTR Questionnaire Package Output Parameters"
Description:    "A profile on Parameters indicating the expected response content of a [$questionnaire-package](OperationDefinition-questionnaire-package.html) operation."
* ^status = #active
* parameter ^slicing.discriminator.type = #pattern
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.description = "Slice based on $this pattern"
* parameter 1..* MS
* parameter contains 
	PackageBundle 0..* MS and
  Outcome 0..1 MS 
* parameter[PackageBundle].name = "PackageBundle"
* parameter[PackageBundle].resource 1..1 MS
* parameter[PackageBundle].resource only DTRQuestionnairePackageBundle
* parameter[PackageBundle] ^short = "The QuestionnairePackage bundle that was retrieved"

* parameter[Outcome].name = "operationOutcome"
* parameter[Outcome].resource 0..1 MS
* parameter[Outcome].resource only OperationOutcome
* parameter[Outcome] ^short = "Operation Outcome from this execution"

/**************************************************************************************************************/
Profile:        DTRLogErrorsInputParameters
Parent:         Parameters
Id:             dtr-log-errors-input-parameters
Title:          "DTR Log Questionnaire Errors Input Parameters"
Description:    "The Parameters profile used to define the inputs to the [$log-questionnaire-errors](OperationDefinition-log-questionnaire-errors.html) operation."
* obeys dtr-1
* ^status = #active
* parameter ^slicing.discriminator.type = #pattern
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter ^slicing.description = "Slice based on $this pattern"
* parameter 1..* MS
* parameter contains 
    questionnaire 0..* and 
    outcome 0..*
* parameter[questionnaire].name = "questionnaire"
* parameter[questionnaire] ^short = "The Questionnaire generating the errors (The reference SHOULD be version-specific)"
* parameter[questionnaire].value[x] 1..1 MS
* parameter[questionnaire].value[x] only canonical
  * ^type.targetProfile = "http://hl7.org/fhir/StructureDefinition/Questionnaire"
* parameter[outcome].name = "operationOutcome"
* parameter[outcome].resource 1..1 MS
* parameter[outcome].resource only OperationOutcome
* parameter[outcome] ^short = "Operation Outcome associated with the Questionnaire/CQL"

/**************************************************************************************************************/
Profile: DTRQuestionnaireNextQuestionnaireInputParameters  
Parent: Parameters
Id: dtr-next-question-input-parameters
Title: "DTR Next Question Input Parameters"
Description: "Profile used to validate the parameters that are the input of the 'next question' adaptive questionnaire operation"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 3
* ^extension[=].valueInteger.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom"
* ^extension[=].valueInteger.extension.valueCanonical = "http://hl7.org/fhir/uv/sdc/ImplementationGuide/hl7.fhir.uv.sdc"
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #trial-use
* ^extension[=].valueCode.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom"
* ^extension[=].valueCode.extension.valueCanonical = "http://hl7.org/fhir/uv/sdc/ImplementationGuide/hl7.fhir.uv.sdc"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter contains QuestionnaireResponse 0..*
* parameter[QuestionnaireResponse].name = "in" (exactly)
* parameter[QuestionnaireResponse].value[x] ..0
* parameter[QuestionnaireResponse].resource only http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse
* parameter[QuestionnaireResponse].part ..0

/**************************************************************************************************************/
Profile: DTRQuestionnaireNextQuestionnaireOutputParameters
Parent: Parameters
Id: dtr-next-question-output-parameters
Title: "DTR Next Question Output Parameters"
Description: "Profile used to validate the parameters that are the output of the 'next question' adaptive questionnaire operation"
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 3
* ^extension[=].valueInteger.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom"
* ^extension[=].valueInteger.extension.valueCanonical = "http://hl7.org/fhir/uv/sdc/ImplementationGuide/hl7.fhir.uv.sdc"
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #trial-use
* ^extension[=].valueCode.extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-conformance-derivedFrom"
* ^extension[=].valueCode.extension.valueCanonical = "http://hl7.org/fhir/uv/sdc/ImplementationGuide/hl7.fhir.uv.sdc"
* ^status = #active
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter contains QuestionnaireResponse 0..*
* parameter[QuestionnaireResponse].name = "out" (exactly)
* parameter[QuestionnaireResponse].value[x] ..0
* parameter[QuestionnaireResponse].resource only http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse
* parameter[QuestionnaireResponse].part ..0


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRQuestionnaireAdapt.fsh

Profile: DTRQuestionnaireAdapt
Parent: sdc-questionnaire-adapt
Id: dtr-questionnaire-adapt
Title: "DTR Questionnaire for adaptive form"
Description: "The DTR Adaptive Questionnaire is used to represent an adaptive Questionnaire when actually filling out a QuestionnaireResponse.
NOTE: This profile does not realistically need the `questionnaireAdaptive` extension, but will remain intact due to potential impacts on Structured Data Capture (SDC) requirements.  (Efforts will be made in an attempt to get the SDC requirements on this extension loosened in a future release)"

* ^meta.versionId = "1"
* ^text.status = #additional
* ^text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>The Questionnaire resource for the adaptive form is used to represent the information needs that a payer has to satisfy their documentation requirements and/or rules.</p></div>"
* text.div ^comment = "The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, 'anchor' elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects."

* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-11-12T02:27:35+00:00"
* extension[questionnaireAdaptive].value[x] only url

* extension contains http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive named styleSensitive 0..1
* extension[styleSensitive].valueBoolean = false
* extension[styleSensitive] ^comment = "If set to true, all systems that claim to support this extension and that render elements from the resource SHALL either render the content as required by the style extensions (style, xhtml and markdown or shall indicate to the user that the resource (or specific elements in the resource) cannot be appropriately rendered by the system."
* title.extension contains http://hl7.org/fhir/StructureDefinition/rendering-style named titleRenderingStyle 0..1
* title.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named titleRenderingXhtml 0..1
* text 1..1 
* effectivePeriod MS
  * ^short = "Validity period for the Questionnaire"
* item.prefix.extension contains http://hl7.org/fhir/StructureDefinition/rendering-style named itemPrefixRenderingStyle 0..1
* item.text.extension contains http://hl7.org/fhir/StructureDefinition/rendering-style named itemTextRenderingStyle 0..1
* item.prefix.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named itemPrefixRenderingXhtml 0..1
* item.text.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named itemTextRenderingXhtml 0..1 MS

* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemMedia named itemMedia 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-optionalDisplay named itemOptionalDisplay 0..0
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText named shortText 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel named openLabel 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl named itemControl 0..1 MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation named choiceOrientation 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory named displayCategory 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-supportLink named supportLink 0..* MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn named choiceColumn 0..*
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-width named width 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue named sliderStepValue 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/entryFormat named entryFormat 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-collapsible named collapsible 0..1
* item.answerOption.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia named itemAnswerMedia 0..1

/////////////////////////
// Behavior extension
* item.enableWhen 0..0
* item.enableBehavior 0..0
* extension contains http://hl7.org/fhir/StructureDefinition/cqf-library named cqf-library 0..* MS
* extension[cqf-library] ^short = "The library can contain CQL, FHIRPath or x-fhir-query. The implementers must handle any of the above."
* extension[cqf-library].valueCanonical only Canonical(http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-library)
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression named initialExpression 0..1 MS

/////////////////////////
// Populate extensions
* extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemPopulationContext named itemPopulationContext 0..* MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-unit named unit 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-candidateExpression named candidateExpression 0..1 MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-contextExpression named contextExpression 0..* MS



---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRQuestionnaireAdaptFormSearch.fsh

Profile: DTRQuestionnaireAdaptSearch
Parent: sdc-questionnaire
Id: dtr-questionnaire-adapt-search
Title: "DTR Questionnaire for adaptive form Search"
Description: "The DTR adaptive Questionnaire is used to represent an adaptive Questionnaire when returning the empty Questionnaire in a Questionnaire package."
* ^purpose = "While aligned with the [SDC Adaptive Questionnaire Search](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-adapt-srch.html) profile, this profile does not derive from that profile because elements that SDC make mustSupport for search purposes are not needed for the DTR use case.  (EHRs do not need to search for relevant Questionnaires)."
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-08-24T17:01:59.000+00:00"
* ^text.status = #additional
* ^text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>The Questionnaire resource for the adaptive form is used to represent the information needs that a payer has to satisfy their documentation requirements and/or rules.</p></div>"
* ^version = "1.0.0"
* ^status = #active

* extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive named questionnaireAdaptive 1..* MS
* extension[questionnaireAdaptive].value[x] only url

* extension[sdc-questionnaire-assemble-expectation] 0..0
* extension contains http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive named styleSensitive 0..1
* extension[styleSensitive].valueBoolean = false
* extension[styleSensitive] ^comment = "If set to true, all systems that claim to support this extension and that render elements from the resource SHALL either render the content as required by the style extensions (style, xhtml and markdown or shall indicate to the user that the resource (or specific elements in the resource) cannot be appropriately rendered by the system."
* extension[sdc-questionnaire-preferredTerminologyServer] 0..* MS
* extension[sdc-questionnaire-preferredTerminologyServer] ^comment = "Multiple repetitions are available to support availability (one server might be down) as well as to accommodate the possibility that different servers might be needed for different value sets.  In either case, client behavior is to try different servers from the available list until one is successful.  There is no implication to the order in which the servers are listed.  If no service is listed and terminology services are needed, the $expand operation should be invoked on the base URL for the payer."

* extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode named entryMode 0..* MS
* extension[entryMode].valueCode from $sdcEntryMode (required) 

* extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired named signatureRequired 0..1 MS
* extension[signatureRequired] ^short = "There's a cost to support this."
* extension contains http://hl7.org/fhir/StructureDefinition/cqf-library named cqf-library 0..* MS
* extension[cqf-library] ^short = "The library can contain CQL, FHIRPath or x-fhir-query. The implementers must handle any of the above."
* extension[cqf-library].valueCanonical only Canonical(http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-library)
* title.extension contains http://hl7.org/fhir/StructureDefinition/rendering-style named titleRenderingStyle 0..1
* title.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named titleRenderingXhtml 0..1
* effectivePeriod 0..1 MS
  * ^short = "Validity period for the Questionnaire"

* item.extension[terminologyServer] ^comment = "Multiple repetitions are available to support availability (one server might be down) as well as to accommodate the possibility that different servers might be needed for different value sets.  In either case, client behavior is to try different servers from the available list until one is successful.  There is no implication to the order in which the servers are listed.  If no service is listed and terminology services are needed, the $expand operation should be invoked on the base URL for the payer."


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRQuestionnairePackageBundle.fsh

Profile: DTRQuestionnairePackageBundle
Parent: Bundle
Id: DTR-QPackageBundle
Title: "DTR Questionnaire Package Bundle"
Description: "This profile represents the Bundle of Questionnaires and Libraries returned in a [$questionnaire-package](OperationDefinition-questionnaire-package.html) response."
// * status = #active

* obeys dtrb-1
* type = #collection

* entry 1..*
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains
    questionnaire 1..1 MS and
    questionnaireResponse 0..1 MS and
    valueSet 0..* MS and
    library 0..* MS 
    
* entry[questionnaire] ^short = "SHALL have one and only one Questionnaire"
* entry[questionnaire].resource 1..1
* entry[questionnaire].resource only Questionnaire

* entry[questionnaireResponse] ^short = "MAY have one QuestionnaireResponse"
* entry[questionnaireResponse].resource 1..1
* entry[questionnaireResponse].resource only QuestionnaireResponse

* entry[valueSet] ^short = "MAY have ValueSets"
* entry[valueSet].resource 1..1 
* entry[valueSet].resource only ValueSet

* entry[library] ^short = "MAY have Libraries"
* entry[library].resource 1..1 
* entry[library].resource only Library

---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRQuestionnaireResponse.fsh

Profile:        DTRQuestionnaireResponse
Parent:         SDCQuestionnaireResponse
Id:             dtr-questionnaireresponse
Title:          "DTR Questionnaire Response"
Description:    "Enforces DTR requirements on a completed or partially completed QuestionnaireResponse, including allowing the response to be linked to the relevant order, coverage, etc. and enforcing constraints applicable to the DTR context."

* ^meta.versionId = "10"
* ^meta.lastUpdated = "2023-08-21T11:10:05.000-07:00"
* ^text.status = #additional
* ^text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>The QuestionnaireResponse resource is used to represent the information supplied by the provider.</p></div>"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2023-08-21T02:27:35+00:00"

* extension[signature] MS

* extension contains http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/qr-context named context 2..*
* extension[context] ^short = "Identifies the orders, coverages, and or other resources associated with the specified QuestionnaireResponse. The QuestionnaireResponse SHALL have at least one context that refers to a patient Coverage AND at least one context that refers to a Request resource or Encounter"

* extension contains CRDCoverageInformation named coverage-information 0..* MS
* extension[coverage-information] ^short = "Coverage Info"

* extension contains http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/intendedUse named intendedUse 1..* 
* extension[intendedUse] ^short = "Indicates how the EHR is to use the information with respect to the associated orders/records."

* basedOn 0..0
* partOf 0..0

* questionnaire 1..1

* subject 1..1
* subject only Reference($CRDPatient)

* author only Reference(Device or $CRDPatient or USCorePractitionerProfile or HRexPractitionerRole or $CRDOrganization or RelatedPerson)

* item 1..*
* item.extension[ItemSignature] MS

* item.answer.extension[itemAnswerMedia] MS
* item.answer.extension[ordinalValue] MS
* item.answer.extension contains http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/information-origin named origin 1..1 MS
* item.answer.extension contains http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/containedReference named containedReference 0..1 MS
* item.answer.extension[containedReference] ^short = "Contain the reference?"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRQuestionnaireResponseBundle.fsh

Profile: DTRQuestionnaireResponseBundle
Parent: Bundle
Id: DTR-QRBundle
Title: "DTR Questionnaire Response Bundle"
Description: "This profile represents the Bundle created by EHRs for transmission of a QuestionnaireResponse and associated resources to PAS, for claim submission, etc.."
// * status = #active

* obeys dtrb-2
* type = #collection


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRSearchParameters.fsh

Instance: qr-context
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/qr-context"
* version = "1.0.0"
* name = "QRcontext"
* status = #active
* description = "Allows finding QuestionnaireResponses that contain information relevant to a particular appointment, encounter or order."
* jurisdiction = urn:iso:std:iso:3166#US
* code = #context
* base = #QuestionnaireResponse
* type = #reference
* expression = "QuestionnaireResponse.extension.where(url = 'http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/qr-context').value"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRStandardQuestionnaire.fsh

Profile: DTRStdQuestionnaire
Parent: sdc-questionnaire
Id: dtr-std-questionnaire
Title: "DTR Standard Questionnaire"
Description: "Takes a subset of extensions and constraints from the SDC [rendering](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-render.html), [behavior](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-behave.html), and [population](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-pop-exp.html) profiles, reflecting agreed expectations around which data elements might be relevant as well as which must be supported for DTR purposes."

* ^purpose = "Elements that are not mustSupport are presented here as elements that may be of interest to certain payers, but can only be used if the payer is aware that the invoking EHR or SMART App can support them.  Further guidance on the use of these elements should be found in the underlying [SDC](http://hl7.org/fhir/uv/sdc/STU3/) specification."
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2021-11-12T17:01:59.000+00:00"
* ^text.status = #additional
* ^text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>The Questionnaire resource is used to represent the information needs that a payer has to satisfy their documentation requirements and/or rules.</p></div>"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-11-12T02:27:35+00:00"
* text.div ^comment = "The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, 'anchor' elements (either name or href), images and internally contained stylesheets. The XHTML content SHALL NOT contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects."
* subjectType 1..1
* subjectType = #Patient

/////////////////////////
// Rendering extensions 
* extension contains http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive named styleSensitive 0..1
* extension[styleSensitive].valueBoolean = false
* extension[styleSensitive] ^comment = "If set to true, all systems that claim to support this extension and that render elements from the resource SHALL either render the content as required by the style extensions (style, xhtml and markdown or shall indicate to the user that the resource (or specific elements in the resource) cannot be appropriately rendered by the system."

* extension[terminologyServer] MS 
* extension[terminologyServer] ^comment = "Multiple repetitions are available to support availability (one server might be down) as well as to accommodate the possibility that different servers might be needed for different value sets.  In either case, client behavior is to try different servers from the available list until one is successful.  There is no implication to the order in which the servers are listed.  If no service is listed and terminology services are needed, the $expand operation should be invoked on the base URL for the payer."
* title.extension contains http://hl7.org/fhir/StructureDefinition/rendering-style named titleRenderingStyle 0..1
* title.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named titleRenderingXhtml 0..1
* text 1..1 
* effectivePeriod MS
* item.prefix.extension contains http://hl7.org/fhir/StructureDefinition/rendering-style named itemPrefixRenderingStyle 0..1
* item.text.extension contains http://hl7.org/fhir/StructureDefinition/rendering-style named itemTextRenderingStyle 0..1
* item.prefix.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named itemPrefixRenderingXhtml 0..1
* item.text.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named itemTextRenderingXhtml 0..1 MS

* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemMedia named itemMedia 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-optionalDisplay named itemOptionalDisplay 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-shortText named shortText 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-hidden named itemHidden 0..1 MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-openLabel named openLabel 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl named itemControl 0..1 MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-choiceOrientation named choiceOrientation 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory named displayCategory 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-supportLink named supportLink 0..* MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-choiceColumn named choiceColumn 0..*
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-width named width 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue named sliderStepValue 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/entryFormat named entryFormat 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-collapsible named collapsible 0..1
* item.answerOption.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemAnswerMedia named itemAnswerMedia 0..1
* extension[assemble-expectation] 0..0

* extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-entryMode named entryMode 0..* MS
* extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-endpoint named endpoint 0..0
* extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired named signatureRequired 0..1 MS
* extension[signatureRequired] ^short = "There's a cost to support this."
* extension contains http://hl7.org/fhir/StructureDefinition/targetConstraint named constraint 0..* 
* extension contains http://hl7.org/fhir/StructureDefinition/cqf-library named cqf-library 0..* MS
* extension[cqf-library] ^short = "The library can contain CQL, FHIRPath or x-fhir-query. The implementers must handle any of the above."
* extension[cqf-library].valueCanonical only Canonical(http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-library)
* extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-launchContext named launchContext 0..* MS
* extension contains http://hl7.org/fhir/StructureDefinition/variable named variable 0..* MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-usageMode named usageMode 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired named itemSignatureRequired 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs named minOccurs 0..1 
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs named maxOccurs 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/minLength named minLength 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/regex named regex 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/minValue named minValue 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/maxValue named maxValue 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-minQuantity named minQuantity 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-maxQuantity named maxQuantity 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/maxDecimalPlaces named maxDecimalPlaces 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/mimeType named mimeType 0..1 MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/maxSize named maxSize 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-answerOptionsToggleExpression named answerOptionsToggleExpression 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-unitOption named unitOption 0..* MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-unitValueSet named unitValueSet 0..1 MS
* item.extension[unitValueSet] ^comment = "Provide either unitOption(s) or unitValueSet. If either of the extensions are present, the units for a Quantity element are constrained to only the units listed by the extensions - i.e. it is treated as a \"required\", not an \"extensible\" binding. In the absence of either, any unit is valid. See additional guidance and examples in the [SDC implementation guide](http://hl7.org/fhir/uv/sdc/behavior.html#unitValueSet). If this extension present and an answer is provided for the question item in the QuestionnaireResponse, then the valueQuantity **SHALL** have a Quantity.code and Quantity.system that match the Coding.code and system of one of the allowed values if the Coding has a code and/or system. If the Coding only has a display, then the Quantity.unit must match. (Note that Coding with only a display is strongly discouraged.) If there is a match on code and system, but no match on display/unit, systems MAY raise a warning. However, because of translation and bandwidth considerations, some systems **MAY** opt to drop the unit or express it in an alternate language. Validation of the Quantity unit **MAY** be performed by using the $validateCode operation, populating the elements passed into the operation from the Quantity.code, system and unit elements."
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-referenceResource named referenceResource 0..* MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-referenceProfile named referenceProfile 0..* MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-candidateExpression named candidateExpression 0..1 MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-lookupQuestionnaire named lookupQuestionnaire 0..1 MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/targetConstraint named itemConstraint 0..*
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-initialExpression named initialExpression 0..1 MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression named calculatedExpression 0..1 MS
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-enableWhenExpression named enableWhenExpression 0..1 MS
* item.text.extension contains $cqf-expression named itemTextCqfExpression 0..1
* item.enableWhen 0..* MS
* item.enableBehavior 0..1 MS
* item.required.value ^mustSupport = false
* item.required.value.extension contains $cqf-expression named requiredExpression 0..1
* item.repeats.value ^mustSupport = false
* item.repeats.value.extension contains $cqf-expression named repeatsExpression 0..1
* item.readOnly.value ^mustSupport = false
* item.readOnly.value.extension contains $cqf-expression named readOnlyExpression 0..1
* item.answerValueSet.value ^mustSupport = false
* item.answerValueSet.value.extension contains $cqf-expression named answerValueSetExpression 0..1
* item.answerOption.value[x] 1..1 MS
* item.answerOption.value[x].extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named answerOptionRenderingXhtml 0..1 MS
* item.answerOption.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-optionExclusive named optionExclusive 0..1 MS
* item.answerOption.extension contains http://hl7.org/fhir/StructureDefinition/ordinalValue named ordinalValue 0..1

* extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-itemPopulationContext named itemPopulationContext 0..* MS
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-unit named unit 0..1
* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-contextExpression named contextExpression 0..* MS


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRTempCodes.fsh

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Code Systems 
// ************************************************************
CodeSystem: DTRTempCodes
Id: temp
Title: "DTR Temporary Codes"
Description: "Codes temporarily defined as part of the DTR implementation guide.  These will eventually migrate into an officially maintained terminology (likely HL7's UTG code systems)."
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^hierarchyMeaning = #is-a
* ^content = #complete

* #auto         "Auto populated"        "Information was auto-populated"
  * #override   "Auto with override"    "Information was auto-populated but overridden by a human"
* #manual       "Manual entry"          "Information was manually entered by a human"

* #provider-src "Provider-sourced"      "The metric information was captured from the provider system's perspective"
* #payer-src    "Payer-sourced"         "The metric information was captured from the payer system's perspective"
* #DTRApp-src   "DTRApp-sourced"        "The metric information was captured from the Native or SMART on FHIR App's perspective"

* #launch       "Launch session"        "The action described was the launch of a DTR session."
* #qpackage     "Questionnaire Package operation" "The action described was a Questionnaire Package operation."
* #mrquery      "Medical Record Query"            "The action described was a medical record query."
* #nextq        "Next Question operation"         "The action described was a call for the next question for an Adaptive Questionnaire."
* #userresponse "User Response"         "The action described was an opportunity for the user to review Questionnaire answers and/or enter or override answers."
* #storeqr      "Store QuestionnaireResponse"     "The action described was the storage of a Questionnaire Response in the EHR."

* #crdlaunch    "CRD launch"            "launching with the context of an order or other resource populated with coverage-information extension when there is no associated pre-existing QR"
* #relaunch     "Re-launch"             "launching from the context of an order/resource with a pre-existing associated QR or launching in the context of a QR directly"
* #salaunch     "Standalone launch"     "launching from the context of an order/resource with no pre-existing associated QR and no coverage-information extension"
* #cdexlaunch   "CDex launch"           "launching from the context of a Task specifying a questionnaire url or context id when the Task does not yet have a Task output"

// * #pa           "include-pa"            "The information in this QuestionnaireResponse should be packaged into a Bundle and submitted as part of (or in association with) a prior authorization for the associated request resource(s)."
// * #claim        "include-claim"         "The information in this QuestionnaireResponse should be packaged into a Bundle and submitted as part of (or in association with) the insurance claim for the services ordered by the associated request resource(s)."
// * #order        "include-order"         "The information in this QuestionnaireResponse should be packaged into a Bundle and submitted along with (or referenced as supporting information to) the associated request resource(s)."
// * #retain       "retain-documentation"  "The information in this QuestionnaireResponse should be retained within the DTR as supporting evidence of the medical necessity of the associated request resource(s)."

// Coverage guidance - auth
// * #no-auth                 "No Prior Authorization"            "The ordered service does not require prior authorization"
// * #auth-needed             "Prior Authorization Needed"        "The ordered service will require prior authorization" 
//   * #performpa             "Performer Prior Authorization"     "Prior authorization is needed for the service, however such prior authoriation must be initiated by the performing (rather than ordering) provider."
// * #satisfied               "Authorization Satisfied"           "While prior authorization would typically be needed, the conditions evaluated by prior authorization have already been evaluated and therefore prior authorization can be bypassed"

// Coverage guidance - doc
// * #no-doc                  "No Additional Documentation"       "There is no requirement for any additional documentation"
// * #clinical                "Clinical Documentation"            "Details most likely to originate from a clinician are required to satisfy additional documentation requirements, determine coverage and/or prior auth applicability - e.g. via DTR by clinician.  Indicates that the CRD client should expose the need to launch DTR to clinical users."
// * #admin                   "Administrative Documentation"      "Administrative details not likely to require clinical expertise are needed to satisfy additional documentation requirements, determine coverage and/or prior auth applicability - e.g. via DTR by back-end staff.  Indicates that while the CRD client might expose the ability to launch DTR as an option for clinical users, it should be clear that clinical input is not necessary and deferring the use of DTR to back-end staff is perfectly appropriate.  Some CRD clients might be configured (based on provider preference) to not even show clinicians the option to launch."
// * #both                    "Administrative & clinical doc"     "Both clinical and administrative details are required to satisfy additional documentation requirements, determine coverage and/or prior auth applicability.  Equivalent to the union of #admin and #clinical."

// Coverage guidance - info needed
// * #performer               "Performer Needed"                  "Information about who (specifically, or at least performer type and affiliation) is necessary to make a determination of coverage and/or prior auth expectations"
// * #location                "Location Needed"                   "Information about where (specific clinic/site or organization) is necessary to make a determination of coverage and/or prior auth expectations"
// * #timeframe               "Timeframe Needed"                  "Information about when the service will be performed that is more granular than the order effective period is necessary to make a determination of coverage and/or prior auth expectations"

// Coverage guidance - covered
// * #covered                 "Covered"                           "Regular coverage applies"
// * #not-covered             "Not covered"                       "No coverage or possibility of coverage for this service)"
// * #conditional             "Conditional"                       "Decision cannot be made without more information (more detailed code, service rendering information, etc.)"


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/DTRValuesets.fsh

///**********************************************************************************************
// Value Sets
// ************************************************************
ValueSet: DTRInformationOrigins
Id: informationOrigins
Title: "Information Origins Value Set"
Description: "Codes describing the possible origination of information."
* ^experimental = false
* DTRTempCodes#auto
* DTRTempCodes#override
* DTRTempCodes#manual

// ************************************************************
ValueSet: MetricsInformationOrigins
Id: MetricsinformationOrigins
Title: "Information Human Origins Value Set"
Description: "Questionnaire actions taken by human actors."
* ^experimental = false
* DTRTempCodes#override
* DTRTempCodes#manual

// ************************************************************
ValueSet: MetricSource
Id: metric-Source
Title: "Metric Source"
Description: "A list of codes indicating the perspective from which metric data was captured."
* ^status = #active
* ^experimental = false
* DTRTempCodes#payer-src
* DTRTempCodes#provider-src
* DTRTempCodes#DTRApp-src

// ************************************************************
ValueSet: MetricLaunchMode
Id: metric-launchmode
Title: "Metric Launch Mode"
Description: "A list of codes indicating how DTR was launched."
* ^status = #active
* ^experimental = false
* DTRTempCodes#crdlaunch
* DTRTempCodes#relaunch
* DTRTempCodes#salaunch
* DTRTempCodes#cdexlaunch

// ************************************************************
ValueSet: MetricAction
Id: metric-Action
Title: "Metric Action"
Description: "A list of codes indicating the DTR action performed by a system."
* ^status = #active
* ^experimental = false
* DTRTempCodes#launch
* DTRTempCodes#qpackage
* DTRTempCodes#mrquery
* DTRTempCodes#nextq
* DTRTempCodes#userresponse
* DTRTempCodes#storeqr


---

File: repos/HL7_SLASH_davinci-dtr/input/fsh/expansion-parameters-us-dtr.fsh

Instance: expansion-parameters-us-dtr
InstanceOf: Parameters
Title: "Parameters - SNOMED US Version"
Description: "Parameters - SNOMED US Version"
Usage: #definition
* parameter[0].name = "profile-url"
* parameter[=].valueString = "dc8fd4bd-091a-424a-8a3b-6198ef136891"
* parameter[+].name = "system-version"
* parameter[=].valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/allartifacts.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

Compliance with this implementation guide requires compliance with several profiles, extensions, and value sets.  This page provides an overview of where these artifacts can be found.

The FHIR artifacts used by DTR are organized according to whether the content was developed as part of the US Core implementation guides or are specific to this DTR implementation guide.  As a result, there are 2 different lists of artifacts - one for this *Da Vinci implementation guide* and one for the *US Core implementation guide*.

### Artifact Lists
<table style="border: none;">
  <tr>
    <td style="border: none;"/><td style="border: none;"><a href="artifacts.html">DTR-Specific Artifacts</a></td>
  </tr>
  <tr>
    <td style="border: none;"/><td style="border: none;"><a href="{{site.data.fhir.ver.uscore7}}">US Core 7.0.0 artifacts</a></td>
  </tr>
  <tr>
    <td style="border: none;"/><td style="border: none;"><a href="{{site.data.fhir.ver.uscore6}}">US Core 6.1.0 artifacts</a></td>
  </tr>
  <tr>
    <td style="border: none;"/><td style="border: none;"><a href="{{site.data.fhir.ver.uscore3}}">US Core 3.1.1 artifacts</a></td>
  </tr>
</table>

These FHIR artifacts define the data that can be utilized by DTR Apps when executing CQL, SMART on FHIR, or queries from Payers by means of operations.  (e.g., `Questionnaire`, `QuestionnaireResponse`, `$questionnaire-package`, etc.)

<div markdown="1" class="pbox">
The artifacts are of four types:

* [Profiles]({{site.data.fhir.path}}profiling.html) constrain FHIR resources to reflect DTR requirements
* [Extensions]({{site.data.fhir.path}}extensibility.html) define additional data elements that can be conveyed as part of a resource
* [Code Systems]({{site.data.fhir.path}}codesystem.html) define terminologies to be used in one or more of the profiles
* [Value Sets]({{site.data.fhir.path}}valueset.html) define the specific subsets of both DTR-defined and other code systems that must be (or are recommended to be) used within one or more profile elements
</div>
<br>

For this implementation guide, Must Support means conformance to both the [US Core]({{site.data.fhir.ver.uscore3}}) guidance, as well as the [HRex Implementation Guide](http://build.fhir.org/ig/HL7/davinci-ehrx/) (See this guide's [US Core Implementation Guide](background.html#us-core-implementation-guide) background)

---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/background.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

### Underlying Technologies
This guide is based on the HL7 FHIR standard, the US Core [3.1.1]({{site.data.fhir.ver.uscore3}}) and [6.1]({{site.data.fhir.ver.uscore6}}) Implementation Guides, as well as the [SMART on FHIR](http://hl7.org/fhir/smart-app-launch/index.html), [Clinical Quality Language (CQL)](http://cql.hl7.org/N1/), and [Structured Data Capture (SDC)](http://hl7.org/fhir/uv/sdc/STU3/) specifications which build additional capabilities on top of FHIR. This architecture is intended to maximize the number of provider systems that conform to this guide, as well as to allow for easy growth and extensibility of system capabilities in the future.

Implementers of this specification therefore need to understand some basic information about these specifications.

#### FHIR
This IG uses terminology, notations, and design principles that are specific to FHIR. It's important to be familiar with some of the basic principles of FHIR as well
as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read the following prior to reading the rest of this IG.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html) or [Clinical introduction]({{site.data.fhir.path}}overview-clinical.html) (as applicable)
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html) and additional [IG reading guidance](https://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html)
* [Base resource]({{site.data.fhir.path}}resource.html)

This IG supports the [R4](http://hl7.org/fhir/R4/index.html) version of the FHIR standard.

This IG leverages and builds on the US Core [3.1.1]({{site.data.fhir.ver.uscore3}}), [6.1]({{site.data.fhir.ver.uscore6}}), and [7.0]({{site.data.fhir.ver.uscore7}}) IGs defined by HL7 for sharing human EHR data in the US.  Implementers need to familiarize themselves with the profiles in US Core, as well as the underlying [Structured Data Capture (SDC)](https://hl7.org/fhir/uv/sdc/STU3/index.html) profiles being used. 

<table style="border: none;">
  <tr>
    <td style="border: none;"><b>FHIR Version:</b></td>
    <td style="border: none;"><a href="https://hl7.org/fhir/R4/">FHIR R4 (4.0.1)</a></td>
  </tr>
  <tr>
    <td style="border: none;"><b>US Core:</b></td>
    <td style="border: none;"><a href="{{site.data.fhir.ver.uscore7}}">Release 7.0</a></td>
  </tr>
  <tr>
    <td style="border: none;"/>
    <td style="border: none;"><a href="{{site.data.fhir.ver.uscore6}}">Release 6.1</a></td>
  </tr>
  <tr>
    <td style="border: none;"/>
    <td style="border: none;"><a href="{{site.data.fhir.ver.uscore3}}">Release 3.1.1</a></td>
  </tr>
  <tr>
    <td style="border: none;"><b>Profiles:</b></td>
    <td style="border: none;"><a href="StructureDefinition-dtr-std-questionnaire.html">Standard Questionnaire</a></td>
  </tr>
  <tr>
    <td style="border: none;"/>
    <td style="border: none;"><a href="StructureDefinition-dtr-questionnaire-adapt.html">Adaptive Questionnaire</a></td>
  </tr>
  <tr>
    <td style="border: none;"/>
    <td style="border: none;"><a href="StructureDefinition-dtr-questionnaireresponse.html">QuestionnaireResponse</a></td>
  </tr>
  <tr>
    <td style="border: none;"/>
    <td style="border: none;"><a href="https://hl7.org/fhir/us/davinci-pas/StructureDefinition-profile-task.html">Task (PAS)</a></td>
  </tr>
</table>
<br>
Other resources may also be accessed as part of the CQL rules.

This IG also draws on content from the Davinci Health Record Exchange (HRex) and Structured Data Capture (SDC) implementation guides.

Implementers should also familiarize themselves with the FHIR resources used within the guide:

| **Resource** | **Relevance** |
| [Bundle]({{site.data.fhir.path}}bundle.html) | Used when delivering collections of resources for Questionnaires and also used for queries |
| [CapabilityStatement]({{site.data.fhir.path}}capabilitystatement.html) | Used to define conformance expectations for this guide |
| [CodeSystem]({{site.data.fhir.path}}codesystem.html) | Used to define custom codes specific to this guide |
| [Coverage]({{site.data.fhir.path}}coverage.html) | Used to identify the member and the relevant insurance coverage to a payer |
| [Library]({{site.data.fhir.path}}library.html) | Used to encapsulate the necessary CQL returned by the Questionnaire Package operation |
| [OperationDefinition]({{site.data.fhir.path}}operationdefinition.html) | Used to define the necessary operations in this guide |
| [Parameters]({{site.data.fhir.path}}parameters.html) | Supporting information for the input and output for operations |
| [Patient]({{site.data.fhir.path}}patient.html) | Demographic information relevant to all requests |
| [Practitioner]({{site.data.fhir.path}}practitioner.html) | Used when identifying providers in Encounters, Tasks, and all requests |
| [Questionnaire]({{site.data.fhir.path}}questionnaire.html) | Used to support the question structure to be answered |
| [QuestionnaireResponse]({{site.data.fhir.path}}questionnaireresponse.html) | Used to support the capture of answers to a corresponding Questionnaire |
| [SearchParameter]({{site.data.fhir.path}}searchparameter.html) | Used in finding QuestionnaireResponses that contain information relevant to a particular appointment, encounter or order |
| [ServiceRequest]({{site.data.fhir.path}}servicerequest.html) | One of the resources that can be involved in DTR context |
| [StructureDefinition]({{site.data.fhir.path}}structuredefinition.html) | Used when profiling resource and defining extensions |
| [ValueSet]({{site.data.fhir.path}}valueset.html) | Used to define collections of codes used by DTR profiles |


  
#### US Core Implementation Guide
Implementers will need the knowledge of US Core [3.1.1]({{site.data.fhir.ver.uscore3}}), [6.1]({{site.data.fhir.ver.uscore6}}), and [7.0]({{site.data.fhir.ver.uscore7}}) IGs to access information for pre-population via CQL calls to *21st Century* compliant FHIR APIs. Some of the implementations will need to support US Core requirements.  (Refer to the [CapabilityStatements](artifacts.html#behavior-capability-statements).)   

#### SMART on FHIR and Native Applications
Guidance is being provided to allow DTR functionality to be invoked outside of regular EHR clinical workflows using a SMART on FHIR app or an EHR-based "Native" app to provide a consistent way of evaluating payer rules and documentation requirements across EHR implementations. As such client implementers creating a SMART App will also need to be familiar with the [SMART on FHIR](http://hl7.org/fhir/smart-app-launch) specification. (Payer implementers only need to be familiar with the SMART on FHIR specification if they plan to develop SMART apps for launch by CDS Hooks or other purposes.)  

In some cases, staff may wish to invoke DTR in a "what-if" scenario based on recommendations/plans for an upcoming visit.  Such recommendations might be from decision support (such as ImmunizationRecommendation or a CarePlan with an intent of 'proposed') or from standard protocols (e.g., "this patient is due for a pap smear").  In such cases, the EHR can support automated generation of 'draft' requests based on the descision support or protocol resources and use them when invoking DTR.

#### CQL 
[Clinical Quality Language (CQL)](http://cql.hl7.org/N1/) is used to query the Electronic Health Record (EHR) FHIR server to pre-populate the DTR Questionnaire and may also be used to guide which questions need to be answered.  DTR Servers will need to construct Questionnaires containing CQL references and CQL libraries that perform the necessary logic.  DTR clients will need to be able to execute the proved CQL.

### Architectural approach
This IG leverages several architectural to FHIR data exchange:
* RESTful access from SMART app to EHR data and storage of QuestionnaireResponses
* Operation for next question
* Operation to retrieve the Questionnaire packages from payers
* Operation to submit errors related to the Questionnaire packages retrieved
  
The choice of using REST to access and store data from the SMART app is driven by the SMART on FHIR architecture.
  
The choice of using operations for [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) for adaptive forms was made by the SDC implementation guide.
  
The decision tree navigation in the [HRex Approaches to Exchanging Data decision tree](https://hl7.org/fhir/us/davinci-hrex/STU1.1/exchanging.html) that led to these approaches where decisions needed to be made as part of DTR are as follows:  

Access to payer Questionnaire package -
* Data retrieval is initiated by the consumer (SMART app/EHR).
* The app/EHR will have a direct connection to the payer – there is required to be a single defined endpoint for the payer.  Any routing will be behind the scenes.
* No human intervention in return of data.
* CDS Hooks doesn’t make sense given that the calls aren’t really decision support for a user action.
* Data is not necessarily pre-existing.  The questionnaire *could* be assembled on the fly based on context.
* There’s no need for routing. This isn’t a standard message or operation. This must be synchronous.  In the end, choose the ‘lighter’ approach which is an operation.
  
Reporting of Questionnaire issues - 
* Data sharing is initiated by a data source (EHR or app that has found the Questionnaire issue).
* The transmission of the data isn’t configured by the payer – polling or subscription wouldn’t really work.
* The app/EHR will have a direct connection to the payer – there is required to be a single defined endpoint for the payer.  Any routing will be behind the scenes.
* The data source doesn’t control how (or if) the reported error is stored.


---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/burden.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

### Da Vinci
Da Vinci is an HL7-sponsored project that brings together the U.S. payer, providers, and technology suppliers (including EHR vendors)  to help payers and providers to positively impact clinical, quality, cost, and care management outcomes using FHIR-related technologies. The project organizes meetings (face-to-face and conference calls) as well as Connectathons to find ways to leverage FHIR technologies to support and integrate value-based care (VBC) data exchange across communities. Da Vinci identifies value-based care use cases of interest to its members and the broader community.

The process that Da Vinci has adopted includes:
1. identify business, clinical, technical and testing requirements.
2. develop and ballot a FHIR based implementation guide (IG).
3. develop a reference implementation (RI) that is used to demonstrate that the concepts in the IG are possible to implement.
4. pilot the standard.
5. support the production use of the IG to enable exchange of data to support interoperability for value-based care.

Additional information about Da Vinci, its members, the use cases and the implementation guides being developed can all be found on the [HL7 website](http://www.hl7.org/about/davinci). Meeting minutes and other materials can be found on the [Da Vinci Confluence page](https://confluence.hl7.org/display/DVP).

{% include burdenReduction.md %}



---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/changehistory.md

### Release 2.1.0
<p><b>The following issues are addressed resulting from the STU Update Comment period review:</b></p>
<ul>
    <li>
  <a href="https://jira.hl7.org/browse/FHIR-46554">FHIR-46554</a>:
   Include questionnaire details in the example
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46646">FHIR-46646</a>:
   Conformance requirement on subjective determination
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46750">FHIR-46750</a>:
   Clarify that CQL expectations are for app/EHR, not payer
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46754">FHIR-46754</a>:
   $questionnaire-package narrative and DTRQuestionnairePackageBundle do not align.
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-47250">FHIR-47250</a>:
   Clarify adaptive architecture
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-47706">FHIR-47706</a>:
   Add support for US Core 7
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-47995">FHIR-47995</a>:
   Must Support guidance section should be moved from Specification page to a 'Conformance Expectations' page
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48314">FHIR-48314</a>:
   providers need a way to indicate if they want pre-emptive prior auth as part of adaptive forms
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48487">FHIR-48487</a>:
   Replace EHR with Provider HIT
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48488">FHIR-48488</a>:
   Ambiguous SHALL on resource support requirement
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48490">FHIR-48490</a>:
   $questionnaire-response output parameter name inconsistency
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48494">FHIR-48494</a>:
   Include CMS requirements
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48495">FHIR-48495</a>:
   CMS enforcement discretion comes out of nowhere
  </li> 

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48499">FHIR-48499</a>:
   add or staff to better capture people who populate
  </li> 

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48501">FHIR-48501</a>:
   Change SHOULD to SHALL
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48504">FHIR-48504</a>:
   Questionnaire-package Bundle Example not updated to only have one questionnaire
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48506">FHIR-48506</a>:
   SHOULD have CQL logic
  </li>
 
   <li>
  <a href="https://jira.hl7.org/browse/FHIR-48508">FHIR-48508</a>:
   change conformance language for the retrieving launch context
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48510">FHIR-48510</a>:
   suggest adding "including appeals"
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48511">FHIR-48511</a>:
   Change SHOULD to SHALL
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48513">FHIR-48513</a>:
   No examples of Questionnaire Package Bundles with a QuestionnaireResponse
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48515">FHIR-48515</a>:
   Explain Reasoning behind the difference in Questionnaire Adaptive extension cardinality
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48516">FHIR-48516</a>:
   Clarify QuestionnaireResponse contained Questionnaire Requirements for adaptive questionnaires
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48517">FHIR-48517</a>:
   Library and ValueSet Caching requirements for DTR Apps and Full EHRs
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48518">FHIR-48518</a>:
   Are there required DTR client responses to an added coverage-information extension?
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48519">FHIR-48519</a>:
   Clarify whether FHIRPath is allowed in pre-population expressions
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48520">FHIR-48520</a>:
   Clarify use of PH Alternate Expression Extension
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48521">FHIR-48521</a>:
   Determining support for payer questionnaires
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48523">FHIR-48523</a>:
   Is the "Retrieving Launch Context Information" informational?
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48524">FHIR-48524</a>:
   Constraining Queries example clarification
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48686">FHIR-48686</a>:
   Profile $next-question (or create a new operation) so there's an actual use for the DTR adaptive questionnaire profile
  </li> 

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48694">FHIR-48694</a>:
   Clarify ValueSet and $expand Guidance
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48703">FHIR-48703</a>:
   Coverage context search parameter inconsistencies
  </li> 

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48728">FHIR-48728</a>:
   Inconsitency between contexts in CRD and DTR
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-48744">FHIR-48744</a>:
   Align endpoint discovery language w/ CRD
  </li>

</ul>


### Release 2.1.0-preview
<p><b>The following issues are addressed in preparation for this STU Update:</b></p>
<ul>
  <li>
    <i> Multiple changes have been incorporated to provide support for both US Core 3.1.1 and 6.1 </i>
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-44930">FHIR-44930</a>:
  extra period breaks out a requirement in section 7.10.2 of the formal spec
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-45010">FHIR-45010</a>:
  Why does OperationOutcome repeat
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46288">FHIR-46288</a>:
  Identifying the minimum resource read access ought to be SHALL instead of 'will'
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-45945">FHIR-45945</a>:
  Clarify links to base FHIR resources in Background section
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-45075">FHIR-45075</a>:
  DTR should not point to CDS Hook security guide
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-44929">FHIR-44929</a>:
  Ambiguity within the formal specification on use of SMART on FHIR Backend Services
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-42809">FHIR-42809</a>:
  allowing linking to a portal rather than building out a questionnaire is not in line with regulation, legislation, or even the spirit of IG
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-45020">FHIR-45020</a>:
  $questionnaire-package Operation Definition incorrectly states to return warning in outer Bundle
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46627">FHIR-46627</a>:
  Include Burden Reduction common narrative for Enforcement Discretion
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46569">FHIR-46569</a>:
  Use EHR rather than EMR throughout
  </li>
    
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46525">FHIR-46525</a>:
  Discrepancy in DTR Package output definition
  </li>
      
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-44789">FHIR-44789</a>:
  Can DTR be satisfied by a pre-existing QR?
  </li>
      
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-45967">FHIR-45967</a>:
  questionnaire-package bundle needs to allow for QuestionnaireResponses
  </li>
      
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46441">FHIR-46441</a>:
  Add endpoint discovery expectations
  </li>
      
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46285">FHIR-46285</a>:
  Need to formalize expectation around use of 'questionnaire-adaptive' extension
  </li>
      
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-46002">FHIR-46002</a>:
  Provide guidance on how to transmit FHIR resources to Adaptive Questionnaires
  </li>
</ul>

<div markdown="1">

### Release 2.0.1 
<p><b>The following issues are addressed in this technical correction:</b></p>
<ul>
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-43030">FHIR-43030</a>:
  Information Origin Extension challenged to be supported by SMART
  </li>
</ul>
</div>

### Release 2.0.0
<p><b>The following issues are addressed resulting from this ballot:</b></p>
<ul>
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-24714">FHIR-24714</a>:
  This is a security risk as described in the last ballot. - DTR #60
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-33328">FHIR-33328</a>:
  Need clarification of what the DTR Task page is actually for
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36117">FHIR-36117</a>:
  DTR Document Reference R4 Resource Profile Inappropriately Marks Elements As Must Support
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36220">FHIR-36220</a>:
  CQL execution errors in an automated process should not require an end user to be notified
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36225">FHIR-36225</a>:
  statement doesn't quite make sense
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36227">FHIR-36227</a>:
  fix link (& therefore normative requirement) to DTR Questionnaire, instead of base CQF questionnaire
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36228">FHIR-36228</a>:
  Need clearer expectations around reusing and refreshing the QuestionnaireResponse
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36355">FHIR-36355</a>:
  Refactor the overview
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36371">FHIR-36371</a>:
  Clarify 'required' documentation
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36378">FHIR-36378</a>:
  Clarify CQL version expectations
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36481">FHIR-36481</a>:
  STU note should go away
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36484">FHIR-36484</a>:
  Remove SMART on FHIR applications and servers section
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36489">FHIR-36489</a>:
  Requesting user identity stuff belongs in section on launch
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36522">FHIR-36522</a>:
  add to sentence 
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36523">FHIR-36523</a>:
  change SHOULD to SHALL
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36525">FHIR-36525</a>:
  Change MAY to SHALL
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36528">FHIR-36528</a>:
  it is essential that payers create extensive CQL for payer rule automation
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36529">FHIR-36529</a>:
  Change MAY to SHOULD
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36530">FHIR-36530</a>:
  refine verbiage 
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36532">FHIR-36532</a>:
  Operation needs a detailed description
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36139">FHIR-36139</a>:
  More clarity around how UM Payer multi party arrangements are handled
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36148">FHIR-36148</a>:
  no template property is defined in appContext, and questionnaire is OPTIONAL
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36150">FHIR-36150</a>:
  is a CRD server the same as a payer API?
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36433">FHIR-36433</a>:
  Should be guidance about the use of versioning
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36439">FHIR-36439</a>:
  Why do we mandate the use of library?
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36445">FHIR-36445</a>:
  Caching guidance needs to be clarified
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36538">FHIR-36538</a>:
  DTR Questionnaire should be removed
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36542">FHIR-36542</a>:
  Context extension needs more definition
   </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36548">FHIR-36548</a>:
  add guidance to value set
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36549">FHIR-36549</a>:
  relaunch for other users
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36550">FHIR-36550</a>:
  Add SHALL save DTR response in EMR to beginning of section
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36551">FHIR-36551</a>:
  change SHOULDs to SHALLs in task creation
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36553">FHIR-36553</a>:
  change from "needs to" to SHALL
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36555">FHIR-36555</a>:
  limit scope
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36624">FHIR-36624</a>:
  attestation concern
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-34121">FHIR-34121</a>:
  Provide a mechanism for Template to specify what to do when DTR ends
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-33224">FHIR-33224</a>:
  Add support for SDC Adaptive forms
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36276">FHIR-36276</a>:
  Security review of SDC Adaptive Forms in DTR
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36492">FHIR-36492</a>:
  Handling updates to Questionnaire.effectivePeriod
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36478">FHIR-36478</a>:
  SDC questionnaire responses will always have a Questionnaire url somewhere
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36527">FHIR-36527</a>:
  refine language 
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36483">FHIR-36483</a>:
  Need to clarify pruning expectations
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36390">FHIR-36390</a>:
  Launch instructions need correction/clarification
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36491">FHIR-36491</a>:
  Drop section on "usage sessions"
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36385">FHIR-36385</a>:
  No guidance on CRD
   </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-40438">FHIR-40438</a>:
  Section on DTR use of US Core has link which points to general US Core page instead of 3.1.1
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-24581">FHIR-24581</a>:
  Identify the subject extension. - DTR #15
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36151">FHIR-36151</a>:
  Again, DTR <-> Payer should use SMART backend services
  </li>
    
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36365">FHIR-36365</a>:
  Downloads should be a separate page
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36394">FHIR-36394</a>:
  CQL logic guidance is misleading
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36367">FHIR-36367</a>:
  Talk about DTR before you talk about CRD
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-40549">FHIR-40549</a>:
  Guidance regarding the Endpoint for adaptive form next question
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36470">FHIR-36470</a>:
  Fix guidance on saving state
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36434">FHIR-36434</a>:
  Revamp endpoint description a bit
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36369">FHIR-36369</a>:
  Payer
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36376">FHIR-36376</a>:
  Fix wording on SDC
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36374">FHIR-36374</a>:
  Should be no conformance rules around CDS Hooks or CRD
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36377">FHIR-36377</a>:
  Clarify language on CQL
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36435">FHIR-36435</a>:
  Remove CRD paragraph
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36362">FHIR-36362</a>:
  "CQL and FHIR Questionnaires SHALL be required" is unclear
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-39504">FHIR-39504</a>:
  Add guidance on endpoint discovery/configuration
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36539">FHIR-36539</a>:
  DTR QuestionnaireResponse should be based on SDC
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36395">FHIR-36395</a>:
  Context needs to talk about hierarchy of expression too.
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36380">FHIR-36380</a>:
  Why is change history wrapped in an STU note?
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36386">FHIR-36386</a>:
  DTR to payer security doesn't belong in CRD links section
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-38837">FHIR-38837</a>:
  Specific issues related to sensitive or patient restricted information
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36138">FHIR-36138</a>:
  Clarify what information is in scope for FHIR CQL support
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36430">FHIR-36430</a>:
  Clarify expectations on missing context
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36300">FHIR-36300</a>:
  Who is responsible for provision of the token
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36482">FHIR-36482</a>:
  Patient must always be in context
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-21006">FHIR-21006</a>:
  DTR should point to SDC, not CQIF Questionnaire
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36479">FHIR-36479</a>:
  Provide proper details on authentication
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36392">FHIR-36392</a>:
  Guidance on CQL isn't quite right
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36379">FHIR-36379</a>:
  Spec *MUST* use mustSupport in its profiles
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36384">FHIR-36384</a>:
  "Profiles" page doesn't really make sense as a page
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36382">FHIR-36382</a>:
  Formal specification page should be revamped
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36447">FHIR-36447</a>:
  Guidance on handling Questionnaire is insufficient
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36364">FHIR-36364</a>:
  Home page should appear on the menu
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36465">FHIR-36465</a>:
  DTR is repeating guidance better covered in SDC
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36360">FHIR-36360</a>:
  Conformance statements don't belong on the home page
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36368">FHIR-36368</a>:
  Conformance language doesn't belong on use-case page
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36410">FHIR-36410</a>:
  Title and content don't jive
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36356">FHIR-36356</a>:
  Adjust note to implementers
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-37949">FHIR-37949</a>:
  Remove all notion of storing work-in-progress on payer
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-40421">FHIR-40421</a>:
  Guidance on this page needs to be rewritten
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36450">FHIR-36450</a>:
  Goal is overstated and user input always required
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36476">FHIR-36476</a>:
  Refactor relaunch documentation
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36349">FHIR-36349</a>:
  Split menu into background and spec
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36149">FHIR-36149</a>:
  appContext should be a black box to EHR, use SMART launch param's instead
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36440">FHIR-36440</a>:
  Remove the 'relaunch' section
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36517">FHIR-36517</a>:
  Clarification on Tasks
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36531">FHIR-36531</a>:
  Change SHOULD to SHALL and delete the MAY sentence that follows
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36146">FHIR-36146</a>:
  Clarify that DTR app should authenticate to payer with SMART Backend Services
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36441">FHIR-36441</a>:
  Remove FHIR version discussion
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36298">FHIR-36298</a>:
  CRD linking to website versus a DTR solution
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36429">FHIR-36429</a>:
  No appContext on stand-alone launch
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36547">FHIR-36547</a>:
  data SHOULD NOT be stored on the payer server
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36540">FHIR-36540</a>:
  Improve description of SDC Questionnaire profile
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36383">FHIR-36383</a>:
  Are you using SDC or CQF?
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36361">FHIR-36361</a>:
  Provenance expectations need more clarity
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36507">FHIR-36507</a>:
  Correct and re-organize this section
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36533">FHIR-36533</a>:
  Issues with lack of guidance on storage
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36129">FHIR-36129</a>:
  Initial DTR Launches should not be restricted to CDS Hooks Cards within the CRD workflow.
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36988">FHIR-36988</a>:
  Not clear where to get Requester Organization when creating PAS request
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36366">FHIR-36366</a>:
  Actors are unclear and in wrong place
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36438">FHIR-36438</a>:
  Questionnaire guidance is incorrect
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36537">FHIR-36537</a>:
  DocumentReference profile isn't sufficient
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36253">FHIR-36253</a>:
  DTR Spec needs a way to pass a questionnaire / response across organizations
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-34151">FHIR-34151</a>:
  Need an ability for DTR to store prior authorization
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-39443">FHIR-39443</a>:
  Add expectations about terminology mapping
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36119">FHIR-36119</a>:
  DTR SDC Questionnaire For Adaptive Form Profile Inappropriately Marks Elements As Must Support
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36373">FHIR-36373</a>:
  Clarify US Core expectations
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36299">FHIR-36299</a>:
  Mapping CQLs to PA criteria
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36466">FHIR-36466</a>:
  Provider Attestation guidance needs fixing
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-34103">FHIR-34103</a>:
  Clarify minimum Questionnaire capabilities
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-33226">FHIR-33226</a>:
  Formalize how DTR passes information to PAS, PAO or other exchange IG
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36219">FHIR-36219</a>:
  The CDS Hooks Card Link object should not require a DTR launch URL
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36004">FHIR-36004</a>:
  Change to use the CRD unsolicited prior auth profile
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36467">FHIR-36467</a>:
  Need a section on privacy/security
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36346">FHIR-36346</a>:
  Add 'support' menu item
  </li>
   
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36118">FHIR-36118</a>:
  DTR SDC Questionnaire Profile Inappropriately Marks Elements As Must Support
  </li>
    
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36370">FHIR-36370</a>:
  Clarify expectations on QR approval
  </li>
    
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36372">FHIR-36372</a>:
  Do we need a CRD & DTR section here?
  </li>
    
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36393">FHIR-36393</a>:
  Page names are overly long
  </li>
    
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36432">FHIR-36432</a>:
  Are DTR Questionnaire valuesets pre-expanded?
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36524">FHIR-36524</a>:
  remove references to manual alternatives/solutions that do not leverage the specs
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-34291">FHIR-34291</a>:
  Deferring and relaunching DTR App
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-37270">FHIR-37270</a>:
  Access Token must not be included in appContext
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36443">FHIR-36443</a>:
  How does an app notify the payer system
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36520">FHIR-36520</a>:
  Change operation invocation
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36391">FHIR-36391</a>:
  Need more launch details
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-39492">FHIR-39492</a>:
  Allow DTR to be used from CDex
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36543">FHIR-36543</a>:
  Need a search parameter for new context extension
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36534">FHIR-36534</a>:
  Correct operation adaptive expectations
  </li>
 
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-40605">FHIR-40605</a>:
  Update Questionnaire package operation per discussions
  </li>
  
  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36431">FHIR-36431</a>:
  Inconsistency in how value sets & libraries are returned
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36625">FHIR-36625</a>:
  please clarify data access by payer
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-34128">FHIR-34128</a>:
  Allow passing 'order' context when launching DTR
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36436">FHIR-36436</a>:
  Do better job of explaining HRex decision points
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36468">FHIR-36468</a>:
  What's the point of distinguishing CQL vs. human-authored?
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36535">FHIR-36535</a>:
  We need examples for operation inputs and outputs
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36437">FHIR-36437</a>:
  Revamp payer authorization language
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36455">FHIR-36455</a>:
  Utilization of CQL
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36375">FHIR-36375</a>:
  Loosen rules on SMART
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36359">FHIR-36359</a>:
  Need CapabilityStatements
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36331">FHIR-36331</a>:
  Revamp expectations around launch parameters
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36192">FHIR-36192</a>:
  Include CRD questionnaire workflow, not just prior auth questionnaire
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36412">FHIR-36412</a>:
  Need more guidance on CDS Hooks launch
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36544">FHIR-36544</a>:
  Examples are incomplete and have extras
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36409">FHIR-36409</a>:
  EHR and DTR initiation
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-36411">FHIR-36411</a>:
  Organize interactions along likely HIT modules
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-41557">FHIR-41557</a>:
  Guidance on Referenced resources missing
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-41576">FHIR-41576</a>:
  Prohibit alternate use of 'next-question' data
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-41168">FHIR-41168</a>:
  "How DTR Passes Information" page is no longer accurate
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-40421">FHIR-40421</a>:
  Guidance on this page needs to be rewritten
  </li>

  <li>
  <a href="https://jira.hl7.org/browse/FHIR-41854">FHIR-41854</a>:
  DTR needs to be re-organized quite a bit
   </li>

 </ul>


---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/confexpectations.md

This implementation guide uses specific terminology such as SHALL, SHOULD, MAY to flag statements that have relevance for the evaluation of conformance with the guide. As well, profiles in this implementation guide make use of the [mustSupport](http://hl7.org/fhir/R4/profiling.html#mustsupport) element. Base expectations for the intepretations of these terms are set in the [FHIR core specification](http://hl7.org/fhir/R4/conformance-rules.html#conflang) and general Da Vinci-wide expectations are defined in [HRex]({{site.data.fhir.ver.hrex}}conformance.html).

Additional conformance expectations specific to this guide are as follows:

### Conformance to this IG
In order to conform to this implementation guide, in addition to adhering to any relevant 'SHALL' statements, a system **SHALL** conform to at least one of the appropriate CapabilityStatements listed here:

* **Light DTR EHR** (for [US Core 3.1.1](CapabilityStatement-light-dtr-ehr-311.html) / [US Core 6.1/7.0](CapabilityStatement-light-dtr-ehr-700.html))
* **Full DTR EHR** (for [US Core 3.1.1](CapabilityStatement-full-dtr-ehr-311.html) / [US Core 6.1/7.0](CapabilityStatement-full-dtr-ehr-700.html))
* [**SMART DTR Client**](CapabilityStatement-smart-dtr-client.html)
* [**DTR Payer Service**](CapabilityStatement-dtr-payer-service.html)

### MustSupport
This IG marks elements with the Must Support flag in its profiles. In addition to the expectations provided in the HRex section referenced above, the following additional considerations apply:  

The FHIR specification makes it clear that when profiling another profile, a MustSupport flag can be constrained further (i.e., taken from 'false' to 'true') but cannot be loosened (i.e., changed from 'true' to 'false').   
  
Da Vinci DTR implementations **SHALL** conform to the [HRex]({{site.data.fhir.ver.hrex}}conformance.html#mustsupport) and [US Core]({{site.data.fhir.ver.uscore7}}must-support.html) Guidance where applicable.
  
DTR apps and EHRs that take on DTR app responsibility **SHALL** be able to render Questionnaires and QuestionnaireResponses.  Specifically, apps and EHRs acting as form fillers **SHALL** be able to display:
* `QuestionnaireResponse.questionnaire.questionnaireDisplay`/`Questionnaire.title`
* `QuestionnaireResponse.authored`
* `QuestionnaireResponse.author.resolve().name`
* `QuestionnaireResponse.source.resolve().name`
* `QuestionnaireResponse.item.text`
* `QuestionnaireResponse.item.value` - all data types
* The same for all nested items

They **SHALL** also handle all mustSupport elements within the Questionnaire profile and provide visual cues where those elements impact expected user action (e.g., required answers, need for signatures, etc.)
  
Those same systems **SHOULD** be able to display `QuestionnaireResponse.item.itemMedia`

---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/credits.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

### Da Vinci
{% include davinci.md %}

### The Da Vinci DTR project
This standard aims to streamline the process of collecting patient documentation required by health insurance payers for purposes like prior authorization and claims processing. It enables payers to express their documentation requirements in a computable format using FHIR Questionnaires, allowing providers to easily gather and submit necessary information.

The standard automates data collection by leveraging [Clinical Quality Language](https://build.fhir.org/ig/HL7/cql) (CQL) to extract existing patient data from EHRs, reducing manual entry and errors. It supports both pre-defined questionnaires and adaptive forms that adjust based on user responses.

Key features include the use of FHIR Questionnaires for defining documentation requirements, CQL for data extraction and logic implementation, and [SMART on FHIR](https://build.fhir.org/ig/HL7/smart-app-launch) integration for seamless EHR compatibility.

This approach benefits providers by reducing administrative burden, payers by standardizing documentation requirements, and patients by potentially expediting access to care. It also creates opportunities for EHR vendors and app developers to integrate documentation functionality into their systems.  The standard aligns with [US Core](https://build.fhir.org/ig/HL7/US-Core) Implementation Guides and addresses HIPAA privacy regulations by emphasizing limited data access for specific documentation needs.

Further details about the project, including minutes of meetings can be found on the [DTR project Confluence](https://confluence.hl7.org/pages/viewpage.action?pageId=21857604) page

### Credits
<div markdown="1" class="pbox">
<br>
<b>Technical Lead and Primary Author:</b>  
<ul>
    <li>Jeff Brown (Lantana Consulting Group)</li>
</ul>
<br>
<b>Da Vinci Project Coordination and Core Team:</b> 
<ul>
    <li>Robert Dieterle (EnableCare, LLC)</li>
    <li>Viet Nguyen (Stratametrics, LLC)</li>
    <li>Crystal Kallem (Point of Care Partners)</li>
    <li>Vanessa Candelora (Point of Care Partners)</li>
    <li>Jocelyn Keegan (Point of Care Partners)</li>
    <li>Dana Marcelonis (Point of Care Partners)</li>
</ul>
<br/>
<b>Technical Support and Guidance:</b> 
<ul>
    <li>Lloyd McKenzie (Dogwood Consulting)</li>
</ul>
<br>
<b>Da Vinci Member Leadership Provided by:</b> 
<ul>
    <li>Mike Gould (ZeOmega)</li>
    <li>Rajesh Godavarthi (MCG)</li>
    <li>Anna Taylor (MultiCare Connected Care)</li>
    <li>David DeGandi (Cambia)</li>
    <li>Craig Knier (Change Healthcare)</li>
</ul>
<br>
<b>Special Thanks...</b>
<br>To the numerous Da Vinci members and community who have participated on conference calls, provided reviews and feedback, supported sample data gathering, reference implementation development, and testing including, but not limited to:
<ul>
    <li>Larry Decelles, Andy Gregorowicz, Cole Springate-Combs, Pat LaRocque, Keeyan Ghoreshi, Yolanda Liu, Robi Scalfani (The MITRE Corporation) </li>
    <li>Kyle Johnsen, Spencer Utley, Fred Switzer, and Matt Varghese (Epic)</li>
    <li>Sreekanth Puram (Mettle Solutions)</li>
    <li>Celine Lefebvre, Heather McComas, Denis Casaubon (AMA)</li>
    <li>Anup Mahansaria, Peni Moxim, Mariel Brechner (Evernorth)</li>
    <li>Carie Hammond and Ryan Moehrke (AEGIS)</li>
    <li>Brian Poteet (Edifecs)</li>
    <li>James Bound (Cognizant)</li>
    <li>Jason Vogt, Chris Hardee (Meditech)</li>
    <li>Hans Buitendijk (Oracle)</li>
    <li>Richard Abercrombie (Palmetto GBA)</li>
    <li>Tom Kakanowski, Brenin Rhodes, David Chisholm (Smile Digital Health)</li>
    <li>Chris Cioffi (Elevance Health)</li>
    <li>Rob Brull, Brian Lind (Infor)</li>
    <li>Balaji Narayanan (Onyx)</li>
    <li>Maxim Gorshkov (InterSystems)</li>
    <li>Joshua Lamb (Optum)</li>
    <li>Rachel Foerster (CAQH CORE)</li>
    <li>Sreenivas Reddy Mallipeddi (MCG)</li>
    <li>Rick Geimer (Lantana Consulting Group)</li>
</ul>
</div>

This IG was developed under the auspices of the Clinical Decision Support work group.

----
If you are interested in participating in the DTR project and Da Vinci: information about our calls, minutes of past discussions, and other information can be found on our [HL7 Da Vinci Confluence page]( https://confluence.hl7.org/display/DVP/Da+Vinci+Use+Cases).



---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/downloads.md

### Downloads
* This full [DTR Implementation Guide](full-ig.zip)
* FHIR R4 DTR Resource Definitions [(JSON)](definitions.json.zip) [(XML)](definitions.xml.zip) [(TTL)](definitions.ttl.zip)
* FHIR R4 DTR Profile Examples [(JSON)](examples.json.zip) [(XML)](examples.xml.zip) [(TTL)](examples.ttl.zip)
* FHIR R4 DTR [Validator Pack](validator-hl7.fhir.us.davinci-dtr.pack)
* The full [FHIR R4 core]({{site.data.fhir.path}}fhir-spec.zip) specifications and other [FHIR core downloads]({{site.data.fhir.path}}downloads.html)
* A [validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar) that can be used to check FHIR resource instance validity and [instructions on how to use it](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)

#### Package File
The following package file includes an NPM  (Node Package Manager) package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs in the implementation guide (IG), etc. defined as part of this version of the IG. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply to make a conformant implementation. 

See the overview on validating <a href="http://hl7.org/fhir/R4/validation.html">FHIR profiles and resources</a>:

* [Package](package.tgz)
* [Clinical Quality Language (CQL)](https://hl7.org/fhir/uv/sdc/STU3/full-ig.zip) specification
* [SMART on FHIR](http://www.hl7.org/fhir/smart-app-launch/full-ig.zip) specification

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}


---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/epa.md

The current versions of the [CRD](https://build.fhir.org/ig/HL7/davinci-crd/), DTR, [PAS](http://build.fhir.org/ig/HL7/davinci-pas/), and [CDex](http://build.fhir.org/ig/HL7/davinci-ecdx/) IGs support for the electronic Prior Authorization (ePA) workflow only focuses on the interactions between the provider Health Information Technology (HIT) in total and the payer HIT in total, not the necessary interactions among the respective HIT solutions that make up the provider and payer HIT environment that will need to participate in the ePA workflow.  

Given the varying combinations of HIT components that may be required to support prior authorization, ONC may consider a certification process where certified software can use generic (or generically referenced) relied-upon software to meet certain requirements and can clearly specify the capabilities they rely on without the need to assert each permutation of relied-upon software with which they support the ePA workflow. Further guidance is needed for the interactions necessary within each of the provider and payer HIT configurations based on the functions/roles of those HIT solutions, and requires the relied upon software approach using predictable, standards-based capabilities to participate in an ePA workflow and for HIT that provides full support for ePA workflow through its certified HIT.  

The following drawing demonstrates the DTR Workflow exchanges between an integrated provider HIT environment and an integrated payer HIT environment in the upper portion.  The lower portion of the DTR workflow drawing represents the potential for electronic Prior Authorization (ePA) coordinator functionality to play a role between the provider HIT and the payer HIT.  It should be noted that the exchanges between the provider HIT (including any ePA) and the payer HIT (including any ePA) will replicate all the defined exchanges between provider and payer (represented by the green and orange arrows).  The red and purple arrows are representative of information exchange between the Provider ePA and the Provider systems (red arrows) or the information exchange between the Payer ePA and the Payer systems (purple arrows).

The Questionnaire Request and Response arrows represent both the “Questionnaire package” operation and the “next question” operation as both will involve similar components.

[![DTR Workflow Image](ePA1.png){:style="float: none; width:890px;height:547px; margin-left: auto; margin-right: auto;display: block;"}](ePA1.png "View Image Larger")

The following drawing provides additional detail regarding the exchanges between a Provider ePA Coordinator, multiple Provider HIT systems and the payer.  The boxes below the workflow drawing indicate the activities of the various components.  
From left to right: 
1. The Provider HIT systems
2. The Provider ePA coordinator
3. The Payer HIT
   
The numbered workflow in the Provider ePA Coordinator indicates the inputs from the example Provider HIT systems that are involved in creating the exchanges between the Provider HIT and the exchanges with the Payer. This includes:
1.	Information required for authentication with the payer where required
2.	Ability to request the Questionnaire package
3.	Processing the Questionnaire
4.	Storing the QuestionnaireResponse (including the QR Bundle)

[![Provider ePA Coordinator detail](ePA2.png){:style="float: none; width:962px;height:523px; margin-left: auto; margin-right: auto;display: block;"}](ePA2.png "View Image Larger")

The following graphic and associated table provides an example of the type of interactions that will need to be supported between an ePA coordinator and the various Provider HIT components.  
  
These interactions include:
1.	Initiating the DTR exchange with context
2.	Providing access to the patient record via a FHIR API
3.	Retrieving context information
4.	Retrieving required and allowed clinical and administrative information
5.	Storing the QuestionnaireResponse / Bundle with references to resources 

The table briefly describes each action along with:
- Provider systems impacted
- Provider API requirements
- ePA Coordinator API requirements
- Comments regarding each transaction 

--

[![Provider ePA Coordinator detail](ePA3.png){:style="float: none; width:930px;height:552px; margin-left: auto; margin-right: auto;display: block;"}](ePA3.png "View Image Larger")

The above graphics and descriptions outline the relevant interactions that will be further documented in subsequent releases of the IG as implementations of various combinations of HIT further inform the specifications.


---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/index.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

<blockquote class="stu-note">
<p>
This specification is currently published as a Standard for Trial Use (STU).  Feedback is welcome and may be submitted through the <a href="https://jira.hl7.org/secure/CreateIssueDetails!init.jspa?pid=10405&issuetype=10600&customfield_11302=FHIR-us-davinci-dtr">FHIR change tracker</a> for this specification.
</p>
<p>
Individuals interested in participating in Documentation Templates and Rules, or other HL7 Da Vinci projects, can find information about Da Vinci <a href="http://www.hl7.org/about/davinci">here</a>.
</p>
</blockquote>

### Introduction
When creating orders, booking appointments, admitting patients, etc. there is often an expectation that certain types of documentation are captured that will subsequently be used for payer processing.  This might be information needed for determining prior authorization (or whether prior authorization is even necessary), for inclusion as part of a claims submission, or even for retention as documentation of 'medical necessity' in the event of a future audit.  Each payer has rules for what documentation is necessary and in what form it needs to exist.  Failure to capture appropriate documentation or represent it in the correct manner can delay the processing of authorization requests and claims, result in denial of requests, or result in other penalties or hardships for both the provider and their patients.

The Da Vinci Documentation Templates and Rules (DTR) implementation guide provides a mechanism for payers to express their documentation requirements computably in a way that allows clinicians and other EHR users to navigate and quickly specify the needed information in a context-specific way.  The guide allows rules to be written in a way that supports automatically extracting existing EHR information for review and/or confirmation and adjusting the information prompted for based on what data is already known or entered, minimizing impact on provider time, while expediting subsequent payer interactions.

DTR leverages FHIR [Questionnaires](http://hl7.org/fhir/R4/questionnaire.html) combined with embedded [CQL](http://cql.hl7.org/N1/) logic and associated [value sets](artifacts.html#terminology-value-sets) to retrieve existing information, prompt for additional relevant information, and manage the logic process of determining which questions need to be answered (and what answer choices are relevant).  The function of rendering these Questionnaires and capturing the information in patient-specific QuestionnaireResponses can occur either through [SMART on FHIR applications](http://hl7.org/fhir/smart-app-launch/index.html) or through functionality embedded directly into the EHR.

### CMS Enforcement Discretion
One of the options available with DTR is to interact dynamically with the payer to formulate the questions being asked of the user, and potentially providing additional information back from the payer system - including coverage information via the [Coverage Information extension](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html).

On Feb 28, 2024, the Office of Burden Reduction and Health Informatics (OBRHI) National Standards Group (NSG) announced an [enforcement discretion](https://www.cms.gov/files/document/discretion-x12-278-enforcement-guidance-letter-remediated-2024-02-28.pdf) that they would not enforce the requirement to use the X12 278 for prior authorization if the covered entities were using the FHIR-based Prior Authorization API as described in the CMS Interoperability and Prior Authorization final rule ([CMS-0057-F](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f)). This allows the payer to return a prior authorization number for use in the X12 837 in coverage extension of the CRD and DTR IGs or as part of the 'all FHIR' exchange of the Prior Authorization Response Bundle in the PAS IG. 

For DTR, this specifically means that `satisfied-pa-id` in the [Coverage Information extension](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) can be used as an X12 prior authorization number.

### Expected Systems
This Implementation Guide has expectations defined for four types of systems that can be involved (with corresponding Capability Statements):
* **Light DTR EHR** (for [US Core 3.1.1](CapabilityStatement-light-dtr-ehr-311.html) / [US Core 6.1/7.0](CapabilityStatement-light-dtr-ehr-700.html)):  
  SMART on FHIR-enabled EHR that handles the form filling function of DTR, requiring the server to provide access to the specified resources to allow such an app to retrieve and edit QuestionnaireResponses and related resources.
    
* **Full DTR EHR** (for [US Core 3.1.1](CapabilityStatement-full-dtr-ehr-311.html) / [US Core 6.1/7.0](CapabilityStatement-full-dtr-ehr-700.html)):  
  EHRs that manage the form filling functions of DTR internally supporting client capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations.
    
*  [**SMART DTR Client**](CapabilityStatement-smart-dtr-client.html):  
  Clients support retrieving and editing QuestionnaireResponse and related resources, as well as client support for the Questionnaire Package, ValueSet Expand, and Next Question operations.
    
*  [**DTR Payer Service**](CapabilityStatement-dtr-payer-service.html):  
  Payer systems that provide questionnaires to DTR clients supporting server capabilities for the Questionnaire Package, ValueSet Expand, and Next Question operations.

[![ExpectedSystems](Actors.png){:style="float: none;width:766px;height:271px"}](Actors.png "Expected Systems")
  
<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
 The term Electronic Health Record (EHR) is used in this Implementation Guide and can be considered equivalent to Electronic Medical Record (EMR) or a Practice Management System (PMS) for the purposes of the contained content.  The term EHR includes in its scope any certified HIT that performs the described burden reduction exchanges and/or processing as part of its capabilities.
      </td></tr>
  </table>
</div><br>

### Boundaries and Relationships
This IG is a companion to the Da Vinci [Coverage Requirements Discovery (CRD)](https://build.fhir.org/ig/HL7/davinci-crd/), [Prior Authorization Support (PAS)](http://build.fhir.org/ig/HL7/davinci-pas/), and [Clinical Data Exchange (CDex)](https://hl7.org/fhir/us/davinci-cdex/index.html) IGs.  CRD allows a provider to be alerted that DTR is relevant for a particular order/appointment/etc. and optionally allows that provider to directly launch DTR (either as a SMART application or embedded EHR functionality), or hand off to back office staff for additional processing.  PAS allows the information returned by DTR to be packaged as part of a FHIR-based prior authorization request.  DTR functions in the 'middle' of these two IGs to capture the needed documentation.  CDex allows a payer to solicit additional information from a clinical system in a variety of circumstances.  One of the mechanisms it supports is asking for a user to fill out a particular form, or an unspecified set of forms associated with a tracking id.  DTR provides the mechanism to allow the user to fill out such forms.

While designed to work with these other IGs, DTR can be implemented stand-alone.  Further details on the relationships between these three implementation guides can be found [here](burden.html#da-vinci-burden-reduction).  

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
  <a href="https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability/policies-and-regulations/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f">CMS 0057-F</a> sets out functionality requirements for prior authorization and recommends implementation of all 3 guides by covered systems to provide such functionality. There is an expectation that future versions of these implementation guides would become mandatory in future regulations.
      </td></tr>
  </table>
</div><br>
A fourth Da Vinci IG that is relevant to DTR is the [Health Record Exchange (HRex)](https://hl7.org/fhir/us/davinci-hrex/STU1.1/security.html) implementation guide, which defines a number of shared profiles and other shared content used across Da Vincie IGs - including this one.

### Content and Organization
The IG is organized into the following sections:

* [Use Cases and Overview](usecases.html) Provides examples of how this specification can be used by provider and payer organizations.
* [Technical Background](background.html) Describes the underlying technologies this specification builds upon that readers should be familiar with before reading the rest of the IG.
* [ePA Coordinators](epa.html) Provides information regarding the interactions necessary to participate in an ePA workflow.
* [Formal Specification](specification.html) Provides the technical conformance details for the specification.
* [Privacy, Security, and Safety](security.html) Describes guidance and conformance expectations around privacy and security this IG relies on.
* [DTR Metrics](metrics.html) Provides guidance on capturing formal metrics to help evaluate and potentially benchmark DTR implementations.
* [Artifacts](allartifacts.html) Introduces and provides links to the FHIR profiles, operations, extensions, as well as examples.
* [Credits](credits.html) Identifies the individuals and organizations involved in developing this IG.
* [Change History](changehistory.html) Documents the changes that have been made to this IG in its different releases and pointers to the discussion that drove those changes.
   
### Dependencies
This guide is based on the FHIR R4 specification that is mandated for use in the U.S. as well as the [Clinical Quality Language (CQL) N1](http://cql.hl7.org/N1/) release specification. It also leverages the SMART on FHIR specification for non-native DTR Apps.

In addition, this guide also relies on a number of parent implementation guides:

{% include dependency-table-nontech.xhtml %}

This implementation guide defines additional constraints and usage expectations above and beyond the information found in these base specifications.
This guide also depends on several non-Da Vinci specifications:

<div markdown="1" class="pbox">
<ul>
    <li>
        DTR leverages profiles and capabilities defined in the <a href="http://hl7.org/fhir/uv/sdc/STU3/">Structured Data Capture (SDC)</a> implementation guide to define the forms used to gather information, how they're displayed, flow control logic, and mechanisms to automatically populate answers.  It also describes how to support <a href="specification.html#adaptive-form-considerations">Adaptive Forms</a>.  The general capabilities of the SDC guide are further constrained in DTR to reflect the capabilities that payers can count on EHRs and/or DTR smart applications to have for managing forms - and thus the constraints that need to be adhered to by payers when defining the questionnaires to be used.
        <br><br>
        Within the SDC Questionnaires, the logic that handles population and occasionally the flow control of forms is written using <a href="http://cql.hl7.org/N1/">Clinical Quality Language (CQL)</a>.  This is a language specifically designed to encode decision support logic.  It can operate against data structures independent of their syntax (e.g., XML or JSON).  It is heavily used throughout the FHIR decision support community.
    </li>
    <br>
    <li>
        In turn, DTR relies on the various EHR FHIR interfaces that comply with the US Core implementation guide <a href="{{site.data.fhir.ver.uscore7}}">7.0</a>, <a href="{{site.data.fhir.ver.uscore6}}">6.1</a>, and <a href="{{site.data.fhir.ver.uscore3}}">3.1.1</a> releases.  These interfaces allow the CQL embedded in Questionnaires to retrieve data from the EHR to help populate answers and/or to guide what questions are necessary. 
    </li>
    <br>
    <li>
       Because the DTR functionality is expected, at least in the early stages, to be performed by <a href="http://hl7.org/fhir/smart-app-launch/index.html">SMART on FHIR</a> systems, this implementation guide also provides explicit guidance around the use of SMART Launch to manage DTR functionality.
    </li>
</ul>
</div>
<br>

### Intellectual Property Considerations
This implementation guide and the underlying FHIR specification are licensed as public domain under the [FHIR license](http://hl7.org/fhir/R4/license.html#license). The license page also describes rules for the use of the FHIR name and logo.

<div markdown="1" class="pbox">

{% include ip-statements.xhtml %}

</div>
<br>

---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/metrics.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

### Overview
This Implementation Guide (IG) is one of four HL7 Da Vinci IGs ([CRD](https://build.fhir.org/ig/HL7/davinci-crd/), DTR, [PAS](http://build.fhir.org/ig/HL7/davinci-pas/), and [CDex](http://build.fhir.org/ig/HL7/davinci-ecdx/)) that are designed to address the challenges of automating the exchange of information between a provider and the responsible payer to determine coverage of services, items, and referrals. These IGs standardize the exchange of information required to automate the Prior Authorization (PA) process. 

Each guide supports a specific set of functions and exchanges required to determine payer coverage for specific services, items, and referrals.

To maximize the value of these IGs, it is imperative that each IG is integrated into clinical workflow at the appropriate point and that all exchanges required by each IG are fully supported by all the participants (providers, intermediaries, and payers). 

Each of these IGs recommends a set of metrics that may be collected by each implementation to facilitate the evaluation of adoption, functionality, processes, and improved outcomes. While there is currently no requirement to aggregate these metrics, it is reasonable to believe that, in the future, interested entities (providers, payers, regulators, quality organization, certification agencies, states, etc.) will ask for these metrics to evaluate the ongoing automation of the supported processes and exchanges. While this guide will not require these metrics to be captured in this release, the authors strongly suggest each implementation should do so with the expectation that collection and dissemination of these metrics may become a requirement (**SHALL**) in future versions of these IGs.

### Suggested Metrics
The following table defines a set of metrics with a short name, purpose, conformance, stakeholder, and collection/calculation instructions that represent what the project group designing this IG felt would be both reasonably collectable and useful in evaluating implementations of this IG. These measures are based on the [metric data model logical model](StructureDefinition-DTRMetricData.html) also published in this IG. 

<table style="vertical-align: middle;">
  <tr>
    <th>Number</th>
    <th style="width: 140px; vertical-align: middle;">Metric</th>
    <th style="width: 125px; vertical-align: middle;">Metric Type</th>
    <th style="width: 140px; vertical-align: middle;">Stakeholder</th>  
    <th style="vertical-align: middle;">Calculation Example</th>  
  </tr>
  <tr>
    <td style="vertical-align: middle;">1</td>
    <td style="vertical-align: middle;">Volume / % of from CRD, standalone, CDex  launch</td>
    <td style="vertical-align: middle;">Adoption Process</td>
    <td style="vertical-align: middle;">Provider or App Vendor/Provisioner</td>   
    <td style="vertical-align: middle;">Repeat for each launch mode as %mode:<br>
For volume: 
<code>DTRMetricData.where(launchMode = %mode and exists(action.where(actionDetail=’launch’ and httpResponse=200))).count()</code><br>
For %, divide volume above by: <code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).count()</code>
express as percentage
    </td>   
  </tr>
  <tr>
    <td style="vertical-align: middle;">2</td>
    <td style="vertical-align: middle;">% as standard questionnaire or adaptive forms</td>
    <td style="vertical-align: middle;">Adoption Process</td>
    <td style="vertical-align: middle;">Payer DTR app</td>   
    <td style="vertical-align: middle;">For adaptive forms: <code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.where(adaptive).count()</code>
divide by
<code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.count()</code>
express as percentage
    </td>   
  </tr>
  <tr>
    <td style="vertical-align: middle;">3</td>
    <td style="vertical-align: middle;">% reviewed prior to completion</td>
    <td style="vertical-align: middle;">Process</td>
    <td style="vertical-align: middle;">Provider or App Vendor/Provisioner</td>   
    <td style="vertical-align: middle;"><code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.where(reviewPrior).count()</code>
divide by
<code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.count()</code>
express as percentage
    </td>   
  </tr>
  <tr>
    <td style="vertical-align: middle;">4</td>
    <td style="vertical-align: middle;">% of questions auto populated</td>
    <td style="vertical-align: middle;">Process</td>
    <td style="vertical-align: middle;">Both</td>   
    <td style="vertical-align: middle;"><code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.autoPopulated.aggregate($this + $total, 0)</code>
divide by
<code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.enabled.aggregate($this + $total, 0)</code>
express as percentage
    </td>   
  </tr>
  <tr>
    <td style="vertical-align: middle;">5</td>
    <td style="vertical-align: middle;">% of auto populated questions changed</td>
    <td style="vertical-align: middle;">Process</td>
    <td style="vertical-align: middle;">Both</td>   
    <td style="vertical-align: middle;"><code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.roleInteraction.where(role=’override’).aggregate($this + $total,0)</code>
divide by 
<code>DTRMetricData.where(exists(action.where(actionDetail=’launch’ and httpResponse=200))).questionnaire.autoPopulated.aggregate($this + $total,0)</code>
express as percentage
    </td>   
  </tr>
  <tr>
    <td style="vertical-align: middle;">6</td>
    <td style="vertical-align: middle;">Average Time to complete</td>
    <td style="vertical-align: middle;">Process</td>
    <td style="vertical-align: middle;">Both</td>   
    <td style="vertical-align: middle;"><code>DTRMetricData.where(launchMode = %mode and exists(action.where(actionDetail=’launch’ and httpResponse=200))).elapsedTime.aggregate($this + $total, 0)</code> 
divide by
<code>DTRMetricData.where(launchMode = %mode and exists(action.where(actionDetail=’launch’ and httpResponse=200))).count()</code>
    </td>   
  </tr>
</table>
  
<br>

---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/resources__home-o2-prepopulation.md

```
library HomeOxygenTherapyPrepopulation version '0.1.0'
using FHIR version '4.0.0'
include FHIRHelpers version '4.0.0' called FHIRHelpers
include CDS_Connect_Commons_for_FHIRv400 version '1.0.2' called CDS
include DTRHelpers version '0.1.0' called DTR

// This cql and questionnaire combo can be considered a partial implementation of these forms:
// https://www.cms.gov/Medicare/CMS-Forms/CMS-Forms/Downloads/CMS484.pdf
// https://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/Electronic-Clinical-Templates/Downloads/Home-Oxygen-Therapy-Order-Template-Draft-20170905-R40.pdf
// with guidance from https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNProducts/Downloads/Home-Oxygen-Therapy-ICN908804.pdf

// CODE SYSTEMS
codesystem "ICD-10-CM": 'http://hl7.org/fhir/sid/icd-10-cm'
codesystem "LOINC": 'http://loinc.org'
codesystem "SNOMED-CT": 'http://snomed.info/sct'
codesystem "HCPCS": 'https://bluebutton.cms.gov/resources/codesystem/hcpcs'
codesystem "FHIRRequestIntent": 'http://hl7.org/fhir/request-intent'

// VALUE SETS

// Qualifying Conditions
valueset "Home Oxygen Therapy Qualifying Conditions": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.25'

// Device Categories
valueset "Stationary Oxygen Therapy Device": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.80'
valueset "Portable Oxygen Therapy Device": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.79'

// Device Types
valueset "Liquid Oxygen Therapy Device": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.77'
valueset "Compressed Gas Oxygen Therapy Device": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.74'
valueset "Oxygen Concentrator Therapy Device": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.78'

// Immobilization Codes
valueset "Immobilization": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.17.4077.3.2006'

// Oxygen Saturation Lab Test
valueset "Oxygen Saturation Lab Test": 'http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.132'

// OBSERVATION LOINC CODES

// Arterial Oxygen Codes
code "Oxygen saturation in Arterial blood by Pulse oximetry": '59408-5' from "LOINC"
code "Oxygen [Partial pressure] in Arterial blood": '2703-7' from "LOINC"
code "Oxygen saturation in Arterial blood by Pulse oximetry --W exercise": '89276-0' from "LOINC"
//Note: cant find loinc code for partial pressure during exercise

// Hematocrit Code
code "Hematocrit [Volume Fraction] of Arterial blood": '32354-3' from "LOINC"

// Blood Pressure Code
code "Pulmonary artery Mean blood pressure": '8414-5' from "LOINC"


// DEVICE REQUEST //
parameter device_request DeviceRequest

// OBSERVATION CODE DEFINITIONS

// Arterial Oxygen Code Definitions
define "Arterial_oxygen_saturation_Codes": { "Oxygen saturation in Arterial blood by Pulse oximetry" }
define "Arterial_partial_pressure_of_oxygen_Codes": { "Oxygen [Partial pressure] in Arterial blood" }
define "Arterial_oxygen_saturation_during_exercise_Codes": { "Oxygen saturation in Arterial blood by Pulse oximetry --W exercise" }

// Hematocrit Code Definition
define "Hematocrit_lab_test_Codes": {"Hematocrit [Volume Fraction] of Arterial blood"}

// Blood Pressure Code Definition
define "Pulmonary_artery_pressure_Codes": {"Pulmonary artery Mean blood pressure"}


// PATIENT //
context Patient

define Today: Today()

// COVERAGE REQUIREMENTS

// Relevant Diagnoses Definition
define "RelevantConditions": [Condition: "Home Oxygen Therapy Qualifying Conditions"]
define RelevantDiagnoses: 
  DTR.CodesFromConditions(CDS.Confirmed(CDS.ActiveOrRecurring("RelevantConditions")))

define OtherDiagnoses: DTR.CodesFromConditions(CDS.Confirmed(CDS.ActiveOrRecurring([Condition] except "RelevantConditions")))

// Arterial Oxygen Saturation - Definitions to display most recent observation on patient health record
define "VerifiedArterialOxygenSaturation": CDS.Verified(CDS.ObservationLookBack([Observation: "Arterial_oxygen_saturation_Codes"], 3 months))
define ArterialOxygenSaturation: DTR.LowestObservation(CDS.WithUnit(CDS.Verified(CDS.ObservationLookBack([Observation: "Arterial_oxygen_saturation_Codes"], 3 months)), '%'))
define "VerifiedArterialPartialPressureOfOxygen": CDS.Verified(CDS.ObservationLookBack([Observation: "Arterial_partial_pressure_of_oxygen_Codes"], 3 months))
define ArterialPartialPressureOfOxygen: DTR.LowestObservation(CDS.WithUnit(CDS.Verified(CDS.ObservationLookBack([Observation: "Arterial_partial_pressure_of_oxygen_Codes"], 3 months)), 'mm[Hg]'))
define "VerifiedArterialOxygenSaturationExercise": CDS.Verified(CDS.ObservationLookBack([Observation: "Arterial_oxygen_saturation_during_exercise_Codes"], 3 months))
define ArterialOxygenSaturationExercise: DTR.LowestObservation(CDS.WithUnit(CDS.Verified(CDS.ObservationLookBack([Observation: "Arterial_oxygen_saturation_during_exercise_Codes"], 3 months)), '%'))

// Mobile Patient
define PatientMobile: not exists(CDS.Confirmed(CDS.ActiveOrRecurring([Condition: "Immobilization"])))

// High Hematocrit
define HematocritThatIsGreaterThanThreshold: CDS.HighestObservation(CDS.WithUnit(CDS.Verified(CDS.ObservationLookBack([Observation: "Hematocrit_lab_test_Codes"], 3 months)), '%'))
define PatientHasHematocritThatIsGreaterThanThreshold: exists("HematocritThatIsGreaterThanThreshold")

// FACE TO FACE ENCOUNTER

// Oxygen Saturation Exercise
define "OxygenSatExercise": CDS.ObservationLookBack([Observation: "Arterial_oxygen_saturation_during_exercise_Codes"], 3 months)
define "OxygenSatExerciseDate": CDS.FindDate(CDS.MostRecent("OxygenSatExercise"))
define "IsArterialOxygenSaturationExerciseTested": "ArterialOxygenSaturationExercise" is not null

// High Blood Pressure
define "PulmonaryArteryPressure": CDS.HighestObservation(CDS.WithUnit(CDS.Verified(CDS.ObservationLookBack([Observation: "Pulmonary_artery_pressure_Codes"], 3 months)), 'mm[Hg]'))


// DEVICE REQUEST INFO

// Get Device Coding
define DeviceRequestHcpcsCoding: singleton from (
  ((cast device_request.code as CodeableConcept).coding) coding
    where coding.system.value = 'https://bluebutton.cms.gov/resources/codesystem/hcpcs'
    return FHIRHelpers."ToCode"(coding))

// Device Categories
define DeviceRequestDescription: 'HCPCS ' + "DeviceRequestHcpcsCoding".code + ' - ' + Coalesce("DeviceRequestHcpcsCoding".display)
define DeviceRequestedIsPortable: "DeviceRequestHcpcsCoding" in "Portable Oxygen Therapy Device"
define DeviceRequestedIsStationary: "DeviceRequestHcpcsCoding" in "Stationary Oxygen Therapy Device"

// Device Type
define "DeviceType":
  if DeviceRequestHcpcsCoding in "Compressed Gas Oxygen Therapy Device"
    then 'Compressed Gas'
  else if DeviceRequestHcpcsCoding in "Liquid Oxygen Therapy Device"
    then 'Liquid'
  else if DeviceRequestHcpcsCoding in "Oxygen Concentrator Therapy Device"
    then 'Concentrator'
  else
    null

// Order Intent
define "DeviceOrderType": device_request.intent.value 

// Prescribed Use Duration Bounds
define "OccurrenceTimingDuration": (device_request.occurrence as FHIR.Timing).repeat.bounds as FHIR.Duration

// Get Length of Prescribed Use Duration
define "OccurrenceTimingQuantity":
  if "OccurrenceTimingDuration" is not null
  then System.Quantity { value: "OccurrenceTimingDuration".value.value, unit: "OccurrenceTimingDuration".unit.value }
  else null

// Convert Length of Prescribed USe Duration
define "LengthOfNeed":
  ConvertQuantity("OccurrenceTimingQuantity", 'mo').value

// Get Frequency of Use 
define "FrequencyOfUseText":
  (device_request.occurrence as FHIR.Timing).code.text.value

// Split 'AND' Conjunction into a List 
define "FrequencyOfUseList":
  Split("FrequencyOfUseText", ' AND ')

// Filters out Invalid Frequencies
define "FrequencyOfUse":
  "FrequencyOfUseList" FrequencyText
    where FrequencyText in { 'During sleep', 'During exertion', 'At rest and awake' }

// Check for Arterial Oxygen Tests
define "BloodGasOrderedAndEvaluated": "ArterialOxygenSaturation" is not null or "ArterialPartialPressureOfOxygen" is not null or "ArterialOxygenSaturationExercise" is not null

// Check for Blood Test Observation
define "BloodTestObservations": "VerifiedArterialOxygenSaturation" union "VerifiedArterialPartialPressureOfOxygen" union "VerifiedArterialOxygenSaturationExercise"

/// Find the observation date for the blood gas test
define "BloodGasTestDate": CDS.FindDate(CDS.MostRecent("BloodTestObservations"))
```

---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/security.md

Guidance and conformance expectations around privacy and security are provided by all three specifications this implementation guide relies on. Implementers **SHALL** adhere to any security and privacy rules defined by:

* FHIR Core: [Security & Privacy Module]({{site.data.fhir.path}}secpriv-module.html), [Security Principles]({{site.data.fhir.path}}security.html) and [Implementer's Checklist]({{site.data.fhir.path}}safety.html)
* HRex: [Privacy & Security]({{site.data.fhir.ver.hrex}}/security.html)
* SMART on FHIR: [SMART App Launch](http://www.hl7.org/fhir/smart-app-launch)


### DTR-specific considerations
Any DTR SMART on FHIR application will have access to the scope of data authorized by the organization as appropriate for use by the app, accessible to the user, and potentially as authorized by the user. This scope granted **MAY** provide the SMART on FHIR application access to more data than is needed for the specific situation. For example, if Observation.read capabilities are needed, the app will have access to all observations for that patient. For compliance with HIPAA Minimum Necessary, the CQL included in payer-defined Questionnaires **SHALL** limit requests for information from the EHR's API to only items that are relevant to the documentation requirements for which DTR was launched (e.g., documentation requirements for a service that requires prior authorization).

Compliant Questionnaires **SHALL NOT** include hidden or read-only questions where the data is populated from the EHR. DTR Clients **SHALL** appropriately manage access to data that is sensitive per policy and regulatory requirements when responding to queries from a DTR app. Providers **SHOULD** ask the patient if they want to share the information with the payer prior to manually populating it in any QuestionnaireResponses.

Any EHR with SMART on FHIR support **SHOULD** be prepared to deal with the implications of providing a client with the scopes they request. For example, EHRs **SHALL** limit FHIR search capabilities for clients, requiring a patient ID in any search query to ensure the client can only access resources related to that patient.  It is important for implementers to be aware that data is going to be auto-populated that could be considered sensitive - so there will likely be a need for a human to review and confirm that the information is appropriate to be shared, and be able to remove it without risk of it being put back if they wish. Also, the app **MAY** not have access to certain data for retrieval because of security considerations.

Payer systems **SHALL** use information received during execution of the DTR [`$questionnaire-package`](OperationDefinition-questionnaire-package.html) operation solely for the purpose of satisfying the operation invoked, for audit, and to satisfy metric reporting needs.

If a payer uses adaptive forms to gather information, the payer **SHALL NOT** persist or use the information shared as part of the [`$next-question`](http://hl7.org/fhir/uv/sdc/STU3/OperationDefinition-Questionnaire-next-question.html) operation for any purpose other than:
* Responding to the operation.
* Retention of the fully completed QuestionnaireResponse to support a coverage determination made as part of the Questionnaire completion process.
* Internal audit and metric calculation.


---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/specification.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

### Overview
This page is organized into several sections reflecting the various steps involved in implementing DTR.  These steps are organized in roughly the order they would typically occur, though some variation in order is possible.

The core of this process is summarized in this diagram:

[![DTRQuestionnairePackageOperation](Sequence-Diagram.png){:style="float: none;width:716px;height:594px"}](Sequence-Diagram.png "Sequence Diagram")

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
The use of a portal for collection of clinical data to support prior authorization <b>SHALL NOT</b> be considered conformant to the requirements of this Implementation Guide.
      </td></tr>
  </table>
</div>
<br>

---------------------
#### EHRs and Payers
Throughout this guide, the term 'EHR' refers to the set of systems acting on behalf of a provider, whether managed directly by the provider organization or by a third-party agency.  Similarly, 'payer' refers to the set of systems acting on behalf of the payer, whether managed directly by the payer or by a third-party agency.  For additional discussion about how this implementation guide functions when EHR and/or payer systems are not monolithic but instead are made up of components, refer to the [ePA Coordinators page](epa.html).

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")  

---------------------
### Impact on payer processes
Information passed to DTR will typically contain clinical terminologies, might not contain billing terminologies, and will generally not include billing modifier codes or similar information typically included in prior authorization requests. Services will also need to consider that the mapping they perform between clinical terminologies and billing codes could be different than the bill coding process performed by the client system when claims are eventually submitted. This could mean that assertions about coverage or prior authorization requirements will need to be expressed conditionally (e.g., "Provided this service is billed as X, Y or Z, then prior authorization is not needed").

In situations where the DTR App is aware of the likely billing codes at the time of ordering, it might send these codes as additional CodeableConcept.coding repetitions to assist in server processing. If CPT is used, note the ability to convey CPT modifier codes via post-coordination as described in the Using CPT page on [terminology.hl7.org](https://terminology.hl7.org/).

It is more efficient if mappings can be shared across payers and providers. This implementation guide encourages industry participants to cooperate on the development of shared mappings and/or to work with terminology developers (e.g., AMA for CPT codes) to develop shared mappings as part of their code maintenance process.

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Configuring Connectivity

#### EHR to App Connectivity
[![Connectivity-EHR-to-App](Connectivity-EHR-to-App.png){:style="float: none;width:256px;height:67px"}](Connectivity-EHR-to-App.png "EHR to App Connectivity")

EHRs have the option of delivering DTR functionality internally or leveraging a DTR [SMART on FHIR Application](https://www.hl7.org/fhir/smart-app-launch/) (SMART App) that handles the primary data capture and population functions of the DTR process.  Such SMART applications may be developed by the EHR vendors, by payers, or by third parties.

DTR apps are expected to be technically able to run against any EHR and work with any payer. This means that EHRs are free to choose which app they prefer and **MAY** switch apps as they see fit.  However, for a DTR app to be used it needs to be trusted appropriately to manage access to personal health information by the EHRs and payers. EHRs that leverage DTR SMART apps will choose which DTR apps they will trust and support.  In some cases, an EHR **MAY** opt to support multiple DTR SMART apps.  If so, the EHR will be responsible for determining which app is used in which circumstances.

SMART on FHIR defines the basic expectations for an EHR to [register a SMART app](https://www.hl7.org/fhir/smart-app-launch/app-launch.html#register-app-with-ehr).  Most EHRs and organizations impose additional registration expectations.  DTR imposes an additional expectation as part of the app registration process, which is discussed in more detail in the [Determination of Payers Supported by a DTR App](specification.html#determination-of-payers-supported-by-a-dtr-app) section of this specification.

#### App/EHR to Payer Connectivity
[![Connectivity-App-to-Payer](Connectivity-App-to-Payer.png){:style="float: none;width:316px;height:104px"}](Connectivity-App-to-Payer.png "App to Payer Connectivity")

Similarly, all DTR apps **SHALL** be registered with the payer systems with which they communicate.  If an EHR opts to interact with the payer directly without using an app, then the EHR itself will need to register.

Initial setup of connectivity between client and payer will have a manual component to establish security credentials and a trust relationship (unless both parties are part of a shared trust network).  Dynamic endpoint discovery allows for the potential to use different endpoints for the [`$questionnaire-package`](OperationDefinition-questionnaire-package.html) operation over time without changing security credential or legal agreement expectations.

Payers **MAY** have multiple back-end functions that handle different types of decision support and/or different types of services. However, for the purpose of DTR conformance, payers **SHALL** have a single endpoint (managed by themselves or a delegate) that can handle responding to all DTR service calls.

This registration process **SHALL** ensure that the DTR app or Full EHR (i.e., Native App):
* Is 'trusted' by the payer to deal with patient-identifiable data (i.e., There is a BAA, or its equivalent, in place between the Payer and the application vendor).
* Knows the relevant endpoint to use for the payer to access the [`$questionnaire-package`](OperationDefinition-questionnaire-package.html) operation has a shared secret allowing secure access to the payer endpoint via [SMART on FHIR Backend Services](https://www.hl7.org/fhir/smart-app-launch/backend-services.html). 

Implementers of this IG **SHOULD** support the [endpoint discovery](https://hl7.org/fhir/us/davinci-hrex/STU1.1/endpoint-discovery.html) mechanism defined in the HRex specification to allow discovery of the endpoints used in this IG - specifically the [`$questionnaire-package`](OperationDefinition-questionnaire-package.html) operation endpoint used to retrieve the Questionnaires and associated libraries, value sets, etc. to be completed.

(Also see [Authenticating DTR client to payer API](specification.html#authenticating-dtr-client-to-payer-api))

Even after an application has been successfully registered, payers and EHRs **SHOULD** monitor the application behavior and **MAY** suspend an application's access if it is suspected of malicious behavior. 

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
Some payers <b>MAY</b> create Questionnaires that rely on code systems that require licensing for use where there isn’t already a cross-U.S. license in place (e.g., UB, CPT).  In such cases, the payer, provider, and if necessary, the SMART on FHIR app vendor will need to have the relevant licenses to display, store, and retransmit the information captured.  The expectations around licensing requirements <b>SHALL</b> be established as part of the configuration process between the parties.
      </td></tr>
  </table>
</div><br>

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Defining Questionnaires

#### Questionnaire Use
Payers have documentation requirements and rules that must be satisfied as part of their typical operations when reimbursing for care for certain services requiring authorization or documentation.
The Questionnaire resource is used to represent the information needs that providers must satisfy to meet payer documentation requirements and/or rules. The Questionnaire resource allows specifying:  

* What questions are asked
* What constraints exist on allowed answers (data types, choice lists, etc.) 
* Logic about which questions are enabled or disabled based on prior answers or other context
* How questions are organized and grouped
* Rules about what answers are mandatory or may have multiple answers
* How the questions should be rendered (tables, drop-downs, etc.)
* How to automatically fill in answers to some of the questions based on data already available from the EHR
* Etc.
  
The base Questionnaire resource defines some of these capabilities.  However, to allow specifying all the expectations needed to meet payer requirements for data collection forms, additional extensions are necessary.  DTR leverages the extended Questionnaire capabilities defined in the [Structured Data Capture (SDC) implementation guide](http://hl7.org/fhir/uv/sdc/STU3/) to define the complete set of functionality necessary to support data capture for payer purposes.  

More information regarding Questionnaires, workflow, and behaviors implementers will need to understand can be found in the SDC Guide:
* [Basic SDC Workflow](http://hl7.org/fhir/uv/sdc/STU3/workflow.html)
* [Form Behavior and Calculation](http://hl7.org/fhir/uv/sdc/STU3/behavior.html)
* [Advanced Form Rendering](http://hl7.org/fhir/uv/sdc/STU3/rendering.html)
* [DTR SDC Questionnaire - Example](Questionnaire-home-o2-std-questionnaire.html)
  
This IG defines two different profiles on Questionnaire that can be used to define data gathering requirements: the [DTR Standard Questionnaire profile](StructureDefinition-dtr-std-questionnaire.html) and the [DTR Adaptive Questionnaire profile](StructureDefinition-dtr-questionnaire-adapt.html).

In the first approach, all possible questions that can be asked, as well as the logic around when questions are enabled and what answers are permitted are expressed in computable form and shared as a complete set when the [Questionnaire Package](OperationDefinition-questionnaire-package.html) is retrieved.  Typically, the same Questionnaires are used across a wide variety of order types and members, though in theory the payer could generate a custom Questionnaire that is specific to a particular order and/or member.

In the second approach, the complete set of questions is not exposed.  Instead, the [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) operation is called repeatedly to slowly build up the list of questions, influenced by answers to prior questions.  The set of questions asked will typically vary from patient to patient and order to order.

A summary of the trade-offs between the two approaches can be seen in the table below:

<table border="1">
  <tr>
    <th>Standard Questionnaire</th>
    <th>Adaptive Questionnaire</th>    
  </tr>
  <tr>
    <td>All questions and logic shared when the questionnaire package is first downloaded. i.e., all potential questions, logic and rules are visible to the EHR or DTR app.
    </td>
    <td>Questions are exposed one at a time (or occasionally a couple at a time) and only relevant questions are exposed.
Rules and logic are hidden and only questions relevant to the current member/order are visible to the EHR or DTR app
 </td>   
  </tr>
  <tr>
    <td>Only <code>$questionnaire-package</code> operation is needed</td>
    <td>Payer must support both <code>$questionnaire-package</code> and <code>$next-question</code> operations</td>    
  </tr>
  <tr>
    <td>Logic for which questions are asked and which answers are available is encoded in the Questionnaire, possibly using CQL, and is executed by the DTR app/EHR.</td>
    <td>Logic for which questions are asked and which answers are available is written in software maintained by the payer in the language of their choice.  The DTR app/EHR simply exposes whatever questions and answer choices are returned by the operation</td>    
  </tr>
  <tr>
    <td>Payers will need to write CQL and/or leverage advanced Questionnaire logic elements for both rules as well as data pre-population</td>
    <td>Payers will need to write CQL for data pre-population only (though they will need to express rules in some programming/configuration language of their choice)</td>    
  </tr>
  <tr>
    <td>Rules that require accessing other payer systems or logic not expressible in CQL cannot be expressed.</td>
    <td>Code defining rules for what questions to display, the text of the question, the answers available, etc. can depend on calls to other payer interfaces and can leverage logic of any needed level of complexity, including using third-party rules engines.</td>    
  </tr>
  <tr>
    <td>Any population from payer data must occur at the time the <code>$questionnaire-package</code> operation is called and cannot be dependent on data populated from the EHR or entered by the user.</td>
    <td>Answers to later questions can be pre-populated from payer data based on previously answered questions (whether answered by pre-population from the EHR or by users)</td>    
  </tr>
  <tr>
    <td>Questionnaires and associated logic can be shared in a standardized way across payers as part of industry standardization efforts to drive consistency in data collection</td>
    <td>Individual questions could theoretically be shared, but any special logic around which questions are asked or answers are available would not be easily shareable</td>    
  </tr>
  <tr>
    <td>Logic cannot leverage payer data except as present in pre-populated answers in the initial QuestionnaireResponse provided in the <code>$questionnaire-package</code> operation</td>
    <td><code>$next-question</code> logic is free to leverage data held by the payer about the member, plan, or other information
    </td>    
  </tr>
  <tr>
    <td>Outcomes of the Questionnaire process are only reflected in answers in the QuestionnaireResponse
    </td>
    <td>The QuestionnaireResponse returned by <code>$next-question</code> can contain extensions as well as answers – such as the <a href="https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html"><code>coverage-information</code></a> extension (see below)
    </td>    
  </tr>
  <tr>
    <td>The payer has no access to what answers have been provided in the QuestionnaireResponse until/unless the QuestionnaireResponse is later transmitted to the payer (e.g., as part of a prior authorization request or a claim).  The payer cannot inject any identifiers around commitments with respect to coverage or the satisfaction of authorization requirements.
    </td>
    <td>The payer receives the data each time a question is asked and, [while limited in how they can use that data], they can associate it with identifiers that allow them to adhere to commitments with respect to coverage or the satisfaction of authorization requirements.</td>    
  </tr>
</table><br>
  
Payers **MAY** support either approach or opt to provide some Questionnaires using one approach and others using the second based on the requirements of the form.  DTR apps and Full EHRs **SHALL** support both types of Questionnaires.

#### Questionnaire Design
Questionnaires, whether standard or adaptive, **SHOULD** also use logic that ensures that only 'relevant' questions and answer choices are displayed, based on what answers have already been provided/populated using elements such as enableWhen or enableWhenExpression. When using elements with a data type of  'Expression' within Questionnaires to control flow or rendering, all logic **SHALL** be written in CQL.  However, there are many other properties and extensions that control the rendering and behavior of Questionnaires.The DTR [Standard](StructureDefinition-dtr-std-questionnaire.html) and [Adaptive](StructureDefinition-dtr-questionnaire-adapt.html) Questionnaires have identified the elements and extensions from the SDC [Base](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire.html), [Advanced Rendering](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-render.html), [Advanced Behavior](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-behave.html) and [Expression-based Population](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-pop-exp.html) profiles that must be supported in DTR.  The descriptions Elements flagged as mustSupport **SHALL** be supported by DTR Apps and Full EHRs.  

These systems **SHOULD** also support all non mustSupport data extensions included in the differential of the DTR Questionnaire profiles as per SDC documentation for those elements and extensions and **SHALL** gracefully handle the presence of these elements if not supported (i.e., non-support for an element **SHALL NOT** interfere with a user's ability to complete a QuestionnaireResponse).  However, payers **SHALL NOT** rely on support for any of these elements in the design of their Questionnaire (i.e., a DTR client that ignores such elements cannot impact the successful collection of information acceptability of the information gathered). 

The questionnaire designer **SHOULD** consider the possibility that access to some data may be restricted or prohibited and that access restrictions could happen silently (e.g., indistinguishable absent data).
  
#### Adaptive Form Considerations
When a payer uses an Adaptive Form, they **SHALL** return a questionnaire instance compliant with the DTR [AdaptiveQuestionnaire-Search](StructureDefinition-dtr-questionnaire-adapt-search.html) profile. This will include a [`questionnaireAdaptive`](http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-questionnaireAdaptive) extension that indicates that the Questionnaire is adaptive and is also used to determine the endpoint on which the [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) operation should be called to start completing the QuestionnaireResponse.  The extension's url value is the base for the next question operation (i.e., `[url]/Questionnaire/$next-question`).  

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
If present, any <code>questionnaireAdaptive</code> url <b>SHALL</b> be a sub-url under the base for the payer and able to be accessed within the same SMART Backend Services connection as was established to make the <a href="OperationDefinition-questionnaire-package.html"><code>$questionnaire-package</code></a> call.
      </td></tr>
  </table>
</div><br>

The QuestionnaireResponse included in the [Questionnaire Package Bundle](StructureDefinition-DTR-QPackageBundle.html) accompanying an adaptive Questionnaire **SHALL** follow the convention of referencing a contained Questionnaire `derivedFrom` the canonical for the Questionnaire being completed.  Typically, the QuestionnaireResponse and contained Questionnaire will contain no answers (or corresponding questions), though the payer **MAY** opt to include a few pre-populated answers for user review prior to soliciting additional questions using the [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) operation.

The [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) operation provides no opportunity to pass context to the server posing the questions.  It will have no information about who the member is, the nature of the order, or anything else.  Any information needed will need to be passed in as the answer to a question.  Payers **MAY** define pre-populatable questions to extract such information, using CQL to access the Questionnaire's [`launchContext`](https://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-launchContext.html) extension or performing any necessary data retrieval.  The populated (and potentially user-reviewed or adjusted) answers can then be leveraged in subsequent calls to [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) to determine what to ask next.

Adaptive questionnaires pose a slight challenge when it comes to preparing the Questionnaire package.  Unlike standard questionnaires, adaptive forms do not identify all their questions up-front.  As such, it is not clear exactly which ValueSets will be needed for coded elements, nor which [Libraries](http://hl7.org/fhir/R4/library.html) might be needed to contain CQL to support pre-population.  There are three strategies payers can use – and payers **MAY** opt to combine strategies within a single Questionnaire:

* The payer **MAY** opt to include CQL [Libraries](http://hl7.org/fhir/R4/library.html) and ValueSets in the package that are not actually referenced by any questions, on the prospect that they *might* be (or are likely to be) referenced by one of the questions at some point.  Libraries might also be included that define common helper functions that will be leveraged by question-specific CQL provided later.  The downside of this approach is that an adaptive form might draw from a library of hundreds of different questions but only actually use a handful.  This could result in needing to share an extremely large questionnaire package.  It may also expose more of the proprietary logic than the payer might wish to make known.  On the other hand, any CQL or code lists provided in the package is content that will not need to appear contained in the QuestionnaireResponse, which can lighten subsequent calls to [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html). 
  
* The payer **MAY** add CQL [Libraries](http://hl7.org/fhir/R4/library.html) and ValueSets as 'contained' resources inside the QuestionnaireResponse that are relevant to the questions that are part of the Questionnaire for each [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) call, slowly building up the set of resources that happen to be relevant to the questions actually asked.  The benefit of this approach is that only codes and CQL relevant to the questions asked needs to be shared.  The downside is that this content is then present on every call to [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html).
  
* Finally, the payer **MAY** opt to specify the CQL and codes without using [Libraries](http://hl7.org/fhir/R4/library.html) or ValueSets at all – the CQL can be sent in-line within the various Expression elements, and the codes can be listed directly as answerOption Codings.  This has similar advantages and disadvantages to the second option, though it has less overhead.  On the other hand, CQL and codes can't be shared across different items.

In some cases, an adaptive form may need to retrieve resources from the EHR in order to determine what subsequent questions to ask or to make a prior authorization decision.  The only way for information to be relayed to the payer is with answers inside a QuestionnaireResponse.  However, QuestionnaireResponse answers can't actually be full resources, only references.  Payers needing full resources to be returned should use the [`containedReference`](StructureDefinition-containedReference.html) extension to indicate that the selected resource(s) for an answer of type reference should be included as contained resources within the QuestionnaireResponse.  This provides a mechanism for full resources to be included as part of the QuestionnaireResponse.

Implementers that support Adaptive Questionnaires **SHOULD** always include a [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension when the QuestionnaireResponse is deemed complete.  (Future versions of this guide may tighten this expectation to a SHALL).

The package returned by the [$questionnaire-package](OperationDefinition-questionnaire-package.html) operation **MAY** include Library and/or ValueSet instances that are not referenced by any of the returned questionnaires if at least one of those questionnaires is adaptive.  In this circumstance these additional resources are being made available, and **SHALL** be retained in the session, on the likelihood that a question in one of those adaptive questionnaires returned by the [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) operation will need (and reference) these resources. 

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
This mechanism is not necessary for non-adaptive forms as all resources pointed to by the QuestionnaireResponse will be returned as part of the <a href="StructureDefinition-DTR-QPackageBundle.html">Questionnaire Package Bundle</a>
      </td></tr>
  </table>
</div><br>

The [Privacy, Security, and Safety page](security.html) includes additional guidance on the use of Adaptive questionnaires.

#### Determinations from Adaptive Forms
In some cases, upon receiving enough answers from an adaptive form, a payer will be able to make assertions about coverage, prior authorization, and/or any 'additional documentation needed' similar to what is provided by the CRD process. This information needs to be made available to the DTR client in a computable fashion. To do so, the adaptive form service will place the [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension on the root of the [QuestionnaireResponse](StructureDefinition-dtr-questionnaireresponse.html), alongside the [`qr-context`](StructureDefinition-qr-context.html) extension. 

<!-- If Adaptive Forms are being used, and a DTR service determines that prior authorization is both necessary and the requirements have been met, then the final question in the form **SHALL** be a question that asks the user if they would like the prior authorization identifier to be issued.  Based on the user's answer, the service will either mark the questionnaire answer with 'no prior authorization' or 'with prior authorization'. -->

If Adaptive Forms are being used, and a DTR service determines that prior authorization is both necessary and the requirements have been satisfied, then the final question in the form **SHALL** be a question that asks the user if they would like the prior authorization identifier to be issued, and indicate the appropriate response options.  If the answer indicates a desire to have the identifier issued, then the completed [`questionnaireResponse`](StructureDefinition-dtr-questionnaireresponse.html) from the payer will contain the issued Prior Authorization identifier in the `satisfied-pa-id` element of the [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension.

DTR payers **SHALL** ONLY use DTR adaptive forms to return a [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension when:
* CRD has already been called and a [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension is already present on the relevant order; and
* Information is needed from a user that cannot be made available via the CRD process (either by pre-fetch or active query).

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
It will be unusual for a <code>coverage-information</code> extension created by an adaptive form to come back saying 'additional documentation required', however there are theoretical use-cases for this to be useful and this specification does not prohibit such behavior. If this occurs, it could result in a subsequent launch of DTR, or could result in the DTR client prompting the user as to whether they want to move on to filling out the new form(s).
      </td></tr>
  </table>
</div><br>

If an adaptive questionnaire response includes an unsolicited determination that authorization requirements have been 'satisfied', the EHR **SHALL** allow the clinician to flag the provided determination number as "not valid".  For example, If they feel the determination was based on incorrect information. If a payer receives a new invocation of an adaptive form for the same order, they **SHALL** treat the result of the new completion as replacing any previous completion from a prior coverage determination process. 

If a final DTR QuestionnaireResponse includes a Coverage Information extension, the DTR Client **SHALL** associate the Coverage Information returned with the relevant Appointment, Encounter and/or Request resources and **SHALL** make the information provided in the extension available to their users for viewing.  This might be managed with icons, flyovers, or other mechanisms as is appropriate to the workflow of the users of that DTR Client.

#### Population
One of the core purposes of this specification is to automate the retrieval of documentation required by the payer in a manner that reduces provider burden. 

Pre-populating answers reduces burden in two ways:
* It reduces the time that providers or back-end staff need to spend looking through the record for information when completing forms; and
* It eliminates issues from being introduced as part of transcription and reduces the likelihood of relevant information being missed.
  
Pre-population requires that logic be embedded in the Questionnaire that identifies where in the EHR the information can be found.  This in turn requires that the information needed be reliably locatable.

Questionnaires **SHALL** include logic that supports population from the EHR where possible. Such logic **SHOULD** rely exclusively on data elements and search parameters defined either in US Core or [HRex](https://hl7.org/fhir/us/davinci-hrex/STU1.1/index.html) (including simple calculations there-on - e.g., age from birthdate). Translation between standard codes **SHOULD** be supported where possible.  Ideally, the design of questions in payer forms **SHOULD** consider what data is likely to be available for pre-population purposes, with an objective of minimizing provider data entry effort. 

Due to differences in workflows or information systems, clinical information **MAY** be represented in different FHIR resources or with different codes or code systems. Therefore, payer CQL **MAY** have to examine different resources or use value sets to find patient information. It is preferable to have more extensive CQL or value sets than require a user to input values that the rules were unable to find.

DTR uses the [SDC Expression-based Population mechanism](http://hl7.org/fhir/uv/sdc/STU3/populate.html#expression-based-population) as the mechanism for populating, and specifically the use of CQL as the expression language.  CQL **SHALL** be used when pre-populating elements using data gathered from the EHR.  DTR clients **SHALL** handle expressions in Questionnaires denoted as either CQL or FHIRPath (which is a proper subset of CQL).  DTR servers **SHOULD** identify inline expressions that are valid FHIRPath as FHIRPath rather than CQL.  This will mean using the [`launchContext`](https://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-launchContext.html), [`variable`](https://hl7.org/fhir/extensions/StructureDefinition-variable.html) and the [`initialExpression`](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-initialExpression.html), [`contextExpression`](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-contextExpression.html) or [`calculatedExpression`](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-calculatedExpression.html) extensions together with logic in [Libraries](http://hl7.org/fhir/R4/library.html) referenced by the [`cqf-library`](https://hl7.org/fhir/extensions/StructureDefinition-cqf-library.html) extension to help populate the QuestionnaireResponse.

Further guidance on writing the necessary CQL can be found at ['Use of CQL'](specification.html#use-of-cql) later in this guide.

#### Provider Attestation
In some cases, if there isn't specific data that can be retrieved computably from the EHR, it **MAY** be sufficient for a payer to merely have an attestation by the provider that certain documentation exists, that a certain patient condition exists, or that certain actions have been completed. This can be represented in a Questionnaire as a simple boolean or choice question where the text describes what the user is attesting to. Payers **SHOULD** design questionnaires to support attestation rather than discrete data where this is sufficient for the business requirements.

Some payers **MAY** require that attestations or other answers be 'signed' (the electronic equivalent of 'initialing' the answer). This would be identified by means of the [`questionnaire-signatureRequired`](http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired) extension on the Questionnaire item.  

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
This IG does not define any expectations around certificate management or other considerations involved in the creation or validation of signatures, only the means by which signatures are requested and provided.
      </td></tr>
  </table>
</div><br>

Questionnaires **MAY** also support attaching reports or other supporting documentation (e.g., images, pathology reports, etc.) where providing question answers is not sufficient. The 'attachment' question type can be used to support this. Attachments might be found by searching for DiagnosticReport or Media instances, or by the provider directly uploading something to the Questionnaire rendering tool.

#### Questionnaire Expiry
While a user might need to suspend interaction with the DTR process, there could possibly be a limit on the amount of time that a set of documentation templates and rules is valid. For example, it is unreasonable to resume the DTR process for an order that was started several years ago because it would produce a QuestionnaireResponse that would still be valid if submitted now.  On the other hand, if a form was filled out five days ago and submitted today, it will be frustrating for providers if the form is rejected as "out of date".  
Payers **SHOULD** use the `Questionnaire.effectivePeriod` element to describe the period over which the documentation templates and rules are valid. The DTR App or EHR can then check against that period when resuming a previously stored QuestionnaireResponse.

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Value Set and Code System Guidance
The Questionnaire resource provides several mechanisms for conveying coded answer choices.  The table below is guidance that **SHOULD** be used when constructing questions with coded answers:

<table border="1">
  <tr>
    <th>CQL and Questionnaire terminology usage</th>
    <th>Comment</th>    
  </tr>
  <tr>
    <td>No value set, embed the code choices using answerOption.</td>
    <td>This is OK if there is no need to reuse the codes across multiple questions and the list of codes is ‘fixed’ and relatively small (< 40).</td>   
  </tr>
  <tr>
    <td>Pass a value set in the questionnaire package with the expansion already in place.</td>
    <td>The same set of codes is used for multiple answers and the set of codes is relatively small (< 40).  This saves the need for a terminology service call.’</td>    
  </tr>
  <tr>
    <td>Pass a value set in the questionnaire package, but the client recipient will need to run the expansion or ask a terminology server to do the expansion.</td>
    <td>The value set expansion is on the larger size (> ~40 codes), such that using the $expand with a filter operation will be more efficient from a user interface perspective. These value sets **SHOULD** be expanded by the client and therefore **SHOULD NOT** be included in the questionnaire package.  DTR clients running as SMART on FHIR apps will typically need to hold the complete content of the questionnaire package in memory. Payers **SHOULD** design their questionnaires, value sets, and libraries with the knowledge that content which is too large may cause DTR clients to fail.</td>    
  </tr>
</table><br>

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Use of CQL
As part of the SDC Questionnaires that define the information payers require to be captured, CQL is used to support automatic population of answers from existing EHR data and, occasionally, to enforce complex logic around what questions should be displayed. For example, whether answers are required, what answers should be enabled, etc. This CQL **MAY** query for patient observations, conditions, or other discrete information within the EHR to use as part of the population process or logic. The SDC specification provides guidance about how CQL expressions can be used for different purposes, as well as how information gathered by CQL in one portion of the Questionnaire can be made available in other portions of the Questionnaire.

CQL can either be embedded inline as part of an expression or referenced in a Library resource. All [Libraries](http://hl7.org/fhir/R4/library.html) needed by a questionnaire **SHALL** be referenced by the [`cqf-library`](https://hl7.org/fhir/extensions/StructureDefinition-cqf-library.html) extension and included as part of the [`$questionnaire-package`](OperationDefinition-questionnaire-package.html) operation. 
  
<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
This guide sets expectation that Questionnaires returned from the <a href="OperationDefinition-questionnaire-package.html"><code>$questionnaire-package</code></a> operation will include CQL to support population and/or flow control and rendering of the Questionnaire within the DTR app or EHR.  It is possible that payers may opt to use CQL internally to support population of QuestionnaireResponses returned in the <a href="OperationDefinition-questionnaire-package.html"><code>$questionnaire-package</code></a> or as part of the <a href="OperationDefinition-DTR-Questionnaire-next-question.html"><code>$next-question</code></a> operations.  However, there is <u>no expectation</u> this will occur and this specification provides no guidance on how such CQL would be written.
      </td>
    </tr>
  </table>
</div><br>

#### Guidance on Structure of CQL Logic
Like many other programming languages, CQL allows for statements to be nested within conditional logic. This creates instances where some statements **MAY** not be executed due to a prior condition not being met.  

Data retrieval in a QuestionnaireResponse is dependent on the `enableWhen` element.

CQL logic **SHOULD** be partitioned to be specific to groups/questions/etc. when doing so will allow it to be more efficient - though consideration should also be given to whether performing significant data gathering at the outset (even if the data is unneeded) will produce a more positive experience than intermittent data retrieval 'on demand', when such retrieval **MAY** introduce user-interface delays.
This pattern of logic structure is referred to by several names, including eager quitting, early return or, short circuiting. The goal is to avoid the execution of statements if they will not be relevant given other information available to the logic. This is done to streamline workflow and allow the user to focus on relevant input fields.

As an example, a payer **MAY** have a set of rules or specific information that must be gathered on a patient only if they have diabetes. This information **MAY** be gathered through a series of CQL statements. When constructing this CQL for DTR, these statements **SHOULD** be nested in conditionals to first check if the patient has diabetes before checking for information dependent on that condition.

Implementers could use [Adaptive Forms](specification.html#adaptive-form-considerations) to minimize the need for any CQL that provides conditional information retrieval.

#### Organizing CQL within Questionnaires
While CQL can either be embedded inline in Expression elements or packaged in [Libraries](http://hl7.org/fhir/R4/library.html), This guide strongly recommends that implementers **SHOULD** place CQL logic in libraries as it is much easier to edit and debug such logic when it is all in one place, rather than when it's scattered through many different expression elements throughout the Questionnaire.
In this approach and results of the queries, filtering, and other operations are to variables in the Libraries using define statements. These variables can then be referenced in the [valueExpression](https://hl7.org/fhir/extensions/StructureDefinition-variable.html), [contextExpression](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-contextExpression.html) or [calculatedExpression](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-calculatedExpression.html) elements asserted for the various Questionnaire item elements.  If a given variable evaluates to null the answer will be left empty, for the end user to complete.

#### CQL Constraints
DTR imposes the following additional rules on CQL use by payers to maximize interoperability:
* The CQL **SHALL** be version [CQL 1.5](http://cql.hl7.org/N1/).
* CQL **SHALL** have a context of "Patient". 
* Within the Questionnaire, CQL **SHALL** follow SDC rules for determining context. Specifically, CQL definitions and variables defined on ancestor elements or preceding expression extensions within the same Questionnaire item are in scope for referencing in descendant/following expressions. 
* Within [Libraries](http://hl7.org/fhir/R4/library.html), both raw CQL and compiled ELM (in JSON syntax – i.e., application/elm+json) **SHALL** be provided as separate content repetitions within the library.  Within Expression elements, the base expression CQL **SHALL** be accompanied by an [Alternative Expression Extension](StructureDefinition-alternativeExpression.html) containing the compiled JSON ELM for the expression.
* If the Questionnaire depends on multiple [Libraries](http://hl7.org/fhir/R4/library.html) (has multiple [`cqf-library`](https://hl7.org/fhir/extensions/StructureDefinition-cqf-library.html) elements), then any [`valueExpression`](https://hl7.org/fhir/extensions/StructureDefinition-variable.html) referring to defined variables **SHALL** specify the library name as well as the statement name as follows: "LibraryName".statementName.
* Library names **SHALL** be unique within a Questionnaire package and **SHOULD** be unique across all Libraries made available by the payer (e.g., "expression": \"LowerLimbProsthesis\".PhysicalExaminationType"
where LowerLimbProsthesis is the library name and PhysicalExaminationType is the expression name).
* FHIR [Libraries](http://hl7.org/fhir/R4/library.html) **SHALL** send CQL and ELM using the `content.data` element.

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Determination of Payers Supported by a DTR App
It is possible that the apps used to provide DTR functionality will not support all payers the EHR might have "DTR requests" for. It is important for the EHR to know what payers their app supports so that they only allow their users to launch the DTR app in the context of payers the app will be able to support. (Launching an app only to be told "this payer isn't supported" is an unpleasant user experience.)  

The developer of SMART on FHIR DTR apps **SHALL** define an endpoint maintaining a list of payers currently supported by that app. This listing of Payers is based on the [Supported Payers](StructureDefinition-DTRSupportedPayers.html) logical model also published in this IG.  EHRs using external DTR apps **SHALL** support accessing the endpoint. The EHR will be configured with knowledge of which endpoint to access for a given app as part of the process of configuring support for that app within the EHR. Different endpoints **SHALL** be defined for different versions of the application in situations where support for payers varies by application version.

It is important to note that the Payer Identifier used in this file **SHALL** be the same as the ones that are returned by the [endpoint discovery mechanism](https://build.fhir.org/ig/HL7/davinci-ehrx/endpoint-discovery.html) defined in [HRex](https://hl7.org/fhir/us/davinci-hrex/STU1.1/index.html).  

Example 'Supported Payers' file:
```json
{
  "supportedPayers": [
    {
        "name": "Health Ohmy",
        "identifier" : {
            "system" : "http://healthohmy.com/NamingSystem/payer-identifiers",
            "value" : "987654321"
        }
    },
    {
        "name": "Instancio Health",
        "identifier" : {
            "system" : "http://Instancio.org/NamingSystem/payer-identifiers",
            "value" : "123456789"
        }
    }    
  ],
  ...
}
```

Accessing the endpoint will be by a simple GET with an Accept header of application/json and **SHALL** be performed over TLS. The returned JSON object will contain a "payers" property referring to an array of objects. Each object will have an id and name property, both with string values. It is possible that additional properties **MAY** be supported in the future.

EHRs will typically retrieve the list of supported payers for the app once per day and will use this information to determine whether to expose the ability to launch DTR for orders associated with coverages for that payer.

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
The purpose of the DTR client registration process is to establish trust - NOT to establish custom questionnaire behavioral expectations.
      </td></tr>
  </table>
</div><br>


<blockquote class="stu-note" markdown="1">
The standardization of payer ids is still considered an open issue.  Guidance on standardization of payer identity is expected to be provided in the <a href="https://confluence.hl7.org/x/dwjEE">DTR Implementer Support page</a> on the HL7 Confluence site.
</blockquote>

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Launching DTR

#### Launching a DTR SMART app 
 
 <div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
This section only applies if an EHR is using a SMART app.
      </td></tr>
  </table>
</div>
  \
<!-- ![Note!](InfoItem.png){:style="float: none;margin-top: 8px;margin-right: 4px"}_This section only applies if an EHR is using a SMART app._\ -->
When the DTR process is being launched, the Electronic Health Record (EHR) system and DTR process **SHALL** follow the procedures established by the SMART App Launch Framework - specifically the [SMART App Launch Framework's EHR launch sequence](https://www.hl7.org/fhir/smart-app-launch/app-launch.html#launch-app-ehr-launch).

Like any SMART app, DTR is passed a context when launched.  The openId, user, and patient launch contexts **SHALL** be requested and provided.  In addition, the launch context **SHOULD** include fhirContext references as follows:
* One active Coverage resource indicating the coverage(s) associated with the documentation to be captured (unless Coverage is already conveyed in the [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension of the Request or Encounter passed below) and 
* Exactly one of the following:
  * A CRD-type Request or Encounter resource ([CRD profiles](https://build.fhir.org/ig/HL7/davinci-crd/artifacts.html#structures-resource-profiles))\
    (Used when launching based on recommendations from CRD or for stand-alone launch without CRD)
  * An existing incomplete QuestionnaireResponse previously created with DTR.\
    (Used when re-launching DTR to continue a previous session)
  * A Questionnaire [Task](https://hl7.org/fhir/us/davinci-cdex/StructureDefinition-cdex-task-attachment-request.html)\
    (Used when launching based on a request from [CDex](https://hl7.org/fhir/us/davinci-cdex/index.html), possibly prompted by instructions in PAS)
  
If these are not passed in as part of context, then the app **MAY** either raise an error or guide the user to select the needed records.

In addition to launch contexts, the SMART app will need to request scopes for the type of information it needs to access and manipulate.  Payer-provided Questionnaires **MAY** require access to a wide range of resources.  

At a minimum, the app and the HIT server **SHALL** support access to the following resources via the 21st Century Cures Act compliant APIs:  
* Patient
* Coverage 
* QuestionnaireResponse
* Encounter 
* ServiceRequest
* MedicationRequest 
* DeviceRequest 
* Appointment
* NutritionOrder 
* VisionPrescription

Resources referenced from the above via Must Support elements, including transitive references, **SHALL** also be supported.

However, typically CQL in Questionnaires will also need access to Observation, Condition, Procedure, DocumentReference and potentially others.  Therefore, in most cases, apps will simply request `patient/*.rs` and `patient/questionnaireresponse.cu`.  However, apps **MAY** opt to be more restrictive in their access requests if they are confident that they can do so while meeting payer CQL needs and EHRs indicate this is desirable.

Regardless of the scopes asked for and granted by the user, the EHR **SHALL** limit access to only that data they deem appropriate for use in automatically populating payer forms, in particular restricting sensitive data.  (Refer to the [Privacy and Security section for more details](security.html))

#### Authenticating DTR client to payer API
To collect data for a payer, the EHR or SMART app responsible for data collection must first establish a connection to the payer.   Payers **SHALL** require DTR apps and EHRs connecting to their endpoint to authenticate using [SMART on FHIR Backend Services](https://www.hl7.org/fhir/smart-app-launch/backend-services.html).  This mechanism provides a flow that authorizes a system to connect to a FHIR server where no user needs to be involved in the authorization process. It allows systems like EHRs to easily interact with pre-authorized defined scopes of access. The scopes necessary are:
* `system/questionnaire.rs`
* `system/valueset.rs`
* `system/library.rs`

These are sufficient to invoke the DTR Questionnaire operations [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) and ValueSet/`$expand`, as well as the retrieval of libraries and value sets.


#### Retrieving Launch Context Information
Again, this is only relevant for SMART on FHIR clients, though a similar process will happen for Full EHRs.
There are several steps in processing the launch context to begin the data collection process.  The following recommended workflow describes the steps and mechanisms that would be necessary to determine the QuestionnaireResponse(s) to render.  Some EHRs or SMART apps may vary their behavior slightly, but the end result of determining the relevant QuestionnaireResponse(s) should be the same.

1.	If the launch context did not include Coverages, a QuestionnaireResponse or a Request or Encounter, the DTR app **SHALL** either generate an error or allow the user to search to find one to use as context for the DTR session.  QuestionnaireResponses would be filtered by patient, a status of in-progress, and a context that is not empty, while requests and encounters would be filtered by patient, active status, and any other standard search parameters the DTR client chooses to offer.
2.	Otherwise, retrieve the referenced fhirUser, patient, and fhirContext resources referenced in the SMART authorization response by performing read or search operations.  (Search operations allow _including the requester, performer and location resources for encounters and request resources, which will be needed later.)
3.	For any Request resources or Encounter resources passed in context, perform a search to see if there are any QuestionnaireResponses associated with those orders using the [`qr-context`](SearchParameter-qr-context.html) search parameter (e.g., `[EHR-base]/QuestionnaireResponse?patient=123&context=ServiceRequest/789`).
4.	If no Request or Encounter resource was passed as context, check any provided QuestionnaireResponse for a [`qr-context`](StructureDefinition-qr-context.html) extension identifying any associated requests or encounters, and if so, perform searches to retrieve them with _includes for requester, performer, etc.
5.	Look in the Request or Encounter resources (if any) passed from context or referenced by a QuestionnaireResponse (if any) to see if there is an existing [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension, either from CRD or from DTR.
6.	If found, look at the Coverages as well as the coverage-assertion-id in such extensions.
7.	Determine which payers are associated with the coverages found, and then retrieve Questionnaire packages from each payer using the context information found.

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Retrieving Questionnaire Packages
Once the EHR or app has authenticated itself, it can invoke the [`$questionnaire-package`](OperationDefinition-questionnaire-package.html) operation using the information gathered in the preceding [Retrieving Launch Context Information](specification.html#retrieving-launch-context-information) step.  The operation will be invoked with a 'POST' using the base endpoint associated with the coverages provided based on payer configuration.  If multiple Coverages are provided that are associated with payers having different endpoints, then the operation will be invoked once per payer endpoint (e.g., `POST [base]/$questionnaire-package`).

The operation will be invoked passing a [DTR Questionnaire Package Input Parameters](StructureDefinition-dtr-qpackage-input-parameters.html) instance containing the following information:
* All Coverages associated with the payer endpoint in repetitions of the `coverage` element.
* If a Questionnaire was identified, the version-specific canonical of that Questionnaire in the `questionnaire` element.
* If no Questionnaires were identified but Request or Encounter resources were found in the preceding step, those resources as the `order` resources, plus the associated performer and requester Practitioner and Organizations, as well as any referenced Devices or Medications as 'referenced' resources.
* If a [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension was available, the `coverage-assertion-id` as `context`.
* Otherwise, the context id provided in the Questionnaire Task as `context`.
* If working from a previously stored QuestionnaireResponse, the `meta.lastUpdated` as `changedsince`.

The result will be a response with one or more Questionnaire package Bundles.  The remainder of the DTR process will involve the completion, storage, and use of the QuestionnaireResponses found in those Bundles.

The operation will return a [Questionnaire Package Bundle](StructureDefinition-DTR-QPackageBundle.html) for each Questionnaire that needs to be completed.  The Bundle will include the Questionnaire to be filled out, any ValueSets or CQL Libraries needed to support completion of the Questionnaire, and optionally a partially pre-populated QuestionnaireResponse to use as a starting point when filling out the form.  If a QuestionnaireResponse is returned, the `QuestionnaireResponse.questionnaire` **SHALL** point to the same canonical URL as the Questionnaire provided in the package Bundle.  If no Questionnaires need to be completed, the Parameters instance will not contain any Questionnaire Package Bundles.

If any of the retrieved Questionnaires have an `effectivePeriod` that ends prior to the current date, then the DTR client **SHALL** change the status of any retrieved work-in-progress QuestionnaireResponses for the expired Questionnaires to 'stopped' and notify the user that the previously recorded content has expired.  The [`$questionnaire-package`](OperationDefinition-questionnaire-package.html) operation would then need to be re-invoked just passing the orders and not specifying canonical questionnaire URLs to retrieve the updated Questionnaire(s) appropriate for the order, using the same `context`.

If an expired Questionnaire is retrieved when it wasn't explicitly requested by referring to a canonical version, but instead by passing in the relevant order(s) and/or context id, the DTR client **SHOULD** report an error to the payer.

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
Previously completed QuestionnaireResponses <b>SHALL NOT</b> be supported due to concerns about currency of clinical information.
      </td></tr>
  </table>
</div><br>

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Pre-populating QuestionnaireResponses
Prior to exposing the draft QuestionnaireResponse to the user for completion and/or review, the DTR client **SHALL** execute all CQL necessary to resolve the [`initialExpression`](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-initialExpression.html), [`candidateExpression`](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-candidateExpression.html) and [`calculatedExpression`](http://hl7.org/fhir/uv/sdc/STU3/StructureDefinition-sdc-questionnaire-calculatedExpression.html) extensions found in the Questionnaire for any enabled elements.

All items that are pre-populated (whether by the payer in the initial QuestionnaireResponse provided in the questionnaire package, or from data retrieved from the EHR) **SHALL** have their `origin.source` set to 'auto' (within the required [`information-origin`](StructureDefinition-information-origin.html) extension).

#### Execution Sequence
The flow of execution of the CQL will be determined by the associated Questionnaire. The client will proceed through the Questionnaire, and for any question that is associated with the result of a CQL expression, that specific CQL statement will be executed. The DTR client **SHALL** use result caching so that results that are already available will be reused without requesting them again.

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
The answers to questions populated by an <code>initialExpression</code> or <code>calculatedExpression</code> might themselves be dependencies to determine whether a Questionnaire item is enabled or not, which <b>MAY</b> in turn influence whether additional pre-population is required.  DTR clients <b>SHALL</b> iterate as necessary until a steady state is reached.  If dependencies are such that a steady state cannot be reached (e.g., an item that is enabled causes a value to be set which causes a different item to be enabled, that then disables the first item…), then the Questionnaire <b>SHALL</b> be treated as erroneous and attempts at automatic population <b>SHALL</b> end, with the user being informed of that.
      </td></tr>
  </table>
</div><br>

#### Retrieval of patient FHIR resources to supply to CQL execution engine
The DTR client **SHALL** retrieve the FHIR resources specified in the `dataRequirement` section of a Library.  SMART apps will do this using the access token provided on launch.  The client can then pass these resources to the Clinical Quality Language (CQL) engine. For example, the snippet below is from a Library that contains a `dataRequirement` section. In this code snippet the resource data needed from the EHR is Condition.

```json
"dataRequirement": [
    {
      "type": "Condition",
      "codeFilter": [
        {
          "path": "code",
          "valueSet": "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1219.25"
        }
      ]
    },
```

Depending on user permissions, the client might not have access to all the data. Queries SHOULD be constructed to minimize the retrieval of information that is not necessary to answer the relevant questions (For example, queries for medications that only require active medications should have appropriate filters to retrieve active medications and not inactive medications).
It's possible not every CQL statement will be executed (for example some questions may only be enabled given certain answers to prior questions). To reduce data transfers and increase overall speed, data **MAY** be fetched as needed. However, the app's execution engine **MAY** be implemented using a different strategy (for example by doing bulk fetches before starting execution).

#### Populating adaptive questionnaires
An adaptive form handles population slightly differently from a 'standard' form because questions only become available one (or a few) at a time.  Some CQL [Libraries](http://hl7.org/fhir/R4/library.html) **MAY** themselves only become available once certain questions are displayed.  The population process must therefore happen after each call to [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html), populating any newly available questions.  DTR clients **SHALL** support such an incremental population of adaptive QuestionnaireResponses.  For performance, the DTR application **SHOULD** save the results of execution of CQL prior to the [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) call.

#### Populating resumed QuestionnairesResponses
If DTR is launched using a previously saved QuestionnaireResponse, the DTR client **SHOULD** re-execute CQL to populate all empty elements, as well as those with an [`origin.source`](StructureDefinition-information-origin.html) of 'auto'.  Any answers with an `origin.source` of 'override' or 'manual' **SHALL NOT** be changed, though if pre-population would have asserted a value for an answer with an `origin.source` of 'manual', the `origin.source` **SHALL** be changed to 'override'.
  
An adaptive form handles population slightly differently from a 'Standard' form because questions only become available one (or a few) at a time.  Some CQL [Libraries](http://hl7.org/fhir/R4/library.html) **MAY** themselves only become available once certain questions are displayed.  The population process must therefore happen after each call to [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html), populating any newly available questions.  DTR clients **SHALL** support such an incremental population of adaptive QuestionnaireResponses.  For performance, the DTR application **SHOULD** save the results of execution of CQL prior to the [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) call.

#### Library Dependencies
The FHIR Library containing/referencing a CQL logic file can reference other needed CQL files (e.g., helper libraries) using the `relatedArtifact` field and a RelatedArtifact with a type of depends-on. The engine **SHALL** make available to the execution context all such referenced CQL [Libraries](http://hl7.org/fhir/R4/library.html). 

#### Behavior when encountering CQL-related errors
If the CQL is malformed (is not syntactically correct) in any way, the app's execution engine **SHALL NOT** attempt any execution of the malformed CQL. If the CQL engine reports an error when executing any of the CQL the app should similarly stop all CQL execution.  In either case, the client **SHALL** report the error to the payer using the [Log Questionnaire Errors operation](OperationDefinition-log-questionnaire-errors.html) and **SHOULD** Log the error internally and/or in the DTR client if possible.

If the CQL in the Questionnaire is only used for form population purposes, the app **SHALL**:
* Notify the user with an appropriate message indicating that the form population did not occur.
* Allow the user to enter the information manually, either now or at a later time.

If the CQL also includes questionnaire logic, such as whether certain elements are enabled, or other validation rules, the app **SHALL** notify the user that there is an issue with the questionnaire and prohibit further completion of the form. 

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
A query for data that returns no results <b>SHALL NOT</b> be considered a failure.
      </td></tr>
  </table>
</div><br>

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### User Interaction with Questionnaires
While the goal of DTR is to automatically gather all the necessary information to satisfy documentation requirements without interrupting the user, this is not possible in all cases.
It is likely that at least some answers will not be able to be gleaned from the EHR, due to missing data, data that is not computable, or data that is not represented in a standardized way. Also, even where answers are determined automatically, users may wish to review them for accuracy and completeness. Therefore, the system acting as a form filler is responsible for displaying all 'enabled' questions, groups, and display items to the end user for completion and/or review.
 In some cases, the population process **MAY** populate all answers to the Questionnaire. The DTR client **SHALL** provide the ability, but NOT a requirement, for providers to review pre-populated answers prior to saving the resulting response for subsequent use within the EHR.

#### Questionnaire Rendering
DTR leverages a subset of extensions and capabilities defined by the SDC implementation guide to support control over rendering, flow logic, and population and calculation of answers. The DTR SDC Questionnaire profile and DTR Adaptive Questionnaire profile identify the set of core elements and extensions that must be supported by 'full' EHRs and DTR solutions in terms of rendering and processing Questionnaires and their associated responses - and the elements that payers can count on being supported in the Questionnaires they expose.

Two different profiles are used to support two different approaches to managing questionnaire logic and two different levels of engagement between the form filling interface and the payer:
* [DTR Standard Questionnaire](StructureDefinition-dtr-std-questionnaire.html) 
* [DTR Adaptive Questionnaire](StructureDefinition-dtr-questionnaire-adapt.html)
  
Implementers should review the advanced rendering, advanced behavior, population and adaptive forms portions of the SDC implementation guide, focusing on the elements and extensions included in the DTR profiles. Implementers should also be familiar with the documentation about the Questionnaire and QuestionnaireResponse resources from the core FHIR specification. Conformance with DTR requires conformance with the relevant portions of the SDC implementation guide.

All DTR applications **SHALL** support rendering according to the mustSupport elements in the DTR Questionnaire profile as well as executing all CQL found within Questionnaire extensions. CQL and FHIR Questionnaires **SHALL** be required even when DTR is implemented within a DTR Native App as opposed to a DTR SMART App.

#### Separating user provided information from CQL retrieved information
When a user fills in a value or changes an answer in a QuestionnaireResponse, the DTR client **SHALL** populate the [`information-origin`](StructureDefinition-information-origin.html) extension, setting the `author` property to the current user, and setting `source` to 'override' if the source was already 'override' or 'auto', or 'manual' otherwise. DTR clients **SHALL** either provide a PractitionerRole in the SMART App launch of DTR or support transmitting the role by means of the [`activeRole`](StructureDefinition-activeRole.html) extension within the Practitioner resource.

#### QuestionnaireResponse validation
Each Questionnaire has a set of rules that determine whether a QuestionnaireResponse is allowed to be considered 'complete'.  For example, cardinality expectations on answers, restrictions on allowed values, etc.  These rules are defined both by core elements as well as by extensions.

The DTR client **SHALL** validate the QuestionnaireResponse on an ongoing basis as the user is reviewing and entering data.   The client **SHALL** visually flag any elements that require adjustment to meet validation rules.  

For Standard Questionnaires, when the QuestionnaireResponse is valid, the DTR client **SHALL** indicate that to the user and allow them to mark the QuestionnaireResponse as complete, though the user **MAY** opt to continue making changes or save the QuestionnaireResponse in draft form.  The DTR app **SHALL NOT** mark a Standard QuestionnaireResponse as 'complete' automatically.  

With an adaptive Questionnaire, there is an iteration of invoking [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html), populating if possible, and allowing user review/adjustment of answers.  The DTR client **SHALL NOT** allow the user to indicate they are ready for the next question/set of questions until the answers to the current QuestionnaireResponse pass validation rules.  If [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) is invoked with a QuestionnaireResponse the payer determines is invalid based on the rules in the contained Questionnaire, it **SHOULD** return an HTTP 400 error with an OperationOutcome indicating the circumstances where the QuestionnaireResponse is invalid.

Unlike Standard Questionnaires, with adaptive QuestionnaireResponses the determination that a QuestionnaireResponse is complete is made by the payer.  The final call to [`$next-question`](OperationDefinition-DTR-Questionnaire-next-question.html) will result in an echo back of the QuestionnaireResponse with no further questions provided in the contained Questionnaire, and with the QuestionnaireResponse set to 'complete'.  However, the QuestionnaireResponse **MAY** have a [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension added reflecting the payer's coverage assessment based on the information gathered in the QuestionnaireResponse.

#### Additional considerations
If a questionnaire or question is marked as [`questionnaire-signatureRequired`](http://hl7.org/fhir/StructureDefinition/questionnaire-signatureRequired), then the DTR client will need to add a [`questionnaireresponse-signature`](http://hl7.org/fhir/StructureDefinition/questionnaireresponse-signature) extension to the appropriate location in the QuestionnaireResponse.  The signature would attest to the QuestionnaireResponse as a whole, or to the specific item the signature appears on – excluding any [`questionnaireresponse-signature`](http://hl7.org/fhir/StructureDefinition/questionnaireresponse-signature) extensions themselves.
In some cases, the answer to a question modified by a user **MAY** be the input to an expression driving other logic within the questionnaire.  DTR clients **SHALL** monitor for changes to dependent questionnaire answers and re-execute logic, adjusting calculatedValues, enabling elements, adjusting validation rules, etc. based on changes made by the user.

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Storing QuestionnaireResponses
If an EHR system performs DTR functionality internally, it **MAY** save session information however it likes. The guidance below does NOT apply in this scenario.

At any point prior to completion the DTR client **SHALL** be able to save the 'in-progress' QuestionnaireResponse, either to ensure that work-in-progress is not lost, or to allow the user to close the session and then relaunch it later. 
When the QuestionnaireResponse has been marked as 'complete', the DTR client **SHALL** save the QuestionnaireResponse to the EHR using a create (POST) if the record had not previously been stored, or an update (PUT) if the record had already been saved at least once. 
The DTR process creates a QuestionnaireResponse resource through the course of normal operation. This resource **SHOULD** be saved to the patient record in the EHR system of the healthcare provider if supported. It **MAY** also be transmitted to the payer IT system.

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")

---------------------
### Passing DTR QuestionnaireResponses to Downstream Processes
The information gathered via DTR can be used for a variety of purposes:
* For inclusion as a prior authorization attachment (either via PAS, CDex, or via traditional attachment submission mechanisms).
* For inclusion as a claims attachment as part of an X12 submission.
* To accompany the order so the information is available to the performing system as per the FHIR Orders Exchange IG.
* To be retained by the EHR in the event of a subsequent audit.
* Additional purposes not yet defined.
  
Once DTR has written a QuestionnaireResponse to the DTR Client and updated the `QuestionnaireResponse.status` element to complete, the DTR Client needs to understand what action(s) it should take with the collected information. This is accomplished via three extensions:
1. The [`qr-context`](StructureDefinition-qr-context.html) extension provides a reference to the Request resource(s) and/or Encounter that the QuestionnaireResponse relates to.
2. The [`intendedUse`](StructureDefinition-intendedUse.html) extension indicates how the EHR is to use the information with respect to the associated orders/records
3. The [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension captures any coverage determination made by the payer with respect to the Request or encounter resources mentioned in the `context` extension.
 
Upon storing a completed QuestionnaireResponse with a [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension, the EHR **SHALL** propagate the [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) extension to all non-Coverage resources included on the [`qr-context`](StructureDefinition-qr-context.html) extension on the QuestionnaireResponse.  If a [`coverage-information`](https://build.fhir.org/ig/HL7/davinci-crd/StructureDefinition-ext-coverage-information.html) already exists on the target resource with the same `coverage-information.coverage`, it **SHALL** be overridden.

In those cases where a QuestionnaireResponse is to be used to convey information either to the payer or to downstream service providers, the DTR Client **SHALL** place the QuestionnaireResponse in a 'collection' Bundle complying with the [questionnaireResponseBundle](StructureDefinition-DTR-QRBundle.html) profile. This Bundle will include the QuestionnaireResponse entry as its initial entry and will then also include any resources that are referenced by the QuestionnaireResponse as answerReference that are not already contained within the QuestionnaireResponse. This ensures that all necessary information is delivered without a need for subsequent queries.

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> 
Only those resources directly referenced in the QuestionnaireResponse are included. If further references from a referenced resource are desired, the designer of the Questionnaire must ensure that these are also included as answers (possibly as hidden answers automatically populated by CQL within the Questionnaire).
      </td></tr>
  </table>
</div><br>

While multiple purposes are possible, the expectation is that all information in the QuestionnaireResponse will be used for that purpose (e.g., If a QuestionnaireResponse had a purpose of 'prior authorization' and 'order transmission', then the full QuestionnaireResponse bundle would be sent as a prior authorization attachment and as an attachment when the order is sent to the performer).

If there is a desire to send different content to different recipients, then distinct QuestionnaireResponses **SHALL** be used.
It is up to the DTR Client to determine the process by which attachments to prior auth requests, claims or orders are assembled - this could be done automatically, or with human review.

[![ToTop](PageTop.png){:style="float: none;"}](specification.html "Back to top of page")


---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/StructureDefinition-DTRMetricData-notes.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

#### Populating Actions
The following table provides more detail about how information is to be populated from different system perspectives:
  
<table border="1">
  <tr>
    <th>Action</th>
    <th>Systems</th>
    <th>ELement</th>
    <th>Notes</th>    
  </tr>
  <!-- ************************************** -->
  <tr>
    <td rowspan="4"><code>launch</code></td>
    <td rowspan="4">All</td>
    <td>requestTime</td>  
    <td>Start of the DTR session (earliest time of all actions)</td> 
  </tr>
  <tr>
    <td>responseTime</td>
    <td>End of DTR session (latest time of all actions)</td>
  </tr>
  <tr>
    <td>httpResponse / issue</td>
    <td>Failure of DTR process prior to completion or successful storage of QuestionnaireResponse for continuation</td>
  </tr>
  <tr>
    <td>questionnaire</td>
    <td>When request for questionnaire package was initiated (Full EHR or SMART App) or was received (Payer)</td>
  </tr>
  <!-- ************************************** -->
  <tr>
    <td rowspan="4"><code>qpackage</code></td>
    <td rowspan="4">Full EHR, SMART App, Payer</td>
    <td>requestTime</td>  
    <td>When request for questionnaire package was initiated (Full EHR or SMART App) or was received (Payer)</td> 
  </tr>
  <tr>
    <td>responseTime</td>
    <td>When response to questionnaire package operation was returned (Payer) or received (Full EHR or SMART App)</td>
  </tr>
  <tr>
    <td>httpResponse / issue</td>
    <td>Result of operation, including any warnings.</td>
  </tr>
  <tr>
    <td>questionnaire</td>
    <td>The questionnaire(s) returned, if any</td>
  </tr>
  <!-- ************************************** -->
  <tr>
    <td rowspan="4"><code>mrquery</code></td>
    <td rowspan="4">Light EHR, SMART App</td>
    <td>requestTime</td>  
    <td>When the request for medical record data was initiated (SMART app) or received (Light EHR)</td> 
  </tr>
  <tr>
    <td>responseTime</td>
    <td>When the response to the medical record query was returned (Light EHR) or received (SMART app)</td>
  </tr>
  <tr>
    <td>httpResponse / issue</td>
    <td>Result of query operation, including any warnings</td>
  </tr>
  <tr>
    <td>questionnaire</td>
    <td>The questionnaire(s) whose CQL drove the need for the query</td>
  </tr>
  <!-- ************************************** -->
  <tr>
    <td rowspan="4"><code>userresponse</code></td>
    <td rowspan="4">Full EHR, SMART App</td>
    <td>requestTime</td>  
    <td>When the UI became available to the end user to provide responses</td> 
  </tr>
  <tr>
    <td>responseTime</td>
    <td>When the user activated a control returning control to the application (to save the form, to get another question, to close the app, etc.)</td>
  </tr>
  <tr>
    <td>httpResponse / issue</td>
    <td>N/A</td>
  </tr>
  <tr>
    <td>questionnaire</td>
    <td>The questionnaire the user was interacting with</td>
  </tr>
  <!-- ************************************** -->
  <tr>
    <td rowspan="4"><code>nextq</code></td>
    <td rowspan="4">Full EHR, SMART App, Payer</td>
    <td>requestTime</td>  
    <td>When the $next-question call was initiated (Full EHR or SMART App) or received (Payer)</td> 
  </tr>
  <tr>
    <td>responseTime</td>
    <td>When the response to the $next-question call was provided (Payer) or received (Full EHR or SMART App)</td>
  </tr>
  <tr>
    <td>httpResponse</td>
    <td>The response from the $next-question call</td>
  </tr>
  <tr>
    <td>questionnaire</td>
    <td>The canonical for the adaptive form being completed (NOT the contained questionnaire)</td>
  </tr>
  <!-- ************************************** -->
  <tr>
    <td rowspan="4"><code>storeqr</code></td>
    <td rowspan="4">Light EHR, SMART App</td>
    <td>requestTime</td>  
    <td>When the request to store a QuestionnaireResponse was initiated (SMART App) or received (Light EHR)</td> 
  </tr>
  <tr>
    <td>responseTime</td>
    <td>When the response to the Questionnaire storage request was returned (Light EHR) or received (SMART App)</td>
  </tr>
  <tr>
    <td>httpResponse / issue</td>
    <td>The response from the attempt to store the Questionnaire Response.</td>
  </tr>
  <tr>
    <td>questionnaire</td>
    <td>The Questionnaire whose response was being stored</td>
  </tr>
</table><br>

---

File: repos/HL7_SLASH_davinci-dtr/input/pagecontent/usecases.md

<link rel="stylesheet" type="text/css" href="formatting.css" />

### CRD and DTR Workflow
The graphic below shows a high-level overview of CRD and DTR (DTR is the SMART on FHIR app or equivalent native EHR app).

<div markdown="1" class="notebox">
  <table style="border: none; margin-bottom: 0px;">
    <tr><td style="width: 72px; border: none"><img src="Note.png" style="float: left; width:18px; height:18px; margin: 0px;">&nbsp;<b><span style="color:maroon;">NOTE:</span></b></td>
      <td style="border: none"> <!-- Note Text Here -->
 This workflow is just one example used to help illustrate the CRD and DTR APIs. It is expected that a supplemental guide will be produced moving forward to help implementers with more concrete examples.
      </td></tr>
  </table>
</div><br>
  
As an example, a clinician might order, “Home Oxygen Therapy”:

<!-- ![CRD DTR Flow](CRD_DTR_Flow.png){:style="float: none;width:849px;height:307px"} -->
[![CRD DTR Flow](CRD_DTR_Flow.png){:style="float: none; width:764px;height:276px; margin-left:35px; display: block;"}](CRD_DTR_Flow.png "View Image Larger")

* Arrows **1** - **4** represent the workflow processing to determine if there are documentation and/or prior authorization requirements (CRD):  

  * The EHR would allow for the ordering of a DME (Durable Medical Equipment) device “Home Oxygen Therapy” (arrow 1).
  * The EHR would then compose a CDS Hook call containing or referencing FHIR resources to be used when calling the CDS Service (CRD) (arrow 2).
  * CRD then, optionally, retrieves additional information from a repository to help determine if there are documentation and/or prior authorization requirements for a requested device, service, or medication. The repository API and repository are shown in the Payer box. (repository API arrow and arrow 3).
  * In this scenario a response is sent back to the EHR/clinician in the form of a CDS system action (arrow 4), annotating a FHIR resource with an extension indicating there are documentation requirements.<br><br>
	
* Arrows **4** - **6** represent the workflow processing to populate the template/questionnaire (DTR):  

  * User launches DTR based on the indication provided by CRD.
  * DTR will retrieve the appropriate Questionnaire(s) and rule(s) from the repository via a repository API.
  * The clinician would launch the SMART app/DTR (or equivalent native EHR app) which pre-populates one or more FHIR based Questionnaire(s) with data from the EHR.
  * In the event data is known to be available but does not exist in the EHR the clinician could attest to the data in question.
  * The clinician or designated staff member populates the fields that were not populated with data from the EHR and possibly adjusts pre-populated elements. When the documentation is complete (or partially complete) the clinician or designated staff member would save the QuestionnaireResponse. DTR writes the FHIR based QuestionnaireResponse to the EHR. At this point the QuestionnaireResponse could also be sent to any ancillary service.
  * In the event the QuestionnaireResponse was incomplete, DTR could be launched at a future time with a context of the in-progress QuestionnaireResponse or associated order/resource and the process continued.

### EHR System
The completion of documentation for ordered items or services is required by payers for prior authorization, claims submission, to support downstream providers in managing claims processes, to document medical necessity and/or for other coverage-related requirements.  This information gathering is done in conjunction with the Electronic Health Record (EHR) system, ideally automatically extracting information from the EHR and eliminating the need for the end user to search for and/or transcribe information that already exists.

If information required to complete the Questionnaire is not available to the DTR solution from the EHR in a computably discoverable way, then the application will prompt the provider to enter the missing information. 

### Relation to Coverage Requirements Discovery (CRD)
The [Coverage Requirements Discovery (CRD)](http://hl7.org/fhir/us/davinci-crd/) service portion of the Burden Reduction workflow is responsible for verifying with the payer whether the product or service being ordered, or for which an appointment or encounter is being created is covered, requires documentation, and/or needs prior authorization. In most cases, the CRD service will return a system action annotating the relevant order/appointment/etc. with an extension containing the payer’s assessment and noting any documentation needs – potentially including specific Questionnaires and even partially populated draft QuestionnaireResponses that can be used in gathering that data. While CRD may verify that documentation and/or prior authorization is required, it does not manage completion of documentation, prior authorization, or validation of rules.  The ‘doc-needed’ coverage-information extension component in CRD communicates the need to launch DTR – including the most appropriate type of user to launch it.

The DTR process is responsible for accessing Questionnaire resources and rules (CQL), then pre-populating the questionnaire with EHR data and finally checking if the combination of pre-populated and manually-entered data satisfies requirements.

#### Home Oxygen Therapy Ordering - DTR Workflow Details
This example shows an overview of how the DTR SMART App (or equivalent native EHR app) fits into a workflow when ordering Home Oxygen Therapy. 
   
1. It is determined that documentation and/or prior authorization is required for coverage.
2. The DTR SMART App (or equivalent native EHR app) is launched from the  EHR based on the need being flagged by a CDS system action. 
3. The DTR SMART App (or equivalent native EHR app) fetches CQL (rules) and a FHIR Questionnaire from the payer server.
4. The engine then extracts as many answers as it can from the EHR to pre-populate a FHIR QuestionnaireResponse with FHIR-based EHR data.
5. If there is missing information, the user can manually provide it to fully populate the QuestionnaireResponse. If the QuestionnaireResponse is fully populated, the Questionnaire is not shown to the user unless specifically requested, in which case the user can review and potentially update pre-populated answers.
6. The DTR app/EHR function then writes the FHIR QuestionnaireResponse back to the EHR server.

![Process Flow Detail](DTR_Example_Workflow.png){:style="float: none;"}


### Relation to Clinical Data Exchange (CDex)  

DTR can be invoked for purposes other than specific Burden Reduction use-cases, specifically the guidance provided within the [Clinical Data Exchange (CDex)](https://hl7.org/fhir/us/davinci-cdex/index.html) Implementation Guide.  CDex specifies the use of DTR to [request attachments using questionnaires](https://hl7.org/fhir/us/davinci-cdex/requesting-attachments-questionnaire.html).  

CDex supports the launch of DTR to gather documentation through the [CDex Task Data Request Profile](http://build.fhir.org/ig/HL7/davinci-ecdx/StructureDefinition-cdex-task-data-request.html), which provides these necessary properties:
- The [`questionnaire` Task.input](http://build.fhir.org/ig/HL7/davinci-ecdx/StructureDefinition-cdex-task-data-request-definitions.html#diff_Task.input:questionnaire) reference - Communicates to the provider a URL of a data request FHIR Questionnaire  
- The [`data-request-questionnaire` Task.code](http://build.fhir.org/ig/HL7/davinci-ecdx/ValueSet-cdex-data-request-task-code.html) - Indicates the provider system uses DTR to complete the Questionnaire referenced in the `questionnaire` input parameter.  
<br>

See the Task Input sequence [here](http://build.fhir.org/ig/HL7/davinci-ecdx/task-based-approach.html#using-questionnaire-as-task-input).


---

File: repos/HL7_SLASH_davinci-dtr/input/temp/CapabilityStatement_dtr-intermediary-system.fsh

Instance: dtr-intermediary-system
InstanceOf: CapabilityStatement
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/dtr-intermediary-system"
* version = "1.1.0-ci-build"
* name = "DTRIntermediarySystem"
* title = "DTR Intermediary System"
* status = #active
* experimental = false
* date = "2023-06-29"
* description = "This statement defines the expected capabilities of intermediary systems wishing to conform to the ''DTR Intermediary System'' role."
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #server
* rest.documentation = "A DTR intermediary system provides an SMART on FHIR application"
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [[http://hl7.org/fhir/us/davinci-hrex/STU1/security.html|HRex implementation guide]]."
* rest.operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "QuestionnairePackage"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"
* rest.operation[=].documentation = "This operation returns 1 or more 'collection' Bundles each consisting of a single Questionnaire resource as well as any dependency Library and ValueSet instances needed to allow a renderer to fully render and otherwise process the Questionnaire.  
The operation SHALL take in either:
(1) one or more canonicals specifying the URL and, (optionally) the version of the Questionnaire(s) to retrieve; or (2) a CRD Context ID - or both."
* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHOULD
* rest.operation[=].name = "log-questionnaire-errors"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/log-questionnaire-errors"
* rest.operation[=].documentation = "This operation **SHOULD** be supported by payers and DTR applications and allows submission of issues encountered when working with these DTR-provided artifacts. The operation will pass the Questionnaire and an OperationOutcome detailing the issue(s) including where the error occurred. 
The input OperationOutcome resource **SHOULD** include information on the DTR application identity and version, date-time with time-zone offset, as well as the provider endpoint during which the error occurred, and it **SHALL NOT** contain information about the response or information retrieved from FHIR APIs that could potentially include PHI."

* rest.resource[+].type = #Coverage
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-coverage-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #search-type
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving coverages for the patient"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only active coverages"

* rest.resource[+].type = #DeviceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-devicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #MedicationRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-medicationrequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #NutritionOrder
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-nutritionorder"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-servicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #Parameters
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-parameters"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #Questionnaire
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire-adapt"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/dtr-context"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a context"


---

File: repos/HL7_SLASH_davinci-dtr/input/temp/CapabilityStatement_dtr-native-client.fsh

Instance: dtr-native-client
InstanceOf: CapabilityStatement
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/dtr-native-client"
* version = "1.1.0-ci-build"
* name = "DTRNativeClient"
* title = "DTR Native Client"
* status = #active
* experimental = false
* date = "2023-06-29"
* description = "This statement defines the expected capabilities of systems wishing to conform to the ''DTR Native Client'' role."
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #client
* rest.documentation = "A DTR Native Client provides an EHR-based application"
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [[http://hl7.org/fhir/us/davinci-hrex/STU1/security.html|HRex implementation guide]]."

* rest.resource[+].type = #Coverage
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-coverage-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #search-type
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving coverages for the patient"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only active coverages"

* rest.resource[+].type = #DeviceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-devicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #MedicationRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-medicationrequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #NutritionOrder
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-nutritionorder"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-servicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #Parameters
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-parameters"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #Questionnaire
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire-adapt"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/dtr-context"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a context"


---

File: repos/HL7_SLASH_davinci-dtr/input/temp/CapabilityStatement_dtr-payer-app.fsh

Instance: dtr-payer-app
InstanceOf: CapabilityStatement
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/dtr-payer-app"
* version = "1.1.0-ci-build"
* name = "DTRPayerApp"
* title = "DTR Payer App"
* status = #active
* experimental = false
* date = "2023-06-29"
* description = "This statement defines the expected capabilities of payer systems wishing to conform to the ''DTR Payer App'' role."
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #server
* rest.documentation = "A DTR Payer App provides an SMART on FHIR application"
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [[http://hl7.org/fhir/us/davinci-hrex/STU1/security.html|HRex implementation guide]]."
* rest.operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHALL
* rest.operation[=].name = "QuestionnairePackage"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/questionnaire-package"
* rest.operation[=].documentation = "This operation returns 1 or more 'collection' Bundles each consisting of a single Questionnaire resource as well as any dependency Library and ValueSet instances needed to allow a renderer to fully render and otherwise process the Questionnaire.  
The operation SHALL take in either:
(1) one or more canonicals specifying the URL and, (optionally) the version of the Questionnaire(s) to retrieve; or (2) a CRD Context ID - or both."
* rest.operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation[=].extension.valueCode = #SHOULD
* rest.operation[=].name = "log-questionnaire-errors"
* rest.operation[=].definition = "http://hl7.org/fhir/us/davinci-dtr/OperationDefinition/log-questionnaire-errors"
* rest.operation[=].documentation = "This operation **SHOULD** be supported by payers and DTR applications and allows submission of issues encountered when working with these DTR-provided artifacts. The operation will pass the Questionnaire and an OperationOutcome detailing the issue(s) including where the error occurred. 
The input OperationOutcome resource **SHOULD** include information on the DTR application identity and version, date-time with time-zone offset, as well as the provider endpoint during which the error occurred, and it **SHALL NOT** contain information about the response or information retrieved from FHIR APIs that could potentially include PHI."

* rest.resource[+].type = #Coverage
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-coverage-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #search-type
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving coverages for the patient"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only active coverages"

* rest.resource[+].type = #DeviceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-devicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #MedicationRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-medicationrequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #NutritionOrder
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-nutritionorder"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-servicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #Parameters
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-parameters"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #Questionnaire
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire-adapt"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/dtr-context"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a context"


---

File: repos/HL7_SLASH_davinci-dtr/input/temp/CapabilityStatement_dtr-smart-client.fsh

Instance: dtr-smart-client
InstanceOf: CapabilityStatement
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-dtr/CapabilityStatement/dtr-smart-client"
* version = "1.1.0-ci-build"
* name = "DTRSmartClient"
* title = "DTR SMART on FHIR Client"
* status = #active
* experimental = false
* date = "2023-06-29"
* description = "This statement defines the expected capabilities of systems wishing to conform to the ''DTR SMART on FHIR Client'' role.  Systems conformant to this IG Capability Statement **SHALL** also serve as a SMART on FHIR client."
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format = #json
* rest.mode = #client
* rest.documentation = "A DTR SMART on FHIR Client provides an application conforming to the SMART on FHIR specification and related requirements declared in this Implementation Guide."
* rest.security.description = "Implementations **SHALL** meet the general security requirements documented in the [[http://hl7.org/fhir/us/davinci-hrex/STU1/security.html|HRex implementation guide]]."

* rest.resource[+].type = #Coverage
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-coverage-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #search-type
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving coverages for the patient"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Coverage-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only active coverages"

* rest.resource[+].type = #DeviceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-devicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #MedicationRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-medicationrequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #NutritionOrder
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-nutritionorder"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-servicerequest"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #update
* rest.resource[=].versioning = #versioned-update

* rest.resource[+].type = #Parameters
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-parameters"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #Questionnaire
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-sdc-questionnaire-adapt"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read

* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-dtr/StructureDefinition/dtr-questionnaireresponse-r4"
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHOULD
* rest.resource[=].interaction.code = #read
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "context"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-dtr/SearchParameter/dtr-context"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponse for a context"


---

File: repos/HL7_SLASH_davinci-dtr/input/temp/extra-examples.fsh

// **********************************************************************************************************************************
Instance: PatientExample
InstanceOf: Patient
Description: "An example patient used in the example resources."
Usage: #example
* gender = #male
* birthDate = "1996-12-23"
* address.use = #home
* address.type = #both
* address.state = "MA"


// **********************************************************************************************************************************
Instance: PractitionerExample1
InstanceOf: USCorePractitionerProfile
Description: "An example practitioner referred to by the example resources."
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1122334455"
* name.family = "Doe"
* name.given = "Jane"
* name.prefix = "Dr."

// **********************************************************************************************************************************
Instance: PractitionerRoleExample1
InstanceOf: USCorePractitionerRoleProfile
Description: "An example practitioner referred to by the example resources."
* practitioner = Reference(PractitionerExample1)
* organization = Reference(ProviderOrgExample)
* telecom.system = #email
* telecom.value = "drjanedoe@example.org"

// **********************************************************************************************************************************
Instance: ServiceRequestExample1
InstanceOf: ServiceRequest
//Usage: #inline
* status = #active
* intent = #original-order
* code = http://loinc.org#24338-6
* code.text = "Gas panel - Blood"
* subject = Reference(PatientExample)
* occurrenceDateTime = "2019-05-08T09:33:27+07:00"
* requester = Reference(PractitionerExample1) "Dr. Jane Doe"
* reasonCode.text = "Check for O2 blood saturation levels"


// **********************************************************************************************************************************
Instance: OrgExample1
InstanceOf: USCoreOrganizationProfile
Description: "An instance of Organization as a payer used in the example resources."
* type = http://terminology.hl7.org/CodeSystem/organization-type#pay "Payer"
* name = "Insurance Company"
* active = true
* telecom.system = #phone
* telecom.value = "860-547-5001"
* telecom.use = #work
* address.line = "680 Asylum Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "06155"
* address.country = "US"

// **********************************************************************************************************************************
Instance: OrgExample2
InstanceOf: USCoreOrganizationProfile
Description: "A 2nd instance of Organization as a payer used in the example resources."
* type = http://terminology.hl7.org/CodeSystem/organization-type#pay "Payer"
* name = "Next Door Insurance Company"
* active = true
* telecom.system = #phone
* telecom.value = "860-547-5002"
* telecom.use = #work
* address.line = "681 Asylum Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "06155"
* address.country = "US"


// **********************************************************************************************************************************
Instance: ProviderOrgExample
InstanceOf: USCoreOrganizationProfile
Description: "An instance of Organization as a provider organization used in the example resources."
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov "Healthcare Provider"
* name = "Provider Organization"
* active = true
* telecom.system = #phone
* telecom.value = "860-547-5003"
* telecom.use = #work
* address.line = "682 Asylum Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "06155"
* address.country = "US"



---

