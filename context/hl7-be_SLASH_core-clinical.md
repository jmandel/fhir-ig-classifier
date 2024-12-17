File: repos/hl7-be_SLASH_core-clinical/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource.                     │
# │  For a list of supported properties, see:                                                      │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# │  SUSHI will use id as both id and packageId in the IG unless a                                 │
# │  specific packageId is also provided in this file.                                             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯


id: hl7.fhir.be.core-clinical
canonical: https://www.ehealth.fgov.be/standards/fhir/core-clinical
url: https://www.ehealth.fgov.be/standards/fhir/core-clinical
name: Transversal Clinical Core
title: "HL7 FHIR Implementation Guide: Transversal Clinical Core"
description: "HL7 FHIR Implementation Guide: Transversal Clinical Core"
status: active
license: CC0-1.0
date: 2020-02-26
version: 1.0.1

# Although fhirVersions is 0..* in the ImplementationGuide resource
# it can be a single item OR and array here (but so far SUSHI only
# supports 4.0.1 anyway).
fhirVersion: 4.0.1

# The following two lines correspond to items that used to be in
# ig.ini but were moved to IG.definition.parameter. For
# consistency within this file, the names are represented using
# camelcase, but if authors use the formal parameter names, SUSHI
# will recognize them as well. In either case, they'll be copied
# to the IG JSON using the formal names.
copyrightYear: 2021+
releaseLabel: STU1

# The publisher can be a single item or a list, each with a name and
# optional url and/or email. The first publisher's name will be used
# as IG.publisher.  The contact details and/or additional publishers
# will be translated into IG.contact values.
publisher:
  name: eHealth Platform 
  url: https://www.ehealth.fgov.be
  email: message-structure@www.ehealth.fgov.be

# ContactDetail is required by the template.
contact:
  - name: Message-Structure
    telecom:
      - system: email
        value: message-structure@www.ehealth.fgov.be
        use: work

# The jurisdiction can be a single item or a list. The FHIR Shorthand
# code syntax can be used here.

jurisdiction: urn:iso:std:iso:3166#BE "Belgium"
#jurisdiction: http://unstats.un.org/unsd/methods/m49/m49.htm#001 "World"


# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for `uri` and `version`.
#dependencies:
#  hl7.fhir.us.core: 3.1.0
#  hl7.fhir.us.mcode:
#    id: mcode
#    uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#    version: 1.0.0

# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs.
#global:
#  Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#  Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile

# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:
#resources:
#  Patient/my-example-patient:
#    name: My Example Patient
#    description: An example Patient
#    exampleBoolean: true
#  Patient/bad-example: omit

# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds.
#groups:
#  GroupA:
#    name: Group A
#    description: The Alpha Group
#    resources:
#    - StructureDefinition/animal-patient
#    - StructureDefinition/arm-procedure
#  GroupB:
#    name: Group B
#    description: The Beta Group
#    resources:
#    - StructureDefinition/bark-control
#    - StructureDefinition/bee-sting

# The pages property corresponds to IG.definition.page. SUSHI can
# auto-generate the page list, but if the author includes pages in
# this file, it is assumed that the author will fully manage the
# pages section and SUSHI will not generate any page entries.
# The page file name is used as the key. If title is not provided,
# then the title will be generated from the file name.  If a
# generation value is not provided, it will be inferred from the
# file name extension.  Any subproperties that are valid filenames
# with supported extensions (e.g., .md/.xml) will be treated as
# sub-pages.
pages:
  index.xml:
    title: Transversal Clinical Core
  guidance.xml:
    title: Guidance
  spec.md:
  changes.xml:
  downloads.xml:



# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * meta
# * implicitRules
# * language
# * text
# * contained
# * extension
# * modifierExtension
# * experimental
# * useContext
# * copyright
# * packageId

# The menu property will be used to generate the input/menu.xml file.
# The menu is represented as a simple structure where the YAML key
# is the menu item name and the value is the URL. The IG publisher
# currently only supports one level deep on sub-menus.
# To provide a custom menu.xml file, do not include this property and
# include a `menu.xml` file in input/includes.
menu:
  Home: index.html
  Guidance: guidance.html
  Artifacts:
    Profiles: artifacts.html#2
    Extensions: artifacts.html#3
    Value Sets: artifacts.html#4
  Downloads: downloads.html
#  History: http://hl7.org/fhir/us/example/history.html

# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#parameters:
#  excludettl: true
#  validation: [allow-any-extensions, no-broken-links]
parameters:
  shownav: 'true'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'
  path-expansion-params: Parameters-terminology-expansion.json

# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
FSHOnly: false

# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#applyExtensionMetadataToRoot: false


dependencies:
  hl7.fhir.be.core: current

---

// File: input/pagecontent/spec.md

### Specifications
These are the project specifications:

---

// File: input/fsh/aliases.fsh

Alias: $sct = http://snomed.info/sct|http://snomed.info/sct/11000172109

---

// File: input/fsh/codesystems/BeCSBodySite.fsh

CodeSystem: BeCSBodySite
Id: be-cs-bodysite
Title: "Body Site CodeSystem"
Description: "Body Site CodeSystem"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
* ^caseSensitive = false
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1

---

// File: input/fsh/codesystems/BeCSProblemCategory.fsh

CodeSystem: BeCSProblemCategory
Id: be-cs-problem-category
Title: "Problem Category"
Description: "Problem Category"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^content = #complete
* ^experimental = false
* ^caseSensitive = false
* #diagnosis "Diagnosis" "A disease identified from a clinical reasoning, based on pathological and physiological ascertainments"
* #diagnosis ^designation[0].language = #fr-BE
* #diagnosis ^designation[=].value = "Diagnostic"
* #diagnosis ^designation[+].language = #nl-BE
* #diagnosis ^designation[=].value = "diagnose"
* #problem "Problem" "Identification of problems that the healthcare provider considers harmful, potentially harmful, and which may be the subject of further investigation or treatment"
* #problem ^designation[0].language = #fr-BE
* #problem ^designation[=].value = "Problème"
* #problem ^designation[+].language = #nl-BE
* #problem ^designation[=].value = "Probleem"
* #risk "Risk" "Identification of a health problem or situation that may require ongoing monitoring or management"
* #risk ^designation[0].language = #fr-BE
* #risk ^designation[=].value = "Risque"
* #risk ^designation[+].language = #nl-BE
* #risk ^designation[=].value = "Risico"
* #antecedent "Antecedent" "Information about a problem that has been resolved"
* #antecedent ^designation[0].language = #fr-BE
* #antecedent ^designation[=].value = "Antécédent"
* #antecedent ^designation[+].language = #nl-BE
* #antecedent ^designation[=].value = "Antecedent"
* #congenital "Congenital anomaly" "Congenital anomaly"
* #congenital ^designation[0].language = #fr-BE
* #congenital ^designation[=].value = "Maladie congénitale"
* #congenital ^designation[+].language = #nl-BE
* #congenital ^designation[=].value = "Aangeboren afwijking"
* #conclusion "Conclusion" "Informations about a conclusion from anamnesis performed by a professional other than a physician"
* #conclusion ^designation[0].language = #fr-BE
* #conclusion ^designation[=].value = "Conclusion anamnèse"
* #conclusion ^designation[+].language = #nl-BE
* #conclusion ^designation[=].value = "Anamnesis conclusie"
* #other "Other" "Other"
* #other ^designation[0].language = #fr-BE
* #other ^designation[=].value = "Autre"
* #other ^designation[+].language = #nl-BE
* #other ^designation[=].value = "andere"

---

// File: input/fsh/codesystems/BeCSProblemOriginType.fsh

CodeSystem: BeCSProblemOriginType
Id: be-cs-problem-origin-type
Title: "Problem Origin Type"
Description: "Problem Origin Type"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^content = #complete
* ^experimental = false
* ^caseSensitive = false
* #referral "Referral order" "Following a referral order"
* #referral ^designation[0].language = #fr-BE
* #referral ^designation[=].value = "prescription de renvoi"
* #referral ^designation[+].language = #nl-BE
* #referral ^designation[=].value = "verwijsvoorschrift"
* #own-initiative "Patient's own initiative" "The patient has arrived on their own initiative"
* #own-initiative ^designation[0].language = #fr-BE
* #own-initiative ^designation[=].value = "libre"
* #own-initiative ^designation[+].language = #nl-BE
* #own-initiative ^designation[=].value = "Op eigen initiatief"
* #counsel "Advice or recommendation from another provider (no prescription)" "From an advice or recommendation of a health professional (without prescription)"
* #counsel ^designation[0].language = #fr-BE
* #counsel ^designation[=].value = "conseil"
* #counsel ^designation[+].language = #nl-BE
* #counsel ^designation[=].value = "doorverwijzing"
* #other "other" "Other"
* #other ^designation[0].language = #fr-BE
* #other ^designation[=].value = "autre"
* #other ^designation[+].language = #nl-BE
* #other ^designation[=].value = "andere"

---

// File: input/fsh/codesystems/BeCSScore.fsh

CodeSystem: BeCSScore
Id: be-cs-score
Title: "Score Code System"
Description: "Codes as defined initially by the NIHDI. Dutch translations were not yet defined but are planned   for a next release."
* ^version = "1.0.0"
* ^status = #active
* ^date = "2020-10-01T11:01:09+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^content = #complete
* ^experimental = false
* ^caseSensitive = false
* #ADBB "Alarm distress baby scale" "Alarm distress baby scale"
* #ADBB ^designation.language = #fr-BE
* #ADBB ^designation.value = "Alarm détresse bébé"
* #BRANDEN "Branden" "Branden"
* #BRANDEN ^designation.language = #fr-BE
* #BRANDEN ^designation.value = "Branden"
* #DOLOPLUS2 "Doloplus 2 score" "Pain assessment for people with verbal communication impairment"
* #DOLOPLUS2 ^designation.language = #fr-BE
* #DOLOPLUS2 ^designation.value = "Evaluation de la douleur chez les personnes présentant des troubles de la communication verbale"
* #EAT-10 "Eating Assessment Tool" "Dysphagia Assessment scale"
* #EAT-10 ^designation.language = #fr-BE
* #EAT-10 ^designation.value = "échelle d'évaluation du degré de dysphagie"
* #EDIN "Neonatal pain and discomfort scale" "Neonatal pain and discomfort scale"
* #EDIN ^designation.language = #fr-BE
* #EDIN ^designation.value = "échelle de la douleur et de l'inconfort du nouveau-né"
* #HEDEN "HEDEN Pain Scale" "HEDEN (Hétéro-Evaluation de la Douleur chez l'Enfant) Pain Scale"
* #HEDEN ^designation.language = #fr-BE
* #HEDEN ^designation.value = "hétéro-évaluation de la douleur chez l'enfant"
* #MNA-complete "Mini Nutritional Assessment - complete" "Mini Nutritional Assessment - complete"
* #MNA-complete ^designation.language = #fr-BE
* #MNA-complete ^designation.value = "Mini Nutritional Assessment : échelle d'évaluation de la dénutrition des personnes âgées."
* #MNA-simplified "Mini Nutritional Assessment - simplified" "Mini Nutritional Assessment - simplified"
* #MNA-simplified ^designation.language = #fr-BE
* #MNA-simplified ^designation.value = "Mini Nutritional Assessment : échelle d'évaluation de la dénutrition des personnes âgées."
* #PAL "Level of Physical Activity" "Level of Physical Activity (NAP - Niveau d'Activité Physique)"
* #PAL ^designation.language = #fr-BE
* #PAL ^designation.value = "Niveau d'Activité Physique"
* #NRS2002 "Nutritional Risk Screening" "Nutritional Risk Screening"
* #NRS2002 ^designation.language = #fr-BE
* #NRS2002 ^designation.value = "Nutritional Risk Screening"
* #SCORE "Systemic Coronary Risk Estimation" "Systemic Coronary Risk Estimation"
* #SCORE ^designation.language = #fr-BE
* #SCORE ^designation.value = "Systémic Coronary Risk Estimation"
* #SNAQ "Short Nutritional Assessment Questionnaire" "Short Nutritional Assessment Questionnaire"
* #SNAQ ^designation.language = #fr-BE
* #SNAQ ^designation.value = "Short Nutritional Assessment Questionnaire"
* #TIMED-CHAIR-STAND "Timed Chair Stand" "Timed Chair Stand"
* #TIMED-CHAIR-STAND ^designation.language = #fr-BE
* #TIMED-CHAIR-STAND ^designation.value = "évaluation des risques de chutes et la force musculaire des membres inférieurs"
* #TUG "Timed Up&Go" "Timed Up&Go"
* #TUG ^designation.language = #fr-BE
* #TUG ^designation.value = "Timed Up&Go : évalue le risque de chute chez une personne"
* #WECKX "SCORE INZAKE ZORGBEHOEVENDHEID" "WECKX SCORE"
* #WECKX ^designation.language = #fr-BE
* #WECKX ^designation.value = "WECKX mesure de degré de dépendance physique"
* #SDAI "SDAI ou Simplified Disease Activity Index" "SDAI ou Simplified Disease Activity Index"
* #SDAI ^designation.language = #fr-BE
* #SDAI ^designation.value = "SDAI ou Simplified Disease Activity Index"
* #GARS "Groningen Activity Restriction Scale" "Groningen Activity Restriction Scale"
* #GARS ^designation.language = #fr-BE
* #GARS ^designation.value = "Groningen Activity Restriction Scale"
* #other "Other" "Other"
* #other ^designation.language = #fr-BE
* #other ^designation.value = "Autre"

---

// File: input/fsh/codesystems/BeCSScoreCategory.fsh

CodeSystem: BeCSScoreCategory
Id: be-cs-score-category
Title: "Score Category"
Description: "Score Category"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^content = #complete
* ^experimental = false
* ^caseSensitive = false
* #risk "Risk score" "Risk score"
* #risk ^designation[0].language = #fr-BE
* #risk ^designation[=].value = "Risk score"
* #risk ^designation[+].language = #nl-BE
* #risk ^designation[=].value = "Risk score"
* #pain "Pain score" "Pain score"
* #pain ^designation[0].language = #fr-BE
* #pain ^designation[=].value = "Pain Score"
* #pain ^designation[+].language = #nl-BE
* #pain ^designation[=].value = "Pain Score"
* #other "Other" "Other"
* #other ^designation[0].language = #fr-BE
* #other ^designation[=].value = "Autre"
* #other ^designation[+].language = #nl-BE
* #other ^designation[=].value = "andere"

---

// File: input/fsh/extensions/BeExtLaterality.fsh

Extension: BeExtLaterality
Id: be-ext-laterality
Title: "BeExtLaterality"
Description: "An explicit statement of laterality of a lesion, or a treatment, etc."
* value[x] only Coding
* valueCoding 0..1
* valueCoding from BeVSLaterality (required)
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^context[+].type = #element
* ^context[=].expression = "Claim.item.bodySite"
* ^context[+].type = #element
* ^context[=].expression = "Condition.bodySite"
* ^context[+].type = #element
* ^context[=].expression = "Immunization.site"
* ^context[+].type = #element
* ^context[=].expression = "Observation.bodySite"
* ^context[+].type = #element
* ^context[=].expression = "ServiceRequest.bodySite"


---

// File: input/fsh/extensions/BeExtProblemOriginType.fsh

Extension: BeExtProblemOriginType
Id: be-ext-problem-origin-type
Title: "BeExtProblemOriginType"
Description: "The type of event that triggers the problem to be evaluated - whether the problem was reported from a referring GP, etc..."
* value[x] only code
* valueCode 0..1
* valueCode from BeVSProblemOriginType (required)
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^context.type = #element
* ^context.expression = "Condition"


---

// File: input/fsh/instances/terminology-expansion.fsh

Instance: terminology-expansion
InstanceOf: Parameters
Usage: #example
* parameter[+].name = "includeDesignations"
* parameter[=].valueBoolean = true

---

// File: input/fsh/logicals/BeModelAppointment.fsh

Logical: BeModelAppointment

---

// File: input/fsh/logicals/BeModelCarePlan.fsh

Logical: BeModelCarePlan

---

// File: input/fsh/logicals/BeModelClinicalImpression.fsh

Logical: BeModelClinicalImpression

---

// File: input/fsh/logicals/BeModelEncounter.fsh

Logical: BeModelEncounter
Description: "Administrative recording of a meeting between a patient and a practitioner/organisation, with references to clinical data."


---

// File: input/fsh/logicals/BeModelGoal.fsh

Logical: BeModelGoal

---

// File: input/fsh/logicals/BeModelQuestionnaireResponse.fsh

Logical: BeQuestionnaireResponse

---

// File: input/fsh/logicals/BeModelServiceRequest.fsh

Logical: BeModelServiceRequest

---

// File: input/fsh/profiles/BeAppointment.fsh

Profile: BeAppointment
Parent: Appointment
* reasonReference only 	Reference(Condition or Procedure or BeObservation or ImmunizationRecommendation)
* participant.actor only Reference(BePatient or BePractitioner or BePractitionerRole or RelatedPerson or Device or HealthcareService or Location)		

---

// File: input/fsh/profiles/BeCarePlan.fsh

Profile: BeCarePlan
Parent: CarePlan
* basedOn only Reference(BeCarePlan)
* replaces only Reference(BeCarePlan)
* partOf only Reference(BeCarePlan)
* subject only Reference(BePatient or Group)
* encounter only Reference(BeEncounter)
* author only Reference(BePatient or BePractitioner or BePractitionerRole or Device or RelatedPerson or BeOrganization or CareTeam )
* contributor only Reference(BePatient or BePractitioner or BePractitionerRole or Device or RelatedPerson or BeOrganization or CareTeam )
* careTeam only Reference(CareTeam)
* addresses only Reference(Condition)
* activity.detail.performer only Reference(BePractitioner or BePractitionerRole or BeOrganization or RelatedPerson or BePatient or CareTeam or HealthcareService or Device)

---

// File: input/fsh/profiles/BeClinicalImpression.fsh

Profile: BeClinicalImpression
Parent: ClinicalImpression
* subject only Reference(BePatient or Group)
* assessor only Reference(BePractitioner or BePractitionerRole)


---

// File: input/fsh/profiles/BeEncounter.fsh

Profile: BeEncounter
Parent: Encounter
Id: be-encounter
Title: "BeEncounter"
Description: "(Temporary version until approval HL7Belgium WG) Belgian profile indicating the base data needed for the recording of a meeting between a patient and a practitioner/organization"
* subject only Reference(BePatient or Group)
* participant.individual only Reference(BePractitioner or BePractitionerRole or RelatedPerson) 
* participant.individual ^short = "*TODO* RelatedPerson -> BeRelatedPerson"
* reasonReference only	Reference(Condition or Procedure or Observation or ImmunizationRecommendation)
* reasonReference ^short = "*TODO* Condition -> BeCondition, Procedure -> BeProcedure, Observation -> BeObservation"
* diagnosis.condition only Reference(Condition or Procedure)
* diagnosis.condition ^short = "*TODO* Condition -> BeCondition, Procedure -> BeProcedure"
* hospitalization.origin only Reference(Location or BeOrganization)
* hospitalization.origin ^short = "*TODO* Location -> BeLocation"
* hospitalization.destination only Reference(Location or BeOrganization)
* hospitalization.destination ^short = "*TODO* Location -> BeLocation"
* location.location only Reference(Location)
* location.location ^short = "*TODO* Location -> BeLocation"
* serviceProvider only Reference(BeOrganization)
* partOf only Reference(BeEncounter)

---

// File: input/fsh/profiles/BeGoal.fsh

Profile: BeGoal 
Parent: Goal
* subject only Reference( BePatient or Group or BeOrganization)
* expressedBy only Reference(BePatient or BePractitioner or BePractitionerRole or RelatedPerson)

---

// File: input/fsh/profiles/BeObservation.fsh

Profile: BeObservation
Parent: Observation
Id: be-observation
Description: """Belgian federal profile for an observation. Initially based on the functional description of the NIHDI.
As Observation is used in many instances in FHIR, please refer to the HL7 specs of the base resource for guidance around expression of actual values using UCUM, methods, location on body etc.

Special remarks for KMEHR users:
The FHIR Observation resource captures many things that are in a KMEHR message structured as an 'item'. This includes things like 'vital signs such as body weight, blood pressure, and temperature […], personal characteristics such as eye-color […] social history like tobacco use, family support, or cognitive status […]' ( https://www.hl7.org/fhir/R4/observation.html )
For some of these things, HL7 already has worked out profiles and they SHALL be used when such a use case is needed. Specifically, projects SHALL take note of the existing profiles described on https://www.hl7.org/fhir/R4/observation-vitalsigns.html"""
* ^version = "1.0.0"
* code only BeObservationCodeableConcept
* code MS
* code ^definition = "Describes what was observed. Sometimes this is called the observation \"name\".\r\n\r\nFor providing systems, it is RECOMMENDED to express this using a code and consuming software SHALL record this.\r\nIn general, it shall be noted SNOMED-CT is the preferred national terminology. Other coding systems remain allowed or MAY be preferred in specific flows (e.g. the use of LOINC codes to express a laboratory test.)"
* subject only Reference(Patient or Group or Device or Location or BePatient)
* performer 1..
* performer only Reference(Practitioner or PractitionerRole or Organization or CareTeam or Patient or RelatedPerson or BePatient or BeOrganization or BePractitionerRole or BePractitioner)
* performer ^comment = "References SHALL be a reference to an actual FHIR resource, and SHALL be resolveable (allowing for access control, temporary unavailability, etc.). Resolution can be either by retrieval from the URL, or, where applicable by resource type, by treating an absolute reference as a canonical URL and looking it up in a local registry/repository.\r\n\r\nSpecial remarks for KMEHR users:\r\nIn a KMEHR context, this would be 'author'."
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1

---

// File: input/fsh/profiles/BeObservationCodeableConcept.fsh

Profile: BeObservationCodeableConcept
Parent: CodeableConcept
Id: be-observationcodeableconcept
Description: """This is a supporting profile, only to give guidelines how to express a few of the typical coding systems.
In general, it shall be noted SNOMED-CT is the preferred national terminology. Other coding systems remain allowed or MAY be preferred in specific flows (e.g. the use of LOINC codes to express a laboratory test.)"""
* ^version = "1.0.0"
* coding ^slicing.discriminator.type = #value
* coding ^slicing.discriminator.path = "system"
* coding ^slicing.rules = #open
* coding contains
    LOINC 0..* and
    SNOMED-CT 0..* 
* coding[LOINC].system = "http://loinc.org" (exactly)
* coding[LOINC].code 1..
* coding[SNOMED-CT].system = "http://snomed.info/sct" (exactly)
* coding[SNOMED-CT].code 1..
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1


---

// File: input/fsh/profiles/BeProblem.fsh

Profile: BeProblem
Parent: Condition
Id: be-problem
Title: "BeProblem"
Description: "Belgian federal profile. Initially based on the functional description of the NIHDI. Defines a patient's known problem, a diagnostic or antecedent that deserves attention."
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains BeExtProblemOriginType named ProblemOriginType 0..1 MS
* identifier MS
* clinicalStatus MS
* verificationStatus MS
* category 1.. MS
* category from BeVSProblemCategory (extensible)
* code 1.. MS
* code from BeVSProblemCode (extensible)
* bodySite MS
* bodySite from BeVSBodySite (required)
* bodySite.extension ^slicing.discriminator.type = #value
* bodySite.extension ^slicing.discriminator.path = "url"
* bodySite.extension ^slicing.rules = #open
* bodySite.extension contains BeExtLaterality named laterality 0..1
* subject only Reference(BePatient)
* subject MS
* encounter MS
* onset[x] MS
* abatement[x] MS
* recordedDate 1.. MS
* recorder 1.. MS
* recorder only Reference(BePractitioner or BePractitionerRole or BePatient)
* asserter only Reference(RelatedPerson or BePractitioner or BePractitionerRole or BePatient)
* note MS

---

// File: input/fsh/profiles/BeProcedure.fsh

Profile: BeProcedure
Parent: Procedure
Id: be-procedure
* subject only Reference(BePatient)
* recorder only Reference(BePatient or BePractitioner or BePractitionerRole)
* asserter only Reference(BePatient or BePractitioner or BePractitionerRole)
* performer.actor only Reference(BePatient or BePractitioner or BePractitionerRole)


---

// File: input/fsh/profiles/BeQuestionnaireResponse.fsh

Profile: BeQuestionnaireResponse
Parent: QuestionnaireResponse
Id: be-questionnaire-response 
* author only Reference(Device or BePractitioner or BePractitionerRole or BePatient or RelatedPerson or BeOrganization) 
* source  only Reference(BePatient or BePractitioner or BePractitionerRole or RelatedPerson)

---

// File: input/fsh/profiles/BeScoreResult.fsh

Profile: BeScoreResult
Parent: Observation
Id: be-scoreresult
Title: "BeScoreResult"
Description: "To support the standard exchange of scores such as pain assessment scores, or risk score, etc"
* ^version = "1.0.0"
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* identifier MS
* category MS
* category from BeVSScoreCategory (required)
* category ^short = "The high-level group or category of the score - e.g. 'Risk score' or 'Pain score'"
* code MS
* code from https://www.ehealth.fgov.be/standards/fhir/core-clinical/ValueSet/be-vs-score (required)
* code ^short = "The code of the score that is being calculated."
* subject 1.. MS
* subject only Reference(BePatient or Group)
* subject ^short = "The patient that this score refers to"
* effectivePeriod 1.. MS
* effectivePeriod only Period
* effectivePeriod ^sliceName = "effectivePeriod"
* effectivePeriod ^short = "The time period that the score refers to."
* issued 1.. MS
* issued ^short = "The date and time when the score was made available"
* performer only Reference(BePatient or BePractitioner or BePractitionerRole or BeOrganization)
* performer MS
* performer ^short = "The care provider that took the assessment"
* value[x] 1.. MS
* value[x] ^short = "The actual score value."
* interpretation MS
* interpretation ^short = "The interpretation of the result from the value. For example if value is 12, the interpretation can be 'elevated'"
* bodySite MS
* bodySite ^short = "The body site to which the score applies, when applicable"
* bodySite.extension ^slicing.discriminator.type = #value
* bodySite.extension ^slicing.discriminator.path = "url"
* bodySite.extension ^slicing.rules = #open
* bodySite.extension contains BeExtLaterality named laterality 0..1 MS
* referenceRange MS
* referenceRange ^short = "The different ranges of the value"
* referenceRange ^definition = "The different ranges that the value can have, and corresponding evaluation (e.g. 0..10: normal; 11..20: elevated)"
* derivedFrom MS
* derivedFrom ^short = "The source values for the assessment - for example a QuestionnaireResponse"

---

// File: input/fsh/profiles/BeServiceRequest.fsh

Profile: BeServiceRequest 
Parent: ServiceRequest 
Id: be-service-request
* subject  only Reference(BePatient or Group or BeLocation or Device)
* encounter only Reference(BeEncounter)
* requester only Reference(BePractitioner or BePractitionerRole or BeOrganization or BePatient or RelatedPerson or Device)
* performer only	Reference(BePractitioner or BePractitionerRole or BeOrganization or CareTeam or HealthcareService or BePatient or Device or RelatedPerson)

---

// File: input/fsh/valuesets/BeVSBodySite.fsh

ValueSet: BeVSBodySite
Id: be-vs-bodysite
Title: "Body Site"
Description: "Body Site"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
//* ^caseSensitive = false

* include codes from system $sct where concept is-a $sct#442083009


---

// File: input/fsh/valuesets/BeVSLaterality.fsh

ValueSet: BeVSLaterality
Id: be-vs-laterality
Title: "Laterality"
Description: "Laterality"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^experimental = false
//* ^caseSensitive = false

* include  $sct#7771000
* include  $sct#24028007
* include  $sct#419161000
* include  $sct#419465000
* include  $sct#51440002
* include  $sct#261183002
* include  $sct#261122009
* include  $sct#255561001
* include  $sct#49370004
* include  $sct#264217000
* include  $sct#261089000
* include  $sct#255551008
* include  $sct#351726001
* include  $sct#352730000

---

// File: input/fsh/valuesets/BeVSProblemCategory.fsh

ValueSet: BeVSProblemCategory
Id: be-vs-problem-category
Title: "Problem Category"
Description: "Problem Category"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
//* ^caseSensitive = false

* include codes from system BeCSProblemCategory

---

// File: input/fsh/valuesets/BeVSProblemCode.fsh

ValueSet: BeVSProblemCode
Id: be-vs-problem-code
Title: "Problem Code"
Description: "Problem Code. No Belgian standardized valueset is yet defined, this is expected   for a future iteration. Implementers are encouraged to use a codification system of their choosing."
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
//* ^caseSensitive = false


---

// File: input/fsh/valuesets/BeVSProblemOriginType.fsh

ValueSet: BeVSProblemOriginType
Id: be-vs-problem-origin-type
Title: "Problem Origin Type"
Description: "Problem Origin Type"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
//* ^caseSensitive = false

* include codes from system BeCSProblemOriginType

---

// File: input/fsh/valuesets/BeVSReactionManifestationCode.fsh

ValueSet: BeVSReactionManifestationCode
Id: be-vs-reaction-manifestation-code
Title: "Reaction Manifestation Code"
Description: "Reaction Manifestation Code (Allergy - Immunization)"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^experimental = false
//* ^caseSensitive = false

* include  $sct#39579001
* include  $sct#735173007
* include  $sct#41291007
* include  $sct#410430005
* include  $sct#698247007
* include  $sct#195967001
* include  $sct#4386001
* include  $sct#9826008
* include  $sct#91175000
* include  $sct#40275004
* include  $sct#62315008
* include  $sct#267036007
* include  $sct#43116000
* include  $sct#271759003
* include  $sct#247472004
* include  $sct#271807003
* include  $sct#271757001
* include  $sct#297942002
* include  $sct#76067001
* include  $sct#386661006
* include  $sct#45007003
* include  $sct#422587007
* include  $sct#768962006
* include  $sct#51599000
* include  $sct#23924001
* include  $sct#418363000
* include  $sct#70076002
* include  $sct#162290004
* include  $sct#73442001
* include  $sct#49727002
* include  $sct#126485001
* include  $sct#31996006
* include  $sct#1985008



---

// File: input/fsh/valuesets/BeVSScore.fsh

ValueSet: BeVSScore
Id: be-vs-score
Title: "Score Value Set"
Description: "Codes as defined by the NIHDI. Dutch translations are expected for a next release."
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^version = "1.0.0"
* ^status = #active
* ^date = "2020-10-01T11:01:09+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[0] = http://unstats.un.org/unsd/methods/m49/m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
//* ^caseSensitive = false
* ^compose.include[0].system = $sct
* ^compose.include[=].concept[0].code = #763117005
* ^compose.include[=].concept[=].display = "FINDRISC (Finnish Diabetes Risk Score) score"
* ^compose.include[=].concept[=].designation[0].use = $sct#900000000000003001 "Fully specified name"
* ^compose.include[=].concept[=].designation[=].value = "Finnish Diabetes Risk Score (observable entity)"
* ^compose.include[=].concept[=].designation[+].language = #en
* ^compose.include[=].concept[=].designation[=].value = "Finnish Diabetes Risk Score"
* ^compose.include[=].concept[=].designation[+].language = #fr-BE
* ^compose.include[=].concept[=].designation[=].value = "Finnish Diabetes Risk Score"
* ^compose.include[=].concept[+].code = #446661009
* ^compose.include[=].concept[=].display = "Visual Analogic Scale for pain assessment"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "(EVA) Echelle Visuelle Analogique"
* ^compose.include[=].concept[+].code = #273531005
* ^compose.include[=].concept[=].display = "Index of Independence in Activities of Daily Living"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "Grille d'évaluation de l'autonomie pour les activités basales de la vie quotidienne"
* ^compose.include[=].concept[+].code = #447316007
* ^compose.include[=].concept[=].display = "Mini-Mental State Examination"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "Examen mental de Folstein"
* ^compose.include[=].concept[+].code = #444297006
* ^compose.include[=].concept[=].display = "Malnutrition Universal Screening"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "Malnutrition Universal Screening"
* ^compose.include[=].concept[+].code = #443133008
* ^compose.include[=].concept[=].display = "Norton Pressure Sore Risk-Assessment Scale Scoring System"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "évaluation du risque d'escarre"
* ^compose.include[=].concept[+].code = #7121000122100
* ^compose.include[=].concept[=].display = "Pain Assessment in Advanced Dementia Scale"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "Hétéro-évaluation de la douleur chez la personne âgée non communicante"
* ^compose.include[=].concept[+].code = #273849003
* ^compose.include[=].concept[=].display = "Subjective Global Assessment"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "Subjective Global Assessment"
* ^compose.include[=].concept[+].code = #450738001
* ^compose.include[=].concept[=].display = "Timed Chair Stand"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "évaluation des risques de chutes et la force musculaire des membres inférieurs"
* ^compose.include[=].concept[+].code = #444680009
* ^compose.include[=].concept[=].display = "Timed Up&Go : évalue le risque de chute chez une personne"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "Timed Up&Go : évalue le risque de chute chez une personne"
* ^compose.include[=].concept[+].code = #278897004
* ^compose.include[=].concept[=].display = "Waterlow pressure ulcer risk assessment"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "(WATERLOW) Echelle d'évaluation du risque d'escarre"
* ^compose.include[=].concept[+].code = #763259004
* ^compose.include[=].concept[=].display = "Disease Activity Score"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "(DAS) Score d'activité de la polyarthrite rhumatoïde"
* ^compose.include[=].concept[+].code = #273364009
* ^compose.include[=].concept[=].display = "Clinical Disease Activity Index"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "(CDAI) Indice d'activité de la polyarthrite rhumatoïde"
* ^compose.include[=].concept[+].code = #443318007
* ^compose.include[=].concept[=].display = "Tinetti balance and gait scale"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "évalue le risque de chute chez une personne âgée"
* ^compose.include[=].concept[+].code = #719124004
* ^compose.include[=].concept[=].display = "Arthritis Impact Measurement Scales 2 (AIMS2)"
* ^compose.include[=].concept[=].designation.language = #fr-BE
* ^compose.include[=].concept[=].designation.value = "(EMIR) Echelle de Mesure de l'Impact de la Polyarthrite Rhumatoïde"
* ^compose.include[+].system = "https://www.ehealth.fgov.be/standards/fhir/core-clinical/CodeSystem/be-cs-score"

---

// File: input/fsh/valuesets/BeVSScoreCategory.fsh

ValueSet: BeVSScoreCategory
Id: be-vs-scorecategory
Title: "Score Category Value Set"
Description: "Score Category Value Set"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^experimental = false
//* ^caseSensitive = false

* include codes from system BeCSScoreCategory

---

// File: input/data/features.yml

#---


---

