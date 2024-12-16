File: repos/HL7_SLASH_davinci-pct/input/fsh/examples/pct_aeob_instances.fsh

Alias: ICD10 = http://hl7.org/fhir/sid/icd-10-cm
Alias: PKGCODE = http://terminology.hl7.org/CodeSystem/ex-diagnosisrelatedgroup
Alias: NUBC = https://www.nubc.org/CodeSystem/RevenueCodes
Alias: CPT4 = http://www.ama-assn.org/go/cpt
//Alias: ISO4217 = urn:iso:std:iso:4217

////////////////////////////////////////////

Instance: PCT-AEOB-1
InstanceOf: PCTAdvancedEOB
Description: "An instance of the PCTAdvancedEOB Profile"
//* identifier[ETIN].system = "http://hl7.org/fhir/us/pacio-rat"
//* identifier[ETIN].value = "ETIN-10010001"

// * extension[provider-contracting-status].valueCoding = #in "In Network"
// * extension[provider-contracting-rate].valueDecimal = 2000.00
// * extension[provider-contracting-rate].valueMoney.value = 2000.00
// * extension[provider-contracting-rate].valueMoney.currency = #USD

* extension[gfeReference].valueReference = Reference(PCT-GFE-Bundle-Inst-1)
* extension[serviceDescription].valueString = "Example service"

* extension[OutOfNetworkProviderInfo].valueUrl = "http://example.com/out-of-network.html"
// * extension[disclaimer].valueString = "Estimate Only ..."
// * extension[expirationDate].valueDate = "2021-10-31"

* status = #active
* type = $ClaimTypeCS#institutional "Institutional"
* use = #predetermination
* patient = Reference(patient1001)
* created = "2021-10-12"

* insurer = Reference(org1001)

* provider = Reference(org1002)
// * provider.extension[contracting-status].valueCoding = #in "In Network"
// * provider.extension[contracting-rate].valueDecimal = 2000.00


* priority = $PROCPRIORITY#normal

//* payee.type.coding = #provider

* claim.identifier.system = "http://example.com/identifiers/bundle"
* claim.identifier.value = "59688475-2324-3242-23473847"
* outcome = #complete

* insurance.focal = true
* insurance.coverage = Reference(coverage1001)

* benefitPeriod.start = "2022-01-01"
* benefitPeriod.end = "2023-01-01"

* item.sequence = 1
* item.revenue = $NUBCREVENUE#0611 "Magnetic Resonance Technology (MRT) - Brain/brain stem"
* item.productOrService = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.modifier = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.servicedDate = "2022-01-01"
* item.net.value = 200.00
* item.net.currency = #USD
* item.adjudication[medicalmanagement].extension[subjectToMedicalMgmt].valueCodeableConcept = PCTSubjectToMedicalMgmtReasonCS#concurrent-review "Concurrent Review"
* item.adjudication[medicalmanagement].category = PCTAdjudicationCategoryCS#medicalmanagement "Medical Management"
// * item.adjudication[medicalmanagement].amount.value = 200.00
// * item.adjudication[medicalmanagement].amount.currency = #USD

* adjudication[medicalmanagement].category = PCTAdjudicationCategoryCS#medicalmanagement "Medical Management"
* adjudication[medicalmanagement].extension[subjectToMedicalMgmt].valueCodeableConcept = PCTSubjectToMedicalMgmtReasonCS#concurrent-review "Concurrent Review"
* adjudication[submitted].category = http://terminology.hl7.org/CodeSystem/adjudication#submitted "Submitted Amount"
* adjudication[memberliability].category = PCTAdjudicationCategoryCS#memberliability "Member Liability"

* total.category = $ADJUDCS#submitted "Submitted Amount"
* total.amount.value = 200.00
* total.amount.currency = #USD

* processNote.extension[processNoteClass].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pct/CodeSystem/PCTAEOBProcessNoteCS#disclaimer "Disclaimer"
* processNote.text = "processNote disclaimer text"


* benefitBalance
* benefitBalance.category = https://x12.org/codes/service-type-codes#1 "Medical Care"
* benefitBalance.unit = http://terminology.hl7.org/CodeSystem/benefit-unit#individual
* benefitBalance.term = http://terminology.hl7.org/CodeSystem/benefit-term#annual
* benefitBalance.financial
* benefitBalance.financial.type = http://hl7.org/fhir/us/davinci-pct/CodeSystem/PCTFinancialType#allowed
* benefitBalance.financial.allowedMoney
* benefitBalance.financial.allowedMoney.value = 1
* benefitBalance.financial.allowedMoney.currency = #USD
* benefitBalance.financial.usedMoney
* benefitBalance.financial.usedMoney.value = 1
* benefitBalance.financial.usedMoney.currency = #USD
* benefitBalance.financial.extension[RemainingBenefit].valueMoney.value = 0
* benefitBalance.financial.extension[RemainingBenefit].valueMoney.currency = #USD
////////////////////////////////////////////


////////////////////////////////////////////

Instance: PCT-AEOB-Summary-1
InstanceOf: PCTAdvancedEOBSummary
Description: "An instance of the PCTAdvancedEOBSummary Profile"


* extension[serviceDescription].valueString = "Example service"
* extension[OutOfNetworkProviderInfo].valueUrl = "http://example.com/out-of-network.html"

* status = #active
* type = PCTEstimateTypeSummaryCSTemporaryTrialUse#estimate-summary "Estimate Summary"
* use = #predetermination
* patient = Reference(patient1001)
* created = "2021-10-12"

* insurer = Reference(org1001)

// * provider.extension[contracting-status].valueCoding = #in "In Network"
// * provider.extension[contracting-rate].valueDecimal = 2000.00
* provider.extension[dataAbsentReason].valueCode = #not-applicable
//* priority = $PROCPRIORITY#normal

* outcome = #complete

* insurance.focal = true
* insurance.coverage = Reference(coverage1001)

* benefitPeriod.start = "2022-01-01"
* benefitPeriod.end = "2022-01-01"
* billablePeriod.start = "2022-01-01"
* billablePeriod.end = "2022-01-01"

* total.category = $ADJUDCS#submitted "Submitted Amount"
* total.amount.value = 200.00
* total.amount.currency = #USD

* processNote.extension[processNoteClass].valueCodeableConcept = http://hl7.org/fhir/us/davinci-pct/CodeSystem/PCTAEOBProcessNoteCS#disclaimer "Disclaimer"
* processNote.text = "processNote disclaimer text"


* benefitBalance
* benefitBalance.category = https://x12.org/codes/service-type-codes#1 "Medical Care"
* benefitBalance.unit = http://terminology.hl7.org/CodeSystem/benefit-unit#individual
* benefitBalance.term = http://terminology.hl7.org/CodeSystem/benefit-term#annual
* benefitBalance.financial
* benefitBalance.financial.type = http://hl7.org/fhir/us/davinci-pct/CodeSystem/PCTFinancialType#allowed
* benefitBalance.financial.allowedMoney
* benefitBalance.financial.allowedMoney.value = 1
* benefitBalance.financial.allowedMoney.currency = #USD
* benefitBalance.financial.usedMoney
* benefitBalance.financial.usedMoney.value = 1
* benefitBalance.financial.usedMoney.currency = #USD
* benefitBalance.financial.extension[RemainingBenefit].valueMoney.value = 0
* benefitBalance.financial.extension[RemainingBenefit].valueMoney.currency = #USD
////////////////////////////////////////////


Instance: PCT-AEOB-Bundle-1
InstanceOf: PCTAEOBBundle
Description: "PCT AEOB Bundle Example 1"
* identifier.system = "http://example.com/identifiers/bundle"
* identifier.value = "59688475-2324-3242-1234567"
* timestamp = "2021-11-10T11:01:00+05:00"

* entry[aeob][+].fullUrl = "http://example.org/fhir/ExplanationOfBenefit/PCT-AEOB-Summary-1"
* entry[aeob][=].resource = PCT-AEOB-Summary-1
* entry[aeob][=].id = "PCT-AEOB-Summary-1"
* entry[aeob][+].fullUrl = "http://example.org/fhir/ExplanationOfBenefit/PCT-AEOB-1"
* entry[aeob][=].resource = PCT-AEOB-1
* entry[aeob][=].id = "PCT-AEOB-1"
* entry[patient].fullUrl = "http://example.org/fhir/Patient/patient1001"
* entry[patient].resource = patient1001
* entry[patient].id = "patient1001"
* entry[coverage].fullUrl = "http://example.org/fhir/Coverage/coverage1001"
* entry[coverage].resource = coverage1001
* entry[coverage].id = "coverage1001"
* entry[organization].fullUrl = "http://example.org/fhir/Organization/org1001"
* entry[organization].resource = org1001
* entry[organization].id = "org1001"
* entry[gfeBundle].fullUrl = "http://example.org/fhir/Bundle/PCT-GFE-Bundle-Inst-1"
* entry[gfeBundle].resource = PCT-GFE-Bundle-Inst-1
* entry[gfeBundle].id = "PCT-GFE-Bundle-Inst-1"





///////////////////////////////////////////



---

File: repos/HL7_SLASH_davinci-pct/input/fsh/examples/pct_gfe_coordination_instances.fsh

/*

PCTGFECoordinationBundle


PCTGFECoordinationTask

PCTGFEContributorTask


PCTGFEInformationBundle
PCTServiceRequest
PCTMedicationRequest
PCTDeviceRequest

PCTGFECollectionBundle

*/


Instance: PCT-GFE-Coordination-Bundle-1
InstanceOf: PCTGFECoordinationBundle
Description: "PCT GFE Coordination Bundle Example 1"
* identifier.system = "http://example.com/identifiers/bundle"
* identifier.value = "59688475-2324-3242-2347384710"
* timestamp = "2024-03-27T11:01:00+05:00"
* entry[gfe-task][+].fullUrl = "http://example.org/fhir/Task/PCT-GFE-Coordination-Task-1"
* entry[gfe-task][=].id = "PCT-GFE-Coordination-Task-1"
* entry[gfe-task][=].resource = PCT-GFE-Coordination-Task-1
* entry[gfe-task][=].request.method = #POST
* entry[gfe-task][=].request.url = "Task"
* entry[gfe-task][+].fullUrl = "http://example.org/fhir/Task/PCT-GFE-Contributor-Task-1"
* entry[gfe-task][=].id = "PCT-GFE-Contributor-Task-1"
* entry[gfe-task][=].resource = PCT-GFE-Contributor-Task-1
* entry[gfe-task][=].request.method = #POST
* entry[gfe-task][=].request.url = "Task"
* entry[gfe-task][+].fullUrl = "http://example.org/fhir/Task/PCT-GFE-Contributor-Task-2"
* entry[gfe-task][=].id = "PCT-GFE-Contributor-Task-2"
* entry[gfe-task][=].resource = PCT-GFE-Contributor-Task-2
* entry[gfe-task][=].request.method = #POST
* entry[gfe-task][=].request.url = "Task"



Instance: PCT-GFE-Coordination-Task-1
InstanceOf: PCTGFECoordinationTask
Description: "PCT GFE Coordination Task example 1"


* extension[requested-period].valuePeriod.end = "2024-03-30T11:01:00+05:00"

* extension[request-initiation-time].valueInstant = "2024-03-27T11:01:00+05:00"

* extension[planned-service-period].valuePeriod.start = "2024-04-27T10:00:00+05:00"
* extension[planned-service-period].valuePeriod.end = "2024-04-27T11:00:00+05:00"

* status = $HL7TaskStatus#requested
//* statusReason from PCTCoordinationTaskStatusReasonCodes (extensible)
* intent = http://hl7.org/fhir/task-intent#order

* code = PCTGFERequestTaskCSTemporaryTrialUse#gfe-coordination-task
* requester = Reference(Submitter-Org-1)


* reasonCode = PCTGFERequestTaskCSTemporaryTrialUse#scheduled-request
* input.type.text = "GFE Information Bundle"
* input.valueAttachment.contentType = #application/fhir+json
//* input.valueAttachment.data = ""


Instance: PCT-GFE-Contributor-Task-1
InstanceOf: PCTGFEContributorTask
Description: "PCT GFE Contributor Task example 1"


* extension[requested-period].valuePeriod.end = "2024-03-30T11:01:00+05:00"

* extension[request-initiation-time].valueInstant = "2024-03-27T11:01:00+05:00"

* extension[planned-service-period].valuePeriod.start = "2024-04-27T10:00:00+05:00"
* extension[planned-service-period].valuePeriod.end = "2024-04-27T11:00:00+05:00"

* partOf = Reference(PCT-GFE-Coordination-Task-1)

* status = $HL7TaskStatus#received
//* statusReason from PCTCoordinationTaskStatusReasonCodes (extensible)
* intent = http://hl7.org/fhir/task-intent#order

* code = PCTGFERequestTaskCSTemporaryTrialUse#gfe-contributor-task
* requester = Reference(Submitter-Org-1)
* owner = Reference(Submitter-Org-1)


Instance: PCT-GFE-Contributor-Task-2
InstanceOf: PCTGFEContributorTask
Description: "PCT GFE Contributor Task example 2"


* extension[requested-period].valuePeriod.end = "2024-03-30T11:01:00+05:00"

* extension[request-initiation-time].valueInstant = "2024-03-27T11:01:00+05:00"

* extension[planned-service-period].valuePeriod.start = "2024-04-27T10:00:00+05:00"
* extension[planned-service-period].valuePeriod.end = "2024-04-27T11:00:00+05:00"

* partOf = Reference(PCT-GFE-Coordination-Task-1)

* status = $HL7TaskStatus#received
//* statusReason from PCTCoordinationTaskStatusReasonCodes (extensible)
* intent = http://hl7.org/fhir/task-intent#order

* code = PCTGFERequestTaskCSTemporaryTrialUse#gfe-contributor-task
* requester = Reference(Submitter-Org-1)
* owner = Reference(org1002)

Instance: PCT-GFE-Information-Bundle-1
InstanceOf: PCTGFEInformationBundle
Description: "PCT GFE Information Bundle Example 1"
* identifier.system = "http://example.com/identifiers/bundle"
* identifier.value = "59688475-2324-3242-2347384711"
* timestamp = "2024-03-27T11:01:00+05:00"
* entry[patient].fullUrl = "http://example.org/fhir/Patient/patient1001"
* entry[patient].id = "patient1001"
* entry[patient].resource = patient1001
* entry[coverage].fullUrl = "http://example.org/fhir/Coverage/coverage1001"
* entry[coverage].id = "coverage1001"
* entry[coverage].resource = coverage1001
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/org1001"
* entry[organization][=].id = "org1001"
* entry[organization][=].resource = org1001

* entry[service-location].fullUrl = "http://example.org/fhir/Location/PCT-ServiceLocation-1"
* entry[service-location].id = "PCT-ServiceLocation-1"
* entry[service-location].resource = PCT-ServiceLocation-1

* entry[requested-items-service][+].fullUrl = "http://example.org/fhir/ServiceRequest/PCT-ServiceRequest-1"
* entry[requested-items-service][=].id = "PCT-ServiceRequest-1"
* entry[requested-items-service][=].resource = PCT-ServiceRequest-1
* entry[requested-items-device][+].fullUrl = "http://example.org/fhir/DeviceRequest/PCT-DeviceRequest-1"
* entry[requested-items-device][=].id = "PCT-DeviceRequest-1"
* entry[requested-items-device][=].resource = PCT-DeviceRequest-1





Instance: PCT-GFE-Collection-Bundle-1
InstanceOf: PCTGFECollectionBundle
Description: "PCT GFE Collection Bundle Example 1"
* identifier.system = "http://example.com/identifiers/bundle"
* identifier.value = "59688475-2324-3242-2347384711"
* timestamp = "2024-03-29T11:01:00+05:00"

* entry[patient].fullUrl = "http://example.org/fhir/Patient/patient1001"
* entry[patient].id = "patient1001"
* entry[patient].resource = patient1001

* entry[coverage].fullUrl = "http://example.org/fhir/Coverage/coverage1001"
* entry[coverage].id = "coverage1001"
* entry[coverage].resource = coverage1001
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/Submitter-Org-1"
* entry[organization][=].id = "Submitter-Org-1"
* entry[organization][=].resource = Submitter-Org-1
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/org1001"
* entry[organization][=].id = "org1001"
* entry[organization][=].resource = org1001



* entry[gfe-bundle][+].fullUrl = "http://example.org/fhir/Bundle/PCT-GFE-Bundle-Inst-1"
* entry[gfe-bundle][=].id = "PCT-GFE-Bundle-Inst-1"
* entry[gfe-bundle][=].resource = PCT-GFE-Bundle-Inst-1

* entry[gfe-bundle][+].fullUrl = "http://example.org/fhir/Bundle/PCT-GFE-Missing-Bundle-1"
* entry[gfe-bundle][=].id = "PCT-GFE-Missing-Bundle-1"
* entry[gfe-bundle][=].resource = PCT-GFE-Missing-Bundle-1


Instance: PCT-GFE-Collection-Bundle-2
InstanceOf: PCTGFECollectionBundle
Description: "PCT GFE Collection Bundle Example 1"
* identifier.system = "http://example.com/identifiers/bundle"
* identifier.value = "59688475-2324-3242-2347384711"
* timestamp = "2024-03-29T11:01:00+05:00"

* entry[patient].fullUrl = "http://example.org/fhir/Patient/patient1001"
* entry[patient].id = "patient1001"
* entry[patient].resource = patient1001

* entry[coverage].fullUrl = "http://example.org/fhir/Coverage/coverage1001"
* entry[coverage].id = "coverage1001"
* entry[coverage].resource = coverage1001
* entry[practitioner][+].fullUrl = "http://example.org/fhir/Practitioner/Submitter-Practitioner-1"
* entry[practitioner][=].id = "Submitter-Practitioner-1"
* entry[practitioner][=].resource = Submitter-Practitioner-1
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/org1001"
* entry[organization][=].id = "org1001"
* entry[organization][=].resource = org1001



* entry[gfe-bundle][+].fullUrl = "http://example.org/fhir/Bundle/PCT-GFE-Bundle-Prof-1"
* entry[gfe-bundle][=].id = "PCT-GFE-Bundle-Prof-1"
* entry[gfe-bundle][=].resource = PCT-GFE-Bundle-Prof-1

* entry[gfe-bundle][+].fullUrl = "http://example.org/fhir/Bundle/PCT-GFE-Missing-Bundle-1"
* entry[gfe-bundle][=].id = "PCT-GFE-Missing-Bundle-1"
* entry[gfe-bundle][=].resource = PCT-GFE-Missing-Bundle-1



Instance: PCT-GFE-Missing-Bundle-1
InstanceOf: PCTGFEMissingBundle
Description: "PCT GFE Missing Bundle Example 1"

* timestamp = "2024-03-27T11:01:00+05:00"
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/org1002"
* entry[organization][=].id = "org1002"
* entry[organization][=].resource = org1002
* entry[patient].fullUrl = "http://example.org/fhir/Patient/patient1001"
* entry[patient].id = "patient1001"
* entry[patient].resource = patient1001
* entry[coverage].fullUrl = "http://example.org/fhir/Coverage/coverage1001"
* entry[coverage].id = "coverage1001"
* entry[coverage].resource = coverage1001
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/org1001"
* entry[organization][=].id = "org1001"
* entry[organization][=].resource = org1001
* entry[requested-items-device].fullUrl = "http://example.org/fhir/DeviceRequest/PCT-DeviceRequest-1"
* entry[requested-items-device].id = "PCT-DeviceRequest-1"
* entry[requested-items-device].resource = PCT-DeviceRequest-1





Instance: PCT-ServiceRequest-1
InstanceOf: PCTServiceRequest
Description: "PCT ServiceRequest Example 1"

* status = #active
* intent = #proposal

* code = $CPT#73722 "Magnetic resonance (eg, proton) imaging, any joint of lower extremity; with contrast material(s)"

* subject = Reference(patient1001)


Instance: PCT-MedicationRequest-1
InstanceOf: PCTMedicationRequest
Description: "PCT MedicationRequest Example 1"

* status = #active
* intent = #proposal

* medicationCodeableConcept = $RXNORM#692620 "gadobenate"

* subject = Reference(patient1001)


Instance: PCT-DeviceRequest-1
InstanceOf: PCTDeviceRequest
Description: "PCT DeviceRequest Example 1"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><a name=\"PCT-DeviceRequest-1\"> </a><a name=\"hcPCT-DeviceRequest-1\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource DeviceRequest &quot;PCT-DeviceRequest-1&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-davinci-pct-devicerequest.html\">PCT GFE DeviceRequest</a></p></div><p><b>status</b>: active</p><p><b>intent</b>: proposal</p><p><b>code</b>: KNEE ORTHOSIS, ELASTIC WITH CONDYLAR PADS AND JOINTS, WITH OR WITHOUT PATELLAR CONTROL, PREFABRICATED, INCLUDES FITTING AND ADJUSTMENT <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (HCPCSReleaseCodeSets#L1820)</span></p><p><b>subject</b>: <a href=\"Patient-patient1001.html\">Patient/patient1001</a> &quot; BETTERHALF&quot;</p></div>"

* status = #active
* intent = #proposal

* codeCodeableConcept = $HCPCS#L1820 "KNEE ORTHOSIS, ELASTIC WITH CONDYLAR PADS AND JOINTS, WITH OR WITHOUT PATELLAR CONTROL, PREFABRICATED, INCLUDES FITTING AND ADJUSTMENT"

* subject = Reference(patient1001)


Instance: PCT-ServiceLocation-1
InstanceOf: PCTServiceLocation
Description: "PCT ServiceLocation Example 1"

* status = #active

* name = "Hospital"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#HOSP "Hospital"


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/examples/pct_gfe_instances.fsh

Alias: ICD10 = http://hl7.org/fhir/sid/icd-10-cm
Alias: PKGCODE = http://terminology.hl7.org/CodeSystem/ex-diagnosisrelatedgroup
Alias: Hl7FhirAdminGender = http://hl7.org/fhir/administrative-gender
Alias: Hl7V3MS = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: LANGVALSET = urn:ietf:bcp:47
Alias: PRO-ROLE = http://nucc.org/provider-taxonomy
Alias: SPECIALTY = http://nucc.org/provider-taxonomy
Alias: V2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: RELATE = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: CONTRACTTYPE = http://terminology.hl7.org/CodeSystem/contract-type
Alias: COPAYTYPE = http://terminology.hl7.org/CodeSystem/coverage-copay-type
Alias: COVCLASS = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: PAYLOADTYPE = http://hl7.org/fhir/resource-types
Alias: ENDPOINTCONNECTIONTYPE = http://terminology.hl7.org/CodeSystem/endpoint-connection-type

////////////////////////////////////////////

Instance: PCT-GFE-Institutional-1
InstanceOf: PCTGFEInstitutional
Description: "PCT Institutional GFE Example 1"
//* identifier[ETIN].system = "http://hl7.org/fhir/us/pacio-rat"
//* identifier[ETIN].value = "ETIN-10010001"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><a name=\"PCT-GFE-Institutional-1\"> </a><a name=\"hcPCT-GFE-Institutional-1\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Claim &quot;PCT-GFE-Institutional-1&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-davinci-pct-gfe-institutional.html\">PCT Good Faith Estimate Institutional</a></p></div><p><b>ProviderEventMethodology</b>: EEMM1021</p><p><b>GFEDisclaimer</b>: For estimation purposes only</p><blockquote><p><b>GFEServiceLinkingInfo</b></p><blockquote><p><b>url</b></p><code>linkingIdentifier</code></blockquote><p><b>value</b>: 223452-2342-2435-008001</p><blockquote><p><b>url</b></p><code>plannedPeriodOfService</code></blockquote><p><b>value</b>: 2021-10-31</p></blockquote><p><b>identifier</b>: Placer Identifier/GFEProviderAssignedID0001</p><p><b>status</b>: active</p><p><b>type</b>: Institutional <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-claim-type.html\">Claim Type Codes</a>#institutional)</span></p><p><b>use</b>: predetermination</p><p><b>patient</b>: <a href=\"Patient-patient1001.html\">Patient/patient1001</a> &quot; BETTERHALF&quot;</p><p><b>created</b>: 2021-10-05</p><p><b>insurer</b>: <a href=\"Organization-org1001.html\">Organization/org1001</a> &quot;Umbrella Insurance Company&quot;</p><p><b>provider</b>: <a href=\"Organization-Submitter-Org-1.html\">Organization/Submitter-Org-1</a> &quot;GFE Service Help INC.&quot;</p><p><b>priority</b>: Normal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-processpriority.html\">Process Priority Codes</a>#normal)</span></p><h3>Payees</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Type</b></td></tr><tr><td style=\"display: none\">*</td><td>Provider <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-payeetype.html\">Payee Type Codes</a>#provider)</span></td></tr></table><p><b>referral</b>: <span>: Referral Number</span></p><h3>SupportingInfos</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Sequence</b></td><td><b>Category</b></td><td><b>Code</b></td></tr><tr><td style=\"display: none\">*</td><td>1</td><td>Type of Bill <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-PCTSupportingInfoType.html\">PCT GFE Supporting Info Type Code System</a>#typeofbill)</span></td><td>Hospital Inpatient (Part A) <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-AHANUBCTypeOfBill.html\">AHA NUBC Type Of Bill Codes</a>#011X)</span></td></tr></table><h3>Diagnoses</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Sequence</b></td><td><b>Diagnosis[x]</b></td><td><b>Type</b></td><td><b>PackageCode</b></td></tr><tr><td style=\"display: none\">*</td><td>1</td><td>Unspecified focal traumatic brain injury <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-icd10CM.html\">International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM)</a>#S06.30)</span></td><td>Principal Diagnosis <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-ex-diagnosistype.html\">Example Diagnosis Type Codes</a>#principal)</span></td><td>Head trauma - concussion <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-ex-diagnosisrelatedgroup.html\">Example Diagnosis Related Group Codes</a>#400)</span></td></tr></table><h3>Insurances</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Sequence</b></td><td><b>Focal</b></td><td><b>Coverage</b></td></tr><tr><td style=\"display: none\">*</td><td>1</td><td>true</td><td><a href=\"Coverage-coverage1001.html\">Coverage/coverage1001</a></td></tr></table><blockquote><p><b>item</b></p><p><b>Service Description</b>: Imaging</p><p><b>sequence</b>: 1</p><p><b>revenue</b>: Magnetic Resonance Technology (MRT) - Brain/brain stem <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-AHANUBCRevenueCodes.html\">AHA NUBC Revenue Codes</a>#0611)</span></p><p><b>productOrService</b>: Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-CPT.html\">Current Procedural Terminology (CPT®)</a>#70551)</span></p><p><b>modifier</b>: Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-CPT.html\">Current Procedural Terminology (CPT®)</a>#70551)</span></p><p><b>serviced</b>: 2021-10-31</p><p><b>quantity</b>: 1</p><h3>Nets</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Value</b></td><td><b>Currency</b></td></tr><tr><td style=\"display: none\">*</td><td>200</td><td>USD</td></tr></table></blockquote><h3>Totals</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Value</b></td><td><b>Currency</b></td></tr><tr><td style=\"display: none\">*</td><td>200</td><td>USD</td></tr></table></div>"
* identifier[PLAC].system = V2-0203
* identifier[PLAC].value = "GFEProviderAssignedID0001"
/* Remove GFE Submitter
* extension[gfeSubmitter].valueReference = Reference(Submitter-Org-1)
*/
* extension[providerEventMethodology].valueString = "EEMM1021"
* extension[gfeDisclaimer].valueString = "For estimation purposes only"
* extension[GFEServiceLinkingInfo].extension[linkingIdentifier].valueString = "223452-2342-2435-008001"
* extension[GFEServiceLinkingInfo].extension[plannedPeriodOfService].valueDate = "2021-10-31"
* status = #active
* type = $ClaimTypeCS#institutional "Institutional"
* patient = Reference(patient1001)
* created = "2021-10-05"
* insurer = Reference(org1001)
* provider = Reference(Submitter-Org-1)
* provider.extension[ProviderTaxonomy].valueCodeableConcept = NUCC#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician"
* provider.extension[consentForBalanceBilling].valueBoolean = true
* priority = $PROCPRIORITY#normal
* payee.type.coding = $PAYEETYPE#provider
* referral.extension[referralNumber].valueString = "REF12022002-121"
* referral.display = "Referral Number"
* supportingInfo[typeOfBill].sequence = 1
* supportingInfo[typeOfBill].category = http://hl7.org/fhir/us/davinci-pct/CodeSystem/PCTSupportingInfoType#typeofbill
* supportingInfo[typeOfBill].code = https://www.nubc.org/CodeSystem/TypeOfBill#011X "Hospital Inpatient (Part A)"
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1001)
* diagnosis[principal].diagnosisCodeableConcept = ICD10#S06.30 "Unspecified focal traumatic brain injury"
* diagnosis[principal].packageCode = PKGCODE#400 "Head trauma - concussion"
* item.extension[ServiceDescription].valueString = "Imaging"
* item.sequence = 1
* item.revenue = $NUBCREVENUE#0611 "Magnetic Resonance Technology (MRT) - Brain/brain stem"
* item.productOrService = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.modifier = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.servicedDate = 2021-10-31
* item.quantity.value = 1
* item.net.value = 200.00
* item.net.currency = #USD
//* item.detail.sequence = 1
//* item.detail.productOrService = $NDC#47781-457
* total.value = 200.00
* total.currency = #USD




Instance: PCT-GFE-Summary-1
InstanceOf: PCTGFESummary
Description: "PCT Summary GFE Example 1"
//* identifier[ETIN].system = "http://hl7.org/fhir/us/pacio-rat"
//* identifier[ETIN].value = "ETIN-10010001"
* text.status = #additional 
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><a name=\"PCT-GFE-Summary-1\"> </a><a name=\"hcPCT-GFE-Summary-1\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Claim &quot;PCT-GFE-Summary-1&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-davinci-pct-gfe-summary.html\">PCT Good Faith Estimate  Summary</a></p></div><p><b>status</b>: active</p><p><b>type</b>: Estimate Summary <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-PCTEstimateTypeSummaryCSTemporaryTrialUse.html\">PCT Estimate Type Code System</a>#estimate-summary)</span></p><p><b>use</b>: predetermination</p><p><b>patient</b>: <a href=\"Patient-patient1001.html\">Patient/patient1001</a> &quot; BETTERHALF&quot;</p><p><b>billablePeriod</b>: 2021-10-31 --&gt; 2021-10-31</p><p><b>created</b>: 2021-10-05</p><p><b>insurer</b>: <a href=\"Organization-org1001.html\">Organization/org1001</a> &quot;Umbrella Insurance Company&quot;</p><p><b>provider</b>: <span>??</span></p><p><b>priority</b>: Normal <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-processpriority.html\">Process Priority Codes</a>#normal)</span></p><h3>Diagnoses</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Sequence</b></td><td><b>Diagnosis[x]</b></td><td><b>Type</b></td><td><b>PackageCode</b></td></tr><tr><td style=\"display: none\">*</td><td>1</td><td>Unspecified focal traumatic brain injury <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-icd10CM.html\">International Classification of Diseases, 10th Revision, Clinical Modification (ICD-10-CM)</a>#S06.30)</span></td><td>Principal Diagnosis <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-ex-diagnosistype.html\">Example Diagnosis Type Codes</a>#principal)</span></td><td>Head trauma - concussion <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-ex-diagnosisrelatedgroup.html\">Example Diagnosis Related Group Codes</a>#400)</span></td></tr></table><h3>Insurances</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Sequence</b></td><td><b>Focal</b></td><td><b>Coverage</b></td></tr><tr><td style=\"display: none\">*</td><td>1</td><td>true</td><td><a href=\"Coverage-coverage1001.html\">Coverage/coverage1001</a></td></tr></table><h3>Totals</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Value</b></td><td><b>Currency</b></td></tr><tr><td style=\"display: none\">*</td><td>200</td><td>USD</td></tr></table></div>"

* status = #active
* type = PCTEstimateTypeSummaryCSTemporaryTrialUse#estimate-summary "Estimate Summary"
* patient = Reference(patient1001)
* created = "2021-10-05"
* billablePeriod.start = "2021-10-31"
* billablePeriod.end = "2021-10-31"
* insurer = Reference(org1001)
//* provider = Reference(Submitter-Org-1)
//* provider.extension[ProviderTaxonomy].valueCodeableConcept = NUCC#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician"
//* provider.extension[consentForBalanceBilling].valueBoolean = true
* priority = $PROCPRIORITY#normal
//* payee.type.coding = $PAYEETYPE#provider
//* referral.extension[referralNumber].valueString = "REF12022002-121"
//* referral.display = "Referral Number"
//* supportingInfo[typeOfBill].sequence = 1
//* supportingInfo[typeOfBill].category = http://hl7.org/fhir/us/davinci-pct/CodeSystem/PCTSupportingInfoType#typeofbill
//* supportingInfo[typeOfBill].code = https://www.nubc.org/CodeSystem/TypeOfBill#011X "Hospital Inpatient (Part A)"
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1001)
* diagnosis[principal].diagnosisCodeableConcept = ICD10#S06.30 "Unspecified focal traumatic brain injury"
* diagnosis[principal].packageCode = PKGCODE#400 "Head trauma - concussion"
/* item.extension[ServiceDescription].valueString = "Imaging"
* item.sequence = 1
* item.revenue = $NUBCREVENUE#0611 "Magnetic Resonance Technology (MRT) - Brain/brain stem"
* item.productOrService = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.modifier = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.servicedDate = 2021-10-31
* item.quantity.value = 1
* item.net.value = 200.00
* item.net.currency = #USD
//* item.detail.sequence = 1
//* item.detail.productOrService = $NDC#47781-457

*/
* total.value = 200.00
* total.currency = #USD

Instance: PCT-GFE-Professional-MRI
InstanceOf: PCTGFEProfessional
Description: "PCT Professional GFE Example 1"
* identifier[PLAC].system = V2-0203
* identifier[PLAC].value = "GFEProviderAssignedID0002"
/* Remove GFE Submitter
* extension[gfeSubmitter].valueReference = Reference(Submitter-Practitioner-1)
*/
* extension[providerEventMethodology].valueString = "EEMM1022"
* extension[GFEServiceLinkingInfo].extension[linkingIdentifier].valueString = "223452-2342-2435-008001"
* extension[GFEServiceLinkingInfo].extension[plannedPeriodOfService].valueDate = "2021-10-31"
* status = #active
* type = $ClaimTypeCS#professional "Professional"
* patient = Reference(patient1001)
* created = "2021-10-05"
* insurer = Reference(org1001)
* provider = Reference(Submitter-Practitioner-1)
* provider.extension[ProviderTaxonomy].valueCodeableConcept = NUCC#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician"
* priority = $PROCPRIORITY#normal
* payee.type.coding = $PAYEETYPE#provider
* referral.extension[referralNumber].valueString = "REF12022002-122"
* referral.display = "Referral Number"
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1001)
* diagnosis[principal].diagnosisCodeableConcept = ICD10#S06.30 "Unspecified focal traumatic brain injury"
* diagnosis[principal].packageCode = PKGCODE#400 "Head trauma - concussion"
* item.extension[GFEBillingProviderLineItemCtrlNum].valueIdentifier.value = "GFEBillingProviderLineItemCtrlNum-0001"
* item.sequence = 1
* item.productOrService = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.modifier = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.servicedDate = 2021-10-31
* item.extension[ServiceDescription].valueString = "Imaging"
* item.locationCodeableConcept = $CMSPOSCS#21 "Inpatient Hospital"
* item.quantity.value = 1
* item.unitPrice.value = 200.00
* item.unitPrice.currency = #USD
* item.net.value = 200.00
* item.net.currency = #USD
* total.value = 200.00
* total.currency = #USD

Instance: PCT-GFE-Summary-MRI
InstanceOf: PCTGFESummary
Description: "PCT Summary GFE Example 1"

//* extension[gfeSubmitter].valueReference = Reference(Submitter-Practitioner-1)
//* extension[providerEventMethodology].valueString = "EEMM1022"
//* extension[GFEServiceLinkingInfo].extension[linkingIdentifier].valueString = "223452-2342-2435-008001"
//* extension[GFEServiceLinkingInfo].extension[plannedPeriodOfService].valueDate = "2021-10-31"
* status = #active
* type = PCTEstimateTypeSummaryCSTemporaryTrialUse#estimate-summary "Estimate Summary"

* patient = Reference(patient1001)
* created = "2021-10-05"
* billablePeriod.start = "2021-10-31"
* insurer = Reference(org1001)
* provider.extension[dataAbsentReason].valueCode = #not-applicable
//* provider = Reference(Submitter-Practitioner-1)
//* provider.extension[ProviderTaxonomy].valueCodeableConcept = NUCC#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician"
* priority = $PROCPRIORITY#normal
//* payee.type.coding = $PAYEETYPE#provider
//* referral.extension[referralNumber].valueString = "REF12022002-122"
//* referral.display = "Referral Number"
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1001)
* diagnosis[principal].diagnosisCodeableConcept = ICD10#S06.30 "Unspecified focal traumatic brain injury"
* diagnosis[principal].packageCode = PKGCODE#400 "Head trauma - concussion"
/* item.extension[GFEBillingProviderLineItemCtrlNum].valueIdentifier.value = "GFEBillingProviderLineItemCtrlNum-0001"
* item.sequence = 1
* item.productOrService = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.modifier = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.servicedDate = 2021-10-31
* item.extension[ServiceDescription].valueString = "Imaging"
* item.locationCodeableConcept = $CMSPOSCS#21 "Inpatient Hospital"
* item.quantity.value = 1
* item.unitPrice.value = 200.00
* item.unitPrice.currency = #USD
* item.net.value = 200.00
* item.net.currency = #USD
*/
* total.value = 200.00
* total.currency = #USD

Instance: PCT-GFE-Institutional-MRI
InstanceOf: PCTGFEInstitutional
Description: "PCT Institutional GFE for MRI"
* identifier[PLAC].value = "GFEProviderAssignedID0001MRI"
/* Remove GFE Submitter
* extension[gfeSubmitter].valueReference = Reference(Submitter-Org-1)
*/
* extension[providerEventMethodology].valueString = "EEMM1021"
* extension[GFEServiceLinkingInfo].extension[linkingIdentifier].valueString = "223452-2342-2435-008002"
* extension[GFEServiceLinkingInfo].extension[plannedPeriodOfService].valueDate = "2022-02-02"
* status = #active
* type = $ClaimTypeCS#institutional "Institutional"
* patient = Reference(patient1001)
* created = "2022-02-02"
* insurer = Reference(org1001)
* provider = Reference(Submitter-Org-1)
* provider.extension[ProviderTaxonomy].valueCodeableConcept = NUCC#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician"
* priority = $PROCPRIORITY#normal
* payee.type.coding = $PAYEETYPE#provider
* referral.extension[referralNumber].valueString = "REF12022002-122"
* referral.display = "Referral Number"
* supportingInfo[typeOfBill].sequence = 1
* supportingInfo[typeOfBill].category = http://hl7.org/fhir/us/davinci-pct/CodeSystem/PCTSupportingInfoType#typeofbill
* supportingInfo[typeOfBill].code = https://www.nubc.org/CodeSystem/TypeOfBill#example-bill-type
* insurance.sequence = 1
* insurance.focal = true
* insurance.coverage = Reference(coverage1001)
* diagnosis[principal].diagnosisCodeableConcept = ICD10#S06.30 "Unspecified focal traumatic brain injury"
* diagnosis[principal].packageCode = PKGCODE#400 "Head trauma - concussion"
* item.sequence = 1
* item.revenue = $NUBCREVENUE#0611 "Magnetic Resonance Technology (MRT) - Brain/brain stem"
* item.productOrService = $CPT#70551 "Magnetic resonance (eg, proton) imaging, brain (including brain stem); without contrast material"
* item.servicedDate = 2022-02-02
* item.extension[ServiceDescription].valueString = "Imaging"
* item.quantity.value = 1
* item.net.value = 266.00
* item.net.currency = #USD
* total.value = 266.00
* total.currency = #USD



///////////////////////////////////////////

Instance: PCT-GFE-Bundle-Inst-1
InstanceOf: PCTGFEBundle
Description: "PCT GFE Bundle Institutional Example 1"
* identifier.system = "http://example.com/identifiers/bundle"
* identifier.value = "59688475-2324-3242-23473847"
* timestamp = "2021-11-09T11:01:00+05:00"
* entry[gfe][+].fullUrl = "http://example.org/fhir/Claim/PCT-GFE-Summary-1"
* entry[gfe][=].id = "PCT-GFE-Summary-1"
* entry[gfe][=].resource = PCT-GFE-Summary-1
* entry[gfe][+].fullUrl = "http://example.org/fhir/Claim/PCT-GFE-Institutional-1"
* entry[gfe][=].id = "PCT-GFE-Institutional-1"
* entry[gfe][=].resource = PCT-GFE-Institutional-1
// * entry[gfeInstitutional].fullUrl = "http://example.org/fhir/Claim/PCT-GFE-Institutional-1"
// * entry[gfeInstitutional].id = "PCT-GFE-Institutional-1"
// * entry[gfeInstitutional].resource = PCT-GFE-Institutional-1
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/Submitter-Org-1"
* entry[organization][=].id = "Submitter-Org-1"
* entry[organization][=].resource = Submitter-Org-1
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/org1001"
* entry[organization][=].id = "org1001"
* entry[organization][=].resource = org1001
* entry[patient].fullUrl = "http://example.org/fhir/Patient/patient1001"
* entry[patient].id = "patient1001"
* entry[patient].resource = patient1001
* entry[coverage].fullUrl = "http://example.org/fhir/Coverage/coverage1001"
* entry[coverage].resource = coverage1001

Instance: PCT-GFE-Bundle-Prof-1
InstanceOf: PCTGFEBundle
Description: "PCT GFE Bundle Professional Example 1"
* identifier.system = "http://example.com/identifiers/bundle"
* identifier.value = "59688475-2324-3242-23473847"
* timestamp = "2021-11-09T11:01:00+05:00"

* entry[gfe][+].fullUrl = "http://example.org/fhir/Claim/PCT-GFE-Summary-MRI"
* entry[gfe][=].id = "PCT-GFE-Summary-MRI"
* entry[gfe][=].resource = PCT-GFE-Summary-MRI
* entry[gfe][+].fullUrl = "http://example.org/fhir/Claim/PCT-GFE-Professional-MRI"
* entry[gfe][=].id = "PCT-GFE-Professional-MRI"
* entry[gfe][=].resource = PCT-GFE-Professional-MRI
// * entry[gfeProfessional].fullUrl = "http://example.org/fhir/Claim/PCT-GFE-Professional-MRI"
// * entry[gfeProfessional].id = "PCT-GFE-Professional-MRI"
// * entry[gfeProfessional].resource = PCT-GFE-Professional-MRI
* entry[practitioner][+].fullUrl = "http://example.org/fhir/Practitioner/Submitter-Practitioner-1"
* entry[practitioner][=].id = "Submitter-Practitioner-1"
* entry[practitioner][=].resource = Submitter-Practitioner-1
* entry[organization][+].fullUrl = "http://example.org/fhir/Organization/org1001"
* entry[organization][=].id = "org1001"
* entry[organization][=].resource = org1001
* entry[patient].fullUrl = "http://example.org/fhir/Patient/patient1001"
* entry[patient].id = "patient1001"
* entry[patient].resource = patient1001
* entry[coverage].fullUrl = "http://example.org/fhir/Coverage/coverage1001"
* entry[coverage].resource = coverage1001


///////////////////////////////////////////

Instance: patient1001
Description: "An instance of Patient"
InstanceOf: HRexPatientDemographics
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p style=\"border: 1px #661aff solid; background-color: #e6e6ff; padding: 10px;\"><b>Eve Betterhalf</b> female, DoB: 1955-07-23 ( <code>http://example.com/identifiers/patient</code>/1001)</p><hr/><table class=\"grid\"><tr><td style=\"background-color: #f3f5da\" title=\"Known Marital status of Patient\">Marital Status:</td><td colspan=\"3\"><span title=\"Codes: {http://terminology.hl7.org/CodeSystem/v3-MaritalStatus U}\">unmarried</span></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Ways to contact the Patient\">Contact Details:</td><td colspan=\"3\"><ul><li>ph: 781-949-4949(MOBILE)</li><li>222 Burlington Road, Bedford MA 01730</li></ul></td></tr><tr><td style=\"background-color: #f3f5da\" title=\"Languages spoken\">Language:</td><td colspan=\"3\"><span title=\"Codes: {urn:ietf:bcp:47 en-US}\">English (United States)</span> (preferred)</td></tr></table></div>"
* identifier.system = "http://example.com/identifiers/patient"
* identifier.value = "1001"
* name.given = "Eve"
* name.family = "Betterhalf"
* name.text = "Eve Betterhalf"
//* identifier[memberID].type = #MB
//* identifier[employeeID].system = "http://example.com/identifiers/employee"
//* identifier[employeeID].value = "667788"
* gender = Hl7FhirAdminGender#female
* birthDate = "1955-07-23"
* maritalStatus = Hl7V3MS#U "unmarried"
* telecom.system = #phone
* telecom.value = "781-949-4949"
* telecom.use = #mobile
* address.text = "222 Burlington Road, Bedford MA 01730"
* communication.language.coding = LANGVALSET#en-US "English (United States)"
* communication.preferred = true

Instance: prac001
InstanceOf: PCTPractitioner
Description: "An instance of PCTPractitioner"
* identifier[NPI].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[NPI].value = "1234567893"
* name.given = "Patricia"
* name.family = "Primary"
* name.text = "Patricia	Primary"
* name.prefix = "Dr."
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "781-232-3231"
* address.text = "32 Fruit Street, Boston MA 02114"
* extension[PCTEndpoint].valueReference = Reference(endpoint001)

Instance: prac002
InstanceOf: PCTPractitioner
Description: "An instance of PCTPractitioner"
* identifier[NPI].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[NPI].value = "1234567995"
* name.given = "Christine"
* name.family = "Curie"
* name.text = "Christine Curie"
* name.prefix = "Dr."
* active = true
* gender = Hl7FhirAdminGender#female
* telecom.system = #phone
* telecom.value = "781-232-3232"
* address.text = "32 Fruit Street, Boston MA 02114"

Instance: Submitter-Practitioner-1
InstanceOf: PCTPractitioner
Description: "Professional GFE Submitter 1"
* identifier[NPI].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[NPI].value = "6456789016"
* identifier[ETIN].value = "ETIN-20020001"
* identifier[ETIN].system = "http://example.com/us-etin"
* name.given = "Nora"
* name.family = "Ologist"
* name.text = "Nora Ologist"
* active = true
* telecom.system = #phone
* telecom.value = "860-547-3301"
* telecom.use = #work
* telecom[1].system = #email
* telecom[1].value = "csender@GFEServiceHelp.com"
* telecom[1].use = #work

Instance: Submitter-Org-1
InstanceOf: PCTOrganization
Description: "Institutional GFE Submitter 1"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><a name=\"Submitter-Org-1\"> </a><a name=\"hcSubmitter-Org-1\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Organization &quot;Submitter-Org-1&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-davinci-pct-organization.html\">PCT Organization</a></p></div><p><b>identifier</b>: Electronic Transmitter Identification Number/ETIN-10010301</p><p><b>active</b>: true</p><p><b>type</b>: Non-Healthcare Business or Corporation <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-organization-type.html\">Organization type</a>#bus)</span></p><p><b>name</b>: GFE Service Help INC.</p><h3>Contacts</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Purpose</b></td><td><b>Name</b></td><td><b>Telecom</b></td></tr><tr><td style=\"display: none\">*</td><td>GFE-related <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-PCTOrgContactPurposeType.html\">PCT Organization Contact Purpose Type Code System</a>#GFERELATED)</span></td><td>Clara Sender</td><td>ph: 781-632-3209(WORK), <a href=\"mailto:csender@GFEServiceHelp.com\">csender@GFEServiceHelp.com</a></td></tr></table></div>"
* type = $ORGTYPE#bus
* name = "GFE Service Help INC."
* identifier[ETIN].value = "ETIN-10010301"
* active = true
* contact[gfeServiceHotline].name.text = "Clara Sender"
* contact[gfeServiceHotline].telecom.system = #phone
* contact[gfeServiceHotline].telecom.value = "781-632-3209"
* contact[gfeServiceHotline].telecom.use = #work
* contact[gfeServiceHotline].telecom[1].system = #email
* contact[gfeServiceHotline].telecom[1].value = "csender@GFEServiceHelp.com"
* contact[gfeServiceHotline].telecom[1].use = #work

Instance: org1001
InstanceOf: PCTOrganization
Description: "An instance of PCTOrganization as a payer"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><a name=\"org1001\"> </a><a name=\"hcorg1001\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Organization &quot;org1001&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-davinci-pct-organization.html\">PCT Organization</a></p></div><p><b>identifier</b>: Electronic Transmitter Identification Number/ETIN-3200002</p><p><b>active</b>: true</p><p><b>type</b>: Payer <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-organization-type.html\">Organization type</a>#pay)</span></p><p><b>name</b>: Umbrella Insurance Company</p><p><b>telecom</b>: ph: 860-547-5001(WORK)</p><p><b>address</b>: 680 Asylum Street Hartford CT 06155 US </p></div>"
* type = $ORGTYPE#pay "Payer"
* name = "Umbrella Insurance Company"
* identifier[ETIN].value = "ETIN-3200002"
* active = true
* telecom.system = #phone
* telecom.value = "860-547-5001"
* telecom.use = #work
* address.line = "680 Asylum Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "06155"
* address.country = "US"
* address.extension[countrySubdivisionCode].valueCoding = $ISO3166-P2-CSC#US-CT

Instance: org1002
InstanceOf: PCTOrganization
Description: "An instance of PCTOrganization as a healthcare provider"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><a name=\"org1002\"> </a><a name=\"hcorg1002\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Organization &quot;org1002&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-davinci-pct-organization.html\">PCT Organization</a></p></div><p><b>identifier</b>: National provider identifier/1234568095, Tax ID number/TAX-3211001</p><p><b>active</b>: true</p><p><b>type</b>: Healthcare Provider <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-organization-type.html\">Organization type</a>#prov)</span></p><p><b>name</b>: Boston Radiology Center</p><p><b>telecom</b>: ph: 781-232-3200(WORK)</p><p><b>address</b>: 32 Fruit Street Boston MA 02114 US </p></div>"
* type = $ORGTYPE#prov "Healthcare Provider"
* identifier[NPI].value = "1234568095"
* identifier[tin].value = "TAX-3211001"
* name = "Boston Radiology Center"
* active = true
* telecom.system = #phone
* telecom.value = "781-232-3200"
* telecom.use = #work
* address.line = "32 Fruit Street"
* address.city = "Boston"
* address.state = "MA"
* address.postalCode = "02114"
* address.country = "US"
* address.extension[countrySubdivisionCode].valueCoding = $ISO3166-P2-CSC#US-MA

Instance: coverage1001
InstanceOf: PCTCoverage
Description: "An instance of PCTCoverage"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><a name=\"coverage1001\"> </a><a name=\"hccoverage1001\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Coverage &quot;coverage1001&quot; </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-davinci-pct-coverage.html\">PCT Coverage</a></p></div><p><b>Extension Definition for Coverage.kind for Version 5.0</b>: insurance</p><p><b>status</b>: active</p><p><b>subscriberId</b>: PFP123450000</p><p><b>beneficiary</b>: <a href=\"Patient-patient1001.html\">Patient/patient1001</a> &quot; BETTERHALF&quot;</p><p><b>relationship</b>: Self <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-subscriber-relationship.html\">SubscriberPolicyholder Relationship Codes</a>#self)</span></p><p><b>period</b>: 2021-01-01 --&gt; 2022-01-01</p><p><b>payor</b>: <a href=\"Organization-org1001.html\">Organization/org1001</a> &quot;Umbrella Insurance Company&quot;</p><h3>Classes</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Type</b></td><td><b>Value</b></td><td><b>Name</b></td></tr><tr><td style=\"display: none\">*</td><td>Plan <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-coverage-class.html\">Coverage Class Codes</a>#plan)</span></td><td>Premim Family Plus</td><td>Premim Family Plus Plan</td></tr></table><h3>CostToBeneficiaries</h3><table class=\"grid\"><tr><td style=\"display: none\">-</td><td><b>Type</b></td><td><b>Value[x]</b></td></tr><tr><td style=\"display: none\">*</td><td>Copay Percentage <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/5.3.0/CodeSystem-coverage-copay-type.html\">Coverage Copay Type Codes</a>#copaypct)</span></td><td>20</td></tr></table></div>"
* extension[coverage-kind].valueCode = #insurance
* extension[self-pay-declared].valueBoolean = false
* beneficiary = Reference(patient1001)
* relationship = RELATE#self "Self"
* status = #active
* class.name = "Premim Family Plus Plan"
* class.type = COVCLASS#plan "Plan"
* class.value = "Premim Family Plus"
* period.start = "2021-01-01"
* period.end = "2022-01-01"
* payor = Reference(org1001)
//* subscriber = Reference(patient1001)
* subscriberId = "PFP123450000"
* costToBeneficiary.type = COPAYTYPE#copaypct "Copay Percentage"
* costToBeneficiary.valueQuantity.value = 20.00
//* costToBeneficiary.valueMoney.currency = #USD
//* contract = Reference(contract1001)

Instance: contract1001
InstanceOf: Contract
Description: "An instance of Contract"
* applies.start = "2021-01-01"
* applies.end = "2022-01-01"
* subject = Reference(patient1001)
* type = CONTRACTTYPE#healthinsurance "Health Insurance"

Instance: endpoint001
InstanceOf: Endpoint
Description: "An instance of Endpoint"
* status = #active
* payloadType = PAYLOADTYPE#CarePlan
* connectionType = ENDPOINTCONNECTIONTYPE#hl7-fhir-rest
* identifier.system = "http://example.org/enpoint-identifier"
* identifier.value = "epid-1"
* address = "http://fhir3.healthintersections.com.au/open/CarePlan"


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/examples/pct_operation_outcome_instances.fsh

Instance: PCT-AEOB-Adjudication-Error-Example-1
InstanceOf: AEOBAdjudicationError
Description: "PCT AEOB Adjudication Error Example 1"

* issue.severity = #error
* issue.code = #processing
* issue.diagnostics = "Some adjudication error"


Instance: PCT-AEOB-Complete-Example-1
InstanceOf: AEOBComplete
Description: "PCT AEOB Complete Example 1"

* issue.severity = #information
* issue.code = #processing
* issue.diagnostics = "AEOB processing is complete, the AEOB will be sent directly to the patient. No AEOB will be returned to the submitter."


Instance: PCT-GFE-Validation-Error-Example-1
InstanceOf: GFEValidationError
Description: "PCT GFE Validation Error Example 1"

* issue.severity = #error
* issue.code = #processing
* issue.diagnostics = "Claim.priority has minimum cardinality 1 but occurs 0 time(s)."


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/aliases.fsh

//// US Core ////
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreProviderRole = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias:   $USCoreProviderSpecialty = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-specialty

//// Code systems ////
Alias:   NUCC = http://nucc.org/provider-taxonomy
Alias:   $TAXCodeCS = urn:oid:2.16.840.1.113883.4.4
Alias:   $ClaimTypeCS = http://terminology.hl7.org/CodeSystem/claim-type
Alias:   $CMSPOSCS = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set
Alias:   $ISO3166-P1-ALPHA2 = http://terminology.hl7.org/CodeSystem/iso3166-1edition2alpha2
Alias:   $ISO3166-P2-CSC = 	urn:iso:std:iso:3166:-2
Alias:   $CARETEAMROLECS = http://terminology.hl7.org/CodeSystem/claimcareteamrole
Alias:   $ContactPurposeCS = http://terminology.hl7.org/CodeSystem/contactentity-type
Alias:   $USNPI = http://hl7.org/fhir/sid/us-npi
Alias:   $TOBFL-04 = https://www.nubc.org/CodeSystem/TypeOfBill
Alias:   $CPT = http://www.ama-assn.org/go/cpt
Alias:   $CDT = http://ada.org/cdt
Alias:   $RXNORM = http://www.nlm.nih.gov/research/umls/rxnorm
Alias:   $HCPCS = http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
Alias:   $HIPPS = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes
Alias:   $NDC = http://hl7.org/fhir/sid/ndc
Alias:   $V2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias:   $DIAGTYPECS = http://terminology.hl7.org/CodeSystem/ex-diagnosistype
Alias:   $PROCTYPECS = http://terminology.hl7.org/CodeSystem/ex-procedure-type
Alias:   $ADJUDCS = http://terminology.hl7.org/CodeSystem/adjudication
Alias:   $ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias:   $ORGTYPE = http://terminology.hl7.org/CodeSystem/organization-type
Alias:   $PAYEETYPE = http://terminology.hl7.org/CodeSystem/payeetype
Alias:   $PROCPRIORITY = http://terminology.hl7.org/CodeSystem/processpriority
Alias:   $NUBCREVENUE = https://www.nubc.org/CodeSystem/RevenueCodes
Alias:   $CLAIMUSECS = http://hl7.org/fhir/claim-use
Alias:   $DAR = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias:   MSDRG =  https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software
Alias:   APDRG =  http://uri.hddaccess.com/cs/apdrg
Alias:   APRDRG = http://uri.hddaccess.com/cs/aprdrg
Alias:   $HL7AdjudicationCS = 	http://terminology.hl7.org/CodeSystem/adjudication
Alias:   $HL7TaskStatus = http://hl7.org/fhir/task-status

//// Value Sets ////
Alias:   $IdentifierTypeVS   =  http://hl7.org/fhir/ValueSet/identifier-type
Alias:   $OrganizationType = http://hl7.org/fhir/ValueSet/organization-type
Alias:   $CoverageCopayTypeCodes = 	http://hl7.org/fhir/ValueSet/coverage-copay-type
//Alias:   $USCSPECIALTY = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-specialty
Alias:   $USCPROCROLE = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias:   $ISO3166-P1-ALPHA2-VS = http://hl7.org/fhir/ValueSet/iso3166-1-2
Alias:   $ISO3166-P2-CSC-VS = http://terminology.hl7.org/ValueSet/v2-notAllCodes-0347
//Alias:   $REVENUEVS = http://hl7.org/fhir/ValueSet/ex-revenue-center
//Alias:   $ADJUDVS = http://hl7.org/fhir/ValueSet/adjudication
Alias:   $PROCPRIORITYVS = http://hl7.org/fhir/ValueSet/process-priority
Alias:   $AMACPTALL = http://hl7.org/fhir/ValueSet/cpt-all
Alias:   $CLAIMUSEVS = http://hl7.org/fhir/ValueSet/claim-use

//// CARIN-BB ////
Alias:   $AHANUBCRevenueCodes = http://hl7.org/fhir/us/carin-bb/ValueSet/AHANUBCRevenueCodes
Alias:   $AMACPTCMSHCPCSModifiers = http://hl7.org/fhir/us/carin-bb/ValueSet/AMACPTCMSHCPCSModifiers
Alias:   $C4BBEOBInstitutionalProcedureCodes = http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBEOBInstitutionalProcedureCodes
Alias:   $C4BBAdjudication = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication
Alias:   $FDANationalDrugCode = http://hl7.org/fhir/us/carin-bb/ValueSet/FDANationalDrugCode
Alias:   $C4BBSupportingInfoType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType
Alias:   $C4BBSupportingInfoTypeVS = http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBSupportingInfoType
Alias:   $AHANUBCTypeOfBill = http://hl7.org/fhir/us/carin-bb/ValueSet/AHANUBCTypeOfBill

Alias: $WG = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
Alias: $requestedPeriodExtensionUrl = http://hl7.org/fhir/5.0/StructureDefinition/extension-Task.requestedPeriod
Alias: $taskReplacesExtensionUrl = http://hl7.org/fhir/StructureDefinition/task-replaces
Alias: $DARExtensionUrl = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $R5CoverageKind = http://hl7.org/fhir/5.0/StructureDefinition/extension-Coverage.kind

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/capabilitystatement_coordinationplatform.fsh

Instance: davinci-pct-coordination-platform
InstanceOf: CapabilityStatement
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2024-03-23T19:21:32.176+00:00"
* url = "http://hl7.org/fhir/us/davinci-pct/CapabilityStatement/davinci-pct-coordination-platform"
* name = "CoordinationPlatformPatientCostTransparencyCapabilityStatement"
* title = "Patient Cost Transparency Implementation Guide Coordination Platform Capability Statement"
* status = #active
* date = "2024-03-23T14:21:32-05:00"
* publisher = "HL7 International - Financial Management Work Group"
* contact[0].name = "HL7 International - Financial Management Work Group"
* contact[=].telecom[0].system = #url
* contact[=].telecom[=].value = "http://hl7.org/Special/committees/fm"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fmlists@lists.hl7.org"
* description = "Coordination Platform Capability Statement for the Da Vinci Patient Cost Transparency Implementation Guide"
* jurisdiction = urn:iso:std:iso:3166#US
* copyright = "Used by permission of HL7 International, all rights reserved Creative Commons License"
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* format[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* rest.mode = #server



* rest.resource[0].type = #Task
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-coordination-task"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-contributor-task"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type

* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Searching by Logical id of this artifact. Allows retrieval of resources with special search result parameters, such as _summary"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search by task type. For Patient Cost Transparency, this is the either the Coordination Task (gfe-coordination-task) or the GFE Contributor Task (gfe-contributor-task)"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "part-of"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-part-of"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Search by task this task is part of. For Patient Cost Transparency, this is used for searching for Contributor Tasks that are part of a Coordination Task"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "owner"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-owner"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Search by task owner. For Patient Cost Transparency, this is the provider assigned to the Task. Usually a GFE Contributor"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "requester"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-requester"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Search by task requester. For Patient Cost Transparency, this is the provider that is the GFE Coordination requester"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "task-requested-period"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/davinci-pct/SearchParameter/task-requested-period"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Search for a task by when the task should be performed. For Patient Cost Transparency, this is when the GFE Bundle should be provided by"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search by task status"


/*
Is there a definition for summary or some way to identify it is a requirement in a CS?
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_summary"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-summary"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows retrieval of only those elements marked as summary in the base FHIR standard"
*/
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for a task instance by its business identifier"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"

* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL


* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "owner"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL

* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "code"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "status"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "requester"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL

/* Given a Coordination Task get Contributor Tasks for a specific owner */
* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "part-of"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "owner"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL



* rest.resource[+].type = #Bundle
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-coordination-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-collection-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-information-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-missing-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type

* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Searching by Logical id of this artifact. Allows retrieval of resources with special search result parameters, such as _summary"



* rest.resource[+].type = #Organization
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-organization"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type

* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Searching by Logical id of this artifact. Allows retrieval of resources with special search result parameters, such as _summary"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "active"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Any identifier for the organization (not the accreditation issuer's identifier)"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Any identifier for the organization (not the accreditation issuer's identifier)"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A portion of the organization's name or alias"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "address"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Organization-address"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"

* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "active"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL


* rest.resource[+].type = #Practitioner
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-practitioner"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type


* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Searching by Logical id of this artifact. Allows retrieval of resources with special search result parameters, such as _summary"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "identifier"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Practitioner-identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "A practitioner's Identifier"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "name"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Practitioner-name"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "address"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-address"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "A server defined search that may match any of the string fields in the Address, including line, city, district, state, country, postalCode, and/or text"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "telecom"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-telecom"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The value in any kind of contact."

* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "active"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHALL


* rest.resource[+].type = #PractitionerRole
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-practitionerrole"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type


* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Searching by Logical id of this artifact. Allows retrieval of resources with special search result parameters, such as _summary"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "specialty"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-specialty"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Practitioner that is able to provide the defined services for the organization"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "role"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-role"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The practitioner can perform this role at for the organization"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "organization"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The identity of the organization the practitioner represents / acts on behalf of"

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "practitioner"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Practitioner that is able to provide the defined services for the organization."

* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "telecom"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/individual-telecom"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The value in any kind of contact."

* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "active"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "name"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD


* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "active"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "specialty"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD

* rest.resource[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-search-parameter-combination"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "active"
* rest.resource[=].extension[=].extension[+].url = "required"
* rest.resource[=].extension[=].extension[=].valueString = "role"
* rest.resource[=].extension[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].extension[=].extension[=].valueCode = #SHOULD



* rest.resource[=].operation.name = "gfe-retrieve"
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHALL
* rest.resource[=].operation.definition = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/GFE-retrieve"
* rest.resource[=].operation.documentation = "This operation is used by an entity to retrieve a GFE Collection Bundle containing the GFE Bundle(s) and other referenced resources based on a GFE Coordination Task. The only input parameter is the single reference to the GFE Coordination Task resource. The only output is a GFE Collection Bundle. If the task reference is to a Coordination Task, this will return the GFE Collection Bundle. If this task reference is for a GFE Contributor Task, it returns the GFE Bundle, if present. If the Task reference points to a Task resource that is neither a Coordination Task or a GFE Contributor Task, the response is an HTTP error `400 - Bad Request`. If a Task is not found, the response is an HTTP error `400 - Bad Request`. If a GFE Bundle does not exist for an associated GFE Contributor Task, in place of a GFE Bundle, a GFE Missing Bundle is provided in its place (either directly ina response if the referenced task was a GFE Contributor Task or inside the GFE Collection Bundle if the referenced task was a Coordination Task.)"


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/capabilitystatement_coordinationrequester.fsh

Instance: davinci-pct-coordination-requester
InstanceOf: CapabilityStatement
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2024-03-23T19:21:32.176+00:00"
* url = "http://hl7.org/fhir/us/davinci-pct/CapabilityStatement/davinci-pct-coordination-requester"
* name = "CoordinationRequesterPatientCostTransparencyCapabilityStatement"
* title = "Patient Cost Transparency Implementation Guide Coordination Requester Capability Statement"
* status = #active
* date = "2024-03-23T14:21:32-05:00"
* publisher = "HL7 International - Financial Management Work Group"
* contact[0].name = "HL7 International - Financial Management Work Group"
* contact[=].telecom[0].system = #url
* contact[=].telecom[=].value = "http://hl7.org/Special/committees/fm"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fmlists@lists.hl7.org"
* description = "Coordination Requester Capability Statement for the Da Vinci Patient Cost Transparency Implementation Guide"
* jurisdiction = urn:iso:std:iso:3166#US
* copyright = "Used by permission of HL7 International, all rights reserved Creative Commons License"
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* format[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* rest.mode = #client



* rest.resource[+].type = #Task
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-coordination-task"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-contributor-task"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type



* rest.resource[0].type = #Bundle
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-coordination-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-collection-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-information-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-missing-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type




* rest.resource[+].type = #Organization
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-organization"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type


* rest.resource[+].type = #Practitioner
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-practitioner"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type



* rest.resource[+].type = #PractitionerRole
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-practitionerrole"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type



* rest.resource[=].operation.name = "GFERetrieve"
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHALL
* rest.resource[=].operation.definition = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/GFE-retrieve"
* rest.resource[=].operation.documentation = "This operation is used by an entity to retrieve a GFE Collection Bundle containing the GFE Bundle(s) and other referenced resources based on a GFE Coordination Task. The only input parameter is the single reference to the GFE Coordination Task resource. The only output is a GFE Collection Bundle. If the task reference is to a Coordination Task, this will return the GFE Collection Bundle. If this task reference is for a GFE Contributor Task, it returns the GFE Bundle, if present. If the Task reference points to a Task resource that is neither a Coordination Task or a GFE Contributor Task, the response is an HTTP error `400 - Bad Request`. If a Task is not found, the response is an HTTP error `400 - Bad Request`. If a GFE Bundle does not exist for an associated GFE Contributor Task, in place of a GFE Bundle, a GFE Missing Bundle is provided in its place (either directly ina response if the referenced task was a GFE Contributor Task or inside the GFE Collection Bundle if the referenced task was a Coordination Task.)"


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/capabilitystatement_gfeContributor.fsh

Instance: davinci-pct-gfe-contributor
InstanceOf: CapabilityStatement
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2024-03-23T19:21:32.176+00:00"
* url = "http://hl7.org/fhir/us/davinci-pct/CapabilityStatement/davinci-pct-gfe-contributor"
* name = "GFEContributorPatientCostTransparencyCapabilityStatement"
* title = "Patient Cost Transparency Implementation Guide GFE Contributor Capability Statement"
* status = #active
* date = "2024-03-23T14:21:32-05:00"
* publisher = "HL7 International - Financial Management Work Group"
* contact[0].name = "HL7 International - Financial Management Work Group"
* contact[=].telecom[0].system = #url
* contact[=].telecom[=].value = "http://hl7.org/Special/committees/fm"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fmlists@lists.hl7.org"
* description = "GFE Contributor Capability Statement for the Da Vinci Patient Cost Transparency Implementation Guide"
* jurisdiction = urn:iso:std:iso:3166#US
* copyright = "Used by permission of HL7 International, all rights reserved Creative Commons License"
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* format[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* rest.mode = #client



* rest.resource[+].type = #Task
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-coordination-task"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-contributor-task"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type



* rest.resource[0].type = #Bundle
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-information-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type



/*
* rest.resource[+].type = #Organization
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-organization"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type


* rest.resource[+].type = #Practitioner
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-practitioner"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type



* rest.resource[+].type = #PractitionerRole
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-hrex/StructureDefinition/hrex-practitionerrole"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
*/

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/capabilitystatement.fsh

Instance: davinci-pct
InstanceOf: CapabilityStatement
Usage: #definition

* meta.versionId = "1"
* meta.lastUpdated = "2023-03-28T19:21:32.176+00:00"
* url = "http://hl7.org/fhir/us/davinci-pct/CapabilityStatement/davinci-pct"
* name = "PatientCostTransparencyCapabilityStatement"
* title = "Patient Cost Transparency Implementation Guide Payer Capability Statement"
* status = #active
* date = "2023-03-28T14:21:32-05:00"
* publisher = "HL7 International - Financial Management Work Group"
* contact[0].name = "HL7 International - Financial Management Work Group"
* contact[=].telecom[0].system = #url
* contact[=].telecom[=].value = "http://hl7.org/Special/committees/fm"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fmlists@lists.hl7.org"
* description = "Payer capability statement for the Da Vinci Patient Cost Transparency Implementation Guide"
* jurisdiction = urn:iso:std:iso:3166#US
* copyright = "Used by permission of HL7 International, all rights reserved Creative Commons License"
* kind = #requirements
* imports = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* format[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* rest.mode = #server
* rest.resource[0].type = #Bundle
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-aeob-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-collection-bundle"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[=].operation.name = "GFESubmit"
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #SHALL
* rest.resource[=].operation.definition = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/GFE-submit"
* rest.resource[=].operation.documentation = "This operation is used by an entity to submit one or multiple GFEs as a Bundle containing the GFE(s) and other referenced resources for processing. The only input parameter is the single Bundle resource with one or multiple GFE(s) - each of which is based on the Claim resource (along with other referenced resources). The only output is a url for subsequent polling per [async pattern](https://hl7.org/fhir/R5/async-bundle.html). If after polling the response is complete, then the result will either be a single Bundle with the AEOB - which is based on the ExplanationOfBenefit resource, (and other referenced resources) or an OperationOutcome resource indicating the AEOB will be sent directly to the patient."
* rest.resource[+].type = #ExplanationOfBenefit
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-aeob"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[+].type = #Coverage
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-coverage"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[+].type = #Claim
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-professional"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-gfe-institutional"
* rest.resource[=].supportedProfile[=].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[+].type = #Organization
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-organization"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type
* rest.resource[+].type = #Practitioner
* rest.resource[=].type.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].type.extension.valueCode = #SHOULD
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/davinci-pct/StructureDefinition/davinci-pct-practitioner"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #vread
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #patch
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #delete
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-instance
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #history-type

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/codesystems.fsh


CodeSystem: PCTOrgIdentifierTypeCS
Title: "PCT Organization Identifier Type Code System"
Description: "Identifier Type codes for defining the type of identifier payers and providers assign to organizations. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #ETIN "Electronic Transmitter Identification Number" "Electronic Transmitter Identification Number"
* #payerid "Payer ID" "Payer ID used in HIPAA covered claims submission transactions"
* #naiccode "NAIC Code" "An identifier assigned to licensed and authorized insurance companies by the National Association of Insurance Commissioners (NAIC)"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

// CodeSystem: PCTCoverageCopayTypeCS
// Title: "PCT Coverage Copay Type Code System"
// Id: pct-coverage-copay-type
// Description: "Defining codes for the classification of insurance coverage copay types for patient"
// * ^caseSensitive = true
// * #pharmacy-deductible "Pharmacy-Deductible" "The accumulated amount of patient payment before the coverage begins to pay for medicines."
// * #pharmacy-maxoutofpocket "Pharmacy-Maximum Out Of Pocket" "The maximum amout of payment for medicines which a patient, or family, is expected to incur - typically annually."
// * ^copyright = "This CodeSystem is not copyrighted."
// * ^experimental = false

CodeSystem: PCTDiagnosisType
Title: "PCT Diagnosis Type"
Description: "Defining codes for the classification of diagnosis types. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #patientReasonForVisit "Patient's Reason for Visit" "Identifies the patient's reason for the outpatient institutional visit"
//* #externalCauseOfInjury "External Cause of Injury"	  "Required when an external cause of injury is needed to describe the injury"
* #other "Other" "Required when other conditions coexist or develop subsequently during the treatment"
//* #secondary "Secondary" "Required when necessary to report additional diagnoses on professional and non-clinician claims"
* #externalCauseOfInjury "External Cause of Injury" "Required when an external cause of injury is needed to describe the injury"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTProcedureType
Title: "PCT Procedure Type"
Description: "Defining codes for the classification of procedure types. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #principal "Pricipal" "Principal procedure information"
* #procedureRequiringAnesthesia  "Surgical procedure requiring anesthesia" "Identifies the surgical procedure requiring anesthesia"
* #other "Other" "Other procedure information"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTSubjectToMedicalMgmtReasonCS
Title: "PCT Subject-To-Medical-Management Reason Code System"
//Id: pct-medical-mgmt-condition-type
Description: "Defining codes for the classification of subject-to-medical-management reason types. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #concurrent-review "Concurrent Review" "Concurrent Review"
* #prior-auth "Prior Authorization" "Prior Authorization"
* #step-therapy "Step Therapy" "Step Therapy"
* #fail-first "Fail-First" "Fail-First"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTSupportingInfoType
Title: "PCT GFE Supporting Info Type Code System"
Description: "Defining codes for the classification of the supplied supporting information. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #cmspos "CMS Place of Service" "Place of Service Codes are two-digit codes placed on health care professional claims to indicate the setting in which a service was provided. The Centers for Medicare & Medicaid Services (CMS) maintain POS codes used throughout the health care industry."
* #typeofbill "Type of Bill"  "UB-04 Type of Bill (FL-04) provides specific information for payer purposes."
* #servicefacility "Service Facility" "The facility where the service occurred. Examples include hospitals, nursing homes, laboratories or homeless shelters."
* #drg "DRG" "DRG (Diagnosis Related Group), including the code system, the DRG version and the code value"
* #pointoforigin "Point of Origin" "UB-04 Source of Admission (FL-15) identifies the place where the patient is identified as needing admission to a facility."
* #admtype "Admission Type" "UB-04 Priority of the admission (FL-14) indicates, for example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled."
* #claimFrequency "Claim Frequency" "Claim frequency - uses the last digit of the NUBC type of billing code."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTGFEFrequency
Title: "PCT GFE Frequency Code System"
Description: "These codes are derived from the NUBC Uniform Billing (UB-04) Type of Bill (TOB) codes.  The fourth digit of the TOB code defines the frequency of the bill for the institutional and electronic professional claim. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = false
* #1 "1"
* #7 "7"
* #8 "8"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTCareTeamRole
Title: "PCT Care Team Role"
Description: "PCT code system for defining the functional roles of the care team members. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #attending "Attending provider" "The attending physician."
* #referring "Referring provider" "The referring provider."
* #operating "Operating provider" "The operating physician."
* #otheroperating "Other Operating" "The other operating physician."
* #purchasedservice "Purchased service" "The provider from which a service was purchased by another provider."
* #rendering "Rendering provider" "The rendering/performing provider."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTOrgContactPurposeType
Title: "PCT Organization Contact Purpose Type Code System"
Description: "Organization Contact Purpose Type Code System. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #GFERELATED "GFE-related" "Contact details for dealing with issues related to Good Faith Estimate (GFE)."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTAdjudicationCategoryCS
Title: "PCT Adjudication Category CodeSystem"
Description: "Codes indicating the type of adjudication information provided. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* ^experimental = false
* #billingnetworkstatus "Billing Network Status" "Indicates the Billing Provider network status in relation to the patient's coverage."
* #renderingnetworkstatus "Rendering Network Status" "Indicates the Rendering Provider network status in relation to the patient's coverage."
* #benefitpaymentstatus "Benefit Payment Status" "Indicates the in network or out of network payment status of the claim."
* #adjustmentreason "Adjustment Reason" "Defines the adjudication slice to identify the adjustment reason"
* #medicalmanagement "Medical Management" "Defines the adjudication slice to identify medical management"
* #memberliability "Member Liability" "Defines the adjudication slice to identify member liability"

CodeSystem: PCTAdjudication
Title: "PCT Adjudication Code System"
Description: "Describes the various amount fields used when payers receive and adjudicate a claim.  It complements the values defined in http://terminology.hl7.org/CodeSystem/adjudication. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* #coinsurance "Co-insurance" "The amount the insured individual pays, as a set percentage of the cost of covered medical services, as an out-of-pocket payment to the provider. Example: Insured pays 20% and the insurer pays 80%."
* #noncovered "Noncovered" "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* #memberliability "Member liability" "The amount of the member's liability."
* #discount "Discount" "The amount of the discount"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: PCTIdentifierType
Title:  "PCT Identifier Type"
Description: "Defining codes for types of identifiers. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* #INTER "Intermediary System Identifier" "Identifier assigned by an intermediary system"
* #uc "Unique Claim ID" "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"

CodeSystem: PCTNetworkStatusCS
Id: PCTNetworkStatusCS
Title: "PCT Network Status"
Description: "Defining codes for network status.  This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* #innetwork "In Network" "Indicates an in network status in relation to a patient's coverage"
* #outofnetwork "Out Of Network" "Indicates a not in network status in relation to a patient's coverage"
* #negotiated "Negotiated Service or Product" "Indicates a special negotiated status in relation to a patient's coverage"
* #other "Other" "Indicates other network status or when a network does not apply"

CodeSystem: PCTAEOBProcessNoteCS
Id: PCTAEOBProcessNoteCS
Title: "PCT AEOB Process Note Code System"
Description: "Defining codes for process notes.  This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* #disclaimer "Disclaimer" "Indicates a disclaimer type of process note"
* #adjudication-note "Adjudication Note" "Indicates an adjudication note type of process note"
* #other "Other" "Indicates other type of AEOB process note"

CodeSystem: PCTFinancialType
Title: "PCT Financial Type Code System"
Description: "Financial Type codes for benefitBalance.financial.type. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* #allowed "Allowed" "The maximum amount a plan will pay for a covered health care service. May also be called \"payment allowance\", or \"negotiated rate\"."
* #coinsurance "Co-Insurance" "The amount the insured individual pays, as a set percentage of the cost of covered services, as an out-of-pocket payment to the provider. Example: Insured pays 20% and the insurer pays 80%."
* #copay "CoPay"  "A fixed amount ($20, for example) the insured individual pays for a covered health care service after the deductible is paid."
* #deductible "Deductible" "The amount the insured individual pays for covered health care services before the insurance plan starts to pay."
* #eligible "Eligible Amount" "Amount of the charge which is considered for adjudication."
* #memberliability "Member Liability" "The amount of the member's liability."
* #noncovered "Noncovered" "The portion of the cost of the service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* #out-of-pocket-maximum "Out-of-Pocket Maximum" "The most the insured individual has to pay for covered services in a plan year. After this amount is spent on deductibles, copayments, and coinsurance for in-network care and services, the health plan pays 100% of the costs of covered benefits."
* #visit "Visit" "A medical visit means diagnostic, therapeutic, or consultative services provided to a client by a healthcare professional in an outpatient setting."
* #penalty "Penalty" "Benefit penalty is an approach used by the insurance company to reduce their payment on a claim when the patient or medical provider does not satisfy the rules of the health plan. Benefit penalties may occur when a pre-authorization is not obtained, for example."

CodeSystem: PCTEstimateTypeSummaryCSTemporaryTrialUse
Title: "PCT Estimate Type Code System"
Description: "Defining the code for a estimate (GFE or AEOB) type summary.  This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^caseSensitive = true
* #estimate-summary "Estimate Summary"
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false

CodeSystem: PCTGFERequestTaskCSTemporaryTrialUse
Title: "PCT GFE Request Task Codes Code System"
Description: "Defining codes for defining GFE request types. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* #gfe-coordination-task "GFE Coordination Task" "The Coordination Task representing the general request for a Good Faith Estimate (GFE) from all potential GFE contributors."
* #gfe-contributor-task "GFE Contributor Task" "The Contributor Task representing a provider specific request for a Good Faith Estimate (GFE)."
* #scheduled-request "Scheduled Service Request" "Request of a GFE for a scheduled service."
* #nonscheduled-request "Nonscheduled Service Request" "Request of a GFE for a scheduled service, such as a request from a patient."


CodeSystem: PCTTaskStatusReasonCSTemporaryTrialUse
Title: "PCT GFE Request Task Status Reason Code Code System"
Description: "Defining codes for defining GFE request task status reason types. This CodeSystem is currently defined by this IG, but is anticipated to be temporary. The concepts within are expected to be moved in a future version to a more central terminology specification such as THO, which will result in a code system url change and possibly modified codes and definitions."
* ^copyright = "This CodeSystem is not copyrighted."
* ^experimental = false
* ^caseSensitive = true
* #fulfilled "Fulfilled" "The GFE Request was fulfilled."
* #time-limit-reached "Time Limit Reached" "The time period to provide the GFE has been reached."
* #no-longer-needed "No Longer Needed" "The GFE is not longer needed."
* #service-cancelled "Service Cancelled" "Scheduled service was cancelled."
* #requires-new-request "Requires New Request" "Changes need to be made to the request which require the current request be cancelled and a new request be made."
* #patient-declined "Patient Declined" "Patient has declined to receive a GFE or AEOB."
* #schedule "Schedule" "Provider cannot participate due to proposed schedule dates and or times."
* #service-not-provided "Service Not Provided" "Services or Products being requested are not available from this GFE contributor."

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/extensions.fsh

//////////////////////////////////////////
//// Standalone Extension Definitions ////
//////////////////////////////////////////

//// For PCTGFEProfessional/PCTGFEProfessional Profile ////
/* Remove GFE Submitter
Extension: GFESubmitter
Id: gfeSubmitter
Description: "This extension is used to indicate the scheduling entity that submits the GFE to provide a collection of services to a payer for the creation of an Advanced EOB. All submitters (Practitioners and Organizations) must have an ETIN."
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* value[x] only Reference(PCTOrganization or PCTPractitioner)
* value[x] ^short = "The scheduling entity submitting the GFE"
* valueReference 1..1
*/

Extension: GFEDisclaimer
Id: gfeDisclaimer
Description: "Disclaimers the patient should be made aware of regarding the providers estimate"
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* value[x] only string
* valueString 1..1

/*
The use of this extension went away before publication, leaving it orphaned, but was not removed.
Extension: PlannedPeriodOfService
Id: plannedPeriodOfService
Description: "This extension is used to provide the planned date or dates of service."
* value[x] only date or Period

Extension: RequestInitiationDateTime
Id: requestInitiationDateTime
Description: "This extension expresses the date and time from which the request is being initiated. For scheduled services, this is the date and time of scheduling. For unscheduled services, this is the date and time the request is being made (possibly by the patient)."
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* value[x] only dateTime
*/
Extension: GFEServiceLinkingInfo
Id: gfeServiceLinkingInfo
Description: "This extension is used to provide the GFE Service Linking Information. This allows implementers to have the same identifier on multiple GFEs that are part of one period of care's services. This would be needed for some of the workflow options that businesses may decide to use."
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* extension contains
    plannedPeriodOfService 0..* MS and
    linkingIdentifier 0..* MS
* extension[plannedPeriodOfService] ^short = "This could be the scheduled date(s) of a particular admission/service or a series of admissions/services."
* extension[plannedPeriodOfService] ^definition = "This could be the scheduled date(s) of a particular admission/service or a series of admissions/services."
* extension[plannedPeriodOfService].value[x] 1..1
* extension[plannedPeriodOfService].value[x] only date or Period
* extension[linkingIdentifier] ^short = "An identifier assigned to a particular service or series of services, generally by a scheduling facility, to be used by all providers and practitioners who will be submitting a GFE for a patient's care."
* extension[linkingIdentifier] ^definition = "An identifier assigned to a particular service or series of services, generally by a scheduling facility, to be used by all providers and practitioners who will be submitting a GFE for a patient's care."
* extension[linkingIdentifier].value[x] 1..1
* extension[linkingIdentifier].value[x] only string

Extension: ReferralNumber
Id: referralNumber
Description: "This extension is used to provide the Referral Number."
* ^context[+].type = #element
* ^context[=].expression = "Claim.referral"
* value[x] 1..1
* value[x] only string



Extension: ProviderEventMethodology
Id: providerEventMethodology
Description: "This extension is used for indicating the method a provider used to group services, and those providing such services, beyond what may be indicated through DRGs that the payer or patient may find helpful (e.g. grouping services by a standardized episode of care definition). This is provider generated text and should not be modified by the payer."
* ^context[+].type = #element
* ^context[=].expression = "Claim"
* value[x] 1..1
* value[x] only string

Extension: GFEBillingProviderLineItemCtrlNum
Id: gfeBillingProviderLineItemCtrlNum
Description: "This extension is used by the provider to assign a unique identifier to this item. The intent of this element is to allow the provider to assign something other than 'line number' for their purposes (e.g. tracking and troubleshooting)."
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* value[x] 1..1
* value[x] only Identifier

Extension: GFEConsentForBalanceBilling
Id: gfeConsentForBalanceBilling
Description: "If the provider has received a written consent form indicating a patient has agreed to waive their protections and pay up to the full cost for the out-of-network item or service, this will be “true”. If the provider has not received written consent, this will be “false”. This is an attestation only. The billing provider is legally required to maintain the written notice and consent form."
* ^context[+].type = #element
* ^context[=].expression = "Claim.provider"
* value[x] 1..1
* value[x] only boolean

// Extension: ProductOrServiceBillingCode
// Description: "ProductOrService Billing Code"
// * value[x] only Coding
// * value[x] from PCTGFEBillingCodeVS (extensible)

// Extension: ProductOrServiceOtherCharge
// Description: "ProductOrService Other Charge"
// ////WORKAROUND for this error: org.apache.commons.lang3.NotImplementedException: type org.hl7.fhir.r5.model.Money not handled - should not be here
// //* value[x] only Money
// * value[x] only decimal

// Extension: CompoundDrugLinkingNumber
// Id: compoundDrugLinkingNum
// Description: "This extension is used to provide the Compound Drug Linking Number."
// * value[x] only id or integer


//// For PCTAdvancedEOB Profile ////

// Extension: ProviderContractingStatus
// Id: contracting-status
// Title: "Provider Contracting Status"
// Description: "Provider Contracting Status is an extentsion ..."
// * value[x] only Coding
// * value[x] from NetworkTypeCodes (required)

// Extension: ProviderContractingRate
// Id: contracting-rate
// Title: "Provider Contracting Rate"
// Description: "Provider Contracting Rate is an extentsion ..."
// ////WORKAROUND for this error: org.apache.commons.lang3.NotImplementedException: type org.hl7.fhir.r5.model.Money not handled - should not be here
// //* value[x] only Money
// * value[x] only decimal

Extension: OutOfNetworkProviderInfo
Id: inNetworkProviderOptionsLink
Title: "In Network Provider Options Link"
Description: "This extension provides a payer link to information enabling the patient to find providers that are in network for the requested services."
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* value[x] 1..1
* value[x] only url

Extension: GFEReference
Id: gfeReference
Title: "GFE Reference"
Description: "This extension is used to reference the GFE submitted by an entity that started the process for obtaining an Advanced EOB."
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* value[x] 1..1
* value[x] only Reference(PCTGFEBundle)

// Extension: PCTProposedDateOfService
// Id: proposed-date-of-service
// Title: "Proposed Date of Service"
// Description: "Proposed Date of Service is an extentsion ..."
// * value[x] only date or Period

//TODO: make sure date is full date

Extension: SubjectToMedicalMgmt
Id: subjectToMedicalMgmt
Title: "Subject To Medical Management"
Description: "This extension is used to provide a reason to explain how the estimate may change subject to medical management."
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.adjudication"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.item.adjudication"
* value[x] 1..1
* value[x] only CodeableConcept or string
* value[x] ^short = "The estimate may change subject to medical management with this reason"
* valueCodeableConcept from PCTSubjectToMedicalMgmtReasonVS (extensible)

// Extension: SubjectToMedicalMgmtDisclaimer
// Id: subject-to-medical-mgmt-disclaimer
// Title: "Subject To Medical Management Disclaimer"
// Description: "Subject To Medical Management is an extentsion ..."
// * value[x] only Coding
// //* extension[subjectToMedicalMgmt].valueCoding from PCTSubjectToMedicalMgmtDisclaimerVS (extensible)
// * value[x] ^short = "The estimate may change subject to medical management"

// Extension: Disclaimer
// Id: disclaimer
// Title: "Disclaimer"
// Description: "This extension allows the payer to declare a disclaimer concerning the estimated costs provided in the AEOB."
// * value[x] 1..1
// * value[x] only string or CodeableConcept or url or markdown
// * value[x] ^short = "A disclaimer declared by the payer concerning the estimated costs provided in the AEOB"

//* value[x] from PCTEstimateOnlyDisclaimerVS (extensible)

// Extension: ExpirationDate
// Id: expirationDate
// Title: "Expiration Date"
// Description: "This extension is used to indicate a specific date after which the issued AEOB is considered obsolete."
// * value[x] 1..1
// * value[x] only date
// * value[x] ^short = "The AEOB is considered obsolete after this date"

Extension: ProcessNoteClass
Id: processNoteClass
Title: "ProcessNote Class"
Description: "This extension is used to indicate a the class of AEOB Claim process notes"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.processNote"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from PCTAEOBProcessNoteVS (required)
* value[x] ^short = "The class of AEOB process note"


Extension: RemainingBenefit
Id: remaining-benefit
Title: "Benefit Remaining"
Description: "The quantity of the benefit remaining to date."
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.benefitBalance.financial"
* value[x] 1..1 MS 
* value[x] only unsignedInt or Money //or boolean or integer or Range or Ratio or SampledData or time or dateTime or Period
//* value[x] ^slicing.discriminator.type = #type
//* value[x] ^slicing.discriminator.path = "$this"
//* value[x] ^slicing.ordered = false
//* value[x] ^slicing.rules = #open

//* value[x] ^definition = "The information determined as a result of making the observation, if the information has a simple value."
//* value[x] ^comment = "An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](http://hl7.org/fhir/R4/observation.html#notes) below."
//* value[x] ^requirements = "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations."
//* value[x] ^base.path = "Observation.value[x]"
//* value[x] ^base.min = 0
//* value[x] ^base.max = "1"
* value[x] ^type[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* value[x] ^type[=].extension.valueBoolean = true
* value[x] ^type[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* value[x] ^type[=].extension.valueBoolean = true

/** value[x].valueCodeableConcept only CodeableConcept

* value[x].valueCodeableConcept ^sliceName = "valueCodeableConcept"
* value[x].valueCodeableConcept ^base.path = "Observation.value[x]"
* value[x].valueCodeableConcept ^base.min = 0
* value[x].valueCodeableConcept ^base.max = "1"
* value[x].valueCodeableConcept ^mustSupport = true
* value[x].valueCodeableConcept ^isModifier = false
* value[x].valueCodeableConcept ^binding.description = "SNOMED CT for coded results"
*/
//* value[x] 1..1
//* value[x] only unsignedInt or Money
//* valueUnsignedInt and valueMoney MS
//* valueMoney MS


/*
* value[x] ^slicing.discriminator.type = #type
* value[x] ^slicing.discriminator.path = "$this.resolve()"
* value[x] ^slicing.rules = #open
* value[x] contains 
    valueMoney named valueMoney 0..* MS and
    valueUnsignedInt named valueUnsignedInt 0..* MS
//* value[x] contains money MS
//* author[valueMoney] MS
//* author[valueUnsignedInt] MS
*/

//* value[x] ^slicing.discriminator.type = #type
//* value[x] ^slicing.discriminator.path = "$this"
//* value[x] ^slicing.ordered = false
//* value[x] ^slicing.rules = #open
//* valueMoney ^mustSupport = true
//* valueUnsignedInt ^mustSupport = true


/*
* value[x] ^slicing.discriminator.type = #type
* value[x] ^slicing.discriminator.path = "$this"
* value[x] ^slicing.ordered = false
* value[x] ^slicing.rules = #open
//* value[x] ^short = "Actual result"
//* value[x] ^definition = "The information determined as a result of making the observation, if the information has a simple value."
//* value[x] ^comment = "An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](http://hl7.org/fhir/R4/observation.html#notes) below."
//* value[x] ^requirements = "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations."
//* value[x] ^base.path = "Observation.value[x]"
//* value[x] ^base.min = 0
//* value[x] ^base.max = "1"
/*
* value[x] ^type[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* value[x] ^type[=].extension.valueBoolean = true
* value[x] ^type[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* value[x] ^type[=].extension.valueBoolean = true
*/
* value[x] ^short = "Benefit Remaining"
* ^context.type = #element
* ^context.expression = "ExplanationOfBenefit.benefitBalance.financial"


/// For PCTOrganization Profile ////

Extension: ProviderTaxonomy
Id: providerTaxonomy
Description: "This extension is used to indicate the taxonomy code of the provider."
* ^context[+].type = #element
* ^context[=].expression = "Claim.provider"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from $USCPROCROLE (extensible)

Extension: CountrySubdivisionCode
Id: countrySubdivisionCode
Description: "This extension is used to provide the Country Subdivision Code - from Part 2 of ISO 3166."
* ^context[+].type = #element
* ^context[=].expression = "Address"
* value[x] 1..1
* value[x] only Coding
* value[x] from $ISO3166-P2-CSC-VS (extensible)


//// For PCTPractitioner Profile ////

Extension: PCTEndpoint
Id: endpoint
Description: "This extension is used to provide an endpoint."
* ^context[+].type = #element
* ^context[=].expression = "Practitioner"
* value[x] 1..1
* value[x] only Reference(Endpoint)

Extension: ServiceDescription
Id: serviceDescription
Title: "Service Description"
Description: "This extension is used to communicate a plain language description of the procedure, product, or service."
* ^context[+].type = #element
* ^context[=].expression = "Claim.procedure"
* ^context[+].type = #element
* ^context[=].expression = "Claim.item"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit"
* ^context[+].type = #element
* ^context[=].expression = "ExplanationOfBenefit.item"
* value[x] 1..1
* value[x] only string
* value[x] ^short = "The description of a procedure, product, or service"


Extension: PlannedServicePeriod
Id: plannedServicePeriod
Title: "Planned Service Period"
Description: "Planned period of service the request is about"
* ^context[+].type = #element
* ^context[=].expression = "Task"
* value[x] 1..1
* value[x] only Period
* valuePeriod.start 1..1
* valuePeriod.end MS
* value[x] ^short = "Planned period of service the request is about"


Extension: RequestInitiationTime
Id: requestInitiationTime
Title: "Request Initiation Time"
Description: "Instant from which the request is being initiated."
* ^context[+].type = #element
* ^context[=].expression = "Task"
* value[x] 1..1
* value[x] only instant
* value[x] ^short = "Estimate Request instant"
* value[x] ^comment = "Instant from which the request is being initiated. For patient initiated requests, this is the date and time the patient or their representative made the request. For a newly scheduled service, this represents the time of the scheduling activity (as opposed to the planned time of service). For all other requests, the time of the event that triggered the need for an estimate."


Extension: SelfPayDeclared
Id: selfPayDeclared
Title: "Self-Pay Declared"
Description: "Requester has explicitly declared self-pay."
* ^context[+].type = #element
* ^context[=].expression = "Coverage"
* value[x] 1..1
* value[x] only boolean
* value[x] ^short = "Indication if requester has declared self-pay coverage"
* value[x] ^comment = "Used to express that the request has declared that items are services rendered are to be self-pay and not covered by or submitted directly to an insurance plan."


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/operation_outcomes.fsh

Profile: AEOBComplete
Parent: OperationOutcome
Id: davinci-pct-aeob-complete
Title: "PCT AEOB Complete"
Description: "OperationOutcome returned from the gfeSubmit operation when the AEOB process is complete but no AEOB will be returned to the submitter (i.e. it was sent only to the patient)"

* issue.severity = #information
* issue.code = #processing
* issue.diagnostics = "AEOB processing is complete, the AEOB will be sent directly to the patient. No AEOB will be returned to the submitter."

Profile: AEOBAdjudicationError
Parent: OperationOutcome
Id: davinci-pct-aeob-adjudication-error
Title: "PCT AEOB Adjudication Error"
Description: "OperationOutcome returned from the gfeSubmit operation when there are adjudication errors during AEOB processing"

* issue.severity = #error
* issue.code = #processing
* issue.diagnostics 1..1

Profile: GFEValidationError
Parent: OperationOutcome
Id: davinci-pct-gfe-validation-error
Title: "PCT GFE Validation Error"
Description: "OperationOutcome returned from the gfeSubmit operation when the GFE Bundle fails FHIR validation"

* issue.severity = #error
* issue.code = #processing

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_advanced_eob_summary.fsh

Profile: PCTAdvancedEOBSummary
Parent: ExplanationOfBenefit
Id: davinci-pct-aeob-summary
Title: "PCT Advanced EOB Summary"
Description: "This profile is used for exchanging a summary of Explanation of Benefit (EoB) information, including costs and benefits, of all of the Advanced EoB data contained within an Advance EoB Bundle."
* insert TrialUseArtifact1

/* 

Questions
	Do we need to have references to the AEOBs that the summary is referencing OR is it reasonably implied by the context of being in an AEOB Bundle? How about when it leaves the bundle, e.g. for processing)
	Do we keep an out of network provider extension (where to get more info on network providers)?
	EOB Resource requires one provider. This would have to be addressed for a summary. What is the preferred method. Data Absent reason extension?
	Should we disallow all elements that likely do not apply to a summary
	How should we handle the total period of service (Is billable Period appropriate? Question for FM?)
	Do we want to capture potential items of interest like one or more claims not covered under in network or one or more claims requiring medical management? Or perhaps instead say how much is covered in network, how much is out of network, etc.)
*/

* extension contains ServiceDescription named serviceDescription 0..1 MS
* extension contains OutOfNetworkProviderInfo named outOfNetworkProviderInfo 0..1 MS

* insert IdentifierSlicing
* identifier contains 
	INTER 0..* 
* identifier[INTER].type = PCTIdentifierType#INTER "Intermediary System Identifier"
* identifier[INTER] ^short = "Intermediary System Identifier"

* type = PCTEstimateTypeSummaryCSTemporaryTrialUse#estimate-summary
* subType 0..0
* use = $CLAIMUSECS#predetermination "predetermination"


* patient only Reference(HRexPatientDemographics)
* billablePeriod 1..1
* billablePeriod ^short = "The full Period of Care for all services or products included in the estimate from the first event to the last event."

* enterer 0..0

* insurer only Reference(PCTOrganization)

// Multiple providers. 
* provider.reference 0..0
* provider.type 0..0
* provider.identifier 0..0
* provider.display 0..0
* provider.extension contains http://hl7.org/fhir/StructureDefinition/data-absent-reason named dataAbsentReason 1..1
* provider.extension[dataAbsentReason].valueCode = #not-applicable

* priority
* priority from $PROCPRIORITYVS (required)

* fundsReserveRequested 0..0
* fundsReserve 0..0

* prescription 0..0
* originalPrescription 0..0
* payee 0..0
* referral 0..0

* facility 0..0
* claim 0..0

* preAuthRef 0..0
* preAuthRefPeriod 0..0
* precedence 0..0

* insurance.coverage only Reference(PCTCoverage)

* benefitPeriod 1..1

* created ^short = "The date and time this summary was generated."
* created ^comment = "The date and time this summary was generated based on what was known at that point in time."

* supportingInfo 0..0

* item 0..0
* addItem 0..0
* adjudication 0..0


* total 1..*
* insert TotalSlicing
* total.category from PCTTotal (extensible)
* total contains
	submitted 1..1 MS and
	memberliability 0..1 MS and
	innetwork 0..1 MS and
	outofnetwork 0..1 MS and
	noncovered 0..1 MS and
	negotiated 0..1 MS and
	eligible 0..1 MS and
	benefit 0..1 MS



* total[submitted].category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* total[submitted] ^short = "Total provider submitted amount"

* total[memberliability] ^short = "Total member liability - Must include in non-zero total across all AEoBs"
* total[memberliability].category = PCTAdjudicationCategoryCS#memberliability

* total[innetwork] ^short = "Total in network amount - Must include in non-zero total across all AEoBs"
* total[innetwork].category = PCTNetworkStatusCS#innetwork

* total[outofnetwork] ^short = "Total out of network amount - Must include in non-zero total across all AEoBs"
* total[outofnetwork].category = PCTNetworkStatusCS#outofnetwork

* total[negotiated] ^short = "Total negotiated amount - Must include in non-zero total across all AEoBs"
* total[negotiated].category = PCTNetworkStatusCS#negotiated


* total[noncovered] ^short = "Total noncovered amount - Must include in non-zero total across all AEoBs"
* total[noncovered].category = PCTAdjudication#noncovered



* total[eligible] ^short = "Total eligible amount - Must include in non-zero total across all AEoBs"
* total[eligible].category = http://terminology.hl7.org/CodeSystem/adjudication#eligible
* total[eligible] ^comment = "Eligible is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."

* total[benefit] ^short = "Total benefit amount - Must include in non-zero total across all AEoBs"
* total[benefit].category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
* total[benefit] ^comment = "Benefit is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."

* payment 0..0


* processNote 1..*
* processNote ^short = "Disclaimers go here. Notes should be clear and as specific to the situation at hand as possible. This may include a note about out of network providers or prior authorization."
* processNote.extension contains ProcessNoteClass named processNoteClass 0..1


* benefitBalance 1..*
* benefitBalance.category 1..1 
* benefitBalance.category from PCTBenefitBalanceCategoryVS 
* benefitBalance.unit 1..1 
* benefitBalance.unit from http://hl7.org/fhir/ValueSet/benefit-unit (required)
* benefitBalance.term 1..1
* benefitBalance.term from 	http://hl7.org/fhir/ValueSet/benefit-term (required)
* benefitBalance.financial 1..*
* benefitBalance.financial.type 1..1
* benefitBalance.financial.type from PCTFinancialTypeVS
* benefitBalance.financial.allowed[x] 1..1
* benefitBalance.financial.allowedMoney 1..1
* benefitBalance.financial.used[x] 1..1
* benefitBalance.financial.usedMoney 1..1





---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_advanced_eob.fsh

Profile: PCTAdvancedEOB
Parent: ExplanationOfBenefit
Id: davinci-pct-aeob
Title: "PCT Advanced EOB"
Description: "The No Surprises Act requires that group health plans and insurers provide advance cost estimates, called advanced explanations of benefits (advanced EOBs), for scheduled services. This profile is used for exchanging the Advanced EOB data."
* insert TrialUseArtifact
* obeys pct-aeob-1 and pct-aeob-2 and pct-aeob-3

* extension contains GFEReference named gfeReference 1..*
* extension[gfeReference] ^short = "The GFE Bundle submitted by an entity that started the process for obtaining an Advanced EOB."
* extension contains ServiceDescription named serviceDescription 0..1 MS
* extension[serviceDescription] ^condition = "pct-aeob-1"
* extension contains OutOfNetworkProviderInfo named outOfNetworkProviderInfo 0..1 MS

* insert IdentifierSlicing
* identifier contains 
	INTER 0..* and 
	uniqueclaimid 1..1 
* identifier[INTER].type = PCTIdentifierType#INTER "Intermediary System Identifier"
* identifier[INTER] ^short = "Intermediary System Identifier"
* identifier[uniqueclaimid] ^short = "Unique Claim Identifier"
* identifier[uniqueclaimid].type = PCTIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid] ^short = "Unique Claim ID"

* type from PCTAEOBTypeVS (required)
* use = $CLAIMUSECS#predetermination "predetermination"


* patient only Reference(HRexPatientDemographics)

* insurer only Reference(PCTOrganization)

// need provider's TAX ID
* provider only Reference(PCTPractitioner or PCTOrganization)
// * provider.extension contains ProviderContractingStatus named contractingStatus 1..1 MS
// * provider.extension contains ProviderContractingRate named contractingRate 0..1 MS
//* provider.extension contains OutOfNetworkProviderInfo named outOfNetworkProviderInfo 0..1 MS

* priority MS
* priority from $PROCPRIORITYVS (required)


* claim 1..1
* claim.identifier 1..1
* claim.identifier ^short = "GFE identifier of the originally submitted claim"
* claim.identifier ^definition = "Matches the provider submitted GFE claim.identifier this Advance ExplanationOfBenefit is addressing where identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203|PLAC (with the identifier.value and identifier.system matching the original GFE identifier values)."
* claim.identifier.system MS
* claim.identifier.value 1..1


* insurance.coverage only Reference(PCTCoverage)

* benefitPeriod 1..1

* created ^short = "The date and time this estimate was calculated."
* created ^comment = "The date and time this estimate was calculated based on what was known at that point in time."

* item 1..*
* item.extension contains ServiceDescription named serviceDescription 0..1 MS
//* item.extension[serviceDescription] obeys pct-aeob-1
* item.extension[serviceDescription] ^condition = "pct-aeob-1"
//* item.revenue MS
* item.revenue from PCTGFEItemRevenueVS (required)
* item.modifier 0..4 MS
* item.modifier from PCTGFEItemCptHcpcsVS (required)
* item.productOrService from USClaimMedicalProductOrServiceCodes (required)
// Need to make item.productOrService required when item.revenue is provided ??
//* item.productOrService obeys EOB-out-inst-item-productorservice
//* item.productOrService ^comment = "Put the comment here for item.productOrService here"

* item.serviced[x] 1..1
* item.serviced[x] ^short = "This is the planned or estimated date(s)s of service"
* item.serviced[x] ^definition = "This is the planned or estimated dates of service. Use Revenue code to determine inpatient stays if needed for adjudication"

* item.quantity MS

//* item.net 1..1 MS
//* item.adjudication 1..* MS
//* item.adjudication.category from PCTGFEItemAdjudicationVS (required)
//* item.adjudication.extension contains SubjectToMedicalMgmt named subjectToMedicalMgmt 0..* MS

* insert ItemAdjudicationSlicing
* item.adjudication contains 
	medicalmanagement 0..* MS and
    benefitpaymentstatus 0..1 MS and
    adjustmentreason 0..* MS and
	submitted 0..1 MS and
	memberliability 0..1 MS and
	eligible 0..1 MS and
	benefit 0..1 MS
	
* item.adjudication.category from PCTAdjudicationCategoryVS (extensible)
* item.adjudication[medicalmanagement].extension contains SubjectToMedicalMgmt named subjectToMedicalMgmt 1..1
* item.adjudication[medicalmanagement].category = PCTAdjudicationCategoryCS#medicalmanagement
* item.adjudication[medicalmanagement].amount 0..0 
* item.adjudication[medicalmanagement].value 0..0
* item.adjudication[benefitpaymentstatus] ^short = "Benefit Payment Status: Line level benefit payment status associated with professional claim estimates only."
* item.adjudication[benefitpaymentstatus].category = PCTAdjudicationCategoryCS#benefitpaymentstatus
* item.adjudication[benefitpaymentstatus].reason from PCTPayerBenefitPaymentStatusVS (required)
* item.adjudication[adjustmentreason] ^short = "Adjustment Reason"
* item.adjudication[adjustmentreason].category = PCTAdjudicationCategoryCS#adjustmentreason
* item.adjudication[adjustmentreason].reason from PCTAdjustmentReasonVS (required)
* item.adjudication[submitted].category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* item.adjudication[submitted] ^short = "Provider submitted amount"
* item.adjudication[memberliability] ^short = "Member liability"
* item.adjudication[memberliability].category = PCTAdjudicationCategoryCS#memberliability
* item.adjudication[memberliability] ^comment = "$0 is an acceptable value"
* item.adjudication[eligible] ^short = "Eligible amount"
* item.adjudication[eligible].category = http://terminology.hl7.org/CodeSystem/adjudication#eligible
* item.adjudication[eligible] ^comment = "Eligible is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."
* item.adjudication[benefit] ^short = "Benefit amount"
* item.adjudication[benefit].category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
* item.adjudication[benefit] ^comment = "Benefit is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."


* insert AdjudicationSlicing
* adjudication contains medicalmanagement 0..* MS and
    billingnetworkstatus 0..1 MS and
    renderingnetworkstatus 0..1 MS and
    benefitpaymentstatus 0..1 MS and
    adjustmentreason 0..* MS and 
	submitted 0..1 MS and
	memberliability 0..1 MS and
	eligible 0..1 MS and
	benefit 0..1 MS
* adjudication.category 1..1
* adjudication.category from PCTAdjudicationCategoryVS (extensible)
* adjudication[medicalmanagement].extension contains SubjectToMedicalMgmt named subjectToMedicalMgmt 1..1
* adjudication[medicalmanagement].category = PCTAdjudicationCategoryCS#medicalmanagement
* adjudication[medicalmanagement].amount 0..0
* adjudication[medicalmanagement].value 0..0
* adjudication[billingnetworkstatus] ^short = "Billing Provider Network Status"
* adjudication[billingnetworkstatus].category = PCTAdjudicationCategoryCS#billingnetworkstatus
* adjudication[billingnetworkstatus].reason from PCTPayerBenefitPaymentStatusVS (required)
* adjudication[renderingnetworkstatus] ^short = "Rendering Provider Network Status"
* adjudication[renderingnetworkstatus].category = PCTAdjudicationCategoryCS#renderingnetworkstatus
* adjudication[renderingnetworkstatus].reason from PCTPayerBenefitPaymentStatusVS (required)
* adjudication[benefitpaymentstatus] ^short = "Benefit Payment Status"
* adjudication[benefitpaymentstatus].category = PCTAdjudicationCategoryCS#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from PCTPayerBenefitPaymentStatusVS (required)
* adjudication[adjustmentreason] ^short = "Adjustment Reason"
* adjudication[adjustmentreason].category = PCTAdjudicationCategoryCS#adjustmentreason
* adjudication[adjustmentreason].reason from PCTAdjustmentReasonVS (required)
* adjudication[submitted].category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* adjudication[submitted] ^short = "Provider submitted amount"
* adjudication[memberliability].category = PCTAdjudicationCategoryCS#memberliability
* adjudication[memberliability] ^short = "Member liability"
* adjudication[memberliability] ^comment = "$0 is an acceptable value"
* adjudication[eligible].category = http://terminology.hl7.org/CodeSystem/adjudication#eligible
* adjudication[eligible] ^short = "Eligible amount"
* adjudication[eligible] ^comment = "Eligible is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."
* adjudication[benefit].category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
* adjudication[benefit] ^short = "Benefit amount"
* adjudication[benefit] ^comment = "Benefit is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."


// * insert EOBHeaderItemAdjudicationInvariant
// * insert ItemAdjudicationInvariant
// * insert ItemAdjudicationSlicing
// * item.adjudication contains
//    adjudicationamounttype 0..* MS and   /* restricted to 1..* by invariant */
//    denialreason 0..* MS and
//    allowedunits 0..1 MS
// * item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
// * item.adjudication[allowedunits].value only decimal
// // FHIR-30807 - Change cardinality in EOB Inpatient and Outpatient Institutional Profiles
// * item.adjudication[allowedunits].value 1..1 MS
// * item.adjudication[denialreason].category = C4BBAdjudicationDiscriminator#denialreason
// * item.adjudication[denialreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
// * item.adjudication[denialreason].reason 1..1 MS
// * item.adjudication[adjudicationamounttype].category from C4BBAdjudication
// * item.adjudication[adjudicationamounttype].amount MS
// * item.adjudication[adjudicationamounttype].amount 1..1



// * extension contains Disclaimer named disclaimer 1..* MS
// * extension[disclaimer] ^short = "One or more disclaimers made by the payer concerning the estimated costs provided in the AEOB"
// * extension contains SubjectToMedicalMgmtDisclaimer named subjectToMedicalMgmtDisclaimer 0..1 MS
// * extension contains EstimateOnlyDisclaimer named estimateOnlyDisclaimer 0..1 MS

// * extension contains ExpirationDate named expirationDate 1..1 MS
// * extension[expirationDate] ^short = "Once the AEOB is complete and formally issued it is good until this date."


* total 1..*
* insert TotalSlicing
* total.category from PCTTotal (extensible)
* total contains
	submitted 1..1 MS and
	memberliability 0..1 MS and
	innetwork 0..1 MS and
	outofnetwork 0..1 MS and
	noncovered 0..1 MS and
	negotiated 0..1 MS and
	eligible 0..1 MS and
	benefit 0..1 MS



* total[submitted].category = http://terminology.hl7.org/CodeSystem/adjudication#submitted
* total[submitted] ^short = "Total provider submitted amount"

* total[memberliability] ^short = "Total member liability - Must include in non-zero total across all AEoBs"
* total[memberliability].category = PCTAdjudicationCategoryCS#memberliability

* total[innetwork] ^short = "Total in network amount - Must include in non-zero total across all AEoBs"
* total[innetwork].category = PCTNetworkStatusCS#innetwork

* total[outofnetwork] ^short = "Total out of network amount - Must include in non-zero total across all AEoBs"
* total[outofnetwork].category = PCTNetworkStatusCS#outofnetwork

* total[negotiated] ^short = "Total negotiated amount - Must include in non-zero total across all AEoBs"
* total[negotiated].category = PCTNetworkStatusCS#negotiated


* total[noncovered] ^short = "Total noncovered amount - Must include in non-zero total across all AEoBs"
* total[noncovered].category = PCTAdjudication#noncovered



* total[eligible] ^short = "Total eligible amount - Must include in non-zero total across all AEoBs"
* total[eligible].category = http://terminology.hl7.org/CodeSystem/adjudication#eligible
* total[eligible] ^comment = "Eligible is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."

* total[benefit] ^short = "Total benefit amount - Must include in non-zero total across all AEoBs"
* total[benefit].category = http://terminology.hl7.org/CodeSystem/adjudication#benefit
* total[benefit] ^comment = "Benefit is similar to allowed amount. Eligible amount and Benefit amount may be different or the same, but if they are different the payer can supply both for the full picture of the estimate."



* processNote 1..*
* processNote ^short = "Disclaimers go here. Notes should be clear and as specific to the situation at hand as possible"
* processNote.extension contains ProcessNoteClass named processNoteClass 0..1


* benefitBalance 1..*
* benefitBalance.category 1..1 
* benefitBalance.category from PCTBenefitBalanceCategoryVS 
* benefitBalance.unit 1..1 
* benefitBalance.unit from http://hl7.org/fhir/ValueSet/benefit-unit (required)
* benefitBalance.term 1..1
* benefitBalance.term from 	http://hl7.org/fhir/ValueSet/benefit-term (required)
* benefitBalance.financial 1..*
* benefitBalance.financial.type 1..1
* benefitBalance.financial.type from PCTFinancialTypeVS
* benefitBalance.financial.allowed[x] 1..1 MS
* benefitBalance.financial.allowed[x] only unsignedInt or Money
* benefitBalance.financial.allowed[x] ^type[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* benefitBalance.financial.allowed[x] ^type[=].extension.valueBoolean = true
* benefitBalance.financial.allowed[x] ^type[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* benefitBalance.financial.allowed[x] ^type[=].extension.valueBoolean = true
//* benefitBalance.financial.allowedUnsignedInt MS
//* benefitBalance.financial.allowedMoney MS
* benefitBalance.financial.used[x] 1..1 MS
* benefitBalance.financial.used[x] only unsignedInt or Money
* benefitBalance.financial.used[x] ^type[0].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* benefitBalance.financial.used[x] ^type[=].extension.valueBoolean = true
* benefitBalance.financial.used[x] ^type[+].extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support"
* benefitBalance.financial.used[x] ^type[=].extension.valueBoolean = true
//* benefitBalance.financial.usedUnsignedInt MS
//* benefitBalance.financial.usedMoney MS
* benefitBalance.financial.extension contains RemainingBenefit named remaining  0..1 MS



Invariant: pct-aeob-1
Description: "Institutional EOB:  SHALL have serviceDescription at the item or header level (can be at both locations)"
Expression: "extension.where(url='http://hl7.org/fhir/us/davinci-pct/StructureDefinition/serviceDescription').exists() or item.extension.where(url='http://hl7.org/fhir/us/davinci-pct/StructureDefinition/serviceDescription').exists()"
Severity: #error


Invariant: pct-aeob-2
Description: "Institutional EOB:  SHALL have adjudication[submitted] at the item or header level (can be at both locations)"
//Expression: "adjudication.where(category.coding.code='submitted').exists() or item.adjudication.where(category.coding.code='submitted').exists()"
Expression: "adjudication.where(category.coding.where(code='submitted').exists()).exists() or item.adjudication.where(category.coding.where(code='submitted').exists()).exists()"
Severity: #error

Invariant: pct-aeob-3
Description: "Institutional EOB:  SHALL have adjudication[memberliability] at the item or header level (can be at both locations)"
Expression: "adjudication.where(category.coding.where(code='memberliability').exists()).exists() or item.adjudication.where(category.coding.where(code='memberliability').exists()).exists()"
//Expression: "adjudication.where(category.coding.code='memberliability').exists() or item.adjudication.where(category.coding.code='memberliability').exists()"
//Expression: "adjudication.where(category.where(coding.code='memberliability')).exists() or item.adjudication.where(category.where(coding.code='memberliability')).exists()"
Severity: #error

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_aeob_bundle.fsh

Profile: PCTAEOBBundle
Parent: Bundle
Id: davinci-pct-aeob-bundle
Title: "PCT AEOB Bundle"
Description: "PCT AEOB Bundle that contains necessary resources for an AEOBs. Organizations for both the payer and provider SHALL be included."
* insert TrialUseArtifact
* obeys pct-aeob-bundle-1 and pct-aeob-bundle-2

* identifier 1..1
* type = #collection (exactly)
* timestamp 1..1
* entry 1..*
* entry.fullUrl 1..1
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"

* entry contains
	aeob 2..* and
    patient 1..2 and
    coverage 1..1 and
    organization 1..* and
    practitioner 0..* MS and
    gfeBundle 0..* MS

/*
* entry[aeob-summary] ^short = "SHALL have a PCTAdvancedEOBSummary resource"
* entry[aeob-summary].resource 1..1
* entry[aeob-summary].resource only PCTAdvancedEOBSummary
*/

* entry[aeob] ^short = "SHALL have a PCTAdvancedEOB resource"
* entry[aeob].resource 1..1
* entry[aeob].resource only PCTAdvancedEOBSummary or PCTAdvancedEOB

* entry[patient] ^short = "SHALL have the patient subject of care and may be a separate subscriber"
* entry[patient].resource 1..1
* entry[patient].resource only HRexPatientDemographics

* entry[coverage] ^short = "SHALL have one Coverage"
* entry[coverage].resource 1..1
* entry[coverage].resource only PCTCoverage

* entry[organization] ^short = "SHALL have the payer organization and may have provider organization(s)"
* entry[organization].resource 1..1 
* entry[organization].resource only PCTOrganization

* entry[practitioner] ^short = "MAY have the provider Practitioner(s)"
* entry[practitioner].resource 1..1 
* entry[practitioner].resource only PCTPractitioner

* entry[gfeBundle] ^short = "MAY have PCTGFEBundle resource"
* entry[gfeBundle].resource 1..1 
* entry[gfeBundle].resource only PCTGFEBundle


Invariant: pct-aeob-bundle-1
Description: "All references resources SHALL be contained within the Bundle with the exception of the PCT GFE Bundle (referenced from the gfeReference extension in the AEOB), which MAY be present"
Expression: "Bundle.entry.descendants().reference.distinct().all(resolve().exists())"
// Expression: "Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not() and $this.startsWith('Bundle').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
Severity: #error

Invariant: pct-aeob-bundle-2
Description: "SHALL have at least one entry for a payer organization."
//Expression: "entry.resource.ofType(Organization).exists(type.coding.code='pay')"
Expression: "entry.resource.ofType(Organization).where(type.coding.where(code='pay').exists()).exists()"
Severity: #error

// TODO Add invatiant requirement where at least a gfe summay exists

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_coverage.fsh

// TODO JIRA FHIR-45001 - Pre-adopt Coverage.kind into PCT Coverage profile and add declaration
// TODO  Check to make sure the descriptions are in the differential


Profile: PCTCoverage
Parent: HRexCoverage
Id: davinci-pct-coverage
Title: "PCT Coverage"
Description: "PCT Coverage is a profile for capturing data that reflect a payer’s coverage that was effective as of the proposed date of service or the date of admission of the GFE."
* insert TrialUseArtifact
* extension contains
    $R5CoverageKind named coverage-kind 1..1 and
    SelfPayDeclared named self-pay-declared 0..1 MS

* extension[coverage-kind]
  * valueCode 1..1

* subscriber
* subscriber ^short = "Required if subscriber is a person that is not the beneficiary. When date of birth or gender are not known, omit Patient.birthDate and set Patient.gender to unknown."
* subscriber.display ^short = "Provide the name of the subscriber in Coverage.subscriber.display concatenating the subscriber’s prefix, given name, family name and suffix (in this order), each separated by a single space. If discrete name parts are required, a Patient resource SHALL be pointed to in Coverage.subscriber.reference."
* subscriber.display 1..1
* subscriberId 1..1

* relationship 1..1
//* relationship from $SubscriberRelationiship (required)

* payor 1..1
* payor only Reference (PCTOrganization)

* class 1..*
* class.name 1..1
* class ^slicing.discriminator.type = #pattern
* class ^slicing.discriminator.path = "type"
* class ^slicing.rules = #open
* class ^slicing.ordered = false   // can be omitted, since false is the default
* class ^slicing.description = "Slice based on value pattern"
* class contains
    plan 0..1 MS
	
* class[plan].type.coding 1..*
* class[plan].type = COVCLASS#plan
* class[plan].value 1..1

* period 1..1

* costToBeneficiary
* costToBeneficiary.type from http://terminology.hl7.org/ValueSet/coverage-copay-type (required)

//* contract 1..* MS

// * meta.lastUpdated ^comment = "Defines the date the coverage that was effective as of the date of service or admission (163). The Coverage Reference Resource SHALL be returned with data that was effective as of the date of service or admission of the claim"
// * meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
// * status ^comment = "Identfies the status of the coverage information (default: active) (133)"
// * type ^comment = "Identifies if the coverage is PPO, HMO, POS, etc. (3)"
// * subscriberId  ^comment = "The identifier assigned by the Payer on the subscriber's ID card (132)"
// * beneficiary ^comment = "Identifier for a member assigned by the Payer.  If members receive ID cards, that is the identifier that should be provided (1).  This is the party who receives treatment for which the costs are reimbursed under the coverage. alternate path:  EOB.patient(Patient).identifier"
// * relationship ^comment = "Relationship of the member to the person insured (subscriber). (72)"
// * period ^comment = "Date that the contract became effective (74) and Date that the contract was terminated or coverage changed (75)"
// * payor ^comment = "Issuer of the Policy (2)"
// * class[group].value ^comment = "Employer account identifier (134)"
// * class[group].name ^comment = "Name of the Employer Account (135)"
// * class[plan].value ^comment = "Business concept used by a health plan to describe its benefit offerings (154)"
// * class[plan].name ^comment = "Name of the health plan benefit offering assigned to the Plan Identfier (155)"




---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_devicerequest.fsh

Profile: PCTDeviceRequest
Parent: DeviceRequest
Id: davinci-pct-devicerequest
Title: "PCT GFE DeviceRequest"
Description: "The PCT DeviceRequest including details about a device for which a GFE is being requested."
* insert DraftArtifact

* status = #active
* intent = #proposal

* code[x] 1..1 MS

* subject only Reference(HRexPatientDemographics)


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_bundle.fsh

Profile: PCTGFEBundle
Parent: Bundle
Id: davinci-pct-gfe-bundle
Title: "PCT GFE Bundle"
//Description: "PCT GFE Bundle that contains necessary resources as a GFE Submission for obtaining an AEOB. Organizations for both the provider and payer SHALL be included. The scope of this guide does not include coordination of benefits or more than one coverage. This does not serve as a replacement for eligibility, prior authorization or other financial and administrative use cases."
Description: "PCT GFE Bundle that contains all resources for a Good faith estimate submitted by a single GFE contributing provider. Organizations for both the provider and payer MAY be included. This single contributing provider GFE Bundle may be included in a set of GFE bundles from other providers in a GFE Collection Bundle that can then be made available to the patient or sent to a payer for insurance estimation. The scope of this guide does not include coordination of benefits for more than one coverage. This does not serve as a replacement for eligibility, prior authorization or other financial and administrative use cases."
* insert TrialUseArtifact
/* Remove GFE Submitter
* obeys pct-gfe-bundle-1 and pct-gfe-bundle-2 and pct-gfe-bundle-3
*/
* obeys pct-gfe-bundle-1 and pct-gfe-bundle-2

* identifier 1..1
* type = #collection (exactly)
* timestamp 1..1
//TODO: create a FHIRPath invariant to enforce that at least one entry.resource must be either PCTGFEInstitutional or PCTGFEProfessional
* entry 1..*
* entry.fullUrl 1..1
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
// * entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains
//	gfe-summary 1..1 and
    gfe 2..* and
    patient 1..2 and
    coverage 0..1 MS and
    organization ..* MS and
    practitioner 0..* MS and
    attachment 0..* MS


//* entry[gfe-summary] ^short = "SHALL have a PCTGFESummary resource"
//* entry[gfe-summary].resource 1..1
//* entry[gfe-summary].resource only PCTGFESummary

* entry[gfe] ^short = "SHALL have one or more PCTGFEProfessional or PCTGFEInstitutional resource(s)"
* entry[gfe].resource 1..1 
* entry[gfe].resource only PCTGFESummary or PCTGFEProfessional or PCTGFEInstitutional

// * entry[gfeProfessional] ^short = "MAY have PCTGFEProfessional resource(s)"
// * entry[gfeProfessional].resource 1..1 
// * entry[gfeProfessional].resource only PCTGFEProfessional

// * entry[gfeInstitutional] ^short = "MAY have PCTGFEInstitutional resource(s)"
// * entry[gfeInstitutional].resource 1..1 
// * entry[gfeInstitutional].resource only PCTGFEInstitutional
    
* entry[patient] ^short = "SHALL have the patient subject of care and may have a separate subscriber"
* entry[patient].resource 1..1
* entry[patient].resource only HRexPatientDemographics

* entry[coverage] ^short = "MAY have one Coverage"
* entry[coverage].resource 1..1
* entry[coverage].resource only PCTCoverage

* entry[organization] ^short = "SHALL have a submitting provider or submitting organization, but not both. May also have a payer organization."
* entry[organization].resource 1..1 
* entry[organization].resource only PCTOrganization

* entry[practitioner] ^short = "SHALL have a submitting provider or submitting organization, but not both."
* entry[practitioner].resource 1..1 
* entry[practitioner].resource only PCTPractitioner

* entry[attachment] ^short = "MAY have attachments as DocumentReference resource(s)"
* entry[attachment].resource 1..1 
* entry[attachment].resource only DocumentReference

/* Remove GFE Submitter TODO JIRA Need a ticket for removal of GFE Submitter
Invariant: pct-gfe-bundle-3
Description: "All GFEs must have the same GFE submitter"
Expression: "(Bundle.entry.resource.ofType(Claim).extension.where(url='http://hl7.org/fhir/us/davinci-pct/StructureDefinition/gfeSubmitter').value.ofType(Reference).reference.distinct().count() = 1)"
Severity: #error
*/
// TODO the expression needs fixing: Invariant requiring (entry[organization] where type is not 'pay' or 'ins') xor entry[practitioner]
Invariant: pct-gfe-bundle-1
Description: "SHALL have a submitting provider or submitting organization, but not both."
Expression: "Bundle.entry.resource.ofType(Practitioner).exists() or Bundle.entry.resource.ofType(Organization).exists()"
Severity: #error


Invariant: pct-gfe-bundle-2
Description: "All references resources SHALL be contained within the Bundle"
// Expression: "Bundle.entry.descendants().reference.distinct().all(resolve().exists())"
Expression: "Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
Severity: #error

// Invariant: pct-gfe-bundle-4
// Description: "SHALL contain at least one gfeInstitutional slice or gfeProfessional slice"
// Expression: "entry.resource.ofType(Claim).type.where(coding.code='institutional').exists() or entry.resource.ofType(Claim).type.where(coding.code='professional').exists()"
// Severity: #error


// TODO Add invatiant requirement where at least a gfe summay exists

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_collection_bundle.fsh

// TODO JIRA Make sure all tickets and profile requirements align
// TODO The collection Bundle is to be used in the submission. Make sure that is explicit everywhere including the submit operation. 
// TODO deal with the situation that the coordination request only deals with Pract/org on CP, but in the submission we need to have the submitting prov. Need way to indicate  Perhaps guidance?
// Guidance that the initiating provider may need to be changed from the CP version to the Submitting Provider version

Profile: PCTGFECollectionBundle
Parent: Bundle
Id: davinci-pct-gfe-collection-bundle
Title: "PCT GFE Collection Bundle"
Description: "PCT GFE Collection Bundle that contains GFE Bundles from GFE contributors. This collection of GFE Bundles from GFE contributors that can then be made available to the patient or sent to a payer for insurance estimation. The scope of this guide does not include coordination of benefits or more than one coverage. This does not serve as a replacement for eligibility, prior authorization or other financial and administrative use cases."
* insert TrialUseArtifact1
* obeys pct-gfe-collection-bundle-2 and pct-gfe-collection-bundle-3

* identifier 1..1
* type = #collection (exactly)
* timestamp 1..1
//TODO: create a FHIRPath invariant to enforce that at least one entry.resource must be either PCTGFEInstitutional or PCTGFEProfessional
* entry 1..*
* entry.fullUrl 1..1
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
//* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains
    patient 1..2 and
    coverage 0..1 MS and
    organization ..2 MS and
    practitioner 0..1 MS and
    gfe-bundle 0..* MS and
    attachment 0..* MS

* entry[patient] ^short = "SHALL have the patient subject of care and may have a separate subscriber"
* entry[patient].resource 1..1
* entry[patient].resource only HRexPatientDemographics

* entry[coverage] ^short = "MAY have one Coverage"
* entry[coverage].resource 1..1
* entry[coverage].resource only PCTCoverage

* entry[organization] ^short = "SHALL have an initiating provider or initiating organization, but not both. May also have a payer organization."
* entry[organization].resource 1..1 
* entry[organization].resource only PCTOrganization

* entry[practitioner] ^short = "SHALL have a initiating provider or initiating organization, but not both."
* entry[practitioner].resource 1..1 
* entry[practitioner].resource only PCTPractitioner

* entry[gfe-bundle] ^short = "MAY include GFE contributor specific GFE bundle and MAY include bundle(s) with information about a unfulfilled GFE request"
* entry[gfe-bundle].resource 1..1
* entry[gfe-bundle].resource only PCTGFEBundle or PCTGFEMissingBundle


* entry[attachment] ^short = "MAY have attachments as DocumentReference resource(s)"
* entry[attachment].resource 1..1 
* entry[attachment].resource only DocumentReference

/*
// TODO MEETING, is the GFE Submitter necessary on each and every GFE and do they have to be the same? If so, this requires the GFE contributor to make a copy of the requesting provider, but to what end?)
Invariant: pct-gfe-collection-bundle-1
Description: "All GFEs must have the same GFE submitter"
Expression: "(Bundle.entry.resource.ofType(Claim).extension.where(url='http://hl7.org/fhir/us/davinci-pct/StructureDefinition/gfeSubmitter').value.ofType(Reference).reference.distinct().count() = 1)"
Severity: #error
*/

// TODO the expression needs fixing: Invariant requiring (entry[organization] where type is not 'pay' or 'ins') xor entry[practitioner]
Invariant: pct-gfe-collection-bundle-2
Description: "SHALL have a initiating provider or initiating organization, but not both."
Expression: "Bundle.entry.resource.ofType(Practitioner).exists() or Bundle.entry.resource.ofType(Organization).exists()"
Severity: #error

// TODO Invariant requiring at least a GFE Bundle or a GFEMissingBundle

Invariant: pct-gfe-collection-bundle-3
Description: "All references resources SHALL be contained within the Bundle"
// Expression: "Bundle.entry.descendants().reference.distinct().all(resolve().exists())"
Expression: "Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
Severity: #error

// Invariant: pct-gfe-bundle-4
// Description: "SHALL contain at least one gfeInstitutional slice or gfeProfessional slice"
// Expression: "entry.resource.ofType(Claim).type.where(coding.code='institutional').exists() or entry.resource.ofType(Claim).type.where(coding.code='professional').exists()"
// Severity: #error

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_contributor_task.fsh

Profile: PCTGFEContributorTask
Parent: Task
Id: davinci-pct-gfe-contributor-task
Title: "PCT GFE Contributor Task"
Description: "The PCT GFE Contributor Task is used by a GFE coordinator   to assign a GFE contributor task to a specific provider and may include information specific to that patient’s expected service"
* insert DraftArtifact

* extension contains
   $requestedPeriodExtensionUrl named requested-period 0..1 MS and
   RequestInitiationTime named request-initiation-time 1..1 MS and
   PlannedServicePeriod named planned-service-period 0..1 MS
   
//   SchedulingTime named scheduling-time 0..1 MS and
//   ScheduledServicePeriod named scheduled-service-period 0..1 MS 

* extension[requested-period] ^short = "GFE Contributor specific time period the requested GFE should be provided in"
* extension[requested-period] ^comment = "Indicates the start and/or end of the period of time when the GFE bundle should be provided. Usually this is the same as the GFE Coordination Task, and if so, should not be specified in the provider specific task. However, there may be circumstances in which a specific GFE contributor may have a different timeline that should be included in the provider specific task (e.g. the provider was added to original request afterwards, in the case of a provider replacement; or there is a potential dependency on the provider's response)."
* extension[requested-period].valuePeriod.start 0..0
* extension[requested-period].valuePeriod.end 1..1

* extension[request-initiation-time] ^short = "Estimate Request instant"
* extension[request-initiation-time] ^short = "Instant from which the request is being initiated. For patient initiated requests, this is the date and time the patient or their representative made the request. For a newly scheduled service, this represents the time of the scheduling activity (as opposed to the planned time of service). For all other requests, the time of the event that triggered the need for an estimate."
* extension[request-initiation-time].valueInstant 1..1

* extension[planned-service-period] ^short = "GFE contributor specific planned or scheduled period of service the request is about"
* extension[planned-service-period].valuePeriod.start 1..1
* extension[planned-service-period].valuePeriod.end MS


* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.description = "Slice based on $this pattern"
* identifier contains
   PLAC 0..1 and
   INTER 0..*
* identifier[PLAC].type = $V2-0203#PLAC "Placer Identifier"
* identifier[PLAC].system MS
* identifier[PLAC].value 1..1
* identifier[PLAC] ^short = "GFE Coordination Requester Assigned Identifier for GFE Request"
* identifier[INTER].type = PCTIdentifierType#INTER "Intermediary System Identifier"
* identifier[INTER] ^short = "Intermediary System Identifier"

/* Removed because a GFE Coordination Task was deemed to be the approach to take, instead of individual tasks associated through an ID.
* groupIdentifier 1..1
* groupIdentifier.type = $V2-0203#PLAC "Placer Identifier"
* groupIdentifier.system MS
* groupIdentifier.value 1..1
* groupIdentifier ^short = "Requesting Provider Task Identifier (DRAFT: used for grouping the sub-tasks together, may be the means to correlate tasks if the primary task goes away)"
*/


* partOf 1..1
* partOf only Reference(PCTGFECoordinationTask)
* partOf ^short = "Reference to the GFE Coordination Task"



* status from PCTContributorTaskStatusCodes (required)
* statusReason MS
* statusReason from PCTContributorTaskStatusReasonCodes (extensible)
* intent = http://hl7.org/fhir/task-intent#order

* code = PCTGFERequestTaskCSTemporaryTrialUse#gfe-contributor-task

// TODO Supporting Information contained within the bundle. Perhaps guidance on use of reference identifiers?
//* focus only Reference(PCTGFERequestServiceRequest)

// TODO Supporting Information contained within the bundle. Perhaps guidance on use of reference identifiers?
//* for only Reference(HRexPatientDemographics)
//* for ^short = "The patient for whom the GFE request is for"

* requester only Reference(PCTPractitioner or HRexPractitionerRole or PCTOrganization)
* requester ^short = "The provider making the request"
* requester ^comment = "Generally this will be a reference to a Practitioner, PractitionerRole, or Organization resource residing on the Coordination Platform. If there is a need to express contact information that is specific to the request, and therefore is not included in the information on the Coordination Platform, the reference should point to a server and resource that does not have additional authentication or or authorization requirements."

* performerType MS
* performerType ^short = "Specific performer types for the"  //TODO


* owner 1..1
* owner only Reference(PCTPractitioner or HRexPractitionerRole or PCTOrganization)
* owner ^short = "GFE Contributor assigned to complete the task"
// TODO !!! A better description as to why there is not task executor.

* reasonCode 0..0
* reasonCode ^short = "The reasonCode is inherited from the GFE Coordination Task pointed to by Task.partOf"



* restriction 0..0

* input MS
* input ^short = "GFE Contributor specific Information and references to service and supporting information, such as Conditions, Observations, and notes"
* input ^comment = "Contained or referenced request information bundle made available to a specific GFE contributor that includes information about the products and or services requested and other supporting information, such as Conditions, Observations, and notes"

* output MS
* output ^short = "Any outputs from the GFE Contributor including the GFE Bundle or notes on why the specific task was unable to be completed"
* output ^comment = "Any outputs for the GFE Contributor Task which might include notes on why the GFE Contributor Task was unable to be completed."


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_coordination_bundle.fsh

// TODO JIRA Add ticket for this profile

Profile: PCTGFECoordinationBundle
Parent: Bundle
Id: davinci-pct-gfe-coordination-bundle
Title: "PCT GFE Coordination Bundle"
Description: "PCT GFE Request Bundle that contains necessary resources for GFE  to request GFEs from one or multiple GFE contributing providers."
* insert DraftArtifact
//* obeys pct-gfe-request-bundle-1


//* identifier 1..1
* type = #transaction (exactly)
* timestamp 1..1
* entry 1..*
* entry.fullUrl 1..1
* entry.search 0..0
* entry.request 1..1
* entry.request.method = #POST
* entry.request.url 1..1
* entry.response 0..0
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"

* entry contains
    gfe-task 2..* and
    gfe-request-information 0..*

* entry[gfe-task] ^short = "SHALL have one PCTGFECoordinationTask resource and one or more PCTGFEContributorTask resource"
* entry[gfe-task].resource 1..1
* entry[gfe-task].resource only PCTGFECoordinationTask or PCTGFEContributorTask

* entry[gfe-request-information] ^short = "MAY have a PCTGFEInformationBundle (Preferably these bundles are attached in the Tasks)"
* entry[gfe-request-information].resource 1..1
* entry[gfe-request-information].resource only PCTGFEInformationBundle


// TODO INvariant requiring at least one coordination task and one contributor task
/* This does not apply
Invariant: pct-gfe-request-bundle-1
Description: "All references resources SHALL be contained within the Bundle"
Expression: "Bundle.entry.descendants().reference.distinct().all(resolve().exists())"
// Expression: "Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not() and $this.startsWith('Bundle').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
Severity: #error
*/
/*
TODO invariant - need to have a participating provider
Invariant: pct-gfe-request-bundle-2
Description: "Request Bundle SHALL contain at least one participating provider (Practitioner or Organization)"
Expression: "Bundle.entry.descendants().reference.distinct().all(resolve().exists())"
// Expression: "Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not() and $this.startsWith('Bundle').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
Severity: #error

*/

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_coordination_task.fsh

Profile: PCTGFECoordinationTask
Parent: Task
Id: davinci-pct-gfe-coordination-task
Title: "PCT GFE Coordination Task"
Description: "The Good Faith Estimate (GFE) Coordination Task is used to organize a GFE across providers  for a single period of care for which all GFE Contributor Task resources will be linked. The task includes the general inputs that are shared across all of the GFE contributor tasks. These inputs may include a ‘primary’ service and relevant conditions."
* insert DraftArtifact
/*
Consider other extensions 
https://hl7.org/fhir/extensions/5.1.0-ballot/StructureDefinition-request-replaces.html
https://hl7.org/fhir/extensions/StructureDefinition-request-replaces.html
or
https://hl7.org/fhir/extensions/5.1.0-ballot/StructureDefinition-task-replaces.html
https://hl7.org/fhir/extensions/StructureDefinition-task-replaces.html


*/

* extension contains
   $requestedPeriodExtensionUrl named requested-period 0..1 MS and
   RequestInitiationTime named request-initiation-time 1..1 MS and
   PlannedServicePeriod named planned-service-period 0..1 MS and
   $taskReplacesExtensionUrl named task-replaces 0..1 MS
//   PatientRequestDate named patient-request-date-time 0..1 MS and
   
   
//   SchedulingTime named scheduling-time 0..1 MS and
//   ScheduledServicePeriod named scheduled-service-period 0..1 MS 

* extension[requested-period] ^short = "Time period the requested GFE should be provided in"
* extension[requested-period] ^comment = "Indicates the start and/or end of the period of time when the GFE bundle should be provided."
* extension[requested-period].valuePeriod.start 0..0
* extension[requested-period].valuePeriod.end 1..1

* extension[request-initiation-time] ^short = "Estimate Request instant"
* extension[request-initiation-time] ^short = "Instant from which the request is being initiated. For patient initiated requests, this is the date and time the patient or their representative made the request. For a newly scheduled service, this represents the time of the scheduling activity (as opposed to the planned time of service). For all other requests, the time of the event that triggered the need for an estimate."
* extension[request-initiation-time].valueInstant 1..1

* extension[planned-service-period] ^short = "Overall planned period of service the request is about"
* extension[planned-service-period].valuePeriod.start 1..1
* extension[planned-service-period].valuePeriod.end MS

* extension[task-replaces] ^short = "Indicates a related previous task that had been completed to terminated."
* extension[task-replaces] ^comment = "If a previous request was completed or cancelled that largely represents this current task it may be useful for GFE contributors to be able to refer to the previous request. This may happen when something about a GFE collection request changes so much that it requires re-issuing the request by cancelling the first one and creating a new one. GFE contributors may want to refer back to the previous request in order to help them populate a response to the new one."


* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.description = "Slice based on $this pattern"
* identifier contains
   PLAC 0..1 and
   INTER 0..*
* identifier[PLAC].type = $V2-0203#PLAC "Placer Identifier"
* identifier[PLAC].system MS
* identifier[PLAC].value 1..1
* identifier[PLAC] ^short = "GFE Coordination Requester Assigned Identifier for GFE Request"
* identifier[INTER].type = PCTIdentifierType#INTER "Intermediary System Identifier"
* identifier[INTER] ^short = "Intermediary System Identifier"


* partOf 0..0
* partOf ^short = "The GFE Coordination Task is not part of a greater request"

* status from PCTCoordinationTaskStatusCodes (required)
* statusReason from PCTCoordinationTaskStatusReasonCodes (extensible)
* intent = http://hl7.org/fhir/task-intent#order
* intent ^short = "Order for a Good Faith Estimate (not for services to be rendered)"

* code = PCTGFERequestTaskCSTemporaryTrialUse#gfe-coordination-task

// TODO !!!!!!!

//Requesting provider

/** 


TODO Meeting - What needs to happen with the GFE Linking identifier extension, which included [plannedPeriodOfService


INVARIANT - if scheduled-service-request require a planned service date


* focus on the bundle input (Play with that) Is there a way to reference something inside the bundle (How is the bundle being included in the input)
******Identifier references are an option.

* insurance (Is there a way to reference something inside the bundle?)
identifier

How to include the Bundle? Perhaps in contained. How should references be done to contained resources.
Create a profile for the GFE Request Information Bundle
Perhaps guidance on use of reference identifiers?

How about the output GFE Collection bundle? 
Need an operationDefiniton for retrieving the GFE Collection. Could be attached as an output to the task.

Add guidance that this may be contained or it may be externals.


*/
* requester only Reference(PCTPractitioner or HRexPractitionerRole or PCTOrganization)
* requester ^short = "GFE Coordination Requester making the request"
* requester ^comment = "Generally this will be a reference to a Practitioner or Organization resource residing on the Coordination Platform. If there is a need to express contact information that is specific to the request, and therefore is not included in the information on the Coordination Platform, the reference should point to a server and resource that does not have additional authentication or or authorization requirements."

* performerType 0..0 
* performerType ^short = "Coordination Task does not have a specific performer types"


* owner 0..0
* owner ^short = "Coordination Task does not have a specific performer. GFE Contributor Tasks have specific performers"

* reasonCode 1..1 
* reasonCode ^short = "scheduled-request | nonscheduled-request"
* reasonCode from PCTGFERequestTaskTypeVS (required)

// TODO Supporting Information contained within the bundle. Perhaps guidance on use of reference identifiers?
//* insurance MS
//* insurance only Reference(PCTCoverage)

* restriction 0..0

* input 1..* MS
* input ^short = "Information and references to service and supporting information, such as Conditions, Observations, and notes"
* input ^comment = "Contained or referenced request information bundle made available to all GFE contributors that includes information about the products and or services requested and other supporting information, such as Conditions, Observations, and notes"

* output MS
* output ^short = "Any outputs for the GFE Coordination Task which might include notes on why the GFE Coordination Task was unable to be completed."


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_information_bundle.fsh

Profile: PCTGFEInformationBundle
Parent: Bundle
Id: davinci-pct-gfe-information-bundle
Title: "PCT GFE Information Bundle"
Description: "PCT GFE Information Bundle that contains the information necessary for GFE contributors to create their estimates. This bundle may for all GFE Contributors or  specific to a single contributor and may include, but is not limited to, the Patient Resource, request resources (such as ServiceRequest, MedicationRequest, and DeviceRequest), Service location information, Coverage and Payer Organization resources (if applicable)."
* insert DraftArtifact
* obeys pct-gfe-information-bundle-1 


//* identifier 1..1
* type = #collection (exactly)
* timestamp 1..1
//TODO: create a FHIRPath invariant to enforce that at least one entry.resource must be either PCTGFEInstitutional or PCTGFEProfessional
* entry 1..*
* entry.fullUrl 1..1
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
// * entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains
    patient 1..2 and
    coverage 0..1 MS and
    organization ..* MS and
    service-location 0..* MS and
    practitioner 0..* MS and
    practitioner-role 0..* MS and
    requested-items-service 0..* MS and
    requested-items-medication 0..* MS and
    requested-items-device 0..* MS and
    requested-items-nutrition 0..* MS and
    requested-items-vision 0..* MS and
    attachment 0..* MS


    
* entry[patient] ^short = "SHALL have the patient subject of care and may have a separate subscriber"
* entry[patient].resource 1..1
* entry[patient].resource only HRexPatientDemographics

* entry[coverage] ^short = "MAY have one Coverage"
* entry[coverage].resource 1..1
* entry[coverage].resource only PCTCoverage

* entry[organization] ^short = "MAY have the payer organization and may have provider organization(s)"
* entry[organization].resource 1..1 
* entry[organization].resource only PCTOrganization

* entry[practitioner] ^short = "MAY have the provider Practitioner(s)"
* entry[practitioner].resource 1..1 
* entry[practitioner].resource only  PCTPractitioner

* entry[practitioner-role] ^short = "MAY have the provider PractitionerRole(s)"
* entry[practitioner-role].resource 1..1 
* entry[practitioner-role].resource only  HRexPractitionerRole 

* entry[service-location] ^short = "MAY have Service Location(s)"
* entry[service-location].resource 1..1 
* entry[service-location].resource only  PCTServiceLocation 

* entry[requested-items-service] ^short = "Items the request is about - PCTServiceRequest"
* entry[requested-items-service].resource 1..1
* entry[requested-items-service].resource only PCTServiceRequest

* entry[requested-items-medication] ^short = "Items the request is about - PCTMedicationRequest"
* entry[requested-items-medication].resource 1..1
* entry[requested-items-medication].resource only PCTMedicationRequest

* entry[requested-items-device] ^short = "Items the request is about - PCTDeviceRequest"
* entry[requested-items-device].resource 1..1
* entry[requested-items-device].resource only PCTDeviceRequest

* entry[requested-items-nutrition] ^short = "Items the request is about - NutritionOrder"
* entry[requested-items-nutrition].resource 1..1
* entry[requested-items-nutrition].resource only NutritionOrder

* entry[requested-items-vision] ^short = "Items the request is about - VisionPrescription"
* entry[requested-items-vision].resource 1..1
* entry[requested-items-vision].resource only VisionPrescription

* entry[attachment] ^short = "MAY have attachments as DocumentReference resource(s)"
* entry[attachment].resource 1..1 
* entry[attachment].resource only DocumentReference


Invariant: pct-gfe-information-bundle-1
Description: "All references resources SHALL be contained within the Bundle"
// Expression: "Bundle.entry.descendants().reference.distinct().all(resolve().exists())"
Expression: "Bundle.entry.resource.descendants().reference.where($this.startsWith('#').not()).all((%resource.entry.fullUrl.join('|')&'|').contains(($this&'|')))"
Severity: #error

// Invariant: pct-gfe-bundle-4
// Description: "SHALL contain at least one gfeInstitutional slice or gfeProfessional slice"
// Expression: "entry.resource.ofType(Claim).type.where(coding.code='institutional').exists() or entry.resource.ofType(Claim).type.where(coding.code='professional').exists()"
// Severity: #error

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_institutional.fsh

Profile: PCTGFEInstitutional
Parent: Claim
Id: davinci-pct-gfe-institutional
Title: "PCT Good Faith Estimate Institutional"
Description: "PCT Good Faith Estimate Institutional is a profile for capturing submission data needed to be processed by a payer for the creation of an Advanced EOB. This profile is used for an institutional GFE submission."
* insert TrialUseArtifact
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.description = "Slice based on $this pattern"
* identifier contains
   PLAC 1..1 and
   INTER 0..*
* identifier[PLAC].type = $V2-0203#PLAC "Placer Identifier"
* identifier[PLAC].system MS
* identifier[PLAC].value 1..1
* identifier[PLAC] ^short = "Provider Assigned Identifier for GFE Claim"
* identifier[INTER].type = PCTIdentifierType#INTER "Intermediary System Identifier"
* identifier[INTER] ^short = "Intermediary System Identifier"

//// Profile entension elements ////
/* Remove GFE Submitter
* extension contains GFESubmitter named gfeSubmitter 1..1
//* extension[gfeSubmitter].value[x] only Reference(PCTPractitioner or PCTOrganization)
//* extension[gfeSubmitter].valueReference only Reference(PCTPractitioner or PCTOrganization)
* extension[gfeSubmitter] ^short = "The scheduling entity that submits the GFE to provide a collection of services to a payer for the creation of an Advanced EOB"
*/
//* extension contains PlannedPeriodOfService named plannedPeriodOfService 0..* MS
//* extension[plannedPeriodOfService] ^short = "This could be the scheduled date(s) of a particular admission/service or a series of admissions/services. This may span multiple claims, whereas billablePeriod is per claim."
* extension contains GFEServiceLinkingInfo named gfeServiceLinkingInfo 0..1 MS
* extension[gfeServiceLinkingInfo] ^short = "GFE Service Linking Information."
//* extension contains ReferralNumber named referralNumber 0..1 MS
//* extension[referralNumber] ^short = "Referral Number"
* extension contains ProviderEventMethodology named providerEventMethodology 0..1 MS
* extension[providerEventMethodology] ^short = "Provider event collection methodology"
* extension[providerEventMethodology] ^definition = "How the provider determined the number of claims and the number and type of billing providers to include in the GFE. Examples include provider episodes of care experience, PACES, order set based on clinical guidelines, payor suggested grouping, or some other method of determination. The extension definition contains additional detail. "
* extension contains GFEDisclaimer named gfeDisclaimer 0..* MS
* extension[gfeDisclaimer].value[x] only string
* extension[gfeDisclaimer] ^short = "Disclaimers the patient should be made aware of regarding the providers estimate"




* billablePeriod MS
* billablePeriod ^short = "Relevant time frame for the claim. This is per claim, whereas a planned period of service can span multiple claims."

* type = $ClaimTypeCS#institutional
* use = $CLAIMUSECS#predetermination "predetermination"

* patient only Reference(HRexPatientDemographics)

// Billing provider--get Taxonomy Code and Organization from PractitionerRole
* provider only Reference(PCTOrganization)
* provider ^short = "Billing provider - party responsible for the GFE"

* provider.extension contains ProviderTaxonomy named providerTaxonomy 1..1
* provider.extension[providerTaxonomy] ^short = "Provider taxonomy codes consisting of NUCC Health Care Provider Taxonomy Code Set for providers"

* provider.extension contains GFEConsentForBalanceBilling named consentForBalanceBilling 0..1 MS

* priority from $PROCPRIORITYVS (required)

* insurer 0..1 MS
* insurer ^short = "Required if insured estimate"
* insurer only Reference(PCTOrganization)

* payee MS
* payee.party only Reference(PCTPractitioner or PCTOrganization)
//TODO: create VS for payee.type like https://build.fhir.org/ig/HL7/carin-bb/ValueSet-C4BBPayeeType.html ???

* referral.extension contains ReferralNumber named referralNumber 1..1
* referral.extension[referralNumber] ^short = "Referral Number"


* insurance.coverage only Reference(PCTCoverage)
* insurance.coverage.extension contains $DARExtensionUrl named dataAbsentReason 0..1 MS
* insurance.coverage.extension[dataAbsentReason] ^short = "Coverage may be not applicable if estimate is for self-pay or uninsured"

* insurance.preAuthRef 0..1

* accident.location[x] only Address
* accident.location[x].country from $ISO3166-P1-ALPHA2-VS (required)

* insert DiagnosisSlicing
* diagnosis 1..*
//* diagnosis.diagnosis[x] MS
//* diagnosis.diagnosis[x] only CodeableConcept
//* diagnosis.diagnosis[x] from http://hl7.org/fhir/ValueSet/icd-10 (required)
* diagnosis.type MS
* diagnosis.type from PCTDiagnosisTypeVS
* diagnosis contains
   principal 1..1 and
   admitting 0..1 MS and
   patientReasonForVisit 0..3 MS and
   externalcauseofinjury 0..12 MS and
   other 0..24 MS
* diagnosis[principal].type 1..1
* diagnosis[principal].type = $DIAGTYPECS#principal
* diagnosis[principal].sequence = 1
* diagnosis[principal].diagnosis[x]
* diagnosis[principal].diagnosis[x] only CodeableConcept
* diagnosis[principal].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[admitting].type 1..1
* diagnosis[admitting].type = $DIAGTYPECS#admitting
* diagnosis[admitting].diagnosis[x]
* diagnosis[admitting].diagnosis[x] only CodeableConcept
* diagnosis[admitting].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[patientReasonForVisit].type 1..1
* diagnosis[patientReasonForVisit].type = PCTDiagnosisType#patientReasonForVisit
* diagnosis[patientReasonForVisit].diagnosis[x]
* diagnosis[patientReasonForVisit].diagnosis[x] only CodeableConcept
* diagnosis[patientReasonForVisit].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[externalcauseofinjury].type 1..1
* diagnosis[externalcauseofinjury].type = PCTDiagnosisType#externalCauseOfInjury
* diagnosis[externalcauseofinjury].diagnosis[x]
* diagnosis[externalcauseofinjury].diagnosis[x] only CodeableConcept
* diagnosis[externalcauseofinjury].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[other].type 1..1
* diagnosis[other].type = PCTDiagnosisType#other
* diagnosis[other].diagnosis[x] MS
* diagnosis[other].diagnosis[x] only CodeableConcept
* diagnosis[other].diagnosis[x] from PCTDiagnosticCodes (required)

* insert ProcedureSlicing
//* procedure.procedure[x] MS
//* procedure.procedure[x] only CodeableConcept
* procedure.type MS
* procedure.type from PCTProcedureTypeVS
* procedure.extension contains ServiceDescription named serviceDescription 1..1
* procedure contains
   principal 0..1 MS and
   other 0..24 MS
* procedure[principal].type 1..1
* procedure[principal].type = PCTProcedureType#principal
* procedure[principal].sequence = 1
* procedure[principal].procedure[x]
* procedure[principal].procedure[x] only CodeableConcept
* procedure[principal].procedure[x] from ICD10ProcedureCodes (required)
* procedure[principal] ^short = "Principal clinical procedure performed"
* procedure[other].type 1..1
* procedure[other].type = PCTProcedureType#other
* procedure[other].procedure[x]
* procedure[other].procedure[x] only CodeableConcept
* procedure[other].procedure[x] from PCTProcedureSurgicalCodes

* insert CareTeamSlicing
//* careTeam 0..* MS
* careTeam.provider 1..1
// ISSUE: does the qualification code give the taxonomy code? If so, no need to have PractitionerRole??
* careTeam.provider only Reference(PCTPractitioner or PCTOrganization)
//* careTeam.provider ^short = ""
* careTeam.role 1..1
* careTeam.role from PCTCareTeamRoleVS
* careTeam.qualification from $USCPROCROLE (required)
* careTeam contains
   attending 0..1 MS and
   operating 0..2 MS and
   rendering 0..1 MS and
   referring 0..1 MS
* careTeam[attending].role = PCTCareTeamRole#attending
//* careTeam[attending] ^short = "May be used for the Institutional case only"
* careTeam[attending].provider only Reference(PCTPractitioner)
* careTeam[attending].qualification 1..1 
* careTeam[operating].role = PCTCareTeamRole#operating
* careTeam[operating].provider only Reference(PCTPractitioner)
//* careTeam[operating] ^short = "May be used for the Institutional case only"
* careTeam[rendering].role = PCTCareTeamRole#rendering
* careTeam[rendering].provider only Reference(PCTPractitioner)
//* careTeam[rendering] ^short = "May be used for the Institutional/Professional case"
* careTeam[referring].role = PCTCareTeamRole#referring
// * careTeam[referring] ^short = "May be used for the Institutional/Professional case"

* insert SupportingInfoSlicing
* supportingInfo.category from PCTSupportingInfoTypeVS (extensible)
* supportingInfo contains
   typeOfBill 1..1 and
   serviceFacility 0..1 MS and
   drg 0..1 and
   pointoforigin 0..1 and
   admtype 0..1
   

* supportingInfo[typeOfBill].category
* supportingInfo[typeOfBill].category = PCTSupportingInfoType#typeofbill 
* supportingInfo[typeOfBill].code 1..1
* supportingInfo[typeOfBill].code from PCTGFETypeOfBillVS (required)

* supportingInfo[serviceFacility] ^short = "Service Facility"
* supportingInfo[serviceFacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Performing Provider."
* supportingInfo[serviceFacility].category = PCTSupportingInfoType#servicefacility
* supportingInfo[serviceFacility].category
* supportingInfo[serviceFacility].valueReference 1..1
* supportingInfo[serviceFacility].valueReference only Reference(PCTOrganization)

* supportingInfo[drg].category = PCTSupportingInfoType#drg
* supportingInfo[drg].code from USClaimDRGCodes (required)

* supportingInfo[pointoforigin].category = PCTSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].code from AHANUBCPointOfOriginVS  (required)

* supportingInfo[admtype].category = PCTSupportingInfoType#admtype
* supportingInfo[admtype].code from AHANUBCPriorityTypeOfAdmissionOrVisitVS   (required)

* item 1..999
* item.extension contains GFEBillingProviderLineItemCtrlNum named gfeBillingProviderLineItemCtrlNum 0..1 MS
* item.extension contains ServiceDescription named serviceDescription 1..1
* item.extension contains ProviderEventMethodology named ProviderEventMethodology 0..1 MS
* item.extension[ProviderEventMethodology] ^short = "Provider Event Methodology"
* item.extension[ProviderEventMethodology] ^comment = "The method a provider used to group services. The extension definition contains additional detail"

* item.revenue 1..1
* item.revenue from PCTGFEItemRevenueVS (required)
* item.revenue ^short = "Revenue or cost center code - must provide a value for the Institutional case"

* item.modifier 0..4 MS
* item.modifier from PCTGFEItemCptHcpcsVS (required)

* item.productOrService from USClaimMedicalProductOrServiceCodes (required)
//* item.productOrService obeys GFE-inst-item-productorservice
* item.productOrService ^comment = "Can include null or N/A or data absent reason for the In-Patient Institutional case."

* item.serviced[x] 1..1
* item.serviced[x] ^short = "This is the planned or estimated date(s)s of service"
* item.serviced[x] ^definition = "This is the planned or estimated dates of service. Use Revenue code to determine inpatient stays if needed for adjudication"

* item.unitPrice
* item.net 1..1 
* item.net ^short = "Total charge amount for the service line"
* item.quantity 1..1

* item.locationCodeableConcept MS
* item.locationCodeableConcept from PCTGFECMSPOS (required)

* item.detail MS
* item.detail ^short = "Drug Identification Information"
//ISSUE: use FDANDCOrCompound or FDANationalDrugCode from CARIN BB??
* item.detail.productOrService from PCTGFEItemNDCVS (required)

* item.detail.quantity MS

* item.serviced[x] MS

* total 1..1
* total ^short = "Total GFE Charges Submitted"


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_missing_bundle.fsh

Profile: PCTGFEMissingBundle
Parent: Bundle
Id: davinci-pct-gfe-missing-bundle
Title: "PCT GFE Missing Bundle"
Description: "PCT GFE Missing Bundle is used to indicate when a GFE Contributor task request was made, but no GFE Bundle was submitted (attached to the ContributorTask)."
* insert DraftArtifact

* type = #collection (exactly)
* timestamp 1..1
//TODO: create a FHIRPath invariant to enforce that at least one entry.resource must be either PCTGFEInstitutional or PCTGFEProfessional
* entry 1..*
* entry.fullUrl 1..1
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
// * entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slice different resources included in the bundle"
* entry contains
    patient 1..1 and
    coverage 0..1 MS and
    organization 0..2 MS and
    practitioner 0..1 MS and
    requested-items-service 0..* MS and
    requested-items-medication 0..* MS and
    requested-items-device 0..* MS and
    requested-items-nutrition 0..* MS and
    requested-items-vision 0..* MS 

* entry[patient] ^short = "SHALL have the patient subject of care and may have a separate subscriber"
* entry[patient].resource 1..1
* entry[patient].resource only HRexPatientDemographics

* entry[coverage] ^short = "MAY have one Coverage"
* entry[coverage].resource 1..1
* entry[coverage].resource only PCTCoverage

* entry[organization] ^short = "MAY have the payer organization and may have provider organization"
* entry[organization].resource 1..1 
* entry[organization].resource only PCTOrganization

* entry[practitioner] ^short = "MAY have the provider Practitioner"
* entry[practitioner].resource 1..1 
* entry[practitioner].resource only PCTPractitioner

* entry[requested-items-service] ^short = "Items the request is about - PCTServiceRequest"
* entry[requested-items-service].resource 1..1
* entry[requested-items-service].resource only PCTServiceRequest

* entry[requested-items-medication] ^short = "Items the request is about - PCTMedicationRequest"
* entry[requested-items-medication].resource 1..1
* entry[requested-items-medication].resource only PCTMedicationRequest

* entry[requested-items-device] ^short = "Items the request is about - PCTDeviceRequest"
* entry[requested-items-device].resource 1..1
* entry[requested-items-device].resource only PCTDeviceRequest

* entry[requested-items-nutrition] ^short = "Items the request is about - NutritionOrder"
* entry[requested-items-nutrition].resource 1..1
* entry[requested-items-nutrition].resource only NutritionOrder

* entry[requested-items-vision] ^short = "Items the request is about - VisionPrescription"
* entry[requested-items-vision].resource 1..1
* entry[requested-items-vision].resource only VisionPrescription



---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_professional.fsh

Profile: PCTGFEProfessional
Parent: Claim
Id: davinci-pct-gfe-professional
Title: "PCT Good Faith Estimate Professional"
Description: "PCT Good Faith Estimate Professional is a profile for capturing submission data needed to be processed by a payer for the creation of an Advanced EOB. This profile is used for a professional GFE submission."
* insert TrialUseArtifact
* insert IdentifierSlicing
* identifier contains
   PLAC 1..1 and
   INTER 0..*
* identifier[PLAC].type = $V2-0203#PLAC "Placer Identifier"
* identifier[PLAC].system MS
* identifier[PLAC].value 1..1
* identifier[PLAC] ^short = "Provider Assigned Identifier for GFE Claim"
* identifier[INTER].type = PCTIdentifierType#INTER "Intermediary System Identifier"
* identifier[INTER] ^short = "Intermediary System Identifier"

//// Profile entension elements ////
/* Remove GFE Submitter
* extension contains GFESubmitter named gfeSubmitter 1..1
* extension[gfeSubmitter] ^short = "The scheduling entity that submits the GFE to provide a collection of services to a payer for the creation of an Advanced EOB"
*/
//* extension contains PlannedPeriodOfService named plannedPeriodOfService 0..* MS
//* extension[plannedPeriodOfService] ^short = "This could be the scheduled date(s) of a particular admission/service or a series of admissions/services."
* extension contains GFEServiceLinkingInfo named gfeServiceLinkingInfo 0..1 MS
* extension[gfeServiceLinkingInfo] ^short = "GFE Service Linking Information"
// * extension contains ReferralNumber named referralNumber 0..2 MS
// * extension[referralNumber] ^short = "Referral Number"
* extension contains ProviderEventMethodology named providerEventMethodology 0..1 MS
* extension[providerEventMethodology] ^short = "Provider event collection methodology"
* extension[providerEventMethodology] ^definition = "How the provider determined the number of claims and the number and type of billing providers to include in the GFE. Examples include provider episodes of care experience, PACES, order set based on clinical guidelines, payor suggested grouping, or some other method of determination. The extension definition contains additional detail."
* extension contains GFEDisclaimer named gfeDisclaimer 0..* MS
* extension[gfeDisclaimer].value[x] only string
* extension[gfeDisclaimer] ^short = "Disclaimers the patient should be made aware of regarding the providers estimate"


* type = $ClaimTypeCS#professional
* use = $CLAIMUSECS#predetermination "predetermination"

* patient only Reference(HRexPatientDemographics)

// Billing provider--get Taxonomy Code and Organization from PractitionerRole
* provider only Reference(PCTOrganization or PCTPractitioner)
* provider ^short = "Billing provider - party responsible for the GFE"
* provider.extension contains ProviderTaxonomy named providerTaxonomy 1..1
* provider.extension[providerTaxonomy] ^short = "Provider taxonomy codes consisting of NUCC Health Care Provider Taxonomy Code Set for providers"
* provider.extension contains GFEConsentForBalanceBilling named consentForBalanceBilling 0..1 MS

* priority from $PROCPRIORITYVS (required)

* insurer 0..1 MS
* insurer ^short = "Required if insured estimate"
* insurer only Reference(PCTOrganization)

* payee MS
* payee.party only Reference(PCTPractitioner or PCTOrganization)
//TODO: create vS for payee.type like https://build.fhir.org/ig/HL7/carin-bb/ValueSet-C4BBPayeeType.html
//TODO: for now put in a placeholder statement about formal VS to be created...

* referral.extension contains ReferralNumber named referralNumber 1..1
* referral.extension[referralNumber] ^short = "Referral Number"

* accident.location[x] only Address
* accident.location[x].country from $ISO3166-P1-ALPHA2-VS (required)

//* supportingInfo.category from $C4BBSupportingInfoType (extensible)


* insurance.coverage only Reference(PCTCoverage)
* insurance.coverage.extension contains $DARExtensionUrl named dataAbsentReason 0..1 MS
* insurance.coverage.extension[dataAbsentReason] ^short = "Coverage may be not applicable if estimate is for self-pay or uninsured"

* insurance.preAuthRef 0..2

* insert DiagnosisSlicing
* diagnosis 1..*
//* diagnosis.diagnosis[x] MS
//* diagnosis.diagnosis[x] only CodeableConcept
//* diagnosis.diagnosis[x] from http://hl7.org/fhir/ValueSet/icd-10 (required)
* diagnosis.type MS
* diagnosis.type from PCTDiagnosisTypeVS
* diagnosis contains
   principal 1..1 and
   other 0..11 MS
* diagnosis[principal].type 1..1
* diagnosis[principal].type = $DIAGTYPECS#principal
* diagnosis[principal].sequence = 1
* diagnosis[principal].diagnosis[x]
* diagnosis[principal].diagnosis[x] only CodeableConcept
* diagnosis[principal].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[other].type 1..1
* diagnosis[other].type = PCTDiagnosisType#other
* diagnosis[other].diagnosis[x]
* diagnosis[other].diagnosis[x] only CodeableConcept
* diagnosis[other].diagnosis[x] from PCTDiagnosticCodes (required)

* insert ProcedureSlicing
//* procedure.procedure[x] MS
//* procedure.procedure[x] only CodeableConcept
* procedure.type MS
* procedure.type from PCTProcedureTypeVS
* procedure.extension contains ServiceDescription named serviceDescription 1..1
* procedure contains
   anesthesiaRelated 0..2 MS and
   other 0..24 MS
* procedure[anesthesiaRelated].type 1..1
* procedure[anesthesiaRelated].type = PCTProcedureType#procedureRequiringAnesthesia
* procedure[anesthesiaRelated].procedure[x] only CodeableConcept
* procedure[anesthesiaRelated].procedure[x] from PCTProcedureSurgicalCodes


* insert CareTeamSlicing
//* careTeam 0..*
* careTeam.provider 1..1
// ISSUE: does the qualification code give the taxonomy code? If so, no need to have PractitionerRole??
* careTeam.provider only Reference(PCTPractitioner or PCTOrganization)
//* careTeam.provider ^short = ""
* careTeam.role 1..1
* careTeam.role from PCTCareTeamRoleVS
* careTeam.qualification
* careTeam.qualification from $USCPROCROLE (required)
* careTeam contains
   rendering 0..* and
   referring 0..1
* careTeam[rendering].role = PCTCareTeamRole#rendering
//* careTeam[rendering] ^short = "May be used for the Institutional/Professional case"
* careTeam[rendering].qualification 1..1
* careTeam[rendering].qualification ^short = "Practitioner credential or specialization - must provide a taxonomy code for the Professional case"
* careTeam[referring].role = PCTCareTeamRole#referring
// * careTeam[referring] ^short = "May be used for the Institutional/Professional case"

* insert SupportingInfoSlicing
* supportingInfo.category from PCTSupportingInfoTypeVS (extensible)
* supportingInfo contains
   serviceFacility 0..1 MS

* supportingInfo[serviceFacility] ^short = "Service Facility"
* supportingInfo[serviceFacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Performing Provider."
* supportingInfo[serviceFacility].category = PCTSupportingInfoType#servicefacility
* supportingInfo[serviceFacility].category
* supportingInfo[serviceFacility].valueReference 1..1
* supportingInfo[serviceFacility].valueReference only Reference(PCTOrganization)

* supportingInfo contains claimFrequency 0..1 MS
* supportingInfo[claimFrequency] ^short = "Claim Frequency"
* supportingInfo[claimFrequency] ^comment = "Claim frequency - uses the last digit of the NUBC type of billing code."
* supportingInfo[claimFrequency].category = PCTSupportingInfoType#claimFrequency
* supportingInfo[claimFrequency].code 1..1
* supportingInfo[claimFrequency].code from PCTGFEFrequencyVS (required)

* item 1..50
* item.extension contains ReferralNumber named referralNumber 0..11 MS
* item.extension[referralNumber] ^short = "Referral Number"
* item.extension contains GFEBillingProviderLineItemCtrlNum named gfeBillingProviderLineItemCtrlNum 0..1 MS
* item.extension contains ServiceDescription named serviceDescription 1..1
* item.extension contains ProviderEventMethodology named ProviderEventMethodology 0..1 MS
* item.extension[ProviderEventMethodology] ^short = "Provider Event Methodology"
* item.extension[ProviderEventMethodology] ^comment = "The method a provider used to group services. The extension definition contains additional detail."

* item.careTeamSequence MS

// * item.revenue MS
// * item.revenue from PCTGFEItemRevenueVS (example)
// * item.revenue ^short = "Revenue or cost center code - must provide a value for the Institutional case"

* item.modifier 0..4 MS
* item.modifier from PCTGFEItemCptHcpcsVS (required)

* item.productOrService from USClaimMedicalProductOrServiceCodes (required)
// * item.productOrService ^comment = "Must be provided with an actual CPT/HCPCS value. Can’t be null or N/A or data absent reason."

* item.serviced[x] 1..1
* item.serviced[x] ^short = "This is the planned or estimated date(s)s of service"
* item.serviced[x] ^definition = "This is the planned or estimated dates of service. Use Revenue code to determine inpatient stays if needed for adjudication"

* item.unitPrice 1..1
* item.net 1..1 
* item.net ^short = "Total charge amount for the service line"
* item.quantity 1..1

* item.location[x] only CodeableConcept
* item.locationCodeableConcept 1..1
* item.locationCodeableConcept from PCTGFECMSPOS (required)

* item.detail MS
* item.detail ^short = "Drug Identification Information"
//ISSUE: use FDANDCOrCompound or FDANationalDrugCode from CARIN BB??
* item.detail.productOrService from USClaimMedicalProductOrServiceCodes (required)

* item.detail.quantity MS

* item.serviced[x] MS

* total 1..1
* total ^short = "Total GFE Charges Submitted"


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_service_location.fsh

Profile: PCTServiceLocation
Parent: $USCoreLocation
Id: davinci-pct-service-location
Title: "PCT Service Location"
Description: "The PCT Service Location provides information where the service is to be performed or the item delivered. This could be used to express an actual physical location or a facility type."
* insert DraftArtifact

* type MS


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_gfe_summary.fsh

Profile: PCTGFESummary
Parent: Claim
Id: davinci-pct-gfe-summary
Title: "PCT Good Faith Estimate  Summary"
//Description: "This profile is used for exchanging a summary of Explanation of Benefit (EoB) information, including costs and benefits, of all of the Advanced EoB data contained within an Advance EoB Bundle."
Description: "PCT Good Faith Estimate Summary is a profile for summarizing costs associated with a set of Good Faith Estimate Claims for a single Period of Care."
* insert TrialUseArtifact1
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.description = "Slice based on $this pattern"
* identifier contains
   INTER 0..*
* identifier[INTER].type = PCTIdentifierType#INTER "Intermediary System Identifier"
* identifier[INTER] ^short = "Intermediary System Identifier"

* extension contains GFEDisclaimer named gfeDisclaimer 0..* MS and
                     ServiceDescription named serviceDescription 0..1 MS
* extension[gfeDisclaimer].value[x] only string
* extension[gfeDisclaimer] ^short = "Disclaimers the patient should be made aware of regarding the estimate"

* billablePeriod MS
* billablePeriod ^short = "The full Period of Care for all services or products included in the estimate from the first event to the last event."


* type = PCTEstimateTypeSummaryCSTemporaryTrialUse#estimate-summary
* subType 0..0
* use = $CLAIMUSECS#predetermination "predetermination"


* patient only Reference(HRexPatientDemographics)

* enterer 0..0

* insurer MS
* insurer only Reference(PCTOrganization)

// Multiple providers. 
* provider.reference 0..0
* provider.type 0..0
* provider.identifier 0..0
* provider.display 0..0
* provider.extension contains http://hl7.org/fhir/StructureDefinition/data-absent-reason named dataAbsentReason 1..1
* provider.extension[dataAbsentReason].valueCode = #not-applicable

* priority from $PROCPRIORITYVS (required)

* fundsReserve 0..0

* prescription 0..0
* originalPrescription 0..0
* payee 0..0
* referral 0..0

* facility 0..0

* insurance.coverage only Reference(PCTCoverage)
* insurance.preAuthRef 0..0

* accident.location[x] only Address
* accident.location[x].country from $ISO3166-P1-ALPHA2-VS (required)

* insert DiagnosisSlicing
* diagnosis 1..*
//* diagnosis.diagnosis[x] MS
//* diagnosis.diagnosis[x] only CodeableConcept
//* diagnosis.diagnosis[x] from http://hl7.org/fhir/ValueSet/icd-10 (required)
* diagnosis.type MS
* diagnosis.type from PCTDiagnosisTypeVS
* diagnosis contains
   principal 1..1 and
   admitting 0..1 MS and
   patientReasonForVisit 0..3 MS and
   externalcauseofinjury 0..12 MS and
   other 0..24 MS
* diagnosis[principal].type 1..1
* diagnosis[principal].type = $DIAGTYPECS#principal
* diagnosis[principal].sequence = 1
* diagnosis[principal].diagnosis[x]
* diagnosis[principal].diagnosis[x] only CodeableConcept
* diagnosis[principal].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[admitting].type 1..1
* diagnosis[admitting].type = $DIAGTYPECS#admitting
* diagnosis[admitting].diagnosis[x]
* diagnosis[admitting].diagnosis[x] only CodeableConcept
* diagnosis[admitting].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[patientReasonForVisit].type 1..1
* diagnosis[patientReasonForVisit].type = PCTDiagnosisType#patientReasonForVisit
* diagnosis[patientReasonForVisit].diagnosis[x]
* diagnosis[patientReasonForVisit].diagnosis[x] only CodeableConcept
* diagnosis[patientReasonForVisit].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[externalcauseofinjury].type 1..1
* diagnosis[externalcauseofinjury].type = PCTDiagnosisType#externalCauseOfInjury
* diagnosis[externalcauseofinjury].diagnosis[x]
* diagnosis[externalcauseofinjury].diagnosis[x] only CodeableConcept
* diagnosis[externalcauseofinjury].diagnosis[x] from PCTDiagnosticCodes (required)
* diagnosis[other].type 1..1
* diagnosis[other].type = PCTDiagnosisType#other
* diagnosis[other].diagnosis[x] MS
* diagnosis[other].diagnosis[x] only CodeableConcept
* diagnosis[other].diagnosis[x] from PCTDiagnosticCodes (required)

* insert ProcedureSlicing
//* procedure.procedure[x] MS
//* procedure.procedure[x] only CodeableConcept
* procedure.type MS
* procedure.type from PCTProcedureTypeVS

* procedure.extension contains ServiceDescription named serviceDescription 1..1
* procedure contains
   principal 0..1 MS and
   other 0..24 MS
* procedure[principal].type 1..1
* procedure[principal].type = PCTProcedureType#principal
* procedure[principal].sequence = 1
* procedure[principal].procedure[x]
* procedure[principal].procedure[x] only CodeableConcept
* procedure[principal].procedure[x] from ICD10ProcedureCodes (required)
* procedure[principal] ^short = "Principal clinical procedure performed"
* procedure[other].type 1..1
* procedure[other].type = PCTProcedureType#other
* procedure[other].procedure[x]
* procedure[other].procedure[x] only CodeableConcept
* procedure[other].procedure[x] from PCTProcedureSurgicalCodes

* insert CareTeamSlicing
//* careTeam 0..* MS
* careTeam.provider 1..1
// ISSUE: does the qualification code give the taxonomy code? If so, no need to have PractitionerRole??
* careTeam.provider only Reference(PCTPractitioner or PCTOrganization)
//* careTeam.provider ^short = ""
* careTeam.role 1..1
* careTeam.role from PCTCareTeamRoleVS
* careTeam.qualification from $USCPROCROLE (required)
* careTeam contains
   attending 0..1 MS and
   operating 0..2 MS and
   rendering 0..1 MS and
   referring 0..1 MS
* careTeam[attending].role = PCTCareTeamRole#attending
//* careTeam[attending] ^short = "May be used for the Institutional case only"
* careTeam[attending].provider only Reference(PCTPractitioner)
* careTeam[attending].qualification 1..1 
* careTeam[operating].role = PCTCareTeamRole#operating
* careTeam[operating].provider only Reference(PCTPractitioner)
//* careTeam[operating] ^short = "May be used for the Institutional case only"
* careTeam[rendering].role = PCTCareTeamRole#rendering
* careTeam[rendering].provider only Reference(PCTPractitioner)
//* careTeam[rendering] ^short = "May be used for the Institutional/Professional case"
* careTeam[referring].role = PCTCareTeamRole#referring
// * careTeam[referring] ^short = "May be used for the Institutional/Professional case"


* supportingInfo 0..0


* item 0..0

* total 1..1
* total ^short = "Total GFE Charges"






---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_medicationrequest.fsh

Profile: PCTMedicationRequest
Parent: MedicationRequest
Id: davinci-pct-medicationrequest
Title: "PCT GFE MedicationRequest"
Description: "The PCT MedicationRequest including details about a medication for which a GFE is being requested."
* insert DraftArtifact

* status = #active
* intent = #proposal
* doNotPerform 0..0

* medication[x] 1..1 MS

* subject only Reference(HRexPatientDemographics)


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_operations.fsh

Instance: GFESubmitOperation
InstanceOf: OperationDefinition
Description: "This operation is used by an entity to submit one or multiple GFEs as a Bundle containing the GFE(s) and other referenced resources for processing. The only input parameter is the single Bundle resource with one or multiple GFE(s) - each of which is based on the Claim resource (along with other referenced resources). The only output is a url for subsequent polling per [async pattern](https://hl7.org/fhir/R5/async-bundle.html). If after polling the response is complete, then the result will either be a single Bundle with the AEOB - which is based on the ExplanationOfBenefit resource, (and other referenced resources) or an OperationOutcome resource indicating the AEOB will be sent directly to the patient and not to the provider."
Usage: #definition

* id = "GFE-submit"
* url = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/GFE-submit"
* name = "GFESubmit"
* title = "Submit a GFE resource for the creation of an AEOB"
* status = #active
* kind = #operation
* description = "This operation is used by an entity to submit one or multiple GFEs as a Bundle containing the GFE(s) and other referenced resources for processing. The only input parameter is the single Bundle resource with one or multiple GFE(s) - each of which is based on the Claim resource (along with other referenced resources). The output is a url in the Content-Location header for subsequent polling and optionally an OperationOutcome resource per [async pattern](https://hl7.org/fhir/R5/async-bundle.html). If after polling the response is complete, then the result will either be a single Bundle with the AEOB - which is based on the ExplanationOfBenefit resource, (and other referenced resources) or an OperationOutcome resource indicating the AEOB will be sent directly to the patient."
* code = #gfe-submit
* base = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/GFE-submit"
* resource = #Claim
* system = false
* type = true
* instance = false
* parameter[0].name = #resource
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
//* parameter[0].targetProfile = Canonical(PCTGFECollectionBundle)
* parameter[0].documentation = "A Bundle containing a single or multiple GFE resources plus referenced resources."
* parameter[0].type = #Bundle
* parameter[1].name = #return
* parameter[1].use = #out
* parameter[1].min = 0
* parameter[1].max = "1"
* parameter[1].documentation = "When successful, this will return a Bundle of type batch-submit; When there is an error calling $gfe-submit (4xx, 5xx HTTP code) then an OperationOutcome must be returned per the [async pattern](https://hl7.org/fhir/R5/async-bundle.html)."
* parameter[1].type = #OperationOutcome

// Note: This is no longer needed. We will use FHIR queries instead. LD
//
// Instance: AEOBInquiryOperation
// InstanceOf: OperationDefinition
// Description: "This operation is used to make an inquiry for an AEOB as a Bundle containing the AEOB and other referenced resources. The only input parameter is the resource id of the Bundle returned when the GFESubmit operation was invoked successfully and the only output is a single Bundle with the AEOB - which is based on the ExplanationOfBenefit resource, (and other referenced resources) or an OperationOutcome resource."
// Usage: #definition

// * id = "AEOB-inquiry"
// * url = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/AEOB-inquiry"
// * name = "AEOBInquiry"
// * title = "Inquiry for a Bundle containing a single AEOB resource plus referenced resources."
// * status = #draft
// * kind = #operation
// * code = #aeob-inquiry
// * base = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/AEOB-inquiry"
// * resource = #Bundle
// * system = false
// * type = true
// * instance = false
// * parameter[0].name = #value
// * parameter[0].use = #in
// * parameter[0].min = 1
// * parameter[0].max = "1"
// * parameter[0].documentation = "The resource id of the Bundle returned when the GFESubmit operation was invoked successfully for the creation of an AEOB."
// * parameter[0].type = #id
// * parameter[1].name = #return
// * parameter[1].use = #out
// * parameter[1].min = 1
// * parameter[1].max = "1"
// * parameter[1].documentation = "A Bundle containing a single AEOB resource plus referenced resources."
// * parameter[1].type = #Bundle


Instance: GFERetrieveOperation
InstanceOf: OperationDefinition
Description: "This operation is used by an entity to retrieve a GFE Collection Bundle containing the GFE Bundle(s) and other referenced resources based on a GFE Coordination Task. The only input parameter is the single reference to the coordination task resource. The only output is a GFE Collection Bundle. If the task reference is to a Coordinating Task, this will return the GFE Collection Bundle. If this task reference is for a GFE Contributor Task, it returns the GFE Bundle, if present. If a GFE Bundle does not exist for an associated Contributor Task, in place of a GFE Bundle, a GFE Missing Bundle is provided (either directly in a response if the referenced task was a Contributor Task or inside the GFE Collection Bundle if the referenced task was a Coordinating Task.)"
Usage: #definition

* id = "GFE-retrieve"
* url = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/GFE-retrieve"
* name = "GFERetrieve"
* title = "Retrieve GFE Collection Bundle"
* status = #active
* kind = #operation
* description = "This operation is used by an entity to retrieve a GFE Collection Bundle containing the GFE Bundle(s) and other referenced resources based on a GFE Coordination Task. The only input parameter is the single reference to the GFE Coordination Task resource. The only output is a GFE Collection Bundle."
* code = #gfe-retrieve
* base = "http://hl7.org/fhir/us/davinci-pct/OperationDefinition/GFE-retrieve"
//* resource = #Claim
* system = false
* type = true
* instance = false
* parameter[0].name = #request
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].targetProfile = Canonical(PCTGFECoordinationTask)
* parameter[0].documentation = "A reference to a GFE Coordination Task."
* parameter[0].type = #Reference
* parameter[1].name = #return
* parameter[1].use = #out
* parameter[1].min = 1
* parameter[1].max = "1"
//* parameter[0].targetProfile = Reference(PCTGFECollectionBundle)
* parameter[1].documentation = "A GFE Request Collection Bundle containing the GFE Bundles of the submitted GFE Bundles by the GFE Contributors."
* parameter[1].type = #Bundle



---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_organization.fsh

Profile: PCTOrganization
Parent: HRexOrganization
Id: davinci-pct-organization
Title: "PCT Organization"
Description: "The PCT Organization profile builds upon the US Core Organization profile. It is used to convey a payer, provider, payee, or service facility organization."
* insert TrialUseArtifact

* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.ordered = false   // can be omitted, since false is the default
* identifier ^slicing.description = "Slice based on $this pattern"
* identifier contains
   ETIN 0..1 MS and
   payerid 0..1 MS and
   naiccode 0..1 MS
* identifier[ETIN] ^patternIdentifier.type = PCTOrgIdentifierTypeCS#ETIN 
//* identifier[ETIN].type = PCTOrgIdentifierTypeCS#ETIN "Electronic Transmitter Identification Number" <<<<<WOULD CAUSE slicing errors
//* identifier[ETIN].value 1..1 <<<<<<<<< DOES NOT WORK
* identifier[ETIN] ^short = "Electronic Transmitter Identification Number."

* identifier[payerid] ^patternIdentifier.type = PCTOrgIdentifierTypeCS#payerid
* identifier[payerid].value 1..1

* identifier[naiccode] ^patternIdentifier.type = PCTOrgIdentifierTypeCS#naiccode
* identifier[naiccode].system = "urn:oid:2.16.840.1.113883.6.300"
* identifier[naiccode].value 1..1

* identifier[tin] ^patternIdentifier.type = $V2-0203#TAX 
* identifier[tin] ^short = "Tax ID Number"

* identifier[NPI] ^patternIdentifier.type = $V2-0203#NPI
//* identifier[NPI].value 1..1
//* identifier[NPI] ^short = "The National Provider Identifier assigned to the provider."

* identifier[ccn] ^short = "Medicare Certification Number - Should only be included in Medicare related transactions"
* identifier[ccn] ^definition = "Medicare Certification Number - Only relevant for Medicare related transactions. Must Support is only applicable for Medicare-based transactions."

* type 1..*
* type from PCTOrganizationTypeVS (extensible)

//TODO: add extension for countrySubdivisionCode
* address.extension contains CountrySubdivisionCode named countrySubdivisionCode 0..1 MS
* address.extension[countrySubdivisionCode] ^short = "Country Subdivision Code - from Part 2 of ISO 3166"

* address.country MS
* address.country from $ISO3166-P1-ALPHA2-VS (required)

//need these for Professional GFE Submitter??
* insert OrgContactSlicing
//* contact 0..* MS

* contact.purpose from PCTOrgContactPurposeTypeVS (extensible)
* contact contains
   gfeServiceHotline 0..1 MS
* contact[gfeServiceHotline].name 1..1
* contact[gfeServiceHotline].telecom 1..*
* contact[gfeServiceHotline].purpose
* contact[gfeServiceHotline].purpose = PCTOrgContactPurposeType#GFERELATED

//TODO: slice contact for defining PAY-TO
//* contact[payToAddress]

//TODO: slice telcom to require phone and email
//* contact.telecom MS


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_practitioner.fsh

Profile: PCTPractitioner
Parent: HRexPractitioner
Id: davinci-pct-practitioner
Title: "PCT Practitioner"
Description: "The PCT Practitioner profile builds upon the US Core Practitioner profile. It is used to convey information about the practitioner who will be providing services to the patient as described on the GFE."
* insert TrialUseArtifact

// * extension contains PCTEndpoint named endpoint 0..* MS
// * extension[endpoint] ^short = "Technical endpoints providing access to services operated for the practitioner."

// * identifier ^slicing.discriminator.path = "type"
// * identifier ^slicing.rules = #open
// * identifier ^slicing.discriminator.type = #pattern
// * identifier ^slicing.ordered = false   // can be omitted, since false is the default
// * identifier ^slicing.description = "Slice based on $this pattern"

* identifier contains ETIN 0..1 MS and tin 0..1 MS
* identifier[ETIN] ^patternIdentifier.type = PCTOrgIdentifierTypeCS#ETIN 
* identifier[ETIN].value 1..1 MS
* identifier[ETIN] ^short = "The submitter's Electronic Transmitter Identification Number."

//* identifier contains NPI 0..1 MS
* identifier[NPI] 0..1 MS
* identifier[NPI] ^patternIdentifier.type  = $V2-0203#NPI 
* identifier[NPI].value 1..1 MS
* identifier[NPI] ^short = "The National Provider Identifier assigned to the provider."

* identifier[tin] ^patternIdentifier.type = $V2-0203#TAX 
* identifier[tin] ^short = "Tax ID Number"
* identifier[tin].value 1..1

* identifier[ccn] ^short = "Medicare Certification Number - Should only be included in Medicare related transactions"
* identifier[ccn] ^definition = "Medicare Certification Number - Only relevant for Medicare related transactions. Must Support is only applicable for Medicare-based transactions."


* name.given 1..1

//TODO: add slices for phone and email
* telecom MS

* qualification.code from http://terminology.hl7.org/ValueSet/v3-NUCCProviderCodes (required)

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/pct_servicerequest.fsh

Profile: PCTServiceRequest
Parent: ServiceRequest
Id: davinci-pct-servicerequest
Title: "PCT GFE ServiceRequest"
Description: "The PCT ServiceRequest including details about a service for which a GFE is being requested."
* insert TrialUseArtifact

* status = #active
* intent = #proposal
* doNotPerform 0..0

* code 1..1 MS
* code from USClaimMedicalProductOrServiceCodes (extensible)

* quantity[x] MS

* subject only Reference(HRexPatientDemographics)


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/rulesets.fsh

//// Rulesets

RuleSet: AdjudicationSlicing
* adjudication ^slicing.discriminator.type = #pattern
* adjudication ^slicing.discriminator.path = "category"
* adjudication ^slicing.rules = #open
* adjudication ^slicing.ordered = false   // can be omitted, since false is the default
* adjudication ^slicing.description = "Slice based on $this pattern"
* adjudication MS

RuleSet: ItemAdjudicationSlicing
* item.adjudication ^slicing.discriminator.type = #pattern
* item.adjudication ^slicing.discriminator.path = "category"
* item.adjudication ^slicing.rules = #open
* item.adjudication ^slicing.ordered = false   // can be omitted, since false is the default
* item.adjudication ^slicing.description = "Slice based on $this pattern"
* item.adjudication 1.. MS

RuleSet: SupportingInfoSlicing
* supportingInfo ^slicing.discriminator.type = #pattern
* supportingInfo ^slicing.discriminator.path = "category"
* supportingInfo ^slicing.rules = #open
* supportingInfo ^slicing.ordered = false   // can be omitted, since false is the default
* supportingInfo ^slicing.description = "Slice based on $this pattern"
* supportingInfo MS

RuleSet: DiagnosisSlicing
* diagnosis ^slicing.discriminator.type = #pattern
* diagnosis ^slicing.discriminator.path = "type"
* diagnosis ^slicing.rules = #open
* diagnosis ^slicing.ordered = false   // can be omitted, since false is the default
* diagnosis ^slicing.description = "Slice based on $this pattern"
* diagnosis MS

RuleSet: ProcedureSlicing
* procedure ^slicing.discriminator.type = #pattern
* procedure ^slicing.discriminator.path = "type"
* procedure ^slicing.rules = #open
* procedure ^slicing.ordered = false   // can be omitted, since false is the default
* procedure ^slicing.description = "Slice based on $this pattern"
* procedure MS

RuleSet: CareTeamSlicing
* careTeam ^slicing.discriminator.type = #pattern
* careTeam ^slicing.discriminator.path = "role"
* careTeam ^slicing.rules = #open
* careTeam ^slicing.ordered = false   // can be omitted, since false is the default
* careTeam ^slicing.description = "Slice based on $this pattern"
* careTeam MS

RuleSet: OrgContactSlicing
* contact ^slicing.discriminator.type = #pattern
* contact ^slicing.discriminator.path = "purpose"
* contact ^slicing.rules = #open
* contact ^slicing.ordered = false   // can be omitted, since false is the default
* contact ^slicing.description = "Slice based on $this pattern"
* contact MS

RuleSet: IdentifierSlicing
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on type pattern"

RuleSet: TotalSlicing
* total ^slicing.rules = #open
* total ^slicing.ordered = false   // can be omitted, since false is the default
* total ^slicing.description = "Slice based on value pattern"
* total  ^slicing.discriminator.type = #pattern
* total  ^slicing.discriminator.path = "category"
* total.category 1..1 MS

//// Invariants


RuleSet: DraftArtifact
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #draft
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 0
* ^status = #draft

RuleSet: TrialUseArtifact
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #trial-use
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 2


RuleSet: TrialUseArtifact1
* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* ^extension[=].valueCode = #trial-use
* ^extension[+].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm"
* ^extension[=].valueInteger = 1

//// NOTE: based on CARIN-BB IG -- see C4BBExplanationOfBenefit profile
//// Invariants

// Invariant:  EOB-insurance-focal
// Description: "EOB.insurance:  at most one with focal = true"
// Expression: "insurance.select (focal = true).count() < 2"
// Severity:   #error

// Invariant: EOB-inst-careTeam-practitioner // rewritten with input from Lee Surprenant FHIR-28530
// Description: "Institutional EOB: Careteam roles refer to a practitioner"
// Expression: "(
// role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervising')).exists()).exists() implies
// role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervising')).exists()).exists().provider.all(resolve() is Practitioner)
// )"
// Severity: #error

// Invariant: EOB-pharm-careTeam-practitioner
// Description: "Pharmacy EOB:  Careteam roles refer to a practitioner"
// Expression: "(
// role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists() implies
// role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists().provider.all(resolve() is Organization)
// )"

// Invariant: EOB-institutional-item-or-header-adjudication
// Description: "Institutional EOB:  Should have adjudication at the item or header level, but not both"
// Expression: "(adjudication.exists() != item.adjudication.exists())"
// Severity: #error


---

File: repos/HL7_SLASH_davinci-pct/input/fsh/search_params.fsh

Instance: aeob-date-of-service
InstanceOf: SearchParameter
Usage: #definition
* url = "http://hl7.org/fhir/us/davinci-pct/SearchParameter/aeob-date-of-service"
* version = "0.1.0"
* name = "AEOBDateOfService"
* status = #active
* date = "2022-12-15"
* publisher = "HL7 International - Patient Administration Work Group"
* description = "Select planned date of service"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* code = #aeob-date-of-service
* base = #ExplanationOfBenefit
* type = #date
//* expression = "ExplanationOfBenefit.serviced[x]"
* expression = "ExplanationOfBenefit.item.serviced"
* target = #ExplanationOfBenefit

Instance: task-requested-period
InstanceOf: SearchParameter
Title: "TaskRequestedPeriod"
Description: "Search for a task by when the task should be performed"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/davinci-pct/SearchParameter/task-requested-period"
* version = "2.0.0"
* name = "TaskRequestedPeriod"
//* derivedFrom = "http://hl7.org/fhir/SearchParameter/Coverage-payor"
* status = #active
* experimental = false
* date = "2024-03-24T09:29:23+11:00"
* publisher = "HL7 Financial Management Working Group"
* contact.name = "HL7 Financial Management Working Group"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "Search for a task by when the task should be performed"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #task-requested-period
* base = #Task
* type = #date
* expression = "Task.extension.where(url='http://hl7.org/fhir/5.0/StructureDefinition/extension-Task.requestedPeriod').value"
* xpath = "f:Task/f:extension[url='http://hl7.org/fhir/5.0/StructureDefinition/extension-Task.requestedPeriod']/f.value"
* xpathUsage = #normal


Instance: task-replaces
InstanceOf: SearchParameter
Title: "TaskReplaces"
Description: "Completed or terminated task(s) whose function is taken by this new task"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/davinci-pct/SearchParameter/task-replaces"
* version = "2.0.0"
* name = "TaskReplaces"
* status = #active
* experimental = false
* date = "2024-03-24T09:29:23+11:00"
* publisher = "HL7 Financial Management Working Group"
* contact.name = "HL7 Financial Management Working Group"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "Completed or terminated task(s) whose function is taken by this new task"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #task-replaces
* base = #Task
* type = #reference
* expression = "Task.extension.where(url='http://hl7.org/fhir/StructureDefinition/task-replaces').value"
* xpath = "f:Task/f:extension[url='http://hl7.org/fhir/StructureDefinition/task-replaces']/f.value"
* xpathUsage = #normal
* target = #Task

---

File: repos/HL7_SLASH_davinci-pct/input/fsh/valuesets.fsh


ValueSet: PCTOrgIdentifierTypeVS
Title: "PCT Organization Identifier Type Value Set"
Description: "Codes to specify the type of identifiers for organizations to indicate usage for a specific purpose. This ValueSet is currently locally defined; an external FHIR value set may be created through the HL7 Terminology (THO) process to replace this value set in a future version."
* codes from valueset $IdentifierTypeVS
* codes from system PCTOrgIdentifierTypeCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTOrganizationTypeVS
Title: "PCT Organization Type Value Set"
Description: "Codes to specify the type of entity involved in the PCT GFE process. This ValueSet is currently locally defined; an external FHIR value set may be created through the HL7 Terminology (THO) process to replace this value set in a future version."
* codes from valueset $OrganizationType
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

// ValueSet: PCTGFEProcessPriorityVS
// Title: "PCT GFE Process Priority Value Set"
// Description: "Codes to specify the urgency of processing the request"
// * codes from system $PROCPRIORITY
// * ^copyright = "This Valueset is not copyrighted."

ValueSet: PCTDiagnosticCodes
Title: "PCT ICD-10 Diagnostic Codes"
Description: "ICD-10 Codes to specify the type of diagnosis"
* codes from system $ICD10CM
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTDiagnosisTypeVS
Title: "PCT Diagnosis Type Value Set"
Description: "Codes to specify the type of diagnosis"
* include $DIAGTYPECS#principal
* include $DIAGTYPECS#admitting
* codes from system PCTDiagnosisType
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTProcedureTypeVS
Title: "PCT Procedure Type Value Set"
Description: "Codes to specify the type of procedure"
* include $PROCTYPECS#primary
* codes from system PCTProcedureType
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTProcedureSurgicalCodes
Title: "PCT CMS HCPCS and AMA CPT Procedure Surgical Codes"
Description: "Combination of CMS HCPCS and AMA CPT codes to specify the type of surgical procedure"
//* include Combination of CMS HCPCS and AMA CPTs
* codes from system $HCPCS
* codes from valueset $AMACPTALL
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTGFETypeOfBillVS
Title: "PCT GFE NUBC Uniform Billing (UB-04) Type of Bill Value Set"
Description: "NUBC Uniform Billing (UB-04) codes to indicate the specific Type of Bill (TOB), e.g., hospital inpatient, outpatient, replacements, voids, etc. The first digit is a leading zero*. The fourth digit defines the frequency of the bill for the institutional and electronic professional claim."
* codes from system $TOBFL-04
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTGFEFrequencyVS
Title: "PCT GFE Frequency Code Value Set"
Description: "These codes in this value set are derived from the NUBC Uniform Billing (UB-04) Type of Bill (TOB) codes.  The fourth digit of the TOB code defines the frequency of the bill for the institutional and electronic professional claim."
* codes from system PCTGFEFrequency
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTGFEItemRevenueVS
Title: "PCT GFE NUBC Revenue Value Set"
Description: "NUBC UB-04 Revenue codes"
* codes from system $NUBCREVENUE
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTGFEItemCptHcpcsVS
Title: "PCT GFE Item CPT - HCPCS Value Set"
Description: "CPT - HCPCS codes to report medical procedures and services under public and private health insurance programs"
* codes from system $CPT
* codes from system $HCPCS
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved."
* ^experimental = false

ValueSet: PCTGFECMSPOS
Title: "PCT GFE CMS Place of Service Value Set"
Description: "CMS Place of Service codes"
* codes from system $CMSPOSCS
//* codes from system PCTGFEPOSCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTGFEItemNDCVS
Title: "PCT GFE Item NDC Value Set"
Description: "The FDA published list of NDC codes for finished drug products"
* codes from system $NDC
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTAdjudicationCategoryVS
Title: "PCT GFE Item Adjudication Value Set"
Description: "Value Set containing codes for the type of adjudication information provided."
* codes from system $ADJUDCS
* codes from system PCTAdjudicationCategoryCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTAdjudication   
Title: "PCT Adjudication Value Set"
Description: "Describes the various amount fields used when payers receive and adjudicate a claim.  It includes the values 
defined in http://terminology.hl7.org/CodeSystem/adjudication, as well as those defined in the C4BB Adjudication CodeSystem."
* $HL7AdjudicationCS#submitted 
* $HL7AdjudicationCS#copay 
* $HL7AdjudicationCS#eligible
* $HL7AdjudicationCS#deductible  
* $HL7AdjudicationCS#benefit 
* PCTAdjudication#coinsurance "Coinsurance" 
* PCTAdjudication#noncovered "Noncovered" 
* PCTAdjudication#memberliability "Member liability" 
* PCTAdjudication#discount "Discount" 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTTotal   
Title: "PCT Total Value Set"
Description: "Describes the various amount fields used when payers receive and adjudicate a claim.  It includes the values 
defined in http://terminology.hl7.org/CodeSystem/adjudication, as well as those defined in the Network Status."
* codes from valueset PCTAdjudication 
* PCTNetworkStatusCS#innetwork "In Network"
* PCTNetworkStatusCS#outofnetwork "Out Of Network"
* PCTNetworkStatusCS#negotiated "Negotiated Service or Product"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false


// ValueSet: PCTCoverageCopayTypeVS
// Title: "PCT Coverage Copay Type Value Set - locally defined for testing purpose; an external FHIR value set will be created // through the HL7 Terminology (THO) process to replace this value set"
// Description: "Codes for the classification of insurance coverage copay types for patient. This is an extension of the // // // CoverageCopayTypeCodes value set"
// Id: pct-coverage-copay-codes
// * codes from valueset $CoverageCopayTypeCodes
// * codes from system PCTCoverageCopayTypeCS
// * ^copyright = "This Valueset is not copyrighted."
// * ^experimental = false

ValueSet: PCTSubjectToMedicalMgmtReasonVS
Title: "PCT Subject-To-Medical-Management Reason Value Set"
Description: "Codes for the classification of subject-to-medical-management reasons"
//Id: pct-medical-mgmt-reason-codes
* codes from system PCTSubjectToMedicalMgmtReasonCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTSupportingInfoTypeVS
Title: "PCT Supporting Info Type Value Set"
Description: "Codes to specify the type of the supplied supporting information"
//* codes from valueset $C4BBSupportingInfoTypeVS
* codes from system PCTSupportingInfoType
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTCareTeamRoleVS
Title: "PCT Care Team Role Value Set"
Description: "Codes to specify the the functional roles of the care team members."
* $CARETEAMROLECS#primary "Primary provider"
* codes from system PCTCareTeamRole
* http://terminology.hl7.org/CodeSystem/claimcareteamrole#supervisor "Supervisor"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: PCTOrgContactPurposeTypeVS
Title: "PCT Organization Contact Purpose Value Set"
Description: "Codes for the classification of organization contact purposes. This ValueSet is currently locally defined; an external FHIR value set may be created through the HL7 Terminology (THO) process to replace this value set in a future version."
* codes from system $ContactPurposeCS
* codes from system PCTOrgContactPurposeType
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

// TODO replace with THO defined VS
ValueSet: USClaimMedicalProductOrServiceCodes
Title: "Claim Medical Product or Service Value Set"
Description: "CPT - HCPCS - HIPPS - CDT codes to report medical procedures and services under public and private health insurance programs"
* codes from system $CPT
* codes from system $CDT
* codes from system $HCPCS
* codes from system $HIPPS
* $DAR#not-applicable "Not Applicable"
// * ^copyright = "This Valueset is not copyrighted."
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved."
* ^experimental = false

// TODO replace with THO VS
ValueSet: USClaimDRGCodes
Title: "US Claim DRG Codes"
Description: "US Claim Diagnosis Related Group Codes. All codes from MS-DRGs - AP-DRGs - APR-DRGs"
* codes from system MSDRG
* codes from system APDRG
* codes from system APRDRG 
* ^experimental = false

ValueSet: PCTAEOBTypeVS
Title: "PCT Advance Explanation of Benefit Type Value Set"
Description: "Codes to specify the type of AEOB"
* include $ClaimTypeCS#institutional
* include $ClaimTypeCS#professional
* codes from system $ClaimTypeCS
* ^experimental = false


ValueSet: AHANUBCPointOfOriginVS
Title: "NUBC Point Of Origin"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. 

There are no gaps because all used and unused codes are identified. This value set consists of the following: 
* FL 15 - Point of Origin for Admission or Visit for Non-newborn
* FL 15 - Point of Origin for Admission or Visit for Newborn

These codes are used to convey the patient point of origin for an admission or visit and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)
Statement of Understanding between AHA and HL7 can be found [here](http://www.hl7.org/documentcenter/public/mou/AHA%20HL7%20SOU%202020%20AHA%20Fully%20Executed.pdf). In particular see sections 4.1d and 4.2.

The UB-04 Manual has a 12-month subscription period from June 30 through July 1.

For frequently asked questions, see here [here](https://www.nubc.org/nubc-faqs)"
* codes from system http://terminology.hl7.org/CodeSystem/AHANUBCPointOfOriginNonnewborn
* codes from system http://terminology.hl7.org/CodeSystem/AHANUBCPointOfOriginNewborn 
* ^experimental = false



ValueSet: AHANUBCPriorityTypeOfAdmissionOrVisitVS
Title: "NUBC Priority (Type) of Admission or Visit"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This value set consists of the following:

* FL 14 - Priority (Type) of Admission or Visit

These codes are used to convey the priority of an admission or visit and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)

Statement of Understanding between AHA and HL7 can be found [here](http://www.hl7.org/documentcenter/public/mou/AHA%20HL7%20SOU%202020%20AHA%20Fully%20Executed.pdf). In particular see sections 4.1d and 4.2.

The UB-04 Manual has a 12-month subscription period from June 30 through July 1.

For frequently asked questions, see here [here](https://www.nubc.org/nubc-faqs)

This Code system is referenced in the content logical definition of the following value sets:

This CodeSystem is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)

This code system https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit defines many codes, but they are not represented here"
* codes from system http://terminology.hl7.org/CodeSystem/AHANUBCPriorityTypeOfAdmitOrVisit 
* ^experimental = false

ValueSet: PCTPayerProviderNetworkStatusVS
Title: "PCT Payer Provider Network Status"
Description: "Indicates the Provider network status with the Payer as of the effective date of service or admission."
//* include PCTNetworkStatusCS#innetwork
//* include PCTNetworkStatusCS#outofnetwork
* codes from system PCTNetworkStatusCS
* ^experimental = false

ValueSet: PCTPayerBenefitPaymentStatusVS
Title: "PCT Payer Benefit Payment Status"
Description: "Indicates the in network or out of network payment status of the claim or line item."
//* include PCTNetworkStatusCS#innetwork
//* include PCTNetworkStatusCS#outofnetwork
//* include PCTNetworkStatusCS#other
* codes from system PCTNetworkStatusCS
* ^experimental = false

ValueSet: PCTAdjustmentReasonVS
Title: "PCT Adjustment Reason"
Description: "Codes indicating reasons why a claim or line item is adjusted."
* codes from system https://x12.org/codes/claim-adjustment-reason-codes
* codes from system https://x12.org/codes/remittance-advice-remark-codes
* ^experimental = false

ValueSet: PCTAEOBProcessNoteVS
Title: "PCT AEOB Process Note Types"
Description: "Indicates the type of .processNote for AEOB."
* include PCTAEOBProcessNoteCS#disclaimer
* include PCTAEOBProcessNoteCS#adjudication-note
* include PCTAEOBProcessNoteCS#other
* codes from system PCTAEOBProcessNoteCS
* ^experimental = false

ValueSet: PCTFinancialTypeVS
Title: "PCT Financial Type Value Set"
Description: "Financial Type codes for benefitBalance.financial.type."
* ^experimental = false
* codes from system PCTFinancialType

ValueSet: PCTBenefitBalanceCategoryVS
Title: "PCT benefitBalance.category codes"
Description: "Category codes for PCT benefitBalance.category from X12 service type."
* ^experimental = false
* codes from system https://x12.org/codes/service-type-codes

ValueSet: ICD10ProcedureCodes
Title: "ICD-10 Procedure Codes"
Description: "Procedure Codes from https://www.cms.gov/Medicare/Coding/ICD10"
* ^experimental = false
* codes from system http://www.cms.gov/Medicare/Coding/ICD10



ValueSet: PCTCoordinationTaskStatusCodes
Title: "GFE Coordination Task Status Codes"
Description: "Codes allowed for a GFE Coordination Task status"
* ^experimental = false
* include $HL7TaskStatus#draft
* include $HL7TaskStatus#requested
* include $HL7TaskStatus#in-progress
* include $HL7TaskStatus#cancelled
* include $HL7TaskStatus#on-hold
* include $HL7TaskStatus#failed
* include $HL7TaskStatus#completed
* include $HL7TaskStatus#entered-in-error


// TODO !!! Provide more details on which each request means (definition)
ValueSet: PCTContributorTaskStatusCodes
Title: "Provider GFE Contributor Task Status Codes"
Description: "Codes allowed for a GFE Contributor-specific service task status"
* ^experimental = false
* include $HL7TaskStatus#draft
* include $HL7TaskStatus#requested
* include $HL7TaskStatus#received
* include $HL7TaskStatus#accepted
* include $HL7TaskStatus#rejected
* include $HL7TaskStatus#failed
* include $HL7TaskStatus#completed
* include $HL7TaskStatus#entered-in-error


ValueSet: PCTGFERequestTaskTypeVS
Title: "PCT GFE Request Task Codes ValueSet"
Description: "Defining codes for defining GFE request types."
* ^experimental = false
* include PCTGFERequestTaskCSTemporaryTrialUse#scheduled-request
* include PCTGFERequestTaskCSTemporaryTrialUse#nonscheduled-request

ValueSet: PCTCoordinationTaskStatusReasonCodes
Title: "PCT GFE Request Coordination Task Status Reason Codes ValueSet"
Description: "Defining codes for GFE Coordination Task status reason types."
* ^experimental = false
* include PCTTaskStatusReasonCSTemporaryTrialUse#fulfilled
* include PCTTaskStatusReasonCSTemporaryTrialUse#time-limit-reached
* include PCTTaskStatusReasonCSTemporaryTrialUse#no-longer-needed
* include PCTTaskStatusReasonCSTemporaryTrialUse#service-cancelled
* include PCTTaskStatusReasonCSTemporaryTrialUse#requires-new-request
* include PCTTaskStatusReasonCSTemporaryTrialUse#patient-declined

ValueSet: PCTContributorTaskStatusReasonCodes
Title: "PCT GFE Contributor Task Status Reason Codes ValueSet"
Description: "Defining codes for defining GFE request GFE contributor task status reason types."
* ^experimental = false
* include PCTTaskStatusReasonCSTemporaryTrialUse#fulfilled
* include PCTTaskStatusReasonCSTemporaryTrialUse#schedule
* include PCTTaskStatusReasonCSTemporaryTrialUse#service-not-provided


---

File: repos/HL7_SLASH_davinci-pct/input/images-source/aeob.plantuml

@startuml
    agent "PCT Organization" as pctorganization
    agent "HRex Organization" as hrexorganization
    agent "US Core Organization" as uscoreorganization
    agent "PCT Practitioner" as pctpractitioner
    agent "HRex Practitioner" as hrexpractitioner
    agent "US Core Practitioner" as uscorepractitioner
    agent "PCT Coverage" as pctcoverage
    agent "HRex Coverage" as hrexcoverage
    agent "US Core Patient" as uscorepatient
    agent "HRex Patient Demographics" as hrexpatient
    agent "Advanced Explanation of Benefits" as aeob
    agent "Good Faith Estimate" as gfe
	note bottom: professional or institutional
    hrexcoverage <|-- pctcoverage
    uscorepatient <|-- hrexpatient
    uscorepractitioner <|-- hrexpractitioner
    hrexpractitioner <|-- pctpractitioner
    uscoreorganization <|-- hrexorganization
    hrexorganization <|-- pctorganization
	aeob --> hrexpatient: "patient 1..1"
	aeob --> pctcoverage: "insurance.coverage 1..*"
	aeob --> pctpractitioner: "provider 1..1"
	aeob --> pctorganization: "provider 1..1"
	aeob --> pctorganization: "insurer 1..1"
	aeob --> gfe: "gfeReference 1..*"
@enduml


---

File: repos/HL7_SLASH_davinci-pct/input/images-source/gfe_coordination.plantuml

@startuml
' TODO Make Sure the diagram matches the latest profiles
    left to right direction
    scale 1024 width
    agent "PCT Organization" as pctorganization
    agent "HRex Organization" as hrexorganization
    agent "US Core Organization" as uscoreorganization
    agent "PCT Practitioner" as pctpractitioner
    agent "HRex Practitioner" as hrexpractitioner
    agent "HRex PractitionerRole" as hrexpractitionerrole
    agent "US Core Practitioner" as uscorepractitioner
    agent "US Core PractitionerRole" as uscorepractitionerrole
    agent "PCT Coverage" as pctcoverage
    agent "HRex Coverage" as hrexcoverage
    agent "US Core Patient" as uscorepatient
    agent "HRex Patient Demographics" as hrexpatient
    agent "GFE Bundle (contributor only)" as gfebundle
    agent "GFE Request Information Bundle" as gferequestinfo
    agent "PCT Service Location" as pctservicelocation
    agent "PCT ServiceRequest" as pctservicerequest
    agent "PCT MedicationRequest" as pctmedicationrequest
    agent "PCT DeviceRequest" as pctdevicerequest
    agent "FHIR NutritionOrder" as nutritionOrder
    agent "FHIR VisionPrescription" as visionprescription
    agent "FHIR DocumentReference" as documentreference
    agent "GFE Coordination Request Task" as gfetask
	note top: Coordination or Contributor

    hrexcoverage <|-- pctcoverage
    uscorepatient <|-- hrexpatient
    uscorepractitioner <|-- hrexpractitioner
    uscorepractitionerrole <|-- hrexpractitionerrole
    hrexpractitioner <|-- pctpractitioner
    uscoreorganization <|-- hrexorganization
    hrexorganization <|-- pctorganization
    
    
    gfetask --> pctpractitioner: "requester 1..1"
    gfetask --> hrexpractitionerrole: "requester 1..1"
    gfetask --> pctorganization: "requester 1..1"
    gfetask --> gferequestinfo: "input[request info bundle] 1..1"
    gfetask --> gfebundle: "output[gfe bundle] 1..1"
    

    
	gferequestinfo --> hrexpatient: "entry[patient] 1..2"
	gferequestinfo --> pctcoverage: "entry[coverage] 1..1"
    gferequestinfo --> pctservicelocation : "entry[service-location] 0..*
    gferequestinfo --> pctorganization: "entry[organization] 1..1"
    gferequestinfo --> pctpractitioner: "entry[practitioner] 1..1"
    gferequestinfo --> hrexpractitionerrole: "entry[practitioner] 1..1"

    gferequestinfo --> pctservicerequest: "entry[requested-items] 0..*"
    gferequestinfo --> pctmedicationrequest: "entry[requested-items] 0..*"
    gferequestinfo --> pctdevicerequest: "entry[requested-items] 0..*"
    gferequestinfo --> nutritionOrder: "entry[requested-items] 0..*"
    gferequestinfo --> visionprescription: "entry[requested-items] 0..*"
    gferequestinfo --> documentreference: "entry[attachment] 0..*"
@enduml


---

File: repos/HL7_SLASH_davinci-pct/input/images-source/gfe.plantuml

@startuml
    agent "PCT Organization" as pctorganization
    agent "HRex Organization" as hrexorganization
    agent "US Core Organization" as uscoreorganization
    agent "PCT Practitioner" as pctpractitioner
    agent "HRex Practitioner" as hrexpractitioner
    agent "US Core Practitioner" as uscorepractitioner
    agent "PCT Coverage" as pctcoverage
    agent "HRex Coverage" as hrexcoverage
    agent "US Core Patient" as uscorepatient
    agent "HRex Patient Demographics" as hrexpatient
    agent "Good Faith Estimate" as gfe
	note top: professional or institutional
    hrexcoverage <|-- pctcoverage
    uscorepatient <|-- hrexpatient
    uscorepractitioner <|-- hrexpractitioner
    hrexpractitioner <|-- pctpractitioner
    uscoreorganization <|-- hrexorganization
    hrexorganization <|-- pctorganization
	gfe --> hrexpatient: "patient 1..1"
	gfe --> pctcoverage: "insurance.coverage 1..*"
	gfe --> pctpractitioner: "provider 1..1"
	gfe --> pctorganization: "provider 1..1"
	gfe --> pctorganization: "insurer 1..1"
	gfe --> pctpractitioner: "payee.party 0..1"
	gfe --> pctorganization: "provider 0..1"
	gfe --> pctorganization: "supportingInfo:serviceFacility 0..1"
@enduml


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/change_log.md

### Change Log

#### High Level Changes 2.0.0-ballot

This ballot version includes a new use case addressing the need to coordinate GFE collection among providers and makes some modifications to the existing GFE Submit workflow:

* Added the GFE Coordination Workflow <a href="gfe_coordination_overview.html">Overview</a> and <a href="gfe_coordination_specification.html">Specification</a> pages.
* Created the following profiles in support of the GFE Collection workflow:
    * [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) - This collection of GFE Bundles from GFE contributors that can then be made available to the patient or sent to a payer for insurance estimation.
    * [GFE Coordination Bundle](StructureDefinition-davinci-pct-gfe-coordination-bundle.html) - Contains necessary resources for GFE to request GFEs from one or multiple GFE contributing providers.
    * [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) - Used to organize a GFE across providers for a single period of care for which all GFE Contributor Task resources will be linked.
    * [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) - Used by a GFE coordinator to assign a GFE contributor task to a specific provider and may include information specific to that patient’s expected service.
    * [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) - Contains the information necessary for GFE contributors to create their estimates.
    * [GFE Missing Bundle](StructureDefinition-davinci-pct-gfe-missing-bundle.html) - Used to indicate when a GFE Contributor task request was made, but no GFE Bundle was submitted.
    * [GFE ServiceRequest](StructureDefinition-davinci-pct-servicerequest.html) - Includes details about a service for which a GFE is being requested.
    * [GFE MedicationRequest](StructureDefinition-davinci-pct-medicationrequest.html) - Includes details about a medication for which a GFE is being requested.
    * [GFE DeviceRequest](StructureDefinition-davinci-pct-devicerequest.html) - Includes details about a device for which a GFE is being requested.
    * [PCT Service Location](StructureDefinition-davinci-pct-service-location.html) - Provides information where the service is to be performed or the item delivered.
* Created the following CapabilityStatements identifying requirements of the GFE Coordination workflow actors:
    * [Coordination Platform Capability Statement](CapabilityStatement-davinci-pct-coordination-platform.html)
    * [Coordination Requester Capability Statement](CapabilityStatement-davinci-pct-coordination-requester.html)
    * [GFE Contributor Capability Statement](CapabilityStatement-davinci-pct-gfe-contributor.html)
* Created CodeSystems and ValueSets in support of the GFE Coordination workflow
* Created the [Retrieve GFE Collection Bundle (GFE-Retrieve) operation](OperationDefinition-GFE-retrieve.html) to support the collection of GFE Bundles contributed through the GFE Coordination workflow.
* Updated the [GFE Submit](OperationDefinition-GFE-submit.html) operation to take a [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) instead of the [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) (which is now contained in the GFE Collection Bundle)
* Added the [AEOB Summary](StructureDefinition-davinci-pct-aeob-summary.html) and [GFE Summary](StructureDefinition-davinci-pct-gfe-summary.html) profiles and requirements for their presence in the [AEOB Bundle](StructureDefinition-davinci-pct-aeob-bundle.html) and [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) respectively
* Assign a standards status to all artifacts and pages.
* Small presentation and example changes.


#### Detailed Changes 2.0.0-ballot (JIRA Change Requests)

<table id="issuetable"  border="1" cellpadding="3" cellspacing="1" width="100%">
<thead>
<tr class="rowHeader">

<th class="colHeaderLink headerrow-issuekey" data-id="issuekey">
Key
</th>

<th class="colHeaderLink headerrow-resolution" data-id="resolution">
Resolution
</th>

<th class="colHeaderLink headerrow-summary" data-id="summary">
Summary
</th>
</tr>
</thead>
<tbody>
<tr data-issuekey='FHIR-42832' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-42832' href='https://jira.hl7.org/browse/FHIR-42832'>FHIR-42832</a>
</td>
<td class='resolution'>Persuasive with Modification</td>
<td class='summary'><p>Add slices to the Advanced ExplanationOfBenefit total</p></td>
</tr>
<tr data-issuekey='FHIR-42707' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-42707' href='https://jira.hl7.org/browse/FHIR-42707'>FHIR-42707</a>
</td>
<td class='resolution'>Persuasive with Modification</td>
<td class='summary'><p>GFE submit operation should describe the wrapping batch-response bundle</p></td>
</tr>
<tr data-issuekey='FHIR-42785' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-42785' href='https://jira.hl7.org/browse/FHIR-42785'>FHIR-42785</a>
</td>
<td class='resolution'>Persuasive with Modification</td>
<td class='summary'><p>Add "negotiated" code to Network status CodeSystem and adjudication and item.adjudication bound ValueSet</p></td>
</tr>
<tr data-issuekey='FHIR-43705' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-43705' href='https://jira.hl7.org/browse/FHIR-43705'>FHIR-43705</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Improve description of OperationOutcome OUT param in $gfe-submit</p></td>
</tr>
<tr data-issuekey='FHIR-44952' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44952' href='https://jira.hl7.org/browse/FHIR-44952'>FHIR-44952</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Relax insurance/coverage requirements on GFE Bundle and GFE claim profiles</p></td>
</tr>
<tr data-issuekey='FHIR-44955' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44955' href='https://jira.hl7.org/browse/FHIR-44955'>FHIR-44955</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Add CDT codes to GFE Claim codes ValueSet bindings</p></td>
</tr>
<tr data-issuekey='FHIR-44971' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44971' href='https://jira.hl7.org/browse/FHIR-44971'>FHIR-44971</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Create an operation to retrieve a GFE Collection Bundle for a task</p></td>
</tr>
<tr data-issuekey='FHIR-44993' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44993' href='https://jira.hl7.org/browse/FHIR-44993'>FHIR-44993</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Create CapabilityStatements for GFE Request workflow</p></td>
</tr>
<tr data-issuekey='FHIR-45001' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45001' href='https://jira.hl7.org/browse/FHIR-45001'>FHIR-45001</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Pre-adopt Coverage.kind into PCT Coverage profile and add declaration</p></td>
</tr>
<tr data-issuekey='FHIR-45037' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45037' href='https://jira.hl7.org/browse/FHIR-45037'>FHIR-45037</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Add proposed service location to GFE information request bundle</p></td>
</tr>
<tr data-issuekey='FHIR-45053' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45053' href='https://jira.hl7.org/browse/FHIR-45053'>FHIR-45053</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Remove GFE Submitter from Claim resource Profiles</p></td>
</tr>
<tr data-issuekey='FHIR-45055' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45055' href='https://jira.hl7.org/browse/FHIR-45055'>FHIR-45055</a>
</td>
<td class='resolution'>Persuasive with Modification</td>
<td class='summary'><p>Add a GFE Coordination Workflow to the IG</p></td>
</tr>
<tr data-issuekey='FHIR-45151' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45151' href='https://jira.hl7.org/browse/FHIR-45151'>FHIR-45151</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Add an STU note on all draft pages (narrative & profile) about it being draft</p></td>
</tr>
<tr data-issuekey='FHIR-45152' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45152' href='https://jira.hl7.org/browse/FHIR-45152'>FHIR-45152</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Change the home page STU Note text</p></td>
</tr>
<tr data-issuekey='FHIR-44951' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44951' href='https://jira.hl7.org/browse/FHIR-44951'>FHIR-44951</a>
</td>
<td class='resolution'>Not Persuasive with Modification</td>
<td class='summary'><p>Change the GFE Bundle to be contributor specific and add a GFE Collection Bundle</p></td>
</tr>
<tr data-issuekey='FHIR-45054' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45054' href='https://jira.hl7.org/browse/FHIR-45054'>FHIR-45054</a>
</td>
<td class='resolution'>Persuasive with Modification</td>
<td class='summary'><p>Create a GFE Coordination Bundle for submitting a GFE Coordination request</p></td>
</tr>
<tr data-issuekey='FHIR-45061' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45061' href='https://jira.hl7.org/browse/FHIR-45061'>FHIR-45061</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Section 3.3 US Core currently resolves to US Core 6.1 in two places. It should actually NOT point to US Core 6.1.0, but US Core 3.1.1</p></td>
</tr>
<tr data-issuekey='FHIR-45060' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-45060' href='https://jira.hl7.org/browse/FHIR-45060'>FHIR-45060</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>The header for section 3.2.1 reads FHIR Version, but the link reads FHIR R4 US Core and points to US Core 6.1 instead of the FHIR R4 Specification.</p></td>
</tr>
<tr data-issuekey='FHIR-43329' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-43329' href='https://jira.hl7.org/browse/FHIR-43329'>FHIR-43329</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Correct Example fullURL to use the right resource base</p></td>
</tr>
<tr data-issuekey='FHIR-44859' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44859' href='https://jira.hl7.org/browse/FHIR-44859'>FHIR-44859</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Correct the spelling of the word definition</p></td>
</tr>
<tr data-issuekey='FHIR-44691' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44691' href='https://jira.hl7.org/browse/FHIR-44691'>FHIR-44691</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Correct typo in index page regarding future IG </p></td>
</tr>
<tr data-issuekey='FHIR-44970' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44970' href='https://jira.hl7.org/browse/FHIR-44970'>FHIR-44970</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Add a GFE Request Information Bundle and related profiles</p></td>
</tr>
<tr data-issuekey='FHIR-44954' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44954' href='https://jira.hl7.org/browse/FHIR-44954'>FHIR-44954</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Create Coordinating Request Task and Contributing Provider Request Task Profiles</p></td>
</tr>
<tr data-issuekey='FHIR-44778' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-44778' href='https://jira.hl7.org/browse/FHIR-44778'>FHIR-44778</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Create an GFE Summary Profile to add to the GFE Bundle</p></td>
</tr>
<tr data-issuekey='FHIR-42827' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-42827' href='https://jira.hl7.org/browse/FHIR-42827'>FHIR-42827</a>
</td>
<td class='resolution'>Persuasive</td>
<td class='summary'><p>Create an AEOB Summary Profile to add to the AEOB Bundle</p></td>
</tr>
<tr data-issuekey='FHIR-43330' class='issuerow'>
<td class="issuekey" style="white-space:nowrap">
<a class='issue-link' data-issue-key='FHIR-43330' href='https://jira.hl7.org/browse/FHIR-43330'>FHIR-43330</a>
</td>
<td class='resolution'>Persuasive with Modification</td>
<td class='summary'><p>Correct invariant expressions where a coding is checked</p></td>
</tr>
</tbody>
</table>





#### High Level Changes 1.1.0

This STU Update includes a number of changes addressing some critical and minor fixes including:

* Set max occurrences for slice discriminator element 'type' to one of the Good Faith Estimate profiles.
* Corrected <a href="https://hl7.org/fhir/us/davinci-pct/STU1.1/StructureDefinition-davinci-pct-aeob.html">Advanced Explanation Of Benefit Profile</a> benefit payment status and adjustment reason adjudication slices to the correct Value Set binding.
* Corrected <a href="https://hl7.org/fhir/us/davinci-pct/STU1.1/StructureDefinition-davinci-pct-aeob.html">Advanced Explanation Of Benefit Profile</a> benefitBalance.financial element types and added remaining amount extension.
* Corrected numerous FHIRPath expressions for SearchParameter and Invariants.
* Assign context to all of the extensions
* Small presentation and example changes.


#### Detailed Changes 1.1.0 (JIRA Change Requests)

<table id="issuetable"  border="1" cellpadding="3" cellspacing="1" width="100%">
<thead>
<tr class="rowHeader">

<th class="colHeaderLink headerrow-issuekey" data-id="issuekey">
Key
</th>

<th class="colHeaderLink headerrow-resolution" data-id="resolution">
Resolution
</th>

<th class="colHeaderLink headerrow-summary" data-id="summary">
Summary
</th>
</tr>
</thead>
<tbody>
<tr data-issuekey="FHIR-40526" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-40526" href="https://jira.hl7.org/browse/FHIR-40526">FHIR-40526</a>
</td>
<td class="resolution">Accepted Technical Correction
</td>
<td class="summary"><p>
Fixed Value CodeableConcept discriminator elements should have a max Cardinality of 1
</p>
</td>
</tr>
<tr data-issuekey="FHIR-40812" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-40812" href="https://jira.hl7.org/browse/FHIR-40812">FHIR-40812</a>
</td>
<td class="resolution">Persuasive
</td>
<td class="summary"><p>
Change AEOB adjudication[adjustmentreason] binding to adjustment reason codes
</p>
</td>
</tr>
<tr data-issuekey="FHIR-42786" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-42786" href="https://jira.hl7.org/browse/FHIR-42786">FHIR-42786</a>
</td>
<td class="resolution">Persuasive with Modification
</td>
<td class="summary"><p>
Correct Adjudication reason ValueSet binding for network status adjudication category slices
</p>
</td>
</tr>
<tr data-issuekey="FHIR-41490" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-41490" href="https://jira.hl7.org/browse/FHIR-41490">FHIR-41490</a>
</td>
<td class="resolution">Accepted Technical Correction
</td>
<td class="summary"><p>
Update link for Asynchronous Interaction Request Pattern to point to R5 instead of CI
</p>
</td>
</tr>
<tr data-issuekey="FHIR-42825" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-42825" href="https://jira.hl7.org/browse/FHIR-42825">FHIR-42825</a>
</td>
<td class="resolution">Persuasive with Modification
</td>
<td class="summary"><p>
Add extension for benefit balance remaining amount
</p>
</td>
</tr>
<tr data-issuekey="FHIR-42910" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-42910" href="https://jira.hl7.org/browse/FHIR-42910">FHIR-42910</a>
</td>
<td class="resolution">Persuasive
</td>
<td class="summary"><p>
Change constraint in ExplanationOfBenefit.benefitBalance.financial allowed[x] and used[x]
</p>
</td>
</tr>
<tr data-issuekey="FHIR-43065" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-43065" href="https://jira.hl7.org/browse/FHIR-43065">FHIR-43065</a>
</td>
<td class="resolution">Accepted Technical Correction
</td>
<td class="summary"><p>
Correct Date Of Service SearchParameter expression
</p>
</td>
</tr>


<tr data-issuekey="FHIR-43111" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-43111" href="https://jira.hl7.org/browse/FHIR-43111">FHIR-43111</a>
</td>
<td class="resolution">Persuasive
</td>
<td class="summary"><p>
Correct Invariant issues identified in the IG Publisher
</p>
</td>
</tr>
<tr data-issuekey="FHIR-43077" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-43077" href="https://jira.hl7.org/browse/FHIR-43077">FHIR-43077</a>
</td>
<td class="resolution">Persuasive
</td>
<td class="summary"><p>
Assign context to all of the extensions
</p>
</td>
</tr>


<tr data-issuekey="FHIR-43330" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-43330" href="https://jira.hl7.org/browse/FHIR-43330">FHIR-43330</a>
</td>
<td class="resolution">Persuasive with Modification
</td>
<td class="summary"><p>
Assign context to all of the extensions
</p>
</td>
</tr>
<tr data-issuekey="FHIR-43329" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-43329" href="https://jira.hl7.org/browse/FHIR-43329">FHIR-43329</a>
</td>
<td class="resolution">Persuasive
</td>
<td class="summary"><p>
Correct Example fullURL to use the right resource base
</p>
</td>
</tr>


</tbody>
</table>

#### High Level Changes 1.0.0

There were many changes to all the profiles, value sets, etc. since the last ballot. The details are listed in the section below. High level changes since the ballot are:

* The polling mechanism changed form polling based on Bundle.identifier to using the [asyncrhonous response pattern](http://build.fhir.org/async-bundle.html).
* Updated workflow diagrams on the [Use Cases](https://hl7.org/fhir/us/davinci-pct/STU1.1/use_cases.html) page.
* Most code systems have been moved to the [HL7 terminology](https://terminology.hl7.org/) page, and their code system URLs changed as a result.
* Harmonized with CARIN blue button EOB where possible to reduce implementation barriers
* Added Must Support definition, and updated elements to align with MS definition, and removed MS from elements where the minimum cardinality is 1 since these are required anyway
*  Updates to the AEOB profile to provide guidance and improve alignment with requirements for patient AEOBs including benefit period, benefit balance, adjudication and supporting info elements


#### Detailed Changes 1.0.0 (JIRA Change Requests)

<table id="issuetable"  border="1" cellpadding="3" cellspacing="1" width="100%">
<thead>
<tr class="rowHeader">

<th class="colHeaderLink headerrow-issuekey" data-id="issuekey">
Key
</th>

<th class="colHeaderLink headerrow-resolution" data-id="resolution">
Resolution
</th>

<th class="colHeaderLink headerrow-summary" data-id="summary">
Summary
</th>
</tr>
</thead>
<tbody>


<tr id="issuerow175498" rel="175498" data-issuekey="FHIR-35228" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35228" href="https://jira.hl7.org/browse/FHIR-35228">FHIR-35228</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
PCT GFE Institutional .item, remove .item estimated DOS extension
</p>
</td>
</tr>


<tr id="issuerow174056" rel="174056" data-issuekey="FHIR-34692" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34692" href="https://jira.hl7.org/browse/FHIR-34692">FHIR-34692</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Institutional profile - modify mapping of charge amount
</p>
</td>
</tr>


<tr id="issuerow174308" rel="174308" data-issuekey="FHIR-34816" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34816" href="https://jira.hl7.org/browse/FHIR-34816">FHIR-34816</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Professional profile - modify mapping of charge amount
</p>
</td>
</tr>


<tr id="issuerow174541" rel="174541" data-issuekey="FHIR-34928" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34928" href="https://jira.hl7.org/browse/FHIR-34928">FHIR-34928</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
US Core Reference
</p>
</td>
</tr>


<tr id="issuerow174548" rel="174548" data-issuekey="FHIR-34934" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34934" href="https://jira.hl7.org/browse/FHIR-34934">FHIR-34934</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Terms and concepts - Charge Master Description
</p>
</td>
</tr>


<tr id="issuerow174549" rel="174549" data-issuekey="FHIR-34935" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34935" href="https://jira.hl7.org/browse/FHIR-34935">FHIR-34935</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Terms and concepts - Collection of Services
</p>
</td>
</tr>


<tr id="issuerow174552" rel="174552" data-issuekey="FHIR-34938" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34938" href="https://jira.hl7.org/browse/FHIR-34938">FHIR-34938</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Systems Update
</p>
</td>
</tr>


<tr id="issuerow175410" rel="175410" data-issuekey="FHIR-35207" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35207" href="https://jira.hl7.org/browse/FHIR-35207">FHIR-35207</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Disclaimer wording is awkward in MRI scenario
</p>
</td>
</tr>


<tr id="issuerow175514" rel="175514" data-issuekey="FHIR-35234" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35234" href="https://jira.hl7.org/browse/FHIR-35234">FHIR-35234</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove section 4.4 Testing requirements
</p>
</td>
</tr>


<tr id="issuerow174537" rel="174537" data-issuekey="FHIR-34925" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34925" href="https://jira.hl7.org/browse/FHIR-34925">FHIR-34925</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
In the Coverage profile, remove Must Support from costToBeneficiary
</p>
</td>
</tr>


<tr id="issuerow174529" rel="174529" data-issuekey="FHIR-34919" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34919" href="https://jira.hl7.org/browse/FHIR-34919">FHIR-34919</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Modify AEOB profile to add Practitioner
</p>
</td>
</tr>


<tr id="issuerow174516" rel="174516" data-issuekey="FHIR-34915" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34915" href="https://jira.hl7.org/browse/FHIR-34915">FHIR-34915</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Require pattern for AEOB profile claim.use; add MS to claim.status
</p>
</td>
</tr>


<tr id="issuerow174472" rel="174472" data-issuekey="FHIR-34904" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34904" href="https://jira.hl7.org/browse/FHIR-34904">FHIR-34904</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
AEOB profile - remove expirationDate
</p>
</td>
</tr>


<tr id="issuerow173945" rel="173945" data-issuekey="FHIR-34661" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34661" href="https://jira.hl7.org/browse/FHIR-34661">FHIR-34661</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove Must Support from Institutional.facility
</p>
</td>
</tr>


<tr id="issuerow173524" rel="173524" data-issuekey="FHIR-34505" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34505" href="https://jira.hl7.org/browse/FHIR-34505">FHIR-34505</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Clarify wording for Claim Resource in GFE Bundle Resource
</p>
</td>
</tr>


<tr id="issuerow175521" rel="175521" data-issuekey="FHIR-35236" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35236" href="https://jira.hl7.org/browse/FHIR-35236">FHIR-35236</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove inherited invariants from profile pages
</p>
</td>
</tr>


<tr id="issuerow174596" rel="174596" data-issuekey="FHIR-34969" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34969" href="https://jira.hl7.org/browse/FHIR-34969">FHIR-34969</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
stronger language in P&amp;S section
</p>
</td>
</tr>


<tr id="issuerow174550" rel="174550" data-issuekey="FHIR-34936" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34936" href="https://jira.hl7.org/browse/FHIR-34936">FHIR-34936</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Terms and concepts - De-identified Minimum Negotiated Rate
</p>
</td>
</tr>


<tr id="issuerow181081" rel="181081" data-issuekey="FHIR-36025" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-36025" href="https://jira.hl7.org/browse/FHIR-36025">FHIR-36025</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
PCT AEOB Profile - Add PractitionerRole to provider
</p>
</td>
</tr>


<tr id="issuerow174547" rel="174547" data-issuekey="FHIR-34933" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34933" href="https://jira.hl7.org/browse/FHIR-34933">FHIR-34933</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Terms and concepts updates - Consolidated Appropriations Act
</p>
</td>
</tr>


<tr id="issuerow174608" rel="174608" data-issuekey="FHIR-34976" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34976" href="https://jira.hl7.org/browse/FHIR-34976">FHIR-34976</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
change SHOULD to SHALL
</p>
</td>
</tr>


<tr id="issuerow174544" rel="174544" data-issuekey="FHIR-34931" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34931" href="https://jira.hl7.org/browse/FHIR-34931">FHIR-34931</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Terms and concepts updates - Advanced EOB
</p>
</td>
</tr>


<tr id="issuerow174553" rel="174553" data-issuekey="FHIR-34939" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34939" href="https://jira.hl7.org/browse/FHIR-34939">FHIR-34939</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Downloads
</p>
</td>
</tr>


<tr id="issuerow175501" rel="175501" data-issuekey="FHIR-35230" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35230" href="https://jira.hl7.org/browse/FHIR-35230">FHIR-35230</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
PCT GFE Professional - remove procedure:other slice
</p>
</td>
</tr>


<tr id="issuerow175603" rel="175603" data-issuekey="FHIR-35274" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35274" href="https://jira.hl7.org/browse/FHIR-35274">FHIR-35274</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Security and Privacy section mentioning X12
</p>
</td>
</tr>


<tr id="issuerow174271" rel="174271" data-issuekey="FHIR-34791" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34791" href="https://jira.hl7.org/browse/FHIR-34791">FHIR-34791</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Require pattern for professional profile claim.use; add MS to claim.status
</p>
</td>
</tr>


<tr id="issuerow175859" rel="175859" data-issuekey="FHIR-35357" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35357" href="https://jira.hl7.org/browse/FHIR-35357">FHIR-35357</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Move downloads to its own page with a menu link
</p>
</td>
</tr>


<tr id="issuerow175834" rel="175834" data-issuekey="FHIR-35344" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35344" href="https://jira.hl7.org/browse/FHIR-35344">FHIR-35344</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add link to GFE Submit operation in referenced Overview text
</p>
</td>
</tr>


<tr id="issuerow175828" rel="175828" data-issuekey="FHIR-35340" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35340" href="https://jira.hl7.org/browse/FHIR-35340">FHIR-35340</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Include link to HRex IG in overview
</p>
</td>
</tr>


<tr id="issuerow175580" rel="175580" data-issuekey="FHIR-35264" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35264" href="https://jira.hl7.org/browse/FHIR-35264">FHIR-35264</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add link to GFE Submit operation
</p>
</td>
</tr>


<tr id="issuerow175584" rel="175584" data-issuekey="FHIR-35266" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35266" href="https://jira.hl7.org/browse/FHIR-35266">FHIR-35266</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Define AEOB on first use on page
</p>
</td>
</tr>


<tr id="issuerow174540" rel="174540" data-issuekey="FHIR-34927" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34927" href="https://jira.hl7.org/browse/FHIR-34927">FHIR-34927</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Update Example
</p>
</td>
</tr>


<tr id="issuerow175377" rel="175377" data-issuekey="FHIR-35200" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35200" href="https://jira.hl7.org/browse/FHIR-35200">FHIR-35200</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
All diagrams should have an identifier to make it easy to reference.
</p>
</td>
</tr>


<tr id="issuerow175236" rel="175236" data-issuekey="FHIR-35170" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35170" href="https://jira.hl7.org/browse/FHIR-35170">FHIR-35170</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add definition of GFE
</p>
</td>
</tr>


<tr id="issuerow174055" rel="174055" data-issuekey="FHIR-34691" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34691" href="https://jira.hl7.org/browse/FHIR-34691">FHIR-34691</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Institutional profile - remove location extension
</p>
</td>
</tr>


<tr id="issuerow174649" rel="174649" data-issuekey="FHIR-34995" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34995" href="https://jira.hl7.org/browse/FHIR-34995">FHIR-34995</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Clarify a single PCT GFE Bundle SHALL only contain gfe for a single patient
</p>
</td>
</tr>


<tr id="issuerow174556" rel="174556" data-issuekey="FHIR-34942" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34942" href="https://jira.hl7.org/browse/FHIR-34942">FHIR-34942</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
GFE Professional Claim .accident, constrain to locationAddress, add binding to country code
</p>
</td>
</tr>


<tr id="issuerow174555" rel="174555" data-issuekey="FHIR-34941" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34941" href="https://jira.hl7.org/browse/FHIR-34941">FHIR-34941</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
PCT GFE Institutional - .accident, constrain to locationAddress and add binding for country code
</p>
</td>
</tr>


<tr id="issuerow174966" rel="174966" data-issuekey="FHIR-35102" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35102" href="https://jira.hl7.org/browse/FHIR-35102">FHIR-35102</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
edit definition of Changemaster 
</p>
</td>
</tr>


<tr id="issuerow173921" rel="173921" data-issuekey="FHIR-34650" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34650" href="https://jira.hl7.org/browse/FHIR-34650">FHIR-34650</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Require pattern for institutional profile claim.use; add MS to claim.status
</p>
</td>
</tr>


<tr id="issuerow174620" rel="174620" data-issuekey="FHIR-34980" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34980" href="https://jira.hl7.org/browse/FHIR-34980">FHIR-34980</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Patient Profile - remove employeeID
</p>
</td>
</tr>


<tr id="issuerow174274" rel="174274" data-issuekey="FHIR-34794" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34794" href="https://jira.hl7.org/browse/FHIR-34794">FHIR-34794</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Define Servicing Facility reference resource as an organization, not a location
</p>
</td>
</tr>


<tr id="issuerow174625" rel="174625" data-issuekey="FHIR-34984" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34984" href="https://jira.hl7.org/browse/FHIR-34984">FHIR-34984</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Remove PractitionerRole Profile
</p>
</td>
</tr>


<tr id="issuerow174489" rel="174489" data-issuekey="FHIR-34906" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34906" href="https://jira.hl7.org/browse/FHIR-34906">FHIR-34906</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
PCT GFE Institutional supportingInfo:typeOfBill .code 
</p>
</td>
</tr>


<tr id="issuerow174624" rel="174624" data-issuekey="FHIR-34983" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34983" href="https://jira.hl7.org/browse/FHIR-34983">FHIR-34983</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove the Location Profile
</p>
</td>
</tr>


<tr id="issuerow175100" rel="175100" data-issuekey="FHIR-35147" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35147" href="https://jira.hl7.org/browse/FHIR-35147">FHIR-35147</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove Code Systems defined for testing purposes 
</p>
</td>
</tr>


<tr id="issuerow184075" rel="184075" data-issuekey="FHIR-36640" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-36640" href="https://jira.hl7.org/browse/FHIR-36640">FHIR-36640</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Define Institutional Servicing Facility reference resource as an organization, not a location
</p>
</td>
</tr>


<tr id="issuerow175564" rel="175564" data-issuekey="FHIR-35256" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35256" href="https://jira.hl7.org/browse/FHIR-35256">FHIR-35256</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
More guidance is required for the AEOB Out of network provider info
</p>
</td>
</tr>


<tr id="issuerow175421" rel="175421" data-issuekey="FHIR-35208" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35208" href="https://jira.hl7.org/browse/FHIR-35208">FHIR-35208</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Provide link to the CAA No Surprises legislation
</p>
</td>
</tr>


<tr id="issuerow175475" rel="175475" data-issuekey="FHIR-35219" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35219" href="https://jira.hl7.org/browse/FHIR-35219">FHIR-35219</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
PCT GFE Institutional - .careTeam:attending - PCT Practitioner only
</p>
</td>
</tr>


<tr id="issuerow174578" rel="174578" data-issuekey="FHIR-34953" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34953" href="https://jira.hl7.org/browse/FHIR-34953">FHIR-34953</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Payer Intermediary and FHIR-X12 Translators
</p>
</td>
</tr>


<tr id="issuerow174264" rel="174264" data-issuekey="FHIR-34787" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34787" href="https://jira.hl7.org/browse/FHIR-34787">FHIR-34787</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Move Security section to own page as a  Menu item
</p>
</td>
</tr>


<tr id="issuerow174300" rel="174300" data-issuekey="FHIR-34810" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34810" href="https://jira.hl7.org/browse/FHIR-34810">FHIR-34810</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Professional Profile:  Difference between the Provider Event Methodology and the Provider GFE Grouper Methodology
</p>
</td>
</tr>


<tr id="issuerow174299" rel="174299" data-issuekey="FHIR-34809" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34809" href="https://jira.hl7.org/browse/FHIR-34809">FHIR-34809</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Professional Profile - remove location extension
</p>
</td>
</tr>


<tr id="issuerow190601" rel="190601" data-issuekey="FHIR-37632" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37632" href="https://jira.hl7.org/browse/FHIR-37632">FHIR-37632</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Make AEOB .benefitPeriod cardinality 1..1
</p>
</td>
</tr>


<tr id="issuerow190612" rel="190612" data-issuekey="FHIR-37636" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37636" href="https://jira.hl7.org/browse/FHIR-37636">FHIR-37636</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add markdown datatype to disclaimer extension
</p>
</td>
</tr>


<tr id="issuerow181956" rel="181956" data-issuekey="FHIR-36200" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-36200" href="https://jira.hl7.org/browse/FHIR-36200">FHIR-36200</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
AEOB - Add a String Element to contain the Description of the Provided Service
</p>
</td>
</tr>


<tr id="issuerow190573" rel="190573" data-issuekey="FHIR-37625" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37625" href="https://jira.hl7.org/browse/FHIR-37625">FHIR-37625</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Change AEOB element short description and comments on ExplanationOfBenefit.created
</p>
</td>
</tr>


<tr id="issuerow174301" rel="174301" data-issuekey="FHIR-34811" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34811" href="https://jira.hl7.org/browse/FHIR-34811">FHIR-34811</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Change GFE Billing Provider Line Item Control Number to item.sequence
</p>
</td>
</tr>


<tr id="issuerow174566" rel="174566" data-issuekey="FHIR-34946" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34946" href="https://jira.hl7.org/browse/FHIR-34946">FHIR-34946</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
use of the term &quot;near real time&quot; 
</p>
</td>
</tr>


<tr id="issuerow174958" rel="174958" data-issuekey="FHIR-35097" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35097" href="https://jira.hl7.org/browse/FHIR-35097">FHIR-35097</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Could payers reasonably produce an AEOB in 5 minutes? 
</p>
</td>
</tr>


<tr id="issuerow174432" rel="174432" data-issuekey="FHIR-34892" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34892" href="https://jira.hl7.org/browse/FHIR-34892">FHIR-34892</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Change terminology for &#39;Submitting Provider&#39; to &#39;Convening Provider&#39;
</p>
</td>
</tr>


<tr id="issuerow175509" rel="175509" data-issuekey="FHIR-35233" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35233" href="https://jira.hl7.org/browse/FHIR-35233">FHIR-35233</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Fixed display values should not generally be required
</p>
</td>
</tr>


<tr id="issuerow175094" rel="175094" data-issuekey="FHIR-35145" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35145" href="https://jira.hl7.org/browse/FHIR-35145">FHIR-35145</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Practitioner Profile - add NUCC Value Set to .qualification
</p>
</td>
</tr>


<tr id="issuerow174563" rel="174563" data-issuekey="FHIR-34943" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34943" href="https://jira.hl7.org/browse/FHIR-34943">FHIR-34943</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Remove the Taxonomy extension from Organization
</p>
</td>
</tr>


<tr id="issuerow175576" rel="175576" data-issuekey="FHIR-35262" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35262" href="https://jira.hl7.org/browse/FHIR-35262">FHIR-35262</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Change the use of payor to payer
</p>
</td>
</tr>


<tr id="issuerow175582" rel="175582" data-issuekey="FHIR-35265" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35265" href="https://jira.hl7.org/browse/FHIR-35265">FHIR-35265</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add EOB.use to explanation of predetermination
</p>
</td>
</tr>


<tr id="issuerow175587" rel="175587" data-issuekey="FHIR-35268" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35268" href="https://jira.hl7.org/browse/FHIR-35268">FHIR-35268</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Correct wording on example regarding occurence of resource
</p>
</td>
</tr>


<tr id="issuerow184096" rel="184096" data-issuekey="FHIR-36647" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-36647" href="https://jira.hl7.org/browse/FHIR-36647">FHIR-36647</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add missing &#39;$&#39; to FSH alias reference.
</p>
</td>
</tr>


<tr id="issuerow174581" rel="174581" data-issuekey="FHIR-34956" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34956" href="https://jira.hl7.org/browse/FHIR-34956">FHIR-34956</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Out of Network Info
</p>
</td>
</tr>


<tr id="issuerow174272" rel="174272" data-issuekey="FHIR-34792" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34792" href="https://jira.hl7.org/browse/FHIR-34792">FHIR-34792</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Modify .provider Reference Resource
</p>
</td>
</tr>


<tr id="issuerow174463" rel="174463" data-issuekey="FHIR-34900" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34900" href="https://jira.hl7.org/browse/FHIR-34900">FHIR-34900</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
PCT Practitioner - Add explicit identifier slice for Tax ID
</p>
</td>
</tr>


<tr id="issuerow174967" rel="174967" data-issuekey="FHIR-35103" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35103" href="https://jira.hl7.org/browse/FHIR-35103">FHIR-35103</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
rewrite in third person
</p>
</td>
</tr>


<tr id="issuerow175578" rel="175578" data-issuekey="FHIR-35263" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35263" href="https://jira.hl7.org/browse/FHIR-35263">FHIR-35263</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Update the the finally published version of HRex
</p>
</td>
</tr>


<tr id="issuerow181954" rel="181954" data-issuekey="FHIR-36198" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-36198" href="https://jira.hl7.org/browse/FHIR-36198">FHIR-36198</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
PCT Coverage - check to ensure is based on HRex - Missing Group Slice in IG
</p>
</td>
</tr>


<tr id="issuerow190656" rel="190656" data-issuekey="FHIR-37653" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37653" href="https://jira.hl7.org/browse/FHIR-37653">FHIR-37653</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Align PCT Coverage with HRex 1.0.0 Coverage
</p>
</td>
</tr>


<tr id="issuerow175783" rel="175783" data-issuekey="FHIR-35326" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35326" href="https://jira.hl7.org/browse/FHIR-35326">FHIR-35326</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Update Overview to better reflect the workflow
</p>
</td>
</tr>


<tr id="issuerow174575" rel="174575" data-issuekey="FHIR-34951" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34951" href="https://jira.hl7.org/browse/FHIR-34951">FHIR-34951</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Stronger language as to why Provider SHOULD also receive AEOB 
</p>
</td>
</tr>


<tr id="issuerow174579" rel="174579" data-issuekey="FHIR-34954" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34954" href="https://jira.hl7.org/browse/FHIR-34954">FHIR-34954</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Overview Flow
</p>
</td>
</tr>


<tr id="issuerow174568" rel="174568" data-issuekey="FHIR-34947" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34947" href="https://jira.hl7.org/browse/FHIR-34947">FHIR-34947</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
should state the close relationship between GFEs/AEOBs and X12 claims/ERAs
</p>
</td>
</tr>


<tr id="issuerow175787" rel="175787" data-issuekey="FHIR-35328" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35328" href="https://jira.hl7.org/browse/FHIR-35328">FHIR-35328</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Change overview language regarding X12
</p>
</td>
</tr>


<tr id="issuerow175752" rel="175752" data-issuekey="FHIR-35322" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35322" href="https://jira.hl7.org/browse/FHIR-35322">FHIR-35322</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Institutional profile - supportingInfo:typeOfBill update
</p>
</td>
</tr>


<tr id="issuerow175531" rel="175531" data-issuekey="FHIR-35240" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35240" href="https://jira.hl7.org/browse/FHIR-35240">FHIR-35240</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Remove Organization.identfier ccn as MS element
</p>
</td>
</tr>


<tr id="issuerow174564" rel="174564" data-issuekey="FHIR-34944" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34944" href="https://jira.hl7.org/browse/FHIR-34944">FHIR-34944</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
In the Organization profile, update the ccn identifier description
</p>
</td>
</tr>


<tr id="issuerow174619" rel="174619" data-issuekey="FHIR-34979" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34979" href="https://jira.hl7.org/browse/FHIR-34979">FHIR-34979</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Organization Profile - add payer id and NAIC identifiers
</p>
</td>
</tr>


<tr id="issuerow174551" rel="174551" data-issuekey="FHIR-34937" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34937" href="https://jira.hl7.org/browse/FHIR-34937">FHIR-34937</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
References to CAA
</p>
</td>
</tr>


<tr id="issuerow174536" rel="174536" data-issuekey="FHIR-34924" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34924" href="https://jira.hl7.org/browse/FHIR-34924">FHIR-34924</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Reference to X12
</p>
</td>
</tr>


<tr id="issuerow174969" rel="174969" data-issuekey="FHIR-35104" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35104" href="https://jira.hl7.org/browse/FHIR-35104">FHIR-35104</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Advanced EOB Response to Provider(s) Must Be Optional
</p>
</td>
</tr>


<tr id="issuerow174819" rel="174819" data-issuekey="FHIR-35056" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35056" href="https://jira.hl7.org/browse/FHIR-35056">FHIR-35056</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Revise PCT Organization Type Code System
</p>
</td>
</tr>


<tr id="issuerow174623" rel="174623" data-issuekey="FHIR-34982" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34982" href="https://jira.hl7.org/browse/FHIR-34982">FHIR-34982</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Practitioner Profile - update the ccn identifier description
</p>
</td>
</tr>


<tr id="issuerow174534" rel="174534" data-issuekey="FHIR-34922" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34922" href="https://jira.hl7.org/browse/FHIR-34922">FHIR-34922</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
In the Coverage profile, define slices for .class
</p>
</td>
</tr>


<tr id="issuerow174669" rel="174669" data-issuekey="FHIR-35014" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35014" href="https://jira.hl7.org/browse/FHIR-35014">FHIR-35014</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
GFE Submitter Must be Uniform Across All GFEs within a Bundle
</p>
</td>
</tr>


<tr id="issuerow175966" rel="175966" data-issuekey="FHIR-35379" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35379" href="https://jira.hl7.org/browse/FHIR-35379">FHIR-35379</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add invariant requiring only a single GFE submitter
</p>
</td>
</tr>


<tr id="issuerow174051" rel="174051" data-issuekey="FHIR-34687" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34687" href="https://jira.hl7.org/browse/FHIR-34687">FHIR-34687</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Institutional Profile - add estimated admission period
</p>
</td>
</tr>


<tr id="issuerow173963" rel="173963" data-issuekey="FHIR-34666" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34666" href="https://jira.hl7.org/browse/FHIR-34666">FHIR-34666</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Define DRG as .supportingInfo on Institutional Profile
</p>
</td>
</tr>


<tr id="issuerow175797" rel="175797" data-issuekey="FHIR-35330" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35330" href="https://jira.hl7.org/browse/FHIR-35330">FHIR-35330</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Correct overview wording using IG name
</p>
</td>
</tr>


<tr id="issuerow175386" rel="175386" data-issuekey="FHIR-35202" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35202" href="https://jira.hl7.org/browse/FHIR-35202">FHIR-35202</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
&quot;Must Support&quot; is not defined in this IG and it has to be since it is applied to several of the Resources
</p>
</td>
</tr>


<tr id="issuerow174565" rel="174565" data-issuekey="FHIR-34945" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34945" href="https://jira.hl7.org/browse/FHIR-34945">FHIR-34945</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Organization Profile - delete tin identifier
</p>
</td>
</tr>


<tr id="issuerow197414" rel="197414" data-issuekey="FHIR-38766" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38766" href="https://jira.hl7.org/browse/FHIR-38766">FHIR-38766</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove MS from AEOB.item.revenue
</p>
</td>
</tr>


<tr id="issuerow175523" rel="175523" data-issuekey="FHIR-35237" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35237" href="https://jira.hl7.org/browse/FHIR-35237">FHIR-35237</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
FHIR US Core 3.1 is required for providers/payers to support adjacent ONC/CMS regulation
</p>
</td>
</tr>


<tr id="issuerow194401" rel="194401" data-issuekey="FHIR-38125" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38125" href="https://jira.hl7.org/browse/FHIR-38125">FHIR-38125</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove Must Support from PreAuthRef
</p>
</td>
</tr>


<tr id="issuerow175647" rel="175647" data-issuekey="FHIR-35294" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35294" href="https://jira.hl7.org/browse/FHIR-35294">FHIR-35294</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Coverage Profile - modify .subscriber Reference resource
</p>
</td>
</tr>


<tr id="issuerow174643" rel="174643" data-issuekey="FHIR-34990" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34990" href="https://jira.hl7.org/browse/FHIR-34990">FHIR-34990</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Define RelatedPerson Profile
</p>
</td>
</tr>


<tr id="issuerow175469" rel="175469" data-issuekey="FHIR-35216" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35216" href="https://jira.hl7.org/browse/FHIR-35216">FHIR-35216</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
AEOB Item links to GFE
</p>
</td>
</tr>


<tr id="issuerow174530" rel="174530" data-issuekey="FHIR-34920" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34920" href="https://jira.hl7.org/browse/FHIR-34920">FHIR-34920</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
On the AEOB profile, remove requirement for net; add requirement for adjudication
</p>
</td>
</tr>


<tr id="issuerow194035" rel="194035" data-issuekey="FHIR-37934" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37934" href="https://jira.hl7.org/browse/FHIR-37934">FHIR-37934</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Make type of bill on institutional supportinginfo cardinality 1..1
</p>
</td>
</tr>


<tr id="issuerow174976" rel="174976" data-issuekey="FHIR-35108" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35108" href="https://jira.hl7.org/browse/FHIR-35108">FHIR-35108</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
which x12 specifications? 
</p>
</td>
</tr>


<tr id="issuerow186218" rel="186218" data-issuekey="FHIR-36761" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-36761" href="https://jira.hl7.org/browse/FHIR-36761">FHIR-36761</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Institutional GFE - Chg procedure:primary to procedure:principal, modify definition
</p>
</td>
</tr>


<tr id="issuerow175538" rel="175538" data-issuekey="FHIR-35243" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35243" href="https://jira.hl7.org/browse/FHIR-35243">FHIR-35243</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Add relatedPerson to Subscriber reference types
</p>
</td>
</tr>


<tr id="issuerow175472" rel="175472" data-issuekey="FHIR-35217" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35217" href="https://jira.hl7.org/browse/FHIR-35217">FHIR-35217</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Updating / Cancelling AEOB Request
</p>
</td>
</tr>


<tr id="issuerow190104" rel="190104" data-issuekey="FHIR-37516" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37516" href="https://jira.hl7.org/browse/FHIR-37516">FHIR-37516</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Change careTeam:rendering slice on Institutional GFE to only be a Human (not Organization)
</p>
</td>
</tr>


<tr id="issuerow174955" rel="174955" data-issuekey="FHIR-35095" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35095" href="https://jira.hl7.org/browse/FHIR-35095">FHIR-35095</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Utilize Distinct FHIR Profiles for Professional and Institutional Claims
</p>
</td>
</tr>


<tr id="issuerow194402" rel="194402" data-issuekey="FHIR-38126" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38126" href="https://jira.hl7.org/browse/FHIR-38126">FHIR-38126</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add Disclaimer extension to GFEs
</p>
</td>
</tr>


<tr id="issuerow174569" rel="174569" data-issuekey="FHIR-34948" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34948" href="https://jira.hl7.org/browse/FHIR-34948">FHIR-34948</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Make a stronger case as to why FHIR is the best 
</p>
</td>
</tr>


<tr id="issuerow175560" rel="175560" data-issuekey="FHIR-35254" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35254" href="https://jira.hl7.org/browse/FHIR-35254">FHIR-35254</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
compoundDrugLinkingNum needs more guidance
</p>
</td>
</tr>


<tr id="issuerow174473" rel="174473" data-issuekey="FHIR-34905" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34905" href="https://jira.hl7.org/browse/FHIR-34905">FHIR-34905</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
PCT GFE Professional - Create identifier slices rather than extensions
</p>
</td>
</tr>


<tr id="issuerow175545" rel="175545" data-issuekey="FHIR-35246" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35246" href="https://jira.hl7.org/browse/FHIR-35246">FHIR-35246</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Create slices on identifier instead of creating extensions
</p>
</td>
</tr>


<tr id="issuerow175568" rel="175568" data-issuekey="FHIR-35258" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35258" href="https://jira.hl7.org/browse/FHIR-35258">FHIR-35258</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Require type and subtype in AEOB
</p>
</td>
</tr>


<tr id="issuerow174471" rel="174471" data-issuekey="FHIR-34903" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34903" href="https://jira.hl7.org/browse/FHIR-34903">FHIR-34903</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
PCT GFE Institutional - Identifiers. Add slices to .identifier rather than creating extensions
</p>
</td>
</tr>


<tr id="issuerow175744" rel="175744" data-issuekey="FHIR-35319" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35319" href="https://jira.hl7.org/browse/FHIR-35319">FHIR-35319</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Institutional  Profile - define Point of Origin, Admission Type and Discharge Status 
</p>
</td>
</tr>


<tr id="issuerow191047" rel="191047" data-issuekey="FHIR-37720" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37720" href="https://jira.hl7.org/browse/FHIR-37720">FHIR-37720</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add the extension gfeProviderAssignedIdentifier to the AEOB Profile. (at the header level)
</p>
</td>
</tr>


<tr id="issuerow174459" rel="174459" data-issuekey="FHIR-34897" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34897" href="https://jira.hl7.org/browse/FHIR-34897">FHIR-34897</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
PCT Practitioner - remove endpoint extension add slice on contact
</p>
</td>
</tr>


<tr id="issuerow181947" rel="181947" data-issuekey="FHIR-36193" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-36193" href="https://jira.hl7.org/browse/FHIR-36193">FHIR-36193</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Plan or Coverage Entity Name and GFE Plan or Coverage Payer Name appear to be the same
</p>
</td>
</tr>


<tr id="issuerow174466" rel="174466" data-issuekey="FHIR-34901" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34901" href="https://jira.hl7.org/browse/FHIR-34901">FHIR-34901</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Institutional profile - define careTeamSequence
</p>
</td>
</tr>


<tr id="issuerow174580" rel="174580" data-issuekey="FHIR-34955" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34955" href="https://jira.hl7.org/browse/FHIR-34955">FHIR-34955</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Network status in advanced EOB profile
</p>
</td>
</tr>


<tr id="issuerow174842" rel="174842" data-issuekey="FHIR-35069" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35069" href="https://jira.hl7.org/browse/FHIR-35069">FHIR-35069</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Professional profile - update careTeam
</p>
</td>
</tr>


<tr id="issuerow174820" rel="174820" data-issuekey="FHIR-35057" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35057" href="https://jira.hl7.org/browse/FHIR-35057">FHIR-35057</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Institutional profile - add diagnosis slice, add invariants
</p>
</td>
</tr>


<tr id="issuerow175550" rel="175550" data-issuekey="FHIR-35249" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35249" href="https://jira.hl7.org/browse/FHIR-35249">FHIR-35249</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
More clearly define the purpose and constraints of ProviderEventMethodology
</p>
</td>
</tr>


<tr id="issuerow175601" rel="175601" data-issuekey="FHIR-35273" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35273" href="https://jira.hl7.org/browse/FHIR-35273">FHIR-35273</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Provide means to declare an in or out of network/coverage status for AEOB
</p>
</td>
</tr>


<tr id="issuerow175597" rel="175597" data-issuekey="FHIR-35272" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35272" href="https://jira.hl7.org/browse/FHIR-35272">FHIR-35272</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Provide a means to specify a denial reason in AEOB
</p>
</td>
</tr>


<tr id="issuerow175488" rel="175488" data-issuekey="FHIR-35222" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35222" href="https://jira.hl7.org/browse/FHIR-35222">FHIR-35222</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
PCT GFE Institutional - Claim.CareTeam:operating - PCT Practitioner, fix NUCC
</p>
</td>
</tr>


<tr id="issuerow175574" rel="175574" data-issuekey="FHIR-35261" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35261" href="https://jira.hl7.org/browse/FHIR-35261">FHIR-35261</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Make Conformance statement verbs in bold format
</p>
</td>
</tr>


<tr id="issuerow197160" rel="197160" data-issuekey="FHIR-38644" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38644" href="https://jira.hl7.org/browse/FHIR-38644">FHIR-38644</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add provider descriptions for patients to both encounter and claim level
</p>
</td>
</tr>


<tr id="issuerow190467" rel="190467" data-issuekey="FHIR-37581" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37581" href="https://jira.hl7.org/browse/FHIR-37581">FHIR-37581</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add clarifying comment to processNote with best practice for patient information
</p>
</td>
</tr>


<tr id="issuerow197557" rel="197557" data-issuekey="FHIR-38840" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38840" href="https://jira.hl7.org/browse/FHIR-38840">FHIR-38840</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Allow GFE Submitter to be Practitioner in Institutional GFE
</p>
</td>
</tr>


<tr id="issuerow174931" rel="174931" data-issuekey="FHIR-35088" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35088" href="https://jira.hl7.org/browse/FHIR-35088">FHIR-35088</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Institutional and Professional profiles - NDC mapping and Value Set
</p>
</td>
</tr>


<tr id="issuerow201180" rel="201180" data-issuekey="FHIR-39416" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39416" href="https://jira.hl7.org/browse/FHIR-39416">FHIR-39416</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Remove disclaimer extension from AEOB and update processNote description and cardinality
</p>
</td>
</tr>


<tr id="issuerow176112" rel="176112" data-issuekey="FHIR-35453" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35453" href="https://jira.hl7.org/browse/FHIR-35453">FHIR-35453</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Harmonize Profiles with the CARIN BB IG
</p>
</td>
</tr>


<tr id="issuerow174514" rel="174514" data-issuekey="FHIR-34913" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34913" href="https://jira.hl7.org/browse/FHIR-34913">FHIR-34913</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Harmonize CARIN BB and PCT FHIR data element mapping and Value Sets
</p>
</td>
</tr>


<tr id="issuerow175527" rel="175527" data-issuekey="FHIR-35238" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35238" href="https://jira.hl7.org/browse/FHIR-35238">FHIR-35238</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Include a CapabilityStatement
</p>
</td>
</tr>


<tr id="issuerow197560" rel="197560" data-issuekey="FHIR-38842" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38842" href="https://jira.hl7.org/browse/FHIR-38842">FHIR-38842</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Patient should be able to search EOBs, not get Bundles
</p>
</td>
</tr>


<tr id="issuerow174829" rel="174829" data-issuekey="FHIR-35063" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35063" href="https://jira.hl7.org/browse/FHIR-35063">FHIR-35063</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
polling mechanism in question
</p>
</td>
</tr>


<tr id="issuerow174602" rel="174602" data-issuekey="FHIR-34974" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34974" href="https://jira.hl7.org/browse/FHIR-34974">FHIR-34974</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
need to better explain the need for all the workflow steps 
</p>
</td>
</tr>


<tr id="issuerow175593" rel="175593" data-issuekey="FHIR-35271" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35271" href="https://jira.hl7.org/browse/FHIR-35271">FHIR-35271</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
AEOB Query should take a different approach
</p>
</td>
</tr>


<tr id="issuerow174268" rel="174268" data-issuekey="FHIR-34789" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34789" href="https://jira.hl7.org/browse/FHIR-34789">FHIR-34789</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Rewrite to make easier to understand the API
</p>
</td>
</tr>


<tr id="issuerow174651" rel="174651" data-issuekey="FHIR-34997" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34997" href="https://jira.hl7.org/browse/FHIR-34997">FHIR-34997</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Change who gets authentication done in AEOB request from payer
</p>
</td>
</tr>


<tr id="issuerow174515" rel="174515" data-issuekey="FHIR-34914" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34914" href="https://jira.hl7.org/browse/FHIR-34914">FHIR-34914</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Response to gfe-submit is unclear
</p>
</td>
</tr>


<tr id="issuerow174577" rel="174577" data-issuekey="FHIR-34952" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34952" href="https://jira.hl7.org/browse/FHIR-34952">FHIR-34952</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Process Flow Revisions
</p>
</td>
</tr>


<tr id="issuerow174554" rel="174554" data-issuekey="FHIR-34940" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34940" href="https://jira.hl7.org/browse/FHIR-34940">FHIR-34940</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Process for Sharing Advanced EOBs with Providers
</p>
</td>
</tr>


<tr id="issuerow173599" rel="173599" data-issuekey="FHIR-34533" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34533" href="https://jira.hl7.org/browse/FHIR-34533">FHIR-34533</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Is return type form GFE Submit Appropriate?
</p>
</td>
</tr>


<tr id="issuerow175054" rel="175054" data-issuekey="FHIR-35124" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35124" href="https://jira.hl7.org/browse/FHIR-35124">FHIR-35124</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Use of the FHIR API for Advanced AOBs to Member Must Be Optional
</p>
</td>
</tr>


<tr id="issuerow175375" rel="175375" data-issuekey="FHIR-35199" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35199" href="https://jira.hl7.org/browse/FHIR-35199">FHIR-35199</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Diagram in Overview seems to imply that the Patient could only get a response from an Intermediary
</p>
</td>
</tr>


<tr id="issuerow201260" rel="201260" data-issuekey="FHIR-39463" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39463" href="https://jira.hl7.org/browse/FHIR-39463">FHIR-39463</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Remove MS from AEOB.priority
</p>
</td>
</tr>


<tr id="issuerow201262" rel="201262" data-issuekey="FHIR-39465" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39465" href="https://jira.hl7.org/browse/FHIR-39465">FHIR-39465</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Make AEOB.insurance.coverage MS
</p>
</td>
</tr>


<tr id="issuerow175092" rel="175092" data-issuekey="FHIR-35143" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35143" href="https://jira.hl7.org/browse/FHIR-35143">FHIR-35143</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Professional profile - modify requirement for careTeam.qualification
</p>
</td>
</tr>


<tr id="issuerow175079" rel="175079" data-issuekey="FHIR-35140" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35140" href="https://jira.hl7.org/browse/FHIR-35140">FHIR-35140</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Institutional profile - modify requirement for careTeam.qualification
</p>
</td>
</tr>


<tr id="issuerow197427" rel="197427" data-issuekey="FHIR-38771" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38771" href="https://jira.hl7.org/browse/FHIR-38771">FHIR-38771</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add note in overview that this IG does not address eligibility, prior authorization, or coordination of benefits
</p>
</td>
</tr>


<tr id="issuerow174589" rel="174589" data-issuekey="FHIR-34964" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34964" href="https://jira.hl7.org/browse/FHIR-34964">FHIR-34964</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
provider web portal?
</p>
</td>
</tr>


<tr id="issuerow194403" rel="194403" data-issuekey="FHIR-38127" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38127" href="https://jira.hl7.org/browse/FHIR-38127">FHIR-38127</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
GFE profiles need to require item.net
</p>
</td>
</tr>


<tr id="issuerow175552" rel="175552" data-issuekey="FHIR-35250" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35250" href="https://jira.hl7.org/browse/FHIR-35250">FHIR-35250</a>
</td>
<td class="resolution">    Not Persuasive with Modification
</td>
<td class="summary"><p>
Use Claim.billablePeriod instead of creating a new extension
</p>
</td>
</tr>


<tr id="issuerow174260" rel="174260" data-issuekey="FHIR-34785" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34785" href="https://jira.hl7.org/browse/FHIR-34785">FHIR-34785</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
simplify menu navigation
</p>
</td>
</tr>


<tr id="issuerow194091" rel="194091" data-issuekey="FHIR-37963" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-37963" href="https://jira.hl7.org/browse/FHIR-37963">FHIR-37963</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Redesign subjectToMedicalMgmt extension to support CodeableConcept and string
</p>
</td>
</tr>


<tr id="issuerow174262" rel="174262" data-issuekey="FHIR-34786" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34786" href="https://jira.hl7.org/browse/FHIR-34786">FHIR-34786</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Simplify or Replace figures with tables
</p>
</td>
</tr>


<tr id="issuerow174810" rel="174810" data-issuekey="FHIR-35051" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35051" href="https://jira.hl7.org/browse/FHIR-35051">FHIR-35051</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Modify GFE and AEOB Bundle Graphics
</p>
</td>
</tr>


<tr id="issuerow201179" rel="201179" data-issuekey="FHIR-39415" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39415" href="https://jira.hl7.org/browse/FHIR-39415">FHIR-39415</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add service description to AEOB header
</p>
</td>
</tr>


<tr id="issuerow173597" rel="173597" data-issuekey="FHIR-34532" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34532" href="https://jira.hl7.org/browse/FHIR-34532">FHIR-34532</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Need example of return from gfe-submit
</p>
</td>
</tr>


<tr id="issuerow174588" rel="174588" data-issuekey="FHIR-34963" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34963" href="https://jira.hl7.org/browse/FHIR-34963">FHIR-34963</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
GFE and AEOB Bundle Graphics
</p>
</td>
</tr>


<tr id="issuerow201149" rel="201149" data-issuekey="FHIR-39397" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39397" href="https://jira.hl7.org/browse/FHIR-39397">FHIR-39397</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add clarity for the operation outcome when server doesn&#39;t include AEOB
</p>
</td>
</tr>


<tr id="issuerow174587" rel="174587" data-issuekey="FHIR-34962" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34962" href="https://jira.hl7.org/browse/FHIR-34962">FHIR-34962</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
GFE and AEOB Bundle Graphics
</p>
</td>
</tr>


<tr id="issuerow201042" rel="201042" data-issuekey="FHIR-39346" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39346" href="https://jira.hl7.org/browse/FHIR-39346">FHIR-39346</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add a slice on AEOB.identifier for unique claim id to align with CARIN, but clarify in the description that it is the payer&#39;s claim id. 
</p>
</td>
</tr>


<tr id="issuerow174586" rel="174586" data-issuekey="FHIR-34961" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34961" href="https://jira.hl7.org/browse/FHIR-34961">FHIR-34961</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Detailed Requirements Summary
</p>
</td>
</tr>


<tr id="issuerow175590" rel="175590" data-issuekey="FHIR-35269" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35269" href="https://jira.hl7.org/browse/FHIR-35269">FHIR-35269</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Specify OperationOutcome requirements for common outcomes
</p>
</td>
</tr>


<tr id="issuerow201114" rel="201114" data-issuekey="FHIR-39379" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39379" href="https://jira.hl7.org/browse/FHIR-39379">FHIR-39379</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Make date of service required and add search parameter
</p>
</td>
</tr>


<tr id="issuerow197426" rel="197426" data-issuekey="FHIR-38770" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38770" href="https://jira.hl7.org/browse/FHIR-38770">FHIR-38770</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add Operational requirement that the GFE linked in the AEOB is an exact copy of the provider submitted GFE Bundle
</p>
</td>
</tr>


<tr id="issuerow194396" rel="194396" data-issuekey="FHIR-38120" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38120" href="https://jira.hl7.org/browse/FHIR-38120">FHIR-38120</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add an Operational requirement about GFE stored as is as originally received and not updated.
</p>
</td>
</tr>


<tr id="issuerow197361" rel="197361" data-issuekey="FHIR-38738" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38738" href="https://jira.hl7.org/browse/FHIR-38738">FHIR-38738</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Define assumptions about what payers must verify in the GFE
</p>
</td>
</tr>


<tr id="issuerow201116" rel="201116" data-issuekey="FHIR-39380" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-39380" href="https://jira.hl7.org/browse/FHIR-39380">FHIR-39380</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Guiding principle for repeating items in GFE in AEOB
</p>
</td>
</tr>


<tr id="issuerow194398" rel="194398" data-issuekey="FHIR-38122" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38122" href="https://jira.hl7.org/browse/FHIR-38122">FHIR-38122</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Specify more details on the scope of the IG regarding coordination of benefits and other use cases
</p>
</td>
</tr>


<tr id="issuerow175572" rel="175572" data-issuekey="FHIR-35260" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35260" href="https://jira.hl7.org/browse/FHIR-35260">FHIR-35260</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add slice requirements for AEOB adjudication categories
</p>
</td>
</tr>


<tr id="issuerow197549" rel="197549" data-issuekey="FHIR-38835" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-38835" href="https://jira.hl7.org/browse/FHIR-38835">FHIR-38835</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Consider GFE Value to Indicate if Member Has Agreed to Balance Billing
</p>
</td>
</tr>


<tr id="issuerow175935" rel="175935" data-issuekey="FHIR-35378" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-35378" href="https://jira.hl7.org/browse/FHIR-35378">FHIR-35378</a>
</td>
<td class="resolution">    Persuasive with Modification
</td>
<td class="summary"><p>
Add entry slices on Bundles for expected and required resource types
</p>
</td>
</tr>


<tr id="issuerow174543" rel="174543" data-issuekey="FHIR-34930" class="issuerow">
<td class="issuekey">

<a class="issue-link" data-issue-key="FHIR-34930" href="https://jira.hl7.org/browse/FHIR-34930">FHIR-34930</a>
</td>
<td class="resolution">    Persuasive
</td>
<td class="summary"><p>
Add Relationshiop Diagram
</p>
</td>
</tr>
</tbody>
</table>



---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/downloads.md

### Downloads
* The full [FHIR PCT Implementation Guide](full-ig.zip)
* FHIR PCT Resource Definitions [(JSON)](definitions.json.zip) [(XML)](definitions.xml.zip) [(TTL)](definitions.ttl.zip)
* FHIR PCT IG Profile Examples [(JSON)](examples.json.zip) [(XML)](examples.xml.zip) [(TTL)](examples.ttl.zip)
* FHIR PCT IG [Validator Pack](validator-hl7.fhir.us.davinci-pct.pack)

#### Package File
The following package file includes an NPM  (Node Package Manager) package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and URLs in the implementation guide (IG), etc. defined as part of this version of the IG. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply to make a conformant implementation. See the overview on validating <a href="http://hl7.org/fhir/R4/validation.html">FHIR profiles and resources</a>:

* [Package](package.tgz)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}



---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/draft_content_note.md

The following {{include.content}} relates to the GFE Coordination workflow and is marked as **DRAFT**. This content has not yet met the requisite level of testing to be balloted as trail-use. However, this part of the specification has been reviewed by the Da Vinci PCT open community of providers, payers, and health IT vendors and was determined to be at a sufficient level of development to be included in this publication for the purposes of soliciting feedback from, and enabling testing by, the larger implementation community with the intention of bringing the content related to the GFE Coordination workflow to full STU status in a future version.
Feedback is welcome and may be submitted through the [FHIR change tracker](http://hl7.org/fhir-issues) indicating "US Da Vinci Patient Cost Transparency (PCT)(FHIR)" as the specification.
{:.note-to-balloters}

---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/formal_specification.md

This section of the implementation guide (IG) defines the specific conformance requirements for systems wishing to conform to this Patient Cost Transparency (PCT) IG. The bulk of it focuses on Good Faith Estimate (GFE) submission [$gfe-submit](OperationDefinition-GFE-submit.html) and an Advanced Explanation of Benefits (AEOB) query, though it also provides guidance on privacy, security, and other implementation requirements.

### Context

#### Pre-reading
Before reading this formal specification, implementers should first familiarize themselves with two other key portions of the specification:

* The [Use Case](use_cases.html) page provides context for the intent and general process flow of this formal specification.

* The [Technical Background and Underlying Technologies]( underlying_technologies.html) page provides information about the underlying specifications and indicates what portions should be read and understood to have the necessary foundation for the constraints and usage guidance described here.

#### Conventions
This implementation guide (IG) uses specific terminology to flag statements that have relevance for the evaluation of conformance with the guide:

* **SHALL** indicates requirements that must be met to be conformant with the specification.

* **SHOULD** indicates behaviors that are strongly recommended (and which may result in interoperability issues or sub-optimal behavior if not adhered to), but which do not, for this version of the specification, affect the determination of specification conformance.

* **MAY** describes optional behaviors that are free to consider but are not a recommendation for or against adoption.



#### Must Support ####

The following rules regarding Must Support  elements apply to all Profiles in this guide. The Must Support definitions are not inherited from other IGs, even for profiles in this guide derived from another guide.

Sender:
* The sender **SHALL** send the data element if the sender maintains the data element and is authorized to share it.
    * Data elements that the sender maintains includes data elements available in the systems under the sender’s control.

    * If the sender does not capture/store the data, the data are not available, or sharing of the data is not authorized, the system **SHOULD NOT** send the element if the element is not marked as mandatory (lower cardinality of 0).
 
Receiver:

* The receiver **SHALL** be capable of processing resource instances containing must-support data elements without generating an error or causing the application to fail.
* The receiver **SHOULD** be capable of displaying must support data elements for human use.
* The receiver **SHALL** be able to process resource instances containing must-support data elements asserting missing information (data absent reason extension).

This guide uses technical actors to define [Must Support](formal_specification.html#must-support) conformance requirements.

#### Profiles
This specification makes significant use of [FHIR profiles]({{site.data.fhir.path}}profiling.html) and terminology artifacts to describe the content to be shared as part of AEOB requests and responses.

The full set of profiles defined in this IG can be found by following the links on the [Artifacts](artifacts.html) page.

### Workflow Specific Specifications

Additional Specifications for the two workflows in this guide can be found on the following pages:

- [GFE Coordination Specification](gfe_coordination_specification.html) -  Requirements to support the ability for a provider to request and collect one or more GFEs from other providers that may participate in a set of procedures related to patient’s period of care for which a GFE is required, either to provide to the patient and/or to submit to a payer.

- [GFE Submission and AEOB Specification](gfe_submission_and_aeob_specification.html) - Requirements to supports the ability for a provider to submit a collection of one or more GFEs to a payer for them to process and produce an AEOB bundle to the patient and optionally to the provider.


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/gfe_coordination_overview.md

{% include draft_content_note.md content="page" %}

This section of the Implementation Guide focuses on enabling providers and facilities to coordinate cost and planned service(s) or item(s) information for a patient’s period of care for which multi-provider Good Faith Estimates (GFE) are required, either to provide to the patient or to submit to a payer (for patients using insurance.)

This guide supports the:

- Ability for a convening provider, acting as a coordination requester, to notify co-providers, acting as contributors, and request data to inform Good Faith Estimates (GFEs) for expected items and services.

- Ability for contributors to respond to a request for data back to a coordination requester with cost and planned items and services information.

- Ability for a Coordination Platform to communicate a GFE to payer (leveraging an existing PCT IG workflow) and to other providers in the care team, prior to scheduled a service or upon request.

The Coordination Platform is introduced in this guide to act as the system designated by the convening provider to aggregate the GFE information across providers when multiple providers are engaged in a service. This allows for variability in the role of “convening” providers and data for the GFE. Some examples of systems that could serve as GFE coordination platforms include a: practice management system, electronic health record (EHR) system, cost estimator, clearinghouse, billing services, or payer system. 

Additionally, see the Terms and Concepts (link) and Systems and Actors (link) for more detail on acronyms and new terms.  

Good Faith Estimate (GFE) Bundle including [Good Faith Estimate resource profiles](artifacts.html#structures-gfe-resource-profiles) (Claim resources of type predetermination) along with supporting data (such as Patient, Coverage, etc.) to a payer. The payer can then use this information to generate an Advanced Explanation of Benefit (AEOB) Bundle including [Advanced Explanation of Benefits resource profiles](artifacts.html#structures-aeob-resource-profiles) (ExplanationOfBenefit resources of type predetermination) along with supporting data that the patient, and optionally the provider (GFE submitter on claim resources), can retrieve to get an estimation of costs for expected services as known at a specific point in time.

### Workflow at a Glance ###
![PCT GFE Coordination High Level Workflow](PCT_GFE_Coordination_HighLevelWorkflow.png){:style="float: none;"}

**GFE Coordination Diagram Steps (High Level View)**
> Pre-Step: A patient schedules a service or requests an estimate for a service which triggers the collection of one or more GFEs. 
> Note: This workflow is used when there is need for a standard means of coordinating on a GFE with multiple providers.


1. A GFE Coordination Requester identifies all of the co-providers and retrieves their FHIR identifiers from the Coordination Platform.

2. The GFE Coordination Requester creates a set of Tasks (a single Coordinating GFE Coordination Task and one or more GFE Contributor Task(s)) that contain the information necessary to create an estimate on the Coordination Platform. 

3. GFE Contributors are notified of a new task assignment.

4. The GFE Contributor retrieves the task and request information (GFE Information Bundle)
   The GFE Contributor can then decide to accept or reject the request and update the task appropriately.

5. The GFE Collaboration Requester is notified of status updates to the tasks they created.

6. When notified of a reject status, the GFE Coordination Requester can create a new GFE Contributor Task for a new contributor if they would like.

7. If the GFE Contributor accepts the request, they will collect the requested estimate(s), place them into a GFE Bundle, attach it to the task and mark completed.

8. The GFE Coordination Requester can retrieve a GFE Collection Bundle (made up of attached GFE Bundles  and information about GFE Missing Bundles) at any time through a gfe-retrieve operation. They could also choose to ‘close’ the Coordination Task by marking it as completed.

### Data Structures ###

Below are illustrations showing the relationships between the profiles involved in this workflow.
> Note: For brevity, not all data elements are shown.

Figure 1 shows a GFE Coordination Bundle which is a transaction Bundle that can be used by a GFE Coordination Requester to submit all resources involved in a GFE coordination request in a single POST transaction. It includes a single GFE Coordination Task, and one or more GFE Contributor Tasks. The GFE Coordination Task must have a GFE Information Bundle associated to it. This information bundle is used to express all of the generally applicable information needed for GFE Contributors to make their estimates. Optionally, the GFE Contributor Tasks may also have a GFE Information Bundle associated to them to convey any provider specific information, such as specific services or to share specific contextual clinical information.A GFE Information Bundle is preferably associated to its respective Task resource by encoding it in the `Task.input.valueAttachment`. Alternatively a GFE Information Bundle may be referenced by the `Task.input.valueReference`and be written to the Coordination Platform as a separate Bundle.
The Task references to to Practitioner and Organization references in must point to the instances on the Coordination Platform.

![Figure 1. GFE Coordination Bundle as created by the GFE Coordination Requester](GFE_Coordination_Bundle.png){:style="float: none;"}

_Figure 1. GFE Coordination Bundle as created by the GFE Coordination Requester_


Figure 2 shows the relationships of the resources involved in GFE coordination request as they exist on the Coordination Platform whether they be written individually or through the GFE Coordination Bundle transaction. If the GFE Information Bundles are not contained in the Task, they would exist as Bundle resources that would be individually retrievable from the Coordination Platform.

![Figure 2. GFE Coordination Bundle content as stored on the Coordination Platform](GFE_Coordination_Platform_Resources.png){:style="float: none;"}

_Figure 2. GFE Coordination Bundle content as stored on the Coordination Platform_


Figure 3 shows the GFE Information Bundle is created by the GFE Coordination Requester and is meant to contain the information needed for GFE Contributors to make their estimate. This includes the Patient, Coverage and Payer if applicable, specific providers or roles being asked for (not the same as those on the Coordination Platform), requested items (including items and services), and any additional documentation. Additional resources that provide important contextual information that could affect needed items, services, or costs, such as Conditions or Observations, are also allowed.


![Figure 3. GFE Information Bundle created by the GFE Coordination Requester](GFE_Information_Bundle.png){:style="float: none;"}

_Figure 3. GFE Information Bundle created by the GFE Coordination Requester_


Figure 4 shows the GFE Bundle which is created by the GFE Contributor and attached to their GFE Contributor Task. It contains the Patient, Coverage and Payer if relevant, involved providers, and Claims data with the estimated costs.

![Figure 4. A GFE Bundle created by the GFE Contributor](GFE_Bundle.png){:style="float: none;"}

_Figure 4. A GFE Bundle created by the GFE Contributor_


Figure 5 shows the GFE Missing Bundle which is used to convey that a GFE Contributor Task did not have a GFE Bundle attached when a GFE Collection Bundle was compiled. The purpose of this bundle is to provide an indication that aGFE collection is incomplete and what is missing, including the GFE Contributor and the items and services that an estimate requested for. 

![Figure 5. A GFE Missing bundle created by the Coordination Platform](GFE_Missing_Bundle.png){:style="float: none;"}

_Figure 5. A GFE Missing bundle created by the Coordination Platform_


Figure 6 shows the GFE Collection bundle created by the Coordination Platform when the GFE Coordination Requester calls the GFE-retrieve operation. In response to the gre-retrieve operation the provider (Practitioner or Organization). As part of the [GFE Submission and AEOB Workflow](gfe_submission_and_aeob_overview.html), this represents the GFE submitter (which can be changed before the submission if necessary).


![Figure 6. GFE Collection Bundle created by the Coordination Platform](GFE_Collection_Bundle.png){:style="float: none;"}

_Figure 6. GFE Collection Bundle created by the Coordination Platform_

### Technical Workflows ###

#### Full GFE Coordination: End-to-End Workflow

![GFE Coordination Technical Workflow](PCTCoordinationWorkflow.png){:style="float: none;"}

_Figure 7. GFE Coordination Technical Workflow_


1. GFE Coordinating Requester performs a FHIR search for [Practitioner](StructureDefinition-davinci-pct-practitioner.html), [PractitionerRole](https://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-practitionerrole.html), or [Organization](StructureDefinition-davinci-pct-organization.html) resources. If successful (200 OK), the search will return 0 or more resources.
    * If 1 or more resources are returned, the GFE Coordination Requestor processes those resources, extracting the resource IDs for use in step 2.
    * If 0 resources are returned, or an error occurs, the requester should reformulate their search and try again.

2. GFE Coordinating Requester creates a [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) and 1 or more [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resources, creates and associates one or more [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) resources and includes them in a [GFE Coordination Bundle](StructureDefinition-davinci-pct-gfe-coordination-bundle.html), then uses a FHIR POST to the transaction endpoint of the Coordination Platform’s FHIR server.
    * If successful, the content of the bundle will be stored as separate resources on the FHIR server, and notifications will be sent to all GFE Contributors referenced in the Tasks per step 3. The notifications may be sent via FHIR subscriptions, which can be triggered by a create operation, or they may be out of band notifications using whatever mechanism the coordination platform chooses.
    * If the POST fails, the entire transaction is rolled back and no resources will be stored on the Coordination Platform. The requestor must address any errors and resubmit.

3. Notifications will be sent to all GFE Contributors referenced in the Task resources submitted in step 2.
    * The notifications may be sent via FHIR subscriptions, which can be triggered by a create operation, or they may be out of band notifications using whatever mechanism the Coordination Platform chooses.

4. Each GFE Contributor retrieves their respective [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) from the Coordination Platform, reviews the contents, and responds by updating the Task status appropriately and using a FHIR PUT operation to update the Task on the Coordination Platform FHIR endpoint.
    * If the contributor accepts the task, Task.status shall be changed to `accepted`.
    * If the contributor declines the task, Task.status shall be changed to `rejected`.

5. After each GFE Contributor has updated their respective [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html), the GFE Coordination Requester is notified of the changes (same process as step 3) and reviews the updates. If a GFE Contributor has rejected, the GFE Coordination Requester may choose to replace the contributor or cancel the entire request depending on the reason if one is provided in `Task.statusReason` (e.g. if a key participant is unable to participate due to a proposed date of service, the GFE Coordination Requester may wish to cancel the entire request and make a new request with a time that works for that participant).

6. After accepting a [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html), each GFE Contributor creates a GFE Bundle with their good faith estimate and any supporting resources. They then attach that bundle to their [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html), sets the status to “completed” and does an HTTP PUT operation to update the task.

7. At any time after the initial creation of the GFE Coordination Task on the Coordination Platform the GFE Coordination Requester may retrieve the [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) by calling the [$gfe-retrieve operation](OperationDefinition-GFE-retrieve.html). This is often done after verifying the [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) for each contributor has been set to completed or a time limit has been reached. To create the [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) triggered by the call to the [$gfe-retrieve operation](OperationDefinition-GFE-retrieve.html), the Coordination Platform will:
    * Retrieve all GFE Bundle resources for each completed task
    * Create GFE Missing Bundles for each incomplete task
    * Create a GFE Collection Bundle containing all GFE Bundle and GFE Missing Bundle resources, and return it in the body of the operation

8. GFE Coordination Requestor provides the GFE Bundle to the patient directly, or proceeds to the [GFE Submission and AEOB Workflow]( gfe_submission_and_aeob_overview.html) and submits the [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) to the Payer.

9. GFE Coordination Requestor updates the status of each [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) to `closed` and uses an HTTP PUT to update the task on the Coordination Platform’s FHIR server.  


#### Examples

**Timeline Example Scenario**
The diagram below demonstrates use of the available date elements to meet turnaround times to provide Good Faith Estimates (GFE)

![Request Timeline Example](Timeline_Example.png){:style="float: none;"}
_Figure 8. Request Timeline Example_


> Note: This is one example scenario. Providers and facilities will determine what role they play. Providers and facilities may need to be prepared to play the convening provider or co-provider, depending on their role in the patient’s service and in accordance with federal, state, and local regulations.

Assumptions:
* Patient does not have health insurance and will self-pay for the expected services.
* This is clinically appropriate (Clinical Decision Support [CDS] Score).
* Service location is known (e.g., address).
* Surgeon is external to Hospital
* Providers all respond with their data in a timely manner


1. On Monday, Adam Everyman is seen by Dr. Carla Cutter, a surgeon, and is advised a surgical procedure is needed. Adam Everyman presents as self-pay for the surgery and associated services in the period of care. 

2. Dr. Carla Cutter requests a surgical case time from Good Health Hospital (Convening Facility) 

3. On Tuesday, Good Health Hospital (Convening Facility) confirms and schedules the surgery, booking the OR for 8 days from today (clock starts here)

4. Good Health Hospital (Convening Facility) identifies the co-providers needed for the procedure and triggers a request for price estimate from the ordering surgeon, Dr. Carla Cutter (co-provider 1), Sleeper Anesthesiologist Group (co-provider 2), through their designated Coordination Platform. 

5. Dr. Carla Cutter’s office and Sleeper Anesthesiologist Group (Co-Providers) each review the procedure(s), relevant clinical data and respond to the GFE coordination request with procedures, pricing, including patient responsibility via the designated Coordination Platform. 

6. Good Health Hospital’s assigned Coordination Platform aggregates all convening and co-provider estimates into a single GFE, with the summary total for the surgery across providers as well as the details per provider.

7. GFE is posted to API available to the Patient by Tuesday (within one business day from time of scheduling)


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/gfe_coordination_specification.md

{% include draft_content_note.md content="page" %}

This section of the implementation guide (IG) defines the specific conformance requirements for systems wishing to conform to this Patient Cost Transparency (PCT) IG for GFE Coordination. It focuses on the Good Faith Estimate (GFE) Coordination Task, though it also provides guidance on privacy, security, and other implementation requirements.

#### Summary
The GFE Coordination workflow uses the Task resource. This resource is used to define, assign, and track activities across individuals, systems and organizations. The type of Tasks is distinguished by the Task.code. This guide defines the code `gfe-contributor-task` to be used as the type for each Task that is assigned to a single provider (Practitioner, PractitionerRole, or Organization) that is to contribute a [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html). Each of these [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resources are part of a single set of requests and share an association through the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) with a `Task.code` of `gfe-coordinating-task` and is referenced by each [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resource by `Task.partOf`. All of the tasks are created by the GFE Coordination Requester are posted to the Coordination Platform where they will be managed throughout the rest of the workflow culminating in the GFE Coordination Requester making the [$gfe-retrieve operation](OperationDefinition-GFE-retrieve.html) to collect all available [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) resources posted by the of the GFE Contributor(s) into one PCT [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html)


In addition to the requirements specified in this section, GFE Coordination Requesters, Coordination Platforms, and GFE Contributors **SHALL** meet the requirements as specified in their respective requirements CapabilityStatements and sections defined in this IG.

### Detailed Requirements


#### Identifying all GFE Coordination Participants
The Coordination Platform is the system enabling all interactions between collaborating parties. As such, the Coordination Platform will need to manage all of the resources relating to all potentially participating parties along with their contact information and a means to notify each of Task assignments and changes in Task status. 

After the GFE Coordination Requester, expectedly a Convening provider, determines that GFE collection needs to be coordinated across providers and determines the set of services and providers necessary, they will search the Coordination Platform for the references (FHIR IDs) for the providers to coordinate with. This lookup is generally done with an NPI, Tax ID or other identifying methods as supported by the Coordination Platform. For the purposes of this IG, the Coordination Platform provides a sort of “White Pages” phonebook lookup of providers. It is expected that providers largely maintain their own networks of potential care team members or have other means to find providers to work with. The “phonebook” lookup provided by the Coordination Platform is not expected to serve as a means to lookup providers by services offered or their service locations.

The Coordination Platform **SHALL** manage a current set of [PCT Organization](StructureDefinition-davinci-pct-organization.html), [PCT Practitioner](StructureDefinition-davinci-pct-practitioner.html), and [HRex PractitionerRole](https://hl7.org/fhir/us/davinci-hrex/STU1/StructureDefinition-hrex-practitionerrole.html) resources as identified in this guide with enough data and searching capabilities to support GFE Coordination Requesters to identify and retrieve the FHIR IDs of GFE Contributors.


#### Creating and Submitting a GFE Coordination Request
**References to Participants**
The GFE Coordination Requester **SHALL** use the FHIR resource IDs in all references to providers in both the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) and [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resource(s). These references include the `Task.requester` and the assigned `Task.owner`
When creating new Tasks, GFE Coordination Requesters **SHALL** reference only Coordination Participants where active=`true`.
If the GFE Coordination Requester must also contribute a GFE, they **SHALL** also create a [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) assigned to themselves for that purpose. This is done to enable a full set of GFEs to be made available for the Coordination Platform to put together into a complete [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html).

**Associating Request Information Bundles to Tasks**
Once the GFE Coordination Requester has collected sufficient enough information necessary for GFE Contributors to be able to provide an accurate estimate, and places the information into one or more [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) resources, the information bundles **SHALL** be associated with the appropriate Task through the `Task.input` element.
The [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) resources **SHALL** be fully contained, meaning all references **SHALL** resolve within the bundle.
The information that applies to all of the tasks **SHALL** be identified in the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html). 
There **SHALL** be at least one information bundle associated in the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html).
A GFE Coordination Requester **MAY** create GFE Contributor specific information bundles which **SHALL** be associated to the appropriate [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html).This can be done to provide specific providers  only the information they need to see.
To associate an information bundle with a Task in the `Task.input`, the GFE Contributor SHOULD encode the bundle as an attachment in `Task.input.valueAttachment`, though they **MAY** associate it through a reference in `Task.input.valueReference`.
A [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) associated to a Task through a reference **SHALL** exist on the Coordination Platform and the Task **SHALL** have the `Task.input.valueReference` reference the instance on the Coordination Platform.
Since the information bundle is fully self-contained and its relevance only extends to the Task in which it is associated, there is no need for the bundle to be written directly to the Coordination Platform. This can simplify the management of the data and has the advantage of not enabling the bundle to be modified outside of the Task. 
A potential disadvantage of having the information bundle contained in the Task is the size of the resource. An organization that has to manage and search through many [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resources may have a notable increase in traffic volume. This may be mitigated by Coordination Platforms that support the `_summary` search parameter

**GFE Coordination request submission**
No special operations are defined for the submission of GFE Coordination requests and are instead performed through a standard RESTful FHIR interface.

A Coordination Platform **SHALL** support the ability for GFE Coordination Requesters to POST a request in a single transaction through a [GFE Coordination Bundle](StructureDefinition-davinci-pct-gfe-coordination-bundle.html) and **MAY** support the ability for individual resource POSTing.. 

GFE Coordination Requesters SHOULD POST a GFE Coordination request though a single [GFE Coordination Bundle](StructureDefinition-davinci-pct-gfe-coordination-bundle.html), as opposed to posting Tasks and other resources individually. This enables the transactions to be written as a whole and rollback happens automatically if there is an issue that does not allow the transaction to be completed as a unit.

The GFE Coordination workflow is designed to allow participation of GFE Contributors that may not support this FHIR IG directly, or support FHIR at all. The Coordination Platform may provide another means to contribute data for [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) resources, such as through a delegate system or a portal. To support this, GFE Coordination Requesters SHOULD create [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resources for all of GFE Contributors  that a [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) is needed from if they have an active Coordination Participant Resource (Organization/Practitioner/PractitionerRole) on the Coordination Platform.


#### Notifications of New and Updated Tasks
Methods of notification are not defined in this IG, but may take the form of FHIR Subscription (potentially using [Notified Pull](https://hl7.org/fhir/uv/subscriptions-backport/2024Jan/notifications.html#notified-pull)), unsolicited notification, messaging or other method. Other Out of Band (OOB) transactions are also allowed.

Coordination Platforms **SHALL** be able to notify GFE Contributors when a new [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) is assigned to them or is marked as `cancelled`.
Coordination Platforms **SHALL** be able to notify GFE Coordination Requesters when a [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) they created has had their status updated to rejected, accepted, or completed.

#### Searching for and Retrieving Tasks
Both GFE Coordination Requesters and GFE Contributors need to be able to search for Tasks related to their role in the GFE Coordination workflow. Searching requirements are detailed the CapabilityStatements in this guide and **SHALL** be followed for a system to claim conformance to this guide.


#### GFE Contributor Actions
GFE Contributors **SHALL** be able to accept a GFE Contributing Task by updating a Task they are assigned with a Task.status code of `accepted`

GFE Contributors **SHALL** be able to decline a GFE Contributing Task by updating a Task they are assigned to with a Task.status code of `rejected`

When submitting a [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html), GFE Contributors **SHALL** update the [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html)  with the [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) contained in `Task.output.valueAttachement` and **SHALL** set that Task.status to `completed` when the Task is considered complete.
The GFE Contributor **MAY** include other types of data in output.valueAttachment, but such data **SHALL** be in a FHIR Resource format and fully contained with no external references that can’t be resolved internally.


#### Replacing Coordination Tasks or Contributor Tasks
**Replacing a [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html)**

If there is a schedule change, a change to the items or services for which a GFE is being requested, or the context of which has changed such that is may materially affect the GFE of a GFE Contributor, the GFE Coordinator SHOULD cancel the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) and create a new one.
This new replacement [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) SHOULD contain the `task-replaces` extension with a reference to the `cancelled` [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) that the new one replaces. This will enable GFE Contributors to refer back to any previous [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) resources in the case it may assist them in addressing the new task.

**Replacing a GFE Contributor**
GFE Coordination Requesters **SHALL** be able to replace GFE Contributors regardless of the state of the status of the [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) as long as the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) does not have a status of `cancelled`, `failed`, `completed`, or `entered-in-error`.

When replacing a GFE Contributor the GFE Coordination Requester **SHALL** change the target [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) status to `cancelled` if the status is not already `rejected` and SHOULD update the `Task.statusReason`. If the `status` = `rejected` it **SHALL** remain so and the statusReason **SHALL** remain unchanged. 

When replacing a GFE Contributor, the GFE Coordination Requester **SHALL** write new [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resource(s) for the GFE Contributor(s) that are replacing the previous GFE Contributor(s). The other existing Tasks **SHALL** remain intact (i.e., only replace the Tasks that need replacing as opposed to recreating all tasks). 
If more than a simple replacement GFE Contributors is required, such as a change in scheduled date or services, the GFE Coordinating Requester SHOULD cancel the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) and create a new one.


#### Retrieving the [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) and Closing the Coordination Task
Retrieval of the collection of contributed GFEs is done through the [$gfe-retrieve operation](OperationDefinition-GFE-retrieve.html). This operation collects the contributed [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) resources attached to the [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resources as well as any [GFE Missing Bundle](StructureDefinition-davinci-pct-gfe-missing-bundle.html) resources for any [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resources that do not have an attached [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html). [GFE Missing Bundle](StructureDefinition-davinci-pct-gfe-missing-bundle.html) resources support indication that the GFE may be missing a portion that will contribute to their overall cost. These bundles are a technical requirement in the event the GFE must be sent without all contributor estimates included. 


**GFE Collection Retrieval**
Retrieval of a [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) **SHALL** be available to the GFE Coordination Requester that created the associated [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) and **SHALL** be retrieved using the FHIR ID of the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html).

The [$gfe-retrieve operation](OperationDefinition-GFE-retrieve.html) **SHALL** return a single [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) when a valid [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) FHIR ID was provided and for which the requester has access.

The [GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html) **SHALL** consist of:

- The Patient Resource extracted from the [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) associated with the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html)

- The Coverage Resource extracted from the [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) associated with the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html), if present.

- The Organization Resource (for payer) extracted from the [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) associated with the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html), if present.

- The Organization, Practitioner, PractitionerRole Resource (for providers) extracted from the [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) associated with the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html), if present.

- All of the FHIR Resources in .output.valueAttachment of the associated (that have a Task.partOf that references the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html)) [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) where the status is not `rejected` or `cancelled` (NOTE: that each Contributor Task may have multiple output.valueAttachment iterations.

- For each associated [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) that does not have a status of `rejected` or cancelled` and does not have a [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) in output.valueAttachment, there **SHALL** be a [GFE Missing Bundle](StructureDefinition-davinci-pct-gfe-missing-bundle.html).

- Each [GFE Missing Bundle](StructureDefinition-davinci-pct-gfe-missing-bundle.html) **SHALL** contain:
  - The Patient and Coverage (if applicable) resource from the associated [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html).
  - All of the requested items and services from the [GFE Information Bundle](StructureDefinition-davinci-pct-gfe-information-bundle.html) associated with the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html)
  - All, if any, of the requested items and services from the [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) for which the [GFE Missing Bundle](StructureDefinition-davinci-pct-gfe-missing-bundle.html) is being created.


**Task Status**
When deemed appropriate, the GFE Coordination Requester **SHALL** close the Task by updating the status to `completed` or `cancelled` (the choice of which depends on the intent of the requester)
When the status of the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) is updated, the Coordination Platform **SHALL** update the associated [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) statuses to match, except for those that have a status of `cancelled`, rejected`, `entered-in-error`, `failed`, or `completed`.

The GFE Coordination Requester **SHALL** update the [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html).status to `completed` to close the request when no new GFE Contributions will be needed or accepted.

GFE Contributors **SHALL** only be able to set their assigned Task.status to `received`, `accepted`, `rejected`, or `completed`.



#### Access and Authorization
**Actor based access**
Coordination Participants (GFE Coordination Requesters and GFE Contributors) **SHALL** be able to read and update all of the Task resources they created or are assigned to (via `Task.owner`) while the Task does not have a status of completed, rejects, or entered-in-error. 
GFE Contributors **SHALL** have read access to [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) resources that are referenced by [GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html) resources that are assigned to and **SHALL NOT** have access to modify those [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) resources unless they are also the GFE Coordination Requester. 
GFE Contributors **MAY** access the Tasks of other participants whose assigned Task references the same [GFE Coordination Task](StructureDefinition-davinci-pct-gfe-coordination-task.html) if the Coordination Platform allows it.


**Task status based access**
[GFE Contributor Task](StructureDefinition-davinci-pct-gfe-contributor-task.html)s **SHALL NOT** be able to be modified by a GFE Contributor if the status is `cancelled, `rejected`, `entered-in-error, or `completed`
Tasks marked as `completed`, `rejected`, or `entered-in-error` **SHOULD NOT** be able to be modified by GFE Contributors..


#### Patient Access to GFEs

> Note: Although technically possible, conveying the GFE Collection to the patient via FHIR API is optional and the workflow is contingent upon the Coordination Requester opting to expose the API to the patient. For the self-pay or uninsured patients, the GFEs must be provided to the patient, but this may be done in many ways such as via mail, the patient portal, or via an API. This specification does not currently address requirements for sharing GFE information with patients through an API.

---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/gfe_submission_and_aeob_overview.md

This section of the Implementation Guide focuses on enabling a provider to submit a Good Faith Estimate (GFE) Bundle including [Good Faith Estimate resource profiles](artifacts.html#structures-gfe-resource-profiles) (Claim resources of type predetermination) along with supporting data (such as Patient, Coverage, etc.) to a payer. The payer can then use this information to generate an Advanced Explanation of Benefit (AEOB) Bundle including [Advanced Explanation of Benefits resource profiles](artifacts.html#structures-aeob-resource-profiles) (ExplanationOfBenefit resources of type predetermination) along with supporting data that the patient, and optionally the provider (GFE submitter on claim resources), can retrieve to get an estimation of costs for expected services as known at a specific point in time.

A primary goal of this guide is to enable the patient to have access to AEOBs for expected future medical items or services. Sharing this information with the provider is also supported as an option. This enables the provider to have an informed conversation with the patient to support better patient decision making. If this capability is supported by the implementer, the patient’s AEOB will be provided to the GFE submitting provider using the same profiles in this guide. In this way the provider would receive the same information made available to the patient.
This guide does not currently specify a means for providers to update or cancel a GFE submission. Rather, if there is new information that may materially affect the estimation, the provider would submit a new GFE Bundle.


### Workflow at a Glance ###
![PCT GFE Submission and AEOB High Level Workflow](PCT_GFE_Submission_HighLevelWorkflow.png){:style="float: none;"}

Figure 1: Advanced EOB Interactions
Dotted line indicates optional.

**GFE Submission and AEOB Diagram Steps (High Level View)**

1. A patient schedules a service which triggers the composition of a collection of one or more GFEs. Note: The composition of the collection of GFEs is currently not in scope for this IG.

2. The collection of GFEs in the form of a FHIR resource bundle (GFE Bundle) is submitted (via the [gfe-submit operation](OperationDefinition-GFE-submit.html) to the payer’s endpoint for AEOB creation.

3. The payer would then process, adjudicate, and produce the AEOB bundle.

4. The patient can now request and receive the AEOB Bundle via FHIR query.

>Note: Communication to the patient below could be through an app by a third-party or provider approved by the patient or directly to the patient by the payer.

### Data Structures ###

Below are illustrations showing the relationships between the profiles involved in this workflow.
> Note: For brevity, not all data elements are shown.


Figure 1 shows a GFE Collection Bundle that is submitted in the gfe-submit operation. It contains information about the patient, the payer and coverage information, and the GFE Bundles for processing.

![Figure 1. GFE Collection Bundle](GFE_Collection_Bundle.png){:style="float: none;"}

Figure 1. GFE Collection Bundle



Figure 2 shows the components of the GFE Bundle. It contains the Patient, Coverage and Payer if relevant, involved providers, and Claims data with the estimated costs. If the GFE Coordination Workflow was utilized, this is the same GFE Bundle as the one provided by a GFE Contributor.
All resources (supporting info, etc.) needed to process the GFE and produce the AEOB **SHALL** be included in the GFE Bundle. Relevant resources referenced by such resources **SHALL** also be included.


![Figure 2. A GFE Bundle](GFE_Bundle.png){:style="float: none;"}

_Figure 2. A GFE Bundle_



Figure 3 shows an AEOB Bundle created by a payer in response to a GFE-submit operation.
The AEOB bundle **SHALL** contain one or more AEOBs. Each AEOB **SHALL** contain a reference to the original GFE bundle (i.e., an exact copy of the originally submitted GFE).


![Figure 3. A AEOB Bundle](AEOB_Bundle.png){:style="float: none;"}

_Figure 3. A AEOB Bundle_


### Technical Workflows ###

#### Payer Perspective: End-to-End Workflow

The workflow diagram below describes the process of receiving a GFE Bundle from the submitting provider and returning the completed AEOB asynchronously (or acknowledgement that the process was completed if the AEOB will not be returned to the provider), as well as the process for a patient app to query for and retrieve their completed AEOB.

![Payer Perspective](PCTWorkflowPayer.png){:style="float: none;"}

**Figure 4: Payer Perspective: End-to-End Workflow**

1. The provider uses the gfe-submit operation to submit the GFE bundle to the payer endpoint. This is a POST request that follows the [Asynchronous Interaction Request Pattern](https://hl7.org/fhir/R5/async-bundle.html). Please refer to this link for more details. Note: This page is part of the FHIR R5 current build, but uses no R5 resources, this guide is simply pre-adopting that HTTP request pattern. 
  * If the payer's FHIR aware endpoint does not receive the request (i.e. system is down, incorrect URL used, etc.) an HTTP status code of 4XX or 5XX will be returned. 
  * If the gfe-submit operation is successfully invoked, the request will move to Step 2. 
2. The payer system validates the GFE bundle against the FHIR R4 core specification and the GFE Bundle profile and other appropriate profiles in this guide, using the core FHIR [validate](http://hl7.org/fhir/resource-operation-validate.html) operation. 
  * If any validation errors are received, an HTTP status code of 412 Precondition Failed is returned along with an OperationOutcome resource containing the result of the validate operation. 
  * If validation is successful, the request will move to Step 3. 
3. The payer system accepts the GFE bundle. An HTTP status code of 202 Accepted is returned, and the Content-Location header  contains a URL for subsequent polling. 
4. The payer system begins processing the GFE bundle asynchronously to produce the AEOB. Some payers may process GFEs in near real time, which this guide can support, but more likely this process will take a substantial amount of time, up to the limits allowed by regulation. 
5. GFE processing can result in success or failure. 
  * In case of failure, the payer system sets the status of the request (identified by the unique URL returned in Step 3) to error, and prepare an OperationOutcome resource with details and move to Step 7. The payer should also notify the patient that the estimate was unable to be produced leveraging similar existing EOB/Claims business processes, though this communication to the patient is out of scope for this guide. 
  * If successful, move to Step 6. 
6. GFE processing completes successfully and the payer produces an AEOB and related resources. 
  * The payer system sets the status of the request (identified by the URL returned in Step 3) to completed, prepares a batch-response Bundle resource, and moves to Step 7. 
  * If the payer system supports API access for the patient, the AEOB is made accessible per the Patient Perspective section below. 
7. The payer system provides an endpoint at the URL provided in Step 3 whereby the provider can poll for GFE processing status.   
  * If the response is in-progress, the endpoint returns an HTTP status code of 202 Accepted, indicating that the provider should poll again later. The payer system should return a Retry-After header with each in-progress polling response, and the client should use this information to inform the timing of the next polling request. 
  * If the response is an error, the endpoint returns an HTTP status code of 4XX or 5XX, and the body of the response is an OperationOutcome detailing the error. 
  * If the response is successful, the endpoint returns an HTTP status code of 200 OK, and the body of the request is a [Bundle resource of type batch-response](https://www.hl7.org/fhir/codesystem-bundle-type.html#bundle-type-batch-response). This batch-response bundle SHOULD contain the completed AEOB Bundle and MAY contain one or more OperationOutcome resources with additional information regarding GFE/AEOB processing. If the batch-response Bundle does not contain an AEOB Bundle, then it SHALL contain at least one OperationOutcome resource detailing the reason why the AEOB Bundle is not present (e.g. the AEOB was sent directly to the patient and will not be returned to the provider). 


The individual steps from the provider and patient perspective are detailed in the sections below. 

#### Provider Perspective: Submitting a GFE and Polling for a Completed AEOB

A patient schedules a service and this triggers the composition of a collection of one or more GFEs, which the provider then submits to the payer for processing. Note: The composition of the collection of GFEs is currently not in scope for this guide.

![Provider Perspective](PCTWorkflowProvider.png){:style="float: none;"}

**Figure 5: Provider Perspective**

1. The provider uses the gfe-submit operation to submit the GFE bundle to the payer endpoint. This is a POST request that follows the [Asynchronous Interaction Request Pattern](https://hl7.org/fhir/R5/async-bundle.html). Please refer to that page for more details. Note: that page is part of the FHIR R5 current build, but uses no R5 resources, this guide is simply pre-adopting that HTTP request pattern. 
  * If successful this request will return an HTTP status code of 202 Accepted with a Content-Location header containing the absolute URL of an endpoint for subsequent status requests (polling location). 
  * If the operation fails it will return an HTTP status code of 4XX or 5XX and an OperationOutcome resource containing the error details (such as a 412 Precondition Failed if the content of the POST was not a valid GFE Bundle), provided the operation was successfully invoked (i.e. if the POST was submitted to a non-existent URL, the submitter would likely receive a 404 Not Found status code with no OperationOutcome). 

2. If Step 1 resulted in a 202 Accepted return code and a valid URL in the Content-Location header, the provider may now poll for the status of the request. The AEOB Bundle is created asynchronously since GFE processing has not taken place yet. The url returned in Step 1 can now be used to check the status of the AEOB process. 
  * If the response is in-progress, this request will return an HTTP status code of 202 Accepted, indicating that the provider should poll again later. The payer system should return a Retry-After header with each in-progress polling response, and the client should use this information to inform the timing of the next polling request. 
  * If the response is an error, this request will return an HTTP status code of 4XX or 5XX, and the body of the response will be an OperationOutcome detailing the error. 
  * If the response is successful, this request will return an HTTP status code of 200 OK, and the body of the request will be a Bundle resource of type batch-response. This batch-response bundle SHOULD contain the completed AEOB Bundle and MAY contain one or more OperationOutcome resources with additional information regarding GFE/AEOB processing. If the batch-response Bundle does not contain an AEOB Bundle, then it SHALL contain at least one OperationOutcome resource detailing the reason why the AEOB Bundle is not present (e.g. the AEOB was sent directly to the patient and will not be returned to the provider). 

#### Patient Perspective: Get Completed AEOB from Payer

The patient has scheduled the service(s) with the provider(s). The payer may return the completed AEOB to the patient in many ways such as via mail, the payer patient portal, mobile app, or other technology to connect to the AEOB API. The only method in scope for this guide is the FHIR-based API approach inspired by the Patient Access API defined in the [CARIN Consumer Directed Payer Data Exchange](https://build.fhir.org/ig/HL7/carin-bb/Use_Case.html#use-case---consumer-access-to-their-claims-data) guide (CARIN IG for Blue Button). If the payer does implement both this API and the Patient Access API defined in the CARIN IG, it is up to the payer to determine if those APIs use the same or different endpoints. 

![Patient Perspective](PCTWorkflowPatient.png){:style="float: none;"}

**Figure 6: Patient Perspective**

1. A third party app used by the patient authorizes/authenticates and receives an access token. The app requests the AEOB by using the access token using a GET request for ExplanationOfBenefit resources in the patient's compartment. For example, GET [base]/ExplanationOfBenefit?patient=[patient-id]. Payer systems SHALL implement appropriate access controls to ensure that AEOBs are only accessible by the authenticated patient. 
  * If successful, the system will return 200 OK, and the body will contain a [Bundle resource of type searchset](https://www.hl7.org/fhir/codesystem-bundle-type.html#bundle-type-searchset), containing zero or more ExplanationOfBenefit resources. Once the desired AEOB is found, the third-party app may use the same API to query for other resources referenced by the AEOB, such as Patient, Practitioner, Organization, and Coverage resources if those referenced resources are not contained in the AEOB itself. New AEOBs (either for new services or new updates to an existing AEOB) would have a different identifier and a created date later than previous AEOBs. 
  
Note: If GFE processing fails, the payer may use existing business processes to notify the patient, but this is out of scope for this guide. 


#### Examples

**Waive NSA Rights Consent Example Scenario**

The diagram below  shows examples of how a patient may provide or withhold consent for No Surprises act Act protections using the balanceBilling extension on the GFE and how that could change the resulting AEOB from the payer.  

![Balance Billing](GFEbalanceBilling.png){:style="float: none;"}

**MRI Scenario**

Assumptions:<br>
• Patient has single commercial insurance coverage and plans to use it.<br>
• This  is clinically appropriate (Clinical Decision Support [CDS] Score). <br>
• Service location is known (e.g., address). <br>
• All providers are in network - PCP, imaging facility, and reading radiologist.<br>
• While medical management techniques (such as prior authorization) will be included as a disclaimer when applicable in the AEOB returned to the member, the actual process of meeting medical management requirements is separate from the process of creating an AEOB. For details, see the Terms and Concepts section of this IG.

1.  Eve Betterhalf sees Dr. Patricia Primary (PCP) at ABC Medical Group on Monday with a prolonged migraine headache lasting over a 4-month period. Dr. Primary recommends a brain MRI (CPT 70551).
2.  She  walks to the PCP front desk; they  enter the order into the EMR system and direct the patient to ABC’s Radiology department.
3.  Radiology reviews the order for completeness and accuracy and confirms all needed information is present.
4.  The next day, Eve calls the radiology center (ABC Radiology, NPI - 1234567893) to schedule her brain MRI, CPT 70551, and provide her coverage information, which she plans to use .
5.  The MRI is scheduled for 9 days from today. This triggers the creation process for an AEOB.
6.  Optionally, Eve can also login to the Radiology’s site to download the information about her expected services, should she want to request an estimate separately.
7.  The ABC Radiology’s Office Administrator enters the services and coverage information, initiates the process with other potential providers to generate the GFE for the expected charges with the expected billing and diagnostic codes.
8.  This information is sent to the payer.
9.  The payer receives the GFE. Within one business day, the payer adjudicates it and sends the GFEs of cost, cost-sharing and progress towards meeting deductibles and out-of-pocket maximums, as well as whether a service is subject to medical management and relevant disclaimers of estimates as an AEOB securely to Eve.
10. Optionally, the payer also sends a response to ABC’s Radiology Office Administrator with the same cost estimate information.
11. Eve receives the AEOB from the payer based on the information provided by ABC Radiology.
12. Optionally, Eve or an authorized user could use their third-party app to query for the AEOB via API (if supported by their payer).

##### MRI Examples  

[GFE Professional](Claim-PCT-GFE-Professional-MRI.json.html)<br>
[GFE Institutional](Claim-PCT-GFE-Institutional-MRI.json.html)<br>
[AEOB](ExplanationOfBenefit-PCT-AEOB-1.json.html)


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/gfe_submission_and_aeob_specification.md

This section of the implementation guide (IG) defines the specific conformance requirements for systems wishing to conform to this Patient Cost Transparency (PCT) IG GFE Submit Workflow. It focuses on Good Faith Estimate (GFE) submission [$gfe-submit](OperationDefinition-GFE-submit.html) and an Advanced Explanation of Benefits (AEOB) query, though it also provides guidance on privacy, security, and other implementation requirements.

## Detailed Requirements

### Summary
FHIR uses a pair of resources called [Claim](https://www.hl7.org/fhir/claim.html) and [EOB](http://www.hl7.org/fhir/explanationofbenefit.html) for multiple purposes - they are used for actual claim submission, but they are also used for managing prior authorizations and pre-determinations. These uses are distinguished by the Claim.use and ExplanationOfBenefit.use code. This guide requires `predetermination` for both Claim.use and ExplanationOfBenefits.use. All references to Claim and EOB in this IG are referring to the AEOB.

In addition to the requirements specified in this section, GFE Submitters, and Payers **SHALL** meet the requirements as specified in their respective requirements CapabilityStatements and sections defined in this IG.

### Submitting a GFE and Polling for an AEOB

One of the primary interaction supported by this IG is submitting a GFE and receiving an AEOB in response. To perform this, a [GFE Bundle](StructureDefinition-davinci-pct-gfe-bundle.html) resource is constructed by the client (e.g., Billing Management Software) system. The response is an [AEOB Bundle](StructureDefinition-davinci-pct-aeob-bundle.html).

The GFE Bundle will be sent as the sole payload of a [$gfe-submit](OperationDefinition-GFE-submit.html) operation, which is based on the [Asynchronous Interaction Request Pattern](https://hl7.org/fhir/R5/async-bundle.html) (please refer to that page  for more details). Note: that page is part of the FHIR R5 current build, but uses no R5 resources; this guide is pre-adopting that HTTP request pattern. The response will be a URL in the Content-Location header for subsequent polling. 

AEOBs will often not be complete and the calling client (or other interested systems - e.g., patient or convening provider system) will need to periodically poll the payer server to determine the status of the gfe-submit operation. Polling can generate the following responses:

  * If the response is in-progress, this request will return an HTTP status code of 202 Accepted, indicating that the provider should poll again later. The payer system should return a Retry-After header with each in-progress polling response, and the client should use this information to inform the timing of the next polling request. 
  * If the response is an error, this request will return an HTTP status code of 4XX or 5XX, and the body of the response will be an OperationOutcome detailing the error. 
  * If the response is successful, this request will return an HTTP status code of 200 OK, and the body of the request will be a Bundle resource of type batch-response. This batch-response bundle SHOULD contain the completed AEOB Bundle and MAY contain one or more OperationOutcome resources with additional information regarding GFE/AOEB processing. If the batch-response Bundle does not contain an AEOB Bundle, then it SHALL contain at least one OperationOutcome resource detailing the reason why the AEOB Bundle is not present (e.g., the AEOB was sent directly to the patient and will not be returned to the provider). 

### Patient Access to AEOBs

> Note: Although technically possible, conveying the AEOB to the patient via FHIR API is optional and the workflow is contingent upon the payer opting to expose the API to the patient. The payer must return the completed AEOB to the patient, but this may be done in many ways such as via mail, the payer benefits portal, or via an API. The only method in scope for this guide is the FHIR-based API approach inspired by the Patient Access API defined in the [CARIN Consumer Directed Payer Data Exchange](https://build.fhir.org/ig/HL7/carin-bb/Use_Case.html#use-case---consumer-access-to-their-claims-data) guide. Note that use of an API is optional for the payer, and if the payer does implement both this API and the Patient Access API defined in the CARIN IG, it is up to the payer to determine if those APIs use the same or different endpoints. 

If the payer system supports access via an API, then a third-party app used by the patient authorizes/authenticates  and receives an access token. The app requests the AEOB by using the access token using a GET request for ExplanationOfBenefit resources in the patient's compartment. For example, GET [base]/ExplanationOfBenefit?patient=[patient-id]. Payer systems SHALL implement appropriate access controls to ensure that AEOBs are only accessible by the authenticated patient. 
  * If successful, the system will return 200 OK, and the body will contain a Bundle resource of type searchset, containing zero or more ExplanationOfBenefit resources. Once the desired AEOB is found, the third-party app may use the same API to query for other resources referenced by the AEOB, such as Patient, Practitioner, Organization, and Coverage resources if those referenced resources are not contained in the AEOB itself. Third-party apps should keep track of prior AEOBs and alert the patient if new ones are found. New AEOBs would have a different identifier and a created date later than previous AEOBs. 


#### AEOB Request
The [$gfe-submit](OperationDefinition-GFE-submit.html) operation is executed by POSTing a GFE FHIR Bundle to the [$gfe-submit](OperationDefinition-GFE-submit.html) endpoint. The server **SHALL** support JSON encoding and **MAY** support XML. The GFE FHIR Bundle will include one or more GFE resources for one patient. The GFE profiles used for the claim resources can be [found here](artifacts.html#structures-gfe-resource-profiles). Additional Bundle entries **SHALL** be populated with any resources referenced by the GFE resource (and any resources referenced by those resources, fully traversing all references, and complying with all identified profiles). Note that even if a given resource instance is referenced multiple times, it **SHALL** only appear in the Bundle once,  e.g., if the same Practitioner information is referenced in multiple places, only one Practitioner instance is created - referenced from multiple places as appropriate.

Bundle.entry.fullUrl values **SHALL** be one of the following:
• the URL at which the resource is available from the Billing Management System if exposed via the client's REST interface 
• in the form “urn:uuid:[some guid]” 

All GUIDs  used **SHALL** be unique, including across independent GFE submissions - with the exception that the same resource instance being referenced in distinct AEOB request Bundles can have the same GUID.

In addition to these core elements, any "supporting information" resources needed to process the AEOB request must also be included in the Bundle. Relevant resources referenced by those “supporting information” resources **SHALL** also be included. Any such resource that has a US Core profile **SHALL** comply with the relevant US Core profiles. All “supporting information” resources included in the Bundle **SHALL** be pointed to by the GFE resource using the GFE.supportingInfo.valueReference element.

Whenever possible, the AEOB should default to elements in the GFE (i.e., not include/repeat) unless there is a business reason to do so to reduce complexity for app developers or for patient clarifications. This is why many elements in the GFE profiles are not repeated in the AEOB profiles, since the original GFE **SHALL** be referenced from the AEOB. 

To attach PDFs, CDAs, JPGs, a DocumentReference instance should be used. The GFE.supportingInfo.sequence for each entry **SHALL** be unique within the GFE.

All resources **SHALL** comply with their respective profiles. FHIR elements not required (minimum cardinality of 1) or marked as "must support" **MAY** be included in resources within the Bundle, but client systems should have no expectation of such elements being processed by the payer unless prior arrangements have been made. Systems that do not process such elements **SHALL** ignore unsupported elements unless they are "modifier" elements, in which case the system **MAY** treat the presence of the element as an error.

This IG treats everything that happens beyond the defined operations endpoint receiving the FHIR bundle as a black box. This black box includes any business associates, clearinghouses,  payers, contracted review entities, and other intermediaries that may be involved in the AEOB request and response. The black box ensures that any other requirements are met and to perform all processing within the allowed time frame.

#### AEOB Response
Just like the AEOB request, additional Bundle entries must be present for all resources referenced by the AEOB response  or descendent references. When converting additional Bundle entries, the conversion process **SHALL** ensure that only one resource is created for a given combination of content, e.g., if the same Practitioner information is referenced in multiple places, only one Practitioner instance should be created - referenced from multiple places as appropriate. When echoing back resources that are in the AEOB request, the system **SHALL** ensure that the same fullUrl and resource identifiers are used in the response as appeared in the request.

It is possible that the incoming Bundle cannot be processed due to validation errors or other non-business-errors. In these instances, the receiving system **SHALL** return OperationOutcome instances that detail why the Bundle could not be processed and no AEOB response will be returned.




---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/index.md

<blockquote class="stu-note">
<p>
This specification is a Standard for Trial Use. It is expected to continue to evolve and improve through HL7® FHIR® Connectathon testing and feedback from early adopters. 
</p>
<p>STU1 focused on a payer receiving a good faith estimate (GFE) from a provider and returning an Advanced Explanation of Benefits (AEOB) to a patient. With STU2, this specification includes guidance on how multiple providers can work together to provide one collective GFE, GFE Summary and AEOB Summary for easier patient understanding of their overall estimated cost, as well as other valuable updates. See [Change Log](change_log.html) for additional information.
The IG STU2 content relating to the GFE Coordination is marked as DRAFT throughout this guide. The Da Vinci PCT open community of providers, payers, health IT including EHRs, revenue cycle experts, billing specialists, cost estimator experts and others that have provided requirements and vetted design decisions, recognize that the GFE coordination process is not happening today. Balloting this content provides the opportunity to gain feedback broadly and enable better insights for testing of the technology as the business process evolves to ready a standard for trial use.
</p>
<p>
Feedback is welcome and may be submitted through the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> indicating "US Da Vinci Patient Cost Transparency (PCT)(FHIR)" as the specification.
</p>
<p>
This implementation guide (IG) is dependent on other specifications. Please submit any comments you have on these base specifications as follows:
</p>
<ul>  
  <li>Feedback on the FHIR core specification should be submitted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with "FHIR Core" as the specification. </li>
  <li>Feedback on the US core profiles should be submitted to the <a href="http://hl7.org/fhir-issues">FHIR change tracker</a> with "US Core" as the specification. </li>
</ul>
<p>
Individuals interested in participating in the Patient Cost Transparency project or other HL7 Da Vinci projects can find information about Da Vinci <a href="http://www.hl7.org/about/davinci">here</a>.
</p>
</blockquote>

### Overview

This IG provides detailed guidance to support providers and payers exchanging financial information for specific items and services using FHIR-based standards. This exchange involves a provider or group of providers  submitting a Good Faith Estimate (GFE) to a patient (if self-pay or uninsured) or a payer. A payer can then generate an Advanced Explanation of Benefits (AEOB) for a patient (which may optionally be returned to the submitting provider). 

When there are multiple providers involved in a patient’s service, these providers may need to coordinate in order to produce one comprehensive GFE. This IG provides guidance on how this collaborative GFE creation process can leverage FHIR. Information about the cost of healthcare items or services may enable better decision making by the patient in consultation with the provider. 

Note: This exchange will be triggered via a “request” or “scheduled service”. When the patient has insurance they chose to use, the GFE will be sent from a provider to a payer. The payer will produce an AEOB, which will also include the GFE used to inform the AEOB generation. This IG describes system interactions using the FHIR standard. 


This IG will reference where possible the “standards” defined by the Health Record exchange ([HRex](https://hl7.org/fhir/us/davinci-hrex/)) Library/Framework IG, other FHIR IGs, and other industry standards where applicable.


This IG is informed by the [No Surprises Act (see Division BB, Title I, Sections 111 and 112)](https://www.ftc.gov/legal-library/browse/statutes/no-surprises-act-2021-consolidated-appropriations-act), which was enacted as part of the Consolidated Appropriations Act, 2021. The No Surprises Act specifically requires that a provider or providers share a GFE with a patient when the patient is self-pay/uninsured or with a payer for insured patients when the patient schedules a service or requests an estimate. When the payer receives a GFE, the payer must make an AEOB available to a patient in advance of the service.

Understanding the need for multiple providers to be able to work together to produce a single GFE in support of the law, this IG provides guidance on how to create this GFE using FHIR. This IG introduces a GFE coordination workflow that leverages a Coordinating Platform. The Coordinating Platform could be any number of systems - a practice management system, an EHR, a portal, a third party system, etc. When a patient contacts a provider to schedule a service or request an estimate for a service, the provider or facility who schedules the service or receives the request is the convening provider or convening facility per CMS regulation. 


The role a provider plays in this collaboration will change from case to case. In some cases, a provider will be a GFE Coordination Requester because the patient’s care is starting with them - the service was scheduled with this provider. If this provider is also providing items and services to be included in the GFE, they will also play the role of a GFE Contributor. For other patients, the same provider may be a co-provider supporting a different provider or facility with a patient’s period of care, in which case they will only act as a GFE Contributor. In either role, the IG provides tools to support the collaboration effort and the production of a single GFE. Certain state regulations may also inform which role a provider plays.

> NOTE: At this time, the Departments have exercised enforcement discretion allowing providers to send separate GFEs to a patient or payer. Further federal regulation on this is anticipated. This IG can support this process, helping patients get the best, most usable information to make informed decisions about their care. If specific guidance is issued that requires adjustments to this IG, the IG will be updated.


The IG supports different methods of information sharing between payers and providers and payers and patients. In this way, the IG can support providers and payers as they work to meet the legislative and future regulatory requirement as well as enable information sharing valuable to supporting patient care. Since the law does not require an API to share these data, the method used to share the required information – an API, a portal, email, etc. – is the decision of the parties engaged in the process. Should future rulemaking mandate a specific scenario, this IG can be revised accordingly.


By using the FHIR standard and implementing this guide, providers and payers can enhance their existing technologies, where applicable, for estimating patient costs securely and efficiently using common open web technologies. The anticipated benefit of using FHIR APIs is to streamline the process of creating a single GFE and to enable applications of the patients’ choice to give greater transparency into patient-specific estimated costs of expected healthcare items and services by making AEOBs accessible.

FHIR is being used for consumer access to healthcare related data at significant scale today, and there are regulatory requirements in the form of the CMS Patient Access API for FHIR support for the related use case of post adjudicated claims. Use of an industry standard would keep the barrier to stakeholder adoption relatively low.

Acronyms used in this IG can be found [here](#terms-and-concepts). The reader of this IG should become familiar with these before reading this IG. 

### General Workflow ###

This guide breaks the process into two main parts in support of the patient cost transparency use case: 
1. [GFE Coordination Workflow ](gfe_coordination_overview.html) -  Supports the ability for a provider to request and collect one or more GFEs from other providers that may participate in a set of procedures related to patient’s period of care for which a GFE is required, either to provide to the patient and/or to submit to a payer.

2. [GFE Submission and AEOB Workflow ](gfe_submission_and_aeob_overview.html) - Supports the ability for a provider to submit a collection of one or more GFEs to a payer for them to process and produce an AEOB bundle to the patient and optionally to the provider. This submission may include GFEs from multiple providers or a consolidated GFE that were gathered in the [GFE Coordination Workflow ](gfe_coordination_overview.html).


**Good Faith Estimate and Advanced Explanation of Benefit High Level Workflow**
![PCT High Level Workflow](PCT_HighLevelWorkflow.png){:style="float: none;"}


#### GFE Submit Workflow ####

**AEOB Interaction Diagram Steps (High Level View)**
1. A patient schedules a service or requests an estimate for a service which triggers the composition of a collection of one or more GFEs. 

2. The Providers involved in the service coordinate on their individual charges and services for the Good Faith Estimate through the [GFE Coordination Workflow](gfe_coordination_overview.html), if applicable. For self-pay or uninsured patients, the GFE can be made available to the patient at this step. _(This would be through another means not defined in this IG.)_

3. For insured patients, a collection of GFEs in the form of a FHIR resource bundle ([GFE Collection Bundle](StructureDefinition-davinci-pct-gfe-collection-bundle.html)) is submitted (via the [gfe-submit operation](https://build.fhir.org/ig/HL7/davinci-pct/OperationDefinition-GFE-submit.html)) to the payer’s endpoint for AEOB creation. 

4. The payer would then process, adjudicate, and produce the [AEOB Bundle](StructureDefinition-davinci-pct-aeob-bundle.html).

5. The patient can now request and receive the AEOB Bundle via FHIR query.

> Note: Communication to the patient could be direct from the provider or the payer or through a third-party app via an API.


### Credits  
<br>
**Primary Authors:**
*	Corey Spears (Lantana Consulting Group)
*	Rick Geimer (Lantana Consulting Group)
*	Larry Decelles (The MITRE Corporation)
*	Gary Gryan (The MITRE Corporation)
*	Caleb Wan (The MITRE Corporation)

**Technical Editing:**
*	Yolanda Liu (The MITRE Corporation)
*	Joe Minieri (The MITRE Corporation)
*	Kristin Schrock (Lantana Consulting Group) 

**Da Vinci Project Coordination and Core Team:**
*	Vanessa Candelora (Point-of-Care Partners)
*	Viet Nguyen (Stratametrics, LLC)
*	Jocelyn Keegan (Point-of-Care Partners)
*	Robert Dieterle (EnableCare, LLC)
*	Phung Matthews (Point-of-Care Partners)
*	Mary Kay McDaniel (Markam)
* Lloyd McKenzie (Dogwood Health Consulting)
*	Denise St. Clair (Global Alliant, Inc.)
* Crystal Kallem (Point-of-Care Partners)

**Test Lead:**
* Ryan Moehrke (AEGIS)

**Da Vinci Member Leadership Provided By:**
*	Alice O'Carroll (Florida Blue)
*	Jacob Woodford (Epic)
*	Luke Rockenbach (Providence)
* Zackery Welch (Providence) 
* Tina Mintyala (Providence) 
* Jill Elder  (Providence) 


**This IG was developed under the auspices of the Financial Management Work Group.**

Special thanks go to the numerous Da Vinci members and community   who have participated on conference calls, provided reviews and feedback, supported sample data gathering, reference implementation development, and testing including, but not limited to:
*	Blue Cross Blue Shield Association (Patricia B Taylor, Samuel Undine, Michael Gould, Gail Kocher)
*	Smile CDR Inc. (Cait O'Donnell, Joseph Quinn, and Sophie Tekeste)
*	The MITRE Corporation (FHIR Shorthand Team) 
*	Cambia Health Solutions (Hong Huang, Pat Waller)
*	Weill Cornell Medicine (Jill Vincente, Jarrett Cox)
*	Aegis (Carie Hammond)

> If you are interested in participating in the PCT project, information about our calls, minutes of past discussions, and other information can be found [here](https://confluence.hl7.org/pages/viewpage.action?pageId=116460399) on our HL7 Confluence page.

The scope of this guide does not include coordination of benefits or more than one coverage. This does not serve as a replacement for eligibility, scheduling, prior authorization or other financial and administrative use cases. 


### Terms and Concepts

| Term | Definition |
| --- | --- |
| AEOB | The Consolidated Appropriations Act includes provisions whereby group health plans and health insurance issuers, based on charges, billing and diagnostic codes provided by the provider(s), provide an Advanced Explanation of Benefits  for scheduled services or upon request to give patients transparency into their estimated healthcare costs. AEOBs need to include which providers are expected to provide treatment, the network status of providers, good faith estimates of cost, cost-sharing and progress towards meeting deductibles and out-of-pocket maximums, as well as whether a service is subject to medical management and relevant disclaimers of estimates; for example, the disclaimer might state that the information provided in the notification is only an estimate based on the items and services reasonably expected, at the time of scheduling (or requesting) and is subject to change. For a complete breakdown of what needs to be included in the AEOB see 42 U.S. Code 300gg-111(f)(1)(A) through (H).|
| Allowed Amount | The maximum amount a plan will pay for a covered healthcare service. May also be called “eligible expense,” “payment allowance,” “negotiated rate", "contractual amount", or "covered amount."|
| CAA <br> Consolidated Appropriations Act | Also called ["H.R. 133".](https://www.ftc.gov/legal-library/browse/statutes/no-surprises-act-2021-consolidated-appropriations-act)<br>The CARES (Coronavirus Aid, Relief, and Economic Security) Act implemented a variety of programs to address issues related to the onset of the COVID-19 pandemic. <br><br> The Consolidated Appropriations Act continued many of these programs by adding new phases, new allocations, and new guidance to address issues related to the continuation of the COVID-19 pandemic. Title I (the No Surprises Act) of Division BB of the Consolidated Appropriations Act, 2021 establishes new protections from surprise billing and excessive cost sharing for consumers receiving healthcare items/services. <br><br>The Consolidated Appropriations Act (2021) was passed by Congress on December 21, 2020 and signed into law on December 27, 2020. |
| Coinsurance | The percentage of costs of a covered healthcare service that is paid (20%, for example) after a member has paid the deductible.|
| Collection of Services | The list of services expected to be performed during the period of care as part of gathering the Good Faith Estimate for the expected charges, billing and diagnostic codes for one or multiple providers. |
| Copayment | A fixed amount (\$20, for example) that is paid for a covered healthcare service after the deductible has been paid. For example, a health insurance plan's allowable cost for a doctor's office visit is \$100 and the copayment for a doctor visit is \$20. |
| Cost | To providers: the expense incurred to deliver healthcare services to patients. <br> To payers: the amount they pay to providers for services rendered. <br> To patients: the amount they pay out-of-pocket for healthcare services.|
| Data Exchange Method | The mechanism for sending and receiving the data (e.g. standard "transactions", APIs, fax, email).|
| Data Payload | The bundle of data or collection of the data elements being sent. |
| Deductible | The amount that is paid for covered healthcare services before the insurance plan starts to pay. With a \$2,000 deductible, for example, the first \$2,000 of covered services is paid by the member out-of-pocket. After the deductible is paid, the member usually pays only a copayment or coinsurance for covered services. |
| EOB <br> Explanation of Benefits | An EOB is a statement from a health insurance plan describing what costs it will cover for medical care or products received. |
| GFE | The Good Faith Estimate is a notification of reasonably expected charges and billing codes for a scheduled or requested item or service. For a complete breakdown of what needs to be included in the GFE see [42 U.S. Code 300gg-136](https://www.law.cornell.edu/uscode/text/42/300gg-136)|
| GFE Submitter | Any provider and/or facility that sends a Good Faith Estimate (GFE) to a payer to facilitate the creation of an Advanced Explanation of Benefits (AEOB).|
| Gross Charge | The charge for an individual item or service that is reflected on a hospital's chargemaster absent any discounts.|
| HIPAA |The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal law that required the creation of national standards to protect sensitive patient health information from being disclosed without the patient’s consent or knowledge. The US Department of Health and Human Services (HHS) issued the HIPAA Privacy Rule to implement the requirements of HIPAA. The HIPAA Security Rule protects a subset of information covered by the Privacy Rule. |
{: .grid }


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/security.md

### Privacy & Security Considerations
The sharing of information from provider to payer for determining an Advanced Explanation of Benefits (AEOB) is subject to the Health Insurance Portability and Accountability Act's (HIPAA) "minimum necessary" regulations (specifically 45 CFR 164.514(d)(3) and (d)(4)). Payers are responsible for ensuring that only information necessary to create an AEOB is solicited, and providers are responsible for ensuring that only data that is reasonably relevant to creating an AEOB is transmitted.

Some of the data shared as part of the GFE Coordination, Submission and AEOB processes may have associated constraints on the use of that information for other purposes, including subsequent disclosure to other payers, practitioners, policyholders, etc. While HL7 FHIR supports conveying this information via security labels on transmitted resources, this information is not currently mappable (and thus findable) in the X12 837 transactions. Payers who do not view the FHIR version of the transmitted information should be aware of the possibility of these limitations and ensure they have policies that enforce appropriate sharing constraints on data.

To access information about an AEOB, the provider system will need to access the payer system. This will require that the provider system authenticates to the payer system or an intermediary. The Da Vinci HRex Implementation guide specifies how this authentication is handled. PCT servers **SHOULD** support server-server OAuth and **MAY** support mutually authenticated TLS . In a future release of this guide, direction will limit the option to server-server OAuth . Every system claiming conformance to this IG **SHALL** meet the requirements defined in the [Security and Privacy section of the Da Vinci HRex IG](http://hl7.org/fhir/us/davinci-hrex/security.html). The FHIR implementer’s [Safety Checklist](http://hl7.org/fhir/R4/safety.html) helps implementers be sure that they have considered all the parts of FHIR that impact their system design regarding privacy, security, provenance, and safety.

Once the system authentication has occurred, the payer will perform any authorization required for the provider to see the current state of the AEOB.


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/StructureDefinition-davinci-pct-aeob-intro.md

<h4 class="x_MsoNormal">Notes on Fields</h4>
<ul>
<li class="x_MsoNormal">.created: .created values convey the date and time the estimate was calculated, based on what was known about the state of the member’s benefits and accumulators for a given benefit period/plan year at that point in time (the .created date and time). </li>
<li>.benefitPeriod: .benefitPeriod values convey the term of benefits (a.k.a. "plan year") that the benefits used to calculate the estimate were based on. </li>

<ul>
<li>If included, the estimate was based on the member’s benefits and accumulators for the benefit period/plan year explicitly conveyed in .benefitPeriod, as of the .created date and time. </li>
<li>If not included, it is understood that the estimate was based on the member’s benefits and accumulators for the current benefit period/plan year, as of the .created date and time.
</li>
</ul>
<li class="x_MsoNormal">.total.amount:  Eligible amount = submitted amount - the noncovered amount - discount.  The subscriber pays the member liability = deductible + coinsurance + copay + noncovered (if applicable). The eligible amount - the member liability is the potential payer's payment amount to the provider (paidtoprovider) or the subscriber (paidtopatient)</li>

<li class="x_MsoNormal">Working together .created values and .benefitPeriod values explicitly convey the temporal context for the state of benefits and accumulators that were used to calculate the estimate communicated in an advanced EOB.
 The state of a member’s benefits and accumulators for a given benefit period or the benefit period in effect may change between the date that an estimate is generated (.created) and when the services being estimated are actually rendered (e.g., the actual date of service), resulting in a difference between the estimated vs. actual cost to the member.
 </li>

<h4 class="x_MsoNormal">Examples</h4>
<h5 class="x_MsoNormal">Example 1 – Estimation based on current benefit period</h5>
<ul>
<li class="x_MsoNormal">Situation:
<ul>
<li class="x_MsoNormal">A group health plan produces an advance cost estimate on July 2, 2023, for services scheduled on August 23, 2023. </li>
<li class="x_MsoNormal">The plan uses the state of the member’s current 2023 benefit period/plan year benefits and accumulators when calculating the estimate.</li>
<li class="x_MsoNormal">The plan’s deductible for the 2023 benefit period benefits is $1500.</li>
<li class="x_MsoNormal">At the time, the group health plan produces the estimate on July 2, 2023, the member has paid $1000 in eligible health care expenses against their $1500/2023 plan year deductible.</li>
</ul>
</li>

<li class="x_MsoNormal">Result:
<ul>
<li class="x_MsoNormal">The estimate is produced on July 2, 2023 (.created = “2023-07-02T13:28:17-05:00”). </li>
<li class="x_MsoNormal">The benefit period used as the basis for the estimation is the current 2023 benefit period/plan year (.benefitPeriod.start = “2023-01-01” & .benefitPeriod.end = “2023-12-31”).</li>
<li class="x_MsoNormal">The estimated cost to the member is based on the fact that as of July 2, 2023 13:28:17-05:00, they have only met $1000 of their $1500/2023 plan year deductible.</li> 
</ul>
</li>
</ul>


<h5 class="x_MsoNormal">Example 2 – Estimation based on a future benefit period</h5>
<ul>
<li class="x_MsoNormal">Situation:
<ul>
<li class="x_MsoNormal">The payer can support estimations based on a future benefit period. </li>
<li class="x_MsoNormal">A group health plan is producing an advance cost estimate on December 15, 2024, for services scheduled in 2025.</li>
<li class="x_MsoNormal">The plan uses the 2025 term of benefits (a.k.a. "plan year") when calculating the estimate.</li>
<li class="x_MsoNormal">The plan’s deductible for the 2025 term of benefits is $1500.</li>
<li class="x_MsoNormal">At the time, the group health plan produces the estimate on December 15, 2024, the member has incurred no claims against the 2025 term of benefits, and they have paid $0 in eligible health care expenses against their $1500/2025 plan year deductible.</li>
</ul>
</li>
<li class="x_MsoNormal">Result:
<ul>
<li class="x_MsoNormal">The estimate is produced on December 15, 2024 (.created = "2024-12-15T12:10:05-05:00"). </li>
<li class="x_MsoNormal">The benefit period used as the basis for the estimation is the 2025 plan year (.benefitPeriod.start = "2025-01-01" & .benefitPeriod.end = "2025-12-31").</li>
<li class="x_MsoNormal">The estimated cost to the member is based on the fact that as of December 15, 2024 12:10:05-05:00, they have not met any portion of their $1500/2025 plan year deductible.</li>
</ul>
</li>
</ul>


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/StructureDefinition-davinci-pct-devicerequest-intro.md

{% include draft_content_note.md content="profile" %}

---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/StructureDefinition-davinci-pct-gfe-contributor-task-intro.md

{% include draft_content_note.md content="profile" %}

---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/StructureDefinition-davinci-pct-gfe-coordination-task-intro.md

{% include draft_content_note.md content="profile" %}

---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/StructureDefinition-davinci-pct-gfe-information-bundle-intro.md

{% include draft_content_note.md content="profile" %}

---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/StructureDefinition-davinci-pct-gfe-institutional-intro.md

<h4 class="x_MsoNormal">Notes on Fields</h4>
<ul>
<li class="x_MsoNormal">The estimated service date, when available at the header level, is placed in Claim.billablePeriod. If the estimated date of service is available at the line level is placed in Claim.item.serviced[x]. </li>
</ul>

<h4 class="x_MsoNormal">Examples of .providerEventMethodology usage examples below:</h4>
<h5 class="x_MsoNormal">Example 1 –  A provider is offering both a surgical and a drug therapy-based option to the patient. The provider can add text such as "Surgical care option" and "Drug therapy option" to the Good Faith Estimate (GFE) so that the patient could easily understand the options without having to understand different CPT codes.</h5>
<ul>


<h5 class="x_MsoNormal">Example 2 – A provider added services to a previously submitted GFE. They would be able to add "Added physical therapist on Sep 18, ignore estimates submitted on Sep 17".</h5>


---

File: repos/HL7_SLASH_davinci-pct/input/pagecontent/StructureDefinition-davinci-pct-gfe-missing-bundle-intro.md

{% include draft_content_note.md content="profile" %}

---

