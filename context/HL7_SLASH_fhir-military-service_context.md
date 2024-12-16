File: repos/HL7_SLASH_fhir-military-service/input/fsh/DeploymentHistoryEpisode.fsh

Profile:  DeploymentHistoryEpisode
Parent:   Observation
Id:       deployment-history-episode
Title:    "Deployment History Episode"
Description:   "Deployment History Episode describes a completed deployment."
* category and status and code and subject and effectivePeriod and component and hasMember MS
* id 1..1 
* code 1..1
* code  = MSHCS#f6bb8fdc-89b0-4c0b-8d81-d3916f182c2f "Deployment Episode"
* subject only Reference(USVeteran)
* subject 1..1 MS
* basedOn 0..0
* partOf 0..0
* focus 0..0
* encounter 0..0
* issued 0..0
* performer 0..0
* dataAbsentReason 0..0
* interpretation 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* referenceRange 0..0
* hasMember ^slicing.discriminator.type = #profile // #pattern
* hasMember ^slicing.discriminator.path =  "$this.resolve()" // "$this.resolve().code"
* hasMember ^slicing.rules = #open
* hasMember contains MilitaryOccupation 1..* MS
* hasMember[MilitaryOccupation] only Reference(MilitaryOccupation)
* derivedFrom 0..0
* effective[x] only Period
* effectivePeriod 1..1 
* effectivePeriod.start 1..1
* effectivePeriod.start ^short = "Start date of the completed deployment"
* effectivePeriod.end 1..1 
* effectivePeriod.end ^short = "End date of the completed deployment"
* effectivePeriod ^short = "Period of the completed deployment"
* category.coding = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* note 0..1 
* component ^slicing.discriminator.type = #pattern
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component ^slicing.description = "Slice based on the component.code pattern"
* component contains military-service-DeploymentEpisodeCountryCode 1..1 and 
                     military-service-DeploymentEpisodeMissionCode 0..1 and 
                     military-service-Military-Branch 1..1 

* component[military-service-Military-Branch].code =  LNC#86188-0 "History of Occupation Industry"
* component[military-service-Military-Branch].value[x] only CodeableConcept   
* component[military-service-Military-Branch].value[x] 1..1
* component[military-service-Military-Branch].value[x] from  MilitaryBranchVS (required) //" Subset of Industry CDC Census 2018 Value Set: Industry describes an economic/business sector comprised of businesses/ enterprises concerned with the output of a specified category of products or services (e.g., the construction industry or the agriculture industry). This industry code system includes 2007 U.S. Census Bureau industry codes and three additional codes developed by CDC for unpaid workers. The 2010 Census industry categories are based on the 2007 North American Industry Classification System (NAICS)."
 
//* value[x] only CodeableConcept //Occupation Code associated withe 
//* value[x] from MilitaryOccupationVS (required) //"Subset of Occupation CDC Census 2018 Value SEt: Occupation describes a set of activities or tasks that individuals are paid to perform or, if unpaid, define a person’s contribution to a household/family business/community. This code system includes 2010 U.S. Census Bureau occupation codes with modifications made by CDC for unpaid workers and military occupations. The 2010 Census occupation categories are based on the 2010 BLS Standard Occupational Classification (SOC) system. The PH_Industry_CDC_Census2010 code system should be used in conjunction with this occupation code system when coding both industry and occupation. For more information and instructions on using this coding system, see the instruction manual for CDC-Census I&O coding at: http://www.cdc.gov/niosh/topics/coding/"


* component[military-service-DeploymentEpisodeCountryCode].code =  MSHCS#7E33243654BB42F5BF3F3A59E0E6E6BD "Deployment Episode Country Code"
* component[military-service-DeploymentEpisodeCountryCode].value[x] only CodeableConcept
* component[military-service-DeploymentEpisodeCountryCode].value[x] 1..1
* component[military-service-DeploymentEpisodeCountryCode].value[x] from http://hl7.org/fhir/ValueSet/iso3166-1-3 (required)
* component[military-service-DeploymentEpisodeCountryCode].dataAbsentReason 0..1
* component[military-service-DeploymentEpisodeCountryCode].interpretation 0..0
* component[military-service-DeploymentEpisodeCountryCode].referenceRange 0..0

* component[military-service-DeploymentEpisodeMissionCode].code =  MSHCS#BF3432CC716B4DC7AA0DF43C176F4F05 "Deployment Episode Mission Code"
* component[military-service-DeploymentEpisodeMissionCode].value[x] only CodeableConcept
* component[military-service-DeploymentEpisodeMissionCode].value[x] 1..1
* component[military-service-DeploymentEpisodeMissionCode].value[x] from DeploymentEpisodeMissionVS (example)
* component[military-service-DeploymentEpisodeMissionCode].dataAbsentReason 0..1
* component[military-service-DeploymentEpisodeMissionCode].interpretation 0..0
* component[military-service-DeploymentEpisodeMissionCode].referenceRange 0..0




---

File: repos/HL7_SLASH_fhir-military-service/input/fsh/Examples.fsh

Instance: philip-scott-example-veteran
InstanceOf: USVeteran
Description: "Phillip Scott: Veteran's patient record"	
* meta.profile = "http://hl7.org/fhir/us/military-service/StructureDefinition/usveteran"	
* identifier.use = #usual	
* identifier.value = "1032702"	
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MR
* identifier.type.coding.display = "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "urn:oid:1.1.1.1.1"
* name[0].family = "Philip"	
* name[0].given[0] = "Scott"	
* name[0].given[1] = "Example"	
* gender = #male	
* active = true
* birthDate = "1954-01-22"
* extension[USVeteranStatus].valueBoolean = true
* extension[race].extension[ombCategory].valueCoding = OmbRaceCat#2054-5 "Black or African American"
* extension[race].extension[detailed].valueCoding = OmbRaceCat#2036-2 "Filipino"
* extension[race].extension[text].valueString = "Mixed"
* extension[ethnicity].extension[ombCategory].valueCoding = OmbRaceCat#2135-2 "Hispanic or Latino"
* extension[ethnicity].extension[detailed].valueCoding = OmbRaceCat#2184-0 "Dominican"
* extension[ethnicity].extension[text].valueString = "Hispanic or Latino"
* extension[birthsex].valueCode = #M
* address[0].line[0] = "49 Pleasant Hill St"
* address[0].city = "Anytowm"
* address[0].state =  "NH"
* address[0].country =  "US"
* address[0].postalCode =  "03088"
* address[0].period.start = "2016-12-06"
* address[0].period.end = "2020-07-22"
* address[1].line[0] = "183 Mountain View St"
* address[1].city = "Anytown"
* address[1].state =  "NH"
* address[1].country =  "US"
* address[1].postalCode =  "03088"
* address[1].period.start = "2020-07-22"
* telecom[0].system = #phone
* telecom[0].value = "555-555-5555"
* telecom[0].use = #home
* telecom[1].system = #email
* telecom[1].value = "sam.share@veterans-org.com"

Instance: hugo-cross-example-veteran
InstanceOf: USVeteran
Description: "Hugo Cross: Veteran's patient record"	
* meta.profile = "http://hl7.org/fhir/us/military-service/StructureDefinition/usveteran"	
* identifier.use = #usual	
* identifier.value = "1032702"	
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MR
* identifier.type.coding.display = "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "urn:oid:1.1.1.1.1"
* name[0].family = "Cross"	
* name[0].given[0] = "Hugo"	
* name[0].given[1] = "Example"	
* name[0].suffix[0] = "Ssgt"
* name[0].period.start = "2016-12-06"
* name[0].period.end = "2020-07-22"
* gender = #male	
* active = true
* birthDate = "1972-02-12"
* extension[USVeteranStatus].valueBoolean = true
* extension[race].extension[ombCategory].valueCoding = OmbRaceCat#2106-3 "White"
* extension[race].extension[detailed].valueCoding = OmbRaceCat#2036-2 "Filipino"
* extension[race].extension[text].valueString = "Mixed"
* extension[ethnicity].extension[ombCategory].valueCoding = OmbRaceCat#2135-2 "Hispanic or Latino"
* extension[ethnicity].extension[detailed].valueCoding = OmbRaceCat#2184-0 "Dominican"
* extension[ethnicity].extension[text].valueString = "Hispanic or Latino"
* extension[birthsex].valueCode = #M
* address[0].line[0] = "49 Pleasant Hill St"
* address[0].city = "Anytowm"
* address[0].state =  "NH"
* address[0].country =  "US"
* address[0].postalCode =  "03088"
* address[0].period.start = "2016-12-06"
* address[0].period.end = "2020-07-22"
* address[1].line[0] = "183 Mountain View St"
* address[1].city = "Anytown"
* address[1].state =  "NH"
* address[1].country =  "US"
* address[1].postalCode =  "03088"
* address[1].period.start = "2020-07-22"
* telecom[0].system = #phone
* telecom[0].value = "555-555-5555"
* telecom[0].use = #home
* telecom[1].system = #email
* telecom[1].value = "sam.share@veterans-org.com"

Instance: huffman-crystal-example-veteran
InstanceOf: USVeteran
Description: "Sam Share: Veteran's patient record"	
* meta.profile = "http://hl7.org/fhir/us/military-service/StructureDefinition/usveteran"	
* identifier.use = #usual	
* identifier.value = "1032702"	
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MR
* identifier.type.coding.display = "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "urn:oid:1.1.1.1.1"
* name[0].family = "Huffman"	
* name[0].given[0] = "Crystal"	
* name[0].given[1] = "Example"	
* name[0].suffix[0] = "Ssgt"
* name[0].period.start = "2016-12-06"
* name[0].period.end = "2020-07-22"
* gender = #female	
* active = true
* birthDate = "1992-02-20"
* extension[USVeteranStatus].valueBoolean = true
* extension[race].extension[ombCategory].valueCoding = OmbRaceCat#2106-3 "White"
* extension[race].extension[detailed].valueCoding = OmbRaceCat#2036-2 "Filipino"
* extension[race].extension[text].valueString = "Mixed"
* extension[ethnicity].extension[ombCategory].valueCoding = OmbRaceCat#2135-2 "Hispanic or Latino"
* extension[ethnicity].extension[detailed].valueCoding = OmbRaceCat#2184-0 "Dominican"
* extension[ethnicity].extension[text].valueString = "Hispanic or Latino"
* extension[birthsex].valueCode = #M
* address[0].line[0] = "49 Pleasant Hill St"
* address[0].city = "Anytowm"
* address[0].state =  "NH"
* address[0].country =  "US"
* address[0].postalCode =  "03088"
* address[0].period.start = "2016-12-06"
* address[0].period.end = "2020-07-22"
* address[1].line[0] = "183 Mountain View St"
* address[1].city = "Anytown"
* address[1].state =  "NH"
* address[1].country =  "US"
* address[1].postalCode =  "03088"
* address[1].period.start = "2020-07-22"
* telecom[0].system = #phone
* telecom[0].value = "555-555-5555"
* telecom[0].use = #home
* telecom[1].system = #email
* telecom[1].value = "sam.share@veterans-org.com"


Instance: philip-scott-example-military-service-episode
InstanceOf: MilitaryServiceEpisode	
Description: "Military Service Episode for Veteran Example, Philip Scott"
* status = #final "final"
* subject = Reference(philip-scott-example-veteran)
* effectivePeriod.start = "1971-04-01"
* effectivePeriod.end = "1973-04-01"
* hasMember[DeploymentHistoryEpisode] = Reference(philip-scott-example-deployment-history-episode)
* component[military-service-Military-Branch].valueCodeableConcept = MSHCS#928110.010506	"Marine Corps [National Security ]"
* component[military-service-DischargeStatus].valueCodeableConcept = MSHCS#79A512F77CFC4E63B9969930FC8787DB "Honorable"
* component[military-service-SeparationReason].valueCodeableConcept = MSHCS#035 "COMPLETION OF REQUIRED ACTIVE SERVICE"


Instance: philip-scott-example-deployment-history-episode
InstanceOf: DeploymentHistoryEpisode
Description: "Deployment to Vietnam"	
* id = "philip-scott-example-deployment-history-episode"	
* status = #final "final"
* subject = Reference(philip-scott-example-veteran)
* hasMember = Reference(philip-scott-example-military-occupation)
* effectivePeriod.start = "1991-07-01"
* effectivePeriod.end = "1993-07-01"
* component[military-service-Military-Branch].valueCodeableConcept = MSHCS#928110.010506	"Marine Corps [National Security ]"
* component[military-service-DeploymentEpisodeCountryCode].valueCodeableConcept = urn:iso:std:iso:3166#VNM
* component[military-service-DeploymentEpisodeMissionCode].valueCodeableConcept = MSHCS#46a15b13-b5c1-4ae8-acde-48c31f30175a "Enduring Freedom"
 

Instance: philip-scott-example-military-occupation
InstanceOf: MilitaryOccupation
Description: "Example Military Occupation"	
* id = "philip-scott-example-military-occupation"	
* status = #final "final"
* subject = Reference(philip-scott-example-veteran)
* effectivePeriod.start = "1971-07-01"
* effectivePeriod.end = "1972-07-01"
//* component[military-service-payGrade].valueCodeableConcept = MSHCS#O-4 "US Military Commissioned Officer paygrade O-4"
* valueCodeableConcept =  MSHCS#55-3019.00.025711 "Marine [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"



// Instance: DeploymentHistoryEpisode2	
// InstanceOf: DeploymentHistoryEpisode
// Description: "Deployment to Iraq"	
// * id = "DeploymentHistoryEpisode2"	
// * status = #final "final"
// * subject = Reference(sam-share-ssgt-veteran)
// * effectivePeriod.start = "2019-02-01"
// * effectivePeriod.end = "2019-11-15"
// * component[military-service-DeploymentEpisodeCountryCode].valueCodeableConcept = urn:iso:std:iso:3166#IRQ
// * component[military-service-DeploymentEpisodeMissionCode].valueCodeableConcept = SOLOR#46a15b13-b5c1-4ae8-acde-48c31f30175a "Enduring Freedom"


// Instance: DeploymentHistoryEpisode3
// InstanceOf: DeploymentHistoryEpisode
// Description: "DeploymentHistoryEpisode Example"	
// * id = "DeploymentHistoryEpisode"	
// * status = #final "final"
// * subject = Reference(sam-share-ssgt-veteran)
// * effectivePeriod.start = "2019-04-01"
// * effectivePeriod.end = "2019-04-01"
// * component[military-service-DeploymentEpisodeCountryCode].valueCodeableConcept = urn:iso:std:iso:3166#IRQ
// * component[military-service-DeploymentEpisodeMissionCode].valueCodeableConcept = SOLOR#46a15b13-b5c1-4ae8-acde-48c31f30175a "Enduring Freedom"

---

File: repos/HL7_SLASH_fhir-military-service/input/fsh/MilitaryOccupation.fsh

Alias: USCorePatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient

Profile:  MilitaryOccupation
Parent:    Observation
Id:       military-service-Occupation
Title:    "Military Occupation"
Description:   "The profile reuses the ODH PastOrPresentJob profile to apply it specifically to military jobs/occupations.
The observation resource that conforms to this specification is referenced by Military Service Episode."
* category and status and code and subject and effectivePeriod and component and valueCodeableConcept MS
* id 1..1 
* code 1..1 MS
* code  = LNC#11341-5 "History of Occupation"
* subject only Reference(USVeteran)
* subject 1..1 MS
* basedOn 0..0
* partOf 0..0
* focus 0..0
* encounter 0..0
* issued 0..0
* performer 0..0
* dataAbsentReason 0..0
* interpretation 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* derivedFrom 0..0
* effective[x] only Period
* effectivePeriod 1..1 
* effectivePeriod.start 1..1
* effectivePeriod.start ^short = "Start date of the completed deployment"
* effectivePeriod.end 1..1 
* effectivePeriod.end ^short = "End date of the completed deployment"
* effectivePeriod ^short = "Period of the completed deployment"
* category.coding = http://terminology.hl7.org/CodeSystem/observation-category#social-history
* note 0..1 
* component ^slicing.discriminator.type = #pattern
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component ^slicing.description = "Slice based on the component.code pattern"
* component contains military-service-payGrade 0..1 MS
* component[military-service-payGrade].code =  LNC#87707-6 "Job supervisory level or pay grade"
* component[military-service-payGrade].value[x] only CodeableConcept
* component[military-service-payGrade].value[x] 0..1 MS
* component[military-service-payGrade].value[x] from PayGradeVS  (required) 
* valueCodeableConcept 1..1 MS
* valueCodeableConcept from MilitaryOccupationVS 



---

File: repos/HL7_SLASH_fhir-military-service/input/fsh/MilitaryServiceEpisode.fsh

// Code Systems

Profile:  MilitaryServiceEpisode
Parent:   Observation
Id:       military-service-episode
Title:    "Military Service Episode"
Description:   "Military Service Episode describes a patient/veterans overall experiences of a militiary employment.  The profile references military deployments and occupations as well as military branche, seperation and discharge status.  A patient/Veteran may have zero or more military service episodes. The episode documents the time spent in the military organization, the dischage status and reason, and a collection of deployment episodes"
* status and code and subject and effectivePeriod and component MS
* id 1..1 
* identifier 0..1 
* effective[x] only Period
* effectivePeriod.start 0..1 
* effectivePeriod.end 0..1
* basedOn 0..0
* partOf 0..0
* focus 0..0
* encounter 0..0
* issued 0..0
* performer 0..0
* dataAbsentReason 0..0
* interpretation 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* referenceRange 0..0
* derivedFrom 0..0
* code = LNC#87511-2 
* subject 1..1
* subject only Reference(USVeteran)
* effective[x] only Period
* effectivePeriod 1..1 MS
* effectivePeriod.start 1..1 MS
* effectivePeriod.end 0..1 MS 
* category.coding = http://terminology.hl7.org/CodeSystem/observation-category#social-history

* hasMember ^slicing.discriminator.type = #profile // #pattern
* hasMember ^slicing.discriminator.path =  "$this.resolve()" // "$this.resolve().code"
* hasMember ^slicing.rules = #open
* hasMember contains DeploymentHistoryEpisode 0..* MS
* hasMember[DeploymentHistoryEpisode] only Reference(DeploymentHistoryEpisode)

* hasMember ^slicing.discriminator.type = #profile // #pattern
* hasMember ^slicing.discriminator.path =  "$this.resolve()" // "$this.resolve().code"
* hasMember ^slicing.rules = #open
* hasMember contains MilitaryOccupation 0..* MS
* hasMember[MilitaryOccupation] only Reference(MilitaryOccupation)

* component ^slicing.discriminator.type = #pattern
* component ^slicing.discriminator.path = "code"
* component ^slicing.rules = #open
* component ^slicing.description = "Slice based on the component.code pattern"

* component contains military-service-Military-Branch 1..1 and
					 military-service-DischargeStatus 0..1 and
					 military-service-SeparationReason 0..1  

* component[military-service-Military-Branch].code = LNC#85104-8 "Compensation and sector employment type"
* component[military-service-Military-Branch].value[x] only CodeableConcept   
* component[military-service-Military-Branch].value[x] 1..1 MS
* component[military-service-Military-Branch].valueCodeableConcept from MilitaryBranchVS  (extensible)


* component[military-service-DischargeStatus].code =  MSHCS#9B7095A70B024CD789A36E48A3936592 "Discharge Status"
* component[military-service-DischargeStatus].value[x] only CodeableConcept   
* component[military-service-DischargeStatus].valueCodeableConcept 1..1 MS
* component[military-service-DischargeStatus].valueCodeableConcept from  DischargeStatusVS  (extensible)


* component[military-service-SeparationReason].code =  MSHCS#9CEAD6537D6A4F198549F70598B8F8BF "Separation Reason"
* component[military-service-SeparationReason].value[x] only CodeableConcept   
* component[military-service-SeparationReason].valueCodeableConcept 0..1 MS
* component[military-service-SeparationReason].valueCodeableConcept from  SeparationReasonVS  (extensible)

---

File: repos/HL7_SLASH_fhir-military-service/input/fsh/MilitaryServiceHistoryVS.fsh

Alias:   LNC = http://loinc.org
Alias:   UCUM = http://unitsofmeasure.org
Alias:   DiagnosticService = http://terminology.hl7.org/CodeSystem/v2-0074
Alias:   OmbRaceCat = urn:oid:2.16.840.1.113883.6.238
Alias:   ISO = urn:iso:std:iso:3166
Alias:   ODH = http://terminology.hl7.org/CodeSystem/PHOccupationalDataForHealthODH

 
CodeSystem: MSHCS
Id: military-service-code-system
Title: "Military Service History and Status Code System"
Description: "Military Service History and Status Code System"
* ^experimental = false
* ^caseSensitive = false
* #79A512F77CFC4E63B9969930FC8787DB "Honorable"
* #3209820D5C9F4F4E855C5783E8F49228 "Deployment Episode"
* #175ECB0F9DBC41708BC7ABD3468E7F53 "Military occupation"
* #7E33243654BB42F5BF3F3A59E0E6E6BD "Deployment Episode Country Code"
* #BF3432CC716B4DC7AA0DF43C176F4F05 "Deployment Episode Mission Code"
* #41C89BB67C9C48BFB718F57FAA6F3266 "Military Occumpation"
* #9B7095A70B024CD789A36E48A3936592 "Discharge Status"
* #9CEAD6537D6A4F198549F70598B8F8BF "Separation Reason"
* #CD1CAD19F5494F1981211F8634DD6AB1 "ANTIGUERRILLA OPERATIONS"
* #469552D4E8AA4BBBBF075190F7ED430C "COMBAT PATROL"
* #750988FBBD6148DCB85C062DEFC871E2 "Individual Augmentee"
*  #001 "WEIGHT CONTROL FAILURE"
*  #002 "FRAUDULENT ENTRY INTO MILITARY SERVICE"
*  #003 "PARENTHOOD OR CUSTODY OF MINOR CHILDREN"
*  #004 "MILITARY PERSONNEL SECURITY PROGRAM"
*  #005 "FRAUDULENT ENTRY INTO MILITARY SERVICE (DRUG ABUSE)"
*  #006 "FRAUDULENT ENTRY INTO MILITARY SERVICE (ALCOHOL ABUSE)"
*  #007 "DISRUPTIVE BEHAVIOR DISORDER"
*  #008 "MENTAL DISORDER (OTHER)"
*  #009 "PHYSICAL STANDARDS"
*  #010 "CONDITION, NOT A DISABILITY"
*  #011 "PERSONALITY DISORDER"
*  #012 "ADJUSTMENT DISORDER"
*  #013 "IMPULSE CONTROL DISORDER"
*  #014 "FAILURE TO COMPLETE A COURSE OF INSTRUCTION"
*  #015 "UNSATISFACTORY PERFORMANCE"
*  #016 "SUBSTANDARD PERFORMANCE"
*  #017 "PATTERN OF MISCONDUCT"
*  #018 "MISCONDUCT (CIVIL CONVICTION)"
*  #019 "MISCONDUCT (DRUG ABUSE)"
*  #020 "MISCONDUCT (SEXUAL PERVERSION)"
*  #021 "MISCONDUCT (OTHER)"
*  #022 "MISCONDUCT (MINOR INFRACTIONS)"
*  #023 "MISCONDUCT (SERIOUS OFFENSE)"
*  #024 "MISCONDUCT (ANTHRAX REFUSAL)"
*  #025 "UNACCEPTABLE CONDUCT (ANTHRAX REFUSAL)"
*  #026 "UNACCEPTABLE CONDUCT"
*  #027 "DRUG REHABILITATION FAILURE"
*  #028 "ALCOHOL REHABILITATION FAILURE"
*  #029 "HOMOSEXUAL CONDUCT (ACTS)"
*  #030 "HOMOSEXUAL CONDUCT (STATEMENT)"
*  #031 "HOMOSEXUAL CONDUCT (MARRIAGE OR ATTEMPTED MARRIAGE)"
*  #032 "IN LIEU OF TRIAL BY COURT MARTIAL"
*  #033 "SUFFICIENT SERVICE FOR RETIREMENT"
*  #034 "MEDAL OF HONOR RECIPIENT"
*  #035 "COMPLETION OF REQUIRED ACTIVE SERVICE"
*  #036 "EARLY RELEASE PROGRAM-VOLUNTARY SEPARATION INCENTIVE (VSI)"
*  #037 "EARLY RELEASE PROGRAM-SPECIAL SEPARATION BENEFIT (SSB)"
*  #038 "REDUCTION IN FORCE"
*  #039 "ATTEND CIVILIAN SCHOOL"
*  #040 "CIVIL OFFICE"
*  #041 "CONSCIENTIOUS OBJECTOR"
*  #042 "FORCE SHAPING (VSP)"
*  #043 "ALIEN"
*  #044 "SURVIVING FAMILY MEMBER - SOLE SURVIVORSHIP"
*  #045 "HARDSHIP"
*  #046 "PREGNANCY OR CHILDBIRTH"
*  #047 "ECCLESIASTICAL ENDORSEMENT"
*  #048 "HOLIDAY EARLY RELEASE PROGRAM"
*  #049 "SECRETARIAL AUTHORITY"
*  #050 "FAILED MEDICAL/PHYSICAL PROCUREMENT STANDARDS"
*  #051 "INTERDEPARTMENTAL TRANSFER"
*  #052 "INTRADEPARTMENTAL TRANSFER"
*  #053 "IMMEDIATE ENLISTMENT OR REENLISTMENT"
*  #054 "DISMISSAL - NO REVIEW"
*  #055 "MISCELLANEOUS/GENERAL REASONS"
*  #056 "FORCE SHAPING (BOARD SELECTED)"
*  #057 "ERRONEOUS ENTRY (OTHER)"
*  #058 "NON-RETENTION ON ACTIVE DUTY"
*  #059 "MISCONDUCT (AWOL)"
*  #060 "MISCONDUCT (DESERTION)"
*  #061 "MAXIMUM AGE"
*  #062 "MAXIMUM SERVICE OR TIME IN GRADE"
*  #063 "INSUFFICIENT RETAINABILITY (ECONOMIC REASONS)"
*  #064 "LACK OF JURISDICTION"
*  #065 "DISABILITY, SEVERANCE PAY, COMBAT RELATED (ENHANCED)"
*  #066 "DISABILITY, SEVERANCE PAY, NON COMBAT (ENHANCED)"
*  #067 "DISABILITY, EXISTED PRIOR TO SERVICE, PEB (ENHANCED)"
*  #068 "DISABILITY, SEVERANCE PAY (ENHANCED)"
*  #069 "DISABILITY, EXISTED PRIOR TO SERVICE, MED BOARD (ENHANCED)"
*  #070 "DISABILITY, NOT IN LINE OF DUTY (ENHANCED)"
*  #071 "DISABILITY, AGGRAVATION (ENHANCED)"
*  #072 "DISABILITY, OTHER (ENHANCED)"
*  #073 "ERRONEOUS ENTRY (ALCOHOL ABUSE)"
*  #074 "UNDER AGE"
*  #075 "COMPETENT AUTHORITY, WITHOUT BOARD ACTION"
*  #076 "DISABILITY, SEVERANCE PAY, COMBAT RELATED"
*  #077 "DISABILITY, SEVERANCE PAY"
*  #078 "DISABILITY, EXISTED PRIOR TO SERVICE, PEB"
*  #079 "DISABILITY, EXISTED PRIOR TO SERVICE, MED BOARD"
*  #080 "DISABILITY, SEVERANCE PAY, NON COMBAT"
*  #081 "DISABILITY, NOT IN LINE OF DUTY"
*  #082 "DISABILITY, AGGRAVATION"
*  #083 "DISABILITY, OTHER"
*  #084 "ERRONEOUS ENTRY (DRUG ABUSE)"
*  #085 "ENTRY LEVEL PERFORMANCE AND CONDUCT"
*  #086 "NON-SELECTION, PERMANENT PROMOTION"
*  #087 "NON-SELECTION, TEMPORARY PROMOTION"
*  #088 "FAILURE TO COMPLETE COMMISSIONING OR WARRANT PROGRAM"
*  #089 "COURT MARTIAL (ALCOHOL)"
*  #090 "COURT MARTIAL (HOMOSEXUAL CONDUCT)"
*  #091 "COURT MARTIAL (DESERTION)"
*  #092 "COURT MARTIAL (OTHER)"
*  #093 "COURT MARTIAL (DRUG ABUSE)"
*  #094 "COURT MARTIAL (ANTHRAX REFUSAL)"
*  #095 "SURVIVING FAMILY MEMBER"
*  #096 "DEFECTIVE ENLISTMENT AGREEMENT"
*  #097 "FAILURE TO ACCEPT REGULAR APPOINTMENT"
*  #098 "ACCEPT COMMISSION OR WARRANT IN SAME BRANCH OF SERVICE"
*  #099 "ACCEPT COMMISSION OR WARRANT IN ANOTHER BRANCH OF SERVICE"
*  #100 "ENTER OFFICER TRAINING PROGRAM"
*  #101 "REQUEST FOR EXTENSION OF SERVICE DENIED"
*  #102 "DISMISSAL - AWAITING APPELLATE REVIEW"
*  #103 "ENROLLMENT IN SERVICE ACADEMY"
*  #104 "EARLY RETIREMENT"
*  #105 "DISABILITY, PERMANENT (ENHANCED)"
*  #106 "DISABILITY, TEMPORARY (ENHANCED)"
*  #107 "DISABILITY, PERMANENT"
*  #108 "DISABILITY, TEMPORARY"
*  #109 "PERSONAL ALCOHOL ABUSE"
*  #110 "PERSONAL DRUG ABUSE"
*  #900 "NOT APPLICABLE"
*  #999 "UNKNOWN"
* #B5BA882B31574AB0BF82DFE43765F264 "General"
* #59B40AF3E8B44B0587743B08290C7AD1 "Bad Conduct"
* #599671FC8E3046DEA0AFCA3E8D2640D3 "Other Than Honorable"
* #42F13CAA1D894DFEB000908D0F467B76 "Dishonorable"
* #A557979943014BF990E056D7BF3FB940 "Honorable absence of negative report"
* #24B4895BFF3048BABB4B7708E8CFAADE "Honorable for VA purposes"
* #E963385389BC4541AB6DD77F3EF31EEA "Dishonorable for VA purposes"
* #8412EEBCB8354A06AAB445C9486CA268 "Uncharacterized"
* #7A3CBF5D942F41A9889C9406BB1D951F "Unknown"
* #f6341bf2-e765-4639-8800-6805520ece8e "Employment History Episode" 
* #d3f8e4e1-874f-4ccc-b70e-76133b2e317d "Military Service Episode" 
* #066ccc24-04d1-4c58-a2cf-abe2e722d1a3 "Separation Reason" 
* #836df973-002b-4bb6-9eca-83626af0c05c "Discharge Status" 
* #4ec176a2-9afb-4b52-a011-d9a25c360d95 "Military Occupation" 
* #f6bb8fdc-89b0-4c0b-8d81-d3916f182c2f "Deployment Episode" 
* #e06a57f8-329c-4d74-af88-47c765f0b83a "Training Deployment Episode" 
* #77eb3c61-f5c3-425c-848a-6b180b5b0528 "Humanitarian Deployment Episode" 
* #82bf75df-60b7-4505-ba9e-8d0171ebb6c3 "Combat Deployment Episode" 
* #b18ae858-d1dd-4edb-89f2-b9835f2eba1e "Deployment Country" 
* #46a15b13-b5c1-4ae8-acde-48c31f30175a "Enduring Freedom"
* #C-0	"Civilian Non Supervisor"
* #C-3	"First Line Supervisor"
* #C-6	"Manager"
* #E-1	"US Military Enlisted paygrade E-1"
* #E-2	"US Military Enlisted paygrade E-2"
* #E-3	"US Military Enlisted paygrade E-3"
* #E-4	"US Military Enlisted paygrade E-4"
* #E-5	"US Military Enlisted paygrade E-5"
* #E-6	"US Military Enlisted paygrade E-6"
* #E-7	"US Military Enlisted paygrade E-7"
* #E-8	"US Military Enlisted paygrade E-8"
* #E-9	"US Military Enlisted paygrade E-9"
* #O-1	"US Military Commissioned Officer paygrade O-1"
* #O-10	"US Military Commissioned Officer paygrade O-10"
* #O-2	"US Military Commissioned Officer paygrade O-2"
* #O-3	"US Military Commissioned Officer paygrade  O-3"
* #O-4	"US Military Commissioned Officer paygrade O-4"
* #O-5	"US Military Commissioned Officer paygrade O-5"
* #O-6	"US Military Commissioned Officer paygrade O-6"
* #O-7	"US Military Commissioned Officer paygrade O-7"
* #O-8	"US Military Commissioned Officer paygrade O-8"
* #O-9	"US Military Commissioned Officer paygrade O-9"
* #W-1	"Warrant Officer paygrade W-1"
* #W-2	"Warrant Officer paygrade W-2"
* #W-3	"Warrant Officer paygrade W-3"
* #W-4	"Warrant Officer paygrade W-4"
* #W-5	"Warrant Officer paygrade W-5"
//from ODH
* #55-3019.00.025711    "Marine [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
* #928110.010506	"Marine Corps [National Security ]"

ValueSet:    MilitaryBranchVS
Id: military-service-branch-vs
Title: "Military Branch Value Set"
Description: "Military Branch Value Set - is a subset of the ODH Occupation value set."
* ^experimental = true
/* ODH#928110.000255	"Air Force [National Security ]"
* ODH#928110.000275	"Air traffic control, military [National Security ]"
* ODH#928110.000809	"Armed forces [National Security ]"
* ODH#928110.000817	"Army [National Security ]"
* ODH#928110.004459	"Courts, military [National Security ]"
*/
* MSHCS#928110.010506	"Marine Corps [National Security ]"

/* ODH#928110.010877	"Military bases and camps [National Security ]"
* ODH#928110.010884	"Military police [National Security ]"
* ODH#928110.010885	"Military reserve armories and bases [National Security ]"
* ODH#928110.010887	"Military training schools (except academies) [National Security ]"
* ODH#928110.011393	"National Guard [National Security ]"
* ODH#928110.011438	"Navy [National Security ]"
*/


ValueSet:    PayGradeVS
Id: military-service-paygrade-vs
Title: "Pay Grade Code Value Set"
Description: "Pay Grade Code Value Set - is a subset of the OHD Supervisory Role value set. Its scope is limited to military pay grade codes."
* ^experimental = false
* MSHCS#C-0	"Civilian Non Supervisor"
* MSHCS#C-3	"First Line Supervisor"
* MSHCS#C-6	"Manager"
* MSHCS#E-1	"US Military Enlisted paygrade E-1"
* MSHCS#E-2	"US Military Enlisted paygrade E-2"
* MSHCS#E-3	"US Military Enlisted paygrade E-3"
* MSHCS#E-4	"US Military Enlisted paygrade E-4"
* MSHCS#E-5	"US Military Enlisted paygrade E-5"
* MSHCS#E-6	"US Military Enlisted paygrade E-6"
* MSHCS#E-7	"US Military Enlisted paygrade E-7"
* MSHCS#E-8	"US Military Enlisted paygrade E-8"
* MSHCS#E-9	"US Military Enlisted paygrade E-9"
* MSHCS#O-1	"US Military Commissioned Officer paygrade O-1"
* MSHCS#O-10	"US Military Commissioned Officer paygrade O-10"
* MSHCS#O-2	"US Military Commissioned Officer paygrade O-2"
* MSHCS#O-3	"US Military Commissioned Officer paygrade  O-3"
* MSHCS#O-4	"US Military Commissioned Officer paygrade O-4"
* MSHCS#O-5	"US Military Commissioned Officer paygrade O-5"
* MSHCS#O-6	"US Military Commissioned Officer paygrade O-6"
* MSHCS#O-7	"US Military Commissioned Officer paygrade O-7"
* MSHCS#O-8	"US Military Commissioned Officer paygrade O-8"
* MSHCS#O-9	"US Military Commissioned Officer paygrade O-9"
* MSHCS#W-1	"Warrant Officer paygrade W-1"
* MSHCS#W-2	"Warrant Officer paygrade W-2"
* MSHCS#W-3	"Warrant Officer paygrade W-3"
* MSHCS#W-4	"Warrant Officer paygrade W-4"
* MSHCS#W-5	"Warrant Officer paygrade W-5"


ValueSet:    SeparationReasonVS
Id: military-service-separation-reason-vs
Title: "Separation Reason Value Set"
Description: "Separation Reason Value Set contains concepts that are managed as a local extensions, subject to submission to SNOMED CT."
* ^experimental = true
*  MSHCS#001 "WEIGHT CONTROL FAILURE"
*  MSHCS#002 "FRAUDULENT ENTRY INTO MILITARY SERVICE"
*  MSHCS#003 "PARENTHOOD OR CUSTODY OF MINOR CHILDREN"
*  MSHCS#004 "MILITARY PERSONNEL SECURITY PROGRAM"
*  MSHCS#005 "FRAUDULENT ENTRY INTO MILITARY SERVICE (DRUG ABUSE)"
*  MSHCS#006 "FRAUDULENT ENTRY INTO MILITARY SERVICE (ALCOHOL ABUSE)"
*  MSHCS#007 "DISRUPTIVE BEHAVIOR DISORDER"
*  MSHCS#008 "MENTAL DISORDER (OTHER)"
*  MSHCS#009 "PHYSICAL STANDARDS"
*  MSHCS#010 "CONDITION, NOT A DISABILITY"
*  MSHCS#011 "PERSONALITY DISORDER"
*  MSHCS#012 "ADJUSTMENT DISORDER"
*  MSHCS#013 "IMPULSE CONTROL DISORDER"
*  MSHCS#014 "FAILURE TO COMPLETE A COURSE OF INSTRUCTION"
*  MSHCS#015 "UNSATISFACTORY PERFORMANCE"
*  MSHCS#016 "SUBSTANDARD PERFORMANCE"
*  MSHCS#017 "PATTERN OF MISCONDUCT"
*  MSHCS#018 "MISCONDUCT (CIVIL CONVICTION)"
*  MSHCS#019 "MISCONDUCT (DRUG ABUSE)"
*  MSHCS#020 "MISCONDUCT (SEXUAL PERVERSION)"
*  MSHCS#021 "MISCONDUCT (OTHER)"
*  MSHCS#022 "MISCONDUCT (MINOR INFRACTIONS)"
*  MSHCS#023 "MISCONDUCT (SERIOUS OFFENSE)"
*  MSHCS#024 "MISCONDUCT (ANTHRAX REFUSAL)"
*  MSHCS#025 "UNACCEPTABLE CONDUCT (ANTHRAX REFUSAL)"
*  MSHCS#026 "UNACCEPTABLE CONDUCT"
*  MSHCS#027 "DRUG REHABILITATION FAILURE"
*  MSHCS#028 "ALCOHOL REHABILITATION FAILURE"
*  MSHCS#029 "HOMOSEXUAL CONDUCT (ACTS)"
*  MSHCS#030 "HOMOSEXUAL CONDUCT (STATEMENT)"
*  MSHCS#031 "HOMOSEXUAL CONDUCT (MARRIAGE OR ATTEMPTED MARRIAGE)"
*  MSHCS#032 "IN LIEU OF TRIAL BY COURT MARTIAL"
*  MSHCS#033 "SUFFICIENT SERVICE FOR RETIREMENT"
*  MSHCS#034 "MEDAL OF HONOR RECIPIENT"
*  MSHCS#035 "COMPLETION OF REQUIRED ACTIVE SERVICE"
*  MSHCS#036 "EARLY RELEASE PROGRAM-VOLUNTARY SEPARATION INCENTIVE (VSI)"
*  MSHCS#037 "EARLY RELEASE PROGRAM-SPECIAL SEPARATION BENEFIT (SSB)"
*  MSHCS#038 "REDUCTION IN FORCE"
*  MSHCS#039 "ATTEND CIVILIAN SCHOOL"
*  MSHCS#040 "CIVIL OFFICE"
*  MSHCS#041 "CONSCIENTIOUS OBJECTOR"
*  MSHCS#042 "FORCE SHAPING (VSP)"
*  MSHCS#043 "ALIEN"
*  MSHCS#044 "SURVIVING FAMILY MEMBER - SOLE SURVIVORSHIP"
*  MSHCS#045 "HARDSHIP"
*  MSHCS#046 "PREGNANCY OR CHILDBIRTH"
*  MSHCS#047 "ECCLESIASTICAL ENDORSEMENT"
*  MSHCS#048 "HOLIDAY EARLY RELEASE PROGRAM"
*  MSHCS#049 "SECRETARIAL AUTHORITY"
*  MSHCS#050 "FAILED MEDICAL/PHYSICAL PROCUREMENT STANDARDS"
*  MSHCS#051 "INTERDEPARTMENTAL TRANSFER"
*  MSHCS#052 "INTRADEPARTMENTAL TRANSFER"
*  MSHCS#053 "IMMEDIATE ENLISTMENT OR REENLISTMENT"
*  MSHCS#054 "DISMISSAL - NO REVIEW"
*  MSHCS#055 "MISCELLANEOUS/GENERAL REASONS"
*  MSHCS#056 "FORCE SHAPING (BOARD SELECTED)"
*  MSHCS#057 "ERRONEOUS ENTRY (OTHER)"
*  MSHCS#058 "NON-RETENTION ON ACTIVE DUTY"
*  MSHCS#059 "MISCONDUCT (AWOL)"
*  MSHCS#060 "MISCONDUCT (DESERTION)"
*  MSHCS#061 "MAXIMUM AGE"
*  MSHCS#062 "MAXIMUM SERVICE OR TIME IN GRADE"
*  MSHCS#063 "INSUFFICIENT RETAINABILITY (ECONOMIC REASONS)"
*  MSHCS#064 "LACK OF JURISDICTION"
*  MSHCS#065 "DISABILITY, SEVERANCE PAY, COMBAT RELATED (ENHANCED)"
*  MSHCS#066 "DISABILITY, SEVERANCE PAY, NON COMBAT (ENHANCED)"
*  MSHCS#067 "DISABILITY, EXISTED PRIOR TO SERVICE, PEB (ENHANCED)"
*  MSHCS#068 "DISABILITY, SEVERANCE PAY (ENHANCED)"
*  MSHCS#069 "DISABILITY, EXISTED PRIOR TO SERVICE, MED BOARD (ENHANCED)"
*  MSHCS#070 "DISABILITY, NOT IN LINE OF DUTY (ENHANCED)"
*  MSHCS#071 "DISABILITY, AGGRAVATION (ENHANCED)"
*  MSHCS#072 "DISABILITY, OTHER (ENHANCED)"
*  MSHCS#073 "ERRONEOUS ENTRY (ALCOHOL ABUSE)"
*  MSHCS#074 "UNDER AGE"
*  MSHCS#075 "COMPETENT AUTHORITY, WITHOUT BOARD ACTION"
*  MSHCS#076 "DISABILITY, SEVERANCE PAY, COMBAT RELATED"
*  MSHCS#077 "DISABILITY, SEVERANCE PAY"
*  MSHCS#078 "DISABILITY, EXISTED PRIOR TO SERVICE, PEB"
*  MSHCS#079 "DISABILITY, EXISTED PRIOR TO SERVICE, MED BOARD"
*  MSHCS#080 "DISABILITY, SEVERANCE PAY, NON COMBAT"
*  MSHCS#081 "DISABILITY, NOT IN LINE OF DUTY"
*  MSHCS#082 "DISABILITY, AGGRAVATION"
*  MSHCS#083 "DISABILITY, OTHER"
*  MSHCS#084 "ERRONEOUS ENTRY (DRUG ABUSE)"
*  MSHCS#085 "ENTRY LEVEL PERFORMANCE AND CONDUCT"
*  MSHCS#086 "NON-SELECTION, PERMANENT PROMOTION"
*  MSHCS#087 "NON-SELECTION, TEMPORARY PROMOTION"
*  MSHCS#088 "FAILURE TO COMPLETE COMMISSIONING OR WARRANT PROGRAM"
*  MSHCS#089 "COURT MARTIAL (ALCOHOL)"
*  MSHCS#090 "COURT MARTIAL (HOMOSEXUAL CONDUCT)"
*  MSHCS#091 "COURT MARTIAL (DESERTION)"
*  MSHCS#092 "COURT MARTIAL (OTHER)"
*  MSHCS#093 "COURT MARTIAL (DRUG ABUSE)"
*  MSHCS#094 "COURT MARTIAL (ANTHRAX REFUSAL)"
*  MSHCS#095 "SURVIVING FAMILY MEMBER"
*  MSHCS#096 "DEFECTIVE ENLISTMENT AGREEMENT"
*  MSHCS#097 "FAILURE TO ACCEPT REGULAR APPOINTMENT"
*  MSHCS#098 "ACCEPT COMMISSION OR WARRANT IN SAME BRANCH OF SERVICE"
*  MSHCS#099 "ACCEPT COMMISSION OR WARRANT IN ANOTHER BRANCH OF SERVICE"
*  MSHCS#100 "ENTER OFFICER TRAINING PROGRAM"
*  MSHCS#101 "REQUEST FOR EXTENSION OF SERVICE DENIED"
*  MSHCS#102 "DISMISSAL - AWAITING APPELLATE REVIEW"
*  MSHCS#103 "ENROLLMENT IN SERVICE ACADEMY"
*  MSHCS#104 "EARLY RETIREMENT"
*  MSHCS#105 "DISABILITY, PERMANENT (ENHANCED)"
*  MSHCS#106 "DISABILITY, TEMPORARY (ENHANCED)"
*  MSHCS#107 "DISABILITY, PERMANENT"
*  MSHCS#108 "DISABILITY, TEMPORARY"
*  MSHCS#109 "PERSONAL ALCOHOL ABUSE"
*  MSHCS#110 "PERSONAL DRUG ABUSE"
*  MSHCS#900 "NOT APPLICABLE"
*  MSHCS#999 "UNKNOWN"


ValueSet: DischargeStatusVS
Id: military-service-discharge-status-vs
Title: "Discharge Status Value Set"
Description: "Discharge Status Value Set - this value set identifies gaps in SNOMED CT. The only concept currently supported is that of 'dishonorable' discharge."
* ^experimental = false
* MSHCS#79A512F77CFC4E63B9969930FC8787DB "Honorable"
* MSHCS#B5BA882B31574AB0BF82DFE43765F264 "General"
* MSHCS#59B40AF3E8B44B0587743B08290C7AD1 "Bad Conduct"
* MSHCS#599671FC8E3046DEA0AFCA3E8D2640D3 "Other Than Honorable"
* MSHCS#42F13CAA1D894DFEB000908D0F467B76 "Dishonorable"
* MSHCS#A557979943014BF990E056D7BF3FB940 "Honorable absence of negative report"
* MSHCS#24B4895BFF3048BABB4B7708E8CFAADE "Honorable for VA purposes"
* MSHCS#E963385389BC4541AB6DD77F3EF31EEA "Dishonorable for VA purposes"
* MSHCS#8412EEBCB8354A06AAB445C9486CA268 "Uncharacterized"
* MSHCS#7A3CBF5D942F41A9889C9406BB1D951F "Unknown"

ValueSet: DeploymentEpisodeMissionVS
Id: military-service-combat-episode-mission-vs
Title: "Combat Episode Mission Value Set"
Description: "Example combat mission code; this is only an example data element that may be associated with a Deployment Episode, if needed."
* ^experimental = true
* MSHCS#CD1CAD19F5494F1981211F8634DD6AB1 "ANTIGUERRILLA OPERATIONS"
* MSHCS#469552D4E8AA4BBBBF075190F7ED430C "COMBAT PATROL"
* MSHCS#750988FBBD6148DCB85C062DEFC871E2 "Individual Augmentee"
* MSHCS#46a15b13-b5c1-4ae8-acde-48c31f30175a "Enduring Freedom"

ValueSet: DeploymentEpisodeCategoryVS
Id: military-service-deployment-episode-mission-vs
Title: "Deployment Episode Type Value Set"
Description: "Recommended deployment episode type code - only the root concept of 'Deployment Episode' is needed for typical implementations."
* ^experimental = false
* MSHCS#f6bb8fdc-89b0-4c0b-8d81-d3916f182c2f "Deployment Episode" 
* MSHCS#e06a57f8-329c-4d74-af88-47c765f0b83a "Training Deployment Episode" 
* MSHCS#77eb3c61-f5c3-425c-848a-6b180b5b0528 "Humanitarian Deployment Episode" 
* MSHCS#82bf75df-60b7-4505-ba9e-8d0171ebb6c3 "Combat Deployment Episode" 

ValueSet:    MilitaryOccupationVS
Id: military-service-military-occupation-vs
Title: "Military Occupation Value Set"
Description: "Military Occupation Value Set" 
* ^experimental = true
/*  ODH#55-1011.00.000736    "Air Battle Manager [Air Crew Officers]"
*  ODH#55-1011.00.000951    "Airdrop Systems Technician [Air Crew Officers]"
*  ODH#55-1011.00.002270    "Astronaut, Mission Specialist [Air Crew Officers]"
*  ODH#55-1011.00.016810    "Fixed-Wing Transport Aircraft Specialist [Air Crew Officers]"
*  ODH#55-1011.00.020507    "Helicopter Officer [Air Crew Officers]"
*  ODH#55-1011.00.028062    "Naval Flight Officer, Airborne Reconnaissance Officer [Air Crew Officers]"
*  ODH#55-1011.00.028063    "Naval Flight Officer, Bombardier/Navigator [Air Crew Officers]"
*  ODH#55-1011.00.028064    "Naval Flight Officer, Electronic Warfare Officer [Air Crew Officers]"
*  ODH#55-1011.00.028065    "Naval Flight Officer, Qualified Supporting Arms Coordinator (Airborne) [Air Crew Officers]"
*  ODH#55-1011.00.028066    "Naval Flight Officer, Radar Intercept Officer [Air Crew Officers]"
*  ODH#55-1011.00.028067    "Naval Flight Officer, Weapons Systems Officer [Air Crew Officers]"
*  ODH#55-1011.00.039400    "Special Project Airborne Electronics Evaluator [Air Crew Officers]"
*  ODH#55-1012.00.006770    "Catapult and Arresting Gear Officer [Aircraft Launch and Recovery Officers]"
*  ODH#55-1012.00.016932    "Flight Deck Officer [Aircraft Launch and Recovery Officers]"
*  ODH#55-1012.00.023476    "Landing Signal Officer [Aircraft Launch and Recovery Officers]"
*  ODH#55-1012.00.044070    "V/STOL Landing Signal Officer [Aircraft Launch and Recovery Officers]"
*  ODH#55-1013.00.001780    "Armor Officer [Armored Assault Vehicle Officers]"
*  ODH#55-1013.00.001966    "Assault Amphibious Vehicle (AAV) Officer [Armored Assault Vehicle Officers]"
*  ODH#55-1013.00.006844    "Cavalry Officer [Armored Assault Vehicle Officers]"
*  ODH#55-1013.00.024229    "Light-Armored Reconnaissance Officer [Armored Assault Vehicle Officers]"
*  ODH#55-1013.00.024230    "Light-Armored Vehicle Officer [Armored Assault Vehicle Officers]"
*  ODH#55-1013.00.041418    "Tank Officer [Armored Assault Vehicle Officers]"
*  ODH#55-1014.00.000776    "Air Defense Artillery Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.001187    "Ammunition Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.012973    "Division Officer, Weapons Department [Artillery and Missile Officers]"
*  ODH#55-1014.00.012974    "Division Officer, Weapons Department (Antisubmarine Weapons) [Artillery and Missile Officers]"
*  ODH#55-1014.00.012975    "Division Officer, Weapons Department (Guided Missiles) [Artillery and Missile Officers]"
*  ODH#55-1014.00.012976    "Division Officer, Weapons Department (Gunnery) [Artillery and Missile Officers]"
*  ODH#55-1014.00.016076    "Field Artillery Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.016080    "Field Artillery Senior Sergeant [Artillery and Missile Officers]"
*  ODH#55-1014.00.016081    "Field Artillery Targeting Technician [Artillery and Missile Officers]"
*  ODH#55-1014.00.016517    "Fire Control Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.016518    "Fire Control Officer (Surface-To-Air Missiles) [Artillery and Missile Officers]"
*  ODH#55-1014.00.019377    "Ground Nuclear Weapons Assembly Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.019498    "Guided Missile Test Officer, Air-Launched [Artillery and Missile Officers]"
*  ODH#55-1014.00.020045    "HAWK Missile Air Defense Artillery [Artillery and Missile Officers]"
*  ODH#55-1014.00.024914    "Low Altitude Air Defense Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.028069    "Naval Gunfire Spotter [Artillery and Missile Officers]"
*  ODH#55-1014.00.028074    "Naval Surface Fire Support Planner [Artillery and Missile Officers]"
*  ODH#55-1014.00.028436    "Nuclear & Chemical Weapons Employment Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.028503    "Nuclear Weapons Custodian [Artillery and Missile Officers]"
*  ODH#55-1014.00.029299    "Ordnance Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.030232    "PATRIOT Missile Air Defense Artillery [Artillery and Missile Officers]"
*  ODH#55-1014.00.038097    "Short-Range Air Defense Artillery [Artillery and Missile Officers]"
*  ODH#55-1014.00.039264    "Space and Missile Operations, Missile Combat Crew [Artillery and Missile Officers]"
*  ODH#55-1014.00.040584    "Strike Warfare/Missile Systems Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.040585    "Strike Warfare/Missile Systems Officer (Surface-to-Air Missile) [Artillery and Missile Officers]"
*  ODH#55-1014.00.040946    "Surface-to-Air Weapons Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.041519    "Targeting Acquisition Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.045080    "Weapons Military Characteristics Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.045081    "Weapons Officer [Artillery and Missile Officers]"
*  ODH#55-1014.00.045082    "Weapons Officer (Fleet Ballistic Missiles) [Artillery and Missile Officers]"
*  ODH#55-1014.00.045083    "Weapons Officer, Naval Activity [Artillery and Missile Officers]"
*  ODH#55-1015.00.000031    "AADC Plans Staff Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.000541    "Advisor to Command in Combat [Command and Control Center Officers]"
*  ODH#55-1015.00.000736    "Air Battle Manager [Command and Control Center Officers]"
*  ODH#55-1015.00.000775    "Air Control/Anti-Air Warfare Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.000779    "Air Defense Control Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.000798    "Air Intercept Controller Supervisor [Command and Control Center Officers]"
*  ODH#55-1015.00.000800    "Air Liaison and Special Staff [Command and Control Center Officers]"
*  ODH#55-1015.00.000824    "Air Support Control Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001444    "Anti-Air Warfare Operations Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001459    "Antisubmarine Classification and Analysis Officer, Aviation [Command and Control Center Officers]"
*  ODH#55-1015.00.001469    "AOC AADC Chief of Operations Staff Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001470    "AOC AADC Director and Chief of Plans Staff Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001471    "AOC AADC Operations Staff Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001472    "Aoc Airspace Control Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001473    "Aoc Director Combat Operations Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001474    "Aoc Director Combat Plans Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001475    "AOC Director Intelligence Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001476    "Aoc Information Operations Staff Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001477    "Aoc Operations - Air Mobility / Logistics Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001478    "Aoc Operations - Air Mobility / Logistics Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001479    "Aoc Operations - Combat Search And Rescue Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001480    "Aoc Operations - Combat Search And Rescue Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001481    "Aoc Operations - Defensive Operations Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001482    "Aoc Operations - Intelligence Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001483    "Aoc Operations - Intelligence Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001484    "Aoc Operations - Naval And Amphibious Liaison Element Afloat Planning Liaison [Command and Control Center Officers]"
*  ODH#55-1015.00.001485    "Aoc Operations - Naval And Amphibious Liaison Element Member [Command and Control Center Officers]"
*  ODH#55-1015.00.001486    "Aoc Operations - Offensive Operations Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001487    "Aoc Operations - Special Operations Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001488    "Aoc Operations - Special Operations Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001489    "Aoc Operations - Time Sensitive / Critical Targeting Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001490    "Aoc Operations - Time Sensitive / Critical Targeting Officer Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001491    "Aoc Plans - Air Task Order / Air Control Order Production Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001492    "Aoc Plans - Guidance Apportionment And Targeting Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001493    "Aoc Plans - Guidance Apportionment And Targeting Officer Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001494    "AOC Plans - Intelligence Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001495    "AOC Plans - Intelligence Officer Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001496    "AOC Plans - Master Air Attack Planning Assistant Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001497    "Aoc Plans - Master Air Attack Planning Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.001498    "Aoc Plans - Master Air Attack Planning Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001499    "Aoc Strategy Plans And Operational Assessment Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.001500    "Aoc Strategy Plans And Operational Assessment Officer Chief [Command and Control Center Officers]"
*  ODH#55-1015.00.005752    "C4 Planner [Command and Control Center Officers]"
*  ODH#55-1015.00.006531    "Carrier Airborne Combat Information Center Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.009015    "Combat Control [Command and Control Center Officers]"
*  ODH#55-1015.00.009019    "Combat Information Center Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.009023    "Combat Systems Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.009059    "Command and Control [Command and Control Center Officers]"
*  ODH#55-1015.00.009060    "Command and Control Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.009062    "Command and Control Systems Integrator [Command and Control Center Officers]"
*  ODH#55-1015.00.009065    "Command, Control, Communications, Computers and Intelligence (C4I) Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.017288    "Force Deployment Planning and Execution Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.017512    "Forward Air Controller/Air Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.021893    "Information Management Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.022895    "Joint Terminal Attack Controller [Command and Control Center Officers]"
*  ODH#55-1015.00.025712    "Marine Air Ground Task Force (MAGTF) Planners [Command and Control Center Officers]"
*  ODH#55-1015.00.027018    "Military Analyst [Command and Control Center Officers]"
*  ODH#55-1015.00.028075    "Naval Tactical Data System--Combat Information Center Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.028076    "Naval Tactical Data System--Combat Information Center Watch Officer, Carrier Controlled Approach Controller [Command and Control Center Officers]"
*  ODH#55-1015.00.028077    "Naval Tactical Data System--Combat Information Center Watch Officer, General [Command and Control Center Officers]"
*  ODH#55-1015.00.028832    "Offshore Control and Surveillance System Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.029085    "Operations Control Center Briefing Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.029101    "Operations Officer, Afloat (Naval Tactical Data Systems) [Command and Control Center Officers]"
*  ODH#55-1015.00.029113    "Operations Systems Specialist [Command and Control Center Officers]"
*  ODH#55-1015.00.034937    "Relocatable Over-the-Horizon Radar Watch Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.037277    "Senior Air Director (SAD) [Command and Control Center Officers]"
*  ODH#55-1015.00.039792    "Staff Combat Information Center Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.039793    "Staff Command and Control Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.039798    "Staff Electronic Warfare Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.039818    "Staff Operations Command Center Watch Officer [Command and Control Center Officers]"
*  ODH#55-1015.00.039834    "Staff Readiness Officer (Combat Information Center) [Command and Control Center Officers]"
*  ODH#55-1015.00.040515    "Strategist [Command and Control Center Officers]"
*  ODH#55-1015.00.041013    "Surveillance Sensor Officer [Command and Control Center Officers]"
*  ODH#55-1016.00.021848    "Infantry Officer [Infantry Officers]"
*  ODH#55-1016.00.021851    "Infantry Unit Leader [Infantry Officers]"
*  ODH#55-1016.00.021853    "Infantry Weapons Officer [Infantry Officers]"
*  ODH#55-1017.00.000491    "Advanced Seal Delivery System [Special Forces Officers]"
*  ODH#55-1017.00.009024    "Combatant Diver Officer [Special Forces Officers]"
*  ODH#55-1017.00.009025    "Combatant Diver Qualified (Officer) [Special Forces Officers]"
*  ODH#55-1017.00.009068    "Commanding Officer, Special Warfare Team [Special Forces Officers]"
*  ODH#55-1017.00.010027    "Control and Recovery, Combat Rescue [Special Forces Officers]"
*  ODH#55-1017.00.010028    "Control and Recovery, Special Tactics [Special Forces Officers]"
*  ODH#55-1017.00.015364    "Executive Officer, Special Warfare Team [Special Forces Officers]"
*  ODH#55-1017.00.029936    "Parachute/Combatant Diver Officer [Special Forces Officers]"
*  ODH#55-1017.00.029939    "Parachutist/Combatant Diver Qualified (Officer) [Special Forces Officers]"
*  ODH#55-1017.00.036963    "Sea-Air-Land Officer [Special Forces Officers]"
*  ODH#55-1017.00.036974    "Seal Delivery Vehicle Officer [Special Forces Officers]"
*  ODH#55-1017.00.039380    "Special Forces Officer [Special Forces Officers]"
*  ODH#55-1017.00.039382    "Special Forces Warrant Officer [Special Forces Officers]"
*  ODH#55-1017.00.039412    "Special Weapons Unit Officer [Special Forces Officers]"
*  ODH#55-1019.00.000474    "Advanced Foreign Counterintelligence Officer (AFCO) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.000481    "Advanced Military Source Operations Officer (AMSOO) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.000731    "Air Antisubmarine Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.000737    "Air Boatswain [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.000796    "Air Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.001074    "All Source Intelligence [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.001076    "All Source Intelligence Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.001192    "Amphibious Operations Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.001460    "Antisubmarine Warfare Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.001461    "Antisubmarine Weapons Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.001752    "Area Intelligence Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.001794    "Army Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.002812    "Aviation All-Source Intelligence [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.002832    "Aviation Ordnance Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.002839    "Aviation Tactical Readiness Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.007479    "Chemical Munitions and Materiel Management [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.007480    "Chemical Operations and Training [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.007515    "Chemical, Biological, Radiological, And Nuclear (CBRN) Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.008725    "Coastal/Harbor Defense Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.009018    "Combat Engineer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.009234    "Communications Interceptor/Locator Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.010612    "Counter Intelligence [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.010613    "Counter Intelligence Agent [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.010632    "Counter-Intelligence Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.010627    "Counterintelligence (CI)/Human Source Intelligence (HUMINT) Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.010630    "Counterintelligence Officer/Human Source Intelligence (CI/HUMINT) Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.010631    "Counterintelligence Officer/Human Source Intelligence (Ci/Humint) Operations Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.011103    "Cryptologic Digital Network Technician/Analyst [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.011104    "Cryptologic Digital Network Technician/Analyst (Officer) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.014383    "Electronic Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.014425    "Electronic Warfare Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.014429    "Electronic Warfare Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.014557    "Emanations Analysis Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.014659    "Emitter Location/Identification Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.018581    "Geographic Area Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.019374    "Ground Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.019546    "Gunnery/Ordnance Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.021291    "Human Intelligence [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.021292    "Human Intelligence Collection Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.021596    "Imagery Intelligence [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022041    "Inshore Undersea Warfare Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022323    "Intelligence [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022330    "Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022331    "Intelligence Officer, Basic [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022336    "Intelligence Support Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022337    "Intelligence, Applications [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022338    "Intelligence, Mapping, Charting, and Geodesy [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022339    "Intelligence, Operations [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.022893    "Joint Strategic Plans and Policy Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.025714    "Marine Air/Ground Task Force (MAGTF) Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.027018    "Military Analyst [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.027024    "Military Source Operations Officer (MSOO) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.027170    "Minesweeping Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.027232    "Mission Commander [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.027831    "Multisensor Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.028068    "Naval Gunfire Liaison Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.028081    "Navy Airspace Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.028086    "Navy Seal [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.028405    "Non-Morse Intercept Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.028808    "Officer in Charge, Aviation Unit or Detachment [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.028809    "Officer in Charge/Assistant Officer in Charge, Combat Service Support Team [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.029060    "Operational Intelligence Officer (Analyst) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.029061    "Operational Intelligence Officer (General) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.029062    "Operational Intelligence Officer (Management) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.029931    "Parachute Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.029938    "Parachutist (Officer) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.030842    "Photographic Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.033363    "Psychological Operations [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.033366    "Psychological Operations Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.033367    "Psychological Operations Or Civil Affairs [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.037278    "Senior All-Source Intelligence Analysis Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.037978    "Ship's Electronic Warfare Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.038264    "Signal Intelligence/Electronic Warfare [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.038265    "Signal Intelligence/Ground Electronic Warfare Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.038287    "Signals Collection Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.038292    "Signals Intelligence Analysis Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.038296    "Signals Intelligence/Electronics Warfare Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039263    "Space And Missile Operations [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039264    "Space and Missile Operations, Missile Combat Crew [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039265    "Space And Missile Operations, Satellite Command And Control [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039266    "Space And Missile Operations, Space Surveillance [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039267    "Space And Missile Operations, Space Warning [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039268    "Space And Missile Operations, Spacelift [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039269    "Space and Missile Operations, Tactical Airlift [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039277    "Space Operations [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039406    "Special Technical Operations Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039777    "Staff Air Defense Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039778    "Staff Air Tactical Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039782    "Staff Antisubmarine Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039809    "Staff Mine Warfare Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039811    "Staff Nuclear Weapons Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039832    "Staff Readiness Officer (Amphibious Warfare) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039833    "Staff Readiness Officer (Antisubmarine Warfare) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039835    "Staff Readiness Officer (Electronic Warfare) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039836    "Staff Readiness Officer (Submarine Warfare) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039845    "Staff Submarine Warfare Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.039851    "Staff Weapons Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.040508    "Strategic Debriefing Officer (SDO) [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.040510    "Strategic Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.040581    "Strike Operations Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.040743    "Submarine Advisory Team Watch Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.040746    "Submarine Element Coordinator [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.041309    "Tactical Debriefer (TD) Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.041310    "Tactical Deception Plans Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.041311    "Tactical Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.041312    "Tactical Unmanned Aerial Vehicle (TUAV) Operations Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.041510    "Target Aircraft Controller [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.041706    "Technical Surveillance Countermeasures Trained Counterintelligence/Human Source Intelligence Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.042991    "Traffic Analysis Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.043930    "Unmanned Aerial Vehicle (TUAV) Operations Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.044331    "Vertical Takeoff Unmanned Aerial Vehicle Officer [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.044584    "Voice Intercept Technician [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.045074    "Weapons [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-1019.00.045076    "Weapons and Tactics Instructor-Air Control [Military Officer Special and Tactical Operations Leaders, All Other]"
*  ODH#55-2011.00.000852    "Airborne Mission Systems Superintendent [First-Line Supervisors of Air Crew Members]"
*  ODH#55-2011.00.000855    "Airborne Operations Manager [First-Line Supervisors of Air Crew Members]"
*  ODH#55-2011.00.000856    "Airborne Operations Superintendent [First-Line Supervisors of Air Crew Members]"
*  ODH#55-2011.00.000905    "Aircraft Loadmaster Superintendent [First-Line Supervisors of Air Crew Members]"
*  ODH#55-2011.00.005753    "C-40A Crew Chief [First-Line Supervisors of Air Crew Members]"
*  ODH#55-2011.00.016937    "Flight Engineer Manager [First-Line Supervisors of Air Crew Members]"
*  ODH#55-2011.00.021868    "In-Flight Refueling Manager [First-Line Supervisors of Air Crew Members]"
*  ODH#55-2012.00.000551    "Aerial Gunner, Superintendent [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2012.00.000777    "Air Defense Artillery Senior Sergeant [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2012.00.000859    "Airborne Weapons Technical Manager [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2012.00.001766    "Armament Weapons Support Equipment (ASWE) Maintenance Manager [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2012.00.001784    "Armor Senior Sergeant [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2012.00.016080    "Field Artillery Senior Sergeant [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2012.00.021851    "Infantry Unit Leader [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2012.00.029538    "Over The Horizon-Targeting (OTH-T) Supervisor [First-Line Supervisors of Weapons Specialists/Crew Members]"
*  ODH#55-2013.00.000589    "Aerospace Control and Warning Systems Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.000606    "Afloat Cryptologic Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.000804    "Air Operations Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.002833    "Aviation Resource Management Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.007574    "Chief Counterintelligence/Human Intelligence Sergeant [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.009016    "Combat Control Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.009064    "Command Post Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.009210    "Communication Signals Intelligence Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.010633    "Counterintelligence/Human Intelligence, Senior Sergeant [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.011106    "Cryptologic Supervisor [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.014414    "Electronic Signals Intelligence Exploitation Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.014418    "Electronic Systems Security Assessment Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.021850    "Infantry Senior Sergeant [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.022326    "Intelligence Chief [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.022329    "Intelligence Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.022333    "Intelligence Senior Sergeant [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.022334    "Intelligence Senior Sergeant/Chief Intelligence Sergeant [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.022358    "Interface Control Officer (ICO) [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.028200    "Network Intelligence Analyst Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.029058    "Operational Communication Chief [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.029093    "Operations Intelligence Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.037320    "Senior Enlisted Damage Control Program Management and Training Specialist [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.037357    "Senior Naval Parachutist [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.038289    "Signals Intelligence (Electronic Warfare) Senior Sergeant/Chief [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.038290    "Signals Intelligence (SIGINT) Senior Sergeant/SIGINT Chief [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.038291    "Signals Intelligence Analysis Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.038294    "Signals Intelligence Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.038295    "Signals Intelligence/Electronic Warfare Chief [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.039286    "Space Systems Operations Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.039287    "Space Systems Operations Superintendent [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.039381    "Special Forces Senior Sergeant [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.040871    "Supervisory Air Intercept Controller [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.040940    "Surface Ship USW Supervisor [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.041305    "Tactical Air Control Party (TACP) Manager [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-2013.00.041314    "Tactical/Mobile (Tacmobile) Watch Officer [First-Line Supervisors of All Other Tactical Operations Specialists]"
*  ODH#55-3011.00.000225    "Acoustic Sensor Operator [Air Crew Members]"
*  ODH#55-3011.00.000550    "Aerial Gunner [Air Crew Members]"
*  ODH#55-3011.00.000848    "Airborne and Air Delivery Specialist [Air Crew Members]"
*  ODH#55-3011.00.000849    "Airborne Battle Management Systems, Weapons Director [Air Crew Members]"
*  ODH#55-3011.00.000850    "Airborne Mine Countermeasures (AMCM) Aircrewman [Air Crew Members]"
*  ODH#55-3011.00.000851    "Airborne Mission Systems [Air Crew Members]"
*  ODH#55-3011.00.000853    "Airborne Missions Systems [Air Crew Members]"
*  ODH#55-3011.00.000854    "Airborne Operations [Air Crew Members]"
*  ODH#55-3011.00.000857    "Airborne Radio Operator/In-Flight Refueling Observer/Loadmaster [Air Crew Members]"
*  ODH#55-3011.00.000988    "Airman [Air Crew Members]"
*  ODH#55-3011.00.002813    "Aviation Antisubmarine Warfare Technician [Air Crew Members]"
*  ODH#55-3011.00.002819    "Aviation Electronic Warfare Operator [Air Crew Members]"
*  ODH#55-3011.00.002840    "Aviation Warfare Systems Operator (Acoustic) [Air Crew Members]"
*  ODH#55-3011.00.002841    "Aviation Warfare Systems Operator (Helicopter) [Air Crew Members]"
*  ODH#55-3011.00.002842    "Aviation Warfare Systems Operator (Non-Acoustic) [Air Crew Members]"
*  ODH#55-3011.00.009239    "Communications Operator [Air Crew Members]"
*  ODH#55-3011.00.010903    "Crew Chief [Air Crew Members]"
*  ODH#55-3011.00.011109    "Cryptologic Technician Operator/Analyst [Air Crew Members]"
*  ODH#55-3011.00.014426    "Electronic Warfare Operational Intelligence Crewman [Air Crew Members]"
*  ODH#55-3011.00.014427    "Electronic Warfare Operator [Air Crew Members]"
*  ODH#55-3011.00.014938    "Enlisted Aircrew/Aerial Observer/Gunner [Air Crew Members]"
*  ODH#55-3011.00.016807    "Fixed-Wing Aircraft Crew Chief [Air Crew Members]"
*  ODH#55-3011.00.016808    "Fixed-Wing Aircraft Flight Engineer [Air Crew Members]"
*  ODH#55-3011.00.016809    "Fixed-Wing Aircraft Flight Mechanic [Air Crew Members]"
*  ODH#55-3011.00.016810    "Fixed-Wing Transport Aircraft Specialist [Air Crew Members]"
*  ODH#55-3011.00.016922    "Flight Communications Operator [Air Crew Members]"
*  ODH#55-3011.00.016928    "Flight Crew Ordnanceman [Air Crew Members]"
*  ODH#55-3011.00.016936    "Flight Engineer [Air Crew Members]"
*  ODH#55-3011.00.016938    "Flight Engineer, Helicopter [Air Crew Members]"
*  ODH#55-3011.00.016939    "Flight Engineer, Performance Qualified [Air Crew Members]"
*  ODH#55-3011.00.020503    "Helicopter Crew Chief [Air Crew Members]"
*  ODH#55-3011.00.020510    "Helicopter Search and Rescue Aircrew Swimmer [Air Crew Members]"
*  ODH#55-3011.00.020511    "Helicopter Specialist [Air Crew Members]"
*  ODH#55-3011.00.020513    "Helicopter Utility Aircrewman [Air Crew Members]"
*  ODH#55-3011.00.021867    "In-Flight Refueling Craftsman [Air Crew Members]"
*  ODH#55-3011.00.021871    "In-flight Technician [Air Crew Members]"
*  ODH#55-3011.00.027813    "Multi-Mission Helicopter Aircrewman [Air Crew Members]"
*  ODH#55-3011.00.027832    "Multi-Sensor Operator [Air Crew Members]"
*  ODH#55-3011.00.028052    "Naval Aircrewman [Air Crew Members]"
*  ODH#55-3011.00.028053    "Naval Aircrewman (Special Assignment) [Air Crew Members]"
*  ODH#55-3011.00.028054    "Naval Aircrewman Avionics [Air Crew Members]"
*  ODH#55-3011.00.028055    "Naval Aircrewman Helicopter [Air Crew Members]"
*  ODH#55-3011.00.028056    "Naval Aircrewman Mechanical [Air Crew Members]"
*  ODH#55-3011.00.028057    "Naval Aircrewman Operator [Air Crew Members]"
*  ODH#55-3011.00.028058    "Naval Aircrewman Tactical Helicopter [Air Crew Members]"
*  ODH#55-3011.00.028379    "Non-Acoustic Operator [Air Crew Members]"
*  ODH#55-3011.00.032390    "Presidential Helicopter Crew Chief [Air Crew Members]"
*  ODH#55-3011.00.034613    "Reel System Operator [Air Crew Members]"
*  ODH#55-3011.00.042356    "Tiltrotor Crew Chief [Air Crew Members]"
*  ODH#55-3011.00.043206    "Transport Aircrewman [Air Crew Members]"
*  ODH#55-3011.00.044021    "Utility Aircrewman [Air Crew Members]"
*  ODH#55-3011.00.044332    "Vertical Takeoff Unmanned Aerial Vehicle Specialist [Air Crew Members]"
*  ODH#55-3011.00.045075    "Weapons and Tactics Instructor [Air Crew Members]"
*  ODH#55-3012.00.000898    "Aircraft Launch and Recovery Equipment Maintenance Technician [Aircraft Launch and Recovery Specialists]"
*  ODH#55-3012.00.000899    "Aircraft Launch and Recovery Technician [Aircraft Launch and Recovery Specialists]"
*  ODH#55-3012.00.001799    "Arresting Gear Operator [Aircraft Launch and Recovery Specialists]"
*  ODH#55-3012.00.002814    "Aviation Boatswain's Mate [Aircraft Launch and Recovery Specialists]"
*  ODH#55-3012.00.002815    "Aviation Boatswain's Mate, Launching & Recovery Equipment [Aircraft Launch and Recovery Specialists]"
*  ODH#55-3012.00.005750    "C-13 Catapult Operator [Aircraft Launch and Recovery Specialists]"
*  ODH#55-3012.00.015416    "Expeditionary Airfield Systems Technician [Aircraft Launch and Recovery Specialists]"
*  ODH#55-3013.00.001782    "Armor Reconnaissance Vehicle Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.001783    "Armor Reconnaissance Vehicle Driver [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.001965    "Assault Amphibious Vehicle (AAV) Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.001967    "Assault Boat Coxswain [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.004880    "BRADLEY LINEBACKER Crewmember [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.006845    "Cavalry Scout [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.015417    "Expeditionary Fighting Vehicle (EFV) Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.023673    "LAV Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.023740    "LCAC Operator [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.025021    "M1 Armor Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.025022    "M1A1 Tank Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.025024    "M48-M60 Armor Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.025023    "M48/M60 Tank Driver [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.025025    "M60A2 Armor Crewman [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.041407    "Tank Crewmember [Armored Assault Vehicle Crew Members]"
*  ODH#55-3013.00.046041    "XM1 Tank Driver [Armored Assault Vehicle Crew Members]"
*  ODH#55-3014.00.000492    "Advanced TOMAHAWK Weapon Control System (ATWCS) AN/SWG-4 Operator and Maintenance Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.000729    "Air and Missile Defense (AMD) Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.000870    "Aircraft Armament Mechanic [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.001463    "Anti-tank Missileman [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.001875    "Artillery Meteorological Man [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.002342    "ATWCS Launch Control Group Replacement (LCGR) Operation and Maintenance Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.006118    "Cannon Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.006119    "Cannon Fire Direction Specialist [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016071    "Field Artillery Automated Tactical Data System Specialist [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016072    "Field Artillery Basic [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016073    "Field Artillery Cannoneer [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016074    "Field Artillery Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016075    "Field Artillery Fire Control Man [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016077    "Field Artillery Operations Man [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016516    "Fire Control Mechanic [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016520    "Fire Control Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016521    "Fire Control Technician B (Ballistic Missile Fire Control) [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016522    "Fire Control Technician G (Gunfire Control) [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016523    "Fire Controlman [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016597    "Fire Support Man [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.016598    "Fire Support Specialist [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.018415    "GCS MK 160 MOD 4 Fire Control Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.019496    "Guided Missile Launching System Maintenance Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.019497    "Guided Missile Launching System Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.019543    "Gunner's Mate [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.019544    "Gunner's Mate G (Guns) [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.019545    "Gunner's Mate M (Missiles) [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.019566    "GWOT Support Assignment-Counter Rocket Artillery and Mortar (C-RAM) [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.019975    "HARPOON (AN/SWG-1A) Engagement Planning Operator [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.020046    "HAWK Missile System Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.020597    "High Mobility Artillery Rocket System (HIMARS) Operator [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.020872    "HONEST JOHN Rocket Crew Member [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.022498    "In-Tube Conversion Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.023425    "LANCE Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.023426    "LANCE Crewmember/MLRS Sergeant [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.024913    "Low Altitude Air Defense (LAAD) Gunner [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.025519    "Man Portable Air Defense System Crewmember (RC) [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.025939    "Master Fire Control Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.027222    "Missile And Missile Checkout Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.027228    "Missile Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.027823    "Multiple Launch Rocket System (MLRS) Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.027824    "Multiple Launch Rocket System (MLRS) Operations/Fire Direction Specialist [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.027825    "Multiple Launch Rocket System (MLRS)/High Mobility Artillery Rocket System (HIMARS) Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.028504    "Nuclear Weapons Specialist [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.029291    "Ordnance Artificer [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.030230    "PATRIOT Fire Control Enhanced Operator/Maintainer [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.030231    "PATRIOT Launching Station Enhanced Operator/Maintainer [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.030539    "PERSHING Missile Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.034581    "Redeye Gunner [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.037455    "SERGEANT Missile Crewman [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.039262    "Space and Missile Defense Operations [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.039759    "SSN/SSBN Weapons Equipment Operator [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.040258    "Stinger Anti-Terrorist Weapon (ATW) Operator Maintenanceman [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.040748    "Submarine Vertical Launch System Tube Maintenance Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.041307    "Tactical Automated Fire Control Systems Specialist [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.042612    "TOMAHAWK Weapon System (Surface) Operator [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.042786    "Torpedoman's Mate [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.044328    "Vertical Launching System (VLS) Advanced Technician [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.044621    "VULCAN Crewmember [Artillery and Missile Crew Members]"
*  ODH#55-3014.00.044765    "Warhead Maintenance Specialist [Artillery and Missile Crew Members]"
*  ODH#55-3015.00.000177    "ACDS Block 1 Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.000545    "AEGIS Console Operator Track 3 [Command and Control Center Specialists]"
*  ODH#55-3015.00.000546    "Aegis Operations Specialist [Command and Control Center Specialists]"
*  ODH#55-3015.00.000588    "Aerospace Control And Warning Systems [Command and Control Center Specialists]"
*  ODH#55-3015.00.000590    "Aerospace Control And Warning Systems, Manuel Systems [Command and Control Center Specialists]"
*  ODH#55-3015.00.000591    "Aerospace Control And Warning Systems, Sector Operations Control Center [Command and Control Center Specialists]"
*  ODH#55-3015.00.000592    "Aerospace Control And Warning Systems, Theater Air Control System [Command and Control Center Specialists]"
*  ODH#55-3015.00.000593    "Aerospace Control And Warning Systems, Weapons Director [Command and Control Center Specialists]"
*  ODH#55-3015.00.000774    "Air Control Electronics Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.000778    "Air Defense Command, Control, Communications, Computers and Intelligence Tactical Operations Center Enhanced Operator/Maintainer [Command and Control Center Specialists]"
*  ODH#55-3015.00.001234    "AN/SSN-2 (V) 4 Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.001235    "AN/SYQ-13 NAV/C2 Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.001237    "AN/TSQ-73 Air Defense Artillery Command and Control System Operator/Maintainer [Command and Control Center Specialists]"
*  ODH#55-3015.00.002283    "ASW/ASUW Tactical Air Control (ASTAC) Leadership [Command and Control Center Specialists]"
*  ODH#55-3015.00.002284    "ASW/ASUW Tactical Air Controller (ASTAC) [Command and Control Center Specialists]"
*  ODH#55-3015.00.005751    "C2 Tactical Analysis Technician [Command and Control Center Specialists]"
*  ODH#55-3015.00.009015    "Combat Control [Command and Control Center Specialists]"
*  ODH#55-3015.00.009063    "Command Post Craftsman [Command and Control Center Specialists]"
*  ODH#55-3015.00.010613    "Counter Intelligence Agent [Command and Control Center Specialists]"
*  ODH#55-3015.00.011107    "Cryptologic Support Specialist [Command and Control Center Specialists]"
*  ODH#55-3015.00.011826    "Defense Analyst [Command and Control Center Specialists]"
*  ODH#55-3015.00.012597    "Direct Support (DIRSUP)/Ships Signals Exploitation Equipment Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.014417    "Electronic Systems Security Assessment [Command and Control Center Specialists]"
*  ODH#55-3015.00.014430    "Electronic Warfare Technician (Advanced Application) [Command and Control Center Specialists]"
*  ODH#55-3015.00.018854    "Global Command and Control System Common Operational Picture/Maritime (GCCS COP/M) Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.018855    "Global Command and Control System Common Operational Picture/Maritime 4.X (GCCS COP/M 4.X) Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.019387    "Ground Surveillance Systems Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.022325    "Intelligence Analyst [Command and Control Center Specialists]"
*  ODH#55-3015.00.022330    "Intelligence Officer [Command and Control Center Specialists]"
*  ODH#55-3015.00.022894    "Joint Tactical Ground Station (JTAGS)/Multi-Mission Mobile Processor (M3P) System Operator/Maintainer [Command and Control Center Specialists]"
*  ODH#55-3015.00.022895    "Joint Terminal Attack Controller [Command and Control Center Specialists]"
*  ODH#55-3015.00.022896    "Joint Terminal Attack Controller (JTAC) [Command and Control Center Specialists]"
*  ODH#55-3015.00.022897    "Joint Terminal Attack Controller Instructor (JTAC-I) [Command and Control Center Specialists]"
*  ODH#55-3015.00.023422    "LAMPS MK III Air Tactical Control Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.025713    "Marine Air Ground Task Force (MAGTF) Planning Specialist [Command and Control Center Specialists]"
*  ODH#55-3015.00.028005    "National OPELINT Analyst [Command and Control Center Specialists]"
*  ODH#55-3015.00.028082    "Navy Command and Control System (NCCS) Ashore System/Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.029073    "Operations and Intelligence Assistant [Command and Control Center Specialists]"
*  ODH#55-3015.00.029108    "Operations Specialist [Command and Control Center Specialists]"
*  ODH#55-3015.00.029109    "Operations Specialists [Command and Control Center Specialists]"
*  ODH#55-3015.00.029113    "Operations Systems Specialist [Command and Control Center Specialists]"
*  ODH#55-3015.00.037432    "Sensor Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.037919    "Ship Self Defense System (SSDS) MK1 Operator [Command and Control Center Specialists]"
*  ODH#55-3015.00.038286    "Signals Analyst [Command and Control Center Specialists]"
*  ODH#55-3015.00.039758    "SSN/SSBN Assistant Navigator [Command and Control Center Specialists]"
*  ODH#55-3015.00.040583    "Strike Planning Applications [Command and Control Center Specialists]"
*  ODH#55-3015.00.041304    "Tactical Air Control Party [Command and Control Center Specialists]"
*  ODH#55-3015.00.041306    "Tactical Air Defense Controller [Command and Control Center Specialists]"
*  ODH#55-3015.00.041814    "Telemetry Collection and Analysis Technician [Command and Control Center Specialists]"
*  ODH#55-3016.00.009020    "Combat Rifle Crewmember [Infantry]"
*  ODH#55-3016.00.015418    "Expeditionary Force - Combat Skills [Infantry]"
*  ODH#55-3016.00.016212    "Fighting Vehicle Infantryman [Infantry]"
*  ODH#55-3016.00.019564    "GWOT IA/ILO Multi-National Force, Not Deployed [Infantry]"
*  ODH#55-3016.00.019565    "GWOT Support Assignment-Basic Combat Unit Member [Infantry]"
*  ODH#55-3016.00.020425    "Heavy Antiarmor Weapons Infantryman [Infantry]"
*  ODH#55-3016.00.021715    "Indirect Fire Infantryman [Infantry]"
*  ODH#55-3016.00.021716    "Individual GWOT IA/ILO Multi-National Force [Infantry]"
*  ODH#55-3016.00.021846    "Infantry Assaultman [Infantry]"
*  ODH#55-3016.00.021854    "Infantryman [Infantry]"
*  ODH#55-3016.00.025109    "Machine Gunner [Infantry]"
*  ODH#55-3016.00.027532    "Mortarman [Infantry]"
*  ODH#55-3016.00.035536    "Rifleman [Infantry]"
*  ODH#55-3016.00.036828    "Scout Sniper [Infantry]"
*  ODH#55-3016.00.036830    "Scout-Sniper [Infantry]"
*  ODH#55-3017.00.000224    "Acoustic Intelligence Specialist [Radar and Sonar Technicians]"
*  ODH#55-3017.00.000797    "Air Intercept Controller [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001205    "AN/BQQ-6 TRIDENT Level II Journeyman Operation and Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001206    "AN/BSY-1 (XN-1)(V) Advanced Organizational Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001207    "AN/BSY-1 (XN-1)(V) Basic Organizational Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001208    "AN/BSY-1 and AN/BQQ-5E Combined Retained Equipment Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001209    "AN/SLQ-48(V) Mine Neutralization Systems (MNS) Operator/Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001210    "AN/SQQ-30 Mine Classifying/Detecting Set Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001211    "AN/SQQ-32 Minehunting Sonar Set Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001212    "AN/SQQ-32(V)3 Minehunting Sonar Set Operator (MSS) [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001213    "AN/SQQ-89(V) 2/3/4/6/7/8/9/12 Passive Sonar Level II Technician/Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001214    "An/Sqq-89(V) 8/12 Sonar Subsystem Level I Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001215    "AN/SQQ-89(V) Adjunct Subsystem Level II Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001216    "AN/SQQ-89(V)14 Sonar System Level I Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001217    "AN/SQQ-89(V)14 Undersea Warfare Control Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001218    "AN/SQQ-89(V)15 Sonar System Journeyman [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001219    "AN/SQQ-89(V)15 Sonar System Level I Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001220    "AN/SQQ-89(V)15 Sonar System Level II Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001221    "AN/SQQ-89(V)2/(V)9 Sonar Subsystem Level I Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001222    "AN/SQQ-89(V)2/3/5 Passive Sonar Level II Technician/Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001223    "AN/SQQ-89(V)2/9 Active Sonar Level II Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001224    "AN/SQQ-89(V)3/5 Active Sonar Level II Technician/Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001225    "AN/SQQ-89(V)3/5/8 Sonar Subsystem Level I Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001226    "AN/SQQ-89(V)4/6 Active Sonar Level II Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001227    "An/Sqq-89(V)4/6/10 Sonar Subsystem Level I Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001228    "An/Sqq-89a(V)15 Surface Ship Usw Combat Systems Journeyman [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001229    "AN/SQQ-89A(V)15 Surface Ship USW Combat Systems Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001230    "An/Sqq-89a(V)15 Surface Ship Usw Combat Systems Sensor Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001231    "AN/SQR-17/17A(V) Series Sonar Signal Processor Subsystem (SSPS) Level II Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001232    "AN/SQS-53A Sonar Subsystem Level II Technician/Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001233    "AN/SQS-53D Sensor Subsystem Level II Technician/Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.001236    "AN/SYS-2 Integrated Automatic Detection and Tracking (IADT) Systems Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.002282    "ASW Specialist [Radar and Sonar Technicians]"
*  ODH#55-3017.00.003354    "Basic Acoustic Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.004872    "BQQ-5/5 (Series) Submarine Sonar Advanced Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.004873    "BQQ-5/5 (V) Submarine Sonar Basic Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.013856    "ECDIS-N Navigation Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.016070    "Field Artillery (FA) Firefinder Radar Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.016079    "Field Artillery Radar Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.021528    "IAP Displays Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.022649    "IUSS Acoustic Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.022650    "IUSS Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.022651    "IUSS Master Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.022919    "Journeyman Level Acoustic Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.023741    "LCAC Radar Operator/Navigator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.025957    "Master Sonar Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.031382    "Planning Series - AN/WLD-1(V)1 Remote Minehunting System Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.031383    "Planning Series - AN/WLD-1(V)1 Remote Minehunting System Variable Depth Sensor (VDS) Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.033926    "Radarman [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039177    "Sonar Auxiliary Maintenance and Operations Repairman [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039178    "Sonar Subsystem Equipment Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039179    "Sonar Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039180    "Sonar Technician (Submarine) [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039181    "Sonar Technician (Surface) [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039182    "Sonar Technician AN/BQQ-10(V) Operator/Maintainer [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039183    "Sonar Technician AN/BQQ5 Series (B/C/D/E) Advanced Maintainer [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039184    "Sonar Watchstander [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039185    "Sonar, Combat Control and Architecture (S/CC/A) Equipment Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039285    "Space Systems Operations Craftsman [Radar and Sonar Technicians]"
*  ODH#55-3017.00.039757    "SSDS MK 2 Advanced Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.040747    "Submarine Special Purpose Acoustic Equipment Maintenance Technician [Radar and Sonar Technicians]"
*  ODH#55-3017.00.041001    "SURTASS Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.041014    "Surveillance Sensor Operator [Radar and Sonar Technicians]"
*  ODH#55-3017.00.041597    "TDP Displays Analyst [Radar and Sonar Technicians]"
*  ODH#55-3017.00.044617    "Voyage Management System Operator [Radar and Sonar Technicians]"
*  ODH#55-3018.00.000468    "Advance Seal Delivery System Maintainer [Special Forces]"
*  ODH#55-3018.00.001191    "Amphibian Crewmember [Special Forces]"
*  ODH#55-3018.00.003355    "Basic Combatant Swimmer [Special Forces]"
*  ODH#55-3018.00.009026    "Combatant Swimmer (SEAL) [Special Forces]"
*  ODH#55-3018.00.022892    "Joint Special Operations [Special Forces]"
*  ODH#55-3018.00.025948    "Master Naval Parachutist [Special Forces]"
*  ODH#55-3018.00.028073    "Naval Special Warfare Medic [Special Forces]"
*  ODH#55-3018.00.029937    "Parachutist [Special Forces]"
*  ODH#55-3018.00.029960    "Pararescue Craftsman [Special Forces]"
*  ODH#55-3018.00.029961    "Pararescue Manager [Special Forces]"
*  ODH#55-3018.00.034443    "Reconnaissance Crewmember [Special Forces]"
*  ODH#55-3018.00.034444    "Reconnaissance Man [Special Forces]"
*  ODH#55-3018.00.034445    "Reconnaissance Man, Combatant Diver Qualified [Special Forces]"
*  ODH#55-3018.00.034446    "Reconnaissance Man, Parachute and Combatant Diver Qualified [Special Forces]"
*  ODH#55-3018.00.034447    "Reconnaissance Man, Parachutist Qualified [Special Forces]"
*  ODH#55-3018.00.036960    "SDV Pilot/Navigator/DDS Operator [Special Forces]"
*  ODH#55-3018.00.036973    "Seal Delivery Vehicle (SDV) Team Technician [Special Forces]"
*  ODH#55-3018.00.039376    "Special Forces Assistant Operations and Intelligence Sergeant [Special Forces]"
*  ODH#55-3018.00.039377    "Special Forces Communications Sergeant [Special Forces]"
*  ODH#55-3018.00.039378    "Special Forces Engineer Sergeant [Special Forces]"
*  ODH#55-3018.00.039379    "Special Forces Medical Sergeant [Special Forces]"
*  ODH#55-3018.00.039383    "Special Forces Weapons Sergeant [Special Forces]"
*  ODH#55-3018.00.039408    "Special Warfare Boat Operator [Special Forces]"
*  ODH#55-3018.00.039409    "Special Warfare Combatant Crewman [Special Forces]"
*  ODH#55-3018.00.039410    "Special Warfare Operator [Special Forces]"
*  ODH#55-3018.00.041061    "Survival Specialist [Special Forces]"
*  ODH#55-3019.00.000475    "Advanced Foreign Counterintelligence Specialist (AFCS) [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.000482    "Advanced Military Source Operations Specialist (AMOS) [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.000598    "Aerospace Physiological Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.000799    "Air Launch Weapons Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.000825    "Air Support Operations Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.000858    "Airborne Sensor Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.001462    "Antitank Assault Gunner [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.001767    "Armament Weapons Support Equipment Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.001781    "Armor Reconnaissance Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.001795    "Army Ranger [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.001876    "Artillery or Naval Gunfire Observer [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.002280    "ASW Operations Center Electronic Warfare Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.002281    "ASW Operations Center Equipment Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.002838    "Aviation Survival Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.005985    "Camouflage Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.007481    "Chemical Operations Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.007514    "Chemical, Biological, Radiological, and Nuclear (CBRN) Defense Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.007516    "Chemical, Biological, Radiological, Nuclear (CBRN)Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.009017    "Combat Direction Finding System (AN/SRS-1) Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.009021    "Combat Surveillance and Target Acquisition Crewmember [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.009022    "Combat Surveillance and Target Acquisition Noncommissioned Officer [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.009209    "Communication Signals Intelligence [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.010613    "Counter Intelligence Agent [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.010628    "Counterintelligence Agent [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.010634    "Counterintelligence/Humint Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.011098    "Cryptographic Center Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.011103    "Cryptologic Digital Network Technician/Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.011108    "Cryptologic Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.011110    "Cryptologic Technician Technical [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.011445    "Cv/Cvn Cv-Tsc System Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.011829    "Defensive Fire Control Systems Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.014381    "Electronic Intelligence (ELINT) Intercept Operator/Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.014382    "Electronic Intelligence Interceptor/Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.014413    "Electronic Signals Intelligence Exploitation [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.014428    "Electronic Warfare Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.014461    "Electronics Warfare Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.015419    "Expeditionary Warfare Intelligence Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.016078    "Field Artillery Operations Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.016520    "Fire Control Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.016856    "Flash Ranging Crewmember [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.016953    "Flight Operations Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.019562    "GWOT IA/ILO Intelligence Support [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.019563    "GWOT IA/ILO Intelligence Support, Not Deployed [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.019567    "GWOT/IA Joint Special Operations Task Force Member-Deployed [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.021869    "In-Flight Refueling Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.021847    "Infantry Indirect Fire Crewmember [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.021849    "Infantry Operations Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.021852    "Infantry Weapons Crewmember [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.021854    "Infantryman [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.022325    "Intelligence Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.022327    "Intelligence Clerk [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.022335    "Intelligence Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.022399    "Intermediate Technical ELINT (TECHELINT) Analysis Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.022883    "Joint Chemical, Biological, Radiological, Nuclear Reconnaissance System Operator (JCBRNRS) LAV Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.023477    "Landing Support Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.024218    "Light Air Defense Artillery Crewmember [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*/
*  MSHCS#55-3019.00.025711    "Marine [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
/*  ODH#55-3019.00.026613    "Mercenary [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.027025    "Military Source Operations Specialist (MSOS) [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.027789    "Multi Sensor Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.027791    "Multi-Discipline Counter-Intelligence Operator/Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.027832    "Multi-Sensor Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.028003    "National Guard Member [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.028087    "Navy Tactical Human Intelligence (Humint) Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.028199    "Network Intelligence Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.029059    "Operational Intelligence (OPINTEL) Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.029092    "Operations Intelligence [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.029449    "OUTBOARD System Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.029620    "P-3 Armament/Ordnance IMA Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.029934    "Parachute Rigger [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.032231    "Powered Bridge Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.032391    "Presidential Support Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.033365    "Psychological Operations Non-Commissioned Officer [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.033364    "Psychological Operations Noncommissioned Officer [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.033368    "Psychological Operations Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.034536    "Recruit Instructor [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.035637    "Riverine Assault Craft (RAC) Crewman [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.036122    "Rubber and Plastics Worker [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.036237    "S3B Multi-Sensor Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.036994    "SEAMARK Advanced Operator Maintainer [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.037929    "Shipboard Chemical, Biological and Radiological-Defense (CBR-D) Operations and Training Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.037930    "Shipboard Intelligence Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.038285    "Signalman [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.038288    "Signals Collector/Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.038293    "Signals Intelligence Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.038768    "Smoke and Flame Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.039124    "Soldier [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.039227    "Sound Ranging Crewmember [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.039321    "Special Communication Signals Collection Operator/Analyst [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.039386    "Special Intelligence System Administrator/Communicator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.040509    "Strategic Debriefing Specialist (SDS) [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.040578    "Strike Intermediate Armament Maintenanceman [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.040777    "Subsurface Augmentee ELINT Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.040778    "Subsurface Augmentee Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.041308    "Tactical Debriefer [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.041313    "Tactical/Mobile (Tacmobile) Ashore Analysis Systems Operator [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.041511    "Target Aircraft Technician [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.041705    "Technical Surveillance Countermeasures (TSCM) Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*  ODH#55-3019.00.043803    "Unattended Ground Sensor Specialist [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"
*/


---

File: repos/HL7_SLASH_fhir-military-service/input/fsh/USVeteran.fsh

Profile: USVeteran
Parent: USCorePatient
Id: usveteran
Title: "US Veteran"
Description: "US Veteran profile extends US Core Patient profile. It's intended to be used when the patient is Veteran was confirmed by the VA. 
This profile includes a ['US Veteran Status'] (usveteranstatus) extension to hold status information as a boolean (i.e. 'true' indicates that the patient's veteran status was confirmed)."
* extension contains
    USVeteranStatus named USVeteranStatus 0..1 MS

Extension:  USVeteranStatus
Id: military-service-veteran-status
Title: "us-veteran-status"
Description: "us-veteran-status is a boolean extension used to specify whether a patient was confirmed or verified to have Veteran status. Veteran status is not limited to Combat Status but reflects the status of yes/no they had indeed served in a military organization"
* value[x] only boolean
* valueBoolean 1..1 MS


 

---

File: repos/HL7_SLASH_fhir-military-service/input/includes/markdown-link-references.md

<!-- Temporary changes to fix formatting for changelog -->
<style>
  ul.new-content {
    padding-left: 25px !important;
  }
</style> 
[patientmatch]:https://www.hl7.org/fhir/operation-patient-match.html
[USVeteranStatus]:StructureDefinition-military-service-veteran-status.html
[USVeteran]: StructureDefinition-usveteran-definitions.html 

[ODHSupervisoryLevelValueSet]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7613
[ODHOccupationValueSet]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7186
[ODHIndustryValueSet]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7187
[MilitaryServiceBranchValueSet]: ValueSet-military-service-branch-vs.html
[Pay Grade Value Set]: ValueSet-military-service-paygrade-vs.html
[Separation Reason Value Set]: ValueSet-military-service-separation-reason-vs.html
[Discharge Status Value Set]: ValueSet-military-service-discharge-status-vs.html
[Combat Episode Mission Value Set]: ValueSet-military-service-combat-episode-mission-vs.html
[Military Occupation Value Set]: ValueSet-military-service-military-occupation-vs.html
[FHIR US Core Capability Statement - Server]: https://www.hl7.org/fhir/us/core/CapabilityStatement-us-core-server.html
[FHIR US Core Capability Statement - Client]: https://www.hl7.org/fhir/us/core/CapabilityStatement-us-core-client.html

---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/change_log.md

### Initial Version

| Date            | Notes         | IG Release |
|-----------------|---------------|------------|
| April 17th, 2023 | Publication for QA review| STU1       |
| April 5th, 2021 | For QA review | STU1       |


---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/conformance-general.md

This section outlines requirements and recommendations for Military Service History participants. The
conformance verbs - SHALL or MUST, SHOULD, and MAY - are defined in [FHIR
Conformance Rules](http://hl7.org/fhir/R4/conformance-rules.html).

### Military Service History Participant Roles

Two roles for **Military Service History Participants** are defined:

-   **Military Service History and Status (Military Service History) Data Sender** - a system
    provides Military Service History data in response to a data query or autonomously pushes Military Service History
    data to an Military Service History receiver. The data sender does not have to be the originator
    of the data it possesses. The data sender role is similar to a [US Core
    Responder](https://www.hl7.org/fhir/us/core/#us-core-actors), except the
    data sent is not assumed to be a response to a query.

    -   This role may be played may be FHIR server enabled API.

-   **Military Service History Data Receiver** - a system involved in exchange of Military Service History data that
    accepts Military Service History data from an Military Service History Data Sender. The data receiver may receive data
    as part of a predetermined workflow or initiate the exchange via a query or
    on a regular basis via subscription. The receiver role is similar to a [US
    Core Requestor](https://www.hl7.org/fhir/us/core/#us-core-actors), except
    the data does not have to be explicitly requested.

    -   This role may be a played by an EHR system, web application,
        patient-facing application, etc.

This implementation currently only provides
[CapabilityStatements](https://www.hl7.org/fhir/us/core/capstatements.html)
consistent with FHIR US Core and documentation for "pull" (query-response)
architectures, however, regardless how exchanges occur, all participants MUST
follow the conformance requirements in this IG, **except** those specifically
identified as applying only to pull architectures.

### "MUST" Requirements for Conformance

-   Patient resources \*\* veteranStatus operation

-   Observation resource Both resources implemented consistent with US Core

#### Publish a CapabilityStatement Identifying Supported Profiles and Operations

Each Military Service History participant MUST publish a FHIR CapabilityStatement listing their
supported profiles, by declaring the profile in
`CapabilityStatement.rest.resource.supportedProfile`. The CapabilityStatement
SHALL be returned in response to a `GET [base]/metadata` request.

ALL Military Service History participants MUST at minimum support the [MilitaryServiceEpisode], 
[DeploymentEpisode] profiles. Ideally, the [MilitaryOccupation] will also be
included to specify what military occupation or occupations were performed
during military service.

#### Support US Core Conformance Requirements

Additional [conformance requirements from US
Core](http://hl7.org/fhir/us/core/capstatements.html) apply to RESTful
interactions, searches, and resource formats in Military Service History. Military Service History "inherits" all US Core
conformance requirements. US Core provides base profiles for many (but not all)
Military Service History profiles, defines the meaning of MustSupport, and outlines expectations for
handling of missing or unknown data elements. Likewise, US Core outlines how to
associate provenance information associated with collection, transfer, and
updating of clinical information.

International users of Military Service History may find US Core an impediment to implementation.
Application of Military Service History to other countries is open to further discussion.

### "SHOULD" Recommendations for Conformance

Military Service History participants SHOULD meet the following requirements for conformance:

1.  [Support all Military Service Profiles](#support-all-military-service-history-profiles)

2.  [Use to indicate Conformance](#use-metaprofile-to-signal-conformance)

#### Support All Military Service History Profiles

In addition to supporting the core profiles as described above, Military Service History participants
SHOULD support all profiles defined in Military Service History UNLESS the participant does not
anticipate supplying or consuming a certain type of data, usually by virtue of
playing a limited or specialized role in clinical or information workflows.

Participants SHOULD also support the custom operation (\$**veteranStatus**)
specified in this implementation

#### Use `meta.profile` to Signal Conformance

Participants SHOULD populate `meta.profile` elements for all resources to
indicate which profiles the resources should conform to. Participants SHOULD
also implement [profile search](https://www.hl7.org/fhir/search.html#profile),
which allows participants to query using the `_profile` parameter to return
resources conforming to the profiles declared in `meta.profile`.

Profile search and population of `meta.profile` originate as "SHALL"
requirements in the base FHIR specification; they are not an additional
requirements imposed by Military Service History. However, in practice, few implementations have
followed these requirements. Refer to the [FHIR Documentation on supported
profiles](https://www.hl7.org/fhir/profiling.html#CapabilityStatement.rest.resource.supportedProfile)
for details.

### Capability Statements

This implementation specifies a specialization of the generic US core
implementation guide and the capabilities:

{% include markdown-link-references.md %} [FHIR US Core Capability Statement -
[Server]:
https://www.hl7.org/fhir/us/core/CapabilityStatement-us-core-server.html [FHIR
US Core Capability Statement -
Client]:https://www.hl7.org/fhir/us/core/CapabilityStatement-us-core-client.html

-   The Verification API/Server will conform with US Core ([US Core
    Responder](https://www.hl7.org/fhir/us/core/#us-core-actors)) and SHALL
    support the profiles and custom operation specified in this implementation
    guide.

-   The application/Client will conform with US Core ([US Core
    Requestor](https://www.hl7.org/fhir/us/core/#us-core-actors)) and SHALL
    interpret and process the information specified in the profiles described in
    this implementation guide.

    {% include markdown-link-references.md %}


---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/conformance-profiles.md

### Profile Base

Most MSH profiles are based on US Core profiles defined in the [US Core Implementation Guide (v3.1.1)](http://hl7.org/fhir/us/core/index.html). For
example, the [US Veteran profile](StructureDefinition-usveteran.html) is based on the [US Core Patient](https://www.hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html)
profile. Because of the way profiles work in FHIR, any resource that validates against an MSH profile that is based a US Core profile will automatically be in
compliance with the US Core profile and the associated US Core Data for Interperability (USCDI) data element required by [US regulation](https://www.healthit.gov/curesrule/).
 
-   [Military Service Episode](StructureDefinition-military-service-episode.html) profile can be used to create Observatoin resources that describe a Veteran's military service history; it includes references to [Deployment Episode](StructureDefinition-deployment-history-episode.html)  and [Military Occupation](StructureDefinition-military-service-Occupation.html).

-   [Military Occupation](StructureDefinition-military-service-Occupation.html)is similar to [ODH
    PastOrPresentJob](http://hl7.org/fhir/us/odh/StructureDefinition-odh-PastOrPresentJob.html). It is referenced by [Military Service
    Episode](StructureDefinition-military-service-episode.html).

Where US Core does not provide an appropriate base profile, this implementation profiles FHIR
resources directly as described below:

| Profile                                                | Based on US Core? |
|--------------------------------------------------------|-------------------|
| [Deployment History Episode](StructureDefinition-deployment-history-episode.html) |No|
| [Military Occupation](StructureDefinition-military-service-Occupation.html)     |No|
| [Military Service Episode](StructureDefinition-military-service-episode.html)   |No|
| [US Veteran](StructureDefinition-usveteran.html)                                |Yes|
{: .grid }

### Conformance to MSH Profiles

Each MSH profile expresses requirements and expectations for FHIR instances in
terms of structural constraints and terminology bindings. If an instance is
required to conform with an MSH profile, it MUST
[validate](https://www.hl7.org/fhir/validation.html) against that profile.

#### Data Sender Expectations

Each MSH profile has a conformance statement describing what data or FHIR
instances MUST or SHOULD conform to it.

#### Data Receiver Expectations

An MSH Data Receiver SHOULD perform validation on instances it receives. The
Receiver first of all needs to identify which profile to use for validation.
There four ways to identify the correct profile:

1.  The instance is received in response to a [profile
    search](https://www.hl7.org/fhir/search.html#profile), so the validating
    profile is known in advance.

2.  The instance self-identifies using `meta.profile`. Every Data Sender SHALL
    populate this element to specify which type of information was used/provided to consumer/receivers of military service history.

3.  The Data Receiver can examine the contents of the instance to associate it
    with a profile (in particular, by looking for identifying code or category).

4.  The Data Receiver can iteratively attempt to validate the instance against
    each of the Data Receiver's supported profiles.

If an instance fails validation, the Receiver may reject the instance.

### Element-Level Expectations

#### Sender and Receiver Expectations

For every element that is [required](#required-elements) and/or carries a [Must
Support obligation](#must-support-obligations) (MS):

-   MSH Data Senders SHALL be capable of populating the element, provided the
    Sender supports the profile (as indicated by its CapabilityStatement).

-   If the Sender lacks the data necessary to populate the element:

    -   If the element is required, the [US Core rules on missing
        data](http://hl7.org/fhir/us/core/general-guidance.html#missing-data)
        MUST be followed.

    -   If the element is not required (but is MS), the element SHOULD be
        entirely omitted. If there is a specific reason the data is missing, a
        data absent reason MAY be substituted.

    -   Senders MUST NOT substitute a nonsense or filler value just to satisfy
        MS or cardinality requirement.

-   MSH Data Receivers SHALL be capable of meaningfully processing MS elements,
    provided the Receiver supports the profile. Depending on context,
    "meaningfully process" might mean displaying the data element for human use,
    reacting to it, or storing it for other purposes.

#### Required Elements

An MSH data element is **required** if any of the following criteria are met:

-   The element is a top-level element (a first-level property of the resource)
    and its minimum cardinality is \> 0 in the profile.

-   The element not a top-level element (a second-level property or below), its
    minimum cardinality is \> 0, and all elements directly containing that
    element have minimum cardinality \> 0 in the profile.

-   The element is not a top-level element, its minimum cardinality is \> 0, and
    its immediate higher-level containing element exists in an *instance*
    attempting to conform to the profile.

In other words, a data element may be `1..1`, but if it is contained by an
optional element, then it is not required unless its containing element is
actually present.

#### Must Support Obligations

Interpretation of MS is not straightforward, as there is a difference between a
MS *obligation* and a MS *flag*. The MS *flag* is the red S displayed on profile
pages: S. A MS *obligation* means the element must be treated as described in
[Sender and Receiver Expectations](#sender-and-receiver-expectations).
Significantly, an MS *flag* (S) does not necessarily imply an MS *obligation*,
and MS *obligations* may be attached to elements lacking MS *flags*.

To see which elements have MS flags, consult the "Snapshot Table" view of the
profile. The "Differential Table" view hides MS flags inherited from the parent
profile. The "Snapshot Table (Must Support)" view reflects the IG Publisher's
interpretation of how MS flags translate to MS obligations, which may or may not
coincide with the US Core/MSH interpretation.

The following rules apply in MSH:

-   A profile without a MS flag does not have to be supported [^1]. A
    participant MUST declare support for optional profiles in its
    CapabilityStatement.

    [^1]: Although not common practice, profiles can have MS flags at the data
        element.

-   Any MS flag or flags on an unsupported profile (as stated in participant's
    CapabilityStatement) do not carry MS obligations.

-   An element with an MS flag does not carry an MS obligation if it is nested
    and any one of the elements directly containing that element lacks an MS
    flag. However, if the participant *elects* to support the unflagged element
    or elements in that hierarchy, the elements below the gap then carry an MS
    obligation.

-   An element with an MS flag whose cardinality is 0..0 does not carry an MS
    obligation [^2].

    [^2]: When inheriting from another profile, it is possible to set the upper
        cardinality to zero on an element that was MS in the parent profile. For
        example, you could inherit from US Core Patient, but forbid the
        patient’s name for privacy reasons. In this case, neither Sender nor
        Receiver are expected to populate or support the element – in fact, it
        would be an error if the element were present.

-   A [required element](#required-elements) carries a MS obligation on the part
    of a Data Sender, regardless of whether that element has an MS flag.

-   A [required element](#required-elements) without an MS flag does not carry
    an MS obligation for the Data Receiver [^3].

    [^3]: An example is a Receiver that does not meaningfully process a required
        element even though it was populated by the Sender.

#### Non-Must Support Elements

Data elements in MSH that *do not have* MS obligations still MAY be supported.
If an element is supported, whether it has a MS flag or not, the profile must be
interpreted as if the MS flag were present. For example, `Observation.category`
does not have an MS flag, but a data receiver may implement the capability to
display it.

{% include markdown-link-references.md %}


---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/downloads.md

### Download Links

-   [Full Specification (zip)](full-ig.zip)

-   [Package (tgz)](package.tgz)

-   [JSON Definitions (zip)](definitions.json.zip)

-   [JSON Examples (zip)](examples.json.zip)

-   [XML Definitions (zip)](definitions.xml.zip)

-   [XML Examples (zip)](examples.ttl.zip)

-   [Turtle Definitions](definitions.ttl.zip)
#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

#### Cross Version Analysis ####
{% include cross-version-analysis.xhtml %}

---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/examples.md

### Military Service History Examples
This section provides three examples of the profiles in the IG.  The first is a Vietnam Veteran with 1 Deployment.  The Second is a Desert Storm Veteran with 1 deployment, and the third is a Iraq War Veteran with 2 deployments.

Philip Scott
Vietnam Veteran Example 71-72
US Marine Core
1 period, 1 deployment
68 years
MALE (White)
Name
 1/22/1954
*  ODH#55-1014.00.016076    "Field Artillery Officer [Artillery and Missile Officers]"

Hugo Cross
MALE (Hispanic)
Army
Desert Storm Veteran Example
August 2, 1990 – February 28, 1991
1 period, 1 deployments
50 years
2/12/1972
*  ODH#55-3019.00.001795    "Army Ranger [Military Enlisted Tactical Operations and Air/Weapons Specialists and Crew Members, All Other]"


Crystal Huffman
FEMALE (Black)
Air Force
Iraq War Veteran 
1 period, 2 deployments
2014-2015
2016-2017
Age 30
2/20/1992
*  ODH#55-1011.00.028062    "Naval Flight Officer, Airborne Reconnaissance Officer [Air Crew Officers]"
*  ODH#55-1011.00.028067    "Naval Flight Officer, Weapons Systems Officer [Air Crew Officers]"
 






### [USVeteran](StructureDefinition-usveteran-definitions.html)  
* [`Phillip Scott US Veteran's patient record`](Patient-philip-scott-example-veteran.html) 
* [`Hugo Cross US Veteran's patient record`](Patient-hugo-cross-example-veteran.html)
* [`Crystal Huffman US Veteran's patient record`](Patient-huffman-crystal-example-veteran.html)



### [Military Service Episode](StructureDefinition-military-service-episode.html)  
* [`Phillip Scott Military Service Episode`](Observation-philip-scott-example-military-service-episode.html) 

### [Deployment History Episode](StructureDefinition-deployment-history-episode.html) 
* [`Phillip Scott Deployment History Episode`](Observation-philip-scott-example-deployment-history-episode.html) 

### [Military Occupation](StructureDefinition-military-service-Occupation.html)  
* [`Phillip Scott Military Occupation`](Observation-philip-scott-example-military-occupation.html ) 



---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/ExtensionsAndProfiles.md

### Associated Extensions and Profile: US Veteran

To record the confirmed Veteran status, this IG has identified the need to
specify an extension on the Patient to specify whether the patient was confirmed
to be a veteran.
The US Vetrean profile extends the US Core Patient profile and adds the "vetaranStatus" data element as a true/false (boolean). If pilot projects need it, this extension can be revised to support a state machine for Veteran determination (e.g. submitted --> under verification --> verified:  eligible/ineligible/not a Veteran)
-   [US Veteran](StructureDefinition-usveteran.html) specifies a flag to indicate the veteran status
    as a boolean value.
A FHIR API may use veteran status extension specified in the US Patient profile
to implement the \$veteranStatus operation.

<img src="Associated Extensions related to Veteran Verification.png" 
alt="Associated Extensions related to Veteran Verification" width="100%" />
*Figure 6: Associated Extensions related to Veteran Verification*

#### Testing Guidance

The current VA API uses an ad-hoc verification operation and allows third-party
systems to retrieve the military service - including combat episodes. This track
will demonstrate how this API can be provided using a standards-based approach
that includes FHIR resources and terminology constraints using concepts from
LOINC, SNOMED CT, and CDC ODH - as specified in the associated Logica project
intended to validate the extensions needed to represent Military Service and
Combat Episodes using Observation resource similar to ODH. The current REST API
is used primarily verify veteran status for benefits associated with military
service (e.g., insurance coverage, discounts, education assistance, etc.). The
enhanced FHIR-based API will make this API readily available for health-related
purposes: social determinants of health, risk factors for specific conditions
(e.g. health disease, major depressive disorder, suicidal ideation).

In addition to proving the feasibility of FHIR resources to provide equivalent
capabilities to the current API, this project will also introduce
standards-based concepts in place of local VA terminology for discharge status
and separation reason as well we reusing CDC ODH concept to represent the
military branch and pay grade of a Veteran.

#### Testing Workflow

This workflow identifies the activities and API calls required to address the
requirements specified in the [Use Case Analysis](#use-case-analysis).
Successful testing may also use test scripts and pre-conditions to results of an EHR invoking the proposed
API to verify status and retrieve the military history information of a Veteran
using FHIR-based resources. This diagram uses Object Management Group’s (OMG) Business Process
Modeling Notation (BPMN) to describe the pre-conditions/triggers and
post-conditions/results of using the FHIR-based API outlined in this
implementation guide:

<img src="Testing Workflow.png" alt="Testing Workflow" width="100%" />
*Figure 7: Testing Workflow*

##### Verify Veteran Status: Step 1

Scenario \#1: Veteran Confirmation and Verification

A Veteran is receiving treatment in the community and invokes the
"\$veteranStatus" operation using the Veteran's demographics (e.g. first name, last name,
date of birth, social security number). If the Veteran is verified then the
client application proceed to Step 2.

Scenario Step 1 : Search the Patient resource to evaluate whether "Sam Share" is
a confirmed/validated Veteran based on the VA-specific extension

##### Search Military Service History: Step 2

Scenario Step 2: Search the Observation resource for a list of Military Service
Episodes: search by "subject" (i.e. Patient/Veteran) and by "patient" and "code"
search parameters

For more details on testing, you may refer to the [FHIR Connectathon 25 (September 2020) Track for Military Service History and Status](https://confluence.hl7.org/display/FHIR/2020-09+Social+History%3A++Verification+of+Military+Service+History+and+Status).

#### Examples

Example Patient and Observation resources conforming to this IG are available in this publication under [Examples](examples.html). 


---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/history.md

Publication (Version) History

The following versions of the HL7 FHIR Implementation Guide*: Military Service
History and Status,*  *Release 1 - US Realm* \| STU1 have been published:

| **Date**                                                                    | **IG Version** | **FHIR Version**                | **Description** | **Links**                                                                                |
|-----------------------------------------------------------------------------|----------------|---------------------------------|-----------------|------------------------------------------------------------------------------------------|
| **Current Versions**                                                        |                |                                 |                 |                                                                                          |
| [2021-03-01](http://build.fhir.org/ig/HL7/fhir-military-service/index.html) | 1.0.0          | [4.0.1](http://hl7.org/fhir/R4) | STU 1 Release   | [media/83db143824ee25b6866f5619ebffc522.png](media/83db143824ee25b6866f5619ebffc522.png) |


---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/index.md

                                                                 
### Background
This implementation guide contains profiles and extensions to share Military Service History and Status using FHIR-based application programming interfaces (APIs) consistent with US regulatory requirements (i.e. Title 38 Veteran Benefits). This is a US-realm specificatoin but it is extensible to other realms/jurisdictions (e.g. Canadian Forces).
It harmonizes the requirements of the U.S. Department of Veterans Affairs (VA) and the Centers for Disease Control and Prevention (CDC) to record this information support of administrative and clinical workflows (e.g. exchange with community providers) and the work and social history of patients who are also Veterans.

### Use Case Analysis

The use case anlaysis describes requirements and associated capabilities to manage and
exchange information about Military Service History and Status. All requirements
are analyzed as use cases involving actors/participants and system interactions.

*Note:* Certain requirements were discussed, deemed to be out-of-scope, and
deferred (see [Deferred Requirements](#deferred-requirements)).

Figure 1 is a summary of scenarios (use cases) representing the requirements for
recording self-reported military and combat history. It also illustrates how
FHIR-based APIs can be used to validate employment history information reported
by Veterans.

<img src="Use Case Analysis Overview.png" alt="Use Case Analysis Overview*" width="100%" />
*Figure 1: Use Case Analysis Overview*

#### Use Case Analysis: Actors

##### Clinician
The clinician may be working with Veteran in the community and must assess the
health risks associated with military service.

##### Veteran
The Veteran is the focus of this specification. The API described here allows
Veterans to access and share their military service history and status
information with community and hospital-based clinicians, community service agencies, vendors, and
employers, etc. The Veteran can access their information or make it available to
entities that assist Veterans. Military Service History may be combined with
other employment history information.


#### Use Case Analysis: Use Cases

##### Request Employment History with Social History and Determinants of Health

The clinician is requesting employment information in conjunction with their
social history. If the patient is a Veteran, their employment history will
include military service information. This was a core requirement of the
Occupational Data for Heath (ODH) Implementation Guide we analyzed and reused.
The current specification expands this use case to specify application (i.e.
EHR) capabilities as well as reusable FHIR-based APIs that may be provided by an
authoritative organization (e.g. US Department of Veterans Affairs).

##### Record Military Service History and Status

The social history information reported by the patient - including employment
and military service history - is entered into a system of record used to capture such information and not explicitly EHR. 

##### Verify Veteran History

The EHR system, acting as a FHIR client, uses a standards-based VA RESTful API (FHIR Observation with profiles and extensions) to verify that the patient is a
Veteran and served in the military.

The query is triggered by an EHR. Based on the verification result,the EHR may validate the Veteran status and fill in the combat episodes as
needed to determine social history risks.

Official records and documentation from the military service record, DD214, and other pre--existing documentation can be referenced in the verification process.

##### Verify Veteran Status

The Verification API proposed in this document determines the Veteran’s status
by using demographic information submitted as a query (search operation) to a
FHIR server that supports **Observation** resource - - using the **Patient**
endpoint to determine whether a person is a verified veteran. Additional
information is provided using the Search Service History criteria using the
profiles described in the [Information Requirements](#information-and-semantics-requirements) section (see [Military Service Episode](StructureDefinition-military-service-episode.html)).

##### Search Service History

This use case is part of the proposed verification API based on FHIR. If this
search operation returns one or more **Observation** resources that conform
[Military Service Episode]((StructureDefinition-military-service-episode.html) to the proposed profile,
the Veteran's status confirmed. If the search operation does not find any
matching Observation resources, the Veteran's service history could not be confirmed.

The presence of one or more Observations that conform to the [Deployment
Episode](StructureDefinition-deployment-history-episode.html) profile proposed here indicates that Veteran was deployed.

#### Deferred Requirements

The following use cases were discussed and deferred because they are
out-of-scope for the profiles and extensions described in this implementation
guide design document:


* **Prior Authorization:** U.S. Department of Defense (DoD) administrative transactions are currently used for prior authorization for healthcare services. This use case will not be addressed in this document but it may be relevant to future FHIR profiling efforts.
* **Apply for coverage:** A Veteran's military history and other service-related information are relevant to applying for healthcare coverage. This use case was discussed with the Financial Management Workgroup on March 31, 2020 and it will remain out-of-scope for this iteration of the specification. Military service history is relevant to establish level of care but will not be explored further in this document.
* **Schedule service-connected visit:** Another potential use case included scheduling a visit for a service-connected disorder or condition. This use case was discussed and deemed out-of-scope for now since it is related to level of disability and service-connected problems, as well as:
- -  an encounter related to a service-connected disability, special authority designation and those services are not billable;
- - care may be covered by special authority (e.g. neck/throat cancer); and,
- - coding system for special authority and service-related not in scope.

### Information and Semantics Requirements

 
This section describes the result harmonizing requirements to convey military service history and status at this time. It also harmonizes the content of the Occupational Data for Health Implementation Guide developed by CDC to enhance social history and employment history reporting from EHR systems.

Figure 2 summarizes the proposed profiles and extensions needed to document
military service history. The profiles described here constrain and extend the
normative Observation resources profile (Release 4 and later) to ensure
stability and reusability. FHIR Release 4 marked the first time some FHIR
resources have attained normative status and will be maintained in a manner that
ensure backwards-compatibility. Furthermore, using [Observation R4 and
later](http://build.fhir.org/observation.html) - rather than
[Basic](http://build.fhir.org/basic.html) resource - is the recommended approach
to creating extensible APIs based on FHIR.

<img src="Information Requirements.png" alt="Information Requirements" width="100%" />
*Figure 2: Information Requirements*

**Note:** FHIR implementation, localization, and profiling best-practices are
under development and evolving. This design document is intended to provide
reasoning and context for future projects.

### Acknowledgements

This implementation guide builds upon existing FHIR implementation guidance and
best practices:
-  [US Core Implementation Guide (v 5.0.1)](http://hl7.org/fhir/us/core/index.html) (reusing US Core Patient profile)
-  [Occupational Data for Health (ODH)](http://hl7.org/fhir/us/odh/index.html) (reusing best practices, *PastOrPresentJob* profile)

The project team would like to thank our leadership and colleagues for their
support in the development of Application Programming Interface (API)
implementation guide:

**Department of Veterans Affairs:**
- Steven Brown, MD, Director, CIDMO Knowledge-Based Systems (KBS)
- Christopher Shawn, Director  KBS Standards  & Interoperability(S&I)
- Javon Hyland, Deputy Program Manager, KBS S&I
- Catherine Hoang, Associate Director, KBS Terminology Services
- Ioana Singureanu MsCS, FHL7, Technical Lead KBS S&I
- Rhonna Clark, Deputy Technical Lead KBS S&I
- Matt Greene, Strategy Lead KBS S&I

**Cross-Group Project (CGP) Work Group Co-chairs:**                                                                          
- Floyd Eisenberg MD                                                                                
- Jean Duteau  

**Project team:** 
- Ioana Singureanu MsCS, FHL7, Project Facilitator                                
- Sean Muir, FHIR Implementation Guide Developer, BookZurman                                       
- Jayme Welty, Project Manager, BookZurman                                                               
- Mark Janczewski, MD, MPH, BookZurman

**ALTARUM**
- Craig Newman PhD, Contributor

**VA Developer API (Lighthouse Project):**
- Andrew Fichter, Requirements Contributor                                                                                  
- Shawnee Petrosky, Requirements Contributor                                                                                   
- Derek Brown, Implementer                    
                                                                   
**Defense Health Agency:**                                                                            
- Nancy Orvis, Contributor 
- Eric Strom, Requirements Contributor 
- Allyson Rigel, Terminology Contributor 

**CDC NIOSH:**                                                      
- Genny Luensman, Subject Matter Expert  
                                                                                    
**MITRE**:              
 - Dr. Mark A. Kramer, FSH and SUSHI Advisor
 

{% include markdown-link-references.md %}



---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/militaryhistory.md

## Military Service Episode

This profile design describes how we use observations,  components, and member resources to represent an historical continual Military Service within on branch of service.

As such a veteran's Military Service Episode may have zero or more military service deployment episodes. 

As such a veteran's Military Service Episode may have zero or more military occupations. 

Additionally, the veteran's Military Service Episode contains military discharge and separation reasons.

## Deployment History Episode
Deployment History Episode describes a completed deployment.  This is not intended to describe active duty deployments.  The veterans Deployment History Episode code can contain the mission, the country, the industry, and the supervisory level.

## Military Occupation
The profile reuses the [ODHPastOrPresentJob](http://hl7.org/fhir/us/odh/StructureDefinition-odh-PastOrPresentJob.html)
profile to apply it specifically to military jobs/occupations. One or more military occupations may be referenced by a single Military Service
History record. This profile uses a subset of data elements as seen below:

### Profiles

### Terminolgy
Supervisory Level
[ODHSupervisoryLevelValueSet]

Occupation
[ODHOccupationValueSet] 

Industry
[ODHIndustryValueSet] 

Military Service Branch
[MilitaryServiceBranchValueSet] 

{% include markdown-link-references.md %}


---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/terminology.md

### Terminology Requirements

An initial gap analysis of SNOMED CT terminology identified that we are missing
significant content related to discharge status requirements in
[DischargeStatusCode](#discharge-status-code).

Other terminology extension and harmonization targets are:

-   [Military Branch Code](#military-branch-code)

-   [Pay Grade Code](#pay-grade-code)

Another gap is "separation reason" that requires a coded concept for its
Observation component and its allowed values.

In the future, the [Combat Episode Mission Value Set](ValueSet-military-service-combat-episode-mission-vs.html) may also need a SNOMED CT
extension if the VA API requires it.

 <img src="Terminology Requirements.png" alt="Terminology Requirements" width="100%" />

*Figure 3: Terminology Requirements*

#### Job Supervisory Level or Pay Grade (ODH)

This code system is used in value set:**" Job Supervisory Level or Pay Grade
(ODH)"**

https://phinvads.cdc.gov/vads/ViewValueSet.action?id=B35E2ABE-C20F-EA11-8183-005056ABE2F0

-   Canonical URL based on the current version of UT:
    **http://build.fhir.org/ig/HL7/UTG/CodeSystem-PHOccupationalDataForHealthODH.html**

#### Industry CDC NAICS 2012 (ODH)

This code system used in value set [Military Branch Code](#military-branch-code)

**Code system url:** Currently the code system URL will be the one published by
the UT project.

-   **http://build.fhir.org/ig/HL7/UTG/CodeSystem-PHOccupationalDataForHealthODH.html**

#### SNOMED CT

SNOMED CT will be used to fill any terminology gaps that are not already
addressed by FDA code systems in the US.
 
#### Industry NAICS Detail (ODH)

https://phinvads.cdc.gov/vads/ViewValueSet.action?id=5718C508-111B-4737-A48C-FDCFD301C0D

Value Set Name: Industry NAICS Detail (ODH)

Value Set OID 2.16.840.1.114222.4.11.7900

Value Set Description Concepts describing the kind of business that compensates
the person for work (e.g., wages, training) or assigns work to a volunteer, as
reported by the person. The kind of business is determined based on the primary
business activity conducted by the company, organization, or individual (for
those who are self-employed), or, for a military position, the self-reported
branch of service. The value set was created by coding the NAICS index terms,
which are relatable to the general public, to facilitate collection and
validation by patients. A downloadable file available from the PHIN VADS ODH Hot
Topics section is structured to support computer-assisted searching of this
value set. The file also contains a crosswalk from the concepts in this value
set to Occupation_CDC_Census value set concepts.

#### Discharge Status Code

A SNOMED CT Extension needed to describe the status when an individual leaves
military service.

The VA API and Z-segment specification declares local extensions to SNOMED CT
corresponding to **subtypes** of **"Left Military Service" 266964007 concept.**

**Question:** Should it include "active" because we may have a DoD API that
works in a similar way?

**Answer**: No, the cardinality should allow for this data element to omitted if
the service episode is the current episode.

|                                          |  **Description**                                                                                                                                                                                                 |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **general**                              |  General status. This concept is a gap in SNOMED CT. **subtype** of **"Left Military Service" 266964007 concept. local concept id:**                                                                                                                                                                                                                 |
| **honorable**                            | Additional description pending.] This concept is a gap in SNOMED CT.                                                                                                                                                                                                                                                                               |
| **dishonorable discharge**               | This status has an equivalent concept in SNOMED CT: **276086007**                                                                                                                                                                                                                                                                                   |
| **bad-conduct**                          | This concept is a gap in SNOMED CT.                                                                                                                                                                                                                                                                               |
| **other-than-honorable**                 | This concept is a gap in SNOMED CT. Relationships: This concept has two child concepts: honorable-for-va-purposes dishonorable-for-va-purposes During the review process, the Veteran will in "Pending Character of Discharge" (COD) state defined as "                                                           |
| **dishonorable-for-va-purposes**         |  This status is obtained when "other-than-honorable" is later deemed to be **dishonorable** for Title 38 Veteran Benefits criteria. This concept is a gap in SNOMED CT. "Has a Character of Discharge (COD) review from VBA ruling the individual Dishonorable for VA Purposes (DVA), and was originally one of the discharge types in the second row of this table." Relationships: This concept is a subtypes of **"Other-than-honorable" .**                                                |
| **honorable-for-va-purposes**            | This status is obtained when "other-than-honorable" is later deemed to be **honorable** for Title 38 Veteran Benefits criteria. This concept is a gap in SNOMED CT. "Has a character of discharge of: • Honorable • Under Honorable Conditions (General) • Uncharacterized (Entry level separation) **OR** Has a Character of Discharge (COD) review from VBA ruling the individual Honorable for VA Purposes (HVA)." Relationships: This concept is a subtypes of **"Other-than-honorable"** |
| **honorable-absence-of-negative-report** | This concept is a gap in SNOMED CT. Relationships: This concept is a subtype of **"honorable-discharge ?"**                                                                                                                                                                                                       |
| **uncharacterized**                      |  This concept is a gap in SNOMED CT.                                                                                                                                                                                                                                                                               |
| **unknown**                              | This concept is a gap in SNOMED CT. Missing information about discharge status.                                                                                                                                                                                                                                   |

#### Military Branch Code

"The military branch associated with service, National Guard, and Reserve."

The **Military Branches** coded concepts are documented in PHIN VADS as
[Industry CDC NAICS 2012 (ODH)](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3ED34BBC-617F-DD11-B38D-00188B398520).

**Localization Note:**

-   From an occupational standpoint, any foreign military service should be
    captured as well as US military service. The profile allows an
    "**extensible**" terminology binding to allow a service history that
    includes service in US and foreign armed forces.

-   The VA API will be limited to US Armed Forces; similarly, Canadian Forces
    will implement a realm-specific approach that accommodates Canadian
    requirements.

**Note:** the following is complete list of concepts to describe the military
branch.

**Additional**: NOAA and Merchant Marine members may also be included in this
value set.

|                                               |  **Description**                                                                                                                                                                                   |
|-----------------------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **U. S. Armed Forces - Branch not specified** |         Code: 9870: Military Reserves or National Guard System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                           |
| **U. S. Army**                                |         Code: 9670 (U.S. Army) System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                    |
| **U. S. Air Force**                           |         Code: 9680: U.S. Air Force System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                |
| **U. S. Marine Corps**                        |         Code: 9770 (U.S. Marines) System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                 |
| **U. S. Navy**                                |          Code: 9690: U.S. Navy System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                     |
| **U. S. Coast Guard**                         |          Code: 9780: U.S. Coast Guard System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                              |
| **Military Reserves or National Guard**       |          Concept (id: 9870] is used to specify Reserves or National Guard service. Code: 9870: Military Reserves or National Guard System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010) |
| **Non-US Armed Forces (out-of-scope)**        |          This concept is out of scope but it was discussed as potential requirement.  This concept is out-of-scope at this time.                                                                                                                                                                                  |

#### Pay Grade Code

Defines the level of compensation for a position, normalized across military
branches. This value set harmonizes the concepts used in VA wit those specified
by FDA for Occupational Data for Health implementations.

This specification will use the latest FDA value set specified in [Job
Supervisory Level or Pay Grade](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=D696FF02-C038-EB11-8196-005056ABE2F0).

#### Separation Reason Code

"Additional description for separation reason beyond discharge status value."

**Note:** This may need to be specified as a code value rather than a text
value.
 

---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/TerminologyRequirements.md

### Terminology Requirements

An initial gap analysis of SNOMED CT terminology identified that we are missing
significant content related to discharge status requirements in
[DischargeStatusCode](#discharge-status-code).

Other terminology extension and harmonization targets are:

-   [Military Branch Code](#military-branch-code)

-   [Pay Grade Code](#pay-grade-code)

Another gap is "separation reason" that requires a coded concept for its
Observation component and its allowed values.

In the future, the [Mission Code](#mission-code) may also need a SNOMED CT
extension if the VA API requires it.

 
<img src="Terminology Requirements.png" alt="Terminology Requirements" width="100%" />

*Figure 3: Terminology Requirements*

#### Job Supervisory Level or Pay Grade (ODH)

This code system is used in value set:**" Job Supervisory Level or Pay Grade
(ODH)"**

https://phinvads.cdc.gov/vads/ViewValueSet.action?id=B35E2ABE-C20F-EA11-8183-005056ABE2F0

-   Canonical URL based on the current version of UT:
    **http://build.fhir.org/ig/HL7/UTG/CodeSystem-PHOccupationalDataForHealthODH.html**

#### Industry CDC NAICS 2012 (ODH)

This code system used in value set [Military Branch Code](#military-branch-code)

**Code system url:** Currently the code system URL will be the one published by
the UT project.

-   **http://build.fhir.org/ig/HL7/UTG/CodeSystem-PHOccupationalDataForHealthODH.html**

#### SNOMED CT

SNOMED CT will be used to fill any terminology gaps that are not already
addressed by FDA code systems in the US.
 
#### Industry NAICS Detail (ODH)

https://phinvads.cdc.gov/vads/ViewValueSet.action?id=5718C508-111B-4737-A48C-FDCFD301C0D

Value Set Name: Industry NAICS Detail (ODH)

Value Set OID 2.16.840.1.114222.4.11.7900

Value Set Description Concepts describing the kind of business that compensates
the person for work (e.g., wages, training) or assigns work to a volunteer, as
reported by the person. The kind of business is determined based on the primary
business activity conducted by the company, organization, or individual (for
those who are self-employed), or, for a military position, the self-reported
branch of service. The value set was created by coding the NAICS index terms,
which are relatable to the general public, to facilitate collection and
validation by patients. A downloadable file available from the PHIN VADS ODH Hot
Topics section is structured to support computer-assisted searching of this
value set. The file also contains a crosswalk from the concepts in this value
set to Occupation_CDC_Census value set concepts.

#### Discharge Status Code

A SNOMED CT Extension needed to describe the status when an individual leaves
military service.

The VA API and Z-segment specification declares local extensions to SNOMED CT
corresponding to **subtypes** of **"Left Military Service" 266964007 concept.**

**Question:** Should it include "active" because we may have a DoD API that
works in a similar way?

**Answer**: No, the cardinality should allow for this data element to omitted if
the service episode is the current episode.

|                                          |  **Description**                                                                                                                                                                                                 |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **general**                              |  General status. This concept is a gap in SNOMED CT. **subtype** of **"Left Military Service" 266964007 concept. local concept id:**                                                                                                                                                                                                                 |
| **honorable**                            | Additional description pending.] This concept is a gap in SNOMED CT.                                                                                                                                                                                                                                                                               |
| **dishonorable discharge**               | This status has an equivalent concept in SNOMED CT: **276086007**                                                                                                                                                                                                                                                                                   |
| **bad-conduct**                          | This concept is a gap in SNOMED CT.                                                                                                                                                                                                                                                                               |
| **other-than-honorable**                 | This concept is a gap in SNOMED CT. Relationships: This concept has two child concepts: honorable-for-va-purposes dishonorable-for-va-purposes During the review process, the Veteran will in "Pending Character of Discharge" (COD) state defined as "                                                           |
| **dishonorable-for-va-purposes**         |  This status is obtained when "other-than-honorable" is later deemed to be **dishonorable** for Title 38 Veteran Benefits criteria. This concept is a gap in SNOMED CT. "Has a Character of Discharge (COD) review from VBA ruling the individual Dishonorable for VA Purposes (DVA), and was originally one of the discharge types in the second row of this table." Relationships: This concept is a subtypes of **"Other-than-honorable" .**                                                |
| **honorable-for-va-purposes**            | This status is obtained when "other-than-honorable" is later deemed to be **honorable** for Title 38 Veteran Benefits criteria. This concept is a gap in SNOMED CT. "Has a character of discharge of: • Honorable • Under Honorable Conditions (General) • Uncharacterized (Entry level separation) **OR** Has a Character of Discharge (COD) review from VBA ruling the individual Honorable for VA Purposes (HVA)." Relationships: This concept is a subtypes of **"Other-than-honorable"** |
| **honorable-absence-of-negative-report** | This concept is a gap in SNOMED CT. Relationships: This concept is a subtype of **"honorable-discharge ?"**                                                                                                                                                                                                       |
| **uncharacterized**                      |  This concept is a gap in SNOMED CT.                                                                                                                                                                                                                                                                               |
| **unknown**                              | This concept is a gap in SNOMED CT. Missing information about discharge status.                                                                                                                                                                                                                                   |

#### Military Branch Code

"The military branch associated with service, National Guard, and Reserve."

The **Military Branches** coded concepts are documented in PHIN VADS as
[Industry CDC NAICS 2012 (ODH)](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=3ED34BBC-617F-DD11-B38D-00188B398520).

**Localization Note:**

-   From an occupational standpoint, any foreign military service should be
    captured as well as US military service. The profile allows an
    "**extensible**" terminology binding to allow a service history that
    includes service in US and foreign armed forces.

-   The VA API will be limited to US Armed Forces; similarly, Canadian Forces
    will implement a realm-specific approach that accommodates Canadian
    requirements.

**Note:** the following is complete list of concepts to describe the military
branch.

**Additional**: NOAA and Merchant Marine members may also be included in this
value set.

|                                               |  **Description**                                                                                                                                                                                   |
|-----------------------------------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **U. S. Armed Forces - Branch not specified** |         Code: 9870: Military Reserves or National Guard System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                           |
| **U. S. Army**                                |         Code: 9670 (U.S. Army) System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                    |
| **U. S. Air Force**                           |         Code: 9680: U.S. Air Force System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                |
| **U. S. Marine Corps**                        |         Code: 9770 (U.S. Marines) System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                 |
| **U. S. Navy**                                |          Code: 9690: U.S. Navy System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                                     |
| **U. S. Coast Guard**                         |          Code: 9780: U.S. Coast Guard System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)                                                                                              |
| **Military Reserves or National Guard**       |          Concept (id: 9870] is used to specify Reserves or National Guard service. Code: 9870: Military Reserves or National Guard System URL: [http://terminology.hl7.org/CodeSystem/PHIndustryCDCCens](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010)[us2010](http://terminology.hl7.org/CodeSystem/PHIndustryCDCCensus2010) |
| **Non-US Armed Forces (out-of-scope)**        |          This concept is out of scope but it was discussed as potential requirement.  This concept is out-of-scope at this time.                                                                                                                                                                                  |

#### Pay Grade Code

Defines the level of compensation for a position, normalized across military
branches. This value set harmonizes the concepts used in VA wit those specified
by FDA for Occupational Data for Health implementations.

This specification will use the latest FDA value set specified in [Job
Supervisory Level or Pay Grade](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=D696FF02-C038-EB11-8196-005056ABE2F0).

#### Separation Reason Code

"Additional description for separation reason beyond discharge status value."

**Note:** This may need to be specified as a code value rather than a text
value. 

---

File: repos/HL7_SLASH_fhir-military-service/input/pagecontent/veteran.md


The US Veteran profile specifies an additional extension to the set already supported by the FHIR US Core profile it extends. This extension is a boolean flag used to specify/store the confirmation/verification status. true: the Patient record describes a Veteran or false: the Patient is either not a verified yet or under review if the flag is absent, then the veteran status is undetermined. |

### Profile
[USVeteran]

### Extension
[USVeteranStatus]

### Verification
Using patient match [patientmatch] verify existence of extension [USVeteranStatus] to evaluate veteran status.  A return missing extension completely is a result of undetermined.

{% include markdown-link-references.md %}


---

