File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Coverage1.fsh

Instance: Coverage1
InstanceOf: C4BBCoverage
Title: "Coverage Example 1"
Description: "Coverage Example 1"
Usage: #example
* meta.lastUpdated = "2020-10-30T09:48:01.8462752-04:00"
* meta.profile[+] = Canonical(C4BBCoverage|2.1.0)
* language = #en-US
* identifier.type = $v2-0203#MB "Member Number"
* identifier.type.text = "An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
* identifier.system = "https://www.upmchealthplan.com/fhir/memberidentifier"
* identifier.value = "88800933501"
* identifier.assigner = Reference(Payer2) "UPMC Health Plan"
* status = #active
* policyHolder = Reference(Patient1)
* subscriber = Reference(Patient1)
* subscriberId = "888009335"
* beneficiary = Reference(Patient1)
* dependent = "01"
* relationship = $subscriber-relationship#self
* relationship.text = "Self"
* period.start = "2020-01-01"
* payor = Reference(Payer2) "UPMC Health Plan"
* class[0].type = $coverage-class#group "Group"
* class[=].type.text = "An employee group"
* class[=].value = "MCHMO1"
* class[=].name = "MEDICARE HMO PLAN"
* class[+].type = $coverage-class#plan "Plan"
* class[=].type.text = "A specific suite of benefits."
* class[=].value = "GR5"
* class[=].name = "GR5-HMO DEDUCTIBLE"
* network = "GR5-HMO DEDUCTIBLE"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Coverage2.fsh

Instance: Coverage2
InstanceOf: C4BBCoverage
Title: "Coverage Example 2"
Description: "Coverage Example 2"
Usage: #example
* meta.lastUpdated = "2020-10-30T09:48:01.8462752-04:00"
* meta.profile[+] = Canonical(C4BBCoverage|2.1.0)
* language = #en-US
* identifier.type = $v2-0203#MB "Member Number"
* identifier.type.text = "An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
* identifier.system = "https://www.upmchealthplan.com/fhir/memberidentifier"
* identifier.value = "88800933501"
* identifier.assigner = Reference(Payer2) "UPMC Health Plan"
* status = #active
* policyHolder = Reference(Patient1)
* subscriber = Reference(Patient1)
* subscriberId = "888009335"
* beneficiary = Reference(Patient1)
* dependent = "01"
* relationship = $subscriber-relationship#self
* relationship.text = "Self"
* period.start = "2017-01-01"
* period.end = "2017-06-30"
* payor = Reference(Payer2) "UPMC Health Plan"
* class[0].type = $coverage-class#group "Group"
* class[=].type.text = "An employee group"
* class[=].value = "MCHMO1"
* class[=].name = "MEDICARE HMO PLAN"
* class[+].type = $coverage-class#plan "Plan"
* class[=].type.text = "A specific suite of benefits."
* class[=].value = "GI8"
* class[=].name = "GI8-HMO DEDUCTIBLE"
* network = "GI8-HMO DEDUCTIBLE"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Coverage3.fsh

Instance: Coverage3
InstanceOf: C4BBCoverage
Title: "Coverage3"
Description: "Coverage Example 3"
// Usage: #example
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* meta.profile = Canonical(C4BBCoverage|2.1.0)
* language = #en-US
* identifier.type = $v2-0203#MB
* identifier.system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
* identifier.value = "1234-234-1243-12345678901"
* status = #active
* type = $v3-ActCode#HIP
* type.text = "health insurance plan policy"
* policyHolder = Reference(Patient2)
* subscriber = Reference(Patient2)
* subscriberId = "12345678901"
* beneficiary = Reference(Patient2)
* dependent = "01"
* relationship = $subscriber-relationship#self
* period.start = "2019-01-01"
* period.end = "2019-10-31"
* payor = Reference(Payer1)
* class[0].type = $coverage-class#group
* class[=].type.text = "An employee group"
* class[=].value = "021890"
* class[=].name = "Acme Corporation"
* class[+].type = $coverage-class#plan
* class[=].type.text = "Plan"
* class[=].value = "XYZ123"
* class[=].name = "XYZ123-UPMC CONSUMER ADVA"
* network = "XYZ123-UPMC CONSUMER ADVA"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/CoverageDental1.fsh

Instance: CoverageDental1
InstanceOf: C4BBCoverage
Title: "CoverageDental1"
Description: "Dental Coverage Example1"
Usage: #example
* meta.lastUpdated = "2021-01-01T14:22:01.0314215+00:00"
* meta.profile[+] = Canonical(C4BBCoverage|2.1.0)
* language = #en-US
* identifier.type = $v2-0203#MB
* identifier.system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
* identifier.value = "210300002"
* status = #active
* type = $v3-ActCode#DENTAL
* type.text = "dental care policy"
* policyHolder = Reference(Patient2)
* subscriber = Reference(Patient2)
* subscriberId = "10300007"
* beneficiary = Reference(Patient2)
* dependent = "01"
* relationship = $subscriber-relationship#self
* period.start = "2021-01-01"
* period.end = "2021-12-31"
* payor = Reference(DentalPayer1)
* class[0].type = $coverage-class#group
* class[=].type.text = "An employee group"
* class[=].value = "10300007"
* class[=].name = "Transcorp - dental"
* class[+].type = $coverage-class#plan
* class[=].type.text = "Plan"
* class[=].value = "66783JJT"
* class[=].name = "INSURANCE COMPANY XYZ - PRIME"
* network = "INSURANCE COMPANY XYZ - PRIME"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/DentalPayer1.fsh

Instance: DentalPayer1
InstanceOf: C4BBOrganization
Description: "Dental Payer1"
Usage: #example
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* meta.lastUpdated = "2021-01-01T10:23:11+00:00"
* language = #en-US
* identifier[NPI].type = $HL7IdentifierType#NPI
* identifier[NPI].value = "9941339100"
* identifier[payerid].type = $C4BBIdentifierTypeCS#payerid
* identifier[payerid].value = "66783JJT"
* name = "INSURANCE COMPANY XYZ"
* active = true


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBInpatient1-nonfinancial.fsh

Instance: BB-EOBInpatient1-nonfinancial
InstanceOf: C4BBExplanationOfBenefitInpatientInstitutionalBasis
Title: "EOB Inpatient Institutional - Example 1 - Nonfinancial"
Description: "EOB Inpatient Institutional - Example 1 - Nonfinancial"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitInpatientInstitutionalBasis|2.1.0)

* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = C4BBIdentifierType#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123412"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#institutional
* type.text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#inpatient
* subType.text = "Inpatient"
* use = #claim
* created = "2019-11-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-01-01"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "XXX Health Plan"
* outcome = #partial
* diagnosis[0].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
* diagnosis[0].type = $HL7DiagnosisType#principal
* diagnosis[0].sequence = 1
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(Coverage3)

* item[0].sequence = 1
* item[0].productOrService = $HL7DataAbsentReason#not-applicable "Not Applicable"
* item[0].revenue = $AHANUBCRevenueCodes#Dummy
* item[0].servicedDate = "2019-11-02"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork


* supportingInfo[admissionperiod].category = C4BBSupportingInfoType#admissionperiod
* supportingInfo[admissionperiod].timingPeriod.start = 2011-05-23
* supportingInfo[admissionperiod].timingPeriod.end = 2011-05-25
* supportingInfo[admissionperiod].sequence = 2
* supportingInfo[clmrecvddate].category  = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2011-05-30
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[typeofbill].category  = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].code = $AHANUBCTypeOfBill#Dummy
* supportingInfo[typeofbill].sequence = 4
* supportingInfo[pointoforigin].category  = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].code = $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn#Dummy
* supportingInfo[pointoforigin].sequence = 5
* supportingInfo[admtype].category  = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].code = $AHANUBCPriorityTypeOfAdmissionOrVisit#Dummy
* supportingInfo[admtype].sequence = 6
* supportingInfo[discharge-status].category  = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].code = $AHANUBCPatientDischargeStatus#11
* supportingInfo[discharge-status].sequence = 7

* supportingInfo[medicalrecordnumber].category  = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString = "1234-234-1243-12345678901m"
* supportingInfo[medicalrecordnumber].sequence = 8
* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "1234-234-1243-12345678901a"
* supportingInfo[patientaccountnumber].sequence = 9


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBInpatient1.fsh

Instance: EOBInpatient1
InstanceOf: C4BBExplanationOfBenefitInpatientInstitutional
Title: "EOB Inpatient Institutional - Example 1"
Description: "EOB Inpatient Institutional - Example 1"
Usage: #example
* id = "EOBInpatient1"
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitInpatientInstitutional|2.1.0)

* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = C4BBIdentifierType#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123412"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#institutional
* type.text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#inpatient
* subType.text = "Inpatient"
* use = #claim
* created = "2019-11-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-01-01"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "XXX Health Plan"
* outcome = #partial
* diagnosis[0].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
* diagnosis[0].type = $HL7DiagnosisType#principal
* diagnosis[0].sequence = 1
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(Coverage3)

* item[0].sequence = 1
* item[0].productOrService = $HL7DataAbsentReason#not-applicable "Not Applicable"
* item[0].revenue = $AHANUBCRevenueCodes#Dummy
* item[0].servicedDate = "2019-11-02"
* adjudication[adjudicationamounttype][0].category = $C4BBAdjudicationCS#paidtoprovider
* adjudication[adjudicationamounttype][0].category.text = "Payment Amount"
* adjudication[adjudicationamounttype][0].amount.value = 620.00
* adjudication[adjudicationamounttype][0].amount.currency = #USD
* adjudication[adjudicationamounttype][1].category = $HL7AdjudicationCS#submitted
* adjudication[adjudicationamounttype][1].category.text = "Submitted Amount"
* adjudication[adjudicationamounttype][1].amount.value = 2650.00
* adjudication[adjudicationamounttype][1].amount.currency = #USD
* adjudication[adjudicationamounttype][2].category = $C4BBAdjudicationCS#paidbypatient
* adjudication[adjudicationamounttype][2].category.text = "Patient Pay Amount"
* adjudication[adjudicationamounttype][2].amount.value = 0.00
* adjudication[adjudicationamounttype][2].amount.currency = #USD
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork

* total[adjudicationamounttype][0].category = $C4BBAdjudicationCS#paidtoprovider
* total[adjudicationamounttype][0].category.text = "Payment Amount"
* total[adjudicationamounttype][0].amount.value = 620.00
* total[adjudicationamounttype][0].amount.currency = #USD
* total[adjudicationamounttype][1].category = $HL7AdjudicationCS#submitted
* total[adjudicationamounttype][1].category.text = "Submitted Amount"
* total[adjudicationamounttype][1].amount.value = 2650.00
* total[adjudicationamounttype][1].amount.currency = #USD
* total[adjudicationamounttype][2].category = $C4BBAdjudicationCS#paidbypatient
* total[adjudicationamounttype][2].category.text = "Patient Pay Amount"
* total[adjudicationamounttype][2].amount.value = 0.00
* total[adjudicationamounttype][2].amount.currency = #USD
//* adjudication[benefitpaymentstatus].category = C4BBAdjudication#innetwork

* supportingInfo[admissionperiod].category = C4BBSupportingInfoType#admissionperiod
* supportingInfo[admissionperiod].timingPeriod.start = 2011-05-23
* supportingInfo[admissionperiod].timingPeriod.end = 2011-05-25
* supportingInfo[admissionperiod].sequence = 2
* supportingInfo[clmrecvddate].category  = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2011-05-30
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[typeofbill].category  = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].code = $AHANUBCTypeOfBill#Dummy
* supportingInfo[typeofbill].sequence = 4
* supportingInfo[pointoforigin].category  = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].code = $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn#Dummy
* supportingInfo[pointoforigin].sequence = 5
* supportingInfo[admtype].category  = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].code = $AHANUBCPriorityTypeOfAdmissionOrVisit#Dummy
* supportingInfo[admtype].sequence = 6
* supportingInfo[discharge-status].category  = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].code = $AHANUBCPatientDischargeStatus#11
* supportingInfo[discharge-status].sequence = 7

* supportingInfo[medicalrecordnumber].category  = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString = "1234-234-1243-12345678901m"
* supportingInfo[medicalrecordnumber].sequence = 8
* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "1234-234-1243-12345678901a"
* supportingInfo[patientaccountnumber].sequence = 9


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBInpatient2-nonfinancial.fsh

Instance: BB-EOBInpatient2-nonfinancial
InstanceOf: C4BBExplanationOfBenefitInpatientInstitutionalBasis
Title: "EOB Inpatient Institutional - Example 2 - Nonfinancial"
Description: "EOB Inpatient Institutional - Example 2 - Nonfinancial"
Usage: #example
* meta.lastUpdated = "2020-04-28T15:39:36-04:00"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitInpatientInstitutionalBasis|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "InpatientEOBExample1"
* status = #active
* type = $claim-type#institutional
* type.text = "Institutional"
* subType = $C4BBInstitutionalClaimSubType#inpatient
* subType.text = "Inpatient"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2017-05-23"
* billablePeriod.end = "2017-05-23"
* created = "2017-06-01T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization3)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderOrganization4)
* outcome = #complete
* careTeam[0].sequence = 1
* careTeam[=].provider = Reference(Practitioner2)
* careTeam[=].role = $C4BBClaimCareTeamRole#attending "Attending"
* careTeam[=].role.text = "The attending physician"
* careTeam[+].sequence = 2
* careTeam[=].provider = Reference(Practitioner2)
* careTeam[=].role = $C4BBClaimCareTeamRole#referring "Referring"
* careTeam[=].role.text = "The referring physician"
* supportingInfo[clmrecvddate].
  * sequence = 1
  * timingDate = "2017-06-01"
* supportingInfo[admissionperiod]
  * sequence = 2
  * timingPeriod.start = "2017-05-23"
* diagnosis[0].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I21.4
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+].sequence = 2
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I25.118
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 3
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#E78.5
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 4
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#M19.90
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* procedure[0].sequence = 1
* procedure[=].type = $C4BBClaimProcedureType#principal "Principal"
* procedure[=].type.text = "The Principal Procedure is based on the relation of the procedure to the Principal Diagnosis"
* procedure[=].date = "2017-05-23"
* procedure[=].procedureCodeableConcept = $ICD10#4A023N7
* procedure[+].sequence = 2
* procedure[=].type = $C4BBClaimProcedureType#other "Other"
* procedure[=].type.text = "Other procedures performed during the inpatient institutional admission"
* procedure[=].date = "2017-05-23"
* procedure[=].procedureCodeableConcept = $ICD10#B211YZZ
* procedure[+].sequence = 3
* procedure[=].type = $C4BBClaimProcedureType#other "Other"
* procedure[=].type.text = "Other procedures performed during the inpatient institutional admission"
* procedure[=].date = "2017-05-23"
* procedure[=].procedureCodeableConcept = $ICD10#B215YZZ
* insurance.focal = true
* insurance.coverage = Reference(Coverage2)
* item[0].sequence = 1
* item[=].revenue = $AHANUBCRevenueCodes#0301
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 2
* item[=].revenue = $AHANUBCRevenueCodes#0260
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 3
* item[=].revenue = $AHANUBCRevenueCodes#0305
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 4
* item[=].revenue = $AHANUBCRevenueCodes#0324
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 5
* item[=].revenue = $AHANUBCRevenueCodes#0259
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 6
* item[=].revenue = $AHANUBCRevenueCodes#0250
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 7
* item[=].revenue = $AHANUBCRevenueCodes#0710
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 8
* item[=].revenue = $AHANUBCRevenueCodes#0210
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 9
* item[=].revenue = $AHANUBCRevenueCodes#0272
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 10
* item[=].revenue = $AHANUBCRevenueCodes#0370
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 11
* item[=].revenue = $AHANUBCRevenueCodes#0730
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 12
* item[=].revenue = $AHANUBCRevenueCodes#0450
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 13
* item[=].revenue = $AHANUBCRevenueCodes#0481
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* adjudication[billingnetworkstatus]
  * reason = $C4BBPayerAdjudicationStatus#innetwork "In Network"
  * reason.text = "Indicates the provider was in network for the service"
* adjudication[benefitpaymentstatus]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork


* adjudication[benefitpaymentstatus]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#outofnetwork

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBInpatient2.fsh

Instance: EOBInpatient2
InstanceOf: C4BBExplanationOfBenefitInpatientInstitutional
Title: "EOB Inpatient Institutional - Example 2"
Description: "EOB Inpatient Institutional - Example 2"
Usage: #example
* meta.lastUpdated = "2020-04-28T15:39:36-04:00"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitInpatientInstitutional|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "InpatientEOBExample1"
* status = #active
* type = $claim-type#institutional
* type.text = "Institutional"
* subType = $C4BBInstitutionalClaimSubType#inpatient
* subType.text = "Inpatient"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2017-05-23"
* billablePeriod.end = "2017-05-23"
* created = "2017-06-01T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization3)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderOrganization4)
* outcome = #complete
* careTeam[0].sequence = 1
* careTeam[=].provider = Reference(Practitioner2)
* careTeam[=].role = $C4BBClaimCareTeamRole#attending "Attending"
* careTeam[=].role.text = "The attending physician"
* careTeam[+].sequence = 2
* careTeam[=].provider = Reference(Practitioner2)
* careTeam[=].role = $C4BBClaimCareTeamRole#referring "Referring"
* careTeam[=].role.text = "The referring physician"
* supportingInfo[clmrecvddate].
  * sequence = 1
  * timingDate = "2017-06-01"
* supportingInfo[admissionperiod]
  * sequence = 2
  * timingPeriod.start = "2017-05-23"
* diagnosis[0].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I21.4
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+].sequence = 2
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I25.118
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 3
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#E78.5
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 4
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#M19.90
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* procedure[0].sequence = 1
* procedure[=].type = $C4BBClaimProcedureType#principal "Principal"
* procedure[=].type.text = "The Principal Procedure is based on the relation of the procedure to the Principal Diagnosis"
* procedure[=].date = "2017-05-23"
* procedure[=].procedureCodeableConcept = $ICD10#4A023N7
* procedure[+].sequence = 2
* procedure[=].type = $C4BBClaimProcedureType#other "Other"
* procedure[=].type.text = "Other procedures performed during the inpatient institutional admission"
* procedure[=].date = "2017-05-23"
* procedure[=].procedureCodeableConcept = $ICD10#B211YZZ
* procedure[+].sequence = 3
* procedure[=].type = $C4BBClaimProcedureType#other "Other"
* procedure[=].type.text = "Other procedures performed during the inpatient institutional admission"
* procedure[=].date = "2017-05-23"
* procedure[=].procedureCodeableConcept = $ICD10#B215YZZ
* insurance.focal = true
* insurance.coverage = Reference(Coverage2)
* item[0].sequence = 1
* item[=].revenue = $AHANUBCRevenueCodes#0301
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 2
* item[=].revenue = $AHANUBCRevenueCodes#0260
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 3
* item[=].revenue = $AHANUBCRevenueCodes#0305
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 4
* item[=].revenue = $AHANUBCRevenueCodes#0324
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 5
* item[=].revenue = $AHANUBCRevenueCodes#0259
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 6
* item[=].revenue = $AHANUBCRevenueCodes#0250
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 7
* item[=].revenue = $AHANUBCRevenueCodes#0710
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 8
* item[=].revenue = $AHANUBCRevenueCodes#0210
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 9
* item[=].revenue = $AHANUBCRevenueCodes#0272
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 10
* item[=].revenue = $AHANUBCRevenueCodes#0370
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 11
* item[=].revenue = $AHANUBCRevenueCodes#0730
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 12
* item[=].revenue = $AHANUBCRevenueCodes#0450
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[+].sequence = 13
* item[=].revenue = $AHANUBCRevenueCodes#0481
* item[=].productOrService = $cpt#99231
* item[=].servicedPeriod.start = "2017-05-23"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* adjudication[billingnetworkstatus]
  * reason = $C4BBPayerAdjudicationStatus#innetwork "In Network"
  * reason.text = "Indicates the provider was in network for the service"
* adjudication[adjudicationamounttype]
  * category = $C4BBAdjudication#noncovered "Noncovered"
  * category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
  * amount.value = 0
  * amount.currency = #USD
* adjudication[benefitpaymentstatus]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#innetwork
* total[adjudicationamounttype][0].
  * category = $adjudication#submitted "Submitted Amount"
  * category.text = "The total submitted amount for the claim or group or line item."
  * amount.value = 7147.2
  * .amount.currency = #USD
* total[adjudicationamounttype][+].
  * category = $adjudication#eligible "Eligible Amount"
  * category.text = "Amount of the change which is considered for adjudication."
  * amount.value = 1542.01
  * amount.currency = #USD
* total[adjudicationamounttype][+].
  * category = $adjudication#deductible "Deductible"
  * category.text = "Amount deducted from the eligible amount prior to adjudication."
  * amount.value = 0
  * amount.currency = #USD
* total[adjudicationamounttype][+].
  * category = $adjudication#copay "CoPay"
  * category.text = "Patient Co-Payment"
  * amount.value = 120
  * amount.currency = #USD
* total[adjudicationamounttype][+].
  * category = $C4BBAdjudication#noncovered "Noncovered"
  * category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
  * amount.value = 0
  * amount.currency = #USD
* total[adjudicationamounttype][+].
  * category = $adjudication#benefit "Benefit Amount"
  * category.text = "Amount payable under the coverage"
  * amount.value = 1393.57
  * amount.currency = #USD
* total[adjudicationamounttype][+].
  * category = $C4BBAdjudication#memberliability "Member liability"
  * category.text = "The amount of the member's liability."
  * amount.value = 0
  * amount.currency = #USD

* adjudication[benefitpaymentstatus]
  * category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
  * reason = C4BBPayerAdjudicationStatus#outofnetwork

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOral1-nonfinancial.fsh

Instance: BB-EOBOral1-nonfinancial
InstanceOf: C4BBExplanationOfBenefitOralBasis
Description: "EOB Oral Example 1 - Nonfinancial"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOralBasis|2.1.0)
* meta.lastUpdated = "2021-03-18T10:23:00-05:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "210300002"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#oral
* type.text = "Oral"
* use = #claim
* created = "2021-03-18T10:23:00-05:00"
* insurer = Reference(DentalPayer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2021-03-01"
* billablePeriod.end = "2021-03-31"
* provider = Reference(PractitionerDentalProvider1)
* provider.display = "XXX Dental Plan"
* outcome = #complete
* diagnosis[0].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#Z01.21 "Encounter for dental examination and cleaning with abnormal findings"
* diagnosis[0].type = $HL7DiagnosisType#principal
* diagnosis[0].sequence = 1
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(CoverageDental1)

* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork



* item[0].productOrService = $ADADentalProcedureCode#D1110 "Prophylaxis - Adult"


* item[0].sequence = 1
* item[0].servicedDate = "2021-03-18"

* item[0].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"


* item[0].adjudication[benefitpaymentstatus][0].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[0].adjudication[benefitpaymentstatus][0].reason = C4BBPayerAdjudicationStatus#innetwork
* item[1].productOrService = $ADADentalProcedureCode#D0120 "Periodic oral evaluation"
* item[1].sequence = 2
* item[1].servicedDate = "2021-03-18"
* item[1].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"
* item[1].adjudication[benefitpaymentstatus][0].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[1].adjudication[benefitpaymentstatus][0].reason = C4BBPayerAdjudicationStatus#innetwork

* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2021-03-18
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].sequence = 4
* supportingInfo[servicefacility].valueReference = Reference(ProviderOrganization1)


* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 5


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOral1.fsh

Instance: EOBOral1
InstanceOf: C4BBExplanationOfBenefitOral
Description: "EOB Oral Example 1"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOral|2.1.0)
* meta.lastUpdated = "2021-03-18T10:23:00-05:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "210300002"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#oral
* type.text = "Oral"
* use = #claim
* created = "2021-03-18T10:23:00-05:00"
* insurer = Reference(DentalPayer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2021-03-01"
* billablePeriod.end = "2021-03-31"
* provider = Reference(PractitionerDentalProvider1)
* provider.display = "XXX Dental Plan"
* outcome = #complete
* diagnosis[0].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#Z01.21 "Encounter for dental examination and cleaning with abnormal findings"
* diagnosis[0].type = $HL7DiagnosisType#principal
* diagnosis[0].sequence = 1
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(CoverageDental1)

* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork

* total[adjudicationamounttype][0].category = $HL7AdjudicationCS#submitted
* total[adjudicationamounttype][0].category.text = "Submitted Amount"
* total[adjudicationamounttype][0].amount.value = 410.00
* total[adjudicationamounttype][0].amount.currency = #USD
* total[adjudicationamounttype][1].category = $HL7AdjudicationCS#benefit
* total[adjudicationamounttype][1].category.text = "Benefit Amount"
* total[adjudicationamounttype][1].amount.value = 350.00
* total[adjudicationamounttype][1].amount.currency = #USD
* total[adjudicationamounttype][2].category = C4BBAdjudication#discount
* total[adjudicationamounttype][2].category.text = "Discount Amount"
* total[adjudicationamounttype][2].amount.value = 60.00
* total[adjudicationamounttype][2].amount.currency = #USD
* total[adjudicationamounttype][3].category = C4BBAdjudication#paidtoprovider
* total[adjudicationamounttype][3].category.text = "Amount Paid to Provider"
* total[adjudicationamounttype][3].amount.value = 350.00
* total[adjudicationamounttype][3].amount.currency = #USD

* item[0].productOrService = $ADADentalProcedureCode#D1110 "Prophylaxis - Adult"


* item[0].sequence = 1
* item[0].servicedDate = "2021-03-18"

* item[0].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"
* item[0].adjudication[adjudicationamounttype][0].category = $HL7AdjudicationCS#submitted
* item[0].adjudication[adjudicationamounttype][0].amount.value = 190.00
* item[0].adjudication[adjudicationamounttype][0].amount.currency = #USD

* item[0].adjudication[benefitpaymentstatus][0].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[0].adjudication[benefitpaymentstatus][0].reason = C4BBPayerAdjudicationStatus#innetwork
* item[1].productOrService = $ADADentalProcedureCode#D0120 "Periodic oral evaluation"
* item[1].sequence = 2
* item[1].servicedDate = "2021-03-18"
* item[1].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"
* item[1].adjudication[adjudicationamounttype][0].category = $HL7AdjudicationCS#submitted
* item[1].adjudication[adjudicationamounttype][0].amount.value = 220.00
* item[1].adjudication[adjudicationamounttype][0].amount.currency = #USD
* item[1].adjudication[benefitpaymentstatus][0].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[1].adjudication[benefitpaymentstatus][0].reason = C4BBPayerAdjudicationStatus#innetwork

* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2021-03-18
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].sequence = 4
* supportingInfo[servicefacility].valueReference = Reference(ProviderOrganization1)


* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 5


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOral2-nonfinancial.fsh

Instance: BB-EOBOral2-nonfinancial
InstanceOf: C4BBExplanationOfBenefitOralBasis
Description: "EOB Oral Example 2 - Nonfinancial"
Usage: #example
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOralBasis|2.1.0)
* meta.lastUpdated = "2021-10-28T10:23:00-05:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "210300012"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#oral
* type.text = "Oral"
* use = #claim
* created = "2021-10-28T10:23:00-05:00"
* insurer = Reference(DentalPayer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2021-10-01"
* billablePeriod.end = "2021-10-31"
* provider = Reference(PractitionerDentalProvider1)
* provider.display = "XXX Dental Plan"
* outcome = #complete
* insurance[+].focal = true
* insurance[=].coverage[0] = Reference(CoverageDental1)
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork



* item[0].sequence = 1

* item[0].informationSequence[+] = 6
* item[0].informationSequence[+] = 7
* item[0].informationSequence[+] = 9
* item[0].informationSequence[+] = 10
* item[0].informationSequence[+] = 11

* item[0].productOrService = $ADADentalProcedureCode#D0220 "Intraoral - periapical first radiographic image"


* item[0].bodySite = $ADAAreaOralCavitySystem#10 "Upper right quadrant"
* item[0].subSite[+] = ADAToothSurfaceCodes#O
* item[0].subSite[+] = ADAToothSurfaceCodes#I
* item[0].servicedDate = "2021-10-28"

* item[0].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"

* item[0].adjudication[benefitpaymentstatus][0].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[0].adjudication[benefitpaymentstatus][0].reason = C4BBPayerAdjudicationStatus#innetwork


* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2021-03-18
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].sequence = 4
* supportingInfo[servicefacility].valueReference = Reference(ProviderOrganization1)


* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 6

* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 7

* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 8

* supportingInfo[additionalbodysite][+].category = C4BBSupportingInfoType#additionalbodysite
* supportingInfo[additionalbodysite][=].code = $ADAUniversalToothDesignationSystem#1
* supportingInfo[additionalbodysite][=].sequence = 9


* supportingInfo[additionalbodysite][+].category = C4BBSupportingInfoType#additionalbodysite
* supportingInfo[additionalbodysite][=].code = $ADAUniversalToothDesignationSystem#2
* supportingInfo[additionalbodysite][=].sequence = 10


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOral2.fsh

Instance: EOBOral2
InstanceOf: C4BBExplanationOfBenefitOral
Description: "EOB Oral Example 2"
Usage: #example
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOral|2.1.0)
* meta.lastUpdated = "2021-10-28T10:23:00-05:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "210300012"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#oral
* type.text = "Oral"
* use = #claim
* created = "2021-10-28T10:23:00-05:00"
* insurer = Reference(DentalPayer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2021-10-01"
* billablePeriod.end = "2021-10-31"
* provider = Reference(PractitionerDentalProvider1)
* provider.display = "XXX Dental Plan"
* outcome = #complete
* insurance[+].focal = true
* insurance[=].coverage[0] = Reference(CoverageDental1)
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork

* total[adjudicationamounttype][+].category = $HL7AdjudicationCS#submitted
* total[adjudicationamounttype][=].category.text = "Submitted Amount"
* total[adjudicationamounttype][=].amount.value = 150.00
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = $HL7AdjudicationCS#benefit
* total[adjudicationamounttype][=].category.text = "Benefit Amount"
* total[adjudicationamounttype][=].amount.value = 110.00
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = C4BBAdjudication#discount
* total[adjudicationamounttype][=].category.text = "Discount Amount"
* total[adjudicationamounttype][=].amount.value = 40.00
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = C4BBAdjudication#paidtoprovider
* total[adjudicationamounttype][=].category.text = "Amount Paid to Provider"
* total[adjudicationamounttype][=].amount.value = 100.00
* total[adjudicationamounttype][=].amount.currency = #USD

* item[0].sequence = 1

* item[0].informationSequence[+] = 6
* item[0].informationSequence[+] = 7
* item[0].informationSequence[+] = 9
* item[0].informationSequence[+] = 10
* item[0].informationSequence[+] = 11

* item[0].productOrService = $ADADentalProcedureCode#D0220 "Intraoral - periapical first radiographic image"


* item[0].bodySite = $ADAAreaOralCavitySystem#10 "Upper right quadrant"
* item[0].subSite[+] = ADAToothSurfaceCodes#O
* item[0].subSite[+] = ADAToothSurfaceCodes#I
* item[0].servicedDate = "2021-10-28"

* item[0].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"
* item[0].adjudication[adjudicationamounttype][+].category = $HL7AdjudicationCS#submitted
* item[0].adjudication[adjudicationamounttype][=].amount.value = 150.00
* item[0].adjudication[adjudicationamounttype][=].amount.currency = #USD

* item[0].adjudication[benefitpaymentstatus][0].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[0].adjudication[benefitpaymentstatus][0].reason = C4BBPayerAdjudicationStatus#innetwork


* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2021-03-18
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].sequence = 4
* supportingInfo[servicefacility].valueReference = Reference(ProviderOrganization1)


* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 6

* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 7

* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "PATIENTACCTNO3"
* supportingInfo[patientaccountnumber].sequence = 8

* supportingInfo[additionalbodysite][+].category = C4BBSupportingInfoType#additionalbodysite
* supportingInfo[additionalbodysite][=].code = $ADAUniversalToothDesignationSystem#1
* supportingInfo[additionalbodysite][=].sequence = 9


* supportingInfo[additionalbodysite][+].category = C4BBSupportingInfoType#additionalbodysite
* supportingInfo[additionalbodysite][=].code = $ADAUniversalToothDesignationSystem#2
* supportingInfo[additionalbodysite][=].sequence = 10


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOutpatient1-nonfinancial.fsh

Instance: BB-EOBOutpatient1-nonfinancial
InstanceOf: C4BBExplanationOfBenefitOutpatientInstitutionalBasis
Title: "EOB Outpatient Institutional - Example 1 - Nonfinancial"
Description: "EOB Outpatient Institutional - Example 1 - Nonfinancial"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOutpatientInstitutionalBasis|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = C4BBIdentifierType#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123412"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#institutional
* type.text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#outpatient
* subType.text = "Outpatient"
* use = #claim
* created = "2019-11-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "Organization Payer 1"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-01-01"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "Orange Medical Group"
* careTeam[+].sequence = 1
* careTeam[=].provider = Reference(ProviderOrganization1)
* careTeam[=].role = C4BBClaimCareTeamRole#rendering "Rendering provider"
* careTeam[=].qualification = $NUCCProviderTaxonomy#364SX0200X "Oncology Clinical Nurse Specialist"
* outcome = #partial
* diagnosis[0].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
* diagnosis[0].type = $C4BBClaimDiagnosisTypeCS#patientreasonforvisit
* diagnosis[0].sequence = 1
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(Coverage3)
* item[0].sequence = 1
* item[0].productOrService = $HL7DataAbsentReason#not-applicable "Not Applicable"
* item[0].revenue = $AHANUBCRevenueCodes#Dummy
* item[0].servicedDate = "2019-11-02"
// Header-Level adjudication only

* adjudication[billingnetworkstatus]
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus]
  * reason = C4BBPayerAdjudicationStatus#innetwork


* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2019-11-30
* supportingInfo[clmrecvddate].sequence = 2
* supportingInfo[typeofbill].category = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].code = $AHANUBCTypeOfBill#Dummy
* supportingInfo[typeofbill].sequence = 3
* supportingInfo[pointoforigin].category = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].code = $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn#Dummy
* supportingInfo[pointoforigin].sequence = 4
* supportingInfo[admtype].category = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].code = $AHANUBCPriorityTypeOfAdmissionOrVisit#Dummy
* supportingInfo[admtype].sequence = 5
* supportingInfo[discharge-status].category = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].code = $AHANUBCPatientDischargeStatus#Dummy
* supportingInfo[discharge-status].sequence = 6

* supportingInfo[medicalrecordnumber].category  = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString = "1234-234-1243-12345678901m"
* supportingInfo[medicalrecordnumber].sequence = 7
* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "1234-234-1243-12345678901a"
* supportingInfo[patientaccountnumber].sequence = 8


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOutpatient1.fsh

Instance: EOBOutpatient1
InstanceOf: C4BBExplanationOfBenefitOutpatientInstitutional
Title: "EOB Outpatient Institutional - Example 1"
Description: "EOB Outpatient Institutional - Example 1"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOutpatientInstitutional|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = C4BBIdentifierType#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123412"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#institutional
* type.text = "Institutional"
* subType = C4BBInstitutionalClaimSubType#outpatient
* subType.text = "Outpatient"
* use = #claim
* created = "2019-11-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "Organization Payer 1"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-01-01"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "Orange Medical Group"
* careTeam[+].sequence = 1
* careTeam[=].provider = Reference(ProviderOrganization1)
* careTeam[=].role = C4BBClaimCareTeamRole#rendering "Rendering provider"
* careTeam[=].qualification = $NUCCProviderTaxonomy#364SX0200X "Oncology Clinical Nurse Specialist"
* outcome = #partial
* diagnosis[0].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
* diagnosis[0].type = $C4BBClaimDiagnosisTypeCS#patientreasonforvisit
* diagnosis[0].sequence = 1
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(Coverage3)
* item[0].sequence = 1
* item[0].productOrService = $HL7DataAbsentReason#not-applicable "Not Applicable"
* item[0].revenue = $AHANUBCRevenueCodes#Dummy
* item[0].servicedDate = "2019-11-02"
// Header-Level adjudication only
* adjudication[adjudicationamounttype][0]
  * category = C4BBAdjudication#paidtoprovider
  * category.text = "Payment Amount"
  * amount.value = 620.00
  * amount.currency = #USD
* adjudication[adjudicationamounttype][1]
  * category = C4BBAdjudication#paidbypatient
  * category.text = "Patient Pay Amount"
  * amount.value = 0.00
* adjudication[billingnetworkstatus]
  * reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus]
  * reason = C4BBPayerAdjudicationStatus#innetwork

* total[adjudicationamounttype][2].amount.currency = #USD
* total[adjudicationamounttype][0].category = $C4BBAdjudicationCS#paidtoprovider
* total[adjudicationamounttype][0].category.text = "Payment Amount"
* total[adjudicationamounttype][0].amount.value = 620.00
* total[adjudicationamounttype][0].amount.currency = #USD
* total[adjudicationamounttype][1].category = $HL7AdjudicationCS#submitted
* total[adjudicationamounttype][1].category.text = "Submitted Amount"
* total[adjudicationamounttype][1].amount.value = 2650.00
* total[adjudicationamounttype][1].amount.currency = #USD
* total[adjudicationamounttype][2].category = $C4BBAdjudicationCS#paidbypatient
* total[adjudicationamounttype][2].category.text = "Patient Pay Amount"
* total[adjudicationamounttype][2].amount.value = 0.00
* total[adjudicationamounttype][2].amount.currency = #USD
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2019-11-30
* supportingInfo[clmrecvddate].sequence = 2
* supportingInfo[typeofbill].category = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].code = $AHANUBCTypeOfBill#Dummy
* supportingInfo[typeofbill].sequence = 3
* supportingInfo[pointoforigin].category = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].code = $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn#Dummy
* supportingInfo[pointoforigin].sequence = 4
* supportingInfo[admtype].category = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].code = $AHANUBCPriorityTypeOfAdmissionOrVisit#Dummy
* supportingInfo[admtype].sequence = 5
* supportingInfo[discharge-status].category = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].code = $AHANUBCPatientDischargeStatus#Dummy
* supportingInfo[discharge-status].sequence = 6

* supportingInfo[medicalrecordnumber].category  = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString = "1234-234-1243-12345678901m"
* supportingInfo[medicalrecordnumber].sequence = 7
* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "1234-234-1243-12345678901a"
* supportingInfo[patientaccountnumber].sequence = 8


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOutpatient2-nonfinancial.fsh

Instance: BB-EOBOutpatient2-nonfinancial
InstanceOf: C4BBExplanationOfBenefitOutpatientInstitutionalBasis
Title: "EOB Outpatient Institutional - Example 2 - Nonfinancial"
Description: "EOB Outpatient Institutional - Example 2 - Nonfinancial"
Usage: #example
* meta.lastUpdated = "2020-10-13T11:10:24-04:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOutpatientInstitutionalBasis|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "OutpatientEOBExample1"
* status = #active
* type = $claim-type#institutional
* type.text = "Institutional"
* subType = $C4BBInstitutionalClaimSubType#outpatient
* subType.text = "Outpatient"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2020-09-29"
* billablePeriod.end = "2020-09-29"
* created = "2020-10-10T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization5)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderOrganization6)
* outcome = #complete
* careTeam[0].sequence = 1
* careTeam[=].provider = Reference(Practitioner1)
* careTeam[=].role = $C4BBClaimCareTeamRole#attending "Attending"
* careTeam[=].role.text = "The attending physician"
* careTeam[+].sequence = 2
* careTeam[=].provider = Reference(Practitioner3)
* careTeam[=].role = $C4BBClaimCareTeamRole#referring "Referring"
* careTeam[=].role.text = "The referring physician"
* supportingInfo[clmrecvddate]
  * sequence = 1
  * timingDate = "2020-10-10"
* diagnosis[0].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I95.1
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+].sequence = 2
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I95.1
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 3
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#L97.529
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 4
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I73.9
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* insurance.focal = true
* insurance.coverage = Reference(Coverage1)
// Item-Level adjudication only
* item[0]
  * sequence = 1
  * revenue = $AHANUBCRevenueCodes#0551
  * productOrService = $cpt#99231
  * servicedDate = "2020-09-29"
  * locationCodeableConcept = $CMSPlaceofServiceCodes#12
  * locationCodeableConcept.text = "HOME"
  
* item[+]
  * sequence = 2
  * revenue = $AHANUBCRevenueCodes#0023
  * productOrService = $cpt#99231
  * servicedDate = "2020-09-29"
  * locationCodeableConcept = $CMSPlaceofServiceCodes#12
  * locationCodeableConcept.text = "HOME"

*  adjudication[benefitpaymentstatus]
  * reason = C4BBPayerAdjudicationStatus#innetwork


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBOutpatient2.fsh

Instance: EOBOutpatient2
InstanceOf: C4BBExplanationOfBenefitOutpatientInstitutional
Title: "EOB Outpatient Institutional - Example 2"
Description: "EOB Outpatient Institutional - Example 2"
Usage: #example
* meta.lastUpdated = "2020-10-13T11:10:24-04:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitOutpatientInstitutional|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "OutpatientEOBExample1"
* status = #active
* type = $claim-type#institutional
* type.text = "Institutional"
* subType = $C4BBInstitutionalClaimSubType#outpatient
* subType.text = "Outpatient"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2020-09-29"
* billablePeriod.end = "2020-09-29"
* created = "2020-10-10T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization5)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderOrganization6)
* outcome = #complete
* careTeam[0].sequence = 1
* careTeam[=].provider = Reference(Practitioner1)
* careTeam[=].role = $C4BBClaimCareTeamRole#attending "Attending"
* careTeam[=].role.text = "The attending physician"
* careTeam[+].sequence = 2
* careTeam[=].provider = Reference(Practitioner3)
* careTeam[=].role = $C4BBClaimCareTeamRole#referring "Referring"
* careTeam[=].role.text = "The referring physician"
* supportingInfo[clmrecvddate]
  * sequence = 1
  * timingDate = "2020-10-10"
* diagnosis[0].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I95.1
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+].sequence = 2
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I95.1
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 3
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#L97.529
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* diagnosis[+].sequence = 4
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I73.9
* diagnosis[=].type = $C4BBClaimDiagnosisType#other "Other"
* diagnosis[=].type.text = "Required when other conditions coexist or develop subsequently during the treatment"
* insurance.focal = true
* insurance.coverage = Reference(Coverage1)
// Item-Level adjudication only
* item[0]
  * sequence = 1
  * revenue = $AHANUBCRevenueCodes#0551
  * productOrService = $cpt#99231
  * servicedDate = "2020-09-29"
  * locationCodeableConcept = $CMSPlaceofServiceCodes#12
  * locationCodeableConcept.text = "HOME"
  * adjudication[adjudicationamounttype][0].
    * category = $adjudication#submitted "Submitted Amount"
    * category.text = "The total submitted amount for the claim or group or line item."
    * amount.value = 84.4
    * amount.currency = #USD
  * adjudication[adjudicationamounttype][+]
    * category = $adjudication#copay "CoPay"
    * category.text = "Patient Co-Payment"
    * amount.value = 0
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype][+]
    * category.coding[0] = $adjudication#eligible "Eligible Amount"
///    * category.coding[+] = $adjudication_1#https://bluebutton.cms.gov/resources/variables/line_prmry_alowd_chrg_amt "Line Primary Payer Allowed Charge Amount"
    * category.text = "Amount of the change which is considered for adjudication."
    * amount.value = 56.52
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype][+]
    * category = $adjudication#deductible "Deductible"
    * category.text = "Amount deducted from the eligible amount prior to adjudication."
    * amount.value = 0
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype][+]
    * category = $adjudication#benefit "Benefit Amount"
    * category.text = "Amount payable under the coverage"
    * amount.value = 56.52
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype][+]
    * category = $C4BBAdjudication#noncovered "Noncovered"
    * category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount.value = 0
    * amount.currency = #USD
* item[+]
  * sequence = 2
  * revenue = $AHANUBCRevenueCodes#0023
  * productOrService = $cpt#99231
  * servicedDate = "2020-09-29"
  * locationCodeableConcept = $CMSPlaceofServiceCodes#12
  * locationCodeableConcept.text = "HOME"
  * adjudication[0]
    * category = $adjudication#submitted "Submitted Amount"
    * category.text = "The total submitted amount for the claim or group or line item."
    * amount.value = 0
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype]
    * category = $adjudication#copay "CoPay"
    * category.text = "Patient Co-Payment"
    * amount.value = 0
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype]
    * category = $adjudication#eligible "Eligible Amount"
    * category.text = "Amount of the change which is considered for adjudication."
    * amount.value = 0
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype]
    * category = $adjudication#deductible "Deductible"
    * category.text = "Amount deducted from the eligible amount prior to adjudication."
    * amount.value = 0
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype]
    * category = $adjudication#benefit "Benefit Amount"
    * category.text = "Amount payable under the coverage"
    * amount.value = 0
    * amount.currency = #USD
  *  adjudication[adjudicationamounttype]
    * category = $C4BBAdjudication#noncovered "Noncovered"
    * category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
    * amount.value = 0
    * amount.currency = #USD
* total[adjudicationamounttype][0]
  * category = $adjudication#submitted "Submitted Amount"
  * category.text = "The total submitted amount for the claim or group or line item."
  * amount.value = 84.4
  * amount.currency = #USD
* total[adjudicationamounttype][0]
  * category = $adjudication#eligible "Eligible Amount"
  * category.text = "Amount of the change which is considered for adjudication."
  * amount.value = 56.52
  * amount.currency = #USD
* total[adjudicationamounttype][+]
  * category = $adjudication#deductible "Deductible"
  * category.text = "Amount deducted from the eligible amount prior to adjudication."
  * amount.value = 0
  * amount.currency = #USD
* total[adjudicationamounttype][+]
  * category = $adjudication#copay "CoPay"
  * category.text = "Patient Co-Payment"
  * amount.value = 0
  * amount.currency = #USD
* total[adjudicationamounttype][+]
  * category = $C4BBAdjudication#noncovered "Noncovered"
  * category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
  * amount.value = 0
  * amount.currency = #USD
* total[adjudicationamounttype][+]
  * category = $adjudication#benefit "Benefit Amount"
  * category.text = "Amount payable under the coverage"
  * amount.value = 56.52
  * amount.currency = #USD
* total[adjudicationamounttype][+]
  * category = $C4BBAdjudication#memberliability "Member liability"
  * category.text = "The amount of the member's liability."
  * amount.value = 0
  * amount.currency = #USD
*  adjudication[benefitpaymentstatus]
  * reason = C4BBPayerAdjudicationStatus#innetwork


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBPharmacy1-nonfinancial.fsh

Instance: BB-EOBPharmacy1-nonfinancial
InstanceOf: C4BBExplanationOfBenefitPharmacyBasis
Description: "EOB Pharmacy Example 1 - Nonfinancial"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitPharmacyBasis|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123412"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#pharmacy
* type.text = "Pharmacy"
* use = #claim
* created = "2019-07-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-10-30"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "XXX Health Plan"
* outcome = #partial
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(Coverage3)
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork


//* adjudication[benefitpaymentstatus].category = C4BBAdjudication#other
* item[0].productOrService = $FDANationalDrugCode#0777-3105-02 "Prozac, 100 CAPSULE in 1 BOTTLE (0777-3105-02) (package)"
* item[0].sequence = 1
* item[0].servicedDate = "2019-07-02"

* supportingInfo[brandgenericindicator].category = C4BBSupportingInfoType#brandgenericindicator
* supportingInfo[brandgenericindicator].sequence = 2
* supportingInfo[brandgenericindicator].code = $NCPDPBrandGenericIndicator#2
* supportingInfo[rxoriginCode].category = C4BBSupportingInfoType#rxorigincode
* supportingInfo[rxoriginCode].code = $NCPDPPrescriptionOriginCode#1
* supportingInfo[rxoriginCode].sequence = 3
* supportingInfo[refillNum].category = C4BBSupportingInfoType#refillnum
* supportingInfo[refillNum].valueQuantity.value = 0.0
* supportingInfo[refillNum].sequence = 4

* supportingInfo[refillsAuthorized].category = C4BBSupportingInfoType#refillsauthorized
* supportingInfo[refillsAuthorized].valueQuantity.value = 0.0
* supportingInfo[refillsAuthorized].sequence = 5

* supportingInfo[dawcode].category = C4BBSupportingInfoType#dawcode
* supportingInfo[dawcode].code = $NCPDPDispensedAsWrittenOrProductSelectionCode#7
* supportingInfo[dawcode].sequence = 6
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2019-10-31
* supportingInfo[clmrecvddate].sequence = 7
* supportingInfo[dayssupply].category = C4BBSupportingInfoType#dayssupply
* supportingInfo[dayssupply].sequence = 8
* supportingInfo[dayssupply].valueQuantity.value =  30.0
* supportingInfo[compoundcode].category = C4BBSupportingInfoType#compoundcode
* supportingInfo[compoundcode].code = $NCPDPCompoundCode#Dummy
* supportingInfo[compoundcode].sequence = 9


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBPharmacy1.fsh

Instance: EOBPharmacy1
InstanceOf: C4BBExplanationOfBenefitPharmacy
Description: "EOB Pharmacy Example 1"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitPharmacy|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123412"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#pharmacy
* type.text = "Pharmacy"
* use = #claim
* created = "2019-07-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-10-30"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "XXX Health Plan"
* outcome = #partial
* insurance[0].focal = true
* insurance[0].coverage[0] = Reference(Coverage3)
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork

* total[adjudicationamounttype][0].category = $C4BBAdjudicationCS#paidtoprovider
* total[adjudicationamounttype][0].category.text = "Payment Amount"
* total[adjudicationamounttype][0].amount.value = 620.00
* total[adjudicationamounttype][0].amount.currency = #USD
* total[adjudicationamounttype][1].category = $HL7AdjudicationCS#submitted
* total[adjudicationamounttype][1].category.text = "Submitted Amount"
* total[adjudicationamounttype][1].amount.value = 2650.00
* total[adjudicationamounttype][1].amount.currency = #USD
* total[adjudicationamounttype][2].category = $C4BBAdjudicationCS#paidbypatient
* total[adjudicationamounttype][2].category.text = "Patient Pay Amount"
* total[adjudicationamounttype][2].amount.value = 0.00
* total[adjudicationamounttype][2].amount.currency = #USD
//* adjudication[benefitpaymentstatus].category = C4BBAdjudication#other
* item[0].productOrService = $FDANationalDrugCode#0777-3105-02 "Prozac, 100 CAPSULE in 1 BOTTLE (0777-3105-02) (package)"
* item[0].sequence = 1
* item[0].servicedDate = "2019-07-02"
* item[0].adjudication[adjudicationamounttype][0].category = $HL7AdjudicationCS#submitted
* item[0].adjudication[adjudicationamounttype][0].amount.value = 1000.00
* item[0].adjudication[adjudicationamounttype][0].amount.currency = #USD
* item[0].adjudication[adjudicationamounttype][1].category = $HL7AdjudicationCS#benefit
* item[0].adjudication[adjudicationamounttype][1].amount.value = 20.00
* item[0].adjudication[adjudicationamounttype][1].amount.currency = #USD
* item[0].adjudication[adjudicationamounttype][2].category = $C4BBAdjudicationCS#discount
* item[0].adjudication[adjudicationamounttype][2].amount.value = 900.00
* item[0].adjudication[adjudicationamounttype][2].amount.currency = #USD
* item[0].adjudication[adjudicationamounttype][3].category = $C4BBAdjudicationCS#memberliability
* item[0].adjudication[adjudicationamounttype][3].amount.value = 80.00
* item[0].adjudication[adjudicationamounttype][3].amount.currency = #USD
* item[0].adjudication[adjudicationamounttype][4].category = $C4BBAdjudicationCS#paidtoprovider
* item[0].adjudication[adjudicationamounttype][4].amount.value = 20.00
* item[0].adjudication[adjudicationamounttype][4].amount.currency = #USD
* supportingInfo[brandgenericindicator].category = C4BBSupportingInfoType#brandgenericindicator
* supportingInfo[brandgenericindicator].sequence = 2
* supportingInfo[brandgenericindicator].code = $NCPDPBrandGenericIndicator#2
* supportingInfo[rxoriginCode].category = C4BBSupportingInfoType#rxorigincode
* supportingInfo[rxoriginCode].code = $NCPDPPrescriptionOriginCode#1
* supportingInfo[rxoriginCode].sequence = 3
* supportingInfo[refillNum].category = C4BBSupportingInfoType#refillnum
* supportingInfo[refillNum].valueQuantity.value = 0.0
* supportingInfo[refillNum].sequence = 4

* supportingInfo[refillsAuthorized].category = C4BBSupportingInfoType#refillsauthorized
* supportingInfo[refillsAuthorized].valueQuantity.value = 0.0
* supportingInfo[refillsAuthorized].sequence = 5

* supportingInfo[dawcode].category = C4BBSupportingInfoType#dawcode
* supportingInfo[dawcode].code = $NCPDPDispensedAsWrittenOrProductSelectionCode#7
* supportingInfo[dawcode].sequence = 6
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2019-10-31
* supportingInfo[clmrecvddate].sequence = 7
* supportingInfo[dayssupply].category = C4BBSupportingInfoType#dayssupply
* supportingInfo[dayssupply].sequence = 8
* supportingInfo[dayssupply].valueQuantity.value =  30.0
* supportingInfo[compoundcode].category = C4BBSupportingInfoType#compoundcode
* supportingInfo[compoundcode].code = $NCPDPCompoundCode#Dummy
* supportingInfo[compoundcode].sequence = 9


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBProfessional1-nonfinancial.fsh

Instance: BB-EOBProfessional1-nonfinancial
InstanceOf: C4BBExplanationOfBenefitProfessionalNonClinicianBasis
Description: "EOB Professional Example 1 - Nonfinancial"
Title: "EOB Professional - Example 1 - Nonfinancial"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitProfessionalNonClinicianBasis|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123413"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#professional
* type.text = "Professional"
* use = #claim
* created = "2019-07-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-01-01"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "XXX Health Plan"
* outcome = #partial
* diagnosis[+].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
* diagnosis[=].type = $HL7DiagnosisType#principal
* diagnosis[=].sequence = 1
* insurance[+].focal = true
* insurance[=].coverage[+] = Reference(Coverage3)

* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork

/*Testing for DAR*/
//* item[0].productOrService = $HL7DataAbsentReason#not-applicable "Not Applicable"
* item[+].productOrService = $CPT#97110 "Therapeutic procedure, 1 or more areas, each 15 minutes; therapeutic exercises to develop strength and endurance, range of motion and flexibility"
* item[=].sequence = 1
* item[=].servicedDate = "2019-07-02"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"
* item[=].adjudication[benefitpaymentstatus][+].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus][=].reason = C4BBPayerAdjudicationStatus#other

* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2011-05-30
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].sequence = 4
* supportingInfo[servicefacility].valueReference = Reference(ProviderOrganization1)

* supportingInfo[medicalrecordnumber].category  = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString = "1234-234-1243-12345678901m"
* supportingInfo[medicalrecordnumber].sequence = 5
* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "1234-234-1243-12345678901a"
* supportingInfo[patientaccountnumber].sequence = 6


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBProfessional1.fsh

Instance: EOBProfessional1
InstanceOf: C4BBExplanationOfBenefitProfessionalNonClinician
Description: "EOB Professional Example 1"
Title: "EOB Professional - Example 1"
Usage: #example
//* id = "1234-234-1243-12345678901-20190101-20191031"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitProfessionalNonClinician|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* status = #active
* identifier[uniqueclaimid].type = $C4BBIdentifierTypeCS#uc
* identifier[uniqueclaimid].value = "AW123412341234123412341234123413"
* identifier[uniqueclaimid].system = "https://www.xxxplan.com/fhir/EOBIdentifier"
* type = $HL7ClaimTypeCS#professional
* type.text = "Professional"
* use = #claim
* created = "2019-07-02T00:00:00+00:00"
* insurer = Reference(Payer1)
* insurer.display = "XXX Health Plan"
* patient = Reference(Patient2)
* billablePeriod.start = "2019-01-01"
* billablePeriod.end = "2019-10-31"
* provider = Reference(ProviderOrganization1)
* provider.display = "XXX Health Plan"
* payee.type = $payeetype#provider "Provider"
* payee.party = Reference(ProviderOrganization1)
* outcome = #partial
* diagnosis[+].diagnosisCodeableConcept = http://hl7.org/fhir/sid/icd-10-cm#S06.0X1A
* diagnosis[=].type = $HL7DiagnosisType#principal
* diagnosis[=].sequence = 1
* insurance[+].focal = true
* insurance[=].coverage[+] = Reference(Coverage3)

* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* total[adjudicationamounttype][+].category = $HL7AdjudicationCS#submitted
* total[adjudicationamounttype][=].category.text = "Submitted Amount"
* total[adjudicationamounttype][=].amount.value = 250.00
* total[adjudicationamounttype][=].amount.currency = #USD

* total[adjudicationamounttype][+].category = $adjudication#benefit
* total[adjudicationamounttype][=].category.text = "Benefit Amount"
* total[adjudicationamounttype][=].amount.value = 200.00
* total[adjudicationamounttype][=].amount.currency = #USD

* total[adjudicationamounttype][+].category = $C4BBAdjudicationCS#paidtoprovider
* total[adjudicationamounttype][=].category.text = "Payment Amount"
* total[adjudicationamounttype][=].amount.value = 200.00
* total[adjudicationamounttype][=].amount.currency = #USD

* total[adjudicationamounttype][+].category = $C4BBAdjudicationCS#paidbypatient
* total[adjudicationamounttype][=].category.text = "Patient Pay Amount"
* total[adjudicationamounttype][=].amount.value = 0.00
* total[adjudicationamounttype][=].amount.currency = #USD
/*Testing for DAR*/
//* item[0].productOrService = $HL7DataAbsentReason#not-applicable "Not Applicable"
* item[+].productOrService = $CPT#97110 "Therapeutic procedure, 1 or more areas, each 15 minutes; therapeutic exercises to develop strength and endurance, range of motion and flexibility"
* item[=].sequence = 1
* item[=].servicedDate = "2019-07-02"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#11 "Office"
* item[=].adjudication[adjudicationamounttype][+].category = $HL7AdjudicationCS#submitted
* item[=].adjudication[adjudicationamounttype][=].amount.value = 250.00
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD

* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit
* item[=].adjudication[adjudicationamounttype][=].amount.value = 200.00
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD

* item[=].adjudication[benefitpaymentstatus][+].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus][=].reason = C4BBPayerAdjudicationStatus#other

* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].timingDate = 2011-05-30
* supportingInfo[clmrecvddate].sequence = 3
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].sequence = 4
* supportingInfo[servicefacility].valueReference = Reference(ProviderOrganization1)

* supportingInfo[medicalrecordnumber].category  = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString = "1234-234-1243-12345678901m"
* supportingInfo[medicalrecordnumber].sequence = 5
* supportingInfo[patientaccountnumber].category  = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString = "1234-234-1243-12345678901a"
* supportingInfo[patientaccountnumber].sequence = 6

* payment.type = C4BBPayerAdjudicationStatus#paid "Paid"
* payment.amount.value = 200.00
* payment.amount.currency = #USD
* payment.adjustment.value = -50.00
* payment.adjustment.currency = #USD


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBProfessional2-nonfinancial.fsh

Instance: BB-EOBProfessional2-nonfinancial
InstanceOf: C4BBExplanationOfBenefitProfessionalNonClinicianBasis
Title: "EOB Professional - Example 2 - Nonfinancial"
Description: "EOB Professional - Example 2 - Nonfinancial"
Usage: #example
* meta.lastUpdated = "2020-10-20T14:46:05-04:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitProfessionalNonClinicianBasis|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "ProfessionalEOBExample1"
* status = #active
* type = $claim-type#professional
* type.text = "Professional"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2020-08-04"
* billablePeriod.end = "2020-08-04"
* created = "2020-08-24T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization1)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderOrganization1)
* outcome = #complete
* careTeam[+].sequence = 1
* careTeam[=].provider = Reference(Practitioner1)
* careTeam[=].role = $CareTeamRoleCodeCS#primary "Primary provider"
* careTeam[=].role.text = "The primary care provider."
* careTeam[+].sequence = 2
* careTeam[=].provider = Reference(Practitioner2)
* careTeam[=].role = C4BBClaimCareTeamRole#referring "Referring"
* careTeam[=].role.text = "The referring physician"
* supportingInfo.sequence = 1
* supportingInfo.category = $C4BBSupportingInfoType#clmrecvddate "Claim Received Date"
* supportingInfo.category.text = "Date the claim was received by the payer."
* supportingInfo.timingDate = "2020-08-24"
* diagnosis[+].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I70.249
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+].sequence = 2
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#L97.929
* diagnosis[=].type = $C4BBClaimDiagnosisType#secondary "secondary"
* diagnosis[=].type.text = "Required when necessary to report additional diagnoses on professional and non-clinician claims"
* insurance.focal = true
* insurance.coverage = Reference(Coverage1)
* item[+].sequence = 1
* item[=].productOrService = $cpt#75710
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"

* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 2
* item[=].productOrService = $cpt#75710
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"

* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 3
* item[=].productOrService = $cpt#75710
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"

* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 4
* item[=].productOrService = $cpt#37228
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"

* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 5
* item[=].productOrService = $cpt#37228
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"

* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 6
* item[=].productOrService = $cpt#37228
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"

* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication.category = $C4BBAdjudicationDiscriminator#billingnetworkstatus "Billing Network Status"
* adjudication.category.text = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission."
* adjudication.reason = $C4BBPayerAdjudicationStatus#innetwork "In Network"
* adjudication.reason.text = "Indicates the provider was in network for the service"


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBProfessional2.fsh

Instance: EOBProfessional2
InstanceOf: C4BBExplanationOfBenefitProfessionalNonClinician
Title: "EOB Professional - Example 2"
Description: "EOB Professional - Example 2"
Usage: #example
* meta.lastUpdated = "2020-10-20T14:46:05-04:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitProfessionalNonClinician|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.upmchealthplan.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "ProfessionalEOBExample1"
* status = #active
* type = $claim-type#professional
* type.text = "Professional"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2020-08-04"
* billablePeriod.end = "2020-08-04"
* created = "2020-08-24T00:00:00-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderOrganization1)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderOrganization1)
* outcome = #complete
* careTeam[+].sequence = 1
* careTeam[=].provider = Reference(Practitioner1)
* careTeam[=].role = $CareTeamRoleCodeCS#primary "Primary provider"
* careTeam[=].role.text = "The primary care provider."
* careTeam[+].sequence = 2
* careTeam[=].provider = Reference(Practitioner2)
* careTeam[=].role = C4BBClaimCareTeamRole#referring "Referring"
* careTeam[=].role.text = "The referring physician"
* supportingInfo.sequence = 1
* supportingInfo.category = $C4BBSupportingInfoType#clmrecvddate "Claim Received Date"
* supportingInfo.category.text = "Date the claim was received by the payer."
* supportingInfo.timingDate = "2020-08-24"
* diagnosis[+].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I70.249
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* diagnosis[+].sequence = 2
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#L97.929
* diagnosis[=].type = $C4BBClaimDiagnosisType#secondary "secondary"
* diagnosis[=].type.text = "Required when necessary to report additional diagnoses on professional and non-clinician claims"
* insurance.focal = true
* insurance.coverage = Reference(Coverage1)
* item[+].sequence = 1
* item[=].productOrService = $cpt#75710
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 68.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#copay "CoPay"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Patient Co-Payment"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 34.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 34.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $C4BBAdjudication#noncovered "Noncovered"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 2
* item[=].productOrService = $cpt#75710
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = -68.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#copay "CoPay"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Patient Co-Payment"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = -34.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = -34.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $C4BBAdjudication#noncovered "Noncovered"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 3
* item[=].productOrService = $cpt#75710
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 68.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#copay "CoPay"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Patient Co-Payment"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 34.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 34.8
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $C4BBAdjudication#noncovered "Noncovered"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 4
* item[=].productOrService = $cpt#37228
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 751.2
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#copay "CoPay"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Patient Co-Payment"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 224.11
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $C4BBAdjudication#noncovered "Noncovered"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 224.11
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 5
* item[=].productOrService = $cpt#37228
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 751.2
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#copay "CoPay"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Patient Co-Payment"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 224.11
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 224.11
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $C4BBAdjudication#noncovered "Noncovered"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* item[+].sequence = 6
* item[=].productOrService = $cpt#37228
* item[=].servicedDate = "2020-08-04"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#21
* item[=].locationCodeableConcept.text = "HOSPITAL - INPATIENT HOSPITAL"
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = -751.2
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#copay "CoPay"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Patient Co-Payment"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = -224.11
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $C4BBAdjudication#noncovered "Noncovered"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* item[=].adjudication[adjudicationamounttype][=].amount.value = -224.11
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus].reason = C4BBPayerAdjudicationStatus#innetwork
* adjudication.category = $C4BBAdjudicationDiscriminator#billingnetworkstatus "Billing Network Status"
* adjudication.category.text = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission."
* adjudication.reason = $C4BBPayerAdjudicationStatus#innetwork "In Network"
* adjudication.reason.text = "Indicates the provider was in network for the service"
* total[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* total[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* total[adjudicationamounttype][=].amount.value = 820
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* total[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* total[adjudicationamounttype][=].amount.value = 258.91
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* total[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* total[adjudicationamounttype][=].amount.value = 0
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = $adjudication#copay "CoPay"
* total[adjudicationamounttype][=].category.text = "Patient Co-Payment"
* total[adjudicationamounttype][=].amount.value = 0
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = $C4BBAdjudication#noncovered "Noncovered"
* total[adjudicationamounttype][=].category.text = "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* total[adjudicationamounttype][=].amount.value = 0
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* total[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* total[adjudicationamounttype][=].amount.value = 258.91
* total[adjudicationamounttype][=].amount.currency = #USD
* total[adjudicationamounttype][+].category = $C4BBAdjudication#memberliability "Member liability"
* total[adjudicationamounttype][=].category.text = "The amount of the member's liability."
* total[adjudicationamounttype][=].amount.value = 0
* total[adjudicationamounttype][=].amount.currency = #USD

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBProfessionalTransportation1-nonfinancial.fsh

Instance: BB-EOBProfessionalTransportation1-nonfinancial
InstanceOf: C4BBExplanationOfBenefitProfessionalNonClinicianBasis
Title: "EOB Professional - Transportation 1 - Nonfinancial"
Description: "EOB Professional - Transportation Services Example 1 - Nonfinancial"
Usage: #example
* meta.lastUpdated = "2022-09-10T14:46:05-04:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitProfessionalNonClinicianBasis|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.example.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "ProfessionalTransportationEOBExample1"
* status = #active
* type = $claim-type#professional
* type.text = "Professional"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2022-09-10"
* created = "2022-09-10T14:46:05-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderTransportationOrganization1)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderTransportationOrganization1)
* outcome = #complete
//* careTeam[+].sequence = 1
//* careTeam[=].provider = Reference(ProviderTransportationOrganization1)
//* careTeam[=].role = C4BBClaimCareTeamRole#rendering "Rendering provider"
//* careTeam[=].role.text = "The rendering care provider."
//* careTeam[=].qualification = $NUCCProviderTaxonomy#343900000X "Non-emergency Medical Transport (VAN)"
* supportingInfo[clmrecvddate].sequence = 1
* supportingInfo[clmrecvddate].category = $C4BBSupportingInfoType#clmrecvddate "Claim Received Date"
* supportingInfo[clmrecvddate].category.text = "Date the claim was received by the payer."
* supportingInfo[clmrecvddate].timingDate = "2022-09-11"


* supportingInfo[patientweight][+].category = C4BBSupportingInfoType#patientweight
* supportingInfo[patientweight][=].sequence = 2
* supportingInfo[patientweight][=].valueQuantity.unit = "[lb_av]"
* supportingInfo[patientweight][=].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[patientweight][=].valueQuantity.value = 160

* supportingInfo[ambulancetransportreason][+].category = C4BBSupportingInfoType#ambulancetransportreason
* supportingInfo[ambulancetransportreason][=].sequence = 3
* supportingInfo[ambulancetransportreason][=].reason = X12AmbulanceTransportReasonCodes#B "Patient was transported for the benefit of a preferred physician"


* supportingInfo[transportationdistance][+].category = C4BBSupportingInfoType#transportationdistance
* supportingInfo[transportationdistance][=].sequence = 4
* supportingInfo[transportationdistance][=].valueQuantity.unit = "[mi_i]"
* supportingInfo[transportationdistance][=].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[transportationdistance][=].valueQuantity.value = 21

* supportingInfo[transportationdistance][+].category = C4BBSupportingInfoType#transportationdistance
* supportingInfo[transportationdistance][=].sequence = 5
* supportingInfo[transportationdistance][=].valueQuantity.unit = "[mi_i]"
* supportingInfo[transportationdistance][=].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[transportationdistance][=].valueQuantity.value = 22

* supportingInfo[roudtrippurpose][+].category = C4BBSupportingInfoType#roudtrippurpose
* supportingInfo[roudtrippurpose][=].sequence = 6
* supportingInfo[roudtrippurpose][=].valueString = "Trip to facility and then back home"

* supportingInfo[stretcherpurpose][+].category = C4BBSupportingInfoType#stretcherpurpose
* supportingInfo[stretcherpurpose][=].sequence = 7
* supportingInfo[stretcherpurpose][=].valueString = "Patient could not walk"

* supportingInfo[pickuplocation][+].category = C4BBSupportingInfoType#pickuplocation
* supportingInfo[pickuplocation][=].sequence = 8
* supportingInfo[pickuplocation][=].valueString = "Patient home; Pittsburgh; PA,15222"

* supportingInfo[dropofflocation][+].category = C4BBSupportingInfoType#dropofflocation
* supportingInfo[dropofflocation][=].sequence = 9
* supportingInfo[dropofflocation][=].valueString = "Orange Medical Group; Pittsburgh; PA,15222"

* supportingInfo[pickuplocation][+].category = C4BBSupportingInfoType#pickuplocation
* supportingInfo[pickuplocation][=].sequence = 10
* supportingInfo[pickuplocation][=].valueString = "Orange Medical Group; Pittsburgh; PA,15222"

* supportingInfo[dropofflocation][+].category = C4BBSupportingInfoType#dropofflocation
* supportingInfo[dropofflocation][=].sequence = 11
* supportingInfo[dropofflocation][=].valueString = "Patient home; Pittsburgh; PA,15222"






* diagnosis[+].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I70.249
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* insurance.focal = true
* insurance.coverage = Reference(Coverage1)


* item[+].sequence = 1
* item[=].productOrService = $HCPCS#A0428 "Ambulance service, basic life support, non-emergency transport (BLS)"
* item[=].servicedDate = "2022-09-10"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#41
* item[=].locationCodeableConcept.text = "Ambulance - Land"
* item[=].informationSequence[+] = 2
* item[=].informationSequence[+] = 3
* item[=].informationSequence[+] = 4
* item[=].informationSequence[+] = 6
* item[=].informationSequence[+] = 7
* item[=].informationSequence[+] = 10
* item[=].informationSequence[+] = 11

* item[=].adjudication[benefitpaymentstatus][+].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus][=].reason = C4BBPayerAdjudicationStatus#innetwork

* item[+].sequence = 2
* item[=].productOrService = $HCPCS#A0428 "Ambulance service, basic life support, non-emergency transport (BLS)"
* item[=].servicedDate = "2022-09-10"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#41
* item[=].locationCodeableConcept.text = "Ambulance - Land"
* item[=].informationSequence[+] = 2
* item[=].informationSequence[+] = 3
* item[=].informationSequence[+] = 5
* item[=].informationSequence[+] = 6
* item[=].informationSequence[+] = 7
* item[=].informationSequence[+] = 8
* item[=].informationSequence[+] = 9

* item[=].adjudication[benefitpaymentstatus][+].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus][=].reason = C4BBPayerAdjudicationStatus#innetwork

* adjudication.category = $C4BBAdjudicationDiscriminator#billingnetworkstatus "Billing Network Status"
* adjudication.category.text = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission."
* adjudication.reason = $C4BBPayerAdjudicationStatus#innetwork "In Network"
* adjudication.reason.text = "Indicates the provider was in network for the service"

* total[+].category = $adjudication#submitted "Submitted Amount"
* total[=].category.text = "The total submitted amount for the claim or group or line item."
* total[=].amount.value = 82.97
* total[=].amount.currency = #USD
* total[+].category = $adjudication#eligible "Eligible Amount"
* total[=].category.text = "Amount of the change which is considered for adjudication."
* total[=].amount.value = 82.97
* total[=].amount.currency = #USD
* total[+].category = $adjudication#benefit "Benefit Amount"
* total[=].category.text = "Amount payable under the coverage"
* total[=].amount.value = 82.97
* total[=].amount.currency = #USD
* total[+].category = $C4BBAdjudication#memberliability "Member liability"
* total[=].category.text = "The amount of the member's liability."
* total[=].amount.value = 0
* total[=].amount.currency = #USD

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/EOBProfessionalTransportation1.fsh

Instance: EOBProfessionalTransportation1
InstanceOf: C4BBExplanationOfBenefitProfessionalNonClinician
Title: "EOB Professional - Transportation 1"
Description: "EOB Professional - Transportation Services Example 1"
Usage: #example
* meta.lastUpdated = "2022-09-10T14:46:05-04:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBExplanationOfBenefitProfessionalNonClinician|2.1.0)
* identifier[uniqueclaimid].type = $C4BBIdentifierType#uc "Unique Claim ID"
* identifier[uniqueclaimid].type.text = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* identifier[uniqueclaimid].system = "https://www.example.com/fhir/EOBIdentifier"
* identifier[uniqueclaimid].value = "ProfessionalTransportationEOBExample1"
* status = #active
* type = $claim-type#professional
* type.text = "Professional"
* use = #claim
* patient = Reference(Patient1)
* billablePeriod.start = "2022-09-10"
* created = "2022-09-10T14:46:05-04:00"
* insurer = Reference(Payer2) "UPMC Health Plan"
* provider = Reference(ProviderTransportationOrganization1)
* payee.type = $payeetype#provider "Provider"
* payee.type.text = "Any benefit payable will be paid to the provider (Assignment of Benefit)."
* payee.party = Reference(ProviderTransportationOrganization1)
* outcome = #complete
//* careTeam[+].sequence = 1
//* careTeam[=].provider = Reference(ProviderTransportationOrganization1)
//* careTeam[=].role = C4BBClaimCareTeamRole#rendering "Rendering provider"
//* careTeam[=].role.text = "The rendering care provider."
//* careTeam[=].qualification = $NUCCProviderTaxonomy#343900000X "Non-emergency Medical Transport (VAN)"
* supportingInfo[clmrecvddate].sequence = 1
* supportingInfo[clmrecvddate].category = $C4BBSupportingInfoType#clmrecvddate "Claim Received Date"
* supportingInfo[clmrecvddate].category.text = "Date the claim was received by the payer."
* supportingInfo[clmrecvddate].timingDate = "2022-09-11"


* supportingInfo[patientweight][+].category = C4BBSupportingInfoType#patientweight
* supportingInfo[patientweight][=].sequence = 2
* supportingInfo[patientweight][=].valueQuantity.unit = "[lb_av]"
* supportingInfo[patientweight][=].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[patientweight][=].valueQuantity.value = 160

* supportingInfo[ambulancetransportreason][+].category = C4BBSupportingInfoType#ambulancetransportreason
* supportingInfo[ambulancetransportreason][=].sequence = 3
* supportingInfo[ambulancetransportreason][=].reason = X12AmbulanceTransportReasonCodes#B "Patient was transported for the benefit of a preferred physician"


* supportingInfo[transportationdistance][+].category = C4BBSupportingInfoType#transportationdistance
* supportingInfo[transportationdistance][=].sequence = 4
* supportingInfo[transportationdistance][=].valueQuantity.unit = "[mi_i]"
* supportingInfo[transportationdistance][=].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[transportationdistance][=].valueQuantity.value = 21

* supportingInfo[transportationdistance][+].category = C4BBSupportingInfoType#transportationdistance
* supportingInfo[transportationdistance][=].sequence = 5
* supportingInfo[transportationdistance][=].valueQuantity.unit = "[mi_i]"
* supportingInfo[transportationdistance][=].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[transportationdistance][=].valueQuantity.value = 22

* supportingInfo[roudtrippurpose][+].category = C4BBSupportingInfoType#roudtrippurpose
* supportingInfo[roudtrippurpose][=].sequence = 6
* supportingInfo[roudtrippurpose][=].valueString = "Trip to facility and then back home"

* supportingInfo[stretcherpurpose][+].category = C4BBSupportingInfoType#stretcherpurpose
* supportingInfo[stretcherpurpose][=].sequence = 7
* supportingInfo[stretcherpurpose][=].valueString = "Patient could not walk"

* supportingInfo[pickuplocation][+].category = C4BBSupportingInfoType#pickuplocation
* supportingInfo[pickuplocation][=].sequence = 8
* supportingInfo[pickuplocation][=].valueString = "Patient home; Pittsburgh; PA,15222"

* supportingInfo[dropofflocation][+].category = C4BBSupportingInfoType#dropofflocation
* supportingInfo[dropofflocation][=].sequence = 9
* supportingInfo[dropofflocation][=].valueString = "Orange Medical Group; Pittsburgh; PA,15222"

* supportingInfo[pickuplocation][+].category = C4BBSupportingInfoType#pickuplocation
* supportingInfo[pickuplocation][=].sequence = 10
* supportingInfo[pickuplocation][=].valueString = "Orange Medical Group; Pittsburgh; PA,15222"

* supportingInfo[dropofflocation][+].category = C4BBSupportingInfoType#dropofflocation
* supportingInfo[dropofflocation][=].sequence = 11
* supportingInfo[dropofflocation][=].valueString = "Patient home; Pittsburgh; PA,15222"






* diagnosis[+].sequence = 1
* diagnosis[=].diagnosisCodeableConcept = $icd-10-cm#I70.249
* diagnosis[=].type = $ex-diagnosistype#principal "Principal Diagnosis"
* diagnosis[=].type.text = "The single medical diagnosis that is most relevant to the patient's chief complaint or need for treatment."
* insurance.focal = true
* insurance.coverage = Reference(Coverage1)


* item[+].sequence = 1
* item[=].productOrService = $HCPCS#A0428 "Ambulance service, basic life support, non-emergency transport (BLS)"
* item[=].servicedDate = "2022-09-10"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#41
* item[=].locationCodeableConcept.text = "Ambulance - Land"
* item[=].informationSequence[+] = 2
* item[=].informationSequence[+] = 3
* item[=].informationSequence[+] = 4
* item[=].informationSequence[+] = 6
* item[=].informationSequence[+] = 7
* item[=].informationSequence[+] = 10
* item[=].informationSequence[+] = 11
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 40.35
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 40.35
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 40.35
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus][+].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus][=].reason = C4BBPayerAdjudicationStatus#innetwork

* item[+].sequence = 2
* item[=].productOrService = $HCPCS#A0428 "Ambulance service, basic life support, non-emergency transport (BLS)"
* item[=].servicedDate = "2022-09-10"
* item[=].locationCodeableConcept = $CMSPlaceofServiceCodes#41
* item[=].locationCodeableConcept.text = "Ambulance - Land"
* item[=].informationSequence[+] = 2
* item[=].informationSequence[+] = 3
* item[=].informationSequence[+] = 5
* item[=].informationSequence[+] = 6
* item[=].informationSequence[+] = 7
* item[=].informationSequence[+] = 8
* item[=].informationSequence[+] = 9
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#submitted "Submitted Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "The total submitted amount for the claim or group or line item."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 42.62
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#eligible "Eligible Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount of the change which is considered for adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 42.62
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#deductible "Deductible"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount deducted from the eligible amount prior to adjudication."
* item[=].adjudication[adjudicationamounttype][=].amount.value = 0
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[adjudicationamounttype][+].category = $adjudication#benefit "Benefit Amount"
* item[=].adjudication[adjudicationamounttype][=].category.text = "Amount payable under the coverage"
* item[=].adjudication[adjudicationamounttype][=].amount.value = 42.62
* item[=].adjudication[adjudicationamounttype][=].amount.currency = #USD
* item[=].adjudication[benefitpaymentstatus][+].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item[=].adjudication[benefitpaymentstatus][=].reason = C4BBPayerAdjudicationStatus#innetwork

* adjudication.category = $C4BBAdjudicationDiscriminator#billingnetworkstatus "Billing Network Status"
* adjudication.category.text = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission."
* adjudication.reason = $C4BBPayerAdjudicationStatus#innetwork "In Network"
* adjudication.reason.text = "Indicates the provider was in network for the service"

* total[+].category = $adjudication#submitted "Submitted Amount"
* total[=].category.text = "The total submitted amount for the claim or group or line item."
* total[=].amount.value = 82.97
* total[=].amount.currency = #USD
* total[+].category = $adjudication#eligible "Eligible Amount"
* total[=].category.text = "Amount of the change which is considered for adjudication."
* total[=].amount.value = 82.97
* total[=].amount.currency = #USD
* total[+].category = $adjudication#benefit "Benefit Amount"
* total[=].category.text = "Amount payable under the coverage"
* total[=].amount.value = 82.97
* total[=].amount.currency = #USD
* total[+].category = $C4BBAdjudication#memberliability "Member liability"
* total[=].category.text = "The amount of the member's liability."
* total[=].amount.value = 0
* total[=].amount.currency = #USD

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Patient1.fsh

Instance: Patient1
InstanceOf: C4BBPatient
Description: "Patient Example1"
Usage: #example
//* id = "1234-234-1243-12345678901"
* meta.profile[+] = Canonical(C4BBPatient|2.1.0)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* id = "Patient1"
* active = true
* name[0].family = "Example1"
* name[0].given[0] = "Johnny"
* telecom[0].system = http://hl7.org/fhir/contact-point-system#phone
* telecom[0].value = "(301)555-1212"
* telecom[0].rank = 1
* telecom[0].system = 	http://hl7.org/fhir/contact-point-system#phone
* telecom[0].value = "(301)666-1212"
* telecom[0].rank = 2
* gender = http://hl7.org/fhir/administrative-gender#male
* birthDate = "1986-01-01"
* address[0].type = http://hl7.org/fhir/address-type#physical
* address[0].line[0] = "123 Main Street"
* address[0].city = "Pittsburgh"
* address[0].state = "PA"
* address[0].postalCode = "12519"
* maritalStatus = http://terminology.hl7.org/CodeSystem/v3-NullFlavor#UNK
* identifier[memberid].type = $IdentifierType#MB
* identifier[memberid].value = "1234-234-1243-12345678901"
* identifier[memberid].system = "https://www.xxxhealthplan.com/fhir/memberidentifier"
//* identifier[medrecnum].type = $IdentifierType#MR
//* identifier[medrecnum].value = "1234-234-1243-12345678901m"
//* identifier[medrecnum].system = "https://www.xxxhealthplan.com/fhir/medicalrecordnumber"
* identifier[uniquememberid].type = C4BBIdentifierType#um
* identifier[uniquememberid].value = "1234-234-1243-12345678901u"
* identifier[uniquememberid].system = "https://www.xxxhealthplan.com/fhir/iniquememberidentifier"
//* identifier[patacctnum].type = C4BBIdentifierType#pat
//* identifier[patacctnum].value = "1234-234-1243-12345678901a"
//* identifier[patacctnum].system = "https://www.xxxhealthplan.com/fhir/patacctnum"


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Patient2.fsh

Instance: Patient2
InstanceOf: C4BBPatient
Title: "Patient Example 2"
Description: "Patient Example 2"
Usage: #example
* meta.lastUpdated = "2020-10-30T09:48:01.8512764-04:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBPatient|2.1.0)
* language = #en-US
* identifier[memberid].type = $v2-0203#MB "Member Number"
* identifier[memberid].type.text = "An identifier for the insured of an insurance policy (this insured always has a subscriber), usually assigned by the insurance carrier."
* identifier[memberid].system = "https://www.upmchealthplan.com/fhir/memberidentifier"
* identifier[memberid].value = "88800933501"
* identifier[memberid].assigner = Reference(Payer2) "UPMC Health Plan"
* active = true
* name.family = "Test"
* name.given = "Member 01"
* telecom[0].system = #phone
* telecom[=].value = "5555555551"
* telecom[=].rank = 1
* telecom[+].system = #phone
* telecom[=].value = "5555555552"
* telecom[=].rank = 2
* telecom[+].system = #phone
* telecom[=].value = "5555555553"
* telecom[=].rank = 3
* telecom[+].system = #phone
* telecom[=].value = "5555555554"
* telecom[=].rank = 4
* telecom[+].system = #phone
* telecom[=].value = "5555555555"
* telecom[=].use = #home
* telecom[=].rank = 5
* telecom[+].system = #phone
* telecom[=].value = "5555555556"
* telecom[=].use = #work
* telecom[=].rank = 6
* telecom[+].system = #email
* telecom[=].value = "GXXX@XXXX.com"
* telecom[=].rank = 7
* telecom[+].system = #fax
* telecom[=].value = "5555555557"
* telecom[=].rank = 8
* gender = #male
* birthDate = "1943-01-01"
* address[0].type = #physical
* address[=].line = "123 Main Street"
* address[=].city = "PITTSBURGH"
* address[=].state = "PA"
* address[=].postalCode = "15239"
* address[+].type = #physical
* address[=].line = "456 Murray Avenue"
* address[=].city = "PITTSBURGH"
* address[=].state = "PA"
* address[=].postalCode = "15217"
* maritalStatus = $v3-NullFlavor#UNK
* maritalStatus.text = "unknown"
* communication.language = urn:ietf:bcp:47#en
* communication.language.text = "English"
* communication.preferred = true
* managingOrganization = Reference(Payer2) "UPMC Health Plan"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Payer1.fsh

Instance: Payer1
InstanceOf: C4BBOrganization
Title: "Payer Organization Example 1"
Description: "Payer Organization Example 1"
Usage: #example
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier[NPI].type = $HL7IdentifierType#NPI
* identifier[NPI].value = "9941339100"
* identifier[payerid].type = $C4BBIdentifierTypeCS#payerid
* identifier[payerid].value = "901234"
* name = "Organization Payer 1"
* active = true

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Payer2.fsh

Instance: Payer2
InstanceOf: C4BBOrganization
Title: "Payer Organization Example 2"
Description: "Payer Organization Example 2"
Usage: #example
* meta.lastUpdated = "2020-09-08T00:00:00+00:00"
* meta.source = "Organization/PayerOrganizationExample1"
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* identifier.type = $C4BBIdentifierType#naiccode "NAIC Code"
* identifier.type.text = "NAIC Code"
* identifier.system = "urn:oid:2.16.840.1.113883.6.300"
* identifier.value = "95216"
* active = true
* type = $organization-type#pay
* type.text = "Payer"
* name = "UPMC Health Plan"
* telecom[0].system = #phone
* telecom[=].value = "1-844-220-4785 TTY: 711"
* telecom[=].use = #work
* telecom[+].system = #phone
* telecom[=].value = "1-866-406-8762"
* telecom[=].use = #work
* address.type = #physical
* address.line[0] = "UPMC Health Plan"
* address.line[+] = "Attn: Commercial Plans"
* address.line[+] = "U.S. Steel Tower"
* address.line[+] = "600 Grant Street"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "15219"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Practitioner1.fsh

Instance: Practitioner1
InstanceOf: C4BBPractitioner
Title: "Practitioner Example 1"
Description: "Practitioner Example 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBPractitioner|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name.family = "Smith"
* name.given = "John"
* name.prefix = "Dr."

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Practitioner2.fsh

Instance: Practitioner2
InstanceOf: C4BBPractitioner
Title: "Practitioner Example 2"
Description: "Practitioner Example 2"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBPractitioner|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name.family = "Brown"
* name.given = "Jack"
* name.prefix = "Dr."

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Practitioner3.fsh

Instance: Practitioner3
InstanceOf: C4BBPractitioner
Title: "Practitioner Example 3"
Description: "Practitioner Example 3"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBPractitioner|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name.family = "Williams"
* name.given = "Jane"
* name.prefix = "Dr."

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/Practitioner4.fsh

Instance: Practitioner4
InstanceOf: C4BBPractitioner
Description: "Practitioner 4"
Usage: #example
* meta.profile[+] = Canonical(C4BBPractitioner|2.1.0)
* meta.lastUpdated = "2022-07-27T10:23:11+00:00"
* language = #en-US
* identifier[NPI].type = $HL7IdentifierType#NPI
* identifier[NPI].value = "9941339100"
* name[0].family = "Levin"
* name[0].given[0] = "Henry"
* name[0].suffix = "MD"
* active = true

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/PractitionerDentalProvider1.fsh

Instance: PractitionerDentalProvider1
InstanceOf: C4BBPractitioner
Description: "Dental Provider 1"
Usage: #example
* meta.profile[+] = Canonical(C4BBPractitioner|2.1.0)
* meta.lastUpdated = "2021-01-01T10:23:11+00:00"
* language = #en-US
* identifier[NPI].type = $HL7IdentifierType#NPI
* identifier[NPI].value = "9941339100"
* name[0].family = "Schmidt"
* name[0].given[0] = "Stewart"
* name[0].suffix = "DDS"
* active = true


---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/ProviderOrganization1.fsh

Instance: ProviderOrganization1
InstanceOf: C4BBOrganization
Title: "Provider Organization Example 1"
Description: "Provider Organization Example 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name = "Orange Medical Group"
* address.line = "Attn: Orange Medical Group"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "15222"
* address.country = "USA"
* contact.telecom.system = #phone
* contact.telecom.value = "555-555-5510"
* contact.telecom.use = #work

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/ProviderOrganization2.fsh

Instance: ProviderOrganization2
InstanceOf: C4BBOrganization
Title: "Provider Organization Example 2"
Description: "Provider Organization Example 2"
Usage: #example
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* meta.lastUpdated = "2019-12-12T09:14:11+00:00"
* language = #en-US
* identifier[NPI].type = $HL7IdentifierType#NPI
* identifier[NPI].value = "9941339100"
* identifier[tax].type = $IdentifierType#TAX
* identifier[tax].value = "123-45-6789"
* name = "Provider 1"
* active = true

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/ProviderOrganization3.fsh

Instance: ProviderOrganization3
InstanceOf: C4BBOrganization
Title: "Provider Organization Example 3"
Description: "Provider Organization Example 3"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name = "Green Medical Group"
* address.line = "Attn: Green Medical Group"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "15222"
* address.country = "USA"
* contact.telecom.system = #phone
* contact.telecom.value = "555-555-5520"
* contact.telecom.use = #work

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/ProviderOrganization4.fsh

Instance: ProviderOrganization4
InstanceOf: C4BBOrganization
Title: "Provider Organization Example 4"
Description: "Provider Organization Example 4"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name = "Blue Medical Group"
* address.line = "Attn: Blue Medical Group"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "15222"
* address.country = "USA"
* contact.telecom.system = #phone
* contact.telecom.value = "555-555-5530"
* contact.telecom.use = #work

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/ProviderOrganization5.fsh

Instance: ProviderOrganization5
InstanceOf: C4BBOrganization
Title: "Provider Organization Example 5"
Description: "Provider Organization Example 5"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name = "Black Medical Group"
* address.line = "Attn: Black Medical Group"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "15222"
* address.country = "USA"
* contact.telecom.system = #phone
* contact.telecom.value = "555-555-5560"
* contact.telecom.use = #work

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/ProviderOrganization6.fsh

Instance: ProviderOrganization6
InstanceOf: C4BBOrganization
Title: "Provider Organization Example 6"
Description: "Provider Organization Example 6"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name = "White Medical Group"
* address.line = "Attn: White Medical Group"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "15222"
* address.country = "USA"
* contact.telecom.system = #phone
* contact.telecom.value = "555-555-5570"
* contact.telecom.use = #work

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/ProviderTransportationOrganization1.fsh

Instance: ProviderTransportationOrganization1
InstanceOf: C4BBOrganization
Title: "Provider Transportation Organization Example 1"
Description: "Provider Transportation Organization Example 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBOrganization|2.1.0)
* identifier.type = $v2-0203#NPI "National Provider Identifier"
* identifier.type.text = "National Provider Identifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* active = true
* name = "ABC Ambulance Services"
* address.line = "Attn: ABC Ambulance Services"
* address.city = "Pittsburgh"
* address.state = "PA"
* address.postalCode = "15222"
* address.country = "USA"
* contact.telecom.system = #phone
* contact.telecom.value = "555-555-5511"
* contact.telecom.use = #work

---

File: repos/HL7_SLASH_carin-bb/input/fsh/examples/RelatedPerson.fsh

Instance: RelatedPerson1
InstanceOf: C4BBRelatedPerson
Title: "RelatedPerson Example 1"
Description: "RelatedPerson Example 1"
Usage: #example
* meta.lastUpdated = "2020-05-04T03:02:01-04:00"
* meta.profile[+] = Canonical(C4BBRelatedPerson|2.1.0)
* active = true
* patient = Reference(Patient1)
* name[0].family = "Example1"
* name[0].given[0] = "Mary"
* relationship = http://terminology.hl7.org/CodeSystem/v3-RoleCode#MTH
* telecom[0].system = http://hl7.org/fhir/contact-point-system#phone
* telecom[0].value = "(301)555-1212"
* telecom[0].rank = 1
* telecom[0].system = 	http://hl7.org/fhir/contact-point-system#phone
* telecom[0].value = "(301)666-1212"
* telecom[0].rank = 2
* address[0].type = http://hl7.org/fhir/address-type#physical
* address[0].line[0] = "123 Main Street"
* address[0].city = "Pittsburgh"
* address[0].state = "PA"
* address[0].postalCode = "12519"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/coverage-payor.fsh

Instance: coverage-payor
InstanceOf: SearchParameter
Title: "Coverage_Payor"
Description: "The identity of the insurer or party paying for services"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/coverage-payor"
* version = "2.1.0"
* name = "Coverage_Payor"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/Coverage-payor"
* status = #active
* experimental = false
* date = "2019-11-01T09:29:23+11:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The identity of the insurer or party paying for services"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #payor
* base = #Coverage
* type = #reference
* expression = "Coverage.payor"
* xpath = "f:Coverage/f:payor"
* xpathUsage = #normal
* target[0] = #Organization
* target[+] = #Patient
* target[+] = #RelatedPerson

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-billable-period-start.fsh

Instance: explanationofbenefit-billable-period-start
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_BillablePeriodStart"
Description: "Starting Date of the service for the EOB using billablePeriod.period.start. The billable-period-start search parameter using the billablePeriod.period.start provides results with the earliest billablePeriod.start from a professional and non-clinician EOB or an oral EOB."
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2021-04-20T10:19:00.000+00:00"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-billable-period-start"
* version = "2.1.0"
* name = "ExplanationOfBenefit_BillablePeriodStart"
* status = #active
* experimental = false
* date = "2022-04-20T10:19:00+00:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "Starting Date of the service for the EOB using billablePeriod.period.start. The billable-period-start search parameter using the billablePeriod.period.start provides results with the earliest billablePeriod.start from a professional and non-clinician EOB or an oral EOB."
* jurisdiction = urn:iso:std:iso:3166#US
* code = #billable-period-start
* base = #ExplanationOfBenefit
* type = #date
* expression = "ExplanationOfBenefit.billablePeriod.start"
* xpath = "f:ExplanationOfBenefit/f:billablePeriod.start"
* xpathUsage = #normal
* comparator[0] = #eq
* comparator[+] = #ne
* comparator[+] = #gt
* comparator[+] = #ge
* comparator[+] = #lt
* comparator[+] = #le
* comparator[+] = #sa
* comparator[+] = #eb
* comparator[+] = #ap

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-care-team.fsh

Instance: explanationofbenefit-care-team
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Careteam"
Description: "Member of the CareTeam"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-care-team"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Careteam"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-care-team"
* status = #active
* experimental = false
* date = "2019-11-01T09:29:23+11:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "Member of the CareTeam"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #care-team
* base = #ExplanationOfBenefit
* type = #reference
* expression = "ExplanationOfBenefit.careTeam.provider"
* xpath = "f:ExplanationOfBenefit/f:careTeam/f:provider"
* xpathUsage = #normal
* target[0] = #Practitioner
* target[+] = #Organization
* target[+] = #PractitionerRole

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-coverage.fsh

Instance: explanationofbenefit-coverage
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Coverage"
Description: "The plan under which the claim was adjudicated"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-coverage"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Coverage"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-coverage"
* status = #active
* experimental = false
* date = "2019-11-01T09:29:23+11:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The plan under which the claim was adjudicated"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #coverage
* base = #ExplanationOfBenefit
* type = #reference
* expression = "ExplanationOfBenefit.insurance.coverage"
* xpath = "f:ExplanationOfBenefit/f:insurance/f:coverage"
* xpathUsage = #normal
* target = #Coverage

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-identifier.fsh

Instance: explanationofbenefit-identifier
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Identifier"
Description: "The business/claim identifier of the Explanation of Benefit"
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2020-03-31T06:41:13.000+00:00"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-identifier"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Identifier"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-identifier"
* status = #active
* experimental = false
* date = "2020-03-31T19:48:45+10:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The business/claim identifier of the Explanation of Benefit"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #identifier
* base = #ExplanationOfBenefit
* type = #token
* expression = "ExplanationOfBenefit.identifier"
* xpath = "f:ExplanationOfBenefit/f:identifier"
* xpathUsage = #normal

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-insurer.fsh

Instance: explanationofbenefit-insurer
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Insurer"
Description: "The party responsible for the claim"
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2020-03-31T06:41:13.000+00:00"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-insurer"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Insurer"
* status = #active
* experimental = false
* date = "2020-03-31T09:48:45+00:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The party responsible for the claim"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #insurer
* base = #ExplanationOfBenefit
* type = #reference
* expression = "ExplanationOfBenefit.insurer"
* xpath = "f:ExplanationOfBenefit/f:insurer"
* xpathUsage = #normal
* target = #Organization

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-patient.fsh

Instance: explanationofbenefit-patient
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Patient"
Description: "The reference to the patient"
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2019-12-16T06:41:13.000+00:00"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-patient"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Patient"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-patient"
* status = #active
* experimental = false
* date = "2019-12-01T09:48:45+00:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The reference to the patient"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #patient
* base = #ExplanationOfBenefit
* type = #reference
* expression = "ExplanationOfBenefit.patient"
* xpath = "f:ExplanationOfBenefit/f:patient"
* xpathUsage = #normal
* target = #Patient

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-provider.fsh

Instance: explanationofbenefit-provider
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Provider"
Description: "The reference to the provider"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-provider"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Provider"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/ExplanationOfBenefit-provider"
* status = #active
* experimental = false
* date = "2019-11-01T09:29:23+11:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The reference to the provider"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #provider
* base = #ExplanationOfBenefit
* type = #reference
* expression = "ExplanationOfBenefit.provider"
* xpath = "f:ExplanationOfBenefit/f:provider"
* xpathUsage = #normal
* target[0] = #Practitioner
* target[+] = #Organization
* target[+] = #PractitionerRole

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-service-date.fsh

Instance: explanationofbenefit-service-date
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_ServiceDate"
Description: "The service-date search parameter is meant to simplify the search for the client enabling them to use one search parameter across EoB types for the service date. With this parameter. the client doesn't need to know that for inpatient and outpatient institutional EOB dates they need to search by billablePeriod, for a pharmacy EOB by item.servicedDate, for a professional and non-clinician EOB - by item.servicedPeriod and for an oral EOB – by item.servicedPeriod."
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2020-03-31T06:41:13.000+00:00"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-service-date"
* version = "2.1.0"
* name = "ExplanationOfBenefit_ServiceDate"
* status = #active
* experimental = false
* date = "2020-03-31T09:48:45+00:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The service-date search parameter is meant to simplify the search for the client enabling them to use one search parameter across EoB types for the service date. With this parameter. the client doesn't need to know that for inpatient and outpatient institutional EOB dates they need to search by billablePeriod, for a pharmacy EOB by item.servicedDate, for a professional and non-clinician EOB - by item.servicedPeriod and for an oral EOB – by item.servicedPeriod."
* jurisdiction = urn:iso:std:iso:3166#US
* code = #service-date
* base = #ExplanationOfBenefit
* type = #date
* expression = "ExplanationOfBenefit.billablePeriod | ExplanationOfBenefit.item.serviced"
* xpath = "f:ExplanationOfBenefit/f:billablePeriod | f:ExplanationOfBenefit/f:item/f:servicedDate | f:ExplanationOfBenefit/f:item/f:servicedPeriod"
* xpathUsage = #normal
* comparator[0] = #eq
* comparator[+] = #ne
* comparator[+] = #gt
* comparator[+] = #ge
* comparator[+] = #lt
* comparator[+] = #le
* comparator[+] = #sa
* comparator[+] = #eb
* comparator[+] = #ap

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-service-start-date.fsh

Instance: explanationofbenefit-service-start-date
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_ServiceStartDate"
Description: "Starting Date of the service for the EOB. The service-start-date search parameter simplifies search, since a client doesn't need to know that for inpatient and outpatient institutional EOB dates they need to search by billablePeriod.start, for a pharmacy EOB by item.servicedDate, for a professional and non-clinician EOB - by item.servicedPeriod.start and for an oral EOB – by item.servicedPeriod.start."
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2021-11-05T06:41:13.000+00:00"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-service-start-date"
* version = "2.1.0"
* name = "ExplanationOfBenefit_ServiceStartDate"
* status = #active
* experimental = false
* date = "2021-11-05T09:48:45+00:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "Starting Date of the service for the EOB. The service-start-date search parameter simplifies search, since a client doesn't need to know that for inpatient and outpatient institutional EOB dates they need to search by billablePeriod.start, for a pharmacy EOB by item.servicedDate, for a professional and non-clinician EOB - by item.servicedPeriod.start and for an oral EOB – by item.servicedPeriod.start."
* jurisdiction = urn:iso:std:iso:3166#US
* code = #service-start-date
* base = #ExplanationOfBenefit
* type = #date
//* expression = "ExplanationOfBenefit.billablePeriod.start | ExplanationOfBenefit.item.servicedDate | ExplanationOfBenefit.item.servicedPeriod.start"
* expression = "ExplanationOfBenefit.billablePeriod.start | ExplanationOfBenefit.item.serviced.ofType(date) | ExplanationOfBenefit.item.serviced.ofType(Period).start"
* xpath = "f:ExplanationOfBenefit/f:billablePeriod.start | f:ExplanationOfBenefit/f:item/f:servicedDate | f:ExplanationOfBenefit/f:item/f:servicedPeriod.start"
* xpathUsage = #normal
* comparator[0] = #eq
* comparator[+] = #ne
* comparator[+] = #gt
* comparator[+] = #ge
* comparator[+] = #lt
* comparator[+] = #le
* comparator[+] = #sa
* comparator[+] = #eb
* comparator[+] = #ap

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/explanationofbenefit-type.fsh

Instance: explanationofbenefit-type
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Type"
Description: "The type of the ExplanationOfBenefit"
Usage: #definition
* meta.versionId = "1"
* meta.lastUpdated = "2020-03-31T06:41:13.000+00:00"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/explanationofbenefit-type"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Type"
* status = #active
* experimental = false
* date = "2020-03-31T19:48:45+10:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The type of the ExplanationOfBenefit"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #type
* base = #ExplanationOfBenefit
* type = #token
* expression = "ExplanationOfBenefit.type"
* xpath = "f:ExplanationOfBenefit/f:type"
* xpathUsage = #normal

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/practitionerrole-organization.fsh

Instance: practitionerrole-organization
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Organization"
Description: "The identity of the organization the practitioner represents / acts on behalf of"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/practitionerrole-organization"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Organization"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization"
* status = #active
* experimental = false
* date = "2019-11-01T09:29:23+11:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "The identity of the organization the practitioner represents / acts on behalf of"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #organization
* base = #PractitionerRole
* type = #reference
* expression = "PractitionerRole.organization"
* xpath = "f:PractitionerRole/f:organization"
* xpathUsage = #normal
* target = #Organization

---

File: repos/HL7_SLASH_carin-bb/input/fsh/searchparameter/practitionerrole-practitioner.fsh

Instance: practitionerrole-practitioner
InstanceOf: SearchParameter
Title: "ExplanationOfBenefit_Practitioner"
Description: "Practitioner that is able to provide the defined services for the organization"
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status"
* extension.valueCode = #trial-use
* url = "http://hl7.org/fhir/us/carin-bb/SearchParameter/practitionerrole-practitioner"
* version = "2.1.0"
* name = "ExplanationOfBenefit_Practitioner"
* derivedFrom = "http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner"
* status = #active
* experimental = false
* date = "2019-11-01T09:29:23+11:00"
* publisher = "HL7 International / Financial Management"
* contact.name = "HL7 International / Financial Management"
* contact.telecom[0].system = #url
* contact.telecom[=].value = "http://www.hl7.org/Special/committees/fm"
* contact.telecom[+].system = #email
* contact.telecom[=].value = "fm@lists.HL7.org"
* description = "Practitioner that is able to provide the defined services for the organization"
* jurisdiction = urn:iso:std:iso:3166#US
* code = #practitioner
* base = #PractitionerRole
* type = #reference
* expression = "PractitionerRole.practitioner"
* xpath = "f:PractitionerRole/f:practitioner"
* xpathUsage = #normal
* target = #Practitioner

---

File: repos/HL7_SLASH_carin-bb/input/fsh/Aliases.fsh

Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $payeetype = http://terminology.hl7.org/CodeSystem/payeetype
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $subscriber-relationship = http://terminology.hl7.org/CodeSystem/subscriber-relationship
Alias: $coverage-class = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $C4BBIdentifierType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType
Alias: $claim-type = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $C4BBInstitutionalClaimSubType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBInstitutionalClaimSubType
Alias: $C4BBSupportingInfoType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType
Alias: $C4BBPayerAdjudicationStatus = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBPayerAdjudicationStatus
Alias: $TypeOfBill = https://www.nubc.org/CodeSystem/TypeOfBill
Alias: $PointOfOrigin = https://www.nubc.org/CodeSystem/PointOfOrigin
Alias: $PriorityTypeOfAdmitOrVisit = https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit
Alias: $PatDischargeStatus = https://www.nubc.org/CodeSystem/PatDischargeStatus
Alias: $AHANUBCPatientDischargeStatus = https://www.nubc.org/CodeSystem/PatDischargeStatus
Alias: $AHANUBCPointOfOriginForAdmissionOrVisitNewborn = https://www.nubc.org/CodeSystem/PointOfOriginNewborn
Alias: $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn = https://www.nubc.org/CodeSystem/PointOfOrigin
Alias: $AHANUBCPriorityTypeOfAdmissionOrVisit = https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit
Alias: $AHANUBCRevenueCodes = https://www.nubc.org/CodeSystem/RevenueCodes
Alias: $AHANUBCTypeOfBill = https://www.nubc.org/CodeSystem/TypeOfBill
Alias: $icd-10-cm = http://hl7.org/fhir/sid/icd-10-cm
Alias: $ex-diagnosistype = http://terminology.hl7.org/CodeSystem/ex-diagnosistype
Alias: $data-absent-reason = http://terminology.hl7.org/CodeSystem/data-absent-reason
Alias: $C4BBAdjudicationDiscriminator = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator
Alias: $C4BBAdjudication = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication
Alias: $adjudication = http://terminology.hl7.org/CodeSystem/adjudication
Alias: $cdt = http://ada.org/cdt
Alias: $ADADentalProcedureCode = http://www.ada.org/cdt
Alias: $Place_of_Service_Code_Set = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set
Alias: $ADAUniversalToothDesignationSystem = http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem
Alias: $ADAAreaOralCavitySystem = http://terminology.hl7.org/CodeSystem/ADAAreaOralCavitySystem
Alias: $ADAToothSurfaceCodes = http://terminology.hl7.org/CodeSystem/ADAToothSurfaceCodes
Alias: $C4BBClaimCareTeamRole = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimCareTeamRole
Alias: $provider-taxonomy = http://nucc.org/provider-taxonomy
Alias: $C4BBClaimDiagnosisType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType
Alias: $NCPDPDispensedAsWrittenOrProductSelectionCode = http://terminology.hl7.org/CodeSystem/NCPDPDispensedAsWrittenOrProductSelectionCode
Alias: $NCPDPBrandGenericIndicator = http://terminology.hl7.org/CodeSystem/NCPDPBrandGenericIndicator
Alias: $NCPDPPrescriptionOriginCode = http://terminology.hl7.org/CodeSystem/NCPDPPrescriptionOriginCode
Alias: $NCPDPRejectCode = http://terminology.hl7.org/CodeSystem/NCPDPRejectCode
Alias: $NCPDPCompoundCode = http://terminology.hl7.org/CodeSystem/NCPDPCompoundCode
Alias: $ndc = http://hl7.org/fhir/sid/ndc
Alias: $cpt = http://www.ama-assn.org/go/cpt
Alias: $C4BBClaimProcedureType = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimProcedureType
Alias: $ICD10 = http://www.cms.gov/Medicare/Coding/ICD10
Alias: $adjudication_1 = https://bluebutton.cms.gov/resources/codesystem/adjudication
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $2.16.840.1.114222.4.11.1066 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066

//USCore -
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient


Alias: $us-core-race = http://hl7.org/fhir/us/core/StructureDefinition/us-core-race
Alias: $us-core-ethnicity = http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity
Alias: $us-core-birthsex = http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex
Alias: $us-core-usps-state = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state


Alias: $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: $USCoreProviderRole = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias: $USCoreProviderSpecialty = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066

Alias: $HL7RelatedClaimRelationshipCS = http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship
Alias: $SubscriberRelationship = http://hl7.org/fhir/ValueSet/subscriber-relationship
Alias: $HL7AdjudicationCS = 	http://terminology.hl7.org/CodeSystem/adjudication
Alias: $HL7ClaimType = http://hl7.org/fhir/ValueSet/claim-type
Alias: $HL7ClaimTypeCS = http://terminology.hl7.org/CodeSystem/claim-type
Alias: $CoverageClassCS = http://terminology.hl7.org/CodeSystem/coverage-class
Alias: $OrganizationIdentifierType   =  http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $IdentifierType   =  http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $AdjudicationTypeExt = http://hl7.org/fhir/us/carin-bb/StructureDefinition/AdjudicationType
Alias: $HL7DiagnosisType = http://terminology.hl7.org/CodeSystem/ex-diagnosistype
Alias: $HL7ProcedureType = http://terminology.hl7.org/CodeSystem/ex-procedure-type
Alias: $HL7PayeeType = http://terminology.hl7.org/CodeSystem/payeetype
Alias: $HL7IdentifierType = http://terminology.hl7.org/CodeSystem/v2-0203

Alias: $HL7DataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason

//Alias: $ToothSurfaceVS = http://hl7.org/fhir/ValueSet/surface
//Alias: $ToothSurfaceCS = http://terminology.hl7.org/CodeSystem/FDI-surface
Alias: $ToothNumber = http://hl7.org/fhir/ValueSet/tooth

Alias: $CareTeamRoleCodeCS = http://terminology.hl7.org/CodeSystem/claimcareteamrole|1.0.0
Alias: $PresentOnAdmissionV2CS = urn:oid:2.16.840.1.113883.6.301.11
Alias: $NAICCodeCS = urn:oid:2.16.840.1.113883.6.300
Alias: $TAXCodeCS = urn:oid:2.16.840.1.113883.4.4

//Alias:  $NUBCPointOfOriginForAdmissionOrVisitCS = https://www.nubc.org/point-of-origin-for-admission-or-visit
Alias: $NUBCPatientDischargeCS   = https://www.nubc.org/patient-discharge
Alias: $AHANUBCPriorityOfAdmissionOrVisitCS = https://www.nubc.org/priority-type-of-admission-or-visit
Alias: $AHANUBCPointOfOriginForAdmissionOrVisitOID = urn:oid:2.16.840.1.113883.6.301.4
Alias: $AHANUBCTypeOfBillOID = urn:oid:2.16.840.1.113883.18.290
Alias: $AHANUBCRevenueCodeOID = urn:oid:2.16.840.1.113883.13.18
Alias: $AHANUBCPatientDischargeStatusOID = urn:oid:2.16.840.1.113883.6.301.5
//Alias: $AHANUBCPresentOnAdmissionOID  = urn:oid:2.16.840.1.113883.6.301.11
Alias: $CMSPresentOnAdmissionIndicator = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HospitalAcqCond/Coding

Alias: $X12CARCCS = https://x12.org/codes/claim-adjustment-reason-codes
Alias: $CMSRARCCS = https://x12.org/codes/remittance-advice-remark-codes
Alias: $CMSRemittanceAdviceRemarkCodes = https://x12.org/codes/remittance-advice-remark-codes


Alias: $X12ClaimAdjustmentReasonCodes = https://x12.org/codes/claim-adjustment-reason-codes

Alias: $X12AmbulanceTransReas = https://x12.org/codesystem.x12.org/ambulance-transport-reason-codes


Alias: $ICD10CM = http://hl7.org/fhir/sid/icd-10-cm
Alias: $ICD9CM = http://hl7.org/fhir/sid/icd-9-cm
Alias: $ICD10PCS = http://www.cms.gov/Medicare/Coding/ICD10
Alias: $ICD9PCS = http://www.cms.gov/Medicare/Coding/ICD9
Alias: $CPT = http://www.ama-assn.org/go/cpt
Alias: $HCPCS = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
Alias: $CMSHCPCSCodes = https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets
Alias: $CMSHIPPSCodes = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes
Alias: $CMSMSDRG = https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software
Alias: $THREEMAPDRG = http://uri.hddaccess.com/cs/apdrg
Alias: $THREEMAPRDRG = http://uri.hddaccess.com/cs/aprdrg
Alias: $CMSPlaceofServiceCodes = https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set
//Alias:   $CPTALLVS = http://hl7.org/fhir/ValueSet/cpt-all
//Alias:   $RXN = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $FDANationalDrugCode = http://hl7.org/fhir/sid/ndc
Alias: $NUCCProviderTaxonomy = http://nucc.org/provider-taxonomy

Alias: $SupportingInfoCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSupportingInfoType
Alias: $C4BBAdjudicationCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudication
Alias: $C4BBIdentifierTypeCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBIdentifierType
Alias: $C4BBClaimDiagnosisTypeCS = http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBClaimDiagnosisType
Alias: $C4BBAdjudicationDiscriminator =  http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBAdjudicationDiscriminator

Alias: $R5CoverageKind = http://hl7.org/fhir/5.0/StructureDefinition/extension-Coverage.kind

Alias: $compliesWithProfile = http://hl7.org/fhir/StructureDefinition/structuredefinition-compliesWithProfile

---

File: repos/HL7_SLASH_carin-bb/input/fsh/CodeSystems.fsh

// Contains Codesystems Defined WITHIN this IG
// CodeSystemStubs.fsh contains stubs for external codesystems.
CodeSystem: C4BBAdjudication
Title: "C4BB Adjudication Code System"
Description: "Describes the various amount fields used when payers receive and adjudicate a claim.  It complements the values defined in http://terminology.hl7.org/CodeSystem/adjudication.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #coinsurance "Co-insurance" "The amount the insured individual pays, as a set percentage of the cost of covered medical services, as an out-of-pocket payment to the provider. Example: Insured pays 20% and the insurer pays 80%."
* #noncovered "Noncovered" "The portion of the cost of this service that was deemed not eligible by the insurer because the service or member was not covered by the subscriber contract."
* #priorpayerpaid "Prior payer paid" "The reduction in the payment amount to reflect the carrier as a secondary payer."
* #paidbypatient "Paid by patient" "The total amount paid by the patient without specifying the source."
* #paidbypatientcash "Paid by patient - cash" "The amount paid by the patient using cash, check, or other personal account."
* #paidbypatientother "Paid by patient - other" "The amount paid by the patient using a method different than cash (cash, check, or personal account) or health account."
* #paidbypatienthealthaccount "Paid by patient - health account" "The amount paid by the patient using another method like HSA, HRA, FSA or other type of health account."
* #paidtoprovider "Paid to provider" "The amount paid to the provider."
* #paidtopatient "Paid to patient" "paid to patient"
* #memberliability "Member liability" "The amount of the member's liability."
* #discount "Discount" "The amount of the discount"
* #drugcost "Drug cost" "Price paid for the drug excluding mfr or other discounts.  It typically is the sum of the following components: ingredient cost, dispensing fee, sales tax, and vaccine administration"

//* #paid "Paid" "paid"
//* #denied "Denied"  "denied"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."


CodeSystem: C4BBPayeeType
Title: "C4BB Payee Type Code System"
Description: "Indicates that a payee type may be a beneficiary.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #beneficiary "Beneficiary" "The beneficiary (patient) will be reimbursed."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBClaimDiagnosisType
Title: "C4BB Claim Diagnosis Type Code System"
Description: "Indicates if the institutional diagnosis is admitting, principal, secondary, other, an external cause of injury or a patient reason for visit.  Complements http://terminology.hl7.org/CodeSystem/ex-diagnosistype.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #externalcauseofinjury "External Cause of Injury" "Required when an external cause of injury is needed to describe the injury"
* #patientreasonforvisit "Patient Reason for Visit" "Identifies the patient's reason for the outpatient institutional visit"
* #other "Other"  "Required when other conditions coexist or develop subsequently during the treatment"
* #secondary  "Secondary"  "Required when necessary to report additional diagnoses on professional and non-clinician claims"
//* #principal "Principal" "Principal"
//* #admitting "Admitting" "Admitting"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBClaimCareTeamRole
Title: "C4BB Claim Care Team Role Code System"
Description: "Describes functional roles of the care team members.  Complements http://terminology.hl7.org/CodeSystem/claimcareteamrole.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #attending  "Attending"  "The attending physician"
* #referring "Referring"  "The referring physician"
* #operating "Operating"  "The operating physician"
* #otheroperating "Other Operating"  "The other operating physician"
* #rendering "Rendering provider"  "The performing or rendering provider"
* #prescribing "Prescribing provider" "The prescribing provider"
* #purchasedservice "Purchased Service" "A purchased service occurs when one provider purchases a service from another provider and then provides it to the patient, e.g. a diagnostic exam"
//* #pcp "pcp" "Primary Care Provider"
//* #site "site"  "Site Provider"
//* #supervising "supervising" "Supervising"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This Code System is not copyrighted."


CodeSystem: C4BBCompoundLiteral
Title: "C4BB Compound Literal Code System"
Description: "CodeSystem for a Literal 'compound' value.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #compound "compound" "Compound"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

// ******** @Saul - updated **********
CodeSystem: C4BBIdentifierType
Title: "C4BB Identifier Type Code System"
Description: "Identifier Type codes that extend those defined in http://terminology.hl7.org/CodeSystem/v2-0203 to define the type of identifier payers and providers assign to claims and patients.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
// * #tax "Tax ID Number" "Tax ID Number"  - use the TAX code from the base codesystem
//* #npi "National Provider Identifier" "National Provider Identifier"  FHIR-35712
//* #clia "CLIA" "CLIA"
* #payerid "Payer ID" "Payer ID used in HIPAA covered claims submission transactions"
* #naiccode "NAIC Code" "An identifier assigned to licensed and authorized insurance companies by the National Association of Insurance Commissioners (NAIC)."
//* #mb "Member ID" "Member ID" - not needed - defined in HL7
// * #mr "Medical Record Number" "Medical Record Number" - use the MR code from the base codesystem
* #pat "Patient Account Number" "Patient Account Number"
* #um "Unique Member ID" "Indicates that the patient identifier is a unique member identifier assigned by a payer across all lines of business"
* #uc "Unique Claim ID" "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBPayerAdjudicationStatus
Title: "C4BB Payer Adjudication Status Code System"
Description: "Describes the various status fields used when payers adjudicate a claim, such as whether the claim was adjudicated in or out of network, if the provider was in or not in network for the service.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #innetwork	"In Network" "Indicates an in network status in relation to a patient's coverage"
* #outofnetwork "Out Of Network" "Indicates a not in network status in relation to a patient's coverage"
* #other "Other" "Indicates other network status or when a network does not apply"
* #paid "Paid" "Indicates if the claim was approved for payment"
* #denied "Denied" "Indicates if the claim was denied"
* #partiallypaid "Partially Paid" "Indicates that some line items on the claim were denied"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBRelatedClaimRelationshipCodes
Title: "C4BB Related Claim Relationship Code System"
Description: "Identifies if the current claim represents a claim that has been adjusted and was given a prior claim number or if the current claim has been adjusted; i.e., replaced by or merged to another claim number.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #replacedby "Replaced by claim number" "The current claim has been adjusted; i.e., replaced by or merged to another claim number."
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBSupportingInfoType
Title: "C4BB Supporting Info Type Code System"
Description: "Claim Information Category - Used as the discriminator for supportingInfo.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #admissionperiod  "Admission Period" "Dates corresponding with the admission and discharge of the beneficiary to a facility"
* #pointoforigin  "Point Of Origin"  "UB-04 Source of Admission (FL-15) identifies the place where the patient was identified as needing admission to a facility."
* #admtype	"Admission Type"  "UB-04 Priority of the admission (FL-14) indicates, for example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled."
* #brandgenericindicator	"Brand Generic Indicator" "NCPDP code indicating whether the plan adjudicated the claim as a brand or generic drug."
* #clmrecvddate	"Claim Received Date" "Date the claim was received by the payer."
* #compoundcode "Compound Code" "NCPDP code indicating whether or not the prescription is a compound."
* #dawcode "DAW (Dispense As Written) Code" "NCPDP code indicating the prescriber's instruction regarding substitution of generic equivalents or order to dispense the specific prescribed medication."
* #dayssupply	"Days Supply" "NCPDP value indicating the Number of days supply of medication dispensed by the pharmacy."
* #discharge-status  "Discharge Status"   "UB-04 Discharge Status (FL-17) indicates the patient’s status as of the discharge date for a facility stay."
* #drg	"DRG"	"DRG (Diagnosis Related Group), including the code system, the DRG version and the code value"
* #refillnum	"Refill Number"	  "NCPDP value indicating the number fill of the current dispensed supply (0, 1, 2, etc.)"
* #refillsauthorized "Refills Authorized"	  "NCPDP value indicating the number of refills authorized by the subscriber (0, 1, 2, etc.)"
* #rxorigincode	"Rx Origin Code" "NCPDP code indicating whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy."
* #servicefacility  "Service Facility" "The facility where the service occurred.  Examples include hospitals, nursing homes, laboratories or homeless shelters."
* #typeofbill "Type of Bill"  "UB-04 Type of Bill (FL-04) provides specific information for payer purposes."
* #medicalrecordnumber "Medical Record Number" "Patient Medical Record Number associated with the specific claim."
* #patientaccountnumber "Patient Account Number" "Patient Account Number associated with the specific claim."
* #orthodontics "Orthodontics" "Orthodontics treatment indicator."
* #prosthesis "Prosthesis" "Prosthesis replacement indicator."
* #additionalbodysite "Additional Body Site" "Additional tooth number or oral cavity. Additional body sites are specific to line item and have to be linked by ExplanationOfBenefit.item.informationSequence."
* #missingtoothnumber "Missing Tooth Number" "Missing tooth number."
* #patientweight "Patient Weight" "Patient weight (for transportation services)"
* #ambulancetransportreason "Ambulance Transport Reason" "Reason ambulance transport was needed (for transportation services)"
* #transportationdistance "Transportation Distance" "Distance traveled (for transportation services)"
* #roudtrippurpose "Round Trip Purpose" "Reason for round trip (for transportation services)"
* #stretcherpurpose "Stretcher Purpose" "Purpose of using a stretcher (for transportation services)"
* #pickuplocation "Pick-up Location" "Patient pick-up Location (for transportation services)"
* #dropofflocation "Drop-off Location" "Patient drop-off location (for transportation services)"
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."


CodeSystem: C4BBAdjudicationDiscriminator
Title: "C4BB Adjudication Discriminator Code System"
Description: "Used as the discriminator for the data elements in adjudication and item.adjudication.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #allowedunits	"allowed units" "defines the adjudication slice to define allowed units"
// 20210201 CAS: Removed as not used as a discriminator (the CodeSystem C4BBPayerBenefitPaymentStatus is used for this slice), Change ipart of FHIR-30635 - Update Benefit Payment Status slice name ,cardinality and must support
//* #inoutnetwork "in or Out of Network" "defines the adjudication and item.adjudication slice to indicate whether a claim was adjudicatd in or out of network"
* #adjustmentreason "Adjustment Reason" "Defines the adjudication slice to identify the adjustment reason"
* #rejectreason "Reject Reason" "Defines the adjudication slice to identify the reject reason"
* #billingnetworkstatus	"Billing Network Status"       "Indicates the Billing Provider network status in relation to a patient's coverage as of the effective date of service or admission."
* #renderingnetworkstatus	"Rendering Network Status" "Indicates the Rendering Provider network status in relation to a patient's coverage as of the effective date of service or admission."
* #benefitpaymentstatus "Benefit Payment Status" "Indicates the network payment status in relation to a patient's coverage as of the effective date of service or admission."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBClaimProcedureType
Title: "C4BB Claim Procedure Type Code System"
Description: "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #principal "Principal" "The Principal Procedure is based on the relation of the procedure to the Principal Diagnosis"
* #other "Other"  "Other procedures performed during the inpatient institutional admission"
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

CodeSystem: C4BBInstitutionalClaimSubType
Title: "C4BB Institutional Claim SubType Code System"
Description: "Indicates if institutional ExplanationOfBenefit is inpatient or outpatient.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #inpatient "Inpatient" "Claims for inpatient institutional admissions."
* #outpatient "Outpatient"  "Claims for outpatient institutional admissions."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

/* FHIR-47140 - Move US Surface Codes System to THO

CodeSystem: C4BBSurfaceCodes
Title: "US Surface Codes System"
Description: "This value set includes FDI tooth surface codes localized for the US Realm.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* #M "Mesial" "The surface of a tooth that is closest to the midline (middle) of the face."
* #O "Occlusal" "The chewing surface of posterior teeth."
* #I "Incisal" "The biting edge of anterior teeth."
* #D "Distal" "The surface of a tooth that faces away from the midline of the face."
* #B "Buccal" "The surface of a posterior tooth facing the cheeks."
* #F "Facial" "The surface of a tooth facing the lips."
//V	Ventral	The surface of a tooth facing the lips.
* #L "Lingual" "The surface of a tooth facing the tongue."
* ^content = #complete
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."



*/

---

File: repos/HL7_SLASH_carin-bb/input/fsh/CodeSystemStubs.fsh

// Code Systems

RuleSet: CodeSystemStubBoilerplate
* ^publisher = "HL7 International - Financial Management Work Group"
* ^contact[0].name = "HL7 International - Financial Management Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/fm"
* ^contact[0].telecom[1].system = #email
* ^contact[0].telecom[1].value = "fmlists@lists.hl7.org"
* ^contact[1].name = "Jean Duteau"
* ^contact[1].telecom[0].system = #email
* ^contact[1].telecom[0].value = "mailto:jean@duteaudesign.com"
* ^jurisdiction[0].coding[0].system = "urn:iso:std:iso:3166"
* ^jurisdiction[0].coding[0].code = #US
* ^jurisdiction[0].coding[0].display = "United States of America"
* ^content = #not-present
* ^experimental = false

RuleSet: NCPDPCopyrightNotice
* ^copyright = "National Council for Prescription Drugs Programs, Inc. (NCPDP) publications are owned by NCPDP, 9240 East Raintree Drive Scottsdale, AZ 85260, and protected by the copyright laws of the United States. 17 U.S.C. §101, et. seq. Permission is given to Council members to copy and use the work or any part thereof in connection with the business purposes of the Council members. The work may not be changed or altered. The work may be shared within the member company but may not be distributed and/or copied for/by others outside of the member’s company. The work may not be sold, used or exploited for commercial purposes. This permission may be revoked by NCPDP at any time. NCPDP is not responsible for any errors or damage as a result of the use of the work.

All material is provided as is, without warranty of any kind, expressed or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, completeness and non-infringement of third party rights. In no event shall NCPDP, its members or its contributors be liable for any claim, or any direct, special, indirect or consequential damages, or any damages whatsoever resulting from loss of use, data or profits, whether in an action of contract, negligence or other tortious action, arising out of or in connection with the use or performance of the material. Revised: September 2016"
/*
CodeSystem: NCPDPRejectCode
Title: "NCPDP Reject Code"
Description: "Code indicating the error encountered. Contains exception definitions for use when transaction processing cannot be completed. (NCPDP ECL 511-FB).

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPRejectCode"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPRejectCode
Title: "NCPDP Reject Code Value Set"
Description: "Code indicating the error encountered. Contains exception definitions for use when transaction processing cannot be completed. (NCPDP ECL 511-FB).

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPRejectCode
* insert NCPDPCopyrightNotice
* ^experimental = false

/*
CodeSystem: NCPDPDispensedAsWrittenOrProductSelectionCode
Title: "NCPDP Dispense As Written (DAW)/Product Selection Code"
Description: "Code indicating whether or not the prescriber's instructions regarding generic substitution were followed. (NCPDP ECL 408-D8)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPDispensedAsWrittenOrProductSelectionCode"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPDispensedAsWrittenOrProductSelectionCode
Title: "NCPDP Dispense As Written (DAW)/Product Selection Code Value Set"
Description: "Code indicating whether or not the prescriber's instructions regarding generic substitution were followed. (NCPDP ECL 408-D8)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPDispensedAsWrittenOrProductSelectionCode
* insert NCPDPCopyrightNotice
* ^experimental = false
/*
CodeSystem: NCPDPBrandGenericIndicator
Title: "NCPDP Brand Generic Indicator"
Description: "Denotes brand or generic drug dispensed. (NCPDP ECL 686)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPBrandGenericIndicator"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/

ValueSet: NCPDPBrandGenericIndicator
Title: "NCPDP Brand Generic Indicator Value Set"
Description: "Denotes brand or generic drug dispensed. (NCPDP ECL 686)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPBrandGenericIndicator
* insert NCPDPCopyrightNotice
* ^experimental = false

/*
CodeSystem: NCPDPPrescriptionOriginCode
Title: "NCPDP Prescription Origin Code"
Description: "Code indicating the origin of the prescription. Indicates whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy. (NCPDP ECL 419-DJ)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPPrescriptionOriginCode"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPPrescriptionOriginCode
Title: "NCPDP Prescription Origin Code Value Set"
Description: "Code indicating the origin of the prescription. Indicates whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy. (NCPDP ECL 419-DJ)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPPrescriptionOriginCode
* insert NCPDPCopyrightNotice
* ^experimental = false

/*
CodeSystem: NCPDPCompoundCode
Title: "NCPDP Compound Code"
Description: "Code indicating whether or not the prescription is a compound. (NCPDP ECL 406-D6)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* ^url = "http://terminology.hl7.org/CodeSystem/NCPDPCompoundCode"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert NCPDPCopyrightNotice
*/
ValueSet: NCPDPCompoundCode
Title: "NCPDP Compound Code Value Set"
Description: "Code indicating whether or not the prescription is a compound. (NCPDP ECL 406-D6)

Link to information about the code system - including how to obtain the content: [https://standards.ncpdp.org/Access-to-Standards.aspx](https://standards.ncpdp.org/Access-to-Standards.aspx)"

* codes from system $NCPDPCompoundCode
* insert NCPDPCopyrightNotice
* ^experimental = false

//  **************** FDA NDC ******************************


ValueSet: FDANationalDrugCode
Title: "National Drug Code (NDC) Value Set"
Description: "The Drug Listing Act of 1972 requires registered drug establishments to provide the Food and Drug Administration (FDA) with a current list of all drugs manufactured, prepared, propagated, compounded, or processed by it for commercial distribution.  (See Section 510 of the Federal Food, Drug, and Cosmetic Act (Act) (21 U.S.C. § 360)). Drug products are identified and reported using a unique, three-segment number, called the National Drug Code (NDC), which serves as a universal product identifier for drugs. FDA publishes the listed NDC numbers and the information submitted as part of the listing information in the NDC Directory which is updated daily.

The information submitted as part of the listing process, the NDC number, and the NDC Directory are used in the implementation and enforcement of the Act.

Users should note:

Starting June 1, 2011, only drugs for which electronic listings (SPL) have been submitted to FDA are included in the NDC Directory. Drugs for which listing information was last submitted to FDA on paper forms, prior to June 2009, are included on a separate file and will not be updated after June 2012.

Information regarding the FDA published NDC Directory can be found [here](https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory)

Users should note a few important items

*   The NDC Directory is updated daily.
*   The new NDC Directory contains ONLY information on final marketed drugs submitted to FDA in SPL electronic listing files by labelers.
*   The NDC Directory does not contain all listed drugs. The new version includes the final marketed drugs which listing information were submitted electronically. It does not include animal drugs, blood products, or human drugs that are not in final marketed form, such as Active Pharmaceutical Ingredients(APIs), drugs for further processing, drugs manufactured exclusively for a private label distributor, or drugs that are marketed solely as part of a kit or combination product or inner layer of a multi-level packaged product not marketed individually. For more information about how certain kits or multi-level packaged drugs are addressed in the new NDC Directory, see the NDC Directory Package File definitions document. For the FDA Online Label Repository page and additional resources go to: [FDA Online Label Repository](https://labels.fda.gov/)"
* codes from system $FDANationalDrugCode
* ^copyright = "NDC codes have no copyright acknowledgment or license requirements."
* ^experimental = false

ValueSet: FDANDCOrCompound
Title: "NDC or Compound Value Set"
Description: "Values will be the NDC Codes when the Compound Code value is 0 or 1.  When the Compound Code value = 2, the value will be the literal, ‘compound’"
* codes from system $FDANationalDrugCode
* include C4BBCompoundLiteral#compound
* ^experimental = false

// ***************************NUBC start ***********
RuleSet: AHANUBCCopyrightNotice
* ^copyright = "Licensing information can be found [here](https://www.nubc.org/license).

These codes are listed within the UB-04 Data Specifications Manual. The Official UB-04 Data Specifications Manual, copyrighted by the American Hospital Association, is the only official source of UB-04 billing information adopted by the National Uniform Billing Committee. No other publication—governmental or private/commercial—can be considered authoritative. The AHA wants to make you aware that the use of codes, descriptions, or any other content contained in the manual to be used in a software application, publication, or any other derivative work must be properly licensed by the AHA. If your organization uses or intends to use any of the codes or other related content from the manual in this manner, please contact the AHA’s licensing manager, Tim Carlson, at 312.893.6816 or email tcarlson@aha.org"


/*
CodeSystem: AHANUBCPatientDischargeStatus
Title: "NUBC Patient Discharge Status Codes"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 17 - Patient Discharge Status

These codes are used to convey the patient discharge status and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PatDischargeStatus"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCPatientDischargeStatus
Title: "NUBC Patient Discharge Status Codes Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 17 - Patient Discharge Status

These codes are used to convey the patient discharge status and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $AHANUBCPatientDischargeStatus
* insert AHANUBCCopyrightNotice
* ^experimental = false


/* FHIR-38278 - CARIN BB Present on Admission Code System URL different than THO
CodeSystem: AHANUBCPresentOnAdmission
Title: "NUBC Present On Admission Indicator Code System"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 67 - Present On Admission Indicator

These codes are used to report the principal diagnosis code (ICD-9 or ICD-10 code) and each of the secondary diagnoses.  The 8th character in that set (first 7 are ICD) is the location used to report whether or not a condition was present on admission. The present on admission code acts as a modifier and is used to further define another code, so as to say this ICD-10 code is for a condition that was/was not present on admission.  It should be noted that present on admission also appears in FL 72

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
* ^experimental = false

*/

ValueSet: CMSPresentOnAdmissionIndicator
Title: "CMS Present On Admission Indicator Codes Value Set"
Description: "This code system consists of Present on Admission (POA) indicators which are assigned to the principal and secondary diagnoses (as defined in Section II of the Official Guidelines for Coding and Reporting) and the external cause of injury codes to indicate the presence or absence of the diagnosis at the time of inpatient admission."
* codes from system $CMSPresentOnAdmissionIndicator
* ^copyright = "This ValueSet is not copyrighted."
* ^experimental = false

/*
CodeSystem: AHANUBCRevenueCodes
Title: "NUBC Revenue Codes"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 42 - Revenue Codes

These codes are used to convey the revenue code and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/RevenueCodes"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCRevenueCodes
Title: "NUBC Revenue Codes Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 42 - Revenue Codes

These codes are used to convey the revenue code and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $AHANUBCRevenueCodes
* insert AHANUBCCopyrightNotice
* ^experimental = false

/*
CodeSystem: AHANUBCTypeOfBill
Title: "NUBC Type Of Bill Codes"
Description: """The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 04 - Type of Bill Facility Codes
*   FL 04 - Type of Bill Frequency Codes

A code indicating the specific Type of Bill (TOB), e.g., hospital inpatient, outpatient, replacements, voids, etc. The first digit is a leading zero\*. The fourth digit defines the frequency of the bill for the institutional and electronic professional claim.

Note that with the advent of UB-04, the matrix methodology of constructing the first component of TOB codes according to digit position was abandoned in favor of specifying valid discrete codes. As a result, the first three digits in TOB have no underlying meaning.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"""
* ^url = "https://www.nubc.org/CodeSystem/TypeOfBill"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCTypeOfBill
Title: "NUBC Type of Bill Codes Value Set"
Description: """The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 04 - Type of Bill Facility Codes
*   FL 04 - Type of Bill Frequency Codes

A code indicating the specific Type of Bill (TOB), e.g., hospital inpatient, outpatient, replacements, voids, etc. The first digit is a leading zero\*. The fourth digit defines the frequency of the bill for the institutional and electronic professional claim.

Note that with the advent of UB-04, the matrix methodology of constructing the first component of TOB codes according to digit position was abandoned in favor of specifying valid discrete codes. As a result, the first three digits in TOB have no underlying meaning.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"""
* codes from system $AHANUBCTypeOfBill
* insert AHANUBCCopyrightNotice
* ^experimental = false

// 2021028 CAS: FHIR-31384 - NUBC Point Of Origin - newborns
/*
CodeSystem: AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn
Title: "NUBC Point Of Origin for Non-newborn"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

FL 15 - Point of Origin for Admission or Visit for Non-newborn
These codes are used to convey the patient point of origin for an admission or visit and are the property of the American Hospital Association

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PointOfOrigin"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

// 20210201 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
/*
CodeSystem: AHANUBCPointOfOriginForAdmissionOrVisitNewborn
Title: "NUBC Point Of Origin for Newborn"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

FL 15 - Point of Origin for Admission or Visit for Newborn
These codes are used to convey the patient point of origin for an admission or visit and are the property of the American Hospital Association

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PointOfOriginNewborn"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/
ValueSet: AHANUBCPointOfOriginForAdmissionOrVisit
Title: "NUBC Point Of Origin Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 15 - Point of Origin for Admission or Visit

These codes are used to convey the patient point of origin for an admission or visit and are the property of the American Hospital Association

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
// 20210226 CAS: https://jira.hl7.org/browse/FHIR-31384
* codes from system $AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn
// 20210201 CAS:  https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
* codes from system $AHANUBCPointOfOriginForAdmissionOrVisitNewborn
* insert AHANUBCCopyrightNotice
* ^experimental = false

/*
CodeSystem: AHANUBCPriorityTypeOfAdmissionOrVisit
Title: "NUBC Priority (Type) of Admission or Visit"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 14 - Priority (Type) of Admission or Visit

These codes are used to convey the priority of an admission or visit and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert AHANUBCCopyrightNotice
*/

ValueSet: AHANUBCPriorityTypeOfAdmissionOrVisit
Title: "NUBC Priority (Type) of Admission or Visit Value Set"
Description: "The UB-04 Data File contains the complete set of NUBC codes. Every code in the range of possible codes is accounted for sequentially. There are no gaps because all used and unused codes are identified.

This code system consists of the following:

*   FL 14 - Priority (Type) of Admission or Visit

These codes are used to convey the priority of an admission or visit and are the property of the American Hospital Association.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $AHANUBCPriorityTypeOfAdmissionOrVisit
* insert AHANUBCCopyrightNotice
* ^experimental = false

//********start: AMA / HCPCS************

RuleSet: AMACopyrightNotice
* ^copyright = "CPT is copyrighted by the AMA and as such must be licensed to be used in electronic products or other forms.

Any individual or entity using CPT content needs permission or a license (i.e., a written agreement authorizing use of CPT codes) from the AMA or an authorized distributor.

 Examples where a license and royalty payment are required (not an exhaustive list):

*   Use of CPT content to develop, test, maintain, and service products that use or rely on CPT
*   Use of CPT content in products that are licensed or distributed by a vendor, company or other third party
*   Distribution of products that require use of CPT content
*   Any proposed use of CPT content including the creation of derivative works of CPT content, translations or localized versions of CPT content

For more information see [here](https://www.ama-assn.org/practice-management/cpt/ama-cpt-licensing-overview)

If you have a question or would like to license CPT content,  please see [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020).

Any HL7 product referencing CPT must include the following verbiage:

CPT © Copyright 2019 American Medical Association. All rights reserved. AMA and CPT are registered trademarks of the American Medical Association.

Note: the year is always based on the publication year of the code set. CPT releases the August prior to the effective year (e.g., CPT 2020 code set = copyright 2019 or CPT 2021 code set = copyright 2020)."

RuleSet: HCPCSCopyrightNotice
* ^copyright = "See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)"


RuleSet: ADACopyrightNotice
* ^copyright = "American Dental Association (ADA) developed Current Dental Terminology (CDT®) as a standardized language to help dentists and other members of the healthcare industry communicate effectively. CDT is revised and updated every year.

The ADA is the exclusive copyright owner of CDT, the Code on Dental Procedures and Nomenclature (the Code), and the ADA Dental Claim Form. Except as permitted by law, all use, copying or distribution of CDT, or any portion thereof (including the Code on Dental Procedures and Nomenclature) in any product or services (including works prepared for clients by consultants and other professionals), whether in printed, electronic or other format, requires a valid commercial user license from the ADA.

For more information : https://www.ada.org/en/publications/ada-catalog/cdt-products/licensing-for-commercial-users"


// 20210201 CAS:  https://jira.hl7.org/browse/FHIR-30413 - Add HIPPS to Institutional item.productOrService Value Set
RuleSet: HIPPSCopyrightNotice
* ^copyright = "CMS maintains HIPPS. There are no known constraints on the use of HIPPS. See more information about HIPPS codes [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes)"


/*
CodeSystem: CMSHCPCSCodes
Title: "Healthcare Common Procedure Coding System (HCPCS) level II alphanumeric codes"
Description: "The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data."
* ^url =  "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert HCPCSCopyrightNotice
*/


// 20210201 CAS: Placeholder fix for https://jira.hl7.org/browse/FHIR-30413 - Add HIPPS to Institutional item.productOrService Value Set
// Approach adding a special valueset for inpatient
/*
CodeSystem: CMSHIPPSCodes
Title: "Health Insurance Prospective Payment System (HIPPS)"
Description: "Health Insurance Prospective Payment System (HIPPS) rate codes represent specific sets
of patient characteristics (or case-mix groups) health insurers use to make payment
determinations under several prospective payment systems. Case-mix groups are
developed based on research into utilization patterns among various provider types. For
the payment systems that use HIPPS codes, clinical assessment data is the basic input. A
standard patient assessment instrument is interpreted by case-mix grouping software
algorithms, which assign the case mix group. For payment purposes, at least one HIPPS
code is defined to represent each case-mix group. These HIPPS codes are reported on
claims to insurers.
Institutional providers use HIPPS codes on claims in association with special revenue
codes. One revenue code is defined for each prospective payment system that requires
HIPPS codes. HIPPS codes are placed in data element SV202 on the electronic 837
institutional claims transaction, using an HP qualifier, or in Form Locator (FL) 44
(\"HCPCS/rate\") on a paper UB-04 claims form. The associated revenue code is placed in
data element SV201 or in FL 42. In certain circumstances, multiple HIPPS codes may
appear on separate lines of a single claim.

HIPPS codes are alpha-numeric codes of five digits. Each code contains intelligence,
with certain positions of the code indicating the case mix group itself, and other positions
providing additional information. The additional information varies among HIPPS codes
pertaining to different payment systems, but often provides information about the clinical
assessment used to arrive at the code. Which positions of the code carry the case mix
group information may also vary by payment systems."
* ^url =  "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert HIPPSCopyrightNotice
*/

ValueSet: AMACPTCMSHCPCSProcedureCodes
// 20210215 CAS: FHIR-31074 - Please shorten the titles for the IP, OP, and Professional Procedure code and modifiers ValueSets
Title: "Procedure Codes - AMA CPT - CMS HCPCS Value Set"
Description: "The Value Set is a combination of two Code Systems: CPT (HCPCS I) and HCPCS II procedure codes. They are submitted by providers to payers to convey the specific procedure performed. Procedure Codes leverage US Core Procedure Codes composition.

The target set for this value set are the procedure codes from the CPT and HCPCS files.

The Current Procedural Terminology (CPT) code set, created and maintained by the American Medical Association, is the language of medicine today and the code to its future. This system of terminology is the most widely accepted medical nomenclature used to report medical procedures and services under public and private health insurance programs. CPT coding is also used for administrative management purposes such as claims processing and developing guidelines for medical care review. Each year, via a rigorous, evidence-based and transparent process, the independent CPT Editorial Panel revises, creates or deletes hundreds of codes in order to reflect current medical practice.

Designated by the U.S. Department of Health and Human Services under the Health Insurance Portability and Accountability Act (HIPAA) as a national coding set for physician and other health care professional services and procedures, CPT’s evidence-based codes accurately encompass the full range of health care services.

All CPT codes are five-digits and can be either numeric or alphanumeric, depending on the category. CPT code descriptors are clinically focused and utilize common standards so that a diverse set of users can have common understanding across the clinical health care paradigm.

There are various types of CPT codes:

**Category I:** These codes have descriptors that correspond to a procedure or service. Codes range from 00100–99499 and are generally ordered into sub-categories based on procedure/service type and anatomy.

**Category II:** These alphanumeric tracking codes are supplemental codes used for performance measurement. Using them is optional and not required for correct coding.

**Category III:** These are temporary alphanumeric codes for new and developing technology, procedures and services. They were created for data collection, assessment and in some instances, payment of new services and procedures that currently don’t meet the criteria for a Category I code.

**Proprietary Laboratory Analyses (PLA) codes:** Recently added to the CPT code set, these codes describe proprietary clinical laboratory analyses and can be either provided by a single (solesource) laboratory or licensed or marketed to multiple providing laboratories that are cleared or approved by the Food and Drug Administration (FDA)). This category includes but is not limited to Advanced Diagnostic Laboratory Tests (ADLTs) and Clinical Diagnostic Laboratory Tests (CDLTs), as defined under the Protecting Access to Medicare Act of 2014 (PAMA).

To obtain CPT, please see the license request form [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020)

The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data."
* include $HL7DataAbsentReason#not-applicable "Not Applicable"
* codes from system $CPT
* codes from system $CMSHCPCSCodes
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved

See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)"
* ^experimental = false









// 20210201 CAS: https://jira.hl7.org/browse/FHIR-30413 - Add HIPPS to Institutional item.productOrService Value Set
// Approach adding a special valueset for inpatient
ValueSet: C4BBEOBInstitutionalProcedureCodes
// 20210215 CAS: FHIR-31074 - Please shorten the titles for the IP, OP, and Professional Procedure code and modifiers ValueSets
Title: "Procedure Codes - AMA CPT - CMS HCPCS - CMS HIPPS Value Set"
Description: "The Value Set is a combination of three Code Systems: CPT (HCPCS I), HCPCS II procedure codes, and HIPPS rate codes. They are submitted by providers to payers to convey the specific procedure performed. Procedure Codes leverage US Core Procedure Codes composition.

The target set for this value set are the procedure codes from the CPT and HCPCS files and the rate codes from the HIPPS files.

The Current Procedural Terminology (CPT) code set, created and maintained by the American Medical Association, is the language of medicine today and the code to its future. This system of terminology is the most widely accepted medical nomenclature used to report medical procedures and services under public and private health insurance programs. CPT coding is also used for administrative management purposes such as claims processing and developing guidelines for medical care review. Each year, via a rigorous, evidence-based and transparent process, the independent CPT Editorial Panel revises, creates or deletes hundreds of codes in order to reflect current medical practice.

Designated by the U.S. Department of Health and Human Services under the Health Insurance Portability and Accountability Act (HIPAA) as a national coding set for physician and other health care professional services and procedures, CPT’s evidence-based codes accurately encompass the full range of health care services.

All CPT codes are five-digits and can be either numeric or alphanumeric, depending on the category. CPT code descriptors are clinically focused and utilize common standards so that a diverse set of users can have common understanding across the clinical health care paradigm.

There are various types of CPT codes:

**Category I:** These codes have descriptors that correspond to a procedure or service. Codes range from 00100–99499 and are generally ordered into sub-categories based on procedure/service type and anatomy.

**Category II:** These alphanumeric tracking codes are supplemental codes used for performance measurement. Using them is optional and not required for correct coding.

**Category III:** These are temporary alphanumeric codes for new and developing technology, procedures and services. They were created for data collection, assessment and in some instances, payment of new services and procedures that currently don’t meet the criteria for a Category I code.

**Proprietary Laboratory Analyses (PLA) codes:** Recently added to the CPT code set, these codes describe proprietary clinical laboratory analyses and can be either provided by a single (solesource) laboratory or licensed or marketed to multiple providing laboratories that are cleared or approved by the Food and Drug Administration (FDA)). This category includes but is not limited to Advanced Diagnostic Laboratory Tests (ADLTs) and Clinical Diagnostic Laboratory Tests (CDLTs), as defined under the Protecting Access to Medicare Act of 2014 (PAMA).

To obtain CPT, please see the license request form [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020)

The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data.

The Health Insurance Prospective Payment System (HIPPS) rate codes represent specific sets
of patient characteristics (or case-mix groups) health insurers use to make payment
determinations under several prospective payment systems. Case-mix groups are
developed based on research into utilization patterns among various provider types. For
the payment systems that use HIPPS codes, clinical assessment data is the basic input. A
standard patient assessment instrument is interpreted by case-mix grouping software
algorithms, which assign the case mix group. For payment purposes, at least one HIPPS
code is defined to represent each case-mix group. These HIPPS codes are reported on
claims to insurers.
Institutional providers use HIPPS codes on claims in association with special revenue
codes. One revenue code is defined for each prospective payment system that requires
HIPPS codes. HIPPS codes are placed in data element SV202 on the electronic 837
institutional claims transaction, using an HP qualifier, or in Form Locator (FL) 44
(\"HCPCS/rate\") on a paper UB-04 claims form. The associated revenue code is placed in
data element SV201 or in FL 42. In certain circumstances, multiple HIPPS codes may
appear on separate lines of a single claim.

HIPPS codes are alpha-numeric codes of five digits. Each code contains intelligence,
with certain positions of the code indicating the case mix group itself, and other positions
providing additional information. The additional information varies among HIPPS codes
pertaining to different payment systems, but often provides information about the clinical
assessment used to arrive at the code. Which positions of the code carry the case mix
group information may also vary by payment systems."
* codes from system $CPT
* codes from system $CMSHCPCSCodes
* codes from system $CMSHIPPSCodes
* include $HL7DataAbsentReason#not-applicable "Not Applicable"
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved

See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)

CMS maintains HIPPS. There are no known constraints on the use of HIPPS. See more information about HIPPS codes [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/ProspMedicareFeeSvcPmtGen/HIPPSCodes)"
* ^experimental = false

ValueSet:  AMACPTCMSHCPCSModifiers
// 20210215 CAS: FHIR-31074 - Please shorten the titles for the IP, OP, and Professional Procedure code and modifiers ValueSets
Title: "Procedure Modifier Codes - AMA CPT - CMS HCPCS Value Set"
Description: "The Value Set is a combination of two Code Systems: CPT (HCPCS I) and HCPCS II procedure code modifiers. Modifiers help further describe a procedure code without changing its definition.

The target set for this value set are the procedure code modifiers from the CPT and HCPCS files.

The Current Procedural Terminology (CPT) code set, created and maintained by the American Medical Association, is the language of medicine today and the code to its future. This system of terminology is the most widely accepted medical nomenclature used to report medical procedures and services under public and private health insurance programs. CPT coding is also used for administrative management purposes such as claims processing and developing guidelines for medical care review. Each year, via a rigorous, evidence-based and transparent process, the independent CPT Editorial Panel revises, creates or deletes hundreds of codes in order to reflect current medical practice.

Designated by the U.S. Department of Health and Human Services under the Health Insurance Portability and Accountability Act (HIPAA) as a national coding set for physician and other health care professional services and procedures, CPT’s evidence-based codes accurately encompass the full range of health care services.

All CPT codes are five-digits and can be either numeric or alphanumeric, depending on the category. CPT code descriptors are clinically focused and utilize common standards so that a diverse set of users can have common understanding across the clinical health care paradigm.

There are various types of CPT codes:

**Category I:** These codes have descriptors that correspond to a procedure or service. Codes range from 00100–99499 and are generally ordered into sub-categories based on procedure/service type and anatomy.

**Category II:** These alphanumeric tracking codes are supplemental codes used for performance measurement. Using them is optional and not required for correct coding.

**Category III:** These are temporary alphanumeric codes for new and developing technology, procedures and services. They were created for data collection, assessment and in some instances, payment of new services and procedures that currently don’t meet the criteria for a Category I code.

**Proprietary Laboratory Analyses (PLA) codes:** Recently added to the CPT code set, these codes describe proprietary clinical laboratory analyses and can be either provided by a single (solesource) laboratory or licensed or marketed to multiple providing laboratories that are cleared or approved by the Food and Drug Administration (FDA)). This category includes but is not limited to Advanced Diagnostic Laboratory Tests (ADLTs) and Clinical Diagnostic Laboratory Tests (CDLTs), as defined under the Protecting Access to Medicare Act of 2014 (PAMA).

To obtain CPT, please see the license request form [here](http://info.commerce.ama-assn.org/ama-data-file-request-2020)

The Level II HCPCS codes, which are established by CMS's Alpha-Numeric Editorial Panel, primarily represent items and supplies and non-physician services not covered by the American Medical Association's Current Procedural Terminology-4 (CPT-4) codes; Medicare, Medicaid, and private health insurers use HCPCS procedure and modifier codes for claims processing.  Level II alphanumeric procedure and modifier codes comprise the A to V range.

General information can be found here: [https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo)

Releases can be found here: [https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets](https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets)

These files contain the Level II alphanumeric HCPCS procedure and modifier codes, their long and short descriptions, and applicable Medicare administrative, coverage and pricing data."
* codes from system $CPT
* codes from system $CMSHCPCSCodes
* ^copyright = "Current Procedural Terminology (CPT) is copyright 2020 American Medical Association. All rights reserved

See information on the use of HCPCS Level I (proprietary and owned by American Medical Association) and Level II codes [here](https://www.cms.gov/Medicare/Coding/MedHCPCSGenInfo/HCPCS_Coding_Questions)"
* ^experimental = false

/*
// ******** American Dental Association CDT ********
CodeSystem: ADADentalProcedureCode
Title: "ADA Code on Dental Procedures and Nomenclature"
Description: "The purpose of the CDT Code is to achieve uniformity, consistency and specificity in accurately documenting dental treatment. One use of the CDT Code is to provide for the efficient processing of dental claims, and another is to populate an Electronic Health Record.

On August 17, 2000 the CDT Code was named as a HIPAA standard code set. Any claim submitted on a HIPAA standard electronic dental claim must use dental procedure codes from the version of the CDT Code in effect on the date of service. The CDT Code is also used on paper dental claims, and the ADA's paper claim form data content reflects the HIPAA electronic standard.

CDT is published Annually. Versions should refect the YYYY of the release.

The Council on Dental Benefit Programs (CDBP) has ADA Bylaws responsibility for CDT Code maintenance. To fulfill this obligation CDBP established its Code Maintenance Committee (CMC), a body that includes representatives from various sectors of the dental community (e.g., ADA; dental specialty organizations; third-party payers). CMC members, by their votes, determine which of the requested actions are incorporated into the CDT Code.

Please see Code Maintenance Committee (CMC) page for information about the CMC's members and activities.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* ^url = "http://ada.org/cdt"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert ADACopyrightNotice
*/


ValueSet: ADADentalProcedureCode
Title: "ADA Code on Dental Procedures and Nomenclature Value Set"
Description: "The purpose of the CDT Code is to achieve uniformity, consistency and specificity in accurately documenting dental treatment. One use of the CDT Code is to provide for the efficient processing of dental claims, and another is to populate an Electronic Health Record.

On August 17, 2000 the CDT Code was named as a HIPAA standard code set. Any claim submitted on a HIPAA standard electronic dental claim must use dental procedure codes from the version of the CDT Code in effect on the date of service. The CDT Code is also used on paper dental claims, and the ADA's paper claim form data content reflects the HIPAA electronic standard.

CDT is published Annually. Versions should refect the YYYY of the release.

The Council on Dental Benefit Programs (CDBP) has ADA Bylaws responsibility for CDT Code maintenance. To fulfill this obligation CDBP established its Code Maintenance Committee (CMC), a body that includes representatives from various sectors of the dental community (e.g., ADA; dental specialty organizations; third-party payers). CMC members, by their votes, determine which of the requested actions are incorporated into the CDT Code.

Please see Code Maintenance Committee (CMC) page for information about the CMC's members and activities.

To obtain the underlying code systems, please see information [here](https://www.nubc.org/subscription-information)"
* codes from system $ADADentalProcedureCode
* include $HL7DataAbsentReason#not-applicable "Not Applicable"
* insert ADACopyrightNotice
* ^experimental = false


// ******** DRGs ***************
/*
CodeSystem: CMSMSDRG
Title: "Medicare Severity Diagnosis Related Groups (MS-DRGs)"
Description: "Section 1886(d) of the Act specifies that the Secretary shall establish a classification system (referred to as DRGs) for inpatient discharges and adjust payments under the IPPS based on appropriate weighting factors assigned to each DRG.  Therefore, under the IPPS, we[CMS] pay for inpatient hospital services on a rate per discharge basis that varies according to the DRG to which a beneficiary's stay is assigned. The formula used to calculate payment for a specific case multiplies an individual hospital's payment rate per case by the weight of the DRG to which the case is assigned.  Each DRG weight represents the average resources required to care for cases in that particular DRG, relative to the average resources used to treat cases in all DRGs.

Congress recognized that it would be necessary to recalculate the DRG relative weights periodically to account for changes in resource consumption.  Accordingly, section 1886(d)(4)(C) of the Act requires that the Secretary adjust the DRG classifications and relative weights at least annually.  These adjustments are made to reflect changes in treatment patterns, technology, and any other factors that may change the relative use of hospital resources.

Currently, cases are classified into Medicare Severity Diagnosis Related Groups (MS-DRGs) for payment under the IPPS based on the following information reported by the hospital: the principal diagnosis, up to 25 additional diagnoses, and up to 25 procedures performed during the stay.  In a small number of MS-DRGs, classification is also based on the age, sex, and discharge status of the patient.  Effective October 1, 2015, the diagnosis and procedure information is reported by the hospital using codes from the International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM) and the International Classification of Diseases, Tenth Revision, Procedure Coding System (ICD-10-PCS).

Content can be obtained on the CMS hosted page located [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software)"
* ^url = "https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain MS-DRGs used throughout the US health care industry. The CMS MS-DRGs are free to use without restriction."
*/
/*
CodeSystem: THREEMAPDRG
Title: "All Patient Diagnosis Related Groups (AP-DRGs)"
Description: """In 1987, the state of New York passed legislation instituting a DRG-based prospective payment system for all non-Medicare patients. The legislation included a requirement that the New York State Department of Health (NYDH) evaluate the applicability of the DRGs to a non-Medicare population. In particular, the legislation required that the DRGs be evaluated with respect to neonates and patients with Human Immunodeficiency Virus (HIV) infections. NYDH entered into an agreement with 3M HIS to assist with the evaluation of the need for DRG modifications as well as to make the necessary changes in the DRG definitions and software. The DRG definitions developed by NYDH and 3M HIS are referred to as the All Patient DRGs (AP DRGs).

The AP DRG code system is no longer updated as DRG classification system evolved to APR DRG. Evolution of DRG is summarized in the APR DRG methodology overview as well as in various articles.


Goldfield N. The evolution of diagnosis-related groups (DRGs): from its beginnings in case-mix and resource use theory, to its implementation for payment and now for its current utilization for quality within and outside the hospital. Qual Manage Health Care. 2010;19(1)3-16.


Averill RF, Goldfield NI, Muldoon J, Steinbeck BA, Grant TM. A closer look at All-Patient Refined DRGs. J AHIMA. 2002;73(1):46-49.

[https://apps.3mhis.com/docs/Groupers/All\_Patient\_Refined\_DRG/Methodology\_overview\_GRP041/grp041\_aprdrg\_meth\_overview.pdf](https://apps.3mhis.com/docs/Groupers/All_Patient_Refined_DRG/Methodology_overview_GRP041/grp041_aprdrg_meth_overview.pdf)"""
* ^url = "http://uri.hddaccess.com/cs/apdrg"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = ""
*/
/*
CodeSystem: THREEMAPRDRG
Title: "All Patient Refined Diagnosis Related Groups (APR-DRGs)"
Description: "3M APR DRGs have become the standard across the U.S. for classifying hospital inpatients in non-Medicare populations. As of January 2019, 27 state Medicaid programs use 3M APR DRGs to pay hospitals, as do approximately a dozen commercial payers and Medicaid managed care organizations. Over 2,400 hospitals have licensed 3M APR DRGs to verify payment and analyze their internal operations.

The 3M APR DRG methodology classifies hospital inpatients according to their reason for admission, severity of illness and risk of mortality.

Each year 3M calculates and releases a set of statistics for each 3M APR DRG based on our analysis of large national data sets. These statistics include a relative weight for each 3M APR DRG. The relative weight reflects the average hospital resource use for a patient in that 3M APR DRG relative to the average hospital resource use of all inpatients. Please note that payers and other users of the 3M APR DRG methodology are responsible for ensuring that they use relative weights that are appropriate for their particular populations. The 3M APR DRG statistics also include data for each 3M APR DRG on relative frequency, average length of stay, average charges and incidence of mortality.

3M APR DRGs can be rolled up into broader categories. The 326 base DRGs roll up into 25 major diagnostic categories (MDCs) plus a pre-MDC category. An example is MDC 04, Diseases and Disorders of the Respiratory System. As well, each 3M APR DRG is assigned to a service line that is consistent with the outpatient service lines that are defined by the 3M™ Enhanced Ambulatory Patient Groups (EAPGs).

Link to information about the code system - including how to obtain the content from 3M - is available [here.](https://www.3m.com/3M/en_US/health-information-systems-us/drive-value-based-care/patient-classification-methodologies/apr-drgs/)"
* ^url = "http://uri.hddaccess.com/cs/aprdrg"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "The clinical logic is maintained by a team of 3M clinicians, data analysts, nosologists, programmers and economists. The logic is proprietary to 3M but is available for licensees to view in an online definitions manual.

To license APR DRG from 3M, see request form [here](https://engage.3m.com/PPS_Groupers_Contact)"
*/

ValueSet: CMSMS3MAPAPRDRG
Title: "MS-DRGs - AP-DRGs - APR-DRGs Value Set"
Description: """This value set defines three sets of DRGs, MS-DRGs (Medicare Severity Diagnosis Related Groups), APR-DRGs (All Patient Refined Diagnosis Related Groups) and AP-DRGs (All Patient Diagnosis Related Groups). Identifying a DRG code requires a version.

**MS-DRGs**

Section 1886(d) of the Act specifies that the Secretary shall establish a classification system (referred to as DRGs) for inpatient discharges and adjust payments under the IPPS based on appropriate weighting factors assigned to each DRG.  Therefore, under the IPPS, we[CMS] pay for inpatient hospital services on a rate per discharge basis that varies according to the DRG to which a beneficiary's stay is assigned. The formula used to calculate payment for a specific case multiplies an individual hospital's payment rate per case by the weight of the DRG to which the case is assigned.  Each DRG weight represents the average resources required to care for cases in that particular DRG, relative to the average resources used to treat cases in all DRGs.

Congress recognized that it would be necessary to recalculate the DRG relative weights periodically to account for changes in resource consumption.  Accordingly, section 1886(d)(4)(C) of the Act requires that the Secretary adjust the DRG classifications and relative weights at least annually.  These adjustments are made to reflect changes in treatment patterns, technology, and any other factors that may change the relative use of hospital resources.

Currently, cases are classified into Medicare Severity Diagnosis Related Groups (MS-DRGs) for payment under the IPPS based on the following information reported by the hospital: the principal diagnosis, up to 25 additional diagnoses, and up to 25 procedures performed during the stay.  In a small number of MS-DRGs, classification is also based on the age, sex, and discharge status of the patient.  Effective October 1, 2015, the diagnosis and procedure information is reported by the hospital using codes from the International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM) and the International Classification of Diseases, Tenth Revision, Procedure Coding System (ICD-10-PCS).

Content can be obtained on the CMS hosted page located [here](https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/AcuteInpatientPPS/MS-DRG-Classifications-and-Software)

**APR-DRGs**

3M APR DRGs have become the standard across the U.S. for classifying hospital inpatients in non-Medicare populations. As of January 2019, 27 state Medicaid programs use 3M APR DRGs to pay hospitals, as do approximately a dozen commercial payers and Medicaid managed care organizations. Over 2,400 hospitals have licensed 3M APR DRGs to verify payment and analyze their internal operations.

The 3M APR DRG methodology classifies hospital inpatients according to their reason for admission, severity of illness and risk of mortality.

Each year 3M calculates and releases a set of statistics for each 3M APR DRG based on our analysis of large national data sets. These statistics include a relative weight for each 3M APR DRG. The relative weight reflects the average hospital resource use for a patient in that 3M APR DRG relative to the average hospital resource use of all inpatients. Please note that payers and other users of the 3M APR DRG methodology are responsible for ensuring that they use relative weights that are appropriate for their particular populations. The 3M APR DRG statistics also include data for each 3M APR DRG on relative frequency, average length of stay, average charges and incidence of mortality.

3M APR DRGs can be rolled up into broader categories. The 326 base DRGs roll up into 25 major diagnostic categories (MDCs) plus a pre-MDC category. An example is MDC 04, Diseases and Disorders of the Respiratory System. As well, each 3M APR DRG is assigned to a service line that is consistent with the outpatient service lines that are defined by the 3M™ Enhanced Ambulatory Patient Groups (EAPGs).

Link to information about the code system - including how to obtain the content from 3M - is available [here.](https://www.3m.com/3M/en_US/health-information-systems-us/drive-value-based-care/patient-classification-methodologies/apr-drgs/).

**AP-DRGs**

In 1987, the state of New York passed legislation instituting a DRG-based prospective payment system for all non-Medicare patients. The legislation included a requirement that the New York State Department of Health (NYDH) evaluate the applicability of the DRGs to a non-Medicare population. In particular, the legislation required that the DRGs be evaluated with respect to neonates and patients with Human Immunodeficiency Virus (HIV) infections. NYDH entered into an agreement with 3M HIS to assist with the evaluation of the need for DRG modifications as well as to make the necessary changes in the DRG definitions and software. The DRG definitions developed by NYDH and 3M HIS are referred to as the All Patient DRGs (AP DRGs).

The AP DRG code system is no longer updated as DRG classification system evolved to APR DRG. Evolution of DRG is summarized in the APR DRG methodology overview as well as in various articles.


Goldfield N. The evolution of diagnosis-related groups (DRGs): from its beginnings in case-mix and resource use theory, to its implementation for payment and now for its current utilization for quality within and outside the hospital. Qual Manage Health Care. 2010;19(1)3-16.


Averill RF, Goldfield NI, Muldoon J, Steinbeck BA, Grant TM. A closer look at All-Patient Refined DRGs. J AHIMA. 2002;73(1):46-49.

[https://apps.3mhis.com/docs/Groupers/All\_Patient\_Refined\_DRG/Methodology\_overview\_GRP041/grp041\_aprdrg\_meth\_overview.pdf](https://apps.3mhis.com/docs/Groupers/All_Patient_Refined_DRG/Methodology_overview_GRP041/grp041_aprdrg_meth_overview.pdf)"""

* codes from system $CMSMSDRG
* codes from system $THREEMAPDRG
* codes from system $THREEMAPRDRG
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain MS-DRGs used throughout the US health care industry. The CMS MS-DRGs are free to use without restriction.

The clinical logic is maintained by a team of 3M clinicians, data analysts, nosologists, programmers and economists. The logic is proprietary to 3M but is available for licensees to view in an online definitions manual.

To license APR DRG from 3M, see request form [here](https://engage.3m.com/PPS_Groupers_Contact)"
* ^experimental = false

// ******** Place of Service ***************
/*CodeSystem: CMSPlaceofServiceCodes
Title: "CMS Place of Service Codes (POS)"
Description: "Place of Service Codes are two-digit codes placed on health care professional claims to indicate the setting in which a service was provided. The Centers for Medicare & Medicaid Services (CMS) maintain POS codes used throughout the health care industry.

This code set is required for use in the implementation guide adopted as the national standard for electronic transmission of professional health care claims under the provisions of the Health Insurance Portability and Accountability Act of 1996 (HIPAA). HIPAA directed the Secretary of HHS to adopt national standards for electronic transactions. These standard transactions require all health plans and providers to use standard code sets to populate data elements in each transaction. The Transaction and Code Set Rule adopted the ASC X12N-837 Health Care Claim: Professional, volumes 1 and 2, as the standard for electronic submission of professional claims. This standard names the POS code set currently maintained by CMS as the code set to be used for describing sites of service in such claims. POS information is often needed to determine the acceptability of direct billing of Medicare, Medicaid and private insurance services provided by a given provider.

Current codes can be obtained [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set)"
* ^url = "https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain Place Of Service (POS) codes used throughout the US health care industry. The CMS POS codes are free to use without restriction."
*/

ValueSet: CMSPlaceofServiceCodes
Title: "CMS Place of Service Codes (POS) Value Set"
Description: "Place of Service Codes are two-digit codes placed on health care professional claims to indicate the setting in which a service was provided. The Centers for Medicare & Medicaid Services (CMS) maintain POS codes used throughout the health care industry.

This code set is required for use in the implementation guide adopted as the national standard for electronic transmission of professional health care claims under the provisions of the Health Insurance Portability and Accountability Act of 1996 (HIPAA). HIPAA directed the Secretary of HHS to adopt national standards for electronic transactions. These standard transactions require all health plans and providers to use standard code sets to populate data elements in each transaction. The Transaction and Code Set Rule adopted the ASC X12N-837 Health Care Claim: Professional, volumes 1 and 2, as the standard for electronic submission of professional claims. This standard names the POS code set currently maintained by CMS as the code set to be used for describing sites of service in such claims. POS information is often needed to determine the acceptability of direct billing of Medicare, Medicaid and private insurance services provided by a given provider.

Current codes can be obtained [here](https://www.cms.gov/Medicare/Coding/place-of-service-codes/Place_of_Service_Code_Set)"
* codes from system $CMSPlaceofServiceCodes
* ^copyright = "The Centers for Medicare & Medicaid Services (CMS) maintain Place Of Service (POS) codes used throughout the US health care industry. The CMS POS codes are free to use without restriction."
* ^experimental = false

// ******** CARCs / RARCs ***************

//  *** @ Saul - No change to CodeSystem CARCs ; RARCs are new
/*
CodeSystem: X12ClaimAdjustmentReasonCodes
Title: "X12 Claim Adjustment Reason Codes"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

The X12 Claim Adjustment Reason Codes describe why a claim or service line was paid differently than it was billed. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.

External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer can be found here:

[https://x12.org/codes](https://x12.org/codes)

Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
* ^url = "https://x12.org/codes/claim-adjustment-reason-codes"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."
*/
/*
CodeSystem: CMSRemittanceAdviceRemarkCodes
Title: "X12 Remittance Advice Remark Codes"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

Remittance Advice Remark Codes (RARCs) are used to provide additional explanation for an adjustment already described by a Claim Adjustment Reason Code (CARC) or to convey information about remittance processing.

Each RARC identifies a specific message as shown in the Remittance Advice Remark Code List. There are two types of RARCs, supplemental and informational. The majority of the RARCs are supplemental; these are generally referred to as RARCs without further distinction. Supplemental RARCs provide additional explanation for an adjustment already described by a CARC. The second type of RARC is informational; these RARCs are all prefaced with Alert: and are often referred to as Alerts. Alerts are used to convey information about remittance processing and are never related to a specific adjustment or CARC.

External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer, including the RARC codes. Can be found here:

[https://x12.org/codes](https://x12.org/codes)

Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
* ^url = "https://x12.org/codes/remittance-advice-remark-codes"
//* ^content = #complete
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."
*/

ValueSet: X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
Title: "X12 Claim Adjustment Reason Codes - Remittance Advice Remark Codes Value Set"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

The X12 Claim Adjustment Reason Codes describe why a claim or service line was paid differently than it was billed. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.

Remittance Advice Remark Codes (RARCs) are used to provide additional explanation for an adjustment already described by a Claim Adjustment Reason Code (CARC) or to convey information about remittance processing.

Each RARC identifies a specific message as shown in the Remittance Advice Remark Code List. There are two types of RARCs, supplemental and informational. The majority of the RARCs are supplemental; these are generally referred to as RARCs without further distinction. Supplemental RARCs provide additional explanation for an adjustment already described by a CARC. The second type of RARC is informational; these RARCs are all prefaced with Alert: and are often referred to as Alerts. Alerts are used to convey information about remittance processing and are never related to a specific adjustment or CARC.

External code lists maintained by X12 and external code lists maintained by others and distributed by WPC on behalf of the maintainer can be found here:

[https://x12.org/codes](https://x12.org/codes)

Click on the name of any external code list to access more information about the code list, view the codes, or submit a maintenance request. These external code lists were previously published on either [www.wpc-edi.com/reference](http://www.wpc-edi.com/reference) or [www.x12.org/codes](http://www.x12.org/codes)."
* codes from system $X12ClaimAdjustmentReasonCodes
* codes from system $CMSRemittanceAdviceRemarkCodes
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com

The Centers for Medicare & Medicaid Services (CMS) maintain Remittance Advice Remark Codes (RARC) used throughout the US health care industry."
* ^experimental = false


/* FHIR-46778 - Move the X12 Ambulance Transport Codes Code System to THO

//  *** @ Saul - No change to CodeSystem CARCs ; RARCs are new
CodeSystem: X12AmbulanceTransportReasonCodes
Title: "X12 Ambulance Transport Reason Codes Code System"
Description: "X12, chartered by the American National Standards Institute for more than 40 years, develops and maintains EDI standards and XML schemas which drive business processes globally. X12's diverse membership includes technologists and business process experts in health care, insurance, transportation, finance, government, supply chain and other industries.

The X12 Ambulance Transport Reason Codes indicate the reason for ambulance transport. These codes are listed within an X12 implementation guide (TR3) and maintained by X12.

A list of codes and associated descriptions established, maintained, and published as part of an X12 Standard.

These codes are listed within an X12 implementation guide maintained by X12. All X12 work products are copyrighted. See https://x12.org/products/licensing-program for licensing terms and conditions."
* ^url = $X12AmbulanceTransReas
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* ^content = #not-present
* ^copyright = "**Intellectual Property Information**

All X12 products are subject to this IP policy, including published and draft works.

X12 is the only organization authorized to grant permission for use of X12 products. Users of all X12 products should make sure that they understand the permissible uses, as well as the limitations on such usage, as outlined below.

Additional IP information can be found here: [https://x12.org/products/ip-use](https://x12.org/products/ip-use)

**Licensing Information**

Send an email to ip@x12.org to request permission to reproduce X12 IP. Include your name, organization, title, address, city, state, zip, email, a detailed description of the Submitted Artifact, including the underlying or cited X12 Product, and a detailed description of the intended audience and planned distribution method for the Artifact.

Additional information on X12 licensing program can be found here:

[https://x12.org/products/licensing-program](https://x12.org/products/licensing-program)

**Purchasing Information:**

To purchase code list subscriptions call (425) 562-2245 or email admin@wpc-edi.com."
* ^experimental = false

*/
ValueSet: C4BBAmbulanceTransportReasonCodes
Title: "C4BB Ambulance Transport Reasons Value Set"
Description: "Transportation Services Ambulatory Transport Reason Codes" 
* codes from system X12AmbulanceTransportReasonCodes
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false
//  ********* ICD diagnosis codes / procedure codes
/*
RuleSet: ICD9CopyrightNotice
* ^copyright = "The following requirements must be followed to utilize CDC’s public domain content:

1) Attribution to the agency that developed the material must be provided in your use of the materials. Such attribution should clearly state the materials were developed by CDC ATSDR and/or HHS (e.g., Source: CDC; Materials developed by CDC);

2) You must utilize a disclaimer which clearly indicates that your use of the material, including any links to the materials on the CDC, ATSDR or HHS websites, does not imply endorsement by CDC, ATSDR, HHS or the United States Government of you, your company, product, facility, service or enterprise. All such disclaimers must be prominently and unambiguously displayed (e.g., Reference to specific commercial products, manufacturers, companies, or trademarks does not constitute its endorsement or recommendation by the U.S. Government, Department of Health and Human Services, or Centers for Disease Control and Prevention;

3) You may not change the substantive content of the materials; and

4) You must state that the material is otherwise available on the agency website for no charge.

For information on NCHS agency level use of materials see [here](https://www.cdc.gov/other/agencymaterials.html)."
*/
RuleSet: ICD910CMCopyrightNotice
* ^copyright = "ICD-9 and ICD-10 are copyrighted by the World Health Organization (WHO) which owns and publishes the classification. See https://www.who.int/classifications/icd/en. WHO has authorized the development of an adaptation of ICD-9 and ICD-10 to ICD-9-CM to ICD-10-CM for use in the United States for U.S. government purposes."


//  ******* ICD ********


ValueSet: CDCICD910CMDiagnosisCodes
Title: "Diagnosis Codes - International Classification of Diseases, Clinical Modification (ICD-9-CM, ICD-10-CM) Value Set"
Description: "The Value Set is a combination of values from volume 1 and volume 2 from the Code System International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) and values in the Code System International Classification of Diseases, Tenth Revision, Clinical Modification (ICD-10-CM)

The International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) is based on the World Health Organization’s Ninth Revision, International Classification of Diseases (ICD-9). ICD-9-CM was the official system of assigning codes to diagnoses and procedures associated with hospital utilization in the United States.

The ICD-9-CM consists of:

*   a tabular list containing a numerical list of the disease code numbers in tabular form;
*   an alphabetical index to the disease entries; and
*   a classification system for surgical, diagnostic, and therapeutic procedures (alphabetic index and tabular list).

The National Center for Health Statistics (NCHS) and the [Centers for Medicare and Medicaid Services](http://www.cms.hhs.gov/) are the U.S. governmental agencies responsible for overseeing all changes and modifications to the ICD-9-CM.

[ICD-10-CM](https://confluence.hl7.org/pages/viewpage.action?pageId=97453674) is the replacement for ICD-9-CM, volumes 1 and 2, effective October 1, 2015.

The National Center for Health Statistics (NCHS), the Federal agency responsible for use of the International Statistical Classification of Diseases and Related Health Problems, 10th revision (ICD-10) in the United States, has developed a clinical modification of the classification for morbidity purposes. The ICD-10 is used to code and classify mortality data from death certificates, having replaced ICD-9 for this purpose as of January 1, 1999.

The clinical modification represents a significant improvement over ICD-9-CM and ICD-10. Specific improvements include: the addition of information relevant to ambulatory and managed care encounters; expanded injury codes; the creation of combination diagnosis/symptom codes to reduce the number of codes needed to fully describe a condition; the addition of sixth and seventh characters; incorporation of common 4th and 5th digit subclassifications; laterality; and greater specificity in code assignment. The new structure will allow further expansion than was possible with ICD-9-CM.

Current and previous releases of ICD-9-CM are available here: [https://www.cdc.gov/nchs/icd/icd9cm.htm](https://www.cdc.gov/nchs/icd/icd9cm.htm)

Current and previous releases of ICD-10-CM are available in PDF and XML format here: [https://www.cdc.gov/nchs/icd/icd10cm.htm](https://www.cdc.gov/nchs/icd/icd10cm.htm)

Most files are provided in compressed zip format for ease in downloading. These files have been created by the National Center for Health Statistics (NCHS), under authorization by the World Health Organization. Any questions regarding typographical or other errors noted on this release may be reported to nchsicd10cm@cdc.gov."
* codes from system $ICD10CM
* codes from system $ICD9CM
* $HL7DataAbsentReason#masked
* insert ICD910CMCopyrightNotice
* ^experimental = false

ValueSet: CMSICD910PCSProcedureCodes
Title: "Procedure Codes - International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) - ICD-10 Procedure Value Set"
Description: "The Value Set is a combination of values from volume 3 from the Code System International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) and values in the Code System ICD-10 Procedure Coding System.

The International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) is based on the World Health Organization’s Ninth Revision, International Classification of Diseases (ICD-9). ICD-9-CM was the official system of assigning codes to diagnoses and procedures associated with hospital utilization in the United States.

The ICD-9-CM consists of:

*   a tabular list containing a numerical list of the disease code numbers in tabular form;
*   an alphabetical index to the disease entries; and
*   a classification system for surgical, diagnostic, and therapeutic procedures (alphabetic index and tabular list).

The National Center for Health Statistics (NCHS) and the [Centers for Medicare and Medicaid Services](http://www.cms.hhs.gov/) are the U.S. governmental agencies responsible for overseeing all changes and modifications to the ICD-9-CM.

The ICD-10-PCS is the replacement for ICD-9-CM, volume 3, effective October 1, 2015.

The ICD-10-PCS is a procedure classification published by the United States Centers for Medicare & Medicaid Services (CMS) ([https://www.cms.gov](https://www.cms.gov/)) for classifying procedures
performed in hospital inpatient health care settings.

Current and previous releases of ICD-9-CM are available here: [https://www.cdc.gov/nchs/icd/icd9cm.htm](https://www.cdc.gov/nchs/icd/icd9cm.htm)

Most files are provided in compressed zip format for ease in downloading. These files have been created by the National Center for Health Statistics (NCHS), under authorization by the World Health Organization. Any questions regarding typographical or other errors noted on this release may be reported to [nchsicd10cm@cdc.gov](mailto:nchsicd10cm@cdc.gov).

A link to information about the ICD-10-PCS code system - including how to obtain the content - is available at [https://www.cms.gov/Medicare/Coding/ICD10.](https://www.cms.gov/Medicare/Coding/ICD10)

Note: CMS is the owner of the ICD-10-PCS code system. CMS is NOT the owner of ICD-10-CM. CMS republishes the ICD-10-CM codes system on their website for convenience only. For authoritative information on ICD-10-CM, users should refer to the National Center for Health Statistics (NCHS) site located [here](https://www.cdc.gov/nchs/icd/icd10cm.htm)."
* codes from system $ICD10PCS
* codes from system $ICD9PCS
* ^copyright = "The International Classification of Diseases, Tenth Revision, Procedure Coding System (ICD-10-PCS) was developed for the Centers for Medicare and Medicaid Services (CMS) available for public use. CMS is the U.S. governmental agency responsible for overseeing all changes and modifications to the ICD-10-PCS.
The International Classification of Diseases, Ninth Revision, Procedure Coding System (ICD-9-PCS) was developed for the Centers for Medicare and Medicaid Services (CMS) available for public use. CMS is the U.S. governmental agency responsible for overseeing all changes and modifications to the ICD-9-PCS."
* ^experimental = false

/*
CodeSystem: ADAUniversalNumberingSystem
Title: "American Dental Association Universal Numbering System"
Description: "The American Dental Association Universal Numbering System is a tooth notation system primarily used in the United States.

Teeth are numbered from the viewpoint of the dental practitioner looking into the open mouth, clockwise starting from the distalmost right maxillary teeth.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."
* ^url = "http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert ADACopyrightNotice
*/
/*
CodeSystem: ADAAreaOfOralCavitySystem
Title: "American Dental Association Area of Oral Cavity System"
Description: "The American Dental Association Area of Oral Cavity System is a notation system indicating a quadrant, arch, or the entire mouth.

This is a code system defined locally by the CARIN BlueButton IG. As this IG matures, it is expected that this CodeSystem will be migrated to THO (terminology.hl7.org). The current CodeSystem url should be considered temporary and subject to change in a future version."

* ^url = "http://terminology.hl7.org/CodeSystem/ADAAreaOralCavitySystem"
* ^caseSensitive = true
* insert CodeSystemStubBoilerplate
* insert ADACopyrightNotice

*/

ValueSet: OralBodySite
Title: "Oral Body Site Value Set"
Description: "Oral Body Site indicating tooth numbers and area of oral cavity."

* codes from system $ADAUniversalToothDesignationSystem
* codes from system $ADAAreaOralCavitySystem
* insert ADACopyrightNotice
* ^experimental = false


ValueSet: ADAUniversalNumberingSystem
Title: "American Dental Association Universal Numbering Value Set"
Description: "The American Dental Association Universal Numbering System is a tooth notation system primarily used in the United States.

Teeth are numbered from the viewpoint of the dental practitioner looking into the open mouth, clockwise starting from the distalmost right maxillary teeth."
* codes from system $ADAUniversalToothDesignationSystem
* insert ADACopyrightNotice
* ^experimental = false


---

File: repos/HL7_SLASH_carin-bb/input/fsh/CoverageProfile.fsh

// TODO relax meta.profile no invariant, just require at least one. Across all profiles (Jira ticket? If no ticket, create one.)

Profile: C4BBCoverage
Parent: USCoreCoverageProfile|6.1.0
Id: C4BB-Coverage
Title: "C4BB Coverage"
Description: "Data that reflect a payer’s coverage that was effective as of the date of service or the date of admission of the claim."
//* ^jurisdiction.valueCodeableConcept = "US#urn:iso:std:iso:3166"
* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.profile 1..*
// 20210216 CAS: FHIR-30575 Pulled from block vote1a
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBCoverage|1.2.0)
//* obeys coverage-meta-profile-version
* identifier MS 
* identifier ^short = "Member ID and other identifiers"
// 20210312 CAS: Remove per https://jira.hl7.org/browse/FHIR-31535 - Revert Coverage.Subscriber Type to that defined by the base Resource
//* subscriber 0..1 
//* subscriber only Reference(C4BBPatient)
/*
* extension contains
   $R5CoverageKind named coverage-kind 1..1 and
   InsuranceProductLine named product-line 0..1  MS and
   InsuranceProductType named product-type 0..1 MS 
   CoverageBenefitType named benefit-type 0..* MS
*/
/*
* extension[coverage-kind]
  * valueCode 1..1
  * valueCode = #insurance
//* extension[$R5CoverageKind] 1..1
//* extension[$R5CoverageKind].valueCode 1..1
/* extension contains 
//   coverage-kind 0..1

https://build.fhir.org/branches/2024-01-gg-xver-extensions2/versions.html#extensions

* extension[coverage-kind].url = $R5CoverageKind

* extension.url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-Immunization.administeredProduct"
* extension.extension.url = "reference"
* extension.extension.valueReference = Reference(Medication/something)
* occurrenceDateTime = "2024-01-01T01:01:01Z"
*/
/*

Needs to be made in to extensions
* class contains 
   product-line 0..1  MS and
   product 0..1 MS and
   benefit 0..1  MS
* class[product-line] ^short = "Product Line"
* class[product-line].type = C4BBCoverageClassCS#product-line
* class[product-line].value ^short = "Product Line"
* class[product-line].value from C4BBInsuranceProductLineVS (extensible)
* class[product-line].name ^short = "Product Line Description"

* class[product] ^short = "Product Type"
* class[product].type = C4BBCoverageClassCS#product
* class[product].value ^short = "Plan Type"
* class[product].value from C4BBInsuranceProductTypeVS (extensible)
* class[product].name ^short = "Plan Type Description"

* class[benefit] ^short = "Benefit Type"
* class[benefit].type = C4BBCoverageClassCS#benefit-type
* class[benefit].value ^short = "Benefit Type"
* class[benefit].value from http://hl7.org/fhir/us/ndh/ValueSet/NdhCoverageTypeVS (extensible)
* class[benefit].name ^short = "Benefit Type Description"
*/


* subscriberId 1..1
//* beneficiary 1..1 MS Now part of US Core 6.1
* beneficiary only Reference(C4BBPatient) 
* relationship 1..1 MS
* relationship from $SubscriberRelationship (required)
* payor 1..1 MS   // was 1..* in Balloted STU
* payor only Reference (C4BBOrganization) 

/*   Now part of US Core 6.1
* class MS 
* class ^slicing.discriminator.type = #pattern
* class ^slicing.discriminator.path = "type"
* class ^slicing.rules = #open
* class ^slicing.ordered = false   // can be omitted, since false is the default
* class ^slicing.description = "Slice based on value pattern"
* class contains 
   group 0..1  MS and
   plan 0..1 MS
* class[group] ^short = "Group"
* class[group].type = $CoverageClassCS#group
* class[group].value ^short = "Group Number"
* class[group].name ^short = "Group Name"

* class[plan] ^short = "Plan"
* class[plan].type = $CoverageClassCS#plan
* class[plan].value ^short = "Plan Number"
* class[plan].name ^short = "Plan Name"
*/

//* payor MS    Now part of US Core 6.1
//* relationship MS  Now part of US Core 6.1
//* period MS   Now part of US Core 6.1
* period MS
* subscriberId MS
//* status MS   Now part of US Core 6.1
* class[group].value MS
* class[group].name MS
* class[plan].value MS
* class[plan].name MS


* meta.lastUpdated ^comment = "Defines the date the coverage that was effective as of the date of service or admission (163). The Coverage Reference Resource SHALL be returned with data that was effective as of the date of service or admission of the claim"
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
* status ^comment = "Identifies the status of the coverage information (default: active) (133)"
* type ^comment = "Identifies if the coverage is PPO, HMO, POS, etc. (3)"
* subscriberId  ^comment = "The identifier assigned by the Payer on the subscriber's ID card (132)"
* beneficiary ^comment = "Identifier for a member assigned by the Payer.  If members receive ID cards, that is the identifier that should be provided (1).  This is the party who receives treatment for which the costs are reimbursed under the coverage. alternate path:  EOB.patient(Patient).identifier"
* relationship ^comment = "Relationship of the member to the person insured (subscriber). (72)"
* period ^comment = "Date that the contract became effective (74) and Date that the contract was terminated or coverage changed (75)"
* payor ^comment = "Issuer of the Policy (2)"
* class[group].value ^comment = "Employer account identifier (134)"
* class[group].name ^comment = "Name of the Employer Account (135)"
* class[plan].value ^comment = "Business concept used by a health plan to describe its benefit offerings (154)"
* class[plan].name ^comment = "Name of the health plan benefit offering assigned to the Plan Identifier (155)"


/*
// TODO move to THO or correct file

CodeSystem: C4BBInsuranceProductLineCS
Title: "C4BB Insurance Product Line Code System"
Description: "Insurance Product Line Code System"
* #commercial "Commercial" "Commercial"
* #medicare "Medicare" "Medicare"
* #medicare-advantage "Medicare Advantage" "Medicare Advantage"
* #medicaid "Medicaid" "Medicaid"
* #tricare "TriCare" "TriCare"
* #champva "CHAMPVA" "Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)"
* #exchange "Exchange" "Exchange" // What is this? Is it a QHP, and if so, why does it have to be distinguished from Commercial?
* #chip "CHIP" "Children's Health Insurance Program (CHIP)"
* #corrections "Department of Corrections" "US Department of Corrections"

* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

ValueSet: C4BBInsuranceProductLineVS
Title: "C4BB Insurance Product Line Value Set"
Description: "Insurance Product Line Value Set"
* codes from system C4BBInsuranceProductLineCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

CodeSystem: C4BBInsuranceProductTypeCS
Title: "C4BB Insurance Product Type Code System"
Description: "Insurance Product Type Code System"
* #hmo "Commercial" "Commercial"
* #ppo "Medicare" "Medicare"
* #pos "Medicare POS" "Medicare Point-of-Service (POS)"
* #epo "Exclusive Provider Organization" "Exclusive Provider Organization"
* #work-comp "Worker's Comp" "Worker's Compensation"
* #ffs "Fee for Service" "Fee for Service"
* ^caseSensitive = true
* ^experimental = false
* ^copyright = "This CodeSystem is not copyrighted."

ValueSet: C4BBInsuranceProductTypeVS
Title: "C4BB Insurance Product Type Value Set"
Description: "Insurance Product Type Value Set"
* codes from system C4BBInsuranceProductTypeCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false
*/
/*
CodeSystem: C4BBCoverageClassCS
Title: "C4BB Insurance Product Line Code System"
Description: "Insurance Product Line Code System"
* #product-line "Product Line" "Insurance Product Line"
* #product "Product" "Type of Insurance Product"
* #benefit-type "Benefit Type" "Type of benefit offered through insurance coverage"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false
*/
/*

ValueSet: C4BBCoverageClassVS
Title: "C4BB Coverage Class Value Set"
Description: "C4BB Coverage Class Value Set"
* codes from system C4BBInsuranceProductLineCS
* codes from system $CoverageClassCS
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false




Extension: InsuranceProductLine
//Id: usdf-FormularyReference-extension
Title: "Insurance Product Line"
Description: "Insurance Product Line."
* ^context[+].type = #element
* ^context[=].expression = "Coverage"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from C4BBInsuranceProductLineVS (extensible)


Extension: InsuranceProductType
//Id: usdf-FormularyReference-extension
Title: "Insurance Product Type"
Description: "Insurance Product Type."
* ^context[+].type = #element
* ^context[=].expression = "Coverage"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from C4BBInsuranceProductTypeVS (extensible)
*/
/*
Extension: CoverageBenefitType
//Id: usdf-FormularyReference-extension
Title: "Coverage Benefit Type"
Description: "Coverage Benefit Type."
* ^context[+].type = #element
* ^context[=].expression = "Coverage"
* value[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept from http://hl7.org/fhir/us/ndh/ValueSet/NdhCoverageTypeVS (extensible)
*/

---

File: repos/HL7_SLASH_carin-bb/input/fsh/DEF_VersionInvariants.fsh

Invariant: patient-meta-profile-version
Description: "Patient: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Patient|2.1'))"
Severity: #warning

Invariant: relatedperson-meta-profile-version
Description: "RelatedPerson: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-RelatedPerson|2.1'))"
Severity: #warning

Invariant: practitioner-meta-profile-version
Description: "Practitioner: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Practitioner|2.1'))"
Severity: #warning

Invariant: organization-meta-profile-version
Description: "Organization: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Organization|2.1'))"
Severity: #warning

Invariant: coverage-meta-profile-version
Description: "Coverage: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-Coverage|2.1'))"
Severity: #warning

Invariant: EOB-institutional-inpatient-meta-profile-version
Description: "Institutional Inpatient EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Inpatient-Institutional|2.1'))"
Severity: #warning

Invariant: EOB-institutional-outpatient-meta-profile-version
Description: "Institutional Outpatient EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Outpatient-Institutional|2.1'))"
Severity: #warning

Invariant: EOB-professional-nonclinician-meta-profile-version
Description: "Professional and Nonclinician EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Professional-NonClinician|2.1'))"
Severity: #warning

Invariant: EOB-pharmacy-meta-profile-version
Description: "Pharmacy EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Pharmacy|2.1'))"
Severity: #warning

Invariant: EOB-oral-meta-profile-version
Description: "Oral EOB: meta.profile with canonical and major.minor. version required."
Expression: "meta.profile.exists($this.startsWith('http://hl7.org/fhir/us/carin-bb/StructureDefinition/C4BB-ExplanationOfBenefit-Oral|2.1'))"
Severity: #warning


---

File: repos/HL7_SLASH_carin-bb/input/fsh/EOBBaseProfile.fsh

Profile: C4BBExplanationOfBenefit
Parent: ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit
Title: "C4BB Explanation Of Benefit"
Description: "Abstract parent profile that includes constraints that are common to the four specific ExplanationOfBenefit (EOB) profiles defined in this Implementation Guide.
All EOB instances should be from one of the four concrete EOB profiles defined in this Implementation Guide:  Inpatient, Outpatient, Pharmacy, and Professional/NonClinician"
* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.profile 1..*
// 20210322 CAS: FHIR-30575

* ^abstract = true
//* identifier 1..* MS
//* identifier.type 1..1 MS
//* identifier.type from C4BBClaimIdentifierType (extensible)

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false   // can be omitted, since false is the default
* identifier ^slicing.description = "Slice based on value"
* identifier contains 
   uniqueclaimid 1..1  MS
* identifier[uniqueclaimid] ^short = "Unique Claim Identifier"
* identifier[uniqueclaimid].type = C4BBIdentifierType#uc
* identifier[uniqueclaimid].value ^short = "Unique Claim Identifier"
* identifier[uniqueclaimid].value 1..1 MS


//@Saul -- added status MS
* status MS
* use MS
* outcome MS

* type 1..1 MS
* type from $HL7ClaimType (required)
//   * claim MS   - igor sez we discussed removing MS
* use = #claim
* patient 1..1 MS
* provider only Reference(C4BBOrganization or C4BBPractitioner)   // based on BV2a comments 7/27
* patient only Reference (C4BBPatient)
* billablePeriod 1..1 MS
* billablePeriod.start 1..1 MS
* insurer 1..1 MS
* insurer only Reference(C4BBOrganization)
* provider 1..1 MS
* related 0..* MS
* related.relationship 1..1 MS
* related.relationship from C4BBRelatedClaimRelationshipCodes (required)
* related.reference 1..1 MS
* payee 0..1 MS
* payee obeys EOB-payee-other-type-requires-party
* payee.type 1..1 MS
* payee.type from C4BBPayeeType (required)
* payee.party 0..1 MS
* payee.party only Reference(C4BBOrganization or C4BBPatient or C4BBPractitioner or C4BBRelatedPerson)
* careTeam 0..* MS
* careTeam.provider 1..1 MS
* careTeam.provider only Reference(C4BBOrganization or C4BBPractitioner)
* careTeam.role MS
* supportingInfo 0..* MS
* supportingInfo.category from C4BBSupportingInfoType (extensible)

//* supportingInfo.category 1..1 MS
//* supportingInfo.category from C4BBSupportingInfoType (required)
* insurance 1..* MS
* insurance.coverage 1..1 MS
* insurance.focal 1..1  MS
* insurance obeys EOB-insurance-focal
* insurance.coverage only Reference(C4BBCoverage)
//* adjudication.category from C4BBAdjudicationDiscriminator (required)   // per Igor
* item 1..* MS // Make all EoB profiles require EoB.item FHIR-34114
* item.adjudication.category 1..1 MS
//* item.adjudication.category from C4BBAdjudicationDiscriminator (required)  // Per Igor
* item.noteNumber MS
* item.sequence MS
//* total.category from C4BBAdjudicationDiscriminator (required)
* payment MS
* payment.type from C4BBPayerClaimPaymentStatusCode (required)
* payment.type MS
* processNote MS
* priority from http://hl7.org/fhir/ValueSet/process-priority  // Fix a bug in R4 EOB which points to a CodeSystem.   Eliminates an error on output
// CHANGE FOR NON-FINANCIAL
//* total 1..* MS


* insert EOBBaseProfileComments




Invariant:  EOB-insurance-focal
Description: "EOB.insurance:  at most one with focal = true"
//Expression: "insurance.select (focal = true).count() < 2"
// TODO Add Jira ticket
Expression: "select (focal = true).count() < 2"
Severity:   #error

Invariant: EOB-inst-careTeam-practitioner // rewritten with input from Lee Surprenant FHIR-28530
Description: "Institutional EOB: Careteam roles refer to a practitioner"
/*Expression: "(
role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervising')).exists()).exists() implies
role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervising')).exists()).exists().provider.all(resolve() is Practitioner)
)"
*/
// TODO Add Jira ticket
Expression: "(
role.where(coding.where(code in ('attending' | 'primary' | 'referring' | 'supervisor')).exists()).exists() implies
provider.all(resolve() is Practitioner)
)"
Severity: #error

Invariant: EOB-inst-careTeam-organization    // rewritten with input from Lee Surprenant  FHIR-28530
Description: "Institutional EOB: Careteam roles refer to an organization"
// TODO Add Jira ticket
/*
Expression:   "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
role.where(coding.where(code in ('rendering' )).exists()).exists().provider.all(resolve() is Organization)
)"
*/
Expression:   "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
provider.all(resolve() is Organization)
)"
Severity: #error

Invariant: EOB-careteam-qualification
Description: "Care Team Rendering physician's qualifications are from Healthcare Provider Taxonomy Value Set"
//Expression: "where(role.where(coding.code in ('rendering')).exists().not() or qualification.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066')).exists()" // FHIR-35889
//Expression: "where(role.where(coding.code in ('rendering')).exists().not() or qualification.where(coding.system = 'http://nucc.org/provider-taxonomy')).exists()"
Expression: "where(role.where(coding.code in ('rendering')).exists().not() or qualification.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066')).exists()"
/* Expression: "(
#role.where(coding.where(code in ('rendering' )).exists()).exists() implies
role.where(coding.where(code in ('rendering' )).exists()).exists().qualification.memberOf('http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.114222.4.11.1066')
)"
*/
Severity: #error

Invariant: EOB-pharm-careTeam-practitioner
Description: "Pharmacy EOB: Careteam roles refer to a practitioner"
// TODO Add Jira Ticket
/*
Expression: "(
role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists() implies
role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists().provider.all(resolve() is Organization)
)"
*/
Expression: "(
role.where(coding.where(code in ('primary' | 'prescribing' )).exists()).exists() implies
provider.all(resolve() is Organization)
)"
Severity: #error

Invariant: EOB-pharm-careTeam-organization
Description: "Pharmacy EOB: Careteam roles refer to an organization"
// TODO Add Jira Ticket
/*
Expression: "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
role.where(coding.where(code in ('rendering' )).exists()).exists().provider.all(resolve() is Organization)
)"
*/
Expression: "(
role.where(coding.where(code in ('rendering' )).exists()).exists() implies
provider.all(resolve() is Organization)
)"
Severity: #error

Invariant: EOB-prof-careTeam-practitioner
Description: "Professional EOB:  Careteam roles refer to a practitioner"
// TODO Add Jira Ticket
/*
Expression: "(
role.where(coding.where(code in ('rendering' | 'primary' | 'referring' | 'supervising')).exists()).exists() implies
role.where(coding.where(code in ('rendering' | 'primary' | 'referring' | 'supervising' )).exists()).exists().provider.all(resolve() is Practitioner)
)"
*/
Expression: "(
role.where(coding.where(code in ('rendering' | 'primary' | 'referring' | 'supervisor')).exists()).exists() implies
provider.all(resolve() is Practitioner)
)"
Severity: #error



Invariant: EOB-prof-all-transportation-supportinginfo-linked-to-line
Description: "Professional EOB: SupportingInfo repetitions with with transportation category code must be referred to by one or more repetitions of item.informationSequence"
Expression: "supportingInfo.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBTransportationServiceCategories')).sequence.subsetOf(%context.item.informationSequence)"
Severity: #error



Invariant: EOB-institutional-item-or-header-adjudication
Description: "Institutional EOB:  Should have adjudication with adjudicationamounttype slice at the item or header level, but not both"
Expression: "adjudication.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBAdjudication')).exists() != item.adjudication.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBAdjudication')).exists()"
Severity: #error


Invariant: adjudication-has-amount-type-slice
Description: "If Adjudication is present, it must have at least one adjudicationamounttype slice"
Expression: "(adjudication.exists().not() or adjudication.where(category.memberOf('http://hl7.org/fhir/us/carin-bb/ValueSet/C4BBAdjudication')).exists())"
Severity: #error

// 20211110 CAS: https://jira.hl7.org/browse/FHIR-32850
/*
Invariant: EOB-out-inst-item-productorservice
Description: "Outpatient Institutional EOB:  Item productOrService required. Data absent reason of Not Applicable is not allowed."
Expression: "coding.where(code = 'not-applicable' and system = 'http://terminology.hl7.org/CodeSystem/data-absent-reason').exists().not()"
Severity: #error
*/

// 20210203 CAS: https://jira.hl7.org/browse/FHIR-33024
Invariant: EOB-vision-item-productorservice
Description: "Vision EOB: Item productOrService not required in item.productOrService if and only if type is vision."
// TODO Add Jira Ticket
//Expression: "ExplanationOfBenefit.type.coding.where(code = 'vision' and system='http://terminology.hl7.org/CodeSystem/claim-type').exists() or ExplanationOfBenefit.item.productOrService.coding.where(code = 'not-applicable' and system = 'http://terminology.hl7.org/CodeSystem/data-absent-reason').exists().not()"
Expression: "type.coding.where(code = 'vision' and system='http://terminology.hl7.org/CodeSystem/claim-type').exists() or item.productOrService.coding.where(code = 'not-applicable' and system = 'http://terminology.hl7.org/CodeSystem/data-absent-reason').exists().not()"
Severity: #error


// 20210203 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
Invariant: EOB-inst-pointoforigin
Description: "Where Admission Type and Point of Origin slices exist, if Type of Admission code is Newborn, Point of Origin must be from Point of Origin - Newborn CodeSystem  or Type of Admission is not Newborn and Point of Origin must be from Point of Origin Nonnewborn CodeSystem."
//Expression: "(supportingInfo.where(code.coding.system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit' and code.coding.code = '4').exists() and supportingInfo.where(code.coding.system='AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn').exists()).not() and (supportingInfo.where(code.coding.system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit' and code.coding.code != '4').exists() and supportingInfo.where(code.coding.system = 'https://www.nubc.org/CodeSystem/PointOfOriginNewborn').exists() ).not()"
Expression: "(supportingInfo.where(code.coding.where(system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit').exists() and code.coding.where(code = '4').exists()).exists() and supportingInfo.where(code.coding.where(system='AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn').exists()).exists()).not() and (supportingInfo.where(code.coding.where(system = 'https://www.nubc.org/CodeSystem/PriorityTypeOfAdmitOrVisit').exists() and code.coding.where(code = '4').exists().not()).exists() and supportingInfo.where(code.coding.where(system = 'https://www.nubc.org/CodeSystem/PointOfOriginNewborn').exists()).exists() ).not()"
Severity: #error


Invariant: EOB-payee-other-type-requires-party
Description: "Base EOB: if payee type is other, payee party is required"
Expression: "type.coding.where(code = 'other' and system = 'http://terminology.hl7.org/CodeSystem/payeetype').exists() implies party.exists()"
Severity: #error





// Rulesets
RuleSet: ItemAdjudicationInvariant
* item obeys adjudication-has-amount-type-slice

/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
RuleSet: AdjudicationInvariant
* obeys adjudication-has-amount-type-slice
*/
RuleSet: EOBHeaderItemAdjudicationInvariant
* obeys EOB-institutional-item-or-header-adjudication

RuleSet: AdjudicationSlicing
* adjudication ^slicing.rules = #open
* adjudication ^slicing.discriminator.path = "category"
* adjudication ^slicing.ordered = false   // can be omitted, since false is the default
* adjudication ^slicing.description = "Slice based on value"
* adjudication ^slicing.discriminator.type = #value
* adjudication.category 1..1 MS
* adjudication.category from C4BBAdjudicationCategoryDiscriminator (extensible)

RuleSet: SupportingInfoSlicing
* supportingInfo ^slicing.discriminator.type = #value
* supportingInfo ^slicing.discriminator.path = "category"
* supportingInfo ^slicing.rules = #open
* supportingInfo ^slicing.ordered = false   // can be omitted, since false is the default
* supportingInfo ^slicing.description = "Slice based on $this value"
* supportingInfo MS
// * supportingInfo.category MS  -- we will flag in each slice

RuleSet: TotalSlicing
* total ^slicing.rules = #open
* total ^slicing.ordered = false   // can be omitted, since false is the default
* total ^slicing.description = "Slice based on value"
* total  ^slicing.discriminator.type = #value
* total  ^slicing.discriminator.path = "category"
* total.category 1..1 MS


RuleSet: ItemAdjudicationSlicing
* item.adjudication ^slicing.rules = #open
* item.adjudication ^slicing.ordered = false   // can be omitted, since false is the default
* item.adjudication ^slicing.description = "Slice based on value"
* item.adjudication ^slicing.discriminator.type = #value
* item.adjudication ^slicing.discriminator.path = "category"
* item.adjudication.category from C4BBAdjudicationCategoryDiscriminator (extensible)

RuleSet: EOBBaseProfileComments
* meta.lastUpdated ^comment = "Defines the date the Resource was created or updated, whichever comes last (163). Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last"
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
* identifier ^comment = "Identifier assigned by a payer for a claim received from a provider or subscriber. It is not the same identifier as that assigned by a provider. (35)"
* identifier.type ^comment = "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber. (183)"
* status ^comment = "Claim processing status code (140).  Expected values are active or cancelled.  To comply with the CMS rule, draft EOBs are not required"
* type ^comment = "Specifies the type of claim. (e.g., inpatient institutional, outpatient institutional, physician, etc.) (16).  Defines the Claims profiles.  Values from Claim Type Codes are required; a data absent reason is not allowed"
* use ^comment = "Expected value is claim. The CMS rule applies to adjudicated claims; it does not require preauthorizations or predeterminations"
* patient ^comment = "Identifier for a member assigned by the Payer.  If members receive ID cards, that is the identifier that should be provided. (1). The patient must be supplied to the insurer so that confirmation of coverage and service history may be considered as part of the authorization and/or adjudication. Additional required path:EOB.insurance.coverage(Coverage).beneficiary(Patient).identifier"
* billablePeriod.start ^comment = "The first day on the billing statement covering services rendered to the beneficiary (i.e. 'Statement Covers From Date’). (177)"
* billablePeriod.end ^comment = "The last day on the billing statement covering services rendered to the beneficiary (i.e. 'Statement Covers Thru Date’). (178)"
* created ^comment = "Date the claim was adjudicated (179)"
* insurer ^comment = "Code of the payer responsible for the claim (2, 5).  Same as insurance.coverage.organization.  Party responsible for reimbursing the provider"
* provider ^comment = "The identifier assigned to the Billing Provider. (94)"
* related ^comment = "If the current claim represents a claim that has been adjusted and was given a prior claim number, this field represents the prior claim number. If the current claim has been adjusted; i.e., replaced by or merged to another claim number, this data element represents that new number.(111, 112)"
* payee.type ^comment = "Identifies the type of recipient of the adjudication amount; i.e., provider, subscriber, beneficiary or another recipient. (120)"
* payee.party ^comment = "Recipient reference (121)"
* outcome ^comment = "Expected value is complete"
* item.noteNumber ^comment = "References number of the associated processNote entered"
* careTeam.provider ^comment = "The identifier assigned to the care team. (varies depending on the profile)"
* careTeam.role ^comment = "The functional role of a provider on a claim. (165)"
* careTeam.sequence ^comment = "careTeam.sequence values uniquely identify careTeam members.  They do not necessarily indicate any order in which the patient was seen by the careTeam or identify any level of significance of the careTeam to the patient, etc.  Client app implementations should not assign any significance to the sequence values"
* supportingInfo ^comment = "Defines data elements not available in the base EOB resource"
* supportingInfo.sequence ^comment = "Client app implementations should look-up supportingInfo elements based on category values instead of sequence values"
* insurance ^comment = "Identity of the payers responsible for the claim. (2, 141).  All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. An invariant is defined to enforce the following rule:  Will have multiple occurrences on secondary / tertiary, etc. claims.  Up to one occurrence, that of the ExplanationOfBenefit.insurer, will have a boolean value = 'True'"
* insurance.focal ^comment = "A patient may (will) have multiple insurance policies which provide reimbursement for healthcare services and products. For example, a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for adjudicating this claim. Other claims would be created to request adjudication against the other listed policies. An invariant is defined to enforce the following rule:  Will have multiple occurrences on secondary / tertiary, etc. claims.  Up to one occurrence, that of the ExplanationOfBenefit.insurer, will have a boolean value = 'True'"
* insurance.coverage ^comment = "Same as insurance.coverage.organization.  Party responsible for reimbursing the provider. When focal = true, Coverage.payer--> Organization.identifier.  When focal = false, EOB.insurance.coverage.display = [name of other carrier]"
* item.sequence ^comment = "Line identification number that represents the number assigned in a source system for identification and processing. (36)"
* payment.type ^comment = "Indicates whether the claim was paid or denied. (91)"
* payment.date ^comment = "The date the claim was paid. (107)"
* processNote.text ^comment = "Payment denial explanation to a member, typically goes on the EOB when the payment is denied or disallowed (181)"

// 20210322 CAS: FHIR-30575
/*
RuleSet: Metaprofile-supportedProfile-slice
* meta.profile ^slicing.discriminator.type = #pattern
* meta.profile ^slicing.discriminator.path = "$this"
* meta.profile ^slicing.rules = #open
* meta.profile ^slicing.ordered = false
* meta.profile ^slicing.description = "Slice based on value"
* meta.profile contains supportedProfile 1..1
*/

---

File: repos/HL7_SLASH_carin-bb/input/fsh/EOBInpatientProfile.fsh

Profile: C4BBExplanationOfBenefitInpatientInstitutionalBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis
Title: "C4BB ExplanationOfBenefit Inpatient Institutional Basis"
Description: "The basis profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for inpatient services, which may include the use of equipment and supplies, laboratory services, radiology services and other charges. Inpatient claims are submitted for services rendered at an institution as part of an overnight stay.
The claims data is based on the institutional claim format UB-04, submission standards adopted by the Department of Health and Human
Services.
The basis profile does not have requirements for financial data."
// 20210322 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitInpatientInstitutional|1.2.0)
//* obeys EOB-institutional-inpatient-meta-profile-version
//@Saul -- added MS
* use MS
* outcome MS

// 20210203 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
* obeys EOB-inst-pointoforigin


//* type.coding 1..1 MS   // commenting this line leads to a failure
* type = $HL7ClaimTypeCS#institutional
* subType 1..1 MS
* subType from C4BBInstitutionalClaimSubType (required)
* subType = C4BBInstitutionalClaimSubType#inpatient
* careTeam.role from C4BBClaimInstitutionalCareTeamRole  (required)  // was  PayerInstitutionalProviderRole
* careTeam.role 1..1 MS
* careTeam obeys EOB-inst-careTeam-practitioner
* careTeam obeys EOB-inst-careTeam-organization
* billablePeriod 1..1 MS
* diagnosis 1..* MS
* diagnosis.type 1..1 MS
* diagnosis.type from C4BBClaimInpatientInstitutionalDiagnosisType  (required)
* diagnosis.diagnosis[x] 1..1 MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosis[x] from CDCICD910CMDiagnosisCodes (required)
* diagnosis.onAdmission 0..1 MS
* diagnosis.onAdmission from CMSPresentOnAdmissionIndicator (required)
* procedure.procedure[x] only CodeableConcept
* procedure.procedure[x] 1..1 MS
* procedure.procedure[x] from CMSICD910PCSProcedureCodes (required)
* procedure.type from C4BBClaimProcedureType (required)
* procedure 0..* MS
* procedure.type 1..1 MS
* procedure.date 0..1 MS
* provider 1..1
* provider only Reference(C4BBOrganization)
* insert SupportingInfoSlicing
* supportingInfo contains
     admissionperiod 1..1 MS  and
     clmrecvddate 0..1 MS and
     typeofbill 0..1 MS and
     pointoforigin 0..1 MS and
     admtype 0..1 MS and
     discharge-status 0..1 MS and
     drg 0..1 MS and
     // 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number
     medicalrecordnumber 0..1 MS and
     patientaccountnumber 0..1 MS


* supportingInfo[admissionperiod] ^short = "Admission Period"
* supportingInfo[admissionperiod].category = C4BBSupportingInfoType#admissionperiod
* supportingInfo[admissionperiod].category  MS
* supportingInfo[admissionperiod].timingPeriod 1..1 MS

* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category  = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category  MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS

* supportingInfo[typeofbill] ^short = "Type of bill"
* supportingInfo[typeofbill].category  = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].category MS
* supportingInfo[typeofbill].code from AHANUBCTypeOfBill (required)
* supportingInfo[typeofbill].code 1..1 MS

* supportingInfo[admtype] ^short = "Admission type"
* supportingInfo[admtype].category  = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].category MS
* supportingInfo[admtype].code from AHANUBCPriorityTypeOfAdmissionOrVisit  (required)
* supportingInfo[admtype].code 1..1 MS

* supportingInfo[pointoforigin] ^short = "Point of origin for admission"
* supportingInfo[pointoforigin].category  = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].category MS
* supportingInfo[pointoforigin].code from AHANUBCPointOfOriginForAdmissionOrVisit (required)
* supportingInfo[pointoforigin].code 1..1 MS

* supportingInfo[discharge-status] ^short = "Discharge status"
* supportingInfo[discharge-status].category  = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].category MS
* supportingInfo[discharge-status].code from AHANUBCPatientDischargeStatus   (required)
* supportingInfo[discharge-status].code 1..1 MS

* supportingInfo[drg] ^short = "Diagnosis Related Group"
* supportingInfo[drg].category  = C4BBSupportingInfoType#drg
* supportingInfo[drg].category MS
// CAS 20210118: https://jira.hl7.org/browse/FHIR-30380  Allow state assigned DRGs in the DRG Value Set
* supportingInfo[drg].code from CMSMS3MAPAPRDRG  (extensible)
* supportingInfo[drg].code 1..1 MS
// 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number

* supportingInfo[medicalrecordnumber] ^short = "Medical record number"
* supportingInfo[medicalrecordnumber].category = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString 1..1 MS

* supportingInfo[patientaccountnumber] ^short = "Patient account number"
* supportingInfo[patientaccountnumber].category = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString 1..1 MS

* item.revenue from AHANUBCRevenueCodes (required)
* item.modifier from AMACPTCMSHCPCSModifiers (required)
* item.productOrService from C4BBEOBInstitutionalProcedureCodes (required)

// CHANGE FOR NON-FINANCIAL
//* insert EOBHeaderItemAdjudicationInvariant
// CHANGE FOR NON-FINANCIAL
//* insert ItemAdjudicationInvariant

* insert ItemAdjudicationSlicing
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL
//   adjudicationamounttype 0..* MS and   /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS and
   allowedunits 0..1 MS

* item.adjudication[allowedunits] ^short = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider.  (149)"
* item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
* item.adjudication[allowedunits].value only decimal
// FHIR-30807 - Change cardinality in EOB Inpatient and Outpatient Institutional Profiles
* item.adjudication[allowedunits].value 1..1 MS

* item.adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* item.adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* item.adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* item.adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/*
* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/
/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
* insert AdjudicationInvariant
*/
* insert AdjudicationSlicing
* adjudication MS
* item.adjudication  MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   benefitpaymentstatus 1..1 MS and
// CHANGE FOR NON-FINANCIAL   
//   adjudicationamounttype 0..* MS and   /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS


* adjudication[billingnetworkstatus] ^short = "Billing provider network status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* adjudication[benefitpaymentstatus].reason 1..1 MS

* adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/*
* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication  (required)
* adjudication[adjudicationamounttype].amount 1..1
*/
/*
* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
* total[adjudicationamounttype].amount 1..1
*/
* patient MS
* insurer MS
// 20210309 CAS: FHIR-31477 - Change cardinality of inpatient profile's insurance to 1..* to allow for coordination of benefits, consistent with the rest of the CARIN EOB profiles
//* insurance 1..1 MS
* type MS
* diagnosis.onAdmission MS
* identifier MS
* item.sequence MS
* item.productOrService MS
* item.modifier MS
* item.quantity MS
* item.revenue 1..1 MS
* payment.type MS
* careTeam.provider MS
* provider MS
* careTeam.provider MS
* careTeam.provider MS
* careTeam.provider MS
* payment.date MS
* related MS
* related MS
* payee.type MS
* payee.party MS
* status MS
* insurance MS
* procedure MS
* procedure MS
* meta MS
* careTeam.role MS
* careTeam.provider MS
* provider MS
* careTeam.provider MS
* careTeam.provider MS
* careTeam.provider MS
* careTeam.provider MS
* insurer MS
* insurance MS
* created MS
* processNote MS
* processNote.text MS
* careTeam.provider MS
* billablePeriod.start MS
* billablePeriod.end MS

* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[admissionperiod] ^comment = "The Period.start date corresponds with the date the beneficiary was admitted to a facility and the onset of services. May precede the Statement From Date if this claim is for a beneficiary who has been continuously under care. The Period.end date corresponds with the date beneficiary was discharged from the facility, or died. Matches the final Statement Thru Date. When there is a discharge date, the Patient Discharge Status Code indicates the final disposition of the patient after discharge. (18, 19)"
* supportingInfo[drg] ^comment = "Claim diagnosis related group (DRG). DRGs require the DRG system; i.e., MS-DRG / AP-DRG / APR-DRG, the DRG version and the code value (32, 33. 113)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* diagnosis.onAdmission ^comment = "Used to capture whether a diagnosis was present at time of a patient's admission. (28)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the inpatient institutional diagnosis is admitting, principal, other or an external cause of injury. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"
* procedure ^comment = "Medical procedure a patient received during inpatient stay. Current coding methods include: International Classification of Diseases Surgical Procedures (ICD-9). Information located on UB04 (Form Locator 74). (25, 27, 10, 12)"
* procedure.type ^comment = "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure. (186)"
* procedure.sequence ^comment =  " procedure.sequence values do not necessarily indicate any order in which the procedure occurred.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of procedure.type to identify primary and secondary procedures"


* insert EOBBaseProfileComments



Profile: C4BBExplanationOfBenefitInpatientInstitutional
Parent: C4BB-ExplanationOfBenefit-Inpatient-Institutional-Basis
Id: C4BB-ExplanationOfBenefit-Inpatient-Institutional
Title: "C4BB ExplanationOfBenefit Inpatient Institutional"
Description: "The profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for inpatient services, which may include the use of equipment and supplies, laboratory services, radiology services and other charges. Inpatient claims are submitted for services rendered at an institution as part of an overnight stay.
The claims data is based on the institutional claim format UB-04, submission standards adopted by the Department of Health and Human
Services.
The profile has requirements for financial data."

* obeys EOB-institutional-inpatient-meta-profile-version
* insert EOBHeaderItemAdjudicationInvariant
* insert ItemAdjudicationInvariant
//* insert ItemAdjudicationSlicing
* item.adjudication contains
   adjudicationamounttype 0..* MS  /* restricted to 1..* by invariant */

* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount MS
* item.adjudication[adjudicationamounttype].amount 1..1

//* insert AdjudicationSlicing
* adjudication contains
   adjudicationamounttype 0..* MS  /* restricted to 1..* by invariant */


* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication  (required)
* adjudication[adjudicationamounttype].amount 1..1

* total 1..* MS
* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
* total[adjudicationamounttype].amount 1..1


* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[admissionperiod] ^comment = "The Period.start date corresponds with the date the beneficiary was admitted to a facility and the onset of services. May precede the Statement From Date if this claim is for a beneficiary who has been continuously under care. The Period.end date corresponds with the date beneficiary was discharged from the facility, or died. Matches the final Statement Thru Date. When there is a discharge date, the Patient Discharge Status Code indicates the final disposition of the patient after discharge. (18, 19)"
* supportingInfo[drg] ^comment = "Claim diagnosis related group (DRG). DRGs require the DRG system; i.e., MS-DRG / AP-DRG / APR-DRG, the DRG version and the code value (32, 33. 113)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total.amount ^comment = "Total amount for each category (i.e., submitted, allowed, etc.) (148)"
* diagnosis.onAdmission ^comment = "Used to capture whether a diagnosis was present at time of a patient's admission. (28)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the inpatient institutional diagnosis is admitting, principal, other or an external cause of injury. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"
* procedure ^comment = "Medical procedure a patient received during inpatient stay. Current coding methods include: International Classification of Diseases Surgical Procedures (ICD-9). Information located on UB04 (Form Locator 74). (25, 27, 10, 12)"
* procedure.type ^comment = "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure. (186)"
* procedure.sequence ^comment =  " procedure.sequence values do not necessarily indicate any order in which the procedure occurred.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of procedure.type to identify primary and secondary procedures"


* insert EOBBaseProfileComments

---

File: repos/HL7_SLASH_carin-bb/input/fsh/EOBOralProfile.fsh

Profile: C4BBExplanationOfBenefitOralBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Oral-Basis
Title: "C4BB ExplanationOfBenefit Oral Basis"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by providers of oral services including Dental, Denture and Hygiene. The ADA Dental Claim Form provides a common format for reporting dental services to a patient's dental benefit plan.
The basis profile does not have requirements for financial data."
// 20210216 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitOral|1.2.0)
//* obeys EOB-oral-meta-profile-version


* obeys Oral-EOB-supportinginfo-additionalbodysite-requires-line-item
* obeys Oral-line-item-with-linked-additionalbody-site-requires-bodysite
* obeys Oral-EOB-surface-subsite-requires-tooth-number

* careTeam obeys EOB-prof-careTeam-practitioner
* careTeam.qualification MS
* careTeam.qualification from $USCoreProviderSpecialty (required)  // cardinality constraint?
* type = $HL7ClaimTypeCS#oral
* provider only Reference(C4BBPractitioner or C4BBOrganization)
* insert SupportingInfoSlicing
* supportingInfo contains
   clmrecvddate 0..1 MS and
   servicefacility 0..1 MS and
   orthodontics 0..1 MS and
   prosthesis 0..1 MS and
   additionalbodysite 0..* MS and
   missingtoothnumber 0..* MS and
   medicalrecordnumber 0..1 MS and
   patientaccountnumber 0..1 MS
   

* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS

* supportingInfo[servicefacility] ^short = "Service facility"
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].category MS
* supportingInfo[servicefacility].valueReference 1..1 MS
* supportingInfo[servicefacility].valueReference only Reference(C4BBOrganization)


* supportingInfo[orthodontics] ^short = "Orthodontics treatment indicator"
* supportingInfo[orthodontics].category = C4BBSupportingInfoType#orthodontics
* supportingInfo[orthodontics].category MS
* supportingInfo[orthodontics].timingDate ^short = "Orthodontics appliance application date (200)"
* supportingInfo[orthodontics].value[x] only Quantity
* supportingInfo[orthodontics].value[x] 1..1 MS
* supportingInfo[orthodontics].valueQuantity ^short = "Total number of months for orthodontia"

* supportingInfo[prosthesis] ^short = "Prosthesis"
* supportingInfo[prosthesis].category = C4BBSupportingInfoType#prosthesis
* supportingInfo[prosthesis].category MS
* supportingInfo[prosthesis].value[x] only boolean
* supportingInfo[prosthesis].value[x] 1..1 MS
* supportingInfo[prosthesis].valueBoolean ^short = "Prosthesis replacement indicator (202"
* supportingInfo[prosthesis].timingDate ^short = "Date of prior prosthesis replacement  (203)"

* supportingInfo[additionalbodysite] ^short = "Additional tooth number or oral cavity code"
* supportingInfo[additionalbodysite].category = C4BBSupportingInfoType#additionalbodysite
* supportingInfo[additionalbodysite].category MS
* supportingInfo[additionalbodysite].sequence MS
* supportingInfo[additionalbodysite].code 1..1 MS
* supportingInfo[additionalbodysite].code from OralBodySite (required)

* supportingInfo[missingtoothnumber] ^short = "Missing tooth number"
* supportingInfo[missingtoothnumber].category = C4BBSupportingInfoType#missingtoothnumber
* supportingInfo[missingtoothnumber].category MS
* supportingInfo[missingtoothnumber].code 1..1 MS
* supportingInfo[missingtoothnumber].code from ADAUniversalNumberingSystem (required)

* supportingInfo[medicalrecordnumber] ^short = "Medical record number"
* supportingInfo[medicalrecordnumber].category = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString 1..1 MS

* supportingInfo[patientaccountnumber] ^short = "Patient account number"
* supportingInfo[patientaccountnumber].category = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString 1..1 MS

* careTeam.role from C4BBClaimProfessionalAndNonClinicianCareTeamRole   (required)  // was PayerProfessionalAndNonClinicianProviderRole
* careTeam.role 1..1 MS
* diagnosis 0..* MS
* diagnosis.type 1..1 MS
* diagnosis.type from C4BBClaimProfessionalAndNonClinicianDiagnosisType  (required)
* diagnosis.diagnosis[x] 1..1 MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosis[x] from CDCICD910CMDiagnosisCodes (required)
* item.modifier from AMACPTCMSHCPCSModifiers (required)

* item.informationSequence MS
* item.modifier MS
* item.productOrService from ADADentalProcedureCode (required)

* item.productOrService MS
* item.productOrService MS
* item.serviced[x] 1..1 MS
* item.location[x] 1..1 MS
* item.location[x] only CodeableConcept
* item.locationCodeableConcept from CMSPlaceofServiceCodes (required)

* item.bodySite MS
* item.bodySite ^short = "First tooth number or oral cavity code"
* item.bodySite from OralBodySite (required) // may change to $ToothNumber
* item.subSite ^short = "Tooth surface for all teeth on line"
* item.subSite from C4BBSurfaceCodes (required)

* insert AdjudicationSlicing
* adjudication MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   renderingnetworkstatus 1..1 MS and 
   benefitpaymentstatus 1..* MS

* adjudication[billingnetworkstatus] ^short = "Billing provider network status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[renderingnetworkstatus] ^short = "Rendering provider network status"
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].category MS
* adjudication[renderingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[renderingnetworkstatus].reason 1..1 MS

* adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* adjudication[benefitpaymentstatus].reason 1..1 MS

* insert ItemAdjudicationSlicing
* item.adjudication MS
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL   
//   adjudicationamounttype 1..* MS and
   adjustmentreason 0..1 MS and
   benefitpaymentstatus 1..1 MS and
   allowedunits 0..1 MS
* item.adjudication[allowedunits] ^short = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider.  (149)"
* item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
* item.adjudication[allowedunits].value only decimal

* item.adjudication[adjustmentreason].category  = C4BBAdjudicationDiscriminator#adjustmentreason
* item.adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* item.adjudication[adjustmentreason].reason 1..1 MS
* item.adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"

// CHANGE FOR NON-FINANCIAL
/* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype] ^short = "Amounts"
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/
* item.adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* item.adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item.adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* item.adjudication[benefitpaymentstatus].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL

/* insert TotalSlicing
//* total.category from C4BBAdjudication  (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication (required)
*/


* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[servicefacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider. Service Facility Location is not just an address nor is it a patient’s home. Examples of Service Facility Location include hospitals, nursing homes, laboratories or homeless shelter. Service Facility Location identifier is the facility’s Type 2 Organization NPI if they are a health care provider as defined under HIPAA.
If the service facility is not assigned an NPI, this data element will not be populated.  Reference CMS 1500 element 32a (97, 170, 176)"

* supportingInfo[orthodontics] ^comment = "Orthodontics Treatment Indicator (199)"
* supportingInfo[orthodontics].code ^comment = "Indicates if the treatment is for orthodontics (199)"
* supportingInfo[orthodontics].timingDate ^comment = "Orthodontics Appliance Application Date (200)"
* supportingInfo[orthodontics].valueQuantity ^comment = "Total Number of Months for Orthodontia (201)"

* supportingInfo[prosthesis] ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].valueBoolean ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].timingDate ^comment = "Date of Prior Prosthesis Placement  (203)"


* supportingInfo[additionalbodysite] ^comment = "Additional Body Site - After First Occurrence (204). First tooth number or oral cavity code is indicated in bodySite. All additionalbodysite slices must be referenced by at least one item.informationSequence."
* supportingInfo[additionalbodysite].code ^comment = "Additional Body Site - After First Occurrence (204)"

* supportingInfo[missingtoothnumber] ^comment = "Missing Tooth Number - After First Occurrence (204)"
* supportingInfo[missingtoothnumber].code ^comment = "Missing Tooth Number - After First Occurrence (204)"



* item.bodySite ^comment = "Tooth Number - First Occurrence (196)"
* item.subSite ^comment = "Tooth Surface (197)"

* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[renderingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"

* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment = "Indicates if the professional and non-clinician diagnosis is principal or secondary (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code or CPT procedure code, submitted by the provider. (42)"
* item.location[x] ^comment = "Code indicating the location, such as inpatient, outpatient facility, office, or home health agency, where this service was performed. (46)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the primary, supervising, rendering, purchased service and referring care team. (95, 96, 99)"
* item.serviced[x]  ^comment = "Date services began/ended. Located on CMS 1500 (Form Locator 24A) (118)"

* insert EOBBaseProfileComments









Profile: C4BBExplanationOfBenefitOral
Parent: C4BB-ExplanationOfBenefit-Oral-Basis
Id: C4BB-ExplanationOfBenefit-Oral
Title: "C4BB ExplanationOfBenefit Oral"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by providers of oral services including Dental, Denture and Hygiene. The ADA Dental Claim Form provides a common format for reporting dental services to a patient's dental benefit plan.
The profile has requirements for financial data."
// 20210216 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitOral|1.2.0)
* obeys EOB-oral-meta-profile-version

* item.adjudication contains
   adjudicationamounttype 1..* MS

* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype] ^short = "Amounts"
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1


* total 1..* MS
* insert TotalSlicing
//* total.category from C4BBAdjudication  (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication (required)



* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[servicefacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rendering Provider. Service Facility Location is not just an address nor is it a patient’s home. Examples of Service Facility Location include hospitals, nursing homes, laboratories or homeless shelter. Service Facility Location identifier is the facility’s Type 2 Organization NPI if they are a health care provider as defined under HIPAA.
If the service facility is not assigned an NPI, this data element will not be populated.  Reference CMS 1500 element 32a (97, 170, 176)"

* supportingInfo[orthodontics] ^comment = "Orthodontics Treatment Indicator (199)"
* supportingInfo[orthodontics].code ^comment = "Indicates if the treatment is for orthodontics (199)"
* supportingInfo[orthodontics].timingDate ^comment = "Orthodontics Appliance Application Date (200)"
* supportingInfo[orthodontics].valueQuantity ^comment = "Total Number of Months for Orthodontia (201)"

* supportingInfo[prosthesis] ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].valueBoolean ^comment = "Prosthesis Replacement Indicator (202)"
* supportingInfo[prosthesis].timingDate ^comment = "Date of Prior Prosthesis Placement  (203)"


* supportingInfo[additionalbodysite] ^comment = "Additional Body Site - After First Occurrence (204). First tooth number or oral cavity code is indicated in bodySite. All additionalbodysite slices must be referenced by at least one item.informationSequence."
* supportingInfo[additionalbodysite].code ^comment = "Additional Body Site - After First Occurrence (204)"

* supportingInfo[missingtoothnumber] ^comment = "Missing Tooth Number - After First Occurrence (204)"
* supportingInfo[missingtoothnumber].code ^comment = "Missing Tooth Number - After First Occurrence (204)"



* item.bodySite ^comment = "Tooth Number - First Occurrence (196)"
* item.subSite ^comment = "Tooth Surface (197)"

* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[renderingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"

* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* item.adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment = "Indicates if the professional and non-clinician diagnosis is principal or secondary (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code or CPT procedure code, submitted by the provider. (42)"
* item.location[x] ^comment = "Code indicating the location, such as inpatient, outpatient facility, office, or home health agency, where this service was performed. (46)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the primary, supervising, rendering, purchased service and referring care team. (95, 96, 99)"
* item.serviced[x]  ^comment = "Date services began/ended. Located on CMS 1500 (Form Locator 24A) (118)"
* total.amount ^comment = "Total amount for each category (i.e., submitted, eligible, etc.) (148)"

* insert EOBBaseProfileComments



Invariant:  Oral-EOB-surface-subsite-requires-tooth-number
Description: "If item.subsite (tooth surface) exists then tooth number is required in bodySite or supportingInfo[additionalBodySite]"
//Expression: "item.where(subSite.exists() and (bodySite.where(coding.system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists().not() and informationSequence.combine(%context.supportingInfo.where(code.where(coding.system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists() and category.where(coding.code = 'additionalbodysite').exists()).sequence).isDistinct())).count() = 0"
Expression: "item.where(subSite.exists() and (bodySite.coding.where(system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists().not() and informationSequence.combine(%context.supportingInfo.where(code.coding.where(system='http://terminology.hl7.org/CodeSystem/ADAUniversalToothDesignationSystem').exists() and category.coding.where(code = 'additionalbodysite').exists()).sequence).isDistinct())).count() = 0"
Severity:   #error

Invariant:  Oral-EOB-supportinginfo-additionalbodysite-requires-line-item
Description: "supportingInfo repetitions with additional body site must be referred to by one or more repetitions of item.informationSequence"
//Expression: "supportingInfo.where(category.coding.code = 'additionalbodysite').sequence.subsetOf(%context.item.informationSequence)"
//Expression: "supportingInfo.where(category.coding.where(code = 'additionalbodysite').exists()).where(sequence.subsetOf(%context.item.informationSequence)).exists()"
Expression: "supportingInfo.where(category.coding.where(code = 'additionalbodysite').exists()).sequence.subsetOf(%context.item.informationSequence)"
Severity:   #error


Invariant:  Oral-line-item-with-linked-additionalbody-site-requires-bodysite
Description: "At least one item.bodySite needs to be present if an item.informationSequence references supportingInfo[additionalbodysite].sequence"
//Expression: "item.where(informationSequence.intersect(%context.supportingInfo.where(category.coding.code = 'additionalbodysite').sequence).exists()).bodySite.exists()"
Expression: "item.where(informationSequence.intersect(%context.supportingInfo.where(category.coding.where(code = 'additionalbodysite').exists()).sequence).exists()).where(bodySite.count() != count()).empty()"
Severity:   #error


---

File: repos/HL7_SLASH_carin-bb/input/fsh/EOBOutpatientProfile.fsh

Profile: C4BBExplanationOfBenefitOutpatientInstitutionalBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis
Title: "C4BB ExplanationOfBenefit Outpatient Institutional Basis"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for outpatient services, which may include including the use of equipment and supplies, laboratory services, radiology services and other charges. Outpatient claims are submitted for services rendered at an institution that are not part of an overnight stay.
The claims data is based on the institutional claim form UB-04, submission standards adopted by the Department of Health and Human Services.
The basis profile does not have requirements for financial data."
// 20210322 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitOutpatientInstitutional|1.2.0)
//* obeys EOB-institutional-outpatient-meta-profile-version

// 20210203 CAS: https://jira.hl7.org/browse/FHIR-30370 - NUBC Point Of Origin - newborns
* obeys EOB-inst-pointoforigin

* type  = $HL7ClaimTypeCS#institutional
* subType 1..1 MS
* subType from C4BBInstitutionalClaimSubType (required)
* subType = C4BBInstitutionalClaimSubType#outpatient
* careTeam.role from C4BBClaimInstitutionalCareTeamRole  (required)   // was PayerInstitutionalProviderRole
* careTeam.role 1..1 MS
* careTeam obeys EOB-inst-careTeam-practitioner
* careTeam obeys EOB-inst-careTeam-organization
* careTeam obeys EOB-careteam-qualification
* careTeam.qualification from $USCoreProviderSpecialty (required)
* identifier MS
* diagnosis 1..*
* diagnosis.diagnosis[x] 1..1 MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosis[x] from CDCICD910CMDiagnosisCodes (required)
* provider only Reference(C4BBOrganization)
* insert SupportingInfoSlicing
* supportingInfo contains
   clmrecvddate 0..1 MS and
   typeofbill 0..1 MS and
   pointoforigin 0..1 MS and
   admtype 0..1 MS and
   discharge-status 0..1 MS and
        // 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number
   medicalrecordnumber 0..1 MS and
   patientaccountnumber 0..1 MS


* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS

* supportingInfo[typeofbill] ^short = "Type of bill"
* supportingInfo[typeofbill].category = C4BBSupportingInfoType#typeofbill
* supportingInfo[typeofbill].category MS
* supportingInfo[typeofbill].code from AHANUBCTypeOfBill (required)
* supportingInfo[typeofbill].code 1..1 MS

* supportingInfo[admtype] ^short = "Admission type"
* supportingInfo[admtype].category = C4BBSupportingInfoType#admtype
* supportingInfo[admtype].category MS
* supportingInfo[admtype].code from AHANUBCPriorityTypeOfAdmissionOrVisit  (required)
* supportingInfo[admtype].code 1..1 MS

* supportingInfo[pointoforigin] ^short = "Point of origin for admission or visit"
* supportingInfo[pointoforigin].category = C4BBSupportingInfoType#pointoforigin
* supportingInfo[pointoforigin].category MS
* supportingInfo[pointoforigin].code from AHANUBCPointOfOriginForAdmissionOrVisit (required)
// FHIR-30807 - Change cardinality in EOB Inpatient and Outpatient Institutional Profiles
* supportingInfo[pointoforigin].code 1..1 MS

* supportingInfo[discharge-status] ^short = "Discharge status"
* supportingInfo[discharge-status].category = C4BBSupportingInfoType#discharge-status
* supportingInfo[discharge-status].category MS
* supportingInfo[discharge-status].code  1..1 MS
* supportingInfo[discharge-status].code from AHANUBCPatientDischargeStatus   (required)
// 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number

* supportingInfo[medicalrecordnumber] ^short = "Medical record number"
* supportingInfo[medicalrecordnumber].category = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString 1..1 MS

* supportingInfo[patientaccountnumber] ^short = "Patient account number"
* supportingInfo[patientaccountnumber].category = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString 1..1 MS
* item.revenue from AHANUBCRevenueCodes (required)
* item.modifier from AMACPTCMSHCPCSModifiers (required)
* item.productOrService from C4BBEOBInstitutionalProcedureCodes (required)
/* 20211110 CAS: https://jira.hl7.org/browse/FHIR-32850
* item.productOrService obeys EOB-out-inst-item-productorservice
*/
//* item.productOrService ^comment = "Put the comment here for item.productOrService here"
//* item  ^comment = "Put the comment here for item"

// CHANGE FOR NON-FINANCIAL
//* insert EOBHeaderItemAdjudicationInvariant
// CHANGE FOR NON-FINANCIAL
//* insert ItemAdjudicationInvariant
* insert ItemAdjudicationSlicing
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL
//   adjudicationamounttype 0..* MS and  /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS and
   allowedunits 0..1 MS


* item.adjudication[allowedunits] ^short = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider.  (149)"
* item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
* item.adjudication[allowedunits].value only decimal
* item.adjudication[allowedunits].value 1..1 MS

* item.adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* item.adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* item.adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* item.adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/
/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
* insert AdjudicationInvariant
*/
* insert AdjudicationSlicing
* adjudication  MS
* item.adjudication  MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   benefitpaymentstatus 1..1 MS and
// CHANGE FOR NON-FINANCIAL   
//   adjudicationamounttype 0..* MS and  /* restricted to 1..* by invariant */
   adjustmentreason 0..* MS

* adjudication[billingnetworkstatus] ^short = "Billing provider networking status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* adjudication[benefitpaymentstatus].reason 1..1 MS

* adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* adjudication[adjustmentreason].category = C4BBAdjudicationDiscriminator#adjustmentreason
* adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* adjudication[adjustmentreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication (required)
* adjudication[adjudicationamounttype].amount 1..1 MS
*/
* diagnosis 1..*
* diagnosis.type 1..1 MS
* diagnosis.type from C4BBClaimOutpatientInstitutionalDiagnosisType  (required)
// CHANGE FOR NON-FINANCIAL
/* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
//* total[adjudicationamounttype].amount 1..1
*/
* status MS
* created MS
* item.sequence MS
* item.revenue MS
* item.productOrService MS
* item.modifier MS

* item.serviced[x] 1..1
* item.serviced[x] only date 
* item.servicedDate MS

* item.quantity MS
* payment.type MS
* payment.date MS
* processNote.text MS

* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the outpatient institutional diagnosis is principal, other, an external cause of injury or a patient reason for visit. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"


* insert EOBBaseProfileComments


Profile: C4BBExplanationOfBenefitOutpatientInstitutional
Parent: C4BB-ExplanationOfBenefit-Outpatient-Institutional-Basis
Id: C4BB-ExplanationOfBenefit-Outpatient-Institutional
Title: "C4BB ExplanationOfBenefit Outpatient Institutional"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by clinics, hospitals, skilled nursing facilities and other institutions for outpatient services, which may include including the use of equipment and supplies, laboratory services, radiology services and other charges. Outpatient claims are submitted for services rendered at an institution that are not part of an overnight stay.
The claims data is based on the institutional claim form UB-04, submission standards adopted by the Department of Health and Human Services.
The profile has requirements for financial data."

* obeys EOB-institutional-outpatient-meta-profile-version
* insert EOBHeaderItemAdjudicationInvariant
* insert ItemAdjudicationInvariant
* item.adjudication contains
   adjudicationamounttype 0..* MS /* restricted to 1..* by invariant */


* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
/* removed - FHIR-38063 - Update Invariants to support contracting and benefit payment status move to EOB.adjudication
* insert AdjudicationInvariant
*/

* adjudication contains
   adjudicationamounttype 0..* MS  /* restricted to 1..* by invariant */

* adjudication[adjudicationamounttype] ^short = "Claim level adjudication type and amount"
* adjudication[adjudicationamounttype].category from C4BBAdjudication (required)
* adjudication[adjudicationamounttype].amount 1..1 MS

* total 1..* MS
* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
* total[adjudicationamounttype].amount MS
* total[adjudicationamounttype].amount 1..1


* supportingInfo[pointoforigin] ^comment = "Identifies the place where the patient was identified as needing admission to an institution. This is a two position code mapped from the standard values for the UB-04 Source of Admission code (FL-15). (13)"
* supportingInfo[admtype] ^comment = "Priority of the admission. Information located on (UB04 Form Locator 14). For example, an admission type of elective indicates that the patient's condition permitted time for medical services to be scheduled. (14)"
* supportingInfo[typeofbill] ^comment = "UB04 (Form Locator 4) type of bill code provides specific information for payer purposes. The first digit of the three-digit number denotes the type of institution, the second digit classifies the type of care being billed, and the third digit  identifies the frequency of the bill for a specific course of treatment or inpatient confinement. (17)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[discharge-status] ^comment = "Patient’s status as of the discharge date for a facility stay. Information located on UB04. (Form Locator 17). (117)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* total.amount ^comment = "Total amount for each category (i.e., submitted, allowed, etc.) (148)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment =  "Indicates if the outpatient institutional diagnosis is principal, other, an external cause of injury or a patient reason for visit. (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (42)"
* item.revenue ^comment = "Code used on the UB-04 (Form Locator 42) to identify a specific accommodation, ancillary service, or billing calculation related to the service being billed (86)"
* adjudication[adjustmentreason].reason ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the care team (primary care provider, attending, referring, otheroperating, operating, and rendering) for the admission. (93, 96, 98, 99, 173)"


* insert EOBBaseProfileComments

---

File: repos/HL7_SLASH_carin-bb/input/fsh/EOBPharmacyProfile.fsh

Profile: C4BBExplanationOfBenefitPharmacyBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Pharmacy-Basis
Title: "C4BB ExplanationOfBenefit Pharmacy Basis"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by retail pharmacies.
The claims data is based on submission standards adopted by the Department of Health and Human Services defined by NCPDP (National Council for Prescription Drug Program)
The basis profile does not have requirements for financial data."
// 20210322 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitPharmacy|1.2.0)
//* obeys EOB-pharmacy-meta-profile-version

* type = $HL7ClaimTypeCS#pharmacy
// * provider only Reference(C4BBOrganization or C4BBPractitionerRole or C4BBPractitioner)   Set in Abstract Class.  No need to set here.
* careTeam obeys EOB-pharm-careTeam-practitioner
* careTeam obeys EOB-pharm-careTeam-organization
* insert SupportingInfoSlicing
* supportingInfo contains
   dayssupply 1..1 MS and
   dawcode 1..1 MS and
   refillNum 1..1 MS and
   refillsAuthorized 1..1 and
   brandgenericindicator 0..1 MS and
   rxoriginCode 0..1 MS and
   clmrecvddate 0..1 MS and
   compoundcode 0..1 MS
   

* supportingInfo[brandgenericindicator] ^short = "Plan reported brand or generic drug indicator"
* supportingInfo[brandgenericindicator].category = C4BBSupportingInfoType#brandgenericindicator
* supportingInfo[brandgenericindicator].category MS
* supportingInfo[brandgenericindicator].code from NCPDPBrandGenericIndicator (required)
* supportingInfo[brandgenericindicator].code 1..1 MS
* supportingInfo[rxoriginCode] ^short = "Prescription origin code"
* supportingInfo[rxoriginCode].category = C4BBSupportingInfoType#rxorigincode
* supportingInfo[rxoriginCode].category MS
* supportingInfo[rxoriginCode].code from NCPDPPrescriptionOriginCode (required)
* supportingInfo[rxoriginCode].code 1..1 MS
* supportingInfo[refillNum] ^short = "The number fill of the claim dispensed supply"
* supportingInfo[refillNum].category = C4BBSupportingInfoType#refillnum
* supportingInfo[refillNum].category MS
* supportingInfo[refillNum].value[x] 1..1 MS
* supportingInfo[refillNum].value[x] only Quantity
* supportingInfo[refillsAuthorized] ^short = "Number or refills authorized by prescriber"
* supportingInfo[refillsAuthorized].category = C4BBSupportingInfoType#refillsauthorized
* supportingInfo[refillsAuthorized].category MS
* supportingInfo[refillsAuthorized].value[x] 1..1 MS
* supportingInfo[refillsAuthorized].value[x] only Quantity
* supportingInfo[dawcode] ^short = "Dispense and written product selection code"
* supportingInfo[dawcode].category = C4BBSupportingInfoType#dawcode
* supportingInfo[dawcode].category MS
* supportingInfo[dawcode].code from NCPDPDispensedAsWrittenOrProductSelectionCode (required)
* supportingInfo[dawcode].code 1..1 MS

* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS
* supportingInfo[dayssupply] ^short = "Days supply"
* supportingInfo[dayssupply].category = C4BBSupportingInfoType#dayssupply
* supportingInfo[dayssupply].category  MS
* supportingInfo[dayssupply].value[x] 1..1 MS
* supportingInfo[dayssupply].value[x] only Quantity
* supportingInfo[compoundcode] ^short = "Code indicating whether or not the prescription is a compound"
* supportingInfo[compoundcode].category = C4BBSupportingInfoType#compoundcode
* supportingInfo[compoundcode].category MS
* supportingInfo[compoundcode].code from NCPDPCompoundCode (required)
* supportingInfo[compoundcode].code 1..1 MS
* item.productOrService from FDANDCOrCompound (required)
* item.detail.productOrService  from FDANationalDrugCode  (required)
* item.detail MS
* item.detail.quantity MS
* careTeam.role from C4BBClaimPharmacyTeamRole  (required)   // was PayerPharmacyProviderRole
* careTeam.role 1..1 MS

* insert AdjudicationSlicing
* adjudication  MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   benefitpaymentstatus 1..1 MS


* adjudication[billingnetworkstatus] ^short = "Billing provider networking status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* adjudication[benefitpaymentstatus].reason 1..1 MS


* insert ItemAdjudicationSlicing
* item.adjudication MS
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL
//   adjudicationamounttype 1..* MS and
   rejectreason 0..1 MS

/* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/

* item.adjudication[rejectreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"
* item.adjudication[rejectreason].category  = C4BBAdjudicationDiscriminator#rejectreason
* item.adjudication[rejectreason].reason from NCPDPRejectCode
* item.adjudication[rejectreason].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total.category 1..1 MS
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
*/
* patient MS
* insurance.coverage MS
* insurance MS
* type MS
* identifier MS
* item.sequence MS
* item.detail.productOrService MS
* item.productOrService MS
* item.quantity MS
* item.productOrService MS
* item.serviced[x] 1..1
* item.serviced[x] only date 
* item.servicedDate MS       // listed as item.serviced in CPCDS spreadsheet
* payment.type MS
* provider MS
* careTeam.provider MS
* payment.date MS
* related MS
* payee.type MS
* payee.party MS
* careTeam.provider MS
* status MS
* insurance MS
* total.amount MS
* created MS
* processNote.text MS


* supportingInfo[brandgenericindicator] ^comment = "Whether the plan adjudicated the claim as a brand or generic drug (144)"
* supportingInfo[rxoriginCode] ^comment = "Whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy (143)"
* supportingInfo[refillNum] ^comment = "The number fill of the current dispensed supply (0, 1, 2, etc.) (137)"
* supportingInfo[dawcode] ^comment = "Prescriber's instruction regarding substitution of generic equivalents or order to dispense the specific prescribed medication (79)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[dayssupply] ^comment = "Number of days supply of medication dispensed by the pharmacy (77)"
* supportingInfo[compoundcode] ^comment = "The code indicating whether or not the prescription is a compound.  NCPDP field # 406-D6 (78)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) that is effective on the date of service. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* item.adjudication[rejectreason] ^comment = "Reason codes used to interpret the Non-Covered Amount (92)"
* identifier ^comment = "Assigned by the pharmacy at the time the prescription is filled (35)"
* item.productOrService ^comment = "Values are NDC Codes (38) when Compound Code (78) = 0 or 1.  When the Compound Code = 2, productOrService = 'compound' and map the ingredient to ExplanationOfBenefit.item.detail.productOrService"
* item.detail.productOrService ^comment = "Values are NDC Codes (38) when Compound Code (78) = 2"
* item.quantity ^comment = "Quantity dispensed for the drug (39) / The unit of measurement for the drug. (gram, ml, etc.) (151).  Populate for all Compound Code values.  When the Compound Code = 2, if available, map the ingredient to ExplanationOfBenefit.item.detail.quantity"
* careTeam.provider ^comment = "The identifier assigned to the PCP (96) or the identifier from NCPDP field # 411-DB (Prescriber ID) that identifies the National Provider Identifier (NPI) of the provider who prescribed the pharmaceutical. (122)."
* item.serviced[x] ^comment = "Identifies date the prescription was filled or professional service rendered (90)"   // listed as item.serviced in CPCDS spreadsheet

* insert EOBBaseProfileComments









Profile: C4BBExplanationOfBenefitPharmacy
Parent: C4BB-ExplanationOfBenefit-Pharmacy-Basis
Id: C4BB-ExplanationOfBenefit-Pharmacy
Title: "C4BB ExplanationOfBenefit Pharmacy"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by retail pharmacies.
The claims data is based on submission standards adopted by the Department of Health and Human Services defined by NCPDP (National Council for Prescription Drug Program)
The profile has requirements for financial data."

* obeys EOB-pharmacy-meta-profile-version
* item.adjudication contains
   adjudicationamounttype 1..* MS
   

* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1

* total 1..* MS
* insert TotalSlicing
* total.category from C4BBTotalCategoryDiscriminator (extensible)
* total.category 1..1 MS
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)


* supportingInfo[brandgenericindicator] ^comment = "Whether the plan adjudicated the claim as a brand or generic drug (144)"
* supportingInfo[rxoriginCode] ^comment = "Whether the prescription was transmitted as an electronic prescription, by phone, by fax, or as a written paper copy (143)"
* supportingInfo[refillNum] ^comment = "The number fill of the current dispensed supply (0, 1, 2, etc.) (137)"
* supportingInfo[dawcode] ^comment = "Prescriber's instruction regarding substitution of generic equivalents or order to dispense the specific prescribed medication (79)"
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"
* supportingInfo[dayssupply] ^comment = "Number of days supply of medication dispensed by the pharmacy (77)"
* supportingInfo[compoundcode] ^comment = "The code indicating whether or not the prescription is a compound.  NCPDP field # 406-D6 (78)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) that is effective on the date of service. (101)"
* adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* item.adjudication[rejectreason] ^comment = "Reason codes used to interpret the Non-Covered Amount (92)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* identifier ^comment = "Assigned by the pharmacy at the time the prescription is filled (35)"
* item.productOrService ^comment = "Values are NDC Codes (38) when Compound Code (78) = 0 or 1.  When the Compound Code = 2, productOrService = 'compound' and map the ingredient to ExplanationOfBenefit.item.detail.productOrService"
* item.detail.productOrService ^comment = "Values are NDC Codes (38) when Compound Code (78) = 2"
* item.quantity ^comment = "Quantity dispensed for the drug (39) / The unit of measurement for the drug. (gram, ml, etc.) (151).  Populate for all Compound Code values.  When the Compound Code = 2, if available, map the ingredient to ExplanationOfBenefit.item.detail.quantity"
* careTeam.provider ^comment = "The identifier assigned to the PCP (96) or the identifier from NCPDP field # 411-DB (Prescriber ID) that identifies the National Provider Identifier (NPI) of the provider who prescribed the pharmaceutical. (122)."
* total.amount ^comment = "Total amount for each category (i.e., submitted, allowed, etc.) (148)"
* item.serviced[x] ^comment = "Identifies date the prescription was filled or professional service rendered (90)"   // listed as item.serviced in CPCDS spreadsheet

* insert EOBBaseProfileComments


---

File: repos/HL7_SLASH_carin-bb/input/fsh/EOBProfessionalProfile.fsh

Profile: C4BBExplanationOfBenefitProfessionalNonClinicianBasis
Parent: C4BB-ExplanationOfBenefit
Id: C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis
Title: "C4BB ExplanationOfBenefit Professional NonClinician Basis"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by physicians, suppliers and other non-institutional providers for professional and vision services. These services may be rendered in inpatient or outpatient, including office locations. The claims data is based on the professional claim form 1500, submission standards adopted by the Department of Health and Human Services as form CMS-1500.
The basis profile does not have requirements for financial data."
// 20210322 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBExplanationOfBenefitProfessionalNonClinician|1.2.0)
//* obeys EOB-professional-nonclinician-meta-profile-version
* obeys EOB-prof-all-transportation-supportinginfo-linked-to-line

* careTeam obeys EOB-prof-careTeam-practitioner
* careTeam.qualification MS
* careTeam.qualification from $USCoreProviderSpecialty (required)  // cardinality constraint?

* billablePeriod 1..1
//* type = $HL7ClaimTypeCS#professional
* type from C4BBProfessionalAndNonClinicianClaimType (required)

// * provider only Reference(C4BBOrganization or C4BBPractitionerRole or C4BBPractitioner) -- set in base class
* insert SupportingInfoSlicing
* supportingInfo contains
   clmrecvddate 0..1 MS and
   servicefacility 0..1 MS and
   // 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number
   medicalrecordnumber 0..1 MS and
   patientaccountnumber 0..1 MS and
   patientweight 0..* MS and
   ambulancetransportreason 0..* MS and
   transportationdistance 0..* MS and
   roudtrippurpose 0..* MS and
   stretcherpurpose 0..* MS and
   pickuplocation 0..* MS and
   dropofflocation 0..* MS

* supportingInfo[clmrecvddate] ^short = "Claim received date"
* supportingInfo[clmrecvddate].category = C4BBSupportingInfoType#clmrecvddate
* supportingInfo[clmrecvddate].category MS
* supportingInfo[clmrecvddate].timing[x] only date
* supportingInfo[clmrecvddate].timing[x] 1..1 MS

* supportingInfo[servicefacility] ^short = "Service facility"
* supportingInfo[servicefacility].category = C4BBSupportingInfoType#servicefacility
* supportingInfo[servicefacility].category MS
* supportingInfo[servicefacility].valueReference 1..1 MS
* supportingInfo[servicefacility].valueReference only Reference(C4BBOrganization)
// 20210312 CAS: https://jira.hl7.org/browse/FHIR-31534 - Medical Record Number and Patient Account Number
* supportingInfo[medicalrecordnumber] ^short = "Medical record number"
* supportingInfo[medicalrecordnumber].category = C4BBSupportingInfoType#medicalrecordnumber
* supportingInfo[medicalrecordnumber].valueString 1..1 MS

* supportingInfo[patientaccountnumber] ^short = "Patient account number"
* supportingInfo[patientaccountnumber].category = C4BBSupportingInfoType#patientaccountnumber
* supportingInfo[patientaccountnumber].valueString 1..1 MS


* supportingInfo[patientweight].category = C4BBSupportingInfoType#patientweight
* supportingInfo[patientweight].value[x] only Quantity
* supportingInfo[patientweight].valueQuantity 1..1
* supportingInfo[patientweight].valueQuantity.unit = "[lb_av]"
* supportingInfo[patientweight].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[patientweight].valueQuantity.value 1..1
* supportingInfo[patientweight].code 0..0
* supportingInfo[patientweight].timing[x] 0..0

* supportingInfo[ambulancetransportreason].category = C4BBSupportingInfoType#ambulancetransportreason
* supportingInfo[ambulancetransportreason].reason 1..1
* supportingInfo[ambulancetransportreason].reason from C4BBAmbulanceTransportReasonCodes (required)
* supportingInfo[ambulancetransportreason].code 0..0
* supportingInfo[ambulancetransportreason].timing[x] 0..0

* supportingInfo[transportationdistance].category = C4BBSupportingInfoType#transportationdistance
* supportingInfo[transportationdistance].value[x] only Quantity
* supportingInfo[transportationdistance].valueQuantity 1..1
* supportingInfo[transportationdistance].valueQuantity.unit = "[mi_i]"
* supportingInfo[transportationdistance].valueQuantity.system = "http://unitsofmeasure.org"
* supportingInfo[transportationdistance].valueQuantity.value 1..1
* supportingInfo[transportationdistance].code 0..0
* supportingInfo[transportationdistance].timing[x] 0..0

* supportingInfo[roudtrippurpose].category = C4BBSupportingInfoType#roudtrippurpose
* supportingInfo[roudtrippurpose].value[x] only string
* supportingInfo[roudtrippurpose].valueString 1..1
* supportingInfo[roudtrippurpose].code 0..0
* supportingInfo[roudtrippurpose].timing[x] 0..0

* supportingInfo[stretcherpurpose].category = C4BBSupportingInfoType#stretcherpurpose
* supportingInfo[stretcherpurpose].value[x] only string
* supportingInfo[stretcherpurpose].valueString 1..1
* supportingInfo[stretcherpurpose].code 0..0
* supportingInfo[stretcherpurpose].timing[x] 0..0

* supportingInfo[pickuplocation].category = C4BBSupportingInfoType#pickuplocation
* supportingInfo[pickuplocation].value[x] only string
* supportingInfo[pickuplocation].valueString 1..1
* supportingInfo[pickuplocation].code 0..0
* supportingInfo[pickuplocation].timing[x] 0..0

* supportingInfo[dropofflocation].category = C4BBSupportingInfoType#dropofflocation
* supportingInfo[dropofflocation].value[x] only string
* supportingInfo[dropofflocation].valueString 1..1
* supportingInfo[dropofflocation].code 0..0
* supportingInfo[dropofflocation].timing[x] 0..0


* careTeam.role from C4BBClaimProfessionalAndNonClinicianCareTeamRole   (required)  // was PayerProfessionalAndNonClinicianProviderRole
* careTeam.role 1..1 MS
* diagnosis 1..* MS
* diagnosis.type 1..1 MS
* diagnosis.type from C4BBClaimProfessionalAndNonClinicianDiagnosisType  (required)
* diagnosis.diagnosis[x] 1..1 MS
* diagnosis.diagnosis[x] only CodeableConcept
* diagnosis.diagnosis[x] from CDCICD910CMDiagnosisCodes (required)
* item.modifier from AMACPTCMSHCPCSModifiers (required)
// CAS 20210118: Add MS to Professional and NonClinican item.productOrService and item.modifier https://jira.hl7.org/browse/FHIR-30358
* item.modifier MS
* item.productOrService from AMACPTCMSHCPCSProcedureCodes (required)

//* item.productOrService obeys EOB-vision-item-productorservice
* obeys EOB-vision-item-productorservice
// 20210201 CAS: FHIR-30357 - item.productOrService is required when item.revenue is provided
//* item.productOrService obeys EOB-prof-item-productorservice
// CAS 20210118: Add MS to Professional and NonClinican item.productOrService and item.modifier https://jira.hl7.org/browse/FHIR-30358
* item.productOrService MS
* item.serviced[x] 1..1
// FHIR-34148 - Make Professional NonClinician EoB item.location required Persuasive, change cardinality to 1..1 and maske Must Support
* item.location[x] 1..1 MS
* item.location[x] only CodeableConcept
* item.locationCodeableConcept from CMSPlaceofServiceCodes (required)

* insert AdjudicationSlicing
* adjudication MS
* adjudication contains
   billingnetworkstatus 0..1 MS and
   renderingnetworkstatus 0..1 MS

* adjudication[billingnetworkstatus] ^short = "Billing provider networking status"
* adjudication[billingnetworkstatus].category = C4BBAdjudicationDiscriminator#billingnetworkstatus
* adjudication[billingnetworkstatus].category MS
* adjudication[billingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[billingnetworkstatus].reason 1..1 MS

* adjudication[renderingnetworkstatus] ^short = "Rendering provider networking status"
* adjudication[renderingnetworkstatus].category = C4BBAdjudicationDiscriminator#renderingnetworkstatus
* adjudication[renderingnetworkstatus].category MS
* adjudication[renderingnetworkstatus].reason from C4BBPayerProviderNetworkStatus  (required)
* adjudication[renderingnetworkstatus].reason 1..1 MS

* insert ItemAdjudicationSlicing
* item.adjudication MS
* item.adjudication contains
// CHANGE FOR NON-FINANCIAL
//   adjudicationamounttype 1..* MS and
   adjustmentreason 0..1 MS and
   benefitpaymentstatus 1..1 MS and
   allowedunits 0..1 MS

* item.adjudication[allowedunits] ^short = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider.  (149)"
* item.adjudication[allowedunits].category = C4BBAdjudicationDiscriminator#allowedunits
* item.adjudication[allowedunits].value only decimal
* item.adjudication[adjustmentreason].category  = C4BBAdjudicationDiscriminator#adjustmentreason
* item.adjudication[adjustmentreason].reason from X12ClaimAdjustmentReasonCodesCMSRemittanceAdviceRemarkCodes
* item.adjudication[adjustmentreason].reason 1..1 MS
* item.adjudication[adjustmentreason] ^short = "Reason codes used to interpret the Non-Covered Amount (92)"

// CHANGE FOR NON-FINANCIAL
/* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype] ^short = "Amounts"
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1
*/

* item.adjudication[benefitpaymentstatus] ^short = "Indicates the in network or out of network payment status of the claim. (142)"
* item.adjudication[benefitpaymentstatus].category = C4BBAdjudicationDiscriminator#benefitpaymentstatus
* item.adjudication[benefitpaymentstatus].reason from  C4BBPayerBenefitPaymentStatus  (required)
* item.adjudication[benefitpaymentstatus].reason 1..1 MS

// CHANGE FOR NON-FINANCIAL
/* insert TotalSlicing
* total.category from C4BBAdjudication  (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)
*/
* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"

* supportingInfo[servicefacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rndering Provider. Service Facility Location is not just an address nor is it a patient’s home. Examples of Service Facility Location include hospitals, nursing homes, laboratories or homeless shelter. Service Facility Location identifier is the facility’s Type 2 Organization NPI if they are a health care provider as defined under HIPAA.
If the service facility is not assigned an NPI, this data element will not be populated.  Reference CMS 1500 element 32a (97, 170, 176)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[renderingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission. (101)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment = "Indicates if the professional and non-clinician diagnosis is principal or secondary (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code or CPT procedure code, submitted by the provider. (42)"
* item.location[x] ^comment = "Code indicating the location, such as inpatient, outpatient facility, office, or home health agency, where this service was performed. (46)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the primary, supervising, rendering, purchased service and referring care team. (95, 96, 99)"
* item.serviced[x]  ^comment = "Date services began/ended. Located on CMS 1500 (Form Locator 24A) (118)"


* insert EOBBaseProfileComments


//FHIR-37615
//Fields to report non-emergency transportation services data
//Create Invariant requiring all ExplanationOfBenefit.SupportingInfo where category from C4BBTransportationServiceCategories sequence is referenced in ExplanationOfBenefit.line.informationSequence
// Potential starter to test
// supportingInfo.where(memberOf('C4BBTransportationServiceCategories'))).sequence.subsetOf(item.informationSequence.distinct())



Profile: C4BBExplanationOfBenefitProfessionalNonClinician
Parent: C4BB-ExplanationOfBenefit-Professional-NonClinician-Basis
Id: C4BB-ExplanationOfBenefit-Professional-NonClinician
Title: "C4BB ExplanationOfBenefit Professional NonClinician"
Description: "This profile is used for Explanation of Benefits (EOBs) based on claims submitted by physicians, suppliers and other non-institutional providers for professional and vision services. These services may be rendered in inpatient or outpatient, including office locations. The claims data is based on the professional claim form 1500, submission standards adopted by the Department of Health and Human Services as form CMS-1500.
The profile has requirements for financial data."
* obeys EOB-professional-nonclinician-meta-profile-version
* item.adjudication contains
   adjudicationamounttype 1..* MS
   
* item.adjudication[adjudicationamounttype] ^short =  "Line level adjudication type and amount"
* item.adjudication[adjudicationamounttype].category from C4BBAdjudication
* item.adjudication[adjudicationamounttype] ^short = "Amounts"
* item.adjudication[adjudicationamounttype].amount  MS
* item.adjudication[adjudicationamounttype].amount 1..1

* total 1..* MS
* insert TotalSlicing
* total.category from C4BBAdjudication  (extensible)
* total contains
   adjudicationamounttype 1..* MS

* total[adjudicationamounttype] ^short =  "Total adjudication type and amount"
* total[adjudicationamounttype].category from C4BBAdjudication  (required)

* supportingInfo[clmrecvddate] ^comment = "The date the claim was received by the payer (88)"

* supportingInfo[servicefacility] ^comment = "Service Facility Location information conveys the name, full address and identifier of the facility where services were rendered when that is different from the Billing/Rndering Provider. Service Facility Location is not just an address nor is it a patient’s home. Examples of Service Facility Location include hospitals, nursing homes, laboratories or homeless shelter. Service Facility Location identifier is the facility’s Type 2 Organization NPI if they are a health care provider as defined under HIPAA.
If the service facility is not assigned an NPI, this data element will not be populated.  Reference CMS 1500 element 32a (97, 170, 176)"
* supportingInfo[medicalrecordnumber] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
* supportingInfo[patientaccountnumber] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* adjudication[billingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Plan (regardless of the network) as of the effective date of service or admission. (101)"
* adjudication[renderingnetworkstatus] ^comment = "Indicates that the Billing Provider has a contract with the Payer as of the effective date of service or admission. (101)"
* item.adjudication[allowedunits] ^comment = "The quantity of units, times, days, visits, services, or treatments allowed for the service described by the HCPCS code, revenue code or procedure code, submitted by the provider. (149)"
* item.adjudication[adjustmentreason] ^comment = "Reason codes used to interpret the Non-Covered Amount that are provided to the Provider. (92)"
* item.adjudication[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* item.adjudication[benefitpaymentstatus] ^comment = "Indicates the in network or out of network payment status of the claim. (142)"
* total[adjudicationamounttype] ^comment = "Describes the various amount fields used when payers receive and adjudicate a claim. (187)"
* diagnosis ^comment = "Diagnosis codes describe an individual's disease or medical condition. (6, 7, 8, 21, 22, 23, 30)"
* diagnosis.type ^comment = "Indicates if the professional and non-clinician diagnosis is principal or secondary (21, 22, 23)"
* diagnosis.sequence ^comment =  "Diagnosis.sequence values do not necessarily indicate any order in which the diagnosis was reported or identified.  client app implementations should not assign any significance to the sequence values.  client app implementations should use the values of diagnosis.type to identify primary, secondary, etc."
* item.productOrService ^comment = "Medical procedure a patient received from a health care provider. Current coding methods include: CPT-4 and HCFA Common Procedure Coding System Level II - (HCPCSII). (40)"
* item.modifier ^comment = "Modifier(s) for the procedure represented on this line. Identifies special circumstances related to the performance of the service. (41)"
* item.quantity ^comment = "The quantity of units, times, days, visits, services, or treatments for the service described by the HCPCS code or CPT procedure code, submitted by the provider. (42)"
* item.location[x] ^comment = "Code indicating the location, such as inpatient, outpatient facility, office, or home health agency, where this service was performed. (46)"
* careTeam.provider ^comment = "The National Provider Identifier assigned to the primary, supervising, rendering, purchased service and referring care team. (95, 96, 99)"
* item.serviced[x]  ^comment = "Date services began/ended. Located on CMS 1500 (Form Locator 24A) (118)"
* total.amount ^comment = "Total amount for each category (i.e., submitted, eligible, etc.) (148)"

* insert EOBBaseProfileComments

---

File: repos/HL7_SLASH_carin-bb/input/fsh/OrganizationProfile.fsh

Profile: C4BBOrganization
Parent:  USCoreOrganizationProfile|6.1.0
Id:  C4BB-Organization
Title: "C4BB Organization"
Description: "This profile builds upon the US Core Organization profile. It is used to convey a payer, provider, payee or service facility organization."
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|3.1.1"
* obeys uncontained-requires-lastUpdated
* meta 1..1 MS
* meta.lastUpdated 0..1  MS
* meta.profile 1..*
// 20210322 CAS: FHIR-30575
//* insert Metaprofile-supportedProfile-slice
//* meta.profile[supportedProfile] = Canonical(C4BBOrganization|1.2.0)
* obeys organization-meta-profile-version

* identifier contains
   tax 0..* MS and
   payerid 0..* MS
   /* and
   naiccode 0..* MS
   */
* identifier[NPI] ^patternIdentifier.type  = $HL7IdentifierType#NPI
// * identifier[NPI].type
* identifier[tax] ^short = "Tax ID Number"
* identifier[tax] ^patternIdentifier.type  = $IdentifierType#TAX
// * identifier[tax].type
* identifier[tax] ^patternIdentifier.system = $TAXCodeCS
* identifier[payerid] ^short = "Payer ID used in HIPAA covered claims submission transactions"
* identifier[payerid] ^patternIdentifier.type  = C4BBIdentifierType#payerid
// * identifier[payerid].type
/** identifier[naiccode] ^short = "NAIC Code"
// * identifier[naiccode].type
* identifier[naiccode] ^patternIdentifier.system = $NAICCodeCS
* identifier[naiccode] ^patternIdentifier.type  = C4BBIdentifierType#naiccode
*/
* identifier[NAIC] MS
* identifier[NAIC] ^short = "NAIC Code"
// * identifier[naiccode].type
* identifier[NAIC] ^patternIdentifier.system = $NAICCodeCS
* identifier[NAIC] ^patternIdentifier.type  = C4BBIdentifierType#naiccode

* identifier[tax] ^comment = "Tax ID Number"
* identifier[payerid] ^comment = "Internal value assigned by the payer responsible for the claim (2)"
* identifier[NAIC] ^comment = "NAIC Code of the payer responsible for the claim (2)"
* identifier[NPI] ^comment = "The National Provider Identifier assigned to the Billing Provider, Care Team members and the Service Facility (93, 94, 95, 97, 99, 100, 122, 173).  Service Facility NPI will be populated with the value 'NPI has not been assigned' if an NPI has not been assigned to the Service Location Organization"
* address ^comment = "Enter address of the location where the services were rendered.  If the location is a component of the Billing Provider, do not populate this data element"
* meta.lastUpdated ^comment = "Defines the date the Resource was created or updated, whichever comes last (163).  Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last. Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service.  lastUpdated required unless the Resource is \"contained\""
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"


// TODO Need Organization for US Core 3.1.1, which has the above naic code requirements (which was added in a later version of US Core)




Invariant: uncontained-requires-lastUpdated
Description: "meta.lastUpdated required if not a contained resource"
Expression: "%resource = %rootResource implies meta.lastUpdated.exists()"
Severity: #error

---

File: repos/HL7_SLASH_carin-bb/input/fsh/PatientProfile.fsh

Profile: C4BBPatient
Parent: USCorePatientProfile|6.1.0
Id: C4BB-Patient
Title: "C4BB Patient"
Description: "This profile builds upon the US Core Patient profile. It is used to convey information about the patient who received the services described on the claim."
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|3.1.1"
* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.profile 1..*
//* insert Metaprofile-supportedProfile-slice
// 20210216 CAS: FHIR-30575 Pulled from block vote1a
//* meta.profile[supportedProfile] = Canonical(C4BBPatient|1.2.0)
* obeys patient-meta-profile-version

* identifier.type from C4BBPatientIdentifierType (extensible)
//* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.discriminator.type = #value 
* identifier ^slicing.ordered = false   // can be omitted, since false is the default
* identifier ^slicing.description = "Slice based on $this value"
* identifier contains 
   memberid 1..* MS and
//   medrecnum 0..* MS and
   uniquememberid 0..* MS
//   patacctnum 0..* MS 
* identifier[memberid] ^short = "Member ID"
* identifier[memberid].type = $IdentifierType#MB
//* identifier[memberid].type.coding 1..* MS
//* identifier[medrecnum].type = $IdentifierType#MR
//* identifier[medrecnum].type.coding 1..* MS
//* identifier[patacctnum].type = C4BBIdentifierType#pat
//* identifier[patacctnum].type.coding 1..* MS
//* identifier[uniquememberid].type.coding 1..* MS
* identifier[uniquememberid].type = C4BBIdentifierType#um
* identifier[uniquememberid] ^short = "Unique Member ID"

* birthDate MS
* gender MS
// * deceasedDateTime MS
// * deceasedBoolean MS
* deceased[x] MS 
* name MS
* meta.lastUpdated MS
//* address.district MS FHIR-35031
* address.country MS 

* identifier[memberid] ^comment = "Identifier for a member assigned by the Payer for a contract; it may be different for various lines of business; ie. QHP vs MA. If members receive ID cards, that is the identifier that should be provided. (1)."
* identifier[uniquememberid] ^comment = "Mastered person identifier that is a unique identifier for a member assigned by the Payer across all lines of business (191)"
//* identifier[medrecnum] ^comment = "Provider submitted medical record number that can be included on the claim. (109)"
//* identifier[patacctnum] ^comment = "Provider assigned patient account number that can be included on the claim. (109)"
* birthDate ^comment = "Date of birth of the member (70)"
* gender ^comment = "Gender of the member (71)"
* name ^comment = "The name of the patient (130)"
* deceasedDateTime ^comment = "deceasedDateTime - Date of death of the member (124) or deceasedBoolean - Indicates if the patient is deceased (150)"
//* deceasedDateTime ^comment = "Date of death of the member (124)"
//* deceasedBoolean ^comment = "Indicates if the patient is deceased (150)"
* meta.lastUpdated ^comment = "Defines the date the Resource was created or updated, whichever comes last (163).  Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last. Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service."
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
* address.line ^comment = "Member's street name, number, direction & P.O. Box etc. (158)"
* address.city ^comment = "The city for the member's primary address (192)" 
//* address.district ^comment = "The county for the member's primary address (125)" FHIR-35031
* address.state ^comment = "The state for the member's primary address (126)" 
* address.postalCode ^comment = "This represents the member's 5 digit zip code (131)" 
* address.country ^comment = "The country for the member's primary address (127)"

---

File: repos/HL7_SLASH_carin-bb/input/fsh/PractitionerProfile.fsh


Profile: C4BBPractitioner
Parent: USCorePractitionerProfile|6.1.0
Id: C4BB-Practitioner
Title: "C4BB Practitioner"
Description: "This profile builds upon the US Core Practitioner profile. It is used to convey information about the practitioner who provided to the patient services described on the claim."
* ^extension[$compliesWithProfile].valueCanonical = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|3.1.1"
* obeys Practitioner-identifier
* meta 1..1 MS
* meta.lastUpdated 0..1 MS
* meta.profile 1..*
//* insert Metaprofile-supportedProfile-slice
// 20210322 CAS: FHIR-30575
//* meta.profile[supportedProfile] = Canonical(C4BBPractitioner|1.2.0)
* obeys practitioner-meta-profile-version

* identifier 1..* MS
* identifier[NPI] 0..1 MS
* identifier contains
   tax 0..* MS


* identifier[NPI] ^short = "National Provider Identifier"
* identifier[tax] ^short = "Tax ID Number"


* identifier[tax] ^comment = "Tax ID Number.  Either the Tax Id or an NPI must be provided"
* identifier[tax] ^patternIdentifier.type  = $IdentifierType#TAX
* identifier[tax] ^patternIdentifier.system = $TAXCodeCS
* identifier[NPI] ^patternIdentifier.type = $HL7IdentifierType#NPI
* identifier[NPI] ^comment = "The National Provider Identifier assigned to the Rendering Provider. This is the lowest level of provider available (for example, if both individual and group are available, then the individual should be provided) (95).  Either the Tax Id or an NPI must be provided"
* meta.lastUpdated ^comment = "Defines the date the Resource was created or updated, whichever comes last (163).  Payers SHALL provide the last time the data was updated or the date of creation in the payer’s system of record, whichever comes last. Apps will use the meta.lastUpdated value to determine if the Reference resources are as of the current date or date of service. lastUpdated required unless the Resource is \"contained\""
* meta.profile ^comment = "meta.profile is required as a matter of convenience of receiving systems. The meta.profile should be used by the Server to hint/assert/declare that this instance conforms to one (or more) stated profiles (with business versions). meta.profile does not capture any business logic, processing directives, or semantics (for example, inpatient or outpatient). Clients should not assume that the Server will exhaustively indicate all profiles with all versions that this instance conforms to. Clients can (and should) perform their own validation of conformance to the indicated profile(s) and to any other profiles of interest. CPCDS data element (190)"
* name ^comment = "The name of the Rendering Provider. This is the lowest level of provider available (for example, if both individual and group are available, then the individual should be provided) (168)"
* address ^comment = "Address(es) of the practitioner"

Invariant:  Practitioner-identifier
Description: "Practitioner.identifier must include an NPI or a Tax ID"
Expression: "identifier.where(type.where(coding.where(code in ('NPI' | 'TAX')).exists()).exists()).exists()"
Severity:   #error

---

File: repos/HL7_SLASH_carin-bb/input/fsh/README.md

# carin-bb-fsh
CARIN Blue Button using FHIR Shorthand


---

File: repos/HL7_SLASH_carin-bb/input/fsh/RelatedPerson.fsh

Profile: C4BBRelatedPerson
Parent: USCoreRelatedPersonProfile|6.1.0
Id: C4BB-RelatedPerson
Title: "C4BB RelatedPerson"
Description: "This profile is used to convey basic demographic information about a person related to the claim."
* meta 1..1 MS
* meta.lastUpdated 1..1 MS
* meta.profile 1..*
//* active 1..1 MS
//* patient 1..1 MS
* patient only Reference(C4BBPatient)
//* relationship 0..* MS
//* name 0..* MS
//* telecom 0..* MS
//* address 0..* MS
//* obeys relatedperson-name-or-relationship
//* obeys relatedperson-meta-profile-version

/*
Invariant: relatedperson-name-or-relationship
Description: "Either a name or a relationship SHALL be provided (or both)"
Expression: "name.exists() or relationship.exists()"
Severity: #error
*/

---

File: repos/HL7_SLASH_carin-bb/input/fsh/ValueSets.fsh

// Contains ValueSets for Codes Defined WITHIN this IG  
ValueSet: C4BBAdjudicationCategoryDiscriminator   
Title: "C4BB Adjudication Category Discriminator Value Set"
Description: "Used as the discriminator for adjudication.category and item.adjudication.category for the CARIN IG for Blue Button®"
* codes from valueset C4BBAdjudication
// 20210127 CAS: Added to resolve the issue where this "all slices" discriminator (category) required ValueSet did not include a valueset reuuired for the required benefitpaymentstatus slice discriminator
// Removed according to FHIR-38059
//* codes from valueset C4BBPayerBenefitPaymentStatus
* codes from system C4BBAdjudicationDiscriminator
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBTotalCategoryDiscriminator   
Title: "C4BB Total Category Discriminator Value Set"
Description: "Used as the discriminator for total.category for the CARIN IG for Blue Button®"
* codes from valueset C4BBAdjudication
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBClaimInstitutionalCareTeamRole 
Title: "C4BB Claim Institutional Care Team Role Value Set"
Description: "Describes functional roles of the care team members."
* $CareTeamRoleCodeCS#primary 
* C4BBClaimCareTeamRole#attending 
* C4BBClaimCareTeamRole#referring
* C4BBClaimCareTeamRole#operating 
* C4BBClaimCareTeamRole#otheroperating 
* C4BBClaimCareTeamRole#rendering 
// * C4BBClaimCareTeamRoleCS#site 
// * C4BBClaimCareTeamRoleCS#prescribing 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBClaimProfessionalAndNonClinicianCareTeamRole   
Title: "C4BB Claim Professional And Non Clinician Care Team Role Value Set"
Description: "Describes functional roles of the care team members"
* $CareTeamRoleCodeCS#primary 
* $CareTeamRoleCodeCS#supervisor
* C4BBClaimCareTeamRole#rendering
* C4BBClaimCareTeamRole#purchasedservice 
* C4BBClaimCareTeamRole#referring 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBClaimPharmacyTeamRole 
Title: "C4BB Claim Pharmacy CareTeam Role Value Set"
Description: "Describes functional roles of the care team members"
* $CareTeamRoleCodeCS#primary 
* C4BBClaimCareTeamRole#prescribing 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBAdjudication   
Title: "C4BB Adjudication Value Set"
Description: "Describes the various amount fields used when payers receive and adjudicate a claim.  It includes the values 
defined in http://terminology.hl7.org/CodeSystem/adjudication, as well as those defined in the C4BB Adjudication CodeSystem."
* $HL7AdjudicationCS#submitted 
* $HL7AdjudicationCS#copay 
* $HL7AdjudicationCS#eligible
* $HL7AdjudicationCS#deductible  
* $HL7AdjudicationCS#benefit 
* C4BBAdjudication#coinsurance "Coinsurance" 
* C4BBAdjudication#noncovered "Noncovered" 
* C4BBAdjudication#priorpayerpaid "Prior payer paid" 
* C4BBAdjudication#paidbypatient "Paid by patient"
* C4BBAdjudication#paidbypatientcash "Paid by patient - cash"
* C4BBAdjudication#paidbypatientother "Paid by patient - other"
* C4BBAdjudication#paidtopatient "Paid to patient"
* C4BBAdjudication#paidtoprovider "Paid to provider" 
* C4BBAdjudication#memberliability "Member liability" 
* C4BBAdjudication#discount "Discount" 
* C4BBAdjudication#drugcost "Drug cost" 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false


ValueSet: C4BBPayerProviderNetworkStatus
Title: "C4BB Payer Provider Network Status Value Set"
Description: "Indicates the provider network status in relation to a patient's coverage as of the effective date of service or admission."
* C4BBPayerAdjudicationStatus#innetwork	"In Network"
* C4BBPayerAdjudicationStatus#outofnetwork "Out Of Network"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBPayerBenefitPaymentStatus
Title: "C4BB Payer Benefit Payment Status Value Set"
Description: "Indicates the in network or out of network payment status of the claim."
* C4BBPayerAdjudicationStatus#innetwork	"In Network"
* C4BBPayerAdjudicationStatus#outofnetwork "Out Of Network"
* C4BBPayerAdjudicationStatus#other "Other" 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBPayerClaimPaymentStatusCode
Title: "C4BB Payer Claim Payment Status Code Value Set"
Description: "Indicates whether the claim / item was paid or denied."
* C4BBPayerAdjudicationStatus#paid 
* C4BBPayerAdjudicationStatus#denied 
* C4BBPayerAdjudicationStatus#partiallypaid 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBPayeeType
Title: "C4BB Payee Type Value Set"
Description: "Identifies the type of recipient of the adjudication amount; i.e., provider, subscriber, beneficiary or another recipient."
* C4BBPayeeType#beneficiary 
* $HL7PayeeType#subscriber 
* $HL7PayeeType#provider
* $HL7PayeeType#other
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBClaimProfessionalAndNonClinicianDiagnosisType 
Title: "C4BB Claim Professional And Non Clinician Diagnosis Type Value Set"
Description: "Indicates if the professional and non-clinician diagnosis is principal or secondary"
* $HL7DiagnosisType#principal "principal"
* C4BBClaimDiagnosisType#secondary "secondary"
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBClaimInpatientInstitutionalDiagnosisType 
Title: "C4BB Claim Inpatient Institutional Diagnosis Type Value Set"
Description: "Indicates if the inpatient institutional diagnosis is admitting, principal, other or an external cause of injury."
* $HL7DiagnosisType#principal 
* C4BBClaimDiagnosisType#other  
* C4BBClaimDiagnosisType#externalcauseofinjury   
* $HL7DiagnosisType#admitting // http://terminology.hl7.org/CodeSystem/ex-diagnosistype#admitting 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBClaimOutpatientInstitutionalDiagnosisType 
Title: "C4BB Claim Outpatient Institutional Diagnosis Type Value Set"
Description: "Indicates if the outpatient institutional diagnosis is principal, other, an external cause of injury or a patient reason for visit."
* $HL7DiagnosisType#principal 
* C4BBClaimDiagnosisType#other  
* C4BBClaimDiagnosisType#externalcauseofinjury   
* C4BBClaimDiagnosisType#patientreasonforvisit 
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBRelatedClaimRelationshipCodes
Title: "C4BB Related Claim Relationship Codes Value Set"
Description: "Identifies if the current claim represents a claim that has been adjusted and was given a prior claim number or if the current claim has been adjusted; i.e., replaced by or merged to another claim number."
* $HL7RelatedClaimRelationshipCS|1.0.0#prior 
* C4BBRelatedClaimRelationshipCodes#replacedby
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBSupportingInfoType
Title: "C4BB SupportingInfo Type Value Set"
Description: "Used as the discriminator for the types of supporting information for the CARIN IG for Blue Button� Implementation Guide." 
* codes from system C4BBSupportingInfoType
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

ValueSet: C4BBTransportationServiceCategories
Title: "C4BB Transportation Services Categories Value Set"
Description: "Transportation Services Supporting Info Category Codes" 
* C4BBSupportingInfoType#patientweight
* C4BBSupportingInfoType#ambulancetransportreason
* C4BBSupportingInfoType#transportationdistance
* C4BBSupportingInfoType#roudtrippurpose
* C4BBSupportingInfoType#stretcherpurpose
* C4BBSupportingInfoType#pickuplocation
* C4BBSupportingInfoType#dropofflocation
* ^copyright = "This Valueset is not copyrighted."
* ^experimental = false

// ************* @Saul - replaced with C4BB **************
//ValueSet: PatientIdentifierType
//Title: "Patient Identifier Type"
//Description: "Patient Identifier Type"
//* C4BBIdentifierType#um
//* C4BBIdentifierType#mb
//* $IdentifierType#MR
//* C4BBIdentifierType#pt
//* ^copyright = "This Valueset is not copyrighted."

ValueSet: C4BBClaimIdentifierType
Title: "C4BB Claim Identifier Type Value Set"
Description: "Indicates that the claim identifier is that assigned by a payer for a claim received from a provider or subscriber"
* C4BBIdentifierType#uc
* ^experimental = false
* ^copyright = "This Valueset is not copyrighted."

ValueSet: C4BBPatientIdentifierType
Title: "C4BB Patient Identifier Type Value Set"
Description: "Identifies the type of identifier payers and providers assign to patients"
* C4BBIdentifierType#um
* C4BBIdentifierType#pat
* $IdentifierType#MB
* $IdentifierType#MR  
* ^experimental = false
* ^copyright = "This Valueset is not copyrighted."

ValueSet: C4BBOrganizationIdentifierType
Title: "C4BB Organization Identifier Type Value Set"
Description: "Identifies the type of identifiers for organizations"
* $HL7IdentifierType#NPI
* C4BBIdentifierType#payerid
* C4BBIdentifierType#naiccode
* codes from system $IdentifierType
* ^experimental = false
* ^copyright = "This Valueset is not copyrighted."

ValueSet: C4BBPractitionerIdentifierType
Title: "C4BB Practitioner Identifier Type Value Set"
Description: "Identifies the type of identifiers for practitioners"
* $HL7IdentifierType#NPI
* codes from system $IdentifierType
* ^experimental = false
* ^copyright = "This Valueset is not copyrighted."
/*
CodeSystem: C4BBClaimProcedureType
Title: "C4BB Claim Procedure Type"
Description: "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure"
* #principal "Principal" "The Principal Procedure is based on the relation of the procedure to the Principal Diagnosis"
* #other "Other"  "Other procedures performed during the inpatient institutional admission"
* ^copyright = "This Code System is not copyrighted."
*/
ValueSet: C4BBClaimProcedureType
Title: "C4BB Claim Procedure Type Value Set"
Description: "Indicates if the inpatient institutional procedure (ICD-PCS) is the principal procedure or another procedure"
* codes from system C4BBClaimProcedureType
* ^experimental = false
* ^copyright = "This Value Set is not copyrighted."

ValueSet: C4BBInstitutionalClaimSubType
Title: "C4BB Institutional Claim SubType Value Set"
Description: "Indicates if institutional ExplanationOfBenefit is inpatient or outpatient."
* codes from system C4BBInstitutionalClaimSubType
* ^experimental = false
* ^copyright = "This ValueSet is not copyrighted."

ValueSet: C4BBProfessionalAndNonClinicianClaimType
Title: "C4BB Professional And Non Clinician Claim Type Value Set"
Description: "This value set includes Professional and Non Clinician Claim Type codes."
* $HL7ClaimTypeCS#professional
* $HL7ClaimTypeCS#vision
* ^experimental = false
* ^copyright = "This Valueset is not copyrighted."

ValueSet: C4BBProfessionalAndNonClinicianClaimSubType
Title: "C4BB Professional And Non Clinician Claim SubType Value Set"
Description: "This value set includes Professional and Non Clinician Claim SubType codes."
* $HL7ClaimTypeCS#vision
* ^experimental = false
* ^copyright = "This Valueset is not copyrighted."


ValueSet: C4BBSurfaceCodes
Title: "US Surface Codes Set Value Set"
Description: "This value set includes FDI tooth surface codes localized for the US Realm."
* codes from system ADAToothSurfaceCodes
* ^experimental = false
* ^copyright = "This ValueSet is not copyrighted."

---

File: repos/HL7_SLASH_carin-bb/input/pagecontent/Background.md

<div>&nbsp;</div>
<a name="the-carin-alliance"></a>
### The CARIN Alliance
<p>The CARIN (Creating Access to Real-time Information Now through Consumer-Directed Exchange) Alliance is an&nbsp;<a href="http://www.hl7.org/about/fhir-accelerator/index.cfm" rel="nofollow">HL7 FHIR Accelerator program</a>&nbsp;which brings implementers together to advance the use of HL7 FHIR standards in health care. The <a href="https://www.carinalliance.com/our-work/health-plan/" rel="nofollow">CARIN Alliance Health Plan Workgroup</a> was organized to develop a FHIR-based API that could be implemented by a consumer-facing application. The CARIN for Blue Button Framework was designed to answer the challenge for health plans to &lsquo;meet or exceed&rsquo; the <a href="https://bluebutton.cms.gov/" rel="nofollow">CMS Blue Button 2.0</a> capabilities. The CMS Blue Button&reg; 2.0 project provides over 53 million Medicare fee-for-service beneficiaries access to their electronic claims information. 
The goal of the CARIN Alliance Health Plan Workgroup is to develop an agreed upon set of data fields to exchange with consumers and a FHIR-based implementation guide for health plans and consumer facing applications to use to implement the API.</p>
### Consumer-directed exchange
<p>
Consumer-directed exchange occurs when a consumer or an authorized personal representative, invokes the <a href="https://www.govregs.com/regulations/title45_chapterA_part164_subpartE_section164.524">HIPAA Individual Right of Access (45 CFR 164.524)</a> and requests the associated digital health information from a HIPAA covered entity (CE) via an application or other third-party data steward.</p>
### CMS Patient Access and Interoperability Rules
<p>The Centers for Medicare &amp; Medicaid Services (CMS) finalized on May 1st, 2020, the <a href="https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and" rel="nofollow"> Interoperability and Patient Access Final Rule</a> on patient access to health data. Under the final rule, Medicare Advantage (MA) plans, state Medicaid and Children&rsquo;s Health Insurance Program (CHIP) agencies, Medicaid and CHIP managed care plans, and qualified health plan (QHP) issuers in the federally-facilitated exchanges (FFEs) must meet certain requirements regarding patient access to their health care information, including requirements related to application programming interfaces (APIs). CMS provides&nbsp;<a href="https://www.cms.gov/Regulations-and-Guidance/Guidance/Interoperability/index" rel="nofollow">Implementation Guidance</a>&nbsp;for the following data types that make-up the Patient Access API::</p>
<p>Patient Access API:</p>
<ul>
<li>Claims &amp; Encounter Data</li>
<li>Clinical Data</li>
<li>Plan Coverage and Formularies</li>
</ul>
<p>The Consumer Directed Payer Data Exchange Implementation Guide was defined by the CARIN Alliance to meet CMS requirements to provide Claims and Encounter data. <br>
Provisioning Clinical Data is defined by the DaVinci Payer Data Exchange (PDex) (see <a href="Background.html#davinci-carin">here</a>) and US Core Implementation Guides . 
<br>Provisioning Plan Coverage and Formularies is defined by the DaVinci Payer Data Exchange US Drug Formulary Implementation Guide.
<br>The effective date of the CMS Interoperability and Patient Access rule is January 1, 2021.</p>
<a name="patient-protection"></a>
### Patient Protection
<h4>Members who want to share their health information with third parties&nbsp;and the CARIN Code of Conduct</h4>
<p>The CMS final rule states: &ldquo;An MA organization must provide in an easily accessible location on its public website and through other appropriate mechanisms through which it ordinarily communicates with current and former enrollees seeking to access their health information held by the MA organization, educational resources in non-technical, simple and easy-to-understand language." Therefore, providing member educational materials is outside the scope of this IG and the responsibility of each payer.&nbsp;</p>
<p>The CMS rule also states, &ldquo;Payers can look to industry best practices, including the CARIN Alliance&rsquo;s Code of Conduct and the <a href="https://www.healthit.gov/topic/privacy-security-and-hipaa/model-privacy-notice-mpn">ONC Model Privacy Notice</a> for other provisions to include in their attestation request that best meet the needs of their patient population."&nbsp;Although it&rsquo;s outside the scope of the IG, CMS and the CARIN Alliance are encouraging payers to have applications&nbsp;sign&nbsp;the&nbsp;<a href="https://www.carinalliance.com/our-work/trust-framework-and-code-of-conduct/">CARIN Code of Conduct</a> as part of the application registration process or visit <a href="https://myhealthapplication.com/">MyHealthApplication.com</a> to view applications that have attested to the Code of Conduct.&nbsp;Following this process can help ensure consistency in how apps are getting informed, proactive consent from members and consistency in how apps use, share, and store a member&rsquo;s health information.&nbsp;Apps that publicly attest to best practices around data governance can better be held accountable by the FTC. This enforcement mechanism will help to build consumer trust in the use of technology to manage their health. The CARIN Alliance is also developing a set of Application Registration best practices for the industry to use. For more information, please visit the&nbsp;<a href="https://www.carinalliance.com/">CARIN Alliance website</a>.</p>
<p>The&nbsp;<a href="https://www.cms.gov_files_document_patient-2Dprivacy-2Dand-2Dsecurity-2Dresources.pdf" rel="nofollow">CMS Patient Privacy and Security</a>&nbsp;resources directs that payers must educate patients about sharing their health information with third parties.</p>
<ul type="disc">
<li>Among the patient disclosures, plans are encouraged to provide information on:</li>
<ul type="circle">
<li>How an individual can safeguard their online privacy; and</li>
<li>Factors to consider when choosing a consumer-facing application.</li>
<li>How a consumer can submit complaints to the Office of Civil Rights (OCR) or the Federal Trade Commission (FTC);</li>
<li>CMS cites the CARIN Alliance Code of Conduct and the ONC Model Privacy Notice as best practices to meet these needs.</li>
</ul>
<li>Payers may not limit access to information for a patient through an application that fails to voluntarily attest to specific statements or if an enrollee chooses to disregard warnings about data use.</li>
</ul>
<p>The&nbsp;effective&nbsp;date&nbsp;of the CMS rule&nbsp;is January 1, 2021. Patient education is out of scope for this Implementation Guide.</p>
<a name="relation-to-other-IGs"></a>
### CARIN IG for Blue Button&reg; Relation to other IGs
<h4>US Core</h4>

<p>
This implementation guide supports the <a href="{{site.data.fhir.path}}index.html">R4</a> version of the FHIR standard and builds on the US Core <a href="{{site.data.fhir.ver.uscore3}}">3.1 (USCDI 1)</a> and <a href="{{site.data.fhir.ver.uscore6}}">6.1 (USCDI 3)</a> implementation guides and implementers need to familiarize themselves with the profiles in those guides.  The profiles in this IG conform with both releases of US Core.
</p>

<p>CARIN IG for Blue Button&reg; uses the ExplanationOfBenefit Resource as its primary resource. Reference Resources are Coverage, Patient, Practitioner, RelatedPerson, and Organization. Since the ExplanationOfBenefit profiles are not included in the US Core, there is no alignment requirement for these profiles. Coverage, Patient, Practitioner, RelatedPerson, and Organization are US Core Profiles. Since these are supporting / reference profiles (rather than a focus profile) in CARIN IG for Blue Button&reg;, the alignment with the US Core is on the content of these profiles, but not on the search parameters. The following diagram provides a high-level view of the relationships between resources used in this IG. It does not necessarily reflect all of the relationships/references between resources. This guide also requires the use of the US Core Provenance resource, but does not include any additional constraints and is not presented on the below diagram. <a href="CARINBBResources.png" target="_blank" rel="noopener noreferrer"><img src="CARINBBResources.png" width="1100"/></a></p>
<h4>SMART Application Launch</h4>
<p>The CARIN IG for Blue Button&reg; requires the use of the SMART App Launch Framework&rsquo;s standalone launch sequence as it will clarify that applications maintain a patient context for the duration of the connection. This authorization sequence also supports the ability for Payer Patient Access APIs to provide a patient selection widget that can be used to enable delegated access to member information. The SMART App IG also provides guidance on how to configure OAuth 2.0 servers to mediate access based on a set of rules configured to enforce institutional policy, which may include requesting end-user authorization. The SMART App IG also provides guidance on how to handle authentication.</p>
<p>The SMART App IG does not dictate the institutional policies that are implemented in the authorization server. Security mechanisms, such as those mandated by HIPAA in the US (end-user authentication, session time-out, security auditing, and accounting of disclosures) are outside the scope of this profile.</p>
<h4 id="davinci-carin">How DaVinci&rsquo;s PDex IG and the CARIN IG for Blue Button&reg; work together</h4>
<p>There are two parallel paths pursued by the CARIN Alliance and the Da Vinci Project related to providing health plan data to various stakeholders. CARIN Alliance approaches the issue primarily from a financial (claims) perspective, with some limited associated clinical data. Da Vinci Project approaches the issue primarily from a clinical perspective and leaves most financial data out of scope</p>
<p>The CARIN Alliance focused on replicating the CMS Blue Button 2.0 solution directed at providing beneficiaries access to claims information for Medicare Fee For Service (FFS) in the form of a FHIR based ExplanationOfBenefits (EOB). The CARIN Alliance Consumer-Directed Payer Data Exchange (CARIN IG for Blue Button&reg;) solution was intended to provide the same information based on commercial payer databases, at a least for Medicare Advantage products. The CMS Interoperability and Patient Access Final Rule expanded the scope of a Blue Button 2.0 equivalent to include not just Medicare Advantage but also Medicaid HMO, CHIP HMO and QHP's in the federal marketplace.</p>
<p>The Da Vinci Payer Data Exchange (PDex) solution started with the goal of providing payer sourced information to providers in the form of FHIR resources consistent with US Core profiles for FHIR Release 4 (R4). The CMS Interoperability Final Rule directs covered payers (as noted above) to make encounter information and clinical data available to members through an API defined by the ONC 21<sup>st</sup> Century Cures Act Final Rule for, at a minimum, information defined in USCDI release 1.1. Since PDex was already focused on making the same information available through a compliant API, Da Vinci expanded the scope of PDex to include not only payer to provider exchange at the request of the provider but also payer to third party application exchange at the request of the member.</p>
<img src="PDexVsCARINBB.png"  width="1100"/>
<p>In addition, the CMS Interoperability Final Rule requires a covered plan, at the member&rsquo;s request, to make their information (as defined by USCDI release 1.1, at a minimum) available to any other plan as directed by the member. This ability must exist for up to 5 years after the member leaves the plan. Da Vinci expanded the scope of the PDex Implementation Guide to support this exchange.</p>
<p>At this point we have two solutions that provide an overlapping but different set of information for the members of a health plan. The first is the CARIN IG for Blue Button&reg; which is focused on providing claims information, including the adjudication information, in the form of a FHIR EOB. The second solution is to provide all payer information related to the clinical condition and care of the patient using US Core profiles on FHIR R4 resources. In the latter case, information coming from claims is represented as USCDI V1.1 information and includes, at a minimum: encounters, providers, organizations, locations, dates of service, diagnoses (conditions), procedures and observations. This information would also include clinical information from sources other than claims maintained by the payer, such as:</p>
<ul>
<li>laboratory results received via HL7 V2 ORU transactions,</li>
<li>clinical data from HL7 consolidated CDAs,</li>
<li>information derived from HL7 V2 ADT transactions,</li>
<li>information received or extracted from immunization registries,</li>
<li>information related to medication administration from pharmacy benefit managers in pharmacy networks,</li>
<li>FHIR resources, and any other source of clinical information related to the member.</li>
</ul>
<p>Unlike the US Core 3.1.1 and US Core 6.1.0 Implementation Guides, PDex provides guidance to payers on how to make the following information available via the Patient Access API:</p>
<ul>
<li>dispensed medications (not covered in US Core)</li>
<li>medical devices that are not implantable devices (not covered in US Core)</li>
<li>CPCDS data set to US Core and PDex profiles to satisfy the requirement for exchange of USCDI V1.1 information</li>
<li>clinical data received by payers (e.g. laboratory results) from multiple sources (e.g. claims, HL7 V2, CDA) to the appropriate FHIR US Core and PDex profile data elements</li>
</ul>


---

File: repos/HL7_SLASH_carin-bb/input/pagecontent/change_notes.md

CARIN Consumer Directed Payer Data Exchange (CARIN IG for Blue Button®) was developed under the <a href="https://www.carinalliance.com/">CARIN Alliance</a>.

### Changes and Updates for Version 2.1.0 (from version 2.0.0)
The current official published version of CARIN BB for FHIR R4, An update of STU2 addressing various issues and added support for US Core 6.1.0

<ul>
  <li>Changed base profile of the <a href="StructureDefinition-C4BB-Patient.html">Patient</a>, <a href="StructureDefinition-C4BB-Coverage.html">Coverage</a>, <a href="StructureDefinition-C4BB-Practitioner.html">Practitioner</a>, <a href="StructureDefinition-C4BB-Organization.html">Organization</a>, and <a href="StructureDefinition-C4BB-RelatedPerson.html">RelatedPerson</a> to <a href="https://hl7.org/fhir/us/core/STU6.1/">US Core 6.1</a> and added complies with requirements to <a href="https://hl7.org/fhir/us/core/STU3.1.1/">US Core 3.1.1</a> where there was a profile in that version (<a href="https://jira.hl7.org/browse/FHIR-46374">FHIR-46374</a>) <br/>Note: Most of the changes from US Core 3.1.1 to 6.1 are reductions in Must Support requirements, but there are a small number of breaking changes to note, including:
    <ul>
      <li>The <a href="StructureDefinition-C4BB-Coverage.html">Coverage</a> profile now requires the member identifier, if present, to have a type of <code>MB</code> from system <code>http://terminology.hl7.org/CodeSystem/v2-0203</code>. The previous version of this profile did not have specific requirements for the member ID, though the example had a member ID that matched US Core 6.1 requirements.</li>
      <li>The <a href="StructureDefinition-C4BB-Coverage.html">Coverage</a> profile now has an extensible binding to a ValueSet to Coverage.type, where there was no previous binding.</li>
      <li>The <a href="StructureDefinition-C4BB-Organization.html">Organization</a> and <a href="StructureDefinition-C4BB-Organization.html">Practitioner</a> profiles now have ID validation checks for NPI and CLIA numbers</li>
    </ul>
  </li>
  <li>Added "Basis" profiles for all EOB types that identify all data requirements excluding financial data. This is made available for other IGs (e.g. <a href="https://hl7.org/fhir/us/davinci-pdex">Da Vinci PDex</a>) that need communicate EOB information to parties other than the patient/member. This does not represent any change of conformance requirements for the existing EOB profiles. (<a href="https://jira.hl7.org/browse/FHIR-40999">FHIR-40999</a> and <a href="https://jira.hl7.org/browse/FHIR-40820">FHIR-40820</a>)</li>
  <li>Removed the NUBC Present On Admission Indicator CodeSystem "stub", Updated the NUBC Present On Admission Indicator Codes Value Set to point to the <a href="https://terminology.hl7.org/CodeSystem-presentOnAdmission.html">CMS Present on Admission Indicator CodeSystem</a>, and change the name to "CMS Present On Admission Indicator Codes Value Set" (This requires a code system change from <code>https://www.nubc.org/CodeSystem/PresentOnAdmissionIndicator</code> to <code>https://www.cms.gov/Medicare/Medicare-Fee-for-Service-Payment/HospitalAcqCond/Coding</code> for resources claiming conformance) (<a href="https://jira.hl7.org/browse/FHIR-38278">FHIR-38278</a>)</li>
  <li>Removed the US Surface Codes System and updated the <a href="ValueSet-C4BBSurfaceCodes.html">US Surface Codes Set Value Set</a> to point to the <a href="https://terminology.hl7.org/CodeSystem-ADAToothSurfaceCodes.html">ADA Tooth Surface Codes CodeSystem</a> (This requires a code system change from <code>http://hl7.org/fhir/us/carin-bb/CodeSystem/C4BBSurfaceCodes</code> to <code>http://terminology.hl7.org/CodeSystem/ADAToothSurfaceCodes</code> for resources claiming conformance) (<a href="https://jira.hl7.org/browse/FHIR-47140">FHIR-47140</a>)</li>
  <li>Corrected the ICD-9 CodeSystem url (This requires a code system change from <code>http://terminology.hl7.org/CodeSystem/icd9</code> to <code>http://hl7.org/fhir/sid/icd-9-cm</code> for resources claiming conformance) (<a href="https://jira.hl7.org/browse/FHIR-41791">FHIR-41791</a>)</li>
  <li>Removed the X12 Ambulance Transport Reason Codes (X12AmbulanceTransportReasonCodes) CodeSystem "stub". This CodeSystem is now defined in THO and the stub is no longer needed in this IG. The code system url <code>https://x12.org/codesystem.x12.org/ambulance-transport-reason-codes</code> used by implementers for conformance resources has not changed (<a href="https://jira.hl7.org/browse/FHIR-46778">FHIR-46778</a>)</li>
  <li>Corrected several invariants that either had the wrong context or an expression that returned false negatives if the element of interest had multiple iterations (<a href="https://jira.hl7.org/browse/FHIR-46276">FHIR-46276</a>)</li>
  <li>Added a <code>masked</code> Data Absent Reason Code to the <a href="ValueSet-CDCICD910CMDiagnosisCodes.html">Diagnosis Codes ValueSet</a> to allow for masking of sensitive diagnosis codes. (<a href="https://jira.hl7.org/browse/FHIR-40441">FHIR-40441</a>)</li>
  <li>Reduced <code>meta.profile</code> requirements for all profiles. <code>meta.profile</code> still required, but the invariant checking for the profile url of this guide is no longer an error, but a informational warning.  (<a href="https://jira.hl7.org/browse/FHIR-41498">FHIR-41498</a>)</li>
  <li>Fixed the expression for the <a href="SearchParameter-explanationofbenefit-service-start-date.html">Service Start Date SearchParameter</a> (<a href="https://jira.hl7.org/browse/FHIR-46376">FHIR-46376</a>)</li>
  <li>Added the ability for the ExplanationOfBenefit.provider to be an Organization for the <a href="StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral EOB Profile</a> (<a href="https://jira.hl7.org/browse/FHIR-44662">FHIR-44662</a>)</li>
  <li>Removed the inclusion of codes in <a href="ValueSet-C4BBPayerBenefitPaymentStatus.html">Benefit Payment Status</a> from the <a href="ValueSet-C4BBTotalCategoryDiscriminator.html">C4BB Total Category Discriminator Value Set</a> (<a href="https://jira.hl7.org/browse/FHIR-40245">FHIR-40245</a>)</li>
  <li>Added Guidance to the notes section of all EOB profiles describing the difference in the adjudication slice types of billing network status (billingnetworkstatus), rendering network status (renderingnetworkstatus), and benefit payment status (benefitpaymentstatus) (<a href="https://jira.hl7.org/browse/FHIR-46558">FHIR-46558</a>)</li>
  <li>Updated guidance for the <a href= "SearchParameter-explanationofbenefit-service-date.html">Service Date Search Parameter</a> to state that the search parameter is to simplify the search in case the client does not know the specific date type to search for based on EOB type. (<a href="https://jira.hl7.org/browse/FHIR-41634">FHIR-41634</a>)</li>
  <li>Clarified search removing the need for a patient search argument in the <a href = "CapabilityStatement-c4bb.html">Capability Statement</a>. (<a href="https://jira.hl7.org/browse/FHIR-41628">FHIR-41628</a>)</li>
  <li>Improved the <a href="ExplanationOfBenefit-EOBProfessional1.html">EOB Professional 1 example</a> to include more realistic amounts and a payee. (<a href="https://jira.hl7.org/browse/FHIR-43464">FHIR-43464</a>)</li>
  <li>Updated the menu structure adding support links. (<a href="https://jira.hl7.org/browse/FHIR-46270">FHIR-46270</a>)</li>

</ul>


### Changes and Updates for Version 2.0.0 (from version 1.1.0)
Balloted Release


<ul>
  <li>Added <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit profile</a> and vision type to <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-34009">FHIR-34009</a>, <a href="https://jira.hl7.org/browse/FHIR-27025">FHIR-27025</a>, <a href="https://jira.hl7.org/browse/FHIR-37706">FHIR-37706</a>, <a href="https://jira.hl7.org/browse/FHIR-37562">FHIR-37562</a>, and <a href="https://jira.hl7.org/browse/FHIR-35146">FHIR-35146</a>)
    <ul>
      <li>Added orthodontics and prosthesis to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBSupportingInfoType.html">Supporting Info Type ValueSet</a> used as a discriminator for the EOB Oral profile supportingInfo slice discriminator (<a href="https://jira.hl7.org/browse/FHIR-34010">FHIR-34010</a>)</li>
      <li>Added <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBSurfaceCodes.html">US Surface Codes</a> for Oral ExplanationOfBenefit.item.subSite (<a href="https://jira.hl7.org/browse/FHIR-34089">FHIR-34089</a>)</li>
      <li>Added Invariants requiring all ExplanationOfBenefit.supportingInfo[additionalBodySite] instances be referred to by at least one ExplanationOfBenefit.item and require a tooth number for line items where a surface code in ExplanationOfBenefit.item.subsite exists in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-34091">FHIR-34091</a>)</li>
    </ul>
  </li>

  <li>Changed cardinality of ExplanationOfBenefit.item from 0..* to 1..* in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Base ExplanationOfBenefit profile</a> requiring ExplanationOfBenefit for all <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all Resource ExplanationOfBenefit profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-34114">FHIR-34114</a>) *</li>

  <li>Require item.location[x] to be only CodeableConcept in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral</a> ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-32067">FHIR-32067</a>) *</li>

  <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit</a> item.location[x] from cardinality of 0..1 to 1..1 and added Must Support (<a href="https://jira.hl7.org/browse/FHIR-34148">FHIR-34148</a>) *</li>

  <li>Changed item.serviced[x] and billablePeriod cardinality (<a href="https://jira.hl7.org/browse/FHIR-31639">FHIR-31639</a> and <a href="https://jira.hl7.org/browse/FHIR-36760">FHIR-36760</a>) *
    <ul>
      <li>ExplanationOfBenefit.item.serviced[x] from 0..1 to 1..1 and billablePeriod from 0..1 to 1..1 for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional ExplanationOfBenefit profile</a></li>
      <li>ExplanationOfBenefit.item.serviced[x] and ExplanationOfBenefit.billablePeriod from 0..1 to 1..1 for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a></li>
      <li>ExplanationOfBenefit.item.serviced[x] from 0..1 to 1..1 for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy ExplanationOfBenefit profile</a></li>
    </ul>
  </li>

  <li>Changed the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy Explanation Of Benefit profile</a> serviced[x] to only be a date (<a href="https://jira.hl7.org/browse/FHIR-38668">FHIR-38668</a>) *</li>

  <li>Added Must Support to ExplanationOfBenefit.item.serviced[x] leaf elements on the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician</a> ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-38669">FHIR-38669</a>) *</li>

  <li>Moved ExplanationOfBenefit.total[benefitpaymentstatus] slice to ExplanationOfBenefit.adjudication[benefitpaymentstatus] (therefore not requiring an amount property) for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient Institutional</a>, <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a>, <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy</a>, and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral</a> ExplanationOfBenefit profiles, changed the pattern to match other adjudication repetitions, and update the invariants appropriately(<a href="https://jira.hl7.org/browse/FHIR-33082">FHIR-33082</a>, <a href="https://jira.hl7.org/browse/FHIR-37726">FHIR-37726</a>, <a href="https://jira.hl7.org/browse/FHIR-38063">FHIR-38063</a>, and <a href="https://jira.hl7.org/browse/FHIR-35358">FHIR-35358</a>) *</li>


  <li>Changed codes term of "performing" provider to "rendering" provider in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBClaimCareTeamRole.html">Claim Care Team Role</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator</a> CodeSystems and in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit </a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit</a> profiles rendering provider network status (<a href="https://jira.hl7.org/browse/FHIR-37727">FHIR-37727</a>) *</li>

  <li>Changed rendering network status from ExplanationOfBenefit.supportingInfo slice to ExplanationOfBenefit.adjudication slice in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral ExplanationOfBenefit </a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit</a> profiles and changed billing network status ExplanationOfBenefit.supportingInfo slice to ExplanationOfBenefit.adjudication slice in <a href="artifacts.html#structures-resource-profiles">all non-abstract ExplanationOfBenefit profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-37728">FHIR-37728</a>) *</li>

  <li>Changed provider "contracting network status" to provider "network status" by updating <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator</a>; changing the C4BBPayerProviderContractingStatus ValueSet to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBPayerProviderNetworkStatus.html">C4BBPayerProviderNetworkStatus ValueSet</a> with `innetwork` and `outofnetwork` codes; removing "contracted" and "notcontracted" codes in <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBPayerAdjudicationStatus.html">Payer Adjudication Status ValueSet</a>, and updating the `innetwork` and `outofnetwork` code definitions for applicability for the provider network status (<a href="https://jira.hl7.org/browse/FHIR-38059">FHIR-38059</a>) *</li>


  <li>Updated the definition of <a href="https://hl7.org/fhir/us/carin-bb/STU2/Conformance_Requirements.html#must-support">Must Support</a> to state "Health Plan API actors SHALL be capable of populating all data elements the payer maintains" which are marked as Must Support, and remove the requirement that "Consumer App actors SHOULD be capable of storing the information for other purposes" (<a href="https://jira.hl7.org/browse/FHIR-36675">FHIR-36675</a> and <a href="https://jira.hl7.org/browse/FHIR-35730">FHIR-35730</a>)</li>

  <li>Changed ExplanationOfBenefit.adjudication and ExplanationOfBenefit.item.adjudication slicing from closed to open for <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all Resource ExplanationOfBenefit profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-34241">FHIR-34241</a>)</li>

  <li>Add not-applicable code to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-AMACPTCMSHCPCSProcedureCodes.html">Professional Procedure Codes ValueSet</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-ADADentalProcedureCode.html">Oral Procedure Code ValueSet</a> for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> (with Invariant allowing only if type = vision) and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Oral.html">Oral</a> (ExplanationOfBenefit.item.productOrService) (<a href="https://jira.hl7.org/browse/FHIR-33024">FHIR-33024</a>)</li>

  <li>Removed Invariant that not allowing not-applicable code for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional ExplanationOfBenefit profile</a> item.productOrService (<a href="https://jira.hl7.org/browse/FHIR-32850">FHIR-32850</a>)</li>


  <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Practitioner.html">Practitioner</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Organization.html">Organization</a> profiles identifier.type in the NPI slice to use the `NPI` from CodeSystem http://terminology.hl7.org/CodeSystem/v2-0203 (<a href="https://jira.hl7.org/browse/FHIR-35712">FHIR-35712</a>) *</li>

  <li>Updated the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Base Explanation Of Benefit profile</a> to require the identifier to contain the unique claim id (<a href="https://jira.hl7.org/browse/FHIR-38660">FHIR-38660</a>) *</li>

  <li>Added Non-emergency transport information to ExplanationOfBenefit.supportingInfo slices to the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> along with invariant rules (<a href="https://jira.hl7.org/browse/FHIR-37615">FHIR-37615</a>)</li>

  <li>Removed meta.profile requirements on <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Abstract base ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-34504">FHIR-34504</a>)</li>

  <li>Added refillsAuthorized slice to ExplanationOfBenefit.supportingInfo of <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy ExplanationOfBenefit</a> profile (<a href="https://jira.hl7.org/browse/FHIR-33487">FHIR-33487</a>)</li>

  <li>Added to rejectreason code to <a href="CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator</a> and changed ExplanationOfBenefit.item.adjudication denialreason slice to rejectreason with a fixed category code of rejectreason in <a href="https://build.fhir.org/ig/HL7/carin-bb/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy Explanation Of Benefit profile</a>. (<a href="https://jira.hl7.org/browse/FHIR-38062">FHIR-38062</a>) *</li>

  <li>Changed payee.party cardinality from 1..1 to 0..1 and added invariant requiring payee.party if payee.type='other' in <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Base ExplanationOfBenefit profile</a> and added new <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-RelatedPerson.html">RelatedPerson profile</a> as a reference option (<a href="https://jira.hl7.org/browse/FHIR-31699">FHIR-31699</a> and <a href="https://jira.hl7.org/browse/FHIR-37740">FHIR-37740</a>)</li>

  <li>Added <a href="https://hl7.org/fhir/us/carin-bb/STU2/SearchParameter-explanationofbenefit-service-start-date.html">service-start-date search parameter</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/SearchParameter-explanationofbenefit-billable-period-start.html">billable-period-start search parameter</a> (<a href="https://jira.hl7.org/browse/FHIR-33165">FHIR-33165</a> and <a href="https://jira.hl7.org/browse/FHIR-34428">FHIR-34428</a>)</li>

  <li>Added _id search parameter for all resources and change conformance expectation for Practitioner and Organization resources to SHOULD to allow for them to be supported as contained resources in <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">Capability Statement</a> with associated guidance and related the resources' meta.lastUpdated requirement (<a href="https://jira.hl7.org/browse/FHIR-38108">FHIR-38108</a> and <a href="https://jira.hl7.org/browse/FHIR-36676">FHIR-36676</a>)</li>

  <li>Added guidance on the expectation of _include support and interpretation of _include=ExplanationOfBenefit:* to <a href="https://hl7.org/fhir/us/carin-bb/STU2/searchparameters.html">search Parameters page</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">Capability Statement</a> including adding ExplanationOfBenefit:payee (<a href="https://jira.hl7.org/browse/FHIR-32982">FHIR-32982</a>)</li>


  <li>Added a requirement in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/Conformance_Requirements.html#capabilitystatement-server-requirement">General Guidance</a> that servers SHALL include a CapabilityStatement that has a CapabilityStatement.instantiates specifying the CapabilityStatement in this specification (<a href="https://jira.hl7.org/browse/FHIR-35360">FHIR-35360</a>)</li>


  <li>Updated the <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">CapabilityStatement</a> security section allowing unauthorized requests responses of HTTP 403 "Forbidden" or HTTP 404 "Not Found" in addition to the previously stated HTTP 401 "Unauthorized" (<a href="https://jira.hl7.org/browse/FHIR-35766">FHIR-35766</a>)</li>

  <li>Moved ExplanationOfBenefit searches documentation from read interaction to search-type interaction in <a href="https://hl7.org/fhir/us/carin-bb/STU2/CapabilityStatement-c4bb.html">Capability Statement</a> (<a href="https://jira.hl7.org/browse/FHIR-33176">FHIR-33176</a>)</li>

  <li>Removed invalid invariant from <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a> that required ExplanationOfBenefit.careTeam.provider to be an Organization reference when careTeam.role was 'site' ('site' not a code in the role ValueSet) (<a href="https://jira.hl7.org/browse/FHIR-31658">FHIR-31658</a>)</li>

  <li>Corrected invalid invariant for the CareTeam qualification being from a specific CodeSystem when the type is rendering in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit.html">Abstract base ExplanationOfBenefit profile</a> (<a href="https://jira.hl7.org/browse/FHIR-35889">FHIR-35889</a>)</li>

  <li>Added paidbypatientcash, paidbypatientother, paidbypatienthealthaccount codes to <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBAdjudication.html">Adjudication ValueSet</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBAdjudication.html">Adjudication CodeSystem</a> (<a href="https://jira.hl7.org/browse/FHIR-33996">FHIR-33996</a> and <a href="https://jira.hl7.org/browse/FHIR-33996">FHIR-37831</a>)</li>

  <li>Updated the url for the HCPCS Level II codes in <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBEOBInstitutionalProcedureCodes.html">C4BBEOBInstitutionalProcedureCodes</a> (<a href="https://jira.hl7.org/browse/FHIR-37334">FHIR-37334</a>)</li>

  <li>Removed the fixed meta.profile slice requirement including the full version and replaced with invariant requirements requiring a meta.profile with the major and minor version included in <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all non-abstract ExplanationOfBenefit profiles</a> (to allow instances from different patch versions to still validate) (<a href="https://jira.hl7.org/browse/FHIR-34223">FHIR-34223</a>)</li>

  <li>Updated from US Core 3.1.0 to 3.1.1. (<a href="https://jira.hl7.org/browse/FHIR-33177">FHIR-33177</a> and <a href="https://jira.hl7.org/browse/FHIR-35708">FHIR-35708</a>)</li>

  <li>Modified security guidance in <a href="https://hl7.org/fhir/us/carin-bb/STU2/Security_And_Privacy_Considerations.html">Security and Privacy Considerations</a> page (<a href="https://jira.hl7.org/browse/FHIR-31693">FHIR-31693</a>, <a href="https://jira.hl7.org/browse/FHIR-35729">FHIR-35729</a> and <a href="https://jira.hl7.org/browse/FHIR-35722">FHIR-35722</a>)</li>

  <li>Changed display of code other from default value of "Provider to "Other" in <a href="https://hl7.org/fhir/us/carin-bb/STU2/ValueSet-C4BBPayeeType.html">Payee Type ValueSet</a> (<a href="https://jira.hl7.org/browse/FHIR-34020">FHIR-34020</a>)</li>

  <li>Added guidance for the use of the 11-digit NDC code for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy.html">Pharmacy ExplanationOfBenefit</a> profile item.productOrService and item.detail.productOrService (<a href="https://jira.hl7.org/browse/FHIR-32660">FHIR-32660</a>)</li>

  <li>Corrected XPath expression for the <a href="https://hl7.org/fhir/us/carin-bb/STU2/SearchParameter-explanationofbenefit-service-date.html">service-date SearchParameter</a> (<a href="https://jira.hl7.org/browse/FHIR-32843">FHIR-32843</a>)</li>
  
  <li>Corrected invariant for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient Institutional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a> ExplanationOfBenefit profiles to allow other adjudication slices that do not have a category.code from C4BBAdjudication ValueSet (adjudicationamounttype slice) (<a href="https://jira.hl7.org/browse/FHIR-32978">FHIR-32978</a>)</li>

  <li>Removed second extra repetition of meta.profile on all <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#7">examples</a> (<a href="https://jira.hl7.org/browse/FHIR-32428">FHIR-32428</a>)</li>

  <li>Added clearer guidance on ExplanationOfBenefit.supportingInfo[servicefacility] and ExplanationOfBenefit.item.location[x] to <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional NonClinician ExplanationOfBenefit profile</a>; ExplanationOfBenefit.item.location[x] and ExplanationOfBenefit.supportingInfo[typeofbill] to <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient Institutional</a> and <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient Institutional</a> ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-34087">FHIR-34087</a>)</li>

  <li>Removed references to PractitionerRole and Location from <a href="https://hl7.org/fhir/us/carin-bb/STU2/Background.html#carin-ig-for-blue-button-relation-to-other-igs">Background Relation to other IGs</a> section (<a href="https://jira.hl7.org/browse/FHIR-33060">FHIR-33060</a>)</li>

  <li>Added clearer description of ExplanationOfBenefit.related for <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Base ExplanationOfBenefit</a> profile (<a href="https://jira.hl7.org/browse/FHIR-31411">FHIR-31411</a>)</li>

  <li>Removed CodeSystems that were duplicative of those identified in terminology.hl7.org (THO). These removals are non-substantive as they do not change the CodeSystem url used in resource instance communication (<a href="https://jira.hl7.org/browse/FHIR-38285">FHIR-38285</a>)</li>

  <li>Updated element short descriptions to be more meaningful for all  <a href="https://hl7.org/fhir/us/carin-bb/STU2/artifacts.html#structures-resource-profiles">all Resource profiles</a> (<a href="https://jira.hl7.org/browse/FHIR-34091">FHIR-34091</a>)</li>

  <li>Add guidance to the <a href="https://hl7.org/fhir/us/carin-bb/STU2/General_Guidance.html#considerations-for-improving-interoperability">General Guidance</a> section providing more information on considerations payers and consumer apps should make for understanding improving rendering of the Explanation Of Benefit data. A <a href="https://hl7.org/fhir/us/carin-bb/STU2/General_Guidance.html#example-printed-eob-mapping">example explanation of benefit document</a> with mapping to CPCDS data elements and profile paths is provided to assist consumer app developers in understanding the data elements and suggesting how payers might improve their API documentation for connecting system developers (<a href="https://jira.hl7.org/browse/FHIR-31069">FHIR-31069</a>)</li>

  <li>Updated <a href="https://hl7.org/fhir/us/carin-bb/STU2/Common_Payer_Consumer_Data_Set.html#common-payer-consumer-data-set-cpcds">diagrams and CPCDS resources</a> to match the changes on the latest version of this specification and added comparison of Explanation of Benefit dates (<a href="https://jira.hl7.org/browse/FHIR-35212">FHIR-35212</a>, <a href="https://jira.hl7.org/browse/FHIR-34513">FHIR-34513</a>, and  <a href="https://jira.hl7.org/browse/FHIR-38661">FHIR-38661</a>)</li>

  <li>Remove Must Support from Patient.address.district in the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Patient.html">Patient profile</a> (<a href="https://jira.hl7.org/browse/FHIR-35710">FHIR-35710</a>)</li>

  <li>Added a note for implementers to all locally defined CodeSystems that may switch the to central terminology.hl7.org (THO) that the code system is subject to change in a future version (<a href="https://jira.hl7.org/browse/FHIR-37830">FHIR-37830</a>)</li>

  <li>Added guidance regarding the definition of the payer id identifier to the <a href="https://hl7.org/fhir/us/carin-bb/STU2/CodeSystem-C4BBIdentifierType.html">Identifier Type CodeSystem</a> and the <a href="https://hl7.org/fhir/us/carin-bb/STU2/StructureDefinition-C4BB-Organization-definitions.html">Organization profile</a> identifier payerid slice (<a href="https://jira.hl7.org/browse/FHIR-36771">FHIR-36771</a> and <a href="https://jira.hl7.org/browse/FHIR-36770">FHIR-36770</a>)</li>

  <li>Made navigation and title updates <a href="https://jira.hl7.org/browse/FHIR-38692">FHIR-38692</a>)</li>

  <li>Removed broken link reference to "API Resource Collection in Health (ARCH)" from the <a href="https://hl7.org/fhir/us/carin-bb/STU2/Conformance_Requirements.html">General Guidance</a> page (<a href="https://jira.hl7.org/browse/FHIR-35956">FHIR-35956</a>)</li>

</ul>


### Changes and Updates for Version 1.1.0
STU Update of STU 1

<ul>
    <li>Added Data Absent Reason "not-applicable" code to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBEOBInstitutionalProcedureCodes.html#definition">Institutional Procedure Codes ValueSet</a> for use with Inpatient Institutional EOB item.productOrService and an <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.item.productOrService">Invariant disallowing the use of this code in Outpatient Institutional EOB</a> (<a href="https://jira.hl7.org/browse/FHIR-30357">FHIR-30357</a>)</li>
    <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:drg.code">Inpatient Institutional EOB supportingInfo DRG code terminology binding</a> strength from required to extensible to allow for state Medicaid assigned DRGs (<a href="https://jira.hl7.org/browse/FHIR-30380">FHIR-30380</a>)</li>
    <li>Added HIPPS codes to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBEOBInstitutionalProcedureCodes.html">Institutional EOB Procedure Codes ValueSet</a> (<a href="https://jira.hl7.org/browse/FHIR-30413">FHIR-30413</a>)</li>
    <li> Added C4BB Payer Benefit Payment Status to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBAdjudicationCategoryDiscriminator.html#definition">C4BB Adjudication Category Discriminator ValueSet</a> for use in the Professional and NonClinician EOB item.adjudication and removed inoutnetwork code from <a  href="CodeSystem-C4BBAdjudicationDiscriminator.html">Adjudication Discriminator CodeSystem</a> (<a href="https://jira.hl7.org/browse/FHIR-30806">FHIR-30806</a>)</li>
    <li>Changes on differentiating ExplanationOfBenefit profiles (<a href="https://jira.hl7.org/browse/FHIR-31594">FHIR-31594</a>) *
        <ul>
            <li>Added ExplanationofBenefit.subType requirements to the <a href = "StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.subType">Inpatient</a> and <a href = "StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.subType">Outpatient</a> Institutional ExplanationOfBenefit profiles.</li>
            <li>Added <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-C4BBInstitutionalClaimSubType.html">Institutional Claim Subtype ValueSet</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-C4BBInstitutionalClaimSubType.html">Institutional Claim Subtype CodeSystem</a></li>
        </ul>
    </li>
    <li>Changed resources used to present patient account number and medical record number (<a href="https://jira.hl7.org/browse/FHIR-31534">FHIR-31534</a>) *
        <ul>
            <li>Removed medrecnum and patacctnum slices from the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-Patient.html">Patient profile Patient.Identifier</a></li>
            <li>Added medicalrecordnumber and patientaccountnumber supportingInfo slices to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient</a>, <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html">Outpatient</a>, and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html">Professional Non-Clinical</a> ExplanationOfBenefit profiles</li>
            <li>Added medicalrecordnumber and patientaccountnumber to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-C4BBSupportingInfoType.html">Supporting Info Type CodeSystem</a></li>
        </ul>
    </li>
    <li>Added <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-AHANUBCPointOfOriginForAdmissionOrVisitNewborn.html">NUBC Point of Origin for Newborn CodeSystem</a> and renamed NUBC Point of Origin CodeSystem to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-AHANUBCPointOfOriginForAdmissionOrVisitNonnewborn.html"> NUBC Point of Origin for Non-newborn CodeSystem</a> for Inpatient and Outpatient Institutional EOB supportingInfo <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ValueSet-AHANUBCPointOfOriginForAdmissionOrVisit.html">Point of Origin ValueSet</a> for use when Type of Admission is newborn, <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html#inv">Inpatient Institutional EOB Invariant</a>, and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional.html#inv">Outpatient Institutional EOB Invariant</a> (<a href="https://jira.hl7.org/browse/FHIR-30370">FHIR-30370</a> and <a href="https://jira.hl7.org/browse/FHIR-31384">FHIR-31384</a>) *</li>
    <li>Added Invariants requiring adjudication[adjudicationamounttype] and adjudication[adjudicationamounttype].amount when header level adjudication is present to <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html#inv">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html#inv">Outpatient</a> Institutional EOBs and changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.total:adjudicationamounttype">Professional and NonClinician EOB total[adjudicationamounttype]</a> to a cardinality of 1..*( Changed item.adjudication[adjudicationamounttype].amount (<a href="https://jira.hl7.org/browse/FHIR-30369">FHIR-30369</a>) *</li>
    <li>Changes of requirements and guidance on all profiles meta.profile (<a href="https://jira.hl7.org/browse/FHIR-30375">FHIR-30375</a>) *
        <ul>
            <li>Defined fixed values for a slice of meta.profile for <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/artifacts.html#3">all profiles</a>.</li>
            <li>Added guidance on the use of meta.profile as notes to all profiles.</li>
        </ul>
    </li>
    <li>Updated NCPDP CodeSystem URLs (<a href="https://jira.hl7.org/browse/FHIR-31492">FHIR-31492</a>) * including:
        <ul>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPBrandGenericIndicator.html">NCPDP Brand Generic Indicator</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPCompoundCode.html">NCPDP Compound Code</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPDispensedAsWrittenOrProductSelectionCode.html">NCPDP Dispense As Written (DAW)/Product Selection Code</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPPrescriptionOriginCode.html">NCPDP Prescription Origin Code</a></li>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CodeSystem-NCPDPRejectCode.html">NCPDP Reject Code</a></li>
        </ul>
    </li>
    <li>Changed inoutnetwork slice names and cardinalities (<a href="https://jira.hl7.org/browse/FHIR-30635">FHIR-30635</a>), and Move total [benefitpaymentstatus] slice to supportingInfo (<a href="https://jira.hl7.org/browse/FHIR-33082">FHIR-33082</a>) *
        <ul>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Inpatient Institutional</a>, <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Outpatient Institutional</a>, and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Pharmacy-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Pharmacy</a> EOBs total[inoutnetwork] slice name to benefitpaymentstatus</li>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.item.adjudication:benefitpaymentstatus">Professional and NonClinician EOB item.adjudication[inoutnetwork]</a> slice name to benefitpayementstatus</li>
            <li>Changed cardinality of <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:benefitpaymentstatus">Outpatient</a> Institutional EOB supportingInfo[benefitpaymentstatus] from (0..1) to (1..1)</li>
            <li>Removed notes in <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician.html#root">Professional and NonClinician EOB</a> referencing total[inoutnetwork] slice name</li>
            <li>Updated notes for all profiles that referenced inoutnetwork slice name to benefitpaymentstatus</li>
            <li>Updated the Detailed Profile Comparison <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/4_Common_Payer_Consumer_Data_Set.html#profiles-definition">image</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CARINforBlueButtonProfileComparison.xlsx">source file (xslx)</a> in section 5</li>
        </ul>
    </li>
    <li>Changed cardinality of several slice properties from (0..1) to (1..1) (<a href="https://jira.hl7.org/browse/FHIR-30807">FHIR-30807</a>) *
        <ul>
            <li>Changed cardinality of item.adjudication[allowedunits].value from (0..1) to (1..1) in <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.item.adjudication:allowedunits.value">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.item.adjudication:allowedunits.value">Outpatient</a> Institutional EOBs</li>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional-definitions.html#ExplanationOfBenefit.adjudication:denialreason.reason">Inpatient Institutional EOB adjudication[denialreason].reason</a> cardinality from (0..1) to (1.1.)</li>
            <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Outpatient-Institutional-definitions.html#ExplanationOfBenefit.supportingInfo:pointoforigin.code">Outpatient Institutional EOB supportingInfo[pointoforigin].code</a> cardinality from (0..1) to (1..1)</li>
        </ul>
    </li>
    <li>Added 'Must Support' to Professional and NonClinician EOB <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.item.productOrService">item.productOrService</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Professional-NonClinician-definitions.html#ExplanationOfBenefit.item.modifier">item.modifier</a> (<a href="https://jira.hl7.org/browse/FHIR-30358">FHIR-30358</a>)</li>
    <li>Fixed Explanations of Benefits Profile Definition <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/4_Common_Payer_Consumer_Data_Set.html#profiles-definition">diagram</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/CARINforBlueButtonProfileComparisonOverview.pptx">source presentation file (pptx)</a> legend and added DRG owner (<a href="https://jira.hl7.org/browse/FHIR-30360">FHIR-30360</a>)</li>
    <li>Changed <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-ExplanationOfBenefit-Inpatient-Institutional.html">Inpatient EOB</a> insurance cardinality for 1..1 to 1..* by removing constraint in profile (<a href="https://jira.hl7.org/browse/FHIR-31477">FHIR-31477</a>)</li>
    <li>Removed IG specified requirements of Coverage.Subscriber from the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/StructureDefinition-C4BB-Coverage.html">Coverage Profile</a> (<a href="https://jira.hl7.org/browse/FHIR-31535">FHIR-31535</a>)</li>
    <li>Removed incorrect casting of <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/SearchParameter-explanationofbenefit-service-date.html">ExplanationOfBenefit service-date (item.serviced) search parameter</a> (<a href="https://jira.hl7.org/browse/FHIR-30443">FHIR-30443)</a>)</li>
    <li>Added language regarding security and privacy to the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/7_Authorization_Authentication_and_Registration.html#fhir-security-and-privacy-guidance">Authorization, Authentication, and Registration page</a> with a link to the <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/http://hl7.org/fhir/secpriv-module.html">HL7 FHIR Security and Privacy Module</a> (<a href="https://jira.hl7.org/browse/FHIR-31692">FHIR-31692</a>)</li>
    <li>Shortened the titles of Inpatient Institutional, Outpatient Institutional, and Professional and NonClinician EOB <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/artifacts.html#5">Procedure Code and Procedure Code Modifier ValueSets</a> (<a href="https://jira.hl7.org/browse/FHIR-31074">FHIR-31074</a>)</li>
    <li>Fixed errors in examples
        <ul>
            <li><a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ExplanationOfBenefit-InpatientEOBExample1.html">Inpatient</a> and <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ExplanationOfBenefit-OutpatientEOBExample1.html">Outpatient</a> Institutional EOB examples, removed top-level adjudication because item level adjudication was present (<a href="https://jira.hl7.org/browse/FHIR-29802">FHIR-29802</a>)</li>
            <li>Fixed incorrect text in <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/ExplanationOfBenefit-EOBProfessional1a.html">EOB Professional example</a> (<a href="https://jira.hl7.org/browse/FHIR-30372">FHIR-30372</a>)</li>
        </ul>
    </li>
    <li>Added missing <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/1_Background.html#davinci-carin">Diagram in How DaVinci’s PDex IG and the CARIN IG for Blue Button® work together</a> (<a href="https://jira.hl7.org/browse/FHIR-30083">FHIR-30083</a>)
    </li>
    <li>Added <a href="https://hl7.org/fhir/us/carin-bb/stu1.1/index.html#authors">additional contributors</a> (<a href="https://jira.hl7.org/browse/FHIR-30084">FHIR-30084</a>)</li>
    <li>Transitioned project structure for Sushi 1.0.0+ (For Implementation Guide generation)</li>
    <li>Corrected link to 3M licensing information <a>https://jira.hl7.org/browse/FHIR-31066</a></li>
    <li>Updated the Server CapabilityStatement
	 Persuasive with Mod, Add _id to Coverage Search parameters in CapabilityStatement <a>https://jira.hl7.org/browse/FHIR-30009</a></li>
    <li>Added Tighter guidance requiring WHEN provenance in the EOB profiles<a>https://jira.hl7.org/browse/FHIR-31639</a></li>
    <li>Removed the invariant referring to careTeam role "site" from the IG<a>https://jira.hl7.org/browse/FHIR-31658</a></li>
    <li>Increased binding strength for place of service codes<a>https://jira.hl7.org/browse/FHIR-31502</a></li>
    <li>Added more granular date searching with additional search parameters<a>https://jira.hl7.org/browse/FHIR-33165</a></li>
    <li>Removed Invariant disallowing not-applicable from Outpatient Institutional EoB item.productOrService<a>https://jira.hl7.org/browse/FHIR-32850</a></li>
    <li>Change item.location[x] to only locationCodeableConcept <a>https://jira.hl7.org/browse/FHIR-32067</a></li>
</ul>
<p> </p>
Note: Items marked with an "*" are non-compatible with earlier versions - Existing data may not be valid against the new specification.
<p> </p>


---

