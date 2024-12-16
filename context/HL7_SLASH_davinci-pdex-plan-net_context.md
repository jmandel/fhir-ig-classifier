File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/Aliases.fsh

// USCore Aliases
Alias:   $USCorePractitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias:   $USCoreOrganization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias:   $USCoreLocation = http://hl7.org/fhir/us/core/StructureDefinition/us-core-location
Alias:   $USCorePractitionerRole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias:   $us-core-provider-role-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-role
Alias:   $us-core-provider-specialty-vs = http://hl7.org/fhir/us/core/ValueSet/us-core-provider-specialty

//VhDir Aliases
Alias: $SCT = http://snomed.info/sct
Alias: $GeolocationExtension = http://hl7.org/fhir/StructureDefinition/geolocation


// Other Aliases
Alias:   $OrgType = http://terminology.hl7.org/CodeSystem/organization-type
Alias:   $EndpointStatus = http://hl7.org/fhir/ValueSet/endpoint-status
Alias:   $PublicationStatus = http://hl7.org/fhir/ValueSet/publication-status
Alias:   $LocationStatus = http://hl7.org/fhir/location-status 
Alias:   $USPSState = http://hl7.org/fhir/us/core/ValueSet/us-core-usps-state
Alias:   $USPSStateCS = https://www.usps.com/
Alias:   $ConnectionTypeCS = http://terminology.hl7.org/CodeSystem/endpoint-connection-type
Alias:   $MinValueSet = http://hl7.org/fhir/StructureDefinition/elementdefinition-minValueSet
Alias:   $DaysOfWeekVS  = http://hl7.org/fhir/ValueSet/days-of-week
Alias:   $OrganizationRoleVS  = http://hl7.org/fhir/ValueSet/organization-role
Alias:   $R4GeoJSONExtension = http://hl7.org/fhir/StructureDefinition/location-boundary-geojson
Alias:   $HL7PractitionerRoleCS = http://terminology.hl7.org/CodeSystem/practitioner-role
Alias:   $HL7OrganizationRoleCS = http://hl7.org/fhir/organization-role
Alias:   $ServiceTypeCS = http://terminology.hl7.org/CodeSystem/service-type 
Alias:   $NPICS = http://hl7.org/fhir/sid/us-npi
Alias: $BCP47 = urn:ietf:bcp:47

// CodeSystem and ValueSet Aliases
Alias:  $V3ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: $V3RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
//Alias:  $PaymentTypology =  urn:oid:2.16.840.1.113883.3.221.5  
//Alias:  $NUCCProviderTaxonomy = https://nucc.org/images/stories/CSV/nucc_taxonomy_210.csv
//Alias:  $NUCCProviderTaxonomy  = https://taxonomy.nucc.org
Alias:  $NUCCProviderTaxonomy  = http://nucc.org/provider-taxonomy
Alias:  $V2table0360VS = http://terminology.hl7.org/ValueSet/v2-0360 
Alias:  $V2table0360CS = http://terminology.hl7.org/CodeSystem/v2-0360 


// Plan-Net defined CS that mimic VHDir CodeSystems
Alias: $LanguageProficiency = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS
Alias: $MinEndpointConnectionTypeVS = http://hl7.org/fhir/us/davinci-pdex-plan-net/ValueSet/MinEndpointConnectionTypeVS
Alias: $QualificationStatusCS = http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/QualificationStatusCS





---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/CodeSystems.fsh

CodeSystem: AcceptingPatientsCS
Title: "Accepting Patients Codes"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* #nopt	"Not Accepting" "Not accepting patients"
* #newpt	"Accepting" "Accepting patients"
* #existptonly	"Accepting existing patients" "Accepting existing patients"
* #existptfam	"Accepting existing patients and their families" "Accepting existing patients and members of their families"
* ^caseSensitive = true

CodeSystem: AccessibilityCS
Title: "Accessibility CS"
Description: "General categories of accommodations available."
* ^experimental = false
* #cultcomp	"Cultural competence"	"Provides services that meet the social, cultural, and linguistic needs of persons."
* #handiaccess	"handicap accessible"	"Provides access to persons with disabilities."
* #adacomp	"ADA compliant"	"Provides access which complies with the Americans with Disabilities Act and/or amendments."
* #pubtrans	"public transit options"	"Provides access using public transportation modes."
* #anssrvc	"answering service"	"Provides capability to communicate when intended recipient is not immediately available."
* #cognitive	"cognitive"	"Provides services for cognitively impaired persons."
* #mobility	"mobility"	"Provides services for mobility impaired persons."
* ^caseSensitive = true

CodeSystem: DeliveryMethodCS
Title: "Delivery Methods"
Description: "Categories of healthcare service delivery methods."
* ^experimental = false
* #virtual	"Virtual" "Delivery not requiring provider and patient to be physically co-located, such as tele-medicine"
* #physical	"Physical" "Traditional delivery requiring provider and patient to be physically co-located."
* ^caseSensitive = true

CodeSystem: VirtualModalitiesCS
Title: "Virtual Modalities"
Description: "Categories of virtual service delivery modalities."
* ^experimental = false
* #phone	"phone" "Voice Telephone"
* #video	"video chat" "Video Chat"
* #tdd	"TDD" "Telecommunications Device for the Deaf"
* #sms	"SMS" "SMS Text Messaging"
* #app  "App" "Mobile Application"
* #web  "Website" "Website accessed through browser"
* ^caseSensitive = true

CodeSystem:  EndpointConnectionTypeCS
Title: "Endpoint Connection Types (additional)"
Description:  "Extension codes for http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
* ^experimental = false
* #hl7-fhir-opn "HL7 FHIR Operation" "Interact with a FHIR server interface using FHIR's RESTful interface using an operation other than messaging. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement."
* #rest-non-fhir "REST (not FHIR)" "Interact with a server using HTTP/REST but not FHIR.  Should be used for web portals."
* ^caseSensitive = true
 

CodeSystem:  EndpointPayloadTypeCS
Title: "Endpoint Payload Types"
Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* #NA "Not Applicable" "Not Applicable"
* ^caseSensitive = true
 
CodeSystem:  LanguageProficiencyCS
Title: "Language Proficiency CS"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale of abilities to communicate in a language."
* ^experimental = false
* #00	"No proficiency"	"Unable to function in the spoken language."
//* #06	"Memorized proficiency"	"Able to satisfy immediate needs using rehearsed utterances. Shows little real autonomy of expression, flexibility or spontaneity."
* #10	"Elementary proficiency"	"Able to satisfy minimum courtesy requirements and maintain very simple face-to-face conversations on familiar topics. A native speaker must often use slowed speech, repetition, paraphrase, or a combination of these to be understood by this individual."
//* #16	"Elementary proficiency, plus"	"Can initiate and maintain predictable face-to-face conversations and satisfy limited social demands."
* #20	"Limited working proficiency"	"Able to satisfy routine social demands and limited work requirements."
//* #26	"Limited working proficiency, plus"	"Able to satisfy most work requirements with language usage that is often, but not always, acceptable and effective."
* #30	"General professional proficiency"	"Able to speak the language with sufficient structural accuracy and vocabulary to participate effectively in most formal and informal conversations in practical, social and professional topics."
//* #36	"General professional proficiency, plus"	"Is often able to use the language to satisfy professional needs in a wide range of sophisticated and demanding tasks."
* #40	"Advanced professional proficiency"	"Able to use the language fluently and accurately on all levels normally pertinent to professional needs."
//* #46	"Advanced professional proficiency, plus"	"Speaking proficiency is regularly superior in all respects, usually equivalent to that of a well educated, highly articulate native speaker."
* #50	"Functional native proficiency"	"Speaking proficiency is functionally equivalent to that of a highly articulate well-educated native speaker and reflects the cultural standards of the country where the language is natively spoken."
* ^caseSensitive = true

 CodeSystem: HealthcareServiceCategoryCS
 Title: "Healthcare Service Category"
 Description: "Broad categories of healthcare services being performed or delivered"
* ^experimental = false
* #behav "Behavioral Health" "Services related to the promotion of mental health, resilience and wellbeing; the treatment of mental and substance use disorders; and the support of those who experience and/or are in recovery from these conditions, along with their families and communities."
* #dent "Dental" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the mouth."
* #dme "DME/Medical Supplies" "Health care consumables or equipments supplied to patients"
* #emerg "Emergency care" "Health care services rendered within a designated emergency care facility, for point-in-time evaluation and/or treatment any medical condition such that a prudent layperson possessing an average knowledge of medicine and health, believes that immediate unscheduled medical care is required."
* #group "Medical Group" "Health care services rendered by a group of people, e.g. a group of Physicians."
* #home "Home Health"	"Health care services delivered to patients within their residence rather than a clinical setting; usually provided by nurses, home health aides, and other professionals on a regularly scheduled visit."
* #hosp "Hospital" "Health care services rendered within a hospital or other inpatient setting providng patient treatment with specialzed medical and nursing staff and medical equipment."
* #lab "Laboratory" "Pathology and laboratory testing on clinical specimenst to obtain informaion about the health of a paeint to aid in diagnosis, treatment and prevention of disease."
* #other "Other" "Other"
* #outpat "Clinic or Outpatient Facility" "Health care services rendered in an outpatient facility, e.g. medical procedures, surgeries, etc."
* #prov "Medical Provider"  "Health care services rendered by a person, e.g. Physician."
* #pharm "Pharmacy" "Services related to the storage, compounding, dispensing and sale of drugs."
* #trans "Transportation" "Services which transport patients to or from a medical facility, e.g., ambulance."
* #urg "Urgent Care" "Unscheduled health care services which provide for point-in-time evaluation or treatment of a non-life-threatening medical condition."
* #vis "Vision" "Services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes."
* ^caseSensitive = true

CodeSystem: InsuranceProductTypeCS
Title: "Insurance Product Type"
Description:  "A distinct package of health insurance coverage benefits that are offered using a particular product network type."
* ^experimental = false
* #commppo "Commercial PPO"  "Health insurance provided through a Preferred Provider Organization (PPO)."
* #commhdhp "Commercial HDHP" "Health insurance provided through a High Deductible Health Plan (HDHP)."
* #commpos "Commercial POS" "Health insurance provided through a Point-of-Service (POS) Plan."
* #commhmo "Commercial HMO" "Health insurance provided through a Health Maintenance Organization (HMO)."
* #commepo "Commercial EPO" "Health insurance provided through a Exclusive Provider Organization(EPO)."
* #medi "Medicaid" "Health insurance provided to eligible adults and children under the Federal Medicaid program"
* #medihmo "Medicaid HMO" "Health insurance provided to eligible adults and children under the Federal Medicaid program through a Health Maintenance Organization (HMO)."
* #mediadv "Medicare Advantage" "Health insurance provided by a private company that contracts with Medicare to provide all Medicare Part A and Part B benefits."
* #mediadvhmo "Medicare Advantage HMO" "Health insurance offered by a private company that contracts with Medicare to provide all Medicare Part A and Part B benefits through a Health Maintenance Organization (HMO)."
* #media "Medicare Part A" "Health insurance provided under the Federal Medicare program covering inpatient hospital stays, care in a skilled nursing facility, hospice care, and some home health care."
* #medib "Medicare Part B" "Health insurance provided under the Federal Medicfare program covering certain doctors' services, outpatient care, medical supplies, and preventive services."
* #medid "Medicare Part D" "Health insurance provided under the Federal Medicare program covering prescription drugs."
* #mediab "Medicare A/B" "Health insurance provided under the Federal Medicare program covering inpatient hospital stays, care in a skilled nursing facility, hospice care, some home health care, certain doctors' services, outpatient care, medical supplies, and preventive services."
* #qhp "Qualified Health Plan" "Health insurance provided through and certified by the Health Insurance Marketplace that provides essential health benefits (EHBs), follows established limits on cost sharing, and meets other requirements outlined within the application process."
* #ihs "Indian Health Service" "Health care program provided to United States American Indians and Alaska Natives."
* #fep "Federal Employee Program" "Health insurance provided to employees of the Federal government."
* #tri "TRICARE" "Health care program provided to uniformed service members, retirees, and their families around the world."
* #va "Veterans Affairs Plan"  "Health care program provided to eligible veterans."
* #dent "Dental Plan" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity."
* #denthmo "Dental HMO" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity provided through a Health Maintenance Organization (HMO)."
* #vis "Vision Plan" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes."
* #vishmo "Vision HMO" "Health insurance provided to cover services related to the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the eyes provided through a Health Maintenance Organization (HMO)."
* ^caseSensitive = true

CodeSystem: InsurancePlanTypeCS
Title: "Insurance Plan Type"
Description:  "Categories of cost-sharing used by plans"
* ^experimental = false
* #platinum "Platinum-QHP" "Plan with highest monthly premium and lowest costs when you need care	A Qualified Health Plan with the highest monthly premiums and smallest out-of-pocket costs for the member in comparison to other metal-category plans"
* #gold "Gold-QHP" "Plan with high monthly premium and low costs when you need care	A Qualified Health Plan with the higher monthly premiums and smaller out-of-pocket costs for the member in comparison to other metal-category plans"
* #silver "Silver-QHP" "Plan with moderate monthly premium and moderate costs when you need care	A Qualified Health Plan with the lower monthly premiums and larger out-of-pocket costs for the member in comparison to other metal-category plans"
* #bronze "Bronze-QHP" "Plan with lowest monthly premium and highest costs when you need care	A Qualified Health Plan with the lowest monthly premiums and largest out-of-pocket costs for the member in comparison to other metal-category plans"
* #catastrophic "Catastrophic-QHP" "A plan with low monthly premiums and very high deductibles and are available only to those under 30 or with certain special exemptions."
* #lowdeductible "Low Deductible" "A plan that requires the insured to pay out of pocket a smaller proportion of incurred health care costs than a traditional insurance plan."
* #highdeductible "High Deductible" "A plan that requires the insured to pay out of pocket a larger proportion of incurred health care costs than a traditional insurance plan."
* #catastrophicplan "Catastrophic Plan" "A plan that requires the insured to pay out of pocket a much larger proportion of incurred health care costs than a traditional insurance plan."
* ^caseSensitive = true

CodeSystem:  OrgTypeCS
Title: "Organization Type"
Description:  "Categories of organizations based on criteria in provider directories."
* ^experimental = false
* #fac "Facility" "A physical healthcare facility."
* #prvgrp "Provider Group" "A healthcare provider entity"
* #payer "Payer" "A healthcare payer."
* #atyprv "Atypical Provider" "Providers that do not provide healthcare"
* #bus "Non-Healthcare Business" "An organization that does not meet the definitions of a Healthcare or Atypical Provider, and is not a payer or healthcare facility"
* #ntwk "Network" "A healthcare provider insurance network"
* ^caseSensitive = true

CodeSystem: QualificationStatusCS
Title: "Qualification Status"
Description: "The state indicating if a qualification is currently valid."
* ^experimental = false
* #active "active" "The credential may be considered valid for use."
* #inactive "inactive" "The credential may not be considered valid for use."
* #issiner "issued in error" "The credential was mistakenly assigned and should not be considered valid for use."
* #revoked "revoked" "The credential was revoked by the issuing organization and should not be considered valid for use."
* #pending "pending" "The credential has not been officially assigned. It may or may not be considered valid for use."
* #unknown "unknown" "The status of this credential is unknown. It may or may not be considered valid for use."
* ^caseSensitive = true


CodeSystem: ProviderRoleCS
Title: "Provider Role Codes"
Description: "A capability that an individual, group, or organization is acknowledged to have in a payer network."
* ^experimental = false
// These are Payer Roles from Gail
* #ap "Admitting Privileges" "Practitioner has admitting privileges at hospital (organization)"
* #apn "Advanced Practice Nursing Providers" "Advanced Practice Nursing Providers"
* #at "Athletic Trainer" "Athletic Trainer"
* #au "Audiologist" "Audiologist"
* #bh "Behavioral Health & Social Service Providers" "Behavioral Health & Social Service Providers"
* #ba "Board Certified Behavior Analyst" "Board Certified Behavior Analyst"
* #bt "Member Of" "Has a relationship of participation with.  This does NOT represent a member of an insurance plan, but other types of membership such as membership of physician in the AMA"    // Added 7/15/2020
* #cnw "Certified Nurse Midwife" "Certified Nurse Midwife"
* #crnp "Certified Registered Nurse Practitioner" "Certified Registered Nurse Practitioner"
* #ch "Chiropractor" "Chiropractor"
* #cs "Christian Science Practitioner" "Christian Science Practitioner"
* #co "Counselor" "Counselor"
* #dp "Dental Provider" "Dental Provider"
* #de "Dentist" "Dentist"
* #drr "Developmental, Rehabilitative and Restorative Service Providers" "Developmental, Rehabilitative and Restorative Service Providers"
* #dn "Dietary and Nutritional Service Provider" "Dietary and Nutritional Service Provider"
* #om "Doctor of Oriental Medicine" "Doctor of Oriental Medicine"
* #em "Emergency Medical Service Provider" "Emergency Medical Service Provider"
* #ho "Homeopath" "Homeopath"
* #lpn "Licensed Practical Nurse" "Licensed Practical Nurse"
* #mt "Marriage/Family Therapist" "Marriage/Family Therapist"
* #ma "Massage Therapist" "Massage Therapist"
* #nh "Naprapath" "Naprapath"
* #na "Naturopath" "Naturopath"
* #nu "Nursing Service Related Providers" "Nursing Service Related Providers"
* #ot "Occupational Therapist" "Occupational Therapist"
* #op "Optician" "Optician"
* #oo "Optometrist" "Optometrist"
* #os "Other Service Provider" "Other Service Provider"
* #rx "Pharmacy Service Providers" "Pharmacy Service Providers"
* #pt "Physical Therapist" "Physical Therapist"
* #ph "Physician" "Physician"
* #pa "Physician Assistant" "Physician Assistant"
* #po "Podiatrist" "Podiatrist"
* #py "Psychologist" "Psychologist"
* #rn "Registered Nurse" "Registered Nurse"
* #rt "Respiratory Therapist" "Respiratory Therapist"
* #sw "Social Worker" "Social Worker"
* #sp "Speech Language Pathologist" "Speech Language Pathologist"
* #sh "Speech, Language and Hearing Service Providers" "Speech, Language and Hearing Service Providers"
* #te "Technologists, Technicians and Other Technical Service Providers" "Technologists, Technicians and Other Technical Service Providers"
* ^caseSensitive = true


CodeSystem: OrganizationAffiliationRoleCS
Title: "Organization Affiliation Role"
Description: "Codes For Organization Affiliation Role"
* ^experimental = false
* #behavioral	"Outpatient Behavioral Health Provider" "Provider of services related to the promotion of mental health, resilience and wellbeing; the treatment of mental and substance use disorders; and the support of those who experience and/or are in recovery from these conditions, along with their families and communities."
* #bt "Member Of" "Has a relationship of participation with.  This does NOT represent a member of an insurance plan, but other types of membership such as membership of a hospital in an HIE"    // Added 7/15/2020
* #dme	"DME/Medical Supplier"	"Supplier of health care consumables or equipments supplied to patients."
* #group	"Medical Group"	"A group of people, e.g. a group of Physicians, who render health care services."
* #home	"Home Health Provider"	"Provider of health care services delivered to patients within their residence rather than a clinical setting; usually provided by nurses, home health aides, and other professionals on a regularly scheduled visit."
* #hospital	"Hospital"	"An inpatient facility, other than long-term care, providng patient treatment with specialzed medical and nursing staff and medical equipment."
* #laboratory	"Laboratory"	"Pathology and laboratory testing on clinical specimenst to obtain informaion about the health of a paeint to aid in diagnosis, treatment and prevention of disease."
* #other	"Other"		"A provider of heatlh care services not otherwise listed in this value set."
* #outpatient	"Clinic or Outpatient Facility"	 "An outpatient facility providing patient services, e.g. medical procedures, surgeries, etc."
* #pharmacy	"Pharmacy"	"An entity which provider services related to the storage, compounding, dispensing and sale of drugs."
* #transport	"Transporation Provider"	"A provider which transports patients to or from a medical facility, e.g., ambulance."
* #urgent	"Urgent Care Center"	"A center in which unscheduled health care services are provided for point-in-time evaluation or treatment of a non-life-threatening medical condition."
* #hospice "Hospice" "Hospice"
* #nurseCustodial "Nursing and Custodial Care Facility" "Nursing and Custodial Care Facility"
* #residential "Residential Treatment Facility" "Residential Treatment Facility"
* #respite "Respite Care Facility" "Respite Care Facility"
* #retail	"Retail Health Center"	"Retail Health Center"
* ^caseSensitive = true




---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/Extensions.fsh

Extension: Accessibility
Id: accessibility
Title: "Accessibility"
Description: "An extension to describe accessibility options offered by a practitioner or at a location."
* ^context[+].type = #element
* ^context[=].expression = "Location"
* value[x] 1..1 
* value[x] only CodeableConcept 
* value[x] from AccessibilityVS (extensible)


Extension: CommunicationProficiency
Id: communication-proficiency
Title: "Communication Proficiency"
Description: "An extension to express a practitioner’s spoken proficiency with the language indicated in practitioner.communication."
* ^context[+].type = #element
* ^context[=].expression = "Practitioner.communication"
* value[x] 1..1 
* value[x] only CodeableConcept 
* valueCodeableConcept from LanguageProficiencyVS (required)   // was example

Extension: ContactPointAvailableTime
Id: contactpoint-availabletime
Title: "Contactpoint Availabletime"
Description: "An extension representing the days and times a contact point is available"
* ^context[+].type = #element
* ^context[=].expression = "ContactPoint"
* value[x] 0..0
* extension contains
   daysOfWeek 0..* MS and 
   allDay 0..1 MS and
   availableStartTime 0..1 MS and
   availableEndTime 0..1 MS
* extension[daysOfWeek].value[x] only code 
* extension[daysOfWeek].valueCode from $DaysOfWeekVS
* extension[allDay].value[x] only boolean 
* extension[availableStartTime].value[x] only time 
* extension[availableEndTime].value[x] only time  

Extension: DeliveryMethod
Id: delivery-method
Title: "Delivery Method"
Description: "An extension describing the service delivery method.   If service delivery is virtual, one or more delivery modalities should be specified."
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* value[x] 0..0
* extension contains
   type 1..1 and
   virtualModalities 0..* MS 
* extension[type].value[x] only CodeableConcept 
* extension[type].value[x] from DeliveryMethodVS (required)
* extension[type] ^short = "Physical or Virtual Service Delivery"
* extension[type].value[x] 1..1
* extension[virtualModalities].value[x] only CodeableConcept 
* extension[virtualModalities].value[x] from VirtualModalitiesVS (extensible)
* extension[virtualModalities].value[x] 1..1
* extension[virtualModalities] ^short = "Modalities of Virtual Delivery"


Extension: EndpointUsecase
Id: endpoint-usecase
Title: "Endpoint Usecase"
Description: "EndpointUseCase is an enumeration of the specific use cases (service descriptions) supported by the endpoint"
* ^context[+].type = #element
* ^context[=].expression = "Endpoint"
* value[x] 0..0
* extension contains
   type 1..1 MS and
   standard 0..1 MS 
* extension[type] ^short = "An indication of the type of services supported by the endpoint"
* extension[type].value[x] only  CodeableConcept 
* extension[type].value[x]  1..1
* extension[type].value[x] from EndpointUsecaseVS (extensible)
* extension[standard] ^short = "A URI to a published standard describing the services supported by the endpoint (e.g. an HL7 implementation guide)"
* extension[standard].value[x] only uri 
* extension[standard].value[x] 1..1


Extension: LocationReference
Id: location-reference
Title: "Location Reference"
Description: "A reference to a Location resource (plannet-Location) defining the coverage area of a health insurance provider network"
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] only Reference (PlannetLocation)
* value[x] 1..1 MS 


Extension: NetworkReference
Id: network-reference
Title: "Network Reference"
Description: "A reference to the healthcare provider insurance networks (plannet-Network) the practitioner participates in through their role"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* value[x] only Reference(PlannetNetwork) 
* value[x] 1..1 MS 


Extension: NewPatients
Id: newpatients
Title: "New Patients"
Description: "New Patients indicates whether new patients are being accepted in general, or from a specific network.   
              This extension is included in the PractitionerRole, HealthcareService, and Location profiles.  
              This provides needed flexibility for specifying whether a provider accepts new patients by location and network. While the role is constrained to participation in a single network where it describes the single role this practitioner is playing (e.g., internal medicine physician) this does not in any way prohibit the practitioner from seeing patients from any  other network, they will however be 'out of network' for those patients."
* ^context[+].type = #element
* ^context[=].expression = "HealthcareService"
* ^context[+].type = #element
* ^context[=].expression = "Location"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* obeys new-patients-characteristics
* value[x] 0..0
* extension contains
   acceptingPatients  1..1 MS and
   fromNetwork 0..1 MS  and
   characteristics 0..* MS 
* extension[acceptingPatients].value[x] only CodeableConcept
* extension[acceptingPatients] ^short = "Accepting Patients"
* extension[acceptingPatients].value[x] 1..1
* extension[acceptingPatients].value[x] from AcceptingPatientsVS (required)
* extension[fromNetwork].value[x] only Reference(PlannetNetwork)
* extension[fromNetwork].value[x] 1..1
* extension[fromNetwork] ^short = "From Network"
* extension[characteristics].value[x] only string
* extension[characteristics].value[x] 1..1
* extension[characteristics] ^short = "Characteristics of accepted patients"



Invariant:  new-patients-characteristics 
Description: "If no new patients are accepted, no characteristics are allowed"
Expression: "extension.where(url='acceptingPatients').value.ofType(CodeableConcept).coding.where(code = 'no') implies extension.where(url='characteristics').empty()"
Severity:   #error


Extension: OrgDescription
Id: org-description
Title: "Org Description"
Description: "An extension to provide a human-readable description of an organization."
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* value[x] 1..1 MS
* value[x] only string 



Extension: PractitionerQualification
Id: practitioner-qualification
Title: "Practitioner Qualification"
Description: "An extension to add status and whereValid elements to a practitioner’s qualifications."
* ^context[+].type = #element
* ^context[=].expression = "Practitioner.qualification"
* value[x] 0..0
* extension contains
   status 1..1 MS and
   whereValid 0..* MS 
* extension[status] ^short = "Status"
* extension[status].value[x] only  code 
* extension[status].value[x] 1..1
* extension[status].valueCode from QualificationStatusVS (required)
* extension[status].valueCode =  $QualificationStatusCS#active (exactly)
* extension[whereValid] ^short = "Where the qualification is valid"
* extension[whereValid].value[x] only CodeableConcept or Reference(PlannetLocation)
* extension[whereValid].valueCodeableConcept from $USPSState (required)
* extension[whereValid].value[x] 1..1

Extension: Qualification
Id: qualification
Title: "Qualification"
Description: "An extension to add qualifications for an organization (e.g. accreditation) or practitionerRole (e.g. registered to prescribe controlled substances)."
* ^context[+].type = #element
* ^context[=].expression = "Organization"
* ^context[+].type = #element
* ^context[=].expression = "OrganizationAffiliation"
* ^context[+].type = #element
* ^context[=].expression = "PractitionerRole"
* extension contains
   identifier 0..* MS and 
   code 1..1 MS and
   issuer 0..1 MS and
   status 1..1 MS and
   period 0..1 MS and 
   whereValid 0..* MS
* extension[identifier].value[x] only Identifier 
* extension[identifier].value[x] 1..1
* extension[code].value[x] only CodeableConcept
* extension[code].value[x] 1..1
* extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[issuer].value[x] 1..1
* extension[issuer].value[x] only Reference(PlannetOrganization)
* extension[status].value[x] 1..1
* extension[status].value[x] only  code 
* extension[status].valueCode from QualificationStatusVS (required)
* extension[status].valueCode = $QualificationStatusCS#active (exactly)
* extension[period].value[x] only Period 
* extension[period].value[x] 1..1
* extension[whereValid].value[x] only CodeableConcept or Reference(PlannetLocation)
* extension[whereValid].value[x] from $USPSState (required)
* extension[whereValid].value[x] 1..1

Extension: ViaIntermediary
Id: via-intermediary
Title: "Via Intermediary"
Description: "A reference to an alternative point of contact (plannet-PractitionerRole, plannet-Organization, plannet-OrganizationAffiliation, or plannet-Location) for this organization"
* ^context[+].type = #element
* ^context[=].expression = "ContactPoint"
* value[x] only Reference(PlannetPractitionerRole or PlannetOrganizationAffiliation or PlannetLocation or PlannetOrganization) 
* value[x] 1..1 MS




---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/InsuranceNetworkExamples.fsh




Instance: AcmeofCTStdNet
InstanceOf: PlannetNetwork
Description: "Acme of CT Standard Network"
Usage: #example
* meta.profile = Canonical(PlannetNetwork) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(Acme)
* type = OrgTypeCS#ntwk "Network"
* name = "ACME CT Preferred Provider Network"
* contact.telecom.extension[via-intermediary].valueReference = Reference(Acme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"


Instance: AcmeofCTPremNet
InstanceOf: PlannetNetwork
Description: "Acme of CT Premium Premium Network"
Usage: #example
* meta.profile = Canonical(PlannetNetwork) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(Acme)
* type = OrgTypeCS#ntwk "Network"
* name = "ACME CT Premium Preferred Provider Network"
* contact.telecom.extension[via-intermediary].valueReference = Reference(Acme)
* contact.name.family = "Kawasaki"
* contact.name.given = "Jane"
* extension[location-reference].valueReference = Reference(StateOfCTLocation)

Instance: Acme
InstanceOf: PlannetOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(PlannetOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Acme of CT"
* type = OrgTypeCS#payer "Payer"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.acmeofct.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"
* extension[org-description].valueString = "Acme of CT is a leading provider of health and other insurance products."

Instance: AcmeQHPGold
InstanceOf: PlannetInsurancePlan
Description: "Acme of CT QHP Gold Plan"
Usage: #example
* meta.profile = Canonical(PlannetInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* name = "Acme of CT QHP Gold"
* type = InsuranceProductTypeCS#qhp "Qualified Health Plan"
* plan.type = InsurancePlanTypeCS#gold "Gold-QHP"
* ownedBy = Reference (Acme)
* administeredBy = Reference (Acme)     // 1..1
* network[0] = Reference(AcmeofCTStdNet)
* network[1] = Reference(AcmeofCTPremNet)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: AcmeQHPBronze
InstanceOf: PlannetInsurancePlan
Description: "Acme of CT QHP Bronze Plan"
Usage: #example
* meta.profile = Canonical(PlannetInsurancePlan) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* name = "Acme of CT QHP Bronze"
* type = InsuranceProductTypeCS#qhp "Qualified Health Plan"
* plan.type = InsurancePlanTypeCS#bronze "Bronze-QHP"
* ownedBy = Reference (Acme)
* administeredBy = Reference (Acme)     // 1..1
* network[0] = Reference(AcmeofCTStdNet)
* coverageArea = Reference(StateOfCTLocation)
* endpoint = Reference(AcmeOfCTPortalEndpoint)
* status = #active

Instance: StateOfCTLocation
InstanceOf: PlannetLocation
Description: "State of CT Area"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "State of CT Area"
* address.state = "CT"
* extension[region].valueAttachment.contentType = #application/json
* extension[region].valueAttachment.title = "GeoJSON Outline of the State of Connecticut"
* extension[region].valueAttachment.data  = "eyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJHRU9fSUQiOiAiMDQwMDAwMFVTMDkiLCAiU1RBVEUiOiAiMDkiLCAiTkFNRSI6ICJDb25uZWN0aWN1dCIsICJMU0FEIjogIiIsICJDRU5TVVNBUkVBIjogNDg0Mi4zNTUwMDAgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbIFsgWyBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdLCBbIC03MS44NjgyMzUsIDQxLjMzMDk0MSBdLCBbIC03MS44ODYzMDIsIDQxLjMzNjQxMCBdLCBbIC03MS45MTY3MTAsIDQxLjMzMjIxNyBdLCBbIC03MS45MjIwOTIsIDQxLjMzNDUxOCBdLCBbIC03MS45MjMyODIsIDQxLjMzNTExMyBdLCBbIC03MS45MzYyODQsIDQxLjMzNzk1OSBdLCBbIC03MS45NDU2NTIsIDQxLjMzNzc5OSBdLCBbIC03MS45NTY3NDcsIDQxLjMyOTg3MSBdLCBbIC03MS45NzA5NTUsIDQxLjMyNDUyNiBdLCBbIC03MS45Nzk0NDcsIDQxLjMyOTk4NyBdLCBbIC03MS45ODIxOTQsIDQxLjMyOTg2MSBdLCBbIC03MS45ODgxNTMsIDQxLjMyMDU3NyBdLCBbIC03Mi4wMDAyOTMsIDQxLjMxOTIzMiBdLCBbIC03Mi4wMDUxNDMsIDQxLjMwNjY4NyBdLCBbIC03Mi4wMTA4MzgsIDQxLjMwNzAzMyBdLCBbIC03Mi4wMjE4OTgsIDQxLjMxNjgzOCBdLCBbIC03Mi4wODQ0ODcsIDQxLjMxOTYzNCBdLCBbIC03Mi4wOTQ0NDMsIDQxLjMxNDE2NCBdLCBbIC03Mi4wOTk4MjAsIDQxLjMwNjk5OCBdLCBbIC03Mi4xMTE4MjAsIDQxLjI5OTA5OCBdLCBbIC03Mi4xMzQyMjEsIDQxLjI5OTM5OCBdLCBbIC03Mi4xNjE1ODAsIDQxLjMxMDI2MiBdLCBbIC03Mi4xNzM5MjIsIDQxLjMxNzU5NyBdLCBbIC03Mi4xNzc2MjIsIDQxLjMyMjQ5NyBdLCBbIC03Mi4xODQxMjIsIDQxLjMyMzk5NyBdLCBbIC03Mi4xOTEwMjIsIDQxLjMyMzE5NyBdLCBbIC03Mi4yMDE0MjIsIDQxLjMxNTY5NyBdLCBbIC03Mi4yMDMwMjIsIDQxLjMxMzE5NyBdLCBbIC03Mi4yMDQwMjIsIDQxLjI5OTA5NyBdLCBbIC03Mi4yMDE0MDAsIDQxLjI4ODQ3MCBdLCBbIC03Mi4yMDUxMDksIDQxLjI4NTE4NyBdLCBbIC03Mi4yMDk5OTIsIDQxLjI4NjA2NSBdLCBbIC03Mi4yMTI5MjQsIDQxLjI5MTM2NSBdLCBbIC03Mi4yMjUyNzYsIDQxLjI5OTA0NyBdLCBbIC03Mi4yMzU1MzEsIDQxLjMwMDQxMyBdLCBbIC03Mi4yNDgxNjEsIDQxLjI5OTQ4OCBdLCBbIC03Mi4yNTE4OTUsIDQxLjI5ODYyMCBdLCBbIC03Mi4yNTA1MTUsIDQxLjI5NDM4NiBdLCBbIC03Mi4yNTEzMjMsIDQxLjI4OTk5NyBdLCBbIC03Mi4yNjE0ODcsIDQxLjI4MjkyNiBdLCBbIC03Mi4zMTc3NjAsIDQxLjI3Nzc4MiBdLCBbIC03Mi4zMjc1OTUsIDQxLjI3ODQ2MCBdLCBbIC03Mi4zMzM4OTQsIDQxLjI4MjkxNiBdLCBbIC03Mi4zNDg2NDMsIDQxLjI3NzQ0NiBdLCBbIC03Mi4zNDgwNjgsIDQxLjI2OTY5OCBdLCBbIC03Mi4zODY2MjksIDQxLjI2MTc5OCBdLCBbIC03Mi4zOTg2ODgsIDQxLjI3ODE3MiBdLCBbIC03Mi40MDU5MzAsIDQxLjI3ODM5OCBdLCBbIC03Mi40NTE5MjUsIDQxLjI3ODg4NSBdLCBbIC03Mi40NzI1MzksIDQxLjI3MDEwMyBdLCBbIC03Mi40ODU2OTMsIDQxLjI3MDg4MSBdLCBbIC03Mi40OTk1MzQsIDQxLjI2NTg2NiBdLCBbIC03Mi41MDY2MzQsIDQxLjI2MDA5OSBdLCBbIC03Mi41MTg2NjAsIDQxLjI2MTI1MyBdLCBbIC03Mi41MjEzMTIsIDQxLjI2NTYwMCBdLCBbIC03Mi41Mjk0MTYsIDQxLjI2NDQyMSBdLCBbIC03Mi41MzMyNDcsIDQxLjI2MjY5MCBdLCBbIC03Mi41MzY3NDYsIDQxLjI1NjIwNyBdLCBbIC03Mi41NDcyMzUsIDQxLjI1MDQ5OSBdLCBbIC03Mi41NzExMzYsIDQxLjI2ODA5OCBdLCBbIC03Mi41ODMzMzYsIDQxLjI3MTY5OCBdLCBbIC03Mi41OTgwMzYsIDQxLjI2ODY5OCBdLCBbIC03Mi42MTcyMzcsIDQxLjI3MTk5OCBdLCBbIC03Mi42NDE1MzgsIDQxLjI2Njk5OCBdLCBbIC03Mi42NTM4MzgsIDQxLjI2NTg5NyBdLCBbIC03Mi42NjI4MzgsIDQxLjI2OTE5NyBdLCBbIC03Mi42NzIzMzksIDQxLjI2Njk5NyBdLCBbIC03Mi42ODQ5MzksIDQxLjI1NzU5NyBdLCBbIC03Mi42ODU1MzksIDQxLjI1MTI5NyBdLCBbIC03Mi42OTA0MzksIDQxLjI0NjY5NyBdLCBbIC03Mi42OTQ3NDQsIDQxLjI0NDk3MCBdLCBbIC03Mi43MTA1OTUsIDQxLjI0NDQ4MCBdLCBbIC03Mi43MTM2NzQsIDQxLjI0OTAwNyBdLCBbIC03Mi43MTEyMDgsIDQxLjI1MTAxOCBdLCBbIC03Mi43MTI0NjAsIDQxLjI1NDE2NyBdLCBbIC03Mi43MjI0MzksIDQxLjI1OTEzOCBdLCBbIC03Mi43MzI4MTMsIDQxLjI1NDcyNyBdLCBbIC03Mi43NTQ0NDQsIDQxLjI2NjkxMyBdLCBbIC03Mi43NTc0NzcsIDQxLjI2NjkxMyBdLCBbIC03Mi43ODYxNDIsIDQxLjI2NDc5NiBdLCBbIC03Mi44MTg3MzcsIDQxLjI1MjI0NCBdLCBbIC03Mi44MTkzNzIsIDQxLjI1NDA2MSBdLCBbIC03Mi44MjY4ODMsIDQxLjI1Njc1NSBdLCBbIC03Mi44NDc3NjcsIDQxLjI1NjY5MCBdLCBbIC03Mi44NTAyMTAsIDQxLjI1NTU0NCBdLCBbIC03Mi44NTQwNTUsIDQxLjI0Nzc0MCBdLCBbIC03Mi44NjEzNDQsIDQxLjI0NTI5NyBdLCBbIC03Mi44ODE0NDUsIDQxLjI0MjU5NyBdLCBbIC03Mi44OTU0NDUsIDQxLjI0MzY5NyBdLCBbIC03Mi45MDQzNDUsIDQxLjI0NzI5NyBdLCBbIC03Mi45MDUyNDUsIDQxLjI0ODI5NyBdLCBbIC03Mi45MDMwNDUsIDQxLjI1Mjc5NyBdLCBbIC03Mi44OTQ3NDUsIDQxLjI1NjE5NyBdLCBbIC03Mi44OTM4NDUsIDQxLjI1OTg5NyBdLCBbIC03Mi45MDgyMDAsIDQxLjI4MjkzMiBdLCBbIC03Mi45MTY4MjcsIDQxLjI4MjAzMyBdLCBbIC03Mi45MjAwNjIsIDQxLjI4MDA1NiBdLCBbIC03Mi45MjA4NDYsIDQxLjI2ODg5NyBdLCBbIC03Mi45MzU2NDYsIDQxLjI1ODQ5NyBdLCBbIC03Mi45NjIwNDcsIDQxLjI1MTU5NyBdLCBbIC03Mi45ODYyNDcsIDQxLjIzMzQ5NyBdLCBbIC03Mi45OTc5NDgsIDQxLjIyMjY5NyBdLCBbIC03My4wMDc1NDgsIDQxLjIxMDE5NyBdLCBbIC03My4wMTQ5NDgsIDQxLjIwNDI5NyBdLCBbIC03My4wMjAxNDksIDQxLjIwNDA5NyBdLCBbIC03My4wMjA0NDksIDQxLjIwNjM5NyBdLCBbIC03My4wMjI1NDksIDQxLjIwNzE5NyBdLCBbIC03My4wNTA2NTAsIDQxLjIxMDE5NyBdLCBbIC03My4wNTkzNTAsIDQxLjIwNjY5NyBdLCBbIC03My4wNzk0NTAsIDQxLjE5NDAxNSBdLCBbIC03My4xMDU0OTMsIDQxLjE3MjE5NCBdLCBbIC03My4xMDc5ODcsIDQxLjE2ODczOCBdLCBbIC03My4xMTAzNTIsIDQxLjE1OTY5NyBdLCBbIC03My4xMDk5NTIsIDQxLjE1Njk5NyBdLCBbIC03My4xMDgzNTIsIDQxLjE1MzcxOCBdLCBbIC03My4xMTEwNTIsIDQxLjE1MDc5NyBdLCBbIC03My4xMzAyNTMsIDQxLjE0Njc5NyBdLCBbIC03My4xNzAwNzQsIDQxLjE2MDUzMiBdLCBbIC03My4xNzA3MDEsIDQxLjE2NDk0NSBdLCBbIC03My4xNzc3NzQsIDQxLjE2NjY5NyBdLCBbIC03My4yMDI2NTYsIDQxLjE1ODA5NiBdLCBbIC03My4yMjgyOTUsIDQxLjE0MjYwMiBdLCBbIC03My4yMzUwNTgsIDQxLjE0Mzk5NiBdLCBbIC03My4yNDc5NTgsIDQxLjEyNjM5NiBdLCBbIC03My4yNjIzNTgsIDQxLjExNzQ5NiBdLCBbIC03My4yODY3NTksIDQxLjEyNzg5NiBdLCBbIC03My4yOTYzNTksIDQxLjEyNTY5NiBdLCBbIC03My4zMTE4NjAsIDQxLjExNjI5NiBdLCBbIC03My4zMzA2NjAsIDQxLjEwOTk5NiBdLCBbIC03My4zNzIyOTYsIDQxLjEwNDAyMCBdLCBbIC03My4zOTIxNjIsIDQxLjA4NzY5NiBdLCBbIC03My40MDAxNTQsIDQxLjA4NjI5OSBdLCBbIC03My40MTM2NzAsIDQxLjA3MzI1OCBdLCBbIC03My40MzUwNjMsIDQxLjA1NjY5NiBdLCBbIC03My40NTAzNjQsIDQxLjA1NzA5NiBdLCBbIC03My40NjgyMzksIDQxLjA1MTM0NyBdLCBbIC03My40NzczNjQsIDQxLjAzNTk5NyBdLCBbIC03My40OTMzMjcsIDQxLjA0ODE3MyBdLCBbIC03My41MTY5MDMsIDQxLjAzODczOCBdLCBbIC03My41MTY3NjYsIDQxLjAyOTQ5NyBdLCBbIC03My41MjI2NjYsIDQxLjAxOTI5NyBdLCBbIC03My41Mjg4NjYsIDQxLjAxNjM5NyBdLCBbIC03My41MzExNjksIDQxLjAyMTkxOSBdLCBbIC03My41MzAxODksIDQxLjAyODc3NiBdLCBbIC03My41MzI3ODYsIDQxLjAzMTY3MCBdLCBbIC03My41MzUzMzgsIDQxLjAzMTkyMCBdLCBbIC03My41NTE0OTQsIDQxLjAyNDMzNiBdLCBbIC03My41NjE5NjgsIDQxLjAxNjc5NyBdLCBbIC03My41Njc2NjgsIDQxLjAxMDg5NyBdLCBbIC03My41NzAwNjgsIDQxLjAwMTU5NyBdLCBbIC03My41ODM5NjgsIDQxLjAwMDg5NyBdLCBbIC03My41ODQ5ODgsIDQxLjAxMDUzNyBdLCBbIC03My41OTU2OTksIDQxLjAxNTk5NSBdLCBbIC03My42MDM5NTIsIDQxLjAxNTA1NCBdLCBbIC03My42NDM0NzgsIDQxLjAwMjE3MSBdLCBbIC03My42NTExNzUsIDQwLjk5NTIyOSBdLCBbIC03My42NTczMzYsIDQwLjk4NTE3MSBdLCBbIC03My42NTk2NzEsIDQwLjk4NzkwOSBdLCBbIC03My42NTg3NzIsIDQwLjk5MzQ5NyBdLCBbIC03My42NTkzNzIsIDQwLjk5OTQ5NyBdLCBbIC03My42NTU1NzEsIDQxLjAwNzY5NyBdLCBbIC03My42NTQ2NzEsIDQxLjAxMTY5NyBdLCBbIC03My42NTUzNzEsIDQxLjAxMjc5NyBdLCBbIC03My42NjI2NzIsIDQxLjAyMDQ5NyBdLCBbIC03My42NzA0NzIsIDQxLjAzMDA5NyBdLCBbIC03My42Nzk5NzMsIDQxLjA0MTc5NyBdLCBbIC03My42ODcxNzMsIDQxLjA1MDY5NyBdLCBbIC03My42OTQyNzMsIDQxLjA1OTI5NiBdLCBbIC03My43MTY4NzUsIDQxLjA4NzU5NiBdLCBbIC03My43MjI1NzUsIDQxLjA5MzU5NiBdLCBbIC03My43Mjc3NzUsIDQxLjEwMDY5NiBdLCBbIC03My42Mzk2NzIsIDQxLjE0MTQ5NSBdLCBbIC03My42MzIxNTMsIDQxLjE0NDkyMSBdLCBbIC03My41NjQ5NDEsIDQxLjE3NTE3MCBdLCBbIC03My41MTQ2MTcsIDQxLjE5ODQzNCBdLCBbIC03My41MDk0ODcsIDQxLjIwMDgxNCBdLCBbIC03My40ODI3MDksIDQxLjIxMjc2MCBdLCBbIC03My41MTgzODQsIDQxLjI1NjcxOSBdLCBbIC03My41NTA5NjEsIDQxLjI5NTQyMiBdLCBbIC03My41NDg5MjksIDQxLjMwNzU5OCBdLCBbIC03My41NDk1NzQsIDQxLjMxNTkzMSBdLCBbIC03My41NDg5NzMsIDQxLjMyNjI5NyBdLCBbIC03My41NDQ3MjgsIDQxLjM2NjM3NSBdLCBbIC03My41NDM0MjUsIDQxLjM3NjYyMiBdLCBbIC03My41NDExNjksIDQxLjQwNTk5NCBdLCBbIC03My41Mzc2NzMsIDQxLjQzMzkwNSBdLCBbIC03My41Mzc0NjksIDQxLjQzNTg5MCBdLCBbIC03My41MzY5NjksIDQxLjQ0MTA5NCBdLCBbIC03My41MzYwNjcsIDQxLjQ1MTMzMSBdLCBbIC03My41MzU5ODYsIDQxLjQ1MzA2MCBdLCBbIC03My41MzU4ODUsIDQxLjQ1NTIzNiBdLCBbIC03My41MzU4NTcsIDQxLjQ1NTcwOSBdLCBbIC03My41MzU3NjksIDQxLjQ1NzE1OSBdLCBbIC03My41MzQzNjksIDQxLjQ3NTg5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjM5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjkxMSBdLCBbIC03My41MzQxNTAsIDQxLjQ3ODA2MCBdLCBbIC03My41MzQwNTUsIDQxLjQ3ODk2OCBdLCBbIC03My41MzM5NjksIDQxLjQ3OTY5MyBdLCBbIC03My41MzAwNjcsIDQxLjUyNzE5NCBdLCBbIC03My41MjEwNDEsIDQxLjYxOTc3MyBdLCBbIC03My41MjAwMTcsIDQxLjY0MTE5NyBdLCBbIC03My41MTY3ODUsIDQxLjY4NzU4MSBdLCBbIC03My41MTE5MjEsIDQxLjc0MDk0MSBdLCBbIC03My41MTA5NjEsIDQxLjc1ODc0OSBdLCBbIC03My41MDUwMDgsIDQxLjgyMzc3MyBdLCBbIC03My41MDQ5NDQsIDQxLjgyNDI4NSBdLCBbIC03My41MDE5ODQsIDQxLjg1ODcxNyBdLCBbIC03My40OTgzMDQsIDQxLjg5MjUwOCBdLCBbIC03My40OTY1MjcsIDQxLjkyMjM4MCBdLCBbIC03My40OTI5NzUsIDQxLjk1ODUyNCBdLCBbIC03My40ODk2MTUsIDQyLjAwMDA5MiBdLCBbIC03My40ODczMTQsIDQyLjA0OTYzOCBdLCBbIC03My40MzI4MTIsIDQyLjA1MDU4NyBdLCBbIC03My4yOTQ0MjAsIDQyLjA0Njk4NCBdLCBbIC03My4yOTMwOTcsIDQyLjA0Njk0MCBdLCBbIC03My4yMzEwNTYsIDQyLjA0NDk0NSBdLCBbIC03My4yMjk3OTgsIDQyLjA0NDg3NyBdLCBbIC03My4wNTMyNTQsIDQyLjAzOTg2MSBdLCBbIC03Mi45OTk1NDksIDQyLjAzODY1MyBdLCBbIC03Mi44NjM3MzMsIDQyLjAzNzcxMCBdLCBbIC03Mi44NjM2MTksIDQyLjAzNzcwOSBdLCBbIC03Mi44NDcxNDIsIDQyLjAzNjg5NCBdLCBbIC03Mi44MTM1NDEsIDQyLjAzNjQ5NCBdLCBbIC03Mi44MTY3NDEsIDQxLjk5NzU5NSBdLCBbIC03Mi43NjY3MzksIDQyLjAwMjk5NSBdLCBbIC03Mi43NjYxMzksIDQyLjAwNzY5NSBdLCBbIC03Mi43NjMyNjUsIDQyLjAwOTc0MiBdLCBbIC03Mi43NjMyMzgsIDQyLjAxMjc5NSBdLCBbIC03Mi43NjEyMzgsIDQyLjAxNDU5NSBdLCBbIC03Mi43NTk3MzgsIDQyLjAxNjk5NSBdLCBbIC03Mi43NjEzNTQsIDQyLjAxODE4MyBdLCBbIC03Mi43NjIzMTAsIDQyLjAxOTc3NSBdLCBbIC03Mi43NjIxNTEsIDQyLjAyMTUyNyBdLCBbIC03Mi43NjA1NTgsIDQyLjAyMTg0NiBdLCBbIC03Mi43NTgxNTEsIDQyLjAyMDg2NSBdLCBbIC03Mi43NTc0NjcsIDQyLjAyMDk0NyBdLCBbIC03Mi43NTQwMzgsIDQyLjAyNTM5NSBdLCBbIC03Mi43NTE3MzgsIDQyLjAzMDE5NSBdLCBbIC03Mi43NTM1MzgsIDQyLjAzMjA5NSBdLCBbIC03Mi43NTc1MzgsIDQyLjAzMzI5NSBdLCBbIC03Mi43NTU4MzgsIDQyLjAzNjE5NSBdLCBbIC03Mi42OTU5MjcsIDQyLjAzNjc4OCBdLCBbIC03Mi42NDMxMzQsIDQyLjAzMjM5NSBdLCBbIC03Mi42MDc5MzMsIDQyLjAzMDc5NSBdLCBbIC03Mi42MDY5MzMsIDQyLjAyNDk5NSBdLCBbIC03Mi41OTAyMzMsIDQyLjAyNDY5NSBdLCBbIC03Mi41ODIzMzIsIDQyLjAyNDY5NSBdLCBbIC03Mi41NzMyMzEsIDQyLjAzMDE0MSBdLCBbIC03Mi41MjgxMzEsIDQyLjAzNDI5NSBdLCBbIC03Mi40NTY2ODAsIDQyLjAzMzk5OSBdLCBbIC03Mi4zMTcxNDgsIDQyLjAzMTkwNyBdLCBbIC03Mi4yNDk1MjMsIDQyLjAzMTYyNiBdLCBbIC03Mi4xMzU2ODcsIDQyLjAzMDI0NSBdLCBbIC03Mi4wNjM0OTYsIDQyLjAyNzM0NyBdLCBbIC03MS45ODczMjYsIDQyLjAyNjg4MCBdLCBbIC03MS44OTA3ODAsIDQyLjAyNDM2OCBdLCBbIC03MS44MDA2NTAsIDQyLjAyMzU2OSBdLCBbIC03MS43OTkyNDIsIDQyLjAwODA2NSBdLCBbIC03MS43OTc5MjIsIDQxLjkzNTM5NSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MTEwMSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MDE0MSBdLCBbIC03MS43OTI3ODYsIDQxLjgwODY3MCBdLCBbIC03MS43OTI3NjcsIDQxLjgwNzAwMSBdLCBbIC03MS43OTEwNjIsIDQxLjc3MDI3MyBdLCBbIC03MS43ODk2NzgsIDQxLjcyNDczNCBdLCBbIC03MS43ODY5OTQsIDQxLjY1NTk5MiBdLCBbIC03MS43ODkzNTYsIDQxLjU5NjkxMCBdLCBbIC03MS43OTc2ODMsIDQxLjQxNjcwOSBdLCBbIC03MS44MTgzOTAsIDQxLjQxOTU5OSBdLCBbIC03MS44Mzk2NDksIDQxLjQxMjExOSBdLCBbIC03MS44NDI1NjMsIDQxLjQwOTg1NSBdLCBbIC03MS44NDM0NzIsIDQxLjQwNTgzMCBdLCBbIC03MS44NDIxMzEsIDQxLjM5NTM1OSBdLCBbIC03MS44MzM0NDMsIDQxLjM4NDUyNCBdLCBbIC03MS44MzE2MTMsIDQxLjM3MDg5OSBdLCBbIC03MS44Mzc3MzgsIDQxLjM2MzUyOSBdLCBbIC03MS44MzU5NTEsIDQxLjM1MzkzNSBdLCBbIC03MS44Mjk1OTUsIDQxLjM0NDU0NCBdLCBbIC03MS44MzkwMTMsIDQxLjMzNDA0MiBdLCBbIC03MS44NjA1MTMsIDQxLjMyMDI0OCBdLCBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdIF0gXSwgWyBbIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0sIFsgLTczLjQwMzYxMCwgNDEuMDYyNjg3IF0sIFsgLTczLjM2Nzg1OSwgNDEuMDg4MTIwIF0sIFsgLTczLjM1MjA1MSwgNDEuMDg4MTIwIF0sIFsgLTczLjM4NTczNSwgNDEuMDU5MjUwIF0sIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0gXSBdIF0gfSB9"



Instance: AcmeOfCTPortalEndpoint
InstanceOf: PlannetEndpoint
Description: "Endpoint for Acme of CT Portal"
Usage: #example
* meta.profile = Canonical(PlannetEndpoint) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Endpoint for Acme of CT Portal"
* connectionType = EndpointConnectionTypeCS#rest-non-fhir
* payloadType = EndpointPayloadTypeCS#NA
* address = "https://urlofportal.acmect.com"
* extension[endpoint-usecase].extension[type].valueCodeableConcept = $V3ActReason#HOPERAT


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/OrganizationExamples.fsh

Instance: HartfordOrthopedics 
InstanceOf: PlannetOrganization
Description: "Hartford Orthpedic Services is a group providing Orthpods for Acme of CT at Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(PlannetOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "1407071236"
* identifier[NPI].system = $NPICS
* name = "Hartford Orthopedics Services"
* type = OrgTypeCS#prvgrp "Provider Group"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 2
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* contact.telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* contact.telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00

Instance: Hospital
InstanceOf: PlannetOrganization
Description: "Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(PlannetOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "1407071236"
* identifier[NPI].system = $NPICS
* name = "Hartford General Hospital"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.hartfordgeneralhospital.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Hartford"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"
/* 
* extension[qualification].extension[identifier]
* extension[qualification].extension[code] = 
* extension[qualification].extension[issuer].display = "CMS"
* extension[qualification].extension[status] = $QualificationStatusCS#active
*/

Instance: HospERService
InstanceOf: PlannetHealthcareService
Description: "Hartford General Hospital ER"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#emerg  
* specialty =  $NUCCProviderTaxonomy#207P00000X   "Emergency Medicine Physician"
* providedBy = Reference(Hospital)
* location[0] = Reference(HospLoc1)



Instance: HospLoc1
InstanceOf: PlannetLocation
Description: "Location1 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Hartford Hospital Location 1"
* type = $V3RoleCode#HOSP 
* managingOrganization = Reference(Hospital)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][5].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][6].valueCode  = #sun 
* telecom[1].system = #url
* telecom[1].value = "https://www.hgh.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[0].daysOfWeek[5]  = #sat
* hoursOfOperation[0].daysOfWeek[6]  = #sun



Instance: HospLoc2
InstanceOf: PlannetLocation
Description: "Location2 of Hartford Hospital"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Hartford Hospital Location 2"
* type = $V3RoleCode#HOSP
* managingOrganization = Reference(Hospital)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][5].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][6].valueCode  = #sun 
* telecom[1].system = #url
* telecom[1].value = "https://www.hgh.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[0].daysOfWeek[5]  = #sat
* hoursOfOperation[0].daysOfWeek[6]  = #sun

Instance: HartfordOrthopedicServices
InstanceOf: PlannetHealthcareService
Description: "Hartford Orthopedic Services"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#prov 
* specialty = $NUCCProviderTaxonomy#207X00000X "Orthopaedic Surgery Physician"   // Orthopedics
* providedBy = Reference(HartfordOrthopedics)
* location[1] = Reference(HospLoc2)
* location[0] = Reference(HospLoc1)

Instance: HartfordOrthopedicAffil
InstanceOf: PlannetOrganizationAffiliation
Description: "Hartford Orthopedic Services affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = $HL7OrganizationRoleCS#provider 
* healthcareService = Reference(HartfordOrthopedicServices)
* participatingOrganization = Reference(HartfordOrthopedics)
* organization = Reference(Hospital)
* location[1] = Reference(HospLoc2)
* location[0] = Reference(HospLoc1)
* network = Reference(AcmeofCTStdNet)

Instance: HamiltonClinicAffil
InstanceOf: PlannetOrganizationAffiliation
Description: "Hamilton Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#outpatient 
* healthcareService = Reference(HamiltonClinicServices)
* participatingOrganization = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)
* network = Reference(AcmeofCTStdNet)


Instance: HamiltonClinicServices
InstanceOf: PlannetHealthcareService
Description: "Hamilton Clinic Services"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* providedBy = Reference(HamiltonClinic)
* location[0] = Reference(HospLoc1)


Instance: HamiltonClinic
InstanceOf: PlannetOrganization
Description: "Hamilton Clinic (a Division of Hartford Hospital)"
Usage: #example
* meta.profile = Canonical(PlannetOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "1407071236"
* identifier[NPI].system = $NPICS
* name = "Hamilton Clinic"
* partOf = Reference(Hospital)
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.hartfordgeneralhospital.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"


Instance: BurrClinicAffil
InstanceOf: PlannetOrganizationAffiliation
Description: "Burr Clinic's affiliation with Acme of CT Provider Network and Hartford General Hospital"
Usage: #example
* meta.profile = Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#outpatient 
* healthcareService = Reference(BurrClinicServices)
* participatingOrganization = Reference(BurrClinic)
* location[0] = Reference(HospLoc2)
* network = Reference(AcmeofCTStdNet)
* organization = Reference(Hospital)

Instance: BurrClinicServices
InstanceOf: PlannetHealthcareService
Description: "Burr Clinic Services"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* providedBy = Reference(BurrClinic)
* location[0] = Reference(HospLoc1)


Instance: BurrClinic
InstanceOf: PlannetOrganization
Description: "Burr Clinic provides service to Hartford Hospital"
Usage: #example
* meta.profile = Canonical(PlannetOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "1407071236"
* identifier[NPI].system = $NPICS
* name = "Burr Clinic"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.burrclinic.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"


Instance: ConnHIE
InstanceOf: PlannetOrganization
Description: "Connecticut HIE"
Usage: #example
* meta.profile = Canonical(PlannetOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Connecticut HIE"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.connhie.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#atyprv "Atypical Provider"

Instance: ConnHIEAffil
InstanceOf: PlannetOrganizationAffiliation
Description: "Burr Clinic's affiliation with Conn HIE"
Usage: #example
* meta.profile = Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = OrganizationAffiliationRoleCS#bt
* participatingOrganization = Reference(BurrClinic)
* organization = Reference(ConnHIE)


/*


Instance: PractitionerARole1
InstanceOf: PlannetPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Rockville Hospital"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH 
* practitioner = Reference(PractitionerA)
* healthcareService = Reference(HealthCareServiceEmergency)
// specialty = internal medicine
// available M-F

Instance: PractitionerARole2
InstanceOf: PlannetPractitionerRole
Description: "Dr Smith Internal Medicine at Rockville Clinic"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#PH
// specialty = internal medicine
// Available:  Sat/Sun
* healthcareService = Reference(HealthCareServiceOutpatientClinic)

Instance: HealthCareServiceOutpatientClinic
InstanceOf: PlannetHealthcareService
Description: "Rockville Clinic Outpatient Internal Medicine Service"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Outpatient
* specialty = $NUCCProviderTaxonomy#3336C0003X   // Fix to Internal Medicine
* providedBy = Reference(OrganizationInternalMedicineLLC)
* location[0] = Reference(RockvilleClinicLocation)

Instance: HealthCareServiceEmergency
InstanceOf: PlannetHealthcareService
Description: "Rockville Hospital ER"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#Emergency 
* providedBy = Reference(OrganizationRockvilleHospital)
* location[0] = Reference(RockvilleHospitalLocation)


Instance: PharmacyOrganizationAffiliation1
InstanceOf: PlannetOrganizationAffiliation
Description: "Organization Affiliation for PharmacyOrganizationA"
Usage: #example
* id = "1"
* meta.profile = Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeOfCTSPreferredProviderNetwork)
* participatingOrganization = Reference (PharmacyOrganizationA)
* healthcareService = Reference(PharmacyAHealthCareService)
* location[0] = Reference(PharmacyLocation1)
* location[1] = Reference(PharmacyLocation2)

Instance: AcmeOfCTSPreferredProviderNetwork
InstanceOf: PlannetNetwork
Description: "Acme of CT Preferred Provider Network"
Usage: #example
* id = "1"
* meta.profile = Canonical(PlannetNetwork)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* partOf = Reference(PayerOrganizationA)
* type = #payer 

Instance: PharmacyLocation1
InstanceOf: PlannetLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 1"
* type = $V3RoleCode#OUTPHARM
Instance: PharmacyLocation2
InstanceOf: PlannetLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "CT Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation3
InstanceOf: PlannetLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 1"
* type = $V3RoleCode#OUTPHARM

Instance: PharmacyLocation4
InstanceOf: PlannetLocation
Description: "Location of Pharmacy1 in PharmacyOrganizationA's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "MA Location 2"
* type = $V3RoleCode#OUTPHARM

Instance: PayerOrganizationA
InstanceOf: PlannetOrganization
Description: "Payer Organization"
Usage: #example
* meta.profile = Canonical(PlannetOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "PayerA"
* type = $V3RoleCode#OUTPHARM
*/

---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/PharmacyExamples.fsh

Instance: PharmChain
InstanceOf: PlannetOrganization
Description: "Organization that Provides Pharmacy Services"
Usage: #example
* meta.profile = Canonical(PlannetOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharm Chain"
* type = OrgTypeCS#prvgrp "Provider Group"
* identifier[NPI].system = $NPICS
* identifier[NPI].value = "1407071236"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.pharmchain.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"

Instance: BigBox
InstanceOf: PlannetOrganization
Description: "Organization that Manages 2 of PharmChain's pharmacies"
Usage: #example
* meta.profile =  Canonical(PlannetOrganization) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "BigBox"
* type = OrgTypeCS#bus "Non-Healthcare Business"
* name = "Big Box Retailer"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.bixboxretailer.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Norwalk"
* address.state = "CT"
* address.postalCode = "00014-1234"


Instance: PharmChainRetailService
InstanceOf: PlannetHealthcareService
Description: "Pharmacy Service provided by PharmChain"
Usage: #example
* meta.profile =  Canonical(PlannetHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Pharmacy by PharmChain"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* category = HealthcareServiceCategoryCS#pharm   "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* location[1] = Reference(PharmLoc2)
* location[2] = Reference(PharmLoc3)
* location[3] = Reference(PharmLoc4)
* telecom.extension[via-intermediary].valueReference = Reference(PharmChain)


Instance: PharmChainAffil1
InstanceOf: PlannetOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Retail)"
Usage: #example
* meta.profile =  Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainRetailService)
* location[0] = Reference(PharmLoc1)
* location[1] = Reference(PharmLoc2)
* code = OrganizationAffiliationRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"

Instance: PharmChainAffil2
InstanceOf: PlannetOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (Compounding)"
Usage: #example
* meta.profile = Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainCompService)
* location[0] = Reference(PharmLoc1)
* code = OrganizationAffiliationRoleCS#pharmacy 

Instance: PharmChainAffil3
InstanceOf: PlannetOrganizationAffiliation
Description: "Organization Affiliation for PharmChain (MailOrder)"
Usage: #example
* meta.profile = Canonical(PlannetOrganizationAffiliation)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* network = Reference(AcmeofCTStdNet)
* participatingOrganization = Reference (PharmChain)
* healthcareService = Reference(PharmChainMailService)
* code = OrganizationAffiliationRoleCS#pharmacy 
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"


Instance: PharmChainCompService
InstanceOf: PlannetHealthcareService
Description: "Compound Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Compounding Pharmacy by OrgA"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* specialty.text = "Compounding Pharmacy"
* providedBy = Reference(PharmChain)
* location[0] = Reference(PharmLoc1)
* telecom.extension[via-intermediary].valueReference = Reference(PharmLoc1)

Instance: PharmChainMailService
InstanceOf: PlannetHealthcareService
Description: "Mail Order Pharmacy Service provided by PharmacyOrganization A"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* name = "Mail Order Pharmacy by OrgA"
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#virtual
* extension[deliverymethod].extension[virtualModalities][0].valueCodeableConcept = VirtualModalitiesCS#web
* extension[deliverymethod].extension[virtualModalities][1].valueCodeableConcept = VirtualModalitiesCS#app 
* extension[deliverymethod].extension[virtualModalities][2].valueCodeableConcept = VirtualModalitiesCS#tdd 
* extension[deliverymethod].extension[virtualModalities][3].valueCodeableConcept =  VirtualModalitiesCS#phone 
* category = HealthcareServiceCategoryCS#pharm "Pharmacy"
* specialty = $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"
* providedBy = Reference(PharmChain)
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://mailorderrx.com"
* telecom[1].rank = 1



Instance: PharmLoc1
InstanceOf: PlannetLocation
Description: "Location of Pharmacy1 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 1"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].daysOfWeek[1]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00



Instance: PharmLoc2
InstanceOf: PlannetLocation
Description: "Location of Pharmacy2 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 2"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* telecom[0].system = #phone
* telecom[0].value = "(777)-888-9999"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "444 Main Street"
* address.city = "Rainbow"
* address.state = "CT"
* address.postalCode = "00014-1334"
* position.longitude = 9.0
* position.latitude = 18.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].daysOfWeek[1]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00


Instance: PharmLoc3
InstanceOf: PlannetLocation
Description: "Location of Pharmacy3 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA MA Location 1"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* telecom[0].system = #phone
* telecom[0].value = "(444)-555-666"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Somewhere"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 7.0
* position.latitude = 12.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sun
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00


Instance: PharmLoc4
InstanceOf: PlannetLocation
Description: "Location of Pharmacy4 in PharmChain's network"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA MA Location 2"
* type = $V3RoleCode#OUTPHARM "outpatient pharmacy"
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(222)-333-4444"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][0].valueCode  = #sat
* telecom[0].extension[contactpoint-availabletime][1].extension[daysOfWeek][1].valueCode  = #sun 
* telecom[0].extension[contactpoint-availabletime][1].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][1].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.orga.com"
* telecom[1].rank = 1
* address.line[0] = "345 Main Street"
* address.city = "Nowheresville"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 5.0
* position.latitude = 16.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].allDay = true
* hoursOfOperation[1].daysOfWeek[0]  = #sat
* hoursOfOperation[1].openingTime = 08:00:00
* hoursOfOperation[1].closingTime = 17:00:00



---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/PlanNet.fsh



Profile:        PlannetEndpoint
Parent:         Endpoint
Id:             plannet-Endpoint 
Title:          "Plan-Net Endpoint"
Description:    "The technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging."
* meta.lastUpdated 1..1
* extension contains 
    EndpointUsecase named endpoint-usecase 0..* MS
* extension[endpoint-usecase] ^short = "Endpoint Usecase"
* status 1..1 MS
* status = #active (exactly) 
* connectionType MS 
* connectionType from EndpointConnectionTypeVS (extensible)
* connectionType ^binding.extension[0].url = $MinValueSet
* connectionType ^binding.extension[0].valueCanonical = $MinEndpointConnectionTypeVS  
* name MS
* managingOrganization only Reference(PlannetOrganization)
* managingOrganization MS
* contact MS
* contact.value MS
* contact.system MS
* payloadType 1..1 MS 
* payloadType from EndpointPayloadTypeVS (extensible)
* payloadMimeType MS
* address MS
/* Changes  on 9/17
# Endpoint 
*** Changed
status 1..1 MS
*** Deleted
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.type MS
* identifier.value MS
* identifier.period MS
* identifier.assigner MS
*  contact.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* contact.extension[via-intermediary] ^short = "Via Intermediary"
* period MS
* header MS
* contact.use MS
* contact.rank MS
* contact.period MS

# HealthCareService
*** Changed
   active 1..1 MS 
*** Deleted 9/17
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* extraDetails MS
* photo MS
* telecom.rank MS
* telecom.use MS
* telecom.period MS


# InsurancePlan 
*** Changed
  * obeys network-or-plan-Network 
*** Deleted 9/17
* identifier.period MS
* identifier.id MS
* identifier.use MS
* identifier.system MS
* contact.name.use MS
* contact.name.family MS
* contact.name.given MS
* contact.name.prefix MS
* contact.name.suffix MS
* contact.name.period MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
* contact.telecom.use MS
* contact.telecom.period MS

# Location 
*** Changed
  
*** Deleted 9/17
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* telecom.rank MS
* telecom.use MS
* telecom.period MS

*/

Profile:        PlannetHealthcareService
Parent:         HealthcareService
Id:             plannet-HealthcareService
Title:          "Plan-Net HealthcareService"
Description:    "The HealthCareService resource typically describes services offered by an organization/practitioner at a location. The resource may be used to encompass a variety of services covering the entire healthcare spectrum, including promotion, prevention, diagnostics, pharmacy, hospital and ambulatory care, home care, long-term care, and other health-related and community services."
* meta.lastUpdated 1..1
* extension contains
    NewPatients named newpatients 0..* MS and
    DeliveryMethod named deliverymethod 0..* MS 
* extension[newpatients] ^short = "New Patients"
* extension[deliverymethod] ^short = "Delivery Method"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true 
* providedBy only Reference(PlannetOrganization) 
* providedBy MS
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^slicing.ordered = false   // can be omitted, since false is the default
* category ^slicing.description = "Slice based on $this pattern"
* category 1..* MS
* category contains 
	plan-net-category 0..1 MS
* category[plan-net-category] from HealthcareServiceCategoryVS (required)
* type MS
* type from HealthcareServiceTypeVS (extensible)
* specialty MS
* specialty from SpecialtiesVS (required)
* location only Reference(PlannetLocation)
* location MS
* name MS
* comment MS
* telecom MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* coverageArea only Reference(PlannetLocation)
* coverageArea MS
// * serviceProvisionCode MS
// eligibility  MS
// program  
//* characteristic MS
//* referralMethod MS
* appointmentRequired MS
* availableTime MS
* availableTime.daysOfWeek MS
* availableTime.allDay MS
* availableTime.availableStartTime MS
* availableTime.availableEndTime MS
* notAvailable MS
* notAvailable.description MS
* notAvailable.during MS
* availabilityExceptions MS
* endpoint only Reference(PlannetEndpoint)
* endpoint MS



Profile:        PlannetInsurancePlan
Parent:         InsurancePlan
Id:             plannet-InsurancePlan
Title:          "Plan-Net InsurancePlan"
Description:    "An InsurancePlan is a discrete package of health insurance coverage benefits that are offered under a particular network type. A given payer’s products typically differ by network type and/or covered benefits. A plan pairs a product’s covered benefits with the particular cost sharing structure offered to a consumer. A given product may comprise multiple plans (i.e. each plan offers different cost sharing requirements for the same set of covered benefits).

InsurancePlan describes a health insurance offering comprised of a list of covered benefits (i.e. the product), costs associated with those benefits (i.e. the plan), and additional information about the offering, such as who it is owned and administered by, a coverage area, contact information, etc."
* obeys network-or-plan-Network 
* obeys plan-type-is-distinct
* meta.lastUpdated 1..1
* identifier.type MS
* identifier.value MS
* identifier.assigner MS
* status 1..1 MS
* status = #active  (exactly) 
* type 1..1 MS 
* type from InsuranceProductTypeVS (extensible)
* type ^short = "Product Type"
* name MS
* alias MS
* ownedBy 1..1 MS
* ownedBy only Reference(PlannetOrganization)
* administeredBy 1..1 MS
* administeredBy only Reference(PlannetOrganization)
* coverageArea only Reference(PlannetLocation)
* coverageArea MS
* contact MS
* contact.name MS
* contact.name.text MS
* contact.telecom MS
* contact.telecom.value MS
* contact.telecom.system MS
* endpoint only Reference(PlannetEndpoint)
* endpoint MS 
* network only Reference(PlannetNetwork)
* network  MS
* plan ^short = "Cost sharing details for the plan"
* plan.type from InsurancePlanTypeVS (extensible)
* plan.type MS 
* plan.type ^short = "Categorization of the cost sharing for the plan"
* plan.coverageArea only Reference(PlannetLocation)
* plan.coverageArea MS   
* plan.network only Reference(PlannetNetwork)
* period MS // Jira ticket FHIR-33206 - SMM


Profile:        PlannetLocation
Parent:         $USCoreLocation
Id:             plannet-Location
Title:          "Plan-Net Location"
Description:    "A Location is the physical place where healthcare services are provided, practitioners are employed, 
                 organizations are based, etc. Locations can range in scope from a room in a building to a geographic region/area."
* meta.lastUpdated 1..1
* extension contains
    NewPatients named newpatients 0..* MS and
    Accessibility named accessibility 0..* MS and
    $R4GeoJSONExtension named region 0..1 MS
* extension[newpatients] ^short = "New Patients"
* extension[accessibility] ^short = "Accessibility"
* extension[region] ^short = "Associated Region (GeoJSON)"
* identifier.type MS
* identifier.value MS
* status 1..1 MS
* status = $LocationStatus#active  (exactly) 
* alias MS
* description MS
* mode 0..0
* type MS
* telecom MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* position MS
* managingOrganization 0..1 MS
* managingOrganization only Reference(PlannetOrganization)
* partOf 0..1 MS
* partOf only Reference(PlannetLocation)
* hoursOfOperation MS
* hoursOfOperation.daysOfWeek MS
* hoursOfOperation.allDay MS
* hoursOfOperation.openingTime MS
* hoursOfOperation.closingTime MS
* availabilityExceptions MS
* endpoint MS
* endpoint only Reference(PlannetEndpoint)

/* Network -- deleted 
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* alias MS
* contact.name.use MS
* contact.name.text MS
* contact.name.family MS
* contact.name.given MS
* contact.name.prefix MS
* contact.name.suffix MS
* contact.name.period MS
* contact.telecom.use MS
* contact.telecom.period MS
* contact.telecom extensions -- not MS
*/

Profile:        PlannetNetwork
Parent:         $USCoreOrganization    //Organization 
Id:             plannet-Network
Title:          "Plan-Net Network"
Description:    "A Network refers to a healthcare provider insurance network. A healthcare provider insurance network is an aggregation of organizations and individuals that deliver a set of services across a geography through health insurance products/plans. A network is typically owned by a payer.

In the PlanNet IG, individuals and organizations are represented as participants in a PLan-Net Network through the practitionerRole and Plan-Net-organizationAffiliation resources, respectively."
* meta.lastUpdated 1..1
* extension contains
    LocationReference named location-reference 0..* MS
* extension[location-reference] ^short = "Network coverage area"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true (exactly)
* type from NetworkTypeVS (required)
* type 1..1 MS
* name MS
* telecom 0..0
* address 0..* MS
* partOf 1..1 MS
* partOf only Reference(PlannetOrganization)
* partOf ^short = "The organization that manages this network"
* contact MS
* contact.name MS
* contact.telecom MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..*  and
       ViaIntermediary named via-intermediary 0..* 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
* contact.telecom.value  MS
* contact.telecom.system  MS
* endpoint only Reference(PlannetEndpoint)
* endpoint MS 

/*  Organizaiton
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* alias MS
* address.use MS
* address.period MS
* telecom.use MS
* telecom.period MS
*/

Profile:        PlannetOrganization
Parent:         $USCoreOrganization
Id:             plannet-Organization
Title:          "Plan-Net Organization"
Description:    "An organization is a formal or informal grouping of people or organizations with a common purpose, such as a company, institution, corporation, community group, or healthcare practice.
Guidance:   When the contact is a department name, rather than a human (e.g., patient help line), include a blank family and given name, and provide the department name in contact.name.text"
* meta.lastUpdated 1..1
* extension contains
   Qualification named qualification 0..*  MS and
   OrgDescription named org-description  0..1 MS
* extension[qualification].extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[qualification] ^short = "Qualification"
* extension[org-description] ^short = "Organization Description"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true 
* name MS
* partOf MS  
* partOf only Reference(PlannetOrganization)
* address 1..* MS
* address.extension contains $GeolocationExtension named geolocation 0..1 MS
* address.type MS
* address.text MS
* address.line MS 
* address.city MS
* address.state MS
* address.postalCode MS
* address.country MS
* contact MS
* contact.telecom MS
* contact.telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* and
       ViaIntermediary named via-intermediary 0..* 
* contact.telecom.extension[via-intermediary] ^short = "Via Intermediary"
* contact.telecom.value MS
* contact.telecom.system MS
* contact.telecom.use MS
* telecom MS
* telecom.extension contains
       ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
       ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system MS
* telecom.value MS
* telecom.rank MS
* type 1..* MS
* type from OrgTypeVS (extensible)
* endpoint MS

/* OrgAffiliation 
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* period MS
* telecom.use MS
* telecom.period MS
*/

Profile:        PlannetOrganizationAffiliation
Parent:         OrganizationAffiliation
Id:             plannet-OrganizationAffiliation
Title:          "Plan-Net OrganizationAffiliation"
Description:    "The OrganizationAffiliation resource describes relationships between two or more organizations, including the services one organization provides another, the location(s) where they provide services, the availability of those services, electronic endpoints, and other relevant information."
* meta.lastUpdated 1..1
* obeys organization-or-participatingOrganization 
* extension contains
   Qualification named qualification 0..* 
* extension[qualification].extension[code].value[x] from SpecialtyAndDegreeLicenseCertificateVS (extensible)
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true 
* period MS //Jira ticket FHIR-33206 SMM
* organization MS 
* organization only Reference (PlannetOrganization)
* participatingOrganization MS 
* participatingOrganization only Reference (PlannetOrganization)
* network MS 
* network only Reference (PlannetNetwork)
* code MS
* code from OrganizationAffiliationRoleVS  (extensible)
* specialty MS
* specialty from SpecialtiesVS (required)
* location MS 
* location only Reference (PlannetLocation)
* healthcareService MS 
* healthcareService only Reference (PlannetHealthcareService)
* telecom MS
* telecom.system MS
* telecom.value MS
* telecom.rank MS
* endpoint MS
* endpoint only Reference (PlannetEndpoint)

/* Practitioner
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* name.use MS
* name.prefix MS
* name.suffix MS
* name.period MS
* gender MS
* photo MS

*/


Profile:        PlannetPractitioner
Parent:         $USCorePractitioner
Id:             plannet-Practitioner
Title:          "Plan-Net Practitioner"
Description:    "Practitioner is a person who is directly or indirectly involved in the provisioning of healthcare."
* meta.lastUpdated 1..1
* identifier.type MS
* identifier.value MS
* active 1..1  MS
* active = true 
* name MS
* name.text MS
* name.family MS
* name.given MS
* address.extension contains $GeolocationExtension named geolocation 0..1 MS 
* telecom MS 
* address MS 
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..*  and
    ViaIntermediary named via-intermediary 0..* 
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* qualification MS
* qualification.extension contains 
    PractitionerQualification named practitioner-qualification 0..1 MS
* qualification.identifier MS
* qualification.code 1..1 MS
* qualification.code from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* qualification.issuer MS
* qualification.period MS
* communication MS
* communication.extension contains
   CommunicationProficiency named communication-proficiency 0..1 MS

/* PractitionerRole
* identifier.id MS
* identifier.use MS
* identifier.system MS
* identifier.period MS
* identifier.assigner MS
* telecom.use MS
* telecom.period MS

*/

Profile:        PlannetPractitionerRole
Parent:         USCorePractitionerRoleProfile
Id:             plannet-PractitionerRole
Title:          "Plan-Net PractitionerRole"
Description:    "PractitionerRole typically describes details about a provider. When the provider is a practitioner, there may be a relationship to an organization. A provider renders services to patients at a location. Practitioner participation in healthcare provider insurance networks may be direct or through their role at an organization. PractitionerRole involves either the actual or potential (hence the optionality on Practitioner) of an individual to play this role on behalf of or under the auspices of an organization. The absence of a Practitioner resource does not imply that the Organization itself is playing the role of a Practitioner, instead it implies that that role has been established by the Organization and MAY apply that to a specific Practitioner."

* meta.lastUpdated 1..1
* obeys practitioner-or-organization-or-healthcareservice-or-location 
* extension contains
   NewPatients named newpatients 0..* MS and
   NetworkReference named network-reference 0..1 MS and
   Qualification named qualification  0..* MS
* extension[qualification].extension[code].value[x] from IndividualSpecialtyAndDegreeLicenseCertificateVS (extensible)
* extension[newpatients] ^short = "New Patients"
* extension[network-reference] ^short = "NetworkReference"
* extension[qualification] ^short = "Qualification"
* identifier.type MS
* identifier.value MS
* active 1..1 MS
* active = true 
* period MS 
* practitioner only Reference(PlannetPractitioner)   // 1..1 from USCore
* organization only Reference(PlannetOrganization)         // 1..1 from USCore
* practitioner 0..1  MS   // 1..1 from USCore
* organization 0..1   MS  // 1..1 from USCore
* code MS  
* code from PractitionerRoleVS
* specialty  MS
* specialty from IndividualAndGroupSpecialtiesVS (required)
* location only Reference(PlannetLocation)
* location MS
* healthcareService only Reference(PlannetHealthcareService)
* healthcareService MS 
* telecom MS
* telecom.extension contains
    ContactPointAvailableTime named contactpoint-availabletime 0..* MS and
    ViaIntermediary named via-intermediary 0..* MS
* telecom.extension[via-intermediary] ^short = "Via Intermediary"
* telecom.system 1..1 MS
* telecom.value 1..1 MS
* telecom.rank MS
* availableTime MS
* availableTime.daysOfWeek MS
* availableTime.allDay MS
* availableTime.availableStartTime MS
* availableTime.availableEndTime MS
* notAvailable MS
* notAvailable.description MS
* notAvailable.during MS
* endpoint only Reference(PlannetEndpoint) 
* endpoint 0..* MS


Invariant:  practitioner-or-organization-or-healthcareservice-or-location 
Description: "If PlannetPractitionerRole.practitioner is absent  ( PlannetPractitionerRole.organization, PlannetPractitionerRole.healthcareservice, PlannetPractitionerRole.location) must be present"
Expression: "practitioner.exists() or (organization.exists() or healthcareService.exists() or location.exists())"
Severity:   #error


Invariant:  organization-or-participatingOrganization 
Description: "PlannetOrganizationAffiliation.organization or  PlannetOrganizationAffiliation.participatingOrganization"
Expression: "organization.exists() or participatingOrganization.exists()"
Severity:   #error

// New 09/17
Invariant:  network-or-plan-Network 
Description: "If an insuranceplan does not define a network, then each plan must define one"
Expression: "network.exists() or plan.network.exists()"
Severity:   #error
//XPath:      "f:network or f:plan.network "

Invariant: plan-type-is-distinct
Description: "Each InsurancePlan.plan should have a distinct plan.type."
Expression: "plan.type.coding.code.isDistinct()"
Severity:   #error

---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/PractitionerExamples.fsh

Instance: JoeSmith
InstanceOf: PlannetPractitioner
Description: "Practitioner Dr Joe Smith"
Usage: #example
* meta.profile = Canonical(PlannetPractitioner)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "9941339100"
* identifier[NPI].system = $NPICS
* name.text = "Joe Smith, MD"
* name.family = "Smith"
* name.given[0] = "Joe"
* qualification[0].code = $V2table0360CS#MD
* qualification[0].issuer.display = "State of Illinois"
* qualification[0].code.text = "MD"
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[1].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 


Instance: HansSolo
InstanceOf: PlannetPractitioner
Description: "Solo Practitioner Hans Solo"
Usage: #example
* meta.profile = Canonical(PlannetPractitioner)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "9941339100"
* identifier[NPI].system = $NPICS
* name.text = "Hans Solo, MD"
* name.family = "Solo"
* name.given[0] = "Hans"
* qualification[0].code = $V2table0360CS#MD
* qualification[0].issuer.display = "State of Illinois"
* qualification[0].code.text = "MD"
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[1].code = $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* qualification[1].issuer.display = "American Board of Internal Medicine"
* qualification[1].code.text = "Board Certified Internal Medicine"
* qualification[1].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[1].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* qualification[2].code = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* qualification[2].issuer.display = "American Board of Internal Medicine"
* qualification[2].code.text = "Board Certified Cardiovascular Disease"
* qualification[2].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[2].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* communication = $BCP47#ja 
* communication.extension[communication-proficiency].valueCodeableConcept = LanguageProficiencyCS#30


Instance: HansSoloRole1
InstanceOf: PlannetPractitionerRole
Description: "Hans Solo is a solo practitioner"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph 
* practitioner = Reference(HansSolo)
* healthcareService = Reference(HansSoloService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HansSoloClinic)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* extension[qualification].extension[code].valueCodeableConcept = $NUCCProviderTaxonomy#207R00000X 
* extension[qualification].extension[issuer].valueReference.display = "American Board of Internal Medicine"
* extension[qualification].extension[status].valueCode = QualificationStatusCS#active 
// specialty = internal medicine
// available M-F
// * telecom[0].system = #url
// * telecom[0].value = "https://www.example.org"
* endpoint[0].extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* endpoint[0].extension.valueCode = #unknown
* endpoint[0].display = "Unknown"


Instance: HansSoloService
InstanceOf: PlannetHealthcareService
Description: "Hans Solo Services"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat 
* specialty = $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician"  
* location[0] = Reference(HansSoloClinic)

Instance: HansSoloClinic
InstanceOf: PlannetLocation
Description: "Location of Hans Solo's clinic"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "OrgA CT Location 1"
* type = $V3RoleCode#OUTPHARM
* managingOrganization = Reference(BigBox)
* extension[newpatients].extension[acceptingPatients].valueCodeableConcept = AcceptingPatientsCS#existptonly
* extension[newpatients].extension[fromNetwork].valueReference = Reference(AcmeofCTStdNet)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[availableStartTime].valueTime = 08:00:00
* telecom[0].extension[contactpoint-availabletime][0].extension[availableEndTime].valueTime = 17:00:00
* telecom[1].system = #url
* telecom[1].value = "https://www.hanssolo.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 
* hoursOfOperation[0].openingTime = 08:00:00
* hoursOfOperation[0].closingTime = 17:00:00


Instance: Counselor
InstanceOf: PlannetPractitioner
Description: "Counselor Susie Smith"
Usage: #example
* meta.profile = Canonical(PlannetPractitioner)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "9941339100"
* identifier[NPI].system = $NPICS
* name.text = "Susie Smith, LPC"
* name.family = "Smith"
* name.given[0] = "Susie"
* qualification[0].code = $NUCCProviderTaxonomy#101YP2500X "Professional Counselor"
* qualification[0].issuer.display = "State of Illinois"
* qualification[0].extension[practitioner-qualification].extension[status].valueCode = QualificationStatusCS#active 
* qualification[0].extension[practitioner-qualification].extension[whereValid].valueCodeableConcept = $USPSStateCS#IL 
* communication = $BCP47#ru 
* communication.extension[communication-proficiency].valueCodeableConcept = LanguageProficiencyCS#30

Instance: CounselorRole1
InstanceOf: PlannetPractitionerRole
Description: "Susie  Smith is a counselor via Telemedicine"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#co "Counselor"
* practitioner = Reference(Counselor)
* healthcareService = Reference(VirtualCounselService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty =  $NUCCProviderTaxonomy#101YP2500X  "Professional Counselor"
* telecom[0].system = #url
* telecom[0].value = "https://www.example.org"


Instance: VirtualCounselService
InstanceOf: PlannetHealthcareService
Description: "Virtual Counseling Service"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#virtual
* extension[deliverymethod].extension[virtualModalities][0].valueCodeableConcept = VirtualModalitiesCS#web
* extension[deliverymethod].extension[virtualModalities][1].valueCodeableConcept = VirtualModalitiesCS#app 
* extension[deliverymethod].extension[virtualModalities][2].valueCodeableConcept = VirtualModalitiesCS#tdd 
* extension[deliverymethod].extension[virtualModalities][3].valueCodeableConcept =  VirtualModalitiesCS#phone 
* category = HealthcareServiceCategoryCS#prov "Medical Provider"
* specialty =  $NUCCProviderTaxonomy#101YP2500X  "Professional Counselor"

Instance: JoeSmithRole1
InstanceOf: PlannetPractitionerRole
Description: "Dr Smith moonlighting as ER Doc at Hartford Hospital"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph 
* practitioner = Reference(JoeSmith)
* healthcareService = Reference(HospERService)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc1)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(Hospital)
// specialty = internal medicine
// available M-F
* telecom[0].system = #url
* telecom[0].value = "https://www.example.org"

Instance: JoeSmithRole2
InstanceOf: PlannetPractitionerRole
Description: "Dr Smith Internal Medicine at Burr Clinic"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph
// specialty = internal medicine
// Available:  Sat/Sun
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(BurrClinic)
* telecom[0].system = #url
* telecom[0].value = "https://www.example.org"

Instance: JoeSmithRole3
InstanceOf: PlannetPractitionerRole
Description: "Dr Smith Admitting Privileges at Hartford General"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ap 
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* specialty[1] = $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician"
* organization = Reference(Hospital)
* telecom[0].system = #url
* telecom[0].value = "https://www.example.org"

Instance: AnonRole
InstanceOf: PlannetPractitionerRole
Description: "Practitioner role that doesn't refer to a specific practitioner"
Usage: #example
* meta.profile = Canonical(PlannetPractitionerRole)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* code = ProviderRoleCS#ph
* healthcareService = Reference(BurrClinicServices)
* extension[network-reference].valueReference = Reference(AcmeofCTStdNet)
* location[0] = Reference(HospLoc2)
* specialty[0] =  $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician"
* organization = Reference(CancerClinic)
* telecom[0].system = #url
* telecom[0].value = "https://www.example.org"

Instance: CancerClinicService
InstanceOf: PlannetHealthcareService
Description: "Cancer Clinic Services"
Usage: #example
* meta.profile = Canonical(PlannetHealthcareService)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* extension[deliverymethod].extension[type].valueCodeableConcept = DeliveryMethodCS#physical
* category = HealthcareServiceCategoryCS#outpat
* providedBy = Reference(CancerClinic)
* specialty = $NUCCProviderTaxonomy#207RX0202X "Medical Oncology Physician"  
* location[0] = Reference(CancerClinicLoc)

Instance: CancerClinicLoc
InstanceOf: PlannetLocation
Description: "Location1 of Cancer Clinic"
Usage: #example
* meta.profile = Canonical(PlannetLocation) 
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* status = #active 
* name = "Cancer Clinic"
* type = $V3RoleCode#HOSP 
* managingOrganization = Reference(CancerClinic)
* extension[accessibility][1].valueCodeableConcept = AccessibilityCS#pubtrans
* extension[accessibility][0].valueCodeableConcept = AccessibilityCS#adacomp
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][0].valueCode = #mon 
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][1].valueCode  = #tue
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][2].valueCode  = #wed
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][3].valueCode  = #thu
* telecom[0].extension[contactpoint-availabletime][0].extension[daysOfWeek][4].valueCode  = #fri 
* telecom[0].extension[contactpoint-availabletime][0].extension[allDay].valueBoolean = true
* telecom[1].system = #url
* telecom[1].value = "https://www.hgh.com"
* telecom[1].rank = 1
* address.line[0] = "456 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* position.longitude = 3.0
* position.latitude = 15.0
* hoursOfOperation[0].daysOfWeek[0]  = #mon 
* hoursOfOperation[0].daysOfWeek[1] = #tue
* hoursOfOperation[0].daysOfWeek[2] = #wed
* hoursOfOperation[0].daysOfWeek[3] = #thu
* hoursOfOperation[0].daysOfWeek[4]  = #fri 

Instance: CancerClinic
InstanceOf: PlannetOrganization
Description: "HartfordCancerClinicLLC"
Usage: #example
* meta.profile = Canonical(PlannetOrganization)
* meta.lastUpdated = "2020-07-07T13:26:22.0314215+00:00"
* language = #en-US
* active = true
* identifier[NPI].value = "9941339100"
* identifier[NPI].system = $NPICS
* name = "Hamilton Clinic"
* telecom[0].system = #phone
* telecom[0].value = "(111)-222-3333"
* telecom[0].rank = 2
* telecom[1].system = #url
* telecom[1].value = "https://www.Hospital.com"
* telecom[1].rank = 1
* address.line[0] = "123 Main Street"
* address.city = "Anytown"
* address.state = "CT"
* address.postalCode = "00014-1234"
* contact.telecom[0].system = #phone
* contact.telecom[0].value = "(111)-222-3333"
* contact.telecom[0].rank = 1
* type = OrgTypeCS#fac "Facility"



---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/README.md

# pdex-plan-net-fsh
Davinci PDEX Plan-Net using FHIR Shorthand


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/fsh/ValueSets.fsh


ValueSet: AcceptingPatientsVS
Title: "Accepting Patients Codes VS"
Description: "Codes to identify if the practice is accepting new patients"
* ^experimental = false
* codes from system AcceptingPatientsCS

ValueSet: AccessibilityVS
Title: "Accessibility VS"
Description: "Codes for documenting general categories of accommodations available."
* ^experimental = false
* codes from system AccessibilityCS

ValueSet: DeliveryMethodVS
Title: "Delivery Methods VS"
Description: "Codes for documenting delivery methods."
* ^experimental = false
* codes from system DeliveryMethodCS

ValueSet: VirtualModalitiesVS
Title: "Virtual Modalities VS"
Description: "Codes for virtual service delivery modalities."
* ^experimental = false
* codes from system VirtualModalitiesCS


ValueSet: SpecialtiesVS
Title: "Specialties VS"
Description:  "Specialties value set based on National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
* codes from valueset IndividualAndGroupSpecialtiesVS
* codes from valueset NonIndividualSpecialtiesVS
* $NUCCProviderTaxonomy#202D00000X "Integrative Medicine Physician"
* $NUCCProviderTaxonomy#207VC0300X "Complex Family Planning Physician"

ValueSet: SpecialtyAndDegreeLicenseCertificateVS
Title: "Specialties, Degrees, Licenses, and Certificates VS"
Description:  "Specialties and Degree License and Certificates"
* ^experimental = false
* codes from valueset SpecialtiesVS 
* codes from system $V2table0360CS

ValueSet: IndividualSpecialtyAndDegreeLicenseCertificateVS
Title: "Individual Specialties, Degrees, Licenses, and Certificates VS"
Description: "Individual Specialties, Degrees, Licenses, and Certificates"
* ^experimental = false
* codes from valueset IndividualAndGroupSpecialtiesVS
* codes from system $V2table0360CS

ValueSet: NonIndividualSpecialtyAndDegreeLicenseCertificateVS
Title: "Non-Individual Specialties, Degrees, Licenses, and Certificates VS"
Description: "Non-Individual Specialties, Degrees, Licenses, and Certificates"
* ^experimental = false
* codes from valueset NonIndividualSpecialtiesVS
* codes from system $V2table0360CS

ValueSet: EndpointConnectionTypeVS
Title: "Endpoint Connection Types VS"
Description:  "Endpoint Connection Types"
* ^experimental = false
* codes from system $ConnectionTypeCS
* codes from system EndpointConnectionTypeCS 

ValueSet: MinEndpointConnectionTypeVS
Title: "Minimum Endpoint Connection Types VS"
Description:  "Minimum Endpoint Connection Types"
* ^experimental = false
* $ConnectionTypeCS#hl7-fhir-rest "HL7 FHIR"
* $ConnectionTypeCS#hl7-fhir-msg "HL7 FHIR Messaging"
* EndpointConnectionTypeCS#hl7-fhir-opn "HL7 FHIR Operation"
* $ConnectionTypeCS#direct-project	"Direct Project"
* EndpointConnectionTypeCS#rest-non-fhir "REST (not FHIR)"

ValueSet: EndpointUsecaseVS
Title: "Endpoint Usecases VS"
Description:  "Codes for documenting business use case by a general grouping by business area."
* ^experimental = false
* $V3ActReason#TREAT  "treatment"
* $V3ActReason#HPAYMT "healthcare payment"
* $V3ActReason#COC "coordination of care"
* $V3ActReason#COVERAGE "eligibility verification and determination"
* $V3ActReason#HOPERAT "healthcare operations"
* $V3ActReason#PUBHLTH "public health"
* $V3ActReason#HRESCH "healthcare research"
* $V3ActReason#ETREAT "emergency treatment"
* $V3ActReason#PATRQT "patient requested"   



ValueSet: EndpointPayloadTypeVS
Title: "Endpoint Payload Types VS"
Description:  "Endpoint Payload Types are constrained to NA (Not Applicable) as part of this IG"
* ^experimental = false
* EndpointPayloadTypeCS#NA  "Not Applicable"

ValueSet: NetworkTypeVS
Title: "Network Type VS"
Description:  "Single value describing networks."
* ^experimental = false
* OrgTypeCS#ntwk   // only Network profile uses this type 


ValueSet: OrgTypeVS
Title: "Organization Type VS"
Description:  "Categories of organizations based on criteria in provider directories."
* ^experimental = false
* codes from system OrgTypeCS
* exclude OrgTypeCS#ntwk   // only Network profile uses this type 

ValueSet: InsuranceProductTypeVS
Title: "Insurance Product Type VS"
Description: "A distinct package of health insurance coverage benefits that are offered using a particular product network type."
* ^experimental = false
* codes from system InsuranceProductTypeCS


ValueSet: InsurancePlanTypeVS
Title: "Insurance Plan TypeVS"
Description: "Categories of cost-sharing used by plans."
* ^experimental = false
* codes from system InsurancePlanTypeCS

ValueSet: HealthcareServiceCategoryVS
Title: "Healthcare Service CategoryVS"
Description: "Broad categories of healthcare services being performed or delivered."
* ^experimental = false
* codes from system HealthcareServiceCategoryCS
* exclude HealthcareServiceCategoryCS#other


ValueSet: QualificationStatusVS
Title: "Qualification Status VS"
Description: "The state indicating if a qualification is currently valid."
* ^experimental = false
* codes from system QualificationStatusCS


ValueSet: LanguageProficiencyVS
Title: "Language Proficiency VS"
Description: "Codes for documenting spoken language proficiency based on the Interagency Language Roundtable scale of abilities to communicate in a language."
* ^experimental = false
* codes from system LanguageProficiencyCS



ValueSet: PractitionerRoleVS
Title: "PractitionerRole Code VS"
Description: "Codes for the capabilities that an individual, group, or organization is acknowledged to have in a payer network, including general codes from the HL7 PractitionerRole Code System."
* ^experimental = false
* codes from system ProviderRoleCS
* codes from system $HL7PractitionerRoleCS



ValueSet: HealthcareServiceTypeVS
Description: "Valueset for HealthCareService type"
Title: "HealthcareService Types VS"
* ^experimental = false
* $ServiceTypeCS#1 "Adoption/Permanent Care Info/Support" 
* $ServiceTypeCS#3 "Aged Care Information/Referral" 
* $ServiceTypeCS#8 "Home Care/Housekeeping Assistance" 
* $ServiceTypeCS#9 "Home Maintenance and Repair" 
* $ServiceTypeCS#10 "Personal Alarms/Alerts" 
* $ServiceTypeCS#11 "Personal Care for Older Persons" 
* $ServiceTypeCS#21 "Hydrotherapy" 
* $ServiceTypeCS#26 "Meditation" 
* $ServiceTypeCS#31 "Relaxation Therapy" 
* $ServiceTypeCS#33 "Western Herbal Medicine" 
* $ServiceTypeCS#34 "Family Day care" 
* $ServiceTypeCS#36 "Kindergarten Inclusion Support" 
* $ServiceTypeCS#42 "Parenting/Family Support/Education" 
* $ServiceTypeCS#51 "Blood Donation" 
* $ServiceTypeCS#55 "Health Advocacy/Liaison Service" 
* $ServiceTypeCS#67 "Sexual Health" 
* $ServiceTypeCS#68 "Speech Pathology/Therapy" 
* $ServiceTypeCS#69 "Bereavement Counselling" 
* $ServiceTypeCS#70 "Crisis Counselling" 
* $ServiceTypeCS#71 "Family Counselling/Therapy" 
* $ServiceTypeCS#72 "Family Violence Counselling" 
* $ServiceTypeCS#75 "Genetic Counselling" 
* $ServiceTypeCS#76 "Health Counselling" 
* $ServiceTypeCS#78 "Problem Gambling Counselling" 
* $ServiceTypeCS#79 "Relationship Counselling" 
* $ServiceTypeCS#80 "Sexual Assault Counselling" 
* $ServiceTypeCS#81 "Trauma Counselling" 
* $ServiceTypeCS#82 "Victims of Crime Counselling" 
* $ServiceTypeCS#96 "Disability Advocacy" 
* $ServiceTypeCS#97 "Disability Aids & Equipment" 
* $ServiceTypeCS#99 "Disability Day Programs/Activities" 
* $ServiceTypeCS#102 "Disability Supported Accommodation" 
* $ServiceTypeCS#103 "Early Childhood Intervention" 
* $ServiceTypeCS#105 "Drug and/or Alcohol Counselling" 
* $ServiceTypeCS#106 "Drug/Alcohol Information/Referral" 
* $ServiceTypeCS#107 "Needle & Syringe Exchange" 
* $ServiceTypeCS#108 "Non-resid. Alcohol/Drug Treatment" 
* $ServiceTypeCS#111 "Residential Alcohol/Drug Treatment" 
* $ServiceTypeCS#118 "Employment Placement and/or Support" 
* $ServiceTypeCS#119 "Vocational Rehabilitation" 
* $ServiceTypeCS#126 "Crisis/Emergency Accommodation" 
* $ServiceTypeCS#127 "Homelessness Support" 
* $ServiceTypeCS#128 "Housing Information/Referral" 
* $ServiceTypeCS#130 "Interpreting/Multilingual Service" 
* $ServiceTypeCS#134 "Mental Health Advocacy" 
* $ServiceTypeCS#146 "Physical Activity Programs" 
* $ServiceTypeCS#147 "Physical Fitness Testing" 
* $ServiceTypeCS#224 "Support Groups" 
* $ServiceTypeCS#230 "Patient Transport" 
* $ServiceTypeCS#233 "Abuse" 
* $ServiceTypeCS#238 "Adult Day Programs" 
* $ServiceTypeCS#245 "Aids" 
* $ServiceTypeCS#275 "Cancer Support" 
* $ServiceTypeCS#284 "Child Care" 
* $ServiceTypeCS#296 "Companion Visiting" 
* $ServiceTypeCS#301 "Contraception Inform" 
* $ServiceTypeCS#308 "Crisis Assessment An" 
* $ServiceTypeCS#309 "Crisis Assistance" 
* $ServiceTypeCS#310 "Crisis Refuge" 
* $ServiceTypeCS#316 "Depression" 
* $ServiceTypeCS#317 "Detoxification" 
* $ServiceTypeCS#323 "Divorce" 
* $ServiceTypeCS#328 "Eating Disorder" 
* $ServiceTypeCS#331 "Employment And Train" 
* $ServiceTypeCS#344 "Food" 
* $ServiceTypeCS#345 "Food Vouchers" 
* $ServiceTypeCS#352 "Grief Counselling" 
* $ServiceTypeCS#366 "Household Items" 
* $ServiceTypeCS#400 "Pain" 
* $ServiceTypeCS#409 "Postnatal" 
* $ServiceTypeCS#411 "Pregnancy Tests" 
* $ServiceTypeCS#427 "Rent Assistance" 
* $ServiceTypeCS#429 "Residential Respite" 
* $ServiceTypeCS#440 "Sexual Issues" 
* $ServiceTypeCS#446 "Speech Therapist" 
* $ServiceTypeCS#459 "Tenancy Advice" 
* $ServiceTypeCS#468 "Vocational Guidance" 
* $ServiceTypeCS#470 "Welfare Assistance" 
* $ServiceTypeCS#488 "Diabetes Educator" 
* $ServiceTypeCS#494 "Youth Services" 
* $ServiceTypeCS#495 "Youth Health" 
* $ServiceTypeCS#501 "Cancer Services" 
* $ServiceTypeCS#513 "Cancer Support Groups" 
* $ServiceTypeCS#530 "Disability Care Transport" 
* $ServiceTypeCS#531 "Aged Care Transport" 
* $ServiceTypeCS#532 "Diabetes Education s" 
* $ServiceTypeCS#534 "Young Adult Diabetes" 
* $ServiceTypeCS#535 "Pulmonary Rehabilita" 
* $ServiceTypeCS#537 "Medication Reviews" 
* $ServiceTypeCS#539 "Telephone Help Line" 
* $ServiceTypeCS#546 "Veterans Services" 
* $ServiceTypeCS#548 "Food Relief/Food/Meals" 
* $ServiceTypeCS#552 "Drug and/or Alcohol Support Groups" 
* $ServiceTypeCS#554 "Chronic Disease Management" 
* $ServiceTypeCS#559 "Women's Health" 
* $ServiceTypeCS#560 "Men's Health" 
* $ServiceTypeCS#565 "Youth Drop In/Assistance/Support" 
* $ServiceTypeCS#569 "Migrant Health Clinic" 
* $ServiceTypeCS#570 "Refugee Health Clinic" 
* $ServiceTypeCS#571 "Aboriginal Health Clinic" 
* $ServiceTypeCS#614 "Development-Life Skills" 
* $ServiceTypeCS#628 "Vehicle modifications" 

ValueSet: OrganizationAffiliationRoleVS
Title: "OrganizationAffiliation Roles"
Description: "Value Set for Organization Affiliation Roles"
* ^experimental = false
* codes from system $HL7OrganizationRoleCS 
* exclude  $HL7OrganizationRoleCS#member  // replaced by OrganizationAffiliationRoleCS#memberof
* codes from system OrganizationAffiliationRoleCS

ValueSet: IndividualAndGroupSpecialtiesVS
Title: "Individual and Group Specialties"
Description:  "Individual and Group Specialties from National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
* $NUCCProviderTaxonomy#101200000X "Drama Therapist"  // added 4/21/21
* $NUCCProviderTaxonomy#101Y00000X "Counselor" 
* $NUCCProviderTaxonomy#101YA0400X "Addiction (Substance Use Disorder) Counselor" 
* $NUCCProviderTaxonomy#101YM0800X "Mental Health Counselor" 
* $NUCCProviderTaxonomy#101YP1600X "Pastoral Counselor" 
* $NUCCProviderTaxonomy#101YP2500X "Professional Counselor" 
* $NUCCProviderTaxonomy#101YS0200X "School Counselor" 
* $NUCCProviderTaxonomy#102L00000X "Psychoanalyst" 
* $NUCCProviderTaxonomy#102X00000X "Poetry Therapist" 
* $NUCCProviderTaxonomy#103G00000X "Clinical Neuropsychologist" 
* $NUCCProviderTaxonomy#103K00000X "Behavioral Analyst" 
* $NUCCProviderTaxonomy#103T00000X "Psychologist" 
* $NUCCProviderTaxonomy#103TA0400X "Addiction (Substance Use Disorder) Psychologist" 
* $NUCCProviderTaxonomy#103TA0700X "Adult Development & Aging Psychologist" 
* $NUCCProviderTaxonomy#103TB0200X "Cognitive & Behavioral Psychologist" 
* $NUCCProviderTaxonomy#103TC0700X "Clinical Psychologist" 
* $NUCCProviderTaxonomy#103TC1900X "Counseling Psychologist" 
* $NUCCProviderTaxonomy#103TC2200X "Clinical Child & Adolescent Psychologist" 
* $NUCCProviderTaxonomy#103TE1100X "Exercise & Sports Psychologist" 
* $NUCCProviderTaxonomy#103TF0000X "Family Psychologist" 
* $NUCCProviderTaxonomy#103TF0200X "Forensic Psychologist" 
* $NUCCProviderTaxonomy#103TH0004X "Health Psychologist" 
* $NUCCProviderTaxonomy#103TH0100X "Health Service Psychologist" 
* $NUCCProviderTaxonomy#103TM1800X "Intellectual & Developmental Disabilities Psychologist" 
* $NUCCProviderTaxonomy#103TP0016X "Prescribing (Medical) Psychologist" 
* $NUCCProviderTaxonomy#103TP0814X "Psychoanalysis Psychologist" 
* $NUCCProviderTaxonomy#103TP2701X "Group Psychotherapy Psychologist" 
* $NUCCProviderTaxonomy#103TR0400X "Rehabilitation Psychologist" 
* $NUCCProviderTaxonomy#103TS0200X "School Psychologist" 
* $NUCCProviderTaxonomy#104100000X "Social Worker" 
* $NUCCProviderTaxonomy#1041C0700X "Clinical Social Worker" 
* $NUCCProviderTaxonomy#1041S0200X "School Social Worker" 
* $NUCCProviderTaxonomy#106E00000X "Assistant Behavior Analyst" 
* $NUCCProviderTaxonomy#106H00000X "Marriage & Family Therapist" 
* $NUCCProviderTaxonomy#106S00000X "Behavior Technician" 
* $NUCCProviderTaxonomy#111N00000X "Chiropractor" 
* $NUCCProviderTaxonomy#111NI0013X "Independent Medical Examiner Chiropractor" 
* $NUCCProviderTaxonomy#111NI0900X "Internist Chiropractor" 
* $NUCCProviderTaxonomy#111NN0400X "Neurology Chiropractor" 
* $NUCCProviderTaxonomy#111NN1001X "Nutrition Chiropractor" 
* $NUCCProviderTaxonomy#111NP0017X "Pediatric Chiropractor" 
* $NUCCProviderTaxonomy#111NR0200X "Radiology Chiropractor" 
* $NUCCProviderTaxonomy#111NR0400X "Rehabilitation Chiropractor" 
* $NUCCProviderTaxonomy#111NS0005X "Sports Physician Chiropractor" 
* $NUCCProviderTaxonomy#111NT0100X "Thermography Chiropractor" 
* $NUCCProviderTaxonomy#111NX0100X "Occupational Health Chiropractor" 
* $NUCCProviderTaxonomy#111NX0800X "Orthopedic Chiropractor" 
* $NUCCProviderTaxonomy#122300000X "Dentist" 
* $NUCCProviderTaxonomy#1223D0001X "Public Health Dentist" 
* $NUCCProviderTaxonomy#1223D0004X "Dentist Anesthesiologist" 
* $NUCCProviderTaxonomy#1223E0200X "Endodontist" 
* $NUCCProviderTaxonomy#1223G0001X "General Practice Dentistry" 
* $NUCCProviderTaxonomy#1223P0106X "Oral and Maxillofacial Pathology Dentist" 
* $NUCCProviderTaxonomy#1223P0221X "Pediatric Dentist" 
* $NUCCProviderTaxonomy#1223P0300X "Periodontist" 
* $NUCCProviderTaxonomy#1223P0700X "Prosthodontist" 
* $NUCCProviderTaxonomy#1223S0112X "Oral and Maxillofacial Surgery (Dentist)" 
* $NUCCProviderTaxonomy#1223X0008X "Oral and Maxillofacial Radiology Dentist" 
* $NUCCProviderTaxonomy#1223X0400X "Orthodontics and Dentofacial Orthopedic Dentist" 
* $NUCCProviderTaxonomy#1223X2210X "Orofacial Pain Dentist" 
* $NUCCProviderTaxonomy#122400000X "Denturist" 
* $NUCCProviderTaxonomy#124Q00000X "Dental Hygienist" 
* $NUCCProviderTaxonomy#125J00000X "Dental Therapist" 
* $NUCCProviderTaxonomy#125K00000X "Advanced Practice Dental Therapist" 
* $NUCCProviderTaxonomy#125Q00000X "Oral Medicinist" 
* $NUCCProviderTaxonomy#126800000X "Dental Assistant" 
* $NUCCProviderTaxonomy#126900000X "Dental Laboratory Technician" 
* $NUCCProviderTaxonomy#132700000X "Dietary Manager" 
* $NUCCProviderTaxonomy#133N00000X "Nutritionist" 
* $NUCCProviderTaxonomy#133NN1002X "Nutrition Education Nutritionist" 
* $NUCCProviderTaxonomy#133V00000X "Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1004X "Pediatric Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1005X "Renal Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1006X "Metabolic Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1101X "Gerontological Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1201X "Obesity and Weight Management Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1301X "Oncology Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1401X "Pediatric Critical Care Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#133VN1501X "Sports Dietetics Nutrition Registered Dietitian" 
* $NUCCProviderTaxonomy#136A00000X "Registered Dietetic Technician" 
* $NUCCProviderTaxonomy#146D00000X "Personal Emergency Response Attendant" 
* $NUCCProviderTaxonomy#146L00000X "Paramedic" 
* $NUCCProviderTaxonomy#146M00000X "Intermediate Emergency Medical Technician" 
* $NUCCProviderTaxonomy#146N00000X "Basic Emergency Medical Technician" 
* $NUCCProviderTaxonomy#152W00000X "Optometrist" 
* $NUCCProviderTaxonomy#152WC0802X "Corneal and Contact Management Optometrist" 
* $NUCCProviderTaxonomy#152WL0500X "Low Vision Rehabilitation Optometrist" 
* $NUCCProviderTaxonomy#152WP0200X "Pediatric Optometrist" 
* $NUCCProviderTaxonomy#152WS0006X "Sports Vision Optometrist" 
* $NUCCProviderTaxonomy#152WV0400X "Vision Therapy Optometrist" 
* $NUCCProviderTaxonomy#152WX0102X "Occupational Vision Optometrist" 
* $NUCCProviderTaxonomy#156F00000X "Technician/Technologist" 
* $NUCCProviderTaxonomy#156FC0800X "Contact Lens Technician/Technologist" 
* $NUCCProviderTaxonomy#156FC0801X "Contact Lens Fitter" 
* $NUCCProviderTaxonomy#156FX1100X "Ophthalmic Technician/Technologist" 
* $NUCCProviderTaxonomy#156FX1101X "Ophthalmic Assistant" 
* $NUCCProviderTaxonomy#156FX1201X "Optometric Assistant Technician" 
* $NUCCProviderTaxonomy#156FX1202X "Optometric Technician" 
* $NUCCProviderTaxonomy#156FX1700X "Ocularist" 
* $NUCCProviderTaxonomy#156FX1800X "Optician" 
* $NUCCProviderTaxonomy#156FX1900X "Orthoptist" 
* $NUCCProviderTaxonomy#163W00000X "Registered Nurse" 
* $NUCCProviderTaxonomy#163WA0400X "Addiction (Substance Use Disorder) Registered Nurse" 
* $NUCCProviderTaxonomy#163WA2000X "Administrator Registered Nurse" 
* $NUCCProviderTaxonomy#163WC0200X "Critical Care Medicine Registered Nurse" 
* $NUCCProviderTaxonomy#163WC0400X "Case Management Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1400X "College Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1500X "Community Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WC1600X "Continuing Education/Staff Development Registered Nurse" 
* $NUCCProviderTaxonomy#163WC2100X "Continence Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WC3500X "Cardiac Rehabilitation Registered Nurse" 
* $NUCCProviderTaxonomy#163WD0400X "Diabetes Educator Registered Nurse" 
* $NUCCProviderTaxonomy#163WD1100X "Peritoneal Dialysis Registered Nurse" 
* $NUCCProviderTaxonomy#163WE0003X "Emergency Registered Nurse" 
* $NUCCProviderTaxonomy#163WE0900X "Enterostomal Therapy Registered Nurse" 
* $NUCCProviderTaxonomy#163WF0300X "Flight Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0000X "General Practice Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0100X "Gastroenterology Registered Nurse" 
* $NUCCProviderTaxonomy#163WG0600X "Gerontology Registered Nurse" 
* $NUCCProviderTaxonomy#163WH0200X "Home Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WH0500X "Hemodialysis Registered Nurse" 
* $NUCCProviderTaxonomy#163WH1000X "Hospice Registered Nurse" 
* $NUCCProviderTaxonomy#163WI0500X "Infusion Therapy Registered Nurse" 
* $NUCCProviderTaxonomy#163WI0600X "Infection Control Registered Nurse" 
* $NUCCProviderTaxonomy#163WL0100X "Lactation Consultant (Registered Nurse)" 
* $NUCCProviderTaxonomy#163WM0102X "Maternal Newborn Registered Nurse" 
* $NUCCProviderTaxonomy#163WM0705X "Medical-Surgical Registered Nurse" 
* $NUCCProviderTaxonomy#163WM1400X "Nurse Massage Therapist (NMT)" 
* $NUCCProviderTaxonomy#163WN0002X "Neonatal Intensive Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0003X "Low-Risk Neonatal Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0300X "Nephrology Registered Nurse" 
* $NUCCProviderTaxonomy#163WN0800X "Neuroscience Registered Nurse" 
* $NUCCProviderTaxonomy#163WN1003X "Nutrition Support Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0000X "Pain Management Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0200X "Pediatric Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0218X "Pediatric Oncology Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0807X "Child & Adolescent Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0808X "Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP0809X "Adult Psychiatric/Mental Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WP1700X "Perinatal Registered Nurse" 
* $NUCCProviderTaxonomy#163WP2201X "Ambulatory Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WR0006X "Registered Nurse First Assistant" 
* $NUCCProviderTaxonomy#163WR0400X "Rehabilitation Registered Nurse" 
* $NUCCProviderTaxonomy#163WR1000X "Reproductive Endocrinology/Infertility Registered Nurse" 
* $NUCCProviderTaxonomy#163WS0121X "Plastic Surgery Registered Nurse" 
* $NUCCProviderTaxonomy#163WS0200X "School Registered Nurse" 
* $NUCCProviderTaxonomy#163WU0100X "Urology Registered Nurse" 
* $NUCCProviderTaxonomy#163WW0000X "Wound Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WW0101X "Ambulatory Women's Health Care Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0002X "High-Risk Obstetric Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0003X "Inpatient Obstetric Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0106X "Occupational Health Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0200X "Oncology Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0601X "Otorhinolaryngology & Head-Neck Registered Nurse" 
* $NUCCProviderTaxonomy#163WX0800X "Orthopedic Registered Nurse" 
* $NUCCProviderTaxonomy#163WX1100X "Ophthalmic Registered Nurse" 
* $NUCCProviderTaxonomy#163WX1500X "Ostomy Care Registered Nurse" 
* $NUCCProviderTaxonomy#164W00000X "Licensed Practical Nurse" 
* $NUCCProviderTaxonomy#164X00000X "Licensed Vocational Nurse" 
* $NUCCProviderTaxonomy#167G00000X "Licensed Psychiatric Technician" 
* $NUCCProviderTaxonomy#170100000X "Ph.D. Medical Genetics" 
* $NUCCProviderTaxonomy#170300000X "Genetic Counselor (M.S.)" 
* $NUCCProviderTaxonomy#171000000X "Military Health Care Provider" 
* $NUCCProviderTaxonomy#1710I1002X "Independent Duty Corpsman" 
* $NUCCProviderTaxonomy#1710I1003X "Independent Duty Medical Technicians" 
* $NUCCProviderTaxonomy#171100000X "Acupuncturist" 
* $NUCCProviderTaxonomy#171400000X "Health & Wellness Coach"   //added 04/21/21
* $NUCCProviderTaxonomy#171M00000X "Case Manager/Care Coordinator" 
* $NUCCProviderTaxonomy#171R00000X "Interpreter" 
* $NUCCProviderTaxonomy#171W00000X "Contractor" 
* $NUCCProviderTaxonomy#171WH0202X "Home Modifications Contractor" 
* $NUCCProviderTaxonomy#171WV0202X "Vehicle Modifications Contractor" 
* $NUCCProviderTaxonomy#172A00000X "Driver" 
* $NUCCProviderTaxonomy#172M00000X "Mechanotherapist" 
* $NUCCProviderTaxonomy#172P00000X "Naprapath" 
* $NUCCProviderTaxonomy#172V00000X "Community Health Worker" 
* $NUCCProviderTaxonomy#173000000X "Legal Medicine" 
* $NUCCProviderTaxonomy#173C00000X "Reflexologist" 
* $NUCCProviderTaxonomy#173F00000X "Sleep Specialist (PhD)" 
* $NUCCProviderTaxonomy#174400000X "Specialist" 
* $NUCCProviderTaxonomy#1744G0900X "Graphics Designer" 
* $NUCCProviderTaxonomy#1744P3200X "Prosthetics Case Management" 
* $NUCCProviderTaxonomy#1744R1102X "Research Study Specialist" 
* $NUCCProviderTaxonomy#1744R1103X "Research Study Abstracter/Coder" 
* $NUCCProviderTaxonomy#174H00000X "Health Educator" 
* $NUCCProviderTaxonomy#174M00000X "Veterinarian" 
* $NUCCProviderTaxonomy#174MM1900X "Medical Research Veterinarian" 
* $NUCCProviderTaxonomy#174N00000X "Lactation Consultant (Non-RN)" 
* $NUCCProviderTaxonomy#174V00000X "Clinical Ethicist" 
* $NUCCProviderTaxonomy#175F00000X "Naturopath" 
* $NUCCProviderTaxonomy#175L00000X "Homeopath" 
* $NUCCProviderTaxonomy#175M00000X "Lay Midwife" 
* $NUCCProviderTaxonomy#175T00000X "Peer Specialist" 
* $NUCCProviderTaxonomy#176B00000X "Midwife" 
* $NUCCProviderTaxonomy#176P00000X "Funeral Director" 
* $NUCCProviderTaxonomy#183500000X "Pharmacist" 
* $NUCCProviderTaxonomy#1835C0205X "Critical Care Pharmacist" 
* $NUCCProviderTaxonomy#1835G0303X "Geriatric Pharmacist" 
* $NUCCProviderTaxonomy#1835N0905X "Nuclear Pharmacist" 
* $NUCCProviderTaxonomy#1835N1003X "Nutrition Support Pharmacist" 
* $NUCCProviderTaxonomy#1835P0018X "Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist" 
* $NUCCProviderTaxonomy#1835P0200X "Pediatric Pharmacist" 
* $NUCCProviderTaxonomy#1835P1200X "Pharmacotherapy Pharmacist" 
* $NUCCProviderTaxonomy#1835P1300X "Psychiatric Pharmacist" 
* $NUCCProviderTaxonomy#1835P2201X "Ambulatory Care Pharmacist" 
* $NUCCProviderTaxonomy#1835X0200X "Oncology Pharmacist" 
* $NUCCProviderTaxonomy#183700000X "Pharmacy Technician" 
* $NUCCProviderTaxonomy#193200000X "Multi-Specialty Group" 
* $NUCCProviderTaxonomy#202C00000X "Independent Medical Examiner Physician" 
* $NUCCProviderTaxonomy#202K00000X "Phlebology Physician" 
* $NUCCProviderTaxonomy#204C00000X "Sports Medicine (Neuromusculoskeletal Medicine) Physician" 
* $NUCCProviderTaxonomy#204D00000X "Neuromusculoskeletal Medicine & OMM Physician" 
* $NUCCProviderTaxonomy#204E00000X "Oral & Maxillofacial Surgery (D.M.D.) Physician" 
* $NUCCProviderTaxonomy#204F00000X "Transplant Surgery Physician" 
* $NUCCProviderTaxonomy#204R00000X "Electrodiagnostic Medicine Physician" 
* $NUCCProviderTaxonomy#207K00000X "Allergy & Immunology Physician" 
* $NUCCProviderTaxonomy#207KA0200X "Allergy Physician" 
* $NUCCProviderTaxonomy#207KI0005X "Clinical & Laboratory Immunology (Allergy & Immunology) Physician" 
* $NUCCProviderTaxonomy#207L00000X "Anesthesiology Physician" 
* $NUCCProviderTaxonomy#207LA0401X "Addiction Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LC0200X "Critical Care Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LH0002X "Hospice and Palliative Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LP2900X "Pain Medicine (Anesthesiology) Physician" 
* $NUCCProviderTaxonomy#207LP3000X "Pediatric Anesthesiology Physician" 
* $NUCCProviderTaxonomy#207N00000X "Dermatology Physician" 
* $NUCCProviderTaxonomy#207ND0101X "MOHS-Micrographic Surgery Physician" 
* $NUCCProviderTaxonomy#207ND0900X "Dermatopathology Physician" 
* $NUCCProviderTaxonomy#207NI0002X "Clinical & Laboratory Dermatological Immunology Physician" 
* $NUCCProviderTaxonomy#207NP0225X "Pediatric Dermatology Physician" 
* $NUCCProviderTaxonomy#207NS0135X "Procedural Dermatology Physician" 
* $NUCCProviderTaxonomy#207P00000X "Emergency Medicine Physician" 
* $NUCCProviderTaxonomy#207PE0004X "Emergency Medical Services (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PE0005X "Undersea and Hyperbaric Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PH0002X "Hospice and Palliative Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PP0204X "Pediatric Emergency Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PS0010X "Sports Medicine (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207PT0002X "Medical Toxicology (Emergency Medicine) Physician" 
* $NUCCProviderTaxonomy#207Q00000X "Family Medicine Physician" 
* $NUCCProviderTaxonomy#207QA0000X "Adolescent Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QA0401X "Addiction Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QA0505X "Adult Medicine Physician" 
* $NUCCProviderTaxonomy#207QB0002X "Obesity Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QG0300X "Geriatric Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QH0002X "Hospice and Palliative Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QS0010X "Sports Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207QS1201X "Sleep Medicine (Family Medicine) Physician" 
* $NUCCProviderTaxonomy#207R00000X "Internal Medicine Physician" 
* $NUCCProviderTaxonomy#207RA0000X "Adolescent Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RA0001X "Advanced Heart Failure and Transplant Cardiology Physician" 
* $NUCCProviderTaxonomy#207RA0002X "Adult Congenital Heart Disease Physician" 
* $NUCCProviderTaxonomy#207RA0201X "Allergy & Immunology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RA0401X "Addiction Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RB0002X "Obesity Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RC0000X "Cardiovascular Disease Physician" 
* $NUCCProviderTaxonomy#207RC0001X "Clinical Cardiac Electrophysiology Physician" 
* $NUCCProviderTaxonomy#207RC0200X "Critical Care Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RE0101X "Endocrinology, Diabetes & Metabolism Physician" 
* $NUCCProviderTaxonomy#207RG0100X "Gastroenterology Physician" 
* $NUCCProviderTaxonomy#207RG0300X "Geriatric Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0000X "Hematology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0002X "Hospice and Palliative Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RH0003X "Hematology & Oncology Physician" 
* $NUCCProviderTaxonomy#207RH0005X "Hypertension Specialist Physician" 
* $NUCCProviderTaxonomy#207RI0001X "Clinical & Laboratory Immunology (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RI0008X "Hepatology Physician" 
* $NUCCProviderTaxonomy#207RI0011X "Interventional Cardiology Physician" 
* $NUCCProviderTaxonomy#207RI0200X "Infectious Disease Physician" 
* $NUCCProviderTaxonomy#207RM1200X "Magnetic Resonance Imaging (MRI) Internal Medicine Physician" 
* $NUCCProviderTaxonomy#207RN0300X "Nephrology Physician" 
* $NUCCProviderTaxonomy#207RP1001X "Pulmonary Disease Physician" 
* $NUCCProviderTaxonomy#207RR0500X "Rheumatology Physician" 
* $NUCCProviderTaxonomy#207RS0010X "Sports Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RS0012X "Sleep Medicine (Internal Medicine) Physician" 
* $NUCCProviderTaxonomy#207RT0003X "Transplant Hepatology Physician" 
* $NUCCProviderTaxonomy#207RX0202X "Medical Oncology Physician" 
* $NUCCProviderTaxonomy#207SC0300X "Clinical Cytogenetics Physician" 
* $NUCCProviderTaxonomy#207SG0201X "Clinical Genetics (M.D.) Physician" 
* $NUCCProviderTaxonomy#207SG0202X "Clinical Biochemical Genetics Physician" 
* $NUCCProviderTaxonomy#207SG0203X "Clinical Molecular Genetics Physician" 
* $NUCCProviderTaxonomy#207SG0205X "Ph.D. Medical Genetics Physician" 
* $NUCCProviderTaxonomy#207SM0001X "Molecular Genetic Pathology (Medical Genetics) Physician" 
* $NUCCProviderTaxonomy#207T00000X "Neurological Surgery Physician" 
* $NUCCProviderTaxonomy#207U00000X "Nuclear Medicine Physician" 
* $NUCCProviderTaxonomy#207UN0901X "Nuclear Cardiology Physician" 
* $NUCCProviderTaxonomy#207UN0902X "Nuclear Imaging & Therapy Physician" 
* $NUCCProviderTaxonomy#207UN0903X "In Vivo & In Vitro Nuclear Medicine Physician" 
* $NUCCProviderTaxonomy#207V00000X "Obstetrics & Gynecology Physician" 
* $NUCCProviderTaxonomy#207VB0002X "Obesity Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VC0200X "Critical Care Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VE0102X "Reproductive Endocrinology Physician" 
* $NUCCProviderTaxonomy#207VF0040X "Female Pelvic Medicine and Reconstructive Surgery (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VG0400X "Gynecology Physician" 
* $NUCCProviderTaxonomy#207VH0002X "Hospice and Palliative Medicine (Obstetrics & Gynecology) Physician" 
* $NUCCProviderTaxonomy#207VM0101X "Maternal & Fetal Medicine Physician" 
* $NUCCProviderTaxonomy#207VX0000X "Obstetrics Physician" 
* $NUCCProviderTaxonomy#207VX0201X "Gynecologic Oncology Physician" 
* $NUCCProviderTaxonomy#207W00000X "Ophthalmology Physician" 
* $NUCCProviderTaxonomy#207WX0009X "Glaucoma Specialist (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0107X "Retina Specialist (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0108X "Uveitis and Ocular Inflammatory Disease (Ophthalmology) Physician" 
* $NUCCProviderTaxonomy#207WX0109X "Neuro-ophthalmology Physician" 
* $NUCCProviderTaxonomy#207WX0110X "Pediatric Ophthalmology and Strabismus Specialist Physician" 
* $NUCCProviderTaxonomy#207WX0120X "Cornea and External Diseases Specialist Physician" 
* $NUCCProviderTaxonomy#207WX0200X "Ophthalmic Plastic and Reconstructive Surgery Physician" 
* $NUCCProviderTaxonomy#207X00000X "Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XP3100X "Pediatric Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0106X "Orthopaedic Hand Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0114X "Adult Reconstructive Orthopaedic Surgery Physician" 
* $NUCCProviderTaxonomy#207XS0117X "Orthopaedic Surgery of the Spine Physician" 
* $NUCCProviderTaxonomy#207XX0004X "Orthopaedic Foot and Ankle Surgery Physician" 
* $NUCCProviderTaxonomy#207XX0005X "Sports Medicine (Orthopaedic Surgery) Physician" 
* $NUCCProviderTaxonomy#207XX0801X "Orthopaedic Trauma Physician" 
* $NUCCProviderTaxonomy#207Y00000X "Otolaryngology Physician" 
* $NUCCProviderTaxonomy#207YP0228X "Pediatric Otolaryngology Physician" 
* $NUCCProviderTaxonomy#207YS0012X "Sleep Medicine (Otolaryngology) Physician" 
* $NUCCProviderTaxonomy#207YS0123X "Facial Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#207YX0007X "Plastic Surgery within the Head & Neck (Otolaryngology) Physician" 
* $NUCCProviderTaxonomy#207YX0602X "Otolaryngic Allergy Physician" 
* $NUCCProviderTaxonomy#207YX0901X "Otology & Neurotology Physician" 
* $NUCCProviderTaxonomy#207YX0905X "Otolaryngology/Facial Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#207ZB0001X "Blood Banking & Transfusion Medicine Physician" 
* $NUCCProviderTaxonomy#207ZC0006X "Clinical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZC0008X "Clinical Informatics (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZC0500X "Cytopathology Physician" 
* $NUCCProviderTaxonomy#207ZD0900X "Dermatopathology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZF0201X "Forensic Pathology Physician" 
* $NUCCProviderTaxonomy#207ZH0000X "Hematology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZI0100X "Immunopathology Physician" 
* $NUCCProviderTaxonomy#207ZM0300X "Medical Microbiology Physician" 
* $NUCCProviderTaxonomy#207ZN0500X "Neuropathology Physician" 
* $NUCCProviderTaxonomy#207ZP0007X "Molecular Genetic Pathology (Pathology) Physician" 
* $NUCCProviderTaxonomy#207ZP0101X "Anatomic Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0102X "Anatomic Pathology & Clinical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0104X "Chemical Pathology Physician" 
* $NUCCProviderTaxonomy#207ZP0105X "Clinical Pathology/Laboratory Medicine Physician" 
* $NUCCProviderTaxonomy#207ZP0213X "Pediatric Pathology Physician" 
* $NUCCProviderTaxonomy#208000000X "Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080A0000X "Pediatric Adolescent Medicine Physician" 
* $NUCCProviderTaxonomy#2080B0002X "Pediatric Obesity Medicine Physician" 
* $NUCCProviderTaxonomy#2080C0008X "Child Abuse Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080H0002X "Pediatric Hospice and Palliative Medicine Physician" 
* $NUCCProviderTaxonomy#2080I0007X "Pediatric Clinical & Laboratory Immunology Physician" 
* $NUCCProviderTaxonomy#2080N0001X "Neonatal-Perinatal Medicine Physician" 
* $NUCCProviderTaxonomy#2080P0006X "Developmental – Behavioral Pediatrics Physician" 
* $NUCCProviderTaxonomy#2080P0008X "Pediatric Neurodevelopmental Disabilities Physician" 
* $NUCCProviderTaxonomy#2080P0201X "Pediatric Allergy/Immunology Physician" 
* $NUCCProviderTaxonomy#2080P0202X "Pediatric Cardiology Physician" 
* $NUCCProviderTaxonomy#2080P0203X "Pediatric Critical Care Medicine Physician" 
* $NUCCProviderTaxonomy#2080P0204X "Pediatric Emergency Medicine (Pediatrics) Physician" 
* $NUCCProviderTaxonomy#2080P0205X "Pediatric Endocrinology Physician" 
* $NUCCProviderTaxonomy#2080P0206X "Pediatric Gastroenterology Physician" 
* $NUCCProviderTaxonomy#2080P0207X "Pediatric Hematology & Oncology Physician" 
* $NUCCProviderTaxonomy#2080P0208X "Pediatric Infectious Diseases Physician" 
* $NUCCProviderTaxonomy#2080P0210X "Pediatric Nephrology Physician" 
* $NUCCProviderTaxonomy#2080P0214X "Pediatric Pulmonology Physician" 
* $NUCCProviderTaxonomy#2080P0216X "Pediatric Rheumatology Physician" 
* $NUCCProviderTaxonomy#2080S0010X "Pediatric Sports Medicine Physician" 
* $NUCCProviderTaxonomy#2080S0012X "Pediatric Sleep Medicine Physician" 
* $NUCCProviderTaxonomy#2080T0002X "Pediatric Medical Toxicology Physician" 
* $NUCCProviderTaxonomy#2080T0004X "Pediatric Transplant Hepatology Physician" 
* $NUCCProviderTaxonomy#208100000X "Physical Medicine & Rehabilitation Physician" 
* $NUCCProviderTaxonomy#2081H0002X "Hospice and Palliative Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081N0008X "Neuromuscular Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081P0004X "Spinal Cord Injury Medicine Physician" 
* $NUCCProviderTaxonomy#2081P0010X "Pediatric Rehabilitation Medicine Physician" 
* $NUCCProviderTaxonomy#2081P0301X "Brain Injury Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081P2900X "Pain Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#2081S0010X "Sports Medicine (Physical Medicine & Rehabilitation) Physician" 
* $NUCCProviderTaxonomy#208200000X "Plastic Surgery Physician" 
* $NUCCProviderTaxonomy#2082S0099X "Plastic Surgery Within the Head and Neck (Plastic Surgery) Physician" 
* $NUCCProviderTaxonomy#2082S0105X "Surgery of the Hand (Plastic Surgery) Physician" 
* $NUCCProviderTaxonomy#2083A0100X "Aerospace Medicine Physician" 
* $NUCCProviderTaxonomy#2083A0300X "Addiction Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083B0002X "Obesity Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083C0008X "Clinical Informatics Physician" 
* $NUCCProviderTaxonomy#2083P0011X "Undersea and Hyperbaric Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083P0500X "Preventive Medicine/Occupational Environmental Medicine Physician" 
* $NUCCProviderTaxonomy#2083P0901X "Public Health & General Preventive Medicine Physician" 
* $NUCCProviderTaxonomy#2083S0010X "Sports Medicine (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083T0002X "Medical Toxicology (Preventive Medicine) Physician" 
* $NUCCProviderTaxonomy#2083X0100X "Occupational Medicine Physician" 
* $NUCCProviderTaxonomy#2084A0401X "Addiction Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084A2900X "Neurocritical Care Physician" 
* $NUCCProviderTaxonomy#2084B0002X "Obesity Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084B0040X "Behavioral Neurology & Neuropsychiatry Physician" 
* $NUCCProviderTaxonomy#2084D0003X "Diagnostic Neuroimaging (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084F0202X "Forensic Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084H0002X "Hospice and Palliative Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084N0008X "Neuromuscular Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084N0400X "Neurology Physician" 
* $NUCCProviderTaxonomy#2084N0402X "Neurology with Special Qualifications in Child Neurology Physician" 
* $NUCCProviderTaxonomy#2084N0600X "Clinical Neurophysiology Physician" 
* $NUCCProviderTaxonomy#2084P0005X "Neurodevelopmental Disabilities Physician" 
* $NUCCProviderTaxonomy#2084P0015X "Psychosomatic Medicine Physician" 
* $NUCCProviderTaxonomy#2084P0301X "Brain Injury Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084P0800X "Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0802X "Addiction Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0804X "Child & Adolescent Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P0805X "Geriatric Psychiatry Physician" 
* $NUCCProviderTaxonomy#2084P2900X "Pain Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084S0010X "Sports Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084S0012X "Sleep Medicine (Psychiatry & Neurology) Physician" 
* $NUCCProviderTaxonomy#2084V0102X "Vascular Neurology Physician" 
* $NUCCProviderTaxonomy#2085B0100X "Body Imaging Physician" 
* $NUCCProviderTaxonomy#2085D0003X "Diagnostic Neuroimaging (Radiology) Physician" 
* $NUCCProviderTaxonomy#2085H0002X "Hospice and Palliative Medicine (Radiology) Physician" 
* $NUCCProviderTaxonomy#2085N0700X "Neuroradiology Physician" 
* $NUCCProviderTaxonomy#2085N0904X "Nuclear Radiology Physician" 
* $NUCCProviderTaxonomy#2085P0229X "Pediatric Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0001X "Radiation Oncology Physician" 
* $NUCCProviderTaxonomy#2085R0202X "Diagnostic Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0203X "Therapeutic Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0204X "Vascular & Interventional Radiology Physician" 
* $NUCCProviderTaxonomy#2085R0205X "Radiological Physics Physician" 
* $NUCCProviderTaxonomy#2085U0001X "Diagnostic Ultrasound Physician" 
* $NUCCProviderTaxonomy#208600000X "Surgery Physician" 
* $NUCCProviderTaxonomy#2086H0002X "Hospice and Palliative Medicine (Surgery) Physician" 
* $NUCCProviderTaxonomy#2086S0102X "Surgical Critical Care Physician" 
* $NUCCProviderTaxonomy#2086S0105X "Surgery of the Hand (Surgery) Physician" 
* $NUCCProviderTaxonomy#2086S0120X "Pediatric Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0122X "Plastic and Reconstructive Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0127X "Trauma Surgery Physician" 
* $NUCCProviderTaxonomy#2086S0129X "Vascular Surgery Physician" 
* $NUCCProviderTaxonomy#2086X0206X "Surgical Oncology Physician" 
* $NUCCProviderTaxonomy#208800000X "Urology Physician" 
* $NUCCProviderTaxonomy#2088F0040X "Female Pelvic Medicine and Reconstructive Surgery (Urology) Physician" 
* $NUCCProviderTaxonomy#2088P0231X "Pediatric Urology Physician" 
* $NUCCProviderTaxonomy#208C00000X "Colon & Rectal Surgery Physician" 
* $NUCCProviderTaxonomy#208D00000X "General Practice Physician" 
* $NUCCProviderTaxonomy#208G00000X "Thoracic Surgery (Cardiothoracic Vascular Surgery) Physician" 
* $NUCCProviderTaxonomy#208M00000X "Hospitalist Physician" 
* $NUCCProviderTaxonomy#208U00000X "Clinical Pharmacology Physician" 
* $NUCCProviderTaxonomy#208VP0000X "Pain Medicine Physician" 
* $NUCCProviderTaxonomy#208VP0014X "Interventional Pain Medicine Physician" 
* $NUCCProviderTaxonomy#209800000X "Legal Medicine (M.D./D.O.) Physician" 
* $NUCCProviderTaxonomy#211D00000X "Podiatric Assistant" 
* $NUCCProviderTaxonomy#213E00000X "Podiatrist" 
* $NUCCProviderTaxonomy#213EP0504X "Public Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213EP1101X "Primary Podiatric Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213ER0200X "Radiology Podiatrist" 
* $NUCCProviderTaxonomy#213ES0000X "Sports Medicine Podiatrist" 
* $NUCCProviderTaxonomy#213ES0103X "Foot & Ankle Surgery Podiatrist" 
* $NUCCProviderTaxonomy#213ES0131X "Foot Surgery Podiatrist" 
* $NUCCProviderTaxonomy#221700000X "Art Therapist" 
* $NUCCProviderTaxonomy#222Q00000X "Developmental Therapist" 
* $NUCCProviderTaxonomy#222Z00000X "Orthotist" 
* $NUCCProviderTaxonomy#224900000X "Mastectomy Fitter" 
* $NUCCProviderTaxonomy#224L00000X "Pedorthist" 
* $NUCCProviderTaxonomy#224P00000X "Prosthetist" 
* $NUCCProviderTaxonomy#224Y00000X "Clinical Exercise Physiologist" 
* $NUCCProviderTaxonomy#224Z00000X "Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZE0001X "Environmental Modification Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZF0002X "Feeding, Eating & Swallowing Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZL0004X "Low Vision Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#224ZR0403X "Driving and Community Mobility Occupational Therapy Assistant" 
* $NUCCProviderTaxonomy#225000000X "Orthotic Fitter" 
* $NUCCProviderTaxonomy#225100000X "Physical Therapist" 
* $NUCCProviderTaxonomy#2251C2600X "Cardiopulmonary Physical Therapist" 
* $NUCCProviderTaxonomy#2251E1200X "Ergonomics Physical Therapist" 
* $NUCCProviderTaxonomy#2251E1300X "Clinical Electrophysiology Physical Therapist" 
* $NUCCProviderTaxonomy#2251G0304X "Geriatric Physical Therapist" 
* $NUCCProviderTaxonomy#2251H1200X "Hand Physical Therapist" 
* $NUCCProviderTaxonomy#2251H1300X "Human Factors Physical Therapist" 
* $NUCCProviderTaxonomy#2251N0400X "Neurology Physical Therapist" 
* $NUCCProviderTaxonomy#2251P0200X "Pediatric Physical Therapist" 
* $NUCCProviderTaxonomy#2251S0007X "Sports Physical Therapist" 
* $NUCCProviderTaxonomy#2251X0800X "Orthopedic Physical Therapist" 
* $NUCCProviderTaxonomy#225200000X "Physical Therapy Assistant" 
* $NUCCProviderTaxonomy#225400000X "Rehabilitation Practitioner" 
* $NUCCProviderTaxonomy#225500000X "Respiratory/Developmental/Rehabilitative Specialist/Technologist" 
* $NUCCProviderTaxonomy#2255A2300X "Athletic Trainer" 
* $NUCCProviderTaxonomy#2255R0406X "Blind Rehabilitation Specialist/Technologist" 
* $NUCCProviderTaxonomy#225600000X "Dance Therapist" 
* $NUCCProviderTaxonomy#225700000X "Massage Therapist" 
* $NUCCProviderTaxonomy#225800000X "Recreation Therapist" 
* $NUCCProviderTaxonomy#225A00000X "Music Therapist" 
* $NUCCProviderTaxonomy#225B00000X "Pulmonary Function Technologist" 
* $NUCCProviderTaxonomy#225C00000X "Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CA2400X "Assistive Technology Practitioner Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CA2500X "Assistive Technology Supplier Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225CX0006X "Orientation and Mobility Training Rehabilitation Counselor" 
* $NUCCProviderTaxonomy#225X00000X "Occupational Therapist" 
* $NUCCProviderTaxonomy#225XE0001X "Environmental Modification Occupational Therapist" 
* $NUCCProviderTaxonomy#225XE1200X "Ergonomics Occupational Therapist" 
* $NUCCProviderTaxonomy#225XF0002X "Feeding, Eating & Swallowing Occupational Therapist" 
* $NUCCProviderTaxonomy#225XG0600X "Gerontology Occupational Therapist" 
* $NUCCProviderTaxonomy#225XH1200X "Hand Occupational Therapist" 
* $NUCCProviderTaxonomy#225XH1300X "Human Factors Occupational Therapist" 
* $NUCCProviderTaxonomy#225XL0004X "Low Vision Occupational Therapist" 
* $NUCCProviderTaxonomy#225XM0800X "Mental Health Occupational Therapist" 
* $NUCCProviderTaxonomy#225XN1300X "Neurorehabilitation Occupational Therapist" 
* $NUCCProviderTaxonomy#225XP0019X "Physical Rehabilitation Occupational Therapist" 
* $NUCCProviderTaxonomy#225XP0200X "Pediatric Occupational Therapist" 
* $NUCCProviderTaxonomy#225XR0403X "Driving and Community Mobility Occupational Therapist" 
* $NUCCProviderTaxonomy#226000000X "Recreational Therapist Assistant" 
* $NUCCProviderTaxonomy#226300000X "Kinesiotherapist" 
* $NUCCProviderTaxonomy#227800000X "Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278C0205X "Critical Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278E0002X "Emergency Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278E1000X "Educational Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278G0305X "Geriatric Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278G1100X "General Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278H0200X "Home Health Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1004X "Pulmonary Diagnostics Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1005X "Pulmonary Rehabilitation Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P1006X "Pulmonary Function Technologist Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P3800X "Palliative/Hospice Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P3900X "Neonatal/Pediatric Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278P4000X "Patient Transport Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#2278S1500X "SNF/Subacute Care Certified Respiratory Therapist" 
* $NUCCProviderTaxonomy#227900000X "Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279C0205X "Critical Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279E0002X "Emergency Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279E1000X "Educational Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279G0305X "Geriatric Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279G1100X "General Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279H0200X "Home Health Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1004X "Pulmonary Diagnostics Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1005X "Pulmonary Rehabilitation Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P1006X "Pulmonary Function Technologist Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P3800X "Palliative/Hospice Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P3900X "Neonatal/Pediatric Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279P4000X "Patient Transport Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#2279S1500X "SNF/Subacute Care Registered Respiratory Therapist" 
* $NUCCProviderTaxonomy#229N00000X "Anaplastologist" 
* $NUCCProviderTaxonomy#231H00000X "Audiologist" 
* $NUCCProviderTaxonomy#231HA2400X "Assistive Technology Practitioner Audiologist" 
* $NUCCProviderTaxonomy#231HA2500X "Assistive Technology Supplier Audiologist" 
* $NUCCProviderTaxonomy#235500000X "Speech/Language/Hearing Specialist/Technologist" 
* $NUCCProviderTaxonomy#2355A2700X "Audiology Assistant" 
* $NUCCProviderTaxonomy#2355S0801X "Speech-Language Assistant" 
* $NUCCProviderTaxonomy#235Z00000X "Speech-Language Pathologist" 
* $NUCCProviderTaxonomy#237600000X "Audiologist-Hearing Aid Fitter" 
* $NUCCProviderTaxonomy#237700000X "Hearing Instrument Specialist" 
* $NUCCProviderTaxonomy#242T00000X "Perfusionist" 
* $NUCCProviderTaxonomy#243U00000X "Radiology Practitioner Assistant" 
* $NUCCProviderTaxonomy#246Q00000X "Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QB0000X "Blood Banking Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QC1000X "Chemistry Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QC2700X "Cytotechnology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QH0000X "Hematology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QH0401X "Hemapheresis Practitioner" 
* $NUCCProviderTaxonomy#246QH0600X "Histology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QI0000X "Immunology Pathology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QL0900X "Laboratory Management Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QL0901X "Diplomate Laboratory Management Specialist/Technologist" 
* $NUCCProviderTaxonomy#246QM0706X "Medical Technologist" 
* $NUCCProviderTaxonomy#246QM0900X "Microbiology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246R00000X "Pathology Technician" 
* $NUCCProviderTaxonomy#246RH0600X "Histology Technician" 
* $NUCCProviderTaxonomy#246RM2200X "Medical Laboratory Technician" 
* $NUCCProviderTaxonomy#246RP1900X "Phlebotomy Technician" 
* $NUCCProviderTaxonomy#246W00000X "Cardiology Technician" 
* $NUCCProviderTaxonomy#246X00000X "Cardiovascular Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XC2901X "Cardiovascular Invasive Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XC2903X "Vascular Specialist/Technologist" 
* $NUCCProviderTaxonomy#246XS1301X "Sonography Specialist/Technologist" 
* $NUCCProviderTaxonomy#246Y00000X "Health Information Specialist/Technologist" 
* $NUCCProviderTaxonomy#246YC3301X "Hospital Based Coding Specialist" 
* $NUCCProviderTaxonomy#246YC3302X "Physician Office Based Coding Specialist" 
* $NUCCProviderTaxonomy#246YR1600X "Registered Record Administrator" 
* $NUCCProviderTaxonomy#246Z00000X "Other Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZA2600X "Medical Art Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZB0301X "Biomedical Engineer" 
* $NUCCProviderTaxonomy#246ZB0302X "Biomedical Photographer" 
* $NUCCProviderTaxonomy#246ZB0500X "Biochemist" 
* $NUCCProviderTaxonomy#246ZB0600X "Biostatiscian" 
* $NUCCProviderTaxonomy#246ZC0007X "Surgical Assistant" 
* $NUCCProviderTaxonomy#246ZE0500X "EEG Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZE0600X "Electroneurodiagnostic Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZG0701X "Graphics Methods Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZG1000X "Medical Geneticist (PhD) Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZI1000X "Medical Illustrator" 
* $NUCCProviderTaxonomy#246ZN0300X "Nephrology Specialist/Technologist" 
* $NUCCProviderTaxonomy#246ZS0410X "Surgical Technologist" 
* $NUCCProviderTaxonomy#246ZX2200X "Orthopedic Assistant" 
* $NUCCProviderTaxonomy#247000000X "Health Information Technician" 
* $NUCCProviderTaxonomy#2470A2800X "Assistant Health Information Record Technician" 
* $NUCCProviderTaxonomy#247100000X "Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471B0102X "Bone Densitometry Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C1101X "Cardiovascular-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C1106X "Cardiac-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C3401X "Computed Tomography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471C3402X "Radiography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471M1202X "Magnetic Resonance Imaging Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471M2300X "Mammography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471N0900X "Nuclear Medicine Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471Q0001X "Quality Management Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471R0002X "Radiation Therapy Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471S1302X "Sonography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471V0105X "Vascular Sonography Radiologic Technologist" 
* $NUCCProviderTaxonomy#2471V0106X "Vascular-Interventional Technology Radiologic Technologist" 
* $NUCCProviderTaxonomy#247200000X "Other Technician" 
* $NUCCProviderTaxonomy#2472B0301X "Biomedical Engineering Technician" 
* $NUCCProviderTaxonomy#2472D0500X "Darkroom Technician" 
* $NUCCProviderTaxonomy#2472E0500X "EEG Technician" 
* $NUCCProviderTaxonomy#2472R0900X "Renal Dialysis Technician" 
* $NUCCProviderTaxonomy#2472V0600X "Veterinary Technician" 
* $NUCCProviderTaxonomy#247ZC0005X "Clinical Laboratory Director (Non-physician)" 
* $NUCCProviderTaxonomy#363A00000X "Physician Assistant" 
* $NUCCProviderTaxonomy#363AM0700X "Medical Physician Assistant" 
* $NUCCProviderTaxonomy#363AS0400X "Surgical Physician Assistant" 
* $NUCCProviderTaxonomy#363L00000X "Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LA2100X "Acute Care Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LA2200X "Adult Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LC0200X "Critical Care Medicine Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LC1500X "Community Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LF0000X "Family Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LG0600X "Gerontology Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LN0000X "Neonatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LN0005X "Critical Care Neonatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0200X "Pediatric Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0222X "Critical Care Pediatric Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP0808X "Psychiatric/Mental Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP1700X "Perinatal Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LP2300X "Primary Care Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LS0200X "School Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LW0102X "Women's Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LX0001X "Obstetrics & Gynecology Nurse Practitioner" 
* $NUCCProviderTaxonomy#363LX0106X "Occupational Health Nurse Practitioner" 
* $NUCCProviderTaxonomy#364S00000X "Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SA2100X "Acute Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SA2200X "Adult Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC0200X "Critical Care Medicine Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC1501X "Community Health/Public Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SC2300X "Chronic Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SE0003X "Emergency Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SE1400X "Ethics Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SF0001X "Family Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SG0600X "Gerontology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SH0200X "Home Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SH1100X "Holistic Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SI0800X "Informatics Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SL0600X "Long-Term Care Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SM0705X "Medical-Surgical Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SN0000X "Neonatal Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SN0800X "Neuroscience Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0200X "Pediatric Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0807X "Child & Adolescent Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0808X "Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0809X "Adult Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0810X "Child & Family Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0811X "Chronically Ill Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0812X "Community Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP0813X "Geropsychiatric Psychiatric/Mental Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP1700X "Perinatal Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SP2800X "Perioperative Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SR0400X "Rehabilitation Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SS0200X "School Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364ST0500X "Transplantation Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SW0102X "Women's Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0106X "Occupational Health Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0200X "Oncology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#364SX0204X "Pediatric Oncology Clinical Nurse Specialist" 
* $NUCCProviderTaxonomy#367500000X "Certified Registered Nurse Anesthetist" 
* $NUCCProviderTaxonomy#367A00000X "Advanced Practice Midwife" 
* $NUCCProviderTaxonomy#367H00000X "Anesthesiologist Assistant" 
* $NUCCProviderTaxonomy#372500000X "Chore Provider" 
* $NUCCProviderTaxonomy#372600000X "Adult Companion" 
* $NUCCProviderTaxonomy#373H00000X "Day Training/Habilitation Specialist" 
* $NUCCProviderTaxonomy#374700000X "Technician" 
* $NUCCProviderTaxonomy#3747A0650X "Attendant Care Provider" 
* $NUCCProviderTaxonomy#3747P1801X "Personal Care Attendant" 
* $NUCCProviderTaxonomy#374J00000X "Doula" 
* $NUCCProviderTaxonomy#374K00000X "Religious Nonmedical Practitioner" 
* $NUCCProviderTaxonomy#374T00000X "Religious Nonmedical Nursing Personnel" 
* $NUCCProviderTaxonomy#374U00000X "Home Health Aide" 
* $NUCCProviderTaxonomy#376G00000X "Nursing Home Administrator" 
* $NUCCProviderTaxonomy#376J00000X "Homemaker" 
* $NUCCProviderTaxonomy#376K00000X "Nurse's Aide" 
* $NUCCProviderTaxonomy#405300000X "Prevention Professional" 

ValueSet: NonIndividualSpecialtiesVS
Title: "Non-Individual Specialties"
Description:  "Non-Individual Specialties from National Uniform Claim Committee (NUCC) Health Care Provider Taxonomy code set."
* ^experimental = false
* $NUCCProviderTaxonomy#251300000X "Local Education Agency (LEA)"
* $NUCCProviderTaxonomy#251B00000X "Case Management Agency"
* $NUCCProviderTaxonomy#251C00000X "Developmentally Disabled Services Day Training Agency"
* $NUCCProviderTaxonomy#251E00000X "Home Health Agency"
* $NUCCProviderTaxonomy#251F00000X "Home Infusion Agency"
* $NUCCProviderTaxonomy#251G00000X "Community Based Hospice Care Agency"
* $NUCCProviderTaxonomy#251J00000X "Nursing Care Agency"
* $NUCCProviderTaxonomy#251K00000X "Public Health or Welfare Agency"
* $NUCCProviderTaxonomy#251S00000X "Community/Behavioral Health Agency"
* $NUCCProviderTaxonomy#251T00000X "PACE Provider Organization"
* $NUCCProviderTaxonomy#251V00000X "Voluntary or Charitable Agency"
* $NUCCProviderTaxonomy#251X00000X "Supports Brokerage Agency"
* $NUCCProviderTaxonomy#252Y00000X "Early Intervention Provider Agency"
* $NUCCProviderTaxonomy#253J00000X "Foster Care Agency"
* $NUCCProviderTaxonomy#253Z00000X "In Home Supportive Care Agency"
* $NUCCProviderTaxonomy#261Q00000X "Clinic/Center"
* $NUCCProviderTaxonomy#261QA0005X "Ambulatory Family Planning Facility"
* $NUCCProviderTaxonomy#261QA0006X "Ambulatory Fertility Facility"
* $NUCCProviderTaxonomy#261QA0600X "Adult Day Care Clinic/Center"
* $NUCCProviderTaxonomy#261QA0900X "Amputee Clinic/Center"
* $NUCCProviderTaxonomy#261QA1903X "Ambulatory Surgical Clinic/Center"
* $NUCCProviderTaxonomy#261QA3000X "Augmentative Communication Clinic/Center"
* $NUCCProviderTaxonomy#261QB0400X "Birthing Clinic/Center"
* $NUCCProviderTaxonomy#261QC0050X "Critical Access Hospital Clinic/Center"
* $NUCCProviderTaxonomy#261QC1500X "Community Health Clinic/Center"
* $NUCCProviderTaxonomy#261QC1800X "Corporate Health Clinic/Center"
* $NUCCProviderTaxonomy#261QD0000X "Dental Clinic/Center"
* $NUCCProviderTaxonomy#261QD1600X "Developmental Disabilities Clinic/Center"
* $NUCCProviderTaxonomy#261QE0002X "Emergency Care Clinic/Center"
* $NUCCProviderTaxonomy#261QE0700X "End-Stage Renal Disease (ESRD) Treatment Clinic/Center"
* $NUCCProviderTaxonomy#261QE0800X "Endoscopy Clinic/Center"
* $NUCCProviderTaxonomy#261QF0050X "Non-Surgical Family Planning Clinic/Center"
* $NUCCProviderTaxonomy#261QF0400X "Federally Qualified Health Center (FQHC)"
* $NUCCProviderTaxonomy#261QG0250X "Genetics Clinic/Center"
* $NUCCProviderTaxonomy#261QH0100X "Health Service Clinic/Center"
* $NUCCProviderTaxonomy#261QH0700X "Hearing and Speech Clinic/Center"
* $NUCCProviderTaxonomy#261QI0500X "Infusion Therapy Clinic/Center"
* $NUCCProviderTaxonomy#261QL0400X "Lithotripsy Clinic/Center"
* $NUCCProviderTaxonomy#261QM0801X "Mental Health Clinic/Center (Including Community Mental Health Center)"
* $NUCCProviderTaxonomy#261QM0850X "Adult Mental Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM0855X "Adolescent and Children Mental Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM1000X "Migrant Health Clinic/Center"
* $NUCCProviderTaxonomy#261QM1100X "Military/U.S. Coast Guard Outpatient Clinic/Center"
* $NUCCProviderTaxonomy#261QM1101X "Military and U.S. Coast Guard Ambulatory Procedure Clinic/Center"
* $NUCCProviderTaxonomy#261QM1102X "Military Outpatient Operational (Transportable) Component Clinic/Center"
* $NUCCProviderTaxonomy#261QM1103X "Military Ambulatory Procedure Visits Operational (Transportable) Clinic/Center"
* $NUCCProviderTaxonomy#261QM1200X "Magnetic Resonance Imaging (MRI) Clinic/Center"
* $NUCCProviderTaxonomy#261QM1300X "Multi-Specialty Clinic/Center"
* $NUCCProviderTaxonomy#261QM2500X "Medical Specialty Clinic/Center"
* $NUCCProviderTaxonomy#261QM2800X "Methadone Clinic"
* $NUCCProviderTaxonomy#261QM3000X "Medically Fragile Infants and Children Day Care"
* $NUCCProviderTaxonomy#261QP0904X "Federal Public Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP0905X "State or Local Public Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP1100X "Podiatric Clinic/Center"
* $NUCCProviderTaxonomy#261QP2000X "Physical Therapy Clinic/Center"
* $NUCCProviderTaxonomy#261QP2300X "Primary Care Clinic/Center"
* $NUCCProviderTaxonomy#261QP2400X "Prison Health Clinic/Center"
* $NUCCProviderTaxonomy#261QP3300X "Pain Clinic/Center"
* $NUCCProviderTaxonomy#261QR0200X "Radiology Clinic/Center"
* $NUCCProviderTaxonomy#261QR0206X "Mammography Clinic/Center"
* $NUCCProviderTaxonomy#261QR0207X "Mobile Mammography Clinic/Center"
* $NUCCProviderTaxonomy#261QR0208X "Mobile Radiology Clinic/Center"
* $NUCCProviderTaxonomy#261QR0400X "Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0401X "Comprehensive Outpatient Rehabilitation Facility (CORF)"
* $NUCCProviderTaxonomy#261QR0404X "Cardiac Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0405X "Substance Use Disorder Rehabilitation Clinic/Center"
* $NUCCProviderTaxonomy#261QR0800X "Recovery Care Clinic/Center"
* $NUCCProviderTaxonomy#261QR1100X "Research Clinic/Center"
* $NUCCProviderTaxonomy#261QR1300X "Rural Health Clinic/Center"
* $NUCCProviderTaxonomy#261QS0112X "Oral and Maxillofacial Surgery Clinic/Center"
* $NUCCProviderTaxonomy#261QS0132X "Ophthalmologic Surgery Clinic/Center"
* $NUCCProviderTaxonomy#261QS1000X "Student Health Clinic/Center"
* $NUCCProviderTaxonomy#261QS1200X "Sleep Disorder Diagnostic Clinic/Center"
* $NUCCProviderTaxonomy#261QU0200X "Urgent Care Clinic/Center"
* $NUCCProviderTaxonomy#261QV0200X "VA Clinic/Center"
* $NUCCProviderTaxonomy#261QX0100X "Occupational Medicine Clinic/Center"
* $NUCCProviderTaxonomy#261QX0200X "Oncology Clinic/Center"
* $NUCCProviderTaxonomy#261QX0203X "Radiation Oncology Clinic/Center"
* $NUCCProviderTaxonomy#273100000X "Epilepsy Hospital Unit"
* $NUCCProviderTaxonomy#273R00000X "Psychiatric Hospital Unit"
* $NUCCProviderTaxonomy#273Y00000X "Rehabilitation Hospital Unit"
* $NUCCProviderTaxonomy#275N00000X "Medicare Defined Swing Bed Hospital Unit"
* $NUCCProviderTaxonomy#276400000X "Substance Use Disorder Rehabilitation Hospital Unit"
* $NUCCProviderTaxonomy#281P00000X "Chronic Disease Hospital"
* $NUCCProviderTaxonomy#281PC2000X "Children' s Chronic Disease Hospital"
* $NUCCProviderTaxonomy#282E00000X "Long Term Care Hospital"
* $NUCCProviderTaxonomy#282J00000X "Religious Nonmedical Health Care Institution"
* $NUCCProviderTaxonomy#282N00000X "General Acute Care Hospital"
* $NUCCProviderTaxonomy#282NC0060X "Critical Access Hospital"
* $NUCCProviderTaxonomy#282NC2000X "Children's Hospital"
* $NUCCProviderTaxonomy#282NR1301X "Rural Acute Care Hospital"
* $NUCCProviderTaxonomy#282NW0100X "Women's Hospital"
* $NUCCProviderTaxonomy#283Q00000X "Psychiatric Hospital"
* $NUCCProviderTaxonomy#283X00000X "Rehabilitation Hospital"
* $NUCCProviderTaxonomy#283XC2000X "Children's Rehabilitation Hospital"
* $NUCCProviderTaxonomy#284300000X "Special Hospital"
* $NUCCProviderTaxonomy#286500000X "Military Hospital"
* $NUCCProviderTaxonomy#2865M2000X "Military General Acute Care Hospital"
* $NUCCProviderTaxonomy#2865X1600X "Operational (Transportable) Military General Acute Care Hospital"
* $NUCCProviderTaxonomy#291900000X "Military Clinical Medical Laboratory"
* $NUCCProviderTaxonomy#291U00000X "Clinical Medical Laboratory"
* $NUCCProviderTaxonomy#292200000X "Dental Laboratory"
* $NUCCProviderTaxonomy#293D00000X "Physiological Laboratory"
* $NUCCProviderTaxonomy#302F00000X "Exclusive Provider Organization"
* $NUCCProviderTaxonomy#302R00000X "Health Maintenance Organization"
* $NUCCProviderTaxonomy#305R00000X "Preferred Provider Organization"
* $NUCCProviderTaxonomy#305S00000X "Point of Service"
* $NUCCProviderTaxonomy#310400000X "Assisted Living Facility"
* $NUCCProviderTaxonomy#3104A0625X "Assisted Living Facility (Mental Illness)"
* $NUCCProviderTaxonomy#3104A0630X "Assisted Living Facility (Behavioral Disturbances)"
* $NUCCProviderTaxonomy#310500000X "Mental Illness Intermediate Care Facility"
* $NUCCProviderTaxonomy#311500000X "Alzheimer Center (Dementia Center)"
* $NUCCProviderTaxonomy#311Z00000X "Custodial Care Facility"
* $NUCCProviderTaxonomy#311ZA0620X "Adult Care Home Facility"
* $NUCCProviderTaxonomy#313M00000X "Nursing Facility/Intermediate Care Facility"
* $NUCCProviderTaxonomy#314000000X "Skilled Nursing Facility"
* $NUCCProviderTaxonomy#3140N1450X "Pediatric Skilled Nursing Facility"
* $NUCCProviderTaxonomy#315D00000X "Inpatient Hospice"
* $NUCCProviderTaxonomy#315P00000X "Intellectual Disabilities Intermediate Care Facility"
* $NUCCProviderTaxonomy#174200000X "Meals Provider"
* $NUCCProviderTaxonomy#177F00000X "Lodging Provider"
* $NUCCProviderTaxonomy#320600000X "Intellectual and/or Developmental Disabilities Residential Treatment Facility"
* $NUCCProviderTaxonomy#320700000X "Physical Disabilities Residential Treatment Facility"
* $NUCCProviderTaxonomy#320800000X "Mental Illness Community Based Residential Treatment Facility"
* $NUCCProviderTaxonomy#320900000X "Intellectual and/or Developmental Disabilities Community Based Residential Treatment Facility"
* $NUCCProviderTaxonomy#322D00000X "Emotionally Disturbed Childrens' Residential Treatment Facility"
* $NUCCProviderTaxonomy#323P00000X "Psychiatric Residential Treatment Facility"
* $NUCCProviderTaxonomy#324500000X "Substance Abuse Rehabilitation Facility"
* $NUCCProviderTaxonomy#3245S0500X "Children's Substance Abuse Rehabilitation Facility"
* $NUCCProviderTaxonomy#385H00000X "Respite Care"
* $NUCCProviderTaxonomy#385HR2050X "Respite Care Camp"
* $NUCCProviderTaxonomy#385HR2055X "Child Mental Illness Respite Care"
* $NUCCProviderTaxonomy#385HR2060X "Child Intellectual and/or Developmental Disabilities Respite Care"
* $NUCCProviderTaxonomy#385HR2065X "Child Physical Disabilities Respite Care"
* $NUCCProviderTaxonomy#331L00000X "Blood Bank"
* $NUCCProviderTaxonomy#332000000X "Military/U.S. Coast Guard Pharmacy"
* $NUCCProviderTaxonomy#332100000X "Department of Veterans Affairs (VA) Pharmacy"
* $NUCCProviderTaxonomy#332800000X "Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy"
* $NUCCProviderTaxonomy#332900000X "Non-Pharmacy Dispensing Site"
* $NUCCProviderTaxonomy#332B00000X "Durable Medical Equipment & Medical Supplies"
* $NUCCProviderTaxonomy#332BC3200X "Customized Equipment (DME)"
* $NUCCProviderTaxonomy#332BD1200X "Dialysis Equipment & Supplies (DME)"
* $NUCCProviderTaxonomy#332BN1400X "Nursing Facility Supplies (DME)"
* $NUCCProviderTaxonomy#332BP3500X "Parenteral & Enteral Nutrition Supplies (DME)"
* $NUCCProviderTaxonomy#332BX2000X "Oxygen Equipment & Supplies (DME)"
* $NUCCProviderTaxonomy#332G00000X "Eye Bank"
* $NUCCProviderTaxonomy#332H00000X "Eyewear Supplier"
* $NUCCProviderTaxonomy#332S00000X "Hearing Aid Equipment"
* $NUCCProviderTaxonomy#332U00000X "Home Delivered Meals"
* $NUCCProviderTaxonomy#333300000X "Emergency Response System Companies"
* $NUCCProviderTaxonomy#333600000X "Pharmacy"
* $NUCCProviderTaxonomy#3336C0002X "Clinic Pharmacy"
* $NUCCProviderTaxonomy#3336C0003X "Community/Retail Pharmacy"
* $NUCCProviderTaxonomy#3336C0004X "Compounding Pharmacy"
* $NUCCProviderTaxonomy#3336H0001X "Home Infusion Therapy Pharmacy"
* $NUCCProviderTaxonomy#3336I0012X "Institutional Pharmacy"
* $NUCCProviderTaxonomy#3336L0003X "Long Term Care Pharmacy"
* $NUCCProviderTaxonomy#3336M0002X "Mail Order Pharmacy"
* $NUCCProviderTaxonomy#3336M0003X "Managed Care Organization Pharmacy"
* $NUCCProviderTaxonomy#3336N0007X "Nuclear Pharmacy"
* $NUCCProviderTaxonomy#3336S0011X "Specialty Pharmacy"
* $NUCCProviderTaxonomy#335E00000X "Prosthetic/Orthotic Supplier"
* $NUCCProviderTaxonomy#335G00000X "Medical Foods Supplier"
* $NUCCProviderTaxonomy#335U00000X "Organ Procurement Organization"
* $NUCCProviderTaxonomy#335V00000X "Portable X-ray and/or Other Portable Diagnostic Imaging Supplier"
* $NUCCProviderTaxonomy#341600000X "Ambulance"
* $NUCCProviderTaxonomy#3416A0800X "Air Ambulance"
* $NUCCProviderTaxonomy#3416L0300X "Land Ambulance"
* $NUCCProviderTaxonomy#3416S0300X "Water Ambulance"
* $NUCCProviderTaxonomy#341800000X "Military/U.S. Coast Guard Transport,"
* $NUCCProviderTaxonomy#3418M1110X "Military or U.S. Coast Guard Ground Transport Ambulance"
* $NUCCProviderTaxonomy#3418M1120X "Military or U.S. Coast Guard Air Transport Ambulance"
* $NUCCProviderTaxonomy#3418M1130X "Military or U.S. Coast Guard Water Transport Ambulance"
* $NUCCProviderTaxonomy#342000000X "Transportation Network Company"   // added effective 04/21/21
* $NUCCProviderTaxonomy#343800000X "Secured Medical Transport (VAN)"
* $NUCCProviderTaxonomy#343900000X "Non-emergency Medical Transport (VAN)"
* $NUCCProviderTaxonomy#344600000X "Taxi"
* $NUCCProviderTaxonomy#344800000X "Air Carrier"
* $NUCCProviderTaxonomy#347B00000X "Bus"
* $NUCCProviderTaxonomy#347C00000X "Private Vehicle"
* $NUCCProviderTaxonomy#347D00000X "Train"
* $NUCCProviderTaxonomy#347E00000X "Transportation Broker"


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/ChangeHistory.md


<h3>PDEX Payer Network Implementation Guide</h3>
<h4>Changes since v1.1.0</h4>
<ul>
<li>Upgraded US Core version to 6.1.0</li>
</ul>
<h4>Changes Since v1.0.0</h4>
<ul>
<li>Fixed names of 3 search parameter files based on improved IG publisher error checking:   healthcareservice-service-category, location-address-postalcode and location-address-state.  All of these were mismatched with the search parameter name, so the file couldn't be found.</li>
<li>Updated Taxonomy Codes (Jira tickets <a href='https://jira.hl7.org/browse/FHIR-33206?filter=14707'>FHIR 31494 </a> - <a href='https://jira.hl7.org/browse/FHIR-33206?filter=14707'>FHIR 31499 </a>)</li>
<li>Make HealthcareService Delivery Method optional (Jira ticket <a href='https://jira.hl7.org/browse/FHIR-34140?filter=14707'>FHIR 34140</a>)</li>
<li>Change Organization.type binding from OrganizationType to NetworkType (Jira ticket <a href='https://jira.hl7.org/browse/FHIR-28919?filter=14707'>FHIR 28919</a>)</li>
<li>Added 'catastrophic' options to Insurance Plan Types  (Jira ticket <a href='https://jira.hl7.org/browse/FHIR-33205filter=14707'>FHIR 33205</a>)</li>
<li>Ability to manage Provider Directory List for incoming/outgoing providers (Jira ticket <a href='https://jira.hl7.org/browse/FHIR-33206?filter=14707'>FHIR 33206</a>)</li>
<li>Update Resource Relationships Diagram (Jira ticket <a href='https://jira.hl7.org/browse/FHIR-34289?filter=14707'>FHIR 34289</a>)</li>
<li>Fix Spelling (Jira ticket <a href='https://jira.hl7.org/browse/FHIR-33140?filter=14707'>FHIR 33140</a>)</li>
<li>Transitioned IG to Sushi 1.0.0 directory structure</li>
</ul>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/downloads.md

### Downloads 
* The full [Implementation Guide](full-ig.zip)
* Resource Definitions [(JSON)](definitions.json.zip) [(XML)](definitions.xml.zip) [(TTL)](definitions.ttl.zip)
* Profile Examples [(JSON)](examples.json.zip) [(XML)](examples.xml.zip) [(TTL)](examples.ttl.zip)
* [Validator Pack](validator-hl7.fhir.us.davinci-pdex-plan-net.pack)
* The full [FHIR R4 core]({{site.data.fhir.path}}fhir-spec.zip) specifications and other [FHIR core downloads]({{site.data.fhir.path}}downloads.html)
* A [validator](https://fhir.github.io/latest-ig-validator/org.hl7.fhir.validator.jar) that can be used to check FHIR resource instance validity and [instructions on how to use it](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Endpoint-AcmeOfCTPortalEndpoint-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Endpoint"
</td></tr>
<tr><td>id</td><td>
"AcmeOfCTPortalEndpoint"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Endpoint"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#HOPERAT
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-ActReason"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/endpoint-usecase"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Endpoint for Acme of CT Portal"
</td></tr>
<tr><td>connectionType.code</td><td>
#rest-non-fhir
</td></tr>
<tr><td>connectionType.system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointConnectionTypeCS"
</td></tr>
<tr><td>payloadType[0].coding[0].code</td><td>
#NA
</td></tr>
<tr><td>payloadType[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS"
</td></tr>
<tr><td>address</td><td>
"https://urlofportal.acmect.com"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Endpoint-plannet-organization-1230085657-direct-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-organization-1230085657-direct"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Endpoint"</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/uv/vhdir/CodeSystem/usecase"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#treatment
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].display</td><td>
"treatment"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"standard"
</td></tr>
<tr><td>extension[0].extension[1].valueUri</td><td>
"http://wiki.directproject.org/File:2011-03-09_PDF_-_XDR_and_XDM_for_Direct_Messaging_Specification_FINAL.pdf"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/uv/vhdir/StructureDefinition/endpoint-usecase"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>connectionType.system</td><td>
"http://terminology.hl7.org/CodeSystem/endpoint-connection-type"
</td></tr>
<tr><td>connectionType.code</td><td>
#direct-project
</td></tr>
<tr><td>connectionType.display</td><td>
"Direct Project"
</td></tr>
<tr><td>name</td><td>
"BAYSIDE ENDOSCOPY, LLC Direct Address"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/plannet-organization-1230085657"
</td></tr>
<tr><td>managingOrganization.display</td><td>
"BAYSIDE ENDOSCOPY, LLC"
</td></tr>
<tr><td>contact[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].value</td><td>
(340) 719-8465
</td></tr>
<tr><td>payloadType[0].coding[0].system</td><td>
"urn:oid:1.3.6.1.4.1.19376.1.2.3"
</td></tr>
<tr><td>payloadType[0].coding[0].code</td><td>
#urn:ihe:pcc:xphr:2007
</td></tr>
<tr><td>payloadType[0].coding[0].display</td><td>
"HL7 CCD Document"
</td></tr>
<tr><td>payloadMimeType[0]</td><td>"application/hl7-v3+xml"</td></tr>
<tr><td>address</td><td>
"mailto:bayside-endoscopy-llc@direct.bayside-endoscopy-llc.org"
</td></tr>
<tr><td>resourceType</td><td>
"Endpoint"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-BurrClinicServices-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"BurrClinicServices"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#outpat
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207Q00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Family Medicine Physician"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/BurrClinic"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-CancerClinicHealthcareService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"CancerClinicHealthcareService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Outpatient
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/HartfordCancerClinicLLCOrganization"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207RX0202X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Medical Oncology Physician"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/CancerClinicLocation"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-CancerClinicService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"CancerClinicService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#outpat
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/CancerClinic"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207RX0202X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Medical Oncology Physician"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/CancerClinicLoc"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-CompoundingPharmacyHealthCareService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"CompoundingPharmacyHealthCareService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>telecom[0].extension[0].valueReference.reference</td><td>
"Location/PharmacyLocation1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name</td><td>
"Compounding Pharmacy by OrgA"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Pharmacy
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336C0003X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Compounding Pharmacy"
</td></tr>
<tr><td>specialty[0].text</td><td>
"Compounding Pharmacy"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/PharmacyOrganizationA"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmacyLocation1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HamiltonClinicServices-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HamiltonClinicServices"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#outpat
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207Q00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Family Medicine Physician"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/HamiltonClinic"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HansSoloHealthcareService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HansSoloHealthcareService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Outpatient
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207Q00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Family Medicine Physician"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HansSoloClinic"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HansSoloService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HansSoloService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#outpat
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207Q00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Family Medicine Physician"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HansSoloClinic"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HartfordGeneralHospitalEmergencyService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HartfordGeneralHospitalEmergencyService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Emergency
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207P00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Emergency Medicine Physician"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/HartfordGeneralHospital"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HartfordHospitalLocation1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HartfordOrthopedicServices-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HartfordOrthopedicServices"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#prov
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207X00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Orthopaedic Surgery Physician"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/HartfordOrthopedics"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc1"
</td></tr>
<tr><td>location[1].reference</td><td>
"Location/HospLoc2"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HealthCareServiceEmergency-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HealthCareServiceEmergency"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Emergency
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>providedBy.reference</td><td>
"OrganizationRockvilleHospital"
</td></tr>
<tr><td>location[0].reference</td><td>
"RockvilleHospitalLocation"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HealthCareServiceOutpatientClinic-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HealthCareServiceOutpatientClinic"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Outpatient
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336C0003X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://www.nucc.org/provider-taxonomy"
</td></tr>
<tr><td>providedBy.reference</td><td>
"OrganizationInternalMedicineLLC"
</td></tr>
<tr><td>location[0].reference</td><td>
"RockvilleClinicLocation"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-HospERService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"HospERService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#emerg
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207P00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Emergency Medicine Physician"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/Hospital"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-MailOrderPharmacyHealthCareService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"MailOrderPharmacyHealthCareService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#virtual
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#web
</td></tr>
<tr><td>extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[2].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[2].valueCodeableConcept.coding[0].code</td><td>
#app
</td></tr>
<tr><td>extension[0].extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[3].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[3].valueCodeableConcept.coding[0].code</td><td>
#tdd
</td></tr>
<tr><td>extension[0].extension[3].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[4].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[4].valueCodeableConcept.coding[0].code</td><td>
#phone
</td></tr>
<tr><td>extension[0].extension[4].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name</td><td>
"Mail Order Pharmacy by OrgA"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Pharmacy
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336M0002X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Mail Order Pharmacy"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/PharmacyOrganizationA"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://mailorderrx.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-pharmacy-healthcareservice-6e4c8dc8f8cdb107f6ae996b7-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"pharmacy-healthcareservice-6e4c8dc8f8cdb107f6ae996b7"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#yes
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].display</td><td>
"Physical"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/plannet-organization-6e4c8dc8f8cdb107f6ae996b7"
</td></tr>
<tr><td>providedBy.display</td><td>
"DELLA PIETRA"
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Pharmacy
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>category[0].text</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#333600000X
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].text</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[1].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[1].coding[0].code</td><td>
#3336C0002X
</td></tr>
<tr><td>specialty[1].coding[0].display</td><td>
"Clinic Pharmacy"
</td></tr>
<tr><td>specialty[1].text</td><td>
"Clinic Pharmacy"
</td></tr>
<tr><td>specialty[2].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[2].coding[0].code</td><td>
#3336C0003X
</td></tr>
<tr><td>specialty[2].coding[0].display</td><td>
"Community/Retail Pharmacy"
</td></tr>
<tr><td>specialty[2].text</td><td>
"Community/Retail Pharmacy"
</td></tr>
<tr><td>specialty[3].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[3].coding[0].code</td><td>
#3336M0003X
</td></tr>
<tr><td>specialty[3].coding[0].display</td><td>
"Managed Care Organization Pharmacy"
</td></tr>
<tr><td>specialty[3].text</td><td>
"Managed Care Organization Pharmacy"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/plannet-location-PCY-0006690"
</td></tr>
<tr><td>location[0].display</td><td>
"DELLA PIETRA PHARMACY"
</td></tr>
<tr><td>name</td><td>
"DELLA PIETRA"
</td></tr>
<tr><td>comment</td><td>
"Pharmacy; Clinic Pharmacy; Community/Retail Pharmacy; Managed Care Organization Pharmacy"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
581-994-9407 x69253
</td></tr>
<tr><td>telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>telecom[1].system</td><td>
"fax"
</td></tr>
<tr><td>telecom[1].value</td><td>
1-139-630-9394 x2588
</td></tr>
<tr><td>telecom[1].use</td><td>
"work"
</td></tr>
<tr><td>appointmentRequired</td><td>
"true"
</td></tr>
<tr><td>availableTime[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>availableTime[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>availableTime[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>availableTime[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>availableTime[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>availableTime[0].allDay</td><td>
"false"
</td></tr>
<tr><td>availableTime[0].availableStartTime</td><td>
"08:00:00"
</td></tr>
<tr><td>availableTime[0].availableEndTime</td><td>
"18:00:00"
</td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-PharmacyAHealthCareService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"PharmacyAHealthCareService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>extension[1].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existing
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[1].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[1].extension[1].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>telecom[0].extension[0].valueReference.reference</td><td>
"Organization/PharmacyOrganizationA"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name</td><td>
"Pharmacy by PharmOrgA"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#Pharmacy
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336C0003X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Retail Pharmacy"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/PharmacyOrganizationA"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmacyLocation1"
</td></tr>
<tr><td>location[1].reference</td><td>
"Location/PharmacyLocation2"
</td></tr>
<tr><td>location[2].reference</td><td>
"Location/PharmacyLocation3"
</td></tr>
<tr><td>location[3].reference</td><td>
"Location/PharmacyLocation4"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-PharmChainCompService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"PharmChainCompService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>telecom[0].extension[0].valueReference.reference</td><td>
"Location/PharmLoc1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Compounding Pharmacy by OrgA"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#pharm
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336C0004X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Compounding Pharmacy"
</td></tr>
<tr><td>specialty[0].text</td><td>
"Compounding Pharmacy"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/PharmChain"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmLoc1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-PharmChainMailService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"PharmChainMailService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#virtual
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#web
</td></tr>
<tr><td>extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[2].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[2].valueCodeableConcept.coding[0].code</td><td>
#app
</td></tr>
<tr><td>extension[0].extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[3].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[3].valueCodeableConcept.coding[0].code</td><td>
#tdd
</td></tr>
<tr><td>extension[0].extension[3].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[4].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[4].valueCodeableConcept.coding[0].code</td><td>
#phone
</td></tr>
<tr><td>extension[0].extension[4].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Mail Order Pharmacy by OrgA"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#pharm
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336M0002X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Mail Order Pharmacy"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/PharmChain"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://mailorderrx.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-PharmChainRetailService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"PharmChainRetailService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#physical
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>extension[1].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existptonly
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[1].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[1].extension[1].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>telecom[0].extension[0].valueReference.reference</td><td>
"Organization/PharmChain"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Pharmacy by PharmChain"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#pharm
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336C0003X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Community/Retail Pharmacy"
</td></tr>
<tr><td>providedBy.reference</td><td>
"Organization/PharmChain"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmLoc1"
</td></tr>
<tr><td>location[1].reference</td><td>
"Location/PharmLoc2"
</td></tr>
<tr><td>location[2].reference</td><td>
"Location/PharmLoc3"
</td></tr>
<tr><td>location[3].reference</td><td>
"Location/PharmLoc4"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/HealthcareService-VirtualCounselService-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"HealthcareService"
</td></tr>
<tr><td>id</td><td>
"VirtualCounselService"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-HealthcareService"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/delivery-method"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"type"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#virtual
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/DeliveryMethodCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#web
</td></tr>
<tr><td>extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[2].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[2].valueCodeableConcept.coding[0].code</td><td>
#app
</td></tr>
<tr><td>extension[0].extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[3].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[3].valueCodeableConcept.coding[0].code</td><td>
#tdd
</td></tr>
<tr><td>extension[0].extension[3].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>extension[0].extension[4].url</td><td>
"virtualModalities"
</td></tr>
<tr><td>extension[0].extension[4].valueCodeableConcept.coding[0].code</td><td>
#phone
</td></tr>
<tr><td>extension[0].extension[4].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/VirtualModalitiesCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>category[0].coding[0].code</td><td>
#prov
</td></tr>
<tr><td>category[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/HealthcareServiceCategoryCS"
</td></tr>
<tr><td>category[0].coding[0].display</td><td>
"Medical Provider"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#101YP2500X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Professional Counselor"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/implementation.md

<h3><a name="Implementation"></a>Implementation Notes</h3>
<p>This page contains miscellaneous information on FHIR implementation. The content is primarily directed at implementers of Plan-Net.</p>
<h4><a id="conformance-requirements"></a>Conformance Requirements</h4>
<p>The conformance verbs (<strong>SHALL</strong>, <strong>SHALL NOT,&nbsp;</strong><strong>SHOULD</strong>, <strong>MAY</strong>) used in this guide are defined in <a href="http://hl7.org/fhir/R4/conformance-rules.html">FHIR Conformance Rules</a>.</p>
<h4><a id="privacy-considerations"></a>Privacy Considerations</h4>
<p>Access to the Plan-Net service should not require authentication, and the server should not maintain any records that could associate the consumer with the entities that were queried.</p>
<p>A conformant Plan-Net service <strong>SHALL NOT</strong> require a directory mobile application to send consumer identifying information in order to query content.</p>
<p>A directory mobile application <strong>SHALL NOT</strong> send consumer identifiable information when querying a Plan-Net service.</p>
<h4><a id="must-support"></a>Must Support</h4>
<p>When querying and reading the Plan-Net Profiles defined in this IG, Must Support on any profile data element <strong>SHALL</strong> be interpreted as follows:</p>
<h5>Health Plan API Requirements</h5>
<ul>
<li>Health Plan API actors <strong>SHALL</strong> be capable of populating all Must Support data elements as part of the query results.</li>
<li>In situations where information on a particular Must Support data element is not present and the minimum cardinality is 0 , the Health Plan API actors <strong>SHALL NOT</strong> include the data elements in the resource instance returned as part of the query results.</li>
<li>In situations where information on a particular data element is not present and the minimum cardinality is &gt;0 <strong>SHALL</strong>&nbsp;send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or use the dataAbsentReason extension.</li>
</ul>
<h5>Application Requirements</h5>
<ul>
<li>Application actors&nbsp;<strong>SHALL</strong> be capable of processing resource instances containing the Must Support data elements without generating an error or causing the application to fail.</li>
<li>Application actors <strong>SHOULD</strong> be capable of displaying the data elements for human use or storing the information for other purposes.</li>
<li>When querying Health Plan API actors, Application actors <strong>SHALL</strong>&nbsp;interpret missing Must Support data elements within resource instances as data not present in the Health Plan API actors system.</li>
<li>Consumer App actors&nbsp;<strong>SHALL</strong>&nbsp;be able to process resource instances containing Must Support data elements asserting missing information.</li>
</ul>
<h4><a id="relationship-to-us-core"></a>Client Detection of Updates Directory Content</h4>
<p>Each profile in this guide requires that the lastUpdate timestamp be provided as part of the profile's data content.&nbsp; Clients that cache query results can track additions or modifications to directory content through queries that filter content using the _lastUpdated search parameter.&nbsp; Clients should periodically check that data cached from past queries has not been deleted by querying for the same elements by _id.</p>
<h4><a id="general-security-considerations"></a>General Security Considerations</h4>
<p><strong>NO CONTENT</strong></p>
<h3><a name="Representing"></a>Representing and Searching Provider Directory Data</h3>
<p>It is important for payers to use the Plan-Net profiles consistently in order to achieve true interoperability of directory information among payers. The intent of this section is to provide examples of the canonical use of the profiles provided in this IG that will guide implementers towards the consistent use of these profiles that will enable 3rd party applications to search the data.&nbsp; The Plan-Net design is based around the following types of searches.</p>
<table style="border-color: Black;" border="3" width="947">
<tbody>
<tr>
<td width="231">
<p><strong>Search</strong></p>
</td>
<td width="180">
<p><strong>Example</strong></p>
</td>
<td width="279">
<p><strong>Focal&nbsp; Resource and Field</strong></p>
</td>
<td width="257">
<p><strong>Qualifications of Search</strong></p>
</td>
</tr>
<tr>
<td width="231">
<p>General Search</p>
</td>
<td width="180">
<p>Pharmacy</p>
</td>
<td width="279">
<p>HealthcareService.category, HealthcareService.specialty</p>
</td>
<td width="257">
<p>Location, network</p>
</td>
</tr>
<tr>
<td width="231">
<p>Provider by Name</p>
</td>
<td width="180">
<p>Joe Smith</p>
</td>
<td width="279">
<p>Practitioner.name</p>
</td>
<td width="257">
<p>Location, network, specialty, role/privileges</p>
</td>
</tr>
<tr>
<td width="231">
<p>Organization by Name</p>
</td>
<td width="180">
<p>Montgomery Cardiology or CVS</p>
</td>
<td width="279">
<p>Organization.name</p>
</td>
<td width="257">
<p>Location, network, specialty</p>
</td>
</tr>
<tr>
<td width="231">
<p>Provider by Specialty</p>
</td>
<td width="180">
<p>Cardiologist</p>
</td>
<td width="279">
<p>PractitionerRole.specialty</p>
</td>
<td width="257">
<p>Location, network, name</p>
</td>
</tr>
<tr>
<td width="231">
<p>Organization by Specialty</p>
</td>
<td width="180">
<p>Compounding Pharmacy</p>
</td>
<td width="279">
<p>OrganizationAffiliation.specialty</p>
</td>
<td width="257">
<p>Location, network, name</p>
</td>
</tr>
</tbody>
</table>
<p>The content in this section of the IG is based on the <a href="artifacts.html#7">examples</a> provided and on the patterns provided <a href="patterns.pptx">here</a>.<br />Specific examples are referenced in the text below.</p>
<h4><a id="searching-for-active"></a>Searching for active Practictioners and Organizations</h4>
<p>
Sample query to search for currently active Practitioners (replace date in query with current date):<br/>
http://davinci-plan-net-ri.logicahealth.org/fhir/PractitionerRole?_include=PractitionerRole:date=ge2021-10-25 <br/><br/>
Sample query to search for currently active Organizations (replace date in query with current date): <br/>
http://davinci-plan-net-ri.logicahealth.org/fhir/OrganizationAffiliation?_include=OrganizationAffiliation:date=ge2021-10-25 <br/><br/>
To search for Practitioners or Organizations that will be active at a future time, change the date to a future date.<br/><br/>
If no period is provided, then it is assumend the role is active with no expiration date.
</p>

<h4><a name="HealthcareService"></a>HealthcareService</h4>
<p>The first type of search starts from HealthcareService.category and HealthcareService.specialty, so it is essential that each provider's service be supported by appropriate set of HealthcareService instances.&nbsp; HealthcareServices are typically provided by an organization, except in the case of a Practitioner that is not associated with an organization (see the solo practitioner example), and can be linked to a set of locations where service is provided, or identified as virtual services through an indicated set of virtual modalities.&nbsp; &nbsp;The examples illustrate this with an organization that provides three distinct Pharmacy services -- retail, compounding, and mail-order -- across its locations.&nbsp; All organizations that provide service should define an appropriate set. of HealthcareServices to facilitate search.&nbsp; The HealthcareService category, specialty and type fields are the highest level of organization of the services provided by the provider's network.</p>
<p>Relevant examples:</p>
<table style="height: 119px; border-color: Black;" border="1" width="509">
<tbody>
<tr>
<td style="width: 162px;">Scenario</td>
<td style="width: 162px;">Example Instances</td>
</tr>
<tr>
<td style="width: 162px;">Retail Pharmacy Chain</td>
<td style="width: 162px;">
<p><a title="HealthcareService/PharmChainRetailService" href="HealthcareService-PharmChainRetailService.html">PharmChainRetailService</a></p>
</td>
</tr>
<tr>
<td style="width: 162px;">Compounding Pharmacy</td>
<td style="width: 162px;"><a title="HealthcareService/PharmChainCompService" href="HealthcareService-PharmChainCompService.html">PharmChainCompService</a></td>
</tr>
<tr>
<td style="width: 162px;">Mail Order Pharmacy (virtual service with no physical location)</td>
<td style="width: 162px;"><a title="HealthcareService/PharmChainMailService" href="HealthcareService-PharmChainMailService.html">PharmChainMailService</a></td>
</tr>
<tr>
<td style="width: 162px;">Provider Group</td>
<td style="width: 162px;"><a title="HealthcareService/HartfordOrthopedicServices" href="HealthcareService-HartfordOrthopedicServices.html">HartfordOrthopedicServices</a></td>
</tr>
<tr>
<td style="width: 162px;">Emergency Room</td>
<td style="width: 162px;"><a title="HealthcareService/HospERService" href="HealthcareService-HospERService.html">HospERService</a></td>
</tr>
<tr>
<td style="width: 162px;">Cancer Clinic</td>
<td style="width: 162px;"><a title="HealthcareService/CancerClinicService" href="HealthcareService-CancerClinicService.html">CancerClinicService</a></td>
</tr>
<tr>
<td style="width: 162px;">
<div>
<div>Virtual Counseling Service</div>
</div>
</td>
<td style="width: 162px;"><a href="HealthcareService-VirtualCounselService.html">VirtualCounselService</a></td>
</tr>
<tr>
<td style="width: 162px;">&nbsp;Solo Family Practitioner&nbsp;</td>
<td style="width: 162px;">&nbsp;<a href="HealthcareService-HansSoloService.html">HansSoloService</a></td>
</tr>
</tbody>
</table>
<h4><a name="InsurancePlanAndNetwork"></a>Insurance Plan and Network<br /><br /></h4>
<p>Each payer will offer one or more products -- Insurance Plans -- and each plan is associated with one or more Networks.&nbsp; Practitioners and Organizations indicate participation in a Network with a link to the Network using a PractitionerRole or OrganizationAffiliation instance, respectively.&nbsp; &nbsp;PractitionerRole and OrganizationAffiliation instances are what tie Practitioners and Organizations to HealthcareServices, Organizations, Networks and Locations.</p>
<p>The examples demonstrate the use of the InsurancePlan profile to represent two distinct Qualified Health Plan products covering the state of Connecticut, using a pair of Networks.&nbsp; The practitioners and organizations in the examples participate in one or both of these networks.</p>
<p>Relevant examples:</p>
<table border="1" width="509">
<tbody>
<tr>
<td>Scenario</td>
<td>Example Instances</td>
</tr>
<tr>
<td>Insurance Company</td>
<td>
<p><a title="Organization/Acme" href="Organization-Acme.html">Acme</a></p>
</td>
</tr>
<tr>
<td>QHP Gold Plan with two networks</td>
<td><a title="InsurancePlan/AcmeQHPGold" href="InsurancePlan-AcmeQHPGold.html">AcmeQHPGold</a></td>
</tr>
<tr>
<td>QHP Bronze plan with one network</td>
<td><a title="InsurancePlan/AcmeQHPBronze" href="InsurancePlan-AcmeQHPBronze.html">AcmeQHPBronze</a></td>
</tr>
<tr>
<td>Standard Network</td>
<td><a title="Organization/AcmeofCTStdNet" href="Organization-AcmeofCTStdNet.html">AcmeofCTStdNet</a></td>
</tr>
<tr>
<td>Premium Network</td>
<td><a title="Organization/AcmeofCTPremNet" href="Organization-AcmeofCTPremNet.html">AcmeofCTPremNet</a></td>
</tr>
</tbody>
</table>
<h4><a name="Location"></a>Location</h4>
<p>Location instances provide information about location where service is provided, including contact information, address, accessibility, hours of operation and contact, as well as position (lattitude and longitude).&nbsp; &nbsp;Locations can also be used to represent regions using an associated or attached GeoJSON object.</p>
<p>Relevant examples:</p>
<table border="1" width="509">
<tbody>
<tr>
<td>Scenario</td>
<td>Example Instances</td>
</tr>
<tr>
<td>Hospital Location #1</td>
<td>
<p><a title="Location/HospLoc1" href="Location-HospLoc1.html">HospLoc1</a></p>
</td>
</tr>
<tr>
<td>Hospital Location #2</td>
<td><a title="Location/HospLoc2" href="Location-HospLoc2.html">HospLoc2</a></td>
</tr>
<tr>
<td>Pharmacy Location #1 .&nbsp; Shows newpatient,<br />accessibliity, and contactpoint-availabletime extensions</td>
<td><a title="Location/PharmLoc1" href="Location-PharmLoc1.html">PharmLoc1</a></td>
</tr>
<tr>
<td>Pharmacy Location #2</td>
<td><a title="Location/PharmLoc2" href="Location-PharmLoc2.html">PharmLoc2</a></td>
</tr>
<tr>
<td>Location used as CoverageArea</td>
<td><a title="Location/StateOfCTLocation" href="Location-StateOfCTLocation.html">StateOfCTLocation</a></td>
</tr>
</tbody>
</table>
<h4><a name="PractitionersAndPractitionerRole"></a>Practitioners and PractitionerRoles</h4>
<p>Practitioner instances provide information about a specific person, including name, gender, languages spoken, and qualifications.&nbsp; &nbsp;PractitionerRole defines a role for a particular practitioner, and associates it with locations, specialties, an organization, and networks.</p>
<table style="height: 243px; width: 803px;" border="1">
<tbody>
<tr>
<td style="width: 432px;">Scenario</td>
<td style="width: 355px;">Example Instances</td>
</tr>
<tr>
<td style="width: 432px;">Solo Practitioner (no organization)</td>
<td style="width: 355px;">
<p><a title="Practitioner/HansSolo" href="Practitioner-HansSolo.html">HansSolo</a>,&nbsp;<a title="PractitionerRole/HansSoloRole1" href="PractitionerRole-HansSoloRole1.html">HansSoloRole1</a>,&nbsp;<a title="HealthcareService/HansSoloService" href="HealthcareService-HansSoloService.html">HansSoloService</a></p>
</td>
</tr>
<tr>
<td style="width: 432px;">Anonymous role (not associated with a specific practitioner)</td>
<td style="width: 355px;"><a title="PractitionerRole/AnonRole" href="PractitionerRole-AnonRole.html">AnonRole</a></td>
</tr>
<tr>
<td style="width: 432px;">Physician working at a provider group</td>
<td style="width: 355px;"><a title="Practitioner/JoeSmith" href="Practitioner-JoeSmith.html">JoeSmith</a><a title="PractitionerRole/JoeSmithRole2" href="PractitionerRole-JoeSmithRole2.html">, JoeSmithRole2</a></td>
</tr>
<tr>
<td style="width: 432px;">Physician with admitting privileges</td>
<td style="width: 355px;"><a title="Practitioner/JoeSmith" href="Practitioner-JoeSmith.html">JoeSmith</a><a title="PractitionerRole/JoeSmithRole3" href="PractitionerRole-JoeSmithRole3.html">, JoeSmithRole3</a></td>
</tr>
<tr>
<td style="width: 432px;">Physician working at a hospital</td>
<td style="width: 355px;"><a title="Practitioner/JoeSmith" href="Practitioner-JoeSmith.html">JoeSmith</a><a title="PractitionerRole/JoeSmithRole1" href="PractitionerRole-JoeSmithRole1.html">, JoeSmithRole1</a></td>
</tr>
<tr>
<td style="width: 432px;">Counselor working virtually</td>
<td style="width: 355px;">
<div>
<div><a href="PractitionerRole-CounselorRole1.html">CounselorRole1</a></div>
</div>
</td>
</tr>
</tbody>
</table>
<h4><a name="OrganizationAndOrganizationAffiliation"></a>Organizations and Organization Affiliations</h4>
<p>Organization instances provide information about a specific organization and organizational hierarchies, including organization name, specialty, type, address and contact information.&nbsp; Organization Affiliation instances describe a role, and link a participating organization that provides or performs the role, with an organization where that role is available, and also links the participating organization to a HealthcareServices and networks.&nbsp; OrganizationalAffiliation can also be used to associate a HealthcareService provided by an organization with networks.</p>
<table border="1">
<tbody>
<tr>
<td>Scenario</td>
<td>Example Instances</td>
</tr>
<tr>
<td>Pharmacy services are associated with a specific provider network</td>
<td>
<p><a title="Organization/PharmChain" href="Organization-PharmChain.html">PharmChain</a>,&nbsp;<a title="OrganizationAffiliation/PharmChainAffil1" href="OrganizationAffiliation-PharmChainAffil1.html">PharmChainAffil1</a>,&nbsp;<a title="OrganizationAffiliation/PharmChainAffil2" href="OrganizationAffiliation-PharmChainAffil2.html">PharmChainAffil1</a>,&nbsp;<a title="OrganizationAffiliation/PharmChainAffil3" href="OrganizationAffiliation-PharmChainAffil3.html">PharmChainAffil1</a></p>
</td>
</tr>
<tr>
<td>Clinic Providing Service to a Hospital</td>
<td><a title="Organization/BurrClinic" href="Organization-BurrClinic.html">BurrClinic</a>,&nbsp;<a title="OrganizationAffiliation/BurrClinicAffil" href="OrganizationAffiliation-BurrClinicAffil.html">BurrClinicAffil,&nbsp;</a><a title="Organization/Hospital" href="Organization-Hospital.html">Hospital</a></td>
</tr>
<tr>
<td>Clinic that is part of a Hospital</td>
<td><a title="Organization/HamiltonClinic" href="Organization-HamiltonClinic.html">HamiltonClinic</a>,&nbsp;<a title="OrganizationAffiliation/HamiltonClinicAffil" href="OrganizationAffiliation-HamiltonClinicAffil.html">HamiltonClinicAffil,&nbsp;</a><a title="Organization/Hospital" href="Organization-Hospital.html">Hospital</a></td>
</tr>
<tr>
<td>Specialty group providing service to a network at hospital</td>
<td><a title="Organization/HartfordOrthopedics" href="Organization-HartfordOrthopedics.html">HartfordOrthopedics</a>,&nbsp;<a title="OrganizationAffiliation/HartfordOrthopedicAffil" href="OrganizationAffiliation-HartfordOrthopedicAffil.html">HartfordOrthopedicAffil,&nbsp;</a><a title="Organization/Hospital" href="Organization-Hospital.html">Hospital</a></td>
</tr>
<tr>
<td>Clinic that is a member of a regional HIE</td>
<td><a title="Organization/BurrClinic" href="Organization-BurrClinic.html">BurrClinic</a>,&nbsp;<a title="Organization/ConnHIE" href="Organization-ConnHIE.html">ConnHIE</a>,&nbsp;<a title="OrganizationAffiliation/ConnHIEAffil" href="OrganizationAffiliation-ConnHIEAffil.html">ConnHIEAffil</a></td>
</tr>
</tbody>
</table>
<h4><a name="Privacy"></a>Endpoints</h4>
<p>An Endpoint instance&nbsp;provides&nbsp; technical details of an endpoint that can be used for electronic services, such as a portal or FHIR REST services, messaging or operations, or DIRECT messaging.</p>
<table style="height: 33px;" border="1" width="776">
<tbody>
<tr>
<td style="width: 167px;">Scenario</td>
<td style="width: 593px;">Example Instances</td>
</tr>
<tr>
<td style="width: 167px;">Payer Portal</td>
<td style="width: 593px;"><a title="Endpoint/AcmeOfCTPortalEndpoint" href="Endpoint-AcmeOfCTPortalEndpoint.html">AcmeOfCTPortalEndpoint</a></td>
</tr>
</tbody>
</table>
<div>&nbsp;</div>

---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/index.md


<h3>PDEX Payer Network Implementation Guide</h3>
<h4>Introduction</h4>

This implementation guide defines a FHIR interface to a health insurer's insurance plans, their associated networks, and the organizations and providers that participate in these networks. Publication of this data through a standard FHIR-based API will enable third parties to develop applications through which consumers and providers can query the participants in a payer's network that may provide services that address their health care needs. Although there are multiple types and sources of providers' directories, including provider organizations (i.e., a hospital listing all its physicians), government (i.e., listing of providers in Medicare), payers (i.e., a health plan's provider network), and third-party entities (such as vendors that maintain provider directories), the focus of this implementation guide is on Payer Provider Directories.

The PDEX Payer Network (or Plan-Net) Implementation Guide is based conceptually on the <a href = "http://hl7.org/fhir/uv/vhdir/2018Sep/index.html">Validated Healthcare Directory Implementation Guide (VHDir IG)</a>, an international standard. The VHDir IG is based on <a href = "http://hl7.org/fhir/R4/index.html">FHIR Version 4.0</a>.  It was developed in cooperation with the <a href="http://www.healthit.gov/newsroom/about-onc">Office of the National Coordinator for Health Information Technology (ONC)</a> and <a href ="https://www.healthit.gov/policy-researchers-implementers/federal-health-architecture-fha">Federal Health Architecture (FHA)</a> with guidance from HL7 International, the Patient Administration Workgroup, and the HL7 US Realm Steering Committee.

The use of VhDir as the conceptual base for the profiles and extensions in the PDEX Payer Network Implementation Guide is intended to protect implementers of the Plan-Net IG from rework/remapping when the VHDir concept reaches implementation, and becomes a source of data for the PDEX Payer Network. The primary changes from the VHDir IG are to:

<ol>
<li> remove the validation and restriction resources</li>
<li> use US Core for R4 as the base suite of profiles where possible</li>
<li> eliminate extensions that are not necessary for this use case</li>
<li> introduce additional constraints (e.g. search criteria, cardinality, value-set bindings and MustSupport) where appropriate.</li>
</ol>
The diagram below depicts the scope of this implementation guide (IG). The IG defines the API that exposes a payer’s provider network (including pharmacy locations where appropriate) for access by a consumer or provider application. This is a query only API (GET) and does not support PUT or POST.

<img style="width:60%;height:auto;float:none;align:middle;" src="Bob3.png"/>

<h4>Relation to US Core and other IGs</h4>

This implementation guide was written for a US audience and profiles resources from <a href="{{site.data.fhir.ver.hl7_fhir_us_core}}/index.html">US Core STU 4</a>, where available (Practitioner, Organization and Location), and otherwise from R4 (OrganizationAffiliation, PractitionerRole, HealthCareService, Endpoint).  The PractitionerRole profile from US Core was not used because it is over-constrained for use in a Provider Directory based on Payer information.  The Network profile is based on USCore Organization, since there was no contradiction between the USCore profile and the Plan-Net requirements.  However, the NPI and CLIA identifier types, which are Must-Support, are clearly intended for provider organizations only and are not expected to be populated for other organization types. Alignment with VhDir is maintained by adapting VhDir content, where possible.

<h4>Disclaimers and Assumptions</h4>
<ul>
<li> <b>PDEX Payer Network is based conceptually on VhDir</b>: The PDEX Payer Network implementation guide is based conceptually on the VhDir implementation guide, which is still a work in progress. Plan-net will need to track changes to VhDir to fulfill its goal of minimizing rework.
</li><li> <b>The PDEX Payer Network endpoint is known to the client</b>: This implementation guide assumes that the directory endpoint is known to the client. There is an overarching system architecture issue that is critical to resolve -- how does the client discover the FHIR endpoint of interest. For the purposes of this IG, we consider that problem out of scope.</li>
</ul>
<h4>Background</h4>

Provider directories play a critical role in enabling identification of individual providers and provider organizations, as well as characteristics about them. Provider directories support a variety of use cases, including:
<ul>
<li>Patient/Payer focused</li>
<ul
><li>Find provider accessibility information (specialty, office hours, languages spoken, taking patients) - enables individuals and consumers to find contact and other accessibility information for individual healthcare providers and/or healthcare organizations
</li>
<li>Relationship between provider and insurance plan (insurance accepted) or plan and provider (network) - enables individual healthcare providers, organizations, and payers to discover the relationships between providers, organizations, and payers, as well as additional details about the relationships and entities involved
</li>
</ul>
<li>Basic Information Exchange</li>
<ul>
<li>Enable electronic exchange (e.g. discovery of electronic endpoints such as IHE/EHR endpoints, FHIR server URLs, Direct addresses) - enables the electronic exchange of health information by supporting the ability to discover electronic service information including electronic endpoints or electronic addresses</li>
<li>Find an individual and/or organization (even if no electronic endpoint is available) - enables users to find contact and other identifying information about healthcare organizations and individual healthcare providers</li>
</ul>
</ul>
<br>
This IG addresses two actors:
<ul>
<li>Health Plan API Actor:  A payer publishing a directory of its provider networks through a FHIR endpoint.</li>
<li>Application Actor:  A third party using the API published by a payer to provide useful views of the payer's provider networks for end users.</li>
</ul>
For anticipated query use cases, please see <a href="implementation.html#Representing">Representing and Searching Provider Data</a>.

<h4>Overview of Payer Directory - Resource Relationships</h4>

Note: the following diagrams provide a high-level view of the relationships between resources used in this IG. They do not necessarily reflect all of the relationships/references between resources.

<img src="Slide2.png" alt = "Key Relationships Among Payer Directory Resources" style="height:auto;float:none;align:middle;width:100%;"  />
<img src="Slide3.png" alt = "Relationships Between Payer Directory Resources -- Endpoints" style="height:auto;float:none;align:middle;width:100%;"  />

<h4>Credits</h4>
This IG was developed by the MITRE Corporation under the direction of the authors using [FHIR Shorthand syntax](https://build.fhir.org/ig/HL7/fhir-shorthand/) and the [SUSHI tookit](https://github.com/FHIR/sushi),  a free, open source toolchain from the MITRE Corporation.  Generous guidance on FHIR Shorthand and SUSHI was provided by Chris Moesel.  The capability statements were developed with support of tools and generous guidance from Eric Haas, and benefited from critical review by Yengibar Manasyan.

  
<h4>Authors</h4>

<table border="1" style="width:100%">
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>

 <tr>
  <td>Troy Bergstrand</td>
  <td>Troy.Bergstrand@bcidaho.com</td>
  </tr>
  <tr>
  <td>Laurie Burckhardt</td>
  <td>Laurie.Burckhardt@wpsic.com</td>
  </tr>
   <tr>
   <td>Bob Dieterle </td>
  <td>rdieterle@enablecare.us</td>
  </tr>    
  <tr>
  <td>Gail Kocher</td>
  <td>Gail.Kocher@bcbsa.com</td>
  </tr>
  <tr>
  <td>Saul A. Kravitz</td>
  <td>saul@mitre.org</td>
  </tr>
    <tr>
  <td>Robert McClure MD </td>
  <td>rmcclure@mdpartners.com</td>
  </tr>
<tr>
  <td>Mary Kay McDaniel </td>
  <td>MaryKay.McDaniel@cognosante.com</td>
  </tr>
<tr>
  <td>Sean Mahoney </td>
  <td>smahoney@mitre.org</td>
  </tr>
<tr>
  <td>Corey Spears</td>
  <td>corey.spears@lantanagroup.com</td>
</tr>
<tr>
  <td>Rick Geimer</td>
  <td>rick.geimer@lantanagroup.com</td>
</tr>

 </table>
{: rules="groups"}


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/InsurancePlan-AcmeQHPBronze-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"InsurancePlan"
</td></tr>
<tr><td>id</td><td>
"AcmeQHPBronze"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-InsurancePlan"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Acme of CT QHP Bronze"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#qhp
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Qualified Health Plan"
</td></tr>
<tr><td>plan[0].type.coding[0].code</td><td>
#bronze
</td></tr>
<tr><td>plan[0].type.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsurancePlanTypeCS"
</td></tr>
<tr><td>plan[0].type.coding[0].display</td><td>
"Bronze-QHP"
</td></tr>
<tr><td>ownedBy.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>administeredBy.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>coverageArea[0].reference</td><td>
"Location/StateOfCTLocation"
</td></tr>
<tr><td>endpoint[0].reference</td><td>
"Endpoint/AcmeOfCTPortalEndpoint"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/InsurancePlan-AcmeQHPGold-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"InsurancePlan"
</td></tr>
<tr><td>id</td><td>
"AcmeQHPGold"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-InsurancePlan"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Acme of CT QHP Gold"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#qhp
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Qualified Health Plan"
</td></tr>
<tr><td>plan[0].type.coding[0].code</td><td>
#gold
</td></tr>
<tr><td>plan[0].type.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsurancePlanTypeCS"
</td></tr>
<tr><td>plan[0].type.coding[0].display</td><td>
"Gold-QHP"
</td></tr>
<tr><td>ownedBy.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>administeredBy.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>network[1].reference</td><td>
"Organization/AcmeofCTPremNet"
</td></tr>
<tr><td>coverageArea[0].reference</td><td>
"Location/StateOfCTLocation"
</td></tr>
<tr><td>endpoint[0].reference</td><td>
"Endpoint/AcmeOfCTPortalEndpoint"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/InsurancePlan-plannet-insuranceplan-HPID450000-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-insuranceplan-HPID450000"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-InsurancePlan"</td></tr>
<tr><td>identifier[0].use</td><td>
"official"
</td></tr>
<tr><td>identifier[0].type.text</td><td>
"HIOS product ID"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://www.cms.gov/CCIIO"
</td></tr>
<tr><td>identifier[0].value</td><td>
HPID450000
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"Centers for Medicare and Medicaid Services"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#CommercialPPO
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Commercial PPO"
</td></tr>
<tr><td>type[0].text</td><td>
"Health insurance provided through a Preferred Provider Organization (PPO)"
</td></tr>
<tr><td>name</td><td>
"Acme Insurance Co of MassachusettsGold PPO Plan"
</td></tr>
<tr><td>alias[0]</td><td>"Acme MA GOLD PPO"</td></tr>
<tr><td>ownedBy.reference</td><td>
"Organization/plannet-organization-1230210000"
</td></tr>
<tr><td>ownedBy.display</td><td>
"Acme Insurance Co"
</td></tr>
<tr><td>administeredBy.reference</td><td>
"Organization/plannet-organization-1230210000"
</td></tr>
<tr><td>administeredBy.display</td><td>
"Acme Insurance Co"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/plannet-network-HPID010000"
</td></tr>
<tr><td>network[0].display</td><td>
"Acme of Massechusetts Preferred Provider Network"
</td></tr>
<tr><td>resourceType</td><td>
"InsurancePlan"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-CancerClinicLoc-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"CancerClinicLoc"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hgh.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Cancer Clinic"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#HOSP
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/CancerClinic"
</td></tr>
<tr><td>address.line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-CancerClinicLocation-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"CancerClinicLocation"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hgh.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"Cancer Clinic"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#HOSP
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/HartfordCancerClinicLLCOrganization"
</td></tr>
<tr><td>address.line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-HansSoloClinic-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"HansSoloClinic"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existptonly
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[2].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hanssolo.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"OrgA CT Location 1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/BigBox"
</td></tr>
<tr><td>address.line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[0].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-HartfordHospitalLocation1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"HartfordHospitalLocation1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hgh.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"Hartford Hospital Location 1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#HOSP
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/HartfordGeneralHospital"
</td></tr>
<tr><td>address.line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[5]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[6]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-HartfordHospitalLocation2-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"HartfordHospitalLocation2"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hgh.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"Hartford Hospital Location 2"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#HOSP
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/HartfordGeneralHospital"
</td></tr>
<tr><td>address.line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[5]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[6]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-HospLoc1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"HospLoc1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hgh.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hartford Hospital Location 1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#HOSP
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/Hospital"
</td></tr>
<tr><td>address.line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[5]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[6]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-HospLoc2-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"HospLoc2"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[7].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hgh.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hartford Hospital Location 2"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#HOSP
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/Hospital"
</td></tr>
<tr><td>address.line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[5]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[6]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmacyLocation1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmacyLocation1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existing
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[2].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"OrgA CT Location 1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/OrganizationB"
</td></tr>
<tr><td>address.line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[1]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmacyLocation2-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmacyLocation2"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existing
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[2].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(777)-888-9999
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"OrgA CT Location 2"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/OrganizationB"
</td></tr>
<tr><td>address.line[0]</td><td>"444 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Rainbow"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1334"
</td></tr>
<tr><td>position.longitude</td><td>
"9"
</td></tr>
<tr><td>position.latitude</td><td>
"18"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[1]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmacyLocation3-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmacyLocation3"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existing
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[2].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(444)-555-666
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"OrgA MA Location 1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/OrganizationB"
</td></tr>
<tr><td>address.line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Somewhere"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"7"
</td></tr>
<tr><td>position.latitude</td><td>
"12"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmacyLocation4-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmacyLocation4"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existing
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(222)-333-4444
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"OrgA MA Location 2"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/OrganizationB"
</td></tr>
<tr><td>address.line[0]</td><td>"345 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Nowheresville"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"5"
</td></tr>
<tr><td>position.latitude</td><td>
"16"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmLoc1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmLoc1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existptonly
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[2].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"OrgA CT Location 1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/BigBox"
</td></tr>
<tr><td>address.line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Anytown"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"3"
</td></tr>
<tr><td>position.latitude</td><td>
"15"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[1]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmLoc2-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmLoc2"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existptonly
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[2].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(777)-888-9999
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"OrgA CT Location 2"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/BigBox"
</td></tr>
<tr><td>address.line[0]</td><td>"444 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Rainbow"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1334"
</td></tr>
<tr><td>position.longitude</td><td>
"9"
</td></tr>
<tr><td>position.latitude</td><td>
"18"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[1]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmLoc3-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmLoc3"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existptonly
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[2].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].code</td><td>
#pubtrans
</td></tr>
<tr><td>extension[2].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(444)-555-666
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"OrgA MA Location 1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/BigBox"
</td></tr>
<tr><td>address.line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Somewhere"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"7"
</td></tr>
<tr><td>position.latitude</td><td>
"12"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-PharmLoc4-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"PharmLoc4"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existptonly
</td></tr>
<tr><td>extension[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[0].extension[1].url</td><td>
"fromNetwork"
</td></tr>
<tr><td>extension[0].extension[1].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].code</td><td>
#adacomp
</td></tr>
<tr><td>extension[1].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(222)-333-4444
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"OrgA MA Location 2"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"outpatient pharmacy"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/BigBox"
</td></tr>
<tr><td>address.line[0]</td><td>"345 Main Street"</td></tr>
<tr><td>address.city</td><td>
"Nowheresville"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>position.longitude</td><td>
"5"
</td></tr>
<tr><td>position.latitude</td><td>
"16"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>hoursOfOperation[1].daysOfWeek[0]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[1].openingTime</td><td>
"08:00:00"
</td></tr>
<tr><td>hoursOfOperation[1].closingTime</td><td>
"17:00:00"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-plannet-location-1233319368-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-location-1233319368"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#handiaccess
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].display</td><td>
"handicap accessible"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.text</td><td>
"Offers a variety of services and programs for persons with disabilities"
</td></tr>
<tr><td>extension[1].extension[0].url</td><td>
"acceptingPatients"
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AcceptingPatientsCS"
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].code</td><td>
#existing
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/newpatients"
</td></tr>
<tr><td>identifier[0].use</td><td>
"secondary"
</td></tr>
<tr><td>identifier[0].system</td><td>
"https://rhode-island-substance-abuse-treatment-inc.com"
</td></tr>
<tr><td>identifier[0].value</td><td>
main campus
</td></tr>
<tr><td>identifier[0].assigner.reference</td><td>
"Organization/plannet-organization-1233319368"
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"RHODE ISLAND SUBSTANCE ABUSE TREATMENT, INC."
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"RHODE ISLAND SUBSTANCE ABUSE TREATMENT, INC."
</td></tr>
<tr><td>description</td><td>
"Main campus of RHODE ISLAND SUBSTANCE ABUSE TREATMENT, INC."
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
468.489.5165 x60446
</td></tr>
<tr><td>telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>telecom[1].extension[0].extension[0].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[1].extension[0].extension[0].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[1].system</td><td>
"fax"
</td></tr>
<tr><td>telecom[1].value</td><td>
(811) 138-4022
</td></tr>
<tr><td>telecom[1].use</td><td>
"work"
</td></tr>
<tr><td>address.use</td><td>
"work"
</td></tr>
<tr><td>address.type</td><td>
"both"
</td></tr>
<tr><td>address.text</td><td>
"66 PAVILION AVE, PROVIDENCE, RI 029051522"
</td></tr>
<tr><td>address.line[0]</td><td>"66 PAVILION AVE"</td></tr>
<tr><td>address.city</td><td>
"PROVIDENCE"
</td></tr>
<tr><td>address.state</td><td>
"RI"
</td></tr>
<tr><td>address.postalCode</td><td>
"029051522"
</td></tr>
<tr><td>address.country</td><td>
"USA"
</td></tr>
<tr><td>position.longitude</td><td>
"-71.40409"
</td></tr>
<tr><td>position.latitude</td><td>
"41.79822"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/plannet-organization-1233319368"
</td></tr>
<tr><td>managingOrganization.display</td><td>
"RHODE ISLAND SUBSTANCE ABUSE TREATMENT, INC."
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[5]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[6]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>availabilityExceptions</td><td>
"visiting hours from 6:00 am - 10:00 pm"
</td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-plannet-location-PCY-0002012-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-location-PCY-0002012"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>identifier[0].use</td><td>
"secondary"
</td></tr>
<tr><td>identifier[0].system</td><td>
"https://walgreens-07047.com"
</td></tr>
<tr><td>identifier[0].value</td><td>
main campus
</td></tr>
<tr><td>identifier[0].assigner.reference</td><td>
"Organization/plannet-organization-f021b8fc3135592c53d50ef64"
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"WALGREENS"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>name</td><td>
"WALGREENS #07047"
</td></tr>
<tr><td>description</td><td>
"Main campus of WALGREENS #07047"
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v3-RoleCode"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#OUTPHARM
</td></tr>
<tr><td>type[0].text</td><td>
"Outpatient pharmacy"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
923-127-1432 x63075
</td></tr>
<tr><td>telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>telecom[1].extension[0].extension[0].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[1].extension[0].extension[0].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[1].system</td><td>
"fax"
</td></tr>
<tr><td>telecom[1].value</td><td>
755-345-0531
</td></tr>
<tr><td>telecom[1].use</td><td>
"work"
</td></tr>
<tr><td>address.use</td><td>
"work"
</td></tr>
<tr><td>address.type</td><td>
"both"
</td></tr>
<tr><td>address.text</td><td>
"2920 BERLIN TPKE, NEWINGTON, CT 06111-4116"
</td></tr>
<tr><td>address.line[0]</td><td>"2920 BERLIN TPKE"</td></tr>
<tr><td>address.city</td><td>
"NEWINGTON"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
<tr><td>address.postalCode</td><td>
"06111-4116"
</td></tr>
<tr><td>address.country</td><td>
"USA"
</td></tr>
<tr><td>position.longitude</td><td>
"-72.71922"
</td></tr>
<tr><td>position.latitude</td><td>
"41.66707"
</td></tr>
<tr><td>managingOrganization.reference</td><td>
"Organization/plannet-organization-f021b8fc3135592c53d50ef64"
</td></tr>
<tr><td>managingOrganization.display</td><td>
"WALGREENS"
</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[0]</td><td>"mon"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[1]</td><td>"tue"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[2]</td><td>"wed"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[3]</td><td>"thu"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[4]</td><td>"fri"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[5]</td><td>"sat"</td></tr>
<tr><td>hoursOfOperation[0].daysOfWeek[6]</td><td>"sun"</td></tr>
<tr><td>hoursOfOperation[0].allDay</td><td>
"true"
</td></tr>
<tr><td>availabilityExceptions</td><td>
"visiting hours from 6:00 am - 10:00 pm"
</td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Location-StateOfCTLocation-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Location"
</td></tr>
<tr><td>id</td><td>
"StateOfCTLocation"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>status</td><td>
"active"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/StructureDefinition/location-boundary-geojson"
</td></tr>
<tr><td>extension[0].valueAttachment.contentType</td><td>
"application/json"
</td></tr>
<tr><td>extension[0].valueAttachment.title</td><td>
"GeoJSON Outline of the State of Connecticut"
</td></tr>
<tr><td>extension[0].valueAttachment.data</td><td>
"eyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJHRU9fSUQiOiAiMDQwMDAwMFVTMDkiLCAiU1RBVEUiOiAiMDkiLCAiTkFNRSI6ICJDb25uZWN0aWN1dCIsICJMU0FEIjogIiIsICJDRU5TVVNBUkVBIjogNDg0Mi4zNTUwMDAgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbIFsgWyBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdLCBbIC03MS44NjgyMzUsIDQxLjMzMDk0MSBdLCBbIC03MS44ODYzMDIsIDQxLjMzNjQxMCBdLCBbIC03MS45MTY3MTAsIDQxLjMzMjIxNyBdLCBbIC03MS45MjIwOTIsIDQxLjMzNDUxOCBdLCBbIC03MS45MjMyODIsIDQxLjMzNTExMyBdLCBbIC03MS45MzYyODQsIDQxLjMzNzk1OSBdLCBbIC03MS45NDU2NTIsIDQxLjMzNzc5OSBdLCBbIC03MS45NTY3NDcsIDQxLjMyOTg3MSBdLCBbIC03MS45NzA5NTUsIDQxLjMyNDUyNiBdLCBbIC03MS45Nzk0NDcsIDQxLjMyOTk4NyBdLCBbIC03MS45ODIxOTQsIDQxLjMyOTg2MSBdLCBbIC03MS45ODgxNTMsIDQxLjMyMDU3NyBdLCBbIC03Mi4wMDAyOTMsIDQxLjMxOTIzMiBdLCBbIC03Mi4wMDUxNDMsIDQxLjMwNjY4NyBdLCBbIC03Mi4wMTA4MzgsIDQxLjMwNzAzMyBdLCBbIC03Mi4wMjE4OTgsIDQxLjMxNjgzOCBdLCBbIC03Mi4wODQ0ODcsIDQxLjMxOTYzNCBdLCBbIC03Mi4wOTQ0NDMsIDQxLjMxNDE2NCBdLCBbIC03Mi4wOTk4MjAsIDQxLjMwNjk5OCBdLCBbIC03Mi4xMTE4MjAsIDQxLjI5OTA5OCBdLCBbIC03Mi4xMzQyMjEsIDQxLjI5OTM5OCBdLCBbIC03Mi4xNjE1ODAsIDQxLjMxMDI2MiBdLCBbIC03Mi4xNzM5MjIsIDQxLjMxNzU5NyBdLCBbIC03Mi4xNzc2MjIsIDQxLjMyMjQ5NyBdLCBbIC03Mi4xODQxMjIsIDQxLjMyMzk5NyBdLCBbIC03Mi4xOTEwMjIsIDQxLjMyMzE5NyBdLCBbIC03Mi4yMDE0MjIsIDQxLjMxNTY5NyBdLCBbIC03Mi4yMDMwMjIsIDQxLjMxMzE5NyBdLCBbIC03Mi4yMDQwMjIsIDQxLjI5OTA5NyBdLCBbIC03Mi4yMDE0MDAsIDQxLjI4ODQ3MCBdLCBbIC03Mi4yMDUxMDksIDQxLjI4NTE4NyBdLCBbIC03Mi4yMDk5OTIsIDQxLjI4NjA2NSBdLCBbIC03Mi4yMTI5MjQsIDQxLjI5MTM2NSBdLCBbIC03Mi4yMjUyNzYsIDQxLjI5OTA0NyBdLCBbIC03Mi4yMzU1MzEsIDQxLjMwMDQxMyBdLCBbIC03Mi4yNDgxNjEsIDQxLjI5OTQ4OCBdLCBbIC03Mi4yNTE4OTUsIDQxLjI5ODYyMCBdLCBbIC03Mi4yNTA1MTUsIDQxLjI5NDM4NiBdLCBbIC03Mi4yNTEzMjMsIDQxLjI4OTk5NyBdLCBbIC03Mi4yNjE0ODcsIDQxLjI4MjkyNiBdLCBbIC03Mi4zMTc3NjAsIDQxLjI3Nzc4MiBdLCBbIC03Mi4zMjc1OTUsIDQxLjI3ODQ2MCBdLCBbIC03Mi4zMzM4OTQsIDQxLjI4MjkxNiBdLCBbIC03Mi4zNDg2NDMsIDQxLjI3NzQ0NiBdLCBbIC03Mi4zNDgwNjgsIDQxLjI2OTY5OCBdLCBbIC03Mi4zODY2MjksIDQxLjI2MTc5OCBdLCBbIC03Mi4zOTg2ODgsIDQxLjI3ODE3MiBdLCBbIC03Mi40MDU5MzAsIDQxLjI3ODM5OCBdLCBbIC03Mi40NTE5MjUsIDQxLjI3ODg4NSBdLCBbIC03Mi40NzI1MzksIDQxLjI3MDEwMyBdLCBbIC03Mi40ODU2OTMsIDQxLjI3MDg4MSBdLCBbIC03Mi40OTk1MzQsIDQxLjI2NTg2NiBdLCBbIC03Mi41MDY2MzQsIDQxLjI2MDA5OSBdLCBbIC03Mi41MTg2NjAsIDQxLjI2MTI1MyBdLCBbIC03Mi41MjEzMTIsIDQxLjI2NTYwMCBdLCBbIC03Mi41Mjk0MTYsIDQxLjI2NDQyMSBdLCBbIC03Mi41MzMyNDcsIDQxLjI2MjY5MCBdLCBbIC03Mi41MzY3NDYsIDQxLjI1NjIwNyBdLCBbIC03Mi41NDcyMzUsIDQxLjI1MDQ5OSBdLCBbIC03Mi41NzExMzYsIDQxLjI2ODA5OCBdLCBbIC03Mi41ODMzMzYsIDQxLjI3MTY5OCBdLCBbIC03Mi41OTgwMzYsIDQxLjI2ODY5OCBdLCBbIC03Mi42MTcyMzcsIDQxLjI3MTk5OCBdLCBbIC03Mi42NDE1MzgsIDQxLjI2Njk5OCBdLCBbIC03Mi42NTM4MzgsIDQxLjI2NTg5NyBdLCBbIC03Mi42NjI4MzgsIDQxLjI2OTE5NyBdLCBbIC03Mi42NzIzMzksIDQxLjI2Njk5NyBdLCBbIC03Mi42ODQ5MzksIDQxLjI1NzU5NyBdLCBbIC03Mi42ODU1MzksIDQxLjI1MTI5NyBdLCBbIC03Mi42OTA0MzksIDQxLjI0NjY5NyBdLCBbIC03Mi42OTQ3NDQsIDQxLjI0NDk3MCBdLCBbIC03Mi43MTA1OTUsIDQxLjI0NDQ4MCBdLCBbIC03Mi43MTM2NzQsIDQxLjI0OTAwNyBdLCBbIC03Mi43MTEyMDgsIDQxLjI1MTAxOCBdLCBbIC03Mi43MTI0NjAsIDQxLjI1NDE2NyBdLCBbIC03Mi43MjI0MzksIDQxLjI1OTEzOCBdLCBbIC03Mi43MzI4MTMsIDQxLjI1NDcyNyBdLCBbIC03Mi43NTQ0NDQsIDQxLjI2NjkxMyBdLCBbIC03Mi43NTc0NzcsIDQxLjI2NjkxMyBdLCBbIC03Mi43ODYxNDIsIDQxLjI2NDc5NiBdLCBbIC03Mi44MTg3MzcsIDQxLjI1MjI0NCBdLCBbIC03Mi44MTkzNzIsIDQxLjI1NDA2MSBdLCBbIC03Mi44MjY4ODMsIDQxLjI1Njc1NSBdLCBbIC03Mi44NDc3NjcsIDQxLjI1NjY5MCBdLCBbIC03Mi44NTAyMTAsIDQxLjI1NTU0NCBdLCBbIC03Mi44NTQwNTUsIDQxLjI0Nzc0MCBdLCBbIC03Mi44NjEzNDQsIDQxLjI0NTI5NyBdLCBbIC03Mi44ODE0NDUsIDQxLjI0MjU5NyBdLCBbIC03Mi44OTU0NDUsIDQxLjI0MzY5NyBdLCBbIC03Mi45MDQzNDUsIDQxLjI0NzI5NyBdLCBbIC03Mi45MDUyNDUsIDQxLjI0ODI5NyBdLCBbIC03Mi45MDMwNDUsIDQxLjI1Mjc5NyBdLCBbIC03Mi44OTQ3NDUsIDQxLjI1NjE5NyBdLCBbIC03Mi44OTM4NDUsIDQxLjI1OTg5NyBdLCBbIC03Mi45MDgyMDAsIDQxLjI4MjkzMiBdLCBbIC03Mi45MTY4MjcsIDQxLjI4MjAzMyBdLCBbIC03Mi45MjAwNjIsIDQxLjI4MDA1NiBdLCBbIC03Mi45MjA4NDYsIDQxLjI2ODg5NyBdLCBbIC03Mi45MzU2NDYsIDQxLjI1ODQ5NyBdLCBbIC03Mi45NjIwNDcsIDQxLjI1MTU5NyBdLCBbIC03Mi45ODYyNDcsIDQxLjIzMzQ5NyBdLCBbIC03Mi45OTc5NDgsIDQxLjIyMjY5NyBdLCBbIC03My4wMDc1NDgsIDQxLjIxMDE5NyBdLCBbIC03My4wMTQ5NDgsIDQxLjIwNDI5NyBdLCBbIC03My4wMjAxNDksIDQxLjIwNDA5NyBdLCBbIC03My4wMjA0NDksIDQxLjIwNjM5NyBdLCBbIC03My4wMjI1NDksIDQxLjIwNzE5NyBdLCBbIC03My4wNTA2NTAsIDQxLjIxMDE5NyBdLCBbIC03My4wNTkzNTAsIDQxLjIwNjY5NyBdLCBbIC03My4wNzk0NTAsIDQxLjE5NDAxNSBdLCBbIC03My4xMDU0OTMsIDQxLjE3MjE5NCBdLCBbIC03My4xMDc5ODcsIDQxLjE2ODczOCBdLCBbIC03My4xMTAzNTIsIDQxLjE1OTY5NyBdLCBbIC03My4xMDk5NTIsIDQxLjE1Njk5NyBdLCBbIC03My4xMDgzNTIsIDQxLjE1MzcxOCBdLCBbIC03My4xMTEwNTIsIDQxLjE1MDc5NyBdLCBbIC03My4xMzAyNTMsIDQxLjE0Njc5NyBdLCBbIC03My4xNzAwNzQsIDQxLjE2MDUzMiBdLCBbIC03My4xNzA3MDEsIDQxLjE2NDk0NSBdLCBbIC03My4xNzc3NzQsIDQxLjE2NjY5NyBdLCBbIC03My4yMDI2NTYsIDQxLjE1ODA5NiBdLCBbIC03My4yMjgyOTUsIDQxLjE0MjYwMiBdLCBbIC03My4yMzUwNTgsIDQxLjE0Mzk5NiBdLCBbIC03My4yNDc5NTgsIDQxLjEyNjM5NiBdLCBbIC03My4yNjIzNTgsIDQxLjExNzQ5NiBdLCBbIC03My4yODY3NTksIDQxLjEyNzg5NiBdLCBbIC03My4yOTYzNTksIDQxLjEyNTY5NiBdLCBbIC03My4zMTE4NjAsIDQxLjExNjI5NiBdLCBbIC03My4zMzA2NjAsIDQxLjEwOTk5NiBdLCBbIC03My4zNzIyOTYsIDQxLjEwNDAyMCBdLCBbIC03My4zOTIxNjIsIDQxLjA4NzY5NiBdLCBbIC03My40MDAxNTQsIDQxLjA4NjI5OSBdLCBbIC03My40MTM2NzAsIDQxLjA3MzI1OCBdLCBbIC03My40MzUwNjMsIDQxLjA1NjY5NiBdLCBbIC03My40NTAzNjQsIDQxLjA1NzA5NiBdLCBbIC03My40NjgyMzksIDQxLjA1MTM0NyBdLCBbIC03My40NzczNjQsIDQxLjAzNTk5NyBdLCBbIC03My40OTMzMjcsIDQxLjA0ODE3MyBdLCBbIC03My41MTY5MDMsIDQxLjAzODczOCBdLCBbIC03My41MTY3NjYsIDQxLjAyOTQ5NyBdLCBbIC03My41MjI2NjYsIDQxLjAxOTI5NyBdLCBbIC03My41Mjg4NjYsIDQxLjAxNjM5NyBdLCBbIC03My41MzExNjksIDQxLjAyMTkxOSBdLCBbIC03My41MzAxODksIDQxLjAyODc3NiBdLCBbIC03My41MzI3ODYsIDQxLjAzMTY3MCBdLCBbIC03My41MzUzMzgsIDQxLjAzMTkyMCBdLCBbIC03My41NTE0OTQsIDQxLjAyNDMzNiBdLCBbIC03My41NjE5NjgsIDQxLjAxNjc5NyBdLCBbIC03My41Njc2NjgsIDQxLjAxMDg5NyBdLCBbIC03My41NzAwNjgsIDQxLjAwMTU5NyBdLCBbIC03My41ODM5NjgsIDQxLjAwMDg5NyBdLCBbIC03My41ODQ5ODgsIDQxLjAxMDUzNyBdLCBbIC03My41OTU2OTksIDQxLjAxNTk5NSBdLCBbIC03My42MDM5NTIsIDQxLjAxNTA1NCBdLCBbIC03My42NDM0NzgsIDQxLjAwMjE3MSBdLCBbIC03My42NTExNzUsIDQwLjk5NTIyOSBdLCBbIC03My42NTczMzYsIDQwLjk4NTE3MSBdLCBbIC03My42NTk2NzEsIDQwLjk4NzkwOSBdLCBbIC03My42NTg3NzIsIDQwLjk5MzQ5NyBdLCBbIC03My42NTkzNzIsIDQwLjk5OTQ5NyBdLCBbIC03My42NTU1NzEsIDQxLjAwNzY5NyBdLCBbIC03My42NTQ2NzEsIDQxLjAxMTY5NyBdLCBbIC03My42NTUzNzEsIDQxLjAxMjc5NyBdLCBbIC03My42NjI2NzIsIDQxLjAyMDQ5NyBdLCBbIC03My42NzA0NzIsIDQxLjAzMDA5NyBdLCBbIC03My42Nzk5NzMsIDQxLjA0MTc5NyBdLCBbIC03My42ODcxNzMsIDQxLjA1MDY5NyBdLCBbIC03My42OTQyNzMsIDQxLjA1OTI5NiBdLCBbIC03My43MTY4NzUsIDQxLjA4NzU5NiBdLCBbIC03My43MjI1NzUsIDQxLjA5MzU5NiBdLCBbIC03My43Mjc3NzUsIDQxLjEwMDY5NiBdLCBbIC03My42Mzk2NzIsIDQxLjE0MTQ5NSBdLCBbIC03My42MzIxNTMsIDQxLjE0NDkyMSBdLCBbIC03My41NjQ5NDEsIDQxLjE3NTE3MCBdLCBbIC03My41MTQ2MTcsIDQxLjE5ODQzNCBdLCBbIC03My41MDk0ODcsIDQxLjIwMDgxNCBdLCBbIC03My40ODI3MDksIDQxLjIxMjc2MCBdLCBbIC03My41MTgzODQsIDQxLjI1NjcxOSBdLCBbIC03My41NTA5NjEsIDQxLjI5NTQyMiBdLCBbIC03My41NDg5MjksIDQxLjMwNzU5OCBdLCBbIC03My41NDk1NzQsIDQxLjMxNTkzMSBdLCBbIC03My41NDg5NzMsIDQxLjMyNjI5NyBdLCBbIC03My41NDQ3MjgsIDQxLjM2NjM3NSBdLCBbIC03My41NDM0MjUsIDQxLjM3NjYyMiBdLCBbIC03My41NDExNjksIDQxLjQwNTk5NCBdLCBbIC03My41Mzc2NzMsIDQxLjQzMzkwNSBdLCBbIC03My41Mzc0NjksIDQxLjQzNTg5MCBdLCBbIC03My41MzY5NjksIDQxLjQ0MTA5NCBdLCBbIC03My41MzYwNjcsIDQxLjQ1MTMzMSBdLCBbIC03My41MzU5ODYsIDQxLjQ1MzA2MCBdLCBbIC03My41MzU4ODUsIDQxLjQ1NTIzNiBdLCBbIC03My41MzU4NTcsIDQxLjQ1NTcwOSBdLCBbIC03My41MzU3NjksIDQxLjQ1NzE1OSBdLCBbIC03My41MzQzNjksIDQxLjQ3NTg5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjM5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjkxMSBdLCBbIC03My41MzQxNTAsIDQxLjQ3ODA2MCBdLCBbIC03My41MzQwNTUsIDQxLjQ3ODk2OCBdLCBbIC03My41MzM5NjksIDQxLjQ3OTY5MyBdLCBbIC03My41MzAwNjcsIDQxLjUyNzE5NCBdLCBbIC03My41MjEwNDEsIDQxLjYxOTc3MyBdLCBbIC03My41MjAwMTcsIDQxLjY0MTE5NyBdLCBbIC03My41MTY3ODUsIDQxLjY4NzU4MSBdLCBbIC03My41MTE5MjEsIDQxLjc0MDk0MSBdLCBbIC03My41MTA5NjEsIDQxLjc1ODc0OSBdLCBbIC03My41MDUwMDgsIDQxLjgyMzc3MyBdLCBbIC03My41MDQ5NDQsIDQxLjgyNDI4NSBdLCBbIC03My41MDE5ODQsIDQxLjg1ODcxNyBdLCBbIC03My40OTgzMDQsIDQxLjg5MjUwOCBdLCBbIC03My40OTY1MjcsIDQxLjkyMjM4MCBdLCBbIC03My40OTI5NzUsIDQxLjk1ODUyNCBdLCBbIC03My40ODk2MTUsIDQyLjAwMDA5MiBdLCBbIC03My40ODczMTQsIDQyLjA0OTYzOCBdLCBbIC03My40MzI4MTIsIDQyLjA1MDU4NyBdLCBbIC03My4yOTQ0MjAsIDQyLjA0Njk4NCBdLCBbIC03My4yOTMwOTcsIDQyLjA0Njk0MCBdLCBbIC03My4yMzEwNTYsIDQyLjA0NDk0NSBdLCBbIC03My4yMjk3OTgsIDQyLjA0NDg3NyBdLCBbIC03My4wNTMyNTQsIDQyLjAzOTg2MSBdLCBbIC03Mi45OTk1NDksIDQyLjAzODY1MyBdLCBbIC03Mi44NjM3MzMsIDQyLjAzNzcxMCBdLCBbIC03Mi44NjM2MTksIDQyLjAzNzcwOSBdLCBbIC03Mi44NDcxNDIsIDQyLjAzNjg5NCBdLCBbIC03Mi44MTM1NDEsIDQyLjAzNjQ5NCBdLCBbIC03Mi44MTY3NDEsIDQxLjk5NzU5NSBdLCBbIC03Mi43NjY3MzksIDQyLjAwMjk5NSBdLCBbIC03Mi43NjYxMzksIDQyLjAwNzY5NSBdLCBbIC03Mi43NjMyNjUsIDQyLjAwOTc0MiBdLCBbIC03Mi43NjMyMzgsIDQyLjAxMjc5NSBdLCBbIC03Mi43NjEyMzgsIDQyLjAxNDU5NSBdLCBbIC03Mi43NTk3MzgsIDQyLjAxNjk5NSBdLCBbIC03Mi43NjEzNTQsIDQyLjAxODE4MyBdLCBbIC03Mi43NjIzMTAsIDQyLjAxOTc3NSBdLCBbIC03Mi43NjIxNTEsIDQyLjAyMTUyNyBdLCBbIC03Mi43NjA1NTgsIDQyLjAyMTg0NiBdLCBbIC03Mi43NTgxNTEsIDQyLjAyMDg2NSBdLCBbIC03Mi43NTc0NjcsIDQyLjAyMDk0NyBdLCBbIC03Mi43NTQwMzgsIDQyLjAyNTM5NSBdLCBbIC03Mi43NTE3MzgsIDQyLjAzMDE5NSBdLCBbIC03Mi43NTM1MzgsIDQyLjAzMjA5NSBdLCBbIC03Mi43NTc1MzgsIDQyLjAzMzI5NSBdLCBbIC03Mi43NTU4MzgsIDQyLjAzNjE5NSBdLCBbIC03Mi42OTU5MjcsIDQyLjAzNjc4OCBdLCBbIC03Mi42NDMxMzQsIDQyLjAzMjM5NSBdLCBbIC03Mi42MDc5MzMsIDQyLjAzMDc5NSBdLCBbIC03Mi42MDY5MzMsIDQyLjAyNDk5NSBdLCBbIC03Mi41OTAyMzMsIDQyLjAyNDY5NSBdLCBbIC03Mi41ODIzMzIsIDQyLjAyNDY5NSBdLCBbIC03Mi41NzMyMzEsIDQyLjAzMDE0MSBdLCBbIC03Mi41MjgxMzEsIDQyLjAzNDI5NSBdLCBbIC03Mi40NTY2ODAsIDQyLjAzMzk5OSBdLCBbIC03Mi4zMTcxNDgsIDQyLjAzMTkwNyBdLCBbIC03Mi4yNDk1MjMsIDQyLjAzMTYyNiBdLCBbIC03Mi4xMzU2ODcsIDQyLjAzMDI0NSBdLCBbIC03Mi4wNjM0OTYsIDQyLjAyNzM0NyBdLCBbIC03MS45ODczMjYsIDQyLjAyNjg4MCBdLCBbIC03MS44OTA3ODAsIDQyLjAyNDM2OCBdLCBbIC03MS44MDA2NTAsIDQyLjAyMzU2OSBdLCBbIC03MS43OTkyNDIsIDQyLjAwODA2NSBdLCBbIC03MS43OTc5MjIsIDQxLjkzNTM5NSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MTEwMSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MDE0MSBdLCBbIC03MS43OTI3ODYsIDQxLjgwODY3MCBdLCBbIC03MS43OTI3NjcsIDQxLjgwNzAwMSBdLCBbIC03MS43OTEwNjIsIDQxLjc3MDI3MyBdLCBbIC03MS43ODk2NzgsIDQxLjcyNDczNCBdLCBbIC03MS43ODY5OTQsIDQxLjY1NTk5MiBdLCBbIC03MS43ODkzNTYsIDQxLjU5NjkxMCBdLCBbIC03MS43OTc2ODMsIDQxLjQxNjcwOSBdLCBbIC03MS44MTgzOTAsIDQxLjQxOTU5OSBdLCBbIC03MS44Mzk2NDksIDQxLjQxMjExOSBdLCBbIC03MS44NDI1NjMsIDQxLjQwOTg1NSBdLCBbIC03MS44NDM0NzIsIDQxLjQwNTgzMCBdLCBbIC03MS44NDIxMzEsIDQxLjM5NTM1OSBdLCBbIC03MS44MzM0NDMsIDQxLjM4NDUyNCBdLCBbIC03MS44MzE2MTMsIDQxLjM3MDg5OSBdLCBbIC03MS44Mzc3MzgsIDQxLjM2MzUyOSBdLCBbIC03MS44MzU5NTEsIDQxLjM1MzkzNSBdLCBbIC03MS44Mjk1OTUsIDQxLjM0NDU0NCBdLCBbIC03MS44MzkwMTMsIDQxLjMzNDA0MiBdLCBbIC03MS44NjA1MTMsIDQxLjMyMDI0OCBdLCBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdIF0gXSwgWyBbIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0sIFsgLTczLjQwMzYxMCwgNDEuMDYyNjg3IF0sIFsgLTczLjM2Nzg1OSwgNDEuMDg4MTIwIF0sIFsgLTczLjM1MjA1MSwgNDEuMDg4MTIwIF0sIFsgLTczLjM4NTczNSwgNDEuMDU5MjUwIF0sIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0gXSBdIF0gfSB9"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"State of CT Area"
</td></tr>
<tr><td>address.state</td><td>
"CT"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-Acme-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"Acme"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.acmeofct.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/org-description"
</td></tr>
<tr><td>extension[0].valueString</td><td>
"Acme of CT is a leading provider of health and other insurance products."
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Acme of CT"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>address[0].line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Norwalk"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeCTPreferredProviderNetwork-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeCTPreferredProviderNetwork"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].valueReference.reference</td><td>
"Organization/PayerOrganizationA"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Kawasaki"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Jane"</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/PayerOrganizationA"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>name</td><td>
"ACME CT Preferred Provider Network"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeCTPremiumNetwork-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeCTPremiumNetwork"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].valueReference.reference</td><td>
"PayerOrganizationA"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Kawasaki"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Jane"</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/AcmeOrganization"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>name</td><td>
"ACME CT Premium Preferred Provider Network"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeCTStandardNetwork-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeCTStandardNetwork"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].valueReference.reference</td><td>
"PayerOrganizationA"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Kawasaki"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Jane"</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/AcmeOrganization"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>name</td><td>
"ACME CT Preferred Provider Network"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeOfCTPremiumNetwork-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeOfCTPremiumNetwork"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].valueReference.reference</td><td>
"Organization/AcmeOrganization"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Kawasaki"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Jane"</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/AcmeOrganization"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>name</td><td>
"ACME CT Premium Preferred Provider Network"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeofCTPremNet-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeofCTPremNet"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].valueReference.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Kawasaki"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Jane"</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/location-reference"
</td></tr>
<tr><td>extension[0].valueReference.reference</td><td>
"Location/StateOfCTLocation"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#ntwk
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Network"
</td></tr>
<tr><td>name</td><td>
"ACME CT Premium Preferred Provider Network"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeOfCTStandardNetwork-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].valueReference.reference</td><td>
"Organization/AcmeOrganization"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Kawasaki"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Jane"</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/AcmeOrganization"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>name</td><td>
"ACME CT Preferred Provider Network"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeofCTStdNet-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeofCTStdNet"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/via-intermediary"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].valueReference.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Kawasaki"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Jane"</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/Acme"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#ntwk
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Network"
</td></tr>
<tr><td>name</td><td>
"ACME CT Preferred Provider Network"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-AcmeOrganization-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"AcmeOrganization"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.acmeofct.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Acme of CT"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>address[0].line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Norwalk"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-BigBox-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"BigBox"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.bixboxretailer.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Big Box Retailer"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#bus
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Non-Healthcare Business"
</td></tr>
<tr><td>address[0].line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Norwalk"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-BurrClinic-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"BurrClinic"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI999
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Burr Clinic"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.burrclinic.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-BurrClinicOrganization-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"BurrClinicOrganization"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI999
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Burr Clinic"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.burrclinic.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-CancerClinic-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"CancerClinic"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI788
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hamilton Clinic"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.Hospital.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-ConnHIE-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"ConnHIE"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Connecticut HIE"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.connhie.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#atyprv
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Atypical Provider"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-HamiltonClinic-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"HamiltonClinic"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI78
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hamilton Clinic"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/Hospital"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hartfordgeneralhospital.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-HamiltonClinicOrganization-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"HamiltonClinicOrganization"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI78
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hamilton Clinic"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/HartfordGeneralHospital"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hartfordgeneralhospital.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-HartfordCancerClinicLLCOrganization-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"HartfordCancerClinicLLCOrganization"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI788
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hamilton Clinic"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hartfordgeneralhospital.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-HartfordGeneralHospital-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"HartfordGeneralHospital"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI456
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hartford General Hospital"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hartfordgeneralhospital.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Hartford"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-HartfordOrthopedics-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"HartfordOrthopedics"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI456
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hartford Orthopedics Services"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#prvgrp
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Provider Group"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-HartfordOrthopedicServices-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"HartfordOrthopedicServices"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI456
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hartford Orthopedics Services"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-HartfordOrthopedicServicesOrganization-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"HartfordOrthopedicServicesOrganization"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI456
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.orga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].url</td><td>
"allDay"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].valueBoolean</td><td>
"true"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[0].valueCode</td><td>
"sat"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[1].valueCode</td><td>
"sun"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[2].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[2].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[3].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].extension[3].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hartford Orthopedics Services"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#prvgrp
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Provider Group"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Anytown"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-Hospital-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"Hospital"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI456
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Hartford General Hospital"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.hartfordgeneralhospital.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Hartford"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>contact[0].telecom[0].rank</td><td>
"1"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-OrganizationB-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"OrganizationB"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.bixboxretailer.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Big Box Retailer"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#bus
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Non-Healthcare business"
</td></tr>
<tr><td>address[0].line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Norwalk"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-PayerOrganizationA-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"PayerOrganizationA"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.acmeofct.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Acme of CT"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>address[0].line[0]</td><td>"456 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Norwalk"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-PharmacyOrganizationA-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"PharmacyOrganizationA"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI-ORGA
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.pharmorga.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"PharmOrgA"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#prvgrp
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Provider Group"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Norwalk"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-PharmChain-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
<tr><td>id</td><td>
"PharmChain"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI-ORGA
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[5].valueTime</td><td>
"08:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>telecom[0].extension[0].extension[6].valueTime</td><td>
"17:00:00"
</td></tr>
<tr><td>telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
(111)-222-3333
</td></tr>
<tr><td>telecom[0].rank</td><td>
"2"
</td></tr>
<tr><td>telecom[1].system</td><td>
"url"
</td></tr>
<tr><td>telecom[1].value</td><td>
https://www.pharmchain.com
</td></tr>
<tr><td>telecom[1].rank</td><td>
"1"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name</td><td>
"Pharm Chain"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#prvgrp
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Provider Group"
</td></tr>
<tr><td>address[0].line[0]</td><td>"123 Main Street"</td></tr>
<tr><td>address[0].city</td><td>
"Norwalk"
</td></tr>
<tr><td>address[0].state</td><td>
"CT"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00014-1234"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-plannet-network-HPID010000-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-network-HPID010000"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Network"</td></tr>
<tr><td>identifier[0].use</td><td>
"official"
</td></tr>
<tr><td>identifier[0].type.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0203"
</td></tr>
<tr><td>identifier[0].type.coding[0].code</td><td>
#NIIP
</td></tr>
<tr><td>identifier[0].type.coding[0].display</td><td>
"National Insurance Payor Identifier (Payor)"
</td></tr>
<tr><td>identifier[0].type.coding[0].userSelected</td><td>
"true"
</td></tr>
<tr><td>identifier[0].type.text</td><td>
"The Health Plan Identifier (HPID)"
</td></tr>
<tr><td>identifier[0].system</td><td>
"https://www.qhpcertification.cms.gov/s/QHP"
</td></tr>
<tr><td>identifier[0].value</td><td>
HPID010000
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"Centers for Medicare and Medicaid Services"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#payer
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Payer"
</td></tr>
<tr><td>type[0].text</td><td>
"A healthcare payer"
</td></tr>
<tr><td>name</td><td>
"Acme of Massechusetts Preferred Provider Network"
</td></tr>
<tr><td>address[0].use</td><td>
"work"
</td></tr>
<tr><td>address[0].type</td><td>
"both"
</td></tr>
<tr><td>address[0].text</td><td>
"120 St James Ave, Boston, MA 02101"
</td></tr>
<tr><td>address[0].line[0]</td><td>"120 St James Ave"</td></tr>
<tr><td>address[0].city</td><td>
"Boston"
</td></tr>
<tr><td>address[0].state</td><td>
"MA"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"02101"
</td></tr>
<tr><td>address[0].country</td><td>
"USA"
</td></tr>
<tr><td>partOf.reference</td><td>
"Organization/plannet-organization-1230210000"
</td></tr>
<tr><td>partOf.display</td><td>
"Acme Insurance Co"
</td></tr>
<tr><td>contact[0].purpose.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/contactentity-type"
</td></tr>
<tr><td>contact[0].purpose.coding[0].code</td><td>
#ADMIN
</td></tr>
<tr><td>contact[0].purpose.coding[0].display</td><td>
"Administrative"
</td></tr>
<tr><td>contact[0].name.use</td><td>
"official"
</td></tr>
<tr><td>contact[0].name.text</td><td>
"Sandy Stark"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Stark"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Sandy"</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].valueTime</td><td>
"07:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[6].valueTime</td><td>
"18:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
573.176.3811 x181
</td></tr>
<tr><td>contact[0].telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>contact[0].address.use</td><td>
"work"
</td></tr>
<tr><td>contact[0].address.type</td><td>
"both"
</td></tr>
<tr><td>contact[0].address.text</td><td>
"120 St James Ave, Boston, MA 02101"
</td></tr>
<tr><td>contact[0].address.line[0]</td><td>"120 St James Ave"</td></tr>
<tr><td>contact[0].address.city</td><td>
"Boston"
</td></tr>
<tr><td>contact[0].address.state</td><td>
"MA"
</td></tr>
<tr><td>contact[0].address.postalCode</td><td>
"02101"
</td></tr>
<tr><td>contact[0].address.country</td><td>
"USA"
</td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-plannet-organization-1238962430-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-organization-1238962430"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>identifier[0].use</td><td>
"official"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
1238962430
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"Centers for Medicare and Medicaid Services"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#prvgrp
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Provider Group"
</td></tr>
<tr><td>type[0].text</td><td>
"A healthcare provider entity"
</td></tr>
<tr><td>name</td><td>
"START INC"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
119-122-2049 x85392
</td></tr>
<tr><td>telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>telecom[1].system</td><td>
"fax"
</td></tr>
<tr><td>telecom[1].value</td><td>
293-431-4583 x313
</td></tr>
<tr><td>telecom[1].use</td><td>
"work"
</td></tr>
<tr><td>address[0].extension[0].extension[0].url</td><td>
"latitude"
</td></tr>
<tr><td>address[0].extension[0].extension[0].valueDecimal</td><td>
"39.78373"
</td></tr>
<tr><td>address[0].extension[0].extension[1].url</td><td>
"longitude"
</td></tr>
<tr><td>address[0].extension[0].extension[1].valueDecimal</td><td>
"-100.445882"
</td></tr>
<tr><td>address[0].extension[0].url</td><td>
"http://hl7.org/fhir/StructureDefinition/geolocation"
</td></tr>
<tr><td>address[0].use</td><td>
"work"
</td></tr>
<tr><td>address[0].type</td><td>
"both"
</td></tr>
<tr><td>address[0].text</td><td>
"4716 OLD GETTYSBURG RD., LEGAL DEPARTMENT, MECHANICSBURG, PA 170554325"
</td></tr>
<tr><td>address[0].line[0]</td><td>"4716 OLD GETTYSBURG RD."</td></tr>
<tr><td>address[0].line[1]</td><td>"LEGAL DEPARTMENT"</td></tr>
<tr><td>address[0].city</td><td>
"MECHANICSBURG"
</td></tr>
<tr><td>address[0].state</td><td>
"PA"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"170554325"
</td></tr>
<tr><td>address[0].country</td><td>
"USA"
</td></tr>
<tr><td>contact[0].purpose.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/contactentity-type"
</td></tr>
<tr><td>contact[0].purpose.coding[0].code</td><td>
#ADMIN
</td></tr>
<tr><td>contact[0].purpose.coding[0].display</td><td>
"Administrative"
</td></tr>
<tr><td>contact[0].name.use</td><td>
"official"
</td></tr>
<tr><td>contact[0].name.text</td><td>
"Tad Johns"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Johns"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Tad"</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].valueTime</td><td>
"07:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[6].valueTime</td><td>
"18:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
119-122-2049 x85392
</td></tr>
<tr><td>contact[0].telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>contact[0].address.use</td><td>
"work"
</td></tr>
<tr><td>contact[0].address.type</td><td>
"both"
</td></tr>
<tr><td>contact[0].address.text</td><td>
"4716 OLD GETTYSBURG RD., LEGAL DEPARTMENT, MECHANICSBURG, PA 170554325"
</td></tr>
<tr><td>contact[0].address.line[0]</td><td>"4716 OLD GETTYSBURG RD."</td></tr>
<tr><td>contact[0].address.line[1]</td><td>"LEGAL DEPARTMENT"</td></tr>
<tr><td>contact[0].address.city</td><td>
"MECHANICSBURG"
</td></tr>
<tr><td>contact[0].address.state</td><td>
"PA"
</td></tr>
<tr><td>contact[0].address.postalCode</td><td>
"170554325"
</td></tr>
<tr><td>contact[0].address.country</td><td>
"USA"
</td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Organization-plannet-organization-f91a1076447b859c6c436752e-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-organization-f91a1076447b859c6c436752e"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"</td></tr>
<tr><td>identifier[0].use</td><td>
"official"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://i.made/this/up"
</td></tr>
<tr><td>identifier[0].value</td><td>
171252
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>type[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS"
</td></tr>
<tr><td>type[0].coding[0].code</td><td>
#fac
</td></tr>
<tr><td>type[0].coding[0].display</td><td>
"Facility"
</td></tr>
<tr><td>type[0].text</td><td>
"A physical healthcare facility."
</td></tr>
<tr><td>name</td><td>
"ROTARY DRUG"
</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
664-449-4062 x832
</td></tr>
<tr><td>telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>telecom[1].system</td><td>
"fax"
</td></tr>
<tr><td>telecom[1].value</td><td>
1-751-640-8182 x140
</td></tr>
<tr><td>telecom[1].use</td><td>
"work"
</td></tr>
<tr><td>address[0].extension[0].extension[0].url</td><td>
"latitude"
</td></tr>
<tr><td>address[0].extension[0].extension[0].valueDecimal</td><td>
"41.54454"
</td></tr>
<tr><td>address[0].extension[0].extension[1].url</td><td>
"longitude"
</td></tr>
<tr><td>address[0].extension[0].extension[1].valueDecimal</td><td>
"-73.209002"
</td></tr>
<tr><td>address[0].extension[0].url</td><td>
"http://hl7.org/fhir/StructureDefinition/geolocation"
</td></tr>
<tr><td>address[0].use</td><td>
"work"
</td></tr>
<tr><td>address[0].type</td><td>
"both"
</td></tr>
<tr><td>address[0].text</td><td>
",  00000"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"00000"
</td></tr>
<tr><td>address[0].country</td><td>
"USA"
</td></tr>
<tr><td>contact[0].purpose.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/contactentity-type"
</td></tr>
<tr><td>contact[0].purpose.coding[0].code</td><td>
#ADMIN
</td></tr>
<tr><td>contact[0].purpose.coding[0].display</td><td>
"Administrative"
</td></tr>
<tr><td>contact[0].name.use</td><td>
"official"
</td></tr>
<tr><td>contact[0].name.text</td><td>
"Ken Lehner"
</td></tr>
<tr><td>contact[0].name.family</td><td>
"Lehner"
</td></tr>
<tr><td>contact[0].name.given[0]</td><td>"Ken"</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[0].valueCode</td><td>
"mon"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[1].valueCode</td><td>
"tue"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[2].valueCode</td><td>
"wed"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[3].valueCode</td><td>
"thu"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].url</td><td>
"daysOfWeek"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[4].valueCode</td><td>
"fri"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].url</td><td>
"availableStartTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[5].valueTime</td><td>
"07:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[6].url</td><td>
"availableEndTime"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].extension[6].valueTime</td><td>
"18:00:00"
</td></tr>
<tr><td>contact[0].telecom[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
</td></tr>
<tr><td>contact[0].telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>contact[0].telecom[0].value</td><td>
664-449-4062 x832
</td></tr>
<tr><td>contact[0].telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>contact[0].address.use</td><td>
"work"
</td></tr>
<tr><td>contact[0].address.type</td><td>
"both"
</td></tr>
<tr><td>contact[0].address.text</td><td>
",  00000"
</td></tr>
<tr><td>contact[0].address.postalCode</td><td>
"00000"
</td></tr>
<tr><td>contact[0].address.country</td><td>
"USA"
</td></tr>
<tr><td>resourceType</td><td>
"Organization"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-BurrClinicAffil-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"BurrClinicAffil"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#outpatient
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/BurrClinicServices"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/BurrClinic"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc2"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/Hospital"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-BurrClinicAffiliation-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"BurrClinicAffiliation"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#outpatient
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/BurrClinicServices"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/BurrClinicOrganization"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HartfordHospitalLocation2"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/HartfordGeneralHospital"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-ConnHIEAffil-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"ConnHIEAffil"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#bt
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/BurrClinic"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/ConnHIE"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-ConnHIEAffiliation-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"ConnHIEAffiliation"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#bt
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/BurrClinicOrganization"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HartfordHospitalLocation2"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/ConnHIE"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-HamiltonClinicAffil-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"HamiltonClinicAffil"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#outpatient
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/HamiltonClinicServices"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/HamiltonClinic"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc1"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-HamiltonClinicAffiliation-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"HamiltonClinicAffiliation"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#outpatient
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/HamiltonClinicServices"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/HamiltonClinicOrganization"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HartfordHospitalLocation1"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-HartfordOrthopedicAffil-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"HartfordOrthopedicAffil"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#provider
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/organization-role"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/HartfordOrthopedicServices"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/HartfordOrthopedics"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/Hospital"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc1"
</td></tr>
<tr><td>location[1].reference</td><td>
"Location/HospLoc2"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-HartfordOrthopedicServicesAffiliation-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"HartfordOrthopedicServicesAffiliation"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#provider
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/organization-role"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/HartfordOrthopedicServices"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/HartfordOrthopedicServicesOrganization"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/HartfordGeneralHospital"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HartfordHospitalLocation1"
</td></tr>
<tr><td>location[1].reference</td><td>
"Location/HartfordHospitalLocation2"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-PharmacyOrganizationAffiliation1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"PharmacyOrganizationAffiliation1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/PharmacyOrganizationA"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/PharmacyAHealthCareService"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmacyLocation1"
</td></tr>
<tr><td>location[1].reference</td><td>
"Location/PharmacyLocation2"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#pharmacy
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-PharmacyOrganizationAffiliation2-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"PharmacyOrganizationAffiliation2"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/PharmacyOrganizationA"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/CompoundingPharmacyHealthCareService"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmacyLocation1"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#pharmacy
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-PharmChainAffil1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"PharmChainAffil1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/PharmChain"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/PharmChainRetailService"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmLoc1"
</td></tr>
<tr><td>location[1].reference</td><td>
"Location/PharmLoc2"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#pharmacy
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336C0003X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Community/Retail Pharmacy"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-PharmChainAffil2-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"PharmChainAffil2"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336C0004X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Compounding Pharmacy"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/PharmChain"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/PharmChainCompService"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/PharmLoc1"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#pharmacy
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-PharmChainAffil3-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
<tr><td>id</td><td>
"PharmChainAffil3"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/PharmChain"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/PharmChainMailService"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#pharmacy
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrganizationAffiliationRoleCS"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#3336M0002X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Mail Order Pharmacy"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-plannet-organizationaffiliation-1238962430-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-organizationaffiliation-1238962430"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>identifier[0].use</td><td>
"secondary"
</td></tr>
<tr><td>identifier[0].type.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0203"
</td></tr>
<tr><td>identifier[0].type.coding[0].code</td><td>
#PRN
</td></tr>
<tr><td>identifier[0].type.coding[0].display</td><td>
"Provider number"
</td></tr>
<tr><td>identifier[0].type.text</td><td>
"Network Provider ID"
</td></tr>
<tr><td>identifier[0].system</td><td>
"https://plannetorganization.com"
</td></tr>
<tr><td>identifier[0].value</td><td>
7acb62471f9898
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"Western Massachusetts HIE"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/plannet-organization-1230040000"
</td></tr>
<tr><td>organization.display</td><td>
"Western Massachusetts HIE"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/plannet-organization-1238962430"
</td></tr>
<tr><td>participatingOrganization.display</td><td>
"START INC"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/plannet-network-HPID030000"
</td></tr>
<tr><td>network[0].display</td><td>
"Massachusetts Persona Preferred Provider Network"
</td></tr>
<tr><td>network[1].reference</td><td>
"Organization/plannet-network-HPID100000"
</td></tr>
<tr><td>network[1].display</td><td>
"State of Massachusetts Preferred Provider Network"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/group-healthcareservice-1238962430"
</td></tr>
<tr><td>healthcareService[0].display</td><td>
"Group"
</td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/OrganizationAffiliation-plannet-organizationaffiliation-f91a1076447b859c6c436752e-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-organizationaffiliation-f91a1076447b859c6c436752e"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-OrganizationAffiliation"</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>participatingOrganization.reference</td><td>
"Organization/plannet-organization-f91a1076447b859c6c436752e"
</td></tr>
<tr><td>participatingOrganization.display</td><td>
"ROTARY DRUG"
</td></tr>
<tr><td>network[0].reference</td><td>
"Organization/plannet-network-HPID010000"
</td></tr>
<tr><td>network[0].display</td><td>
"Acme of Massechusetts Preferred Provider Network"
</td></tr>
<tr><td>network[1].reference</td><td>
"Organization/plannet-network-HPID030000"
</td></tr>
<tr><td>network[1].display</td><td>
"Massachusetts Persona Preferred Provider Network"
</td></tr>
<tr><td>network[2].reference</td><td>
"Organization/plannet-network-HPID100000"
</td></tr>
<tr><td>network[2].display</td><td>
"State of Massachusetts Preferred Provider Network"
</td></tr>
<tr><td>network[3].reference</td><td>
"Organization/plannet-network-HPID020000"
</td></tr>
<tr><td>network[3].display</td><td>
"Green Circle of Massachusetts HMO"
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/organization-role"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#member
</td></tr>
<tr><td>code[0].coding[0].display</td><td>
"Member"
</td></tr>
<tr><td>code[0].text</td><td>
"Pharmacy Provider Member"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/plannet-location-PCY-0008890"
</td></tr>
<tr><td>location[0].display</td><td>
"ROTARY DRUG"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/pharmacy-healthcareservice-f91a1076447b859c6c436752e"
</td></tr>
<tr><td>healthcareService[0].display</td><td>
"Pharmacy"
</td></tr>
<tr><td>resourceType</td><td>
"OrganizationAffiliation"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Practitioner-Counselor-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Practitioner"
</td></tr>
<tr><td>id</td><td>
"Counselor"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI3238
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[0].code.coding[0].display</td><td>
"LPC"
</td></tr>
<tr><td>qualification[0].code.text</td><td>
"IL"
</td></tr>
<tr><td>qualification[0].issuer.display</td><td>
"State of Illinois"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/communication-proficiency"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#30
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name[0].text</td><td>
"Susie Smith, LPC"
</td></tr>
<tr><td>name[0].family</td><td>
"Smith"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Susie"</td></tr>
<tr><td>communication[0].coding[0].code</td><td>
#ru
</td></tr>
<tr><td>communication[0].coding[0].system</td><td>
"urn:ietf:bcp:47"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Practitioner-HansSolo-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Practitioner"
</td></tr>
<tr><td>id</td><td>
"HansSolo"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI3233
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[0].code.coding[0].code</td><td>
#MD
</td></tr>
<tr><td>qualification[0].code.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0360"
</td></tr>
<tr><td>qualification[0].code.text</td><td>
"MD"
</td></tr>
<tr><td>qualification[0].issuer.display</td><td>
"State of Illinois"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[1].code.coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>qualification[1].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[1].code.coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>qualification[1].code.text</td><td>
"Board Certified Internal Medicine"
</td></tr>
<tr><td>qualification[1].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[2].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[2].code.coding[0].code</td><td>
#207RC0000X
</td></tr>
<tr><td>qualification[2].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[2].code.coding[0].display</td><td>
"Cardiovascular Disease Physician"
</td></tr>
<tr><td>qualification[2].code.text</td><td>
"Board Certified Cardiovascular Disease"
</td></tr>
<tr><td>qualification[2].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/communication-proficiency"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#30
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name[0].text</td><td>
"Hans Solo, MD"
</td></tr>
<tr><td>name[0].family</td><td>
"Solo"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Hans"</td></tr>
<tr><td>communication[0].coding[0].code</td><td>
#ja
</td></tr>
<tr><td>communication[0].coding[0].system</td><td>
"urn:ietf:bcp:47"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Practitioner-HansSoloPractitioner-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Practitioner"
</td></tr>
<tr><td>id</td><td>
"HansSoloPractitioner"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI3233
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[0].code.coding[0].code</td><td>
#MD
</td></tr>
<tr><td>qualification[0].code.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0360"
</td></tr>
<tr><td>qualification[0].code.text</td><td>
"MD"
</td></tr>
<tr><td>qualification[0].issuer.display</td><td>
"State of Illinois"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[1].code.coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>qualification[1].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[1].code.coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>qualification[1].code.text</td><td>
"Board Certified Internal Medicine"
</td></tr>
<tr><td>qualification[1].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[2].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[2].code.coding[0].code</td><td>
#207RC0000X
</td></tr>
<tr><td>qualification[2].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[2].code.coding[0].display</td><td>
"CCardiovascular Disease Physician"
</td></tr>
<tr><td>qualification[2].code.text</td><td>
"Board Certified Cardiovascular Disease"
</td></tr>
<tr><td>qualification[2].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/communication-proficiency"
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].code</td><td>
#30
</td></tr>
<tr><td>extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name[0].text</td><td>
"Hans Solo, MD"
</td></tr>
<tr><td>name[0].family</td><td>
"Solo"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Hans"</td></tr>
<tr><td>communication[0].coding[0].code</td><td>
#ja
</td></tr>
<tr><td>communication[0].coding[0].system</td><td>
"urn:ietf:bcp:47"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Practitioner-JoeSmith-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Practitioner"
</td></tr>
<tr><td>id</td><td>
"JoeSmith"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI323
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[0].code.coding[0].code</td><td>
#MD
</td></tr>
<tr><td>qualification[0].code.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0360"
</td></tr>
<tr><td>qualification[0].code.text</td><td>
"MD"
</td></tr>
<tr><td>qualification[0].issuer.display</td><td>
"State of Illinois"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[1].code.coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>qualification[1].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[1].code.coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>qualification[1].code.text</td><td>
"Board Certified Internal Medicine"
</td></tr>
<tr><td>qualification[1].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[2].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[2].code.coding[0].code</td><td>
#207RC0000X
</td></tr>
<tr><td>qualification[2].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[2].code.coding[0].display</td><td>
"Cardiovascular Disease Physician"
</td></tr>
<tr><td>qualification[2].code.text</td><td>
"Board Certified Cardiovascular Disease"
</td></tr>
<tr><td>qualification[2].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>name[0].text</td><td>
"Joe Smith, MD"
</td></tr>
<tr><td>name[0].family</td><td>
"Smith"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Joe"</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Practitioner-JoeSmithPractitioner-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Practitioner"
</td></tr>
<tr><td>id</td><td>
"JoeSmithPractitioner"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI323
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[0].code.coding[0].code</td><td>
#MD
</td></tr>
<tr><td>qualification[0].code.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0360"
</td></tr>
<tr><td>qualification[0].code.text</td><td>
"MD"
</td></tr>
<tr><td>qualification[0].issuer.display</td><td>
"State of Illinois"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[1].code.coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>qualification[1].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[1].code.coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>qualification[1].code.text</td><td>
"Board Certified Internal Medicine"
</td></tr>
<tr><td>qualification[1].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[2].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[2].code.coding[0].code</td><td>
#207RC0000X
</td></tr>
<tr><td>qualification[2].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[2].code.coding[0].display</td><td>
"Cardiovascular Disease Physician"
</td></tr>
<tr><td>qualification[2].code.text</td><td>
"Board Certified Cardiovascular Disease"
</td></tr>
<tr><td>qualification[2].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name[0].text</td><td>
"Joe Smith, MD"
</td></tr>
<tr><td>name[0].family</td><td>
"Smith"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Joe"</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Practitioner-plannet-practitioner-1233011061-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>id</td><td>
"plannet-practitioner-1233011061"
</td></tr>
<tr><td>meta.versionId</td><td>
"1"
</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-08-17T10:03:10Z"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"</td></tr>
<tr><td>identifier[0].use</td><td>
"official"
</td></tr>
<tr><td>identifier[0].type.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0203"
</td></tr>
<tr><td>identifier[0].type.coding[0].code</td><td>
#PRN
</td></tr>
<tr><td>identifier[0].type.coding[0].display</td><td>
"Provider number"
</td></tr>
<tr><td>identifier[0].type.coding[0].userSelected</td><td>
"true"
</td></tr>
<tr><td>identifier[0].type.text</td><td>
"NPI"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
1233011061
</td></tr>
<tr><td>identifier[0].assigner.display</td><td>
"CMS"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name[0].use</td><td>
"official"
</td></tr>
<tr><td>name[0].family</td><td>
"Fay"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Jarvis"</td></tr>
<tr><td>name[0].given[1]</td><td>"Erasmo"</td></tr>
<tr><td>name[0].prefix[0]</td><td>"Dr."</td></tr>
<tr><td>name[0].suffix[0]</td><td>"AU.D."</td></tr>
<tr><td>telecom[0].system</td><td>
"phone"
</td></tr>
<tr><td>telecom[0].value</td><td>
636.559.3621 x96347
</td></tr>
<tr><td>telecom[0].use</td><td>
"work"
</td></tr>
<tr><td>telecom[1].system</td><td>
"fax"
</td></tr>
<tr><td>telecom[1].value</td><td>
256.765.9436 x5117
</td></tr>
<tr><td>telecom[1].use</td><td>
"work"
</td></tr>
<tr><td>address[0].extension[0].extension[0].url</td><td>
"latitude"
</td></tr>
<tr><td>address[0].extension[0].extension[0].valueDecimal</td><td>
"42.550144"
</td></tr>
<tr><td>address[0].extension[0].extension[1].url</td><td>
"longitude"
</td></tr>
<tr><td>address[0].extension[0].extension[1].valueDecimal</td><td>
"-70.877884"
</td></tr>
<tr><td>address[0].extension[0].url</td><td>
"http://hl7.org/fhir/StructureDefinition/geolocation"
</td></tr>
<tr><td>address[0].use</td><td>
"work"
</td></tr>
<tr><td>address[0].type</td><td>
"both"
</td></tr>
<tr><td>address[0].text</td><td>
"266 CABOT ST, P.O. BOX 488, BEVERLY, MA 019153370"
</td></tr>
<tr><td>address[0].line[0]</td><td>"266 CABOT ST"</td></tr>
<tr><td>address[0].line[1]</td><td>"P.O. BOX 488"</td></tr>
<tr><td>address[0].city</td><td>
"BEVERLY"
</td></tr>
<tr><td>address[0].state</td><td>
"MA"
</td></tr>
<tr><td>address[0].postalCode</td><td>
"019153370"
</td></tr>
<tr><td>address[0].country</td><td>
"USA"
</td></tr>
<tr><td>gender</td><td>
"male"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#MA
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].display</td><td>
"Massachusetts"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].userSelected</td><td>
"true"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.text</td><td>
"Massachusetts"
</td></tr>
<tr><td>qualification[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[0].identifier[0].use</td><td>
"official"
</td></tr>
<tr><td>qualification[0].identifier[0].type.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0203"
</td></tr>
<tr><td>qualification[0].identifier[0].type.coding[0].code</td><td>
#MD
</td></tr>
<tr><td>qualification[0].identifier[0].type.coding[0].display</td><td>
"Medical License Number"
</td></tr>
<tr><td>qualification[0].identifier[0].type.text</td><td>
"Medical License Number"
</td></tr>
<tr><td>qualification[0].identifier[0].system</td><td>
"https://www.mass.gov/orgs"
</td></tr>
<tr><td>qualification[0].identifier[0].value</td><td>
123
</td></tr>
<tr><td>qualification[0].identifier[0].assigner.display</td><td>
"Board of Registration in Medicine (BORIM)"
</td></tr>
<tr><td>qualification[0].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[0].code.coding[0].code</td><td>
#231H00000X
</td></tr>
<tr><td>qualification[0].code.coding[0].display</td><td>
"Audiologist"
</td></tr>
<tr><td>qualification[0].code.text</td><td>
"Audiologist"
</td></tr>
<tr><td>qualification[0].period.start</td><td>
"2018-08-17"
</td></tr>
<tr><td>qualification[0].period.end</td><td>
"2021-08-17"
</td></tr>
<tr><td>qualification[0].issuer.display</td><td>
"Board of Registration in Medicine (BORIM)"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].system</td><td>
"https://www.usps.com/"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#MA
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].display</td><td>
"Massachusetts"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].userSelected</td><td>
"true"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.text</td><td>
"Massachusetts"
</td></tr>
<tr><td>qualification[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[1].identifier[0].use</td><td>
"official"
</td></tr>
<tr><td>qualification[1].identifier[0].type.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0203"
</td></tr>
<tr><td>qualification[1].identifier[0].type.coding[0].code</td><td>
#MD
</td></tr>
<tr><td>qualification[1].identifier[0].type.coding[0].display</td><td>
"Medical License Number"
</td></tr>
<tr><td>qualification[1].identifier[0].type.text</td><td>
"Medical License Number"
</td></tr>
<tr><td>qualification[1].identifier[0].system</td><td>
"https://www.mass.gov/orgs"
</td></tr>
<tr><td>qualification[1].identifier[0].value</td><td>
123
</td></tr>
<tr><td>qualification[1].identifier[0].assigner.display</td><td>
"Board of Registration in Medicine (BORIM)"
</td></tr>
<tr><td>qualification[1].code.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[1].code.coding[0].code</td><td>
#237600000X
</td></tr>
<tr><td>qualification[1].code.coding[0].display</td><td>
"Audiologist-Hearing Aid Fitter"
</td></tr>
<tr><td>qualification[1].code.text</td><td>
"Audiologist-Hearing Aid Fitter"
</td></tr>
<tr><td>qualification[1].period.start</td><td>
"2019-11-15"
</td></tr>
<tr><td>qualification[1].period.end</td><td>
"2022-11-15"
</td></tr>
<tr><td>qualification[1].issuer.display</td><td>
"Board of Registration in Medicine (BORIM)"
</td></tr>
<tr><td>communication[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/communication-proficiency"
</td></tr>
<tr><td>communication[0].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/LanguageProficiencyCS"
</td></tr>
<tr><td>communication[0].extension[0].valueCodeableConcept.coding[0].code</td><td>
#50
</td></tr>
<tr><td>communication[0].extension[0].valueCodeableConcept.coding[0].display</td><td>
"Functional native proficiency"
</td></tr>
<tr><td>communication[0].extension[0].valueCodeableConcept.text</td><td>
"Functional native proficiency"
</td></tr>
<tr><td>communication[0].coding[0].system</td><td>
"urn:ietf:bcp:47"
</td></tr>
<tr><td>communication[0].coding[0].code</td><td>
#en
</td></tr>
<tr><td>communication[0].coding[0].display</td><td>
"English"
</td></tr>
<tr><td>communication[0].text</td><td>
"English"
</td></tr>
<tr><td>resourceType</td><td>
"Practitioner"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/Practitioner-PractitionerA-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"Practitioner"
</td></tr>
<tr><td>id</td><td>
"PractitionerA"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Practitioner"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>identifier[0].system</td><td>
"http://hl7.org/fhir/sid/us-npi"
</td></tr>
<tr><td>identifier[0].value</td><td>
NPI323
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[0].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[0].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[0].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[0].code.coding[0].code</td><td>
#MD
</td></tr>
<tr><td>qualification[0].code.coding[0].system</td><td>
"http://terminology.hl7.org/CodeSystem/v2-0360"
</td></tr>
<tr><td>qualification[0].code.text</td><td>
"MD"
</td></tr>
<tr><td>qualification[0].issuer.display</td><td>
"State of Illinois"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[1].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[1].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[1].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[1].code.coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>qualification[1].code.coding[0].system</td><td>
"http://www.nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[1].code.coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>qualification[1].code.text</td><td>
"Board Certified Internal Medicine"
</td></tr>
<tr><td>qualification[1].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].url</td><td>
"status"
</td></tr>
<tr><td>qualification[2].extension[0].extension[0].valueCode</td><td>
"active"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].url</td><td>
"whereValid"
</td></tr>
<tr><td>qualification[2].extension[0].extension[1].valueCodeableConcept.coding[0].code</td><td>
#IL
</td></tr>
<tr><td>qualification[2].extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/practitioner-qualification"
</td></tr>
<tr><td>qualification[2].code.coding[0].code</td><td>
#207RC0000X
</td></tr>
<tr><td>qualification[2].code.coding[0].system</td><td>
"http://www.nucc.org/provider-taxonomy"
</td></tr>
<tr><td>qualification[2].code.coding[0].display</td><td>
"Cardiovascular Disease Physician"
</td></tr>
<tr><td>qualification[2].code.text</td><td>
"Board Certified Cardiovascular Disease"
</td></tr>
<tr><td>qualification[2].issuer.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>name[0].text</td><td>
"Joe Smith, MD"
</td></tr>
<tr><td>name[0].family</td><td>
"Smith"
</td></tr>
<tr><td>name[0].given[0]</td><td>"Joe"</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/PractitionerRole-AnonRole-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"PractitionerRole"
</td></tr>
<tr><td>id</td><td>
"AnonRole"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
</td></tr>
<tr><td>extension[0].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#ph
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/BurrClinicServices"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HospLoc2"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/CancerClinic"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/PractitionerRole-AnonymousPractitionerARole-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"PractitionerRole"
</td></tr>
<tr><td>id</td><td>
"AnonymousPractitionerARole"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
</td></tr>
<tr><td>extension[0].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#ph
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/BurrClinicServices"
</td></tr>
<tr><td>location[0].reference</td><td>
"HartfordHospitalLocation2"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>organization.reference</td><td>
"Organization/HartfordCancerClinicLLCOrganization"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/PractitionerRole-CounselorRole1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"PractitionerRole"
</td></tr>
<tr><td>id</td><td>
"CounselorRole1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
</td></tr>
<tr><td>extension[0].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#co
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS"
</td></tr>
<tr><td>code[0].coding[0].display</td><td>
"Counselor"
</td></tr>
<tr><td>practitioner.reference</td><td>
"Practitioner/Counselor"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/VirtualCounselService"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#101YP2500X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Professional Counselor"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/PractitionerRole-HansSoloPractitionerARole1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"PractitionerRole"
</td></tr>
<tr><td>id</td><td>
"HansSoloPractitionerARole1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
</td></tr>
<tr><td>extension[0].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#ph
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS"
</td></tr>
<tr><td>practitioner.reference</td><td>
"Practitioner/HansSoloPractitioner"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/HansSoloHealthcareService"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HansSoloClinic"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>organization.reference</td><td>
"HartfordGeneralHospital"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/PractitionerRole-HansSoloRole1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"PractitionerRole"
</td></tr>
<tr><td>id</td><td>
"HansSoloRole1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
</td></tr>
<tr><td>extension[0].valueReference.reference</td><td>
"Organization/AcmeofCTStdNet"
</td></tr>
<tr><td>extension[1].extension[0].url</td><td>
"code"
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>extension[1].extension[0].valueCodeableConcept.coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>extension[1].extension[1].url</td><td>
"status"
</td></tr>
<tr><td>extension[1].extension[1].valueCode</td><td>
"active"
</td></tr>
<tr><td>extension[1].extension[2].url</td><td>
"issuer"
</td></tr>
<tr><td>extension[1].extension[2].valueReference.display</td><td>
"American Board of Internal Medicine"
</td></tr>
<tr><td>extension[1].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/qualification"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#ph
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS"
</td></tr>
<tr><td>practitioner.reference</td><td>
"Practitioner/HansSolo"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HealthcareService/HansSoloService"
</td></tr>
<tr><td>location[0].reference</td><td>
"Location/HansSoloClinic"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
</table>


---

File: repos/HL7_SLASH_davinci-pdex-plan-net/input/pagecontent/PractitionerRole-JoeSmithPractitionerARole1-notes.md

<table border="1"><tr><td><b>Field</b></td><td><b>Value</b></td></tr>
<tr><td>resourceType</td><td>
"PractitionerRole"
</td></tr>
<tr><td>id</td><td>
"JoeSmithPractitionerARole1"
</td></tr>
<tr><td>meta.profile[0]</td><td>"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-PractitionerRole"</td></tr>
<tr><td>meta.lastUpdated</td><td>
"2020-07-07T13:26:22.0314215+00:00"
</td></tr>
<tr><td>active</td><td>
"true"
</td></tr>
<tr><td>extension[0].url</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/network-reference"
</td></tr>
<tr><td>extension[0].valueReference.reference</td><td>
"Organization/AcmeOfCTStandardNetwork"
</td></tr>
<tr><td>language</td><td>
"en-US"
</td></tr>
<tr><td>code[0].coding[0].code</td><td>
#ph
</td></tr>
<tr><td>code[0].coding[0].system</td><td>
"http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/ProviderRoleCS"
</td></tr>
<tr><td>practitioner.reference</td><td>
"Practitioner/JoeSmithPractitioner"
</td></tr>
<tr><td>healthcareService[0].reference</td><td>
"HartfordGeneralHospitalEmergencyService"
</td></tr>
<tr><td>location[0].reference</td><td>
"HartfordHospitalLocation1"
</td></tr>
<tr><td>specialty[0].coding[0].code</td><td>
#207R00000X
</td></tr>
<tr><td>specialty[0].coding[0].system</td><td>
"http://nucc.org/provider-taxonomy"
</td></tr>
<tr><td>specialty[0].coding[0].display</td><td>
"Internal Medicine Physician"
</td></tr>
<tr><td>organization.reference</td><td>
"HartfordGeneralHospital"
</td></tr>
</table>


---

