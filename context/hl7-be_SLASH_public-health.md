File: repos/hl7-be_SLASH_public-health/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource.                     │
# │  For a list of supported properties, see:                                                      │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# │  SUSHI will use id as both id and packageId in the IG unless a                                 │
# │  specific packageId is also provided in this file.                                             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯


id: hl7.fhir.be.public-health
canonical: https://www.ehealth.fgov.be/standards/fhir/public-health
url: https://www.ehealth.fgov.be/standards/fhir/public-health
name: Public Health
title: "HL7 FHIR Implementation Guide: Public Health IG Release 1 - BE Realm | STU1"
description: Public Health
status: active
license: CC0-1.0
date: 2023-10-20
version: 1.0.2

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
  url: https://www.ehealth.fgov.be/standards/fhir
  email: support@be-ehealth-standards.atlassian.net

# ContactDetail is required by the template.
contact:
  - name: eHealth Platform
    telecom:
      - system: email
        value: support@be-ehealth-standards.atlassian.net
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
  index.md:
    title: Home
  guidance.md: 
  changes.xml: 
  downloads.xml: 
  actors.md: 
  transactions.md: 
  
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
  Guidance: 
    Overview: guidance.html
    Actors: actors.html
    Transactions: transactions.html  
  Artifacts:
    Logical Models: artifacts.html#structures-logical-models
    Profiles: artifacts.html#structures-resource-profiles
    #Data Types: artifacts.html#structures-data-type-profiles
    #Extensions: artifacts.html#structures-extension-definitions
    Value Sets: artifacts.html#terminology-value-sets
    Code Systems: artifacts.html#terminology-code-systems
    Naming Systems: artifacts.html#terminology-naming-systems
    Examples: artifacts.html#example-example-instances
  Downloads: downloads.html
  Changes: changes.html
  History: https://www.ehealth.fgov.be/standards/fhir/public-health/history.html

# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#parameters:
#  excludettl: true
#  validation: [allow-any-extensions, no-broken-links]

# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
FSHOnly: false

# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#applyExtensionMetadataToRoot: false

dependencies: 
  hl7.fhir.be.core: 2.0.1
  hl7.fhir.be.core-clinical: 1.0.0
  hl7.fhir.be.infsec: 1.1.0

parameters:
  shownav: 'true'
  apply-contact: 'true'
  apply-jurisdiction: 'true'
  apply-publisher: 'true'
  apply-version: 'true'
  propagate-status: true
  display-warnings: true

resources:
  Appointment/example-with-pseudonymization:
    name: "[Example 7] Pseudonymized patient"
    description: Appointment with pseudonymized patient

---

// File: input/pagecontent/actors.md

### Screening Information Provider ###

A screening information provider is an actor that has information about a particular screening, and wants to send it on to another actor.  The information provider SHALL know about the patient, the type of screening, and the next invitation for the patient to participate. The information provider MAY know about the participation of the patient in the screening and the current invitation. The provider SHALL be able to receive feedback from the receiver about the provided information.

### Screening Information Receiver ###

A screening information receiver is an actor that is able to process information about a particular screening. The receiver SHALL be able to communicate that it has received the information correctly. It MAY also be able to communicate that some information does not conform to its business rules.

  
<br/>

---

// File: input/pagecontent/guidance.md

### Data exchange
The Public Health - Cancer Screening specification tracks the scheduling and performance of cancer screenings, including the results and eventual follow-up from such screenings.

The scope of data is shown in the [logical model](StructureDefinition-BeModelPopulationScreening.html). The several data structures and their relationship to the model is shown in the diagram below:


<img src="ph-modeloverview.png"  width="100%">

Note that the different resources contain the key data elements that are defined and captured in the scope of a cancer screening. These resources are all related to the same [Patient](https://www.ehealth.fgov.be/standards/fhir/core/StructureDefinition-be-patient.html) resource. 

In addition, 2 areas are left to implementer and are not speciffied in this edition of the Implementation Guide:

#### Linking resources
The above resources are linked by a resource that describes the present screening data, as well as eventually tracking past and future screenings. Several alternatives are possible:

|Approach|Summary|Implementation Considerations|
|---|---|---|
|**CarePlan**| Using a CarePlan to link the different activities and outcomes| The CarePlan adds a new resource (for which a Belgian core resource is defined) which links the activities. The CarePlan also allows better integration with the patient's care activities and goals and care integration, as well as short- and long-term planning. Finally, the CarePlan can be updated when the screening protocols are defined computably, to facilitate interoperability around the definition and maintenance of such care plans.|
|**Composition**|Using a Composition that links to the resources| The Composition resource is used to establish a coherent view of the screening process and results. Unlike CarePlan, a Composition does not imply any functional meaning, ratther simply establishes a resource that contains links to other resources, like a [FHIR Document](https://hl7.org/fhir/R4/documents.html). Note that Composition can be used in addition to CarePlan.|
|**Custom extensions**|Using additional resources and extensions to link the artifacts|It is possible to use other resources and extensions to link to/from the different resources, but this should be considered given the expected evolution of the screening guidance (extensions are normally purpose-specific).
{:.table-bordered}
<br/>

#### Resource uniqueness
All the resources used in the data exchange should use a business identifier. This business identifier can reside in the [namespace](https://hl7.org/fhir/R4/datatypes-definitions.html#Identifier.system) of the creator (cancer screening provider), and is used to establish the uniqueness of the content.
The resources needed to identify the screening event shall have a unique identifier: Appointment and Encounter. In addition, the overall grouping resource (e.g. CarePlan) shall have its unique identifier.


### Informing patient and communicating next appointments
The message that is to be sent to the patient may depend on the current screening date, the screening type, the results, and any other circumstances for the patient.
While the input for creating such message is standardized, the content of such message is left for implementers. If the message is to be persisted as part of the overall Cancer Screening planning and execution, resources like Communication may be used for this purpose. 

<br/>
<br/>

---

// File: input/pagecontent/index.md

This is the FHIR Implementation Guide for Public Health. It contains the specifications developed by our community.   
  

### Content
This publication contains the specifications for
* Cancer Screening

### How to read this specification
The top menu allows quick navigation to the different sections, and a [Table of Contents](toc.html) is provided with the entire content of this Implementation Guide.  
The specification consists of 

* Logical model, indicating the data that is required
* Profiles and extensions, describing the FHIR data structures that will contain the data
* Terminology resources  - Naming system, value set and code system, defining and identifying the codes to be used.


  

###	Intellectual Property Considerations
While this implementation guide and the underlying FHIR are licensed as public domain, this guide includes examples making use of terminologies such as LOINC, SNOMED CT and others which have more restrictive licensing requirements. Implementers should make themselves familiar with licensing and any other constraints of terminologies, questionnaires, and other components used as part of their implementation process. In some cases, licensing requirements may limit the systems that data captured using certain questionnaires may be shared with.



---

// File: input/pagecontent/spec.md

### Specifications
These are the project specifications:

---

// File: input/pagecontent/transactions.md

### Send/Update Screening Information ###
This implementation guide defines one simple transaction, the submission of screening information (new submission or an update).

#### Involved Actors ####

- [Screening Information Provider](actors.html#screening-information-provider)
- [Screening Information Receiver](actors.html#screening-information-receiver)


#### Involved FHIR Resources ####
These resources are specifically profiled for this specification.

- Appointment ([BePopulationScreeningAppointment](./StructureDefinition-be-populationscreening-appointment.html))
- Encounter ([BePopulationScreeningEncounter](./StructureDefinition-be-populationscreening-encounter.html))
- ServiceRequest ([BePopulationScreeningFollowUp](./StructureDefinition-be-populationscreening-follow-up.html))
- Observation ([BePopulationScreeningObservation](./StructureDefinition-be-populationscreening-observation.html))


In addition, other resources are expected to be part of a working specification: Core resources like [Patient](https://ehealth.fgov.be/standards/fhir/core/StructureDefinition-be-patient.html), and resources that may be optionally used - which are not specifically profiled in this release. For example,

- [Bundle](http://hl7.org/fhir/R4/bundle.html)
- [CarePlan](http://hl7.org/fhir/R4/careplan.html)
- [Composition](http://hl7.org/fhir/R4/composition.html)



#### Description

The Screening Information provider will send the necessary resources, for example as a Batch Bundle, containing the resources indicated above. This Bundle resource will be sent to the Bundle FHIR REST API endpoint of the Screening Information Receiver using the POST method [Batch/Transaction Guidelines](http://hl7.org/fhir/R4/http.html#transaction). The Screening Information Receiver will receive an answer according the guidelines in the [Batch/Transaction Response Guidelines](http://hl7.org/fhir/R4/http.html#transaction-response).


#### Diagram

 <div>
{% include send-update-screening-information.svg %}
</div>


#### Description

The Screening Information Provider sends the resources in a Bundle, each resource containing its unique ID.  

The Screening Information Receiver receives the information, checks it for conformance and uses the unique identifiers to determine the integrity of the information and whether the update is possible and acceptable, depending on business rules. It then updates or creates the data in the receiving system (or rejects the submission, if there is any error).  
From the result, the Screening Information Provider determines whether to keep track of the submission, or resubmit the information or adjust the content, in case of error.


<br/>





---

// File: input/fsh/aliases.fsh

Alias: $sct = http://snomed.info/sct|http://snomed.info/sct/11000172109

---

// File: input/fsh/codesystems/BeCSDisplayTemplate.fsh

// CodeSystem: BeCSDisplayTemplate
// Id: be-cs-display-template
// Title: "BeCSDisplayTemplate"
// Description: "Indicates that the property is a display template (contains placeholders in a text of form {0} to {x}) and indicates the language the text is in. Use values from http://hl7.org/fhir/ValueSet/all-languages"
// //* ^valueSet = http://hl7.org/fhir/ValueSet/all-languages
// * ^experimental = true
// * ^caseSensitive = true
// * #nl
// * #de
// * #en
// * #fr
// * #nl-BE
// * #fr-BE


---

// File: input/fsh/codesystems/BeCSPopulationScreeningNextInvitationType.fsh

CodeSystem: BeCSPopulationScreeningNextInvitationType
Id: be-cs-populationscreening-next-invitation-type
Title: "Population Screening Next Invitation Type"
Description: "Code System containing the codes for the type of the next invitation (or exclusion of next invitation)"
* ^experimental = false
* ^caseSensitive = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
// * ^property[+].code = #nl-BE
// * ^property[=].uri = "https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template"
// * ^property[=].description = "Contains a text with placeholder for the date for display to the user in Dutch"
// * ^property[=].type = #string
// * ^property[+].code = #fr
// * ^property[=].uri = "https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template"
// * ^property[=].description = "Contains a text with placeholder for the date for display to the user in French"
// * ^property[=].type = #string
// * ^property[+].code = #en
// * ^property[=].uri = "https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template"
// * ^property[=].description = "Contains a text with placeholder for the date for display to the user in English"
// * ^property[=].type = #string



* ^concept[+].code = #nextinvitation
* ^concept[=].display = "A following invitation is expected"
//* ^concept[=].designation[+].language = #en
//* ^concept[=].designation[=].value =  "Next invitation will be around the indicated date"
// * ^concept[=].property[+].code = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template#nl-BE
// * ^concept[=].property[=].valueString = "De volgende uitnodiging is voorzien rond {0}."


* ^concept[+].code = #definitivelyexcluded
* ^concept[=].display = "No further invitation expected"
// * ^concept[=].designation[+].language = #en
// * ^concept[=].designation[=].value =  "Exclusion from invitation"
// * ^concept[=].property[+].code = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template#nl-BE
// * ^concept[=].property[=].valueString = "Je ontvangt geen volgende uitnodiging meer."

* ^concept[+].code = #notintargetgroup
* ^concept[=].display = "Not part of target group."
// * ^concept[=].designation[+].language = #en
// * ^concept[=].designation[=].value =  "Not part of target group. Invitations are from the year of your 50th birthday up to the year of your 69th birthday."
// * ^concept[=].property[+].code = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template#nl-BE
//* ^concept[=].property[=].valueString = "Je ontvangt geen volgende uitnodiging. De leeftijdsgroep voor dit bevolkingsonderzoek start vanaf het jaar waarin je 50 jaar wordt en loopt tot en met het jaar waarin je 69 jaar wordt."

* ^concept[+].code = #refusal
* ^concept[=].display = "No further invitations due to refusal."
// * ^concept[=].designation[+].language = #en
// * ^concept[=].designation[=].value =  "No invitations because of refusal. For more information about this investigation, contact your GP."
// * ^concept[=].property[+].code = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template#nl-BE
// * ^concept[=].property[=].valueString = "Je ontvangt geen volgende uitnodiging omdat je hebt laten weten dat je geen uitnodiging meer wou ontvangen. Indien je meer informatie wenst over dit onderzoek kan je dit best bespreken met je arts."

* ^concept[+].code = #temporarilyexcluded
* ^concept[=].display = "Temporarily excluded."
// * ^concept[=].display = "According to our data, this investigation is either not necessary or not appropriate for you. For more info, contact your GP. Next invitation will be around the indicated date."
// * ^concept[=].designation[+].language = #en
// * ^concept[=].designation[=].value =  "According to our data, this investigation is either not necessary or not appropriate for you. For more info, contact your GP. Next invitation will be around the indicated date."
// * ^concept[=].property[+].code = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template#nl-BE
//* ^concept[=].property[=].valueString = "Volgens onze gegevens is dit onderzoek voor jou op dit moment niet nodig of niet aangewezen. Daarom ontvang je tijdelijk geen uitnodigingen meer. De volgende uitnodiging is voorzien rond {0}. Indien je hierover meer wenst te weten, kan je dit bespreken met je arts."

* ^concept[+].code = #tobedetermined
* ^concept[=].display = "A further invitation may or not be advised, but that is not yet determined."
// * ^concept[=].designation[+].language = #en
// * ^concept[=].designation[=].value =  "The date for a new investigation depends on the current one."
// * ^concept[=].property[+].code = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template#nl-BE
// * ^concept[=].property[=].valueString = "De datum van volgende uitnodiging is afhankelijk van de uitslag van het verdere onderzoek."


* ^concept[+].code = #unknown
* ^concept[=].display = "Insufficient information to determine a future invitation."
// * ^concept[=].designation[+].language = #en
// * ^concept[=].designation[=].value =  "Insufficient information to determine the next invitation date."
// * ^concept[=].property[+].code = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-display-template#nl-BE

// * ^concept[=].property[=].valueString = "We kunnen niet bepalen wanneer u de volgende keer zal uitgenodigd worden."


---

// File: input/fsh/instances/mammographicUnit.fsh

Instance: mammographicUnit
InstanceOf: Location
Title: "Mammographic Unit"
Description: "Location of a mammographic unit"
* name = "Mammografic unit example name"
* address.city = "Merelbeke"
* address.postalCode = "9820"
* address.country = "BE"
* address.line = "Verlorenbroodstraat 122"
* address.text = "Verlorenbroodstraat 122, 9820 Merelbeke"
* address.extension.url = "http://hl7.org/fhir/StructureDefinition/language"
* address.extension.valueCode = #nl
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Verlorenbroodstraat"
* address.line.extension[+].url =  "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString =  "122"

---

// File: input/fsh/models/BePopulationScreeningLogicalModel.fsh

Logical: BeModelPopulationScreening
Parent: Element
Title: "Logical model for population screening event"
Description: "Logical model for recurrent population based screening. The model represents one iteration of a screening, called episode. A patient can have multiple episodes for a given screening. A screening of a specific type for a given patient can be repeated after a certain period. Each time the screening is repeated results in a new episode."

* ^status = #active
* patient 1..1 Reference(Patient) "The patient for the screening"
* screeningType 1..1 CodeableConcept "The related screening" "The related screening, for example breast cancer, colon cancer or cervicalcancer."
* screeningYear 1..1 string "The calendar year of the screening" """The year of the screening process/episode for the given screening. If the patient participated, the participation year is taken. If the patient didn't participate, the calendar year of the invitation is taken. 
If there is no invitation or participation, there will be no episode.
For example, if patient is allowed a population based screening every 2 years for a given screening type and the first screening episode invitation took place in 2022, the next episode will be created for the next invitation in 2024. 
If the patient has a refusal or exclusion registered and does not have a participation/invitation, so the patient does not have any episodes, the calendar year of the registration of the refusal/exclusion is taken."""
* invitation 0..1 BackboneElement "The appointment details of the invitation" "An invitation is not mandatory, in some cases a patient can participate for a screening without an invitation."
  * date 1..1 date "The date the patient is invited to participate in the population based screening"
  * time 0..1 time "The time for the screening if there is a proposed appointment. This is the case for breast cancer screening."
  * locationName 0..1 string "Human readable name of the location where the patient is invited to participate." "For some screenings, but not all, a location is provided for the patient."
  * locationAddress 0..1 string "Human readable address of the invitation location" "For some screenings, but not all, a location is provided for the patient."
* participation 0..1 BackboneElement "The participation details" "A participation is not mandatory. A patient can choose not to participate for a screening."
  * date 1..1 date "The date the patient participated in the population based screening"
  * locationName 0..1 string "Human readable name of the location where the patient participated" "For some screenings, but not all, a location is provided for the patient."
  * locationAddress 0..1 string "Human readable address of the participation location" "For some screenings, but not all, a location is provided for the patient."
  * result 0..1 CodeableConcept "The result of participation in the population based screening" "Notify the patient if the result was abnormal/positive or normal/negative"
  * followup 0..1 BackboneElement "Details of proposed actions for the patient after the screening concluded." "This data acts purely as info for the patient to inform the patient of proposed actions and should not be followed up by the screening authority."
    * needed 0..1 boolean "Indication if the patient should request or take other examinations/steps based on the outcome of the screening."
    * advice 0..1 string "Indication what other examinations/steps the patient should take."
    * request 0..1 string "The other examinations that the patient should take."
* nextInvitation 1..1 BackboneElement "This field gives a short human readable indication for the patient if the patient can expect future invitations for the population based screening and an estimation when the next invitation will be created. If the patient will not receive future invitations for the screening, a short explanation will be given."
  * type 1..1 CodeableConcept "Type of the next invitation or lack of next invitation"
  * date 0..1 dateTime "(Partial) date of next invitation, if applicable"



Logical: BeModelPopulationScreeningPlan
Parent: Element
Title: "Logical model for population screening plan"
Description: "Logical model for recurrent population based screening. This model represents a screening plan for a patient for a given cancer type."

* ^status = #active
* patient 1..1 Reference(Patient) "The patient for the screening"
* screeningType 1..1 CodeableConcept "The related screening" "The related screening, for example breast cancer, colon cancer or cervicalcancer."

* screeningEpisode 0..* BeModelPopulationScreening "Each screening event - actual screening or missed scheduled screening"


---

// File: input/fsh/profiles/BePopulationBasedScreeningEpisodeOfCare.fsh

// Profile:        BePopulationBasedScreeningEpisodeOfCare
// Parent:         EpisodeOfCare
// Id:             Be-PopulationScreening-EpisodeOfCare
// Title:          "BE Episode PopulationScreening"
// Description:    "Manages a recurring periodical workflow for diagnostics in regard to a specific Condition."
//// * ^status = #draft
// * ^experimental = true
// * patient only Reference(BePatient)
// * patient 1..1
// * type from PopulationScreeningScreeningVS (extensible) 
// * extension contains PopulationScreeningNextInvitation named nextInvitation  1..1 MS

/*
Extension: PopulationScreeningNextInvitation
Description: "The estimated date on which to expect the next invitation"
//* ^status = #draft
* extension contains 
    type 1..1 MS and
    date 0..1 MS

* extension[type] ^short = "Indication for a new invitation"
* extension[type].value[x] only CodeableConcept
* extension[type].valueCodeableConcept from BeVSPopulationScreeningNextInvitationType (required)
* extension[date] ^short = "(partial) date for next invitation"
* extension[date].value[x] only dateTime
*/

// Extension: BePopulationScreeningEpisodeOfCare
// //Parent: workflow-episodeOfCare
// Description: "A periodic episode for a population based screening"
//// * ^status = #draft
// * value[x] only Reference(BePopulationBasedScreeningEpisodeOfCare)

Instance: cvko-id
InstanceOf: NamingSystem
Usage: #definition
Title: "cvko-id"
Description: "Internal id for identification of resource with cvko"
* extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* status = #active
* name = "CVKONamingSystem"
* kind = #identifier
* date = "2022-06-08"
* uniqueId[0].type = #uri
* uniqueId[=].value = "https://www.ehealth.fgov.be/standards/fhir/public-health/NamingSystem/cvkoId"
* uniqueId[=].preferred = true



// Instance: exampleEpisodePopulationScreening
// InstanceOf: BePopulationBasedScreeningEpisodeOfCare
// Usage: #example
// * status = #active
// * identifier.system = "http://example.org/sampleepisodeofcare-identifier"
// * identifier.value = "123"
// * patient = Reference(exampleMaleBePatient)
// * managingOrganization = Reference(CvKO)
// * period.start = "2014-09-01"
// * type = $sct#762444001
// * type.text = "Dikkedarmkanker"
// * extension[nextInvitation].extension[type].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-populationscreening-next-invitation-type#tobedetermined



Instance: exampleMaleBePatient
InstanceOf: BePatient
Title: "Male Patient"
Description: "Male example patient"
Usage: #example
* identifier[SSIN].system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* identifier[SSIN].value = "12345"
* name.family = "Jack"
* name.given = "Bauer"
* gender = #male

Instance: CvKO
InstanceOf: Organization
Title: "Example Organization"
Description: "Example Organization - Centrum voor Kankeropsporing"
Usage: #example
* name = "Centrum voor Kankeropsporing"
* alias = "CvKO"


// ValueSet: PopulationScreeningScreeningVS
// Id: populationscreening-screening-vs
// Title: "PopulationScreening Screening VS"
// Description: "PopulationScreening screening types"
//// * ^status = #draft
// * ^experimental = true
// * $sct#268547008 "Screening for malignant neoplasm of breast (procedure)"
// * $sct#275978004 "Screening for malignant neoplasm of colon" // 268548003 ??
// * $sct#171149006 "Screening for malignant neoplasm of cervix"

---

// File: input/fsh/profiles/BePopulationScreeningAppointment.fsh

Profile: BePopulationScreeningAppointment
Parent: Appointment
Id: be-populationscreening-appointment
Title: "Population Screening Appointment"
Description: "Appointment Profile for population screening"
//* ^status = #draft
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
//* extension contains BePopulationScreeningEpisodeOfCare named Episode 1..1 MS
* identifier MS
* start 1..1 MS
* end MS
  * ^short = "The end of the appointment period. See full description and comments for details."
  * ^comment = "This is subject to an invariant on the base resource, which is not relevant in the case of Belgian Population Health (CvKO). In that situation, start and and date are the same."

* participant.actor.type 1..1


* participant ^slicing.discriminator.type = #value
* participant ^slicing.discriminator.path = "actor.type"
* participant ^slicing.rules = #open
* participant ^slicing.description = "Type of participant"


* participant contains
  patient 1..1 and 
  location 0..1

* participant[patient].actor only Reference(BePatient)
* participant[location].actor only Reference(Location)
* participant[location].actor.type = #Location
* participant[patient].actor.type = #Patient

* participant[patient] MS
* participant[location] MS


Instance: BreastCancerScreeningAppointment
InstanceOf: BePopulationScreeningAppointment
Usage: #example
Title: "Appointment Breast Cancer Screening"
Description: "Appointment for mammography in a mammographic unit in context of breast cancer screening"

* status = #booked
* start = "2022-03-15T00:00:00.000+02:00"
* end = "2022-03-15T23:59:00.000+02:00"
* participant[patient].actor = Reference(JaneDoe)
* participant[patient].status = #tentative
* participant[location].actor = Reference(mammographicUnit)
* participant[location].status = #accepted
* participant[patient].actor.type = #Patient
* participant[location].actor.type = #Location
//* extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
//* extension.valueReference = Reference(exampleEpisodePopulationScreening)
* contained[0] = mammographicUnit

Instance: ColonCancerScreeningAppointment
InstanceOf: BePopulationScreeningAppointment
Usage: #example
Title: "Appointment Colon Cancer Screening"
Description: "Appointment for stool sample in context of colon cancer screening"
* status = #booked
* start = "2022-03-15T00:00:00.000+02:00"
* end = "2022-03-15T23:59:00.000+02:00"
* participant[patient].actor = Reference(JaneDoe)
* participant[patient].status = #tentative
* participant[patient].actor.type = #Patient
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(exampleEpisodePopulationScreening)


Instance: CervicalCancerScreeningAppointment
InstanceOf: BePopulationScreeningAppointment
Usage: #example
Title: "Appointment Cervical Cancer Screening"
Description: "Proposed appointment in context of cervical cancer screening"
//* language = #nl-BE
* status = #proposed
* start = "2022-03-15T00:00:00.000+02:00"
* end = "2022-03-15T23:59:00.000+02:00"
* participant[patient].actor = Reference(JaneDoe)
* participant[patient].status = #tentative
* participant[patient].actor.type = #Patient
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(exampleEpisodePopulationScreening)


---

// File: input/fsh/profiles/BePopulationScreeningCarePlan.fsh

Profile: BePopulationScreeningPlan
Parent: CarePlan
Id: be-populationscreening-plan
Title: "PopulationScreening Plan"
Description: """A longitudinal plan for a patient's screening activities.
This resource exists to articulate the different activities as part of following a defined plan for certain populations."""
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1

* partOf MS 
* identifier MS

* category MS
* author MS

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "coding.system"
* category ^slicing.rules = #open
* category ^slicing.description = "Slice based on the type of code"

* category contains cancerScreeningType 1..1

* category[cancerScreeningType].coding.system = "http://snomed.info/sct"
* category[cancerScreeningType] from BeVSPopulationScreeningType
* subject only Reference(BePatient)
* author 1..1
* author only Reference(BeOrganization)
* activity MS
  * detail.reasonReference MS
  * outcomeReference MS
  * detail.reasonReference only Reference(BeObservation)
  * detail.reasonReference MS
  * reference only Reference(BePopulationScreeningFollowUp or BePopulationScreeningAppointment) 
  * reference MS

Profile: BePopulationScreeningCommunication
Parent: Communication
Id: be-populationscreening-communication
Title: "PopulationScreening Communication"
Description: """Communication following a patient's screening activities.
"""
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1

* identifier MS

* topic from BeVSPopulationScreeningNextInvitationType 
* topic MS

* payload.contentAttachment MS
* sender 1..1 MS
* sender only Reference(BeOrganization)
* recipient 1..* MS
* recipient only Reference(BePatient)
* about MS
* subject 1..1 MS

* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "coding.system"
* category ^slicing.rules = #open
* category ^slicing.description = "Slice based on the type of code"



* category contains cancerScreeningType 1..1 MS

* category[cancerScreeningType].coding.system = "http://snomed.info/sct"
* category[cancerScreeningType] from BeVSPopulationScreeningType


---

// File: input/fsh/profiles/BePopulationScreeningEncounter.fsh

Profile: BePopulationScreeningEncounter
Parent: Encounter
Id: be-populationscreening-encounter
Title: "Population Screening Encounter"
Description: "Encounter Profile for screening - participation in population screening"
//* ^status = #draft
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
//* extension contains BePopulationScreeningEpisodeOfCare named Episode 1..1
* identifier MS
* subject 1..1 MS
* subject only Reference(BePatient)
* period MS
* location MS
* appointment MS
* appointment only Reference(BePopulationScreeningAppointment)

Profile: BePopulationScreeningObservation
Parent: BeObservation
Id: be-populationscreening-observation
Title: "Population Screening Observation"
Description: "Observation result of screening"
//* ^status = #draft
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* identifier MS
* code MS
* code from BeVSPopulationScreeningType (preferred)
* valueCodeableConcept MS
* valueCodeableConcept from BePopulationScreeningResultVS (preferred)
* encounter MS
* encounter only Reference(BePopulationScreeningEncounter)
//* extension contains BePopulationScreeningEpisodeOfCare named Episode 1..1 MS

Instance: BreastCancerEncounterExample
InstanceOf: BePopulationScreeningEncounter
Usage: #example
Title: "Breast Cancer Encounter Example"
Description: "Participation for breastcancer screening"
* status = #finished
* class.system = "http://terminology.hl7.org/CodeSystem/v3-ActCode"
* class.code = #AMB
//* episodeOfCare = Reference(exampleEpisodePopulationScreening)
* appointment = Reference(BreastCancerScreeningAppointment)
* period.start = "2022-03-15T11:30:00.000+02:00"
* location.location = Reference(mammographicUnit)
* subject = Reference(JaneDoe)
* contained[0] = mammographicUnit
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(exampleEpisodePopulationScreening)


Instance: PositiveBreastCancerResult
InstanceOf: BePopulationScreeningObservation
Usage: #example
Title: "Positive Breast Cancer Result"
Description: "Observation with positive/abnormal result"
* status = #final
* code = $sct#280415008
* performer = Reference(Organization/CvKO)
* encounter = Reference(BreastCancerEncounterExample)
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(exampleEpisodePopulationScreening)




ValueSet: BePopulationScreeningResultVS
Id: be-populationscreening-result-vs
Title: "PopulationScreening Result Value Set"
Description: "Result"
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^copyright = """
    
*      This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org"""

* $sct#280415008 "Abnormal result"
* $sct#280413001 "Normal result"

---

// File: input/fsh/profiles/BePopulationScreeningFollowUp.fsh

Profile: BePopulationScreeningFollowUp
Parent: ServiceRequest
Id: be-populationscreening-follow-up
Title: "PopulationScreening Follow Up"
Description: """An indication of which actions a patient can take next, or which follow up examinations are proposed. This is a proposal. 
This resource exists to notify the patient that the patient should request additional examinations if the result was positive. 
If the screening was negative, no follow up examination is expected - so no instance of this resource is expected.
"""
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* ^purpose = "Notify the patient about possible follow up examinations/actions the patient can take."
//* ^status = #draft
* intent = #proposal (exactly)
* identifier MS
* intent and code and subject and bodySite and reasonReference MS

* subject only Reference(BePatient)
* code from BeVSPopulationScreeningFollowUpAdvice (example)
* bodySite from BeVSPopulationScreeningBodySiteLocation (example)
* occurrence[x]
//* extension contains BePopulationScreeningEpisodeOfCare named Episode 1..1 MS

ValueSet: BeVSPopulationScreeningFollowUpAdvice
Title: "Population Screening Follow-up Advice Value Set"
Description: "Possible follow up actions"
//* ^status = #draft
* ^copyright = """
    
*      This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org"""
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* http://snomed.info/sct#73761001 "Colonoscopy"

ValueSet: BeVSPopulationScreeningBodySiteLocation
Id: be-vspopulationscreening-body-site-location
Title: "PopulationScreening Body Site Value Set"
Description: "Body site or location on body"
//* ^status = #draft
* ^copyright = """
    
*      This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org"""
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* http://snomed.info/sct#14742008 "Dikke darm"

Instance: ColorectalCancerScreeningFollowUpExample
InstanceOf: BePopulationScreeningFollowUp
Usage: #example
Title: "Colorectal Cancer Screening Follow Up Example Positive"
Description: "Follow up after positive colorectal cancer screening"
* intent = #proposal
* status = #active
* subject = Reference(JaneDoe)
* code = http://snomed.info/sct#73761001
* bodySite = http://snomed.info/sct#14742008
* bodySite.text = "Dikke darm"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(exampleEpisodePopulationScreening)

//Instance: BreastCancerScreeningFollowUpExample
//InstanceOf: BePopulationScreeningFollowUp
//Usage: #example
//Title: "Breast Cancer Screening Follow Up Example"
//Description: "Follow up after positive breast cancer screening. This is a proposal. This resource exists to notify the patient that the patient should request additional examinations."
//* intent = #proposal
//* status = #active
//* subject = Reference(JaneDoe)
// // * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// // * extension.valueReference = Reference(exampleEpisodePopulationScreening)

Instance: JaneDoe
InstanceOf: BePatient
Description: "female example patient"
* name.family = "Doe"
* name.given = "Jane"
* gender = #female

---

// File: input/fsh/valuesets/BeVSPopulationScreeningNextInvitationType.fsh

ValueSet: BeVSPopulationScreeningNextInvitationType
Title: "Population Screening Next Invitation Type Value Set"
Description: "Value Set containing the codes for the type of the next invitation (or exclusion of next invitation)"
Id: be-vs-populationscreening-next-invitation-type
* ^copyright = """
    
*      This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org"""
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
* include codes from system BeCSPopulationScreeningNextInvitationType

---

// File: input/fsh/valuesets/BeVSPopulationScreeningType.fsh

ValueSet: BeVSPopulationScreeningType
Title: "Population Screening Type Value Set"
Description: "Value Set with the codes for the type of screening"
Id: be-vs-populationscreening-type
//* ^status = #draft
* ^copyright = """
    
*      This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org"""
* ^experimental = true
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = 1
// * include http://snomed.info/sct#275978004
// * include http://snomed.info/sct#268547008 
// * include http://snomed.info/sct#171149006 

// ValueSet: PopulationScreeningScreeningVS
// Id: populationscreening-screening-vs
// Title: "PopulationScreening Screening VS"
// Description: "Population Screening types"
//// * ^status = #draft
// * ^experimental = true
* ^copyright = """
*   This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement
    
*   The SNOMED International IPS Terminology is distributed by International Health Terminology Standards Development Organisation, trading as SNOMED International, and is subject the terms of the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/). For more information, see [SNOMED IPS Terminology](https://www.snomed.org/snomed-ct/Other-SNOMED-products/international-patient-summary-terminology)
    
*   The HL7 International IPS implementation guides incorporate SNOMED CT®, used by permission of the International Health Terminology Standards Development Organisation, trading as SNOMED International. SNOMED CT was originally created by the College of American Pathologists. SNOMED CT is a registered trademark of the International Health Terminology Standards Development Organisation, all rights reserved. Implementers of SNOMED CT should review [usage terms](https://www.snomed.org/get-snomed) or directly contact SNOMED International: info@snomed.org
"""
* $sct#268547008 "Screening for malignant neoplasm of breast (procedure)"
* $sct#275978004 "Screening for malignant neoplasm of colon" // 268548003 ??
* $sct#171149006 "Screening for malignant neoplasm of cervix"


---

// File: input/images-source/send-update-screening-information.plantuml

@startuml
title Submit Screening Information\n
skinparam actorStyle awesome

hide footbox

'!include ./style.iuml

actor "**Screening**\n**Information**\n**Provider**" as SIP
actor "**Screening**\n**Information**\n**Receiver**" as SIR

|||
SIP --> SIR : Submit Screening Information\n (Batch)
activate SIR
SIR --> SIP: Response 


@enduml


---

// File: input/data/features.yml

#---


---

// File: input/fsh/instances/Examples.fsh

// Instance: BK-1-no-screening-example-episode
// InstanceOf: BePopulationBasedScreeningEpisodeOfCare
// Usage: #example
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/PopulationScreeningNextInvitationIndication"
// * extension.valueString = "Je ontvangt geen volgende uitnodiging omdat je hebt laten weten dat je geen uitnodiging meer wou ontvangen. Indien je meer informatie wenst over dit onderzoek kan je dit best bespreken met je arts. "
// * extension[nextInvitation].extension[type].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-populationscreening-next-invitation-type#refusal
// * identifier.system = "http://example.org/sampleepisodeofcare-identifier"
// * identifier.value = "3237640"
// * status = #active
// * type = http://snomed.info/sct#268547008 "PopulationScreening borstkanker"
// * type.text = "PopulationScreening borstkanker"
// * patient = Reference(Patient/JaneDoe)
// * managingOrganization = Reference(Organization/CvKO)
// * period.start = "2020-04-08T00:00:00+02:00"



// Instance: BK-2-invitation-example-episode
// InstanceOf: BePopulationBasedScreeningEpisodeOfCare
// Usage: #example
// //* extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/PopulationScreeningNextInvitationIndication"
// //* extension.valueString = "De datum van volgende uitnodiging is afhankelijk van de uitslag van het verdere onderzoek. "
// * extension[nextInvitation].extension[type].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-populationscreening-next-invitation-type#tobedetermined
// * identifier.system = "http://example.org/sampleepisodeofcare-identifier"
// * identifier.value = "3237641"
// * status = #active
// * type = http://snomed.info/sct#268547008 "PopulationScreening borstkanker"
// * type.text = "PopulationScreening borstkanker"
// * patient = Reference(Patient/JaneDoe)
// * managingOrganization = Reference(Organization/CvKO)
// * period.start = "2020-04-08T00:00:00+02:00"

Instance: BK-2-invitation-example-invitation
InstanceOf: BePopulationScreeningAppointment
Title: "[Example 2] Invitation - Breast Cancer"
Description: "Example Invitation (instance of Appointment) for Breast Cancer screening"
Usage: #example
* contained.resourceType = "Location"
* contained.id = "1"
* contained.name = "AZ Jan Palfijn Gent"
* contained.address.text = "HENRI DUNANTLAAN 5, 9000 GENT"
* contained.address.line = "HENRI DUNANTLAAN 5, 9000 GENT"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-2-invitation-example-episode)
* status = #booked
* start = "2021-04-08T00:00:00.000+02:00"
* end = "2021-04-08T23:59:00.000+02:00"
* participant[patient].actor = Reference(JaneDoe)
* participant[patient].status = #tentative
* participant[location].actor = Reference(Location/1)
* participant[location].status = #accepted
* participant[patient].actor.type = #Patient
* participant[location].actor.type = #Location


// Instance: BK-3-invitation-participation-negative-example-episode
// InstanceOf: BePopulationBasedScreeningEpisodeOfCare
// Usage: #example
// //* extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/PopulationScreeningNextInvitationIndication"
// //* extension.valueString = "De volgende uitnodiging is voorzien rond 24/12/2024."
// * extension[nextInvitation].extension[type].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-populationscreening-next-invitation-type#nextinvitation
// * extension[nextInvitation].extension[date].valueDateTime = "2024-12-24"
// * identifier.system = "http://example.org/sampleepisodeofcare-identifier"
// * identifier.value = "3237642"
// * status = #active
// * type = http://snomed.info/sct#268547008 "PopulationScreening borstkanker"
// * type.text = "PopulationScreening borstkanker"
// * patient = Reference(Patient/JaneDoe)
// * managingOrganization = Reference(Organization/CvKO)
// * period.start = "2020-04-08T00:00:00+02:00"

Instance: BK-3-invitation-participation-negative-example-appointment
InstanceOf: BePopulationScreeningAppointment
Title: "[Example 3] Invitation - Breast Cancer"
Description: "Example Invitation for Breast Cancer screening"

Usage: #example
//* language = #nl-BE
* contained.resourceType = "Location"
* contained.id = "1"
* contained.name = "AZ Jan Palfijn Gent"
* contained.address.text = "HENRI DUNANTLAAN 5, 9000 GENT"
* contained.address.line = "HENRI DUNANTLAAN 5, 9000 GENT"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-3-invitation-participation-negative-example-episode)
* status = #booked
* start = "2021-04-08T00:00:00.000+02:00"
* end = "2021-04-08T23:59:00.000+02:00"
* participant[patient].actor = Reference(Patient/JaneDoe)
* participant[patient].actor.type = #Patient
* participant[patient].status = #tentative
* participant[location].actor = Reference(Location/1)
* participant[location].status = #accepted
* participant[location].actor.type = #Location

Instance: BK-3-invitation-participation-negative-example-encounter
InstanceOf: BePopulationScreeningEncounter
Title: "[Example 3] Encounter - Breast Cancer"
Description: "Example Encounter for Breast Cancer screening"
Usage: #example
* contained.resourceType = "Location"
* contained.id = "1"
* contained.name = "AZ Jan Palfijn Gent"
* contained.address.text = "HENRI DUNANTLAAN 5, 9000 GENT"
* contained.address.line = "HENRI DUNANTLAAN 5, 9000 GENT"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-3-invitation-participation-negative-example-episode)
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* subject = Reference(Patient/JaneDoe)
//* episodeOfCare = Reference(BK-3-invitation-participation-negative-example-episode)
* period.start = "2021-07-17T00:00:00+02:00"
* period.end = "2021-07-17T23:59:00+02:00"
* location.location = Reference(Location/1)

Instance: BK-3-invitation-participation-negative-example-observation
InstanceOf: BePopulationScreeningObservation
Title: "[Example 3] Result - Breast Cancer - normal"
Description: "Example Result for Breast Cancer screening - normal result i.e. screening negative"
Usage: #example
* language = #nl-BE
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-3-invitation-participation-negative-example-episode)
* status = #final
* performer = Reference(Organization/CvKO)
* valueCodeableConcept = http://snomed.info/sct#280413001 "Niet afwijkend"
* code = http://snomed.info/sct#268547008
* subject = Reference(Patient/JaneDoe)
* encounter = Reference(BK-3-invitation-participation-negative-example-encounter)



// Instance: BK-4-participation-negative-example-episode
// InstanceOf: BePopulationBasedScreeningEpisodeOfCare
// Usage: #example
// //* extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/PopulationScreeningNextInvitationIndication"
// //* extension.valueString = "De volgende uitnodiging is voorzien rond 24/12/2024."
// * extension[nextInvitation].extension[type].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-populationscreening-next-invitation-type#nextinvitation
// * extension[nextInvitation].extension[date].valueDateTime = "2024-12-24"
// * identifier.system = "http://example.org/sampleepisodeofcare-identifier"
// * identifier.value = "3237643"
// * status = #active
// * type = http://snomed.info/sct#268547008 "PopulationScreening borstkanker"
// * type.text = "PopulationScreening borstkanker"
// * patient = Reference(Patient/JaneDoe)
// * managingOrganization = Reference(Organization/CvKO)
// * period.start = "2020-04-08T00:00:00+02:00"

Instance: BK-4-participation-negative-example-encounter
InstanceOf: BePopulationScreeningEncounter
Title: "[Example 4] Encounter - Breast Cancer - normal"
Description: "Example Encounter for Breast Cancer screening"
Usage: #example
//* language = #nl-BE
* contained.resourceType = "Location"
* contained.id = "1"
* contained.name = "AZ Jan Palfijn Gent"
* contained.address.text = "HENRI DUNANTLAAN 5, 9000 GENT"
* contained.address.line = "HENRI DUNANTLAAN 5, 9000 GENT"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-4-participation-negative-example-episode)
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* subject = Reference(Patient/JaneDoe)
//* episodeOfCare = Reference(BK-4-participation-negative-example-episode)
* period.start = "2021-07-17T00:00:00+02:00"
* period.end = "2021-07-17T23:59:00+02:00"
* location.location = Reference(Location/1)

Instance: BK-4-participation-negative-example-observation
InstanceOf: BePopulationScreeningObservation
Title: "[Example 4] Result - Breast Cancer - normal"
Description: "Example Result for Breast Cancer screening - normal result"
Usage: #example
//* language = #nl-BE
* status = #final
* performer = Reference(Organization/CvKO)
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-4-participation-negative-example-episode)
* valueCodeableConcept = http://snomed.info/sct#280413001 "Niet afwijkend"
* code = http://snomed.info/sct#268547008
* subject = Reference(Patient/JaneDoe)
* encounter = Reference(BK-4-participation-negative-example-encounter)



// Instance: BK-5-negative-example-episode
// InstanceOf: BePopulationBasedScreeningEpisodeOfCare
// Usage: #example
// //* extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/PopulationScreeningNextInvitationIndication"
// //* extension.valueString = "De volgende uitnodiging is voorzien rond 24/12/2024."
// * extension[nextInvitation].extension[type].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-populationscreening-next-invitation-type#nextinvitation
// * extension[nextInvitation].extension[date].valueDateTime = "2024-12-24"
// * identifier.system = "http://example.org/sampleepisodeofcare-identifier"
// * identifier.value = "3237644"
// * status = #active
// * type = http://snomed.info/sct#268547008 "PopulationScreening borstkanker"
// * type.text = "PopulationScreening borstkanker"
// * patient = Reference(Patient/JaneDoe)
// * managingOrganization = Reference(Organization/CvKO)
// * period.start = "2020-04-08T00:00:00+02:00"

Instance: BK-5-example-invitation
InstanceOf: BePopulationScreeningAppointment
Title: "[Example 5] Invitation - Breast Cancer"
Description: "Example Invitation for Breast Cancer screening"
Usage: #example
//* language = #nl-BE
* contained.resourceType = "Location"
* contained.id = "1"
* contained.name = "AZ Jan Palfijn Gent"
* contained.address.text = "HENRI DUNANTLAAN 5, 9000 GENT"
* contained.address.line = "HENRI DUNANTLAAN 5, 9000 GENT"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-5-negative-example-episode)
* status = #booked
* start = "2021-04-08T00:00:00.000+02:00"
* end = "2021-04-08T23:59:00.000+02:00"
* participant[patient].actor = Reference(Patient/JaneDoe)
* participant[patient].status = #tentative
* participant[location].actor = Reference(Location/1)
* participant[location].status = #accepted
* participant[patient].actor.type = #Patient
* participant[location].actor.type = #Location

Instance: BK-5-example-participation
InstanceOf: BePopulationScreeningEncounter
Title: "[Example 5] Encounter - Breast Cancer"
Description: "Example Encounter for Breast Cancer screening"
Usage: #example
* contained.resourceType = "Location"
* contained.id = "1"
* contained.name = "AZ Jan Palfijn Gent"
* contained.address.text = "HENRI DUNANTLAAN 5, 9000 GENT"
* contained.address.line = "HENRI DUNANTLAAN 5, 9000 GENT"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-5-negative-example-episode)
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* subject = Reference(Patient/JaneDoe)
//* episodeOfCare = Reference(BK-5-negative-example-episode)
* period.start = "2021-07-17T00:00:00+02:00"
* period.end = "2021-07-17T23:59:00+02:00"
* location.location = Reference(Location/1)

Instance: BK-5-result
InstanceOf: BePopulationScreeningObservation
Title: "[Example 5] Result - Breast Cancer"
Description: "Example Result for Breast Cancer screening"
Usage: #example
//* language = #nl-BE
* status = #final
* performer = Reference(Organization/CvKO)
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-5-negative-example-episode)
* valueCodeableConcept = http://snomed.info/sct#280415008 "Abnormal result"
* code = http://snomed.info/sct#268547008
* subject = Reference(Patient/JaneDoe)
* encounter = Reference(BK-5-example-participation)

//Instance: BK-5-example-advice-1
//InstanceOf: BePopulationScreeningFollowUp
//Title: "[Example 5] follow-up - Breast Cancer"
//Description: "Example follow-up from Breast Cancer screening"
//Usage: #example
//* language = #nl-BE
// // * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// // * extension.valueReference = Reference(BK-5-negative-example-episode)
//* status = #active
//* intent = #proposal
//* subject = Reference(Patient/JaneDoe)



// Instance: BK-6-example-episode
// InstanceOf: BePopulationBasedScreeningEpisodeOfCare
// Usage: #example
// //* extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/PopulationScreeningNextInvitationIndication"
// //* extension.valueString = "De volgende uitnodiging is voorzien rond 24/12/2024."
// * extension[nextInvitation].extension[type].valueCodeableConcept = https://www.ehealth.fgov.be/standards/fhir/public-health/CodeSystem/be-cs-populationscreening-next-invitation-type#nextinvitation
// * extension[nextInvitation].extension[date].valueDateTime = "2024-12-24"
// * identifier.system = "http://example.org/sampleepisodeofcare-identifier"
// * identifier.value = "3237645"
// * status = #active
// * type = http://snomed.info/sct#268547008 "PopulationScreening borstkanker"
// * type.text = "PopulationScreening borstkanker"
// * patient = Reference(Patient/JaneDoe)
// * managingOrganization = Reference(Organization/CvKO)
// * period.start = "2020-04-08T00:00:00+02:00"

Instance: BK-6-example-participation
InstanceOf: BePopulationScreeningEncounter
Title: "[Example 6] Encounter - Breast Cancer"
Description: "Example Encounter for Breast Cancer screening"
Usage: #example
* language = #nl-BE
* contained.resourceType = "Location"
* contained.id = "1"
* contained.name = "AZ Jan Palfijn Gent"
* contained.address.text = "HENRI DUNANTLAAN 5, 9000 GENT"
* contained.address.line = "HENRI DUNANTLAAN 5, 9000 GENT"
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-6-example-episode)
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* subject = Reference(Patient/JaneDoe)
//* episodeOfCare = Reference(BK-6-example-episode)
* period.start = "2021-07-17T00:00:00+02:00"
* period.end = "2021-07-17T23:59:00+02:00"
* location.location = Reference(Location/1)

Instance: BK-6-example-result
InstanceOf: BePopulationScreeningObservation
Title: "[Example 6] Result - Breast Cancer"
Description: "Example Result for Breast Cancer screening"
Usage: #example
* status = #final
* performer = Reference(Organization/CvKO)
// * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// * extension.valueReference = Reference(BK-6-example-episode)
* valueCodeableConcept = http://snomed.info/sct#280415008 "Abnormal result"
* code = http://snomed.info/sct#268547008
* subject = Reference(Patient/JaneDoe)
* encounter = Reference(BK-6-example-participation)

//Instance: BK-6-example-advice
//InstanceOf: BePopulationScreeningFollowUp
//Title: "[Example 6] Follow-up - Breast Cancer"
//Description: "Example Follow-up for Breast Cancer screening"
//Usage: #example
// // * extension.url = "https://www.ehealth.fgov.be/standards/fhir/public-health/StructureDefinition/BePopulationScreeningEpisodeOfCare"
// // * extension.valueReference = Reference(BK-6-example-episode)
//* status = #active
//* intent = #proposal
//* subject = Reference(Patient/JaneDoe)


---

