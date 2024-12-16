File: repos/HL7_SLASH_cqf-recommendations/input/fsh/capability-statement/cpg-common-patient-registry.fsh

Instance: cpg-common-patient-registry
InstanceOf: CapabilityStatement
Usage: #definition
Title: "CPG Common Patient Registry"
Description: "Describes the expected set of functionality required for a patient registry service that supports the common registration process defined in this implementation guide."
* insert CapabilityStatementMetadata(cpg-common-patient-registry)
* name = "CPGCommonPatientRegistry"
* kind = #requirements
* fhirVersion = #4.0.0
* format[+] = #xml
* format[+] = #json
* rest
  * mode = #server
  * resource
    * type = #Patient
    * interaction[+].code = #read
    * interaction[+].code = #update
    * interaction[+].code = #create
    * interaction[+].code = #search-type
    * searchParam[+]
      * name = "active"
      * type = #token
    * searchParam[+]
      * name = "birthdate"
      * type = #date
    * searchParam[+]
      * name = "name"
      * type = #string
    * searchParam[+]
      * name = "identifier"
      * type = #token
    * operation[+]
      * name = "$match"
      * definition = $patient-match-operation
    * operation[+]
      * name = "$summary"
      * definition = $cpg-common-patient-summary-operation

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-administermedication.fsh

Instance: activity-example-administermedication-ad
InstanceOf: CPGAdministerMedicationActivity
Usage: #example
* insert ExampleActivityDefinitionMetadata(activity-example-administermedication-ad)
* title = "Activity Example Administer Medication AD"
* description = "Example Activity Definition for a recommendation to administer a medication"
* name = "ActivityExampleAdministerMedicationAD"
* kind = #Task
* profile = Canonical(CPGAdministerMedicationTask)
* code = $cpg-activity-type-cs#administer-medication "Administer a medication"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "Medication Proposal"
    * reference = Canonical(administermedication-library)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-collectinformation.fsh

Instance: activity-example-collectinformation-ad
InstanceOf: CPGCollectInformationActivity
Usage: #example
* title = "Activity Example Collect Information AD"
* insert ExampleActivityDefinitionMetadata(activity-example-collectinformation-ad)
* description = "Example Activity Definition for a recommendation to collect information"
* extension[+]
  * url = $cpg-collectWith
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)
* name = "ActivityExampleCollectInformationAD"
* kind = #Task
* profile = Canonical(CPGQuestionnaireTask)
* code = $cpg-activity-type-cs#collect-information "Collect information"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "extension('http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-collectWith').value"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-dispensemedication.fsh

Instance: activity-example-dispensemedication-ad
InstanceOf: CPGDispenseMedicationActivity
Usage: #example
* title = "Activity Example Dispense Medication AD"
* insert ExampleActivityDefinitionMetadata(activity-example-dispensemedication-ad)
* description = "Example Activity Definition for a recommendation to dispense a medication"
* name = "ActivityExampleDispenseMedicationAD"
* kind = #Task
* profile = Canonical(CPGDispenseMedicationTask)
* code = $cpg-activity-type-cs#dispense-medication "Dispense a medication"
* intent = #proposal
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "Medication Proposal"
    * reference = Canonical(dispensemedication-library)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-documentmedication.fsh

Instance: activity-example-documentmedication-ad
InstanceOf: CPGDocumentMedicationActivity
Usage: #example
* title = "Activity Example Document Medication AD"
* insert ExampleActivityDefinitionMetadata(activity-example-documentmedication-ad)
* description = "Example Activity Definition for a recommendation to document a medication"
* name = "ActivityExampleDocumentMedicationAD"
* kind = #Task
// * profile = Canonical(CPGDocumentMedicationTask) now corrected to document (vs dispense) in profile, but throwing sushi error d/t dependcy
* code = $cpg-activity-type-cs#document-medication "Document a medication"
* intent = #proposal
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "Medication Proposal"
    * reference = Canonical(documentmedication-library)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-donotcollectinformation.fsh

Instance: activity-example-donotcollectinformation-ad
InstanceOf: CPGCollectInformationActivity
Usage: #example
* title = "Activity Example Do Not Collect Information AD"
* insert ExampleActivityDefinitionMetadata(activity-example-donotcollectinformation-ad)
* description = "Example Activity Definition for a recommendation not to collect information"
* extension[+]
  * url = $cpg-collectWith
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)
* name = "ActivityExampleDoNotCollectInformationAD"
* kind = #Task
* profile = Canonical(cpg-questionnairetask)
* code = $cpg-activity-type-cs#collect-information "Collect information"
* doNotPerform = true
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression.
    * language = #text/cql
    * expression = "extension('http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-collectWith').value"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-donotsendmessage.fsh

Instance: activity-example-donotsendmessage-ad
InstanceOf: CPGCommunicationActivity
Usage: #example
* title = "Activity Example Do Not Send Message AD"
* insert ExampleActivityDefinitionMetadata(activity-example-donotsendmessage-ad)
* description = "Example Activity Definition for a recommendation not to send a message"
* name = "ActivityExampleDoNotSendMessageAD"
* kind = #CommunicationRequest
* profile = Canonical(CPGCommunicationRequest)
* code = $cpg-activity-type-cs#send-message "Send a message"
* doNotPerform = true
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-enrollment.fsh

Instance: activity-example-enrollment-ad
InstanceOf: CPGEnrollmentActivity
Usage: #example
* title = "Activity Example Enrollment AD"
* insert ExampleActivityDefinitionMetadata(activity-example-enrollment-ad)
* description = "Example Activity Definition for a recommendation to enroll a patient in a pathway"
* extension[+]
  * url = $cpg-enrollIn
  * valueCanonical = Canonical(activity-example-pathway-pd)
* modifierExtension[$cpg-isUnenrollment].valueBoolean = false
* name = "ActivityExampleEnrollmentAD"
* kind = #Task
* profile = Canonical(CPGEnrollmentTask)
* code = $cpg-activity-type-cs#enrollment "Enroll in a pathway or strategy"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "extension('http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-enrollIn').value"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-generatereport.fsh

Instance: activity-example-generatereport-ad
InstanceOf: http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-generatereportactivity
Usage: #example
* title = "Activity Example Generate Report AD"
* insert ExampleActivityDefinitionMetadata(activity-example-generatereport-ad)
* description = "Example Activity Definition for a recommendation to generate a report"
* extension[+]
  * url = $cpg-reportWith
  * valueCanonical = Canonical(activity-example-generatereport-measure)
* name = "ActivityExampleGenerateReportAD"
* kind = #Task
* profile = Canonical(CPGGenerateReportTask)
* code = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "extension('http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-reportWith').value"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-holdmedication.fsh

Instance: activity-example-holdmedication-ad
InstanceOf: CPGHoldActivity
Usage: #example
* title = "Activity Example Hold Medication AD"
* insert ExampleActivityDefinitionMetadata(activity-example-holdmedication-ad)
* description = "Example Activity Definition for a recommendation to hold a medication"
* name = "ActivityExampleHoldMedicationAD"
* kind = #Task
* profile = Canonical(CPGHoldTask)
* code = $cpg-activity-type-cs#hold-activity "Hold an activity in progress"
* intent = #proposal
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "Medication Proposal"
    * reference = Canonical(holdmedication-library)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-ordermedication.fsh

Instance: activity-example-ordermedication-ad
InstanceOf: CPGMedicationRequestActivity
Usage: #example
* title = "Activity Example Order Medication AD"
* insert ExampleActivityDefinitionMetadata(activity-example-ordermedication-ad)
* description = "Example Activity Definition for a recommendation to order a medication"
* name = "ActivityExampleOrderMedicationAD"
* kind = #MedicationRequest
* profile = Canonical(CPGMedicationRequest)
* code = $cpg-activity-type-cs#order-medication "Order a medication"
* priority = #routine
* doNotPerform = false
* productCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* dosage
  * sequence = 1
  * text = "75mcg daily"
  * timing
    * repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-orderservice.fsh

Instance: activity-example-orderservice-ad
InstanceOf: CPGServiceRequestActivity
Usage: #example
* title = "Activity Example Order Service AD"
* insert ExampleActivityDefinitionMetadata(activity-example-orderservice-ad)
* description = "Example Activity Definition for a recommendation to order a service"
* name = "ActivityExampleOrderServiceAD"
* kind = #ServiceRequest
* profile = Canonical(CPGServiceRequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-proposediagnosis.fsh

Instance: activity-example-proposediagnosis-ad
InstanceOf: CPGProposeDiagnosisActivity
Usage: #example
* title = "Activity Example Propose Diagnosis AD"
* insert ExampleActivityDefinitionMetadata(activity-example-proposediagnosis-ad)
* description = "Example Activity Definition for a recommendation to propose a diagnosis"
* name = "ActivityExampleProposeDiagnosisAD"
* kind = #Task
* profile = Canonical(CPGProposeDiagnosisTask)
* code = $cpg-activity-type-cs#propose-diagnosis "Propose a diagnosis"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql-expression
    * expression = "Condition { clinicalStatus: \"Active Condition\", verificationStatus: \"Provisional Condition\", category: \"Problem-list Item\", code: \"Ischemic Stroke\", subject: Patient, onset: Today() }"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-recommendimmunization.fsh

Instance: activity-example-recommendimmunization-ad
InstanceOf: CPGImmunizationActivity
Usage: #example
* title = "Activity Example Recommend Immunization AD"
* insert ExampleActivityDefinitionMetadata(activity-example-recommendimmunization-ad)
* description = "Example Activity Definition for a recommendation to provide an immunization"
* name = "ActivityExampleRecommendImmunizationAD"
* kind = #MedicationRequest
* profile = Canonical(CPGImmunizationRequest)
* code = $cpg-activity-type-cs#recommend-immunization "Recommend an immunization"
* intent = #proposal
* priority = #routine
* doNotPerform = false
* productCodeableConcept = $sct#871751006 "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-recorddetectedissue.fsh

Instance: activity-example-recorddetectedissue-ad
InstanceOf: CPGRecordDetectedIssueActivity
Usage: #example
* title = "Activity Example Record Detected Issue AD"
* insert ExampleActivityDefinitionMetadata(activity-example-recorddetectedissue-ad)
* description = "Example Activity Definition for a recommendation to record a detected issue"
* name = "ActivityExampleRecordDetectedIssueAD"
* kind = #Task
* profile = Canonical(CPGRecordDetectedIssueTask)
* code = $cpg-activity-type-cs#record-detected-issue "Record a detected issue"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql-expression
    * expression = "DetectedIssue { id: 'detected-issue', status: 'final', code: \"Time-related Detected Issue\", severity: 'high', patient: Patient, identified: Today() }"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-recordinference.fsh

Instance: activity-example-recordinference-ad
InstanceOf: CPGRecordInferenceActivity
Usage: #example
* title = "Activity Example Record Inference AD"
* insert ExampleActivityDefinitionMetadata(activity-example-recordinference-ad)
* description = "Example Activity Definition for a recommendation to record an inference"
* name = "ActivityExampleRecordInferenceAD"
* kind = #Task
* profile = Canonical(CPGRecordInferenceTask)
* code = $cpg-activity-type-cs#record-inference "Record an inference"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql-expression
    * expression = "Observation { id: 'inference', status: 'final', code: \"Inference\", subject: Patient, issued: Now() }"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-reportflag.fsh

Instance: activity-example-reportflag-ad
InstanceOf: CPGReportFlagActivity
Usage: #example
* title = "Activity Example Report Flag AD"
* description = "Example Activity Definition for a recommendation to report a flag"
* insert ExampleActivityDefinitionMetadata(activity-example-reportflag-ad)
* name = "ActivityExampleReportFlagAD"
* kind = #Task
* profile = Canonical(CPGReportFlagTask)
* code = $cpg-activity-type-cs#report-flag "Report a flag"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql-expression
    * expression = "Flag { id: 'flag', status: 'active', code: \"Flag\", subject: Patient }"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-resumemedication.fsh

Instance: activity-example-resumemedication-ad
InstanceOf: CPGResumeActivity
Usage: #example
* title = "Activity Example Resume Medication AD"
* insert ExampleActivityDefinitionMetadata(activity-example-resumemedication-ad)
* description = "Example Activity Definition for a recommendation to resume a medication on hold"
* name = "ActivityExampleResumeMedicationAD"
* kind = #Task
* profile = Canonical(CPGResumeTask)
* code = $cpg-activity-type-cs#resume-activity "Resume an activity currently on hold"
* intent = #proposal
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "Medication Proposal"
    * reference = Canonical(resumemedication-library)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-sendmessage.fsh

Instance: activity-example-sendmessage-ad
InstanceOf: CPGCommunicationActivity
Usage: #example
* title = "Activity Example Send Message AD"
* insert ExampleActivityDefinitionMetadata(activity-example-sendmessage-ad)
* description = "Example Activity Definition for a recommendation to send a message"
* name = "ActivityExampleSendMessageAD"
* kind = #CommunicationRequest
* profile = Canonical(CPGCommunicationRequest)
* code = $cpg-activity-type-cs#send-message "Send a message"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
* dynamicValue[+]
  * path = "payload.content"
  * expression
    * language = #text/cql
    * expression = "'Hello!'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/activitydefinition-activity-example-stopmedication.fsh

Instance: activity-example-stopmedication-ad
InstanceOf: CPGStopActivity
Usage: #example
* title = "Activity Example Stop Medication AD"
* insert ExampleActivityDefinitionMetadata(activity-example-stopmedication-ad)
* description = "Example Activity Definition for a recommendation to stop a medication"
* name = "ActivityExampleStopMedicationAD"
* kind = #Task
* profile = Canonical(CPGStopTask)
* code = $cpg-activity-type-cs#stop-activity "Stop (discontinue) an activity in progress"
* intent = #proposal
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "Medication Proposal"
    * reference = Canonical(stopmedication-library)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/bundle-activity-example-administermedication.fsh

Instance: activity-example-administermedication-bundle
InstanceOf: Bundle
Usage: #example
Description: "Example of a bundle for administering a medication"
* type = #collection
* entry[+]
  * fullUrl = Canonical(administermedication-asset-collection)
  * resource = administermedication-asset-collection
* entry[+]
  * fullUrl = Canonical(administermedication-library)
  * resource = administermedication-library
* entry[+]
  * fullUrl = Canonical(activity-example-administermedication-pd)
  * resource = activity-example-administermedication-pd
* entry[+]
  * fullUrl = Canonical(am-scenario7-bundle)
  * resource = am-scenario7-bundle

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-administermedication-asset-collection.fsh

Instance: administermedication-asset-collection
InstanceOf: Library
Usage: #example
* title = "Activity Example - Administer Medication Library Collection"
* insert ExampleLibraryMetadata(administermedication-asset-collection)
* insert RelatedFHIRLibraries
* description = "Asset collection of artifacts in the Administer Medication activity example"
* name = "ActivityExampleAdministerMedicationLibrary"
* type = $library-type#asset-collection
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* relatedArtifact[+]
  * type = #composed-of
  * resource = Canonical(activity-example-administermedication-ad)
* relatedArtifact[+]
  * type = #composed-of
  * resource = Canonical(administermedication-library)
* relatedArtifact[+]
  * type = #composed-of
  * resource = Canonical(activity-example-administermedication-pd)



---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-AdministerMedication.fsh

Instance: administermedication-library
InstanceOf: Library
Usage: #example
* title = "Administer Medication Library"
* insert ExampleLibraryMetadata(administermedication-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to administer a medication"
* name = "AdministerMedicationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Medication Not Proposed"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Active or Completed Medication Administration"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationAdministration
* parameter[+]
  * name = #"Medication Administration Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationAdministration
* parameter[+]
  * name = #"Administer Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Administer Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #MedicationAdministration
  * profile = Canonical(MedicationAdministration)
* dataRequirement[+]
  * type = #MedicationAdministration
  * profile = Canonical(MedicationAdministration)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-AdministerMedication.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-CollectInformation.fsh

Instance: collectinformation-library
InstanceOf: Library
Usage: #example
* title = "Collect Information Library"
* insert ExampleLibraryMetadata(collectinformation-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to collect information"
* name = "CollectInformationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #collectWithQuestionnaire
  * use = #in
  * min = 0
  * max = "1"
  * type = #string
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Collect Information Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Active or Completed Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-CollectInformation.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-DispenseMedication.fsh

Instance: dispensemedication-library
InstanceOf: Library
Usage: #example
* title = "Dispense Medication Library"
* insert ExampleLibraryMetadata(dispensemedication-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to dispense a medication"
* name = "DispenseMedicationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Medication Not Proposed"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Active or Completed Medication Dispense"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationDispense
* parameter[+]
  * name = #"Medication Dispense Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationDispense
* parameter[+]
  * name = #"Dispense Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Dispense Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #MedicationDispense
  * profile = Canonical(MedicationDispense)
* dataRequirement[+]
  * type = #MedicationDispense
  * profile = Canonical(MedicationDispense)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-DispenseMedication.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-DocumentMedication.fsh

Instance: documentmedication-library
InstanceOf: Library
Usage: #example
* title = "Document Medication Library"
* insert ExampleLibraryMetadata(documentmedication-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to document a medication"
* name = "DocumentMedicationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Medication Not Proposed"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Document Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Document Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-DocumentMedication.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-DoNotCollectInformation.fsh

Instance: donotcollectinformation-library
InstanceOf: Library
Usage: #example
* title = "Do Not Collect Information Library"
* insert ExampleLibraryMetadata(donotcollectinformation-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation not to collect information"
* name = "DoNotCollectInformationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #collectWithQuestionnaire
  * use = #in
  * min = 0
  * max = "1"
  * type = #string
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Collect Information Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Do Not Collect Information Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Active or In-progress Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Do Not Perform Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Rejected Do Not Perform Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-DoNotCollectInformation.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-DoNotSendMessage.fsh

Instance: donotsendmessage-library
InstanceOf: Library
Usage: #example
* title = "Do Not Send Message"
* insert ExampleLibraryMetadata(donotsendmessage-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation not to send a message"
* name = "DoNotSendMessage"
* type = $library-type#logic-library
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Active or In-progress Communication"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Communication
* parameter[+]
  * name = #"Communication Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Communication
* parameter[+]
  * name = #"Communication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #CommunicationRequest
* parameter[+]
  * name = #"Do Not Communicate Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #CommunicationRequest
* parameter[+]
  * name = #"Rejected Do Not Communicate Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #CommunicationRequest
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Communication
  * profile = Canonical(Communication)
* dataRequirement[+]
  * type = #Communication
  * profile = Canonical(Communication)
* dataRequirement[+]
  * type = #CommunicationRequest
  * profile = Canonical(CommunicationRequest)
* dataRequirement[+]
  * type = #CommunicationRequest
  * profile = Canonical(CommunicationRequest)
* dataRequirement[+]
  * type = #CommunicationRequest
  * profile = Canonical(CommunicationRequest)
* content
  * id = "ig-loader-DoNotSendMessage.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-EnrollPatient.fsh

Instance: enrollment-library
InstanceOf: Library
Usage: #example
* title = "Enrollment Library"
* insert ExampleLibraryMetadata(enrollment-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to enroll a patient in a pathway"
* name = "EnrollmentLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #enrollInPathway
  * use = #in
  * min = 0
  * max = "1"
  * type = #string
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #Tasks
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #EpisodesOfCare
  * use = #out
  * min = 0
  * max = "*"
  * type = #EpisodeOfCare
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Enrollment Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #Case
  * use = #out
  * min = 0
  * max = "*"
  * type = #EpisodeOfCare
* parameter[+]
  * name = #"Active or Completed Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #EpisodeOfCare
  * profile = Canonical(EpisodeOfCare)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #EpisodeOfCare
  * profile = Canonical(EpisodeOfCare)
* content
  * id = "ig-loader-EnrollPatient.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-GenerateReport.fsh

Instance: generatereport-library
InstanceOf: Library
Usage: #example
* title = "Generate Report Library"
* insert ExampleLibraryMetadata(generatereport-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to generate a report"
* name = "GenerateReportLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #reportWith
  * use = #in
  * min = 0
  * max = "1"
  * type = #string
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Generation Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Generated Report"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MeasureReport
* parameter[+]
  * name = #"Active or Completed Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #MeasureReport
  * profile = Canonical(MeasureReport)
* content
  * id = "ig-loader-GenerateReport.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-HoldMedication.fsh

Instance: holdmedication-library
InstanceOf: Library
Usage: #example
* title = "Hold Medication Library"
* insert ExampleLibraryMetadata(holdmedication-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to hold a medication"
* name = "HoldMedicationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Hold Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-HoldMedication.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-OrderMedication.fsh

Instance: ordermedication-library
InstanceOf: Library
Usage: #example
* title = "Order Medication Library"
* insert ExampleLibraryMetadata(ordermedication-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to order a medication"
* name = "OrderMedication"
* type = $library-type#logic-library
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Active or Completed Medication Administration"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationAdministration
* parameter[+]
  * name = #"Medication Administration Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationAdministration
* parameter[+]
  * name = #"Active or Completed Medication Dispense"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationDispense
* parameter[+]
  * name = #"Medication Dispense Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationDispense
* parameter[+]
  * name = #"Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Medication Not Proposed"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #MedicationAdministration
  * profile = Canonical(MedicationAdministration)
* dataRequirement[+]
  * type = #MedicationAdministration
  * profile = Canonical(MedicationAdministration)
* dataRequirement[+]
  * type = #MedicationDispense
  * profile = Canonical(MedicationDispense)
* dataRequirement[+]
  * type = #MedicationDispense
  * profile = Canonical(MedicationDispense)
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* content
  * id = "ig-loader-OrderMedication.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-OrderService.fsh

Instance: orderservice-library
InstanceOf: Library
Usage: #example
* title = "Order Service Library"
* insert ExampleLibraryMetadata(orderservice-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to order a service"
* name = "OrderServiceLibrary"
* type = $library-type#logic-library
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Active or Completed Procedure"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Procedure
* parameter[+]
  * name = #"Procedure Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Procedure
* parameter[+]
  * name = #"Procedure Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #ServiceRequest
* parameter[+]
  * name = #"Procedure Not Proposed"
  * use = #out
  * min = 0
  * max = "*"
  * type = #ServiceRequest
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Procedure
  * profile = Canonical(Procedure)
* dataRequirement[+]
  * type = #Procedure
  * profile = Canonical(Procedure)
* dataRequirement[+]
  * type = #ServiceRequest
  * profile = Canonical(ServiceRequest)
* dataRequirement[+]
  * type = #ServiceRequest
  * profile = Canonical(ServiceRequest)
* content
  * id = "ig-loader-OrderService.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-ProposeDiagnosis.fsh

Instance: proposediagnosis-library
InstanceOf: Library
Usage: #example
* title = "Propose Diagnosis Library"
* insert ExampleLibraryMetadata(proposediagnosis-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to propose a diagnosis"
* name = "ProposeDiagnosisLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* relatedArtifact[+]
  * type = #depends-on
  * resource = Canonical(ConditionClinicalStatusCodes)
* relatedArtifact[+]
  * type = #depends-on
  * resource = Canonical(ConditionVerificationStatus)
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Propose Diagnosis Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #Diagnosis
  * use = #out
  * min = 0
  * max = "*"
  * type = #Condition
* parameter[+]
  * name = #"Active or Completed Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #Condition
  * profile = Canonical(Condition)
* content
  * id = "ig-loader-ProposeDiagnosis.cql"


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-RecommendImmunization.fsh

Instance: recommendimmunization-library
InstanceOf: Library
Usage: #example
* title = "Recommend Immunization"
* insert ExampleLibraryMetadata(recommendimmunization-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to recommend an immunization"
* name = "RecommendImmunization"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = Canonical(ImmunizationRecommendationStatusCodes)
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Active or Completed Immunization"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Immunization
* parameter[+]
  * name = #"Immunization Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Immunization
* parameter[+]
  * name = #"Immunization Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #ImmunizationRecommendation
* parameter[+]
  * name = #"Immunization Not Proposed"
  * use = #out
  * min = 0
  * max = "*"
  * type = #ImmunizationRecommendation
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Immunization
  * profile = Canonical(Immunization)
* dataRequirement[+]
  * type = #Immunization
  * profile = Canonical(Immunization)
* dataRequirement[+]
  * type = #ImmunizationRecommendation
  * profile = Canonical(ImmunizationRecommendation)
* dataRequirement[+]
  * type = #ImmunizationRecommendation
  * profile = Canonical(ImmunizationRecommendation)
* content
  * id = "ig-loader-RecommendImmunization.cql"


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-RecordDetectedIssue.fsh

Instance: recorddetectedissue-library
InstanceOf: Library
Usage: #example
* title = "Record Detected Issue Library"
* insert ExampleLibraryMetadata(recorddetectedissue-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to record a detected issue"
* name = "RecordDetectedIssueLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Record Detected Issue Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Detected Issue"
  * use = #out
  * min = 0
  * max = "*"
  * type = #DetectedIssue
* parameter[+]
  * name = #"Active or Completed Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #DetectedIssue
  * profile = Canonical(DetectedIssue)
* content
  * id = "ig-loader-RecordDetectedIssue.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-RecordInference.fsh

Instance: recordinference-library
InstanceOf: Library
Usage: #example
* title = "Record Inference"
* insert ExampleLibraryMetadata(recordinference-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to record an inference"
* name = "RecordInference"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Record Inference Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #Inference
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Active or Completed Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
* content
  * id = "ig-loader-RecordInference.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-ReportFlag.fsh

Instance: reportflag-library
InstanceOf: Library
Usage: #example
* title = "Report Flag"
* insert ExampleLibraryMetadata(reportflag-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to record an inference"
* name = "ReportFlag"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Report Flag Task"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Reported Flag"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Flag
* parameter[+]
  * name = #"Active or Completed Activity"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Activity Proposal Rejected"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* dataRequirement[+]
  * type = #Flag
  * profile = Canonical(Flag)
* content
  * id = "ig-loader-ReportFlag.cql"


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-ResumeMedication.fsh

Instance: resumemedication-library
InstanceOf: Library
Usage: #example
* title = "Resume Medication Library"
* insert ExampleLibraryMetadata(resumemedication-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to resume a medication"
* name = "ResumeMedicationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Resume Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-ResumeMedication.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-SendMessage.fsh

Instance: sendmessage-library
InstanceOf: Library
Usage: #example
* title = "Send Message Library"
* insert ExampleLibraryMetadata(sendmessage-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to send a message"
* name = "SendMessageLibrary"
* type = $library-type#logic-library
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Active or Completed Communication"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Communication
* parameter[+]
  * name = #"Communication Not Done"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Communication
* parameter[+]
  * name = #"Communication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #CommunicationRequest
* parameter[+]
  * name = #"Communication Not Proposed"
  * use = #out
  * min = 0
  * max = "*"
  * type = #CommunicationRequest
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #Communication
  * profile = Canonical(Communication)
* dataRequirement[+]
  * type = #Communication
  * profile = Canonical(Communication)
* dataRequirement[+]
  * type = #CommunicationRequest
  * profile = Canonical(CommunicationRequest)
* dataRequirement[+]
  * type = #CommunicationRequest
  * profile = Canonical(CommunicationRequest)
* content
  * id = "ig-loader-SendMessage.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/library-StopMedication.fsh

Instance: stopmedication-library
InstanceOf: Library
Usage: #example
* title = "Stop Medication Library"
* insert ExampleLibraryMetadata(stopmedication-library)
* insert RelatedFHIRLibraries
* description = "Logic for an example recommendation to stop a medication"
* name = "StopMedicationLibrary"
* type = $library-type#logic-library
* relatedArtifact[+]
  * type = #depends-on
  * resource = $cpg-activity-type-cs
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #MedicationRequest
* parameter[+]
  * name = #"Inclusion Criteria"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* parameter[+]
  * name = #"Stop Medication Proposal"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Task
* parameter[+]
  * name = #"Is Recommendation Applicable"
  * use = #out
  * min = 0
  * max = "1"
  * type = #boolean
* dataRequirement[+]
  * type = #MedicationRequest
  * profile = Canonical(MedicationRequest)
* dataRequirement[+]
  * type = #Task
  * profile = Canonical(Task)
* content
  * id = "ig-loader-StopMedication.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/measure-activity-example-generatereport.fsh

Instance: activity-example-generatereport-measure
InstanceOf: CPGComputableMetric
Usage: #example
* insert Profile(cpg-computablemetric)
* insert ExampleMeasureMetadata(activity-example-generatereport-measure)
* description = "Example measure for the activity example to generate a report"
* title = "Activity Example Generate Report Measure"
* name = "ActivityExampleGenerateReportMeasure"
* scoring = $measure-scoring#continuous-variable
* improvementNotation = $measure-improvement-notation#increase
* date = "2023-10-19"
* group
  * population
    * code = $measure-population#measure-observation
    * criteria
      * language = #text/cql
      * description = "Example expression returns 100"
      * expression = "100"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-administermedication.fsh

Instance: activity-example-administermedication-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Administer Medication PD"
* insert ExamplePlanDefinitionMetadata(activity-example-administermedication-pd)
* description = "Example Plan Definition for a recommendation to administer a medication"
* name = "ActivityExampleAdministerMedicationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(administermedication-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-administermedication-ad)



---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-collectinformation.fsh

Instance: activity-example-collectinformation-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Collect Information PD"
* insert ExamplePlanDefinitionMetadata(activity-example-collectinformation-pd)
* description = "Example Plan Definition for a recommendation to collect information"
* name = "ActivityExampleCollectInformationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(collectinformation-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-collectinformation-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-dispensemedication.fsh

Instance: activity-example-dispensemedication-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Dispense Medication PD"
* insert ExamplePlanDefinitionMetadata(activity-example-dispensemedication-pd)
* description = "Example Plan Definition for a recommendation to dispense a medication"
* name = "ActivityExampleDispenseMedicationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(dispensemedication-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-dispensemedication-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-documentmedication.fsh

Instance: activity-example-documentmedication-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Document Medication PD"
* insert ExamplePlanDefinitionMetadata(activity-example-documentmedication-pd)
* description = "Example Plan Definition for a recommendation to document a medication"
* name = "ActivityExampleDocumentMedicationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(documentmedication-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-documentmedication-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-donotcollectinformation.fsh

Instance: activity-example-donotcollectinformation-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Do Not Collect Information PD"
* insert ExamplePlanDefinitionMetadata(activity-example-donotcollectinformation-pd)
* description = "Example Plan Definition for a recommendation not to collect information"
* name = "ActivityExampleDoNotCollectInformationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(donotcollectinformation-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-donotcollectinformation-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-donotsendmessage.fsh

Instance: activity-example-donotsendmessage-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Do Not Send Message PD"
* insert ExamplePlanDefinitionMetadata(activity-example-donotsendmessage-pd)
* description = "Example Plan Definition for a recommendation not to send a message"
* name = "ActivityExampleDoNotSendMessagePD"
* type = $plan-definition-type#eca-rule
* library = Canonical(donotsendmessage-library)
* action
  * title = "Do not greet the patient"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-donotsendmessage-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-enrollment.fsh

Instance: activity-example-enrollment-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Enrollment PD"
* insert ExamplePlanDefinitionMetadata(activity-example-enrollment-pd)
* description = "Example Plan Definition for a recommendation to enroll a patient"
* name = "ActivityExampleEnrollmentPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(enrollment-library)
* action
  * title = "Enroll patient in example pathway"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-enrollment-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-generatereport.fsh

Instance: activity-example-generatereport-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Generate Report PD"
* insert ExamplePlanDefinitionMetadata(activity-example-generatereport-pd)
* description = "Example Plan Definition for a recommendation to generate a report"
* name = "ActivityExampleGenerateReportPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(generatereport-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-generatereport-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-holdmedication.fsh

Instance: activity-example-holdmedication-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Hold Medication PD"
* insert ExamplePlanDefinitionMetadata(activity-example-holdmedication-pd)
* description = "Example Plan Definition for a recommendation to hold a medication"
* name = "ActivityExampleHoldMedicationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(holdmedication-library)
* action
  * title = "Hold a currently active medication"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-holdmedication-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-ordermedication.fsh

Instance: activity-example-ordermedication-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Order Medication PD"
* insert ExamplePlanDefinitionMetadata(activity-example-ordermedication-pd)
* description = "Example Plan Definition for a recommendation to order a medication"
* name = "ActivityExampleOrderMedicationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(ordermedication-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-ordermedication-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-orderservice.fsh

Instance: activity-example-orderservice-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Order Service PD"
* insert ExamplePlanDefinitionMetadata(activity-example-orderservice-pd)
* description = "Example Plan Definition for a recommendation to order a service"
* name = "ActivityExampleOrderServicePD"
* type = $plan-definition-type#eca-rule
* library = Canonical(orderservice-library)
* action
  * title = "Greet the patient"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-orderservice-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-pathway.fsh

Instance: activity-example-pathway-pd
InstanceOf: PlanDefinition
Usage: #example
* title = "Activity Example Pathway PD"
* insert Profile(cpg-pathwaydefinition)
* insert ExamplePlanDefinitionMetadata(activity-example-pathway-pd)
* description = "Example Pathway for activity examples"
* name = "ActivityExamplePathwayPD"
* type = $plan-definition-type#clinical-protocol
* action[+]
  * title = "Administer medication"
  * description = "Administer medication"
  * code = $cpg-common-process-codesystem#dispense-medications
  * definitionCanonical = Canonical(activity-example-administermedication-pd)
* action[+]
  * title = "Collect information"
  * description = "Collect information"
  * code = $cpg-common-process-codesystem#history-and-physical
  * definitionCanonical = Canonical(activity-example-collectinformation-pd)
* action[+]
  * title = "Dispense medication"
  * description = "Dispense medication"
  * code = $cpg-common-process-codesystem#dispense-medications
  * definitionCanonical = Canonical(activity-example-dispensemedication-pd)
* action[+]
  * title = "Document medication"
  * description = "Document medication"
  * code = $cpg-common-process-codesystem#dispense-medications
  * definitionCanonical = Canonical(activity-example-documentmedication-pd)
* action[+]
  * title = "Do not collect information"
  * description = "Do not collect information"
  * code = $cpg-common-process-codesystem#history-and-physical
  * definitionCanonical = Canonical(activity-example-donotcollectinformation-pd)
* action[+]
  * title = "Do not send message"
  * description = "Do not send message"
  * code = $cpg-common-process-codesystem#provide-counseling
  * definitionCanonical = Canonical(activity-example-donotsendmessage-pd)
* action[+]
  * title = "Enroll patient"
  * description = "Enroll patient"
  * code = $cpg-common-process-codesystem#triage
  * definitionCanonical = Canonical(activity-example-enrollment-pd)
* action[+]
  * title = "Generate report"
  * description = "Generate report"
  * code = $cpg-common-process-codesystem#record-and-report
  * definitionCanonical = Canonical(activity-example-generatereport-pd)
* action[+]
  * title = "Order medication"
  * description = "Order medication"
  * code = $cpg-common-process-codesystem#dispense-medications
  * definitionCanonical = Canonical(activity-example-ordermedication-pd)
* action[+]
  * title = "Order service"
  * description = "Order service"
  * code = $cpg-common-process-codesystem#guideline-based-care
  * definitionCanonical = Canonical(activity-example-orderservice-pd)
* action[+]
  * title = "Propose diagnosis"
  * description = "Propose diagnosis"
  * code = $cpg-common-process-codesystem#determine-diagnosis
  * definitionCanonical = Canonical(activity-example-proposediagnosis-pd)
* action[+]
  * title = "Recommend immunization"
  * description = "Recommend immunization"
  * code = $cpg-common-process-codesystem#dispense-medications
  * definitionCanonical = Canonical(activity-example-recommendimmunization-pd)
* action[+]
  * title = "Record detected issue"
  * description = "Record detected issue"
  * code = $cpg-common-process-codesystem#guideline-based-care
  * definitionCanonical = Canonical(activity-example-recorddetectedissue-pd)
* action[+]
  * title = "Record inference"
  * description = "Record inference"
  * code = $cpg-common-process-codesystem#diagnostic-testing
  * definitionCanonical = Canonical(activity-example-recordinference-pd)
* action[+]
  * title = "Report flag"
  * description = "Report flag"
  * code = $cpg-common-process-codesystem#monitor-and-follow-up-of-patient
  * definitionCanonical = Canonical(activity-example-reportflag-pd)
* action[+]
  * title = "Send message"
  * description = "Send message"
  * code = $cpg-common-process-codesystem#provide-counseling
  * definitionCanonical = Canonical(activity-example-sendmessage-pd)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-proposediagnosis.fsh

Instance: activity-example-proposediagnosis-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Propose Diagnosis PD"
* insert ExamplePlanDefinitionMetadata(activity-example-proposediagnosis-pd)
* description = "Example Plan Definition for a recommendation to propose a diagnosis"
* name = "ActivityExampleProposeDiagnosisPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(proposediagnosis-library)
* action
  * title = "Propose a diagnosis"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-proposediagnosis-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-recommendimmunization.fsh

Instance: activity-example-recommendimmunization-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Recommend Immunization PD"
* insert ExamplePlanDefinitionMetadata(activity-example-recommendimmunization-pd)
* description = "Example Plan Definition for a recommendation to provide an immunization"
* name = "ActivityExampleRecommendImmunizationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(recommendimmunization-library)
* action
  * title = "Collect date of patient last visit"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-recommendimmunization-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-recorddetectedissue.fsh

Instance: activity-example-recorddetectedissue-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Record Detected Issue PD"
* insert ExamplePlanDefinitionMetadata(activity-example-recorddetectedissue-pd)
* description = "Example Plan Definition for a recommendation to record a detected issue"
* name = "ActivityExampleRecordDetectedIssuePD"
* type = $plan-definition-type#eca-rule
* library = Canonical(recorddetectedissue-library)
* action
  * title = "Record a detected issue"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-recorddetectedissue-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-recordinference.fsh

Instance: activity-example-recordinference-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Record Inference PD"
* insert ExamplePlanDefinitionMetadata(activity-example-recordinference-pd)
* description = "Example Plan Definition for a recommendation to record an inference"
* name = "ActivityExampleRecordInferencePD"
* type = $plan-definition-type#eca-rule
* library = Canonical(recordinference-library)
* action
  * title = "Record an inference"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-recordinference-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-reportflag.fsh

Instance: activity-example-reportflag-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Report Flag PD"
* insert ExamplePlanDefinitionMetadata(activity-example-reportflag-pd)
* description = "Example Plan Definition for a recommendation to report a flat"
* name = "ActivityExampleReportFlagPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(reportflag-library)
* action
  * title = "Report a flag"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-reportflag-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-resumemedication.fsh

Instance: activity-example-resumemedication-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Resume Medication PD"
* insert ExamplePlanDefinitionMetadata(activity-example-resumemedication-pd)
* description = "Example Plan Definition for a recommendation to resume a medication currently on hold"
* name = "ActivityExampleResumeMedicationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(resumemedication-library)
* action
  * title = "Resume a medication currently on hold"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-resumemedication-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-sendmessage.fsh

Instance: activity-example-sendmessage-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Send Message PD"
* insert ExamplePlanDefinitionMetadata(activity-example-sendmessage-pd)
* description = "Example Plan Definition for a recommendation to send a message"
* name = "ActivityExampleSendMessagePD"
* type = $plan-definition-type#eca-rule
* library = Canonical(sendmessage-library)
* action
  * title = "Greet the patient"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-sendmessage-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/plandefinition-activity-example-stopmedication.fsh

Instance: activity-example-stopmedication-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
* title = "Activity Example Stop Medication PD"
* insert ExamplePlanDefinitionMetadata(activity-example-stopmedication-pd)
* description = "Example Plan Definition for a recommendation to stop a medication"
* name = "ActivityExampleStopMedicationPD"
* type = $plan-definition-type#eca-rule
* library = Canonical(stopmedication-library)
* action
  * title = "Stop a currently active medication"
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Is Recommendation Applicable"
  * type = $action-type#create
  * definitionCanonical = Canonical(activity-example-stopmedication-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/resources/questionnaire-activity-example-collectinformation.fsh

Instance: activity-example-collectinformation-questionnaire
InstanceOf: CPGComputableQuestionnaire
Usage: #example
* title = "Activity Example Collect Information Questionnaire"
* insert ExampleQuestionnaireMetadata(activity-example-collectinformation-questionnaire)
* description = "Example Questionnaire for use in collect information activity examples"
* name = "ActivityExampleCollectInformationQuestionnaire"
* item
  * linkId = "A"
  * text = "What was the date of your last visit with a medical professional?"
  * type = #date

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario1-patient.fsh

Instance: am-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Administer medication - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario1.fsh

Instance: am-scenario1
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Administer Medication - Scenario 1 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario1-patient)
* dosageInstruction
  * sequence = 1
  * text = "apply one patch three times per week"
  * timing.repeat
    * frequency = 3
    * period = 1
    * periodUnit = #wk
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 $v3-orderableDrugForm-cs#PATCH "patch"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 6 $v3-orderableDrugForm-cs#PATCH "patch"
  * expectedSupplyDuration = 14 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario2-patient.fsh

Instance: am-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Administer Medication - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario2.fsh

Instance: am-scenario2
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Administer Medication - Scenario 2 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario2-patient)
* dosageInstruction
  * sequence = 1
  * text = "apply one patch three times per week"
  * timing.repeat
    * frequency = 3
    * period = 1
    * periodUnit = #wk
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 $v3-orderableDrugForm-cs#PATCH "patch"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 6 $v3-orderableDrugForm-cs#PATCH "patch"
  * expectedSupplyDuration = 14 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario3-patient.fsh

Instance: am-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Administer Medication - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario3.fsh

Instance: am-scenario3
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Administer Medication - Scenario 3 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario3-patient)
* dosageInstruction
  * sequence = 1
  * text = "apply one patch three times per week"
  * timing.repeat
    * frequency = 3
    * period = 1
    * periodUnit = #wk
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 $v3-orderableDrugForm-cs#PATCH "patch"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 6 $v3-orderableDrugForm-cs#PATCH "patch"
  * expectedSupplyDuration = 14 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario4-mr.fsh

Instance: am-scenario4-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Administer Medication - Scenario 4 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario4-patient)
* dosageInstruction
  * sequence = 1
  * text = "apply one patch three times per week"
  * timing.repeat
    * frequency = 3
    * period = 1
    * periodUnit = #wk
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 $v3-orderableDrugForm-cs#PATCH "patch"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 6 $v3-orderableDrugForm-cs#PATCH "patch"
  * expectedSupplyDuration = 14 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario4-patient.fsh

Instance: am-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Administer Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario4.fsh

Instance: am-scenario4
InstanceOf: CPGMedicationAdministration
Usage: #example
Description: "Example test case - Administer Medication - Scenario 4 - MedicationAdministration"
* status = #completed
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario4-patient)
* effectivePeriod
  * start = "2015-01-15T22:03:00+01:00"
  * end = "2015-01-16T02:03:00+01:00"
* request = Reference(am-scenario4-mr)
* dosage
  * text = "apply one patch three times per week"
  * dose = 1 $v3-orderableDrugForm-cs#PATCH "patch"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario5-mr.fsh

Instance: am-scenario5-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Administer Medication - Scenario 5 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario5-patient)
* dosageInstruction
  * sequence = 1
  * text = "apply one patch three times per week"
  * timing.repeat
    * frequency = 3
    * period = 1
    * periodUnit = #wk
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 $v3-orderableDrugForm-cs#PATCH "patch"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 6 $v3-orderableDrugForm-cs#PATCH "patch"
  * expectedSupplyDuration = 14 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario5-patient.fsh

Instance: am-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Administer Medication - Scenario 5 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario5.fsh

Instance: am-scenario5
InstanceOf: CPGMedicationAdministration
Usage: #example
Description: "Example test case - Administer Medication - Scenario 5 - MedicationAdministration"
* status = #completed
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario5-patient)
* effectivePeriod
  * start = "2015-01-15T22:03:00+01:00"
  * end = "2015-01-16T02:03:00+01:00"
* request = Reference(am-scenario5-mr)
* dosage
  * text = "apply one patch three times per week"
  * dose = 1 $v3-orderableDrugForm-cs#PATCH "patch"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario6-mr.fsh

Instance: am-scenario6-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Administer Medication - Scenario 6 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario6-patient)
* dosageInstruction
  * sequence = 1
  * text = "apply one patch three times per week"
  * timing.repeat
    * frequency = 3
    * period = 1
    * periodUnit = #wk
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 $v3-orderableDrugForm-cs#PATCH "patch"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 6 $v3-orderableDrugForm-cs#PATCH "patch"
  * expectedSupplyDuration = 14 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario6-patient.fsh

Instance: am-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Administer Medication - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario6.fsh

Instance: am-scenario6
InstanceOf: CPGMedicationAdministration
Usage: #example
Description: "Example test case - Administer Medication - Scenario 6 - MedicationAdministration"
* status = #not-done
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario6-patient)
* effectivePeriod
  * start = "2015-01-15T22:03:00+01:00"
  * end = "2015-01-16T02:03:00+01:00"
* request = Reference(am-scenario6-mr)
* dosage
  * text = "apply one patch three times per week"
  * dose = 1 $v3-orderableDrugForm-cs#PATCH "patch"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario7-bundle.fsh

Instance: am-scenario7-bundle
InstanceOf: Bundle
Usage: #example
Description: "Example test case - Administer Medication - Scenario 7 - Bundle"
* type = #collection
* entry[+]
  * fullUrl = "http://hl7.org/fhir/uv/cpg/GuidanceResponse/am-scenario7-gr"
  * resource = am-scenario7-gr
* entry[+]
  * fullUrl = "http://hl7.org/fhir/uv/cpg/MedicationAdministration/am-scenario7"
  * resource = am-scenario7
* entry[+]
  * fullUrl = "http://hl7.org/fhir/uv/cpg/MedicationRequest/am-scenario7-mr"
  * resource = am-scenario7-mr
* entry[+]
  * fullUrl = "http://hl7.org/fhir/uv/cpg/Patient/am-scenario7-patient"
  * resource = am-scenario7-patient
* entry[+]
  * fullUrl = "http://hl7.org/fhir/uv/cpg/Task/request-am-scenario7"
  * resource = request-am-scenario7


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario7-gr.fsh

Instance: am-scenario7-gr
InstanceOf: GuidanceResponse
Usage: #example
Description: "Example test case - Administer Medication - Scenario 7 - GuidanceResponse"
* contained = output
* moduleCanonical = "http://hl7.org/fhir/uv/cpg/Library/administermedication-library"
* status = #success
* subject = Reference(am-scenario7-patient)
* outputParameters = Reference(output)

Instance: output
InstanceOf: Parameters
Usage: #inline
* parameter[+]
  * name = "Inclusion Criteria"
  * valueBoolean = true
* parameter[+]
  * name = "Is Recommendation Applicable"
  * valueBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario7-mr.fsh

Instance: am-scenario7-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Administer Medication - Scenario 7 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario7-patient)
* dosageInstruction
  * sequence = 1
  * text = "apply one patch three times per week"
  * timing.repeat
    * frequency = 3
    * period = 1
    * periodUnit = #wk
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 1 $v3-orderableDrugForm-cs#PATCH "patch"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 6 $v3-orderableDrugForm-cs#PATCH "patch"
  * expectedSupplyDuration = 14 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario7-patient.fsh

Instance: am-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Administer Medication - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/am-scenario7.fsh

Instance: am-scenario7
InstanceOf: CPGMedicationAdministration
Usage: #example
Description: "Example test case - Administer Medication - Scenario 2 - MedicationAdministration"
* status = #not-done
* medicationCodeableConcept = $sct#769510009 "Product containing precisely fentanyl 25 microgram/1 hour prolonged-release transdermal patch (clinical drug)"
* subject = Reference(am-scenario7-patient)
* effectivePeriod
  * start = "2015-01-15T22:03:00+01:00"
  * end = "2015-01-16T02:03:00+01:00"
* request = Reference(am-scenario7-mr)
* dosage
  * text = "apply one patch three times per week"
  * dose = 1 $v3-orderableDrugForm-cs#PATCH "patch"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario1-patient.fsh

Instance: ci-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Collect Information - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario2-patient.fsh

Instance: ci-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Collect Information - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario3-patient.fsh

Instance: ci-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Collect Information - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario4-patient.fsh

Instance: ci-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Collect Information - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario4.fsh

Instance: ci-scenario4
InstanceOf: CPGQuestionnaireResponse
Usage: #example
Description: "Example test case - Collect Information - Scenario 4 - QuestionnaireResponse"
* questionnaire = Canonical(activity-example-collectinformation-questionnaire)
* status = #completed
* subject = Reference(ci-scenario4-patient)
* item
  * linkId = "A"
  * answer.valueDate = "2020-12-10"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario5-patient.fsh

Instance: ci-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Collect Information - Scenario 5 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario5.fsh

Instance: ci-scenario5
InstanceOf: CPGQuestionnaireResponse
Usage: #example
Description: "Example test case - Collect Information - Scenario 5 - QuestionnaireResponse"
* questionnaire = Canonical(activity-example-collectinformation-questionnaire)
* status = #completed
* subject = Reference(ci-scenario5-patient)
* item
  * linkId = "A"
  * answer.valueDate = "2020-12-10"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario6-patient.fsh

Instance: ci-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Collect Information - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ci-scenario7-patient.fsh

Instance: ci-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Collect Information - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario1-patient.fsh

Instance: dcm-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Document Medication - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario1.fsh

Instance: dcm-scenario1
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Document Medication - Scenario 1 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dcm-scenario1-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario2-patient.fsh

Instance: dcm-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Document Medication - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario2.fsh

Instance: dcm-scenario2
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Document Medication - Scenario 2 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dcm-scenario2-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario3-patient.fsh

Instance: dcm-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Document Medication - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario3.fsh

Instance: dcm-scenario3
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Document Medication - Scenario 3 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dcm-scenario3-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario4-mr.fsh

Instance: dcm-scenario4-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Document Medication - Scenario 4 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dcm-scenario4-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario4-patient.fsh

Instance: dcm-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Document Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario4.fsh

Instance: dcm-scenario4
InstanceOf: CPGMedicationStatement
Usage: #example
Description: "Example test case - Document Medication - Scenario 4 - MedicationStatement"
* status = #active
* category = $medication-statement-category#inpatient "Inpatient"
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dcm-scenario4-patient)
* effectiveDateTime = "2015-01-23"
* dateAsserted = "2015-02-22"
* informationSource = Reference(dcm-scenario4-patient)
* derivedFrom = Reference(dm-scenario4-mr)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosage
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario5-mr.fsh

Instance: dcm-scenario5-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Document Medication - Scenario 5 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dcm-scenario5-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario5-patient.fsh

Instance: dcm-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Document Medication - Scenario 5 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario5.fsh

Instance: dcm-scenario5
InstanceOf: CPGMedicationStatement
Usage: #example
Description: "Example test case - Document Medication - Scenario 5 - MedicationStatement"
* status = #active
* category = $medication-statement-category#inpatient "Inpatient"
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dcm-scenario5-patient)
* effectiveDateTime = "2015-01-23"
* dateAsserted = "2015-02-22"
* informationSource = Reference(dcm-scenario5-patient)
* derivedFrom = Reference(dm-scenario5-mr)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosage
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario6-mr.fsh

Instance: dcm-scenario6-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Document Medication - Scenario 6 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dcm-scenario6-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario6-patient.fsh

Instance: dcm-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Document Medication - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario6.fsh

Instance: dcm-scenario6
InstanceOf: CPGMedicationStatement
Usage: #example
Description: "Example test case - Document Medication - Scenario 6 - MedicationStatement"
* status = #stopped
* category = $medication-statement-category#inpatient "Inpatient"
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dcm-scenario6-patient)
* effectiveDateTime = "2015-01-23"
* dateAsserted = "2015-02-22"
* informationSource = Reference(dcm-scenario6-patient)
* derivedFrom = Reference(dm-scenario6-mr)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosage
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario7-mr.fsh

Instance: dcm-scenario7-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Document Medication - Scenario 7 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dcm-scenario7-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario7-patient.fsh

Instance: dcm-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Document Medication - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dcm-scenario7.fsh

Instance: dcm-scenario7
InstanceOf: CPGMedicationStatement
Usage: #example
Description: "Example test case - Document Medication - Scenario 7 - MedicationStatement"
* status = #stopped
* category = $medication-statement-category#inpatient "Inpatient"
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dcm-scenario7-patient)
* effectiveDateTime = "2015-01-23"
* dateAsserted = "2015-02-22"
* informationSource = Reference(dcm-scenario7-patient)
* derivedFrom = Reference(dcm-scenario7-mr)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosage
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/di-scenario1-patient.fsh

Instance: di-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Record Detected Issue - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/di-scenario2-patient.fsh

Instance: di-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Record Detected Issue - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/di-scenario4-patient.fsh

Instance: di-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Record Detected Issue - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/di-scenario4.fsh

Instance: di-scenario4
InstanceOf: CPGDetectedIssue
Usage: #example
Description: "Example test case - Record Detected Issue - Scenario 4 - DetectedIssue"
* status = #final
* code = $v3-ActCode#TIME "timing detected issue"
* severity = #high
* patient = Reference(di-scenario4-patient)
* detail = "Proposed therapy may be inappropriate or ineffective based on proposed start or end time."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario1-patient.fsh

Instance: dm-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario1.fsh

Instance: dm-scenario1
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 1 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dm-scenario1-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario2-patient.fsh

Instance: dm-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario2.fsh

Instance: dm-scenario2
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 1 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dm-scenario2-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario3-patient.fsh

Instance: dm-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario3.fsh

Instance: dm-scenario3
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 3 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dm-scenario3-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario4-mr.fsh

Instance: dm-scenario4-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 4 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dm-scenario4-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario4-patient.fsh

Instance: dm-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario4.fsh

Instance: dm-scenario4
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 4 - MedicationDispense"
* status = #completed
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dm-scenario4-patient)
* authorizingPrescription = Reference(dm-scenario4-mr)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario5-mr.fsh

Instance: dm-scenario5-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 5 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dm-scenario5-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario5-patient.fsh

Instance: dm-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario5.fsh

Instance: dm-scenario5
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 5 - Patient"
* status = #completed
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dm-scenario5-patient)
* authorizingPrescription = Reference(dm-scenario5-mr)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario6-mr.fsh

Instance: dm-scenario6-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 6 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dm-scenario6-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario6-patient.fsh

Instance: dm-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario6.fsh

Instance: dm-scenario6
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 1 - MedicationDispense"
* status = #cancelled
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dm-scenario6-patient)
* authorizingPrescription = Reference(dm-scenario6-mr)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario7-mr.fsh

Instance: dm-scenario7-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 7 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(dm-scenario7-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario7-patient.fsh

Instance: dm-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dm-scenario7.fsh

Instance: dm-scenario7
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 7 - MedicationDispense"
* status = #cancelled
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(dm-scenario7-patient)
* authorizingPrescription = Reference(dm-scenario7-mr)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario1-patient.fsh

Instance: dnci-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario2-patient.fsh

Instance: dnci-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario3-patient.fsh

Instance: dnci-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario4-patient.fsh

Instance: dnci-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario5-patient.fsh

Instance: dnci-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 5 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario6-patient.fsh

Instance: dnci-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario7-patient.fsh

Instance: dnci-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario8-communication.fsh

Instance: dnci-scenario8-communication
InstanceOf: Communication
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 8 - Patient"
* status = #completed
* subject = Reference(Patient/dnci-scenario8-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnci-scenario8-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario8-patient.fsh

Instance: dnci-scenario8-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 8 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario8.fsh

Instance: dnci-scenario8
InstanceOf: CPGQuestionnaireResponse
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 8 - QuestionnaireResponse"
* questionnaire = Canonical(activity-example-collectinformation-questionnaire)
* status = #completed
* subject = Reference(dnci-scenario8-patient)
* item
  * linkId = "A"
  * answer.valueDate = "2020-12-10"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnci-scenario9-patient.fsh

Instance: dnci-scenario9-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 9 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario1-patient.fsh

Instance: dnsm-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario1.fsh

Instance: dnsm-scenario1
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 1 - Communication"
* status = #in-progress
* subject = Reference(Patient/dnsm-scenario1-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario1-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario2-communication.fsh

Instance: dnsm-scenario2-communication
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 2 - Communication"
* status = #in-progress
* subject = Reference(Patient/dnsm-scenario2-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario2-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario2-patient.fsh

Instance: dnsm-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario2.fsh

Instance: dnsm-scenario2
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 2 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-donotsendmessage-ad)
* status = #active
* doNotPerform = true
* subject = Reference(Patient/dnsm-scenario2-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario2-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario3-communication.fsh

Instance: dnsm-scenario3-communication
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 3 - Communication"
* status = #in-progress
* subject = Reference(Patient/dnsm-scenario3-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario3-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario3-patient.fsh

Instance: dnsm-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario3.fsh

Instance: dnsm-scenario3
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 3 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-donotsendmessage-ad)
* status = #revoked
* statusReason.text = "Medical reason"
* doNotPerform = true
* subject = Reference(Patient/dnsm-scenario3-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario3-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario4-patient.fsh

Instance: dnsm-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario4.fsh

Instance: dnsm-scenario4
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 4 - Patient"
* status = #active
* subject = Reference(Patient/dnsm-scenario4-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario4-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario5-patient.fsh

Instance: dnsm-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 5 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario5.fsh

Instance: dnsm-scenario5
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 5 - CommunicationRequest"
* status = #active
* subject = Reference(Patient/dnsm-scenario5-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario5-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario6-patient.fsh

Instance: dnsm-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario6.fsh

Instance: dnsm-scenario6
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 6 - Patient"
* status = #active
* subject = Reference(Patient/dnsm-scenario6-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario6-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario7-patient.fsh

Instance: dnsm-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario7.fsh

Instance: dnsm-scenario7
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 7 - Patient"
* status = #not-done
* statusReason.text = "Medical reason"
* subject = Reference(Patient/dnsm-scenario7-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario7-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario8-patient.fsh

Instance: dnsm-scenario8-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 8 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario8.fsh

Instance: dnsm-scenario8
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 8 - Patient"
* status = #completed
* subject = Reference(Patient/dnsm-scenario8-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario8-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/dnsm-scenario9-patient.fsh

Instance: dnsm-scenario9-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 9 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ep-scenario1-patient.fsh

Instance: ep-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ep-scenario2-patient.fsh

Instance: ep-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ep-scenario4-condition.fsh

Instance: ep-scenario4-condition
InstanceOf: CPGCondition
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 4 - Condition"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#problem-list-item
* code = $sct#422504002 "Ischemic stroke (disorder)"
  * text = "Stroke"
* subject = Reference(ep-scenario4-patient)
* encounter = Reference(ep-scenario4-encounter)
* onsetDateTime = "2020-01-15"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ep-scenario4-encounter.fsh

Instance: ep-scenario4-encounter
InstanceOf: CPGEncounter
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 4 - Encounter"
* status = #in-progress
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $sct#183807002 "Inpatient stay 9 days"
* priority = $sct#394849002 "High priority"
* subject = Reference(ep-scenario4-patient)
* episodeOfCare = Reference(ep-scenario4-eoc)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ep-scenario4-eoc.fsh

Instance: ep-scenario4-eoc
InstanceOf: cpg-case
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 4 - EpisodeOfCare"
* extension[cpg-enrolledIn].valueCanonical = Canonical(activity-example-pathway-pd)
* status = #active
* diagnosis.condition = Reference(ep-scenario4-condition)
* patient = Reference(ep-scenario4-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ep-scenario4-patient.fsh

Instance: ep-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-ci-scenario4.fsh

Instance: event-ci-scenario4
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 4 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnsm-scenario4-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)
* output
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueReference = Reference(ci-scenario4)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-ci-scenario5.fsh

Instance: event-ci-scenario5
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 5 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* basedOn = Reference(request-ci-scenario5)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(ci-scenario5-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)
* output
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueReference = Reference(ci-scenario5)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-ci-scenario6.fsh

Instance: event-ci-scenario6
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 6 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #cancelled
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(ci-scenario6-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-ci-scenario7.fsh

Instance: event-ci-scenario7
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 7 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #cancelled
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(ci-scenario7-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-di-scenario4.fsh

Instance: event-di-scenario4
InstanceOf: cpg-recorddetectedissuetask
Usage: #example
Description: "Example test case - Record Detected Issue - Scenario 4 - Record Detected Issue Task"
* meta.profile = Canonical(CPGTask)
* contained = detected-issue
* instantiatesCanonical = Canonical(activity-example-recorddetectedissue-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#record-detected-issue "Record a detected issue"
* for = Reference(di-scenario4-patient)
* input[detectedIssue]
  * type = $cpg-activity-type-cs#record-detected-issue "Record a detected issue"
  * valueReference = Reference(detected-issue)
* output
  * type = $cpg-activity-type-cs#record-detected-issue "Record a detected issue"
  * valueReference = Reference(di-scenario4)

Instance: detected-issue
InstanceOf: DetectedIssue
Usage: #inline
* status = #final
* code = $v3-ActCode#TIME "timing detected issue"
* severity = #high
* patient = Reference(di-scenario4-patient)
* detail = "Proposed therapy may be inappropriate or ineffective based on proposed start or end time."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-dnci-scenario1.fsh

Instance: event-dnci-scenario1
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 1 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #in-progress
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario1-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-dnci-scenario2.fsh

Instance: event-dnci-scenario2
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 2 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #in-progress
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario2-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-dnci-scenario3.fsh

Instance: event-dnci-scenario3
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 3 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #in-progress
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario3-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-dnci-scenario7.fsh

Instance: event-dnci-scenario7
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 7 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* modifierExtension[request-doNotPerform].valueBoolean = true
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario7-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-dnci-scenario8.fsh

Instance: event-dnci-scenario8
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 8 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario8-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)
* output
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueReference = Reference(dnci-scenario8)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-ep-scenario4.fsh

Instance: event-ep-scenario4
InstanceOf: cpg-enrollmenttask
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 4 - Patient"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-enrollment-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#enrollment "Enroll in a pathway or strategy"
* for = Reference(ep-scenario4-patient)
* input[pathway]
  * type = $cpg-activity-type-cs#enrollment "Enroll in a pathway or strategy"
  * valueCanonical = Canonical(activity-example-pathway-pd)
* output
  * type = $cpg-activity-type-cs#enrollment "Enroll in a pathway or strategy"
  * valueReference = Reference(ep-scenario4-eoc)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-gr-scenario4.fsh

Instance: event-gr-scenario4
InstanceOf: cpg-generatereporttask
Usage: #example
Description: "Example test case - Generate Report - Scenario 4 - Generate Report Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-generatereport-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
* for = Reference(gr-scenario4-patient)
* input[definition]
  * type = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
  * valueCanonical = Canonical(activity-example-generatereport-measure)
* output
  * type = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
  * valueReference = Reference(gr-scenario4)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-inf-scenario4.fsh

Instance: event-inf-scenario4
InstanceOf: cpg-recordinferencetask
Usage: #example
Description: "Example test case - Record Inference - Scenario 4 - Record Inference"
* meta.profile = Canonical(CPGTask)
* contained = inference
* instantiatesCanonical = Canonical(activity-example-recordinference-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#record-inference "Record an inference"
* for = Reference(inf-scenario4-patient)
* input[inference]
  * type = $cpg-activity-type-cs#record-inference "Record an inference"
  * valueReference = Reference(inference)
* output
  * type = $cpg-activity-type-cs#record-inference "Record an inference"
  * valueReference = Reference(inf-scenario4)

Instance: inference
InstanceOf: Observation
Usage: #inline
* status = #final
* code.text = "Inference"
* issued = "2020-01-15T10:30:00Z"
* subject = Reference(inf-scenario4-patient)
* performer = Reference(inf-practitioner)
* effectiveDateTime = "2023-01-23"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-pd-scenario4.fsh

Instance: event-pd-scenario4
InstanceOf: cpg-proposediagnosistask
Usage: #example
Description: "Example test case - Propose Diagnosis - Scenario 4 - Propose Diagnosis Task"
* meta.profile = Canonical(CPGTask)
* contained = proposed-diagnosis
* instantiatesCanonical = Canonical(activity-example-proposediagnosis-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#propose-diagnosis "Propose a diagnosis"
* for = Reference(pd-scenario4-patient)
* input[diagnosis]
  * type = $cpg-activity-type-cs#propose-diagnosis "Propose a diagnosis"
  * valueReference = Reference(proposed-diagnosis)
* output
  * type = $cpg-activity-type-cs#propose-diagnosis "Propose a diagnosis"
  * valueReference = Reference(pd-scenario4)

Instance: proposed-diagnosis
InstanceOf: CPGCondition
Usage: #inline
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#provisional
* category = $condition-category#problem-list-item
* code = $sct#422504002 "Ischemic stroke (disorder)"
  * text = "Stroke"
* subject = Reference(pd-scenario4-patient)
* onsetDateTime = "2020-01-15"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/event-rf-scenario4.fsh

Instance: event-rf-scenario4
InstanceOf: cpg-reportflagtask
Usage: #example
Description: "Example test case - Report Flag - Scenario 4 - Report Flag Task"
* meta.profile = Canonical(CPGTask)
* contained = flag
* instantiatesCanonical = Canonical(activity-example-reportflag-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#report-flag "Report a flag"
* for = Reference(rf-scenario4-patient)
* input[flag]
  * type = $cpg-activity-type-cs#report-flag "Report a flag"
  * valueReference = Reference(flag)
* output
  * type = $cpg-activity-type-cs#report-flag "Report a flag"
  * valueReference = Reference(rf-scenario4)

Instance: flag
InstanceOf: Flag
Usage: #inline
* status = #active
* category = $flag-category#admin "Administrative"
* code.text = "Flag"
* subject = Reference(rf-scenario4-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/gr-scenario1-patient.fsh

Instance: gr-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Generate Report - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/gr-scenario2-patient.fsh

Instance: gr-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Generate Report - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/gr-scenario4-patient.fsh

Instance: gr-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Generate Report - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/gr-scenario4.fsh

Instance: gr-scenario4
InstanceOf: MeasureReport
Usage: #example
Description: "Example test case - Generate Report - Scenario 4 - MeasureReport"
* status = #complete
* type = #individual
* measure = Canonical(activity-example-generatereport-measure)
* subject = Reference(gr-scenario4-patient)
* date = "2020-01-15"
* period
  * start = "2020-01-15"
  * end = "2020-01-15"
* improvementNotation = $measure-improvement-notation#increase
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore.value = 100

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario1-patient.fsh

Instance: hol-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Hold Medication - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario1.fsh

Instance: hol-scenario1
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Hold Medication - Scenario 1 - Medication Request"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(hol-scenario1-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario2-patient.fsh

Instance: hol-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Hold Medication - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario2-request.fsh

Instance: hol-scenario2-request
InstanceOf: cpg-holdtask
Usage: #example
Description: "Example test case - Hold Medication - Scenario 2 - Hold Task"
* meta.profile = Canonical(CPGHoldTask)
* instantiatesCanonical = Canonical(activity-example-holdmedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#hold-activity "Hold an activity in progress"
* for = Reference(hol-scenario2-patient)
* focus = Reference(hol-scenario2)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario2.fsh

Instance: hol-scenario2
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Hold Medication - Scenario 2 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(hol-scenario2-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario3-patient.fsh

Instance: hol-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Hold Medication - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario3-request.fsh

Instance: hol-scenario3-request
InstanceOf: cpg-holdtask
Usage: #example
Description: "Example test case - Hold Medication - Scenario 3 - Hold Task"
* meta.profile = Canonical(CPGHoldTask)
* instantiatesCanonical = Canonical(activity-example-holdmedication-ad)
* status = #rejected
* intent = #order
* code = $cpg-activity-type-cs#hold-activity "Hold an activity in progress"
* for = Reference(hol-scenario3-patient)
* focus = Reference(hol-scenario3)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario3.fsh

Instance: hol-scenario3
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Hold Medication - Scenario 3 - Medication Request"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(hol-scenario3-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/hol-scenario4-patient.fsh

Instance: hol-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Hold Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/inf-scenario1-patient.fsh

Instance: inf-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Record Inference - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/inf-scenario2-patient.fsh

Instance: inf-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Record Inference - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/inf-scenario4-patient.fsh

Instance: inf-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Record Inference - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/inf-scenario4.fsh

Instance: inf-scenario4
InstanceOf: CPGObservation
Usage: #example
Description: "Example test case - Record Inference - Scenario 4 - Observation"
* status = #final
* code.text = "Inference"
* issued = "2020-01-15T10:30:00Z"
* subject = Reference(inf-scenario4-patient)
* performer = Reference(inf-practitioner)
* effectiveDateTime = "2023-01-23"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/inf-scenarios-practitioner.fsh

Instance: inf-practitioner
InstanceOf: Practitioner
Usage: #example
Description: "Example test case - Record Inference - Scenarios - Practitioner"
* name
  * use = #usual
  * text = "Example Practitioner"
  * family = "Pracitioner"
  * given = "Example"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario1-patient.fsh

Instance: om-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Medication - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario2-patient.fsh

Instance: om-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Medication - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario2.fsh

Instance: om-scenario2
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Order Medication - Scenario 2 - MedicationRequest"
* status = #draft
* intent = #proposal
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(om-scenario2-patient)
* instantiatesCanonical = Canonical(activity-example-ordermedication-ad)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario3-patient.fsh

Instance: om-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Medication - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario3.fsh

Instance: om-scenario3
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Order Medication - Scenario 3 - MedicationRequest"
* status = #cancelled
* intent = #proposal
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(om-scenario3-patient)
* instantiatesCanonical = Canonical(activity-example-ordermedication-ad)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario4-patient.fsh

Instance: om-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario4.fsh

Instance: om-scenario4
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Order Medication - Scenario 4 - MedicationDispense"
* status = #completed
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(om-scenario4-patient)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario5-mr.fsh

Instance: om-scenario5-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Order Medication - Scenario 5 - MedicationRequest"
* status = #completed
* intent = #proposal
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(om-scenario5-patient)
* instantiatesCanonical = Canonical(activity-example-ordermedication-ad)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario5-patient.fsh

Instance: om-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Medication - Scenario 5 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario5.fsh

Instance: om-scenario5
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Order Medication - Scenario 5 - MedicationDispense"
* status = #completed
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(om-scenario5-patient)
* authorizingPrescription = Reference(om-scenario5-mr)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario6-patient.fsh

Instance: om-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Medication - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario6.fsh

Instance: om-scenario6
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Order Medication - Scenario 6 - MedicationDispense"
* status = #cancelled
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(om-scenario6-patient)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario7-mr.fsh

Instance: om-scenario7-mr
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Order Medication - Scenario 7 - MedicationRequest"
* status = #active
* intent = #proposal
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(om-scenario7-patient)
* instantiatesCanonical = Canonical(activity-example-ordermedication-ad)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario7-patient.fsh

Instance: om-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Medication - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/om-scenario7.fsh

Instance: om-scenario7
InstanceOf: CPGMedicationDispense
Usage: #example
Description: "Example test case - Order Medication - Scenario 7 - MedicationDispense"
* status = #cancelled
* medicationCodeableConcept = $ndc#0378-1805-10 "Levothyroxine Sodium, 1000 TABLET in 1 BOTTLE, PLASTIC (0378-1805-10) (package)"
* subject = Reference(om-scenario7-patient)
* type = $v3-ActCode#RFP "Refill - Part Fill"
* quantity = 100 $v3-orderableDrugForm-cs#TAB
* daysSupply = 30 'd' "Day"
* whenPrepared = "2015-03-16T17:13:00+05:00"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/os-scenario1-patient.fsh

Instance: os-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Service - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/os-scenario2-patient.fsh

Instance: os-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Service - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/os-scenario2.fsh

Instance: os-scenario2
InstanceOf: CPGServiceRequest
Usage: #example
Description: "Example test case - Order Service - Scenario 2 - ServiceRequest"
* instantiatesCanonical = Canonical(activity-example-orderservice-ad)
* status = #active
* intent = #proposal
* category = $sct#386053000 "Evaluation procedure (procedure)"
  * text = "Evaluation"
* code = $sct#710830005 "Assessment of passive range of motion (procedure)"
  * text = "Assessment of passive range of motion"
* subject = Reference(os-scenario2-patient)
* occurrenceDateTime = "2016-09-27"
* authoredOn = "2016-09-20"
* reasonCode.text = "assessment of mobility limitations due to osteoarthritis"
* bodySite = $sct#36701003 "Both knees (body structure)"
  * text = "Both knees"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/os-scenario4-patient.fsh

Instance: os-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Order Service - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/os-scenario4.fsh

Instance: os-scenario4
InstanceOf: CPGProcedure
Usage: #example
Description: "Example test case - Order Service - Scenario 4 - Procedure"
* status = #completed
* category = $sct#386053000 "Evaluation procedure (procedure)"
  * text = "Evaluation"
* code = $sct#710830005 "Assessment of passive range of motion (procedure)"
  * text = "Assessment of passive range of motion"
* subject = Reference(os-scenario4-patient)
* performedDateTime = "2016-09-27"
* reasonCode.text = "assessment of mobility limitations due to osteoarthritis"
* bodySite = $sct#36701003 "Both knees (body structure)"
  * text = "Both knees"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/pd-scenario1-patient.fsh

Instance: pd-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Propose Diagnosis - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/pd-scenario2-patient.fsh

Instance: pd-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Propose Diagnosis - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/pd-scenario4-patient.fsh

Instance: pd-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Propose Diagnosis - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/pd-scenario4.fsh

Instance: pd-scenario4
InstanceOf: CPGCondition
Usage: #example
Description: "Example test case - Propose Diagnosis - Scenario 4 - Condition"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#problem-list-item
* code = $sct#422504002 "Ischemic stroke (disorder)"
  * text = "Stroke"
* subject = Reference(pd-scenario4-patient)
* onsetDateTime = "2020-01-15"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-am-scenario2.fsh

Instance: request-am-scenario2
InstanceOf: cpg-administermedicationtask
Usage: #example
Description: "Example test case - Administer Medication - Scenario 2 - Administer Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-administermedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#administer-medication "Administer a medication"
* for = Reference(am-scenario2-patient)
* input
  * type = $cpg-activity-type-cs#administer-medication "Administer a medication"
  * valueReference = Reference(am-scenario2)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-am-scenario3.fsh

Instance: request-am-scenario3
InstanceOf: cpg-administermedicationtask
Usage: #example
Description: "Example test case - Administer Medication - Scenario 3 - Administer Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-administermedication-ad)
* status = #in-progress
* intent = #order
* code = $cpg-activity-type-cs#administer-medication "Administer a medication"
* for = Reference(am-scenario3-patient)
* input
  * type = $cpg-activity-type-cs#administer-medication "Administer a medication"
  * valueReference = Reference(am-scenario3)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-am-scenario5.fsh

Instance: request-am-scenario5
InstanceOf: cpg-administermedicationtask
Usage: #example
Description: "Example test case - Administer Medication - Scenario 5 - Administer Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-administermedication-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#administer-medication "Administer a medication"
* for = Reference(am-scenario5-patient)
* input
  * type = $cpg-activity-type-cs#administer-medication "Administer a medication"
  * valueReference = Reference(am-scenario5-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-am-scenario7.fsh

Instance: request-am-scenario7
InstanceOf: cpg-administermedicationtask
Usage: #example
Description: "Example test case - Administer Medication - Scenario 7 - Administer Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-administermedication-ad)
* status = #in-progress
* intent = #order
* code = $cpg-activity-type-cs#administer-medication "Administer a medication"
* for = Reference(am-scenario7-patient)
* input
  * type = $cpg-activity-type-cs#administer-medication "Administer a medication"
  * valueReference = Reference(am-scenario7-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-ci-scenario2.fsh

Instance: request-ci-scenario2
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 2 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(ci-scenario2-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-ci-scenario3.fsh

Instance: request-ci-scenario3
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 3 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #rejected
* intent = #proposal
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(ci-scenario3-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-ci-scenario5.fsh

Instance: request-ci-scenario5
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 5 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(ci-scenario5-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-ci-scenario7.fsh

Instance: request-ci-scenario7
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 7 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(ci-scenario7-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dcm-scenario2.fsh

Instance: request-dcm-scenario2
InstanceOf: cpg-documentmedicationtask
Usage: #example
Description: "Example test case - Document Medication - Scenario 2 - Document Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-documentmedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#document-medication "Document a medication"
* for = Reference(dcm-scenario2-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dcm-scenario2)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dcm-scenario3.fsh

Instance: request-dcm-scenario3
InstanceOf: cpg-documentmedicationtask
Usage: #example
Description: "Example test case - Document Medication - Scenario 3 - Document Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-documentmedication-ad)
* status = #in-progress
* intent = #order
* code = $cpg-activity-type-cs#document-medication "Document a medication"
* for = Reference(dcm-scenario3-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dcm-scenario3)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dcm-scenario5.fsh

Instance: request-dcm-scenario5
InstanceOf: cpg-documentmedicationtask
Usage: #example
Description: "Example test case - Document Medication - Scenario 5 - Document Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-documentmedication-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#document-medication "Document a medication"
* for = Reference(dcm-scenario5-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dcm-scenario5-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dcm-scenario7.fsh

Instance: request-dcm-scenario7
InstanceOf: cpg-documentmedicationtask
Usage: #example
Description: "Example test case - Document Medication - Scenario 7 - Document Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-documentmedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#document-medication "Document a medication"
* for = Reference(dcm-scenario7-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dcm-scenario7-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-di-scenario2.fsh

Instance: request-di-scenario2
InstanceOf: cpg-recorddetectedissuetask
Usage: #example
Description: "Example test case - Record Detected Issue - Scenario 2 - Record Detected Issue Task"
* meta.profile = Canonical(CPGTask)
* contained = Inline-Instance-for-request-di-scenario2
* instantiatesCanonical = Canonical(activity-example-recorddetectedissue-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#record-detected-issue "Record a detected issue"
* for = Reference(di-scenario2-patient)
* input[detectedIssue]
  * type = $cpg-activity-type-cs#record-detected-issue "Record a detected issue"
  * valueReference = Reference(detected-issue)

Instance: Inline-Instance-for-request-di-scenario2
InstanceOf: DetectedIssue
Usage: #inline
* id = "detected-issue"
* status = #final
* code = $v3-ActCode#TIME "timing detected issue"
* severity = #high
* patient = Reference(di-scenario2-patient)
* detail = "Proposed therapy may be inappropriate or ineffective based on proposed start or end time."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dm-scenario2.fsh

Instance: request-dm-scenario2
InstanceOf: cpg-dispensemedicationtask
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 2 - Dispense Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-dispensemedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#dispense-medication "Dispense a medication"
* for = Reference(dm-scenario2-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dm-scenario2)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dm-scenario3.fsh

Instance: request-dm-scenario3
InstanceOf: cpg-dispensemedicationtask
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 3 - Dispense Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-dispensemedication-ad)
* status = #in-progress
* intent = #order
* code = $cpg-activity-type-cs#dispense-medication "Dispense a medication"
* for = Reference(dm-scenario3-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dm-scenario3)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dm-scenario5.fsh

Instance: request-dm-scenario5
InstanceOf: cpg-dispensemedicationtask
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 5 - Dispense Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-dispensemedication-ad)
* status = #completed
* intent = #order
* code = $cpg-activity-type-cs#dispense-medication "Dispense a medication"
* for = Reference(dm-scenario5-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dm-scenario5-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dm-scenario7.fsh

Instance: request-dm-scenario7
InstanceOf: cpg-dispensemedicationtask
Usage: #example
Description: "Example test case - Dispense Medication - Scenario 7 - Dispense Medication Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-dispensemedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#dispense-medication "Dispense a medication"
* for = Reference(dm-scenario7-patient)
* input[medicationRequest]
  * type = $cpg-activity-type-cs#order-medication "Order a medication"
  * valueReference = Reference(dm-scenario7-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dnci-scenario2.fsh

Instance: request-dnci-scenario2
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 2 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* modifierExtension
  * url = "http://hl7.org/fhir/StructureDefinition/request-doNotPerform"
  * valueBoolean = true
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #rejected
* intent = #proposal
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario2-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dnci-scenario3.fsh

Instance: request-dnci-scenario3
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 3 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* modifierExtension
  * url = "http://hl7.org/fhir/StructureDefinition/request-doNotPerform"
  * valueBoolean = true
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #accepted
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario3-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dnci-scenario4.fsh

Instance: request-dnci-scenario4
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 4 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #ready
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario4-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dnci-scenario5.fsh

Instance: request-dnci-scenario5
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 5 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #ready
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario5-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-dnci-scenario6.fsh

Instance: request-dnci-scenario6
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Information - Scenario 6 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #ready
* intent = #order
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario6-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-ep-scenario2.fsh

Instance: request-ep-scenario2
InstanceOf: cpg-enrollmenttask
Usage: #example
Description: "Example test case - Enroll Patient - Scenario 2 - Enrollment Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-enrollment-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#enrollment "Enroll in a pathway or strategy"
* for = Reference(ep-scenario2-patient)
* input[pathway]
  * type = $cpg-activity-type-cs#enrollment "Enroll in a pathway or strategy"
  * valueCanonical = Canonical(activity-example-pathway-pd)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-gr-scenario2.fsh

Instance: request-gr-scenario2
InstanceOf: cpg-generatereporttask
Usage: #example
Description: "Example test case - Generate Report - Scenario 2 - Generate Report Task"
* meta.profile = Canonical(CPGTask)
* instantiatesCanonical = Canonical(activity-example-generatereport-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
* for = Reference(gr-scenario2-patient)
* input[definition]
  * type = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
  * valueCanonical = Canonical(activity-example-generatereport-measure)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-inf-scenario2.fsh

Instance: request-inf-scenario2
InstanceOf: cpg-recordinferencetask
Usage: #example
Description: "Example test case - Record Inference - Scenario 2 - Record Inference Task"
* meta.profile = Canonical(CPGTask)
* contained = Inline-Instance-for-request-inf-scenario2
* instantiatesCanonical = Canonical(activity-example-recordinference-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#record-inference "Record an inference"
* for = Reference(inf-scenario2-patient)
* input[inference]
  * type = $cpg-activity-type-cs#record-inference "Record an inference"
  * valueReference = Reference(inference)

Instance: Inline-Instance-for-request-inf-scenario2
InstanceOf: Observation
Usage: #inline
* id = "inference"
* status = #final
* code.text = "Inference"
* issued = "2020-01-15T10:30:00Z"
* subject = Reference(inf-scenario2-patient)
* performer = Reference(inf-practitioner)
* effectiveDateTime = "2023-01-23"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-pd-scenario2.fsh

Instance: request-pd-scenario2
InstanceOf: cpg-proposediagnosistask
Usage: #example
Description: "Example test case - Propose Diagnosis - Scenario 2 - Propose Diagnosis Task"
* meta.profile = Canonical(CPGTask)
* contained = Inline-Instance-for-request-pd-scenario2
* instantiatesCanonical = Canonical(activity-example-proposediagnosis-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#propose-diagnosis "Propose a diagnosis"
* for = Reference(pd-scenario2-patient)
* input[diagnosis]
  * type = $cpg-activity-type-cs#propose-diagnosis "Propose a diagnosis"
  * valueReference = Reference(proposed-diagnosis)

Instance: Inline-Instance-for-request-pd-scenario2
InstanceOf: CPGCondition
Usage: #inline
* id = "proposed-diagnosis"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#provisional
* category = $condition-category#problem-list-item
* code = $sct#422504002 "Ischemic stroke (disorder)"
  * text = "Stroke"
* subject = Reference(pd-scenario2-patient)
* onsetDateTime = "2020-01-15"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-rf-scenario2.fsh

Instance: request-rf-scenario2
InstanceOf: cpg-reportflagtask
Usage: #example
Description: "Example test case - Report Flag - Scenario 2 - Report Flag Task"
* meta.profile = Canonical(CPGTask)
* contained = Inline-Instance-for-request-rf-scenario2
* instantiatesCanonical = Canonical(activity-example-reportflag-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#report-flag "Report a flag"
* for = Reference(rf-scenario2-patient)
* input[flag]
  * type = $cpg-activity-type-cs#report-flag "Report a flag"
  * valueReference = Reference(flag)

Instance: Inline-Instance-for-request-rf-scenario2
InstanceOf: Flag
Usage: #inline
* id = "flag"
* status = #active
* category = $flag-category#admin "Administrative"
* code.text = "Flag"
* subject = Reference(rf-scenario2-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-stop-dnci-scenario5.fsh

Instance: request-stop-dnci-scenario5
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Collect Information - Scenario 5 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* modifierExtension[request-doNotPerform].valueBoolean = true
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #accepted
* intent = #proposal
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario5-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/request-stop-dnci-scenario6.fsh

Instance: request-stop-dnci-scenario6
InstanceOf: cpg-questionnairetask
Usage: #example
Description: "Example test case - Do Not Collect Infomration - Scenario 6 - Questionnaire Task"
* meta.profile = Canonical(CPGTask)
* modifierExtension[request-doNotPerform].valueBoolean = true
* instantiatesCanonical = Canonical(activity-example-collectinformation-ad)
* status = #rejected
* intent = #proposal
* code = $cpg-activity-type-cs#collect-information "Collect information"
* for = Reference(dnci-scenario6-patient)
* input[questionnaire]
  * type = $cpg-activity-type-cs#collect-information "Collect information"
  * valueCanonical = Canonical(activity-example-collectinformation-questionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario1-patient.fsh

Instance: res-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Resume Medication - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario1.fsh

Instance: res-scenario1
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Resume Medication - Scenario 1 - Medication Request"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(res-scenario1-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario2-patient.fsh

Instance: res-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Resume Medication - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario2-request.fsh

Instance: res-scenario2-request
InstanceOf: cpg-resumetask
Usage: #example
Description: "Example test case - Resume Medication - Scenario 2 - Resume Task"
* meta.profile = Canonical(CPGResumeTask)
* instantiatesCanonical = Canonical(activity-example-resumemedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#resume-activity "Resume an activity currently on hold"
* for = Reference(res-scenario2-patient)
* focus = Reference(res-scenario2)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario2.fsh

Instance: res-scenario2
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Resume Medication - Scenario 2 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(res-scenario2-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario3-patient.fsh

Instance: res-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Resume Medication - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario3-request.fsh

Instance: res-scenario3-request
InstanceOf: cpg-resumetask
Usage: #example
Description: "Example test case - Resume Medication - Scenario 3 - Resume Task"
* meta.profile = Canonical(CPGResumeTask)
* instantiatesCanonical = Canonical(activity-example-resumemedication-ad)
* status = #rejected
* intent = #order
* code = $cpg-activity-type-cs#resume-activity "Resume an activity currently on hold"
* for = Reference(res-scenario3-patient)
* focus = Reference(res-scenario3)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario3.fsh

Instance: res-scenario3
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Resume Medication - Scenario 3 - Medication Request"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(res-scenario3-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/res-scenario4-patient.fsh

Instance: res-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Resume Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/rf-scenario1-patient.fsh

Instance: rf-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Report Flag - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/rf-scenario2-patient.fsh

Instance: rf-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Report Flag - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/rf-scenario4-patient.fsh

Instance: rf-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Report Flag - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/rf-scenario4.fsh

Instance: rf-scenario4
InstanceOf: CPGFlag
Usage: #example
Description: "Example test case - Report Flag - Scenario 4 - Flag"
* status = #active
* category = $flag-category#admin "Administrative"
* code.text = "Flag"
* subject = Reference(rf-scenario4-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ri-scenario1-patient.fsh

Instance: ri-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Recommend Immunization - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ri-scenario2-patient.fsh

Instance: ri-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Recommend Immunization - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ri-scenario2.fsh

Instance: ri-scenario2
InstanceOf: cpg-immunizationrequest
Usage: #example
Description: "Example test case - Recommend Immunization - Scenario 2 - ImmunizationRequest"
* status = #draft
* intent = #proposal
* category[immunization] = $cpg-activity-type-cs#recommend-immunization
* priority = #routine
* medicationCodeableConcept = $sct#871751006 "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* subject = Reference(ri-scenario2-patient)
* instantiatesCanonical = Canonical(activity-example-recommendimmunization-ad)
* authoredOn = "2020-12-22"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ri-scenario4-patient.fsh

Instance: ri-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Recommend Immunization - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/ri-scenario4.fsh

Instance: ri-scenario4
InstanceOf: CPGImmunization
Usage: #example
Description: "Example test case - Recommend Immunization - Scenario 4 - Immunization"
* status = #completed
* vaccineCode = $sct#871751006 "Vaccine product containing only Hepatitis A virus antigen (medicinal product)"
* patient = Reference(ri-scenario4-patient)
* occurrenceDateTime = "2020-01-15"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario1-patient.fsh

Instance: sm-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Send Message - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario2-patient.fsh

Instance: sm-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Send Message - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario2.fsh

Instance: sm-scenario2
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Send Message - Scenario 2 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-sendmessage-ad)
* status = #active
* subject = Reference(Patient/sm-scenario2-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario2-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario3-patient.fsh

Instance: sm-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Send Message - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario3.fsh

Instance: sm-scenario3
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Send Message - Scenario 3 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-sendmessage-ad)
* status = #revoked
* statusReason.text = "Patient refused"
* subject = Reference(Patient/sm-scenario3-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario3-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario4-patient.fsh

Instance: sm-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Send Message - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario4.fsh

Instance: sm-scenario4
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Send Message - Scenario 4 - Communication"
* status = #completed
* subject = Reference(Patient/sm-scenario4-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario4-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario5-communication.fsh

Instance: sm-scenario5-communication
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Send Message - Scenario 5 - Communication"
* basedOn = Reference(sm-scenario5)
* status = #completed
* subject = Reference(Patient/sm-scenario5-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario5-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario5-patient.fsh

Instance: sm-scenario5-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Send Message - Scenario 5 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario5.fsh

Instance: sm-scenario5
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Send Message - Scenario 5 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-sendmessage-ad)
* status = #completed
* subject = Reference(Patient/sm-scenario5-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario5-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario6-patient.fsh

Instance: sm-scenario6-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Send Message - Scenario 6 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario6.fsh

Instance: sm-scenario6
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Send Message - Scenario 6 - Communication"
* status = #not-done
* statusReason.text = "Patient refused"
* subject = Reference(Patient/sm-scenario6-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario6-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario7-communication.fsh

Instance: sm-scenario7-communication
InstanceOf: CPGCommunication
Usage: #example
Description: "Example test case - Send Message - Scenario 7 - Communication"
* basedOn = Reference(sm-scenario7)
* status = #not-done
* statusReason.text = "Patient refused"
* subject = Reference(Patient/sm-scenario7-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario7-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario7-patient.fsh

Instance: sm-scenario7-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Send Message - Scenario 7 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/sm-scenario7.fsh

Instance: sm-scenario7
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Send Message - Scenario 7 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-sendmessage-ad)
* status = #revoked
* statusReason.text = "Patient refused"
* subject = Reference(Patient/sm-scenario7-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/sm-scenario7-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stop-dnsm-scenario5.fsh

Instance: stop-dnsm-scenario5
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 5 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-donotsendmessage-ad)
* status = #draft
* doNotPerform = true
* subject = Reference(Patient/dnsm-scenario5-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario5-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stop-dnsm-scenario6.fsh

Instance: stop-dnsm-scenario6
InstanceOf: CPGCommunicationRequest
Usage: #example
Description: "Example test case - Do Not Send Message - Scenario 6 - CommunicationRequest"
* extension[workflow-instantiatesCanonical].valueCanonical = Canonical(activity-example-donotsendmessage-ad)
* status = #revoked
* statusReason.text = "Medical reason"
* doNotPerform = true
* subject = Reference(Patient/dnsm-scenario6-patient)
* payload.contentString = "Hello!"
* recipient = Reference(Patient/dnsm-scenario6-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario1-patient.fsh

Instance: stp-scenario1-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Stop Medication - Scenario 1 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario1.fsh

Instance: stp-scenario1
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Stop Medication - Scenario 1 - Medication Request"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(stp-scenario1-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario2-patient.fsh

Instance: stp-scenario2-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Stop Medication - Scenario 2 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario2-request.fsh

Instance: stp-scenario2-request
InstanceOf: cpg-stoptask
Usage: #example
Description: "Example test case - Stop Medication - Scenario 2 - Stop Activity"
* meta.profile = Canonical(CPGStopTask)
* instantiatesCanonical = Canonical(activity-example-stopmedication-ad)
* status = #draft
* intent = #proposal
* code = $cpg-activity-type-cs#stop-activity "Stop (discontinue) an activity in progress"
* for = Reference(stp-scenario2-patient)
* focus = Reference(stp-scenario2)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario2.fsh

Instance: stp-scenario2
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Stop Medication - Scenario 2 - MedicationRequest"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(stp-scenario2-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario3-patient.fsh

Instance: stp-scenario3-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Stop Medication - Scenario 3 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario3-request.fsh

Instance: stp-scenario3-request
InstanceOf: cpg-stoptask
Usage: #example
Description: "Example test case - Stop Medication - Scenario 3 - Stop Task"
* meta.profile = Canonical(CPGStopTask)
* instantiatesCanonical = Canonical(activity-example-stopmedication-ad)
* status = #rejected
* intent = #order
* code = $cpg-activity-type-cs#stop-activity "Stop (discontinue) an activity in progress"
* for = Reference(stp-scenario3-patient)
* focus = Reference(stp-scenario3)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario3.fsh

Instance: stp-scenario3
InstanceOf: CPGMedicationRequest
Usage: #example
Description: "Example test case - Stop Medication - Scenario 3 - Medication Request"
* status = #active
* intent = #order
* priority = #routine
* medicationCodeableConcept = $sct#376988009 "Levothyroxine sodium 75 microgram oral tablet"
* subject = Reference(stp-scenario3-patient)
* reasonCode = $sct#40930008 "Hypothyroidism (disorder)"
* dosageInstruction
  * sequence = 1
  * text = "75mcg daily"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 75 'ug' "mcg"
* dispenseRequest
  * validityPeriod
    * start = "2015-01-15"
    * end = "2016-01-15"
  * quantity = 100 $v3-orderableDrugForm-cs#TAB "Tab"
  * expectedSupplyDuration = 30 'd' "days"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activity-examples/test-cases/stp-scenario4-patient.fsh

Instance: stp-scenario4-patient
InstanceOf: CPGPatient
Usage: #example
Description: "Example test case - Stop Medication - Scenario 4 - Patient"
* active = true
* name
  * use = #usual
  * text = "Example Patient"
  * family = "Patient"
  * given = "Example"
* gender = #female
* birthDate = "1990-10-01"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-bodyweight-change.fsh

Profile: CHFBodyWeightChange
Parent: Observation
Id: chf-bodyweight-change
Title: "CHF Body Weight Change"
Description: "This profile defines how to represent body weight change observations in FHIR using a CHF code and UCUM units of measure (in kg)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-daily-management)
* insert CaseFeatureOfExtension(chf-bodyweight-change-pd)
* insert CPGExpressionExtensions(Current Body Weight Change, Body Weight Change Assertion, Body Weight Change)
* insert CaseFeatureMetadata(chf-bodyweight-change)
* code ^short = "Body Weight Change"
  * ^definition = "Body Weight Change."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains BodyWeightCode 1..1
  * coding[BodyWeightCode]
    * system 1..1
    * system only uri
    * system = Canonical(chf-example-codes) (exactly)
    * code 1..1
    * code only code
    * code = #body-weight-change (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #kg/d (exactly)
    * ^short = "kg/d"
    * ^definition = "Kilograms per day"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-bodyweight.fsh

Profile: CHFBodyWeight
Parent: observation-vitalsigns
Id: chf-bodyweight
Title: "CHF Body Weight"
Description: "This profile defines how to represent body weight observations in FHIR using a standard LOINC code and UCUM units of measure (in kg)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-daily-management)
* insert CaseFeatureOfExtension(chf-bodyweight-pd)
* insert CaseFeatureMetadata(chf-bodyweight)
* code ^short = "Body Weight"
  * ^definition = "Body Weight."
  * ^comment = "additional codes that translate or map to this code are allowed.  For example a more granular LOINC code or code that is used locally in a system."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains BodyWeightCode 1..1
  * coding[BodyWeightCode]
    * system 1..1
    * system only uri
    * system = $loinc (exactly)
    * code 1..1
    * code only code
    * code = #29463-7 (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #kg (exactly)
    * ^short = "kg"
    * ^definition = "Kilograms"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-cardiology-consult-request.fsh

Profile: CHFCardiologyConsultRequest
Parent: CPGServiceRequest
Id: chf-cardiology-consult-request
Title: "CHF Cardiology Consult Request"
Description: "Request for a cardiology consultation as part of a congestive heart failure pathway"
* insert CaseFeatureMetadata(chf-cardiology-consult-request)
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-cardiology-consultation-pd)
* code MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-cardiology-consult.fsh

Profile: CHFCardiologyConsult
Parent: CPGProcedure
Id: chf-cardiology-consult
Title: "CHF Cardiology Consult"
Description: "Documents a procedure as an activity within the context of a computable clinical practice guideline"
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-cardiology-consultation-pd)
* insert CaseFeatureMetadata(chf-cardiology-consult)
* code MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-creatinine.fsh

Profile: CHFCreatinine
Parent: Observation
Id: chf-creatinine
Title: "CHF Creatinine"
Description: "This profile defines how to represent creatinine observations in FHIR using a LOINC code and UCUM units of measure (in mg/dL)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-daily-management)
* insert CaseFeatureOfExtension(chf-creatinine-pd)
* insert CaseFeatureMetadata(chf-creatinine)
* code ^short = "Intake/output"
  * ^definition = "Creatinine, measured in mg/dL."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains CreatinineCode 1..1
  * coding[CreatinineCode]
    * system 1..1
    * system only uri
    * system = $loinc (exactly)
    * code 1..1
    * code only code
    * code = #39802-4 (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #mg/dL (exactly)
    * ^short = "mg/dL"
    * ^definition = "Milligrams per deciliter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-egfr.fsh

Profile: CHFEGFR
Parent: Observation
Id: chf-egfr
Title: "CHF eGFR"
Description: "This profile defines how to represent eGFR in FHIR using a CHF code and UCUM units of measure (in mol/mm/m2)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-egfr-pd)
* insert CaseFeatureMetadata(chf-egfr)
* code ^short = "eGFR"
  * ^definition = "eGFR, measured in mol/mm/m2."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains eGFRCode 1..1
  * coding[eGFRCode]
    * system 1..1
    * system only uri
    * system = Canonical(chf-example-codes) (exactly)
    * code 1..1
    * code only code
    * code = #egfr (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #mol/mm/m2 (exactly)
    * ^short = "mol/mm/m2"
    * ^definition = "Moles per millimeter per meter squared"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-jvp-request.fsh

Profile: CHFJVPRequest
Parent: CPGServiceRequest
Id: chf-jvp-request
Title: "CHF Jugular Venous Pressure Request"
Description: "Request to measure jugular venous pressure as part of a congestive heart failure pathway"
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-jvp-pd)
* insert CaseFeatureMetadata(chf-jvp-request)
* code MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-jvp.fsh

Profile: CHFJVP
Parent: Observation
Id: chf-jvp
Title: "CHF Jugular Venous Pressure"
Description: "This profile defines how to represent jugular venous pressure observations in FHIR using a CHF code and UCUM units of measure (in cmH2O)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-jvp-pd)
* insert CaseFeatureMetadata(chf-jvp)
* code ^short = "JVP"
  * ^definition = "Jugular venous pressure, measured in cmH2O."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains JVPCode 1..1
  * coding[JVPCode]
    * system 1..1
    * system only uri
    * system = Canonical(chf-example-codes) (exactly)
    * code 1..1
    * code only code
    * code = #jvp (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #cm[H2O] (exactly)
    * ^short = "cmH2O"
    * ^definition = "Centimeters of H2O"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-lasix-iv-administration.fsh

Profile: CHFLASIXIVAdminisistration
Parent: CPGMedicationAdministration
Id: chf-lasix-iv-administration
Title: "CHF LASIX IV Administration"
Description: "Documents the administration of LASIX IV as a pathway event within a congestive heart failure pathway"
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-lasix)
* insert CaseFeatureMetadata(chf-lasix-iv-administration)
* medication[x] MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-lasix-iv-request.fsh

Profile: CHFLASIXIVRequest
Parent: CPGMedicationRequest
Id: chf-lasix-iv-request
Title: "CHF LASIX IV Request"
Description: "Request to administer LASIX IV as part of a congestive heart failure pathway"
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-lasix)
* insert CaseFeatureMetadata(chf-lasix-iv-request)
* medication[x] MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-lasix-po-administration.fsh

Profile: CHFLASIXPOAdminisistration
Parent: CPGMedicationAdministration
Id: chf-lasix-po-administration
Title: "CHF LASIX PO Administration"
Description: "Documents the administration of LASIX PO as a pathway event within a congestive heart failure pathway"
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-lasix)
* insert CaseFeatureMetadata(chf-lasix-po-administration)
* medication[x] MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-lasix-po-request.fsh

Profile: CHFLASIXPORequest
Parent: CPGMedicationRequest
Id: chf-lasix-po-request
Title: "CHF LASIX PO Request"
Description: "Request to administer LASIX PO as part of a congestive heart failure pathway"
* insert CaseFeatureMetadata(chf-lasix-po-request)
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-lasix)
* medication[x] MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-net-io.fsh

Profile: CHFNetIO
Parent: Observation
Id: chf-net-io
Title: "CHF Net Intake/Output"
Description: "This profile defines how to represent net intake/output observations in FHIR using a CHF code and UCUM units of measure (in L/day)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-daily-management)
* insert CaseFeatureOfExtension(chf-net-io-pd)
* insert CaseFeatureMetadata(chf-net-io)
* code ^short = "Intake/output"
  * ^definition = "Intake/output over 24 hours, measured in L/day."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains NetIOCode 1..1
  * coding[NetIOCode]
    * system 1..1
    * system only uri
    * system = Canonical(chf-example-codes) (exactly)
    * code 1..1
    * code only code
    * code = #net-intake-output (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #L/d (exactly)
    * ^short = "L/d"
    * ^definition = "Liters per day"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-o2-sat-request.fsh

Profile: CHFO2SatRequest
Parent: CPGServiceRequest
Id: chf-o2-sat-request
Title: "CHF Oxygen Saturation Request"
Description: "Request to measure oxygen saturation as part of a congestive heart failure pathway"
* insert CaseFeatureMetadata(chf-o2-sat-request)
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-o2-sat-pd)
* code MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-o2-sat.fsh

Profile: CHFO2Sat
Parent: observation-vitalsigns
Id: chf-o2-sat
Title: "CHF Oxygen Saturation"
Description: "This profile defines how to represent oxygen saturation observations in FHIR using a standard LOINC code and UCUM units of measure."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-o2-sat-pd)
* insert CaseFeatureMetadata(chf-o2-sat)
* code ^short = "O2 Sat"
  * ^definition = "Oxygen Saturation."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains O2SatCode 1..1
  * coding[O2SatCode]
    * system 1..1
    * system only uri
    * system = $loinc (exactly)
    * code 1..1
    * code only code
    * code = #2708-6 (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #% (exactly)
    * ^short = "%"
    * ^definition = "Percent saturation"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-potassium.fsh

Profile: CHFPotassium
Parent: observation-vitalsigns
Id: chf-potassium
Title: "CHF Potassium"
Description: "This profile defines how to represent potassium observations in FHIR using a standard LOINC code and UCUM units of measure (in meq/L)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-hypervolemia)
* insert CaseFeatureOfExtension(chf-potassium-pd)
* insert CaseFeatureMetadata(chf-potassium)
* code ^short = "Potassium"
  * ^definition = "Potassium (in meq/L)."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains PotassiumCode 1..1
  * coding[PotassiumCode]
    * system 1..1
    * system only uri
    * system = $loinc (exactly)
    * code 1..1
    * code only code
    * code = #86919-8 (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #meq/L (exactly)
    * ^short = "%"
    * ^definition = "Percent saturation"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/profiles/structuredefinition-chf-urine-out.fsh

Profile: CHFUrineOut
Parent: Observation
Id: chf-urine-out
Title: "CHF Urine Out"
Description: "This profile defines how to represent urine output observations in FHIR using a LOINC code and UCUM units of measure (in L/day)."
* insert CaseFeatureOfExtension(chf-pathway)
* insert CaseFeatureOfExtension(chf-daily-management)
* insert CaseFeatureOfExtension(chf-urine-out-pd)
* insert CaseFeatureMetadata(chf-urine-out)
* code ^short = "Urine output"
  * ^definition = "Urine output over 24 hours, measured in L/day."
  * coding ^slicing.discriminator[0].type = #value
    * ^slicing.discriminator[=].path = "code"
    * ^slicing.discriminator[+].type = #value
    * ^slicing.discriminator[=].path = "system"
    * ^slicing.ordered = false
    * ^slicing.rules = #open
  * coding contains UrineOutputCode 1..1
  * coding[UrineOutputCode]
    * system 1..1
    * system only uri
    * system = $loinc (exactly)
    * code 1..1
    * code only code
    * code = #9192-6 (exactly)
* valueQuantity
  * value 1..1 MS
  * value only decimal
  * unit 1..1 MS
  * unit only string
  * system 1..1 MS
  * system only uri
  * system = $unitsofmeasure (exactly)
  * code 1..1
  * code only code
  * code = #L/d (exactly)
    * ^short = "L/d"
    * ^definition = "Liters per day"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-bodyweight-ad.fsh

Instance: chf-bodyweight-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Body Weight Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-bodyweight-ad)
* name = "CHFBodyWeight"
* description = "Measure body weight"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = $sct#307818003 "Weight monitoring (regime/therapy)"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-bodyweight-change-ad.fsh

Instance: chf-bodyweight-change-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Body Weight Change Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-bodyweight-change-ad)
* name = "CHFBodyWeightChange"
* description = "Record body weight change"
* kind = #Task
* profile = Canonical(cpg-recordinferencetask)
* code = $cpg-activity-type-cs#record-inference "Record an inference"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql-expression
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql-identifier
    * expression = "Body Weight Change"
    * reference = Canonical(CHF)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-cardiology-consultation.fsh

Instance: chf-cardiology-consultation
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Cardiology Consultation Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-cardiology-consultation)
* name = "CHFCardiologyConsultation"
* description = "Cardiology consultation as part of a congestive heart failure care pathway"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* productCodeableConcept = CHFCodes#cardiology-consultation "Cardiology Consultation"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-creatinine-ad.fsh

Instance: chf-creatinine-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Creatinine Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-creatinine-ad)
* name = "CHFCreatinine"
* description = "Monitor Creatinine"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = $sct#70901006 "Creatinine measurement (procedure)"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-egfr-ad.fsh

Instance: chf-egfr-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF eGFR Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-egfr-ad)
* name = "CHFEGFR"
* description = "Measure eGFR"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = $sct#63061008 "Measuring intake and output (procedure)"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-jvp-ad.fsh

Instance: chf-jvp-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Jugular Venous Pressure Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-jvp-ad)
* name = "CHFJVP"
* description = "Measure jugular venous pressure"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = CHFCodes#measure-jvp "Measure jugular venous pressure"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-lasix-iv.fsh

Instance: chf-lasix-iv
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF LASIX IV Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-lasix-iv)
* name = "CHFLASIXIV"
* description = "Activity definition to administer LASIX IV as part of a congestive heart failure pathway"
* kind = #MedicationRequest
* profile = Canonical(cpg-medicationrequest)
* code = $cpg-activity-type-cs#order-medication "Order a medication"
* intent = #proposal
* priority = #routine
* doNotPerform = false
* productCodeableConcept = CHFCodes#lasix-iv "LASIX IV"
* dosage
  * sequence = 1
  * text = "40mg"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#47625008 "Intravenous Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 40 'mg' "mg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-lasix-po.fsh

Instance: chf-lasix-po
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF LASIX PO Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-lasix-po)
* name = "CHFLASIXPO"
* description = "Activity definition to administer LASIX PO as part of a congestive heart failure pathway"
* kind = #MedicationRequest
* profile = Canonical(cpg-medicationrequest)
* code = $cpg-activity-type-cs#order-medication "Order a medication"
* intent = #proposal
* priority = #routine
* doNotPerform = false
* productCodeableConcept = CHFCodes#lasix-po "LASIX PO"
* dosage
  * sequence = 1
  * text = "40mg"
  * timing.repeat
    * frequency = 1
    * period = 1
    * periodUnit = #d
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 40 'mg' "mg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-net-io-ad.fsh

Instance: chf-net-io-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Net IO Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-net-io-ad)
* name = "CHFNetIO"
* description = "Measure net intake/output"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = $sct#63061008 "Measuring intake and output (procedure)"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-o2-sat-ad.fsh

Instance: chf-o2-sat-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Oxygen Saturation Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-o2-sat-ad)
* name = "CHFO2Sat"
* description = "Monitor Oxygen Saturation"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = $sct#104847001 "Oxygen saturation measurement (procedure)"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-potassium-ad.fsh

Instance: chf-potassium-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Potassium Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-potassium-ad)
* name = "CHFPotassium"
* description = "Monitor Potassium"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = $sct#59573005 "Potassium measurement (procedure)"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-report-bodyweight-change.fsh

Instance: chf-report-bodyweight-change
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Report Body Weight Change Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-report-bodyweight-change)
* extension[+]
  * url = Canonical(cpg-reportWith)
  * valueCanonical = Canonical(chf-bodyweight-change-measure)
* name = "CHFReportBodyWeightChange"
* description = "Record body weight change metric"
* kind = #Task
* profile = Canonical(cpg-generatereporttask)
* code = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "extension('http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-reportWith').value"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-report-bodyweight.fsh

Instance: chf-report-bodyweight
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Report Body Weight Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-report-bodyweight)
* extension[+]
  * url = Canonical(cpg-reportWith)
  * valueCanonical = Canonical(chf-bodyweight-measure)
* name = "CHFReportBodyWeight"
* description = "Record body weight metric"
* kind = #Task
* profile = Canonical(cpg-generatereporttask)
* code = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "extension('http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-reportWith').value"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-report-urine-out.fsh

Instance: chf-report-urine-out
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Report Urine Out Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-report-urine-out)
* extension[+]
  * url = Canonical(cpg-reportWith)
  * valueCanonical = Canonical(chf-urine-out-measure)
* name = "CHFReportUrineOut"
* description = "Record urine output metric"
* kind = #Task
* profile = Canonical(cpg-generatereporttask)
* code = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
* doNotPerform = false
* dynamicValue[+]
  * path = "input.type"
  * expression
    * language = #text/cql
    * expression = "code"
* dynamicValue[+]
  * path = "input.value"
  * expression
    * language = #text/cql
    * expression = "extension('http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-reportWith').value"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/activitydefinition-chf-urine-out-ad.fsh

Instance: chf-urine-out-ad
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CHF Urine Out Activity Defintion"
* insert ExampleActivityDefinitionMetadata(chf-urine-out-ad)
* name = "CHFUrineOut"
* description = "Measure urine output"
* kind = #ServiceRequest
* profile = Canonical(cpg-servicerequest)
* code = $cpg-activity-type-cs#order-service "Order a service"
* intent = #proposal
* doNotPerform = false
* location = Reference(chf-locationdefinition)
* participant
  * type = #practitioner
  * role = $practitioner-role#nurse "Nurse"
* productCodeableConcept = $sct#444990003 "Measurement of urine output (procedure)"
* dynamicValue
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/chf-careteamdefinition.fsh

Instance: chf-careteamdefinition
InstanceOf: cpg-careteamdefinition
Usage: #example
Description: "CHF care team"
* name = "CHF Care Team (definition)"
* participant
  * role = $sct#17561000 "Cardiologist"
  * member = Reference(chf-practitionerroledefinition)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/chf-caseplansummarydefinition.fsh

Instance: chf-caseplansummarydefinition
InstanceOf: cpg-caseplansummarydefinition
Usage: #example
* insert CHFGraphDefinitionMetadata(chf-caseplansummarydefinition)
* extension[+]
  * url = Canonical(artifact-identifier)
  * valueIdentifier
    * use = #official
    * system = $chf-implementationguide
    * value = "CHFCasePlanSummaryDefinition"
* extension[+]
  * url = Canonical(artifact-title)
  * valueString = "CHF Case Plan Summary Definition"
* name = "CHFCasePlanSummaryDefinition"
* description = "Definition of the case plan summary document for a congestive heart failure pathway"
* start = #EpisodeOfCare
* profile = Canonical(cpg-case)
* link
  * path = "encounter"
  * description = "Pathway Events"
  * target
    * type = #Encounter
    * profile = Canonical(cpg-encounter)
    * link[0]
      * description = "Weight"
      * target
        * type = #Observation
        * profile = Canonical(chf-bodyweight)
    * link[+]
      * description = "Weight Change"
      * target
        * type = #Observation
        * profile = Canonical(chf-bodyweight-change)
    * link[+]
      * description = "Urine Out"
      * target
        * type = #Observation
        * profile = Canonical(chf-urine-out)
    * link[+]
      * description = "Net IO's"
      * target
        * type = #Observation
        * profile = Canonical(chf-net-io)
    * link[+]
      * description = "JVP"
      * target[0]
        * type = #Observation
        * profile = Canonical(chf-jvp)
      * target[+]
        * type = #ServiceRequest
        * profile = Canonical(chf-jvp-request)
    * link[+]
      * description = "O2 Sat"
      * target[0]
        * type = #Observation
        * profile = Canonical(chf-o2-sat)
      * target[+]
        * type = #ServiceRequest
        * profile = Canonical(chf-o2-sat-request)
    * link[+]
      * description = "Potassium"
      * target
        * type = #Observation
        * profile = Canonical(chf-potassium)
    * link[+]
      * description = "Creatinine"
      * target
        * type = #Observation
        * profile = Canonical(chf-creatinine)
    * link[+]
      * description = "eGFR"
      * target
        * type = #Observation
        * profile = Canonical(chf-egfr)
    * link[+]
      * description = "LASIX IV"
      * target[0]
        * type = #MedicationAdministration
        * profile = Canonical(chf-lasix-iv-administration)
      * target[+]
        * type = #MedicationRequest
        * profile = Canonical(chf-lasix-iv-request)
    * link[+]
      * description = "LASIX PO"
      * target[0]
        * type = #MedicationAdministration
        * profile = Canonical(chf-lasix-po-administration)
      * target[+]
        * type = #MedicationRequest
        * profile = Canonical(chf-lasix-po-request)
    * link[+]
      * description = "Cardiology Consultation"
      * target[0]
        * type = #Procedure
        * profile = Canonical(chf-cardiology-consult)
      * target[+]
        * type = #ServiceRequest
        * profile = Canonical(chf-cardiology-consult-request)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/chf-casesummarydefinition.fsh

Instance: chf-casesummarydefinition
InstanceOf: cpg-casesummarydefinition
Usage: #example
* insert CHFGraphDefinitionMetadata(chf-casesummarydefinition)
* extension[+]
  * url = Canonical(artifact-identifier)
  * valueIdentifier
    * use = #official
    * system = $chf-implementationguide
    * value = "CHFCaseSummaryDefinition"
* extension[+]
  * url = Canonical(artifact-title)
  * valueString = "CHF Case Summary Definition"
* name = "CHFCaseSummaryDefinition"
* description = "Definition of the case summary document for a congestive heart failure pathway"
* start = #EpisodeOfCare
* profile = Canonical(cpg-case)
* link
  * path = "encounter"
  * description = "Pathway Events"
  * target
    * type = #Encounter
    * profile = Canonical(cpg-encounter)
    * link[+]
      * description = "Weight"
      * target
        * type = #Observation
        * profile = Canonical(chf-bodyweight)
    * link[+]
      * description = "Weight Change"
      * target
        * type = #Observation
        * profile = Canonical(chf-bodyweight-change)
    * link[+]
      * description = "Urine Out"
      * target
        * type = #Observation
        * profile = Canonical(chf-urine-out)
    * link[+]
      * description = "Net IO's"
      * target
        * type = #Observation
        * profile = Canonical(chf-net-io)
    * link[+]
      * description = "JVP"
      * target
        * type = #Observation
        * profile = Canonical(chf-jvp)
    * link[+]
      * description = "O2 Sat"
      * target
        * type = #Observation
        * profile = Canonical(chf-o2-sat)
    * link[+]
      * description = "Potassium"
      * target
        * type = #Observation
        * profile = Canonical(chf-potassium)
    * link[+]
      * description = "Creatinine"
      * target
        * type = #Observation
        * profile = Canonical(chf-creatinine)
    * link[+]
      * description = "eGFR"
      * target
        * type = #Observation
        * profile = Canonical(chf-egfr)
    * link[+]
      * description = "LASIX IV"
      * target
        * type = #MedicationAdministration
        * profile = Canonical(chf-lasix-iv-administration)
    * link[+]
      * description = "LASIX PO"
      * target
        * type = #MedicationAdministration
        * profile = Canonical(chf-lasix-po-administration)
    * link[+]
      * description = "Cardiology Consultation"
      * target
        * type = #Procedure
        * profile = Canonical(chf-cardiology-consult)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/chf-groupdefinition.fsh

Instance: chf-groupdefinition
InstanceOf: cpg-groupdefinition
Usage: #example
Description: "CHF Group"
* extension
  * url = "http://hl7.org/fhir/StructureDefinition/cqf-expression"
  * valueExpression
    * language = #text/cql-identifier
    * expression = "Eligibility Criteria"
    * reference = Canonical(CHF)
* active = true
* type = #person
* actual = false
* code = $sct#42343007 "Congestive heart failure (disorder)"
* name = "Congestive Heart Failure Patients (definition)"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/chf-locationdefinition.fsh

Instance: chf-locationdefinition
InstanceOf: cpg-locationdefinition
Usage: #example
Description: "CHF location"
* name = "Cardiovascular diagnostics or therapeutics unit"
* mode = #kind
* type = $v3-RoleCode#CVDX "Cardiovascular diagnostics or therapeutics unit"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/chf-practitionerroledefinition.fsh

Instance: chf-practitionerroledefinition
InstanceOf: cpg-practitionerroledefinition
Usage: #example
Description: "CHF practitioner role"
* code = $cpg-common-persona-cs#2212 "Specialist medical practitioner"
* specialty = $sct#394579002 "Cardiology"
* location = Reference(chf-locationdefinition)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/codesystem-chf.fsh

CodeSystem: CHFCodes
Id: chf-example-codes
Title: "CHF Example Codes"
Description: "Codes used in the congestive heart failure pathway example. Ideally these shouldn't exist, but where an appropriate code in a standard terminology couldn't be identified, codes are defined here."
* insert ExampleCodeSystemMetadata(chf-example-codes)
* #body-weight-change "Body weight change" "The change in body weight between two body weight measurements, in kg. Typically captured daily."
* #net-intake-output "Net intake/output" "The net intake and output, in Liters per day. Typically captured daily."
* #measure-jvp "Measure jugular venous pressure" "Measure jugular venous pressure in cmH2O"
* #jvp "Jugular venous pressure" "Jugular venous pressure in cmH2O. May be loinc#8595-1?"
* #egfr "eGFR result" "eGFR result in mol/mm/m2. Too many codes to choose from, needs clinical/terminological SME input"
* #measure-egfr "Measure eGFR" "Measure eGFR, could not identify SNOMED code for this"
* #lasix-iv "LASIX IV" "LASIX IV"
* #lasix-po "LASIX PO" "LASIX PO"
* #cardiology-consultation "Cardiology Consultation" "Cardiology consultation"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/library-CHF.fsh

Instance: CHF
InstanceOf: Library
Usage: #example
Title: "Congestive Heart Failure Logic"
* insert ExampleLibraryMetadata(CHF)
* insert RelatedFHIRLibraries
* name = "CHF"
* type = $library-type#logic-library
* description = "Logic for an example congestive heart failure pathway"
* relatedArtifact[+]
  * type = #depends-on
  * resource = $sct
* relatedArtifact[+]
  * type = #depends-on
  * resource = $loinc
* relatedArtifact[+]
  * type = #depends-on
  * resource = Canonical(chf-example-codes)
* relatedArtifact[+]
  * type = #depends-on
  * resource = Canonical(condition-clinical)
* relatedArtifact[+]
  * type = #depends-on
  * resource = Canonical(condition-ver-status)
* parameter[+]
  * name = #Encounter
  * use = #in
  * min = 0
  * max = "1"
  * type = #Encounter
* parameter[+]
  * name = #Patient
  * use = #out
  * min = 0
  * max = "1"
  * type = #Patient
* parameter[+]
  * name = #"Body Weight"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Body Weight Change Assertion"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Daily Body Weight"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Any
* parameter[+]
  * name = #"Daily Body Weight Change"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Any
* parameter[+]
  * name = #"Body Weight Change"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Current Body Weight"
  * use = #out
  * min = 0
  * max = "1"
  * type = #Observation
* parameter[+]
  * name = #"Previous Body Weight"
  * use = #out
  * min = 0
  * max = "1"
  * type = #Observation
* parameter[+]
  * name = #"Current Body Weight Change"
  * use = #out
  * min = 0
  * max = "1"
  * type = #integer
* parameter[+]
  * name = #"Urine Output"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Current Urine Output"
  * use = #out
  * min = 0
  * max = "1"
  * type = #Observation
* parameter[+]
  * name = #"Net Intake/Output"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Current Net Intake/Output"
  * use = #out
  * min = 0
  * max = "1"
  * type = #Observation
* parameter[+]
  * name = #"Jugular Venous Pressure"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Oxygen Saturation"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #Potassium
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #Creatinine
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #eGFR
  * use = #out
  * min = 0
  * max = "*"
  * type = #Observation
* parameter[+]
  * name = #"Eligibility Criteria"
  * use = #out
  * min = 0
  * max = "*"
  * type = #Condition
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = $loinc#29463-7
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = CHFCodes#body-weight-change
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = $loinc#9192-6
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = CHFCodes#net-intake-output
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = CHFCodes#jvp
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = $loinc#2708-6
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = $loinc#86919-8 "Potassium goal [Moles/volume] Serum or Plasma"
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = $loinc#39802-4 "Creatinine in dialysis fluid/Creatinine in serum or plasma"
* dataRequirement[+]
  * type = #Observation
  * profile = Canonical(Observation)
  * codeFilter
    * path = "code"
    * code = CHFCodes#egfr
* dataRequirement[+]
  * type = #Condition
  * profile = Canonical(Condition)
* content.id = "ig-loader-CHF.cql"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/measure-chf-bodyweight-change.fsh

Instance: chf-bodyweight-change-measure
InstanceOf: CPGComputableMetric
Usage: #example
* title = "CHF Body Weight Change Metric"
* insert ExampleMeasureMetadata(chf-bodyweight-change-measure)
* name = "CHFBodyWeightChange"
* description = "Body weight change metric as a feature of a congestive heart failure pathway"
* library = Canonical(CHF)
* scoring = $measure-scoring#continuous-variable
* improvementNotation = $measure-improvement-notation#decrease
* group.population
  * code = $measure-population#measure-observation
  * criteria
    * language = #text/cql-identifier
    * expression = "Current Body Weight Change"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/measure-chf-bodyweight.fsh

Instance: chf-bodyweight-measure
InstanceOf: CPGComputableMetric
Usage: #example
* title = "CHF Body Weight Metric"
* insert ExampleMeasureMetadata(chf-bodyweight-measure)
* name = "CHFBodyWeight"
* description = "Body weight metric as a feature of a congestive heart failure pathway"
* library = Canonical(CHF)
* scoring = $measure-scoring#continuous-variable
* improvementNotation = $measure-improvement-notation#decrease
* group.population
  * code = $measure-population#measure-observation
  * criteria
    * language = #text/cql-identifier
    * expression = "Current Body Weight"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/measure-chf-urine-out.fsh

Instance: chf-urine-out-measure
InstanceOf: CPGComputableMetric
Usage: #example
* title = "CHF Urine Out Metric"
* insert ExampleMeasureMetadata(chf-urine-out-measure)
* name = "CHFUrineOut"
* description = "Urine output metric as a feature of a congestive heart failure pathway"
* library = Canonical(CHF)
* scoring = $measure-scoring#continuous-variable
* improvementNotation = $measure-improvement-notation#decrease
* group.population
  * code = $measure-population#measure-observation
  * criteria
    * language = #text/cql-identifier
    * expression = "Current Urine Output"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-bodyweight-change-pd.fsh

Instance: chf-bodyweight-change-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Body Weight Change Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-bodyweight-change-pd)
* insert PlanDefinitionPartOfExtension(chf-daily-management)
* insert PlanDefinitionEnabledExtension
* name = "CHFBodyWeightChange"
* description = "Measure body weight change daily"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Weight change target"
  * start = $sct#32485007 "Admission to hospital"
* action[+]
  * id = "weight-change"
  * title = "Weight change"
  * description = "Measure weight change daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-bodyweight-change-ad)
* action[+]
  * title = "Report Weight Change"
  * description = "Report weight change metric daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * relatedAction
    * actionId = "weight-change"
    * relationship = #after-end
  * definitionCanonical = Canonical(chf-report-bodyweight-change)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-bodyweight-pd.fsh

Instance: chf-bodyweight-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Body Weight Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-bodyweight-pd)
* insert PlanDefinitionPartOfExtension(chf-daily-management)
* insert PlanDefinitionEnabledExtension
* name = "CHFBodyWeight"
* description = "Measure body weight daily"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Weight target"
  * start = $sct#32485007 "Admission to hospital"
* action[+]
  * id = "weight"
  * title = "Weight"
  * description = "Measure weight daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-bodyweight-ad)
* action[+]
  * title = "Report Weight"
  * description = "Report weight metric daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * relatedAction
    * actionId = "weight"
    * relationship = #after-end
  * definitionCanonical = Canonical(chf-report-bodyweight)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-cardiology-consultation-pd.fsh

Instance: chf-cardiology-consultation-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Cardiology Consultation Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-cardiology-consultation-pd)
* insert PlanDefinitionPartOfExtension(chf-hypervolemia)
* insert PlanDefinitionEnabledExtension
* url = Canonical(chf-cardiology-consultation-pd)
* name = "CHFCardiologyConsultation"
* description = "Cardiology consultation within 24 hrs"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Cardiology Consultation within 24 hours"
  * start = $sct#32485007 "Admission to hospital"
* action
  * id = "cardiology-consultation"
  * title = "Cardiology Consultation"
  * description = "Cardiology Consultation"
  * code = $cpg-common-process-cs#guideline-based-care
  * definitionCanonical = Canonical(chf-cardiology-consultation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-creatinine-pd.fsh

Instance: chf-creatinine-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Creatinine Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-creatinine-pd)
* insert PlanDefinitionPartOfExtension(chf-hypervolemia)
* insert PlanDefinitionEnabledExtension
* name = "CHFCreatininePD"
* description = "Monitor creatinine"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Monitor creatnine"
  * start = $sct#32485007 "Admission to hospital"
* action
  * id = "creatinine"
  * title = "Creatinine"
  * description = "Monitor creatinine"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-creatinine-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-daily-management.fsh

Instance: chf-daily-management
InstanceOf: CPGStrategyDefinition
Usage: #example
Title: "CHF Daily Management Strategy"
* insert ExamplePlanDefinitionMetadata(chf-daily-management)
* insert PlanDefinitionPartOfExtension(chf-pathway)
* insert PlanDefinitionEnabledExtension
* name = "CHFDailyManagement"
* description = "Daily management strategy as part of a care pathway for patients with admitting diagnosis of congestive heart failure"
* type = $plan-definition-type#workflow-definition
* action[+]
  * title = "Weight"
  * description = "Measure weight daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-bodyweight-pd)
* action[+]
  * title = "Weight Change"
  * description = "Manage weight change"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-bodyweight-change-pd)
* action[+]
  * title = "Urine Output"
  * description = "Measure urine output daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-urine-out-pd)
* action[+]
  * title = "Net I/Os"
  * description = "Measure net intake/output daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-net-io-pd)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-egfr-pd.fsh

Instance: chf-egfr-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF eGFR Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-egfr-pd)
* insert PlanDefinitionPartOfExtension(chf-hypervolemia)
* insert PlanDefinitionEnabledExtension
* name = "CHFEGFRPD"
* description = "Monitor eGFR"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "eGFR target"
  * start = $sct#32485007 "Admission to hospital"
* action
  * id = "egfr"
  * title = "eGFR"
  * description = "Monitor eGFR"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-egfr-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-hypervolemia.fsh

Instance: chf-hypervolemia
InstanceOf: CPGStrategyDefinition
Usage: #example
Title: "CHF Hypervolemia Strategy"
* insert ExamplePlanDefinitionMetadata(chf-hypervolemia)
* insert PlanDefinitionPartOfExtension(chf-pathway)
* insert PlanDefinitionEnabledExtension
* name = "CHFHypervolemia"
* description = "Hypervolemia strategy as part of a care pathway for patients with admitting diagnosis of congestive heart failure"
* type = $plan-definition-type#workflow-definition
* action[+]
  * title = "JVP"
  * description = "Measure JVP daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-jvp-pd)
* action[+]
  * title = "O2 Sat"
  * description = "Monitor O2 Sat"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-o2-sat-pd)
* action[+]
  * title = "Potassium"
  * description = "Monitor Potassium"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-potassium-pd)
* action[+]
  * title = "Creatinine"
  * description = "Monitor Creatinine"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-creatinine-pd)
* action[+]
  * title = "eGFR"
  * description = "Monitor eGFR"
  * code = $cpg-common-process-cs#diagnostic-testing
  * definitionCanonical = Canonical(chf-egfr-pd)
* action[+]
  * title = "LASIX"
  * description = "LASIX"
  * code = $cpg-common-process-cs#guideline-based-care
  * definitionCanonical = Canonical(chf-lasix)
* action[+]
  * title = "Cardiology Consultation"
  * description = "Cardiology Consultation within 24 hours"
  * code = $cpg-common-process-cs#guideline-based-care
  * definitionCanonical = Canonical(chf-cardiology-consultation-pd)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-jvp-pd.fsh

Instance: chf-jvp-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Jugular Venous Pressure Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-jvp-pd)
* insert PlanDefinitionPartOfExtension(chf-hypervolemia)
* insert PlanDefinitionEnabledExtension
* name = "CHFJVPPD"
* description = "Measure jugular venous pressure"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "JVP target"
  * start = $sct#32485007 "Admission to hospital"
* action
  * id = "jvp"
  * title = "JVP"
  * description = "Measure JVP daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-jvp-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-lasix.fsh

Instance: chf-lasix
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF LASIX Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-lasix)
* insert PlanDefinitionPartOfExtension(chf-hypervolemia)
* insert PlanDefinitionEnabledExtension
* name = "CHFLASIX"
* description = "Administer LASIX IV, transition to PO as appropriate"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Transition to LASIX PO"
  * start = $sct#32485007 "Admission to hospital"
* action[+]
  * id = "lasix-iv"
  * title = "LASIX IV"
  * description = "Administer LASIX IV"
  * code = $cpg-common-process-cs#dispense-medications
  * condition
    * kind = #stop
    * expression
      * language = #text/cql-identifier
      * expression = "Should Stop LASIX IV"
  * definitionCanonical = Canonical(chf-lasix-iv)
* action[+]
  * id = "lasix-po"
  * title = "LASIX PO"
  * description = "Administer LASIX PO"
  * code = $cpg-common-process-cs#dispense-medications
  * condition
    * kind = #start
    * expression
      * language = #text/cql-identifier
      * expression = "Should Start LASIX PO"
  * definitionCanonical = Canonical(chf-lasix-po)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-net-io-pd.fsh

Instance: chf-net-io-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Net IO Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-net-io-pd)
* insert PlanDefinitionPartOfExtension(chf-daily-management)
* insert PlanDefinitionEnabledExtension
* name = "CHFNetIO"
* description = "Measure net intake/output daily"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Net io target"
  * start = $sct#32485007 "Admission to hospital"
* action
  * id = "net-io"
  * title = "Net IOs"
  * description = "Measure net intake/output daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-net-io-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-o2-sat-pd.fsh

Instance: chf-o2-sat-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Oxygen Saturation Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-o2-sat-pd)
* insert PlanDefinitionPartOfExtension(chf-hypervolemia)
* insert PlanDefinitionEnabledExtension
* name = "CHFO2SatPD"
* description = "Monitor oxygen saturation"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Oxygen saturation target"
  * start = $sct#32485007 "Admission to hospital"
* action
  * id = "o2-sat"
  * title = "O2 Sat"
  * description = "Monitor oxygen saturation"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-o2-sat-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-pathway.fsh

Instance: chf-pathway
InstanceOf: CPGPathwayDefinition
Usage: #example
Title: "Congestive Heart Failure Care Pathway"
* insert ExamplePlanDefinitionMetadata(chf-pathway)
* insert PlanDefinitionEnabledExtension
* name = "CHFPathway"
* description = "Treatment and management care pathway for patients with admitting diagnosis of congestive heart failure"
* type = $plan-definition-type#clinical-protocol
* action[+]
  * title = "CHF Daily Management"
  * description = "Daily Management strategy for Congestive Heart Failure"
  * code = $cpg-common-process-cs#guideline-based-care
  * definitionCanonical = Canonical(chf-daily-management)
* action[+]
  * title = "CHF Hypervolemia"
  * description = "Hypervolemia strategy for Congestive Heart Failure"
  * code = $cpg-common-process-cs#guideline-based-care
  * definitionCanonical = Canonical(chf-hypervolemia)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-potassium-pd.fsh

Instance: chf-potassium-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Potassium Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-potassium-pd)
* insert PlanDefinitionPartOfExtension(chf-hypervolemia)
* insert PlanDefinitionEnabledExtension
* name = "CHFPotassiumPD"
* description = "Monitor potassium"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Potassium goal"
  * start = $sct#32485007 "Admission to hospital"
* action
  * id = "potassium"
  * title = "Potassium"
  * description = "Monitor potassium"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-potassium-ad)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/resources/plandefinition-chf-urine-out-pd.fsh

Instance: chf-urine-out-pd
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CHF Urine Out Recommendation"
* insert ExamplePlanDefinitionMetadata(chf-urine-out-pd)
* insert PlanDefinitionPartOfExtension(chf-daily-management)
* insert PlanDefinitionEnabledExtension
* name = "CHFUrineOut"
* description = "Measure urine output daily"
* type = $plan-definition-type#eca-rule
* goal
  * description.text = "Urine output target"
  * start = $sct#32485007 "Admission to hospital"
* action[+]
  * id = "urine-out"
  * title = "Urine Out"
  * description = "Measure urine output daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * trigger
    * type = #periodic
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * definitionCanonical = Canonical(chf-urine-out-ad)
* action[+]
  * title = "Report Urine Out"
  * description = "Report urine output metric daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * relatedAction
    * actionId = "urine-out"
    * relationship = #after-end
  * definitionCanonical = Canonical(chf-report-urine-out)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight-change1-observation.fsh

Instance: chf-scenario1-bodyweight-change1-observation
InstanceOf: CHFBodyWeightChange
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-bodyweight-change)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #inferred
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#body-weight-change
* effectiveDateTime = "2019-02-01T07:00:00Z"
* issued = "2019-02-01T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = -1.4 'kg/d' "kg/d"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight-change1.fsh

Instance: chf-scenario1-bodyweight-change1
InstanceOf: MeasureReport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-bodyweight-change-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-02-01"
* period
  * start = "2019-01-31"
  * end = "2019-02-01"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = -1.4 'kg/d' "kg/d"
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight1-observation)
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight2-observation)
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight-change1-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight-change2-observation.fsh

Instance: chf-scenario1-bodyweight-change2-observation
InstanceOf: CHFBodyWeightChange
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-bodyweight-change)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #inferred
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#body-weight-change
* effectiveDateTime = "2019-02-02T07:00:00Z"
* issued = "2019-02-02T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 1.5 'kg/d' "kg/d"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight-change2.fsh

Instance: chf-scenario1-bodyweight-change2
InstanceOf: MeasureReport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-bodyweight-change-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-02-02"
* period
  * start = "2019-02-01"
  * end = "2019-02-02"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = 1.5 'kg/d' "kg/d"
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight2-observation)
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight3-observation)
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight-change2-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight-change3-observation.fsh

Instance: chf-scenario1-bodyweight-change3-observation
InstanceOf: CHFBodyWeightChange
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-bodyweight-change)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #inferred
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#body-weight-change
* effectiveDateTime = "2019-02-02T07:00:00Z"
* issued = "2019-02-02T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = -1.2 'kg/d' "kg/d"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight-change3.fsh

Instance: chf-scenario1-bodyweight-change3
InstanceOf: MeasureReport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-bodyweight-change-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-02-03"
* period
  * start = "2019-02-02"
  * end = "2019-02-03"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = -1.2 'kg/d' "kg/d"
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight3-observation)
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight4-observation)
* evaluatedResource[+] = Reference(chf-scenario1-bodyweight-change3-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight1-observation.fsh

Instance: chf-scenario1-bodyweight1-observation
InstanceOf: CHFBodyWeight
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-bodyweight)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code = $loinc#29463-7
* effectiveDateTime = "2019-01-31T07:00:00Z"
* issued = "2019-01-31T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 96 'kg' "kg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight1.fsh

Instance: chf-scenario1-bodyweight1
InstanceOf: cpg-metricreport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-bodyweight-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-01-31"
* period
  * start = "2019-01-31"
  * end = "2019-01-31"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = 96 'kg' "kg"
* evaluatedResource = Reference(chf-scenario1-bodyweight1-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight2-observation.fsh

Instance: chf-scenario1-bodyweight2-observation
InstanceOf: CHFBodyWeight
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-bodyweight)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code = $loinc#29463-7
* effectiveDateTime = "2019-02-01T07:00:00Z"
* issued = "2019-02-01T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 95.4 'kg' "kg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight2.fsh

Instance: chf-scenario1-bodyweight2
InstanceOf: MeasureReport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-bodyweight-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-02-01"
* period
  * start = "2019-02-01"
  * end = "2019-02-01"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = 95.4 'kg' "kg"
* evaluatedResource = Reference(chf-scenario1-bodyweight2-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight3-observation.fsh

Instance: chf-scenario1-bodyweight3-observation
InstanceOf: CHFBodyWeight
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-bodyweight)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code = $loinc#29463-7
* effectiveDateTime = "2019-02-02T07:00:00Z"
* issued = "2019-02-02T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 96.9 'kg' "kg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight3.fsh

Instance: chf-scenario1-bodyweight3
InstanceOf: MeasureReport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-bodyweight-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-02-02"
* period
  * start = "2019-02-02"
  * end = "2019-02-02"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = 96.9 'kg' "kg"
* evaluatedResource = Reference(chf-scenario1-bodyweight3-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight4-observation.fsh

Instance: chf-scenario1-bodyweight4-observation
InstanceOf: CHFBodyWeight
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-bodyweight)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code = $loinc#29463-7
* effectiveDateTime = "2019-02-03T07:00:00Z"
* issued = "2019-02-03T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 95.7 'kg' "kg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-bodyweight4.fsh

Instance: chf-scenario1-bodyweight4
InstanceOf: MeasureReport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-bodyweight-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-02-03"
* period
  * start = "2019-02-03"
  * end = "2019-02-03"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = 95.7 'kg' "kg"
* evaluatedResource = Reference(chf-scenario1-bodyweight4-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-cardiology-consult-request.fsh

Instance: chf-scenario1-cardiology-consult-request
InstanceOf: chf-cardiology-consult-request
Usage: #example
Description: "CHF Scenario One"
* instantiatesCanonical = Canonical(chf-cardiology-consultation)
* status = #active
* intent = #plan
* category = $sct#386053000 "Evaluation procedure (procedure)"
  * text = "Evaluation"
* doNotPerform = false
* code = $chf-example-codes#cardiology-consultation "Cardiology Consultation"
  * text = "Cardiology Consultation"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* occurrencePeriod
  * start = "2019-02-03T11:00:00Z"
  * end = "2019-02-04T11:00:00Z"
* authoredOn = "2019-02-03"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-cardiology-consult.fsh

Instance: chf-scenario1-cardiology-consult
InstanceOf: chf-cardiology-consult
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-cardiology-consult)
* basedOn = Reference(chf-scenario1-cardiology-consult-request)
* status = #preparation
* category = $sct#386053000 "Evaluation procedure (procedure)"
  * text = "Evaluation"
* code = $chf-example-codes#cardiology-consultation "Cardiology Consultation"
  * text = "Cardiology Consultation"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performedPeriod.start = "2019-02-03T11:00:00Z"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-cardiology-consultation-goal.fsh

Instance: chf-scenario1-cardiology-consultation-goal
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-cardiology-consultation-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Cardiology Consultation Within 24 Hours"
* subject = Reference(chf-scenario1-patient)
* target.measure = $chf-example-codes#cardiology-consultation

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-careplan.fsh

Instance: chf-scenario1-careplan
InstanceOf: cpg-careplan
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-planFor)
  * valueReference = Reference(chf-scenario1-eoc)
* instantiatesCanonical = Canonical(chf-pathway)
* status = #active
* intent = #plan
* category.text = "Heart Failure Care Pathway"
* title = "Heart Failure Care Pathway"
* description = "Care Pathway for treatment of congestive heart failure"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* period.start = "2019-01-31T07:00:00Z"
* created = "2019-01-31T07:00:00Z"
* careTeam = Reference(chf-scenario1-careteam)
* addresses = Reference(chf-scenario1-condition)
* goal[+] = Reference(chf-scenario1-weight)
* goal[+] = Reference(chf-scenario1-weight-change)
* goal[+] = Reference(chf-scenario1-urine-out)
* goal[+] = Reference(chf-scenario1-net-io-goal)
* goal[+] = Reference(chf-scenario1-jvp-goal)
* goal[+] = Reference(chf-scenario1-o2-sat-goal)
* goal[+] = Reference(chf-scenario1-potassium)
* goal[+] = Reference(chf-scenario1-creatinine)
* goal[+] = Reference(chf-scenario1-egfr)
* goal[+] = Reference(chf-scenario1-lasix-iv-goal)
* goal[+] = Reference(chf-scenario1-lasix-po-goal)
* goal[+] = Reference(chf-scenario1-cardiology-consultation-goal)
* activity[+].reference = Reference(chf-scenario1-daily-management)
* activity[+].reference = Reference(chf-scenario1-hypervolemia)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-careteam.fsh

Instance: chf-scenario1-careteam
InstanceOf: cpg-careteam
Usage: #example
Description: "CHF Scenario One"
* status = #active
* name = "CHF Care Team"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* participant[+]
  * role = $sct#17561000 "Cardiologist"
  * member = Reference(chf-scenario1-practitionerrole)
* participant[+]
  * role = $sct#407542009 "Informal carer"
  * member = Reference(chf-scenario1-relatedperson)
* managingOrganization = Reference(chf-scenario1-organization)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-caseplanprogressingnote.fsh

Instance: chf-scenario1-caseplanprogressingnote
InstanceOf: CPGCasePlanProgressingNote
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-generatedFrom)
  * valueCanonical = Canonical(chf-caseplansummarydefinition)
* extension[+]
  * url = Canonical(cpg-summaryFor)
  * valueReference = Reference(chf-scenario1-eoc)
* status = #final
* type = $loinc#11506-3 "Progress note"
* category = $loinc#11503-0 "Medical records"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* date = "2019-02-03"
* author = Reference(chf-scenario1-practitionerrole)
* title = "Congestive Heart Failure Case/Plan Progressing Note"
* attester
  * mode = #professional
  * time = "2019-02-03"
  * party = Reference(chf-scenario1-practitionerrole)
* custodian = Reference(chf-scenario1-organization)
* event
  * code = $sct#42343007 "Congestive heart failure (disorder)"
  * period.start = "2019-01-31T05:03:00Z"
  * detail = Reference(chf-scenario1-eoc)
* section[+]
  * title = "Clinical Impression"
  * code = $loinc#51848-0
  * entry = Reference(chf-scenario1-clinicalimpression)
* section[+]
  * title = "Pathway Events"
  * code.text = "Pathway Events"
  * entry = Reference(chf-scenario1-encounter)
  * section[+]
    * title = "Weight"
    * code.text = "Weight"
    * entry[+] = Reference(chf-scenario1-bodyweight1-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight2-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight3-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight4-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight1)
    * entry[+] = Reference(chf-scenario1-bodyweight2)
    * entry[+] = Reference(chf-scenario1-bodyweight3)
    * entry[+] = Reference(chf-scenario1-bodyweight4)
  * section[+]
    * title = "Weight Change"
    * code.text = "Weight Change"
    * entry[+] = Reference(chf-scenario1-bodyweight-change1-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change2-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change3-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change1)
    * entry[+] = Reference(chf-scenario1-bodyweight-change2)
    * entry[+] = Reference(chf-scenario1-bodyweight-change3)
  * section[+]
    * title = "Urine Out"
    * code.text = "Urine Out"
    * entry[+] = Reference(chf-scenario1-urineout3-observation)
    * entry[+] = Reference(chf-scenario1-urineout3)
  * section[+]
    * title = "Net IO's"
    * code.text = "Net IO's"
    * entry = Reference(chf-scenario1-net-io)
  * section[+]
    * title = "JVP"
    * code.text = "JVP"
    * entry[+] = Reference(chf-scenario1-jvp1)
    * entry[+] = Reference(chf-scenario1-jvp2)
    * entry[+] = Reference(chf-scenario1-jvp3)
    * entry[+] = Reference(chf-scenario1-jvp4)
    * entry[+] = Reference(chf-scenario1-jvp5)
    * entry[+] = Reference(chf-scenario1-jvp)
  * section[+]
    * title = "O2 Sat"
    * code.text = "O2 Sat"
    * entry[+] = Reference(chf-scenario1-o2sat1)
    * entry[+] = Reference(chf-scenario1-o2sat2)
    * entry[+] = Reference(chf-scenario1-o2-sat)
  * section[+]
    * title = "Potassium"
    * code.text = "Potassium"
    * entry = Reference(chf-scenario1-potassium1)
  * section[+]
    * title = "Creatinine"
    * code.text = "Creatinine"
    * entry = Reference(chf-scenario1-creatinine1)
  * section[+]
    * title = "eGFR"
    * code.text = "eGFR"
    * entry = Reference(chf-scenario1-egfr1)
  * section[+]
    * title = "LASIX IV"
    * code.text = "LASIX IV"
    * entry[+] = Reference(chf-scenario1-lasix-iv)
    * entry[+] = Reference(chf-scenario1-stop-lasix-iv)
    * entry[+] = Reference(chf-scenario1-lasix-po-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-caseplansummary.fsh

Instance: chf-scenario1-caseplansummary
InstanceOf: CPGCasePlanSummary
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-generatedFrom)
  * valueCanonical = Canonical(chf-caseplansummarydefinition)
* extension[+]
  * url = Canonical(cpg-summaryFor)
  * valueReference = Reference(chf-scenario1-eoc)
* status = #final
* type = $loinc#11503-0 "Medical records"
* category = $loinc#11503-0 "Medical records"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* date = "2019-02-03"
* author = Reference(chf-scenario1-practitionerrole)
* title = "Congestive Heart Failure Case/Plan Summary"
* attester
  * mode = #professional
  * time = "2019-02-03"
  * party = Reference(chf-scenario1-practitionerrole)
* custodian = Reference(chf-scenario1-organization)
* event
  * code = $sct#42343007 "Congestive heart failure (disorder)"
  * period.start = "2019-01-31T05:03:00Z"
  * detail = Reference(chf-scenario1-eoc)
* section
  * title = "Pathway Events"
  * code.text = "Pathway Events"
  * entry = Reference(chf-scenario1-encounter)
  * section[+]
    * title = "Weight"
    * code.text = "Weight"
    * entry[+] = Reference(chf-scenario1-bodyweight1-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight2-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight3-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight4-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight1)
    * entry[+] = Reference(chf-scenario1-bodyweight2)
    * entry[+] = Reference(chf-scenario1-bodyweight3)
    * entry[+] = Reference(chf-scenario1-bodyweight4)
  * section[+]
    * title = "Weight Change"
    * code.text = "Weight Change"
    * entry[+] = Reference(chf-scenario1-bodyweight-change1-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change2-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change3-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change1)
    * entry[+] = Reference(chf-scenario1-bodyweight-change2)
    * entry[+] = Reference(chf-scenario1-bodyweight-change3)
  * section[+]
    * title = "Urine Out"
    * code.text = "Urine Out"
    * entry[+] = Reference(chf-scenario1-urineout3-observation)
    * entry[+] = Reference(chf-scenario1-urineout3)
  * section[+]
    * title = "Net IO's"
    * code.text = "Net IO's"
    * entry = Reference(chf-scenario1-net-io)
  * section[+]
    * title = "JVP"
    * code.text = "JVP"
    * entry[+] = Reference(chf-scenario1-jvp1)
    * entry[+] = Reference(chf-scenario1-jvp2)
    * entry[+] = Reference(chf-scenario1-jvp3)
    * entry[+] = Reference(chf-scenario1-jvp4)
    * entry[+] = Reference(chf-scenario1-jvp5)
    * entry[+] = Reference(chf-scenario1-jvp)
  * section[+]
    * title = "O2 Sat"
    * code.text = "O2 Sat"
    * entry[+] = Reference(chf-scenario1-o2sat1)
    * entry[+] = Reference(chf-scenario1-o2sat2)
    * entry[+] = Reference(chf-scenario1-o2-sat)
  * section[+]
    * title = "Potassium"
    * code.text = "Potassium"
    * entry = Reference(chf-scenario1-potassium1)
  * section[+]
    * title = "Creatinine"
    * code.text = "Creatinine"
    * entry = Reference(chf-scenario1-creatinine1)
  * section[+]
    * title = "eGFR"
    * code.text = "eGFR"
    * entry = Reference(chf-scenario1-egfr1)
  * section[+]
    * title = "LASIX IV"
    * code.text = "LASIX IV"
    * entry[+] = Reference(chf-scenario1-lasix-iv)
    * entry[+] = Reference(chf-scenario1-stop-lasix-iv)
    * entry[+] = Reference(chf-scenario1-lasix-po-mr)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-casesummary.fsh

Instance: chf-scenario1-casesummary
InstanceOf: CPGCaseSummary
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-generatedFrom)
  * valueCanonical = Canonical(chf-casesummarydefinition)
* extension[+]
  * url = Canonical(cpg-summaryFor)
  * valueReference = Reference(chf-scenario1-eoc)
* status = #final
* type = $loinc#11503-0 "Medical records"
* category = $loinc#11503-0 "Medical records"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* date = "2019-02-03"
* author = Reference(chf-scenario1-practitionerrole)
* title = "Congestive Heart Failure Case Summary"
* attester
  * mode = #professional
  * time = "2019-02-03"
  * party = Reference(chf-scenario1-practitionerrole)
* custodian = Reference(chf-scenario1-organization)
* event
  * code = $sct#42343007 "Congestive heart failure (disorder)"
  * period.start = "2019-01-31T05:03:00Z"
  * detail = Reference(chf-scenario1-eoc)
* section
  * title = "Pathway Events"
  * code.text = "Pathway Events"
  * entry = Reference(chf-scenario1-encounter)
  * section[+]
    * title = "Weight"
    * code.text = "Weight"
    * entry[+] = Reference(chf-scenario1-bodyweight1-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight2-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight3-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight4-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight1)
    * entry[+] = Reference(chf-scenario1-bodyweight2)
    * entry[+] = Reference(chf-scenario1-bodyweight3)
    * entry[+] = Reference(chf-scenario1-bodyweight4)
  * section[+]
    * title = "Weight Change"
    * code.text = "Weight Change"
    * entry[+] = Reference(chf-scenario1-bodyweight-change1-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change2-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change3-observation)
    * entry[+] = Reference(chf-scenario1-bodyweight-change1)
    * entry[+] = Reference(chf-scenario1-bodyweight-change2)
    * entry[+] = Reference(chf-scenario1-bodyweight-change3)
  * section[+]
    * title = "Urine Out"
    * code.text = "Urine Out"
    * entry[+] = Reference(chf-scenario1-urineout3-observation)
    * entry[+] = Reference(chf-scenario1-urineout3)
  * section[+]
    * title = "Net IO's"
    * code.text = "Net IO's"
    * entry = Reference(chf-scenario1-net-io)
  * section[+]
    * title = "JVP"
    * code.text = "JVP"
    * entry[+] = Reference(chf-scenario1-jvp1)
    * entry[+] = Reference(chf-scenario1-jvp2)
    * entry[+] = Reference(chf-scenario1-jvp3)
    * entry[+] = Reference(chf-scenario1-jvp4)
    * entry[+] = Reference(chf-scenario1-jvp5)
  * section[+]
    * title = "O2 Sat"
    * code.text = "O2 Sat"
    * entry[+] = Reference(chf-scenario1-o2sat1)
    * entry[+] = Reference(chf-scenario1-o2sat2)
  * section[+]
    * title = "Potassium"
    * code.text = "Potassium"
    * entry = Reference(chf-scenario1-potassium1)
  * section[+]
    * title = "Creatinine"
    * code.text = "Creatinine"
    * entry = Reference(chf-scenario1-creatinine1)
  * section[+]
    * title = "eGFR"
    * code.text = "eGFR"
    * entry = Reference(chf-scenario1-egfr1)
  * section[+]
    * title = "LASIX IV"
    * code.text = "LASIX IV"
    * entry = Reference(chf-scenario1-lasix-iv)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-clinicalimpression.fsh

Instance: chf-scenario1-clinicalimpression
InstanceOf: CPGClinicalImpression
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-impressionFor)
  * valueReference = Reference(chf-scenario1-eoc)
* status = #completed
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* assessor = Reference(chf-scenario1-practitionerrole)
* protocol = Canonical(chf-pathway)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-condition.fsh

Instance: chf-scenario1-condition
InstanceOf: Condition
Usage: #example
Description: "CHF Scenario One"
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#problem-list-item
* code = $sct#42343007 "Congestive heart failure (disorder)"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* onsetDateTime = "2019-01-31T05:03:00Z"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-creatinine.fsh

Instance: chf-scenario1-creatinine
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-creatinine-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Creatinine < 1.2 mg/dL"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $loinc#39802-4
  * detailQuantity = 1.2 'mg/dL' "mg/dL"
    * comparator = #<

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-creatinine1.fsh

Instance: chf-scenario1-creatinine1
InstanceOf: CHFCreatinine
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-creatinine)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* code = $loinc#39802-4
* effectiveDateTime = "2019-02-03T09:40:00Z"
* issued = "2019-02-03T09:40:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 0.9 'mg/dL' "mg/dL"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-daily-management.fsh

Instance: chf-scenario1-daily-management
InstanceOf: cpg-strategy
Usage: #example
Description: "CHF Scenario One"
* instantiatesCanonical = Canonical(chf-daily-management)
* status = #active
* intent = #plan
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* action[+]
  * title = "Weight"
  * description = "Measure weight daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action[+]
    * id = "weight"
    * title = "Weight"
    * description = "Measure weight daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * action[+]
    * title = "Report Weight"
    * description = "Report weight metric daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * relatedAction
      * actionId = "weight"
      * relationship = #after-end
* action[+]
  * title = "Weight Change"
  * description = "Manage weight change"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action[+]
    * id = "weight-change"
    * title = "Weight change"
    * description = "Measure weight change daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * action[+]
    * title = "Report Weight Change"
    * description = "Report weight change metric daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * relatedAction
      * actionId = "weight-change"
      * relationship = #after-end
* action[+]
  * title = "Urine Output"
  * description = "Measure urine output daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action[+]
    * id = "urine-out-action"
    * title = "Urine Out"
    * description = "Measure urine output daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
  * action[+]
    * title = "Report Urine Out"
    * description = "Report urine output metric daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * relatedAction
      * actionId = "urine-out"
      * relationship = #after-end
* action[+]
  * title = "Net I/Os"
  * description = "Measure net intake/output daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action
    * id = "net-io-action"
    * title = "Net IOs"
    * description = "Measure net intake/output daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-egfr.fsh

Instance: chf-scenario1-egfr
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-egfr-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "eGFR > 60 mol/mm/m2"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $chf-example-codes#egfr
  * detailQuantity = 60 'mol/mm/m2' "mol/mm/m2"
    * comparator = #>

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-egfr1.fsh

Instance: chf-scenario1-egfr1
InstanceOf: CHFEGFR
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-egfr)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#egfr
* effectiveDateTime = "2019-02-03T09:40:00Z"
* issued = "2019-02-03T09:40:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 65 'mol/mm/m2' "mol/mm/m2"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-encounter.fsh

Instance: chf-scenario1-encounter
InstanceOf: Encounter
Usage: #example
Description: "CHF Scenario One"
* status = #in-progress
* class = $v3-ActCode#IMP "inpatient encounter"
* type = $sct#183807002 "Inpatient stay 9 days"
* priority = $sct#394849002 "High priority"
* subject = Reference(chf-scenario1-patient)
* episodeOfCare = Reference(chf-scenario1-eoc)
* participant
  * type = $v3-ParticipationType#PPRF "primary performer"
  * individual = Reference(chf-scenario1-practitionerrole)
* period.start = "2019-01-31T05:03:00Z"
* diagnosis
  * condition = Reference(chf-scenario1-condition)
  * use = $diagnosis-role#AD "Admission diagnosis"
* location
  * location = Reference(chf-scenario1-location)
  * status = #active
  * period.start = "2019-01-31T05:03:00Z"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-eoc.fsh

Instance: chf-scenario1-eoc
InstanceOf: cpg-case
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-enrolledIn)
  * valueCanonical = Canonical(chf-pathway)
* status = #active
* diagnosis.condition = Reference(chf-scenario1-condition)
* patient = Reference(chf-scenario1-patient)
* period.start = "2019-01-31T05:03:00Z"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-group.fsh

Instance: chf-scenario1-group
InstanceOf: cpg-group
Usage: #example
Description: "CHF Scenario One"
* active = true
* type = #person
* actual = true
* code = $sct#42343007 "Congestive heart failure (disorder)"
* name = "Congestive Heart Failure Patients"
* member.entity = Reference(chf-scenario1-patient)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-hypervolemia.fsh

Instance: chf-scenario1-hypervolemia
InstanceOf: RequestGroup
Usage: #example
Description: "CHF Scenario One"
* instantiatesCanonical = Canonical(chf-hypervolemia)
* status = #active
* intent = #plan
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* action[+]
  * title = "JVP"
  * description = "Measure JVP daily"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action
    * id = "jvp"
    * title = "JVP"
    * description = "Measure JVP daily"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
    * resource = Reference(chf-scenario1-jvp)
* action[+]
  * title = "O2 Sat"
  * description = "Monitor O2 Sat"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action
    * id = "o2-sat"
    * title = "O2 Sat"
    * description = "Monitor oxygen saturation"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
    * resource = Reference(chf-scenario1-o2-sat)
* action[+]
  * title = "Potassium"
  * description = "Monitor Potassium"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action
    * id = "potassium"
    * title = "Potassium"
    * description = "Monitor potassium"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
* action[+]
  * title = "Creatinine"
  * description = "Monitor Creatinine"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action
    * id = "creatinine"
    * title = "Creatinine"
    * description = "Monitor creatinine"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
* action[+]
  * title = "eGFR"
  * description = "Monitor eGFR"
  * code = $cpg-common-process-cs#diagnostic-testing
  * action
    * id = "egfr"
    * title = "eGFR"
    * description = "Monitor eGFR"
    * code = $cpg-common-process-cs#diagnostic-testing
    * timingTiming.repeat
      * frequency = 1
      * period = 1
      * periodUnit = #d
* action[+]
  * title = "LASIX"
  * description = "LASIX"
  * code = $cpg-common-process-cs#guideline-based-care
  * action[+]
    * id = "lasix-iv"
    * title = "LASIX IV"
    * description = "Administer LASIX IV"
    * code = $cpg-common-process-cs#dispense-medications
    * condition
      * kind = #stop
      * expression
        * language = #text/cql-identifier
        * expression = "Should Stop LASIX IV"
    * resource = Reference(chf-scenario1-stop-lasix-iv)
  * action[+]
    * id = "lasix-po"
    * title = "LASIX PO"
    * description = "Administer LASIX PO"
    * code = $cpg-common-process-cs#dispense-medications
    * condition
      * kind = #start
      * expression
        * language = #text/cql-identifier
        * expression = "Should Start LASIX PO"
    * resource = Reference(chf-scenario1-lasix-po-mr)
* action[+]
  * title = "Cardiology Consultation"
  * description = "Cardiology Consultation within 24 hours"
  * code = $cpg-common-process-cs#guideline-based-care
  * action
    * id = "cardiology-consultation"
    * title = "Cardiology Consultation"
    * description = "Cardiology Consultation"
    * code = $cpg-common-process-cs#guideline-based-care
    * resource = Reference(chf-scenario1-cardiology-consult-request)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-jvp-goal.fsh

Instance: chf-scenario1-jvp-goal
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-jvp-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Jugular venous pressure < 8.0 cmH2O"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $chf-example-codes#jvp
  * detailQuantity = 8 'cm[H2O]' "cmH2O"
    * comparator = #<

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-jvp.fsh

Instance: chf-scenario1-jvp
InstanceOf: chf-jvp-request
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-rationale)
  * valueMarkdown = "ACC recommends measuring jugular venous pressure as part of management of hypervolemia"
* extension[+]
  * url = Canonical(cpg-rating)
  * valueQuantity = 1.0 '1'
* instantiatesCanonical = Canonical(chf-jvp-ad)
* status = #completed
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
  * text = "Evaluation"
* doNotPerform = false
* code = $chf-example-codes#measure-jvp "Measure jugular venous pressure"
  * text = "Measure jugular venous pressure"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* occurrenceDateTime = "2019-02-03T09:41:00Z"
* authoredOn = "2019-02-03"
* supportingInfo[+] = Reference(chf-scenario1-jvp1)
* supportingInfo[+] = Reference(chf-scenario1-jvp2)
* supportingInfo[+] = Reference(chf-scenario1-jvp3)
* supportingInfo[+] = Reference(chf-scenario1-jvp4)
* supportingInfo[+] = Reference(chf-scenario1-bodyweight1-observation)
* supportingInfo[+] = Reference(chf-scenario1-bodyweight2-observation)
* supportingInfo[+] = Reference(chf-scenario1-bodyweight3-observation)
* supportingInfo[+] = Reference(chf-scenario1-bodyweight4-observation)
* supportingInfo[+] = Reference(chf-scenario1-urineout3-observation)
* supportingInfo[+] = Reference(chf-scenario1-lasix-iv)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-jvp1.fsh

Instance: chf-scenario1-jvp1
InstanceOf: CHFJVP
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-jvp)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#jvp
* effectiveDateTime = "2019-01-31T07:00:00Z"
* issued = "2019-01-31T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 9.1 'cm[H2O]' "cmH2O"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-jvp2.fsh

Instance: chf-scenario1-jvp2
InstanceOf: CHFJVP
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-jvp)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#jvp
* effectiveDateTime = "2019-02-01T07:00:00Z"
* issued = "2019-02-01T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 8.5 'cm[H2O]' "cmH2O"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-jvp3.fsh

Instance: chf-scenario1-jvp3
InstanceOf: CHFJVP
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-jvp)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#jvp
* effectiveDateTime = "2019-02-02T07:00:00Z"
* issued = "2019-02-02T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 8.4 'cm[H2O]' "cmH2O"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-jvp4.fsh

Instance: chf-scenario1-jvp4
InstanceOf: CHFJVP
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-jvp)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#jvp
* effectiveDateTime = "2019-02-03T07:00:00Z"
* issued = "2019-02-03T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 8.2 'cm[H2O]' "cmH2O"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-jvp5.fsh

Instance: chf-scenario1-jvp5
InstanceOf: CHFJVP
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-jvp)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* extension[+]
  * url = Canonical(cpg-caseFeaturePertinence)
  * valueCode = #strongly-positive
* extension[+]
  * url = Canonical(cpg-pertinent)
  * valueReference = Reference(chf-scenario1-jvp4)
* extension[+]
  * url = Canonical(cpg-pertinent)
  * valueReference = Reference(chf-scenario1-bodyweight4-observation)
* extension[+]
  * url = Canonical(cpg-pertinent)
  * valueReference = Reference(chf-scenario1-urineout3-observation)
* basedOn = Reference(chf-scenario1-jvp)
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#jvp
* effectiveDateTime = "2019-02-03T07:00:00Z"
* issued = "2019-02-03T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 7.9 'cm[H2O]' "cmH2O"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-lasix-iv-goal.fsh

Instance: chf-scenario1-lasix-iv-goal
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-lasix)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Transition to PO"
* subject = Reference(chf-scenario1-patient)
* target.measure = $chf-example-codes#lasix-iv

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-lasix-iv.fsh

Instance: chf-scenario1-lasix-iv
InstanceOf: chf-lasix-iv-administration
Usage: #example
Description: "CHF Scenario One"
* status = #completed
* medicationCodeableConcept = $chf-example-codes#lasix-iv "LASIX IV"
* subject = Reference(chf-scenario1-patient)
* effectiveDateTime = "2019-02-03T07:08:00Z"
* dosage
  * text = "40mg"
  * route = $sct#47625008 "Intravenous Route (qualifier value)"
  * dose = 40 'mg' "mg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-lasix-po-goal.fsh

Instance: chf-scenario1-lasix-po-goal
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-lasix)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "PO 24 hr Prior to Discharge"
* subject = Reference(chf-scenario1-patient)
* target.measure = $chf-example-codes#lasix-po

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-lasix-po-mr.fsh

Instance: chf-scenario1-lasix-po-mr
InstanceOf: chf-lasix-po-request
Usage: #example
Description: "CHF Scenario One"
* status = #draft
* intent = #proposal
* priority = #routine
* medicationCodeableConcept = $chf-example-codes#lasix-po "LASIX PO"
* subject = Reference(chf-scenario1-patient)
* instantiatesCanonical = Canonical(chf-lasix-po)
* dosageInstruction
  * sequence = 1
  * text = "40mg"
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 40 'mg' "mg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-lasix-po.fsh

Instance: chf-scenario1-lasix-po
InstanceOf: chf-lasix-po-administration
Usage: #example
Description: "CHF Scenario One"
* status = #on-hold
* medicationCodeableConcept = $chf-example-codes#lasix-po "LASIX PO"
* subject = Reference(chf-scenario1-patient)
* effectiveDateTime = "2019-02-03T13:00:00Z"
* request = Reference(chf-scenario1-lasix-po-mr)
* dosage
  * text = "40mg"
  * route = $sct#26643006 "Oral Route (qualifier value)"
  * dose = 40 'mg' "mg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-location.fsh

Instance: chf-scenario1-location
InstanceOf: cpg-location
Usage: #example
Description: "CHF Scenario One"
* status = #active
* name = "Unit 3 East"
* mode = #instance
* type = $v3-RoleCode#CVDX "Cardiovascular diagnostics or therapeutics unit"
* managingOrganization = Reference(chf-scenario1-organization)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-net-io-goal.fsh

Instance: chf-scenario1-net-io-goal
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-net-io-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Net intake/output -1.5 L/day"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $chf-example-codes#net-intake-output
  * detailQuantity = -1.5 'L/d' "L/day"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-net-io.fsh

Instance: chf-scenario1-net-io
InstanceOf: CHFNetIO
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-net-io)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category = $observation-category#vital-signs
* code = $chf-example-codes#net-intake-output
* effectivePeriod
  * start = "2019-02-02T07:00:00Z"
  * end = "2019-02-03T07:00:00Z"
* issued = "2019-02-03T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = -2.1 'L/d' "L/day"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-o2-sat-goal.fsh

Instance: chf-scenario1-o2-sat-goal
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-o2-sat-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Oxygen saturation > 94% SaO2"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $loinc#2708-6
  * detailQuantity = 94 '%' "%"
    * comparator = #>

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-o2-sat.fsh

Instance: chf-scenario1-o2-sat
InstanceOf: chf-o2-sat-request
Usage: #example
Description: "CHF Scenario One"
* instantiatesCanonical = Canonical(chf-o2-sat-ad)
* status = #completed
* intent = #order
* category = $sct#386053000 "Evaluation procedure (procedure)"
  * text = "Evaluation"
* doNotPerform = false
* code = $sct#104847001 "Oxygen saturation measurement (procedure)"
  * text = "Oxygen saturation measurement"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* occurrenceDateTime = "2019-02-03T13:00:00Z"
* authoredOn = "2019-02-03"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-o2sat1.fsh

Instance: chf-scenario1-o2sat1
InstanceOf: CHFO2Sat
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-o2-sat)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code = $loinc#2708-6
* effectiveDateTime = "2019-02-03T05:08:00Z"
* issued = "2019-02-03T05:08:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 87 '%' "%"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-o2sat2.fsh

Instance: chf-scenario1-o2sat2
InstanceOf: CHFO2Sat
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-o2-sat)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code = $loinc#2708-6
* effectiveDateTime = "2019-02-03T09:40:00Z"
* issued = "2019-02-03T09:40:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 93 '%' "%"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-organization.fsh

Instance: chf-scenario1-organization
InstanceOf: cpg-organization
Usage: #example
Description: "CHF Scenario One"
* active = true
* name = "ACME Hospital"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-patient.fsh

Instance: chf-scenario1-patient
InstanceOf: Patient
Usage: #example
Description: "CHF Scenario One"
* active = true
* name
  * use = #usual
  * text = "Patterson, Jeremy"
  * family = "Patterson"
  * given = "Jeremy"
* gender = #male
* birthDate = "1949-03-17"
* deceasedBoolean = false

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-potassium.fsh

Instance: chf-scenario1-potassium
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-potassium-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Potassium 3.5-5.0 mEq/L"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $loinc#86919-8
  * detailRange
    * low = 3 'meq/L' "mEq/L"
    * high = 5 'meq/L' "mEq/L"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-potassium1.fsh

Instance: chf-scenario1-potassium1
InstanceOf: CHFPotassium
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-potassium)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category[VSCat] = $observation-category#vital-signs
* code = $loinc#86919-8
* effectiveDateTime = "2019-02-03T09:40:00Z"
* issued = "2019-02-03T09:40:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 3.9 'meq/L' "mEq/L"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-practitioner.fsh

Instance: chf-scenario1-practitioner
InstanceOf: cpg-practitioner
Usage: #example
Description: "CHF Scenario One"
* active = true
* name
  * use = #usual
  * text = "Rodriguez, Jesse"
  * family = "Rodriguez"
  * given = "Jesse"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-practitionerrole.fsh

Instance: chf-scenario1-practitionerrole
InstanceOf: cpg-practitionerrole
Usage: #example
Description: "CHF Scenario One"
* active = true
* practitioner = Reference(chf-scenario1-practitioner)
* organization = Reference(chf-scenario1-organization)
* code = $cpg-common-persona-cs#2212 "Specialist medical practitioner"
* specialty = $sct#394579002 "Cardiology"
* location = Reference(chf-scenario1-location)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-relatedperson.fsh

Instance: chf-scenario1-relatedperson
InstanceOf: cpg-relatedperson
Usage: #example
Description: "CHF Scenario One"
* active = true
* patient = Reference(chf-scenario1-patient)
* relationship = $v3-RoleCode#SPS "spouse"
* name
  * use = #usual
  * text = "Patterson, Maggie"
  * family = "Patterson"
  * given = "Maggie"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-stop-lasix-iv.fsh

Instance: chf-scenario1-stop-lasix-iv
InstanceOf: chf-lasix-iv-request
Usage: #example
Description: "CHF Scenario One"
* status = #draft
* intent = #proposal
* priority = #routine
* doNotPerform = true
* medicationCodeableConcept = $chf-example-codes#lasix-iv "LASIX IV"
* subject = Reference(chf-scenario1-patient)
* dosageInstruction
  * sequence = 1
  * text = "40mg"
  * route = $sct#47625008 "Intravenous Route (qualifier value)"
  * doseAndRate
    * type = $dose-rate-type#ordered "Ordered"
    * doseQuantity = 40 'mg' "mg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-urine-out.fsh

Instance: chf-scenario1-urine-out
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-urine-out-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Urine output 3-5 L/day"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $loinc#9192-6
  * detailRange
    * low = 3 'L/d' "L/day"
    * high = 5 'L/d' "L/day"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-urineout3-observation.fsh

Instance: chf-scenario1-urineout3-observation
InstanceOf: CHFUrineOut
Usage: #example
Description: "CHF Scenario One"
* extension[+]
  * url = Canonical(cpg-instantiatesCaseFeature)
  * valueCanonical = Canonical(chf-urine-out)
* extension[+]
  * url = Canonical(cpg-caseFeatureType)
  * valueCode = #asserted
* status = #final
* category = $observation-category#vital-signs
* code = $loinc#9192-6
* effectivePeriod
  * start = "2019-02-02T07:00:00Z"
  * end = "2019-02-03T07:00:00Z"
* issued = "2019-02-03T07:00:00Z"
* subject = Reference(chf-scenario1-patient)
* encounter = Reference(chf-scenario1-encounter)
* performer = Reference(chf-scenario1-practitionerrole)
* valueQuantity = 3.8 'L/d' "L/day"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-urineout3.fsh

Instance: chf-scenario1-urineout3
InstanceOf: MeasureReport
Usage: #example
Description: "CHF Scenario One"
* status = #complete
* type = #individual
* measure = Canonical(chf-urine-out-measure)
* subject = Reference(chf-scenario1-patient)
* date = "2019-02-03"
* period
  * start = "2019-02-02"
  * end = "2019-02-03"
* improvementNotation = $measure-improvement-notation#decrease
* group
  * population
    * code = $measure-population#measure-observation
    * count = 1
  * measureScore = 3.8 'L/d' "L/day"
* evaluatedResource = Reference(chf-scenario1-urineout3-observation)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-weight-change.fsh

Instance: chf-scenario1-weight-change
InstanceOf: Goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-bodyweight-change-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Body weight change 0.5-1.5 kg/day"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $chf-example-codes#body-weight-change
  * detailRange
    * low = 0.5 'kg/d' "kg/d"
    * high = 1.5 'kg/d' "kg/d"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/chf-examples/test-cases/chf-scenario1-weight.fsh

Instance: chf-scenario1-weight
InstanceOf: cpg-goal
Usage: #example
Description: "CHF Scenario One"
* extension
  * url = Canonical(cpg-goalFor)
  * valueCanonical = Canonical(chf-bodyweight-pd)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving
* description.text = "Body weight 92kg"
* subject = Reference(chf-scenario1-patient)
* target
  * measure = $loinc#29463-7
  * detailQuantity = 92 'kg' "kg"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activitydefinition-cc-cpg-referral-dietitian.fsh

Instance: cc-cpg-activity-referral-dietitian
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CKD Referral Dietitian"
* insert ExampleActivityDefinitionMetadata(cc-cpg-activity-referral-dietitian)
* name = "ReferralDietitian"
* description = "Referral: Dietitian; History: chronic kidney disease; Question: [add reason for referral]"
* kind = #ServiceRequest
* code = $sct#103699006 "Referral to dietitian (procedure)"
  * text = "Referral to dietitian"
* participant.type = #practitioner
* timingTiming.event.extension
  * url = Canonical(cqf-expression)
  * valueExpression
    * language = #text/cql
    * expression = "Now()"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/activitydefinition-cc-cpg-referral-nephrology.fsh

Instance: cc-cpg-activity-referral-nephrology
InstanceOf: CPGComputableActivityDefinition
Usage: #example
Title: "CKD Referral Nephrology"
* insert ExampleActivityDefinitionMetadata(cc-cpg-activity-referral-nephrology)
* name = "ReferralNephrology"
* description = "Referral: Nephrology; History: [add diagnosis, symptom(s)]; Question: [add reason for referral]"
* relatedArtifact
  * type = #justification
  * display =
  """Refer to nephrologist for co-management of treatment plan in cases of:\n\n\n\tUnclear etiology of kidney disease\n\n\n\n\tRapid progression of disease (GFR decline greater than 5 mL/minute/1.73 m&sup2;/year)\n\n\n\n\tAcute kidney injury or abrupt sustained fall in GFR\n\n\n\n\tGFR less than 30 mL/minute/1.73 m&sup2; (GFR categories G4-G5) to prepare for renal replacement therapy\n\n\n\n\tConsistent finding of significant albuminuria (albumin/creatinine ratio of 300 mg/g or more)\n\n\n\n\tHypertension resistant to treatment with 4 or more antihypertensive agents\n\n\n\n\tDifficulty in decreasing the level of albuminuria despite institution of ACE inhibitor or angiotensin II receptor blocker therapy\n\n\n\n\tPersistent electrolyte abnormalities, including hyperkalemia or high serum phosphate\n\n\n\n\tRecurrent or extensive nephrolithiasis\n\n\n\n\tHereditary kidney disease\n\n\n&nbsp;\n\nNephrologist involvement is recommended when the cause of chronic kidney disease is not clear\n\n\n\tRenal biopsy may be performed to determine the cause as well as to predict disease progression and response to therapy"""
  * citation = "Chronic Kidney Disease Clinical Overview. ClinicalKey. Source"
  * url = $ckd-clinical-overview-11
* kind = #ServiceRequest
* code = $sct#306286007 "Referral to nephrologist (procedure)"
  * text = "Referral to nephrologist"
* participant.type = #practitioner
* timingTiming.event.extension
  * url = Canonical(cqf-expression)
  * valueExpression
    * language = #text/cql
    * expression = "Now()"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/codesystem-anc-reasonforvisit.fsh

CodeSystem: ANCExampleReasonForVisitCS
Id: anc-example-reason-for-visit-cs
Title: "ANC Example Reason for Visit Codesystem"
Description: "Example codes used to identify the reason for an antenatal care visit"
* insert ExampleCodeSystemMetadata(anc-example-reason-for-visit-cs)
* #routine "Routine" "For a scheduled (routine) visit"
* #specific-complaint "Specific complaint" "For specific complaints about you or your baby"
* #first-visit "First visit" "First visit"
* #follow-up-visit "Follow-up visit" "Follow-up visit"
* #include-family-member "Include family member" "Do you want to include your companion or other family member (parent if adolescent) in the examination and discussion?"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/plandefinition-cc-cpg-plan-ckd.fsh

Instance: cc-cpg-plan-ckd
InstanceOf: CPGOrderSetDefinition
Usage: #example
Title: "CKD Ambulatory Plan Definition"
* insert ExamplePlanDefinitionMetadata(cc-cpg-plan-ckd)
* name = "ChronicKidneyDiseaseAmbulatory"
* description = "Chronic Kidney Disease - Ambulatory"
* type = $plan-definition-type#order-set "Order Set"
* copyright = "Copyright © Elsevier, and others."
* useContext
  * code = $usage-context-type#focus "Clinical Focus"
  * valueCodeableConcept = $sct#709044004 "Chronic kidney disease (disorder)"
* topic = $definition-topic-cs#treatment "Treatment"
  * text = "Treatment"
* relatedArtifact
  * type = #justification
  * display = """SYNOPSIS - Chronic Kidney Disease\n\n\n\t\n\tKEY POINTS\n\n\t\n\t\tDecline in function of the kidney characterized by at least 3 months of reduced GFR (less than 60 mL/minute/ 1.73 m&sup2;) or at least 3 months of structural or functional kidney damage\n\t\tAssessment of both GFR and albuminuria is necessary to diagnose chronic kidney disease and monitor disease progression\n\t\tGFR is most commonly estimated through measuring serum creatinine and the use of GFR estimating equations, either the Modification of Diet in Renal Disease Study equation or the Chronic Kidney Disease Epidemiology Collaboration equation\n\t\tAlbuminuria is measured by urine albumin/creatinine ratio; greater than 30 mg/g indicates albuminuria\n\t\tChronic kidney disease is commonly associated with hypertension, diabetes, and cardiovascular disease\n\t\tFirst line therapy includes ACE inhibitors and/or angiotensin II receptor blockers to reduce albuminuria and hypertension\n\t\tIf left untreated, chronic kidney disease can progress to end-stage renal disease requiring dialysis or renal transplant\n\t\t\n\t\t\tSymptoms of end-stage renal disease (eg, pruritus, refractory electrolyte imbalances, metabolic acidosis, severe nausea, neurologic impairments) typically occur when GFR is 5 to 10 mL/minute/1.73 m&sup2;\n\t\t\n\t\t\n\t\tCarefully monitor electrolyte levels, hemoglobin, parathyroid hormone levels, and sodium bicarbonate levels to detect complications of chronic kidney disease, including cardiovascular disease, anemia, bone mineral disease, and metabolic acidosis\n\t\n\t\n\n\n\n\t\n\tURGENT ACTION\n\n\t\n\t\tHyperkalemia may require urgent treatment in patients being treated for chronic kidney disease\n\t\t\n\t\t\tUrgent treatment consists of calcium chloride or calcium gluconate and regimens of sodium bicarbonate, glucose and insulin, or nebulized albuterol\n\t\t\n\t\t\n\t\n\t\n\n\n\n\t\n\tPITFALLS\n\n\t\n\t\tEarly stages are often asymptomatic, causing chronic kidney disease to be untreated, leading to further progression of kidney damage and worse prognosis"""
  * citation = "Chronic Kidney Disease Clinical Overview. ClinicalKey. Source"
  * url = $ckd-clinical-overview-1
* action[+]
  * id = "cc-cpg-activity-referral-nephrology"
  * title = "Referrals"
  * groupingBehavior = #visual-group
  * action[+]
    * id = "34387224"
    * title = "Referral: Nephrology; History: [add diagnosis, symptom(s)]; Question: [add reason for referral]"
    * description = "Referrals"
    * requiredBehavior = #could
    * precheckBehavior = #no
    * definitionCanonical = Canonical(cc-cpg-activity-referral-nephrology)
  * action[+]
    * id = "cc-cpg-activity-referral-dietition"
    * title = "Referral: Dietitian; History: chronic kidney disease; Question: [add reason for referral]"
    * description = "Referrals"
    * requiredBehavior = #could
    * precheckBehavior = #no
    * definitionCanonical = Canonical(cc-cpg-activity-referral-dietitian)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/plandefintion-va-ckd-recommendations.fsh

Instance: va-ckd-recommendations
InstanceOf: CPGRecommendationDefinition
Usage: #example
Title: "CKD VA Recommendations Plan Definition"
* insert ExamplePlanDefinitionMetadata(va-ckd-recommendations)
* identifier
  * use = #official
  * value = "VA_CKD_Recommendations"
* name = "VACKDRecommendations"
* description = "VA CKD Recommendations"
* type = $plan-definition-type#eca-rule "ECA Rule"
* useContext
  * code = $usage-context-type#focus "Clinical Focus"
  * valueCodeableConcept = $sct#709044004 "Chronic kidney disease (disorder)"
* topic = $definition-topic-cs#treatment "Treatment"
* action
  * id = "001"
  * extension[+]
    * url = Canonical(cqf-strengthOfRecommendation)
    * valueCodeableConcept = $recommendation-strength#weak "Weak"
  * extension[+]
    * url = Canonical(cpg-directionOfRecommendation)
    * valueCodeableConcept = $cpg-recommendation-direction-cs#for "For"
  * title = "CKD Protein Diet"
  * description = "In patients with stage 3 and 4 CKD, we suggest a protein diet of 0.6 to 0.8 g/kg/day as it may slow the decline in glomerular filtration rate (GFR) and progression to end-stage renal disease (ESRD)."
  * documentation
    * type = #documentation
    * display = "VA/DoD Clinical Practice Guideline for The management of Chronic Kidney Disease in Primary care"
    * url = $va-clinical-practice-guidelines
  * condition
    * kind = #applicability
    * expression
      * language = #text/cql
      * expression = "Has CKD stage 3 or 4"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/questionnaire-anc-quick-check.fsh

Instance: anc-quick-check
InstanceOf: Questionnaire
Usage: #example
Title: "ANC Quick Check Questionnaire"
* insert ExampleQuestionnaireMetadata(anc-quick-check)
* description = "Example of a Questionnaire for an ANC Quick Check"
* name = "ANCQuickCheck"
* subjectType = #Patient
* item
  * extension[+]
    * url = Canonical(cpg-answerValueSetSource)
    * valueCanonical = Canonical(anc-reason-for-visit-vs)
  * extension[+]
    * url = Canonical(cpg-itemImage)
    * valueAttachment.url = $anc-reason-for-visit-image
  * linkId = "reason-for-visit"
  * text = "Why did you come?"
  * type = #choice
  * answerOption[+]
    * extension
      * url = Canonical(cpg-responseImage)
      * valueAttachment.url = $anc-reason-for-visit-routine-image
    * valueString = "For a scheduled (routine) visit"
  * answerOption[+]
    * extension
      * url = Canonical(cpg-responseImage)
      * valueAttachment.url = $anc-reason-for-visit-specific-complaint-image
    * valueString = "For specific complaints about you or your baby"
  * answerOption[+]
    * extension
      * url = Canonical(cpg-responseImage)
      * valueAttachment.url = $anc-reason-for-visit-first-image
    * valueString = "First visit"
  * answerOption[+]
    * extension
      * url = Canonical(cpg-responseImage)
      * valueAttachment.url = $anc-reason-for-visit-follow-up-image
    * valueString = "Follow-up visit"
  * answerOption[+]
    * extension
      * url = Canonical(cpg-responseImage)
      * valueAttachment.url = $anc-reason-for-visit-include-family-member-image
    * valueString = "Do you want to include your companion or other family member (parent if adolescent) in the examination and discussion?"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/examples/valueset-anc-reasonforvisit.fsh

ValueSet: ANCReasonForVisitVS
Id: anc-reason-for-visit-vs
Title: "ANC Reason for Visit ValueSet"
Description: "Codes that identify the reason for an antenatal care visit"
* insert ValueSetMetadata(anc-reason-for-visit-vs)
* include codes from system ANCExampleReasonForVisitCS
* ^experimental = true

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-answer-value-set-source.fsh

Extension: CPGAnswerValueSetSource
Id: cpg-answerValueSetSource
Title: "CPG Answer Value Set Source Extension"
Description: "The canonical URL for the source value set for the answer options, when those options are provided directly in the questionnaire."
* insert StructureDefinitionMetadata(cpg-answerValueSetSource)
* insert ExtensionContext(Questionnaire.item)
* value[x] only canonical

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-assertion-expression.fsh

Extension: CPGAssertionExpression
Id: cpg-assertionExpression
Title: "CPG Assertion Expression Extension"
Description: "Defines formal computational semantics for the feature if it is asserted. This is typically only required if the case feature is of a different type than the profile (e.g. a boolean feature)."
* insert StructureDefinitionMetadata(cpg-assertionExpression)
* insert ExtensionContext(StructureDefinition)
* value[x] only Expression

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-case-feature-of.fsh

Extension: CPGCaseFeatureOf
Id: cpg-caseFeatureOf
Title: "CPG Case Feature Of Extension"
Description: "Defines which guideline elements this case feature definition is a feature of."
* insert StructureDefinitionMetadata(cpg-caseFeatureOf)
* insert ExtensionContext(Resource)
* value[x] only canonical

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-case-feature-pertinence.fsh

Extension: CPGCaseFeaturePertinence
Id: cpg-caseFeaturePertinence
Title: "CPG Case Feature Pertinence Extension"
Description: "Describes the pertinence of the case feature."
* insert StructureDefinitionMetadata(cpg-caseFeaturePertinence)
* insert ExtensionContext(Resource)
* value[x] only code
* valueCode from $cpg-casefeature-pertinence-valueset (required)
  * ^binding.description = "Describes the pertinence of a case feature"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-case-feature-type.fsh

Extension: CPGCaseFeatureType
Id: cpg-caseFeatureType
Title: "CPG Case Feature Type Extension"
Description: "Describes whether the case feature is asserted or inferred."
* insert StructureDefinitionMetadata(cpg-caseFeatureType)
* insert ExtensionContext(Resource)
* value[x] only code
* valueCode from $cpg-casefeature-type-valueset (required)
  * ^binding.description = "Whether the case feature is asserted or inferred"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-collect-with.fsh

Extension: CPGCollectWith
Id: cpg-collectWith
Title: "CPG Collect With Extension"
Description: "The URL of the questionnaire to be used to collect the information. If this information is not supplied as part of the activity definition, it is expected to be determined dynamically as part of realizing the activity."
* insert StructureDefinitionMetadata(cpg-collectWith)
* insert ExtensionContext(ActivityDefinition)
* value[x] only Canonical(CPGComputableQuestionnaire)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-direction-of-recommendation.fsh

Extension: CPGDirectionOfRecommendation
Id: cpg-directionOfRecommendation
Title: "CPG Direction Of Recommendation Extension"
Description: """
Specifies whether the recommendation is "for" or "against" a particular activity. For example, the recommendation to prescribe a particular medication, versus the recommendation not to perform a particular procedure.
"""
* insert StructureDefinitionMetadata(cpg-directionOfRecommendation)
* insert ExtensionContext(PlanDefinition.action)
* value[x] only CodeableConcept
* valueCodeableConcept from $cpg-recommendation-direction-valueset (required)
  * ^binding.description = "The direction of the recommendation, for or against"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-enabled.fsh

Extension: CPGEnabled
Id: cpg-enabled
Title: "CPG Enabled Extension"
Description: "Determines whether the artifact on which it appears is Enabled, as opposed to just Known."
* insert StructureDefinitionMetadata(cpg-enabled)
* insert ExtensionContext(Resource)
* . ^comment = "Systems that are capable of storing and retrieving knowledge artifacts SHALL use this element to distinguish between a Known and an actively Enabled artifact. Behavior described by the artifact should only be implemented if this element is present and has a value of true."
* value[x] only boolean

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-enroll-in.fsh

Extension: CPGEnrollIn
Id: cpg-enrollIn
Title: "CPG Enroll In Extension"
Description: "The URL of the PlanDefinition (Strategy or Pathway) in which the patient should be enrolled."
* insert StructureDefinitionMetadata(cpg-enrollIn)
* insert ExtensionContext(ActivityDefinition)
* value[x] only Canonical(CPGComputablePlanDefinition)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-enrolled-in.fsh

Extension: CPGEnrolledIn
Id: cpg-enrolledIn
Title: "CPG Enrolled In Extension"
Description: "Tracks the episode of care for a particular patient enrolled in a particular pathway."
* insert StructureDefinitionMetadata(cpg-enrolledIn)
* insert ExtensionContext(EpisodeOfCare)
* . ^comment = "The enrollment may be automatic, prompted, or manual."
* value[x] only canonical

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-feature-expression.fsh

Extension: CPGFeatureExpression
Id: cpg-featureExpression
Title: "CPG Feature Expression Extension"
Description: "Defines formal computational semantics for the feature, combining the inference and assertion expressions. This is typically only required if the feature is of a different type than the profile (e.g. a boolean feature)."
* insert StructureDefinitionMetadata(cpg-featureExpression)
* insert ExtensionContext(StructureDefinition)
* value[x] only Expression

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-generatedFrom.fsh

Extension: CPGGeneratedFrom
Id: cpg-generatedFrom
Title: "CPG Generated From Extension"
Description: "Defines which definitional artifact was used to generated the resource."
* insert StructureDefinitionMetadata(cpg-generatedFrom)
* insert ExtensionContext(Resource)
* value[x] only canonical

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-goal-for.fsh

Extension: CPGGoalFor
Id: cpg-goalFor
Title: "CPG Goal For Extension"
Description: "The URL of the PlanDefinition (recommendation, strategy, or pathway) that the goal is related to, or defined in support of."
* insert StructureDefinitionMetadata(cpg-goalFor)
* insert ExtensionContext(Goal)
* value[x] only Canonical(CPGComputablePlanDefinition)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-impression-for.fsh

Extension: CPGImpressionFor
Id: cpg-impressionFor
Title: "CPG Impression For Extension"
Description: "Specifies a case (episode of care) which this clinical impression is for."
* insert StructureDefinitionMetadata(cpg-impressionFor)
* insert ExtensionContext(ClinicalImpression)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-inference-expression.fsh

Extension: CPGInferenceExpression
Id: cpg-inferenceExpression
Title: "CPG Inference Expression Extension"
Description: "Defines formal computational semantics for calculating the case feature if it is not asserted."
* insert StructureDefinitionMetadata(cpg-inferenceExpression)
* insert ExtensionContext(StructureDefinition)
* value[x] only Expression

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-instantiates-case-feature.fsh

Extension: CPGInstantiatesCaseFeature
Id: cpg-instantiatesCaseFeature
Title: "CPG Instantiates Case Feature Extension"
Description: "References the definition for this case feature."
* insert StructureDefinitionMetadata(cpg-instantiatesCaseFeature)
* insert ExtensionContext(Resource)
* value[x] only Canonical(CPGCaseFeatureDefinition)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-is-unenrollment.fsh

Extension: CPGIsUnenrollment
Id: cpg-isUnenrollment
Title: "CPG Is Unenrollment Extension"
Description: "Determines whether the activity is to enroll or unenroll the patient in the specified strategy or pathway."
* insert StructureDefinitionMetadata(cpg-isUnenrollment)
* insert ExtensionContext(ActivityDefinition)
* insert ExtensionContext(Task)
* . ?!
  * ^isModifierReason = "Not known why this is labelled a modifier"
* value[x] only boolean

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-item-image.fsh

Extension: CPGItemImage
Id: cpg-itemImage
Title: "CPG Item Image Extension"
Description: "An image to display as a visual accompaniment to the question being asked."
* insert StructureDefinitionMetadata(cpg-itemImage)
* insert ExtensionContext(Questionnaire.item)
* value[x] only Attachment

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-part-of.fsh

Extension: CPGPartOf
Id: cpg-partOf
Title: "CPG Part Of Extension"
Description: "Specifies the canonical URL of a Pathway or Strategy that this definition is part of."
* insert StructureDefinitionMetadata(cpg-partOf)
* insert ExtensionContext(PlanDefinition)
* . ^comment = "For enrollment checking, if the computable PlanDefinition is not a Pathway or Strategy, then this extension is followed to attempt to determine a Pathway or Strategy to use for the enrollment check, recursively."
* value[x] only Canonical(PlanDefinition)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-participant-capability-statement.fsh

Extension: CPGParticipantCapabilityStatement
Id: cpg-participantCapabilityStatement
Title: "CPG Participant Capability Statement Extension"
Description: "A CapabilityStatement that specifies what capabilities a device must have in order to participant in this action of a PlanDefinition."
* insert StructureDefinitionMetadata(cpg-participantCapabilityStatement)
* insert ExtensionContext(PlanDefinition.action.participant)
* . 0..1
* value[x] only Canonical(CapabilityStatement)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-pertinent.fsh

Extension: CPGPertinent
Id: cpg-pertinent
Title: "CPG Pertinent Extension"
Description: "The pertinent positive or negative information relevant to the recommendation."
* insert StructureDefinitionMetadata(cpg-pertinent)
* insert ExtensionContext(Resource)
* . ^comment = "This will typically be the most relevant case features used in determining applicability, but could also be other patient-specific information relevant to interpreting or assessing appropriateness of the recommendation with respect to the patient."
* value[x] only Reference

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-plan-for.fsh

Extension: CPGPlanFor
Id: cpg-planFor
Title: "CPG Plan For Extension"
Description: "Specifies a case (episode of care) which this care plan is managing."
* insert StructureDefinitionMetadata(cpg-planFor)
* insert ExtensionContext(CarePlan)
* . ^comment = "The enrollment may be automatic, prompted, or manual."
* value[x] only Reference(CPGCase)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-rating.fsh

Extension: CPGRating
Id: cpg-rating
Title: "CPG Rating Extension"
Description: "A clinician-friendly rating, or score, for the recommendation; patient-friendly if the recommendation is patient-facing."
* insert StructureDefinitionMetadata(cpg-rating)
* insert ExtensionContext(Resource)
* insert ExtensionContext(PlanDefinition.action)
* value[x] only Quantity or Range or Ratio

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-rationale.fsh

Extension: CPGRationale
Id: cpg-rationale
Title: "CPG Rationale Extension"
Description: "A clinician-friendly explanation for the recommendation; patient-friendly if the recommendation is patient-facing."
* insert StructureDefinitionMetadata(cpg-rationale)
* insert ExtensionContext(Resource)
* insert ExtensionContext(PlanDefinition.action)
* value[x] only markdown

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-report-with.fsh

Extension: CPGReportWith
Id: cpg-reportWith
Title: "CPG Report With Extension"
Description: "The URL of the artifact that describes the report to be sent, a metric or measure, case report, or profile that describes the data to be reported."
* insert StructureDefinitionMetadata(cpg-reportWith)
* insert ExtensionContext(ActivityDefinition)
* value[x] only Canonical(CPGComputableMetric or CPGComputableGraphDefinition or CPGCaseFeatureDefinition)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-response-image.fsh


Extension: CPGResponseImage
Id: cpg-responseImage
Title: "CPG Response Image Extension"
Description: "An image to display as a visual accompaniment to the response."
* insert StructureDefinitionMetadata(cpg-responseImage)
* insert ExtensionContext(Questionnaire.item.answerOption)
* value[x] only Attachment

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-summary-definition-for.fsh

Extension: CPGSummaryDefinitionFor
Id: cpg-summaryDefinitionFor
Title: "CPG Summary Definition For Extension"
Description: "Specifies which clinical practice guideline, pathway, strategy, or recommendation this is a summary definition for."
* insert StructureDefinitionMetadata(cpg-summaryDefinitionFor)
* insert ExtensionContext(Resource)
* value[x] only canonical

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/extensions/extension-cpg-summary-for.fsh

Extension: CPGSummaryFor
Id: cpg-summaryFor
Title: "CPG Summary For Extension"
Description: "Specifies a case (episode of care), pathway, strategy, or recommendation which this summary is for."
* insert StructureDefinitionMetadata(cpg-summaryFor)
* insert ExtensionContext(Composition)
* value[x] only Reference(CPGCase or CPGCarePlan or CPGStrategy or CPGCommunicationRequest or CPGImmunizationRequest or CPGProposeDiagnosisTask or CPGQuestionnaireTask or CPGRecordDetectedIssueTask or CPGRecordInferenceTask or CPGMedicationRequest or CPGReportFlagTask or CPGServiceRequest)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/operations/operationdefinition-cpg-activitydefinition-apply.fsh

Instance: cpg-activitydefinition-apply
InstanceOf: OperationDefinition
Usage: #definition
Title: "CPG ActivityDefinition Apply"
Description: "The apply operation applies a activityDefinition to a given context"
* insert OperationDefinitionMetadata(cpg-activitydefinition-apply)
* insert OperationExtensions
* name = "CPGActivityDefinitionApply"
* code = #apply
* comment = """
The result of invoking this operation is a resource of the type specified by the activity definition, with all the definitions resolved as appropriate for the type of resource. Any dynamicValue elements will be evaluated (in the order in which they appear in the resource) and the results applied to the returned resource.

If the ActivityDefinition includes library references, those libraries will be available to the evaluated expressions. If those libraries have parameters, those parameters will be bound by name to the parameters given to the operation. In addition, parameters to the $apply operation are available within dynamicValue expressions as context variables, accessible by the name of the parameter, prefixed with a percent (%) symbol. For a more detailed description, refer to the ActivityDefinition resource.

Note that the result of this operation is transient (i.e. the resource created by the operation is not persisted in the server, but returned as a contained resource in the result). The result effectively represents a proposed activity, and it is up to the caller to determine whether and how the activity is carried out.
"""
* resource = #ActivityDefinition
* system = false
* type = true
* instance = true
* parameter[+]
  * name = #url
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Canonical URL of the ActivityDefinition when invoked at the resource type level. This is exclusive with the `ActivityDefinition` parameter."
  * type = #uri
* parameter[+]
  * name = #version
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Version of the ActivityDefinition when invoked at the resource type level. This is exclusive with the `ActivityDefinition` parameter."
  * type = #string
* parameter[+]
  * name = #activityDefinition
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The activity definition to apply. If the operation is invoked on an instance, this parameter is not allowed. If the operation is invoked at the type level, this parameter is required"
  * type = #ActivityDefinition
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "The subject(s) that is/are the target of the activity definition to be applied. The subject may be a Patient, Practitioner, Organization, Location, Device, or Group. Subjects provided in this parameter will be resolved as the subject of the ActivityDefinition based on the type of the subject. If multiple subjects of the same type are provided, the behavior is implementation-defined"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #encounter
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The encounter in context, if any"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #practitioner
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The practitioner in context"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #organization
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The organization in context"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #userType
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The type of user initiating the request, e.g. patient, healthcare provider, or specific type of healthcare provider (physician, nurse, etc.)"
  * type = #CodeableConcept
* parameter[+]
  * name = #userLanguage
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Preferred language of the person using the system"
  * type = #CodeableConcept
* parameter[+]
  * name = #userTaskContext
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The task the system user is performing, e.g. laboratory results review, medication list review, etc. This information can be used to tailor decision support outputs, such as recommended information resources"
  * type = #CodeableConcept
* parameter[+]
  * name = #setting
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The current setting of the request (inpatient, outpatient, etc.)"
  * type = #CodeableConcept
* parameter[+]
  * name = #settingContext
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Additional detail about the setting of the request, if any"
  * type = #CodeableConcept
* parameter[+]
  * documentation = "Any input parameters defined in libraries referenced by the ActivityDefinition. Parameter types are mapped to CQL as specified in the Using CQL section of this implementation guide. If a parameter appears more than once in the input Parameters resource, it is represented with a List in the input CQL. If a parameter has parts, it is represented as a Tuple in the input CQL."
  * max = "1"
  * min = 0
  * name = #parameters
  * type = #Parameters
  * use = #in
* parameter[+]
  * documentation = "Whether to use data from the server performing the evaluation. If this parameter is true (the default), then the operation will use data first from any bundles provided as parameters (through the data and prefetch parameters), second data from the server performing the operation, and third, data from the dataEndpoint parameter (if provided). If this parameter is false, the operation will use data first from the bundles provided in the data or prefetch parameters, and second from the dataEndpoint parameter (if provided)."
  * max = "1"
  * min = 0
  * name = #useServerData
  * type = #boolean
  * use = #in
* parameter[+]
  * documentation = "Data to be made available to the ActivityDefinition evaluation. This parameter is exclusive with the prefetchData parameter (i.e. either provide all data as a single bundle, or provide data using multiple bundles with prefetch descriptions)."
  * max = "1"
  * min = 0
  * name = #data
  * type = #Bundle
  * use = #in
* parameter[+]
  * documentation = "Data to be made available to the ActivityDefinition evaluation, organized as prefetch response bundles. Each prefetchData parameter specifies either the name of the prefetchKey it is satisfying, a DataRequirement describing the prefetch, or both."
  * max = "*"
  * min = 0
  * name = #prefetchData
  * use = #in
  * part[+]
    * documentation = "The key of the prefetch item. This typically corresponds to the name of a parameter in a library, or the name of a prefetch item in a CDS Hooks discovery response"
    * name = #key
    * max = "1"
    * min = 0
    * type = #string
    * use = #in
  * part[+]
    * documentation = "A DataRequirement describing the content of the prefetch item."
    * name = #descriptor
    * max = "1"
    * min = 0
    * type = #DataRequirement
    * use = #in
  * part[+]
    * documentation = "The prefetch data as a Bundle. If the prefetchData has no prefetchResult part, it indicates there is no data associated with this prefetch item."
    * name = #data
    * max = "1"
    * min = 0
    * type = #Bundle
    * use = #in
* parameter[+]
  * documentation = "An endpoint to use to access data referenced by retrieve operations in libraries referenced by the ActivityDefinition. If provided, this endpoint is used after the data or prefetchData bundles, and the server, if the useServerData parameter is true."
  * max = "1"
  * min = 0
  * name = #dataEndpoint
  * type = #Endpoint
  * use = #in
* parameter[+]
  * name = #artifactEndpointConfiguration
  * min = 0
  * max = "*"
  * use = #in
  * documentation = """
Configuration information to resolve canonical artifacts

Processing Semantics:

Create a canonical-like reference (e.g.
`{canonical.url}|{canonical.version}` or similar extensions for non-canonical artifacts).

* Given a single `artifactEndpointConfiguration`
  * When `artifactRoute` is present
    * And `artifactRoute` *starts with* canonical or artifact reference
    * Then attempt to resolve with `endpointUri` or `endpoint`
  * When `artifactRoute` is not present
    * Then attempt to resolve with `endpointUri` or `endpoint`
* Given multiple `artifactEndpointConfiguration`s
  * Then rank order each configuration (see below)
  * And attempt to resolve with `endpointUri` or `endpoint` in order until resolved

Rank each `artifactEndpointConfiguration` such that:
* if `artifactRoute` is present *and* `artifactRoute` *starts with* canonical or artifact reference: rank based on number of matching characters
* if `artifactRoute` is *not* present: include but rank lower

NOTE: For evenly ranked `artifactEndpointConfiguration`s, order as defined in the
OperationDefinition.
"""
  * part[+]
    * name = #artifactRoute
    * min = 0
    * max = "1"
    * use = #in
    * type = #uri
    * documentation = "An optional route used to determine whether this endpoint is expected to be able to resolve artifacts that match the route (i.e. start with the route, up to and including the entire url)"
  * part[+]
    * name = #endpointUri
    * min = 0
    * max = "1"
    * use = #in
    * type = #uri
    * documentation = "The URI of the endpoint, exclusive with the `endpoint` parameter"
  * part[+]
    * name = #endpoint
    * min = 0
    * max = "1"
    * use = #in
    * type = #Endpoint
    * documentation = "An Endpoint resource describing the endpoint, exclusive with the `endpointUri` parameter"
* parameter[+]
  * documentation = "An endpoint to use to access terminology (i.e. valuesets, codesystems, and membership testing) referenced by the ActivityDefinition. If no terminology endpoint is supplied, the evaluation will attempt to use the server on which the operation is being performed as the terminology server."
  * max = "1"
  * min = 0
  * name = #terminologyEndpoint
  * type = #Endpoint
  * use = #in
* parameter[+]
  * name = #return
  * use = #out
  * min = 1
  * max = "1"
  * documentation = "The request resource that is the result of applying the definition"
  * type = #Any

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/operations/operationdefinition-cpg-common-patient-summary.fsh

Instance: cpg-common-patient-summary
InstanceOf: OperationDefinition
Usage: #definition
Title: "CPG Common Patient Summary"
Description: "The summary operation generates a patient summary for a patient"
* insert OperationDefinitionMetadata(cpg-common-patient-summary)
* insert OperationExtensions
* name = "CPGCommonPatientSummary"
* code = #summary
* comment = "The result of this operation is a patient summary document, constructed according to agreed conventions such as the International Patient Summary."
* resource = #Patient
* system = false
* type = false
* instance = true
* parameter
  * name = #return
  * use = #out
  * min = 1
  * max = "1"
  * documentation = "The document Bundle that is the current patient summary document"
  * type = #Bundle

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/operations/operationdefinition-cpg-plandefinition-apply.fsh

Instance: cpg-plandefinition-apply
InstanceOf: OperationDefinition
Usage: #definition
Title: "CPG PlanDefinition Apply"
Description: "The apply operation applies a PlanDefinition to a given context"
* insert OperationDefinitionMetadata(cpg-plandefinition-apply)
* insert OperationExtensions
* name = "CPGPlanDefinitionApply"
* code = #apply
* comment = """
The result of this operation is a Bundle for each subject, where the Bundle 
contains Request resources that are the direct result of applying 
the PlanDefinition to that subject. The Bundle will have entries for 
each of the applicable actions in the PlanDefinition based on evaluating 
the applicability condition in context, and producing Request resources 
based on the definition element for each applicable action.

For each applicable action, the definition is applied as described in the `$apply`
operation of the ActivityDefinition resource, and the resulting resource is
added as an entry in the Bundle. The resulting Bundle may be any combination of
Request resources, including CarePlan, RequestGroup, and individual Request resources
such as ServiceRequest and MedicationRequest.

Note that to preserve the structure of the PlanDefinition, systems may choose to return
the requests in a RequestGroup. In this case, the individual request resources will have
an intent of `option`, meaning that their intent is governed by the RequestGroup.

If the ActivityDefinition includes library references, those
libraries will be available to the evaluated expressions. If those libraries
have parameters, those parameters will be bound by name to the parameters given
to the operation.  In addition, parameters to the `$apply` operation are available
within dynamicValue expressions as context variables, accessible by the name of
the parameter, prefixed with a percent (%) symbol.

For a more detailed description, refer to the PlanDefinition and
ActivityDefinition resource documentation. Note that result of this operation is
transient (i.e. none of the resources created by the operation are persisted in
the server, they are all returned as entries in the result Bundle(s)). The
result effectively represents a proposed set of activities, and it is up to the
caller to determine whether and how those activities are actually carried out.
"""
* resource = #PlanDefinition
* system = false
* type = true
* instance = true
* parameter[+]
  * name = #url
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Canonical URL of the PlanDefinition when invoked at the resource type level. This is exclusive with the `planDefinition` parameter."
  * type = #uri
* parameter[+]
  * name = #version
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Version of the PlanDefinition when invoked at the resource type level. This is exclusive with the `planDefinition` parameter."
  * type = #string
* parameter[+]
  * name = #planDefinition
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The plan definition to be applied. If the operation is invoked at the instance level, this parameter is not allowed; if the operation is invoked at the type level, either this parameter or `url` (and optionally `version`) must be supplied."
  * type = #PlanDefinition
* parameter[+]
  * name = #subject
  * use = #in
  * min = 1
  * max = "*"
  * documentation = "The subject(s) that is/are the target of the plan to be applied. The subject may be a Patient, Practitioner, Organization, Location, Device, or Group. Subjects provided in this parameter will be resolved as the subject of the PlanDefinition based on the type of the subject. If multiple subjects of the same type are provided, the behavior is implementation-defined"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #encounter
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The encounter in context, if any"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #practitioner
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The practitioner applying the plan definition"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #organization
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The organization applying the plan definition"
  * type = #string
  * searchType = #reference
* parameter[+]
  * name = #userType
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The type of user initiating the request, e.g. patient, healthcare provider, or specific type of healthcare provider (physician, nurse, etc.)"
  * type = #CodeableConcept
* parameter[+]
  * name = #userLanguage
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Preferred language of the person using the system"
  * type = #CodeableConcept
* parameter[+]
  * name = #userTaskContext
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The task the system user is performing, e.g. laboratory results review, medication list review, etc. This information can be used to tailor decision support outputs, such as recommended information resources"
  * type = #CodeableConcept
* parameter[+]
  * name = #setting
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "The current setting of the request (inpatient, outpatient, etc.)"
  * type = #CodeableConcept
* parameter[+]
  * name = #settingContext
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "Additional detail about the setting of the request, if any"
  * type = #CodeableConcept
* parameter[+]
  * name = #mergeNestedCarePlans
  * use = #in
  * min = 0
  * max = "1"
  * documentation = "True if the result of any nested PlanDefinitions should be merged into the final care plan, false if they should be preserved as nested CarePlans in the output. If this parameter is not specified, the default behavior is to preserve nested care plans in the output."
  * type = #boolean
* parameter[+]
  * documentation = "Any input parameters defined in libraries referenced by the PlanDefinition.  Parameter types are mapped to CQL as specified in the Using CQL With FHIR implementation guide. If a parameter appears more than once in the input Parameters resource, it is represented with a List in the input CQL. If a parameter has parts, it is represented as a Tuple in the input CQL."
  * max = "1"
  * min = 0
  * name = #parameters
  * type = #Parameters
  * use = #in
* parameter[+]
  * documentation = "Whether to use data from the server performing the evaluation. If this parameter is true (the default), then the operation will use data first from any bundles provided as parameters (through the data and prefetch parameters), second data from the server performing the operation, and third, data from the dataEndpoint parameter (if provided). If this parameter is false, the operation will use data first from the bundles provided in the data or prefetch parameters, and second from the dataEndpoint parameter (if provided)."
  * max = "1"
  * min = 0
  * name = #useServerData
  * type = #boolean
  * use = #in
* parameter[+]
  * documentation = "Data to be made available to the PlanDefinition evaluation. This parameter is exclusive with the prefetchData parameter (i.e. either provide all data as a single bundle, or provide data using multiple bundles with prefetch descriptions)."
  * max = "1"
  * min = 0
  * name = #data
  * type = #Bundle
  * use = #in
* parameter[+]
  * documentation = "Data to be made available to the PlanDefinition evaluation, organized as prefetch response bundles. Each prefetchData parameter specifies either the name of the prefetchKey it is satisfying, a DataRequirement describing the prefetch, or both."
  * max = "*"
  * min = 0
  * name = #prefetchData
  * use = #in
  * part[+]
    * documentation = "The key of the prefetch item. This typically corresponds to the name of a parameter in a library, or the name of a prefetch item in a CDS Hooks discovery response"
    * name = #key
    * max = "1"
    * min = 0
    * type = #string
    * use = #in
  * part[+]
    * documentation = "A DataRequirement describing the content of the prefetch item."
    * name = #descriptor
    * max = "1"
    * min = 0
    * type = #DataRequirement
    * use = #in
  * part[+]
    * documentation = "The prefetch data as a Bundle. If the prefetchData has no prefetchResult part, it indicates there is no data associated with this prefetch item."
    * name = #data
    * max = "1"
    * min = 0
    * type = #Bundle
    * use = #in
* parameter[+]
  * documentation = "An endpoint to use to access data referenced by retrieve operations in libraries referenced by the PlanDefinition. If provided, this endpoint is used after the data or prefetchData bundles, and the server, if the useServerData parameter is true."
  * max = "1"
  * min = 0
  * name = #dataEndpoint
  * type = #Endpoint
  * use = #in

* parameter[+]
  * name = #artifactEndpointConfiguration
  * min = 0
  * max = "*"
  * use = #in
  * documentation = """
Configuration information to resolve canonical artifacts

Processing Semantics:

Create a canonical-like reference (e.g.
`{canonical.url}|{canonical.version}` or similar extensions for non-canonical artifacts).

* Given a single `artifactEndpointConfiguration`
  * When `artifactRoute` is present
    * And `artifactRoute` *starts with* canonical or artifact reference
    * Then attempt to resolve with `endpointUri` or `endpoint`
  * When `artifactRoute` is not present
    * Then attempt to resolve with `endpointUri` or `endpoint`
* Given multiple `artifactEndpointConfiguration`s
  * Then rank order each configuration (see below)
  * And attempt to resolve with `endpointUri` or `endpoint` in order until resolved

Rank each `artifactEndpointConfiguration` such that:
* if `artifactRoute` is present *and* `artifactRoute` *starts with* canonical or artifact reference: rank based on number of matching characters 
* if `artifactRoute` is *not* present: include but rank lower

NOTE: For evenly ranked `artifactEndpointConfiguration`s, order as defined in the
OperationDefinition.
"""
  * part[+]
    * name = #artifactRoute
    * min = 0
    * max = "1"
    * use = #in
    * type = #uri
    * documentation = "An optional route used to determine whether this endpoint is expected to be able to resolve artifacts that match the route (i.e. start with the route, up to and including the entire url)"
  * part[+]
    * name = #endpointUri
    * min = 0
    * max = "1"
    * use = #in
    * type = #uri
    * documentation = "The URI of the endpoint, exclusive with the `endpoint` parameter"
  * part[+]
    * name = #endpoint
    * min = 0
    * max = "1"
    * use = #in
    * type = #Endpoint
    * documentation = "An Endpoint resource describing the endpoint, exclusive with the `endpointUri` parameter"
* parameter[+]
  * documentation = "An endpoint to use to access terminology (i.e. valuesets, codesystems, and membership testing) referenced by the PlanDefinition. If no terminology endpoint is supplied, the evaluation will attempt to use the server on which the operation is being performed as the terminology server."
  * max = "1"
  * min = 0
  * name = #terminologyEndpoint
  * type = #Endpoint
  * use = #in
* parameter[+]
  * name = #return
  * use = #out
  * min = 0
  * max = "*"
  * documentation = "A Bundle for each input subject that is the result of applying the plan definition to that subject."
  * type = #Bundle

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-administermedication-activity.fsh

Profile: CPGAdministerMedicationActivity
Parent: CPGComputableActivityDefinition
Id: cpg-administermedicationactivity
Title: "CPG Administer Medication Activity"
Description: "Definition of a proposal to administer a medication as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-administermedicationactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-administermedicationtask (exactly)
  * ^short = "At least a CPG Administer Medication Task"
  * ^definition = "The profile that the resulting task must conform to; at least a CPGAdministerMedicationTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#administer-medication
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-administermedication-task.fsh

Profile: CPGAdministerMedicationTask
Parent: CPGTask
Id: cpg-administermedicationtask
Title: "CPG Administer Medication Task"
Description: "Recommendation to administer a specific medication as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-administermedicationtask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#administer-medication
* code MS
* input ..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains
  medicationRequest 0..1 MS and
  medicationDispense 0..1 MS
* input[medicationRequest]
  * ^short = "Medication to dispense"
  * ^definition = "A MedicationRequest detailing the specific medication to be dispensed."
  * ^comment = "Note that this may be an existing MedicationRequest that is recommended to be administered, or it may be a proposed MedicationRequest provided as part of the administer recommendation."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#order-medication
  * type MS
  * value[x] only Reference(CPGMedicationRequest)
  * value[x] MS
* input[medicationDispense]
  * ^short = "Medication to dispense"
  * ^definition = "A MedicationDispense detailing the specific medication to be dispensed."
  * ^comment = "Note that this may be an existing MedicationDispense that is recommended to be administered, or it may be a proposed MedicationDispense provided as part of the administer recommendation."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#dispense-medication
  * type MS
  * value[x] only Reference(CPGMedicationDispense)
  * value[x] MS
* output ..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains medicationAdministration 0..1 MS
* output[medicationAdministration]
  * ^short = "Medication that was administered"
  * ^definition = "A MedicationAdministration that is the result of completing this task."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#administer-medication
  * type MS
  * value[x] only Reference(CPGMedicationAdministration)
  * value[x] MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-collectinformation-activity.fsh

Profile: CPGCollectInformationActivity
Parent: CPGComputableActivityDefinition
Id: cpg-collectinformationactivity
Title: "CPG Collect Information Activity"
Description: "Definition of a recommendation to collect information using a specific questionnaire as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-collectinformationactivity)
* extension contains CPGCollectWith named collectWith 0..1 MS
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = "http://hl7.org/fhir/uv/cpg/StructureDefinition/cpg-questionnairetask" (exactly)
  * ^short = "At least a CPG Questionnaire Task"
  * ^definition = "The profile that the resulting task must conform to; at least a CPGQuestionnaireTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#collect-information
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-communication-activity.fsh

Profile: CPGCommunicationActivity
Parent: CPGComputableActivityDefinition
Id: cpg-communicationactivity
Title: "CPG Communication Activity"
Description: "Definition of a recommendation for a specific communication with the patient or other participant as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-communicationactivity)
* kind 1..1 MS
* kind only code
* kind = #CommunicationRequest (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-communicationRequest (exactly)
  * ^short = "At least a CPG CommunicationRequest"
  * ^definition = "The profile that the resulting communication request must conform to; at least a CPGCommunicationRequest, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#send-message
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-communication.fsh

Profile: CPGCommunication
Parent: Communication
Id: cpg-communication
Title: "CPG Communication"
Description: "Documents a communication with a patient or other participant as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-communication)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS
* identifier MS
* instantiatesCanonical MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that ultimately produced this communication. This is typically a Plan or Activity Definition."
* basedOn only Reference(CPGCommunicationRequest)
* basedOn MS
* status MS
* statusReason MS
* category MS
* priority MS
* subject MS
* about MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relative to this event."
* encounter MS
* sent MS
* received MS
* recipient MS
* sender MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-communicationrequest.fsh

Profile: CPGCommunicationRequest
Parent: CommunicationRequest
Id: cpg-communicationrequest
Title: "CPG Communication Request"
Description: "Recommendation for a specific communication with the patient or other participant as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-communicationrequest)
* extension contains
  $workflow-instantiatesCanonical named instantiatesCanonical 0..1 MS and
  CPGRationale named rationale 0..1 MS and
  CPGRating named rating 0..1 MS
* extension[instantiatesCanonical]
  * ^short = "Source"
  * ^definition = "A link back to the definition that produced this recommendation. Typically a Plan or Activity Definition."
* modifierExtension contains
  $communicationrequest-intent named intent 0..1 MS
* identifier MS
* status MS
* statusReason MS
* category MS
* priority MS
* doNotPerform MS
* subject MS
* about MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relative to this recommendation."
  * ^comment = "This will typically be the most relevant case features used in determining applicability, but could also be other patient-specific information relevant to interpreting or assessing appropriateness of the recommendation with respect to the patient."
* encounter MS
* requester MS
* recipient MS
* sender MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-dispensemedication-activity.fsh

Profile: CPGDispenseMedicationActivity
Parent: CPGComputableActivityDefinition
Id: cpg-dispensemedicationactivity
Title: "CPG Dispense Medication Activity"
Description: "Definition of an activity to dispense a specific medication as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-dispensemedicationactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-dispensemedicationtask (exactly)
  * ^short = "At least a CPG Dispense Medication Task"
  * ^definition = "The profile that the resulting Task must conform to; at least a CPGDispenseMedicationTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#dispense-medication
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-dispensemedication-task.fsh

Profile: CPGDispenseMedicationTask
Parent: CPGTask
Id: cpg-dispensemedicationtask
Title: "CPG Dispense Medication Task"
Description: "Recommendation to dispense a specific medication as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-dispensemedicationtask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#dispense-medication
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains medicationRequest 1..1 MS
* input[medicationRequest]
  * ^short = "Medication to dispense"
  * ^definition = "A MedicationRequest detailing the specific medication to be dispensed."
  * ^comment = "Note that this may be an existing MedicationRequest that is recommended to be dispensed, or it may be a proposed MedicationRequest provided as part of the dispense recommendation."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#order-medication
  * type MS
  * value[x] only Reference(CPGMedicationRequest)
  * value[x] MS
* output ..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains medicationDispense 0..1 MS
* output[medicationDispense]
  * ^short = "Medication that was dispensed"
  * ^definition = "A MedicationDispense that is the result of completing this task."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#dispense-medication
  * type MS
  * value[x] only Reference(CPGMedicationDispense)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-documentmedication-activity.fsh

Profile: CPGDocumentMedicationActivity
Parent: CPGComputableActivityDefinition
Id: cpg-documentmedicationactivity
Title: "CPG Document Medication Activity"
Description: "Definition of an activity to document a specific medication as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-documentmedicationactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-documentmedicationtask (exactly)
  * ^short = "At least a CPG Document Medication Task"
  * ^definition = "The profile that the resulting Task must conform to; at least a CPGDocumentMedicationTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#document-medication
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-documentmedication-task.fsh

Profile: CPGDocumentMedicationTask
Parent: CPGTask
Id: cpg-documentmedicationtask
Title: "CPG Document Medication Task"
Description: "Recommendation to document the use of a specific medication as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-documentmedicationtask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#document-medication
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains medicationRequest 1..1 MS
* input[medicationRequest]
  * ^short = "Medication to dispense"
  * ^definition = "A MedicationRequest detailing the specific medication to be dispensed."
  * ^comment = "Note that this may be an existing MedicationRequest that is recommended to be documented, or it may be a proposed MedicationRequest provided as part of the document recommendation."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#order-medication
  * type MS
  * value[x] only Reference(CPGMedicationRequest)
  * value[x] MS
* output ..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains medicationStatement 0..1 MS
* output[medicationStatement]
  * ^short = "Medication that was documented"
  * ^definition = "A MedicationStatement that is the result of completing this task."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#document-medication
  * type MS
  * value[x] only Reference(CPGMedicationStatement)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-enrollment-activity.fsh

Profile: CPGEnrollmentActivity
Parent: CPGComputableActivityDefinition
Id: cpg-enrollmentactivity
Title: "CPG Enrollment Activity"
Description: "Definition of an activity to enroll or unenroll a patient in a strategy or pathway as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-enrollmentactivity)
* extension contains
  CPGEnrollIn named enrollIn 0..1 MS
* modifierExtension contains
  CPGIsUnenrollment named isUnenrollment 0..1 MS
* modifierExtension[isUnenrollment] ^comment = "If isUnenrollment is not specified, the default is false (meaning the activity is an enrollment activity)."
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-enrollmenttask (exactly)
  * ^short = "At least a CPG Enrollment Task"
  * ^definition = "The profile that the resulting task must conform to; at least a CPGEnrollmentTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#enrollment
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-enrollment-task.fsh

Profile: CPGEnrollmentTask
Parent: CPGTask
Id: cpg-enrollmenttask
Title: "CPG Enrollment Task"
Description: "Proposal to enroll the patient in a strategy or pathway as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-enrollmenttask)
* modifierExtension contains CPGIsUnenrollment named isUnenrollment 0..1 MS
* code only CodeableConcept
* code = $cpg-activity-type-cs#enrollment
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains pathway 1..1 MS
* input[pathway]
  * ^short = "Pathway or Strategy"
  * ^definition = "The Pathway or Strategy in which the patient is to be enrolled."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#enrollment
  * type MS
  * value[x] only Canonical(CPGComputablePlanDefinition)
  * value[x] MS
* output ..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains case 0..1 MS
* output[case]
  * ^short = "Response"
  * ^definition = "The QuestionnaireResponse that is the result of completing the task."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#enrollment
  * type MS
  * value[x] only Reference(CPGCase)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-generatereport-activity.fsh

Profile: CPGGenerateReportActivity
Parent: CPGComputableActivityDefinition
Id: cpg-generatereportactivity
Title: "CPG Generate Report Activity"
Description: "Definition of an activity to generate a metric, measure, or case report as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-generatereportactivity)
* extension contains $cpg-reportWith named reportWith 0..1 MS
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-generatereporttask (exactly)
  * ^short = "At least a CPG Generate Report Task"
  * ^definition = "The profile that the resulting task must conform to; at least a CPGGenerateReportTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#generate-report
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-generatereport-task.fsh

Profile: CPGGenerateReportTask
Parent: CPGTask
Id: cpg-generatereporttask
Title: "CPG Generate Report Task"
Description: "Proposal to generate a metric, measure, or case report as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-generatereporttask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#generate-report
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains definition 1..1 MS
* input[definition]
  * ^short = "Pathway or Strategy"
  * ^definition = "The definition of the metric, measure, case report, or profile that is to be used to generate the report."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#generate-report
  * type MS
  * value[x] only Canonical(CPGComputableMetric or CPGComputableGraphDefinition or CPGCaseFeatureDefinition)
  * value[x] MS
* output ..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains report 0..1 MS
* output[report]
  * ^short = "Response"
  * ^definition = "The generated report, such as a MeasureReport, Composition, or case feature."
  * ^comment = "If the definition is a Measure, the result SHALL be a MeasureReport. If the definition is a GraphDefinition, the result SHALL be a Composition. If the definition is a StructureDefinition, the result SHALL be a resource of the type defined by the profile."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#generate-report
  * type MS
  * value[x] only Reference
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-hold-activity.fsh

Profile: CPGHoldActivity
Parent: CPGComputableActivityDefinition
Id: cpg-holdactivity
Title: "CPG Hold Activity"
Description: "Definition of a recommendation to hold an activity that is currently in progress as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-holdactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-holdtask (exactly)
  * ^short = "At least a CPG Hold Task"
  * ^definition = "The profile that the resulting task must conform to; at least a CPGHoldTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#hold-activity
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-hold-task.fsh

Profile: CPGHoldTask
Parent: CPGTask
Id: cpg-holdtask
Title: "CPG Hold Task"
Description: "Recommendation to hold an activity that is currently in progress as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-holdtask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#hold-activity
* code MS
* focus 1..1 MS
* focus only Reference(CPGCommunicationRequest or CPGCommunication or CPGQuestionnaireTask or CPGQuestionnaireResponse or CPGMedicationRequest or CPGMedicationDispense or CPGMedicationAdministration or CPGMedicationStatement or CPGDispenseMedicationTask or CPGAdministerMedicationTask or CPGDocumentMedicationTask or CPGImmunizationRequest or CPGImmunization or CPGServiceRequest or CPGProcedure or CPGObservation or CPGEnrollmentTask or CPGGenerateReportTask or CPGProposeDiagnosisTask or CPGRecordDetectedIssueTask or CPGRecordInferenceTask or CPGReportFlagTask)


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-immunization-activity.fsh

Profile: CPGImmunizationActivity
Parent: CPGComputableActivityDefinition
Id: cpg-immunizationactivity
Title: "CPG Immunization Activity"
Description: "Definition of a recommendation for a particular immunization as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-immunizationactivity)
* kind 1..1 MS
* kind only code
* kind = #MedicationRequest (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-immunizationrequest (exactly)
  * ^short = "At least a CPG ImmunizationRequest"
  * ^definition = "The profile that the resulting immunization recommendation must conform to; at least a CPGImmunizationRequest, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#recommend-immunization
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-immunization.fsh

Profile: CPGImmunization
Parent: Immunization
Id: cpg-immunization
Title: "CPG Immunization"
Description: "Documents a particular immunization as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-immunization)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS and
  basedOn named basedOn 0..1 MS and
  CPGPertinent named pertinent 0..* MS
* identifier MS
* statusReason MS
* patient MS
* encounter MS
* reasonCode MS
* reasonReference MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-immunizationrequest.fsh

Profile: CPGImmunizationRequest
Parent: MedicationRequest
Id: cpg-immunizationrequest
Title: "CPG Immunization Request"
Description: "Recommendation for a particular immunization as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-immunizationrequest)
* extension contains
  CPGRationale named rationale 0..1 MS and
  CPGRating named rating 0..1 MS
* identifier MS
* status MS
* intent MS
* category MS
* category ^slicing.discriminator.type = #type
* category ^slicing.discriminator.path = coding
* category ^slicing.rules = #open
* category ^slicing.description = "Slice based on the coding pattern"
* category contains immunization 1..1 MS
* category[immunization].coding = $cpg-activity-type-cs#recommend-immunization
* priority MS
* doNotPerform MS
* medication[x] MS
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* supportingInformation MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relevant to the recommendation."
  * ^comment = "This will typically be the most relevant case features used in determining applicability, but could also be other patient-specific information relevant to interpreting or assessing appropriateness of the recommendation with respect to the patient."
* instantiatesCanonical MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that produced this recommendation. Typically a Plan or Activity Definition."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-medicationadministration.fsh

Profile: CPGMedicationAdministration
Parent: MedicationAdministration
Id: cpg-medicationadministration
Title: "CPG Medication Administration"
Description: "Documents the administration of a particular medication as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-medicationadministration)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS
* identifier MS
* instantiates MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that ultimately produced this communication. This is typically a Plan or Activity Definition."
* status MS
* statusReason MS
* category MS
* medication[x] MS
* subject MS
* context MS
* supportingInformation MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relative to this event."
* reasonCode MS
* reasonReference MS
* request MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-medicationdispense.fsh

Profile: CPGMedicationDispense
Parent: MedicationDispense
Id: cpg-medicationdispense
Title: "CPG Medication Dispense"
Description: "Documents the dispensing of a particular medication as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-medicationdispense)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS
* identifier MS
* status MS
* statusReason[x] MS
* category MS
* medication[x] MS
* subject MS
* context MS
* supportingInformation MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relative to this event."
* authorizingPrescription MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-medicationrequest-activity.fsh

Profile: CPGMedicationRequestActivity
Parent: CPGComputableActivityDefinition
Id: cpg-medicationrequestactivity
Title: "CPG Medication Request Activity"
Description: "Definition of a recommendation for a specific medication as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-medicationrequestactivity)
* kind 1..1 MS
* kind only code
* kind = #MedicationRequest (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-medicationrequest (exactly)
  * ^short = "At least a CPG MedicationRequest"
  * ^definition = "The profile that the resulting medication request must conform to; at least a CPGMedicationRequest, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#order-medication
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-medicationrequest.fsh

Profile: CPGMedicationRequest
Parent: MedicationRequest
Id: cpg-medicationrequest
Title: "CPG Medication Request"
Description: "Recommendation for a specific medication as part of the delivery of a computable clinical practice guideline"
* ^version = "2.0.0-ballot"
* insert StructureDefinitionMetadata(cpg-medicationrequest)
* extension contains 
  CPGRationale named rationale 0..1 MS and
  CPGRating named rating 0..1 MS
* identifier MS
* status MS
* intent MS
* category MS
* priority MS
* doNotPerform MS
* medication[x] MS
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* supportingInformation MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relevant to the recommendation."
  * ^comment = "This will typically be the most relevant case features used in determining applicability, but could also be other patient-specific information relevant to interpreting or assessing appropriateness of the recommendation with respect to the patient."
* instantiatesCanonical MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that produced this recommendation. Typically a Plan or Activity Definition."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-medicationstatement.fsh

Profile: CPGMedicationStatement
Parent: MedicationStatement
Id: cpg-medicationstatement
Title: "CPG Medication Statement"
Description: "Documentation of the use of a particular medication as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-medicationstatement)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS and
  CPGPertinent named pertinent 0..* MS
* identifier MS
* basedOn MS
* status MS
* statusReason MS
* category MS
* medication[x] MS
* subject MS
* context MS
* informationSource MS
* derivedFrom MS
* reasonCode MS
* reasonReference MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-observation.fsh

Profile: CPGObservation
Parent: Observation
Id: cpg-observation
Title: "CPG Observation"
Description: "Documents a specific observation as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-observation)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS and
  CPGPertinent named pertinent 0..* MS
* identifier MS
* basedOn MS
* status MS
* category MS
* code MS
* subject MS
* encounter MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-procedure.fsh

Profile: CPGProcedure
Parent: Procedure
Id: cpg-procedure
Title: "CPG Procedure"
Description: "Documents a procedure as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-procedure)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS
* identifier MS
* instantiatesCanonical MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that ultimately produced this communication. This is typically a Plan or Activity Definition."
* basedOn MS
* status MS
* statusReason MS
* category MS
* code MS
* subject MS
* encounter MS
* reasonCode MS
* reasonReference MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relative to this event."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-proposediagnosis-activity.fsh

Profile: CPGProposeDiagnosisActivity
Parent: CPGComputableActivityDefinition
Id: cpg-proposediagnosisactivity
Title: "CPG Propose Diagnosis Activity"
Description: "The definition of a recommendation to propose a specific diagnosis as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-proposediagnosisactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-proposediagnosistask (exactly)
  * ^short = "At least a CPG Propose Diagnosis Task"
  * ^definition = "The profile that the resulting communication request must conform to; at least a CPGProposeDiagnosisTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#propose-diagnosis
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-proposediagnosis-task.fsh

Profile: CPGProposeDiagnosisTask
Parent: CPGTask
Id: cpg-proposediagnosistask
Title: "CPG Propose Diagnosis Task"
Description: "Recommendation to propose a specific diagnosis as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-proposediagnosistask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#propose-diagnosis
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains diagnosis 1..1 MS
* input[diagnosis]
  * ^short = "Proposed diagnosis"
  * ^definition = "The diagnosis being proposed."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#propose-diagnosis
  * type MS
  * value[x] only Reference(Condition)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-questionnaire-response.fsh

Profile: CPGQuestionnaireResponse
Parent: QuestionnaireResponse
Id: cpg-questionnaireresponse
Title: "CPG Questionnaire Response"
Description: "The response to a particular questionnaire as an activity within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-questionnaireresponse)
* identifier MS
* questionnaire MS
* status MS
* subject only Reference(CPGPatient or CPGRelatedPerson)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* authored MS
* author only Reference(CPGPatient or CPGPractitioner or CPGPractitionerRole or CPGRelatedPerson)
* author MS
* source only Reference(CPGPatient or CPGPractitioner or CPGPractitionerRole or CPGRelatedPerson)
* source MS
* item MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-questionnaire-task.fsh

Profile: CPGQuestionnaireTask
Parent: CPGTask
Id: cpg-questionnairetask
Title: "CPG Questionnaire Task"
Description: "Recommendation to collect specific information using a particular questionnaire as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-questionnairetask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#collect-information
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains questionnaire 1..1 MS
* input[questionnaire]
  * ^short = "Questionnaire to use"
  * ^definition = "The Questionnaire to be used to collect the information."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#collect-information
  * type MS
  * value[x] only Canonical(CPGComputableQuestionnaire)
  * value[x] MS
    * ^comment = "The canonical SHALL be a reference to at least a CPGComputableQuestionnaire."
* output ..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* output contains questionnaireResponse 0..1 MS
* output[questionnaireResponse]
  * ^short = "Response"
  * ^definition = "The QuestionnaireResponse that is the result of completing the task."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#collect-information
  * type MS
  * value[x] only Reference(CPGQuestionnaireResponse)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-recorddetectedissue-activity.fsh

Profile: CPGRecordDetectedIssueActivity
Parent: CPGComputableActivityDefinition
Id: cpg-recorddetectedissueactivity
Title: "CPG Record Detected Issue Activity"
Description: "Definition of a recommendation to record a specific detected issue as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-recorddetectedissueactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-recorddetectedissuetask (exactly)
  * ^short = "At least a CPG Record Detected Issue Task"
  * ^definition = "The profile that the resulting communication request must conform to; at least a CPGRecordDetectedIssueTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#record-detected-issue
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-recorddetectedissue-task.fsh

Profile: CPGRecordDetectedIssueTask
Parent: CPGTask
Id: cpg-recorddetectedissuetask
Title: "CPG Record Detected Issue Task"
Description: "Recommendation to record a specific detected issue as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-recorddetectedissuetask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#record-detected-issue
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains detectedIssue 1..1 MS
* input[detectedIssue]
  * ^short = "Detected issue to record"
  * ^definition = "The detected issue to be recorded."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#record-detected-issue
  * type MS
  * value[x] only Reference(CPGDetectedIssue)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-recordinference-activity.fsh

Profile: CPGRecordInferenceActivity
Parent: CPGComputableActivityDefinition
Id: cpg-recordinferenceactivity
Title: "CPG Record Inference Activity"
Description: "Definition of a recommendation to record a specific inference as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-recordinferenceactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-recordinferencetask (exactly)
  * ^short = "At least a CPG Record Inference Task"
  * ^definition = "The profile that the resulting communication request must conform to; at least a CPGRecordInferenceTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#record-inference
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-recordinference-task.fsh

Profile: CPGRecordInferenceTask
Parent: CPGTask
Id: cpg-recordinferencetask
Title: "CPG Record Inference Task"
Description: "Recommendation to record a particular inference as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-recordinferencetask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#record-inference
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains inference 1..1 MS
* input[inference]
  * ^short = "Inference to record"
  * ^definition = "The inference to be recorded."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#record-inference
  * type MS
  * value[x] only Reference(CPGObservation)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-reportflag-activity.fsh

Profile: CPGReportFlagActivity
Parent: CPGComputableActivityDefinition
Id: cpg-reportflagactivity
Title: "CPG Report Flag Activity"
Description: "Definition of a recommendation to report a particular flag as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-reportflagactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-reportflagtask (exactly)
  * ^short = "At least a CPG Report Flag Task"
  * ^definition = "The profile that the resulting communication request must conform to; at least a CPGReportFlagTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#report-flag
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-reportflag-task.fsh

Profile: CPGReportFlagTask
Parent: CPGTask
Id: cpg-reportflagtask
Title: "CPG Report Flag Task"
Description: "Recommendation to report a flag as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-reportflagtask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#report-flag
* code MS
* input 0..* MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "type"
  * ^slicing.rules = #open
* input contains flag 1..1 MS
* input[flag]
  * ^short = "Reported flag"
  * ^definition = "The flag being reported."
  * type only CodeableConcept
  * type = $cpg-activity-type-cs#report-flag
  * type MS
  * value[x] only Reference(CPGFlag)
  * value[x] MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-resume-activity.fsh

Profile: CPGResumeActivity
Parent: CPGComputableActivityDefinition
Id: cpg-resumeactivity
Title: "CPG Resume Activity"
Description: "Definition of a recommendation to resume an activity that is currently on hold as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-resumeactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-resumetask (exactly)
  * ^short = "At least a CPG Resume Task"
  * ^definition = "The profile that the resulting task must conform to; at least a CPGResumeTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#resume-activity
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-resume-task.fsh

Profile: CPGResumeTask
Parent: CPGTask
Id: cpg-resumetask
Title: "CPG Resume Task"
Description: "Recommendation to resume an activity that is currently on hold as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-resumetask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#resume-activity
* code MS
* focus 1..1 MS
* focus only Reference(CPGCommunicationRequest or CPGCommunication or CPGQuestionnaireTask or CPGQuestionnaireResponse or CPGMedicationRequest or CPGMedicationDispense or CPGMedicationAdministration or CPGMedicationStatement or CPGDispenseMedicationTask or CPGAdministerMedicationTask or CPGDocumentMedicationTask or CPGImmunizationRequest or CPGImmunization or CPGServiceRequest or CPGProcedure or CPGObservation or CPGEnrollmentTask or CPGGenerateReportTask or CPGProposeDiagnosisTask or CPGRecordDetectedIssueTask or CPGRecordInferenceTask or CPGReportFlagTask)


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-servicerequest-activity.fsh

Profile: CPGServiceRequestActivity
Parent: CPGComputableActivityDefinition
Id: cpg-servicerequestactivity
Title: "CPG Service Request Activity"
Description: "The definition of a recommendation for a particular procedure or referral to a specialist or instructions for self-care such as smoking cessation counseling or exercise"
* insert StructureDefinitionMetadata(cpg-servicerequestactivity)
* kind 1..1 MS
* kind only code
* kind = #ServiceRequest (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-servicerequest (exactly)
  * ^short = "At least a CPG ServiceRequest"
  * ^definition = "The profile that the resulting service request must conform to; at least a CPGServiceRequest, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#order-service
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-servicerequest.fsh

Profile: CPGServiceRequest
Parent: ServiceRequest
Id: cpg-servicerequest
Title: "CPG Service Request"
Description: "Recommendation for a particular procedure or referral to a specialist or instructions for self-care such as smoking cessation counseling or exercise"
* insert StructureDefinitionMetadata(cpg-servicerequest)
* extension contains 
  CPGRationale named rationale 0..1 MS and
  CPGRating named rating 0..1 MS
* identifier MS
* instantiatesCanonical MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that produced this recommendation. Typically a Plan or Activity Definition."
* status MS
* intent MS
* category MS
* priority MS
* doNotPerform MS
* code MS
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* occurrence[x] MS
* asNeeded[x] MS
* supportingInfo MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relevant to the recommendation."
  * ^comment = "This will typically be the most relevant case features used in determining applicability, but could also be other patient-specific information relevant to interpreting or assessing appropriateness of the recommendation with respect to the patient."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-stop-activity.fsh

Profile: CPGStopActivity
Parent: CPGComputableActivityDefinition
Id: cpg-stopactivity
Title: "CPG Stop Activity"
Description: "Definition of a recommendation to stop an activity that is currently in progress as part of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-stopactivity)
* kind 1..1 MS
* kind only code
* kind = #Task (exactly)
* profile 1..1 MS
* profile only canonical
* profile = $cpg-stoptask (exactly)
  * ^short = "At least a CPG Stop Task"
  * ^definition = "The profile that the resulting task must conform to; at least a CPGStopTask, though the activity definition may introduce further constraints."
* code = $cpg-activity-type-cs#stop-activity
* intent 1..1 MS
* intent only code
* intent = #proposal (exactly)
* doNotPerform 1..1 MS





---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-stop-task.fsh

Profile: CPGStopTask
Parent: CPGTask
Id: cpg-stoptask
Title: "CPG Stop Task"
Description: "Recommendation to stop an activity that is currently in progress as part of the delivery of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-stoptask)
* code only CodeableConcept
* code = $cpg-activity-type-cs#stop-activity
* code MS
* focus 1..1 MS
* focus only Reference(CPGCommunicationRequest or CPGCommunication or CPGQuestionnaireTask or CPGQuestionnaireResponse or CPGMedicationRequest or CPGMedicationDispense or CPGMedicationAdministration or CPGMedicationStatement or CPGDispenseMedicationTask or CPGAdministerMedicationTask or CPGDocumentMedicationTask or CPGImmunizationRequest or CPGImmunization or CPGServiceRequest or CPGProcedure or CPGObservation or CPGEnrollmentTask or CPGGenerateReportTask or CPGProposeDiagnosisTask or CPGRecordDetectedIssueTask or CPGRecordInferenceTask or CPGReportFlagTask)


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/activity-profiles/cpg-task.fsh

Profile: CPGTask
Parent: Task
Id: cpg-task
Title: "CPG Task"
Description: "Defines the expectations common to tasks that represent activities used in computable guidelines"
* insert StructureDefinitionMetadata(cpg-task)
* extension contains
  CPGRationale named rationale 0..1 MS and
  CPGPertinent named pertinent 0..* MS and
  CPGRating named rating 0..1 MS
* modifierExtension contains $request-doNotPerform named doNotPerform 0..1 MS
* identifier MS
* instantiatesCanonical MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that produced this recommendation. Typically a Plan or Activity Definition."
* basedOn MS
* status MS
* statusReason MS
* intent MS
* priority MS
* code MS
* code from $cpg-activity-type-vs (extensible)
  * ^binding.description = "Activity types for use in computable guidelines"
* description MS
* for only Reference(CPGPatient)
* for MS
* encounter only Reference(CPGEncounter)
* encounter MS
* executionPeriod MS
* authoredOn MS
* output MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/artifact-profiles/cpg-casefeature.fsh

Profile: CPGCaseFeatureDefinition
Parent: StructureDefinition
Id: cpg-casefeaturedefinition
Title: "CPG Case Feature Definition"
Description: "Profile of StructureDefinition to represent a case feature of a clinical practice guideline, optionally specifying formal computational semantics, as well as relationships to other case features and specific aspects of the guideline"
* insert StructureDefinitionMetadata(cpg-casefeaturedefinition)
* extension contains
  $cpg-inferenceExpression named inferenceExpression 0..1 MS and
  $cpg-assertionExpression named assertionExpression 0..1 MS and
  $cpg-featureExpression named featureExpression 0..1 MS and
  $cpg-caseFeatureOf named caseFeatureOf 0..* MS
* kind = #resource (exactly)
* abstract = false (exactly)
* derivation 1..1
* derivation = #constraint (exactly)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/artifact-profiles/cpg-computable-activity.fsh

Profile: CPGComputableActivityDefinition
Parent: ActivityDefinition
Id: cpg-computableactivity
Title: "CPG Computable Activity Definition"
Description: "Defines the minimum expectations and behavior for a computable activity definition for use with content conforming to the CPG implementation guide"
* insert StructureDefinitionMetadata(cpg-computableactivity)
* subject[x] MS
* library 0..1 MS
* kind 1..1 MS
* profile 0..1 MS
* code 0..1 MS
* priority MS
* doNotPerform MS
* timing[x] MS
* location MS
* participant MS
* dynamicValue MS
  * path MS
  * expression MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/artifact-profiles/cpg-computable-graphdefinition.fsh

Profile: CPGComputableGraphDefinition
Parent: GraphDefinition
Id: cpg-computablegraphdefinition
Title: "CPG Computable Graph Definition"
Description: "Profile of GraphDefinition to establish computable expectations for the use of the GraphDefinition resource"
* insert StructureDefinitionMetadata(cpg-computablegraphdefinition)
* start MS
* link MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/artifact-profiles/cpg-computable-guideline.fsh

Profile: CPGComputableGuideline
Parent: ImplementationGuide
Id: cpg-computableguideline
Title: "CPG Computable Guideline"
Description: "Profile of ImplementationGuide to describe a computable Clinical Practice Guideline"
* insert StructureDefinitionMetadata(cpg-computableguideline)
* dependsOn MS
* definition MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/artifact-profiles/cpg-computable-metric.fsh

Profile: CPGComputableMetric
Parent: Measure
Id: cpg-computablemetric
Title: "CPG Computable Metric"
Description: "Defines the minimum expectations and behavior for a computable metric for use with content conforming to the CPG implementation guide"
* insert StructureDefinitionMetadata(cpg-computablemetric)
* subject[x] MS
* library 0..1 MS
* scoring 1..1 MS
* compositeScoring 0..1 MS
* type MS
* improvementNotation 1..1 MS
* group 1..* MS
  * population 1..* MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/artifact-profiles/cpg-computable-plandefinition.fsh

Profile: CPGComputablePlanDefinition
Parent: PlanDefinition
Id: cpg-computableplandefinition
Title: "CPG Computable Plan Definition"
Description: "Defines the minimum expectations and behavior for a computable plan definition"
* insert StructureDefinitionMetadata(cpg-computableplandefinition)
* extension contains
  $cpg-enabled named enabled 0..1 MS and
  $cpg-partOf named partOf 0..1 MS
* type 1..1 MS
* subject[x] MS
* library 0..1 MS
* action 1..* MS
* action
  * extension contains
    $cqf-strengthOfRecommendation named strengthOfRecommendation 0..1 MS and
    $cpg-directionOfRecommendation named directionOfRecommendation 0..1 MS and
    $cqf-qualityOfEvidence named qualityOfEvidence 0..1 MS and
    $cpg-rating named rating 0..1 MS
  * prefix MS
  * title MS
  * description MS
  * code MS
  * reason MS
  * documentation MS
  * trigger MS
  * condition MS
  * timing[x] MS
  * participant MS
    * role MS
    * role from CPGCommonPersonaVS (preferred)
      * ^binding.description = "Personas used in identifying participants and their roles in computable content"
  * type MS
  * definition[x] MS
  * dynamicValue MS
  * dynamicValue
    * path MS
    * expression MS
  * action MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/artifact-profiles/cpg-computable-questionnaire.fsh

Profile: CPGComputableQuestionnaire
Parent: Questionnaire
Id: cpg-computablequestionnaire
Title: "CPG Computable Questionnaire"
Description: "Profile of Questionnaire to establish minimum expectations for a Questionnaire for use with computable guideline content"
* insert StructureDefinitionMetadata(cpg-computablequestionnaire)
* item MS
  * extension contains
    $cpg-answerValueSetSource named answerValueSetSource 0..1 MS and
    $cpg-itemImage named itemImage 0..1 MS
  * answerOption MS
    * extension contains $cpg-responseImage named responseImage 0..1 MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-careplan.fsh

Profile: CPGCarePlan
Parent: CarePlan
Id: cpg-careplan
Title: "CPG Care Plan"
Description: "CPG care plan represents the care plan for a specific patient. The care plan may be associated with management of a specific condition, and instantiated based on a particular pathway or strategy, or it may be a combined care plan, focused on the patient, and managing treatment for multiple conditions, instantiated based on multiple pathways and strategies"
* insert StructureDefinitionMetadata(cpg-careplan)
* extension contains $cpg-planFor named planFor 0..* MS
* identifier MS
* instantiatesCanonical MS
* status MS
* intent MS
* category 1..* MS
* title 1..1 MS
* description MS
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* period MS
* created MS
* careTeam only Reference(CPGCareTeam)
* careTeam MS
* addresses only Reference(CPGCondition)
* addresses MS
* goal MS
* activity MS
  * outcomeReference MS
  * reference only Reference(Appointment or CPGCommunicationRequest or CPGMedicationRequest or CPGTask or CPGServiceRequest or CPGStrategy)
* activity
  * reference MS
  * detail MS
    * kind 1..1 MS
    * instantiatesCanonical MS
    * code 1..1 MS
    * reasonCode MS
    * status MS
    * doNotPerform MS
    * scheduled[x] only Timing or Period
    * scheduled[x] MS
    * location only Reference($cpg-location)
    * location MS
    * performer only Reference(CPGPractitioner or CPGPractitionerRole or CPGOrganization or CPGRelatedPerson or CPGPatient or CPGCareTeam)
    * performer MS
    * description 1..1 MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-careteam.fsh

Profile: CPGCareTeam
Parent: CareTeam
Id: cpg-careteam
Title: "CPG Care Team"
Description: "CPG care team represents a care team for a specific patient"
* insert StructureDefinitionMetadata(cpg-careteam)
* identifier MS
* status 1..1 MS
* name 1..1 MS
* subject 1..1 MS
* subject only Reference(CPGPatient)
* encounter only Reference(CPGEncounter)
* encounter MS
* period MS
* participant MS
* participant
  * role MS
  * member only Reference(CPGPractitioner or CPGPractitionerRole or CPGOrganization or CPGRelatedPerson or CPGPatient or CPGCareTeam)
  * member MS
* managingOrganization only Reference(CPGOrganization)
* managingOrganization MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-careteamdefinition.fsh

Profile: CPGCareTeamDefinition
Parent: CareTeam
Id: cpg-careteamdefinition
Title: "CPG Care Team Definition"
Description: "Defines the minimum expectations for a definitional care team for use with computable guideline content"
* insert StructureDefinitionMetadata(cpg-careteamdefinition)
* identifier MS
* status 0..0
* name 1..1 MS
* subject 0..0
* encounter 0..0
* period 0..0
* participant MS
* participant
  * role MS
  * member only Reference(CPGPractitionerRoleDefinition or CPGCareTeamDefinition)
  * member MS
* managingOrganization 0..0
* telecom 0..0

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-case.fsh

Profile: CPGCase
Parent: EpisodeOfCare
Id: cpg-case
Title: "CPG Case"
Description: "CPG case represents a specific case of a patient enrolled in a particular pathway. The enrollment may have been automatic, prompted, or manual."
* insert StructureDefinitionMetadata(cpg-case)
* extension contains $cpg-enrolledIn named enrolledIn 0..* MS
* type from $episodeofcare-type (preferred)
  * ^binding.description = "Expresses the type of an episode of care"
* diagnosis 1..*
  * condition only Reference(CPGCondition)
* patient only Reference(CPGPatient)
* period MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-caseplanprogressnote.fsh

Profile: CPGCasePlanProgressingNote
Parent: CPGCasePlanSummary
Id: cpg-caseplanprogressingnote
Title: "CPG Case Plan Progressing Note"
Description: "CPG Case Plan Progressing Note combines relevant case features and feature groups with proposals, plans, and clinical impressions to provide a means to document patient progression with respect to a pathway in the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-caseplanprogressingnote)
* . ^comment = "The case plan progressing note can also be the means of providing feedback directly from the care team on both the patient and their condition as well as the usage and utiliy of guideline components. The knowledge egineer needs to be careful to keep the forms logic (UI) separated from the description logic (for case features) and decision logic (for recommendations) as well as any logic used for patient-level indicators (CPGMetrics) used in the Form."
* type only CodeableConcept
* type = $loinc#11506-3
* type MS
* section MS
* section
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
* section contains impression 0..* MS
* section[impression]
  * code only CodeableConcept
  * code = $loinc#51848-0
  * code MS
  * entry 1..1 MS
  * entry only Reference(CPGClinicalImpression)

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-caseplansummary.fsh

Profile: CPGCasePlanSummary
Parent: Composition
Id: cpg-caseplansummary
Title: "CPG Case Plan Summary"
Description: "CPG Case Plan Summary addresses information from the plan portion of the CPG, including patient-specific recommendations (i.e., proposals) along with their respective pertinent patient information and guideline recommendations that are either not applicable or not yet applicable to a specific patient"
* insert StructureDefinitionMetadata(cpg-caseplansummary)
* . ^comment = "The case/plan summary view provides the ability to address information from the plan portion of the CPG, including patient-specific recommendations (i.e., proposals) along with their respective evidence (i.e., Evidence Resources used in the CPGRecommendation) and guideline recommendations that are either not applicable or not yet applicable to a specific patient, together with patient-level information (i.e., CPGCaseFeatures). Furthermore, the case/plan summary view may be scoped to a given context, such as a given recommendation or set of recommendations, a point in time or anchoring event, or all the information related to a particular case feature, particularly features can represent higher order clinical concepts such as disease or pathophysiological process states."
* extension contains
  $cpg-generatedFrom named generatedFrom 0..1 MS and
  $cpg-summaryFor named summaryFor 0..* MS
* extension[generatedFrom]
  * ^short = "Definition"
  * ^definition = "A link back to the definition that produced this summary. Typically a CPGCasePlanSummaryDefinition."
* identifier MS
* status MS
* type MS
* category MS
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* date MS
* author only Reference(CPGPractitioner or CPGPractitionerRole)
* author MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-caseplansummarydefinition.fsh

Profile: CPGCasePlanSummaryDefinition
Parent: CPGComputableGraphDefinition
Id: cpg-caseplansummarydefinition
Title: "CPG Case Plan Summary Definition"
Description: "CPG Case Plan Summary Definition provides a computable definition for the case features and feature groups relevant to a particular pathway, strategy, or recommendation of a clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-caseplansummarydefinition)
* extension contains $cpg-summaryDefinitionFor named summaryDefinitionFor 0..* MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-casesummary.fsh

Profile: CPGCaseSummary
Parent: Composition
Id: cpg-casesummary
Title: "CPG Case Summary"
Description: "CPG Case Summary is the set of case features and feature groups that completely represent the case data scoped by the clinical practice guideline. This expresses the complete patient state at any given point in time."
* insert StructureDefinitionMetadata(cpg-casesummary)
* extension contains
  $cpg-generatedFrom named generatedFrom 0..1 MS and
  $cpg-summaryFor named summaryFor 0..1 MS
* extension[generatedFrom]
  * ^short = "Definition"
  * ^definition = "A link back to the definition that produced this summary. Typically a CPGCaseSummaryDefinition."
* extension[summaryFor]
  * ^short = "Which case?"
  * ^definition = "Specifies which case (episode of care) this summary is for."
* identifier MS
* status MS
* type MS
* category MS
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* date MS
* author only Reference(CPGPractitioner or CPGPractitionerRole)
* author MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-casesummarydefinition.fsh

Profile: CPGCaseSummaryDefinition
Parent: CPGComputableGraphDefinition
Id: cpg-casesummarydefinition
Title: "CPG Case Summary Definition"
Description: "CPG Case Summary Definition provides a computable definition for all the case features and feature groups relevant to a clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-casesummarydefinition)
* extension contains $cpg-summaryDefinitionFor named summaryDefinitionFor 0..1 MS
* extension[summaryDefinitionFor]
  * ^short = "Which guideline?"
  * ^definition = "Specifies which clinical practice guideline this is a summary definition for."

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-clinicalimpression.fsh

Profile: CPGClinicalImpression
Parent: ClinicalImpression
Id: cpg-clinicalimpression
Title: "CPG Clinical Impression"
Description: "CPG Clinical Impression captures clinician judgement at any particular point, and related to the case features and pathway, strategies, and recommendations."
* insert StructureDefinitionMetadata(cpg-clinicalimpression)
* . ^comment = "This assessment is intended to capture, among other things, clinician reasoning and rationale for following or not following a particular recommendation, as well as reasoning about diagnoses, and documenting judgements about patient care. To the extent possible, this should support capturing the rationale in a structured way so that it can be used to augment automated support as much as possible."
* extension contains $cpg-impressionFor named impressionFor 0..1 MS
* identifier MS
* status MS
* code MS
* description MS
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* effective[x] MS
* date MS
* assessor only Reference(CPGPractitioner or CPGPractitionerRole)
* assessor MS
* protocol MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-condition.fsh

Profile: CPGCondition
Parent: Condition
Id: cpg-condition
Title: "CPG Condition"
Description: "CPG condition represents the minimum expectations for communicating condition/problem information as part of a CPG case"
* insert StructureDefinitionMetadata(cpg-condition)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS
* clinicalStatus MS
* verificationStatus MS
* category 1..*
* code 1..1
* subject only Reference(CPGPatient)
* subject MS
* encounter only Reference(CPGEncounter)
* encounter MS
* onset[x] only dateTime or Age or Period or Range
* onset[x] MS
* abatement[x] only dateTime or Age or Period or Range
* abatement[x] MS
* evidence MS
* evidence
  * code MS
  * detail MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-detectedissue.fsh

Profile: CPGDetectedIssue
Parent: DetectedIssue
Id: cpg-detectedissue
Title: "CPG Detected Issue"
Description: "Documents a detected issue within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-detectedissue)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS
* status MS
* code 1..1
* patient only Reference(CPGPatient)
* patient MS
* evidence MS
  * code MS
  * detail MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-encounter.fsh

Profile: CPGEncounter
Parent: Encounter
Id: cpg-encounter
Title: "CPG Encounter"
Description: "CPG encounter represents the minimum expectations for communicating encounter information as part of a CPG case"
* insert StructureDefinitionMetadata(cpg-encounter)
* status MS
* class MS
* type 1..* MS
* subject only Reference(CPGPatient)
* subject MS
* episodeOfCare only Reference(CPGCase)
* episodeOfCare MS
* participant MS
* participant
  * type MS
  * period MS
  * individual only Reference(CPGPractitioner or CPGPractitionerRole)
  * individual MS
* period MS
* reasonCode MS
* location MS
* location
  * location only Reference($cpg-location)
  * location MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-flag.fsh

Profile: CPGFlag
Parent: Flag
Id: cpg-flag
Title: "CPG Flag"
Description: "Represents a flag on a patient record within the context of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-flag)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS and
  CPGPertinent named pertinent 0..* MS
* identifier MS
* status MS
* category 1..1 MS
* code MS
* subject only Reference(CPGPatient)
* subject MS
* period MS
* encounter only Reference(CPGEncounter)
* encounter MS
* author MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-goal.fsh

Profile: CPGGoal
Parent: Goal
Id: cpg-goal
Title: "CPG Goal"
Description: "Defines the expectations for the representation of goals used in computable guidelines"
* insert StructureDefinitionMetadata(cpg-goal)
* extension contains $cpg-goalFor named goalFor 0..* MS
* identifier MS
* lifecycleStatus MS
* achievementStatus MS
* category MS
* priority MS
* description MS
* subject MS
* start[x] MS
* target MS
  * measure MS
  * detail[x] MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-group.fsh

Profile: CPGGroup
Parent: Group
Id: cpg-group
Title: "CPG Group"
Description: "Defines an actual group of subjects, suitable for use in various contexts, such as a enrollment in a pathway or participant in a study"
* insert StructureDefinitionMetadata(cpg-group)
* identifier MS
* active MS
* type only code
* type = #person (exactly)
* type MS
* actual only boolean
* actual = true (exactly)
* actual MS
* code MS
* name 1..1 MS
* characteristic 0..0
* member MS
  * entity only Reference(CPGPatient)
  * entity MS
  * period MS
  * inactive MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-groupdefinition.fsh

Profile: CPGGroupDefinition
Parent: Group
Id: cpg-groupdefinition
Title: "CPG Group Definition"
Description: "Represents the definition of a group of subjects, suitable for use in various contexts, such as a cohort definition, a recommendation inclusion or exclusion criteria, the members of a study, or a population criteria"
* insert StructureDefinitionMetadata(cpg-groupdefinition)
* obeys gdf-1
* extension contains $cqf-expression named expression 0..1 MS
* extension[expression] ^condition = "gdf-1"
* identifier MS
* active MS
* type only code
* type = #person (exactly)
* type MS
* actual only boolean
* actual = false (exactly)
* actual MS
* code MS
* name 1..1 MS
* characteristic MS
  * ^condition = "gdf-1"
* member 0..0

Invariant: gdf-1
Description: "Group definition must have either an expression or characteristics, but not both"
Severity: #error
Expression: "extension('http://hl7.org/fhir/StructureDefinition/cqf-expression').exists() xor characteristic.exists()"
XPath: "exists(f:extension)"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-location.fsh

Profile: CPGLocation
Parent: Location
Id: cpg-location
Title: "CPG Location"
Description: "CPG location represents the minimum expectations for communicating location information as part of a CPG case"
* insert StructureDefinitionMetadata(cpg-location)
* status 1..1 MS
* name 1..1 MS
* mode 1..1 MS
* mode only code
* mode = #instance (exactly)
* type 1..* MS
* managingOrganization only Reference(CPGOrganization)
* managingOrganization MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-locationdefinition.fsh

Profile: CPGLocationDefinition
Parent: Location
Id: cpg-locationdefinition
Title: "CPG Location Definition"
Description: "CPG location represents the minimum expectations for communicating a definitional location as part of computable guideline content"
* insert StructureDefinitionMetadata(cpg-locationdefinition)
* identifier 0..0
* status 0..0 MS
* name 1..1 MS
* mode 1..1 MS
* mode only code
* mode = #kind (exactly)
* type 1..* MS
* telecom 0..0
* address 0..0
* position 0..0
* managingOrganization 0..0
* partOf 0..0
* hoursOfOperation 0..0
* availabilityExceptions 0..0
* endpoint 0..0

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-metricreport.fsh

Profile: CPGMetricReport
Parent: MeasureReport
Id: cpg-metricreport
Title: "CPG Metric Report"
Description: "Records a contextualized metric as calculated within the context of the implementation of a computable clinical practice guideline"
* insert StructureDefinitionMetadata(cpg-metricreport)
* extension contains
  CPGInstantiatesCaseFeature named instantiatesCaseFeature 0..1 MS and
  CPGCaseFeatureType named caseFeatureType 0..1 MS and
  CPGCaseFeaturePertinence named caseFeaturePertinence 0..1 MS
* identifier MS
* status MS
* type MS
* measure only Canonical(CPGComputableMetric)
* measure MS
  * ^short = "Source"
  * ^definition = "A link back to the definition that ultimately produced this MeasureReport. This is typically a Plan or Activity Definition."
* subject 1..1 MS
* date 1..1 MS
  * ^short = "Pertinent information"
  * ^definition = "The pertinent positive or negative information relative to this event."
* period 1..1 MS
* improvementNotation 1..1 MS
* group 1..* MS
  * population 1..* MS
* evaluatedResource MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-ordersetdefinition.fsh

Profile: CPGOrderSetDefinition
Parent: CPGComputablePlanDefinition
Id: cpg-ordersetdefinition
Title: "CPG Order Set Definition"
Description: "Profile of PlanDefinition as a Order Set for use with CPG Implementation Guide"
* insert StructureDefinitionMetadata(cpg-ordersetdefinition)
* type = $plan-definition-type#order-set
* type MS
* action MS
  * title 1..1 MS
  * groupingBehavior MS
  * selectionBehavior MS
  * requiredBehavior MS
  * precheckBehavior MS
  * cardinalityBehavior MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-organization.fsh

Profile: CPGOrganization
Parent: Organization
Id: cpg-organization
Title: "CPG Organization"
Description: "CPG organization represents the minimum expectations for communicating organization information as part of a CPG case"
* insert StructureDefinitionMetadata(cpg-organization)
* identifier MS
* active 1..1 MS
* name 1..1 MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-pathwaydefinition.fsh

Profile: CPGPathwayDefinition
Parent: CPGComputablePlanDefinition
Id: cpg-pathwaydefinition
Title: "CPG Pathway Definition"
Description: "Profile of PlanDefinition as a Clinical Pathway for use with CPG Implementation Guide. A pathway provides groupings of strategies to provide a longitudinal view of the guideline"
* insert StructureDefinitionMetadata(cpg-pathwaydefinition)
* type only CodeableConcept
* type = $plan-definition-type#clinical-protocol
* type MS
* action MS
  * title 1..1 MS
  * description 1..1 MS
  * code 1..1 MS
  * code from $cpg-common-process-valueset (extensible)
    * ^binding.description = "High-level processes identified in guideline-based care"
  * input 0..0
  * output 0..0
  * relatedAction 0..0
  * type 0..0 MS
  * groupingBehavior 0..0
  * selectionBehavior 0..0
  * requiredBehavior 0..0
  * precheckBehavior 0..0
  * cardinalityBehavior 0..0
  * definition[x] only Canonical(CPGStrategyDefinition or CPGWorkflowDefinition)
  * definitionCanonical MS
  * transform 0..0 MS
  * dynamicValue 0..0 MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-patient.fsh

Profile: CPGPatient
Parent: Patient
Id: cpg-patient
Title: "CPG Patient"
Description: "Profile of Patient for use with CPG Implementation Guide"
* insert StructureDefinitionMetadata(cpg-patient)
* identifier MS
  * use MS
  * value MS
* active MS
* name 1..* MS
  * use MS
  * text

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-practitioner.fsh

Profile: CPGPractitioner
Parent: Practitioner
Id: cpg-practitioner
Title: "CPG Practitioner"
Description: "Profile of Practitioner for use with CPG Implementation Guide"
* insert StructureDefinitionMetadata(cpg-practitioner)
* identifier MS
  * use MS
  * value MS
* active MS
* name 1..* MS
  * use MS
  * text MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-practitionerrole.fsh

Profile: CPGPractitionerRole
Parent: PractitionerRole
Id: cpg-practitionerrole
Title: "CPG Practitioner Role"
Description: "Profile of PractitionerRole for use with CPG Implementation Guide"
* insert StructureDefinitionMetadata(cpg-practitionerrole)
* identifier MS
  * use MS
  * value MS
* practitioner 1..1
* practitioner only Reference(CPGPractitioner)
* code 0..* MS
* code from CPGCommonPersonaVS (preferred)
  * ^binding.description = "Common personas for use with computable guideline content"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-practitionerroledefinition.fsh

Profile: CPGPractitionerRoleDefinition
Parent: PractitionerRole
Id: cpg-practitionerroledefinition
Title: "CPG Practitioner Role Definition"
Description: "Profile of PractitionerRole to establish definitional practitioner roles with the CPG Implementation Guide"
* insert StructureDefinitionMetadata(cpg-practitionerroledefinition)
* identifier 0..0
* active 0..0
* period 0..0
* practitioner 0..0
* organization 0..0
* code 0..* MS
* code from CPGCommonPersonaVS (preferred)
  * ^binding.description = "Common personas for use with computable guideline content"
* specialty 0..* MS
* location 0..* MS
* location only Reference(CPGLocationDefinition)
* telecom 0..0
* availableTime 0..0
* notAvailable 0..0
* availabilityExceptions 0..0
* endpoint 0..0

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-recommendationdefinition.fsh

Profile: CPGRecommendationDefinition
Parent: CPGComputablePlanDefinition
Id: cpg-recommendationdefinition
Title: "CPG Recommendation Definition"
Description: "Profile of PlanDefinition as a Recommendation Definition for use with CPG Implementation Guide"
* insert StructureDefinitionMetadata(cpg-recommendationdefinition)
* type only CodeableConcept
* type = $plan-definition-type#eca-rule
* type MS
* action MS
  * input
    * ^short = "Pertinent positives and negatives relevant to determining applicability"
    * ^definition = "For recommendation definitions, the input information for an action identifies pertinent positive and negative information relevant to determining the applicability of the recommendation."
    * ^comment = "Note that it may be possible to infer this information directly from the logic involved."
  * output
    * ^short = "Pertinent or relevant information that should be included with the recommendation"
    * ^definition = "For recommendation definitions, the output element is used to specify what information should be included as patient-specific supporting evidence for the recommendation."
    * ^comment = "If output elements are specified, implementations SHOULD support attaching content matching the output data requirements to the recommendation instances as appropriate for the recommendation resource type, typically a supportingInformation element."
* action
  * definition[x] only Canonical(CPGComputableActivityDefinition or CPGOrderSetDefinition)
  * definitionCanonical MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-relatedperson.fsh

Profile: CPGRelatedPerson
Parent: RelatedPerson
Id: cpg-relatedperson
Title: "CPG Related Person"
Description: "CPG related person defines the minimum expectations for a person related to a patient in a CPG case, such as a care partner, spouse, or other related person"
* insert StructureDefinitionMetadata(cpg-relatedperson)
* identifier MS
* active 1..1 MS
* patient 1..1 MS
* patient only Reference(CPGPatient)
* relationship MS
* name 1..* MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-strategy.fsh

Profile: CPGStrategy
Parent: RequestGroup
Id: cpg-strategy
Title: "CPG Strategy"
Description: "Profile of RequestGroup as a Strategy for use with the CPG Implementation Guide. Strategies are patient-specific realiziations of strategy definitions and are used to represent aspects of a care plan that still contain optionality among related patient-specific recommendations, typically focused on a particular condition or state within the overall guideline or pathway"
* insert StructureDefinitionMetadata(cpg-strategy)
* instantiatesCanonical 1..1
* instantiatesCanonical only Canonical(CPGStrategyDefinition)
* priority MS
* subject 1..1
* subject only Reference(Patient)
* encounter MS
* action
  * title 1..1
  * description 1..1
  * code 1..1
  * code from $cpg-common-process-valueset (extensible)
    * ^binding.description = "High-level processes identified in guideline-based care"
  * relatedAction MS
  * type 0..0
  * groupingBehavior 0..0
  * selectionBehavior 0..1 MS
  * requiredBehavior 0..0
  * precheckBehavior 0..0
  * cardinalityBehavior 0..0
  * resource MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-strategydefinition.fsh

Profile: CPGStrategyDefinition
Parent: CPGComputablePlanDefinition
Id: cpg-strategydefinition
Title: "CPG Strategy Definition"
Description: "Profile of PlanDefinition as a Strategy Definition for use with CPG Implementation Guide. Strategies are used to group recommendations together, typically focused on a particular condition or state within the overall guideline or pathway"
* insert StructureDefinitionMetadata(cpg-strategydefinition)
* type only CodeableConcept
* type = $plan-definition-type#workflow-definition
* type MS
* action MS
  * title 1..1 MS
  * description 1..1 MS
  * code 1..1 MS
  * code from $cpg-common-process-valueset (extensible)
    * ^binding.description = "High-level processes identified in guideline-based care"
  * input MS
  * output MS
  * relatedAction MS
  * type 0..0 MS
  * groupingBehavior 0..0
  * selectionBehavior 0..1 MS
  * requiredBehavior 0..0
  * precheckBehavior 0..0
  * cardinalityBehavior 0..0
  * definition[x] only Canonical(CPGRecommendationDefinition)
  * definitionCanonical MS
  * transform 0..0
  * dynamicValue 0..0 MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/profiles/domain-profiles/cpg-workflowdefinition.fsh

Profile: CPGWorkflowDefinition
Parent: CPGComputablePlanDefinition
Id: cpg-workflowdefinition
Title: "CPG Workflow Definition"
Description: "Profile of PlanDefinition as a Workflow Definition for use with CPG Implementation Guide"
* insert StructureDefinitionMetadata(cpg-workflowdefinition)
* type = $plan-definition-type#workflow-definition
* type MS
* action MS
  * title 1..1 MS
  * description 1..1 MS
  * code 0..1 MS
  * code from $cpg-common-process-valueset (extensible)
    * ^binding.description = "High-level processes identified in guideline-based care"
  * input MS
  * output MS
  * relatedAction MS
  * participant MS
    * extension contains $cpg-participantCapabilityStatement named participantCapabilityStatement 0..1 MS
  * type 0..0 MS
  * groupingBehavior 0..0
  * selectionBehavior 0..0
  * requiredBehavior 0..0
  * precheckBehavior 0..0
  * cardinalityBehavior 0..0
  * definition[x] MS
  * transform 0..0
  * dynamicValue 0..0 MS

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-administermedication-activitydefinition.fsh

Instance: cpg-administermedication-activitydefinition
InstanceOf: CPGAdministerMedicationActivity
Usage: #example
Title: "CPG Administer Medication ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-administermedication-activitydefinition, CPGAdministerMedicationActivityDefinition)
* description = "Example Activity Definition for a recommendation to administer a medication"
* kind = #Task
* profile = Canonical(cpg-administermedicationtask)
* code = $cpg-activity-type-cs#administer-medication "Administer a medication"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "for"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set for to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "owner"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "input"
  * expression
    * language = #text/cql
    * expression = "TaskInput { type: \"Administer Medication\", value: MedicationAdministration }"
//  * fhir_comments = = "Set input to the MedicationRequest parameter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-collectinformation-activitydefinition.fsh

Instance: cpg-collectinformation-activitydefinition
InstanceOf: CPGCollectInformationActivity
Usage: #example
Title: "CPG CollectInformation ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-collectinformation-activitydefinition, CPGCollectInformationActivityDefinition)
* description = "Example Activity Definition for a recommendation to collect information"
* kind = #Task
* profile = Canonical(cpg-questionnairetask)
* code = $cpg-activity-type-cs#collect-information "Collect Information"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
  // "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "for"
  * expression
    * language = #text/cql
    * expression = "Patient"
  // "Set for to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
  // "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
  // "Set authored on to Now()"
* dynamicValue[+]
  * path = "owner"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
  // "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "input"
  * expression
    * language = #text/cql
    * expression = "TaskInput { type: \"Collect Information\", value: QuestionnaireCanonical }"
  // "Set input to the QuestionnaireCanonical parameter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-communicationrequest-activitydefinition.fsh

Instance: cpg-communicationrequest-activitydefinition
InstanceOf: CPGCommunicationActivity
Usage: #example
Title: "CPG CommunicationRequest ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-communicationrequest-activitydefinition,CPGCommunicationRequestActivityDefinition)
* description = "Example Activity Definition for a recommendation to send a message"
* kind = #CommunicationRequest
* profile = Canonical(cpg-communicationrequest)
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "category"
  * expression
    * language = #text/cql
    * expression = "CategoryCodeableConcept"
//  * fhir_comments = = "Set category to the CategoryCodeableConcept parameter"
* dynamicValue[+]
  * path = "priority"
  * expression
    * language = #text/cql
    * expression = "'routine'"
//  * fhir_comments = = "Set priority to the string value 'routine'"
* dynamicValue[+]
  * path = "subject"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set subject to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "requester"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "recipient"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set recipient to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-dispensemedication-activitydefinition.fsh

Instance: cpg-dispensemedication-activitydefinition
InstanceOf: CPGDispenseMedicationActivity
Usage: #example
Title: "CPG Dispense Medication ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-dispensemedication-activitydefinition, CPGDispenseMedicationActivityDefinition)
* description = "Example Activity Definition for a recommendation to dispense a medication"
* kind = #Task
* profile = Canonical(cpg-dispensemedicationtask)
* code = $cpg-activity-type-cs#dispense-medication "Dispense a medication"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "for"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set for to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "owner"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "input"
  * expression
    * language = #text/cql
    * expression = "TaskInput { type: \"Dispense Medication\", value: MedicationRequest }"
//  * fhir_comments = = "Set input to the MedicationRequest parameter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-documentmedication-activitydefinition.fsh

Instance: cpg-documentmedication-activitydefinition
InstanceOf: CPGDocumentMedicationActivity
Usage: #example
Title: "CPG Document Medication ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-documentmedication-activitydefinition, CPGDocumentMedicationActivityDefinition)
* description = "Example Activity Definition for a recommendation to document a medication"
* kind = #Task
* profile = Canonical(cpg-documentmedicationtask)
* code = $cpg-activity-type-cs#document-medication "Document a medication"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "for"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set for to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "owner"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "input"
  * expression
    * language = #text/cql
    * expression = "TaskInput { type: \"Document Medication\", value: MedicationRequest }"
//  * fhir_comments = = "Set input to the MedicationRequest parameter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-enrollment-activitydefinition.fsh

Instance: cpg-enrollment-activitydefinition
InstanceOf: CPGEnrollmentActivity
Usage: #example
Title: "CPG Enrollment ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-enrollment-activitydefinition, CPGEnrollmentActivityDefinition)
* description = "Example Activity Definition for a recommendation to enroll patient"
* kind = #Task
* profile = Canonical(cpg-enrollmenttask)
* code = $cpg-activity-type-cs#enrollment "Enroll in a pathway or strategy"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "for"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set for to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "owner"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "input"
  * expression
    * language = #text/cql
    * expression = "TaskInput { type: \"Enrollment\", value: PathwayCanonical }"
//  * fhir_comments = = "Set input to the PathwayCanonical parameter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-generatereport-activitydefinition.fsh

Instance: cpg-generatereport-activitydefinition
InstanceOf: CPGGenerateReportActivity
Usage: #example
Title: "CPG Generate Report ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-generatereport-activitydefinition,CPGGenerateReportActivityDefinition)
* description = "Example Activity Definition for a recommendation to generate a report"
* kind = #Task
* profile = Canonical(cpg-generatereporttask)
* code = $cpg-activity-type-cs#generate-report "Generate a metric or case report"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "for"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set for to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "owner"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "input"
  * expression
    * language = #text/cql
    * expression = "TaskInput { type: \"Generate Report\", value: DefinitionCanonical }"
//  * fhir_comments = = "Set input to the PathwayCanonical parameter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-immunizationrequest-activitydefinition.fsh

Instance: cpg-immunizationrequest-activitydefinition
InstanceOf: CPGImmunizationActivity
Usage: #example
Title: "CPG ImmunizationRequest ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-immunizationrequest-activitydefinition, CPGImmunizationRequestActivityDefinition)
* description = "Example Activity Definition for a recommendation to provide an immunization"
* kind = #MedicationRequest
* profile = Canonical(cpg-immunizationrequest)
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "intent"
  * expression
    * language = #text/cql
    * expression = "'proposal'"
//  * fhir_comments = = "Set intent to the string value 'proposal'"
* dynamicValue[+]
  * path = "priority"
  * expression
    * language = #text/cql
    * expression = "'routine'"
//  * fhir_comments = = "Set priority to the string value 'routine'"
* dynamicValue[+]
  * path = "medication"
  * expression
    * language = #text/cql
    * expression = "VaccineCodeableConcept"
//  * fhir_comments = = "Set recommendation.vaccineCode to the VaccineCodeableConcept parameter"
* dynamicValue[+]
  * path = "subject"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set patient to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\r\n\tbut is being assigned to a Reference, implementation will need to sort this,\r\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "performer"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\r\n\tbut is being assigned to a Reference, implementation will need to sort this,\r\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "date"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set date to Now()"


---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-medicationrequest-activitydefinition.fsh

Instance: cpg-medicationrequest-activitydefinition
InstanceOf: CPGMedicationRequestActivity
Usage: #example
* insert ActivityDefinitionMetadata(cpg-medicationrequest-activitydefinition,CPGMedicationRequestActivityDefinition)
* title = "CPG MedicationRequest ActivityDefinition"
* description = "Example Activity Definition for a recommendation to request a medication"
* kind = #MedicationRequest
* profile = Canonical(cpg-medicationrequest)
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "intent"
  * expression
    * language = #text/cql
    * expression = "'proposal'"
//  * fhir_comments = = "Set intent to the string value 'proposal'"
* dynamicValue[+]
  * path = "priority"
  * expression
    * language = #text/cql
    * expression = "'routine'"
//  * fhir_comments = = "Set priority to the string value 'routine'"
* dynamicValue[+]
  * path = "medication"
  * expression
    * language = #text/cql
    * expression = "MedicationCodeableConcept"
//  * fhir_comments = = "Set medication to the MedicationCodeableConcept parameter"
* dynamicValue[+]
  * path = "subject"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set subject to the Patient context, note that this will result in a Patient,\r\n\tbut is being assigned to a Reference, implementation will need to sort this, or\r\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\r\n\tbut is being assigned to a Reference, implementation will need to sort this,\r\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "performer"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\r\n\tbut is being assigned to a Reference, implementation will need to sort this,\r\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "dosageInstruction.doseAndRate.dose"
  * expression
    * language = #text/cql
    * expression = "DoseQuantity"
//  * fhir_comments = = "Set dose to the DoseQuantity parameter"
* dynamicValue[+]
  * path = "dosageInstruction.timing"
  * expression
    * language = #text/cql
    * expression = "Timing { frequency: 1, period: DosesPerDay, periodUnit: 'd' }"
//  * fhir_comments =[+] = "Set timing? Consider approaches (code-based (e.g. BID, TID, QID) or frequency/timing-based)"
//  * fhir_comments =[+] = "Approach here uses \"DosesPerDay\" parameter for simplicity"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/activity-definitions/cpg-proposediagnosis-activitydefinition.fsh

Instance: cpg-proposediagnosistask-activitydefinition
InstanceOf: CPGProposeDiagnosisActivity
Usage: #example
Title: "CPG Propose Diagnosis ActivityDefinition"
* insert ActivityDefinitionMetadata(cpg-proposediagnosistask-activitydefinition, CPGProposeDiagnosisTaskActivityDefinition)
* description = "Example Activity Definition for a recommendation to propose a diagnosis"
* kind = #Task
* profile = Canonical(cpg-proposediagnosistask)
* code = $cpg-activity-type-cs#propose-diagnosis "Propose a diagnosis"
* doNotPerform = false
* dynamicValue[+]
  * path = "status"
  * expression
    * language = #text/cql
    * expression = "'draft'"
//  * fhir_comments = = "Set status to the string value 'draft'"
* dynamicValue[+]
  * path = "for"
  * expression
    * language = #text/cql
    * expression = "Patient"
//  * fhir_comments = = "Set for to the Patient context, note that this will result in a Patient,\n\tbut is being assigned to a Reference, implementation will need to sort this, or\n\tCQL will need to construct a reference"
* dynamicValue[+]
  * path = "encounter"
  * expression
    * language = #text/cql
    * expression = "Encounter"
//  * fhir_comments = = "Set encounter to the Encounter parameter, note that this will result in an Encounter,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "authoredOn"
  * expression
    * language = #text/cql
    * expression = "Now()"
//  * fhir_comments = = "Set authored on to Now()"
* dynamicValue[+]
  * path = "owner"
  * expression
    * language = #text/cql
    * expression = "Practitioner"
//  * fhir_comments = = "Reference to a Practitioner parameter, note that this will result in a Practitioner,\n\tbut is being assigned to a Reference, implementation will need to sort this,\n\tor CQL will need to construct a reference"
* dynamicValue[+]
  * path = "input"
  * expression
    * language = #text/cql
    * expression = "TaskInput { type: \"Propose Diagnosis\", value: Condition { clinicalStatus: \"Active\", verificationStatus \"Unconfirmed\", code: DiagnosisCodeableConcept, subject: Patient, encounter: Encounter, onsetDateTime: Today() } }"
//  * fhir_comments = = "Set input to a constructed Condition with the DiagnosisCodeableConcept parameter"

---

File: repos/HL7_SLASH_cqf-recommendations/input/fsh/resources/questionnaires/cpg-common-identity.fsh

Instance: cpg-common-identity
InstanceOf: Questionnaire
Usage: #definition
Title: "CPG Common Questionnaire - Identifying information"
Description: "Questionnaire used to identify patient"
* insert QuestionnaireMetadata(cpg-common-identity)
* name = "CPG_Common_Questionnaire_Identity"
* subjectType = #Patient
* item[+]
  * linkId = "name"
  * text = "Name"
  * type = #string
  * required = true
* item[+]
  * linkId = "birthdate"
  * text = "Birthdate"
  * type = #date
  * required = true

---

