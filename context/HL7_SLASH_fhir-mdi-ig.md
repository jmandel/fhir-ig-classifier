File: repos/HL7_SLASH_fhir-mdi-ig/sushi-config.yaml

# ╭─────────────────────────Commonly Used ImplementationGuide Properties───────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. The most commonly   │
# │  used properties are included. For a list of all supported properties and their functions,     │
# │  see: https://fshschool.org/docs/sushi/configuration/.                                         │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
canonical: http://hl7.org/fhir/us/mdi
title: "Medicolegal Death Investigation (MDI) FHIR Implementation Guide"
releaseLabel: STU2 ballot # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
fhirVersion: 4.0.1
applyExtensionMetadataToRoot: false
id: hl7.fhir.us.mdi
name: MDI
status: active # draft | active | retired | unknown
version: 2.0.0-ballot2
copyrightYear: 2023+
license: CC0-1.0  # https://www.hl7.org/fhir/valueset-spdx-license.html
jurisdiction: urn:iso:std:iso:3166#US "United States of America" # https://www.hl7.org/fhir/valueset-jurisdiction.html
publisher:
  name: HL7 International / Public Health
  url: http://www.hl7.org/Special/committees/pher
  # email: test@example.org
# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for id, uri, and version.
dependencies:
  hl7.fhir.us.core: 
    version: 5.0.1
    id: hl7fhiruscore
  us.cdc.phinvads:
    version: 0.12.0
    uri: http://fhir.org/packages/us.cdc.phinvads/ImplementationGuide/us.cdc.phinvads
    id: uscdcphinvads
  hl7.fhir.us.vr-common-library: 
    version: 2.0.0 
    id: hl7fhirusvrcommonlibrary
  hl7.fhir.us.vrdr: 
    version: 3.0.0 
    id: hl7fhirusvrdr
  hl7.fhir.us.odh:
    version: 1.3.0
    id: odh

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
  mdi_background.md:
    title: MDI Background
  mdi_use_cases.md:
    title: MDI Use Cases
  mdi_best_practices.md:
    title: MDI Best Practices
  mdi_security_recommendations.md:
    title: MDI Security Recommendations
  mdi_specification.md:
    title: MDI Specification
  mdi_downloads.md:
    title: MDI Downloads
  mdi_change_log.md:
    title: MDI Changes
  mdi-content-transitions.md:
    title: MDI Content Transitions 
#
#
# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array.
# For parameters defined by core FHIR see:
# http://build.fhir.org/codesystem-guide-parameter-code.html
# For parameters defined by the FHIR Tools IG see:
# http://build.fhir.org/ig/FHIR/fhir-tools-ig/branches/master/CodeSystem-ig-parameters.html
#
parameters:
  show-inherited-invariants: false
  path-expansion-params: '../../exp-params.json'  #path is relative to [base]/fsh-generated/resources
  path-liquid: liquid
  version-comparison: 1.1.0
  auto-oid-root: 2.16.840.1.113883.4.642.40.11
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
  Contents: toc.html
  Background: mdi_background.html
  Use Cases: mdi_use_cases.html
  Best Practices: mdi_best_practices.html
  Security Recommendations: mdi_security_recommendations.html
  Specification: mdi_specification.html
  Downloads: mdi_downloads.html
  Changes: mdi_change_log.html
  Content Transitions: mdi-content-transitions.html
  Artifacts: artifacts.html

  #
  #  All FHIR Artifacts: artifacts.html
  #  Capability Statement EDRS: CapabilityStatement-CapabilityStatement-edrs-server.html
  #  Capability Statement Toxicology: CapabilityStatement-CapabilityStatement-forensic-toxicology-laboratory-server.html
  #  Capability Statement ME/C: CapabilityStatement-CapabilityStatement-mdi-cms-server.html
    



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
#   - name: Bob Smith
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
#
# resources:
#   Patient/my-example-patient:
#     name: My Example Patient
#     description: An example Patient
#     exampleBoolean: true
#   Patient/bad-example: omit
#
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

groups:
  MDICapabilityStatements:
    name: Capability Statements
    description: Minimal server capabilities expected for MDI data exchange partners.
    resources:
      - CapabilityStatement-edrs-server
      - CapabilityStatement-forensic-toxicology-laboratory-server
      - CapabilityStatement-mdi-cms-server
  MDIProfiles1:
    name: MDI Profiles for Death Certificate
    description: Profiles defined for exchanging death investigation data between and MDI CMS and EDRS for death certificate development.
    resources:  
      - BundleDocumentMDIAndEDRS 
      - CompositionMDIAndEDRS
      - MDICauseOfDeathPart1
  MDIProfiles2:
    name: Forensic Toxicology Profiles
    description: Profiles defined for exchanging forensic toxicology data.
    resources:  
      - BundleMessageToxToMDI
      - MessageHeaderToxicologyToMDI
      - DiagnosticReportToxicologyToMDI 
      - SpecimenToxicologyLab
      - ObservationToxicologyLabResult
  MDIProfiles3:
    name: MDI Administrative Profiles
    description: Profile defined for exchange of death investigation documents.
    resources:  
      - DocumentReferenceMDIReport
  MDIProfiles4:
    name: Death Certificate Review Profiles
    description: Profiles defined for death certificate review use cases.
    resources: 
      - BundleMessageDCR
      - MessageHeaderDCR
      - BundleDocumentMDIDCR
      - CompositionMDIDCR
      - ObservationCommunicableDisease
      - ObservationEmbalmed
      - ObservationMedicalInformationDataQuality
      - ObservationPersonalInformationDataQuality
      - OrganizationCrematorium
  MDIExtensions:
    name: Extensions
    description: Extensions defined by this IG.
    resources:
      - ExtensionCremationClearanceCoroner
      - ExtensionCremationClearanceSignature
      - ExtensionCremationClearanceStatus
      - ExtensionDeathCertificateStatus
      - ExtensionMECertificationAffirmation
      - ExtensionTrackingNumber
  MDICodeSystems:
    name: CodeSystems
    description: Code systems defined by this IG. Example code systems contain examples of codes typically defined by each implementation or jurisdiction.
    resources:
      - DeathCertReviewExample
      - MDIcodes
  MDIValuesets:
    name: Value Set
    description: Value sets defined by this IG. Example value sets contain examples of codes typically defined by each implementation or jurisdiction.
    resources:
      - VSTrackingNumberType
      - VSCCObservationsEx
      - VSCCSignedEx
      - VSCCStatusEx
      - VSCertifiedWorkflowEx
      - VSDCRObservationsEx
      - VSDCRreasonEx
      - VSEmablmedEx
      - VSMECertAffirmationEx
      - VSMedDQReviewEx
      - VSPerDQReviewEx
      - VSRegistrationEx
  MDIExamples1:
    name: MDI-defined Resource Examples for Death Certificate
    description: Examples of MDI-defined resources for death certificate development.
    resources:
      - bundle-mdi-and-edrs-a-freeman
      - composition-mdi-and-edrs-a-freeman
      - composition-mdi-and-edrs-draft
      - observation-mdi-cause-of-death-part1-a-freeman
      - observation-mdi-cause-of-death-part1-freeman-quantity-interval
  MDIExamples2:
    name: MDI-defined Resource Examples for Forensic Toxicology
    description: Examples of MDI-defined resources for forensic toxicology data exchange.
    resources:
      - bundle-mdi-tox-report-message-a-freeman
      - messageheader-mdi-tox-result-report-a-freeman
      - MessageDefinition-toxicology-system
      - diagnosticreport-mdi-toxicology-lab-a-freeman
      - specimen-bile-toxicology-a-freeman
      - specimen-blood-toxicology-a-freeman
      - specimen-liver-toxicology-a-freeman
      - specimen-stomach-contents-toxicology-a-freeman
      - specimen-urine-toxicology-a-freeman
      - specimen-vitreous-humor-toxicology-a-freeman
      - us-core-lab-result-4-anpp-blood-a-freeman
      - us-core-lab-result-4-anpp-urine-a-freeman
      - us-core-lab-result-acetylfentanyl-blood-a-freeman
      - us-core-lab-result-acetylfentanyl-urine-a-freeman
      - us-core-lab-result-etoh-gas-chromatography-blood-a-freeman
      - us-core-lab-result-etoh-gas-chromatography-urine-a-freeman
      - us-core-lab-result-etoh-gas-chromatography-vit-humor-a-freeman
      - us-core-lab-result-fentanyl-blood-a-freeman
      - us-core-lab-result-fentanyl-urine-a-freeman
      - us-core-lab-result-norfentanyl-urine-a-freeman
      - us-core-lab-result-xylazine-urine-a-freeman
  MDIExamples3:
    name: MDI-defined Resource Examples for Administrative Profiles
    description: Examples of MDI-defined resources for exchange of death investigation documents.
    resources:  
      - documentreference-mdi-autopsy-report-ex
      - documentreference-mdi-investigator-narrative-ex
  MDIExamples4:
    name: MDI-defined Resource Examples for Death Certificate Review
    description: Examples of MDI-defined resources for death certificate review use cases.
    resources:
      - bundle-msg-mdi-dcr-ex1
      - messageheader-mdi-dcr-ex1
      - bundle-doc-mdi-dcr-ex1
      - composition-mdi-dcr-ex1
      - composition-mdi-dcr-ex2
      - composition-mdi-ccr-ex3
      - composition-mdi-ccr-ex4
      - observation-communicable-disease-ccr-ex1
      - observation-embalmed-ccr-ex1
      - observation-medical-information-data-quality-ccr-ex1
      - observation-personal-information-data-quality-ccr-ex1
      - organization-crematorium-ex1
  OtherExamples:
    name: Other Examples
    description: Examples of resources defined elsewhere and included in (used by) MDI examples. These are examples of profiles defined in [Vital Records Death Reporting (VRDR)](https://hl7.org/fhir/us/vrdr/), [Vital Records Common Library (VRCL)](https://hl7.org/fhir/us/vr-common-library/), and [US Core STU5.01](https://hl7.org/fhir/us/core/STU5.0.1/), and the base [FHIR R4](http://hl7.org/fhir/R4/index.html) specification.
    resources: 
      - us-core-organization-dcr-ex1
      - us-core-organization-ga-dph
      - us-core-organization-tox-lab
      - us-core-patient-a-freeman
      - us-core-patient-unknown-name
      - us-core-practitioner-b-goldberger
      - us-core-practitioner-dcr-ex1
      - us-core-practitioner-jm-lehz
      - vrdr-autopsy-performed-indicator-a-freeman
      - vrdr-autopsy-performed-indicator-dcr-ex1
      - vrdr-cause-of-death-part1-dcr-ex1
      - vrdr-cause-of-death-part2-a-freeman
      - vrdr-cause-of-death-part2-dcr-ex1
      - vrdr-certifier-dcr-ex1
      - vrdr-death-certificate-dcr-ex1
      - vrdr-death-certification-a-freeman
      - vrdr-death-certification-dcr-ex1
      - vrdr-death-date-a-freeman
      - vrdr-death-date-dcr-ex1
      - vrdr-death-location-atlanta-ga-a-freeman
      - vrdr-death-location-dcr-ex1
      - vrdr-death-location-lat-long
      - vrdr-death-location-string
      - vrdr-decedent-age-dcr-ex1
      - vrdr-decedent-dcr-ex1
      - vrdr-decedent-disposition-method-a-freeman
      - vrdr-decedent-disposition-method-dcr-ex1
      - vrdr-decedent-education-level-dcr-ex1
      - vrdr-decedent-father-dcr-ex1
      - vrdr-decedent-military-service-dcr-ex1
      - vrdr-decedent-mother-dcr-ex1
      - vrdr-decedent-pregnancy-status-a-freeman
      - vrdr-decedent-pregnancy-status-dcr-ex1
      - vrdr-decedent-usual-work-dcr-ex1
      - vrdr-disposition-location-dcr-ex1
      - vrdr-examiner-contacted-dcr-ex1
      - vrdr-funeral-home-dcr-ex1
      - vrdr-injury-incident-a-freeman-med-ingest
      - vrdr-injury-incident-dcr-ex1
      - vrdr-injury-location-atlanta-ga-a-freeman
      - vrdr-injury-location-dcr-ex1
      - vrdr-manner-of-death-a-freeman-accidental
      - vrdr-manner-of-death-dcr-ex1
      - vrdr-mortician-dcr-ex1
      - vrdr-tobacco-use-a-freeman
      - vrdr-tobacco-use-dcr-ex1
      - vr-practitioner-ex1
      - vr-practitioner-s-jones

  MDIParameters:
    name: Parameters
    description: Parameters defined for this IG.
    resources:
      - expansion-parameters-mdi
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
# * packageId
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
#
instanceOptions:
  # When set to true, slices must be referred to by name and not only by a numeric index in order to be used
  # in an Instance's assignment rule. All slices appear in the order in which they are specified in FSH rules.
  # While SUSHI defaults to false for legacy reasons, manualSliceOrding is recommended for  projects.
  manualSliceOrdering: true # true | false
  # Determines for which types of Instances SUSHI will automatically set meta.profile
  # if InstanceOf references a profile:
  #
  # setMetaProfile: always # always | never | inline-only | standalone-only
  #
  #
  # Determines for which types of Instances SUSHI will automatically set id
  # if InstanceOf references a profile:
  #
  # setId: always # always | standalone-only
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pher

---

// File: input/pagecontent/index.md

<div class="note-to-balloters" markdown="1">
**For Implementers:**
* Implementers wishing to test the MDI IG STU 1.1 content with the harmonization of MDI and VRDR should refer to the 2.0.0-snapshot1 - Pre-publication Snapshot at [https://hl7.org/fhir/us/mdi/2.0.0-snapshot1/](https://hl7.org/fhir/us/mdi/2.0.0-snapshot1/)

**For Jan-2025 Ballot Reviewers:**

This STU2 build of MDI reflects two sets of changes from STU 1.1:
* Refactoring of content driven by the harmonization of vital records FHIR implementation guides, as described in the [Vital Records Common Library (VRCL) Jan-2024 ballot](https://hl7.org/fhir/us/vr-common-library/2024Jan/vr_ig_harmonization.html). For this MDI FHIR IG, this involved introduction of a dependency on the [Vital Records Death Reporting STU3 FHIR IG](https://hl7.org/fhir/us/vrdr/) and on [VRCL STU2](https://hl7.org/fhir/us/vr-common-library/). This harmonization was balloted in May 2024.  (1st STU2 ballot)
* New content supporting additional workflows, to be balloted January 2025. (2nd STU2 ballot)

See the [change log](mdi_change_log.html) for an updated list of changes.
  
</div><!-- note-to-balloters -->

### Description
This US-specific implementation guide (IG) provides guidance on the exchange of information to and from medicolegal death investigation (MDI) information systems. It supports interoperability between the MDI case management systems (CMS) used by medical examiner and coroner offices; forensic toxicology and other laboratory information management systems (LIMS); electronic death registration systems (EDRS) of jurisdictional vital records offices (VROs); and ancillary workflows whose systems have the capability of using Fast Healthcare Interoperability Resources (FHIR). This guide provides MDI CMS developers with the technical details and best practices to standardize MDI fields and interfaces. Stakeholders may use the narrative portions of this guide to inform policies and practices for data exchange between systems contributing to, and using information from, death investigations. This guide can serve as a base for local specifications.

### Relation to Other Standards
This MDI IG is based upon FHIR R4.0.1 and is a U.S. Realm Specification. It re-uses or further constrains FHIR resources published in the following FHIR IGs:
* [Vital Records Death Reporting (VRDR) FHIR IG – STU 3](https://hl7.org/fhir/us/vrdr/) (2024-10-16), which supports reporting deaths by state registrars to the National Center for Health Statistics (NCHS) 
* [Vital Records Common Library (VRCL) FHIR IG – STU 2](https://hl7.org/fhir/us/vr-common-library/) (2024-10-11)
* [US Core Implementation Guide – STU 5.0.1](https://hl7.org/fhir/us/core/STU5.0.1/) (2022-01-13), which aligns with  U.S. Core Data for Interoperability (USCDI) v2, July 2021
* [Occupational Data for Health (ODH) FHIR IG -  STU 1.3](https://hl7.org/fhir/us/odh/) (2022-10-06)

### Overview
This guide includes the following sections, listed at the top of each page in the menu bar:
* [Home](index.html): Summary description and overview
* [Background](mdi_background.html): Information on MDI dataflows and actors, the current work, and likely future MDI FHIR specification development
* [Use Cases](mdi_use_cases.html): Descriptions of MDI data exchange scenarios supported by this IG
* [Best Practices](mdi_best_practices.html): Guidance on implementation and use of this specification
* [Security Recommendations](mdi_security_recommendations.html): Description of a minimum level of security when implementing the MDI IG
* [Specification](mdi_specification.html): Technical details on implementing the specification
* [Downloads](mdi_downloads.html): Links for downloading the full IG package as well as format-specific definitions files and example files in XML, JSON, and TTL
* [Changes](mdi_change_log.html): List of changes made in each published update
* [Content Transformation](mdi-content-transitions.html): Tables of changes to resource locations during harmonization between the MDI, VRDR, and VRCL FHIR IGs.]
* [Artifacts](artifacts.html): List of all FHIR artifacts specified by this guide, with brief descriptions

### Audience
The audience for this IG includes architects and developers of MDI CMS and associated information management systems, such as forensic toxicology LIMS, as well as medical examiners, coroners, death investigators, and other professionals who collect and analyze data for death investigations. Business analysts and policy managers can also benefit from a basic understanding of the use of MDI data exchange to support interoperability.

### Authors

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 International - Public Health</td>
<td><a href="http://www.hl7.org/Special/committees/pher" target="_new">http://www.hl7.org/Special/committees/pher</a></td>
</tr>
<tr>
<td>Cynthia Bush, Health Scientist (Informatics), CDC/National Center for Health Statistics</td>
<td><a href="mailto:pdz1@cdc.gov">pdz1@cdc.gov</a></td>
</tr>
<tr>
<td>Margaret Warner, Senior Epidemiologist, CDC/National Center for Health Statistics</td>
<td><a href="mailto:mmw9@cdc.gov">mmw9@cdc.gov</a></td>
</tr>
<tr>
<td>Diana Wright, Lantana Consulting Group</td>
<td><a href="mailto:diana.wright@lantanagroup.com">diana.wright@lantanagroup.com</a></td>
</tr>
<tr>
<td>Saul A. Kravitz, MITRE Corporation</td>
<td><a href="mailto:saul@mitre.org">saul@mitre.org</a></td>
</tr>
</tbody>
</table>

See also the Background page, [IG Development Team](mdi_background.html#ig-development-team)

---

// File: input/pagecontent/mdi_background.md

### Background for MDI Interoperability Work
In the investigation and certification of deaths, medical examiners, coroners, and other MDI professionals are in a unique position to provide specific and up-to-date mortality information to public health and public safety partners. However, despite the importance of this information to health and safety, the method of exchanging information between MDI organizations and stakeholders is disparate and includes paper-based and fax-based information exchange. Both public health and public safety communities are working to improve dataflows in a coordinated, consistent, and secure way across jurisdictional boundaries. The Centers for Disease Control and Prevention’s (CDC) National Center for Health Statistics (NCHS) funded a series of pilot projects to explore the challenges and to test methods for medical examiner and coroner offices to send information to public health systems such as electronic death registration systems (EDRS) and for partners such as forensic toxicology laboratories to send information to medical examiner and coroner offices. The work involved identifying common data elements, creating data standards for those elements, and promoting interoperability between data systems.

In 2015, changes to the Office of the National Coordinator for Health Information Technology (ONC) criteria in the health information technology (IT) certification process led electronic health record (EHR) system vendors to implement FHIR standards and incorporate FHIR application programming interfaces (APIs) into their products for hospitals and other healthcare providers. In 2019, NCHS developed and implemented the FHIR standard for death reporting. The Vital Records Death Reporting (VRDR) FHIR IG was published in October 2020. That guide focused on the dataflow between vital record jurisdictions EDRS and NCHS.

Recognizing that many deaths of significant public health importance are investigated by medical examiner and coroner offices, NCHS is supporting the development of additional standards and to tools for interoperability within the MDI community and its data exchange partners. The CDC continues to support interoperability and data exchange modernization among medical examiner and coroner offices through the Collaborating Office for Medical Examiners and Coroners (COMEC). MDI community members interested in this work are encouraged to contact the [COMEC](https://www.cdc.gov/comec/) at: MDI@cdc.gov.

This MDI FHIR specification is part of that effort to define elements and dataflows to standardize disparate systems within the MDI community.

### Medicolegal Death Investigation Dataflows
Medical examiner and coroner offices access and exchange information with multiple agencies and organizations when building a death investigation case record (e.g., law enforcement, forensic laboratories, EHR systems, jurisdictional EDRS). Case records are created in the MDI case management system (CMS) and may contain entries from both internal sources (e.g., scene investigation) and external sources (e.g., laboratory analysis results).

***Figure: Dataflows in the Death Investigation and Reporting System***
<table><tr><td><img src="MDI-data-flow-STU2.png" /></td></tr></table>

According to the U.S. Department of Justice, Office of Justice Programs, Bureau of Justice Statistics report, [*Medical Examiner and Coroner Offices, 2018*](https://bjs.ojp.gov/content/pub/pdf/meco18.pdf), in 2018 2,040 medical examiner and coroner offices accepted 605,000 referrals for investigation to determine the cause and manner of death across federal, state, and local jurisdictions. The information gathered during a death investigation is useful to a variety of local, state, and federal agencies, and many entities rely on MDI-generated data. For example, the CDC monitors trends in unintentional injury, homicides, suicides, and sudden or unexpected infant deaths and develops policy recommendations and prevention strategies for such deaths. The National Highway Traffic Safety Administration (NHTSA) monitors trends in traffic-related fatalities and the U.S. Consumer Product Safety Commission (CPSC) uses mortality data to identify problematic products for investigation and potential recall.

MDI CMS vary by organization and location or jurisdiction, and these systems are often not interoperable with other producers or consumers of MDI-related data, which creates obstacles to timely investigations and forensic science research.

### Current Project
The scope of the current MDI IG is defining FHIR resources and guidance for the following dataflows:
* Creation, search, and update of a case record between an MDI CMS and an EDRS via a document bundle for development of a death certificate
* Transmission of diagnostic findings from a forensic toxicology laboratory to an MDI system via a diagnostic report and message bundle
* Transmission of PDF reports within the MDI community
* Transmission of a completed death certificate for review

For more details, see the [Use Cases](mdi_use_cases.html) page.

### Future Work
The MDI FHIR IG will continue to develop to support additional MDI needs beyond death reporting to EDRS for the death certificate. Future work likely will include:
* **Terminology**: Developing vocabularies and terminologies useful to the MDI domain with focus on those for forensic toxicology results
* **Resources for Additional Dataflows**: Developing FHIR profiles for transactions between MDI CMS and other information sources (EHR, autopsy facilities, etc.) and information recipients (organ and tissue procurement organizations, state health surveillance systems, etc.).

Georgia Tech Research Institute (GTRI) provides tools for exploring and testing MDI FHIR data.
* [**Raven Testing Platform**](https://apps.hdap.gatech.edu/raven/)—A proof of concept for the MDI FHIR IG. It provides a tool for testing conformance to the MDI FHIR IG, including resource validation, record comparison, and data exchange workflows.
* [**Raven Documentation**](https://ravendocs.readthedocs.io/en/latest//)—End-use and technical manuals

CDC Foundation provides administrative and project management support for medical examiner and coroner jurisdictions, data sharing partners, and software vendors participating in FHIR pilot projects. CDC Foundation also provides a forum for a community of support through [MDI Connect](https://www.cdcfoundation.org/MDI-Connect) to advance solutions for simplifying data sharing between MDI offices and their partners.

### IG Development Team
* **CDC, NCHS**: Jenny Couse, Kate Brett, Cynthia Bush, Chris Harrison, Mark Montgomery, Margaret Warner
* **CDC Foundation**: Dan Chaput, Michele Trofatter, Gina Wiser
* **GTRI**: Myung Choi, Tia Pope, Alexandra Ramirez, Michael Riley 
* **Lantana Consulting Group**: Dave deRoode, Sarah Gaunt, Diana Wright
* **MITRE Corporation**: Saul A. Kravitz

### Acknowledgements
This guide was developed and produced through the efforts of Health Level Seven (HL7) under Project Insight reference number [1737](https://www.hl7.org/special/Committees/projman/searchableProjectIndex.cfm?action=edit&ProjectNumber=1737).

The STU2 ballot version was refactored as part of the [harmonization of vital records FHIR Implementation Guides](https://hl7.org/fhir/us/vr-common-library/2024Jan/vr_ig_harmonization.html) by the MITRE corporation, under contract to NCHS.  As part of this effort, the IG artifacts were transitioned to FHIR shorthand.   The capability statement rendering is provided by the [CapStmt](https://github.com/caspears/CapStatement) liquid template developed by Corey Spears based on original code by Eric Haas.

The editors appreciate the support and sponsorship of the HL7 Public Health Work Group and all volunteers and staff associated with the creation of this resource. The editors appreciate the wisdom and insights provided by the MDI community, including forensic toxicology laboratories, medical examiners and coroners, and jurisdictional vital records departments.

**The MDI Community:**
* Alabama: Jefferson County Coroner / Medical Examiner Office
* Alaska: State Medical Examiner's Office; AK Health Analytics and Vital Records
* Connecticut: Office of the Chief Medical Examiner; CT Department of Public Health, State Vital Records
* Florida: Division Forensic Medicine, University of Florida
* Georgia: DeKalb County Medical Examiner's Office; GA Department of Public Health, State Office of Vital Records
* Illinois: Cook County Medical Examiner's Office
* Indiana: Marion County Coroner’s Office; Indiana Department of Health
* NMS Labs
* Michigan: Sparrow Foundation; MI Department of Health and Human Services; MI Health Information Network Shared Services (MiHIN); MiCelerity; Wayne County Medical Examiner’s Office; Wayne State University
* Minnesota: Midwest Medical Examiner's Office; MN IT Services (MNIT) 
* Mississippi: Mississippi Department of Public Safety: MS State Department of Health
* Nevada: Clark County Office of the Coroner/Medical Examiner
* New Hampshire: Office of the Chief Medical Examiner; Secretary of State, Division of Vital Records Administration
* Ohio: Butler County Coroner’s Office; Butler County General Health District
* Pennsylvania: York County Coroner’s Office
* South Carolina: Charleston County Coroner's Office; SC Law Enforcement Division; Greenville County Coroner’s Office, Washington/Baltimore High Intensity Drug Trafficking Area
* Washington: King County Medical Examiner's Office; WA State Department of Health Vital Records Office

**The IT Vendor Community:**
* Axiell (MS EDRS vendor)
* Cohero (PA MDI CMS vendor)
* CNSI (NH EDRS vendor)
* Genesis (GA EDRS vendor)
* LabLynx (IL MDI CMS vendor)
* MAPSYS (OH MDI CMS vendor)
* MDILog (GA, MI, NH, MS and SC MDI CMS vendor)
* NetSmart (AK EDRS vendor)
* Porter Lee Corporation, Crime Fighter BEAST (SC forensic lab vendor)
* QuincyTech (CT, and MI MDI system CMS vendor)
* VertiQ (AK, NV, WA and MN MDI CMS vendor)
* VitalChek (CT, IN, MI EDRS vendor)


### References
* National Institute of Standards and Technology (NIST), [“Medicolegal death investigation data commonly collected and exchanged,”](https://www.nist.gov/system/files/documents/2021/07/14/MDI%20data%20commonly%20collected%20and%20exchanged_REFERENCE_07092021_0.pdf) (7/9/2021)
* ANSI/ASB Standard 053, First Edition (2020), “Standard for Report Content in Forensic Toxicology”, [webpage](https://www.aafs.org/asb-standard/standard-report-content-forensic-toxicology) & [PDF](https://www.aafs.org/sites/default/files/media/documents/053_Std_e1.pdf)
* Ropero-Miller, Jeri, Nichole Bynum, Kelly Keyes, Erica Fornaro, and Micaela Ascolese. [Data Exchange Practices of Medicolegal Death Investigation.](https://forensiccoe.org/private/63da9032991eb) U.S. Department of Justice, National Institute of Justice, Office of Investigative and Forensic Sciences, December 2022.

---

// File: input/pagecontent/mdi_best_practices.md

This MDI FHIR IG is designed to be flexible to accommodate a variety of systems, recognizing that information management systems used for assembling MDI data vary widely by state, jurisdiction, and agency. This means that many data concepts have few requirements but many “must support” designations. This section provides best practice recommendations on how to address select concepts.

### Bi-Directional Exchange: MDI CMS & EDRS
The **Bundle - Document MDI and EDRS** profile represents a document exchanged between an MDI CMS and EDRS. It can be used for bi-directional exchange during the process of case record creation and updating. The Bundle contains a **Composition - MDI and EDRS**.
The **Composition - MDI and EDRS** profile represents data exchanged between an MDI CMS and an EDRS, which can be in “draft” (non-finalized) by:
* Setting status=preliminary
* Using [Extension: Data Absent Reason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) for author and attester, when the death certifier is not yet established

### Decedent
This MDI IG uses the US Core Patient for the decedent subject of:
* **Composition - MDI and EDRS** and the profiles referenced in its section entries
* **DiagnosticReport - Toxicology Lab Result to MDI** and the profiles referenced for its specimens and results

The US Core Patient provides structure for capturing basic demographic information (race, ethnicity, birth sex, gender identity, birth date, telecom, address, and marital status). The Composition - MDI and EDRS also provides a section, additional-demographics for text on demographic information about the decedent that is not represented in the decedent Patient profile.

The [US Core Patient](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html) profile requires 
* 1..* patient identifier, each identifier specifying a system and value
* 1..* patient name
* 1..1 gender code (AdministrativeGender). Note modeling gender and sex information is ongoing in HL7. Refer to [US Core Patient profile, “Mandatory and Must Support Data Elements.”](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html#mandatory-and-must-support-data-elements)

These three data elements may not be known during early stages of medicolegal data collection. US Core provide guidance on such cases of [missing data](http://hl7.org/fhir/us/core/general-requirements.html#missing-data).

In addition to the Patient.gender required data element described above, implementers have the option to describe the decedent’s sex at birth via the [US Core Birth Sex Extension](http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex), which provides codes for classifying the person’s sex assigned at birth.

The US Core Patient Profile contains the optional data element Patient.deceased. It  may be used to indicate if the individual is deceased or not. An implementer has a choice of using Boolean (true/false) values or dateTime. If dateTime is used, it should match the Observation - Death Date value[x].
<!--- TODO add this back when IGs are separated: [Participant & Supporting Examples](artifacts.html#participant-administrative-examples)--->
The [Participant & Supporting Examples](artifacts.html#6) section of the Artifacts Index page provides an example of a US Core Patient for which no information known about the decedent's name. 

### Identifiers and Tracking Numbers
This MDI IG provides opportunities for both identifiers and tracking numbers. 

* **Identifiers**: Identifiers are unique to each individual instance (use) of a FHIR resource being exchanged. They are assigned from the data source and often generated automatically by its system. 
* **Tracking numbers**: Tracking numbers identify a case or record over time and across many systems for interoperable communication. Tracking numbers in this MDI IG may be assigned by the originating organization, such as medical examiner and coroner offices or an EDRS and should persist throughout updates to the death investigation data. They are optional and multiple tracking numbers may be recorded. A system receiving a record with a tracking number may append its own tracking number and return/send the record with both tracking numbers. The extensible ValueSet - Tracking Number Type contains codes to identify the type of tracking number and may be augmented by local implementations of this specification.

### Certification
Agencies and jurisdictions have a range of requirements for certification of information during the process of collecting and exchanging MDI data. Typically, a forensic toxicology diagnostic report will be considered certified when the final version is sent. A document bundle sent from an MDI CMS to an EDRS can use the status data element to indicate preliminary or final and certified.

This MDI FHIR IG provides opportunities on most profiles for naming the responsible party. The legal nature of certification is a business requirement to be assigned by each agency or jurisdiction implementing this specification.

The Composition - MDI and EDRS author and attester are required and are the individual who will be listed as the certifier on the death certificate. 

**Unknown author/attester**: Use the [Extension: Data Absent Reason](http://hl7.org/fhir/StructureDefinition/data-absent-reason) for instances when the author and/or attester is not yet known, for example in initial drafts of the MDI Composition.

### Death Date
The Observation – Death Date profile represents the actual or presumed date of death. It should be used to record information about both the date and time of death and the certainty of those data. Note that the US Core Patient profile used for the decedent has an optional Patient.deceased[x] data modifier that may be used in addition to, but not instead of, the Observation – Death Date profile. If the Patient.deceased[x] is used, it must either be Boolean=true or the dateTime must match Observation  – Death Date.

The Observation – Death Date profile provides several opportunities to explain the date listed as Death Date:
* Observation.value[x]: Actual or presumed date of death
* Observation.component: Date and time pronounced dead

**Specific date or range of dates:** If the actual date of death is known (date, date-time, or partial date such as year or year + month), set value resource type to dateTime. If the date of death is not known, and a range is known, set value resource type to Period, defined by a start and end dateTime.

**Options for qualifying the accuracy of the date of death:**
* Use the Observation.status data element for modifiers contained in the value set [ObservationStatus](http://hl7.org/fhir/valueset-observation-status.html) (registered, preliminary, final, etc.). This value set contains eight concepts and is not extensible (cannot be added to by local implementations).
* Use the Observation.note data element to record additional information about the death date.
* Use the Observation.method data element for method codes from the extensible ValueSet - Date Establishment Approach (exact, approximate, court-appointed)

### Causes of Death
The Observation.value[x].text is limited for both Observation - Cause of Death Condition and Observation - Condition Contributing to Death because the receiving EDRS sends the data to NCHS (ultimate receiving system). That NCHS system restricts the text string length for these data elements. Because the originating MDI CMS certifies the content of the data elements, the data must not risk being truncated or lost by the receiving systems along the entire dataflow. Therefore, the originating system must abide by the character limit of the ultimate receiving system at the time of data capture, potentially including direct entry by the user if that is the mechanism of capturing the data.

### Forensic Toxicology Laboratory Specimens & Results
**One-to-many specimen to results relationship:** Each analyzed specimen, represented by a Specimen - Toxicology Lab resource, must be referenced by at least one Observation - Toxicology Lab Result and may be referenced by more than one Observation - Toxicology Lab Result. For example, a single blood specimen may be analyzed for several different analytes or by several different methods. Each of those specimen/analyte or specimen/method combinations will be represented by an Observation - Toxicology Lab Result.

**Specimens received but not analyzed:** Medical examiners and coroners may need to know if a forensic toxicology laboratory received a specimen but did not analyze it. In such cases, the laboratory should provide a reason for no analysis in the DiagnosticReport.conclusion and/or each unanalyzed specimen's Specimen - Toxicology Lab Specimen.note. Additionally, the Specimen - Toxicology Lab may use the Specimen.condition to describe the state of the specimen via codes from the extensible value set [hl7VS-specimenCondition](https://terminology.hl7.org/ValueSet-v2-0493.html) and/or use the Specimen.note to describe details or issues about the specimen.

**Reporting results:** The result of a specimen analysis is required to be reported as text and may also be represented by a code. This choice of text or code allows exchange of results  among systems that do not share code systems or do not use standardized code systems. The value of the result may be reported in several text formats:
* Word or phrase indicating presence or absences with no quantity (e.g., “Detected”, “Not detected”)
* Mathematical expression of quantity with units (e.g., “= 0.160 g/dL”)
* Mathematical expression of quantity range with units (e.g., “< 2.5 ng/mL”)

### API Specifications & Search Operations
This MDI FHIR IG is designed for RESTful API implementations supporting data exchange interactions between systems via FHIR extended operations. (See [RESTful API](https://hl7.org/FHIR/http.html) for an overview.) This MDI IG uses extended operations with MDI-specific search parameters and a subset of the many [RESTful API operations](https://hl7.org/FHIR/operationslist.html#1.5) defined by FHIR. All API implementations of this MDI FHIR IG must conform to common design rules:
* MIME-type for FHIR resources is application/fhir+xml or application/fhir+json. This must be specified for Content-Type in the HTTP header.
* application/x-www-form-urlencoded can be used for POST search requests if HTTP Form is used.

The CapabilityStatement resources defined in this MDI FHIR IG are of kind=requirements, so represent recommended capabilities of systems involved in MDI data exchange. They specify the bare minimum interactions and operations for a limited group of MDI resources.

* [CapabilityStatement - MDI CMS Server](CapabilityStatement-CapabilityStatement-mdi-cms-server.html)
* [CapabilityStatement - Electronic Death Reporting System (EDRS) Server](CapabilityStatement-CapabilityStatement-edrs-server.html)
* [CapabilityStatement - Forensic Toxicology Laboratory Server](CapabilityStatement-CapabilityStatement-forensic-toxicology-laboratory-server.html)


It is expected that any specific FHIR server implementing this MDI FHIR IG may allow or require more interactions and operations for a larger set of resources than those specified in the CapabilityStatement resources listed above. An example of a CapabilityStatement that defines the full capabilities of a specific FHIR server (kind=instance), is available for the Raven FHIR Server, maintained by Georgia Tech Research Institute (GTRI):
* [CapabilityStatement](https://raven.heat.icl.gtri.org/mdi-fhir-server/fhir/metadata) for Raven FHIR Server
* [Raven Testing Platform](https://apps.hdap.gatech.edu/raven/) — A proof of concept for the MDI FHIR IG. It provides a tool for testing conformance to the MDI FHIR IG, including resource validation, record comparison, and data exchange workflows. 
* [Raven Documentation](https://ravendocs.readthedocs.io/en/latest/) — End-use and technical manuals

An MDI-based Search API enables an MDI CMS to search an EDRS server for decedent cases, and vice versa. This is an idempotent operation (i.e., it has no additional effect if it is called more than once with the same input parameters). At a minimum, both POST and GET should be allowed with the following endpoint URL pattern:
* POST [base]/Composition/$document
* GET [base]/Composition/$document?name1=value&name2=value2

***Table: Summary of Minimum MDI Search Parameter Definitions***

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;
  overflow:hidden;padding:2px 2px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;
  font-weight:normal;overflow:hidden;padding:2px 2px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <td class="tg-0lax"><b>Search Parameter Name</b> </td>
    <td class="tg-0lax"><b>Cardinality</b> </td>
    <td class="tg-0lax"><b>Type</b> </td>
    <td class="tg-0lax"><b>Description</b> </td>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax"><b><i>In Parameters</i></b></td>
    <td class="tg-0lax">  </td>
    <td class="tg-0lax">  </td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-0lax">id </td>
    <td class="tg-0lax">0..1 </td>
    <td class="tg-0lax">uri </td>
    <td class="tg-0lax">Composition.id of Composition - MDI and EDRS</td>
  </tr>
	  <tr>
    <td class="tg-0lax">tracking-number </td>
    <td class="tg-0lax">0..* </td>
    <td class="tg-0lax">token </td>
    <td class="tg-0lax">Composition.extension:extension-tracking-number of Composition - MDI and EDRS</td>
  </tr>
	  <tr>
    <td class="tg-0lax">patient</td>
    <td class="tg-0lax">0..1 </td>
    <td class="tg-0lax"> </td>
    <td class="tg-0lax">One or more decedent-related search parameters </td>
  </tr>
  <tr>
    <td class="tg-0lax">  patient.birthdate </td>
    <td class="tg-0lax">0..* </td>
    <td class="tg-0lax">date </td>
    <td class="tg-0lax">Decedent’s date of birth </td>
  </tr>
  <tr>
    <td class="tg-0lax">  patient.family </td>
    <td class="tg-0lax">0..* </td>
    <td class="tg-0lax">string </td>
    <td class="tg-0lax">Decedent’s last name </td>
  </tr>
  <tr>
    <td class="tg-0lax">  patient.given </td>
    <td class="tg-0lax">0..* </td>
    <td class="tg-0lax">string </td>
    <td class="tg-0lax">Decedent’s first name </td>
  </tr>
  <tr>
    <td class="tg-0lax">  patient.gender </td>
    <td class="tg-0lax">0..* </td>
    <td class="tg-0lax">token </td>
    <td class="tg-0lax">Decedent’s gender </td>
  </tr>
  <tr>
    <td class="tg-0lax">death-location</td>
    <td class="tg-0lax">0..1 </td>
    <td class="tg-0lax">string </td>
    <td class="tg-0lax">Location.address in Location-death</td>
  </tr>
  <tr>
    <td class="tg-0lax">death-date</td>
    <td class="tg-0lax">0..1 </td>
    <td class="tg-0lax">date </td>
    <td class="tg-0lax">Value[x] (actual or presumed date of death) in Observation - Death Date (either dateTime or Period)</td>
  </tr>
	  <tr>
    <td class="tg-0lax">death-date-pronounced</td>
    <td class="tg-0lax">0..1 </td>
    <td class="tg-0lax">date </td>
    <td class="tg-0lax">Observation.component:datetimePronouncedDead in Observation - Death Date (either time or dateTime)</td>
  </tr>
    <tr>
    <td class="tg-0lax"><b><i>Out Parameters</i></b></td>
    <td class="tg-0lax">  </td>
    <td class="tg-0lax">  </td>
    <td class="tg-0lax"> </td>
  </tr>
  <tr>
    <td class="tg-0lax">return </td>
    <td class="tg-0lax">0..1 </td>
    <td class="tg-0lax">resource </td>
    <td class="tg-0lax">Bundle - Searchset or Bundle - Document MDI and EDRS. If [id] is supplied, then this should be Bundle - Document MDI and EDRS</td>
 </tr>
</tbody>
</table>

Search parameters related to Patient are formatted with “.”. In FHIR, this means that the search parameters after “.” are part of a patient parameter. See the example below.

Code example:

```
{ 
  "resourceType": "Parameters", 
  "parameter": [ 
    { 
      "name": "patient", 
      "part": [ 
        {  
          "name": "family", 
          "valueString": "Hans" 
        }, 
        {  
          "name": "given", 
          "valueString": "Kennoby" 
        } 
      ] 
    } 
  ] 
} 
```

If [id] is provided within URL path (e.g., /Composition/[id]/$document), then the output response should be an MDI document bundle as there will be only one or zero result.

---

// File: input/pagecontent/mdi_change_log.md

### STU2 Ballots
The 2nd STU2 ballot (Jan. 2025) made the following changes:
* **Added 9 new profiles** for Death Certificate review workflow plus supporting extensions and example codes:
  * Bundle - Message Death Certificate Review
  * MessageHeader - Death Certificate Review
  * Bundle - Document Death Certificate Review
  * Composition - Death Certificate Review 
  * Observation - Medical Information Data Quality 
  * Observation - Personal Information Data Quality 
  * Observation - Communicable Disease
  * Observation - Embalmed
  * Organization - Crematorium
* **Code systems**:
  * Renamed CodeSystem - MDI (CodeSystem-mdi-codes, CodeSystemMDI) to Medicolegal Death Investigation Codes (cs-mdi-codes, MDIcodes) per TSMG guidance
  * Added Death Certificate Review Example (cs-death-cert-review-example, DeathCertReviewExample)
* **Added Use Cases** narrative page and **removed Terminology** narrative page (no longer needed)

The 1st STU2 ballot (May 2024) of MDI incorporated refactoring, as described in the VRCL, Vital Records FHIR Implementation Guide Harmonization Plan page. Many of the MDI STU1.1 profiles, valuesets, codesystems, and extensions are now found elsewhere. For a detailed description of harmonization changes in the MDI IG, see the Content Transitions page.

### MDI STU 1.1 (September 2023)

#### Overall
* Updated and clarified data element descriptions to indicate roles of the “death certifier” [FHIR-41184](https://jira.hl7.org/browse/FHIR-41184)
* Clarified language, updating terms such as “MDI system” to “MDI case management system (MDI CMS)” for the electronic data systems [FHIR-36944](https://jira.hl7.org/browse/FHIR-36944), [FHIR-41685](https://jira.hl7.org/browse/FHIR-41685)

#### Profiles

**Capability Statements**:
* Changed name/title of "CapabilityStatement - Medical Examiner/Coroner Server" to "CapabilityStatement - MDI CMS Server" [FHIR-36944](https://jira.hl7.org/browse/FHIR-36944)
* Added `rest` definitions to CapabilityStatement - MDI CMS Server and to CapabilityStatement - Electronic Death Reporting System (EDRS) Server [FHIR-41518](https://jira.hl7.org/browse/FHIR-41518)
* Added `text` to CapabilityStatement - MDI CMS Server, CapabilityStatement - Electronic Death Reporting System (EDRS) Server, and CapabilityStatement - Forensic Toxicology Laboratory Server for more informative html rendering of each resource [FHIR-41515](https://jira.hl7.org/browse/FHIR-41515)

**Bundle - Document MDI to EDRS**:
* Changed profile name/title to “Bundle - Document MDI **and** EDRS” [FHIR-41684](https://jira.hl7.org/browse/FHIR-41684)

**Composition - MDI to EDRS**:
* Changed profile name/title to “Composition - MDI **and** EDRS” [FHIR-41684](https://jira.hl7.org/browse/FHIR-41684)
* Made identifier optional  [FHIR-39411](https://jira.hl7.org/browse/FHIR-39411), [FHIR-39412](https://jira.hl7.org/browse/FHIR-39412), [FHIR-39413](https://jira.hl7.org/browse/FHIR-39413)
* Changed the author from `(1..*)` to `(1..1)` and updated the description and definition [FHIR-41347](https://jira.hl7.org/browse/FHIR-41347)
* Removed the data-absent-reason extension from the attester and updated the description and definition [FHIR-41347](https://jira.hl7.org/browse/FHIR-41347)
* Added guidance to Composition.section: if no information for a required section, use Composition.section:cause-manner.emptyReason. [FHIR-40691](https://jira.hl7.org/browse/FHIR-40691)
* Changed cardinality from `(0..*)` to `(0..1)` for entry:other-condition, entry:manner, entry:how-injury [FHIR-40691](https://jira.hl7.org/browse/FHIR-40691)
* Updated entry:cause to "Up to 4 lines of cause of death" [FHIR-40691](https://jira.hl7.org/browse/FHIR-40691)
* Added a slice to section:exam-autopsy.entry for autopsy location [FHIR-39414](https://jira.hl7.org/browse/FHIR-39414)
* Corrected cardinality of Composition.section:narratives.code from `0..1` to `1..1`  [FHIR-41871](https://jira.hl7.org/browse/FHIR-41871)

**Observation - Cause of Death Part 1**:
* Updated to align with Vital Records Death Reporting (VRDR) STU2, v.2.1.0 value(x) structure & lineNumber.valueInteger  [FHIR-41185](https://jira.hl7.org/browse/FHIR-41185)
* Added valueQuantity and valueString options for interval.value(x)  [FHIR-41185](https://jira.hl7.org/browse/FHIR-41185)
* Fixed the interval component to correctly display value[x] options on all 3 tabs (Differential, Key Elements, and Snapshot) [FHIR-41643](https://jira.hl7.org/browse/FHIR-41643)
* Improved Observation.component:interval.value[x] description to inform and guide users that the Quantity is only to be used for an amount of time [FHIR-41643](https://jira.hl7.org/browse/FHIR-41643)

**Observation - Contributing Cause of Death Part 2**: Updated to align with Vital Records Death Reporting (VRDR) STU2, v.2.1.0 performer cardinality, changed from `(1..1)` to `(0..*)` [FHIR-41185](https://jira.hl7.org/browse/FHIR-41185)

**Observation - Death Date**:
* Added choice of dateTime or period to Observation.value(x)  [FHIR-40470](https://jira.hl7.org/browse/FHIR-40470)
* Added time to dateTime as choices for datetimePronouncedDead.value(x) to align with VRDR  [FHIR-40470](https://jira.hl7.org/browse/FHIR-40470)
* Updated Observation.value[x].extension:partialDateTime to reference `http://hl7.org/fhir/us/vrdr/StructureDefinition/PartialDateTime` and updated short description [FHIR-41647](https://jira.hl7.org/browse/FHIR-41647)

**Observation - How Death Injury Occurred**: Updated Observation.value[x].extension:partialDateTime to reference `http://hl7.org/fhir/us/vrdr/StructureDefinition/PartialDateTime` and updated short description [FHIR-41647](https://jira.hl7.org/browse/FHIR-41647)


**Observation - Autopsy Performed Indicator**: Constrained performer to US Core Practitioner Profile [FHIR-41346](https://jira.hl7.org/browse/FHIR-41346)

**Observation - Tobacco Use Contributed to Death**: Updated to align with Vital Records Death Reporting (VRDR) STU2, v.2.1.0 code display [FHIR-41185](https://jira.hl7.org/browse/FHIR-41185)

**Bundle - Message Toxicology to MDI**: made identifier optional [FHIR-39413](https://jira.hl7.org/browse/FHIR-39413)

**DocumentReference - MDI Report**: Added profile of US Core DocumentReference Profile for exchange of death investigation documents, such as Autopsy Reports and Investigator’s Narratives. [FHIR-41348](https://jira.hl7.org/browse/FHIR-41348)

#### Extensions
* Removed Extension structure definitions:  Extension-partial-date-time, Extension-date-year, Extension-date-month, Extension-date-day, and Extension-date-time; replaced uses with reference (url) to Vital Records Death Reporting (VRDR) extensions, thus creating a formal dependence on VRDR) [FHIR-41647](https://jira.hl7.org/browse/FHIR-41647)

#### Terminology
* Updated code displays to match source code systems (e.g., SNOMED CT)
* Removed unused valuesets: ValueSet - Units of Age; ValueSet - Yes, No, Not Applicable

#### Narrative Pages
**Overall**: Clarified language , updating terms such as “MDI system” to “MDI case management system (MDI CMS)” for the electronic data systems [FHIR-36944](https://jira.hl7.org/browse/FHIR-36944)

**Best Practice**: Updated guidance on absent data [FHIR-41347](https://jira.hl7.org/browse/FHIR-41347)

**Security Recommendations**: New page added and corrected information [FHIR-41642](https://jira.hl7.org/browse/FHIR-41642)

**Terminology**: Updated text to clarify similarities with VRDR [FHIR-41519](https://jira.hl7.org/browse/FHIR-41519)

**Change Log**: New page added [FHIR-41184](https://jira.hl7.org/browse/FHIR-41184)

**Artifact Index**:
* Moved  MessageDefinition – Toxicology System to Toxicology Profiles grouping [FHIR-41516](https://jira.hl7.org/browse/FHIR-41516)
* Created new grouping, Administrative Profiles, for DocumentReference - MDI Report [FHIR-41348](https://jira.hl7.org/browse/FHIR-41348)


#### Examples: 
* Updated "MDI and EDRS Composition - Freeman" example file to show death certifier roles  [FHIR-41184](https://jira.hl7.org/browse/FHIR-41184)
* Added "MDI and EDRS Composition - draft" example file with author and attester not yet named (using the data-absent-reason). [FHIR-41347](https://jira.hl7.org/browse/FHIR-41347)
* Added "Observation - Cause of Death Part 1 - Freeman - quantity interval" example file
* Added "Observation - Death Date - period" and "Observation - Death Date - partial date" example files
* Added "Location - Death - Freeman address string" and "Location - Death - Lat/Long" example files
* Removed "US Core Practitioner - Dr. Jane Jones" example file and added "US Core Practitioner - Dr. J.M. Lehz" example file
* Added "DocumentReference - MDI Report - Autopsy Report" and "DocumentReference - MDI Report - Investigator's Narrative" example files

---

// File: input/pagecontent/mdi_downloads.md

**Full Implementation Guide**

The entire IG (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

**Definitions Files:** Format-specific definitions files may be downloaded:

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Example Files:** All examples used in this implementation guide may be downloaded:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTL](examples.ttl.zip)


---

// File: input/pagecontent/mdi_security_recommendations.md

This page describes the recommendations for a minimum level of security when implementing the MDI IG. The [FHIR Security](https://www.hl7.org/fhir/security.html) web page defines more data exchange protocols and content models. MDI CMS should refer to that if a higher level of security is required for interoperability. At minimum, two areas need protection in the data exchange:
1. Secure Data Transportation
1. Limited Data Access to Authorized Individuals

### Secure Data Transportation
In most modern systems, digital data are exchanged using web services. FHIR recommends a web service called RESTful Application Programming Interface (REST API) where REST stands for **RE**presentational **S**tate **T**ransfer. REST API uses Transport Layer Security (TLS) for secure transportation. More accurately, TLS 1.2 or higher needs to be used. This is also known as HTTPS. All data exchanges in MDI FHIR IG must be done in HTTPS.

### Limited Data Access to Authorized Individuals
The OAuth 2.0 Authorization Framework (OAuth2), defined in [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749), is a standard authorization protocol that can be used in order to limit data access for specified and controlled permissions. Developers should become familiar with the RFC 6749 document for the technical details on OAuth2. The following are good additional references for OAuth2:
* [OAuth 2.0 Authorization Framework](https://auth0.com/docs/authenticate/protocols/oauth)
* [OAuth 2.0 Simplified](https://www.oauth.com)

SMART on FHIR is a recommended security solution for FHIR. It uses OAuth2 for the security protocol. The SMART on FHIR is targeting to clinical data access for providers, patients, and clinical systems such as EHR. While SMART on FHIR can also be applied to MDI FHIR systems, this document does not recommend the SMART on FHIR as a minimum-security solution due to its granularity and complexity of access definitions on resources and users. Thus, this document discusses the general OAuth2 as a minimum level of security. However, if a system needs to be maintained at a similar level of security as clinical systems, SMART on FHIR is a recommended protocol. Details on the SMART on FHIR can be found in the [SMART App Launch FHIR IG](http://www.hl7.org/fhir/smart-app-launch/).

SMART on FHIR uses OAuth2 for security in accessing clinical data for providers, patients, and clinical systems such as EHRs. While SMART on FHIR can be applied to MDI CMS, the granularity and complexity of access definitions on resource sets and user sets are above a minimum security recommendation. However, if an MDI CMS needs to be maintained at a level of security similar to clinical systems, SMART on FHIR is a recommended protocol. Details on the SMART on FHIR can be found in http://www.hl7.org/fhir/smart-app-launch/.

OAuth2 has components with different roles that the MDI CMS can play. Each system will play a different role based on the dataflow in which it operates. The following table shows the OAuth2 roles, and the role MDI CMS should play in the MDI-EDRS and Toxicology-MDI dataflows.

***MDI Roles & Responsibilities***

| Role | Responsibility | MDI CMS-EDRS | Tox-MDI CMS |
| -------- | -------- | -------- | -------- |
| Authorization Server     | Server that authenticates the resource owner and issues access tokens to the client application. The authorization server can be the same as the authentication server or can be a separate server.     | EDRS     | MDI CMS     |
| Client     | Application that wants to access the resource on behalf of the resource owner. The client can be a web application, a mobile application, or a desktop application.     | MDI CMS     | LIMS     |
| Resource Owner     | User who owns the resource (such as a photo or a document) that a client application wants to access. The resource owner grants permission to the client application to access the resource.     | MDI CMS users, EDRS users     | LIMS users     |
| Resource Server (Provider)    | Server that hosts the resource that the client application wants to access. The resource server verifies the access token and grants access to the resource if the token is valid.     | EDRS     | MDI CMS     |

Please note that toxicology-MDI CMS dataflow incorporates the use of the FHIR message operation including the use of REST API for transportation. Thus, OAuth2 can also be used to secure the toxicology-MDI CMS data exchange. However, FHIR messaging uses the CREATE (HTTP POST) method due to the nature of messaging’s push operation, in which data are originally owned by the LIMS and pushed to the MDI CMS. However, in the REST API operation, the LIMS is a client, and MDI CMS plays a resource provider role, which owns the data after the operation is completed.

This MDI  IG recommends two OAuth2 authorization methods based on the client types: 
* **Human Users**: Resource owners who perform the operation behind the client. The human user uses authenticated and authorized login credentials to access the data.
* **API Users**: System that requires pre-authorization. The system can get an access token with pre-defined authorization in the background process.

### Human Users
An example of human user cases would be when a certifier needs to access death data in an EDRS for search, update, or certification. We may allow only users in a certain role to change the data. In this case, the user needs to get authenticated and authorized with scope parameter that will define the scope of access. The figure 1 depicts the flow of authorization process for human users.

A human user may be a certifier who needs to access death data in an EDRS for search, update, or certification. The EDRS can allow only users in a certain role to change the data. In this case, the user is authenticated and authorized with scope parameters that define access. The human user authorization flow for human users follows this process:


* Step 1: The client (MDI CMS or LIMS) sends a request for authorization with parameters such as client id, redirect URL, response type = code for authorization code, scope, etc. In this step, users will be redirected to a login page. 
* Step 2: Once the authenticated users are validated, an authorization code will be returned.
* Step 3: Client will then use the authorized code to exchange with an access token at the token service endpoint. 
* Step 4: Access Token is granted to client. There is a timeout. Thus, client may need to refresh the token periodically.
* Step 5 – 8: From this point, the resources should be available for the client with the access token in the request header. Resource provider will introspect the token to check if it is valid to proceed with the request. The response from Authorization server may contain scopes. If this is the case, the scopes can be used for further access controls.

***Figure: OAuth2 Flow for Human Users***
<table><tr><td><img src="IG-image-OAuth2-Human.png" /></td></tr></table>

### API Users

API User authorization is for client systems (or client applications) that need access without human intervention. A system is pre-authorized during registration. Since no human provides the credential information, the grant type should be set to *clientcredentials*, and the credentials should be set as defined by authorization server. The setting can be *clientid* and *clientsecret*, or the credential can be created with JSON Web Token (JWT), depending on authorization server configuration. The authorization flow for API Users follows this process: 
* Step 1: The client requests a token server for an access token with parameters such as client ID, client_secret or authentication JWT, etc. The authorization server validates the request.
* Step 2: The access token is granted to the client. A timeout period is defined for the token; thus, the client may need to refresh the token periodically.
* Step 3 – 6: The resources should be available to the client with the access token in the request header. The resource provider will check that the token is valid to proceed with the request. The response from the authorization server may contain scopes. If this is the case, the scopes can be used for further access controls.

***Figure: OAuth2 Flow for API Users***
<table><tr><td><img src="IG-image-OAuth2-API.png" /></td></tr></table>

---

// File: input/pagecontent/mdi_specification.md

This page describes normative content of the specification. For an introduction to FHIR, please visit [HL7’s FHIR Summary](https://www.hl7.org/fhir/summary.html) as well as the overviews [for developers](https://www.hl7.org/fhir/overview-dev.html) and [for clinicians](https://www.hl7.org/fhir/overview-clinical.html). Also, refer to [“Getting Started with FHIR”](https://www.hl7.org/fhir/modules.html).

### FHIR Exchange Paradigms Supported
* RESTful API - Optional for all systems
* Document Bundle - Required for MDI CMS & EDRS
* Message Bundle - Required for Forensic Toxicology LIMS & MDI CMS

### Actors & Roles
This specification requires two roles in any data exchange:
* **Data Source**: An application that exposes a FHIR document bundle or message bundle to a data consumer. This can be thought of as the server in a client/server interaction.
* **Data Consumer**: An application that consumes a FHIR document bundle or message bundle. This can be thought of as the client in a client/server interaction.

***MDI Implementation Guide Actors & Roles Summary Table***
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px; overflow:hidden;padding:2px 2px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px; font-weight:normal;overflow:hidden;padding:2px 2px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax"><b>Actor</b></th>
    <th class="tg-0lax"><b>Data Source for:</b></th>
    <th class="tg-0lax"><b>Data Consumer of:</b></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">Forensic Toxicology LIMS</td>
    <td class="tg-0lax">Bundle - Message Toxicology to MDI </td>
    <td class="tg-0lax">&nbsp;</td>
  </tr>
  <tr>
    <td class="tg-0lax">MDI CMS</td>
    <td class="tg-0lax">Bundle - Document MDI and EDRS <br>Bundle - Message Death Certificate Review <br>Bundle - Document Death Certificate Review</td>
    <td class="tg-0lax">Bundle - Message Toxicology to MDI <br>Bundle - Document MDI and EDRS <br>Bundle - Message Death Certificate Review <br>Bundle - Document Death Certificate Review</td>
  </tr>
  <tr>
    <td class="tg-0lax">EDRS</td>
    <td class="tg-0lax">Bundle - Document MDI and EDRS <br>Bundle - Message Death Certificate Review <br>Bundle - Document Death Certificate Review</td>
    <td class="tg-0lax">Bundle - Document MDI and EDRS <br>Bundle - Message Death Certificate Review <br>Bundle - Document Death Certificate Review</td>
  </tr>
</tbody>
</table>

### Capability Statements & Claiming Conformance to This Specification
To claim conformance to this specification, FHIR servers SHALL be able to populate all profile data elements that have a minimum cardinality >= 1 and/or are flagged as MustSupport as defined by that profile’s StructureDefinition.

### Conformance to Other Standards
This MDI FHIR IG is based on US Core 5.0.1 and directly references and/or further profiles:

**US Core:**
* [US Core Condition Encounter Diagnosis Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis)
* [US Core Condition Problems and Health Concerns Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns)
* [US Core DiagnosticReport Profile for Laboratory Results Reporting](http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab)
* [US Core DocumentReference Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference)
* [US Core Laboratory Result Observation Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab)
* [US Core Location Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-location)
* [US Core Organization Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization)
* [US Core Patient Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient)
* [US Core Practitioner Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner)
* [US Core PractitionerRole Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole)
* [US Core RelatedPerson Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson)

**Vital Records Death Reporting (VRDR):**
* [Autopsy Performed Indicator](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-autopsy-performed-indicator)
* [Birth Record Identifier Child](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-birth-record-identifier-child) 
* [Birth Record Identifier Infant](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-birth-record-identifier) 
* [Cause Of Death Part 1](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-cause-of-death-part1)
* [Cause of Death Part 2](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-cause-of-death-part2)
* [Death Certification Procedure](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-certification)
* [Death Certifier](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-certifier.html)
* [Death Date](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-date)
* [Death Location](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-location)
* [Decedent](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent.html) 
* [Decedent Age](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent-age.html) 
* [Decedent Disposition Method](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent-disposition-method.html) 
* [Decedent Education Level](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent-education-level.html) 
* [Decedent Father](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent-father.html) 
* [Decedent Military Service](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent-military-service.html) 
* [Decedent Mother](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent-mother.html) 
* [Decedent Pregnancy](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-pregnancy-status)
* [Decedent Spouse](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-decedent-spouse.html) 
* [Decedent Usual Work](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-usual-work)
* [Disposition Location](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-disposition-location.html) 
* [Examiner Contacted](http://hl7.org/fhir/us/vrdr/STU3/StructureDefinition-vrdr-examiner-contacted.html) 
* [Fetal Death Record Identifier](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-fetal-death-record-identifier) 
* [Funeral Home](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-funeral-home) 
* [Injury Incident](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-injury-incident)
* [Injury Location](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-injury-location)
* [Manner of Death](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-manner-of-death)
* [Mortician](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-mortician) 
* [Surgery Date](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-surgery-date)
* [Tobacco Use Contributed To Death](http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-tobacco-use-contributed-to-death)


**Vital Records Common Library (VRCL):**
* [Observation - Emerging Issues Vital Records](http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-emerging-issues-vr)
* [Observation - Input Race and Ethnicity Vital Records](http://hl7.org/fhir/us/vr-common-library/StructureDefinition/input-race-and-ethnicity-vr)
* [Patient - Vital Records](http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Patient-vr)
* [Practitioner - Vital Records](http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Practitioner-vr)

### Resources and Profiles
This specification defines the following resources. An overview and list of examples is available on the [Artifacts Index Summary](artifacts.html).

**Profiles for Death Certificate development:**
* Bundle - Document MDI and EDRS
* Composition - MDI and EDRS
* MDI Cause Of Death Part 1

**Profiles for forensic toxicology to MDI CMS exchange:**
* Bundle - Message Toxicology to MDI
* MessageHeader - Toxicology to MDI
* DiagnosticReport - Toxicology Lab Result to MDI
* Specimen - Toxicology Lab
* Observation - Toxicology Lab Result

**Administrative profile for exchanging PDF documents:**
* DocumentReference - MDI Report

**Profiles for Death Certificate Review:**
* Bundle - Message Death Certificate Review
* MessageHeader - Death Certificate Review
* Bundle - Document Death Certificate Review
* Composition - Death Certificate Review
* Observation - Medical Information Data Quality
* Observation - Personal Information Data Quality
* Observation - Communicable Disease
* Observation – Embalmed
* Organization – Crematorium

**Extensions:**
* Cremation Clearance Authorization Status
* Cremation Clearance Coroner Status
* Cremation Clearance Signature Status
* Death Certificate Status
* Medical Examiner Certification Affirmation 
* Tracking Number

**Value Sets:**
* Certified Workflow example
* Cremation Clearance Observations example
* Cremation Clearance Signed example
* Cremation Clearance Status example
* Death Certificate Review Observations example
* Death Certificate Review Reason example
* Embalmed example
* Medical Data Quality Review example
* Medical Examiner Certification Affirmation example
* Personal Data Quality Review example
* Registration example
* Tracking Number Type

**Code Systems:**
* Death Certificate Review Example
* Medicolegal Death Investigation Codes

### MustSupport and Missing Data
Systems claiming to conform to an MDI profile SHALL support the elements in the profile as defined below. This guide adopts the following definitions of MustSupport for all direct transactions between the data source systems and data consumer systems.

**Data Source Systems:**
* As part of the sending of a Message Bundle or Document Bundle, the Data Source system SHALL be capable of including all elements defined in the profiles that have a MustSupport flag and SHALL populate all elements with a MustSupport flag if the information exists.
* In situations where information on a particular data element is not present, the Data Source system SHALL NOT include the data element in the resource instance if the cardinality is 0..n.
* If the information does not exist and the cardinality of the element is >= 1..*, the Data Source system SHALL follow the [US Core Missing Data guidance](https://www.hl7.org/fhir/us/core/general-guidance.html#missing-data).

**Data Consumer Systems:**
* Data Consumer systems SHALL be capable of processing resource instances containing required and allowed data elements without generating an error or causing the application to fail.
* Data Consumer systems SHOULD be capable of processing (display, store, etc.) the data elements based on the utility of the specific element to the receiver.
* When receiving a transaction from a Data Source system, the Data Consumer system SHALL interpret missing data elements within resource instances as data not present in the Data Source system.
* Data Consumer systems SHALL be able to process resource instances containing data elements asserting missing information without generating an error or causing the application to fail.

### Search
This IG defines a new FHIR Search parameter: MDI Tracking Number Search

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

// File: input/pagecontent/mdi_terminology.md

### Value Sets Defined In This Implementation Guide
* [ValueSetTrackingNumberType]

### HL7 Defined Value Sets
* [DataAbsentReason](http://hl7.org/fhir/R4/valueset-data-absent-reason.html)

---

// File: input/pagecontent/mdi_use_cases.md

The use cases described here do not make any assumptions about whether implementing systems are using FHIR Messaging or FHIR RESTful API. Implementations of this MDI FHIR IG will vary, and some may use a FHIR API rather than FHIR Messaging. In those cases, a MessageHeader and a Document Bundle can be exchanged without a Message Bundle wrapper. For more information, see [Relationship between Messaging and REST](https://hl7.org/fhir/messaging.html#endpoints) and [FHIR Exchange Module](http://hl7.org/fhir/exchange-module.html). Document Bundles may be exchanged between systems and persisted in document storage and management systems. See [FHIR Documents](http://hl7.org/fhir/documents.html) and [FHIR Bundles](http://hl7.org/fhir/R4/bundle.html) for additional guidance.

### Death Case Record Creation and Update for Death Certificate
Death data for a case record can be exchanged bidirectionally between an MDI case management system (CMS) and an EDRS via a document bundle. This is the base use case for gathering information needed to develop a death certificate.

*Scenario A:*
1.	Case record originates in the MDI CMS
2.	MDI CMS sends data to EDRS in Document Bundle
3.	EDRS completes death certificate with information from other sources (funeral home, etc.)

*Scenario B:*
1.	Case record originates in EDRS
2.	EDRS sends data to MDI CMS in Document Bundle
3.	MDI CMS updates case record with MDI information
4.	MDI CMS sends updated case record in new Document Bundle to EDRS
5.	EDRS completes death certificate

**FHIR Resources** listed on Artifacts, [MDI Profiles for Death Certificate](artifacts.html#mdi-profiles-for-death-certificate):
* Bundle - Document MDI and EDRS: Document bundle profile providing a FHIR “wrapper” to contain a composition document.
* Composition - MDI and EDRS: Composition profile representing a data document exchanged between an MDI CMS and an EDRS that includes death investigation findings, such as:
  * Circumstances of death
  * Death date and certification of death
  * Cause and manner of death
  * Additional information, such as autopsy results, medical history, etc.
* MDI Cause Of Death Part 1

The Composition - MDI and EDRS provides the Tracking Number Extension for including case or file numbers used by various systems to identify the case. One Composition can have multiple tracking numbers with additional tracking numbers added over time, e.g., MDI CMS case number added to a file with an EDRS record number.

The Composition - MDI and EDRS uses many of the same profiles as (i.e., references) the VRDR & VRCL FHIR IGs. One exception is the MDI Cause Of Death Part 1 profile, which is based on the VRDR Cause Of Death Part 1 profile, but requires a performer, which is the cause of death certifier (coroner or medical examiner). The rationale for the heavier constraint here is to preserve the chain of cause-of-death determination and who made the determination.

**Examples** listed on Artifacts, [MDI-defined Resource Examples for Death Certificate](artifacts.html#mdi-defined-resource-examples-for-death-certificate):
* Bundle - MDI and EDRS - Freeman: Document bundle for the Freeman example case.
* MDI and EDRS Composition - Freeman: Completed data document composition for the Freeman example case record.
* MDI and EDRS Composition - draft: Draft data document, with status = preliminary, and author and attester = "Temporarily Unknown", using the data-absent-reason extension.
* MDI Cause of Death Part 1 – Freeman: Observation with practitioner, who is the Cause of Death certifier (coroner or medical examiner)

### Transmission of Forensic Toxicology Diagnostic Findings from LIMS to MDI CMS
Data from a forensic toxicology laboratory information management system (LIMS) can be sent to an MDI CMS via a diagnostic report and message bundle.

**FHIR Resources** listed on Artifacts, [Forensic Toxicology Profiles](artifacts.html#forensic-toxicology-profiles):
* Bundle - Message Toxicology to MDI: Message bundle profile providing a FHIR “wrapper” to contain a message header and a diagnostic report from a forensic toxicology laboratory.
* MessageHeader - Toxicology to MDI: Message header profile indicating that a diagnostic report is the focus of the message.
* DiagnosticReport - Toxicology Lab Result to MDI: Diagnostic report profile providing forensic toxicology findings
* Specimen - Toxicology Lab
* Observation - Toxicology Lab Result: Analysis of specimen

**Examples** listed on Artifacts, [MDI-defined Resource Examples for Forensic Toxicology](artifacts.html#mdi-defined-resource-examples-for-forensic-toxicology):
* Bundle - Message Toxicology to MDI - Freeman: Message bundle for the Freeman example case.
* MessageHeader - Toxicology to MDI - Freeman: Message header specifying the focus of the message and providing source and endpoint example information.
* DiagnosticReport - Toxicology Lab Result to MDI - Freeman: Diagnostic report for the Freeman example case.
* Specimen & lab result observation examples (many))

### Exchange of a PDF Report within the MDI Community
A PDF report, such as an Autopsy Report or Investigator’s Narrative, can be exchanged between an MDI CMS and another FHIR-enabled data system. The content may be included as inline base64 encoded data or be provided by direct reference (e.g., URL). 

**FHIR Resource** listed on Artifacts, [MDI Administrative Profiles](artifacts.html#mdi-administrative-profiles): 
* DocumentReference - MDI Report: The document type is required and is constrained by US Core to a LOINC value whose SCALE is DOC in the LOINC database or is the HL7 v3 Code System NullFlavor concept 'unknown'.

**Examples** listed on Artifacts, [MDI-defined Resource Examples for Administrative Profiles ](artifacts.html#mdi-defined-resource-examples-for-administrative-profiles):
* DocumentReference - MDI Report - Autopsy Report example: Example autopsy report included as a base-64 encoded PDF. 
* DocumentReference - MDI Report - Investigator's Narrative example: Example investigator’s narrative referenced by example URL.

### Transmission of a Death Certificate for Review
Death certificate information may be exchanged for review in several cases:
* **Data Quality Improvement**: Querying for information needed to properly code and classify the cause of death for data quality improvement. “Cause-of-death querying is a process by which the State health department contacts the medical certifier who completed the cause-of-death statement and asks for clarification or further information so that resulting mortality statistics may be as complete and accurate as possible.” (From CDC, [Instruction Manual
Part 20 - ICD-10 Cause-of-Death Querying (2013)](https://www.cdc.gov/nchs/data/dvs/Instruction_Manual_revise20_2013.pdf).)
* **Cremation Clearance** (also known as "cremation authorization"): Many states and jurisdictions require cremation clearance from a medical examiner / coroner to make sure the physical evidence is not needed for any further inquiries into the death. The rules about when cremation clearance is required vary among jurisdictions, but typically it is needed when the cause and manner of death information for the death certificate is provided by an attending physician or other provider, rather than the jurisdiction's medical examiner / coroner.

*Data Quality Improvement Use Case Steps:*
1.	EDRS sends the death certificate to MDI case management system (CMS) for review.
2.	Medical examiner / coroner reviews death certificate information, particularly the cause and manner of death
3.	MDI CMS sends response with additional information.

*Cremation Clearance Use Case Steps* - The cremation clearance workflow starts after the death certificate is largely complete. A typical workflow, at a high level, includes:
1.	Next of kin (or other authorized person or organization) requests cremation be the method of disposal and signs a cremation clearance request (CCR).
2.	Funeral home provides death certificate information and submits the CCR to the jurisdiction's vital records office (VRO) electronic death record system (EDRS).
3.	EDRS sends the CCR with the death certificate to MDI case management system (CMS) for review.
4.	Medical examiner / coroner reviews death certificate information, particularly the cause and manner of death, and makes a determination.
5.	MDI CMS sends to EDRS a cremation clearance authorization document with the status of the request.

This IG provides FHIR messaging artifacts for exchanging document bundles containing the death certificate information for review and additional information for cremation clearance, if needed.

**FHIR Resource** listed on Artifacts, [Death Certificate Review Profiles](artifacts.html#death-certificate-review-profiles): 
* Bundle - Message Death Certificate Review: Message bundle profile providing a FHIR “wrapper” to contain a message header and a document bundle for death certificate review workflows.
* MessageHeader - Death Certificate Review: Message header profile indicating that a document bundle is the focus of the message, the reason for the message (e.g., cremation clearance), and additional information about the status of the death certificate.
* Bundle - Document Death Certificate Review: Document bundle profile providing a FHIR “wrapper” to contain a composition document.
* Composition - Death Certificate Review: Composition profile containing Death Certificate components defined in the Vital Records Death Reporting (VRDR) FHIR Implementation Guide as the first sections. Additional sections represent information often used for cremation clearance workflows and data quality reviews.
* Observation - Medical Information Data Quality
* Observation - Personal Information Data Quality
* Observation - Communicable Disease
* Observation - Embalmed
* Organization - Crematorium

This implementation guide does not define FHIR resources for other aspects of the cremation clearance workflow, such as fee payment.

**Examples** listed on Artifacts, [MDI-defined Resource Examples for Death Certificate Review](artifacts.html#mdi-defined-resource-examples-for-death-certificate-review):
* Bundle - Message Death Certificate Review example
* MessageHeader - Death Certificate Review example
* Bundle - Document Death Certificate Review example
* Death Certificate Review Composition example for death data review request (example 1): Death data review request example
* Death Certificate Review Composition example for death data review response (example 2): Death data review response example
* Death Certificate Review Composition example for cremation clearance request (example 3): Cremation clearance request example
* Death Certificate Review Composition example for cremation clearance response (example 4): Cremation clearance response example
* Observation - Medical Information Data Quality example
* Observation - Personal Information Data Quality example
* Observation - Communicable Disease example
* Observation - Embalmed example
* Organization – Crematorium example


---

// File: input/pagecontent/mdi-content-transitions.md

<style>
    table.style1 { 
        border-collapse: collapse; 
        width: 100%; 
        table-layout: fixed;
    }  
    table.style1 tbody tr {
        border-bottom: 1px solid #dddddd;
    } 
    table.style1 tbody tr:nth-of-type(even) { 
        background-color: #f3f3f3; 
    } 
    table.style1 tbody tr:last-of-type {
        border-bottom: 2px solid #98c1d9;
    }
    table.style1 td:first-of-type {
        text-align: left;
    }
    table.style1 td:nth-of-type(2) {
        text-align: center;
    }
    table.style1 td:nth-of-type(3) {
        text-align: left;
    }
</style>
{% include transitions_documentation.md %}
<br/><br/>

### STU2 Profiles

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-Bundle-document-mdi-and-edrs.html'>BundleDocumentMDIToEDRS</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Bundle-document-mdi-and-edrs.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-Bundle-message-tox-to-mdi.html'>BundleMessageToxToMDI</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Bundle-message-tox-to-mdi.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-Observation-mdi-cause-of-death-part1.html'>ObservationMDICauseOfDeathPart1</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-cause-of-death-part1.html'>MDI</a> </td><td>Profile of <a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-cause-of-death-part1.html'>VRDR</a> version</td></tr>
<tr><td> <a href='StructureDefinition-Composition-mdi-and-edrs.html'>CompositionMDIAndEDRS</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Composition-mdi-and-edrs.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-DiagnosticReport-toxicology-to-mdi.html'>DiagnosticReportToxicologyToMDI</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-DiagnosticReport-toxicology-to-mdi.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-MessageHeader-toxicology-to-mdi.html'>MessageHeaderToxicologyToMDI</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-MessageHeader-toxicology-to-mdi.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-Observation-toxicology-lab-result.html'>ObservationToxicologyLabResult</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-toxicology-lab-result.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-Specimen-toxicology-lab.html'>SpecimenToxicologyLab</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Specimen-toxicology-lab.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='MessageDefinition-MessageDefinition-toxicology-system.html'>MessageDefinitionToxicologySystem</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/MessageDefinition-MessageDefinition-toxicology-system.html'>MDI</a> </td><td>-</td></tr>
<tr><td> <a href='StructureDefinition-DocumentReference-mdi-report.html'>DocumentReferenceMDIReport</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-DocumentReference-mdi-report.html'>MDI</a> </td><td>-</td></tr>
</tbody>
</table>


### STU2 Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='StructureDefinition-Extension-tracking-number.html'>ExtensionTrackingNumber</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Extension-tracking-number.html'>MDI</a> </td><td>-</td></tr>
</tbody>
</table>


### STU2 Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='ValueSet-vs-tracking-number-type.html'>ValueSetTrackingNumberType</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/ValueSet-ValueSet-tracking-number-type.html'>MDI</a> </td><td>-</td></tr>
</tbody>
</table>


### STU2 Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Previous Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='CodeSystem-cs-mdi-codes.html'>CodeSystemMDI</a> </td><td><a href='https://hl7.org/fhir/us/mdi/STU1.1/CodeSystem-CodeSystem-mdi-codes.html'>MDI</a> </td><td>-</td></tr>
</tbody>
</table>


### Removed Profiles

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>

<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-contributing-cause-of-death-part2.html'>ObservationContributingCauseOfDeathPart2</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-cause-of-death-part2.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-death-date.html'>ObservationDeathDate</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-death-date.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-how-death-injury-occurred.html'>ObservationHowDeathInjuryOccurred</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-injury-incident.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-manner-of-death.html'>ObservationMannerOfDeath</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-manner-of-death.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-decedent-pregnancy.html'>ObservationDecedentPregnancy</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-decedent-pregnancy-status.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-tobacco-use-contributed-to-death.html'>ObservationTobaccoUseContributedToDeath</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-vrdr-contributory-tobacco-use-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Observation-autopsy-performed-indicator.html'>ObservationAutopsyPerformedIndicator</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-autopsy-performed-indicator.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Procedure-death-certification.html'>ProcedureDeathCertification</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-death-certification.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Location-death.html'>LocationDeath</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-death-location.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/StructureDefinition-Location-injury.html'>LocationInjury</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/StructureDefinition-vrdr-manner-of-death.html'>VRDR</a> </td><td>-</td></tr>
</tbody>
</table>


### Removed Extensions

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> n/a</td><td>n/a</td><td> n/a </td></tr>
</tbody>
</table>


### Removed Valuesets

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/ValueSet/ValueSet-certifier-types'>ValueSetCertifierTypes</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-vrdr-certifier-types-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/ValueSet/ValueSet-contributory-tobacco-use'>ValueSetContributoryTobaccoUse</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-vrdr-contributory-tobacco-use-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/ValueSet/ValueSet-date-establishment-approach'>ValueSetDateEstablishmentApproach</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-vrdr-date-of-death-determination-methods-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/ValueSet/ValueSet-death-pregnancy-status.html'>ValueSetDeathPregnancyStatus</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-ValueSet-death-pregnancy-status.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/ValueSet/ValueSet-manner-of-death.html'>ValueSetMannerOfDeath</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-vrdr-manner-of-death-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/ValueSet-ValueSet-place-of-death.html'>ValueSetPlaceOfDeath</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-vrdr-place-of-death-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/STU1.1/ValueSet-ValueSet-transportation-incident-role.html'>ValueSetTransportationIncidentRole</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/ValueSet-vrdr-transportation-incident-role-vs.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/ValueSet/ValueSet-yes-no-unknown.html'>ValueSetYesNoUnknown</a> </td><td><a href='https://build.fhir.org/ig/HL7/vr-common-library/ValueSet-ValueSet-yes-no-unknown-vr.html'>VRCL</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/ValueSet/ValueSet-yes-no-unknown-not-applicable.html'>ValueSetYesNoUnknownNotApplicable</a> </td><td><a href='https://build.fhir.org/ig/HL7/vr-common-library/ValueSet-ValueSet-yes-no-not-applicable-vr.html'>VRCL</a> </td><td>-</td></tr>
</tbody>
</table>


### Removed Codesystems

<table align='left' border='1' class='style1' cellpadding='1' cellspacing='1'>
<tbody>
<tr>
<td style='background-color:#98c1d9; text-align: center; width: 37%;'><b>Name</b></td>
<td style='background-color:#98c1d9; text-align: center; width: 20%;'><b>Current Version/Location</b></td>
<td style='background-color:#98c1d9; text-align: center;'><b>Comments/Updates</b></td>
</tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/CodeSystem/CodeSystem-death-pregnancy-status.html'>CodeSystemDeathPregnancyStatus</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/CodeSystem-CodeSystem-death-pregnancy-status.html'>VRDR</a> </td><td>-</td></tr>
<tr><td> <a href='https://hl7.org/fhir/us/mdi/CodeSystem/CodeSystem-local-component-codes.html'>CodeSystemLocalComponentCodes</a> </td><td><a href='https://build.fhir.org/ig/HL7/vrdr/CodeSystem-vrdr-component-cs.html'>VRDR</a> </td><td>-</td></tr>
</tbody>
</table>



---

// File: input/pagecontent/transitions_documentation.md


### Note

Below are descriptions for each of the headers found in the transition tables. The tables are meant to describe changes to resources and their movements between IGs.

| **Field Name** | **Description** |
| :-----------: | :-----------: |
| Name | Name of the resource (past or present) |
| Previous Version/Location | Previous location of resource (links to past version) |
| Current Version/Location | Current location of resource (links to current version) |
| Comments/Updates  | Description of changes specific to the resource | 
{: .grid }

---

// File: input/fsh/MDIHarmonization.md

<!--- These are MDI harmonization notes, centralized for when IG's are developed separately --->

## Comments on MDI IG Harmonization

### Use Case: MDI to EDRS

#### Decedent
- [USCorePatient]
- Not creating a new common profile

#### Medical Examiner/Coroner (Certifier)
- [USCorePractitioner] 
- Not creating a new common profile

#### Death Location
- [LocationDeath] &rarr; [LocationDeathVitalRecordsNew]
- Removal of MS flags
- Inclusion of consolidated code system
- Inclusion of city and county extensions to accomodate VRDR
- Replacement of address text with state code

#### Tobacco Use Contributed to Death
- [ObservationTobaccoUseContributedToDeath] &rarr; [ObservationTobaccoUseContributedToDeathVitalRecordsNew]
- Removal of MS flags
- Inclusion of common value set

#### Decedent Pregnancy
- [ObservationDecedentPregnancy]  &rarr; [ObservationDecedentPregnancyVitalRecordsNew]
-  Removal of MS flags
- Inclusion of consolidated value set to include missing value
- Inclusion of bypass edit flag extensions

#### Injury Location
- [LocationInjury] &rarr; [LocationInjuryVitalRecordsNew]
- Removal of MS flags
- Inclusion of consolidated code system
- Inclusion of city and county extensions to accomodate VRDR
- Replacement of address text with state code

#### Death Date
- [ObservationDeathDate] &rarr; [ObservationDeathDateVitalRecordsNew] 
-  Removal of MS flags
- Inclusion of consolidated partial date time extension
- Inclusion of consolidated value sets for place of death and date establishment approach
- Components for place and time of death are limited to one value

#### Death Certification
- [ProcedureDeathCertification] &rarr; [ProcedureDeathCertificationVitalRecordsNew]
- Removal of MS flags
- Inclusion of consolidated value set for certifier types

#### Cause of Death Part 1
- [ObservationCauseOfDeathPart1] &rarr; [ObservationCauseOfDeathPart1VitalRecordsNew]
- Removal of MS flags
- Removal of performer cardinality
- Cause of Death Part 1 
- Line a,b,c,d text is no longer part of a slice definition (just codeable concept)

#### Cause of Death Part 2
- [ObservationContributingCauseOfDeathPart2] &rarr; [ObservationCauseOfDeathPart2VitalRecordsNew]
- Removal of MS flags

#### Manner of Death 
- [ObservationMannerOfDeath] &rarr; [ObservationMannerOfDeathVitalRecordsNew]
- Removal of MS flags
- Performer cardinality relaxed to 0..1 (observation default)

#### How Death Injury Occurred
- [ObservationHowDeathInjuryOccurred] &rarr; [ObservationInjuryIncidentVitalRecordsNew] 
- Removal of MS flags
- Performer cardinality relaxed to 0..1 (observation default)
- Inclusion of common partial date time extension
- Inclusion of common yes, no, unknown, not applicable value set for work injury indicator
- Inclusion of common transportation incident value set

#### Coded medical conditions 
- [USCoreConditionEncounterDiagnosis] or [USCoreConditionProblemsandHealthConcerns]
- Not creating a new common profile

#### Autopsy Performed Indicator
- [ObservationAutopsyPerformedIndicator]
-  profile with same/similar name is dissimilar across other profiles (no harmonization)

#### Autopsy Location
- [USCoreOrganization] or [USCoreLocation] 
- Not creating a new common profile

### Use Case: Toxicology to MDI

#### Responsible Diagnostic Service
- [USCorePractitioner] or [USCorePractitionerRole]
- Not creating a new common profile(s)

### Other Unchanged Profiles
- Toxicology to MDI MessageHeader
- Toxicology Lab Result to MDI
- Document Reference: MDI Report
- Capability Statements
<!--- probably not worth mentioning: http://hl7.org/fhir/R4/substance.html (additive Substance resource - referenced by specimen) --->


{% include markdown-link-references.md %}

---

// File: input/includes/markdown-link-references.md

[VRCL]: http://hl7.org/fhir/us/vr-common-library/
[VRDR]: http://hl7.org/fhir/us/vrdr/
[BFDR]: http://hl7.org/fhir/us/bfdr/
[MDI]: https://hl7.org/fhir/us/mdi/
[USCoreConditionEncounterDiagnosis]: http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-condition-encounter-diagnosis.html
[USCoreConditionProblemsandHealthConcerns]: http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-condition-problems-health-concerns.html
[USCoreLocation]: http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-location.html
[USCoreOrganization]: http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-organization.html
[USCorePatient]: http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-patient.html
[USCorePractitioner]: http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-practitioner.html
[USCorePractitionerRole]: http://hl7.org/fhir/us/core/STU5.0.1/StructureDefinition-us-core-practitionerrole.html
[QuestionnaireResponse]: http://hl7.org/fhir/R4/questionnaireresponse.html
[PartialDatesAndTimes]: usage.html#partial-dates-and-times
[Note on Decedent Name]: usage.html#decedent-name
[Note on Decedent Gender]: usage.html#decedent-gender
[CityCodes]: usage.html#city-codes
[CountyCodes]: usage.html#county-codes
[StateLiterals]: usage.html#state-literals
[CountryLiterals]: usage.html#country-literals
[Note on missing data]: usage.html#specifying-none-of-the-above-and-missing-data
[Note on missing abnormal conditions of newborn data]: usage.html#abnormal-conditions-of-newborn
[Note on missing maternal morbidity data]: usage.html#maternal-morbidities
[Note on missing characteristics of labor and delivery data]: usage.html#characteristics-of-labor-and-delivery
[Note on missing pregnancy risk factors data]: usage.html#pregnancy-risk-factors
[Note on missing congenital anomaly data]: usage.html#congenital-anomalies-of-newborn
[Note on missing infections present data]: usage.html#infection-present-during-pregnancy
[Note on missing method of delivery data]: usage.html#method-of-delivery
[Note on missing obstetric procedures data]: usage.html#obstetric-procedures
[Handling of edit flags]: usage.html#handling-of-edit-flags
[Birth and Fetal Death Vital Reporting]: https://build.fhir.org/ig/HL7/fhir-bfdr/index.html
[Vital Records Common Library]: https://build.fhir.org/ig/HL7/vr-common-library/index.html
[Medicolegal Death Investigation]: mdi_index.html
[Vital Records Death Reporting]: vrdr_index.html
[PHVS_Occupation_CDC_Census2010VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7186
[PHVS_Industry_CDC_Census2010VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.7187
[PHVS_Occupation_CDC_Census2012VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8026
[PHVS_Industry_CDC_Census2012VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8027
[PHVS_Occupation_CDC_Census2018VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8065
[PHVS_Industry_CDC_Census2018VS]: https://phinvads.cdc.gov/vads/ViewValueSet.action?oid=2.16.840.1.114222.4.11.8066
[ACMESystemRejectVS]: ValueSet-vrdr-system-reject-vs.html
[VRFM]: https://build.fhir.org/ig/nightingaleproject/vital_records_fhir_messaging_ig/message.html#successful-death-record-submission
[HL7EncounterAdmitSourceVS]: http://hl7.org/fhir/ValueSet/encounter-admit-source
[USCoreDischargeDispositionVS]: http://hl7.org/fhir/us/core/ValueSet/us-core-discharge-disposition
[USCoreBirthSexVS]: http://hl7.org/fhir/us/core/ValueSet/birthsex
{% include fsh-link-references.md %} 
<!---from VRCL-->
[ObservationAutopsyPerformedIndicatorVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Observation-autopsy-performed-indicator-vr.html
[ObservationCodedRaceAndEthnicityVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-coded-race-and-ethnicity-vr.html
[ObservationEducationLevelVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Observation-education-level-vr.html
[ObservationEmergingIssuesVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Observation-emerging-issues-vr.html
[ObservationInputRaceAndEthnicityVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-input-race-and-ethnicity-vr.html
[ObservationUsualWorkVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Observation-usual-work-vr.html
[PatientChildVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Patient-child-vr.html
[PatientMotherVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Patient-mother-vr.html
[PatientVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Patient-vr.html
[PractitionerVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Practitioner-vr.html
[RelatedPersonFatherNaturalVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-RelatedPerson-father-natural-vr.html
[RelatedPersonFatherVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-RelatedPerson-father-vr.html
[RelatedPersonMotherVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-RelatedPerson-mother-vr.html
[RelatedPersonParentVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-RelatedPerson-parent-vr.html
[ExtensionDatePartAbsentReasonVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-ExtensionDatePartAbsentReasonVitalRecords.html
[ExtensionPartialDateTimeVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-ExtensionPartialDateTimeVitalRecords.html
[ExtensionPatientFetalDeathVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Extension-patient-fetal-death-vr.html
[ExtensionRelatedpersonBirthplaceVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Extension-relatedperson-birthplace-vr.html
[ExtensionRelatedPersonDeceasedVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Extension-relatedperson-deceased-vr.html
[ExtensionWithinCityLimitsIndicatorVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Extension-within-city-limits-indicator-vr.html
[ExtensionBypassEditFlagVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-BypassEditFlag.html
[ExtensionCityCodeVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-CityCode.html
[ExtensionDistrictCodeVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-DistrictCode.html
[ExtensionPartialDateVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-ExtensionPartialDateVitalRecords.html
[ExtensionPostDirectionalVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-PostDirectional.html
[ExtensionPreDirectionalVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-PreDirectional.html
[ExtensionReportedParentAgeAtDeliveryVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-Extension-reported-parent-age-at-delivery-vr.html
[ExtensionStreetDesignatorVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-StreetDesignator.html
[ExtensionStreetNameVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-StreetName.html
[ExtensionStreetNumberVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-StreetNumber.html
[ExtensionUnitOrAptNumberVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/StructureDefinition-UnitOrAptNumber.html
[CodeSystemCanadianProvincesVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-canadian-provinces-vr.html
[CodeSystemComponentVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-codesystem-vr-component.html
[CodeSystemCountryCodeVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-country-code-vr.html
[CodeSystemHispanicOriginVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-hispanic-origin-vr.html
[CodeSystemIJEVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-codesystem-ije-vr.html
[CodeSystemJurisdictionsVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-jurisdictions-vr.html
[CodeSystemMissingValueReasonVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-missing-value-reason-vr.html
[CodeSystemRaceCodeVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-race-code-vr.html
[CodeSystemRaceRecode40VitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-race-recode-40-vr.html
[CodeSystemEditFlagsVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-vr-edit-flags.html
[CodeSystemLocalObservationsCodesVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/CodeSystem-CodeSystem-local-observation-codes-vr.html
[ValueSetBirthAttendantTitlesVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-birth-attendant-titles-vr.html
[ValueSetBirthplaceCountryVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-birthplace-country-vr.html
[ValueSetBirthSexChildVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-birth-sex-child-vr.html
[ValueSetBirthSexFetusVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-birth-sex-fetus-vr.html
[ValueSetEditBypass01234VitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-valueset-edit-bypass-01234-vr.html
[ValueSetEducationLevelVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-education-level-vr.html
[ValueSetEducationLevelPersonVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-education-level-person-vr.html
[ValueSetCodedRaceAndEthnicityPersonVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-coded-race-and-ethnicity-person-vr.html
[ValueSetFatherRelationshipVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-father-relationship-vr.html
[ValueSetHispanicNoUnknownVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-hispanic-no-unknown-vr.html
[ValueSetHispanicOriginVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-hispanic-origin-vr.html
[ValueSetJurisdictionVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-jurisdiction-vr.html
[ValueSetInputRaceAndEthnicityPersonVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-input-race-and-ethnicity-person-vr.html
[ValueSetMaritalStatusVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-marital-status-vr.html
[ValueSetMotherRelationshipVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-mother-relationship-vr.html
[ValueSetMothersDateOfBirthEditFlagsVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-mothers-date-of-birth-edit-flags-vr.html
[ValueSetPluralityEditFlagsVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-plurality-edit-flags-vr.html
[ValueSetRaceCodeVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-race-code-vr.html
[ValueSetRaceMissingValueReasonVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-race-missing-value-reason-vr.html
[ValueSetRaceRecode40VitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-race-recode-40-vr.html
[ValueSetResidenceCountryVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-residence-country-vr.html
[ValueSetStatesTerritoriesAndProvincesVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-states-territories-provinces-vr.html
[ValueSetUSStatesAndTerritoriesVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-usstates-territories-vr.html
[ValueSetUnitsOfAgeVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-units-of-age-vr.html
[ValueSetYesNoNotApplicableVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-yes-no-not-applicable-vr.html
[ValueSetYesNoUnknownVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-yes-no-unknown-vr.html
[ValueSetYesNoUnknownNotApplicableVitalRecords]: https://hl7.org/fhir/us/vr-common-library/2024Jan/ValueSet-ValueSet-yes-no-unknown-not-applicable-vr.html

---

// File: input/fsh/aliases.fsh

//Alias: $CodeSystem-death-reporting-codes-vr = http://hl7.org/fhir/us/vr-common-library/CodeSystem/CodeSystem-death-reporting-codes-vr
//Alias: $Extension-date-year-vr = http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Extension-date-year-vr
//Alias: $ValueSet-certifier-types-vr = http://hl7.org/fhir/us/vr-common-library/ValueSet/ValueSet-certifier-types-vr
Alias: $compositionmdiandedrs = http://hl7.org/fhir/us/vrsandbox/StructureDefinition/Composition-mdi-and-edrs
Alias: $controltype = http://example-edrs.org/fhir/controltype
Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $dataabsentreason401 = http://hl7.org/fhir/CodeSystem/data-absent-reason|4.0.1  
Alias: $fhir = http://example-edrs.org/fhir
Alias: $id = http://snomed.info/id/
Alias: $id_1 = http://snomed.info/id
Alias: $list-empty-reason = http://terminology.hl7.org/CodeSystem/list-empty-reason
Alias: $list-order = http://terminology.hl7.org/CodeSystem/list-order
Alias: $location-physical-type = http://terminology.hl7.org/CodeSystem/location-physical-type
Alias: $loinc = http://loinc.org
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $sct = http://snomed.info/sct
Alias: $unitsofmeasure = http://unitsofmeasure.org
Alias: $us-core-documentreference-category = http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category
Alias: $uscorepatient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $v2-0136 = http://terminology.hl7.org/CodeSystem/v2-0136
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $vrdr-document-section-cs = http://hl7.org/fhir/us/vrdr/CodeSystem/vrdr-document-section-cs



// VRDR FHIR IG
Alias: DeathCertificate = http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-certificate
Alias: ExaminerContacted = http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-examiner-contacted

// Vital Records Common Library
Alias: AuxiliaryStateIdentifier1VitalRecords = http://hl7.org/fhir/us/vr-common-library/StructureDefinition/AuxiliaryStateIdentifier1
Alias: AuxiliaryStateIdentifier2VitalRecords = http://hl7.org/fhir/us/vr-common-library/StructureDefinition/AuxiliaryStateIdentifier2
Alias: CertificateNumberVitalRecords = http://hl7.org/fhir/us/vr-common-library/StructureDefinition/CertificateNumber
Alias: ObservationAutopsyPerformedIndicatorVitalRecords = http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Observation-autopsy-performed-indicator-vr



---

// File: input/fsh/codesystems/DeathCertReviewExample.fsh

CodeSystem: DeathCertReviewExample
Id: cs-death-cert-review-example
Title: "Death Certificate Review Example"
Description: "This code system contains example codes for death certificate review."
* ^caseSensitive = true
* ^content = #complete
* ^experimental = false
// Example codes for Death Certificate Review MessageHeader.reason
* #DC_MED_DATA_Q "Death Certificate Medical Data Quality Review"
* #DC_PER_DATA-Q "Death Certificate Personal Data Quality Review"
* #CREM_C_REQUEST "Cremation Clearance Request"
// Example Observation codes related to the Decedent
* #Embalmed "Embalmed Observation"
* #CommunicableDisease "Communicable Disease Observation"
// Example Extension codes
* #CertifiedWorkflow "Certified Workflow Observation"
* #Registration "Registration Observation"
// Example Observation codes related to the Death Certificate review
* #MedicalInformationDataQuality "Medical Information Data Quality Observation"
* #PersonalInformationDataQuality "Personal Information Data Quality Observation"
// Example Observation codes related to the Cremation Clearance 
* #MECertificationAffirmation "Medical Examiner Certification Affirmation Observation"
* #CoronerWorkflow "Coroner Workflow Observation"
* #SignedWorkflow "Signed Workflow Observation"
// Example Death Certificate Status Codes (for ObservationRegistration and ObservationCertifiedWorkflow)
* #DEATH_CERT_CERT "Certified"
* #DEATH_CERT_NOT_CERT "Not Certified"
* #DEATH_CERT_REG "Registered"
* #DEATH_CERT_NOT_REG "Not Registered"
// Example Data Quality Review Codes (for ObservationMedicalInformationDataQuality and ObservationPersonalInformationDataQuality)
* #MED_INF_DQ_MEDICAL_VALID "Medical Data Valid"
* #MED_INF_DQ_MEDICAL_VALID_WITH_EXCEPTIONS "Medical Data Valid With Exceptions"
* #MED_INF_DQ_MEDICAL_INVALID "Medical Data Not Invalid"
* #PER_INF_DQ_PERSONAL_VALID "Personal Valid"
* #PER_INF_DQ_PERSONAL_VALID_WITH_EXCEPTIONS "Personal Valid With Exceptions"
* #PER_INF_DQ_PERSONAL_INVALID "Personal Invalid"
// Example Cremation Clearance Status Codes (for ExtensionCremationClearanceStatus, ObservationSignedWorkflow, and ObservationMECertificationAffirmation)
* #CREM_C_REQUESTED "Requested"
* #CREM_C_PENDING "Pending"
* #CREM_C_REJECTED "Rejected"
* #CREM_C_APPROVED "Approved"
* #CREM_C_SIGNED "Signed"
* #CREM_C_UNSIGNED "Unsigned"
* #ME_AFFIRM_CERTIFICATION_AFFIRMED "ME Certification Affirmation Affirmed"
* #ME_AFFIRM_CERTIFICATION_NOT_AFFIRMED "ME Certification Affirmation Not Affirmed"
// Additional example codes
* #ME "Medical Examiner"
* #AME "Assistant Medical Examiner"
* #CREM_C_Form "Cremation Clearance Form"

---

// File: input/fsh/codesystems/MDIcodes.fsh

CodeSystem: MDIcodes
Id: cs-mdi-codes
Title: "Medicolegal Death Investigation Codes"
Description: "Local codes for items that lack an appropriate LOINC code. This code system is only for use in the MDI use cases supported by this implementation guide and should not be used elsewhere."
// old Description: "This code system contains codes for use in death investigations and reporting."
* ^caseSensitive = true
* ^content = #complete
* ^experimental = false
// Sections for MDI and EDRS Composition
* #demographics "Demographics Section"
* #circumstances "Circumstances of the Death Section"
* #jurisdiction "Jurisdiction Section"
* #cause-manner "Cause and Manner of Death Section"
* #medical-history "Medical History Section"
* #exam-autopsy "Exam/Autopsy Section"
* #narratives "Narratives Section"
// Sections for Death Certificate Data Review Composition
* #ccr-authorizing-agent "Cremation Clearance Authorizing Agent Section"
* #cremation-clearance-info "Cremation Clearance Information Section"
* #Death-Certificate-data-review "Death Certificate Data Review Results Section"
// MDI tracking number types
* #mdi-case-number "MDI Case Number"
* #edrs-file-number "EDRS File Number"
* #tox-lab-case-number "Toxicology Laboratory Case Number"
// MessageHeader.event types
* #tox-result-report "Toxicology Lab Results"
* #death-certificate-review "Death Certificate Review"
// Observation codes related to Detah Certificate Review Observations
* #Embalmed "Embalmed Observation"
* #CommunicableDisease "Communicable Disease Observation"
// Observation codes related to the Death Certificate review NO LONGER NEEDED?
//* #CertifiedWorkflow "Certified Workflow Observation"
//* #Registration "Registration Observation"
* #MedicalInformationDataQuality "Medical Information Data Quality Observation"
* #PersonalInformationDataQuality "Personal Information Data Quality Observation"
// Observation codes related to the Cremation Clearance NO LONGER NEEDED?
//* #MECertificationAffirmation "Medical Examiner Certification Affirmation Observation"
//* #CoronerWorkflow "Coroner Workflow Observation"
//* #SignedWorkflow "Signed Workflow Observation"
// Other type codes
* #crematorium "Crematorium"

---

// File: input/fsh/extensions/ExtensionCremationClearanceCoroner.fsh

Extension: ExtensionCremationClearanceCoroner
Id: Extension-cremation-clearance-coroner
Title: "Extension - Cremation Clearance Coroner Status"
Description: "This Extension indicates whether the Cremation Clearance is a coroner workflow or not."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* value[x] 0..1
* value[x] only CodeableConcept

---

// File: input/fsh/extensions/ExtensionCremationClearanceSignature.fsh

Extension: ExtensionCremationClearanceSignature
Id: Extension-cremation-clearance-signature
Title: "Extension - Cremation Clearance Signature Status"
Description: "This Extension indicates whether the Cremation Clearance has been signed or not."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from VSCCStatusEx (example)

---

// File: input/fsh/extensions/ExtensionCremationClearanceStatus.fsh

Extension: ExtensionCremationClearanceStatus
Id: Extension-cremation-clearance-status
Title: "Extension - Cremation Clearance Authorization Status"
Description: "This Extension indicates the authorization status of the Cremation Clearance."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from VSCCStatusEx (example)

---

// File: input/fsh/extensions/ExtensionDeathCertificateStatus.fsh

Extension: ExtensionDeathCertificateStatus
Id: Extension-death-certificate-status
Title: "Extension - Death Certificate Status"
Description: "This Extension indicates Death Certificate workflow status."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* extension contains
    DCcertification 0..1 and
    DCregistration 0..1
* extension[DCcertification] 
  * ^short = "Death Certificate certification status"
  * ^definition = "Death Certificate certification status"
  * value[x] 0..1
  * value[x] only CodeableConcept
  * value[x] from VSCertifiedWorkflowEx (example)
* extension[DCregistration] 
  * ^short = "Death Certificate registration status"
  * ^definition = "Death Certificate registration status"
  * value[x] 0..1
  * value[x] only CodeableConcept
  * value[x] from VSRegistrationEx (example)

---

// File: input/fsh/extensions/ExtensionMECertificationAffirmation.fsh

Extension: ExtensionMECertificationAffirmation
Id: Extension-me-certification-affirmation
Title: "Extension - Medical Examiner Certification Affirmation"
Description: "This Extension indicates whether the Medical Examiner certification has been affirmed or not."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* value[x] 0..1
* value[x] only CodeableConcept
* value[x] from VSMECertAffirmationEx (example)

---

// File: input/fsh/extensions/ExtensionTrackingNumber.fsh

Extension: ExtensionTrackingNumber
Id: Extension-tracking-number
Title: "Extension - Tracking Number"
Description: "Tracking number, such as a case number or file number assigned by an MDI CMS or EDRS, and can represent other tracking numbers, if required.."
* ^context[0].type = #element
* ^context[=].expression = "Composition"
* ^context[+].type = #element
* ^context[=].expression = "DiagnosticReport"
* . 0..*
  * ^short = "Tracking Numbers Extension"
  * ^definition = "Contains multiple tracking numbers, such as a case number or file number assigned by a case management system or EDRS, and can represent other tracking numbers, if required."
* url MS
//* value[x] only Identifier
* value[x] from VSTrackingNumberType (extensible)
//* value[x] MS
//  * ^short = "Value of extension"
//  * type MS
//  * type from VSTrackingNumberType (extensible)
//    * ^short = "Tracking Number Type (extensible value set)"
//  * system MS
//  * value MS

---

// File: input/fsh/instances/CapabilityStatement-edrs-server.fsh

Instance: CapabilityStatement-edrs-server
InstanceOf: CapabilityStatement
Title: "CapabilityStatement - Electronic Death Reporting System (EDRS) Server"
Description: "Description of the expected minimum capabilities of the Electronic Death Registration System (EDRS) server, which is responsible for providing responses to the queries submitted by a client. Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
Usage: #definition
* fhirVersion = #4.0.1
* name = "CapabilityStatementEDRSServer"
* title = "CapabilityStatement - Electronic Death Reporting System (EDRS) Server"
* status = #active
* experimental = false
* date = "2022-07-03"
* description = "This resource describes the expected minimum capabilities of the Electronic Death Registration System (EDRS) server, which is responsible for providing responses to the queries submitted by a client. Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
* kind = #requirements
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* rest[0]
  * mode = #server
  * insert SupportResource(Composition, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/mdi/StructureDefinition/Composition-mdi-and-edrs, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(subject, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-identifier, #token, #SHALL)
  * insert SupportSearchParam(patient, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-identifier, #token, #SHALL)
//  * insert SupportSearchParam(Composition.extension, http://hl7.org/fhir/us/mdi/SearchParameter/mdi-tracking-number-search, #token, #SHALL)
//  * insert SupportSearchParam(extension, http://hl7.org/fhir/us/mdi/SearchParameter/mdi-tracking-number-search, #token, #SHALL)
  * insert SupportOperation(operation-composition-document, https://hl7.org/fhir/operation-composition-document, #SHALL)
//  * resource[0]
//    * type = #Composition
//    * supportedProfile = Canonical(CompositionMDIAndEDRS)
//    * interaction[0].code = #search-type
//    * interaction[+].code = #read
//    * searchParam[0]
//      * name = "subject"
//      * type = #reference
//      * documentation = "Who and/or what the composition is about"
//    * searchParam[+]
//      * name = "patient"
//      * type = #reference
//      * documentation = "Who and/or what the composition is about"
//    * operation
//      * name = "operation-composition-document"
//      * definition = "https://hl7.org/fhir/operation-composition-document"
//      * documentation = "A server should be capable of generating a bundled document from a composition resource with all the referenced resources and either returns a full document bundle, or returns an error."
//    * fhir_comments = " Composition-mdi-and-edrs "
//
// NEW to allow search on tracking number (e.g., case ID)
//  * insert SupportResource(Extension, #SHALL)
//  * insert SupportProfile(http://hl7.http://hl7.org/fhir/us/mdi/StructureDefinition/Extension-tracking-number, #SHALL)
//  * insert SupportInteraction(#read, #SHALL)
//  * insert SupportInteraction(#search-type, #SHALL)

//
  * insert SupportResource(Patient, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(_id, http://hl7.org/fhir/SearchParameter/Resource-id, #token, #SHALL)
  * insert SupportSearchParam(birthdate, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-birthdate, #date, #SHALL)
  * insert SupportSearchParam(family, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-family, #string, #SHALL)
  * insert SupportSearchParam(given, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-given, #string, #SHALL)
  * insert SupportSearchParam(gender, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-gender, #token, #SHALL)
  * insert SupportSearchParam(name, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-name, #string, #SHALL)
//  * resource[+]
//    * type = #Patient
//    * supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
//    * interaction[0].code = #read
//    * interaction[+].code = #search-type
//    * searchParam[0]
//      * name = "_id"
//      * type = #token
//      * documentation = "The ID of the resource"
//    * searchParam[+]
//      * name = "birthdate"
//      * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-birthdate"
//      * type = #date
//      * documentation = "The patient's date of birth"
//    * searchParam[+]
//      * name = "family"
//      * type = #string
//      * documentation = "A portion of the family name of the patient"
//    * searchParam[+]
//      * name = "given"
//      * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-given"
//      * type = #string
//      * documentation = "A portion of the given name of the patient"
//    * searchParam[+]
//      * name = "gender"
//      * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-gender"
//      * type = #token
//      * documentation = "Gender of the patient"
//    * searchParam[+]
//      * name = "name"
//      * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-name"
//      * type = #string
//      * documentation = "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text"
//    * fhir_comments = " US Core Patient "
  * insert SupportResource(Location, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-location, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(address, http://hl7.org/fhir/us/core/SearchParameter/us-core-location-address, #string, #SHALL)

  * insert SupportResource(Observation, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-date, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(date, http://hl7.org/fhir/us/core/SearchParameter/us-core-observation-date, #date, #SHALL)
//  * resource[+]
//    * type = #Location
//    * supportedProfile = Canonical(DeathLocation)
//    * interaction[0].code = #read
//    * interaction[+].code = #search-type
//    * searchParam
//      * name = "address"
//      * type = #string
//    * fhir_comments = " Location-death "
//  * resource[+]
//    * type = #Observation
//    * supportedProfile = Canonical(DeathDate)
//    * interaction[0].code = #read
//    * interaction[+].code = #search-type
//    * searchParam
//      * name = "date"
//      * type = #date
//    * fhir_comments = " Observation-death-date "
* rest[+]
  * mode = #client
  * resource
    * type = #Bundle
    * supportedProfile = Canonical(BundleDocumentMDIAndEDRS)
    * interaction.code = #read
//    * fhir_comments = " Returned Searchset Bundle "
* document[0]
  * mode = #producer
  * profile = Canonical(CompositionMDIAndEDRS)
* document[+]
  * mode = #consumer
  * profile = Canonical(CompositionMDIAndEDRS)

---

// File: input/fsh/instances/CapabilityStatement-forensic-toxicology-laboratory-server.fsh

Instance: CapabilityStatement-forensic-toxicology-laboratory-server
InstanceOf: CapabilityStatement
Title: "CapabilityStatement - Forensic Toxicology Laboratory Server"
Description: "Description of the expected minimum capabilities of the toxicology lab server."
Usage: #definition
* name = "CapabilityStatementForensicToxicologyLaboratoryServer"
* title = "CapabilityStatement - Forensic Toxicology Laboratory Server"
* status = #active
* experimental = false
* date = "2022-07-03"
* description = "This resource describes the expected capabilities of the toxicology lab Server actor which is responsible for providing responses to the queries submitted by toxicology lab Requestors. The complete list of FHIR profiles, RESTful operations, and search parameters supported by toxicology lab Servers are defined. toxicology lab Clients have the option of choosing from this list to access necessary data based on their local use cases and other contextual requirements."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[+] = #json
* messaging.supportedMessage
  * mode = #sender
  * definition = Canonical(MessageDefinition-toxicology-system)

---

// File: input/fsh/instances/CapabilityStatement-mdi-cms-server.fsh

Instance: CapabilityStatement-mdi-cms-server
InstanceOf: CapabilityStatement
Title: "CapabilityStatement - MDI CMS Server"
Description: "Description of expected minimum capabilities of an MDI CMS server, which is responsible for providing responses to the queries submitted by a client. Clients have the option of choosing from this list to access necessary data."
Usage: #definition
* name = "CapabilityStatementMdiCmsServer"
* title = "CapabilityStatement - MDI CMS Server"
* status = #active
* experimental = false
* date = "2022-07-03"
* description = "This resource describes expected capabilities of an MDI CMS Server which is responsible for providing responses to the queries submitted by a Client. It lists FHIR profiles and search parameters that, at a minimum, should be supported by MDI CMS Servers. MDI CMS Clients have the option of choosing from this list to access necessary data."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* rest[0]
  * mode = #server
  * insert SupportResource(Composition, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/mdi/StructureDefinition/Composition-mdi-and-edrs, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(subject, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-identifier, #token, #SHALL)
  * insert SupportSearchParam(patient, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-identifier, #token, #SHALL)
//  * insert SupportSearchParam(Composition.extension, http://hl7.org/fhir/us/mdi/SearchParameter/mdi-tracking-number-search, #token, #SHALL)
  * insert SupportOperation(operation-composition-document, https://hl7.org/fhir/operation-composition-document, #SHALL)
//     * searchParam[0]
//       * name = "subject"
//       * type = #reference
//       * documentation = "Who and/or what the composition is about"
//     * searchParam[+]
//       * name = "patient"
//       * type = #reference
//       * documentation = "Who and/or what the composition is about"
//     * operation
//       * name = "operation-composition-document"
//       * definition = "https://hl7.org/fhir/operation-composition-document"
//       * documentation = "A server should be capable of generating a bundled document from a composition resource with all the referenced resources and either returns a full document bundle, or returns an error."
// //    * fhir_comments = " Composition-mdi-and-edrs "
// NEW to allow search on tracking number (e.g., case ID)
//  * insert SupportResource(Extension, #SHALL)
//  * insert SupportProfile(http://hl7.http://hl7.org/fhir/us/mdi/StructureDefinition/Extension-tracking-number, #SHALL)
//  * insert SupportInteraction(#read, #SHALL)
//  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportResource(Patient, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(_id, http://hl7.org/fhir/SearchParameter/Resource-id, #token, #SHALL)
  * insert SupportSearchParam(birthdate, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-birthdate, #date, #SHALL)
  * insert SupportSearchParam(family, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-family, #string, #SHALL)
  * insert SupportSearchParam(given, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-given, #string, #SHALL)
  * insert SupportSearchParam(gender, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-gender, #token, #SHALL)
  * insert SupportSearchParam(name, http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-name, #string, #SHALL)
// * resource[+]
//     * type = #Patient
//     * supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
//     * interaction[0].code = #read
//     * interaction[+].code = #search-type
//     * searchParam[0]
//       * name = "_id"
//       * type = #token
//       * documentation = "The ID of the resource"
//     * searchParam[+]
//       * name = "birthdate"
//       * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-birthdate"
//       * type = #date
//       * documentation = "The patient's date of birth"
//     * searchParam[+]
//       * name = "family"
//       * type = #string
//       * documentation = "A portion of the family name of the patient"
//     * searchParam[+]
//       * name = "given"
//       * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-given"
//       * type = #string
//       * documentation = "A portion of the given name of the patient"
//     * searchParam[+]
//       * name = "gender"
//       * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-gender"
//       * type = #token
//       * documentation = "Gender of the patient"
//     * searchParam[+]
//       * name = "name"
//       * definition = "http://hl7.org/fhir/us/core/SearchParameter/us-core-patient-name"
//       * type = #string
//       * documentation = "A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text"
// //    * fhir_comments = " US Core Patient "
  * insert SupportResource(Location, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-location, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(address, http://hl7.org/fhir/us/core/SearchParameter/us-core-location-address, #string, #SHALL)

  * insert SupportResource(Observation, #SHALL)
  * insert SupportProfile(http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-date, #SHALL)
  * insert SupportInteraction(#read, #SHALL)
  * insert SupportInteraction(#search-type, #SHALL)
  * insert SupportSearchParam(date, http://hl7.org/fhir/us/core/SearchParameter/us-core-observation-date, #date, #SHALL)

//  * resource[+]
//    * type = #Location
//    * supportedProfile = Canonical(DeathLocation)
//    * interaction[0].code = #read
//    * interaction[+].code = #search-type
//    * searchParam
//      * name = "address"
//      * type = #string
//    * fhir_comments = " Location-death "
//  * resource[+]
//    * type = #Observation
//    * supportedProfile = Canonical(DeathDate)
//    * interaction[0].code = #read
//    * interaction[+].code = #search-type
//    * searchParam
//     * name = "date"
//      * type = #date
//    * fhir_comments = " Observation-death-date "
* rest[+]
  * mode = #client
  * resource
    * type = #Bundle
    * supportedProfile = Canonical(BundleDocumentMDIAndEDRS)
    * interaction.code = #read
//    * fhir_comments = "Returned Searchset Bundle "
* messaging.supportedMessage
  * mode = #receiver
  * definition = Canonical(MessageDefinition-toxicology-system)
* document[0]
  * mode = #producer
  * profile = Canonical(CompositionMDIAndEDRS)
* document[+]
  * mode = #consumer
  * profile = Canonical(CompositionMDIAndEDRS)

---

// File: input/fsh/instances/documentreference-mdi-autopsy-report-ex.fsh

Instance: documentreference-mdi-autopsy-report-ex
InstanceOf: DocumentReferenceMDIReport
Title: "DocumentReference - MDI Report - Autopsy Report example"
Description: "DocumentReference - MDI Report: Autopsy Report example"
Usage: #example
* status = #current
* docStatus = #final
* type = $loinc#18743-5 "Autopsy report"
* category = $us-core-documentreference-category#clinical-note "Clinical Note"
  * text = "Clinical Note"
* subject = Reference(us-core-patient-a-freeman)
* date = "2023-01-13T15:52:20.000+00:00"
* authenticator = Reference(us-core-practitioner-jm-lehz)
* content.attachment
  * contentType = #application/pdf
  * language = #en
  * data = "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6+VT838vnKXmbFMZpoZt81LYtPSvAAMAcyN6gg0KZW5kc3RyZWFtDWVuZG9iag0zIDAgb2JqDTw8L0xlbmd0aCAzOTgyL1N1YnR5cGUvWE1ML1R5cGUvTWV0YWRhdGE+PnN0cmVhbQ0KPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMmEwZDhkOSwgMjAyMy8wMy8xNC0xMToxOTo0NiAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iCiAgICAgICAgICAgIHhtbG5zOnBkZng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmeC8xLjMvIj4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjMtMDYtMTlUMTA6NDQ6NDQtMDQ6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMy0wNi0xOVQxMDo0NDo0My0wNDowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjMtMDYtMTlUMTA6NDQ6NDQtMDQ6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWNyb2JhdCBQREZNYWtlciAyMyBmb3IgV29yZDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD51dWlkOjU4NmUzYjc2LWJlMzgtNDIzNS04OGUxLTAzYTg2MWQzZGNiZDwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+dXVpZDo1ZjIzM2Q1OS03ZmE2LTRhNmMtYWVhZC02MTZkYzNhNzBhYzk8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpzdWJqZWN0PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaT4yPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpzdWJqZWN0PgogICAgICAgICA8ZGM6Zm9ybWF0PmFwcGxpY2F0aW9uL3BkZjwvZGM6Zm9ybWF0PgogICAgICAgICA8ZGM6dGl0bGU+CiAgICAgICAgICAgIDxyZGY6QWx0PgogICAgICAgICAgICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPkF1dG9wc3kgUmVwb3J0IC0gQUJDIExhYnMgLSBFeGFtcGxlPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAgPGRjOmRlc2NyaXB0aW9uPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ii8+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzpkZXNjcmlwdGlvbj4KICAgICAgICAgPGRjOmNyZWF0b3I+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpPkFCQyBMYWJzPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC9kYzpjcmVhdG9yPgogICAgICAgICA8cGRmOlByb2R1Y2VyPkFkb2JlIFBERiBMaWJyYXJ5IDIzLjEuMjA2PC9wZGY6UHJvZHVjZXI+CiAgICAgICAgIDxwZGY6S2V5d29yZHMvPgogICAgICAgICA8cGRmeDpTb3VyY2VNb2RpZmllZD5EOjIwMjMwNjE5MTQ0NDM1PC9wZGZ4OlNvdXJjZU1vZGlmaWVkPgogICAgICAgICA8cGRmeDpDb21wYW55PkFCQyBMYWJzPC9wZGZ4OkNvbXBhbnk+CiAgICAgICAgIDxwZGZ4OkNvbW1lbnRzLz4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pg0KZW5kc3RyZWFtDWVuZG9iag00IDAgb2JqDTw8L0ZpbHRlci9GbGF0ZURlY29kZS9GaXJzdCA1L0xlbmd0aCA1MC9OIDEvVHlwZS9PYmpTdG0+PnN0cmVhbQ0KaN6yMFEwULCx0XfOL80rUTDU985MKY62sAAKBsXqh1QWpOoHJKanFtvZAQQYAOlRC+4NCmVuZHN0cmVhbQ1lbmRvYmoNNSAwIG9iag08PC9GaWx0ZXIvRmxhdGVEZWNvZGUvRmlyc3QgNS9MZW5ndGggMjE4L04gMS9UeXBlL09ialN0bT4+c3RyZWFtDQpo3mzPwWqDQBAG4FeZW/SgrroJTZCA1fbSBEJT6HnXnZBNoyPjSuvbdy1tyKG3H2b4/pmHJQgoiqQc3Zk4KB8r2Ck9hElFbYudG4Kf2Ktuuh8yKmepq5XDoN5kIsvFKl2nQkqZR0IuhFj8bs1ow6SVg0P9vFcfyJDlcCKGd2ITJi84ffowF+3J/CfKm3hgMmODnjSkcQZhZzUrnrwZp3EmVmFypJEb9JY9WTT32Hzd0i+M+oKN84Vv1l0x8L9TP0zwij2xgwj+HvXx6Uu1/RXD7fZbgAEAeGZYhw0KZW5kc3RyZWFtDWVuZG9iag02IDAgb2JqDTw8L0RlY29kZVBhcm1zPDwvQ29sdW1ucyA1L1ByZWRpY3RvciAxMj4+L0ZpbHRlci9GbGF0ZURlY29kZS9JRFs8RjU0MTM3NDZBNEFFNTA0RDlBMUZEQzAxQTg1NTFENkM+PDRDQkIyM0VBMTlENTk3NDE5RjZDRUQ2RTk1Q0U0QTJEPl0vSW5mbyA4NSAwIFIvTGVuZ3RoIDYyL1Jvb3QgODcgMCBSL1NpemUgODYvVHlwZS9YUmVmL1dbMSAzIDFdPj5zdHJlYW0NCmjeYmIAASZGxvQiBiYgYwmIZNkJIgVug0jGPjBpDlTzv3ESiA3kUYdk/EJN00ZJUkmmg+BYYAAIMADb2wi0DQplbmRzdHJlYW0NZW5kb2JqDXN0YXJ0eHJlZg0KMTE2DQolJUVPRg0K"

---

// File: input/fsh/instances/documentreference-mdi-investigator-narrative-ex.fsh

Instance: documentreference-mdi-investigator-narrative-ex
InstanceOf: DocumentReferenceMDIReport
Title: "DocumentReference - MDI Report - Investigator's Narrative example"
Description: "DocumentReference - MDI Report: Investigator's Narrative example"
Usage: #example
* status = #current
* docStatus = #final
* type = $v3-NullFlavor#UNK "unknown"
//* category = $us-core-documentreference-category#clinical-note "Clinical Note"
//  * text = "Clinical Note"
//* category = $v3-NullFlavor#OTH "other"
* category = $loinc#47046-8 "Summary of death note"
//* category.text = "Investigator’s Narrative"
* subject = Reference(us-core-patient-a-freeman)
* date = "2023-01-13T15:52:20.000+00:00"
* authenticator = Reference(vr-practitioner-s-jones)
* content.attachment
  * contentType = #application/pdf
  * language = #en-US
  * url = "http://example.org/xds/mhd/Binary/07a6483f-732b-461e-86b6-edb665c45510"
  * title = "Url where the report can be found"

---

// File: input/fsh/instances/expansion-parameters-mdi.fsh

Instance: expansion-parameters-mdi
InstanceOf: Parameters
Title: "Parameters - SNOMED US Version"
Description: "Parameters - SNOMED US Version"
Usage: #example
* parameter[0]
  * name = "profile-url"
  * valueString = "dc8fd4bd-092a-424a-8a3b-6198ef136891"
* parameter[+]
  * name = "system-version"
  * valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

// File: input/fsh/instances/mdi-dc-freeman/bundle-mdi-and-edrs-a-freeman.fsh

Instance: bundle-mdi-and-edrs-a-freeman
InstanceOf: BundleDocumentMDIAndEDRS
Title: "Bundle - MDI and EDRS - Freeman"
Description: "Bundle - MDI and EDRS: Freeman example"
Usage: #example
* identifier
  * system = "urn:ietf:rfc:3986"
  * value = "urn:uuid:933dde44f7664b03a20b6324f23986c0"
* type = #document
* timestamp = "2022-01-04T08:51:14.637+00:00"
* insert addentry(Composition, composition-mdi-and-edrs-a-freeman)
* insert addentry(Observation, vrdr-injury-incident-a-freeman-med-ingest)
* insert addentry(Observation, vrdr-manner-of-death-a-freeman-accidental)
* insert addentry(Observation, observation-mdi-cause-of-death-part1-a-freeman)
* insert addentry(Observation, vrdr-cause-of-death-part2-a-freeman)
* insert addentry(Location,vrdr-death-location-atlanta-ga-a-freeman)
* insert addentry(Location,vrdr-injury-location-atlanta-ga-a-freeman)
* insert addentry(Patient, us-core-patient-a-freeman)
* insert addentry(Observation, vrdr-tobacco-use-a-freeman)
* insert addentry(Observation, vrdr-death-date-a-freeman)
* insert addentry(Practitioner, vr-practitioner-s-jones)
* insert addentry(Practitioner, us-core-practitioner-jm-lehz)
* insert addentry(Observation, vrdr-decedent-pregnancy-status-a-freeman)
* insert addentry(Procedure, vrdr-death-certification-a-freeman)



---

// File: input/fsh/instances/mdi-dc-freeman/composition-mdi-and-edrs-a-freeman-new.fsh

Instance: composition-mdi-and-edrs-a-freeman
InstanceOf: CompositionMDIAndEDRS
Title: "MDI and EDRS Composition - Freeman"
Description: "MDI and EDRS Composition: Freeman example"
Usage: #example
* extension[ExtensionTrackingNumber]
  * valueIdentifier
    * type = $v2-0203#BCT
    * value = "ME21-113"
* identifier.value = "a03eab8c-11e8-4d0c-ad2a-b385395e27de"
* status = #final
* type = $loinc#86807-5 "Death administrative information Document"
* subject = Reference(us-core-patient-a-freeman)
* date = "2022-02-20"
* author = Reference(vr-practitioner-s-jones)
* title = "MDI to EDRS Composition"
* attester
  * mode = #professional
  * party = Reference(vr-practitioner-s-jones)
* section[0]
  * title = "Additional Demographic Information Section"
  * code = MDIcodes#demographics
  * text
    * status = #additional
    * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>No additional demographic information</p></div>"
* section[+]
  * title = "Circumstances Section"
  * code = MDIcodes#circumstances
  * entry[0] = Reference(vrdr-death-location-atlanta-ga-a-freeman)
  * entry[+] = Reference(vrdr-tobacco-use-a-freeman)
  * entry[+] = Reference(vrdr-decedent-pregnancy-status-a-freeman)
  * entry[+] = Reference(vrdr-injury-location-atlanta-ga-a-freeman)
* section[+]
  * title = "Jurisdiction Section"
  * code = MDIcodes#jurisdiction
  * entry[0] = Reference(vrdr-death-date-a-freeman)
  * entry[+] = Reference(vrdr-death-certification-a-freeman)
* section[+]
  * title = "Cause and Manner of Death Section"
  * code = MDIcodes#cause-manner
  * entry[0] = Reference(observation-mdi-cause-of-death-part1-a-freeman)
  * entry[+] = Reference(vrdr-cause-of-death-part2-a-freeman)
  * entry[+] = Reference(vrdr-manner-of-death-a-freeman-accidental)
  * entry[+] = Reference(vrdr-injury-incident-a-freeman-med-ingest)
* section[+]
  * title = "Medical History Section"
  * code = MDIcodes#medical-history
  * text
    * status = #additional
    * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>No Medical History information</p></div>"
  * emptyReason = $list-empty-reason#unavailable "Unavailable"
    * text = "Decedent's medical history not available"


---

// File: input/fsh/instances/mdi-dc-freeman/composition-mdi-and-edrs-draft.fsh

Instance: composition-mdi-and-edrs-draft
InstanceOf: CompositionMDIAndEDRS
Title: "MDI and EDRS Composition - draft"
Description: "MDI and EDRS Composition: Draft example with status=preliminary, author & attester using data-absent-reason extension"
Usage: #example
* extension[ExtensionTrackingNumber]
  * valueIdentifier
    * type = $v2-0203#BCT
    * value = "ME21-113"
* identifier.value = "a03eab8c-11e8-4d0c-ad2a-b385395e27de"
* status = #preliminary
* type = $loinc#86807-5 "Death administrative information Document"
* subject.reference = "Patient/us-core-patient-a-freeman"
* date = "2022-02-20"
* author
  * extension
    * url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
    * valueCode = #temp-unknown
//    * fhir_comments = " When author is not yet set use data-absent-reason rather than <reference value=\"Practitioner/vr-practitioner-s-jones\"/>"
  * display = "Temporarily Unknown"
* title = "MDI and EDRS Composition"
* attester
  * mode = #professional
  * party
    * extension
      * url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
      * valueCode = #temp-unknown
//      * fhir_comments = " When attester is not yet set use data-absent-reason rather than <reference value=\"Practitioner/vr-practitioner-s-jones\"/>"
    * display = "Temporarily Unknown"
* section[0]
  * title = "Additional Demographic Information Section"
  * code = MDIcodes#demographics
  * text
    * status = #additional
    * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>No additional demographic information</p></div>"
* section[+]
  * title = "Circumstances Section"
  * code = MDIcodes#circumstances
  * entry[0].reference = "Location/vrdr-death-location-atlanta-ga-a-freeman"
  * entry[+].reference = "Observation/vrdr-tobacco-use-a-freeman"
  * entry[+].reference = "Observation/vrdr-decedent-pregnancy-status-a-freeman"
  * entry[+].reference = "Location/vrdr-injury-location-atlanta-ga-a-freeman"
* section[+]
  * title = "Jurisdiction Section"
  * code = MDIcodes#jurisdiction
  * entry[0].reference = "Observation/vrdr-death-date-a-freeman"
  * entry[+].reference = "Procedure/vrdr-death-certification-a-freeman"
* section[+]
  * title = "Cause and Manner of Death Section"
  * code = MDIcodes#cause-manner
  * entry[0].reference = "Observation/observation-mdi-cause-of-death-part1-a-freeman"
  * entry[+].reference = "Observation/vrdr-cause-of-death-part2-a-freeman"
  * entry[+].reference = "Observation/vrdr-manner-of-death-a-freeman-accidental"
  * entry[+].reference = "Observation/vrdr-injury-incident-a-freeman-med-ingest"
* section[+]
  * title = "Medical History Section"
  * code = MDIcodes#medical-history
  * text
    * status = #additional
    * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>No Medical History information</p></div>"
  * emptyReason = $list-empty-reason#unavailable "Unavailable"
    * text = "Decedent's medical history not available"

---

// File: input/fsh/instances/mdi-dc-freeman/observation-mdi-cause-of-death-part1-a-freeman.fsh

Instance: observation-mdi-cause-of-death-part1-a-freeman
InstanceOf: MDICauseOfDeathPart1
Title: "MDI Cause of Death Part 1 - Freeman"
Description: "MDI Cause of Death Part 1 (Observation): Freeman example, specifying interval string"
Usage: #example
* status = #final
* subject = Reference(us-core-patient-a-freeman)
* effectiveDateTime = "2022-01-08"
* performer = Reference(vr-practitioner-s-jones)
* valueCodeableConcept.text = "Fentanyl toxicity"
* component[lineNumber]
  * valueInteger = 1
* component[interval]
  * valueString = "minutes to hours"

---

// File: input/fsh/instances/mdi-dc-freeman/observation-mdi-cause-of-death-part1-freeman-quantity-interval.fsh

Instance: observation-mdi-cause-of-death-part1-freeman-quantity-interval
InstanceOf: MDICauseOfDeathPart1
Title: "MDI Cause of Death Part 1 - Freeman, quantity interval"
Description: "MDI Cause of Death Part 1 (Observation): Freeman example, specifying interval quantity"
Usage: #example
* status = #final
* code = $loinc#69453-9 "Cause of death [US Standard Certificate of Death]"
* subject = Reference(us-core-patient-a-freeman)
* effectiveDateTime = "2022-02-20"
* performer = Reference(vr-practitioner-s-jones)
* valueCodeableConcept.text = "Fentanyl toxicity"
* component[lineNumber]
  * valueInteger = 1
* component[interval]
  * valueQuantity
    * value = 3.5
    * unit = "hours"

---

// File: input/fsh/instances/mdi-dc-review/bundle-doc-mdi-dcr-ex1.fsh

Instance: bundle-doc-mdi-dcr-ex1
InstanceOf: BundleDocumentMDIDCR
Title: "Bundle - Document Death Certificate Review example"
Description: "Bundle - Document Death Certificate Review example"
Usage: #example
* identifier
  * system = "urn:ietf:rfc:3986"
  * value = "urn:uuid:933dde44f7664b03a20b6324f23986c0"
* type = #document
* timestamp = "2023-05-02T08:51:14.637+00:00"
* insert addentry(Composition, composition-mdi-dcr-ex1)
* insert addentry(Patient, vrdr-decedent-dcr-ex1)
* insert addentry(Organization, us-core-organization-ga-dph)
* insert addentry(RelatedPerson, vrdr-decedent-father-dcr-ex1)
* insert addentry(RelatedPerson, vrdr-decedent-mother-dcr-ex1)
* insert addentry(Observation, vrdr-decedent-age-dcr-ex1)
* insert addentry(Observation, vrdr-decedent-education-level-dcr-ex1)
* insert addentry(Observation, vrdr-decedent-military-service-dcr-ex1)
* insert addentry(Observation, vrdr-examiner-contacted-dcr-ex1)
* insert addentry(Observation, vrdr-decedent-pregnancy-status-dcr-ex1)
* insert addentry(Observation, vrdr-tobacco-use-dcr-ex1)
* insert addentry(Location, vrdr-death-location-dcr-ex1)
* insert addentry(Location, vrdr-injury-location-dcr-ex1)
* insert addentry(Observation, vrdr-injury-incident-dcr-ex1)
* insert addentry(Observation, vrdr-autopsy-performed-indicator-dcr-ex1)
* insert addentry(Observation, vrdr-death-date-dcr-ex1)
* insert addentry(Practitioner, vr-practitioner-ex1)
* insert addentry(Practitioner, us-core-practitioner-dcr-ex1)
* insert addentry(Procedure, vrdr-death-certification-dcr-ex1)
* insert addentry(Observation, vrdr-manner-of-death-dcr-ex1)
* insert addentry(Observation, vrdr-cause-of-death-part1-dcr-ex1)
* insert addentry(Observation, vrdr-cause-of-death-part2-dcr-ex1)
* insert addentry(Location, vrdr-disposition-location-dcr-ex1)
* insert addentry(Organization, vrdr-funeral-home-dcr-ex1)
* insert addentry(Observation, vrdr-decedent-disposition-method-dcr-ex1)
* insert addentry(Practitioner, vrdr-mortician-dcr-ex1)
* insert addentry(Practitioner, vrdr-certifier-dcr-ex1)

  

---

// File: input/fsh/instances/mdi-dc-review/bundle-msg-mdi-dcr-ex1.fsh

Instance: bundle-msg-mdi-dcr-ex1
InstanceOf: BundleMessageDCR
Title: "Bundle - Message Death Certificate Review example"
Description: "Bundle - Message Death Certificate Review example"
Usage: #example
* identifier
  * system = "urn:ietf:rfc:3986"
  * value = "urn:uuid:683dde44f7664b03a20b6324f23986d8"
* type = #message
* insert addentry(MessageHeader, messageheader-mdi-dcr-ex1)
* insert addentry(Bundle, bundle-doc-mdi-dcr-ex1)

---

// File: input/fsh/instances/mdi-dc-review/composition-mdi-ccr-ex3.fsh

Instance: composition-mdi-ccr-ex3
InstanceOf: CompositionMDIDCR
Usage: #example
Title: "Death Certificate Review example for cremation clearance request (example 3)"
Description: "Death Certificate Review for cremation clearance request"
*  extension[ExtensionCremationClearanceStatus].valueCodeableConcept = DeathCertReviewExample#CREM_C_REQUESTED "Requested"
*  extension[ExtensionMECertificationAffirmation].valueCodeableConcept = DeathCertReviewExample#ME_AFFIRM_CERTIFICATION_AFFIRMED "ME Certification Affirmation Affirmed"
*  extension[ExtensionCremationClearanceCoroner].valueCodeableConcept = $sct#385432009 "Not applicable"
*  extension[ExtensionCremationClearanceSignature].valueCodeableConcept = DeathCertReviewExample#CREM_C_UNSIGNED "Unsigned"
//
* status = #preliminary
* type = $loinc#86807-5 "Death administrative information Document"
* subject = Reference(vrdr-decedent-dcr-ex1)
* date = "2023-05-02"
* author = Reference(us-core-organization-ga-dph)
* title = "Composition - Cremation Clearance Request - Example"
//
* section[DecedentDemographics]
  * insert addNamedEntryComposition(Decedent, Patient, vrdr-decedent-dcr-ex1) 
  * insert addNamedEntryComposition(Father, RelatedPerson, vrdr-decedent-father-dcr-ex1) 
  * insert addNamedEntryComposition(Mother, RelatedPerson, vrdr-decedent-mother-dcr-ex1) 
  * insert addNamedEntryComposition(Age, Observation, vrdr-decedent-age-dcr-ex1) 
  * insert addNamedEntryComposition(EducationLevel, Observation, vrdr-decedent-education-level-dcr-ex1) 
  * insert addNamedEntryComposition(MilitaryService, Observation, vrdr-decedent-military-service-dcr-ex1) 
// Usual work creates error here. Review and add back after VRDR publishes in 2024 = vrdr-decedent-usual-work-dcr-ex1
//
* section[DeathInvestigation]
  * insert addNamedEntryComposition(ExaminerContacted, Observation, vrdr-examiner-contacted-dcr-ex1)
  * insert addNamedEntryComposition(PregnancyStatus, Observation, vrdr-decedent-pregnancy-status-dcr-ex1)
  * insert addNamedEntryComposition(TobaccoUse, Observation, vrdr-tobacco-use-dcr-ex1)
  * insert addNamedEntryComposition(DeathLocation, Location, vrdr-death-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryLocation, Location, vrdr-injury-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryIncident, Observation, vrdr-injury-incident-dcr-ex1)
  * insert addNamedEntryComposition(Autopsy, Observation, vrdr-autopsy-performed-indicator-dcr-ex1)
  * insert addNamedEntryComposition(DeathDate, Observation, vrdr-death-date-dcr-ex1)
//  Should decide on interested-party-ccr-ex1
//
* section[DeathCertification]
  * insert addNamedEntryComposition(Certifier, Practitioner, vrdr-certifier-dcr-ex1)
  * insert addNamedEntryComposition(DeathCertification, Procedure, vrdr-death-certification-dcr-ex1)
  * insert addNamedEntryComposition(MannerOfDeath, Observation, vrdr-manner-of-death-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, vrdr-cause-of-death-part1-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart2, Observation, vrdr-cause-of-death-part2-dcr-ex1)
//
* section[DecedentDisposition]
  * insert addNamedEntryComposition(DispositionLocation, Location, vrdr-disposition-location-dcr-ex1)
  * insert addNamedEntryComposition(FuneralHome, Organization, vrdr-funeral-home-dcr-ex1)
  * insert addNamedEntryComposition(DispositionMethod, Observation, vrdr-decedent-disposition-method-dcr-ex1)
  * insert addNamedEntryComposition(Mortician, Practitioner, vrdr-mortician-dcr-ex1)
// 
* section[Death-Certificate-data-review]
  * insert addNamedEntryComposition(med-info-quality-review, Observation, observation-medical-information-data-quality-ccr-ex1)
  * insert addNamedEntryComposition(personal-info-quality-review, Observation, observation-personal-information-data-quality-ccr-ex1)
//
* section[cremation-clearance-info]
  * insert addNamedEntryComposition(authorizing-agent, RelatedPerson, vrdr-decedent-father-dcr-ex1)
  * insert addNamedEntryComposition(embalmed, Observation, observation-embalmed-ccr-ex1)
  * insert addNamedEntryComposition(communicable-disease, Observation, observation-communicable-disease-ccr-ex1)
  * insert addNamedEntryComposition(cause-of-death-certifier, Practitioner, vrdr-certifier-dcr-ex1)
  * insert addNamedEntryComposition(funeral-home, Organization, vrdr-funeral-home-dcr-ex1)
  * insert addNamedEntryComposition(mortician, Practitioner, vrdr-mortician-dcr-ex1)


---

// File: input/fsh/instances/mdi-dc-review/composition-mdi-ccr-ex4.fsh

Instance: composition-mdi-ccr-ex4
InstanceOf: CompositionMDIDCR
Usage: #example
Title: "Death Certificate Review example for cremation clearance response (example 4)"
Description: "Death Certificate Review for cremation clearance response"
*  extension[ExtensionCremationClearanceStatus].valueCodeableConcept = DeathCertReviewExample#CREM_C_REQUESTED "Requested"
*  extension[ExtensionMECertificationAffirmation].valueCodeableConcept = DeathCertReviewExample#ME_AFFIRM_CERTIFICATION_AFFIRMED "ME Certification Affirmation Affirmed"
*  extension[ExtensionCremationClearanceCoroner].valueCodeableConcept = $sct#385432009 "Not applicable"
*  extension[ExtensionCremationClearanceSignature].valueCodeableConcept = DeathCertReviewExample#CREM_C_UNSIGNED "Unsigned"
//
* status = #preliminary
* type = $loinc#86807-5 "Death administrative information Document"
* subject = Reference(vrdr-decedent-dcr-ex1)
* date = "2023-05-02"
* author = Reference(us-core-organization-ga-dph)
* title = "Composition - Cremation Clearance Request - Example"
//
* section[DecedentDemographics]
  * insert addNamedEntryComposition(Decedent, Patient, vrdr-decedent-dcr-ex1) 
  * insert addNamedEntryComposition(Father, RelatedPerson, vrdr-decedent-father-dcr-ex1) 
  * insert addNamedEntryComposition(Mother, RelatedPerson, vrdr-decedent-mother-dcr-ex1) 
  * insert addNamedEntryComposition(Age, Observation, vrdr-decedent-age-dcr-ex1) 
  * insert addNamedEntryComposition(EducationLevel, Observation, vrdr-decedent-education-level-dcr-ex1) 
  * insert addNamedEntryComposition(MilitaryService, Observation, vrdr-decedent-military-service-dcr-ex1) 
// Usual work creates error here. Review and add back after VRDR publishes in 2024 = vrdr-decedent-usual-work-dcr-ex1
//
* section[DeathInvestigation]
  * insert addNamedEntryComposition(ExaminerContacted, Observation, vrdr-examiner-contacted-dcr-ex1)
  * insert addNamedEntryComposition(PregnancyStatus, Observation, vrdr-decedent-pregnancy-status-dcr-ex1)
  * insert addNamedEntryComposition(TobaccoUse, Observation, vrdr-tobacco-use-dcr-ex1)
  * insert addNamedEntryComposition(DeathLocation, Location, vrdr-death-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryLocation, Location, vrdr-injury-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryIncident, Observation, vrdr-injury-incident-dcr-ex1)
  * insert addNamedEntryComposition(Autopsy, Observation, vrdr-autopsy-performed-indicator-dcr-ex1)
  * insert addNamedEntryComposition(DeathDate, Observation, vrdr-death-date-dcr-ex1)
//  Should decide on interested-party-ccr-ex1
//
* section[DeathCertification]
  * insert addNamedEntryComposition(Certifier, Practitioner, vrdr-certifier-dcr-ex1)
  * insert addNamedEntryComposition(DeathCertification, Procedure, vrdr-death-certification-dcr-ex1)
  * insert addNamedEntryComposition(MannerOfDeath, Observation, vrdr-manner-of-death-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, vrdr-cause-of-death-part1-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart2, Observation, vrdr-cause-of-death-part2-dcr-ex1)
//
* section[DecedentDisposition]
  * insert addNamedEntryComposition(DispositionLocation, Location, vrdr-disposition-location-dcr-ex1)
  * insert addNamedEntryComposition(FuneralHome, Organization, vrdr-funeral-home-dcr-ex1)
  * insert addNamedEntryComposition(DispositionMethod, Observation, vrdr-decedent-disposition-method-dcr-ex1)
  * insert addNamedEntryComposition(Mortician, Practitioner, vrdr-mortician-dcr-ex1)
// 
* section[Death-Certificate-data-review]
  * insert addNamedEntryComposition(med-info-quality-review, Observation, observation-medical-information-data-quality-ccr-ex1)
  * insert addNamedEntryComposition(personal-info-quality-review, Observation, observation-personal-information-data-quality-ccr-ex1)
//
* section[cremation-clearance-info]
  * insert addNamedEntryComposition(authorizing-agent, RelatedPerson, vrdr-decedent-father-dcr-ex1)
  * insert addNamedEntryComposition(embalmed, Observation, observation-embalmed-ccr-ex1)
  * insert addNamedEntryComposition(communicable-disease, Observation, observation-communicable-disease-ccr-ex1)
  * insert addNamedEntryComposition(cause-of-death-certifier, Practitioner, vrdr-certifier-dcr-ex1)
  * insert addNamedEntryComposition(funeral-home, Organization, vrdr-funeral-home-dcr-ex1)
  * insert addNamedEntryComposition(mortician, Practitioner, vrdr-mortician-dcr-ex1)


---

// File: input/fsh/instances/mdi-dc-review/composition-mdi-dcr-ex1.fsh

Instance: composition-mdi-dcr-ex1
InstanceOf: CompositionMDIDCR
Usage: #example
Title: "Death Certificate Review example for death data review request (example 1)"
Description: "Death Certificate Review for death data review request"
* extension[ExtensionTrackingNumber]
  * valueIdentifier
    * type = $v2-0203#DCFN
    * value = "123456"
* extension[ExtensionDeathCertificateStatus]
  * extension[DCcertification].valueCodeableConcept = DeathCertReviewExample#DEATH_CERT_CERT "Certified"
  * extension[DCregistration].valueCodeableConcept = DeathCertReviewExample#DEATH_CERT_NOT_REG "Not Registered"
//*  extension[ExtensionCremationClearanceStatus].valueCodeableConcept = DeathCertReviewExample#CREM_C_REQUESTED "Requested"
//*  extension[ExtensionMECertificationAffirmation].valueCodeableConcept = DeathCertReviewExample#ME_AFFIRM_CERTIFICATION_AFFIRMED "ME Certification Affirmation Affirmed"
//*  extension[ExtensionCremationClearanceCoroner].valueCodeableConcept = $sct#385432009 "Not applicable"
//*  extension[ExtensionCremationClearanceSignature].valueCodeableConcept = DeathCertReviewExample#CREM_C_UNSIGNED "Unsigned"
//
* status = #final
* type = $loinc#86807-5 "Death administrative information Document"
* subject = Reference(vrdr-decedent-dcr-ex1)
* date = "2023-05-02"
* author = Reference(us-core-organization-ga-dph)
* title = "Death Certificate Review request for death data quality"
//
* section[DecedentDemographics]
  * insert addNamedEntryComposition(Decedent, Patient, vrdr-decedent-dcr-ex1) 
  * insert addNamedEntryComposition(Father, RelatedPerson, vrdr-decedent-father-dcr-ex1) 
  * insert addNamedEntryComposition(Mother, RelatedPerson, vrdr-decedent-mother-dcr-ex1) 
  * insert addNamedEntryComposition(Age, Observation, vrdr-decedent-age-dcr-ex1) 
  * insert addNamedEntryComposition(EducationLevel, Observation, vrdr-decedent-education-level-dcr-ex1) 
  * insert addNamedEntryComposition(MilitaryService, Observation, vrdr-decedent-military-service-dcr-ex1) 
// Usual work creates error here. Review and add back after VRDR publishes in 2024 = vrdr-decedent-usual-work-dcr-ex1
//
* section[DeathInvestigation]
  * insert addNamedEntryComposition(ExaminerContacted, Observation, vrdr-examiner-contacted-dcr-ex1)
  * insert addNamedEntryComposition(PregnancyStatus, Observation, vrdr-decedent-pregnancy-status-dcr-ex1)
  * insert addNamedEntryComposition(TobaccoUse, Observation, vrdr-tobacco-use-dcr-ex1)
  * insert addNamedEntryComposition(DeathLocation, Location, vrdr-death-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryLocation, Location, vrdr-injury-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryIncident, Observation, vrdr-injury-incident-dcr-ex1)
  * insert addNamedEntryComposition(Autopsy, Observation, vrdr-autopsy-performed-indicator-dcr-ex1)
  * insert addNamedEntryComposition(DeathDate, Observation, vrdr-death-date-dcr-ex1)
//  * insert addentry(Practitioner, us-core-practitioner-dcr-ex1)
//  Should decide on interested-party-ccr-ex1
//
* section[DeathCertification]
  * insert addNamedEntryComposition(Certifier, Practitioner, vr-practitioner-ex1)
  * insert addNamedEntryComposition(DeathCertification, Procedure, vrdr-death-certification-dcr-ex1)
  * insert addNamedEntryComposition(MannerOfDeath, Observation, vrdr-manner-of-death-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, vrdr-cause-of-death-part1-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart2, Observation, vrdr-cause-of-death-part2-dcr-ex1)
//
* section[DecedentDisposition]
  * insert addNamedEntryComposition(DispositionLocation, Location, vrdr-disposition-location-dcr-ex1)
  * insert addNamedEntryComposition(FuneralHome, Organization, vrdr-funeral-home-dcr-ex1)
  * insert addNamedEntryComposition(DispositionMethod, Observation, vrdr-decedent-disposition-method-dcr-ex1)
  * insert addNamedEntryComposition(Mortician, Practitioner, vrdr-mortician-dcr-ex1)
// 
//* section[Death-Certificate-data-review]
//  * insert addNamedEntryComposition(med-info-quality-review, Observation, observation-medical-information-data-quality-ccr-ex1)
//  * insert addNamedEntryComposition(personal-info-quality-review, Observation, observation-personal-information-data-quality-ccr-ex1)
//
//* section[cremation-clearance-info]
//  * insert addNamedEntryComposition(authorizing-agent, RelatedPerson, vrdr-decedent-father-dcr-ex1)
//  * insert addNamedEntryComposition(embalmed, Observation, observation-embalmed-ccr-ex1)
//  * insert addNamedEntryComposition(communicable-disease, Observation, observation-communicable-disease-ccr-ex1)
//  * insert addNamedEntryComposition(cause-of-death-certifier, Practitioner, vrdr-certifier-dcr-ex1)
//  * insert addNamedEntryComposition(funeral-home, Organization, vrdr-funeral-home-dcr-ex1)
//  * insert addNamedEntryComposition(mortician, Practitioner, vrdr-mortician-dcr-ex1)


---

// File: input/fsh/instances/mdi-dc-review/composition-mdi-dcr-ex2.fsh

Instance: composition-mdi-dcr-ex2
InstanceOf: CompositionMDIDCR
Usage: #example
Title: "Death Certificate Review example for death data review response (example 2)"
Description: "Death Certificate Review for death data review response"
* extension[ExtensionTrackingNumber]
  * valueIdentifier
    * type = $v2-0203#DCFN
    * value = "123456"
// Add extension-death-certificate-status
//*  extension[ExtensionCremationClearanceStatus].valueCodeableConcept = DeathCertReviewExample#CREM_C_REQUESTED "Requested"
//*  extension[ExtensionMECertificationAffirmation].valueCodeableConcept = DeathCertReviewExample#ME_AFFIRM_CERTIFICATION_AFFIRMED "ME Certification Affirmation Affirmed"
//*  extension[ExtensionCremationClearanceCoroner].valueCodeableConcept = $sct#385432009 "Not applicable"
//*  extension[ExtensionCremationClearanceSignature].valueCodeableConcept = DeathCertReviewExample#CREM_C_UNSIGNED "Unsigned"
//
* status = #final
* type = $loinc#86807-5 "Death administrative information Document"
* subject = Reference(vrdr-decedent-dcr-ex1)
* date = "2023-05-02"
* author = Reference(us-core-organization-ga-dph)
* title = "Death Certificate Review response about death data quality"
//
* section[DecedentDemographics]
  * insert addNamedEntryComposition(Decedent, Patient, vrdr-decedent-dcr-ex1) 
  * insert addNamedEntryComposition(Father, RelatedPerson, vrdr-decedent-father-dcr-ex1) 
  * insert addNamedEntryComposition(Mother, RelatedPerson, vrdr-decedent-mother-dcr-ex1) 
  * insert addNamedEntryComposition(Age, Observation, vrdr-decedent-age-dcr-ex1) 
  * insert addNamedEntryComposition(EducationLevel, Observation, vrdr-decedent-education-level-dcr-ex1) 
  * insert addNamedEntryComposition(MilitaryService, Observation, vrdr-decedent-military-service-dcr-ex1) 
// Usual work creates error here. Review and add back after VRDR publishes in 2024 = vrdr-decedent-usual-work-dcr-ex1
//
* section[DeathInvestigation]
  * insert addNamedEntryComposition(ExaminerContacted, Observation, vrdr-examiner-contacted-dcr-ex1)
  * insert addNamedEntryComposition(PregnancyStatus, Observation, vrdr-decedent-pregnancy-status-dcr-ex1)
  * insert addNamedEntryComposition(TobaccoUse, Observation, vrdr-tobacco-use-dcr-ex1)
  * insert addNamedEntryComposition(DeathLocation, Location, vrdr-death-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryLocation, Location, vrdr-injury-location-dcr-ex1)
  * insert addNamedEntryComposition(InjuryIncident, Observation, vrdr-injury-incident-dcr-ex1)
  * insert addNamedEntryComposition(Autopsy, Observation, vrdr-autopsy-performed-indicator-dcr-ex1)
  * insert addNamedEntryComposition(DeathDate, Observation, vrdr-death-date-dcr-ex1)
//  Should decide on interested-party-ccr-ex1
//
* section[DeathCertification]
  * insert addNamedEntryComposition(Certifier, Practitioner, vrdr-certifier-dcr-ex1)
  * insert addNamedEntryComposition(DeathCertification, Procedure, vrdr-death-certification-dcr-ex1)
  * insert addNamedEntryComposition(MannerOfDeath, Observation, vrdr-manner-of-death-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart1, Observation, vrdr-cause-of-death-part1-dcr-ex1)
  * insert addNamedEntryComposition(CauseOfDeathPart2, Observation, vrdr-cause-of-death-part2-dcr-ex1)
//
* section[DecedentDisposition]
  * insert addNamedEntryComposition(DispositionLocation, Location, vrdr-disposition-location-dcr-ex1)
  * insert addNamedEntryComposition(FuneralHome, Organization, vrdr-funeral-home-dcr-ex1)
  * insert addNamedEntryComposition(DispositionMethod, Observation, vrdr-decedent-disposition-method-dcr-ex1)
  * insert addNamedEntryComposition(Mortician, Practitioner, vrdr-mortician-dcr-ex1)
// 
* section[Death-Certificate-data-review]
  * insert addNamedEntryComposition(med-info-quality-review, Observation, observation-medical-information-data-quality-ccr-ex1)
  * insert addNamedEntryComposition(personal-info-quality-review, Observation, observation-personal-information-data-quality-ccr-ex1)
//
//* section[cremation-clearance-info]
//  * insert addNamedEntryComposition(authorizing-agent, RelatedPerson, vrdr-decedent-father-dcr-ex1)
//  * insert addNamedEntryComposition(embalmed, Observation, observation-embalmed-ccr-ex1)
//  * insert addNamedEntryComposition(communicable-disease, Observation, observation-communicable-disease-ccr-ex1)
//  * insert addNamedEntryComposition(cause-of-death-certifier, Practitioner, vrdr-certifier-dcr-ex1)
//  * insert addNamedEntryComposition(funeral-home, Organization, vrdr-funeral-home-dcr-ex1)
//  * insert addNamedEntryComposition(mortician, Practitioner, vrdr-mortician-dcr-ex1)


---

// File: input/fsh/instances/mdi-dc-review/messageheader-mdi-dcr-ex1.fsh

Instance: messageheader-mdi-dcr-ex1
InstanceOf: MessageHeaderDCR
Title: "MessageHeader - Death Certificate Review example"
Description: "MessageHeader - Death Certificate Review example"
Usage: #example
* eventCoding = MDIcodes#death-certificate-review
* source
  * name = "State VRO"
  * software = "EDRS"
  * version = "1.2.3.4.5"
//  * contact
//    * system = #phone
//    * value = "+1 (555) 123 4567"
  * endpoint = "http://edrs-example.org/fhir/endpoint/1"
* reason = DeathCertReviewExample#CREM_C_REQUEST "Cremation Clearance Request"
//* response
//  * identifier = "5015fe84-8e76-4526-89d8-44b322e8d4fb"
//  * code = #ok
* focus = Reference(bundle-doc-mdi-dcr-ex1)

---

// File: input/fsh/instances/mdi-dc-review/observation-communicable-disease-ccr-ex1.fsh

Instance: observation-communicable-disease-ccr-ex1
InstanceOf: ObservationCommunicableDisease
Title: "Observation - Communicable Disease example"
Description: "Observation - Communicable Disease example"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-communicable-disease"
* status = #final
// * code = DeathCertReviewExample#CommunicableDisease "Communicable Disease Observation"
* subject = Reference(vrdr-decedent-dcr-ex1)
* effectiveDateTime = "2023-05-02"
* performer = Reference(us-core-organization-ga-dph)
* valueBoolean = false

---

// File: input/fsh/instances/mdi-dc-review/observation-embalmed-ccr-ex1.fsh

Instance: observation-embalmed-ccr-ex1
InstanceOf: ObservationEmbalmed
Title: "Observation - Embalmed example"
Description: "Observation - Embalmed example"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-embalmed"
* status = #final
// * code = DeathCertReviewExample#Embalmed "Embalmed Observation"
* subject = Reference(vrdr-decedent-dcr-ex1)
* effectiveDateTime = "2023-05-02"
* performer = Reference(us-core-organization-ga-dph)
* valueCodeableConcept = $sct#373067005 "No"
* valueCodeableConcept.text = "No"

---

// File: input/fsh/instances/mdi-dc-review/observation-medical-information-data-quality-ccr-ex1.fsh

Instance: observation-medical-information-data-quality-ccr-ex1
InstanceOf: ObservationMedicalInformationDataQuality
Title: "Observation - Medical Information Data Quality example"
Description: "Observation - Medical Information Data Quality example"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-medical-information-data-quality"
* status = #preliminary
// * code = DeathCertReviewExample#MedicalInformationDataQuality "Medical Information Data Quality Observation"
* subject = Reference(vrdr-decedent-dcr-ex1)
* focus = Reference(vrdr-death-certificate-dcr-ex1)
* effectiveDateTime = "2023-05-02"
* performer = Reference(us-core-organization-dcr-ex1)
* valueCodeableConcept = DeathCertReviewExample#MED_INF_DQ_MEDICAL_VALID_WITH_EXCEPTIONS "Medical Data Valid With Exceptions"
* valueCodeableConcept.text = "Medical Data Valid With Exceptions"

---

// File: input/fsh/instances/mdi-dc-review/observation-personal-information-data-quality-ccr-ex1.fsh

Instance: observation-personal-information-data-quality-ccr-ex1
InstanceOf: ObservationPersonalInformationDataQuality
Title: "Observation - Personal Information Data Quality example"
Description: "Observation - Personal Information Data Quality example"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mdi/StructureDefinition/Observation-personal-information-data-quality"
* status = #preliminary
// * code = DeathCertReviewExample#PersonalInformationDataQuality "Personal Information Data Quality Observation"
* subject = Reference(vrdr-decedent-dcr-ex1)
* focus = Reference(vrdr-death-certificate-dcr-ex1)
* effectiveDateTime = "2023-05-02"
* performer = Reference(us-core-organization-dcr-ex1)
* valueCodeableConcept = DeathCertReviewExample#PER_INF_DQ_PERSONAL_INVALID "Personal Invalid"
* valueCodeableConcept.text = "Personal Invalid"

---

// File: input/fsh/instances/mdi-dc-review/organization-crematorium-ex1.fsh

Instance: organization-crematorium-ex1
InstanceOf: OrganizationCrematorium
Title: "Organization – Crematorium example"
Description: "Organization - Crematorium example"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mdi/StructureDefinition/Organization-crematorium"
* identifier.system = "http://Tahoe.Web/Insurity.Tahoe.Organization.Entity.BusinessUnitCode"
* identifier.value = "State Crematorium"
* active = true
* name = "State Crematorium"
* address.line = "100 Industrial Road"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "100"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Industrial"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetNameType"
* address.line.extension[=].valueString = "Road"
* address.city = "BARRETT"
* address.state = "GA"
* address.country = "US"

---

// File: input/fsh/instances/mdi-tox-freeman/bundle-mdi-tox-report-message-a-freeman.fsh

Instance: bundle-mdi-tox-report-message-a-freeman
InstanceOf: BundleMessageToxToMDI
Title: "Bundle - Message Toxicology to MDI - Freeman"
Description: "Bundle - Message Toxicology to MDI:  Freeman example"
Usage: #example
* identifier
  * system = "urn:ietf:rfc:3986"
  * value = "urn:uuid:683dde44f7664b03a20b6324f23986d9"
* type = #message
* entry[0]
  * fullUrl = "https://www.forensic-investigation-agency.org/MessageHeader/messageheader-mdi-tox-result-report-a-freeman"
  * resource = messageheader-mdi-tox-result-report-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/DiagnosticReport/diagnosticreport-mdi-toxicology-lab-a-freeman"
  * resource = diagnosticreport-mdi-toxicology-lab-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Patient/us-core-patient-a-freeman"
  * resource = us-core-patient-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Organization/us-core-organization-tox-lab"
  * resource = us-core-organization-tox-lab
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Practitioner/us-core-practitioner-b-goldberger"
  * resource = us-core-practitioner-b-goldberger
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Specimen/specimen-blood-toxicology-a-freeman"
  * resource = specimen-blood-toxicology-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Specimen/specimen-urine-toxicology-a-freeman"
  * resource = specimen-urine-toxicology-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Specimen/specimen-vitreous-humor-toxicology-a-freeman"
  * resource = specimen-vitreous-humor-toxicology-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Specimen/specimen-bile-toxicology-a-freeman"
  * resource = specimen-bile-toxicology-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Specimen/specimen-liver-toxicology-a-freeman"
  * resource = specimen-liver-toxicology-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Specimen/specimen-stomach-contents-toxicology-a-freeman"
  * resource = specimen-stomach-contents-toxicology-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-etoh-gas-chromatography-blood-a-freeman"
  * resource = us-core-lab-result-etoh-gas-chromatography-blood-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-4-anpp-blood-a-freeman"
  * resource = us-core-lab-result-4-anpp-blood-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-acetylfentanyl-blood-a-freeman"
  * resource = us-core-lab-result-acetylfentanyl-blood-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-fentanyl-blood-a-freeman"
  * resource = us-core-lab-result-fentanyl-blood-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-etoh-gas-chromatography-urine-a-freeman"
  * resource = us-core-lab-result-etoh-gas-chromatography-urine-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-4-anpp-urine-a-freeman"
  * resource = us-core-lab-result-4-anpp-urine-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-acetylfentanyl-urine-a-freeman"
  * resource = us-core-lab-result-acetylfentanyl-urine-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-fentanyl-urine-a-freeman"
  * resource = us-core-lab-result-fentanyl-urine-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-norfentanyl-urine-a-freeman"
  * resource = us-core-lab-result-norfentanyl-urine-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-xylazine-urine-a-freeman"
  * resource = us-core-lab-result-xylazine-urine-a-freeman
* entry[+]
  * fullUrl = "https://www.forensic-investigation-agency.org/Observation/us-core-lab-result-etoh-gas-chromatography-vit-humor-a-freeman"
  * resource = us-core-lab-result-etoh-gas-chromatography-vit-humor-a-freeman

---

// File: input/fsh/instances/mdi-tox-freeman/diagnosticreport-mdi-toxicology-lab-a-freeman.fsh

Instance: diagnosticreport-mdi-toxicology-lab-a-freeman
InstanceOf: DiagnosticReportToxicologyToMDI
Title: "DiagnosticReport - Toxicology Lab Result to MDI - Freeman"
Description: "DiagnosticReport - Toxicology Lab Result to MDI: Freeman example"
Usage: #example
* extension[Extension-tracking-number]
  * valueIdentifier
    * system = "http://florida-investigation-agncy.org/fhir/agency-case-numbers"
    * value = "ME21-111"
* identifier
  * type = MDIcodes#tox-lab-case-number
  * system = "http://uf-path-labs.org/fhir/lab-cases"
  * value = "R21-01578"
  * assigner = Reference(us-core-organization-tox-lab)
* status = #final
// * category = $v2-0074#LAB "Laboratory"
* code = $loinc#81273-5 "fentaNYL and Norfentanyl panel - Specimen"
* subject = Reference(us-core-patient-a-freeman) 
  * display = "Alice J. Freeman"
* effectiveDateTime = "2021-12-03T11:00:00Z"
* issued = "2022-01-05T11:00:00Z"
* performer = Reference(us-core-practitioner-b-goldberger)
* specimen[0] = Reference(specimen-blood-toxicology-a-freeman)
* specimen[+] = Reference(specimen-urine-toxicology-a-freeman)
* specimen[+] = Reference(specimen-vitreous-humor-toxicology-a-freeman)
* specimen[+] = Reference(specimen-bile-toxicology-a-freeman)
* specimen[+] = Reference(specimen-liver-toxicology-a-freeman)
* specimen[+] = Reference(specimen-stomach-contents-toxicology-a-freeman)
* result[0] = Reference(us-core-lab-result-etoh-gas-chromatography-blood-a-freeman)
  * display = "ETOH BLOOD: 0.145 g/dL"
* result[+] = Reference(us-core-lab-result-4-anpp-blood-a-freeman)
  * display = "4-ANPP: POSITIVE"
* result[+] = Reference(us-core-lab-result-acetylfentanyl-blood-a-freeman)
  * display = "ACETYLFENTANYL: 2 ng/mL"
* result[+] = Reference(us-core-lab-result-fentanyl-blood-a-freeman)
  * display = "FENTANYL: 23 ng/mL"
* result[+] = Reference(us-core-lab-result-etoh-gas-chromatography-urine-a-freeman)
  * display = "ETOH URINE: 0.160 g/dL"
* result[+] = Reference(us-core-lab-result-4-anpp-urine-a-freeman)
  * display = "4-ANPP: POSITIVE"
* result[+] = Reference(us-core-lab-result-acetylfentanyl-urine-a-freeman)
  * display = "ACETYLFENTANYL: POSITIVE"
* result[+] = Reference(us-core-lab-result-fentanyl-urine-a-freeman)
  * display = "FENTANYL: POSITIVE"
* result[+] = Reference(us-core-lab-result-norfentanyl-urine-a-freeman)
  * display = "NORFENTANYL: POSITIVE"
* result[+] = Reference(us-core-lab-result-xylazine-urine-a-freeman)
  * display = "XYLAZINE: POSITIVE"
* result[+] = Reference(us-core-lab-result-etoh-gas-chromatography-vit-humor-a-freeman)
  * display = "ETOH VITREOUS HUMOR: 0.133 g/dL"
* conclusion = "Samples of bile, liver, and stomach contents were contaminated and not analyzed."

---

// File: input/fsh/instances/mdi-tox-freeman/MessageDefinition-toxicology-system.fsh

Instance: MessageDefinition-toxicology-system
InstanceOf: MessageDefinition
Title: "MessageDefinition - Toxicology System"
Description: "Characteristics of a message that can be shared between a forensic toxicology system and a medical examiner/coroner MDI CMS."
Usage: #example
* status = #active
* experimental = false
* date = "2022-07-09"
* eventCoding = MDIcodes#tox-result-report
* category = #notification

---

// File: input/fsh/instances/mdi-tox-freeman/messageheader-mdi-tox-result-report-a-freeman.fsh

Instance: messageheader-mdi-tox-result-report-a-freeman
InstanceOf: MessageHeaderToxicologyToMDI
Title: "MessageHeader - Toxicology to MDI - Freeman"
Description: "MessageHeader - Toxicology to MDI: Freeman example"
Usage: #example
* eventCoding = MDIcodes#tox-result-report
* source
  * name = "University of Florida Pathology Labs, Forensic Toxicology Laboratory"
  * software = "MDI Log"
  * version = "1.2.3.4.5"
  * contact
    * system = #phone
    * value = "+1 (555) 123 4567"
  * endpoint = "http://mdi-log.org/fhir/endpoint/1"
* response
  * identifier = "5015fe84-8e76-4526-89d8-44b322e8d4fb"
  * code = #ok
* focus = Reference(diagnosticreport-mdi-toxicology-lab-a-freeman)

---

// File: input/fsh/instances/mdi-tox-freeman/specimen-bile-toxicology-a-freeman.fsh

Instance: specimen-bile-toxicology-a-freeman
InstanceOf: SpecimenToxicologyLab
Title: "Specimen - Toxicology Lab - Freeman Bile"
Description: "Specimen - Toxicology Lab: Freeman bile example"
Usage: #example
* accessionIdentifier
  * system = "http://lab.acme.org/specimens/2021"
  * value = "OO352356"
* status = #available
* type = $sct#119341000 "Bile specimen (specimen)"
  * text = "Bile specimen (specimen)"
* subject.reference = "Patient/us-core-patient-a-freeman"
* receivedTime = "2021-12-03T16:00:00Z"
* container
  * description = "3mL sample of bile specimen"
  * specimenQuantity
    * value = 3
    * unit = "ml"

---

// File: input/fsh/instances/mdi-tox-freeman/specimen-blood-toxicology-a-freeman.fsh

Instance: specimen-blood-toxicology-a-freeman
InstanceOf: SpecimenToxicologyLab
Title: "Specimen - Toxicology Lab - Freeman Blood"
Description: "Specimen - Toxicology Lab: Freeman blood examples"
Usage: #example
* accessionIdentifier
  * system = "http://lab.acme.org/specimens/2021"
  * value = "X352356"
* status = #available
* type = $sct#258580003 "Whole blood sample"
  * text = "Whole blood sample"
* subject.reference = "Patient/us-core-patient-a-freeman"
* receivedTime = "2021-12-03T16:00:00Z"
* collection
  * collectedDateTime = "2021-12-03T11:00:00Z"
  * bodySite = $sct#83419000 "Femoral vein structure (body structure)"
* container
  * description = "10mL GT tube"
  * type = $sct#702287009 "Non-evacuated blood collection tube, potassium oxalate/sodium fluoride (physical object)"
    * text = "GT tube"
  * specimenQuantity
    * value = 20
    * unit = "ml"

---

// File: input/fsh/instances/mdi-tox-freeman/specimen-liver-toxicology-a-freeman.fsh

Instance: specimen-liver-toxicology-a-freeman
InstanceOf: SpecimenToxicologyLab
Title: "Specimen - Toxicology Lab - Freeman Liver"
Description: "Specimen - Toxicology Lab: Freeman liver example"
Usage: #example
* meta
  * versionId = "6"
  * lastUpdated = "2022-08-16T00:58:14.624+00:00"
  * source = "#IbInZlV93F4o3XXB"
* accessionIdentifier
  * system = "http://lab.acme.org/specimens/2021"
  * value = "DD352356"
* status = #available
* type = $sct#128168004 "Tissue specimen from liver (specimen)"
  * text = "Tissue specimen from liver (specimen)"
* subject.reference = "Patient/us-core-patient-a-freeman"
* receivedTime = "2021-12-03T16:00:00Z"
* container
  * description = "5mL sample of liver specimen"
  * specimenQuantity
    * value = 5
    * unit = "ml"

---

// File: input/fsh/instances/mdi-tox-freeman/specimen-stomach-contents-toxicology-a-freeman.fsh

Instance: specimen-stomach-contents-toxicology-a-freeman
InstanceOf: SpecimenToxicologyLab
Title: "Specimen - Toxicology Lab - Freeman Stomach Contents"
Description: "Specimen - Toxicology Lab: Freeman stomach contents example"
Usage: #example
* meta
  * versionId = "6"
  * lastUpdated = "2022-08-16T00:58:14.623+00:00"
  * source = "#r9ZzhRg7oy7Ffv52"
* accessionIdentifier
  * system = "http://lab.acme.org/specimens/2021"
  * value = "MM352356"
* status = #available
* type = $sct#119379005 "Specimen from stomach (specimen)"
  * text = "Specimen from stomach (specimen)"
* subject.reference = "Patient/us-core-patient-a-freeman"
* receivedTime = "2021-12-03T16:00:00Z"
* container
  * description = "60mL sample of stomach contents specimen"
  * specimenQuantity
    * value = 60
    * unit = "ml"

---

// File: input/fsh/instances/mdi-tox-freeman/specimen-urine-toxicology-a-freeman.fsh

Instance: specimen-urine-toxicology-a-freeman
InstanceOf: SpecimenToxicologyLab
Title: "Specimen - Toxicology Lab - Freeman Urine"
Description: "Specimen - Toxicology Lab: Freeman urine example"
Usage: #example
* meta
  * versionId = "6"
  * lastUpdated = "2022-08-16T00:58:14.623+00:00"
  * source = "#eZxANbiIGlreQv8w"
* accessionIdentifier
  * system = "http://lab.acme.org/specimens/2021"
  * value = "ZZZ352356"
* status = #available
* type = $sct#122575003 "Urine specimen (specimen)"
  * text = "Urine specimen (specimen)"
* subject.reference = "Patient/us-core-patient-a-freeman"
* receivedTime = "2021-12-03T16:00:00Z"
* collection.collectedDateTime = "2021-12-03T11:00:00Z"
* container
  * description = "10mL RT tube"
  * specimenQuantity
    * value = 5
    * unit = "ml"

---

// File: input/fsh/instances/mdi-tox-freeman/specimen-vitreous-humor-toxicology-a-freeman.fsh

Instance: specimen-vitreous-humor-toxicology-a-freeman
InstanceOf: SpecimenToxicologyLab
Title: "Specimen - Toxicology Lab - Freeman Vitreous Humor"
Description: "Specimen - Toxicology Lab: Freeman vitreous humor example"
Usage: #example
* meta
  * versionId = "10"
  * lastUpdated = "2022-08-16T00:58:14.624+00:00"
  * source = "#GcjfAjz04u7pzXAX"
* accessionIdentifier
  * system = "http://lab.acme.org/specimens/2021"
  * value = "XXX352356"
* status = #available
* type = $sct#258438000 "Vitreous humor sample"
  * text = "Vitreous humor sample"
* subject.reference = "Patient/us-core-patient-a-freeman"
* receivedTime = "2021-12-03T16:00:00Z"
* collection.collectedDateTime = "2021-12-03T11:00:00Z"
* container
  * description = "10mL RT tube"
  * specimenQuantity
    * value = 3
    * unit = "ml"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-4-anpp-blood-a-freeman.fsh

Instance: us-core-lab-result-4-anpp-blood-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - 4-anpp Blood Freeman"
Description: "Observation - Toxicology Lab Result:  4-anpp Blood Freeman example"
Usage: #example
* status = #final
* code = $loinc#11072-6 "Despropionylfentanyl [Mass/volume] in Serum or Plasma"
  * text = "Despropionylfentanyl [Mass/volume] in Serum or Plasma"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "true"
* specimen.reference = "Specimen/specimen-blood-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-4-anpp-urine-a-freeman.fsh

Instance: us-core-lab-result-4-anpp-urine-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - 4-anpp Urine Freeman"
Description: "Observation - Toxicology Lab Result: 4-anpp Urine Freeman example"
Usage: #example
* status = #final
* code = $loinc#11072-6 "Despropionylfentanyl [Mass/volume] in Serum or Plasma"
  * text = "Despropionylfentanyl [Mass/volume] in Serum or Plasma"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "true"
* specimen.reference = "Specimen/specimen-urine-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-acetylfentanyl-blood-a-freeman.fsh

Instance: us-core-lab-result-acetylfentanyl-blood-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Acetylfentanyl Blood Freeman"
Description: "Observation - Toxicology Lab Result: Acetylfentanyl Blood Freeman example"
Usage: #example
* status = #final
* code = $loinc#86223-5 "Acetyl norfentanyl [Mass/volume] in Serum, Plasma or Blood by Confirmatory method"
  * text = "Acetyl norfentanyl [Mass/volume] in Serum, Plasma or Blood by Confirmatory method"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "2 ng/ml"
* specimen.reference = "Specimen/specimen-blood-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-acetylfentanyl-urine-a-freeman.fsh

Instance: us-core-lab-result-acetylfentanyl-urine-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Acetylfentanyl Urine Freeman"
Description: "Observation - Toxicology Lab Result: Acetylfentanyl Urine Freeman example"
Usage: #example
* status = #final
* code = $loinc#74810-3 "Acetyl fentanyl [Presence] in Urine by Confirmatory method"
  * text = "Acetyl fentanyl [Presence] in Urine by Confirmatory method"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "true"
* specimen.reference = "Specimen/specimen-urine-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-etoh-gas-chromatography-blood-a-freeman.fsh

Instance: us-core-lab-result-etoh-gas-chromatography-blood-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Ethanol Blood Freeman"
Description: "Observation - Toxicology Lab Result: Ethanol Blood Freeman example"
Usage: #example
* status = #final
* code = $loinc#56478-1 "Ethanol [Mass/volume] in Blood by Gas chromatography"
  * text = "Ethanol [Mass/volume] in Blood by Gas chromatography"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "0.145 g/dL"
* specimen.reference = "Specimen/specimen-blood-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-etoh-gas-chromatography-urine-a-freeman.fsh

Instance: us-core-lab-result-etoh-gas-chromatography-urine-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Ethanol Urine Freeman"
Description: "Observation - Toxicology Lab Result: Ethanol Urine Freeman example"
Usage: #example
* status = #final
* code = $loinc#46983-3 "Ethanol [Mass/volume] in Urine by Confirmatory method"
  * text = "Ethanol [Mass/volume] in Urine by Confirmatory method"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "true"
* specimen.reference = "Specimen/specimen-urine-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-etoh-gas-chromatography-vit-humor-a-freeman.fsh

Instance: us-core-lab-result-etoh-gas-chromatography-vit-humor-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Ethanol Vitreous Humor Freeman"
Description: "Observation - Toxicology Lab Result: Ethanol Vitreous Humor Freeman"
Usage: #example
* status = #final
* code = $loinc#12465-1 "Ethanol [Mass/volume] in Vitreous fluid"
  * text = "Ethanol [Mass/volume] in Vitreous fluid"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "0.133 g/dL"
* specimen.reference = "Specimen/specimen-vitreous-humor-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-fentanyl-blood-a-freeman.fsh

Instance: us-core-lab-result-fentanyl-blood-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Fentanyl Blood Freeman"
Description: "Observation  - Toxicology Lab Result: Fentanyl Blood Freeman example"
Usage: #example
* status = #final
* code = $loinc#73938-3 "fentaNYL [Mass/volume] in Blood by Confirmatory method"
  * text = "fentaNYL [Mass/volume] in Blood by Confirmatory method"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "23 ng/mL"
* specimen.reference = "Specimen/specimen-blood-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-fentanyl-urine-a-freeman.fsh

Instance: us-core-lab-result-fentanyl-urine-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Fentanyl Urine Freeman"
Description: "Observation - Toxicology Lab Result: Fentanyl Urine Freeman example"
Usage: #example
* status = #final
* code = $loinc#11235-9 "fentaNYL [Presence] in Urine"
  * text = "fentaNYL [Presence] in Urine"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "true"
* specimen.reference = "Specimen/specimen-urine-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-norfentanyl-urine-a-freeman.fsh

Instance: us-core-lab-result-norfentanyl-urine-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Norfentanyl Urine Freeman"
Description: "Observation - Toxicology Lab Result: Norfentanyl Urine Freeman example"
Usage: #example
* status = #final
* code = $loinc#43199-9 "Norfentanyl [Presence] in Urine"
  * text = "Norfentanyl [Presence] in Urine"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "true"
* specimen.reference = "Specimen/specimen-urine-toxicology-a-freeman"

---

// File: input/fsh/instances/mdi-tox-freeman/us-core-lab-result-xylazine-urine-a-freeman.fsh

Instance: us-core-lab-result-xylazine-urine-a-freeman
InstanceOf: ObservationToxicologyLabResult
Title: "Observation - Toxicology Lab Result - Xylazine Urine Freeman"
Description: "Observation - Toxicology Lab Result: Xylazine Urine Freeman example"
Usage: #example
* status = #final
* code = $loinc#12327-3 "Ketamine [Presence] in Urine"
  * text = "Ketamine [Presence] in Urine"
* subject = Reference(us-core-patient-a-freeman) "Alice J. Freeman"
* effectiveDateTime = "2021-12-03"
* performer = Reference(us-core-practitioner-b-goldberger)
* valueString = "true"
* specimen.reference = "Specimen/specimen-urine-toxicology-a-freeman"

---

// File: input/fsh/instances/us-core-organization-dcr-ex1.fsh

Instance: us-core-organization-dcr-ex1
InstanceOf: USCoreOrganizationProfile
Title: "US Core Organization – State Medical Examiner"
Description: "Example of US Core Organization - State Medical Examiner Office"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* identifier.system = "http://Tahoe.Web/Insurity.Tahoe.Organization.Entity.BusinessUnitCode"
* identifier.value = "STATE_MEDICAL_EXAMINER_OFFICE_STATE_MEDICAL_EXAMIN"
* active = true
* name = "Office of Chief Medical Examiner"
* address.line = "11 Shuttle Road"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "11"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Shuttle"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetNameType"
* address.line.extension[=].valueString = "Road"
* address.city = "BARRETT PARKWAY"
//* address.state = "Georgia"
* address.state = "GA"
//* address.country = "United States"
* address.country = "US"

---

// File: input/fsh/instances/us-core-organization-ga-dph.fsh

Instance: us-core-organization-ga-dph
InstanceOf: USCoreOrganizationProfile
Title: "US Core Organization - GA Dept Public Health"
Description: "Example of US Core Organization - Georgia State Department of Public Health, Div. Vital Records"
//* identifier
//  * system = "http://hl7.org.fhir/sid/us-npi"
//  * value = "111223333"
* active = true
* type = $organization-type#govt "Government"
* name = "GA Dept Public Health"
* telecom
  * system = #phone
  * value = "(404) 123-4567"
* address
  * line = "1234 Main Street"
  * city = "Anytown"
  * state = "GA"
  * postalCode = "30349"
  * country = "US"

---

// File: input/fsh/instances/us-core-organization-tox-lab.fsh

Instance: us-core-organization-tox-lab
InstanceOf: Organization
Title: "US Core Organization - UF Health Pathology Labs, Forensic Toxicology Laboratory"
Description: "Example of US Core Organization - UF Health Pathology Labs, Forensic Toxicology Laboratory"
Usage: #example
* identifier
  * system = "http://hl7.org.fhir/sid/us-npi"
  * value = "111223333"
* active = true
* type = $organization-type#prov "Healthcare Provider"
* name = "UF Health Pathology Labs, Forensic Toxicology Laboratory"
* telecom
  * system = #phone
  * value = "(352) 265-9900"
* address
  * line = "4800 SW 35th Drive"
  * city = "Gainesville"
  * state = "FL"
  * postalCode = "32608"
  * country = "US"

---

// File: input/fsh/instances/us-core-patient-a-freeman.fsh

Instance: us-core-patient-a-freeman
InstanceOf: PatientVitalRecords
Title: "US Core Patient - Alice J. Freeman"
Description: "Example of US Core Patient - Alice J. Freeman, decedent"
Usage: #example
* extension[race]
  * extension[detailed]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2029-7 "Asian Indian"
  * extension[text]
    * valueString = "Asian Indian"
* extension[ethnicity]
  * extension[ombCategory]
    * valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
  * extension[text]
    * valueString = "Not Hispanic or Latino"
* identifier
  * use = #usual
  * type = $v2-0203#SS "Social Security number"
    * text = "Social Security number"
  * system = "http://hl7.org/fhir/sid/us-ssn"
  * value = "987054321"
* active = true
* name
  * use = #official 
  * family = "Freeman"
  * given[0] = "Alice"
  * given[+] = "J."
* gender = #female
* birthDate = "1978-03-12"
* address
  * use = #home
  * line = "112 Miramar Ct"
  * city = "Danville"
  * state = "IL" // was NS -- "Nova Scotia"
  // * country = "CA"

---

// File: input/fsh/instances/us-core-patient-unknown-name.fsh

Instance: us-core-patient-unknown-name
InstanceOf: PatientVitalRecords
Title: "US Core Patient - Unknown Name"
Description: "US Core Patient: Unknown Name - Decedent where there is no information known about the patient. Assume that the system will assign a tracking number (e.g., medical record number, case number, or other)."
Usage: #example
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical Record Number"
    * text = "Medical Record Number"
  * system = "http://hospital.smarthealthit.org"
  * value = "MR303303305"
* active = true
* name.family = "UNK"
  * extension[dataAbsentReason]
    * valueCode = #unknown
* name.use = #official 
* gender = #unknown

---

// File: input/fsh/instances/us-core-practitioner-b-goldberger.fsh

Instance: us-core-practitioner-b-goldberger
InstanceOf: PractitionerVitalRecords
Title: "US Core Practitioner - Dr. Bruce Goldberger"
Description: "Example of US Core Practitioner - Dr. Bruce Goldberger, toxicologist"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "555667777"
* name
  * use = #official
  * family = "Goldberger"
  * given = "Bruce"
  * prefix = "Dr."

---

// File: input/fsh/instances/us-core-practitioner-dcr-ex1.fsh

Instance: us-core-practitioner-dcr-ex1
InstanceOf: USCorePractitionerProfile
Title: "US Core Practitioner – Death Pronouncement Performer"
Description: "Example of US Core Practitioner - Death Pronouncement Performer, used in the VRDR Death Date Observation.performer role."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "1234567"
* name.use = #official
* name.family = "Doctor"
* name.given = "Lm"
* qualification.code = $sct#309343006 "Medical doctor"
* qualification.code.text = "Medical doctor"

---

// File: input/fsh/instances/us-core-practitioner-jm-lehz.fsh

Instance: us-core-practitioner-jm-lehz
InstanceOf: Practitioner
Title: "US Core Practitioner - Dr. J.M. Lehz"
Description: "Example of US Core Practitioner - Dr. J.M. Lehz, autopsy performer"
Usage: #example
* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "123456789"
* name
  * use = #official
  * family = "Lehz"
  * given = "J.M."
  * prefix = "Dr."

---

// File: input/fsh/instances/vr-practitioner-s-jones.fsh

Instance: vr-practitioner-s-jones
InstanceOf: PractitionerVitalRecords
Title: "Practitioner - Vital Records - Dr. Sam Jones"
Description: "Example of Practitioner - Vital Records: Dr. Sam Jones, medical examiner and death pronouncer for Freeman death investigation examples."
Usage: #example

* identifier
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value = "3333445555"
* name
  * use = #official
  * family = "Jones"
  * given = "Sam"
  * prefix = "Dr."

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-autopsy-performed-indicator-a-freeman.fsh

Instance: vrdr-autopsy-performed-indicator-a-freeman
InstanceOf: AutopsyPerformedIndicator
Title: "VRDR Autopsy Performed Indicator - Freeman"
Description: "Autopsy Performed Indicator: Freeman example (vrdr-autopsy-performed-indicator)"
Usage: #example
* status = #final
* code = $loinc#85699-7
* subject = Reference(us-core-patient-a-freeman)
* effectiveDateTime = "2022-02-19"
* performer = Reference(us-core-practitioner-jm-lehz)
  * display = "J.M. Lehz"
* valueCodeableConcept = $v2-0136#Y "Yes"
* component
  * code = $loinc#69436-4
  * valueCodeableConcept = $v2-0136#Y "Yes"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-cause-of-death-part2-a-freeman.fsh

Instance: vrdr-cause-of-death-part2-a-freeman
InstanceOf: CauseOfDeathPart2
Title: "VRDR Cause of Death Part 2 - Freeman"
Description: "Cause of Death Part 2: Freeman example (vrdr-cause-of-death-part2)"
Usage: #example
* status = #final
* subject = Reference(us-core-patient-a-freeman)
* effectiveDateTime = "2022-01-08"
* performer = Reference(vr-practitioner-s-jones)
* valueCodeableConcept.text = "Hypertensive heart disease"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-death-certification-a-freeman.fsh

Instance: vrdr-death-certification-a-freeman
InstanceOf: DeathCertification
Title: "VRDR Death Certification Procedure - Freeman"
Description: "Death Certification Procedure: Freeman example (vrdr-death-certification)"
Usage: #example
* identifier.value = "180"
* status = #completed
* category = $sct#307930005 "Death certificate (record artifact)"
* code = $sct#308646001 "Death certification"
* subject.reference = "Patient/us-core-patient-a-freeman"
* performedDateTime = "2022-01-18T16:39:40-05:00"
* performer
  * function = $sct#455381000124109 "Death certification by medical examiner or coroner (procedure)"
  * actor.reference = "Practitioner/vr-practitioner-s-jones"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-death-date-a-freeman.fsh

Instance: vrdr-death-date-a-freeman
InstanceOf: DeathDate
Title: "VRDR Death Date - Freeman"
Description: "Death Date: Freeman death date, location, death pronouncer example (vrdr-death-date)"
Usage: #example
* status = #final
* code = $loinc#81956-5 "Date+time of death"
* subject.reference = "Patient/us-core-patient-a-freeman"
* effectiveDateTime = "2022-01-08T15:30:00-05:00"
* performer.reference = "Practitioner/vr-practitioner-s-jones"
* valueDateTime = "2022-01-08"
// PartialDateTime should not be used when the datetime can be represented using the FHIR dateTime.
// * valueDateTime.extension[partialDateTime].extension[day].valueUnsignedInt = 8
// * valueDateTime.extension[partialDateTime].extension[month].valueUnsignedInt = 1
// * valueDateTime.extension[partialDateTime].extension[year].valueUnsignedInt = 2022
// * valueDateTime.extension[partialDateTime].extension[time].valueTime.extension[dataabsent].valueCode = $dataabsentreason401#unknown
* method = DateOfDeathDeterminationMethodsCS#approximate "Approximate"
* component[0]
  * code = $loinc#80616-6 "Date and time pronounced dead [US Standard Certificate of Death]"
  * valueDateTime = "2022-01-08T15:30:00-05:00"
* component[+]
  * code = $loinc#58332-8
  * valueCodeableConcept = $sct#63238001 "Dead on arrival at hospital"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-death-location-atlanta-ga-a-freeman.fsh

Instance: vrdr-death-location-atlanta-ga-a-freeman
InstanceOf: DeathLocation
Title: "VRDR Death Location - Atlanta GA"
Description: "Death Location:  Atlanta GA, Freeman example (vrdr-death-location)"
Usage: #example
* identifier
  * system = "http://www.acme.org/location"
  * value = "29"
* status = #active
* name = "Atlanta GA Death Location - Freeman"
* address
  * use = #home
  * type = #physical
  * line = "400 Windstream Street"
  * city = "Atlanta"
  * district = "Fulton County"
  * state = "GA"
  * country = "US"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-death-location-lat-long.fsh

Instance: vrdr-death-location-lat-long
InstanceOf: DeathLocation
Title: "VRDR Death Location - Lat/Long"
Description: "Death Location: latitude & longitude, other example (vrdr-death-location)"
Usage: #example
* identifier
  * system = "http://www.acme.org/location"
  * value = "29"
* status = #active
* name = "Lake Death Location - Lat/Long"
// Address is a required field by USCore 
* address.text = "Lake Death"
* position
  * longitude = 36.146084
  * latitude = -114.413155

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-death-location-string.fsh

Instance: vrdr-death-location-string
InstanceOf: DeathLocation
Title: "VRDR Death Location - address string"
Description: "Death Location: address as string, Freeman example (vrdr-death-location)"
Usage: #example
* identifier
  * system = "http://www.acme.org/location"
  * value = "29"
* status = #active
* name = "Atlanta GA Death Location - Freeman (address string)"
* address
  * use = #home
  * type = #physical
  * text = "400 Windstream Street, Atlanta, GA"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-decedent-disposition-method-a-freeman.fsh

Instance: vrdr-decedent-disposition-method-a-freeman
InstanceOf: DecedentDispositionMethod
Title: "VRDR Disposition Method - Freeman"
Usage: #example
Description: "Disposition Method: Freeman example (vrdr-decedent-disposition-method)"
* status = #final
* subject = Reference(us-core-patient-a-freeman)
* effectiveDateTime = "2022-01-10"
* performer = Reference(vr-practitioner-s-jones)
* valueCodeableConcept = $sct#449971000124106 "Burial"
//* extension[dispositionLocationReference].valueReference  = Reference(DispositionLocation-Example1)

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-decedent-pregnancy-status-a-freeman.fsh

Instance: vrdr-decedent-pregnancy-status-a-freeman
InstanceOf: DecedentPregnancyStatus
Title: "VRDR Decedent Pregnancy - Freeman"
Description: "Decedent Pregnancy: Freeman example (vrdr-decedent-pregnancy-status)"
Usage: #example
* status = #final
* code = $loinc#69442-2 "Timing of recent pregnancy in relation to death"
* subject.reference = "Patient/us-core-patient-a-freeman"
* effectiveDateTime = "2022-02-19"
* performer = Reference(us-core-practitioner-jm-lehz)
  * display = "J.M. Lehz"
* valueCodeableConcept = $v3-NullFlavor#NA "not applicable"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-injury-incident-a-freeman-med-ingest.fsh

Instance: vrdr-injury-incident-a-freeman-med-ingest
InstanceOf: InjuryIncident
Title: "VRDR Injury Incident - Freeman"
Description: "Injury Incident: Freeman medication ingestion example (vrdr-injury-incident)"
Usage: #example
* status = #final
* subject.reference = "Patient/us-core-patient-a-freeman"
* effectiveDateTime.extension[partialDateTime].extension[day].valueUnsignedInt = 8
* effectiveDateTime.extension[partialDateTime].extension[month].valueUnsignedInt = 1
* effectiveDateTime.extension[partialDateTime].extension[year].valueUnsignedInt = 2022
* effectiveDateTime.extension[partialDateTime].extension[time].valueTime.extension[dataabsent].valueCode = $dataabsentreason401#unknown
* performer.reference = "Practitioner/vr-practitioner-s-jones"
* valueCodeableConcept.text = "drug toxicity"
* component[workInjuryIndicator]
  * valueCodeableConcept = $v2-0136#N "No"
* component[placeOfInjury]
  * valueCodeableConcept.text = "Private house"
* component[transportationRole]
  * valueCodeableConcept = $v3-NullFlavor#NA "not applicable"
    * text = "not applicable"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-injury-location-atlanta-ga-a-freeman.fsh

Instance: vrdr-injury-location-atlanta-ga-a-freeman
InstanceOf: InjuryLocation
Title: "VRDR Injury Location - Atlanta GA"
Description: "Injury Location:  Atlanta GA, Freeman example (vrdr-injury-location)"
Usage: #example
* identifier
  * system = "http://www.acme.org/location"
  * value = "29"
* status = #active
* name = "Atlanta GA Injury Location - Freeman"
* address
  * use = #home
  * type = #physical
  * line = "400 Windstream Street"
  * city = "Atlanta"
  * district = "Fulton County"
  * state = "GA"
  * country = "US"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-manner-of-death-a-freeman-accidental.fsh

Instance: vrdr-manner-of-death-a-freeman-accidental
InstanceOf: MannerOfDeath
Title: "VRDR Manner of Death - Freeman"
Description: "Manner of Death: Freeman - accidental example (vrdr-manner-of-death)"
Usage: #example
* status = #final
* code = $loinc#69449-7 "Manner of death"
* subject = Reference(us-core-patient-a-freeman)
* effectiveDateTime = "2022-01-08"
* performer = Reference(vr-practitioner-s-jones)
* valueCodeableConcept = $sct#7878000 "Accidental death"

---

// File: input/fsh/instances/vrdr-dc-freeman/vrdr-tobacco-use-a-freeman.fsh

Instance: vrdr-tobacco-use-a-freeman
InstanceOf: TobaccoUseContributedToDeath
Title: "VRDR Tobacco Use Contributed To Death - Freeman"
Description: "Tobacco Use Contributed To Death: Freeman example (vrdr-tobacco-use-contributed-to-death)"
Usage: #example
* status = #final
* code = $loinc#69443-0 "Did tobacco use contribute to death"
* subject.reference = "Patient/us-core-patient-a-freeman"
* effectiveDateTime = "2019-12-02"
* performer = Reference(vr-practitioner-s-jones)
* valueCodeableConcept = $sct#373067005 "No"

---

// File: input/fsh/instances/vrdr-dc-review/vr-practitioner-ex1.fsh

Instance: vr-practitioner-ex1
InstanceOf: Practitioner-vr
Title: "VR Practitioner"
Description: "Example of VR Practitioner for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vr-common-library/StructureDefinition/Practitioner-vr"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "456789"
* name.use = #official
* name.family = "Examiner"
* name.given[0] = "Medical"
* name.given[+] = "B"
* address.city = "Kennesaw"
* address.state = "GA"
//* address.state = "Georgia"
* address.postalCode = "30144"
//* address.country = "United States"
* address.country = "US"
//* qualification.code = CsCremationClearanceExample #AME "Assistant Medical Examiner"
//* qualification.code.text = "Assistant Medical Examiner"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-autopsy-performed-indicator-dcr-ex1.fsh

Instance: vrdr-autopsy-performed-indicator-dcr-ex1
InstanceOf: AutopsyPerformedIndicator
Title: "VRDR Autopsy Performed Indicator"
Description: "Example of VRDR Autopsy Performed Indicator (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-autopsy-performed-indicator"
* status = #final
* code = $loinc#85699-7 "Autopsy was performed"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueCodeableConcept = $v2-0136#Y "Yes"
* valueCodeableConcept.text = "Yes"
* component.code = $loinc#69436-4 "Autopsy results available"
* component.valueCodeableConcept = $v2-0136#Y "Yes"
//* component.valueCodeableConcept.text = "Yes"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-cause-of-death-part1-dcr-ex1.fsh

Instance: vrdr-cause-of-death-part1-dcr-ex1
InstanceOf: CauseOfDeathPart1
Title: "VRDR Cause Of Death Part 1"
Description: "Example of VRDR Cause Of Death Part 1 (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-cause-of-death-part1"
* status = #final
* valueCodeableConcept.text = "Gunshot Wound of Head"
* subject = Reference(vrdr-decedent-dcr-ex1)
* component[lineNumber].valueInteger = 1
* component[interval].valueString = "1 hour"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-cause-of-death-part2-dcr-ex1.fsh

Instance: vrdr-cause-of-death-part2-dcr-ex1
InstanceOf: CauseOfDeathPart2
Title: "VRDR Cause of Death Part 2"
Description: "Example of VRDR Cause of Death Part 2 (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-cause-of-death-part2"
* status = #final
* valueCodeableConcept.text = "Arteriosclerosis"
* subject = Reference(vrdr-decedent-dcr-ex1)
* performer = Reference(vrdr-certifier-dcr-ex1)

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-certifier-dcr-ex1.fsh

Instance: vrdr-certifier-dcr-ex1
InstanceOf: Certifier
Title: "VRDR Death Certifier"
Description: "Example of VRDR Death Certifier (Practitioner) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-certifier"
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "987654"
* name.use = #official
* name.family = "Examiner"
* name.given[0] = "Medical"
* name.given[+] = "A"
* address.city = "Kennesaw"
* address.state = "GA"
//* address.state = "Georgia"
* address.postalCode = "30144"
//* address.country = "United States"
* address.country = "US"
//* qualification.code = CsCremationClearanceExample #AME "Assistant Medical Examiner"
//* qualification.code.text = "Assistant Medical Examiner"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-death-certificate-dcr-ex1.fsh

Instance: vrdr-death-certificate-dcr-ex1
InstanceOf: DeathCertificate
Usage: #example
Description: "VRDR Death Certificate - CCR example 1"
Title: "Death Certificate for review for cremation clearance request"
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-certificate"
* extension.url = "http://hl7.org/fhir/us/vrdr/StructureDefinition/StateSpecificField"
* extension.valueString = "State Specific Content"
* status = #final
* type = $loinc#64297-5 "death certificate"
* subject = Reference(vrdr-decedent-dcr-ex1)
* date = "2023-04-27"
* author = Reference(vrdr-certifier-dcr-ex1)
* title = "Death Certificate"
* attester.mode = #legal
* attester.time = "2023-04-27T15:30:00-04:00"
* attester.party = Reference(vrdr-certifier-dcr-ex1)
* event.code = $sct#103693007 "Diagnostic procedure (procedure)"
* event.code = $sct#307930005 "Death certificate (record artifact)"
* event.detail = Reference(vrdr-death-certification-dcr-ex1)
* section[0].code = $vrdr-document-section-cs#DecedentDemographics
* section[=].entry[0] = Reference(Patient/vrdr-decedent-dcr-ex1)
* section[=].entry[+] = Reference(RelatedPerson/vrdr-decedent-father-dcr-ex1)
* section[=].entry[+] = Reference(RelatedPerson/vrdr-decedent-mother-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-decedent-age-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-decedent-education-level-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-decedent-military-service-dcr-ex1)
// Usual work creates error here. Review and add back after VRDR publishes in 2024
// * section[=].entry[+] = Reference(Observation/decedent-usual-work-ccr-ex1)
* section[+].code = $vrdr-document-section-cs#DeathInvestigation
* section[=].entry[0] = Reference(Observation/vrdr-examiner-contacted-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-decedent-pregnancy-status-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-tobacco-use-dcr-ex1)
* section[=].entry[+] = Reference(Location/vrdr-death-location-dcr-ex1)
* section[=].entry[+] = Reference(Location/vrdr-injury-location-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-injury-incident-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-autopsy-performed-indicator-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-death-date-dcr-ex1)
//* section[=].entry[+] = Reference(Organization/interested-party-ccr-ex1)
* section[+].code = $vrdr-document-section-cs#DeathCertification
//* section[=].entry[0] = Reference(Practitioner/vrdr-certifier-dcr-ex1)
* section[=].entry[0] = Reference(Practitioner/vr-practitioner-ex1)
* section[=].entry[+] = Reference(Procedure/vrdr-death-certification-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-manner-of-death-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-cause-of-death-part1-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-cause-of-death-part2-dcr-ex1)
* section[+].code = $vrdr-document-section-cs#DecedentDisposition
* section[=].entry[0] = Reference(Location/vrdr-disposition-location-dcr-ex1)
* section[=].entry[+] = Reference(Organization/vrdr-funeral-home-dcr-ex1)
* section[=].entry[+] = Reference(Observation/vrdr-decedent-disposition-method-dcr-ex1)
* section[=].entry[+] = Reference(Practitioner/vrdr-mortician-dcr-ex1)

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-death-certification-dcr-ex1.fsh

Instance: vrdr-death-certification-dcr-ex1
InstanceOf: DeathCertification
Title: "VRDR Death Certification Procedure"
Description: "Example of VRDR Death Certification Procedure for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-certification"
* status = #completed
//* category = $sct#103693007 "Diagnostic procedure"
// The code '103693007' is valid but is not active (from http://tx.fhir.org/r4)
* code = $sct#308646001 "Death certification"
* subject = Reference(vrdr-decedent-dcr-ex1)
//* performedDateTime.extension.extension.url = "long"
//* performedDateTime.extension.extension.valueString = "202304271530"
//* performedDateTime.extension.url = "http://example-edrs.org/fhir/StructureDefinition/datelong"
// Error: The extension http://example-edrs.org/fhir/StructureDefinition/datelong could not be found so is not allowed here
* performedDateTime = "2023-04-27T15:30:00-04:00"
* performer.function = $sct#455381000124109 "Death certification by medical examiner or coroner (procedure)"
* performer.actor = Reference(vrdr-certifier-dcr-ex1)



---

// File: input/fsh/instances/vrdr-dc-review/vrdr-death-date-dcr-ex1.fsh

Instance: vrdr-death-date-dcr-ex1
InstanceOf: DeathDate
Title: "VRDR Death Date"
Description: "Example of VRDR Death Date (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-date"
* status = #final
* code = $loinc#81956-5 "Date+time of death"
* subject = Reference(vrdr-decedent-dcr-ex1)
//Is this local system extension needed?
//* effectiveDateTime.extension[0].extension.url = "long"
//* effectiveDateTime.extension[=].extension.valueString = "202304240100"
//* effectiveDateTime.extension[=].url = "http://example-edrs.org/fhir/StructureDefinition/datelong"
//* effectiveDateTime.extension[+].extension.url = "time"
//* effectiveDateTime.extension[=].extension.valueString = "AM"
//* effectiveDateTime.extension[=].url = "http://example-edrs.org/fhir/StructureDefinition/datetime-modifier"
* effectiveDateTime = "2023-04-24T01:00:00-04:00"
* performer = Reference(us-core-practitioner-dcr-ex1)
//Is this local system extension needed?
//* valueDateTime.extension[0].extension.url = "long"
//* valueDateTime.extension[=].extension.valueString = "202304240100"
//* valueDateTime.extension[=].url = "http://example-edrs.org/fhir/StructureDefinition/datelong"
//* valueDateTime.extension[+].extension.url = "time"
//* valueDateTime.extension[=].extension.valueString = "AM"
//* valueDateTime.extension[=].url = "http://example-edrs.org/fhir/StructureDefinition/datetime-modifier"
* valueDateTime = "2023-04-24T01:00:00-04:00"
* component.code = $loinc#80616-6 "Date and time pronounced dead [US Standard Certificate of Death]"
//Is this local system extension needed?
//* component.valueDateTime.extension[0].extension.url = "long"
//* component.valueDateTime.extension[=].extension.valueString = "202304241400"
//* component.valueDateTime.extension[=].url = "http://example-edrs.org/fhir/StructureDefinition/datelong"
//* component.valueDateTime.extension[+].extension.url = "time"
//* component.valueDateTime.extension[=].extension.valueString = "PM"
//* component.valueDateTime.extension[=].url = "http://example-edrs.org/fhir/StructureDefinition/datetime-modifier"
* component.valueDateTime = "2023-04-24T14:00:00-04:00"
* component[placeOfDeath].valueCodeableConcept = $sct#16983000 "Death in hospital"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-death-location-dcr-ex1.fsh

Instance: vrdr-death-location-dcr-ex1
InstanceOf: DeathLocation
Title: "VRDR Death Location"
Description: "Example of VRDR Death Location (Location) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-death-location"
* identifier.system = "http://Tahoe.Web/Insurity.Tahoe.Organization.Entity.BusinessUnitCode"
* identifier.value = "LOADED_FACILITY_20022"
* name = "Lawrence & Memorial Hospital"
//* type = $sct#450391000124102 "Death in emergency Room/Outpatient"
//* type.text = "Hospital - ER/Outpatient"
* address.line = "123 Any Street"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "123"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Any Street"
* address.city = "Wayne"
* address.district = "Wayne"
* address.state = "MI"
//* address.state = "Michigan"
* address.postalCode = "48184"
* address.country = "US"
//* address.country = "United States"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-age-dcr-ex1.fsh

Instance: vrdr-decedent-age-dcr-ex1
InstanceOf: DecedentAge
Title: "VRDR Decedent Age"
Description: "Example of VRDR Decedent Age (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-age"
* status = #final
* code = $loinc#39016-1 "Age at death"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueQuantity = 39 'a' "a"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-dcr-ex1.fsh

Instance: vrdr-decedent-dcr-ex1
InstanceOf: Decedent
Title: "VRDR Decedent"
Description: "Example of VRDR Decedent (Patient) for death certificate review examples"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent"
* extension[0].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #UNK
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/patient-birthPlace"
* extension[=].valueAddress.city = "Alberia"
* extension[=].valueAddress.district = "Alberia"
//* extension[=].valueAddress.state = "Shahristan"
* extension[=].valueAddress.country = "AF"
* extension[+].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2186-5 "Not Hispanic or Latino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "No, not Spanish/Hispanic/Latino"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[+].extension[0].url = "detailed"
//* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2131-1 "Unknown"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2131-1 "Other Race"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Other (Specify)|Unknown"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* identifier[0].type = $v2-0203#SB "Social Beneficiary Identifier"
* identifier[=].system = "http://hl7.org/fhir/sid/us-ssn"
* identifier[=].value = "234567865"
//* identifier[+].type = #MR "Medical Record Number"
//* identifier[=].system = "http://example-edrs.org/mrn"
//* identifier[=].value = "4567843"
* name[0].use = #official
* name[=].family = "Joey"
* name[=].given[0] = "Testing"
* name[=].given[+] = "R"
* name[=].prefix = "Jr"
* name[+].use = #maiden
* name[=].family = "Joey"
* gender = #unknown
//Is this local system extension needed?
//* birthDate.extension.extension[0].url = "unknowndate"
//* birthDate.extension.extension[=].valueBoolean = false
//* birthDate.extension.extension[+].url = "long"
//* birthDate.extension.extension[=].valueString = "999999996666"
//* birthDate.extension.url = "http://example-edrs.org/fhir/StructureDefinition/datelong"
* birthDate = "2023-01-01"
// Original instance included extensions for WithinCityLimitsIndicator (Yes). Need to add back with correct format after VRDR publishes in 2024.
// Original instance included extensions for parsing the line. Need to add back with correct format after VRDR publishes in 2024.
* address.line = "23 N Lockfield Street H"
* address.city = "Unknown"
* address.district = "Unknown"
* address.state = "CT"
* address.country = "US"
* maritalStatus = $v3-MaritalStatus#S "Never Married"
* maritalStatus.text = "Never Married"
//* contact.relationship = $v3-RoleCode#FTH "natural father"
* contact.relationship = $v3-RoleCode#FTH "father"
* contact.relationship.text = "Father"
* contact.name.use = #official
* contact.name.family = "Father"
* contact.name.given = "Dad"
* contact.telecom.system = #phone
* contact.telecom.value = "6765432345"
* contact.address.line = "345 Main Street"
* contact.address.city = "Abington"
* contact.address.state = "CT"
* contact.address.postalCode = "06230"
* contact.address.country = "US"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-disposition-method-dcr-ex1.fsh

Instance: vrdr-decedent-disposition-method-dcr-ex1
InstanceOf: DecedentDispositionMethod
Title: "VRDR Decedent Disposition Method"
Description: "Example of VRDR Decedent Disposition Method (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-disposition-method"
* status = #final
* code = $loinc#80905-3 "Body disposition method"
* subject = Reference(vrdr-decedent-dcr-ex1)
* effectiveDateTime = "2023-04-29"
* performer = Reference(vrdr-mortician-dcr-ex1)
* valueCodeableConcept = $sct#449961000124104 "Cremation"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-education-level-dcr-ex1.fsh

Instance: vrdr-decedent-education-level-dcr-ex1
InstanceOf: DecedentEducationLevel
Title: "VRDR Decedent Education Level"
Description: "Example of VRDR Decedent Education Level (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-education-level"
* status = #final
* code = $loinc#80913-7 "Highest level of education [US Standard Certificate of Death]"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueCodeableConcept = $v3-NullFlavor#UNK "Unknown"
* valueCodeableConcept.text = "Unknown"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-father-dcr-ex1.fsh

Instance: vrdr-decedent-father-dcr-ex1
InstanceOf: DecedentFather
Title: "VRDR Decedent Father"
Description: "Example of VRDR Decedent Father (RelatedPerson) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-father"
* patient = Reference(vrdr-decedent-dcr-ex1)
* relationship = $v3-RoleCode#FTH "father"
* name.family = "Father"
* name.given = "Dad"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-military-service-dcr-ex1.fsh

Instance: vrdr-decedent-military-service-dcr-ex1
InstanceOf: DecedentMilitaryService
Title: "VRDR Decedent Military Service"
Description: "Example of VRDR Decedent Military Service (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-military-service"
* status = #final
* code = $loinc#55280-2 "Military service Narrative"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueCodeableConcept = $v2-0136#N "No"
* valueCodeableConcept.text = "No"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-mother-dcr-ex1.fsh

Instance: vrdr-decedent-mother-dcr-ex1
InstanceOf: DecedentMother
Title: "VRDR Decedent Mother"
Description: "Example of VRDR Decedent Mother (RelatedPerson) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-mother"
* patient = Reference(vrdr-decedent-dcr-ex1)
* relationship = $v3-RoleCode#MTH "mother"
* name.family = "Mother"
* name.given = "Mom"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-pregnancy-status-dcr-ex1.fsh

Instance: vrdr-decedent-pregnancy-status-dcr-ex1
InstanceOf: DecedentPregnancyStatus
Title: "VRDR Decedent Pregnancy"
Description: "Example of VRDR Decedent Pregnancy (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-pregnancy-status"
* status = #final
//* code = $loinc#69442-2 "Timing of recent pregnancy in relation to death"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueCodeableConcept = DeathPregnancyStatusCS#1 "Not pregnant within past year"
//* valueCodeableConcept = urn:oid:2.16.840.1.114222.4.5.274#PHC1260 "Not pregnant within the past year"
//* valueCodeableConcept.text = "Not pregnant within past year"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-decedent-usual-work-dcr-ex1.fsh

Instance: vrdr-decedent-usual-work-dcr-ex1
InstanceOf: DecedentUsualWork
Title: "VRDR Decedent Usual Work"
Description: "Example of VRDR Decedent Usual Work (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-decedent-usual-work"
* status = #final
* code = $loinc#21843-8 "History of Usual occupation"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueCodeableConcept.text = "Unknown"
//* component.code = $loinc#21844-6 "History of Usual industry"
//* component.valueCodeableConcept.text = "Unknown"
* component[odh-UsualIndustry].valueCodeableConcept.text = "Unknown"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-disposition-location-dcr-ex1.fsh

Instance: vrdr-disposition-location-dcr-ex1
InstanceOf: DispositionLocation
Title: "VRDR Disposition Location"
Description: "Example of VRDR Disposition Location for death certificate review examples. "
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-disposition-location"
* name = "Affordable Cremations, LLC"
* address.city = "BARRETT PARKWAY"
* address.state = "GA"
//* address.state = "Georgia"
//* address.country = "United States"
* address.country = "US"
* physicalType = $location-physical-type#si "Site"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-examiner-contacted-dcr-ex1.fsh

Instance: vrdr-examiner-contacted-dcr-ex1
InstanceOf: ExaminerContacted
Title: "VRDR Examiner Contacted"
Description: "Example of VRDR Examiner Contacted (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-examiner-contacted"
* status = #final
* code = $loinc#74497-9 "Medical examiner or coroner was contacted [US Standard Certificate of Death]"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueCodeableConcept = $v2-0136#Y "Yes"
* valueCodeableConcept.text = "Yes"
* component.code = $loinc#69452-1 "Coroner - medical examiner case number"
* component.valueString = "23-00083"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-funeral-home-dcr-ex1.fsh

Instance: vrdr-funeral-home-dcr-ex1
InstanceOf: FuneralHome
Title: "VRDR Funeral Home"
Description: "Example of VRDR Funeral Home (Organization) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-funeral-home"
* identifier.value = "139"
* active = true
* type = OrganizationTypeCS#funeralhome "Funeral Home"
* name = "Byles-Macdougall Funeral Service (New London)"
* address.line = "88 Huntington St"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "88"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Huntington"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetNameType"
* address.line.extension[=].valueString = "St"
* address.city = "Kennesaw"
//* address.state = "Georgia"
* address.state = "GA"
* address.postalCode = "30144"
* address.country = "US"
//* address.country = "United States"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-injury-incident-dcr-ex1.fsh

Instance: vrdr-injury-incident-dcr-ex1
InstanceOf: InjuryIncident
Title: "VRDR Injury Incident"
Description: "Example of VRDR Injury Incident (Observation) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-injury-incident"
* status = #final
* code = $loinc#11374-6 "Injury incident description"
* subject = Reference(vrdr-decedent-dcr-ex1)
* effectiveDateTime = "2000-01-01"
* valueCodeableConcept.text  = "shot by other"
* component[0].code = $loinc#69444-8 "Did death result from injury at work"
* component[=].valueCodeableConcept = $v2-0136#N "No"
* component[=].valueCodeableConcept.text = "No"
// Place of injury is now a separate Observation: http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-place-of-injury for loinc#69450-5 "Place of injury Facility" and valueCodeableConcept.text = "Other building"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-injury-location-dcr-ex1.fsh

Instance: vrdr-injury-location-dcr-ex1
InstanceOf: InjuryLocation
Title: "VRDR Injury Location"
Description: "Example of VRDR Injury Location for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-injury-location"
* name = "Home"
* address.line = "1 Two Street"
* address.line.extension[0].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber"
* address.line.extension[=].valueString = "1"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName"
* address.line.extension[=].valueString = "Two"
* address.line.extension[+].url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetNameType"
* address.line.extension[=].valueString = "Street"
* address.city = "Kennesaw"
* address.district = "COBB"
//* address.state = "Georgia"
* address.state = "GA"
* address.postalCode = "30144"
//* address.country = "United States"
* address.country = "US"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-manner-of-death-dcr-ex1.fsh

Instance: vrdr-manner-of-death-dcr-ex1
InstanceOf: MannerOfDeath
Title: "VRDR Manner of Death"
Description: "Example of VRDR Mortician (Practitioner) for death certificate review examples."
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-manner-of-death"
* status = #final
* code = $loinc#69449-7 "Manner of death"
* subject = Reference(vrdr-decedent-dcr-ex1)
* performer = Reference(us-core-practitioner-dcr-ex1)
* valueCodeableConcept = $sct#27935005 "Homicide"
//* valueCodeableConcept.text = "Homicide"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-mortician-dcr-ex1.fsh

Instance: vrdr-mortician-dcr-ex1
InstanceOf: Mortician
Title: "VRDR Mortician"
Description: "Example of VRDR Mortician (Practitioner) for death certificate review examples."
Usage: #example
//* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-mortician"
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
// Need identifier system
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
//* identifier.value = "1996"
* identifier.value = "199612AB"
* name.use = #official
* name.family = "Byles"
* name.given[0] = "Donald"
* name.given[+] = "W"

---

// File: input/fsh/instances/vrdr-dc-review/vrdr-tobacco-use-dcr-ex1.fsh

Instance: vrdr-tobacco-use-dcr-ex1
InstanceOf: TobaccoUseContributedToDeath
Title: "VRDR Tobacco Use Contributed To Death"
Description: "Example of VRDR Tobacco Use Contributed To Death (Observation) for death certificate review examples"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/vrdr/StructureDefinition/vrdr-tobacco-use-contributed-to-death"
* status = #final
* code = $loinc#69443-0 "Did tobacco use contribute to death"
* subject = Reference(vrdr-decedent-dcr-ex1)
* valueCodeableConcept = $v3-NullFlavor#UNK "Unknown"
* valueCodeableConcept.text = "Unknown"

---

// File: input/fsh/profiles/BundleDocumentMDIAndEDRS.fsh

Profile: BundleDocumentMDIAndEDRS
Parent: Bundle
Id: Bundle-document-mdi-and-edrs
Title: "Bundle - Document MDI and EDRS"
Description: "A container for a document exchanged between an MDI CMS and EDRS (bi-directional exchange) for development of a death certificate. It contains a Composition - MDI and EDRS."
* identifier 1.. 
  * ^short = "Persistent, unique identifier of each bundle instance"
* type = #document (exactly)
* type 
* entry 
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "$this.resource"
  * ^slicing.rules = #open
* entry contains MDIandEDRSComposition 1..1 
* entry[MDIandEDRSComposition] ^short = "The Composition of data sent between an MDI CMS and an EDRS"
  * resource 1.. 
  * resource only CompositionMDIAndEDRS


---

// File: input/fsh/profiles/BundleDocumentMDIDCR.fsh

Profile: BundleDocumentMDIDCR
Parent: Bundle
Id: Bundle-document-mdi-dcr
Title: "Bundle - Document Death Certificate Review"
Description: "A container for a document exchanged between an EDRS and an MDI CMS (bi-directional exchange) for a Death Certificate Review. It contains a Composition - Death Certificate Review."
* identifier 1.. 
  * ^short = "Persistent, unique identifier of each bundle instance"
* type = #document (exactly)
* entry 
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "$this.resource"
  * ^slicing.rules = #open
* entry contains DCR_Composition 1..1 
* entry[DCR_Composition] ^short = "The Composition of data sent from an EDRS for a Death Certificate Review."
  * resource 1.. 
  * resource only CompositionMDIDCR

---

// File: input/fsh/profiles/BundleMessageDCR.fsh


Profile: BundleMessageDCR
Parent: Bundle
Id: Bundle-message-death-certificate-review
Title: "Bundle - Message Death Certificate Review"
Description: "A container for a message exchanged between an EDRS and an MDI CMS (bi-directional exchange) about a Death Certificate Review. It contains a MessageHeader - Death Certificate Review and a Bundle - Document Death Certificate Review."
* type = #message (exactly)
* entry ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "$this.resource"
  * ^slicing.rules = #open
//
* entry contains DCRMessage 1..1
* entry[DCRMessage].resource 1..
* entry[DCRMessage].resource only MessageHeaderDCR
//
* entry contains DCRDocument 1..1
* entry[DCRDocument].resource 1..
* entry[DCRDocument].resource only BundleDocumentMDIDCR

---

// File: input/fsh/profiles/BundleMessageToxToMDI.fsh


Profile: BundleMessageToxToMDI
Parent: Bundle
Id: Bundle-message-tox-to-mdi
Title: "Bundle - Message Toxicology to MDI"
Description: "A container for a message from a forensic toxicology laboratory to an MDI information management system. It contains a MessageHeader - Toxicology to MDI and a DiagnosticReport - Toxicology Lab Result to MDI."
* type = #message (exactly)
* type MS
* entry ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "$this.resource"
  * ^slicing.rules = #open
//
* entry contains ToxtoMDIMessage 1..1 MS
* entry[ToxtoMDIMessage].resource 1..
* entry[ToxtoMDIMessage].resource only MessageHeaderToxicologyToMDI
//
* entry contains ToxtoMDIDiagnosticReport 1..1 MS
* entry[ToxtoMDIDiagnosticReport].resource 1..
* entry[ToxtoMDIDiagnosticReport].resource only DiagnosticReportToxicologyToMDI

---

// File: input/fsh/profiles/CompositionMDIAndEDRS.fsh

Profile: CompositionMDIAndEDRS
Parent: Composition
Id: Composition-mdi-and-edrs
Title: "Composition - MDI and EDRS"
Description: "The body of a document exchanged between an MDI CMS and an EDRS for development of a death certificate."
* extension contains ExtensionTrackingNumber named extension-tracking-numbers 0..* MS
* extension[extension-tracking-numbers] ^short = "A tracking number (e.g., case number or file number) assigned by an MDI or other organization to facilitate recognition of common case records across disparate systems"
  * ^definition = "A tracking number (e.g., case number or file number) assigned by an MDI or other organization to facilitate recognition of common case records across disparate systems"
* status MS
* type = $loinc#86807-5
* type MS
  * ^short = "MDI and EDRS (Death administrative information Document)"
  * ^definition = "MDI and EDRS"
* subject 1.. MS
* subject only Reference(PatientVitalRecords)
  * ^short = "The subject of the composition is the decedent."
  * ^definition = "The subject of the composition is the decedent."
* author ..1 MS
* author only Reference(PractitionerVitalRecords)
  * ^short = "Death certifier. If the author is not available, explain using data-absent-reason Extension"
  * ^definition = "Death certifier. If the author is not available, explain using data-absent-reason Extension"
* attester 1..1 MS
  * ^short = "Death certifier. If the attester is not available, explain using data-absent-reason Extension"
  * ^definition = "The certifying Medical Examiner/Coroner (Certifier)"
  * party only Reference(PractitionerVitalRecords)
  * party MS
* section 1.. MS
  * ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
  * ^short = "The Composition is broken into sections that, where possible, align with the sections in the 'Common data elements working document'. If no information for a required section, use emptyReason."
  * ^definition = "The Composition is broken into sections that, where possible, align with the sections in the 'Common data elements working document'."
  * code 1..1

* section contains additional-demographics 0..1
* section[additional-demographics].entry ^slicing.discriminator.type = #profile
* section[additional-demographics].entry ^slicing.discriminator.path = "$this.resolve()"
* section[additional-demographics].entry ^slicing.rules = #open
* section[additional-demographics] ^label = "This slice contains demographic information about the decedent that is not represented in the decedent Patient profile."
  * ^short = "This slice contains demographic information about the decedent that is not represented in the decedent Patient profile."
  * ^definition = "This section contains demographic information about the decedent that is not represented in the decedent Patient profile."
  * code  = MDIcodes#demographics
  * code 1.. MS
    * ^definition = "Demographic information section"
    * text MS
  * text MS
* insert CompositionSectionEntrySlicingMDI(circumstances)
* insert CompositionSectionEntrySlicingMDI(jurisdiction)
* insert CompositionSectionEntrySlicingMDI(cause-manner)
* insert CompositionSectionEntrySlicingMDI(medical-history)
* insert CompositionSectionEntrySlicingMDI(exam-autopsy)
* insert CompositionSectionEntryNoSlicingMDI(narratives)

* section[circumstances] ^label = "This slice contains circumstances of the death."
  * ^short = "This slice contains circumstances of the death."
  * ^definition = "This section contains circumstances of the death."
  * code  = MDIcodes#circumstances
  * code 1.. MS
    * ^definition = "Circumstances of the death section"
  * entry MS
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
    * ^short = "Entries that are contained in the Circumstances section"
    * ^definition = "Entries that are contained in the Circumstances section"
  * emptyReason MS
* insert CompositionSectionSlice(circumstances, death-location, 0, 1,  [[Apparent address where death actually occurred.]],  [[Apparent address where death actually occurred.]], DeathLocation )
* insert CompositionSectionSlice(circumstances, tobacco-use-contributed-to-death, 0, 1,  [[Whether or not tobacco use contributed to death.]],  [[Whether or not tobacco use contributed to death.]], TobaccoUseContributedToDeath )
* insert CompositionSectionSlice(circumstances, decedent-pregnancy, 0, 1,  [[Pregnancy status of the decedent.]],  [[Pregnancy status of the decedent.]], DecedentPregnancyStatus )
* insert CompositionSectionSlice(circumstances, injury-location, 0, 1,  [[Apparent address where injury occurred.]],  [[Apparent address where injury occurred.]], InjuryLocation )

* section[jurisdiction] ^label = "This slice contains jurisdictional information about the death."
  * ^short = "This slice contains jurisdictional information about the death."
  * ^definition = "This section contains jurisdictional information about the death."
  * code = MDIcodes#jurisdiction
  * code 1..1
    * ^definition = "Jurisdiction section"
  * entry MS
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
    * ^short = "Entries that are contained in the Jurisdiction section"
    * ^definition = "Entries that are contained in the Jurisdiction section"
  * emptyReason MS
* insert CompositionSectionSlice(jurisdiction, death-date, 0, 1,  [[The estimated and pronounced date of death, also contains the death pronouncer practitioner.]],  [[The estimated and pronounced date of death, also contains the death pronouncer practitioner.]], DeathDate )
* insert CompositionSectionSlice(jurisdiction, death-certification, 0, 1,  [[The procedure where the certification of death was performed by the certifier.]],  [[The procedure where the certification of death was performed by the certifier.]], DeathCertification )

* section[cause-manner] ^label = "This slice contains information about the cause and manner of death."
  * ^short = "This slice contains information about the cause and manner of death."
  * ^definition = "This section contains information about the cause and manner of death."
  * code 1.. MS
  * code = MDIcodes#cause-manner
    * ^definition = "Cause and manner of death section"
  * entry MS
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
    * ^short = "Entries that are contained in the Cause-Manner section"
    * ^definition = "Entries that are contained in the Cause-Manner section"
  * emptyReason MS
* insert CompositionSectionSlice(cause-manner, cause, 0, 4,  [[Up to 4 lines of cause of death.]],  [[Up to 5 lines of cause of death providing the ordered chain of events with a causal relationship to the decedent’s death.]], MDICauseOfDeathPart1 )
* insert CompositionSectionSlice(cause-manner, other-condition, 0, 1,  [[Other significant conditions contributing to death but not resulting in the underlying cause.]],  [[Other significant conditions contributing to death but not resulting in the underlying cause.]], CauseOfDeathPart2 )
* insert CompositionSectionSlice(cause-manner, manner, 0, 1,  [[Manner of death]],  [[The conclusion arrived at upon completion of death investigation regarding the manner of death.]], MannerOfDeath )
* insert CompositionSectionSlice(cause-manner, how-injury, 0, 1,  [[Certified explanation of how injury occurred.]],  [[Certified explanation of how injury occurred.]], InjuryIncident )

* section[medical-history] ^label = "This slice contains relevant medical history about the decedent."
  * ^short = "This slice contains relevant medical history about the decedent."
  * ^definition = "This section contains relevant medical history about the decedent."
  * code = MDIcodes#medical-history
  * code 1.. MS
    * ^definition = "Medical history section"
  * text MS
    * ^label = "Narrative medical condition"
    * ^short = "Narrative medical condition"
    * ^definition = "Narrative medical condition"
  * entry MS
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
  * emptyReason MS
* insert CompositionSectionSlice(medical-history, history-condition, 0, *,  [[Coded medical conditions.]],  [[Coded medical conditions.]], USCoreConditionEncounterDiagnosisProfile or USCoreConditionProblemsHealthConcernsProfile )

* section[exam-autopsy] ^label = "This slice contains exam and autopsy information."
  * ^short = "This slice contains exam and autopsy information."
  * ^definition = "This section contains exam and autopsy information."
  * code = MDIcodes#exam-autopsy
  * code 1.. MS
    * ^definition = "Exam/Autopsy section"
  * text ..1 MS
    * ^label = "Description of autopsy findings"
    * ^short = "Description of autopsy findings"
    * ^definition = "Description of autopsy findings"
  * entry ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
* insert CompositionSectionSlice(exam-autopsy, autopsy-performed, 0, 1,  [[If autopsy was performed, if autopsy findings are available, and the autopsy Performer.]],  [[If autopsy was performed, if autopsy findings are available, and the autopsy Performer.]], AutopsyPerformedIndicator )
* insert CompositionSectionSlice(exam-autopsy, autopsy-location, 0, 1,  [[If autopsy was performed, location.]],  [[If autopsy was performed, location.]], USCoreOrganizationProfile or USCoreLocation )

* section[narratives] ^label = "This slice contains additional death investigation narrative descriptions."
  * ^short = "This slice contains additional death investigation narrative descriptions."
  * ^definition = "This slice contains additional death investigation narrative descriptions."
  * code = MDIcodes#narratives
  * code 1..1 MS
  * text MS
    * ^label = "Additional death investigation narrative descriptions."
    * ^short = "Additional death investigation narrative descriptions."
    * ^definition = "Additional death investigation narrative descriptions."


---

// File: input/fsh/profiles/CompositionMDIDCR.fsh

Profile: CompositionMDIDCR
Parent: Composition
Id: Composition-mdi-dcr
Title: "Composition - Death Certificate Review"
Description: "The body of a document exchanged between an EDRS and an MDI CMS for a death certificate review for the purpose of death data quality improvement, cremation clearance, or other workflow. It can contain EDRS death certificate structured data."
//
* extension contains ExtensionTrackingNumber named extension-tracking-numbers 0..*
* extension[extension-tracking-numbers] 
  * ^short = "A tracking number (e.g., case number or file number) assigned by an EDRS or other organization to facilitate recognition of common case records across disparate systems"
  * ^definition = "A tracking number (e.g., case number or file number) assigned by an EDRS or other organization to facilitate recognition of common case records across disparate systems"
//
* extension contains ExtensionDeathCertificateStatus named extension-death-certificate-status 0..*
* extension[extension-death-certificate-status] 
  * ^short = "Death Certificate workflow status"
  * ^definition = "Death Certificate workflow status"
//
* extension contains ExtensionCremationClearanceStatus named extension-cremation-clearance-status 0..1
* extension[extension-cremation-clearance-status] ^short = "Status of the Cremation Clearance (e.g., requested, pending, rejected, approved). Expected to be Requested in Cremation Clearance Request."
  * ^definition = "Status of the Cremation Clearance (e.g., requested, pending, rejected, approved)"
//
* extension contains ExtensionMECertificationAffirmation named extension-me-certification-affirmation 0..1
* extension[extension-me-certification-affirmation] ^short = "Indicates whether the Medical Examiner certification has been affirmed or not"
  * ^definition = "Indicates whether the Medical Examiner certification has been affirmed or not"
//
* extension contains ExtensionCremationClearanceCoroner named extension-cremation-clearance-coroner 0..1
* extension[extension-cremation-clearance-coroner] ^short = "Indicates whether the Cremation Clearance is a Coroner workflow or not"
  * ^definition = "Indicates whether the Cremation Clearance is a Cononer workflow or not"
//
* extension contains ExtensionCremationClearanceSignature named extension-cremation-clearance-signature 0..1
* extension[extension-cremation-clearance-signature] ^short = "Indicates whether the Cremation Clearance has been signed or not. Expected to be unsigned in Cremation Clearance Request."
  * ^definition = "Indicates whether the Cremation Clearance has been signed or not"
//
* subject 1..1
* subject only Reference(Decedent)
//
* section ^slicing.discriminator.type = #value
* section ^slicing.discriminator.path = "code"
* section ^slicing.rules = #open
* section.code 1..1
//
* section contains DecedentDemographics 0..1
* section[DecedentDemographics] 
  * ^label = "DecedentDemographics section from VRDR Death Certificate Composition for review"
  * ^short = "DecedentDemographics section from VRDR Death Certificate Composition for review"
  * ^definition = "DecedentDemographics section from vrdr-death-certificate"
  * code  = DocumentSectionCS#DecedentDemographics
  * code 1..
  * entry
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
* insert CompositionSectionSlice(DecedentDemographics, Decedent, 1, 1, Decedent, Decedent, Decedent)
* insert CompositionSectionSlice(DecedentDemographics, Father,  0, 1, DecedentFather, DecedentFather, DecedentFather)
* insert CompositionSectionSlice(DecedentDemographics, Mother,  0, 1, DecedentMother, DecedentMother, DecedentMother)
* insert CompositionSectionSlice(DecedentDemographics, Spouse,  0, 1, DecedentSpouse, DecedentSpouse, DecedentSpouse)
* insert CompositionSectionSlice(DecedentDemographics, Age,  0, 1, DecedentAge, DecedentAge, DecedentAge)
* insert CompositionSectionSlice(DecedentDemographics, BirthRecordID,  0, 1, BirthRecordIdentifier, BirthRecordIdentifier, BirthRecordIdentifier)
* insert CompositionSectionSlice(DecedentDemographics, FetalDeathRecordID,  0, 1, FetalDeathRecordIdentifier, FetalDeathRecordIdentifier, FetalDeathRecordIdentifier)
* insert CompositionSectionSlice(DecedentDemographics, BirthRecordIDChild,  0, 1, BirthRecordIdentifierChild, BirthRecordIdentifierChild, BirthRecordIdentifierChild)
* insert CompositionSectionSlice(DecedentDemographics, EducationLevel,  0, 1, DecedentEducationLevel, DecedentEducationLevel, DecedentEducationLevel)
* insert CompositionSectionSlice(DecedentDemographics, MilitaryService,  0, 1, DecedentMilitaryService, DecedentMilitaryService, DecedentMilitaryService)
* insert CompositionSectionSlice(DecedentDemographics, UsualWork,  0, 1, DecedentUsualWork, DecedentUsualWork, DecedentUsualWork)
* insert CompositionSectionSlice(DecedentDemographics, EmergingIssues,  0, 1, EmergingIssues, EmergingIssues, ObservationEmergingIssuesVitalRecords)
* insert CompositionSectionSlice(DecedentDemographics, InputRaceAndEthnicity,  0, 1, InputRaceAndEthnicity, InputRaceAndEthnicity, ObservationInputRaceAndEthnicityVitalRecords)
//
* section contains DeathInvestigation 0..1
* section[DeathInvestigation] 
  * ^label = "DeathInvestigation section from VRDR Death Certificate Composition for review"
  * ^short = "DeathInvestigation section from VRDR Death Certificate Composition for review"
  * ^definition = "DeathInvestigation section from vrdr-death-certificate"
  * code  = DocumentSectionCS#DeathInvestigation
  * code 1..
  * entry
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
* insert CompositionSectionSlice(DeathInvestigation, ExaminerContacted, 0, 1, ExaminerContacted, ExaminerContacted, ExaminerContacted)
* insert CompositionSectionSlice(DeathInvestigation, PregnancyStatus, 0, 1, DecedentPregnancyStatus, DecedentPregnancyStatus, DecedentPregnancyStatus)
* insert CompositionSectionSlice(DeathInvestigation, TobaccoUse,  0, 1, TobaccoUse, TobaccoUse, TobaccoUseContributedToDeath)
* insert CompositionSectionSlice(DeathInvestigation, DeathLocation,  0, 1, Death Location, Death Location, DeathLocation)
* insert CompositionSectionSlice(DeathInvestigation, InjuryLocation,  0, 1, Injury  Location, Injury Location, InjuryLocation)
* insert CompositionSectionSlice(DeathInvestigation, InjuryIncident,  0, 1, InjuryIncident, InjuryIncident, InjuryIncident)
* insert CompositionSectionSlice(DeathInvestigation, Autopsy,  0, 1, AutopsyPerformedIndicator, AutopsyPerformedIndicator, AutopsyPerformedIndicator)
* insert CompositionSectionSlice(DeathInvestigation, DeathDate,  0, 1, DeathDate, DeathDate, DeathDate)
* insert CompositionSectionSlice(DeathInvestigation, SurgeryDate,  0, 1, SurgeryDate, SurgeryDate, SurgeryDate)
//
* section contains DeathCertification 0..1
* section[DeathCertification] 
  * ^label = "DeathCertification section from VRDR Death Certificate Composition for review"
  * ^short = "DeathCertification section from VRDR Death Certificate Composition for review"
  * ^definition = "DeathCertification section from vrdr-death-certificate"
  * code  = DocumentSectionCS#DeathCertification
  * code 1..
  * entry
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
* insert CompositionSectionSlice(DeathCertification, Certifier,  0, 1, Certifier, Certifier, PractitionerVitalRecords)
* insert CompositionSectionSlice(DeathCertification, DeathCertification,  0, 1, DeathCertification, DeathCertification, DeathCertification)
* insert CompositionSectionSlice(DeathCertification, MannerOfDeath,  0, 1, MannerOfDeath, MannerOfDeath, MannerOfDeath)
* insert CompositionSectionSlice(DeathCertification, CauseOfDeathPart1,  0, 4, CauseOfDeathPart1, CauseOfDeathPart1, CauseOfDeathPart1)
* insert CompositionSectionSlice(DeathCertification, CauseOfDeathPart2,  0, 1, CauseOfDeathPart2, CauseOfDeathPart2, CauseOfDeathPart2)
//
* section contains DecedentDisposition 0..1
* section[DecedentDisposition] 
  * ^label = "DecedentDisposition section from VRDR Death Certificate Composition for review"
  * ^short = "DecedentDisposition section from VRDR Death Certificate Composition for review"
  * ^definition = "DecedentDisposition section from vrdr-death-certificate"
  * code  = DocumentSectionCS#DecedentDisposition
  * code 1..
  * entry
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
* insert CompositionSectionSlice(DecedentDisposition, DispositionLocation,  0, 1, DispositionLocation, DispositionLocation, DispositionLocation)
* insert CompositionSectionSlice(DecedentDisposition, FuneralHome,  0, 1, FuneralHome, FuneralHome, FuneralHome)
* insert CompositionSectionSlice(DecedentDisposition, DispositionMethod,  0, 1, DispositionMethod, DispositionMethod, DecedentDispositionMethod)
* insert CompositionSectionSlice(DecedentDisposition, Mortician,  0, 1, Mortician, Mortician, Mortician)
//
* section contains Death-Certificate-data-review 0..1
* section[Death-Certificate-data-review] 
  * ^label = "Death Certificate Data Review Results Section"
  * ^short = "Death Certificate Data Review Results Section"
  * ^definition = "Death Certificate Data Review Results Section"
  * code  = MDIcodes#Death-Certificate-data-review
  * code 1..
  * entry
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
* insert CompositionSectionSlice(Death-Certificate-data-review, med-info-quality-review, 0, 1,  [[Medical information data quality review status]],  [[Medical information data quality review status]], ObservationMedicalInformationDataQuality )
* insert CompositionSectionSlice(Death-Certificate-data-review, personal-info-quality-review, 0, 1,  [[Personal information data quality review status]],  [[Personal information data quality review status]], ObservationPersonalInformationDataQuality )
//
// Removed option for authorizing agent to be or USCorePractitionerProfile or USCoreOrganizationProfile
* section contains cremation-clearance-info 0..1
* section[cremation-clearance-info] 
  * ^label = "Cremation Clearance information"
  * ^short = "Cremation Clearance information"
  * ^definition = "cremation-clearance-info"
  * code  = MDIcodes#cremation-clearance-info
  * code 1..
  * entry
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "$this.resolve()"
    * ^slicing.rules = #open
* insert CompositionSectionSlice(cremation-clearance-info, authorizing-agent, 0, 1,  [[Individual authorizing cremation, often next-of-kin]],  [[Individual authorizing cremation, often next-of-kin]], USCoreRelatedPersonProfile)
* insert CompositionSectionSlice(cremation-clearance-info, embalmed, 0, 1,  [[Was body embalmed?]],  [[Was body embalmed?]], ObservationEmbalmed )
* insert CompositionSectionSlice(cremation-clearance-info, communicable-disease, 0, 1,  [[Did Decedent have a communicable disease?]],  [[Did Decedent have a communicable disease?]], ObservationCommunicableDisease )
* insert CompositionSectionSlice(cremation-clearance-info, cause-of-death-certifier, 0, 1,  [[Death Certificate certifier, often attending physician]],  [[Death Certificate certifier, often attending physician]], Certifier )
* insert CompositionSectionSlice(cremation-clearance-info, funeral-home, 0, 1,  [[Funeral home]],  [[Funeral home]], FuneralHome )
* insert CompositionSectionSlice(cremation-clearance-info, mortician, 0, 1,  [[Mortician]],  [[Mortician]], Mortician )
* insert CompositionSectionSlice(cremation-clearance-info, crematorium, 0, 1,  [[Crematorium]],  [[Crematorium]], OrganizationCrematorium )

---

// File: input/fsh/profiles/DiagnosticReportToxicologyToMDI.fsh

Profile: DiagnosticReportToxicologyToMDI
Parent: USCoreDiagnosticReportProfileLaboratoryReporting
Id: DiagnosticReport-toxicology-to-mdi
Title: "DiagnosticReport - Toxicology Lab Result to MDI"

Description: "The findings and interpretation of diagnostic tests performed during a death investigation and sent from a forensic toxicology laboratory information management system (LIMS) to an MDI CMS. Each analyzed specimen, represented by a Specimen - Toxicology Lab resource, must be referenced by at least one Observation - Toxicology Lab Result and may be referenced by more than one Observation - Toxicology Lab Result. For specimens received but not analyzed, the laboratory should provide a reason for no analysis in the DiagnosticReport.conclusion and/or each unanalyzed specimen’s Specimen - Toxicology Lab Specimen.note."

* extension only ExtensionTrackingNumber
* extension MS
  * ^short = "A tracking number, such as a case number or file number assigned by a case management system or EDRS."
  * ^definition = "A tracking number, such as a case number or file number assigned by a case management system or EDRS, and can represent other tracking numbers, if required."
* subject MS
  * ^short = "The subject of the diagnostic report is the decedent."
  * ^definition = "The subject of the diagnostic report is the decedent."
* issued MS
* performer only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile)
* performer MS
* specimen ..* MS
* specimen only Reference(SpecimenToxicologyLab)
  * ^short = "The specimen sent by a Medical Examiner, Coroner, or autopsy performer to the toxicology lab for analysis."
  * ^definition = "The specimen sent by a Medical Examiner, Coroner, or autopsy performer to the toxicology lab for analysis."
* result only Reference(ObservationToxicologyLabResult)
* result MS
  * ^short = "The toxicology lab analysis results being reported."
  * ^definition = "The toxicology lab analysis results being reported."
* conclusion MS

---

// File: input/fsh/profiles/DocumentReferenceMDIReport.fsh

Profile: DocumentReferenceMDIReport
Parent: USCoreDocumentReferenceProfile
Id: DocumentReference-mdi-report
Title: "DocumentReference - MDI Report"
Description: "A reference to a death investigation document, such as an Autopsy Report or Investigator’s Narrative. The content may be included as inline base64 encoded data or be provided by direct reference (e.g., URL). The document type is required and is constrained by US Core to a LOINC value whose SCALE is DOC in the LOINC database or is the HL7 v3 Code System NullFlavor concept ‘unknown’."
* status MS
* type ^short = "If LOINC code for type is not available, use HL7 v3 Code System NullFlavor (http://terminology.hl7.org/CodeSystem/v3-NullFlavor) code=UNK, display=unknown 'unknown'."
* category ^short = "Reference a terminology (code system & code) or use text to describe the document category. A category is required, so if none is available use NullFlavor Other code and describe category in text"
* category.text ^short = "If no system/code is available, use NullFLavor Other code, and describe the document category in text"

---

// File: input/fsh/profiles/MDICauseOfDeathPart1.fsh

/*
This MDI profile constrains the VRDR profile CauseOfDeathPart1 
*/
Profile: MDICauseOfDeathPart1
Parent: CauseOfDeathPart1
Id: Observation-mdi-cause-of-death-part1
Title: "MDI Cause Of Death Part 1"
Description: "The MDI Cause of Death Part 1 (Observation) profile places constraints on the VRDR Cause of Death Part 1 (Observation) profile, which reflects the ordered causes of death asserted by the death certifier. The cause of death is initially specified with text. Line number can be 1-4. For the MDI use case, a cause of death certifier (coroner or medical examiner) is required in the performer data element, with the option of using a data-absent-reason."
* performer 1..1
  * ^label = "Cause of death certifier (coroner or medical examiner). If the certifier is not available, explain using data-absent-reason Extension."
  * ^short = "Cause of death certifier (coroner or medical examiner). If the certifier is not available, explain using data-absent-reason Extension."
* performer.extension contains DataAbsentReason named data-absent-reason 0..1 MS
* performer.extension[data-absent-reason] ^short = "data-absent-reason"
* component[interval] 1..1  





---

// File: input/fsh/profiles/MessageHeaderDCR.fsh

Profile: MessageHeaderDCR
Parent: MessageHeader
Id: MessageHeader-death-certificate-review
Title: "MessageHeader - Death Certificate Review"
Description: "Identification of a Bundle - Document Death Certificate Review being sent in a message between an EDRS and an MDI CMS."

* ^status = #active
* . ^short = "Identifies a Death Certificate Review document bundle and additional review information."
  * ^definition = "Identifies a Death Certificate Review document bundle and additional review information."

//
* event[x] only Coding
* event[x] = MDIcodes#death-certificate-review
* event[x]
  * ^short = "Death Certificate Review"
* reason 1..1
* reason only CodeableConcept 
* reason from VSDCRreasonEx (example)
* focus 1..1
* focus only Reference(BundleDocumentMDIDCR)
  * ^short = "The focus of this message header is the Bundle - Document Death Certificate Review."
  * ^definition = "The focus of this message header is the Bundle - Document Death Certificate Review."


---

// File: input/fsh/profiles/MessageHeaderToxicologyToMDI.fsh

Profile: MessageHeaderToxicologyToMDI
Parent: MessageHeader
Id: MessageHeader-toxicology-to-mdi
Title: "MessageHeader - Toxicology to MDI"
Description: "Identification of a DiagnosticReport - Toxicology Lab Result to MDI being sent in a message from a forensic toxicology laboratory information system to an MDI CMS."

* ^status = #active
* . ^short = "Identifies the DiagnosticReport being sent from a toxicology lab information system to an MDI case management system."
  * ^definition = "Identifies the DiagnosticReport being sent from a toxicology lab information system to an MDI case management system."
* event[x] only Coding
* event[x] = MDIcodes#tox-result-report
* event[x] MS
  * ^short = "Toxicology Lab Results"
* focus 1..1 MS
* focus only Reference(DiagnosticReportToxicologyToMDI)
  * ^short = "The focus of this message header is the DiagnosticReport."
  * ^definition = "The focus of this message header is the DiagnosticReport."

---

// File: input/fsh/profiles/ObservationCommunicableDisease.fsh

Profile: ObservationCommunicableDisease
Parent: Observation
Id: Observation-communicable-disease
Title: "Observation - Communicable Disease"
Description: "Observation indicating if the decedent body harbors a communicable disease."
* code only CodeableConcept
* code = MDIcodes#CommunicableDisease
  * ^short = "Communicable Disease Observation"
* subject 1..1
* subject only Reference(Decedent)
* value[x] 1..1
* value[x] only boolean or CodeableConcept

---

// File: input/fsh/profiles/ObservationEmbalmed.fsh

Profile: ObservationEmbalmed
Parent: Observation
Id: Observation-embalmed
Title: "Observation - Embalmed"
Description: "Observation indicating if the decedent body was embalmed."
* code only CodeableConcept
* code = MDIcodes#Embalmed
  * ^short = "Embalmed Observation"
* subject 1..1
* subject 1..1
* subject only Reference(Decedent)
* value[x] only boolean or CodeableConcept
* note MS


---

// File: input/fsh/profiles/ObservationMedicalInformationDataQuality.fsh

Profile: ObservationMedicalInformationDataQuality
Parent: Observation
Id: Observation-medical-information-data-quality
Title: "Observation - Medical Information Data Quality"
Description: "Observation describing the medical information data quality findings that result from a death certificate review. The value[x] (CodeableConcept) is the medical information data quality review conclusion. Use the Observation.note for details."
* code only CodeableConcept
* code = MDIcodes#MedicalInformationDataQuality
  * ^short = "Medical Information Data Quality Observation"
* subject 1..1
* subject only Reference(Decedent)
* focus 1..1
* focus only Reference(DeathCertificate)
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from VSMedDQReviewEx (example)
  * ^short = "Medical information data quality review conclusion."
* note MS

---

// File: input/fsh/profiles/ObservationPersonalInformationDataQuality.fsh

Profile: ObservationPersonalInformationDataQuality
Parent: Observation
Id: Observation-personal-information-data-quality
Title: "Observation - Personal Information Data Quality"
Description: "Observation describing the personal information data quality findings that result from a death certificate review. The value[x] (CodeableConcept) is the personal information data quality review conclusion. Use the Observation.note for details."
* code only CodeableConcept
* code = MDIcodes#PersonalInformationDataQuality
  * ^short = "Personal Information Data Quality Observation"
* subject 1..1
* subject only Reference(Decedent)
* focus 1..1
* focus only Reference(DeathCertificate)
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from VSPerDQReviewEx (example)
  * ^short = "Personal information data quality review conclusion."
* note MS

---

// File: input/fsh/profiles/ObservationToxicologyLabResult.fsh

Profile: ObservationToxicologyLabResult
Parent: USCoreLaboratoryResultObservationProfile
Id: Observation-toxicology-lab-result
Title: "Observation - Toxicology Lab Result"
Description: "Forensic toxicology laboratory test result from analysis of a specimen sent by a Medical Examiner, Coroner, or autopsy performer to the laboratory."
* code
  * coding MS
  * text 1.. MS
* value[x] ..1 MS
* value[x] only string
* note MS
* specimen only Reference(SpecimenToxicologyLab)
* specimen MS

---

// File: input/fsh/profiles/OrganizationCrematorium.fsh

Profile: OrganizationCrematorium
Parent: USCoreOrganizationProfile
Id: Organization-crematorium
Title: "Organization - Crematorium"
Description: "Crematorium"
* type 1..1
* type = MDIcodes#crematorium // "Crematorium"
* name 1..1
* name ^short = "Crematorium Name"
* address ^short = "Crematorium Address"

---

// File: input/fsh/profiles/SpecimenToxicologyLab.fsh

Profile: SpecimenToxicologyLab
Parent: Specimen
Id: Specimen-toxicology-lab
Title: "Specimen - Toxicology Lab"
Description: "Identification and description of a specimen sent by a Medical Examiner, Coroner, or autopsy performer to a toxicology lab for analysis. For specimens received but not analyzed, the laboratory should provide a reason for no analysis in the DiagnosticReport.conclusion and/or each unanalyzed specimen’s Specimen - Toxicology Lab Specimen.note. The laboratory may use the Specimen.condition to describe the state of the specimen via codes from the extensible value set hl7VS-specimenCondition and/or use the Specimen.note to describe details or issues about the specimen."
* ^status = #active
* . ^short = "The specimen sent by a Medical Examiner, Coroner, or autopsy performer to a toxicology lab for analysis."
  * ^definition = "The specimen sent by a Medical Examiner, Coroner, or autopsy performer to a toxicology lab for analysis."
* identifier MS
  * ^short = "System-generated identifier for this Specimen."
  * ^definition = "System-generated identifier for this Specimen."
* accessionIdentifier MS
* type 1.. MS
  * ^short = "Type of tissue or material"
  * ^definition = "Type of tissue or material (blood, etc.)."
  * coding MS
  * text 1.. MS
* subject ..1 MS
* subject only Reference(USCorePatientProfile)
  * ^short = "The subject is the decedent."
  * ^definition = "The subject is the decedent."
* receivedTime MS
  * ^label = "Time when specimen was received by the forensic toxicology lab for processing"
  * ^short = "Time when specimen was received by the forensic toxicology lab for processing"
* parent only Reference(SpecimenToxicologyLab)
* parent MS
* collection MS
  * collected[x] MS
    * ^label = "Time collected from either the body or the scene"
    * ^short = "Time collected from either the body or the scene"
* processing MS
  * time[x] MS
* container
  * identifier MS
  * description 1..
  * additive[x] MS
* condition MS
* note MS
  * ^label = "Details or issues about the specimen or reason for no analysis"
  * ^short = "Details or issues about the specimen or reason for no analysis"

---

// File: input/fsh/rulesets/DEF_CapStmt_RuleSets.fsh


Alias: $exp = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation

RuleSet: SupportResource (resource, expectation)
* resource[+].type = #{resource}
* resource[=].extension[0].url = $exp
* resource[=].extension[0].valueCode = {expectation}

RuleSet: SupportProfile (profile, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* resource[=].supportedProfile[+] = "{profile}"
* resource[=].supportedProfile[=].extension[0].url = $exp
* resource[=].supportedProfile[=].extension[0].valueCode = {expectation}

RuleSet: SupportInteraction (interaction, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* resource[=].interaction[+].code = {interaction}
* resource[=].interaction[=].extension[0].url = $exp
* resource[=].interaction[=].extension[0].valueCode = {expectation}

RuleSet: SupportSearchParam (name, canonical, type, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* resource[=].searchParam[+].name = "{name}"
* resource[=].searchParam[=].definition = "{canonical}"
* resource[=].searchParam[=].type = {type}
* resource[=].searchParam[=].extension[0].url = $exp
* resource[=].searchParam[=].extension[0].valueCode = {expectation}

RuleSet: SupportOperation (name, canonical, expectation)
// This rule set must follow a SupportResource rule set, and applies to that resource.
* resource[=].operation[+].name = "{name}"
* resource[=].operation[=].definition = "{canonical}"
* resource[=].operation[=].extension[0].url = $exp
* resource[=].operation[=].extension[0].valueCode = {expectation}

---

// File: input/fsh/rulesets/DEF_Rulesets.fsh

RuleSet: CompositionSectionEntryNoSlicingMDI(section)
* section contains {section} 0..1
* section[{section}].code = MDIcodes#{section}
* section[{section}] ^label = "{section}"
* section[{section}] ^short = "{section}"

RuleSet: CompositionSectionEntrySlicingMDI(section)
* section contains {section} 0..1
* section[{section}].code = MDIcodes#{section}
* section[{section}] ^label = "{section}"
* section[{section}] ^short = "{section}"
* section[{section}].entry ^slicing.discriminator.type = #profile
* section[{section}].entry ^slicing.discriminator.path = "$this.resolve()"
* section[{section}].entry ^slicing.rules = #open

RuleSet: CompositionSectionEntrySlicingVRDR(section)
* section contains {section} 0..1
* section[{section}].code = DocumentSectionCS#{section}
* section[{section}] ^label = "{section}"
* section[{section}] ^short = "{section}"
* section[{section}].entry ^slicing.discriminator.type = #profile
* section[{section}].entry ^slicing.discriminator.path = "$this.resolve()"
* section[{section}].entry ^slicing.rules = #open

RuleSet: CompositionSectionSlice(section, name, min, max, short, def, class)
* section[{section}].entry contains {name} {min}..{max}
* section[{section}].entry[{name}] ^short = "{short}"
* section[{section}].entry[{name}] ^definition = "{def}"
* section[{section}].entry[{name}] only Reference({class})

RuleSet: addentry(type, id)
* entry[+].resource = {id}
* entry[=].fullUrl = "http://www.example.org/fhir/{type}/{id}"

RuleSet: addentryComposition(type, id)
* entry[+].reference = "{type}/{id}"

RuleSet: addNamedEntryComposition(name, type, id)
* entry[{name}][+].reference = "{type}/{id}"

RuleSet: addReferenceComposition (field, type, id)
* {field}.reference = "{type}/{id}"

---

// File: input/fsh/valuesets/VSCCObservationsEx.fsh

ValueSet: VSCCObservationsEx
Id: vs-cremation-clearance-observations-example
Title: "ValueSet - Cremation Clearance Observations example"
Description: "This value set contains example codes for Cremation Clearance Observations."
* ^status = #active
* ^experimental = false

// Example Observation codes related to the Decedent
* DeathCertReviewExample#Embalmed "Embalmed Observation"
* DeathCertReviewExample#CommunicableDisease "Communicable Disease Observation"

// Example Observation codes related to the Death Certificate review
* DeathCertReviewExample#CertifiedWorkflow "Certified Workflow Observation"
* DeathCertReviewExample#Registration "Registration Observation"
* DeathCertReviewExample#MedicalInformationDataQuality "Medical Information Data Quality Observation"
* DeathCertReviewExample#PersonalInformationDataQuality "Personal Information Data Quality Observation"

// Example Observation codes related to the Cremation Clearance 
* DeathCertReviewExample#MECertificationAffirmation "Medical Examiner Certification Affirmation Observation"
* DeathCertReviewExample#CoronerWorkflow "Coroner Workflow Observation"
* DeathCertReviewExample#SignedWorkflow "Signed Workflow Observation"

---

// File: input/fsh/valuesets/VSCCSignedEx.fsh

ValueSet: VSCCSignedEx
Id: vs-cremation-clearance-signed-example
Title: "ValueSet - Cremation Clearance Signed example"
Description: "This value set contains example codes for the signature status of the Cremation Clearance."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#CREM_C_SIGNED "Signed"
* DeathCertReviewExample#CREM_C_UNSIGNED "Unsigned"

---

// File: input/fsh/valuesets/VSCCStatusEx.fsh

ValueSet: VSCCStatusEx
Id: vs-cremation-clearance-status-example
Title: "ValueSet - Cremation Clearance Status example"
Description: "This value set contains example codes for Cremation Clearance status."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#CREM_C_REQUEST "Requested"
* DeathCertReviewExample#CREM_C_PENDING "Pending"
* DeathCertReviewExample#CREM_C_REJECTED "Rejected"
* DeathCertReviewExample#CREM_C_APPROVED "Approved"

---

// File: input/fsh/valuesets/VSCertifiedWorkflowEx.fsh

ValueSet: VSCertifiedWorkflowEx
Id: vs-certified-workflow-example
Title: "ValueSet - Certified Workflow example"
Description: "This value set contains example codes for Death Certificate certification workflow status."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#DEATH_CERT_CERT "Certified"
* DeathCertReviewExample#DEATH_CERT_NOT_CERT "Not Certified"

---

// File: input/fsh/valuesets/VSDCRObservationsEx.fsh

ValueSet: VSDCRObservationsEx
Id: vs-death-certificate-review-observations-example
Title: "ValueSet - Death Certificate Review Observations example"
Description: "This value set contains example codes for Death Certificate Review Observations."
* ^status = #active
* ^experimental = false

// Example Observation codes related to the Decedent
* DeathCertReviewExample#Embalmed "Embalmed Observation"
* DeathCertReviewExample#CommunicableDisease "Communicable Disease Observation"

// Example Observation codes related to the Death Certificate review
* DeathCertReviewExample#CertifiedWorkflow "Certified Workflow Observation"
* DeathCertReviewExample#Registration "Registration Observation"
* DeathCertReviewExample#MedicalInformationDataQuality "Medical Information Data Quality Observation"
* DeathCertReviewExample#PersonalInformationDataQuality "Personal Information Data Quality Observation"

// Example Observation codes related to the Cremation Clearance 
* DeathCertReviewExample#MECertificationAffirmation "Medical Examiner Certification Affirmation Observation"
* DeathCertReviewExample#CoronerWorkflow "Coroner Workflow Observation"
* DeathCertReviewExample#SignedWorkflow "Signed Workflow Observation"

---

// File: input/fsh/valuesets/VSDCRreasonEx.fsh

ValueSet: VSDCRreasonEx
Id: vs-dcr-reason-example
Title: "ValueSet - Death Certificate Review Reason example"
Description: "This value set contains example codes for the reason for a death certificate review."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#CREM_C_REQUEST "Cremation Clearance Request"



---

// File: input/fsh/valuesets/VSEmablmedEx.fsh

ValueSet: VSEmablmedEx
Id: vs-embalmed-example
Title: "ValueSet - Embalmed example"
Description: "This value set contains example codes for embalmed status of the Decedent."
* ^status = #active
* ^experimental = false
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* $sct#371646003 "Embalmed body"



---

// File: input/fsh/valuesets/VSMECertAffirmationEx.fsh

ValueSet: VSMECertAffirmationEx
Id: vs-me-cert-affirmation-example
Title: "ValueSet - Medical Examiner Certification Affirmation example"
Description: "This value set contains example codes for the status of Medical Examiner Certification Affirmation."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#ME_AFFIRM_CERTIFICATION_AFFIRMED "ME Certification Affirmation Affirmed"
* DeathCertReviewExample#ME_AFFIRM_CERTIFICATION_NOT_AFFIRMED "ME Certification Affirmation Not Affirmed"

---

// File: input/fsh/valuesets/VSMedDQReviewEx.fsh

ValueSet: VSMedDQReviewEx
Id: vs-med-dq-review-example
Title: "ValueSet - Medical Data Quality Review example"
Description: "This value set contains example codes for medical data quality review."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#MED_INF_DQ_MEDICAL_VALID "Medical Data Valid"
* DeathCertReviewExample#MED_INF_DQ_MEDICAL_VALID_WITH_EXCEPTIONS "Medical Data Valid With Exceptions"
* DeathCertReviewExample#MED_INF_DQ_MEDICAL_INVALID "Medical Data Not Invalid"

---

// File: input/fsh/valuesets/VSPerDQReviewEx.fsh

ValueSet: VSPerDQReviewEx
Id: vs-per-dq-review-example
Title: "ValueSet - Personal Data Quality Review example"
Description: "This value set contains example codes for personal data quality review."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#PER_INF_DQ_PERSONAL_VALID "Personal Valid"
* DeathCertReviewExample#PER_INF_DQ_PERSONAL_VALID_WITH_EXCEPTIONS "Personal Valid With Exceptions"
* DeathCertReviewExample#PER_INF_DQ_PERSONAL_INVALID "Personal Invalid"

---

// File: input/fsh/valuesets/VSRegistrationEx.fsh

ValueSet: VSRegistrationEx
Id: vs-registration-example
Title: "Registration example"
Description: "This value set contains example codes for Death Certificate registration status."
* ^status = #active
* ^experimental = false
* DeathCertReviewExample#DEATH_CERT_REG "Registered"
* DeathCertReviewExample#DEATH_CERT_NOT_REG "Not Registered"


---

// File: input/fsh/valuesets/VSTrackingNumberType.fsh

ValueSet: VSTrackingNumberType
Id: vs-tracking-number-type
Title: "Tracking Number Type"
Description: "Type of tracking number"
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2023-04-14T19:13:21.832+00:00"
* ^meta.source = "#YbS8tk1sFzfTLrQI"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* MDIcodes#mdi-case-number "MDI Case Number"
* MDIcodes#edrs-file-number "EDRS File Number"
* MDIcodes#tox-lab-case-number "Toxicology Laboratory Case Number"

---

