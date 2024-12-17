File: repos/HL7_SLASH_ImmunizationFHIRDS/sushi-config.yaml

# ╭────────────────────────────────────────────────────────────────────────────────────────────────╮
# │  ACTION REQUIRED: REVIEW AND EDIT THIS FILE TO ENSURE IT ACCURATELY REFLECTS YOUR PROJECT!     │
# │                                                                                                │
# │  This file was generated from your existing project files and will be used for SUSHI           │
# │  configuration from now on. You may delete your package.json as it is no longer needed.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭────────────────────ImplementationGuide-hl7.fhir.us.ImmunizationFHIRDS.json─────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see:                                                                    │
# │  http://build.fhir.org/ig/HL7/fhir-shorthand/branches/beta/sushi.html#ig-development           │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: hl7.fhir.us.immds
canonical: http://hl7.org/fhir/us/immds
version: 1.0.0
name: ImmunizationDecisionSupportForecastImmDSImplementationGuide
title: Immunization Decision Support Forecast (ImmDS) Implementation Guide
status: active
publisher: 
  name: HL7 Public Health Work Group
  url: http://www.hl7.org/Special/committees/pher/index.cfm
contact:
  - name: Nathan Bunker
    telecom:
      - system: email
        value: mailto:nbunker@immregistry.org
description: An IG for querying a decision support engine for a personalized immunization
  forecast.
license: CC0-1.0
fhirVersion: 4.0.1
dependencies:
  hl7.fhir.us.core: 3.1.0
parameters:
  show-inherited-invariants: false
jurisdiction: urn:iso:std:iso:3166#US
copyrightYear: 2020+
releaseLabel: CI Build

# ╭───────────────────────────────────────package-list.json────────────────────────────────────────╮
# │  To use a provided ig-data/package-list.json file, delete the "history" property below.        │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯

# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To control the menu.xml using this config, uncomment and set the "menu" property.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#menu:
#IG Home: index.html
#Table of Contents: toc.html
#Artifacts Summary: artifacts.html
#   Other Resources:
#     "FHIR Spec ": new-tab external {{site.data.fhir.path}}index.html

pages:
  index.md:
    title: Home
  Guidance.md:
    title: Guidance
  UseCases.md:
    title: Use Cases
  Download.md:
    title: Download


---

// File: input/pagecontent/Download.md

* [Full Specification (zip)](full-ig.zip)
* [JSON Definitions (zip)](definitions.json.zip)
* [JSON Examples (zip)](examples.json.zip)
* [XML Definitions (zip)](definitions.xml.zip)
* [XML Examples (zip)](examples.ttl.zip)
* [Turtle Definitions](definitions.ttl.zip)


---

// File: input/pagecontent/Guidance.md

# General Guidance
This section outlines important definitions and interpretations and requirements common to all Immunization Decision Support Forecast actors used in this guide. The conformance verbs used are defined in FHIR Conformance Rules.

While this document is US Realm specific, the constraints and content of this specification may be applicable to other jurisdictions.

## Background
Clinical Decision Support for Immunizations is increasingly being used in health information systems to indicate which vaccinations a patient is due for next. Many of these expert systems are built as stand-alone systems that respond to web service requests. While these independent systems have similar requirements and outputs they use different web service standards. This project aims to create a FHIR implementation guide that these expert systems may use to provide a consistent and interchangeable interface. This will provide a standardized interface to so that:

* Health information systems may write to and gain access to their choice of CDS engines.
* The output of these systems can be tested and verified consistently and correctly.

## Patient Demographics
The Patient profile requires support for a much broader range of demographics data elements than is typically required by an immunization CDS engine. Often, the engine only needs the patient gender and date of birth (along with the patient’s immunization history) to produce an evaluated history and forecast. To minimize the amount of personal data being exchanged, either the requestor or responder may require the use of the data absent reason extension for specific sensitive fields (the exchange of which may be limited by local policy or requirements) while still fulfilling the profile requirements for supporting all of the demographic elements required by the profile. Alternatively, a CDS engine may require additional demographics data so that it can access additional clinical data on the patient (eg. allergies, problems, etc) to provide a more personalized forecast - note that accessing additional data beyond that contained in the operation is beyond the scope of this implementation guide. As part of the implementation, the minimum necessary demographics payload should be determined.

## Immunization Data Elements
The US Core Immunization profile used by this implementation guide only requires key data elements related to the immunization event, however depending on engine functionality other elements may assist the CDS engine in creating the best possible evaluation and forecast. As part of the implementation, the following data elements should be considered and exchanged if they can be used by the CDS engine:

* manufacturer
* lotNumber
* expirationDate
* site
* route
* doseQuantity
* isSubpotent
* subpotentReason
* reaction

## General Security
Implementers should be aware of [FHIR Security](https://www.hl7.org/FHIR/security.html) and follow the [FHIR Implementer’s Safety Check List](https://www.hl7.org/FHIR/safety.html).

---

// File: input/pagecontent/index.md

# Introduction

The Immunization Decision Support Forecast (ImmDS) Implementation Guide is based on FHIR Version R4 and defines the minimum conformance requirements for implementations.

# Contributers
This Implementation Guide was made possible by the thoughtful contributions of the following people and organizations:

* Nathan Bunker (AIRA)
* Brian Lee (STC)
* Craig Newman (Altarum)
* Daryl Chertcoff (HLN)
* Eric Larson (AIRA)
* Heather Patrick (CDC)
* Richard Ettema (Aegis Inc)





---

// File: input/pagecontent/UseCases.md

# Introduction
The Immunization Decision Support Forecast (ImmDS) use case covers the exchange of data between a system seeking a patient evaluated history and forecast and the clinical decision support engine capable of providing that history and forecast. Today, this layer is not standardized and leads to several unique/proprietary interfaces which are costly to implement. The scope of this implementation guide is to create a standard interface layer between the initiating system and the CDS engine.

The initiating system in this exchange is typically a system being used (either directly or indirectly) by a clinician to provide care to the patient. This can be a jurisdictional level Immunization Information System (IIS) which collates the patient’s immunization history from a variety of sources or an EHR which is being used to provide point of care support for clinicians. However other systems such as HIEs, school medical records, etc may also play this role.

As will be described in the individual uses cases below, this exchange is often part of a larger workflow which is out of scope for this implementation guide.

# The Difference Between a History and an Evaluated History
There is a difference between the patient’s immunization history and the patient’s evaluated history. The immunization history (as represented by Immunization resources) is a list of immunization events for the patient. The Immunization resource simply describes the details of the event as it happened (or occasionally, did not happen). The patient’s immunization history is an input to the CDS engine as a parameter to the $immds-forecast operation. However, not all immunization events are considered to be effective (or “valid”) relative to an immunization schedule (a set of recommendations produced by an authority such as the Advisory Committee on Immunization Practices (ACIP) in the United States). The CDS engine takes the immunization history and compares the events to an immunization schedule to determine the validity of each event. This creates the evaluated history which is returned from the CDS engine (in the form of ImmunizationEvaluation resources) along with a set of recommendations for future doses for the patient (in the form of an ImmunizationRecommendation resource). Both the ImmunizationEvaluation and ImmunizationRecommendation resources are returned as outputs of the operation.

# EHR Query to IIS (via existing v2)
This use case describes a typical transaction found in production exchanges today. An EHR User (or an automated trigger) issues a v2 query to the local IIS for a specific patient. The IIS finds the patient, performs the CDS and then packages that information up and returns it to the EHR in a v2 response message. In this case, the IIS outsources the evaluation and recommendation process to an external CDS engine. Note that the logic used by the CDS engine to perform the evaluation and forecast is out of scope for this implementation guide as is the mechanism for executing the v2 query and response.

![EHR Query to IIS (via existing v2)](ImmunizationCDSonFHIR-EHRtoIIS.png)


# Application User Interface
This use case describes a typical use of an application found in production today. In this example, an IIS User logs into the IIS and natively uses the IIS User Interface to query for a specific patient in the IIS. The IIS finds the patient, performs the CDS and then packages that information up and returns it to the IIS User Interface for immediate display. Note that that the application in this use case could easily have been an EHR which uses an external CDS engine.

![Application User Interface](ImmunizationCDSonFHIR-IISUserinterface.png)


# Public Health Function
This use case describes a typical public health function found within IIS production systems today. Many activities an IIS performs results in looping over a cohort of patients (defined by the public health activity) and determining their Immunization Status and/or need for further vaccination. This occurs in AFIX visits, up-to-date reports, reminder/recall activities, etc.
 
![Public Health Function](ImmunizationCDSonFHIR-IISFunction.png)

---

// File: input/fsh/ImmDSPatient.fsh

Alias:			SCT = http://snomed.info/sct
Alias:			LN = http://loinc.org
Alias:			CVX = http://hl7.org/fhir/sid/cvx
Alias:			CVXVS = http://hl7.org/fhir/us/core/ValueSet/us-core-vaccines-cvx
Alias:			COUNTRY = urn:iso:std:iso:3166
Alias:			dateCriterion = http://hl7.org/fhir/ValueSet/immunization-recommendation-date-criterion

Profile:        ImmDSPatient
Parent:         http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Id:             immds-patient
Title:          "ImmDS Patient"
Description:    "A patient for whom immunization forecast is being requested."
* birthDate 1..1 MS
* ^jurisdiction.coding = COUNTRY#US "United States of America"


Profile:        ImmDSImmunization
Parent:         http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization
Id:             immds-immunization
Title:          "ImmDS Immunization"
Description:    "Immunization event for the patient."
* patient only Reference(ImmDSPatient)
* ^jurisdiction.coding = COUNTRY#US "United States of America"


Profile:        ImmDSImmunizationEvaluation
Parent:         ImmunizationEvaluation
Id:             immds-immunizationevaluation
Title:          "ImmDS Immunization Evaluation"
Description:    "An evaluation of an Immunization event for the patient against a set of recommendations."
* patient only Reference(ImmDSPatient)
* date 1..1
* targetDisease 1..1
* targetDisease from TargetDisease (extensible)
* doseStatus 1..1
* doseStatus from http://hl7.org/fhir/ValueSet/immunization-evaluation-dose-status (extensible)
* doseStatusReason MS
* doseStatusReason from StatusReason (extensible)
* ^jurisdiction.coding = COUNTRY#US "United States of America"


Profile:        ImmDSImmunizationRecommendation
Parent:         ImmunizationRecommendation
Id:             immds-immunizationrecommendation
Title:          "ImmDS Immunization Recommendation"
Description:    "The set of immunization recommendations for the patient."
* patient only Reference(ImmDSPatient)
* recommendation.vaccineCode from CVXVS (extensible)
* recommendation.targetDisease from TargetDisease (extensible)
* recommendation.contraindicatedVaccineCode from CVXVS (extensible)
* recommendation.forecastStatus from ForecastStatus (preferred)
* recommendation.forecastReason from ForecastReason (example)
* recommendation.dateCriterion.code from dateCriterion (extensible)
* ^jurisdiction.coding = COUNTRY#US "United States of America"


Instance:		ImmDSForecastOperation
InstanceOf:		OperationDefinition
Usage:			#definition
Description:	"The Immunization Decision Support Forecast Request operation to provide standardized request and response interfaces to Immunization Forecasters."
* name = "ImmDSForecast"
* title = "Immunization Decision Support Forecast"
* status = #draft
* kind = #operation
* code = #immds-forecast
* system = true
* type = false
* instance = false
* parameter[0].name = #assessmentDate
* parameter[0].use = #in
* parameter[0].min = 1
* parameter[0].max = "1"
* parameter[0].documentation = "The date on which to assess the forecast."
* parameter[0].type = #date
* parameter[1].name = #patient
* parameter[1].use = #in
* parameter[1].min = 1
* parameter[1].max = "1"
* parameter[1].documentation = "Patient information."
* parameter[1].type = #Patient
* parameter[2].name = #immunization
* parameter[2].use = #in
* parameter[2].min = 0
* parameter[2].max = "*"
* parameter[2].documentation = "Patient immunization history."
* parameter[2].type = #Immunization
* parameter[3].name = #evaluation
* parameter[3].use = #out
* parameter[3].min = 0
* parameter[3].max = "*"
* parameter[3].documentation = "The evaluation against a schedule."
* parameter[3].type = #ImmunizationEvaluation
* parameter[4].name = #recommendation	
* parameter[4].use = #out
* parameter[4].min = 1
* parameter[4].max = "1"
* parameter[4].documentation = "The decision support engine produced forecast."
* parameter[4].type = #ImmunizationRecommendation
//* ^jurisdiction.coding = COUNTRY#US "United States of America"


ValueSet:		TargetDisease
Id:				targetDisease
Title:			"Vaccine Target Disease"
Description:	"A set of vaccine preventable target diseases."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* SCT#397428000  "Diphtheria"
* SCT#27836007  "Pertussis"
* SCT#76902006  "Tetanus"
* SCT#721764008  "Infection caused by Human poliovirus"
* SCT#14189004  "Measles"
* SCT#36989005  "Mumps"
* SCT#36653000  "Rubella"
* SCT#16814004  "Pneumococcal infectious disease"
* SCT#23511006  "Meningococcal infectious disease"
* SCT#709410003  "Haemophilus influenzae type b infection"
* SCT#56717001  "Tuberculosis"
* SCT#363354003  "Malignant tumour of cervix"
* SCT#266113007  "Genital warts"
* SCT#415822001  "Viral gastroenteritis due to Rotavirus"
* SCT#66071002  "Type B viral hepatitis"
* SCT#40468003  "Viral hepatitis, type A"
* SCT#7111000119109  "Hepatitis E virus infection"
* SCT#719590007  "Influenza caused by seasonal influenza virus"
* SCT#719865001  "Influenza caused by pandemic influenza virus"
* SCT#38907003  "Varicella"
* SCT#4740000  "Herpes zoster"
* SCT#55735004  "Respiratory syncytial virus infection"
* SCT#240613006  "Typhus group rickettsial disease"
* SCT#4834000  "Typhoid fever"
* SCT#85904008  "Paratyphoid fever"
* SCT#63650001  "Cholera"
* SCT#16541001  "Yellow fever"
* SCT#38362002  "Dengue"
* SCT#61462000  "Malaria"
* SCT#14168008  "Rabies"
* SCT#186772009  "RMSF - Rocky Mountain spotted fever"
* SCT#712986001  "Tickborne encephalitis"
* SCT#52947006  "Japanese encephalitis virus disease"
* SCT#186788009  "Q fever"
* SCT#409498004  "Anthrax"
* SCT#58750007  "Plague"
* SCT#19265001  "Tularemia"
* SCT#23502006  "Lyme disease"
* SCT#75702008  "Brucellosis"
* SCT#80612004  "Leishmaniasis"
* SCT#186747009  "Coronavirus infection"
* SCT#67924001  "Smallpox"
* SCT#70090004  "Cowpox"
* ^jurisdiction.coding = COUNTRY#US "United States of America"


CodeSystem:		ForecastStatus
Title:			"Forecast Status"
Description:	"A set of forecast statuses."
* #complete "Complete" "The patient series is complete" 
* #notComplete "Not Complete" "The patient series is incomplete"
* #notRecommended "Not Recommended" "The patient is not recommended"
* #immune "Immune" "The patient is considered immune and therefore does not require vaccination"
* #contraindicated "Contraindicated" "The patient is contraindicated for the vaccine"
* #agedOut "Aged Out" "The patient is past the recommendated maximum age for vaccination"
* #conditional "Conditional" "The patient may be recommended for vaccination depending on other attributes"
* ^jurisdiction.coding = COUNTRY#US "United States of America"


ValueSet:		ForecastStatus
Title:			"Forecast Status"
Description:	"A set of forecast statuses."
* codes from system ForecastStatus
* ^jurisdiction.coding = COUNTRY#US "United States of America"


CodeSystem:		ForecastReason
Title:			"Forecast Reason"
Description:	"A set of reasons for the forecast status."
* #complete "Complete" "The patient series is complete" 
* #notRecommended "Not Recommended" "The patient is not recommended due to immunization history"
* #maximumAge "Maximum Age Exceeded" "The patient has exceeded the maximum recommended age"
* #seasonalPast "Seasonal End Date Passed" "The recommended end date for the seasonal vaccine has passed"
* #seasonalComplete "Complete for the Season" "The patient is complete for the season"
* ^jurisdiction.coding = COUNTRY#US "United States of America"


ValueSet:		StatusReason
Title:			"Evaluation Status Reason"
Description:	"A set of reasons for the evaluation status."
* codes from system StatusReason
* ^jurisdiction.coding = COUNTRY#US "United States of America"



CodeSystem:		StatusReason
Title:			"Evaluation Status Reason"
Description:	"A set of reasons for the evaluation status."
* #expired "Past Expiration Date" "Vaccine Dose Administered was administered after the Lot Number Expiration Date"
* #tooyoung "Patient Too Young" "Vaccine Dose Administered was administered at too young of an age"
* #tooold "Patient Too Old" "Vaccine Dose Administered was administered at too old of an age"
* #inappropriate "Inappropriate Vaccine" "Vaccine Dose Administered was an inappropriate vaccine (e.g. vaccine not licensed for the patient age)"
* #toosoon "Administered Too Soon" "Vaccine Dose Administered was administered too soon following a previous dose"
* #productconflict "Product Conflict" "Vaccine Dose Administered was administered too close to another vaccine or other product (e.g. Immune Globulin conflict or live virus conflict)"
* #quantity "Insufficient Quantity" "Vaccine Dose Administered amount was less than the recommended amount"
* #recall "Recalled Product" "Vaccine Dose Administered was recalled by the manufacturer"
* #storage "Adverse Storage Conditions" "Vaccine Dose Administered experienced adverse storage conditions (e.g. cold chain break)"
* #notevaluated "Not Evaluated" "Vaccine Dose Administered was not evaluated"
* ^jurisdiction.coding = COUNTRY#US "United States of America"


ValueSet:		ForecastReason
Title:			"Forecast Reason"
Description:	"A set of reasons for the forecast status."
* codes from system ForecastReason
* ^jurisdiction.coding = COUNTRY#US "United States of America"

---

// File: input/fsh/parameterExample.fsh

Instance:		ImmDSParameterInExample01
InstanceOf: 	Parameters
Description: 	"Example Input Parameter List for ImmDS Operation"
Usage: 			#example
* id = "parameters-in-example"
* parameter[0].name = "assessmentDate"
* parameter[0].valueDate = "2020-06-02"
* parameter[1].name = "patient"
* parameter[1].resource.resourceType = "Patient"
* parameter[1].resource.id = "ImmDSPatientExample"
* parameter[1].resource.identifier.value = "1234"
* parameter[1].resource.identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* parameter[1].resource.identifier.system = "http://www.acme.com/identifiers/patient"
* parameter[1].resource.name.family = "Wellington"
* parameter[1].resource.name.given[0] = "Gene"
* parameter[1].resource.gender = #male "Male"
* parameter[1].resource.birthDate = "2020-04-28"
* parameter[2].name = "immunization"
* parameter[2].resource.resourceType = "Immunization"
* parameter[2].resource.id = "ImmDSImmunizationExample"
* parameter[2].resource.status = #completed "Completed"
* parameter[2].resource.vaccineCode = CVX#08 "Hep B, adolescent or pediatric"
* parameter[2].resource.patient = Reference(ImmDSPatientExample)
* parameter[2].resource.occurrenceDateTime = "2020-04-28"
* parameter[2].resource.primarySource = true



Instance:		ImmDSParameterOutExample01
InstanceOf: 	Parameters
Description: 	"Example Output Parameter List for ImmDS Operation"
Usage: 			#example
* id = "parameters-out-example"
* parameter[0].name = "evaluation"
* parameter[0].resource.resourceType = "ImmunizationEvaluation"
* parameter[0].resource.id = "immunization-evaluation-example"
* parameter[0].resource.status = #completed "Completed"
* parameter[0].resource.patient = Reference(ImmDSPatientExample)
* parameter[0].resource.date = "2020-05-26"
* parameter[0].resource.targetDisease = SCT#66071002 "Hepatitis B"
* parameter[0].resource.immunizationEvent = Reference(ImmDSImmunizationExample)
* parameter[0].resource.doseStatus = 	http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status#valid "Valid"
* parameter[0].resource.series  = "ACIP 3-dose HepB series"
* parameter[0].resource.doseNumberPositiveInt = 1
* parameter[0].resource.seriesDosesPositiveInt = 3
* parameter[1].name = "recommendation"
* parameter[1].resource.resourceType = "ImmunizationRecommendation"
* parameter[1].resource.id = "immunizationrecommendation-forecast-example"
* parameter[1].resource.patient = Reference(ImmDSPatientExample)
* parameter[1].resource.date = "2020-05-26"
* parameter[1].resource.recommendation[0].vaccineCode = CVX#45 "Hep B, unspecified formulation"
* parameter[1].resource.recommendation[0].forecastStatus = ForecastStatus#notComplete "Not Complete"
* parameter[1].resource.recommendation[0].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* parameter[1].resource.recommendation[0].dateCriterion[0].value = "2020-05-28"
* parameter[1].resource.recommendation[0].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* parameter[1].resource.recommendation[0].dateCriterion[1].value = "2020-09-25"
* parameter[1].resource.recommendation[0].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* parameter[1].resource.recommendation[0].dateCriterion[2].value = "2020-05-26"
* parameter[1].resource.recommendation[0].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* parameter[1].resource.recommendation[0].dateCriterion[3].value = "2020-11-25"
* parameter[1].resource.recommendation[0].doseNumberPositiveInt = 2

* parameter[1].resource.recommendation[1].vaccineCode = CVX#20 "DTaP"
* parameter[1].resource.recommendation[1].forecastStatus = ForecastStatus#notComplete "Not Complete"
* parameter[1].resource.recommendation[1].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* parameter[1].resource.recommendation[1].dateCriterion[0].value = "2020-06-28"
* parameter[1].resource.recommendation[1].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* parameter[1].resource.recommendation[1].dateCriterion[1].value = "2020-07-25"
* parameter[1].resource.recommendation[1].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* parameter[1].resource.recommendation[1].dateCriterion[2].value = "2020-06-09"
* parameter[1].resource.recommendation[1].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* parameter[1].resource.recommendation[1].dateCriterion[3].value = "2099-06-28"
* parameter[1].resource.recommendation[1].doseNumberPositiveInt = 1

* parameter[1].resource.recommendation[2].vaccineCode = CVX#17 "Hib, unspecified formulation"
* parameter[1].resource.recommendation[2].forecastStatus = ForecastStatus#notComplete "Not Complete"
* parameter[1].resource.recommendation[2].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* parameter[1].resource.recommendation[2].dateCriterion[0].value = "2020-06-28"
* parameter[1].resource.recommendation[2].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* parameter[1].resource.recommendation[2].dateCriterion[1].value = "2020-07-25"
* parameter[1].resource.recommendation[2].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* parameter[1].resource.recommendation[2].dateCriterion[2].value = "2020-06-09"
* parameter[1].resource.recommendation[2].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* parameter[1].resource.recommendation[2].dateCriterion[3].value = "2099-06-28"
* parameter[1].resource.recommendation[2].doseNumberPositiveInt = 1

* parameter[1].resource.recommendation[3].vaccineCode = CVX#10 "IPV"
* parameter[1].resource.recommendation[3].forecastStatus = ForecastStatus#notComplete "Not Complete"
* parameter[1].resource.recommendation[3].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* parameter[1].resource.recommendation[3].dateCriterion[0].value = "2020-06-28"
* parameter[1].resource.recommendation[3].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* parameter[1].resource.recommendation[3].dateCriterion[1].value = "2020-07-25"
* parameter[1].resource.recommendation[3].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* parameter[1].resource.recommendation[3].dateCriterion[2].value = "2020-06-09"
* parameter[1].resource.recommendation[3].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* parameter[1].resource.recommendation[3].dateCriterion[3].value = "2099-06-28"
* parameter[1].resource.recommendation[3].doseNumberPositiveInt = 1

* parameter[1].resource.recommendation[4].vaccineCode = CVX#33 "pneumococcal polysaccharide PPV23"
* parameter[1].resource.recommendation[4].forecastStatus = ForecastStatus#notComplete "Not Complete"
* parameter[1].resource.recommendation[4].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* parameter[1].resource.recommendation[4].dateCriterion[0].value = "2020-06-28"
* parameter[1].resource.recommendation[4].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* parameter[1].resource.recommendation[4].dateCriterion[1].value = "2020-07-25"
* parameter[1].resource.recommendation[4].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* parameter[1].resource.recommendation[4].dateCriterion[2].value = "2020-06-09"
* parameter[1].resource.recommendation[4].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* parameter[1].resource.recommendation[4].dateCriterion[3].value = "2099-06-28"
* parameter[1].resource.recommendation[4].doseNumberPositiveInt = 1

* parameter[1].resource.recommendation[5].vaccineCode = CVX#122 "rotavirus, unspecified formulation"
* parameter[1].resource.recommendation[5].forecastStatus = ForecastStatus#notComplete "Not Complete"
* parameter[1].resource.recommendation[5].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* parameter[1].resource.recommendation[5].dateCriterion[0].value = "2020-06-28"
* parameter[1].resource.recommendation[5].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* parameter[1].resource.recommendation[5].dateCriterion[1].value = "2020-07-25"
* parameter[1].resource.recommendation[5].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* parameter[1].resource.recommendation[5].dateCriterion[2].value = "2020-06-09"
* parameter[1].resource.recommendation[5].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* parameter[1].resource.recommendation[5].dateCriterion[3].value = "2099-06-28"
* parameter[1].resource.recommendation[5].doseNumberPositiveInt = 1

---

// File: input/fsh/examples.fsh

Instance:		ImmDSPatientExample
InstanceOf: 	ImmDSPatient
Description: 	"Example Immunization Patient"
Usage: 			#example
* id = "ImmDSPatientExample"
* identifier.value = "1234"
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* identifier.system = "http://www.acme.com/identifiers/patient"
* name.family = "Wellington"
* name.given[0] = "Gene"
* gender = #male "Male"
* birthDate = "2020-04-28"


Instance:		ImmDSImmunizationExample
InstanceOf: 	ImmDSImmunization
Description: 	"Example Immunization Event"
Usage: 			#example
* id = "ImmDSImmunizationExample"
* status = #completed "Completed"
* vaccineCode = CVX#08 "Hep B, adolescent or pediatric"
* patient = Reference(ImmDSPatientExample)
* occurrenceDateTime = "2020-04-28"
* primarySource = true


Instance:		ImmDSImmunizationEvaluationExample
InstanceOf: 	ImmDSImmunizationEvaluation
Description: 	"Example Immunization Evaluation"
Usage: 			#example
* id = "immunization-evaluation-example"
* status = #completed "Completed"
* patient = Reference(ImmDSPatientExample)
* date = "2020-05-26"
* targetDisease = SCT#66071002 "Hepatitis B"
* immunizationEvent = Reference(ImmDSImmunizationExample)
* doseStatus = 	http://terminology.hl7.org/CodeSystem/immunization-evaluation-dose-status#valid "Valid"
* series  = "ACIP 3-dose HepB series"
* doseNumberPositiveInt = 1
* seriesDosesPositiveInt = 3


Instance:		ImmDSImmunizationRecommendationExample
InstanceOf: 	ImmDSImmunizationRecommendation
Description: 	"Example Immunization Recommendation"
Usage: 			#example
* id = "immunizationrecommendation-forecast-example"
* patient = Reference(ImmDSPatientExample)
* date = "2020-05-26"
* recommendation[0].vaccineCode = CVX#45 "Hep B, unspecified formulation"
* recommendation[0].forecastStatus = ForecastStatus#notComplete "Not Complete"
* recommendation[0].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* recommendation[0].dateCriterion[0].value = "2020-05-28"
* recommendation[0].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* recommendation[0].dateCriterion[1].value = "2020-09-25"
* recommendation[0].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* recommendation[0].dateCriterion[2].value = "2020-05-26"
* recommendation[0].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* recommendation[0].dateCriterion[3].value = "2020-11-25"
* recommendation[0].doseNumberPositiveInt = 2

* recommendation[1].vaccineCode = CVX#20 "DTaP"
* recommendation[1].forecastStatus = ForecastStatus#notComplete "Not Complete"
* recommendation[1].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* recommendation[1].dateCriterion[0].value = "2020-06-28"
* recommendation[1].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* recommendation[1].dateCriterion[1].value = "2020-07-25"
* recommendation[1].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* recommendation[1].dateCriterion[2].value = "2020-06-09"
* recommendation[1].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* recommendation[1].dateCriterion[3].value = "2099-06-28"
* recommendation[1].doseNumberPositiveInt = 1

* recommendation[2].vaccineCode = CVX#17 "Hib, unspecified formulation"
* recommendation[2].forecastStatus = ForecastStatus#notComplete "Not Complete"
* recommendation[2].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* recommendation[2].dateCriterion[0].value = "2020-06-28"
* recommendation[2].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* recommendation[2].dateCriterion[1].value = "2020-07-25"
* recommendation[2].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* recommendation[2].dateCriterion[2].value = "2020-06-09"
* recommendation[2].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* recommendation[2].dateCriterion[3].value = "2099-06-28"
* recommendation[2].doseNumberPositiveInt = 1

* recommendation[3].vaccineCode = CVX#10 "IPV"
* recommendation[3].forecastStatus = ForecastStatus#notComplete "Not Complete"
* recommendation[3].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* recommendation[3].dateCriterion[0].value = "2020-06-28"
* recommendation[3].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* recommendation[3].dateCriterion[1].value = "2020-07-25"
* recommendation[3].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* recommendation[3].dateCriterion[2].value = "2020-06-09"
* recommendation[3].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* recommendation[3].dateCriterion[3].value = "2099-06-28"
* recommendation[3].doseNumberPositiveInt = 1

* recommendation[4].vaccineCode = CVX#33 "pneumococcal polysaccharide PPV23"
* recommendation[4].forecastStatus = ForecastStatus#notComplete "Not Complete"
* recommendation[4].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* recommendation[4].dateCriterion[0].value = "2020-06-28"
* recommendation[4].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* recommendation[4].dateCriterion[1].value = "2020-07-25"
* recommendation[4].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* recommendation[4].dateCriterion[2].value = "2020-06-09"
* recommendation[4].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* recommendation[4].dateCriterion[3].value = "2099-06-28"
* recommendation[4].doseNumberPositiveInt = 1

* recommendation[5].vaccineCode = CVX#122 "rotavirus, unspecified formulation"
* recommendation[5].forecastStatus = ForecastStatus#notComplete "Not Complete"
* recommendation[5].dateCriterion[0].code = LN#30980-7 "Date vaccine due"
* recommendation[5].dateCriterion[0].value = "2020-06-28"
* recommendation[5].dateCriterion[1].code = LN#59778-1 "Date when overdue for immunization"
* recommendation[5].dateCriterion[1].value = "2020-07-25"
* recommendation[5].dateCriterion[2].code = LN#30981-5 "Earliest date to give"
* recommendation[5].dateCriterion[2].value = "2020-06-09"
* recommendation[5].dateCriterion[3].code = LN#59777-3 "Latest date to give immunization"
* recommendation[5].dateCriterion[3].value = "2099-06-28"
* recommendation[5].doseNumberPositiveInt = 1


---

