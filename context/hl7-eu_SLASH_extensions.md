File: repos/hl7-eu_SLASH_extensions/sushi-config.yaml

id: hl7.fhir.eu.extensions
canonical: http://hl7.eu/fhir/extensions
name:  Hl7EuExtensions
title: HL7 Europe Extensions
description: This guide lists the extensions speciifed for the European REALM.
status: draft # draft | active | retired | unknown
version: 0.1.1 # 
fhirVersion: 4.0.1 # https://www.hl7.org/fhir/valueset-FHIR-version.html
copyrightYear: 2023+
releaseLabel: ci-build # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
# license: CC0-1.0 # https://www.hl7.org/fhir/valueset-spdx-license.html
# https://www.hl7.org/fhir/valueset-jurisdiction.html
jurisdiction: 	http://unstats.un.org/unsd/methods/m49/m49.htm#150 "Europe" # urn:iso:std:iso:3166#EU
publisher:
  name:  HL7 Europe
  url: http://hl7.eu
  # url: http://hl7.org/Special/committees/eu
  # email: test@example.org
copyright: >-
  Used by permission of HL7 Europe, all rights reserved Creative Commons License

# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
#
# dependencies:
  
  # hl7.fhir.extensions.r5: 4.0.1
#   hl7.fhir.us.mcode:
#     id: mcode
#     uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#     version: 1.0.0
#
#
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
#
pages:
  index.md:
    title: Home 
  downloads.md:
    title: Downloads
    
 #  recommendations.md:
#    title: Recommendations
#
#
# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#
parameters: #see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#  produce-jekyll-data: true
  special-url:
    - http://hl7.eu/fhir/StructureDefinition/information-recipient
    - http://hl7.eu/fhir/StructureDefinition/composition-basedOn-order-or-requisition

    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-device
    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-strengthsubstance
    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-strengthtype
    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-classification
    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-productname
    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-sizeofitem
    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-characteristic
    - http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-unitofpresentation

#    - http://hl7.eu/fhir/StructureDefinition/body-location-qualifier
#    - http://hl7.eu/fhir/StructureDefinition/laterality-qualifier

# see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
# path-resource:
#    - input/resources
#    - fsh-generated/resources
#  path-pages:
#    - input/pagecontent
#    - input/intro-notes
#  active-tables: false
  apply-contact: true
  apply-jurisdiction: true
  apply-publisher: true
  apply-version: true
  show-inherited-invariants: true
  usage-stats-opt-out: true
  # excludexml: false
  # excludejson: false
  # excludettl: true
  # excludemap: true
 # suppressed-ids: DocumentReference/discharge-summary
 # tabbed-snapshots: false
  # generate: #what does this do - todo: remove and see4
  #   - xml
  #   - json
 # no-narrative:
 #   - Patient/example-targeted-provenance
 #   - Bundle/docref-example-1
  # no-validate:
  #   - '*/*'  # does not seems to work
  #   - 'StructureDefinition/*'
 # version-comparison:
 #    - 5.0.1
 #    - 4.0.0

#   excludettl: true
#   validation: [allow-any-extensions, no-broken-links]
#
# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │ The menu property will be used to generate the input/menu.xml file. The menu is represented    │
# │ as a simple structure where the YAML key is the menu item name and the value is the URL.       │
# │ The IG publisher currently only supports one level deep on sub-menus. To provide a             │
# │ custom menu.xml file, do not include this property and include a `menu.xml` file in            │
# │ input/includes. To use a provided input/includes/menu.xml file, delete the "menu"              │
# │ property below.                                                                                │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Home: index.html
  Table of Contents: toc.html
  Artifacts: artifacts.html  
  Downloads: downloads.html
  

# ╭───────────────────────────Less Common Implementation Guide Properties──────────────────────────╮
# │  Uncomment the properties below to configure additional properties on the ImplementationGuide  │
# │  resource. These properties are less commonly needed than those above.                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
#
# Those who need more control or want to add additional details to the contact values can use
# contact directly and follow the format outlined in the ImplementationGuide resource and
# ContactDetail.
#
# contact:
#   - name:  Bob Smith
#     telecom:
#       - system: email # phone | fax | email | pager | url | sms | other
#         value: bobsmith@example.org
#         use: work
#
#
# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs. If a value is an id or name, SUSHI will replace
# it with the correct canonical when generating the IG JSON.
#
# global:
#   Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#   Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile
#
#
# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key.
#   * if the key is an id or name, SUSHI will replace it with the
#     correct URL when generating the IG JSON.
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * if the exampleCanonical is an id or name, SUSHI will replace
#     it with the correct canonical when generating the IG JSON.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:

# resources:
#  ConceptMap/ConceptMap-eu-diagRptStatus2CompStatus:
#    name: DiagnosticReport to Composition status
#    description: Proposed relationship between the statuses used in the DiagnosticReport resource and that used for the Composition.


#  Patient/my-example-patient:
#    name: My Example Patient
#    description: An example Patient
#    exampleBoolean: true
#  Patient/bad-example: omit


#
# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds. If a resource
# is specified by id or name, SUSHI will replace it with the correct
# URL when generating the IG JSON.
#
# groups:
#  eHNGuidelines:
#    name:  eHN Laboratory Guidelines
#    description: Logical models representing the eHN Laboratory Guidelines
#    resources:
#      - StructureDefinition/LabReport
#      - StructureDefinition/Subject
#
# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * date
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
# * packagingId
#
#
# ╭──────────────────────────────────────────SUSHI flags───────────────────────────────────────────╮
# │  The flags below configure aspects of how SUSHI processes FSH.                                 │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
#
# FSHOnly: false
#
#
# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#
# applyExtensionMetadataToRoot: true
#
#
# The instanceOptions property is used to configure certain aspects of how SUSHI processes instances.
# See the individual option definitions below for more detail.

instanceOptions:
  manualSliceOrdering: true
#
# instanceOptions:
#   Determines for which types of Instances SUSHI will automatically set meta.profile
#   if InstanceOf references a profile:
#
#   setMetaProfile: always # always | never | inline-only | standalone-only
#
#
#   Determines for which types of Instances SUSHI will automatically set id
#   if InstanceOf references a profile:
#
#   setId: always # always | standalone-only


---

// File: input/pagecontent/downloads.md

### Full IG

Download the entire implementation guide [here](full-ig.zip).

### NPM Package and Definitions

The following file contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc. defined as part of this Implementation Guide:

- [NPM Package](package.tgz)

In addition there are format specific definition files:

- [XML](definitions.xml.zip)
- [JSON](definitions.json.zip)
- [TTL](definitions.ttl.zip)

These files should be the first choice whenever generating any implementation artifacts since they contain all of the rules about what makes these profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation.  See the overview on [validating FHIR profiles and resources]({{ site.data.fhir.path }}validation.html).

There are also specific packages for the R4 and R4B FHIR specifications:

#### R4-specific NPM Package and Definitions

- [R4 NPM Package](package.r4.tgz)

#### R4B-specific NPM Package and Definitions

- [R4B NPM Package](package.r4b.tgz)

### Examples

All of the examples that are used in this Implementation Guide are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)
- [TTL](examples.ttl.zip)


---

// File: input/pagecontent/index.md



### Scope

Define a set of common extensions to HL7 FHIR to be used in the European REALM.

### Dependencies

{% include dependency-table.xhtml %}

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### IP statements

{% include ip-statements.xhtml %}

---

// File: input/fsh/alias.fsh

//============== ALIAS ===============

// Actor Canonical

Alias: $server = http://hl7.eu/fhir/laboratory/actor-repos-eu-lab
Alias: $creator = http://hl7.eu/fhir/laboratory/actor-creator-eu-lab
Alias: $consumer = http://hl7.eu/fhir/laboratory/actor-consumer-eu-lab

// --- EU Lab Profiles
Alias: $Composition-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Composition-eu-lab
Alias: $Patient-eu-lab = http://hl7.eu/fhir/laboratory/StructureDefinition/Patient-eu-lab

// --- Code Systems
Alias: $obligation-cs = http://hl7.org/fhir/CodeSystem/obligation
Alias: $ajcc = http://cancerstaging.org
Alias: $atc = http://www.whocc.no/atc
Alias: $dicomOntology = http://dicom.nema.org/resources/ontology/DCM
Alias: $edqm = https://standardterms.edqm.eu
Alias: $iccc3 = http://terminology.hl7.org/CodeSystem/iccc-3 // FAKE URL NOT YET ASSIGNED !!
Alias: $icd03 = http://terminology.hl7.org/CodeSystem/icd-o-3
Alias: $loinc =  http://loinc.org
Alias: $icd10 = http://hl7.org/fhir/sid/icd-10
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $sct = http://snomed.info/sct
Alias: $ucum =  http://unitsofmeasure.org
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType
Alias: $obs-interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $reference-range-meaning = http://terminology.hl7.org/CodeSystem/referencerange-meaning
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $data-absent-reason-cs =  http://terminology.hl7.org/CodeSystem/data-absent-reason
// --- SID
Alias: $uri = urn:ietf:rfc:3986
Alias: $oid = urn:ietf:rfc:1155

// --- Value Sets
Alias: $v3-ClassNullFlavor = http://terminology.hl7.org/ValueSet/v3-ClassNullFlavor
Alias: $results-laboratory-observations-uv-ips = http://hl7.org/fhir/uv/ips/ValueSet/results-laboratory-observations-uv-ips
Alias: $results-coded-values-laboratory-uv-ips = http://hl7.org/fhir/uv/ips/ValueSet/results-coded-values-laboratory-uv-ips
Alias: $bodystructure-relative-location = http://hl7.org/fhir/ValueSet/bodystructure-relative-location

// ---- Extensions

Alias: $obligation = http://hl7.org/fhir/tools/StructureDefinition/obligation
Alias: $humanname-mothers-family = http://hl7.org/fhir/StructureDefinition/humanname-mothers-family
Alias: $humanname-fathers-family = http://hl7.org/fhir/StructureDefinition/humanname-fathers-family
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $patient-mothersMaidenName = http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName
Alias: $event-statusReason = http://hl7.org/fhir/StructureDefinition/event-statusReason
Alias: $procedure-method = http://hl7.org/fhir/StructureDefinition/procedure-method
Alias: $workflow-supportingInfo = http://hl7.org/fhir/StructureDefinition/workflow-supportingInfo
Alias: $bodySite = http://hl7.org/fhir/StructureDefinition/bodySite
Alias: $diagnostic-report-composition-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-DiagnosticReport.composition
Alias: $specimen-feature-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.feature
Alias: $specimen-feature-type-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.feature.type
Alias: $specimen-collection-device-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.collection.device
Alias: $specimen-collection-body-site-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.collection.bodySite
Alias: $specimen-collection-body-site-reference-r5 = http://hl7.org/fhir/5.0/StructureDefinition/extension-Specimen.collection.bodySite.reference
Alias: $bodySite-reference = http://hl7.org/fhir/StructureDefinition/bodySite
Alias: $event-performerFunction = http://hl7.org/fhir/StructureDefinition/event-performerFunction
Alias: $iso21090-ADXP-streetName = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName
Alias: $iso21090-ADXP-houseNumber = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber
Alias: $iso21090-ADXP-postBox = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox
Alias: $iso21090-uncertainty = http://hl7.org/fhir/StructureDefinition/iso21090-uncertainty
Alias: $iso21090-uncertaintyType = http://hl7.org/fhir/StructureDefinition/iso21090-uncertaintyType
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $patient-animal = http://hl7.org/fhir/StructureDefinition/patient-animal

// --- Profiles
Alias: $Composition-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips
Alias: $Patient-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Patient-uv-ips
Alias: $AllergyIntolerance-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/AllergyIntolerance-uv-ips
Alias: $Condition-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Condition-uv-ips
Alias: $DeviceUseStatement-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/DeviceUseStatement-uv-ips
Alias: $DiagnosticReport-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/DiagnosticReport-uv-ips
Alias: $ImagingStudy-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/ImagingStudy-uv-ips
Alias: $Immunization-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Immunization-uv-ips
Alias: $Media-observation-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Media-observation-uv-ips
Alias: $Medication-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Medication-uv-ips
Alias: $MedicationRequest-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationRequest-uv-ips
Alias: $MedicationStatement-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/MedicationStatement-uv-ips
Alias: $Practitioner-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Practitioner-uv-ips
Alias: $PractitionerRole-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/PractitionerRole-uv-ips
Alias: $Procedure-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Procedure-uv-ips
Alias: $Organization-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Organization-uv-ips
Alias: $Observation-pregnancy-edd-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-edd-uv-ips
Alias: $Observation-pregnancy-outcome-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-outcome-uv-ips
Alias: $Observation-pregnancy-status-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-pregnancy-status-uv-ips
Alias: $Observation-alcoholuse-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-alcoholuse-uv-ips
Alias: $Observation-tobaccouse-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-tobaccouse-uv-ips
Alias: $Observation-results-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-uv-ips
//Alias: $Specimen-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Specimen-uv-ips
Alias: $Bundle-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Bundle-uv-ips
Alias: $vitalsigns = http://hl7.org/fhir/StructureDefinition/vitalsigns

Alias: $CodeableConcept-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/CodeableConcept-uv-ips
Alias: $ext-data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason

Alias: $Range-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Range-uv-ips
Alias: $Ratio-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Ratio-uv-ips
Alias: $Quantity-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Quantity-uv-ips

Alias: $Observation-results-laboratory-uv-ips = http://hl7.org/fhir/uv/ips/StructureDefinition/Observation-results-laboratory-uv-ips

//=========================

---

// File: input/fsh/extensions/extensions-lab.fsh

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Extension: CompositionBasedOnOrderOrRequisition
Id:   composition-basedOn-order-or-requisition
Title:  "Document Based On Order"
Description: "This extension provides a link to the order [(Reference(ServiceRequest)] or requisition [ServiceRequest.requisition (i.e., 'Request.groupIdentifier')] that this report document is based on and fulfills."
// publisher, contact, and other metadata here using caret (^) syntax (omitted)
* insert SetFmmandStatusRule ( 2, trial-use )
* insert ExtensionContext(Composition)
* ^url = "http://hl7.eu/fhir/StructureDefinition/composition-basedOn-order-or-requisition"
* value[x] only Reference (ServiceRequest) or Identifier


Extension: InformationRecipient
Id:   information-recipient
Title: "Information recipient"
Description: "This extension applies to the Composition resource and is used to represent an intended recipient of the composition."
// publisher, contact, and other metadata here using caret (^) syntax (omitted)
* insert ExtensionContext(Composition)
* insert SetFmmandStatusRule ( 2, trial-use )
* ^url = "http://hl7.eu/fhir/StructureDefinition/information-recipient"
* value[x] only Reference (Practitioner or Device or Patient or RelatedPerson or PractitionerRole or Organization)	


/* Extension: BodyLocationQualifier
Id: body-location-qualifier
Title: "Body Location Qualifier"
Description: """Qualifier to refine an body location. These include qualifiers for relative location, directionality, number, and plane, and exclude qualifiers for laterality.
Inspired to the mCode extension."""

* insert ExtensionContext(Specimen.collection.bodySite)
* insert ExtensionContext(Procedure.bodySite)
* insert ExtensionContext(Condition.bodySite)
* insert ExtensionContext(Observation.bodySite)
* ^url = "http://hl7.eu/fhir/StructureDefinition/body-location-qualifier"
* value[x] only CodeableConcept
* value[x] from $bodystructure-relative-location (example)
* value[x] 1..1

// ------------------------------------
Extension: LateralityQualifier
Id: laterality-qualifier
Title: "Laterality Qualifier"
Description: """Qualifier to specify laterality.
Inspired to the mCode extension."""

* insert ExtensionContext(Specimen.collection.bodySite)
* insert ExtensionContext(Procedure.bodySite)
* insert ExtensionContext(Condition.bodySite)
* insert ExtensionContext(Observation.bodySite)
* ^url = "http://hl7.eu/fhir/StructureDefinition/laterality-qualifier"
* value[x] only CodeableConcept
* value[x] from $bodystructure-relative-location (example)
* value[x] 1..1 */

---

// File: input/fsh/extensions/extensions-mpd.fsh


Extension: MedicationDevice
Id:        ihe-ext-medication-device
Title:     "Medication - Device"
Description: "Device, typically an administration device, included in the medicinal product."
// Extension on Medication
* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-device"
* extension contains
    device 1..1 and
    quantity 0..1
* extension[device].value[x] only CodeableConcept or Reference(Device or DeviceDefinition)
* extension[device] ^short = "Coded or referenced device"
* extension[quantity].value[x] only Quantity
* extension[quantity] ^short = "Number of defined devices in te package"

Extension: MedicationStrengthSubstance
Id: ihe-ext-medication-strengthsubstance
Title: "Medication - Strength substance"
Description: "Substance for marking the basis of strength. When the precise active ingredient is a salt, the strength is often provided for the active moiety (basis of strength)."
Context: Medication.ingredient.strength
* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-strengthsubstance"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1


Extension: MedicationStrengthType
Id: ihe-ext-medication-strengthtype
Title: "Medication - Strength type"
Description: "Strength type (e.g. concentration strength, presentation strength)"
Context: Medication.ingredient.strength
* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-strengthtype"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1

Extension: MedicationClassification
Id:        ihe-ext-medication-classification
Title:     "Medication - Classification"
Description: "Medication classification/category. Allows the product to be classified by various systems, e.g ATC, narcotic class, legal status of supply, etc.."

* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-classification"
* ^context[+].type = #element
* ^context[=].expression = "Medication"
* value[x] only CodeableConcept 


Extension: MedicationProductName
Id:        ihe-ext-medication-productname
Title:     "Medication - Product Name"
Description: "Name of the medicinal product. This is typically the name of a real product as registered. This element should not contain display names of virtual product concepts."

* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-productname"
* ^context[+].type = #element
* ^context[=].expression = "Medication"
* value[x] only string
* valueString 1..1


Extension: MedicationSizeOfItem
Id:        ihe-ext-medication-sizeofitem
Title:     "Medication - Size of Item"
Description: "Size of a manufactured item or unit of presentation. For example, size of one vial in a package that may contain several vials."
Context: Medication

* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-sizeofitem"
* value[x] only Quantity
* valueQuantity 1..1


Extension: MedicationCharacteristic
Id:        ihe-ext-medication-characteristic
Title:     "Medication - Characteristic"
Description: "Any characteristic of the medicinal product prescribed or dispensed (for example, price, textual package description, special program information, etc)"

* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-characteristic"
* extension contains
    type 1..1 and
    value 0..1
* extension[type].value[x] only CodeableConcept
* extension[type] ^short = "Code specifying the type of characteristic of medication"
* extension[value] ^short = "Descriptive value of the characteristic"


Extension: MedicationUnitOfPresentation
Id:        ihe-ext-medication-unitofpresentation
Title:     "Medication - Unit of presentation"
Description: "Unit of presentation, typically describing the smallest countable package item (e.g tablet, vial, ampoule, etc). Unit of presentation is also often used in describing pack size and the denominator of strength. If the size of presentation unit is relevant, it should be described in sizeOfItem extension."
* ^context[+].type = #element
* ^context[=].expression = "Medication"
* ^url = "http://profiles.ihe.net/PHARM/ihe.pharm.mpd/StructureDefinition/ihe-ext-medication-unitofpresentation"
* value[x] only CodeableConcept 
* valueCodeableConcept 1..1

// Extension: MedicationDevice - separate for R4 and R5 due to CodeableReference
// StrengthSubstance separate for R4 and R5 due to strength[x] element
// StrengthType separate for R4 and R5 due to strength[x] element




---

// File: input/fsh/rulesSet/rulesSet-common.fsh

RuleSet: ExtensionContext(path)
// copied by mCode
* ^context[+].type = #element
* ^context[=].expression = "{path}"


RuleSet: SetFmmandStatusRule ( fmm, status )
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = {fmm}
* ^extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status].valueCode = #{status}


RuleSet: SetFmmandStatusRuleInstance ( fmm, status )
// Rule to be used for Instances
* extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm].valueInteger = {fmm}
* extension[http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status].valueCode = #{status}

RuleSet: SectionComRules (short, def, code)

// * insert (Health Concern Section, test, http://loinc.org#75310-3)

* ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* ^extension[0].valueString = "Section"
* ^short = "{short}"
* ^definition = "{def}"
* title 1..
* code 1..
* code only http://hl7.org/fhir/uv/ips/StructureDefinition/CodeableConcept-uv-ips
* code = {code} (exactly)
* text 1..
* text only Narrative
* emptyReason ..0
* emptyReason ^mustSupport = false

RuleSet: SectionEntrySliceComRules (short, def)
* entry ^slicing.discriminator[0].type = #type
* entry ^slicing.discriminator[0].path = "resolve()"
* entry ^slicing.ordered = false
* entry ^slicing.rules = #open
* entry ^short = "{short}"
* entry ^definition = "{def}"

RuleSet: SectionEntrySliceDefRules (name, card, short, def, profiles)
// SectionEntrySliceDefRules (flags, 0.., "Care Team", "Care Team", CareTeamEu)

* entry contains {name} 0..1
* entry[{name}] {card}
* entry[{name}] ^short = "{short}"
* entry[{name}] ^definition = "{def}"
* entry[{name}] only Reference({profiles})

//--------------------------------------------
RuleSet: NoSubSectionsRules
* section ..0
* section ^mustSupport = false

RuleSet: SectionElementsRules
* code from LabStudyTypesEuVs (preferred)
* text ^short = "Text summary of the section, for human interpretation."
* entry only Reference (ObservationResultsLaboratoryEu )
// * entry only Reference (ObservationResultsLaboratoryEu or DiagnosticReport)
// * entry ^comment = "The DiagnosticReport referred in the entry SHALL NOT be that representing the whole Laboratory Report"
* entry 1..
* section ..0

RuleSet: SectionCommonRules
* section.title 1..
* section.code 1..
* section.code only $CodeableConcept-uv-ips

RuleSet: SNOMEDCopyrightForVS
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^experimental = false

RuleSet: LOINCCopyrightForVS
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false

RuleSet: NPUCopyrightForVS
* ^copyright = "This material contains content from NPU Terminology (http://npu-terminology.org). NPU is copyright International Federation of Clinical Chemistry (IFCC) and International Union of Pure and Applied Chemistry (IUPAC) and is available at no cost under the license at blob:https://www.labterm.dk/0472bc56-3aa1-484d-a377-92a3db82b559."
* ^experimental = false

/* RuleSet: JCTLMCopyrightForVS
* ^copyright = "This material contains content from JCTLM Database (https://www.jctlmdb.org). The JCTLM Database is copyright Joint Committee for Traceability in Laboratory Medicine (JCTLM)."
* ^experimental = false */

RuleSet: NIBSCCopyrightForVS
* ^copyright = "This material contains content from the NIBSC Product list (https://nibsc.org/NIBSC%20Product%20List%20-%20Feb%2024.pdf). The National Institute for Biological Standards and Control part of the UK Medicines and Healthcare products Regulatory Agency (MHRA)."
* ^experimental = true

RuleSet: ObligationActorAndCode(actor, code)
* ^extension[$obligation][+].extension[code].valueCode = {code}
* ^extension[$obligation][=].extension[actor].valueCanonical = {actor}

RuleSet: ObligationElement(element)
// Used for profile level obligations. Insert after obligation code and actor
* ^extension[$obligation][=].extension[elementId].valueString = {element}


---

// File: input/images/application.yaml



spring:
  main:
    allow-circular-references: true
    allow-bean-definition-overriding: true
  flyway:
    enabled: false
    check-location: false
    baselineOnMigrate: true
  datasource:
    url: 'jdbc:h2:file:./target/database/h2'
    username: sa
    password: null
    driverClassName: org.h2.Driver
    max-active: 15

    # database connection pool size
    hikari:
      maximum-pool-size: 10
  jpa:
    properties:
      hibernate.format_sql: false
      hibernate.show_sql: false
      #Hibernate dialect is automatically detected except Postgres and H2.
      #If using H2, then supply the value of ca.uhn.fhir.jpa.model.dialect.HapiFhirH2Dialect
      #If using postgres, then supply the value of ca.uhn.fhir.jpa.model.dialect.HapiFhirPostgres94Dialect

      hibernate.dialect: ca.uhn.fhir.jpa.model.dialect.HapiFhirH2Dialect
  #      hibernate.hbm2ddl.auto: update
  #      hibernate.jdbc.batch_size: 20
  #      hibernate.cache.use_query_cache: false
  #      hibernate.cache.use_second_level_cache: false
  #      hibernate.cache.use_structured_entries: false
  #      hibernate.cache.use_minimal_puts: false
  ###    These settings will enable fulltext search with lucene
      hibernate.search.enabled: true
      hibernate.search.backend.type: lucene
      hibernate.search.backend.analysis.configurer: ca.uhn.fhir.jpa.search.HapiHSearchAnalysisConfigurers$HapiLuceneAnalysisConfigurer
      hibernate.search.backend.directory.type: local-filesystem
      hibernate.search.backend.directory.root: target/lucenefiles
      hibernate.search.backend.lucene_version: lucene_current
  batch:
    job:
      enabled: false


server:
  servlet:
    context-path: /

management:
  endpoints:
    web:
      exposure:
        include: "*"
  endpoint:
    health:
      probes:
        enabled: true


hapi:
  fhir:
    ### This enables the swagger-ui at /fhir/swagger-ui/index.html as well as the /fhir/api-docs (see https://hapifhir.io/hapi-fhir/docs/server_plain/openapi.html)
    openapi_enabled: true
    staticLocation: file:/apps/
    ### This is the FHIR version. Choose between, DSTU2, DSTU3, R4 or R5
    fhir_version: R5
    ### enable to use the ApacheProxyAddressStrategy which uses X-Forwarded-* headers
    ### to determine the FHIR server address
    #   use_apache_address_strategy: false
    ### forces the use of the https:// protocol for the returned server address.
    ### alternatively, it may be set using the X-Forwarded-Proto header.
    #   use_apache_address_strategy_https: false
    ### enable to set the Server URL
    #    server_address: http://hapi.fhir.org/baseR4
    #    defer_indexing_for_codesystems_of_size: 101


    install_transitive_ig_dependencies: false
#    implementationguides:
#      r5demo:
#        url: https://hl7-eu.github.io/unicom-ig/branches/r5-r4b/package.tgz
#        name: hl7.eu.fhir.unicom
#        version: 0.1.0
    ###    example from registry (packages.fhir.org)
    #      swiss:
    #        name: swiss.mednet.fhir
    #        version: 0.8.0
    #      example not from registry
    #      ips_1_0_0:
    #        url: https://build.fhir.org/ig/HL7/fhir-ips/package.tgz
    #        name: hl7.fhir.uv.ips
    #        version: 1.0.0
    #    supported_resource_types:
    #      - Patient
    #      - Observation
    ##################################################
    # Allowed Bundle Types for persistence (defaults are: COLLECTION,DOCUMENT,MESSAGE)
    ##################################################
    #    allowed_bundle_types: COLLECTION,DOCUMENT,MESSAGE,TRANSACTION,TRANSACTIONRESPONSE,BATCH,BATCHRESPONSE,HISTORY,SEARCHSET
    #    allow_cascading_deletes: true
    #    allow_contains_searches: true
    #    allow_external_references: true
    allow_multiple_delete: true
    #    allow_override_default_search_params: true
    #    auto_create_placeholder_reference_targets: false
    cql_enabled: true
    #    default_encoding: JSON
    #    default_pretty_print: true
    #    default_page_size: 20
    #    delete_expunge_enabled: true
    #    enable_repository_validating_interceptor: true
    #    enable_index_missing_fields: false
    #    enable_index_of_type: true
    #    enable_index_contained_resource: false
    ###  !!Extended Lucene/Elasticsearch Indexing is still a experimental feature, expect some features (e.g. _total=accurate) to not work as expected!!
    ###  more information here: https://hapifhir.io/hapi-fhir/docs/server_jpa/elastic.html
    advanced_lucene_indexing: false
    bulk_export_enabled: false
    bulk_import_enabled: false
    #    enforce_referential_integrity_on_delete: false
    # This is an experimental feature, and does not fully support _total and other FHIR features.
    #    enforce_referential_integrity_on_delete: false
    #    enforce_referential_integrity_on_write: false
    #    etag_support_enabled: true
    #    expunge_enabled: true
    #    client_id_strategy: ALPHANUMERIC
    #    fhirpath_interceptor_enabled: false
    #    filter_search_enabled: true
    #    graphql_enabled: true
    #    narrative_enabled: true
    #    mdm_enabled: true
    #    local_base_urls:
    #      - https://hapi.fhir.org/baseR4
    mdm_enabled: false
    #    partitioning:
    #      allow_references_across_partitions: false
    #      partitioning_include_in_search_hashes: false
    cors:
      allow_Credentials: true
      # These are allowed_origin patterns, see: https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/cors/CorsConfiguration.html#setAllowedOriginPatterns-java.util.List-
      allowed_origin:
        - '*'

    # Search coordinator thread pool sizes
    search-coord-core-pool-size: 20
    search-coord-max-pool-size: 100
    search-coord-queue-capacity: 200

    # Threadpool size for BATCH'ed GETs in a bundle.
    #    bundle_batch_pool_size: 10
    #    bundle_batch_pool_max_size: 50

    #    logger:
    #      error_format: 'ERROR - ${requestVerb} ${requestUrl}'
    #      format: >-
    #        Path[${servletPath}] Source[${requestHeader.x-forwarded-for}]
    #        Operation[${operationType} ${operationName} ${idOrResourceName}]
    #        UA[${requestHeader.user-agent}] Params[${requestParameters}]
        #        ResponseEncoding[${responseEncodingNoDefault}]
    #      log_exceptions: true
    #      name: fhirtest.access
    #    max_binary_size: 104857600
    #    max_page_size: 200
    #    retain_cached_searches_mins: 60
    #    reuse_cached_search_results_millis: 60000
    tester:
      home:
        name: Local Tester
        server_address: 'http://localhost:8080/fhir'
        refuse_to_fetch_third_party_urls: false
        fhir_version: R4B
      global:
        name: Global Tester
        server_address: "http://hapi.fhir.org/baseR4"
        refuse_to_fetch_third_party_urls: false
        fhir_version: R4B
    #    validation:
    #      requests_enabled: true
    #      responses_enabled: true
    #    binary_storage_enabled: true
    inline_resource_storage_below_size: 4000
#    bulk_export_enabled: true
#    subscription:
#      resthook_enabled: true
#      websocket_enabled: false
#      email:
#        from: some@test.com
#        host: google.com
#        port:
#        username:
#        password:
#        auth:
#        startTlsEnable:
#        startTlsRequired:
#        quitWait:
#    lastn_enabled: true
#    store_resource_in_lucene_index_enabled: true
###  This is configuration for normalized quantity serach level default is 0
###   0: NORMALIZED_QUANTITY_SEARCH_NOT_SUPPORTED - default
###   1: NORMALIZED_QUANTITY_STORAGE_SUPPORTED
###   2: NORMALIZED_QUANTITY_SEARCH_SUPPORTED
#    normalized_quantity_search_level: 2
#elasticsearch:
#  debug:
#    pretty_print_json_log: false
#    refresh_after_write: false
#  enabled: false
#  password: SomePassword
#  required_index_status: YELLOW
#  rest_url: 'localhost:9200'
#  protocol: 'http'
#  schema_management_strategy: CREATE
#  username: SomeUsername

---

// File: input/images/docker-compose.yaml

version: "3.9"

services:
  fhir-server:
    image: costateixeira/hapi-fhir-jpaserver-starter:latest
    restart: always
    container_name: hapiR4B
    ports:
      - ${server_port:-8080}:8080
    environment:
      - spring.config.location=${ig_url}/application.yaml
      - hapi.fhir.fhir_version=${FHIRversion}
      - hapi.fhir.implementationguides.${ig_code}.url=${ig_url}/package.tgz
      - hapi.fhir.implementationguides.${ig_code}.name=${ig_package_name}
      - hapi.fhir.implementationguides.${ig_code}.ig_version=${ig_version}
    volumes:
      - /mnt/c/work/ProdViewer/serverhome:/apps

  ember:
    image: jkiddo/ember:latest
    environment:
      - location=${ig_url}/package.tgz
      - serverBase=http://fhir-server:8080/fhir  # Leave this as is, this is ember stuff


---

// File: input/fsh/examples/Examples.fsh

Instance: comp-example
InstanceOf: Composition
Title: "Composition: example with InformationRecipient and CompositionBasedOnOrderOrRequisition extensions"
Description: """Composition: example with InformationRecipient and CompositionBasedOnOrderOrRequisition extensions."""
Usage: #example
* extension[CompositionBasedOnOrderOrRequisition].valueIdentifier
  * system = "urn:oid:1.999.999.999"
  * value = "document-order-1"
* extension[InformationRecipient].valueReference
  * display = "MUDr. Aleš Procházka"
* identifier
  * system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:3f69e0a5-2177-4540-baab-7a5d0877428f"
* status = #final
* type = $loinc#11502-2 "Laboratory report"
* subject.display = "Nice Patient"
* date = "2022-10-25T14:30:00+01:00"
* author[+].display = "MUDr. Aleš Procházka"
* title = "Laboratory Report Test"
* confidentiality = #N
* attester[+].mode = #legal
* attester[=].time = "2020-12-27T14:30:00+01:00"
* attester[=].party.display = "Best Laboratory"
* custodian.display = "Best Laboratory"


---

